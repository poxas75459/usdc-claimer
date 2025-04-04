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
    "YjiWAx7XpmRsS5UYWrGcLv5U1QTx4Kk4heVGLwHum9kyKUKsoZpmGpXSxwY5Vz12hyL4gZwnUzWCH5u8WcmxQcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kREiQWGLKL8Tjf1kVFVaua1giDdtgBxwfb8jcSCTkLCuynqgR6v2kEpqv9TunSyrS92nthw62ZZeK8oFMmwbJ6i",
  "key1": "qgw9sDLRfX1kKNAbm4Urp6DKycRqLrm4xJGk9NhY1XeW8maYDKVKtiLP9NG1BeJUqFokkYgdDcWM79enYWaYsjk",
  "key2": "5Anj5botJkdmkBswLJQ1VmwNbEMuA2jZgy8VeKhP3bEU8b8MTYp9xP5GTeDzBjtNG6VDf4mueMPcJy5uCr684MzY",
  "key3": "xgHWU58USdi96muJH2idzsZE6z4cb3adL1gRFbULiLPYrMwQcqbgfwgddKqeBr8xxPRwYwr7YG8hrH6y21LARF9",
  "key4": "583oTQE8BbYdmGoK2vmP8neAirMmKQmGeSLwqi1ZVKMn1GTPiyT2iZh7tAMgvMDJU1iiJdTLakrTbuCTnuJWW9Ps",
  "key5": "3MTM5n6Yg5qt38uBR9s2U7iD1DNYkNboUYQq6fyM6DZUaPMa5PyEp5hT62rbcinczKQXikGANkCnW9s8pixpTdTu",
  "key6": "38cvC8GijTsX4NyTrrLt8uqTrfoZYni59AJD3oYD7a1PWhtyXU8V5MUJu3RmchdXYu2wLpgQPB3pHxPzhwpYCz7d",
  "key7": "bVtuvQHQMaeEWa5Ep3ogMbBwCPsugdh4sH74rjbH7v4YR7MRWxe19AsEYPNCdpp8w5GA4B6YF845hPLGZAirAM7",
  "key8": "64wLbR6cwr7g34SyKKJ67jQgkur8Ei94yUUikBTACNX7wQhSjmn3vKXhgwBpKhwvhquwcoXxzMAuf9UkSJtknCGk",
  "key9": "4j9jgqdL9UGGcfS9HxcMwvPDewEcxgLPq4HH223eAcpne6vDGKez6QWYSDNjkxktVP23V4YamVFCsizCnTL3Fvcw",
  "key10": "2CWrZFKAeshMPDF6xLqRxjDYvMHo1vMsvpbN2tZLz8J6Cw8uKhSNNuRhMGcNwsqE5oJZi1ooDEzS6yUvAC2S73du",
  "key11": "5qEWfXCJQdDEazRnYgBR1Y8VxBtokNsXEu4EALXeiASUuSSuMDW3GCmnkJFVeuPp2rmXMs8okXwo5Nor7Ly7wNGS",
  "key12": "39tPEMdQi6YmYuS1kmeL5JmTxJJ1BiELFgrrRLjZAo7QDRdb4ZHmd6TtA4dpDaoVSrkANAftLSK9MKSr5idC8tKP",
  "key13": "2MrgdX7sAL7MRJp2EL5qYC78s4c3YwcR4LCdhZhJmW2BbJ6jmEPVyybp7NtYNBQ9rrmoRKc9CA5hz1u41gFZhRu4",
  "key14": "2pTsDDgDf7pNc9kLtPMXzKE8K46YHMdsVRUwZkJmgUWaBmuMZTkiQwN7NK8B6ezuhKyCHxAnKdTS5uUUkPyR4KGj",
  "key15": "2KEKnsTEjFtsy1NzHUnGUraDQwMeaAgruyAMqbpgaHdT23yjy8eQRZKNxNMo544mZ54ti2nyh1CcmhNgkfBVuu24",
  "key16": "3Ce5YHEM5mPcQfPVui1hHomqH8GiYVZ5SFr4mo3JEdtMfyp8ksA4xCbRE9uJpX1bEKCgtzEiwdnmpaqChvWLXf4w",
  "key17": "5ur7hqx6LHQvZXVDfD4SaeUEJSx6H3WqP9Ubmh77TXJAqPLKssz8pi1ubsFSxbtXTnZ2TciQHX3zaN3p4ZU9Sa3o",
  "key18": "4YSzVGGpNRVhRaruWq8XgDJsbjXYcJbNj2d5sTop7FZo6C9h4nEs95sH8HBkVSf63MpJSsipGBhyrnRvj9z1ovzF",
  "key19": "MGbw72x6vdYhy7tkt4mbodC3dhR69N1EsoXH96xZFwqrXSXnVR7k2C11Dmkcmpb1fpyKJAXLTW53BnLSZcw6SKK",
  "key20": "gRKKWzyqJ2dSkN8XfPPFVRzCesrdHjge6tkseqw7nYay9q58QikReqZzExhifGb89pRV7Vq1v8NBXooEuH5H2rn",
  "key21": "5zKaTbW9BjerLRH3uK3K3ftppozUFLTspzBNiGxVSPW98Uw9BqrkxQE3FYbPe1kCASo6wP1dDERBn8UUx5KWm8Ke",
  "key22": "4gaFHeNQdFDpgXC3K1R67b2mywpD8KcFDY9jxi9LucPN7ruWWx1cVLcxXrEyMJxwjf6699gsqYE5ktrWqbwo5hKQ",
  "key23": "2738gfXSx3bL6kxjhXwjS553w6CnrvgqjMsbH9zAtKoA1tCizCruxeW7v5oTPpVnFDfPrjXp3z58zMJzcdB18CQV",
  "key24": "5E4z468AKjLXX4bxaf69yqwxZ7NaSPXJKvNX2HpRe5KL4CrFkrzqvgjkVR4NbTv2tZyd1fRx7ndiTu2bSWgpDvUL",
  "key25": "3QqJx4hNvP65YnjWX4Q471WiVV8HZhkR2b52aW1hD7gorYKTKZXKVwLds1aDxAVZ1aeYgv7iy1kiBgPh1Qz7WKB3",
  "key26": "2KTBMJ1YuLk6ymGRehGTtQezMcA6KmRiv1EtqFF9S44ZmHyoo89PHNhKDeCfJVYi96yS9FL8qC18qpTjbhyzReW",
  "key27": "T7pT1xxfhjgV2mXH9bfAJ7k7mQbqjbZyZGt314d3Bu1pVw65PwcSWmPGyQ59Vv58n96fs9dpLbknpppJV37sJht",
  "key28": "4dhs7e7EWyokkNSV7WrJzgUa45xmPCqtzabLvQ7z55SbjFeHr9JNf68YT1XSY8hDv6xE8XeJfTCi8x7YyuHoNWvN",
  "key29": "9JRCAiQPXeFjpzkydAk41cEFxH9vXuzMqUR9Jwf3hMDdimXWWcQhvnWtKEqGmJKZMoRNurB9myDqdWcEFqEik4Q",
  "key30": "21FkiN2C8rsMTvmsnaG7xH7gH2GPcujZ3JAatLUppf1ECCNsZ55Ax6AVzbcAJU7RoouZJwXQqz4VXSdJPFhKoQtq",
  "key31": "3W4AUQ5eEwtpWZv6mAywkyA8drGPWkJvpyxo5K9TQ315KunDa3bmPwo3mDQxPUyqg9wsaN4brLKbuD4cnz7c1crH",
  "key32": "5XHEQaWYCS3WcKRvzDC3YmC524eRKn2gYwC2JWgX5DZEzbuqBBY8y5wFiwC2a2PMvJ8mYnC3AEAUHJeDXsd5HZhg",
  "key33": "2i4y3Ux8wU8twmfjgBhhAMDwLR49urCKPidGbhf7XCPhifhQiNw71GJKEVGPS2GFF1T1g9inXnntYdrSKfi1g5wn",
  "key34": "4joCBCVJaXpBhoh3rC33cKk9br4iAWu9CHYPV49hUVQtZpvGAcLkVR7B4QxmjmNxmgZMkYuMqjpudDz4mhLEceDw",
  "key35": "5HjweQQTPixMajTDqwpNTEhbYbNVdAmHGjDoqPYB3uK7739x9gATqNdPP4qLNKY6EgJMaA67hQJkorg8saabweor",
  "key36": "61RZ7dKaTWsgfjJAWnkrR1s153g4qBZRgQJ7G67qPAjn1xL4Ee1q4Y3KVi9nCzSq1iuRSppX13n1XcvZSDjFyUNL",
  "key37": "4Tu3YgWuHhUqXUpdsVvGhjq2McnDxgAQTavk7959VJtFTwFgook487fcZD1semLD6R1Ut7AuYuszkvBt1F1YAB71",
  "key38": "4ea5WXcrxoRpie6L9U6eTxQPmx2biJLYDyjzFhAesKnQfoguVFzYeXD4TuvYqSw7uUn845UCzYZcwDd6Jvx17jVL",
  "key39": "4sP2BM7ogApFZ7K3ehAF8EAhRJ8u58JWLbs8nJKfLQxP9QktMeNQMYRT8di6meZYVDpa5gTcxwvAswSXKsmTd9k8",
  "key40": "4ZoWTbvVoRsnz8tkEXTT3KHPicU7NxXLKCLdvHVocpZtruDK4czQCHvz3RFkB4AQd5o5SGcuQTA9MRKerQGfjFdw",
  "key41": "Wca96pxK3TWhdmXM1wTrJGQ2rhcaxZBabTpaFok1XTcp8H636DNyPDzb9dcLgt4udPj86WP7zCqmGNk9WfCmN4s",
  "key42": "2QbodFT4mJyG3nFGw5Y84SsZDbntSvsZ56ofQxN3FcEZuJKANJ7d7t6kYUw74aYT2Nw6JmXiV3kK1dDYinfsUJ9x"
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
