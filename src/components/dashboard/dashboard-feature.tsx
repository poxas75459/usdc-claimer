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
    "3XUyCNjinFarnqhySrsZzmCaVFcoLk4WueMrA6vYcPwURXdmgiw9M8PG52wR1xp2kf1DNbQtq75dEUt6XtjEfSFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qQsy7As9s37Tx3gjFnus2u52V1RrajgjQtQuwniTq6nHP9mn4fsCEBGBFyanKh9cyuQ8Ux6bLXU2s7TQ76dKNPw",
  "key1": "2LZW2n9ymHhoz3SqVDzfbSdYzDdP2JjUe2uEE7u8xLgSz9PKxgUBx3j2P2H7bHhcYZ6xU9YXyTuxbs1Ht9WU1dVK",
  "key2": "5LtH8dmD4yWBiNopbdonPmDacjocsK7b1CZpKuc4LpPCPtdzT2CWjvMrxcyAVuwvRC4prfDjpQUv9rcGimZfBcq",
  "key3": "2V6kfLMLbz1u3fyFJF2QaYzXrV9CCB5UkZhj9AK8hf5vcR1URkzmc6bcThPsJ6fU8utf1EVbETGT8GgrmNhzdkQ8",
  "key4": "5cy1dFWLqY8JxJEGS3JP4aYpwDB9W1q2WMaWP5mX7akZRMaSqi93pGttZPapDQKv9G5YQUy2WYc2nTmUkW37YrkQ",
  "key5": "T2iFhCw1umJ6n6aLcQkWkHzsJik8FCYk1dk7dcQ5Tgs8dRtUoGoRpg7NXZSVmuuDqBV9bntiBhrAGd7WUfaGqWB",
  "key6": "doydmkUUdRoZrUijwTMPJawnFMcPP9LY5FBvBcrcryE47fqHAyTfYyUaFDa3bXf7dHShP2a7r9VeySgMTmfvAYq",
  "key7": "5GCdbqawDgwxuQ8rjr3FRCaBNAmYTTVGuRTY1JUm2HhQxFXWT4W4SNHnmBSvNdAwc94Qxd2XN28GwhQi9ekkGfSM",
  "key8": "3Vs2tT4ncvGEiambES8x7kswZowv7mbuywhGHJdMVcka4gUxFknvoaEg9NiKKtCo5ntKiDrEPwdJMrBHB95ncnKm",
  "key9": "499YmfcnodEtEravkoiPgjYJW6B3T3eMSVjgxZ9ZckHuDCg8DQ1KhupPUoWQaf5PWr2h8vHAnYXJ4UGNEYhBvNHN",
  "key10": "MCtjYxWb4DZHLZNptVSK3rg1kHf6Cbs2irE2oRRzZdvSqhHuEDbQyfkb5LU7LT3fUHFAFYjP2Zxz9LEHQSvfqZi",
  "key11": "3BRiGaNdedN3nSfJFUszCTu5RmsvmZZ582oFvumXSsFsYyVDRRVGKFuW9cx7GhHkRHcEPsbHhJydNBAoHQLupAzh",
  "key12": "4ComeaZpuLYJ7ArE1nSeRR45hdxkiRQp4E7vPdwqipCb7jTymaiyC8w2u1k2TGCybEHAZUJPEwE3kJTdZp1BzXRm",
  "key13": "4jGjCEmN5zP7cKxXESwjRBdLj3fSoutg1jXhYpZKUsv1Cw183qm4eMkjkj2KKHJZqtVZ9bmq6TJmQ2BSTHtRbvPu",
  "key14": "3DpA24Q1MLTTMZ4e11YQ2MAh6aRmP4KSxa8VgBfohqKSW4PJGqSJX48aqV2mhdD8Sdygha6p5zxoHEXeSzeM31Tw",
  "key15": "2ZrS2oZU84TQMUvU6tAR9o3vmgjFLLd9g2dBrsnveiY3ipDnrahZosRAT1h9Qt8GDN7KmZuyADmcYhFP6KJTje5T",
  "key16": "Q94HFstB6iAn2hyAifDyipxaeqXwhpYvoogvjFZLdhmmh3oJYbCJrRtjNzyzmqDGN58XVMhHVshMjXjBNvLR5Yt",
  "key17": "2PZM73SnkqG9rCrunLx5VYrx9yXiAPEF5882ns5XA6aPFeZnunbMq4kqP87hTcRs1jj1Ne1PNr3DS4kiXQeJnbRE",
  "key18": "341Q8bizDCpG1tgLQiLH5LQ3fjacW2xJSZ3hZC6oBwTivMziHSKfte1j4FHfNeWomhMqVYFgSNbkCWWM7tGq5ZS9",
  "key19": "NFbxb2ADMb1nYs3WAGrg511gpwc8YKifM5hWU9U5xsTEN98kZ92iQAf6a7AaiFcoDT3KveTQL4oGuTNq85zmugJ",
  "key20": "51KUbAhed115RUQERgtisVTa9d9C14d9VnGHCog5aVV5c6U4g3u7NHmjz56LHmNKtDiQ2zbZukSH2e4oZZpoBHTS",
  "key21": "5D7NNiSWEgWJJ6M6myHKmBrF7qyDXc7tn11xRXXSfY43FLZckcLST8VVoesNuvAJmZP5hayPSR3oNNRzMhBw8oQB",
  "key22": "3TyQsCsgGeGqPdqJQfhPRE3EkU2thWuFRUah62jEMPicM8H5A7hTuetdgdMwxnJzx3dJhPZ2LWhwVpCbpGPQ7Z5M",
  "key23": "4B65ceHpdrqT24QoUcnXemjPE6dmwbaDopVvR46GpeNVBQprN12QeiUqKHwTzp6twbZGEfFQPJdpz2wEeLrAGxJT",
  "key24": "Lbv9FYxRhd6zCjrRT42fgq4MuqabzSHYHq11nNBeboptffBCeNLSZuEpoRpyFuwyj3XqLVh9R7Nb3bgFM46Wi4b",
  "key25": "2cLbRLwf2DL3VKchu3Js9NNyrp5sR3YhqBdLh51wmC3KdURa9M6SChgi113uBjiJNiHFFHCGZZuZummtRrdRGWVj",
  "key26": "5PMcgQDHc62d1qCmJ8SubmxFTQkM9Dp8SSrxhLDZ7U9TuGBdvScqsECzYU4M2DY4qz1ZGfBAzVfVqk4dRo5UN3eq",
  "key27": "cnNWYt4v6mXr1W5LHVevjWbMjDMKj6QgnsGiWKcRMUCQFoyjVqUNoAK1MrtLUFhKqD9ZXWN5rKzXkUFeVM2PEMB",
  "key28": "4fY4U9jnLJWdnywnb9XtxhczrzwVkqU2cUQHHArdnD8cxm6dKXwPFJR2K4N19wdW9pejk4anjQ7wAcecghCNZa7C",
  "key29": "86gp34B7nKifBd8ed4EkiSQjLbp69UAgKDsQLCbawKH7imudJcrEibLX23Z7En93PQasYptuBZWySfoLhwCbotV"
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
