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
    "2MTUcrS5WDjTPik9RdJJX2v3WGnYkyroYAi8tswb8HtoTqcBjYmW8tUYNJ51GE1QUTyoZyD6hvsmJL48e9AU3Szo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qHb4SNF3HPdvzRRmaLHSCJHQnm9jpx9k8rYZwgVWfXGAyjYsv3HXuPgW9rBeucw2Da733ohaA7YN9HFU9pRddvV",
  "key1": "5qGD6xhCHpVeSrbZphUkQ2Y6VKRZPXNbPdHf8bj9eVcy4Lt4nqjHPEjCawJQ6BSzfU9kWnDnjm3eSi4kzKzjRTsc",
  "key2": "3NqSKzwnyZHfnFngvCjTdahrQXvrsV1HAjfXWPg8Ks3JANHXT9x1HsuRStQTXJDhdBzDuxSwrYBfmYsEJTprQPc",
  "key3": "mvKCXnavqbKbdCKz4G8NnpRsLycFvJgfckC32HsdbEy7TFABvhaeARnbATTneQoGb1C9URX8EXDGYEtfECMLQD4",
  "key4": "2sVSGDsSFYkn8wiG2g6LnsnGpof6y1J2deybKzybqwKrybA3AG6BazbGyPzVMWDmNr6RKuUDcyTB5KRWm55MNTQb",
  "key5": "23fhHvcGbxSNYh9WZ8DfnsuszauiFomHzxbzYvjA2aqswpf4mQqkyMjZMVw8Y7FBPtSZyqjjREKWJstthhJZj5dT",
  "key6": "2uGoLWw9spxveS5r1H5NHXodWP5m1Tr4XASXjLoMqtCEuPHdDjryFdLk2t7WCvLdk5eaNLXMADk16XuunvsKwNAN",
  "key7": "4xksx2WDtCMfriZQhP6KuzFZy1q1dV8LyinYnCT9tk5AjmYVmCTaRcmESf5gzp2zZW8WxM1pFsKq84uK5TVEnGvt",
  "key8": "5kjCBYGZEJXrP1Nntsebo5qPNmRoeTf4gjvazHEnEbDg2KEQyRAELKdxTuwnCMVcuPUGkQ8YNDFToa8BQhmjbXSa",
  "key9": "4LWYgmpGt9VAHTuMWegbhTqCSwL8N3iiPF98SYji4AuWASZf3gunSney6n9dNaBSAH9onLf5qr7wNmc84BXViSZF",
  "key10": "24g39Yn44N21JG6TtUY6s28JADcqrETLECjxwtRBbAsWMNkkrdP3h9LLv33AMUEggEqeNCowkVuPzpiWTyz37n7Q",
  "key11": "4N5hCSFMURxypXvjb36rtmttrbHw91zzdra35XCR4dWJn3RLeCANb6ZJRQJ4Tb2KGjerPfXQ2ErGHwARPnZUZ3jS",
  "key12": "4NzwfiK1eqPgtd2qSwJQxuMooyPFJtTNo2G6Ph66Tpva6Aae73usEM6grEj1XMKQpJkdyRqVuMD2KBpeKN6Sbay8",
  "key13": "2dtHVSurXjZpubq8WjfW2F6VkcDQUEGAYw42M4VkRASMoqQpAieAqaNouFqkU8EkM7UcG98YsxgVB8XHVaxv3yku",
  "key14": "55dGjrFYYurr8RSZT42uboLs65fFypoGiG8mx3iTdrkzQKGuhh7jDJExTjM7jYGCFyUQ6DdJvEPUGtqkVev4ap9W",
  "key15": "3uxpyDgcdtguhQPmccRsUK9uh1NYbJySArWFgY3pLMEWTh8Tc3xAjsHg8Lc5iEe8XEQ61MLyKun9RYUw1m3Y7skF",
  "key16": "2UrsYzZDpQxWzpP4MYGQxPzA3Ei969sWwPLiqZpdBG58C4JC8LSMroKPYNwpyjVgi9J71DGeT3BQV1aivBEJpcbh",
  "key17": "rjtw6Ek9gnGtntgmrnSE8nfsekKZMVdW7g7xWRNdJ2ZmMWCs6BQtKdoMTVhL7nky3qWaBmcSWrx9i5pxsJhiUGs",
  "key18": "65j6fpCq499Wo18qiJDLBYAQUqFVTkAKY4sw5PPATazH2yoSxC9CqHehUKPV2MnMgdwo2ktBuHKuLmDnKJnXiFgx",
  "key19": "4xyWxg5dcjBNdVExBqCBthKUDpAJxhK43CAuEov9XR8Y1L1xWxvHBNzXJUWJu7PMkycDjDVLRX7Fvvb8vcUXGrSK",
  "key20": "2mvUNfo28FjkpGcg7v5JHyGh3U6V5fgJ5KPb8M8uyrk8xZFSbuGTwRSWr8cRXenMdJ5o4uf5iDnuUQJ2CqXRvYPj",
  "key21": "5BLccEEpaNgHNczFTe1UQfGoxqm5efruDqq1tD8TP1AZuXYjUobs7VGx6kXHYLd77RWKgGUJbvML9isdDzLpWF1t",
  "key22": "2PhfB63Jv4bshm24xsT3WkLTnK3s2xDFtgzhAfWSssJYdG95oTFzHTy3wcYBvyemU5X2Rpc7cbpcBWrYwke7VU2J",
  "key23": "5BT9eaoN3buJnfCgSDGfAVaCGZ49qCvx26YPDsxXXox3rGLgKeVHkJshBdVdGGYW521sQY4sEbbaRd7XiJXywb2N",
  "key24": "2om837oYLa6FAWBGLtwcZNYEG349CP7sLdXDbMBjZW5WbnoKn3SBnRarK5FpqBeJhv8w5cmsfjAUvTrqMaU281Qt",
  "key25": "5z7xddTQesRQWaAp5jdsCPzVwTUXRUqQdynmKLHVbcyoW8RVpaoVf5BzD3CJWWcLXCCinfxT85U1JUQLxq5umT19",
  "key26": "5VnVns9MYarUzmk5mTDHCQFJHacJzyM3pQ9Go9L227Ci5R6TLupmmYSDudB5KHZoB8yQ6CXtsQvb9Jtd4oa4NJUT",
  "key27": "46b93Rm3W7TyNPT9CRqRnpS4npR2urwxKdMEfrPwxpNozyjKJTxuWZMvrSveqjWfj7JEBjdJAJhHwhxEkmgom3bF",
  "key28": "5DwdFTRpo57KxwHM3NnqVDMVR2AfMybdXFW6U7hkhwotPromHHjQzLNzBzb4GmqDuYFZpVT9GwUa3LwLubDiGHj9",
  "key29": "5SbbuUgPSwFFpJtVeerQrrYD45G86VBFeQfrsNfNoVrxxr4sy59VQR4Tm2bTy3LEXp2rqRMqWYDhPfftc4TXvG1K",
  "key30": "U9Pe7wYQ5ZbutDXSNnxiw7SBG8HtgbEwwDudym1cmstvqPzCrg2RAZAQaeqFGq3thiWeZRBMZTEjAutXcFv6Zhu",
  "key31": "3eQ4weL4peSaj7Tu4gbUi2pxcMwhRUTumeJ4hSV41cwvGpR8Ks2N5H1Xz5AmtcU6G8W9fsh1VnkskPn9FvsmCae2",
  "key32": "3Ez8LavyyAkykjCVNsa28dS47nGLPrkxgNQEvsfNFeprm1DZPTsVnqBLG5c9BQRjD1RVtwS6ZCM4zXMP32kKH6mW",
  "key33": "5XSMK593uhCdRFaYNH3FPTz9BfRW8kvKHUrSAA4Ag6hKPdvJqjFXSqcdimuvQ9ES95ApCKFRKLgFtdW82EBMY2QB",
  "key34": "4wvjowRPk7VZkXNC8to3buXFPWBfZmNvHTaayrf6GJVmgPntYApqdB7ruJB5aDzyeLRDPCsshk5Fms3PX65H5wiK",
  "key35": "dSfGUngnPMZYhdbkHW6EoJ8sJkwGbKr921oBEKdYKx7cWE9MrX46ES5HczKT8pyssRS47WcXSSaEM6ySuSWZnWp",
  "key36": "53uq6dLYGwdfzHaRUADPUnXqwjmoEt2bnzpgj2EqnBP8r5DFKmwafy7E3uRDvmxwYyCFsrEQTTnpTJWNqNZhmLqB",
  "key37": "2vXkKy59LDn66VREVFbvqSZKkC9nEWszpaoWFyKNii5V5vZyfpKqrNSGJDGUjhSDENyq4vsHVt8XQJNnL9PzwxPX",
  "key38": "2KNGyoLn83bpkTQCFv65E7rDqPEEtQShdq9b6NML6i7bifkMBVxpPF9ZziWD8wg74yAaHRhUciCWpK3gagNKiLJk",
  "key39": "3QxMmaa27UTXWYFPC5zs9TCohSRuxx5GBUf2KNtcBwbZ3mjxjwgeZEipQtyUWTmnji6YgkGLtpG9DYEVYADi1LAD"
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
