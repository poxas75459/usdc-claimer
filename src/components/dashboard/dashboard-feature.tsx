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
    "5FgGZBo5kaYU1HDW6yo3YoENUK39Zh8ZgZe3H6kivYd7DUND4KH7RXAh2jMExBk7SUiCqdefomyv5cDipxaDPybg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Si8cmjuQL95G8isoFsR8hEEubmBUVjuGCnDe6qQASbNQrGrtBWJ4ySTxToifCPNGFeRuT4aDyroBp8NLJ5FGtk",
  "key1": "3qyJKvBwQUJcpjxke3HkbLHxUDuWToiZVhBNPDnZ51v4GaYiMRhrFHAURV9z4cTy78XWdYc5mghzybudMFXutkQs",
  "key2": "cPs4MztJ7jXpLiZxCJWLDRYzqie7EeYXTskKrCBvr8yvMT1uwBA8yeJwP1Ena3Fi62dUro4MBD8em5oFX5V8NvB",
  "key3": "peLm1PNJLSHTZXwFjjA4xcYyicbLxRhYj5vBNGCuXCPJ1WW14WpotVaTUnWoXjNbimoQnm2V1PpTDNZYYvHf4nF",
  "key4": "5EPtKWdqPW4sPQJNL2epgTxXAB5MivsWGUiCe4CAjSjmzc3L4YVb2VbuZX62bRAKvzV4gXpmy8D67nGBXyMHgBoG",
  "key5": "5Pmb9ZYKzo18ecqgKCgaMSuwPTLYsxYr2BCJ2teN46knrGFvhLKmbb3ePPtPpuh3XxdPeWTVnTNxHhGceZHTy9fJ",
  "key6": "3yZgCaXwZrCapMGhef6jMAMLeGzLH5wXf6Fe1yMspKMTX8ndhbwH7gVb9cZrLhEQkVbF8SeeKLPWQ5ia9bB4ThYg",
  "key7": "2UYjRKN1DSoramJBRMCpsrAEiL5DcM6qxUpNCcZz7Abqe3N8nV7GHcWiEsSoTiv4vtACo1HAaU66SKtSUPTm2FoT",
  "key8": "5KixaVKJdZSXCmvMq1hEtRUyqdVVV2DxY4gN2sxke6ecWJuDayHoiCbUTL5CvQFtMdABDQuK7hcBZCBVzkfUF2r5",
  "key9": "2K21g3qGZyGJscBFV2ZFig6SCFtig3p8vheDEdD21qVCbZDVj4jxRRG7hn1SHsWcTZeR5HXVSxFiov2PUB6NZDkj",
  "key10": "23G7NYcGifm57zriQT41RDBMCUCHmqo4KZzLtGrJsc5PNUMud5f7mii5b2tyEU4sjutt4DJkcRewX7so3VkosVBp",
  "key11": "aDRqjTBzH4iFDcDKxk7ob5vfdrJTPD8gEMaFXQPt6AXcqvJMjEucJHu74gXHWgx7A2S5Nxr5cYW91wEYsrxRFpW",
  "key12": "5JKie9wanjZyVRiCEP2q8bL9xeEjXawyTbRCUbhDa7RheFVBrEJhc7cUXBX4FT1LmduJPdGirwc39kBaP9LGvTW7",
  "key13": "c9ZrpW1N6aLsgrkRP4nEkbh8qvbYzybgFgAC4VRdrGipSu7uTBcvvZ9UFbWP1NWeTK5BeULVyNaL5KybctXuNoW",
  "key14": "2PvPKu8oGDPBsVTx3wnDEG7QxN8AvMzPEqmKR4USRxwTXdUV1RQ6ZCB8a18zYu4UrNEAEfPJvkBrAnNV424ww2E",
  "key15": "2271zuCKgXJRLEyAGwRfMChP2JNXHgZ16xmaqqSyaQPvcJtX2HjKKjCS3dd3b8m9zNx3YvD3YqzDo3mJTB2By7kd",
  "key16": "37QwFMUf3eyhdwXV1yEeN98w1gtwVFfTUqTzhD6DdEVmrLwJVNEU53gKnUrniwEZKjsqJvDKjTRxgBFVprDVbUFA",
  "key17": "2eVZnnq7TVhzsQoQHJxeFUxVDmFpFsS12cPChcAz8GNfSeWTB8PBx5wx4Ny8exb7adNLcMpVJwSarECaFXRE1T8i",
  "key18": "3Xs7hKSLE4WhqeSmLb1ckDs8ZahuVqJZfU681xPeXTJj69htDRAJUfZ8P6nR9tba8o7KzxzhL4Kmq9vemrQfqx6J",
  "key19": "3QwuFZf6PUD7nUUNPQ6k1prfEFbAo8aVUdszG7LFd6QCZXX7YcNfpyyZsTzK3bRUaT2q2d5ZjBny3fwAxdKtimSu",
  "key20": "dmfLygGjiiHgohh7iD4wX2SahJWfMFshnizaTkXBK5rT135FSzqrkMyGsmhKksKsuaPdP6ghFk4bHFv7RoM6G3h",
  "key21": "3YMqbpU4qfxueKmS1YEt2CgZVBi2wPhGWnXn2Ya8zL3sB1ip4gj8cnqANgd6PaYxAKcK6AN1YC3fUvXKDsYs2LZu",
  "key22": "3q4npB33wrC6ha8J1fCY2uWSgDMozHA6QoMcgFwYwPtqNXnEeboA8KKaN5txZ97bBJ2LEQhBEeQx1xBkZR3aDDTK",
  "key23": "3dKwDPbuKAjQDEfLmTsiu9sgPYvfn2PwZ6E184msvGMY9qvwthDDxJGhnfg2McwF2j7AnYRwt6PSNYhavuCqXvjZ",
  "key24": "2SiU4Hi7pzcTZqYsZ9i2RuHHWby6MwEza4Sv4WUYRDszYm9X4N9dbncLiTrSCHJ1EYzoXkKQgCzAuTsYvZBVbzPQ",
  "key25": "3NxuF3sa4ZLgLw1Fiqmgm7hjin7poqB5s1UN8yGyo4UaA8Jq21rUW6RtTUh2X9tL9GT8q56Y5mNeKhuM7y9wpa6T",
  "key26": "4tGc1KxdkRX1rYXjmScCyqTUg8fKXDUzfSQ9JJdCZZZKcNfs9JVjsKezp3xmDZTnhodqeCdM7XF7YvJ81Q3kkTSU",
  "key27": "ST1gmFSw1uyZSrECW5U2JZtmVpfcZQqTuwEVae7u6Fya1KooiswoyaFKtuysFWi7f1SoxDDiThMVjQtV6sffMpy",
  "key28": "zAck5yHBiWq4syDM6isk6Bq27VDq4hebN6cXZ9eZm7ryaxpFLt3PnioiXQNjZ2WBkJ4nST7MXjb9MNdbYBADuzm",
  "key29": "5eVYMG5SLkmkkb4DJbX9FPQmzieC2rwaTPjf1cXnWE2j5SUh1pi9NojXunMjGPczJCmWL1ZXhkRDP4HFdtar2QCr",
  "key30": "5muWkqZqgkATp5wRYzgJg9aKHoP7hQXjJmJweNkTZHsiTKpLYFM2Vy4kb3ZYidm8QxQ39tHrt7keLcZj92CkvbrX",
  "key31": "5ABir4nX1qBHX6q3ZaATu7PSqDv3rQWQESrFJb2yhZBBtAMASyWLxBGwQYuD6hx8p3CMtsFm8tPPvMJhdiSWRWqz",
  "key32": "2YLwz7qcaRYABYDnPK2mbuJN7xBkXedSTCXws51QqJPaAaxZ4qD4gRFLWmwKweA9MVnZrR1nRLgXFH4DGBkmi6ov",
  "key33": "4s73JfVhBrMrvTvLePhxkB69CJnUFHSBSYR5iFQbaCyCfMuVWUA2vqKy53sQFgzrHrh9HqdW2mQAQjhc1m9E9vBy",
  "key34": "3dzQ8A7UvBwwSTqM7ym6wSxf6a6f3xxanbwnGFPmt1E8ojJpqCrhp8kC61BjxyLQyPY59hxPjYdmG2SS2roe5ess",
  "key35": "4ZVmSF6idDUTny5mLXvAwWiYVGNBPpmswopUe6JwqYwPv6Nitu8pPvczy47AfU4JcHac8n3dD3Ewc43PNigGt3Bt",
  "key36": "4fksTFz1WwbmrAUZLaJMaiX7Hy4mZDDqCqsV1yqdCVc76ujMyXL9m9AKgVtixs6UmCEYJe38PWVpk78wJG6ayr4Z"
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
