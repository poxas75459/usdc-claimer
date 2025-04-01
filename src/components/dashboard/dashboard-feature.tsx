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
    "279NgXNunEqBXbXkee6uQVYvDSZhyVZmHpMW1DkHuD4TZYpPNtFGzVbg2Cg4ddQAuaQR38k1fXeEjSaffXEzdA4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J6Np8xD2Tcvu3bXvW83hehrAkCmnU1DdNUEGwhZPqskxCBSfGD6hYk4r9hvsiHm77opD4hXAWqDUT8KuGhP6yY7",
  "key1": "5ndSG7rZ6iBd3fM9NCaNubNVGupJBSLb2aKktfZet8EANoVRFAp127Xg8YwvkQSCKicwRXdQ4Tkhn8XZQNxbpYi4",
  "key2": "RU6u9gYGtvCkzRbzvYqXqKbYpWFKeRPrnqZiRzMj4RBSBXosXVk7kHhtZPhpY5aUSdNuYLhsNjSHKfR4EUPtwkD",
  "key3": "5Lr5b2sS4JDnqwzt517D5PuqevwmzpMuCAoG4BACAjbF6Et7u2NmHUcsu51rfJXAPSjab41cWhFWHpzFtRbonWeY",
  "key4": "4NKXGzEiCHw7hSMw5jY6CKRYdcRokUFVTd39TbgM4hsGr1DNAEbpQJV8hxy5PuKQEeGDwz4bHBmYEuYTNFvx9Xeo",
  "key5": "tpHqqbopqzwZvnxWynjW3dv82m1wfBb3XfCSyJsg51cZsikPYPkYnGkLygRMd7tWYozV8Ui7WRbybGFPgXX9iui",
  "key6": "45yDNjT9CRg4n7D3ZSpFnTixeZEunyiMg2ncvKSFuSCkefhfnDBTEb1FeMfxLCgPDPL84EFW9GdvD7Bqt5KPLXs8",
  "key7": "4c8Hz5Ao1ugu3cZuWo7yiL2GCQXgnBtfm8d5hJcS3UzVjwCgwmbkcXn2SxGEnS16QL7qjVe2ncubfnS26ziy748T",
  "key8": "5n1gYS1Bz8CwiW5LZriqXwACZNtjnBrrrGZukej1A5kM8JEBEFAqWozpuaimy88BfgyxqXwGRc9HtbutQgW8aPy6",
  "key9": "5BfSrmPg6F2boELiCPzKjQcGq1vRmpMuECBNP4xKSA54tC1ZRznhW8fieoy7jKi6hGG5JFfSivxLwWmvN9qJ2Gfs",
  "key10": "3yEXGzqTrFc3xq6hk6biHLrYwRQiHpoubptn8TU2PVVJLPDtCD81hBs5qJ4UM1Z6bPoG4fpMjeLcwwRLUKrfyCoz",
  "key11": "4aKNaq7CxP9ApF1mZD4G63jCqboVKQS1iqfGPg4sX9Yy2vjHG7s88iVKdkS22yPU6G9gioGwya7obBhV5teJQWMn",
  "key12": "4Esby7TWq6qB8X165QZo6RYLPf3UvPPWcaVvwVz7rfULgji71jFrdx2m1ptNv6F5pm26PYFibM1YQ57zWzxarn7T",
  "key13": "1xUD7NBNFtBUkVoE6oU8qG2oivs5mDDr7sAMGVP7yaT4myYUonKDyMJiTcCSEstdExUBAD9nyGtQoKHwTkjmp8i",
  "key14": "3y6i1FVtN7YYFzMGHLxJZgStDDhRBZy9pzKC5J3utMEhtaaGEzgXdq7bWGAiXvY3SrEX4gKvqVx77bZrMtoQ2Lh4",
  "key15": "63z2SMmQ3sRpJyiGJuMZyi31i3J15ComPvSJ724vkff7BzUF2j2MSn44FYfVtC5LH5T1cLqt5LvrdzmWv9THWfYT",
  "key16": "vXmCwYsfpzSv838g6e1NLL6pRp833vkKbNGLn1iGczKf4Hbs77LiRbRYNoKs58jM987huF46LAAp2JVqye5jV4P",
  "key17": "3bp8QVRsBM8SkjAencHCGVEYsTPMqQGFoWsuMJxWuigaMR9JXZyZptstkKuCWDd81mpd43q6gtBzf5nyocnN1tyr",
  "key18": "5J7ifFWiHpeevmXnsB4weKbTd1fqYzqhug3CTVq4i7ZWKjjWS2P3wbPX9kCJ7uBDdGcWkZcUW3QhgFEBsQQXKa1X",
  "key19": "2signChxGo6SozQ5sLLN6yJ7WP7br9z2eH8ZbPamAhqbqamYDtgFomzGNH11rTvKHCYyKQmefg3m9xiW2YYSvnCR",
  "key20": "Cbv16wi3a6KEg88tHDKsG1dtzVxqi8yf4TABPH68P8XeaycAVZjbz6Yk1pPwumTzQjKWLHtSV2hT5WdXAsS828r",
  "key21": "2FwjpH5cZKnZUJgctcd9SmmVvHQ1QySBMWobZQLYxy2Riettpnpf2DjqaUo3GTkgF8mw271Xzqe4gBfGd1t95JYS",
  "key22": "akXgsYBy3qUYpYt9YorGq8wtJfeYt9LZeyfCpWNDxdAcmWYTR3xmK4JYtqsZV9u1NJdDgtwepieBQAxCgZzKwPM",
  "key23": "2FM3kWcdPYYrYyfGmoCK8Q2gHzKQvBKKCZUSJBUSzzUb4ZAy1v5dKYRcvakDyVh4uqHN8UhxKMDgqEZcjqTDS1a6",
  "key24": "4UayqrAdsG4xuspPweRDRaJyHWdvBrq3ESToyanR2H9jQcc5qXJtD3Vx7CEUdG5tsbKT5MYYiXoB1asWWo5Ntqic",
  "key25": "2cy3Way4WRqrSPe3eTjSKeYzfetEirAmT4UBDZk1wWgtoUrhLvdkvXhZXkTGSDyq4mnTd85W7Jipd3RanE7Lk59q",
  "key26": "5cZDjSnXUk2VqgT4xH5Wy57ZSbbFm6jEW12wZCfXcEw72VCCoXDqqkTFMXfCzLivdhKXjGwZckVQZ7VSQsf31eyD"
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
