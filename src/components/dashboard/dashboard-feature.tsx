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
    "33yYXRX6s1dMB1kJA57hANYEkJ9ttam58zSj6hbZ44QQE3Cq6AQi8Q23H5bfMrVmx4ceTMtHWqzCvBASnj4LeABe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCwtFKhW5jtmfsbbEyEKfTx7pRtwcSmF6rw2ReBKSwFf8EqTELVmrAkn6PWoi8Hkojx38jzfqixF91EeGejoDmg",
  "key1": "4tCcso4vAbzAQV8jPBA5U6LiqxLBbFH11zjjDkHwba5HmDMQ8LKMRvydWtLDRrfUmptZbxn6rz1cxdXceFQCLxGh",
  "key2": "2rL8Xzm7j5SqMvKpWguMMMwjnsPNVhFEpSomCMJLnUqPanZGFYC8PFZ1Pm4zTy5rjAjKBnWEFdgb5hQJSMkcdmKe",
  "key3": "42PnE7h49xncNahVZ9Q3pXftXwjct8qaWqU7zGwJEcEwoaLfepp3umMDPw3pYGGWGkMgnL6G9rTL734wEUsDzpBL",
  "key4": "4LRjHv2VDSaadyZ6AGY9ktjmeYW6jYZKDdPsHnwesLT1GTyvvxKHKGiFhxAKJ87dnsj52yQGPa9hitoVqMRgBNx6",
  "key5": "4rzedBwrtdRVYUMxQGPp7qkZ9W2qgvPXKvGsMRtsdbcyVDuSc53xDJ6ptwQbQKbVB6oeCYV41P1PkiXCHgqPUfU9",
  "key6": "2bLbxM5QTNKVAj2ZerQe9ydHcaz6buEZJa6P5GrrM2oysvQdm7WNNRfsuSsjsuxDSNLizyqhY7PDWxLLGYjNZFM6",
  "key7": "4Kt6FiAWjfz2Ze5VsGSnpXMvsFmJgXefz3k6Jya2NnFfaDNB9ZsVnzCQNQuJpQErhXPzTZ52Heke4JehdshNrZw5",
  "key8": "4iWBYuguUwdbKXcjYxb1QHZgcwoc6kcVooQDPpo5zEccrg2fL92zyQGsutcC9bZzSqzP7g5uFEkyw8AcTRpTGThf",
  "key9": "9cqhBaeH43dHEJzvwWgqNpNjcTG11NjkWvySkY2vBiF7fyzw94SsxGNG9xydJjveQZ8zJHjaub8yXtaeURKAQqe",
  "key10": "28sDBQfSFxifPX4LJut3ErKqSukF3Uk5XyWuyyg6uGwJFBsbeTUxkjHQCuanfG2LqX6QcDLfYQqBCCwz9WoZU9wo",
  "key11": "2sCFY155z1zhjc7Xsg5szQMcWk5M1aNJXq2jGJzwdKCFfRrCTeFoJRtY3364HoXBmL8QnMHhi8wEfAwc3W38EmFR",
  "key12": "3RcF3T54zCK6hfpRv1Mau3uanfnGLzpo9uTxWjghogWms5YvrVMuUmFCNQRHv49nyroG29tRSDdqERoCJBGFPwWd",
  "key13": "QoM5UwbRNTHGqCAqkFpjmX8fbT5RrBTyL4agGvapTaxHG4kZVNrWTX3PpPwo6XnYVchYVwx9tFN3tXw1RAd1bLN",
  "key14": "2yRYWWo6XoauvkrnPk7RaToGSevqMsSvQDxDdNVWWCnMAZiiQQHG7eyx8XsdfSY7CAXMou7KcAoSPuBT9hRgDSXk",
  "key15": "4AkWbYY94GyzkuUQzKvNe1cdLs7RdKzM57fVtic2XBRqJraoGPnX6ZmWYavuWDBmNuBmNSi5s1drB7Grpn7sp6aE",
  "key16": "2XKDKDeTDXufqx2apXMxyEBN6WaRMBjUtdHeFDbayaco3v4Tg8KpecdJ3J32vLWS4iTvrcX1qi9YEvPWCbXEyNco",
  "key17": "5iewNaaHqERipBV4ExNd5Ev7vomocPJ2QdFJPEynjV1VZh78nDpTtiWBj3fQmAjiG6YnCkNgXhQsYXLsSYqtFLKL",
  "key18": "5Fyvt6SApUbuSZun6R8pzRCapiFfDM5fmtJcCxMwKXHZBHAbq6uZSN7S7Td5EmU5xHJadn32bCroHh8kBQy72drU",
  "key19": "4d9jx6jeP6fMghfLdcuF1SrqBsU1JeXGhZUPf5ZEqYH8vGzTUw7FXUU6QfwHvQm9kNLkj1KDLaFV1iCyyjTFq5VD",
  "key20": "3uziEVEwMMvBUnPXrVZcxGb27aGMzsZASMBzqhMJvyrVYsbK4CptnVre4JaJh41mLr8qKEWkbTTXsSTxBiTxPrgP",
  "key21": "3R6CQvk7kYAfzWDUEPXcbeB9WZEdu2tzFiwgoGCckAwFJGmNQRYcne3xPT8WgjHd192mLTW5jVF6y6Kzbna4X7JX",
  "key22": "4GoxKK4GAMaEyD7yELPJfgycS5bPnQnpDVjviu6eHJA1fBjgSduAkK56DkWAvwmex6kaybtkk81yEYVqK76pbh1M",
  "key23": "9h1esaMWHmpdao3kECUeDVxzg4NLhXv8rwiiyJqupEho7XwDHV9w1SD4JkfsvrqAS6Zoaeahfyx3cd4rA1bjVoS",
  "key24": "5G34qf6Za3yMRCdBG8LvkdA4sRSnWBcJgrW2dh5oQLb55YjsEieXryA5jKUdxtCVzDRVtK4YoSPsjBbttvumnoeR",
  "key25": "5i1RyWGaTpN5ANF6us3cpygrHB8HL616QcbGDtAeegP7H5vdSrEJ6KbZJJ8dyyo9nFUvfsP71esxkTiQxUnARgSi",
  "key26": "4pevhu8DksZJ69J2CNREyVUYmTGrqntE2sY4BBrRnbLzS4WRZm1FNS27Fkfm7moZeNEBHwCZMiUEUhPnC5w3XYiE",
  "key27": "5UwwccnvqXSLQoHjpPbxWruJzEWqHsdutvpDMZynaH3sgs1YhDNYnbhfBHkPccNEFZS8CgwC2rJ1wUjdm5r1zMR3",
  "key28": "2zsxYRdppS6sLtwBwZtNum2EXRX5B2xXUhXfCgGuRmt6yifg7fLQEgvyWiXdJPwb4oPBncqTx5xyUmE9wGUeP9DB",
  "key29": "4VadnTCMbN2J4pSVCgiNBe5uzyE41bBmg92w8ngDikYneS8aQGCySJfA1pk6XRq9EiHHGx6ZuT2xQG5yfZe6BkV7"
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
