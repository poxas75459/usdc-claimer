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
    "342Q9kT9uipBxD9J5hxgN6n5EESCZP5eD91gp5K5TtwnBvM3owFSNH7xwaaVme3ZSYkcF9ESHn5F5BMrap2CQsNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XJ3H3UuKXr29XSrjHnHxjRirHPw5JC21RooSNbhgSWBA6zfeaU9uKRd41uCHjKNp8U5aZGL8M1c4qW7RF5atURZ",
  "key1": "RspVFQEoZ4LcMJ9QucbUJfTyZJtefJ3v5wSyNKinhLzJrCwtpFoGGA6NUzLgcbqoj12UG5Z16NMaiBRMQszshxj",
  "key2": "3C6HYsmawigyGX2yDb24MkfsnVnDxaDYqkWXSK7RT5DknHWdY34zXFWC7vhqq97rskibcaf9u9WSbVHkh3kCJFbw",
  "key3": "5zFwMvKYoRUHtmobGCDfQk5QvknjFinctG8UWtzj1kEjiJE7v33Bn6eTSrB1dwQ6Y7ZXfjKhBSRjTFx2Rkpshnxa",
  "key4": "5eVZrjinRMP4pL7TYrPP6Qejxvqaketha5U23bpjCX4WNFRKajsjJ7f2Ct9g6R44gLXUW52eNCL1DyicheHXLF8J",
  "key5": "49Y3tgZYp51ja11FKj6XxdQWAhfWgsA6kdEyuvTP9PsaGLTx88FjXxzrh1KoPnvJXxFyrcsHmJdUiXgbsTYaiviT",
  "key6": "w5uHTuV6c3JZ6gxwojUj8Lmcr7TRNoxDbwBa83PEtaWNmdTCmiF9MAZhfdKAuspeTvcDWyhrzVkUkbqkqhtYsQD",
  "key7": "62qHD2UCpcbc6XjCfPCNELSqXZJM881jEn9vVTXtSK9nUJAHzzowfsaZcs8Kp5RW82X2n5YQsELzvcaMc3nQhCmZ",
  "key8": "5ftvyHN4LyixfRAxHZEBwTfHJW1V8GVK3G8bXbS12tN93kQZjEnYStSPceiHHUrrATFno1PLn4ymyTUSBGpktwHa",
  "key9": "3SpnYicS3KYm4RYbLaeQdC535SngGvp6JdEUS6MteBhjFbU2ghdKwwrPgpwGFwsZyDMLPKVhCSXvGsLNuXBhcPdN",
  "key10": "2TNds7cdMtHvpjDPBMaVoQEL3RAntaCcPbKv6yp8AUEej7epRadUDZFXm6nUeVoGp8nZhF7HRaLyU5XFQGfKuF4M",
  "key11": "3Xq1kmVZrysN8kqSSr4yU87BJvvr6ziCzpVrwTLizCZHr9wJJA3stdKGG8h5zDRgTK5P61SUuHSQVtzJzh1tcPMo",
  "key12": "3hXHFE54oiqhX2w5yG29NAh3Xv34rbQBdFqE75EmZbkbrJkGVhbM3YaAftYxXrubVZwEvNYKGu9C8Syz37K5Yscs",
  "key13": "3fz3hm1jTMYjQ5rhXikhCQBSb5QsVwcV5M3wUHX1xVjEnfQxAj1EE7dipLzPF7w3nHcMuSgW1SeJeuaLDuVkZod3",
  "key14": "fKYWKy4Tk42otuoR7L4uArD848TbFrk7DG7u88SxB3ukMJ634eYxuszzDcQXzp9mjHC4qMuSRucVpcjFULvy8mZ",
  "key15": "2fr5CeMD9hikVEYfM6p5vABcZdV1ThYTfnae1xmSX6nQxzMERETLihb5uC9RshzjNJWrzv4T6vtCMEcpq72TxKuJ",
  "key16": "39oYi7Rba26e1jH1EKYQ2Z5rxak2ddiXxooYYPMnw72kJkxLvPt9EpjGxUGJQkKNXU9oVR4jTo9pyKzaDsBfqZJy",
  "key17": "27yWgPvkJqUy15ZxJC8kyRxm1WNWDA6eTYUvccm9X9Dd14JgzHhzv38guCGJWjw5aNgjHMV5cYCGqpcdX6X7EvYc",
  "key18": "2wm2SVrHnQV8Tqh9oRHsMiqDKTiQ1q17RMKFhhPB8pasEAqF4aM89Lo46342y6aTRUEGuShbCudaoYi5TUmWSckK",
  "key19": "5rSpLYbmLE1dcNF9q8cCaFdCDZhngay8mcsecEEGLct6AmkGyVQ1mG5MzMNrczvfeWFhie2vbsxRqJDAEmFay51T",
  "key20": "3w3878eRibjiswwZhiqmgoCcpDVN8EkAzs5TcqcVsr1FULzN8pGNBuL7fKdd2hU8uKkBwrh936qMY3K4nbft1hNo",
  "key21": "2LJzuicaqVuuTqNzHYe59LhfpBTtyy9cJLWugSCexVgES5Q8ezP5ifWiUWh914CYdx3YTLviBrzV5kexJ5FrUQ23",
  "key22": "29NbgC2xhrxC3ScKwH2B7LKCv47KKbWdRhbDB7kjz5VpXWMcb4YoW38BA322BcoDu78xKrShBm6SpFhQVZd7qtCJ",
  "key23": "3hRsonmoRBS9qXGLeh6ejFY75hLBZVNKBTxJeYGNqveMEPNbsg6EwsvxZNjMYsejyDp4JfSMBxZpnEov5KaUXmDi",
  "key24": "2x9APAbY4tk5dEvaFaoRF6pp57ST5boup71jhZ968JcxV4YcMggMV8RJSUjAZF9c57BeVz8BTCpHMc62xstktLwJ",
  "key25": "P7RjkBcwFSzAHK4Twcim99yKxLk4AJn6GFFPw6nFtBGAhDyRrNGaVotw16XyKwvj7Zxrzo7J3oSbfCNApQJ5ifU",
  "key26": "66NfyrxRun6UyHkbCoqgoN9d2GFkSsa4ZUWXEFgdJw4fBHYcA4omRKwwzAUrZ52inCFQZ8bXqVznTjSGWLMA57n3"
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
