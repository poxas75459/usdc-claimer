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
    "5xmu8doaCY5MTiR5YJhZaonKeEA9X1L61M7bR4HVx9kczfGW8FK9MEwWdsu47SgobrjdtdNuLrw4QZBY3rGjV6eW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pCu3rkoWm7QcWzbLtpDFcVQpB8pbJBJHcfVZyWLTFBi8CDtv3hjpzxk3FWivwZMYDgfgxzosHfXXm8jCcN4Yzqe",
  "key1": "zFffMeXqprJkis4p17sFf74rAtPAp2pgJNj61K2stbfr276n9bbGQ5awns2YHi3VXrKoyRUkJLNcMYvWS2z7Ktj",
  "key2": "fXWhhmocsWp8c8JSFAdKymUFdSMcAwhwfzyYXJQv1cV4Ft7v5oZq9v571nf5b1Hjd7k6oSfUg9fKn3VaNrGuqJP",
  "key3": "5JKMnevc2TM8nPJCufjKDfuHs5pgH7rwgdEbsGqZbUELXX9j7KST2Z2fKi8yep5EGnShEgzEiV6nQqcNjoBtHdpw",
  "key4": "EzfrbcHhc7jJ7WKj9yQFx3aDAZV6b2MY131nf27Y6KgA4cxRDZppUfpNbyJ4Vgsd2pAUVHCHokGQ5sKrUYYEhRD",
  "key5": "5N5FHX3DvkYeeuzwKwwoEeiVnZcb7sVbd5uZ3PsvAT5bppar11HQZ4UUzaNcGgK5msJmMrfcqmfYDH89wyvmHYFm",
  "key6": "S9RbDdfr8sZJz7J1fgRauQLz3g5GUq9tAiFkmEM5MBFv5CGLk6FTEeXi1tEPzDVmcZdKFC226JCZZGrveeyQXH7",
  "key7": "4qmQgnMVhptC1JDN2dpeMaeHJ3F16vv8yEk4Hi9PRVPJdQN3furTKwEXc3jA8ybYe6rfmCxi3iAP7Rq4b2B7rw5i",
  "key8": "2gJTtW37CD5gu8AB8HFuzrtJJYmBz5CD6T9r5VUzXgLdmPvgQFMZ5haho3LddVRQ8PRjDp9yj69M33UGSeVteRSB",
  "key9": "5h89HgbybKWck7RG4BnfxXud4n1WBuhaS14db4yDcLtQPSHSBAbrujXxcUzvuDJGk5rxJLrJnq8kmeK5PdHGfJG2",
  "key10": "5a6VFPh2QFS34VKXyDTopqvLZ4ah5e2eHfFbvJWnw7BS54fCmy4ZE3RswubVDKWDDP2d3VTEZnsuFBtE2r6bzncn",
  "key11": "39Uv97EbYrdBac3ugRTnrthpcNWhfKzeg8NzN6SvWdGHED5pFGcFtfyysaSm3EwZUrXePPPRhL9khSHfjYdshnSK",
  "key12": "YfMSgBqqqSppBzV41mYMpDzywTrABkspCvHKjUtc1cxVskSf1EebRc9HMKyR7BNqZfB6n56ixALzf3nC8bnEGNL",
  "key13": "3VqgwsWL6EvNB89grte8deDBwbQ1sYzPifgXuqu4c34kqYHYBsDxqAr7N6nsa3VffYhdq1vTvDECeDZAqZqkdKGv",
  "key14": "4EJrKnQyTAGdL87ESGMSNn7TdyAXwqEDQYbYqYfj1YYc83bx5pjpVwetsAZjNBeXv3XuNJw8euwV6kWD1k3TJMR4",
  "key15": "589r75trbc4BDe9DJ7p7buz86wnCz5Rm4kxt23W9p23bMCBvbc5XaCsCLLHtG8vSqUvqzv11aU6tQpYam53T621V",
  "key16": "DmDfxfvBKawSgid3XQxSHKKTKkuaiFdBX8xPj5XwAs5DVva2vnGRTz6iffYkjc75awsuYAkNozSjvobM1Uh22C8",
  "key17": "fPtWu2xA5fvkApcbmsfaRdWeuZhchaxMWz8YUzyJ6TQrTSCrxCdgiTHnjtXQSXG4aUNbdEga9uKD2PT3GADWbEu",
  "key18": "2N6unG3fpzhP4MALx2MUKngUKmGp1kv2MSiRPJoG5YVdWygiT5h6uFoh6BambtCc7HGTzEUfc2NrGHTiPZ9pm16K",
  "key19": "59VzxQTUPGeancPt57jacLE9wj2XQ41dwiXxTL1bufCFJLWPTaqzDCjJ4sMaczoC2Mojt8z4vaF259u1CMKvhMVs",
  "key20": "2u2TxtHaQCAkLwcrpP8NujMyzak88LJ7vkPhzDaYjfVk8KE7aNtvLmEkibZdePMLxWEoyrd6frdhq5qhDh6RR5Mb",
  "key21": "7BNFXr2NuotAC8YS1jkUHqoyY8LkCAzcrN1inhHq5MiggJKCN8G6oqNNtK33k2hQ3BxmewbZemtdcUzr7a7YqSv",
  "key22": "2DzHL48DaofCXcvfqpqjiLsD7kHjZozQJM94ycPqMdcZnPCzn9yErWcb2XJ6gBiyH71FaFGdEdvuLH8c7TrpfvnZ",
  "key23": "273Mjjr2C5Txc2qtgFrqaKLmnmLUwUVv5NdKA57Lmf9nCZWUz4UmAhN2YmKoKsKhuR3cz1hb1mLr2Qu1PZmSY5cM",
  "key24": "5jhxMiV6FXpVAuk1nMRU89PHXHRv9Cnw9PeZapvB17FFtCmmJ8F3ZFDepvZ77bADHTqg7GkFi6ns2SSrrc3bgs8N",
  "key25": "4tbHbwMEsbDTcihmobVMXPiVXbhqpTHCyGSnvsgxLB5QmaD4Ruy3P3pEgBwusSy9cHmhJqPyYqdruetW4LEnV9CS",
  "key26": "3CTbTo4us2s9o1ukP6efA6F6x2dKaMgrLsJw2sdQUCqMXm4M957xfDAFwkfYNYKrHfx6Uhpy471tVQVUAusLFYv9",
  "key27": "5yQZPvpGTX5LBFYYoW1fyJ9ZHpSmyqEhtCThJetSo65daBHx7yURSnALy3bHprRGb2DRcsqazJNz9eKcQqCiCpV1",
  "key28": "4P6Fyeb5WE1ihtEBzeJhxTKAaKzWemFk9LhDnkMa94sfR85UX66m5NWWf2YiWd7ZyYrzeihcJXZUnKxKTso7SPVD",
  "key29": "CFeBw2FURzuiJxewpLL7qvnkUgEu1dBQpLjbn357rjm3wjhhFLkpVRq3D41ePfQPubv7ZTcwTCHV5WFCytYGke9",
  "key30": "62rxRYwn5Sn6A3M6U8dh9DdqTHkCK8RmzrATgzWzQGcD3juX7au822NTvASwhSLW9Yg1jyMUUPp8dDYPg2RoEnSq",
  "key31": "4hvCzRTZ85HFXBnkJ6rf6bfi62SnvSFkprmcVYcPgfmfHukYZHLHGXPscSgBEh4sgGEK9wQpAzY1pomtypCVyHPX",
  "key32": "2oYDe5m3GWrDcTRYRz1anG1pWiE2yjhbSEn8nRkaQui89G7HuqhaSNDfoJeZeFSb6oa43HbnNrHvVywjiuvG9nRU",
  "key33": "2UpbXqhsVzYkwKcVvueqZ7McUjmcKatnaAWJYeewLVSkznJkRid6PhLNnJRaqU5yNLAymVRdr1GqAyqGNRjV6kJb",
  "key34": "3R6NajDJZanK8q2bgWJDwBVAyuaHCd3pJbxYywz18ADJ2LyFM5o4DX1ucdthCVSPta3omhx5NFJ656FdeACopdcZ",
  "key35": "2TCM7zFoKAz5FRD5mAmUkLUmGst1Kq2sLpUz1QYBkkA1t1LQkghaj3mMcPE5gHw8SurXm3xTTZxWbisarxReHmEJ",
  "key36": "4FWEv3PW7UmKKYsTPPcuMg6hvNybXxfnJxGb3WRXYNgvR9QFXbtvawcLtA7z4QhR6GLAbu8Kr1qyWSUTz9StGik8",
  "key37": "5taeS9iqhwJmrgeALUf3xeS66heF6ive6TZQ1uxiHPYiECmMj4pmuiby1Tweqb4bwwf9kGkHVFsbfzHdSkCxuVb9",
  "key38": "4o8MzdS75vNnSkuzb6bpjWdEKrbPj7mbT1MeVHi2WecxkijytYbXnCkXn6TxuF5CFaTwVNZZrG8cesw8Hh2sYu7z"
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
