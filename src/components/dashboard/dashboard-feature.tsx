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
    "53VBSZj57CAhm2Ju4drSQrT7KLgQj9MhZDASmhG3cquiiyUpJsTtY9Fu72BXLCDmqZdUMXuMaUsoPktRd9LN1Qoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sUATG3r9vke16w5FXJXoFpTrpkmJ6zUD8Fh1p5ZJ2ZzQNHjkpABNnutaJkLgDaESvadEB18rtPoNLEucWNVzxX",
  "key1": "5j5rYZbhwbkZetY9j9hGDGGvXnhBbL6RWrbVdmGE4hKf7s2H1BrL3H3NdRxf14wj2Zof2DTYCYqnY2SE87NKK636",
  "key2": "4gHczQjRPByZt16HmwNz2fUyRN63162g5U6CAUu4V3teYkXd6cWNa4oGwKU4mryBEnjDb9J5FbytLDgXjFZmaRb5",
  "key3": "2tWRduVmnQop8NxCoHztce1H3KHiNQNNMUqx7ze994LmZd2PH8xXn69jsrPjy82NdjMS2T7CPA7E7XGkQ75VN2wo",
  "key4": "2LJuyn5Fr7mzyGhbspMcQ5E9p5a5mG35a8MhKv6BSBV9haf7iu7EGKhLDPzsLgWkEskTe5vQxbcvkAoKazKxJ9JU",
  "key5": "27VbRT4rduy4znJJJGuJMaMg4BoFqThe4mKBjHJeTm2GGYpbyejB7JZTUbqhCZt9KeKV6tZ1pdsaZYGuU4nZdYQJ",
  "key6": "5kheUPCshS81UGkgD7aj5uV77r4TG9qbqfofNTismE8ukm2wnbFVoaveZy7R7EyVzBGJ7UAvCXjSGDQUMfbhfwFt",
  "key7": "5xXjRdmWLuDaF7h4XrJnLTXZHWvPg9b8HU7nt2zPnH8K5ySoVXy9K8zp7t9WPCfWu5dnGMyNEeCVyVXiiitD8dhz",
  "key8": "39Tcj1WP5LuHBXYbMW7vfyRUPnxqsK2WXxbPSfkWPHcXDbqVWGdrumThatudS12nJG2y7Y18HaBppQoJ2okptEAv",
  "key9": "5mccq7SPscxmHZy11Jo7QgjEnjjoYvxPfG4JtdV8aJ91fsXZJ1KznxJTn7iMBPvVY8sGdFqx5h5ZfgURm2tRkqKd",
  "key10": "3CGYsMjTM65iMUXdYwPjed4WA3S6i8zrTgxWsk2uRPUtPS9F8fauVjyo5tBtG9nPB9kfdm7cuZHN6urPE3efoyEM",
  "key11": "2LZ4EZfT9UJqgUm34YGyNqVX3KJXyF8Dnepk7XzgeksFtgTWAAPeuvrX2ZJVUT4KKHZ3PctrHQ9vTKzBqXBBtYke",
  "key12": "2NTqeQ9WgNscEXPcDMYu87tXqSWbdWgMo9rm8GSJ2NgwjZvuKr9pTyFdeWr1nPHuqq1bcCeTVHAeU7dTieUfPCWy",
  "key13": "dKXYcyQHBz454K5m6AgD9Dv14QCVEjj2YBFLCCV5ABn89s6Poxx2oXrHK7iusPASAmGYMwea7fhQu4A8uGbmM3H",
  "key14": "2Kx3ifgH1pxa8pdrVEvwbzyur4zBH3wuxU87Fs488Snds1R4wPJGAMEriSi8qnixzGiNZZv9oY2fBYE79viQW12E",
  "key15": "3PsHYAaKtMfqMQLpPNF2HEuPD5nSLLJGKtXpoeM2cK7M7eWAz4h2MCpkcozkt2nS9JU7PUEUtg5iVXpJ4tgWjQ8U",
  "key16": "4cizaG5inaXqC8PrzWuTDQW7Lcy1FbM6jP3ZBUB87MbCJnaJHY4QnGCuYsTJqwvJBYbG5jWH8aVasduDT9vkXhZ1",
  "key17": "4udisCk34dKkLMuH6Wncfpp6wkE17B8gfDdpdEHAEUdQJj5Qp9w4kwtRak3x99uKXfxByj7hfEHmezE1tCoQjb3E",
  "key18": "2uAJ8kyEXpkWdibnT9Hd2PTVqe8UiDnCms8EoqjfZsNZoDSXvdgh13cuPJAoy69dbuNfidwKEH2b59TKEPs793te",
  "key19": "eBKmdtNqgnPgdiKwmdp8Z3ive8LiGmPMj9exNrzt8oPUvcAmrRn4k6kLJ7Qag8jjzUSaAEp8rZY4NA9xnP3KKTd",
  "key20": "63r6VfrQhRXfh66D9r4qpgzcyAaZTKdg5PrnpQFtyXqZmvy8j1L8mnFdv4uhA4qPtvQYif1mCqiqXrAxhTZVA9iR",
  "key21": "Ux83ZowHJJoSZpg5UTUekU7CbKE8KwEJt59Y6t8NonTzrumrEN2ud5r56xyayFHaK6yEzFBdXxwEyPqZtpsg47m",
  "key22": "qtr1UWYueS7ytqp1hmBBEiBPYqhhHVnFaHaKwxatMwQ58rnCUrqjH6K7Wgwxh78DPpGciJHBHnDMBR9yUSXVc9H",
  "key23": "RYVSaELoJMTWCC15cxzsFwkcUTCCasXCiyv61wxxmAGd8E51BbkYrMfk6zJ7EEzDj4CzgqThfSZXoCdREPiDP3o",
  "key24": "4BRYbL6QusFpBzDt2oGuR92ePQ2MytDvZWiDBtJGNzXpzmAo5vR54Dh2SKb3G1dpdsDS8EyYunSJEdvSoyG8KpHb",
  "key25": "2iEK8HcXtMsLQAVaAqEBoddzbyWvWFkMLT4Xjt5UEEGzdb9QWRWWKTonZLqP9zX1QtNahRnZ26a2Vkwf1zb7stBg",
  "key26": "3P868yCXm3Q7fobqe44bLTGCbb3W4nRLzsYuqpr8FTUzPfgRPyt1payyFzDzASyW2NJpMusHTfB2iFgv6Vtxm6hC",
  "key27": "2T5DnVWeqfxKs1mT5SajE5Z2C3A5NQR8JtRhFnigHUXHYXCRXZpJhvwrWm2bER1hMmTey8tnWWCmLG1imS2LiL2H",
  "key28": "5db1quQhGGovLsCQ3uPc89MesoTQgH68bbNAp4LyCpEFRHHrJMucSJMnrH5qTQnuzbT1eCHzNHVaWjpxVwc1svSx",
  "key29": "3kvRWfrYEUUkwuWPfb1deLCbm5pTYvesatsTgBRZgnmCCtGkftWJhLi61uwWE1UPELd7v1eXNcJEsiw7CPiQsxcd",
  "key30": "Ng2NdpBiHfkfrpNh9x6tJZsN6JMcXCycB7REZNcaWRcRW1uB9dm4abjKZoReLTeCv4Gtjosgb3PqCGGVZqG9r1t",
  "key31": "URLwHU7Y7GRqk11VpxdZhyFR6mmtbrLTKNpZCRiaCR3qMXRDd5EB9Ue2r4wLQTSXMYYzfCvDrDwGeNnV57jhazF",
  "key32": "32WPwQQzHSemFXdE1mAUBsDZdiAYAXEtNU6XCP6HyonNxMEhyVwYzFJBo66zMkjjNETJxSXWCe5TztsgZxsxmBzT",
  "key33": "56c1dK5w49vC8cEwk6327tJV9YePDhB1ymHh2t9CcaVuzn6bzqJVUJ6EpffyfuShLdfjBF3Y69ky12jYYjwJHkUy",
  "key34": "2bzHw5R1yMcjiprBdhncPiyyoQBSjhtwUFuMsbjsncF65Na3VeoBYKC4ECK3zH8R7g4CfESHvc4wsUr1QtNnVFom",
  "key35": "4LNUfNsTKXG7CmvBfePit1Uifqe2WVxe9r3NaP1uctYLgCEce46jP6pxzry4jNsnXYAcBTnoFwqCE6gw1e777xhF",
  "key36": "3B13VJ8orq7mfbQC2ys9drdMjbsaCpGEVjYQ8pFzKMWt2WXCWXiD3HQLg2PXQdfNWuXFXs6dP17U5pCjCBc74xbZ",
  "key37": "4cgx7MXF2WZKEkjvUZNYZ6LHE9tMHqGG96K1WJuKZGxVk6VQEXMUmyBScysCgu4rakmXKnieZhsLbS5v8GomTjZd",
  "key38": "2cFKQiew458mHefJMcPKjXXY7UJWT5vZESY9Mhh5Z6BDUJmK7PY1cyWeyZicJggKGRbjSTi8RBm7mTqRB32gcVZs",
  "key39": "4tyfiWpWu5EAtXGdy4kVQoFUEqueQHekcEwCa9ufirch7PcV2N41F5KhDGpne7dpPbFxjrmBn3vr6d5P83pAEMh2",
  "key40": "2uaoFCz1GtcVYdFwTBJNJfPLSpk6zN4hepd6Gxy25ZzWmgV49Jnt7yF8e4fpHP4UEYGSyL4RdKjcnVjR2B4JSb2R",
  "key41": "5ahwmAffBrg9eWZKFGwfQRvw8Hap6eSucGismAPscJu6dp7rZK6GgQSEo6iQQ75DVckckQyJGkLC5PJEWkGa5hx1",
  "key42": "628uATto2S6rcq7BmmQgu7QKGWJY1bgu1RJJTaHphkDFHyPVQRZtFVeGnqzWDuPoymSKNmBQWEbEu2jpgJQZYHZP",
  "key43": "3YNdKsVxv9YjQMJeYX2LrpTTQ48fadKT7QFC4s436Eqbf3vyZJFsqXc5m1nAzQBQ5o9Jh3rtxmAMjyvKDFS3bTVY",
  "key44": "2oWkhgojDqyPbmTXAUfezzAy8qwXJwHiENRShagnrcdpPzW6uNX4JNtePeW6jpGmasahCn5jxRQButMtZYFYvesJ",
  "key45": "5HtF8UDBQ6TR1uZXVok4z97UyZ6s35BH2gvBxAPdWGtdjdP1cocpCRZZrTf9isuQ9ahTZRjb6aTAx7hCjywm6q4T",
  "key46": "2RoPPA2gFYuijD9RmYUrWA75pxCQKJ7ZXairNfhFQW3kSPyjWNA1kC6qZWEyaCdz6aPAChCGgWyxxrB9j1eSHxmB",
  "key47": "3M7RnabXHJpEwZRvVf5GU48wRcNUgzsUjUb37r3CnFScjistf8RsxGUFhbxR2yxfpwqeqkDMKX4fvfxi8K95ytZ"
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
