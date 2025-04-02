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
    "2njuBMz4RrDHZauoL3x3mBzehqMTcjZfn8qA99w3WuzxXZ62QcVMcqQixKe1L5pp86L81TWaBJQUDp62X1YBbFDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39WANtS4Kxmk3pQniaKwEGgLoZrkUY5X1wiSD7yWJXUXMXiMYJGDbx1pgEUwGhVEjNTKbcGLYmgm4J6cgzHCtib8",
  "key1": "24QCKDBGu6zLTwCYcar6bLeo8RdWdBfWeWCroGXWkWSfVAkK4NqVQdCfvjAcDpxcn5VDkQoNgx328Xr8Cs7SAW1G",
  "key2": "4D3hU6Gdvp9Gz3bWo6fbk9t1JWq7dr7UN8EgFDn5U19VwBkY8cisVBwhV1XBW6b5zBRZPbCAMqfYKQEhAMumjFoy",
  "key3": "2QpeN7vvFvNbEAJtttbbyoQP16Yz6Pibswv8TeCXBg3pU2MNdrSXM4BUHeqN9e3T5emwvb7CLDGiaZCy1iBHman",
  "key4": "Yp9KLFQydusb5sZ3ZTuaYk7htSR46nxPQ9KiMRfjc7RicuMgy1LjtbsA3TNyRkuxU9tYmppha4sHLUd33ysDY1m",
  "key5": "2g1zwuQk5rF4CfM1Ft3doA5boYDsJfvpNh1QwYd2qtYdhyW1UDqGwBhbcu6NT4ADWgvuTwqXhu92LyCm7SqezdK2",
  "key6": "55dNNevh1hPrfK3NTyc6PDWAC4Ei4pkShREGyCb79VQ6A6Nj7TMuLcwchaF2cDAApsTxymTX7jtTdcBsP9yQkJmy",
  "key7": "33CUHY14gfbsUPQg5WSbEC6cZQ6XEVLtrTeP1VRqU7L7Xautfw3wyNqnEgmRLZXQQga5HC5c6s3HReMUrBroyCmv",
  "key8": "4AdhLntG8ihHs6S3aefCuaXAX1kiTxr5rMWRwrCjGwpRpXb2SG9QnGCPUS5B6XpX3efa4qEimGbByqyNCv4ucJxn",
  "key9": "2qjDD5v8gx31B2UhT54w2LgKTmbNBHdooNm3uCoHk5dUnyq5jeWFZpfpd1DY1XyuvxHpMZ6n2TqUtZLG9MvQR4PD",
  "key10": "2cmDQddVrgtGToNA2mMeYj5FjyW8hVU4adLTXAu4YtC7hrPkxMEdbUbv19b4QuNv7Ai6D2hrG4MZ1zSUZmUkFF4U",
  "key11": "2ZRJc1GNNoGz1KvCof2R1UH2DP77insjFhwf5jT5BnkovziCaa1LUmcDDoAZxW7GVYThJwU7kNmZdrYoAy15Z4if",
  "key12": "52ayXFAnpkdsSphnwZSkJ32fizXRboZ2kycoqMLMudrpXsmU1LwyJXzCLRJaGDYwfwA4sWL6DjGArGpURNQVNA5P",
  "key13": "469a8hdiGfCPtNAAVVnihgVmwbN4qMzfB5BW6BVk6CpXkWZGrPh8eT1RgtgK65CZwNhV4Vk8NLytZQUEKWH6nx9b",
  "key14": "4FhUcP85h1GT6Zcc27poWnphAhCvCjDv5sW2fmMMLGC2DYJkyX7ubA6GK2WPcYmbNLCanC9dhc2uxZWF2D71CLHv",
  "key15": "2V7XtwuRcfQJ6s1Sr15U73fnqN7GPZfjKPfozNYDK4mWXiocJqfs9m9MMKJDgfS9UrP6cMHmST4CKS5F7fCmRG4S",
  "key16": "4P1ffjmsy7GXJogiKfv7rnTQeLsGdFGQueYdoaXtvRtxcay8cUUjrmyHFuL3RedHZM4V41dwURL7XH1ipdNSio7e",
  "key17": "5LbdXvagNjQjCcha6oNtpUQeBQb4P7bpxviiTmxg6cHZRkMmNFLc4jjzTFe5CtvbBFcUwpCo888jXWsTrFjcFoh",
  "key18": "2jZXH8ZVTfKZ28x8f7AzBE33KDEmBK2JJaaaUZEWkLmf36o683bbuTygF5qrjZ7FPxpN3giCKviVKniS1TJoJCSW",
  "key19": "4GmMsB8tK1pVspZZ6DetiKgfrocPhZDjEvjMKv4MXKgfjBJwNuzMjAVej31HGj6yqGHVT7y5zJ4a2jVQdpwfv4HB",
  "key20": "2rEYejvRf1XcfKY9A6YE93WMSu2EyDVPGtFJ525j1Rn1qTNYhSizeUNcDyz7ZfeW3CrkFrfdgVXGFL6MamsJu18m",
  "key21": "VFuBQjBWhHSEywYQUQ62RcgT96ozVU1dhy4iQJtuE9YBUwDWnA3BXD16hGAbHKZ9oaG7BYEktHqn3HuF2N1rPq8",
  "key22": "5mxhGH5RQpHcMaPA85ZyY1WTbausFoeLuXAMcWpMTMgo4p1GQBXafHBqisMKJAKpksr1WzLUgaSfdUmTaXV2NxJB",
  "key23": "2tSd45FHZ8GCcLwrpZ6WTwujiW2huF4EGBLsaPecmkHhbp4GhC4JqSyQKcSw4eYLJNi1ogHrFjjGZuougmapuwS5",
  "key24": "2RwfLGGXfXg2Vyp4SmhtQvcoGicacHn3P6nRmqCxCx3PKFyM5HST9rzeipQ15jBq3oupVNc4EtkMx4RJtxMvkwEv",
  "key25": "vymRo4iV8FuzDPjfNxYDeF5W4exPGmPPWPtGjyAcz7nVtv7qsfNuWezf19CEKL7qJmeasN3JqVwi4YsKQtdnaE4",
  "key26": "y1RrGJGS9hbQuGzeWrhtRAR487qJoooeX2T1jKsk6PekfMVEzuP43t52bJvES43nrUXawGyUisjwWrJgUikFn8C",
  "key27": "PKgY3TKSVwV1MJk4iDVMx8rtZRscnKjKXMVYRKH7BGkyex6yrbYCP68Qd6rEx5LX4DPdKgNCmgRfkY2u6rR7iAD",
  "key28": "3viYn6BL16udQaNLRY4ht1YP6VjtgCrQ6kqmn7Rt9dAgag7yCGpzt4ZZdZnDC9XceXhCRxQriHwgjStzUsUC62xJ",
  "key29": "4eqeZF95bGSzVGZ5EGExPDTDAFNbeRHweA5ipc2oRMUxVr1i1KooR1LyyYQ3hzr4hKSvuN4w81yRocNh2aBhHDFG",
  "key30": "5DjQBzpP8Jf4XsijwbybiSPNFc9vSHETfRuoBigAHNs66q7wG3Pc7ttgZEqqHmSjknP4EoXyDyuYjXXH4qHfqZjA",
  "key31": "2NoK5ycf82L6pUiBuYPzPGqxxKeJS3n2gH8guuuFth3dLHQBJ8BiSxDMBbBd38swam5kS5iL8Xgv8QFsDCva1hWg",
  "key32": "dKEyFdq1YKw2CJkcrKhFRgDuBczShHhqoyPAqzuzMQSbu4fnU3BeEN5Q8iGfQ3RiBHN3AddLsBYVjVZonmB352o",
  "key33": "5qq4H78TSViL5yRihbTWNcKd6uBDtVcvVA4gtvKLUqaz75kC5Szxcje2SU7cLJhLL9TdbfKeKmKMUUXyvyPcwM8C",
  "key34": "294MrTR1MMhJctQqyhBXY76fjY7vHk4dQXXyKpLDbSgzoo59jRBwpft5vsCZ5iAgN8sSknb2v4YpsftLUHc5LPz4",
  "key35": "ZQXfFenCsftKswtCxd8fMGgQkTAEAwRrQr3JUmRJepPenh8vewz4KYt4aekGqzjQRzdX5j8LQKugmpCMy1eBEEA",
  "key36": "5zJZ5jxRvY93YyhNnQqotMcHiKDBrvt8NEMnSN8H8gbx6aFXqWtejFUnaa5QzTFJG1vYEVVhVNm4EgACTvc1z74y",
  "key37": "2rXv1xKmu8qpyHgu9mrvnvcZrsDu5N1hHExzuA1pVpj4gYBd8bsGbxad2GaLetsoa2YJFVxX3bKD2j8TbSrvWPvW",
  "key38": "4hLSUuYoZcaxoRmYTT1yejeM4dBeSrGiNtqS4NMZ2DuGQgzGCb56gCKGftRB2WGF6RQEeL2Jo1NbeTJVZSmRTR9r",
  "key39": "5q8TBd4SQvSftXYMiHbZk8Yda7kF2p3P2ytZX4VA2vrejBtmbLZsaKXah7NpG8dziLeX4MYFxk8HqLgBFnUJ3vYS",
  "key40": "125Ah8JPv1J24kfJAA1cXWiPKHdU9nZEj4iuogzihUjE3zxyCUQe2SLVVVcatKPHfChKtFW111Bz91wLuU6WtRTt",
  "key41": "3jaQK3xupEGVNi3tUDEDRFQr8Gu7BPpm4RgDhpbEZryPgEGD2CeBsHKL8r86FKK1CEyeKnZxTPsW3HaeGfoWv7i7",
  "key42": "58dKXyRWdjp8WfGue3kdvWZGCsRP1drR66qNtEJcMpJdhcMMdMhyGUf5c798m1NMMzddHC3i7EraxqdHJ6zBy5Zq",
  "key43": "2rxBdoewVDHrrD4u2B3xiwTs1sXoRLcpHmMURanndAGLg8XpMMzC7j5ndfH58ugvdwLaeTpz35KPTLWLP6ZQZx23",
  "key44": "3DitvDaj8W6BudQaXmRLd1zm82pgWVG2mMRHri5ayWV3hJxRGJ9yLKipgPXSotoQENEo7jDDe82n3DgMF8RrRhNc",
  "key45": "54D4rjzQFNQrdCQwwLTqAynybiP22KYXjLqdF4BDYKKoJUw944fw3vbtmkhthwgZ2YoJbwrDAzpqQvmPRHDYmkyW",
  "key46": "2C5uPAaoY1N5cJD1ViWLs4n5J7LPKDVYR1FU9chXS46mu1GT2bPDibXDHLb5U7Q6Hv183dpyH9hF7W1fNnYXSC1a",
  "key47": "3D9CPGVbqrFpEbXgjx5ceED6fqyJ9ggESP8bNv25vdCMyH8yXDXysHAn7DVJtf4ASvqKcgBoixM2sc5PPMh3WhZb",
  "key48": "5pMxrmfCSZCPxCJMYRsjGdFt5QgYAtqYnyrAzQCh5HEyFoKTrgmo1j6VGbuppzwHtoDC43xkzf5SmhqTsScvRKDW",
  "key49": "5Rk9rNxRXiw3uqXDNKZRiQNvfjnApGyYmXganXRhMCggkcvng7zvbSNhEug29gWdEct4cskAorQw7NS58QXSJb7t"
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
