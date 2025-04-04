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
    "64MersWKc2aX1cPt2tbgMLwzhoCZTtQmfdPpaxW8bNfmGmMTBjHmsrM81tcWkqFbRry2geRNMNw3MtUWYgqjMsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T7dRBn9aE3VqCYwj94sUVnjrssNL9DKXBLLNRonNjWUJrpdeRRAbg1dmZHXjgDPXxwcYFGLobWLZYJmwAjB8MeP",
  "key1": "HFZqn5WJg4AuhbMRpALEykZsCe5crfrcQG3ihWxWCnzKudPnxguCigUx2aRzntAE2kfynAa1awAwTU51FmE5J9D",
  "key2": "4B1ChtUKDAvwmLaZKmH6PfXcMq4PKtoUibVTZahP75CAB5sHqRff6ssTT7otvi2r99oQBt783Uc5xA18bkhNzfu9",
  "key3": "T2qLcfpCTybn4LZ4NjX1zgJyAVYXes8DpeQi6AStir31QJVEc3iM4vX5mN7yHvbiw7Sqq9H8F7WXrtmdwXkb1hM",
  "key4": "a2wahMWgg2bdUiQWuZBA42Nr2rjQ7fbygfannWjjYrmWqr7Uk73wkZSNJk24ZneVrR5bb7DMySempxoswo7Bfkg",
  "key5": "3bcSMXZZ6mxMJAGdQBFcE7NJaonHxJKfQPKGfK9M36fY3GZfnZtqa1ch41d9wUgjQGtfPuqxwYtMRrsumSgx4XuU",
  "key6": "5kjrxBwBkjDyeFrnrRV2humEiY9hmqkr9SFfUGizAF5y84ScvvoghRwM5XmSt9oHPABCrJnSKxJggtNPyNorpPCa",
  "key7": "61QsE6jbAtbSfYoQ1xMQZHUuef4153fc6pSrDB9XvkwHcZLwJPMrXxb7C8dJou5dXqnKZeSsJpwTrTrTaifbSQPF",
  "key8": "5WncyLcMnUghWVveTyxkNZpZTveTunJ3tuyumS824pbKM2zLy5oxhcSP12fbMZ4MDNN1tYTWjjPa4mCgqhAr1JwS",
  "key9": "2PCx6NByfTMNifRi1MKd78vqqufhKhQGpTo5cTsw6BixXvvcfZ3hbKU72m2nYLwm3VQroWXJPzu6CSTKqEDT4P4n",
  "key10": "2qbEWiEJbTWRMVS81vGMnDStTwK2tdAdev8EEjuXVUPXv62hUJJ563muM5dC4fAhWGbMFF91DVDVeuaAR16umFSP",
  "key11": "4riLYQVJAi6Z9JZAbbxujJNQWHiGVtJxNb1Pu5ZhadWGMq4JGdK4x62Xy6e6GtPMUhhSVXtLoAvSSQd1hxgT9TH1",
  "key12": "4Qwts8b9wFjMwuKvbuEwFNiGtoNUtEedcnvwowxrsiHWqTgusHfagGkWhm2TCipUyNppA9feUwqcXHH32xLS8CK9",
  "key13": "4LfpjGp7Hor6VSNToNHaTwhUNqNUqGTFPCJVF7ttJ9nCcNFf4PZK28UBVi4ETF143hrAYcLUmgqQ9PYD57CknEsd",
  "key14": "3Cmr7swkJMVhtZaHVmUwsBwJixx7gwBDXS5Pv6We8xtd8kogCqTskTBnR4YM9VF9Vqio7MWD9fBTXSrQB1vJgdBu",
  "key15": "2mYBpE2nBGGguGr4krYg9SdsK8Axb6uvm16HzudwawgTDFNN8UKLJGEJzrWF2y9T5WR6SZubEut1mFw4izunVyPn",
  "key16": "3VYHSoNvLb4iazXA5CgmathH51vWpExknrEczGFL6DQYSGkT2at9Dai17KPbkBzbkR7trLesa4Qk1vfc6qAepdgT",
  "key17": "28jhsp42nKNa82boSsQiqNmbMnpLXyVt5vA6zeHf9cUXmkWuALGucdYxqDV82zWwuFzFDPCqYp696bdcgNT4hJbq",
  "key18": "KtxfdQSniEH331kuHyWgbBCafsUWPqJXw9MGUwwTX2NVKH7XXx1bSagVzg1PZinYrtMFvmdYtysW7hPbJquzPZF",
  "key19": "5V6KrzdXXTMS7zz5yDjGmS1UHTWSvt91zu4oDoR5SLDRUu33rkysbUg4EKAFreuY9YqcVqhJ4b2yBpjvEfjzBWmZ",
  "key20": "5MtZgRRoEiqgS8agfuGKGP8kTjWUV2MFZfEaLda8WdomkCbkQNc2cpnFWPP5Qr3eh7UYbZUEu5r53TRhDbdrmnfB",
  "key21": "3Q2QQAu7oQcbZoM9FRYBM29byZuj7cG2cY2TT7urKcPri2yEQ9pHoynzRmDsJX1jjs2TJaixGjFyrskTJRnd37pM",
  "key22": "vn4Et43J8Psq1NHXrQc36Wbh4YLTiwghfEnsPFYuJfYjwnk2JyvBjVU1VtEF1QLMQGHRkvAC1BxsZkECoti66CP",
  "key23": "4d9yWwiuxay6Eq4ijAabKeihEuQDsZohoHDwRrFaRgmCM5xAS3pPqkX3SyvVzUpoLGznLGDTwpZi5D4aT5jKKuxV",
  "key24": "sdEAmnYpCtoENGrDv64koJWk84e9n2TgUW8Q2MqgLCCH5Ds7ABwW5d6V9L5upAD7r3Xwq5sHMXZvB5iuceUowaK",
  "key25": "3voXhJKdniAE64yvXDpK1sumgFumRmvTjcRmKVhjqxwpovjWWVs3kQrkctwkhg2emR4NpatyuWqbmTA86jy3v7VL",
  "key26": "RDirCkSpEJkf67Qfjfg4TooLmWGDC7MjZqs3WtFAPxwSbk3fikp9jb8c47V8RR1jSLEzF8VUa93AeVcbj3Nbo1z",
  "key27": "6pzpfYmYKMSaCPZSAEPJQHXB78MzRzEQ58FWuaUh9zZJ9pjTc1T4shiToneYAa2dGcAybX5V4jL2pi82Vmr49zk",
  "key28": "8mTxsBRAhxbkY9WKo1FjmZJYxEFrZJ8zzDmBrp7zJWMh1QyTubqrMHuUeUWA3ZA5xs7Bmp7pFGg4qk2Ks2j8woh",
  "key29": "4texcHyuUqTCVQgYRKLHAEnfipC2UC55Te3eHqPpbri9z7W3pZWeHB2zqQ2RrrNEW9pmeqr4v3vS7EqL9pSjnqfZ",
  "key30": "5BgH5kQmTFifbDG7bESanWbuAWszrZEwTDHE35RQzFVLQe87ziBjcYT45d2WzaMrk7GjK4HZkYv6ez9CZhpW4yhm"
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
