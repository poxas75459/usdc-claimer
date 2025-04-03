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
    "4CXSCZFbVmFoxy1YqACAbf3gfJVkkpycGTv6sH6PXAsnxqjj9nzdTdQGz8yzGJGnEEZbvH8X1i6GjqegwDzjgnZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gvupNQVtQ2iRaTrMdN39LSPUcs5UV4EErRFJRuy1Lbu5k8o7ho2QpmqiDKLStdymeswSvMqxBSjcE77v3ebRnBN",
  "key1": "2i1xDwK2WF9dmZsWS3HNrzRP56oJXWvija7Y9B832nDLak6mJCG81ZxY23jNTDa1ApANEBMMDwHB2YDa41xR6PDr",
  "key2": "3m5n7rHK3EWGSH4PEoPm1NSiZ5etBLNQck5FoUe9bu2rkVDur7RzrvixsqBFxw8ckYxxqZQqwHi6Ce1RbiLCAPHA",
  "key3": "4LhovudXXvruc2TTaBbbCtFEW41W1nhgc2PSaHcGWnGVKepEXPvESMjPzZcridaoRutYZVDvF6JoJvy3Akh9nYoi",
  "key4": "VN14q8b1R4vW123s3s1qVvP6CPQjtdYmsUHa7P6naGgs3FuYCo3vbGgaJq4sbLfgER3M6ByNcRm14mpkCpfKZgR",
  "key5": "PZQ1eFGfVXdNQMtPDgeq9BGWSACBhbvJE5FXpnNyoXzLY1dn5kE1t5ca67z65hTvTz7GCAxtdSXRo6azR7B1QuN",
  "key6": "2eZYmUnYLgXZHXAY65bQ5yZMthzVsPEjvfdcJhFfhuqjhf86ugta8eoLhTL5abNQpQzE4BHGrMNY5vZMebZArNe9",
  "key7": "483NHnmB1BuDE4Uk4eEsTmcrhiho73ToAfVZwRfBzeAunq5woVENYMbfmtcDtWdznSJWmL4kM2jGzwpDoFXE3hoL",
  "key8": "5Hry7hTEnx9TuUpNSsscxobP3TjZcQiB9wzYmBQ6Mbhb2pJqHyotjprdN4qb32KVuiih5a9Qsiu33ZRHS5nnpAkX",
  "key9": "53CztDPCJpGrEbTTLFxxsZw7Yz2RQska46eosuXxKVtM9c5LBc6E6T6STrepENftZQg8k85BfTrbaVnRL2cephFt",
  "key10": "2sT5xCUSnSwojoPfoaf3XSJqqjC3MV7MHK63gHFAcmwesuMLvNzCpzmFdPe1RZVRdLCmw2tNpLgf1GtK5Effxtvr",
  "key11": "2f5YzNJxLqkvfSerS2RzZcCeB13W7Gt34QCQ9RgMrrqQFQd6DeZTYyNgXAiaQzagbwmBeNQHRfRLkBaeUd8WA4FC",
  "key12": "vGoT9FJgD1Q6ZceELYhKhxDsJmaui9uuwt8VkpFMSSUJuEG9X1sjFP8JWAaSQ3vFYbBuMmYobgHGiLza5AFq3JD",
  "key13": "2MiHhshV36xxMQt8NZhAoKTBn8LhUrAPZbddzEiWnxGzZxHXB6mQhK1fyj7BJWvo6rtPiFXPftNeHK7dFPLvaJqU",
  "key14": "3SXhAqghXT5RWbKCgv3xEcjdNRDHrJ94TV42VKJkyBy4cVgUzv6Y46dyygyvXLWdcqRqyoszUUL6YmLnzFsjxgE7",
  "key15": "FM4kZ87G7faRPT5oGuBGzXKCDeWd5guNP7YrU8kxViwdh8CPPr8tdqmasq9uVN7TMV8xkipuvmfp58TCoBQFTKp",
  "key16": "3wfK1euE4Er8Y5J8bauh7kEa99LpXPdHuvQ9cKSJ2Ab12wRLfW7Tzq81aiDYMoVv9bKWaFsXyWouqCdQcoDoAaPx",
  "key17": "2h3a2tFAYLPHygtE6ygbAiDXLJb13EAqXWEdE3efxVtZPwyoGY9wS85DGrX3MfT7bGf1Cm6xooAHEYxaFfZ7yaVu",
  "key18": "5RhwR1CtYaZUGy3GrVGa2K5fYXWj98vudtkRPjhPxotm9jx4TDag7pqK1JYtWRkB6LHdogWsqTWeNQYL11SvtzAg",
  "key19": "3u1QqRt6VgcjRGjvZCnUh2bkzDtDiqJ4rhFcPfM6PDPfwXAb9dAJjUFARFnZG1S2G9QDZVwcS64ABjzMW1nBDFfq",
  "key20": "5KpfGfzKDQsoPz284kJTBFFyoVMsxXyZMHeioQRU9XKeayXXGS8VhE8xPgKKgqqphgurtPGbkLHVDyFmgoTK5CNc",
  "key21": "45VUDBevALtfhqePE76Ru2qEMFEgs1QjzjGAN1UVxVGRW7HS5oALqY5iMmxX8FT8YQsin8HYSbgp2VbVJ6aNEGrS",
  "key22": "2aUNqaNra1a9bpxe1GkbVAdC8S51ZX6KH3yfu49J5miEezg8CrhsccQmV39XQR4TzuAsTMPzr5f21sjwgzX82BHs",
  "key23": "5anRf6qd81zdBRMohD6aJFEfLrHVmJaFSBWUvPUAgcgu156mP6iZhtMWzHLxW9TeKXFeCyMFvVrpKitmSCHuZRjh",
  "key24": "85Uhqc7q2BWvewi1UzgYfFxniA26f2UYx77kbbNCSE2uKX4AAyPSZ19SXQFBdFQa1BG7VxV9bQW7pnvESvVVBd3",
  "key25": "1vjbkvaWeG4yeTahMgXjdkjzkG2miyitPZg2KwwaszS1NtEUtr7eEHuqyZ3UQaFseRqtf7R9RUtntrnsHCK2X8i",
  "key26": "3Ng9ydZKTJ7CVnU65mKXkt6fzWq7CyksDZ6jpZwD1zFeMAfYCE84ohrzbd9wxXv1NoyiSf8CGeYov4Zsd738xa1N",
  "key27": "4zobmgtahLXpePrEdRNDvGkxqjz1Auk7TapWDMPVRBCc27eNgLzJStkkcHu3DYLnJT2t7XMyvGBX2dZcn6yacWk7",
  "key28": "3KadFzRh7E4bucDgjDsGszDxMvz2y1wwtA78sAz5CZagGKx7Ak35HwkMD1WTuUgDrPGbUa5bYWQa4EUiuu7yJzTo",
  "key29": "2EvJfyW7TsFpjW3rrjjsf6jxXdSmgr7G1YvTLV1Vi8P1BTnkHVJpfbm9qGWRjF3HmrfpQpqTotcCM8rVZdyK5j1v",
  "key30": "uYHT2Ya6TTu5eB8f4Yu2RmQE1rp4TshKBVmiTekHZ4QwyaicxPckas9oPduzV2xr6NWTW1JkTYUDMEcRfY3Rp8t",
  "key31": "4vrNDCn4SMoNAwq5nGiyc1TLwp2VWU1Q4fPJN5AoiPFBBot7Z3aVgWds5CMkiGhDut3jY6ArqEBrXSwsUi1ncx6D",
  "key32": "3jqaocsyRhRzQZBaKW1QmYbewEaxf7gCAbUad7UCwCU4FnnfW25aUznJc8gaenjVR4aD8AeB35cQY9Nyfvi9uRuK",
  "key33": "3fjkfgsETUrQvJPoaroheNP2eEreEaxoJGevMpfSCnT8G5qvTWXx4bHyr2BTiUMXtkeuM8SKFW1dnYAmQzdgJ4ZJ",
  "key34": "2w6aq6e712a1yRHsmmgCqndv9JvU7YriqUkHZRSyxciDxZyEXW6o91Hpd3hF2U7uZZxk8DrvZLjESdNUmgVZ5Ec",
  "key35": "2WxvLzSSCZgFEghhUDKxSLfcbtbQ7KPmTqFqp6nHU84Me6so5qQZcnShJGfaVuWKZn1rWNfhHME7CbLgHZWoBNSP",
  "key36": "5bPstXmEm2rob5rFmVYcf6JazvyVtTwrhnfxaoU4FFN2SXxneEsV95f6sLQ3afKD95ZejpWKv8Q3d3ZZwLTYMvjA",
  "key37": "wAAmaiUvBgthjeuzdk4cr2PRsUYvTpwUHEoTX4dCKhyVDqtgGW3zNHJMvSmYmYFGv4BisxT8igUNSX1ipB2SxBF",
  "key38": "3Lx346ufUxDX7merS1StyRYkFWaAQsePZeNn43ZYUGbafpS6oT6yy81oWVgAMFHd5WMuXga5vwYF7atSAdKFseLQ",
  "key39": "fX9bBU4SZVM6bVbnMSJhfLPKgrQqGh3UcwWqgU9MV97K1X9mtwCwZUzLQXpMjyvbu3v2jWSSVCYfYwkHQ627tRW",
  "key40": "3Y9r4dRoUjRdnu8Zhvk9qt7kqk94xYQbKGK6qYkJXgsW8tCRZ7fSTjXo69wNAkZvYasCmWMbLu5Py1fAGfywaQ6R",
  "key41": "4LBB3rr9Kh4P8qbboG7nZ1tryHfZCFeFsc96KKcbDgB8c3u2LtSg1ofwbY2domyg8HTQPQBcCsL8FEKQGtFCeMYL"
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
