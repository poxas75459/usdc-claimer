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
    "5ogfdpNZPEEk1mrA4Zg51ALp6QdyisPaEMRaeGy9SYrKsWyJVLBUWaMNTYMMoz12JwbqFhHtiMvHgpHcmxM48YEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mn3JHF6Az2Do6xrL1MZdwLWqwt2X9wRNgSogKrqap7LqKqwrgFTb798DsKCnAPprJUh8GC1ZTFrtVDkLcfbHXiV",
  "key1": "3bhnBsZneX9y1qMGo76MHF2QFEJYs7GWooDyQq2zo7k9Wd58hxdousz8vEShgdDRTARotceuAMdARrSQwzKQKDpR",
  "key2": "41AdXibeMLc1UYNXDP2gHn8HKK6ZLtqtvYMd9abmSYhuaR8543Wb45meuWD3vt1zKaz8cRLrGWu16H6U5ffsU6xi",
  "key3": "eRcUWqRG67XCJo6p1ya8edtRM9HxvY74JNSQwJK9JW7QBfUyNVAGijFbPoVxTRjX8qeNNAZcjMDj7NHmZ1sicY7",
  "key4": "4EcGC234WkVipXmx1rnVHrSojqKK8iJ5FFKVnYoTQvbKoyMLoi6FZJ1pggg5cZauNLB721pnp41xHN5QrEtVrtA7",
  "key5": "3xSczdgwJq4tw3RS5HpvmAVx8pjnx1HP4xBqz2ML6uFjuPG48dQcvgGh9KTyaki4X1TsdDVdb6eFMVsirasNLo2F",
  "key6": "5WsWHupS9exNnZZUEhuE7VFMwGNAE1qk53diaPRCym7sgDj724jSUqoapGj6GW5UmCxvwvmYWeZ9ALTyvujKJwX2",
  "key7": "5rzXWX2Q9C7oADk8odWCdvDenp4V9y7KY5jJj2hgKBPQSd26ixApSGuhCmWqdVGbSWPoETghmKaoQXpjPBncWByv",
  "key8": "3DCY823rT7ns8gHdfdXARkQV62V8nsTbqpwDfD9BGwe9WKMQ1fubAod31amiM1m7eDiWhmHaQEky6sx7YVZK8yW8",
  "key9": "5LwMTYKASrZyAvbMvgx8TunViD3KS6mT4ohDitikinoW4grDxiy6mz2xSWJPRyZQixWVBbRYczDznoMfhLfHhzUb",
  "key10": "4dwiLL38D8n9gpP1iMq8QNm8Sis1Qs6VVXPSW8MoEDqSK57eai1Tq27gTNWCUjS1gFVuM5FPn5vom9FbKNzWvCXL",
  "key11": "5vpf8QY3VYU1rMYmui5i8pbChBTLCAqQmKvSg3rpANUPNfCN5MmHrvsadLpcWhxXfgBtPJxme777q1wMR6tJmfJd",
  "key12": "5x4WPZTsFRFwsjE1JNo9A4H19ofJXt4ZtF48cqvdfmd3yJtjxvURXF2vG5CPXiCbEP5wDbe7imfK77VNL9kkuTWQ",
  "key13": "4yMYzE98qvEo15DkBHYVuHSutoeLkLwgDvEmadATxH3Krb3k7BJHhKvzBEShdV59vFNU4JuNeenKQHcUdS3oyYoT",
  "key14": "41UWDiE4CXNb1nA4NW8X3mXpKn3gmQZRTE8KpjxE24JfZxntZPwsNsEP3TU9puLBYxCp3YkXQTL8jwqzGg1SEeeP",
  "key15": "3R5Si66eNhRkqQjUp9V2Vbw4R8EydTam7XPdgFodRbRPhVwcAm8Vs3CcqLM6UjjhP2PjmvctDJNq3GoKngykQqFE",
  "key16": "22KkZRq89ugMWu8DL6nidwuQqBys2yWbDx8A9WrCm9hbbRJMsdQt8FtNXRTMCQvYK7PTPcvrwkgXp7Ld5ZVmn8ET",
  "key17": "3s9UCjHb1wC4GiTvJpSeABFtLYyZpqEQb1K4azJUrvuEAhMrK2jv9QD4NujUpCNSLYB6wCNzgdszeTUjJmy7uqSk",
  "key18": "3poEADY3yMZe2f3PJsMCZjk7GBwfXvwXV1HRNpnEDX2wyBwiKBCzKT454PVdd2wyKEPwmNGYjesuBcCe3UQJg8yP",
  "key19": "32N51CaUHurqMi4mK8PiN1vWqCLBY4YenHj4DTguW2x9urVJcbUU5xkEZK77PFgicFjin66hwZb1GauQkugZmG6U",
  "key20": "kAgXuaXffPo6d7u2EYWdfJjpawHwCCNEUM1m3rZUjjkESW7bsUf3pgF3GwAfH5YGuvVG7WGE71phrx8ymv5RnDe",
  "key21": "Szxomt6Vz34HxbJESqBsvU4kQNpPi74iRfFMpMUHPwYStNW8MFQAvyRUtFpTHyqxSySGGvcpCkDABNTG35s8F64",
  "key22": "3JmMibfoNWoLYtH2qWQhWRo4MQqPiV8SemgzznB3gnR1cp7petrrzjhKVmwBA4Sn5NuRan1nTbtatCesDbebfMkz",
  "key23": "4TUJd2K4gkb69RzRnN1kzttnJWxyhKXnDL2Teq1JeUWsaHmtjaecvRGwYBr3HbvTcriJZmbbT8tfY3D6w2iH9LM1",
  "key24": "4k8ECWzLBeGSks8mZjedhKprj4iFLLRD3TLE8nemaoCD23zuQ9EmqkWAWKD9yoeLfxResLCosn28TfjRekLUvQtx",
  "key25": "57PFWmWpKDXgePoETErU919hc2aAzV42xknEGnTQEWBM12WPZM3jKcitLQtXTHtsM9pw7pYfGZv6dvVNuEXuk63C",
  "key26": "5642eapm4atUVyxWY2F1sukBZG5wCNMLZ5QZ5MWbA191MBQ2UHDfUYZcYTiYRx8GiouVpd93MdY5uS8ZxFcUBeE5",
  "key27": "5N6QutNLBY1TZVdWUj4L8QaU7JrQzNXJFstaFPqsxiAARxGLn8tT66jeFH1x4tnBo3sy5NDJZh3LzB2LHLwb5wNd",
  "key28": "4PkTUew3xnKu2Ts1Lx9ftraazUdB15ReJCDoXegJL2zz3hBUJfmgxPg7E2c6epet6anUvGotXGyoKA1DrU4JhqHN",
  "key29": "4zrkd7ppkcAZUXn2vxXWxWsyPLARG6P2v1F9pLCN1VBp6373GEsu5wzPE6BCmzX5cApDtU7trQXzKSdxyyrSGXsS",
  "key30": "2XnuWnrj1LjLZdWBjTuAGFZpJLYewWwi1gsyeSH7vw5bE6FKZ1kjiUe6zvfj4a7thFC6EHksKerLYp5ovm61h3AG",
  "key31": "3zziYjnE29agspdpjgM3vmSmMEWSE4CEs9MSbTskb3kopQVb711VwXjrKAgVQsytrzpPvfcNsuqxMdFZiQq24WtM",
  "key32": "2pqbmSS4UjroMf1ugaxGRthHbLj8GQ2Zt5JKcMT5zuzvEtFSWZxsy6ENssSGCaRdGbsgGaetyUjihZ8Gecs19QUo",
  "key33": "2Abp5FboaMTr1tUmTid8LqDeLTvkUEvuBqd2bdbonCMkAHbQiqqGgEcGYD4HbqPkVMvkeNNicDevZt6P9RJ2shTt",
  "key34": "2NR58PDKv6ebZsFEM24KKaK9DBLwkJfMH2BU6NF47gtmCJYWvvj6GzVRbEgSCaFdQW2SfeZd2GWZPK4h7iXDT3u8",
  "key35": "2LdKfLAEHhGDizofJuB2C4y9bmaPvL2zuoYxRURYjnRpPTpP2ED2s9NDSmDyvp9Nrcg6sYM3tLeS8ryD4BN4Gi8B",
  "key36": "2bLJ8NvURweEfLPyF71PYU6jyGWeMSWkgYs14wE4bA8tPeXdqk9KnmEsPaRXj9LyfchEbNdJRgsdeYmX34DCV2uJ",
  "key37": "3dNJCCPmESyJCmiPV6rMEZxmjKKSopZeavHjVRnj2tPVSAHUGJJkKryhKA34tA1tza2rAXnh7DkztgkNh2GSTjYw",
  "key38": "341hdGLhXSiB9PEuJgN4FaEBuSSE3qF9B5kZTTBQvRFr45V8YbxhJEt4EQa5XzcUmjijeFwr1UQtWbVSHxNDVGtK",
  "key39": "4qFJ4MTWk1PwnGeb4PqfNWNcCuPTc8kFzZdckJW7WPFsDzphnQVaoB4Zgk43YPwC4rSLGnFTdxvtP2qLZ9A7JTwW",
  "key40": "3uDBkHgW9okLNGy9g7dW5HQmS4D2m1yoEqSa4zMhQQUdSNrf3jCEvH259bKSHG7eTEVX8WcqRm9ycVuFPr57D9GQ",
  "key41": "vxLBCfWXRasKNoWEwPsHujiNuefEZXupNj6oZyLjsVHFcud8w4VizGfJR5j5sJdrMkUpgkeb3Vm9RzYsfuMP7ms",
  "key42": "35EPhg6whp1GUikbiUrXfYWkkbTnVqB9U6A17qa7ZfETDfVmhALaiaDFrzcx9NKYAe7J1bjRE5wpv3sUXx8GiPPn",
  "key43": "3ydHZnE2nLU18mMCTJp2hXRwCxgjKt6zLRMEsK6qDrLET6xM8yTWArMfRMsPWWVgHZ5WKGwHDp8YWJXpAAU2Da8y"
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
