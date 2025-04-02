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
    "46D2JShV4MkVqKk1FEkh5AAvdCu4MRnZDmaR6DPjdXn5f5J3x9R4uNGS5p4zqZH9U5ymZ4KsSetbCRtMvCbNYWnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4awhPZ4wcdq21apDff9cKjcYgRxp3ViFdHDz9hFG1rCj7ghxNT8yeBY7Nyeq1gTuJY2cw8XX9yrcpxWSwRKNuBA3",
  "key1": "2bpMLJfuA76ZcUN2tF7NmsRRaMPYGA8sEjWJFuEtUPpuam3METUWK3FivTQnySBVP4fXmUWJfSw2ad9LTNf6EZcc",
  "key2": "QzBvi46H7Er1hkWxemGuLtvEs4Sjcn7s2VKsfrtwg8fKndgGN7ZBPqmAb6XmRz53V95xjBXRBJFkPE6pwr7LzPv",
  "key3": "42zMrRPcYVS7dh6fhQTqFfLBGRuar39sdEYpX71epnpzZASq2k5qXtaYsosm5Xq2mEt4KJEdYt7QyaCuN8ymvyJx",
  "key4": "2wvuToD1d8QJfevsSoHxCkuaYRAz41j8VWeDFwLj95MQ2UhXBwLyz8qe4pZfprG9cJybvzJoSWQkNEoCNCjPYZSa",
  "key5": "2tQwJVCXkfrsY1XMjUChjAixeHfX4DCbfkdU5i5pukqpuNbtof49WYLzbScZhC6C1XPjG59VYHfZvSQpyKwR99ij",
  "key6": "Xdc8Bjjr7v1FvNtgbcQ549VN27iCekspxrHjZEw4bmtsq9FWtrsVsxQ47bB5gfBidseAcHU9EgeUpqqpxf3SmiX",
  "key7": "4ty5E9q9VEXzsgfX4XMjdjiEzRBXVe21KSZXrQdSutqqg4b8oMczfH8TorR9VXSuY5TL9Yw7PtDj4oWCLdt2NEuc",
  "key8": "Y9iqtN1yeDqy5NwTRVykfU6AhMyA2rVUUMwWxbLpVwEEEDPfhKGBP71Vi8qiy4J4mkjJW4NFoBJvUtWRjFbwyQh",
  "key9": "3GWC25xZRW3SjhkqHYcmxBUYQ4oeZ3Vi8v2oLZC9PzCtsmgChFsKHhTmaRvQrxdNbMyDfh1WhsMV3GLmpNja4Ac6",
  "key10": "5ARpigr6cfWskXXCR6q1BSam8faRzoFKTsyMU83zR348aVYCSz1rqd6vLqp9qTFQyjj6qED7d29mgaE9yoeLKwkx",
  "key11": "4mRZbnzdKRh42JjsFfTJjPguPhaV9rWRa6oAc9VK13gVz2kzp5xZodSAQXMhLakpDNHKcae2oi7Tfhxs3joFunLH",
  "key12": "4BXMULaMP2BC98n6wntrN3jt45TLYEusvu9FLuJYr7jpqti3uhp6FGNczsM8vc2brXUBRaipvFVtw8rCdmkLBGim",
  "key13": "2cT3vBKdCiEVeJQgFcpRM5N3PYLApHsbenoyupWfmyRjjMiSdcDrY6LhxP8HqnWG7zN4SioRTcyzghbhq1KCPyhm",
  "key14": "49Fdh6jhNuvLXHNcfcU8PcbUGpk7BComBT14JPe2buEqH7zVhgKbunnrmT5Ni2TMHgVr9Fkf2Di5iw6tAWTz9dqr",
  "key15": "39WRdGNjaF6Ct4qNVArinYnQ3pQzvm9PR2hGPMzhFHsxC2B9MEBoG7Y23ecKtYN1TVRuxrfRvbc4iRQZgoLyxTqM",
  "key16": "3NRZFhrbyqkXGLFszcEiXQRuEWWx4XqRUWfYmsFaGCa6aTVZrurKb4cA7JZ4jr947NjRdsrMpQXTzDRHc9GJEve9",
  "key17": "UHvAMPgktuGnV8612GCwE4E9yss74Rguh662BDY6cfTgcPBkkn1XMLzzGKhqi4dzxAx1s4bkRi3tUirv3rMuDBz",
  "key18": "5f15ahPfyHCeY3pC1Se8MxQfdtFohHzSBzzkbkppAoXqRPKNbnGjT3FLkcgcY3t5Td5dtSZRhmP4fYFvPPhmVPdZ",
  "key19": "5PT8wvtFQv8CqE31uxT5ZpmR6Q1J4Ma8zuLHUG6EaMPVwhCQKXFNMggvd9Pmq1mScj6nuXLtJ67SFrQhTrrd9J8R",
  "key20": "hgXoNN6E9Xzqqkadd1uHmKbD9EtFHfTckcLwEgTLy2wTwwRFsLopA1BDowt9oDG7JhQmzp9NBvRcsm7DCPP1Rqa",
  "key21": "3M35PDTm3EpF16M1wTKNBPc3unjX71rf5h22e7obSWUUX5781iTcUfcT1XGYNVVXxg1Y57qFQRV6GATbRBM4TGTB",
  "key22": "5Zhs5vfQjStuD12z3syRJBxEn65jtyuDEgq85SFFUKjrJiVFoxzKAeGmCMLcma7h3inHtZkZWnq34dFAgQea6JDs",
  "key23": "3N989Zskd1yQck4fUL1Y5p2WAASSQ7LF66MiceUrLggTFQdTsnEhy4xCtQhspYUr3JJ1fNToCDmUyow2SyPdxBUU",
  "key24": "5BqLDv2b2SJynY5rsKaXFrQ3wAs2L27XgpXSTU84PVJmunQQKSHL36yYGCsQqKShCZBoLE6PzMZBaEaY4dV2wPr1",
  "key25": "25EH7ZiFvsvuzco3Gd4okVKnrx7zKh9iSqLRWqgr2QebL7DQ9sScz96Ef6tpyD3UoFzG3uAXASpxoCtR1ytam5j2",
  "key26": "5NjmiZAFroskawDTnEbZu1mDwo5vVRcBxY5R2vSmjwsGs9EQoSqNr7RsxfLiRp6cnTFX4JMTDn8Mp18ZEM2c2gNp",
  "key27": "289Y6kdmrMQ9R33toTZ3MMvpSXqTAdkXNCc1396A3tvMe4ABbMnUtLG3Y6oqeqrTmyBQmKJFHmTGHBAZmsFf67BN",
  "key28": "5Pe6WceFaNZoRHrJUDhb2rXjWZC43Agi8troeqJ35yzEeMAGRFcSN7aYKaphtGwWuTidzqU9Vaxp3MYbQQfjDjqn",
  "key29": "h8mcGPS2qZ9cNa61nkwJRBq8dF7TboZEmZh4tpGM4SUUc67x5o1MtjFTrkQ3wTSfUTGLq2o3dVPd99MyGgkcZN4",
  "key30": "63AVDAov5M4Nwh6GpLbCjJr9MESHPJfELMmE52CGQxcEg9kRPrSVwjDB9NzmGE6gfcw5byLUgYZr65xnZXChV5he",
  "key31": "3adJCwkBfaDyX4gPT5SW7stoHtCQCoyhj6inGHQsQvRKJqDbSWNiKQWQ46ZTubvPypi1VjubnGzds6wJhCwWKWHs"
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
