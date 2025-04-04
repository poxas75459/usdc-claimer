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
    "5VzxqYP5yEqoMijmiW4RjqzQaf7LRShXKDQpqLPsiUHqrYkmtsdVns4u5gWNLU1qX3HaPmUUAJxnTi2GZDyWHZxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sm4wkgYfHLBE88vp4yWpjbUJm8JGgAiTbnrYbxB2SrJQW8JTGfnXCAGV3E84Uey8FJgZh5KyWsB6RZhnshcecxF",
  "key1": "3WWJW2h82s3FkceUr7N1vcN9sMJt4zuHfBJ3Gmm5Dp8NgvPpE79cp86Y7Cri2oUXd9EnWMoYvYURPfPy1e8CCBUG",
  "key2": "2En5EoKWsmiV8tNAwoPSkToiydxtGv7cgPYBqpikSm8DcxaASLHUQFB5sCUNJeVgYFVoaUMQwXTxj3BudFdf26J1",
  "key3": "4myGCu6TNu3TauU8qFPu7XoBwU4sBCpwLEW5DNBra4iecv9jpbPcpJDMEuaKxkoaRuCf3ZyKRo3RfdwM7EiHst3E",
  "key4": "4EeQtUCkCNBV57AAQZPueg5fgF42WUGezZEUfsS3aVWawzaUFduTzpaZ29RPS17E51U8H69GixHfAphdWMWhA4vy",
  "key5": "3CX3SYXd2qmcKiwm8tdM3jfGmDqkxdA9wPoSA2djXWxu5peyibphSAJqDPAfrRfJDimsVbPaaJnxzi6Q5TptTyLQ",
  "key6": "2dYdC4oYeddGsimo3gb2vaBtoahcNmPBepxDENBdsM3S7rscpaqzWef83sF4Firf3jSHDzZ4CKpS3cCqzRhS8fmP",
  "key7": "BdTBSuJs5fzKt8dsxqChoj2UX8bH93hmVFiM8Yt6MNyXn1rMT5JjCbL5st9XPymRLLNhpFXZ1FeseC4vpVkjjbR",
  "key8": "49J6MnymoqCTLMaYvuVJar32uN6aGs4SAtGGqofyNj6sB1h4EWaanFDBqiSDsEQLDZXQtab3rcjRjtSc3vwfTwaY",
  "key9": "royVS4CnD18ng3SNDEE6iRtx4resDDSnZyTrHjfJRieRKiUKT7mBPBtmMrLtJYcFSW3DZ9FUM1hUtFQ8QgYAHEA",
  "key10": "5M5Uw3zJ51v7C1VTpeEaWtVFM3SdGmVXFpJgdz5jo57P4VG18HgdSjsoHpPPpjEUx66amh7rjZy1v12Y7fVcNAwZ",
  "key11": "2kiaaoAimMp63FH2V69aVJjH1J42qEyV25AZmTCskdEWAcFPFnkNxowvx89cFvGr8TTkQ7pn7zQJ6WbfirSm8tnb",
  "key12": "3FU7e9TnmCSDK6vmM27dKxrnywnLgCSEZVFhXhSMYwW7aFyan2R233t7i64rbgVo6oBkAvniGRbMFCwsijgP7dmD",
  "key13": "3U39gQagJaN4TZA9xXCSJfvvCnGF3GxmjDbrcA5D3811KH3Skox9rp4FHCBMYnmwTkKCQaAku1WQbjK3zutuBPAF",
  "key14": "46siwHjABS4cK4o7kqL12btznXAGUyhfYbi9ZLbDCnjWakgn1BwrqAy1ygEbgc1ocD7voA9ufbpSpQMaAvh52a5f",
  "key15": "4mBYrmb8DAc5S8HjDpMCkAaWuBmPLoycZVzEnkqLernT2eSGtc2xFzxJvkiDg68sgxKPmn6eovt7xMCrpV9BTSXa",
  "key16": "5tDtKfCvDppYZ94aFEEv3xpQL7sVLjevYK37dZoCs7EYu1cXzwaJCETJ19qK6HM2ZwfHNTSnJbkkkUERzFtrJnBG",
  "key17": "3YhZ9cR86VefWDeCVEZfB3VRZQJieGHV53wgpfSCNC44j3vofeaAqExh7PcCuDMX8Hz92cFZ1wMrrH8QRD6LyKfe",
  "key18": "428FTGCyhw7T7LVBffQ1UuYAtYf9imidDFmdyRjQjU55TUhitzNtcpFFjzrGcduFYdMbDC1F4Nsbm6tHaF6rzk6k",
  "key19": "4WuDSw17rjmwdBKj72zRR99KppXYLReJiR8ScmXV5Y54TzpbSz14ZfLoMXAy9v2rLHHykJ9qiGk7uWJS8W32mTaV",
  "key20": "xj4JsT35TU23yWZvBVk299WS9BXYj3gsUYuW8tzsfUfNHna8MY6PYn1X5Lw1gMKdQFkgTWmH8vWgCeK6B8oRK7T",
  "key21": "5NkDePPpbd8DGkWp3dB3FpxxMNVY6rbKHHNRdJd1mUDMfBKXtEDFEyig4XA3UKgLR8dUrDnWY5BjhUv1mZbBf4D",
  "key22": "yWQq9jv8gSwyjde3b4Cf4hBiknqdsiVNXG9hqNFXDikbihUgxK2DQP6KsrSykucwdT4Gk1TyVFybHWnfSxFhoEv",
  "key23": "5DCkfLoz5ZERFrhwG5LoNjyo5hVEoivqKTZn5ZwMm6CRc2z3tUNKc7yZ5SkzmkQsNNnupFTQxcGW8GLb8RYKibsK",
  "key24": "5dtEVYFAJr11Hy1K6xmSxUw1kohe2BdXXxukHts1EovKZ3bdnGS85VkPwrVV3z77U3m8NimUxuWMgmN6SVYmT658",
  "key25": "37vdBw2Bz2AowVLcN6Go9tGS4bZUnDJVQCZ7mL2UokDFX5C5fNNUzvsrx99bFi2q5ndJAoy3pFzqewPCpFURZJBB",
  "key26": "633Fbhz3KbQg4bHpyyASSGaBRJ9MrhKQdcYpzHPTEikcr2bktG292eKcSysqSukGgNLDCfj4EFhYp6NcXYH1g4z8",
  "key27": "4ePoNuncXLeNgeYHjv2vMnjJ2Q8bQ9Y6oBkyYgiJjuacsezpqVk8HPDJtb5cETnwjNx6AfTGw76EqF5G5AYJgeHv",
  "key28": "57ekqYCU2thghvWNS7FnnGqT8p2gM2T6uz9NLu9uRFNcwLQgwvjckjKSUaAHbL8hgpwsVezPADdyFXfS1ng4nqvp",
  "key29": "5XAr4jLzCScAk2LHR3TrnvxAa2x4UtPHFsGa9GN2mLyeBdqezSoVUS6fiQ95vH5BRzjZUHMLXzPwMJHQwsSQEra4",
  "key30": "4Mhz4NCnBdZ4yNiJ1GLqHzxWRKu3QZn9ds9dBeMxMqRBfd8XLWH4L7rm94aZjQfuYPKSZk9ntomMTpmgbUXtMavw",
  "key31": "2oMCJcqD6EnmL457pyCTkntFHPj3cecXFmzZWM2v8be4SMQrtpgE46bjohGiXJPBrCF6hgckrSVf4PjcCLWdYfTW",
  "key32": "4Kfi9UFhJ4uTMm9hvEVufDyDq8QGwLNqyg1coM1DWkEQmhhUw7UDF8v5VnRVkMVCsWL8ZAPFAhE8PxerBWvMw7uZ",
  "key33": "378ocvY4e7BA5piFULGCG2uph1N7t9NqxSEGXVHo2Ek1APPWyAkjyCCsg9fPbpXW9VNjRqRjhJ6zB7qhWA7chyrw",
  "key34": "51ry1vbndNH1jXZzyxF6XL22CPrhhkqBqkVrNhaT1Go79Sfs8NYW5ZFoaeX1y3w6xrRNP6YfHd8CkWBQgiaWiyik"
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
