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
    "48k8vcuuZFX9iPjgcKUA4hK28rJQwKu9y7ECNXiy3KnCDFr6oN4VtSwsduZcFx9iM8x8R56SRTp5R5tmKncczYEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sVvQwzc9iXJ7uWLD97bkHdhYnNgtB3pezdqBVAEtqFE2HW6gWKAtqLHjj5GhVqoMKtGYVLnyCwxRnCB8b9hKzMn",
  "key1": "2iRkkmc1x761Q4S9YaZvDxGjjUEPG1Nib34ZKi6e3uhTe8Cqd6HKAnpvAgTqoQXxWioSTM6oJ7Dc6vSAWK8mus3d",
  "key2": "9yH63S6oUs3XJu2jR2b1Ct4F6JGaaRta6zhMy9QGQrhh69EAXyPGg5n5wUPAgDUhRmcne8Tx19P4tcjw1UAHjsB",
  "key3": "QvmPzbx3gQpX3EHtkAvUVXA3Ea4bYgLj5FktYhmNmFEz7ditiNWchT9NgvsDvDHrYNK8sCsNMQYouApNxX67Bgv",
  "key4": "3PLJTWLCn9fTTRjBMaZFc68bJCskNffdNgBtcSThaUHnREMiWSqQHAFmj9Z5pwAaD7XZvkRSyi85Ss2pTrHkuGX2",
  "key5": "4NRvF4x3jZ3KQMKE46eKu3wtJuqLqt5cUzZh2B6sgxdqVAAhimBXXW5JxZE3bfEKZrsAU1joHTdwLXCdiGtipExS",
  "key6": "M32rkFVzdPYvBnhi8LrQvQjiXMKCvVZdGxBQWxHuqPcpcSiCjqH8nBYuUiwkQmFAsvAEwYnAHE9kuh4RTkrHr8f",
  "key7": "4CKy24PHigksHtuS66osDnS8wMFaBcj5rMrPsEtZsPiRu4b8h37hp4ozJEmQW72dnTQLHtZZctq6s4AcfTepeCL2",
  "key8": "36ydwvnrLRYTnaU1Xm71x3uEgpc7hkMxehxbXfVqNiQBfP7q6pEQ8vmF6wMfTQisa5bC3oUmwf7F8HgYa7X8eD5q",
  "key9": "4jBUGbX55NTF3R7f7Be2Ku4CEF5TSGKvvmh4UTEay624oWmMocx2eX3m4NCjXAhWSCDFmKv8HCHmWFSZScK9RqsQ",
  "key10": "QTUXaqQqN73cyzudbTZFe4Mz8U15z9edFhCy1QsmVbrnGSyYcjtA9DEbwGM28d7MMxinAxF9Nqv6T37vP2R3jLz",
  "key11": "5geE3AW4f3cE54E1RXSWuYjYSpYbRGQFHj4tJ4vXNLJdzuoimswUMFzMpYMNpVEXW3CWne1JQxX9pC1tPtx2dEag",
  "key12": "2TyAdV1zK5ooevXFepobdYb1g5CvTGKUarjd1biMUeCVmsLbiQgLeHDLDWSDbXezJw2Me7P9vqGG423fxgrwBTSg",
  "key13": "yimR9V7JsgLcFATQrZmLsR5rGHFxKVHFJ1KfiqPkymbLibw5rCfFsSAd9GheQS4VesuKdtFzYMAf6UNiDD9dQRT",
  "key14": "2xHG3s1CWVfAGs8kCAaTCHzY2QNpkkmoQbfjy1LFsSaNkqRAU6cUb5MkXtiQoaFTcXcKUzzDqvUiZn6i1tjbaXQb",
  "key15": "jxvNFasnwUMWQBFna9zGnNZqEpKY9tjBmABru3B5RRCyefm23MrRjuRZvqmzhYe37xwcVaLcwizFKMzLRCJECYg",
  "key16": "38qCEP2Ai6rqwgFMWGro8ZdzyMmUTFVmMm8ydzGjw5E4JHSHsGgTLukeRDnVRL8Q37cEUKeyiZ3bqv259eRpsenD",
  "key17": "4DTMDbAPXSiBENNaxGqvGctqGQrZVUD866jfZmovYikKKvb4MvQhaQpEhV8yM2K3Ta6LadufxnFMVCr9ivKf4Ehc",
  "key18": "58oCPjrVukKnMNF8k6BUqXPdZsrDZ2GW2JpRbUQ1VfQVtgdDciVq4DkRgQUF4Y8fGEx1yMzd3XnYcME7iyqG2DX9",
  "key19": "3gs2ivd7iaAtoPys4GSPKaxL9TbUD62RJr8KcFH92fSWUcF6FrPEDALmwqmq9gdyEV13hUmBK3ZBGpuUq8V3UxUX",
  "key20": "ciF543885jM4AmzuSnPPhVX2wAXtmFGEkjqTNjuLitbK8YdPvRvUqPw4oneXxykxQwaademUMV2fm3HtrV7GQ9C",
  "key21": "DXXqGP8rBhAP63KgqT87uhpTX584QjoEDFVxQYNNc86nfiYZS9rUQgr3mkaerhvtTM9dkogsbTG9BqP34WvzXaT",
  "key22": "5qTkaZH8fSJez4ao1GdRMw2k8gRXV1LW5Pve2DnuxmF4a7syxFrACrB5Uit5HW1XwwDoTeXDFJZMuyCzL41XtR7s",
  "key23": "5po3j7xrqxnitPGFWUTxm7QBhAMV3wvuBgGGiFPE8G2WCAHDd853uU1otB9fDFBJWbbPhQ5TVWcadNDZGEjXFXW7",
  "key24": "rcxdBx5NM2Kv5Gdw1xvctTgZUTHz3aGgUe1p9Z8EERL36aQSp5Li1CAuwg7fsdkToCmqiQXt74XaU4mFBF4ecsk",
  "key25": "4uWZEHazo1fAfnBgfFxKfN5SdryVZVeeta4afRapPvVeD9eELZAtV1x7EQsEJq1dXZAqBjRiDZEUjrdoxpx2BcHn",
  "key26": "jrgjSCbCS3vXfXbzbLJzBpcCn419g8CCt5ztQ75fNw7Dc6QAGAc9chGYQZxJmTH5mfTXh9Xyc2q2v4A2TKs4xE2",
  "key27": "5xKmipzw9XdV5piBDfwBKryTzkr5USzphs17EqwxDsv2uhgPnVYq6quv2SMyAjngq2ZTtmd3XGfGsMGiLiFzCeAH",
  "key28": "27A4NHovpgmdH2VSyHehFigExZ6nT9t9PG5hJkZhzFqHEpcbGKUE16sYpm5Ud3tFBBcwNWTzGzJcspfkT5apFi9y",
  "key29": "5L4MgAreB2cdZtuNYLbGwgbojAX94QKRzrYjuahLWKySPu5RCvG3ciYUhniPoDxAcoNdejBEAvo76njjMHGRZAgf",
  "key30": "3SQxo3THoynAWqh9E6BECmNeK4YqkhLE9uVtth7ws64YMTvQCBpsw8Z8azLSJVJDanfpFbzRoo6HoMyWfCZ8aNnT",
  "key31": "2wW5henPEwQV3jmdwaqzPgKRUVJ74yUhqLmkhb9uxA4PT2QgXzoRYUzsrWALRaAL1o46ZVTonqM7gmNznfzEmNoy",
  "key32": "5VVmK6VyeiZximpsQ3w5v95XttQxykV66kVCzoWSgbM4YGGqyxTFnDTc7kFxEbC2SU7wJQjAHyryMLjJVHA6qk6k",
  "key33": "3RYEVmnkCrVFwHR2uRitkPSSFTDAU8kXYJLqrAio2tPFaQArtieSJfYub3cYaz4HahsZnYTUw19teZu9PhCuTNsD",
  "key34": "2GqTrAEjmEDJ7cssriKckDHAoocReNB8c8tkfZjJ2SVYsS7pVeiYp54fo4rv36B1tiwoEiFQV1KDNsAis7GoGW6q",
  "key35": "zDLr4S3Cg83tzMzX3tk3FmBdcdggHGBQo9nXjghAVAvNZXwkKuhZ58CV2XK4DVjCYXemLMknTL262mB2UssG9fw",
  "key36": "3uPkyX7kn4m76cZnzyuebGHYTtqj7T1rY9sHrJ6YjvTrfN22kmKwE8S5AsH3fsncUgQsbWotvwpCNrYaCnCNp92K",
  "key37": "T6qxtD9Bpzko3rAU3T6vqvRxFbPeEbdft1tRgRSFcyWykhZ1bPdutRmcHkuMCq36prMuwx32hPpsmYwLbpERHQ4",
  "key38": "6F9dL3RdmnrEFtnyyf9GU8iU78PUfixjoqouHCCBrPDJbY1FuJrHEfYNB3E54FoGoDfRvDtCosnoTVvv5ZVczeJ",
  "key39": "2SZ71pZ5tW7oTreMpAFPFHriT8GNjR9rAxt7AnqFFfehmZ4Hbd3rMmbUvoFeccvRxzi6GJnPuCPoTADCkWzXu5SW",
  "key40": "4BmcrPa6sbpmMisntTpPdZWshWwjTvZdvpjKiw2CEQBVtTDQvsMVKzqAPuSHvayzsS5TGFWYjaF7rZ8pseRWeWVX",
  "key41": "5PwQNDKn7ZQ1YMP8isFeyg3TD7Y4LkvAdLYro4CoXeMNC5g993pQ6YgfZd6Ac1gtbEXeGV1gNMHEVCKMuvNSBzKc",
  "key42": "53rvGh4iqHGqH9eAuNAWXTT2dBBkpD7GDYykerL7HAgVCe3qXZhk22YaC7VKpKjpNDtbr3SBXiRM86PaDDQZsde3",
  "key43": "2CZYGgMRtebySYpuJaMet4sYLpMrEovnHh553cz1aiS3LdFRuPp4eeQRa9cDgSzes1UsQhz6LDDm8N4yb4NMfg4L",
  "key44": "2TBhdbxyt3G54JrhPGQ7xh3s5KntqdR5Sshzxfqy8DhYu1Qz4ropJNYZaf9zyhCdwzJwT2K7ahS15GBtdgM6WtTp",
  "key45": "Z6LDSxpbdKsEfSjt8dS4WCGkxMiT5DnbPfRD1J5EADfUBR78mmPujv4HjToaaD4jUv98ig3rpPYj9Wv6kGk9ejm"
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
