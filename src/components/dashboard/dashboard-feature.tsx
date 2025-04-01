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
    "4cDW1KgTPjQ5jgsRUDYJhdqFaGX1pTMqpWD563YofTvpmKZJqAtFzateFU55R8HyXQWheYojWFFvaF9EqEzWk2FZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NDWY4B77RdniDVK7dWaCJrHrrWbwdwxPJt2MxWnyVNH8nNAvqAfMpYVcvuszBPSvfzZ4GXSRkT8LaXLojMFtTZM",
  "key1": "46Dm66RJaS8btuxvgHDcYhbPrvpmLxVyRSHeSU4HS8daQ8qdBJ5y6J8erj7JpNhTfWdXiTDARRsFMYFz9ubAAxCy",
  "key2": "2LMPKim2JQLBV8mvYg4LgDQouxsNPoHdzJro2x91dXGCegQmRq2jqCVw4wNdWb6sZdt48NKRuuDrsXbQBdSDWJxM",
  "key3": "3S6U7TPM7xbnhseB9aQLHy2t2T3WqJaFWm4V986AEQocBCfufgDDCviGfEqrWbMEANtcgD4UKaZCd6CUr17qdBKj",
  "key4": "535ffLgdcr1qpy2YsiAxaUeEdr1xyvFpLR8veAnWGyxvgD5SK35pPvRq3hricbnavWtGJE5jwx12nctmKTGngq76",
  "key5": "3eNLx9r7zWJPCUP4NdSiueQGimq6sTeEy7j4njaakeHFXqp9PdV3a9A8LznqECwK2745HqmKfs68LUhUVgsqXNjt",
  "key6": "AGRzzJpkj9HK6SqjqY6PsmDDDDdtc3RBE2dak2BEn3x7U4p5gdbi9WiWQfnpRYHHwME8CM5NBhUNZuYABZfBJDg",
  "key7": "4pKQBghD4GpgF7hQmtcjpwcj2z4MSJ39t8vs6GAP81BgkMb7ihChTnnEwsc7V3AX6UrbBm3iAA4GwJK4aPcmFD5k",
  "key8": "41GvmzULwjNzqig5YsA2aMAkJvtAP3RsomBApZe6NRWZjFMmjQshTyooUMnrTsq8xMcZhQDZa7arg7Vb4W2Cq41Q",
  "key9": "5Rt6DZtjCqESpLaKVvGzuBg8x2KvPt2J2iTD5toEmiGsXLbnuyhtXyyJuMyxCPZF7aU9XnB3gsLkqdg9zrZCGMCE",
  "key10": "5q9kxU5K3xwatXFJbpGstLdRhYRqT8PsbQUwm2yGbwEvcuVysgPXVAyhgmbwi251e77gQcwbwyMH55NiSrtCWjf2",
  "key11": "63qUHFwBaq5nRMDyNi1mySnaEC6B1XRczwzgpxp5xWfJvwsRfvspmXRdLC9ZSEjAzH73Q3y5axLtxKjikeCftLke",
  "key12": "q3UDMHeMhR93PA7hUkNUntUfNSWdTEk4kZE2ag7VQiLM8L4JNsDUmqJ4nof7jzzZyiA6wczVtdxnXMizLaTfCwy",
  "key13": "4w5rH5SoCDrPj7Xrnxr3cMoGPPAJ8fwp2gMZrHNmds8hVNG2S7GxRLBq4YFxcM1jkh5JKqpB6TE9yHa8ACUo7EBf",
  "key14": "4ksAcSENyYukq74HABSGMgSn5P13GFuwQjHDHBrZL4cVsssqaGTqmMkv4CYoncQNFF1MzR851NPZ2Shdz1TgPcqY",
  "key15": "4wpMTZNjK56ATWFjhmdUCzwNG3nf6ra1xLbgj4sCxeJY4FHyz7nd2ygYaEeras7TeKSB1bCSs7yNxxJGDoempegU",
  "key16": "bBYCHwxtLd7ThEN23ZqkcTVhaMgsAYEV5tCLecNQPyUHhv9fDaRReeUjhvRW8SGNSR9GGw7BTKVBwgGoPcwUmma",
  "key17": "5tsLzHcFEV9dfKXpKpK4uCMbb5VvwPyNL54Wgxn4B9sMuMRDSL44q5W38ZqmYAbUQtpcK3PUeXvgfAKNL62nd6YY",
  "key18": "5ncsY2cCUeWkUkAq42JApg6XTVVZRLuDS75Kzz146rns4iWuFRqa87aoeeLq1RY4Y2Hu9tfBHhg7LCvEcwtiHZLZ",
  "key19": "33gad5aoh8H5ZxpHxnD8jJCA2uNZypqdEhDQGsEApLiYd9VqyqkU8qyZpabgnR7AAzbRfByE1evJhs5g69JEEEow",
  "key20": "4y9yo39WWF9uw5KshaWDbJp4ofh8P5w33252L4XD5bRmGP6pECQqyUHHHMfBz7D4TAnejYvMY4nXVBNs6J7eEY5U",
  "key21": "5JGb1MixM4hx3xZpKzNAqiv1pYzyTsiH3PTeRMFqhrJ97M3JnarwCwUkNy3JKZPSyEnkTPfpPaoQUpM9bSLkeTDa",
  "key22": "FmkThZ6EAVKk99sNXeNBVaXzyJduruds8BDLBrMzUdmyzcQPKDyXgNdTQDa3k8WfPgaoBf5cRqG2Y3qndcD5NeS",
  "key23": "5ybFhDXAxdhmZrdJZxTCJRWzDZDaG3jb6ErYX8CfH75V77hz8iu2bkmDGqAPVu1SidkAhVM9XsaqKVU4z2BZ2ChB",
  "key24": "Xmu1LgEReodiEY7m1EYSAagKDAQ6oryHGURMWfs8ES4YXYVM57LYCifTQsrHTxbLr8wX4giHwDBg3ptbCHLoUZy",
  "key25": "JWSqFwoD4KYY7UgVa5mcR4eKfonGDdKeoBv8zUBZim9Qkha64atBPbfYUU3mo4j3284F68DWu6c8qte8h2QWDtZ",
  "key26": "3dxLNwUXaMdoiuyt5bFAeTJfshbvu4g8ofo4a91NHrSzKidmyAEkJkawSsYmtSH99exun8HUjvcLSVF2qf79km68",
  "key27": "4XsWTLGiDmgsiJGnuX6vykLD77HbXgvSvjJQsnR7gMCubCHRKcNoSteLu1i6mjwaNQXy9h5svnWQt6pvqjxwqrtL",
  "key28": "57RLneno7s1cCMr1Bqdz31wXRV8jskStdTXmN6SWouE8PB5iuhje8XhGc9bkQUbHYiZnWT8TM213kxUzr4qFMHwD",
  "key29": "2Dc6TenZHyZPJTi3VyeS4shiTihZYTA1kn3GUjVrk8uNK8CwGPHcioWHjUy11RJAWztBatDqhH4z5cYDtQbgwkwW",
  "key30": "56XzQLj6Z16SxNM3HKUhDoBaYBhmcbwWgF1pr9QGYdN1btsrX6uvi9zL6VKLhu5Jb6HUeYGECqbnH942uNsUfS5d"
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
