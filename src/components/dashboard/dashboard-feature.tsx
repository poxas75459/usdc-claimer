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
    "51GMDGpRuRsAzvmoJEgsVDdFkKEweBUnT7y8DujcpopE4xEwRw5cXDYDJx8FjVotv9kEqB3QGSv44mE5CoiHeGjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28X3H718nDRwNXSTHwHiZvewFyXfsB1DxKTBTyV9HLfgSjpg7MpaX5bJ2ppHhepMMPPJVfQvsJwhNGqq5GTv92XU",
  "key1": "w6Su4KZa1GgaEd2Lt8tzbwp48L7EePA7k9TFoAEFJdpjwqqGnx7finQEfpQinVuoL5MTjrQ1Jkwo4f8rrpbWAFg",
  "key2": "2SC5F5XsB1nSjqCirgVYvHhoj5wQfU36aE2kNk7udkKn8cJzbvFtTQuDgLgWDGRmKzbRtuYKHZ6RaA485ehkt6ad",
  "key3": "3GJfzqDu39CsZse1D4SRNu7h4awmu2t5P7MbRUsQJ3yttAgRBkWfgktshn5RDSnpqqvTRYwUDWLGJUHzVbBRn7Zs",
  "key4": "Me9J5TZpT2WnsWXLiSWcPino2udr9Lg92aBZJXqMJfThYK4KD6orFUuSNqU1LXLZyXx6iAwRhQh7t7uq1TgULWE",
  "key5": "YLaGXTuVjuQ5gmUvhwSWjQVRzV1qSKhimjKQ1jYqgMZsKYenuWY54fNHAZeHiLBrVzYazwsQT2XbWfw3dVgtur9",
  "key6": "5F2QUCo5utGiTJNtN2YCfqtYX7H9B37PUUeWjdHGkNhieyKKaoDK1wj6f9GQS2UeH1Tcc1pj3Qea5EpovEYrK9Qh",
  "key7": "rjrFPkTWvqGpUSBAH4pAQCvUbmb5MVm2SqJHgcrHJVT3gryEwvinsfae5h9GZd8VtZTh2RMhmrJhAetpHPRpB2Z",
  "key8": "4iW6W6Ke6Q2uKoFp1H6wVujJVqi2aT9tBgbKw7fiPABCZMJNGc7rGjCEDa61psuNGbSwEM8n4dSGyse55ba4Z4rZ",
  "key9": "4g5FQdEYmRSVUiUDeTjob4NaduAYdeEjxBBenoadBfwZdePp4cdhkXeu9wx3SSF4cU82LvTEL3v2eXJmFQUQDFKC",
  "key10": "5R2NZQAQYxnaBbcxEABxmq4Rf8cppvgyUG9TXgq8ZtUZSJKyzL8Pwe4mRzHzXAgmjq5MibHsSzHQGB7hm8YDAemn",
  "key11": "3UWCWVFUYzgekSmrdjhFUyDEmy7G2kuN9fAHFUdamaJWEoHB3UmXEcBgMhqXuwxtpjYdNcESLah7pm9osU3Yabr2",
  "key12": "3kP4N9jNmUeYrWatsmkJ4V79VHzGab6qyE2fjoZkBecDmHYsfvE2hQ6vKmGuXKwoSd57qwqMnzXMCLKWAgshDArQ",
  "key13": "56J3rF9MQKmUpMBNH1Um7PbXBvg9uEDyYzUUyggm4YjGitToiagaEhLar459jiLnU31Enp7J6ofxFPaNyzHDfiR",
  "key14": "2PzXpkwyQqWSstnH2UUobfGqDouzU1PKUgTNSvN8HiCzwsVTPS2fnXYXsWNhg37rMFNbo4josXnAmnijfExceXvh",
  "key15": "2sqw4LWRG72CM3sASEjAk7AQ7Y5Vw79ipXreAcNz2HisYe2PdCva3Rf8X6zmicVNB3cdwW1DCPKJipzkTZgyTjqU",
  "key16": "3vhYULgG4UwhaygjMVmQK6KnBfkJoE9xXu2GUfx33oBu5fgA3S1ofFrd5LjGXZftCCp87czmjGFbLEhh7bPg19th",
  "key17": "3WeNBDng5F99itjcZZABrHr5DkjdUBmVPiat1gjC8xZLUEyMKzz4N1SfLmmeXvQtToAx6PQezspj9xRLe14beyfG",
  "key18": "5vLtxQ9HJrwpkg42M3CahRMMZEG9iPyH5p1QPxUGUToz3ffeB8LorZfgCaoJZxcDUSzHBYv1U6sZRyVUPqig43S1",
  "key19": "2qG86ifD7rvmzqNjZTZ5z83sK23wvsorfb1moXD3hsmEqfp1EZxfyvKXWRiPy2VBv5mbV8tQr9fzycoyH4UiYg9v",
  "key20": "5bBXk1yT2oEnSNWxGmbhMdT29Vuxj1nQwWfSCn38VLjNSNX84Lqtv3exd1oLdYiQNXWx78ibR5qMBm5W6qpECiVp",
  "key21": "2LkLFjcjAnq8EJBc4Vv8SxyEyPVuVpFTd5tkuFPkHGWFx62QMB5ELcmxkW5Jh62wPMTmM4y7uFgTWdKtUFGN4BX2",
  "key22": "58QZg3MnTMEPBkDVb3SXuWsL81UR55hFfj6kVQUvVGNcNyDmmjjxiFaikbfPSbc6UTWa5VgT6dF91i6ji3ovj26M",
  "key23": "5s64jsuXDKGhcVumbcr1tXqtCFxWgbrB4kDgbMvbywqdv5GkfHpxiVoKjNsHAtzZ9ZeXAkRhGN33hZFD2QpiC2zY",
  "key24": "4wtP8HLfPyd4j53qg4xNrUjPiPSUB7RFpFLgPzGM2xyRwXvtCPNznYTFs7ruxy6hjoNQco8cTHtrULLh1w3dwwh",
  "key25": "2eD9VpSp3QuPjk62W6UiunhXVs3r9RWQb28hUeRDXZmg4hJzPkWUQXtqViqFuVVYL2MFypNpgZf3BqoUNaHa7GmD",
  "key26": "5RReGGT15XNPZReAwoAB1VEKVdGyLqtWzbtFQEBSCg35eo7P1pSWiFByuoPF3xRVCHCzjXeGAeyU2na6Mbnfd9Fp",
  "key27": "2WJ3ceZN67u856cG7hXdoj3XK9uwnV9Cg1HeaWe4mTwFuG8RyBj7rryPCvd2dEyAxYjCaGqsMia4Y4kvNupmycde",
  "key28": "24tUov6j8becNqxb37xknh3zbs5fkLXd46WvqkACegb6gLtCdA4fxh3daBQLBJRnifjMozSTi4yGXNbFgSvHmG2P",
  "key29": "3r9TKqigap1VazHYSPRfuNXSGEiGNtudhrky1nvCTZA89Nq1DVuq4CuwDhE22conefxYq7E7C5QBqrisxfeVVpG9",
  "key30": "49MxQyBwDqgCiyaVnrCqQZat9hWFxvC4ur1DJTEk7BRTMcaD46Lw7TyFMg6ktqiTsGGCzLe5KPZLFiWMCgoLqzmT",
  "key31": "tDJ5cEU4GNpv4AfiBRHpY8zixm76hGVmxmUMiAfRZNBMGDwHDrhcHuUUrpXsFXU4UsyRKDzKBdgmnRzgAemi9io",
  "key32": "4y81RnGyKCeKzUwQ8BQj8zjqvQBytnMkrGHXCTx4xjLnvwS2Xmg1x6PcV5nZRKFSJXPTouoRfHfyGFyVemy16jPG",
  "key33": "3jzPmZJrst8yGqBQrSEzruFixcsrxHepQ3PxKqvGPch4wq9sjSb2nTmEEfgqsvUv1hx7HVEoWiHwW5KLYzeVGHgm",
  "key34": "2VpXhCAVuymnWxSS8ET8c92wKrQ7ZcAfXRVvaMELwny3GS49Hkwn4FFL23HhoJxW8qAtMB39vmZ5RkyagbKsBE5B",
  "key35": "37AWf2jYY2GUAnu6Zv6taHHa3HH9QLoEmT4bdKXfyzbGFNLu521iR4MHBmPHE5PyRx6AXj5RtG3ZwfMRNd1EZKLx",
  "key36": "3z3HyzEHrU7Kn9fk4LCycC3YB8cCDKKUtKYn5HRi8ojZ9AQvBgeiMUbGVPH49VAfHHpG9PPGb4FynDNVQdrLDnwB",
  "key37": "5XoedNJGSJFhQkfYXga6wjezMwWGBHUqGJzhv7dQuFxy9Vf17sJqW4pCohXZMrP9miXJktAZdBf4PmhPAynxJd9D",
  "key38": "2GiBvghRzBuhN3FaUHvWtwdoAEmSCGfRfkz4q7E2cWDuD9vqBLQ9SVt1GDJz5XbmU3WkS2yrpE6g5C47m4xqspt7",
  "key39": "4bNx7zWbf76jSxaMaaQsrbNWYFGTkvTMosQhXAWyrpnHUW41vVn9zLPBgaDpaxYmeD4DKPa2JteTReBVeq9ozZsw",
  "key40": "4TAmmMznUBG39KWYHKfxDftgR2jV1sdaZrf3SAcEBv8QuavQh3q26fP71v7BP8WkfxZDLx28YssoPC69cS19UZQi"
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
