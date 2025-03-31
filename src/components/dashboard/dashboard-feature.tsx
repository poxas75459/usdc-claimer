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
    "2zH4gnNHDNHKuZYEKxT29ZEU3HAVbDr7LceMuQXxbJT9FswFVWwRWUStW33e28mv3PTaTy6aFeYKCQ4tGGaZd79A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ZRwA2xcrZ1HzvUnqpTTxP5CdJruznLg3oNPZ5DJMqVF9CpHVudBNFuYtkmXXzregFBqXSqVXXYm5fbSuq4XUXp",
  "key1": "ndHbwCrkzRQCYWFXThXKBB5YXF7bdG63VLKBBJqmFpS5sB2DqTthD3kLWcsLv55xKHjD6YZxLHgvMGfRPLpr2M2",
  "key2": "2Anrgnd6bto8zswNfkCtQAgnmWpHXWiEoCx3MKFVJYx878Ypd39D9aTV43csP95aQt9dhgEiPUVxWLMvY6iA4DKz",
  "key3": "5yLmUTz43ULdFseXS2bSYA6RwJtJwP5au4EG5rbvnPzhBzrwUnsWVWwaSXR5aybxMMEEei7Q8xHQfNetQv6oXgyM",
  "key4": "4CRnfVrLjXMkxrxUEgLb3cvsMrDR8jBJ5vSSKFSAe9nZuJwPMw1ux8koidsqHiMe2yuYTACjFwB8KNFo6cZj68gC",
  "key5": "5FPzJW6cPTzYyXJNf7qTrPn1v8dKM5Zeh7QkcbkrcHz8R5QbBNn8NfTyZpgvRCuk4WmWNsT4yoZCcPZbPCc3guz1",
  "key6": "4KDsD6VUoXDZjFoo7M7rLLyTaSiQnzDtMkseBAceUh4VLiHwpmYWPtQLkxHqdAMJTrLHsmB1MHazfknNfbiweMCq",
  "key7": "HYF5puYH447XML2k7wwsav5MtYgiLxXRmMZK6W1xb3eeKsQAHNV5hegZpgRnDP6RyJn4wrukEe9yXcAdwtSxRFX",
  "key8": "63KQYCGXz9d4qtQ2wKZE9PmQKAttc4xAfbXkw6t2V6SqXMbGD4o9yqDEtJvuZSbno4qk2eYt59UjzxK7axVv7brE",
  "key9": "3pTspiQxUnP8GadLnyPEPpuzet9qMxAGFPeidYtbf158uRj6jcuT13WrDjA9RYLni33a3tN8pJZHVcHg2izn5GoK",
  "key10": "SYLXyvxdomivAVhCwevWpc1uEsjkSK5uQY9ajGkAHKqcwY1TmEbMGVeeSTKcrU3cTb6jn289UpWBNjLEeSzy4Lr",
  "key11": "62z62VwMNP9H95kC72mw8m4fLp6VNe8a8zXMqPgGUZsGwnGZbKnbJKXxmVPFy89vnryyCxkynhCmxARnb6fnWtg8",
  "key12": "2sV8gqwXpmqSgs55iUodvdEeiaKeQNtzAja86X731KzwwWWoPyKPDXYKgHigTVQypFtU5URJv2y9UsbpffNBaYdh",
  "key13": "5PjzWvR82Z7m2JqJ1N9RJ8oZZYmsp5cTdWEzkGGScRrPBPTxHNfxpEm79mWjrSMH1mpHQaQSKjtdHFBTeEThurFA",
  "key14": "4KVJZ5isRuMYpgehcAqLgPmZqEdfMMaiGPMT1ooqVdHNoVq2s7fStmXw76g7rnjtwFovY8KNiUWGkuN4xCukU5Bp",
  "key15": "XPCAXBhwbTK7iAfAWRqASmM8GavsGpYwMCL8i78xLohd72Dh88Uxz7qcjszyJFGRTiPZjfhhbdWqijuQVdEwQAL",
  "key16": "YJvNrV4Sogkkc2BjKwVf81AmUpU2Sm6fjTXzzttFYTizo1hn1G7q23V5hUeFGovt5eCfL9Q3EJLRjrK6npEVSe6",
  "key17": "aXHMB12u4BidYQoMeoT5Rk8ZH5bMHgE6MSHL5Xcswq34xZj214uQXkEPQByw7pt7f5GNicWpWCP6Qy6fdDvBAMM",
  "key18": "5cxdfPWihFsGmv7EiBNntaw6FtRU8pz1z86YE5mYQsaVE7UV8VFJkc293EWegUdRs69yU3V2fJCJw6neALnGfjGK",
  "key19": "3p9mHp6WV6yaJJrhPRojAShmAiY8WAQ2VvyeDkRMwtixzSQCCpRKvT9s3R2GuQcc6D5AkrUu2Rx98xkz2tjbw2vM",
  "key20": "KrpdCMkK7paA23b3EnFNsDruJpadUoVx6A6RTHo9RKHgMUPFH1J3dtFrzhzii25uLmDeTi8TFUWHDEXvQ18Epzc",
  "key21": "4MxDoP7aCTFDPbmxptoXfBVrL62nTYN7ijmEAgfzjcYJSXz7KyrWkh8zvJuUkthvCPjXhLMfTbPigksGvG4npwm1",
  "key22": "voQV5vg6sKBde1Tnu6qsdrj4yffiuJvBzyk4mZ5kjSh5Qx4Z5vHXmVLVC3g6WMbXyJwPL7rMiEBrdDdi35mVKeD",
  "key23": "56mFLH73iK5zEuaJd6RYTBSrMvqxrt6t3oxTHHN3FWWo9P4GCbyr2kwmjNwGv3FUN5TX5NFbW7xpx1VvxvoRf5L3",
  "key24": "2N8L8FaHwHRLEzpWbJariHocTBCApYQA1diAL3VpUQrCRRqpJXScuZQa9ctZenUSuV4cH3rARBy8cY8Ar1Dt3iZv",
  "key25": "4SxEQsF3JNjESwoNp8ZH3u3k33QzDes4aWBtu9ewXXUGXCqvky8WNN1twFdvdjYWZ7ecXuznwRy6eZNHzWCwaYRh",
  "key26": "28phbrxEkbQpWG7hij6aA1JgSXWbS9LEGky5JMNKFoHXmaTChVaRewPKC51NeDk9QvGTpHP133psLAZceP9f3KuZ",
  "key27": "3VLyuhDY5EsZoS8yxCYqR4dTgYGTfeY7uDcPkJhcazgR4DUmsNw5dteFhzDonKemdJgzLKABbGMMJQL4GDq6HNZQ",
  "key28": "4qtVpK13z7XoDcZXXuCczoDHjBjS49cpradDnK2xEFCB1B89RxKNG3pUYccsZEw3xNWy7ViA8xY6vchLZuVWX3TU",
  "key29": "43HA6ZusSXy336pCDqErcQeeumKC7f6xNwbyJNRJRUxggp3dGuDYmi7sJdAhDKQvJGvv7Kk1DxRkLnNGTmKXvzBV",
  "key30": "47ARepHM9Lc7HC1hbR1xdzjFehzcmWVEATYJvVNLN9rqgA3LG3ndMYXrZfb6YJ4sJA6bwfZBn9GebcRqyKGhq5y",
  "key31": "NoPSHMNrJA5XVGcXnTFRRHHKWJzLoGiVJpJp8ZRsPwrkwovBNeH6gnAVjQN54XSmWr6EGKwSMTsbHrh1JfNvkqQ",
  "key32": "31XvVUA9pryiSq6XALnq7rN4nNsyC13D79ueqkLj8XzZa43iyQFyzrgb7CAAyeogodKyZFDTk1j7imDMMmBtsxnH",
  "key33": "3pCqaGuMh8ZP5z2H3vYw9LdaJ2d7fLAf7KJgU3MUXQjtGJibzGvkT7dAX444SX9jMMK3cjzwBfS29ZGQVobxs5zj",
  "key34": "4xmL5MNtVvvHA7HJ8igQ3b5he3yGduwzk29EZY31emxdPx7wudEr9m8R6GMrJzdg1gqMqW8kDy5FETPwPjr1iWwf",
  "key35": "MF1HsSoPb2qWC7NPGhESxHMekuVdxMYZcGHECByHP3dpqXAwvPosApTqkTfEHnhoHa4qi8J9VHSb4ykaGYH8XKA",
  "key36": "3h5x5b25QnXMK1kc8yTeg2zGCCTpcMJ7LDw5nXzLpwn99pF9QNAihmWVFjvW2nRhszBhMPrsV73fchuA4dkoJRnp",
  "key37": "CkpeubT2SjKwA7EjE4cUdb3Hb763gnw2wUc6JLP272hAM3GAzh6FNgLPZoX96RtHBj4GkJB6utNeCNXxiGRyhdh",
  "key38": "3CEvh7iWDgvvbANWTEMfQdmixDme5ZLwjkHo7aEx71DeQRcWpwAtPw83xLkeQkadQCwz3r9WEtFpQMVQmjaUgmj",
  "key39": "2aQHFJrkrCVPe248b8sCu9MiWyVCaMMhgQtEg1oRnUSzdRz3gKqfmnnwXiFKZGpZHJqGBs6Mzzn6C5qtZhEBbFL8",
  "key40": "5sZBYtjKawB9yfJ4iZ262xL21cdaRHYLyLG1UWTRUHkeURWmj3UkaRwyLW9xmLQALigRAt2NnMTa7aP8YLzMvcKK"
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
