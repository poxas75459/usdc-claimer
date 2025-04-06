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
    "kUpxDdbbJnJcEkiJdP8wVxdPrgX43aLzkYraQUjvja5xjw6o1vrUQdsvCya2HDGXpRxqTXrSEKXx19ZbnGre3PX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5572We2esmVgyFkgM5zW9VgDgr1vtHhwj3Wv23UBgbpXv8smm7Qbq3jLR7o2wgWpWa9Uryn4KhFtqt1SwxnH8big",
  "key1": "3mG1CkEA4CXZdY3fkrd3DdFRVbfgmh1nrr2UggXeHdFsoZ1cakdQ7YJeRSuYrNmDUwV4qcMcWiWhurufM2oNLM9U",
  "key2": "4xEnx6zLKXmEkTDM6d6eCdWK7jKi8ucQkniHbbbRnAPdhcXMtGySA9W2J9g2VDBemU6oTSvXuQpPEnNEfuDoAB1W",
  "key3": "eGqHhGTX4zrhzp5vxtHFUieFcJmoiFjFkpDPkV1Mp43aUgasHfuEQ9mmepjqZgR8QxEkSRLky5o6zMJf5oknJ6V",
  "key4": "3agwH4dJrSPnddZ3bQH4TUZmvWAHikvyzqCjFbJQDusWih9jMuRUL6X2f4qhQs82ovRjMt24nw2PnxM47cjdhJQH",
  "key5": "4DBAds4Y43MP9JWhoz588Ci7yqQYzxLaNiE75Dqq6WBdUp8Ui2VJhZWUK4UXdfUG5XCanM66TjKT72p9qCTX7vR7",
  "key6": "2gEKTERVoT5VDtRJoHdh9bqsCjnHydfbc4y4utMaggQCc3ReZdaj5SBHJW9SDsmUUkeGJdezSRY99ufgBLyPwqLH",
  "key7": "3BgXjqkLY9hv8XaNdKHYMMQy9mhSZey2ntD6RAK2yGSRsd5BbWT5AWJXWoGRHDodNJSaBx4YS3cEnXXK6aFaHxx1",
  "key8": "5qY7hyTPrfMFYhrnqWCo36FF8BjUQMbtDgQifUDyLCXKRTVJZWm1vn79kjfVvJTXdVKiofXwKyEdPaMu2GuWF5n5",
  "key9": "5orZGLGxvEWq8C9J14Tto4VJi6TUTSmRxHEdoX7PUTCkt6iFvovKJ9fPHR6Vwh552RpBURu1ahs3zrsZcTT3HW1A",
  "key10": "5mE8LxhcXgu1BgwrQa41rPh6MgDmCVVuWrdQGxWQqR1S1UJZ29MrWsKSxHQupdq7R3BHxNQCQRsaVdsuHjKkfwi3",
  "key11": "3fgwtvqLpiazx2f1n9vZ39HMMBSUZ63ehXrtPSJFbFTiCarHLeZJnKkwj9bshcvDN52rupt2mzxcbmiovvVaL3Lo",
  "key12": "2w5y4SfZvUN8bCyPZu4yrHH71D2JRkBzpvbbEc5wAdD1g1mnsf9A6sAjxZxCdNHedgfxGZEocua6exfYPh4PUA8q",
  "key13": "5rqFwydGnTQgXbw8vJtDxgJnx63X1sBoyfWECgN95k1C4ZZFwmZqqagctiNjBBwG3n2GQTxW1VCitWQXAN15nuX7",
  "key14": "3HzBqBEUjajJDp9Jub8mQs8pLNSbNT1ij2RdAkUtRUn8ZjgaG6F1HttX3gc8QbazMRfMSHd7nkt1iXphg6xMHUTT",
  "key15": "5yVXhBPqAxkZr56DN7SbChodGoCCtysARAsp8A5o9XHNoLsLSuzRM97ccGZTavwFpxtvQwVwferjm7LieiPwo4S1",
  "key16": "4f3uhEvRs5Phgr23tNgeTUUjcLCkeYiaNnaCmF1oCWRtFo2m68Noi6f9x97EKfi6Tiob86Fg7qMFNouo2nvmkYXJ",
  "key17": "2NuDgNWJZeCxQ7E23wYBoSm5ZjR5Gn4d9PUUVSWS9SM5KtxvXCjUxz752uD3Xd4KkLwM1NYYTaA1uTJyvdtHKA1d",
  "key18": "4bNrKgtg1xacXgTnHHPMyoYFhVLiTybrDvQzg3793YAGALTB674LK4dkQhPSMK78Q497xqZCAM7xqbsWmwFNk7nf",
  "key19": "26cFHo7zL1oAuyDL2vDxzgjX4h1RqiCweoxXKiMno3AjAfZsXGZD1nG6mA2yPw1nA3oug6ZMV25pVNGPjMZggDyz",
  "key20": "4F13ZdL8tMgt3aziTatY6QidkA71sNTEwheKPjxFkdpPZzGhZEhe3zkX3PUJmZE8wQhrUrZJHKGGRGet3K5ypsyN",
  "key21": "3UPuEkSyeLMqsW3Nv72Hy9ATWzYap4438xGg2JHoksKm3HNFvjqV6GivdPDwyRvsBXHiD8mfRaVNhmMSJps93L5v",
  "key22": "2KtHWcfo7BLSVA4GJW4Q162kiSLBkFHPEVsehGoEnQ2eNj3QtXAD97J3UoBSXrrXBtRPYAJxcJmDHZQmH64kB8gA",
  "key23": "5dRodTsWdbNU9si5mUrvDeu9SzjUDewJjKBbUPwCdJvHiygCsfigNHKnubv91W3TvpvPJpkruW95R7AtiSUQyTww",
  "key24": "3so9DhoxBxBXgjYoyVaFjfs47wYKH6CxjDyB2ASkjDKR8nkb32mhNUvuwzeBVGPbf6Ky9A8KWkpZrFTKE32R7itc",
  "key25": "4J5zKiEnB22coaGJnVva6a5dwEsqeerEJC6RYmCSa5bDkcDEsk1ziijg8aVuKRjLwBLmWtvtLuq5aELJqkR2kGwJ",
  "key26": "5Z6CsV7FrkM2smG5batjPNmn8nWmRkM7eGcQJvAudfwsejphcZ7YJ5knxpHnF5MrBJ32x6BGHh9jyydMAQ7hsDVC",
  "key27": "wkxqPHCu7DYusTWBUbaTaPSDSA1QGXjgnPqokQBASxUqsyTDdtf5ATphqUZzkG7JeADSuc6fREX7hbruKjkf9fF",
  "key28": "CaSgNW5bbjgEG35kaS6emS4DGKoGRZZHQmPkToUEYkGtjEZuGmgVUWzWJeCLZeQ6PjKQCXpkPNKH3g3XAX2eE7N",
  "key29": "4o7b92jkLEyjiJBxA5ywRgashStxi4iCfsaeS6i74Q67Wb6V5fQMXUZy59CatgwhNrFhbQY8M7cxCuuvdyzH1ffu",
  "key30": "RwutV8QpBMAfAhZdxtiLfLyV3z556hz2b9htpvVRfj8o4q8dgZZuWFVKE3iviDCGUJSouw2VMTtMYV4wpH9o3Jj",
  "key31": "4GrUcTgWwjq4ng5ezcg1KsRZyMeqQ756isTjovQjwuWJsnhAT6wTaLVokUXiKHegDaoHZHBSZC2h9hbqKxRkLZTu",
  "key32": "3qX3jkXC928W96HqSfN5fUo3tCVu3brxMXedWNTojxvdqHCjZcs3zHG7WmUypJqLEUfzDUm4ZbqNUogUbbTmeRBU",
  "key33": "PWtysgpT3ySSiv7ZkBEfqeFN1NPzBK1dptXEZP4iCdEmF4MGvbxnYfh5ZJybbM7XAfP9RbUBCBKx7dTXZ2QEB33",
  "key34": "4ZRwQ8tJuZKmWGVE5apHVidbxt76VC8uXZqgnfnu3NSk2xeiwmdSpPevC1GKapRkrPeisQQhk25pVU2fyPRYLtGn"
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
