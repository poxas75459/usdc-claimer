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
    "RThCvutAGJc6xT6vFwnKbhQNg6deABmwx7pB5HudY9VjsRdVdbPEdFzwCmLp7hYpCYmgGLawyKk9S3kfXQqLdVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QEaHfxSVBfGcgTcBfTSsCovyAhzBMi6Ch5iun4aXYRrgSCs7wNTdbZLDPdUmKvXfQA3zfwLUvh4uMh9DQv2WBy",
  "key1": "3onWcknvmCytvy5fDALsTnXzrTgxPFbsZaW22XK8MHegHjdbdBZBbx9JKrgdZgGH1mmG577FD2wGUsdWi5NkGdg4",
  "key2": "MBAn4f2XebLctTEeMUTf7CS9yJmunC5NdMcBYYX56oxHuyX5siCjxTq5XqnxccQ2aS1uwMuwLgBszEyk3bm98bG",
  "key3": "UmkrhsiTsBzofbtXfCPuwDvVK8XBh63jw3Pb9r4Q7ZJV7UuR2RZxYZaGBLrRALGwHFt7jYkhWyib3wnQbx6uc36",
  "key4": "2bv97BKnNHMxWCWV5995YXYz1kFZY8aaVsrXM2iXo2oz3HgbuGuKYSYDHiWk72MijbKKK9WcfBw32VEToK6gp2rQ",
  "key5": "2ZNw44aW62nt1TXKXpn5q4VJnEBomomofz1BLuXYecaA8y7p24ix2G27fJsj3HoCoAonjUudi2Bsrm4ve5QpPR6k",
  "key6": "MFKUuuvPkMqXvTFjANNjWsVjVSk4w9KdYdxTL82omT5YZTeeeGX8DLACyTnecoomR2QsNysLR5z9Yr86zjqC4E4",
  "key7": "5REpUhvh4n1YcySZE9JsqgyVuKt1kLDzjwaL9dV3jg7dLHbsEM6ZNGsLeyCjaBxMjJTgfsavwndAniQqcQvzcnGo",
  "key8": "2ttg7GB7nwB8NYWQSk9ASYQNUBhvTuBcohfoYvqRnsLpNrqdZGiiwhSu5DCvAfmie57nE9HTVdBQzhvKzJS1P7uf",
  "key9": "2prcpm4YEH2yGYq1hNes1gZeJmwXw4My8H4B1udD9EPfJhz4c6TptwrimUrQfzbgvB6tTiNJn1KHrEDB3V9jSEu",
  "key10": "3kMgtag8tU8SkeuUzw6wGNyiJNeRqs6d3x3Rs5XYLEKDz5JF7jAGa5vdNcxQJMaCyvW5d1NAGsVUodmG7ByggB5b",
  "key11": "2wjbh2kY4awGbL6VAJFkF6SoPrtkCz8NPhhiABUofYjdQPEp5tfixkvGkxHe12wUuiFGHzDK2AnSx3dVZtaBrVwn",
  "key12": "2xNofYreYtSuJY8ZEARDDEZN86i19qYq6gb7c1ebbGvHC4kb5aWGxmQuEF2JvmhXmYTpK3vm16HYSv8bkvkNSRC5",
  "key13": "2oiQC5E7dyAsQtpxyvSoYvwwd2eQimdKc3RpquaBR9ByAoeU6VeBFon2WC28Q2GQ68FxgFfkvyVYnBcT5RkQ4V1g",
  "key14": "A1h1V5oRa8U2WUPx4JKsD45TTtpCbetaSXbsDgwz5J523fjBN3tUxMbYvayNHYsGNP3m7dWeQVrbXELCrfqFqKf",
  "key15": "2mN5DQ2WkuGWyU4CBmcgV91gdaMWHVoocxPohASKrH6aDD81oVmhxU5JBqbNj3TpxrSKEQeBA47KAmxkPVB3zT2E",
  "key16": "61wNzdMSJp73mDYyLsVetbr7FTUgvNnbhJ1GwVP5gm4AJmpbtHbEUR41E9wF83arhPNNJLUqh9HH8wzsLgFHNhCU",
  "key17": "FHx2t7YTrqmos1hN2C4JT9ho4Mm4pCieUNZHJWMwuXTxFD1Smg4ejswRvKFREpTum6HnMaa49pg53ZX6zFTASNX",
  "key18": "48jp1guE8GC9AKLg1rQUFcvjtjUrxPBL4TGSywjMdX9dUT5AHMqMYgmivH9CtJnnRdmtLyjsrmEWq9bpPCrfArU2",
  "key19": "4Qno4tkQEB6JM2m9SjvgZGwPzAa7ZeuCkSh3Wd8FgpuSMhznpcoJPLMGcqJ9yqCASQiQNjcGyDPzwcyyJKeQ1n5h",
  "key20": "3ramCyDCmLvfx5ygpvaSASjFaqxmm5rWR2o4ja44ga2FMScunfwKm7M49KCxfZxf5fsA6STtaUv6LU8hzpuJa9pr",
  "key21": "99HhkJyikVJJknrLwLRFfxQfAEd2REc6pAKmMJZiDTNN4yg55Bs6CHV79Hzsj9L2FCbVudmmrsdoDKKevQdv1bP",
  "key22": "43ehdzdZFX2h8jtbXp9jf1F9MCqrfJE5snX9XUj3LjNQeNKfYwMaSdypen6QspAcPvCjFK5FrJYW2bxmtaC4hM6d",
  "key23": "39xcUYjpo8LG6iffXi1TNbALgapP1pc3btZuFeXUfqMDTp6fwXAKeveC57VUo9MByvz7EanM5iop5TYGpGUFCfp7",
  "key24": "3qmVfbu9RaabkMPAMg9BLsAPEE5ymdgik1qfhiXRMequcfFxKz79e2eyNtPs7cKzBFs9KBjtZ8Ptg5wQLPnT8uUt",
  "key25": "5YeRpUUKLNVcUif7bDnMFAKHAwJNHywhuYx8pW1zh1q9WUSzyjHeirpsXkPxLQNzajPdn5FRiyM5tC1ibjUeVKVE",
  "key26": "2oh4pMcutyNuVADuKDdX2uJYU244QSFAzxJPh6T2eMVArsp65P6Yp1E81iyGrLjna89jXrWBbeYJkLvJ6WbSPyXg",
  "key27": "2bBBHtURf5o3p6gmwyeYHbaVUSDP4SPuzavJ19aJoZpSKMkSi5mXbGLVHLZs8KVdFRWCFsacSUQSo8X5rbTBTNNf",
  "key28": "4PwqGyjaxeCE4qSinKoUSN3Sh3JZMinjhwPiNmXcrSWTQ3kyF32twwcSAtL8yPqYA21nx4qVPEiJ77bevzrL8LuX",
  "key29": "3W2P4uQ9ospqKEqRTzuJbdwKUoRcbvpi42RZrQvb1VX8fmo1etffEV2B9NhdP9B687DRjbude3u9rRRvx1dvc7YD",
  "key30": "Gz1H13CBm2V59Z28zc5xNiAqH9PBBejefNzGPMLKBvjHG4D32jCSGejoFbgyMEd31Ba3nzDaZojRuznATtL3Buc",
  "key31": "5GktWBL5f7DCtzHHAfegbpi9vWnH8voqjLa6pJ6mSBXkcM8c1tn2i8EnzpqaxLWZSRAyGL9f8hY3AXfjzqstSyJo",
  "key32": "4tXY1XnVukec2KnNGcgPwwkV7e2aP4JF3nxAxX3mH6xULKg9oSN2LoWPfVezoERFLoVXVBj8xo6c51zj7Vzz2rQt",
  "key33": "4pKqdGSZ8s9nuzcJAGwRK8ZPWe9RmE1i5wDLCPuC8TK7GKGUDxrVRYK8MGgHvK9oBVEHR3dw2S9LstPVUfFbuAJe",
  "key34": "66yaEr77FeJe8uPqZ7qdTyf4Puexy3MHopmpvxTJ2K1thYvEJ9HFYxPcJRUxtrond5VyifXggrpsD9xAapDpN9YV",
  "key35": "5BRtkAA9kJ7Mino15SEgBKsgLsCr9VBWtAzJbjWCaBdik75FSUXheUuHPvzCPWsZCz95jLQXRQfAtBDwcP2CtTQR",
  "key36": "YGFReJhMgwQwxckwxyFCWAsAJuZaYUbkgPv8akMBbFBfRWS3DjQj1z1fkqApvPVRWw56pZM3bLvF7s82ALb821Z",
  "key37": "3ZQowZZU1jcHCpBusv8qNA1cKeSMDny1P8ei4fMngtnEcgDtUggtWhMiWSJCETmbfP6s6hw7pJoWYfWDhsew5hRP",
  "key38": "2uJzWZ7gSRqcrJeZFuJ8Dm89TBDtv3SqrLVLJ7bk6vjXXjMYTpDMcJkc3wLVDnU2Xd8gpPVM5Bdjvz5ik7mLTkm4"
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
