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
    "5QhbzLzL2RBzd6rKHEaPEorwpVQYoMP6ARDi5qSU82agHTz2gAiH4TjKiPX61nRuMf3JRZjxVX3ip7me44qv1As6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iVy64kiwLopgiHYDmxSKnXxZsAi3v4VuPxZH5BW322joG2EYkD5zKmteuKAWYf5Nzizdh3gocDFTY41cmaMcish",
  "key1": "2F5Rs3zUMjqimaWKnnzBQiWzQnV6QA9iGdbh5iSbD1HviHcfjAXhG199eaYkhEWdfsm2UDueZVQeY3iNefyyMo8e",
  "key2": "4bfsDXSLadmxVMNWvUGYdtznZsQDXBQadjr6ULATUZ3fa6hEXcMCEd29zA5ZABG3nZZwgod6iLdU47GHM55EkZJk",
  "key3": "Lwt2ZGdDcGmqLgUoHLQFG6a8X9Qfk1vBww4zb6zgoo1ddknWoYA2wgo5Bv1fhzbHphMgzLjTPDtY7x7bTcXXUS1",
  "key4": "5ga68nGEXjjKLLVr7sMSMtykTTz3dbGakVcJaDUHKVtwn6dRQ9LVZtnAmthVMTuW4avbohMnLveyYPFx3QdUM8fD",
  "key5": "2ftN6JnDWQJxxsE1MUvN35EqfsQPvDysErRWWBjEWBCAfH2bht3Y8YQur9c7dYtYNgP6MNxqQHjVKBdMdsCN4Trk",
  "key6": "26UHum9FuqBP4pW2oHzAHTxRBtG3aMpYCGRvYeZ3sBSP61VMpg2GaxWLSLc4TQ9tBQ8TXoymohjJob5DWMnWinRF",
  "key7": "5dDZHgmYpu1VUcRDfzdB8dKUGAVawe3v5pEnzL4uUdVQKe8x5fwQBymL23CgugVoF99irCKscFSDPXRZ8pUXEseQ",
  "key8": "4JTLiJqooiEBhL8acTArFfxksmVvSwN6NMJviq3A1ccPTFUXopxiqayEWnCKTLFGRuc4BQ9BX4YjfDy36bznka3t",
  "key9": "4k5bDFKxVxFq6g7qBpFoDLJt8aqaSt5qkuS9PfgSB6RSvA2eTcK24Sp9YFWHphWmWQ26urXSvQKFYXTp45Scyv7w",
  "key10": "33nCv1nKUpb2Exxat6BqAnUaxfLjfvm8DaWeNynRYyzEn6GtAB1PMyDKQV79KKoSeHJkptgWbFUuYBrRB8p33b8N",
  "key11": "2iarcjXNMa5TJEyJNGScQjQXCfE1gg7RZoMSXJZsQUZGH3cPe5z9n8hgvKtFpQmthLtoXsUws2RXPexb5jnAnfUY",
  "key12": "5Dpr3gfQEh2Dwspsximky4kFAnW3i7FyA8nUUT7P6u1uHYTiZpFie4fzxkiFcncbZ4Ei6moKHfLRX78FZqSHeVWB",
  "key13": "3Vq6k6fzbTSdiCargQo6teJVKJ5XXDcw7gJo3VQjuhufRNFQXm7aWakWSpzhebyWw3UiN3NuSEcviQ7KzeNc7eV1",
  "key14": "5E8ugGDppw91Qdz8KnbvNHC3m1aDDYKeS7pCMy3ZEVkJnnwhruCqVnmKpFZiSC6JYt3n342z4t45Ubs3Aeodpe3o",
  "key15": "2Zw8BETSxhSPJn2mvcZ1zd1Cszd1BrKc1Cmj29tgeYT6MGaGdRkRh1p1GQhraRoTp5hBtH2hw4MJ9C5MmgEu7S41",
  "key16": "2aj772TY6Yj3VwsGEh3jTKgeb96THjLermEqnd8PEvRBH7FsqPFC73g5etpbsy8Q5By9RLrkUkeTyKu2WxvigM9o",
  "key17": "5aFC1atfHHGCVvWcCfAD7VxjaYeLVLhGU4spvWYdeC6ja8JNKrVcF41gnkz67vsPNdYtsQFiBMUU64BnLTs7wV84",
  "key18": "33zbgDxH7Ujd4dBAg8fALKe3xjJHfk8QPb53UELka2pM2FHtSYFCTUnqjBhrh2mLaEwuFi1Wz6w2R6g6Jio9xTE4",
  "key19": "3KJuJ2cTABba6zMRgDRGoahycJZc9N4r3NZh3mB968nuvoG4Kuh2XbazZ9zYGcE8PwNLiqWdLMJPAr7vicTFCogA",
  "key20": "GJ6YuZFuZhNfTXKf8sPfFWJ7mVLQYrW6B1LnLgB6p7eSF5T6uQE7kb9giCtZPmj4KsJZe43iLZmBba3YtZvwd7F",
  "key21": "62KP1LMFfd5DbzKS1M6uB4SqkYN3Z5o7aMLc8rGBygVBNvVXP1zdkAzjq4r1gSKPHn318pFRBEfKm91DoiBUcGTP",
  "key22": "2oZBuQRu59iTg7AV3PbrC7sVSeQ41K3BBobhkPxcvpSELBR3Db1Gbt7nQvFiY7SMLinks9QudQzG1rDYR9CvQ6z6",
  "key23": "3rZ4hZqYRrLDHqUPPBjNT6xcfFsVPvLDepvVPr5xEnMDuasahUCZxq7RXFC1njAs1BP338Pk92eTHjuyzqqi2uWx",
  "key24": "2cscsfEeB8B59YNGzYsYJy5wa3hjZcXmXpkttRmBZdKNVveUYDNANRSzLsxUoBdbFkjQuydhX9SLTLkjd3WE7s3S",
  "key25": "2BFpok5iHk6k4utY88xdUw2mFnEMu6dwrFKg68Yze4G9qVWdtQ8CfH1wvC8wq7JvdNHcFGVAzLwGTxZwBbX7vp9R",
  "key26": "124eDPSQvJjXe5rqHtw32gsjkPZnki2yuD2wR4AnUJZBV48eyZ6kzUM39v1GexsdcMsVgYZHgeo6rCdTBkwPEqav",
  "key27": "23TXLvXnYKEHMFSGCpKcmEzq7tWtJrR3Mwh4htRTbSZuqFN3mQjUdRxjaYWhXgcs18Dy5m5CRTqqrYnVUVyvoLMD"
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
