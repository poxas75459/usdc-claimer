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
    "2EL3MnUpLJqcizXRZGk9X9ZYcc9m14fAc3P5ZXURVZgNkafi3a8zRAcf6MRssNAETCYn59x4C21T6amysULPADYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tvy8zTpmo3v1hLRBdGaHJzAn6pagvSZb8B9De1VMMe6oa8mD1AVonvCnEJ9cZqChNcHU5tk2odJ9xnhiKynj5oG",
  "key1": "4wStkE6h8EC4ka7M9H8HY6vTaZbh4gVyTK7PM8ogHYSFxuDgd1FFqtHq9nYwaEAMDYPKB8ogXGYGqbyuJzryfqJo",
  "key2": "cryQQSogvcuD6TGRAmrTQW5kNs8fZKkKR3z3Unqvwa5JKBw8GtrLpEY9JQo5mavqm4FMPpXrX9v6WfmdDSTDarD",
  "key3": "2X7JtwE6gJq1BFwaMGhW6YaL1XS7G9tBHogmnhnguo8aMyKvZT5nLViDoPBcbi2wefXHXnrk4SiyZSwc9WZjrvwL",
  "key4": "3ydhPCUjdAqNr2QFC2BmBKFm2Mc1FhExUVh2Lism1ms4zz52NXagpkhhtwMMpXHAXsLP3JTVmgfd87NQRCF7f2FB",
  "key5": "4SH43xg3Mgk2jChfJU1AU9QZau6eAf8kqt31XTG3QNdFrrwaWv1p7kpY6mgoALSZw4BRadHeiABtmPd1iHXkrVTH",
  "key6": "3Vun5MiubJwHU5EpZ8tPV6z9rwFTa1Lpsv4qXWup6hJM795j9iWQbfJYUrqN1oNiVvxxgbFUXHxYL2FhB9aNT4kW",
  "key7": "66A9aTHq2HdvJgjKN1GdwaiHiCT1kqXRSyMBbabE6zxcCrNADuKNtGfeviAFVbrC434KHr5oT26RCcnParLcTnTh",
  "key8": "28wYq27YbM23MpqsyxrUQFMasNNYHNEbEfPsU8kDoSCaxoqzuNSV9Tqcj19xUnw5LMgsQ3AitRNsKMT9JCozbugT",
  "key9": "3pREbdLnTxousCqRpLbiDnEYDkwbCkxC5mWedJrbVHBzRgmHRM3JyyLdvoc2N1NMGfVtj6Y3CoZaDAXoHmRqqGQW",
  "key10": "65nUWi8mknFTVVKLXt2gGCrVEt6xBfnSmwyFw7bTmkaqPCW9gkg3EfMR7DvEK3x4P29PdbpdWJfpXMLPAV7vrc1Q",
  "key11": "5Nxm9eEX1t9FwAaTsjqLiW2yAuicfHrnpYAWuX841zYgqazsEH7ewfw9CRomg9u9prsPq384paSjGHw25Ppw7Z3s",
  "key12": "3zY7gTK95nJjpgPQXGKkfoJ35Y44H7XGKLRyaWJyvj2X1Qgm4vkrox2T5zA5wokdGXfUDgJVmFaUsoxFCavTsLpw",
  "key13": "2QY4h474cT17qLSghYTHhduhXtmEdVGxXqxo2Ne99NyKc2HGKvA8ht2MTCmaGWVPhP8BafMQ2SzxzKz68WdqB4oP",
  "key14": "4beB16LQ39ttVz8V1fJ4YNmWBT1545HyJTG9sM9Bcbuf4H9p1FFCpTnEBDrf1156hXN4qPW9Uc5MYch39kFZKeYZ",
  "key15": "56oi15WkDMzEBhos7e4RvnwJHdDEd6m2hDcthkkGLjV9btRR2CcgtAgrNM4asrgsN53FLDE6iE5FQACVntLtmZbn",
  "key16": "5qEMwWVcW5A43jTArRCYeQPVwWGt4kjdgwjEv8ZqhXYNCDtXpKfm7BUgYHj2h9ZWSDou4qNL7rHcYkqKa4H6LwxU",
  "key17": "4nJU6VPtYxbbefp19uwPsuSqcx9J1HZMkBzSzcotifBfJTHUXxKsRFPAkgHzi8H5c3f34TVxYA2iGi3HazbBdc9C",
  "key18": "4cKmjVDgJLKziL6ZfogT4hEP8YdqmtWwngbqzYy4fwWAbvUirMWDLGRaqJZWLcmjSEkkyc7QdkoRTnkdT6Q77rPz",
  "key19": "4Y2MfEJajZutVyabZ6MMXq3Ei5oVA9rPVdtsVzDRqkM6UF21Dxc3s7JqvHeCYRjyH1yGjdE1VVmT1RyqETxdfCbT",
  "key20": "R7259yVxQ9kz8AkfVTrMCwys7XC5qrQSAQrM1enPEd3PiXDzAePgdKQtUTsqvo6o7tmRo2LMeVcJETWjVWyy7ev",
  "key21": "3dK5Hq7fwrw3hfxaQDuCBPVXBrERDbqTQdT2wy9AJKT6ZpbF3kroDN4Ji5oTwRXCSxZyxTgZQUSrntJ1MomRe9Nb",
  "key22": "5Rsr9pC9iSjsAhUPeJtDwM1UBZ864tiNAT18hbwv72oXKUeRZY5AGkJ7pcDF7adgrz9TE87ZoLBSSF2xtPyjTttw",
  "key23": "2dZFtmmJgQmRTzwPdCBmowVdCCHbugC3Q1Md4WqgHiPp2GjKBRB4p22ReMZFJDay7yxpNAeAf3JbErWqbmqiirTF",
  "key24": "3qd5oqpBwiMGvBrmC1GiWeQXihpDRdxJ57Nu5BY4LRxwtXNQq3BE4Ch1ZRYfVw8wbkpbcygU1vyr8AQsByzoguBd",
  "key25": "2fgQe3vS2ejpUQcG2oepuW29smrHfmdziYbrShLkxgD3DiVktFh8ZyhA2EMzNRmjZAdjEdzZgH7ngquRe3crkU2e"
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
