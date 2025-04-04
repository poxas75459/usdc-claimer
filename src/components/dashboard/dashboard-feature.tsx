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
    "4BxXXSmEHk2rXn6xjbmVMkZdF6hn8Qt4BxUXGHC12wHGp9PErvNozytwU65uLJMaYk4WQgcVQyuLRcDKmPfbALBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PfXm37gkQcDndb9HyMYiHRDqjZ1RGJYdKB5cepq3NinXnnuz5Y6HZsF5TDsfrjPCJP3i9brj4z5BTnJaP58yWLJ",
  "key1": "3v2RbHQzSfNNXUyV5UjL5tajaCW3Gvh7BXaiLjTmrZbgAdKbmgm7jTSVB5ZHNkoBAhDEn49WAECPSYpeWuHEeqpV",
  "key2": "3Kt5MjjspgH4w85UcqLKuiktvMpbrqAPV12cCFid6tCscrQfUM5x3axtFshov9zorUsvQcNFwMhjeCCFhDpBVVxn",
  "key3": "5EhLjnnCSaYTGwyeohEgSZXLLYVZcTcxJZaaCbNqpLaH1utPUzNE3iV7Q2M6th6Skozq37NEzn6KaXu4Ruz9mNB",
  "key4": "t1fK2G3dNGwZuxZ7Unz2n1LgnsR7BqkqjgrjMyzTkVAGom56RL1Ab5rkQEMRHprJPazqYVKGNEB23oKvSzphxkP",
  "key5": "44fe1EatYj7nhTK7PLK6nXZ8BSme6EzLyZbwLSAehCQerWbNtK7U1fo2cAJEcPceLGtq4q2LBdhuMnfq8vB74LXk",
  "key6": "28uy9iRQqhKgjrbLKoX3Kymrm6udfYj4BAN1w6yoZWiX8FhmKzYBXQz4Bfz4A9GxHzxxS7Atf3ex2NE2dT6T8qXo",
  "key7": "j8FGBMkhvJjeKxdk2HTYRqUoarLacXDciPyyUytfsyMrs9iGfwZvjy8H5SVrCNbFoQAQwEAw95NgUG4pX4WkjCN",
  "key8": "3K6WkHsJNQSYUyYas5W4jY2EetkzoKKvyfyT6T2V8kGi8afu94cv4DgjcbA719VXZuWxNM369xEfKuoG4TTqntCp",
  "key9": "2cLd9dihqoqbmar9A2xndxoa8GaGm35GHy9n7iKwAk2EkcuqtyZcLSTcuLuN3qBu6P5mTKroezHgWtv7kW7kPQtt",
  "key10": "21EoervfHnwvVvPh3Ji1X7YkYMG48PRqEeEw2QgnZmqME693KY57qerJZ8NUFbgCT4nP6S71YDWv7fYahWBLD4ts",
  "key11": "21WYNmYhu31XV5Bi1WUM8vUgcsy7GKu8E3KucJQByfuuLCLNAhPLaA1XuEpSXQyHnidYb3Vh7C66r9vEAfCSECFb",
  "key12": "2ZPr4grUxLYWqu7TCqtzxX9oERHUj16dQqXfdtyYSAnWG4NE1nBhKdzfRp6JhSTKprSfV869JNWfsoexQHx1h4Rp",
  "key13": "3tykvb1fYEYpB7FhzQr3WMvvgMrmnYQv3wnZWRc9BEvL7yMTV5JCz5HqS65RSaJdh9e7M9MTTgx4j9HwurQzsRx8",
  "key14": "18TghJ38ikERSDQGoR9pd6exiBvbhTUgVjEuq1wwJPuvNNivJWKuu1AhSjSqTjvfcVePKRzavUsY962w8Uuhum3",
  "key15": "opDyzwHBrjNxz7Vd4SxXX2SPooW9NY5mLCW8xDJvorhNNUE76JHKyBpsSgBqzT8J1sf6aG9PBVrD5wShX3Hq6iF",
  "key16": "2XaKzbsb8W5ns2rqDtBpkcqPesaTFwf6oKBSSfdiVGMRSVFUdNxrsHGwJ33EdRDsQj1Qr2Y2ceEhafg51aLHUZqX",
  "key17": "24iKpKynAnoFu5ekqfkY16V4vXnFdqYKoyaSJiRmRfMJZ94P2dyR266qek88JynZ7rmHtnQEsPrQgCu8Awj2fTzU",
  "key18": "3nV42YM8cWn7DbTy28DPHUxUYUURB4i5F4594fgB1WVQjo2Y11rS75Yj1SRKjsCH1ypDM3wKw7L4onnVLv4Sxmru",
  "key19": "5dVJEnYAoeY45zExvJDDDxC3JD81XD1aHyZQBLWwgK1VcaV2n2rurcj9yDuFYq37a3fE4rV4GPAHqC7nbRN2PBYz",
  "key20": "2bVgBT82vGfHJRBHQ4uN8qf5gU1DDPsXvkxXiCesKYipU49wh9iF8o5CThoYvzzHPqHP47azv8HXWTuzFBadiYAY",
  "key21": "61VhP6vXefztBsTn1YMEcjsBCQtm84nzUnUvb7oXckk5GQjqbsnv9bkjzs4WwSpUm5GZPxyeNbhaffbstJrbXx6n",
  "key22": "5Ej58Wu49rqz4TMFwZfzskprDbF9KbrvLfQgmScvzJupQQdobivNFrNQuMJdtf3HnCRTe4VK4VhznfQYar7rfgJi",
  "key23": "sq5F7dqWeCDqRLkiK4EStvCh1ft6HueKNHp5bPPV3ajbREjisuQfjHBDmAPpVde1auu8Lqmt7EPCxPKMVtd7qD1",
  "key24": "25sugJN3vGXmQnkV6PuV9uTqJ6quGsbjBJytmUaW4xsjvdUzH8q48ukdvGTWb8ozs3hN6StAJHk3PFi7yC7yAxWz"
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
