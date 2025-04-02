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
    "5hW3LoTQMQxG6pe16rWApcYAnFFrdGYqx7jq7HF1aao577QV8kKsDGgfzTV6UB8cGW8142pMQ6hmkM6eWjjjqdZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mUMZ5PSoU6Xb5ZZivZZeZtUjb13ggVMy1o4CLNZ1xFughQGwMtFSySHTV2QUppgP6WYt6rP7UN3xSVFMjBrkfMg",
  "key1": "3Hki21wFo8STaFSJjUbbj8if5qQ77dieg11ewr2qr35v5ajrBJLGjSzs3yF6czhbCujSUavW3PLxBJVAW65UVfuP",
  "key2": "3eEwkEKLMX2q4J7NaYrLoGdsNnScr2zhb46GCAA5ehuYcCC5QA9DufEWE8khxTxftQPXgxSzGLk7qRhGBK2Vi4AE",
  "key3": "2YEXE5cCaW4FE8EhXWp2m5J7c7nVxhYoD3KNkeye44AuSeJHheNbTahFXoYPyboxcfbG1VYh97Y6VuuqTvrEdyKn",
  "key4": "c5jh6uSAZDRZbaiqa2vkSa6FkbNL4PAT5GyX1iik4hRU9zzE5DbHhBCKmFKJ6Lh2b9H4AMVZX78Yjs9JxaYCrQP",
  "key5": "7AA6dmgySjUgXbWkwkHxTTyHmMucpiLzybzzrQbPhykS1eBcnEYQ5U99dAVPndLLPrBDn2FhaGjzqCCXrftQYT1",
  "key6": "64XKDg8kECAjwwspvzgfFMUCsmBNd6UthFNTYusT7taf73ocHwJEdq8fBPcxStgnA27YMRbJ16DekLUPNBwpJnWJ",
  "key7": "21XpH7MDuWwoAMvPqyv6UhyUpsLCxaAKoeQxPwgLwm3NKX5wzrH9yEyFozn2XrVumh8d4sKvwH2bprTycFsP6SgZ",
  "key8": "5C3oT4Ea8bXCHT5tb4GHpANzx5B3ecbBzqSS2Nk63MdUKu5dUzuzVivG6SyfFR58ZUt57v8WdqRX4T1uJKUu1iPS",
  "key9": "2QV2svGNoNUkU12Po69YY5XJ3aKK8n4rQ9juCrK9aAztrYQubyWYwSP4RRNKoC2XRwdhDUwkMYFWVh1rxcY2T3V9",
  "key10": "66chMmSez5Eo5Kcn6Yirsw4GQ6UobUErhp3KqWqiczRQLsCTpPmmidWjoDLdU1VP6twMiEdSKaemUUNDfxyCLoS8",
  "key11": "3tztjibUETCkN6ecYBvHBwqNGwPgywtJsHoBrtPLhdxXzMHw4q9U8R2aswCXbd3CQiKiSy4Q1MDQPFfgyTzsVgWn",
  "key12": "29gK4AK6vaohd5sVEFszTC4uAfBv91ZamwqhwhUkMYtfsy8b9D5XCp967vHFrnQMENheY4RBCYWJdyHRswh8dSYX",
  "key13": "32FhkNX9CmFCyu4k9FSTe3CYTQnRGspDDwMWdHMhLiTqNr2uhygcsmG2DJBCwcPiGbuDw2D4S9bfNAHN1UvkmJCZ",
  "key14": "5QCYANstYe9SQmJnagz63o1mV9tzz47qCShracFogazwxuGTq4VnW9dGUgN38WWEwXFVT5w6Qe9FxoJVY467eY95",
  "key15": "3fYakxuTKhC5eG9hPGuVuzVcsZ2gGPy84gSxfymd7RNDfV86Einsbg9puwQZPbX895qnJWwciDkt2XifyLB4GYoj",
  "key16": "bXfxJ1d4CFpJYmeTFLKecu244mLM69KvUZ6KWT4bhAA8zx1ZRsG8AENpUpLyq4W4g2vicPfg67oW2axDLtBBBT4",
  "key17": "5EqSuS5SmYUgPbYgPmsgdMpAmZAFjutvnEFHAnPuiahqcsG2xXqFANpx4EkHiyaPKUejyXB8q9sP1svaMENVPmCF",
  "key18": "5V4hPy7HHGWbmBKnDfbqgJCSo6kq5wqLDwuXTEuxDtQqt5c4kALN5R1pTqrh8uhaespwgR9PXTVTkwnVWLSZDYWQ",
  "key19": "4Ex2Brffh5tyRC4SW1HPtGHPvmauqC7pqX4M2KCi4wHm7eLgStAivPZYie9TrAANJ4Kik2Lb7fqmMQXqKBVmEtto",
  "key20": "4khYPCdn2nfzw2AtT8gPFCd4CcRiWhPvHESnJMiPaLjtoxAYoMMnH1ujwKvagmVb8JDzxQyiNiVbDckG8dwLMToe",
  "key21": "3nmUbWAQEXXZPJr9AjotSX8S9Z2PNfmiCk13Rc4qqg1STGkXgXo23NjPcrvrdWKbWbzqH6vP3hztLn4Z8D2UpY2i",
  "key22": "v8bUSW523j2DYCy8Fik9EYpPLWYV82rD9fk9YFDu64anCB63MNbDSJiKfWFgTnGavAMB5pghX7L8fmuh3A1t3cL",
  "key23": "32jPZ53FmPYPyGEi1P2f39sxeeSimA2ZgVtZdohKN3q9KnbrRvBhiyRcgQcNEh69MyCA57TTK8qCaR7nScHBFmju",
  "key24": "29vU6oR4jBFSgoN5YEWXEmscxStaQonSKijcQspJswfRVwvB21WD6HAWpHRx7RhXtZBnm3bwDH9FAs4wRcdQRWSi",
  "key25": "2X6f2e7mXsxuMKezmwXzu8NqWH3NPU5eQWHZPcpDLTdo9pDaVtRPAhjSRoWbgfMcMmbN6HphLiCxRBGUVTTtPVwq",
  "key26": "3FCmazsGpawXYdxHCPm5jwmSoWYLgiguotCbdqSo1dDAtkgAjsM1fC4aH4XbS5ZLMpdbQtMNpGEKi9kaqG7mRBQ5",
  "key27": "2KCC5KSFHdAzHWKoVAyNpXLCPJ2E12a8JvqJGZk3KZ2fn77iT483UMvQBtJewVFKaCViQhJckQk3uFVyFJDBMRvW",
  "key28": "2YHuZnJSShNityYxN8oDmvKNXKVkAbESi6RjhS4J965mQkfZGVfzUmETv8iJkJrnc2ZhEucwhwiipQgNCGWKyEfb",
  "key29": "496AWZLbPb3MKBmDRo5TDFq2BXCy7YmcAyQg6wFtw8UGAxzqCW2iNd2ngYywPYpuKY7vJxJLG2vmPpqhUp2KLj9N"
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
