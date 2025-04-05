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
    "62KCy9jVBDgbrTpnjANq6x6rKdUuFxm4AZnmPjipp3msDJXiyq9zJSFBRypu8fcEXLZTkgfS9zWR3c9xcs1PsQyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UTugjGPMe7xSDhBuKcrLe7B87x3msEsUcXoQ4QRaB6XQzoAHdaDSriExMWyW33FBYALaFzaMJkYFUVuHHoW5a2H",
  "key1": "4F688ryWErNwMwtZoRuqhTs4Mr9mRbNwBrPZAo7edT741YgkZq1xyvE5FV7bA1QbeSatPbeBEe7tqZ2DGiEAhN7T",
  "key2": "2NV2TrsFEJUH1Dhyst9yRfibRhfZkA1zH1Gn8g4SxZhAggRr5VSPy7hRAxNnutsXwMU2218sh2FEMG2BrrYC85KB",
  "key3": "4jhEzbZcb2qDiBDz8T7TWaMnpuvnFdfggTZaiDpM6hs4Ms4M5HV5kb6besSVeRuuvKRz7vzy1xxuauaW9xhkd9CR",
  "key4": "3wZSf3wLaLDq2LKiPtxR9NhRrSrmAcUNfJdxezn5NMjaMMzQwzyTRrCi8fXMpTXuvhqfF5jXbhMqjak3nVQFjB4u",
  "key5": "2gtWd96nmjSDUA95e57SZvQR1zADcwCu9ZXhNqR9ayGHJEmAUZK6hG7s7xxEFg5S4B5devfsotjRWudbQkqGyB95",
  "key6": "3AwR4TJFZcQBmDkWTXSdmXvK96GqJG7YJSnGjsMEn6veVukFKSuNS7ctKwHFVmzxMhUMSQkeV4jKy5hben1FeCDJ",
  "key7": "2nHEyVahnVZfseZjX8Q6wCVtC1BAQJqAo2LwhUkikNTYJoTSnpoudshtgGxXh94gq93NiS7ibijzoFNZbyXopEwP",
  "key8": "5WLE7wpt7nety1AHdvTwoNGw4R7gGQhGCJLotDA1JLhVz1HNQUb3pjmk1wVDcNoxQT1vqx7aVjxx8AoSEY3RB9c3",
  "key9": "2zWVt9R4pXJteL3KxstZFkSbZ4WcL6grUhN6SMzE9MQy6C6rnSKjKud4wufBa3sv3yzGkm5eRbGDMcDDxiod8W3V",
  "key10": "2AXaCNmpPGiR4nZpVco5ALuACpJTyHqvpiugfNjmzJfzoAtV7BJmZqLExyUqf65gb6cxMSjg2akFaPsFzzGTojSw",
  "key11": "DUzhu6VtTVXHfhKD3kApRR9RRXXY41VwKXYvqvyY3ZU13gFjA7zo7XH1ZqG6EEpWj228S7w7ZeK8jWJkoPKTa8L",
  "key12": "3jUJuL6UMgzNBn7PaEXF5cbEj5DAZgtnHtdZSGCXRrfon6D38Wip68nNzxrX5nTezL2PA4WkHXdp3MoXwusU5Amf",
  "key13": "5FBtgG3UicmYgxPGJ3bc2QNFxKHMZYKpZcH74b4Rfsys7hkPv91s2DQLCKajq15Jqbza7anraZg1oohD28B61QUY",
  "key14": "5nCo81R5ofzJinfjQADKLMGMpizwb7rsCMMjExGd8MaYi56zxDwLnwThFUNeE4rvA1rLgwvKwrqB41fUrEiURuV8",
  "key15": "AiX6mjkMsFGT8269Tt7qaQB9BK2YFYkUb5FByFSkvqCLdgfCXe5M6sUn6H7BSrEMYqU9ykvZbWBu2Mp5M86hbx8",
  "key16": "45spv9xfT8QvcizzPkM6t4qSWEvx2cvMWNqJ8em5HX7HBLLrEb67DB6BXNU9UdN2rmec8pgtkXzo7Hwq1pbdwqWD",
  "key17": "1rfhMJFfxFCnPs8L179cZvt7JL4FCKB8i935mGhLUF4zUXXNgkMV7Ep4HqQdU97VvgRM8sZDL5LWNZLfw6cDx6G",
  "key18": "5MxQAExPq7qXjvLUsgfzJKG5Y1PLgrwjPQjiaEu8RH8kiBGXqZUdPH5Byjsqqpho9NSgKHEx3ttByvqv9Zsfjk1z",
  "key19": "itB1wXaYL9Lt3XhdzQRUrDgNHnRtp8ryrLUdKkSeqVb36FPC9u3LcwF4xXkZRN1F93ZBeoSHFhK6sbTiCswiLxd",
  "key20": "2xc6NrQSXoS8j7LjnzG9Y8dmVTfBddr1TgbwdLTgqf8qGgEfSBHzvcxe9scWBQ2avSqg8aZLfMhBWcFvxevaMsxW",
  "key21": "63yhZEVpXF95F9k79MYqfaUuvAeD537dEWSQ53PaPb5V7WbhPzYG6XrXauJTnC9jdzGEZetE7mZ2Vq49yHF6o32d",
  "key22": "XuQCpTeZmuPd9Yoxg2A8WjPsjXfXoXsVqp41Pn216PRhpTPUgHifsoxsxAmhmXD9jPcZ6QcJXPQx9YUzvNL6oku",
  "key23": "S2GJoCa6znKvcRpvYo3sEEm1aHR7TUDDEvRqbVwMCXjqX66i4QBHekpkSdx38YnjkppCW5NyyeSNbU3MaDStpno",
  "key24": "3BFW6svt9vQYQ5o7uoKP9P83TMqYDMZ1iWr1ELNTQsHduDWghQz9Ec278ctAYtRStTZzods8LLFqifpoWJhchrrc",
  "key25": "5rUVLFNxu5UwvteiEYtpijBN9Cojr9Dr6ZK5KT5cBkrGuVjEaTf4Lf9CZB3rygboVrkQtLLEtosG5HSJVD6jhaJa",
  "key26": "35a6b2X1bLAzSad3tPco6P1YD6DtqJPRwnqo1m7dJM9VhZttfgCs3ZQEpsRzUs5cK8rMtDK11uYJXqcv1Aq6UBb3",
  "key27": "2a1cJyy1cR1MxKza8bX7dcTZmWEKNvyRjrWTNtR8tE1UHPjRHSobd7Fkyn7F9QWMzfusseLZcSFo21qFwQMkft5N",
  "key28": "45EzBo1fbmcPcc8QAVCB9QeaWjYKd1wsNbuweYrA7KA5ZZJZuktzHwvRdzMfupjDJZkzwnnHSSSzXZq3ff3qLXAt"
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
