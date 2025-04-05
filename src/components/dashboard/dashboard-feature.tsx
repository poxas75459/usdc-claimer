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
    "3NWZyE9hZnNt31ZZ5x1Aj2J9PQBpkFT8BXozA3LSXMMsVuv2B6PQ3JyA1WR6KV3NPkwogJq2hHaQZ465pMwUgcsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BNCEpea3qAix5QYLPfWESAXcZJqEWwm2Hpw8rgh5hWpQs63MrdMua9j2W3aD5iJ8SNgjGYDuMAhLcUBQvMPuUvw",
  "key1": "4iJ9UxUWkKfGE7AxRe5gMTSrXpg1rBvWHJm6QU1YRD8n6CVmJ8Y9SKcBfDCMSbouFPypviQoe4n64qVKut5BNXHH",
  "key2": "4mm5TovbbSxEoV5Vsd93yDPcE7Jjon7TVBpADxi4BgVCSEvTZx7K2ZhYxYkC23eNnFW8Ki1FxioTx4tSFQiJsCg9",
  "key3": "UXxWNuabaVYFQgovCgE4H3gyLLoiMcsrECTgHpZSL3HZY286nZovVLHVxryPB69hKGa3iCemcV14yRgdSsr74du",
  "key4": "5LpoJjfghUK4aNaxYGu8WwTLFeKjB8uc56tNwo69KZbtKJvH9pQGcAXLeu6Fcba8egRT1xH9MrZH4yhUwEwSUokj",
  "key5": "5SSm65KxdGEuY1VFVSoVW4LFcCtSPtqkXV8R9THEQwGGfxMVw9EsQ2ctMV7GGrPHsyTTfMjreEcx8f7LjuzBZxyQ",
  "key6": "2vhuuE4oXsqb3wHno4qqWHBLd1b18d9atySY7LD14UE82pcs2qETWY5uSed9YSJtJ3nKjSSVcYPv1r9vm4rMogmY",
  "key7": "23dPicNDZxpWgd2hyupeNTgLZasCEDkPmEBsQLNbAd3GpDcTNrpEMdoCo1k5d3gjmF4yKZmzAUScvYXiRABXLdnK",
  "key8": "4s7dKwD49NgnMHrqoy6c1UjzLjk8dKL4YhGC4B297kiu5GYPeq599mnAE6BDxmcG98JVd9SpQ3CpiGde3a1s5Etn",
  "key9": "2weogg6ZaP8riY7HxYZAsjAzcz41Nak4KwQqdixQ6hutzwHLcinKGm7jyQWagZPdSeLxqbwkzx1V7Hkd1PRp5inJ",
  "key10": "3oaZRWJeZyyBRKYTKrZA2zucssqQ2cMBdrM7z8eevpNA2T11zQPPD9Z9Rkd3MVgqLcejwrfqD2Drkw7MeUtApC43",
  "key11": "21NUNki2VQUyW8FmtT7zaio74QkybwRVU5wRRi5vvNX87CjzBkTaiiAodPABJrKyoEJXWWysHb9K2akyshDfgFC5",
  "key12": "5Eo6VxpkfCC9b3Sc9vcJaaMeecbYNx98e54Qgkaq2vdqFnddv2aaXoPsjdKf3KGHt2sEUbqkfXvyJrFuXbztE21c",
  "key13": "29C2mq9G6qaHRLTTeimrBKmxJnnnczVPPg7WnPbrAWSLLF2XiL3ZBXpeu6fb2tfLvXR67hjLNESg3ZeFA3mJHsiw",
  "key14": "27WEZTV9fynn9hDFmnWD5B7gcGiyVpvwD22gYfTz6MeRh3ifCJZsVyqYv6N5o7x6xCofLQBsHHJZkpSMRQUHzVgG",
  "key15": "4gPEkwXujCMmGjobRhRKjsMQYwQqGWjn6GXepxJnPAKFZUaJLfzpkSqFqKhDEyTkSmxemULw9qFvEWx3JhrSnCnm",
  "key16": "5GqDTrDLRGHEGiWQtNkJfqn1ojPJFUYRSPF8oxXpXaNcvqsVUrGz8QGgheMCSbfXYqJszAxM7bU2pTvQd5qJH7L1",
  "key17": "61UGgws3N8ENgXhAwau7Rjb62cXeYZPjejBKtn958T1BEVvqdwXDKzb77CHMnGNGB8S7EFGFZqzvaJFmhiSrDFAw",
  "key18": "2QNe7UDnu154Cf5XkMq7Vg2u9eWtjTApcKpqPfqYNMmyShmdo39NZpAXiT39Xw8M3cfCraw8Zy3cFVLW1otawGCz",
  "key19": "3rL9Ghc95rnMcQ3MQp86hCkkXdvfMGW28ffwY9hFi658ya7AqDUCEPSMxBPTWZK7NkWde9gMRNTcKCmretaSvdEp",
  "key20": "5ZzfSGsXsULf35NqCDANK2YiDL93JwVgeTmWmaFZxfVkiHLXmD1YsZrhQyVrKRJpVe5Qi3gTzxw4bK1oca28c1kc",
  "key21": "3YvJCdLAaxwZjB4reRQ3ycrEz5C6YL6R1Q7qqn8Aixm6jJ1C144DyDqBLmjurg667fwYVqd9oGxPFQAkyDuCffXa",
  "key22": "2sEU7eaFHubZ4bScv5zbCViHiYnFiEUdDZUgp3Lkprn65ZEM36hqCWQsjMSaLCYEXyNARpYHsPXDf4hgsCPb7xhR",
  "key23": "3StSJQ8C5STqtpGc63JhjV3ejnZsLT74DMroxsn2YBtuzLFLMM1dzquLoXaLRy788fmauFA1hS8ZgP2e6ewWLLG",
  "key24": "2R8zVzhKEyc3PjA1BGWYVBhi7U4zHuFeVvgH5XWAENhK2P54PAdPyRGBmeAYUYxE3Dzdapnd43pW3DJgu85qAZpK",
  "key25": "42CdfWRgFhjLLaLqh3mqTCTomKas28B3L92495jSnwLsyhT6mqz3gLvNfEFXevJShWPThJ3W9KmssZc4jq3Hg7F7",
  "key26": "5BRkQYRTEZWU4aRMggveiFX818kTUdvybhQaFmHjN6Aoo45nxRd9s61h7zSzgGDdMHBAeiHYSwS8RKoqJKrg1tiU",
  "key27": "4KL1DtkbmqzE11rtdupepHgwY3kERyxDgDs84uuZnkaY445ijic56k7uHeK3JmWEjxU4SkEXkWdB8HMYX6rYp91P",
  "key28": "cgG1U2nRcscFpCtAH4fsubBXEtqcFhD3247YXWeUFozsf2mxviP8DHtvwv7XD22cqwgwEpQyHdzQydmSeK9j6cR",
  "key29": "51wtnDGyjHz9c4BFM6PY8yKpuKZN9sGy9yHeL8CTdFKkDk5LXJRozdvk6VjFDi3GQsjYg5DgMVQudqdV6pQP1Ebo",
  "key30": "dynMMHbroJKKR3n4JGPtoLGQZcchPPxKu8bGWozqghiBTpZVsAZqQrLRmsHjXiz9YCigdWEAfKHueiSQRoDhCgE",
  "key31": "5wrUy5bicikY3T7htiKayywAxvGJQuMYHg3avW1bRvu3s8ZdwjpzW8UvGpMNWw8iKp7UfaPfgZB3HvTH8FvwzVEy",
  "key32": "MXXrSdEmTjbWz1MdeokwjcyerEZvATvowMX1t8nYo9qf8XuirbFzYwy6w5hhSkiLNXeS23TawcPoz3WQX2Hk8Ut",
  "key33": "5mKoxUBdsMMi4ZeFARaoWgLZQwKV5Tta8G7wpLejaxCCxH6uQ4Pcu3Eu1Nieb7Gc3CpQyFQ2JQUwWHeZDdqNEph3",
  "key34": "3yA17tjWbAnNaRchHhC7xSXxMCJ4kmNvEdFW7kgcNfXff5i4bn6sHoKBBd31gzcHGDdZfNd67DMsufXsRv2UNZ3m",
  "key35": "5hwNyjaj9eA6vQ4xXhHoVBwQvBNoQVeDoR1MfU4dQ1dEDYGij5DBsspWZXQnj7QvKXA8WNhhmdYkVXEKTjLkXsyp",
  "key36": "2zgK66vp1ts7KrXofMLyLyahbQY29qhJoQzodSMHVU2n7AjLMytppRiPk7YGVzbxYN4b21T2CUpAwCxNnPAFHfXW",
  "key37": "YAfJPhChxuNZPRWADzZ4dYkbcC9urusGzBALvZEosbVGxntJw2ERY1uAM7qsZqwPt8z44RQz1XddgBvL9fqrfDr",
  "key38": "NZUJEpnmXXwqiHkS1sXWPuVHwWyjmeStQqFWuFN4wS5273abaZHR6VEZFuUWSe6DrdxCmNVSTYu7tmdNyhq6CXJ",
  "key39": "PL1mgYnMEeqiyTbPDx3X6z8yVejCWrh6KNw7EDzRbAvd71uaydLZJCBmFLjuXXdRgpgXyV1Q1ejFpKmqHM74Tex",
  "key40": "F4iYyVM7TvL3DeqJWfS7LavJYPNwFwyKeHgPwuryBv7KHGWKPesgkvNCAr1h4JxJMUqBg3YY4CTqarfMCeEwALP",
  "key41": "5vXvaXAytPmqewjyxEnXQNYKhcgCv3DBdZo3Y2ZibpRpMYaPU64RbYtxduVd2SQkQFE8hj1fqPr6gFRZ3qMM2rSv"
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
