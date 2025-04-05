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
    "5wJwC1fCysCDeZ4cHtMZnYVa2vc2St58FtpKDeZBNYu4iKmTGBZ8YnkEUoQ5UtP3bYp3ovJJXMyLhpJwEDoGMYyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pch9KWYnYse1dQc1ddctxg5omDh5BEwPhdFA8RZRSSpFaG2QkT8FSbeRCEQwYS1QetDmgmF22wGE9JKqHsmMX5h",
  "key1": "5S3NtqU5SVDXqzQKpneVzc1U9q7GuQ9o6WXtqcbrptpsB283NXhPu52JMLTAUFPhnzFZU46UHizyhUwQpWuMEijj",
  "key2": "5mCemu8oWA9hcNJmXAmm4GRwHHK3LQPZnFJBGpTeiqvSLKT8txTZeu4SiNk4jyrUd38aJtLcz1H7EbBWW95wrkmd",
  "key3": "22vkzt5M2SoEGm6mVoFydqDR8WgA4orgqutfaGdhWzWgtnPmgZH7BBP7XNpYuUSRQVnN1Yd5QPDpuuRKYdMMnB6x",
  "key4": "4fkhZ1mtweKdxXEkRWGDDe15FYhDv5k8iwipE4DzUfiVs6KgxRC7UWFW7Dau5i9zqbE9zBVQPC4DiVRyF8khTZCq",
  "key5": "5hUznDRTTrWcgSqVWxvP7yRbP8aJwndT8rFRvBR1pFnqGAzHMsr3u4R16UDVRWFPptKaXe7ZQ8M3ywaLFQZ8bu93",
  "key6": "2qxwmaCFeDBt2smxPfX7fp2KmjVT5rR7KpP3wv6YFS1A86KeZbhp92HH85McxgWYNTy6F3VGgaQ4dYS5uHTkmfuc",
  "key7": "2YHmwWbSA5h7J2yF9swyDmKvH3Fq1t5E3YdiXsps8bbBdgPzdKBCWr31AjPcBY2FpdGoaMzqY5JyrC9TPBB96cT1",
  "key8": "273eiLxL2hWZ4QFk5ZRaXLuJAH245Vv1aLNMkYZBZ8RAh64bNGpNVR6U6pB9iaigbZp4p825CFdbMMmutQa8rVLC",
  "key9": "5cMCzQgftHm4oY5uMTjrMnUzBVP6ctoJhE1QsSB899NqRs3EgehbyucN1TMDmKqCetZWY4zNi18aaagbcdizCttb",
  "key10": "4A3kGHbdF8U8AwV3S7H7yJec12b4uWz5csnMaPcvrCzxuNmZoay6dN8MDc8kg7ciUaanbqD9Ru4kFiZpncMk7wcN",
  "key11": "4HtWRPJFAeoUqdicUp5Qu6yyYSUP58bkDteaCFpeyjaaN4fcXh51xqDaSdgsqeBykkf73oDtW4tVL5pj7r8pe1U",
  "key12": "515vN9FECp79oJpLgCkDNZsNASsseANmoSG9DBVvPP4AfrAL3rktMvYJDG5gabaLHBbqCZW7ZTZN7JCoYAmwCoUQ",
  "key13": "4TjzEbjw2uKYosgSkU8hbjyzMdghiLMgGZGaDEHw6FcTLSb9o9amHgpiNY4Y492KjsSc5NAtszsy6EjBCG1mW85e",
  "key14": "253JiT2WD6aovuN7Uwmv5bFtjPhaE5uKX5a5Cq5wKhokBExr9cQwGQadQXcN8GuareGSzemFjz2onDnEx7PA4U6i",
  "key15": "2p2ntxk7HerwEc7dKaUkbVwMCkkczSfNUdxqraFSeeVuLUG7ndDB5ZYVWcddbqN9NodaB11FYbBQQcDY8ZgqBcPZ",
  "key16": "58evYxdSe8Hgy2XcB8DGiDzK5gzwoEmLELSHh1pemBm5vQpBAVNfEbL3AU1bhrzKieRLaL9JW7k8sZkfFDaVRFJi",
  "key17": "5nUU5vftufCugLD46s2BuYp6pMvB42zZNGwzgZydZSTUPTekttdN9iqG5x5aJetxRtL7gTTGJx5W1YvkNQkauR6a",
  "key18": "2avGUHDtnKNZJng42i2TRiMw1ircggNUt6fVyV6PKqxu8WkdidRLzgKjD1SbEoFPrWhngWmqGeiRETTw9wbAGZwn",
  "key19": "5vyYhEARgALkYEzZk8ssy5tJssyZvQtDFd5hoyuNX7Ng5xxPEs2ov9nRvqszmdrrEi735FfcNQKYw1rRFXiuKb8k",
  "key20": "3BpoM6im2tcUfyCZNr3z2FkgizUrrGWM5QCfjsxCTo6123qd9eafRDeTgcfi2aGFwzj5DTY8Cn8wMAppYPZkXbN9",
  "key21": "2MBdyJDet1Y2wUx2Fm3YnMDGkw4sVj1P7LaMU1R6nZicFKAtApUQLVNT7dxQThif81bcN1gwxRborjxMtFUpXxfG",
  "key22": "4XGmBtNHJmkU3AdgnnUMvqriVh9kYw15Cp4XktyaQXaqNapQQeHwFc95GqqvbiGyZnwmLh8oS6YgcvBm4UkSdJsH",
  "key23": "2jrUgLMGdup18Rk2joGrZDHEB4ZmsqP3Y8HYLVyd55ocTuJahnoBDUaHoSu3B97djbLtpXQcFgrQFitWh9o3wQnu",
  "key24": "5j3C32mYKSwQXBYvFzfyA6iFfLqEbfQHvGp7qwba3YvrCZV8kW5q1dQ8CasE1xgPU5Z9aFNjzQp7QMixqv6ivzeK",
  "key25": "2tuDex9FAX7XbFVTuovgAWzq16zVv99chTv3qV5TktGZY6XsoyWJxF3qGWmEPqYQQCVLmpQu7jihYwi4zR6n4o1K",
  "key26": "61g9UpZNe6aZpRoLi9mkajocbd9tViFL7Kvtw6QZjM91PYYXcAYvemfHmnpxc7tkYrbUAkHkwWdaYCQPf8QFk83M",
  "key27": "2qtB5SnBPdzQfpB9nbgRZvpnBWfCZZskphCY53RRsDV3xH8otjbaNPJB6QX6aydb6WFPVWmNFdwp2unTsuvudkoJ",
  "key28": "469SwFuUchPAKKu31e9opnZVgPQsxncXDGwTBExSv2pAEcxZ82nV8GbyoJ2AThyizURpvsS49uQvqjuAEpD8oaNh",
  "key29": "4ZH7sEpbWgZve2s6nW3azkqPNhj9oXhHDv9Jj3HymWSQiDLX5eZWsuQAbbTSavPvAqbB2E494PuKFpbMBCo97uPZ",
  "key30": "31dGFeRUbfUKiZ8fpcJzGDYMSDaGm9oJwDRoAsdxhzYo2qh7zqtmSZU4hNPBCyGCwXk3hgLxcVQvtmpttnnPhD3E",
  "key31": "8J4HKLTRtT9epZvNkEmh3MJupFxyXTUGKSJKsFwDjMoCW3skRBmGomW2KUeoAvtPBuQqsWcCi8LRuVKca4GrzB1",
  "key32": "2TMsZCqZtXpqprLDYR4ih1M74mYqBBDX99kCSbisaGHxer4pN1pveExK8VR7zaz7mernWYQXaEyDvCAoLufQqAEx",
  "key33": "35ELqz6L2XqQSQ9DjNmmRccWwprZA5VeRvKJhdSPoPaQYit9QHG3VMi5aN14iGcs8E4ncxmu62cFGG5EjCevxrdm",
  "key34": "QcnzYSqb88em15g16wUdM2UbVM9rfRqMqstLqynrEFumGH7QZ73e9233ZXPE55vDJKCVEd11Rsud1UMCa6DBKdS"
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
