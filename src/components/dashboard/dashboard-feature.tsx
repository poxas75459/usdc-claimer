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
    "2CwTxAhSNGsQkJ8gSxRDoAZMeLMEj1QVPSxFchHXiXswuPJpij2S1tzYKwvfJYSWsEmsPe6fYHcajP6PacWdKC7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65KSGCQy32d4F7M9A2VUKN5TixQZAX78rVkCyyBFwC7joso38w7P8zA9nZi666hpRtXv4ZJP3c3AQx7PgWT2eJn9",
  "key1": "NYFdLgr2qs9CpjXFG4ZrUgkQvKsSkpiejYVtazDAaeZD7gik89KNk4RSLTxw9rs76cyvNoDHjTcmAxaVzQQjNh8",
  "key2": "6hHRZi42nSFyk5SBqau4EgFngPacHVLuy58PbGayRNuBaFeZmF2Abeksj7193SCheDvgzRzVAW3AB76hZgXBdM3",
  "key3": "4ErBmqXgugsT7acQpgTumZ8CPrKA12gfeXy4GuBBThCk56kQHixkZpXX95HbPZbf5a8B7TEn827mPCA8d6YxbpiE",
  "key4": "4cGVqW9k9yMjfykNSg96e6C1XDiMkSsLxSUHKkTYraQDL9dLZJg7rrjER7ZzBKWPiyNYXaupnoi9qGrqRZejcsXk",
  "key5": "34NEJt2DEN2NpL6TNhGVqkJ2sp3KadrYFp42hCHG4Zs1ucQuAj3QJsJ5EG82QSD9xSmZGpbR5DXcdsxYeM3CFf1f",
  "key6": "2HxQTmSeEjXBz5C8qC3JhfhW7pathaaiY2FM6G1EawBmjKudDxi5xNs8W1vCLZYfEbZoEGYuvHqFDUGwVHSgAt8t",
  "key7": "4LtCqcHGddn7dZJALmRVnzHxSQ4aaHa214YWwWmfAapexuTrm28JGFyUSKj4pDU8z4H3Y9jx3QvBxwAHu2xD1L7Y",
  "key8": "3V9Y7h8bYGwdtCSux6mirAwo1pPHJEKXUWAbWdbLXSjBs1AqGrGiMsHs5EUUMY2p1ufkmfg2jZaierjh4KPoroKK",
  "key9": "47SHWJSquG8LmPKrFkowyig9fnts4MJrdJDFC5WZpCWPGLN8QxzzJfuUN1QxJFbWsANyFMKNJ5fzgmWVDQHnZJDq",
  "key10": "5crUHfbhcnZHp8GA5ro8kkGvYMqg1q95L2EvyU1Jq5YT8Bo2JzQhj6Lkvto1A6RGyd4ia3RzgcxhVf6s3tP4NEiL",
  "key11": "3BojikrVRCECzBwdZ9iNosVLU8EmxahFGXwo5XMgH34ywNNewo9ht1j3GA9HLYNTGZbcBf42VePQqSX1p5Y1jPCt",
  "key12": "42XkiyyQmggvZ2mwNnW2rNvjAg3NyMysFRH58aU9t5h4gs9DsFQqHYyi2Kbxd2pr9nKHjU2y4dxys6v3EB7VqJSm",
  "key13": "4NZv3KXr69hHuadrmVfZR7tX58UeCmbHMbCZNxNnonZaVecTpC5qFNzZuufC65kRX7DSciXtauaJqeUnE6hFVeLg",
  "key14": "5o9pddysZGKnPKXXQRnGWWGYkzh3s2vr9v9petn84hpoJ4LjginUkDaHww7DP7fWwdmjGeiUCQJNjVkbuQCLhHeK",
  "key15": "QZoWrdgRAihSdWEZo6T2zm1Npb1xtVpnzju4UiSaFvbTPY7cBQfzF4Ji4UDNXf1zcmcoJaddwTuz9gWFGh61SsK",
  "key16": "384Zdks4RR5AYKeb1GZXK9PgmJ2jYcpZZA4FS9cPgqiPtavUJAN7Yy4p4i92KF1StcRqeyaFWtxYhZTR5kmwmYVk",
  "key17": "5Kuk9eBVDQhvrFucDGX1A6dHmAJynZyTZae5VAqCz5rxfWqu7BBV8MPrXsJDH1zvh1zR2b43U2q5P5fbacEs5L6F",
  "key18": "3dahYFp2obPvQDX3TesTWEP83dRdQggHz2PiqUoMyYde9vUuzo8vQFk4MenZx4LXpGSYUMVxFhk2fRcGFgkgYhpz",
  "key19": "2ipwQjP5rEEa3H638Qw83yMGcKVNtEQBU8SRQ49GyDsabRzTEv11N8oAMm639pnzriPW9e2dDsSkZmeDX2eNwpHv",
  "key20": "5FC8h5wNDauyWWybxpjvMn3fqv2BMw8pLXxeFnaZ2YDsxbNfGTrtLzUJcMxVkRYjG8CnykJwxJHcjja3k4DamRyj",
  "key21": "2KbtWDB4jQuXJzNgKNJWDcX3Kb46An8jqJLKEL1W7z1ZZ7LvbFBYk2qPztTHtMyDJvaxPJnNGKzmiLHVHREWj4CG",
  "key22": "5y1DxakrUasHb1wm1wQroM9r41U8PXbcvhSpEkLFFdgHcLvchLv7znvqYSLeomdHUTkS9dTadXVmMA1GX1AamWk6",
  "key23": "2R9x1ywHBJihcAXU1sipiUqqyYr8EKVA7SrVCAnWrW7zpZu7Mpkii3x7YEdKkwKsTxjwXMaqD3xofZFZhdZcHzbk",
  "key24": "3Npg2avevdZqE4kEn7royTk7qVsZmHTWwEKnXbW3utkznfcR1cRmnYQ9QBUMGkoEXgtMWeprJn6KFw8yDupLZU6",
  "key25": "47ionjeocVsdxA2FaqXa6QQhuBpEodrjAMqYXfgab9f4iiiwDTn8ntzWYhznegdg653wVFfNr9uFHC6uxCqZ9Pgp",
  "key26": "pzxZSp8kvgEPt2a73cKT9Uqh5VejEeKfu6GddurXpyTgo9Lrge7h94gUfBbYvSxqc8mMucGWgHy93Jf32S6urMY",
  "key27": "2jhV4n2S7Z45MtG5TzZidnJnAPn4qqdy3cUTz2bj1sEGjeQrUN2hhnL5p2wPYGMUvNdAhSfNHnYKvjHh8kJTKjL5",
  "key28": "wDEsRhWEfXEpYgaPShmeYMUPsZPtWctyubV8zhCmHVkvw29s9xcGhdhsbtpBEFjhUzcREHY6r7SbcSeSk82Wui7",
  "key29": "3d6AefeuPMyg2v5BeuZ98KQABmGaa7FX1Me9JFPAxA9jtsrd4vypjhvvbdRC786Ryyw46PikddyDKH4XuoVkccQS",
  "key30": "3EURqDvUSDHhgtooR55GGKkjytATigWkoRecc4jE9AWzTwC1EmNk8eZg66TAsm1pBQJMh8am2HhU2RAkHinBtqhY",
  "key31": "2QwS3ok81Xer4WaMsGBAw1Eacoamg9gGPPTnKhs8fZXsLYmDifL7HNwHkbQgCsVXpWdgth4h6uNGUrkG2wHJ3AUT",
  "key32": "2S3rv3KVyngc6npvqfr3uwpA4nBQnVBAKpgje8W19XnGzRjUhgPQQQqRfs4fuvdsLy2TcJKpiy2XDr2B5VNhLRm3",
  "key33": "CdGrP6YXPkTURhqa3WFSQBaeSDE45iMfQLLY9dneyaJSGYNNeZtxQ4UAAawr4Y4DamxA58pZav5Z7Uhk1KEMoRL",
  "key34": "4wirvdpmLm8UXspHs65Rs9x9VTB63N23kEJFDLQ1E9g4GqX9iLkx7rAYEo7h1CL7hpekRHGnytHuvTTyrUgYXEbi"
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
