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
    "R1gCAknt4e8Bm8oaJuAZLYbASjEQowVuHNxNbfc3dAHU46CukcJTPdYSh8MrJLNF8rBworPXzRf7jT9NtTvgUhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32j7UdhfMck1mx2thN3eDxqtjsbtVktbYyDoBfEFpxshThffWLGNdwm3wCLZ96FhsnGoZnK5k9tW8v7Z4CGF1TYw",
  "key1": "4AsjwWcsxCvYCxZRebYujJtPFkZQcJCLNjjYzhATiXmKED4iGGdXUJaSaNbGLuz28jCab8eVdhrEVGB2FvxmjMjx",
  "key2": "2eVUBrDJ5AMVeYu4gxUBgqUaLvwduq9svHt2fgq8rJETbJULScUw9cCgkXYuh1ssSmyHXjk5gkhXMV5PBsrmirP8",
  "key3": "4FZjPn9EFhFQ6Uav2wxdGscYy8pJrHVBjg3ez4LMHsJZK7EguMkstDuugew9xdWU7ZDXpBE6M2jxjA27VDUVyLYy",
  "key4": "2fF9AuQ6TwzfphDfa3mbRU2mxWkHzzD6YwHGMUHHahzVC2s8q2QbAkAHZsQ1P7M7A9etv1DkQjV7CRwy3x6AQCk9",
  "key5": "KCpyc1XdgqGwRUEBKZyfovMNzvn744fB98KAFnbg7GqNTzjLN1yPovkrS94LmZUbF5W8VfYiz6PaWtXVAN4F8h9",
  "key6": "54y1VBh3mVzTGghUPABaayW5bF7aNQd4BL4MaWpFeAunqaVEQftmaDAvG4kq4MGc99fyYekV8Yr8sWDANmx7MaJe",
  "key7": "bx73qu3vPqEDobWNe5XHxpXSqbtT5THQNhGdQbRUzNNpvw4NrBkscwC6L1uBre8s87aLmu9sC6DJXnS5DZmP2QG",
  "key8": "nrEB57oVNXMDhrSTxYBaL6Nn7mzoVp4qZXct48Xf8Pb116PGKZagAjqam5iemweCA1pq5rS5Qsd6psd2MwcR9pm",
  "key9": "3yHco3oC9ikATViN3phttqvVSzrqENqp14XYma5oYsGNdb6w7X2aVA4pBtuYYKPoJUF4ZhYtSRVsxnov8CDBaPfF",
  "key10": "4qEjMuL9PD6S28K7FLLsBeaib5CPQu1uNL4axgyemXmMjiyW586fGoW2LrcmoTDhjkNfFp73K5fsxPbcFQ6SaN7S",
  "key11": "4KuTw1QaKe3koBSicuojdiq2RcUZtmxhgKSpo5ZgVCX6mNC76YWtayjkycJm71UZJEXfUj44pX3R3o9gCCNvHCi6",
  "key12": "3pGFz9FB5kK9vCAKxX1JecD6de8gUxfzMyqPRVYdyG1M679daCVoY7aecxeDiN6RphKoHVzBCd3xFAtmGs6fav5L",
  "key13": "4LKfB65hQK8LZg2wVAFErxmD5yGAAeSH9zyGZeWaviTp11Musg2gk17Le5s8cN2siA6gyZcgSchwGuwq7pWt4iE7",
  "key14": "5Az7REJ5KauPaKSNuD2YgJshsMDRcVR6hzM9MTrwFxda138XJyPWJkuCapcCUChQfvwGobP3AeB6qnxVbTwKmab6",
  "key15": "FVeXc8DCuKYNFkVXWx3TkRCwnYq8M7vfncD26fusqeMQ27XFvpHJJ5HYEbWpUJU6LupGCgPAT1E3e5QdFL2Sqey",
  "key16": "451MkgUdhoX369gjJP2NbEqt7XMDJzimmWxmDWXrewzeS5WUaZ8z1VwSSHSxr1jtxfGqmLpq3vdsJnBsmGQAPPYa",
  "key17": "d6L7H58zok1cymnJZQJg6mAq3iibmAHLSrgLuV3Lf9F5NgR9MghmcSUQE4HJc6kNrc62JmHtQynjdCRfGRqm2oS",
  "key18": "3muwYr1ps2Yw7Z6RWVVQwK4dp3XZ3FGzAvm4YqZkhxvy5v3WSmheVAML4YdmaHaDn3AG9z6aUkFrNMkWmWCf73aB",
  "key19": "3uonKyuzQqZMqFc4bneY3dhJ2ANXrotxktrf2TxQ3NpFFMqXZbKibnGbKHCYLBDy2f6J6eoA8ZecuzhQ4CgTTCH2",
  "key20": "3jMPHCAJbDfD7Qjx38jvbRS8QJ7vceFU8JEAvUAbTFjckUQzHhCwfgxT5A41FHtAkmwuz29dmMKNtTsNkDHTUegq",
  "key21": "yHsfxKWhmH3h3sr3BqyA3UtivdrxjT4YTNtLrWScn2ym2hEUJMys8LjRiTd1ViEbsaAsmB9QVzVWwc5PDnzJEtx",
  "key22": "3QF91dZwL9jssPe6GnZCsgrEDK494ANWGf9MdVc9s9LbVtY9WJ4doS7v7JM4E6rvp3jBwhpeFV3XxStbfufCsH9d",
  "key23": "3tJDhv5xFDBTJJWuccR6Pk5Fa6VRjE1wgTHEjR6oqV72a1YLtj2LUBZzaWAooWRXcDaQkXsH1XSYiCqW8tFxBci1",
  "key24": "5LpexfSj3rXaC7EML3qqDcrRKdoPrnWYXqkZ94mStfSZykqTFcMBrx7UVLpaCndxx36q5iMn4mJo6qZJLwhdqoJf",
  "key25": "5ENmFNbbdDJZn93bA3XSZERbTS3bCvaHBfo3kU2eraFYhrajmyyAd4tvrrwsgoB3SkHWzXdjhFernFFeGVfrZcAF",
  "key26": "4ekd8Xy4TrzbiYscJQVxMJNyY6axQqteeqi1z1UwcmUY6r6TMLz2tziVZwMRSEPjq5EBZcYp2sbV1VYmNQHUMykM",
  "key27": "2kdpCHGuWBh4oaUkwq62s25ereXqSJEayK1n9bfY91XSKdxfSt1aYzk5G6TsKQWDKxnKA6DiQK2d2Ra3bRqp8wY1",
  "key28": "3nsbKLQRfQDmYVmLseQCY8Cxzkcbo5LaoDmi4UGv7eVwLYS2tZmssSzxueVaFvmjw3KD7AJH7LXruA65gmKfMTzA",
  "key29": "55LL7b5Zx8SUebR5QWdYytykm9pCaGJSnxUFx3EUcXdHFTCoE1fvyiA7RnTMyMzzT4Vs72Cb1W4adnu8ha89jZKk",
  "key30": "3cDMqz8NYUBUzMXPgQ5CW6S3oKbesAg3g8n49kTyvkZCNW6NtayrwoLDQkm7CKPKrwfYHKUSVXfL1TeQchkSkwDr",
  "key31": "41rRfvAv4CthUP1ivnUu3jNAaHUjLFJpJBRMAhBhQ7hWpsznqVZP8PunKXEVFAoUqKoPyeWpsvBfWEAMkYNkktD7",
  "key32": "23o2EChcKLLWB8NFroZoYRyp53JTszTaaCrVizNGyKcdFj3rjVwwUVY5DqrAdFSxAU3N1NzzCXUg1pYF1eqtYgVL",
  "key33": "46Nv23VFsHDVK43KifcCg1p7z2B1u5ew8jLhJiQTaxEffszazkoHf5MVVCKmhPHrt6487Vnb1d3eJqx9as4otKbz",
  "key34": "Ls6BqiGvjWzCu1q5dK4aUH5RpukFdZj3WSTPR9u8evhpqwhsJJUrjMoxA9L9ECUU4LQtgnZ2jUuY3kRxznMDGW8",
  "key35": "2QgxvURqXLoUHH7n4TEaFrtWSYLfAQXjQGmFdb4Bd5NwvMgsy6X6Y6ztuD1Bi3dXYHKJnwVWJVhS8nJGsNVA5SSX",
  "key36": "2u8ocEioQDpfpWttzUPhTq8qfYt5NRWHpA2GLzf87uADYoNpVZsd8iGYhciEDskshw6rgTwz8g4dKJMdzGz29fWt",
  "key37": "VAGwC7MfdddrWeC1c3PoHSvbWk3Dgxry3ZjSyaCobeHJZCBottZvzAcGxq3UvvanwFLBjFfrshEE3b7dJ5hVu5r",
  "key38": "3X8cATSBcxPCWjukczqE2RCA6KxeUkTshEtx9Yn6KS8iaGdgQd8svmw8Pw8gdfrG9fjmaShWURJuxYgYdTVqYPiC",
  "key39": "kB65eyJHKqAtx38Wu1bcxAwsX3hRYz52bFMf3RZiHY1GQEe977xfkcBN7zKpVSsce4hGksZbdUjL5MY6kEXCXTe",
  "key40": "3NhcFBxdHxBfVYkGUQ2SSxyjkeXz8bAKK1FAPnjp37gzRdyx9SCDjgGUiNYbssSNJPqfsLEo2bP5jJXSzPypeeQb",
  "key41": "2AcEYYC7TYrdU5EaPJ2JhumUeaDLUdSXVbFPhmWqqRJ22cWpDQAGjAmrxht3iZgcBNTZbG6bZ7kUTBT3MYpjSt4x",
  "key42": "41roWE7BErdB7K9uhyfj2TL33dFFQ6s2DxLYaZCoE94NGXhbJobRuf9tVd2nq85zk6sYZAj7tY2DdTGYzA9Qu83M",
  "key43": "29dwmgiJh8D37zZXTqGfX5x4ymFp46zPtsLh1WyQ8x8vEZ8JRw9gZSQg59qvA4auKUM2ZUNTWXGoBq2SjNtrXnLL",
  "key44": "4k9Fu1zm5RRf23pgSv2VJr5o37M7t5ZJt2PBGsU7k2BAhfL8SSRKeKZbJwZw8r4E6yXPVK89k1Qyyr6fXt7bp1V9",
  "key45": "2fZMmjZpJgAjouASA72pBdCfHB2vpV11DBZ4Cq41DCgUATbLZXeaFwTLZggVk6vyZoexEyhe723PMQC7eERZaDbn",
  "key46": "3oG2xK1BBZPA6KKS7H413mouTXv9GEXRheRkh6tcRGwFQfBQfsHdfaV6Tc3ZSJofvAEPWUeDRhaFNJ85GrX13CZJ",
  "key47": "5eQdcvEE1ZW86Mj4YEUbkgLAXNBKQXCPU8sXqwNNyh4HDcYktkXoMQgGfd5DLNZx7DPKbmDKpNGSm1RJ13jkCzZn",
  "key48": "2sPcHwRBQhWnxW1gKMvzu7qRQkkgtg5r4gseC9GawGYi3ahwMvegCs6NKNGoHjUzh6L6kTzN1nbbsuzQG6T2n6Ux"
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
