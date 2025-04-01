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
    "vnHYEpAqtughn8oAqyk8Rez5e5fnjxaai7ntXJkCqpeMhTaTVibJgFrcgYQHjSQ8Y1ueAX93dMwmtkwg2krVLSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dVtp2Qk8WX8mErvyEz7vUMr2Ct5BUudi2kCuVa3iK9ptfzmVzPW23Up5VMsRaLkLHUJMNzsdiCCod4LTh5X27pS",
  "key1": "5ZWDSuzFY22Q9vcN8wFxyiMZ8W3BX7X2y2n59iL2FFXUv8yHfwUMaCSvecdV6mutETPzuXwdiJBYEpqDAHLwFUds",
  "key2": "3cqaV6sRkjt5PADAVDNdZrwEnUHHN6uaMbbCWumoX5cnwLs8Yc2fynnfK4pkwB6m5JorWNR5YFKFGEei2WEz4j5n",
  "key3": "2U6uHWiCkmnKV2vEynExiBFvy2yjh2fRworriVsFjn5RaxMMWktmhc3QWLZQDjZU31gPnBeooh924kQuhf7wcbkn",
  "key4": "3tK6wH3ATKqnh6Bx474ZK5YnZytvC2EaDbNffj2vrYVotLLP2vHJ46QvSLHyaAxpUytPc47gFx9Cq4ahHvRtbHtE",
  "key5": "5dPLGedMZzBaEwQDbR9V9A1Mv6jTEjjoVJibCeVNeSh4m7E7zsBhjqqhWFBpSrN153LJZvJVvWQTYdTkAUb3DAmm",
  "key6": "3KEzV5hnMp5ydorEfe9wnTPB3XubF1SkJGYYnngR6Pm9oPhyYrY7bG1N6bM8WZbFx2qyGh538znRJS6VGzvhpH4S",
  "key7": "4PxFeDs8uacR9CJ5xcPB4Xib1ojqCuU7su8yoJEZYXbwBNBoKirszphto7bE9rHAz2pZRMwGLa3N55KBk3N9DAyb",
  "key8": "2GyEkiQbJET56d4pcHJWmb7N1CKM15evNUSjsBqyXgLQjEaWK3g6Ngn9ERB3bSLAKu5pzzmq15ySk59LWN6fGapR",
  "key9": "7WDs4SYjAMFeNYGPEGqMRxfiH5mc6XmBinDZ2ViJRAWnTtr9KmVErmJKXGQmVcC2wjgBUPMaZxoZH6RDcfxGzhd",
  "key10": "39UogCG4EaDWX5Vq8USd3ixRjnMhYrAcHbcooqdgPDpoHG2wdzyiuwvZpfJo1KEfFWWPqhGdRLe81XnY68yxnLdq",
  "key11": "5wRSghvXeCZwjwBx9Rt2TTARqD8zjTXEFhscg2NVnL78SQ1RPhbKyLaroQHTt6dKxbPfq5YdSPaSGj4aKnt2FNQz",
  "key12": "4E26jJcJHgp6cBozW36ceSKz8pUQ5dCGhRcQALpmPnvqiGx5pJMKsgdcrK8HYUNzAjZJf3Dstb2SsvdechjzKdze",
  "key13": "59XMge4mfrV5jiEn3yUsYK1WxZPhMjtHqLQwQjfcFJEw5wPvGG8ghsmn8DXfTfUckePMaErFBSR9sf8hriT7Wk1T",
  "key14": "5AhihefQzyvjqsLDsAV8F9zzKspyhMnZZYqERrnj1Pck6Mvz4GiaX9XUCbSoRDbPupzhMopM6RzG4n6myzcnLdqV",
  "key15": "3jHfJ9zQTy62f8PCQJUPC3TEgQSACSDBmvbkGgztD3Z1Uh7xvXUF6mRLzrRk6H7ktQHtuqyNTeaN1JPwaHWz9rmX",
  "key16": "5q1zk1EQJC2bpqNKF9jqsakymkNgCJLdJe9UsRhaV8NMy1Dj66FNWQmxNvBqReZNCjLQiG4jxHXnijN9Fn7VEFFr",
  "key17": "cUcEEmg2sKnATYRKGoAGQB6n3Vyjc3N9pjmsQbj733DtsPEPBy6vAHNiTZFW6C6sckRka1XnjJUpSGHhjFR2Ze8",
  "key18": "4StXck2u8G8D6V8tADrAd4NGkuTXmgw8dh9Sc37XA7KtAHAE5R3473zuFrzrPT334jzcFCwcsxq5wW3mW9EmfATC",
  "key19": "5VcsJXeyaJiLM71zhRJCW9LQBzE1jp7DHxPiwbwU47uoKmUSCbLmUX8ceRsHrDm2LcxU4rBK9j8Yfb7KmqKPDkiw",
  "key20": "4qpuT7vbbmjyZkRx3tXqNQQZGTpYQwQkKdgaoDidMoKSvkNzPkxdMxUCtik6LGgEGjRW3wwAoNaN9x85hhqmFoey",
  "key21": "4ZqkDLK3STbcxHxKw3ZcFWhux8mwVPuWPfwhuHvQPxPj41rk8KZAbdvKtXVUTQMBZC92eiQ7pvN7yv4YeBQvvM2v",
  "key22": "3QgNsM8EkjSBjAc2h8SeTW7kZfcgw93J9fyzzvzQRCNGrdCeUH8pufE7xHxTTmTcPMkaUSZFspnz7s9TTDTk9XuM",
  "key23": "4AN1JzcWyv1CG2HHdeLb9MvftGG79wQTASmGsHQBTctbm9Wj11UVP3ukZfjio2DnzXH83DyAiTNibrjbt8gz3LrQ",
  "key24": "37kRdoGUUkPp5tmmLVQtR4dVLSDhNdXibUJRa7zb9qxntnun5mpcjmxFTqueX7pgitw8gkFuUp4ehKt7gTBSJnXV",
  "key25": "2QbzA14KnptvEEQZ69Mdwq6EM12M4q6praMGTf3Xn16bDT2kg1JKqn7VaaGvBGWCWekbsRda5nRf6oNKqxYKrQKL",
  "key26": "3QtGt2SLL5C29FsCzwdHpxToqvMrsMmXyCcWCZqH8wNcJ8X9szUr5RH1CYa6CUY7EcAf34sMeivvAgDWMqP8aP1e",
  "key27": "43cA9FypvXgfu8JEDNpzbshDhpamgTcYkfnLxEHNmjYgwDjePX4RQR3jrXP3NQBFayycYmhbV3wSKf52J2fnbc8S",
  "key28": "jp7Uy48wtmkHnpw5A9nB77eJSizebSWRKYrrG5Vq2p7eGHxtjzpgTgC9Fu93kFouoM3VPj64fkTmHg6kMi5Jzif",
  "key29": "3zBvRefPUCcqAYK69TjAmefi27D5b9vh5rk9CfnC3bx15wxKyj4ccvUGeF4gd16gsw2jQf4oshFsZyii34po8XTG",
  "key30": "5AKhBjM2KY2fe3s3LAK3uEfKMv4XqyNVpfC6SrvuEuNPtuGY3EbRv8HMxe5WN3XZ48eFdNssEb7i2DorbxtvGjqN",
  "key31": "45gmVkDQNCWQrLJmUqQ6Qvb5xRX1gKcC8FM97UAJQ7xXQBxVs26iQ3DsyCd8E2vdp55cSAvjrqxhCZ96mNXnfHem",
  "key32": "5iNbcVS9PGXQyrMzDqtfToy7qA9yrmttfTArKPwXCVXJrfy4rk8WtFLMrfaG9AXFXJSicTLzcYYG5BiYqC3jgTPC",
  "key33": "5zCRbWiAmULjdq3BAuFcHiWPUESPL9b2g639cc7dw1oNWYM7EenJcJK7A7e5w8korfCRWajVcUnvv1JtQRyBejdK",
  "key34": "2Fa3g9qfmbwQvttpVxhJVLSB9jgSL2q78HADDs7BDS1Sqwcso9zP5Q7bbWh6btdKJviQ9csgigWEe1Aydhr2CNyE",
  "key35": "5yb2iqg9rATF3KDmyoWVxBUiNddcpPMATbKgQoKESQzLHvypfuLnCLjwreXWB7bucfAZQnnhYM8qZzejJwLtNtcU",
  "key36": "47udxvzHgEBT7w2Xch61E4fnAhNdDhENvTYDqjhMkbqe3qbK1ENBEHFSBUqGzpELK78RvjeW6y9Jp2vMXwbVjqgB",
  "key37": "4Rj6rqTFEEridYMdNC2SwczGmGDLvvLZcmXGVhhzhmJeKZK4fixDCyHWrYXFGrBS99HnntkchVs9Kk3wDmpDT7vP",
  "key38": "3ftoZShVaEP4FSeBmFJGZ7VoadDwDW57PFT7MbS8qVUrhZzNPKZ7aedGfuuhd6ezYEoMpCjSsKrHPfW7FgqHRGUs"
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
