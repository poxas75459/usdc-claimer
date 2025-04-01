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
    "2N2kVeDT6Kftm2DArfbR9WKMsjoWaFGGxgHrz7JvhuoHqUc49LpXV6inv8ZXCtjsmfp4E3fM1jqU4nMRY4hgiSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hvHjaAauZW6AJ1wmqMkUtRyourAxfcBDGepSRJiRMi6j59FrUk797n7Yqzprf3BpaPbwSngp6RbBSZHZT5guwJF",
  "key1": "27aPQC3F4hRLKZbn9YJ4JoTeQFBFp8XJqzJnhboofyNHzgufCMvMpwZKFMbVsh6VKuzmPMTZ4HPUS1uPekSfJN8q",
  "key2": "4YchQ6AjjPEmeDTzwCgsFmGCCQGio3pgtE7GX3Cp8MDcGhtRehAhtZqEbRgVirbD7hCEaWpQRYRFcNBiBwrXLLJj",
  "key3": "5BbRSkfh9zuUg67M5Dd19wFMo9Wbk3oiPo9e52e6VWPiGKxYQW3Yfae667LjPu9HQEMdUchw2dzajXpUPYDKzByF",
  "key4": "4DGsA6tCLVeYJMfPAam2TH8yr8Q1YtdMdg3AYx6PzaMjcjzMNpUx2QWJ6FzukJ9Mjfh8tubUH4xoY6c2euPjMDob",
  "key5": "5gLorbuZ6XJbTRu35ugiWsken5BKhd3NjCzJuaoshzciFELYQ4hKWexqHXBXT9twPzny12CiQfD1rLaMsv1AUwac",
  "key6": "KB34ahj69CQrMQQaUyhfE7qUuWqmf5wZYdrq7K3vfexVaCHiKnU16x4e7FMc9ro1JgBXghtaKsCX7aXfhNTx9Xr",
  "key7": "bShPTgDTbe67cBgehyLHSj8PtPwW6n7Sbmg9t3smDn69cLHQ3kYTSo11zgZggpCMYjxJw4jCSmucy85FuSqd7GT",
  "key8": "HPYyx23FkomqfGKztGsAyG1j8YwrChoTTvAbnAsDRL1M9DkEi2H6dCkRuob5kNda19BzxRwFCWRqg82xyHAPaGA",
  "key9": "5Q3akJmc7qDTWjuZdktGWM1jwhrTssN9YxuUbtnn18MX1GXywEW6zjnZhqR6bQdjxom44bTUAFWCNdaBJffAHYj2",
  "key10": "4DzgC4iW4NFWPHCLN3kE3Jd91wnkSRCNQvZr5Luob4mncTacEXzrbQVms9CgsJGckpiMAtGWc7XjVF8RN3WaJtr9",
  "key11": "2hWFuxUQPLT7TxWguiJRRFKe2vr3unW3qxkXv8xMTfwWe5HbXZ3wR2p25VX4Vt8ndH1rnJeakotBvCNSGxxX3GTa",
  "key12": "3KqUZVDJs1MQkikPBPwjDkG3KB88cADbDDer5MaA81tVFwM4U5vfKUZaAfycem7KJjEMbbNJneWnN8Mb7Ap588rk",
  "key13": "5GU2yCaVdpU1wAruQyHKfBSe82aGJXmUu2Qr591CfCRukasev8ozJu9WHgNLA92LFYAzEDPz8mAojy5YJ6vipqBM",
  "key14": "2oPvACAcJhx37eQHh9FpP9k19GPE2dVSBpocAPPRrkxusGnV49bFLWc1K6tma8jgiUBUK245ciZoSzggNCwo2eCQ",
  "key15": "3xXP5JLB3M4FoDWxX3UqXBkDqPt3gtiRhTC5avSp8N6aJ3kgbqadkdSRgi5N5mtAArtkyTdg5gi8PqSDauPkJ3ZQ",
  "key16": "272Ntp3M6UtQs9ti3A1VXnYdRb87BuG4Pc3VF8uYu33Jihu3H3WvbyPkKmFRUnLq4MmP7urGHoBqu5g7Duy1WPcC",
  "key17": "3M1MHDWLi5X3GuNgBCG848uyi7p337FZwAFcWCqB3RWmUqt5qFNynBQGpsMQXUUfqbP5Vhk8LyToeg1TXR5gPZTL",
  "key18": "KEtx5hhNCoUDnfJFqyNYheCbUofzsakGdXVk6V5hPfYE7dugMVCYPQhag6iXL1nEhY9Smv6ETBQpmz6s2jxV3XV",
  "key19": "3sLGWr9EACDkNTQn9wWdyHBedXMscKdgW95Eh4mtoXHVix8Bwv1iJFwZR9EkFKRKQAF4Aw9d2Ea3DpsaHEz1bTfd",
  "key20": "5uAJi7PdHU5BJjsSSVoE4UVYXtXQnHgaMbCS9o4MequSdvte3m6dTRzRTgK1sY3V1z8ic9HzwWaVjfuYwAWyEai4",
  "key21": "44hYQw8Ah748FdaVcYETNxAzcRZgU5hvsB4aG1vvHPiRQph7CAZZsoKn691Aw3JCUFXQJvcqFvbYLe9Rzku9QoCe",
  "key22": "5hyjHqMuPZz86WQh3nY8pYede19dqPA88TAp35qKMNC8mJcVcKHSyQY2uauxEVHjHAm1j4s5DPTN4ZrRvqp6wPUK",
  "key23": "4trhcNqWjJ74Z4Zsd7gYqkLBjKfLxx94u8xFLYeGvJ7Z6sEQNMsdWY68jwuKpRNxybzM44rdjfcsxfj7W7KEDyqc",
  "key24": "5fkRiQdezBwMtntFsG1mkDtruyEuWFLQmNZY8g48FjxYsimdXqY6thatV3ABCQ69FcWCQEtaeUk7Fm1gBtNWGSsR"
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
