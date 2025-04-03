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
    "4Me8TNDW8wBWvqA4G6akh2ZarVWJVLZX9XpZ99SG5CG3o6kS26R2ThP1vyPEs7phD4wdEzs2iKS6ZiCDhSfZ1SfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mrXK9wjXzmDddNrGa2NwDNV9Afu8zRcV4RV3FsnzWB968LFdG3pm1aBAiwhkW1VUCSPGQQYEQbgs9Zu9vQ9yy28",
  "key1": "49qFDKpyWCnhYJoLLc5fQZk5qfVxPuwUhUoFrPSi9majF4gLaetZdjqSyET4BWTHCeTEZDw7ns3JSgMVuhgcSTqo",
  "key2": "2nMfiBbeT3Qhhr7mJkR2eR2Yv5st9osyLXRWkfsew4zmjEu6zgECvMenRQnv3YM2Po67m5CpvBFz953Cud53tCYM",
  "key3": "4sPXiiTxxvXDi3t4PfocGhwPjbgPhWm4ymRxKHz3Lpqak3gbyK9CoNLHJLYoXSGSPsKG5ijfpCFNX3UhtDgDvk2Y",
  "key4": "5ZggdjAbTQHFWxcuKjxLZZcDYxSnUoQ94Tq3u3ZvzPqfMrEQNQBsFJEP5uBv6EoQG7CNmpu2NoybXKnA5NhvkyRQ",
  "key5": "4A8o5r9gMSbJbDQ2FfWn7hpGbBKE8biaAxE6eGGjyJTju25ZonsdAnLaWKnvjyWr8okptkc6PrihGE4jTU9yLzU6",
  "key6": "2oeTQoNt6E7uatxB6eTiumw7PSmVLTM6WZPUJwx5APdNrjSWawdn5ugNj22kpK3BP5cB7RnUsm8duS8Jb1tZed3t",
  "key7": "3kk1Lhk2esAXwx1nvaDm8xojgaSvwTQw8UYVJvPmVLJxGeKUKEXs9DQm9epAhRGfWMrPmCnxiTHgjGtLoiTwceUh",
  "key8": "5Xg3gCGNpiKQt2oznVD2CXTZtVPPThWLZ74HE13txzXrUzhNqzgtMJcnvsCApX9Fup9nA1DrDSfUXjRisNX8yC5g",
  "key9": "G9XUCtHio9J8KeFQp8VxCzYPaKasJUS3uh7uodL1NvXoxSXHn3CGHe1Gq5hzmnxsdRXqeFCJZaEdjNBeN2bQhFV",
  "key10": "Jk1nDfUhoFFJLFHMWGYgH9BsLk9hdzM2qVSu3VghzrhcCguj7krgnKoNgkcYtuN6U5T3Ba64qHZJRG5QLNYsoZR",
  "key11": "5m36xcXCKg3mGWEF3JFiBhZdpKeLCGYpLwURQqmkZpF8qbHNaeoKC1qMMFruDMZxS9QYv63Fz6GLzkKjErDFAEZZ",
  "key12": "33NVszx6bmJzpdiHD4xANjgJYrG16VfLXF9Wo5bLaLiNpACQmreBKsadT2CfBbmxFTGRR7726sJrbAU7AnXhxdPw",
  "key13": "3UHDjPQYoXuygS91nTvq8z5WDNnZwnUv4F8CabUPUPb9jRoNGaQRh1Yhhu8UGpLxtHTZEAegbQmvAZCCGuvUpC7B",
  "key14": "5Deg7MxnYHsPVv2TP9H4gV6zcckctj72zBq73mK1rbdDhdn312qNgZA3Dg1GVJNNFeWvR8zaX9UAJuwU7QGnbezM",
  "key15": "Jqdz2tAkCuxuqNY8T2ug3Nxdv1UkGMMg27NzDzbyRLBSrJpuTMf1PJ8LMDTk4RW5i2hCyPT8ufuH6n4rawoEcPv",
  "key16": "64VWB4Rp4gM1V1Shg8cRq6ztxe7z2Fvyo1hrNVpXhETN7EkwHgAydd6AR99Cx8frmyCdycv3ooremdnHsao2nL75",
  "key17": "YrAmSPgS4LyLk4Wg2dRZeQjPYs3UewiefNHWZp9T8LVVVpYVR19JrEnFJHahMJQ6SAHL1HDpANaz4mbXUoymaSL",
  "key18": "29t2dMhBDfwuN6wT6myEPeiK5vZ3Huaao4VuJgiG4nraLzm38RnCgAvptg4hESi341mfWoU24cCYNnk3LiU7o6pH",
  "key19": "4qNVAwkoyQFUuvT4KfnCQRBaR5JKvdyn6KMb84L48qxgXjScVQQw3hz8QFKYkJUd1R8BgM6o7aoMdyrvGJZhWpn5",
  "key20": "Pnar1R2vDd9eFuBTG7UCijrXKwzbYj9PVLPViBp7QVRCbAchXtgDdGbYGznCv5TdDALMzRTHU5pnCvA46s3Dds6",
  "key21": "3Px1rYMoNmYi6w4eeXnLqsUtWQwu726Hum5SaemCBqMeHTZ3ugKnYiQ42nX4EGHkdWfai6NeXQnaEtATt6AZwVjg",
  "key22": "5JKK2ANVrtpc4kEdfgbQKB1kC1RgmgfV5hmnyUXMmyQYzD3YKEoARuthsu1g9cggh1kw9uNdAutJV2TjKBhrB1ya",
  "key23": "LL9QqrvJ1TQpbGevtCMzkT5MPVo3eNsjWXVL21ocFDVeABChnscvEdVJatkq1QRfZGj6dSCF2cJtWTrbYyS7mNk",
  "key24": "3NbDiEDm6wvR3GR8C6GwxSzrH5NgZXMsmZsFuLpkTjbS4XxbuJjo16TaV4BtMXHSWPurkFspyotCw1PSKBvoztfM",
  "key25": "5eticakFazUd6a6VTmyZohU5KHZTZgQzE3hdetNuLMgyxkug4KpjTEpyTGK7o8BibsfkNrM98VVxP2aGkrhQoJ2k",
  "key26": "54VqHYdwspYM6etba3TYFh4snfS9uL2PnokFoWz3WkxGbcERW1Srf1NjzSq4fV6P6ofy5PpZLjc4W19EEue3ff3",
  "key27": "5wWG5kKy6pWeu6W7T3nHUgkRzrz9qNMKQA6UAqsMrKNM7TjDo8cDW9RhVdCXsrCitSL7Ux4FCjS1ZJSE5i8mFXZf",
  "key28": "4y5JJWE6VTbVCqV25nh9Wn5Kyrt1Xfb95311M2AzMzBXzNGziK4UW7J9TxwwGPckq7Zk2oLJxkfwdz5TmQDAB4Rp",
  "key29": "8ZkTNH7MPykxvsLLuR9oY8DTHrQ6LvDYHM4wHMdVCCS1zaU7f6kXhuvshSW3GaMpf5MogmCJj2v55fzX83Lu3sc",
  "key30": "5P4BfeosKWFfeNPfWMGeUzHd8tqtANvedmrrD2FWHKY4qtejbRuN7EjJEgUnUJBEao7fYnTH82QbhtuZq8fsj7Bc",
  "key31": "4m4GKb4jS7pvJUqw3mvb3WZdfLbb1wfqvaReQ4oU9FKqjPzy1x5JE6aPbRS4RqtoN35HV5WT4nHARodhpvvY25vD",
  "key32": "fCnSGDxn2De9t8rULa8Wc5DA2XYjbdHPsyJtAaJ2ypGCKVsmobmAV2humMwCMoiDQg2qMmKmWUtnEqYe6QfhTe1"
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
