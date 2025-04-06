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
    "5AkFhXmGN18P7inYpEYEGMoRvM3GTJvCYEimHR1CimwsG1zB4oY1V4Kz5jiJRAs4YqsfsS3K3vaVBWc9xPK65V8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9bR5jLJzw9DZFzGqr7rjZrfa2pEfgp8NUHBbUpz3eHRKupFbhEeqc6h2A7W4ADd7XcxYUrRe2h43KQabmcs9Rw",
  "key1": "4Dx697TwSZFxm9MZUch2c5Gv5PGbgibdbypamKFTiVhaXG2Msh3T3Hssbf9S52BczMBpTm5BshuSRh8E63x619SS",
  "key2": "NcnMjSd7xPGp3mRtUDsaF5QxstPhNFP5L8uRy4cJd2oCVu5M2PT6AaUAWJVYqrvbAMCcD5NdcAK7QXhMzBnLVHm",
  "key3": "3d4tZ4R1kUFFUoMdY6c5gSFQ33puKYY1WgTAo7tXBh5FNU54JLh6EgESjaXGpwiSC6p59QAYAhCWGehmBgA3vP2C",
  "key4": "3uu2P1tkWTVQPJukCkXydaSTRVDhfoumTFuidN6RBJ54AqAVGzaMjnB1MjbrfZXt7B41bi7BVj8xmbNxz4GbMpDy",
  "key5": "2c5cfNAnUjiV6Uob1ay4p41497ydRJ3KhXqSFM5ugzZ1fcPKKYFPQck85bQCbfHPzHNLmL6BrTxMxwMEnmnZzfpD",
  "key6": "3KiPwMjqRWmjqfksS72hcYtyeMsZrpjWowM6Rkjeq1D27T8MkFAW8bgKczqS57sbwZn64SPrgBt4QW7qH8cYdmbR",
  "key7": "5kmtMsc2GfCgKQ7WkAgce6tk32uFCDgaXanStAaVraDK2JCuV15B8nZ9eJZT7NymWpcUmES5WScaTxkdRDcLBKuV",
  "key8": "3skxYpmD9J4j28PhCGVZbiuNuenvdhntZG49EqybRM6jFwThLZ2aw4Xk2psw7N4yJXkfTdFNSQ1aEGmJFrem4wep",
  "key9": "2F4G9dT5pzj59YVFuiB1Bkqh3juRErCzU2MTVmXCsezKDHpLsLSdqUhrqKSDnPZDJcP72gQW4Qvps8HNXSVn37aJ",
  "key10": "2NyDMeu72HubgYTsFWt9we7DVx899o4tBTNpPwHvqSvWJSjccWmHF1hS1y5sYGE5QMyog1j4BiLC56PfreNDZUNk",
  "key11": "4s2aA2AyPVcu6qmf6engWMG7b3DoZyxwodNdZXw2pev6tfNc4BPNBR2KzvC7pDnnm8t752VbPhaNymYEd5Ys1erX",
  "key12": "2Ry7eZBa7qc9uJtEA7MTRLfzUA7sQ1twjbrFpJEL6GJd1TA5Jfb5zTXg2yt58zkH9mUUD22REYjtNPxcsJBzPAC7",
  "key13": "41CdGQFoMEJosut9LsXR9r7PQmMMXqwF17MsFZeiBfc3bRLGbkXQpZgjLXTnVwXMJYLLFZ9sbNajYtMkypR1die",
  "key14": "2qHg4z8aEZtTwLa1hroeXpUBvQkBmnAwpgDF5cwmDrFTQSzSL8VTuX8rAuRaqW2dXcLTprcqUjztLdiDwpGWwZnm",
  "key15": "C8QXhALttLZmK3mRbJRXCXzvBvcgjpRKJNfCYGPe5CseYJRewodbTzen3jLW29dg2sYG7rRxPT3HbBRrzEUZpYB",
  "key16": "4VcatapEqc5MRRmWWLtXV3FesEYTTpVGcEqaPMhzAECTRG7TYNPzwasHgXv8NsCUtkAPzkAPjU4HyogNjinJdQVr",
  "key17": "56c69LoEcFPSPTEn6LhFvugdgnw8e6RCs5ccyXwpWuHycMKi8JhVjE33Wox5H9Y3L7JCeo1JGfw82Kx6jYzig3Jv",
  "key18": "2YUqUh6RdGEuqupQit1t9LANALPVzZr7MzpQefiLK4YuiFUjSdsZ1AgWmgJZhc1CPbQAhAh56q81WWdUZG69n5Dv",
  "key19": "42Rs6eqaQSCUdW5TNjdd9rGvh3giGB6QLC63df9YfiHFNRQRECmBm6M6vGN1rhKePR96HxmSD3HovCjLXmLp1ia7",
  "key20": "4pz6SaWXLHSZRo8nNWDELiRS6zzeVKincqok4FkjeWj5Y1W9pUvqWtAzxB2DTEMcW6cBV6a3nAy392Jopw45zYF4",
  "key21": "299pvUj2mWedwRhot3SFAt4ziLxiFoLmpd3VCSsyTfu33zdgibh8oedqmXGZLZsyV4AnBXQCM3sSFdh5UPfoGs26",
  "key22": "5B7njFrcJYiKgE91ymG413moj8fTwjair65uSndZUA8GBiu58QgY7KawVBnuESbSwQ8NWVVQXASQqQT7cBeHN7WM",
  "key23": "HjEjqdraoEc31o6dVqDFagNX8oWaid1jWEzQwHFMLpwL1xReiPMKEHX7mmm1Rkf4kMNbwdxDcHX9ZAx5ACWXfQT",
  "key24": "4cqKb3QVvUeu6new5FFdNVjbACbJQYvScrGdeDHxcpV3skwdutSut647yp8PPUrraNrumGmR2mDB7695VUGDcvhH",
  "key25": "44SPqArdBuZK77RY5nfMeN6jBB9hsavuaMzCTrYL1wDKw91ynE8iq716URKAYVW3MkoHyqmkxwneWT87bbWtTP6R",
  "key26": "8VvJrTJSAwBUKgLjFkKi6gE7BxUKFyDKuLmWuwqg4s5odjiFXiKLbq4joftMuqZm12FnoAdXMXMatk4GgKH3WGX",
  "key27": "nbn9JeVjZdv9NbR6nQthSx7xZd6kua3trs7Lxc1yrS9YZmtD9j3zwZvieq4WiQjkpPa3na3vcBZvj1yyCPZyKxZ",
  "key28": "3NsDsj7AjRB9KLk8j6FDpV8kRXBwZNRoVTmQtLzjcBnjYnFFZPLNcSixZhnUmASEo8Ft3ML9Q63EaiGDhxMQ9Wak"
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
