/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4TnvBAn3RxefrbnE5kLjYyNpTy5ojcANJFYvuWaUiqoFc8NmxkAPr8FjtyhmnBqdxymzDQZvK1unp6czgMMjHkbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4haVNfp7AEUV9CbyuiMibHEa7swfmpAsdaQMoWrTY3t5kejn3PRzDth2RcorbaUzH1MJKu4kre1vQJiyng7WcRnh",
  "key1": "2C5bER4tPKQkZ9kpgbZs8ewRXVoneUMRmfrvyMdRU1mWd5w3YSTKY8zEnQAj7yfeqaTVdyAGKCqxbqunf53uShnJ",
  "key2": "mksaqFyKGw263iLo6337eEgGVERkPgXZ93pvnuk4HHWnboUVWtMQKHN1W2J5vxkX9zvvRY35JnhaGU8DwXFWaCo",
  "key3": "3UUPpW9DzH8qqayugwLoJVyPiduiYrNLoCH55oRXhLvTGhcdXMuwEiUVXcveGnchLMUDX86uQLAj6d8DZaTmrst3",
  "key4": "25TAj4daaVpigS5wEJs3ndNfcDWUryHFKbNcWcShnWFQDrTVKJUMjVey4TiT1xnGo2W8j5Ju9jRtgDiy3EeCE48p",
  "key5": "3X8k2hNshqSr9jib2PHnLiiJRUXUeLmZzjAi61iFJEUcxF3wLmD1UEyLb7qAh4UFM9gYUqhLdZLh3U9PYXy987KB",
  "key6": "76SU7CYH2jfDZE29Aw8vrUJXyCcAoPPKiNsD5hstZH3iyyW52Qd6nXKZsqTGegydPaAaNw5JaPMvuskQgAxz63Z",
  "key7": "5m1yY7jAP6aB5qJPuJUEqKLxTJUu6o3Dhdb4f4LkCKHJFdhf9idAkSJLuKoCvfsTcUTQoBga18shoNFiPvqbQJwz",
  "key8": "4whgdbzJTYA9guSZsAhbfxbXP43zgMWVyBQCZQVcjpTYMCjXMSdFTGeghUCVnQTZNknMtVRawi6UTENAhVWABFp3",
  "key9": "4Da6475SaDsLPJSyjBPGeTKuovt8vSV9c52ZVAKsEPeEsvsbLHNEhKjxBMaAQtvXW5qmjvi33VTK5FHuNXxjfikW",
  "key10": "9aprgCc3fXVpuW4pFhMcZmAm418gU3mT38S3Tfe5kTr3TTZP4d3vXBi8JmVpNW42xckdSvvVukpNWbM8kxVjiV3",
  "key11": "xVjEZmo9kQvBKZbLEKeBXu2i7bjU5GeQQ1sa95PyXBPH9gytpxvdPaH5mfM7dbP6hLFEbFphLRF9vbeoSi89cb2",
  "key12": "5WWxugnEVgYbWckykh9UuqU2xJBm2xUog9F3i2MRWEZe6fvAGjW3diY5zGAbiRro31jpQjk6miDkdHRTdcVLe2VX",
  "key13": "4kET2gZYytgjVcMYQeC13Yc8REmNZi52rBdanBL4rpQj5rDckVcMe2KCo3MC5wz97hbK4CZKzuwiTH4mfTme7PKQ",
  "key14": "mvEsNL33hKxALYxjuvHPJj2raUYuriSdrhZ4uCfWrZ4rUkAcRHQNgZTGA9qCLHoYmBxnTPwg7CQjHBVYBaYPT5a",
  "key15": "2zyuoHaH14R73fET6PeAKtAEYN2PKMW1izQGzFFLqZAX28b5H7Gksb1DoBqakW5KB2mvs5dgSeeanfZqzofFuNzQ",
  "key16": "op3bhNZcV2cpRSz1F4eKGppHnP5KYV8sn9zY9a8TpM9dj9ceE4co4VSA9SrVYRLjXUTcEDJFEZhbyLs7tQqeHeP",
  "key17": "2USpZhYJXD9hqhxtUwhcsTr765cAwjv9YCze9pEFLwvfZg2Z7JCCRu3soCJ1innxwLRUdNve6iuAMUp98f2wQGhk",
  "key18": "3VHJZ67rcTbq66DF3VYXeF9B6nm5Xof76xCqfp7X2qr5oXqDuMWPrAFXxGhgfDTnjKnAXGFwMWf54PXYNhKfsiaR",
  "key19": "4GpNzLdECF9Eco4uip2TVz8T3rfwSQYVRy2HzEv432sWBHpQKt39hJ3Zi7tbwM3mXGMcUBzerEP9WJBhwuNi1grc",
  "key20": "4P1MHxFEKYBjDv7FV7p7LQNcTdDcJyuRcoZrH2DmgeHtC7Wp2WnricRkLoPwdtUNk6tMBDEsahyrz2DWgAGc3hsH",
  "key21": "4rHmS1LQyRSVLmhht9bjYaaJ7Te5VoeKvQgWkkAhSM6HFTV2Bn7hvNoJjExnzn6x8DN7BAPoxZ39jZQLCqXxqwUq",
  "key22": "2zFT622fniDv8dVk7qPoppyxuccdzC8M5doiJd3QYGrdScwuUAz3ZuPqciV269GewEugrgu6U93rQsEhCqrs4fJz",
  "key23": "6QC9ioWe1sHWtUX2FRzLDtLMERuB3cx1LBRAuP7eaQAGBCBZ1ewpHtwjhYZxUUoMJK9Rw4CBGESy9DMhJV6bJm1",
  "key24": "55g3fwSek65Atawe8MrVaEEZEJXdXmRMioBaLVittBVDy91Gm6yo8LkqAWC4fPgWtbvPcM4HWyN95HM3i7BCgyEm",
  "key25": "3N3jmKobmnE49KcFVDEq4i85qdwkF49G7P5pcCjH1GknrdD6PznpWetQjjcCAe3ST5c4S7LwmgtoEFbGzhq1n64i",
  "key26": "32Nm3jC5c81rhfh4GVWxHvNTzh7RZWhh84K1jduuWDys2RtcDJLbzrBtMUDJLrn5L3ZmC7UjAFc7SrxpzyZy84GZ",
  "key27": "cA4xw3tqxaPcCvzNqDGzYPjR45JBQ58S5kHeG7RZ56hb49XbUs7Np97yCTTXLTFjNSdWYjUx1zEN9UHffeYx9yK"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
