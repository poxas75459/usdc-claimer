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
    "hNnTrsU11Cww9UyqmXprNtYnMXz9QkrUBAGH8H8QqWnmTbKEiKKpo6ifb8TVEGDDWTDn9LfWfd1GbHi6XQdvF3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TroPXeeZLaDtZHgJtKxUrvukXppSKdMTSZUF9Gopw1jRnKZZQ8u5ZmZNBcd15acLWxwTxV4kSkuET2z5CJav6GW",
  "key1": "2pUD58d8wZbcXMVznn771RnxzNmvAuvU5zM8RBKikJyFHUT27PHaUgknWh4Q7ZP8uB9TsVrZMze7FcTbx5nGC9qh",
  "key2": "2ETt2PBxVyipW3qsNTP6Ee7FWzg2WuGH7wP8LDjwpu2Vzgo6SaEAwcMdQ1Fp43TAypQJirun2z4LYfPpfSBZThRX",
  "key3": "oConDrt5oHsjt4JiHMoYVcBAvFLXKuQzpAo8db7JALEbnTYFPbdkyVMZbnZSQS1sigG8WMhAJXH8WofA9gMbbfT",
  "key4": "4TitvSg8FPgXr8enVVWES7b7d9TaQqVfjLa2Sa4qQe83UcnjBiocUMhcPGXuLf3Lus27sbDDBfPF9fVKfjX5PJq2",
  "key5": "2R6iCn8X5hJXnAXSsEvdb6Q8PA29N52N5MjJboSPmVyw2RDS2yWmaYG3RxdoW7qWNP9VfLvkR9v9VKT1xDmjiRho",
  "key6": "rm6hmChWBQbzMrSpLTku9cQpeu61PLmSVG441zjRNcRXr3tq6LEDYqAHUqcBUFF9Yy8DsyzzhuUQZi8466uE45g",
  "key7": "5avZA4Cbj6ozjMkcUaNBMzSLPwm8gHgkBBsi9CXwkbU2gyc98DQHafBKFoCG1vX1YWsaMr3dH12XQPQDNa3iCksi",
  "key8": "3sV3VAovHLn7vVNzKA1afuWfZPSHQCS4nXZ3qhLmPjFLa5neJk2s2zCC5YLK6awdTnqPXqteQyDfNj8PxY2FSPo9",
  "key9": "2PVvFe1AeEihYKMoPFRQ9jaqJuE5SYPkDWVg8YFtsLcXZ1BPBQFYSnyLzspUccVW3kvi77igGWiVtJU7Pt7enBDp",
  "key10": "pHHKJbyK9mHGEU8r58RwpYWKKT6CWBL3Minum8jmqRcfoJXCZR6f8WHPVuF4bMAzNjEWJr3rHL8vUouXQfpwhzv",
  "key11": "5uNBrb2yCK5K1k89WTpZyDmSXy6YXoNv12t6V6VbefSQXmgDgPwoxFMBbP8ZaUpfDNxhhGGk3hKQEH7dvqLA2kbp",
  "key12": "D6d22SMMVMAneKSdTjCs5og9CH5UrfVPYjBWs74dVNCkHsiXeC9ydjiUstCbBRfU3jLZU3dZiujxNZqVqG4PdTe",
  "key13": "4NMpX1kYBFK2JkUo4SSSsvZnfA1t51Nfspkrs1Fq9sp5khjCcgK83ELc2YtkzArjuNoCuwoz6h5VdGCSGe3impnw",
  "key14": "2ibNMootiHcYSV7aYcZujYz3rNetYCq7FJUVEWQRm9PQxin9CR3Q7JELrCxijr1rkojwduRocMBbJBPLuMeRjzEV",
  "key15": "5AwFiRbzfiztahDwP6Sb24PD1ecV2rys6puqS7pqhmQSof5FNkMMuBRv1KqrXZWmY5T3LGvMwYtcjXeudWNiJuMz",
  "key16": "5oiqbFHnXfxnXuEUHDsPYULt3aJrrBrw2CUsvNcGHREdVUdxjRpFaKrjLGqG7SJDVqb8f3v6Q8kt1P9t8byjVUdH",
  "key17": "5wP1pef9iEEEH3mcAWzm9cZpjg6mn9BZ8nteQczZr69mhM5toz7cyRkgxVSL4HiT6X9qUfpZiV4hnJyuBVr6AE6G",
  "key18": "4sKYyPAgdok4SoF4ifQU5FyojcBSkznjGSg24YMziHD9YGfYy7Yq2bU24BkW7uqHS3GgXDRDoeZZuCYLbpztNcaA",
  "key19": "4mt8Rs2irDcrKAkvNTkpKWhq3ZxqWHuUVj5GNf3wDKSuEei4d38E1xFL8jEuqKj8nsgiZVKfuvkmfYSnH6q79ASP",
  "key20": "3Deo7J7kV1sTcrmLbq5TRYtDouYDbDV2tYkuUPwrS9ypE12EeVWZJ9DnDAtP4gGRgTuhjmFvrB6KBR2uCM5iAgBE",
  "key21": "47U6TbFxiEJSLUHycwZpPLGhtY7hDpj7yvFacJZZzNgAFi3n3vqNNKig42E6PxvcJKNBXXfbxPj5AmdhRwht7QEm",
  "key22": "5WnFeTBVegRFCEQDF5tYYrsJz6edq2a85TWqPZAzxVUpKfeixCwrdGXQMQXibW4XWzbwxgNYyJtgtefUYCF5Zx2Q",
  "key23": "61be6n4mMgKnHmrnzSGrpakhS91yqhreD5T4hdYfwcrd3WNJwtT35C3nU7Zwn7tNMBnFyXaVtgZywYPn9Pnv3hjq",
  "key24": "iyL2N8KVU5pg3U5RVogCwvNFA7oQuGL237NXKDwLshG4g8UBNyAoBAJCDr6udrAZGMH9zPogC4WiJ7yeg5sdirv",
  "key25": "35pBHAAi7yVXihRadEm2UH6bPj42AajCVGcxq3AHCR19Qa8fErSunggxxogNe4fATekEgjCsi7u3MeQa32MPRqsS",
  "key26": "4BWrYuT9sEHWWzahRfFGSGndBVjUDdvY7JsECCaQ5zGy2R3iennBxXZu1vipgBED5SUwjZbkHU4yi3bsvjo4aaYF",
  "key27": "4w4HCU72wBUu99nbbRyrFaaerY9NYPd5TMUcpnKn5jX4uXpBDhBnSAs4ESPxBDsgmvNGqAHv3jduw8RS7H6KSDif",
  "key28": "5SDzmvH5gX3wyEbrbvHAA58FtAXKaCyETARD9cGUB3egd7upUKS4cjCY1ehqSBGFxUi2KndupS9aJu4fQxpKnMnB",
  "key29": "2ZycfuJdHQZ4QL3Y8oLKCfajMGuYmv5gYzsw6aMdRvC1QQvWGnP9jHxL8xKMMcQYMudevpNfe2zU788SUsLwTDqw",
  "key30": "2tDQ31G4UFPDW3swPdCNUgFcNitpCiiqdb1ZZrYc188h6xJex3cmQHsjgLGCzw4AZYn9fvx7Ubp5DSjCJB1doNnh",
  "key31": "2EWmmtwsFmiRUqWsv2VuJWrX3CHsSvsMMJ7VWnDJApTgKRSfk5JkAg3dAvCgE3MXAoGFZiP8A8BvGpd5ipHCHF7S",
  "key32": "y6A6gomYaq58MUZh63SeadZD1r8PjR2n9AnYsRM2bgBh7KD82bf6gnTWTtc87sxnuwEm8sz4oqgbD3iEuKkdHLB",
  "key33": "nSTdKwToQ8skbfRtF4DgGG7hWeDXFnSpkETUDpso18Xz7pVxNxKQCw8vVGTg5d1rahsB8oVPJhC1VkfopGhRhxK"
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
