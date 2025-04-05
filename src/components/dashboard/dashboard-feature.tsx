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
    "3u9ajX1XVnY7YLqPoVdrSvkqpXRnUfswHMUAhc22VMVePPxAmtP8seVJmY6LXBo8RhaN62cCEoh2XXisr4yVhBKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zjs31RPiHJYq1HUnWnn9heLbRS7rkkuBAcNQogBno8xK7moJeiuMNRkgGepbTRVtaquf398Z3WYxtQkTB8LnpsJ",
  "key1": "3H7pPqzDQSMgaqEhPYbdcHPPDEhVyCECzakiFWHmLXodwSou7Awb5ikUWnWqxHgA3nEe6Fi4B4DQNVG9ryRAtqBY",
  "key2": "3rEFjf7zdHR6GNroPknpLS4L6UiEpwiA6MPhJuv6nCDUXfFquRx35nDRnbNbKUqPRFQ2VV31Q7YC4zBjWfdghC7z",
  "key3": "4yew99E7g4RfaWHvkCfwqFy7fm4kVvRidXp27K8WZn3gGgDex6nFzz1qnricEj27Sqr7fNQwr1kC5fUvaXn4WUY8",
  "key4": "3Fvd86BnD8oiGeMybWRhnzpANjeT2hDVco11TupRXKKqgznrPphDH5w9s1L7eD8hb6MUs4kfN5msZdZNQhNkancC",
  "key5": "3CmEPrqVkX5fkyBc5aLKwqPrhciEzGNTLSCe19YLEMwonTFGZfEvUE8PNWf9ws4GmZHMueLMcdD4M38Fwb6m38qJ",
  "key6": "2yqgDHJAoGcXH7uvp92YWrgE75w9mjtzNCCVWzp8PRJMvuAf2rWzveZUSub9WV7ie4TEmu36VszcfChyP4m68u8p",
  "key7": "5c8YpkA5x11xGgurUDxgar2G5RX5sffcEK7wAsXMzbPTj6PTd4WNssmnW54kLRH9dwFgX2cjgMHAfEgwpQEGDGZr",
  "key8": "65j4DHS9aF8t5tzgu2Pb1FMiwGr7fkewcyyzM8YnPXnpMFgQLMt8WRYhdmnG7swBxkcgxPggZfYPM9KgGmFDwrhc",
  "key9": "5rr2Wb4spXy6sinLXqv16SjhV6Pr8k14awLmPW2AqubnXsdsbwH9J2oCVfcukuvDWE5mD5NopErcfLuKTKDUzFAt",
  "key10": "2wxrfHEJZWyDEJ44nuGPUDNYhZEhMA873pLpoq2DRh9tw4ofLziiNRUAHNXpeXfYNQh9oi8VPWaJnZCiKRv5TaGi",
  "key11": "5RC9HyWFModcHqFaQBCyj2JAua1jvUDCCcbByWREzYTJ5TpGyja1MgUEv8KnTu6PWYsooAk8xj4Sp81dGdvNtyQC",
  "key12": "xRindT8vwGcGvYMgdatSN5fpXSxhHchtzW4nQJYrHLJ1bdM76jfLwjyVzD9gFiVK6ZtLqZ5HAuxsdydPXo9kWhE",
  "key13": "3TUH6yV72r7ioTQMsLbDiST58fddTbuGPcjWEEeVaPmHsJTMgsdfCn5A8RrTvdb8Zbx1oshXyymtPPjbzWV4jiFX",
  "key14": "3tTKMyfFcPLhjNaa73yLgWoZQNh5JSJVATRze38FuYsHnLijz1MpsChFP7a9ss3ucyutThi5t8yxK2Ycp1BEeZ7w",
  "key15": "7dbDbX3Ye6QhTcGAgvf2Z2YqkeCL6hh9DtAjjWBaR1mgpN5GcshjsbWeQerdGDY3RvaZSJRsbdqfQk39rZjLLky",
  "key16": "3gTKdu3TJNr9vWe6qtGiDLPpGbkpZs5KfqxYfiYaCp1wVu9GQf9KfYmzND24TX2q3nDnRidwcJXaTbeEHxRVQEfq",
  "key17": "5xKc7URmryzh29sFx342GjgwSBLFdSUWM2BWtk1SVa6ANCEvZkyum4u7VspCrYuFDFag96JJRxwzGyyixATCsFG2",
  "key18": "2UUe7C5cjDmrSfNpm1wAv6a13PM95QjDCvt2uZarKWKfCYSWrZZ9uY4M82AhXzVTMRxxqqsDeTqNMef6aYn7zkMV",
  "key19": "2AZ3FhkB6NzWhRDF4tHeEF47KDWBATm7xUXcPfNaVf4VpaxWDtENVB9LnUPvX5L3GFBcfVdSmZQS2Sy1PjXMBZQz",
  "key20": "Rv7La9T43QrUQDdXjXWX9yfKTh8hXaaeuZRK5zjr5Hf4Y2EQrFDXcVfwQiSoqmY3TDt536CbD5RztJgJ7X66zhB",
  "key21": "3DvS715QkM5KShC3zK8Z3BeyDgzPtx7MF8LFdgoLuLQTCj4FvAMprsjVArmgRaJLHMFzzbs9acwQ4m8sNrfEhLcR",
  "key22": "5hDozPbMEiC26BHStNwubapAU6eBrM5dDFUUp1rLMMSvyqycT6gtKPxKfWouDhRfAuoS6561YZZWyxfMwDXBNNcr",
  "key23": "5YohFXoGu4aYHxwTnYgQ365hbyNvTxK7vtrWvwAx9Nw69y9bAYXBh2qLyaASUPhzY32sbAofDg8wsUYFUd9dmghB",
  "key24": "3Tfo24RS6WjAVoTdSY5Quxnx2Zq63xit3FWXUNeUPjxmU2smKmyTpBaVdLJrx9pU3Xje5TQwV9HYDLh4sH33nnsH",
  "key25": "3G4o5hNiZ8kR5UF8Ck17cmHdyJPp49zWwJzqthaKrgR1zn1DQYvWhQjeccTFi9Jivjta7Akm77YQjDC5P7d8Z2EE",
  "key26": "5L2Ay72Q3nJ9YXEx7hV7cNxAMPGPfxJxw2S3H7MVCCiQiJaBvBu2Ki5hEAr6iseDgyMgF3StnS9jz9vSmip9CWMa",
  "key27": "4nPZyTjCLDqaL43v8geDUa4nhJnqYNPfVRDXLKAZgrhvHqMndBkESV9GdWQtqjhsva79i7Yrp2oS46yEJ4xJwkLT",
  "key28": "4m1i9CTVqCCY6kqrNjv7zZUGtWxYo9BvSiHnMdDvDFxHWzpM5BDg5Di1QmZaWLssnsYHjrrvsDsoQLVGiLNg9aoL",
  "key29": "ydStceKKActEsgfwwGC2jLFnnqUkAWWZ6paUjy8k2FsU7kehBycqHPgxLNFY21r1ibKjPFcqm3anwjoDW1896AJ",
  "key30": "5QNzC1kUk7xELdrXbmQ2hminF3SG261VkoDKZmaY67fmry7qGx16VephsYrq83fhkvWfotAoeXCfTbvkaHWhdTAp",
  "key31": "5K6fPuYD2d5hxTLW5XNbkR565gPVY2LtoTmvcpUJPsTYXuR62HR6fCGFMvepqFgiKf8pHSmcvwhA8XpcsCSSDz3T",
  "key32": "2wkKiCkAFPJrwwkBvb74nKA5MMiHqwgtcYi853RAcNXYbs1CNMajX4Y3oXs3KUxufJX327QKhCsvzMhJ5hDGLoTh",
  "key33": "2e8Nxso8dC67SNDRc5EwfhWqRL9qx7rwgwzRLnDGGqqcc3C4fRsvNxK1ZcHKUNdsxUx13qnLxpocKg2D3F97wbJ3",
  "key34": "3BhhZRNdvKSFAoxWq5NQnauyDXW16zdLGw7teLTwoLMvioWtMrQbTembjCFyLgF9YPLyeo6PEFQRVGzmRn2ZpYQN",
  "key35": "56GALsCrkrYh7BTZ8se13ThVrH2m1M8XcBNj1mHhR9nCnh4kAWwR1VkupGkBUGazHqxqCjSwMVePfCMajuX2Ca9Q",
  "key36": "5Ps4UMexbAQswcyBYzq2UDknTkr6BySp97JPhKcus5ZWyv6pe2CemGp2goMbVTj9dQC1TFPpisr5mP4ratxAUscx",
  "key37": "2cDh6iSKkTE8D3Cku68eCvsCNwFYja5CuPeigV6FcMAu1putwZonDbLDcPG7vPaN44czXdhhBBnuMF6a4vRyDr7n",
  "key38": "4H1JATWzEXe5Yuu6QRnnbqvrdCHdxWHy3NHrMrAFwJKvYsstPw6YMoWNDvzQ9u95CwhvUgnJ5JrTkMZzN27qRPSv",
  "key39": "shhemcsHUduir43iK1ynSLF99s1jTkZkr1kiaRZ1RxxWRoy1GUSyxb36RYsFQMwHUFR9dGLuGywLF3jtPD1CzC6",
  "key40": "3NwxVRgAH6WVmj4FioCgfsHH9B5X3stf1bBbUifdBnu3AzTSCu1QDtdBd2waEmnr2akwc1kzzppNnCmVUogdPW6Q",
  "key41": "5fEvCWYRzbP8beM9GiyHEvWHgAR7gsFLcbXbrs8XkKG7jCa4hsjckGZCgUP3WwVTocNbv46bpyUr4ooocszu34Kr",
  "key42": "2VNnVLD6hwNr8pn9LzjihCJgVCHq2w2PBeGqfTP9fLzZZahEQcowTQp5pLDAuikTMCtPg6PuA9w4Zs4qYKoVHxV",
  "key43": "59rHmq5XdxdNoAhXNA2cPq7V4MDBFqfG1UBjeh1Tt4R75uySfawf2BPRu1obaDJ3q9P7z4trRcLXBR9hLYdw2zgz",
  "key44": "46Kep98zpERWAXM3MssqVW6Hbn9XhXtMpADhV4KeqoQEP9FoGwFqMBwfiLbP6dvDC1rqsqfqxbmKphKG84QyNe1K",
  "key45": "5g8UpixNz8euFPJtxUcxZg8SAPkmcWy46VQsKPZ3bfkPdEFR8JYz5kh7tJqZUzHYr7sAozt4oWoqGLqFTEnBNtXt",
  "key46": "5ssSABjThpTsrpi1MHFTatG4yU3L4gfnzBXtnryw3dGocKUqzFVTvfPh6nFMq3Qb9JFP79tCdurULc2pBa2p8znD",
  "key47": "TDbpYF9PFFMqeEa8hiDQ4jPPRFxTB2yMNDzFQ531sNuX9b1TW2LvCLopbJ1qz2gtiuchnsRtoNc6nk9n1ieiTer",
  "key48": "uzGGJKMzsbf6EDtayJA92zT19xXsNMbozyJpr8epfmMjTPCFwC5EYJAqPpTRhr6gtBZ4bQ9bGmK6D3mU3Y71tzY",
  "key49": "4teMGAVPJvPujnavB3NaTg6HgF2YFonbLbifzA5e8oV68H9VVu2vnzgCwS8kcP8e4HdEKFJ4GLmWZn3743AVC5U"
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
