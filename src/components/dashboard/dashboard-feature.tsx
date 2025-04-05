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
    "2pNx6fwYTpKT5m69BUzmZET8CbYLUeKNnS94QCsq7KTA2zEk6ju4PumMqyt46ZQria38R7ynZ3niHJTxuKVaCTqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9gyA9CitUiXchpYTZk8VmQ4JXEjsYA9XhAMtLD66G8dB1xZxM1mW3QmipYcgBZdtFTQqd9DpSWBT6qh5t9bVebg",
  "key1": "2eKTmTdwQk3w1X4x7istxeYhbKGWzbb67HyqNpFd5qmSeX6QtzUCNXWw8eZRHKSpSg6D2kV9WRnu42huNzoJbgwC",
  "key2": "2jfqPo2soNMTpcs3U9jqP18k5pk5oMi1mhvGxUvG6qBZqSFTEvovA7x2XkJsGsuRFp7b1J76dMymwGBhRgV5EjZ9",
  "key3": "5crHvtoLzCc7FY6ekMfPEGFJiQKaNzBQFKZFMH3kjDMDZm2jdYg1fRsCfdWZdTfSRJ61ZGfqTaXFjxx5cN2JLw5F",
  "key4": "4xzju9TLyzdg1DkesMwLMsiacZP3Ph1zcCu7MgLuiPR41VFNVRHmsJMyAPXifE628e3Kvac6VSWQbRt7ZG2JCYq2",
  "key5": "4VBoKJ8tKe24SXyRNV7bdnhxPEqnMuFd85zEn5gzq9Va552z2yZ4AW3arcH73j2KkriKqav4k9yi9Qkrixt7twrk",
  "key6": "2VdFMEVzyf4CnjoafV1bZXTnLFMjvvGNgzgYVVuTgPt5Ly8VX8C8tjv6pa7dPx62wzURpPhjeS7vtLDh8u8VCHx3",
  "key7": "673wZT9kaVs221m1geec9gPBSqzBZhjf1RpgQgkanFQSQB7EvosGbkEPGdZCxDugMhVie9JZ55wJqv8mH7M85cPx",
  "key8": "yUAi9riuT2LVcgGhWvVqzRvmvmHXdxRh6NPYjkrVAY7rtknjBdBJ6tCttUctRhdZ51gcv88nq1WuNt7dZNZcszJ",
  "key9": "3cqVHirudEgpophjnb7E83KLvxmvkw2e4eJzRGXy6YbDry9PE7Y4pixCFot8HzHfU7M79m4dAL2WMAZF44kD3Yg3",
  "key10": "3aWhMk4F59mZCF9Z2xyyWpSKSXQDgqVS2z4S322JguoS2miWfaWtiTb6t7kSkLhJuBvWSWE5FQyd44RpX7fiqUzu",
  "key11": "5WrXGbMFAaUQQHbU5CmUNJbNKGfd4u8QdZG1pc8hPNMB6osWMKpjZNi43b5sb9m4MToPVC4JRiXKvrfoQsRiTrTf",
  "key12": "5idv9wYnX19GyQ3k595343c6Fa5azZC69wgpMPAhjoTzSPR1auM8ACkcKYKV8SMrvpqTGeRiSDXUwXhSPAnb28ew",
  "key13": "67pT6QPeo4JNJq1qZHV5D46T37di4Uu73nydDgaqVEqau9uzZNkFUFMmuDxtCZzPm75y5PB2PyxfFk4JV5QXk2nx",
  "key14": "3epZav3v8sCqsaSDmB4yGxMUzV1sqGeRWUTzay3ZPB48TG4sWxSmH7kBPUGwWzazVb3r2g6gPiapKC7KofsPKxrb",
  "key15": "xuSfE4N1VokLX6Hn29sHbcb2whYMQD3VMbGrWmQ6kUBacFw6frAzBPZc1We4p2ptDHaczLvTSRPPT18Fn2tjSKR",
  "key16": "4zwJGcAgoTBhqGpvhiKF3VP5zwy4s3KHY9Cx9opngLd2Z2NxQECTe5UbYCMwxGT4W6nc4nwjGjsLS824zYbZSERY",
  "key17": "54iJZnzMJF1tM1zUtW1xYrmsz8n8YGvDa2pVapV76pRaMFAcDFLr441PHYavnTgd2Z7DUbN9PwxNTA6BRX8uMjYT",
  "key18": "59vA6CfJJjGpnGiYMRqcP4MNafXANNPYo8UFNwHShXpuEyg7zvSKgDsH3hCZgLydbe7QquvexPqJxBiudSYjL7e6",
  "key19": "2t5iPfEoQcQQtbFYrCje9QLKdL1FSgNS63VChCwiGLeRuNGqpLcUZgtF3BQ4TnbKvZ4ZmeXidtYGWaBj3bxnZsdM",
  "key20": "3tXzZE9QLmf19oKgMySKCp83VcEYbpufB5usu5zSRPbjvXWfCQcrUWLeFtvqkMWmV4a5ATsBXrFNonhNd7UYAa1A",
  "key21": "3HgX7Y3HtJK4oUauK5eEFizekxXWTKY8wVaF66i8h5GJFDUC9Jbd5opDPFNqj8uQJMZY9d7MuC6tjLC92aBq1mjA",
  "key22": "2vi4ghmYye3kx3hAvbk7sxd81wLXQfiafniSYjAMdPT5ZCnZ5VfVdUEwVskGzbiTq6WZiDDVUpEFiiufNQS5WyQA",
  "key23": "Qpqq4LUsASTKUQFUPmwMzPFTYEQYbC3tXMUy2BPycZ3zticbz83h2FMW6QC2gck7mG9FEKamwfrxr27MLr4YoTY",
  "key24": "24QcKGyDUJkVQDJ5HE5qoFMZ3ogYBXgkRNhPmfxNt2NaouEKvVBGqgH6PR9x5ZMqzNwZd1F4ok2vbsDztYAAYFAn",
  "key25": "2tsED1CZcAdvCchKaC3MhxbqA5mdARJgVSW2EU2HLgQVLsVZ96PFagLcoF6r9D5fFvfQqEp6PRPY7qmX9u7sjRoM",
  "key26": "5nQBMytwYsdoee9kKCsLKYaTQ8o1XohswjJjUtG4sw7D6XKQa57RDzjgUsKrxBKd3bLsiB2tj9hVGf3RC5EVFmRL",
  "key27": "2xFdR4i7FE4Rqn3ga43H9zCxaNMFJG4mEBdXo51mi4R9pPKtabGM5QQWodUQ9BpKsXY7eYJ5r8oyUQ5QpMESKE3",
  "key28": "4hkhgdY6LcnnNKexXKMP9dp3aXCYnwnycVNbRHz1JULKE4P9i4buPMBAKQLj2ihfekbqsnctToAWxjmkxrBJqHPt",
  "key29": "412juYFq2EcTMRitQJp4dMLY9hnhCVLtKCfWg9eskxyk4bPts5seGrnYyUhs4LogNjWUjs6XD9d97DfiMee4fSbM",
  "key30": "4xKZd9AMngZ6xfAWKU7SeADBiByv75xrJnC9mvwv6Ggfn9VMvofnkPBUTV3cpbddoWjQTUkbXbn1CtT1Pt4Q13e5",
  "key31": "3oJJjJ75UP5mkgp4yKgZDDy1a7oqKKkSbKXsUQjAaxc8YY9X2ZZmp7NcUdszgg83mi1YP232RC4PyqqQxtbBxuta",
  "key32": "ySF8XMgH3fQokC9KswyefYPjBjzPuxPqcvuSEdnUdpzmFh2uywWuTd9XHU7Pp1aPmedPT4WBMdUZx7TinBTXP1v",
  "key33": "4VZVhroHT1X3pZcRSG6m51vmdN9NbkAkqHuLvJ1muShdUcwzTamHNVAL6JCs8nqsSBQU4VbxDCkAbg6wE8JDqrWs",
  "key34": "4AqU5ToJT4cUL3S6mFqygLzc1AWHv2PaJxDP4wEzArr9SXhRGQrAp5wgGrwXaGPUinDMdCC6r6ZnkzW7qWPjvvEh",
  "key35": "57ckq3D8kPKU3HhPbCcThLWvpFJH8ugbhyNYjTAfjKGpC479mtfUbdX77FS9kDH85dNNZz4NEFhfqcHMLUtViKvB",
  "key36": "K1Zrh3wm91fwjVYS4dj9CYKkUBGid5BqD88h2yHn7KMrniwRBUFXvynxw6VeJRqn7bWBW6vFPWcEe2LG58hNNW3",
  "key37": "NG68n6Go5Tu7XjGEeGb9NNJM5bkzjVrp5spQSaZxNuVkL7hXBih6SCGZWBBmuRddpr2UGVgSXmV5D8L1pesec2m",
  "key38": "3rDAHgsjeTNvmmyqaJLM4kL9KNQZspZ8WmcMTUE3Fhnw994tbjq7cStxVtBVoogE9Mp4pMSbcnhXLADqu6RTMr5K"
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
