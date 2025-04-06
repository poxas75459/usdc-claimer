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
    "5jzRKGRvdVB9wmkmmzJfKWig6ZtGHdUvvjPHB9MKJfHMKZo3D5LKZNJB9Qvovz9XdixikhAYgC48WYZq1Eq4k31y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v6P916M18jQwzj4wdNUVzVh44rbaTsRsAcWQjfrHNRkaSuGjpca4xfJCDBFf4Ezts8DKbh5dcXaN7jHnE5DHhf",
  "key1": "5A7VhqxtGo2AxG5e2rLuddAzdsb8ohFbB5cDcmLKeCpXs4tPW4wghhhHahUtLVaXf6VuVYduyig38ZpwmAMeRKmK",
  "key2": "4dmeEPsu4q8PxY4v9MtfwXmr2V9XMjxs5XDxKJLGwFzBUjv7HWczt64rnjfmb7E5nBv1jyNLVEPWFCMp2wCu5iir",
  "key3": "3FC5G7QrATP6Mo7gVov7BbATXemW7Ltk4AJMtHrTmPkk7XETFTS72J3rqgDhabpTk4RBQUMDTxoUifVfBeQXjKgy",
  "key4": "4KmBvb3akBevrfagUMnAwX9r2HsmGhNywkREpu2BdivyuxEqYzgyn2MXja9cHFxMXv5LrxeG1S5n3KkgkJPhSMXM",
  "key5": "5dRWdoiyJiDjkyLMDQpNw67kNdPVv3SZxhvtxQ6RSMEqyZSzPEtm6g3U9N5wy8UXkUpSBpgdHyrpoT6rin5RarP5",
  "key6": "33yzG4ozk8JDxnv9E6nHGs122m9jWqwsQ9Zzi6FChF6FbTembQFMDhseaWApP7Q26agULtA4Aqbj4CZ2aFrQbrkC",
  "key7": "2wF5LpVeWmk86KhLqgFLFkSe1NjsNmtstvZVpjnrhs2wyA1jhPPPhd1yf6X5u2F4MG7q5jFqzww983w4QiNdatDV",
  "key8": "5duuvwXCsnhC9QjBBV2iqmdizRvFH7qoZaWTUtN8gj6NHB9Qbys4UB2jXpoLqZomPNhcEt8tQfqvNsbnTbJn5nen",
  "key9": "2gj7bqe47MUrMfoX6BRgMHSHfeC9ss3hF7mRptvxMfgysYzCKiZkzwixPwCuSsPBAo2TNNY6S4qVifnPzc7HXPRC",
  "key10": "3z8KEJUK3pSzjyHGXPx7k3AQaWS18U3Cpw7sMDUykAxqodnsfCHYpJxRDsmax3Lbns4qijfNt9imWgjvVrYnV1Ei",
  "key11": "3YHMAz2WwrQc3GahEnAn3cmgM6ByFXrWfeCRAQmpiNL8eJMxQWuNcq42wzwwcJSgZX2MaWqoDQ9nVGbuznB6uDBb",
  "key12": "21XJYaLx9R6gvmCpDYWcS8w2dqcL4Ymkf6f4zbWGTY1neV4tHbMFHewSMU3QxX9oxnpWiAKugV6y3BsCrjoHjFKg",
  "key13": "4wBk4V1MoLeFmneQWN6Zf4vkArMxLfqzxWpMDND1dWVYAPyWU2Free6E6YywcLuBi6fdB9qHQAa79QkVQ6mi31KP",
  "key14": "awjvpnCApAjP2ocq8emCssztK6uEYQZJdxEeZ6yQ2HYgTNWkiX8TLj69ozmR7WZ4jTLXyDfeuCBT7QLb6H1VMhA",
  "key15": "4xtg2wsJyVrh7vbSnUUNiigYnmpkZA5oE2TBbyg2Ud6tS4VR25Cj9x1u6oYXjhn3ymodVkWfn5CRksygxNumgk6j",
  "key16": "4YZNs6Hpe3Yw2Fb6eD9uR3MurLsTebsYDJTfdiDhVhmALepZM7zgjuGgRdvSokr568JLZwb4hEqfyFYEYsRxH3V8",
  "key17": "4GooRpmd3rsotDPFageKmexRtaqLMc9JTzij3NqXbr5rCggxzENPxUhmC2dmwDdwYTQGh5UiaHHcmTbuYvE7Vn76",
  "key18": "WwDF3iHJ1D6ucq7nBSj6QhRSbR5DkpH5q2PkepvWfMWs8qdWJhCVaAvAF6MCphXC5seAzXs4BfC3LDsL1XkUVBJ",
  "key19": "5QbMbNg3v25618hPibANgDWxcE2mRreccK3EudQB29NmGDmp7rsTDaeH6xzJ1r9ZgdRXmQabg7pAVRJJe7VyNE4G",
  "key20": "5aWWRyLmSRZ6tToKbYedbJddGZSYf8izqgMLuwQt4NVYT7XDvNb7NJJAAq7b7gkXyxmtNcAKCw5WCHzZ2se1UtmH",
  "key21": "51CFmnW3VufWiAAsx3bs1hEve7wh4Dd4GaEre73VJBjT5qzvZm2uqvmDuhTUhmesgB6V8xFm3vDHSmhdjz8gqdYV",
  "key22": "s4YZae54CTMNhj7KXDHNutw7ab5dsNzGog38pru9X4goC9dqb17TKJ8MgSCQDHJaVjDPDnns1h8fjiFu64vG8gp",
  "key23": "3qDRkgCjxETBALJtmLT9jBG7KUUBV1sXGSiuvD7sMYTUMUaYJMmzfuMYSYqzA87mePVfu4mQ3GQxGwSGgUSmbHUA",
  "key24": "48nRLFCJiLU3WQchZq8BiGyQR6m2xBCdbD2WCeY7sSazZ6rWAP3pnhpeAfTEFC4JfyrGJq2JeU4D454AmxuFwBUo",
  "key25": "4LpjeL1HzDBa2sE6nc1g2v6JAy8MQmP1ke1ZJXDnr5cu2LVnBsvHev1EFSDzUgEFXPBdrhLYaMG5HQA5gLLKTaQB",
  "key26": "63N8mJeVUj1rV7zJcBx89f3B3cFtfGGT9Hyg7RWBtWwvg89uVsZCvn9rMhGT4gub4CTh64KJVLR4x28KzPDNhEbp",
  "key27": "39L99eShPhKRxXKCRMZpCf9UqG9XyRHKQ8TeFGmokaHaqy2o9eoL95XTNpAEakWWy6teyxdaekG4TzQD21JNLM3m",
  "key28": "5NRaDTxrioPcNJfCzsRXzdqdHPNeafZ9H94JEWsMXPeXsbjWkcQeKEr9JedVeUHz9TVdiJ2kqt9tpaLUU68XyuvQ",
  "key29": "5o1rYbNgjTovCaufYFhncDnQEVeKSnc2nyCMk8EFZ9Y8AVRMiPkHyqvsuq9AehYSrCMY7JU6iEQ7Zvfu25Z3gAmH",
  "key30": "2anuNGSQpNcsVqdFubpX42hvevStg9H5CcKuqau4PYinr9V68wuqGPqPX7JTtQcdU9Z5L2oBp5hCJTazpRFTNEpX",
  "key31": "5R5s15W8BWTK17WWZFFmZNyPUG7QpZqUDKsJnnt7vVdj73E3CmBfP6uu1RKD2L3TJ8D1wr6HspeLuSKX49zTbyqw",
  "key32": "5DSmbdfsciYqjkLFz3SrpSvjA3jXWe1gLWevQbpYcCsYNTu49Q54STdSgLmqTPry2ZbTQRpX9vrvzmBhzajz1jC9",
  "key33": "4LUCyARKQiDcZFFPFSvPp9GuAdhJ45Sm2ru8SVEWmE36nnz6gUFKY16RPHUZWWiTA2eqBahgLTmgWiptjKSbyPhA",
  "key34": "4FRRmYGoVwcik3iknjVByhFS6zca8hxcJUv3Doo2236pidAyJWikZXhMp5PntkuV756rXwpNDbpPBqJ5rjsv86uE",
  "key35": "4AzZZMaKzVy1JGp5H33uynR35YqR6sHZqzVoSYMgKhFtLRRx9ghrrb7PTdHuNMLdtjqHqzXHL4YT1EozNn4aohcf",
  "key36": "4QZchRWBxo2UZAwTXjeZ9xUggPtsxHDLxNzPupDgds5zTLtovuNtiBKPyeSb8P2snf6fxDvwGeBTv3cPqpU4vb1",
  "key37": "2UgsHUKthGggBr1VBWf463Ve6MaTPzdhLABNHEw8nrLezcMZ3ijZzz1dV1phjo241j33fKCBMnqAVxnsyDcLeYgc",
  "key38": "21nYTEZKU2WXhmCwew3yk2TXcvJweWPP7kfcnKyTSXheRH7BrArBzHRrZdmDrQgF4mEi61eThRcJHD6YJJj69sYf",
  "key39": "5MtWUCzDoftrSmynNghS44TqYh6tWCWEb7xkXx26ST7re5AZJ5Lx3KWDxKjqjUR27dfYVYgiAYcDUsAesLBisZAp",
  "key40": "2rFSQXoQebhFWme2nvsd5rbxfnRqTkaCPn1jc5ByenQoxBvdLtDeiB6iWS97iGmTsZ6PvJBHu7cJoBWao5qgeLLp",
  "key41": "3SPUs4PTka7h9YVJ5LAowHfjEs4EsY1477uhM7wAsjkJYBPaqkVrcy7hzt8VujVfDwS1BJmXQzERUnDPER3GDRfQ"
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
