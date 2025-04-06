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
    "4hkz9GdNA72i1YM5QR2rNff6FdfrZDQgnRDMWXhJPjCGCDXapfWEvxABAFxJSfWjf7fip8fjSKfiNXdxYG8zkfMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58UrcbQELXL6szc2Rrx6xE7V8hj9m2UVoqvfkV3iwrHupL7VB3tGyuLNchBVmWuirbGTA6NnCRaiaZFwNyRYWnez",
  "key1": "2NR9Ltfh5sijjgnuowAdTvU27Ze3AJDX2VjqJQYaDkCE6TfFsjPdeKUiRMVyunHrkbvRkYWhNTzwpgPcCcjQrXRZ",
  "key2": "64G8o8KhoJpk1RKbt77rTzWLhfjeAsdSohcddhJwhMD7XV5DvVi3AT6KA4czmCEvCY2egXcNQfDoT4N1cnzPmVFs",
  "key3": "5ebHtNqUcWpZaTiCgYmfqPXBMDb5DpHffRmDzn8Ssm24KFsRLy1rg47azBBudPp8CiAoDTwb7Y47HdStw1XDV7fs",
  "key4": "3ARRn21NgiHexSju1esNv3dhKrAu841YTSdqfRAgMVS3CnM5akUVuawh1Jt9A2fghwStxZHswMPLkNb4EdebLaP9",
  "key5": "aPBcHKLR5XkJfQjeAWqS5Lsci6eiD5vk5MgBk9AATC8pYvKVu8URcti1vk6KQvFqtWYpM5uS8gaaR3aSXTJL5Qc",
  "key6": "4Ktgq8jpf5AkmCY9BG2ZG8ru2xq35bXSCvt2D3v7HUgeLYdQAaFZVU7Hmmi21uQTeXNeehxCXNSDC7jBRt3GLcff",
  "key7": "4cZKni3mng9f46ZuenQgCKwnA5e7Ykg2iMyZUkR9uHTX81kbazzo5888RNABCSTckM8XJh8xCd8yctXd62X9C2LT",
  "key8": "3r57Wn7rZQDagDytYibutFfMr2ZmwKT2e7UnKGSKbNFJdFQo4xseK9SGHamXn28vFLstd4g7Jk3xS9UaGcSWhJgV",
  "key9": "4jTitwokLxUCPZEXj4puwtPvr2NYDXRSpSqLpwX84xWHAYDHg6ePYvSDnsiqH2xwkmEVv9ZD2FVoGjxf7Gp7tKE2",
  "key10": "4U85voJ9MHn7aQFbgAD3qo7Fz3zmny8CnDEN1efuarpVdSn9UEhrJqiykrzGb8cYzYmLwK5E2Pq8m2SBGWE6rif1",
  "key11": "3jebJJGY48aq8QmDfDFNjV91tXMDFPj8dXH9RBekT7JDkpXYiprCGe3nBMZEmxQ4pDL7SqygXrAaeQQFD37MiyJu",
  "key12": "5VTgsiqkVkT3sfwh553zsfPm1qQR6JbgyyCzhioSnsg82nAmKSehGWrFk11atFHVeZ616m5kPjqjL4x1mrbX2yZ8",
  "key13": "2a5pyxXEbGnfJZcuBRtXXhB3LSnMUbjodY9reuypY97yb66m2Yb67AdR6MzxHdtth6JMm1YdBwt4vaaj7XvdgLp8",
  "key14": "qUQkd2UE68Y9AGRnAEHSFEftrv983N3n5dVkuqzjukRyVomcJErF8pbi4MUk7K8Bt1S9CG7kn3h4aTmUP3HQALf",
  "key15": "2wshXVHjKegmKZqmujK4Y5LDK7u7poLkBXnZmRU3JeE9V1m2tF56oGibFxKLSmAkrmtrXJ5wwPStPZVAedFTbR3C",
  "key16": "k6rsrFLcKGDgYxz7WiQomJDbNn75PkSudVwyRAWH5TxQGUPDpy6aSyFKTwNDo4v7KBNg2JsQBatDRewmu5Vz3u3",
  "key17": "2ePVXM2w622LLGA9mx7sdk4whLpbVKJz544ojPrVniZxfZyn2cSPiZ1A9x7ypfS6eXRWRM7aXKDXT8PUXSn85Xcs",
  "key18": "52DWGKYSkUQ9wJ2qRyM3bC57TG5AmYWECYyL5EPXeURUPsbXvhU9e9roD3gKUFkNZNiTiZXUtyThrARVZNQBZwb",
  "key19": "Nc9B59qC9axkMNRkmXDa7xRPn3kpHc5utsSWh9VNmG9Bpkg4Sg9aSzrwGVph8ZDHv4AExsf2X7VbAmepPSCKpGu",
  "key20": "5R27sUBbSFTkUy9Nu4LcUJdeayVXTDYKXBY7BsbiSkigjRruxNacmKEiHAHL3nkrojUPwCU1CA32xeA9Endeq3nZ",
  "key21": "5NEcJkgRX9g1diYaJdrUBjuXuSoUdVorFjfneoM7YbS7VKUDQUSuVTNgrsuh6WTBkhaEj5qDwqWRECUtPUfNwBjt",
  "key22": "5SVCJtkR7e4C56WASJPugQogmnJSjf9UzhSySudJbGwMYjyWxEZfzBmm4S25Q7Gx5rq6pLzZoNWT5Uxb919wYqfj",
  "key23": "rQLouU2sVopaV8nRssi7EUHDAoRGqdqggqp1jbAUDHPncVjWFbPNjuvz1jEKNk5Q3MpqieQ7yp9eANyNbeugQEi",
  "key24": "sN5m1nFt98byyp3b3h47Lxo2N5rg79ik6MB64s6HduV6w856RLB2BxPGziV4jkPgWAQQSjQTQPQte3faJTbubLm",
  "key25": "2WmLk8dpsC1dLaKJtnphrwSyPk1wrWR6iSXhfx2PJtFdBMBmKAESFa5fTEuAuj7xudAurPVkQDm5mun7iKXaHjXZ",
  "key26": "4Z2VywHWLBP8DBSwPoL9LwKGgFVgRc78NUXsxteRp9tUcwcWH6XcjftsjHmZJ5YwiguzMnEkf9u1MxAiCd6M5YRN",
  "key27": "zAwmphBGs6QhoRP3fiWjgPTYVSdnnDLi7baW4NvWg31CRYdnQHMTBFa5cS8BZyfQ7hRui6cAuBKZo4Ft3faWmME",
  "key28": "2L5j7y7zJmTJz2dQBCTeZcJDwWKwLgU3vHHVFvvbMPvdyjZmeGDDjJmPGiNHb8Mz8TPSxQNbYeL6Jrz6tJYriqrT",
  "key29": "3dzAMgfmnr5HvEZi6u919EdnBnPqUfUvQraTfGat7DFJ4QkaeKSzdrK3PFVk7r9w3uL1Po7Ewfgk4w7LW9Ex9M7Y",
  "key30": "3tGEj3tJ4t7bxy62J7dkhrqr6fbYSs2waKSnPqA4rmdBbpxdaDEdRuByr3KBZokJpjBEHjgshNbvZVbHrTJzjH78",
  "key31": "2JQR8d88TrJ851EGBMFTzoUVo32d8K63Siy93R9QyPjwUpzb5i1XK9pfUjTCZfzwKie6X7tyyhowjh8vphwWWyxM",
  "key32": "3Nf4iNrZkCsJQw6G5kEP9dZUAzVKm4xift6NL45enbSN3rGk6qimSsS25LgSm1TbYjtMAPQG8jbnFdBfMxwrwzEr",
  "key33": "4QELrvBYdbVCB4bk8XnQmCLBWFWDmQzmLXjudN67qYMbbnmyXv5y4kLy3FbcJycBjgg2SwddAqTcwWZcT6CEw384",
  "key34": "65mczfauAjTnj8S2jjfNvg4pqnqoqSsME3Viqsj7N8yG7F4S3F4QtjnVkc3moswBbTDz8w7ardWxdujAzd3WPJXE",
  "key35": "TTUUiYyEGyAVVJjfk6yff4KWkUJShxZnH3BcDEgdxWR7oHDbMFXKWLeHXbLbKkuK2nSRXwo5t2kezQeqFLJEJuv",
  "key36": "4JzberYuDKwrzUiBb3MYeEvn6PEHafxghwQVceBqAE15Faf8MVViuGVjvapJ4ZcdGbWfdwSg45PP41oNGtDTDPcq",
  "key37": "5HB3PepyPM3n6q6E597zdYZDWt8YTmvLw64tcqBZxsLqAsDMogcT1s83ai3YPZJTLRC5EZnkBFvmLyZoPqGkNwji",
  "key38": "4gvHdukhb8C5iXTYdKEHapaYVciKVQdv4VCMaDnMAuLStEo5MEgUwhP1wn7TCRHMSLEmLnGP71NZvuahbXEs9VgG",
  "key39": "58f8cCwmADd92NWyXRKMmCDiuKPQHd9w6KWbWKyQ1Zza5cxCXZsDAbNHUKLMX8RFt6ekVQGLA9GwBvrd2ZJ1YX1k",
  "key40": "33VBQpdwpJFBz96NyhAynKA33oZM6aX7vVSKwCpwequ4m9FCBrrmJACPV1xBHwa7HndaX2WtABKEGZfnEiyxiUrT",
  "key41": "486TNhTUSVRwYbr5jvMw22WjRUFAZPZT5kzWFSHnwt7npf49FRtFLWBuXsmApuGCeeVzBSgHBEtYd2H4RHD24GCC",
  "key42": "38Gao7mKApnPZxGaJuURhSMPDeqQvT2s6DS4XPJuxQdqsRTvQKmSUkcT7QbXsEDrSf3S7jn6UdqyJTrePQ2NG8Nq"
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
