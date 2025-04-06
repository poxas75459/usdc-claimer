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
    "KbGZAYKg6JTouz7mNsASjLcxnEr3XvLZNw47a9DPoAmpS12tC824zaWkyEBphGkaGYout1V1BgMxXtJjq5U64Wx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sY7svocjUY76fhahanSzBeeCqq19JNT9U3J7yDn3AMfoEdnak9d1m8b4iSHGHPqcpcxFSyiMGc7ewcLRyGw4Ku4",
  "key1": "5AvY8MnCwM1ZeEfznA1e7bYPoZqosx8HBLSyp7CAv2xxhJbUqqSN563rBQ8L4XJQd7sADzLZgfvPWBPEp2hsy8GQ",
  "key2": "QpcgumyfftEzvuUJPPJj962PmWuEUv2muhwMwHoQzWvsNPwRx8RzTTW1pcSMwDBWYwL8S4NXhpq427pRcqEKNFa",
  "key3": "2wvxQWpNtW7GhP66qrMkbWgnFeZHybqaFYzvSYwBHrShbnyyWtqzXNpTb7cMgbK8Sr6CyZ881m2aTznPrjygiU5J",
  "key4": "4zxpPnDnCmgYg5tbqmb9AdQ4B4jQzCGJAP9GBYPt5UBdvd47sRvHhCaLqgjBs7PuQoeGcp1fBsN2BAXbZG678qgs",
  "key5": "H3k72QJuWwJY1kB5wuPtcPwM2LZaocEiZHN7GdvH8UNQ8vB15M1bvwVE5Q7nCZk9bJ4pxLd87WWWF4WZYXJKUVe",
  "key6": "2dp2ykYUPxmy8Asg7h3iZBLKm5qwZ8McKXejJxPrAeHf33NhubvW9AbUQUHpyxLDShLeD548NEA5xMrRx9YDb2Ng",
  "key7": "JXP6G7wpiqBw2m8HrXLeorNCb5GKxcWJAhJPs8qaWEFvzKwUcZUS83WzqKrfvXUjafJdwweoRa1kQCDqqa3iRKD",
  "key8": "3jRhQGssDZXXz3vQQAHjfLEabKq236Ba1sCd77JTgmzWMPmzS47PdCEkS7o3ZW7pkARjLP97RwBncXheiGad3z1P",
  "key9": "3Tn5d1mdijc4zuVb6NLvcu5VH5sA54PCuTCnVNFEhaWo6eW4Pm9qMkTddbteuHX2XCJnSF4xrLG7gWmJmPub8i4x",
  "key10": "4CNAJxumjae6uhWULWcRfAJxXaj89559ovGL8UdwBYPMNJdPaqV7ZqnwGSnTMsowX7Koi9CZTR8mAQDnZjJ4nvjS",
  "key11": "2V8yeSmLrenY66vv4GUqYdji66bNUogR9f5WWjyqbrirUjPhK76P1hsGTdT46hfS5boMtqJYYPW5EkQRdrWrwhGo",
  "key12": "2nfHvP8zv5JoXP48hRMG45fK6rGuZx75PFwK5zLUYT44Tx7SiPPBwYJsJY6gkEMQpHReCe7pV1FjToQbooVnhv6m",
  "key13": "UFr8gGfwBm7f1A9B3Vnce2NFiBRHRJ2t3nM1DekNoaQqizfbtu8pFXZheX7R6AbA6Ymvi8T6c4ikrMVWkcHo5Nw",
  "key14": "5idwkRZLNHLfBU81X9oMCfnxHHpnqsj4zhyoWVDjM79xbYc5BJofb6WWX4obYaubnzJE7p3PH6uth5moJ5k85wUw",
  "key15": "3Xt1XvuUco1jGAtPWcDbYU6pCknMNe9swktMfVjWG4NKxnDn8LHGkwtN2aQtYqnkFywB7CrRQc88hhnGWcszLhKx",
  "key16": "35LMz4DGe4jcvjnxEf1YNhXCbuXmTRDESbXEmUZKzADeHVL2uZQNRECWKDwczoeuQDpqvnr3Xmo6eBW4UDTYVmmC",
  "key17": "66SdCttVpLsFx5cpLfP2MtJAiSnHzARe1BQbfhx6dvo6kaALuZ7VBtdTSzGT8MFdPoKJ3SPzLY5CiMziE9LB2M1N",
  "key18": "3VbkdmaKAQipR3gHU9Dn9d6qx2wEfoibfJ8fj1ghjH9zQdiiKSsNY36KHu9L5ThccVMMqBqwUrTGkm4SvxEAUeug",
  "key19": "2BSWHiVjs4CkqyqStyiRjQRsGrvW4TMDkxHTcRGUQ8r8wCKXxCKyxgH267LSB7MQ9BZwo4XGh8rPCDiXppUwjxwd",
  "key20": "5Ln3N4eNaRqfEF43eN8c7CXpouMLCDFCFmQy4rRiiPohrgCUeuXuEqktWesbc7fECgsrX9Ss3prwtYEyJxWKNMzP",
  "key21": "21suN187E4EsjNTAcrcYSHTDM8rxocCsg1gcr45btiPxTHHKo4btYtD4SzKErp5kW4vDghT7rSRfD8vng1fMTV6m",
  "key22": "YXn7EpubVxCaKj7pRis39bXXBpXjMuG27fD3z7rkuKm3K8vKMZpdq9o59YZ7zhpFr6LBhtCCaNSoLhNDYWhuLaJ",
  "key23": "1fhstMVw4Tazk2AJUXWsDyG9N5ZmXvYfhCnNRaegZpkK6zxEc3p44QqCrL9N7vUPjzqLU8uU56fxVzXAbxVnMms",
  "key24": "2TpJdSKQcBxpY6WnBRBV18UiamUvxUy7k2d6A63VuyzNrhVxwF2sUaeWxUD1YTyvD1uQpChEZnaw9zqkkq5UKpiY",
  "key25": "TPFa7ioSeKKfd3sE5wiv3WsCZk5g6NVWRGmaVpXVCC9DHwRRB41z6m1cTJcfAq4MPDuKhQS3yDnnjGVuq26roSi",
  "key26": "4pCD8ZunL6kH542finBP8iVoZ1twpxDrGW2V1t8mdG1GXLiWoEhXtFQvMTFaYS3yQhKAz3hz5UtzkBaHkr66LAr1",
  "key27": "4ejW3sEaDjoJ1vEejMtPiVFe4tc1GRy7n72wxZUH4jJzUp3bRE42tKMxRypvua9gMEV6H8etgTuuiYAzbA662QVS",
  "key28": "3c1VtajtwMLqae8gbFtmeiyYgo9rFnaHHW8KNBmAPH9ivr81jpSoMRv9ASbD5FEQx8Feki8jbG592Xfq6F3o7PuM",
  "key29": "4UNXG1MJYQxXWFxDBEKzL7QSEraSgck1HVVquVV1cu8JXx8u97hwisgEzqwU9QpA9P98DfxNAfy6Xm8L6kBci8gm",
  "key30": "3Fas2iQ9CExQwyHzYhqwk3K7Q1cyyXAxPqFvrE6sW6z9awsDQ6zUHY3WgTZ9xnj6NbdSvYgsAJ1ePAShbcX3XDBw",
  "key31": "2XSsQB4fRSmHbivnj9Sr5EKSPBWBuEG3iHU9JciSVy6LWcmP5janNmmu6nCmQuLMMSWZGKa3sSPbgLyhEi6Ua8TT",
  "key32": "4XxhuPzGfqgCcufTBAHpjzVq47o3Z4wCh5drG3snUjtMKrZEApZxxQZJngVdFZte4MMpN9YxezUJn7jdcqkXKw8U",
  "key33": "4XEK3RrGs3zfZDCUmThpQDAHxiNHzra19QhNBfSNtNMbS6QXx564SJbTJwidz5LPA8FMD2QUNkr1QtsHbxZnzhnH",
  "key34": "5dZ4GeoK3ZJsretx56o1oTR2QaLsPK3e1cSHBgcJKvfq1fCo5yr3qACSGuTTPPJUiSpbTWskhmUPfN5ZV4J6WKY",
  "key35": "32rs8SRgeowxcYkGuZt8TSt6zkZZJC4PyfYAiiLrfqQvM7tQ8Ugz4t8dpPZsfXs3NByYAiTFuiDKuRxeKiDfAdw9",
  "key36": "3RBk3Rwg6AUBbsueHGrPnB5VhNrME7DDRa8URz7DcpTQfMc7AM3V7i3WdeZcW72sqCMgMojGn6wpGaxiLCLVZb1N",
  "key37": "5srWZGocrJZUPEuKgxbKPgLVXmBtgXSPKbMwwsXH5V6wiMoYQQGTvkAC4kAZSkuCLUazzsb6EtEbRGR5LjJ2ThY4",
  "key38": "4joCsr3Z6wxunhbdoSun5mMmxhb7EvjTQjRRGrdJ12DVHf5Kfm2xnvLGtAK7dSNKj6h6VE9X4KaK9S2rryd5QYRA",
  "key39": "D1SbDbh74xinX3pAFUxuQM6S4z9fRdg6hYWGDm6YUcc9jWiUCf8C1PWdkWcgJ3zH2rS1uFhvRRUVxS47G5uBTDD",
  "key40": "5vkfGrSYdGZNQx9n24jotVwAE1MZC6nf3TJmJ7Li6WaCWhMtBAcMkYy5jb6ZrzhW1Ty8CDNw8KG2dKXgcQKWYF8j"
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
