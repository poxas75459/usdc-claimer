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
    "3P8T5qryCKdfCm8HBQGD3Dega92CHNfAEHF3TQspq4W4taioECHxeGz7NCoPHXdhH5UnkwiC3nvrdU3qGWR9jg2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j4tX63cE4P5hi6mKvhJFrt4pDaZMWS666QoqKDCXzUpvSLszCxWET5SBGtp1pHfbYVniWuSxarX2L616E4zP9sv",
  "key1": "5xKLZ2we8WT3VbB9RxMUk3cS7G21nSg2VTsnshude669y6YWzmLkGgoM9KEVixhep8zc4bLVgxrALyZp9dCZDRXG",
  "key2": "3ij4MqWvmFSeZAe8CRRSCindvEi6vHxQcYbBaqLrLc1kMquN4BxwDRV57Y25dZY3g9kGbWS5KuKm2wjw6RiBNfs7",
  "key3": "3cQP2UdJhKnBNEfNrZXcPvybiSPYZiQUGcXkDUt5WJBKsNMVXb67T2ya8PVFxb5qPaDUgqpz4mHMnbMYbb61DroS",
  "key4": "2o6KjW2ghZp51kNxMEjfsgRvaRT7hoGrzKg6xL2Fb1GpVU1B8wa5xHuTNgvTHi8ciNUND54MrXBatPhcRqqaJyPu",
  "key5": "445oS4TFX62KvEs9yQg7N4b5SGuwHXzmpWYSHK2b8DAwDGN2KuTZPJDy2S9LFtEdS4StbovFMmY4hdG8vWBPqBrR",
  "key6": "2EMy7DbpQPSUsYf14KHEU3PjffPYu2UcdPnEVaUFFvrT6SKJ7ZHy5A71W9zfbmYBBSfy1YHWKYyDuR1k4Dm2igMS",
  "key7": "5vJadHJXqz5wnZTAFRQBSLf2z3v5Fvfpmjq6TiSM8qLPRdvGurvCGtNJCMRedwKjGPVoCViRFN4Du7EgfhNK11kj",
  "key8": "iN3E8Fu2P5JaDxwLTUi8QidZUKas1EkyfPzcEne3sYpqH6q4sLj9LBoSYrahXSYMNgu7kcQCc4mDGGNM1sZizfQ",
  "key9": "26MqsEZ5tH2sjnnHJPH8U4dMvK5EyZSJkBAuhi48AnAjgdV3NfXkb6n6NNCs3fSLm3e5vx1uFmisPJxsfpoU52NN",
  "key10": "3GkyHH1VMq52FvqSSrobRpvUB5JrKS8xwdxsYWXJNpYWhN6m3UFBSyTVZZeiRhuAu7mUFGWksKKTeWcfXpJR7okt",
  "key11": "3qwzkmmyiJ52iK4oNRvTQD57yHo7fGiauGWdsoYoxD7p5r772KCB3X6wjzjGThdheR3muzkNGcGXv5SNaZviU3kt",
  "key12": "5zZsjhE9c8V43UooEGe9DHvMYzXjmvU7MxwBdSYZUDAtwbMEcYRXBpW5nkWyNAt7F8NkCVVVEv9smodATfZkQLCV",
  "key13": "5wVXSqdoeZTh9AWzGTP42P3uujPZFWTSWnnqHE85oTWV5oAhMEsWdhuMmzoL28eCaCdf4RgLCm2o1aS4S5nwAGyi",
  "key14": "4h68DTybtoj9AFhNNE7esrD47huT92jKgnrdxmyfPSfofW93gSf39QrPrJVmzrEZtqQ6Z1rxWoVjKnGWcMYSNU4V",
  "key15": "59BqDrc8p39EC99eXx7B49mW9wdJDdNhZCa1c1hxByYXwMLF4TuFFMNWaqr1HpDBAtdRisun41osaCCfNfvUoKK2",
  "key16": "5HSqnABijiPzs76ssB1bYTZr1r4swASQy2TnNXmzrUe23GTWhSSFpsERK2Vubcy6UuAbE98QWYw7JtUjuhykK1x",
  "key17": "5YC7qTcohtfxggJeGjNSduVE4pCz4JJDLiEvs5BGvsiHsyCMzMeeDTFQHHPbzfUa4hyyupkMUhSPvoUYMUdBjeFL",
  "key18": "5zhVhYxKmBmy6z4MUV7fkW3GWiFSJrMPxLffDy5J9wXA3BjeGRCqwarvrcwT5wFfDAxFcZ2XPUMYkC89vVhtDoVp",
  "key19": "f8hdUeGDbpshBWD8tGsoBFV41JMxjbjYTCnkeY4iRsgeJHsLDzY72UvTLGmju9ALKeZq5VpTZBLokmii5ajE6EF",
  "key20": "22F4F2fisRZGUWQsZmG6dvrkwwnzrFhZN7EahodZdHxzGXUyw4i5W3X7zJUo5hGoi2bWwCe19noa8F1pcNbVkFMu",
  "key21": "nGaJGPjVbXfHy8by5xmJzJLnSjuWU7dDNZGqAhzoioAW99JLXQoV9UEX9YxKH6jQgh51TaEcdeiYh4sDZjuMqxB",
  "key22": "5Mg4StVFQNjEqcdsSCU63eFZprPQShAHaBAZdeayUuCTJDprfqPgpBY2d5Aan8VFMA8hFdnBKugj8qWMivxMEXNs",
  "key23": "4qS89BJ9B63qfbe1SFM1VLwFMnnM4dFvkUSWHQbmafUyXPF5YYiL71xBfMbQUjkauSuha8NF9PGRm16Pv89LrfqB",
  "key24": "616h7G7fgRC7eMitLEHEcwCLMrXaRzKpdm5XLMAeKixVAfCDjLZjLYfoyV5cYKT3fMay36KEWy666phmHP2P3ErN",
  "key25": "65S3Zb7FwvQ2AAkWN9tePzBoEa6wKgtF9i7wHFevCQ6XeVba4BjcZhRWoyMtzcEquwVNA6yHpsJhqoRgfdopzdru",
  "key26": "5eeKa3Mg9ocwnxTYDnyeVKVQ2HZwoDk2ko6p5jfZ5Fz5bkjxgQUZpmxrvpeEwnrHiEmNV7onaWxd6rya14Emjyt",
  "key27": "53LGoWPfcn6yZJTyFRuWYKJm7x9EqM5k5PvHqzfK8vSuneUjUP8tMTPyJQ7jR3GwQbiP8ZnYUbF7seVveEEoC6KQ",
  "key28": "5R3hVcuS6198etPTcovje9e1bM4jwuxSCVzLcmFRGYPTf8kcsxrHLyTBN2pBrBZq6wTHfXcgbc1Hv1Vj785b3ugF",
  "key29": "5ZUsxbB9CgqCedAs879dWT376b6NnwXLbJ2G9cfSXHfEQNv7i6TXB3dBWpRtijFZkFqCaMSaQcPLgmUNe5y8CAcZ",
  "key30": "3cRdgTZY6ysdzyQLdMXmhtKV7CgEQnFZz3kcaYpugJw5dX6JFGREHLoBK36YyP8wmTRjykYhwTMNEU8qYSJEzZav",
  "key31": "5eYBPscP9AQsu1NdPvWM8ZWEmLHEJfrW3sk86JRfVKzVzTg69pioRHKkJeLiWmyirbBeyqT9zCNsUjcANPVBdbFa",
  "key32": "5u957u5MgejAibQ5RXmVYEkCgX1fJU1wCdGzL69km9ZdL5LHMrWrutyQLcrZNXadyW1E7BRFuewfHbkxT211nYbB",
  "key33": "5qEzv4LGveAUNWbSLVUzRmLkBA626t5vuknbm9wniz7q1cjec3J2LUQ7L8EGoLuXntrFjFJ31gSytuEPSo8rzrTF",
  "key34": "5yR8tNj1NDsmYwdsNsQWaamFtKAtFvUuhpjn5xq91BFUZRK1rn2y9yEM5ZcomeZNJ9y8F5pdb3mFZpU9WCNjprmm",
  "key35": "5pHTTqSnUQETWpdYdf7bx2K5q31PdkWSinbNKtC9ENoBcBFuYMKAv44K6zenMMn5tsDzwV872pK5yC15dL8aLKcp",
  "key36": "KodfqTffG23bFqr1DjFKy8morebsxw9FQiFd586i2spFY51mVctYQrWLxWM1666GVVP2Es67NkC9oMDYyMSL6s4",
  "key37": "4RwnheeNEZQXfhX81faGMyYhEtsYbsHoZDbGAkGzPSWvu6U6m9iANP4aPH5gkytFkLiMmkTN7k8rZaUpifnBHCnY",
  "key38": "4hkTr7S1R91ErCTSsDraSAbGJ5dfYUyVWJJkZG3G4Mjq1DqPg6wtWz7S1wAfkcC2SDSyqdCSUQ5V9gYQp8Niib12",
  "key39": "5tBBVqTm3nJkAEXGchdcbTWTt5x1QRicdujMNjQqzEh3nE7LxmR86jw5RNUQ2WcVXYUmZpo4xWUcemEJ5s1JVNPR",
  "key40": "4kR49Xa8m4Z2zEvK4CoqhaZkXvrTR46w8EFkCGyHLVqksYm6FYDvJf3MBGGe1RqBNkKb9djtd7ja5bAdZc5UQgAz",
  "key41": "4RCgzjvFdEg6Sk76oGLXK2e1am92SQNvHLc1L4dzJBxPK8cxaMD8ZPytoXkY8zhTkCefcLaGT4eQXmAVuU94qpNH",
  "key42": "5Nth7nvQCY5o1bncFXhybMtEwHUCfRJ5bEG8FPBA8ssWSpA3ZugfSRZhnCe2xeMSn6vF2YoPhA68RaJxMbnktAVA"
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
