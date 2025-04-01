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
    "2nBYW6cZENbWiQ1RD3XnwXrzcEa94atjKSHJWc61u7JDfrk4gimEHX7rfPtRuQq4jBkMRBzHtEhEHSkSJoDdk8ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RsMkZbpwYvrCuYUuMm2AMXNoRZMTs5rEH7yR2FZaJNxwrtJQ7tLMd2vd1WrjyiPV2GfGXyw53iG1KhH9vbKNyYF",
  "key1": "tW2iefmEgvnPa3JuQHDsLtbZqYAJXnXJpQNLBhEU2sjh3C4EMQsNxfXXBiq8yW2wdJ1xk75S7iu5ZiV8toKsUnD",
  "key2": "pke8nxHLLjHzymNqB4WetP6k977kxgm366PtwmB4fdMYEXtZFk3FKFUexza3YpnyE5dSL1EBah1nrcKUpYsdWmZ",
  "key3": "jLAqsYU7AbA8ATbUiC9QEEmj5UbE6yAQwTzZEWELrCicGiqkn1TBAc3c7HicY4ME9ibUZBY5seGaDGTvqbJMxmQ",
  "key4": "KmpTVK9t9zsuL2EnisgGX1i64afUeFvhcGsWyQRxxSaQzVcHJCYpCH8xKGHFnF79XnLS1pE11oP317HYoKcxMGu",
  "key5": "3wkgf7CkbVBg7RvKqrB8heP2sxXzWd4mtpyuAUPaUkLJmz1ZBNfjKk7WEkD5WJGkhvxgPbTYh9E44AqkE8oEaW1p",
  "key6": "4Nmp9YwZpTFuyuigERnsC6YjB4y1w9RrMor6CZQH4ttJKnszYqHHGpEruybWoqgcw8renRpLHJgEHKMEJVFebABn",
  "key7": "hpHyBzevEvutUkzk53kvF67JUuadSHgUCmCE8xf6WxHXadxtm44DnT6bUobqWAdkNWohJWfxgukjwoTkWQhVGzB",
  "key8": "8PtdSRqLTNqsNQWCYwh9D7HSxnLAvJ5BBGkN32q264EK3CJWNe3D3KizTfvmXrbDKhkX1jNANECX29nAWZKwc1E",
  "key9": "2kUNThPMcHcoJbprL13yyf7cDst6Qtv6dsAKuYj3BUMmWZdv6ebLQ5nmok7BF6cen8PbFnb61RCy9xgSkX4U1LP6",
  "key10": "4BkKcg51o8K3GpHVX9wtQo6hzs9PeonuhYBCcwkBnezBECdUf9DFkoodvJnUTtv9P7GuqFbh4px6g6jyy6GbJuNv",
  "key11": "KWVK3yPJjVZB5LWx1EKynw9gyUPKQHw8132BG5oCm3Lgop2yGKU1PcGxCuwer636zGFndRAMr17wwSbSLZHZaYZ",
  "key12": "2H1U5xedQyCe1ne49jyAewvYUjbT3astuwCiEqnSAbffYt8ehUkYYMbGMyWNJHtJMadDuMzbhjRgssRHs1wLDGxa",
  "key13": "4ZuGKuMfvgWygvkzGDNbPe6e1WYJ9Ej5aUpdQTiFWkJfUubSzRidLG3XqMYgbUyFL1kSCwZXR2LZpmWZza7ssDkr",
  "key14": "2Vphd8hGTjxQdrXS1joZsZqTBNLGrVDSbgeWXE3qHvbboohMbaMTvH5UtpADsV8PW7QuzKwtJ7McRM2MzUduDdCx",
  "key15": "3LnaW6HDZLfsbSeVRaWNeD2GZiXd37Y1SruLSYUjhH15TtHfC7b3oJmb1q9UPCneU3DdoRrP4ngv9fFFK3aKeYQy",
  "key16": "Ub2583dBCS1yzVWrK7QB9VHz97Xj42Hshii7K9zDB7AXnVzSyDcxtcDUEu93evjybZLArALDzqphBMwBDAKMNK8",
  "key17": "zM5wF9VsceeQt84mzVDK4Mgcvfh1MeXg3oGEVUyMrfchmu7zdsmUyacyEXpbub7Q5ew9SyXtVgNyKAZpHcekhaz",
  "key18": "XNmn1xmiM4XAKWAroFc2Z5u3zDoLAH8WkmEWq5oX3mZsPjV132mpGmUS3AXddmUN1UaxpwU3yvfur3eveXmPjC2",
  "key19": "giPXVFSLYjaK8oJbSLFZ7avMeB8r9tp8i7EtzukSow5nGSmwjawCKXaJzh6LMCMcuAT8AsaEGj7t2W3XBviWFtf",
  "key20": "5cE5i1gNJt5BZNBuecZBFVZWUccK9bm4or1zTsizYeJcQYGxng6koZU1EeUiJCqBwR7QJBuGBVk9JJWC1iCs1Rhj",
  "key21": "4g2mYgTzBu2F7LctyWvxZE6yjvtgbSwmXSXahBCEgkWeS2P8UASnE6Qe674VwvcYbqHuAkga2a9BYbTNAoMdkRr4",
  "key22": "3eqHEVy9Ji61trUaehXiGyyac1A8KNg6rQT7z8RHGvXhCrnFWfbRC3JdXHJc2xwzggsDN6FX4V1ZngULYCmgLd9X",
  "key23": "hGvfRufYghicbwELn4AQpZDxgqTomYb9qSbDoTrA4Euz71mpmcgQxZ99NPF9S6HLvbVKHivHduVERLz1xS71uq6",
  "key24": "3J68RxbpqNUUCqjXXsjVA5H8k9WdXWjWN26PLhHMJgaNpJgE2nujiX7bTRt3WPJ5djvxyjYZocmodPoUEaG396Gw",
  "key25": "637j8raT3D4PyKdAtb8RaZbJGnb6QVHfeTUnTDJp7gd6oejxfFjjXAVq9ELsGuBo3pAmkY4CqswRxgtaKjjRymKQ",
  "key26": "4fMo5coDCRdMuvLdethw82q5HJCsNaUYEt3YuUs7TEQjdc28i2fTcQgYRnkUJZm5y7A4WoSqHEfPR8sZQKYufT4R",
  "key27": "4XUueeV5WN1pLztZfVnFkVEZi4Da5YaRFrcr9CapCGqXdvjCxgUioh1DZCJTC7F9BdBdQj9boM7sSFHgTHiUmQLC",
  "key28": "3cqJr2GyQCxvRhRAD1aFCwkA464cAg1cBdzyj4uVQBtZwmwnYx46ZY5TeQvfTnLWkniW77DT8ojV6AuqPrLZmC95",
  "key29": "5cK8ErFqAZihvTHacnCKWErSpAUJgjC42mnn6VeV2j2hEAoy2dkDyoGHNYtwGoVUMAeSczBno5Dxxt9kiPiXH6Hp",
  "key30": "3KtNsVrz6DyPDLeyzxGHa3KgDDTdqu5kzQ7gUhB85aBcNn9qM4G6uH2Pwu1MGQDX2aLFWSSUJZjXxgrzjpomrhqR",
  "key31": "p8YsKD64pJmCsugyiEb1jmFGwP1kichNZJBfbzZyAyN799mX7Uaw91Mz2K8mJWXXdWTY2TAWR425SL1bWTY9ybt",
  "key32": "3JZbgvkw3s6LqQELL73iDj8VoWUfcK7Ttx5u8UXL7FjngzLQVf92PfyKp6Su9g2NigCZFHxCeUNad3E1zZQRDKgq",
  "key33": "6n2iimrwYamjoTzGa9MZi7QndAwsG5NQMwJFEFj9TNWuJcNUzQq1poGYZP8YxgED5QQKK3ea6oCm3VEhH18ffUR",
  "key34": "28oVcR5aAPeXB5yJd9YN1Tk949wfRxdexhczDjo9ms3LVG83trdYYzDde1zKunbn2vaVej5SmmNnvQRFasW4mUa9",
  "key35": "5cLaVtS2zBZ8FKNxu1Vmg5v2KhbsDLTKuZHAonJTzgQ81CdkXnRBNexDcMTnSaXuw3xRdS5fTj6M8ygEwLh3go3u",
  "key36": "ybbXyz5wmoU35wET9e5SpVQsCw81a9DDDw3Qwgt5vperWyBLi4pd6t6bd1UoEeC5C4gwWJrZa1WThyJyTh6q6EM",
  "key37": "rgsJPPutXRKRWGsRvTwxdbfqJz9cG3Lxet8bv3yDkQwP4JQDDrjHUyWDfU2Pd4xLCQRLCJYZcGMpsfpzfTYZKGA",
  "key38": "2X4cQnkvd37xb3H2shmLhkDr54LvWXj6tvz7Y5ToMw7fngYQsh8wwU2CZzewtkUofr9KW2hYSnXGub4drhwVhJKm",
  "key39": "3Wtzp5bFQMfwQM1HbvNBoQt8UM58M32VseYRTp3EHXMCyygytKc1uY4oExNnpvsoVGcbheJJKdJ6LqKPqqmUA2gh",
  "key40": "4JhgLzqvzEp2syNuHbR5ys9QYSVPa4uJswxaV59PpK1arE1Kv4sQVb9WZjDaTmaTtiWxygB4JrbsBMRrHQpxxth3",
  "key41": "2hWRoHT476eVDeDyV86Ss9RmV7R1vpnmmQvfj51oLuMeMJzSaNyTKThqtju4MurqPgg21664e2ETAw7w9CyAQukq",
  "key42": "jCwemMgeNDBW6noP35bWtxupB5yJosjcvUKjYJu4fJVrurS3hTnaKotcTbBBQPmYdYAyqCKMBpo5d5cEta9XyuE",
  "key43": "3whwCMNaT7pk75dems2NLz93BHTWDi4FNnS6sauu46zjXBsD5s4eQPeGrHVE7P4edV3wFkQ7oE1uCJJNf3zs8QFt"
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
