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
    "57NwaDbvno4wHitncyU3ZxivtMkFV8erMCVBiZ6tCY9a9HmveWymVtxCJra26rxXeUVyQ4bLMdZxWdWGCa4U1w5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4akMKEGMkZ9BQfepsuEbBymbNKQKnaUT28Jwn1kb47KVwXeg3T15QgyAKA5q1mcfz8FpAMXdx6u9LtoDydFNXNXJ",
  "key1": "5YX39NiZHZrpBWpAPtTAGFPQeEZCcEA2eMfqxfmeLd2XPuDVkoy9fy3K8MgMpumj66YVSQkQg8RGKk2CMoEgECwa",
  "key2": "5Y5UeaqAZfoX4gJAEhZ7n68hQ39bkbdCVQRi9msZjJgnaqpidBKVKkDRPJCbw1gbvSzEKcVRuc6WHdvFxnjASPi3",
  "key3": "2sppyBd9hDamrqiYTvBBHmfcL74brkX9bPeaczvcpuwfvm7EMYPqbTTwq7AEwz5ysBbap5RHFyrF35rwpvrHGSex",
  "key4": "4bpmo3MwesYgdFMLddbn1pLtvRmJPD5Q1zx6EyqXbUehgu3FvfHoqNbHFWm2C5XbedWq6uh2mPvJmjSAog5mAZLv",
  "key5": "5dB5eer5VMuDHdhX6bZyfZ24zEL4DTZDhRcuTCWbiHZ7svCvGLHHubRE4GbzmtcVKdhmgovq9v5mwyErS3kYHCVr",
  "key6": "3ZZ8JV5HSDfQLbsrtTy1QczMAmh6KUFNUA3dFnRi5iwMadS1emzmwY4VzJCAnozL64AbaHNF2DzW1jDWJYaTA89F",
  "key7": "4ccopjnRZobLn1askB9JYHeYMghKKKQB44tmyAUmHiquk47SyhnBbWb1woPcPPWfZhsFgQKRP5EARE46cvLe2Aej",
  "key8": "3vipxQ43yKR3a3eXQ6PnVeZL6pgVijLJEvXr3JuWwzao8K8p4CBKgkT6RNSqgAjkvrgxBmnr6XeP3x4e95j2XybR",
  "key9": "2JEi2afhLYq6JtXRyXBY1ot7dx2Ra7QkHfUJ2rBWQsywm5TAYLmrSSqDYBvwTKWXGd5gW5oQUmg3zzv1dGoVk72p",
  "key10": "4ojinjsWsgT7t7Bmi5Vtv6SYocfu2zN51gauKAwrFXJUADXkhFsGb24TKoYxY3M4sNa4yfJCFFV1mFtoGQRgfJUk",
  "key11": "34HZYH5L3dLBiYPo12JzN4W2Fu9JvN2LQFykJMZ9tnCrGsByqeWNFi1dSux7Kg6o64EARL6b6Hek5BPcQDYdJdTv",
  "key12": "4zUx41Lsnt3mNf4yXKZuVtDsyUY6QijpcPuTEhRAi34eEtDdNU5V3xWhKsppdXJgd6dtvAFfBMibajSffA1tDvAk",
  "key13": "66Ld4waUJAAdrtjGhzepGtFK6XJTNF6KR8YVxkcJrba35nP1pZKnQZ9KgqANvkBkTfpfqXetBiv6cHwKoDsuKNbn",
  "key14": "4duNBZyQPe5sBU4SuKzd3g8wsi5Q3WQUVZNqZfc5jkbuCgfMbkbeQac5M89Xt7xCZzYU1dKKvgg31QpWP9umk7kv",
  "key15": "4A9w3sb8sGZhuHEXTMrg4KkJYsjBc1EkMGdt7hUa1dEqAWyGUh3b32HTvpD7nM2k45uvAHfZLC6JA7iotw9E3wvj",
  "key16": "5L2mK4wojH5r31BUKTMGkQ8HoXTb6REgP7GCVv4XJWNgCUUHzxPDw8p5VDBBiwxvEst8wWLiCUnBrqpXpzz7YYvL",
  "key17": "3rFvtgNF1YAxATsM7uw8ViJNVxtBuvs3LxdFAnVzMLmenNruAbFmAo1FZuW9QBXFG1YJxDcK8xrL48GBgxN1WMVg",
  "key18": "zL1qGYjYJ1L3m56epxAxv4YDGAFMaG7gRMncB1JYwkCYVQ3vG4F4ep4JXv8TrnFHJa1xNcLezxhdxyCcsQMhGz1",
  "key19": "2BDrSENorzQUQkesYUzMozMJiw13MAEXMGueXKKTWbkeRCFbebmiLiFRZQTn4vuei2vYdm6PuSoiF3QgsnrDUiN",
  "key20": "4k294QB1XmM7cQKQLAvth9KXFtT8VE5r7PHZQyRvczq6xAio4EPrw1wWns6dWFwzq7CyG6hsZRYLKzpxYRwKSrC",
  "key21": "5Q7QLJoAwFp8Mv8n634PUDYHN766cF3PM89ZsyhkKnbvCGLwjyGSDoPbnMgTYuEhkWNvBY7cWYvsmD7fZWMjWoAb",
  "key22": "GpbpWKsMYDH1nwH3eho4RPibqnjLW9EZFp4fsZ6RKPznoNeSQK651XRmPwzJvCbbud2wmvnyHwAzEFX19kg3zNQ",
  "key23": "3kWVK5JNCMhcWkvzLb3urH8a8BV9XaAnTZijsciFJUsBwx7bpjw4aJrk8jAcPUth8fnVr4aSKyEFA9Gy5DpxoHVv",
  "key24": "3gFkKCTbgN2inSCSPmQrZ5CCc8c6jF9EZGy2HuGESpbHpExmncSQMabg17nPAwJW2PYQLGHCisrFpw1bjemQ2c2Q",
  "key25": "3fX4uWa41JKuuBwTyj43QibmrwhJX3VG2Km7VFnr92x78Wt7kjqeTfLpZZ51aiW4U8DPYqCNJWECBrhgaJcCkQs9",
  "key26": "cPHmsUAPfdAtNcwG4y9UiDzJsirhTwnL2hs1bQizoBTJiqkWtmiPybGPxguXUNBi4rNqti6wJFEyXsEgofkNtFE",
  "key27": "4VcDAdG7a1gMZQttoD2LN9HGTzjAqV9o6vN6nDjXMGnbSa5jtkgzmnu7umBM3KghM7PyhzmpxscNsUogNocv49GE",
  "key28": "4afkiYdrbLZSxG3sCnpYUKcX3xFUhsq1BM8MuECUXFjgW5JRVEs5SmsvVDLfQCmSLg9oi7rdXM5CXH2Lr14imVbD",
  "key29": "Spfe3iKGeDS5Q1Y7SGEMrB1We6QZHk9cpGXKAfN1YxhvcCTyiPDnhiLcVLJ3LTYggYVzLBRoSkkqLtjwKc92Lay"
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
