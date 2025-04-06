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
    "foshzYvLgyUGJ5syFoDDQLUG15FMyVvRbtdBa52fuCzAgaxmH4uTQrekHqSjjiVW6GKkZQy1JGZ4hu5Cn9RkMDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C3VkUAawcgVupczAR39kaXWmseAHJdbsStkqx4cXQSSTEC9YrczUdzUFgiMfRiSVJAPxk1pMZA7fU9Pz6V4qAP5",
  "key1": "2dd2kc8uzsjJCrsnRGHQgyeHJFYTPDWMUcKNewN4hE3SnyJzVRCJtJrdRn1mdU1tC8mFNXtWUaUWRzAZVLeWYSoq",
  "key2": "5E7BPWkTP4QdatvGGL26aywnywmU3cAbV9vCEsxr1zgC7GnCvAyKZw19zBDFDheNCPd6n3s39Hmod1PjkLJexMiA",
  "key3": "5REhw2By89Bwmhu8WnTJNjPkVY4tvrpLpwSa3yz1BwfgkJvuSgLUAKCSoabH6JHZcgSzeRwNGyxmtzLXPmwGHE1e",
  "key4": "54egHcnjCbnGEPnABhzJPfTuCja75uBjnfeWvUvWgSw2kS4KcLsWRjCJTZjpTZjhT9sQeKiX9MfSCx9GZW69E7zP",
  "key5": "8pxCMp79qBW2LkecPSG4wwfi9AkVVRTiB6qGAB8rY6zf3Jhf38ABYuerbFLpPLYzXQn84iNe8w4bLV6N5e9XE91",
  "key6": "4mWfPrW9D9zj8R76j49oP8JXV2LspjvqCm6UkTmpVFCC8srHLLfQjbaki8hRq2sX3UVq7HdF5e4PLTEZnBfmqBjp",
  "key7": "3s1NTV9EGcPLHnAyG1hzVTMBoW2pePHrV8xY5v4Yyvz8vcj3YDjZRdZ5uSc7urYks37UbLjV7iBPHN3naTDDsi1z",
  "key8": "5rw2D7ccSBx4DKowEj2U6PTAsKC9q4XXJv1gXuU1UMpUH2tREFC3PZNeK4fKX4zoa7PDbHFNeMyAjAPFwUagBCzA",
  "key9": "XpgeuKCq7ankknXX7LgTjo8tB9Jg8q32TifQYyygYnXggHMrXB7iQadoLinFPHkzzntJZ8bJGLe7HfdDXNMZUyA",
  "key10": "4ywTRBPihHdYhrp3qEycLfconP5Mxh9P75zVaEk45ykV5e1roR4U9h1FqKsXNJWcD2cVGgVsoEnB4qoGTztunWNa",
  "key11": "569JkPY93xDtLrrawXQfeED9AnM7gb8guqqkBWrEvWUeCLEjAtLhAFd84p6prTwxEqBrJYtGFEXuoC7EUc9EEZvY",
  "key12": "37q4U8nZyM3UNtL4CLbmyfFx3bhDwsELeynBq9EwHJJ7Q7wtNEcAcyNCH6hEcXT5winQFZXBEcZwNEH5PiTwHMbR",
  "key13": "4Ap89gX9VD3CLxgrKK5zfZ3nmmcyvJowFFxb6edDWsNsBCdB4FbTrToMjEqGZ2mi15bNvJuHQgWMpbaDQF2LWgT4",
  "key14": "2HyVufcXanJKgoDHUMC6H9M6n8GhrShx92Pta1xM7gAEG2AfdGfQUXgTNq6Unp3oqp9gYJCeo8TcNnEjQGRMxcHa",
  "key15": "3PBFtePpDHzrRPGYb4JS1Cos9BcvXF7KThRYkDY3tPbqoXgo4reLg715SZDftscWFyWuET83e7PV41jDQBRH3JWw",
  "key16": "4KB4HvLYY9UkZL3ZyLEapKdd1BMkE1eMXsX3zbbz6nC6s7QwZ4ia7dsiT3RaRKHWcpmzESJLB9fuiBYYa3xCLsNL",
  "key17": "3xEffaMS3LgsXfaqhK6dnzBTPPoBTNxhc1hnPExje3yG5tN7fQKkuV7qzdxq8wizJY2X8dMMwNMbeHrMwkjEAR8L",
  "key18": "332HwVwJxALEr8CE5rvAMe51E4qcXTRgiJ8CLdcn2McRQK8C9Z8UgPE7UCUj9dZZZ3JyhkBN3WuKz9vNMq1zvpA2",
  "key19": "2GtcQVSLhRcAf5d9eSD8L7x38CY9Smv2wYXBrcjgfZyN49it2Z1U9eZccUkxkp1fng32nmmRR95789w4CY7BHV15",
  "key20": "5G1te1di3go5e7nwsbWtiC8S1sR8XTFPu5iC48Fae84FiCDtQehTehEDGpRVrKe8HFP8F2dqJjpe1YmHPKHsFYoM",
  "key21": "2FfqGDktLj9S5pvf9JBUyyif7Nm4EVuPWLHGZRBCnWmbKpEdeaCnaYqnVZK9vTDkThU8oy8FmQXHxRbbFpSAcapo",
  "key22": "3pLnVP1M98ZJcYTxo9Dm51BMNwuqaTno3W8wpQcuRBeEzTSe3vTNb14dvUnNTnhAXRfVLYaSHmf8GcxJPobxzVqG",
  "key23": "27bCqD5DsVdRGWej56xvNKpgSg6h5HGiAHcbyLPXEa2T1XdGHLtpHZgi47dT5d8d2UAu9YgeNNH66d11kD6uWGP5",
  "key24": "4Zf7z5mbapvDfmUHmoab4heAL8BTrsgsJzHS9Xjs7nb47ngRCxT2EUY4HhumUVLKUqMf8ETgFHfbi8Ai6yQP1Pe1"
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
