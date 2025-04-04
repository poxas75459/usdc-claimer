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
    "4BWkBSSkp28fmxDYb7qrLTEpMBNSmbc51o3po5S1t2Y9aUiEP33b9WYDJGxY75zVXoDrdqt9WJpVW5PPbeaUqyEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eY2Twzf7bsVwehitWyaZP5pkDgsPngGip63GEbv4tMPTU7GUWybQ684WmwsVqQ18RBtVMX9UF3T2D65SgfJuRBR",
  "key1": "3qVe8CWeuwNsnB8odtR6CD38mYDg9xWU3VXTmGbewMMMfkAdxF7tGSWnkYZNNdR395kLkpBmNJRJK9w78mcDpVAB",
  "key2": "2KfAGh1VkCdFetebbwcJwfeNS7SQNnSZctHLmD95bCWDeziZNcS4gKJ3kUDWj9CjxZXDBuoTxGD6qY7zj6YwuSDK",
  "key3": "2oB2pcFg2beB7WWerNhV7ag24C4YBK3KpQo4rExAxgLsirtYzuZWtc6ERWtojGLXqqS2A8DdYikfeBK7gUgFpMwU",
  "key4": "3C9BzwgE1rzW8ysqLwxUKAoJ3hcA4JVFuAqAeHcgYDjSvEqWaKaHXnAkiMtoUTgeSYkBMRu1Zeg1AGxrCuhmfpJ6",
  "key5": "2riBRrYA15mgcdEDDfs7dqnujGUkDgPrwbCAHnS66dX9Nt52UCkvtjkx85HzhVe6ygqUHZZLXAbWy7bv4sXQ5zV3",
  "key6": "3iSSUwmud6auWfc5hbA41q6bis8YGhwWSUijpGuNn64jcsACd1BsJyMJ8VNYFHnP36W62qTqrwubY7e58eoMaBK1",
  "key7": "4vCRohxgecXzF3Wb5PsDji6FexAFeaKrdSK5Yo1qBGuVsLEaW8r4BX68KjJVcg8y7zfoTnjvuE2Fvh7nmmQVmp5f",
  "key8": "2vG5cVGFndsckkUGxbqdTrvwyaVmW6RQL4Vp2E2s6KnNS1ZconRJxCyEz88EEDEvFnqfEMBnd2KJf64KgVp1nCD7",
  "key9": "3z7WKc25XA4kja5Dpw86TdN7RzhbFvt37cLdfz1uPJG5XqA1syutK4kaXj2xUxjppZrwFCZnyDAJmjs3PxiHDPb7",
  "key10": "3WbvvYr2CaY22qntmAemf7G4R3wp5rPtRJoUYRqoa7NHiwmH9CdLngnjBJafaf5UXgGa9A1JU3xjhGAb7n55eoV5",
  "key11": "5ZErGm4k9tDqo4S2KyPbY2cc3aYXEZAvV1B2WkL6NmvEznMyGT7QNjQ1vnXm88m7SLqfHJAhTt7V4DcSoVXeZPen",
  "key12": "4XhaLFipNJs7Jx1Nuq3c1KL39qeziLCnpdTio1XPqs6YpoTpWZov2XPZEEKbgv77xiukCctL8e5he9NoAegshxCC",
  "key13": "3pgV75tXm3W79W1dqgteb2KLEXWzwnKXZFsr93PfpFu6CntubzTaJdwKdQ374k7eTnCvxzWmDGbU5megtDMLmBX1",
  "key14": "3LFUC7kXbHRkk4s8o4H52HANTcXuUyoMZRjmK2AJQtxRJc75Ecbkd57cRE3pW2rkFE8A4SZfhvaMDAKk6jWt9Zy7",
  "key15": "5LauVFpQzr6VDnVj5anu7qBG9fLSbWgwieYhwktxiTpCbbUjNkqdtYhJoaD9FhZpo3w5ZRbXd8oup8cHWSFN16PH",
  "key16": "TnV2PDE5b7iR5zJQG127KZ1vPMDkfoVxg4MzPhs9UPquu2G6GYwuaWiWCe6HBaGn6WrAhgc4r7J4rgKneZSKUYr",
  "key17": "335Fdo4CuvtjRqjRLuU3WiQ9J5hRpCaVweXp14ZyZg8vnZYEgDwp2QpoY3C39Yr6NftgEezSLBj1kAxHdV8CYxck",
  "key18": "xTVfbi7tKHCVvoHahJgZbygPEAHeDFDWzumwVt5AFFamHPPvXEsQB9vniGLTKAP6LNbAb6FQ4o7fvv8o62yZ8Vc",
  "key19": "3fPhTSSEZVgte2hPRtiUn6ksdVMeakke8x4JU3JpQmsYBA4QMD5j3CC8vfqvaoaRHmZzmgG5aPMU6yV4fSDP5byK",
  "key20": "3cXjuWNnP7jXUt6HMGrGZz5vhstXtR6xa6FRHqXHtTZsKugp5A1Da761ajUiZF3A61gidyM42aBo2FhbudLn3ceX",
  "key21": "23yxX8DvXY5NVwSVkCgRrLGp19eokNoga8fQuSzc6aiF5CNYs1kiD1qGbSZhiiGpjWtu9b3TQRFVF7XvWZeoj24q",
  "key22": "4uaua4WQpUPrUwB7SeB4iRz15SQMo6iUqnz5cXFHDvPC5WVdVWb6Fpi5LVYrCnrnPzY4ph8kPDMhYKhcyt3pKdzg",
  "key23": "65BPamyCgSP7inbT1N5ykLvNYeLoyuEZyr3CTkAgtfcPCiSQK4rBSU1UJyKZzSqa27SsYYQDyBBErar9G9ToyEem",
  "key24": "21i2BGuNr14nGSnpp8N1328tqe5rCymYZvYYnmWRJAMzi6WDbQHwKyoHG8EiSyJirtVjMJ1Pon5xgWAPcmRKpWXe",
  "key25": "2KZbhegd17Vww4A6yGnyyhUf2gchDCLueNcdrXNgovZpnAwM9EiVZzyYUYYBNVZPrGKhFtZTG3dffnzRCxvJ8Av7",
  "key26": "PtoeXr3PMthmxWfBGYvLev7kMHyEqigBLCHqtXAwiMSAoS5aDKwz9xsufUpEQ6PCuMYsYUJHVtskncTHPgRDb4K",
  "key27": "2UJ3dDgWepywR1tJXj24SbAjkyEjoQbgrpj318d49z1PYcsdX5W5GMNx8W9EifiuxSVXgYnxBTWqnGXrQbM8ieP1",
  "key28": "2KxS5d65EP5yQH5Y46kHFB8wxLHHBXXwpHkpxcZnPCgy7gC4ba74WB4k4Hsb7smMaYAq5jCDDig3zEBe3MzjS97P",
  "key29": "3rp7hEJs2648z9JBAt3ZESwQ6MTCoZYhppCKWj65FJqg7R5RdGp2EEixEPMrfMymJ9UcqZwXVsKS8YJVTRxuzZGq",
  "key30": "5XNHAwhuij8heVenTmt5MLxPeVTUh4BkjaPaJYDY4Lnb2gyK8qjV9zFzG3eW8Et4JQczsAUujyuNTYp84wRXTR9y"
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
