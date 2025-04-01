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
    "XwJa34htdH44eF7nSnLwM4MB4MjDa9fmXzHWCc5jqiivBc2igaq2NNCC4SV4oQgi1KzohSkgi2vNfMjiEFPGiUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iCHJFH5VF6Qw5cHZmaLsoMapfcyQKnwpYcTMv3vzr3RSR7iKSsPLgmqQtYY7Bg8SQvsMXbgbu1LuhnHoz4pgyMp",
  "key1": "5iqcEvRxZR1vrAXtWtMSVvpyWVhKszL2tHt9Mw1UgtCMCEeYVhTVVnLGMZGeQk2c4DHtP6PMu7RCXrUpeCcRixFX",
  "key2": "52CRiB8RhNsWFKm4dYpfomv9Pv2MVXghQqrxmq8XHwBU6AKnmyVKxDZcdroE5tPEmUWamMMjBpsv6gRSDV9yX2QQ",
  "key3": "3WGXnFYkx6koq9WZyrCQeJzbfupXRPrUrZjLEXgYA3BkHo1zzD938QrK3ajeCNGd2iDHrUrGbNLGYbcbbDFK27ss",
  "key4": "2uNpo3xbyuR39zGQ6mXdeCnMJqNGMDVVg9Jx3YWmU3xvWah7A5aioC7E7pQRQCoJXqBdZVvvJVyoPjHkaRysQJW4",
  "key5": "5aNV4VVduhRxaNXt9hP3wH4Uete7MYjsbtFGpmR6ScSb5RH7CAAwunD3vyrT4jbZ1w4wE6uR67qFJ3BjF52j51nK",
  "key6": "121aA6pvYFJitkHodaxe9FDsnjiFDtL73hXLNuRXkJr8gK5kF4YLoXtg7GiKwuLCei8jeYzCL7HLM3R5TFvhZy21",
  "key7": "4SATRFaxmBhcmvVHXjEZMet2RUSt2qgD6TQe69WVoJPGjDEpZbDE4tVVEukz3g8HTTkwFrBhYWq5xPBytQkm4HcE",
  "key8": "MSttz6csWSt24mLspCatG5vbRuJJTDSuFosS5jGWYh5u3HBrqbBhWNwewEV5cQinNB8bpjCheFxAGJ1XWfWY2Yz",
  "key9": "63GtaKk6DUnMz4aQ8xnKjhLfBikpAckr77n7FyENW4YcUAUaq9iBcMQaYfcd8d1VwXvAF7UEnrXiVzYb1YD55zyN",
  "key10": "2eLritYoAuXpT9s3D8Hy7U63fCZYn8XPuU7ykkom7aUWo1J9BjZthPnpHNiqDtorKBUZAWaoZVwv6NZqZ5bi3y2m",
  "key11": "cHdCs4pPPiMDUc4JzcEzoZXhB52rn2ntorRsX66kknD7oZZHhf5AjbbSHd2biU6vs6hEXa2HGttWbbyipaeEHpu",
  "key12": "3hLsxd2qvLAhWDEHHzo8vRDM2kr9h5bknfBJnDWvtzZiwoPuc1s3dbJJXpFgx1GQzTv7wDWwxmAg7u7btcUqgqtf",
  "key13": "5r1ZF9Y4Xae9H6WXnibdFt4xWJndpa3tZDJ91FVbaoDD78zPDgn3rw8svRMSmB4QFbWJoynSbbrvNjkdBDoWDooD",
  "key14": "49Ggf5mzMjAPw4qPY3mqnCfVF38uYQ7wNQM8VBGYVo986N1cPP1UgEic2fcgB6yFJmanvK99xKMcdrdCqomCWsny",
  "key15": "2RuienPytjibCTQ4uZy8W6irvvR1EacHCMkNkkURiCfW8VXMtndc2YY6FCgmfrZZDoqwNXQtpHwdwUeVYsQdkrM1",
  "key16": "2TjAnKBydMgfUQHaVLo9vtLZjyWLZ7aosq4h4XHNcE9ZwiziWbxD3H5wjknWS4kJ9LaiDMucScqUNXDdaYLrJmFh",
  "key17": "36GHpaLVKf8GUYsnfbtLqdDuQmtBFYFKrGtBBsXSTQsAmA9CxF6UXcDcwHqyV9W8Y4gefPTN8q8iUPnFAza7AZEQ",
  "key18": "4BLCoKQBr9o1xR5hnk5x4XMPr82homdJkxRibr3uQaU3dsFoHWJr8MmbzXMu721EX7pH6HLToZFgKGVXbre9N2u4",
  "key19": "3qEx9oMZ77zG8Go8dE1esuDLoL5jUzMSCxDrednH4fqLgi8Ao7545JUwbjMK3EFCiY8hT41ipcJUhnEMZSG8JrPr",
  "key20": "quDjo2QWKCUUrdFdPFM3XKmh6ctUDbedFvzkcPiUYbjw9bYDDgSdvzoPaKZVfs4vv7AbLXkDkCEyxRJUeCQgTcv",
  "key21": "45dNnG6az1RRSKKvXWob2Y2tXc8Ea7Rj8o4vBKzbgCqpoT8JXyyqvnD7pRbd4UCVqS9aQpjzNoWbqmgdCvbdfQdF",
  "key22": "zMA32NePWe3NabfdUyQTsG2BjfQXZjnPYA61Uyi5n6FfpVmXjEHV7b9rEAANp7dKD4tJ579f2QepgAVZJvG5Cvj",
  "key23": "2J8rVyDRZCmqbW2QBJ9j5tAY6PnETrzNaTfKqF5oBVAmwBTKaFKQmNfFsdQprRJYfQSCLBD2azcqY5c4Yio6EKcV",
  "key24": "3j8A6eURy36HPFY7c1v9vEVbNsLaAjMp4iEphKhptfZZ8wJtZeKgzTLswoxWuHBiboGqoWu6ZdNUZsqioFP6qdhJ",
  "key25": "3Kpg7QQSv2UhHYci7D8Y3axK6KfUt7rbuh9v7k58BwEcRUYn84s54cLm9Sma23RHnR4Sn3ZzRY7e1byUZgPkH6HM",
  "key26": "4YNnNRTXHZn5vNkihnc644FBA3vrUhp3FjPQyYEpJ6uVVUsPPZNc915yBp2BRcZ8k1kPDyUS7jGzMrvM82DjoAUj",
  "key27": "eLT9vdcR1YGPuYaSr9YD9VLZzM8FQRuyQFFy28ZY88Bhj3fPnp5ZWnMx4h2BKDhEJVrgp4u7poKEi9Ffpg4aoDH",
  "key28": "2BGmjqMXSRPm2EWd9e8uzWeAKZ89mzGxQhdYRAtZt5JTjxxrtsmLZGK9H2FhKpRBfGijmXsQ2RdVjAeYESAyYRDr",
  "key29": "5bzqENhu3ABc9LZHokeULUMzrDzS1bVoWeSfgno4u1KrnU7piYFbBGNEu2aPor8BTxtzojcrc55E7qwztegiKL15",
  "key30": "4XpYPbbaVgnxfwxSQ1CnAShgkUKQnLcb8aY9vGy8H1SPVGM4rDWDDX1V2XcLSsDHeicB1Pq5ojEB39gwLipKeGP5",
  "key31": "4UssRqP9hK7zAAVNaMH86S5mqpWvi8dBFoer6izYoFwEwp3QHuJ9LZZZ1J4UxsT3tktbCwzQEh6ds39FXXpbU872",
  "key32": "3JTbeTNUmJzZwwddiYj7bbN4uSbjzKTsqmyHXtsbN6EE39L2MpCXDNTwUo1dkPhEVZ3xpoqfouv9M2bfP51GDwfQ"
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
