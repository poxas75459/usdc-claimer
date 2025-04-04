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
    "5XQz2dx8haugRh86F98rAk5tgSTA7xr4cy2mdzruMeenMY35hwcgj9Hrqt6VKQZp1Un3Qd78pfi2WL8Kyh8FutEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJr6sMTpQ95JbgCtPndAxmrcFvSD6a7Tz199ge4yXXoGFMzF1K13A4TXECUuUAsisxvfFVvHQt9r5FV7oxfexdK",
  "key1": "uC9499MQRZSnT1Y5Gzz2HA7X5kknbmw5x4Pcy6hCQjopiqWpx9UzopVHL9iDtx2xgJ9iGuDnbHHCCy32yvuo4eo",
  "key2": "dDhBEyyBFC2eqdZj2xbCSGpDGuPvxDbJbPbY71N342aj8NXeVtsfkSZ4qEUmKV2FDjvh7hfU6MCNZuesJNCpPSy",
  "key3": "61NjLzxzpHTHkr3J58tLRtBntpp8C7z955jnrCeTHX9pwcJ6hdwo3TmSyHBRDeW7DWAANQYJiT2zxZ94syTb2VTS",
  "key4": "3jWgAjMbA4LN2aezm7GDT2LxdhiXcQpLXzKMZ7h4qhk77UCKuRTmqe6t8wwaSpxFfJS47mTgLGf2Y96Y1sNG7W2g",
  "key5": "5Kdo7heQSoTRme8fDJ2TDpX5X2et3jgBm3j4rqTmCUe5nQM3GjNoG2PMYbv9ojNYFNyHHfVeYzLvGnUCeUhnQuh4",
  "key6": "4e1MaCJJx72T6sBwsMZDTkk8NoxMZEtAGKEeaSgXxgvXcMGFC9CoRGkbrnFgjnRUXh8B6CVUqR7b55LjpvARhpan",
  "key7": "2UmM6QSWWKbRakT4Fq4LBzxi5Xi9ACWTjTBhzcgLB2mFf9XifNRe49oBGyQPgsXprShR6LvaFWijACxwkcfkhwsh",
  "key8": "2G8uwV3ajSpHPUkWMhqDMvrtNiKUuWEtQr5gvfXhv4NCG3EH2HWwhDdL9f9Ayi9YcCQ97w6rxvttDe3BduMVKwvw",
  "key9": "2r3pDDBPu8HoZWXDSMK6MH5H2P7r8L2jSA9EqtxUm46tG14nbtDN59zAKpLu8nCrhHEe9jKA7vzGKJ7cwwJYabEU",
  "key10": "3WHdSqF9hPG2gw4EM9AUZbKCu6Myr4M4K2zdd71DWKQwzHYzm6ffDAfWxW3Pv5wSokNsJWXSHjwky6x4XB5XrEot",
  "key11": "jXAnex7x9urwJ88WWfvitARYLERLeFg25GZVPes4KhMdh4bk5Kk9eavDN1iFCjPFk9Fyrmz6sFXKheLsEsTZFuG",
  "key12": "3aMponaVViAWeBXty7FkwMDF2R78ftF2HaXYaNrFSF3eo6EQvTHPsmYcYP1LW43keyjCUF9drksH8kULjXwxfU84",
  "key13": "67Cpk6NVr5sVR3zACoux9Jhsmvks6i4EU44t1pZS5u7Grp9VPGU85s8C6z6Cjm4aTmyWnPixwaPyT4DHNsfrR5B9",
  "key14": "22ecuqFs6gNPRThYTyX7Yhaua4GWSDmwxpK71p1WpMQLjajwWJoiDiHRaLgqnyJm16m7AArZJuA44BA2C1Vnjpta",
  "key15": "26wGDgMuSmpvnYyMogkEXVkz9ckp1cb3JDa2tchxXbjWAfbzJESMQoLBxPVir316eLzSpxJ6jHMH79j5NdeBoXvF",
  "key16": "4ykCyhB89CKXhARsj7BVW66ht88TzZEY6aZ98PR6PquKcEoj6po3E9rW6rAfYyKrH1xDi9Cufo9R2KgcjVegv3WH",
  "key17": "2UBcQpGYdJ5TmQcvvj5snqek21YsUCgwRyvRJPvqHiRAkRzkBDvntrQgPZsMsdATUfVLFDxBRGd6WqXD6K8RhSYi",
  "key18": "WxgmtGY46S7sTJbSE7arLUqsAsxVuM1vAkr9gmdyfgrCWuHbsYAgkZobsUey8g9MbMhwJrCGX1zy9FmWW1GUptY",
  "key19": "3FPrZNmtNtZbUeVWjUcwUTuyuYmrFmh2sV9Zvx5xdja1L3fHVVFnS3SxWziJ9sBZfEUdebvwikCpkRyWDbuKUGfY",
  "key20": "3WvTnTedCYDZ4RhzduxfVW7a8aKoPzz5r4JsJGioBo2DneBYkDcY27JzBW9SRK4fyi4z1sbpoSGuG2zoh87Wu4jB",
  "key21": "42d6CJcH1eaaphUdGFd3gBbxaRQ2EGe2XM4o5v13PPfmoZcg6mVqTvv2nWnfw7pR3mAgjSyviexBjKViSd1xzjog",
  "key22": "3PZjvsM4Ahiu9JfnrvHM8i3NaThv8BjL5qt229NMtF5UqhKEmRhayd4RCRj8H7LmpGCt9D5S1KHTmgQQo2ubkLof",
  "key23": "5bsbQprgHByd9xDkqnFR3UZBSHBtiWbwekfUf9CoPXwJ2AUaLx2FB5C4ZDQMHKF1tpXrmg2UdqUzyWTHBqsLdb8R",
  "key24": "4LoL1rLT1uYqj8UfNqeYPikYyxJFNhgiWWbrWfbbfaMXWLbJh2rPZaeH57Qw2TgtSNV1ECQ2LuqiniQFHeZ4CpYY",
  "key25": "26WPLWN9CkqM2hyddKERnqY3Q2e1PNKuK8ALp52rsPj4whSXhmo49o6YJqKxkcvQh8tCqwaEwfhH293xZNKnYfJ6",
  "key26": "5oDjS9W3KedE5ELhYkvxDDEUUndM1Jq2iTJTRx2qq77ixkXbdyn8tMTg5DEySusgUqeJdbFsgM8KAS2xJ8nBFJcF",
  "key27": "2A8UfrWJnrj61ry43HXKLkjN4pq7Z3uQRDiNqNamF73FFXSUSQ8Sku5wP4okhiy4TSsACZXkLBv4GaFm5CuG4Ndx",
  "key28": "4vZWUHFHFGUJaar7JGrfmdru9fLaoHDv5Z33wj3JuCSo4B7xBWTDf2pLTYRsqYMMrDj7M2DmGS7kWdrnYbjqNT6Q",
  "key29": "5cSmFZQE1G5M3BrVbDY8QZbQdzSuU41z9JZhvuJN4EAYeTND2gFWWZyxape1B1M5oWLxq8Bf7ATQuiWzqUbmSVGy",
  "key30": "36rGnMxPqmrP5TJ9UQa5rKm1n8iKimXqxEnnEQiMUZgTE8JogZJAYiFV9ud45tDreXTJwU7HCVsynNFM3QXsAnMZ",
  "key31": "4oR7izMoC7AzP1VnVkMbQwvrSrbmL7mZsTE8fGcTNKUfnA9c683mPCtx3Bj4W2oZCbqvm62VCwSHGJEbqYWpmKpB",
  "key32": "4DHrxi2WLeqtbfnBQenoh227McjSYLMLWjrauKZdwmoE9VAFqk54YX9AgLYr2J6DpDBdmpBHt2gx2RQRwZebww8h",
  "key33": "ER61Q3txPdxwvKFJViGjgXy7q2wYS4TVaWXJRL7MKTMK8rD2Y3XamKN4kHnYR5vBm91K6SgYPJGrqTBqEz8oVfm",
  "key34": "2zgevuMkLLsXsFk4MgEemj9ipPTnznGEDTJqXKaWTEXMuvKJi6ygnnuVCYqDLyvjVF4fEFMLD4MLCNhxwvGsazQM"
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
