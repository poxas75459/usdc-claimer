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
    "5KEK4eTnqtFgQxfhRzhePKE7mQ6HXMVjuRNS3ravSnEWCkbvAzJRQAPw6X1Q3BbcGsqRSPanFfFRZaPfSs7xmsBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4PgfS7bPjHFaiAbH7Va9twkPPhbhTpZ1wa2HEbWRXARAyM4651FRsp1xgbq6YmmReymZq8qvNCrFnuJnAg1h3d",
  "key1": "5SwCN5Wbho2jMqooVW6vMze2DEMRFyNJwMoy8vk64VLSKFwPaBn9zmr1BXy8Yih5iX4g6mcJh5VhkK5VHorxcQtE",
  "key2": "Q1r2bsSS44seSLjebNfEUK48feNfZF21bQNV5goT3Anz1a2ffNMghSzA1c2SNhKU6JSVHrhynZ3nNPze1Lh6Ryf",
  "key3": "4xRFtKkT8U2NMW7bke7E3q1EfCFkQGqbtmxNtDtd3DMxXC8WzRMfnCNtchaAALZJSDj4Nmif7X6mdErvpM9dyUGQ",
  "key4": "DnDNiACRcB8a7BhstG6YnrPSoSRjDRVoR2kzMZ1iY7QqRsjhHZaqreCcgyfR7ywMaS751QD9uxboTKUvBuJU5V6",
  "key5": "64XMM72c85ssJGYtDUBqgJj9nbD2r3mu8TtpFjF7TfcQKBWhmHKDX7ab68L1QCo7S2tTsBin2Xr2xmU5Ctb2QnSm",
  "key6": "5ZtKpVGVZAXh1cZiBQnPLbmssUgZH8NLgnUMT79ioK1dnxyi6WwGb8Ju6tMYQ64meET2yVvBzzoK3mRHuHidKZGN",
  "key7": "38fJLujtCD6pkq8Pq3rHWgdcHVpiCZZPKzqGCYcif9NT8PDHuVbgGijxkbZWwhNREbEq1ejjXuJXJyoKbw38Vfk4",
  "key8": "3atByDUt7iRaoDw1APisocqTR8svsKsokzjjPezziqb1tEfGYSH7xiP4o1NCTjCCKzdAuRXjGKtyEhL3ypkywnvL",
  "key9": "4EuUJLLbAsgyPzfBfviod9tV2ig7hcSxj3s4xffQkmLvC73rHGyYiiDLoJXnKAdWXt5JF4X5QaoFvk9rDpGoEHGF",
  "key10": "41B2rZa9Ng4kYsV5ZTxBgj6ohLEKw6QqJyZWWVyWkfucBPY1nRRTPjJx5619YQhTh3zTE179H9QpHcxBcWHX4tDs",
  "key11": "4a5A9eWpnHWyrtnexzRBW7Bpkf9SFZuh94h2DidN3EScGy5RQZLqJyVHuxoTHShvGpcHJdnXEmTUTghqoiuJ3hYC",
  "key12": "bLjhCX5HLCx3SsVSoEdNuvtJTYNSNLLtzt62SekAdWpSPxT1GvCkksoWfwUmse1Ztj2WGhSDJDHZ3G63mnDVU54",
  "key13": "49Wqomz4DRZQiUcsL5gXGshK6SaBP992vJeUwjHy4itVCEwD9Tr7d9Tir6xWoPsw3f3XWwfwQMaZYGskCywYK6Uk",
  "key14": "4hQjczMRhucH3wKCLry7c361C3rv2cPup66Ac5ib84PWCEsUHtrcC1uwqzCY7XbLVSmaZwoWiv7M41Ex2VEsJ8DC",
  "key15": "iYMcaQMHAoy2SXfpgDGHu9aoDBFvBq3QfBqgChrsSvzdcQqdgfm5BBJdU2BFvwHTd1eYuyQ5g1qKe3YdbA9GB5v",
  "key16": "4PfAohKsWiZg1QpcENvbDrBEuPpMifwrzHKobtrVEpkWwH1a9Bkd6P8YzkRVC1ZoN86u674C3hXz5Ay453cW1X4F",
  "key17": "5u7NKZVJs5JNhfdVNQGMJBiHgyY3ARfb3WXXgxS58Vv9zmDPEzqbCEXmKx7Jus2rH2snZp9LeP7M7GhH9PV5A27n",
  "key18": "2DEy4TvL5kzjEkvgT1ivGBxbNizAHA2FSqziPxbnkArUGE4hvpV172aQdpcpdNP7ZJsNaTiJ2AK3eK13YnwkAVGL",
  "key19": "64qgq8TR2h7aneuhzHJT5buN6GcT671tjKAADFrs9TGe5nNAZMVH1ny4bB4ntFJxvQEGJEixGoDPLSfjtj556iDL",
  "key20": "5SdwEjCbmFwBkbDGJ6WL7nddwTovSSkzMDNiwmoC1AdjoP6sEscG49biwHgTR7wCsv4331XppujcAv1oPYPHkC2o",
  "key21": "3G2vCfvPi4K1Tb4W68wdt4gXSoVzVA1gT1SdqqTABXwwpWKEUqTWeqo3azMUuytu6Zm4GBJ5tbokV48pW59y3R6C",
  "key22": "QeTZDheuEM1m8ahHstZ5HARHEf37BKqNWxiLkXwYNZ6dkUar8gZkHnvtxvuCdVyDcaZFRufbnTF1qemYvw2voFU",
  "key23": "45i91cVeLjSMuNW2eXM3xtC5KU7UByKHQE4Hz9Hc1b34YZy6oyhLjxRCMCxq3W6qx6DnPiZTpCTQ7ViqjDjaX3xx",
  "key24": "sMe1zKehCSDtN2LBsH2oBu1P43DnxpJxAai5TykUSPkmZnJKWFeEpLX5A5nsVLmcBi78Ci4BP32Tz71xZubAzAM",
  "key25": "61eHSKAaEUeERp13pKpbqGHtpzoQiK2xuhnBgJ4BHE23skLPE1h7ENNNWhNgbehzHhmHC5vJbo4bQgXuaKS173pd",
  "key26": "KaUMgkrpGCtExYR6CF665YfCeVFQAK6dyQfR4ZnNDMvzbym54ENstfszJ1sFuMRYaUWecDyCQKzFDroUnVhRtXn",
  "key27": "4RQyxCjgaMp8P7B3vSBTGXwXUtY9Muv9XwpU4dqjmK1McPpnnUGHsc4KE2tHHf7APLCzt15R7p9tZCFHyk6vD4Cy",
  "key28": "4gbtcHWpA4xvH368dfY24rTzeJvrawoz7TCVaX8WLonxve8xicRKz6SU11YE3miDxo1TWFTFiKjfFeCU6UvuDrED",
  "key29": "28S2iUE2atTJeCiXRVUWbrchia2YZ7JJAThg5WLfkRZhv511rtrGyK6HcfEjrghxyNHSDTqMypanFjRnDrCM1T43",
  "key30": "4imSvqDcW9XjfF32v2eZ6HGW3BhGmyDMtpxLRhGqCUmMkKbknDBy2754ELTWgTGYmk6jVjfVnQapPjkS4D5v8Lbm",
  "key31": "5zTRQ5QETfWcbkZW7i31JSAi8YruEiGMfo2B9tTu8NQWzE3QaePaaNeewh1CTW55CnfFkmNxdk4Stc9VQ9bjY8nX",
  "key32": "2iD1FT4AEwWDuvoA5NNknbCM9vfQCpiiw1NJvrktkyPDvksZbhGLHbssAj29M8uGdKyQn4Beos9bP5emnn8Bw2b2",
  "key33": "2bpBxQvSNjQX6f4jw2PXMXCGazEm1Jm9TXeVywPpeUksuBEDkaKeTJriqnXUCSwZw6dUuThMBQGXK7FTmD7nw9bk",
  "key34": "2da2d6a4yp5wpj93Mxw48pUCskgCMM4re77AT4q6ZDcjyVuEucERLH6cerLhDJs6CZqF2J6JgAFoq9pb7RxLGj5b",
  "key35": "5DCimNdfyVnKpWL3HLXBrgL9q5TV6WApyHWDQjnb6EpesKhZJtiKTh9eT2AXJzwmg4cJBuWMaVwmeqQwaC8W2NGd",
  "key36": "TBiSyfNTmvExMLdzQ5bCXkBd9aShbgnktV2LkmYRJ8ucb4oKDgtN484e8bCHp9PQJBtuSXBzZouHwzwpdRRzLTi",
  "key37": "23SqACrzSKjKrkFromQ7vHKCEBpRBiUPYpbbiyKyr4V6dwkBWtPkFjpTNaW7GzMMZvWaBGaLF8d1KycmoKxfSofj",
  "key38": "23BcHbHQzntDXxXZnuJFpRHkEo5nci1MT6abRQ4mgKQmxLZRisp9AnZwF5QnpDthzCoCnbjJxMiZNHgTwJzF7RLq",
  "key39": "5DTcg6exUQwzERq7nvQ5rq4uuLgC16wAZMy2Qqu6bZzhw9GVcHeveTCbzaAhmUAWShGWRqhYphd2eyPKHQAGJXiS",
  "key40": "3DeFPHNdUMvMdx5YsTSfUM3fQPAysc1gnj7psXATZw62GJgfhRbQgQekUsNnkPwAaNvNp5R9PtdkkRWae6YtLcHB",
  "key41": "45Tn7Rfp9PJce4c9G5MefCHsKxttPrdYQg6htX3u79otgqbnUcqwSKwnMKEyeDVY2TypcZ1UYS3cC4QzUW8TBmqm",
  "key42": "4SbKxDru4xicAfsaxD16BrBatHwezRwBL2SNfbZ5k2bvjvULKmnSFjrkiafD7b1drGdeKZV1zTA1ACzt2xWnWTRa",
  "key43": "rA3XHz6J2JzX2kuvqNDb6Cd9tnY51gPXJkd8fup4XSpdh1XTCNz6zeMALsG6tQQtwLrTC47wMQZV99Hz2Qdtuxb",
  "key44": "46cqhsnnnVHbgwjXCMqkmDHBaozyYQx6TewvkAsUcyZx4e22eCYhiHz7uDohd9Fb455SNX4ioh61h4zDioSgpi8L",
  "key45": "5xkA1y9BTS4FL1J5262PGJiNW7YeHTATCVWMtpoJdPNuXY4wrMMmXuGE6eWFWaH92wNmnTjB4w4SqgXNeEtuBamU"
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
