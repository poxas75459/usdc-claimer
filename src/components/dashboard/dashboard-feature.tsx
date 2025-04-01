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
    "2gTos8eSRfummMJsPTxHwUcvi6TF36FUpMc82WmdK9YaEbSLC9pkem3bGurHBCaB4XF1rDZy7A7ipZeVn1EMutn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kmGdCYG1JGuErATknm8hjp9eXDZR4YC3yKuj4iZZDkZnMVEeKxAXRFZGGEKeozwboyYD5NCjNsJz75in1UqrE1b",
  "key1": "5ZSGXTTGweE418hcXYFvokrSxyBjD1pApafkWXUTWKsbvr3qLHrxT1aXNQGuZRbSbtRDcztGFfzJyhAJfnEPeV87",
  "key2": "3uZgGQRrUWR8rw9yZQXk2hxk4BzGiHvvKLPLvbaS4fEsPPkvx355wGUiZi4HRnBjEUfhtmq1mybaU7tRoEq4CZm8",
  "key3": "2km2aBXibvtkMc9KJVZ4sHUHii1PRheA1ocz26ymohtxEzZ42hAWGPyeDoiRkyDDm1uQWeUpvLjWemF3C6wN9Prb",
  "key4": "3pTB7UsJ8uVQUj3TY7z5t1FUW4oYMmjxG9KM3LBZuXrDWw8piCNcHqQEt7duFVZ1MMn7w4CSr2qCub5sVwojitRx",
  "key5": "bt5PYXfTyLaTgMNJGzQ9YuWrP85f8oTHXsmsLcPaERkw3ZoFXamZCZK3DMB5MT9oRNqMWH8HvrpPDvJitfCnxN9",
  "key6": "28X4atyQThniUnS61juirB6kHzXP1P1tqE9jKzi1TvLPw6PyX1EJGJ4uCikR2z7ftrVrffiP2eDicE2zSCpKDiYA",
  "key7": "3v4FSJtNCKwEGnEPkydDpHx5fhgbu8cTVrRWHEsYYsiCnFGXqG6p9NuxQTdUXn9cV2fYv57BiqVex3VfKkE1oZKp",
  "key8": "vteT4t7oaDMLNBjhPYCviwk4pz6fT7XZoDw6Gtg7N5p7zFjxKyy68BExmne7CyPdvCZGYLRXaLPgdRuwttbdETY",
  "key9": "4ex5Ag1BB2bkdWGuuywapJ8T2HdAUQkJBAoS3DFyVKM67bNuRkfd8gWrkjCddoSE3FCnre4jgbBEMoPGZtQmx35G",
  "key10": "5ncqXT6Up89B1xC1kfmsTtpVaTDSrRdew6a8w8wkKjLNcjgqfD1jtYCknzT3gZuhLf8tnKEPMLqTmPkuj9a4qtrk",
  "key11": "eksFp19bLzuMt96GyLKsr3kS7FckKubdTEjZsDSZtwmydiqZk38nhbpAknYryPtzVhxGNj5PNSy8Q7pjVCirZ64",
  "key12": "2rBzdjCza6Px1VwNfoGspPbb3uD7dRtHo8yowH8VTJ5p3cExgYHh1LXy2VGDHdwyM5iaiNcASpHemJ4osSQEqsXB",
  "key13": "5ste7r5iR9QWLNWFJwSt3hFgUveTNSxVLv2U8UuLpAbBsYdsXxZoU6Sfpk2nMd3fzaa8h7LkvjV2aX46J1hZXaPx",
  "key14": "R26GYd61GjpNQ3YL2a2CcrS42ncGe7qVh5cvyhjLMGfHWt4DY5WkL9S2BMGa47KxGHwK6XU8NGH9nUtpFHBsFbN",
  "key15": "2r2otva7SWGMC1Vh75woSnUSM6x3S2ucQ6moD2d3chuZxd4etwhwBFMK37YZNLSu39tff88KTGW8M5ccWfVRxDYA",
  "key16": "46xbjYmEctPLnUF49E6GhZZAbAx4P8hU8sGxYcGQqQVKCt6RmqwJ2sTKpKwWFGkQwTxkzUnhh9ioVLYmjzN11TBw",
  "key17": "22dPFXYphEH6vaHYvVtk8HzTFUqfL8oqQWYBhm723pQJKt28bTqBr2BSoJEqeyT7hTb7LGAGgZvPTmud7PoCfyec",
  "key18": "3hpFGW93sAALj7pFFdwR5xsojzLxhbZLKjmXVGruxpTFSswZE7m5qDSSkJ4ehxmW9a68LhDRqQD3F4mYfXx4amSs",
  "key19": "4Jk4Yn4YPpcCfSUaqShJ6zNvTGnThFhFspRMM1wyoUptUEh1BFqfPYKbrHhUv1ovsmWxkvZLwRgP8PfXHoTZfU5Y",
  "key20": "5dWT9JUb6SmNZa8TvzswoZmT2XDY8LpZyFX3ycesjgjguy8fA73mjWvwd6jC1dJLB2TCqRvSeaMAboMqN85hDeRX",
  "key21": "3tswvFnoq1EupdBzh5CfjJrnGjXXMfQqzpfhLZEbnTifb7Cawg8uNJtb9HWcuR16ixmpdcCyZT7ys2bWXYBM2Tur",
  "key22": "fFGXzCUwMuzSbJ92R2DS7krfetZKNReZQW8iWMDZV8K8DZqvJAUwhqMtvYP72LKacQmVkMdpGAncZR9cXYMDoPt",
  "key23": "5LLVZFDbT18dgJgXx8owvG86MMFvKMcV56xBQuALkE4mtAWZiRRhvZcALTMRcikUvpmCCcydtiQfrdk2x5Yjrvzo",
  "key24": "3doAJEHCMK9vUwFbZuKEQ5LsNUCxcCeARG3m6QcckfscHv5QRsFW72sTG8TY7TJKmuTYJMAcUoQJBuwWvE6xCiu6",
  "key25": "2vnYMqQfqngUzptKZVa59gMgoJatUDJTVQyC2jjHtVzUqcMUEufRPfBRmbgP44F6oHDTEWrr3dz4Px1nPGtFewxc",
  "key26": "2d5qNQsBqnVhSyqadKKu31R1dnzR31XEZwazzL88gr2xwr7rq6EECakinFsJgn1xcnYfBeKjgwJbh2JqRXaP8JMT",
  "key27": "QA5bUsB1odU1kR4yoXd49fcKinWwmHu2zS1iu64c4S3ZcGLV4ocv8Qo6BiGXzEx9rNLACF4yH4RZNVjvkgW2Zrp",
  "key28": "4vDDkAfJ2DZPKoUYYDUKCWSGdw6adujfZyjxgYCmR7A7Hvb2qbRxoWkkiNLgtiA1jffCdkj5kQ47H5QEeRHshBqy",
  "key29": "3zeNaXMUBsPp9PH51jE4DBRYfkc3Ch9Q1f4utP8RsQipWwEQfv4JjdwsXg2Dfpaw4FbxdKJ2VF7HREEukT1pYmFG",
  "key30": "2nFREHtn22uPJSTPpG87fW7b9kvbrkBzmdosirJHxzC26K12QsMA9NJbwXGC5jJVWx3EoGJoN491D5B8baPUZKjV",
  "key31": "4Lc2Z5YKUg2GU8AXYQbRZ37Gv6wmP3gajPHS9tHq6TLmZ7PAXPspsC4N4o9ZWkSaz7TTP2jyDS1tHCQC6oquLREr",
  "key32": "5aF1TCXC2VnRwW4mhUNGaf3tP1sguKZGmma9m5bsAKyFtxS92TCEze26EQCud4RzvRvWfnLHxJZKmGrmwcWwMnpE",
  "key33": "XhiKJoYXEbm16Jg3zxzjejssVZWz3nSAQgMXxyrifwV1ZhtDPvvykkegCLRWxaBoNJbfGW2G9mA4AhzxBMSNN8q",
  "key34": "3TSvGo4rXibRTNm917rRephUiuPfgnfyhwNVrbE78CAH9HaEDCrQu2X58EhTgYkFmCrpg1yFica6qEPCyjaJJBSt",
  "key35": "9AhudxsAHyG1qbEo9QHz1YWU5Gfm5A2hApKGbZVTExdUXcMBEgZZzBPRzWLXaK2sNqzLhQ8pqKLdSFgSm2DTb1A",
  "key36": "4z65kW63k2UwkYeJKKLYTCuzVv6W59GuAkmx5aHENpZMJs7x2MELK3JQWJc5zVqycamsSXw5AScrrnx6GMTovQw9",
  "key37": "BeGaab3JRCKnCpJNoGX6ZQzh3SXf25w33XguWZS3oRx2CptGg7E7vZ9CE54o2J7WNzVkuJ5mHHrC7AjV4YKHPG7",
  "key38": "3eppVGQsqHzFstMNLuYKcRxRpsLazSn2QCgY5UZZgzxCc1Tzcg5kR4x8xk6LXC8TJLtny5fBGPuGabxeZMTWtL9U",
  "key39": "2ybducapTJNxw6FYc9Gn2SGwLEA1emaENSyQ4gKutcurmTvyjB4BmsZTKmB9SZTi9gWjTTMg4JTDDNGd4AzrEmQj"
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
