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
    "5YLp5NTDpxdN5kK91CE25YAAcXxqxikR92SbGKcXBQabFxi9xiEofU7p1Ce9gRxfeefPGtbsb6yHravh2SqhDj9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FzhUSwoYbQY3igtFo5FfoSt3vqGsJPhThAo7br8wT4StzUQ7EW4oYDUgooZY2ovdFBzNfzEhpza6ytidv7oENdG",
  "key1": "QWXsxT3gy9eYGHxCkqczSHcAM5KRBWmmEaCa1pxC6r8TuejPA5JERuNPTRUfL2oVmWoArubpy838p7Vqn1wMcN3",
  "key2": "3DJVg3BMBzCQu1ANrNcWJNxjinsQ3uEG6SpPWP9Wvz6r5eBvuu1ipAJFsDFRo1zGuwf8HY4EkDpGtrDba4DxN5Hn",
  "key3": "29LK8Fbvew3C7xgmWG8jP8Nau3JKqZg9Kv8H4p8ijv4sSt35XVsrS48zrU3xszYwTiFoDi2dEBRgr9ZCqXkqJ5yx",
  "key4": "m9k9Z5p3rgqdDWnE7mcH7qkvF3MSUQLC1JD6xbsPwbJyBVef4XRsYFtanoL2kTWpX6ntcz1jADeNzTEsp86vWSj",
  "key5": "5nQoeHXnVJAtB7aaNT1p7kbH48nLDk9uc5sxA6BVVnf44e62p8bL3oS4aeDgY8aSKD6S8jyVSJt8fWm1hAFXiSCq",
  "key6": "5rzqFw7kmYNrAcZ4zbca9mQ8vhqFXmTKAL8nZn49MsYaz14Q3L5BF2dNZUY2pAhU1CGePfweVHDvWB5uSoVxaAbM",
  "key7": "3ScGkUV7xbiUopj6P1P6skS9zQfHxWmXHub1cyDZGDncTYzuRxKwA1GiHpHh9SUeqM5QvMyeQaVqCrkkk9Dev8tv",
  "key8": "2ai4YjAesAELnQ2EEdQJ13pdQxYt4KizMSULMKXmFHaFuVdxAufhQYcAmZe83BLVLyQG8uRcAatcGgzK7J2Y4XkN",
  "key9": "4UySmP4BAosSzsFyMbAH2LReajD2Jvio7HBkcNk3uWXQYFwM2ic9xYjUPU2WaXVAtyZGEgFmNkPRfhDqvza7N5LH",
  "key10": "285kD85eCCcgf3edDG15xJirjfhPLBRbnN75MkJ5MU9mRFofeEX6D5ppKK11gXT8Anik6asKAyANUuEaj5GCQNih",
  "key11": "3aYeAJm4yb9UmUExwoUd9gcf1U33ZoQr5af39q8ZY8znCTPTy8WAER5aP4VBzcTkkLT9NVbgxGieWu9k2NZdftBW",
  "key12": "4YP7nhAyYKgcGcyWtgKkJBhGE9m1f5N2Paa3ckH4DeNYrRnm483Ep74z1ZRjESUoJD1n4pAVLuT6WpcRf5RJk8GW",
  "key13": "5dV8FzymD3CYtq8AJ8KnAEiM9FY3stQq5t2tPyAF53NLdEoPXgQcYPpWCLLrYQHu8XjbYR32S6NeYPSAdStLEsAR",
  "key14": "3KfvQYgzyZwKptxS1RV4oFeTvSYbfKUsu6jLM8qP7zAKaWtvYxJm8EFxEaxudEWLQdMf9JJVzEvrfGVXXkzGmGXY",
  "key15": "4LPd3dfifnsL3Nt5eFuGwKaHRRKGyBB1Vb1NyjC2644Bd2HMAVwagce5ydwC19X1zkhw4zYd2ggE4gdiQjXvXci4",
  "key16": "5oqRrYEXwBSLtemLaDc5v3di9am4awp1YZ8gxn6tyicDC35hvQZbB8Cky8w827HsFRW8JhGPG283Mcr92XQv8Ndc",
  "key17": "5VUG5yjKLr7AkL3K7W4xcBawMgu343iyx7iSvcseSsLx8xgKwJzfn26E8SwvchkP99nxu3ZXoLpdmEFMoAqycXqU",
  "key18": "4q9LSDa3ajpfEr9iKgV63myuy2ZZFbTVQxzZkJsfFk6gzFUGwQv5gdWSqqhHAbtd8UDh4oDw8DrsW7jcqLVyPuc8",
  "key19": "4r9i2WZZpyZgupPCnWHjr2ukgy9VYTAEzdURinthg15X71rQRCNGPS7KTwyr4A7xdyw3yeM1DXW6P7iVCnFwvGy6",
  "key20": "5MVHfMu3q7LrjuKAq6xJKzZbhrJnAzu6278dC2PbGFgyEjYV7B49UXWfnfnLskWtDGzMQc95ZMPc4HokWDsxrnD8",
  "key21": "4FMmZm3jFLrgBVxuEt4adQe9LNmgarcXYM2DYfnzecioytCHTpViq4FkXYCwZ7Cp1qbsddSmL8kPSjMeRJu3CQxs",
  "key22": "3mLKvrR94LBLhp8VvH5zka1b9LfRrXrUEweYg1H17oZn2z6c7FjJ1sqUWigoSAaup1mFq4s1F3qB4BQ5TbgG79Ua",
  "key23": "4Ko9FZi7CZRdewLDbig7Vh6TGZpBz137153H3kWviHBNsAkXR9gFvaNyhC8PajPyQNYw8SBbk8mFyDaUS7qkwRC6",
  "key24": "5W7d3r9eahhor94Nj6uTEBbyNWkVGAW5uz5mEKWTABzoge98tgvZWsbKevmFTTbfAJEzyK9YNh3tZQS2gsZPvWqK",
  "key25": "2VyzXtvftW6GdC838urhyMdxJqkR4m7mMnfVNoUiNJReGKMdoiJPyUCCquj7RHMLv735khCxCxjxmxVdvn7ho7RH",
  "key26": "5m5wdJ84SZNmL5XZGMTKTYej45qbTeZzLcabhmNzQ99UPC1er4BssQsFnJDuXgRvKpqYQfw6aDgqJPVFB8oNsneW",
  "key27": "3PP4TxWR4fTgMrmoh11QJhZzmmkrkM5fbpEF37PPUhXsmiPtTjQ9PX5ARkVtAMfK8BL3rsrND7J9r2oBBFp3maSe",
  "key28": "2LWqmsUTpSJQQPjhBSgf2HkXhopGw9YkGYtvJM6qSMHxr7jcSp6Fr8dhME4dUjZj9AMHsazpdvGJvU7f2ByAA3KP",
  "key29": "3xn7YBz2Pp3uCX4VeyoCg1S1SmJGaLGdRfMHxCedeDvkZmFtKQq4XPghqvgWS2uZkGcXGxxqpSE1xvhCXGBWB1LM",
  "key30": "tcJcypqpyabCupZSb28QoBbrEcrJ2QZ2EBfd4xfkZWJ6AKQkGm15PHZHDARd1eZR3YCnYxvnsdigt5jihKRViSa",
  "key31": "4GKhcmcJjjWRdpKSeTDphQ9vVWGaNftyEnqw2EUjMDhrQ6DXwcQJa9J8DKxKTcqgPKPNXQdJqFZJH6GJwo7XRect",
  "key32": "2UkMVpAt5bRu58gTpfPBkUr1v1McPbTfdtVAWyPUUiKg9pFthZoq9fvu9WWzzBYTARuvSMxRoJaTHdK5yPfodMVK",
  "key33": "wuNjearpBi9ocDC7VS5SLdsStmTt8ACWZHfcUeYbSpjithL43J6C35GGfes6ut1QYyBBCheHKQsJYrTZQZzjA7W"
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
