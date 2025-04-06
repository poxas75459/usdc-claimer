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
    "3xiU3nM5Qgo2pWVAdQwraxZm3a5BcKNHou7g8imLPQsX9CaNREhK3EggUKaQYDHpybzsRk5zbgopyB36YMwVSJ96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jfR8YeGJrobxZwfDHs22y3bGXJPnNjPrqbM3E5ok9KFpcuANiVJKeVD7DAqSYsq8r71DYEatXGvqCDzz88CVJss",
  "key1": "4qhSagn4pzR4qeo7MLnAXDzgiPKG425KTkYV9P4v1kjCJxQe9LV9Q3i8uNYDtYKuA4grGTZ28JLDzt277n52sza9",
  "key2": "2Lf8XtSK6JWLvLn1A3Yi7uTLTPJ7kvjGE39WB6xTXtt4EXfzWvRz8HxB6kphCFs37fi1TMumEZhwwhBPSqLPn2GG",
  "key3": "37Adwrmyws8qLU7Z3xYUkPjtsFF2fG4UajZo2ddS6kwQBNNrmkXtgHaz24nRvCczFr2Le8EnU3uDaZynCdwYB7CN",
  "key4": "bzjWbFYC6CuPmXQP6LZsQcuSb6h5FrF15fRLdPKQeLiyGbVc9KMuH5NbsjMUErKoJ3LBy14w4v1ThtAYezi7Dfk",
  "key5": "2nhuByL1JwE7TpctjHQ9izaF8vvQieiP7hF5F4ifF8rU538axDc8bYLPBzbvmNDNByLur3aREbH4aKzjeuQiGqJJ",
  "key6": "3uGoYwYuDuHDRA8ippdpARMLFbEsyyzjjYi4UdU6xCsA3ayfwWRsj6o8NLKayvNo3ibLLNmhMxWpBLjeEg3hmX1v",
  "key7": "4vsZf8Pg5wkjYsQZioLJ1VZikPhLofbdPuwXyssvRsrputxNMcQeZsR6t7m3k3sayrXzVgVMujyghQNU926LTRuj",
  "key8": "5ba5RVvoJuSoEeBn5kAm6HAEmwJzb5b1pmNwS8EMtK4rPaZyEYxHbv8vqNkNwVVofLgsYfdBN9wfsQwLeQYbxeMy",
  "key9": "2cZWanCg5kcd5jLQAgJ2k44946iCqq39tidiSK9dB9Ht2oANuf2zifUS2FjLWeCqjj2BsS1tDQ3pQH9dXsuhorZJ",
  "key10": "5QDgjGUsxc2N6g1y9oaQRKDXgBh8NfeB3mLWdvx1WxwjjUnjCTnzwq74PrwmxYtb6NqyHKqLVNgtjc7smpsgvSwZ",
  "key11": "2fab4EZZutpbLpetYy4CT2QWBU4bL35UJg5LJ3UVp5rr2kr1QZE7ERa1AYrDbU1oj7vX567A9QBdNqAYcx8wZ2oh",
  "key12": "2qdgnFWtT3aEUpxjWNcoBg8Ur6JUNavKQeJb1nWMQc1zCji66MiphM2DHp1Hfy67B8JKY3WyAjKYNuHfEdVG6JtK",
  "key13": "Yuaa7KCgYjhCAh9foBNbCkhn9BQRNL846UGehahZ8RhAiYa7E3VYZ2awCQjk627Eif56ZYd6aR43nX1WANQmivg",
  "key14": "4drC8XsZzjtk7qNF3UKwXptQLRovd7L3cSHMWmF2FtvUJUvDrSxgerEUNYuXdeYSDQa1LwWU1iYbYBkeaNQAjgdj",
  "key15": "39aGSDhAHmjSPeqFv8EJTEMNceJyV9wbR5Qir3uhvVxrKocGTZzQXt9h8w2HZkhEzUFVpyABW2j4Pf6AY6dPUi46",
  "key16": "2eeQroD4bcmTJkzfDbVp2Dtjd2qEkVAXBYHSVPaVU6np9Bo4uGJoWxJB1G7UjpDtXr7ycEf5jps2sxDo3F1rZuE",
  "key17": "3S9SV8BTEnWtyQfud5h9khTQ3acvV78mamron2vN1Uzeax83vHqzJgdm3QAsciDWVK57BhPaGJgdzYvZ8YWz2tv8",
  "key18": "JtU69C86vSodTLYM3DcQ2KfXbzA71PDBEVQqWh7m5fTMBesP1QVVLuqoLune5Rc2Y2Ra2m6ttQUn4JSmPN2kGfv",
  "key19": "3QKV7t2zxxzMHnofwMznu2vjSDzsFrhLEcbfaXctFjTZsdgefFae2oyGhQFYSZgH1w9tS65if2QwRnXYiEcEYojx",
  "key20": "5pFCmanpXTTQCSsXB9CtXSrqLJw3UrhV82H2ZB7B8axBPPj8QoQoBwRSQeiW2HcpUnq42H4USesRrtQNDHj41aEd",
  "key21": "2366JT4FTZRhhFof8kbathH8fNqYGsyAvX9Z2pVggmo7sRj1k1LRps4B5Fxc9D5XqNyjevh37hVDkui7ECWng1DL",
  "key22": "551Uf1pSmnyD13y6FCbAj8WdzBV9TzzYCXBbyNruEUzpfq3EqiK9zVuigmMEGXkQsfjkKPi7iWzggSsNf3sxzebH",
  "key23": "H8FnjSdiEtk3U8KVmD3mRKw91kR1EeqdzWM5mCaXxnTDSz1Fmh2WBkWVKXQetrZpr4dPmUx5nJPqBgwXCi1DPT4",
  "key24": "3gPdS3pZYGB8bc7ss286bxYBScHK6pJt1YjmgEKupSLLw337WMZQzZK5ebkrpkMVRSyx7s29Pvea6NXS71SpZV1F",
  "key25": "5hfzjLstsFjTLCNeyMfTbBY3tDAbK7JWUWaHysBbjYvR9KvsWfJzoESLnPsSYq1uWYbGn9nVZUyQekFnXRJxYReb",
  "key26": "5pXhdY18s7SFrGALgyvbJnG6EKoT6ndiAU3cDbN5QaBycX7joX4eK2vqXU8JCoVYx1rSrV9FaWFjejhrM5keBaEw",
  "key27": "3UXwksjLp7XUXdLg3qWQrcm1QTySeUAGqkVN8iooHsjnpcgth1Vt2JYQdjhGRxe3JLf5SydtEvsuvRScP3LNgUhN",
  "key28": "UDdAj6VpbRqwC58NAdbQdgagXnwEeLoJU1w7yrWdie5yNPEWT7zjY5hm6rb9eM1ddJW4byxngSQjCPsMqqkM2bM",
  "key29": "2yqWseKuAXfTxeMLYbVAbeuxKudnYSLhX3Jf5WHGPdKUvtv5gCfLgKJjtkZL1TZWoZJa2KAxyPPZgmyk5tW76C5Y",
  "key30": "2rMp9VmrPJxm6yUzj7FjtTok8XYh2GKa2giozQuRVwaUEYJjDj4qqhLecUSwRuoBhryfchWp6SfoZwfy77NDcutY",
  "key31": "2WuethLz5B69niSoKVixeh2nWrCziPyETHSJXYVT5ddeMsMdRniUNfVn2MUTVDBcvyyD5NzvrwEc3es4AdUVP6PB",
  "key32": "58N1nAv2yreHF1fFnsbTPLizjTN4MPY6cfBodzVgxdztuxd521ynZC56FzwoNMfi2dx2wcuFWJj4BkcySa28xBAy",
  "key33": "4mkWST3gR97vUTf8LNBqvKYhLGRbuArZ1A6GpvQ8A8iS63ovV2RbXwFEkvtE1cqBhJBkdjJPQtmgu5angvSY537K",
  "key34": "4BevLqRjXTnJh1fyi3u78mJWVEBBfmW9iKqguoLNYYEPs2MEou7q2pMMsa7gotNCdn6KMkYJQ1mxv3ak53o5AxSk",
  "key35": "FBuVWnZTgdGn2B3Rumqrb1zRAYz1M6FHFvnMFctb2pkE9E4R2BFVAuBZVaTgK6yimFgdoqjM7QhwFiMaz9sUSJT",
  "key36": "24PEgP3fuFF9e2s1XvFBCNKootD3YuDyzkkWP7gwRAoskDXs3eAXuQ7bDSiHXdLwmGcjGVmdTuWz24UBA8vZzZQA",
  "key37": "4qb2bSNCvvjeqojkFzTeXrsmtasr8XhfHUzxyosL9uDBbPG3xxNheNyvihcpB5dVashruZU4bgaRP3yR5sAKUcXx",
  "key38": "5evwFN6H6bqyhrHodpq1GA5SdXR7EEnVU1A7J7FbdrE2CWYk4D51Y5H9uq7bwFTv96MN21mUzgiXsgBZhmmSb82n",
  "key39": "2s1op4Js7b8BHfnQSbgNby8ScdCryRrT9ggZWoupQnxqz81B6sPHF4uKtWFyYkYGNiawLsnk2kicvgATSznDEPGD",
  "key40": "FQg1WJLdnVGtkhdWeuxZsFMCNYdY3TkrfMhG9e3xRtinGNZB5yQy3vbjT6zq8PPsFbKRoxtgcAjtbsFtsL2yVSN",
  "key41": "vreFLRPt5ofkiH2Y6EUpoyFxDP8k2AF8dzeqTWH8XHpEqv3ZxW6NDXF9cQQgex7eHvqG3aap2xfH1zhhjufNivQ",
  "key42": "3YBpWqiNopa6FzDsVqi33GCq9usjZPj6Ckvvtzrkw9fantCaavQJcBYfVqDo121f5tx8Fh35UwJM3UrrJETHhMDT",
  "key43": "4wSrHr6Li4hVbYkcPQ23ndcXJqC5VYMm4jTeUitUt74VVMmi9hfZe3pcAgnf8JT5wqTTt3tyxwForVxY4aMagVUp",
  "key44": "31iYRfjepwnfHjY4PCaHs8GbignrnmnAxCYtbAaM1TJafBpHb6D7c48LRnHcfsMtTLbTwbDLTdPzGYXsQDxrzh4g",
  "key45": "3GoN1tgQZLDdCGxRoAm1d3QGzkm4zUJRBVEqZHVja5JZmWHpNfbWe8CFDmJFvjVCSMMy8LEPPfSfeSdy4BdhMx96",
  "key46": "3H6q5dK5z73SiHw3nQCVQTD7VryUu2Ak3T1nYGJNghvs4od2XUvf4GXXxGHRRZTqUZTPLih6RNM87wRn6UuZnKDZ",
  "key47": "CDJH8MpHb3gdebWF3xpu2yQuyFrjWQXjLAnpiNSRazDzG1kzpgpZaihou1ucdH7jYTLrdfCY2cM25QzsZYXnuAd",
  "key48": "3rQTQyiCF4Cey5uheJJNBJCKFjC3kCffDmevN88YfyJ9FgDPF4ufm7RwSXB1mMvVM14LAVfmp4vuxXvKAZ1bkyHc"
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
