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
    "2SFU7YUYa45HLqgjiVzEo2LDoMo4jBQvE4jCMaJqUNmDubdBxRq65oT5DRU1KYNvGf69NUkmfjghQin3rRhkgkhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4gS282A7YyXcQEzoLfGSTkuPTL8F2cmAMod88gxfpQKxkza9oTHpdQeFArJqih7x1dMN8t9BBDjZZv4cB6VhSC",
  "key1": "4D3FuoRWBvPGACcnBAJY8wALfJnTMHu3Qxeh5wgB4hfJEKGsnxuzr4Eg6LrGTvEp9cBUwdKJnTbxTfx9g96hc5q8",
  "key2": "5iv1awbXVCxz2pNoB1bGVD8m7e4CJ5Nd2P8oqpRtDWqXxub2uFiTw6ydwuqNBPvL9KS1tkwSQ6zZ2r9LH5RFBw2f",
  "key3": "2SwdZaAiwfFyzGdRS4599M3QvnaYaV4B5EYkJYw1EWrCbioDpiXD3GnJxwqKHgjJj2BaskXuNFCKo1m2Hxu8k1vC",
  "key4": "4TfXhmFufiuzzK97pnrTPQcQEQx4at4a4yYAC5XvTtyZr8XwBaJcUpnZL5ZRcDH8fwaCiZdWKe5b4BnsCXFuun2j",
  "key5": "3SpxmF7ovdHGr9Q4XAMb1YR6gLuHFiB4VrrLhBBnD7KQaUiscxqiEjtBCTJWJzhu3HvimqdQBMCkQqy8g35MYGst",
  "key6": "3oUqe7rsXoPt2N7WgEi66FuFPEzLymT3UiU9MtyfUbXxKnYSrTwKcKg8mkRZvixANWSKzAGH7etS8awDkMR528pE",
  "key7": "2mRMFPeYtZBAJRBiTRLoGqRmeYanuJLtEu3gJK8MpyV1Fjngv2AfqLQgYG98o11t29XEnPwya86imBdiYhCiqtyD",
  "key8": "4goYwCbYm8N3DRMhJnMo9gzAGyN9VPzDD9CacXFVnK5HD6Z5vx38AUVghDH2UTwyFE3v4D2q7M14NfzsSQYRDM1F",
  "key9": "4y6JaV7hrYjqVKuZsmKUHdPUd9ikU6tB4CHhH9uVTwgPFC595Bem3fUEh89hPxdLVNbXzzRQcE4ZPjYzkDq6pbq",
  "key10": "3ChrTduFWveNERmW8nbSda2cQdDiWFGRF2hhfZ1yEyJercUnXCRbTudUSARB4goabyCGZmjskym8PUbNVAgYVkhf",
  "key11": "4AGRdidPqGJVdyht2dAUCpd6j3oQcPKF46vNg6MSYopGDu6h75ZxGVYpVCskQSAQsUoaMLXy5HDsLtLMMYYWBm3A",
  "key12": "3dZ4DzKztj2oHWkBwHgaUjGvK7TDkXWh2CNt3x7f48X1KAC3iaUbnFRsXH2t3voTAeZaZYeZQbxdvhpnJtZEWvPj",
  "key13": "2pDu5Lw8Cau9N8fqXRDvYzJEhwCWyYgpRHxaoSxyMPrcTWkBpmRPSBJB4w6QVJfULV74A22ad2N31kiXHyT8rJZR",
  "key14": "4vontLRVoHB8oABu2N1gcfgYN8eGadNKeB57YRpF2fwyKUo1QX5sS3aJ5Jvf855b2kCu8nxfkNiwUcaaEKa4cgrb",
  "key15": "3QbQfXwqVSyWKSYhfFvqHjdSQ4Gzu8J1f9xZ989rcpZfovpH87PmCBjp68xRyjQFNCWdToWg3vLETfnn7RVp6oNz",
  "key16": "5sMVnysFd9tyg6eV3Wuxpvenx5kww2KZfrqYozEmzGSCAFaor4ET84qjUdj5ixtUDhtnfzrijyWba6WwbPBXZVot",
  "key17": "5Hp7yFht8wn7o3G98rdxhbpndDVsb5gZ1XsxznfUaEBs2MiUarh6zyGpDfQxe6Qfr7qq6NVEkgjuHQHyH1tYhtrG",
  "key18": "4nRuxuzegwUbnv6afUxdGEyBt7YMXsYnSxmd13KfC3nMKw55SkYzJ6J6pZaTP3tsGnHQ4rvJNLCtpwqNVDhbGeJ3",
  "key19": "22NkgqDyP3xmddKaFH39gL8U5L6EUeP3tGnsCdY6m8LG9mV6C3L7d2vJiaR1KGY3SrYNjxREoEf3ffr66DugjNyJ",
  "key20": "wDBtaCD8Um2a22muyFr1gJyaMWYBVCbvzYGT1vcSWrEgK3ZVsaWtmtQocW5vjFuxYYRWnRtyQmisbzUAhrpVdGN",
  "key21": "619QcsTyUNpJ2upP1nuo2k5hJYbcySmszuFW3shdL8DZNt4Ea8m2ooZvzAo8iXJgyST8Fs5s7P1HEndLLu2SLCvP",
  "key22": "3q9XamCczBuuwGQZQKxibu1qyMQE38i6rjV9PPEqoEMoLGeG7goHuuRLTpGw9pFTCQH36gmb7tTJ9JPrF85YmDsZ",
  "key23": "2TEnmjswo7DkrZmAGQwVzMxT91TcrkfoRw3yTeYyW2aU3HcqTJKKX7dcQZCjHak4q2ioMLyfV98Luvd6wGtQ4Su6",
  "key24": "3qCQ7y49dVaayNyDEb41fdHqvk6z9mCLWKW785hjrQV77jdokeddqS9d8UWwt83fgHwHWHzfo1jJiMacicb4io13",
  "key25": "wiRY5DQtiNDT5pgPVXoCj1PcWdVGTQkbisUSN962wtMJZqxEJygdPpfigddPzfMkZfXwSGL58f4U7LXoYqazbo3",
  "key26": "5SFXfUMtvr8qGBqFViwRcT6A5ZpFj3QHS36gos4Hmp8tQBJM7hSXCCZWS8GmFU8knade2ZmpNDtzGvet16Ffj2wg",
  "key27": "3xZF6GP9ixyfu9qBJeGhNKKniHsqKTursmnnmr1vpDdmgwxzhPQiNz3aG1bnavHChg3ubtnTmB7nQ8Yih6wYejKY",
  "key28": "4aYHNKhydnedSGzV2PHCe2V4KTJLFneNYj89cGy7wCmgdDYSwmsfk4eEzCwma8SxSiEFbUEUzHLNAxCUnUWbh1Uo",
  "key29": "ctiVP2hM4RQaKTPjAfEGwfCtawB6kprYrTiMpDN7DJzT9XrgUuENH6Vs1A2VwALsHd2DVJdVdHuWKYP9CLUbas5",
  "key30": "4n4jGh9u14hbqc4aKUdUMaFJbvpTc3ErN4HSehBDaf4MG8S1vAz84BUrAUW1wPyijWGRhDr82MMXpb9XeCUifk9u",
  "key31": "5ak8rq4xqJaxPyDKXS1262pW8CgiQH19SmQ3DVj4C8VwUM3EVXBkkVzdeVr6hHqFr1CnDuSyPt5anx9HFFrxvYGT",
  "key32": "4bHBCagos5mzRw9dSzw5XJNvyukhe6aguP7r9kLeFU5eqAxkrCFVU78k4N3zCYEyawkpxFYZKP4VuhrQmwTknv2V",
  "key33": "3Mnm9sPHhSeA6pAJiNBbUGEZ7s4WCnfqpQnWRRo2ovyiWj6qrCsu7khWHS5vSwjriuh9fMsrMsan7SuR8T9fr8b1",
  "key34": "4wUPr77pzNTvrB2ihUMSgfKgHpQbVCRbVq5CiVbrbTzZmPevYF95pTtzSBmBTC8sMUyTzJpr47NwXRdesfohN24G",
  "key35": "3qJrHc62scUC7JXjPon4y4YagSndfVW3E7ZHhkDKN3sbKT9Z568sNKVdDzeBeFvEw4fPsPW1Tg7Z3gw7MCTAYVrX",
  "key36": "2Pm5nUySTzVHaSS1EaDZADe7FeyePY6sVz2pTdhvbQBbTf1UBqyGswjSaqDsoLjwjsHGsbwmbHD14Bzz1DH9mZ5Z",
  "key37": "2LxXZ3M7v16KDJ8iSy6n1qJmACWjUm9tmJqqMPCAywK5okHADwL7zEntpqt6YMDLadUMoMayp3NbnbxyMYbPUnbs",
  "key38": "4chNrxbcfd9JpzYTW2XVTJfXNvk6d8VN4LWtM5tM464RqXSJLsH1rZturTBxfFmPqNSdMVYYJ3W63C95Lt84zTFx",
  "key39": "3iy1HviAce2WTWg3Xeq13nvLfEPeLVFVRyQyxeGzH5vJkj4hCKo9Jru8hZygzGBemx8xwQsnVvmSs3ZLseQZGWoE",
  "key40": "3DD8o7zJq9QJvYQW3X9ubKp95TmutqR19pznuXR7YXNgGYDHLTjEmzWieBJHareJC7HKKx5AeAuVBRwUzr3nUugc",
  "key41": "4pZkSkqJeBdVTL6dcGSMMYNoESTGNRkfUafS1V8wnamGRasgYer8SFwmSRYvoChtrJ2PKJJYvbmeT5L1UYmPsvhV",
  "key42": "2mbAxp48KiyyccM1JX3oVzKMCJxhxGEo7zrjLUC4NtSudE4ysk8LbYMUgexHGdUpuMSeiDfRA7vbFqenK5P1sJJK",
  "key43": "5asu9YasnepEEgZTGiAoUMr5E3WVbxLpkDFqMsDrATAcML8Xx486Gz34NXgSkxKqQvMf4QxrnjQqJtQmwUB6gvkV",
  "key44": "yJa6KqqjHY46CTewbSEEgy7UGCzL4npEgnBg9fREisr3yBzvy4M24akjsgGY1q2VBq4DdAhhqiE39xJF26gKv2B",
  "key45": "4E5eURc4FP5RkuetmqyFxBQ64MZaTr8iB9ZQDsJmnPuG4BL4hteBSjTWwittWLyJLqKDqEfDXYPcGhFZwzdMVfQ6",
  "key46": "4hgmYDdZhCshkYAULTDqS6rsLczGUvTGUi2QXoAe3rBEvQTka85WMhHqc8fKBXFxfQSMHiVPNmuomkkHUXwyMWSX",
  "key47": "5wPNcWBiW4ztjGqxqFHEcoHFPwyXPPgc3AzgaPQCqsU7agt78rXFAzYo3LUciG1Cd8vG6GLtogj2n8b23NsXT8hD"
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
