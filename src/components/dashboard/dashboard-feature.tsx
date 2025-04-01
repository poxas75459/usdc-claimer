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
    "4Ht1iFnyNYEzdEsHJusoArxix6PeKjkWZjsahDq3MqjTPvZopmAxjpLU5bcALTx3jA6TQ1mZ8gc6X6srvWNoFwgo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2krMmrNmcimXWPNpXbkKyuXvXzoRZUt6cTssU8sxsBwMx3eGvXWAon9XcrZj8CBJguAv8ctvj9NFtr4JHezSLhfs",
  "key1": "43f6SeUiBGBPUvPYkaYjmfdfFpmuoAeP24n751nA4gW15N3YNFUbL4BtJ8dmJR95qUb3RtNm6HYxgcEHHkB7K4jJ",
  "key2": "41BoZR7jME6XVSmbGDnMNvTFyc6YcoDeqi1z5xb3KxnoygrLo7LAcXtKSbfgPz6gsaMcsyjUVPTYfbQakbHQ2WDa",
  "key3": "4HMPDJLjxJJ3mBU46cgBTkwZKD2Teybragztb5BJbmS5MVWVC9SRgakPhv88axnXA7KnzVER7S4zfYvjKRCPadfc",
  "key4": "5KUnNNt7FPeKi32L7gjeJwJWomiHu8AqHei8Kb6iYS5TQ33WRnCkrENt98sSuY11phsVTpsXTmWXMo42CBkhnbpu",
  "key5": "2JtaGhFq6siiQgqUZ5tBSkygVyovgAmW4xxYrATd8NrKU3rmQ5JQWeFoTgXTDw56fiqv5vKbtMFszyFCi9hJ4BuH",
  "key6": "294EsxyBJJ8njCQhXzrJMgEBgciNcWpHcW8xKUNJhSTpVMSdwexuC6esHPS3pQMz3ayFpcFsWoCGxKaywu9ThHDJ",
  "key7": "4tt8m7L1Q1i77sheDWBHUggoWKWwuE4V6ii3V7T6gA7ywQuhUdoTsGdrqR4mcGT4nyiy2ZN3gBe5wCiFycP16RZW",
  "key8": "5v9HJ7viCagWukhnp7mFQbcCtX7JUVj3P2bUcX3phoX7LAPXuUwjxMMxL4cj1xmewRiVVpowQacZUXBt3gSK6Ce",
  "key9": "2rgFWMM9rxRVmQ48MC7869pL2usFGy3HGeM65DgMabCiLAah52kdHdgxrs8qWawg8SQTMpY3bnmgYHWyQkWqtjwC",
  "key10": "2CkeQXv8yJPUiVMyp8RcqRy2aqp5bQxGzYj4mH5MsucdmJT3bNJ8z4wrL7Tix7pvmFbTzKBDMesexrDLGFxX3F9q",
  "key11": "2fjrNm4LJJTMkWraSQ1wQk7638svvG9ZhNMex4wvxgQLnVhtT88KL8FEEfz1DTxzXQahp9ZD8g6QHpSaUeh2UU6m",
  "key12": "5hUHhbqYJ8mZ8avhW6B67gtaFyCEjsumxULsQoajUk9s2QDsTrn1zMFzUkdCCnH5GQWoFgXKDwjcTwPHZJ6x4PES",
  "key13": "2UxdzkGfb2XGGLNkZNh2mfg3izf6VN6duKRCB5qfXg8Z52uj5geTN2zigMSS4uaLVSrGkNaCyC8uy5382VZc2DwY",
  "key14": "58yLn5Jb6sjqZDCtLTQafDYhBR9G3SzVdYYPQqWJ3yA6ch6eCoaCmgC1qqtT7FrP2qD6v6PioD9mkv4NSERAdkr9",
  "key15": "5grnjAbQnRZtxmGHhS2jqgjS7VKFAkiW7m8Nbrv5ebBTPXoXjCYy6ZSXNsA9azzeMKK1LsNmWAsKa4TZqLAvTEdE",
  "key16": "2pZRw3xqEzR6adry32TmmXNbJB4g8pKT1aWnVVDsAyvCr3fQrCbDBRRNNCTc75tKCqDU1pzTAGU8xo6fzn7Dkggg",
  "key17": "29HubEFdGCTfa3oa5yu4jSVm44qvrEQA4xAvcYy3UDJEtwDUZnNgRbsai6VMRaF51YKHaHzDN3UvPyL9HD7mdQ7V",
  "key18": "bn4RLHBUedX4qArSXvpc7ZugHDYrLPhVfjqaCWHVNU78uUWrdehPDCjJHWb3atjbvhp14yuF6FvD7aZQDg28LpY",
  "key19": "3Rqh2hjUh4ZaP8JFMtu1SfqrGV391VsLKhzTKjeV3zFxdxFEgHxM7sTXJSKkqmCnxDL7wMMekJuWYTw2nLcG2UNb",
  "key20": "2ZAiqQkYiyeS2UQy1YzRsXTGGYW16ANW1sne59MqZdEDAkPbqwSfbArfNHd3XwWyY1FdfmE9qMowUyy6udkBHbZs",
  "key21": "3kjFV5fi84x3d3jmsMNx7P493AATG12R7THLH4kAbh5ar5EGxr48Gy3ubuAzQtUWjSi4ZcYSUYvQDZwsQHNvycYz",
  "key22": "AbR5LrG93AG7cs3nbUSGjv8bE4er3zSfZTCXjz2vVoJRP8dLuyHUxtYb1HmeL2DTbT1ZJeM4EHge5ichHvpenyk",
  "key23": "5df9JP1qFrPzSFd3Wk9itDPr8vYFVRXvd8rESN419TKZWzeRjCGuqkGXGTph8aop4rhXH4wSrmv4iSGqMRJ7VWeV",
  "key24": "2jso34oqVUA9EPyw3ZLtz2w7nPY7WVjbCZDkh4HhGnpUGjSyC85pVH822yvH3P28TkZ7Wd9fYxR2e38hns6Ytd5H",
  "key25": "5fu2oqhq1EDzT5s8BabBz68Aok2bL34LkaMdV2ysLMNyYZptsMcgpA2YZcVCTuLhtdDTy34FvVpF23H41GFFsZVB"
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
