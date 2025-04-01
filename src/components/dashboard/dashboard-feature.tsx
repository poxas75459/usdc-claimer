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
    "3XsQzzBDwKDS2bcqxehRwF2WNvSQMadNoAHB4Tfcnm6muDCBgSYCn7aGQT7JPLCZ1RDpTGpLbd1hhZPLd7uxxuAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56QD8WNtMXPS4tvDyAsW1w5g6VNHEbp6Nt9bVx948YtHBCrGntvLKDosgZVA6t4kCsy8m5pFgPtwqn3nkXtZGQGx",
  "key1": "3LqDAcrvDJjrbR5P4Gr1VADhRfPAz5KXqS2Pwcw3h5hwwNKBmwqDP42Vt8fY5gwsrcmMqDJ6AkY6qzW6yjEGAY4h",
  "key2": "31JVVPiV3tfEzH7BjFwNarsUmKxoPjncrKPXjA8Fri33PeVzC9bfpgqEDuQy6JSCvK12ZsLpso2Z782L8W9hek2b",
  "key3": "2WTqqny4aHn7eQkaPgGpNTt4xNi4J71QdhQiC9UqWrMGA6FWGQm5dJkDSyWY5SGyPCfnwCb7sFi38GeUKYVd7CA1",
  "key4": "3EsZUQ7k3u9SNhKm7SdSr2Ae8WKvX9S31raf6VMdMYPB36YxfyfQh94h3MrRqFnUKgvNW7Pe8Mm1b69rK6Fkg4Wt",
  "key5": "Ey2f5EyShY9bpWxFxFMYt9myhwAVgtLFceHtCYDRd4h5ruPn51gWXb4MF9iNpgzDvhCxhE7nbiMQEYP88pvDq1L",
  "key6": "3wCAoFS7FCqz8jfRy1VTvkrfxngwPRGmtJqe8DAEt8RhzgQkEZ3v6PTFUxYN1Stb5byJMMKL59qjU7mEGMScHMG7",
  "key7": "3f6WGAi6UqpEYhnZtNhS9BTz5jQcZmMfobc6BzgguP9DUaRLgVP3aNY981166nj9b3JoRZJUfDp9HLkPyKFziava",
  "key8": "AyBeVVzUHFyeEkHPuSEJhJkv9XdWCifcweF1J9Q1EeMAhmQc7WQBoYPQYrdJP1h4H1nSZH7gsBTQczp6anUf6UG",
  "key9": "3q5u9DAVq8isAP7KWFD3arz3UfQLWYi5SepRqQtATQgvegiqDJKQ9EgmjAz7X857y4m6TJm5Mc2qfbdh9k3Ay6X5",
  "key10": "uq8snUo8hyWqwspyiZXHrysuFv6KmCyFivuyiv6Aqq1Rcj4MYHruHPxwgrkMVwn2dYenvFrY5Y3zTMW484sZffU",
  "key11": "2drVMZ82PCNoyxa14Xus6QL83LLsXuPcHFch1rdLVT4zdPy79hpWU4mQMdvs1QuK9Drfddu66fFFu91HfH5dhEeF",
  "key12": "qs9KDKiW63X4LAVu1HxFLxseXUue1wGrZRUvbTtxW8iuExd8d7RjuKLvjJTWdV8Xt2crpmLtX6sL6zdDD6zG16d",
  "key13": "28U57x9PmcGMAzdC8pN8R1NzsPcJjM2EJqjTo8PT4WUiJU7Hkf9NjkbLy5sBRcdMovnoUcz1jeoJ2yti7c1Ectfn",
  "key14": "32JVCtGRbjqY3sGSqkEenbuut9pa7Vk6n2fTUgYwe3xN1xpKznRJTPc1PaukcvbMAmgCr3YyNx55ShgPNSn9u8s",
  "key15": "2BNB6hehmT46rsz99ESssjM9fudyX6oi8G64pXdMeg5GPTRFxGLDMnrEAUfR7hFjvZ463B8ukR2TsYMxHhqrhzr5",
  "key16": "QeG5wUE136ewsNbfRAYjgVth812Fb1mdvFV4Ti5y6wMdE367YUSH1YH7sjSdh25uRvnWttvoExs1Bvsva1nwkbL",
  "key17": "5KwYtm8c3Rz3qzE1EppmGcGEMnKV5d9SAR7tSER77jTEH6ymdMfC2nZTtkwzScnQVb1jPueEdzPnHr4nWEVAxuMt",
  "key18": "5n2sWpCn48YcNaZY9NrFNdLWCeAc4GPNd8wQWpMHtCqSV9YbT3tpjYTnPdjLbTUDjLbJss479HwDCkVhDZwoKgr6",
  "key19": "5TDSEPCFkL1PQ8541PNeGhfPnpx8cYuAzPjKKraC1hBiikMnXvYcQmCUY7hQKMMAZphWjrEW3ZHxZdKhuUg39Df3",
  "key20": "4eK6X3XKzirNHMjVUm7oCqaxMnS8sFdGksJuJizAdNPLA4RMdepyaWbYioU5dS9ne3i39YGGHAeuqFJuWaVFt54A",
  "key21": "GX6Lj5bBtKEQuVyYnsLjS2yfxyeX8dokzCepvC8ZjLdnhXPEK8wcBFqghRPLoF6V42dQLjod4iuHCjQdWpvNqVD",
  "key22": "2ZCTS9E2dVfLDbTjAGQw8a8xdJqMt8EDtdkLvNDAa4EG3nzBE7dgsQZdv9dUxH8srbSM8r3TxcAuqSXF1S7seYqW",
  "key23": "2GYUFrfk6NPxHmgTjbwR4uVdq5ZPP57MXp3mrMeJEVjfHmu5SVmTVmuQBXrVLFMWwZ1o3V89KGKs3bWAndcBHr9W",
  "key24": "VYTNhyhpUMXs1HzkFuf8T3A2sR7iFHJE89MtJhH62GgcWFcHSYy7Zwh33AL8DdvSMEbMBRsyS4kRKHcxdu3U459",
  "key25": "2M9WG2Nnco4vFLpqBRfkaPJ9hwVLjoSVHxAgcZeJzx7FVVopoQkgdid7wrXPFaK24DX1pgAPM5aUQ95hDqt3WK4C",
  "key26": "2voe2wctGVwtuiS5Spi9zKBaroaTAPv3YPmHaC3SABm7cUn5dwr1yn8Mb836PmbKvqW6mq8VmtxHzgZqpCmboD8e"
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
