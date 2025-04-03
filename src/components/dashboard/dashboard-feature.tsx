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
    "2vqkZXWR4feTJzuuAgzcCWBmgXDBCa8iRXUrtDqrVT8tHJbjeDtZDU88G5vtotiWAyvfZYJy16uMPhfEEhMoswoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VuPNXnCG7g3g91dTY9PXY8vXnRLgJTdXbULh1R1dMQ4XLwdd1N5wQAWfvwJTgycmBS41fm1FmXKUy7kfdJEggAK",
  "key1": "24q7FuH9RszpWz6aTFdEAg5qJKrbkrW51y8kvf2qerdGo9xqaPjMfCWM5yQr6qCuZoBXZCjUSkmaVw3KB14qZVkt",
  "key2": "2DrvaTHQ2E9g4HhUokVtPXggFjQKjV9oZbchmHpLRMmdopPi8CbiMXhYJsqSrk6siRyB6ZLdTNXUZsxMN58umVue",
  "key3": "2q34txWxWJqQEvfju6ws1vMD9uktbP4vRT2F4eSpPnFKvJV4eYNSRbfquQcoaoCc2QE6dKmKSo9MTagnYM4nH5Lt",
  "key4": "33ZowH259oZPEi8p2nLatvDo2Ggtzwqxn5xSFGmxWi5PFVkFhvD7hzDrU4dBBsUABvs6BWfVxv3UnjZ9N6E9HE4b",
  "key5": "5bxjJAZBe93GCckrHMfeRTMnquhLZVctPVJVAN2Jzpc5NU2BEDj6MbAMWcmDFYLAJbzM5FDuHrWMAbZBotqxuzgo",
  "key6": "2aVVvS4RZqNyipzbeHUFkdygxFR6VTfXpzSgUN5HSaNkBANZb4BUHJ6wpcUHosFk3g4KVLy2mtBcocvGFxZtetNn",
  "key7": "48kyBNqsSYKHRjrsQ2kvnno98GBkpNb7U1emDztXJ44XTc3SoXo74fh6DdRjZHBE8Y6KhR5ZE4YbocQENEHeZ3gE",
  "key8": "ggGS9EiQZZm1yXgyu9mkwLpYbTzgcH4siMhJyfSrfWa7heSkpLyR4pngapPTPHJK8ZqiwL8Bt8ra6MfKVUWgHTm",
  "key9": "43wCX6mbjmLp5Y2Rj7HuSgUH9Cg8TmHtWi9ochvAg9jVBFKmkH1BfhDZwr6Rhg3ki8wVcqF6z2KZSxGwE9rhVCWL",
  "key10": "5iCZioMEJfR5EgGBbKi5coFermp3yehAZUFgH7i19c6RKwWvXFmJxqtvXikPANsDGLbdQk1wKaSxYqYa7DBLMtPt",
  "key11": "4uCrCrC2EmhVQpXCCVzfHy1QLTZJpBVXcm7CnC8zwvCjBnxbhPx6VgUneYmmB3L5e8xjo73D5BXf3obNPyj89hVF",
  "key12": "49ZsNsqbFWJW1MYtEm7cfuR5AeumuMGwTHGgU282ECDjfExbPptKcmpenptwe5Mb9NA8MiWHKUmVPGKyzw2e3wNG",
  "key13": "VHTBirzLmw6W5xAmv6WrS17P32eUY9BetLME4YkgJbWXCMxcGgiUkXgtnUbhYcMceTnUJK5UH8KWvhTm5cGKoRt",
  "key14": "2GfXR3epVR3sa97SiJU5DKma5EWYJxPnddF7ebMmUbWMb4Sj4rCJxoCPv9jEaK7hVQaErgjF3HAKc8DBL253bRip",
  "key15": "5io1Gjyxdwv6nh9wZAS1JnWMzday5sNPuDLwUa4AXC9hcBLKYGKZat1qQqBrC87BfmpKYiPJPXBkjS1vzKn985sB",
  "key16": "5jXNXC2safFgkoeXsYM7vXutn5qfMmtGMHTSUEp9UnJJG85S5f2pgpQKqDwz9ajo8EhGZNpiGdNmck5PVCLt4q6p",
  "key17": "4XJVH8WPthTDPfSoCYdmaMxVVek4pK7ahuRCaTi1kzNVUaWTLRcRb77J4wWL5SoJvLg86j2LSLi9KAQL4pYwWLv1",
  "key18": "35xiiiKTeEN6GyQuLqFfjX8vDYed8kxf4nUfJRgqMDFiuieKQnbxkHF4M8mDHyCvDNLVofpTFb1BXa3d3qUQd9aM",
  "key19": "2gjdptyW2bXEBWBPxVnbZvfseWm4cL6s4mhs9VrhmGkDQuiYDUg1Z3mwuYmpAeXGy12meU6yweBfpGUqettg2Wzs",
  "key20": "4ZBzkHz4rjukSuXKv4YJ1iqroAX9WAa817H56zDa9gtor9q4Dg6DpyRd5zomQg23zpT56cYWMWusLBpwZNd7wDoN",
  "key21": "fRb3g5uDGEZjN26izSWhRQ4yHkPvSB5uogg4n7fA58kGzcHZUh52PEZS8iYZGmTpEWHom7PEdNR6Y8Vm98KyFM3",
  "key22": "4mZTjqTiP43adjB58Ehj6AHAvhkbwhgiVFMZCC22ayXj7D75Nv17wkzuAwYHWPkJHysYMW327FFhRoQYLcv5bSLX",
  "key23": "5C6oe2dRSkn9yXrx7BEvtgnQ9pRsQxQKTfL7P1ZyECFBQfdL2a3S4RZBnP9p4f5a1aQx3AJVri4KS7qAaBUnyz5m",
  "key24": "4Y5a17XLUANygHiNZUCfFvoxEgg7SQmFFP6a98HdTVXsmJXXaTLNjy2N31VLw69gVVsjq9xuD2guDmwqe4umNn4j",
  "key25": "2HP3nhwrufZDEJ78KsDPACeyAqxMRv2QC4Eds3n8aPBAsLUK4QzrbX7gJBuBUPkaKMzp718mcGGtxgGQnQVXuLC7",
  "key26": "286cG3orxwFLut1rh5BGeGLUDj6Qxt7PvGfuCCWRvgwZ7RT72BTwdZPkbnW2rZRyf1LT4vUXC6P7SkR98C2qGgbN",
  "key27": "4kitdXmp7FvtRvXM243yQseQhTHwei1Qt6i4RStaY39Fpu3AhjXZ9tHZaT8AVuvJSnNjBHjvB9kMdeVQVMCTTGni",
  "key28": "5Gbq4L3XWBQkSzgzJre6Ujkwvy7Bd4NMGSJuZG63XwzTmL3ynG15K283rRv3SwkTpZ4j6imbpiiKnEVt5ZfaV59g",
  "key29": "SBPPi2mNaxdnRxB9gznL7cHLG2M5NKCuvhniH4nEb4MTB2SFwX39EaPHojBXVv3bW14oShwAK8YnjcLpD3VuEBB",
  "key30": "5pNBS7dtyzkbJ8x8HPD7SMBdEWuMUA9yiRd4VhrnYBdjyt2DRENbE4Lgtsz8GZNX3NHHeeinMAjCv1q9jtt3DhTB",
  "key31": "eyUbt3QcWW4U3ECezMsQvC4MkJi1B3Re1jirsXadeHc5Lb6Y9GKsYh2sYSy7rv1AKdM5bP18byWZTt3tmZ2DF8U",
  "key32": "q6Po5nZGzwexLTdhhEbgwtAxgWDbvyqKf7B97m3Atn5e3EzjsMFjfSrn7rNLzjxosjhAoEMCVqh5LodW5BSZJmR",
  "key33": "2eLQ9df678vSVaEP2Vucbf42FgBKTh9QDbkBHffiAZ3wk9GZn435NZfC736JtcsNRrsmZQHrunhvLbKM7irtxdXT",
  "key34": "3W767jcTPrgGprPnotpTKNgUMJ2gER5cBqrkQ4b7XW3TDJKdbhhN19Lhwdp4MjJfYSe631SVeKN7p15JbD6AQyHC",
  "key35": "5obs9zNDqidoNK8oLasjvZ6389ZoSDTkfnRADUMz7vMYXaimmzu8Yjq5M4PBFbDKHFKuTGpydvurkBfxLwYkYeud",
  "key36": "mZ7irJPXTVFiV4hfLj5Gp6uoAdMRUtpvtGNjhwtGiBsEG3UzaKeQdMqVbNMGEnn714NfsATjnkkMLmerzjQww7Q",
  "key37": "5Dgd17iM8Co5dUwXSQHmCJY6zvfAGfjsEvGfcduuV875NdHVWFaimWjiT7iuvxYipGmPR16FkKu4mnyENmg8amfu",
  "key38": "5ToRgCvQT8Kje7VEwpJnmTL2AKp5umcMtbj8EnBPJyND1gBU6Dua6pDR25zL2eyEPgd3o9px88sP8zDfApc1MQpd",
  "key39": "HaDMYidAdMVe6aDF5YbqBK4L5untBQQVnxsLaXFTsSBcw6u4yqJQUK51tYGkdTpvS1WZ85q4dHoJpKWkTbmLo6h",
  "key40": "2LUt4965JUPW3ymsExLNdhy73Th4b3v58W3BeojuFNZqi2wiQCH4jFSmWgmArjhfNdTYTkRZimyuqvvjxNM8yBoQ",
  "key41": "5F3qjkXAQpazumAwY1PxoLo96GkceBmTVrYcH5JnCf5UeYgZ6Gb7zA3SUvG6h5e5dDP6mmop384v46o7prZDSha6",
  "key42": "23uJUCNREgGzCpaG3QtrcorJT5QbUfF3b3PZdZV57TZ7z6cULeSQwpH45BHsqzqCSMK8roNX5kJcu5fcy5dBCPc3",
  "key43": "2B2dEh4uRh56NSsb9Ep5G1WP7xD4m6Au4kE8EmvaPB1cgXyyfyM7sBgSf5m83PeJ7UXa5kbKH8tU81EkaMrvtyip",
  "key44": "2R5QTf3Y9T69U96kwmiUogrhnpKi5bR5uUVHmnKuhmUeC26TzYmZYWEGBVq1CUiGNX3qKQGJMvxRWyEkLe2mR28L",
  "key45": "5uuGme4ZGnvRYG2MvfiuGnmB2NVzbrjE9UwD8fihKRuXFEghdygKJE52Bw743U9Z9hmLPowXU9YPpMttgiHzB5qb",
  "key46": "4C763zD7V35N6om3XZCVEwtps7k1wKd75bRvsBQsfypj9bKKfNSZxZdUAtaYguWQxDQxosxfATJ3PbbXTJ8uCnE2"
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
