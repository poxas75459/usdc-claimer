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
    "yT4tZNjMEEXDfmF5FHNEB5nFwwP2cE1JGV1qLCstDEiUt3RNgxrVNeMHi72XFJfs13odAjS2XFy1AHrQWi77Cyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52sXHEvLiwv939g53cTn1TiBWCzHrapeynexRHWQVrCktoHhr51hmo8AfDESU8zBduG5MXDKCNZK2kNyA6pQm9SW",
  "key1": "51b8A8BjuPXqyFiq7DBNouwjzv4ykjoCjkKWoGHeA4Q1Lh8U3Af2DT9356W2G5TCXV81uFAcBFJpJpyp6iDs3d4c",
  "key2": "5M91p5Cx4kwgD77bN8J7Ej12qegsy8GRPGeqR8PYmDPHJct7eLUCuz3ouzX2A44LAZLMa18qWkNDHKdR5N37G3PY",
  "key3": "2QFMykWc5JSpinuE4MszmoMGgXa9QKskBDpuquutrRNeuedGrXd6Z777bVpHXtYwvZUNMfqpyRepLY1bEiEuv3Bs",
  "key4": "fC4UwHEVVwhMau98MU56ifRoa7nHPr185jorXGPJ6nFDaCBgKQCMvsYYk6Su4hN6FQJG3wP9PLdhPdR5SNUiGWM",
  "key5": "XT39NrgbUGic94RhMCHWDCigG6iMQEXgFM4HtMB2BRVqgwFMSxg5de2nrDBpZJ9uA21XmmRwrRiTMQYVPmrrKEV",
  "key6": "XaxQUp7HgcshP1yMB9s8vvRzeNuq5S25FXyqbSzvsX3BJvzezjQdsR89jWuMUPdxobGvNhwX992S79J9wEfA1mZ",
  "key7": "5C6eWp1MKTMFLCwnrgeby533ERMPXX9DSXctPwutCiWHtEUm2KRD7QWffg1a2Sd9LemDcTdwUGW33pr3xQQH5jUL",
  "key8": "C1ao4L5dPhdfHvz5GdLeaNQPYR8nraWtu3Q95ZMzgeEcs6kdvAAdA5x6nxse1xtLTExKV8FucYhhLyCe82TnzH6",
  "key9": "3hnib6TzYRAUaAf8STTPunSCAkArnWC9MJnQStCn1jPmKp5565epapgCJqknHNwt5rsNqaxvhfwzdHsDnJRbJC38",
  "key10": "2hs5JGtmySqCecTPoxCSc4NfU4gM1MqyDRkM6qh1tqM6cPzcfyhCVgw8hvLxAdmufFCYHXVSBbAkrrnDW3Kk3wzU",
  "key11": "4Tmehsx5ckACRRxuGXPBAg6MYKHmZrGfB8gKWo7R8RpDgaEKM8pMdssLJsNUYqZHupzUg98cxa1QWxa4azAVH44s",
  "key12": "3CHRnupWD1ua4MeVEEt4ZpHiqzLc6w37Y5tw9Qxsvqo5u5kmLndwfkt1DnUkXrxL7mZhyAGRoMTadKxZz89yHjYP",
  "key13": "28wV87BUMZTUiqgMGMoxcfbuHPp5Rptd8W2mE2PWAXqP6EW9jXHbv6LgMaYc9KEMBGRUH7GYs2GJgWy6gVEr4wkQ",
  "key14": "j5Q3SosXA9A1uZJ946mBc3EfC4JXEKxzjrvSeLGf7BLhAZzkRxwChyKdxdrQCBcsBNd1CYh8eqz55xYPPkQroXC",
  "key15": "4Y27trg1t1R1ej2uKts1vU1V5RWhiND6P3KueVNuuRkBr8TM7gJpVjgYH5ckNEMVRSFw7bE4BBz3VEAmJKpYrHpf",
  "key16": "eXfrH2A93TviPHW9Chtz7dNLqxjhKPQyZiWC7wAfjPrmzXPc49jL6X8Kpb3hhNZKe55ypYrSVnWByWXZ249NddF",
  "key17": "3D88zuFzSfGDRQgpNBKDvLn4HDvksgoxUHdRfyEgmeXJjYswWEBkXSgPV6U6mi4veQitQvANAFumPwEzS9uUJzne",
  "key18": "2vqsdPqzUU6GRWhrniF5i4GSptpDBrrj3CFdkKAi8FGHzPbVk92UuxaFFaAx1nydkaBEX1SsVa5WpHsBPBvuffv2",
  "key19": "3LY8NUWudL7PNyadfkjcotv8eSt711gPJUrzLNB3aF38Fx9sTHDzMfEiycdLcNfZ82szCzcYbVMTjXEuo3We7VVz",
  "key20": "48rzQ127Z1ztAMtPjUJgifwUBVbd5zMdzHLomfVhwLqYWFi51Kmci9qJux19Dj3ckQc1CUxN7Kr14E5Y2ejujwrm",
  "key21": "o9a6xNuL6MLQTnUPbnac9btaqvKgZ8hNUQu7uyAR6UWBPDCtMDpvVKbYNtNZomEAMoMYHBzqafXLb6CQkJW5ShC",
  "key22": "2TxQ9wUwGtnF8qaLPajjLkvFABV2vpEQL7a6Ep25NYe8w5qz7FCK1mG9NFQUZM22gtYJCRgKc9TNZ2e4mdEaYN3J",
  "key23": "4qwRAp9LR7knEKzFCMtFoNfWJ3KxAKy2XoPi935cngQZpGSFTseDo6PehWP7tsMNaNf9M236Pb41xafXp2xRxUZC",
  "key24": "4V8csXFs2xuCSCcANUsyN5UfPARt6vPQmNgtxbn7AhoP1Wd8YJD8jmSx4oQSaGKWqvzqzGkgGgVhz6ERdRHjEmhq",
  "key25": "2HRCZ5mPCQFfEZbpEdQkZWnkruoFTWaJY1rDjLiXn9EH3MEhDFKj9nKynijPQFq72J8xcAXbDVgBdxbCDQQgxrP8",
  "key26": "3nMoJS2Cv3ssnkunoqYT3cwxnkYucSK9LQgU4yHG9U6FB73oTmuKxuHKttMeEB7rfwRp8zwWzDasWJn6PtWTM1GT",
  "key27": "3WsDH4zQWKRuQ2qR2BUUZi6RJAMSLKmzSy9Udk1x6SLuYQBTJrg6Fa6iMLrVCrsqqRG7RhNWDyUGJySo9RGffz9o",
  "key28": "63sQEqZpjig4bKAfSdakbv3Qhi7K4H78PWSoQc6FFwzfCwa7AMWJui9fucKxnLzNeEKsc3qp9AuM5bazTPWxfPwS",
  "key29": "2xgKC2NeNRzwyrdQ4xkr3jURyd3RDmbozLtwWe19FtRy365DoBYY1NEBkpdTDbEzVhcPzuXDjShWzzH2aEwCownH",
  "key30": "3msGKnMzp9cEwgHSYjUCKSGDh4aZkLNva2yQYmCjLRzLv1tUp5gkS7YVd23ACTtSoXt3xVw7vzTxHde5THyUK6JJ",
  "key31": "5XDZLKs284sL9c1aZ8Ccw6xmoGFsJUp6Fei2L2QBK6DvBJKkFXg74yZnSWJbTKRwKwAkWyGz9GXmrhZzkdMEvbUr"
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
