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
    "5dPy6xKfbgncRb9wdhahB5U88xc7WdCmQaPNAug4kYNV8gopof8dxAmx8yinG8kWLm2AU2H6SYGeLZKWNV52buC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CjRRcSxFevaanrxZ9qBqQRh66RQp6pm1zauHztKczNWnbgHFjkm4J5o7SGGV4tukWnPrE6qPCTEZ1u3jsKbFNSG",
  "key1": "PDt4habg88iRqEj8EGkZknCavURhDjE5MqvkEh2TXHrrfy9NyYAFeWKKu4CjjefrcQaJcuHjiZbxfzbh8iCR8hA",
  "key2": "4NtBNJDggBADaVFJ89GJVbk44mrp75mPZVhChMjqiVzWR4MEGDTNHkPrQfLukg57CX35BLADYpj9nXY12f2accoX",
  "key3": "49frsGskMDHJVDGcdAjb575zRvwk83aXL1km9TVAmZzpTiTCHBqiaSBhFSiuHEofCZ76GohQFFqTX3aLjykaPdPU",
  "key4": "3cNADNUcL38Fj5S86kcAkm7y2EKW5cDspmB4rg6E1cCRRsXAs9QanSbbbr27Mxa4TXwZoAf47kgvFSTGjEKjitZp",
  "key5": "3MNdyKYaguQnSNnL3wAbVxTgeRhxKUMszwSsqb9xpBiNFk6b8P8zmtRPtyaRochpxiqQPtBKnrGjpKQYDMw2aKU6",
  "key6": "5WBM6iRQjdg1CfCWUGaKnjBSWE6n2qndc9zGChQM5RYhNsDFRx1QbXF5CdY6f5VdN16AJp8hZQ2uWk6kNkrqeQvj",
  "key7": "2SPvvSoDtKLjUi4qd7dvugHrztdYYEo8rAWgpxrBhFp8grkeFQaT3AyvyTtAjFQrB5ThhQqr2xV1kivRPAhoztuP",
  "key8": "32q5c5ahuANaKjuqCYTFTWY8URHBcLq4qLinevH2UBEwCCEDfYNHzRWhU7CC3Rek4gZsUiKd7UTDfn3VFDgZFqkU",
  "key9": "4oiZYEWfEhCcbrS3pGXcH9HySSLmRvLHnY9SV6ETtMv6jQuAZJg3fpdJM8DTgZY63hEGDzxQdzwRCVrwuB1R5jx6",
  "key10": "3qscw7Aa5owXL4v8pW3SLGidNw2DGf3i5A82oBxCH56qQxMYjcKBew35skdsq7rEAMuMixKgBnVtCjZ7VzwKnF4L",
  "key11": "3mCdfrgkfQKYDsed7JCy1KHWqEc2RLnWBAamDR5vuZkJfNd8jnQ1hWt7s1CaC5tMhgv6oyh24ybkbVeiwB6Ryh94",
  "key12": "21aHmMwkTUCaEmwsFHkr8mnUg7vNzF289eG9FPQXg4NbxDJRYzxREMu2T4peR5bVbKRoXWNYiAFEewuCicVyizzn",
  "key13": "641DgNF9rQRPk7LP9bwnzJvCh6wAdTBeB7CFxJV2qvBEAtao4iaTMEwTnFEV39T1UwrGn1VB4BFtHhpfwQpkum1P",
  "key14": "3KDuLSCG94CU2DUJduHEoDGAszh73Kk9MryUWKA4nrkQMsgmRpWFdeob568U3A6zbLsAiXyhtV2XXZ7k8GPLMYmA",
  "key15": "4FuVtYtGVVzieLcmgJaQxMsiHz3v7uqcCVZFRQLoRzPUJzaWr9ZWkBUaYD7jGm8dY2S7auSRVjVzJHTKPkecWJ48",
  "key16": "5EaYzQWY7xTNw4gAjXJztyxketKBUnux1axmMhcG5jRCNhN8H9K7449MTiYj4NUyq1RSgqeBm8ENadxqHybrSrm5",
  "key17": "27FWT5B3ESGtuKrgxXMLgcKLwzX4zoLegi6dWy25yAvzMmvkY6cYsRenudEcoHCMAfYt8hcVyMW9viZdia6MYbiN",
  "key18": "5iwdoMLopj7ezusQv8dckrvg3MY6qeAMW8NrNYnyehfZ67ZGzeKLamjLe3MupNbXhFwaSYdbW5KfnNfYMpcFvLFT",
  "key19": "1FWfM1o3ruF7JLArRGyGX1qKDZY8kd2SrFiUJoPsYZF48QKCyYi3Jxy7R4X5ZEHRkCjxhe6bwgJnfAjpvMzzTUA",
  "key20": "5LWb61sgkvpwBHu2345p567dqQGN13xsfNPqeJHy5nscF3KtRAXhc8r3qGT7F7hYwToEFzi39iP37kMV126HpZep",
  "key21": "2Yf1SSBGBnbAuYQMDggjs5XkLxrenRLwbTuufh4hdKz5DPBFmq37XYX85HYe1YX2KCHr2n75dXyRqduVFgVf9h9S",
  "key22": "2TZMRHhxjRwLRCW8wyKQrWGnbmuVFomc23rgRWXdipFeh8fH7eUyarAnLQVh42bGdAfSfmyVrGKKwdew2Ci4J6C8",
  "key23": "447cTGKQpwv35m7SSPPcMCNAAxiHJ8yPzvDGTQd9QFQBPJT5UANBrxcvdr2vGpakta6qfF8i69kd2QEmhVPAUyxx",
  "key24": "9WxoEF5NbZRPEhqaFn82erwiFCqdrew1heGyQpXohEudu4TAxKTDHrF1rYddWfev4UTCK2aK3RNkWucuWWEohaB",
  "key25": "21QjCuY8pZ2yFY8T8M8SNLsDXSxMoNoW4v54674XYLGhWxMzuvnTv2eTs7daQREuQ2Ymysw3ubkmZKj6zJugdhR5",
  "key26": "3pzAJCquANKMGiYEBbESW7TZ5ragyPNB33AXD8xiv9ikkSpmWRL5MPZJTg9Y7rZSGsxzVX4TEiMQLpAQLRV2Jfzf",
  "key27": "fEBonTrJoVJwq4UFsmZ5aSkhTy7EiUeLAKpHWYV9BP1zdFuZTnwUwSorhtAR98GBDuaKyA8C2d1TuR5xi6WWTv9",
  "key28": "2AfBEDEf9bWRWTDXWryf8TCX27VDUD37hj1YU8YYqBuBqxfkAtePeG4LX2yLoQb4QDEa8Vz6s1VYhVsUS3yk2fvP",
  "key29": "5Y8Xw8F3RMSyF3dkzgjTJ1TQ2PKaLyFmdTFTFPMqyLLFw651XfbukNFdVfiEpzUWbcqzQJqSMEEoYjtR9oaKmV4W",
  "key30": "65o5exZp8DGWSktgTYdrx52JtKb4X488RYRys5YeXNcW6kStoWrwBhYhRCmPGT83rBKUmboks5NNMcsPtViY4xxY",
  "key31": "2hTSo7pyweTKMKMDJhd8nSt78kJQ2cZZE6tgmrZX8hHpbF6BjYekRaoJfkhGHC6KTKqscy4BR6KZH4o5UnAu7Bau",
  "key32": "9CtAKSX2QX1dBLz4VphoTYWAp7spjSppxMEKPadHYn9K6e3fviQVdCcLvEgvmrHT9ZcQ6spGu8D7XEvw7TY2s5y",
  "key33": "5dX7RgiWP4KnHu2EUz4NXiSoE8o2CpbYtQZtAYnawJtzv6NwVJUnX6mof2pa4nXwtFPrN7bWzGybXyYJr2MSVBmr",
  "key34": "4brCZVpkqb21cVW525mshiRtE28KHLZP269UDaxVyvKZ6EZjV7Zmx17XvhGzBuoCxPjgewt1WdzxeT9AZGBufckc",
  "key35": "5HrS94Yk4nmASZxU8w9BAMw4psdK7KrvXcqyLiGBvEoXHfNW47RRh3rW1bdCsUZm4Wu22HZJDTx75n9MLYaDtvam",
  "key36": "4884q7QX2dxtYWUo1rdaTV37uwjwXPxVNFfqCabijoSuLGQJJePozUC41MGihyGm3sbEDehGy1td2kujuZNUzv5z",
  "key37": "4CfQPkX4JKXyT7BKAQ6TokxabY5nbgq2BaSqEciWSLppZvDg8wm56y9yy1Kp5zrkF1FWfELoLuvaT4WCThSCVCyJ",
  "key38": "3xK9iqtQwq4FrNcaVRvs7f6ru1YeQzg7VL7tPn5fGwoEydcReakn9rhPBcCeUQVMJ6CmBqBgVkh3NLHjQnAmYVjR",
  "key39": "5RHPNXyX3acNNp5SRgeWHk21cjhCisTHQE7wQme9kecsJBKc8scQRe9PhsJw5euYf6K7yxD3ptVFHfFf9CjpU1sc",
  "key40": "4hfEMp2YZ1igtNXQTM9WECTuuCURnwmuv1EzPGGDv99rbpmthjaTL4Z5u36BCE8xLZ7ZKJaR7ir3Kp4PDZARmSt2",
  "key41": "42vfNXvj9u18dwZd1fBDpmRZy9e2bPpo22bWqvPAGykmQDAXqNaEEha72SfnrgtvUoWvw1JcVGk9TvKDX2sjQTun",
  "key42": "3BBffga4tLejCpGXyLa5Vzsfa7mdmZnirFjUAvcusetrToPQA8LBTU45mjBAYwfTCYmL51AZ3PkLLLC2RGj9iJwf",
  "key43": "2iLSk4Gd3uqSR8SLbbjsj5w2hj81CqevQnokrDiDrBryymc2Ew4mpA4H8TNSyiN1T8X682tcTAXMsHLodK3cwm3R",
  "key44": "2s8rjjBFviLVjW6bv9HeEQWdLP73ozQa8EBRNLCFYyQNd2GxSQXZth7mLeo4YH4omca3q4qK6hQNf62T7AgM5s6T",
  "key45": "2KMfXk67k6wVK9SHLwftpRGiiTornx2WA2mRC3TKKRVySjQ4JDA4PrKqBhZcgXTAwbaTJMmzuLnRgbrDhNP9hRwK"
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
