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
    "5JwMm3P7YC7EAZyBXMFnjArsPjg1w1ahHZM4cg8w3NwFeLY95eJemd9s7v5VXZjDBCHReS7uJQHPqvapHJsMM9pB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J2VHscpCFG7LdnfUiffzHBk7L44KcgYqqUN4nqKiMb5ue2BEc47uLvxivwAe77xo5wjHECETMAWoLuFuXMERKxK",
  "key1": "4s99MsAuXhnYpp7A8mBikGR6RWmYbvXyR8tBYBbSQnDaeqbPZTQSu46XnHL1YSbFkALSzBPCWxWWXvvqUsiMpA7P",
  "key2": "4QmyGb8kANeX12ttPgb8v3chjA9gaEki2crKQEgSfxqitGc1nuiaAqdxMCxiNwHPUs4uTmtCJPygqWLkDn5TVUuk",
  "key3": "2j5qJKMFp2etYTzHitaAtjtRvzcuAGLQ2Y5MxdTRzTnq1vhdJ71E7uXusYYkmKFnBzpQXMTXP88YC9VH5VPum1MT",
  "key4": "2QpJjBjD9TVzTHF6y3CoHuNrmCxUpuBRgA8VvGfsG7k72ZaJ9qv4UV3oe47wurE9wGbk24HmM1xKWEiXxauEy8N",
  "key5": "4PSoqvDH93w2reA2PhhtkupQPWe62eLL4bsP9XuXr5FUWSNHmw7VSpwidtzMdtANd5mBFtaUajVVsvawxeug9aDR",
  "key6": "5YxFpCazAwcXbjUEuk54vq8K4qFgrU9G2WcfabEdWLNbv5VQRrQq8scjoBEcq77A8uc8VstW8t9NAVcsXmgA7QxT",
  "key7": "5rGGnm11j85QDL51gcMdHaYHjDVhA2C9FFprk9xtq9tA3LkEe7pd8RZovnVqPn7rrZ2U8oxPQjQWBidRT6CYguWH",
  "key8": "VXMq3FkRsaeyWskq7qmTdmWYtEhRDFQ2ezCDfon8XFuAyQko4KsFkYX2QU2PDYUQ4ePNxQCL2V551Tjaj3bDxKR",
  "key9": "5iX6QF9AgNDrB1uzDLdpx3Uyfo7SsTUimjRrDRmuLRuRook89vRrvy1s52RKYt9BUXLV8y8umftYw7Q9wakjWFt7",
  "key10": "51PbS3i7Ar4nMWse9mvTvdKA9SwUa9DnavncQxvJPxakVpkuR89wWA8cSxR1PWE3AUU8LrkpvetZVqNn2gc3Cp7c",
  "key11": "5GGVuAh6Pwr7BCnzjLqknzxJCM8qoeNKK6NKPhe2firQPm1EzGJoXEPH1inATNmAq6PJsuZ229HAmK8erWFTaxkf",
  "key12": "23Ns4KL4ELsNjiBCCEaVcEpr6BBVtjwcWxFSYGva4sTCksEaiGL1ag54saqPs5VEU7BbXRAYKRMCYRFj45XBkc16",
  "key13": "M1xP11PKkecnwsyQ8hAAbZxZhetGzBUwqHUenkzMzXF36bAp7murBNWUfWzQuTTYgvX4co4iNYoKzeQ64Ev1y78",
  "key14": "2jXiqVUNGjiCNMAt96ofpovLyEKvFUZG6Rt9L8uSqkXUZaWmvKjfrxc9ahU63s2nep3UHQuc2HUBqP5p8aNoNRmi",
  "key15": "3pPA9tJRypBX9QQ87FdGsvUHbFUQAfRSjteyvxpyNHfqrX2g36A5WCTHrkzSHs1LFfxVH2Df82qzu2cth3oQJ5Nc",
  "key16": "kEByymnd679VRE6qJxvmR6h8AkjWd1BiNic5KRwjeTD8jL9Y9uuKng4P7DMx69Z6d8NrvskDEQrbkRdSesJZHyH",
  "key17": "2bPe7m79aZEHFuwXzVFzYL96kJSiWVKvGMu8vHcgGAYCjq1wrQkibQ3LUTjLATNWfqzXJFGnFFVFYHhZvSuNHf3x",
  "key18": "4DegZ2sFzdrKQxLRvKoLZVbfdk4ayBNEW1MB7LPiYKSCRkJNje9hcMToHvMQgd2Bc7beRHEout1jp2YyXqkr8Vqy",
  "key19": "62yjocJbatznq29KKGXotZgGtYU67kGWPRrsK9VXo8U5j4JDGT9pMirkhVMtRG8o3z1zNarU1wvXAja39HmSNsdp",
  "key20": "2jovLLkhAe1C8Q7AqRiT9VywTYbxNHyTu9YhC27XE9oCpAdnAgHa8YZwzaxGZJWAizXMkohChiYaz2aZVTBYRuji",
  "key21": "4cbWLJw9v4Fx442JzM5WNWzqpjiM3WSUcJtdboN78DZD5g1bXvW879bjGyzaKuhrpW71Z8KRALdzya3VLiHiDReG",
  "key22": "2vabi7TFez4YKugAjmLjH5zQvmpAFwXhBsaKTZvbMTpuyhFntmP4ZcatmdC9PugaPqpa42fMp6jWBidWvd8NhavN",
  "key23": "yvNQSef1fpfYd4jTVnXMm53H8igjAyjYYu2Q2eXWuzWRTha5mH4sUy6NZq1ku2yKXzjtUjonaXbSKX9V1cfWwLC",
  "key24": "3c15penvjPCUS4RmeToqqcFYg23Zt6DHmrGX3qdJiRa4xFUDUKnC7jqWKQku5nXic1EFsJEjprvZAAoCwSMZWP7a",
  "key25": "4KjdNiKR8XXoMvk2D2Sbu1sPwQZpnWQ1mwepAe1Qjs2J3WNoCBgaVYWGp9W62Bx9CBmP7WFFybc2amRQaSPQZwnd",
  "key26": "2V6hUCrmxkbfY8bYpQoUKkc8wdLqAuv47CYDZP17ynFJNmKhKVvi2aGypRBPPiaRfF9LWxjAQ8jZFiWAJ6GutmaH",
  "key27": "5MiZHvygdekq9pAmZ5UUZgL4eqyziR6w2gByjY8CwhxcPxeX1nTmkqGQQM6uX4F5xs2nhkinWdXzusgyiisARkW5",
  "key28": "4RaP63D8kq3we83DuHCzYFpomdWP7TDRbipMwwG1ojn4u4haNdrJAnXrxJ1RkB65VnxV2WmM92cJPHo2zERLedMx",
  "key29": "4PeZzcoPd75uyV5cefM5ehCtM2ondCwF9FXMxunNtMoD56jhWRyAimChtr2bxLLwN61Wk8oGbuZEQYQbV9HVnEPx",
  "key30": "RQsPHzg9bg9ttfhw3XWB5F51uoEUDL1veYDSrvgTRo1cqzSfHiVT5WSGcuGUKrqDBnGf3HsT4q58zxG247oGJN9"
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
