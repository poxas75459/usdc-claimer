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
    "3wYpFmSYzAbXKUUb7Y5eqRtsgZ491TH4Q7gqhjRxHFtukSF9sKc9j5dFRKnFQtp93PCK1KcdU3C2xyXsHJKedraX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LCSjgYiCFrwA8ZDDzY6h6EzdU92NqcPRa2Jv8NvCR2T5GZs7eeRj27DSr6fatrZyVbsXGs4acHXzS1TE2G3jaWQ",
  "key1": "46wb2Y9bM8kVNAj9WnvurVfJxuj6KhUt1UZxwsa72su4TxbnXsSVhMFZCVdiwz2CVwhQPzt3XxG6X447T8onr2Gc",
  "key2": "53LvF1FMW9zkWLH4ZTqdf2T593psAcaugReECDRmhqL8ms11HNaTdhzmhgwS3KDxHhsobYzgHVsMmVdKS7NAho1G",
  "key3": "2WkNz14UgWWseidbGYkyUbZX53NsHxiio7KVsAFb4sL37P1C85Vy4fYy62puix2CCTtdY7aQmBRMc8K8mrG9ANx7",
  "key4": "2hEJaPBahxYUdPsQ1DYxCiWis88cKa3sZauACx7S5V786vQdQueknaYeLryDGhzqKsu4NXHnqyw4HaMBuXY5jVjd",
  "key5": "4hTbknNSoEs5ZnqDhkCercHdk6PyPbq2JqZ23mz8RrxQKSCMaPmXvXf254wGtnGoZ9deENFJaVqU86DYHhNHP9PF",
  "key6": "4Pv3RraToZa7kzsu6ukfwBpK744s1DB3mnTdRkuaPfXWNMGhuWXErVkL1gLXcCHXBk7QBYgoaZgfuqEykFWTcqLg",
  "key7": "33HxTj1JkyZ7tmN5huHhdTgdUdFkzTn9npHRpAk9WsBuoVf8Z8fELicq8VCpQw5cvgjrz2fdmto45a5yoUjvtRfQ",
  "key8": "3tCEppC4THavZh3mB8cwjLhnnK1ZEocee74nmgcBfomsWd4CfSHTUJy3EKPvMhbnJVMBNooLzEN7uRcwxHqbfK9g",
  "key9": "23kDan3dKtUqvQE4rVijKTxuCPbEWbub4LDnnQ6aE8WCumojsfC6piuTjFo3pheFh4mKMeLc8q71vEEWaAZ7RE2o",
  "key10": "3YrtPuCNqyWnV7vv7NaWA5tW1BWrM7AodhA5JWZs6mVVL7ooZAustrv2LtGe4iuE6vR9giNL1CKdDNPiHruZZ5CR",
  "key11": "YWvZAp7s1zbpsG3pCLg3547z99WUHx2QfVAxZFhWt8eSkLDy8nWUV1BZUNzT463hwNZMcavi5T48ED9p1iA4itv",
  "key12": "4aNYW6tXeqkQJktxqDP8vMRWQALMfQvsXHMKG6odPW2p3f1r8DheKe4Qpm2nw4Q2C2fTP8PjaFi8sB1TT5i8vktj",
  "key13": "FboDYYU3p9T28aRXDSuxoCumpGSoA4ZifdtwNU9hjgeitGj2iRkCGWoB5i5jz4qa9CTsFk8MUkEZzhZ6LABEtuZ",
  "key14": "2TpgUD8xn9YK1FatMe9N4wPwKhPwfyNjGWZ7ytkgVHf4kFcbCX2hPEQWy1aBKaGBEmNkjrhChHNKKZPGGP1YwBQP",
  "key15": "e5yacJ627ZcPh8cNbkehwzg3ifx1tKgk9MZZW6avuj4EfGnKUBhW964xyViZ2WZzvs2jpU4zm9PdoyusYDnHMe8",
  "key16": "3qzP59UpJ58ZXQwyoJdkCnFsBVQStdTg35XBjcSoX1EqTAqU6cfjaq3CtgPgL8eYQaX6bHUEmi2GDA3LSzLGRURm",
  "key17": "2BvqjWFymTWuZ5WsoswszgqpJPrMKRBN8RqSBBP2vPpvHgbudyBQoBYUsAJsfhdjyXNxNNk1qGJXYMgvfHnysVC9",
  "key18": "1Tfwm1YMAUVrjZECZdjdR1NHg6kSnMyTqFq67JiUGyPauRaz8YiutQSWnCB352tWrScRBB6yfQeuexJuRhgLpYY",
  "key19": "24yodcxbbHDHtfwsHTeG3rErmc51aNUmTJNRnDNS6Yhx5muFE3kJ8ye9Pw7LrW8XzVDqJLZ8Ypt88DwyrhW1Pvgf",
  "key20": "FwYFgm6t9ojy5zXqDNpG6LtCnp4fcVXPAafKFa7mK6CSKB9Vc8qmJA5k6izAUrC9nTdy5ZsRk677gq78148QGzM",
  "key21": "bvJ5eqdgfMDkF5JQAJTkZomEBKpXK3ZbPk8bKzfiA4mQU5b3QkSHzS2eaoo4c7SQLAv4q3ujY8Ug5XDVyyMKW2M",
  "key22": "5yokXvoRzqufyuXTHioDEnpcdB6qr18qa2DPm8FWAkwWTXMQ2mTu3Tv8qYVsGbWx9FHCQEd5eELmU5tFnLk2tGsw",
  "key23": "4LYUyvBT2hpWGzJB8DTLHpeLxXSUzd8RVm5QCYtDwTxSFbB9wLg53ZsQkJ3JGsht58ZpnMLQcrgz5iHGfLCtWLxg",
  "key24": "5Xe3Yi8MjLNM9wEkA6uJgLyygBRhrwe3BXhB4GE6u2d7aiH1NTSNeHBRF6u78a2oTpnxn2cFsqtn7VEP1Ji1Afey",
  "key25": "5RfX8xeYvLt5XnuvtBUPTUTsN1Whik4pU5M3SGdRP9pZtzowinRzDkQyNTenDymqMS7JFensss9AQFh3hTfEzZp9",
  "key26": "2xDthbmfr6Y4o9XvMka1zPUT8TtC4FkohueaGocHYAzAQgwm2YWLpi1dbc7pno7p1Av6XZbHwMKRN3M5NavpNZ8D",
  "key27": "C65qs4k1hZtjXUceYnxsYHE4dUvX2UXiJ1kSn61JWaPuQBjCnC43XhjekjrGN3txUF7ak1vsSA5nkP7aaE8g9qN",
  "key28": "43VUH7PamF5FREdNoqoYn3zS2ZwvroMv8nPMrXM2o8S7nxixtCT9m3bM8YBxcEd42FUxmqvrfyameyeRrF6x8Gdw",
  "key29": "51oXtHFDXEybCXYn78QLr3kutRk95KV3BWgvxxy2gXdxKEhaUZUVPMRFntypfj3JgFVEHGk49ewwdpgui5j9MG8t"
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
