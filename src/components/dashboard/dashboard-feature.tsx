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
    "53iK3LtuJTnpuUNKu3qtCoV5ToL6i8C6uNRUzrqjbHDpL54gfCWrKAMEF7rq9kXjqZmbHjnFTx7FvtieKJ9zch8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTktYbUadzhurRPbDFmqC8U8DDFXipe7gFZcrS6kToDvSVNgaMiy1yddj8ptLLSgtSPQqVsU5nVTHH46PreQigt",
  "key1": "2gDrqp51r5VGKjnajS6yFzzHWQNPF1XGKEguuyY5hvPjsTgsLqiYH2DwFRc9AkR78ZpmF2CYUKeZxRwz2MbQy615",
  "key2": "5xGmcEyE9xMn4PuNhz5Dg8Jfhk9JrSDrLCBnHRk286yTSSsSY5CTcGYKpGdKtyBSx6ZH5K5DN5WVvvk1tjaaXzcv",
  "key3": "3693BeLMv5xhjnHFRxzzFimNg35P8J93aB7p1PxKY47sNDnmmRTD6dqwvAtvKXPqJ3HUfHQBbbQTxutn7aUGbcbA",
  "key4": "3uPHWHU8iZq7bvxKm94L4HfzY9Lec8PFZB9reKjTKfmih5ofNVzufQskFE6sHp2stvcNkd9rHMiBfr1eEaoNxwG9",
  "key5": "SSyBaSaZq8KdgJ5mLUQRidBK9VaXzQrwkwwAYXzLzhcy8gAaBDkhYvPFYgsn7ibMAbh19AH7cvazMmAxakhfpUL",
  "key6": "FDZuY7rY4ybsWu8yuNRjHkvd9ZeMdjzPrejpBtHgCvqU6CdSU26EAgx4EQz1Jr5NCFrNjKwKjw9rEHjM4UzpPXK",
  "key7": "5fgaW5pVdkxDVdQJFUk1Rfp5qW8CDfSj5EXHiWNdVQfd19SoLjK6GiwWJgiw4dKByfg6zmio8A8BkMwFZv7wPY2H",
  "key8": "5keyrRv4Vx6UTcK4qmszyiYMDA6nW1EvZQZuzRb7BU2fHu2FdrpzT9StHxaPrJ9br7A3pkLixr25S9qMCtrv4XhQ",
  "key9": "49iSVJLFVUgZfuHHJhzEVsGKpCNeGhNWYm9e6zUs5wZcYDHb7TzbJ3b3cUNdksaepueSD4zXdkh2vSUARsW2GsEN",
  "key10": "4WsY88PWsg52unZekFNmx5CTRwHtkuL7HEgkZjqCFUsiDMj6Ni5qaX5AiXV8rtiDN52HtwGvdPYxdBkC8DZrTRfe",
  "key11": "dJgqxpFxNX8drskUdKZmq6ZHKSrfpvPpe5Abi5wMhJkDbFDZDRzHU2S7Ykxy5pa3tjBFk1A2NGFunrA6htXbAZ7",
  "key12": "3e1Apw7cqeA4gbLVeu32cWY4cZ1YR5nVwuhGiNnoU34xVwHoXJyyFjTkojtUtTxQxS73AyqmawNUCnCiNrRCuAvu",
  "key13": "3zWRWP6RoiE1nKeLbpK8W1NoJ1meQMNLxwfvUtGZmEzJzWgBxDNi3MyaA8n6C4Nr47QmwMUoSteRsQHKNodB37mA",
  "key14": "rc8hKZHfWouFPJM7LeCKJ5wUEAGJzMKKoj7wxrcKzkUJrWbyUpwVttrU7LAa1er2MQBDD2BkXkBzoeMANnigqGB",
  "key15": "4DpnjqQDxs5kudyfQAFnXEEzijzqBjt4SzghHotmCoCS4AFHDhApQ7JGRRpJqbYPch24ybMVYesKrtCun8AiweeS",
  "key16": "62HoRPgSCZcB4vqRmVJtmtntvm8LnQduxVrkNdoeBXceNkn5zdCz38TNrRWE5CfXh6nnhmo6uMkNactj6GQigk8D",
  "key17": "3XHhL5qbhPCu8F3bLto1pLDHtqa5M3a5GKCpgDBazstcEdvW56J9kdAEQ5yRinmeCoSVhJyeJ9vSWLQZHZtHd3Jh",
  "key18": "2PuV7AyzrjihzcJVaur8o9xrxHYx9nRJ5aCLWoPtFQPqmUhU2pGpDXDiuYMZqhaG7tbyHNQW5KExcNVcAAjX9KAv",
  "key19": "4jJeEF1fXumfJgyztXsNxxehzmnkE6q9QL3GUhRKPrhwAefCmRT7B4vdy3gJtfgSHZq2sbseAsAZE4xUekfnTnSn",
  "key20": "iAAaEzsLJUvdNfNe6bfqCuu34UwQhBfJ1SHA8RUhEDg4pNayJSeTkgUp9riKBeXVEF2xEwHt1xP7dmidWZogucN",
  "key21": "vwTZXpxAkHSty7xtFfvZmCx34ZfFmU39f5AgERjta7yYMJHssQvHJNowHbSvPreFNVPz1FJoM5L4xsTDmDkLXhn",
  "key22": "WZzGi3nF55URhf5EKVPnV2tZBnbdAEuJJnM9FKtFQuWsqfwwe9pmHYoWU5FjVXss4xRESyR3WQ86QxJEYewm8ZQ",
  "key23": "wMhYkXQ9J73m5smU6wRQFTWPbYv9qYtyu9kW9qNEJ2FZ4HeEAEByqUmxyZwBcAgq1sPJr6dbU9MdQB4w7YHVAnn",
  "key24": "48i7HnAuA6c3TmAKfzQxMSjaUdahcvLGiBSqoAe6xj93CRm3R8qDUkp3q2S7YSrQJ1rSnBJvGceXLG9je2GkSJpX"
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
