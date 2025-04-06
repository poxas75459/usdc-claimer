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
    "4ahMDRQJMXZwQqaC4xZHrNDre3VcbY2HLbBV7a6KzuGyeqX3WtyWPohCXUCxArW9r89u3davkUGuHkzSAZmWJc2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46um4Z7AZgt9gSpPx6rPPZBk5G5FgeyLJJmxAodoftDuFt7Jp5tQzJF8bjexENVgDRqW9uhMx6S1ALXYG8PutjEp",
  "key1": "2X6rHBxrdzx9u8kCBYtwr84qT5wPyKa2ZQtyh18L8Vp7mEmKhFNjqopH3BMrGpjcKazM7TbtSJmAc9rBVe444nKV",
  "key2": "hyo5nXrH1RqVBCe9bkvrhbboLwfNbk7PiGHRspKESDUFR4vN2jVYQJcsgfLPk1xrSM8br6koNJ8vdqBPGxLbc3i",
  "key3": "5M7w4Tsp5kmxWNso7Bc2q3GhVCBLupasEyijP4g4PMerNt1UruQgvmC19hqZKmAsCwQ13YNVH2ZBw8F417HTovSz",
  "key4": "3si8JfcagVZAL3D4d7v6jSKmJAbvT6CRBxsSuafCx6uNoFcKr4ynNZXqwgz7HEct2okSBZsguUEPECYSDniMHtkn",
  "key5": "4QVJStY4TChvLihK5whbv11dywaeny84SVQhshceeFUVFDutrSceA4UnobacKzKgxoMMrzqzCLn8eaLV12mujFVE",
  "key6": "3neGAokzErd428QUSc9qdaHnzP57FaHp3cb5cZHnd5cbVsnTu2wm1ryn4X2Q89EzNX2t27SXiZJPZjuZzzwJFpXi",
  "key7": "43hMjVNyfvZwWE7t4LnL8oWJobkz8AeJsndfTGVvXVphD1NJDkbb96wZF1nQjbRS8GY12ymcjkg147b2U9CzuP2R",
  "key8": "g4Ap2RL2bahYdbPa3jXviZJpXHAyUzAJ8mKHD8cHoUJA4fQeFuYw8vbZpgU474oQ2iWo1faFmK3oNmtKbT5NCpB",
  "key9": "67SQwta3EAmzWWCFzUVqKxNgtxuVEUsRVYT4MYBvpEk8AZqfNoX8pyQQXdKJFSDP6LUKmxXNC8tu55nyBFvTGuAZ",
  "key10": "5PjP3o3VE2RwWQtSJwDghdBLo4pqggHcYFCUNjANV1xCeWsFY6fM3eqApyECZLAhQciJkd8NN38r79VtcLSt9KTK",
  "key11": "2M7TK3cUv5ZpTRFjSkuKKtvpSrL9q7nBvxbSfafe4pdApZFEUTgjTmyuNpm9QVf9XmXXqgB9WEyPtfARVwogAGLf",
  "key12": "5SKevcVQPjdB6Ve8VqQwQ44rd6ZaezeavV1us1HmWY4hQbQSAtUPxGKBcV14FuwGiQ9LScCLh1FrjRYt98u2BGPn",
  "key13": "46ymZmH4dACgm5f6Y9RQA3uiFXaFHFmGzEwD83VgtTS6q93ChRUyvfAxSMTyPS2NQxKwDLGmznPH5JJboZXJFrrR",
  "key14": "26wzjwfYcVxvHk52y5qj763sNjzBtKZd2uSdg7S4KfFJcg8ybAx7pDvpENa29A54tx1irHsJBfocbxY7WDn2LcT8",
  "key15": "35EkY1gfgmDxz81JCtYWvdAfaUjahaXMKKir2bC2g45JMwPWar8ApYe19gzVvprAH5wQZsFaZ7pCmZwoRPwyjJwz",
  "key16": "3DvN8Rs1paQtMDkyRKSdmc2scW1m2gJKivrMLz1aa4UR2jxfmLP1x6QspfEKYYEAeQvPeEeXp5ESnrCxS81MgzVP",
  "key17": "5HbH53uBp8PmNeU7Fh1HP1KtTVBxigw3jLg7Lsvv1481m42YrbYPBZanRju5z9hLze4UBs22GYucdxDVVdQosBm1",
  "key18": "5czr8ApWkQm9LLp4dsJodj9tciKHJ4jrNKPyBcxn3RwGq4AzD3dyFbc5zYmBkBmXgMdm1pbtCkZ7dducYfuuMA7g",
  "key19": "5YC1dAYUG3Tu2hRjoKHdLkyLLisxvf9vDDu2U1S5UMAE5xFVfqFTT4ge7eTXpdP6qcfJgs1Fys6KgYXD1wWbXwBj",
  "key20": "2JqTmyB1H1Ev7bW2aoHFgJnCGyGok2dqDNVdL1naN2cF9zjpq3nQgfDTbdjLNGsVJNHedhFQnxKaSYMVZfwtJpMn",
  "key21": "5PMSaJXYMTHFcRVAPsNADZHyM78ZyhoFxcFgnR35rTN59xzd1tqoqoT73tWi4eKFCPW9E6CswNsnZ5fwXUa3gFDN",
  "key22": "4M3zdRKwuUD54YENfQjnPs39ktkfvxtfeq4zmgGqMEar5kKydmyEdK3F5rPvGw6wJHBKSD8Gh1kWzQE1mCmaMoo3",
  "key23": "51iW223g6HcN4SBCGDXByRbbCasvfW3YNXtEW9o6AeLfdbjBicmfkFQWgEVfpQhzkfG4GEyX6ZMzdhzXFZHuUFZp",
  "key24": "2J3dVHwoim5hZ2z76MiCCfUVq156Nn2F9LjbuMUFmSPgzcipYmTqrMBCSybR3YsVKwBNa4RhxhaSX3DchbaQWzT3",
  "key25": "4oaMijaYGRBKbkDcwGy1CVu2tzCthpNxzBnwc9BjooNBbeTsBmGodd8TdtgmyoCKUzadJFBi3QrxW3FqMyzYoTxB",
  "key26": "43gAuF6FKhcgiLSd4GrqdK2WYYu3VYaDDFSyKMaiWCcmmiHADYu52S7voSUN8CaXhTia1Cqh14QGSWygw1zBqPm1",
  "key27": "42qLdxhZUQiw3fqfyiUiCMLRuRg3kGg2h69vGZopufZNtKftMkfitxzCiBBWpeKdFgz1VbHF49FhjL5ALWuH6NV6",
  "key28": "4VRKMXqHWj4dN4wYtjW5NnPfb6ShHMYJwh9mtY9ryoJ37QuMScbTSco2jJqtCxTVJhP3XvAoGBvMKmZtiKGpdqXb",
  "key29": "4PzWj9yNjnLkC6gZ8RREQ1vk4Hnzr3mwXwGskMKrkKFAMh4FY7HTTT4PbErV4vyeasY1QtczLC6MgvJ78PdcxciZ",
  "key30": "3oLBWmy5YirPKmBs1cwGvzJLUt4a4V4HdwYbgbAJSkWJe4j9DVrGptGjsnpoLTpTVn3EMDynU2M9DM3hA177jKgn",
  "key31": "32Si1kFVPywTQ4DRrmtDrjwDkA35KZWQVDW4u3He3Zao1NHC7cY76cC39V7KTcRdvMmNzjvhYjZVDxKMFjuVcKfs",
  "key32": "YT4UH3U9psbRPpnseXHXgPnhWPp3F84GDPQSKpZiUhu2cDowP7c7yxDiqEUeeZ83U9VELKrVTtjB6iYbX5LhYqH",
  "key33": "3RHnKKhdWHDHr3NaRBjLxTJmdMYz5Kx4swwCtvewr8XPHG5SDjxUJLpX13GRP9hYcZ65gnBnXdLreKRf2gY95U7j",
  "key34": "41BTaHBymJxy1JatM9x5xmpUaMPVYoW6yX8D3TYUGtDovYow2d37FYJCqvNnNL36ebBmiMN9Vg26z6y4W3SEr5cy",
  "key35": "5hCVqbGYgdhpLqmjzqjbE8b3YYtzGX1hXNzVdRKapZHtBJuVnabhSwirLvtA4t9RoS4QS1HuGuKiorv9cvX7bTqT"
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
