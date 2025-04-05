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
    "oMQzdbcrLPDgB6gYg2wzpii2hJfpCRvgY6T32mD8PL5f1KvvkX5Uc1v18u3tneJuTrWDNtejMm7bpfMzcgoSDid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xP7J5ra4UuNMPDjRTa5ZUatuyGTBc7mWDtL4duXSC9r47P4ZW8zAEn41jmZ7jWaKuR3eXMu4HFqG24Lrtn7SSZN",
  "key1": "4viccLHk58Q3CHC7FiS3GjD3bPdh9uaZLjKH339SV69tvueDokJkSMsct8yt9aTFK9GULsj84SYp6zpN7NqZooj7",
  "key2": "4AN7RdjAAszKfJztaurhJzab8rdsKhUKjnA1RZz1eEUKW8ApA9RDxVbPGz6VD2cd5D1aXd8E4NHRsQcRwxPReJ3q",
  "key3": "3EUXrJzaUH6A4rjMsAKspxrHcuYdYca9L293hQdrXcjWkXvtDo4g9iSa1EYcArnnKUCGs7MLJFxC6BgYVBg7KABt",
  "key4": "63gL96pwx6BH2zxRZAxDHkedzWheSmnwxG2UjDA3AGhr82fxAhFpDztyZLfKC2YtB4ifjJtQvo2kt6T8Ehgk328A",
  "key5": "3UZhNN4F4ByQSx9FJVSJps7iysY529jKaXrHerbZHd8mPwoamBBFMK6myJK7ERetcqUtGuAMM47Tif8KFA7anuAW",
  "key6": "4Zquw6y7LshZYNg6bHNKE6EBv2hz8EM4NHPGbqhR3TxuKDCdtqnMgCv6B6Vu93KhyngW6fpyWjwmT1fAHoPyv3jZ",
  "key7": "5FkxPvmzdK5Ez8LdnkLj9XEzdu7fzZ58hFGP75D6Pi4meZpycxBXXGPj94GG9bfWFcajQybdBd1WTbXvkasixAh2",
  "key8": "3V4MojqhNmWuy1yfLit4kHLyn5t4vC8tkVp4iYDRaP2axVvKbZZiuSjBPKaw9Zz8NGgapN5VrssRzN9kBNQabXFX",
  "key9": "3gfZYbLihNQXxNkxyWJ18W8c24tMrCKBBYzw5YFr6qKb9UqC9wD8Vo2g6BvdXpzdBfVaThRhbb4S5s1gEM1ZwAGq",
  "key10": "nikWBRTKtTTpYKHMquV2XFTEsZ8aUK3AGbqKJ7BRzELpGW4S8qYCHU65gdA3di9HZnjxUYN1nM2bSc42iLyCQDk",
  "key11": "25RrEWzAyn8Rf5VBF5QQ3CHAjjod3fomBAaiGDYa7gA1JENizLVF4BUwUs5W78T3YDYA3vypsHVj3NHCYnLDF7be",
  "key12": "4teNcQ3RwWppdP6qM3nNgPurYZ1B1SDci7Ks3h3a1GchdAx5YUxZ58WqbLuCo9zw8gHxV1Fb79gG9isqjPvDXuQb",
  "key13": "46Eybsugmighwgvc6g9WgGDtJERvek7YngN9kmhzkGXvGEpMeHn5HaXtNwuxmfUbhANB6zQedL3GU1Taw23j9Q9p",
  "key14": "5Avr5R1ytu1uZUmXrr4hUsg3GDBXae3MFikkB1bEKkVsmmk8bKDAeebZfsjixSeJprwdUJaHoettk8j3EeUn66vu",
  "key15": "54RDgMk5ZmD6s9u3kwqh4Tc1W6KFRsfkNBsJZ6C7z7KSup1QroEFdLTQpv6rDuPHzkiEsnSitmrAjErSjqyMWiBH",
  "key16": "HsgNhnqiUa9WZVJ7g5EUNaaCQtNjcQ78VEgnj3u9ig2pm52tEzsLMsjuZGwLLf3BjK8LfKVL3vPLGQynUSwAai8",
  "key17": "57Af63y6rSQAHnLccXCAmbrRQDBdaQUCw7U78iEzusgDETDi8hMZaXeCNQAsNPnBJAmom3YbxPthtXrya7tBqd5g",
  "key18": "KtSyo5RCGuXwWCXqWYF1g5scH8ddjPDey2YFrDvgsJeZYuq16a6oTiXyZ6SnkYXdHGmE7dtizjQU4QoRXB3y8NW",
  "key19": "RA7jWRaTjCedRXtuYSCv5DkakeXqEdCDmBtNGH6HfWbYoq4KCd6bMYv7V4583AvfyqvCkV1FdJdDLgVzvoSQqEk",
  "key20": "3NaCLgNRYQsrPBx3knbnzTUAJLk4TQQLfgLWtxvJnbFRoQL54EwMeQED7cL6WwEBUdaJWCVnmUHEcKJoba8QBTFP",
  "key21": "33MZfTofQk48jrxkHEbYXohhkAEdbMrDW1GmDnkvs96kffkrf7tzTPjB4CGsN7sh4jNxaErALB7oimP4DX2aqiyk",
  "key22": "2oEFrG5UaheGgdgsBxRJgtQnoVHJTMUaFtzgTYbU6vN1j2ouH1kzQT1QJKzxFTRtgh4ZqkuU2oTxbFfj9DhRobP",
  "key23": "4Fx8LBYcQFyxp7sxVqF96sc12pCw4fMoWT8XWLKG2tUmNUJKpgRxzX2oTE35xd7hToUHTBgpxSbTT6Seeuu3vvUa",
  "key24": "3dynfdDGKZsXoaGWN7KLLPGyAUZ9YgByhvXuNB1mySrd64Lak9hPVXzRxxtvqLD9nM1E13t42DZ2CBHaf4J4WD7c",
  "key25": "5naEs54toL6Sh2U25DpfSxTwRHdUvRAJyE97FrQNX9ik2wYxbbsVHXTPk8MmaBN8Fnqz4D6gxJHmkTvV3rx975iU",
  "key26": "VpZ1eRjAxje3sjdZCd7ABwW9NF4hZwbbKpCez7ke3BXvdBNVe9Yhw6hBhcSXtpdqfNV49H2Eu1isitrCZkVqb3E",
  "key27": "P6x4gzeJsiRyChRX9BhMe5r38eNwjeDnFhAhQS6jFEwN1sS3MNha1zrP8DVmZYqeS3DMJymzysjwT7P7uNygqob",
  "key28": "4t61JMehjr46jZfDk61484yTK1cLFZ6GkzqGjFzsVm1zeLUpNy83AxojiBBKpRRQjV7fkNvj1et23JLfjAEPxUKX",
  "key29": "3ceLpx32wyfdEAs7ZBf5Tv4Qpo1bDSN6mZmkuG4t98Jr7JT7RiEtRKx3bWcJp8eSk2ndHWMdLYipXJDjsYtMMhMa",
  "key30": "4yqH77ApaaeRpdamt6vDWZjN2rX7at5fjY1n8agman7pVXmkigpP1BsCjXBST3dAypgCxDdGUtfJrjR7NHrrcQkP",
  "key31": "123A4oxunSuo8t7KwoLTSRYiuE7wqyyyrwMrjn5KwLQ3UvTZiqyyjzCfq4CcHRmVG6Hzrx49aygkr76UrNgtiMyj",
  "key32": "2JLnfiarVnG43RW4pGcqdJSV2rhNuKGURgmqtBy6ry85kwzNmRkFLYH32PhkYZCqi4xu9zcTwehHKkdKt3hd1YRM",
  "key33": "2x34hUGMnWc8MPsgF4KyKHjsKacfBVyTTtRVekZ2dpz7ZMDTA2rXGR52buVYEpyUrLDJyTkLMnhNapb2NF4izP6M",
  "key34": "3K3CptSVYzhJpKNk5VBTTuDKQLjFCE7pGFj4Fip7mRjxnPizrzVdf8hdyD3FhZQX7AU2zuo4F5jVcLL64oefs8eG",
  "key35": "28Lmc2RGMHEfXJT5Ft5A1KgNAhrKDQWtYzK6zpD1HNuoxaEaATC74QDnD2m89GUNN4kZdXqaLKau8PUfrjLC8Hoi",
  "key36": "2TBmYU9KWPtXabqdKjZ5JTih6fkx7pN7UWY8DBXZxNgVKU8Ghipadfo5AVkSYrnZu3ckLAz3zJCeztYnDESyeBPs",
  "key37": "4VLExukk3s3SP7EK7idEc2BknzBsT13BBtgekrnWDjX7LboAmfwLEptD32kcLMfpaF7wmzYoEGJQLp4HYr9H6qNQ",
  "key38": "3pR3PJtvbkQQRUP3TwR8RYT7nahz8ftWHLWhPYQXzQFEqEDhJAYny28J888TxPjAZwmTvNxsPKW4Abu7AqkHu5LB",
  "key39": "47E4BGnVqL3hVnNe5aFkg2efGBy2VYyzBAUYAM4fNRTKC5rUQtZwQFr789rV6YzbFMqi93Dz71XzN29gDRn17ZiZ",
  "key40": "DiRaqCqyWJRvFzMjFUpEQmdfXsWvSH3HXA8pe8Af3GnicMMrUPXUDq4txef2JCpjBc6NDJX24kBXyuvzDppWUw5"
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
