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
    "YzR2fcJTSbKjPtakojLQPU8UGPP1hFzEqSsSKHPFAjYRYg7odDzsXjZhPtJLiUuMUXjQaFQ3dmHy4AsQLJX9sY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EQmRP5AzQotpGUBUru8otpyfbMR3UHbu8cpeDcg6sDJaDTLoP9BBUjrTe8a2ST8RJjWaSoNezcJShKCR4jfs7FG",
  "key1": "4AyCJDVEUkeYMCbx7PdWCFEzm1H5cpJMorm93aGKyKsSYzKkKtcxihStAt7XJ8GQnbCnfQhchh6HEWMokkgbFWb1",
  "key2": "3oDACe3abt8BxkUvU8Yjat1mxAojvHz125rHGXFQgxxUmCk4V3twKW14gLmksnNcQwLZBXe2qNrN65WoyPrUCAeq",
  "key3": "3P8qMwuce4ENZtxeFD6GzAUj3CrGDEdDCAXetXx8PTajZFXGrTMwktYnLbX3LjtFv8uincdGWtKQuaxYg7vBFZ3M",
  "key4": "5ZxyFDnWWFst1smZ9y5nXYXWYbik7S8nAACep5QZJ5o65BXVnC7iTovUEAicTC9Ep9kRbGed1RBksrppVEoFNZqk",
  "key5": "5ytAQtjsZF2wv6LHHZ7rvKg7Ri749mujPNuCr2v8oP3fCSWbEFFqncsX9BxjLFgGpeMfx58Gw5zgBqBeRV9H2bE1",
  "key6": "5tVg9MbWenMy6BZFAuqvD3ERGgghs1CCkhnmhmKyCgseKozCP9LC9i5VEHfG6TNCj9WQFj58b8WX1zncHe7E2eDD",
  "key7": "3vV1oWQy4uAm37hLK1jNctaWWuz9VspXcW3trmF4wrZhLDeKUKbzB4nystvT1nNKAJ5tUeQCG7r1TBRXtkGtTqCU",
  "key8": "5GFuq12Z6ukRmG8FpSzKb96TSUtxU9EDqcWZyX61g74hLxxzctTknBew3qr5ouZiZFy3d8GqsfLZD8BiMc8j2ym5",
  "key9": "KbrP47wGGPifUZ8ZEQBMaHA5XUAN56kLnW9uQ6dGtyrQFdrKNoPPAusYugMVEA5h55aSEhuNg9i7FDH7b7JtkEk",
  "key10": "4BPMDs5UyNucKJvbDAtsbDz444Ru4SXZy5dYsfLJPsC4g334uTTZ7QRbvt1n7yuZziHUd9XnzmbYFdfkMqhwbzJE",
  "key11": "4EoG7JzJksRZBQx72odf1yek45Dya59SHHTYx6CaAbKmYKcjxN3otbPXFS6rtY7hDnAi72YYacpB3kwe1vChk4Rz",
  "key12": "2tpE7cHWdYEpRnRgDqCWUDUJMEEqaoAVQSdSYMqbdp6XDNWmmrsc1CBVRTFo3n4CaGCrQaETivaqcu7JvBDgz5JK",
  "key13": "wC96T7GvdNkwYqgZRRiVTHw4Sy9mdWGJ4itw8TZX56ATMUsfhuCCL2g8daY4WTZe342beExLnqiHQVBE39x8DXW",
  "key14": "21jrf44vxfFbqjaEKvMGxGQYuQFjVZ2j52NR73yVkANubo9jpbpycWB3MTFAYVYqkZ8FGLnHaUvg5zL4h1iUn5cR",
  "key15": "6rYaCsNJdVyueeqQ154zeC7WAHho6M32337Ju2kTTJWS67KCJBYZX5do21n8xujaWqrxLZeqLN9R6JuvMQjDTNG",
  "key16": "2g5cpuPh614WKRveoL26ALSaRR65FGdXspBRdBvu6G4y6ySESjd3UvP83WVRDLPegQgRjX8LC2yeyCAKnkk4gMxG",
  "key17": "2c85DrkSFnBx4HN9hbZATq4WwJvRekNEeniaGJSW2c6BFk7tUU4644pgNM8vbyPhFXCNCQMJjaxJv8gU36t6ca9m",
  "key18": "3p8BYQqatxxQY62rdwQ83uCjZd8ehimj29CDV3R2EZe5F7caegG7rtyCPPSiMj1J4MjL8N62uXaMtiX88b3WvniK",
  "key19": "3kjkCwgvF4s8vwcrZcbsaCAD8zVUyQZDn788nBoWjNiGC2psa1ZsTeSCJQrh9uoQrkGsTQRoRprrS5Tkf3qrmzdT",
  "key20": "3dhur9VogoMiJudmZxAWvMQ3o4Pyj7kC6tNsYeP314QyeTXGJXMcp91dmF6DejbAprZk8NSkkg5RBywrWHchkcP5",
  "key21": "2ngp5v8UgvPGhaenfGLDRvNPoMv8NquTJ5ddHsACiGciw77cASzGQLt8DpBYbPuPKaWBTsAr637FknVoS4hToe3r",
  "key22": "J1XxJwqiFSuWeMKD3QczNUV1xbco7Z1s7hkLUg2o8jtSXQMamoxrXG8k37zfCL8cLSnyusMw4fyeT2LYFpxBQd7",
  "key23": "3Q3gKxwC6bPgXT9Ndp3eMmMVYnmvDQg9XfPGTTPBL3K59d3fxrgB2kahsEx3X955nBKkZot9R3h1jt38xtV67QmJ",
  "key24": "2UFcdfcfiTAZT8aTiMhUcKSVreCktNnVrbtdQvUboRaFXU4iP4ZYfv5ewDKmm8q8nLarFAJyZgSUmMK4JBbr7zmQ",
  "key25": "3F8nt6mTcMTiPcRx1NwDnkC4gxKqPMcZsm1KeTF79qsmUHzRh5udAfg37wZzEbimxAM8j4bEygeBJCwANFigWtwp",
  "key26": "5gj6MCH9VVqFjMKP68kfs3TQCXMsy1C1gdAnJ7PwKhz5XfLxoJngRFgLrDSjKt3sEndNC6zyNQPcqNhvVWs6NZ34",
  "key27": "2vSCJeU8EMq2vZEfLpMkEGLRPrmd3tHJRYeEKb2RM125Q1A4i6x7fXzev647hUVBRN4A9sgV7StURkypsy8tvP4z",
  "key28": "adfU7HDPsJBCqEhU5FD69LD3Xwyd2wR9LaZCzjq6zyVtACAzPW16VnJTR4CTAYoKVNyB3rzqtXfBapaegZ37E2n",
  "key29": "3FonJDEPeyqBPYeqZ4sSGyy5ZwScVNUuFDuNkXvAHo5pZepaXEzuce7ddA7xYSHJSWHvmXkSsidRgTTvaXvLqVcK",
  "key30": "2XsMEjjjBcVndgRiKUxzAiVhf2henB4h9hzAw2q1BXf3Vds3jZZJyAv1AayP8AAEysr5MNuQaUr9qNzxA7DfCcJZ",
  "key31": "5XP7NaGSVtTU55xEaipzisnSKvAPB7qETX2vkRkK1q6gVZDT58owYaW8SPCbszQX6cUtajB5yXAYvXh5r2dTEFXP",
  "key32": "3A6sU4YiwC7B6QNrHGwwuWMQoJEJkpEB3cHBXbKgzL4pdPG3Xe5MwCX2ZKxMVJpkUVTMzDjhmcK7yjAfDL6S3U28",
  "key33": "2S4nv23Pr4CvMV7uwrmcoETotrCpuU3t3tjijvWmRTXBseJs6hs8gwSuSyosiuLzBZuKKUuhZGZcuZ17718dgoRQ"
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
