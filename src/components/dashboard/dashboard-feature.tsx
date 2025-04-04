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
    "5k6o596agFveyrGEmAW9ZUKzxkmgMLs3GTTgQaFs13Zi8oD5w7BiM3xuLagoHEDCdwbYpz4E4uxHP5cpWK1Gviy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rQ5BUu31htMLTuL7fVuQwcizx8cLiVj81bYwDgiE3vaQ6ch7aSwbyZnwtVSmaUgxhKCg3MtARXdtnZf8u6Y5vED",
  "key1": "2TnNBsF8HJtjzd2tvQjKqb1PAm7tgkCeowbG1ndhW1z6qufiAgJmhH5cWrXp3KvV33GqPFZjxtoTUMXkURsVMq5s",
  "key2": "2sTT7vxawPe2qo7TrhmVpbMWhsRbZL4dUbLZc76puTGRpmSLqy9WNwJ6HD2NhvSSmx7Mn3ZCHX1pnVChcMXheytZ",
  "key3": "jD7v344Ek9ucfAuy2aenUmrozMuxHAYW1iXnydu6F19XWB9ytZUMeSehRXWXeB2CzGHxbVQESBjddmGfdXEBKic",
  "key4": "3QcH8MqYSjNA7GQtca3ByBEV6EDNn3FNganoQGBpL3CkcxCNByWnFKj3pyQ38VkhyufYgrGWcpcRwktMjHcfhaU4",
  "key5": "cBrvnnSRwjLmaNnnoQMu7BKrYSPLwHNq2dbg7hJecdvoZMX6Kuw46mSbeFE8WgF52in8ftazXqRjy7MyhKs42VB",
  "key6": "2E9fkj2Rkwg3BJNVMdmHsRidWj8TBTfhy1YnNvmU9bGmMXx1JqTq7CcMtK61n89BYiv3zRHZxzDtSoBev2HHxZvS",
  "key7": "Nf5LLuAtaoofprq1JfuwDXzdmJxmKS4qDSc29AqTfcdN2WVGhUo1b96af2H4xven6Fm99gV63f4PatwjtdNJQFF",
  "key8": "64cb57baUphcHPpyLi9EmT1pxPUzQjw3Ep2G4UdTVai4Y69V9bSEgAvuiY3qyVg41SCQfje6zhTL7p26rSNTc18C",
  "key9": "2etwcqJwrK4erwfcHmYqZ8K8bcDhZt4muDayJgWp82kf53yGZQ8oUXgSHKR8cDFxMaQvTp9burNcNikMfFVhXX4X",
  "key10": "3xppwTfFg9a89Zz7bS9MckCoyDM7yV8j8n7k6cJHphA9X3i9ieCWZkqhxunvoNZ4cawucMy1q85AnFHhBwkZEG95",
  "key11": "3JfSu7UJ7ctEMt85dAXBWohXv8SZKv3FGWUcXx2zb6hwPNrJvZNVHYhfN7LARcWV47sS6UJyacqBY4VnRDPFuaW",
  "key12": "5pPiPZvXd9Cg1Tgfxqb6QhokTZGuQd2twAqzp5cmA8uyZEYbB8VKTGbFKAdMe5Ao2u4SQsyFpbm4o69CEFyCiupu",
  "key13": "QFRzyyF7gBof84uf9iuGLH9bFZeNrrYPsb2jF6Be3YGV8sgfxozhV96n2KcXFJG9vtpaKgAHdArYh49TE4zSBqQ",
  "key14": "48fW7HYGMGtQ1zDu85vStUQzTsvDXm7b6CgJx3AvhEFYnouAe7sizjXrrzatMbwL7nSTXXrb6awhdMNkZcUUyGVZ",
  "key15": "5qRzHX8z5gyzRDcwYbfCaD6iyMz9HSyhj52WmSwnRo2XG5sLQuB7svFXsdsA5vCnKDjiVkT8bXX4QZRixN2mLQb1",
  "key16": "5gRkSJ6GfwC95njAARNijWUbUknvQmm8J2yuYZF675HRswGJDgtnThVrsUDqzYy2Fvmo6Mjb9FgwgAd5Md2v4Whn",
  "key17": "7CGX3ztfVv9cVKU8WobarVJQcTYrCJjmajRbmnbdbKJu1DGZzDKsK9k6epjyQiAHAyHghCdwFDbM9Dm2y8kfQBP",
  "key18": "bWBgj3rUxrbbK8Y1Z6xL5RG3y6CiJXCCtoatNWK13FgxXt2vQRbBJ3KSP5LyGt7X3Skg11mqLqd3Fe5ZQtXjJMC",
  "key19": "54E5fhSvtLaQo2MsXR1LmFbMvLhFCRoGvLyNEHfqTrBMTvEzvZTsuCpb7LicaToySQuSVi6iNajj24su4XFnb5Sp",
  "key20": "3dwP4jBy1eRoNZZUPBkFBwsBBmFhYtT24Wes1cA33HsgVRma15CL1uyNtpEyTELK6uU8Rt1tTz3uA2siLZ1ePpEx",
  "key21": "4zaKM8RTQsiUXwuUkQWNruMpf8iB36jT8hssXkKND76CFsQnYwMPwrinonwSmHET7P1nZLDw2j32GG98ABUabm8W",
  "key22": "4Bh4TsmRo9eHYCPHsCeadX57meFtrcbJVaLU81pEUE5RecRaJ659DyBQohxJE6CFauVTacwxLcBYuHw61ByUXgvn",
  "key23": "4bwach79MBsK6qPF3CeGVEWJ3sUBt7ANkipL9e2HK5faBRo8z271hwuZ9PLyBTki1GXRXP8JnY6gxWTBmwF51cfw",
  "key24": "3dskUiUjQpbAA2qiBQdyfXMLPg4xdXAKsjCBhn1XZ1QMXmX5NrVKK9azjfav5sUN2zrL4YZevNbsKDxWuLuzfoeV"
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
