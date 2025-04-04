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
    "4m5cLBNrnAYvGZoU8b1HsyDtXJ6vGUL1a9p6BhJ4pXypfXdThy9paZEPw5XSCJrfyt5S5NjCocYxpWPzvFgFF7WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1bfYjuKykkuyt7YQhZ7T2Do9t6Enx9XcacxQ9z14UAidYN1rXE58xaA6d1LvG2pEvg45zymKSE6WnrDRBNvTioR",
  "key1": "4dfG5f7sZQdFuZXNGjzywBTKJFupavJ7Vu7DBqhkdXb5jHHwXg4MsbgFC9zXePBhcmSZCe7waFmpxbeoa5FTnk82",
  "key2": "2bFe7b2VfuBQrttPNqQDwgBdHnm8euxMHuJjtZZX712dXsDFrZduBoGCViaX71ach6t25nUyZuEoErrqYyeYsc44",
  "key3": "2M4CEAS6a4zbcjRiD5f3ma2qebcxPSKcHXCAQ9f4mXomu9cJQMUqnNJFarq8KWJWcv7hVkkcec3HLuJ7f9cp6nnH",
  "key4": "4ehg9g5vKGsteEbweiR5LEvXiKyqYssBVTxykqhmKLdbqtXSGtzbq36iPTLBZZtvEpicu85J58hVvV3b29rJdXYf",
  "key5": "ZouYCvbKH5t4VadyJCagPkd8eBUWbDrKuTec8S1A7gL3EmSnH84iiWjqpkggdEutfw88Pz66xWDXuNQiEgMnroi",
  "key6": "5Be9dxYVGEfDBBzq4Rmwy9mxuTptjsSRcALmxob94RVLSBe1khVP6ub8ZNrNufUZ9j5jhaVwLn2DXt8cWakrnjQB",
  "key7": "2E4noUnwQAgskkRgb3MGy7Ea911382me7QbAt8MiWf4EHKYDKzKsy21Da48U8kEBsVZ9pAQ7gfe15dEwsdBxZEcA",
  "key8": "2dchChjT2i7Cdb3MBch7F7zacpRe6HXB9nVzScRYkp3Wm7ymyLXuWUhJQSd5wgovVK2QMigNN4C4ZuyrNmhE4NSd",
  "key9": "2pYiFNBDBU3NLXWUfbCyJYjtbMzQepM8ZBpEex2u5q3UCt68WbB9D9HVBdXJez4Nnzdbdi4Qt1H21FdVDEdyTAqM",
  "key10": "615AGRPvrhq3fvbZMgvoESzc49bJx4PhKgsRr5EbewKVPDgZGFt3ppzybxmqMfR3qKq1Y81Z52nLUqfgALL9H424",
  "key11": "4q822AWPAhtCYVmj6ncE3ux1BhKgHnBsDcGx82VKfabSk4e6sKHykCZx66xXR1knrtdDaietABAsbbftdBqgjhPp",
  "key12": "2EF1i29DFjcr2RemsMaJN1efqtYv7KZ3pNHMND81LV2yeLDe7T9HdvxszkR728WgagxjugDu5JvgK9dTYetnSYb5",
  "key13": "32hoB4CQR271zFBc43rR6uPJw1k1mMh4M77g6s1ivtTkRx58Ko2RP5oKhPxWGbx1FHvGYR3T35Spr8DLBmnQnkWg",
  "key14": "3uq46JuvPgGL7jFYvryiTeZaQXLovfiXCefsXUVip9NFfpAiS4eeiGMTiECUs9bfY7ZsgEkNr51WSN14abi9UTTK",
  "key15": "34iijUckBSw7wqBTj2c2t8v91rXrCYsdkwTRxV1aTwduTRdKdNC4SFeuqcwwVBYea1L2Rz5Aw95kHrYKkwCgwAyH",
  "key16": "3xhebMDEjVubFZqhWGSSjdfBLb3me37y4Fbi75HrYsv3JKduw9asD8zRMqUq8AC7xBuo3kz9zXQsEemdqCDmHeMo",
  "key17": "5pDqF8bM1GxhFgjzukru1TqTJf5DvX4QS2ck279tNuVNgi3xcCRBNkARmHcWHeu12mED1a7jsZ9c4tf9qdYLi914",
  "key18": "4gGLyB3HXrdfj8ZHNg234xHos86p46SWBgqRetC43ndo6WXCJ7B6k6kh4E9ruTzucBUJouF2HFrDbwK3stsFiHGk",
  "key19": "2ff6u6hVhWLcRvwvpAnGfE7we7uigXWZ6tXqsxxUHGd2Xswgzd8u2dcfohxL9mGsxgunvi6Ww3YecayiWkxuwgpV",
  "key20": "3Z1JfckBTZb55VUMZ2AxSg1XL4mZ3QvxN9qX9eno9gZPUUuKKSvt9GuqvkuQbEUbAFZEWXm6VvyBTt12n7WiRwU8",
  "key21": "45mDugAxh6AU6W52NeWnVS7KoVWr8NtkyuhHqYyTPcpkf5eBA3A369LDvVbcxgYbvmL9qNtR799NFJ3WVk7hiUuj",
  "key22": "2Muyd3hwtSKJ6JcHVEHJe6v4e9WeqkEPFNAERDVkagJJLgxmnC83NSkqQKiWKYE6ga2DeHUEbgyJbRfF9AxF4n7v",
  "key23": "3r4YmV8c11R2qxWBSbzj6nBC1Dz9184QDpVAuJprm4iQkwQ25T8RT73HWia7qLWyiaEFGxemdjXH1MWr8tHetETJ",
  "key24": "2NJA1pfb6Pe37BjkHKYQtBJ2CBfjDA3GENcKvmLnbbCJHN4WJfanupdzn6FjCDswGCZd2W89Sz3UBHivX3YDBts",
  "key25": "96C9H7syLT18X99EJA7pbmcbuzB9hziz6xp5pM8tEuMG13CeywoE9VqLs51iNMcYmfzZ1BFVEoJDWM1m4t6J9Mq",
  "key26": "5v4zC4N4TLChfaUQTjY48M75c8p3GpfgSaqZm7ooyfrKDdkKCUNyBfDcLXHQwPXGUD2pD6UfoTjZdZoJWBtyFX84",
  "key27": "Kw2vGcEt4SLiev8iwWJXJ5L671hzJzddJPCCZ1QyaEfd8qc4nCymBAf4mADDm1QcNBF5u47Lde1LpNWVZcizX4Q",
  "key28": "3hGoiKjXvXXhT8JdKLNjnSUk4uG9CyemK8At9QiFRNAP6XHkNndZXdbJhHzjwSEmV5sRDfiowgRyJfryibKNqq8t",
  "key29": "YuRfnURfS8DHLnAMTsFjKhB2JCB9rp5dkUCRLeDaqMDAqeqrA79mwUyfefDuVmvpSXrNNNyEvcqx4AT8i1Bg6u4",
  "key30": "2nVUGqQQsWSD7FWhRAjdmsmqsujbZjFyyEn6ubaFpxJ62tzr4UXBZiUAx21Zf9dF3QmjUrHx46CCWzoUzLwgdgjq",
  "key31": "48ujCMPj1TweJ3KVesUKSSLH3HNr4dWfPf5ocR4EsDqtXqZL5XibnmnzsXqzzza8S5bZKMnWonqUj2WGvptgrzkC",
  "key32": "2YQy4mhiqJDgczcpi37kp3wwRWdLQ4K9aMV7sfzJyJkPZ9vvGyw6AcZLoXb2Hhkn9CWa7gJGPhzw3Xqa7GNcczmf",
  "key33": "57mrJsdUonqaNkRLUsbMk4PsMjGqQmBZrPNfrVqwDtNPFfLWWE2EAfuJQAv6VPpp7ghEYxWjWAtw4cUXYzkWvMYg",
  "key34": "2ikuDAmYrYb6YnXpKQJMnS8b5WhCmWstA4JWJstXSdGX2gSCuedKd5B9t1QEysDfBmwgbLCjwFxAGpaATZvNcwB",
  "key35": "4E5pR8GK3j1yNHDiH4Xg34JumDP4oh9GtmfNLHng3mVRfaek1m8PkvzaaLQrXes1xVvTdvLHjNQgBFzfjzADs3uU",
  "key36": "3e4Wsxh7QssJzYxR6CQBBmBLFoUWKZ8vgQKt5UjXrzMQfapovc6h35r17izWu6Eshv4m3KVC5b5pBoJzQLhrLV1m",
  "key37": "5ZheNBNvcjTUWP8cPufouKqdH1Kraymo5sGt7ppUUshevQBCeejVBbcBzzbV6JtLKQzVodTmm3gRggVjhJuaUQUw",
  "key38": "5QVzq6rxmPUQQG3x5MTEvnA41qdLQUBFAZ1mBPmFaBmjgACWNktziPEr3HAjB2BnzXdKQPzdbMAMosABpMDYxRzc",
  "key39": "4xfD7x8hwQBYM7kgodFvmKKvN3QRHY6FrYTRrQCvpuVNJN4V4sTzxfEVsGLbmA6wGVaG1ahPrukWLbdbNvCoMYsP",
  "key40": "3XDVa1h5CuvVDjzanFHQ7VG9BjtSLYLqzmqrx41tiSksEoiouZgytXw2gtM8gB81Sveu8oKEoHyfmFPs7DaV9SBo",
  "key41": "4LYXt62nqnaFNMbVaaNpo8Gg75DmCT38aQNrThXU6G3H2PbSjwpnbmMhk4LtHUX85yNeiHQPPPdtFgyQL4vDgfv1"
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
