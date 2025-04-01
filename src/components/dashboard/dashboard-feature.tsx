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
    "46rWtQzbqdYR1dKGx357uC13bWJnHuqsSr56mBMipGYEzWJWjUCezhNcrTxbXxELpjPJ4h1UQsty4esbfAiKkv1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qSULvtwR2ZmsZTXhHMEu4oTP7RB3q6oUw8DxJiaGS4XUNi4gzgFQbeBbLPzUUd8ADYnvrBwEQQVoCZvsv935DNK",
  "key1": "5iAWAHvyTkw7Z6rwQXxzmKMCzcngmJhA1itpbfELKRHqeNZDZseKYcsYfvZULwknCdfpGM57VhJE8zwpny6x5CTo",
  "key2": "7b6hmzXU4xxfKBEwMtT8mwRmUFFLUtxuZKZVQVvDfqCprCvEJYzj5Qm7AevQpTThXQG25XbDGwpkp6j4cUwa44x",
  "key3": "4sCa7SN6XhqttA4PTvVporZfyUo5dyJAqq6KeSTXYbt8kBXyAkUP3tMWdbJcBHA1m5fgK3otUwWDH4AcSdJajdgW",
  "key4": "5j9Zh4TsmyjJMtFYVkUjQz4P5vDT3Kwoadb81WzomxYijWXK4CSfcU7dsYdN8vgre9GcrRGCqqc4Z4PwohNPZ8GK",
  "key5": "46BefkiXxMVnt6hVa4KcvGRKaRHnJFS61Dzm8HBcFkeCaKckYnUBzx93fS7PjCmDafHQZJXtK9AfYjahb15iDfLm",
  "key6": "dqP146c1LAF8H3PqfCbEEZuYvpZr8hEnRYnnu2Z8ZzBhqvsxnmXTxZ9ewsESULYK5QQfn3pH6JpczfQx7CaVPrR",
  "key7": "2VZAzyx8h3wkCiXRYgsa8kYLMHchHSbH1i699hHBNaQGxtc8rUscBjUmMHk6mNrUGAReRR1DUnycuCmX2ShjdzRn",
  "key8": "36TKyjqvJmH6LJHjwMNhMiQU39Rw2PjrZbS4qH3C7FT5qrpExTpwFFQnD3xkxZTsFk7AUR4jBvrTTAghyMr6z7eE",
  "key9": "2mHwEsb36DGWpMPtRq1Qe5tYgGWegj5xMrxkGwY53zUhP5HL1v8YRyJ3r9HrCBZ3EorFABNnxfkrJbNJHNzMoKSe",
  "key10": "5qB6Yy9z5Z7JsyNkeSGj6poQToFvs1vCZZF6JXmfKNDDoTPxiFZYubmMjToTwzMwSQt2cJYFDov7Kv2FQGDNasgi",
  "key11": "3MLoH6THovnTAH7p3UtEeHuo1hrhpyduZWWYobNTh4kcufwxadTjW8ESSuzyXvgFuafsUZbATnVahvF1H7qynvS",
  "key12": "5P8Cyv6vNCrt4LBguS1RVt153LBeJhrct7nF4jgwcFmTwSUzE8ede6Us3uWJ9JZLxGUwMuVHr8qiZiCqVCbVw8xC",
  "key13": "4GmQ7qewAnnodHoNRnVHFRGiwpZKt1JJafXj39fSy4K8nvBjMAmkbWXSnwJbUhtDSt1y1maHmFWybsYBfK9zzFRB",
  "key14": "2b34PdrpHNvFBAHQpGNZBTJewiJXFwpW2NXemuT1iN1w48Q5f7D2mWAUJcd1Z98L8sZoSLxFc7GdJjzrHZwj1crV",
  "key15": "2U4UX9XgwRWAcY472bwy6n2t3UB1apFCwPzsc5NbNnxQwrhUvJaLcFCzwpeSmT9b229CNLBV57pBnrbVw4YZBhju",
  "key16": "4eafniefhPvKaaQm4ecbkzGA4hkHRtPig7VDXBW4ZmvvnRRir1R33fwCW6aU7zbVdAc7TVup9FNum5UREjs5RxXh",
  "key17": "4dtzgME2wUogZ7Fjyf3hJ17BsXvuVNUmLd4F21MrKKkthxNRddYeU9gjoeeyZGa25qc4KBvGymdrTS8MVXbkPE4i",
  "key18": "2DroPkw6ujSv6SjLapDMsYzgf1cYDzi4sv44S6Hv8Y5yktdrcPzbY66LFAJfJsBaYe2ZdrKUgV7kSBMRjK9aNDMr",
  "key19": "5buBTVtfULqWSDXT49HnvbrJ5JKTJybzsvZmcb1ASe4JkB2z6VDEDVt1BeLoVrfC74CxUhKN8UgoNVQGHgAB2CBL",
  "key20": "3DDiotKxitxmQ558GC4gtCV37hU6CiHFLdqLtWYzkXqjhbiEoToxAAsdYme811pPZQ9LjZJAfA9orH9w1EeepP8T",
  "key21": "sJTSpKSLgQhJkWejtnQ3UBMS3pH2aUTRj3tSzHNem9mPWgyekmq45ReK43PagVwtABPtxxuQcNUoBdpAvhcfAYC",
  "key22": "3zKoUM95PSo7FjRKVuk927SDcLo3oK1gfv8no33EfeB4G8zhzSqSQtJ8Peqgk9Ddt3sBqxAoE7gr2tUrNiJg5WxE",
  "key23": "5LS4pLYLJHm9YU6xTuwq39QjHEhEBwbfA2ufmEZfqnRLDXsRxcZKpv9aoi9Fp6X2gMqZa4hVMeWNssNVm1bnZFZA",
  "key24": "tWXn5jTGxaCCTRhEzzqWECQ9o961r4Qdi1sbEtFVuyqTqLPNuPwQeFRERkJnJA3yRTY9h7nei57w4pyBRsUSpy7"
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
