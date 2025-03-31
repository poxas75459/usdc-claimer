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
    "2US5p1jDmACic8ALJ8Mx5jdymcnQeTdmzpxv1WBFYt1RT4kEh2ceFEZ5fBkBkTnVuz5rffAidxXSpZxQndz84CCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDMT36znGSgkLHNtRtkZcDuKUPJXDQNdvb2WaYRe3ohBFLUiTo4z2RcYUFoG1jWSbEVPPAiYeNf32PRPGtj7ujq",
  "key1": "61mTGbMhYrqkQs7UuoEBwBXkVugh5MoMdiWNJjFMQtJ11RzqULYG9mBnPsd1bPVJjLny4CpUQhkVkNro3GQoid8W",
  "key2": "51LRwpjQzNxazzayY8tT98qki9LpwvUN9yepYk286tqgH5ijjpVMtX4NuEutBMegPG5nWBFrqAwQDd3FMpFVYHEf",
  "key3": "2YL9apngdUoS1KzjhMDTGXwVwz9rTN1oRgFxTG5tdXDCNGc8Yctqpw2XvVJw8oLLnS3csXrcLeMvxvc43xkH5c8B",
  "key4": "4zs7Q4g8ivhryT84CFMyhYjnknoSqhLUZiLHkGNAoBnwjbbi6RoK1Y6nxrNCFf9t8JDG4wurnUdGt4ye9xq4jyH2",
  "key5": "5YF3hfbKFtsEmq8qKNoFiJVt1GzufcNQcG1sDPNwB3dQHQMBqacaA5tricah4LE4pYqTt3zrUAdEuzHhMLQkMyhn",
  "key6": "ihw75cUzGFAR2MCdD49So7yAV1qMfDG1J1JZm4DsdvK6BZyf9r7WRw5t7iY6fXK5BpMEYVmJQBbKrPGMeCq1vC6",
  "key7": "65ExmMATqTbScqQNpPSK6gvqcyLhsWbgrus9oVc2f3mpf6eGjHGkfwEE9HfELGxgfpyGYaNbLt9UdygvoGqNsFcf",
  "key8": "sYV24vFPaDDEU21p2K8SuSHG3Litm2JMjm2Go4L4JQaiwsh54fwKTtXmAP7ECDpvWgagTBWUAybjAr7Z481UjRn",
  "key9": "5Y6Xer1Vv6GvLsLob84t3EbJceMoXus9qt45qbbxFfiKDTBoXpmHrfGrrZDZpbocdMWuWbYm445XVAz6zxfcKvLc",
  "key10": "4Fw8wpjmzryJSsD9DjMW9vAzw1YYcufSqtmyKnfRmpYsVtUtE2ktfXDHFH39GmHEfVX2fdnHPGZynHE1ws3s9QjG",
  "key11": "4x5HBtZxn2mW5KYKtbVZrtdBDvYK4fMxQCLKdCPyYdspzr5FJaQFvPCFxY27BUeDvrXkgkEBT6wozWi72kyBy7xf",
  "key12": "2B4A1F3o4ZpUB4ak54NmBV3BzSNbAboMA8X3esD8frrzjFSMvxJ5DXfmz5DDSUV5xyV5is9qhZVHcGitjT1rtcaG",
  "key13": "5JCyzKxapDcTV9qJJHPbpnjeMdoYLgXG4gbs7t72FTtDr531d5Kry63hftQZfZB3jTqG3VPoaV97LavGkNYFs6SR",
  "key14": "61i8HPCrKTBPEMCvmx2NzghF7QbqvDnBwhhV2uSmqe6LapCSE145yfge294dqC1WGKHc6szerPxPgYSpMbLb2X8b",
  "key15": "3DQbC5h5vZXbcgKVWwZFNksgqgXLaYdhZABV7cLpztMVVMMzHxS8BcTyAPCc22EcszveZFsfdoWx7cjxUz6JDhe3",
  "key16": "H37m2pqQcoveZcMbz96Hv5RPDFEEe7ZKLvtzw57sv6DjLtnGMdaTpdRP8quS9vE5j1a6LCsvShcQqXryqCDXKsh",
  "key17": "5E1K7w48nrxgMzdqvECxnVeA1VAKkEg5LDfsdT4reJR8YmAv8HwrbdWirYKFv5draDWhSrDNLy8Cdd9mzP2wVdBN",
  "key18": "wefTf87Kgi5gpBFxh9JYUNupSn5t5j1T3yM2wCj5WihoAkAVGF6QQGSxNdLkFpnrbb8g1wZghT449cv2urNYpMd",
  "key19": "4pmGycio6VsMNVNYKmYQ8y2qUm7e7F7JmP3bdFLBYFdT36JoRvoV4gj7dxafDAHyhNvuggTaunzWKN5rC97Mut1X",
  "key20": "2tDdYJHZWc2AK7BNFHrrqHCRbmoowFmjxMrLkRf74pR9oxvBNyf4wewT587F6KV6TsxDGoDqoksJdqmPKyQTokWq",
  "key21": "2xV7tbD7kVNzEKEJtQM4kpxZbRhEwAgjQC3VF8yTzkGTsSuvVg8u4LoghXuswJ9CCWoKjfgBQ1stRkJhWe4EGYPJ",
  "key22": "4JxGMayrUsixAayaVitDckx2vc5anP4MFbBjwAcyMTGfFk67M7unThaEts3PRRDncCXRrSXAXRBVEQLZyhGNxdk6",
  "key23": "5hrxKrDMgoTYR3ei3KB9UDiMLdpR4dwP15wHzS5Uf4wMyot3HQpAhXTGAtuP6xRPNnGLzMtKSUYcSPAQKxyFQ6n5",
  "key24": "5M5AVksHtBXotyKLtyHNp6tDSP6d2NQ3KghYwuviZ74TCEozRMti3tSuuZjkK7qJyfhXv1wSoC4AnmPgpPKt6V7b",
  "key25": "3xsb3J4n6ZM3MARsiQA76tYFjm1NyA8gHWfyEptstRtxCeeVUJFeqMKBJvZ3ssWxmqegS2DnPK5C4WSiPYUfr3YX",
  "key26": "2k2oRXztkjBV7ZQ4VK3VKmPa6KFZW7Twrjd62bFmLmiB3T9zhV2vN6z3N9sdAPUQAEkDUmVirZRxbVYRxp3bWj7y",
  "key27": "5WhZDq9PQPd7U5Cznt7uSGTpxfd8SM1vZpkJwpL3TngGJQ9F5UekbpsdhcvuiTn7pbjdkuCzw2zRteEfsbRJmjuW",
  "key28": "QercpxcrX2rzNf7yVSTByNU1m4i7fp9JX8JRHoRbjYQ3UYsHg9tzKvn194QHgaQvo8bwjmHR6wWUiWjSQhcwLGF",
  "key29": "3EWeiB3QW2D8pmyDgoRqUbFkRcsDSr67WEnE9ZApn4TqmWyxx8DKrzEsopct9Y4k9cbeeW99JS3ia1YCikQJCVE2",
  "key30": "4Y7rbKS811vebdshoicjPktwKmhvVwWRqHPqGk2eZqWFkuJEQo34BB6F2vHPgTYzNLK78Fc38CZ7vJg5RbnTtggK",
  "key31": "51gMCAYFzVxran5Q2sGYLZTpkmWew2ufVYwfBj931z4w9gtcvX6WL76T6dk3goD4cK4M9uQtmHAdXptBjRvUf1nR",
  "key32": "5yGvFbcpeRFes4jV6NebR9KpRokRywfT9VKKFh5XRCkeMtspwGpFAP1PFUSqu6gj1uwCxZkgjDDgmMWnsFbmxVK9",
  "key33": "2APg45EjnLw9cSgdS3kv6n2GesjHFaZEv9W6tQA6k8jNxZMPKeD6EKj5EwfTEmvmqY5MwAQuXbsNDVH2ZGisTza7",
  "key34": "3q5VV14PebJdbVMKbLYqCexT6V3VLPQnrckHVVDGKsMJAmhfx5zkHQ2dMgJqHBWVSoNahKpRHCUmgbXmKX2iDThb",
  "key35": "2r3Juy16wnBwakzFNsX4pHEr66qumdmX4nE8nnfuxKmaRSptqp68puzV5vdykthLygQhx5fHHUyd2ggG1gv1ZCgL",
  "key36": "3HpuDSdAUu8dpCpis8DayZkdp99Sm2e8QcC6ZQQvhEwoDiBMAjXfVAzXgqxhYX7M2nkE7NQFDS3Q4MgCf6GN2RyR"
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
