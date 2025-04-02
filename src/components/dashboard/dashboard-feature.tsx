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
    "87Fx8acZRojSVLPZdSpTSPq9r4deYq6V3bohD5BvBnnLeH5WAJbWZoV5Tf3Y3uvpDPK3wJs1xfuACcRxRaCHf4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wV7VFDpSpFXi3gQmCHssZcgdM4BmznNoENN5R8T7vNFtpFGvp6PFjphScRVjBcetrcBQSCjUVq9mzgdU2jUefun",
  "key1": "4nDmF8Sx7ZvFVHV8E7bsPEnFCY5BvuVutwuaZkwHVboxxRE9YvYemnv4CdXs6T9qgtYZLcM8Ex2HmNxiCFErFcBQ",
  "key2": "5mvpaXTsbHzUEVzMoyejZciivBp8okKdzMNiuE9BEu7z1w2fExAk6zsNVZ86bhyyA8dPtZu6ahZSua2bPUB1DLhu",
  "key3": "3sCo4HUZ6FmJ6kirfRW3Pzq4Nfc6w6hhEMQw89wqPUoH8SoMEYhxAFSqaZeAuwbwyXRJvSoWSx1er6zT85AdFGqB",
  "key4": "36d6U3TWzqBKcbLTKquUQhuFr9QwWkLRJcXf8FkJahb2VbxKNc3R6My9UrzBTTJjAmJcynQWDRJDphrknafp99qw",
  "key5": "39d7fVD3ixCMsrbaLRBgzv1dZZQ2A6gYQVfou8bEhtsXxkdFovM5PHnsLHcHgyKNW38qWSrXDL2TiUqFUytC7twG",
  "key6": "3XjuCKke4TgNZgppQWS5Q5JfGPwF5DAm1FHr1jMwqVeaYNkRQru2ApLoMhmQGCaZM44sahFDTNjgPAf9UhvgSsk3",
  "key7": "U8KzvG5KVt4kWMHUqYXT3baTtsTzXid61DhSPywmLi7ksTMKXSjPDk9xLUSbnGeq9Hhg8h2dusTdLp4LHXzuCqz",
  "key8": "4WKHKcmXHbXj2tKjWXpRgVgm5f3z8RaNmDS8TkKXSbgRPFSUEH3FehGs3MKNmzqFFzKHnD4QkDCWAoFQoVeg2ZGU",
  "key9": "5Hb9cYxQS86oW5foQNZhZTyShLULHLSr3u7jSJ6NM8pLwgsZkZXP1p88RP3Nbwwb3Vmik2YLKZUoMGTQdWejkxfQ",
  "key10": "4PcPevjwsY8yytKvQK2vwW37zDa1q9j4HmBNpcyYdPSxRYWCKqnVUENSvqXCL6XEDq3WjsPaeUbfgAKwhZ8ndF1u",
  "key11": "29mPfUNx7EdEdGUkeVhsvCtfqmdjVJu2i2BWexpN6XRf5TEKBqarWxv3ypAXLfsRbt7bXiEGCkyTe7HsXKK59kFi",
  "key12": "5CZhUV3U1LT2woJ6Abi9F4zhSpzfaihtkW5hiQbmdXx3ewr7no4HLDX27Pj9188T6RX4ptbQnaWqbkGzb4EwqzNs",
  "key13": "3pYkvN6BosAjZyNDd6HoSnpPvh8xzGLpBT5aBBwN5hbagyCVY5uNZsUXqZWFjtHc6aFocTyiBEU8Zz2z5Y21gXMT",
  "key14": "3T7YTtLGrf4NRN4YV6hYj5BN4opW2tTg167BVTBFVvtx7fa7DD5KEBmbqqz55XZkgPec1wnQ4msJyaqEseCnwFSi",
  "key15": "5NaPo76T7ZD9ANfYbH5eVsSf16o1KS5mhMKZw34K9LijrJjywgAynXze2MEho5KALCqyuZeYABfdxLAzezq4bW8a",
  "key16": "5WHzqqNc3Rsyez7r6b61qc453vQfHzjHWwAHzii8hyAZvkYNfVDvo89G7KbVbDQLcaQrh3KfT2waTVbQ8Ui6Ph34",
  "key17": "5AHXnhaeVfDksNHCK3VGSSqNXb2qdBnYPzbET1AMsByWHT6D2FryeCHS4YUA2s56W9P3DUyuYiwJYt3XietmbnWC",
  "key18": "357ENkquvgPUm4heGAgviMHQvqpiLgaTY57RVQwyuDiVXiWFwNJtQP4P8F2XkcqBKijmaPfa7Jg1FRRrbRfTETC2",
  "key19": "ozfUDoUjWbwb1aV9xe26z5dy6KxQ8rhrDheHsTp2gPdvsRGMUSKx9yBBMwYPNtbQ8Rx36vYbQh8yyfwbqZpPRHd",
  "key20": "2k9HJJLD2YS8EPXnxG6WRMorjrHzCYQwJ2Ure6S5GEYBLHMsWAqVYMg74edLLtYPNZXHr8E6wLNUciqa7F4yqpMx",
  "key21": "NZQQkExXzZcDp7m5m6758hfEtcgVuZ6ZUN3krJuGPfnntGiU88MGFwfqDhfFRDJvAqsmeBsDCHGtUhnoUWng1Lw",
  "key22": "2jL5BYjC9SxK4fHvYGaBDAjVt2WQqKirmUbsWkoDmNzbemaxyjGKavjMW6Mr6bGoRh7Hq5KptChL9V91EhQ16ckg",
  "key23": "4jesMofPzrcjGfysreqX3mm26spae6KcZJ8WNFDNvR96GgBYJtxHd61Z9SRgwBCQ4QgeEkc9NLAdhihNAuWMGFnx",
  "key24": "4tmWWXYYg613dU2WyUUhdYYxJde872XRcH437oiqFbobcbAU91jNMsgDoVD2Gy8KMUQLs6opMnTLoQ5SmTMsFAMu",
  "key25": "3tpZTx2xAx8Jr1eejrTLMkyv42f7DpCMmQtidXsmimsTBHiuvfjTEGYQ2WjFkWpTkPzVnoXsdmxcK85mnrQEeXSa",
  "key26": "6EMhGv4cR6Ujuz9qgn83ESuyej2WpMr9tR9CdTy6ZSTZ4swbmqtkrRNpx3ev1oGG2VV5o3HcoSFs2bWLYrWasGm",
  "key27": "4fPpdkicJgMNgF8mrWmye9PXFbpjgUuYpvvm34o5d3suJCiBTtA1BenoUSMq4bjddb7HzcBsKG8418QUk1MraWSZ",
  "key28": "Mxp35qEvjgutZ8XUPsR9AJjDAGGWWzTJJGJyHar2Z9mXWQS5nBMQoLaGfioaiPUG2QoNRJaA7L3uYxUq2WJWibV",
  "key29": "4Q3q5Bf9RgCYNkZ1jWkpdXa9xPAQJrnGSBmD4MiaPRHc3c9x89bhCq7Zw2rUCCsxfuKdoi3GaLV7svmWDVCJMCCj",
  "key30": "4C1A11HQQvh4oLVo2RthfHSNBv5NuXKhEE93VrUyM4HgeCNtucbVFTxuR1LcMQPxNYcDDAXSH7z9dw6KauMSHkwZ",
  "key31": "5iLrjFovPuACgXMmtf4NpYZzXK7tfQigBqWq5CQoPRYXCfkZXw64VQs9wrZk9a2AZ2VwLNRqJEU4o3wRrkJHaUQ5",
  "key32": "AkxpvFJAoq6a9bhyLwgWVnLnMhL5gWAbZ5gPecsDd8yLquZcJsn1bMuh8wLz4yzVubR7maJQzB2yurSvngXkjnp",
  "key33": "3iWYeKMVvEXVJsXQ1PLVpV7c63Zut2K5uKuv3JuMTDoS3ark7nqezJg217y1z5D25Jzk3FWHYoUb1seXyGWxrsXB",
  "key34": "24q4X7up6hd5FbxMC5couxbsmiYothB7Cn9uReCXbW7w1FgbYaLDoGgB9RBu6RPoHJJQSkRiJ1F3o9mDTHL7okU5"
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
