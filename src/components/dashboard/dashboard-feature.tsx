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
    "3nNS2u8RDYTenLRHQ89M5nfDSxddMX7ryXLXjdEXuQFH1NEtwy8eUyYtZoDSj2ZR8XmqhwTHdCRcrRQzC71Wtu7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37PEJYsXLYaEz5BZcc5SNRPDdZnVLDtRy3wCTfYjwVCGJXmXN1Z92FHMw9QJSyHA18J5XjjCUaezcpDvKJ3orAzk",
  "key1": "4PLdWCh3ic5TkLQjfHjyFRbszX5CHce6weoe9GEhqg52zzeNReqKgqGZMG5zyMNMyEdh1GaMd6uTpHDLLdv51SJi",
  "key2": "5VPYemw1FATG74rFRijivHh6m5318b5p1ibud3gZEHyUHfwxGqCWuueyqiXiSRrVrVqQHw84VGhoV4vLz13EAbSC",
  "key3": "3TG6gd68FUmKYaN3D1eByB2uHFw3GGszgMFXPDH61wiq7xZsN4wLdq3KvrkLudxyfQUgLK6brVmjQeLiL3cQdzei",
  "key4": "4S2NuoVMv5tmZwHsSPuJFzWJRtkZ7GsGxNRWGVuPN199ADqQmi1GV8EtK6gWjGgTRLjjBpzp4sUXra8kZ7eW1nkC",
  "key5": "24Bvgjfo6YZocyRN8rGKZFVK49kc4EQ1a2veef7Hr2yjjwYpWQwXAympsUW1hZmCQNgpUdFysMLjak4qMHZhbjS7",
  "key6": "V6FXJyaXovLPmtJdEnTwUhgLB6ZhA5t1c55eaYEGgpv9YRjycWdzFBhG4CwfkNNRtZnwFvXsQHAWv7pXFg59StR",
  "key7": "2HFu5yHd4f6pT8gwbQu9cRngH9YBeoEdBsqB2p3cYqmXGCJhFPNc5xChXXHbWLw7fn7Q5a16yA4JKnEa7iSYqq6M",
  "key8": "4fgCLR1UhmpjxpDNqgNLA7xpewbT9bY49ZGV3sfLhMm8YpiDXPC6FRcjssJ9Ey8yRDd7ZVK8X21nSx4Jhyk7NU7U",
  "key9": "NnU5FaLyjpqjuwu9pqyL4e5CoNuFTyWL2mtPBPforfRtSWioXCWWBu5tx4EJFMz5TEmkCjuepgSsDGuwkwqXtVt",
  "key10": "4XgXY34LXEvdvqkJEv1D8uY4ojwmvrzfwRsGwmvaHeFpwE1t7c8EuQXsfNCH7NNu4UvCSa5WpJS8qzAmfqZtfTP3",
  "key11": "3PB3iJqe3vbDtM2Tcv1bQvnThcfjBxEhENWH5TyMbsoKXnadqXKMdYzkPnT8tpwXYz4mZF3bzQJrwyam1oPte3b2",
  "key12": "4y8K5pM9PgWvdPq7J9RW8Ky6zqPAaVnzwFA72aB8Ws3MQhQYn9b2YgscYG8T2kn8Ucam6MJoeitGnzk1ekybb3qA",
  "key13": "5xwSFocB5EvKXhkLwGUg2Bw9fGtBpG4KqUZbWLGLH5pVaGRHdTJw9K8wWsWWaYRsXQXtrnGRWRAPqWtpawu41dHL",
  "key14": "DLurc42eiSh8pVgQxGcCjjks79t6rhNzVRMv1pCdtFqUKdtiCLuYEySSgxoNgwZDkyFXkMKdLseYRDV3n1D3Xv1",
  "key15": "26npK9SvwtaSKHT7Sq41ZRhJCyGS5HpCYveq5swK1YU4CNST8SSWM5tJ7dWL9bqHjPuY9bkXrB5drXJCSzLneWCj",
  "key16": "6uKFYX7QYDZ5odMKvVHoMPoiRLGq6DB1p2sMxuB8ZVnFkD3WZ7WBwDXvWh9VHWd2Js6ga57vyF2C5JEMkPCphU8",
  "key17": "5ELdLEsTQ5wagEUXsA9rg5VoTSQkgMWTU7q26WVFiJ5JT6EDKeacnyvpYqdJSNxCtHfQnXA9Yq2rVsd58FSVuNVV",
  "key18": "5LGQRdNugGBAsWjKDXYBZGg2HUpAArgCjUk186aJ8eMiBUQwvXhkiQH3WZBXenaBtiUuucSFQYH4HuS9f5dSXQhG",
  "key19": "5qiS5u5xXF4YgGM4YgbDZmz615FSokLZz23CGde3LVyrixPGFJJjfjBwNLntEYc5YP5xjySPWFZd8Aoruzb5yHCV",
  "key20": "5J7eLTVXd66GniqoiJLHpBmqtD8hm8DtViTM1EpqVSaFCmAL4aBNcKtdnPc8eJMb8sRCZqnY9dMjDZiqHMxPwnhR",
  "key21": "3UEGmDGY3W28dsD93d352NW6pUZkYt7K1iRTb5WykZn9bVUBWskZ6uuXPY7tdpY6o75y5cPgR2eRDtArrEkVhJkD",
  "key22": "4TJ6m2XfbSAcNSQ6gzrm4e6h1HFUrFNQeg5XiD56yG5SKyBBiFXkLczm4bSg2QZ21WeBsQaqYeyvL4Foze4tjbTB",
  "key23": "2Z3kvjjHUGKuxaLYVDeQqDDbgGR2WCn1wr8s4qbNKRCtCTiKERBzAtVN76SVGPEQVBrbDBB4hvtGR1Y1zKXGXDoA",
  "key24": "35EigpUzDjjy3FFAHhFDvaZrahXBofemooVNq6FoPRSw5U9qAL3UEwsZRQQJGde1k4tzGw6ArwSsn7y1vAjGFCTq",
  "key25": "3RbYjeSunJJ4PzSiBEjTxrEnsz5s7dWqAwPM2Pn6DmLE1KVUkwjFz4LnCGfitV17La6vrJtyxGhTzJojmsNdJWcB",
  "key26": "4MEbKFZc9WvD9Zgs7rWCi9mwpvoiyUthzM9t2JTS9xzGazKpvE38QMSYaB6JQH4m7QpdBGphogetgUbwHiCifddw",
  "key27": "49c99iVDCLiZHJzqnmma2ZNx8VxAWWCKHjTGgEHtudWELypvQXTbQLPdRAAmVxxigvGiNNEXsvJ66q41RXx7yvcM",
  "key28": "4eUkZGV1Dw1ugUKwkK82W2iAQDXQ1dJDqf5fFPCbNcxefpoMxYHGcxZT9PubUMkGwDezF2twCGkQqiMECsyje3g5",
  "key29": "93pHNdVxziur4YqG9PimYRFLHVMVqiqBPu8DMJYbqYkQKxTbc9HqfMSUB6XKvtVu3A5Q7KPsRth1ak43oiaczLe",
  "key30": "49rQUzmBRyAM1n4bXk6sZuoQGhM5hJEgKVgpFRL1PNBz1nVdKAduAENpWntY9cYFVeX7QYLAJ9eW4jDp6U8KuDUL",
  "key31": "3zPqEtsq3bigQctHo5yoLxCgMmS7KRi7VyiJh2WcxLTA7HzfbjC2P2eiw1ZENsNgWbzQsFh6thsRPyAFZLTbnM5b",
  "key32": "2pMW4oC5SZfEXt3WXNZ9BpHkaGQ7bsVcbtuDN9w2tmfZAzfpxFRjJFNnULiXpwh4zpR3imMLXurwjtDxm2ymKrj8",
  "key33": "4L5jxEpvHFWZnEVXiAZWoRGpvnCtshFjGLaBtuFDDWVcxBtUBYAHqzfWvHNd68KGkmi6h14q8KpsFEyhMzC3BWsL",
  "key34": "f7Mu5md1TBFAkuyXEEVNRycTJV8jZzjeRsgT88q9fES2bTP9NejVk9hNQPDqWddx6FJX7BL8z6541XsURaQv8mR",
  "key35": "5xTKGJiabrTYiLJjsuvgKrzbZQLT8dv3QKigj7AyQxg9yedo266pxgHLEH4uJX9CyfKJ5sm7TgFUF57ukLD6jaF1",
  "key36": "3tSqYXzaYxYoYoF6C92vrtcp8jRQ3i7vQaMbuhmmrnXnrCk3nJRJoNzAwzd8PSa3bbTpZVsgpwrDwY6SuHftKwJZ",
  "key37": "66HBmCyotDQTEZQbm1vaVVKQ1dswmNRcyScGQjeMjFDSKVqhBJb41Kkcb9GqBvuDa2MMvTxBCBmJdmWkyyfVtJxr",
  "key38": "5zn5jx7AJCLXgawrM7NeNeGQAHhBpgbfe3JzCzokGyhTHDWNusiqPEwaUKawSMRjgSVMsQZbktjYGVTxXaH2xQW3"
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
