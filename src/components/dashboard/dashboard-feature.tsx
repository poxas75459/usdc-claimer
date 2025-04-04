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
    "3jgqo5jFhApukZmKZBpT4mws8jZGAJ5b4Z5nmDKCaRePc5EcqeW13EX4CeJAKv4xCzuCjzFsNMT1kCT4718iyQTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y69V6kaSGTKezhViU3aiohzrQeRdDkAvNM6fuMEFgZNZJ8SD2hwrVzunVRzKS7y1FN7w8bzsjqQZxXSFgMJnXXw",
  "key1": "4XzDjGYjFPMe9jJkZf9svYx4Yaodst8UMkZu4PPZpW9ZnGHzY1GXSk5raUaRg8veftwSv14DFZq4anJXshV7h8Si",
  "key2": "xAooqBJZKqQsk3RzbMqh3V1fvbtPTM7B6HxjRKU8QiLG2CchCJoyp7cvDMXcMVAxPYbU1xZnUmC5cYovhR5DMq2",
  "key3": "vHFXvWtVejkNmAbVeLHqXv1QTwFzT2cPpRFAnKD2v3gwbBGbzm3jdupc6i2UnmSixr1TZqJA7oZbfaX7vcwx83N",
  "key4": "5ECtANJ4NfM1TaUySXbXQmsgY3jkL7gSFAifjzLhiwkAXGju95ZzqL2oRq1bd5c8vFYus2fxrdmb4RDdexfRkFn5",
  "key5": "5oj83B9VvumnoRoH2PUXX6zHxmuaw1fV6Bkzsba49eZfCpBzNmpSZcxPMNwSjPwcAb7rbbSkMKsRqwpBfyDHrpuK",
  "key6": "3oBEp5T9P94sMaDLqExK9i7ezdENwRFdJgcALJGUssV1s5X7iVswZxERpNTs8QeQSkhTSue6h3ypyTC4HkmXJDJ1",
  "key7": "3vYdDXYfsPLmmgL37NjrCz3fdRCKFLMorxuz96XimmqKn3UeryeUucmFTXBQmKpHSFL3dKaEfmZk4CdUchkSKjWY",
  "key8": "3ZvswpEGkazzyYSS7w4jPcipjqhPHxyAzp7RUXBNHvVAh3Ajky3vkX7LgTa1ydAPEry858m996YtMGVHPvNPLND2",
  "key9": "YoKtQBJuppf7kMmniqeCLWZ273ReZX2An34skjT3Atr5SUgKdUT1QEp2iY1T7zxDoPMgSguN5QY2q44nR7r4mJe",
  "key10": "4nDoJCXkFFZKaE843QrGuBzxqpR3HwTfatXuWpqzEGRRJQWQfExWq3B95bsp9wD2q5uUEWPYMKTMfPa85LhgijLT",
  "key11": "3fHsQAYiFdmUvkzU6qSv3cLMf71ng8wDLw6txvS1mKGbbP6e5g3A2NV3Uunf2p4uJQZ7XKZwbyHLUnFdFeFwpxE6",
  "key12": "4Rr2WdMNMHJeXUzfX4xTF3NeUu9EDbYWncpo4hJi3DKGura9FJAAqEvbyp6ixXXjJamByyjFUVSfK63WwnZjTxGS",
  "key13": "27ogvg2PnqgaGdWvpsAtfFJ3icHCpHwPCSf4JqP87Gqj2tP4ziwZYYGBvHS7NkwMN8hG4tL3Cw4F2Jy1ZvgsK4GB",
  "key14": "2PvoT4GAqYstAsX81n28BSpB64cFuKYGDs9QjhcoH9nUMkpKcmC1LvHvcJ8orEw9ejs67B3uuHPem5UY1LNFycgz",
  "key15": "2vJ7jmFaH7Bd4hRqkzTN2Xubqu1FKHq3Bz8n3QF34Mc7gU7fBVWYzEeiifhLsi93gSyw6rmAfGneYYZU1pjuviPN",
  "key16": "2vysgQ4z54hiz8m1Bd54omvNAfeUG74KT8CDvPUcwjbKDsd1fGcJdAxDNUcVBEZhLazDmCTvFvSNGKB9vMXXSMxE",
  "key17": "3AAaWd3tbLsgBxt96JJ8Ppd9ygkWUXHucq1evs8w9HG8cdYrZRrVyAwkdjmTsmBiHKX7kX5MauRbB6t67hVUz12B",
  "key18": "3L83Qz3iy48SEVY2QCMWrZgfMTdqAyWCgnmA35yhYH2czPUMmGsHUW4weeAHArQ4hRhoHgCKeNZNbqE7AfvoZp8X",
  "key19": "2AooxaSH7r6qC8fvNCsBKKTEZi8D7Anc9ECC4MpoYnSWfVGWCZxXibCjUrki37i4kGboG7dceD2yninmbLfRS4Ez",
  "key20": "5QgqNAA5a9itxoaqJDSoMgcBgvuA1cNUD8fx8iCf9N9PCXexjV7cFmDoxp13xNm4ocEBzsDdYtccQEEDRfDiyReV",
  "key21": "3cC3mfNQCoQGTVFwbExkSijZoSuMzoaFjKZHE4E44ZgbVBPZj3Qbik2hw2vixxPta1kad4BFNmKMabwJLj9hyp68",
  "key22": "4ukdru6da3nistkEiKZM2JHkpr4h9Hasyt7VpTZGbRZjcBABm8qXgmc9QCY7NLsY5JgHEeUcVTN7SLCLpKLUxhBz",
  "key23": "2CMtMnzMAKwMVoPL8szv1dhY7FjiqpWq6mnts95qY7t4z6QduggqLC3S3e3ogYLsAEgnbbNJvDxvc2EYQGi4GDhy",
  "key24": "4vZLkZ3HuPcCQ8grciYPLZ6JZCEfdZM9Q8tmmugLt1NNH1uZdE9x9PZZDYKxxcweQfXwAnQPHq4Uz2v7pKdThRwF",
  "key25": "WovkwzZL1NPpkKASLsvrpYNWdizbsMSCqqZkUADJFgWby3oEV6ps53Ru52UKy7BRNfWqE6QCYbK3ntfAQFSoE8F",
  "key26": "8afCYNVCo5broBksrb4wYoJMkKyH4c5mGUyiWH3Ata1pVHYjPdBXPs9syjjbgNaiaUWJSHT4GDQoXyo9aybc25A",
  "key27": "4Zhfar6zxtknvrXAA5kQudWuFqnsHeT5kbYZV8wfXGvEu7ecyfRkGLr35cUTee6YvhEdbYGsfuMYEEqwp9V9DaXg",
  "key28": "29aP53BpXJ17phZoCDDr4xPBpBkoAh54SZVxfWDnfkYHpQFhKPy2Up8FSr5dL9xPTrtVbVTjfdoFkndHw8hfQ7kA",
  "key29": "2Gh5nuV7iqtCSzJZWkDPbVw9FJRDBx4yZSPp8K2X78BiTk5bQUd7X6hNoj82bcqXKP9k7ox6coQRHfhG7n4EWM8D",
  "key30": "4YBjzkG8q7h4RH1wtEBwFnjhFQK74QiGadtd3erRHhFSYF28C6siG1wzXTs4uox4hgXqA6njP81mFakm4qgrZtvR",
  "key31": "yXnMrSXT96ud7Er3KTzVTRAEoYpvcHC157ufbvFYCM6C3knccf5BUxHz4suT5ZPggkW5RRrTNjUYkeXiF47DQmj",
  "key32": "5dbDEF2wi9VouyqKgA3STY67PjxburHJ2BuwFiLocctbH3DpsCgXdsMLKNpV6W7FK5cw2yb5NH1M4kXgjX9D2dvK",
  "key33": "4xEY4NooCw88MuZTQ9YveBzqAMeKoNJicuRuLMZjQySxC8K9YFGt7p14GHrzfakuXtCmZMrrUJcz4SwSFTkHuzLB",
  "key34": "2CMY8Exzy2DyVn6ZxtMmgXrvkavWgbLK5S7gDiyXwW53BsZ53N9WDuvCgwez3tiAPgWqoU4v84eVbXaKxnHPwkWT",
  "key35": "JTf95dbxyFeCQf5CTzrPjppurwPYBxW2xpeot3F4cBzkig788bvkWvMYfLTjZDxg2iBFeEhKtiJuPrK3WULpxp4",
  "key36": "41rUKq1NTYW4Jz1nZr26qKridVkCFRcCfxyBwomNTNs4qYdKKSBkBgVndaC4zUxNEu5kksKfUDZZ16WpN1ojencL",
  "key37": "49fdwugthWScBM3f8artVhKqVPoywhctADczAo2t5FneTzHytojpYuYjAPyN347t9TXkbDpM5BmDbDQnvkDM2bTT",
  "key38": "4CygPygbwwLw5QnwoP2Ri95XWoDgfkBpkGoe6vFLPYFkRgVM8zkHGrrsqZMVj2HR277GPUFzKaxU9ANXe8vuTL4Y",
  "key39": "4fqybHapVMx2rsmRJP3YjRSwG4arncWaXHytReR3TCLijHBkpJVPvgHUwYj1Mb53KwtugBUGGJnJSNL2xw3RqCmb",
  "key40": "5iY73cRsY8b6BpSWCTDY5noRzZfk3xHx7AYxYM2w3utyKZXfBMZH66P9RddjeTJ3A3VvwEF5GVvivmTh9MHQwFrB",
  "key41": "5kEEk1Wj6yiJwdns86uEjJPPjJKV3g4JzMFR7LXxQyJgRzY1MSHNCbgzYAapShHtZZ3nEPoDMGUrdVdiipoUDdem",
  "key42": "21H8Kj39hZ74zFmWckHtd6yNvVdjrpzYRVtgGEnjvfezfXD1c2wgskxMGWEnazBfZuHDAvjszKMuJ84VddQSGFo7",
  "key43": "2rE8unM7uyf4AQ5Y5NWBtBTUdNPAfjQyS2SKqQJvs8fiVQnAhEndK1TbEkM65jEp9vc7Y6WcHXWpV52iEk7yCgDQ",
  "key44": "55qkh95warPtF4akTvWHqv3sgd3mhscxEFtwvMfz8kiM5Uz4RExENs7ugQR9hzyFMZUn7gSoarnjHFvKPVgxQtF7"
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
