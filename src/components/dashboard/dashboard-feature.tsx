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
    "2ve9LMrDrgzM7mB6fPLv37SyJ1PMavgeMQ4r2HGoCTxD2wjohR2oggaaazt9syxJXu7L4jUdzd9RLU7hbHgj99EU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8kAw8KzfJK6ZEf7GZQdSH6AiQQZjUCb7rE8LkLMGu1WoFZr2n9eBsZEJXNwiHha1Trag78BB1Ct8ZvF7DciXUE",
  "key1": "3vnUYnKYFNXmJZhkUVWRMYYo1XHPeRpJBJJdS8jzG7WPfPFpWEsY1wgPVSUJg4yAbZvn9psungRVDg7pWsZZU9nR",
  "key2": "4z3Y5KyoPE8PvJx8Dk5qDuB3yH72ZVMcjfjXaQ2Qybz4T6ekfp2JBRhAMPQKGEFRtQzAwYyQKsJCftSwJdfszJxw",
  "key3": "nKdnFYNxWViZyD3THwDi4zLXYFLaT57euesQBbMGBUDBGCpbgKhBeaw9GZhwNjHEPk8T6YRwEyuupEwycDUFMvS",
  "key4": "4VhqPVb6qS4YUAaKwB7jZ7pj2Wt9f1K6kzEwmS9g4dYnB55KafYVDpm2KdQaPm3D2GhYz4Q6H2Hn4m52nRmFAD4i",
  "key5": "5cDPf8svkQP1486U2eMEvAaU16uhDoautMuMgiMgZY6Hnxs2HD4tjLoL3yLNeMDHxwvBY5ddB1FBjaE5MVEyRMCc",
  "key6": "5qnqY8cugaMPEcALHGZFxWffvGRHpbHxokp5JD835Kc8JFaBiVSsFmEW6DpXLYaePjw3MZsxAVuSit2DwF6Lo6KC",
  "key7": "mVNthdCGk3LVDewT7yaEwuHfb8mzzUiktmuag89TSUrtCF4DZhjjFs38oRzwmiQFtfuey5pB21bhk9EWDQuAswD",
  "key8": "5KjkpzkY4x3uvnnf29YA1zSMr84eM3xwiabSUotsp3GjAGBWHWk7Jqd8Pv5N8nJAVK6sDdp12HEhJGBWchzdPR9S",
  "key9": "Ek6shTGPXk9pcboXD4pdX34Skiuud47U8edWbpsa4ZsUfRN5L3QzZ89YhXv8LYRuMc7eQnJizf82mxCb3GSvb2P",
  "key10": "2d4WNvZKmkxJk29j6NbMhkCzqrdC3p4L7EqoF5NBQmXygYTjoK7YRF67rKj5aHoDkoVdjwYws6x6P1zYUR9ipWsd",
  "key11": "63mZwTTf9rwKS775be85ieLibtajdV7NDbaTfuM6HExPCmVGmNTARhMVxfgseKDr3uht9FtYbjyjuBNjeY9QVtNg",
  "key12": "2a9BaBR2T9wJj9UcmdwCCRCjweedTVNgVhUyRK7ci7aZgfL8CyGfmVWH84juLiPbtkHq3JY4c7SB5pwmnMtPyF3R",
  "key13": "46RiRmD7mAW8sSzvdVqpnEznPjgbpKHDfMD2NKbSeGxJhrv2uJ2N71kMHhCqZ11LtZGFY8EqFqA53o59gdk1NtT6",
  "key14": "555a1efQtwADemwN2Hx1HmUshAdKBBrWHHwFNrBKVjZmX9EeKcGdrurc7CPujr5isjGg7vu2XvDDK3iAk9rZYxSg",
  "key15": "4tsY215gq8LmjeXiCgEuNG2xeioLnuwLebtLM9t6dARni8AJhY2L5dCi3nSrsmBCQHdEKPXYVFDUmQUapPGcwUJt",
  "key16": "5wcZVNAj7g5aqgGccNY35qFXi7iu4Nx6F3U3BmfwGeuQ62UiXNt4WRpxpisUR1MBFpy11t1SbhtHw7QUgJYR2pNo",
  "key17": "3tcwj54qinKZGNBJe57WaCsx87NwmNH4vckEqXLXB1LTn8spPNQEoSBeKox4jQEMzDoLciSpWtD1h6EGAqMVQ8Ja",
  "key18": "3wfE5hZP1r1ZgS9aeXwiVgj1dkPoJGTDPxczeUGVv2uEFRvp252WMMzZMTsr6jKjbxM25yCV82xxkiNVn7sWHryz",
  "key19": "4wsdK1sbq444hgZxYD7f33fk1Yc73f1C9yG82PPRksrZ63wPEFMxLq41SfqBLUp4ofnfF9n3ZWVJzQ1bZimoG6a2",
  "key20": "1w5Rh6Lrf5AFU7hUKDtjsZjQUdXyzRV9nXn9s8TzZVJNtkCH7KAtBA8BAVeiFTUEFuShXnX1dDWC8rsKZRecMh9",
  "key21": "5DB2dGHyXfrHzjtxX5A97kjgL3cg4hDtDS8H35iA7oAp5xrPyvWSPuDbXxoGo71ZHnQLoGQHK1gv3mZcyF2gfYh1",
  "key22": "3RtjdWfVaySnfRpJbhQ2mPjDoxTK6x1VqyyFdA7MRtpBR8Dr2bbMHYh2rkLcLxTRKu5s8Wre14xyjuq7Q6VCijXi",
  "key23": "3EDozizS8WTBEqLugcXffEcaoJ2HHazF7Y3tEMPUXeZBGBx3HxYaRir22ByZXbAgre8K6jSFqeBmHK3GyH4aQDJ6",
  "key24": "4tjwCyeK2gmS2NWfS2H23obYXjBte41arNG9GMZ8J1tc2iC6njPPgFCUgyMcyxw2hfuinDSSaG5m6QSueLiUQFX",
  "key25": "4iM12KW4nnkLd2XCfFTuMgsfxq6FUd3uBruG7kbLJMFicc31wxXLCPpWbYcYLcpfYKp4u5GVARXWwpUPYqZ7N5mf",
  "key26": "285QVtcRgnbAvPc1Hpq3uaAL7f5MG1VkgP2bjk4g8Cad1ZsET9Q43BgwdstfgXqBwZz37etLVY3WydQd9Qi95vLD",
  "key27": "2LVfSqTKEfL5StWYgkAizp46XXc7sxSHtUkSWUTf91CyuJsnkizCxWazgfyKk6qfkBWfHvF1KsqFtzJ5N9dmDh4t",
  "key28": "3tiiqvZPWVwHgfcqGUaicpv5RG3EUn3P8Ld19gpacnYzEVcpC45dFnFEkKLTAZVfgvJR1NBpz3Ky4kWxzubhddp3",
  "key29": "2CScCe38gFt7aqBeMWKN9wkdeYyhJhiBoAZRxDXXR1o4s8vbNhZ6S4SqdhossaQrat9XvyNfoF3BwfqRZxpnjCdB",
  "key30": "5ivxecJk34v48FhCyvfchFPj4HFFg9yGqwT4f3eCcpzurZZktJMppQN9BLaTu1sYNLPFZf92xWeSkMrEoCnttJGf",
  "key31": "R2BSpmXm6JwuRkuAddytMTxrKEb2QiF99rVBMuGYaE5qsgWCRpbNvJwwLt7EmjXoy8TLge7yaLcH6dec57eJ6DH",
  "key32": "5GZec7G4P45mAUoWDnPYJUxx1QHCxhVURHhJoZDJprDRXyWNP7jRQUpptMv7JAsEw3r5c9JdWyAjPQNB6LXjN77R",
  "key33": "GnyT4qGoxPkco11N7hq4u56htJPWDDZjGDzwsNGYasjqF8f9zFMob2NeLvwcyxRP2beKC4YnF9Cw2dcAy8rtJLK",
  "key34": "2EgJuVX1xe4N5TepeXM2vAF2pSVNnduP2xcQ43eMkGxVuqjNVtAsNAMqZWFpQYjZTj6X2eC7DxbbdcT1DcEBfQrv",
  "key35": "4VF1MAx6Dbbt1LB5hUtVBgXt1RyLyZ7EnvBbfgiEgDRYnpKqH9czxxxYgm4c1WguFwYNizhPDi8A6j1iogn5bEVm",
  "key36": "4N5ZHXvXzd4STjERqjbTkVxk1dbXGvLppFhbuPab3Dy7QtwBzccYWMY8kGHFJEazMPfYCrvGYq88jzVJxsJkymMR",
  "key37": "sDZKCyiwLH5YBb1fa33b1Jzc5tSsobXNQtC6Tc9R5Dzn5h4PnU88gAuSD5ta2wTXRB8gAZHdQm8kHJWPdTnVbUq",
  "key38": "3svxd6k7LkcnEkDdX3GcUUHaqtW3wEa3CEdARUfYKvhG4vunaPPvXmbyA34QaauB17UJKzikA2PUivdk2vpE2Hru",
  "key39": "ww9V8DrpaAGPbHmkw7WW5p2FA8MqvnsB8S1BPySgbvmmkXxKsUU2N4VNPXsMujJRPSstdMVbxjWNgFWNz2T72W7",
  "key40": "3SgBTpwLS9saymoWpXUkQejrGHwXcYXBNZBQixhtTTDiaQHz82VyKRNKuepsQXVwK5PFtmYG4dPwWuXzssbCXud8",
  "key41": "5qJtcYFmam81apRzUZp26ki4vt6cTMCYowznPVsyDH4CUNU3JU6SdPuTtGc1Bhc4kzpoyeDXV44vUhMHrqcTHqbR",
  "key42": "3e9mwbZTxbcDTo5iQNTSGPVbyjRjv9eod2DLE9dGWficR69t9xinF3DJYiZnprcd6uv1prJk1Lp4dnLCwnUctda7",
  "key43": "GwT1ZQ1RCJzS9wtBLpyc1GyqBx8cUNacuJYqJ9YSEFVdhJyjswqancwVpTSsbbb8z9ZjYNdttDVaXDnHcXeMXZr",
  "key44": "4gjMcSnCpm9xUgUznNQh4x8ydUGnQh5Bznesvu41EQMj87hgBxW9CLRKwXDMHkKRaJX6sH3h6194QpGefLKj62DC",
  "key45": "44BwvZ3q9dQxLrFwgchnenazHvtGieXympRFDai5RtrUgwWTYkv3NE1KoKuo8XBcmBT9YKm8R8PH5fHqsGgHjp55",
  "key46": "52a7anu4vb3bNNBTdKNoa3cRaxBQAHEvKTNGi81DrrdKTVkjQswtPU1bLsoUBzMDkTuuFRMmiJHLioZYBCKGDfkM",
  "key47": "4sbDYEhLwaJ6DRYfvd4X7oxez2wpg53qao5fWnaLkjuqP17NADcp2EyfALqztRU1Y4zXcmXEfi7LcJTgEMD8msiG"
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
