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
    "2qZn6oxQ1kgFZEhWHcGg8nyCCNXyyhLWMsZhmvAL5SPfyWvdj4MhgziMKjBraySvySd2AFLpVgLGkNrpGikRGFMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v2hpxtqic4Dj9TTfXfAJz8LbJaRdH59AqV5NDpcLrmKtALQM3wfMg74KqeXkoh2PubuRhMicrRT4g9oM2822kqY",
  "key1": "27WJ2UY7yiHpvi4ubuWnKqyXyH3Wep4Dyp45oWXe4yRZAhp2feM4HiTHJNFrJJJrEnSBHf3hsnM4KirSJBY1NDjw",
  "key2": "582s2qa8Ctng1jFpso3ovTMTLb3AZnaCdwVtJRtvYaCxCdYoijVHtWpuZbjBC996RXZu1LNradPCLBNifDXfw6pS",
  "key3": "4jNdkE2m1tw1pS3KKznBLnkBJB2p6XAmkPbJ18aee6itfwAzRMqL8i8vrKi8dyYJsjwTs58oaFcTsgTgmVzpruvs",
  "key4": "4cPgyz3cwB7GL4XJQAKQaLTeSPiYzdWq4JwdBAeCAuEGvpJ5Qcnbaynzck7jBUsKXC2bUbZdTygH4jScrqdHDTaA",
  "key5": "3AGMKr2XFef46VrWGvsCbDSoZPGUXWFqDYYkQiYYD4rvH9CPmQSBNLp3bhUmZW8kRpEu2mdXMDQGKdLGvsuwjva8",
  "key6": "4YZfvZjFDSKgf5ayGvEaYsEZCgwiLyTEavAj7DsJLiPRzhiNzFz9rAkKRyPLvDEQELC3kfX16L6zx2PN3DMUxXJ2",
  "key7": "5NQwJvKdYSY3y9YWac6gp2LabrZ54ESRaVXW8ctWaVBhaBmXcQX73s2i7zk99AKahLirowkenzFx5a6EQyNexSJY",
  "key8": "bXwwnjxHuxhBp4ocxqz9bPrbMoxvT9QRe9FKw2CSPeWRfPXV5hYxApqXvnCQ6SyQuE2A3efh1hLFiq5vCTJ22hp",
  "key9": "4ZNDAT1tFxc99d9iMML9HoQzBVRjvRGrBc3CgQvNt74eKKKGDPUUFgt1PZbXqZYqKLrvCy8Sxjn94TFxYNks7Hsn",
  "key10": "vuY7ovQ6iQ39tW85Ntorqp5S4W4MTCgj7Zh4yXZeqGYgrPRXJqujo8Df3ofQoTrdbPJumf3GTzfHvuf2ESCet3k",
  "key11": "5k6d4cVwPRWd5oxYeKTDCEShAJZsPTAWqYrjf3yzTBQg3yeEiTQRpqygv1HKK2ADGsDPjzXQkkLecWd5PfcpN3Cu",
  "key12": "3no5PGeaAaa6Uz24RaSgBhzhRNXvKTF3PWefySBesqigf7hQkCjDkC74MH35YFtpjTzVH4DmxnTCHmmMWDnwbT5J",
  "key13": "5rkFwskRSnHkEirGjPX4vCTQmYUXdCMLEXdmEasdeTz7LnvT4jre5BpjoroBtZhi4oZZXZWG7pvrDPfXkMESAw7G",
  "key14": "4NrMBeSigfzEW3U2io56vZtzH3VGQdtgWFtSsPytUK1CMJPMT8asx1jLnGVdLARoYSUmjWhSqqrnob75GobM2da4",
  "key15": "4Anf6zj8GvNBoNaSgDaBSWC9jSjdNJptysGPQ6vMay2rruNX26MXiQowuy4aYjaEo1Z1C9DtwxLRiVSbYQUYZ664",
  "key16": "2AXDB2xVJf3LdegdXEgA1r35KttxsnatNmLJbeMa3eU8fbZrSSqJR9S8nzB2v97yHNwAbMnyMYhDewX8ax4XhzJQ",
  "key17": "44dSCJwDLz8bncLKtnBskzqSEPXdhsEASVwT2ZVnjSMDRtTnYspv4Bvt7LviNBDTmhASbU6fmkFSj8ruLyFLSSur",
  "key18": "3A1pJAgLmpQQ2qXuvKGVM2y579ryzcVukWsktA4XohTu1C8vFYtpuWiifuppfCqikPsHLAhQKLsPrH9rXcTgr8rL",
  "key19": "4UCT8ocQ6ugpQYB1C8i9teSTN2ZRLjQ6EjrSBCQPsMg3MS9RLywwTqRiLRDPdmddwUxtMRixLN7Menpzrk8oFZZz",
  "key20": "3mHXgySb3U2snvJzr7BftWhRzHwgSgjMP526E6qkN1VR4XyXAEczk7kGLe2Dk9dmiEryxoAgoy8AW224aRwjPrJK",
  "key21": "2Am8zA5jW1iziiS5nzsY6mPnAYRW9pK8An7EFXFf55SneuFyNRi59QcLyBR8Ama13NcjfpP4YwgWF1p9kRssY32L",
  "key22": "b2WromXwMgTxsEDGNUcX6dVEkxgKxZkVHRsfc5LeDcD358itepZT9QGhC4s18S5LfBVp28A4gJ8QtMBpoi4Depr",
  "key23": "4mkV1iVkV8NSwn44d4g8ZX6ZcdhCkThNhpH2haJX4d67Rp3Mtdvx5BM4aohZVUkDKvUVNaGEDWhHhAjdvmNr9P9q",
  "key24": "4TenDdLkfY23ytRts2dzFXwF2mZHCPsgVNMaWxHfBkpyT4Fa6JquXjV6JAnMLtavLJkQ6zv1VjpEZQJ3FkqWjvhM",
  "key25": "3d9mfNfA697budem23gJYvNcybnTFmb6ikbTetTZ6S8fR1YVLSuvKKFD2oYHAd4qEmZDgsnkWSjZHbWDK4sZ5VWW",
  "key26": "4WFMdr5fHJTzfhv33EG5TohwL5yK8ZSxoMc2BTA23XKrur2hTMBrq4oB8YHhNTH2X5CWDFPH2KYDnXMhEdaam4DA",
  "key27": "2CWGXiYEADVXRumifWvcYyUDSgWoZzDU8ESe9euU3TTkZD9g6qiQjhvhvE1VAgjdD76FFBtKmgedbXSwpcSAVZgu",
  "key28": "4VhwouxGNdneGmqrmEaWqcAckMWrQYhHwzfGVobCjW2xmkcshqBgxuRtnhAi5TAeA9U5VYJtNb3fDKmUpsBE9RNZ",
  "key29": "4PM5NJ6UXxa4bB5DCjqn5FPUhnoRvcoV1ADHY945a8nZj5EyJGu3KkRs45Wy9T3exxhagxTdAiF7yE5oWYLezvrq",
  "key30": "4hm1oBao8CeWxuqjUdsz1ism8MxhiqJvzJj4c2FSy4XCg1g4aqFJvh7HSVMgZ8NeKLyDhA3LNMVGsqQn7QELnfmW",
  "key31": "4uJL16eyZmstPF8cPeRdHthrJUhByi4TBGFa49fFyNT35JeSZBuAhSAcsUJMGwwC3K7fn7wdyfmqHHTT5eeRaYUA",
  "key32": "4dD37PG8W1K9UUvBb3VkU8EMwmaHTrAh546EWsqNkZdsvfLyT6Kkt3MAd2Hy7Y6AfhoK4zgpfEyifdP3YShc8Nnk",
  "key33": "4kQPziLRgCKkBT4mUhdY3P8EcdNsRyMzWKJvAbAXQzeUckEEQXUVjd8EDzh8jDrtUPiapSTzmPg52APR4DyS1iww",
  "key34": "5TQmBUaQNr6yczhgG54rDbNJ9YPDZosywWKWHyE9rMj1zUgGNnkzzzXtn1GAZJjrh1t4e62XzhtZXXY75V5iuWKg"
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
