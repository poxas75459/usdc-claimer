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
    "5am5oRxBBzhmj6XnkidfE5woLLUG8CnG9gqC2pFkbyHVRmfNi1PNK7rrwEV4XTw6kF7ZVKAfHu41SPR4Dp38pm2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nm21Fr7K6EqNmVXa6Pf9odxqpiHsiPVfjXDPpWEWF6beETfdwSzj5p46ZoRNgaeHa2YRpFMh8znBjPBAbmRs25w",
  "key1": "29Bx1mByMMHTxDvPB8QBt6qr9zWhmYQzu9EH775WcPhLiUYAx8ma727oPNzikroKVJLQojGY9t1Q4A6BDwrjb1SM",
  "key2": "TWskp1jWmYcX3sxYziJPA8sEo9uwN4Nvi3xnj63uK2evXqyovdn56KGM1jMfSPHsDaZT2KycS6xCUGvpUwF3eiv",
  "key3": "2CwZMEjqt9A42kyUaRKnjTyaSFSD2wm1HZKaAK6hsimC4Mch4fSddY8ZDj3xAdH4KcHSucKkSD3pALrpo1FycDf7",
  "key4": "42UWQ9kdUiVnej9bohUWihH1ePdGEAmdWw8gXDy3aE4CjFoz7GtKDMdy5FWUpseEzeqXFmqhTku7roTwWYoxYqRE",
  "key5": "4TyuEMrRiUzePqziqb3rrmBxZN6dy9WhFsJZYNLmRk8umqhMTMDGTF3jRP2qjyKyVb2k8ZAfYombWnX1xy1YHJTN",
  "key6": "5y2Zf872frSnHNA7dijYqe3D6srCcY5zpTF5m39aPRcp4KCNvyDKzqAGUWpC7b7Pe8EbdrBvYdviHyGwewCXw35d",
  "key7": "24JhbYniwifRe6SJwTPiuv7yMVY2fiS1vT7DFDrWw7R47esPHzbkxsZFww2V8zSayhKmNjvqiCXgJsxy5gXuEQPH",
  "key8": "55P3tXqgdMvGcCFeCYeB5RYUYANq5t2Ghk8XMTcsXpB7yKoN7ACo4zca3YNSnf2xxEK1kSC3fGMbNTd9fPkGSQmZ",
  "key9": "3j6JBZN2xenczHQyRm4hMoeKxAeDCPGneei3uFaCbWouYLgn5N6Y5wkUhNJkMsuDsDUGxTEGiRuH6imidDpBtGX5",
  "key10": "4CcYjukSmrNSHshXAKR7se5a1GzcF5uUuzXDoSNoH53pfxA96LR3h81vGqRtxntRiR6LiRa8aQg3ArUn568z1Yu9",
  "key11": "3RW8APgpTqRNmZNbCsC4uisDSQi74jhRcKqvja3SATuvs83VPqZye1UrNNJMj1ECp1mKWbA3Hv6uaWJY965hB6ar",
  "key12": "3vyAh5yGUEivhC6gVP4r9GRUCsmremATsf2inu66wSXgqEi818id1UvFSWedxaH61xnEwW31eedAAWx1F2ayMJiJ",
  "key13": "SMB49UeD1vGk5seqyB6252gKtDLWKFxf9CMBKfr3kWiVNLyBZZwivru2w61u9qR8tMuG68xksx2WAojTdTt88Qu",
  "key14": "xuwxxPkegSd3c77WPk34uBkD1LSKvBiXKHGiBa2Xd2vsWdGFczFqBksdgnLAskLfCM4pLsSYsJm1bcQh5bQrCS9",
  "key15": "2QBr22s8q5NbXVJUbpSJeE6cx2aRuSghbHo3Lh7KbZRtW9CKyvCQNQgpXU7kUz1mCFTGeRQ7dQm7guge63jzKvN7",
  "key16": "4fUuNoEvdMpyYoTHkoPBSqgfd7PDQBEp56gc9KGjcvr13qiJmcKDsNBUXHG1NX3gK2dgKoEateXzoMs9EFXgD5e8",
  "key17": "57bPA4PXAyH6wZs2h2JLuN911aQXHbuH4bV75HMUJwf9scho9jN3RuEHs8H9Dr78xywUzwEftmPZeRQtra3dMWv9",
  "key18": "4qBsseQNy3bx7Mz8g9PyUU8d8kh7biiakkksHAT8b7BXRyaHNQf3Yb4Y7UHj9EXf8d1r96fsGrc4R8Q5pPNr8yNK",
  "key19": "67mBsfVqVUbJEKdsGfMKxEtVF1TP6qhw74msHozfR5FSdvrYMCz66PerRkpzGbSFwrghhPpLqsUbqjG1wz4sHwWZ",
  "key20": "4UEe9nudugJCd4NXKk4fNzM8Z85NL7fchQFgFP6wcKse8tmvqS1CLZjJgLTknV6Z8kkj4znrr3bUp1BXgHsBjk4T",
  "key21": "4PYduGfJcuYJNSbAEeW13V9HJeYgjRkqNH5sLPcAh7vNK1Lw6XY7uMjLEuEEuk8E2paZZRUcxGWv2HpC7dWLaouL",
  "key22": "2NSwWV5u7Q4UiKQGW3kBwcbAntw6m52gTKBjyhx5F6qUsmXLZwZi929bQmpQnQtJcm5PMERbAduHUL49bkfjuCZ",
  "key23": "3c7aHmUyZNJCtUJ1r5mTuXfToLigBEkHFMxgzrMEPkgp7tRbT9qHzBAvC7WsG3Lwe32HGgxPNGjXDLLzTmYiU4Tr",
  "key24": "2jUwZADaQACPTCZWhSq2pG8bsJJA9qBzqMUnMzTNb4oHDgS6o3a15ouk26AQXuU7tGF4yA9FWQduuFyjd6QsjAZ",
  "key25": "2qVDH5itdiNpspcc3gs5AoiZ3YbfmqBDi8hisd2JaQzxQQWWmZcjGZGYhh61mGgwqXVikWuTVGcbfhvThJumTuQ9"
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
