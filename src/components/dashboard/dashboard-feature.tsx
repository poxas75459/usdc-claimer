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
    "4aYxduPGhUJWoAJH4q4yWfsMvTjAMTd2eXFzhsn4njjnRNyhY8y5mptgmbHR8GK3RQ65wGQBRNEKYz3vzgcLjLL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33MUfsdJz85LXHbA7hqFyuWeFj7U5hVmx3C6XTYHBT2yV5gFHZ6SpDLNxbWCw6PaQtxqrBNaN6iAGVyULF73FcDS",
  "key1": "2W4oMtGdZsM88aas4U9B12ZJHk3M1FBQj9QRfsMriP8fvfER7fYCrZNihDeXTszqU3G7V4SkDP3nQFPc6icLSt6w",
  "key2": "2tWdLmeCHjwUhrbGMkVdw1gt4DJrKYEt9V1Ek7ZVdNf3A26GEvQ9hEPi2rJ1Um95gQ7JWC74NVTtd2s7HoYJANn6",
  "key3": "7VFb3Y8egVU2ZvETrgJzJjLhidt3hqXtBjArS6Ni2wrRnYZr7KB4aiKcrpR9YWxdLW282B8wvJ2HFANcX3Bg4uS",
  "key4": "3iV4yqKyAENC6CbqZQsp1j4NvnAw4P3ZF5VcXnbjnQVH83w4HrS5brQ4uD2bqaohjhbDoWG3PSsAs5429j3yq7iH",
  "key5": "34kNnuinup5ndcX99aQBBaycNRiPXYumbDn9UdHxBPgQ54yiKaw6abFWf8XnQKFCSjcqXYGP4R8RyabZtaQ7yLLH",
  "key6": "3S91CukLjKQR4HXMXhtdwT4JuKaQRU9ZEnigVC4nqL9DwMhfv7RNQmbdvoqStnm92qPTnDacuwMHHpP7HNQwGEGk",
  "key7": "5t12FcfmgU8jdNsnrUVdHCaXctZp7UthYqoTAuiUnrJ5Weamn7TsB5TiqQ8dVc4GEthSxtGYRo7sdGCdN373PkKm",
  "key8": "4VhhDtn145XK6vot7LdvEzxcRvUnMhDQVgjH6y3rEazvykY1dTQqhWPrtNza2hPiseumwtdZT3a868iPGm1QVMXv",
  "key9": "2wDNfzNfzX19dotV8cSNcJdP5QNekqBYcjB1UDn6D9rCy1u5JGZXR64CNbdYAieeGMYxZeYHKDCsq9D2MjUyHsH3",
  "key10": "4RMBWLqAf6cMghJ4PDKBhiREyEgFoyiM3DKbKTiicvHBuNAipyNF759RAsYEoAKEN9Fm1RyPB1p1PhHYm6YVxAp",
  "key11": "4NgFFrRHotfeNLwdgwtfHoE4UQL3dr4quuxxvGvdcZ33weoZHF7SvHSDnA1yTLKHLhG6A8bsxhcrUkVSKkWn1BFo",
  "key12": "Sbx9JXNMBdMgyMg7XemykspqpFm6J4GYf18jEjwMUo2U5jPiyMAR8iMWFkNmWLDu3jyJLvnnWsixaRixqHjNPCB",
  "key13": "3UvPpvb5yVo1Sbo9DWC4TsaxcUBRKTmVpKTEXBvPCS1aPMK4bWkMrWwNuEJRXZoD7LD5nVD2Q7sSShrUjsMq29Bm",
  "key14": "2jc48xUZMi4syy3DGmBx7j6ZFv9NHpn1wWU4EhNKDyxbHcnTj3rqLYnix87JQjzSbfAwCJ9CY3fydRsn5jgGS8AS",
  "key15": "3ohEw39eSj1gsszwpSUfRy8k3469wtBbdGmJAXb1tphfBq167zbD3a9jFBDvnP8Ke1KHwszKxtNjeMM2LBiKy3tv",
  "key16": "5L1pQzyATFby8Vizpkxi23Zhm8JHDWwjt3EPCFYc8r8Wsh8nboX3X982rP2vqamwEnUfmh4KKrDdF489K78oVjwk",
  "key17": "2yKXePMs22bcEFVdSVexvVMJGXENPYES4rFsPzAFXq7oubbgbDeW1aR1RUJKGR2DjcHjvxPjfA3jVn1HC1E2q9sk",
  "key18": "4YbCMeVvgNiNJC5h3AESyMd6BjLzoWT1BsDUptuxRde12uotAv6ayiV5GzTxPrAUUyRnkFyRqhq4upobjZaSEehS",
  "key19": "2NmUifeRPsdBqVYq8zxYW5j6CsiTrw2Twt1fd6PAbRsFB4wpAXtpozvrwepzELVUSgBVcaWGEcBVRH1rnGT1FdNn",
  "key20": "3iwpL7PpoBnWQCNHvwwuGQrhCTrPy2T9wuWTXogqshcjcPC9J7w5aYw3mhVn5VXgw1bFTjKAD2hP5Y41MEsiqbq",
  "key21": "2kbgwY5PywCRyWHZjrq5xZ1d6cwAbXNcAvbXHimmG9aM4ftAJkxRj9TKgQrQ3bZCveZh5YjjxxZqHBveZ9s8hEAh",
  "key22": "35tsdSgWujifFp2D98UVLhNskqC6NR6PZM7zLf3uodf9vEs8ysN5RWvMKX57mevN9VKh3KBsV5kNYbQ6iyPtQ1xM",
  "key23": "EnYgqmEd7bgQSn1QXHv5qCM4Bc7cKpWGFN2hAVXD8dkxWvMXtuQfHLMearrDY1oaMVu19hysnbUNgybKGCUAzJn",
  "key24": "39KbnuGGfdtQiV9ZGVFsqiSyDKQLASRUyfRXF34sKCCTNoZwZ4ppYfGtCRanMZR5tPd8wFQcMvddWCgPRnbQ4zCu",
  "key25": "rsfwdXiwcuBhk3ABBVfBr2vi5VQpaEbPWSkMhVhZnQ48MvRztuiUyB9UtruxQZrNYj6DCMmZiYLycG8WTzHHDjD",
  "key26": "2XXj8Yfzw7g9wRDmztosZYhZtJ2LLZt6RntnwdjVgJZ8H7jHZ9qRhWXzQxLtnguLrdEpQQKKYtJfWUJ6sVRKcdV7",
  "key27": "2fAfpHDDgJrJLPUZrbHUsyFE7kfwy92YXEG12JzhotifW79uALSwg8mHo9izgtVefmdPrWuT6XY4xxbL5q5gGwYf",
  "key28": "rdbtarr5BcYX7CVVCgEe52wnjZdNjreWD69o75iCEiNKEEELQ8Zak1zSMsQQEK9gnDEpTWTLzuqKVcRaM11VbkA",
  "key29": "u5cBiYGQckg4uazC1WVgYG6oThn8yoD3aSjmT5Mzjnx1a449hAi5dizRJrZPNwvzGjbSv4ry18WJLgeuvuGMc7S"
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
