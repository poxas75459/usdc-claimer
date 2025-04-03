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
    "pPSrb9WQMUizkEcvyrzpRD1K4kkNJPu4A8YTyBkNL29aPfnky9cTXN4vzSpsRxRC7Nv2H5eU8zFyKnbBkM1caFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DLWi3XgaWWqeAgj379crvfS3okLmJAMwnNyhA7knrWNovEZeXHZmivJ5BD274UPz7riF7J4Fmp2drcXYVooN9ir",
  "key1": "wvYxmVNPkcesEfKFVCUswRk7Qhiww8hj4YDdqY9hRHD4R8s3SGvNvLxsGrym7NrSagJeXzExg1BiL2z4UVYhGSw",
  "key2": "4y3LQd3Vx9qvf5CmPHE5CPdcpYcCeiGqoVcaE3emfQoB6Ag3HHiAX8hbh799K6iNmgG9VKyK2XHZ3rdkuZ4suHZF",
  "key3": "514WXDsothjaMDfGoQTJnbaNujGLJRR3eRmffGr9SFUeAaK7sY61Yb4FEvD6bMcDhAFcnewcdp9KP7HiW5oQrW41",
  "key4": "GQp2eA8eaxmAW5jD13DzvmCgYMeaYGTZnMsN6pnt89fkcB3cpuJvZayZEmLzHPhGT2mxy6dWrZJEtrWdnxV7NkW",
  "key5": "4jo59nMRfNEgu8uxviZPSrUCZ2qoEdamYmA4Zq6yh42v8fp6DJnsRZHescmE9c6E2whwUDgq2KUKpUHW3udph8AK",
  "key6": "2JABS6Y71npUftdUSS1tgd7YJuKtrcz78RuHSyNyNb5fBAnSmDc6j35iyrbAs6zoFjZKpVaAKCQaLv1QwTxTHR6F",
  "key7": "5pw7UqnGid3pFAwrmerLoveohLmhvTQ35yqJX9xF9DCoUb2ARmjDxFE1sXvFuHn1xiNkR5WTQb3ADwZgquQJVaBB",
  "key8": "4RUwae2JEc3mMJWVaxCHT1aRZcMGuN9SSBRqQmCQ7W39TqdoKn1jk9pprxyD8UfjLLkY3MGMb8a7qYGnEWcdwisb",
  "key9": "3Tm949yHZfqaYZXSYPjyREqUSwkeoYpCSxvbrU7uhghZydgrwNEDHrw9hTGA1ymZMXSssV4hVWztbrvM7YSo3uKH",
  "key10": "55Si1F1mivRx6hg5o1S6zc5yGq1rV37tXTQ5GfTSQaJrM5bg5e1hyfUNx9mBZsaePmsqaaEinfGAUA5RQhhAEX2b",
  "key11": "5XZr52zhwn4rBvHPf6h3yunfummfyDQXicMLPEeNwsmpbYqvXKM1CFSwEMTC9v1JY7h1cR69BxWYtyX3YCWJtEqa",
  "key12": "27NdCJDTfdRtZikH6Wmk76yxz4LCdsZBdnuDZpMUxk3nwEv4DXEzNcuNKUzXXj6y9NqxxzrTaC2XMXHiKdXkSbfy",
  "key13": "3p8NwfLM1ArAP4ZPDSbtL4CNPUJmiGN8np6LQa2AsY2G3kjScvcpPon6LAdeyyXsvw9qKPhbLqzECsiuvKk6qKvj",
  "key14": "5JZmiNQwCU7944kDHLeXCbHER4SVVKqsMAwDibzGBQ8Cv4tz1uNwZgxSTnBxMqytJPg3WjeyZALe9biUgixHna9D",
  "key15": "oUzF61AXHMCqMYJMgE6KnCtJeZDJBKqYGzHEJdiMj6AhKycenGWtos12BeyT2DuEFT3yKdPdbrH3vcPQvbgkPdR",
  "key16": "4mmtYr3pjqnivzb4Vd63ZxWWS3m1qe2h9Tg5SJB1gy61fwetSrUa4KvRGgeDU8teB4DvhKA5dybWBW7KoPutxgYB",
  "key17": "4rkn51eWnWP2hsnEC7jVaUjXqJACKZv85CNRM3XfyfqNBdmByXxkZfLjrpHJxiAgGmEjJ2U2pSKnezcosB4dUP8Q",
  "key18": "4M79A7GcJtz9dJ4yHspnehV65yCN1HkPEWhXtwpdESbV4p3bVbi6nig72xpR4DYus7FAK5RbXKwCKmebAJh5hKyz",
  "key19": "4NDQb5aMkjcT74Ds5DntUS1ZJvCiEbHRL26EhdAxM17uVPz8Ui8cb91vy7KnDkdN9sw7skDhwGs8d8SXqrgnwwyV",
  "key20": "34xnP3FDWyHUwJgPw2ET9ytru9nEMsNMp4FeCKYJGZ6bhyj8dUs7BHvkzR2SLzWAwzcn6ZYyTRFQE7H6bqve5UGU",
  "key21": "3WPVKtJ12i3jrnznK72wWeboa99fuRQscAew5geMXCjWcvR7YppdLNj5yYQCLcLut7poi88YdUteirdBetvxdF3b",
  "key22": "5Bd2cfbwcj7awsDprs2j8QCY1Y2LLLJPQBSCLr66wACWVjBxRd891aJDFfVstYfbKMXACAsqo1xEUq2hgmqJZfNV",
  "key23": "4DKnX3idc9dPEXzjWiL3ALLKbVLH1EAeGuYm4J3G2t1b7GtHZ8HG734iQdJBoDt9yC9DsvvqMpE2BLwMdkeUWTgq",
  "key24": "3gVWxWLvpNH7fptLMERGAo4giiBRAfqGb1ErLc8qz2XY4QNFyXotH1FvARzU66WgbSQ6TjxHEPamX1wys8hHhs8c",
  "key25": "5bnBaVghR6BXfUpjNXvAwZBUTZijFf8RvKgfRmVhgqTpXWeGueJju71q1w5gGsxNPRkKyHG7tJaNedMwfjNg2rTZ"
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
