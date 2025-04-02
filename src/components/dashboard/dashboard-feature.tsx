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
    "2xrfVf3rPex7ySwtgJdJsfa8ZVPWjASjeixTd7wJPoFxDSeHNubbhqZpeJxYGB1TemPmTmP3mDaso2AbC1KvMHKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4duUpNqHvj1fY1KmecQppTeNkeQpjjxxgEW6Ny1sJtS2aNu35V1L9zewWWdaTCLywTLRDM8KDX2tqjB7fjK3Ct81",
  "key1": "56ndVVZBVzSrDF1Lx58yczVpW1UREFcn2B1vMPErxWv6HJsHdxoMiCCvLwP1sTPSAeUZoYJZ1ct3vKYAj1XqBjWj",
  "key2": "4c59e6C7H29qtsXWTTr77ucrPESmoWymwJsGXtEWyiVQgEcNniPictJ3CQ4hjjZUDdFqGUxLWjY7ChiYcrNTH4Fd",
  "key3": "4N2Zb5VnAB5iTEvUPt1Ex7WuBDmTSzzwGKyBT9BHzXKRgoc5Htpo8YLX77FnEYXcJsL5M7HwD1n6Ni82GNpx67kP",
  "key4": "581khsmCSBw8cP1ej4RaeoPzvAVKjT6LwB3gjkYYVsUmt4syKEsRKnfZkS462PCx5n5rw6CtxccX29LPnoS4Ze3X",
  "key5": "2qbiwZSWSmABAQmyBpcUKmeqJ5kemakYaAyMEZPDwVq14Hxf9nXwSALLJZkZWbwh1GrWrVHq3E6K55gX4CqTKQkM",
  "key6": "4dfntNFdzzaWgKusQU5itN6ikLc4H48tGA8uMebtbycDyRctXSozDW4Gk52m6yzDTXJU2QQB7rmYJXBCC6xRTEWd",
  "key7": "4Qr3Mt5S2MmUhQnN2HhJiJRts785woQtepchR1xUBeinZwrYDEfkKfwAuHUBdM6wNr683RaaVxh8HNiotuzeDsve",
  "key8": "5Du9MQWgDxmxJgK5frZFrMoErZth58EJYVjFRQZfD3fPzghe7Eo9uKrEq4fTwEtLAqvzfBagjdWMvX8kX7Ho5V65",
  "key9": "2U9EWVvguYJZNUca7kgE8Mcv3qKfbE8A78acd6WT5mjhhd9FjMEmTGihE4N784PuxpbNvzGDEcv8g5WbdVJzoFjp",
  "key10": "uqUDKDe9QftQzfGbKqHrRQdVT2KECWgqLc8DiTezorPVngmLoN5X6qQkxPrzTUZGvGT7enuMvaneXR113b1A8ex",
  "key11": "5xPfpA9FfCNir6bnhjZpNGYNGPaFjPkkdKH6fSeu13rcqbkU4EmnbK1rGhMdB2j4xvMUyiBFeL9rUyRXPhK4pqNt",
  "key12": "541iHUGUHfEjXKGwnWwB987V1z834EZL4AhTVyxmWBQGR7TPQUvnM2XyB38QSTa5AWFhfvrg7YaQAhdsTLchs58u",
  "key13": "3ZYWdeZaHL71XC39zLXVP6oRM6VufTuZd5BHAueQCFD3Mt8CeLTSk2HPM2A5utcNFWbguhXyorZRHQEyx9hj9TkL",
  "key14": "2DGQuP8f2w2uw1XwwRQ8DBMvB9HgC47SkjiMboeqUp4WvVnGsKK5GhdEkTUvzH4Qp5QonvHPritxB51jUv6DkkBK",
  "key15": "53445w1TRQsgVSSG9EzwBk4SL2mC84TK2sFtL59CPMkWrLk7VzyjaLaZU45hBPjo21Jq8ZdRxFqBW9ynGz8zjzuE",
  "key16": "2ZYscQdWwKEhuXBQRokpiHEXa4e8HcgjJKQYLj84nj8J43STV7MG6v15wwoGtEUw8ruemuBsSaRjrdgYRJzbUUeV",
  "key17": "2VosFdZdL9yfk1BffqzA9U2bXLUqn9LcKZncUDtGWBM4ZkirsJqYDhQX6WE8p9RR3jRwTXtoPDQhquexvB7wsMPy",
  "key18": "PCVxb7JSd6P6zsumVeW7Pvz81JaArFrUx31ToXEZLvX7tCw3VUPf53QXJRipLB1TA8cyaJAZTg8SC24iuFeGp5w",
  "key19": "2SkFX1LWptFycCrcK3vaqzeKXtr5NfmmPhrsWLoKcXXFrEfeFpLr6aBzWjMW4M9hBphKoGQedyLrGZ7d86fv6KH7",
  "key20": "4b1mWt6d8jEUAF51TNrhsAJDue7Sje3HouCApvoR6Fus9UKgggfdSitWdKBd8GLkmTj6RWAwTSTfL3HQaeS13wMt",
  "key21": "Ke2NEn3WZyB9jKtC2DnYMhHFiA8YSqgdxtNwtEcDJqqGak3L6QPf67oiVAFsCsY8VmJ3YwTkFwdym5PTfzWrLj8",
  "key22": "3GaaqnLuvwYFk9DyxDMjEazK59sBMefSrcgNjLStmh2wTq4MX4zb4mH8hZPB8Hfgzt3krVLpSpP6Kbpradm6vp5P",
  "key23": "5rSWkGBt1ph77emnoGSznr9bNsJdHdeoALk6ULovYYbA8nK8JdN7kkSrDfbVoAa5eymjaKi45u5G5AAAZs3vfNz5",
  "key24": "4W2qjuyEB2VuaXw5YnRxhKc1pEKJs3u8SBechifCdQPoiR2xLQNzu99jDJpVQmSpWoXJZ3FZymy9FbTmNDRY72oT",
  "key25": "4DpvyG4EW2JSWygmnfagVAAb2wLngQar1KinLWqUWXKvyNvbGiK371mB2icEz95cQX6pK2gt5xjhrJZEPSAAZVTU"
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
