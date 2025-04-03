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
    "UJAypjiWjggT25FSCTSFPyueS4rFayuHpV7hBgsP7CUia4xBnZ4R6Dgp46TBfFLvSPHYh9XTx3f2LhPbxeALXf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vNwfWjY3VhHJCi9TMUaYSLxwJujoTJ7qAntLdmCM2GZgEuHN2N1jP3G8hxaPA71rrbXNdZtJ1PR1zg9SvKmyxs3",
  "key1": "4WwSSBLu3krzzHunvwmzbGnLDnMmMQviZBcjGfSE8PeDuTeferaVdVFnjwJt3Xfk1VnvktQNQ9e8MQYFhVr7TX5q",
  "key2": "5T2qA45ycn9wXXX8TPW3e3k2ef6X4TZthkgYh6qY8Y6uFjrsGDHss8WZfZd7j6irR1daVcL9qvHsBec7QKM6YPko",
  "key3": "4yeBi363DNtJmp8Ceq3zpQPUGY8bkqr7o93M9JuQqLUWQ8LuFSGzR9LEGXBFMacHSFJ7CnhtevkTkR2Z4m7cDTPq",
  "key4": "5sKEgfh2BeygNRyQsQYr9V5HAxBpq7DqmSNJizmPUnYXeuMKu8ptVY1TpBMQM48KquCpbVeRxwPRnjWLy1PpawTK",
  "key5": "3pbTn71LoacuriewA1UZuLJwpzj2TugsfZfNEfQc9UkUgVxYssKeV692f89WpxkZxgsmQPdSqRRGdf5DgX8hiU9r",
  "key6": "RUo3AXDqexZkUKfSQfbf1HE8XR3oD8xvFGgMvucz223ptqr9rMRcy84jS9M2jZFYhBa11jQBWtMN1hMqDASKPZu",
  "key7": "2xA1KmzSYS8QiTuqLZnkxCVrzBr2NHomd52ZY8zrX5VsuHxDPBcHoE2oopWRQGnwJ9Qi3gFVMkpAcExrcDKSNqE6",
  "key8": "5uYni3UdQ7itMoCQXwbGbDP6EedpdFEiVfGfJxvQJW13VzAdR7vP3PvdswRY5BPqDtPnyqBNY3fqep8EdQDRKnSz",
  "key9": "2aGtvNdPQwZ8v7nD8bFvc3Pv1f45YTYiJ1DAxT1G2PHiQexuu1nkWpNMPitSUqT9WUJACZTdkgVu5FhmApD4GtX3",
  "key10": "4BM8dUWKyumyNPEu5HhGBPfGygyTebyp2aSoqJd5SHXgoKWe2EJ7LCcAcA237mcU8KKW46vHZhYeZRyjf9TQXfGk",
  "key11": "5ZbHFNyG8s4dxY18zmvvKcyDhv9otNGU2vDPSY4nxSph3zVrMTuaWdGx5TLeFNdi8BJBDVZHFT7jEUXUP8pk2LY6",
  "key12": "66zCYEytzNnNSkreRDyT8bo259L9Lidhd9uHmnZeMLWyAkBV7XfPgMkH9ZCr2EuFMzLd6pcc4ViqRqZDtyqHhht5",
  "key13": "267u3yFesk8WWHAsbAZMuF1jAuP1a37Jg9pcLe21a5G4rizxEh9wvDYUos1YhyAkJokyv3kwqcJuF7oHF8YbnQCx",
  "key14": "2jJiPNMqe5u1Yys15EU4uidXdUDNNeyHERmGWwQDfj9k5LgnkXPQv83v4N4CjPQz7cHxAJQ76WCEucoU1aS4SBPV",
  "key15": "VXijoBBv4WGuDVeVCvCn558nmpH19ANbTRsnfZGFTNwcsGtFePqs8wSnafBcQFKLWEVfEa1BQ44UiZG1MuV1q2n",
  "key16": "5UGgqBrYc3isEwxAYozDc3ftK19HqFzQ24cDTPezcxsLD3cVuRzScRKUU9jLyDVGUs3VNSD8YMAs1b7aaKpyovdc",
  "key17": "61i1qfqFgPaQBuU4RA5kVAsqFT8HnBPQLLKd8FT9DSjPbDPj8crDZMxnjTH2qHnAtuXP1w5TUJanH6JmAGPNbZM7",
  "key18": "5LmCSM2C3NDMdPDfiAKpbYHTyzCDK6ks9um11ooyi5om6c3WyxXxpLYbCjeXZPS9bgWmzFqQY1mPBhFv73c8D5CB",
  "key19": "2gvHeo4wfEVXQN9VDZyHiYENn1WCNCHNdPCZ6vZjLYHxR1qm7vJyjJhxwY8zW7Gt8YbenUHc7zCYSQWUYV7LEsPQ",
  "key20": "3EkCjKqcHQNwymgctNCrKrjsH6zju9drBKLS5ngy3PHuJrgWS5QdqKCFYEzNFvRCehjdDZ4qZVXeRs4LW9NsEvdA",
  "key21": "4uBoQSU6P5GXJppqN7moMsvMsTErXfKLstW7fpjJNEu5gv4rQTmaTmRrHAJ1Bjn4xC6gCKx8e347o12gw9fghTrE",
  "key22": "g9dB4f5VKqEi9ozz28kkk47Q4vU9qDEWP7xmZTnzCSurVLKB2wzPmGHgp7PiYne6ntELpDvTpPa4W9G5kHNeYyd",
  "key23": "4FBJg6YAkvKWM7gWWADof2R7A98Pdgtvt5dCcTGqSyrw2qCrNAzVFCZeGTbFykmgmKp7AzWhA44VpGCfUkXiXawM",
  "key24": "KfbRPkhNSvPcYB9ptdP8tUG6gpyYEaqh11xvhWH5SxXsvNLvEYMueWe5TTTUdfJuY3uPRqMUSCUVoPtjXSmuy8G",
  "key25": "2mNTwbJknBnoGxPNWjEzQspYXcDSumxqHszVyv3tobDRctQmVDF4ZQYbgTjbSsRY1SBrgtmTifZKyxWjxqEHYm7y",
  "key26": "3JGekAg2AeLkpny6C4RbcfD4JyB344cDdGQJsyMrwUfF4ZJeYb2MrAVDnthwL8YSrKe9hdXEiHHE6xuQHyAGeBTm",
  "key27": "2FWoLoAETrsspycYvk4pB6oYC8r2dGEs3gBSjisqaxzuXJmtJpVQ4ubBf9kjKRn3hig4LeE76hPRq3pG1gmmtBQ8",
  "key28": "mgoEGaQuJCyNB5HvgMHEzhBkHmxLeVqAWYajWmkemD98FcMk4ThLG1uYqFKn4LuAAAYodnRoSjc6sffXEB56K86",
  "key29": "4bYG4QtmfiT1pztXfnqcuJVNqfvXzGzHnyqa9285XmdX9WU2DareP1YyqdXWyfCfD4oEtRJrkRSHKvwyB88s3Jcx",
  "key30": "AJwYAAqgDU1gm9wpzjFfZCzpDUgMuYARfwtzYn1No3offCtPCZm1ALvNPdCwM9LFXRdFc1HT2WWWGZy7jpcPtf6",
  "key31": "4mu2SScUtTDU3jW1BcYecjn39tDSe2nwJZ32JvX7APaQR5BT31KTucuT2oFiiH7pQfVGi3h4UWjQRcLK3i6c9yjh",
  "key32": "PGS1dZHvfHnHnAXsXq3fNWKPbe3qHDA4hqxSPtMf8SiwQMuxh8Q9dSMsSQNPYmC6PRM23E7Pqx7AEoi4mCquhmy",
  "key33": "311hCPCfAejUteYarzxoigD5Nh7fNZH93vxoLs5jkXYo1hVMVj3Xz2UYUK8EScgz9DXPj4yyi52aMp23cA7wzzcp",
  "key34": "3pHGMhFDtQTHKQTUi321NvzSAM62Ct3VoWq6JDgHNKypnSkxXoFf8KTmrR98dCJhp1yF7omX6wFst5bJvu8kpEpM",
  "key35": "5GPrKk1xqqR98d1rr6heqidcFukyoLhPagVSzEKyTFxetCE2aTsKMZQr9QMksgewGZB6TUqv4z5bRxaAWm6qCtLm",
  "key36": "5grPWpHi3dDf3t6Wf4SV9Yhzn37nAvhnsr3W8wDYs4KtSdiHz17tVjfwC6QEQEMMVK6qX32H3be73s4nC82b4h4M",
  "key37": "5yhe8P8dwyk47BpRCY3iHu9MwMUJdD7A6KY3SniwXw9pgn3P5QvsebGuu99ChsVMQwuntXB1pb4WVVA6TxTEAat7",
  "key38": "dcEWG328PBYTheg7y5ae512MyaY7ZmUXF8aR8o3Gf7nNFPtmhEsDmd6uNTUcVCHiSiknqZz3y4g4x4PdtqsCGtF",
  "key39": "4n6iprA1jvDBzBRzGCaKah5YtZCbaHMsadrSDFQaFbaqopAMvxrLBzbesYTQvxyd7WHKR2i569rdmMpFcMxT3DBR",
  "key40": "3gr3M3Gyd6WzQ8Rd2gPzftZvQKbpb3mY7vy9WrHnd3NrTZbnUmwtGLyfzZiPURpHaR6u2MPjQEdEfunjnUxPzuC",
  "key41": "5HQvgnpbm7dapLiGyJWuVgzqo1X8hnmMYeBjR4F3fXNi6xYHxfn2LsafPZAs2w2k5gB36EKeairbdwMA3gj5MBYN",
  "key42": "4KWkLaZ4D1dyS4hn6ubDFXL78bD7v9awhhgutXA1Py6un8iLJ1AhXKZDg6n7BYkcZztgtDRBWPL5qJWgFfjA9jzb",
  "key43": "2vyvSNGDnQ4B8dxjWatrfRL5L8ZV7r1EcPDBYy47oZwNNUABF2xtpsZY9E9rQkXkzMXvhjgVxDuGUiFkxdpm56V5",
  "key44": "4ZLE31joduUXsqshedbX5fFpDLU8LxU2TCyrrkyTiiiLx4mo4hqeGNr5ubC9UELJwHeLHSos3Tij3UGVJQPMUcmx",
  "key45": "3nQXvukSwbfs1U8rJRqRsSMyQ8dF21amWhDVPVH7hKyKhCAUoEfecqavJ9Js8xHWYPVwJ4JMPu64jUXwYswkVvwv",
  "key46": "VX3gKTHCmgSKivbBqp3fUqHZQND7UaV7VgdYkhQWeyN6A7BfK4wXDMTdB5YzDJtBY7uB1sHMaaRWYLXoRZBiBmd",
  "key47": "5DFVD6UQm2StN4eMpxgQ5GTrS5HjDMzCQCRxTT76M6dVLQ44j1o4zsx7TmZWjh5WnCQ3MVhCERsAGRz62nYHTuLq",
  "key48": "47H46qgYQrvuK3GwnBzQq2o2ivutfsRA9TjwkkFyUSqR4nP9QqurU4tXvCH4us7Bq5wvzEkgXmHwvPmvCZ5tZCt8"
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
