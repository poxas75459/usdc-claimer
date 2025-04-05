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
    "5G7mLSfyVe9mkToweXtSd6kP3eFyhGe4kQp41NECA437kxciLXn9kJc3dTJtLBCumyCYJ8ZNjsSaM9oNFUry4htR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nj94SwhZVSMxMXBtkGRpTJ3b4FFoiTarY2FshSbAoB29nUagAXTyebeWVf8MjjbtwkWoYnEXnL9HgytBfqMo3wj",
  "key1": "4HzuZV148zaDyRbrBzZT2VwYmmXtzisT1ufDgRvfSWJ1BZFoAdU7K73MjTp1daekmpuhBWbhUPHBczmjXSgAFeCF",
  "key2": "26vX6KtycNcDNQ6bBcbfNNRex7D9T8vZuoycwKgxd6iYYSUR8bnJQB67vrdwztuZxowcMgK92L33NByugPwDwawt",
  "key3": "4qzSw8JWNostRndPWnnH6hJjghsni8dt8XQbxpSeqjHqoxAZEb2kxSVSw2hqWyfNaqeX2dK8BaYGHzQ8ktzLtMCY",
  "key4": "3BsPHzYgr9xQLemZV8wCZs1t79mKosbNA9hAPifncswFCX7vfbDZDgv2tQnaoKWooVBEUjEAaGa7vRMqVuALVBxa",
  "key5": "4HZpxPRQtVNyBsSZFmag9Ku2fjsbKMyMdbrQZpVvRH6SLMetidhia1ip3QWncULwwBNftSPtXpyXNNXJfvqcBcPY",
  "key6": "5oGc86Nxmv8LogXJyi87TLificFko4ZYXfaCF1d8VPiPLfBGnmmCWj7f1Fv1wNAVCCpuMi9X2N26TB4dEHbDemEg",
  "key7": "2XtJspMknSKmtFH78AZW7f8jTXu7HRKvM6zw5ELEr9MCjyyYyW9tythSC9Gd3SX911BRi4JTFbTPc1wuNH4vbP2N",
  "key8": "m4BzxN9MYSrQeW5Et68JeXZCyTx9KBtMcCtJXEDrYkr81u9k2yseYs3VsYaGJd7uteuQURqcncbsHVd2V2Pt2zF",
  "key9": "2cuhPTaVHwfUb3M5vtgJUpcvD5cpRkk4xLpZrKNpQJdLCZ2QdXqmASNCkCkDtSnFUhBKX1fHjnXz6oR2mKGCApME",
  "key10": "219hWMMJA51EAYVEDvCuHTXfh9bv7kyTioXWkYkGrwm2u6w5d3ZmZWYuP2ydY8sTYHGibGEVoYacG934cuc7GXeD",
  "key11": "3iRnTmDThbozKzXaAoXk7frDsTg1AVJfuQJJ9gtiTTeWRjLdDLGzvonzR9T5KZ4tPgjzuVkcvCY9Uqm8PkRhV9VP",
  "key12": "5wnvjoH1msMuxvyWRHAf37UfR2oxY1L1DggyRZ28gRBjd8yMrejeRmVEKoSJXCMdPxRaqgTdMXju6GL183wYRDDR",
  "key13": "VXWsevGdzmR2RqE53dxNPPHu3RBGXRWoZpMr5TVGToaGnNAE9b5X68syR8kYjokU2jLnLAhz5WuXhwi8ra2Ggsk",
  "key14": "2vwLD1CzRAQKqy4QEX477GtbADrnusRhj5HXZnLXWmnE7d47HsVChfFS3Ya2hdZap9xFX4otTGfvoCS2Vxphm15Y",
  "key15": "D77y7W7cJL92Arf2VUjn7bG3m48HRf2zgsZw2mNQ5jyTGE8syAF595xodLGZLjgqDr4YCnCSDw7FsyqTPbC55kU",
  "key16": "5CUWBNrWqh8prBpWZJrEzuVS1JuHQhLGmaTq6iWFh83xzXvYZW2oFseFeMABARukLYDnrNEPjCAdxM37KsWJmk7d",
  "key17": "4wnuTQLgQbzrTw9s8nt6PUw9DPdTfB62pPrhKP4NEckwBxGohat9CFsjPV7V4dsqgQqCd7zY8oMi9LXMMHAxxgKF",
  "key18": "4Up6qC6vGQ78LZnnF19vFiWSDodE3VRb2dUuGRrbFAMETUvayyvNfnyD7rAjgCZCgT7fjNkHFuP6ei4HuKRLya9i",
  "key19": "3pxQnFDkBgvY3sgMXQGesrpN35Wg8HEZ7xRVLFRaxzoezGspJukyhiHHTesmCECGvhHHiiXraGaAERLnJ5e4tPD1",
  "key20": "2xvfLTGRPgUD4TUUhTqueuaF3q9BPhd6BGa9s3GR9vY35Pw8xo5PJckCdip7pTqfbLsyfWpDfy9dvghZEcBNJrbu",
  "key21": "5uVvff3zbgD52PwNneHGnSEqUgFtC6y6q8uMygeq8nf5hw4eJa1sc7UzMMDVY6pHoxRFe5zyKQHgP69HPntbp3co",
  "key22": "3sV8PMqPFDLsTKBCreaCdRTttpQn4T98LRtRdSrPuFdZpowZ6J6uiSfin5Nivp6o7S3vkRtMU85Zp36dwjmqu6zY",
  "key23": "5rnBabiNodpWgPitQb7cw2HfudPvRKY78zcA3HbFztegRERCxuCrDiUMQDjmQnARaASMGgxdGhPnNy7X4vFuMDyd",
  "key24": "3z3ksbFnn8Mohi6691Q3JrvZKfgweda7Ch2Zzva8ApuDcSFxdCDcsTWiVsxF8T2t4eLfgq7UFsMnSMjW3UwNZRrH",
  "key25": "5oVNNbfn7wHur2ns8d9tNyvV6o3WpJHe6K8p32E5ddELHU4i2pLjDzfRGUE6HVhnGTd3bLLPSm4CU27MPEmFyiez",
  "key26": "5hJwsnkXkPn2z1bRiGbKaufpPYyd4mQHeH2oLXtsra1ySXzC6kvaP7voj8piDP8phWHWj3ivvbNv4uqZiYUyqMYP",
  "key27": "3rsPzLRAz1kcW5oGJiCSxZZRN8ZJYyXhJ4uute6J3NBrvBwopRL88JLkfXopm6ZYjSoJu5f1qjaBKex1STb1pvKc",
  "key28": "5kLC3zZCsiFgijDmkL88zurQq948LRQ9odb9AZbsQs5xJffPwu3TBBX24ESCPwXQTCpVBWvsEEFXsvFT5t2BmmD5",
  "key29": "5XixX8bTABSWr7dCLo44fsQmScrtXBFh5REFobKsxYv6doqAFmH71H5v7YoEnMAnTiqkmre3GCzAA6d3scwNL4bP",
  "key30": "5146AmYEiA9NeGbXaAcMGYPaMSnovDTjBQr2AJG7xWJ4Njz494XYxuyVcK6UisVCyBbLMXL5idLGnSHdtrrQfj17",
  "key31": "2pqDhytZaS47ybh3Yfj3CjF44VZsfp8CRb7AGucsTxGFcofyvmmVyqtkFnzLc3P7tVGAYvxSURifVSqBd3PNTx2n",
  "key32": "4qNsoUDiNFSxBJ4ttcFjno7j6ngu76UcWsvhyMiRx4mqY9bNA45GBJDVXQPW5rStKh11eDvv5mMUYdzf1uZLofQ9",
  "key33": "4mwhxeixK63zgrLSFMHikyt2sFG7NDctR8FJ9M8doeRa6zbTzXKGuJvWxoxSmkt8PBd6wA55o4NtPb7uwz5CmkH8",
  "key34": "2ExPJenvdc5Gja8KzR579EFipaKbwecvzAxFpAS1MBSMNZgtbyVsidcewtc8FaKNDF5JxJPrjpLAH6sia6ZV5MQC",
  "key35": "3V6fTXj5P5ma8qWzw7GuCmisTDA1o85SNLuGQkpNaasU6H7Q2LVthRMcGs8X1gLd67rKoLqGZiTGdbv3qHeAotnw",
  "key36": "5h16DbdiJZCqZFJ8sRXtwHemmmjByvaYU9fy8aNt8FK262kxKFWLvdHS2EMHZkGHH7A3WsT8FEzLiUdok8wP6qqX",
  "key37": "5L3t3uEmvbN8tPPmjtjWfYRA7kiQYkjMUKY12Vyu3jMTSs7ZwNaeuCZzVdRFSjmgBKWto5m6DgVKosToJ8g6vviF",
  "key38": "51FTt6wT3uTid3KgSrbPK5ppHVxGE7ceXWRk492NS4UNKbWsxSULbMPwNthevYZxad1GwEn9cTfHES6DPemjqzDm",
  "key39": "4TNDUE7MXGDMh8qMxrQ7VDWhRWNyPT5RYg5YKFe3Lv6Phoc6GfRKTafyQzzZ4wESNKnE41dRCPQuL6Kqiy5bvSgz",
  "key40": "5sqW1KuaA67h178BXNodc6XXkS9TW4wyZFsHJ2sFHh2kHxCHGE2ezeU1C8Ux7MMGJybEFhzmpqyivsg4zac9b4iM",
  "key41": "4gUatN263QaiNV37zCeggK7wLtD6cwypbMVbFWbWRCjWSSE7LX1G7GK82WA8sRTi5rBYbeDr2MTZPJwFhLgvLKT",
  "key42": "4ufi2Wyp1mjNwZHHk7WKBpgp1h6wqaTiDy45UstAJkPH3xxVkSEQC1SiZwasFzSkPH3uVFwEJpCz5KY6ydZJSepD",
  "key43": "4jbuHp48eZqnWx4oAgZuJ3SMdsaWykCFXPndLmUEGybbyNKHNBeGoxxGoP63vbSELfpFnxVd5S4PFbH24h4zB3Jz",
  "key44": "3n3o2DLHEw7vdfX9Dh81DzciqmKNmaja6gxPGcWcnKAomnJJq8NuAMXKR3PQkmwsUDtcyASiB93FK8CHQ5e2ebGb",
  "key45": "5Mzd2bKFgUH7F9CLvASSbLbV9unHBj7pYFyVvwrF6Kaf7vCvwN7uwvkZRTwuPurtUfP2ZE2RjycDTBCwdNeoqivN"
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
