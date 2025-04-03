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
    "36UUoDnESipzgbS8FDshE4FcAdtx4YWM12W76nN6m8fNC4eYu8LYAkYvr7rcHav132zH4EbfVsxNUek4gX3w7ebY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hqxp7Xfr3j1ChGtnyEYYfiDp7hm3qZuy2xp4YCx3pXmsr4igWgWfeUjqkYAsuJP3brcKnpcPDr7dPuXP8QiCU5s",
  "key1": "5Fio66NXfy1NH55uC3JbJiqKRhbfex7TDvKUrtXrYFg94CBW1i9DsT7H3NyYYvBbfxeaG1voh9PmZy66EUz8d7N4",
  "key2": "4EBfn6Mm5nMmLZ4Msu2yHvT4sEXorFCacXjTCSmUo2Pg76ik6WtBBLBNkSCozZgvZ7sb9Yk6XvL8u4iCn2SLDzNE",
  "key3": "2YqEjuB8cCTAeQYTNSbLsp6W3tiS2D3wTGUWPo85ry7rBQQz5hUmyuZwr6BWX9wS7HLYDssrPMgkCgpWoArz1tNo",
  "key4": "2cLpU31mRx7XyiM5ATDDwNb8XJAZgmcu2g5akVQHpZ7LUojmzK46goPAsJoNmEbmH1jKD3aKN4y8NoATCqeK8z9C",
  "key5": "2Yto5n9ncMxMpCHZRGMST6w8XqgLcSubMynUWZ7KRmuZ3gtZp4k7zeo2z5ZwJ8DavTcv62ENijMu7ATPCPVhVXrw",
  "key6": "5Ya2oqwz87V7KSe1M9BFVvkfHrRsQ6RX5Y1H6TJsGeaejzM26syEh9HpEnod7hCKZdgSvDikUbYto3eXiU4AL6tt",
  "key7": "upajqYECS6KsUBWgB3AgLHVGnmrnG943ahsDuUq3B5MVMP1cgXwdk8x6AhJ3forkXtrHGD2Sp5UqBe47PxgJ32p",
  "key8": "2CL9yiL8Nxz63a3mWeMJf9LfuyqQFYz92vDx24fAWf3Tk4PyqjWV2GGnWeSs88aeN4LEJSF2vkNDXM2umv7Z4tQt",
  "key9": "5oGyG5mf52h66g44r6JoVwytPaVsQfSUVRrnwSP6hb1FGXbjJyykhaqhVaVynvZW7jUEGp5coCbnMMxgqM6wx3h8",
  "key10": "4P81FMR56HZa399u7tisqkSFLAJNzNTmkht8AMXcr6i3E5yAe43hjx47angZYzpZMUnH2Ax2YjvDdb5creJrpMYS",
  "key11": "2dN57FEm9AjLWuSmYAXYCVYa8w4kZtK93S4uPjktAFKDE912nXhmZ1zGiPMuyauAiu3D6PYGjeXtS2HLJyVjsPvb",
  "key12": "2kymYX5BS8wecCrxmxNyb6W6HGJufFb8pUL64pxoRW1Ssm3ap3CC2A14E8DxQosYP1XahBVYfGEP2RT9yJudkR3a",
  "key13": "52PqDYNg49YJcJEeAy1nM9ufMekpja3qFLGYM21ycjraeRRjb6jigfKs4STVqLu3ERZK4PCEAjUm7Go3R8623CCC",
  "key14": "24dDhVA2NaaQbQVvX8Au8L8oZ77p4bGRaJdLaH5RVUGTXKdFi1LAqCYLFc65zHnwuvSRL4oqLKgWw4CPhfLk2q1H",
  "key15": "2diruFXwjgMCtCSkQCXaA9j8TsnwK5mqLsKNRx6LbRwK9vdFyT3KoXh4uvkDNn93QpxAQhpmxZKGvBUAQaGsj48M",
  "key16": "32w68aq1P18TRxjgpygZreG9eMnuUPSZ6N5jGUZ9xxtyRi7phmaJoJu6S8ydndkRa42w7vva7cizzyRd7zdh5hn",
  "key17": "4wPgYPHe73JB19BCh8FQNVFxHfnTLzSQscPoD6AmiQs7LoiYH6bvSvWHN13dMxoVBhKRX1hiFB8LAp6nfTZCzHsb",
  "key18": "2E8cW2hJsjUJ8tJuRymgVuoAxfzzgLc1PGgTtpRERVW7Azxt1vU4EZFVBpPfo7UcBwhVVP9o5FXjMMqZkz3gqiFw",
  "key19": "63C6y6RqiiDH8g3uzCgiVF2RTEkS4aPHjWYfnnpkCmf9ePWW4LDNwpSRqZ3tKmRHr5nvTSUMSkuqPWx1PMwzuAFN",
  "key20": "2DDWSDYesfoCC3sR376DccHpHc1poYRHUnv23QmfRca3nU1FBV8qJtKabZKwXREqQEfoEpJFqVc1bdAGr2ipZZET",
  "key21": "3RQM3ULD9pZt2K5myyXZj8yrZXYHNMC314bUZzzNPFr8e7WgN849XiEeQGFUTfh63C9xcZBmUSNr9mcgmxiGXqeW",
  "key22": "5LxXBPZGEy4kVxsrqsxW8qqAgfbysGZB391jo8z8ikN31v6CcnRxwqDydCcASh6GyzznhTG9afKtSP1MZ3cGLtwi",
  "key23": "3YXDiGwU1UB3vnFwF4MroudRcvq39EgKGNH9knqkYppEvw72GuH7XAPTRW6qSTNFAoEGxSb2jtWb9P6HsWwhqMsH",
  "key24": "2H7mwrEAAX8MEb1i6qG7pqFWyg9BT9wvJQFE2REGR5KhkgkVMuXpP27kbZgv9hsVHxLdRJBNw92KmfBWf2MWZtn6",
  "key25": "64MeYkcG6p8X5uAvcaameemdNCAUAQRGGGS2YUFpYzWn6bgfN7m1nhiuiB8MmsYMRtS7jvNnotXua7BeA6GFcm6b",
  "key26": "57YCq9cY6WqdocUMNjeCuNFoFCqCpAAjyZXC9uuAQCueQpVZCjxaPghjU9WmDWShLQYHb1JVySgBpJQxeZLoQNZU",
  "key27": "1Dy7aTWLm6HDfVx8XbfF6hYFsaiVgkqdyqmaZcJUG2J3cR1bPsDcTUG82YsA7WT8VkAKLjzb5ibP985EygsgJBd",
  "key28": "Edjjkn39kWXc5y22mJtiEzU3cRYj6vTF1iD4yvwqDsw6xktnVs6vJjHBjeQXAjpuu6LHDnVqXnoThwU1CcpSYcm",
  "key29": "36LdPuSi8Hgg7LFWAcC1sHK3MYDmMLT8vfYYnxrFwAJv3FZJZhJPCne2YBjunccJywWFvuLSt37QtsbN4SJvE3tf",
  "key30": "2wy5YqxhP9VUHTARsqk7pnXiNiNbjduud3H3BXmRHsvy3o4S4DtU73Hm6DfkJh48zAam1VV3diCB8BfDCGVwxkNY",
  "key31": "5qummKe4dhPmVTASonC9CUK5aC95u88xvc3taYHCUTqS5BzFoKPQfmpbFeFSHAXQTwzZgzCka1n1CqnXT1KyNfGB",
  "key32": "29wxdTNWe4cQzTJeceBXWrEyMDnZb5aPwMSzyMozaieJ7kByZesWAwXHK5U3szcbz4iQdi2cTWuWqwJBDfd2SXdh",
  "key33": "PjB3rN9dFbkqHtspzSaWbgoFpLposgNgSRsVgWdGcPMKMWNWnBKzNxKMS4CFr6CjGGbZLhCkggQ7dvjkpnkeRex",
  "key34": "64BHM8Ld1zHkhT8dtmPs6dyKdemj7TajJKANTbjSpWA9CPfwT5CXqL1G7B8TK4VrykbeooaMXVNqTVMRd1SD68db",
  "key35": "4NEo8Gqs6bFYwM9PLTXiNruERmiW2TVVSh7atumZoWcqKNhqBSLDjHdSmBbAX8NgZipuJnr45YW3nG9B88yJaF96"
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
