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
    "4sLEWiT88SHwdSR6tzwWv1LLPtk348HT1WVVcbF33ubdW9tBLwazwLdPbZz5P866kNHQC3t16pMJwMTHNirWPJvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jo2N6kXNK476kuPm8XwN7LkeGmMiFngTp9Kiej1hm12yizq2JQ8a65o9YSvPkoHjDNTEuomumBhwKHQCRj4tSJ8",
  "key1": "HGYibev25K94nC8Az2zyNV6w69GhCTHpXvkvLcZPYbMgFEKsDyAnC4pjsL2sZKaRveZmGi41E7DLTCWm5zE3a73",
  "key2": "52t2jGdUV7Y5qTXRbXNpGjXg3DqTCPqYFZik6ANQ5ywTeEfTkEAvFRxrVfAfp8KF5V9AQ1maxKTb1CdyrXmMvDMM",
  "key3": "2yVqCFUWpL7dZm87To1UZZyQj5QD8TPExw8erdqyLkAYsRoRH9Vio1pCVuF1wk25mo9xRv4PABWwufNeHaH3N4R3",
  "key4": "5JP2jB3CtdyhHxjg7Cewct77FxJeo1Xuch3kUzzmLfovgGJcE15LteCwyVwwddc23v41cZzMft2jY73q8fT6tnNw",
  "key5": "AwTnydtLgGRf6SvDsY469qcBH6vQg2Grcbaz9Gto6T6aWHBJb9EQok4wjqtMpYR2bV14cmBCueDSMBUnSyXby19",
  "key6": "3Pxf7MZX28BX6JPEBV2UuPixFoggnPUbJwDzqFH8dT6hJGFGNt98GpbgGZbtCs8hUjqHw8rf6SjjAacvunv4aFsY",
  "key7": "5J7MmKdupyBc8kfSgUyZ8AKZGPur55hS7wN6Vvq2vRbQiqpqXesyb9FC6J5QyMKDCGMuWuW8kSetM9FdXN4dGNAK",
  "key8": "5oUNVK2CUBCe6or82wBTo9AMKzpura7t9kPPRPNt46eG5weS9AEGdhRVr1kTgXxbwHEKNPfaTgosNdzyBRHzAcKe",
  "key9": "2YMsnZfRYUhNabC7joYNMopfxf2q9BphTzPvyLMHUS4P6VuBH6qx9kqszmDQjitxoEENPSxS7vJYQXJQJCaPKYob",
  "key10": "WWWL4ZnUtVNNFGTDxeWjAN8WVwr6wKJS5G4zxa5tMPvPRR85mCfooMmjFYDrGGys58s54Gh4LBpYP39w5W28CVz",
  "key11": "QZ5itDxDp7JmxRkSTWN6TqF7b71rhpRrVN95fuoLiu1kPJg9AvaysuivvtVKESFam4bHkeB5sCYwJth7pcnd1kQ",
  "key12": "374QRsEgx23d7ibdSZ5fEP9ZHFpGPbZm2essChAy2Ze2J2S6EXpo5hrtQmsoTKbfRjAuVtgU55KAPnu7R1MQAdEK",
  "key13": "3i2hrhkLqjQ7tRqiZo4y6zVN6SECyiHaMzKAH4udBCdjQ9Dczm1aif19y8Pz8vYBX4U1k6ngrsxL2dJ8hcL1j3D8",
  "key14": "4YgTkoxdsa6wcTQxdR5Q19HcD8m9YzuKVrUcTSvd35XXTSvrJRd6Jkrtakjhdk73KpbV7VNVnfdE2QnD29XgLDWr",
  "key15": "2J6QvTGDduL9jtnNDW9WDLdY59q1tqtY6AxfrZ2cwkQRMD8KHo3vWzs7xApsfez8Qy3rNLNfwH3iFUaGZYPvMkEv",
  "key16": "kLGLtaQZvTjmSMbmdvjPg3SGceP5jX9rgHKaDU7dahpSSLbHpVT4J8cBBknsgbR3s27LDMHuW1JDxRzNUt4yCCr",
  "key17": "3ATpeZwETUeqoXZY5depqku1vzhtEe2LpmHg8EyVAwWvgYzAgWc2v2GreEWBWrW1hVJu5ArDCS3Jd1iW1gZ4VULb",
  "key18": "GJA44dYsjy5nZ4Te1ojmZP2tu19do8jEegw2r8VXvSv7zyYqSofSju5QJhQtcPTBsSYdCfwEwtsrhaLTeYbB5Fq",
  "key19": "2hduMJmae9fVwnUZbm9YuveuozAY27fFH58Yx4BPNeVuzSeM7bWHs9awUZamEuYkwcVq85nEtkPHu2jHFeT8P4cn",
  "key20": "4zMbBMATabK9cwxggXJKpLNYYkb1Fivs4fqyRrQacpriCiZPUB1TFnTyJzNW9PVbnCmUHJpVt6vxGY8Reog6Ui1J",
  "key21": "5Fi1bkDvRdB3qSwZqDDMKtoyNL4RtQcJUJ9asHHLgmzCn3VVN3DeuCewdrt6GJfBa6Ah1NmWb7zrYpnoFTUtsTvi",
  "key22": "3W5zZUS7d6Qyo62A5X9Z3Ta1hyMwD3CXwEAWVh17X1DXHebS55wc3MNMaXWpwBdPEWcqRNEgrk8DhPvphU3ua5et",
  "key23": "3AnNVDGLqaotpVJ23DzDDoAQY9Zx378yypdvPumQRLLhYFuE22saj9NUwKdmTpmro1UMCX2vZVcopnndzztVnZJ7",
  "key24": "3gdTar9sr1wRFAQAagmpu3wwsq5K6tp3bGPweRFNXgiyR1CSMAaVWhZu16rXnsUQ7Nc35BXpcdRhuAyH8eCrGtqN",
  "key25": "wYdPHYNBSpYVUhKaqfE82bCBdoZTjf4EXh1YLNjTskTyTNJvxo17w67mtW8xMXEYszs23uJkXM9dPqnvdaJjTfH",
  "key26": "5tVHqmakAxovfAB4eNgqiTZBKBgmkhhMNufyBGjDFJpgfrRzwiR1dYcBxxs5T7esKLuNfxXLhXprWVU1HrYmYV9o",
  "key27": "3teLfQ6Upk24y5rTm5fc5Ww45grqaPoUrBXbQWoqPwXJeoGJR1TEJ2Jv1XrWjKDjiCH63jimYrNfKhnbofnotBgU",
  "key28": "3p5vSkQ1vTHzoBf2GkDp2Jh6CFXHPJ6h3yb9YpNUJHeCEFHn9DunTkVobrwaXjHKG2KKxwxJfMawpV9h8xiYzMsR",
  "key29": "43foB74piFEcp4CTHNtQsiRXmxUha9wZcsRpMb6oSJE7rpUBZLHj2K3pU9QpD2CKSq4YWxpqqEEyC2SbPPLKWja2",
  "key30": "ni1z1iBDhXmPRSukS29A294cim8RqwmpGN1Dr6AxodUmAYp1MJyADmzQjyQhjoCdL5eZMhvBGUU1QUcW8iwCx7X",
  "key31": "3GHpYPhxCAttBm5YRP19DhN2sU4WVg2mLxp8V2CuWuhudw3CkZ8V4iHq3Y7ZDLdopLXe921Y3tcB6MD31tvUVyJg",
  "key32": "4CiKTFtcLGX2JdNg27JUV2AHDD6avru6R9iTrKAaChH7mDjxVPhdhjhN9t5sNwPmJY9MFFieJuQMpBcYudxTKQYv",
  "key33": "m16vWahiSkb5L9XxoogSUCcRhMV61gwdz8LJJjWMPuKrkPXZ7tdQCJ1sWxDHBsrfniRJsonsUqQJ7Gxt1JdP7dv",
  "key34": "FxghRa2a9ThGySYmKS9PEqxa6AZ5zvaV4bmPgnkNfmJ8DZWfzbRUQE4muT885CqaVXH2hXfuDNJtBEFdkdyvvRq",
  "key35": "8JyxwiQ9ZZdVdGcp3e23Ko8wyLwCkgA1b1xzKVkoZQ3nU3H4zBKZwZ98aXPxMhcKQcKGCVYnVTo1tuPsNyo4rsb",
  "key36": "3vdiHMf1bYzSWqNJ3ZYCg8DRjKMPqMapwPyEBsDa7ANKSacxzTVuhKvGPZZVc9QAKDL3nLJEZxUp21tiyQqCbeZn",
  "key37": "3nej1rExfVmfRMF8yFH3MLXxJuvgY9m3kABo2MmgJc72yaDJpbQS1ectU2ZciEnZHLeYpuACoW5gQphfPSktpbir",
  "key38": "3Cm17wHQVKdcsXnQcUu7e8xz93FPCzbLdocN9sYYKkma79unRmcpW69Yf6nsMckxUisiHDgRfw3248NLTFB7iSCv",
  "key39": "7p3PGRivFvFzPjqiV9pgRSEEmrUXzDcNbZTNycoYofiv8J4EDVauf232p6CYJ6Zi2A26XHdByrcyrZUKBqedu9b",
  "key40": "yJeF1xMPPZt1SeHQ2BUXq4xqioSr9uBz7iy9pQMQgU1HBhPfKwkTQakLZEAJ7MFxmLPcfd6AUHSJmdLV9DjTbBd",
  "key41": "2S1zvgAqZhiVuiT4EB8xborDjSwoNPgq6FQdc26w1Guz3pfpocw6yDiTcQbSnkZ6CJNkHaoJYpJwy2HXEjHPF49u",
  "key42": "rWmn2LxTaLuUfQapJZy1kcrUMDzGafMXcxpu5TyT2UYLDWn3QU8QdpXxoViCpqNh9ongRhibg6HH9iNAZNtkbfK"
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
