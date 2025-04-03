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
    "fxjkxuEQRK6biSSPynowBBypJh39zEgSUUHCKRS3D7Tfh1V6b6tiCyzfiQ743KWQD4yXButgJSFaRvRDKnzmLvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mg1Ph8YGjCEPJa4ezHCtgZb5RMBaQFtXW1qFX8tAyjC1B7vHE8SXEkz5sWgHPGBmPQzW31ZwjcV1ieyC8y3VXCW",
  "key1": "63qTtr4yi6nCd2faLx7cWnVEvz331UMRUmJDoT3u8sF1JsV1ePRTjhQkDGAjYN6kevJHi2xXSsXWArhPAP5wpL7d",
  "key2": "51VHaU6REWqBB21PreRdezRPhpFA6zdWK1ADkE9DKE1Uh3YuVLELBgfPzc15SHnyAVKgxiXhc4dYq8wsf5GabT3r",
  "key3": "2zudCxsZmujjoxn9Vs5C6Vp5jBJoHhfXreattp1QKxERgDGE6H5n9NuXWKNdchXqYtUNq15RR9Edw7nbmwXNU2EL",
  "key4": "55inbvd5oNtNg9BaxLAgS3b5rC4J6LSUMXSB9oZ8ZpscUzaVZgiSFjxv4RUbdZmWZAYFFzwz4pYjD87qwkPpcZid",
  "key5": "3gDQz6B33ghVwiPG9VcZoam1iAgtRCq34f91143usV5ojB59iMPH5z9X7rUqyJrGbdzVd2AsuLf8yXuwobqmGgX9",
  "key6": "3xN34bULatYJcmDhrLhnmzNj5hqsYExT7mDPQHso8pRFFmQv9yjUQHrnd48pBsbsmYbnWhk74i2vq3wDUJh67y9B",
  "key7": "3fjnAgZNLe68pGu6w6Je2PubNLTFrFajwAWewwcanpGtbgUZ9gdZDT9bErgGikkYwZSPUHRbZMgS5SGEprQccub8",
  "key8": "63G7uA9zBMVJsFhiKJbYnBWKKrp6hmvkMm5k4dTvBrEfaN6yMuHwQHWvvs2GQAA4WLsQf5vu2ZSN72kgK3Mo9Pbs",
  "key9": "3vgnK4cQeKkxKKN4wtU3Wv6Vv69RKqoYeXCVHi38BA8BhzWmF2mqgMVLUC6tjDfNoFRmT7frGSWNYnxaRChXAJaB",
  "key10": "5Sj9YZTPTgbfiXc3Vf2vJsusrJFdbLLVuhpGWk6X7zAgZAENFhnXxZrwSZaigUk57r7kYVnAmUvF3XM2F5vzguk4",
  "key11": "3jrSMgfyaUZbjAQSgxKr72ogxi2gGywWe1EadQKAty513wiupsUWKBE5qwYzATQXPT5teFHTci86XPr2sP9vFSMj",
  "key12": "2nUZZ5knGvjSC98b7eWbRPDzRSrCYYfjUECY2vaFmZVNdM6yPj7skG2m8HekYoHpCEyGTj7mdwpgfyp78os5AxBY",
  "key13": "4r1PVvuzJTgT2Avt7uDPrXTWgdNs2Ux94JouCtgp6iuNJUtCWjnPhTKWPMkJUp2XNm3tLexkUvMAFogwZySAMH42",
  "key14": "5mRBqLSTrkcoGnDE7U1x78GRs1h2jVckmXMNhdEYetyG2dbfKGk5BFYQRYBrwVw8v8qmUL9UPwR3RLuPYf57ZEJf",
  "key15": "3r5JnqZpeqmzcpyMqcymhxMzfMYsQk7eqL1R8mW8zFUmXFsQsoNG9jWNDMVPjffcyg6K7pyYH8Ge57fVWXfjQKDV",
  "key16": "3YJrqNKc2GSrs1a6QaQKuQ8uBU5kdBkMWpTTEACJWfBL1Ghuzp4STwfGzNBdoSrbpRr2Cu5eX57xx7SoiMVDGebw",
  "key17": "32gEULUAvhZ9haxVrYUX5SUoiua1YuaKzT8DJyk1DEvD3qNp66KQ8ZXgG18e6jgzmw4TDNfjzMr2rxwmgypNxW8c",
  "key18": "D1N3T4oEaViDevwanFGz7QnpMCS47JgbvCy2uNr4HNR5eTUpwsUd1GNDJ6y5HVx3ce97zF8pwmHzycV45VKj3xw",
  "key19": "HAoEsFJJHaWui1ajrBKg8hhC4dTBbbjG8QcMrn3gsnPqVr5Qqt6XcgbAX72tCZLpiKYp7hrdMrsdPnofrtqSWdY",
  "key20": "36PdezH8Z3hTbhL5W3W8dPsxAXaSvH9ti6bPmmB2ebRCSxHSfKm74L6R2FV9gMcYMDTWqLm3DKBv6MSiq1Micyr6",
  "key21": "3dZxWUh3mGJn6z5gSQhx7BQTw3oEQPwV8jYEtUfjVXMbyCX3tJ7nyxUc4WbJmUs7ATB2qKYs6a9Ac36U4zwwPTom",
  "key22": "42hGqvAPwJ8N23a1g4dSSPVjp7PTkLMyc5VRkwwbVtWndaYcrXB8CWtKWdetwfWH9enMS8rrFZgwh1zbYAoUVG7J",
  "key23": "38iPeg9caE4dXJF7rCpEMSRuvsqi5Qfwbuo2EJAWBVhCzKLFP6A7iFjB7uydU3dSSieduH9pjg5avQ5THRBBPKWV",
  "key24": "3BSw1Spy44cqQarH3fpQrww118LCLrghnP8vuDdDdVQSUE4JTGURbAAtg3hHr6VLfZis9A9wQZwy34dvHVFewvsh",
  "key25": "5Ln9BjaUTebZyqurXg7L57Ejmmq5EDL9jdypf3NCKrDrqDN9oLc1teaNjgdY5GRRzTKptvp8qjhXWBdRHaXXCvzP",
  "key26": "Z4b7smSBvMYnpyfiq4K8UvVEkorzJpAFL9SVpVMPLiK7J9wdpsypFUYfW2AiXd9CQE25af66vyUFemMc1HH71y9",
  "key27": "2fiEoLT21xswpeoPz2xPqGV6tnfaY2GaAzdzwckG5f5QtKYrcMtMZpNe5JSqpxmfF3zd32cuooxduswnZZaUXGbp",
  "key28": "3uDp6uSvHMdSkLegUFFqcCNDErzZTQH8amZ6Mbnxr1hczVN5pcoDawtRk1xCx4QZZuK2GQZSHMRn7njHRKQkMN7U",
  "key29": "2BZ7RdADPZ54YwQrpXkRuxzVMYt4y7Wc5KaqUfNWhX4A5pNHhp6SpfNMJVL8Ld2hjzkT9SqfG9MovqnVLCDqTzhH",
  "key30": "WmWVxq2nNSyQU5xc54LmkEahrN1mTciMwsgS31UZ5JU2EPaAUHiMisj9dXZ6L4iZ1ijYi2xBrdYELmZadAun19W",
  "key31": "4NaoNXDUz8fE3zTrrhVmY3rLAXb3QDshkfc4gjpJ6QqYimgNbqLpQA1HbMHc3jmvmB7xkLJ56d5Z7nPUfjeH4yUW",
  "key32": "4X3DC2964qW1JRFFppB6CLCLUoxxTHVNEQbBAGtA5Rg6PyJs1Hvhf4hA7MWgqDuzMYLd3KJ9WCoowLGr3HMe4HiY",
  "key33": "5vyEx93ganHuxxbFivGxN6awAArEZDPQYeXKp5wYg3BCxiZRTmnpqJBpqFgLk6BvE9xaBNioN5YFeoNBSgUNjJdC",
  "key34": "2rA9EbNTmnNNALeN8NNbUY2joxJPjvEjRXBvEyX9yKuNtTf73Xso1ecHMVKwXWAfZV8PWfTKCfUtikoGinYdxRNu",
  "key35": "4QJTjTa13TMo99yuESrYrK5oaWjXtwf87MGMZe8PigCgMVHU7VAqGJjBEYGyp8q7UFMzLi7At7LCvUhtgn9EnPdY",
  "key36": "28uW9LTobumTrJw2XJZnGibiEtZN5coztrdy4mV9ZHkrYzi5MLiDvk3dVTKrzHRGrPtTappmJqHBH7U8gYoMdxtp",
  "key37": "3TZYRiFsbHXzNBxrsYqRJVFUCwCqrLKzw7qNpKsqQJKXGZjBiJSz5ZtL9ZTCiN4QcypG9WkYdByzGmex9mh72pkU",
  "key38": "34fKuZv947xov9nQqGwzqkAJGoPtzqZ9Q3QvXjPwXMGoNBrfcA3w9iKeTmWadF99z2SRjRXLDFKEVftdwqt5EAkB"
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
