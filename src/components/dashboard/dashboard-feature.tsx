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
    "84SbFo4wmzhybERqSqmtxEdWQ38WVkZo3n7yUVDRBtHhwrgUJAzJLaM8bUngEqWL4ftMvpUV8r8XAmAYRUWsddj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47TT9kDtPQxs5nxhAohMkau9tnUBX7cptvcPes4RBQ2o1WgahoH9gf5GB9Xd8oN4Kodp6qocp9sA3VJDUAJzvUpY",
  "key1": "23atYbHM2awgFcx6GSmZBG9bjEs3jqXjibqcqQUUTSSaTig5y8X4B9maoKpcz8iYzMUT3fVnt2Uo3SH7rZHJPnX2",
  "key2": "uaSHqsV6Cn9FqXJTBtyCfFJDnnc3Lsmr7HHWzLodoWbJoeZioBZ5x68tvmb7Z4YbSkRa9LyPnURax4Xb1eCV2iM",
  "key3": "5Ea27m1TrBoiGuB9ceatwfF2SqyroSRRFwgcEe4KHWWkuK5S8aT17VjwD8QtyMxTdMzY59KTeqCxEF4iQW68LVhm",
  "key4": "xBuAH3hrG2sKSjEmv5ubEm23kZYfa8trvibjJA76ZQ5e9rxnQGM3xu3jVTmC1WEtdVJKnTuVX9UKyUN84HWRkpa",
  "key5": "9Yr6f6T7PjrkpNj2YHEirjubfY7Hjrnj7YpBviNAGV5pZ3ZML1HG9TUpz3BPRMxuHrQkmhuKFLJKHYEanHjebaH",
  "key6": "4cGNrrvSh2GCBMiE8grZiQFywvw6aLY9bCLfyBhyPrRUzdECGaEHR621pCPQTdQL6BVcect42BDvAivWiN4Vibt3",
  "key7": "3tuAxmX77jzvRnT1C7HtuqzJ3LGWW5bwaq7CJcSP64YhVm4Fjcqdx5NQtNfSYqmKYPU4MaEf8SUrzvjkj1FiWFFo",
  "key8": "349ApU7U8hY3YLjCSehuhwukF8TjHaY8YUEfGbCMqeoBghJcZ3ktMMse2PABpzYsZAPimxgMKdvwC4ftenDNhMqy",
  "key9": "3XpVBDny9rtTyNyV1hbh5kJRwWq4aKkefpqmJL1xtUNT3Qx1GbREP6joUXfwdXmvt7zk6f4XD7FvDwe7fLzUstd7",
  "key10": "2PrWKk8751arbV29YJuA1L9j6b9refpBDYFtkpzZfwcjSZ1ygw3ZFXyDRQmNC6ah2uvaAnh5fkk2KTTPKWAmorYP",
  "key11": "4qmZcA4nM2EREjx4fuVtAxmdQfoeeCTYmXmYtPM7DTcpzjzCsB5euGRrJSTXgR4dCZpr1pBDTCrtPnmQ82RrSz6r",
  "key12": "Q65BtykfHHvz6apUaMhudNYsAkhDt9tQ2bxvFUEsGCq99dWv5xT52VuhtEBvKRZ9ZiRG9UXnyP5VzuDaHNBSwRG",
  "key13": "4QU7w8Ai6fqMy1Y5LirY9RVKP6S5uywrZx4dqrNq93xYS4V72T8wzs2tHSrc5rP5s6KJ3n3RNj9j5U2nYhQRz7eH",
  "key14": "3Tn3zWcWVN6NUfLPHf1TLHUTK5rpodVHtWAnsfivYAbkBoMau1btwB2QszV1aAW3F1TXSMvgv5wV2moijXsdHryQ",
  "key15": "5fWVgYAY33ugqR2g81NB1FiqeHry9JAKu3xQYZHMDsASWbtQEAm6ZCZAXCR1LjnR5VXtfQ7bC2ZE82cvy9A4KqTQ",
  "key16": "61XtqNq6mFnLuXEJoEnpXjbjn2vTZHw1D8o7QN3W3EkvB7CGnmovBYyVoorFtA3Mzd5ifugWXpGaX2EycfRRvPsb",
  "key17": "4psF1Lz6Z7Sjq4vBEQdR3PD5n2EYVkT6mNMeB4CbZz2MmPVdDUVF66wuNLAYGqc8JBTb2i8mHJx34qAgcPrrc7kS",
  "key18": "26fE5Q8Y78etofRcxgsbn7zTnBneHGid2uEHFntMbgbKwkeQD1KtMBcUENpPqEhy1n2mj1zpNiATz8iSt7XvMNaG",
  "key19": "2yikj8JjKadB7TRShibzKXhCLGEDy32j3sjE9cXnZcTzeMcTKr2T1zWcvdRDcPsDGgQBmwN97qNuTyhxD9cqUh9x",
  "key20": "4TbPXTt4PWuEowTN94EmNC934pEccE2q8Rh3cbxJZ47x4tS4eKj8ZF3AFW3zhbmftw3PPi59xfr4GrpaLXSKsj9U",
  "key21": "jJXDHVE42NxSoLgkkJ4BZHq4sS6tjgTLzcAAPFK2fEveFAaeZUiTVFx7TBiy7wooyzYg6sVcLGDHLP1YGjB6PKw",
  "key22": "5bMkvrhuwF1fmBqkyuVj12LoBNP3PnZ8mZMLLQ6kciE6tdk6KpAPVv5xSdqrh2L5piDBW2aGh5EaQUnyRtLFG4oW",
  "key23": "5CdJaX6Q9KRrQqQpzLqTXgz7dVgiM7My6nnJCXdFLDKcxjik6t3884tDkKFKqTGVLxrdSKPuXcaBqE9jUJeWmz7D",
  "key24": "3afej3337nEFiCNmfA58DkHpWhqiZMBGpd8Ey3Eb8MzrK7BLunEfHPzUKVuqeyYZ11B44PK1NE9cthhxCwHCMeY8",
  "key25": "B7qZ7piWFe5QVdThS4eH8DkALAAJirrzMVVhkSLJ4JmYrrPCZdJh9nHjvKShfwmWqvJvaUgj5xySfKugFNez8RY",
  "key26": "5v474ewtnE5zUZyWYVFAHt1T1GM62aCrZ58T1FHxhaAw8Y6KnDSFLyYvBd7gDixJLKxfTCgGS46Uy7V9fT2yxtfS",
  "key27": "327GXqrhbsjTeM2vytAJphZqhqypEZU4qA3xhJx2Ljdo1Bd7cMpXa3oXi85MFwZpPnNoixNXbBTqYyQEEehw4vwV",
  "key28": "3bs2ihAj5FWdBUjPCCXSMXeGncRSb5n9EJrxyU2ytJQAEbmyDsgXj8kKXXSepCdzXNoYAjQ66uruigz69FZDcen8",
  "key29": "2mchFrVWSXwjmGUcbwwqRfSsFuoiFE8RfsHS2FgA3dHurHVjaaETvooT7Dqm1XDnvsQU1DQdciRHUCHGoqjqN4pk",
  "key30": "qprx6AA683Ri31TsJ1gQ6nxHqiXM6SPnJtFvasJjbz52Ajv3ESdNjnw8NJ47923fLfmRjYjfwsBMmSkuViY9VAF",
  "key31": "A54vtPME4y2QqGkbzmnAq7UED188wXVwxDvCsBmH71Vowd3LjHc9qxFKZLFm6952E4LBoJiGL8hKWLf8ngTk1LX",
  "key32": "2vmNHjfHfbq833AnqfmTmM6TJW3ymvrXFjDJWVTMVERojjDLhwTZtnGRHc7SeKTt3Teb4K9F2znKqELykduNQFzB",
  "key33": "2JusDV1r4EA6a3KTEMi5Tx3PhXzvRRVvDTnjDH98KQuqMrANjEuWFMwtLoJsxh1hxBqqYV7fPwHwbG8meDP8bD5G",
  "key34": "EWo6aVjMEbgUjtvvyQ6Yz68ibjotJREHDgbC5TfJATKEcVgdbLbEvkJQsr3abjtgmS83UVWo4vMadFfzAbJGuZo",
  "key35": "HR2MXWfRiTxb73kQ9Vo3v9au2HNLaXgHuPzq6o6o214J6NuLejhYUVvfWfepWxvaES3wbsq1rgiATceaGnZiRS6",
  "key36": "3fPSG7u5YmH4Zv3wHeRLMXYwWaTwgjgpw3WJqCTWY8pNTfeqtQD6FUzZAKfC14rdtAzWhpoxhqEX6uyZ7cCwA8TL",
  "key37": "4axMzQtTMd7zdrtD5CPMWUj2AzY5P7a8QR2wR8dpqTbR1GKoN3KZDLdVNpMdsgmztR6grXUi1rybbfeQbq5B7QZg",
  "key38": "5CDX1z9BR5mRSmYGTiTCkYDfzvdLVf8fLyxxRZyoRCAouj1EKXBaW4x9HMEpP1XdDRCERE5QBdLwAFdW4mVgGV8o",
  "key39": "2WvM7rjAE1Xpx4LRdXQV5Lakwizubb6v6L1yamQvVgtWCeKNMT5p4PceTki65EiViveoCwaHDzURRnN5u4ZvDh9f",
  "key40": "41hUAC6ZxtPgrPPTRzxdSEY3U7JHxJPaVFxScMW43kgPJVzWKyemC4Y9Dn1uEApZQnNh2FvpPHLLzAm2hDJspbFk",
  "key41": "267Qdd31M2NdcamXoSNK45tmBnk2bbTgBd2dDWcoBQiryXVK4g2SPvVbCgkRV1Wx24gutHAquoc4EfDruTvU4Hzv",
  "key42": "3gj4KzRPyFbksHYQn5Nee3y9qiTfvEpJmmSCkwSKgzcW5ckMjstTrGBLQs7cYcZeQ6hBSQww8nV7T77bk3a5Cx23",
  "key43": "66bcGZik1ZGE6h8dbGKvx2tSaAvSYbUcw2PBH4BY71zP5sLctycR1qYMZFP6n3XRdkFTYedhmwDSctkLxWfLg3Z5",
  "key44": "R2Krj3rziJtaDdDHbfnhvZgSHe2L2U1bjKEvLozSNxyKvrnUoWYZ6ursevLykcGBBWt2wEdGXE8E1cmt91SMPVR",
  "key45": "3ovvTdby6zkGfqqtU311JkY5jqiwN3M8PVUFLUP8FPNqNDjV2wG7DtJdwSSsr9MntDVDaD46EwkfP51jyjSd6GkZ",
  "key46": "63xjp5U88QAZDdQTv3s9vwt3QsKYZmeeV661S2NyY3jt5kvRE515MRpyanAKns7UhKCR9YnppEdSGkvCzdyyMpbt",
  "key47": "2dgZ1dcXaAaKtMh3eMq9ENoF3HhavxDbVcEH4HZRa8EgnpULShdarP5LdrmwNdqcj2etLkmWeBu5br9HrjjerYZU",
  "key48": "5Vi6PN4VK6DFdoKZ2hivDLxwQUCCtMSL54Rqm7YD8AuVJ8G2XSCCpubmqY1aQGeCLH5jsHyeTrVxboXdxDBn2N7u",
  "key49": "5hoWuu2y2ieL25jt9ykYepn69pk5iQFZtTRxPYLp7so4QpNpXM7WgG9TeowUEp3DYneTfp7kF6xX2bi5vPmmU8Li"
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
