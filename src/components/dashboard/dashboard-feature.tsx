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
    "2JW83Q7HEcHmRCorgPA3848bhxcebm6FRdMoBQWPBoRJUDRCdaVoEjzGZrA7dsPbt2Qh8aK3X8AgWn2Fz5CBP1hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wWGV4EvnYuscik8e4aWTMhnfYoT9GyoCGJFWgnKLajTu8Eqts7RKmUDFFy7hRbeps5dcvCx61m3mviSKb7gwt5N",
  "key1": "2wxRzpREUVvo4RB6RkRpAwBpHo41c3FCbx6q8Kx6Hijv36D3ECwwZB8nXpyUrAdLzg69x9jSnUyoTypNHGYxYLnR",
  "key2": "GC28Rbg8mX8JjBcfymzSyv66F1xqfVJEd8DxC5HKPZneYS3xvgMuC7AkD9nHTYpEC2n3bYyWhcLXr5PDjNX4vWm",
  "key3": "nC8NYptbSxxQ97V32B8RcXiu9S1fks2GJWLFkF2pT243ULozeZnTnMLjMt9MMKJcggPdn3btLUbtT32gVt2kfAe",
  "key4": "4N5gpXpxc9cPynMUKXQafgAoGFHg57fQUTtKZt63BtJVWk3we9MNkVGzMSrz6Uz53shPjBSZZ6U3jQPkHc5BFVsu",
  "key5": "4Mw9GNfHFX7QMHjGF37BFqqt51ZwUKG6577c6gKDS8DBgB6TWMcBvWbejsccSydCVtvQmjdmYfen3odorPU8XMek",
  "key6": "2xEL5mU9KvPgwwRkMHuM5jSt3AvfuWh48cHw3Fgiq6StJLqauDsDfLKMiX2KeQQ38jNwws5rePeXjVfjUojpU26R",
  "key7": "47Ruiq69K2weu99ro3VPqFyz1hhKKcBpcUjiexYCyjRtKaYMTX9ruVw4P2bAguVNA62LtXXrqjF3d9Gq8JwyGuun",
  "key8": "i7zCREPeREGCY46up15mJTeEvr3jKyjaAJdMw9zrYqBPXcPb6dkdTpCt4fcwZoC3GNvv72ZFdeLEUGyMAQNFEsw",
  "key9": "5oW6Hck248vkNMjVeHpGEFUemUMauXy6mNoohynxFhSMAWpV4F1gAtEzXvm3Uds2vSbQb2Tc1H28HE3XwUoiwN3b",
  "key10": "568nXAYTDzRwZAHvUqPwnE1WomBrhewa1p11ofJd9BPuLfor7jdUotrMTqnfNT9FFkLN8hwnw8bg4f2NjabSmDrH",
  "key11": "yMPFcXfnZ5h6sE4eqDZbpuENCeRtiyTJ5QZiWBk9wC4RShyunSJ3AeNZNnyji5vBvtmGfkNynsges4XXAw9ruv5",
  "key12": "3wUzsqzRZy39HeefrJzwf6DvtVUgRCmiWPsm85vsUMvxbyMnW7n9Ms1Y6aTq2aPeCKQpC9kxN4wp4LzDeYzbu7Ab",
  "key13": "3i85MUmZ1D51bKKNK1H2tfxSCYuoUYwsBqUWHbcvyoyTYSTvxahxMQdfifUPN2eLFoviurXiSbRpE9GXADSFZfXa",
  "key14": "2fuBkEKYg2oX8ZZtyJsA42yEorShBg2iN2AnBG91DgR41JKeWKaiCg3oujHuJZeP3LbwxvCsUbRLt6bhLQdioJou",
  "key15": "4M2PXfN3zPdPLznzMqeJPS5xxyeJcUMDvBtM3KnrERDzmA2QQiNkAh45brmur3V9LNdKzDLMA3jXDrJxuKtgXW8k",
  "key16": "2hF5RyfRY988ahMeocgSXAzCvLMaSyaN6bXk2wSpvJoNapkob3gSLXDT2PP7KrwDBmHqLY8QM6QpC3p6tDaAVqaq",
  "key17": "R8Yi9kSWZst5tGzpUTFSVKFQev4gPvvrbFgrrEsjn2eMNqkzUxqfaA5GgATsVWs9oB52vtRnQWKsrTK1BPEwJ2U",
  "key18": "67RK1jtawEmCSDoHz87hYcvqrUGvZEYovdx5jb2N8MdSrGir8v8nKKwms3254jNozijDef7d4acUBQkpt6pGSNEP",
  "key19": "3McUTZ1JS8H5GSsY8GK914HSP92eohUSYBLE2uzMMFiDQdnTT7nynQqthotZihV8rqVQQVwaaWWdkXHGpThi6enf",
  "key20": "3H2y1sdtwPypgWjKELBk9Vf5Z7Pbq8YqWrHtHoPeQYQP2LQKa3MsSARRd6iYWqrjW9DQn16kdiumZTKBS5H5uTKT",
  "key21": "4L5JPZZNZq4ZNgDmVHMxCnmLAcVbZ9hX4r31Uec1wjw1kUXFRr9DcphCRXP8uy8FCSLK7TsLVbWqjthGVaFWHwty",
  "key22": "5w1fnNhcitcevy71D4nwYRJuFyK85FyKLsZWEDzpDH7yQqQgGTS6iDRDipPe3BwHzPFuHBsZTkvw5zFcfmtjtPJg",
  "key23": "3jwqbJf4A5J1b5JDpWBVhcXrjPLQagZihs9aTWHcWeWoRdQCdb7upvQmaDcCNqmjDHszrVgnf5oK94t4WivnpP6x",
  "key24": "5RGZ8n4zDG6UiQVYvvDqUy3xhhkdFTqzTADhWFxgECdMZqHv4nU47mXrbnrx1umdCfgLfWoqiVNqSq5N9NRhQGFX",
  "key25": "ZEGNyCniLtp2xS9PDmoe7auf4QffEFsdHMybesmsbwwE27pUMXYX6zBo7AzCG5pkyuQKaYhy4mjocbDj1zkJyX9",
  "key26": "3YULBnFQecMWKB1UsqBCPfzXP7ERSVPr1WxD6KMx3xooKeo3LSgpFkVYTLgL4CLmcgrDwVRyZW4xxFiSo5D5BzRz",
  "key27": "2Yv7GhkpLiPmKYwWRCPcbhZ8gnL3mXA478tjQsURoxSd3Soeibr1njeuszujoj3wVs7rFBXMpfHq11igZtmb79qf",
  "key28": "4mgwFyeW7Z6wQMGw9MhimBPpMnqzmDiywU83nW7Et5N4xH5be2d178fnSgp1v8Zzy49aLfZ2t385LPmd7RLLFpVS",
  "key29": "2MreW9qYZhCGB3uRGajteUDoRYEGeEW1HgPYwjQafQNJ9buVZJP4yAPQqvzZJ7gkzoaz4a1ryzpRps4qsCbc2kCr",
  "key30": "4kvXMYcZz6xm3PpRqXwKQwruAB64rVgv8KWM5wLMEsohZ7bvQNzcZZpNgV6DkbYiKC17Rwu7m7vyvnaUm9c2Hkj4",
  "key31": "REq4crfSchBGbM3T9WvwrJavZcwYK1f3rbLP32Euxk92MNcAaroYNU8oRYnk5hwjQfmgnJFFeGYiGrpWyVaZjj2"
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
