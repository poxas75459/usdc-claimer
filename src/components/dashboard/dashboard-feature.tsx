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
    "5PkA3wMDFBPZYYeF5aJYAFWkhVh1VyiJAqka4Lj8BECMZA388VDHboCkxmVoVw1L9t1Hvm8nQGWMwJQgS11NfC9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CP3HRi9Z6hUFBnZquhrgPmjR6FMcnpJcUqoaVbGuTrG9Jt6fM7SydgQBCEFFgY84T8X4Y6vwCqi1C7w7f1dxX3x",
  "key1": "37V1EmEjEUrZYkSgbP77M2s7vhg4SB1bw3Qm2ZTRscB1xXUhMebkK6Uz54i8X84TLfsufxLb7HUJ4CcwSLaa6Bkt",
  "key2": "4vQiwvyRs7aKucXyre6dz4z4bcRwgmMWT5F3RYieY9gU9d7RY1vWwW84nAPtCz3JGg25ctpVMWfSZBtLzxc61yVg",
  "key3": "658EFUixRZzFiW5NVUVc1FjRXAVNFgPV1Fr35LGtTb6kAbpbVp7W5druLfDsEoXfHTR59r629rsYW2WKvqHzqCb",
  "key4": "BZ6Uxq5kY1M23WoFLPAzvYbBdcJ9uU8SvsB8uLKui8XXqH9E81JPtDgjkmNxsi4ubJXpZZs7cbMTN9nvdCBnfp5",
  "key5": "2TCQZccZ2XzNcBzuMd3zAvzsNutG5uHk3ZLiQ5JVbJ6fBcSLxzsok1pN2Sp4w8dXZEN7Bpstt5zNc4dceZdpNsW4",
  "key6": "rFv9DsKWRhFCi3czEJYEUYVdS8wwrMQL2MAhwd2pN15G1HSykxGYp5yqh6gmtiXGdCT6Z5wPMKqfVryZDDUtHTu",
  "key7": "5hGCGaevgVCh48v42beLumK7JdE1pa18uJTpTdwAnkHkeiAysnX5X9LG5c4pHkMMFNbPUsu6dnA6dzJHEDjfEcoY",
  "key8": "5kq1x4epLSzoV33jwTu4AWQqzNaWVSeBoayYqisc8pgL8Q6Zp6TdoiuEC2Ef8maaQGnxKaRzABdjB87zRQKW9Hd6",
  "key9": "5HUcUoYbL4medPBLRUxSxQX4MNn3Qox5kwHX8aEQYk8oM7QDb7hozqPn6pQk3mdiEJree7AWsBV32xb8ZVRru2e8",
  "key10": "3e25MbYF76Z4uSGsXFEzcyt3uXUuWdAgx1ze8Hbcgv7fM2dWnqVPy95TKssXQGtAMdQcShk5Q1jsM9jVRBvnr6oU",
  "key11": "5nx38pZuQaAazjoeU57SMY6KYJDW6RoZcEXK1Fq6gv6rQ8LmEP1ZaVb5GVJs83vjtYqiBfyQgK45aiVaXjyPQAa3",
  "key12": "4JT7PDgwa4r6KU3gbSh3rx5FJmgmo6qHE36SYR5fwNN5kZRJNF2cB7K4YRi1SVP4EGU3mMUgSaVGizNeRe1y4fZZ",
  "key13": "7YB1LpFo2L7tCnvrNWmzE9QzkUvicY9JL2vsLmXtdGatDa6LVf6RXSaGhjkdUD6T7xBYw26u6He8uveHGuJxQY5",
  "key14": "5H1bjr4iLrJdya8XxesFK3Fg6SfLRSgHmu7jpSZcJMuECgmyERJ3auXoUPqyo836C3NDeMDG9w9QirU4z2J6HcM4",
  "key15": "5aeAVX4zRVto2QYu5AqL3M7eQWrj3dcpEF4iCkSMitgYARM5KEpfrRzFeFWM2pQ4QpiNfuerAoeoWEHY8fSyZ5qu",
  "key16": "1mBQrBAghZk8X21tByb3ErhCW9kwHrpvHDZoeD4DhSbJZWYkNLEaxEuBMsDf28m4RUc7QeQws5FzmU7ijemMeAL",
  "key17": "55a3i8ch1QnK6UuYLUZC9vHvbDFzP6roQLbcAwRy93Bwp2kgFMEYxhchaPDiHdGBuF4b8GgrbQECc78FqCe4bbec",
  "key18": "FfJvBra1v6RdAbYpAikWVNVQr913N7QAAtUoPw9ZpTCVeB9oAWt2vNVx6fKbUuadsGDSPbj9bmQWZ9auVmfqEJA",
  "key19": "DuJwsJctzifCzYCh2oMUFsvHLWqKPiM72haaNzBkvs9CrJc4c9YSeSppc139mc6ffZ4mpx9QFU8C3RWXoJzfbSD",
  "key20": "iEYXidzWTXsz5Q8yUoS6iSix8seGmDL1Yv7f9k9MFi3XPJWyohtJpZTCX5f6pUvVENEs71uc3V7W9fTx2Wpv7cA",
  "key21": "qzZFthDd4bf1TzxwPU5eUTieXpcHkzmop514CUybYZEvEwjnJsYZPTDUTQri56dSQrJPiLuLGtQb7w4ChTv9PxG",
  "key22": "41WiyBxBkZYUkR9mVaQJijCaHWPbYMcJ6uLqf8zXRHy9NU65P7LBTLH3XUrfXhFZMTdzQ7SgPgWJan46qd81RsX",
  "key23": "3GL6mSyRwQqvy29LdZ3fjycEyGLwFCgXD8sWpn5fAFahWhPcaig4i3Uf7CBGedVtbP3S5K1ZGKt4mUhtvaKjbJcy",
  "key24": "4k4C7rrqP4qmej48pT153BYvo9TXdhTqQeozkkmRC1sjq8RD9Sq6teUJndWrx7tSB19PyeCPVuXo2neiNUmJyaAk",
  "key25": "627X8EBeThsFRzqvyW2cytuYs5REd5fRcK2N58e8RnTLtADRNCsNURfaj1WT3gHjHxVjwGhKA9Vy18Ua7WD4vCmy",
  "key26": "LKVPSBMb1o7uryyG4uMZDgJF6ZtMtQLXqXrJEbtLXDxkzqeT6HifB8s7F2AyCTNdSuhjNc6247CSRWqepuazsmL",
  "key27": "uV8pKFQYYy1QhL7vbit2Lt9oVV83c2qUnpk2gY5D37i2M8tPiFxbzk11BSwM1EtooQkkgtHAmov8EAfbdtgsrZE",
  "key28": "2uw3y6sU99uuXapvKYUbuDRZbzfRMKz2JQH2wbkGCpLy6xEDZZbegeNczd78kZJEnQovjxH3spsAubPpU1ft33i3",
  "key29": "sUQas81d5g4sUhK24eGvF9GBJh2gbVEbcFy5DxPmjtx6kB1UGm8NGkR4b4sQ1yrJdUaC8NJvZCqND9wttwJj13Q",
  "key30": "3dWsYjwXrH2g4i3MZtz1CPhzfWpW8aQ7kWDNt7rSQrtAqA3CcL832nAFBhz9MzPdn16UdvYJoE1Fgg4vbFiQw3n",
  "key31": "4yC31Fz9bXB44TcNrzbA1wZKp28rZJ3erFcUMoEqY4pJom1JrUB6frH3Md2e6TbgCV19LZxSgP7JqL32XujCKW2h",
  "key32": "SLwrHmVRTrXWdx9iZBfCZ9pk49wo7juPFrCyJXeM4mbL1QyzE3dgh1kLainYmZY3ZdkLGA3aR9fAxGoSCVshAzC"
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
