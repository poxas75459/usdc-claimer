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
    "mchwfpue8yHGTGPZNDxF7ci5A57SUZnTXaYVcGZ6wSc1cnoW6HkZxQHPnJhFNA5in2x5WpW6HujtikHsJxsLNBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b1zfJwkzk474rXoUT2raHSs7dyFrWPBbLJ7qYwLkqVU9FWyzqHEX7iWQ73tVWNgYmrcwKotcduokNzJdDQjiaJd",
  "key1": "4W9rsN2oDY5ZMfrMc7kPjUob48tm3qqTx8yukWs8z5KhTH5zo9BYyQW1yUgEG3UxmsHY8Eacs9Yd7AHZuH4bzV6d",
  "key2": "3MMN1u7ab3wSG1wFjHChMGSonnJdNVTNAFBkVms9pK7Jojv1TtLhg65iNRMhneaPJ9UThLTFaBG3fvsQyaNAuNqH",
  "key3": "5uHW7tRsYUBshbSY5ADTZfr1QJxosy8wSCsbzi3qykyNAJKom76BY3VPowqkUpB2LiZLbTUepYXANMcRTDyMWzth",
  "key4": "5zKGXsrhUYPs4c92rU3MDZerFimZGKDzCjp8Tw9ypSGRMJqsBCb2d6VzGjP6WTGYEvNUyS1JLCwVMyypjM1JWTrM",
  "key5": "hzVabg48do9eNTJF4cjkLDUHBDgnkA4Sux4oAnDWX64DMr532A265F8JQXeaspjTy2kVH6EZkQe72JNXxRiUcAK",
  "key6": "2CbnvbW2CHTPhcB5rCmtvWkmGTfeC2RXcSVrahEukPpAqXiY9hencBogEHeMy2h5ipbBk71iJhPBRxThV8fgS9iC",
  "key7": "3D31BzEJSnAFAv5LVJjwG3jGowe6nFBanWCLdASSpXgb8vnAib5H4VUVGtDhJ9Ejec5f8qCEcQQnYfVsV9y3FzXd",
  "key8": "TVjMRPZFKEnSCGekJMW6ZjWgRs8fRMoit9aUHfS2BxyDNjRJ32aLGLi4cvnjTRgFWyW4yVtkGhFLAeQAN7U8Ldg",
  "key9": "2kzx74ZJnmGAHsSbVhYAqP1whjKb2ruJqF41iJUtVM28FrvpGzVWcZjeBd2P2g4KSrM4m23G6LdrjMX3F1AceCQb",
  "key10": "4Nsv463rCzSvYSEoEZ6BR1occudLdRgxWFsYN5EkFw7Dn3zHmBRv7jDoZQim1mtDULR8gESG1ddpz1xfsA3ykK1N",
  "key11": "cWGm4KGVsLjKEV7XURrEaHBaDhdX2WW9GBMT6yZgShCCSPWytWE3oXd4sHSHMgnFowvAs3AwZeo6LXf2nVu43Xu",
  "key12": "4mFCtVj8qbmjchGKRFBQP2of8Fm3ChakmM5rj3Lyj819YqfRBbhup9v4Dzv6TxTDi2nFaPZfmSk8P39EjAxYuMd4",
  "key13": "5CgaEgZdaMbybT8YMVYLx41iLfJyHAGdb7h1tHNWXu8jgZf2QAKcaLfFpgS4PqnUCqfj5XmFBhAmHkDKx5aNk1QE",
  "key14": "4u6VsL7FuszCh5tnSH4ud1YEM2ebmDZpxTr6ooa5uzSVtrhvaNDHd9Fioc2St3swnm5woa2xQwbH2ZffKwbv5kUj",
  "key15": "rQN6g2irdhF6paXfmnkmdtyv8hEDcxYM3Xrt4UKYtwaduqDy5VjZmmQ4dTr633ZA3ttii7mkeM2Xbv1JSoAw1QM",
  "key16": "3nXhpPCjYpmRUuZLd13qUSbTmDEjqAJKTij4Mj63wE526RHJXbqBv6YwZxpGGuEu6pd65S8YHykDsfJ2CMzPTt5n",
  "key17": "3TbuQEKj3uAp93QDh1frixkAbx7nWL2jq6h82Fy24SuMHbynC8DPe3wSFGNDZe3WNFeLBpKkLgcXyttdv2hN23Bc",
  "key18": "39ZqL7unhDWgKyQA8YBUqLs6GCvzzphkcPk1tV3ebVA1U2Bo39vNRqXY8CQXGXf8bDGSWYtz3nTXPPhwqsgUPH9C",
  "key19": "2Py6pgUrk2PRaJTRP9PLaUFgNEmCtG3SX4m659Qiy65W25Wre6bSmbKfWjyjFARznLPM7YT4dzJ4dU9SZKcoQ6oD",
  "key20": "3db2YAHcnZeAnMpuAiR59T87H6EFkAft4QbBdq3enjoqnYLCWuczkEchJC4PYUWbnLJpnG1sebFiSF5cdzMYLFi2",
  "key21": "ofK2QhpWSyKxLWv89qmH4mX9yAzSE2JPgULEKkVDTN2WQ5n5bDrUdooETTs2pvPi6yHnw1fEs8DEzdskAh6XS9F",
  "key22": "4bJp1xUtJ1Jkc85MBfCoDf5Lb5rGhcGF6jTjRdFLVf51si9o6fSEWVR793JfP1mpupyG9Ty8PTeUfgvYdQYKXgD6",
  "key23": "2Yguv2Nbm4exQAXAVqH9Hk8vgHKGJArcoJmyJtzqhoKpy5Kx52mo8EZDTuvREG3V8PqANXsy63VXXad2LudnBimK",
  "key24": "pfNttT5kMkRX6HLcDa2Pieuo8MRfDPHh8y8hw85PKzVaC18P8dwjWfwbmD5FYZfuxEiR8rC5PT24NPrqLUGauhx",
  "key25": "P7RJLNceVGfibZEM7MoQbzkxoZKtJYuyhdvMYaK8WQ6Qai2cuk4zVoAqw6BzJZ1qxuBdjxhZQDBUPqUiJgiPi2n",
  "key26": "4Q78s4ch9pgduEUKn1F9rHv2XKfhJ2mjXvaokGtT4jHQ9BjQPJpELnWd8CgzQRWvT7SfWH3qDf6o1avP5raz9CsA",
  "key27": "42YZNuYctzgt1VBGDDmw5SZb29gwgq925gdtr5Mg3UiguWTUKXEvoqzoXki2NpL34sRN2Efo5xPW9ktULui7cMNZ",
  "key28": "4XW1HQWmBWBW3nYtRuoN2Eo4iPGJdSqCoPSsNebuJc3UzMRw2ERCeFTu1Y3R4T4G3zR4RMWjr13ewYEzp7h3iwnS"
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
