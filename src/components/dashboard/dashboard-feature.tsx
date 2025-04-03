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
    "4oET3DxcRLq6mft8X4g2DNZFeQjgvqzUNTuPeQBTcucH7CYTnwFpZTb9DcP99UxFRCeHnwg8reBfWDNc5GneVQsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bmYqfj28RrQTNZLiVutdsyniZnPtJpcfm3eNHzmdbvhuks55Vi7o7bBh8mZgD2s3qD4q1phX7M1gdbiGDSE2wEN",
  "key1": "4dpDc1sFbKHvv1XfmipTtp7PL7xqDwCpMDmj1icKJP8EEPYWNWyXMKNTvbRQ4DtLXBLe4CKNXUgDTj2iYV7m1YE5",
  "key2": "2peo1VKmQWvwJypwjLkVWS2mKsDL49vzoRA1Ck8hWGCTH5EPSyZZ6K7N1VTo8rP6cTe1vPimEfzzeP2AK1CFCtYd",
  "key3": "2pZCZvBD873Scv17KQdZmmRXQDhdr3R1s9HToSja3ELmFdoWK5DSuDV7YbntMS2KzDijLA6Y6SoeQUYu48fchiny",
  "key4": "493NZVD77rjJGy6fSeyX17pnbxALYDpJaYeTVeKu4mtjKvz6N1cEMScU5UCfEHJ19oWkQKb1GyXYCcVivtxHCUgJ",
  "key5": "3jTnNwXfhoTpv2ig7mkEZAZpoGiZwenBGCc1Ms23MAtZr9nbgREinSYeHbgHnXVEyBXXnirxGZQy4ERwYU21tH71",
  "key6": "2HvoRfdTuRSqU6UWkSn9hTENv7DUGnGDpgzARyNjoPN7LE7YEZ1yNeRLiYn4MyhLPjCYvvmWuQqL5ZTLaodPXoEK",
  "key7": "4CwsZHvvaR99e1pT4c8CADt4fzq5reTHDKYgjjXXvDmd1uQQh9ZEQe3scHZgNY1DMCc2rbgyUrvVpiAFqcrSVAU4",
  "key8": "2eb4dq8KFNFFcRiCNCxKmpebmUuZPe1Mgdi3zd3TrBjyS7gJGexrHZAyS1D5q1maQdNM7d39rPzDJ4gyXQu34LKU",
  "key9": "2V6Rvcz7Kei8gYN6G2JH2JdFpyMv5cmrMgq2EfR7MsWKu3141oo5675x9GDDKmCQvGGqumxERvQtYgXqLopjT4wQ",
  "key10": "crerxUsFetizAFJhxBUntpd4YiPuMKRrWFKjYn8knghY4jS3CRCEHKSZnuA3CKsK1inw6Ho5V9MQboAUT7ZDoJU",
  "key11": "2b6PJ8ctPFRER2cw9USW1bFRrDGX2hYm3WS6W8cDX5NP5dYxkXqxX857vTtAgCezC7PX6ivPct7Wymxy6tGKEVK8",
  "key12": "2VKGjybbvibNSu1NHM8ziqVFLvGAe1wNwoaFUvkPfZzh3vpkMbZpcznKxx1uYwrfmrywgHP7JKcu789RXh8Zo8MN",
  "key13": "3DndZxaNdwqs2tKchJ589MhjGjd9SjbDCLMaYPFzMgQVchPKrGDM773HgabPsfWjGKPdHahRpfRC3HcVtY58dA5f",
  "key14": "4kJ4wFv8GGWL1UsDRgmFwcAUf86EcvNVUKsGJzqy751AmFXmEbLcv2xdZKfVBisU5qjpR774SGkQoGnaU2395Cun",
  "key15": "2NJmetvk4nrjPUeBKo5k5kxXnuBEnEfGKqSnr4QTR2Mem1pSSyY1oCK8J6tPditbkZptXG6udkzQR55ynvVJyhR9",
  "key16": "5FE4VGenMbvEwQZ2o7ryd4LCFzGidToMFYdh3YW8acMQs3msFRFLEY4mrk2ZHsg4tyTPWNUt4B5w1NbBFGXK6Vdi",
  "key17": "5RAYzQoXvyinCpMTtqR4fTE7ZTHczMGA85uNjy6qQQDx4QX5PHgD6V4WWFbouW2msvbRPZ3i3i3oPYefLCPkkkCQ",
  "key18": "4yctodCzk2BNQdvpp6W1SDoyMjoACXv9W9smGvodrTvagQx6XjvZWac2yNWuXARHyAnxaE722taj6SG45RRKm5cB",
  "key19": "2bMrJy2WjD39DdYxUx2bVdiGBfqG9J5SpHmV1wYeWi5Zyi5Q9CFxSUVkYUn3r6eKLZXWCxvi5WpxgML34VrbPyTT",
  "key20": "5Mm37aQ4ayNddQRoQFagzp3zXLYyJR8VDPRve4avckwmPzwymVbgfGDPkh7Wfr6ZYw9vrgJjujaK9MhVCPWwE9UF",
  "key21": "4iAgcRQpR1uBQasqEUZVVA2hu9hv7AVP3LKVHmDdD9SiJ5zyYZn9r6MqFU5eRYJ87cBWr2bs272EZdmLpxKRAmLq",
  "key22": "4szZ3N8E5i3dyvGU7Tg3dCcezQoESj3yr42atEs2pJMW1TpfkqavLeeAsXS3xyPezVAmeLMierqaHQyaeLubhqfk",
  "key23": "542ZcTXUQ4HJLqFHFQL8BCa9asyeRpQmwYZeNpZjCcqpA38ehhi7NQ5MnAs8g3gHVDwRYeuXmnA5WhH1PsH5iGkc",
  "key24": "KC1zog4owbmXv5VULcLVi6Tke3f8VpSeWn8JxU21AbwCCeKEXs6aoJyPfj62xG8sD6nZD1wa5QX76UvoN6CTV9W"
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
