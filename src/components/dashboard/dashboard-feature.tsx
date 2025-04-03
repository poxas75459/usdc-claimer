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
    "4XtwPkynZTmvZkep2G3HgXEjfgp94UuQnkyPmgVBmhKW3KgEQ5xGCyoJnEsvUjuFm7d1kjck5tZGtR452J7FYm7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cd6KkBqDWcqDX9Xe36mgdd9VYv9Ekj9Y8rMvP9shZ6Dhh2fHZrXDXcrvZ2ZQgFwvANYn8NmzH9ZPb8zHaSK4ZmP",
  "key1": "mw2rTjz6mt8TdJXqXkTWkzt4cZjQ4Z2QuTzEh1KXRaRbCF2Fp8CARLR6UzBwfnD7dAkH7aCmmxNCHkJoXyoaAzJ",
  "key2": "Tmxzz2LPog2TMsUGkShMVKtXWGfysFWn3QG3rVoURaB6u1Xt2B8ViT8496YkynL4nsSoizWsdQk4ZEM7eSGEHz7",
  "key3": "3HFzntgtBeC44ca3q5ZteZM89CrRbrDPyzAyGW3txBWGxszrGHPAxDDVCq4s9xwyeBdvhUZUWt2bNRHea9frnTpz",
  "key4": "3hq6ebcKyLcGVXEsb4Z1U171z3uSFdUbXUhhDFKb6QVwRG8FEQy7WnEcotNpdCbyfnDuVmAhcWzJfxEKRaNwZZk6",
  "key5": "5Y7wFf773v23udHf8NCNzgvZSBhZ8SzRPzoyJaMJSdJhUhNpR3mudf2j3HiGs3zgpAmxGhZLL4PpYfkXqZ8hVg56",
  "key6": "3qWCY7Y1CqhCZrdgN5EfxCkyYN1gNJRVUBjtsyngMgJEBZTGVq7sxZUzrzyo4zgLUaxzySfVS2rpyex4LPvdnQ2q",
  "key7": "26h1YYtTYg2FADuj7ks2fsewKoEzA72dMW4f7bEC51vEqoqsa5v6ePmaUUB1Vja7BPcyRTK7K1ob223pYtaj3K6k",
  "key8": "2GZJEQxtCnxsqpizmxUmixzpUToikJggoBvaKTYKysQ39FUYRKnNp2SiaxZ2Ai4ks6DxHsmUKtNMFGNkK3QyABc7",
  "key9": "47MjDhxrzgcR5qPqk8o88cjqaTSkkCbJcsbGXAVp7EDBGzNAzx9tVy8CBcWD8nJQvf1mCLME9bg5DE957KPo9i2r",
  "key10": "28RwPgMU1srVJuR4myTYQgAvfJmHUZ8L6BXTRQxxQLnECdN4CLJ4jDjyFceJXsWwVu2raNpmZhsXMjB1FV3nPiMm",
  "key11": "oV7Q34ko2GGApke1eHE6g5UCADoVPiKvxYismRykwjktBzTBKLPiHCFAdKFyf1pMqaWL7Agr45iWSVeSDWZLkai",
  "key12": "5PEU83CdKUQiKioKVoYiFUu4V484XWSr7bVQo2eSNpHLmaXju6XuzuDHdvK4mnwHTgivXP8vtnhAj8qavqyn9eJ",
  "key13": "3kEJHc7yCnTXc7CXBUNAY8WggGuP3rES66FmKC9Dy2AjaseHhDpxXF8xDh6D72LMuB9n99JPWjwFCcUJHrQuaqT8",
  "key14": "4c1VDv5YYniaj5rgR7UFMsuhBtJ3afwZKuM7qrPV8jPrDy6jJUnmhA5ryGDmxK9YSPUSDCaFTBDmrXQWmAtJ6KZn",
  "key15": "2thcu15V549EnXWDGtRCVrZkUnvYtyFFA69cFk7P8PrSfcMq8HGT1MBSum9KDDfdWheXAD9RJGvs5GbduhP3LW2i",
  "key16": "4JcPMvHXLD5nwZ6U33PET3Mio92qiBCsq9AWkLNtYKD6YB1ACzLN1Y3cJUvDpvjZ8r5ma4UYEu56gmJFbgmnJC5X",
  "key17": "tAQooR4mkLyHk9EVa3JGcte8s3GBUU6yTbTRqpdDkXpfRU1pjYQSw4Aiy1GcUWp3Jn4nmFK4xaUiAvt7dbJwxa8",
  "key18": "2Q6j4ekGdr8GC47kdcAsbX7HVG4ReZWwp3TVfXmeiRV5gE8Kg8t9YSYReGpfvP9nmkkRHtybJJADVdw8SGVW6qWB",
  "key19": "5kiw16B7KGtZrcvcQ87HzZN2MVqwHEYrHkB3fpTE4ZwBHvVKwLVvtXJ1rbn8tDC2TGKGMRX9mYLsx1w34weZtoU4",
  "key20": "4XcsW9mQLbmAFg3FAq6qS2MywFoV72ibtxf2KZvcEd6JBhCueXQ97YRtUxHRcTEHna9XSgashuLNrSBcbFBEcQKy",
  "key21": "5xH6pc6bnCJqciyADvfmrbPV9qzowif5sdhDgLqA7AGZGxycNc9qv5EK9gh6yBQEWjSFZveF8b3iNDGNCmG1KTQN",
  "key22": "611M8HoszxDTZBhTMZhZP1DaUTXYCSHuou5CMrpqP6mzrc4dyDtSKX5wnGooTDVVmRYMjkLBEp5EKSCaDy4qHHcP",
  "key23": "2c6M367FkxDVTyJvUP34SQyxkdD6gnxSwStdgTSHjUj1C9tWFFXKpSkjHVcgftU8Zz252P2HytJwHb6eTqYhj15i",
  "key24": "5oJ53VdhbL1A3Hw5VzMBNS2AE8e6RD5GWhPJkMJRaSTvy5cWPzrFVotuRWipPGkmAhi8r5AfMbVZq17Hv2FZj1s8",
  "key25": "zpDLiv2gbPGaD2iHAQUb2gxbDrrkBW9TvncW3WihE9h4wAoy1gswutR1xvQSB2VDVwD6qGgmarva77xuRWs5Cpm",
  "key26": "4asp4wYQ6tT1Zs2u4UXAufXjMAznZpieewwDJurpjDMWBgYqYTkFVCXnGeG1jbcGWrV1bNRtrN4YvzkZbFHrriTs",
  "key27": "53kbMFbih3mo4oFVe7vG3LQ3QbLpd8dEK64F2aRS961SmXyDZTdxqGYkYJPvZckX79YvCmyJapmAFAfxTqE5L5ZC",
  "key28": "5tcFWPPqFKNBRwC6YSgWd5yPLRCdWeuykBzJ7FXctULFkyRCUpqKsGoPygFxTxyyBwfhkXZAyuXD9c51HmZFyPkB",
  "key29": "5Sa7XsPYJeaLkhT9TaQmx8wuL5ePWkL3yphXQbxYvDtugUMDHxsbkNr2U1cvSTurMrkhTsNA9hZ6Uv1MmarCpRfr",
  "key30": "4Hiey68mNRr7SbVL2563NewaqqTJYoNnNztJzaLxvhyqjWjGVFnPVrwr9eaFHny2TsTXCg1LVzbjGkERWBBQZihc",
  "key31": "2yMWVDBm5bJALNMTLaJxb57RibB22csWwQSVCukkptavrzFvp5rCef73RPm9PtCJjFAgGdkmUbtTd9QZ1tDeJpvn",
  "key32": "39YxQCBbP4i72Exh3z24e9w25fVFiARUgW3ft5Yay329Fr6W7gw7FSWwuF1MR3XoWiYrVNpotPDmsvwArDiBPbHr",
  "key33": "5ExzVoJ8Vnc8rgdCnXJdPVGAToCZEHZMVpkfqu4N1KhxTrkJ45WJsyHFdVEfPw3eWDzeCx3qfy5Jn9nWTnjNMWYT",
  "key34": "4R8AX6CBXBrhxNsUyudxKSp1bTEt5To9w3nw2sx2svwUZmFFromTaaJH2xzQw6aNF66YVnjziBiRRRJV7Vex8t69",
  "key35": "3PZp97fJnw613YKykKzTbvbVZRsUc4aTNfGZE2yuuJa73VU8qaN4BRQaEQDkLPcKMRiGR6AE353AAZ8EpxM3U29J",
  "key36": "586s6NTCP9MjikTbqfwLM4RBMjPYc3c753zmbmRHdUpPP2GfLt2r4JmvfvbBKsyD8werV9WV52zMbtPWgSsaFcaT",
  "key37": "22BH8nDcWTCcwR39mP7xTSMRbdvx3ttgYK8waoYH53D36dxfzoJpMqKxDHbvwvUyLYeH93qAXoFNoTfFi4mnb1dd",
  "key38": "5mgQwRJoXc9Cefqa7oTrN8mU4isLDQJUvPfNWGYVkEW23fJPgZEESQPA2zcLgXQHXDVP55EPdhLSXWhzzbawwbC2",
  "key39": "2d2icSpmTZgDNGHhdEDhxYaJbQR2CoynifCxHQYDSN8vAZasmeNUVXmecUMxHoSBvn5jZgmwvxk16h1wPxc1JCWU",
  "key40": "2HHFmDf8ipQwuZSY9tZxZeM4R2JWfs8RLR4eXjtNZxw82m6GryVVRZHndUYjvdvdx5S8pRCYVu9JyCBXZcWyLTFV",
  "key41": "cZ4TnWCU8ti4v78Lw3QfnVFBYVKS5jDM3oWoHEZbb5J2kvG87rjTdVV3Yf3eFbsfU4vGkAJPtgnEreAuzHiTbz7",
  "key42": "3HeuPwHh43mqvyaW4yeBHEJ8T6531cJcPPDK7VqbTDzJLQJo7Hqoa6E83gwpYr5t9YPBPLvdZLiva8NnNrW539Dz",
  "key43": "5TRbbX2XJt2Tvx9JTug39gfEvbXg7jrzqqaBzjfkWfpywVeECQuHpC9etJpWntm7q9b6RrpHNY4xUpoPH9ndzhK2",
  "key44": "38ZdHCvqkVBwUF4phLT5KgKxDLNdHJuon4ycJy9GrbAww1epNnaUNL82K89QDuijjCPW4egaG4c4ZGuTXLNoPZwj",
  "key45": "5bQrrDkamrLQdoBpZ6YdtScjpbNJweLHc7vmB9NPaH4eyaQpJGFVotFwc86nRBzG4FHNTTn5ZwWZVVhG6PGNtDMY",
  "key46": "2D4dM6wm4KGYR2oYvRcvbP9g4yD4SG6MhBfAyyGAhLsPHm7k3PMWkTvHzL5zAJERgBcvsjuBzPThve4kNGawCrZw",
  "key47": "2dDDfdYjS2qUJKAayCKVTKM6yE6mY1yLA2SAr9zSa9McTEkj6y7dEfcvntVMRjW47bxAZy9zsZ8B7uyMXF81K7V5"
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
