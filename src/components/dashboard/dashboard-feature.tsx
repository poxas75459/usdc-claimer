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
    "roAZUznAo32HSiWV9do6JYM4Vse4p93okj7vMWJQFst9juSYHkAeFso8h96voQoSPa12H2Pw6r1SFBxv6bpWkAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DMTn4iMJwk1wNvmaFqgV4w7pK65482kavmtfzwiprYywLHV1nkD9KLwZkZGNXmRNBM33773p7UfPTuXzN5kziBF",
  "key1": "P5Wqbb4RFoHeU9tmcKJ24a95i3n4SeyyG1XBWDEYXjvhg9greXkLcnonmsDd4U7LURbcqNz7xEEqCTR9wFsEKqQ",
  "key2": "2V7mr1wLSmEmZg2oiXPUY8reCUotMprEYqHsysK1AAz2RQE4jhKx5nE13jD7r6VLd6S9Aato1FmJG8QPCJEdgVY6",
  "key3": "2GSceuYLtbN57Tx3C2SpXRGq8NuaKqer9yEa3yJVTgDZFY6WKBMvq6qfWc9Bzk9ugtq9UUDzVyuGQzQGGij4ap8j",
  "key4": "2Kiwh9JCe7E4NDse892AekF6XsKuMZNWLoCbvtyH712TQ6e9ubNFopEMMFAtXLS34g1Rp47r9M3wAt1CcKDDHPpw",
  "key5": "4fX9yn8PUEsu2XomH35TNSGSzqZ3xqLJaoWXVFvEmLEhwRKgpXjrRHo2TRursmzZB3Cj1ZP1RudWM9Gu72dRRmZH",
  "key6": "5hFxWc3NQyu4vDT7vYPV8jF6HZXW8QiyEoNfywLFunfw5kdD5TzZXdgiPZGUia22HGNirgEXxTT9rPJ19fKztDMg",
  "key7": "3xGrAtKSJfZcfMgfQqNdwDcFG7WSwo9jZshVUkm964K66RvGrC8WBtHuTZR8GzDkYPoiHsCWVr2S8f1ixe5QSRb",
  "key8": "254FiayVkZvWspYhWQYEShUHBvpXQJ2SCRWJE1vo7yRZ7EQYRvfVkPThftmM3CqTBUZLycHQqe77rWVoVxd6G27Z",
  "key9": "4RG446US759BH7BoSuB4hsGoumaP9CCefgqSsTL8puLNuaQbptzrnaX9EJuP1KYV1aUYRi7MV8vtTiaAyRgTZF8a",
  "key10": "VBuWtUay9KPiiN8vHKGQiDYhnEJSU5e8p8dWf2bhf8jBTpSUf9kybw2xY82VRbv733gAtaCB3fKvb2TD6AsmBna",
  "key11": "513yZ5Ly57NyyDG1Fpt2qFx55PJdR9HLQF1KBmVtMSuM97kEeof6bk7GmJCcoAtGbBuxVwPii9UR6rZhDJ8gij8L",
  "key12": "5kFDjBneef5ZoctHFJA9Fsu33wkLa2BZP7R8jrVjkCsa58oHrZMz8Rbb1h7Av7tp2U1qhRDukDTju1J9JF6CMD8M",
  "key13": "2KYjXoss2118an64CJ2GHMdtuqwEB6MmUPYZ3SgQRTkXohQgENrNR2SRLyFZaH78DtQ9J8ee6WDabreiXB8GKBVo",
  "key14": "5KcnnmeSebCwNkoKsu2BkfFBkcVq63fUrKCgwrEPDTakkBCTdMWEkJjsVGNYSjZvXySsgdC375Dikyj6F54eb9qW",
  "key15": "btovjuzxBi6XEShgP9APmHFmH6THPGb4QVKuG3KseGUXudeAqXvCgYnz6dTWV9yFLXG2t476dEtkKexSp26Ynqg",
  "key16": "4aCiCZdTGtWikzZNG9e6SNTE77HPTq5QJ47h7GM35tUmNwhQ2b8yycnL4Booiv1SF8tH9xyjGqAwbzmgb8bB7GH7",
  "key17": "5MCMRestgp8Xkqv6VG6QhsmuaRauWkvD9YyQoo5LYPW7Wmrvy3QBX8NjmEmS51v5DgtK3VGHw4if3kPpryR4Ehcx",
  "key18": "5EkSMTEUREsPrBuMgV6NrTgBLnE3i9rhSRUgvp6DNWbQGNFDDEmzLW3zGW2KEvqH6ExZE4zzCa249jHi8ebG2DpW",
  "key19": "5dEczb81Qpv7Me2oKjq2Fib2AgunrGnZsSJ5eLni3vkHSTfJSkdkX62Ed7fX2Sw6PLadDBLiKvjDkt1J585sGZgy",
  "key20": "4f3MckFoFjJEptoXYvfkpFQsK5CHA8EJrZzSo83HKAPzMvKxph6AY9jWmGZ2ycP5uiAzpvkLdSntdYS578jjuqnh",
  "key21": "w8ERHCP2di1sBs7RM2Mrnji69hmX6cX5CFNffNxUovRtyKgyeuynDDPZYYePAdAX36LDXYC4T4yXR4uXEEq3ys1",
  "key22": "svZt3duBGWXBUntekMzLgdBLfYcNoDv8FFZ8DfpcBE6jiVYd4s2rg5nNPCmbVLwQY35qjP3htvwpPwkFGzidyk7",
  "key23": "eZfDfoKDnnajZJRe9CrKH5B9Y9Zh9wTqDQ616wW4enJw1QHhJKhX5wdqD1MX1824UNMBhG4JiAyciV91k1ginJE",
  "key24": "4TKPoYbazpkgEm1Y24LQ5ADEmFK5hTzvS41uxDd1Qtke5yoSyZw1cyTf5JqmrMRisCVMRz89mVaCQeKJGUnsNmsF",
  "key25": "43CssDAXscMfECfF1QxfcePBvh2ehzH3KtYD3WkCdgnrdVFFrv7Z6ybLVdbfy9C4xHrbC7dpN2UxVhqpvBxaCVCA",
  "key26": "3A5Rp8Fy2vBmsuqzEveQXzEV2p75vg5ButHc6a3tuFwaebPpY8XrXmDGU3Y4yiFS8qTv1BvWcCxPcHLbQCmv9hUR",
  "key27": "3zLXnzuK6KqWF3Rs7YXBXYUZop4fkjQqBeDsUvDyw3AJh77podBfRiKfSUJtx1eJL7otuh534cP3sbrULMSMgj8b",
  "key28": "3FBj2M7intwJFQPbS8XMqFWVV3LH663fGG62GLVuxLniu8YXr3ypB3Bcg7w6UrJyLrTEz93aSpqEoo6qi8jrjueL",
  "key29": "UGgiSC6nfLBL7eKmAmLSeoCSL7NdWTFix3mcS5Th4hN7F32FiuvevC5bLd8AEncG6piPEjssTFYWMc4exgV8syC"
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
