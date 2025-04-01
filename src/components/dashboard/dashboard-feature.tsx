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
    "2Y34pqphVdyMfeig2rtmZGv5aHhe4ZGE4oF3wqQ4z2bkuZ8AJqmf4KaYDWBFpKG1GXJykPR2rTwAeLbkbstxdGGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nbfNZVnHHKaJ6brGsAfJNtSzkTFXVhnoPTLEyrq4a946myubbwr9HuwjeN3uf2Pht1wwdwDv6DhXeMxC5RvpoJA",
  "key1": "3BwjbN8W8UQa16LVK4Urw8DyfYeGpBLDMet4FzwYJSDzL9WEU5k1u8zNYxk4cU9NyccAEYGPnMGLeELfUtadZoUf",
  "key2": "2qsdNUMyHJGD261YX69xe1UTnhBuJVbMVaRLbjp3U9tnumQxDsfgJDCi9XACKKwk1YfKLsiu3S61xtVeiXC5TWmZ",
  "key3": "2LRwuNiJ6vt51acFu8LdeBrQHbNzyD84DVSfFaw2fUNFewR491pxWySjbL1fnFd9NEJrYfoWCbPFDvjaZTaaVZz9",
  "key4": "4kJm997yR6yTpuivUTR2ogmp6KHz6oVNmqgjGp7xo3PtMvbyvqniFxjK9qrW99qKzC8iMiySo9o3nZPcvFn4RwWF",
  "key5": "65CYetB6McT7hfAp2FnEYntTmQS7HtNbzM4NupixSAKRk2CctxmHa7V3eF953SbdMhsLAPWJ2ZBrkTWritBuJyDB",
  "key6": "51M7qGPj2eYoLzxojtXX44s3vY6MZjyH7pPPxqy48JdyPHbbwVt3gmrM6u7R5hE7ugSEvADREFskAvLXJRckr2FF",
  "key7": "3vvh86dyi7xachtyKQ9T3seXmb7KJyTFbQxFpqhrNaXpWTBwG9QcsVBV4xdWtq4CPPRTUuDNvskVsNS2ux1otqRm",
  "key8": "5wHorNXMHX8ao4AVGkTkkuk5D1azBV1yBHeHPJ8AmDDL3aAzgzMhBHHGcXF9ku1rUUgw3RSPZ8QDbiHxJRbYNqkX",
  "key9": "56PxfkE7zyVbwgnYFhHB2cQ87Xyxd84rzKeDV3WCpN2dAcgYPT3CP7xcKLx23YJ3WbVuETaXuMG1tF2KXYSkuzeX",
  "key10": "46y4fWYZTWqgVdFTjAyWFteG2YJwtD92kJvK7SJpuRZa3Shr3NnQ151fHNxA4Mv6iutBadh9Ea8QYonnT9VXttqo",
  "key11": "43HKfyFHdZKjCnozgWTUqYrBBhq6cMtsUhm6CTFQCwgqTFdfJHPG3Cw6yiuTj7vT7FfFKxhCGdrquBpfGmWWcn3j",
  "key12": "5A25L8upwR1ABmRAucKm7XDZhSP4hw4wzm3eudT8FuHfAYQ69DnDC4mC1HefBg1sxTDRthQBSZzR7qpc9mWRqAe",
  "key13": "2vX1nvr3q6UYNmjSaUHVvwJ1mffMX7mD4weHFcFMv5T8n28vx5f8SicgnR14kyuHqbcPGhrT4GzNosYFkRo82Qib",
  "key14": "256yBG1Eh4Tg9mcxbwLfUtKUTp7LhpsE8CVdyGDu9DkFKX1N9uTM2dC3gorFjQHoQuwzr5UZtRdXW151pk8ERmbT",
  "key15": "3zWernRTV84St6WN4237NsT5g13YMQQpKEo3gXSvp7CCzXE3jzctni3zLqbTUhnRtKqVSZCuecHaWRGhE37gGL5T",
  "key16": "5WxXBXdymuAyKbPU7tKTw6iNpQ5K96q19HpQnvxZUs1TvrxMjGaipBd6HWveQ148rtTRN9PdE99AwNpSHeZVsmxP",
  "key17": "5DV1jWyWGtMgiEJcPBj6ia7wWDjUUagCu6WqEGfczKFrhrBPW4uQaYiqGKQ4aLLDRvhWZZip8SZhBd4shZ5mpkiD",
  "key18": "4A68GR6Em6ZFRs1StcRjuKUSSxvHqFi3CGoC1y277enz42weKVq4t79TQg6SFLrKDZbdqvWsvqtJB24aLpVyiNvF",
  "key19": "j2iuW4AYmtMXQ8ZX2MHgQzMXtrPpUeGoyj8dxMEgqo8WgsiGsDRnLEotxY2eDyBD9v9BZnKeNEpdKeJWJY1j7u1",
  "key20": "5NQVx22kDwpWQQZs11ZLsVer67PoPvGzr4vVCvTUSbF9Qj9Xek7xnBuGVvgUbBofvzRSv9NvznX7UcVyZVDdGXsL",
  "key21": "F5EvfibZR996je8iCweaBeuZ6VZHr3REybe8Vn91nDM7RNeiazhdi7vLpeYUoY28fSVxDgT3CAurxtDMhDnW4dc",
  "key22": "3zMCtMmjCchryntbQbuBKdJKNTnHGvjbPTPicnBpN7TSzUpgxED9TQZjhM4qSXzFvJLLGLvGqUMBJ5fmb6zmXsua",
  "key23": "2HqZUTcuDwXN2cJef5iMeXNEAoVSq7Qc8fmoXEaLEWtqnyiGK9hvCYmMmLEYgHJoaQPEQ1hMPMXHg3mAHPbFP9Ub",
  "key24": "5wyt3FDtoBTixccqWPFvj2U7byd7XYA2zp8iiTNpThX8qh7CXBtBcoM1CFW2KdVDpVb7JnQdPAtfd2LLLCmwxQLc",
  "key25": "4GbEEHyYKGsvzDd6nPERWZPKvL6AXe7WQYSqQ8sjSjXoMb8w7mSme6HjUGnNS7f26QpGagDcQk6km3q76QcpZJd5",
  "key26": "23D5TmtKAZ1Pb4gnaLeTa8eP4mdyPXFcbJpF6rmL47enqjorsyk5vAFtujtMZE1i6ZfEPfByhwQNQtq1VrSAhSr1",
  "key27": "5FMp31hpAFVrTn2N2iaDzDSGMidYwvjP5hiLtFxf47pnPH7tsEX6rfHBXkhZtEzS7BFgfjwooDp1aEu7ZcqqvGjT",
  "key28": "5FknVT63XFeSQRNGCTtLwTGUWraDFCp7oMLhyr2kiSsYiFjwVAeYQxEVHpcrFANpyHQXH3mfH53PwYdT2SuvUS2R",
  "key29": "3NCtJsVBbifKF3YBLXYEQ9bZdaWpzCT1j521YcAH5zaZXG6rDs29A2NtGpHbB62LhSy8tFEHaCXw5YhaSZ4SCBoX",
  "key30": "47iaKXu9DcXyri3ttb7XMEyEKpBxeXLmxGtNhdufWw3GVGVWzqdiqQjk9eCvEicQWugZY2uqYD5Svj9iqgGU61MV",
  "key31": "3Q1nL4XZPP5H5awYuJ7Vw5DM6PZN9BjksXSqdyzAzppFzkBsGj9sQtJJHMQNbSEvnnhQoV3bJXxzVAACuvnpuSNy",
  "key32": "oT7N9N5bpn7WEhFeu8KvPN8hm9ASn3986PcGshFdTrLid5M5k4R16jnni2JXCJf7z1HQWBF6nhzMXCkVBSyZUpx",
  "key33": "3YT3oJ9q1n7c1t1ipahMEpWJHZ66obTY9TRXuPB9dBXzFY51dVuXvgnq43TFdf3pXggwG5q6xNUcerit4kSYjF5F",
  "key34": "2Qvh8BWpf4LA6K6aezJ9oaRChDQLDPUHjiDJhGmnBULUfNtJBmPaS6p6ZxCPUjzydanJVkdfKDVFvvNLSd5fPUke"
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
