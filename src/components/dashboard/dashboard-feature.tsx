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
    "59TrKWtvwNBzy31MF47hMXeNChDFxQDEX5EAKbJJNpPfkKGV5kCCDPYMQ2LLHY47s5hgHo5CpX3xDD4Sjw6i91Sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66UVDRgurZ23hu2Gug2TZsoywunrADrtvmWto6srKumANs1WQdyKUWX2Cm7mnQCefCESywELxbt3c8m6AzVu6tjq",
  "key1": "33b62zjCSvo7VMSz1DWgGHRo12Mdp21tvf8MdFRbh1excp5B8ZwEURNmLzf8ctKYNZfQt37zwMPGrY57P3Yh8xfD",
  "key2": "3yQuR9csgZtjVVjLGh9FuZnEND3i3hVtnzKxranpRHtrRxur6DaTS978CiMrcjUeUTzh7LyLDPzP3FaF9donGU7x",
  "key3": "1FDFofBGcVE1xk1eSXhwmF4EcyWFXrapSnRp8V5XRovczwiE9pzhPi1Zn1sL7HHCjX99uBwNHAjjyDFGm2AtqPd",
  "key4": "4viU16GrnmSng8UZDC1UHfYc7pdewyY7W2Hcf968xcQ3WkhzoQLqJfjZqCAbm6ibRpByfAwJPxsVMRYgCJpvEteP",
  "key5": "3jfjgabi2NEtmwVitwMciHRrMmux2E4KevSdLC3ZX7B9XDAHYQ69pr4Z5NtXnyjzsHbmfcabsyZospvPGxnR9guQ",
  "key6": "otDy95ZUZbVWMJrTqP1Uz3eDTacs9tZsh4k9xmY2dgStz7zVjgahRizzy8sVHrZ1NB1qG6uNWsk5xRz4PwYpcB9",
  "key7": "vaTnK9EwDyynKM7rxWjhwpoiJtYLJJ6TKdQkDWvnyi3yde3i7KZxdicdjj3BVyv2mTXySXZ6J1pbDXHGQJroUqo",
  "key8": "3keDJ4mv9u2fJBtBtMA6AisC8NB2Vn4StCjHvWDLwuMCkhNtP5XMgg5k4yfbnBRwouNEooux3Vv61AkDHSB6qYec",
  "key9": "275Z5qC3aVKW1NZHFxtWVze7dBYceHRRd89vPEE8dsivRCjnVZtx9eD5bWv1pJRNyopmAMmMfmTujKv3ZPhEbU1J",
  "key10": "3Yg8f7QJ5Gu6NXmTzAq4R7bKrfxsEVPdhjpgTLTWg4va8tKJFwsAEFBosvNtGTLgrMg6Y6S3RqPFrY28LoRA3wq9",
  "key11": "3wZw5Lba5WMyYRTufAzvS8zbXF1nnqS2e6tUKBNPxV6r3cakLhAkcqKYU6TkYPsNtbEVdv86aT7f3dqLwBDTPjie",
  "key12": "4HAHZndHq4WzYczU5NKCX7L9vb5txvSJXQdkoFK1d33QwUacDQyW2TBYUSGtmbJhG9t8C86v8Sj35aMkxX9WzhDh",
  "key13": "oTDwS4YYuqdhmJAtPbhZGxHUqUASvFbdU3t5f4c6WCcGjSSy3HuqdJmoV2tGbDsNvzDnP72ukewTtGk8Zab9btw",
  "key14": "5yLVraDbh2xCJExzjqGTV4W8At8oLTfqJCBAZBLjuWu61RGxeJTG6XDVuLRXjfExkbjRgn4c9JkTMCJf9FMGAiYF",
  "key15": "4ti9uTcRdSKXcETvpHtMAWGBmF8ibtr3Rnhd4HE4HtDvWWnkGJuyFkzhMZenkfwt4TPsU5B4KXmR1wGNuQQ6esrp",
  "key16": "529VmgYh8LhXHnrMrzJ33CSFLjWEp892h7nXAk6DieC7BLUL8FM6iFa7W4Rz7yJe36ndJVtHbxY24Ten2Lxrvse7",
  "key17": "3RqVEFPeSRXCQpNiTygTDgAuVD3nq37SeWfczVg4eRhmGSbZZqP2T1WeubaNz46BB4wQ9sWqdzzFGscSJ1Dmy97X",
  "key18": "2xAJNDoi4Pcfj3nCcLBm3YkwNTZ6tqWk7jqQpuKywo1B1XXWTk9aXRCvK6L3t3i7vKNTwojCcA5z9todXJFjdA4d",
  "key19": "RDnS5e3YLZoh1E2csQ4QvHixu6F8PTviJwdRiFsVQ1NwsHmmeVMnxNpk3ZkYZTh64sbtaY3ksfCREBuLxAMtuPn",
  "key20": "2pZdYg48RehzSksYQtz1fgMBR658ZwF2as51GrehCWBJizeiLbEzUsmHtFLB7ZZrCP1Y6hoGLQ3PRyjL7m98CiWr",
  "key21": "4n1neqkfUZencqo4BSBmmnKtVSuiwL8nStx25TZqEcCrJo79CP17ezmD2L6gCewfZkRk9UydRFd7cheyCam6L3uW",
  "key22": "4KGcoQqEZKn1RPS5wmXbH9VT9jmV33vrXRHaPraeSS2F7N6q5eQABU75N3BXVij4qXT4H31G1fwqfJxVVq9Yf1r6",
  "key23": "S9odVjaWDwYwP5sMaLzmjn1DNSnLg2k4Z5jqRjiB6sGmYsaGAyoJUBYodh4RrjHs1N4i6fJL8gmVQpvno7ggw6Y",
  "key24": "5oDi6NT7JhpzDoMsQHLZW8XGyxj4cFiu1Gt1kePLy2ec1qF6ivir6KpEupnmRzmPS3VBmgjBQYysAs4YX6yHnLPq",
  "key25": "2oHknHhSxaMLAYweLz3VFU1MCnznh35cGpFotBqGW4aYi1kJ8aEdo8cKZREpajYV9uZTepyf1HVaRjTvS6ei9qLx",
  "key26": "48M6jY89Hswkgvsqvpgy9mosBUpSYsJsPYj16nCUsxXfUthuX9BfQpuFqj3n6xfzGJp8gBZJxLm93XmGbJJFyztz",
  "key27": "ppt42mh3YWxGG95ufzRipyV5Y3i3zNskCxEiQTY1sPV5EPvoTqZFPvjERn413MUJ7HeWvKM1GQv3xxKBfgJx1Vi",
  "key28": "64AsBxmno7778tbg33QuU3ofTxJe1QzWNwiJUpLA1d4PbgZu9Xod7MERomjDdk9FSYW2ReWfvBMN5X4G6z6miy88",
  "key29": "2QuAUuwuNHiZk8f7mz9TYw9nQqRBiQfqsf9SdQqJc7HtsuX8G5Sjt3VkhPiEpdGGspGaJaFqdE1GqQqNQfHhxMUu",
  "key30": "48nAuxtjPppwqv8fcqLitnSjdMYvR6ngvuYHyYwAsq3guMDmDHbd3PPt86PkrxSKVdqqTCNrwuFNA9bkyHtjmYt3",
  "key31": "5hQiu4i9E2Az9hLfGqwBbdko9F2f7DzSn6PA8VWaEcBJJRXZtfuGYS51YsddbT89SZxp1RwBgsfrpX5FSrFdCfEH"
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
