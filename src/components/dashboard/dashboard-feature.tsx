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
    "5AgHerbjaDGvyu3TX66zmV5RRKD4uJUxcwBMNDWGWaJuUsQqQStrzVtkq7BNGviB6SUuCkDHeQM5YfUmrfNYknWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRnH9cAEMrTQBoAKNzAkqRz6aJqyQ41Fnq3MN5PYfR8mByN1hx8aPnVHyv5NCVC3GSRQgxiQMY3JSgvjWRiuN3E",
  "key1": "3w4hTq267avDFPdbs5w3cQbnLEwqUzAGWUibVKsSUViviLNgNNjxyPnuEiAvPjJMTEELZ3CcGzEMxkPqVm98Qifb",
  "key2": "4Zzpb4UtK3v21XmsMLkQV6H5NePJS6xZFgqB7crEnhJmEu2m8tC1iCrQV6pcvfZhQWak1nTGCpwgLZDz9AhXtHPd",
  "key3": "3JK8Wp5XQsVvYpSV871iyQdtSthhwAMWhmqq1aRbKw1SyrVk9MkcJHAwuQ9jehxd7eZRVGWjWgoQPSNbvThFQxe",
  "key4": "3WnD9dwHEBYCF5x8vdNK6rxgF3SGKM2iACwuM9JuTLVbWXika24c9kBSsTLuuh9TPao2K65KCr74ZPdzxx5aXXbp",
  "key5": "2frZS3iVjif5hfpWciLnhBzkXwTFB58AtbJSLqxKCECcbqEXccAbhxUEG3ZnmBuGCWgpJbnqGpbVESDFc3YZwwya",
  "key6": "28xnkN9eph1EHhbMFmBezm2DmvHuBUN7A8WsXT9ZCCk1hMUKf3QaDxhpLotfKi1YvbmumES3DUMdRBeAQzgQmPgA",
  "key7": "5QWF2uv4YVKQz3kc1r1FmjjHeK2SfPGr6EmUytjRNDXSMuJJccrnPmYqsjctCYkN19cDn3eqwMaGrp2ndV7zsnm6",
  "key8": "3kmN73ecZgGxjna6oq6NHa4ZJZpVwNUnjzuh3UsSGy3cMdKHe14T1NGXmXi5PEdEE7A7ZZzaxM15eFgTszyVh76H",
  "key9": "5WCrEEwwNnPNwsmjQbUjHrQjWZyj1mxbggMvVhNA8wMAED6R3ucS9CrRwLfdL6nBcw2iLV9cnWsePbCipWZpsrpA",
  "key10": "3mciaUAB5iuSsNo1qsLLRtSgBM4i9HVLMrSpBDCbPnqh1te4hHnsjKoniRn35wCxeDAPCnyMNZr3yo3RULYqC22P",
  "key11": "25pCUjHtRKRv2jS1cyf2T3HAzdUfpmH5f8bc1HTHxPxDZBMXjsYCVD9wSU756u7mPoMJFai8hx3eBJAB3nWMNN6a",
  "key12": "4jtKxuj9r19e9r462CPB3JuCwZUeuV7Km7GLmvZCFZs5DLrk27R2o9XgCRgpU3HNQCi5T3UCFviY1TL5FYLoqTcq",
  "key13": "2Wvs9iXmmT4BqX6NtKZ3fmyAJ2njU8PbwYXwmyeehMdu8Xf85zH6CdVzqEuhgZjPb8ZaGwjpwEzWxkEk1yqUAW4T",
  "key14": "3Wshq3pUuEX3tnzRJfhGNCo3sJtaCTS9vttEQigUBZ4YVCJcsmbyBNNQ9kxmZKLwzBbh3C2bc4W3tgGqERq5cKiM",
  "key15": "2xCivA1saakXY3iVjaVgr5JDhiJwmjs6BKGL1MVR9bWFfAFZgkxukbnaaUQKaodsRrDgDh1ueERT5ZZYM23f5jyH",
  "key16": "5RDwbTPpfpeQFEH16mVuWXhK38TgBDM7wp5UBjaX2Skv17vrAQ5aQwtP1X6wRjyNd3iBoZVixNEEaAcFnMhau8RT",
  "key17": "5PcH8iQVBCeZJ3g2ViKAxn2v9kNS8VTiHzgqP9x2iDuJkSZwnkRAiHyZGHQC7NMnzkDbHTZLMYNNGphFGfc2K6m7",
  "key18": "3EtosWxcVoJojimu3fQFNEUBjEk5M2AGakZY3yypPApySNGhYB8d59y7YXEwA2d26VMUpQi6DRcmS9i5oDnHCJh6",
  "key19": "36rNHmWnx7vHUavSsGbius7aMZH7ahc6UtmrArqnyyGYzv5JQjXY5dQ2umQxWw6KFmsJqsfcyHr6Hi5JJj1Wp5WK",
  "key20": "2ncnycBZXTdFt32jByTtRfd1uiFX9RyfXKPZutY2FJ8NvZUZnVp3RQtDJuVBWsjf2VpLoJhfTxcVQEgzGLayfdV8",
  "key21": "5UJxDrqHmHaiWmNTCpxYHZGeEkqhEDcjAmebx3aBVKTJbQ2TRnMUGib4Q76oTGMSiQ4iRxRADoJKAJCnhiKJibtz",
  "key22": "3s5XrqSeVPp9oUAx7RejVbAjYb1GbBveTUp4yNbXAjYKAfkinHDEAuG53VSeF3Ejs6YiXij8eDPHmvFzQ3ZqHa61",
  "key23": "2iLtUTjWjfcStAyuqFijsc2KXvCtwLdu2eNERHmcKqR5obGZPCzvk1i3fnhyNGuh8EvdYAfTSJZGFCm1gS9UBFjw",
  "key24": "2ZYwybBeXAoHqU59EmRpnhRhKBRcuvk4FSLjhfn62V4Y6WKD3saNgTciA4aeSujixFbwxvvKdBaJ4FMws2egfkMi",
  "key25": "3iP5HLSBtQak8geSqRDzSCb2FanmWHh3PFJZrNyPnkPa35L9kNaNBmKb6wMxvyAokR52Fqj7ZAne2edReVWW1mYC",
  "key26": "4Gw8fBm5kK688YdFxQFbkK9tub59hFGj9s32fcLvAmCwW9KfiAarx2jhLc5KxM6H12yZqDWYR1sf3Uk1DfwAvJ2g",
  "key27": "3z7mDBoaEPdWPWHnsp5Nh8r4NYAXMy6afhihGDZPpKuiADpdZcY9qS1XFd7Rz4dHgqee7wmsYWGmucJTZeJiA2vx",
  "key28": "3WEFUnXfH4wjWcNmip8TD6roK5Fbjh1u2NgvHS3nhkedPC3L1gJwKCUtfZhKojm1KC9hCcjc8pwf6m8KcGipRuAU",
  "key29": "4tJ4fNLZx2Sn6VqznAzmmuqzg4gC6DBrHC2ykZKiT2KR8etnSb2uD69Ye8YRaUDerWHwP75mLygjsiLx2g8wmVB1",
  "key30": "eCrD6Nfinbm3hZp3kgA22uXbsK2CspyaSnyyML8GgPcfJzCApjGgrv493sZnxT9VnWNg4rZJnAGDnHXGBxLFZNr",
  "key31": "s4zR4v83rrad7RiyHS3jyyeNUPNiLWhcnBXe8DzztbpPL4n8rwWYVqcAkY4rfgdriNS1bg682LXCFoqP95Z2oKh",
  "key32": "2y6tnwZjeHmoktqXrSfJhA3Zqgqndj7bt34w4MHFoMRCRCcVyBr8Tm5ojNj3s2hZViUXGx6MJ5sMfXiaHGgyxdCP",
  "key33": "373esBAducybqGSDXktSEd2nfCh2Q438QubPsX6WR3dd27NpbWSsH4ASEpzz4NHyWxmXGVeyhTkyXCjKMDis6zqL",
  "key34": "33KcSe8nSYoGqqtyGf3sm1LUeaEyZnfaG4fggSz22mc2ZLSXSSDHqw4ehyLptuFtKcsSd1vjLTYgtMzWDyeWzC6d",
  "key35": "24Ee4Pfkv82Kp558Bd3WzV1etatzqyLs9VTkpzrnzynhQaZdYPRCLm9JLuwgjKUQSTmUxXUp4ZADbBgV12378K53",
  "key36": "3uA86XrjkfxNpsZVHtgrsSqPJPxnw8GBGFBNZ7P47B2YVY9JHsYNra7Gj85pptujQKaQ3iVJNjgNzUbtE7oAFYts",
  "key37": "3PQFfYxb1x8hBrmsnCsLTzW1H1qbbEfHqsu3zo8PAmtgWXViFonXRaMDYS1rPzHP8PC5J5oCJijjeAV4uuwa1pq2"
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
