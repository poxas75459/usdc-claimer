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
    "5vw9Th3LmMfmbYSCvbb6hqDJtH9V3xjXhUNNW2zpbCxs89jRgu8ZjenVZ18KLrA5fV5ZN3ttaa9rzii3etcAN2ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J2j1GPgGGuxHws2WEx8kZugVBgjxM6syA7qV6sKhAP4JZUqM91DnS79y7rBGVsq73cXyuvZ2u9f8hPRK2rpZVgf",
  "key1": "5Y25uy71kkQL82SzDH8oeDyfzR3SiCQi1YU2jTrc6kKS8iqarHdvnFVkXEg45iUsBezvqNoqJxCWWDqed86nsz3N",
  "key2": "529sXQQH6BTH7hXdjedL9SNHUHfsm8WN4keSUXVKiRDQHjt4k7PawTsRqRnpL9WT4jwLEwoeXq8mVp6XDEFhG114",
  "key3": "3iXGnQ2KpUyQ5BE1vx4eqnvDTXYc8NfmPNs1w3pHRbpKLC2goWJo8Z6XAjsjn6jH7uEt87HxZh8d2obixhiRqe9T",
  "key4": "2hbYPo4SqbZMyYi2SjeCkurwmtQBv2ftrrUL8Kb1BGHY6dbV4xHvFFUbhqqYYrs7fbaaV4NdRMef3bfvgS89NX9S",
  "key5": "2M92GzS5mLdw6EjGWsZrHtFDuddFQ7n5KDzC23U4K2Q79skJcbNqKEoR3Eygiz5D3FBC1wVt3uZgU9V2J4uVaXjd",
  "key6": "5CTewGNkTft3ToodAN4oNdGJB5Q13sFxJDL3WAn7UhLvDkXKi2ra3QpA2vqPoywBceB8fEz4k3poNovaXPD5fYVE",
  "key7": "2wHCrVJnm8kZWSGSVCETS3Rcbk41f7ehPcfuxDVxZKxXAaAeVpjPmdG1hKjbYG9QsZmvy8eQR8ckm6rboxepjGqz",
  "key8": "598QSPuu7QWsoyEoDDVZY5H11jRUDbH2tRpAM8fQSaYoWUM31gjQF4a2wXe8MudrJBWXL7bSmS7apjfg2ouJ9uYE",
  "key9": "3VDDy5tZ3BLa1NToY4ey8Yjavz7hbFczfCSAwUEiwXaULJeYDYS4N5fyZaEpYyGPYso15SUsFxsyYXaUzG6UZL6f",
  "key10": "5Rh4Titz7Hu4RAf5USmiAhgCd7c9i1hJKwmwKJ8vrNnBC2Y8ZzfWWB5rXGSRCeSL9dCqBbyhFw15zsjMyqKZhk1M",
  "key11": "57CJgPhiuVsz5Wbc5z7SCnvQFT5jrkXCoTvpGrCdNHEKzVkPPmNnQDHxhvDNJuWVjwttQ5hDSwVY2fdAEjKY2hMu",
  "key12": "5vX5tTzJ9Agnon261cemucNQqdE2MVWNPxajexkM8ikLFUrFRigtxDs8QVAtjPcY3QqJQiFUzoq1deN5ZwE1q5PG",
  "key13": "456vnLr61DoA69upUMh4EfkK2AKyp79Wo89KAeujrvMaCXHEsjTddZ4LZvztixDHvfAkQwHm3g8NPD4ATrtcM4HC",
  "key14": "2Jj4jXWbuFV6P2diXBNngGrCuzjTwWt6XR8FHnd9Eo4RSLxodJEcmF19jTTFvpgoQbTVkoBVtBkyz8B9u5QzdQqA",
  "key15": "QRtwAcMqKh7YVgK5E4C5hbvrp2wceVuFUZBq17mKypGmui87xbRouNwtmp2hLBJeeEUEJnyhwDtTs3KfG8QKdTi",
  "key16": "3NDP69VPMrKqpRsEZVMfKvfbp7ysdgnPjtsmw27VYsjR3zkJdWKtR9gp7kPpmmaMLY7AT9o4qH81QK4rV47UiFjy",
  "key17": "3y5fzouWMtbWz5xQQyCMSwCs7h699CXFFmw7hMXUryViPVhR8rkYghCumYtYdrLo4knmSX3VyKwSJ6cN1xeqZ479",
  "key18": "4RZ1GsbX4n4wKcm9GiR6LYnpt2RvApE7G1x9JF6NPjuDhDS9cwBXHgyHNMRNsVoLst6VLc4UrzCnKu8RyukewiyV",
  "key19": "2GxnQhzo4qaWPPHV4aMV9nVqcJCQvAfVAwk9BizLoCnnVc12uDMNTyquPTh4eCnkQgY3ujqDjXR8yyo8RSEGWy1o",
  "key20": "2kUKHXruJB9fkFgNqw6VgT2SHSBR3fMdUPa6ioKqfgwUeE2YmFKh7Z4vEzMTAQwum7pmRgpJ9GhLmbJirWXWe5XC",
  "key21": "67UnaWEcCMrCURm1KGCJJgWRzSzgVLAtTYcsK89mFhfyP773YBN3TGVUSVNX1VK7qtCgD6g1Aqkcso2YUJN9xsPm",
  "key22": "5jYUayjooTaYu23TYmrN33JVCwQ6h1KGJhduicELVEmFVrzQBzAD96W3pdwyf1JyinCLZtahNLmvN1RqSpY5Xmqa",
  "key23": "44eVZFufuFgJoGK9o7kJCqXctJ1DiKEL2ngCDTysbeL6dTKnsz9bVeP3QMFvzTNGtXzbZLy94sNnUqw1J8hzLKes",
  "key24": "2rwpWuNLGcBAiKLEYNxwtYSJM5CbLZASv6x8wk9nZBdNybrauL3maz77VysdFcW4n2nYtLVTsKuhpaRtFmDF7jpk",
  "key25": "4eDgtYvJdXcm5PcZE5m7sURhF9BziNDzWgmF6kbbDyZKnEQ7XJXyiz1ThCdbDSaJLD5nU48TpQFSCJ1MnV8ygeTi",
  "key26": "4zcxcTgPpsG2b8RnMjeVZ3NUk4dPoQg8KFY3uUizTFRYBoLqNxsZs2paZXAVhqGs6X1evtsLxyYLmHgEjUii8Pxj",
  "key27": "3RNKoD1Puhpnj5Yu6nnMkpvSEpdnMMPTPLV4k7fKsjUCkAKyX4D8rv7zmkddYaGxocQdq2eZs73NHwhxy84n2X3i",
  "key28": "5pB9AxeyjFFPCd18Y8zzMZJCSxpJtfcGv5nQNzDbE3n9ErBUPx4SZiuDvgDRReU37SPe4jQbMEVSFoQshBha1swK",
  "key29": "4CnVz9ncTp9gnFvDtHiLbSBC9udXhfJyT7nJ81uA7QVWNVhAKxucm89NVJUqY3cnQ9Za7SkYwa3j7FYtRz5a9sGY",
  "key30": "5koYHbkJRPTnzruahFsLDVfemwfGR3B13KGQ7VRKmhvEWfQPHC5gyV2TEst3jX76xxFNCDi4qdA8QrrpUzpShaPm",
  "key31": "3xqPmsnZMfvdC6F8MEyMgKsiLh2X5bkHsY8khcBBRM6CaBbVUjb1LaVjdcecW3xpuWkpz6o9VmfbX4oGYvvpsLJs",
  "key32": "35T3Xk9a24YZhwEsZWsonkuYNi2bx664G7B95rri3AC4N9r5D1cL3wE635hEkoeVHMZNs7tb1iZPMTMGeFHLECck"
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
