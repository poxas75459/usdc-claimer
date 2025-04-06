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
    "2w6BorwZH9ot1EdsMNJJShtMeXqWeZKTGnjLgGup2poay9QvaFyC8e43xc9L2LbtDv4RsQ7AibJxJ58jL6MEPqN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Zqn4zLoWVQr2i4cvj8tNSBfERP57UJawZUNt7dA335iz4yFZm2srBAvzaTfqEgLigpM6FVom9M7tzDDJXSstsG",
  "key1": "4cPd82dJCdEbKNBV9yqEdfPazGw5Wi4A8rg7QVKuHxyS76fzMpjEcaL13rDPiiwMi2mDFkgcxVDpKcakG4z1b5tC",
  "key2": "NwuqeF1ra9nND8iiXmFriW5YeYgtW2TR3zah2iNTeZrKp6o655q7dCwtfvfXJTdgg7KYJHzhi5eyDwxxSnNPuZn",
  "key3": "2GteTzyw2vcwVBDJPjU7utbqiE7J1tStPfJogaTh3U4BvAMP9fD3YhLQxivwvc5LjstoATpQCkwseY8aZUtdz1Wf",
  "key4": "4q1TzszQFa1DUjrHekMtngAVhLYHtfTNNrQH8PvQeAy17XmgT3oqv4qvDRL8mj5UaA7kUfz8qcbJJSvxoaMzPSpp",
  "key5": "4FUqPLMs2N5AU96pmeE4ST9gJ3DiMQT5YFFm16WnJdbVU6kuDZdDYjq2u4QXbdHyg9juQwWSAqqCXwquzWB19UT5",
  "key6": "tBNHEakXFgCp4HAmjZjgoaMkUZauqx9qat5H22eJLxrUQXGZf6vG9kESFQtpUzuBmBuqCqThAR6EEV5z7qCZVo7",
  "key7": "2egxiMeeRN3HGm4k4KuAJMuUhZDKXiCgQkNMM3ovc6ygj39S5jLqLsVfVX9qQWPfYzyRRA1W8YmWCdjndY9SAm8J",
  "key8": "3NamTLxvHXfVSPRC2wo2eq87me2t1ky7oefwUUkcXVVRNKhNP1hyyHxM2HXorGYJ6GKDo4mv94Kw3A7hzzGWnFvH",
  "key9": "4js2FVwyKNjhXBpfL5h2DFkUYD4iBcWVW1byQdMZqqKrGCkzCgtGetXPvzxbeRactvr6frPPyvpGJgxbDAtF8Ybh",
  "key10": "2QwHWJRGA6v4wSvsextD35jsfrSHMRpCvX2EzDmLjvKF6KWvim8euT54pVq62XnWa72orYo2pyqsZ8GR1L89WL9k",
  "key11": "4DnFs1rawu7MqsYCYkHBZbxZshFWe6AX42agwiHgRH6cEUwnCBC5cTW3TkfoJ62Y68vTQx22ifMduUGJxe48B848",
  "key12": "4SThuDVmH7nsGe1N8xxiA7P622cNPV2M1ccsUVsTvTS8V5AneZ7n8nSa6yf3sM5DGNPjM9x7qPc6sGaVmoTbbTkb",
  "key13": "ewJPhoA619oEcuaDjFuL2m4ynYqE9YGKFrpp5DCTg4xvZuQdGwZWrrUNqXnr9gSge5pbQ5h4tfSCd7CWEqrwhRN",
  "key14": "2QcFgG6ibzDqwDaVuHg7BqxCJverZGrMCx2eSBuUYSZHXU3WPSrYMV4WEUDaNAzLci9xtJMdKADQzgUnTtfrTBMg",
  "key15": "2kRj9nUwSXeUkaPbuYt4prDwoTYunDwFDoTmgwQ5CcdDXukwudyui5mGgZ2EHf3WxGeefn9NKU6M2drBKHNRNACp",
  "key16": "3kG8PbTux1vpCydSgfD6QLYbD4BVBH6iPJWr5qAkob8h37XzR1MAXoRUYvf5DmM16EAk4bWegdUZkem4okmbN4RF",
  "key17": "5PWm2itqRQhrhLK12imN35YyK2D6pL18KU64h49Z19PXGj957g17YpxNAtXge2KW9W31Pj7ySxuUNMpCQXA8haqN",
  "key18": "3P44VjwNxP9qLWVThgw9QxCPTQMPppLbjV6nDNiZyKjmqoX8LVYeNH8mkPzC3N9dVm3KPdWPEtKHXYep9ysPsArQ",
  "key19": "3wnsHSX6oRz198sqiNmfYzKSJHyZ3K5tV73YJrZFLoTFDMFjW82RbqD8WpccMjngimvyakPynLfGviCtUG4VJmdy",
  "key20": "4f4zmVoGqtFBZwAtS2PRoieKLS1vz9seuiMgkwjhS1Sf7uvjcPHwuLwVLfUxgqyNGJPKpEYSURfzxTUWW8pnFp8C",
  "key21": "qEvQM9GvFQqepZsRXXL5eiHnouh1DjEe8cMfGzaPX8LZZ45Y692ZQFsEDUvmHmwixLLp8JKbFWweG5LRWtNRmLz",
  "key22": "3HeTaJt8svtTXQ8DfE26cC9H37WfsSeCcbXt4nh536SLDYzuGWx7iSPewFVFifoB8JwduWKcNE7xd8YGgY1EUT92",
  "key23": "2DXmK39Rwvyay4qz9EoSEsMb5y5mpx4JungMHFeY9Mh6G7nY1bKJdrC2G7gNWMn9TSLpHb96qo8ehpQYJQbkkcAK",
  "key24": "2BsKFLbLDRVhg83caMy2tCTxV6ZYJLefAXStsk62WtaeyVBEERsZKR4aE7JwbbdG3qoktapTXX5wmsV9tBbyfCLf",
  "key25": "5WGr5dZoLdroBttB58UtiahmRCLt5mnTNrtJzvX5wCK3CLKDY1AempdbG4czSptCxAw9yQ2hYKXbMGZEVJN92CZW",
  "key26": "1LepBmpdMsM6Vfb5XTAFHfjKeC7YdaXbiqghbnPSDb1pi7eqmEybPRRyi69PXa18LxNthht2QWDBQTskq5YnhA9",
  "key27": "5TFhfPQscZsmoRYET61uztKpZH6jpCTL7Q1k6tcwZyYjMGaZKwkCsJ8DmZuFXyYXBQrcX5vZAL9q4UD232fqQGBZ",
  "key28": "3EA92GP3x2UdDQ6nZz4BnsqsjNMt3a9mkCbQ7HyWDR6LpUWKgKPjmxaLiUkGPmQDwt27qpVuGQs5QLKVAXHeXuYz",
  "key29": "4sf5WSYif3w9qN7qopcSmJTJzqjRpeQ179YzdgPGyD6ee6279Zneov5qFNsP5BfcDKVXGxJRtMuwNxP73BM1zY9x",
  "key30": "3t3pvaf9dznES2Fk1SVq5VndL385cPXbc94QmFAfoBz8awcquLjp4AjrSEF6hNjLiTsqyeZEuZVc3izcUTSD6MCX",
  "key31": "25KKGaLxb8Vz2ENUZP3kGBieQYvAn1YKuZmVpacE9ZCtyEUC1gt8CPbgCiM49BwFNsFBBs4xjGpBQgmFDsyyEtkN",
  "key32": "5fe1K8UJXjV6uwDCx4nJ89GSq6mKqfmH8TebfJavKcmGRFdGy2Z32MoHH93EBhAotA3ikoC9wcwULw3ExghWV1sx",
  "key33": "5hpitPW74vk67EfRBtmvQcN5zdSbJGrYzKw5D6qWryiBv8zCWD6j7WYMzLe94UhELzw5rh1cpNuMidwtYUUBcZeh",
  "key34": "2q8VUtgUfxyDrYaC9tZ4TYs4NawHRuqFBSwEpZ4xYVmciCSvax4amSCWi4QndBH2uMGaDxoTCUzFrb7D64cj5hZT",
  "key35": "27FjRJVBXS9y1KcKma4j7eTfYpqwPBjhGKrAPPare54pkx7FXDZxDC6jMLNhWGEndHyCT2xbjBcDtRLuP7bDKJvN",
  "key36": "4a5ZuKmTB1f1xN1KgzqMSFe1dmWGzL6pE6bKKHp9nAV9fY5LgC7JzqAErvxz8E8qmCfcE2zQzS3bsiSHgmvpLWTX",
  "key37": "41JhLCzahqMsW9nhd7tYnprhyxA15T8Jbqwaj8iRviSLXh9onAyYSqfDYZ2NxT9W9U98n1FLbG9Fsm4FYeEAivFS",
  "key38": "jtk11C242WrUezZvmEcwkKUQCHgwCE2T8crX8EQxsCJCX39U1iHHUnFyJ5XFPqq3NEQ9FTPcDsD2nQtFEXMDJGY",
  "key39": "5EwGCLTbiqHnFLrVCM614uxkMtVDRyH7H5cb6hKBjGeaT7Gq4GnicdjcbNwwLCjNXpNyLgVm9Ax4U5sxz3PKWMwP",
  "key40": "22hrUgc3WXLAc6YpzCrkLKe7An7tsMBfedt5J3aFb3vZn2LE7B8Fa6otKW4edtD6mi5RHANL1DppVFU8jKHDw8dS",
  "key41": "5CmLnKAGz2rTYMB9MNJuPQULeTttKmACQ7jPJPm98oKdTQKQeTBqdDDiGkbC93usojoFz2BqW22umVCH8vEfjZcH",
  "key42": "319Mzoh4qCny2jVKdbNpmXnofscwkTTFeQton3Rcko59pWBMRVkMSF8XCZAX3vHozWzcbUWMUBNBoJwY4qSXZ2ow",
  "key43": "3xKFtkwsJRrA67ypc5CYZyBMZ9s5cgQuSBfAFPT2zXW4ZPzxAUDXZvFTc1wCdaiii7gk8EZDCKvNGpsoJMD9j8a6",
  "key44": "wWvhF5z13dQBWz3ruro6a8qEbWNpeb5GdCmQkuVr15BEQ4PdjQSsyVkj11Yqd2rGMPyMKAZTY72zjZEuBTvqw1R",
  "key45": "3Ucwb8APn6bwsocGWvSd97JmMw5gTdF3C5RMPZHumWraChnMn8mcNsUrHm2hVJ6Pf2ACDaz2BGo2KZMKMmN8w3ax",
  "key46": "5a4jKp4HvC6t6V6TKhBspqhNUSoshemCCFENpvxB8sDyUnTDwWzRJtzVw7E4nZerCMmxU4j1r5jKkDrctoN9x9QZ",
  "key47": "5D5T8BFSi9u11W4B7yrfsTUrYGUa5GHMVseq9VCFJjfqiYNTQpDUdh65vEJabVM3bNQcecRMv2n9q4hVPALDKJdC"
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
