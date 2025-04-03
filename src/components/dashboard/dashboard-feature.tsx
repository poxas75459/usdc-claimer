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
    "2xHC81eAi7qysSraVbHFyJngZTqfszXMAha848oFJZLEhmojKytk2vJZV3aUHq1vzhRX5qyfa1a7Q2jJ4f6d1AHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rfPADg6pYzA8PpDXf8SQmEzZnyH1P6VKWGwamDpUoEkC9MnrWPiiu4QsvzMjfupeGHJ6rViXX1jfzstWniY4mUQ",
  "key1": "2GputEFEY2JuxG27HfG315vSwBoa62YDZXRySrLH6J93CRrBbdozx2Hk9mvtbxiWhKT5ZZABvQhUazYAZPjXnR5H",
  "key2": "RQsikZ3cB6C6tVGTx9pDsf7BNWzcJ3DUtq6vj1AcEHhGm7heMVfnQLPGiDdT6PZhyS9gK1W4bx2oz5sKWC9LsUC",
  "key3": "4JzMf3znxeUai8TJjBRJX2pKetwDSzaEpVQx8yfEh8b729pCkPUbfpvJZEeJPqRtUEF48KvLM3ZTCjiqBhv4gcHP",
  "key4": "5AkfCEzzoQd2nKh8wVXYttyqUtYe4JcXUTBg3k1uXEb4v9JjbA1z86evyfrvmKjio9eYHCEwD6eaTEWgtvHiWgMV",
  "key5": "2VwWbx1Nmnx78MG1UtRSsgaTjoJheB8KTFEyTAJQjLFjLCnaqfrF6NLKywyExawhxK7hxyzfcm2cvjvRzm8Kc3nD",
  "key6": "4zZasW1K4PFMKQbf37bRoQVEzS2ihJr7D4FDD1nzUMC8XuyHzNnMG2gQQ64SLrKb6nr1pXVrK7kwhKxLTUX1QpXh",
  "key7": "3GvPk4N5hcYgbxTCU3vQWhEfCCKTVLQKSSAiMhhsvRHUTfypSCQERN32NDXmG9goZ55xsjeaHsrtSCgQGLaXCPjJ",
  "key8": "3tZKTmH8NSDhicu5mK84At6XcRqf9GDsnwAsbr8NqVto2JXy2zDTAxuM17FTKaUNXEqkwXoyW2M8bs5QBqgaB6He",
  "key9": "623uQKkokjZnipZyTV92xCidW44AiH4jxpWFUY9w4RAKfZqQbtNts99vPW1XfstsRsiVdc4CEDpUVVWTT4TbdS16",
  "key10": "4R4vrYGxzVxwmQNbyMM2CEuaTmo5BR3pgci12sjQmhCzHz5mGDvbEUn4urMQ4BA7TaJpQ6WeDhQ3TfDbryFB4gEU",
  "key11": "W68bNZiHD3Aoe3DwLYx7o1u5HBQkLuW4r3BC1dsoNqeb4wy91sgLmVrPrAk76ZrAbLqLHoSDEPVnXbMz8jdCx38",
  "key12": "4QzXEEh65sST9Hige65Ww57E9vCwyU8GUaUxCF2Y64cDpkymzywTm89XwbuLaA1pDACBWGkvoaVz689csQnFsSHQ",
  "key13": "5BvfeMkt46EbK34AvqPmDqAo8hZEhhG2DssK14fRPFpQ8QgSnCSr4jg3hd2AK8uY55HR8jiVmCQ5328DpDR6hf5Q",
  "key14": "YgwLDbt2N5HMTHgMttMNS9r2UZiZ53gT1GbRS2WChctcemVDQZuhBE7NaUEvcwaWdcAXFSymHAPyD4aebzytBUv",
  "key15": "QJ1L1qkwtvEXhrX5t2FTS5cA1GfB3RgC16saAewmUCtRbUx64NRePiNpyF8SkKV2skN7P5mJnaQXEey2DYuRZGS",
  "key16": "NYqq8D2M5Fn2kbKjjNBuaCe92N3TiWEqUHU84eWxiTspaKoj2fTibUBafjtp7MzaMk1HJBvJ8aTBuLyNN39V3NE",
  "key17": "BAsVQCufHk4Zw4hotznn9F8v31AKXdZp3wWMCfSjHAALRw2h4upwLZCJtAAneKYPzWTiuvoAA57kqxcccT7rANt",
  "key18": "RfjugiTBjr4Z6kB43tXz9AJAoD9Yy6m9zLJNybPEbQqJ87foGRWjfydfz6BtCuTxZJU7qNpnoBaREQ1n1ovrXRB",
  "key19": "3BsMEKGNxtanbpAvTBqZanyXhwKENJdbJHugBnxWrcRUhArhoMkcb4cyfCFCFbtvHmwyKbhJpdCFdYHB6UM4gpUi",
  "key20": "2U5eMbxnGjRKd7tuUBdjFnb7YCAkF9uweCfSvAfHs1yfeVTeTVdzoY6kEYhk5RGjvsokgFVJeZyqLSRR5Hpgknvj",
  "key21": "3nyobFXJ3YLKjgV54ZeFmRyTxkVoBvb78BpFHh9TJdwD4v2P4rhxtptunthK1LEfEXTubL3BgoprPTfqCKJaTxpx",
  "key22": "59PEfDzJKYn3yQBkLeJpitNw3EJWmpSP1sXUGsyoCmNTfdC2qH9pZzfPXwQvJSVQaqgG5sKRL6AUrpMGk3BCpUs6",
  "key23": "4woxhZdteQZJSNcDbcLyrLQ9B1ag4tgeAPGy1ZytZQJz9fyC9GyMH9EBnWKtWtEnVRUr7FiYy6gRRmGbcJWEVKjG",
  "key24": "3g6R8NezXRdsJ7LysXVaADZaREVLaBTGBd88TRHJKZJxwSjngDiW1MtSe39sBBT9CHDPZWFKjvqhbc4RoGvr7Puh",
  "key25": "5bhxh6Q2D1x7NiS75DPJVCdB3G4XFFjSG68uAQZ8S9gbEgstHrhMjBGuRSPPBvK9rbNbGP8REpN9hnmeEPyTE3yo",
  "key26": "4AK3nBzcgKUf3ojhJw9AYPJcX6Gr3uQGbs6DvsbCWrtb5amswF6tt2aNkDcG9j6bNPnevAfa4HJS7r3Ri2fufE14",
  "key27": "3hU3vCc8us6Pwn5JBubodM9bQNcX5t7AFdguQitP6iRMd1oxWYLyYNmLnRq6GitVvFWrsPXq3MqdGzq1m8kEPV2E"
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
