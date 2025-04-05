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
    "KDixDvUyvqyEA71PSjgtCh6dVjk3eL7d6cN3rbEEvBNknEriCBZaf6L6CUFfp6pX7KGipqAp2rBUdc35orFaRjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51NAZ8Sz2pRxSB3xMs9pGp6pZqp6mX9qh2r6x2F1cFUdqDHMF5GPXnafvxafhFnVgpq15hrw6kX5MgYAocyDRbza",
  "key1": "cbyR3WTQBaUZK92sXwAARdQ8YB1s6NpbiX6oGxguk6wLndCAF8CjH86Q8FhfGGrFJhSRMBhue54q3rxfiwoPCFC",
  "key2": "4V6SSm5tDhiF7LA9n1rcVaodnLfLRjaTtcW1rHvsXXfRe12x3qpDc83sKiPpKvjWG4LTnwimHTpb4sPk87nYegav",
  "key3": "C5cKgw4axj2aPhQPdTXKqJUosSXytdRbtqmyE85MML9LBGKAfyCC3BLj5CjxxfpURRTp8qeAzdaTTgxWdRtotQi",
  "key4": "2pdis61A1TAy5CGbe6eP1mwptEe5pDEGvKSRmb58Foo614VwTecxdR6VfWrx93wyVJjvLuMNM5LB86JW1wgPdygn",
  "key5": "4fVD4RB92gfXiUXAXwX8YjYNmAwNJUgtZdaHbSgWXUQfGA4L4fGdtWPRueBPK8zs3epj3nXPqe49HXYhnJ3KfyxU",
  "key6": "eexezpq2kpetTUoMn2huuSMJ6eBBP4tcvHwy8LNj3iQZVEndR68v1wie3kqNirS2ehLQDsqtFF4oM22VYVoJNZo",
  "key7": "4pNynSmNmVAnS4WP35EcmZsMhyZ4ngL7QvuPtYzRcL961Yex52Y3Xi28v5ze2gzpyhGxkM57jschiqrNxHBHcSBJ",
  "key8": "3xSftGx8ciQqLN5KRohhomnyGyZNNdbVbh38CBsBQU1q6QcWsnwFW7QhoukHPLdcHvKPLWYz2rpYsEjqJf4DwTk6",
  "key9": "2z9x9CzebiacBWN6s3DNVY26ZbpFgLGkSi528qSzQijwRZzNEUeXiLpaJKNXvsvS2Q3qYdmXtEmskegrW3qiPudA",
  "key10": "56hQnqJdmZF8wbqU6ZSotRDJxyjwbCTyTm957tR1ty139P34TdXeWYa6JfdLiYSat7uF5FPan4mmKCp8pELAfrn",
  "key11": "4WGatcBt6ehHKM9kqC3Wqjd3dGDqBKNNfLrW5i31HGpRicyRccSAg7Wweh5bTXaRb2pXee8giEq9Cw4jM8ZepYAb",
  "key12": "2KFVd4XHZ4eZXNT7ZjCkn5rwY8Qo7LFmup7HXpJhr2RyesfCuZsP8yC827gspg9VTZ5VcS6VYqQCDioG8sapvfgn",
  "key13": "3FG8y7PRfNzHSHJ5x3LWeZFNqn5MD2ZE18PcnY4e1ej4qDkjsdWiCzxVG1vhssTgJWP9wcTY9VpCeiQc5h7o5NLm",
  "key14": "3gVk6CmPAFY4sTJUcgssq8LBhFnExo6pGz16oJJ7Zov6VzvPDiX7RSFF86Xh9NgqABmeTHUk2fGbN9CrjxG7PX1z",
  "key15": "5H69NLB8r1XSFQDym1bwko6XPkVBGKobXcaY8qb8tsjKZrZPxs3QsZTvFZtEE6mKMYcj3TaSCFuDp9EChTtWfUe7",
  "key16": "2AWsLFf4VugiSWu5NZ9Yjcfkrq5iEGMEx6iaGEs2QvGUHS9duQ69moLg1RQ4xncWtdmWJh6PpjWjecxq4kcf8KEt",
  "key17": "2tTCQskhcfnPzEZLAXiraxB3XYgc9ZhToVPRaVVx7JxgfeVwfHwqX6WrENMXghb4rz22rt34LxmZ9EUBdG2TYAb5",
  "key18": "3HSTUPna66NcTGW7EpMzB6huvhbGT5e1AMoja96UzyRdBvrBpo3W16UiHhwkWNbRobtL2jUgYcXX3tn9n96HMn5c",
  "key19": "36ALRpdELgc1bWh8hEEmzh56e47gysyYjvGJcVyrMb8ysKtgqnZmfHYqZhLwHkYmVcUKsracXr14LkWgQEE89pKz",
  "key20": "jVPwmXLnSZNdon1L9376AnuJewnLK2t2N2nZRtZysP8HZvH2oRaajYEFoenL82VQKyCbUcRrTtVeYpJXvjnGAX3",
  "key21": "2XL7WG6zSfvmKtEBADNaHq5JjvJNc6BDtd4Z7AM51MTUMa7E2WrNMrizwj8N2cqS9EsqmdpBaiJiVkYEfWs3ySn3",
  "key22": "2KBybXHh1cNCpSLHWV9aTANEDMrV5MPc7g3nkuxHaZ1EV9qXV25EGqFehcf5bVgxcpTSJXgPPdewQFhLTs3BDutA",
  "key23": "5YHsQ5rkbThko6aneRV16j25eYSmAxmu6KPSFVFkXKgedwbFMYoBMcBYdhAJqpvxYvhAJ3XMvmviGBNMf1J5Q6io",
  "key24": "qyb2yCXE6cWxWQJNGpj4XKTySmDaPQZHsFoVMD2QDYPX9paEr15shwJ5d6KPetvjvDFRyCwZoJ4HmE71z26ezMY",
  "key25": "4Vy1L42Dd7SGJis72k1WQ5WFRentrxmXLoPzjpcwmcpt3u3EMkT9o55sp7YQthpkUe2vjnRkbX55hMMa2onG7XNf",
  "key26": "2aPLmJQfJmKfJKtAew4PUoMhYKW8YeWGe1kryqQPnPJHuQSX1C9AyQHedy7mAJzj6hGvxh4q598X8xps6y6HQDCn",
  "key27": "3VoENqK6c6qBidg9sPkHBSTzU6oCTYDABtzHy1WDSLFo6dFyJnoL5YpTEJaB1VHxibtpshFn1CYuMok5JyW47TZi",
  "key28": "4ptejmYdD5qofsksEeQbxdaX1o28kahvTxiGNdAD8diSZQLAykbiARD2GmmsKR6oxqbKb5oTYvJrzxptzqZJiNUg",
  "key29": "3X5xF6XmGaszVBLEW18goX57NepB4kRVVmBmrPRXtWBVxrQb8VKd47AiesBwd1im5qCULc8dVett5cFA9pWTH8U3",
  "key30": "5E9KtxaKpWTjbwA2t2XkpreLNBQDNmRKpWaSiNJ9jMwht2kh6hm7mdvqMQd8p7BEeKVtvio7rmQeL4vSef6pVBz8",
  "key31": "YCTJXEpaxYUjNMSSPeziK9N5Mnq6Zics19ihyXRgim7RLxXJa7DsD2KJixe3QBAPdN58Jj5LguiLJN3nCMuCvRd",
  "key32": "3CcpLC4LmvzTgWEjF1nArtdz6Qf49kuQiUFprJN9HrAN7va63mbdg9sdCG6wjY8zKL1ugdp8tt2Wk85RXwobP2vc"
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
