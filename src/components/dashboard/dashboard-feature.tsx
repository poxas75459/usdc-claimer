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
    "4rCmQUNckd4vVvGoHgHAy8y2WGBJpGKvVXbMbF8jZSRDax4NTE8qqo2s7SVQUbttPiDkiUTuwBPqc88893FCazL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U7AozU9u2TSZw9yk6yZ1wZhEcaSxufjX9gzDdcJd9j7Ac3g3FN7tRmKtny5kPukjLuacZ5UpziYXPiLtLvs4b9j",
  "key1": "VVepc4Hv3FoUm7Qq3ZCH8T76jC92rizQdsVsQRnVNJyVB2s2TydXt6zgzyMc8QeiJyPvHK6mhZX35r4MaGj4o3b",
  "key2": "5isSxqrMYHFPyUVpNjHx8WF8vqHWaCDyfd6dY1qGh9s743xq2AFwRszti249mztvfx9CwF3D5uanafsgYP1jx9DA",
  "key3": "5ewFxQkCVnq3Ss52jsZ1edt6qwWdAadiKfqiYp4JWdJr3wfALzvXDedhLuxuzaAXAniDGZtuM1N5PyNFFC3yYrf3",
  "key4": "5cUsSJxdtKNmaTTGshRrB1NBUGggXJRzroR9iHV7JWGtgqSgfN52Nvs7zDQNajSX3eWeq65AWGqo8at8x3arfxzX",
  "key5": "EfmmQ8GSmeNnPW9XotN19UXkxuxa2crJw1aeP5ey2yZLd5dcGNBPWLdED7abYwTGQDn298rf6ccwqE6uFzSYgoL",
  "key6": "67S1khMPQG7Qahb7NRC6MpjCRqke1eu3Q1XYysqafnr7Y7JJQNRo4VhKhnvUyPxDwE4NZfPhQdcq1QokGaCn1Rnh",
  "key7": "5UKbTX89hbWNLiG1DQQBGm8urk5NvKdY2YbgmavQYU313dR2RzxJAs9Xs1qKWSydp9aMUYNS5dCuzh8oPsmBE8ge",
  "key8": "52nZEPWdqMj3a3TA9AS8VJHQXWA1gCTGdPESQoegdDSwnf85ma2my9hsVX4yYxAtq3mWfP7S6kr7M1fFhJFNWC3n",
  "key9": "2EBN3YZx1yDonUCQS5WCNW5DUy7EE6xd5S4mrXFi2ieiygVLaC87asBMUtvjTgoAt32QbF3vfqNq27HAa3nJBSTa",
  "key10": "mMBpHco6xEZXZBHwsHoSxddkMHKc9mPkDto31QjcqFbMh3KTcTGdez4CpgkNeks9BvVPReAs2qt415qpamj9yKs",
  "key11": "2ap8J55UPqrLjTHmGmvfEkLXEkrrQG8GNN84Fr2yMHBm92LzrX1Tp1CH5LnjHrqUEV7CSx7rHCt77PC1CUmDzFWT",
  "key12": "3QJtujJKJc1icaf16RmAZSAMJrdRfWh1mEc3ywwbnhq9yuWPqT9wdyTARyWtHPwG96LrbNtF1WTnzWo66EUjM3vj",
  "key13": "nvKhJh4CA4Pzp7vtDw9S3vveJi6oc6R1wFeC9R217ihoPkPF7UeiXFtNjHYvcS7m5Sxo9Tz4Rs5Z7z8vG7rsUPU",
  "key14": "6BsBdFLkj8QMHJJwLsWeFux8WBxZiyzYqyDaaQYnJq8hq792GFgc96QYTu8b6Lb8taHr1eLK9F2sessnFbmsoDE",
  "key15": "35BeAbyAuJuXEaS6Kg1H2C2SpKC4nknnHXhruTMaj5XuGP29r5kJhygUUXrQFGK1ZZKfkqmEZ1DimErtdYkdiapb",
  "key16": "4Y7ZNb4SG37phBXsRd3ZxRV1XR2WM8fMjg1sDiL1MBVWS97iBhXqTgJDg8V2N77cU2Cw5SRhGXJTc9gk2vkYoycC",
  "key17": "3DKBfcEYgkpoeztn148oGdqM472fKBqPYZSPAUNZHDNTZ2uock8kUjms7nsmBWGrXhmXQ26Jfty4eZsfpFzv2k1s",
  "key18": "4EqhAnnqRqoRGJCV7mUvxMgGAc3qADgf5Eu4TiprcGs9KC5cYrp837rJfC5rYk9MHVZCbVQZq5q81QYfWynfajXi",
  "key19": "5rUEaReSwNiB5s3thZJyTNPupExoLrQawvCkGkTqtShrAN8pBMoR7ZzpBNKRsDJEQSPV2r2trs491wcnMWd29Ve9",
  "key20": "4fVVgqUM7qGFeumyeAERqefbBFK8qeJDJYztCmoYuVp7xoxUZ3MoXJmGpYMrgd4CebNU9QCjzCVYLu2HrwyuBemd",
  "key21": "BQ4EEAeSwQ9u7WrxzBhLRS1tvSpE8Nc3EqNxDpnWgjSkBsNzffG2YmyfqhiuDvKLj6qWgiXTLZYVPr5FmW2WJq8",
  "key22": "X2ZKzx4QtKynE5yCFUyRdgJ9N7akjjLcbLUioA2dREydGWFs7z9tMj1QPimAW5dvdW5Cn3s7qa2oXMXNgmNLay1",
  "key23": "2uqmDUv9pyfCpKArdKw2RXzUnheieED6heDqYPsMkCdtWm4gWrV79Pw41Tupfj4i1BoSL9FwbjZozCYivof9g9Pv",
  "key24": "2XFHzJmHB3EeVxJzf8GaAwFC56AMA4NjR8fdHnFXL2rS4yKwn7c8mZ9kb9v5SVEbrBmFDzBPstPNhVpEkrFDY9gb",
  "key25": "2F5fdzpkUhFuSe4Uou5qdEg4fs9MGVM4Zgrq1UphSomMew2YHQvo2YikhCxT5C1xsjBdUkQP8PJBggxXNywuMCUn",
  "key26": "2gHhdydnqxC7jdeRfW5rBUTS81fcmP53ftN3a1u6NxVQ3PKFJXs6fK91SqHSJ6LiMaVgUfSvwAcFdDidfghK9ddp",
  "key27": "2zugefQJzc91YZXzJRPZQ8fA2JifYbiKGGDTiPhs8KjLuAsTBN6m8KDcS2BgCTnRXa38pP3XsaQTRC9VnRbHAeLL",
  "key28": "48vwZcdtcNBfz12g7qEA6XVcD6oqYYmMayDnwMdVmWMDbnc23wTj5eEYTNQvtyroVTsjybmRBnkXNnEjZYDrUm8J",
  "key29": "38iaZPr8LBHTBf1oukSmyd6freB8cQfD6MEEm5L9oBc1LzgV62ajzeNzCk8hKQFMVdBcMx42ZKrCggRQ85s1xQv",
  "key30": "4krcbQr4qRcUcchfYLRBfzAS744gzvJQvWmnqXkCviRSaAGiq1ucw8dMBjvbCw3sxFvqkZD48BXdbdaxcPLVkDVy",
  "key31": "4HQ9AE9uPmprm1J6wCftQqMAkmiDC9LgxrtGHgVivRxyCDHqscuwcrcNoKxoXXzsMXTCPCQ5mkqwUnLtWwX6ASG6",
  "key32": "41jRAtfrd9ykpCP5wRPssac6LsqGmbyDmRCFiK386SuSUiEh2NvkKfy8PUUUbo9D5ESLsEQXsyYR6vN1dTafGx2W"
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
