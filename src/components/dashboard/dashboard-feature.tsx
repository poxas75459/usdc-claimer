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
    "4Gdy44Tt9nrFZmUAbsNBhVZS3b9erFMS47JYkbDKWS2aVcyMc9m68RdHn716cXQMskHPsZRjgMesB6k39UQpkmD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a5gBjmAe5ydxJrXY3RBcWcBtwQzX9NNuCWYwTgbVV8cLm5Bo1eEopeDjXFB9Vhm6D8nbBz3gaxa42RdNWMim9Fe",
  "key1": "2BcThGdHiMdDtsSPwTejF8jooE8pepHNvYVpFw3GvdBcJyuJBRvhyyAtkmczgsisyXAQvu85i39yJzH5seKyJurV",
  "key2": "3Tht176AtTYcqncd4Go8vU9WNGmktCPCULCbx6c349w5F6rDLxgSQJzqBBw4CjLNZqcxqucUVYM9dQQNCpiM3qHV",
  "key3": "pUm6vrXE6kr76baFbSp4F5YoVpixrnadaP4ZcKTFn78H3vW7ffg3C9hAVPgGfhRKLpFYikGTEquVNcJ2qsppXc5",
  "key4": "4gbyU5EviYeaLPYKUVEmMkuVaww21YUNNzSPKbzfvGQwkV48kt2YHErnrfJhFPSwhfNsuMXycnAwhHgP7x3bHPuA",
  "key5": "31R7o5zSF19w9upMNTAqrjpUMSJVLG4wdrmkbQtqrAsTTXxkiC7V9PjDec4CcBnzucJpmT8sfwfnvWmoziMguKc8",
  "key6": "roqFLBprpgFL5bFN5vuqWLiHNRjSdw8XLskKvqVfPJF6Yc4KnqctJYVtK2qGAvip85YW8eK1c5AHm986CwuV9kz",
  "key7": "iwCWZ8fdRhmPRbDDJuF4txXSXt9SPkGtYDcKAt2VwZxhuMUrDFJuxWnfPfQuXgVkq4xqY4ppP4FNnADp2LbxANb",
  "key8": "5q53EnHhZKpdAkSfYDrbDGCjW2HUf8SAJGPZNEJoYEu7H8r48452AAmPMz4kBccMfKBgBm2353k3UnDD8nDXrN1t",
  "key9": "SSdms3UC5HY5zNPMgUT1GYXvSGP1tZAhCyPcVeNPCgzYx36tcrpta2De8puu1GBowRriUiw2P71WnDGZEAGzS4s",
  "key10": "5cXgfSsVu76bpvHkV4ieo5FyPEKht2koFnMTgKWPsCCdsJ3iB6VGKGAHruTUprjcWwkiTVeuDbSu6nG9QxTnioDm",
  "key11": "3qXA9dHB413jvPYbEtFVGD8YPbvtLXPgfGCkYcvc9U7i8oNh8Dp1YrbAKWwWzUZcB6esztLbgnCnXVFMPEoLu7tf",
  "key12": "5oj2xe325HJX4HnhaFkX6wDgoeMD4dogqJmDW8F3TbEmp8kYZzLfbKZaafxALzbpxLdDNrhDc2mnhxcRgqajNcRU",
  "key13": "NtdjCU7qKh6JD7YRbyXrYGcwrpWfyUafxYWaDFpHBaXSULebV1bVSFkXs9dDLRSqbGYsqax4AFZszVg6FvoRa2S",
  "key14": "5wwuhTSAkjSXs4SpmMugLMW2tKoNe7B81b6bsvT9JShhZMASw7KuWqcqAmdhRSGuy42qx6DM2ZCKysJDmt9sMYaW",
  "key15": "FpMRCBwfRj57mhtPgjWYAXStyajJ4DEhuh42jLsirUG3oCQgLAprjRfX1ysR8HMpB5XZhTS4VohXdBhZyfUXDZ9",
  "key16": "2woAMto5qoEhDuTAja7TmkB5Nh992vaedro1hPfmYfFFeUcCNizBuLmBnhEjG2uSZbhmXLxFZ1FEpUFbcQYxjyAx",
  "key17": "22J9DkP76WoUe9D7YJjh2GRk8LsakDBvzQs1Te144uw5HovH6roQ2SuRyufKA5AJnZ9rdms1jfydX1M5eBooWZEL",
  "key18": "36zfsbnrnjTsxAjYioazs35BfmP5yk1oQtkYzJ67FQW679cgifHFz9QRUdYb3ZWmqFXXxPBM2cmNtJMbjnFG1nqy",
  "key19": "3SQoTbY5Cxi1mZUKWeYwhHUeVkoqXFtnqVJyXTB981VxhB26t4PVAT3j6T1q27NGACpw8HKmWyeLzJQxPBsQSHaK",
  "key20": "4tqj2J3wbbdC456aDXsktpvF7ifE8y3ArKoRJsMqgn7fDHTJDbHtdyeRyBXD1b8uAcixGYiPwWgpEUpXFJrT69LW",
  "key21": "4uM5MfwHiR2apKVBqrfzUNgiFmEAVqD3Uzsooi4EWSwc9YBYVztF41jRCGDEBkhKJdVDqCJ5k8q4m9kz1MtGC7Z1",
  "key22": "49mPRNS8UzDZvMBakknUJTirXe3AFjCkJcAajCAUmCwzd6LAZygbhHR1pKc6ZdQWHxWMiAeYQChHayXoGjpwkmRN",
  "key23": "46sbbzD6Gotog3xP8UKqwkxXqNsior6MApSaRmyHFBTxtPk3bPVmqnT17vX2knziqKyJS6m79AM3XjRGnNHxJ3Ss",
  "key24": "4Q9wu6oqVaVt3cVpztQ9NfeM75x95GzkXKTdy557vuDyPB5hXqwHR5cMRpYiG4GSgf37aWojgjHM3Qv84U66RvTW",
  "key25": "4mca3bxW1sZZBMX9ugDJYvUR7LxM6jbXF5smxN8NtdscovHWToCS23zRKqK31MErQvZ7wPQePFASXDqsWsxzsunB",
  "key26": "448PGWFMFNrmnJPRvZC8jfMdXvN91smevohLABTUQUFGRUB3tKEnt1ZeFcPU4ecrbcrUxemz2SLHnGqtfKsJh3VF",
  "key27": "3Xak3Vw4gtbi8wEc4FVtc7rhTAZWsgtbQoiynydJeA85tmGZffYjcxuhz31R6jADeWV1JAPkBfRYtfWG6wruy3dL",
  "key28": "RqPp2zAEFA4m4LvwB58RR4epWsBPJejounjpgw2UF6JQhcBJU2EDpxbqz7fUerafj4wog5AjJKrbufiim2pvwTa",
  "key29": "5UjHVvdKf6okTfNrvGfsTmoE2aa3hTfsNdUejsGaXgtEjTpuYdL9SS5Y45UxahGfQDXDuRuj1s8HYodXinbgECLA",
  "key30": "5yKPsETQqQf2Wf1CP5BjEKtCpYPHL7FVvHAwrpTBBLwFg8tA3DhU7Wv2v9e13HHRf4RFwP6o5dhdvvu9YkWfY3i",
  "key31": "3iyqiFFPFVmTSpew2x8wH9jbzXJ5Pnn1T6jRFY6V2SNQ4k8cCcf8J6D43yhb15hMXs53qjoujVBfyKPRtxSuexL1"
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
