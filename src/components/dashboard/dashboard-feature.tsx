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
    "4EMJCfDRRpTkGvc7Q1PwtM2CyTRRcBPo95HhD4Fk5KfXtiK4fH2ohsDAxGXfuAcE7bK5nmd3T4iw3ewZqgF2M8Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZY7hfwzE73iBe7Py5B58tjqmWe6bxdSpa9LL8qVCFzc1z25LrPNPeeMZziaTftxX61Evw3EMFw6Y4DHaM6112E7",
  "key1": "2ZR8zD1AS3Q4o86xvHphx9iNHL7dpydem78Lf2Sm3L8gykfkXoUVeoj4ccVqBREAA5ZDxw4SDCjaHG2ACT9VFzg4",
  "key2": "5qRqye4EjyyH2NVJ64vTUdbTRmXqxXbVCBbmF5pQFnTnCfFNL7BRKGjgjMVmNMSwibPFetiCPob32no5xcs8oGLu",
  "key3": "rzeeBrBdaq1T8U4UnG3GUxNuxuR1im6iFZv5WYX5GbKajLbLaURrUNoD2c4YvnjcSxKyTd1PumM4zhxMMFmpvhj",
  "key4": "5biTuafYJHzQwGxWrL111ZCscsne4rqvBWNcGB2yS5MBtnEbYzFJuPVZE8MB6VrbM7QgxcAkeV6iCovKs8wmWtHK",
  "key5": "277C5QrfvDdnDfZ3kS7Wp2x1BtBCCJg7d6AQN8fjPKDx8updSqcdjhD3XzJEBGzLUAbbGLNTREYV4sbEn6fTduu7",
  "key6": "KNJ7EBbttjWcbvfA2jR8frHGdEmq3zDHaDtcZgeMa95TyuPST56LAUNqykphkLP8v3fssjjktKMchgUsScgCSt6",
  "key7": "2Eg3Pnrrwf83nVnKFtKqekUhSnLGG7ULEETBsuVwLQBZHDWXaGjoVXJfGDcbQ5fjdfymLV1huU9F67xCxyUeEMc2",
  "key8": "4rY1NV1PCgUDsajFLepf5vHMqFe8TNnHTh8aKnW5iP1vJGyau5vLAGjoatJHwJJje6vQXAp5tYEq6WFdMh4TMRVn",
  "key9": "4mEJtquVwFGVRjoi9ub9tpHUdntpae6v8esB9xHiH5R6HrSEfvdXuTh4GHFof95ZBbxAgUJadwK4VTvckQkwQj59",
  "key10": "q6hTyHYZjkaXMSHRoTiTJDJ8EdT3BJSe9PPi9FPTzgM61bUamj8mJxWmP8dksm71jCdyd5BWSXFdxFxjs51L55J",
  "key11": "5qbVPPGC9mPgdcYqcEbfKWYTxvWnULVWUs5M5CaQHcB1iLzh6FcS4kCnMj2n7n11zZPZH219N1CyecVfjx8r4mhB",
  "key12": "vewLh9iios4nENaXrWxPzMzbLzfHbbX6UgUyFEab8yryPb2YDfQXWtzW4W5TdkiF5TdZgHsfKoVuMtU6mJ8meXm",
  "key13": "33bEdEMnbqbXrXbXYvQKuJXK6z6A3ttefctmMpma3Au2SHSFZHxDS77Uq9kpU6SQh5m4XQzp7KMpV4yQx7dkG1HX",
  "key14": "5hd1WRPtZFrEzPhbcggZqMNXKH37JSWv3SoCpVU5LUfCYS5ft17VguYjDJUrTP2AEzxNzAmmkfmXzNuRSaXn2NXQ",
  "key15": "yPupAte1qfR7nXFd3PjHc2CuDEHqNf7NMkLTQXgmQ3wkLSZdZU3bnhDnq7s2ipBwTwBE7RNYn79otHr1uKA3VuU",
  "key16": "5PdSmfQdsdGbTVu2GE93g7UGanWaZsa7Mnn6bUXKVaKTJaEbw8EuGGpFLCzDm9St7FGrbuW1dHZMHK4W3VCVPRF7",
  "key17": "AYVeYWutD7Zw7cFhzAQLYqhvkrdkKrd7xL2gx63mTuFVrRLx2BdxYVkjjMnFvdHwSH9hz27XFFGFR4QfkwxEad9",
  "key18": "4Wo7e1NJW19VALy1rtKxN85srTXxeuQqfHYtSy69YGdjSU3JJ9UFFs5qNSJQ8kCegJd8gRnYJXuwoMWjH5EBhQBN",
  "key19": "2HoaQf4udMmpf1CAhWk7695f8g8o9FJW5wCEFgKTeRYiLDjsMT4qvPfY3ZJNjcLipmHtzn1jd4SsfzAhen5nPBqU",
  "key20": "5ADbJyBbD9v8XAJjcX9MoYVgSz9ubMceJZArBjCGZ9BdeGmbCuJWbKxsSjYPYU4JcxPik79441ztB3JPh66wgoRw",
  "key21": "5yigiuAhMGFUQra3oZvB1D6CdskqMrP4Bp5JZMGBPV1ddy8tCJZHMPzoD9wDrSXhsYm8GTDVV8j35CN1KAXLdmGC",
  "key22": "T27rkQBAJAAwGYgpm2F7gKjKJ61jNwUg2RYEMEsPCM7i79G3KhqmwB8KxubM4iDmgjzxZu9e4bF65wRxziPnPfj",
  "key23": "oakBbCo53FDGrA1RxWWP9i5bzuEXrJ3hJPVGiyrkDtNNT3GtBFGtPp98UD7Up3UfpTgjw8jeZq15UfHEsJKKQXt",
  "key24": "4QyFLqWm59GNriAMyyBaD5a6VhqdvpdGLdEG4SY1W6pM9jcPEe9ces2tRKYb2c8pXm65mBuxQuicPNVEZtDadhGg",
  "key25": "5WdoYiADQWt83ArnhkNzgRTMLeRWqTwzFyN87uKLg2XzRJHe3dYb8MY5YNMNh6tbhjvoRHB9EoqCB5kqntZaRaPG",
  "key26": "5rxZkup3ufM2PUR74EVBXodtG9Gxv54r8HbQXxmDVh8TtH9DaiNFyiPfHfrWEAT8d9Sky1vXpXftnUEeBTd23Cjn",
  "key27": "c4hQST7ACkqq9FRrKt4p73gCAbm1DEvUHeiVsSQZntYV47cVhXxehF93CkPnysoC19hkFg4xwLuuPm9gAKmhsJV",
  "key28": "3jDqaCnoZTErXpxmWHzQbwFuopj99cD9VfJ9rPak4xcoGEhuAxdxNMK9aCHYhncRoAjy8Shn1oiBTFWGoS1JkYi5",
  "key29": "3me9dnFfsk7PDjZrTZThXqVrxPdNS3RsbYNbjv48A2ubYjJVt3oYyZ8iwwREanHoiXfwYjMuEXurJbxQmgrfHFPe",
  "key30": "2hvagBhE5nQzcGHDhqRcsK8XTDRnkky4V798hZGUP1AwwvFntefRNGccMk9aCcpy8xPhVWjoRd66LmWshSk2jHEL",
  "key31": "2UhLMn4VyJddKXvV1Ydp2mSjtrNjgvCzm8AcJiBzA8KuuVrCTspvnNv9zifGLVfrD9MxMTJ9qEWucU5qDSSoSDar",
  "key32": "4NXhMtWQjAdRQsLgmDxyrVhffYXXjEkcW6wrYcmz92robE7q6vErE2Ud3bkv9Wt1yMgJnsgsQVgQTeCLkR3y2haQ",
  "key33": "2rwnwgatjr1psEQcXKUf3e17CH8akLVohNbdVykfxHXh46a9z8BCwAoNiT6W9ASFNn8Q3iHGQTt4pAWLBtWsPXY3",
  "key34": "4zeUesTFMdaHDCRBbcAtwvEovUpskaswya8bdoUcYRYN6SjjRJJUs1HFbkGaj4Ff6ENuDAnBK61Yqme9KrbZCaNF",
  "key35": "3a3MbbySwhu2YoXvfx5WNSehBvsPFdNn9Dps6xwXU22WSiuKiQFdsqK1dEPMkkwTFww9BLj8nhExY85kHdGJmmP",
  "key36": "zNLNysBvUq41oAdJaRdhd5SJxiuztVQDeoHCmb8HYHNBDPDFTJAk2Ds9aLyrLFcfendtaycSFFGpZmDrxqmB327",
  "key37": "62nN91TLjhdJpqEqNLXnEf6LW9gH8K1epfvRjF2jWQDaeVCzm2DtU6SghdagMJsmAecE5x9VJAtkAnuWVhdRmwmh",
  "key38": "3b6vfgb2T6YkeF3s7Eb7RAzGXXyTwNCAZNxN6G2MisQn4RRbLuUT5sHAHBjgEumZHzp7yH7wiAEbpe6U1U1mym5k",
  "key39": "paT5kgyQVmyBPWpCZg76op8p6gVCC4iWNQbffUpyCcEbUvYoo8iBf3F4QQ8SSn4JFjRs2XABDcSZZ7gVFJP6jh5",
  "key40": "jHpJQ3t5Y7qoch6gKTzk6fzDXx2851PfiF9Ub9nJBEFwMBpAER6eWo6BFgzWMoVmYkQcBjQktdjHze9ZQPFvQD6",
  "key41": "3zEoa98XFgLvmkyPyXh1Mb7CBT9rC2KF6BpeTuELXVjjwXtruq61NNi5baVqrvzXnMe7viw2cg33WzfmVxbAGdwS",
  "key42": "5kKiT8yGAaX3b6WWN6v74z7frp1ehKbqf1rEeacchiWXnE4bT6YcrUi8wf2bPqpavaBAJkAxhEAnXomJd2nbtEbL",
  "key43": "3YhhHLRWT2GEbZE2TfAKUbXSpHKKK16MM3MU8vDq8DkRVMfG429PY8EV4jFnB5jgjTN7FAFt7vzN2SC4EGGNth1f",
  "key44": "4Y7PpK8qPMheA8jpbgUo2mE9w7DZWC1KUdAQYvHnXimMkEibU64FisaPJNJgPhNK1sfJpCCDB28bhsaojtV8AFCL",
  "key45": "4UcFVwpeQyZysq2mCMKJwQ2BTdoN5pUgjDa9RWNyGTBj4wuDKjemKA6XMWk962eUR925T83DQQbv8gqtE4aeJCFa"
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
