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
    "3eZ32wz2hLz7tH61xeA5kGcAygU8UsmUgUdBEd7KQ9a2hNJhb2Sy8n5EBm5kzW5w7ARcgJxuyHKH6kzgthvdSJ5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yhm6jU6FpHe5DJ7T742Wgb4SaT6TsNyGHzHbry8AqS8LG239QdEsBz4vnmqNzNtDSGqUgFgseEJt8mF5AoJjdBV",
  "key1": "4TwPx1q1Z4x2pYTXMvt95WWwfojqzT1EfoxQHcQcDJ5PMJDDyBn4YRiKegvcV5Vs3sLLj3WxRy4kKnBx8UYCurkt",
  "key2": "4db3XdDU2jv5Wot4rVJJNXTLkCwtJVdXr6hrK7mNf7aZdBCkR1uUcHxFteHwFtN1rJfx4F7KtRRHgsnTK7aJmMqM",
  "key3": "54sVKv4HhUhwBaSYWcHq17kWvetjcSp7drTBAPH699f1HnxMn93QL7yMn2AmcUBAp2vH6cyofk55aVo2Z2xzxAE9",
  "key4": "4ga7zhLyHa14uTxK1LyaGaoo1RVCkWyUsErkjc8S47FXcB9uC84ipx18inX52GYrNscattBahEtatJQRowsfCNZN",
  "key5": "LoDMwuqXzHWTxzEKTwDrKoqRkEuzaG74FC1ddRVYtMy6C8AH23LDgzdkJhAV9uawsQ1VHJb7ZABvZMsxvZDiTtH",
  "key6": "3WopkbFL1sCrX622vJkoaPYryM6qGaMLMoRvPXjVo9NRitTTJs8eukx18waZDWsRLxbcF9xzxCneiUhJB7WQTQtR",
  "key7": "4WHrcpSgcufpVAZzpmEvmoaZc33xconMGcg29iBH22x2sVY5WnkAZRHqdw4ux4iar3oHTeGnHY2w7cXjuS1iHtXa",
  "key8": "2ccyfoBBWryKe6ScmkvwenCmdvemFrvXMzzW8hYnhZ69pdW6LrhG9699rS27wFKfhVurzf6kSCiGqc44uuzM6L4k",
  "key9": "58qa2BFLa9UjWVM5PQ5iEDo1K9f3s3NTCpEfzY9UZrTv53bHV3rFgMDBcMEZ9TLR7XpDXPS2Y44JTN4oVUQDJW6q",
  "key10": "2o4e67Hd7bk1WNp16gBXWKvuhC8v3waz8Dreqn4RAevmW6yjoihrxseMcNocLj8r9SN1adJWSM1yHwjJ4hpnQkiV",
  "key11": "4Xes577nRXtQxqyz1G9qbAaW7kE97BnqjTWRmA86U77XxQ7nHDzCfrMijnYkmWNGF3VuetoFNgNs6NAm5pz6iBrw",
  "key12": "5GmLvfLjqYPmwVx8B98Sy3NcVVP1RtJutSPFzfYu9rGdpF7q1US3X9codp2ebsWwMh8oUcHWQbP5xgcesowGzG4Z",
  "key13": "yZd8e6w9EfHZhUVRhTkFnDqXVZwqiG371rn6yWrsfvSa4nZBVuZnGWUdMqFmQpGHyi1h1CF6ZXEB9nrRBBJv47Y",
  "key14": "4sfJCC4r8AVHW9DEzv31MUSkth86WyRm9xudKYsDGtpve2kcyARc1Uat99UxTPnaTqmxF1iDJMx3sBpmpY8XSbh2",
  "key15": "4ufouamhEHntwnXxWP28kv8BUnjX9tJM5UoyCwwYyo6MyeyD92R3PbtAkCyjdUN4qdMUPZF5rkKVQX3vkfhmdScq",
  "key16": "y8frmJhQ3tUQH3YrBsqiNwVaKNJsNyRhQqanZsYFeRypizCL8d3ASse93tNAsqGTpxf8C3jDuAidQKGrcw68w1e",
  "key17": "aPDE8hAC2SQ3B6BX9FWPehSjYUaCcmQdErDKpEy4whDZmbCVF6EGfjzXvaeRr5FGCXsGKhePuSvXCtQsd3uPM9Z",
  "key18": "56wKKFyvayq31smY8h28E2jmyASDD5RRiijEpH97KiwRQVsExRQz2BBHGBJzPapqmQ8H83rdz5McJdp1FCiaT4CK",
  "key19": "5yBjjzdZGeaSH8FvWLsMUZgjZeSiEgoDMnNXARKvcTTqf5LriKFt7bEeh2Ym7JnFL39QEiwEnSQdbhFSVYrewcKU",
  "key20": "XhBHuhebdrGb1q6pGYqRU2EzHk3ETrghiWYgevY1UTn181dDD3p3VjmsXkT3gtm3domftdbfXZnZFizsKPs2mJT",
  "key21": "4YTwj9FfXUZTqjU31oVF8hqmHdLLg19JozuxLMBcFGgPQvX5MYZYtGBqEGFNka2v5VomdiDSFw5o5TEDAVCvoJzS",
  "key22": "287MphGziZZa2QWMsm8VubKfTP74RprM37apKpp45YdYkdfYLAEixX3RBv5RG3ipuFhfMYC9NXJGNnDxyPXpeyBW",
  "key23": "419LdRJXSJ9tJcWddNmAeMRJKNDDXUGQMoUNJc5Ps6HfswYR2nqGX6MqqJbVimPFRfuHaY4qKiscguqgUodoCc2s",
  "key24": "3A4WwG6gpQe6YbwBnTrUkj75BEwvSGMoF1tMYraR4dd9y2C5rz7SAhEwHJCdcyponeW3nUpk5uEPhfGaYj7uP7Hq",
  "key25": "46ppTtXQeAi7sud7v7qo8od2AafpEBKTPQgUN9hDB2KR2hVCyeu8AVWXe5Mp1iHHrdmCjeE31jrPSutL18ncZ2wk",
  "key26": "23ui7NMXzdhnoRrWoE73HafukjnWgUVDUhABjDjPnxWdUJKFi4xiKCZLkrPkUaAmVHi1L48qcjTqQapwGWYwk2rw",
  "key27": "42cTike29CC7AHgdS94HtDrfjyocukQr8p8cGG6QcPDewfGvU3EGbmLD3agJX4x8nyK7CAPgJDn5Qdy1yaeakEHg",
  "key28": "4q9mZe7CYKGWFiEmCcTXXndtrNDcsr3wDThwvH5sY1FDARhKbmFYT7G5a83ihcEhket91HdFsjCx9Q3gPfKVCZ6d",
  "key29": "31sDjYfYRE7TY5zfuCRfo43jTCprth9nEnqxnUTrcJTphtDbhMZJWL3kSk4amDBqrW6TyHGzWwpz46zCosqgp5Y6",
  "key30": "2AdGyhidEkVkFNmBETaTdceS4jY6jYtBX7ZY6sQwe4LLBi1LYPNj6L8gdJUtS4yXQVAi9RnpBWiGXo6ef3ok2U98",
  "key31": "3iXqqMqdzCknKpkKbySg6JYzgPHSBSbazsXVwMsQomEySQ5R1Ua3ZEUAqpcytVYkkMx3i5MmZWKwSfCpuEQFzGfL",
  "key32": "3FvFDaC16fCDbazDwmseZCBE1bENYQTzwFWfF5EhtMQr2Hvqn16JQfbWnY1UkupuMttnskFAsnCjPDJzrrUSTUPp",
  "key33": "3zMHuQT8CiMTWBpWoJ4MhwKVuwTNSpiEpB1RNDAdC7rHbMELSYGcntkyxoav53kuSVrra4DhNqvVVTaen3cCmR6C",
  "key34": "4Gw53i8Ntmv22c5evd4Ujf2hUPzqq5TNSBRuqu8WDWknUeGdmcpB9zhtNpWQhqrf8dbTdXpP2LCFqc5Kc97xMiLf",
  "key35": "3ccyReYj9yqnRP6grPDwQ27URzWcaSjd75sfsAzz7hG1pJaKNTUvYMxgutFM2QZdrB33LdP6d1td89XC3udR23cV",
  "key36": "41W5JH9WijuwWcUQ5JkHDBycLj42DwFU9RYhSHG2GY5AK7fxnbB7hxLSwXaWSwiC4dPvQwASJyEVSGPrM8XQy8NS",
  "key37": "4sihVgzVp95nfMMfY4chLr4gKNDKjG9zQY2a94PN4dtBe5FjdtsH5WJBiCd3o2NoBRJG1CAY9NFQQ5cXzD7LC1ro"
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
