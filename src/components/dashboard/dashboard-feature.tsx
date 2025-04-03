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
    "5DqFcUxBJXgoP6bAgURsut4eEJZzoNvprRUqmUq4hyHKRshZBzR9eGrssX76YGVAkvCC9kvo9tb6NuyQwLAywJPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39tcRz74gBXHSwmgvudtaxEvWdbKytYgvw8LL3mpuTCxDRiPsi1zf9DLxS8RnjW9SxnJHpPMKdLDiyzSGSPgJi4W",
  "key1": "5yg8EibTbcf1EtqJccsEK2bQLtcDKrkG1kVqspbdgdqFcSxPbWaadjSJbWZWCy74W8no2Rp7q1HhYnueb1Vwf8G3",
  "key2": "2hC6BQeLmo2EVfn4FpwHByXaSMLw5sWWqBzzVTqvgH2YSnP5jdRTMQHTbGufViPaKwNb5ZLpM7gqQ7wKVWFCEfu6",
  "key3": "5jgADwj6auZAMzXWD4LUmDK2oxqhmx9MJvugy8pWxLV2inKiY7XmVe9styazsiSRZHvcPCqWpBRK9snzrB3vpxYs",
  "key4": "5qWbtXhUyV1BhdmsFjCC3MBE15Gr1ovugMGGdEcAfBVMcH2iVrvppHiPAjLEW28JUZqCtVeSk8ztN5My7cax2dK5",
  "key5": "5H5Em88TAfzdAJWdssPSUDu6GDtKjoD7NeqVdETZgpqmdHnWwYNevPgDowCaz6HEmX2dQJtwbcAMmuGPXUYvBqkk",
  "key6": "438Lqk1QMee6XAkkbpzvo9RxbuJSNuDtUrgJkZr9MiVPowVHUCZhLUaaP9HbJhJ6cv7ogzZQTjc66pbS7A5Cug9M",
  "key7": "4ByerAZo9owzbJ8sbXDke5uzgZRW1rTmYBq1WZ7JcV7j7f6qGahRDDj2RZAdu9b7KAxngrzBPad7ziE3FwF3YCtW",
  "key8": "2J6eVyhX9fD4EASkHKQnhrLyMnqZSoyC6Qnh3JEYxmERtNwnWwo88f13rmM7mcpzP3kqMA3DMjXf85qSB9uCQKBT",
  "key9": "2Su5zaiudtsS85RAHM1JMtEFMY7kbAVFoPfcudkfefXBefhHUFkk6ssSNnKWz33D6511KdHZd8ityXGi24mAbFuA",
  "key10": "4haBFZTBLBD9Pz8FvcxrwjrjV73YtafQ9pxfmH6TF3hvwJd4PdpFqbLXAj5vMZbfypzqhwfWFZBtaNWQjf6AQUVw",
  "key11": "2uPddVQ46kDSTz2KfYP4whxjgoxXAiKfEWhXCJx3v2yLFocyPYSK8upMStFAzyiaZ7o3VEKTHUrdMbgMYYEhvqo8",
  "key12": "5EvQBepffBroAPKoggt8KrdAuLJzg1LqrbusHBoU8fn1srNVLRGJZRf6MmDbjRV7itp5dEPPS1ieNB371zkGsjrk",
  "key13": "4zjp2DQqohtHAWStXX4SbT6rBtLQzGQ5BYz2gvsPE2rwrNNPerLWu5xG8emoxTRfwLdZQcXEdFmiNU5xdkBD3giv",
  "key14": "zg3QENnTsuNcbKRwX2gTebooxjgdUZeJwiMyxohKcSpn5XaP14BpdrHGZjktVFjG35wxAyeNqWyUvzzsPVNnUoJ",
  "key15": "2ve7UJosQVHqjYcYixueEj2RSL9FokxvRGd7MSLBFt8678jjPXUftx6tVCaMmy7XANyqoCjdeowE9AroxzZK7dBp",
  "key16": "5iqxmWYdmKCdN3rdn2HxNtzhUxEBUWfFcuvzkuRL4wWRHmK5tbkKcUPNnFVWo7PQ3DUoQ4KjEMAoJ8evygazPdAs",
  "key17": "5QRaMKm2PJU4MD975D6iAFgkLksAgSS9jhgbHGnFMwiDVTordjUKa6k95pFDE4yRwJsGMGSAPCsyzoV6VbjCTRrx",
  "key18": "nz6qALbXVnReiTMVM8Ji2Va9rWBmPwmmkR22t1py32wn5VeJWGxCjqaPEc1NpUiDE2BsiYBjfQBZybvqcfJs1wu",
  "key19": "3V2NJTKYTFVLKwHT8PyhJR5BLwXbAiqbq4w4BQ2gZVtfgCqXsszy7VbmXobj3YrW7ypxu8UX9AGYPrjsVfvGcnSy",
  "key20": "g3B9imfsSPiuKqGoCJPsigvJaKMbZeiSW1xZT4hMiAnefKsq9DB2no5Q91NsETeMjLVp2guFgdoRByCQEiej5bG",
  "key21": "2PVDHEM3vJcoWCEbt1fYRyDvePnX4YW9apUXipnPWYLuefu3oL7LFsyxa8Eu9L4D5henah7TBrGdUBKKSU7PcxCB",
  "key22": "4VfBWY8UZJa4u2cLfjny8XJeewUG4Qeot6NZvuSEZpEbYxTQdrKms6RWww7YMQgaoUH8PpPXZy14pst6rPh43ufT",
  "key23": "3WMRXpPAUs4jCVEpKKi3hYBxc5DoLXGfdYmL3xKJLphdwj6f56EJYuL81SSjMSnwjhq16gRRJyVH2jxHKEiQKX14",
  "key24": "5Kq6nJdWpJtyqVCntyJdxncha6CN37FchhDKhgtqW6kRrsrkXyvDFEiFx1zJkEiRY6RHBP9rafkh25CxJ6qjCb76",
  "key25": "J2Z8srL3wWDm9MBM65gU8MV5nEtudQayxK3XW5hybg9au53v9uAQHD2um4HxzBGBfduK9ot6Yz2sMZ1v31CVNYa",
  "key26": "3JJvWg5DoreRUP4DKPtmY7CFDWf9gJ1GDdjzg1Ms2PGukQpSAgydsDrv7rcaYbx99GrDdnEbpZfQvg6AkziKYdMC",
  "key27": "4WdoF8B34azjquwEx55NCKfsNmGuGnQwFiPcsicduMkGKUKNqSums4S8BXfJeFw6rbdfiWxY9Re8DDCZGAZ4FoF9",
  "key28": "3kML3qiDZRdBBdHgpyjWx8J3XD3WqcPvdSXgo7xdKmQu2a4a4mWedV3soAQtQxbhBWeLfBN7zqNfHrXCxkHfnLNm",
  "key29": "2J7fAZFSycR8nkVZQGw4XUMSEUTp3vAyCu9Ei9WwVgjN3VLAoKA5FTVRryzGNkkfHB8KZMksR4z5cBkbzEKjw7SB",
  "key30": "vWZ2wcCTQZRc9YPCqoMQpScKtfASbRYReiFM9B5Bigg3hpbh8cQUsYLsRtcTCy8PX6vrB795ERJBFChi2pcPiVf",
  "key31": "nvUcR6cMDyBggCX8ULaXT5hbjNqGx7wk6bTayWG9pvqiGUskYcVZjgAme8NCoJnkfX4SjRKW8MrTzEP5sddNig1",
  "key32": "3c8Cin64YqhfLcUPorcYjGMX314idRzv6zB6DxNnc1N9emwX71xVRWExycwfdb43eBdcCqJGgv1Vpn65ZBLiDc6N",
  "key33": "3d2QkagN8Ykmh5BF9x2AfbJbWg2r1E3isKJWeGa69cCqD2Xf5VZzc4w7SmRnxdUvBQTD1h3oaLCB4knBtCXc1mW7",
  "key34": "46uWjzigzoxsRqSvVDAu1AcqM93ZrDyRKpQUbhXa1bVTS5ocP9oDL7euNPDP5FETkJrsnowXeTf5Kw35tXeshUXx",
  "key35": "3FzV2BGwDf5mkdmB6EkvFinUWN1NkG4WPpoFFjXtasKJDDXmAfwedc5EtwZcVr7GE3mwhhU8Y5UbuG4jfTs687Fw"
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
