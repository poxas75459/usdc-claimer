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
    "4sasBoLV6n1kfHWCbHtsszAPCbcvJ8YJFPtr2Rtuax8pb4pBsTY5fbQh7bWbsXd9FRhxxXHZ3RAK4NdEEabDT9AC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCtgNjGXuq263VNYKAzCmcgJMKNw3Lapb6vABVdf6F1tnqk7F4PitWR7CvNmkS5z5KaodrRnQNQiJmaKyhZ2mfv",
  "key1": "5EtGsEUEyyGP1NrJy1aKubcsX1YqsH1CU7kB63iE2tFhGEXDj2Piap2GnLzsEfzcPvNndrLk7ZmF8ozm5hQvJuYm",
  "key2": "2yGz1uzgVoDLwWxd5msWobQja4epy6wmKH3pVF6gQ8xtUEMNNXAxyNexiwhkWTSzqjc3uiSp6rWMV6jYfMNGnYjq",
  "key3": "YZ3uSCdb6z9dTuVST3gLF4aTymf79VacqLZzwvM6m3PAjruiAv9dD3HLN3tsm4tPcvURWox9PGAFxjTU6UjUgqa",
  "key4": "26tRGLAMEqLfdGMo5uyQx8VLm4VPq9hUMxTcpC1fdNYUFSXMs6NUvvmSjs7dAC7b7Wj4USiX37yH51ZBkR5GLuPG",
  "key5": "3rabrV8ecYtovycEGCLhF8Kib3kiB345JgKLN4d12wkk9Asf7yjVVtmjTd6jJ3snnKqg5NMv3j5Jta1vYdDrb2ny",
  "key6": "2u9SgnRP2Tt8MJUkQZvfXyqETHkdpZz9pUSHnrckCsLneudVUjeV8Lcddiqg4gdDiZUS5MymAPGoAcyNm8K8Ghs9",
  "key7": "2sh6sUWB87JvBTaMAD96NxogVH2YXckQQ328cSaKocNDgtc1E3AXBxNy2WTUmaJPWjMLadZxHygJ7uNMvzAzXToc",
  "key8": "42Vy9Sw4xybV9wcYa1nFnJjXhyTbEPQkrhRdnToN598E58Gg9NWTbxLqYPhCfe8GnAUtMFdPPX8y7e2rsfq9Henf",
  "key9": "3osZq3b3KnicTtfExPDeosF54Q66Hbtafqw5iJuXdscxVX4EqdCLQiuUs9jQoL56WmhNdwSeZLzPxFsHbxKE644t",
  "key10": "3E2kEZLgEuQsEAkdypwDxZqjSCchc5BCzTrWnT5iSwycgWGUZS1YsrbZQz8qLcyV5VV2nbbBfqeQGUXGRn451FVe",
  "key11": "5vM6hXDUe356TEmvwGBCBmc3ezmmSRGkWqZhuKs78wCAfn5W5mrQqdVjyzHh5z4hMLsAbcyZi2CJNxWPyUeerkXU",
  "key12": "9FJN41NEUMs7dpiXiui19aXyBNQSm941xgyE2W7aDVfF22j7FJfsggeG9rYVDFHXDYM1eeCvVxkgdZUhJhkHEnb",
  "key13": "39Fayfx1o1vPbqwEikvvwdo7ryEUUo9jAf3CHVViXDVDkrqakWNNiUosdP4842CqzV5bLx8rWMjw8k59dtS4ZtMx",
  "key14": "34Hw1yKYW1rKejHzwSom2LwHieNDUMTgEBQMdfiKcrzLUgQHteFC6vXw8jxBQnMxEYDL8XW3XQhVyN8oJLNrH5F7",
  "key15": "2ejDVQfmizjDZV3Q3BR5XZGTARqm5qG7TfZGQAYGHrVAFa3QCw6UkaJSNVUojmf3FMJEtXh5Frwgf51LehRXKUTf",
  "key16": "46vkpyFxrSDAyPuYZyo8mLYCpmzjGeeFUc9g4aMFfiMVTLCvcwG9kH4o1FdhYcGRWUhynuVVXF1GkjX6UJgZxwNd",
  "key17": "Kb8jaq1YdZQdoot5ffVkXrTHcLc2PBChFW1EqDHf79W92uwN5AevLcVvwemcMiQvAXkgLN5pSQsRoU2CgXTm2PC",
  "key18": "4nwAbn5yzA9VDS7yGZLynaegToEwThbHzKHjvGYUeog3DH7xJP6JEmqAhWcHZ87eQ6Y7v6sqGoszpHvDoU51CLKk",
  "key19": "ha2Ye9frbL8GqDGCa5GWUuxd3qPFutLufM4X9aRTSbvjfC6xAfMa5pxANHrznMFbdE9fjgdYdHkdErqmPLo3Hue",
  "key20": "xCdXCReXVnjiE4RbLkZodTzaRAwLvFh2HhVWFVUgEpRG7eQaAghyyvxijd71DB7FJo513dWMTVc7tLBE93fpabd",
  "key21": "5Roo9kZ6dhU9Pi9JgxTXDRctFkpg6mJBiz45htNpTeroBXGvZeJGghDUPJ5iyRLCbPcUUQKm9JC6PqWF9j7MinQH",
  "key22": "3Nh9RfVWEJoD7mfUFND62EhGnPizeZGCsb4FMAHaytiWn95ZhR756mEB1VhNR8Kk4o9zLVxLYo556VaK7rE1peuC",
  "key23": "5d62hTffpC9zgdu8T1g614NCSWFadxjhs2ZDShZPb64NY43PDNXTHqaW8ijczupHLQYLMzu7pmyR7dsWTWDErmxr",
  "key24": "5hH3TXCN6VwRU8fm2uwBsmBwcRw939VmtRMLqMFaJcddtxQdKs3n6auDaG5A4rrpXCMUc8YD8ZXXRPeHZ1T828Qd",
  "key25": "4H9KeFr75UbYPF9ykjMDuEA5KeP1dG3Mrz15V5Z6FBhbFQ3SchufsBKVmuyCqrT1kLqSqaA4Rmsas7K54ZTLcUGT",
  "key26": "2DL1p3UmgEfJZp2Gbvmiea21mHabzux21vYMAaAWQxskjLukcyZaLMbytMVA1WXZkPTfaHMxVdKtKAnD6WUzmb21",
  "key27": "45KxV3ZJ8vVVuM5sWnr6Lwm1a4nFRzyy7DvekyHpyzqEBpvNQMm8HNZjcnmruu2GJ8DHbHdjSjsfeWHiaHbYZDXW",
  "key28": "5wVEsVUu47FhGdRv9ucD756zqFVctC74oFQrNh1m7PZwZgZExqe9iYMQqzdaLKqJu65DZP8KUJYTYByPtvSZ3nqU",
  "key29": "3ae2rCHtCwChdQtzWDjmL1EYMRtp3sZq8ojnwTK7NzPsZPeojzjuhW7KaND37YsfpMWXqwhMF3bYA4FrFagou61q",
  "key30": "hHtaA3FjWpebrz1WkvwQs9bfYiyS86yfmdAD9Fdb2SVaB2ZN7hBgSbkS63ue6KUEatRSD8A7tHTVfPURbkboNqA",
  "key31": "5N59FhBqnvAFQLEMgZY6NT16za23DZTCWWnYphEWrreXz15UDVhe5bt1a1aMAwuyhvZDKRembmHJfqepac9reGn4",
  "key32": "4wjoCbQbCRPA7Afwx7YVKgGb82YM62v1hDgopVVXH9o8YWnVCLbw777P7zP3Q9LUUX4bThYoi5esoxyKVoRKWe87",
  "key33": "j4STHoRPWSHzwpeagzNy85vpPYSPRE5zuY9SToLfdsZWYCrCrvk2Nsy13bQc8jGgBUwomTjb96AX7wwtpu6asFe",
  "key34": "3mSqLyACrSERsa2CY9VEjEohHHMHKnAZpToN2APS5hFkjFcX7hRc4YQEkH9cPTXVmR3mZzY49zDBh5QNsPXPjKFM",
  "key35": "q9H1vvMscN8V2dWkBUF37bYKDBmnYKXZLXd54oJLUeSdxyPtW6dk6NHDedYmB9wkA3DKqikT2r72b7rWvu5hYkM",
  "key36": "4RtSDVBBNnNmV8tWBrphuvqsvYZj8W5He2oKFks5tRg7FNKyDgSTWDAcif5EvzQWZi8kvzdSz1V9BEs5YnwiAtAj",
  "key37": "3TuojLGus6A9MTsb15gDH6mrTPgdduoKyz8dxbx5HzYcN9BFvAnpH7QxPNf5gWGjKbpDwRq2tmNJxmQfTyL2yMCo",
  "key38": "3r2DjDd4cWCkLaJaobQDjBbHTkhwapQTeYCyXkab7YtmLB3zeik7ksmhLaA3ZpP4gSbTqwe61T8TK5Hqqwt847Lq"
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
