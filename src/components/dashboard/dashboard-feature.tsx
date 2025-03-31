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
    "Xv7ZFwnFWNjoqyUayEUZMiZYKDaSR6JZYW3jqCNjTazgNA7PGK4uvX8ywYJiQGNAXKpyjbKXZgh5Np2LoBgqGwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qJvvUfBzmb5hsK4io6J4buqzpzT6NuG4whZCBWptKGFEWTyV72gSHVwzXZnGYHs9aXSaYBbEFCsnDQfx3YR2ECs",
  "key1": "2dbvHPKW21s3Vk2xTvNsA16QmrJYarKCkjHDmzUbUoGxm4apZGUyGduhgzCZiUMMuTRodKX1TnXdqQTN8LAwqnAY",
  "key2": "3NJgr2CdAnewgjoqgUZEisqrjxWsGsvA3zTnRswLFVmEGydfU1n3mSQsYbaNqQD7k7NygJztLqNY2NAciuHsrwMM",
  "key3": "42rRE7G9G6TR28wouLnsDphmmPKuchXz8M1ziowDF6wSTcAd3evs9Uhnt2W9P17yudmsLnK7RgCGLuvpxLnEdoAm",
  "key4": "23eCkfK2rTLTdr3qKgQgB4ridwkjdA8B9PfPMDt3oKgjc94AskkrjrE3Xy34bXqnAkQAqYt3y5R3F2pwZGHErisw",
  "key5": "NXVGwDHkehFHv4v6NeXKiNPuEUqHEqTAdasxqH4EaB2PMcC2xctJeD6QB7ZfthjggjWq8ZJk4KeqbUFPon9aP9e",
  "key6": "gGXeeTRes4RkiKCAiRV2iHmDzrBJkLHHzbKe8kzCBUqDXz5PPwWjDosmUogmRgJFqZrkxAyhLpcbbFnK3gHdgY3",
  "key7": "1y3qW1tyErqX5J31wkRbmbUyaHGWP53qPan2fV1GTBAtgQSn5s5rH25x6UNwoBiXLTjWNZCHgCqQQjc6unWZXTP",
  "key8": "4qxHh59yEFk2SP9VuRYjibsa5TWdvxdHJw2kdaxnnhrK7ueUekQUY7gY3oVTymgm79rWKKpdaZQo3XwR4CWo998d",
  "key9": "5cFQo9ZdYWNPBaXjUUVgY5HV9WCVaANUsEQvhL6kSD35HU8k3ofSYMKhcAdtaRKuKMy9NGPyh15QnmxcoTfCaXBW",
  "key10": "3aAnW1ipXTbXFLt4GmoGEXjVF4Q4v7mwSHSEa6BjVJuyswxAD3TtwTeGuUyFP92Szo4HArbXHBrBWhJdaQS7BU8M",
  "key11": "3cesMZsjG2kdMoU3ZbepDB828RrgifT8qLdEgCmGcQiRQ9a2WnnGaRDwi9Uejb7TaQJrS2Utzh1Jn5RoVJ6f6d4n",
  "key12": "2joW2SJPR5iTgUB1UTU9wuMvCUKPbUZ6YMRum7Y5qcHzzU6zpYJX5qmjDZxeGaxqSJURby1hewZTJQU8aqnzSQtK",
  "key13": "4tmb3P8c3CMbDPWfSDv4hH7PVQftb43LRtoxdSU6njZtBeQj9AxLPPQrYPHasC3xR5fejVzu5Uu1ktBkxzja5hzm",
  "key14": "gHtKvX8WBDvYJ2rEJZpzRJooJmvLpNs9hQgJY4XpK3npM6kGzka9pGEEGU44o2ss9KTVZxaumurJDRJd463WSyP",
  "key15": "4bD3sUEqRVzoe1FvyubWj3yuZrabkAcp2euAKoYL5MZobLpV7XKtnZNST7dxSjivKuJWq3UdmpVmS5s9r7gBYZ7f",
  "key16": "3EeityvP9Tr8kHp2ZiWKatRaCAhicwkKL5bvwU3mERz6t9MNoHP9B4LhPc662ttKXFUH5TzVmMmVSkrDGjD8uWH9",
  "key17": "3GimSxk7rS27N9yMNJdFfd47iqZAYrAtQ2wjLWdCqHBrwwpPsxqwJsojwTWkHXaU1qx8Pcmju7vSqksSXCJF7EXA",
  "key18": "x7HNQRoDXnmig2tHdGDLykLsnjzWKruimzL8drEeHpfp5cKUfYvh3ngLtsPNa6FpYyvDPN1A85ESt25t4LvEaVB",
  "key19": "5YSQ4kUtKrqLYwEB8q2MXfwfnYx2ENDVPJ9if7C2AQmKDXszrKkt7hTgxoSZhXFm3EzharjsVgXJMJ1YccXgyruo",
  "key20": "nhJ9zCKBtCT9VaBAFtAUCZQvWv2mCU3nCr3jsqrcu34Y4rSkpmqYQXiAz1RDJhGGM87r2jXuoixy5d2e4uDdHfL",
  "key21": "53gQq759kBQy8Xp5yB1LJLTrqAWyydouEx9sWzfko3nn9J2CmN9x5kBU9YYsEVApgtx7fJutpcV6rpZyNh9BtAMy",
  "key22": "FvLTtuDcgaMWi4uwpFXzYSgBKhg13mkwPjwA1wKQv7DLczifm9qZs1kshwKi8u6v2fnHrtAXfS9WbqPr2N8jXEL",
  "key23": "5J6VtY8gfR5S9ve9TUWF6CWRPK7mqW46cHt31pLBrrJYSqekQAxW8HFGzVrrF6xGcaDGttLjWPGb3VAukxEPDsXa",
  "key24": "4B22MZjYSXHW4q2kpseM9VanNv6e7GuNaEzyQD3re6qvzquR6V1Npo6wDa7Q9r5KYLPLkHjeASAwAKrMT435rbhT",
  "key25": "3Y3b4rcgq1AyZNpaKEd4AQyqkZtPFfgjujrFKYH2XikHC9ANPqKGm4exivC967zsD5UQxRSTq7aDSjz6zRZuH95f",
  "key26": "3PAvsHLPo7yrF24BcrcgPy5PF5LEzZx7YN4YsnU5dDuduQ99psXezr9fZcf4yjDjmwwpERkVo7FDUup5S3f8mFsw",
  "key27": "5B6bxHYvLAnqYBBtwdsBtLcqMiZc7yserbt7Bh2RrFaw3JzAwSaFGzSsm1UYFnhtuDHwK7spnR3tghTMq6FVkv3E",
  "key28": "5V9CwKA6k61ZuWVNsBuwckh6amwPHcW22xkfeSAeZqioehShGGRjXgCfKBF1P2cShF61a3EFawHdW1axAn9d1ANH",
  "key29": "5zrmuq1boibg6ukPuWk3Zqt65kAuxvtJdBTdKsnw26qdDvdeWX1ojdCADtTf7BwVXHpkKZ74DNRMqDA4Fnsa2yqS",
  "key30": "321WR7NFzYhVZhC4LT84q1zLyz61zWLReNDcf1Nkxoo8A4Sdci3zbtYYaTtf322s5swBw2qWe1X7USAzfJAMwRve",
  "key31": "5nqvxdycRuF8LpfaryC8t3Ja111RhT5HYduJG4nEGJSAj2sC3yjvtXRSCuAb5FXXSUUKYYdPvJ53mywAf5UM9zma",
  "key32": "4noJ9zzk2oMjwaPZiByKRvGp3MbvUqQA3dUdNWAGLxxANbShRMGjSvbx6D9LpGH1DZpduYDjkfwyjxnh3WrvTenn",
  "key33": "659eeewSZob6XxLw3NBjgJ62CRrogGhsz2L9uTT3KTC6cxaSceDkXcjZXXXeUBZ53MMzLSkUdWtnsK11XqJYKS6v",
  "key34": "Ln957s5xM12JKGdQNsnaNqG5pqCjHLd9peay1ggkAZ7WLx2vuAGNznkDteiVcpvxKvGgnh6r3QEaet5f8nrfGYo",
  "key35": "3Tkh9nfkuZib7kvt15pjf3bNiDdvYD8i1mVvEUrnSXbiVycj7feeWAeGxbLqgUpxMATXSRk5wNcZmjYSUbWmqUDM",
  "key36": "4PDCpWRQcefM1D9nveRpfS6nrWykWmoeNCiv9ViGNgyGJeiVTkJzHXPqbwUowtdQwkoNEP4Wy4HqhjUmqhBBMHjZ",
  "key37": "3MEWq5gLZLKkNz1YQiiWYp9uAUyv87b15SownEoAjJYcnMSNrA4eij4MwFPueEZJxZ1i6cEz2vCZ4ngEWAuiC7de",
  "key38": "2as9eJ7ttg6RVvxzoJxyRxcjeK5zHkS7qCyb5uPEjgmje9PEY9rKQPiW56BSJBYv4QRHsgXz75ENqEW5BWRoHLSt",
  "key39": "5NxaiZ1bhsas2R4keFAhgBQtLRSNoPhCF8sDV9tnFqR1h4DMDuD1J9DUHqa44W9SjLGvut4Xx9CCPFSvcrDu49JH",
  "key40": "5BnDT3oL7Lz1uL2pJsxHRQukamsrEcWvSDrbhB5zeinirxrVknHnpsiJyagcB99AhkiviVLJKtZWHQxBBoKjFP5a",
  "key41": "kLgwoiSxrMQ5i6gyGcj1dHGET55dH3VvshQGLSdGV8n5s4CR2jcnHrr8UiJMQpEtdPj4Qx7bh4q8WMw8vdktxnZ",
  "key42": "22Vs1ERHTFrDsaMNArVz9L6cSV7h6ugxbsYXJDRbG6oBxTn7CjEp9AtPfyZAcvri666rMwK31Q5GhqRcZBtWTG7G",
  "key43": "5KrtwNBogcWwK4tfCw3nNeG9cCo1vgdzjqi97L1VRrtVMNvPySYyb3Jmcmyp7SGr71yJKjqNDpCejZS8FekvUJFH"
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
