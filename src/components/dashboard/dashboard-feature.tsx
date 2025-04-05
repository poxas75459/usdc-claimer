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
    "k6tja5raZia8qk7W1kinKfyUrGj9kr4kmvMfEoPF6s8cr5NaGLGkrvCeHMuCzbLAHmtLnfHcS3jHtbnwfRMzp9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fY8YDoTSfuMhwfSGJ6jt6pycdnncL7HvcZfvdZHkdcYeau2Wj5DrX6CUzYMosttCmzXVCAohorEyKq6wZEsyKhC",
  "key1": "58xW1nmtg3rHethoFzfw7mSj242AZPsHCw5LYkGJ6dm184euhT1oNqmStvr94aphKNdmPP8ZwUCPxvqGwq3nA1eJ",
  "key2": "2N5xL9z7YPGrZ6UWGD2pH4YdPWsCxGbfnGK9yEeCL2LujVHW4LMriesTZ6GWSS7BkfbVyj43chaTWabqZL4k8VBv",
  "key3": "4F7Lm5qx1cxA1PbnVRGRMrNRSLAiVeQNCNxRtkPWMrCbnP28qVJvRJCZyj5ELcbM5TBhFSrAAkYcdHsHWWmjz644",
  "key4": "2frorKAhTTtsvoNabfL48bg7uTcgEh4tekUWTzzqJZcmnpmydALCVsHgdFZS5R4cS6b4NMtZJGDZnCU9YNTFWg22",
  "key5": "3WQRgKBVpjDb7YkxG5Jz2tXhY3fH45z4xVaxXKtsd1qHHadURRfX99tXABoGUZsD2DBo2ZgCqXbRS1hJn2F4eRp7",
  "key6": "4BQCU4S8ipaabex8RPaoXMibp2jnQEN8RnfsnazUeQWVURhtyFKpQ2qAHmVwr3LgyiwCyjLtrMM4Z9vGvEgRwZVK",
  "key7": "MjvnyFfpDbjoXSNJfyFy4UuBiuB2RW6SKFHLadJUfQQBzQTyMJHaMosRYdk97oM3CYX3L9pGU64B4r9o14rhRdv",
  "key8": "51rTQKgAcFNQz6Z4XTeBEeTzF2peboq56reVUuUyUwh1ZkHLwRXQnvTXsvZ9RGRmSjk9bybCxRnkpqYLSKadNLAi",
  "key9": "46jAn6nbKwXz6s6cKF79Qa33McGL6YoYpFgFg8GUkkcbUb69fpDWXVA9nXrCUAfshpGawtF4yznFM75Q1eF2oruZ",
  "key10": "45CdGQYdeTA3FJRzqhyNjcZfTtQe7MLuu3j1rSWhKTD1voDtzvweJwoWHtqv6YV5Y9kibjwXkYqY5MdGZ4oZM1x1",
  "key11": "5LzoDRdEXTbdPwPui6iHT7qFpk6tud3kAup7ZoAQhFB27vFyNYMd2fg42xSMtfS4dwCZ7e71sYSHdekwo5XL7mmN",
  "key12": "21LyxpQ11jksHWggYRFCtqDLBAsv9CnrALwpgWdqSRbHH2SW3k5Pvgd78TUZeDwHNXiTFwFkqnRsaQqG3jDXeF3A",
  "key13": "5NWBD1uVbzvqTyswCLWjq7b5FXG2jAnESNqDxRNF3L53PcaZyjUguK4osEALkjDH4L7yxo4p35RvTkbNMKjiZutn",
  "key14": "3BaUC4eLpMpPAyjPHQqbyL2jL8U1RouU66vQoYC5yiFWzzCQarNHDJhb7CRMZ6qMevAxzm1v93oLJMXEs84A41hV",
  "key15": "3Xywt9v1nDVvU2oZKq7oa7LbeCbwvdjUYwuGJA7Wv5GFp6TcNkcoMAo2WvRC9m4vyH4GXJQ64dUF5HFATd2fWoQF",
  "key16": "4FSDonKq1enCJxY4ehwRuA4jGrywTjUCLzEmoijtNQh8ftczNpNLeUkzWnsRbiVvQJ4rnhSGaBZy8Uu9FrWTNVGt",
  "key17": "oW1WurZbGjXwRU2ngkxuquz5dmXGxQxRHQm3wxvMtAUEaDnWWL8opf5JbN5sDzFaPJbYhFEHYafq29KKyAGrNjo",
  "key18": "4Xhb4b47dTxbwB2EAyTzrRi3p5D2UABWwJNCo5m3F3ToMWjoQ1KhpinhKYp2QQqf87nwyfKB3YfixpJVUbfdT13q",
  "key19": "dgWHubc7MzfC6trQdvePshApmeKmPZMyitK2d3BcXRouTqx3wBat2xVaAdP3EyHkeHnRvbEVHgYkyMdddtEzUj3",
  "key20": "26YvxMiNxgp7SLXv4KbiiEdEFGr4ZG46FHcBVeWisfVtBmZ7GNA3Nka4ga4bauQV3GRGcz1at5QZ5F7j6TRSos14",
  "key21": "5bqVNuoCStJB4Fe1rSCrbAqQyvjpHMzYP5X79xedRFLav262Dyxgq29Lu4jsQodp24iWYoVQAYcEu1gdpypR3Sxn",
  "key22": "5TSxqAtufHateieVgH1ZyBufQg28xxgPXSoPMMXKTL3wDYUKnKGNqn8VubNmqrHFdf2TiZVhXNiHBeszxyBa8uhk",
  "key23": "5P6edoAtPZdJtE4PZk3MSP1ULtbttXguXqbxyrgAi3he3PRkVj2q5H8PGsM2ZrAH4h51e6MmrNFf3k35fwUPwvHg",
  "key24": "66L6CBCJUQ5ViVHsnnLEACbPiA3AoumQhvRdK4MxaySJKYX9CMna9ePoWRS1ooFyvcGWAG566kenPwacHg3vhmqs",
  "key25": "3nMNGeJJHdsouZqBdfBVhHgBQZgR7UvY1ftFjte6Fv3biVFxpZsc6ds5j1VGs7VmqQLm1sVcAxkZjidJAa2zyPNC",
  "key26": "4qVegPxPZNrAeqWx7gWWchKNaQHKJMDdyjGWvvJqJbKdqVqj1tzARNbSA2sLQqMTm7eEozepniHdnebbYMxyp5p8",
  "key27": "2S78TmmZSQg1HQboREvqiLVVyqRGhM25Qi4nr9XKJc82rrQ61fMtXoXkedDeLTZDyQjPLbAJW31pNe2dvvChwC28",
  "key28": "3MYfBvY2YmJN3Ny5djThZm65ZwRzWZwynndNb9D4DXziLWoXis4ZRyHimi62p5z5GCxRHwy97CRgXzDxyHxUsjVo",
  "key29": "45RHYM25mQYjxNUukpn6hFinrrHW4aKgURhACCFuy5x4SMYmasAgd3R8mRPv9u9ZbUdGbnSjQiTQAKmdcir3uWP8",
  "key30": "4oCmV7nZi13it4J3bwHaXRp5fJiAb2uDuNk9w8bhMhodkFNQHrXD1NFaghhyp35k6i4he6SuUUyZuqxTbdkp4n4R",
  "key31": "3oj7rgJtsDxJ6UapWg9tVpzgUiTrtd9HgbXYSfzKMrAKf2jdARv6NAVq3uVAKM39VR63B9KDidTsoBMmvDLpuHUQ",
  "key32": "YQCu6KvRbexiESn5AiZqsTgNEiXpEp41bMXKdnoDuZfQaSv2Jq7xHTYvKhVjX46nt7773bmmW2dvmxGhEFTkEfu",
  "key33": "5diRyJtHX7t27sXRtFCtxoKmfu9WETe1yMB2w67ebYPTYz3MJHvFVJ3mgE312PeHwjtuDt7reKsCBA3aGEBCwkGR",
  "key34": "2a1DqNpk4DdfvsEqorgDye1NejKhwPjscn7L2bsMgMPpJjibMora6bmotokRFN879ABBoLpUvAdjUud1bfVNN7hy",
  "key35": "4pM9MCPXQ8RaKdzJZxtpUgWcjp7pTp82kgfFDGLW9bEWneC8xr7v44BffknNt692BWVxQo8wtacRaui8YxtyEtRz",
  "key36": "7SNnW7QxgmV62WyEricptk7kP4FxDT1pzkt5FxRLJy71i3UzMu4wrBpuFimbgLHCxRKA2cpZC14pwNtVmYRWFTm",
  "key37": "4iM4Wn7gm5ps9bZ5quiLyQ88WiFCXpJdkFdvnaaCFj1jnpJQ2PGGkdvHW6bpHUSMEig9y9ULGubrdty4RrojByzf"
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
