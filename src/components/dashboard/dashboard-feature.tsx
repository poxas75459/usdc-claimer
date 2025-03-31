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
    "6d2yQqJya8fYDyCKnZSsA5VtqsS1ouvyEXCjHjMAhgqYpsEL1Fe2eCdMMeNXAM23mnX78fK8h9bvzLUPpUTiP9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sv5hw7fBcAiDRMruy6iTwYPPPF8eWRrWnY4MMtaXhyXcrsgCBM3zPyuejFC8UuDhUNWaCPsGmPr5RQniEHAxzxX",
  "key1": "61AnHqbLAmFM5Zhu5NFxJLYToSyS3qiYFj7NjftvAfrFFazmHyvfdeuEJ76j5wP3Chve1CadFsKXa5LpwGVRZSij",
  "key2": "4sx44u9KB6PMJMmRVjUXnz4LpmbVz9xf4nPzwhyN1YdoU8SdZAhzyLrr8UzrDU5HFhWCCsTjFED5TgyScnSdp45d",
  "key3": "4sb9S3L6F3Spu9DPQxzoWNynQzzr2V9F5J7a9ehpd9Nw3C9AASAdqvZYnob7bfMWmhfK9AgzCm8HFpUQS7B1Fmyn",
  "key4": "2KeHwiXWjk6TDAgoNKND2LJQpMempjRmEtubD8mhNCGc6HtmVw9BNkRyiLJvc5diRpMXQCnAchqCJzAZghnhq3FV",
  "key5": "wv74PZB8KU5FKHVJedvfDtJqjk19FiX9dkHg99BABPYNLgCocxJZpURdugQSWzKRA8jfD8JCAzMUNPPRByHzATD",
  "key6": "2Pv7bKg56catARLTguVyVS3G3T8Kh8wiFw86MZqN2RYMjtTW9WS3RteiQcPKTYG1yrjeqvrDUq3tutLd24QfEDa7",
  "key7": "5cbSunc45ENFCuTyjRRc56DygyqoSR62zyCz5K7rxqCCQZhZf8om6vD54LDgqUBe1K2PTxHZ5gwkrk36n7eySQuk",
  "key8": "dk4YW6TrMCP7Cyu2Hiw3essVq2HYwB19UyCWZqBKtz4atH8F5cMJ27ehciEX8EVshfR4NJrKyaSDv16FbX48YLP",
  "key9": "5vNgbfgKrk4dNs9yXfaXxQm9Agob996iWqufmbqJfjRKGyTHR6wfPbcH7nsLUABseC9FpmXqk1rFhqDPBPLnZmCu",
  "key10": "5qMJTKfTXqynQ4W4dkCHQzNVMKgm2fQNo6wZn1BvsV7jUwiaNgbkDgdzo75yX2NGamreRf9nsEU1vLHFGAVqLUdL",
  "key11": "3iv5trhHWRmzvdcKEEexXvbrREiuPLqzaiaGSQNJN38FHv7xYuQ9AfGzPTrb4hJAmiwwxCbUtDmDroYweG2n1kKL",
  "key12": "4vMEbsAGugEvZDvgBTwxWYDtsoh59VjGwACZ1JRQR152pkDZKbpVTKyjY3afykbz5vAsqEYKiKbSP9BfyLZUXiva",
  "key13": "fNXhyC7NNYDcEWhNx9m1GW8cyBmfbWLNzoYz538bEDbDEjtJzXt57FF8EsVW6K5iekBirCX7qz8NKWk3FdXC71P",
  "key14": "5iCSp6BtaydPZRZbQqEFnx2S8jo5ky4HvJgPeTeizVkFzC6acHAxGRwLUqsF2f9LwwGW926rn4Yz1HMqCyBrRun2",
  "key15": "TwbDB7SLPxbkZjNbayEDunS7wPxYYS4VYyDiwWbU2MbLmZ4aAwCAdvkEJnSwhzRwgKHh1WWkqtGuRSxe13gq5Ak",
  "key16": "2YRnmYWk9MS3VWkQtaFrQRbvdTWZ1mtuYJf9jP2Jcf9VAEj8tf1VgxRUfyGVbAFLHKmAgSRG51xhyvioV5j7m4zr",
  "key17": "STibddaDtepSqPQz6TTU6BECfdNzNoxQqQcfeNbo5Jwpszh3hfpYh3YL6KQ3HtHSFvrEYDff5EyomMD6tZo6Hcz",
  "key18": "2dhJWMXSZQ5Zwd6F6tky8fQJSR5Rv6ip2xnQm61D9bxcyZa1wVJCrgm9tRZWu3stghxR1r24hxH1b8Msi52AnodT",
  "key19": "3TJNsap9VEXEDpm2ZqqmaBRgzSC3xEzda6ER9jmDaQnvsuh2CyF3fv2FqXK5MDFMRBy3eF6WhweeVUJ2sr4fAUti",
  "key20": "2SFsDJVqqvzat7pPqFKEHVWJ5esrJbii3jJZMC5NQYuGfivJqP5M4w1HGSFGk6VBHxJeVe1FV6XGHH5u1wqjJaKR",
  "key21": "5VF2zw3AmE8ZNVBBoHF8Fcswbu47mjWr2YBusGhFu6o9Vvh62XJ6udwoESxUqu6ks9KFd7aBQUEib2Uy23LtfFj3",
  "key22": "4pwspxwCwEdJssUJgpTqSB3kvj17HE2sE8pVQb1ro1Xx7HQ26U98Td2kzfAYBQPK1nwnFtQSt2ajtFsH7HLMJGXM",
  "key23": "4gtKTadqqzsu1hPTftHbFbwggSz83JCy1ZbzwWgnspdQT8UMo7JWFd3outWVhMGfyTZ9AyBajJMU84XWBSGJzkZB",
  "key24": "v4F8LaTkELbi29YotvKwzWBmF3EFWXHBfaBd7yqVskG7cPBv97KrvexME8YSn6j51C9KLFBRmVBDMSoBvNKBa9K"
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
