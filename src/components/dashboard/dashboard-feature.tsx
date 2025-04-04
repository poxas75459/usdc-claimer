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
    "r3ZU1tHaD5xkP18FuMGFxcwdvuaBVLU9Cog93CuyZ19nxGCkqkWdrsBURx2XfY8RkirCwZegeF3r3NQaQms8gKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2psAVm5rERGk873KmWBX34vSnoUFJg2VyJ5WoXskA4QerEtcPVyBAt9z2t3bU3WjWAHG9ojChrpsBXp8Hfuug9CM",
  "key1": "4qkeA3LZU29EVdqB83oSiwg7D61ff35L8ZVN32qMyKV218iLHXdc1E1egA4dXni8JntdwVH3VNVAJ4WpQSY8SWm",
  "key2": "3WEWTMba7SMBoCXGsEWy4Ex5iMe8MwYFBD3TvMfQZ3HEkaEw7XFs8DfZKhGRfcDkCrquyAUrZV1j6mo1Bisz1Mwh",
  "key3": "4txok3spXKUediyA3zMqF3AUdbfgMsz6RrXdM1VqUvkGqqoHzRjToqr9Cjwfe5CcrGzYbDuBCouXyr5gDdpuMvFW",
  "key4": "5Kc2VKnHc5vrLcFBxsQHe1H8aMDuQTS1dpdPMc3VZBhapyUCyYumwzgMEAzFZWwjx2SM7SepLWf7Fcjypfx9V2rd",
  "key5": "5EVMpCsmA2vCiqivcpdZfrbMybBNCAWKYjPhwKbZrteEHT4VfP7G5uZeUfhCRXRDF7oaPnS7xHjZeQq4urS5AqBL",
  "key6": "32FHeFihbRAT4dSuWE3PXi5DPQoDzs2QMWpyeama2KRCd2Eapp9YnhbSYAmu8v1aQbGEFYpFWK7DcfCMAreVSx1b",
  "key7": "5ZoUT8hd5HHeQ7wQpbeRyZufyvQu8HTxCfiiwqgNEfxnzkp1oWuvw8myL3nGfTRksKwdY745uxggojMcGxyTvvk7",
  "key8": "2UzmXfnyEJ4dhi5PrtxnfoafBVTEaapBxChigD3a4Nffbfmd3GZtSZ4vFEGZN96wh64hVcqGFRzeXFwLNYWNefTt",
  "key9": "4KfLwVFjoKxFcgooMB5keXQqty79w3pXBRRPtH3qp953G3H65pxXL7KuvRoK5EcaEo1Ka9Lh1PRrhy8Kkazjn2Hf",
  "key10": "4d4pNzHGovuHq1DDaAmGHnNJhapodVSjMGfmvqUCyeg6eSTcfUfX1U45Ad1ktViLupNDCemy6xygYY6MMr729R5n",
  "key11": "565YhWTSZqdbh8MPR4oe2F2Lv4g8PBmjcPm3AZkjFuG6HMSdUejHsn2cBaDz8BRsgnWfj7d5fi7GXgKKs7VURPzc",
  "key12": "4ug3ep4HptrTRne8yiWH3AcZ4ctekYXoVBd7W7jfjWvugiireXDvqrf66H6T7VTHdBHSXxPeke9TnPWNgkFh3Cpf",
  "key13": "4XsEyjL3RFhSF7hB5iAx4YnQbB6y2NCUYXeq7NJ9Zi6boK4DQmhGSc6s26qoWjtbYzxJjKkjh8iC8orYybXn3hhS",
  "key14": "5fmy8BAry1YNce4qwWW5M4Cs6RZJ4UAMGDNXyAU2W5niSnmKoETZTMxR1Z5a1xTpvezCxm7Bu423mtZxWR4MvYsY",
  "key15": "5cpZsfTMvqyPHhKVos2TMu3oaLJCfTidD8zhtDAExQc8JPr8jVyTyFZnppkQeMKZo81J9UWP8JsfF4hixw1TLS8j",
  "key16": "YuxZoDmaf1Looedgrs8xWkXLrHGHkJuUL4WZ5p9tDs1P1is3Ek24EoPPJopbsC1TDRbvSesjdGJteiHMPoEeMU9",
  "key17": "sk73ERfBe3hM6YUHJEA6UP82vm3KuCTMbcpU69ve8P4v6d8oFbMf9qEm8zD5i1sGWdAmBanSxiuf6xFcyqtMB8m",
  "key18": "49Mj17YS8bkQgLLpbZ6kAtrHPrNJhfq3wWE3M1XjEgMh5oH76f5U8zbFDPyzpHkJtV9jf4Er1e7btDGfTgjPPhEn",
  "key19": "2WGAiVS9xD1HCaXXVwacmXG9cMi2h3AdeicLj6mZtop39eJ7oS4it6kfniNCf5MQwiryv3ZpAdwnvaboRWqkzGNd",
  "key20": "v4UK6AJ8XSJFgY9idFUmuRS7Mq1Un1g2s8SDMwU2qhGqdH7nR2LbV5e8xfDRnvmsjVRUfoQXpKNB5RqQhxUpReM",
  "key21": "AYnmaRLRD5hdLtuFBWgjEy4FXUWNuh4gKUS1rugegsPEDFFdMVZkYYfCVj3BLWVtVXG4hN6rBE3QPHbvdads4zW",
  "key22": "5mh22wWaWRnZUhf3yB9k1D4w237dtZk27k56DAAYjqCAJBAobm8S6RRQ2EnkzLRGZCTAwX7dnmEV2hF6BxJyvoTd",
  "key23": "4oaUYpta7yvDzuNadWL8NVJRNG7VtS9USoF26biZ3xWh5mkwmSfHMx8xgB3b4Ag8JyrJQWMEjorgbArEz32E7hXD",
  "key24": "5bxu6hqHJ8mN1MuD72WTNHYgtboMgwE43JWSBDhrvDxGLVuK7Dpw17Gk9mRAjEg9sf27Vi5uzUxx7GzC1xE7Jof",
  "key25": "4AZsgwQo8MzS6P1VE1VXC5hMaVN2LPKnGyU8QYUJLDnLZcJom8mGVXCMdNRroVbQxph9GCJUw9dF5K4fcTDVLtRm",
  "key26": "4UPLDaFDsDZ6PshJHQ5Fu1QffKP54RnyFW8CJcKvftktWMv4o612TqiqESxTHnDQSDP3UJt3UMHQtAtxrHKitaqX",
  "key27": "eSrYPg7DjzWZCSJ1Gfvds4izENaFguQedkHBuDE2Zp4aT1qndE1j23PSKL7SVaXFRKbYrQpx2jsaVMrVaVQY4u7",
  "key28": "4wX3DvrDXUqaB6YGwqmKHhhkMTuw5Qs1FBVWqKpt12jiiiKu2XcQPCDCKfizGvfsvUjjhnLc9uaVDAueJuJk1Hme",
  "key29": "45ZBvedrbgdR4DkTS1TbXFYoGQFvtajToobw2f2zsLJrVweR74LAAaQJ1vnYJdP1Go17FTBv7G5jVBMDMw6MDiya",
  "key30": "2xpXSTqTtMAf48cMhpXk8KnpdgyFCLt8HNA9J7rSFK4sYDsaYjAN5e4K7BLBD7nf6CJEphNjeQvhuDvbhdLw7ZDo",
  "key31": "CzKcMxqETczfjXnxzYE5zMuaxz5oqJMS1zPRUKEjr5LmTzAK8NfSZxB8f8dJj4ntGzURZJeczxwuh1ab7TmPKCu",
  "key32": "eyee5a2hXd3S5a6AByFz6AVbjoggzaBuzmjFLbZjhkK8imvvaUDqvmdw9KqNp6quU3gUe9eFJnWvQDni9YSaxKj",
  "key33": "4PhPCsXxSB3FD4KxPcv9NFiiAy9XTpCjBfiZyHqgAfo5oTY4wQsWqmGSSFq3d563e2s77HxdkVKUcv4w7Wz4N4cm",
  "key34": "YR9vABhxnzK1etN7LzvDmnc9FEnNhC4LXA1zQK6qTUcH2DCsz9aTvjNdncByXyZUtn2BT4z4jy8KN1XMi5QRFJN",
  "key35": "121gMU7NQNXd96zaADYRnzDw1dfbCm6VUk3tS9AiGLCBD4BWvhmz7B6MWgHX4J4EjKrVyq6Adzor2Q8VvMTZZSeS",
  "key36": "UkfGcSc5cSoQkSDKY9j1G8xGTAPH96L8wNjBb25NaackDqpkRLSjRkxTdg67C6BMDxzeuf9sDohkYjBDhHndQpp",
  "key37": "26bdRDzf9YjNpbt6D8x6zQWmWZ9FzPcNXAWgTbHScvRbyaZf6eu7BdZY8j1ids5n2ymy7nivMW8DYQ5Rt2AkNcHc",
  "key38": "3DKKoS5MNafMLAq9euKZd89nMuhRwkoZKTfE78Xrfzp3MFdPdByfGxhnCTvHSauCTUJL92zHoBZRrDiDRZKwbMnt",
  "key39": "273JiDhBxfeVJjVEQdHanfeSyPavutz4yeKVgQTxLqFV8zYeF4fT1PvVGiBFq5gVBt64WX4Je5L1wedv8f4R5o16"
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
