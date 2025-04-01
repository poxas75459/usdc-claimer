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
    "3iPYtowfV5nKMo4YXawvMqWKw3ViFS1GSHJYsDGeQBhFmBAstJpMdNizjDjotqipsuy5sE6FueQ576eEt4iGsKFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "287gdYqKM6sGFD2rJHt3Wf6eEtCcNgrkYC6sUbdbL6WMwM3TguttdkWfknT6ZWAhZhdb3zyhTTxs3mcbpgntxrgn",
  "key1": "hUUdQPxL53rhuKKHSWLBvg1moywRjwY4rZ5MDzja4Z4FW4UGMjjZCLaTZae15Aaf6yR1ne9tZq2vh8vaz6SBvPE",
  "key2": "47udJshFpeWVh8zpgk1EMNAm2MRbgAzuboU2uR9Tzc2NTKE47PCZJY3yqNMH3NJQfKZ9ZxhrMxam6gscm8QsVaRE",
  "key3": "kqmiPCUPMkK1LRWPyV1v6gVfYQaQJHHLVydHMpry816i9GBHboA5gpGvYSvJ8Wxp4zo2FyPVHCcdmsdQrnyekgn",
  "key4": "3WyrCRsVaovkSyLS5RCByn1tuXvEzq4eKASLac6RH3nk4BBE5riPzWnpShKra2kd9xG6Lrj5uVNdsRV345YabUEd",
  "key5": "rkpnnoxtiLqbSScjfjM6cw523qzmvsGF3ehDxgUJAmUe3BwpufiWjjCphY4mg5dfbE9S2BKJADiYvyp82Ldm8Dz",
  "key6": "jnWQVULhMoptaGzhuTcm1GUv1nAUs2xNz7bJpLP1Zen1EMNh9AfWrJen1LBf2TyW5gmvXWULFq1wXo5ZoAGAJJN",
  "key7": "39ondm9cQ5ta4pexQREikoKjRvHkEZrKL32QtgDdY5B1iLjmGhqHemTF4RAxmwJTn66RjR7AJ2o93tBLaasnkRNY",
  "key8": "2aKkFwbYVXboNW3MvwdqtTi7aTvxyurcjUisXoCvQWYhBM32etBs3y7cvoepRHmiA7aBvkeKqhPKPkrsheY79t7m",
  "key9": "4RRQFsxr21VBn4pzZDbS9tTqGZGfJ5ecaW2UbtCcSMxSqu9x5g5vWPnKzJu1vCVFjoppTzqX6Xmc4GzZtQg4ks72",
  "key10": "5AGrLfa18xZYtYL9LJtN6ZWCKMcaNF7wQR1n18DXCWtfPet8UrKDPG2Ymo6teuCFeTNnzyrAoM51tjjsbn9fZohY",
  "key11": "yd1HtF6hckcuPQXXCvmsaEESwcNsTqwnFuUV4hX6zkUu3NZK4hz7XGqzxweAtXDz2HAteQJN2DQTPVhF4X3D7BY",
  "key12": "2k7XTD8TDFVHfJXZzZ1rbGi1kA3EuU9mJx5go4sCprvNvF7ED5dQrt5WWDJuf4rbUDowVeuJHeq9DyzEYRfjjerZ",
  "key13": "5QcJVhJwoSdsxKrmd5erLrK1AA8K7JQs1hVAu3q5T7KKZXC3GXKrUM2JonU8T3f7i2cPr8BsJCXqdTJsyicDScMi",
  "key14": "4xMvgGFNJhQXLUdh6G8q2617eA76U61kW5dWHcDrJkUoZjeRSkhzQuzVNprQDFFKGzvfw7YmcXrumWjyGiAkUDFi",
  "key15": "hcFSwRUKhpdr6fUKpCv7DzGGLrGJ2ZmLEQWuGBLrts8bobDscSu1FsmpwYJU5sSKLecLSouTcqt6mRyEgbAQmJD",
  "key16": "5sGzQdJvG8V6bbgtoWtN6jvmjJHYzApy9V6VZUXqZJGYFpBRCCfphV7rDqqn4BEu9bxgvzDhseGboUXsTeuWjZY2",
  "key17": "4Z9jyeJQFikYHPzPPQXDn12Ud4Pbm928P8gVXqWfoHb6p1CGXCXaVCNNGAi3eew36EwAKsKB4bTJVbyAR4Xot9zQ",
  "key18": "323cimNupEuFE9axRrwVpEAZz8TLyUuXiiu59UjGGkhnMdSNeTNW1uL2akfpU3jXmmm2Q3tnJMRR4xtq63FEFEH1",
  "key19": "4QGhGCukTSFwwisTEWVyk2VodWx4bUqEULEJykCWnLr8zDdRZ1topAQ58c9hAtf7NyXQFCXcYgnJADb5kFFHWruV",
  "key20": "dU8TkbXdDbtp3zsKUqK16g46bLh8AVPgSPG4KxUzXQyVuyUSqaGtiuX1UAsxm14UqBQS7WSpCDptMYTVKfNTF5E",
  "key21": "5KNBvRttV9rKBXFHhDJuGBVikAZ5M2YRPQE315AfwZLjYGuCoJ7WsYPEvX1zFU9s3iM9PEKNtjT8KgnTyWiv1m74",
  "key22": "5sihfTjvcJH5s5ueVm8ektdvBjNoWDiLMGEsoMRBgBiv8jrfdxLCfbdXxuB2LGggR77S2wkdyYHH2Fih6RU8nVC4",
  "key23": "5LNhL1RNykiZCK4A9Xu2Ke38cDA5EYL3uPYAUWBU1tiqgSWqTMnS5NyBnJRMVEgoqg3GQXm1Q5Qtswz9MNsDekXa",
  "key24": "4VNYRnb2Ddgv4VGisN4EbD3oDaV7SrwM7h4mLaVsu7tYwZCAuJrPQ7E1yMHV28F4iVeut4PHY7TiUXdu4dj4gu8H"
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
