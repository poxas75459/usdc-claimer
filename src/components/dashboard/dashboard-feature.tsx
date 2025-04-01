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
    "2iAzbVTC8BFZfoGiuUyTWJfFk3RZ4TJhBXkPzmExzT78z5RPeTosS7qQDeHnbcxxZjmVjFXfHSD6khivzdqywZaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jVNqBtm4jjKGm7qAMfpkbr9jasLsWBdiRPJRLjkMDeaJF1J1tBJZ5gbLvNE7FnqXm3i6gKPyNNvMi6VtcCG3tyW",
  "key1": "4NbzPcHQzvASRcYK2NtNfRsKJQG8WjbPwLfe8Ke7TTpnQvzyXNw8g7JG6S8qmxup2R48USZkpNfT5A2JhshPcQkg",
  "key2": "C18uWonEZRHFbhShrogbxPtn3Ch7DFj9SuSXMKP612zEpSJYdhjvPLASdiAyiFTwq6iWjJsbSMUPjyjszqpUuTF",
  "key3": "2sthpTtfkVx831UKtJRyYsh76vMYB13SW9Kwcp6tihFqmQbM7DWSrV7R6j3Y3rKFuRJ6FxRxZEt7WNSAezHXJtqH",
  "key4": "4seBznqvLdipaUuiwBAFkXnSZRTnm5mPGZVteqJPdvp1RJ4YYKcVv8ap29giJ1xWcTgPNKUYkGNhFq6izK7a2k1L",
  "key5": "4Tdnv1Bot8XaN2xq1fok1NhdJgT9q3mLuvByG6W16rbQ6ChNG6sYWQJ5XF8r5NYiNd83rWxDNaGAveVzuohiE1vD",
  "key6": "ghgLPAL2fuejaZAVMPAoQmE8DLphdyTqcpVg1273xMLAyDFQyzaYAehrojGo2HJW8F4FaiW5pj7UA4tMHYsvNxf",
  "key7": "fkrzwoayhhNUrpCPv8K5uAtYYbGrDSXpFma1bS4EoVfA6XqAWukng1DyxjaxyxJSEUPd3VaRuf4KZJ7zPEiymmo",
  "key8": "29RktNGCaRKgsQmqGfVpk7iboBngc33MvhJ9YUBUSF3ZkSi7cftYYM8TKTPsyaWKETBhL66PpsbAB8guRQyLhJ3E",
  "key9": "2GoW61twT3rADkF7ajaumA1AotZLg8SzUiVZXmJAv2CeJA3ghXgzjnwvcWEqDyYWo6xxGQqFiMLCnW4S1RyeYRSC",
  "key10": "pwbfYtTLX9qc3AYKTovsYtkDUXw2yv3Vb8vVM3YbkHzE9xCwch7fKmk2apvNM6MKhQzkzPuTJACJbYbHA2EWumi",
  "key11": "25dhWKkxMn4vsUrUe3Np7ZjeMcMCdpZYt3Gsjteoqsf2tAkXyKiodtriYY9TYgBPgbC48oiEQ5HmpDVnUU9wBEGf",
  "key12": "3XHrkfppw251XJAxBHmLKt9NjjwNaf5bQEHA5zbgQii3thAhzEUTvMoX6PPy5orDUukPiURZs5miCC7zrRm4trZp",
  "key13": "3gthghp9kwL8XHZnZVPFXpQAmiyMb3nGLANZ6WMtHbGxrpofAQbpD9S9SubsG4K4Gh4Vrt24E3KjcsKrYBpDPX4",
  "key14": "2VwWyvevN3ipjdTyYWfZr17MWLw3m5vm8rx6xbC5b1pJkJF5nUK2LEczGikj2riRefQf7HZnd6dxWZp1p7vVoPr8",
  "key15": "3xbfuCH9kjYJs1z3Hw4kZNpPGJRbTfeeZ8GHnCYjw7bbBamTC2F6FFJeh6hQDAsTynasP7ersaor296MSkDeFGLZ",
  "key16": "59NP3XX1sQVayxRXevkd5jyevDLUSyxSbUp9jqmxUXDoA7Dxp7C3M3UkyPGE2VuVcNYkqPk8wkKmmbw8DmzTyELz",
  "key17": "4wmgegfbW67YFDjgxG4Qrz1h44Fk7xM5otabKeFofzLDXhw2RkwXZJRFAmwLPma42txeu5DnRyRAM2ckUpAgsbwH",
  "key18": "3wtWbBe5WVuifWaMSz9Ba3Xpw51RDrjbRvoStVAV4tWRZo9HLMbjnz2ULxnLESQZbUvxdPjaqZw5TTo36DhMdYdy",
  "key19": "gxUeRxj6AXfnZKv2DzFvLKxmiChy5hxC4oZAkdKp4qy65Kdbk8EZQGfqQ7VBsLkR6NtjE7rzfDHmspvftSqoNXm",
  "key20": "4GXV5gnQuRSSRDTnG8jiVth9G9EB8C5tjn92DWvLNZo3LusiufucT3WVyG6tRvY7NLSBnxnBsDJg6UX2fGKZBmnZ",
  "key21": "2nhsvYfssZWn2JGNxyUZ7gaMrsDg8QEZ33PbbsEoU4KMAaVeYm9aaF8i3FqJD7veSPgQ1YRNTmWWZ5B3xznp7nM1",
  "key22": "kNY7fSGpRekdbW9bJQKzjjdVeLReuNjWhXvWBuTU2mzfCubq94k9Me3zBZsipH6sQwhRD3u3og5JPZpGZMgKTCn",
  "key23": "2GMUugykVoc1Kum3zeY2es5mipsGUYi11kfF43zAgb7uCVEuZjo1mmsLBgxHQzAePzqhMyfKCcdpZh28XRL8qGW3",
  "key24": "281gyrhXMvKCYAvX5ctKvHAkd3PdYUXmqjBNgt4FxzPE2KVFoPoC55DNDgdBte1g7SgJaFRfD1PsTXGLSaftJQAv",
  "key25": "HvshknYrVCR9mQFv645HP46QL8GtrtgNDy6px1XSeqzEUBKrRe42kRqtQstfRK4mDf3WV1AjFGZyG5aWCQqqxgs",
  "key26": "5pZmRPf8S4PBiFN2FFt1EH3TLgZek3pH2793b4Anryr57mWm7ZMLeApLWSW2maviZ9UPTGwRVUCMvAPevNGsYQYA",
  "key27": "LFfdgYXtkkETHFjYv2HYWEQUqhGFgGchazfeq9NSCahnqcE8eTKTjJFnuFzPHrykRUSELzF1Ro91BehPWcpWzK3",
  "key28": "2DySQsLwjXzw15XBuDncKed6ksfV5Df9hkuXzvU6WCtAMy7ykFmFtDJebFLYMi1r8Rp8YUVLtnPyrKXK3LZn8rRp",
  "key29": "27TkcmpLq5EGx8aoJRnMzNfttbivdW7pRV4bqTw5sQ645VFz3enqS6DgXWU9DSAX88D5v73x86xzKxgs98AgUSLf",
  "key30": "3KVJ7k8LuS2EghJDrhp68LzFNWppDGXXqrb6noG4nyAXYbV3PMmZYSXths3hjXgXUD13zxL8MzZGxa2fJSKaB1ni",
  "key31": "5rbyfJ21Ek7n6cAUQbEfsnjVEtoh8mP1VFGGiA7YYzVTRaqfgy71T4daqdYD7EYgL5yDiXvJyw1qfxrw1jngdKBv",
  "key32": "4gmZBC83FGMhrHy93XZA4hoEa7JwT5UGabL1Rz6CkW4VG6Tphrv2AmVrn8s2knkCo6169UXpNSUMYeDxyyULCnT4",
  "key33": "5X3mmumBP43GwtKTEDBHWqU59JCusRrdjUBUMzXHhURfHUgiHzMaXvdBUJdq8yqnPmy5Ge9nr24gcjRSCNnuaWre"
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
