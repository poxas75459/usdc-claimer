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
    "44iFDHXaXwFfdC48zm2VkbNZJvZsTjYRsSzhprt7gwJMnRRsDm6ZGBDckmYaxgi3hpLh2KqvqCJkvVEFNFe9T4nK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TdEGKnjbbwbicbRH8FZA1z7kfVD3VbrLUQibRf28sNVvQSznqiuWfZKUpcM9Weasuo28vMhEM8qCE8LUEfCZtNM",
  "key1": "RMTUQLaNs6enop2QojCaSWecj4uBirBc164QZWSA5b9HLRCiXEVwFgHjVadCRpTLzGL5hheQU86ZUdMZzGPqZc9",
  "key2": "2B4S9vh8KAhCwYyhAn5N8PS7c7qYGkF1wfv7AxT9WXxjtYKbe3oaavhFgMs6e8hn6zjVjAsREPwWJhWaQDw4MGHc",
  "key3": "4CJHRATHV7W6ErpGnqq4fTmF6GG3ubv1htLF3xUyRoWHGwLq8wVAn82Rua3wUbAckhMy9Pkzti9cbt4GaEeDJRo7",
  "key4": "5x3DJskk8LGbfMWFsEoe3PnAd1wGpgY7QCZ4XeaVzcmokZZ5K5TnceDQeT9oLNN2FWtifa56AW5BK2LN6VBHCWj5",
  "key5": "3mz9cBD5kBUSVfSC5EULWkJRHCf6rHto6Nd3MbkSuw8dpZSPz7vd1vLEqMkaTVkx94UUqpXHJCKs14L2JD6QNYpa",
  "key6": "3vxJMpRtxLYhwCKp7XrhyqhDakrNsi1wwesY2FghsGYD3Z4nKfsYLJ23jK49jJXDFHc2naCLks1Mbs1nPcTZRVfr",
  "key7": "5RGmk27bCat6DLzGJYm5H7Kstt6UN6VD1eMj7PbJXYxcAuThZ6ZvwEwkAGXKoEQsjXQm1BmFLn6Kz5DmXKTmR9xL",
  "key8": "5RCb57wJompiKeu4rvtMh39BP9SNxAdu4u6oEvpvfcV97GBsEjrcx3vhtgL346HrTzgyzc9Km5bTSpHvmHAMC6sf",
  "key9": "3vfDGVTH3JVsTEtmabK2Dd6SERnf4Wiz89T2B7M8xYipVn87XdK9jPwcnQ6H91rg7ejvPui2pBtVmExzUFWFJjyT",
  "key10": "3S4zyefAjh6d5e2iSgBzQW6hWE5dVWAgGtpXawM9i3fbnhCMXmHKABqPSR1oFhU8uxCoj2VArRZnT247v8MJ5jxE",
  "key11": "H1ofiu9UqmdLzEorj3vC7rSVmL5RCSaqg6NJnfiEinT55Nv85cm3NjZrA3cBjVCnAz36zuLes56tDEzU466Rk3J",
  "key12": "H8GQP6zjRQLkHs19G28dswj1UGRGBC7x9T3n1d1CasB5kH5aoUxV86bbNWqtVPEzM1JpTA9UzKVJd1662Nn1nC2",
  "key13": "28CnbWcNFnPPND842MRZJB6Y1FkHzHqEwa9QEszxLT4bypwDX7ER9UWgayPiMFzjWQT7DGG7eJE6sqHKdkVtHHSP",
  "key14": "3bug5ThJCzCHPKZUDEhBMUoufX8DsedNgy3CJVjcKdS2A3B9BQcbSMH7Z9KwaLQjwnUmDu4uPgyD9fZQSN9rzZB5",
  "key15": "5bG1d2LX3KBrssvfxdXSqXkVKPg16siX29dVgYivUW64GiQp1exnK31DsjmiJf9gpYaHfKDGoTgwjDH8BSuzMY8q",
  "key16": "31tkCCWE3zvBPZQq9SogPVstguejR1N9Fc5iyiEXFj7smAsuBNhm8E1GzA7NnyRpyzWh7pcsFDFgQLAg6Dv8q67e",
  "key17": "2vuZAqys26XwZhovrBSBzPnsHpyeQ38ihkhXuEwtgww6gN6P8UB47d27ZhmniJGXnhfhqBZcxnpB8MYwmWMXen3r",
  "key18": "4V6gsGDFoqUrqRsQwyRFYphMnhFfCU8CdmC1PSEuQmiDfvZT95xki57qx5GYGoNotdq3t6PMKAFsrbEqhtBsk5qk",
  "key19": "3VzMFKKsrA9G3Tm5Jfg19bFMqxN6DrM47ujftNL8GvrKyGnAARVCmTjApyMHsTjsURmjDynqPvjs5kxeEayRmVdn",
  "key20": "65BEoWSMaPn72uCSapQb3bGEPkgQ5LV51BKi5Wk7ZFU9yPEvBNJZSFZybs7gDKoQ1WjzkzMWyg9V3AZiNSfNaiUS",
  "key21": "2fjBNzsnBkCZJzcGMmV33fMwvxnr1vpS9H34xFn9XVjuMhuBGhGZMGXTHfXrAdoTGMBfwdZSUVbxJ6YNg3zoqY8T",
  "key22": "3TSLPrte4yMbucTC7sEXmkHmguZEVXsziujDrJyry2iDzS8mP6rAKwS6ZWXzb5REATZLo6U8RDssVXVz5Sf9kCJ",
  "key23": "3C9UaGcuGyAWd5FmKTZLxcnSyRqfDbZXzTsoBxQn1PYQ6Tz9ZUkTiSVqjhEH6388bEMAet8EdZYVT7bvu3k2ZCn",
  "key24": "5aVhc6wpj2J5VbBJrW5fr3ZfMdWKknsrPeVxgAtTfqzdDGtFU2b4gEqgkFyEAbUY2eDPhd5wYd2wNwrML1iHg2pK",
  "key25": "8YuRf31Xxm5LTRXvMT2Lbu8f58XnoTKgmYFT4mswdW2qT4ZNhXxdw6Mi8hUefcu1QMgemxSNzWVobgvnzJR2vDR",
  "key26": "2JV1Ek1ehtcMvADB5AZXZiAvrKWbYkrtmSndRTtJtR3YCrPcp5KFezPTT5phbZ65vYF3QHqGeV6pYjcCQi9pufi7",
  "key27": "VmP5EZzEX8etDLVKxCueAMQagEcWAC1ZZMHxtHtype51bJUXNdtmFt3Yum7mcQWbgp2JxQhRMQQ5o3wQZ336LgE",
  "key28": "Gjp5RLp6KmtN1FynsiYH4Trib7iApd6Kc4gHWtqfuAK9KGTtXNSbruVRQZwukQpxYA8AC8hUUdrwYWcfoVDg13T",
  "key29": "46JXc4nw2fGFNzMgcV5dSZP1789KTLmdVLBmRmxHtcvA9GWsVG8Q98vst6Rzy3MgHdMHrM4ZNBeQekjwMPRx7HER",
  "key30": "4vU21R778moT3xZtDKX7SjSMxPdKYJUsqgqZ8zZArxD7FytoUndoobrwXXrk5uJhazZFNNVatVfrnv1K9LM6qNjM",
  "key31": "5Ay53WLHG8nHeZQ4aPqD3Zud3cWQJCsEtTfLNuAtMVyFXuRU2Rah9ucn4xd62TPq8zcAeJhoXmdGxZY9tFwfJEPR",
  "key32": "3mYwnP5LfenK3rs55k8BB4qqoNE7xrbbZA3hQoCJCgdTgdL4pJgRa7MoNN9kj5FJ7MVzAv4SoFjp8y3apfu39E3D",
  "key33": "44wctsMsu47K96EhPhTpbBBwP8sAZjoSag44oEcjNCzmxfLYm9sPaN15uVMjmp4CmCsQ4baSV2xWZdDVtYqwRSz7",
  "key34": "4seAUebNMZtcp6yFxQ4a9KEMx1cwixMRGznXpnnTJt4Z1RyUC7RkQ59TCmUa3jzxzapEtuNM5b72zyQHX3z7p1CA",
  "key35": "8dkkwequnWWCLUcLG3wMW3TBPEQ3HGEcFA3EmcfdhoHAKqk6iLWwXdRZ6vHcMtVqozwc4MDuTjHPejHzhiaH2QF",
  "key36": "qeLT65Rq6EbQqHMA9wWGSvNXSzu58Pb5g47pewsSEtTQRu7MiCeCTzggNSwz5L5tU8LwaDhENHeDVY9595r632w",
  "key37": "3gePDKbW98CQBLb9oVEF8tFDcABJi9mnFrLTvqtJRtWscHJ5tq87X47tDpxmQCZDcndnRRQuVkvmyUjgKUQbzfxM",
  "key38": "4Fi9Yub7DrKFJySD9qfQHyizvCa1HoKSWfYSDUCUUcTsNukJ2D9hCoBCALWr4YHYnbAf9zzFZMsMe5nyrkM1fDS5",
  "key39": "5P6b7PUvW1yugGBRHcSpdDWGR347UM4d7bX41Wn2RewVb519P7HuQat9R93pMKuJb2nesXoDu1YN1tWXNiN4qTwd",
  "key40": "4fr9U28fZc48Wz6agU3vuhN8BTzFVUi3WkxQEKxdSNkoqDiUyvj4KQoBTmjiexP7gQ85okVTDLXoKTmZKYdWczt5",
  "key41": "5d8bTUYaGhrAKxAygkp8GqyEn7LiH3FSkQe8uVes23xkfqHbrDJigAjntjYJ63FFmXxQkmYa3nwWKoCbN3zdq1FY",
  "key42": "3gdYV5QEWosQAvqQzwet5YY54ojtqgSpifwEuKCGysiXj1Fry9jz9QwwWaQ7VCZSwaejvsY7odSSNYffCfwzSJM7",
  "key43": "2b3DvhUFLuLuHuG9gFAAVUHavcfBPYgzSAJZ12m39VPXDN1PJ8pUaen1LeUSLMbJ8rC7faxHc75nFnEDxu36dqQ7"
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
