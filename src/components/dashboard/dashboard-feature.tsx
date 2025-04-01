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
    "4LwXWq5M9zaYDcquaqgPwCFdcchRaZjWK2i8i3Yi65GSPNVYfPuFtArsoJXHjg7W94x4Hb19fpAXGnV21bUBuqrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VpyzHbWfRgnSo2WPUDd7QnFSsukJtmRj4rt9RudC5gM2evuzzLzL65dPxS1a2BYforPXYxqS47YndNosmV8yPDD",
  "key1": "2PaTLCySLg9xZ99GbdSY3pu5LCB9Lm3fSUb2X4NLEYYgcW9fkrG5VUwF3CydrmyvihyYGnRfDiioGyMZi9FtKRrT",
  "key2": "2X3JfgRxstzs3C45X9JA1cDhZCv4AzjKo6fnpryNXWJo1U7cWhtpJz5Edfz3QHQcdU3jX2a9Yp7M2nJUWiMSxpGA",
  "key3": "42Bz4cvWQdzmBts6nwC7kjKyXVARYPH34FAfNicBkDHF5TsFW3hxG84YCGxMCNfAzxjSddTXrhxsuRihZ9v8soHe",
  "key4": "8Zhrqh7VB7TCcZ9uFjhbZDa4dkshb7U5mC7n6sAdBsAPUH83iKR9LM7CdWu1LaymGfmMz36J1n3hqBH2FHuv14a",
  "key5": "5UbYaGAXfZmbimfa2SBNNkQQNuZGJqDjuaRCtw7PX9PBMqSVkVnFDxwsexZhBSWwXhWNTsJSx84Y1Mef7BehEdbs",
  "key6": "3TwMR8e9vFUD86kmuuNx4wspADwiSQcTUCpCUrRKLctfM2nCYycJEFigMfDEe5MXQCHVMByWmXzhLubMAugz9YXJ",
  "key7": "65qTqypJsuhMkxieZogeWWE5pKqqWGPhCkzEHVV5VnY97QmVzWqhUsnxts9iZDaCbLscjkFdh81XNSDj5PJFg13d",
  "key8": "4V4gfRfWNFExNj7qMVCKHamzqHWhrjCwrhdoE5M1FCyVEXTP5JAie1hzRfKKsqXKptuC3HhHhkpYp3rDqZsbgozX",
  "key9": "2HMUm9eWFXP7MeFkEx2mAQsjZVWFpfJrmFXGG3Mystqoaeu5L9t2NLtEoxSMeEKnipibXg5HPkWAfDc2RbcS2rUR",
  "key10": "iPwkJ47oMGJ9vjwJGVXsfJ39cxPxWSTRYtz2bYLStUm4hK9NjudEvx5UE55J4vFx9FDV9bMYE5KR4cwudGtcs7R",
  "key11": "HwfzLKtsibq3WUrbaPFPdu4rUPZi1VMY6qGQnt4MHqD3c1RX6uGb1QCRKdf5o9YAWtNZ3hvaA4MBzDTjTBPm7AF",
  "key12": "kmngMnaQzETQSdErEWv2qRv3CHaHafgYdZ7vAtkrUFJqiB1LMqvHa3t1sADXMQqwVXktWCZstnqpseRqH4X7q72",
  "key13": "3nLTfYr2L3f5btEfpyF27M5F2YZM7PaiwCZcvy1tnRs2p6FT91sFZhRfRGwLdGBq1MDHap2zfZFSuj7vmcZvWFnY",
  "key14": "2zZVzRJV6MDcgVKoojTEJmrKrKs5oXdU4YZeAzmahRy6Qy7N7ZF8Ph1BeycSRh7LHuVZsdeaZqRWDBAiTK5XwDYP",
  "key15": "4RqxFHBTsTXugMFewyPu5McNZA752R6DaWsfhF7135wCpAGivRZ8x47KJGYzydUGzUF2QyptBEiAJkEpUEMnVvYT",
  "key16": "PCCGZYXgzbzgerjW2c42WpHZpFsUa3CwiiSSeUKK9i2522LiXm5w3BeikUGJ45vrFyRAUtJHS1PjEk956WjZHkq",
  "key17": "5iURyaTz2eFc4bUyGwn8VLXsKhvTBKqVk5VBTNCJndbBf4RwCX9m625CmPXgEP8WfhDWToqMhdHKPxsKWKq99U8G",
  "key18": "59BxxPCyGqADQd3LkhEg8b8PrrTHc79ywxS6685pkreVRpQ4TWXdpSTGXwStquk7gRvy6KynYkhvjrU7Gc3xXVnz",
  "key19": "5vFkTcbEQGY1MpBnfZpGdm8JGGrkknKRzCfrZddJi7EjQvmkLvs6e15EuTt3LSNDEo4LcRoHXAXDAx6rshq3Y8au",
  "key20": "3sFWG4msQnnjXxZEobydQFkjEbXDzZGVTKWnPKRAMdq6whQNnUkvWwUZMn935ENsexYkEvoQDhjYd8Hdwkxuf7xL",
  "key21": "2PGR9NWkD7Y17xHe6tkrJCgs1iJkHGVPSUMSdpLxzMVsAyBkXrmFAYtC8m7qA9skMPx4ZcmKWzo5KAVhdQ4zsq6Q",
  "key22": "2DKxYkEMDFFidYD7L2t3qwvGq7EEMEG7E3Bdpz12UGtZbLvcm1XK99ykuJhgog94AuqpCdWjx4AKpfe8Qp1ntbdj",
  "key23": "5p87nb67tzZLUw9eMR4uGBP7oqV6H3AAQWireKiVu6WrRYf1gTdLJgLXg7jTaQTdf6EDtiM4Wwf4BYDgZnRHfTGb",
  "key24": "1BHaeNpzvYJ7NnyeMU9G54zUe14Y53KyPAijPzTsFM9CDHsgXYhepoJKXeH4xe54xz4dajFrMHGjz5kaSg71Qb1",
  "key25": "45Qi3yUBpQPELKJGRGpSoGK6bnA3LnET6LWktvDL1ks1v7TFFbVPqBnqFUHTanbrikZCjhnh72no98inTGQTNnPE",
  "key26": "2J6n7RgnUf8TyfHWrCVC4VtM1yWMMyBDL5qPeEC8mKhe57TG36wPPXR27azPrmmbRSA8DuxacCXWZAtFe1QPpYpE",
  "key27": "4boEtZn7XypvYyNHz8DVh1HbT2ZraifzjMjQ3nUif3WCUADvXrTy86EdPM65AePVACjUUuAZLurMJtCf6rcYp3GG",
  "key28": "6686ncJ3WSSsfP23mYsRscnxSiproC9iJD9Jf75WgqM5rTevGyxv556x3GqJSfTtkhGZw4rfa4HkRTYHJG3Qhhbs",
  "key29": "3WSwSVMR2aRYGkdxeMv3rUeVVXipu6azAq3MZZE9LAD1dpGUnDFuRCBfsf37DJSPWJkXsqLEaeE43qZitNBwfusE",
  "key30": "6mobWpRs19oWH9j7u44mBpPLpds5AxqFgzG8bykSvWtjt4mFXcNyFJnHSA7aXbqzFRThHqSUgKEcjKCRz4kqBd1",
  "key31": "21udKwMxu1UoLNDBpzrjbWpRR2wbYhQsnspgVKquGvy5w5udA3ka3pQiFHmEZJ1N1vG9UQZubJnEA8NZeNbTvEwv",
  "key32": "4dFvRGAY1yZpavJTEHJkDEbq2jg1QJfHvuDQfSX1RDJh67RbzXrCY9HCUnzRJTv5n5wBhvrpvzTfFFJFSR5TsSnx"
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
