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
    "nRLWXu6czxkvPZw8b6M9PYpEnL1tNGhAo5yDBrSrpK9tKMk2waxJD8Nwut3jZcnXJnbaJ92HkJUSwKbN2GprX2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DRAqXg4XTQ2pLuqMuii9oGYoAjb93YsydRVN3U3gVuKPLX681wginL67Hkyxvss7ZoYCtqY3BFNoamXHET9pXGT",
  "key1": "4Y7MRBkdpePuS991u51bm5PdZWiXuPn6p49CgA765fuHQ1KivdxZddYMV1pXNdn74GESdz9RnCqHg1Vg9AavXTT",
  "key2": "do1UDPfDPP9aPZQitY5zcj5An83GiRvrWju2ZXm4psxxyzpc5EskNPjsppNpNek4kgi19Lx6gazyD18i5ywLhLn",
  "key3": "5DPvVsUHoE4PFh4wA9aKCRmdrukDvBCCrfchPtLH8ojWcyYfc37epohzNRcAw56AJvn1VuVgbXRuBRUt6JMTu86D",
  "key4": "5Q9Q7WNFv1AY7KL8KvJSgjTTr6HNkg4DxRnXfYxtsjRFK3x4khXaK5kp3TD6dRxzBU9DR9boxAzrcAxVyKufN8fM",
  "key5": "2SGhWrftfCEHW9z4JHVpqB1sBTA1SiFwBcPWsZJkFUmy8M4LhFAzbHCZQLnRGsSB6oGngZDzvE976GZFJzEaXHh8",
  "key6": "3KFQLNgCR4qkGX8VNo7wKBBUqZ1Qq6EcRJ6n947fsv4B939Mm4kknovFCHmPCUpaBxSm3biMsWuYjbwAWKk5LpSU",
  "key7": "3jS2Bux7SbCnfLpMNCjCsiE7xPsjg6FyFLUqp8ksk7DdUyfGfYzd85eCVgFnPmTCRdcGGcG6WheaT2Sa6BJaVxJo",
  "key8": "5WqB9R2ZTh2yC1dNVpzCjwnx8SnQYj4jEi1CT6nxJTGiyyrgvQ1HXcXSmGchHx9fWwod7rNnj3Qm72SK2zd6gBgE",
  "key9": "2ZgsFwHuPGXgYVkDf9RUYCA9XrrrjUXiFMSiRMbQfsGk6ifCao2h4m7GADqeBL13ZBGEpdNsYNsQZU4gb2v6kmsN",
  "key10": "28sqm9su2dUYzwHEAdXvy9hhjumq4KxME7Y8eN6Su6jBy4ydC2TPMcL7CwSX2gno4wbazNo51nSMNQLPh1vfkyki",
  "key11": "4ActADxZifF4o3aH1oJCw1ST2S6Fu9GRuF7Q8rBn1GgTM4rCtsYXv3LzhtX8CQPE7ub18ynJR7BFdvbY8tLqjxRr",
  "key12": "2sBqmAMYnyLcdgmhX8LxhpxtyRvBi4sD9gPRNBSDYWAEq1HVmXoHi63b3fs1aFaASR9eh19bhLZewWutnMK7qWhE",
  "key13": "28Ne4YtiUvE6hofUUz7crpgjBTJtwhMmi87F6Q99NjQaT4mHPfNyq3i3qf2tGF39caLT1bYPu5KmfMLWnKo3sxje",
  "key14": "5wyf7BKPL5xU974QgZjgXGzTtrCPkft4nXYwBdaKPNKcTBpNrgV1jZ9pGGa9Z9UHfGAD9B5dcWZf8HxjBXQ352Mc",
  "key15": "2ChkvxdXnTw9w9KeeQWPnem8sHJXcJXjjiq22rx5SgevBWHu5VvKcnYCFArk6Ap1jAhFZGGkrbkmhGMvhQCyZRNi",
  "key16": "2PLpsqKm6PRZzbUTDMUKKee1rWkQtYckZfVp8ZVF7XTRm2jcrqYAMFxTWaVnDpkW3LuYTLN3ayP3ofiHhPguHTeJ",
  "key17": "3XjT2HYVkRp4koR8MkhjGwDQGUMjdPFtvWJVoJ7VDrLDfr9zHmhdKwutcbcuV4pZWL4XYG7EPczFwvF4bfvMFR1F",
  "key18": "KVhXCrHvgosUjc18CzDBtrGdqnvtWtB4KTLcK355Ak82aoMJE6gxQQCwCM1djWcBbBrjy4gEvohUGQv3KeHdgVG",
  "key19": "43fuXhUsgTvS9zFkuR9FZGxcH8arbPFycQ9fPFyJon3m1zHVU9ovU9dSQTsH8L9YmrHio22jbHN97d5vmrzjDZmL",
  "key20": "5nVUskCmUEgD4htrHrWyyAqa3qGNRevwhtVF9sWTCzQhxdXqtx8Q6n6ZHZEQcHYnMPpNQdqCmC4RM6tRyH3uUxG",
  "key21": "DSdSt4ARKwBnScvWjvYrYgKtT6g2BL7JkBVwFWBigrSWqqv1MpkYmPy16R3xbRJfvJrm54Yp79maZniCbz1utEd",
  "key22": "5NczZwTmKddBX2k23nD6jtjErmTK7J9VQhnueswZohEidsoYHz8o3b7Jeo1n3j7CcUmUjBouw9KEsfisXodzfD1Y",
  "key23": "5koPDBzQDFsAJAxGWrPpVKAG7B1qhpporLCm1SYB6derhNwvtihHLBV9Y6hrSRWPUcV152Edp2LGEUWLYsPVpa7r",
  "key24": "2FMr1hcFhENxSQKpo6B8Xkokg4677KqhE6RT7PAssfQUKRcdsr4TBzXz7AvypPiQwsMte7SAqN54W4j3GwoDbnha",
  "key25": "4r3NiYm8UswDmbdwqjDzzkU9LtHTzxN18RXMAGiJrb55M2vtAGj78MMjKBBinMEUKVbDLhaahUoKicpP4dcWeA6T",
  "key26": "3wUMVEts4wwefWpUwaai9kiam3j4mrq7DwexBQ1uQgnm8HbF1Vfda3yMi9y1AQ6MHH8UfyhtHSUVVajqgJwo2FFe",
  "key27": "4X1ogGftiNJ3W7dihB1YNSuQSEZVW4EMakJT17ypzrqjSckRJSCLcvg41RSjYDcUQAhHatfkGnZcdKxdoEwixeb",
  "key28": "583P8tSXoo61ULdAB9CYeYje45ctR5QzYE1vfNEyhR4nkS66N7pLbsDpk2nKphsKXysKwPd8ncx6diPGoG1Dkrws",
  "key29": "3L3ZiaikzmhuNMustVR5hLHeBRKh9bnWqzaMijuDt8e8VdAmEf2PzJ6JdH2U7J5nakZEbBQJhi5crv2JdXzMjfhk",
  "key30": "48pFumdk859GUED51jAFR8yQmzTbcSWeixoX2JydnT2mX5eA1xh9BwKPtKd32xg2NQzCNdS489PSLwJPpX9DU1Mz",
  "key31": "gFpcATfgEjS6SNDAiaoY6mpa6nawZtRfuZ93pAkMHw3UsZNrSYmgKy4ACL8x2p6r74MatBzCwUjxMWvD1XLZxTm",
  "key32": "5LMpMnMe31owhwWJCFxH9SrGkzFZMikLpekgdqYN81rRrEYmMwg1myuox1eT9eFj7NTnrNpgeouU4L52x79CJDje"
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
