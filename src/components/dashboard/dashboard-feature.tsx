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
    "BhVt3YbhNuqgn5fzGrVBYEgChjx6Kge8KtzbTTpd32wmsHTSuKLJLJ3ymg4kesFck7aLcS5C4cSFCpi6RtGhk3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WuL5KApRq7P1mjCWEXjnBrg9aKHxX3TwcEKTiDiUVy6d74DJu6VCykYrxQM3qV3R4b1EcWUskAUFJho8vEPUPhr",
  "key1": "5Jw5w6t2HwaxipaFtgfpq1D3ZeXkQZiJYNQyAJdvFX3EBeZNdmB8yUVJQRwR2XL6qUWdkN9vFpC6T7VHcMNrvEsb",
  "key2": "4ouXDcshoXjB1xGYw76xf3ZTp3dgAVWMdbbhe1RmzDDm9vBg1KJuaAcx7ua1SWvaj7AG3AjGxsiPRiLnrxQMcGmT",
  "key3": "3riDmHYkBCWfPYSm9iY4Wvi2Q6P81CHZVzm54bnZ7Y4G8pbjoW2vAoXxvxoJb5JLstAQVTEVQgw9JP4FuD5fvgq5",
  "key4": "2wK8GMQj45DZ4zXuVMQynn4qLaFN5cuLuc8DyyzGU8cEUo8ABSbLWySyASeoYWJwvmyNZUFNHzcpeQV5v8iydXp7",
  "key5": "5L1BzFD6LLifqebSrhsY7fD14ioL87EQaCV99sRoAbB383aimBdfXrDAXSo8s75RdNbjJhdosaLAz67c5LVw6XzA",
  "key6": "3ZHRQ91VF15rYkcBNfYHLRAvsnyg9ZpztN74t62wFAsTp5p8Y5Wu2t4NburRcZKSzuDgoVQ6e4DnAmao73WccsdC",
  "key7": "5tS2o2g7w5w7yV7YNZTuurTSWAHF8isgq6fispgUzppNhqhUCH6gqBjVXa4GFAagVKrdGii69d17SHYMmWKFZfPa",
  "key8": "4WNsyNv5EdZpHyhUtizzYMRPPnb3wbkpiJyfETXq47o3vLYLR3okjbNby6v82gDfmgYdabXmfY3d2E2gSGja7Ak9",
  "key9": "SSYQddNdLMZ4PQhCTtJUvSm89btknGWrGb1aP44ka7iP2DLeudgHyzfk5Ui3WP2ECarTsn5kfDLqtoTmb6vRKL4",
  "key10": "2ZLWxnPCBLYtLNZDYFaWvMj6vbJKRfmUdXtmarSNCVdBTGuoRmshp64HHmkFW33N4GvQhTJCktfwXJAzz1bh62kP",
  "key11": "2DkZneCxNBnTGqSBsQvgp5Wne97G7LcP85JvZVySdKGLSXMEHjizhdrutoN4KXwCYecVhfZqP331d6sbetsoWDGf",
  "key12": "3wgP2mnGWUxAfXdSjGVrXLmDrKsapbU77DX3sgRBvRB4gpXZtdFpd7NwJYw7nVRedeQ7RWC9yZ56AFCQzj6aHP7",
  "key13": "33mTp38Z4PJZrQroBpQPVRuJ17BpJ5LX7sJ1DTGozXSzE2bTNhS7gYwsG5DoTxD5TjtuA6PJhRBqfrHK7PqU4Wt8",
  "key14": "2kj3pJAS9BpYtzzqy9WbfHYE6UzYmg34qMAad6n8uVNFFD9oASGPjfyjuPACwBgTTCWNL9FVqMxUNKhg73Mxn1tL",
  "key15": "4heLUnBYaxVnQK8Pn9oSyrMSEh9dm5Juoz3xF1VDUksdhrXVDNQ3K7rYsZtqDP65476YcXQtm3ZPDfUjmpWRTpZb",
  "key16": "5mwvZk2SKJBThXJkn5BLmSBpjUGWs1A7XvNuzcwzTnRh1SHgMAxsJQCPhwWoHGbyjvexvDp6wyVMhAU3e9Ct9bbJ",
  "key17": "3TYMuRYgkRyPeEorZC5eD1r7mqEN591qvs7aZRFWpwrEmLy36TyejrAbRNg6ddr1Hq9N6LHAJZ3akp9p7gEt9UMt",
  "key18": "5R4oT4Hw96jYyG2MEM82nFzHtu7gyin2AZeVzLW5V9g5Bze2J385JLT8ZPpRRnRqmtNcaxwWTHv2Y6LELpVyC6Hq",
  "key19": "3bUg2uKM7BY99D7vfLHvFRtJwh2mnqbyEtNhQ6sdD1UsumBx1MpUvsyXp7oUkLpd8htYBKPc64kp5mQqt3uAEeG8",
  "key20": "dT1smHXBMQqZwy2hmfZAQ1tRT7xJf55dabfTNESY3HTWAp7UX2S1cxqWwJ8scDMUVUreubugM3qM6qALYtQoSv1",
  "key21": "4sX57qemhNUPx5xNDFr4tSoU7nRofMEuT6NRkURzFom8DrgH6VRiquyK6XUZjBXm6tMHvvA6nthZ7DvHEXX5qYBc",
  "key22": "2jz7Rc1xW8BNEeuvJML8PsSFEaB7sxnVoKxFN66fF7mGgkzvXcN9G36N9nTbgTzj2znB6wmpXTk95TVb5Z3Xr7TP",
  "key23": "2teFWiMGkGJE1xGEjjZgdQn589d8DLwzXQUDNLndyzrbpdvnikrXFg8qPHj2XYp7ps5m9mLKWXVmB31ACnBcVKKT",
  "key24": "3oGT7Wbmx2E8rugxwgLd1TMBwmfDwxoBM6qn9ZCKDmhb1Ce2kt7ho83AbprQU4xhDJ3Y8cAaRKqJ4sbWH8NCodvp",
  "key25": "4B6RQofsG3s2GayF7Hxu3hrqkkDV2ZFtYhZPJKQe3fTCRuqGhidTt9FMEVnWACD292J6Ssv7CTP3eqaWNWyVvupa",
  "key26": "5ZxZCnvWAza8p6bNrG3nRKanMHRBtzHfKhacMgfTv5eiGDRW54iho7KuUFUJBgyPL5Be8SY4bycHnraJSH3Z4XtG",
  "key27": "3iiAPQkEF4dfxL2CGrCqYjC8CwqvApTdnZmqjEf9resvQPS17SutQmhpFmRqg5JkCJXG2qHSBLCgFgUhUM2Nf8Tx",
  "key28": "29LNZGK1U2eMqZZZB2VKqwQs7ry2TF5VPJxTA5B8aEHjgK4gwVZMjAVM8r5qqE3ZtDYwoXxnGiH9RB81abNSyD4c",
  "key29": "4UU9PeSJJmaL6J1E9yj7UmBqfaSsEvrkEZrJXg9Yz7qamtunfhWWKPjc1fYtZBxyqUonFLZnQxa1peeLUVx3vCrH",
  "key30": "2HSGMKDckPRHvJoHREhSrCEc2EpfTrbhV7uom2fu6bPfc8yNDFtjzSyukGVPRwG422o69eiTGhGzAyxt6DCoGb6P",
  "key31": "MLKGpm77Z785idKaun6dMYnyvnr345zXXtFJiNm9UYPdiFFxMdUtsRYRLivFH4cTVs4Ec64ZjhD65vdvRChvwHm",
  "key32": "52DrtDm73aQiqCtMTcFDnYFbrbt4wxTQScasAy6wGHRTvQALtKh4a62EZHKqduQtRyrPejHAKXyqFZPCZi4UmEoK",
  "key33": "4nh6o3CMaATyqGAiP18VGsgipEwfBTxiA1Yw2c3w9NhKNPgksGu969sho45jHWL9uPcwGsNY1Tthjw7WZ61FrSZj",
  "key34": "avCzmSD7UvPXjePj5PSEAn5Zysuu4wYPkLszn8ED84chgRnBiyNtsozpUJepEqmH6eWcZVR7ZGyKmcQLvw8Nmeb",
  "key35": "3yx1MVzJ356NRf6u5gUFAez5ACCM76qTkC6UbbHXF41WEP6mwEqv4QmwRKkmeKwKAxZrzCL17nXLudM8BFEfd3Z3",
  "key36": "2ZaKYnidamDTjLqFwd9czdkwbA1w3MNS1zBBfch5jgbMGqKwXBBuMJKvAxdAfVeQqcpvA9r98PBJegxTzr3AWdCh",
  "key37": "2okayP4TKdkLj7aC2iEXejyzYhm9JR5hwLcxSEWGy3zScHuXR1hESzszLSgBbCFKmCXqfu8S6x7ebaiXxqDn96ji"
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
