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
    "2scsrdu69Rzn9iknsJqAAzFbti63pfnwMfpE8SBTz23JBhg6SCEE3uPZCYWiXowz4ZnhuL9MDk9JvBE3JzZQX2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CXhHPTCEkipxcxwJUJbbLU4igj5pqFDdeCwJ8KkgDjBo6M39DDZ73sKp5XWWiJun69EbHCJtrU93EVv2H6z28QK",
  "key1": "SzHFt1aP1FQqArPkRBqYX93C8CXiged1oBVNtvAAJWjnjAZpNS9sHTNwcG5dNdPfXnX11QDmFGen4Cmnk19nrhZ",
  "key2": "2SUUo7TZ8Mf7PCmC51wVtYM8erEzXdHgFttmWXZ4KAnFWjwbJU6zb7YacKPjJZrHM4xM1CY1KYesM8PKxohy26Qd",
  "key3": "btBcFKRAfshmFxikSCQgdTS7VQ27Uq1EcXqYBEjANyLmtireWiq2m98j8nQHS5aY1xaGd96hayZiXJYqKxnvWCn",
  "key4": "2DbjyLQnXFAVQnm3Tf4GmpJkavp2VuMGG5YL6m8T2TBpCtj3Y5cLxfb7gL38REYuurYXwbtiw15DtqzPGT6kc2xk",
  "key5": "5EuoyqZt7WCeM7rXqmv4vm5uwnipevYGy4etiyakQ9Sz3FiJQwyD61osWm4QAFqigfS1is4apqpRKuHoUMEk6yTw",
  "key6": "Rai1A7vKqvkQRZKjGV5kkp3f2np4kfbiLkCJ5kDUs3kWr6SiTri3HmpiAELAqQSnHkDyohHbQsCAc3fEHEwK148",
  "key7": "5fwuthvQeEUQgt3gdxYpLsN3yxSJEjQWfAtGFcF6kyFzapJNwJfoY8oBGcqMtimNHmJJuduUHxCzyCf1j1aVNZ7K",
  "key8": "61vk2GbhPX9FHFQ9aH3U4kX26tMHWfzZkcKGS9X35XDjJdyGoHT5NvHQ59LXCJbJ8ip4ksF9MK9gmoLwc29NunkD",
  "key9": "3JfTJnCbppuuK5UrryVtMvEbaHgmkqJvyQNVATrgf2S6qdf8RzokYkkfp8qh8rt97civnUPRUa3mvPT7EtG96tja",
  "key10": "3WXfNBQF1ZaGDhnkcjitBAq3Zd4MJYVp52MT3bJFN1yoncZSsM9tZPyCsobg2qd52eGmrhR2TdUesuQcjN1s8AtS",
  "key11": "33WJD7f8CctXoDGeK85ZRRF8MqQuWuJHNjaL8dCD7oYsxNSmmBhkuJJNtSfuhSXaz7R1625XTC67hh7McVLkr2zU",
  "key12": "5KvF575HLvNyQPxXpVRz27QttZwcxxe6jwqKBkonzMv5ezfT1yoeGVY3ix5CWXwCsrDpsNMiFS3VyyhVR5DxcPmF",
  "key13": "2r8YApjJG7twGdwVYkpuB7YFPpQRptasKYUMYrQYhDAqdVNgcsiJQeUgrFQYPwwB1D1enTa1ZTqYAySL9J19qemf",
  "key14": "5LV3arbJmRz9Hp12iTrQxTJxMtvKG1dVi9WkLGgW71zWKh2LgmjHwuaxb9VMbWH61cj8uVtG5CZAdkfCpdJtVSik",
  "key15": "2G37U8wHfK7dU5URhaLWWrgq9dGbHWzyMb7UZbqNr3AZgjevSWKmhmV24hM8LKLDK71dGDzukgySiHHNncYdNGTF",
  "key16": "4YCQ8yZBsgPcJdfAunVBouBtHfJ8xxeNMNqCzwmQftKpG17WMkZ7UwAmuFbhhB1rRf6XS31JWmPQgosr7k3k9hP2",
  "key17": "4mXdcDaPrD7Ys8xrGwxXkFPrkNu6iDc4p9pBA3tnvcp1gxGn75UnXPHKFv3fgAwDedDv8P1Jcie5LycZW6TRb7Qg",
  "key18": "2x8NAqztaM1RqCdLoRCsS4FvKCte51qgzenpX4fZeiWZyqvkbTJmJzYabWYQWyyQs7Hzg2uZWyLhLb3QZQ3tEgPM",
  "key19": "4TTctDm94BcqKWSmsmKfcXjLk33mLxj2PdT7mcrVUMQQzeQEeAaWW8F7zBV6P8mgzDPzSV6gYRwP6WjNf8ARVUas",
  "key20": "21BfdCrjPvEtS3yNrxdYyXWFJYvufwNPh5jrcbSYEtGjBhjCabycyjTTcRFYw1RFD9XkqA9hGHedJZXdne3f7CNk",
  "key21": "2aHAZ99WxSkQ1FqByXME91YJeekkSFjTA75Vw9XsSN95sExsiBtdUUVtgRNAUyXQw2yAbeAbKZkRx3StWgZm9SwA",
  "key22": "2W93pvv6h8kbuP7WaNsryMtjYE2sHrEEqDeVbmQoZy3rRpdQ35vTQEzqdn1QfW8vU7sAL6reA5EzY1PVagzeojDs",
  "key23": "Am4p7q8Uchxo6bWDZsnKpCAgMDw8VvBqg2JPi2BtJS4saCUQpbCxUdEx5EiRV91aJ5XtvTLzNg5hZBpvoTD7Emr",
  "key24": "ePe8P5eUpAjodjtD56xYCBLeAtizugZnAH1UkEjg3v5Cc1GZg9hG6KvHdwGUE2RjcSAFHnDgLSZGDkzbXAAUsjm",
  "key25": "pgjQL4fQDZMBPTysdvFebznxen3b2G2aToHt2jzMjCqGvea1szzMXmuMSkj2cAzjRmUuShn9HAZPvBeTyZEEpLb",
  "key26": "261graMsNDod6XLf9aW7yW7cYkhzvtg1AZV34XBUbqXRExZPsp7ZwpCoYSmyph4Wv2M1rVbouWRW4dqPExqKyoa7",
  "key27": "4izDUi1xrY45ahSZgu64H3F8Furtw6c7wMm7YCzu7qgUpuNTGNXiFmHbQVMG8ZDwT1uWimKprbzYNJ6NJ8jpCfRt",
  "key28": "1HLqCjSjJw32yUkB8ecyKKHSQvGwjMPZEeYrsLZzZCHTUNsQ58hPx2jM9KWHVjF4JazpHLJvLNP5HBqtikQ7ka9",
  "key29": "28DFaadYUd4BJtSLKED14Vae4CCyd87Dar3negzu8E3hovwLvseqD4HtysTWEGXbrbamYeGLQ3emdJLfSdz3Vd6t",
  "key30": "5iQX9PwKmMedGeUSzJ1eBVvCW7MgdecyqGhqnRNcBMZDvigh8tGt2RQPw6vtiSq3DKhQjqgxbRyECWNExeHVQ96p",
  "key31": "4nQse6MxovTNdxXzPHzykje3PUEujd1dzjwstQxphnXUPgbVVLSg491WqajA3iARvba2PHpSMFWC6D2ghVxCJwfL",
  "key32": "3e4XxwHP5Vveu3oSRjEmmzC7pEUN4G47CGyuCpZJbw7x45M4wPDenJwrpQgt8XENyrPzyMw14RYKmfYhxPXmAbia",
  "key33": "o6BRt8ZKU5gAoex79bEdD2JXFhBqBMZuF7Uhj1urTowta8Kzz48hn1APjkBrTSJyNbMJFASqUYsNawHuTQNC4Ko",
  "key34": "4azqqnwdf1D8KG8j7DxEfYygkMBeWZydvHduSvuqPRvjRw4SVbmhTkvVx6h5GAD9wM4SJF29EV5mQA95vacC2Dou",
  "key35": "5F6wpNvYm8YuWHTaWEfxwosfhdfCpya3vozVs7wrVUoPcrCDEMgFd3fm9RtgwLCt4WkSXPq5uoVknadY1wCF6HLT",
  "key36": "5C2anaQEcEBE7PqYE7LxDgorRio7SNkTnT4dxUFfqyH2NnhhFYjQujExzoHbJg4QecYicgQ1HpjschjbgmKoFMcp",
  "key37": "5ehBkV2QCJqzvp21uyQf5fUboXhbFwiy3koyzTJgUTuTeBXTJx6GoVhQCeXC2a3THtUdqatYoS5f1VEF5f5194FP",
  "key38": "qgQzaMqTHmvMZHYGt6Ja4K71qotXrbNhFNMisDUkBNfwmohinXzXiokbcvt2vEvXvacxbS59KSfonF97Mt8xxQ8"
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
