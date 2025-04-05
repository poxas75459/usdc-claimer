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
    "5dw94AmeRiQiQNEwEsaoJxKdZdx3BaDwihPjYv3KF7HqJu7j9muTTSofMq3ccTUCb6Ct8bM6rL9nZFtU4dG3YR8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zQSAHRAem1C9uCBrqUPhaTEbxG78Rio21xW5GjBDLw3L9z5Tr98ctXVvrcTsud8spMxNX7cxVpj4EoXZWMipPkk",
  "key1": "5jdSsn3jswUN7m21NfWtyL21mFfVZpghVjfJccCc4i8ANfTGjKBGcBSsJo8s5hemi35mYb999KyL11YQq1NZvrZ9",
  "key2": "2NTkfxuREkiUfCe6v2rUzUS5Ak1Be8dPsE5HAvPk3LhptBiXR86Aun819eoow7uxZ273F4m1scLdvVvuLo9R5Kcv",
  "key3": "2xfTrSRu8rGS9zDAizoBT4feQFQfzTUzu2Lp9PPVYkYdXmLfRKwwiR5Utu9ZE1gb9DGvgkxnwheyMxg5LYvivS8P",
  "key4": "646XLkbKjoQxpRY9Qy9TrgV137Spjbekf5vs8wpQtSeGH8uuvXhSzLP16jtnxfHzHjaJR6pRxRLobfvDQZBjtjn",
  "key5": "2PZrVwd11SPnxtqt4cMEH26tpaM5TmGaG91nc7odehip2gidf9eJByAhczBkXH3epUWrKzRSS2H7MgvJHm4mtURi",
  "key6": "46sjVobWPY3sGAy7nggD5SGqn1som2V5aqBK4aad9msQzi2eb8tMsBh6yZ7QGRbfD4mrHYhi5KgaVdPLKbY4y4J9",
  "key7": "iCJDh4Ugn4WdryhgMiNu7AKMM13TuSGxn1n56LjahEeXzyTjphZWJZFpN9EXGfqNujNAesvR3wfPmnmSDhc1VmZ",
  "key8": "5AwTdz1HsbS2tiDhzxjxc8y721iZixe8NruMMtXARvFJkiu7RRgox4ad7a8BLfFuu4stHdS4YhiWLFs17uZ1qwut",
  "key9": "e62kNxXtCpFycEskNbTougJpq46ubKgDyHb2GeAQwVjxgzFPKcoYwcwJkBGooe9HwBzonpPBpaT1fS9cVUBfeeL",
  "key10": "2t7piV6M1fVHAsAjF6muhBtHSvpUM8H3DMi1AUy5UT7rTNBRZhmzXoFfMdfazuv8PVKCVGqBzAjqFCHVAyF3Vx29",
  "key11": "4eKGSfYtCY9by4CUyR63QPhJwtsbUSWNvqmBUE6k9RaynBBfkx42SCu8zojUmRaLLNuR3edmpmmozV7qSSgcfiA4",
  "key12": "3QLfPEiwxUUgL6XDohJaaWghsvdbMZAZD65FnkA9W7jyC1nKxAmnwQhaZ2UQwPRbmmiYm7KjNp418atvTNMabvEb",
  "key13": "3k27WfHmqaZU5QHznhqk96GesNSaEs7oAxt8XcaMXsNSPBFf6eDrAFhANsQ3DRhBskNXAxxyusFLc2ahtnJTE74m",
  "key14": "dgJpJus7ppsnaiMssUncy859NcfZNxzDkUpR7oemNvdUAs3iPaQ2sYEdNm85RUQSwngtRicMUzniuEJdEnK119A",
  "key15": "2KwzctZqEW8snRdtpkRT8AcN6TJxjbP8une8odGEPJ5jZ9xUuxWLX7ERu8Bk8Ad58nxtVTTzGP7GWBtWZBdVWDxw",
  "key16": "2mY2xwxbEhXwdcSpavvqTStsdBX7i8pnf4K92UgDGheTjVYNx4QPLQrNMy5BQubcwLgGtcif8G2DrbVz9dzzEeE9",
  "key17": "56M7UCbBjsYxZRJY2dbEV6AhX4fiHXgw9GHjaLDX8HcwGS9YxYTQbgowWyAQ2jLaF7ZKCp5g5QMx95G38eerPH93",
  "key18": "5ceNTR8VhnXpEEW6iU8Y6o86TyyN6BcniQNcUW9n1AgHvKd6gEwm9MxwAbkvXY4mRyYc4oe2aCEDTPxzsUEpWrjZ",
  "key19": "2RFmYymB3pFNzit9zwoW44PGPtRGkfaETUMUVEtjdFr4PVUX8nEqRWfFt3KszENMNZLs3oRAVoJEejysNZuQhFtV",
  "key20": "4ezzDaSg4mMhFfMZN4gDDi8vAwckTVStCCrmSTYybEXt5uWNpf81pbcJi9LRJRnRmNLxwTBS5QDyVo6RA6kaNLvT",
  "key21": "5h1s8aqoy7ZV5CDS5Qiy5qdrGao7eyjUv2UZJyPT8FNYstxk5PHq2CLqbE2cQoFusVJ7s3sRCuL59hXP7q1G3cCE",
  "key22": "4ohCt1swUgomMFawFWPPDj1turZeuCALLwR4GQqf19VVbqJ672BJnt9BQ7CNnvRcCHf7yVYVnvgSXy2ohwDeLmWP",
  "key23": "5QqGasxE5Dc2G1H4Ld1KC67VNc72CrHRzQXCXZcFSCVK2bdjVFu7X5D8A3ARqJwzkH4NgjBB68rMQRNhVvhcFYuw",
  "key24": "3KTPy8ZbHkZ5C89Vr1c5umUzR6jdVApEbzkDtvbUNvPCNRAxHHovSpCoF1srRdGvNQVZRS52ir1vg51mKb8uYgTK",
  "key25": "2ZbqjeW5wrfamo3DzszTjCQ4QUVmjrc8g3yU6AbFj5esWjZZKk8aRuMd9cHuuVqhMzFj4A49mgWSbY9cjRbKQPDm",
  "key26": "2mpCeLogQ8GxQyytByEYr339DGeM9dvFdKWHwQh5K7rxs9ThWizt5Swpu7KahhYpkWS4ygZiDkMa4V1ZMVdTKVER",
  "key27": "2TGmJy5Qjnkq6P65KKEyoqd2hdYTmCCLJWYN75ZYKCProGyrRqsbzS6s5Qn6dqEKUeAnLXmv7aUYRH16S6Xcc5c6",
  "key28": "4Hdmp3bLez3P5z2zHM1jKXR52tUfGMpDJhkw9bihPjCP14jR1vgS8r9fGeYwfaqzWeqUyEVj6AuV7dumZ5L1EryT",
  "key29": "4LwJGVJ3G7PQMtR8o8Ljqzo8ns15ktVd7zmeD6WkusVb7M6scVENSS2EwBWVZ6qQsxtQysDtkmkxr4hFcKfDkSew",
  "key30": "3KA6xVm6Ny6STqjSZVwTPJNszhWZfYjuJULh7uwGhFdpTRUXqDfQmPmMTC28feroPSRa6JvHcKf8vBMoGNxAfwov",
  "key31": "PjEsZr9PAx66Q1vbxAqXhFYAjKwMmzatQ88v3h8feF3J1eZCGygSEQTAtEuVNKeb4z4nceJQVDRbBkZUyP4JVQq",
  "key32": "YmLT5yj6mHR597GcQMq6AYnzmrJMBmwByh9bdPEzqu4F2jgtryhSEKUNf8byHgVHVMuJJYoc4Je6wTCrhvztrGL",
  "key33": "vtGq9x4NG3MLiTwwBx3UAUMCWf2Tzpu5BTu9qxxM1GMURcZQKzonFdG2bAU3BwstZXzUAkCJoTdpjWJ9Dz2nJf2",
  "key34": "2Bsp7Lnxepc4tSVqiZUMN9THibWdzfBevXrSowW8FKWC8esEes8qHBvg7itweYia6TtykazzEW2bc5tfT9yYBcMW",
  "key35": "55fh7pCbgcQfdc1RA8bAMMar7Cv3Kop47jdwLPg7vpv534Qv7N1YfgJa5avVgcoHtBCqa3vz4ChH4h55QWyfU3VM",
  "key36": "5FckLEsMLDKAPX1vmkAgEWWgqjTumtSWdWqzE7LkK7Eps8YDhx4Xuh59XxEmRidXAS2T1JQHBpECqjvWZHPYwbtJ",
  "key37": "4fbLrnv7j6Q7WUrzwPFEehFiWp5HPoFFDyqgo7CUQsHw9Wpg4gzbzNbvEXuyX3Xdpf7D18UyWYvAVesYmbzE34fa",
  "key38": "3J1aGsyMYHz4F2aZqNLGmH2vfpR7enH6eGFtoqsmQBBXHsi4jdFqoJnV7t3TrTo1qs3ysJGNjHrm6NMJUXP8gypX",
  "key39": "WNjY9GVNhNxUTtEHFXvLSRbehHXtM1aptJ41MKNZYT5hYeKT4kZzoNUHyAL5xatfKa32ii7Re3yK9aCKzoQuxPN"
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
