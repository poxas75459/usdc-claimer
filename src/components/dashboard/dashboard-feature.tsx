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
    "dmp3HVsjcSkxA73hwMDn1qH4qjiiAvDQGFmEMiAcQaXWB91FSj7Xv4wxZ9DBhSk5wuNurw4wSqVbZFD1d5dWzgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9MK93hKYMQng3GVARrHBop7bfprjhD5ZHEch9rKcHXn3xeDzBPxWToMWPE7qsj6bkbMDYPLnxzqw1pSpuocgAv",
  "key1": "2FkTzBKFsfsjfyn81QZLfdTdxHRwoXAx3j2t9FW4vRFnuBdekRrmFjz7tueXTgc7nELmmMAPtUZfiKVwo6dpd2Ev",
  "key2": "3Kfwg7knwEv3Y1UmwiM7WzLAgQGDCbi4Y5u73EoJtZ9NHcmaTN2GnCW2Gac7VMqa1tq31B3sHV19oF1bbg9AT7MU",
  "key3": "57osTXdHz3b8SwDFHMVYnKZd5zutYBSYNQ5mELXHETZCYrmx7jSUcbHeN4vvyavT7GFsWYGjhhiFNSfGLSjbqh1t",
  "key4": "2xAuYaKTNMTfGLJck8jhfxnrcbhTgJtu5LEz8qJXAKLNdT6E26Z72EmuNcXW9UC479JpeTBCjrBpbZykABGstMxG",
  "key5": "5rMbHNDsNJXKSXpBesQg84xkCRZxg6XC6QyrZP6bcdn8nCC4Y1LWeSinVtbcXPeSteLuBfc7oFv3ppCUnLtLPaYq",
  "key6": "3bZGDNwUPEg2r5SYXTXpjmA92mXPhDhzDVoC212K97uiZ1kZSzJX9oX8ecBA5pG8CTzAD6BVgVKca151nR1tFLSJ",
  "key7": "5DS45TUXgPLjFy7WVZnJ3aEdar36rY9MGiiTxfJ8ikguBH4Vi98eCG3ckE3orcim5M37MzttHh9AAYkW5Px9bLR5",
  "key8": "4YGx4ZDGCsqXfwQ4xtsfTorvzbU6iKSZY81D8K9EbUQeEsoqWWs7LcnRCJFKwMHV8124beATWzhLBjHXiu88qvCv",
  "key9": "54Ntd4KKXDgHW7YRVEfSPH8fNQ2QkGdvjHkEY4E2pMzAVZU1knSJidk4TVapc1BeXqd6VnzzW2gVo61XnTnHxhCX",
  "key10": "2o28za9DL6VHE3JeuPMYef8PG1LxPLA1o9KqhZLbhS4noA23kkXPsMMQTQ2DEPovFktYiLBSZGmnQrAd25hg7y3s",
  "key11": "5qVUCRUaD9iEgrzozRBRMYP2r8QpSjBSzxhczz2sWBZQVJPigVqEPZMWHijTDrmypYxRHcptYg7DJAnPjRrybRBU",
  "key12": "33Zbbqe3rGiFn4gyFAp5wiAdJu94TqXkAbYATcLHFygVBe8X8tjySMTER7mDEXt3YsiE8ENG2wzBt9Mv8TCENSic",
  "key13": "3M3wC9YaUzwti5a7Vw2Yzd66GzXghwjsqjVuzjwAUjhCxSm9YRtUvFcV13XvcHnfcizMHt3jWYx5PzH1AnbWVDpi",
  "key14": "4dWwTkiujjDSwGH2THexAkZ9VvEVMY5WdTrRuLZAejp7qQCfgTTkqwWNvk7JYB21g7Tw3eNmAep44spPHyz7s5Co",
  "key15": "DUHxB7GzG92ZnhEXSwjRod3ssWKdohRv8cmTdgiipyrnpL1JNbK6afidjZdLvnk3v6UpurLRePVeAcq3FXbipzk",
  "key16": "4kpovSkbBhoqjMqz45oVzaamNJ6Gze26UaxaMT89b1zCSAa6KYZ578UvJZPtYbLXcCiRcgsBG7uaAyKZeVzocpvv",
  "key17": "1tStVrsA57TMdg2GxC3aMEauSk3C7e1ebxerfDrb2DcTQBMu8CL4LQ7YLuFeSNT2uAFyRBLz6Mow2ZiPevCV9A6",
  "key18": "5LNFsKDKCaJqV2ox8A45R3biFuWEbdTY6nViVErNWg642R2G6hE76KuVKCMGYzxXPmJTRKt1DNbz1DFNYWkZVNtc",
  "key19": "3xyy2RWRN21uELGjT6TN9ye2XKQfWZ4UzZxwcuagZymqnDwczPdvSGZGbSiTgQSfuaYSZV9eaXqSfP8f2LAc8x3T",
  "key20": "3VgfQXgRZRbDd6aAw3ApiHpkPQS3Y3wH3xSuAXx9e55uFtvDbAxVcLuarfAiCtcgjFivfciovC9TFzGmReX7Qe4K",
  "key21": "3wgvNXXXsximDh99YrRGsfXcgz8AwBYQ7Pj3Hf7vvm43DH3aZFpR6ZGkX1PiH8JSKtCxLXnaVnjX5jyPXe8coFdW",
  "key22": "9UjchqzQKq5y1qTwrn5fkMXD7wqW7hgB9Khdizhu7Bu7EQtdXcXzWsqsEjt7Rn7xrqSJsqE31sBr7p2g7jLtQmA",
  "key23": "dq6HU4KaDXX3GyJ57fvP9qVdja4mt3Jg33jHgdjwzXnWUo9SCGawyATCQHSJgSkV6TMrSZKi9nEBFc7NsQprtdz",
  "key24": "3wNKAQnxTCGmvBqbLiCFbA2wv4dE5gcSXUxKp35PCwceXbh61wGBgXCQ2BKjw9UEo6WuyZnkW5jsDYaUFGGQqm8k",
  "key25": "5ZtRQ9FtBGxehk6WW2jaDzUNeoBggR71rMz7fQusahtmiNK4fFmzEhrvnxXtqmq4rmfhD3jyfhn5YbN34JV376hD",
  "key26": "Q4ZF1DwR3NX2UHNoKB1dGaxGb1k15h9bf5hWorxNH7x8wLtbjzSfJgKnnmAo7VCB4s4HvDnSVSqXoCaCLHW8GgJ",
  "key27": "pmx5fi4XyxtedPWJoSd6ibLfJyu5eSfFDMY6aq8hwrTYwYH5ZESVzKmMSh1NQDXXHYXaurik99aFzRTBvoSBuKv",
  "key28": "5v4xu6ECt2Ye8cQeXf6LCtmJ3Y47CeYAZbv1dFoXUj8GL9CR28fn6NzVDxwk3VGCYUrJDkZ3VSMYoQVi18n7ydrY",
  "key29": "5ZhaZiooHs6WPTjpCbgWPFr51NsjXk5Efsn3gRiyZ1G1Q7tcagKEkksKjE5Aqw4CtkkNnJ3TEUqeUjvQhxMNpqkB"
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
