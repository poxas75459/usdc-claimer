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
    "4sUmAH2jkX9tJMwncSynmTfP1BnARMBW18GShcNoZZaKzZJuuJqyBSJgYCERqA1ikc7AB45KEdpWFFx115vLZTDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MaFF4zrW7FqPkDdTf63gRj3yFo5znAzFTPMhDUC72rhcp75bekkk71akSNPnkQnoTBCdts8uyNEgUfPYop1Sdgp",
  "key1": "3z58Uu7Mgw46Vrzy7FWmjbEj8Gb5im8PA1RojSFsy51hjMmXBynj9naL7nB3UKS2HqzEr6qnNyDuT6a8NbtC148A",
  "key2": "3PoSP7kcggKrx3xqGJm6EtKcCg7V7ZRJUmUD6ntmCHRbgZLADG9XRQgGYvjDYyrcpqzEk4PwyPEGgQnoADNWYzkb",
  "key3": "29c67rtGdaYFE9sMrJypvnS99BsoWZvj5bvwnu82sPifFt6YNykdjxCoXpznKwGwB52N13XnGCdj2ASLxd27YkoV",
  "key4": "38Y7pWGxn3tgai5RNJ8MFmguzNRK4df5EDtPreUjhX8SJ9NS7DB4DVGc6SnEmbFx7gyd8crN6Gxj1ANy54tx31TF",
  "key5": "5MVe3N8VccNndGGxnBsJbmSmdXEKbBWCSdf8NR1Ey2qKFHRmaNcLxAn2yLjSc1VWVb41tvvd5rLPe6KQvqVkCVyp",
  "key6": "3bNqgLpFqUWg22LHEUrFoJE1WdghAE3oiba5fgbtjwkLsTfry3RqiM91R1d2gwG9pbE494C7x1TrUUQNGTzqDNqp",
  "key7": "i2vK6QSLJCMBhfpGppigBUvHsyESgDNnktVaYpby5REnf2k3kWiPSUD2Ttaw6UPG3yCkDFdu6S3BNfx3u9r8Mkd",
  "key8": "5PxtTy9sBDCThtg8py5wNNy4nkwtGeofXj7KiXJf6DVSqogqXmMxixVhsQ28m7SRgk5puT7xh84HCgJR6bJo5kjQ",
  "key9": "5SRz3sciWGYj7ndcFiGxCyevF21gyNU2sZqBKKSFf7z5kTsX3gsUCCxEL5iTw9WnMCP3gcHWpu6R27UXmE5A8sjG",
  "key10": "3gWwyTFUddsKNGzcaRhvi7bRnZHKpTJvH3N4uGRfjhL7qBgjGuGGWvesc4XTBsvB91XmGxzik3hch4L2cH6BztuE",
  "key11": "NRnooLVrbfXV4FGRm75UkWvHbzsCGv7SXSbFGrjVVWW48dVBRoLp5tVFGSe7YfVhHMxEZWp2KpwLqYWbnRaNLQh",
  "key12": "MXZRf9t8ftsMVkKmdmv8EL6ZzSN37J87wJejigKnMJrZ2V8DudbnJR7SCUd7tbVaQq1TACkcrc1kUW1GERsdbu1",
  "key13": "127jgqvTiMCYBht12JuV3puadD854seGRtkBiTREYZTznCPhq41PNAiFd3Y3WAzDeeUWUmWYqb4uBnTtnbqYVcMc",
  "key14": "3FhwEC1RLDoL1z3qJFbuvAd4UespuVHCHsuGYrrwwiNKuq9goHZrGjq1UtDLohWFKKcZPLEKjjJR6fowXgFUTRQv",
  "key15": "mSdu1N65eLC79FgHKUhjMaSMu7AAa3ousYoVFssYYwjTz9cWTRP1ssjtkddyDp7FrrGZcNdBNV3AiQDqBDfXhS4",
  "key16": "VBcEFNfkSemz3Kb8pjD1g8CY3boyrps7PXaNbNZdrQ9gm2bUxVYDx4UgW3Arhh4ZT9H3v9UVsbaUk5fWJqo5Myu",
  "key17": "58mN41yneryBHwCXh32kLaRJxCeroKvYWY4299Ys8DMiabNkiiT6C9iMt55rDD5zuj2bMintuQ37LrNjoHaN4UCK",
  "key18": "2Ram9v6saoWeDr8zBVi2bDzXW9TYCtL1sPdHJeSgwFqFQNYF1aXn3hAHbtwtN1TT8EJW2H76qFZEiZ8LQQ4rd5jL",
  "key19": "etmXJcejKbDTEd836bTLchdfDeXRVc2iqJaVMH69tC97tFi5sVcz8aTHU5PW9uzVP4HXaxVu7vFCzog2wJZrEJ6",
  "key20": "5XCWd4h8TKwsmFXR9ofxQoLcZAX159EaGMTYkogxb7xL8Q2yyB7MH2oKeENsaaaET71BYcN8gpNNko4fLtouMH43",
  "key21": "yTXKhk3v4AbEqAeA4vScDLx9viy7MozGxytPQ8rRaV31nKw29LFhy24mBGCuFvL7GYEudRFdAiJyDhAXfWTVLZK",
  "key22": "5zLkCnYNZtdjNifGaDa39TEVAdGwgSxQKH6dAzZu9pTdjsdmRCHnSCT9u3KVG97R4xEoV47wB5pFHpQYHRKSmeyY",
  "key23": "3ssNcWcq9yvL6iWFzhkw1yZyDK5vwSowThBnegFcMvRw7BiEkJZtVFNtUrjbErm2pYYH3jDNXmBNcgMpJYDtpfhk",
  "key24": "3hZBU17Bm3GtfSfXPKLyaABNw99kYsqqviHMNprQ3De88kKL9WQ2rL4BKwQ1m7q55CEUkdAuBYQqSDNmhr7sxDoy",
  "key25": "2gpw7CwmWU8o8J38qFUbFZZADyXsThLnYZ8HpyThEoeQmWbaJ3tVxP3WqcUwyDP25LbRD652Wxfv2RcpuyzF6YEd",
  "key26": "ik5Nm74mwZhDYBdZwNXdWeqJBSA1KGJ1G42KRzjgwF7X5JP3DubczRvyPSupRzVqGy5iRSxD7ABVyjhjj7vKzuF",
  "key27": "5xMSPGtPQ8JbkHiBzHc4MXw2Ye3W7DmyK1Jzunk9cwCzQznqiM8uXyA7Fvm7UqHqhw6ei3c4VNG6fAj7MNEEgDry",
  "key28": "ovP8cUciCR5RXeR7GUU8Zcxa2qj4iH9KwJucW1uyof4yXLAm4cbX5YV6QMdDADbLkT9BZGuUYbYMzrH9Fggnorw",
  "key29": "vV5Tg7ZutwNzoSWvGtbGhrXfutitrJK4Dp3abx7K8juY3yeviA4LQJ6GMbuZ3QEm3hdRdaXKvKSuNtyDbUJ3Rn7",
  "key30": "Qb3XvNDd6ZVYVb33c8aHUaKWtgMUMssPPvNzJnmdVYoARuGRAzjQY1VKL6FxWGbxueoxMfgWPFLskbx5tE6rdPM",
  "key31": "3xscpV1bDU57RPiXjzoHquxYiGBd8b7YNMdzyFqnUPwAD5s986izgfxnkJDFo5x3nrMNXUTJdtkqTY1MmyktgrtY",
  "key32": "B9xCrHA1oBnNpL5YVs2NKuswrBdinNDenjm7JVnFhr6JswhiqUiwkasmDZeyyjxRknkeG8g9vKuS2eX5wXu6xwb",
  "key33": "2MdEzcERnVWKrCESAbHJkDTzC3ZeH7CHGapfULZyptFaHEsPU7s9sNs6rLBRDM3fHVMwGHeTrf7nkj17oQBLXxUB",
  "key34": "2Gvaudw3GztPwBbVKyzQS1Pc7TBQUVVYr5H1dUe4Xdu2WRZjeTV9YwJWm7TXgQ4SS8CR3vqRE5u8RfeZtGZYBvDG",
  "key35": "2qTgTYs5ShAnCLAtyNLqtfHEBkbxLWs1MUKSH5BTK1VM8JKyYRsBMWe8wKC9T9dDmMp41pDpEHk2ztwssfAn7ogn",
  "key36": "5QdDDTzqRJi9DFcJ7wsq2MBSG7FEGh9ALeo8sGSeRZWKVyDDnH3SopgWu7KWu1o6j6vjJyaWHUyz8AyH49yjc2Gi",
  "key37": "T4Am7jFDq2jw67pJR4G9EA3EQPsXxM9xrfVi3TEfhypmNBARxS4MQ1oQgbcVBQwkBnD37r35ZGubZ7DVBkD5A3j",
  "key38": "813AQjkyiwxN45a7m6omxJaUgqvNUm2hzWuYS79mnhdhrkfZLcJekiogLtxMAUqbg4tGhW85PCxu7s6mQsxHWHs",
  "key39": "4zqrYpvBR4PPbf654Q8ManPEBARpg5CJmLeLyEvgK1eGEFVhggD84CNN3joHPeAZL4HZMZUgFYVmQDbG1FyR3kfy",
  "key40": "4we8HzxeQnf1t5McRhFRN5WAXaV7589pd6dV3i4aRtxyq7tN4bcxt3vJtpgRj2iN31HSypG1MFufGBScy5iZs56s",
  "key41": "29DgDT35fiJstpKfUqLMnvhzS292vxNbpzVetBEAd5YQRNDcAcD249PfD2fPKEw7mzNk5Mzc3HEecNQrK8daD2DR"
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
