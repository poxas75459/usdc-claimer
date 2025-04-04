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
    "3BxXvhLiNYtDM8SiwRDfgTCSBqyzwgwriqGzfKft2BR3sfd6A9W6YkVCXgL2qmJXjqbcWciSYYs8VSb2QpJ4Z7uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ovBLRqPTNanniWRLesnYGMrqsEdSttaQJVv8RSt5vU3eYCHQoxRMZ9jr6jkQxbSZuXtNqdJ3AinajHaLMoxhDVS",
  "key1": "5X265BsqmxeMueeqzKw62AwEENHQzxHHQ7gsa5aGW579BfLXfEYmUAT3w1pryDFJMorqZwmmnHiDK4Bt9Ue4juPr",
  "key2": "3zdnXZEQGWSR9mWCbbooPjEd54YpUcZmyXc2bAuUrcv7mk3muE1py7KPW4JCxf4VFJVxhRucPwnQrCWhcmr3XtxW",
  "key3": "5BD4UofDbxEXcUPvu8TnFojmqGCK6B7FEExBxkXDwBapx7bkpuvPs7vHhG4EyTKzxFKKVVYxeBCbE1sN2AP2njbY",
  "key4": "3UBp6dZRNMr334W87Ep5uX9eb9GkyHp7EE1oUafpb89SPZeYyY59NYd5fkXsgs2WM9922J9z5iuXRTVX9zB7ATvV",
  "key5": "2uGV3jQry4iSdFfDjZsHAVbXVSkwLukVAYCSURzzGZzYnySGwJ2D27Bi5ApNqyLonNpLh9Y7m8163TpkTzfzSe3",
  "key6": "4xhU95CYw7Rrzm4h15p3jn4fKqBbY5SzUr3ygPhq6J7kJE1K7RFdsb4tyJaUtLcVdsxrU7PwWwbg6hFepAJCYJqo",
  "key7": "2dzzzaakGMgwHJFSfgeTEVACxPZYMin3KV5A5K5FZDig9QYhoRo11k8ub1SP8jWPbtCJ7K8xr5tUAjWKzzefnoU8",
  "key8": "5zoDDdWLyVVAqxrfcJjoRv82e6AkwP1nXWQvstdPpWDsM4Au8GQP2pGxAKVxqdFtzz7inxh4FmJtSVvDGjnexxbr",
  "key9": "4nn6YXqQLzRDofAE2cc37dhB14BskRgyiUp4D78Y4carpW6ifz2CZ7NK39gCrVKXNQ686gE6oDu7jjgR4oFynsJ7",
  "key10": "21sMUGBBa5eykPa7uMEmV3KKD7Wbv5tonkeBqXbB1rVbACgY3VFV2heA5bcFD4oe9oQiMNxaWG6sXiQMoiQj63J9",
  "key11": "3HufmBthESzpMKZGLrZooruJ8LnJZNE1oxCgKf9ivyTeN48hAM7r2are8ecTFnawU3oPTVPbjw2XoVjXWSU56HEq",
  "key12": "583avEfkLVBCzx88329vuqALyZ8Wm5tbUp7DcgfHHVXgSXKisPPrSRFqXcqKyrAJ1DqyFwE8FgiE6VALN4xwGWFj",
  "key13": "5sSEMnvu252LjHDmR4BfNg6s12FNc5cvizbn8zzbjM9vuMqiWgEVnHC8Hn1Dk6CSCXCFcKmsrMkADJPdDdgwHKR4",
  "key14": "26s76nK9ycgymitzbwGz41UzBh6e4ePhoT9pt2vnfhEWYZMSyyENja779KA8ixhGXUqod4XheN5vWXHhHyDmyXZo",
  "key15": "kqPUBzXGuyXbfT4kdc8x6zDGXo3r5DjrPssc63KXbcZ9zXPJqtX3dJhTumwdHkYbMzJQgQg6u8QiwM25u2AFF2P",
  "key16": "2PxZUhF6qjGDxLW8da6W21wFmxCu564jQjoFbuEFFS2UT3B5Pg1Lq7WdMPquoC3CCMv5xibQznKJSbRrpcfA28Jd",
  "key17": "3bmzh7eygHXU9kY4UYeRXDQfohuQ3EiS92qdTZb67YexszbGEEpbnYcXws4afniPPwxgToqfbMpRjWkkCugwym6R",
  "key18": "2hrZ3zZXmZPQ2tNYMc6JEgp4WXWHf8rBK1mYbeCZTcsoeujuE7dYEZTjorssbwdyVgR9ZQawDXptx1mLPzKUiAGZ",
  "key19": "4pBRgtZsTqgzubwtts2jD8jHNDGUzJKuDmoNV7prrrE4C9dh2UtCR4bU3tN5YrDzQDAGjDN6AVGUDkLi3AhwfQbz",
  "key20": "3pdYCUaZ7PTSsLPrroQYK4sbM5m3xUJMV9Rzkk5NAjWnh4TFN6fgbLTHHFyPQhFaG4BYFGs63EbTh8BMUbseXi7R",
  "key21": "yykkM4HnLyGeBtKnMR62Q53pMQ5gAkv8xeZ6M5pvQDjmnptV6StNromgMCSp913zPN8PeLzH7V7zCymCXWXFFEj",
  "key22": "3u76Zaw1uQXqB2pyfQdGEcrucp7efsU9fLv7CBLAJTpp2cfRpSLFPGULN8BK2f1RCRgrYjXEUbaCbWZtUv9qgSV9",
  "key23": "5nx1rMgHqYzdVDhrc22g638XD1yGB9xuetukcUkrnDfLvL1dyktmAe2PomxLwCnR1gAuqVQSeUZpHmYwaPqCLdHG",
  "key24": "2E7goPHhaKNBHJYyr6TTSBBNfrH5AxcfNsgsDwjzfAwFea4mooSXyzn9K1o4wXuWeWsF5D3d5y7Ek9wufXEqoGZB",
  "key25": "3Z67M9TxuwAkt747yC3Y98BNnTX8g1UCHY4duMiHRthRWhKuvHF2assZmjWwDF2GmvqrCVwxZSnfAA9WbA9zEq28",
  "key26": "3wRkCFqZQ8gU4yJaJ5De6G88pMzSCWnx4zZTzRiTyMvbAe8Kbe3pMwaL2z6vVBNRA2H6ZLvDxLnKakcRzuRPHhPj",
  "key27": "3HepeLGxwKcpDaAJwwEvAfvSUwh8XVpGC3ymYLrAvuVqp5Gxbvx1rxK9W9KnrTwYcTwQLqXGSt2Qsf9iCDFC9Urn",
  "key28": "2GyXst9RpgrE725z7dsxjHgcbgFjVLRrCe1oDwoyaVR9CsG7ZjXd5rTTSdkArWMcPKGxaRWFeekyAL4gif5jpGhm",
  "key29": "2zBYMkA7FyWWmVt1R6nfq4weLQ7BZzu8HQPex1CyeDy9rf8u4GRoBK6fzQzT5VMpPrSLGxWALfRkMwCfqHUUvAeb",
  "key30": "4jNrr2BtW1gMyfYQrMXXdtwVhBrbuGwCXSf9UjurBXj4tznFzogcVaBe15CD7PirD3kwXdpu6vJts49Uywc3yPV7",
  "key31": "4pZc6RvxmAEcXL1qQmAzx713iiyhkbTFonn7wDsMctiCSg6R4d3cztRMn86bXPt6SYbcZirxf83WuMmC5wugTU8a",
  "key32": "2oFNraPQix5TgTfeo96gPff1YZsPcjcMBYttaNJsFv3cXnsouKefFvn85Y8fWv9bGfo1fAWfC7vhiLZTybbfF7kR",
  "key33": "3iFVPuTKy8YndyEWmBAsmebPSgZbZfEpv1mUaAPNGhapbDwzNWMnZZFtg5XEQT3bCyzqzoAYuLwUUqFH8948Dx2G",
  "key34": "3YT6X3MkiA56cqxnucfjV4FoCxDLDL5EHZWFaDgPQWFJ3XKcgSZeQ7WXo7PNfMM6whuEmsgFvE5Yv66KdCiHFi4d",
  "key35": "5Qhsa5mLAw3SjD5ZTwTuKCoLhHoH77hLym3bjc9fC7aJdsNAx1kaGcrUhz176yJazqtJt14dDQmerEASpJzvYA4F",
  "key36": "4b3Cm2hjQNqopVw2wPYTMTxZYm6upHcFwq29sUdsPNgS1EYYeyaftVLy8bKw4XojPMj9Tg1D61YyAA93hMfCkAxC"
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
