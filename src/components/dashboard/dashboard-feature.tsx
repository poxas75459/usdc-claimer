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
    "iVh4TioukJsv1ScHB6STMGxUjB4gaBCJfnzJumnhLjRktQ8XUoTTEGUBX13wVeLNkBY5T8E3B1Txi7JAtVqiBj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dwDZXTLUxhVqwqM634MpZfDPYULbPSwfQ796dq8tLXhg5AgvMNAKZ4nrMW32iatyBkxG8XTQrsVpsEV5inHsSZf",
  "key1": "3iPHPkcVEfrkkSYP3UUCv9xpYa2mCSHsQi7JQ5obTneAQxxw2KXd2PAZLZy2h9m3vMKiBSQfE6LacCoFawAkNqMG",
  "key2": "3cgtMBbKjbiBaVnrjzacfhcNdws2YLpJz7A6qJDgYhpYxC5d86VFxdpoNcK51FjDTbqgWsyQCDARYyNr1xF25qKx",
  "key3": "3rutKaHerogz96PdXKMZ5ziZ732ioqFuJC464NMS5q4Dx1NVZZuJmGN1qajCJAA5YgFdAYsnq2KvwV2oLndgSe8y",
  "key4": "4APuUqNJhdfMKsEi5FyNhmGnnB5xm5dC3StBoasJPGB5TdkZrm4GYXcyyTCPriC6DcTGGkY9RGcqmKudeQPEvEwE",
  "key5": "55BqU3ndJVHb1DT7oxLFBHrFJbkJJ5JmHD2jGmnYQrBEmBTLiwPnAuPdSPZLrAbjtzxviiZEZiZD2QH9n3ptfpm7",
  "key6": "44dBQdvWh7rP8zvU1uUJBdmmQVukFnQBNtmRpVGL1AorSScRPbA9gnUUudUCG6QhJkdHwKDzXNMzb2R4JY6NvCEc",
  "key7": "5U1yRaSis5o9QRWEb6cW4FudzSRMUVeGkDGiByNJUxAqpFr1UiwY9XNjjDM4c48BQLK7qiwsUzexiVas7VSiPF4D",
  "key8": "574Fy4B3jSvqtqXg5PDpMtDwbz77j3WW2tSTLqjLfQ3jTfPR2WWWSm9veNvRUabaTW74BxxHRzR9VghYyqecsN6u",
  "key9": "2bXtWK4CRxzBYn2nWYtE7XcjRLEJyCyt68n4wq447w2A9zJBaQV9xm3o7JshPL2Nj4A136p3H1GXcs5rcsfSM8ff",
  "key10": "3Pf1Jf7FC8uoRMBtSnej6YQikLrj3UtpmnoHjJwyt8ocHfkA837jpMTrRX1Hiwn2QeG3koSMavcYyWapT9HbLAB7",
  "key11": "4R5gjNvSSzTPnUGCVhrdRgZ1zSUcKg3F7um8gPEvGKF1PPCF1wecW5WTWKZdmydTJFRzh1bjrAvxnc8AFiDiTadY",
  "key12": "58Kz9t6NMEK2qvj6aKPZ7jyGuXEDCva7F7dBX4QLdEyodiEjQ7ifFLgrBzarJjRdr6NwTZZ2yeUSv5hVMeseqMN9",
  "key13": "3LtyoYBu21i2SneQe8RqLgoXgVc3B1AzVPpSfnJS99hcKexB3Cw3679i2ttEiin3UH9uvXuPeaus2HucKbBkLaoV",
  "key14": "2gSq7gBUNwNb1zUfpKTPXfAEr1gwVuMUuQMJEwdnvaRokoSV19hXtCEvEDVzGaGW16LoAAgdDZvwnYHyfErSoM99",
  "key15": "8BTGcqYhx2wAbaDqNA2Z7xfcnRHNxisWQkZNy8cKpKrjdXkGNV9Q9Yc7FkqAuj7gANMdG93pZLMUqNcsi2MMGyZ",
  "key16": "hVMH7UeMM4wNNHGF7ZtdaXvKDCMvnXLy9vQb1Nc9FjEzXjQPYje2FE8TgfwNkLCoWNX5KtPkbPbXraQ3k7VxrUD",
  "key17": "53jURgEFuVNZXKLt2oFRNj2a2LYoTU9YUrAGw8JogrnEZEmgshyb7w4yrrMwje8km2can387ujBnLbFuezz9JhEC",
  "key18": "4nKGns1ntdojQh6beyECPrgDTufyEEwn2bHfKnxeiF1FNoSoNcbExFESDksaZbr6Q7V9ty72YMnrGiPW49iZhh1R",
  "key19": "4EcWodRQsT13YneQSxqWUaCw3GURJVzetR6GA78mSRF2ToJJUU96pcqptGJPCggVMeFsEB7iu8P1WnKjTqh1hEJm",
  "key20": "3WDKVtcHkuzB5F7owkX1n4vompFZiyCq5FMcJKiiVcVrw1eeXSqMthF5MEMh2nYQcNEM1Dsj5psdjNfPUjuuEs4s",
  "key21": "3mLqbTiQMbCE83J39RVYLMvdtKMdzs34nSCR9g3XqtDSBrMBoGBhtJV85F4Trubx9dBunErZYsxZjmCcpm6k7JTJ",
  "key22": "4QqXfQ8a7bCPFHCNhkKFunRzGSJZ45HvPwgNy5xTX6bdz7UKVKEJZ5QwzeK2SyABKc48M1gLAKDJWwaN3GZ2fYBC",
  "key23": "5MhxWX8Q7Xf58Gg5MMBChPZcyh7wzutVg9y7nBW6CHAdwPmFZkoxWX36t3fAc8xYVMe9L23qnbf7wmQhnX5Am8KE",
  "key24": "4rGx4NVFhs4k9F6A4YoVGg9BHPmtx9V2RmzuTzQaYeJzG6ciru7F9pihMmUkRJfTUZ33dvBWAU8FgmY2zTqMLH2v",
  "key25": "4ZtTCLbDnA6VDVsvpxjwnH3DXdaL5w8H8aB1avf4WXriC6SfAHxf5oTuKgsUGGwscnNqiqWmrFaBGmj38eWLUUPz",
  "key26": "B51sPJKKunX7u2Mf6rvzpzQakhLAmr9bJN1AFecTsjiWTWExAq5TmJGZ42sZibSj3JCf42PhSYd8WHz53mCnnpB",
  "key27": "58cXo9j43MMjsygb6L8SMmwsVkSY8ELSP1N7YH1izW7k6YpPBCBCrgRPHCR3oxHnpPJuoz269KVe2LGHhGKXaAaf",
  "key28": "AcT5tuSpVEVawjnQGsLikveBjGkeWD7A42iMbhpSaR72aCmd5NVpF8J5gUjT6oQezKohR8o7tuxkXDyTf3hKewp",
  "key29": "2vix22P3L3WMjm9kZWxcMGTrUbR4SSahgMEDuakD3YDRy6aSuwHz9ZURq1E4fboULAwTvpjoYMeAcSY7xqEzq76w"
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
