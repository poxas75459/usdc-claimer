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
    "2d3djKM2DqtoGTfjSENmzeD7HWhnimd1mzeQHHUrayLYf6stpboVcRGXAXHgkgdde9tCqKQCnj7qMdWg5s4Ea7S3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdnMw87CXbQJavL6FEdYxrjazktrgvnbYtQ6cogRg7Tzn9HAiBYicorqUT8RFeBAUFGJKZgFJbj8bnK3TQoeLXJ",
  "key1": "5bcoF41aYjGLf7TXPyx9ArBCeaKQ4ppaCWmJD3gWAfYVvB7KyFtPGXtgkda3h2aTMCxZCegc8SwNtmp1q9bzXWGh",
  "key2": "wyhxQPzFP3DcR61WAC6S9jQs14AqGfEjowVzZDtZMSWSTfegw62PGV5yj1exnfZqL81sPxrvsk6i2jnnhd6GoZu",
  "key3": "3XSRB53HDqJ69dibtRQX71xkVYJKUmSs3imbZag7KUvUm7bPz5CiokDSXsH7ef44REEW39ngUEawQGWB5YKFhZWZ",
  "key4": "qxUvHeVoKHbD4a1xEtzhiKRk2nsavYnUu4DLF9W6Bv8AEzjr5EELjNZgkPzo3BoqAjzvHvB1xynpRd7S6TtjF6B",
  "key5": "ai2TKNhAsARC6suhP2qYffLbjPpqdW4koBDpXgVN8hJd96STehWFinpRTGzKMwyYQiNqKL7gh7koDfjjdPwYd6e",
  "key6": "5ugAXoWfEyJWxdySzEA4AWFQdN2DQHV5jnfoU5EKhiZkdsjLsjs65ygBfQheisJ8oKA3Aeq5JPoAkGyeFUkb2mSf",
  "key7": "5JuMmsiyh7SAn2NteGZz5QgpgZWc3tf4ErfxK1A7Zk4C2oeWx5EWx7nJW6P7MbMWdrrZJ4jhvmFPNtWczQJibPsP",
  "key8": "F8RckJwM1wMiit33WcTwTuZXSfvpKeWsJcRmtnBPj9hcaAkfX83YzcXMzoBnnVwwLUs89pGqB98Us41nNM9dAf5",
  "key9": "7XcAuBigvUDvgmVV525CFquRzCtMJbv5ouc2ArijkFPxVhVy8SBMTruQkyoTSz9Ama2w7UEGAS5ancgcDyNpTMY",
  "key10": "mWPtQESPp4r1htZJ4prBznVBWcoRFddcLuEF5wmZdwpaJHbSwcXUF7d4Ji1db5cM86BngyYu5h5Ui32i3fSNDcc",
  "key11": "4m1DUwwc3JjxvLa9c9EHf326vpmMtkZCQcJDj94RDjtfknydYKPCWrNHy99NShSrdYcT9C6exKQwf7VLxKxS49G2",
  "key12": "8NnkHtBC55f665awwq8EdYu7KBf3QFwyN9xLHeqssYv3bdfvE1w66azxXvSDqTQTcX5nb9FiQ4P5g7QxEdPSdXj",
  "key13": "2tF1Q53QM5p7FmSPKpkEdJiNY7AJYs2YMZetzp6CYyKefQYMm4uH4x6tNrUv8WMKocC7Am1mNQwM3MrhaBSxikyz",
  "key14": "2YQ9JaYXzCS6LamEvjYa294d36yVSHXq7Q2EG5vxUAtVp1tYpJHGs3vugE6zBS74uogysDRbWkpW54eFX4Amos5z",
  "key15": "a8chEFSAkP8c6Tn6FsggEKAVg5A32S3XxcaUFdzqpcyn91A3asufqWQ9vVKEhHGrWjfNGtnQzneZ6eLV9wMooL2",
  "key16": "5rJNx2bi7Zwt6kwJGa5JqQig4WBTC3Y7TeqvRaq15szqwPa4DAP1imtp3ysBEv67mcgEnLTW149n77cWAjY2uzaj",
  "key17": "4jmqsGrwQCpXHZX1xQ7XyfFV4ZuNnrLcgkUB1fSsDffNE1FYUWF6Ywecb7D2aUuopEBoRq1pfsjDW5eEHCspvkGW",
  "key18": "2Liiz1pF86kAMLLCZmhWFfAdWuxp3m4Uc7L8v44rBLwoK1sPFNWDZ5RcXCLaz2Df2PmvWUxrn3J7vhHwAY2FzLWU",
  "key19": "5Resw8hUz7nw5zReF17Hdu7WVxFTYKtxLvEH632yFyBdgLQviq5vjYgeawfJFNHTHiyBvzrg4ZM677EpozGzFDsa",
  "key20": "4FJ5i4dccujHPDL8vyCkZb5Vv7JzjNjFiWFC1aUYfdNMNwkkSWMudD53Qhf35Mc2AseYrVn8YAUFsWWdWsd6CJfN",
  "key21": "4y7yPHRyRAyZ76reh5QspAjmVQ5thxd87efZUtwGFdhRX93Y3fxBURFowTosrEkXX1rkQJ738vX3SSQdExftMJN5",
  "key22": "4FK84NdZhzrbbdNPZdf9mVuvyan7kjND5FHuMQfPchAq7CdDWvDGohp5Y32Pkq8YBGp4SzNjUQByYChCKpT5MqJ",
  "key23": "21QFvuE7zuggpyRUL4xFNhT25ZYQVFpSFcVeU7uUpNimxXP8eVBpy8soswUrtV2ez9BZrYrHNkedQU2Ry2LZDKgN",
  "key24": "39LiYWkQVrgqhUfnrK6Kwdh5Kr4pCvciR5p574MaRAnPdhJtufKeKjWAdWiqKcBMHtnvWqoKhtJNusacjsLvPFhj",
  "key25": "63MoohMgcrfGunDzMWnjy3wdiAG9cdgT9R2oFJBooRRyTvAVLxyWtCCcbxrAtUFmsFY5SkYy9mSfc5iQ4Q6uSbz5",
  "key26": "5AjvAjnRzA158NFr3eShZg6L6qFEARJPUdjHtaAaKRf1RT4jvSAeCiCjbeX6bvcr4oawuLYVfuEJ9CW3UkKnZEEJ",
  "key27": "2WrsX5E5KmrV7jsu7QujiCbSqYvKog6mqv4C29pod2LMbDiTYM87zRJYEj6gwBrEVvoBfzS8GMCzeG5zTjWGYWxs",
  "key28": "2j7dA61zZhjSomNzMueUCC942Xq3jFwbDMGJSJWx2wjbw3qpquSYDMWQrZYmgZBWtanFKS617C2Fmc8Mdaj1DEnQ",
  "key29": "5tdLcN6jKU385mME6vgqRc2g3YbFV4sn1K6iF4Vs5sjAneUxUPjNPuSCi7Er9JbxgGwLJnVnuYZR3Y49opu4LSi9",
  "key30": "4EZdBRRiktT4uepy5U2oFpAd2hZrmWhp6jyCojoBQy5VhVZmKaEeyGGgGSAahCpuY3ZBdKhdCNKHzN5MRri4tckW",
  "key31": "5X7QEDGxguxpSvDBcyNGs96ub5g5JMHFFAgJCwZRFP37bCw2nNCKp9cH6v4u4YYnQ1k98UJbPoLU6tyj7qu7BdR4"
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
