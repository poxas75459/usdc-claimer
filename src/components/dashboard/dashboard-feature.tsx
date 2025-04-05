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
    "3GQQyDudTEH31YSCDWqvEX4R1wLTPRG44jQpP5fNgkr8ZqzLdQ7kRjGg3sBgXQxHCBsgD3XyXAen8bRU6vo4TqpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ax8RN1gFXbAtt3y8M4LkvgPtvGUwzHxha6ZCwyabC22bnBKbm2oK3ZRVZ6n61Bv9Ac5SgD8gQ1jK1UyGXLQ7VzW",
  "key1": "556m2pwkknTkeVAozkfXoWQPd2b7jji5CEdgM4rxyKofZW26imo2NXguVFqKFpxqqu4kAuMDkhH7nPinKr4Yqt3r",
  "key2": "4VYMrqb4AXwVWYcyGvrGEyDJVCGKx3NFHGhHsB5BinGJeMyaY1cfFVecmUdcwr1W4vJ4FeVcgcMgwGDVMLFxwiPD",
  "key3": "4tM4z2d8sZHv2VaF1WUqAmJ6p1uygGPqwBu7whnBgjqNV9Qk4aR1qSfMfsYJvwGEsAQL867RTMD8ffqs9eLzzcb3",
  "key4": "4aMNF1uLyok6CB118v2JUqBPbQyzAbA27LD51cf68ia2aaxWqb2ABRxbLUxhEeVT7SaYhK7DaS7grjbtmegUcm5y",
  "key5": "3SxJj9hWNH2VQc8oGoXERMzFDnYxpXn3JgUyYeYsz8b4FHNHux6jPeWj43Da5s69Cx5xucgPEMztDWjHgid7ZuSu",
  "key6": "63zE3i7tUT92U4wwTS2y7V7xeR7qtCbvosjXuK6zJ8h1FBrEANuoF4uax2GAJyrKNtgAEtLi6aMw1C6VFaLcAb7Q",
  "key7": "3sDtCXvvzeKZtcUuDRX8C838awVMRjbt7scXyjQxPNAsyioUyKZ8mWRwijSapH569bJa6yrtmRgcZkzzuaP1rcot",
  "key8": "12LZ9TKjFuXCcVNgCraQs81NtiwzuKBp83ijWXfNZk5fauttbquTrtuGbTZTpRemu5MAbk7f7NgQAKVPhxbc18T",
  "key9": "5x3nUcbDdUGcAxix4sKYfBgCmpg5HqPNnvcmxEeSd4CpmBX2tioYLgXyykUt5q5RCAfyBgcnNXPyTFMGSUHuCJHg",
  "key10": "2H97fJwm4LGrKf5GrpRs5DHvmwAx2CrAruN1kzCMbk5fd1mhGuNhHaB7n46SbEN54eMpLaez7QVcZGYBLYpFZWtQ",
  "key11": "4HJwi1twzwRR2b7cpAzfX5DdZYdamL42bVBSsCcd2AzraHsYCNjp7oqcJd7ReoQKmiqWXjc7KUpTCbZW2mR9to4N",
  "key12": "2WuoCgVxPgge5hQLuWyufqYvBxG2ZCF2JE3LHMS22o7JGCjkMAqTZZgDfGzn8tbntNiHZmXg86t2VX1boxjTCsqN",
  "key13": "4pyYnaPYdW5LS1RXvDGgaKsoQsxntdSkxBJBQzvCi3LFhEdFttA31Ut4SN6n1KBratWpH61UutE25kaWXHncDasG",
  "key14": "Tgo3Xfp46s4PfyiR2us1Y8ezmph9yTAvrUFD1qfXsC754uT33myQhHz3m6wSezFVzqk8WTjNgLSwPyB86xr1Xn3",
  "key15": "aB1qnbGaXNvJQZUGY2ZaLQiY1TgEoJXPRRtTRGijxJLpRRFdzngyUqb1BmmeKxy5uJ7n3Ri1oSN26sSQTDGPZm8",
  "key16": "WgUCeJJhpATni87yfJaXuXrZMR8NutnxNxjwbJVBuZhocXqNsp6t1824uevkEGrEWreC3vsVkuWjGrDNTWRNaBv",
  "key17": "v7BHeNgXt4S6vhfztCxLbG15ngPR76TeMBTA5DA5u1py63FFYjEhvKVDWH4tv8oG3HkHczhHU6M5WUcgWjCx4nr",
  "key18": "3XYPuXmASLv11GFRLzxzpwXsXE1afXjqsuQzadmxXubijA6mWoKUHBZFcHdJiCJUVdYTNobt8ffxwfVMwuyDHHTE",
  "key19": "qQiWtFN84ZXpPoFKYQX5VFp9FFqK1hKgxMueUYDsBwJ9xR44aNxs8wXDL66P9NnqF7KE7vgo1H5WmKjs97ku2du",
  "key20": "28hjw4TxBrY8eesMtX9n9cJdYfPWZS1zcMthXKu5ofNwHujJWFCCdr3ZDHbpsZgR5VP2Dtz4BpDRYdDFYCGxPv6J",
  "key21": "2f1D1nhkbKK6WeGeN37YYCsJMVf64DNocHfH6q51tNYJR5eHxivQF7yXrZJEcVwD3naN7i5SB9myWY2AHUixiHAp",
  "key22": "2ZuSCtWDgbCHnJMnVEbKd54TbDTyUZproT6ZUh5gBPtEPQ4C26Smz963F45E6ZSUR8ujHFqUt9WHBawCWV4yzkw9",
  "key23": "3pPuQAjf7pLrnAuCWnUwbw9zmwh7gQ89XEsNbbbARCvQgnF9mXEHAi39pwcFzJhCZU79mJz2Qv3NqZKS6jsVnPpW",
  "key24": "3C1eztsQ5y3P2QmVKanShEveJtUVkAQP9qtqbdsSrTWkQ5wjk6wySebuTgtbCp1xrtUiMUog4HQMDStD3SxngAFG",
  "key25": "3P1S2USNomaGLKegKK9mMNGzF2hGTuAEbd1XfuTC1ZxdKmR2khCA9EyAGseGc8vjfTssca8wzTNgSrbV96R9PXyP",
  "key26": "2ZqBMkSEgXx99motsvjTQyvvfnyMfHkJD4KvXikvM4k1ykxJw34X9nzpjUXEKqe9PLvvzheFYRiCoKuW7M68BwzZ",
  "key27": "uRQfZUTZ5SU332Nfw9j858eYipLvfKQwv8zvvH66sQtNt8yv8MeXJsnAJiMmgiho8V2N2txi26AHcRADdNLDyk8",
  "key28": "5QGRqNjt1CGsJi8giyy8veT48CEfSa4EhwsvA3xGGnhndJTobf1iEysJbP85pqHVmENNihizsP8odhSVkLNQtDc5",
  "key29": "4Ge9nGFZiKki1e82Ua8kH17NUcjgCnNKEYyoi1oXQ8NZ345MwsknhXxzxUPbFiqypGGYiFGMFBThheGHe9hKaUkz",
  "key30": "4jLxEjRAdWsP9RPsiffbrPq2nvwL2CDPbts31t594zRhCiDPEzgsjxcrLvzsXSjyGjhuYpo2JLhYerk5WrhonUnd",
  "key31": "43ykftTAQJJd5pp41vadnorB1berJ2CXLmRKrh1EG41YnfTsceC5ZB69wcsrQVFMmCLvwMr9N8EnwB6aS6dTUroU",
  "key32": "5VXqu29T3EW1aDCTZnihcAXkLVRX4ZaPFKn5cepSaQBg5CWstjiRcai8kqKyWiHHp1bBhRdNCMvUPGizhvQLqLYp",
  "key33": "DQ3FMbpcHt7BKbStAvD71MiyxAUY3zpAYgbphTr8C7vjaUfi59VP6fdnRXoQs8Us28Egk6WiDLJXRoYH2RGqcfr",
  "key34": "2WS1YAjSGPrL7GotgfHyySudgbGTHDmS9pzZjkfw79ha2fNzTp2Wri2asG3Mm6ibzgkdTwRGsPrVgyFszBxG7KyZ",
  "key35": "ud4z3gtRGFuRph2Hnrh9KqTdqEXiWFEyH3WAPwGDB2Y46tA8P9ZfAtPETa9Q71nGJh57kW7LLP8KH1GioNfkuSo",
  "key36": "55JdSHWoS8LmNSWFKPcgYvKyAaseGrYgyiWezBAAAN8eCdP1yqSxYtRemeXKnwHX2ncxHLup7nAAfwRuZW1CdyJA",
  "key37": "isxEo1t5HihcurMDHBA2r99zXGQw2S9739xTKoDr9Q7vUuaUPKC6C539NLP9vDEBb8hykT3pNYNekWuu9i8yxwb",
  "key38": "Qson2WRtvpPVQXFCezW21dncKwrdRhcq92jBiUBaxx4uEC1djkoKARaNv5LLVigKVWf59egnwwQYL6Az6EPhUd9",
  "key39": "4W2Je6DR7LtA5V5nJHEomKdpqPH8TnneWqXiX7YqLxgWXCnvWXR2BYFaGjvAZLRZkpBFCWhk4VFrRssHtK8d2CwU",
  "key40": "2yfQWK6ZNLkaDg2JYLdKGoN9TYNQMwH7JwXVUMhyxW3gsHEg1FD24n1ECFi3ZH8BDHXuwZh54XNhwsDyfVZNpbWw",
  "key41": "427wjHBzEu723Nc1rmV8LLbSESrPw3emWeZaokjuZucSyN9FkTYvhzqqoFGWzAQ153N25sFgr5t9KSiPzSeYMZpJ",
  "key42": "4M2ud515nkbQn4B9Xscw6PqgQPHNkTGeicG15Hg8V6YkrkJvS5dS7wjEp98v4SsNWo1f94qhmrMkkJxLaMtyFdYm",
  "key43": "2PpPTxmYCMD9BAZmvonQPTUSqHZ9gYyrwbL5LivxnpH7pr4tRb13cbsZHvKytFLposWePpoZi528Upg2ybiKWopp",
  "key44": "vfojvhdD5VNWH58mz7RCgFJVour1Fm6drbxWz1BxTcxTHCfykfc9GcFYCiS6euKVNpkRpn1TjqsAjVYjmQCDinL"
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
