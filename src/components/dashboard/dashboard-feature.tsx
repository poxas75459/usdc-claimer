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
    "3Ex9Vhotxfv6dG3X2uEZP3LaogefddwAx1WGjkELJGpTJjNHTySRcnKDtBE7Wmydc8G6ws3YwUBJUibYo687DA6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YpbFJmT7WCnFszWT4GdQ5JvX577tN6PX52fswCoZbfKzJUEyC7bbgGXrYLVoGxBCExTWFm9wFwPwnZiMgU3Q3t4",
  "key1": "4vtQbx3xrgYKoFn6xQ6CRwQ9zb1szaSokTCd6geiUCf2ai2dzWExDY3Khf713W6SUfLKvHrjhSZDKHLB8UZuExbK",
  "key2": "3S1r1CyNpLYurAjsDr7pAMeyT2yrzs8ReLcm1buUh9KwttARfGj44Uq8msmDXyztRk11BTk8tXQwo58BDZEo9t3q",
  "key3": "5jwkqkQmy45KYTTBoSAtib86tVPXdtbTKcEmNCJUbN39ioSUcjvRXuF3ntwT8X9dM6WNJSiDcyrWhug3cyZFUX6W",
  "key4": "1ykuKPFap8Jo7PWR2nhnL8iWS1G9w7bdn1DroyaE39TJPk3ibFwhPG2VPN9QyhPVnxugnMTPRicRNNQUZWtvnNv",
  "key5": "37wPTpQAAFpDRhenWRUGufaacMKpUTGLKZ7ZRmVC2kgqanQF4BPSfz1jFNCv9DwoBtDGXhE32JD8yt3U5nmD5nDJ",
  "key6": "2n6v8uEmMZcX12KgQH753gekprYWc2RZ3DE4UixDHamKm984bTaD1s8rNTCBJf5NJR2CMopDKV9r3mXTVt2jC2Mm",
  "key7": "MeokZcn1VKs9RjYuMVaAJyS5VFJZU7N87NBaxMwvU9vkpjMauysU2Hev8MxFkjvvwqSwGax24ayUTDq21cM7Zyk",
  "key8": "5E8ktUtpAvEfsS7rSgF2ZuuQZsUPkEvtgzzYXnAQg4SATcNzaTyYy4F2yvCetb1qqEWVP5GyVGevwQEc3wphN3dc",
  "key9": "4U3CXWNLsGAbMBUdEnYM2iKrugPtLghHdKDe5HY6gD3VSzNgeFyf7ooNRTbPnmmp5XZpVCJxn3F5WAYcteo5D37t",
  "key10": "2doq58qzbJ1BkcMxxxwz9ovPeYHrjDf7aDbpdFFGrpFt7gjhkBXhbVhyukgJvGa9gNGYrKzEUrKwTjRzDwefPhhg",
  "key11": "5XnzFb2DeiGhHjTsayqUWmVsbdo3X6jaezLbjKdxbhUXe76syYXWL8QRYVSrcUoAh9x2Nq9h2GJadbTgBeDRvYTf",
  "key12": "56eHt4kjkJSrLmu8iS82ysyaJb4oSVEYNF96g1FpdkkaAhoRpbrQdz44Zhm3o7xFtqnuPrtJ38EnX7QfE7kBKJ5h",
  "key13": "3m3Y5rg4GUZydChqGrS5o4HPXcsVPeTv79Ak9UeMkpd95xMeacogndhzNm5YBmuJdVbfNoqcRBoeY6bT5Q5vG5bX",
  "key14": "3aT3VNHh6CWjmdiysNXyr59ZAB4mfTrVjFkP9zkqCcxSh1dwEUqeacn2gScLffo3tfNrAqXpwcqzRrykrGvkxW7D",
  "key15": "29dmteDkhRKuVLNFuSUkCAhX2MMk6yuJNL3v6gJZzVaGJCAYHFdGLbySTSv6CTSq6kmm1iijAquvNVB5P8TnJ8Ta",
  "key16": "5RcLupmpPMvxg8d4XFrnswsSQYwhCj7Q9aKWTKUL5VngUB14dBziMfgs688WkaLZJKVuu8ThxxLkzDdoy9PaCAyN",
  "key17": "q5rCqcmhdCrHRHfLkA8ey5fxQrmJe1Tb7VgTWnqfH6HFnybSyzJMUUcn4ZCTS9V31c2ZBWbWuT1SauVso8CQQYQ",
  "key18": "QJr7CHYHbBwcLkQQwEaA7KdFTFXkZPnsYoDkFYwdxds6RbZxUDaT1SEpdQUVQiNpbvkhJb5V5YHVgjUwVxfLvbJ",
  "key19": "4PSTkeXVjZ9MrihTBhM1wR2YEewXBC3J9aweHjf3CkfPFeeJgVoa5ZtdUowxWALi5vTJBr6cJB5YxeuZSbqU6HcN",
  "key20": "59DS58NTXm3mARJjJpZSuHp8Y9bh7KJuRvCJni1AbH4AJPh9fMYU2c4QTpVxXNdcWw5zeNHxb1XtL1PmXz5ZCT1",
  "key21": "2dN9VGkH8oes75Uovz2AWF4qDuPC7tdZqYGHFDDXW3EndFZ1Zd6ywyvpYR9iQ1koHZtKF3eQEp2hCLPM9QtHnwxJ",
  "key22": "2Q4RWtRKu6VQuyZ9V8L8hbXYV3ygVricEhDeqh2c1hdejjha1N3PdXXsQKVAzVQT5EJpm3YXq1BrpShaxsJjHMt5",
  "key23": "4uumPZJx8NZVUH841NBj5mgZ61i61McEErgN7izJ3pnYv4EYfzCqYErCm2dx3sr4paxjt1CMMMJGRvMhBXNo6z75",
  "key24": "4SmyPNXVCh5nwWEscymMicTKNeC6y4Wy7fg8BNB46N3MLN572XTYpn12rKavWfJ2FNxU3gFJB3fLkaYNMLQjPqkN",
  "key25": "HVUfCVMAyFd819BtArCQ3WrAJNxuPC6GemxtuHsBhQAw6cB5XaHCUXm4Dcr3pmXBmFE5i87kuczcrKGXpzw6uZs",
  "key26": "7HwVxNSTCJwsuopsxo9BJxAfFbDGXkLhgv4KpLGsd1uH7673ocCf6jh4W7bn5PE7ogejKjDB5JLggUonJZ3dMep",
  "key27": "5U4dvd6SC7RL9mjGSYfeFjawNhuyDMKyWwLyxfnFR9ptBg3JdUzaPyUcvSAp16EybuW2FGVXMBEydMFyaGfZyaP3",
  "key28": "4jwLmQ4QQmqHBjnW97hCJpiM31PeTUFNcETty44CaDEouRoKyPbWi3iqRRc4CHYJwLPZATJfpJXnHNNwgqWQdTUK"
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
