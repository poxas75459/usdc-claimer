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
    "4D52TkfXZezG7TkUgaitz6FMbtEU4i3qUDcTJAkov5v4VuMH6Gig6qZz9BidHW7eZXaXJZyWd4m1zGq3ai7suuHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y8GJ4N8HVE1meVbTXcQ9X4mfS2h4TznWqppdz7KGKaNSbEwe3TBton1VDKJUjeCf3gmx2J3LemeFAPPHr5mT8M4",
  "key1": "2679epkyeDak7CGcyv53yL84eDTbKhaGkbibuFqjtwYTiK5nYQtnbC45EfMrLUvq3xzTz7SUx8GccGWHQhdHKSXR",
  "key2": "21xPaRGKa7maDH7ScV3b7Ryy2rEkLPPbk6njedHVNRvCDANKXs3kC8xJ3GxCV8ZEBaZp8YapkzWqyAupZGw7fXR8",
  "key3": "41kChMBrEiX9fMCGBgZX6zeRsHT91w3s4d6n8TyzULfHtj1pwesQ9QAGhZqUd8nysa8thEmdqJmT15gyAgyFnkE9",
  "key4": "2ibNccNknq9FqmW31epA48VX68AoFP6UuCWt75Q76hjMADQBLwMbukbSgjvBNJFkwCVgqnRfkd1okEVmCuzmgGr6",
  "key5": "5uudFEGjanB9SfCvN4ss6pMASihYC7qi12kp1XAKPcRqSF7fKwh1gtSKeDcEY7GKMUyCm7kvbFTDV9ZhzLk1VLXv",
  "key6": "5FyigE8QgogZi5VEMJjXLWKvhr1ao82cv3Emf2oD1JypZioZp2cN27XxeDTtq3jSjnxGhrEy33m88WfB6gg1PxfL",
  "key7": "3L4WvxJpAW126tWoNDZRU8aQVaG8dqJR6Z89FHJEywf9dZvSZ9THEsKXehM1vMHDjdaHxx368einpyXX781xsm9N",
  "key8": "3jFrLWeCTBEEEeuAgUBkJ6axTJmkvJM7dB1S9ZE8tu4LsFGZjvABftALtBtUz7CXehX2Kn4dhKxAeSEnnncuk5jz",
  "key9": "327kqKfQxQnEkS2owLMWNBx3Nasieg4tHu2uCMqPz8D5uSdbAXSpQ53VktLYxY8oU8643Wx97UJmdDPZ1z4jG7XA",
  "key10": "Ar3N3voNF6vY69nvqJGV5GqQgpgV11J49LqNZGvb2M9yC5rLRZMm4L3UMZDZq8RjFgmsUg6ue2KBKK6BkwLiJZU",
  "key11": "2EoNYKiLw6EH1U3V8aSZx4hRqyBP9ZG61STbFLB4G4rrmxep3fzmxsEUxZS2EHoToXDuehFrETy7Zm98a6ADbcXL",
  "key12": "2yPL3TBf597oCgbKXGLd7bxfMPtGBHFxwdBprn7WB5Yt5WEt9B9dsJ5dXtnTvfNWzBq5tVtJtz9SeZwg2PWGxLH8",
  "key13": "347aKgajmGWrhvdc29stF44Bkc7TnapfrwtLhxsGs88byrg3dpeu8K6nxqHCTGeiuAi5PMERtkn6TbLqNemFv4FH",
  "key14": "4VtWqUhZSEGgLW8rafYgJPKsUxW58N4W4RyTfZvGcSTmPi9mxZW7G4Uy7cwDtrb2cnUhRHKG9YfLDw2ZKDWcL8uJ",
  "key15": "MNmTfZML4C5Qrjw4eUjjfEi1iPZESmjd2u7NVPm5UFLHM9FALsVCtbQKPkuKnSKBdk5Jw8J1oAEJpVe8sV6CeZX",
  "key16": "zvGPAspgwir5xCQGmySxoPVK6Y8FAMSpfUQbzritf4vsmmUrGpYs2ES7S1SktNhoEacvhvZdvXY3wpbSbxYsgYt",
  "key17": "2Aft1cN3Q2sBFpKhy8kt9fNHfWzbsySFECL2uKnCUXQK1PgegE1JZiWfrTCiW5TNafpikhNsQNhjvApL5Lh5Sung",
  "key18": "3aQmLczWg1N5QYAqpCnxL7jrACDG7q4j8prBnf1EQLwREskxZiyMRMjcen2pLTYnhF8KuQ8MHbNqFNVZMGzECEz3",
  "key19": "5F8v1QRm2LLqt73EV2EuYGB72XfHtwf5YgjpW3SwguqCisXCbetN5qwdCsis65dRyQS2FtmXLqeZ1gQgQ5MFWhbk",
  "key20": "32tCEjYW4KfiJFNc8N4ey1oZyTEdKnwzAfQdtbTuK4tMtuD3MZySAzZ1kiEPLcwUtocAxQq2AFJBagUyk7zkPTu8",
  "key21": "2q2NHJiBfzC4AuDUMK7jUe6TaUUcSTCvtgcYhE2UPAJTcuXQKDg58FZ8dVmN5AMDHQ783m86ZpQQ6wHFCmcJzZzP",
  "key22": "4C4o2vL2c6EpdcFUiDpHmP1sBi6c2cnLh8dxVwhqrQkFHsnuMKNyVKartRNjM5UQ6AXYGgmtdC9TZEMfgUGvxn4e",
  "key23": "5oKdc1G7d5XhgCu6ZQtVmPVdDMye2b4MqkyacKCbEBCzDFero12bqjuXoHp3A3Ax1baYy9dXveYvRCq47j1yN5bo",
  "key24": "4J59JdCmahmbzJ21kKa4emjjPMhRJG1bcRjPvoXktSW8r8VHA9tKVGrrQVccjnH18qQx3oht4Gtp2CFz16Lg8W6",
  "key25": "3Fr5b2Lkn6Yw3gcB3hC6i1EygFAinGihFK9CnazMaDRvYdePz7gvoFayzzw1U8jX51keSxEc9phdzGMn1iY1UNgd",
  "key26": "3aCSR8YqvnFrLSN8TsoHouRYLJoXB6uAd3H7hdXb7eJREZdGtnTK1uceM1FqJYeqSKsmqti6rnA6ctsuLjmH1ZUi"
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
