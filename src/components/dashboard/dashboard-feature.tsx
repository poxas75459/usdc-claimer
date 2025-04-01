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
    "53dqomLY9kYfE5ozTCb1WRYFhFnjRSuc1AEJvozp1hmGVfNV4VcoZZD3i9nF2LBLa2TV6SWJmyhkMMiLXiA9zKPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mcDn8hALP5FsY22jVrXGwERvp9yro9zja3Pv2Dk2YSwnbdsaT8rUhGT2VBmsqi18mB13zCuYJnKcgLiqxJER5V1",
  "key1": "53mQUaEUGLa5MxwRgM28TUtdBFxMtMiMaYkYyB2pNsZLPBPiZuZuvBVFcukCx2q1aRHPwYkYou1H1GbKGgB4o6Eh",
  "key2": "2RdpnDofFbjCe9qqiE3zo94wj8hWXgGvzqSuVu2GGZnfDUPamdPun3HLPFnQTv3DNJ2gddUCgfvTA1zDydxn2GTc",
  "key3": "3HWjbohcskxjZnoq4c2nJiUymdckCkZDUw889Kcuzv1cUJfbrvaY9Evq3ADipopuZVGYif5hvwyq2K1TZ5eYXEyC",
  "key4": "4DMW3MVtEvNFPBUp2g6xTrrY94xRNJr15XxmM6tyVqhFgNQxpKGhMmYArQR3smsW5E3cVPSsdZWtXbhn43WRWo9m",
  "key5": "4KQ1dbzitcGUrLu9jcj1NPv5SNxwMurmDaadoMBopsWC6hTj9SKrxg9rfo6b3c3JZ6WNNzZFprQfNiLTiNkudni9",
  "key6": "9RLdMhkZe6ALVzdjMAPeJEqdYLyTFHVtP5GiJUb9jREDWDQ32cD6sRdSHxyHUNTyrc8yxgQW75uAkHox8YsDvZp",
  "key7": "2ys6AJUmPfHd6pd2r8eZppUqt19BrYB6tBynuzwiN8pVvvWLbG2T4XsXPGw9bhtPEjaGGpdf12Z9EmtoB6LM6vCA",
  "key8": "3CjEiRuVXU6uDPnKAskhT1xVxAG7oMgwogy4aHobPAeWCi1Xc6ovXHBSXg4XL8v8TgSZuvhN2rQ9kLJTnJxiwt7Q",
  "key9": "3vdTmVGomZt3SKggG9ygJaAHCwqiCutkS6NvLNo8RfFw7NWMBNpwQzefSMfT9HwDiug4PZPJbspuQBtBzSmSBa53",
  "key10": "21MMSsawAh68R1KDEm45tHjP9FperoM8wFpyF9S8h5DhCs4n4mu3c6MLRzuggnXvY7EaebVTDgswej7n7Zy85jN5",
  "key11": "2HJYCmg1CZUv6zjEvBBHEBDmjDCMUxJ8ygXD1g1X1UErf3VRmRF6xHPCkNegt2ahYHRXwVuNeNvgBKUKY2vYoHRv",
  "key12": "5wXFk545mbQzB6xt87sKzeD3YWmiNtJhYJxaSZxThhXhQpimfuaF2RkP8wzRnN5rRmVMPcJD2QFdoJdgZeLKtxzB",
  "key13": "5poUNyXdnq28v7AVRkL7knszxoJLzosLo219DQLZNfV3w5KBngSogNgM1DmfsGdnQv2nvG1Csuqda2WoMrt4FmbD",
  "key14": "4P59mT1R9JE9W7vmoYm763ivJYfbsUWt1ui3w6LYyoEeesmkbWDkb6mxAwdFD8cEpMKmuR6ZMxmXmkdVRpR8hj3F",
  "key15": "5PkvzEP6fP2QuPHeavsY5t6D9yoYZHrNeU8t7x3T6Wte2aozpNniXw9z3Z8QGmySmEDPrMX55VSm1AZBAk1KtQdG",
  "key16": "DBrwwHSMHguyL7gmgXJbqaataaaqZgbQN74bMXWLKBuXiH7mbDwxPyodyTfGZtz1kwpFBvrt5X18TqcgBrfcKwG",
  "key17": "4bZiRpCyHeZPHGKHQZiQTR5gKHtEos7Fk7BGUaYoMF2aKhDwAwnHAGDzn6F2h3dJeDMHPV4fAV1BSsYsPp5Wha8c",
  "key18": "RaVH5MyqnmMmAB8YKE3wZ9Vzp3VmNvDVWKVejJqVfUm4C5sVLn3Ln7vQ2PU8AgH1DrS6C7kLvtxntXiRdYy35h5",
  "key19": "VkXiKsRj2ESZ28rtj4jEheKRv6sQDoLkvfLUfgezFPMxuWCRH4qKcg9saCy4W25SWkQx8DvSDe4YPcFBk1q1zJH",
  "key20": "519qBYBMyEpnZFSQaFsM9s4mBisxNFAEGdUdh618mapjpXQV2BunfQurTvWY4VcPdAjqMozcqLRciVLuaS2GVhN1",
  "key21": "4HdkdADFqqk9DswaBz69Sh8XYBKDMXk422Qbk4uJ1ActR2avXxvKhYpAXsFCHPoamysbCFULhbY2FhJGMRZcQCgX",
  "key22": "3BgFMZqibtsZBS3hw3fBS77Lrj5ZKinH5kk8W6r7h7Hx8kjugcZBA9bLyTW28hkDNC2QGoUBF1bzy5o1Cw5VhTTN",
  "key23": "JRPmCD8dQmeT6iCmQ87jGLHxHYrSHoe4PCprJgHbcK3WbxqFYjAcJGb5R7YQX2TMKtAXbfjYgV8XVwwWRXq6qNK",
  "key24": "3PTmXKEGAsoe6PFfL7SJnGrq2gn9m2C1aX4MxSXsZnPdLEBrYsqPGxL5HkS6N7bz6Uj8bGZj7e4hMmDSyza2B7Gf",
  "key25": "4MQHq45Y3s39eUKQxKApG69tQeMWcGXzDm6xHoWbEYCd6igQYgrBbwsjAbsY9uMqAxqAdvFHSBpAXpzeeeCLr9NL",
  "key26": "5qHM2X1jawrxfZhr1yY6z4dK8TbNDuqTGuS28jZ4g5QJxSm3WyfFJgfXyMfoQq5PKqGxYJemYbL9HP9Bn4zr9ktd",
  "key27": "AfDMtJRKMZzLSNBQ8Eb9uUgYRkti3BaUAmpsDXBd7NQgCvE2wTF2z8V4b9ds76yLheh3FrVQNhxcB4yaZprgpVT",
  "key28": "52NHoNNSayc1SoSCnLvMFtSzkZqA2RHzkNwtw8yKbYQ9Xue6pJThJ7ijGWqiY9M5Sw7cE7J1KdYKo4cJMxk6NFjK",
  "key29": "29BwdyHWTRuh1gbHV5FQHR19r4t9hmh4GLFGkb73LNKk1CQUcbeStN1hbJvJaAj2zneXxPAkrj5v5ZdszDieQKXR",
  "key30": "4dgCPiEHpYyDJFFY8KgZQmoxwgZ5JPVJVmkkVKCcZU3VefDGjzQnXJZHvtm7K7zoNhiki1yWhWv9aS46f8Wj5go7",
  "key31": "3UX8AXUoavu7uoryhUMtcKnQftswgbcmrYBADwaDi4kk6A8LeYLTij6UTD3QcLMMdp1a4jxx7VUp9tNtCn3fEmCL",
  "key32": "4wSQdZqKamhFdKpmESxeZJXhJeB9N3FJqEpvq39JyMdh4SLAAkVFHTii7us1yPp4TR3ARyn4Fp1UmdMDac9qE9GY"
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
