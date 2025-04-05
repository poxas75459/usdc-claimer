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
    "5CWnEfaiPesqf5VdUC2uKHoYCmvJaSRpV5pkLuvJ72dMHsPBbuofyN2BwZUjzFwd91ZsgFE3pBcVo9BtEiAcqs7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ARtWBwJrq8xZHqyjGwi3hcyQrrb6mjb9RrJHo5VYWWCmQZftq6FbFrjvtgfWjAS5r21bS3dqYSKyfA8LrBdnTG",
  "key1": "57Kex3BC9Q9ZTJMXkmMKucCyjzPB9xopS43HRYe9zvdArxz1PUjWbmrJ8emjoQCdWh945yEuWYxmnj5GwkbgGJ5p",
  "key2": "8H5ddoFiQu5EnQo5LPQVpc4KCih6ow5WoFSsZTKf82Ax4Lpp9fBBnB3qkCQjUWaa8yP8kctWMjJhRmbF3boV9UL",
  "key3": "jYwiu2W32Uiqgv5JG4kLKsiA3SKdwFhhHaERftERJCPCukYzK1tPNwVQxd7NsH6xfU5deU8S1Qxgr1R9FVo9UV6",
  "key4": "2vGNBeaadT1wCNi3ykp2PkEwZ8TzWYJpbDADztPtho6nP79nWKGFf3Urburzv8ENBwFudp4fV2cKP3aXmwPSA2Yk",
  "key5": "Ga6MpUhM6ExspSLYL4CJp9cyCBMiS8HquxUexeobH5JVRdBeBhB1dzpNFq2LM3mSLfCmUYKwBmjvouNLyWYCuJ6",
  "key6": "4CZH55XBnmoLqVrdwYsTuGHFcxeWWa4umAKHFRiBdNgGoq79MVxhztNmfdTFqptfGBVXJ9SBqJtreQEndjz2ibUt",
  "key7": "245dt9CsrMJXBTimJsDVmbB1LmDRa3YLV2cQD4mzM3UAQ3Eky2Hqt7QEa5Q5ar8VZLkvJpDaNm4gD18zM6z49XWK",
  "key8": "f5UHDo5svzZD1C4hVNyuSuroFNN4ftz3sCZgmucAhoPMvWLmwN5warEjFkQ4oMiPwa9us6dkPCizi9pFVEn3eTm",
  "key9": "43NcvyfPmBTGXX1zmFr91286N8A5dTJeCdfx9kpcbafLkV4jVDgzcN67mrLFZKFPXqdH2zACJZHqXNLehLR8eBHr",
  "key10": "5p5Wzdb7XBPsF8oJnvrNiBxtehqahaaYguBXFuzMLieCcctUm5W9Kszvac4sVeUC5TtXCT6bV7T4EAbXd9F8fP3U",
  "key11": "48JhJkEL3wwXpzCPEK59PPzC1FhLdue89m6fD5CKqvrD4pHtaU59HgUB4G5FY1So322baSLKsZTUXFVdDBLHjn5Z",
  "key12": "2XM83R1yZzQSvPtAXEedFfFGUpbJv3ECGfceRVfgBnXqZobp9JL9xJhkpL3BMFuoXyUBJZTCWrefXULtTa8gLEk4",
  "key13": "3MnNK95Sr6x2WuXNUT4xv5V5pdpMPMBG3b6LXDovs4DRgPgHHCSTC3QgcFiN3iKmcyFsTgxxxnii5GyoFKPKCMd4",
  "key14": "2SktPXBfQkmMkZgdMv5YimsM7CnvnMwTop19QGYDofNBMmtoGjnTwawhQfXu4q4JVjng9cuaYYvZxQioStWj7VQd",
  "key15": "uNK8zTBYP9WoN5yvkjr2GzMgvzjKjemUjnjWrqnMrA5C2P7RHWH6U4wkgNAbybeFCyDE9W3cffUUe3ctssDeyRv",
  "key16": "3HLz8CNFgyU4HxCmbE8hb4fyKszeihkyXPnBcq2ieyMXqn75xe7sXD7r593daWGDzzit1FCQArrEFEtW7M694iET",
  "key17": "Jy5Gxfp7pEBP7fxzATFntMSGDc8p3RLpnw5TQkZNdVjB6ZYJXqGFv5q2obSHgzcjYgGtFVtHtf2iPdsDqteDvdU",
  "key18": "3UL4jCiVjJCZxfih5KjNP8RYTwU3CW2b62xxT4AALBatpQ6fySmgjmgYairYC3aYkYu5bNrFgprzbeVn7pwETbGJ",
  "key19": "3NxLt238tHa967A8mroHJMrTAegfxwoPbj6Sk98Q565H6AeQnFmKdaJ3cAsGZaq6zyusicVvAyz6dk926bE1URXn",
  "key20": "3qPwNULXC58BhUDndAsYt9kxmxuAJkJuBbytifmzMaPeiSZXsYPrjtEddvzx3BeuqXkvSY8DgGSztXHRkWdpXudk",
  "key21": "3CCFNEZxe1RL46Le7c5LvX1ChXu47s8T72C2DweRZZdSRQJRyV1toyhqRrKRaE7q45D5JX8cESAoRernvJJ81Nmj",
  "key22": "4BnVMzH4JaXYgdEDtMEMoi8ugC9Jbztp8dBWqjF2C2B7tuR8jBp3TNGS2WcngPEk4BH3EwgFRrzgtRKgyM489Dvd",
  "key23": "3Whib4VyZR2S5JHg8kZwGjmGBNmr4bwGwuPbVTppbY5yYYTEBbdBLgMCzScPf4SvuLh8cbk5JVPFAp7XJctoPPqu",
  "key24": "55vUPWXfSFezToBvx3xareNiaJKEfKoxheqQBQVozwrmQS4Jm86LQjLErg8yxymj1fuxTDKY4B6tvjXs4eUKLTWP",
  "key25": "2GeuMg1gERob765UTAAxff3ptG2YjiBDEt1RGKEkRo9k6SuGJiJ7c73xbYxnjMCZZp8dfom1kfVKmYy2pjeaBd7R",
  "key26": "2kCzAFQBqPKs2Tt42QF5RidyTVNGvUM3uG7vDa2ZanuyDntpdyRYMifcJwSPph6niNGzjdHSkhy8q3w41xRqVjcP",
  "key27": "46J3F6E18TdXyouawNxxMeukQustVWVZ5cjNSrJwfAexhfs47Z2wL3ziLZpcW5MKqmLZYY9yCUiRUu3g72M6NZsh",
  "key28": "4X87F6iy7rL74pREsxxYoyt6341rUSSxZYQV6Dv8x9jvruyFRaTZDnz372bwriaKCJNmyaAKi94zxmtvg1hRLhrD",
  "key29": "5G1yF6Cz8ZaKAfPtKVsbx3FJMAZo4UcGHBjEsa9WiqkZqHTai6popywuX2fsV2Qeaaqh82dwKuipnnqfMzqqtJLe",
  "key30": "2qauSbihRHAUgF3m6fkq3KfZ2hjwNdXLRdqQat6414uhwu38RYzzq48EYpUmtM7E3bS3jYbeafFf4gmTsWGEypxV",
  "key31": "KKvXSiu1UFUtoFoTiXKTu91qxrqubXfRCuUTTbAC5UFrLV45bhqUSgNee1hFzosVWKYMD8amtN3bBFwgA2VefzK"
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
