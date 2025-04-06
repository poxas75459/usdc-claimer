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
    "2m4rVKC75rUHiTgaanqDGpXeAKTTi8FUMpppmkwYoe7J8EN9EQpKyjoAkPM58BfiUwVDPd7zoQZusNSE62Vq55Vc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yhebmDE46yVQTAq7KCfswALByVSW33T2AZ5MfFtAcZwPegr2D8RNixGQsg6hCdX5MJgQtGrE3YudqFQzP2VDBbu",
  "key1": "45H8csyBhw8nG78zKynRrGvTqgPTPdrxUo4NYkLFyCxXbcGNmg4gyGSiPtLg5huZmhmDTpT4azVXSTznMLz7AP8T",
  "key2": "64zFg18EKSP51kNxG3FRWtQHQ1NzTFVKyds7WZdgd6YVmLy2ApEcividimoeDnASrqZDarEAYbsGYreqnVvD55D6",
  "key3": "YNmgzbP8S86c3jnPG4m5hZsyu6hkrAWxYDYxpxARefMmcMjFdzDeEVdgC5cQyx8DKiopkAaBHMML82aHh4AV7gw",
  "key4": "4hAK7f5UEg66yzgvfPBZ96FcDpcrWrZrbxcZknT4wWvGYg9ktsqy5JJNg4jwAu42sRjvFCFBodqc52z7hYPPQYcW",
  "key5": "5K2HFBRALGAKPeSFpVoCW63Vd3kh8A1bJ6Enb5mw4MpptiCL7orrVD3VR73qQ1CeMTzifm2AZMbdWfWbF5r1BQVW",
  "key6": "4WJ4JvtvMzzm1GVw7WK83N9D2auwpdM1iPciPRAKLfK7oxiP3qRMCHEg6jzPGY1KPFibtAdWZyE29SLxfrrYUtBB",
  "key7": "3aYycpdVdUK4cTqkYvvq4AC5gLFPr7f98uuebVkGGobmJsDYmqgS7ZMV1cHVzY2dpm5rAQmzd6NRqnoacrSiJ45q",
  "key8": "59NyRatHY2yiZYZRwvEd5mzWBaBeeGo1tX1M5J4MLzHCXRBX8ngtiZGuny4saAbzh1qfzstuvxYpCBdXieSqXL72",
  "key9": "3cMyutNboxWo9ArZse7btKCb2QnwC5h3yuLg8Y2HWgdLSqC854iPehnsqfQQo7EwWHoUryJC2a89WCGpB3zpe6Zc",
  "key10": "5ShDcDpzuNgh9RRGYYK9JHNWHPAfZMNUp8uei4e338EJBDvMr3j8QHvrhrL1TWB8ojzv2C45yT7NeAvaoqo9vVZp",
  "key11": "4qYb6spjmfkFAj9L7EmUgUrD6YUBdEiZgMLSzdBbGRaN6wExshx8PYg9N79LfQ1bqgYaZEPX5GRTEToqEirPDuHF",
  "key12": "XvALqyTnUURgsKkPxCQ6muAt5io2agAsu6rMcFn9J2NKw7BY8iygPZEeKdqrhQRQvZENzYrN2QP5LruzkgHF1Hv",
  "key13": "4iErtvHmrWwHvtQ81iXmJBZCo1d88jxkPTYkpMFrSyixAc2Kuv1irAVppqTxnnTqaSzLez1KhbewKbQxJNc6r1WB",
  "key14": "3b4CEqndcXSDXCCPBUouYTkfEFAWSLmDC2iERE5TUtFfhZeZMNKW49oFjLy4VSY2fAnnyC1t1s3ZDitcLtCXRvP1",
  "key15": "2vppwdDts64QXxJzcnRcpUiDTCmWYUsPqnhYg9eGfFfW81hQqhaw64HrSBrJjFc6PvopdjAZL9k539FpQcCVWRze",
  "key16": "37rzZo4LGNikHxL8iQ4WBcfsDnGZDiX2T38BSVg6iZMvLLczByGrGvP48CehsAqxgnMVpRZUxggaVB1GyzCyXsZz",
  "key17": "3KsQDQL8tRxapAmu6HHogZHgexoKqpxHQLr8ti3izgVrfymdoKh1nVjGe72e9LSTZxMX4z7KBvKPFCyDD2WrEbGD",
  "key18": "3yD8H3LHoXdN5TvANKoSEhEZ9vcMVxtYGMVuYWGSqap4aeHoFS8L8JfRaHGLedLZMRw2n2cBc36jLjSLfWFBMR9S",
  "key19": "5D8PMwKCsCw8M8WYhHpasAy6QdpQ4ZSKByzFEmQdPUgXRmV6F5Q7ouXGD5pvZZ7CQzRxj6L9vaGmngcYAo7LQkoM",
  "key20": "4xXVgbzz16UcnsYEq45fRLSDEhjwjU9QTvC3tJirXyKKhsiM4jeCh77vQmdTbH7fTDESqPYEnDR2DiSfwj5mpgTt",
  "key21": "4Mh2Nx32AZfYmfsRHR74jWEj6QcbxxAnyiK86E9ximtL9JchiVVtJCAvY5DT3ECMvqfSXbLQHfhPsfwrgFTRtBNb",
  "key22": "DrDNUWotnBQ2wSV3v2hHaTgtoYMPjBSwnndTrvtwWbNKicAKm5aZwHyWbDtCVt4ucGSUsdxBycRZeeZnBvkPhEh",
  "key23": "3peJyre6anDhCuaXRf6YRA2VekdES3r6NjAVqgHCVCZExhy7S9iL9itrSuHr8PkBiM87rXsNq2B9HpDKyZnajBhC",
  "key24": "4c6zgbNqE5Boz2kCU4AFmLyER87z8a7EJwT4JsKTW4Tf1t9JvAyejqDdTD2tSB4Abos5LyiRBTqSNtuh9Pfo4M4J",
  "key25": "46W5k73B14ZiAPguH6N2CoiN8pFwDyX3sGAPvrRn23CoPipW5AxAXTj1Axz8uQ6jdnT6oMFXa8jF1AH4ZNjz75if",
  "key26": "2FQ9vEqBko22CQsS7oqDe86DoZdYvwSdKBm4j9r39x1jEpgoEHsNZBYnbuoUuYTJTQCQWfTMbTvKibe9ADHvQACq",
  "key27": "2mtmbeKDFvnjYejs4otNAHBzVz5XDicqPYCeuD1LWFbvUx1fposdyjwD5fMA5VxiSBnHbHBQvU8c3F271byDBfnE",
  "key28": "2raGHrTZhYS9ssacjquVXP7sKnDomQRKMNHNwjxVBkxfHQC2V4D7BjY9TLfUnC4GUmLBGee8tpqS5RSDqdWPyBZW",
  "key29": "3cpe3aZvEWa21FFyJBuetzopuNrsSHM4AoCqJVcxS8tjV1BG2FiZZmXeaNDJGg2JM38gFLHQEmg9Cj9vJUG1T2Xb",
  "key30": "4pyuxFdyYXPjKHbZ1XgfZcjB6Rbp4DqxGy1NoZEByZvfw9rfZCGfvLkhbPz1kpcAwjAPr26kdL4ftXEBnW5m6bwV",
  "key31": "2P7Dkxd9cVj6bRMh4o5zke7k7nbP7mezsg9XjmiwPorZKocLgpiMJUBVqFxGGStmC21sosFabrXRvxA1bN1TfUEz",
  "key32": "Y7UkR47qhPGB6WsEYwCssXf2v6KLRy7TQ2zEmQK1YoJA8LrTQZimyH7b6wwbimTK8NUQb2rY89Cx8NAMbYxRgxH",
  "key33": "4JX3QS9MyCcjCV1SUdUoxmPtvx3RRSLUY71LFRFyhgDdrx2L9aUQpKYdLb4NTMPp5oKP4JmfnhWxGGxjSRoFzmy4",
  "key34": "4n7f2qYFXc1Kab1BohxFyfGRUwVD4UCnriBTvdX3DY7xjk9bSHB5zz11v59JkVVsuTnuzYcBZh74mVxTZUyzXsho",
  "key35": "5J3WgGNVTtGF2dhi5SYocN4jqBtx1nr8EbkXMmkN92L8VcoPB3PrK5s7wAZJkmhYoa5Qu2mx5VrWiwypmtKMynps",
  "key36": "4dxEqSx45KREuNxAPVSMwoBZHpSjiteZXVr2y1JmAwahRNeZw3FMKr6QpEzC6JghfBSzfaJhszsHX8mXXFjcEU9G",
  "key37": "5yWgPfNS9toHzpg8FtbxQUAybhjX9zwbaimRbsiZNR8tYX9UA1pmVbnbvkj6xQ3PtaCs3bxw9MQpWXj1Wpbj6jDt",
  "key38": "4FGZE3uzo1skriCGDMvXnqRqa54L2Ty2uvySZUNZFmm67Ek9TJ6QW8d9msG4C4iJc5yiPiHcdcJkb2if1q7ySGnc",
  "key39": "5D2yikaFN9EXnPdAdt6ftpcfrZ7nfD7cEixQ9pjJkW7fxZVSccJ2w7RZqrWHGPPXgvxX7Bv7icVMchmFbRYeHcaT",
  "key40": "38or5smJTrFqPJGmiq9LKST83ViNvjoq3A2SwYgZWt9k7YqvgFCiL2Xx9pWgd2Vv3e1Y3rtseDjYYV2djhzxCrhX",
  "key41": "2Nn1VEDD7RieaPmQWBRULs9gjQRgENGbn6Hn1PSiFhPfWHgLosVXnTcfPC1WQnT75M15Yhc34Bm1yew5wLJPFRac",
  "key42": "615PNtNbY89ER31DtpVdokiW9XeRZZg2QGm4MqnJu7Vk1Sr1uzkYV44iPQ3i6BcK2fko86yZARWFLdUcijbXfcky",
  "key43": "4TTKRANvprB4KtwCSwoLoGbonTeZi4N3g4x4MRhxVnRDPy8BZGxMUKSrWeEbpvZMGUHgXSdCXVMs5rSSiowwizjB"
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
