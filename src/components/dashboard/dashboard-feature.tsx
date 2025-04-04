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
    "ZhWrrLUVGN5TBwMyTEL4x1Km2bAxUwSnCmEEHBpuW6h8W6C18GAhauSthFMZbXduYMzwm5Zmb7pXbSj8WBHQwL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nHB2evwb8e2axQBcK4Cw8fUKEMqaQ1Ywiw9PUXErScqcWsW5qVtNsnV5BhNACsH3wdZZBEoHS5DUL5MDaE5PaQu",
  "key1": "pFodiuwvPhJYPpkMoviWFX7M4CFQixRpW7GFnuy7RPuNdSaGmNqfTWm8ov1JFPTBzgAH5jyLaP4LnXq24jkvqdn",
  "key2": "5xUXwkof68j1f9zsM6TjBcy5qkgZbs4mqhmkSPZ3XEKpH7VUUTk9XgVjRoRrnrXPc59xMFpxtAA2HLbSu75AGQQS",
  "key3": "24hhUavtuL9qCyoS36cVugUQg3irAFbC9Xv8G6K7NLP1qwUww2353b44f65nvzgyrfV1LhBZSF4ZymrgEuavV78P",
  "key4": "3rStoYV77yM8pnDZw4Ewuvhy1QdaJ3yWZ8Sk5RDfXDekwhGtkYWnvc41wzFVC6oCqBMGkmQus3cF6cFaKBbYtFBG",
  "key5": "5NX5W3qX3hNsENAE8nLrknJrqtVaieRX6J5RDpcnhWYvs1NV8rrptD2cNbZhKcypAtPZxM9Y7PZ3C3v6n1pWZbXu",
  "key6": "4Vfnq4993PvbCKfv6K2DQ2Pwxaa3ckNDxw5uG55isLDNibqSJyyPUcizsudbgjuT9BMs7wKzwzcdbjiWsZVLEhwS",
  "key7": "26XcquUVfh9ZjMcBD63Rn2CMF2uCYH9yz1iZGsFJy5K6fHGnP8Epg6ZJaMPjSZWkAwV7iWKAxE8uJR76puj2LBpf",
  "key8": "455EkxDVEWArmDmBoGTt9kKspypTNgHEukTCAogFepBndpAMXxp7nbTRBz2cdXHphedH1ntbLwDHFh6NYKf1QvV8",
  "key9": "5DnonyBRMps6wxj6ETbnRYoob5LK7gNGxpuEx598CQX3KixXWNDxJdQDZT6etYbEK7nieBKdN4MitzascJTdEyUW",
  "key10": "2vpNGphNkKRJKBEVWxjarkJhVrVcjRtas8JXJr47gMTYhYKnVBUCJ1Gb2uppyAVLcngNtXMSB1RuWJ7oe6SQih9c",
  "key11": "ymjwjohoc5HU7jdXkkhiFoYeTHz4FxSRAmCE4EC5P3zHbh296XmyTwgxPtvW8B7XCM48aef9ExpXq3839wmKUFF",
  "key12": "2Avfe7wWqonDd5G8WXYcFR7A6E7iQw1zdoyXm3eskcu3McKfeUj5eGSo98XURKUmbVuFnhEEuSgw5f8hqJ7vmtU8",
  "key13": "3bAP6cztohHuAxtBmT6T4Lw5UQo4hmHgYA927QxYYeQrz7QMUw1GaKG31JExjCfggGxJk6cLA5DHtzAkMfi4NteR",
  "key14": "4A2jUZXnLMd6PToPXzNnqoE58mU482nCjCdrcdZiVkUSvhGphdJ3fkZh3dirW7S2iSSQA8hbPbQnuFc5nBef52EC",
  "key15": "39yzFfXDZyMGKYBz54VcnswgxNZRgGUAGYWAmEBJhZe564p1e1dSmWssHvw5H7yfzh342UeXaYri3aLt9FsgFqL4",
  "key16": "EguHFCHt79cKQvkVwKt4DDb88mGCEAeuHNMkeU4Zut5BQaCuM7mEdaYYTBSnj3GcDcodsgLo2xfd1HY6hhL1Xnn",
  "key17": "5MV7JVJTS1mAKyUVRBGQHmLZmcNum5yVPrjUPAhF27aAVcg2Ej5ALT7EDDSe5QFJ3gn3Vn6bU1sBTm8SciqJA1Hc",
  "key18": "5Eo3rXnsBVfaxEzGvxsXw3iFnbMmqbT5Fb162QE3LVERXjPsMQnrWNswiRZFxJmquAt7nNRauvVh5T8jTKXKvduo",
  "key19": "48kcdF8btRuLyLiAsTZwjNFMExmEiCSptLPHRbJD3FTScqdgrT7XCxW2iU642vHo7qXE6Sr3JaYheaYBMnAotfRF",
  "key20": "37AqeAoZVfyRJcEGJC86PggvW3wKxQs58kvTuaQVb6LhyEZCkeLyFktht5hvBqwMDfS32xs1j1eioAKcTq44fGxP",
  "key21": "4RC6FsitB1AtEBahpthG9jELo5Fn6S8v5FxK77dQN1oYNVqGffR7qiZeMdnxQjTnWB2jHu16nEUzQDE28E7wVBGd",
  "key22": "3M1hNArfeq4GPEDsFnT9kLK3qUtbS5mNLPkqskDHKXfktU2Yum9bHGoQFMFtXdbhhYQrLL2uqmuVxdAK94JiRQza",
  "key23": "3mbjfZPaRo6MgGyfy2JG9wgGVSSJQfXi5ke9tc1V1YqoUrCREvjYy2Biucm9fWxoroy8Mu7By2mhwFkGwCSU5WvW",
  "key24": "4rV3vfVWwtSqWLqQdk8zmNLXvaeDAxNY9fUUJgfq8XntRxFehnAiTUuVrb5nSmTCc4CLsReg2maYrYZ6Dz5mMcXL",
  "key25": "4kJWqhKPmPXgZhWAgReUL4ojKqwZ76onMH4wrafoZr2VXsFAofxhC9SNVaX1jux8pvDYfXC5mMCoxwRi7HNLunac",
  "key26": "3bWpqxqBdgHBcn7LpTy57KMS5wmdLWLW9KJZu8sRyNR59RyqQyK5NYjEWBwoL6cDmx5Xc9WeTDmHNrobvpAwahFU",
  "key27": "2b6b1WxvDPevx466mkUeQxphyGPnGC9sg6SzYCKDRzJp2AXXrUxdPsJxHw9PWZH9LNAtPku9VjXPANLcUi78GoRN",
  "key28": "4kL77kx3xc2cdPiXHewjmnmeXkdT2HAMPspJjaJ1PvsYSLAvcN6VoLrp9QsuamDVw1vJCw1jsFCtjUwq9KGso2MX",
  "key29": "3LEvRdxgyo9jUcQUbQCkfiBaCxgKPAvhyQDFNLdN7PgnyLgpYQSxpcaqt1KHjugj4Gg1tV8XPuvmynsiFnLVo9e6",
  "key30": "3c8KFx4DJ5nJsBL6DwWJ2bLqfHR8CFGpBSF72ZasgRtQuLLGyH7jThmGv5mRjWEEy1pk1Qxv7W4LDsthgK6dwsAr",
  "key31": "2rYPDZU6tYRQLVq8w3biYJoEUbR3WnTKMW4dhZD6RxMqarcYyYU61ETLE5bbr1xW5CW6FVqA3PVSgFMfyG1h5Ce7",
  "key32": "5zeDv81iXSbJ9u5LA2qaXUEKbnSqdq9RbVFuza5KdSprsEj5mfp1UGQPqpNdxGoXq2eUcDmccyRxdNbyLGkXJzp2",
  "key33": "5Xoby3gEDrWaJKfAAF1hPS69T1CvxuungMLyVP9ACVxJLwEdVUn9CUyhKsfdGTpfRWb4d1XvNcHmbMSnU3AUb2Cc",
  "key34": "ARb6tc9EwjNXV2KSFxhSyGhGEdXFjLRVEwNViNxgQvzU3kq3yqbTkHGJhBMoAsSFsspxhodcpUGUQjT7sxqaeYt",
  "key35": "4hmFvnjjnmeo7enw4V5L3wgJ2fQf1G92dGYbT9jjRNApAvbhVBJDdTFtsYS11o2BUj1EJZzRBUUKTgj4sZHxFENE",
  "key36": "5MUMU8WRxTB5hwgC6F2BhLhkZAdD7nWCNHQoWVV21raaBqGKrXTvKbAT39TAPDgYWza46E9Zqjky4cASU4runzYw",
  "key37": "4qp9TdZ88QyxMHfJ6PRQEssx2MUtkehhAfSzHun2FfLTfWoL22LDZAnQKC86hTKVJvaqda97Q9jZ3Bkx7qNPtcpF",
  "key38": "ssZmqbni8PKi9qpwEm2ChcjxRJ1artU6Gt1p78qE1BfzxzXCpVJu7AKpZHfRHkjx1f2vxPhGAdGpBhCpT9zUsmp",
  "key39": "5A5n8iAoZb5UdSyM7HznThentn3J9MFgjsWuWi9PuQdkpvPQ1m53AgfMkdKHznrnNc2fKiRdRGhN5kpi2buEGcun",
  "key40": "5BnDzgK3iuhhUQNBtHLrjnyzk86za3reePpCAQUVyNkoQC49SHH8NAve2djr1GmStjed1mwT9e1ERd4hTk8f56ea",
  "key41": "tb5F3hoi6H94t6eyJqr2XKQjhEThoWf2tCc2fXWhrS2CZUPmuKAA6ZMD7xs1DGzEMLjM8qoW8aasxoHheQ8a8Ua",
  "key42": "592YiLwK9qQUhSyNEF3VHdyXAzf4oLUShEW2RWeDoEyq6urzrJjxnGas13UZSB4Jh3TWHGgwaFBHpztHgVdy9RLe",
  "key43": "2hjGsFSsDYi9vwoJ62mkd61i1LPgDEqzUrqPBMg27BpLrFRBjNcHfLgvhaq6XrHx1rQ2QAJRwcwSFVbkPxKDKXs6",
  "key44": "5hWi4bLEyZYTrWTVA54HQGQ9WYfWEuvspWb3SwqDvGdYbvtxUa3cLs8TGH279wWqNqrH9rMgrVafCu4Wt95uzsYN",
  "key45": "27N8zFPNM3x9WeEsrJ9iHV2Ldx1QnvobzZDnkBdjJh48XaAACAi8YED4v3KMzBoNT5o3NhKQ8JeqUa7hqh8MXTnQ",
  "key46": "3NvTYYKb8BXjCznpuq9dsWJMR15y428HBGRW2N5VFbPDht9KCshMuoU6wVfp8ZaqWX6ncke2DbH45uybL9TGPKbP"
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
