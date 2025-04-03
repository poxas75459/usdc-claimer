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
    "3Q2YCRbBq8VZfCFyJ7EkzsncGmSBVuWZ9CVGJSRUKzvHGc1eg84J2e7BCSCkHPFYdLonQbDQhJvyCbj7hLArgZmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2niEr3JnLv4KcjANehvxeNnEwaF2aZxtYbqMSa4HcDCd8TUWLKZiFFKYujCSxkf5yTn1KDoYTAbRXTHJ8htpVcQt",
  "key1": "WQJV6b1H8EzHqTYrpM9SxobzKhyft7kvRW8RJRwoowFitBf2P7fUzhqoauQ9CQF39TMa43Ldqudjqs46hdZKPdf",
  "key2": "2BdGr31EXex4JYczhEr3BkG64J8vdoDf16bSMYF8pgArq8pvrKbxZDLpa2TCd4F8rHsKZZaA33WQjw1aRf8UKPfH",
  "key3": "5bXwXD9cApAtJFnLMmJ2VVGz4N8XAnvNBDCXU7EPbrUtzzzmBdE7v3oBN4vh4wQSmf1Cb5qNuYGS9gs6RrHxCZ6w",
  "key4": "54qae7pofdzjSQWgxwLdqazU9VgomExhjwbmd7u3tANCtY3AkCtLYdwXmKJTyPbQTutqgKmicurH69ZoGxQqvdb4",
  "key5": "36XuYyZsdToo4fpNyXgHD2QJBwSksfGyKW4QDUGkdaMns3wFdN8DBfc8K6AhZMZTyGHc7osFpWK8dUVGmtdvXjJh",
  "key6": "3jp7jDt6mG5MWVaiHH2ii1u6k6gRQ4YbwKMu1wNjNWzQYTT6kW65BoYPvupWiZo95bJmYzxTsSci5ywEtisRtnoz",
  "key7": "kVJNeBsAQXZb9p6EDZHHUd7UpbAqzfoGLe4CEqPjz1WF7YHzr3nUWoQL7JfUbJJFxZhNRKVoVeBJmEavXYG165e",
  "key8": "2eYuKzPRY5ctuRDChAyFbhDjt45B8gHdGz9UyJeDFcqdREJmorfcrntoQiiYjd3ZbY58spexU77PyWCLrmQLNcvG",
  "key9": "498LtTLce4TVN63A5HwiGsmykd45c5JmSfBuYsKtA55YWmKD1RnJAAu6vAjoZGWJ3A3tD215Ve9NfknA3ox8THv1",
  "key10": "3zxBvaTLow6YnvZFAkz9DB28rZUbtySAjYLY5n6LE4TJZpbE2pjcbhzBuymptWVGP3EnPiKVoGiVBVBYYtxVy8ZH",
  "key11": "5tZDqjecXoGcE9UPrExav7pHT6dwpZYBVWKzMfETxWoqy46F9kJSt6RZVb2zRCuWHhPWWfWTy7B26WEyEJheJDuF",
  "key12": "MNZNUva7xdY7uozop2uxGxAFMgWgYH8CLy1wBYgL4EEsHavXQa8wbbLhsYMKwAfaVAT2Mq1t5xnwoBx2TP4p1jk",
  "key13": "5JdQHs7VaN5bpTNf3Jt9LBQVmoJR2LnCtnLeqfc8bkaFP5yYdE5xazcJi6tj2K6194JPB8NNfp137DfWdhdp59ny",
  "key14": "5MJQRyiVoRSyXC9BEFLqN2964QyuP1Tf4poWYfkzN5EhbDxLVtiChRa8895yVx8mMS9XL5JfXkaFPbh7HmEEfeo4",
  "key15": "2s942QXWSapqsSXut51LoRT3JkrzEdyZSkGdWAG4qXvZnYVZ7MZ1jddtaiKKLVpJvz92vCP266xAceKPTf9nGLg2",
  "key16": "24iDKBo2TdbCK4UxuiRcW3xFVuZ8zrGjdxyd6byMwvXRgzk9HDeeUU88P5YjEWxigqXY11QEqaQJmLWTGHWRnqCU",
  "key17": "39JWARShNLvoTKk7CYCC4HHNxSG8pTfS3k4tKGeEtYvmMsVMEGfhfacvhHy3b76VUp4c1S167GQhpGf7QvVkV4e6",
  "key18": "4K3LbyfEVWow6kZFj9goUQaFEZCgxiquQLQRmPsJ6dmbbJnsSbfJeJArxTGDjtZprDgYskEQsGAFFgTcwvUGVp1C",
  "key19": "4yyYB29s5HovmRACm9DLerfc2UzU2sfsuKiExdnUJQZHD9XSLjahbc8mJwdjXKRiSe1kj4akPdwXZgde2DRKYLM5",
  "key20": "36SfudxPyvxLVcWy7bJAu2g3aE2BvLpUyeqwoAD3y8LEwQZ2dZVsnVCf2LDhxgECtncm6sg8o8DTDB4knZweuNQ3",
  "key21": "3zPRZ5QXEmJdwFefjwkzLRczWzZ2rcR6m3qnNkeEJGn8TQBTpGs6atmQ6RRakyTcChDoY8udoS3ctWwUyvaTWSHk",
  "key22": "24BdceCsNbFtXS3AauAyKAAfNECrtendj3x9F8AmHouQBCooKboio7nd3wvwWqdwCkv1UUYGpsWbYLZC6w5RQrM6",
  "key23": "4rEWE22kRAeZkDcP3gkNFLjNUErkb2uwqu1WdpRNPy4iBHZUx4p7VcksGqT8acWXqgcvAGBqmUyx2DJEA33FbH9t",
  "key24": "9VcSZ9aSR69Y4giobN5s65h1aef8LCcLQDF4Aq6kdXVfo5E9ut2f4skAb9cwe2oTUcU7zepYSm98w2XegY9nLMs"
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
