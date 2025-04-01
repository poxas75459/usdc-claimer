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
    "3XZA3sPRZ9dPYYwCg4h5yKzxxvwB7VtfQyMRovvLSbeR3P6LBMWRbACZCcCidfmg2pTRGnPkaAMvDMMBbEuu2XdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34wR5RM3j25es98z639P4Jx38hAQYf1Ah1hYTphBdtd8mEYvMfaDpy9kEX7ECpj8MLfjJXEyuZhA2hGL1xNKVbDp",
  "key1": "2LMhSbyYxBkjiwtV1YKKQ7GpJQLAQQVnrtV7nfhbP5a4k6RDMjjc5Sv2QgvXosP41UdN77rPrgza8wgDcAeCrU7i",
  "key2": "2mdh3Vth4Xp6LmrH2WRpc2GUth4ehAhWtcj95ey4ZqDHANtLHFvzHznEZDSKevDZxwKmUc8rriXuYoabnYMmEWmN",
  "key3": "4dkKaGgL8rqL58LCFNJunXeRHCrSbQe4xsPZuUVeZ667p3FmeVkDW1RNQ7njsAid4MehpvK2sTk8rHYDsexHqmWw",
  "key4": "kAu3fhpvSKnJqxNN1rY8F4BBDmjfRjd2exFk41jUSsFfWhWUDhnSBYg5ixAABd2aoy5jZ2E8QJyqKLNKgkLZd9G",
  "key5": "3XeXmDyAUsa8KTRdJjqP8qgEDByXmNYMThwHfWN3SWZ9gmgHdvFaWuLEvRwJkGwE39SHRxqSqdjNxrU8gm8EhTZv",
  "key6": "2SuvLN4szbqdVMsH4FnswHeNvQh9KqNJG1tgSdxqPZN3BLyzPaxZYJdAuzFvZvMjsSqQ7rCYuhnDJayKSdbdtfu5",
  "key7": "5hVRAhBJWnUfxWZ47kamfMFrFsLmZwrUJXms8yPGfYQ6gU2NVfQNedqpU5mSWsdzdvZ4URtZMabrp1g9LErqUkyv",
  "key8": "2oLQcyUTGWVEpm6hWhxeFPFwFP2rLif6njrhHpSqegA5NAXzQ3ree5zef9nfXqLonCsTSMZzkHAFpcV5wn3XyknU",
  "key9": "28FHoZ1VbNetxRZJS6G8fkzBqmtbkykQBJApV7TxMFFPCJU3Sf8g4ywVxHW6giE83mVQNjjcJ3Roju77YYzYdGzf",
  "key10": "2HzgZ1cNd2Br2usn1mVF8hHqKnxn84UQS8cv59F8PCeR9rf12EDAnwanr4Fyj2zQRAF4YnCqfhXHdFm4zaVv3Rew",
  "key11": "4HXCLM9dpqhrCTWvaeFzRJqfadD5AmowycEBeDLtdA1DoEpMtwDBtmFwz4MqbCZa6EA7fZFd9KSPcuet6bVC2vB8",
  "key12": "4wwg1GeGYC8f5718Pj8yEhpHWG7UuycYDnD1tFAfWza7uaturDHJqyADD3GRVVkMDNDxenfdecv2GoXBosfdKiCN",
  "key13": "4xEm2La8LqXCDUj9LZK1ZmgrpcJie67Xqd2hd7ZHwUmmM7TeA8tTPWJKzedjsHYoXUuFeLuy7eVB2x5YztsTdfX1",
  "key14": "2BMFcS6wMQsqRvfzQEH8RAa6hyqtS2axx8Usrjrjf3qjqhGu4JSzYB4T3YjLSWoFTr8XihE1bK6hXsmUd67vefEu",
  "key15": "4JTbd7ARuMpbzvfXByyfrB759xKswzcJjVwYvECCPf6fxbbB3ghSo15xgZCyWiH3Tj2r3eApmjrC7q1dr1RrnQQz",
  "key16": "4egV1gdoYFT2BrLD6HcUWzeXXF39RRJSBT6vH7ifwdXXWF8Tn38erQSkMk4JhxCE157tckdRzTeh2kDDoGjZT1Ja",
  "key17": "4QUhcG8KDdubBHrmU2Hkw8vJi7nbbBKw7XPRz6nskgTTiot5ifWqxiEdgovZKdB2LASfnQwZC7szgW94Q3R9YLpc",
  "key18": "33fAZi4CEBJ88aKCPgobEBMWoXgUYWuVK7HP32mk8kvNAhKfMrXCQpqQUVjr3eSCXHLMqyR5MPeNkCH4shdLQLjw",
  "key19": "5xjB24oncwGzSJNr2df29XRHxzUT5x4nvb9p2zCtFybqznQ2Y2h7A8Ak7QNhP1yMRMWgVhQGaXTKiBVHTeEcQAyZ",
  "key20": "657up1cFaekdty9S6ctDseQHCAuaJMRXKZ5oikHwBRzE7GubcHNGewXjw4YkJiPL8XbX9VE23gkMc74AEXmTBeHv",
  "key21": "5Qyu6rt5QuweaEekYghATpgTL8seWdF6rzVWtrjCikDzm8EAfMeUA9oSqCFBaT2Ev9TrRQctwS8os3iNw8wddiJ4",
  "key22": "4YSz1vrjip16d34VL8PeZsm2Ug9XdqAgYMYfEvJmnxqP9CowYjCN9V9XP1qGSmBWcHnPJdmmpxUWFYDpQhbuWAmS",
  "key23": "4yMZHav9rkJoRbyJzHFWy9vqh4vP83rYHJhMZnk26mpG1qGV5VXHfPLcXh8M6UwSCFrL7CDG2YnCZt9g5YoUCAAB",
  "key24": "2FEyG5ZGZVDdaC83M5N25VkKp5N5VURYT33bvkUv8MzGK3HhJaViaUc6RyfVnuHGQhqrWthGYGL1k7BY2QoEExy4",
  "key25": "XehHU7AH4kSRNTrxLnHb9NLxgXpcFz11a7MhctSC88iFM9Skc2xdub8FxgP5BX4BZmDFW2icEnTm3dZPzmgNthM",
  "key26": "5SXUkLQteorMdfBkXfzr7MJ2beyB5v39R1b4p5AW4hRgqgcDMAYsXpaHvGAMUzkA44r2PZjaTKEhcCK2vvfmyXYN",
  "key27": "22MyZz97nnKscAbboysxV7fmGxRJD9bf9t1XHr3BVyCYghXxCxCCKuMZYMvbbNKdprfXv7EC9TQyLrQGdU3Cnaip",
  "key28": "9Ux9Bb4rhTLgnHHf7AFtdXDxp9VfFRzQBdfUR9gxuQ7tVXDjH2NSRrTSUCa7mw5y9KhQH3Uj3PPNYuQhodFPSLj",
  "key29": "MFLPT5HNmRRvn8qt5aT6XUrnFsA8fURtNKFLrgS6vbvK3zxSb4rt8xUYR2Vu9RJE7tr1ReLmuaHubgnhgMzKeca",
  "key30": "cVownCwnWAyntB1xCLrYGyrRg739yvckMB1AFiVevH1FLqJCUgadbiZJAwRB1iXo2TzLRpKbmgjRGBzL1FfWAW8"
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
