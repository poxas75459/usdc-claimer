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
    "276apX51gtF625jzWgjAffzCN2YJLES2DpUbd8fj2qJFGRwXvHLLn3pasTHNEtF1uR6VK6qy3ecHA64RwfwUFb3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kqZiHdqVbzmNKob3DJFm2tYJnnjFck2AHrvRSxA9oKo47GfLHDXu4omZtH57i98giAueLyJyVSgVrJzeKD5GdaL",
  "key1": "JN5nQJfHuvVNeJra8gPC3Vu6p1mUC92gYX9BNbnZ6vjzuDkBfzXC3mqNJy491GTaPxcfHZZA9R41LowdvVh8fxx",
  "key2": "4HNzY6b9KCJNCLiEQ28imStdDCM3u9LfyTZneTPz8EQ1puGohZk5fivzHLXaVp6L3EAZePSdAgniCCW3fvcKuvoV",
  "key3": "4j9A9aVoAmKjJcc41AEYau8qZgMyQqGcdx8DfCdLcu7Xf28NX5D9wEKjWmjf9U4pjf21BzoMcTHtLf45iJ7wqxqs",
  "key4": "2fjUjtAndLtnGCJwNyjou8QeTx9hgN1fDSeCBoiAPbbu4nJWmVBaCgXaB4W1QDgtUuijE9nY55QGBfT8mXV2cfwc",
  "key5": "3qePHF8VuS5QejZVtihEfP61yvJASbVcpzcD9hFHkuaEbwm5PcFQqMLzQ6yaWrLCxjsH7qinBMBmGiK4ZtWy5Y1",
  "key6": "22wVujRrf1rEciFHKoYDux33Yjd5wZyiwxBZDznvLd2eXGgSZeXmr3HpuTREktpPdetesXRQEpfrdyNxNEySzxRN",
  "key7": "51c69aa5H4ymzmBjPfsrBbQtgs1JNRN8fF6gcoyptp3JeoKyrYb5obdUKT9b597KGpnU9f8vWdpnqmPJPAeiEFgZ",
  "key8": "5Dm3XyzJDj6N7zA8oBmPEgeqZj4ptxnNbc5Dx6JhDb1Lcgt9n4pRsBZYKrHHKgFDcFta59DJnBzJd8tUrkGxF7Tf",
  "key9": "5fjee76hudVrJo82FtuA1u6aB8AyBj3q7wsvDByb5mx9h1mT3Aygb4GAYEi8kGWQdvaqkKoQ3kBGwd5bRPwSA9Eg",
  "key10": "5TynBEMRU2BRULgbXydV12gF1vPGP2dwmgXguNhFNojzKsxGUyykuNSJWTrNRkPfhdnfDzfuUv4GfKp3CTQaWNcA",
  "key11": "2UiaVvBvNQe7uBqGjoA9JqSxe5fWd41No45PYVPps1dFaMBujLxGokGKGBehzEEAbX3j6944A8XDxoAaC1DRPmHr",
  "key12": "4ACE2ojyWFiSLh11GLeeB4dhuZpkAJ53x2TJ1WoFYuH7wdabAk5BStEZQhUP9fD26gyXnMkGiMWRUKMjBh8sgb4h",
  "key13": "wCMQSYha9Gw1ujYSVsnKbX5zFrcUoKLjKPDPjT7nbmwzfUfz4TD8jXSqzMmK1tJMTEneNjK5iERps6qhBxWycej",
  "key14": "2B5TixNFRtBxTNhd6gNvjhYSNMumUdmLdhBA2rjyM5YA7E9VbZ6N8LsbP1GDMm9G5GWHCGKCchy421Q9Npe5jGe5",
  "key15": "4x1RfU2HtKV4LsXrCSiZy82J7QniWL31nmi4fpiKkkBmxWiYFoW18Ht8w6a5g6M69kAWo1Y7DoqgojroU3WLE62m",
  "key16": "46Lpwvrk6LJunRykBT6Ezg8dWtKNRvUTjJ8rU7T6sugftjJHd9QDHCF7EXPXRTSHYU3ViQ5AfgPq3zW764EYtpNB",
  "key17": "3KNL66ZULZGK84b2JPYtud1QxrMU4dNobfTd2QwzScMVdQ3Xb9inc4b8uxBfz3tbK44EjCxGh4XM5yBpNz1UyCn3",
  "key18": "5nsAcZvQ6BaxB6oYq2XqMqUXaNCJk61834g2vb7TsmCiMwxC1D1w6hgVKLcYTYBfqcYncW9kDSjRqJobDivTVCcp",
  "key19": "2agt59zGmEaezAFPKuVKZm5mpk1mJNDmezJmigwkQMHZT4NvkS1La8Ze3pyZs14JZddWUoxq6i2a9Lc7EcRV42vn",
  "key20": "4EHpBpZWe22sEo8eYd63wfmyhHYAYaT9fEG5cdMUcvxh7EeT9DRDunJLuPRGULtzebmdfEc3tuDDeWCKSWKER2qP",
  "key21": "5QEtvBavfyKMEPNh3EC2veTanbpqjAAinN5w5cR2phiUBhACpNu8HgRSry3ZJ16wp5K8T69exsrdXsYvKDYN8FPF",
  "key22": "678WcSTLqgo78Nq5v2GHvNk9ETrjt1e5juMttaAUMyjCWHwxEMnxy1E4526aKFfF2ST8MYy1gGQanhZQPQChW7tz",
  "key23": "3ZFtZWMMg9xcnYP6bP4i46936oMbACsHuLdu5kuwncEKRV5GZubmd4yhP3T9CjBM54ez38zuWFgnrokJHd4zbMGy",
  "key24": "jvZ5rp7RoaCmBZdDovf4oqSpsQ7vCo3yvtBHmB6K1DbUV29cXCk84iFV7qZp7ea3BYaQ416i2DEAmP9EZfBUGYo",
  "key25": "3dm8Z95FDMvg8q1xbisdL6QrmMnKW8T3BckG9paNxS61CCyqSeLsSQr4CYPLNYT98MSzu9pV6WaBwDkRWPpr2Joa",
  "key26": "213oxySTQCmNvNsQ3MCc23idRvkLQCeJtiS7acmbiWXV9QwGeC6yEivoncDBeGxFxXv7Roe4SBWqqbvd1eVsx2hj",
  "key27": "4hndT76rCTSFCr1KvdGG49XWoektSK6CjD2JGvdtQBd7YujVWhiBg2vMkLCbXYznhuADP9eTuyFVZN4RMYZd2J6v",
  "key28": "4gmGjGsuZfYq7cwW2tQfLsSNsEtfJgPTbV5VWByBn2GCRzpdH1h33KLQ2ic2nsKs1B6j9ZQXwcM7Kwvc27ZSesXa",
  "key29": "4wgpZzxUxbBeeMQKf3JZsjaXLsfZGDfbeoFFKNLtxpmr8qko1A4ePRzVTos5cmq2Y2R69WoNbpbzXN926xVKuKYW",
  "key30": "2x9UwvBSijG4dwoFnXHgrfHF8cqTjLvCuBBNL59JP73bRTNpFUwVYRF8HanroFynqKjUnAWo617DaeDHQXa639vV",
  "key31": "3T6tzuxEcchaS8yVdaHUTRKyXRthssonpSwk5sVxjzTDceopfWhgAM5rvevfUBgDy4RNVYv56rWBDXrjQA58Dxbg",
  "key32": "3BiT4A9HL1F5EbTZGRP6MwiabS8BDvhUrRpEJnvppAfTSxrWsxAVwbVGceVtXthNSzYRaeDrB2cuLiBLnAgfp4gY",
  "key33": "ZHZcbqCgurdNCgoX8SQEULVXqjA6DXRVZhdJ9P9YavEb3Mh6LaqRpJgMWSLqfN258Bnfd9vGMkPb6sudMW71RHM"
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
