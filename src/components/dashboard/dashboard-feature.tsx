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
    "5yJtjUXWxwitC1RZjBSx7tm3LE5MNanGW2Rvh5JcC99y4JNCNgspB7J4ZkXdrF8DyJeX4FhDnnb28bTDZkitEGuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LhCNEVM6EyFTSZrR24KnnThBcjFgUDYMgbiWBUU5Gmj6Yx3fxRv6uSB9XsCbHLuCnC33PS2Sbycukfk9CzvV5He",
  "key1": "2PWxLw1iRvuNBeE65gzrRjQrFK47JgDaHubhYCNyFkm35bnih6g7zj2rgnv2Pe1LXTKsGufJ2yFSpADd4nYfnsK6",
  "key2": "21LJgXbs6pNrAVM3AZgFxghHHyHYzzyXDiZVHJWsvMoYpbvCpFrusYpsKwFAFjcwf2Lt12dQJcKp6Cmz3WTtfpwr",
  "key3": "2NuW8MqkCvi67pQ7wejS3gAFcEM9MgQbdmo4GrYSH86Kfg7MLq7LnVVKdy4NeCtJCqGX7exBL4vAyamAKpCA4fQB",
  "key4": "yKja55NjQvQ6n2PQGwUQUVSuQXQ745jHyn97wVxxUo8JCGsinhtQ68kfybapT8sb13oHqntATGnxQNNRdAzdpXS",
  "key5": "2r8tfM4naGsYdJhjoCZjbsJPMxmfHvCimpD4FgZGHFfKyc1UFEeJyf24gb7PkFeBGvQzAVwh53YCsK5t1qTyQe75",
  "key6": "RpoW9h4fhNzAMi8uUiHGfHqRfYwSxuPNwYC6EW3U6nLH8kGJmrk7r9QmCTdHZdQ8SK7QNzkiKgYo3XfSwzeFkZV",
  "key7": "2X4KLDBvuLzkCusP1AMKfEmKhbim3S6htyD69pZzEkCtV6Xum93J5bNC8Qcaj2LcaaN9YxQzaH3J78cunuokyToP",
  "key8": "xBSvRexV4TrZ3sLmGGhXTwvhan2e4aMZsSjNHb6SVENb3QFUVTxrygkr4LYGg5RtcSSMonupxDvmrMrVVprBLH4",
  "key9": "4cMAaC26pe9GoKBo6VeMsoXDAZXNv9bAeZ2Y3wmKzi36FMuVCsQxczYBDhdYpH6XWMzL78zkVCUTaWfmbUbfpYhC",
  "key10": "4qpR9qjMH2hczYYVq6gfAsWcEUiabg3PusN2Gfh3wVbqTiUPA7S1W1rqTy4hMcRGB7XzLNg1pvnfirzDva3eXGAf",
  "key11": "4dbY3AMNj1Korm4aVy2txAC3cT6wpYYFuHuzRhc6WVphLbhFfAXoH95xy1tzScoJ37oDNpyfeYsMQM3jtAmPq2fs",
  "key12": "c5bgK2v8vg5ysV15kfsAtmDGHtFRwn8N9CjcSRyuXSeqc9YMPr9hzDvmB5yo5gqo8CLk5aBBvZL5cemYwtufjNx",
  "key13": "4Cr2zF9xd3yNea2tsggks82rRbDJoFopCgzwUxeAXhbpNRAUQAHvQftWeFeunayATRszVvEUMMTSW5a4b4GCmWe3",
  "key14": "33HS11N6pe1HFAbLAZXwWJRAVn1A65Q8VE48RNML6M6T4F2DGcKMVnNBdSR9XxyHsfdymceaP4zuSf8NTu9SYRXy",
  "key15": "NScYQLsL3dwd5aLmbYVEFpSkCUktG3b1HGBvDX6zS868VCcgVaNTffFuwLhFNoVAeSioNyxvjjoxBt4jiZ1rNwT",
  "key16": "2syhwgwFEBu71Z933K3FfRGxAFfQayLW8RsfGy3ppXBTWN3jZskDdqtb3e3Xfbr2Cj9ZQXrtDR5756yLt46AMqzr",
  "key17": "5iT1viLQ38YWuT5357VYDeMK8x6235HSqKEXJKjf4ey2t1BHv9YSB8gjbNFXZUqdVwL7fMBRBuo7oHR9JE1NtE6P",
  "key18": "5pTCipdQc6mmDVKZSYSPwmUBGvW4U6MfRYQKWadoNGAjtDAMnFrfHTi5q2HPebaeKpKEjU5UyLsNwoDxR7nAm8k8",
  "key19": "uah4kMLNcBeTKBi6N6pMv3GAF95zr8K6BLU5PRKyttXKSCCtJh6VrLhrY8G5qrNkE3m9hQ77acnavpek3KoSmex",
  "key20": "qdB5xwhjxDzhXKz6zqaftPb2Fa1P4Fv3mPM2ryB62NdDxXDRR5npaZLJ4P4vNXrqFAVv4Mq1RThHT46kiV1xXo1",
  "key21": "Ki1KD7oBphmKR6mnMd26M462c8v2BTpr1Sqn2XtDnDuHKTt32DE5GNmPZrxxtRvFTaKBRRhftXnUzpHj5GRGAyA",
  "key22": "3HiEtfZSyCa12hznE5n5VNUB7tewefWJS2Je6CfDFuygJTZu4EPo1j612FYpfJLcG3dNiG2vta3pTRSZnY1iCvmM",
  "key23": "21onrGMaQ3gGp9tKQ7ZaBgj56AeG84dC8DzxCigbFGbxHgD4LrKnPNsjY7KASgWjU7nGYJQTaNTssNyiPdNbSqWM",
  "key24": "5xvJE5dsEznm9jAQfdHRRED4VTyAJ4knvZRKFAFAMfsvCGR75CeH8JZMUE7ZB36sftyQb43ESwm5LG5xqeBPVTnh",
  "key25": "3zBTeU8bdKrqP8L8DUYdWtDHyNUxzjSUB2yMoj8Hb2dQBp9M51ANfckwfErXa9Cs4B135983bM8nRqmqdWZSkBdR",
  "key26": "5EX33FWk7xS2zJAtWtkvhgsAjQCQu2GoPw7vRdmZzccUVKpNiiHtUpP1J2B5MdR29Bg6nLvvA4bqVTKszBES4JXg",
  "key27": "3hFLZenUEnQDmz3hqBvLZpnuvGgPKtjVDPJiok3mmzzBh4qaN48AmuRfjyckrk6ii7mPw1bhQS6k3unP6AcMHDmm",
  "key28": "4K4it3m8xN3ecDSSa2t2RaMUA8wa34ChFm7VoPKD2d6HLdh9jAzkGmZAFwdnNt8o2J6pApSMHb4y74ryRQV4QELR",
  "key29": "2jC5anhnQZsX9EVuhk6owii1Ebfg6Q2UTCZXGtkCmVyhp5bcourZ28juWB9HNxkFDLsYo3cKnL13p5qaGC59qtLZ",
  "key30": "2aBneHSYNqECxMurAtiinFtD43qWoiasEqWLJQn2a765VgLHqbbQstXtphwvpZhGfZ5Jx75VQVG4ZJMXj21nDerc",
  "key31": "5PF63U2R2DKBQfeRwCaCLWdtV8myXbDVDHYNmnSps2QYfU6v31NVtRCe4C6RMLpez7zE7jLFLnJB3DXQhydDKaFv",
  "key32": "4T92khJdyXjqQ1LZdmbULDXzfWnde2NGNk9A9seT1qmrpL4gwjxVT6QZrSenR7wz2rWSeL6svZEka354Msd8fWVL"
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
