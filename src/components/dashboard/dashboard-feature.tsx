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
    "5sLYyGSQMNgzZfcJAVZqQPzWhJaL49EDrFwWBYd8et8pXbmYekMd5ADN7WEhLNsHZCzGVSN3DAtHYhnh9Zp3hSV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24BNY4WdLmjE7DdGCJhRTKytvoS4Fm7krEvevXcVxSDA5KqH1MTwomqGofzkq3oQqzMKTR8P6J6DetJHgVQ8QEWf",
  "key1": "xBygLc7LWsFXJtVdHAYMhT2kEAfqND1zaXVrWkL1HFifqCtB8YRj8VFsHxFULt4GRG8qf4iXopKJ1bYqoQnfP4r",
  "key2": "6Xw1nJQHZ1r75BVZvQ28HxDUsv6BKTGaJjW1QxjQ2rTiuuEUzcR89KVCy3bhRuSbDG9UzPJAtUZVkqkJtX1P55g",
  "key3": "4d4acedh8cPcf9DrWDuBSYDBZ9RCHMsWP8ewYQXppKBzAuQ9E5smXvPMeDHHwnczJ8mh4RmqRKRYtAhLR6tRv1tm",
  "key4": "4KhjLoSbuhJhqud8zrSUssigVxT295AesDXZDxMqnouPgaftiX69K1hNzH7o6Sgd4hEuGBy72UhV8qhdPp3kscd1",
  "key5": "52suwYEVS689vLBRnoLvH3PaPhb2UPZakJwvhK6ooa6Dh5MThDF11RZLaTbXrNdsT9yZCGWTwBbnh3YSCPZjhw3a",
  "key6": "5qMijQcjRNLShoysLpHSQEEf3B1kiood9endNgpUbZ7dVstQGHy7ms6dKyUWvzQRUY22KBcAMmmvbD6mxA3DsBuM",
  "key7": "3nRXBw2DuvvLcHw83M2DVtSEhF9tHfPJBw6uornNDKxSyzAgaz6ovjeyGiKsYPwGoLkfJhG3mxmdfwm9m9tmETov",
  "key8": "2EySA9PodEe3yay3CEi3BJq2cMUWwcpoaf7rfciNQZyKC4vECMVuc9qb2ZZ7hvXp62VsNhxdBv2gPD3rXiTL8L7Q",
  "key9": "4bLGSXwQRQGpnCLVJWM4bPM67B9uZVAhDfB1H2tbbS4XmULNLJdKJEtnrkw1dYPrjBVtfAiFf2NApeBj31U4BhTv",
  "key10": "36vBNHyMCBrZS2v7ig2SSpNrePthGMnnHg3potnwbBKeW1y9iqundezqntbvrHYcRb6YbrfJxDrgwwnZXQEWyo6a",
  "key11": "4yJCqQbpDDua7bgPjAtvHL1XAvwFiX39SoE7zbZnT8T93UCDYNc1YNF3oqR7TQ21ddXf4EWGW8yjShdrV7YUcryC",
  "key12": "4sNqMuH1y61zdJESNxvLtTatNNFLdc2put4UMhjwS8UT738Uq2DggJ5c4GQF2zWEqYyXD3iepCPLKZmfNgPTERa4",
  "key13": "4RGqTgpFbsgcVamz9DPowFMBHM5WK8Y1fDGX93fEJ9rYw7R5UTPHDe8YaM1KcVPZyq8bKz4caj9Ret3tTGDZTZrC",
  "key14": "2RFGyhAmfhRtS5vpHgWEevxiS32B27VXYVmVbKBUMAKVLW4xsqrWRDhbXWijGUgKqa6u9RorgnP8bFEDZNwN2ru2",
  "key15": "59qdvQDAsjFHHm6aJddk4KadbqHwMNDK9NoNZ3HhaWhiU5poUDnSoeC6oMsMFu6fABWjRP4fSxtXUMnKyPx4VM9p",
  "key16": "Nz43VUtaev4LQwQLyh5fw28aY1c9SJBwHK9HUkmQ3obfgckxC1ndEBVuw2HKkNycDxQKafnYeFHCFvnW3eCsXUk",
  "key17": "wHsLrZFrksKKan23oPWfTxbeXEbATpFWYwCZHDmMyr2tviPECWACeB5a1XqFJquoXc4MTLmWGoKf3UJpKkmdM86",
  "key18": "2u6sS4BSWT2CxpPWGFupS7H4W2ygZWT37qTRjk82ov1ETWwYkYJRRBq75RWkGzqsshfDYCqAoSah59vpALM2vUz6",
  "key19": "2fBFzNTSSv6ycAyAaUWqF5JJfxmuuVXUdborxHJ3c7tpvVCFe3Ni1g8rQ8hEdaPGykvJ3FvnNGABeqefejgKsHZ9",
  "key20": "3XxVPNR3QJ73R4hMQutxQe417Mfu2EYGMQG8mtpcMhNDKqcWNN7ZqHVTjgNnxvCR18D8GDJRLEe3eLuWmSV99WGa",
  "key21": "2WauWoJ4iVJADoxDQNBvmhY2fD1URfCqMvQAypsKcZvFoQgNPQWaCx9obFPFbYQx2qu4XhjbgJB5tMz2g42u9EWF",
  "key22": "5RaUvMS5vZVQV5HPETd3QS3yWSGP5cKPvdwSGrM3UK17g2nN3mLf2MwMsdPj6zBUYotrY11LACHj6orVKH9JbX7m",
  "key23": "51Kb4zwsK7GPz6k4FyhhxdQQrKvXcybZ9r12Pko6D9Wq9HGqUBdzKgW2tc5noxcbXWYe5EuW1d4MNoszxSKDzfg1",
  "key24": "4tihJuomYAaw8mdRiQ8HXTDKBrYeH4m7Hw9E24XE1QzfUVmYBiVwKUz2WE2Q9LU3VgMFM3HUTy9ZRfrUPGRdWFTX"
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
