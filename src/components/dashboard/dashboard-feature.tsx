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
    "4nSvamdJJjha4qfSatCb48amhwWUBBNRFPdHHbfgzDqQ9NXh76K5j6v6GAYeBTeNrBMUjsU2DGprwJUZ6as6bQwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3StuuVP4Fm9LdHt6nbG8PB48SjCh2FJyU4ewW96oTuwESF3gRH2dL4Z3KcC5q23aHKhjWheRd3DwCNAopoKQwYHS",
  "key1": "5i3UKhnZdrsiz1enf2q8q7sd6acNUv5Ws2f9nzvDbKU3HbqQDoUXC1yUzvK4XSt6F4mNDMZqGdqgdEHEH2YJweB6",
  "key2": "61gtam5PPMwKgPrGD8YUxhmXPw12L3z4UMyTprUrp26nZfDUrTgGiEqkzTXZubBkCEdnp1nDkVcouKrEUskhcrYQ",
  "key3": "3joCB4p9DoaJtethjC8NQZqsdZrFxR85BfEq7543HfGEk9hLE2AQWGtD35W9N9UZZ1jaj4WXGuAEtGZpoR4E6ZFi",
  "key4": "MstFpt3hwJXRemTLx7NLhtFT2AEb2M96nweheYCWxmwGSEgpC8qMsk8M591ssxBcytu5j7PLbtQeuNLGU9c4tFB",
  "key5": "dHXMyiGSnAfhTyybRjAvTvGWn9DyJ4rGVunBNQy2cdhwwt1sAG2eQT4tpKYpz1XMnzaHgCdX1kjoALS15CjJpvE",
  "key6": "4rZL5J67g9EKEpKpmGpeTW5nHkVbfnMtUDY7TcZyA8fFMYvCaTb83qfkcKoe4k1Bhcrv6Q6m9QvmyVkDix6gRxme",
  "key7": "3ruK6mzRpVPJJ4hjK9tGaoAdJd8bXodpwRLUWeHLy7z7Qquz3R2GoUceqSzyHzD67mKAYYDbZrRu8wNT8DfSMUh9",
  "key8": "VPJ7Xa8cAE4HmSKoHJafC9fXGf15qp5QTua9peTFK5B1hr7vjbhejJ2PLEZvtkeuFkAQrb3zBgGhPduKENvwqQi",
  "key9": "4hXeriEm6zPijABhfSy2tKi9o2sKbFwNNiQhPpCWDujaRSaAEYoWdz89aWEKcN46DSUSh2hmz6aofuzCyfC3ynAw",
  "key10": "66zd2JEBUiTaBwELK2RucxvHeHMY5prRYzMRxZR1QqzmcnfDLvjBTPdfubivZDD8kgU4aFEVyM5mJ5nKYQV6GKtf",
  "key11": "3YGDUwMSVivYoAyQBLcQx7W4GEQbAdP4ADdgQnMvdRTHHNkK8cCp9aPam7SiFLkfxjb7EM8mTe2MLuKuvMTZKzGy",
  "key12": "ELBkD6QGWfAaUMThw66donuThvywqLHMa9ov3MQjd1Y9hkP1KZvsjsk4uBb9813RHstSo9yxH4Ai65BwDLBReD8",
  "key13": "4GTA9oKVBmQbMdEt8APrXC3aDMxB27moL7MWRww2aSxmUSTFYDzBemFgd5tmH6T5fXkBBaY9Vx79sovwhEVMpdm4",
  "key14": "3h97mg2TPhU1xcaLetRr4obLhqkz56hexMKnJuYqH9S5shtpRTPoNJRWXAGacEhnQhKAfSMoWH2b1xkVhg6xPGnp",
  "key15": "jEUzR6iy1JBRtFN2shsP59qgQMHEBw3HBvSsMvpMNUuoqpraTyS1LgHFwprWdhdBf61Dksoqm2Pom1tRcSQehcS",
  "key16": "3fpxkQc1be7XKvhGzCGjpyUz4x5u8fMoo3BGHrwZtYdq66kAnmKatjhUP3HZc1zD4mdxvhBr2xpud8uzcv5qxKaJ",
  "key17": "646X6MEAFsELogeSwpe9RMScCwUyjJ6Qouy18qags4cvNKpAhqF1HQ5uZRdMZbRbZnef45BCUQJLFK4yarUqFWY9",
  "key18": "4fwnamE6Hxg1VrXJdqJ2ZxBNfomrdrk75PN5FLJtZvz1x9t7NX8r7jMGgpgXatHEmrhBF6mCSs4h7SPpDUM28CQW",
  "key19": "5rRLtBHe2P46txVXJqQmtaM3a2ttRNoMvKQxt9mwksdMt1h9TZrs4hCeDYvohPireRxZ6ANTeMuPTPn16oDtRP8K",
  "key20": "2K6Mh4vuaHT9XbfP6yUVueUMdezoUzkdnSJZPkqq6v5b9riDCzXj85H34sFixtb3hKUELTzFjWp3N2MV5XbfJk7q",
  "key21": "54xiuSADPCGoNrDiJEsZhVbQMehh62ckLTkjRXXG5bMYvXurtmY9yhkC6YZbgY6qwTjFyaYrEMJrZQCsvmQVKqLw",
  "key22": "2Hdhk1yhHmhksgRXtRLUcrMqfgoJQWU9wdCB6Nj9XyBtSkqAvqk9wKkVr5inDJdt5PPaPoh9jQPCPTAnUQSSHoNZ",
  "key23": "g4DB53afWLNFKxfze3Ve3EVy4YHkkBJYYoEFEB9KrgE5E3rcqgVonzur7nhLkYpDf2pt11ku6Q1YLEL8JDMBwnR",
  "key24": "2P2zMTt9qPxuwWUWFCXARTUWm5aYZo66wJwxH3nyja1ciy5moxKrPWaReuCvkuqrkFWtxuZtQSwk8ZZBLmYAsbKn",
  "key25": "5RLkadGgPrRYoWGsWFLE3EweX2qrLgwJVsGsxbRAiCUZgPNvKV349aJkjdGXb3yxYTt5ZRUA7vobLbU3G6kuDSQi"
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
