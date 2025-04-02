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
    "4HECWnAkFyP5v9hFGReJ7YUKM3TqEiVpuqYNPE29yqcth6rHCvAUqHDaMWS9gxQAq53Qb5SHgPbsefW5icaxntuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DuUyniL7Q2JUU7xKwpEtyLCfzXrVvWxbZvyuDHNpux5k8ZZMmMiWxoRTp8ixjtB4FFXE2NeFmG5cHwcDomUknP4",
  "key1": "3ZNUfP8gGJhY5apYDVvAa95rVVnZ1YBvV6ceorqPGNdzmHEVva3Vmn69GaTs4dzsiz17hgNio9AALPqEtiiwU7bw",
  "key2": "4YqTvLaWP3KSX8zPvLPWuZGfhAaYSduBnXd9bc4TDFfuF9yzLBqQSGCa6NjHdfVfuh6KNxw2XQ6Rour6gY1s34av",
  "key3": "377AKpuuoQfRzCcXntvsuptxvsnJRpUA8CsCrKcqUu3VuikuoV6cvwnMaBbscTRK1tiipA4tqGu8qVF8WSjRCqMC",
  "key4": "4qBZScsZsSgnUUfxeFXEmiwEhtUx2zpsQLupdGKKJY2r2xoYw64UuD92JqmQmPHbXCKW6wD4tT2Qc2i4mQnNT25M",
  "key5": "2rLCeKRy1DgcZRBfhGpY1MjLNdRFpZcDHTVwCr5s9Z9t4NLFXrzRXRScBudwqdbxUpjQcyJPQCeXwyvc5jtghvNz",
  "key6": "1rzGiut2TxN9LfRQ4BwU2SUbVoW3s6mAzu9dozJcjQSnKC6YwoRTq33kXfSQxDDqzARUCgTP37CjNCG1MqJ8z9W",
  "key7": "Zgmk61Lqav77wQqToQt1RAqsz68vuAfpANLikkpPqfMCCuUJKzQ5uiFCWkxiNzo1B4P3zuEhV18Eif74bTryBK6",
  "key8": "2fkZmwfA5o1HW3FqurJ5EJ7oqKJiTfGAS69gi8bYwcjV5urw7DqnZvpGA7JQbFap48Ex1c8zPWcQCi46hhtnjBej",
  "key9": "5eXVumqm683SoD8BvMqtLvUtqgjm3EWEYZ2BD47Zj9Ec7T5eJvCsEQY4A4ZhrHPreKeb8edzUCW2X5tEcVGKbsQ8",
  "key10": "5PgkoF9qdyVoGuaDJQ6TBJMmeUmu6oQL66qemEema3k46XfGGEYGUwwi9AqkLesravup9NgxnWZuZnyBRDj1ngQy",
  "key11": "5LLobrmYtFeK2Dqr8D3eDpd7BLLouJsDz7p2Fg1CUgrwhmh84Dpc2tpAM7E4hghcFRG69E7DV23nnv1XFNq3gWwj",
  "key12": "5Rgvq8YrM1vsCgWDar4XQXnJrhbPBpwjtjFKAEfcpjfNAXWQ6bBRCUWvvSucQMjRoLf2dmtasm6rgQs5KHijFmBG",
  "key13": "42tMbBwhVXmBH95hCQwj39p6QKLgc3GbRsXTr4DvKGPhtuJJKLvRCeA11jKQB7nkh1t2LNbWrsvdihzPATWCwggi",
  "key14": "32CH9uRSFENZJRQm73wquCNA9RSCZg2uq2nmjqNyk7JXZgPycEcRfKuxRBdEbeh12vQ63jZRRATd5UugMwpV7QdW",
  "key15": "3divKfUEgqaJEteanCeGtGpwbSWcd7eGgySSRbX9KVAukPVXbyFZiUqok6zsyMQpVhEaYVMqVbSG1Wrw7eeAf7JU",
  "key16": "4mTnN3T1aezfjr6QXLgWwiCBYYGaE7GBocMdYuLLyiguA4j1v5GaevEF6MCg7dSC9AK8vkyjm9yJvoGtB1EBuRrU",
  "key17": "GC3MWqLN3dy4ZUYWV4C6wGPCFTkg1dxBgDeZ9ZkxKVb78yiohyYuHAmfPkRYfKvEid1wFf9fPREU44f5Hi3prea",
  "key18": "67fiMgT164qsgATGcbN5inuPCHD9M7VwqWrCE9pAk8kothcJSCMee33X7rrdW1tbr3YrTN23wpEAk3D3PB7P34d9",
  "key19": "wEBWCiLB1QDprojEri4msUjwQu5Bvo1QLnDLQHYbKE3uGSm3ajRXnmsUJSzJPKMsitbgA1EdYmnzqCT3WANPcGs",
  "key20": "2L7pFJSJj3iuDf8ENEuGAKoCtkr39a9i98Y1QfsWvUH3hooZy1jcvgPNxYH5xxsRcPEHjwdJ2c7RZ1Ff3p2qpbib",
  "key21": "sF75E3E7eS7W8RMDJCBA6pH9wWXwhMkT1cnykUhg7aq3q8xQ6uZicYcGkdLX4ZmwtQXEU6kN3yfVEKLB8aPSpip",
  "key22": "36KuXAmjWMesfNpxKtDa6cGZYKJSM2W9Gt8W11XjJTPMmCga1mnsJe5pHXqQSSsjt6tttuCiFAsAdEcp15YiTn3E",
  "key23": "2XMY3tUysg92hRBak355JZcukARv8Kinu2JEQaopN32dQZrTeLjhuwvzAPCLHSPyiQNx4w4ERUASWsvH4G8P1qsT",
  "key24": "4Vt8oEc4gB2ct2ypFgoJg61xbKzGPkfogSAXpHaPzLwToGCro1rEauuXE3MDhkmSzPv8w72gsTD3SMpLoCdTs21u"
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
