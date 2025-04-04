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
    "3wgg9vWbSsYS4z2J1mcXqckdxF4pqiQjCQB16mwmRobQVN5oTW35qQuggJTpfZEiSyq5N9WDWxCMUMEDdLRVW4uL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RYgaPgsDNaKrjEdXAJsrA1Rqq7pWVDQ2GTK2xBGYA7fUgh18gMXxNzaPuNq7EZbo196FUSGX6677dBchr88cg4n",
  "key1": "3LXw4q1TyWaGFEnzCRjidDwtxK634GoDQgfBD6jXQJnanw83qmbiMpKHYb6GPLUQF7vYR2QvSQXzaWPZMh5eLNd2",
  "key2": "qNxZT659jgvAfnay2ZxHLdiYUMjzQSWktwpeqqqjxR7L1mCCgp5DurnjnoCDsB1156TaEbiyQBF2aJm4WzAUnpL",
  "key3": "2riS7UKzCZgEZiXYpTBTWsEhxefFNypVbsmQkH32QzXLTemEL9rXyFNsWcCgsYGp27mhqj45BA3QBEMLRmnYUVwS",
  "key4": "2UTr1WEjwifV5DZjUuWBDMjY1uBjJTSszrF158n1SHS33qaZUzwnbYRguLMsdL8CowRoKi9gCTGePqrKaYc63k5R",
  "key5": "3xdrhWBbjfFBGALehCnTPp5yhDVQzb58jXTye62WJhhk4f93VAXavA6KtKvWqJtznGZVzhT1rd4RZ1yEWurfgmMp",
  "key6": "oBpqB1oPWuPoXfcq3bCQQ4kC35Sryx7kACYG7jzq67UDyzw1ooP7A3wbjmJCiZA8cargG8kUueW6hGwoAv7dPn1",
  "key7": "3TvLhLgD2YzE4N8zCUgX6Ttdwhsu7DNx2FwT6XjozfpvJYfTnf1iMi3aRjp7NVL72JTpseDGchPcKiA2J3HMXobw",
  "key8": "4te12HGRwpwmhTvetDrdcs2mGJnZrqn5w66zbvkVQLH9skHkbzVYzMttZXFioD4QBhDnpTPX185APugR1kVg1uhM",
  "key9": "2pdwyk6g8Wp6DXc3jYxkB1JdWZM76wLvrAthobiLF6iTchCNQYKw6GKVKs7XQ1EHnjre1bRP2bN9LeR4UhtHCEGk",
  "key10": "2Qofbjb62eJPyMwmmZ945HkoesSM5okbftv2J4hKjbtJwTVAhUACum1BJKdd9yvGjRxDJVT8ro67F5LhiHyyfNaP",
  "key11": "5qS6mPb6UPQXEL1yRbCHkMpZ7HHnwashYBb22Gke87ntCiX7kN1uvJ3uquSrjbM8eFpRBdZ2WDaNoCP756zsUGt7",
  "key12": "65cQPnvL62biacuhQTY9b1FcWnpfyEUyJxU88MDDYyVafBfKgiNDnCHVsVDmJXbo3Qu3N2Nz62jPydSfjUE12T2N",
  "key13": "1jHgC9yLiixcEDsbYtacbx4XkiWG4xHUvtpB9fEua44fXeuEh2RrhQTzv9bbE6Y97QgcLmVmxfDm5F97nJiPBGY",
  "key14": "2QuxLFH3JzHXUWWuWZT5RYmTrpybSCMfGaMm38z7y4ZWRHByDHSBVhXvhUKZXikHvM21BrhyKZy5K9ayf1hGWbJY",
  "key15": "4Go2FkYxuUKxK2b9J2pBaGsy5eQ1oNpGz2c8LBzNbFkAptDseHyMJRZfvjnSJLKPrPByp6jXpcenX8FitgPcximB",
  "key16": "VdAPKu1pHqS4YtXcSbTZDrqVBfFkq2YUfYMSbbZoP5VLMvG79zCsVMMByUyuhEXqmNdeA7ExcExoZ3YG3MpAHht",
  "key17": "4yCezuFQRq3KGckWn91eU4a75XASxbicygnm6w4ntgMeTAX5AddwQYvKAhVfaSyq6QYXyVL7cDEBczR5rEH61vLa",
  "key18": "39JCJa4vejY3oCzbJoQDw8SWcYkY6iTPqV9njXe9GnRTUQ99EFvuNriH6qcvuY4K38jKHG5rorgaMWZdGf7N6JHY",
  "key19": "1215heZCYbUAQxrStyVv84JuxuhaLZxq8aLGbjJs3Pevi77RUvDa6x2NVgPFsHcA3RKYzdMqs2jC3Z2yWdLtAa9A",
  "key20": "5S6TueWM7dKFLDtfD4XBfhwL8imccJ92TtMJzjQKQDAy1JF7Bos7jzRfqe3nH5dPQndFHR6o1DcLRLCDcr3cUGhE",
  "key21": "4uZqwDRThDhKttjMnvFgow6YqtVuF7Uaf2ar4LQti32d53v1Ahfcca2AVC3ZrWkzxh2e1YYE94oUh9eE77gkM1rn",
  "key22": "7iydm276s6H7f2DfEjUZecTieJaWFjoqnwZXtrUkwjc3Q2NSgdmcirsXX35K1ESkFTdGup2PwCgogeGWNSWQk2T",
  "key23": "uKi2gWWpatULtMyEx75wfBNFDTRPKkHd7piNLhnDyKRA4u6NyorxGm1X6E1HwBMAhkEzpujEeeUx4RNYHPA5Yuz",
  "key24": "2vMKvS8eqL3RB5dZMg56tK9BhWg4uv4dAwF15FhSWCbVuZ9vanWkqqou9uCeYSBMSuWh7N1TexHmqzwHdKPJUxsK",
  "key25": "2jJr2BZw6hH6888RrHdZ5qehQxfWk4T3F55JAWKWrNuaqUZ9eLy73LWU1AHc3tFRF6TRRcoghAsJaJME9Ynm3TgU",
  "key26": "2uUAozwiVzgK1bKeUMdPxBwk9cSrqHQ4XvykJYHRa31hhgdcNApSUNEtds4NwTR8DZL4PaZ8BmuFwudPJP6rtybu",
  "key27": "2iPvEsqc8DujthionhHMz531UPirBYQmbfz1ZvcMoNkKRCkTqPocMqg3i4SP6fFpWuuvXALCBRz4X54m7UNpdwWx",
  "key28": "64LTe4UBqo7XGd9odLG8qDoNjVk8tX1K7AvmzvwhLCQDR5tnS8g8ZDAHtzLRA1rscPZAJT6MKGCEToZvQJqThgeP",
  "key29": "Rwx1dZrjxtYf7NaTbQDjfQDUmdnqGSvguCmVj1XZd4QrKfrT3CVCBVBYiPx5ccysjMmkbVfcXyBBuFgVpmwn6rP",
  "key30": "ppMZjLbL1ffEq1ns1ee9DrNbqiSmtXV59Vi86qarZfrypJjtWcnq3XUXB2kBei1YMwfHqkMQub7Yh3AVLeuSrER",
  "key31": "5XePZ4n5DFcCUaLanT7HnoxxLq5uu2xj8GaofRYaZSsKH7648L2EozhLXvjAbpwMMz9uQae9G8Nwu3JVnrhV8nVM",
  "key32": "3kMXj2yCA1NnBnybNt1xofRj2gh8W7n7Ya2DvQtqrFe7kZSpovYQH8zv65EDeNWtmxyyPUjW1cnsJcvYyACMqptr",
  "key33": "4NEo1Vhocqk1HDq829sbwGCNJ9BKAhhp9248x2eDeVHHfsdFWDpJoo21XZpF2KP21KKCBwSZvJ1jgtzRFRhrP7Ze",
  "key34": "5XKbBGxHE9zkH3bgaE3e24C8d3BFZ9NfyKMVbFtkKtsnJnjWUdNBGtZGQQwD5oYWoxUcsmKFrehhvdhkt3oPAXfa",
  "key35": "5Q7ZZkMLijoyCgALBrKCYKzEY6wG7X2yJLqEenSTfhUeBAdKsSwFtZepBXfYH3LUgygUNKwSWwfmg9KR3R3X54q1"
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
