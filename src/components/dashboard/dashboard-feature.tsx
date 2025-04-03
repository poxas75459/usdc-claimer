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
    "521STQzBQT6kjerJH9C4aZMEPWmntBZRSVQuxuFHimWX34cXyiyRuW3B7NaZcwkM88uppKhmvMwQ7SnwFYcZDbQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DbJx1mrQPyZqaFYvth9TyQyVG3Wi4XtPg8Bf1sP12aF7AGZtVjdhvyaSXdd3oRXD681SSH1kFCcVhN1rT9u7uyz",
  "key1": "52KPP1zABEq4hWr8xqmKnc56SkExvPexdKFxQhNW3Ev2QtMJmB9B8ccNruzLD5dBeYeBh4eaPpscaSFC15GgfPF",
  "key2": "YKmWSYEibduqEX5jZbiKik6aYkQhG6n1WER2XxFkET9CtmACFtS8vcxKbC2qZtmxYmW7ZHkoo7FAN12Wd6R9Wp1",
  "key3": "4chpWb2sq9VWqjCTgRWqVtjuRHrk9zZTocZ6ZtxRcqTwhx4YPAJjU6xQ4epAKidHe9bzZWP1gj7SprqRS6JTf1iG",
  "key4": "wrmcE5enG5rsnWzdoSek2YXUfCArG2vc4oPuie44cYeNPHBrcoH4p5fPoYR7dDTEXz4RS86cxyqLmb5MYV7MoWc",
  "key5": "4MEmCTxQ6T1tXmyxPwyqdDHSEZGgj621sWXmdo8yN5rYEoTVQtjfKxSFKgvizwuce19oJyDwtvEvFTLtW8Cy9gWY",
  "key6": "2Nki4Xa6tNGK3cKHLzAahCGcYe4W5Yr3XAEXmDekT66WsQEPdjJ8C2oeMwKsVJCp3dy6XKPZipgSaLPFDVz2P8Er",
  "key7": "4zyr4XjcQ5Yc2dG7EhGg8aLgoTSTNv27Td8TjHR4rSJ88DB6VhuKv8QcAKnDLUzjx8vMLsqiiBy2ZtTpPe4wLSqM",
  "key8": "4mTRg5jFH9TDpSuR3exi5YMsSgBVRbaAL2smctegJZaYzz2c18AAsThmXfA4E1ruu2qEYobYuNNVZFDbtjqfW3Hr",
  "key9": "3CfTyz9Tyb5BPzvwwCCwVuNAhuVHoGbBjftix2vk6eEWFzH7Ff8suAywiGNgVJg4XPgcWv9duELXjLgvc3mzQKVz",
  "key10": "4XMjd3o4dqWAF6ddsMcAzKBwvZCtgWvAJwQGSexYoUmELNVasneT62aRAUWm2FeWc7Yuoj5Dis3dKMpbwKBBsPLi",
  "key11": "3RsXVoqTBxBFTb8vfiUK45ecVB7U432XJGhHGCkHHAcQtzuyEeZ2JmZA9viczb7UCYE5GPXMq3CTwQoGAWejau7S",
  "key12": "2sYtHiugv7z7z6G2FccRGka89AjNS4bcyDk6MeDd4ScWpWaqAYaJpmicjUxJhMg1ZYxSJPwkRujPdDjjTgGytYZ6",
  "key13": "64DNU9FgrpzeqvztFkbr3Kygc8xPJjGRiWbkBiZBMJBMdwSBnLoVtu6exF7rTdE9gWw5xArvUDRijVZKXWUR1MGy",
  "key14": "5dxYta2cWb6EbAE5cFQ4YVGPeCXwEsgFAqHnNSNDM2NQ99veCoayVYXAQAruHzqK6s1wYymabezhpHQ22EEapmtQ",
  "key15": "3zEhUzpa3ga18RsRUCnMJxG16n5sXuatcVijqPMnBxKm9VxeQnM49DbdCggGCmT8RnhzmjAx76nBdkZBWxTMExAr",
  "key16": "4GXX9UsUK2KTrLoS1Rmj3K2QqcRtk3eGg7UsGx4LJN7jJLCAEoHx4PoTLyGDa66CMeGAiieF7qoernohod9Q5cLT",
  "key17": "2cTG153LXK5L4G2ZEP5E9AGVwJPhJiWANwETGgoAcNNvJAxYKLc7pZzh7NtB6ZHEyeH9ntbpSjgnxKqqW3U6hfJk",
  "key18": "2L7ACZXaVwJDEaPpJLY3dxQKULmSwiyfm6NbPraWq8St9Ju9YEnKtwyN2uGKWqSUYY7XfEDUHRbuBSoDtMpBygCt",
  "key19": "57A9gSHzYvcCYvzyyAnMKE5WhZSD9Ly1st6JVTAweZkaAQnJ4jn1kUKPwG5WNTtR6yhPyFV7mvdrBaiv4dbcejPN",
  "key20": "34ZpJQY4Th4s6gjXKTP1YMv7QMSUCLSDu7fhkShCG7oUAas6YcLdPgsXgxsirqsDCdLzGz1Cz7pdD5eXPSoYHL7u",
  "key21": "5wkjejVmVKuKfsaeVSP4KV1rcEH1egix2sNsugyQnQiDdb2J9MiB9mkLR4FRjaiPUq9fMyF4eK5Dsr3cywtwdWBk",
  "key22": "4WUCSckY8tXDSPG1KaGJfyiY8dmcYkn8D1B2ZX8f2yitcx6ma8EtyesBgJS9EJ4sBGwzeAVvo1GTd9ZCCekUWMvJ",
  "key23": "gMJj515FJQ8L1DFRMajqGauk428G5DbGuQgG9r9roVHzRWfRRTxAeEgd8x3vnpZfARSAgm78MuneqLRrkuykkeA",
  "key24": "4f2TYTWwJV9MtZSokUTJNug5rN6b1KooPeSnqvkQ3tXeVam1txfCVn5wcPBgqmJefpSGvP5EbQkf7ywWMr8h3sWj",
  "key25": "4EmvTDQPpB8Lcn5e831GQ9pyQ56kgPQyJ6EeufaoFwn1T8xQoBUk9BER6GPhME2pN9snzkUDxmGstjCyrVdi1UPt",
  "key26": "g8VBGcEVQ8Q8dHnPjkqVy47SjvVeQC2fZgA8Va6ZLnKfsBCUbtM6DqDJBSqzeRpS7FqvCWn5niJJJysBd3vuj37",
  "key27": "nQggwUiusiv3LMAcAurNiAhi7vRKS2YEoW4LKZpSzjdvugBNTbxDixr7yYR74NbDq3JZqVAEM1e8ovU5aF5RvSr",
  "key28": "PFBzGtJ9xweNZV4HtuVwfCM5copksaaEvvrqiVEKToEpBiYMRdfJmVQ1pVUWac76z6aDyrpAiQcYBP5UMDLqeqW",
  "key29": "4nrShSznL2HzTdjXNPmwPMsXjTeAJG2fwLTydqqVuydNqikecG7tWnn3BZA4thDDmyUEvgmfaXLdRgZAurzXWRKS",
  "key30": "4NoRtYx3tUoNZe7LwEDKpitVrmY6tazj95xG29CFrch8cpHzWdVVLcruWikdG6me3kb9ED1mcAxQHL2Wk8xxcAFg",
  "key31": "42BteyQeyz9cNgv4yZ25He4rgya5DHGnjPG7GiQ8rMbJTQbi3PJvn6kP3uYDJ3tPioa7xMSEzBVLHGmjRffj1usE",
  "key32": "zbJbjarCpL5dNG76feyJDSCF4PAzW7srUtNhqTgxJtHgXDVsJLqmxpwpYr6W69AoUd7TPfJHBP3L7CzExmK2UjW",
  "key33": "783rqWoxkvCrJCqt74rCcGDc4w2drA7yv6B7cGsFk84uhLN6xqM5KSsaEwW6X8TQjjoDAJnaSo74pA3vgd7CURX",
  "key34": "4M9Y45kPUqqLyYTUSDkKpins2D3YCbGTYuwu3okBY5r2oaD921S7RCPwUzZXqXfGxZftrTTmXMyY8AMKz48vhiGC"
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
