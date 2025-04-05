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
    "3XN8NuWLPuvJWTH6LXyPTnPnDuj6XukJaj1LjVH8aZwha2KsZabmov5zXV4dBhkkD6akUgergBhNNvz8RiR21GNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8JHTDD54afSQFhD49STEVi1nJLGcexSG6JU58ci5NNyPYD8EoVFCSRUzZFJpqXe2VufHXti268Dj8cYxepnUN5D",
  "key1": "61nGMTZ1dvKE91Zd3XEFkBYdxrryXz8BQg5nzJxU4BiPGT5Uay2NrEbWpAAjVj8yRQXcPZJGrva44MbBwF4eNX9C",
  "key2": "4spLrmCocJxZ8VSE2EnWhh68ExZkaMCrhwwBPHiHgvLCRE64FAMYu3Yxzky7cHXvCnjDfpXbJE5QmcZRproWU4ET",
  "key3": "hzidLVP7B8tpc67EnDRzERn1sjn3k7gVQUZP1qKaucPBqiqTf4yWVBZUwDHgusF1JVDk2bmdPVgkb5r4CGaxWtn",
  "key4": "567vb3j6N1Hg4K3do9G37aWTsNhbC9BeBhSULXk6hZ86VDrycM41jq1bGxkPJ9j7rSd4sDXG2u4b4wjKiqknMcRx",
  "key5": "3Ra1gfykgHdqdo11W5K1M4n2739Ckjb3pS9uBNzAZhB2XBRsEkG5yzd47ghMWS3aau9MiB26tbJXZtpcMnnPz2KZ",
  "key6": "2eTibQH8ftmM4hrXwkXFHaX4octkq9pWG5eRsesu8hrrtQXWSat3datTfQXVHZfkSyD2mBXRakpd6ZkeoEkjnm5F",
  "key7": "2Y9igR5PrsmRPcx58Mrs9K5DQi8P9R3Qo3C4Z6Aj61woW1frTsxLNjgEmi5GKPHjw6jboaBKYZ4rndULUVvSSKaZ",
  "key8": "4wkBKhhA2EEZhbQQba2vfGP57ZkjdwGYvuJEu5QbLq9PS5CHw6SvxEpXRNqHGdyoHNCfi8r5SsGdUJbM2iGo8phX",
  "key9": "2woetikfykSoEzkn6NwGFsW8CWiE7no3LVt5Pra93aEqFihP8jCPkXfcQ6XN4s5bZoqsehrATYTUymciJq2V8z97",
  "key10": "ZdfxNhaZc2v1yyvFznejNN7vjwR5ecdCsp2U9z8h4QtyTF4SCmdgJbmBvzonJMHpYFcH121ZcRNAgNCTc5t7h23",
  "key11": "brMvmEMMPfkkEmPzUNnvc16xpa8PNMxkJwmPzmnmNtXERbs19nC8Zcxbd3FMwitRciGvpWdPxiM7H4qLuw6SiHd",
  "key12": "4F2Kq9zFXRo9XHk6bbwfkkJ1aVpgFP1diZLBw6h5CbcHVZ3ctH5X1r9s7URMg9URkZQvX6whbdm76u8A45MWxhtj",
  "key13": "4QT7mrPTqLBFkQ9xJzFvYvZS6N5nAPAcVYk1mkEPd2ZiNXWvoWemhNmBcfi8GnnC8fLSozDxUTpje6DXsFjBRfyu",
  "key14": "61d64cbcQgTUhgmyDnmNFtn4syMYMeFE5hwSHZnr8eLRsdjWtYigbtxKUuueQk5tuNT81TjW2e3Ez3L3Rf3XKwUV",
  "key15": "3gXFwp5z8VHie8tidUZjUYZVvA2ZCMNW1K5fH3BBcHftbeamAA1HHfMPvdr1Rtp5m9YKmGfTagfUWAD5VLujeSED",
  "key16": "gRC1eC6oBJfkVZyLVi8zWW32w3MLR5m6pGZYGEbr8ZSdd4YUwHwyUKZ3g9F6KyoELgPXKG3nFKjHAdmUu4ZmaPX",
  "key17": "57pmCPFdhj8xZMWmMoBTivLuZVMdHbeVt8KMSh1f4otzV7f2kLRkf2mQRtEUw3dpPAUtr741a8zPVgdedP5nsfZ",
  "key18": "ApShy7UF9yywLtJNDzhiVe3567kVcNQNhnzkcSAB86JMLB1diNbWC5X46v3JYorWs1nN22frFSW723AGzqNkeUJ",
  "key19": "626vR5dAb58ZRKETWqwPSZuGs2F8saC9LVY2NnEnPGb8JztGuYmff3Dme2ttcrx3GsAgqSjHTJDS4ifbij3uU54H",
  "key20": "4aibZDPv5iWKTRGrkQvhCEFu5T7Dbb4m7Ue8cXKueJBvvY3VqKNTeeKwHi5ibtQ6HFrpqwBLpxmiEFeGGF94rDuC",
  "key21": "7SPu4VpZvVqWUjHx7X3NMDc5MWA3w8gNjtBwSGfdVXww2pwVM42mm4NTxvxTJWYhE7tH8BAUg2maxRSMchawN3L",
  "key22": "4jBBZ2CrL6VB6gFAnQBrJHf5mpnatRvanBV5nZFsvGpvmhggTJyvMFJFNmmW2nyMmdbAXpNqf72naghVCaKzRuZB",
  "key23": "2cVDsMFYhbkG29J1bL1JUwr7sEkwM1AyuLZskafxhzjA9KrcUby89bPeEU7Dr8uyP6SAAu7eZvKnxT9SA7Pf6PtB",
  "key24": "5jCxLPSfkXBen6Ko3CMsmrGjqUiA4My3JUEELd9K1HAet6A9Npd9wGP7Hrc985BAsCEeUCSVW5s3cbWigg7oxuEm",
  "key25": "5bxQe78UgAU31t3GVAdvHTQA2nZ19gEBmXaFU6EN4ML4gVccfbBNiRtY1XhRYpSqatTrGgqase8RaEraJBxxs1XS",
  "key26": "4vBajmT2E5RrMV96e2GbjbyJuQ2v5ddQAwHHWitYz8v2RYC5yJaKEDNcUhRFE4qRuDhYyfxakgQGYL6maxPSMMzj",
  "key27": "4A5z6KGqDdmRoEhpmZ8t49RaNdEJkoFjVrHqZFBfHYjsybQLXLtRkERjjUnrAfPUT49Um2dpyvWNYV4vWYuhoa3H",
  "key28": "2F1bMNbrYTFsKfp6HehfQp1yid8rQRX3Cx8ArgwzK8Pj9UUmSYrYdbYpfS8tuNsKBp7jHnFTwVmiGM8yPVZ853jf",
  "key29": "4xDSc7pP74AcFYTpGJacyMJaWrxa9FWXxV9PYQgR2MR2mpubc2HbAJ9ueY81tXHrcxPY7ZPVX2ntKuyoyJDMKQ1w",
  "key30": "2jNH6AvYqXkU6NyYXqDjZPWTaxgAxWQFWgcEPBCmUZdTvFUDqc2pzhD77Mdb9TbEBrrkUqY1RYuWokiaJ6vz1z4N",
  "key31": "3jikrKDH2sLe1z2dqX7UwKH6AoSA17xB2rTgCqpPMDw2KvdxRU6xDkUjWMomoKZPqKAaFkjR2h8uJfsiCQVwjwsG",
  "key32": "3WfvtUQmrfvn2FCX43s8zpFjydAiLzRbJCXRhySpKrYdzLDj6wsBBQxxGpxyrtSBt6XRV3tdvpTjsifKPpQsYgmD",
  "key33": "2npi8TkYcEeHyYrw9EXS9eWMfhMd2p7NCi8KmFVE1kUKMBw3ME9K9mAV5dFKnADuZ15kE49phmFzk6pGfzRNHx7X",
  "key34": "2nJNDsDtoztNAjieSAEbiotEuz3Fjqs4rwKHiRzAALDfsVNcbYfcBfLxaLnYYRdrhXyJSnNaPzXbaYWVQFUEKXgN",
  "key35": "65P94oSLjvnm6EUwizESSqdcDQ5wvme5qHFKhcZco7yUkTe9C17XyL7BBVxt8HqtMXYXuCs5D6Q3aicBKqWAaADt",
  "key36": "2CLoy22CMfZTY4n39PZPgypMbLdUxTfo6L5hcdAX9VS189C2pYebj7J1JaRqizLYhgLgjqPemkbyrimrrvotnRMt",
  "key37": "4BH1JcDBygeQJRxi6f3WepogdBjLgwnn9zFN1WRFaHZJkAdvnfuCctzRhjUFbfreandFnNXD28usXZSH9EY8zSUM",
  "key38": "ce1M6GkmqAKYyKUiw4R1hbaHFLXV4TtouZst4Fkvm6M2aRyU7BAbxvFAWtjcYy897FkpSUMQjBfqUCAE9u3kmpp"
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
