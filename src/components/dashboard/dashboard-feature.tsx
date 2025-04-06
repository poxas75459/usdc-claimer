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
    "5wbLDcFF5tUU2xrb1pte7qM8t4in6cFFTAZfRTPFKKShK8oNpxeyd3RQwqzve8DdZS41fzjsrdQve9m46arwJumK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BWE9crTBJzYBhiKVijWn3qeRbutdqKwAngJyz5DmDxuWNvT1DJB4zyod8Vb8nj9ReaU5uSx3bBQ6TbhurWnJgA3",
  "key1": "4NxP6VdHgGV4NpJ7yHYn15VzdXhaNEfKNEwftTEJwsnVfoVnCg5BYq9HiYfEneb3TG7KZxwUcrpFsMfdzt1fqJ5a",
  "key2": "673aeXXNiXGuCMSTv5eKDXRWdPbVp2JRShW6q1kmxX26B9isLncSZkugqiFnfGVbFCoYxK4YbgA3r42hWbWdDMQr",
  "key3": "5Yo5kegmj3AyK1DTjkhUWzyHLuhooiqMsH6Qh7WfBARaD39jsgQroVuyLnJGRMK6C3jx4LUixvgUsbPEPBjjFxHr",
  "key4": "aMfMA4YnzRW72hPFr2XHKXKTyFj9TYTjBNjVAcrubzEcv3SuNPdSmEL9m3ds8dKAuk4eELuBS6fEymvTHZ5mXDF",
  "key5": "5AsYNKP4GT9duhwLtNUsQnAwQRyMD64UZcBY48AQvfa3SUJGUvDTPJ7kkL1SQH5dKf5WkzRmpbyLaRNwbBK2VtfD",
  "key6": "oBJBRCkbdXEopLJJBbF4A1hQf7oRcqqzn38T6WhZCxXbxzUmJT1nbAzdQr8qfaCFLhMhqbAyjubbf5HtzxtsEfh",
  "key7": "LWjFUrqV6wryPiuaGcfPtohw1UXhpXg8yZ6zF3fF4vLYyTnh63NYrRuz9Zi7mzUV8b8rsbP4ejgQPwYMGkypuXx",
  "key8": "22TQTvPGR7SZWd555zMW5fLh6kTSadu3umJUguPQY8RufHPthzuAH3n5cRrc4K16G9jfxSoxcAyqPmdvwBwPiMTd",
  "key9": "3CU7B1r9KKNhdtDyvucDChRCYvFMwGDP9MvUidqymq1t5qafHmvwYEL82GwLBNorxR8r4V8XEjgEciJeB5osuBP6",
  "key10": "5U9suMHyFHUmof4j9oQqPgUH187M4HaNcPfua3sAik4qPRyzkW75ZLH9byYv621gTZahEcGjG16aicQSX7xzUSKt",
  "key11": "3SWGMFmishfWzwLcGJcEHcwZPSdvJvnLgzcBnaeZ54d8bdkCtxWYFLtERfiCDto97Bd9mpZzH6kdirwTgD1cDZXb",
  "key12": "chkR3EP5KJPnU9ZgPYwSRSMbYoHhYu13K2kwVKnmgP8Wik63rqSbZ4P1zMNyvze6uRkMu4zRvUUY2XAFg8L2jPe",
  "key13": "46Vv9TUbwJh2aPpBskH2yeo9NNtKLcZUTsKHmxXp417ye3hqXRebCCjAMPjV7yez7XM8ToMTBzH7pRTuBT8ddGnZ",
  "key14": "NsJjWWvuMhT6rPKL5mHmLTE2oUDM9R6wiFJ6pyHbj8HZfvjQT2peJ93oJ6neprdsBFoVTDPT1ushX1sguTStEiK",
  "key15": "fTWzLSfB7kcHYaowdXTdNt8hydf8rhb6kERgm6paPtiCtfpSHzPAeXGJPTLe4s2fWZt8vFad9a5D4XfFErBocMm",
  "key16": "QV8kMpHxFZ47FBtdD73GtPE4JtcPFfg8qF7PpMZRKxv7JdFEYiSHBn6zRYsaZQ2MjVZWuG7AtrsuKUUYjTf5gbk",
  "key17": "8kKESQDRjEfgpxCBQm18GFv6HieLGfCQpSm3K6YdyGfAncgsL5jxpfKGcUab47oCKz4AQEZS4asvQNxUcr3oHJY",
  "key18": "2m8dGbMR2RzDrtbiJvkijAnVuMGg4C4GUbzpxoVL3xCv3Sha5LzzYvVF86pLeZfz1AuGZ7cAqeG3ijeoFFTZNCdR",
  "key19": "5qFKWWqibNjpg7kAtUzXW9rRxu76qbwq7p1ZDN6uHzQAUDELebNFiUaLKYVypnnXXwDK64RhX6ERfrKKJiBT9f59",
  "key20": "3UFMcR29vveLbtsQHSWDiJXtHicePLLw4mNoVeRt9H6KHP7dyR8m554fNdAhtUsp1SgBMg2AAWXahX1TawWqScy8",
  "key21": "29jEXEzox4p3BsmtAtHykhNUzr3TuwQBnoZke1vuiSUVRSjcb5EpTenymfj2YnurzQJvrVhY9UfxxfATVd1X3XNf",
  "key22": "3bsBmAwEbnXpT9RKrMRU4hDTo49aShPffJ5as4mHh9sq8uYV3bh16UMiWkBk3644ZFGYQmuneHGJecjg9D9eEaiC",
  "key23": "3Kxe7fY4qCLeSM5mBNif8ufX8HjpQ2neXWLcHR5wcmRzLDjY8PGDb6kTwAgwCU8oPzJNQk2qYFSqbrri7K5rTFuC",
  "key24": "5m78NrKTmzbcTs4MvFM4nQmCfyQ3rFU68b93FHD1yYLGKkSdaiyZdsC8PzKFKLnEqGMBA5wQjL46VAcaFoLVs1xe",
  "key25": "u5JwbVvprooVEXsuSa1sqPmfp6qKzWYaFUgChdVzQbJ6jdsS6tRQYRtun8nWJ4Red3Z3nyvNBbh6rm3WzgwD3tt",
  "key26": "4KbJqanesmaPCZHWVu7LKqKfDhsdWEBYC1bz5ChQfsPr53krxoqhyU3xq7erHEd4fnB1oqS9v2Jfxf1TWuRkFhQa",
  "key27": "2MMhHyo2HGS25vVuh3m3JxYh7KoEuTZA9EctVFmL9P2e1ULmZnXhSymyXBzirpXfLbaZLrxERyVx3jqoHgTLZGF8",
  "key28": "3GsqagPWR6nWF1cyaPkQVZndYWtY6TEGXwbMPqkYydEvDmsKyWCAwXAYKFoKMiZJARF2UnvwjFU1qQV28xhMmaNY",
  "key29": "kLFXdWdQAYZjxunUshfso8YGGSuCTiLSg1GbBBdzfUnpzbreejv9Kd7sXV3CmujTT6JLFNbkFWindDNHJ48HQbt",
  "key30": "5h96ajBuroQwUsNEDG7VGQ2F1CL1c1KD5qRk2ESchqVY2NhBsB9BsccJBZBLxtGuyzjGQm5ea6T8gi6E6mYtrvMB",
  "key31": "5tMGcfvcQsyAicCJwwM5FU1V9s3YfE9jvX8k5iudRCYYLzBWuHjWAN9e4T6afFHeMZueG7wyqrsSqqGRjtcSfX3Q",
  "key32": "5jd3ioZaXJYwU9AEKqso9SLHqco36h6CABucnsJcvhUVzXVV7xwzRYq4NMugm5QnPPXKajpgYae4ChvAF59eUmKP",
  "key33": "2GQcaqjNJyv4EsHbpqUfByH7Xijseb9Qw2uTPXHvZZJC5paBhz8gUBAjjaaLVRrLppW87y1TacXPAmMk7jJDgauG",
  "key34": "5vwT3suKGq9uMxE8NN7yrFGqpDJH34eZhXNTq7DAjwciEpmy5PRk33fN2zyzvCS7RW4EjafGabZJQUUJbLpLFBvC",
  "key35": "appS5kxn6DdAQFadK8FRVBHqPzRZ1hzDpvgCDZj6UBAZxVMHAqDUsCporczLWv7ybPrFspyo1aqahqwBGKkB3pg",
  "key36": "6365nGWETpo4pcxHPXimFZ2HrtYe5Txhm37F2HxBZRWTPnHYvqaEzUXQttDVEEy8G99h6dmcnA2kRUkoPKd3axwx",
  "key37": "2swBw4D2FSygfF12mZfp2QXZbWKWG6gQTC7mzhSEGgE7ASTpK8dFe2B4EK7dkWHMfE7j9m3AK7B7k1g8mGvJXxYd",
  "key38": "3GDZjzs1uKFNhnNTio6heDeSk9iCoeFfKsTuq7mwdmXiBwnViPbZS4XKLyJcbfs9rPGLZtsHqa3npc5mKScLze5j",
  "key39": "24HXdZ3iqFhaVTTuJXEVDDj5YEKEbWmKUiiHD43UFuG163UH611svq8CxGKGbAgc4nFUBgydGRTBrR5JhdNHhVRx",
  "key40": "3M79TcvxGWu2nPGpnNhhbHP7j3LKFAPeV69jCZBMkv61aFBwcZVWhxBBsW2rr8rvV1yA8jP5vU8soqkCMWHZe1bL",
  "key41": "53As4eBSCENF2CxDmGD2wb68kCqHy9f4gUqQXVNWcdb1HWBS9t7gHaNy9QG5GUH4tHsTNebrr34Ga1TnoWhkwA5b",
  "key42": "2Lfs5xXNqtP3FcVdAaCsqpsF2Kkmar5fmQixc6DEqhaU2HoucfqF6xBL1Qzs45aHMydYW7W8kyHXUdDu6dAMGioq",
  "key43": "5561y5nBqPtdMhJhUq8x6s3Q49Zp1h1hpgqn7hadx2ptSyzk8D3ARD17bsGCUbLnWmauDY3xsnM97bxn1a6A4jte",
  "key44": "54u3u1m6ArLFQotEYYF2dX5NwQM8AcRHE6BDaACHZPervqfwtd15tw417Ebc44dAgsHjpnx4qY4UDgFL1KeWUeN2",
  "key45": "555edM1pZcJNhmfXzY4wUoqSQ6FTAMyGyToUVHKXpfjNL2Q9d2Yay3ZYzqHbLcqSj28WBPkeokviyPJ54BRvqWrR"
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
