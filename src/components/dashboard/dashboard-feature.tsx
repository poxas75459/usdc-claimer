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
    "61HKRWYDWmh8ceqTynH7PahL3EqUGzz4vHbAWdGYQNavDTnfmcuBMzVjYjJFdLbcweCWRNArpEC37ChsGJ2ye84T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nua17HQThr2pmJi2tukdUqa8W4NGNHJihDTt3J7jFK77X4h26YWt9KueYamKDervWb5XHqKbzbHpQDkD37ygPxh",
  "key1": "3urShwipCTgm4zUS5HAS5DrYf8o1LjmcUiYANuPXVnhmevUBwUoJXwgcSKC3n7udfQwguWcqJi3AWLnTdoQDr9yx",
  "key2": "5PybBH74SFpriqX81VejGncSDV5r5LPFXdEV5ubu6PUAwU3XtNdEcT6TEHJMo9YF8h1pDrzHSngW4weGxCvycp5R",
  "key3": "5A2g1MfnzFfSUj1BvvHiwvkmCktXkeSvr6Eti9NXzHtMbiYcZgPrpdeaYjqwFK1ckfgHGWRL91pYGrXXPNyBZ1jq",
  "key4": "3qUsex8RSN9ehs8jd2WJMF5B3cQqQWxXfwAngNxssDBbnFjYMjMJqqfrxcnW5aYz5hzCDqKLia66PQJGoRQPNXfv",
  "key5": "4txV5LJqui9Sw143tc9GeUCGfDvbvpd5463DYzzuHLWxqcKxfAmLWqgdYqc5L45z8h9KQCuaveXwvatgDvKLyQKs",
  "key6": "MdDMnLkGdHJMNPEWW9W9ezBzvmzTgwwxGGv84L5T2btuqm6LWgUccyNMrSnKDm3TBPPdXU9xBRkXmF9pG3683SG",
  "key7": "4MokxzrxZWjLCUT1f6awT29KcS33vvX6RduQywmxdyJhN7EzKihfC9HUpWB23myEeu1TwCkLFEuiYExgt1seKm9a",
  "key8": "48xaC1gopQQWyt8b7qoAsLpyo9Hy4rK1F68rmeGCabucU2JvUPKPk7QBc7f2Gp1cn9EhL9TFnZnbuvQQ6CtT4SEv",
  "key9": "55rBBc1PiVN7K6ZD7LkgfsfUzG1GD8zoyd8zy4FpEpLt4TX9XXpQEYG2X2GR42RgWfeHCSK4gr99SyU1VuoVBpEm",
  "key10": "4cFT3Ejnd9LgW11HkF7AHpqVwYTyW12LKeYEdxy2HUQEmdDqmRWe5d3Puhe5VmHFjp4twR2EPvLnwoo7m5aPvCSD",
  "key11": "4tr2jmsJHyPA6KmFhca9HsmEnkaAUe5jGvaWZaSFAgkdj8BLbPoATPU19dj4xQaXahrY5KKKzwJNTq7YkmAxu6Mf",
  "key12": "4DboxNgu9mKpSyjfuYNQv8M7JgJySwUAtSs2t1iZXQuc6kvVLXapZ9kTiuiaX8c2XnBGp8teTZycqtgwP81UxwVH",
  "key13": "2fCFErxwPxWhc72faguRfxKB678MofErQhkXausvBpJw38ekvMfomjNnBxT2x4cEygVm2Bd7Kqzvsghr3SgbVwFc",
  "key14": "GY2rHR4JaKMZWgSC6YFV49YfCxd4KuZ7mJQ7eN1epq6YzXHho3kcTKQcmryBhJXHsiBLY4zEx2dykpKteJB9xqD",
  "key15": "RUPEApTgDVUEPGyXFfMM6JJ3qHVJ5v3HsSEqCpY497zUBdeMniYNGQYixvQGySmQYgc34ie5kjCD7WpobsnbET4",
  "key16": "4k1Tbba2EoX9PUvgjPNF2J2pHdVfQo9o2WUP89S6ErQsEizeVu48xARVPcNkhTSKNF2XaT9hxziBDg9m9NLYG4n9",
  "key17": "svCGwZNZEbaT1jtQVTPj9xqSA4GS3hNPhbVsgaC5Zdqh4Es2nuCFNTT2DxHyXFxqcqxKVBBPHwBuf2eUwdzuVat",
  "key18": "3c8zGUi15YBUuLfrckndfitgWeHUxxLq8ueWvqRHVccsXX7UBRrmfig5foy3Dp47iwqMmrxcamgymscnuhUiyo3Y",
  "key19": "42RHaZRQWsSvwC63HwKSqPST9QsQ2xrEa93BCidtZLN6StUPjmf3jjVde2sKBTe4SGRfoimoKQN7PPEFP7Ai5dWL",
  "key20": "5JAyPY9NsaqeGvjki9z4NMnq4wm6pt6yAp7eMoMEpteLJnvSnUYqps9fb53P7c9NcN3zdMdZJkYEm4wtxkuH7LbM",
  "key21": "4n43Sjqehd76oqbDMg8Sj3F8Tqk4ns8UGUDwmbxjpX8yKqZjjFvsoxCbggLM4TgQbkyuK3o1i7VgV5b7zWGJHb4m",
  "key22": "5rSJdknRu9Spm1qeQRRDdxdYHk697gW3Bz72ZY8zVATmwWtzx2J8QyTZdsHzVM5C6zhmMwYL5q8Kuo2EvDGGTGL2",
  "key23": "4sZfuqAfwncmhbsWjiq74sLoTnxcexuAZFkRLCodhuPusMciYF7MW5rj5Ao5GeoVwfHUb5FqDKQ1LYFTsGTMiQHE",
  "key24": "bRyJgx3LHdzGmqYSB5oTqdjn9yFwU6ZotBWXNKKjhxap3q3UsiBRhop5oqBQg2TccECneX67PqdEgD4xrSzMTCY",
  "key25": "X3taretErzzGb9ukQVrxGKGLt5WTM5Cq3UfigPeHa9sBG6oyLKFJvtxgpF68Fuj8n4e6dHjRwVS82dsF1bQMkHt",
  "key26": "3KuSwC7jkgpgXt2tXNkbQQiSSRJdEkLrtd8ZfTtXXKAJ1ZSSHJ4kpfnXBh9Eme2udo52N8CRPrSdBBQEjKxg1Wu8",
  "key27": "3jrW6xibppjQgWMQLpPUPno7X2KPNGZpwQxrKZjeT9nY8R6SvNiApDG3zbKMBA3TBhKLRusMTSU1KmnPmnpVVGNw",
  "key28": "2VrGKnJu2H6S9Y2Bpfh28y6aVT3MgECstid4D6Uv4UZH5nYQVDtaXcbgKSdgZBXUt4NhKkStQL68aNJcQVX3MpgT",
  "key29": "3HVc1jEXn1BdSdCQ8fD88aGkaFi2b4kpW1sBMtJQu53vp4wC62Tuj2XBrWFJWbgahVB3Q6onGoPbDmuB2E2RAyGf"
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
