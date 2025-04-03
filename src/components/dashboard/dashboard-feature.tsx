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
    "48RjL2pJNkBwDVyAUfPGwvAHWxLKguLGHPvZjBuVLnAYMzjv95Qc8Lb3WnRAJ1WHzCixZXANomriaQxSMCtHbqKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSVN3HwuxUgRa6Y1PShVpnUiNrV4EgLXnzfCqFxtjPtgPHMcmS3F6wGGqNjTL7Fam5kqTm3ULChs9t6opbB42Wx",
  "key1": "2ZTQk1HBtFbS5RFEmPJ4LV3ZfXMdTzeAicmyQa7RgWhhzYyMNCNCxGQicuSDHVBE18SVhzcRWQnL8GhyrcEwSoB",
  "key2": "3GZ6KwNvNMxpMFSiksxK1J7bRh1EfjAcCAiFFC9aXd41KaqkQbiaLktsc22RLBQVmP3cQRF3EX6iKSv79LCpQW5v",
  "key3": "2jmX6VLHmCkepx2aH7KzHBbG5nw4xGrQvdhWShNA9crAe6dYW9nDKjMfMUpkZvb5keEXGtDoishNjEkzMPHhEjeE",
  "key4": "brePg63UVtpVfWwsH6o1rM5LLh5LncgPPaKMy4Z9G6TRVifMpW8r4XmzgvrHsmeMYph9W98YQC2KAkwJcp4UGfm",
  "key5": "5D73Zw2nBdtvnCDRPMJ68f6yj8kfHP2jVFUsAN7ERnhnWVU8HrJu8a582kC7NQaN4zRee9SLBJCTdc6DL3t9BY9V",
  "key6": "49BYuAPFyb2dFYdNjEZFAo1uyDnFQWZPAxVQwSoiugjjqGP1vjj1u5YZ92pbY2QmeHEh6HQ7uiAKLGQbEooz3h8A",
  "key7": "4GdcTd6p2ixzVFXnypzLT6QtnoBmheNTaX3u3V28puuPG6B19RAo2mctmiKaqxvpttT6V58gvwMPCwUcVAjAPDqR",
  "key8": "21oGUqZLNjczDbqM5xnaPnd2sY3xYZwpomFiY8ENcm4rxJh8mtFKCrPTgNaPnTWDDk24WCA9LH6uEvZn8GSbYij3",
  "key9": "23vnWzrjyqHEuuixdRJbp23K19USy3YPUZiDHNV1fxaatf7m2GLfGoA5hpq5cuuXUBUwrN4uW2vwJYQjVkMUrzoE",
  "key10": "66roCiCTgZqpthURBTTyMWFi2cFjLhABijmNnnUMoew9EjDnNjKSHRcUqWK5guBT4Uz3nEoG4XFb6sH995VWNCS2",
  "key11": "2MGhtnbpke1d1ZwDNUbxmct9e2C4LGPERXnWB9Lc36Zc3nzdKv4qDbnz6ZfGjoSLWDwU9srN9z1zCc1EUVNUAU1",
  "key12": "36rbtDufztyNwFyb5nQY8ccg7ZgU6HyJRjbki4RbfSXfUJGFHjueU4pNNWF8Dk6Mo8a75J6W7wURH55mbx19raH9",
  "key13": "8oWEPtCtmevGHShpNbTj2vqQeopvAXWtt5ydZiLoenEVUJf4bn9YHzYDaAX1r4fV5rzBjjRncj6bqBJ8VpMpqqg",
  "key14": "5VafWi2Nd6oCw9HYPpiD5ouTfALWD6YgeXjy7uCyQ4UmLiCemfJjrhyfS6YjvZLSSUsJgR1s18UbTdC2rudQwhzQ",
  "key15": "34CPiVtDM49ZGx7S9MxxnPeLtV9hiXG5JwkHEK7sQUN6en8aiMjFD7C4UXtV3nARknkVbX2ipm6ReXUJ8m7t4tRE",
  "key16": "c2EPXsVeLApyuXnpFBbh8VLfDYgX3hSJALo2QPTzNivjNANopjT2mMqccXS3e3VgHbVTmmMF92CnQqLEXx1b72T",
  "key17": "4hqRMZ1cyDWqynBi3pRps4zrbWdBmDyQ88Ak8hrzTKhsxheLA9tsfZbPKFekfTqqby2ppWmUME1AJeFEQTX7NP3a",
  "key18": "5qFuDn5n9x6wXKSSacHV2pgFhJUgjg6n4SgbBVyRb4Wn6vqd1N7Nh9A9pZZRnaGG5kfbKFHYgSVCYTTyJMnDrYa",
  "key19": "25yGhNFaRjUZgSqS1rSHpVoyGLaFZYCWhujatebZCAtYyJHNM32cRGhHvWSyWvGVSybFJHBfBUaxyivjYe86BPxM",
  "key20": "a3YcJPvo9fZp58kvMgMFi9ZE7GZHFUy9GXH34rYSG9ApGQn9LeVdVR6Gr9wXpkc7U3vPMYwrBvCdReYsjJAQ8zq",
  "key21": "3Un1PTa2eq9TavbPUc54pPkDY9G3GyUkarQzRCqDRjBZFfk8wTsVx3nFwp8MxKUia6gdD7YZTJndUfd7zJCTwjP8",
  "key22": "3f4PoR8VGXkL8qXDFi8L1YhKWozDRJ5qbKNCzRCAyVJMgBNFk95b7XSDG7wGMUhtMJi5kyf5yu9DzUaHfrN8S8zM",
  "key23": "64LudKiuvouzSt2h7uENAwFXeWwLogNrtRxUkvEw98SEimHJFYqYvDfSUGTPToBDF18d1ZdsVPXKJ6M44e584uRo",
  "key24": "4XYrDHsynTUZeHg39mXy1jSA69HuwfHkMdjpAZMDCTyfDgLjuCEndLza9db5YDvDEBb2ZhomnWRgGknSJyJWMpAG",
  "key25": "4F4bf9LgLYca8A2EtxezsnyKMcwTeS3nUqfkcWrJGdFepjUJvkN8Nb2yxHAYYN17NKVvyE3z5WEAgMjUSTGmZuAY",
  "key26": "PhANC9Z4EiV6oQnAUkbEv7yKtBpGu4befVtQLwtMFMgj7cszJBkFW9mqrFwgqJJtTitkymKknRaDpUgkBgY1jy4",
  "key27": "2UunsDTMp2x6tNmk6JKAPXCNAukUVhwiSX6MP1KJw7rKbd8HfwyqBU4hPKx55xPzSqBtsKneHQT3PG6RmDsT1nKk",
  "key28": "PAsMEmZvEs92xBce2YAzgUQhMNP8UU8pP2yNbJK1zi6A9Jtt6dCAAyDaztrWuneg9SmDYu4SXjtm8pbfAjAsSpT",
  "key29": "4sWWubRG3oVzH8z1y2hLyChUft2zQhx9KerBBgJnoDzYKz1tmENXdF7wcZTkLC3Dqh9fJDMTMM1isD4RiX2PFk9E",
  "key30": "3WYQr37iAbx8b3Q4LUSoGSoHvxkw9ECCPRbzUCaVrid62sCZvCt6oC7yC9SQaxGM9yhiJWc1DoHgNBjoMStkfWfo",
  "key31": "5iG7HoefxLfXX2LSjU3ZaKHRhTfPMN5zVF5bBEKSEjSAZWF4fyBM1tULxsUM6xzTWobqqJFgfCTGn7qnwhg3u1NM",
  "key32": "5VU7RLhnJTfkVqoZBMbyvgS1u8a2Vd8WwtMq7ByEG9rxbD57DYXrVM9uJH6tqea5oY7e1FpZ9wwpkqpfHTop4aZt",
  "key33": "UQ9FD7sURManJXQDuseQQmbZMQmRy2Hor914FyYFNTvhkCp78oigthUHzuTQhVnyfgNGPYwieRiPRG9S2XU1NWd"
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
