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
    "5Dg1rxhHi46gbf1btS8Yz8a81Lr1i17tKTsYLhCSxX2uf4TBZ7MqH8dJjatHvuFF8MoXpCcpWDy3VSPLKHHTLkpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tHcb7rd4gaoTLUniBkDeC6QEqDp9djBABZK2ME3sKgrgdpF3gQFB3EnypvRiabUVxnA1y33feNMRw8zuxEmKkpm",
  "key1": "5gYEPh7AEApuSFzVcRsyPhY57YVhapmD7zbJCQjx4KRmQRJtJjjFDErSH9taHPStjeyzckAcGF1Z1iWiCTWAQnVg",
  "key2": "2Eekv3DmPfU37s15NNAXgwTKFE74CRNqVGKHZsoARBoyLvSfu5hrD9XiYcxY1U3uLN2cMtTobGezHgiBcajGigX7",
  "key3": "4k1sbCNj8PrGodKzzaX54tVeMNyYfWzN4JdCkXhTabZzfKdt3qi9CZT9Psg7qSPqBZbb8xkmfUCNtyaqMYwVhdLn",
  "key4": "2HGxPqYWVdotwYu2XNHCKdewShscWpWdK59eJBeprJhdEVqPm9kUqPsjch2AyoBrEmJ2FS33wUQ2yY5zvx6guKut",
  "key5": "5YCzBm44cTgMFtU6ZzUeK1WuXzfc69on6cTqwX4kAuJfbqiuMtBdvQ6hVAqfFsF3G6H2YeSTj8WHqRcDRTBHUBTv",
  "key6": "2fdkFDzwmGPgYFLC5ewnjNM94S7dxkG3nSi7JBcpn3EGtHaVpdvNtSm9Dga69FPtbN1sS4R95VrNzPahema6QZJe",
  "key7": "3KH6bvbZCCMnxht1UVa2haxkLHCirWiCQPJYmeNGj1oB188gixNmZVm1apJMFDUWDn4GkobmjiMVZYyEdjhxMqt1",
  "key8": "4NoVNfmWg4xwuPgbK5wHH3KTMse7Xtxap6LpJchxAM9497rfs2ECSVEK4MjZMENCCzqHjRoqaAN36uFyhdYNo6FK",
  "key9": "2mAfHY7JRvrH6hptsoQCEoeAkG1agZxzbSDPoBzeBNiqZncCCmJx5Btt2NqTsKZekcY6Mcr5DbqmgDX1yD4zP6k9",
  "key10": "2GWnRwpEDGa3brKBGTmVcy6DahR3VTX4wLtef44ttihNn3zG1cNmZBkaWmiHj2WCaxU9wk7HUjVxUAwRzMLJaxxQ",
  "key11": "3tV8zyQ3Jp49pR4VVidh54TWgaPhAdgRjhtXguKgc8FRnTNhAeQT91Mgt9caSnVyP7vp8sTz9crd5TehZhxY8XPN",
  "key12": "2JJ2qxZeMyQeETPqQB4Gug5TpyemkT4aLTJ2HdjJWJRFouJqPxvNoDMZu4ASKGxdWViiYhRaerkMgaWLPR8ZJK6p",
  "key13": "385MerH2jYDj3Qz9HU5sCke5hbBtQDVbX5rrz81z8HnoR1pFM3T1qTfa6ZqjR4tov3qBcHev425V4URNadPMtiYE",
  "key14": "3bkUjZd5Ze6a5PdqsySTfag2PbNXM61iBe4cehLmVpSA5kXfVmiqRTLXUyCFwG2cKVXhAmhASdUGoZNjtMpwSdRi",
  "key15": "3TGHyFXcLFP6T6hNd2ZMtfF18XMdWWtKF7hAtvZeMgstYmrobNYYasb8W8Xgy29fyKwJQJpxsgxQHZpBBVeHBhRJ",
  "key16": "2L7apATStxaGLwDnRdjuhCfiSGqxwZNJzASzjPKejx5n3S9whq7uhnk1Wd79eKuju8z3ug9k6carUzWWAcBSwy5j",
  "key17": "2MQX5apemzgZxDrz4uwSyPhiNj2jt8U8CTHmEHWgYrP6LiQHaEF1tc6DNNDapbqnvPUbWXWUqhfTV3FqNUcKVvLU",
  "key18": "UVjLuCMJTPc6bHfeoQnZGM5hJwqUbnJtGtpW9YdS4phAjUpqadZoCtri2UTjGWAfGdJizWdMMrCVcYwy7NAL4P2",
  "key19": "4FWp2TMtRU312uviUPEQ2AyoJY9tfdmsVujsi1QcKwL92Z41uUG4Q1waYwbQ3oxjD3ZQ4iNfQCSuCHHDgMXwve8P",
  "key20": "2qAqnbnxBip6jec87T5T7Txx4vGbbQAZHZTqSzJQGRPG5idUW5vd8WWy9aWFziAkwy6DxxmeJnoKtuR6NCSKYfKt",
  "key21": "r1uoqN3dk5XeBZzf6bqPz4DFRc4r5QVCKvvuJa33vuvLT1vs9oJRtqNQVYpWGHsq7x6aReLnLid5VNJLqjCXyXU",
  "key22": "tKK2oxuSxmQCzNF8gdrUT11fz7yJVGdV2ohrVZwyUkdbgRgu1bwVnTumkKTyh8it6VypC9AS4NbLb5xvEUkQTSt",
  "key23": "5uGzr1UBGBpzdJkMCoqyUhWvFmKTRjwgG7VcCxoD6qxCNfHfsHed69E8ex2Sjvopd9WiES8Uv7BFnHGYcWMuVrZz",
  "key24": "3yVcsoMqSB53WowmDNpsRgiKE6mr6NA14jJ3Ls3xds1Zm8usc7xTKttUJhb1rsDXHrCwapjzu9ETdCjCQgkuQ7Ts",
  "key25": "5Js9WKHea21cjSzAx9Z9ymPuEzbuHnLCR8TnRVsBRwDRnjbR9KphoBG8Guob9jiE7j7Er7XvMsrhu6rqtdjSqhTy",
  "key26": "3ez7hHSSZs5ANzMq8nj5sT5PyyG67BBfRR8rYEgSa3ANpvcrm24MgQ3cU5rNMaEN84NRFZFQZxpSHPLfjo8nufaT",
  "key27": "4jkzroUNmyxwpyHjYrwan6b2GFCH4deS7y4pNH9ajEgwmogHAHLoEsJoHXNoXSUq7REZQTifeiE7MzV6dBnAZUny",
  "key28": "3ZZQyYJ2VprExGvdb13vBdKGDHyJFhvntQg3isT1zEwo7KVVXGvHUN2zpmCDNgVHkAEzqcQhgEy66E36wBgbUAL5",
  "key29": "2BWmEAdo3h9uFEd8arDuneafqHj5EhXNZmwicmKMogrj3fnNyLFjuLMNpri22GpSUvr9AhfVDuZezEV2K9BKu5Qs",
  "key30": "5ZBgQaJJCdy9EUYhcNcmQkoWgJvxXSkP39RdpjMPKVy3scMTyFgtvQf6j82kh6DMumCfektvMnz5AAUSCwvXamES",
  "key31": "33jKrG89BXDWcrMh6SVSpHGDw1zjUUfJPznRAt8Fb3UZbcQ8jgwKvmVUBYWYJx3n3gDmWtxsWZFgB1XkdQmHVbXv",
  "key32": "XE52NEd1jt8W1vpXt15KjU5MoMmk3sAjcdGCApoiKENcd3TRcgASeJkMQQdvcZrHxQyAT6rAaE69gUPiatNQv4f",
  "key33": "3ef5NropeekCi7wRQtBDEqXZcjdVpWRdtCxyZ6ezgjHgN7SMqPYs8TootqQ2LnuoP5VsMCC258bxZAo3WWyaJM7i",
  "key34": "49TLTGpHnBwqJqV5Fax5pr3oYhiYp12wLpU5W3ZRWHxMvgKd7PLKuUPj4oRQbMNtQNtZRNfCTurzfZtNfKXsWGY4",
  "key35": "3JtKwxQqzn8K65ejywbvgRNwozku3XjWjrcxS2n8pmyR3vBUJj9aZFrAVs2enckFUC3q7hzVgcbc1G9JrzBfhFVa",
  "key36": "4cUpWASjXqiVU4ivw8JMpfxKSeqKz6FdYXUemPz8FNwbWqcfrCV74idj1GQXZAVo93uqTeXwN45LNr6Yv22QjHvn",
  "key37": "DXAwNyx41QjqCaw6LZR1DZ7Nh2KtqYbaPzMsYiGCaRD6wLpmtTB12dVHwn2ZehomG4xHn1oexWYJ2fo9NdjMZe2",
  "key38": "poDvn3p99H3AZD41L283RtgKkHBz6D8pMx5RgXQfEqqdZpNfsaCWzLZS9X3yjYk6xuMNx1V2o3iKqiczurDMM4a",
  "key39": "wzQK579jHqA2PUaNwX8DUGRqxxUnNFchSAD2C1EV4WyAGJtcjuoS7dyWbKGWTYe5Wn9ETMZN5ZpwogqwXVctixQ",
  "key40": "42Hienx9N716MF9i1TeENrd9UHa7Zq9i9ggVHEws1cftyTmWF6612NuS3eTPyNiRmBnbpz4dntcnjennEXgTFFNC"
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
