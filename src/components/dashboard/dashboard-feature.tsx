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
    "xS6LJtDP8RBvsaWojh6A7YbAkUMiTywNAEKUmnKLEsjRF55Je2dRvMmDo4G49k8J7ee2wp2cmnSML8HPj4o2AfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9AMuGUMRzsfpt2XKzVK2mDU2MzYpmWfLfFxoszmf1fXJC595BXYpvGff9pjdXfgjHwWBJxmgGg3ApS1cNfP6k8b",
  "key1": "386nAvnjufN1CB5NeEryWDnUPvT8nLoWJBXnKnQN2imeZFYAyiL3TudEGcHx3vvKZXuMPGbu9Ct7jiEkWrmHydsS",
  "key2": "35oSuQ9v3p7uUnBAVLoJtcJ33vEkCpegBCHLsHPg122q9aeREXUgnEuDFLmhhboSieH6EmjFW4zPHhPsjShNcbRT",
  "key3": "2bTgZNhrbW9RcmP1QYGkracAru9EBUEeSokqSfY3CD3zj1vRqkH9dTeAfCMNMwCRi8GnVu6DxHFGqanatbqE8LWL",
  "key4": "5hZwLN5XxfxumDx3PUw65iQFwXdWipj1gczUBGBnHc24p2dekdQpHZF3D6NL52M4QhEgzqNE5HiQSpgZJUGSQxxh",
  "key5": "2cDFwspZBV74MRz8VGSFEhJ4XU2kp3sw6EhL81YBmbngQkC5x6uFDA4ApD9Ga1JWL61kX9bGTCmYyK75pLzQSzCk",
  "key6": "PEfXRTFvHyCRsnUyX9n3NBj2TCppr6uoVKZavBroCAEEZVNayxiqqk6ng7ekczBUsBy5gy2WBNdi1MqSKVz5NFn",
  "key7": "2Kd26BrhwLtpzmhjsdF7R3qbjsx6PARyMu9LFhUg5yTEYAt2QgHNhxA6nnm6HzVvnrcYpkMMdr6zpGsaqD9HTPXs",
  "key8": "SRmihYyAGtMh4LD2P3irdyUni7QL5kFJtcyCn6Pzy6g6aKfj7dHmc94b6Jx8yrnoSKh3yfLn9L49zik5J77Zo8M",
  "key9": "24spzYtbskE1CvMyS67UxJYTWTTDBYhpEvEXQxReVaSiCJSAJbxApghvCm7GnpcW1AvFM7sQhfFXQXQAfwLU6TT2",
  "key10": "CBdPE8G4fWbCQA9Wo8AibmMirCJKyuB5fMJW5vFVnFAJZ5oGPnFNkrtTPMjTg3g2iTRjj8T5NjXi8qfsi4n9nVc",
  "key11": "3VAPRjcDLq39jAxeeUrKuzGok94stw3112qixqNMyM9D96Gee21fKtbcRx7eu9d3H34v34gw3jBsEx3T2HUkp3Mw",
  "key12": "3XqWoFkjxZhBC83erBaFPSLKZMbMgGruwuZtZ6iqeoVa5DEUoM9Ni2JkgmpgGHX2DusYzG3s2ucgVwx3bU8LtfjG",
  "key13": "4VzK2gpn74goRedJvvQkKgUTyh7RbxAJjTDHEyPUg94AV9xwBjPw6ZA5gWbCP71hYKCUwMHZMbxTifQuJeJBMjFb",
  "key14": "5zryAjfzYbs6G5s32CBnhSE479UDCbg8EnBBV4Z71QCCHSj1kRgin8Z47buqy2nyRBgoYuzZMXKGXPu2BE5MK2PZ",
  "key15": "acUh1zbSvKXzHsUbM6TRr3UaKHUy2T1XwSACywcBGASerCsUc8qVkzMAocy96FkBz57fgp9mVJznQTFk4aDS4bh",
  "key16": "4e3HbUaU6vMCKf24MZyYPsJcSSkXA3grwbYmBwtAC7k8GS9Sdt3kXosf4sTAbeqzV4wJ9CnUmYgN5RTJkHmburML",
  "key17": "4qKHTi8FWmQ6H4x6wQLKydyVjSaBdKi61FGKTQMyjCfdNZPHc1rVBxtb2kA9TerK9j3N3iSJkb7aduKY4tHVMLXj",
  "key18": "3F6kfyiqG4gRjhfXmXCZ7iZRFYmpaPb4CLwShbGZPbq2pwXLqnWn3jeNCgQtyZeHAoxpT9ZzL5iNovcmwmuRifb3",
  "key19": "2Y9Ap13ugdGodoBbR6RoSLdSNiWNSdgE9PsmHRZyu9QcdnnKpELjQzh4E34Zux9mcDGphX8gUVQjSfaoMp5P8382",
  "key20": "3apHqYyeWhs7PRhCzQmmEbxdkgB27PmPpQN2G7RCpjKD38x7FoLhcoiaFqJk6TMmgRvpKqhmLCWzTk1CE4NyXFD",
  "key21": "2f3Vh771eahQXobUUoNioo2vvKWHWnHWihUeyQBzoXZGLjKZGiQvHKujQmmkvgGYMiVAQddvXQxPwW7R875jdQvv",
  "key22": "3sguk1KzMKx9nivxWy8yP9EZmCrbULmZ3TZL2NKoABoNHaUZ8L6icEJTyK2isJ71pKmFpZZxrKknzpJJxpnbzv37",
  "key23": "3SWuCaHHLxpAhXC1CmE5ochVZKpZvmyG8MS3nr4cXmxnQ8wEcVDTV2Pko4hvpYC8BAigBQkauYPQfE8YDcYPNt7t",
  "key24": "P51nJUNysQAh1J46YTAcoWx8bqbgHGYjGfdbjzU8NYDCJziiNQePoZ8h3nHPuCTRQgeoqdfoQ2KeqriXhQWheKf",
  "key25": "gSu9apQC7dmunJyzwUsgqDpxWXCSxxGsMbBjgo54roYk4DNN6MneUXw6bk9RMfNedaZXMYurhj3vQfv4zpRWF1t",
  "key26": "3obWYT7h8iq8JxZBTdi3Evpc4uUsQxq4xuMEs5n3Va5ESoULf9sanxUJHRXQra7UDF3cvJTtvb3G5LzDfuSEcRao",
  "key27": "nhTeZJhv7Pn6imTkwXKJAtDEsQj63ua7kHmK7u8b1Z4S1svGANGQy2BixPvaVjowYVQEW4hCF6ahde8TW4hCeSL",
  "key28": "5F9cyxRJ4kzyeFYJzJ4ohn4wo4gpo2yxXjQL13itAvGKVHyJ51JpgQ3kKHM1ejS9J8UCrKgdtXt3hTeG5LEbpqjM",
  "key29": "5WQacePRwjWLmUMHYu5vN1RUMC5zPH65ip7DFqpZ6fyNGvBVKKbtwqposdj34tY8fyqZkkB1DLrFUGhQFWaTfoY4",
  "key30": "3YuDwrps42usTUafzJR8VYcpmeHvyhhyrgqTVd7Lj8RYUP3vxyKALzbhwqj8EAuV7KgWWhKuGELELx7KJGSMeyL8"
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
