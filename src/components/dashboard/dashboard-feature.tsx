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
    "2RvfoXm8xf2j3c1UhB8Jfr6hkPRFFrHqzVsvyU8w4EqCSrY13nivNZ6UoE1na8B4cLLbTmMtjbbJ5vbZupgvc3Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XLpnUCyPSV4Mk76KkP7q1sEhBjSs7EgE53zV6X3jTBjch1aiM7LSHpn6uN8HTmGv7c5Jv179ZvV5avq2X3XdF2P",
  "key1": "4DMEkmMhC9JkVBkcA755BbSnuh9P37UCkR5Y78hSLMvaWFxiGGfrJ6oLqmKVWrPcbWkd76do4hGnXRRcGDcbbtdy",
  "key2": "etcDRe2mq23iU4CLvG6zBfB8SjVgs77Yvz4ji7Js8LHj9P78nMQki7KGrUYrthvkJ1yzmcrXJN8gNv6MZzV34h4",
  "key3": "3tNBFh6Anha5zELByP48ZJy1MNtzAmeqBucp3ZUWEUVGu4g9Hxgpf2oMcXPnuSNAxjRXZaM4SUaEoG2ZhHiXzhfz",
  "key4": "DG7jLAHWAAAZA7qg5bLHRzTEZAHeyoFQgGY4o7Wz1Xo2K3pihTbcP8GTZsU6GJq91nGmJy9pUJaaPTy7E2Kmqt9",
  "key5": "351447MgcyJ3g5VmLEYkKAiDS1wdmbAoLcZXcL3yDHKZuRmnETswcSKZXBqH5Ser8WbijtrRwMtt2iAydFAdtxen",
  "key6": "3YKK2WjjspXbfu7CtZsivtCScTaWp2KiCmw59AdHEyHR2KHTRtdfBfanENXTmi4duBVMsci9Q1fvi9ZSWamotQes",
  "key7": "5BP6SW2zrqP353STwgLZL8g6WEpmKLubvxW4nJrfKFSie5d6ZTsCZ7byvNTJG4ZFRANqnNwSwSEK9KNtXxcnZSp1",
  "key8": "FDxMNwD8mzcpCJBSLaRFG2oFJK49v8g7nLFyKcFhT8ktZAxojwbVPa68mYs6ZDpHn6sZnyisrDp64Fsp9ZX8b9j",
  "key9": "3Bgqs61PJ72BDFzEPqxy52bpNiE89jtvsM8UMVZWyeQF34YESjzmrE7t2mrCNz2DSauLgMKBVQjeywk5EoaabrQq",
  "key10": "4FaVMw8YjJGeEQhjG6NWGFNnpnRnVJQQbanUzC1p8LBU81K4j2Zs6w33XiyuRt3yFyxm9ctf5R6DBmACe4Beiaoo",
  "key11": "2CwpRpDJckX7Q4u51eFJFNpoWL4vRTpLGZkNuRqTrxQLDqo7C98ov9Svn43ctddzwwxditVLxqDVRuSH8WFFGF8e",
  "key12": "5dNKYUmz51cRfuzXG8oRJUyf1g6z3GohKq6iiMBJ4CPdB2QAT1uSyThx3362ymTjnd1oP9oKvuBdM6nqkFNhHxz6",
  "key13": "525zwnWqKmx6fwXoztTYYr32hrFSfPt3MkTUvYrPdeJvtRK4M9ssPxj8VPdRtKsSebb6GpXNZHCEagxMcVnds1fK",
  "key14": "425fY6DpByrjrZrucpo7FNj6oqmW35MUokg39uLssuowdrnr96SYXneFPFPZ6AECv83crPCqZqeTnKxuBQd27hMe",
  "key15": "3gqT56jDoqggnVWHr23AWteZwYLPbBaQQkwDSJ8vMbwkTg1cb3D8XsE6RVU8AEJLkreUoGBYjGo7ff1hPK7GYBBU",
  "key16": "FZs68YyRqewKQBEYb3gJMvRLtZQdAV3oJqyyVkdRPNvwXSF8e9orrUAsGz8k18DpLEhm5Fq4a69478J7dUt3YRL",
  "key17": "5g5opCH4S6RQ5KDqQDL7Kr7G6Lo4wYWvHYbjvrPpVrqw7VboYvxhtaf4CPTL4YTX7KHZQSXepn3Yd7hN9JkQMHCE",
  "key18": "5WETfQdZ3SkdQZH2jJt9ss2picwRp23ctHo6hAWpafeSsTX9iV4pPJisamwy1DmBKSUdxrXjfiHQpYXrWFBpZaMB",
  "key19": "4xV3cRXMwt3cx3owbgnAJn4hRJMZM4Atoa7acM6a1SUjMyuuRkh4de7LDiMGqjguLE46h7znMzweCQYk5D82rFoy",
  "key20": "h9wU6QSrgnkYDmVUusjZgr8i6Qbb1CDTjKnGgGprguwwDA3XBwMPRgm1W8cWhbpX97L6WuyAxuJTAxCzuHJGxtQ",
  "key21": "4i86rw4vzPfyGtDvtjV83NjH6j2mMqQbdpiRXFUWUuMRehxQwZXe55U3uSDFk2DFNo9JxWU2N5zyLoVifMqxfDct",
  "key22": "5dMaC9WqXf7CaR3qzSKcKPfFwobMqU8icVFGSMPPq3KPvLohbnNj5WD2rYKyMqqWGn9fLpyiw5pPxgPQphMELk5p",
  "key23": "RDWJe7gKVJaMPpk3e1tt9EDwzVrtyXErkWz8UicHqCuF4wVLJDDNxk2VfULXR1xMRv8Gf1zLoa9nJf5HTE7N1JE",
  "key24": "3ebrcSriyteKUMYJrddsDBGj5wKK5H2oTAiE6Dsoh4byzysgJ4zfQh7Q3o2M9V4wV1YqGkyPkTJh9uWYsKqo95SE",
  "key25": "CSopa71SeuGsmrvWN8X24REFgjYVGY9tLGKUuPprBnR1z862JHCg3nCfVw5JA2nyuoLAxJ6roj3sZaehbaz6ghF",
  "key26": "2PLK7tGiNuxuEURConGdXCcM7w3UkK92CAYHLxzz7e1jABGu229D5dPziP974ALKAzdxPg7H2viJGFwngefE9unC",
  "key27": "5k5SXn7QHtQzhfZecVUuEQgHdjtxQzsSn24zQYuwSseiyDT3RN8kfXAnvbnJ6PnQkJra4dMfDeZQKx8kU2JWWFV9",
  "key28": "3z2Pz7jjQzASjSZPta8wsZypHn2wm31w2XznMMtvAdaXyW2RYouMLV7w7f56QqD7Qr4X7RppkBGpzgPq35Jf327D",
  "key29": "586zYMdLyi1D6dv85hHfQKtADRbfG7FLUhC6wGKtqoku25s8H2XMp8xANc1tWKQ6dPFHpZF3rhef8xjTJ8saFii",
  "key30": "31MixYCDx3KwYSij9n2qSvo84CMVLdcqrhMyZgroK9QQ65deSgHAv2w67Cs157SGPLZeqyqRwMSckh6JrKuCkD8F",
  "key31": "3X68zaMYYmRZXmkAScNzDT25ju3coQGXwFq23KNAttQHh5FYH35MeZaCKgJ4MefW9AHZiFhA6zaaHeUp65yVPT8L",
  "key32": "2zsMREZ3SywxxcG37GLx2r9PDpfbFYq4mDEHBsvDruubDRPnot11BDUdBf7Py42e77SKJcRqUDoXNCuUnWnoVZyg",
  "key33": "qnowbumV2SRm9emwMgHbGS1nB2NxUPyvLeV8R4g8H3BYsYRXEPyS8f5BNxq3cHxNWdzX6NgqQi8W5dJCk2AVJFT",
  "key34": "oMbvwKv9v2w5EjSnm5KmKBxfaKmxEXY8jjNuU1M8btka3oDBR8hsDe74y9WSoYCbYwEVZfhr8i5yQ7uHsmJYMtK",
  "key35": "z27PUVK99D1NWyq9LBA1gzupqaFNyJu1EjhETDzxMsG1oHgQCevMVGQSnQZR7G3sAL5Dr2Fqwb6HT5PBhGe7n2c",
  "key36": "5nEDDaWAUhtAHU9ibXKT773kQcnyEEHK4CmQVxJvN1PmDA1ATftmyFYhchy5kWxVsHTzqhjXcP6pY4sX79CkF1Fy",
  "key37": "3LDkEio6vaGPedMRLxmiPiRSnMrGEENAiALuqRaoNcAtpUi7qLE5Tc4TK9cfiDFgoXxuS4g92yVuGwTE12F5uGDc",
  "key38": "56Qe7cxqPYc6Tnicf1uz9Ve6a2sJ9BoVaPSBP9kAZcW6qiBjqPqFrz83LBeHK2wG2Byq8REACy4qBNsyxt7UGzJM",
  "key39": "3VwoFWTGLiATyZZTQTKbL6wRzaewoXK7WVQdRjCHJBG9hgApYBT7kHDLPuoDck3yTeMR7LTfjGUdzNP37nXwRn6a",
  "key40": "2qe9dHG4gM97fWM7LUeeLLjSMxjkWwnvs9oybP8fCs756PQHGVEzVAkkuxoYrrCRZxBa5ApVhTTZnbYASkZR5D2R",
  "key41": "3hHZGcZES374QCGwRno8ou8uLrBkQzPGMWS12FGF7sWi8Ywhk4CKgvPp8KFHtqeBcsFJrYQNXksnWq6RZJC98x7i",
  "key42": "4rRuQY2dKduwDBjSY686dHGWEc2ZwcMLx3XdqEs6aJhgu6idTPVPVso2YtP8YNwWjVxmT7WXesQWpjgHNQpXUNTn"
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
