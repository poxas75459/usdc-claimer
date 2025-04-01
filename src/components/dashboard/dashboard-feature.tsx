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
    "cwrtaBio8oRJFRELwizPg6MGsRhVdaUKqywp3VuBGQGFPHHiLrUFYiMe5TZRwMK4199MxJV4XbXFFqUzPpzUaZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hWia4M3gUSjbW1V5MDB6rjoMQbFkbrf27Le2eNDPWq6sKMq6MqQEMVUjSoRN6DL2Y6HdkHRhLYB8bsuY4uLgv1E",
  "key1": "4KvvkT9DegDGdBBTnNF1Hx6PGXsC6yk5BDMm992jLJA9x2jzZqpknsAbYcEpzihrof4ph6WxuC57kk5XMaCd9U15",
  "key2": "2yy2jpbpXZ4rfMTEC53VhP8MSXxs1zdehHYV4LCFagB5T6q59E3Lo1Kay6pUSfLFchDh5psBX9u3gwqGBW5bBsWf",
  "key3": "2rtsfqRxP3iqerGztor2D1XEJG6wJPJ5rqjbQGwm9b4dFkomN9ALnNN6pCdxLmbLaL5C1zNd47ssH5rqH69JBD4u",
  "key4": "3yxcGVqbAxRS1deLBvqbS1D6LmePByP6KFYdWVe3pabNeHiK9iqdPLjdeeue6K3Wgu4bvx29VZkgiC9L31nckdjH",
  "key5": "2RDFq8FmMUTZzwA8Xp2LDZmDxt6ougCq7ZELMPPQSAPN6n7ULFF468KW6Eh76h9JtRd9BHN68qnBwAKTtodo3D7e",
  "key6": "5xkCPggZmVtB7BEuBvvSGpUqSXzV4QssREwDbPqtRmtJedWXru4emCDW9j9nv6NiG3bh7dJCpaAGeGpvwY1rb5Uy",
  "key7": "2gM7vgyckiASGamFNhBH5NFkVzVzLyoGuabCxHNW7UYFhKsMXrZq1gXnj5zDtC26fz7S6wsBqQ93g7jTxu3TG2YN",
  "key8": "UVAKMXeTpqzJ6yeXpk9Cih7t7F6DWyECyaYXzmQ4ycxTxQ8eUfTd9c3qdMsehMyPjgAtb3q2fyCvAruCp4BUn7F",
  "key9": "sxzoX9jBLUkTuT9WQqXs6zygnjbJ5pm7bPJgBc7KY7PMnN8Xpy9D2xgRhK4hGDsdPmowGCXY4oFs6kCdUCoxkaz",
  "key10": "5eU9uTczAFbk8GewcVeY2GtL1HAkgea9bAzApw7CUUGQDdtTRBmiWXfyRMFwjiHemovKouxbg1Vg23zMm4VmrZun",
  "key11": "3XpCJmgABQ9A4WcvjsTcR1vVNbGr1LNCRdzKS1WehtgBR1CtzBstNPCTAwnBxemM52TRLBZm5RcJYmQiexMTFRGC",
  "key12": "2jvQQUTb1uRkrknbwW6CD3tn9zy5W9gNBz8tLJ64LjW1VAy5JjPsyQippuipibXEb4W2udh9obrfTj6rcdmGzKq5",
  "key13": "3x981Us1VNvhh6SsGHiSMAuRqVBQL4AVw7VLvmRw12xiUCpTL4xSbDpQARm2pBbmKLBVMEeHsyCYSSfp3pd3TUsJ",
  "key14": "v2SKcejshk3V2bKbBoFREZ7kMhYn9V4NnwT1oCd59h3TsQEk3kobL4YuCa3LP8ET9t5aU4HWhDZtSfUiDCck9WR",
  "key15": "5M8Khn2AjQ4Uk3Lo8xMrrfjc4PCgQLT5xVey9YCmTCwNFQoKHC4wbTxjxtZDoTPkw2WKd8jTxWk4LJxnFwK7mP8S",
  "key16": "2cA68iyUcCVzManT5h89KvUAvkSGhGbpJ3mP3d7ZdCxJBQX9PaBybzEY1oVfmJFzRaeg7DnVKQUsHxK1Xpeg4gfF",
  "key17": "5khC7jYFA7Aa3iBpLpWkZPdweZguSdmmgX6MF7T5k8Cdx64D1H8wGVusgxfys8DkmtstzpWEwpX7E3L2vLor4QGV",
  "key18": "3dzHAV85eF3i6kKMbzySCnmpwWBEcfYMjFcNmCxyGQCRYxQWoL3vGGjXfcxRkYymk1WiGWbtd5JjFPHNmBfQCqzG",
  "key19": "4QsSnjv6dXSxJarvgj7wBNuPChk4Hxgqm2rovz3pSevdkor9ww6NE9HnED58ihbV3GpF5CP3pCi9KPe68T5SRF9B",
  "key20": "4g2U5GWxfN5vkKb79Hbe2xdVL61J15gSDXSRScxruWh3BiSAjuyQRuxu4sJwsjbTYfetG7wcPEvmeXwC4CbysZCU",
  "key21": "2dhACrYZqT1NhvQJJtQYcLf3FsyiPgAe1HUHWyAqH1gY1DT6g8vZUHyYmjdkaeuBDyYW3WMQQ4YHFsDKyJtTHcPk",
  "key22": "2acbnikM6rUPN7mRtHnPXRpN7D1FDY8jqgpBAh86LSoDRjxtjzTY4pnLBtb7q32n66JhBWJuq3PsVx8qSt7KFaAd",
  "key23": "4AGXwmecGMDhiBzWKW7Mt6ZwG9r1dtoubAepbJmfQQZDqdKCaa3KxUikjWMbU3BaoxcgUTmnCHWDbRm3qXrr4vhs",
  "key24": "5BW32RbwcwQwqNdaVNPJVTsQmnHvDRcrfD24mv3QjVbnZzLDaFjdxrL4574hXdWGNxfRrGHDheP92fa8LNu3wXmr",
  "key25": "5DXShuQ4hceLLW3Pegvfj4qNpB7p5LYmPTH6sx5YZx3vRidxudkzPichgEuKXcVrFmPHZL764m43qaAfwNmKoo2E",
  "key26": "3Govz67U6cGkfqJSFZNTM85WzKEa9UjTAxsWY92qsvdP3RdFEsxPXWeXZi2NFJ4xzPrc6Tg5XXnaAckVrR5x44GV",
  "key27": "3zo1DtucCoHXBm1ZURf7NxyghEeq5A34gXDNBPx9jQZV3E14TrKZ61ZiP2bQUevKCDHWMuHumh5vrsWmwqL26WeL",
  "key28": "qDu4iv5QSaVxoY1N31a9Ahs77NRQHrkmkPhy7xAHn5BsAMimJg5Udm2iWb83Q3pqrRdiBUadU9sDUEdYcYW3e58",
  "key29": "5bo6pDHiYu6PZku7dEkjPE33MxSZ8c5qQz9zSaU4gaS2k8Hc8HyWvHEpYHzx3N2Wi26M7niz7suNvj6cGVkCPT6S",
  "key30": "J9a4VcjLj1cKUe6MrFezPDG3zjs5yEH4GaCaJ4FKre89HcEgsBZq9v1s7yyqgCjvJfVCDzmAVKQFrtC6hCPiEBa",
  "key31": "hAnd2SujAzwEywaM1bimRsJraFzi77M5mxZb3i6BYLyC8gbZDtXyAJSsgCbqCBH7novUryXJYP1S5kE66a19dNN",
  "key32": "5mXnxHEVx2a66Cpr2oDZm7w6NFouXb1yvQuB2VegrjHjeffbUyrcSsQBDV5CRqT98MdDBoHNsxcWZZ5vwGKADdRu",
  "key33": "X2gUJsekpYpJXethoNqTPMDb9NRknHnvmhDjRCJ4RoaZW1ZWfNJPhXcgHg3AwMBh3bXpXKwRxiTYBvT8yDLUiMr",
  "key34": "4HEAhx6kPtVNAAf5th8pxMk4kL86RXvXVBEEBYtYwG2czjvzR6npSXTrbEb4rbco9pax1fmhgUqZsMwFdnFTqYif",
  "key35": "3CuBDZw1D1MEwVywk5jYKXb3MXvUjTg7tV8tYiJ7EKiDeQpXY1EcyExQMCCYFNnFXs3QCVaDBQykDMho1LuxKvoq",
  "key36": "zyPkhW4N91dHfvMLBUBrSeUcwoLqYvdA7mE3mmjXNqTYMMz6JRBPwksv6wjD2AAHZvGsQmTEbcv7uPTMTKxp6NP",
  "key37": "5nPbYmsb7xF8KJ7mtTAJ7dRkrZQSqeXwBxab1m4PGiQEVNNNrX7GACJUS8ETNmBaBxT9SBne82D3rHndSP38q67F",
  "key38": "4x9iQSnQk7hTijdc48dz89ATMD9rEYoy2aNcaWGQ8ELtsb4DVVtZaiMjRPBFYCrN4BVUvxsxazyLHt42bFQAraBG",
  "key39": "5CzRPr5gc4U2M55GzZgcXGJHeuYfD3WZEuXLeGca59cTzXqrDLc84rBt2F3g36gntpKZFkyXUJnc3ZzAutJmBs1M",
  "key40": "5jiLPoN3GWC4Sr1XGpBsUEZVNJ8JKfghtjEmoepwcHdztBZdhbghub2JTnFPiqTcqdnERkT7QC3HXiWoyTiKygcQ",
  "key41": "3G3jxGAoJWhN3QXE4rH5QRrFMZCn4C3BAWf61jnob35AYroh3HezFJgBx53m4pHHzD7Lu3vaKwiCaeok1m4FXVNR",
  "key42": "3Tu5E1Q7e4E1XAyEFXeUC6pokQ1fXNsuEbqz3LrtCWwmcd847bTgHwBDBiboEN3Ut5hb4EVQSk9Ry6x4ARFPmQnh",
  "key43": "5FXbSjyoSxQhJgtQrfFDH7vp3RUvTyaLtBVMTVgk95v3wDDyR18p2e2Bs3rGB2sHXDoyoL7CfpBC7ZcV4KSF1WAs",
  "key44": "58va2oLUZ6VMkeNevTq1jJNC7KWdj7rX7BruExiUPj9BhgUE2h2wnS7bebNwLmP166MQbNC7Xj5aRRBwZbY1xt8T",
  "key45": "3YhFsqLNgZJ8c2xfUPx7uqvXEEFfkLNi3VQudrSrX3z6udh5fCQAwA9dtLzmCN2QxuP98Znhyv8ei1XQnz2UT5vd",
  "key46": "2rXqoJ872v4mxXGsQMNJz8jNsAuRHchWcqpahnQvSZKfXCv4WWHcZ78YdLHGyZGFtKiqVTvLCpohAvDd63Fvnn7U",
  "key47": "YzVJrexxhKvn1xSnKq6DvSeH3RKuA5QRoMYMbtUGdJUXxeAdGMk9dQ5T5YLjyaj3du4EZW1LtZnUxv1Pan8VdM5",
  "key48": "eqNoyai5Eie6x8iHLHNeBn4NJtxCoU13LiqSWaLXqoggd6U5geY5WaXMi7npM2SdDMJasXZov1JcMv1ubdURDp5"
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
