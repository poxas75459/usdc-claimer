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
    "3MjQmsw52ib3udqFJN3j2VSN1XqBUUw36K8BopKigmYX2okZF7GKCnqRfjKnhUMSWdF64Ru1AGKjvuxSpXDuLcf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49resMzMvtTrAYoBkHhYz7fCrMzgTjUcioXTKXj5284oyjGrt712guoebcZeaFQ7g5hdwxDy8iKAxYMWkZy8Zg8A",
  "key1": "FxzovcoqbSG6NLCCpyLWXY7gGBYAcFdL9Xgfg3c6xvWBJ1PQ9RcDKbGepPfym2A5Robg7X7RKA9kqRFfCcC7KZq",
  "key2": "2Rj72s93tKxduBdQ8zWQPGr73ZCxZt3775CpQQ6zmxtNhgWVjDQ6bJYvDUDcgVin3P7sPJCDefR7jxadsi5sa658",
  "key3": "3W7xe7XFQc9wUZBB3c1NKAFf7Wy8tTMSMZPESt3SS7cJRjk2DZTQcAAhBZEyt3CterQBZjddNypv8tgnGMJ7pThu",
  "key4": "29NZaw5DCU4y668AAUY3JR39UaP4bt3DhdxwKFR9XGxxe8XFQtAk9uazhuFM8x2e4spg45SCN1nu2i7kiVidk5uM",
  "key5": "4Y1G5QoLDRFaVyu6gC5yhdof3i8iizkUPFDqELYWESNV7tK6Wo7CJZos2g6A39ae9ZuzaxC72DsbUvVpvRKhBfMo",
  "key6": "3EaaW1uqrHSAmZW1BWYFwcS9NGPpKdCRy4vTDwmASjBKqDkaxsX3m24wivXhfjJasemLDbuKdzDYguTM9Nv6QcYa",
  "key7": "Rk2kpGzcM6ogzFfEvvfPBWpT98HNCDy3uxeXA7cf3wa6c6X6tY12GXY5jxKxTw6f1smLLHarHedtN3gvepjCJTe",
  "key8": "5MRN1VKLNy9te5hg2W4wsigGRU5VVfdYqQAZnXXfExrwTSkLXBD3ED3XrYBXTRxyGg5viTSpbTDGvJrxdT69jB2b",
  "key9": "yAe34bkabzfzc4vU2U52PD9Nitzto2SviPJK5YrCoa2LLVWpgRAG3zaxHmzGw7pEfmaDqjCZKVHMPwPbHd1CDqp",
  "key10": "2nENq2a8tg3wmMLBnMaCN7gaZCiuJQ3uapgFpCRqReB9Jz9LFeR6vqtYRqgg4NiNyvo7pKN8W4v8XSpq5Bh9o21B",
  "key11": "Qebvj1EEPSp1qRXJzny3vzMeTYrzkV422nVT3VS8eJ61CAqVkmNFZcjqBQeqG4Ds8LJX29eBv7aisLapmCUY7Mn",
  "key12": "3FZHcfgXguKXSRJ5DtwRs1HvptTvyyiZLpN4v7ws7qA4sc4Hh1M8Jvz3EQLY13jU4dirqFecUdsUjpF8ko7J2LRP",
  "key13": "zaLRjdFGS4mbS5xD3jeeRKY8cTKVPsvFhR67Ue4MVUEthbPW2ThD9Tcj9WCcyGT7Lwz4KoeDdPWytTxRkBesf6n",
  "key14": "2DPzgb8g5GPfbSj8St4Ejwkn7TgjteohQXtyTf4BJHDyphhH24aUdG5kBWBQDSPadpzCZoW4yz4wvYVxg7PSrVTP",
  "key15": "2pUunnHHwJkiUokvXxCqEFhL4wQexrqK6B1vkBAm4j7seLKDxToy9QSx1ic7fjfySFiMnaD78jYghTYq7RVsoiSe",
  "key16": "3tvirWmrvwUHR3sfmBTdMoD6i4QbwKBfq1Qa1dYkRDvHrMfFmewBeCnzX2nBnvvynWPUNJWKBJmfDRN9G55AgZot",
  "key17": "4Mv5ZdL3ZLWRq7yEC2DPb1hk3TQdKkoHCDizbjsWkNbFA3RbVQwb2KGgRHY57kXmCZe7nJJumWC1HNUCxnwaZzFQ",
  "key18": "3MKBJzuCNnMVcYKRdCN3tBJJtxCDLYgxGHdT2G2JKUd5snEVRcYLASpF1MvX6uUDcWmbajtVcHxn2PkYntkEheAm",
  "key19": "5mmvnjnVVSpxeVq88F7RRtsoDKfbR5im7mL3CJvhtzhnbc6pUAjHWdnMYVBvKUwzfkhmKhQabscC5hA4wkvqmGQ1",
  "key20": "2SgnmPq7AMxZJfSmutopH1ctkQuaHSaC5FBQjtixDGfHqwcbsK6EZsXpcs9XaFdnCDQzizhow3A3dnU3RTx13eED",
  "key21": "2F7j1Bb9h16FK6Kskb7xPUWFpKPcVEKYr3Bjt8caHqRcRd6bysMErbJ9J3kWcTiDE9j5gRwBjA9xmLRyo1b4y4Jf",
  "key22": "3nXVtBfzkpLsmQHozsPX6wgN84tTaJVKg4JsSFL9XCJkQq1GHHJALoBDpFAmLCrNLEZs9dJcTMkPtuceb9wZTFDA",
  "key23": "5GbZtYzsGityveifx9vUD2FLB4MjqWVgXMyYCvSmZKVnwtYiLw9XfdB6hGS5ZWqVWFyQsP35z3EdAULp3Aj23LHh",
  "key24": "256pCsY2BTY2TXEWxUJmXKRMkPqJMteftdp6tEtgqQvTt9gP5rRkfuHLPbJQBguJ78wWLzqivjc6SmGBcTHTWDsP",
  "key25": "4dx3CVPUBP4VEHpAWUtX9gyQ3is9a2LNLmgT9t946kot1vHiyXN4EWZ7FYVvMU8E8Qeo7Wx74S6hRSUoppA4xgJ5",
  "key26": "5a2qiKDKMfLU3ZYxxT9pjvoCLxXaBprK1sTG7TWrWWV4pHGJEaAnBzoYk2vRvveGbwWSR1pszfbqh6YM9aG7guXR"
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
