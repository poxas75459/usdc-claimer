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
    "33KDvJKGDJeozSwvh21qa35kE4F9KHig1bkH7T8UbjckERzWUw1m8EA3izYA6Ahhqi3UXNLC5d1kwEyZTmLjLLdh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YvRx62AnBVaspPXkwj6nZRxkLQwygLButPbnKnpXLKrqdBt3um2yfzkMZ3cfu8jocc46MV2nvp7u7DTxvhRP13S",
  "key1": "EcH6BLEJx6RDZRAHfuMQ6iHeF6pitwW8qSTa8Sr6DsruVFatcfCAZZaZGAdoBVGk7EwJfR1fR84QnXNp9oqPT1q",
  "key2": "5Wn4bRfLyHBUeGZVYvMUh1Wscu8psQpnwutCZVuYYCQczayqirT2uNkGxRCYQswa2CFG799AS1CboG1xbLW3BbL1",
  "key3": "5a7oiVL3hNEcj1P4gcjPJS3EEon6FaJNhq5sYmMtebuPe8t978yNSyt2TYZUGSvEH2UxWKZetMAa3JEcvaF4Gquu",
  "key4": "3m8FTijNoYmpYsJ8NtrokuQGxJD7wM7WNgWrHjZLgWJrYLhuzNs2aAKvMEbSd2SsKbSVCBgh6YkkhKFZWfUJa2ua",
  "key5": "4Ej74WeAx4nKczVmT7WpuXQG7RFy6e9gaGwpmHZvFAAZbkQZ2ey1ZHTkaYunsM92tg9aQovWsVhTW54A8dH56CpU",
  "key6": "2KfT9cR9mUxqxJHZie9wqpxZnzdP93tBt2dmFQ4cibnnyfixYrm2Nki5XUXt22TYpnZ1ySTTZThhyVPi7eKd1udc",
  "key7": "5XV4SmmQvQoqWnpBoET1s7zm8KqQYozfYbCMeDqotEYc9bWxXXtpmHNDUvAMvndEgSyJXMmHDe3g54Sib59JGmDZ",
  "key8": "kUtZBc76m23s1oV5auTzQSZsAwD8EsEbjQNy8vidbPYuiWMxr4BS2zGsbEJ497nod1eVd9QXPKTid5PqY3d4p5J",
  "key9": "2N7cGwjhnJ1LdzGbwrSsNft6kmkCdEUgu7TrMQxXkDowqBRPVQy7KUQkng5SCFbUe1fiKKe2Y7m7D77SCk8N7JUb",
  "key10": "23ZteVG9e8fwQkRUv2nyfW1zEkMp5GVm5pZ1eu7LV7fjtvDcHZJVQc3JHwddxfQQG6TkZfFrn4AXy3FVS5zWdcuD",
  "key11": "5VTUES6qyx2uLgo8R7kDN3xgbDfs2xARqrneGuvr7haBrXAqskSnyMufqTEKgXZp4njp82Jwk5bd6tddFEA4x9NK",
  "key12": "4gooZDTAkbipwR8mjgzSdybKRPqLitwkuPNfpajxrrS2TSoMiKr9c8hS9L81qJt2k2DPJx2Hdq26dPZaHC4LowLE",
  "key13": "iBZX7cpT3N843tQgJt5xjkzojShuHvnfXyBgJhw9f4qs4uGzn392k3e7bKNQaaGzBSJjUTtduaMcUqTm7fA6yZk",
  "key14": "2uDupjRVVEfLiD5yRuNaAxXUSbutt8ewjahW8N6UpZBdrcMuGToETXv2MAzd4XQ9dfprK7sQUk2PHe7doVEhdZ6X",
  "key15": "4JwDhyn4519atusd8yLTAFyxpA6JrcYmDtqoj1mRddax5St5E5RAD5Sj8YfhLuv6ggcoFVk21KD6oWD7X95zVSyx",
  "key16": "5eZbumreSExdf2hjwkxW3u8zEWJ2pqMZEyfWqucgUkNJa254NRR9qKqqsW1Etyrgri7EJuwVx9f9Ntsoru9XTRcs",
  "key17": "RAGZG6vFY2qjdoE5SFbfSpqiAJe3e81hdhazP5UtrZdC6S2wETLdt9ifg67t1sMrb17oEyfDY3GkSrxpdAhCpdk",
  "key18": "5BqRttp1DcwqysVD1HgHrgpzJfAEdsvj4hRtFrVZQ6tjabGxKRxKR1hJSFsXkJS37UoaJJjUMkTMqe3xKEzmXvgu",
  "key19": "2Vd8Y6kBVS8UL9XRpAgfZeRMhygaq9NnVGjBo38MQZDMrzLNr38QTRGm3hXLYarL3WnF7svuADRggtrYc4wPH9rX",
  "key20": "2Xddt5bVjAZCB7LUkcuFgehiR7HUAbA3kdvoW7H1dFU1YqVQfdcXHDZ3hDRqkQP6FzJkkz54HrsgQJEvajHVmSFk",
  "key21": "2H6g46hd1t7wsx73z14bF5ptrGVwC1ueJCAYCVDnXbdwHEm3n4cSbSdVSbE4XyXiY8nVJtZQ379GtMJQJxP3cdNW",
  "key22": "4gMiPV1hD1xyp3Uyc1odn85MzFZAWymBKwBvhm3Y5nFtjFfSPmgR3NgAc1BFoPUgzNRUcNuSqgEKh9UT8bJ6dvea",
  "key23": "2C7YKFW3dQKPvuwZmAU22CRVsMyEsuZj78pGaGkJC18X2DbRYMznDdXLk6etrF71fiWNWtKHbWzzWDUX3K6rZ7Vx",
  "key24": "3zVt83YVgYeCirHZPjAtzG4Sw16KmNyAbzrbNZUCkEYT1mbau9sZckWqDrDDsvA9mX3Pi6fJW5JZ6hFJrscFk4pb",
  "key25": "2KwTXLe8QaUpe8vJeWDSyS9gsieVwyT8LbKQz1B5pjzJ8rFtB7BNRuiseTotHS5NeAUVrcZPQGnGVZ9osXEuLjSz",
  "key26": "7HWs2cQYjMF8NfJRr86axet2qG3rPNi9WAoo7pjuwSrp8Esz5cCbPKXq8mqyCuQHQJqMQRLzK8xQhBsnU26r85J",
  "key27": "XQGVXeXhUpXqGT26Nqjsxvwsra5zvEr5cNYZAr3pTccxX4Pj2M7yCT3SQg3rBX7174z5kNdqxNepJpr8ysWxPkv",
  "key28": "21R8vq2rBxokJhU9kRoKKAHfvGdEbQFrCANjgYs3q7oNP66y8UHNwDguRMg81nDJr9uj9qgSff3fZwm4T1TLVK3P",
  "key29": "3CBetLz5kv2EfHP92hJ9T29VqUGTp72A2n4hxPYbEQP9dv6uSY1B4HSndLwneVY2yWvg5ZDVwUW12LEwvEPUeShW",
  "key30": "39DHsa76G99npBSxB1ouT6i6j9QYj6EmZPmd6n9DdrmR4ZUapXeaqNwvx5iKiJAsNFFzW5zucHHuSMxhGLk6MdZL",
  "key31": "b6VQ7NVndcSatx6LmCa6M9EKtb8kyBn5nTA9gRQSKJJ2WKWiBwqEM1gkwqLRqYWoqaFdw6ay3TMhny85URm1s2K",
  "key32": "5x5xgSdsuues6c7XuC9JT9oyyCBKo5jCD6RwY5FSyXspcnb7GDGF2ce1YYETwMLYNyLpecrjsL2mrhbWsuvvyNVi",
  "key33": "3UPQyj41WAAfHquwzKL587NWEX6tFtsZunuCf9zDfBJLEaQeNzNyPWH644ZqxsmdJy6ti4nf988TqCeJgSeH34LT",
  "key34": "2oqjPizDeJuspgHZmpVRRHxnTNeDDMj3EZWs5RWtnQ8g9LmpTKcAooonueXDYUNJQU5saXUDW1BMSmFYCt356rEz",
  "key35": "43rQE9wuXeJbFdUWPe6iowoLtyoKtPRvYjoAkMDvGZ3ciXvKVJsMwB1nmDuufFTXA51Lu9LLjrkgMkfno1ZYFZM5",
  "key36": "5BQq8RMShazGq7L9v5hpdfKq4TB6w2yB47LWhrRdu4LQQYHdnEwMXHi8QmmNQTTL8fvqs5zryggvXMN3KdU2HXaG",
  "key37": "33N1v2PKtWimBLnNRYcwev7UDJc29nie8pKwMN5yf8qBVqpha2cvXtfg9J3cwEQKd3t2Vcp2zV4eEyhjeuFu2Brn",
  "key38": "3wB8PZpvVhYSYcuSLsZ4rtMP4e5p4SK3BYQ66fhLq33M9KyHk7VaZkjENeunL3ddBttXzdnS5JqSYsM3xKXdMmYY",
  "key39": "47AuAmdB1dcJYNMyHeQ2cXfwT33d59tsjZFz9gPL2F2zrafHDWPj1VDpMJSBtAQ3k7ymKYa1d7iYVBxtVbUQjYhJ",
  "key40": "3Lizo8FLYgRwNSTfaUuipT7duTqrUbx7skVMxidnqnQqttjaXwXAhfFQpY8GWq622X4Qtgwx2KaskySckMjBRfDa",
  "key41": "2f32cL85cfmu6NJJnoNRxTCwrSJRZoCarp3asg83QJQAddrMEwec5EWktNHeEH6WiCXkoBMRuikR4z6ASizUhXjR",
  "key42": "dHTQpNshxqHNDpHtwh8TGzpyFdjc2h1LKdty8Cb25eFnERx58q9oZBUCtt9jGi7uxYdKmays82jzQxTMxfKztTz",
  "key43": "2et1Y45vRYBtqUTgQM2vZuymLH1bLyFCCysr55U1YGfd3Z92d5U3jYjdGJaiV13rDy8EzMPPMaoan3LebrHRQuVf",
  "key44": "5hkcP3LZHJy1HWAUJn2PU8EuQHbMBXajLdFeY4YCGn6BjP5HNP34KoHC7UoSDDF1dN2JweAaDURUmRAjvNj2R1xp",
  "key45": "59ds88EXsfKNvNACrLBE2YrdeLDww98Ca5WBhPMzThphgqeD6WSxNg3H9zHLjevtjkqhwmCYJx5R18cGtaEpGxMr"
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
