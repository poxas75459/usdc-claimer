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
    "3GPRpNSbpE6Krb21pzvsmTQ9HbnQN9gcJoWcRbEnHALun6PP4fstoNx32wDTgoUowctXNPgYr7jYXdAfxvjJjhSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPvhTH3CgMhbva6E844nWddJAXMiRhJHSKu8BGsLt1ajLCp8FXAD2hDfN6XpYggC6PrvXebmktW6NAAqk5TUY8q",
  "key1": "AR5wX8j69GgURTYfJ6Cjm3brb5d3kbjC8ntdHqf8zANywcUVL4tNKxzoh2SMrUtpzwSkWJwyQhRA1nujZkeB6FA",
  "key2": "5eBAQxGUTY1W3mhweE16ehb1RvSQtjNczPzr81MRDTPem6NPuKTgbUP5fHNEZem6qpwfjHje2ErLKebSJUY5sxPj",
  "key3": "3pqYDR3Nu9FdKxmpJnHUw1YzKXkLPZiRSEWSxLhmwrZgHvva2GhVJWGMsYrxSKAR1zho9CDufv2CPSNkSfvhDRQw",
  "key4": "4ZyUrfevuBLT7ZuTzZsh8K2QDoBWxTKfWz5G3h2NBM3GJXNMo9pSn4x6xAkbra64VY34oZeAxksqHzUyLJygmc5p",
  "key5": "59wVhqSULXr98uQ85F3cj8C3a5NhqwqyH6NcMEWUkaoz9sJKREqft8xoKz9nRqQx9Erb3dthTHY4nEhw34eHguir",
  "key6": "4QqaTyMSnWUV9fAMZaRhskjKrynfCDkAxehE9frKyh7WRep3CoDjcYpcYvfBThpn2jFhiqd2oeR3bGGJjXdosw13",
  "key7": "4r7sMjxX2Nc78KhL3kXNPp8upzHFn5rf9U9ytetnCKEnAyRNfrrUdcUQahRRZRL6FBzA1584atQeumcvmruGgiux",
  "key8": "2u45UxVfPQggNGThjXS4AoCDTGSw1HJmCSLMHf1jLUa9eEMAG49CfpuM2RF9RFYjZ6Q5xLksSy5MbLfjawVmU6b7",
  "key9": "5J1x5ua4bFpfMVYbnSSZ6CU79b5sB6v2CumYNoUFwgYUVGy5mGDbiW7nqD7D4iDMZ8F8V4QsqmoJ2Tjxnzekv63s",
  "key10": "2FREZ4Mc9No3oGDGb2tvHHTwjn5MpmM6xzWQxzyyM8ntktPsGPJtbbqGWiX5wDxqDzsz6RRJXtxnPYZRcsNDh9XN",
  "key11": "4E8h627jsHD3KfnZhtrK98JbwHaFh8UMhkMud4s5hv8hRAAbTNp3KhHS9vs7nPb2u3quzT6kNtexXRYcCFuwSkfV",
  "key12": "5GxGs4qawguWFoo1s4o7gWodYNd24sstyKpaYUVJ1EDpyy33pgH5wSXszngcV4voeGc7SDU5veNEwKay6w5NqinQ",
  "key13": "5JpkeT4PprRVagEybEPinPd6rLCccvZbN4nTR2tyMArb5duPit9JZvdSL3HLueA2XGycAEKC9KZAYUvecvJjZXnn",
  "key14": "61xZkGPcpvdywD5CVWJPrfbgwwR9iSibKhA3JNhckoXhr87dceGfPCoTT3HaMao55pZMqzPqU6d4duTFqX6t9EHC",
  "key15": "3QJHjNMEQm4cBScowcgHiPCyx43pgj5jSquKNoxJ3MrVWP7FiM6tLwimwn5LZPTUqpuAnk3hs6cfunnGeRJpk2PM",
  "key16": "9f4qGgdsdiA65pfeLtpHibRgCNX5HRipKR1oUB127yLZvTJ6DyporbLbEfH2dRM3khziW49WR2BXqYj2NfAdUHQ",
  "key17": "56rDhxSB752Fj3QFP6aGhW5yoN1EV9zJpdXp7JdnLWGW8W6m2FvRXp885Zu1Rq6EFBqsaivZdhFfXwbfpgWEWHnV",
  "key18": "2RB7HeRYXFJwjYNtHQ1QFNBjk8XACJmd9da7CTkD1aXUGFgHh9GC3SLGHPiopSSm3LYAhAJ86vJwZnugjsQVqp3w",
  "key19": "2dyeNnBYCBKUbgfgunfpvCJ7HmStLHLZVVpriViXjhH3tvBBLRNdkuic5FGrBL9TFFYmG2MBZgmLwbaiYMSEmZ7f",
  "key20": "2bNnzSz9VfNz7Cq4cTFoxiVJBGUe5U5vmcgS2XsjX13tCWkvDDqAXd4zNCymQ9AGD5JPXJmw6UksYNJi28TVbDZM",
  "key21": "23tCtEXhmvdKKciwfzcXR6nGRHn7JFB8vrxaRvVoWWggDEi383cYrxBqMKfNKWXJ1TAhH7TXFsuM58U6murJN8Pn",
  "key22": "BPSDPrGex42kohhqcaEtH2vsD4THhVWBjaQKuRzM22Gaw9gaAuHELkNzcrMn2CvQNhGRAHswqT3wwHuP63q3TgT",
  "key23": "KcHruTrA15Ja72ENtJZoLELoRsZU8FUDTTwdgvfaKSEy5eR7zU1jMGbRUrzPGPa4t6Rj7KmDDVhck4iiYi1PVLK",
  "key24": "4CUnXYNMtgFv8xrp4cxDjB95wmdYHUrAmgRRFiJFgr7GRRMjY8e1dzX5MTurTByG6v1fWgWk7UWZXTyGjz7Dmrae",
  "key25": "46RDKyRknKmMKVeN2Y52JPCcusUWCy81yck9WVxaChFCmRVb89a6tqiL7SD6wXsZgHcYC5oobmFJnvq1onaAE6AV",
  "key26": "3CcUR7w32snLC21eXXMz5hti4fPGJqqDhHoXibVyNnnAz6PRiofeZzo6e8YAFKqLiZV3XrBoED25s3kiDZHtwFdX",
  "key27": "3yTfFCXvVkJD2qHVi1VF2bkLZwtWwf9aRGpDjoBKqRxoC7MeApyGuBoeaDwYjqt9s11Wob2e6onoH9zuAfDovQHg",
  "key28": "8dspnfEG1vFwVu9Wmf6ikcSkLs64mdbijZQ6cWfYrtFr4WCcRWK5y7mLSCP1eSDfHKwnoBRkHvEsGitFKagw3SM",
  "key29": "4jQiSyqv61SLHy6GK22mTp3Yxbriuf2qvTy65uudLU1mik8EfVQyodiyiyrD81iPxKNBSEJD5XbnNGsEKFAjRXfX",
  "key30": "2W9ngagXbd2S25RDQG89PnP6zHLT16E4pQw1dnxc89AsozbH2snA6njKrBf4hPW3699Gjhrcf41KkhpazrcgtZgC",
  "key31": "4WXpJsCHAPU35ookhhcDbBVqHqQRnW4NeySroPp1mtEgGpvjUrNsm1bADWrG5AT6um91S3bxf6Ewu9HDEDYoRaUU",
  "key32": "3PJsxc3pXfMejWiDHdfz7zHZuLKAa6PUu41mt7sJp7rpFgrCj6jzJcYzt3cTEGtBfKqB1NeqEj4HEZQ6ULNNSYYM",
  "key33": "vD7jwVTv3MA6v4pB85tHcujqUmYDgrNMggVEwUCUjvbFnFzPVhmweemebviAxcmRZ8wF1h6HuntbZbB8un1YuKA",
  "key34": "3mP4rVkEbbBiY9hwvNdJGqXGKZiMkrZUbMHHjjtho71BLvd3SFtPzEMDU84msVGVhEsqvyJncA2ZoCovsqE1Pxru",
  "key35": "63AYq7YeYXdwiuCXbn7uZj9kR4u3e4hdze3XQhow8xUp2CEaRR24MQF73DHjx9Wht2S816SnVAqV6rNQRVPAxqr7",
  "key36": "2yGBpbaJJQmrQtnFXRJEictpDhVJe73oSTxUkyUhZv8aJvqvfSKAiKzXZxbFvhVG6RR6yestWvHLeRo1cpTNZsUR"
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
