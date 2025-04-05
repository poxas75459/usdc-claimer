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
    "L4NpS8q4pXQWMyFW3ANsL8vYqCWDr1obyjeMUUNsZQ5TsnuwAB6DEwzLoWj7kCcMXQBTF66cvEAn3BNNhg1uxMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RzZckwxFjgwWTEa3zEmCQbN5JLmoLW9XFNntPDVGbzCnMmRZmnVxXkEAW9hHpSuETCAB68zFF33eFYxhZE4eTax",
  "key1": "2paTyhffAsNZBKLEccPM6Ng1Rpy9tVN9s6Q7nkcnrscYk1rAE2BeamRN7rFo51yJ8X9Xpj2u13s568MBpmHEGbrD",
  "key2": "4Wq3Y43RhDVaB6zc6scG3nvSDBYHHFWPGwTXucBX3YP5UxuiK7wz4PBiPpRcccoARtMgyhzx8Dp262fyRLauapPf",
  "key3": "2fCA6Nu7UaEdcr6AtBJgGEuJEnoiTh6YZXuCAk5yr3wTeLWea45x4gyQxzssK3nQsXZKNRfmUf3mZt4Mky78QxQd",
  "key4": "46AscMWmVcoMPMsNDdNqnCJmkzU3szG3tjf3yCmHhpxR7GPPNQVohYR1XZKXKxd8CFtYzoMLPvvfEReVAuSAuFU4",
  "key5": "3Wf2N82faehgy37AYwy1b5YYQjBg3VMLUGtyanhzFuhbNy6GQaUzyppQeAb1jE9Lo9sFAnknaVY5cNyjmooqdpkc",
  "key6": "5ejf4cWikupRcLB9aeYzwgDA5bZ5xFhLQMmY7ZoTqmiSnUJJGKL5UsEt6nszGPQac3BsXRg2nPaAVUNSJPWpVxGo",
  "key7": "4V4AFKRYEAGvhbjMWYjrZ4xQorGPLEX9czkV1FgWbpk3Cheb2TvUaagzvVdJDB2HbaYNJdxyK85saKuzrm75e9bo",
  "key8": "49oFTkupyRaCDXMxyrZbNbAtg8byJE6Za4DadrUyHKu3G7YjaEbE8gFc9woVqzDqk6HjBoy5PdWapwoRHfTbdAxn",
  "key9": "3HCcRn9T3rNeQLJBEq7pon4jBp87n26a7R8bYL9AiC5cPoVBmp6Jvft8zggh6QY8W4aMLkwPm9Y3FwhkpUKxwx4q",
  "key10": "eeaWpSrBcMVyzGCcFiDX6dqTRfX1RjZcKTjbw8e6a8zSgqbNTRfLnJp8dfLT45LmyJbeLbpeaZ9DKL87y91J1YN",
  "key11": "UFtA9RTQLFu6AwA7wJWudUKDerxWixToL3cvmKuaQb9ibj4CP5XwHGSDqLwoNFjWXDhAsbLGQshwdwjPs4XBStZ",
  "key12": "5iPbgB1aTHet6gu6AZZunU844cthRL12w8HSCCPYHokQSfi5boxxESy1WLKGTTPePzn8LmLbhC4uEFfbVyjDqP5T",
  "key13": "2PAbHBiuwh1bLtewsR9UyyZ7MA3g6W6K18bbmBFKA37W4Auo42MmbDPdSboYie2GR7Sgw5EoRpv9znCyPknYgoZd",
  "key14": "62pNR7Sgn7RVg6MjxQzyTXhX5TjMqx77KfpDt2aEmhLW1ZKVffqpRQn1jqMkViA1w6PYmAe2NYsEXifNFkVzwVnD",
  "key15": "2zJX9CTg9Q6GfqCnerFWaEAMXfTGLSywVJs9XmfteecD4jc5MFmcz3cASn6YJtgTppzP3v8pQkP8NKbhkwGzB6Rz",
  "key16": "2rdRnzqNAty5SGw3fdBupEc3ACsejycpoFShzCqDHi6USjrYQHLZCLyQYj22cxyr8CgKVngkrh6dXXAvHruHy4eh",
  "key17": "32XuQbo7BYpuKWGhdTCSfhb7FKWUB4Z4MhuaESTYvJJnPyd8WXnLHuCMgmoykJcxUtJQxUJ7sANLPQepmm4T6oJ7",
  "key18": "57Mp31Q6s8NBYx86RdsMiR2diXoJr22z18Pkh8BZXfBF7B9x7bt6XKNxTByfiM6wrHoGoz4MTz7tpuGSJxxMedzQ",
  "key19": "2MNgcWRcu43d7H6yFekGQWMmCGv4uTRTCqz9wNhRiNiBCFKvTK6a6AizrBpambEML6jwzDtSWoRczvnJACScJT1h",
  "key20": "5Qa9gzKD2xMioBXbN1N9i8daVzaGiHLt1Lhsr9kwB8zhsLwuGFrCoCgFnRh6Jy91yXppLR3et43inKjHgdCQ1N1S",
  "key21": "3DcW3CM73q4FujMq8yt32m3E18cSUHc1WgGtKJfvSvdJobMEUJ3TmtEGjMzt9E8LR1WN6xHYT1Qe8R7BvbyZQwUw",
  "key22": "6dc8rpZa3uWpAaR541Ex7gBuVRA1CmNCYFU1pGL3kXqa5PWEKzCpnaHvoef5TubzWGdsFiyT4EzHQNxyDYhNvsH",
  "key23": "3cBiCBv4i9HEMRknW6Zwo1FKu1Qhg4EuAD6BiSEHRFtBJQXbV17a2SRXnFZbuWG37EB6xHuoADUzzhGGa5GQf7uW",
  "key24": "UMAuobGMsp652a1TD3urqVVnFHnPRLR2tMDVL6SjNEJaLSfGzXP35dpf4qEKK38zofMvS3QrcVUrJYaXJoNqMg8",
  "key25": "WNmU5zZzcYDkQJE9doHsMhytz5mwuyURu3pSBoGrTokagRTWKsdeshF62SSak1sdAuLoyvwymdYrxC6B33WZVoR",
  "key26": "5WWCWcSAR45wtJczPFtmpuiLQ5Jg983qkooFp344TZXo3qN1p7ggjZYBebLfd8gtpXWVG88hN6icmqSWwmRBuQxy",
  "key27": "5LnnSWq7rNDVL79G3BZUz4Ba47hmYAhJVZehLCi9az9MBo9cqm3umrvEWYsxf37mLMaNtqGwec3EebfGGGozKwR7",
  "key28": "4PX6FaUgw7An8X2GB9ujCi5XfJj7WFiwmBDYDK4RFdT9FFw2XMgSgf7EaLyH2faPNdA7MvJ2C2C5sCkcBXrxGu7C",
  "key29": "3Y7kxEFqaUbpf5bvoYcncfvKDCFkqGuKba4LuDunTuX3m6UBgwgVNkm55pG42EzjZ2kCFQdKJSavxrS3561pR2mv",
  "key30": "66tsh3niF9Ce8ai3pixx86ftAVerqrihVkJbDeyeDy46XpCpSTkogV9jnMdctXLmkk1kZsdCwaPwBYoYw2MwCvkd",
  "key31": "5MLuYFBLFFHkwH1doUVrXR8apfC4SZwDWYSVe6VwkuFVUJoNW7ME2EksA8zBQ1Xv1TWG8uCtada9qLYYe5GZcMWG",
  "key32": "3hXXW6pYrXdmcGz8gThAuEJJEPd87iM58mBASUwN4XMJLkdYPrkVEzJ3knDJ1YV1CTMaDcd15uRcQ613P9NJrwbo",
  "key33": "3MLVQBqbSHP2urDYFuLsvtqYmMQdEwXhrstVGH8tP5UtJgGa1XpByko8QbZuvBvGZ9LUHMDv2y9ZvDrmvEsZjEEV",
  "key34": "4zgpRvTaJwAG9Lu1pmLK9ZZumjGWpJLLUqK9WQ4TeBmm3ubVn2a7gTTSEpd8B1f4nfxmJgLfpoXiD4kjh2oW4TFv",
  "key35": "291JsigGAYkcsnwECJaDzbJxBxiLCAuVwnwWPmHAYrwQaDQUm9WW1ZMHxDRNL16dHqjwxKZTfFNRy8p3gErj7ifT",
  "key36": "2pseB5Tk74Uj84nNyZC3PQcT1sfwr89hPAPJgHnagtKd4F3FBYoaNRUPUAKGJnzkhfLUy5P8RMKu8VvgZZBEyv6R",
  "key37": "Fj1HyaDzLQwhLVBhYw4VKmqJTmz1XgQgffMsFKY6PWp744szHEFx5cwzepu9xvTg1i1CnrvHHKwse8RXChsN2b4",
  "key38": "YtfRxBmsAhFgYrjHELDHG7wuFPHkjkf1DjE44qfSzTCMQe4bTpUJ2Phu43pzc9PHbuqU51Ls5E5jMwhfz1g25Vh",
  "key39": "4hQHpwphM4HWnka4AkEGqE65awiZXkQwZGFbwRbFkjkowareBGnr6UhE2GQpHtmJcid56k2pDbj4QfSFh9RomaJW",
  "key40": "57TYTUH8zhR63pDfPyomQ4739jhURKMifAXaRJq5S8w2BZ9MQppZQNZGUCxq2a2dXBCKd9i4wM6SBTpQ4Nws2NmK",
  "key41": "4pXCJuNYFYtPWpJk6jRmohUbowrUVtLsNudhtK11SenuEgTF2kwDG5DtVg8oRktgVMYKUD46yMapk9YShSZneRNt",
  "key42": "AsMZJaJoXAE2RfRAvkixj6VSiQKHKMh4RMYmfoegNnTSrhVGYgbSWENpKuD5H1rPgnknNYRShCTDL3MGRKT3cJt",
  "key43": "3gSZxgERtxpLqaYNaGFPJAJha9Jx2JkzJumwDzLgM8vrzEL4zCQSa9BZLeb2LJaGN3SE456zbqkYAEShspNgA3Rn",
  "key44": "2Ucsmh9k5gbnjzFLQjNzSykKdpm9WJRKQDbsD4vMKU1a2TXVkMGmUBWnUUgdTecYYKz6Fy9c2tKNNZGCeSA3q5rN",
  "key45": "35TeRWMkbfwcASmxTquci8CfGJfi6oheVWniToSmZ1JCNykvwi9s8CmJL8kv5hYJ1TeckNzfwUJCZ9yUyHHrAAbm"
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
