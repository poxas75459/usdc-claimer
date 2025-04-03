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
    "58VYSAhUar6PDzxYipixChDwAB7XuDp9aTSUp8LqcMzhoBmcafNWcqHVXC2A2C8PF9CYzJM5MG8MjaPYGN5J71cT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GTSTmZLXrxmPAAv8P4u6k6u1FhYyZ97fuNCwtX2Kr83CS5cPfttVYwLdQACWkSPi7bBrnUkdJFFczYk26mkLSqh",
  "key1": "2PFtWQuFnGnYrugXbYJ7X15WoVyGzbKPMgdwdLBbvE4nTuoS6PYGRd6b6bCBPDcA5HU1QZSppuDQJd8YPVoTc8DP",
  "key2": "3Lo91T2TcXmoTEP2G41hadoSGcDSUXpDAuJYjkjzU9axJvCGyq95ZqbShMopfNY5sVrirB84stG6cpCSw3HDcfoV",
  "key3": "3anLeism11nDoEHaFEjnUr2WjSSXierEfVYKuQDmuosW7zeW7cpHz8XXa5LfGpZR6TZFNtrFgCzAVNgqy4wFvxwL",
  "key4": "5kLr8MWJ88JMoVa7hpP3HY4DNkS4zGz9LecqeULZATEB6wY2c9jaVuJdXcwQUrRMWNuLwNUBCXU2BYzDAMsarvKr",
  "key5": "4LyKaowEVsjRxS1qAt3JWQDLZdGGFDvnocuHv5fMKYcAeQCNvmpuymVLD8zjMGqySWEbBJJbFADigQc1fckTj3S5",
  "key6": "4mLJMiJ6yxtGqNM1JouNHprH1bSMwYmDAWak8hpakfDbfnPdWTqsTXpNa4K6BfXbHdbwJVUaezWKD4KWrGa9XbHP",
  "key7": "539g77PRzFmedp6uyjy2AdUrrZmwziZgjpzo4BKkb4gbj5vAx2C336648t84qdDEYsQ8mTSDhMjT4q693tVnKbus",
  "key8": "2m1PemfXiSUqnRfE7sLw6k9AaHfbm8ywujTX5ATUs6A6Pi562JPF7JT7cBkhBnv2ToyaaRydw4ZHvfbsArv4F2MY",
  "key9": "4QPwDsZ7tiZeG9ffxe4NMzNjhecEgm95MWQ7hcotWxeGWdbjyCxvcbGc2pxxumRjgSjyr1Pdqq4WfGaEMBzVnmUk",
  "key10": "RXS7GJUTKP65xAU9tQzx3D7mGFXwbTNLfM8LYvWdDrpEPUKXtRadc1rXLHF2mhVxAf7JYWkyemQ8e1fv5TDXkFy",
  "key11": "28hqigrBLfAFhwsCYBAH4jyXEfzrNoYPeQwTMS3SxrTerqiqi8FhUMwPYnhU4cDp7KrHpQdjDRaitXk3XXWiq7CD",
  "key12": "mSHyG1efBzpcjCyRfY3J1wuGaeMDPmMvn545iTMv8UJMBo5T9wdL6qcRytsyTXLcqBCxYKmMh4RYe3xBAqV4inN",
  "key13": "49LvAqE7GY1hYRR3J5uRtXpEwgY7KjkhWqTVx99kPMMEuEQ2f2x8chHHnjX1BamgHpQ62a6xqGRdRC4nu5qZgwh3",
  "key14": "2dHFz1WmnRowiwgxfZbrtXZ4vSRwWiir9chyeQAKzXSMBqNq4eSA5wkESENfwfSdd3Ec16XtStxruxEC8DfY3n4U",
  "key15": "zvS2kyV2ir4D8ctRptcZ1vzD5kfya19Bz2tPUq3bKvvZUUt2sndnp7NGRUqVr5uLBPyUQVHqZB1ir881FfHS31F",
  "key16": "256CHeCyWbw7SdrTAMvQXmwKxTpFcxccjiSTUK8NZNdbUaUd5JXh2H8UmMnjbi3Kqgw8w3xrEt4uxu478TUodfi9",
  "key17": "4DkTqetsdZEeyy8HJrLcCLkaZiBi6kdQwMEYymmYymoFs2W8epXpL3B2PQvJw4D5boB2fE4Qjbn8ynKW3ETHWCZf",
  "key18": "3L8xMtvxLVCVUq1sWntQVGYrnzxF5tnhe8vensVDaiCxbLVuH1wihXVuxEVwc7uy55kCBtGspGSRUehUg3QNi8eo",
  "key19": "53aLmJAs5numfzZS31gnsDabAwPJRCYbEX57Pshrbhn8ktV9MMwhEe5KkxSZyhxqGj39ymtMV6iqRvUoLLFGM5PM",
  "key20": "4d5aPHcja7v7nwPFNKSzKGCnVvqH9vgKkfcqdJmRkPHGyCnSPQ3EV1FYVD4tkbM92YPnurMdfTdt3purEM66K5G3",
  "key21": "5UskHv2KAvFKGgcnAgbnV62VDpfASDGVc8gv18QSeux2uXu8sC8Eehby8aKZV8Xab54hS8sJK1fDdY8MNH2mRbU7",
  "key22": "52wBJLmh2DNT6EDRBz3XApUF7vKHjtYVtUWtrvo6Q4Q1VcceNpH2L2t77i35ca7HfoEMhzWTXETj4kG5LnzuGPCU",
  "key23": "2fLVCgLoAqybfbmzHn2j6XK6BX89nXacjj6SBhNWHdD4vEze7FmpusNgmr6xL7DC2VEe99izB6yDXh21tPPumkDd",
  "key24": "5reUak7mhpgHWKtfs81Ux1tp39zJ1vHoNQFEuQMLSVyukw6THRGMtixsQjT6BAKTmqzWSkfdgTbQMDWeQKVLVw5f",
  "key25": "4WMB9eYweq38KvazHGVPXb7AuVQwUs87T3NiJXRhtRYWEoiu8LzZDZaUbEDdNC1WjFheZfDqeEHLHLfEtuFXXVRt",
  "key26": "2xcY3SQXCTYh2fnMujeRqghCJqAWuezakEK6e7tBVq3Wz9utZkbFmwDUcuGuu5zvCtvktkwduvF7aJcYCrGyqXyL",
  "key27": "4KwgdfXig4dbugsvmBhhHviaZiuua1wo9CAC5p2BntS2toyQvLZ9UxP24K4XtSxj4qV6oyzyzykc5UxG4g95wF5S",
  "key28": "vpwWhXNTM9k6BNgWedNAbZHRtR8p6u4kAZpEUupKJkTJN1NaazNgAJ5DNK1xPf4qJ5ykJSy6PZ4rFEQXfSbQd9Y",
  "key29": "45LzwNaUMj3z29C7sH6cDpEczM5psNiJkJbXnJij7TQNbDbFvo2dwKidN1MtxuowuCmvcgyTg14CW5PuS3Rmtgme",
  "key30": "3fTFroyejvt3hwTwJztvNpZt231Bw7hEUDD1SWATwtNG4MbPk7LFjJ3eStEWWGsiWnsxuGX9WocmDXD7Nc5gnzz6"
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
