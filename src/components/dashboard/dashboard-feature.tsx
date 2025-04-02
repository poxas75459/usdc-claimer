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
    "U553uY42YCrDeD1zbCoeV9XaBgkJSUDQYVJdnEbvcC7DDTdFvdqEKSyxqW3fU9X7oyMuRjDapf6zL9AXYtaJghb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4djLAaNvfYT7GYHFbceGuTX4F1ifYSNa9FdFqx9NJAGhffbXKu6BH8H8snSPfyunzjnLezGQFBGvMuXSJUiU4VUK",
  "key1": "3w1V1mag8GCBkSKad7oXfC2VFebcjck3RTrpQmtp2wuebpSQEQeH1Bz1Pvo3AmwfsKHLWAhpLQaZxWXqQ1SaZVvp",
  "key2": "fPxY8gfJsatGgPA5Pa39nbntXfkspA4nDfCHuCCTAbGUAkgNe4i92ehfjQrX3p21fiu69c4PADB1ASrXjcy8MGw",
  "key3": "pvRH4gWm3fUHRaHwfKqrj4ypeEarVMGh2ehKm859LUCtRLvbADaX9hwTrbVDKypXStz1WSZtjyQ5MJpv6DhBbrd",
  "key4": "3eaRmqtjoqK6QorPjenfCDxYnk1hudmLDKhjLQoDUJ4kvD2BWNUs3FNYnU5hnytEkmy8WZDeyQoRJmoWkbGwySpC",
  "key5": "5X4QSBoimGrrPUXgKrnmza9mafpn4GYMbH4R9wPmtRdabq1QpsvhU5sxNyXhjfdDh5e614cbor3KfazTbbCR27GK",
  "key6": "2Yjc4MqN3JZE3uBfYhnWwXr4nguuH8EX2JusqMuqSLKv9WZ1o4bDYR418yv92uSwHwneWoBAfJDN8yf8g6bjUyif",
  "key7": "4A9krcDm4R47QzFk3L3t1U9NkQkniBgg4R87HghzGDpvb4nZmfi51DHaRfWjgjceLn7HG6ipXmNkKDvTbz9oAoQZ",
  "key8": "3J2oPBoHpt79inuSVaBYfCyxkG4N5mAQ7JgsLRko64fhsDj2KQJVKhpYDwkAqRU88E99n1hp2MVqg28azeGKWN77",
  "key9": "W5gyxtmbJC1kr4p52josf6aAm1gd3uGnhzr4KGbrDgt5PSrWEWfUxcW7qg7ZDHsPRNx1xJvn9GTQHtaNWKHxHSU",
  "key10": "4VqAk92A2RM7KM1tmpavfzaP5ktLmvimbNVpLsAkV3wGMmSWQqS86qSFg5bXVdKcj7hTEusPzHEEWwxLZpCL8ktn",
  "key11": "3eSvpA3PgZBAoLJGuBSLSMPGYD9eswpJyeqrRGDtv3xrssnY9bHZGYRzRLPoF5E8TtX2JrXSbVH898nvUoEnRCFv",
  "key12": "3ZvECZWA1tDvYi3uucyFkgrojW89f6ws6khX8fsXbrvh4z6KhFSjNUFnfnbKTb8rYVMYy7wgJXq87Q4tZ2vCHsfg",
  "key13": "5P4erT9EvLFcVvyT7ULTpiiTv3r9SSD5w6GUhAx1FySCgdV7Dee5T5mkc5MY8UsLwoCvF1dkG1WX7swBVgESbQDS",
  "key14": "3b69dT8isso3hFxXJ4Tz5yNcbnUdjF6WAF2KGfFRL65KDUqedUmVZZauWG8f6fwLtunWu8qXAiiqd6JXFxDU5JTi",
  "key15": "2ygEyejRHwD6CRT41ccP1nPAyJaCNfdKshrjBdkSBUmTokT5BndUT7Q7pnCv9sPt8o91ro46oqShKUf3RnBfnJXm",
  "key16": "3a82RnGXixMEDviwgw1P6Piy3xaLEZqgHvzpxstmhn8LMg4CWaYwQ4LhQsmzAsUvw9T3q4pJsoAvYzgYbY2SW4SL",
  "key17": "2twpBuPpjLqNuZshEqYfdyeytGEaVhouWWLBgWDcfhvZBPTsUuKbxEzSDQwG9S7wvoqzFWmYHh5ZTuwbavM62kSE",
  "key18": "36TKhgKhuioeyXJ3NSVRuE9V2vRx8exrjq2w4SBJK5AHTj4HA6pBGCZYv68SoHHL21TSFgJB8toZidPes9Pxy4ad",
  "key19": "4ujmyU6madsT3gqZorfeHKbBCgr4XKYWU6EbKhQgqVeoU4DLzxBYwZyCTLf7VYScQfWi9UAkzeDPBaNXr9Y31fsd",
  "key20": "3zc8jdnw6jYqA7Hb3StUYt94K2AJwXZUgXv6QhKCfvapVoJh8XjUi2ffoxnucGENYLDVZ7f41ketHjw5mTBiova1",
  "key21": "k8wpR1s2mDtgwwQsJz5JdVAqjCWVGSFJ5MQ1H77GfowbewZzZ3fg1iVpRx92Nop5kn2xKaK7d9mEX1859QscoJf",
  "key22": "5iRu7gbDKoTz7yiQXAnm3doBmgDkEqdzebzwN6h4ovwheA6dzPQ2X9sLZmUF9W52dKB8iVbVE81Nd6wcT46rq3LY",
  "key23": "36KLintMAcTNBFFAfZiXr43bhRsJP2V8R4fmyAMLJXCQoHT2ndir6YwAtGKcwKwba3JUXh86our5SY77xjRq35tQ",
  "key24": "5h5PwgvwHrzW2xDWVsvyaYqJ2ZxjeoXz7Kbf9DVZF9RVGpdQApFNQZqCK4j7YM26yjwffDcPm3G6BKa2noNe4Xnq",
  "key25": "4uNbu3HhmAPc8eb9oisfaEw4K46FykGp95GXvwJP4YCtypvSpCDUZ3XqAii8e4NnVTYrHEdJhzZk84TFcw2RjRaf",
  "key26": "5xDo5b9wJKgtnSEJfp5QRVuznvbJCd4LkoMAZWmPQFtZw1ZDciWc1e4oroCwN71jAGdX79oULSZH4KdQMvTUcByz",
  "key27": "2tJ4hQGCm1HPKxi47QpAxb3PsLgsbwN1CE6S6jk6sWrh5iMpf6S6jfeBzBKCFHzvcFGpVQuanyYauoccKHFWFmGV",
  "key28": "CEn999LKCq2jzwfdD2UkLisRuJUvH9qyHmkX95DaocUtmroHmzmBi2dxGKB96vUTYJeSBiHahvezswJVS8kcHLz",
  "key29": "3bLdcKvLWYcUXmxLi4qhgsvj6LobuKLU3rA88T7tNucmxyeyCHWDxRK6fonX9rLzjZkGJJGJUzyZymHi9ogWPezb"
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
