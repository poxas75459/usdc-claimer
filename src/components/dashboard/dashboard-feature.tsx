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
    "5ggR9u1sXMw7MoMiNR69qxkRKapduVb2R1DraU2ZBUKXWiHybR73JBkp1UyZnnWuEJXqC7fC9GPmc54mme4egWc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cQpMS5FiLuhcMw3pKtE2jEn4QmNDMPmGqjFWFdWj1kJaBcpRDvuweCbkvZPfw1GeHBTf3FK7exxeDMFcmKw7VFE",
  "key1": "5HXjSsUvy8S96t6wg5i9umT7nZEmEoERNP9iK6NK7iLesZgLP4wZja8xnqGNUXr1tZemibHj8fq5jA7Yhwpts2UF",
  "key2": "21Vmu3X18JviUWKuXiXokWq4eTJP6kjtvwGtVN3upBtuqdCc7d5qL61bTxeRid53aJe3v6fmC77EhePmqQXJH8vg",
  "key3": "5uBi9yHZTfqU1gXxKtddsPcHvjR3DYZip9UBM9yHamef8LEJEywfaFyoxnfpLkzbEbkzfSTPsTvSvvgqXZbscx4R",
  "key4": "3P3LutGZrkLNrcdVvLkFNYbYnADnGrR8BDj9Cw1kTnQC3oSVfm2nmDX8gAyW6H6DhKQn4XHBeSDi2V9YXbXi4zVL",
  "key5": "4TChD4TXMrnGnnV7LJSrZJjC6KYfcUNJoUwSumKVik3LFYao7P7GvJDZ8TXcN7Q1HLzpsTHKPQt6P9fnbNSnVu6W",
  "key6": "3LABT15YZp2ojsnwudk2uj8P8G9XX9ZsnXdQHEUrjkvGs25ggs8vaMB4rUnCzm6gVYZhAQmGoKvUx24Lbusrjd3",
  "key7": "KGK3ECUAphLq9P7df5Yak5siZvoRx6RxUcNRJNLgtPtnKtkQJ72sJGiFPaH6ag1LMNWqUZo3NUvLjtJp8nX6zS8",
  "key8": "2Jedv4Z2jDv81rzBzrMubPVxnZmrcq7DCf299F9MwbTA1RRiKUCusKhZpoKjUyZJE4dd5wbQMSFst7oiGYFmnpzE",
  "key9": "47dYnQsaK7Z3jVBtYBLYKnsAFUrBdVcozXMufWTqrCXHoXKDGHubMRELC1aQTwYjzADMYkjroprZmZhzXrnVBTJ2",
  "key10": "58GhLNzPcNoGTmrVtjn8iX778X8WmcSzAx3vvAYehHed9xgezCdKBtGS4PD211Ku4LL7vVnM96PboeqswG5zdGEi",
  "key11": "4P9fLsWakZPeAptnzXoDV3tsnEKf7hXMB9x6Puh7EWSxzr61zjovMtqYFdGJWucHF1aBMFGDycj5ouNW5EfPGDpb",
  "key12": "24Yt6oqsHuXRjswwPd1VzE8Q5oVHFHV8txuYK4JrSBhxVwWpK5kEthb9qo1BSayeeE69XYzZHB8ywoVDbZr4Disf",
  "key13": "3rRv8PWAmGLXSD6SXvAxBhqgxoHbTNLD5ms9wuesHS9d3oV7zrQStsXqhWRKzBQxwEqFtJxmv9P8dgL5HKwLQaPv",
  "key14": "7NbyoTJYqwsZ6frCoNkqqm8VPKvY96Uh9upr2cWet94zSZkfnga28okM8LUx9DnbE2XBZhXdWSox3cgh9xXpV9r",
  "key15": "3HBSvUWRAPXKZ9w39U3oRoybXnP6m9QZ4XbhJy1RN1Kh8sn95xnXhvEwtZkRa4YX2dp8X81XWqxFdQmSsvw1R5eo",
  "key16": "3f5LEJho6qh9xQussCNDH2FSFNEuZV5QskwLTLLrs84AqNpUYM1g9YvR2ebruhQpXDMgyN7Z8WV2GNzfwVDusWCj",
  "key17": "4nN5JJNGgv3hZLwes3XN44WHh3KUc88RB13ANqZdjZVyWi5o8zFRumb5da665KZqFd96mWH3nyVQsD6p5zRwYZWz",
  "key18": "5EMoopDD1tkJWsmHHE9Wq4Q4DuVeCqUes1uvojALE86n7dNS2T3tHFZcjY6RqLgaTnD3wHQExtDYjwE5JHgVLQWA",
  "key19": "QosTLNJmrhqeUBQiXn6XyKiLDTJ6Mmk4pe4gXF3xiXaUW8tuvnYMZwZkd6VZzZR8u6HEX7WqpALskjTEpo9a86Y",
  "key20": "3Tpy7Lrz7s2twXASfFKZXvf2Jjhgte3RXGGGahjNB8c16sFKQbzQ4EEsVpcrQNk7Ns3DUqFKa1BziL8P2XkjQiRQ",
  "key21": "37ZDGXZU2L3gce2nKd6rLLvPeB9Uywmi8GYuz4K6zyQPoHeEcwuFMBUX1GdexmUbEz81bG8we9xCG5P7N3pTdds2",
  "key22": "wVjt57rzfVv2KLxvuQGeWxi8tHedameDo8pWXzRSLM1SGk1dwPwk9uNVv9vitVjxGeTF9fY3GxaBUMbDsArhwDu",
  "key23": "4FEp6sCuJj8w7MT4krh2kP6nSRuhJHypMu655SC8JTLScW7GC5RKRZrQyXutMMUTj6ErrRB45t2CkKpfDiHCMV2d",
  "key24": "5wvPp7nPgumzdYoE5NQC3xWt3QtK9XYpARXPhHvAdDbYJAzt8wAnBw9b68y7hvAgZQK7QwZHS447JmZxuyawepx3"
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
