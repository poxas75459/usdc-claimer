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
    "4LDxsPNa4jaERh5wHRmdc6HbShuppdPgVcdBmUL9pnTDx52iycvhdX2MSZgEWunMThpvZ6enZc1rysKkqjXs28jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8488nHMF3WVFKQq3kcoz1VQmjfxRG3py4pVzZ7cMksAnsBW9bqvBtNwRHX5SBMcjUSo5xGXzADCDycPD5aLoL8",
  "key1": "r4cp6C2Q9bfhBppeStsgaTmMg6NR6Xkwi9wFgdzS1QukdfzzNczJ2hKwYBkBo52uBXJXwrFR42Dg5MQoTtytfoS",
  "key2": "5TTTibUMyp1yF51jmB5tJp67ECqQej9HWNQwCxffTUrCG8eF8HdWjG8As19D8BQAcwxfgWTDDtDSaSyu7G36yvti",
  "key3": "4JAyK269g5WZSwYKhCSpVeph45429GKXxUiVw7d7Zx83TMQGaP7CoJZjtumFTMg9yjXcN5rkCpeF5r7bnrfEQkki",
  "key4": "54wwoxkmUavZsswi953pP6jphEd5ShPdrKBMNQmnpyij18ZPbY8nLkKKbrBdvH7CruNAfn6YVAJMFXipM9nEiURo",
  "key5": "4HhAk5qTDkuvHxVRmXVAnrCQqn18nz9gXXsz9NHYxSd9pVraWps3CjQ4WUhL8H4SbhGAYPC2t8YTSntKYNPwc5nJ",
  "key6": "4S6jA8mxcnJ6BdoiMFuSh6Nx6LGA1Lf5x15U98hXvWp9VtJBRZGk5HttM1HeACv8QYjTtWr82r11StMYNke5jteS",
  "key7": "qhXEDYvvUNYdzbSTQzeXzinvbDufMLAdzCqGyc56VKG94mWF9HmXfHY5HRYTzWDoUWPuBmswGT1bRjLFMXB2zDA",
  "key8": "5hnrWVg1cKKDwcZzpUE94rwad1rKTxxXZKrts2uRvHVAF8z8RZQvjFnH6ErjNBegzdLUM4LWornY7mVoSAf8pavk",
  "key9": "5vLKMH1grra4e22aucELWWjXggb8GaLgjCYVJvnHDsujXPYxtJXKiZRyCSLX3AocmELyui5A3okTdZrpCpEG13hd",
  "key10": "fnG99i4qHCYMM8zEA85XJmmb55u9EDBitKoa6rLaeFbTLoHo4nS8rKWNoynVtSjgC17PKg1rwUukNkHY17G7raG",
  "key11": "4iZTUB8Ck2cSGzWsf6w4HKnCPLJ6RoSqJH4pj6zBXRmQTJhNLVwpJSxAXnpjfJRvUTDps2kdvEX3naW1wXdKfwbh",
  "key12": "5gkiSaEEKiB5KWb6HkwL7ijh899fvKJfFRPotQwQAbvwPNwk2sJhYCngg1kxsFBWbHmq5jZXm9qBEW99qafddpn1",
  "key13": "pDQfycNJBYYrdZhiZv14MBooEpid5BvhGgeZkb6rtBjY97wcZTeLDsqd37maWdCk7J5YNYyrVDp57sbrEk143zF",
  "key14": "5WUSQGmU3jjewKx5i1yvFmXPsWmev7TMajTMW7ewTpUNMSSwFa9TtN4H9LoizJRvQmG6Ch51ktrNMtHWcjS8Ypst",
  "key15": "3NhUM6LAw5bVJk38u3Kq64HVUg7cDPr8MD478dcj51dHUYa1MD4p9bRk2XkPx9NvPdAdiJFGSaPUSvzCt6xqA46H",
  "key16": "sv3J71YFRzZtQrwmwH3miyNGxrj4QTqAd16rTtR15uQ6GiicFK8pBTRBLXvdUFcruws8T1VPi63uA29CJGAKZ13",
  "key17": "3RT9wrZ8etxQSipgJ4rCVt4yev8tNxHfWm17T8YYv5z1TLAFAZVZErdJUmkinMqN1XAGmxk8dQpoSRsBJzZRkzcW",
  "key18": "FZzcMcgvd8nv2Mq2RPvtEZVRk4ktniyhrweBDXGXpALt6EcmNMwexbaRpeFk8uKLcVNixuv6KKVuuT9WvK6Ar8s",
  "key19": "58tMV6Xg7Z8cHtf1xgm3qop3vUo1ASWSgNMFwTGxjoFU7DJLxT59XGW473722HCmbdPGWGrtm6cmuudGcmtQ2AwC",
  "key20": "3qJrdWsy39RQPj3jkUmFyBFWZJK9R6sWF3B8wtb28651FaDYkPE7pTfYbDe29oVchMjZqiKLkB2jHCdPLNPMnGgy",
  "key21": "2J9FCU7XsmkQDpugfPmC9oCzgYYPLpjiMteXzzmBc9VVyas56xSwwFQEULCyVS19qx8tbyhRi5ieoVCwbwxp7BH1",
  "key22": "j5xEPLuTbzmUnPowBUboxwu1FNxwR6LDNsukw24yVQCLsbk4gtL3Wk5cUwvBwNxwSD62QumD7SrGQsGgJTQwUka",
  "key23": "5FnFA1SaKvdJkmULjFwiwU2CZTkmaTtqZG2DTz7P95U7zoUUfcPWrTu5cncqAzxGDDPDiuYUJPzBxPouy5T8rX2K",
  "key24": "5BanYCykEmxEL9y74GqBX1vzqW6oGv4YfFCuJDYJXjogAijCyCM4PjtrkR8EfhEb2kh4NtpSs3KStH9YhDcst5Wu",
  "key25": "3t1aNKoDkVVLjeyWeQxBKqhH2StgKjSoas95gvFpqdPKhbuFoZFYiSVfCPNDGQGdfrN9e8q9iTu3YPAAaSNqjCB8",
  "key26": "3DR8izv4Cju9orvqptVFKNmEpp96o8Lva33cyZCQsTHgSu6uMMay3eXrrDo3hMEbxbKC1dkPFj1hyLN6TSz5c6ZW",
  "key27": "FH3sdCbQqF6ThmXmxCQW4eqTQN2eAHPTRiS2YRyzhcozYAb8G4MVYGLPSimtjjjmS1QZ7eU8qCN2WToQo5ytRjs",
  "key28": "4agfzX9puLv1SncnuDsXJCS3Lw1VQ9osVjZgYF4xRhHBfipKDVdwY6wjacjjU1qcMLaV7X8nb1N9c1vJQpd7ZWxa",
  "key29": "4EDS81Ki4r2i18SukP5x86zieJmgSLKc77Vh4P9R6JnR9hvYL3VzZVTNyan95c5dQF5qofJMzNDzUmkJm9mDu4Di"
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
