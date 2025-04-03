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
    "FV2B5uiMMAgzc44NdcFtbeH62HPnwC9Rj7mr9K75xp5cNQSBxhbJP2h4r2uD8QaXPD6gnZkSyfwuJ74usbNAbtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kAsXPir38r4pfQ3ejbUgx1o3FVAuNtmRPwan5iBGh7NQ8VE4LMDZYBwZzb54jWHE3iyvHYMzS7EAkE5y9B1ZkX4",
  "key1": "5e3TnH3Dpkaqy36csWUVKG8nujTHYrcnWeYi5Z8j49tcX9tmAeMtLTteuExsNo7Bhu6g4jQnUUFCjtq6956CBbxP",
  "key2": "5NQbXNHVzxn7hVHop8xrr7xCsi9mMj1zFyN7WBFbPwCta598EumYME9h6rL629B21wrraJAcPShVVjwczfagFPq1",
  "key3": "3a2uhQSZp5dN1Jihb5jUUgN2Wyfdu1UjCsVGpjXGxPFn2di2NSizjPHovuHJsk3Lz8hJ5B8E69obN1T1y17gk1LL",
  "key4": "YMJTZKHzwU86HcYTLtFFLvQGDpX8dmBNaXkDtrN5tU2733aaatE7gzCe6aPiyY8gjPZePQ9eu5j5ovQGRLS6wNz",
  "key5": "2Lk35PW9vHuiUQK5o3EpWemm2Wa3gPBuc21dznGFGJWA66vuSkcajccn546hKcpynrWz6ue1B6prk7W9U75SZn8N",
  "key6": "3fUFod6GxajT8SfuETLhpuVd4WfgveT3R9HH5PUBpR7qKqqZ9pu3rL3cJBXSZF69jsUcqpZGLJYkyaqZ65Krhgnm",
  "key7": "5eV5LkSEecU1PFv9sDs2WQMYdWoHDDUBS7pfodgvzoc5uRvXtv4UA7ciZQfegi3kvtru3H9KKXVMyoEgdsmYFz66",
  "key8": "w22bioT2FjXRZzaQCm2F7CGsrvn1mcTfJnpaf7kixCzoEJ4eC31Qh5a34U3aSxZXiHzm3RV5pXhEggXimgE6oaU",
  "key9": "316qFgkhqC2PcqnU1mhon38y58fuWLzCQXikP2gF7v5KMUV8ggnexgorxn4Cd3KzxzCM9o8EdAEeTWKbTx6gvRGF",
  "key10": "ePoGihjDwSsszpg9Px2YYAkXpiz2kfR9GZjifeA9sNbERejndXJsFkZRCcXiWHV6TNtST8fEodcZuSpkqXzBEfx",
  "key11": "3hzhMrWCbVHmgk6tBGso5SFpi7Av5Rbycy6Hf16P44rrfE4HeECvRnpMVaWJYPeEVQjP2Xk6thL9U9VCe89N67NF",
  "key12": "5vziqbJbNJMAMe6JYaXKYCDv47drfYeiJwiMjM1HSA4ebQojKVeeKdYpcjVCNR2vfkpWxRzjzzigTuVocT5draqx",
  "key13": "4a9m9CJepHswPdDJD759AJyFcWMXP7bW3cQKgh7UFHUEU9xa551c3TEmDRkz1B3UKcACZABKWB9VPTKj6RqriNqX",
  "key14": "jzKE5Vg3Bqu7BFRgh1yE2ysmybCK9Qo2BK4bASNzJvs7wTgxuGxMBeT9nnLt6yrUKWMpF4PNeuUqbPi6idAZvyM",
  "key15": "47Jbc6TNvk9BSRbUHCaAaUe2iJbtFGaUzgkpVWYwG9QpSxTVB9nz43dypHNvyWAy1BaJGS6RL3GZRPg17kHZBEU7",
  "key16": "5oa3ZgJmrmeYyrFSitgzRAz34WLM7tp6CcKedThHt9M46QowhsGdxCBQ8jRPkLzyVdsWfWDpR4FUPimRPsGYWtzL",
  "key17": "sxn7g9q9tatYKwyR4ia1FFwLMxga4UGQaZvXANRoJtqetUo6mJCv99KsWiYdvFspq5sELH5kJG5SpnoXdeKny9q",
  "key18": "4QSProwRTxCWZX1wqAFUTQWGKrgJZSfLtDvq4tZYJzbiHK8veevoGuU6R4RLFqs2L3vvjTpM8nAh5SYDiTWHqFfz",
  "key19": "2dSpBCJS9ALVjKUfdqvnjLxe13mM7uHem6XLEfYgCsdiVjPa7YY1wa4B8UdurBfhhthZ5hDYakjP3TEggg62kBQ4",
  "key20": "yzisjEfYMRQqCVgPdfDYmVV6T36QpitkM2qKTHkkYJeJdsfDr9S9pUmxt4UsoUk4u4z4mNDWxsgpQv5ECf428VA",
  "key21": "4AnFjDu5gQGT2LzHmPj496ewBtHXJqpnVLG4pbgaLgeY5hS2w6TXX2uGyTrwGRgUvbXHsH1HitXu94xdpyx9auEB",
  "key22": "2fsBS9owACdjjcDF9LupFa9Q7nsBq3yC9vH6ju6PKruuAtoweKP1Sm1YfCMwwjVNRVvWKgLwrvk1suVQgk5Y6kjv",
  "key23": "5vs8Hp2SEK9Nd79X1uKNqQQWWZhdJ4Hc3aZxP16VnREiHH8Rr7fjMYNyCPfQ6bx6ZgsZTaei3mnpziaPP7nbUyMd",
  "key24": "3QfiKVLEaX9c2obogKNzmYGxdRiFUzZ3fqygH39HNruxxGj5Wbsc1YSzgs5qTgWGsGzzH6XxT7xk86WacCk618fg",
  "key25": "KmxwsXqvAhoTwbjQHXb4u6qnFvZJCS1X96fF2RZUNhsKcCwWhR2NN8FkpF8Ky3kr73FvtZ1roiN3oCST1x5i7LE",
  "key26": "4hSdHqX9C38uwCSYCgWCibwnvCPT7JHNCzRs8VLWKr5vSuSqtBfCSWUS36U9eQurXsaMPpkpqvHEznasZHwJaitB",
  "key27": "2duLGvanYku6NeYwjtCM3tb4VLhJB6HrecJprZ5eE6nGpUJqgAesQ7Hzyczyhq4Mo1EYNErdH2Bro5YwP1QaPB12",
  "key28": "5W7DmMBPzg3ti2UskJ4Kye1PaKBFBL6Hxkxvgcs3a3EUWbQ49pwZn1sqtMx8LcDFJD3QvNMxATii7c37yVZTu8Tc",
  "key29": "2uPY34c1EQF5sCjsC49jHtbVAhXmbWummkgnNKR92FT9KSxjJn1TMswEBg8fA3USo953CGLZP7RQF9inHUqGhYtv",
  "key30": "5oAXj3ZSGnbaLwuuJFaJf617PkrV4AWCkiM6r51aqFGg2c82Rr3NF4F5ESnzqfCbZ6kfd29Ks7GbbkbbKQiarSqA",
  "key31": "kDyrKtPgy1eq6wbDYYAKWEGz3xbC1e15q7yTXd61DKmzEw8FH3SMw2UvAdhAm3gD5LnyCoJFeMAaGPfSkN4DsJr"
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
