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
    "4SCRtYCNoiavXSMXKa3EuP73rTNDDhbThJ6Mu97DeqJqP6SGACQfQhfxqHC73ZU8kQUYxegP6dNrKybiTDNi7CBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XncSrkaha7AtKURSqonfzDwGMyrsFxavn7wXaJMESRCiZPoJsuQTc2yg3eduJaPDpBktqezMAFGb2cPdy4m2nZk",
  "key1": "4LYWT8pnUGRm8FZencxxie9nFbiAvahcvKiX81oHLhoWQa2JBhAag1ivgvtbjsVx4hgtHkkB6HF4UwX7FLosqr7o",
  "key2": "28WV87JKRtaZYTHm6heGEsX4Nu3J2K4wm2ozmNekdgyx6pjxHnkPMGsSBKpDNKivkzQWs33d2qo8FKrbTWxZRNw7",
  "key3": "KhcqjEhSaB7t16AYPTbByRCoPnzfET8SsJjX3DWDuTnz2rQZudfa2xtmBb7vaPXySe4oWCzkT639YWHm6jQ9xpe",
  "key4": "2vLp7XJEUJnhp9FK2d7UJHpcnRuQKXJEpny1AdnHDeSLFRRz76HAvri9EiasEf75G5acgsFtn9AGjpsrLEbdMhdk",
  "key5": "44SjoGkN3qJPnubHLLycYwvAtkDxZW1ch8ngmcufQw1WkAxBW88cZhMcpF6EyNU1t7ko83WAKkfRd3fQA5T3kY5o",
  "key6": "5zDfc8uzJrwW72i8MR99pLLqBnZSxpaYbwHrpTX6xpuDNnh2aisJp5rD7761nEq9jw8GzZ6JphahoFN6D3zVXzFv",
  "key7": "4F2nPXm1kQTpPaF62q4qW2dXCMAXszpcmmxfvnKFzPgv7U1mx6dvDz2fHNBmzWYxbbJ17AYMpGxhfoNqN4BaABbN",
  "key8": "4SeEA22kgfYbWqcQQSZJ9n5V7wUTCmeZHWwLrNKEhCQx51Uu9W1EbxkRYt4sF3Ye9AQnW7PUkaFrjTFcaT4UnzGm",
  "key9": "B6sA5Q5VFHcUbyqq4AypYhDKXZS3kVzpSvRohjiw2jDoBdfbsTtfYCeyEUBToLN91xkZEhZnYHF461Esy1VbSWg",
  "key10": "5PKJNsPR33cwvhVB6H7qjMR4S3udFMBwXzBB8Q2JxEmu1VshHXPL8jKbgqqYPci3cfPSHuRgB8utHxGnHpfNAjEw",
  "key11": "zhCcTkYXeXKAYJLgJQPC76MNmW4ibqsTV34Nt7FWHez4TeSjPfyXFXbs7f5fZLCVrqMY8PxCvVU7vgp6phUP5Xd",
  "key12": "4C2JpHqpVzqhoH2wG4ZP3Td6kbtgr8niY3PzTsrXFz5BYB4iW19ceuamd3rdkdvamrv7dLgecVC2FTua63kMomEP",
  "key13": "629fWGkGP7yQzbrsubzYge11naSdjU6Vu2YW2Cxdo9EPnRtBbovBFqKKE8MsqjRgEM2Tbt8jYR5KcWv1CrHJvkhc",
  "key14": "3e85pHuLTByBeMVrWv7BRGgoqkHYAJheiMjsQJjSNkjfF9vrHadvZsyFndmaqgXcawGk3mcrdqLu1oHU8ri842dV",
  "key15": "2kkk9MjQmVhwqGQS1BYTtSJd4JgVcP2jVt9o84w8ARqEsMbAA1GbCxEBucKAobQh8uTNaYzrq9MTucqWVZzNjRpP",
  "key16": "3STe21kgt2crHgi8v191Fpfooy2pbMnEvGPav4zP7mdjiMvdRoNpFWjZ59fARvNEMWUcgKeLF9aH5r51i9qACNW6",
  "key17": "2kEcjN6HYcy9UR5LesTP6VzSaQnB7fvV3oNJaL17QkScLWqC6u5gcvdY6sYZmcQLgJrDBWEr5nDkGAcksDqSPKUH",
  "key18": "ip5xCAiTed8sLkfc4qZqQzZXLuoFFgoCWgcu82E6xbTYLEVamjcZiNByDqUSpn93251MHna9CBEVHSQV8otQKJm",
  "key19": "62yFCe79kspwiSVet5cAZk9ZaVymd97kiwWEHr1msxnEKtJP8H6xu5pTwM3fBbmryzzVuBUYEe4XikETYrhozVms",
  "key20": "4Xn244JbwJyKY3SK8HBGmaTG3TgYZMfGPRFxD78xFpxpPpp3srofzSHUfiiqL8H1fP4P54DW3ZVHZ5ZFv2KAmaZ9",
  "key21": "46Y5ZUkPnSq5ZnNxFPHxseDKuDVytPtK3mEv25Annp1q84FUaVvXWofsUeLBDvFCQa6m1Z7AWMvqjrv8AyQs97R",
  "key22": "2snXhTjm5roKLg7QJ3G6NZ1XoaQViUPNTfxxUy4SpvuV7gYhG8YodTvzVsoCz6cBJfEjSr2WnPy1c4BVbKPZZZih",
  "key23": "2Hpwf8nYebcBLSUxPnmJKoE1HY2bY4eF566bYnW1g5c7zb6hzVXZ1pEQwFjfZtigSESie65PAC3WB2EE7Ef9p3QG",
  "key24": "2G8SquD76bea3dFkgiHwixZMkHFVkBsRyg4te2EGew9RwtHA1HJe325NpXrNTVxDtx83jZHRKr7rQwb6wAqTtfF4",
  "key25": "3xrWBvprhwaauKvv5MrWVQhiQ4gaV2dicjEKESxnmePiGMGL4vAvooi7F1iKsp2HhxsJ5VRwE4GqTBWGbWGiV1ma",
  "key26": "2zZbcYaJJAKQuXWcKe97wGDyEmTRszJwB1JfUveAr6bU6aCrNtvRuCttPM3HcErJ87VjbBGmF44N3bs3qHFbV3SS",
  "key27": "549zyCa4nWNc2niRo8pVUkNkUAk7Sk8NAqXK4a19TbUAtU9tqFHia1tNppyhaqehXpXhVK82ndQKqG42qWe3urE7",
  "key28": "5vetQaQu1hkiVVZA5DBbU6ukGjKxoRyMCgR7kWFVwPGTxxocxHKY2vZSQKjbMgRMHPanqg7CNhAfUugfzkbuXLf7",
  "key29": "2b4DmBiMHGQZy3ivGYtKezcNKP3Ny7cCXPCfhVB83qKW4BFXHmLXZ1GxNDp9NQYZYJwDDFrGQ6MrDZkro56qoK7d",
  "key30": "3My85fBPGp8AQzuZauZu7os1md4jPYQLfyFbhcu2j5V3acBxqwHzjjX29Bu2tpU7wDSEYEcLVNZYhLkw11uEE2La",
  "key31": "2C65LuYR8iWLhkQ1uEDWQETGhPG2Z7WNiDSDhUtWhUcY1ttmWo6VoFtNQk7p5DEcKP4KwKKjLvbgxp1AcXvje9nF",
  "key32": "4W8XNUAQCAuFeNbVW9pkfE1SPYNJzy86gqmhekdXsp4j6gpkW3rT1cctJFvrMvu6rMcbFJsBXNubVrFQDhUcjbkK",
  "key33": "5eLN3ydoUUZDYBLzwmc1d8SxEmjVQAX8zQ77ubwjpstZrXG6dUfZxpkRbxs6Dt6xPjHBe3VdwV9ryZwmhE3zAWYt",
  "key34": "4qHRArWj65MCNncmLKWsCdD5Jce2K1WuDR4ezNC5F9DEBpa9Nt7KszBmTfjkRoLVFmComqkTKkaWrcY72L7BF5dh",
  "key35": "3RRhxsf3TVuDeWXGXZzUTXYXAxfs3UBsq98wVBh4UdouLv5iJLec4nca5gpnh2dUyMjHLXbNaBN4aykeomPVFVk7",
  "key36": "nTbJyxoC9m7KLp4miSR44YWWwYodtfCBAXtjMK1g7E46yAdrzMfm2h2rcP9qTRBpXBLE4siSTTvPKELsdQJZo2P",
  "key37": "3TBJQApLYy8wd8oLTcvUGF4dnoVAbFFCiq4qi1azUHeRypC3cp36U4vetoSTRrccFU1FS8ryLFce4Q4Ng8ssxD2y"
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
