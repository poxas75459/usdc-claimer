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
    "4RtjLJoYYJhNDBkWW3afC1JBugVeuPHGhJCMbnSCJ7yV7uqqBiaP1DajBnL9fovBQQuBpPEbWTGLaa7qNXBtihtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LdXj6gYBoAQmXeTmKwEC4CuS6hcQ1UMtU23qo8xUq5kk9ue5eY57nJmjNgrHBF96i191oQccQxWr475HZs9Wz9u",
  "key1": "4drSEag3Jj1PT2VjmCZHyE3yc8M1vosETwE1MzFzM4mHmkPk7UPWoj8ABv4wGq9mDNJu4pbUDzVtk27SZWSYQaLg",
  "key2": "ZpF2pXb1Sjp72ktrrf5oyGa7tHth6Vdt7fijHH3XyWyDEXZR5ddJJwK2JZV6ptG3NVcp8tXNrm5edw3iFJZ7B9q",
  "key3": "qjPH1DhBPwavyWdBdEyG5HNL9LVctUYFY9CHwktGzc8MASoDygrtNZPi2W1MRsk8Zkj6G2Q3816Rh9RjX3PrHLh",
  "key4": "4Mq7cL3Smye3hzmn1GMkpoKP71PEtJDBD2vuZbgiGZ79KZEgBpwuzhQio7Qtt4PrmqWmwS5YwydtSxjDPd1meWH",
  "key5": "2fRfYQAAfMzHyjyKh1XPxCjo1VevN6niQwL9jmDCdn7MopUXyRKahNj8uFVoVeXUxH3vH3GucXqM1budodMb34yH",
  "key6": "3RLUzRqVujZt5A88whacCdByWzEdVif1knzhvwkkLbjxTn6miP63PUo2P7QPUWdDT6V97ZCwjLeFKyyuHPH8dYWH",
  "key7": "4TNNBYJpnsL3zMRqjQQ8C6uGspbESH2kC46ASRJiSFmmVNqg4x5oKVUQ4TR43Jpf666PwwM2knK9YfmDyzMRLUyF",
  "key8": "Po4gwNndD5SVKfjG6wXa1HLcikAaeyirSuM1vM6JMbwoQBypP4uHtSDxpxCMjiMHxqcN6eyrDeaiuUftSBBH3cg",
  "key9": "2mH8H3X6XEkEVqKST8XDFcyC8pzWvRJR3tYpKkei5CamtMP3GiCLpZHgcJ4N34UmHHMj8TQ7P7qvL97JctvzeZJB",
  "key10": "4KE8zkrr833FpwQnrysmfA44CwskNz54mPrDrKXZ74RbhQVjeM9vorjDio6hoMPLDffdsygBhAvNzeoaZptwfVC3",
  "key11": "2wwgPBeowJoxU9YmrkbSoHatN7EfEvCqECaPFTBcQV8jQYB8GkyLk3D2L2AkfBg3FxVbTmQBbh5oGkQDQsKkkaNT",
  "key12": "5M1AxAbU3sADgZ9HhBPkZgHComWXaL3aXAFQzBpMoaeEkNQBmk8qNBc9tYKKHbYNejj2mBdd2ioShUVheVFUSdeb",
  "key13": "458B8ndhgRZqS8yLiavpkvgqpstcfQN6dAmjp5nLYiUxrFfvUypJEsersTafGZLY8YDvaozMqzBFc2s75ubAUtVW",
  "key14": "4dzm5aPAu1uvSS7b5EstDwLbWNUjiK5wWg22hSg2MYMXdpVLidKfG3j93Fo3Q3GApMFi5P6EoMUycQ5sjt2Day5m",
  "key15": "123JYFHVMGU7n8ThEk9MkHQVALXHZjn87bFZBUaEWzNFsEyhYBUVQjhidL6kyFPu2LNqW3HhNsPbW21bzVPNphff",
  "key16": "5Ls58dKhPN3mKEPibZR2XKEUuk9ixQBCfmxzkFzFatSbkkLiGTmvde4XiNrEnpq83mgHveAkFCoAbdWo4DTdoL9y",
  "key17": "48U3vxhzEFsfH4ZkRHr4PwsmXnQ7EQk1B8bdd5mbBU9SiVFn58qkLk81WLFJ617M4A4cjM6E8qN85TNiw19bwcGG",
  "key18": "3YQJdfdMMQssLBbMvzH25cZbtiRXhrmQJEcDH6gT9Bn682ViAKPzbJxKMVAcXFtwWGRMvmMdynNHTNf93hFQFs5M",
  "key19": "465TyePzhaCkqazVFX4GY5DcEt8yUKD7YTVbYJ2FuDcjVc8Y41AN7LPTCDUMFwJfuTjsom6ykCeJNQSFGpMMEGMr",
  "key20": "4PRTbDdjKU5ATexQFE4aJSMaaxWvP5QtJ4Q8nB31j6AUcuAPA7UEqepC1mmQLyKFEcNKDZHVnmqeTFUkWZgWXxAS",
  "key21": "5EYxTJex6ZRjAqsBGq9qbyRe21o8gpr5XHnUZ5qnbzTWHtu96kZF81dGzT3Bp1R8WqFmVLsgGfwC26cfnwNjMgS8",
  "key22": "4QDUMW3wK6AdzcpSuPbSZe5zuDrNZhqFdzK312B2aFr7qmXr2tBCPABHdh7UyCeC1X5scJceHXyrvYBjZqTLToow",
  "key23": "XDgxyCJjByxbKhCdFbvcpSKt41fXhGaZz6caYQtnxQa6aTeobVKXZ5uK2MiJwmN3mJVjUrSbcJnptRPX8rS63GQ",
  "key24": "ma8Uo2jMVCP8wLqyZgPyA9BekF7ApckLLGJYofuQwHxbvhM6YrwUc85WUsLqru9omvsvwk5HtQaccNBv4nqUYew",
  "key25": "5hmm1Gju1j3LQK4G8nwQpXZczvNjML4BVPkUXY5zvWvXtsQMneXpgkPBdQAnzyUdzLenSXNpMajRtH8kbQjSsDio",
  "key26": "GkXLtV7FCuEYeDYf2DGKw9cjuQaZxEACnXEeyHWFCaZ4RW584HpMKtejMdoQbKfQiJh6YTFHJqgfE9RZZxFbcm7",
  "key27": "5x6i6AExpHiatSa3qiiEG47T1J54rYUxhDrdDAwGpP4EUhcLiG7LKxxVXcaKyWnBDWgfNCSxnu8dXVgr76Dgu4ZK"
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
