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
    "5KkNoTjgfgVpgnQiSBW1LazVqqfKb1R7qdSqx2XLPy9wrrQp2fMHgGLRyqER71b1ZRb3jYRG5jFW75YTNDCCuRye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEPFHrmDjyi9nFTo1NkjYPH4o79qHsd7ByjP1bSf63NBRJdWbBi1y4eVfFSAVApXwnpchHGnpRGMnzmyTAMHzGd",
  "key1": "2imnrSQeP45FrZ4tTDZa6HLftqzU3gH7Qvrj3JsAMnwLB9J9AqVjp9CEny5p8FNC69rrsMu4hr7be1bbnojfn9C8",
  "key2": "VifHf6kXAkn1KeYe7YKyedkLAo4hFXXKSMVbrZjFpX2xwpYp3nTcEXNcdtX9FJCERRQbLTueoH9UuG3nYzdSjdY",
  "key3": "4CcYQPwNUbDvrwTMMQ5X2rit3SWMvCEpX5am4z8obuvqABw5mhyAaGLq6aouHi2nUwdWWE4iDWQouAX1XJp2LBtA",
  "key4": "5JMTuQVr5wtTbqhBFp36niUTsnTNZbR9TVPLrz9ZxAnxK4jLtnCNLSDiyCb7kd7mNFF5S2A5x4dVoJ3JcNofrdLE",
  "key5": "56Lrz22nEi88ZFTV5E3g3F8FoXaiG2JuK5c82F7ZFQJkeswYrGENcYNARiUfeGP62mdByS1x5QHsGdH92Kgyb3uh",
  "key6": "4TY6MhHvgjFqhxmwucCR2JifCXB8xMUQGSjtNdTHmfpAUwscG77scb6j9ZWpbVHTPCc7vkp1xfnm6DH1VfA6SPE6",
  "key7": "2B1DLPz6KCkYZFkcNnU4nX6eNWZKWpHMFeMXHE9jhdVxMuMzw1aggzQV2EZ6ukFW5G7ty1sxJehaFuaRB71MeLny",
  "key8": "7wNQkd5CJai7CEc1VfMPjFgJnBSQfjJhc2ExiZ2rP6nFUWVeSCZxeGLn3MnvzWGXWpJ6CQ7x8zifhuvLRCUGKpD",
  "key9": "5kStRFmoXXmTR1CKHNX7RYFNy9zhTH6yVWkrqsMZBHBwdbwJc46PmnRs1Zy9zYdHDEqqo6bY62SLL9JTgaWank5s",
  "key10": "2dGPENgstxESNH9s9CXf27n4ErMDMoRxgYCnPKb6Vc84J2W78o9aL92tEY4jVt1itvBggRPHC5sW42e3DBPdGPPH",
  "key11": "56W2wwn3f5JbAPG9nWSS43SKfkVRm7VWRhXXZiHCNRBnVfmoR9ReXbVG2jnjSME7jCDoyN9NDf3b7LQp5DtdfqKk",
  "key12": "3EvrDcJT13szc1mqyP4hvK5WujK3KpAn3Et53hkRkSrcmPwN75YjYcx3D5dQ8gfumjNNix3jmEhQLGwzR95wrD3Q",
  "key13": "51s4UxFfDTGAXjDapCk9fNMA14VwMxpBhLs4UYXMVgNaxP9cGUpzBK1yhDS2PeF7RVUiQ7o9Laerw32HiydQKcf5",
  "key14": "Ty41iBeWwypyyJjpqVZ4chidGEFDfuAwYseRfjAKCtHNBhT4HHjGFZAV4NtH13SH5FKA3Q95GQq3ToREeWYPc6T",
  "key15": "3yYDfwgqvVqDhj7d3Ab2Mao9S3YL5JzhRF1KS4jcmiF6wZJbSeuuGZQ3MumXHBGoXUL6F1TAKuwUYKKHqwrZ4o9B",
  "key16": "5tzBguD9brcyzxemYEgBpgg4iF4nrEGcf4EZuX8FoyfmR47hbkdS5uxxceU1hFhVs4XiB8Nnne5WQYkxuFEgiaUr",
  "key17": "2ffmJu2L6LQzgYQfJHdeTB9AHySej9u9YzLWvBXPRa9YigYPqomFcvBGJYzhFztfVgevXZPHm4GEvULcinXTnpMp",
  "key18": "cQkwLchvovueU5f2ULyhzWoEaaK4YAAmutaQ3P2JQ2KBgY9PmW1yE3PgXn7qwjYk8KNBzzNK51gE4vDh7RXv7nF",
  "key19": "4Z7ujpRiWAoCQbEgXBsiDEe1hZBzjvDNG65rp1mYX7YBgLxpuNRpbCxowzBHH95Y2Wk4SrmXrMXJJZyUdxwhrv4i",
  "key20": "2nywKAEmArhGSFpy5QYo8rsmwuzbDkScufvSXZvebY4uHjUkZHD2diy6sBUmjbyoVdVirFcRPnVhDf5t1f9SAhLX",
  "key21": "5dmqfD6MyUeHojJm1jgkfMiKngUq2tHNv57o9WqjPQTsWEmY3QY8r5xk83oyysZJRWB63nL8a9uuAvrJCpX8tES5",
  "key22": "5Ji7oGrtfipfLjKnPresWp8hhbdNnNxUwTpFYB5wMVcMnUgTGvAsxaQ3dnPFUganaUN9jrEWJ1wjbNoE3WfhbHag",
  "key23": "2eJPQYmyAcHwkJjF3W8GigFP9zyuQqw6TsAHyZgVxWmpCbxtJRh6kX8D3FsbgQM9MwsiJS3uQ66e797K5PFLnoa6",
  "key24": "5rSCUQyUsKYyxcp6LVdTqG4gCyvnXYCBuqx14kvEEedHYyjigWXFC5pTxnYt3qJWzrLdz4X7N9FAWhTvGx85N24P",
  "key25": "3L2BRosZfMJqLb5ckF6m1jA7nwqkrDYvDv3r85E6H148bwPnDxeMr7RUBzJP9aeAc4CWKwRSkR4613RT5m4JhKk1",
  "key26": "37BAH8d3feXWJGDp3vTpofqDM6cZuj3EsAjzcYPwxcnoXvhASkjTtqmMVE7i7S6bmZ6EpE53w6v4ajaaXZXh2ZGy",
  "key27": "3VKa2mCvjtk3Miyzfasx3SKmMdVq3tyKQMXAVDNHusbsVULV7BTcNA39PuHoYZgtzcTi4kDLusmiir2aBVe6xqif",
  "key28": "384WF9LE6Aof51ho1Z4WzmP2XWTrcfT7zWDufoWtq2UuuNCsyJa8YwNqHyfvRsMUY5hj1gaJeBUbU1V3aibV7pZY",
  "key29": "3XpcB8fpdbnVYsynoJgoye4FpuCuoXbtpLF4u18b39qgJxXYhuuRF8RjUMTvLP8jmc2VPJRnh4cgrm7XPZyCyFi4",
  "key30": "3MB1xZw9r81aj8DWgcJwFFAFqdBE4eBsWC76NZH4HwQeU2VLxeMfWB6YL3dCpU9ZLrCtqSrywbDp4hvpbxgWtUvy",
  "key31": "4bXfoG3GLMvkDWjoB3fNPoJ4LqgwveY8BvkArTKBYQjTNGHPffnXyFNpLdUSYCiTdc2UmhaC8YFr5eYhPaTDX6nx",
  "key32": "4UZtUtSqtg384KK99bw3SBGLDx8yzUurFCB8Pq51heaxyoDc14yiocHNedVC6RaNASwsNX8MSHCyaYgjc4dURyoR",
  "key33": "32xprLPJiPpDjoDPnRPERxdGsrRWbwWJCiJ6Wdbo8ddc4on1PbFfNpuCD9XQm4hb8sUeVWqipGZVhE7VJkejWhDj",
  "key34": "22DibbHUr8BFovysPr6hYA6gXL5mDsuZwPYPWuJk2ZH1LNfoNfPdBk6oHYAh7ooNfdqKTtWKpgp3pQYqBgFMEoar",
  "key35": "5w89gvgTi92ySmytzqWrHzPMvZSjG4aawgZwt8eXEeca7H8fRo2aH956jh7CPd2dHi7ofro6t8JoxPuZjYQiPJPg"
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
