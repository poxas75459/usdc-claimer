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
    "3nK2qfKYrCHDU7WuqzwUt7xVahHPHmq6g3FeuvkpNdR5wBmUrYF3MABeyuLsMuH9E284dfrN61k5Dc6pE5MmF63h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NYyc255M3bEAnVP8BouZmGdbQxv9GaQTu3Mrg6Q5NbxknkrYEEpLGGWxmwh6JicZr2FxgRKfua2EGurctW7zstP",
  "key1": "3vc9xC2VCU36FqNCTKVfvJCWq5CeQ23BcxTmcYcAgvnsdWhFYWfLBJ6w6ZWskyfcMDhoa3D71gypGWFYv6bHrS1G",
  "key2": "2iofRnoSZgm6gfrSkZHFSrsY1ahqhvLWctuqi6NnexNtepbwb6h9ZYQsuqpGhgoMZreZru3DM3EJvmhdh8zumysU",
  "key3": "3hxtWaDmaVc3U3hqGEFJknHttqxr2hrtMDM4bjRAbP9L1ueRNSG69aJ9TnPR2KxfLe4S83iy92sexmSjQFHJeDqg",
  "key4": "47qSuL7tHxgWMuc3GFKzXjsggP2p7LL3MbTBAySUQLnu2fr6j7LcgWqARN1uqkGwaSPVyHk6qexeERrN9i5Pq5c9",
  "key5": "5AfaYnqnH2s9Frjs3eECPe73CDdRK38NjUSDQ7QrKnSHCKTxnjeAae3GcCCS1Puj7EwWsTQh3YMwBdvGB4Hwpgdm",
  "key6": "2fZnFnYdjXsDwRX43u5sRqvhQsfHZ3tLS7QebK4RwFmiAhfMLRLdCnmtMhhLjJjWsntL54MZtfdBFhFBpJjD12QP",
  "key7": "2EGSpa1xk3ctndUEGxFNTFhWj5aZDUA4tbXw7Cabd1PUpSdwRvZHDio72E4AArQc9LRrocypCqSWKkEsxRowSxaQ",
  "key8": "NixYUAJsGqmcMkVrQUycwxb2QTBfSuZNceXCean6EjuonEFdEbrWNPqURuUuhB4TcPbqor5RfZuyBEhLNQzkaS8",
  "key9": "2JzsMvbEGL68Ym4V6RmausJaEhwBBWg75gCdYMkewGGaX4JYionUHzzh7UHAGe5HZ82amrieVZQ9Ntnaa9cvqAM2",
  "key10": "5ZsB1KgGLPAZrksbPPpQ8Cb1W1PRcHW4gmKmw2ENVPoziE7mgcrtU7YqjN5QN2dgdysZmSiaBGTBEaTKBEUVZn5Y",
  "key11": "65cdesWXPby1ZKRsjgbQd1WV98qb3XppcqUTp67EjxMLwnW85STVBUo38PykPTnuK8xDWxnCWrAAhuiiz6tzERoA",
  "key12": "5AHrM1Asgk9ei9QMzGsfAeNLPsrTgiwP9ZfacWJt5tY93F1PfahQHAUUsReBMXuJGERcW3pEYrkqfVLVUF691WsB",
  "key13": "FEtaRf4u1J8936kYrAKY3AuwQcjG5sMw97SY8WxMXLV4sisRo13FJ3SdgpHS8pAvKbhuV9UU5xqikQFLH7fmXgP",
  "key14": "5NMaT1j5MUCUqDpwfonX3jBKiTGc6QiNC9Pjjyojyscn7gnyNBre56Ne1yZQZfUyurYS2vNhdTi1Qtw5JZFK65Jq",
  "key15": "3TbXnPvg5TCcpAHF4hzwApLcqXEVe3Y2doEcESPFoVvqErMMwFpGYKk2WAkTaeLNfAdBc229BxjjqoXQzL98tyQW",
  "key16": "4hvzYFTirqfnyGUNdFd9iizMXQKNVJ8La7fXK3P6NqsPwHt8n7NTzgCRjPjCsXeJnVeE2Fo15XPpLKN2psPPMhdv",
  "key17": "67HDbvyNeJHLUKEEpjaJnqpnpRvJVa4WdpoQTbF6GV9hnw5Ss55XY7ZRQauibz7WEjaeTQi2tfpy7VtTcjCZ45fJ",
  "key18": "4N29uhCyFM9fvjDmBFjbwpHTLDQLfcuu9V1Ce23pEC5nEvPdDRy88vx1GPNo1kRM9HUmPcvDnJbQRZmiYNGGwGTu",
  "key19": "32t9n67rNWwBk5q6p8QoXjuh3Yb2PGGdTD5yRWygmEfYrgH2mhRSN2yAfL2AtkAVEE627KyqQC5BMGdbhdz4grFU",
  "key20": "5FLTsRDpX7TpdBeW1TJbvV1oXH3zQwm5EV66Lwrfzyd4BpCWVfWN9t4G6LPoYbbu5VnGfBe4XqYcqM66wSXSNRbB",
  "key21": "4wj6m2kiw1frMnULJE7tcNZt7ULTsBAA9i3KLAcqRfbBqC9Hnz9jyAR5H9M3yit3KkzoJZKP32J7udxCpGmTYfWH",
  "key22": "65AoyvBradgSYwNNw5ozQT4qvLnA3uRAFZDazqpNJp6prLaVge5poz8smt3afnaFkx8YY633uwqpmWnrk3qvdcJa",
  "key23": "3Rj31iJfY2tQDbsj9g7uFktkHWekTHkCFUUZa6bjSDnqGCb6NqKf5ZvhcyAPYJGxNATfbuNyxPdC326PNpVMP54N",
  "key24": "26D9a6xtV63ipfLFuZNbRM4yoAQdL14DY9jiZXm3p3LjaYLscFKn3N4ZMDCXzgdsK7omFTo3QraeuCfTomj85sLp",
  "key25": "4e5PJJzxhQy7BA8j3VU5tDzsxXpzMV6cWoFJpGuCmcnphxKKD4CKYkNxKg3qdfvmrYayZvmbhJ5PF5hDQZy9jt8w",
  "key26": "22T5CrkHwaxJsZYEMTYF3kipjfaDQfJdK2fPQ4TAvnFQ4LDgdAaRC4cnKpD9aVzHPwPknFPdeApBzzA2D43gLDtF",
  "key27": "49JxEE3fcAwkQsEeGH2ZXyXeYbNt3dCzBbeHphGGQHV7nDq2ALUfgNhmF5LmLehQxGM2vTsnPj9Uon9sEsMJcEGj",
  "key28": "3yTM5twRG1GcD7VAEUfqmJdGNBfEkFw3Rm71c7hifnV74QosU2WpbUP23nhKjjpLtvyTQeEutWrVdkU9mdBnWxtT",
  "key29": "2wcU71a5UNXU7CTu3SpMmFmHHDfEXaAA4CuqJkypwq1budXDS7ZLe3qA7xm8rpq4TdkCfsgHTm1s3UF9az6yXqDp",
  "key30": "HbBmJsqu5VHhp8eZKJu4uigyAJqp3B2kBwZFmFW4kXiTGuzz5hsYCpUJTR6TMRuvw3hxuPknQmpD9XRW9s3EoNo",
  "key31": "2GLLLW5yE5omXJxwzsjZ2AGT4rJamRGJE5tSSMkLKHgPHpQwhkJtwa4X2MyLVBRX92L3ntXokUqtGfd5EkhvrxL7",
  "key32": "2psHKKQDyBpRPEvVbeAYhFL2YYW7tVKXeyWLRiToMThVo3ohdGa18eZbXctPwngRccDkyAf5JztKLGtXZPN5sJuu",
  "key33": "4kg1CUxTrqNbHwhTRqJpQvv7eWNRM8g7CtFUXVG18n5Eg36StJSTvHuq2kurWaaaZLN4kGvKjv98ktMA5qMNCxKz",
  "key34": "w51XVd5kie6Ui89Q31PC3CZ5Em8aAoG2vM5VvXJW7GvGUFic4F4KFL51J1b7CKGcXxU7qr2aKejJSRc44GiWsw4",
  "key35": "QrV49CQSv4gSiau7pTjrhZ549hRkoZdYnkg3udLRAiiVAqmxcacdNjPGUartnAHZHSAYdaqMcAsP8Do5qmDEzW7",
  "key36": "3WaMUQGLGwdz5gMJfE5X35ikKjk1eFGqHX1JRxcLQCMGS1kqn7eA3Bca3n9cLkwBpqqR1Ea83xF3Wm6VjcvhkY1V",
  "key37": "BH4oqujX7TcSjHoiPQKfAdyKrNb4H7RrvYcFfoc9pcoWjdcRv5DsMaQXMpev4K16EoGMiGA6jAu4RB8k9rCwNa5",
  "key38": "53QMeuTHAcdtzXvhAi7cksP7afX96EgKue9poneaaqVB1jLgVcLph4CRhRfcXZeF2YB7RYrsW1X1rzcNhRfpvzQF",
  "key39": "4bS1P2pRS6gc3wuAKapnTYzUxniLmTsg8ETyBimtssjD8Wutq8JPbqxERAk2oZE1yEhF1D3aUrVBFF9YjCXaUuvj",
  "key40": "2u93o71R2VVT4AyUyBhaC8mSPPTW1vvX6kvKJXjP1iTBqconc6Ef9z1QgrksyuYZRvckEk9KUJ3WMi1bBHCniYyr",
  "key41": "3ZQjmBx1hsvePA85pdf9c8WMMesLknJfrU2Cuz5AQ1nkAVERkzraG5fmBx8vd8baRnVJMWeGbVyDii9wCMQybLvF",
  "key42": "41Q2xDwaNFLZ24YYAqn1BQGvSk7dXR5c24Ko6PRAxvNSr7ZxK2HGWv4ENhDxf6zteHzGebk7iTiaDUVDyfVSpbcL",
  "key43": "5edByyqBjGCHyPrXUcdQ3NXawyKWBWZy6WwLSUfLVdo2EX7Ubt5ygTpSkEt5e5X8BD7mZqVJHuMWa5s35eenWjhw",
  "key44": "5pHDWXHWRXTbDzgX3132CV1BVcfM3BnjkztJufbMEddvHKYcZKRNhDYGQ4vSb6kvC3ECDnb5NJKeesAxbbwPwjFC",
  "key45": "Fj7B4i7cRz4uyXc7Sa4TRSMxoeW9V2UXyACz67nnX92HHeK5KghL9XdCBitFr7JNPRxfw4kncGdtEk9FepJiEbS",
  "key46": "3z6Sf6xRoRp4aHvyVbPCq59vQRn1GwMxi8UV8GMjwUovNKcmWqseNa8FmSb5WbpebszuWsLQukL8Y2zEccfZA45y",
  "key47": "iQpAwhkVycBzTDRoKcki7mn3cwMjnCxMwB57SYuYCxUp7c15Vi9DdbvcxmFuFDK4twCFMQE3MJA1mgbbsPVL9P8",
  "key48": "4Vh6sJBnnEB11yvKL6YRoAek1DS9GeKFeAQbvPxRdGH7AmVq8bbCGvAvmFrXgLPBDMjCpdi19WzUCAauATaExpe1",
  "key49": "41EscSp1QtTLqZytbDUstrpF6Lq5ZTeHBKSiVeWGRBZP33CVA2Spvf6Gm7LyAmfLSqmN34YUMudkXF77suTzNaen"
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
