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
    "2KYngTnK6NDCg97auLyeboLjXjXhPfiGzY2s36Y8cJJ8zUkg9Lgn42t5UYjxCxgBpmmp1HJ2pUnsqDVDNi6u43wB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BffhLicTc5NgjBoJyAoULUDm3SfQmxRPV1GVn2X9bsGQRExfBZb7EH7RffVJCc2zjgRyn4wrkF3YcnDAUpvppKf",
  "key1": "5pWytb33EuH5itof716Cg8YWCPJ9ERNn7gYnHK4V7C7k5pRJ27DYvk2uymtHYUQwzHJXJLtWQ6yd3zL8P2nKVfJx",
  "key2": "fMy9hkdeKsRWWngcScjPWBsriagpXqBqQU8PVMn1QwyF5oPi7XDJmDiV8f5dQVjhbkk9TaxU1qx7nLRMW5RoctD",
  "key3": "3W7TwNzbgzS5r57gmpniZQrLYsCafC9estGrYRketFRmcuZP6RNDvwgnDfNR8EgegNNiLLoUaaPqpXGtKNuLDG3F",
  "key4": "3kmifgx81jvEmp3pkU9AAxueN3ysX5CfHnDCW6udHp8Mzwd4Z1cyyVqCCS6tqpTW1SYaAGtiDc7bMSbuV1FmB8Wh",
  "key5": "4BjM2T2XjPskC2R3qm6BwF58ZcaNYzhenpfES59P7zsXorB48nF2qWuwuV6FCX4sYN7VBwTgSoRwYWGXPeXNmMur",
  "key6": "4pTgpZD7vxPYSQXQgayuS7GkKhSnw3jw2yAP4aj2merAe7yAruEXdbNvumFE8J54ywWegch4kvT7QKRieqTuViUU",
  "key7": "2XutJqe2akuWiYaSUzWo9iY6J6i4to627VwwAZGYY9o5PMb4iftJieYjPtPVEKHpaBLtEyeXUUbuhqfZwvNn2sXs",
  "key8": "4vjrUM1cM3b51eePd3bUTvHJoS6rhLaeSReGAiZtnYq2cML6mzuTRgkVNLFppF3Muz4GCfkediYKnLeTKD9UeCwq",
  "key9": "64DM5UwD8Ywp9jTYA7pAr7seGeux1DEkRfKa7RjigKweaZqGKBUarzwhj9GEmU9t9jqWrc4uH2eBPSMmMQdFnV8i",
  "key10": "448ysFHmyqbzvTw6nbuRfzXZrRLk7gE68zP8TptaQmZLWGKWzqgo8ijkZfakyEEw8Y4HqJrBHhK3YZidmHLCpJZG",
  "key11": "1gXipjQ8z8wuxgZB6wbsN8pBX4sbfNTsXwsHhWgR6qvM5K2mieG6taptzjPE3MsKwEN7h2Cde2EjTbcqpXysKA6",
  "key12": "U4P8KthxeqrvjBfdLgwkTfevt3ch41Ne8VPY3k97HLN5NJTPvoYXAAJ6d3W6BTD4G94b41KceVnrgE9ZxoeJeUk",
  "key13": "2RofEWy7mcmjvv3iLRe9EwoLaj65MWJfgGxg86TCFEUUFwouEtS9hJ193LTYJ1JBgE1F2XFWjdKx3dmVEk4ZdCNH",
  "key14": "5YPjMoY67nPWYaWXRvqLofagL84yrkx2LKN9ngitmeYL1UtFPKvh2Phw2dXFffYbDnqzD3qCY38JacUmYaQZy2Xj",
  "key15": "5GQo1Lxskiy4ZfELpJQ75DA57cTwSZmMvVh4GshF2HPya8gWRnjmY6Mz6c4H9yrMzd5uXcBrvrZBzKsowbfKMaft",
  "key16": "4nLAxVTBDrr8kcWMAut8ep5RdkpYRRV9P9SzHFsBBYDM4Qjh2mZDqvFVp7XNHwMDyFntwpmZx3qHvuEhCPiNjhwx",
  "key17": "2ME1VXWPcURKhNsLFWwzZN812W99KkLH4XTGcKVGrsBQhmNYs9JTFkDWT7HUkRHkZRCAg5zTZDdEwgDeCjkDA1yL",
  "key18": "2omp5LXbmvnpwFSJLnMioKpYFAQAfmn6jh5RskEF9jxprVhWtjnihRsoVAy4J6zNhGuxJXbRyBkPvTk58v3iZR3f",
  "key19": "421TsZUFyJ2xYtmuHufKuZKVeGT1cdvd8UKri3yEyAWXLnAmPu4E9uBE7wDK6GC6bdE8wzSNHFXU9cQUTR9PuipZ",
  "key20": "4r1gsBucCuTaTZxRBSxpeAgKBURdYLrWyQv5vy3YFcgLa4j5GrRc7PAMZezmJ4aA8PugxRnh1tr7qA9rR4VGi4eU",
  "key21": "aj15n7J2Ls44C4g9Pj6k1ynW6GwA5WM7cqrft3ZVgz8iSGSBHcvsjNBa5hW4WS1ibPPpHdjnhSXdkeMqhzk28ee",
  "key22": "7HANHr7LScpYKUqxoFudzDbbr2DFbMA7sN93u2WrXmn4ntD7cTXDitZaTG2xt7tkbMro4wM8aM2ti8LTovPmAxV",
  "key23": "3M5GgTvFMtyZyhGfT5VjyKmeoQZtpFP3N9dY1peXM7qsPnpcEfuqRPi8wce4KMUvV8VgZKir2PTJ6AaGWfawnsir",
  "key24": "Ptde977zRi3A5kuFSSJJFJ9P841wbUyxTmdLSMCJXk7PZU5bCFu6ks53K3zrh8fbgDTCUAwLM3xHkG3USPTszNJ",
  "key25": "yQYxpAsEmy5yKw2wU3QvzXK9phR1cXaht4W3N8gSqdnw7D4UQcFtrrUi8QPoz8wwVTnhaDodwVK53MHpJEjMN6m",
  "key26": "23pGmi4vPpShg7Q3Bw9B5guPrQpU5DAKwX5vyDaLByjrrg7cNHwDBP9Vdvzg7DJiCS42xQjHrEzYhPfxAJroKzip",
  "key27": "2XBsLGTpFNEKZR5SCZYLBDxoBjC1V9qKU2fLuvkq6qYtGmdPAvxvNLybBtb1iEr3UeUkGhsdTMsf7j9ksT2ZCCUJ",
  "key28": "5asH1UsYfXgRmbuVwZwuL2qfG8zvebKC1hFAPGrWBKXTG84mmxvCB8r9TGnSBwJrBSkNjky5bFaeU6a2GcGSbo9m",
  "key29": "aKcUTQ4Uaeejp59V7Smat2T5PLdw2yLNbXEGCbmnuQEAB2nUtYRvfxNdxbtytQHALSuf44Wx2K3kBJeZT8Bys9q",
  "key30": "2mKYNbhYrDCWybf9LwewLbhEg32zRTkkNvT9iLPFxYTZjMqwGu6ef8Dfo8eFYc4VgQZSedBphxjELyrW2iex3FVv",
  "key31": "2WRLWufrgdDaJbErSkhV6DANFsVoS7d2EFnmE44jzbsPfWP2jUpUZvZt2qkkuTqsgaPq6cfqBYmKKB9Huw8ry1B7",
  "key32": "3EHVCEjEZd8RMQaFpx2nc3U36Zaj8XygUT4nDE7dysDZAS15o8wSwTmbqvQ5Fyw2hnpD9iuev7VBtSjj5Ex6LJHp",
  "key33": "21JFB75S2NDibVEuCaiqbnBhNmZv9srKewXcGq7WvGXKWGTu7Y4S314zgTcTR4uSTRR9LUnG6QmENGN2uJ5whqsj",
  "key34": "2kjedYVLNvop7FBDgnSjEx7nvVygSwoK5iK29a1S4aarLuCxouV21tkTRf8CgDV7SQK6fgRh95EeEGTLhumJfb4E",
  "key35": "4XkwbEp2yU8vbNjU8M4GsDfq8xsEtm5Hm7VXg7dvzQEkHnvkf1nWg3fwi1pqknt88KNPNPX2xXaJPJyDNnWaqbUR",
  "key36": "32L8tx3LZQY9LuBdiN6eonbiCYCM59KypxxrTPiL9RaJP9GMVVoLSfusWywziQXKzAiBvk8v4EQNf1hJ6F26vjPa",
  "key37": "63DRVqmGiZJkgb3qdqi7HyzLkav3tgnShC5P984nGpmNKg6csmTNiBb5QBFNh1xmNhQhRrDBBgzSTJvjAaFwn9zx",
  "key38": "2xyer8g3vHdGGVZKtyLB8WNSoNYX5QQsfkkmwkMx67d3pTEV6t9xmo6BVA9Hj46MiPJnbSov7ucxmdMuCzezDHo6"
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
