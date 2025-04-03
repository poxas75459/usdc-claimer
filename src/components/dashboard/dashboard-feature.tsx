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
    "3ezD3Et3Mt5aXSY69E2Ji9BmJKZFL5nDSkuTAu4qWnSRaE9R9WfUqHEZ7qmkVRvwVkPLEAJgGMTrCskcHH9kp5u4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zpAoHUUokqXRqW18M1MHwSgZdgAS3EhQT34zuuVSmbZVXzdiihcxH1Cec3UjzW6CSumAV6Pk7Yrj5134Edqjo1y",
  "key1": "tcyj9BsczzRZ4RZuT3iEQTnYZZ4zLhCFiY3sQL9HiWgtKsj6tRd3iLefUFi2Vy8QqdfXhbe8pUHULKnix6HSurf",
  "key2": "eZr1JxSvNy5kPZi8MHUb4t7rrgVqgEZ1ronWVTi3fQ3u9xaW9nEaa6DDQFvQWzewWvZ9A2HwcdQHkDyLL5fGHVR",
  "key3": "2qvSXhXAtUW9psJ79qrLzQaiN4P1hTQqFjzX3z9uUxhE4MrUhQ3KMR7GCc5aM4dhcY3kFgPKrBMdX5fzrRaFiRwX",
  "key4": "Hmc1cXVD8AVsRMNSYE4VDzfmC9JmM8sJvLZhCs68TeD9xPu88E8MuYt36W9muXpUKwvvDoQoHTYo5EG1yek8qmU",
  "key5": "3h6DpWExhwiztFMQbkWBT1uP2CSEnPEBUPy2Y3f95hfpykE6mkZ2UBiATuYGcdfpgnhdjmbD7ARoMHzHfvHagpSa",
  "key6": "nEVVysm3T6Dcr4ZNXcwdC2ADhv81Nurn17F7yDQQbrMy6syf2wKtxPH1eaa5st8ijWMzFv5MHyMbd7ohZku2agw",
  "key7": "3Q7D1zEsdC5nxe16tDeYFnkqv2BiVRw4ZP3RCbTdkDwkhyTo7o577rHvuFxSpW6QqBUw8oyvSDuLNzBgvTed2rbB",
  "key8": "2vAStAyH13q5o6ZyLRsxsx8KpZivQYted4XdJHN8jXENbrVmvGmwZb3UYCbS2BSj8fL5qnfsk47W6pPYXpyXaww8",
  "key9": "ifrWAMwZAbf8163ZuQHrWLmQVnkFihnzm92pYufDqGJGEdrtTPmp3cLE5SWpecth49KUK2rV1zCsMjkrU6cA4c1",
  "key10": "3jceBuzCfni6Fq29qq6BCnVDiQoftnx3KAsGUxsTgJdnjfdDiZUasKzYTqo95fxEUuJMqkTSvc1pZmPgKV1HtrZE",
  "key11": "5xFA3z3exMcdYt1txCRkrpUUweXNCfbUxXqeXCSvYhmcANvXm4cMd5mthjyCHUNnw5qfGw2xnKcELbvYCv8MnX3T",
  "key12": "38mM8Gd8HtQioMN1oMAH62V4dnk8V4SwNRiww5uGA1GsxC8dgryMMj3FagbeEVBfCk6ijBuW5KBF8wzDqTsZTVcW",
  "key13": "3tnfeCuL1oLmdbt9igypeZ3oxMXuri8PERqe3aqzAD7dH3aR9EWVnEe178xmN5PYZmbFfRTBaPeZeVLcWxCK5F66",
  "key14": "j6gNMBXb7H5itaQ2auZuSMXRDxqWGXdZ9MEa63nrSvxNpbq5wJ2eBoegBQtHDnknYVAvaNNUeVgHt4tG1msR5sm",
  "key15": "TpMLzG8rHH4wsTP4bceZjyi2ry33mC7EyWJpb8RQwouGNrW8eLrm82sHL4tLmU4ZmKsqm5hksrBgJqTxP5pj1fE",
  "key16": "2yC8wYsR1BQcEgF8REyJUiurt3nCu4h2CJrkErW5hGKoSgJGeA5Amt49ZCR7bPqLrY9jqCAKvDpz5wmnE5CisvrM",
  "key17": "4XKHCs549coX7BmmjccQzPZ4X2oNq7Ntq7oKDamXPkuLs2AWQ6gwCmXd1kPQ2ug9ZcyQC81hvUVXV4rmZni6Xhvy",
  "key18": "3hL5L8eCftMW4yVqmaJt37DSzZ6kJZ38q9iKroDx9NmP3h5X55EiSFfrimqMt4QZBQuKzY3j4sPPAe1NhkHiRAL1",
  "key19": "5bCKwck8WDrFRrTBRF2DFVsv2PR2Ko4ScrMKikVG2cXmxMyB6GttokoTgF3PqsnMgUKKRJQAq7Vr8XJ2JWTgBuVG",
  "key20": "33kzbEDKR2DCf4Ai4Uz8GNjzX3K6reKo7EhsHkmvakXTetDU5yyzrCXdJetCeijoFM3AFc6sM6NjowLzXky8ng5H",
  "key21": "4yS1HHTK5wveJnkekeSdsWAbS7hvMtjqupzkVkwjfDg3j4YFFPtYB4ieBPdLcvt5Nc3nQmeYyN8nec6yVxGa3U1c",
  "key22": "3KVKuS4MKSgjsJPX1DQDA45NzZrVdrpAiNvxjGCJS56zFRRgZjGbBXGdEfoiRpdBuBwXtE3JJwjioLgwTXyopFPN",
  "key23": "4RxnRooWqxu2Z8eE8sA9nwf7fV1NKaNFgHBbL35i5KqbEQ8q8wbhiKkgHu1ZrEeQE2X8Cj4tQHyTWm2WcesgRac7",
  "key24": "5VJZXUj16oBvNPYApgfdTT9SChizA8bB37cd5HEKWCZPuDk2iZbu1uLubYYZ2PNDRi1UNongpsvrW2VZCtsNZpwY",
  "key25": "fHQYaKM8qYBmZ5AKDGELVwwjnnRGzPW7kEw9k2Pq1bgJPHDV9j4iZtD9kiHucg2K867iLhuQMMMf4tTN4YUoh6W",
  "key26": "2aSxb7UTgS16XMLNoByKePVk5jvYUEexk4XJhfSHLN44S1JGdKLhG1B1VyF5j6GJK9V57zkggAqwJJweNkbTX3at",
  "key27": "3ae7xQddznWPDW6dTHUwTGCNQ7rvCPkt16ixN5x1WRDE4raCrwciKLTrJn4u4jzacezny37sFGzWLiMKkDCYpttP",
  "key28": "4dXbCRGLZ4mLmxJZ4aXmhQ6XgTHZMfs1otHJQYuU5bfGGUi9A6wde8WSedznkw56Yt5sRhH9nU12aHeMEkMR2R9u",
  "key29": "ibpY37M3qkhoG7pKgvLtJ9NHU69sYu4GCoz4Y95APcEoNvgPepann94TYRPZHyKVLGTyZBeZCMonqAUDEsQbEUb",
  "key30": "2cXvuydcZj8iB6gZbnbnTtpyrSiCnJcUpb9PWchF3uHvzFKGxZAoPRZk9MhGBec62DKN1PwPJ9RMQ17YKxFuLmr9",
  "key31": "5tV9xiTLwBZz3cbnKQc12Gc2KksYLigbhcFFnLawZ1JjMZSMf36iERaXzB77uqbKJmPorWboSQ8VARiY4ZwVcyXT",
  "key32": "5ZzrTTB7S3CyEZ7vYZUoQV8KuFpwPafsWC3Niy6uv9YCNb1fCpdHfCUZziFDPgBKme3DiAkyiCeR3qiqUcae2Ms4"
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
