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
    "dRQ7sC82FYqBXNMR5TBtKseGtzvAS7GTErKsWg6wjEF783QDB7ausbCXBad4K6nmheu4jghtTELyiWaXzAEM4h7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kby5aLfD88kNeVd6f4ihAgta38zedaC3uHo5zAAr2BBwCAgcFgtbqv1LfjwK4mSaDB7oEhpzPy4ojUyhuS7Yp6y",
  "key1": "CAj1HSgVmTWupAzreWP9PMrvwoL8XrteYz1CwHX8pVTdGcHYE1jmDd8Q5BKh6bjR9Qse5u5ZGPYro3teNFqjzMN",
  "key2": "63fMjPYGRj4yN8RGdrNVkCjFmo3UA1MEvAdDzNDQHTV12vP8G3HbCxWxGqLa4YsgqDS8uVLMSCpYm7GjNz5PMfxj",
  "key3": "3Wiv81FcCUEQbsSPjt4NNyyp6NxQ5JRxw3y8MQ38SdN7XdDCb9LbGJH1xvUPXHbTxHhf4mb9CmWyEScX5YVjNUph",
  "key4": "5v2gNwf6M6VVPFDb3dHdaGsab7khDEe5ygT2WzoACp4ve9m1AfwNQCh68FqkzWBJhBfb3voYqLkGNc72pnnLu6Lr",
  "key5": "662QsnqRn6e1tgavZxzrJvshyU5NStMUTgqirBaNY2GGhqJ8yw7FE36fxBYLKY4gamZH4FL343BTR9u3SVwFjWNq",
  "key6": "2YrFjbsUB2hoX8KjwHcmT7wsvNrbA73L8DJNwQ4KRWLC8Y872NB4KJoXApRhdd2MSPi7eP23iVaAcPuoVnYPYnRZ",
  "key7": "jSE8nZz6ciqttj5zaahbitJqx3Wge7yNUWNoWJR8yejFpAsACF4rwWJeRzYqxJLxXXcmxW6WKa9rj2XkvcoTBLE",
  "key8": "4vJknX98eeiJSWRhrd5vtTWS9CTNQdr8NeKonGc97GHbYnsQ8HJAfQ82CwDetdHwgMQk2xzzeRemoYc88rLmoaQu",
  "key9": "4j76VJtWMFX3LEYrFiGAPLby3BvzNDRWgu9AsmLG4RDMJBBwDBCKepanTCmmKeTRnuzwr799BzaVXKtms8h9UEW1",
  "key10": "2hAQ9sqqebCsoXFRJtHr9qF1n9AyWPreUNnrsWKZfXLaZqcVaAxM6kCBeAVbVqnQ1afnke1CiBiQ5sE7Dm7tcBCB",
  "key11": "5ghUeYYEqUpD7ZiZpsaF5PFs64snERD5AG47cGM8kYmLYo5ENiPM8o58GHmP5nCcT4YYo9FcBgE7UKCTyttG2U52",
  "key12": "4YbVgY5Pgz1w5uWEeot7mbbDbtE6owCQA3L8nadHD7zeidXxErbZ57xgh9LBSLMm15kq2mtk2isD3UVnC5a7v8cR",
  "key13": "536teVznanTZ23uHPTT67f29GEjGxNABx7jvexMoTdgE53G771QFeZdLFSP9WocXrJnDFCSzrUJFDF44XehMQPkA",
  "key14": "4vBmB8mRVP6xks7WjoJ2CAiBCYimHaL1qn2JYq6ymg2hkHdXw6ExzU8piuHpCHRZEk5aCv9JyFGpGU5iCnfezcgb",
  "key15": "457hTU8dDF72zyY57nv3nRmpqEUMSL315WEztsxwnGhHVZJmLM87ASyGRMeUjza2nW5rd5T1Epf3fKgDfekXS2R",
  "key16": "C8k17KnSf6JbTRHGxJ1AKMLownPuPXALquEGrmHCMyLBMFBMtLd3rcnTvBRRSsVsdo8ojginLvTz8azFTLcsLQf",
  "key17": "2kbz6q3b2CzkPoWGsfpMGQmTC9eMNXb2GB6yuBypTzVixcTyRRjAFFWoWc2f9FhGJwkYnoQqTUYhBzW9jjwKnRCv",
  "key18": "3MKE4AFNYCfu3bKpXymXVuFarqS7cNwyAv7PkkDFurmGhYsaaTkSiQZv7MsWC6pXjCEwR5WPFDqX83c5sWkFkR9E",
  "key19": "4uRjEVnfHiHXLjm5992Ueo3C36M1BjHUCy4ZBvS3aU9vUbcNT8yWKFp2EDdacZzjM71u1NuMMDcPWWbnjkPYgPEm",
  "key20": "22pimC9Cww34ojkPbVpWdyHbX5k7ZbGYAjuyZmzP1V2NsxLUjkhdqbS393ikdDL4DkjPcxFb2zSsVfs7yBqibRnp",
  "key21": "4wpMQmBsV4iXBT2N236eXwSc3XpUqXFvJSDnF3FZogjSEHxmrE4v16p3s1cwXLPoRkYHEmZGsDrvog25XJf1VYKf",
  "key22": "5c3owKpqFGM8eUtbaZBmiy5JiHiqJ4EWD7kaE11iVBru5Eigfqizjf5uYXapALNaZRNuVLhQr24Juu1HMv6qPpTK",
  "key23": "3CR3uPv9zJnh4JjsEgZhiu3mNVLeosc3hmbeoMRbfMEWKHQApLzXBrmMUkQnwoE6DYTnCHNky8XJdxbamFCphTaT",
  "key24": "3pyAig4a9UrU3YBC4tEx385mmeze2cteghfUipkakcuMpK2SWCie56JNT3pHfmtbT5Eizvn5fMEpcoisqPfozSny",
  "key25": "5CvkGH1NTdhFdF6Cm7TxTKZuv92BXAifMQ7va4nGmyc3bwLFkiu1nJMzdHL2cACdNM8zevBK6qJ7S6KWXwKCzQYy",
  "key26": "5oCcYEdkjYBjc61GfEAkDNTSWge92MEAKDiTbTPoBvMShPP3KZFNLhnEbZhDDj11omeGBJ3rAdqKBkKPXaev1QnU",
  "key27": "4R8YDAD4V7kGPQC3T2w2BZyahc9exY18M8Y8r5XhPoCDXcq5VRxiYx6gN6jM78U8XHAb8TFe1MpDe11DLiD4Jtqb",
  "key28": "2zzJYwzvh9yTaL8WAvaQ2QS2EzKedGR8YRkwkymqBFpwtTVPGg7Q2RrAvJszY9ZEX6znBzDQqMwXpjVg4FLqrdDk",
  "key29": "2BFyY4hqJLvsuV74XTcnsjxRch7KjnnHPfH7DqvcJg1fRpKWa7fKx22UAiAbpZj5HpxuDQYRs7J9VhigMR2gFjzM",
  "key30": "35L9cXMShmDGkfxqTRpCQef3R92M9sAksr1kJoKmx5PSpnjXNWir7G57E2E1KWvRV2vonuAtT1oMpf9hbDPPnmH9",
  "key31": "59temiwDDYYZZpRJGxyQm4KRunSBvjR7nNtqNy4jVdXpbrypwddWtEm1FfqiRNWCauLuv37NEiLqWtwT5EYJhRqq",
  "key32": "3LNLVcvBjrFBcJ7kq6Q8f7GkYXQ5uAFLhtxgsYR4Jub619E8Ui6CA1uCmG3roWkWoUrEPxwersE13cw8jQ8qUAHM",
  "key33": "ngVPjm74Chbo7iU3qZMEBecJ9BKUXvtVGdHZ9nqKvyiMgQ9Ngyob6LHMKizHVmDNMUwfa9ggdXAJF9qCykUTzzT",
  "key34": "cCc1EdMSpVECu7idUFxTDXX4FEyA28VCHDxi3S15WSGtmkLs7hfrHNgtMoK5CJ5GtMcis7EmpfMQMiLAow2JmGT",
  "key35": "iDzXauoH1JgqdPyndMiVSQiGpD8kM71yNRz7jXwUsqjcmJNzLt12dJhcFPGRAVm5DMJV8z5PZoKbvdG14Bu96Fb",
  "key36": "4o3RH9QLvgwumbgZb62NpLDoMdFFKnM6DPvFE5dqhgkwh2GijUse2RqyJkv4t2WkHeggiwTHiQr286ABQiiTx4zy",
  "key37": "5kATPdFb6hgE78XZBHzLYRoi3Wkp5s6J7DXXxVVeAeA2FaVavChc7d8YTzaZ2Mc9ucX6GGLGPn2WAQiik41YAev2",
  "key38": "2KpeighSsz3egY67XCdML9HDqpoWZeEVGAww5ZmDUPW9UcpzsLNoCmXgkYaVii4fLDJuVFQt3U3EBJepEXZjvaK1",
  "key39": "266VK6chDpm1AhsiTumT4ngqCgojFSdGkZJUg2zPCo2XAvbAeNig3LJCJLa3tK2NLEo3nrMeuxKDzjREWMqTRZjX",
  "key40": "3Qj8jA9eFakfTAvEmLLkQyZ5R5PMxF35xjdUKheFfZmtagTz32NPEsd9zqDsR1CWLbdgCPoiEHW99zXciHyeP2KX",
  "key41": "2DnQGtHV2ck4KbjTbaUTimPUqknsaK4n12bMME87rXT7PBQMKahEHvq7JLsYEGx8Sq1Qx97yvyUGokME2TPvXioG"
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
