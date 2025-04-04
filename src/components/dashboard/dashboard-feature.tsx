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
    "3Cc9PeQ1LXtTU4HXZ5iN6SAwUjS1Q2WwSXmwLG3qGcc3ELZwPogLypUioW9NoWBRy1uqmGGTxNnviXQ63ytKPjua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39szsNYcM9PdkRjkKZGqE5CjnK5766oNQAEZBXx77MsStou14VxtA5MLfXrx29zvc16sYuEm9g6cyiQqUK9CSbcM",
  "key1": "MVydyVxKXZW2hXhy6w1F9xTsDJeTED8YdkhxccYN8Tq3GnWZPUkhVQ3yqvt9Ldz8xadzfac86zqiPMC4ToS83hS",
  "key2": "4sndrNfVzJkp7Jqa6vAv6Kwkec2pSXSehB44r31rzQQAoqxqATAbrqE3ncmD9jJ1J5Jaj5p1eThDm14ahoYLzBpc",
  "key3": "2E2qvPxMNJvfYw9EBKDpNDvpLH3vUS4PP1vTacXXdVqMbEJpurY9iakGHnZubC7ktBsdnxp76iGFQxeXfEbQpYnj",
  "key4": "4GWfccDKakJR4xNE1wxJCkcTRbwyH3HuoyjMXR8trbom5qB8535oMCmj2ub3eK6Bzjv58wxroU3avR7SnwxVSwoG",
  "key5": "4EdgA1ibUVozEdfj7FPQGDikwYjLkhJKZnCLLHtsXwvwYjmr51S5u7gexNQmHa7LwAgg46RThMRiZV5CpdAj1QJu",
  "key6": "5Lt5VCG94D1EnsXRiVZNn7sajfyLP181ZQXj6CmDjNrhAzp96iERj9sC4M9apALLNsAdWyBUyPDgUjmdqzLBL98D",
  "key7": "2reLA4VtEAxg1S782CkCHbzy6QdvwgBCVVQxu9FnPaUShQvAim7P8KFLyfzw6N7mBfMDLkN6Zb28Z3Y8oJ1Zzybo",
  "key8": "4NYtUSAEbp8CvVhGt3BQmTqLB3jPbZQRviRvVRgdvskQCFEMo3oLuFfefbg5eCgY6ttxyYQ4ZhiiZXNTmngxtzLS",
  "key9": "49R6RFS58VzksGQ9kRaCWFx8bHCAXZLHA9wGKJys4otWcZSJLvS3SnkVrx9sGNUUkJWtVSQ8MmuyKBDQ21vpJSvD",
  "key10": "5bdfQPwgda9jTjxmxD9f8TCfoFZtvVeWdN53i17xW1QWBETAJPC9kx7BgHoiWVAG1qd8BjZYt2qgg4LthSAstrr4",
  "key11": "3DAhBbRwkKQqQVJrR8drfeDk2t4MCt3nHFjxuSeym3rGiYpwm2aGewTPdcgS2pz336YXmcjatoq2T8jndhTXw6W9",
  "key12": "3DobTqQ8k9K6rYdHVh8BNNoev7GNs5yvVDddDGhg5eUGLgE3UV61sTFVwzxFor5B1gUuyBgXazXgF7o6rgJ5BFgW",
  "key13": "CgZjpkkhKh7KpuETrz81aezcR3pWNr5Pn3d8JQ5xt8auBHtvsnF5BgyWvpkPaphTQNSzaqw3vptWnADK7d2R3bL",
  "key14": "4MAhdRF5n2xoo8ahxSM4QTqcUutvbyPswXeqr9sGSDdA7nrCu31MBZt3UCvsdNcAu8VH3mF5nPfrhxCLanUA6rTv",
  "key15": "2ijDZ9mDNb9K3fKn4wDUeV472uY3nBrgWVjxyo3ovENy6pTTyPd6uJVYsLvKrJszHExy5wyFXaKrkURnwpJPbxvm",
  "key16": "5ZwJxm297AdhU7KM5gMb4NVLFQvrcYBd2K73EK4bYbezEEN9h5PxBQh7QhLCd23DAu3C98byTicQq4vm7EwzsYgy",
  "key17": "4jBkwmTbJYZ3J4gR2dW423ugD2qACRtyu3Nwh6u2BaVdiJSEk3XrEpVQTNfLSCKLmki71vUwm4GUptQno6Fc26Un",
  "key18": "58C1oNr81uS8K4fTPu5kwht8KHT4h32zkDgoN8eKRTpEJyzVcpZET7urNk4BKxySPeKBg5qRCU9GENMSiYk3qRX7",
  "key19": "4ajznATkhCaoxJMgVWme8RhvTb4WZmqSsBZAvKnS2kJcr4yk5wAmZgRbxXFb4PunegyxhgxspF474wUsDGB3fGoq",
  "key20": "47PFiReY8tovCDz5H61Yij8VzqNBpzyKif7iBQRBr84tkLkWvePbwNii7ZQj82hT5JuDNvao6CEMQnsJcN2yMRxf",
  "key21": "4Uuc2J4skcSLXmrS7rp9AVaBddoLPWZr6tWVy3HsfEZBe2fvBbE1WJ9dEhsTJV83GZSyYvcb6KZe6xLUtSp13CYp",
  "key22": "4zhytSzX9jmsnJjMHcoRgcodyiLEtsRt2y4Udh2k3jWbrnhHunST2pny4AB2d6v4ZQoBGX2VdxUPsKQgPnnxGfQQ",
  "key23": "rXCraCybCpF4SHDraGMrWNmCgph6utxTuqPaTDnmMpccibr6dC32YTb5TogF4BVTu9RABo4hjJiVbEoCXTUNRAQ",
  "key24": "5Fp7WbMvtpuM1W7eNSZoFdCVkQi34C2xoDyfpv27dVJHP2U6wrurGHfqWdAfwSCr8e41gUR1vnozkM2A3gupiYy3",
  "key25": "2bH2iQ1undhHv2n6nt1LQBPNU2VzpitUARrHgoEfJwUo9YWJkmjUt651kF2h3jdZdL5zz4RHcyexucaMgiExRNyE",
  "key26": "5bP1hMXHywxZ4oaqiZtaPXrQP4xZXomB8n6wkRw4kirwWmRtcUkQs49g6teQDqVFN5aivKrgnvy6oREURuuBk4sq",
  "key27": "4JXJ3RHmtnd4pXjuwnyfVjpN4utir72An5iWaHnP1b92oqXrSrjAh2VD8zewwK3x5NvvCobkrco1NgH7pHiXHq4N",
  "key28": "5bEtRnyqFbAqSf1Lh4mpDyLNC7hgvnyjLm73KEqTpppL7cY83ho5rE7CvqYwgnu4VkaEV7gnuKj76jtFDM6VqmTj",
  "key29": "4U9f8dMdgd4H2fjUqWPngLGiEYAGwRumXjrJrqTruyVDD5Kw8ySRP4e4DCkcXtsg1hFsqr5zr77Rnxca9caD4E5F"
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
