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
    "5AcVJRCwAaYN9oWf1e1UiyiBhbRxvVK6w1czG181JmYUeRfnoNCCj4xxR6oavE3FAWKcrw3d5csD5t7o6rxysoPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aDde5woBNZmFCajdpaKH4zykTE9ZdUUtGtL3ciW9vh5HUBzyPa17xhoufBAf5fkxFdLU1Wt2K9Hk3W6TLA6SR5w",
  "key1": "2XZqYZo7MF1jCoMKkwmxBcwU3q25aqe5ab3fjFx7xXBaYXq4SrC4mvxmjHbSCvf43PuPFJ76GV5N2i1aGMhA3WcN",
  "key2": "3AJbaFBApTaxcavP7Ttr8sQ4MFe92qcvvvcQeHBV2gx3WXKGWjZsqhBQ8B1x1dNJUXLfqUW7n9K4ZvZHzLwamBer",
  "key3": "2nbg84U9chXijxaGQUWcgBdqxAheRDqDQAkcaCLzLFv2PHNuUYeqiwyzjhcQCsc6uabzCBVvZZECQePcQm2uycxD",
  "key4": "647H6q1DJkcGctbxbZQvZQvmhMy3qkUokev9kjZr5R7AzMUuvSXkWv1ggC9TjFfBpVKUayiJP8tietcdrN556SJr",
  "key5": "59PGw2kBaLv6Pi4P3cAJQm3yL76r4Nn8yQW4SAdiqyJXCa7UYqPzbJ4FQyeTeJeLwFxcmTVn9JD4xbohcutCuZjR",
  "key6": "2Mc3FT8J4ycJp55dhufJHzMJMo9sTaFtEjJdGQmFxgeeQ1Qu612JrXqbGzjQJrPLqLGWRm91pCcaWfrsF8nFpRNi",
  "key7": "49tUrhWzdXwizMJmE4rgEoX6TRjBgF6Qy8QnMwYyboyiXU7NKAwKtahgsjx6znw4hVZauP4r6YRp4H1LKCzPeQ9G",
  "key8": "5NFjktoLs7G5A696fXGYtsYu2NmPer2Lcfb5RMbEnhSJFRUiPCWco4d7eSUeTVNwJU4P49R3L7ka3hrG9CCW2uyt",
  "key9": "hwCbDd6ZpU996hLXCxvi5hZhPao2LSm9rBxuUsnTVz3WZJuSSBGUS2dQZ9QEpS6Z2EbGT91fYguJnpLneZznjxU",
  "key10": "4HoGDed4iEDYjEtxrW7JEc1kPdjbXaPioBUhmBzaCu5sWSW5fJ7ZwDeEAqwg3heuHUoAsFR1Toi8FpBxUf9ffnQj",
  "key11": "5Evz9ZCzkWxfu29jvZkekiesZQwyRM5qkPpV6Vh8WhBu13BuJqaEvRnfYz8hA33Ph1po7Ec3SQEnMGmV3ZE2ErEp",
  "key12": "4DRT9W6urr1owxo5eWHhbDjTfRF1QC2ocvfZP7huJ2EJb7uapsoHvWsHRmvSqqSKmrriBFxdW2Jo4KopsDktdGYN",
  "key13": "64PuABPfm1RSqhudMywYr4KULiNoim9vxM2dYVVZqgXJUomvc47tiFQHPwptCKFGCkuZpxYWrZH5vaFr8ijGCjWQ",
  "key14": "37dS7rRnPQ5nMQ6vtTvYH5SNHfe4ovm6jNLGr31waramZhzV4BYyBdpjCUnXTtEjm8kresvN7PWhvRRWcyv3nSrg",
  "key15": "bX56UNJtSWhUAhinEJMy5MV2S4GH5XpWaumeTgoyAxjU3i99JBiAe6wvr7tVWaie2khitsGND3wDuAKDVoEmREx",
  "key16": "5FavzB2KFrP3YFAZN4nCCKdw1zm5o7Gt994nkKrgrBRHVZBfthTdkVY9U2kVZzVLmHxi3BXgwqPfw8hXNKFsQRWN",
  "key17": "5y673aeASyi3GmjA51v2RXT3mxHoMSpGXwKboxBxk9nuB3Sa1v9aBZ1bAdVMkBsfkeWH1eMa1vpoG5fskLMbo9et",
  "key18": "4iTC8uZ71eLahgfpjLNsd5k5DMqtc2CZ27egtiYusuGBRPKa5KmAVxChQchy1VDZjHAbmZGnwWgUvdhLmeE8jaVJ",
  "key19": "4nNFJF12Y27euyfoLrwbeKNpxkFtMaWjbQngWQveNMD8tBhz6RB5cRt3sUY6j4AgJN5B47wUmTfhJHZ4h6X4e1sG",
  "key20": "5x4V3BSvssPVJ9VAtJRr5yjn2jx2G3qqjs85MLFRFaxHjxVht8daexZpodiBg5TCpBhjM2HeNa6PS1Ho1EAVSG9z",
  "key21": "3yTzAmzqhrnWQhgb4T2t8Lt3bG3GSxb3Erxck2MQ9GEmu6yBCEagm3iRrpt1LYSGeDUFYppnzmJJEXynpqEpJJnk",
  "key22": "2e945zCE1i3Q5aBRBp18g7g9V6119PFSYaKAtsxaXLjR1ufJrNaFcPMLZWGfntTXDokM9vg8R4boQy4BxdRbTbF2",
  "key23": "dMPuvPzJ2ypMEXZ2PFAhKUbSoHBn3hm6CYGkMQr8cjGuZZ31nT5VGoNeRgicjH9KHQaGDNNe18U8TW5jrT45CFh",
  "key24": "3kk4LpAaAdMu6nhBGaLnNEEEorK7uxJj7JTd9MmEJwqgqr1QGa8YKsg4W11zvtLDq35ssQerFhBBHduLiDpMbbmH",
  "key25": "2jtcn81E9R85xvPXT5tW2cKuBtBmDzARv9vQdwSE6SCwnK3HkGqvHqSp57pPvf3hAMNmRUjEMon7MPKJFhQSUq5j",
  "key26": "Tk5RdzwCoQvRh3f5kiyvFSjNGeiFc6jigTwDUiT6zA2mAtYVpYPg3i8fwX911PexYnB94PeMrVmaWWcregpjZTA",
  "key27": "5zCaksMqCHz5ABPSw4wK2uYJjRkhi6SJJCW7HPyL2dSp3M1q886VLvzywgertWdTHjFDEMzstmZkEnMbuqkg2y1B",
  "key28": "5vczuiyJmLY8YkKLbury5N7PjbKkyzZVwf3CWWdNz9P83tqYK5fChp4cCqh4NgrzAyc7DhPwV9jGRk488SFVScA6",
  "key29": "4d9P1RbMZeE58LRMhgMd65fkjg2Z5JbmKEmMW7xwi8Xi95ZsGkBp6TJgigHkC4ph8FE2ShwUbUuxfVYQTWka4VXb",
  "key30": "dyKC3uGgRKpHEBQuehGVNpp1ZJFvfpUSLFrJgjwyjHUFgsmwmvApSWTKd88bKPU9kXP8DqWLfcwd4yDm2wAk39x",
  "key31": "ZSPT5PbsUJH9192GK57KvgggBQKVLKp6HG6Rx9MfxMEGfTufcXaSuVwFZc6fzWdA9NgcjtJ6kkjHXoNKzbQCBQJ",
  "key32": "29XVNHMB8c953HunYaE1mPc6wovXvMtLA9qdnETVGQhaAfFt8d95X2Y9gaDdy62MrxpyNQNnbXaYhZsaVdKziVLJ",
  "key33": "QvreDz3nFA3Ehph3ea3Nn5H5icM4emD7bXe94stoRcWzxe5uYWvA21JDe4XVETC2euexHJhCmKJ1n8xaYQ9VTTT"
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
