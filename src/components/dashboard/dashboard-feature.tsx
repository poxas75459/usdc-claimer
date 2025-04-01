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
    "25Utg58pv4ozSvuau1hDFiRUrQSxxBtg3VcwSdSBmj4fvipdXgmhYTXnQRBeAb55L82vAfGAAAJARFGajEJJjrZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fx2SWoauWdS5TGvjxdwAtQsTEinwbYGc6JgoN3eBaEaoQKyoAi1p5oSBD8seMFYuTiXHCj2RS1KSVHQmzUq1QvK",
  "key1": "2rbcgY8wD9hgydzWFeki91ZAJj3xE8xBdybWa1rtfEqLV2neM17DbAvcbkLZpwUYveKA95HXvhGJ1YSaTffoGww5",
  "key2": "37YSUZQoRK4mSqE1jJRQAziicTzRkh1EGxdZ2QgCReZhgntZRRiakMWSkqu6gK7GB5PshX6Qyye3jv3No2HuVhvo",
  "key3": "5PNCLTNpuzhxCHdbSW2R82mtqPzWjDGT8ZhZwzjcCvZpD9zEzLb4CsaR8RxMV3Yb9Af2woRXq15tGtKDF71aoX7Q",
  "key4": "5gN8XkWm6M1wcYPQFU6ays8e9xstLkyTXhPDugg27g8W4QcH6vgzrFEG4nu9C59jmerSHj7DC44hWsJMD3tKjAQJ",
  "key5": "4U5GBqspAR19QoehKinXgU46tMoWqcRh3m8zXn3K3wgofNt9LSfNvrhWqaHtjKcYgasPJqYY8kNkuZasLPe9zUih",
  "key6": "5wR8w3QtEKZNMLNnFCD9eLnGSv4gHaE3UM4ruBa2Udpj7jvaJ5oAQAsyvUCL9Jo6H8jLB4We4734M5Hx4RUgkmPz",
  "key7": "4qGsE97MiFCdSrAC3GnnapnJ94ScUotEWmp9WEiT3p7FsZ7NsnpA17yaVuRKY447kqEYCLpA82EThFmTdMnQRSZz",
  "key8": "5SBH9BZUvBbPbfsNugpyX4K33XTBtaMp2cBy2UXVKk9fVWDB9fh8fKruuNMqrgAsvGQe7beD6NQMgUNkPrmEEmRE",
  "key9": "28uWMdDJr5rxccfH5dn7GcQSQ9a8PrzwL3Rj8m4cmLjxM89763EX9haaSwDw2fMV6gGqsQJoeEY22TnCfTusx2cz",
  "key10": "tyad2XmwpJ15fTBYKTNMAdu9k1az7Jc9oEXmR8ABnSaAg2yh9tB9G7DTPjXZWb8HD2idhBoL5UVC7U4B9o2gqtM",
  "key11": "53yP75jKrydKQ9coDyJtsPvr8jTVBrViK9fDzHQJL7bVLCLpwmSYKnErXsX7Rit6HiyRLKBXPwiegWcKTyhs5aWt",
  "key12": "4m5PaUvFbr8Vaqc3sjNxp1LsUDQNWdBCthD3dAVhxwnjUvuqBtaVzWSw8XFZURfj2A6KQWR556k982Led57DMmRW",
  "key13": "2ZkcissiXsmm9yhPamVCEBEF8T5NPBNHVw1CgmZF6H3hbc4sm65WTZV3mE7f65B8Sa8bdjodbt4eU3eqv94cWbYy",
  "key14": "3Nnuf5kqABD2rdHzdxD4bbbCfMKRS921pNWUCA1hqXGJateXYP8RPdYqBEhvXqAUVu2CWCTi3g6KzJKXXTsTj9kR",
  "key15": "3QDqmMDQ654XD4tguEqkbw7qbNvxrFXVHLVGHwZToxhB1ePydgufwGQCrgomJTJ1yKK5YsLRNn8v2WFh9JwFDHmw",
  "key16": "5jXwDK5qftPdZN1M19aaL2N55FdbdFjb3cTSJVRnz9ifUHqwahH4sko8S6BJ3S8YPzo3jEj6cXqt9PBDkP6fB4SH",
  "key17": "5Nahjio4KR9ULcRdDgLtvEwY4SDp4u2LU7idrHCDD2FrVFYDZP1jTH9gpam9S7Y9Du7vTbqjLLxQRWKjPXBVGWw2",
  "key18": "5GcAw4B49dMXsCtYhP9szvwWWwMyDLJjQz7k6Mvkojbp2w6f5sXhkHHfxCGcN9pRpy6MofoZwYr5ChrXWxnaujJj",
  "key19": "4pRbdBLNuuNwy18bKoG9LeSLGSfEWYMv4VP3ifNfNbM9D7wrx8kGcHP3C989Bg9eL3iXnks7SWh5sJd1Z7aGHiT3",
  "key20": "3KSytfHJcJK6ysPyfXj4by5hrLwAvuw1DkBECMvPvJ9CpRXi8WowkqKez15qSd7AuEFJyYKGyoYkhpATo3AvvPiH",
  "key21": "58LGGDWTd8ZYFhFjATxFj7UGRxzrrFawid3TZpFWD5Uts9YVj8fZZnKe2U6EdwanqSn6CVpcc61hUZWHx2EfWF1V",
  "key22": "gBURgLTSiZXD4nm7fAAwUcti2aqCPMP3amHPimcHFSjm5wDNij8a621k1Go9HAZNXpfbMsEVBvpSczoFRdESNQg",
  "key23": "5HmJdTMypjkqZqQxafxm8mkxSXjoNvCniWKkRyZwVKuWPBLVEXRSC89Xdch7sP1YdZoxzgMU57ZoBhuKc9hwGuwZ",
  "key24": "2DAMX8P3ciEHtMBNhRYisb8R66WwgZEM8Lbkr4TXv4HP1N3rvL8UkPpoM4JVhhkaRnJrTM4Na137xiLqR7sPVBFK"
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
