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
    "34SC9mMTxLWf9X2712wLU9M3psbmjGR1mvCRTSF8iqhEFn1ADMwwaHJ2QuMEW3M9UV3RyF9FpoK1XezToeSwsbG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zwRKYhGYPJZzDs3bt4DwM7yxYX2ZSvtmQ1xov2nP8NyyZ3FJxGXXjdWSjHmhz5RkoRJUZ3HR5V8D2e7Go5RkTER",
  "key1": "4d6HsTVD3Bj3MszAf8CAPFo9mLKWu9zcduRt4dfKuhwyaMeCYgXrupobcFSnnGZtEC1qFtJ7nt1thXPk4U1sqhsY",
  "key2": "613qeNs71c9BgLiJ1r8ZLjnfKUuFWQPAtQUN8thwZtuzDv54pFr9VANswnCg7Hvhz5ekskxbtDAtspktuqXCtDCT",
  "key3": "PELLWNUtD19mBWRHKPGuRhCzpJJpgEjSvMR71UdjAmKY2hb7Efevadva91t7ZBq3xHi6gN1dcy5u71kGTdY4MmU",
  "key4": "519PqmjASYEhapjjk1dKv4CE9KXzM1mwfSANtWK2gmmLAcyLa2z45UzKyrCHyRC5wZ4mUsmtdZLUfGqpLQ7L8Cqf",
  "key5": "3mW6B86caZcYh7B1Yy9oXvWQsPhKuNXByoWQBfvmCA485ywC7sEdn8tvm1wWFP2EkqZ2xv3q8oRvbnXbsKtcJsts",
  "key6": "wkSNLAV6j7Lx1dWo4T4tJbtSN55roDBLCvNAfEbE52jvQbnHULeKCsxucsaW9pMxdrxAXb7LZJ7A6f3yRzfLc8q",
  "key7": "5NJ9EvwVkKLmkJ2dLxAZJM2119CDt6RRvj6ghU4cC2N5Kf5CkZ4i7LtZ7mNnV3u7sQVzxKEGLUZHccYBSJnfEJHM",
  "key8": "2GEU7iD4TVoYRRpXHaa6SJoTotH21gpb3MzDvVb9CKLwn761PexEhhxocuh4szWdixS8WWg5g2vsvPXhuPx1WaAn",
  "key9": "xR4vLJdo43tdt1opxH9EQywC7hnZJLFtm7h1xFvWLq9G54y4tTcJt8GrXewGUDjyBwZPQgdLU8HmGJAwFe4Dxa2",
  "key10": "3Zs7tthgBbA9iHdQiC5HP5zMh8hbZnEWCR4LoTwSGd8ZTGAxTggWs9GsnDGKfoR2ek6AhgUD83EFgRmgPWtq6pKe",
  "key11": "5yb4aP6JUVZTUJL1zx9fmJvdnE28EDvqAgu5AapnyXqG7KA2od3KgFUKaZth8vd2tzHiaHLH5darbDr4PEdqbxW7",
  "key12": "8HJ5KPirwah1dAe8ZZg9vSAqZsGJCEkWZDEJKDhMfHrBQRTkLdAog5d1xg7yfDPYA2w7z5x2M9wr8Z6RBKXrDUY",
  "key13": "n8ndo9LPyLb532a49vfczgFSzCkkELe3uWcdFgBCv5j4EnMP6MdjpgjQjst32jpaUsMm2B3KAP98gqPVEqwe3wf",
  "key14": "4qjaAnkqjd3EdNofbQXRTak4S8i9XvVRMPmgoL16TwMuzFg8ndwJ2JooKkaNNF3TanN4LyNnoQPPdop2UnQhBAna",
  "key15": "A6Xyt7b48HuD6NuwXyCZag6pFeAtMyNcwSpXJ6yEcLqUSWr4pQmKzZdAxTXaFrfhcCU4mL4CdhZY2wkVJ6F6ptn",
  "key16": "4YVhhchjnzeaXLDbHb9VqXuNoc1rSFmJkysnkMqfsHz6rLwzrK9e9wDsA4VWUzvqSsn14mNdYakwb4UywGQZJAQs",
  "key17": "45wGUhJqkuc8zfM33KiwYHf1ofcAtsm93i4juWf8E4KGnzvbkVu6cvTPJGwNVaRvr8fpHZcW1VW86qGXFaTD1s2X",
  "key18": "5EDxGyNYDCruUq9rau6igkjuDPEsHoC2gVqBzyPSfLmasvywsKpkcD9ewxzCXtrRjyrF5sUejHhw7JYMycwzpEck",
  "key19": "5QPDKBW2bpeMkNDjimStwLv8ZDNxLn96HBXKmbtGXLGqCevir8Tp4vqdCPaB534oC8Yh9G4rihzwzmJhncksDtJF",
  "key20": "7SzsD2zzMZrKWEgqxcxaDvf4Yqy8ehjHWVnMjGMhqS9H7tHR7tH4mZnBLgjcDbq3BgJpSzqtTkDeUwHE7bnvxTv",
  "key21": "35ijHnKisgg6ZrpYxaoPKUKvvJQ37a7VB7esRRkENhrsMkHWRoj9Fj9PALsSDDx5BSEypWh4ZxrY1Yoj4segAYTP",
  "key22": "4NjaGmThf2yYeVfoAEPWWqbjwAvy54e5FS18xPqDP4NoBQAE3fKDowsgNgF44QDgcyzUu8gFZG5bPBUeN5qvcTba",
  "key23": "5EnGAZoqiqec7JBAmSQCxCLNhXqQy8iiwGJR2a1ZuNVWgnnAcBApPsi8bQFTA8a95HZnhUHwUkpQHF7rh83MkgQM",
  "key24": "2raVoiXuRkxywkbDi4mBhxjQigEviJKGg2AcVsfZ6HGA2VLYXUYqmFW9NTDYsnN5aaW6qN4gPeuRqAj86CC5RtTv",
  "key25": "4tWTEQmgrjJMneHBVc2QD7686SrYdmwKMLY2HS7f7H2Dd14nUL7oeT9RzC6edidtUJWTforsSKcejk8e4FKmt3Pb",
  "key26": "oAraXEN3BQGgVF5NEBAB7mh5nFctTQ8obAzWKBvTYunZavJ2dDpUaAUwD1wWASx6aiXyzcdC8DLx55jEB1qg4Pc",
  "key27": "2Cj6MVapuXGPDYGf6kPwabT61iHV2wLmS9QNA9GZdYtNFeJ6MgJdWSr1VGVGNaY92wVzieQW9A2HrbA3CHnxNbz",
  "key28": "2FcuXrfdGGHwFHp2BAHh3rvtJzjZpVLKiPzLwWvE9e2xumWufA6628HVb6hDpbSscf15jdcwqDJDtL5AznU2zMH8",
  "key29": "5dTprFNkcgcntRm2eNv1c6zXPHstdpSGH7Kysy1hzmkEqDb1nQGhom5kTMyzkZYLzySQZBtVbBorrycazVU15s9",
  "key30": "3yL7tQUpYx26U6DZQhm9gfPi6igAF7QDchbn7Ak5yDjdx36dBtrSu2735faExAxMjJNRex6Bsg1vynNk7j4NmPvV",
  "key31": "4D1PYkns8utNJdvUQUUBkSoWGPkdDGfNhaWmEJmPdonuFaeWNxyihbdGX9V1P8ztsekPWN5zJSnjwoguwL5ursje",
  "key32": "WgsbZENbXyyCNbkod4c8Taq3wNvZsqx4qVQZYsizdurkgBnYAZCeDLDTyU6bnXi8F99Qb3YWP8WrQSk8NfsPjJD",
  "key33": "41czxdBJoeLpEzTsb4KRdacJFXpFJUd7XGMk8PpLACfvE8AESYMHejdUntvNCxM4nyLacfRRM9dHhC8FREyswX5e",
  "key34": "XTCptksyZpe1EGQSWjmj3EryfGmUHk9D51LbQTC3iwY1r3kUBiERk3V3qQK29TK3VTdfkgnQNxgvLk73WcvDYQQ",
  "key35": "TJW5TGaiub2NtwjxrL1zxY9KDZT6NH1dxCkDkkwvHGbGcgX6Ca4himRRep15JGXB5zrHxMB4qgMwFd9eZNf5nHH",
  "key36": "3ocboCeyspYQbjUVXrZjp6V2uV9oydq2nq1SHRA7j6QDArbkcVTX11q8vVuuebKdjYeyWCJowYvRZmi5nvm41FRv",
  "key37": "3qeoneizNRESa9wx6rYyR2VoVfY9cMqSPUwgGdYrRh6Y4aeDvfTofF7yrF2n9dNjJj5cLcxcbgNm6sn4g2o4d8M2",
  "key38": "2bBRBYAsimhEXnfkohV9mxSLbJgRRYAeTHUUh81jBKPRydtFZE3cDS1LZQ9jHuLmqpNXSureKFPwqoeXUq3qVB9T",
  "key39": "5SHwgPeGwQ6g8TKT5qXTnHLSEYWJB4QStGhwKZCoiFtKcic1H8p4NSrJJjKz1Uj47ApadgDDUMm9ZSHa8uabcpzi",
  "key40": "1mmYUXjXLqTMfdyWniAV8447wvUvat57TsHNTmdQwGN2VoExFTze7zCdBDUXAmebDmSfJC62zLQ1CKpJQdQmJmg",
  "key41": "56L65PZ81GcGqBwQwLaffFEVxe2pnyzk9EtHM613apPoP5B62feP8VXRcZS6Uuz87ZbiBk3gpm2eps9NT2n5rLAe",
  "key42": "42YDFHntUf3ZV3SsMd6Wkgr5MAZ9YE9XvU1H69RHoskCqJCyR7f36CdPa8dfspKYcreetxL8yqKwokJUtf2mL6tQ",
  "key43": "428PaNSvdMPxgw3eKzPJTL6YZ3wDXizgZB5WQtM1yK3thJQxr36nohVPoozWGBUm517BUe28HoH4Hdu1wtcxo4fe"
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
