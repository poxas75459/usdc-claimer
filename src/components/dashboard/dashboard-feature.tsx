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
    "a6tp8nBhxPEFqW3PToF26qB8eHE8AmqApaV4GnqYqDGbnAK1gG2GMX5shgdkWsxdd9cGur8xcmsjqB9XSisrDXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wytkpy1ynshmR7fyrCowWUsvm4jJuPKbpwacvGEB2jo1YMACN3ob933sbo7tkQWMN4W3ibmsfhdyyMzxXrTipRT",
  "key1": "2BryJPBJXVLBwegRzBDo3BDp3XuZx9i8pMWdkDwwvTt3opx5bWCcBWcbfjY7GLpgtLPUgVBhjK2oG9uTzPKeLcdg",
  "key2": "4Fp5UjEPxFjg35svM5X4myGGKUcqnhmvnJYRLVQRhcAir6b1GwHQD3r9CM7Yw38qhUq6Pa1FC2iiPSCkRYBgLZHX",
  "key3": "4vQ3C7VYgBRJrYv2Cpa9VHrMg7ZU9yCh9Huca5AjwawzVXLDeNDyZV7Lm7sBmXuSY9d9eWy8mnoqRCrZiY2Rz5J5",
  "key4": "5wVyzYjrCq8N8M6cWyc3s7Q8Z5W3WvCX28wCyJUmtbxunYE31C1rwTXKZPFUUt5LjqMG8ARaBVHK2ArMzYDRXVEE",
  "key5": "2fJDfbr8nBC4PgBv4Jz95Gcra39dngrb9SGq9JUqyceiqvFffM4X5Xhh7nKHHmo3EN1rTnVHrT81K9wLaAtVnppJ",
  "key6": "45oBChVq4YnuoS1nvQcbQ7C9tKWVY7LUCkyhkCHjCjEzpixC6gSx6gJka4w6aChgiUaqZpBJcactSBABR3g8BbBa",
  "key7": "2Qs61YBiAnsiU9wBK2kSCVqHWFuQ92P6hS5B8HUWD4VWUZHWGPZGVxvX7Shfx9m5EABXASTXTfHFoUMW8EpAee3k",
  "key8": "5JSWGNun7jhMMfNHqUfWUfMhSN19vmFb3feKSxayqmKk6Uz4wJzm8MgqNWgnzdzfxd2ojvH9fZfsTpxHKkaM1tjK",
  "key9": "XARiwbKzZbPZ2shqpFYjPoaHL2Y25enFDN5J6H1v8uuPxSGiD8aET5UpKdJKx7euBaz4GatoR87mrb4e1BDtJDq",
  "key10": "44i3HxEWmPEKsYjefyTwhQLThKtSuGVj3bBDDFEpjCZcEx9i71t38JVRFrGoejNm2edYkCtMGodBvUGdy6XUfhdq",
  "key11": "3qU91x1hpPzpj8RSBbk21EyNZcJkzm2asvpNTm7AfaMxniJUidHxAu1RvD6DEYV1QJYHR9mdAWrnJbxJoPJDsXZS",
  "key12": "3G8Dd6gdYC6kNVCuQhPeV8t4MQGPRW4xaGW61EeYkQpDomdtYm4oc4JDEjHcTEcFkGFxqeV5xjQPuLZBMM6ZK81X",
  "key13": "5eopF5mncGy7JodNTvovGV1TJfwuvrLDX3CWNzNvQZ3VWQboStPfPoxTcCPKPkZMJmKXNQAUSakyYeagwF5j5CiY",
  "key14": "QhyEiLVWZ6uBR76zTztZxBxBtabLm7CMpk61eFXReFWL3u7R31vscfKemztrZqkKDHVh7uKGLcSxEhX6mmWJ6p3",
  "key15": "zZiSKzrcabJLtZ75Vd45c3SULS1QuxcQsxK7mgeEUuKzUy5ycgWcoXESrRdFm95ChQUYDqVgyrbRVuSSTJiaKfD",
  "key16": "4bt7TdHsqDhU8yKgCNE3iELZERn8B9MLNqaA3EdRBnYxMdVqdKb4Tq7raZKr6ssmM9VvtmdtVLbD8DyRK4nm3vKr",
  "key17": "5ZaF8Dsj8bkY5Q2YTpZHNwE6QkvtXFaKpn9uhT8tQmhGbPogDTrZ3eVsN9duyZqBAxD7jLb2TuwxZBa4dbNomHXb",
  "key18": "5j69FiGCfBYFguso2tZLziB5LrdyyxizEDwk51mCMzX42Pg7LGYgjDQj3gohnh7rydKCknERCoEYUBRz6vYwvNEG",
  "key19": "3tV6hWhvvVrCrEHQURrET66qfaofYTHu6aoLkpUwqj8KGcEtbhHiMZPTkUPqmFKLJ6RuaEcqq6zXcVtPr6heZmpG",
  "key20": "3vRAaprxY8JAm8Rypb4FH8pEPuAtf6iAQiXeUvXTwoko8g9xekkmoEECwa9HqCXVZetQnymzEDSLoPFF6sg3spVW",
  "key21": "jutiPuqVh3UGqVtdGvv9ASsvWPuFQ7ZmGSyKZZ7qjDQky17vkwa6JcKGQm839a3GMrLZxWbz92SbnZ2rowBTGGx",
  "key22": "44wRTy4z5vFbBe4DG2vvnChosGjkScidEW8sAfN4fqaUNZzynPhjuBFrePAdhie8NSRtRoSHdHYqEhkbtdZMjsgK",
  "key23": "3n3mWgVThfTTBDA6rBdG1B5GNiJheWHBgxzoW4FPDh5dcG73h9HFQCA8fxSt6THVKt4mf3VLfRULoAHPPebK79b1",
  "key24": "3dZj211qHwveSf5ppCfwd4izMmEEk3qJq89o4VSBXVs6tFPQEWoAoDM5duFPishGA6Y8X3XjRSBVjQnZyu58uX9m",
  "key25": "2h9URr5YksMmRzXFVGJMGMWCv7DpQxg7ZtyEK32zKgijSuBoBZwWAPGy4CB6ZaFf2nwLb2kakVpadZXKVu4msF5b",
  "key26": "3ftdgKp8fzTfo5EyiDPkMzDwVy1WxQ965xoZATf1PuvfhZF61y4mEctG1rrgLxRea5ezW4Hn5VbtMcHwMPoZmUr1"
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
