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
    "5vwedaPrUo5VmvT5NkJRytFyA8RP53tYnmeixHaoNSHZASQ3uebip8Nu9ge1uQZxY5mwRRamS2QHFeXszMHDH231"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gB3unTgwZP43JUyDzRD328yJHDZeTcr3E1VWnAisL8XdFQsfUhNsNLa68RmDtA96a2h53JX4ZrwfQ3QfQx5ezjy",
  "key1": "3HiB5GDXd59TUddHfLA8GLEqgAc8ycYN2q1EB1mqXMKQ442reb5gfBRG1ehyE95CUSXJdufTVkVchJKwSsD7uFWi",
  "key2": "26tvFFsEF8atKqY64uWH3Ly9ne82C37cDQ1Hsb6W18Hmhaiy9YA9yEgdcWpcYxUJ7nXzRQmos9oRawaJRrqe3jLg",
  "key3": "2unxozrV8geVJPMnfuNaxUuc77cqKfBQM4pS6NkQgD9JvRSaqVRxBYP5jGepoL3RKU5XZgtGsj2rg5ywW94Uy1L5",
  "key4": "4rvaf9Hf8orsqLsYApFaZYFgiHfgCJADoZLzN2mEhptCgenTX8NmfN4HXEsAZPPFgHqivJc7KzDczBJnZ6xB9WNX",
  "key5": "5BBb17iFzLbYQxshALtd1WW36baushdn7W2y5yuc48uKZ4WC9ofkiA6tHP3amBEfmwZqQ8PnY7PHTViayihYuupx",
  "key6": "51TNkXHBPEzhW5LFi4Si8Nza76vbnndZtJzZmeQJTgxZcXSH92XWaJSgyTTYCbCRnt3f2YWxV43xfBNhostiPLLv",
  "key7": "5gTcH9s9b216341qzezAUURZtCSW8WUJ4rmtAeczL4tf2sYTCn6G3Z7d68Ewkekz1UbcuNuqBXjVDMAuDoXaxC9f",
  "key8": "3ikQYDfMvvoKdL1e1H7HWgkRMHiENoLQkS6u85CoffmhjefKjNjrZtwJMAPz6nEyygZeaGzVwH6d6rcsWQHtN36m",
  "key9": "51gSNGrdhGQVWojBYxhsinEPfeKkKkWiWyyy6zek5FrTaT2cMBaMBmgAvkui8K9BKscSVbxRqZx5MZeT4GwTUiQ9",
  "key10": "5S8xDs4NWJPivw6MduXGfwMbsqNyxsXC1AQiZXdM6J7PJMCSRHpgyeD5WKxf8ePQFCnv6BQwC7XfP6fF2xdhVoxL",
  "key11": "3Fgtp6afUDJceZWG1Byd7szthVt7wmJ7fV8o2vjJ6jsa5Bo4pUFjXgUcUqdGqWqnHctzFirq4DHmtuKnzXE5hNGc",
  "key12": "3SuddW9uixMWoGQdhi34WbvjnRoN49SCcp11tr5xnU7nhSugnrt5Q988c5bQQrKpEBtWceK7dCeF2VBxkT6EK5Z5",
  "key13": "4wE4hZw3p2DNDU6MjcbfzXdSUQc3zGW68yFYvVgMUAnknwSRkJyw5iviUAx65ibuWFgtbmQmzoFuvYJNxEGjPfyg",
  "key14": "z2PewUP44NspJy3UX7oiStP9vpEFzR6xKvwein77iKcDRXTwrKebuNq8AZSeQ8Szn4DfjWVxHZinnzBnv7Aj9Fa",
  "key15": "5F1MmdJfit1fWDEiVhbHybSPL4sdVvCGvvSaBquZWJpvkCLvxgbvARFHmTPQv1DC75rLqSqVafyT3JaKFCZ9FEza",
  "key16": "2sagP67CqFprTgQcuizyE8MN3ovHGi1XWjsZJ6rMdnxGtws5T1QEZaBC3qBhjZgXQQqqLXeTJvY93j97QCkRFpZd",
  "key17": "5jVNSmMczhAVyuHVB2h7uxSfauaVpMZdjrjnE39bKEtUNnb4ndRTqMfadLRQ9Fq4enRTJjdCCJHgH8iF28nacZVi",
  "key18": "4pMzKYUsrNCL35t3NW4fpyHSwVATDofffZbqtgUibQDrJYsjNTsA2VqkCBfNXmiCSxdUieCepq8bQmwyJe58aC6S",
  "key19": "3NLoyDUqKmUrxHqSxMQGJeE8Fh79EmHKPEFLg2JEkL1cdRdHwWRVXKG1h43DmgJSfLwcai8MbWHNLVeuyAmdx3Dh",
  "key20": "2qQFTk9hR813fUgSaXATyDdX75G9iWdTCKTabjk5mNnEMYZQXcghnubN8BbQAKcqmsHmAYYUmNSwe7ejkZc2FwCy",
  "key21": "HjUGE2qrRKPM3NQcQUfW4JYQLXvkmbPSNVDRaYjNvQpNTw2n2cHwb8yAoQA8BjS5Q1x9XgdrhxoekZAiMTzwqtn",
  "key22": "4Kywx237E57UNPZouB74KRyhU2zCdMR5szeQGDTjWiPWM5xXTHXNU1gdft86VNZxAfpSfZ1EQW6VJviPPL2SrWab",
  "key23": "4jiX1fuV5egix9n6DYD5ZFZ3U6HM1KZRCptTAgByNHBbRK2dSqdMw6SLqY6QjSz1p8WKwntLf6SgFJ7wnNzjxrNm",
  "key24": "3Mnu99NXYnPjroo8x3nZcS6Yy1KmPZdYDhjXoiAU3tN5u6jn6wMWyPNZHhmUsrNckSNgTHteoD9zVWvY3rWUkeBy",
  "key25": "2rP19c3ftcFL1ww8owi4SMF7T8QXnsCgQnvEx8KjL7vTUYtQ9vqTRaFASdtN7jqgcMZoAepdkuhwYb9YPJEC76xz",
  "key26": "1WUWmvd5XLYqM89Jzqy1M3iDLuW5JFpssHJZwi6359Je164YxX9dzadBWgT8QJVK4P3jDNJDba9esjhgHzc5EDj",
  "key27": "2HcoL1WbCUMxLrPfQuwkSVpjEoZDu52hKUcNDHW7qg1bQpWUv8NNREVbC1FmF6psAVZEHD1imVAtKwLcUYZeGZPq",
  "key28": "54EmoqLh5wir7gje4zsSM33ywXPRLh1EqdGdKvtm5Jmimm6w1RVkPBUA2EvRmx6MwbZueWzmucHGwknZcA6hbnCM",
  "key29": "axi3wAbSAp5vvhjdzN4YVELcoqP3sZ5URyDWQzW6XLx2RgxaD4CgKAB2yT77ecRt1pro8MDYmQYXi1ofSryJ4Tq",
  "key30": "5u3atK7CGrZXwNkRV61YMKcVvHosAGQ1zzdCEexpnaikCdceC6q9to8iqaeGwVSmtgqd5CqxaatHX6rpbLBPHeMP",
  "key31": "2M5YxyYRLzZ6WGpBQAvJ3VKqr9nGQHDyFjPCqw5WRdBiAwNBPv57fMsMD18LPUmuvR34GaBkHB4RDk69Ba6dfLek",
  "key32": "3za5hxoVKfSAyCJYwoActHuDvcE7qLZnf35nh95SGXybtg52aRs5ja5PvbEimS5U3msRjgS9rqhUefnty9iDZa8C",
  "key33": "3u4td1m8CDULjAgAMJAVxsPN9FWYwYohwCWPt6P96m5isAyUm5Q7wshG3FFU1Qr6LcixVSLsAtTKKsASrD3BeCZS",
  "key34": "e7eUz1U4FFLQuVa8Z88XGY6bW1gT26KLryWfFMooRP3VDvWeQ4659scBrtchFgzNSbcvE22HbKXx33jQMYpu2Z3",
  "key35": "4YFK6sJ6FkataukGEh2LSekX4WAac3gqbbkdDUNkqMX9oY6yH7Vas1zat1Q2cJueuy82eDTqxFmKiXtTw29sCntq",
  "key36": "wKiPWvAv5H7PPc65AejpM3fPXAhyF5jocVbQVgcksZXvW71H8VJ7X5zXZRqUFvXCWkwmAxV8CxLm84YjZx3pFZh",
  "key37": "3YbdbCtv9rYkbFee4KdR8iXAZZs1kT9DDCnafeA9xvit4PFzD3bELevTEbVRyYs42U2K9XTSRgzk21nxPMzAHGt8",
  "key38": "2WzkKxva5p2mP8yFdAWK7HTtkf5ZXpwCoCfKxenVgFfYH9HNKPiv1Vr2xeDEf5XqisDmmY1Ly4SqZzpnNxV5DGop",
  "key39": "3bVzHvo5XNFAeaM4DvRMMp691Er5WgLVfX3oghiyRqXq6nYTqiPbpevTdfnzBYzutacpV5jEQ7Wt6HUJYFndsZC1",
  "key40": "3TEtc8MaxpH47GuxKcJ9vVAnVj1FTeNRmgfnvfR9qs7MK7kdGnSjFXaUhCxG7xqzBcMX5qkV6UPxXHTfEqQ1N7fK",
  "key41": "2Zy2RXrmJvLHX2CUeRj5ZJR78NgzTxXEr8BDpfBacESiktS8SkHMrDTJyMPdJwH9uk4qDp62V2TNCH6GtPq77jR7"
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
