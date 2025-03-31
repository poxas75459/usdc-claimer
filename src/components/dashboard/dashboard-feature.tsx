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
    "234JvdQgZF1VmFn4Hcf2thpP47Zz27a7hXN7xZkpJXAikT8um4Ca4FBKZHfRV1HFhqcRLbzHXsQHjrzRKsqaCVjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tQNpictnJyAmo5doqr3Aop3ADDSAv3gKVSQFPNvAn7bfijZPNTqzHKaAMnDKqq8Jbegoc6UWcB9YWkcSYdvvRVu",
  "key1": "4gYaWS9jjfyJf7mHXVvcApHUAF4e1t7SqKvUE9rLpGxM1jaH8NFYjKUvuTvFhqWqKSGC1pb7b4puJKeastd1ncFa",
  "key2": "28U4m4xrFdvDDLEKNjLx73NooUqkAL2M2VXmD5K65EvL4VgyTN9yokSFUWwyFnRTEjERs1xGUBqTAfscwE822Nc5",
  "key3": "3TUQM7zS4rQs76Yyiqx8VyGWaArVCTZS9MUnFnBjk25N2CAoybx5HmC9vzMmjUhNeHC7Jf3Do9RrzY2EewY8891z",
  "key4": "2tGj9F8SumrxkfPHwJotBttj3qRcoAF6ZRi9fcjtBtVuNMu6E5kwKWgqBdTswBgP5jtttc3wVXbSZCzTknf9q1Ux",
  "key5": "aoB9D5L5okDh43SxohwuzzPJjZpip4hAanSGZzdsMFumQVg3MWS7TLhQ1ioek8QnETTM7zZSD3vQkSDMDvBY6pk",
  "key6": "52aUsrTqhZkc687LJSwPCWUUxPrLoZnKAQpheZPL3VmySCxR6Ggb1E9gXj4dYT96A6qExv9svzSXT1Tm3u4tF1Dt",
  "key7": "FdBasoGVVZvAwkmDV5LWEmQA7bBAnXW12xPC8t54Ko1mwahL8ZN1h8HmH8L88VnwcNoW8CHDAs3ST3oRtKExhon",
  "key8": "4z42X9EpAAHA71ynfD1wbdEE4fJBRDDK5Wpsbbvj1x1oBfZHc24rZAstFXmzqMkpcP6Hvoq1RKsqiNhYGnH6trYu",
  "key9": "5sE6WWoPL5jXFaqSH7pQDeyjj6Kd3g593FMHrmT2iRwgX7BordBYfcx6EfooDfyrDh4L6DN14GrD3sNbfPK6zpUd",
  "key10": "3nwzGvF9B3xBHedee68tF7XZ8qy4pUf1UbpGLuH3NH8eSEyFsvQfVKGg7EWrz58fJswHkAkasXN3uZtvtCntf1t8",
  "key11": "5gMBGAhKyrVqLuZdi4sA36PDtHPXxNCHaGTUNowPe6GDqgY1Y7yWZaFpLQS2SvR7KL7NczeNrVbeu2JHuyDpdRX5",
  "key12": "2oA9t1oipc6P6yPwbSzrAkq2UWJmd5nTsXDvvG9Ck6pn7HgwjS9qmdyXeQoMjg29YQ9SKpw7E8ehtGx8mAUPr9jW",
  "key13": "3xP7Bvm2XZKdoMgGwNJTV3b9Kgk6eoJP1vajvy38MhFoGFS8QitFFb6PzBK6HxWFEtYvftaUaHb6LYvn2WHaEZbs",
  "key14": "2Tivd8UcEaGsG8TUYzxosmr2iXSkE14ot9tsirzjAkSWSUGwAjXD8p9GBKooZqpaWgwXSVf9gyRRsGVa6ZZfDJS4",
  "key15": "55fVrB58Y4qeXTVGyfyT6kubUCh7zFCTQFk83CbZqwGdFogwSp2qixrDs5ZsMwzJDgHDdmbMqxHnUNGPfJo4YVWb",
  "key16": "456bw8awCsSTkxJj22PowF8vM9XjSDskxmbJdUpqD9VvXqoXirwXNGAQRQTRrL5TpSgsvarwneD9bSMmneTwL4jx",
  "key17": "3Damb317diAnTAD1w7y4w4ToyM8dVcvX21MedaGqeTmG73mDz2afppzfe4AejreUQtoWco1fhKQTiBx1zTM2nGER",
  "key18": "3UZwDWVVugdFQYfjcxUYsqQn8LjqTnyF6R5JHmevZw62t8wizR6MXo645pJ4p2J3dcnmacFJVwn4JjvRcKgi23Q2",
  "key19": "UKChZSNcisERKDf7YWR4GEkfj75ErQNSJPmy2t5xLFV4T6abpaFR1MzVQmDrjxQUCZdTHw8P8nK2h4XMyHptAao",
  "key20": "27YaCSQdVLy2UhPffd6rTRKitQSdXgMbZLmz2LTnms554buy5d2N2HpBt7kJLUxc9wweDtnV937w9PoE6ZMDkaHk",
  "key21": "A9Fx1BUJTg44enuZAjxoE88jK6qkqwuo2Z7zGWrZDMkFhgUnVLBFHqKFaxzi8W9ujGHT5KweBNTs5peAiHoczdi",
  "key22": "4Duwup6xM4H3kcxi8qdCGFXn4gxb3nd4CoBQiCyu9ay893qEyHhtSSARn6KPU1XVNEF5AHyvBnAmUfhgy5nsboPQ",
  "key23": "orDRCQqGw9H3iYmTWLiCn7akaUFXrzSCUQbERoAmHsduSe2m91wBdPR7jGgT1ArJLU22Q1gS8yRko24RQTE3MJt",
  "key24": "3k3W5vT9eTDG3LkK1Ku1ayXAavNVUksTrBsuWXYdMxuG8A26kBa3dkCnSrAM2GtrdPwtghcEgm97UAKfAUUBCMFQ",
  "key25": "3YtZJ9bG43pBHoncBBcxbqr4tLfiPRiYJasfFJYkb1AxJzWkFPHEpjVcmkioY76BGBU4FjrrWLbeiY8qYQ9tiivg",
  "key26": "224X949A9z1EnXhx24u4MDtpjKDwUdr6gfsdtqacjDzyVVom3syyeLVV4oKiEJmQrRHEoT2gsEy8tMNz3gRQprn8",
  "key27": "3vy61sBFmCsP1FRrXmC7JnR3BTzhsw9JgD6BpGqqC4aKHstk3QtSdgpmX4z4fSkp59sV7MnogJMWKbUcxSPFawTy",
  "key28": "KxHx7mAutHGYhqGYsBAmJMgPebbSohm7r6iNDKuC7xUNtjwTQ9Mr5x1dxsskUyLEU6w5pTPbUsX6dhoyztU4YgJ",
  "key29": "fuiSnf8g9wDa7oCEnP2AFn2GURUGAcGwWbLsik4vxa3zzy8scSauxFPtGAEXCpahAqLS72uB7qjgfiTstSvNFwx",
  "key30": "3qzhoSYwbUZC7bamemkibtzLV5jMUQtL3SWm48eZPBhFR4dqU1ZDiy6j3qZwyCw2cffkW2yxWe8UGYxtqdtmvt4M",
  "key31": "3xx73SWZcMxmt6NcRrURX92GCZZtwpTxjAFNtX8acQPKsAqdm68s6w5uZ1Z3Dr8cKtCYS8CbqSoiAN8M5SFLyBSe",
  "key32": "29AFmYreedadm2QNjcfv883turT7fQxQKYpapZdLRCqjp97cSVCKGErTbvhZLSRAZEBYV6Pz3XPdcXU45uivdiTo",
  "key33": "34hQpuq9iQroD1ec91bPYznMK6JkPpoMrcUaVw6oNZsa7SSsBnJdBFS4Vi1UL7VGBj5zZFx8CEVPTn7s7evECNFE",
  "key34": "4vbi3mXUobebyiF6A2bpW4p3fCgngKNG6jht5fxNyajCipaiVMJsS2qYupVjsTALiZ1Pnjbn1eeWsEpGQRpw68HQ",
  "key35": "4AsEeZXVsLoPJKiacziP2FTBPkVTSq7ZgjWQQ8CLc1HSnCiG7V7n3TCvrmGUZHsBr4ew4c8yUppJCmEsPgM9R3Y5"
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
