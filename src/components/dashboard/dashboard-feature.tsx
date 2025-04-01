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
    "3985Sr88KgeN6wRtYj4PNLHXb5zG28R7VhRfZrnY9X4acehgs6KhFqD6FLNxaX8XnSycn9PWSnWiCFseH8MaJu7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QzCoEnopuaZXs5KLNR9ofDoeMTbjNDZG5WSvxMhe524nrf2z488LbBLfBtMocHEQ9paQhcDesbiVaZichKS89FU",
  "key1": "2GJ2c6SMTDFepa3yPVVaCtTnC9GJ2KyYntJndNNXWoJvUTKz4ruYtiTGueeWnR2sqJmv9JSPGoKUiqpTZFTtY96j",
  "key2": "5ZEroidiB63SH1CsgpG9hu5csLy3mag6uraDz8Lg5xhypYUiSyeKf7pBjXTWDTFT862XiqAE2ZCzJhvADjjHtP2n",
  "key3": "5qnKpr4woZpq5WcMS8gaNhG1EK5xuMu5eXxQMRFD8aJK8WayQaVErcZhBR2uxj84gbCSrhwgHf34tbEHSESY2mSR",
  "key4": "4K63GTkxkmM6iP2LnCoMB7STDGGoSSjjBUCt515NG4UWfU9V6tnDZKJsXFa5dHimxJswkstwiodQQnPhuXzfVAWj",
  "key5": "5GUPo9pK7Hk6qihhbYwk48RhqVj4AX3Sh8PBMZStbS27qC4XU5seS3Xerra9jrzVRVYy334dMTsWsLjmsogaEKLd",
  "key6": "4WD48WsA9TZ9kwaSvcySqPfHvENz1oFyebY6aNPrXzi2MvHJAF61RFfnUQb51qyxmfeYCvbK9FjEnZQfDtQmzvQT",
  "key7": "2MGX8TwmLwyksy3oEPCwWRxD7v1mUyKiuvWrv6ZeuZunEScsWhVpEoXMJq1VZz2TLdPNwxPtqZgJywJv7BcjJV4F",
  "key8": "5nGRFNTMTnm8phHPPPMj5vsyJfB1hPFVL9dJeZRJJiqYn7Ry23NsG9nABJx9ciAVWPYokCXd8dn7Ctg846Cr9nCg",
  "key9": "3TdntymxZEBTyAReRTen9mA9EdD97i3hGRE4yaraoK72PPWn5L4attKkqz9yx3jiMk4jW6tcZ3ncxerfFEsTp5Ay",
  "key10": "3Ui9ef5F8PgYEgch1t3jQyxFb3dypCcQaiZroinbqugCjZYFC87Ws5uKLqpsKUhXwkpCwFXk17KFqZZKTyzn4hEk",
  "key11": "4usVyASWGbapaJkd7PSiKi1DvAjkGMHp6uXBNm57zYw61CjJvK3SguUGRhQGKHPKQkijrdHTpJVfGEHHExfvbDDd",
  "key12": "nw5LsVBvt9WyhRXUc7V74EZe5Uqp9cNjhLtnA11CkqZuJDvTW1YWdrZKH213ksLr8qaCH2p5KF6y6g4zBuTBX93",
  "key13": "2UBDd7aQb9hmptABVmTwMsfS3iJJLQNiYxdF9qd22pHDke86jBoQoKRfACU6bt6bBAnoru6BtzPat63g4KQLBsf3",
  "key14": "5CvvrKrzuTDGBLLwcsWz81PAh5ndPzBai3rXJqXRtNX5rqRmnF5KmerJKyVUvd5aKUdV5zcbiC68cvifZ9QtzG75",
  "key15": "496b2inFeKrtB2vgthbveH9UPhoyRyELKLm6C3N52ozLNiqeJLXWCGvQftEFTaQwswyNkxVBAT8p4ZQLELkP9BbW",
  "key16": "3r81hYTpDN9b7MxfHZ2d1bzuyzTxRQ9hkuoCsQVL6JH6WUwbcGqQDr1ss48q73rYuyKaXoRuziuyVFZogwyqq2p5",
  "key17": "QXosi1y2PAZ4njWkr2BqP6Mb2hi8Lhvg397G14eHrLD1T2ehNAmGA6BwKhX5ZMC1gJTwFr5DvsHbdH5LgrGZKJL",
  "key18": "538rkVoNAKTuW59BYDmkuXtLGCDGYjV83z7SECYcU61pfkTc3fDDhDft9FFNcP6qMyVaUmMKJ1sk5BALJHKYrUb",
  "key19": "1uZgEVs9YFrKDaWJaBiiHn5o5kmZ1EjD8Egxvinz942sEAEUyKoVPW5k2N5avsYrH24Ww1y4nwBKpCuArqbX2kg",
  "key20": "LCqPvnYRzQ81VfZsNNbvhh4Tn2fVm3TBv1Mz4qHD9SXFNamf2dWPEQenpXi2xwcqm1VSyuqd46GbLudnWs7tC1x",
  "key21": "5CvGSrKK2c1qCjXQsdzJN8v1JRVHF2Fc5J5HALp6h3qECv1jvRGMavyA8JQsc9B7njEiTLmapWkduWXMJ8wddEaQ",
  "key22": "3QjxyYui5RzG6Ze7GS7T3SQZJZTp5AMowVs83d4DrQ7Etn7A6zgUdqbM21FN23K371Vqqe8v7SHy3V9PXrfB6Wgp",
  "key23": "5RuoHtSaCHetKcV5eRDFnD8fYndqctcFedNu6PsjjDht7psturXSZF9D9k9mTiQcGkmuXM94kokjejhhXFYKxddP",
  "key24": "5Uq2R93y8ir6eMCCwxMTVksiRAJ6oEgwkYz9rSEgYvEpBDL3VxncSJK14cogJ69LQAszP5zw4uuEmbrLs1e3TiTm",
  "key25": "5AU8LTVUfnWacFXYmGx5c38VZfPqZaY8Cmjj6sQLAoXuMD6xJY6Lz3nVDnamgxg13nQGZumZtezpPm2n8EvcNBnK",
  "key26": "4V2Kku8NqbFHJgcDkquXoURkZZDTM5V2jFT3PC9tLufnLxEARws9uKFTbaFFghtXCVAXxgZtazje1Pr9zPWf7fcH",
  "key27": "JWWfhSV42NhCf94qW2464VYXiScnP1ojyfvgqSkoKq1PJB5PEFiwUPUCPXwoBfiksHxnoHt9AX3iA3RTVYMF1th",
  "key28": "4tFZotcLymwYD4pqjQfAor3UArYVpHXbfYDgxxLe7owiej93PHEKckPTVm9SifdUKEyBnHqt5CKXTxoNiwrpsS8F"
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
