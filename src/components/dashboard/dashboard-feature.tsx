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
    "67d2phhUjjcJq2rkohRWbbs1VC6jRK9VrGcthTnFwWc9VPXZNGs7WTBxbZeAXP5ZB2EE2Q4iGQBPSaHbGKGoKbB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHrDCdAXxqijhpY4JRvkwcP4yXZRRA27uub8KzeLneCuizBsVFq8hmXdsFjbWSxe5e34DoK8jgrLnyj3KvVeYhP",
  "key1": "4RKWaaicMEkUKcpVEaqmeTgCfLAANY7kKiBsmfD75sMkVzm4AwmHVkRSVmxuf9vtHnUL3ddhchAQPEnxZmaFnZvX",
  "key2": "WZo6VTEqa2LSu9bJB78KrUKX23oZv9HnjRqxLtr4AUzoVYrbRiSQ4XPuUUzX4C3shnT8PicaF8dSuhc138P7SZ5",
  "key3": "3ZWbgzsSkQr73v12p91j5vhytYtwZLshYtTCj3mnPR11GXUmpuTH1SaVWQULHCX7kuVon3UyHE7Sjh3PCHET7hkp",
  "key4": "2MjsDkeGHq4EdVnpiTeid5dMtqigzEvNzbojzNPUNp8HpNVKVr93TaPM1RSi3obXYQ9ZjFtCq8s54DRB9GVFFrEx",
  "key5": "31fddfbczSrmPkRXjQcnerhfGYgL7pc3WsG9aq2pYmLQpLVGF1vQpcNtMDPjQeg6SWAFH6rLmZBkN4AZMhG1RQDQ",
  "key6": "2vwYKTw9cHdthuhPUhq1GozD2EVbEmMiuNHiQa1woGkkwFxQeSEepfrbdC56qqrqCvtWWZqwtrf42StkhPE1FR9F",
  "key7": "4EvFPLZYtqVP6X2Ko68FtmjVAD8zYenivigLY38zwzMCxYeCp8kd1a8U4bkjMwsvAU6ZAKWxkMhwonpEVRCq7NRa",
  "key8": "WUcZsYcHVBC4FKG6xaeHKbGSvj6Z9SgCM2d5PmEtW5gD9wxTBYUiKU4jZsAFocH1Q592isKPXgBBh83pF4VQdvZ",
  "key9": "5xo9yPf6YnRrRZ9CYCw1vgvzj6JXMapiNw129yXGEoJKsrqyhh4Gp3WhFMP9ymgwVPHAWnAYaEQqJ4bqPAJNFFLn",
  "key10": "4UVkUbbFC4jU3N3n4KWqNPhKrcrqUFTJBTAHrHH4bUxAhd66Mien3bpVKMc73sYDxCdjNb9cgF5UZ5TGh4c3ePdi",
  "key11": "23M9kCiq6uzTD8erjjWRfjiKASXTMsHJ6E9GEjLPgzJJkq6RxoBNyn5GkyWUxcS2U8LGVteabNfP95QkUEK4BpA2",
  "key12": "52vBAUsTxMSkZortRhwb5CSDW2WPngaSXutaP2zirCD3Coa3rsdbs7j5ovP9vsLqFiQfQJUtNt3RD9Azz3mqTsKp",
  "key13": "qreFwoCzzQZ2NW51GewqQipE7oSjoBkMugsR2LBPKRTnYrBtJaWtF71AuRZb84rnMAhmdL8sF3UNe1aBELQWg3d",
  "key14": "4BWh6NgMJydCfeFM9HBZAjuv7NJ3QgFiMjzZGNcLgG9sso9xu6cSXB8ZZY9gQemGzM9zFuM1CKduHhFmTGB3xaCX",
  "key15": "2FcAHC9aHTPpo5zvyyLtWKtvcjDZh2pPNqjoz2ukeotoFaWt4XpvKTWjvUsafYQN1YhczN7AoUbYA9j9J6DLdpJ9",
  "key16": "2JRHdaECmwCeQVxXKJSxpQPqST4sX8c3pKzyhLqbBUQ7fHuH92nNvPZPgfqGn5wAg9tu1MegY7N6FyFV6DRJiCYb",
  "key17": "39NDCyczn9LJFSWeMn7dwXj4BbgXnQPAsQkbqTm6wjWPSJEWxTS5ubN2SUN4m4QE91csoJbZcNEvnZoQWA6LEip6",
  "key18": "21TpivnJ4nFVaCwvH5ompru4Kxzd7bNG2BGFq7mPAFHDyc8icNmb6ZYHryvZ5T4U1V8sHabTu7e5zcRDjxJ8AUZD",
  "key19": "5YzEnvJBMggK7SSK2TVm4e7WW53UB45eqTVRv3nXzYZZ84fxU1rjpGxkMv176FAuVW34ubr4tyNUzBb1Nn8XTBYq",
  "key20": "4WQzvQjc4czPsGaB9GLvY7Ec2YaNqpwCNuYhXD2CUgjKzpFS7ErFWzQRjC6PQP9oP9miLkuPJovzyXW6i4LUJ9su",
  "key21": "4PfMKmyHK5tRrvUYhFaUTzmrAr5zWscteK4nTQzn2abrtHTmNfmzuQ4e9hmveoE4r51aPXfoQa2wPvfmayN5U7o4",
  "key22": "stcdacu6EkNrddGLEhCeLXgy7dXdgimvCvSMUVtiKp9th95Ls2uCMRHqxhJy4nLMvMDScDbZFwex9gED2WbksMo",
  "key23": "3JcnWMBFcPmZ5wdo1EtkGoSUVjWYTuejXGsBiYNuxmLvHLsN7rqKWA7YPKe6dz4YEEmX6Wps5gjKZ8d2vAJFxUW4",
  "key24": "2jH7NGcVzEbrJ859Bkx5k9QPL6TAx6GJhQLvDsd7XpeKa2SGqXjko79D7iZL12mStQaddyySqgB3PjExkedgsiMf",
  "key25": "2KFinoTFugseWGaqWHbPNARtbMYsCCddcCh27i6AbNeZYMkTAYiDDKB1VPm7ijdr8cmg5AF7dBDWTtfpQvKCjR6w"
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
