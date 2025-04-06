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
    "3ETQxxnVS7W4FywKgcTto56oPMK7mHybSwpRbEYtvHm3tVif8m7mYEJCLEg9AjHengxK3cQUqiVxhoKhGZEud62c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57dLw8uTgaQJ7ysSah1b4USkbZ3Jpvk3DGD3nekPJ6RyakxYgY3dcSphRkcvkH1WPdA8JLEngvHuNzmStRHGw4f9",
  "key1": "4FjjEtVcgW3Z49FuNU16TXnE5psWg3y363EdPC9v2jwiS3QMsMd51ixR8krZdaiGbS8z5DvB1AfTuUq9HBNaccBZ",
  "key2": "4UBZDrM1ceZEnMdJYKJPuio76vmtPpbsBd7hXia6gxM9KrfXtGCRkfCZhrLmJjnpZb5UnPhJTTwZvnrsaamdm39",
  "key3": "kDPmTRefLmiChi4toBh21yZcAZSrzdUE84sqENgkg7g2FnEr6oqhp8Ea9QVrNfHE3GGtZHN81cn4ebnQ7LyQN2w",
  "key4": "4k5m3CVHobexL6rQo87ZLnH9ECAc8ctm2WYhUrrpam27tjxq8ZEWhionFoo5u7GeZwjaeWyvswNFHHVzy2hh2Az7",
  "key5": "5gzk7K3uJEja6WQvjT6n5zuBNddQUtJxazM9vXgTNt8EPNWnPNpggCmk6K48KLYoB9np1WHBoH4JcfokjR6v2aWv",
  "key6": "3TAcYtU884QNL59KnjEWD89q7siqhea7SccL2T979HXcpYyRRwJSv8Fo5io77E2dxGFv5bB8gUvb3J23a8TU34mc",
  "key7": "3mAZfT2hZmhFjrYjGQKUDcoHmUaFTrxtgmD7fRcsBb9J7oJiehaVRWWNxorpVJz8a8ompYhaaeeGkzJqBrMv8pNQ",
  "key8": "4QNdfGQJnFUzhLyVijjwim74HtrSHqQF4ob6fi2Aic5FRpg151gYNwAeWFc7nf5A3fgC24jYFW51GbckvJFWS9os",
  "key9": "2Pn1d7d5UH3eCdGWMLdGMZTFfNkKg1zAuMpwSMHJriZbdWaUkMSySmuY9vZS2cci6aE8qM86vCK9R752tN9uiiwS",
  "key10": "2UiEWEDuv952p4XhNE8RgZY5UGZ6wSHSFpVvBjx3H5VmedrJ8MYqDx8L9yAnKgf9QEzaTqL1z7SVDd97AXxcN7ga",
  "key11": "5NXrvrheC4z5AsvC2guVeZ4iF8mq8ikLenBncbepC6fHEXr3Aa7dtZhjsV7HNRikWMco3gYarsUmMaXs7S7PR3eN",
  "key12": "3qKMtJjvCtvoUSzCFvAQmFPapPWayHYsJFmBjJif7zYLNARvYV16K2YQnBPKVyWTnaanE4qLPUw1oyo3koME5ccg",
  "key13": "2j8c1JtwDW79k16fAtbAakfGdaYzY3ksW7r18opHcmVyj2gREwhnF8tSpi1ujv8DdGH5bBjyHH2dyf8obBMTU46k",
  "key14": "36RaGCx9xWDgtr29JYJBG7EGmojeqmWp18kNTyidhngB2h1saq8YSXUwiwq1Hw43YP5Ub2J3aoERTfrxa4cZHDvD",
  "key15": "2GgMuJSmNWbzvvrmx4rtP1q55kAKTLzcEq2CDrJba4xL62TNTNeSp7gV9sgZ1FqkWPNrbP4nMEe8vf8ToP7oJvoJ",
  "key16": "5UFJMQdaMzph2DdaAvchVEUhPx4FCtwE4kNew5VnNKtmM8T216AqUnSonuLnzGyJUh5uRWqiFzBLL66pUJV2NJYJ",
  "key17": "tbgtQhhJcRym9HNowNBdnMkhpPaKpRAHv9tDgu1AzGY2ZsDfy4vVbJLQHZu1ModNs7gQXy93eKV1wSRYA9pu86x",
  "key18": "56vtx3C2pRdSgsRLcderBCaAUdWXmdDe1rTMor3ik1FB3ammRafvN3ZJAu8fdUimdK8Lt7cPuHfK3oo96iPLxC7T",
  "key19": "3HuuP51F3R13mV6HTzKncpSGiEMxhihx974fJT1KARQeyWpFE5ZioxpvMLUt8zVSSqwvgULoop49cN8hkg4dPCSR",
  "key20": "3eH4n7ZVyGwrVnqxHJ4nF5dp7LetqzZFpHsVZ48qQeoQDwEj38o5CM66tsewbKDH14p3W3yisxdstDqswCRtp88P",
  "key21": "4Vs3yDEf3Ribk4AycRGLdd8M6KJjYdRFynfiQKes4GFdaAA3HKYcyYAbmAQHcZPQxTKWNLj9XyyV71tChYbZC3kf",
  "key22": "2fbUueqru4vXHwDtjBWKNX7JUgzAxodKXi4HyhX1wj6asszpN1ZaPTdn56nPi2K4vriQM9Bpwu9rtWKjYc2bVBzK",
  "key23": "4QytV74ZMpT5iaCURXwgUxed1Psr2g47xNDGW8EbWERyzFyh2WkteNhWATYxZzHsMzDp7iQ7JjVkgZH1F1jAvG57",
  "key24": "3ZMXAKSSsE264RxcX37csXecPyiC7fYZLzpKmQ9dd1oNDm5aUVivN5xxeZsLGaNdzMDrFcPQEVQ79NwKqJHCs4tC",
  "key25": "3v2VciDtZnZjkE6kt3mnnyhRDPmnRtT4qYQ8MV3aGeHnvjvUhwAkB2Bc4Zh8e8RPFWtRqqrNKvAKuYjhbqmZTeSJ",
  "key26": "27QzLCv7MDQ6QS4y2ApGtXtsd6HrHEG2NraZwvGqr4Fi2Lx61nVbBQQ57nswvNKZQfsaJMeTcuxsXbUVRvBCKz1B",
  "key27": "jEPQRXEaGT16ejvDccuFfsNjke3Yaa3X4qZs2Cix9eWzksirLPuF2mSfky8GRQcDVtMRYYKSRF78D24g7bRt4um",
  "key28": "2k4nG9z5GyKkQu9osQQyaAR5K6c3UsH91uyyfiw7uHMss4UYWVjRz3prfNLRFA2R4CKiqyyUMsXFxY7LVHnxpwYB"
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
