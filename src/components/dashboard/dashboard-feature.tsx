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
    "5pgysE782tpcoxoLNVUa17pQp5yv9VPDyZob43PYLP9uisiE5BzLGWUsaEUtdQMDg9kG9KoUqf9cdb8QDH3pzwbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NvP9HwL9ZbrL9dgGEAexnkYsT1SzeZSfrhbmH61jZU2D6iQXtNFMpbt3x7CFtxVmYuRNxxYoV4iud8BExxrNFKK",
  "key1": "5AGc3LqPD5ES5Cnyp7uwC31ZpfZQPnVzw6SqzhtoRCLHc93ebbhQUzopU446qYCVtUULXVUwfTfpqL13rVcbVte1",
  "key2": "2rrfP7fhigyBzCmkUx9qdkxqMh4UfQ4RfGjvLNv8Ru8EbAKEUVpReBZ1mJx178Qf1nrnSQtbrmDLe2TAy98o6AYx",
  "key3": "2QcWZCcun4EUDoG3czD4TDXgua6bL8MpxdCUGDoJ7cFHPwejbcQJxtbGcBC16nQyT5EexBsoEufujHkMx29a4K7n",
  "key4": "2kUwFU4XP4JxCimYQCYXPk6Jxk4q9k4VHPtdxNDVsGG9jr3XTxHCuxYJEjDqQX4AXeX9F2g3HCRNnCgmannxVUff",
  "key5": "5BMrtAcwRbCr3pkbABf9nUy9tYC9kzMExGnjLFX8f3tg6LjZDAHU4Qj756AWSgabeLb6dA7t5kTc5oaeN1pM4APf",
  "key6": "4jL5mjWrGSrooa9hJhC3bPEyKZigUdtY846nvso4qp3fkby6hnF11rpxQKynM73HxaVZESmbt5aDrwvhU7wQqyHR",
  "key7": "Cj8FK93vnUmgNoa8HfDap1WByxMy5qFtanEpepRUKGSBZmMYUAp7BC8Pi6jt1aJN6Cc5E56XhPx3vXFE3CmLjHn",
  "key8": "2mRwVVz5jHncg4HSoR3qzsRpDWao34LxrjVwm2duXZrB3gs5vKJWmc7NTDgVmW5Ygk8gYiEnojQjvd8kCKzCrf1E",
  "key9": "F76FTTQpDtHXg8rdiHtfR3YFpJf2nCX8PUmDuoJF124XT57gSsrB3HMVnWBNdWC5xeJZpGsALsrshDZF456ZYzK",
  "key10": "5vcXxADN7ffgQJ7Vt3j69uSepMWc8xgDqxtPbE43hqco5sxrCZE5wBHpBvtcGtN7H6LbCR7jVYto4REQqRuoCLJm",
  "key11": "BLZygvq1xmXdu2GcN1NS7VeJRBFz742FVZnP7MoYiPCKAFzeNn5D4BGGGL8qZ7pfny15x6Ux3pZU1cFpdd3pk39",
  "key12": "2Si4VXXTYHCZL2KzB5nBKFKZpCxDgdGTvr5wbvsN2Jn1tNHwHHu9goppfqs4uJiibaVjULBaWf83q8gvUDiVpkDM",
  "key13": "3s1SYSE7w2etdaW3Ay55SFL5k7m27jL2yXMs4jv6iEig3viiarBFDvUgNtDktytE7MQJYPRE83zdiQSedsytW9Fb",
  "key14": "2gW8YvPuEPDFEGECnnSANLLtKA64xuJoUDfo7AvpCNdvLxoxQc5bBiA36P6EqyWiWXmd5L1Kcdfw9nYRYsqnjWiY",
  "key15": "5JzvR8UsuLEXqeByZK4kV47YgAwKiKnpiVgdeuViAi7cPt1K8sAX9k4D1HinpN9uV3woNEZzFadUy7WG37vPzw7r",
  "key16": "GjTFfVLNq3iFQpgLoUzMrYmK1JUunayfcvHrbTpWnzLA5KTW7R3dDNcaSQ4XAWYy8mQ4S5vDuhUKq4tG4d6GC7r",
  "key17": "5wQG32o1cGqWKq8p1Dtco7xGAA6tDGiPSF9NheXWNLd2SB4RPiSrXmm8AehPx616EVx5bcUXkicdUVkD9sLeUefa",
  "key18": "32ENcVcWrDNLneQVcXKL28AdQWU9zcf3paDD8pfTJB9PpWPorBE4aQ3zHgcRA4KZ2BPgtgjKoJZbhaqeeRPz8WEj",
  "key19": "FXWv1zACQUD3FUddHiaxzSGTighXHtSoexHcVzmpdG3iKpnP94T8s3h2Ywzh1YDjqLQ4SJu9fwYpswhcGBj4w1p",
  "key20": "4zVAbxpwAoDbMphJmGmEfqNgBLmPQrXCSqrUyYZUzFCBZLhPxSeJWM7858b14ErwNbmDjheS86Y5124RQQtS4PbB",
  "key21": "4PVW1wxwdH8SWVpWST7no1nndFfapoKLHH7qXPY1EKbc4XeYTfRncgP7n5igGCBYBm8tYDus8r8JYkpJDkoeevQz",
  "key22": "4Euu7tueA7hccmTQJ3gE3tFX4nYatxyntL99kZzTWdHkuGftY7SkL9qJPUS81nxi25EoTUM42agqG27qvuPQCpEf",
  "key23": "4vjmPngubJEGXKiEjbMhgU9dzt6XHh2P7NwWnTjEvoEcuLoxomQVTqCmC1wmYu9pvtc7n1xJBCYBoATXFjymJmZW",
  "key24": "jStowf6mX4WtBhZb8SwkVthJLVkZ8xP2a3NPh5Q3XMq41tgx5tPfuEzUZrZxe6gM49wtT1GsTiwpFgeRc12dwaM",
  "key25": "4sEPgX93Xf3JbwZ9dT5jH34jfJT8u18z258y5o7Am3q6rY77PdWWNNXp7dPbFRtQQupW78aPLsKddsJoJXu5bbR3",
  "key26": "hSvZXbdwq4kMLV5MzvraFnJqffMPQ81o9wy7tjHDP9fnCDXxuDDN5R5iUmcQ37FNN3qxZFDUqGEWGUsZbJWxnD4",
  "key27": "4PFbAg1XN7GPTrUSSqzuPvz67gncy8WmA1rBHPE1NzDsJhHpNL8gy9zuwuLQ9PCJJ5CeZfJiUXXEJ39ydMKhdUVx",
  "key28": "3yzJi1c8uy4PfxVYVrBCC1A4sio9MGmAxZNGFibnhNdo6YxJqu6gXAxE4KAdX8yDMfNeZUd38tyJP5xtoffHixMq",
  "key29": "kMz3JvBSV4ffvPDJRRgGWRu8o11juok8uUdbB8WSBEo45Qjh1Q35qYtNGG1tk62y8CoZgcXgZyHggBrtvxB1kCa",
  "key30": "3uXjFMkuzSqvScjAxfCK1uZDZFT1WgntjaTX3cqMFYfWXJ8yxHAadN5YorUkuR4sYPmYvD2v3Dw9t4Bi8TpCo9DE",
  "key31": "2wEswmpodye3pVnNxb1ared8MhT5LdRNrZ8xMuecQ3UbNo5HEhkTziDTWYf9a1FeM6qUuAcq8NLzGDvdCgdUZafY",
  "key32": "5ruAbggTi8LbKMJZZSdev16B2dJX3Hefkg5SGtCzJ4oTLaN4jop5MSnWF3X3b7yy8vEAxv3PjByt7VbB8WG9VMs4",
  "key33": "7e1y3jfeT7mkVHFKf94scVn56DDkrmthyqSvMs4FKjqUdUBa16fc1gnB8EspAQCf4RSe8T2yj98MRizbkuAfHvV",
  "key34": "3vevc7ZeztsW6s8MdMBaMMFvf3xpjjNXAv3uFmYgKFLvCFtrvzqq2s5Fw4FNbdZMJQEJK13w8GY9Zajvax4bMWB",
  "key35": "4nkmDouvTn7y8dXH8tf6rLTYPcBX1TXakhSsAGdrTvBQX4RVogxJtfPL9NArQtB5FtAhbB66shJdgd2sc3NU15EZ",
  "key36": "4kNz85g4YNsZbT3wm5p7jw2xS16Ao7CmTg1DXJcyhjW1UC1xZfDda9vv9iN2WqHYi3ZHje8BhXq1m2HjEJTQkkmj"
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
