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
    "2aLQGjdJ6rq7kZBYv1nimh5r5mMQmouJS3ETtFxp8xEisQ7tmW2PLAmv3f5WNj5BjevSbuK1W6aFRmRsELdZajwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHN1RZxcA2oBFDiUEjZaWeeESNRRzwrjTzi2JkENEHeCPB218RBVJLNXLRgjCABRVEXSRhHgX9J62YExN5imQow",
  "key1": "4uvJnXAFF58C97bsBt61Tcw9EEeoGxG4qkg5E7YkPx9aAuibBijTMo812fLYFf3YNvdamck7wHpSV3K81CwTk6Zs",
  "key2": "2cm3BqmH2ZbsqaecSGGqZMYJnpZewBfq6Na18AMoHau5u4s3KCF4f7JtD7xswo8NSor6Gj3PMC6FfoYd6NTTANR7",
  "key3": "3oaZpZTVJS3VrT49AJ6XnoCUXgSa3svnpoG5QdHEnsZ8Z8KGPg83emjGDWjHq42tgvDiyj2mC7seHPWyv2Ztt1Me",
  "key4": "RPEw277dAtkdcF9sMjXnV1k1xHrx4rsbzXNzYV5c8NA2PWRa8UJuxSSWuLRrGQi5juJjyj5U6AwSTnJTbQ1g4eF",
  "key5": "32r5Htvz87vHBMRmepCrx4BSjb184gqxjy4QCjKXL8keTuzputcWF99tNGbj8L7Yy7ENAW6AENL5nne33xS4UDiG",
  "key6": "37cL88HmhLSM9vHDkxcFcaBLXHwmg9LQ5p1T3L1AwTuiUUJnwpgEtNEM4KAd698rLtMiEmCJvmfN11kcVyMzVfCa",
  "key7": "u5bsCCcziS5Fh8MDfmum4JYRPHrGvjT5D8JcFQTjZzAGgs3G1CpFDeFKjTCd7UUnTUjuKAghCLLUqwZfXB7DioS",
  "key8": "FGy1oDcUQKpTLxyacC1sQ3VPsSsLYEPJzoAcw7KthmfCHXJw2CiFfqe8hWDaaEL2W9wxJKa8AeNwCMnJKPr5TVk",
  "key9": "5zG2AFUnxEQzMCeYKDa76tgMmo3k1RWqLCvBLsQsBH3ZujtTnF8W2A8C4c1CcATwQ9HdorpAUzhXxptBVaw51Qqi",
  "key10": "4kbMDWEcAwP2HqEZsY5nd9ByrRzLfzNrjgzFxGUcN7HK6V91KxamzxG9VgZkbwmgC6YBQQYKNYXL1L1iiCzmRr2t",
  "key11": "4CUwtq6dXaUbgzSVqDrVMzMh4j55ttPBR5Y1oXhYai12i89WbEcSf13NMdsxDg5VuG7dPqmh1TVDRNi6dC8puEUD",
  "key12": "3fYEc7CuXuK8PCZKPDQ9Spz4YM4PVYVfdJw5fFTMPRkcomHtAdRSikVCVcY5xPUSUHqKrxZ8sVPN3wsqptFXrBQi",
  "key13": "2i2EkmrnA9g5bzCRXyrY61HckY1V22T9H9qmHGXhgW9JbinqxNrC866tHhAzu1MfhqoqT2tBHfQ95TApzvcMHFrn",
  "key14": "7ZYVzTEsYdp5TaAYmkNKtSYmuUJ6934iVNfLA4QhBpt2LdF1bTpv4VTXYaegdpo8qe9LboxgjY5RsNKftzfVDiQ",
  "key15": "2eFzQfpk7zBV9ikMeVrmpjMw3yzVQT9v1V7MDRfSKHJe48ubvuYmo65MYodsvMXnAupmoYYQd9JQmoKGmp7x4pxC",
  "key16": "5zUUUYnwKU1hbAHQh5L5NJXbjChA6r5VCFc3kZEfJ1vZHXyYv3SBqQYJ3sJB7yFMBbFB3RKLX1Bs7VpugDSTT7UQ",
  "key17": "4ixQDC9BfHvW4yc9BzzJW3pGETUgAc8eLaBqeNckJLQ8uumWUT1TugyPouKMReBAsPnwa7tSdqKovrA4Jk1YtdhR",
  "key18": "3fTKRa5vsDAjxviFhhHB3HBsFgcrLi84B9QJwoYcDJosLQUnaPE9pLAMMs8Shxkzr4biXHAsTHdJh7cucdQZx4L1",
  "key19": "5kMCBCtSk6qHisRzJqj9GEU9H8NWqvk3gtdBViBddor2TThYRJuX485cWbcFzn6Fd9KN674qjUrkuTub9YAZ6fB1",
  "key20": "2E4SyAmor7aTQM5YS1JUndWVYZBeNr4NEAS8tKhPSaBUfs5BuZ29ZjDmB1ckjXF5zo393AVs5rcssiHEHXnQQhY4",
  "key21": "5T78wdV1o5nk4e8Q9gknmqx4y5USe22ecMGj2Tt9zFW6fbNhjebz8neEnYb3z6yMg4qskTFskrU7hjQTS9ShrgkD",
  "key22": "3PtBsPEESzzQyPpKNnGx5Ajg255B3VsN747z7t4eLeAfwqTiN2iLi9L4zUzgegG8Tx18a9ZS26pXkNx6LyYYkQaV",
  "key23": "3RnuMRAACLC1eBCDVfYFNEtRGPaJP3fbjgZo6NQdHYr9kv3pt2Bdu29kV4ma1k9S9kJkBvon4LX1AuTWUFWi5yfi",
  "key24": "4ThxSiMn3XCJJ8Ha4hGyCNpZxG6SJLReV1AYRcNjYjQS7WWCEL9VgwEaG8bzaonyezVWFwWdDC5P5U9FYjgRXY9Z",
  "key25": "5QYLWoc9Tz1249kVmuaYqjXKeJgMf1QCCurbkQT7L2PJZvvxdZK9LdKAWzuAB6PRLqPojo4KKU2PXByHqjGpYdD2",
  "key26": "3Yuhjd9No1npfYCeJcqEtS4b7f34ey8DzJB5KmTpnaPJrfKodPZAVLE3EUfKX7wMAXJGZQaU2m3HUoWLnYzBkqxc",
  "key27": "2pjaXHQAcYJCJ82yhNoZbBBYmkoJGn6qpnwP8M5D8qteEMUqk2FwKA4xerQQ1FRVgGw9dimVtP45to1GyVSrH8Tt",
  "key28": "4Stvxg6HF9rWJMZehxZjuptfPH2TCGaz2hH8CpoSwYGmaSKyMhVqnMwRv2UhCBREr9dVMUZrVc1KnLat5kCpiDgH",
  "key29": "56VSTgtoBdwGKkuVavoicjsmJNstrWNSZ9hoZwrcMfteUn5iuvzap8iBHwk1yRvn5NCmM46XR2Ri33TdttY6FZoP",
  "key30": "2iVfbxsGAkEFWsDTx2yMgsgZQHPDafoBaPZ8jqqvNMNxSLLTVeX7ByV57N5Ed1qL1SLBA4QAEjZYpfvzVJvbur3D",
  "key31": "jdefwBdAxaVF5Wi8tnFSxaKEZJo1BkyC4fEb7yE34nBsnP3gqv8eiVaCnqAM87rfNeuCHjZ4otPqbwQFGhfke55"
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
