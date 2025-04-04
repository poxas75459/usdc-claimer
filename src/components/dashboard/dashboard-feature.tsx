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
    "2SaB28pK7UxRwPXJ6mnwsid6ZwbohRfhNUspTE6fnvyZ7DoRgNL36AkwxTZWmUJD9iJE9x2ockjs3zoHwAcLxy4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EJYr2BpMZhswnXJJPfcYfhhGyYU7PcCz5zntwLL4y3si6RPqygXK4jnSnhmhv134hyRnFjJY7UzFk3xH2KqUJVT",
  "key1": "5nQNoj3NFZxbPXphQJz3AsjpfBtzdWujeZzQXbibJrMEsnk1GJBJK389NwMiwSp2T5farqFvVKVJfW9TQydj37M4",
  "key2": "5jhBSipxxHe1tPH3vHuCq4bf9Lqfz6R6Ajtx86mixauNeVJeteRg3Zw82hDNuRjiwjYQzhqaXJSpyPykRZqEpSyq",
  "key3": "TqiqioBUuZiYC9FzusxMhQooRE5KUpyoge1GeWnHhRHegVe4na4Bj6U6TtBje1SsAGXZPtnC9CtPqCJNbXNPLy3",
  "key4": "TvhpFrwZjRGe3jxCTbtje4KMtAmf6HUUdfDfZsqTgwmuUbybpmmP12c9rWZA4Sa4txXmRH4rSTrn7zQxBL5VdMs",
  "key5": "2cepGiWeeVNFF44EysGMzx9i1XdovW29kN3WwyjQvRVRmE8uYZiChp3eUM2eLC9o7DhaCEbLqPLy8N6gJTTyUngW",
  "key6": "32urMkDLLA1B3xd4kGMN2JRnqr9LtS8BkkQ2Y3rWXqvZhhxSRTqzWvxUwSrHbr2JEbjiTNCVqhJ2sdkdLmeJzpzA",
  "key7": "36xJEQhQsByAjyf5G46egNpWqYTDWJwuvLCV6C66ANRB7kPyqpbXPG7j43uUQr6rU1HhaWhLQjgrDExxMojkPAzh",
  "key8": "FS15bQMiMfQEpFJhwc1DdzYgzHZNR7ooMd9Pbqbb1eHQhkfNccWs5LR7hNwzZ275AUaGkKAThDVhuioRpyUFJ3K",
  "key9": "247aUF4HpR2op6VTQLGbVTt6mPpeXJNgVQ5wpebrhTAxiHVyHxRH3LmYC7tiwqMXvZEbaYhVZHhYLVE7XtXpdGSq",
  "key10": "mvcTyibvRnwy1mnrpgC9utLr15wt3696KSs7PPtNyESdbzQ579AWr9GD37sFTgGwTEq7U58vARLEmkMTwUExHh4",
  "key11": "VcT3jhScyUqVz7EnntSAp21K1gLNLzBVHW6RPBLRNDLmmAYDZmB6aHFmbHdjzqmb7LxL4GsFYsnLdfyaEvnFx1i",
  "key12": "4hDhFdGEqDQYXMrktL5gnC9fA6GwG4BaLAbPkzv2AHkbhB3xXnVNdXWbVbrfrCwm7Q6vgfn93Nmuuf8KvvASr7G4",
  "key13": "3Z3tARaMPGa9Dwn5ZwNNuzNdsRVfyXqz75KDdEXHUacCPdT7MqiPF1EK82sxaTkJAsmELnCdzWDjfguRKmq99jtV",
  "key14": "4CPPTjVb3pZDXur8nZvMWVCwu9bAN2nmRK2hQLJQwNYYYgdq1HsFt34mEHaiCponLtAi1KwXrEeNxxR7icXA8h25",
  "key15": "5bwXrviH1kUjk4SVqCE8hdQZGAxwv1WPbd367D4hpVNFfZ8Z16uTdC7VAXbDB1R9r45oikNqMbvLK4DPEF2rTb7i",
  "key16": "Qy4HcjnoexSX2JFXXLsSW6VsjaVbr3UngenG5XLLiW9XGbUCSdz2D4gyfsFCF2awJeuSubrCXcjTtoFU5Rsbn6Z",
  "key17": "5PVUvgURZGKcvTrUZvF8KTPus9Fq3J83PNBzLiLyUUpJa6KRu3D7fKUZqKwAXe4fJNCxyTjVtKjMCRsXyTbDGwAS",
  "key18": "g6ShjqLH1FRSgCgqrB8VC68samNGhQoGNBWiLwFj9GTizBdzyKtzjudpkbB3XjpRC8Wf7wApsrkGdnz7ip5nD3Y",
  "key19": "23CYCjoRw7ty7hSQ6Pf4rpFWnxWqSoy8EvftpGBVVXqGQdPRygJhPNYJ4VweUaY8B6nvdw1DLGEKecgSQsmquLQ6",
  "key20": "5ShWeFNurjRSzeqg1aC71guN4GmwLAjrY22RY8zFvWuan71esDxgDx2WzphACwp82fQwoQdGwa8qcXGLm3sApUUc",
  "key21": "iHiG4H5qwDN1oX13oTgaiJyZcubHZFL59kL8tjQxgb6MrwbwxwvwUoJphahKv1sJTZPvKgcFamv3PHQnjkV2C4t",
  "key22": "2DHsQunNQZMLLhTWioxfL3Bo9FuU4uxGjmHc5kwkUsuexZWc98CDfd6hQoTkCThtDq4kpycSsb7hiJDrbjSR58TH",
  "key23": "5hHjgTYKPFUgYBEUM5S2LZ8Tk2GsuvFu1YpnmdDxaLKtjr5GaRhtAwckq7SQKz8Bi2WGAg6TeuqdjBv9AezjhaQs",
  "key24": "2WTB5kwT3La8JfCfGWmXUn3GPa7r3ZHYTn5zfMCgr8egfvJEjjoz488cUyrrBk1fx736zpYKBrHNsTXVMMU3uW8t",
  "key25": "2cNFEeXC2vdiKDhUGjzSNFqJ4zHw1FAfZrGzBXxqSnCD6hKnUNBtzzvTRRSBQsQG3DgKS9GrcaC5mZ7zVSRzLwvR",
  "key26": "4MzBLEqiCpw1CBvS3nbfSesNxbReWHMChGjsxXw6DnmCHgCy5wVGLoG2P3j8LcmFWYsjvQxFFFMBN2xWUURbjea4",
  "key27": "4yzNE2S22t7Zya6BxAahMMhzHKJF5wKvE9kPiyEZT5XpmKad67skmkPtwQ4EcNJ1bBXz3GD1a8LkFN4hdX4HSo8R",
  "key28": "4MBVfUq4rhKUMrW5TRZ9CCYToR4XL2sD6NFMnsGPAYXVy91VS8VNXAWCouN5k3EZ6dAYtwoc115wTrVsXUAUFXe9",
  "key29": "52qSAuKdAQHs4GX81yWdptyCmu9nUxPyVuSDcCARmTgMmqaX8kxh5iTioGCDmHaGbEKVWdMjx4QBdHkmXmVvaje",
  "key30": "8xJoyw16JXSfbefUhqGyrWXzbXodgMLqJanBhaoXFKE9pGNZn38haVqvgbwg9a2pBg3wnQ9zPYpHknt3L7az5wS",
  "key31": "4RE9M5e4b1VYpU3MN9uMV5bh3hAjY3JZmAR22n9QdFXJ3qPm2g6hx7TxWU6TsWjZ6h8LNFXbNN8C6sxEB4AZZzh",
  "key32": "5BjN7EkJEx6uYwXeZUeYjtbUAuSDoHWaNckxw9NLpkpdJoxRzPmXNYbxR6RYkxD1Z6NSrdn5RerHCD1mEAwUEgM5",
  "key33": "5vubDymEx6Vg2bacvbkdju7XugkmBHXPSeorYXyq8AcDSdmfHyFmGqwELkLFUTnoqSNrxrpntra3PrHMcKqoRiSn",
  "key34": "3mofgKRYo5z3Aer4tLJpA4swt7wGQpMPM2XwqJDi2MtW2YASzZ3u5j6F94ASYrCec3wVfdyAMXtQXfScdDghtTZf",
  "key35": "45Xdx6ov3yVRkFW7JvJmafffxsiKc3PALcbhaetm341SWhJHD2kGobuGdHsqmmXrxpHcZJLtTLENpfdP6CupUs4F",
  "key36": "4RrEUQz9XvwoXyfBz4z6Eq1yc7thqq8yKi2mqPcAKFem28EPRx25wsk8E3TYtzPiQDeRNBpGSqoG5Gc2sJkiiwo8",
  "key37": "2kJhcxyWU4JRfQxiceGqDWVU4ywAHWgqiRmUNWAbEjEZCuNtFHpCM6qKKj2zhVjDKwnHuCqAFubpbyMzGFS9ezGZ",
  "key38": "51rR1kV8YjXzDqEhTyAG1aVf7LukXDxsUAywRvErzRMeswEqwcDX4SxA6jWttK2GXKUZujMAj7mratz59StcBmDY",
  "key39": "3QXDsgz8V2rHdVXaKJ2JXCW2Vx7EuXM4X5VtTqbgnTarjREXu9722AGUdJM6m68yrHjKJE7NurRsBpctH1z77uCW",
  "key40": "4H3QiET95sF2e8VNbz4c8aGQGENyNpq8n2U5xiqyGNQuHEFTG3NYyBvwqjpVL3VZPaeJFe92GBPbB8wL8BZxt3cj",
  "key41": "3e6D3PQF5miyyUM3fzbhmS3rH2EAPj6S8UGL5EdvGpHfX1BPsSTTMqiGiWQt36p2BX4nvuZ4cB2AQHFqLZX8RHnw",
  "key42": "5QdxitLYuHsZemmwx63EoXpeQUvhHGapMAAD246EdoMKttV767MNk8SvWHmXHxT9EED3LoGMe5zrpPB91WkUaSi6"
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
