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
    "3YSSPyxvcX3oY1Ph1gNj6o3xgnWvbuJsKBiYbLqmrQ1YFdNqnrTRvWAgrgHsLhJrM8DWKxPHq7WWTsDL6gNGw3XK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hcr5xPbvSsyRBwXFHV76DGh4up26wJwTgXw6nmShKtzwoJYBfMp387JXbYqb6prUHaxR2sxTX1pt4HnH1aDXLHr",
  "key1": "w1RRQep5aM4nQFV9iM1rDwhAKeEPiQiRJrZJdXKsrDZfChwUttAamZB2nDcxGJBruvG8BWDsjMf8ffh2ejNNec1",
  "key2": "4Bc4XUaaQ3TxJ2k4p53tc3Q6RRJjGmJA8aEEaLyWYPUEBdtvuqGtf6axMiSbZNnHPPSkhnFMAvdKUpN5K67V7mRJ",
  "key3": "5dW8WJW3yqBsZ4X2iGHW7KCuRNjpHfDbF7AmU1cgtC4zy9hdh1qvLQPK8VW2sQxcUekFFGBt4rxAZSd8AeZCBgLk",
  "key4": "23Mdav9GqNjySevsupxG5Q4Ma5bymVZyCEWNX2ctXoxWBLyUtRJWC6QkrdaFezWAfF1UcU9b1UHWt2m4V8yoBaqc",
  "key5": "5ZEARubPrHGAT3KjxE9TD7nJZCJbGYuPbXiG2ovWPnV5XntuJJWKjC4sgSUehqj4SYDetfy7fAXd9mbBA375XWSd",
  "key6": "XGGdvBPis3ETYkBH7F5x6EXgAVxX8vy4RmccUL4L2NPUk1wUMHdedbMiFkvQipQu2kMRmpukPvfotx5pmjaVfBk",
  "key7": "3uJBkkb3j6EChD3a737x8wAxthb7pb6s75oGG9JunRp4GT1gSuf8MT9r5HWHACUhabk8VH4UzaZiMJoPD6CKGktv",
  "key8": "5y6PKjmJRrr8xkwiYq96zEFDnEQHJ739MCQHjTxGe8HGnddrn8gCwGdApgk1YdDf4xZ1xvqojt7RYa3FDbBBX1eZ",
  "key9": "3ZvyJmHd1ZoBRC3Bg1BytBUBr6UR5wKWvjAe5gzeyS9Yx4fmhuZVbaKF8Jw3UhyXpkmEdQoRQvS49f6RV2i4wtin",
  "key10": "5SGqF1LBD4MGGnFDDQSnYGNs5kghi62xavzgw2QeuJG7HFGb9V9T6scpHMCaDpvJKhSs2v1NmLEfJ47NGpr65f6",
  "key11": "5CaxQgfY6aUyJ6vUBaaPcqNXXjLfKqUmBbEr7PLr7sin1wKWx6tFdrRAZCZWUoYcenpV6CnnspyVcnqXFCwpqcG9",
  "key12": "2ifcr4SoAUAQ8R9wwnaUtAoeqYY49ZWMgZPxBHyGsUn3VU1BptCZytJpSDxBQPzyKzYAx9YUkHTtvTThTpETBaWv",
  "key13": "4ip9EAHuDmhCQPqMxvjXJEMSAYKAC4JGjrrP9NCs3CoPQgTaHdaemgWpSoxrBuZdVLqbniYm3kLTnV4ntmA6pUbp",
  "key14": "5tzbPu9XZmv2Pyoy5DpduXMVJYpqZKwoU5CqUd3scT5Et2r8uWbtv4Sc3atDNwrvBHrPL9NaN9iDbDFaLLCxNqXi",
  "key15": "2nEmuxh1fmAipm4ZVJQeXXrrxiPfJBjAL4yTAuA5cDYy7XcDqzUTPDb8xhksR9pZjGES4BvdFUv4Sjv2rKgQvFVd",
  "key16": "fUD2a21ZQkGxfY3BFChvU5uqbEAELvFPhKB2F1A4PqxER65ZYwBKMkd79pjvuMr7His9UWzLy9urkeuDzpjUwR6",
  "key17": "4f6MAq9p9aRf24tj4TQpaEZbFxv2hujxmPX6hDZs3eTLeaeCvmgaRwQtCh3B5Wx1JVdXfwdLNpumeJbqURnnfsQo",
  "key18": "4qSxYKxGYvc4Pv2VXpCFyjM1af4G7ncDrVfEWeL4gAjZgnKLUqqS2iRsSU7qdGkbKnKrCZ4JhaSoWAtJkEuA8dJi",
  "key19": "52eko9pZooaDFtmDVohKCd3ru2ozhmyS5H9w7TviVMVnc66FwqKDQJwaiWXZpgkUxjSbUTuJKCFKLHr5kQHDUo92",
  "key20": "4osYz3YBEj5Sn3P93RVa5Q6cBB1CNUSAoRr4RSoBEQJMsG8UQNz5bxdUxjomXpAozBGZuaiWKP5CLx9SSbkFuaLq",
  "key21": "5rM75A2269PczWWphX6ujCQ7S6Ng6nMPSFphZiu1QAACh4eNyWvQKMbytdZMoofeq9LBmiW19Edx2nqUmsu9WxJt",
  "key22": "4X1XLu6UJQnSut6MrAPUjPArcdmM5DLpdDsoLZ6HGhpNxcL725nxfpzdBadYKb1oxbSsYf5E11Ucn4Fjy4AW7RvK",
  "key23": "3XMxG7EyfXWpbtrG73QYBPmNmbSR2no7NBRiZu3b5PSuFnMbw13PQ9GynxQExVte5UZ1GyopRsgQEY8kFXEAueqV",
  "key24": "5hzHsYGsgNphcM5YMV6C5PLBrKMfcKJbJ8kTLU7LVB53djVXzaUxEnETvLny92pz3YcJF2Tkxa8AThgwpmSw78a3",
  "key25": "36WndBfqqrbkJGwBHzbsHW49NWazPM8ihhHyN7ooEkTPzfKVBaMdeTKBjbdgYbSiAmQWMo3f79zu3ovfKWKwbpEZ",
  "key26": "eFVvMmCw3WmUsLefMRuSJvqX3x4SVnWbCUJSU62tGByhLdnUSmCeRmTCAsMT7SvP51a591ea8MZTjf8nuqGhSQG",
  "key27": "28ZuthhnAAG5Neno6WVS9HBaFy7cMbGTgSSzYQ3Wpo6spVa82Mz8FnxuBNe9KvXcyQSxcjXrEWTWZaAhtyY5TCzo",
  "key28": "35xbXBRSWFbtfKJPge6jPKFRpdSJs238ie9QzebDfEFEhD6zJo7FVf6aCP3xzZAs5aPviSiDe8ZphurYScpuMuHJ"
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
