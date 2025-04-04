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
    "5a4tAvzHfkUwyWJjYBXoLYF4rMoDTxxXskTRYgifGk7VwgQ7LCErPnPCCU1YdTxkYwDXdrDk9N4EtB9cJHHmf14M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HZfpJndFQizLHDAz7XMRejXropAK1bBfWV32Hiseb4Jzu8VAdKxJHJmqyn8Yj8wmJsrAfxMkbTV7FtvS9tuoVsQ",
  "key1": "3dsg5s9o8fNZ6zseNZweqXbd9J297vcW3Fo58pZjp1RwKYnrKCq4vWvfooLNKkjHvgXN19eeZjB9dCLjzA3NFC2o",
  "key2": "4NXjr1BpqXtwVFq2oF83vxnYeseDH5yyTyDZta5HJY5JpMnxj2T4Sroup35vBdP5yJxQzpa6RBEayVbjh65P5nPo",
  "key3": "4oroKhJ3Ag39mLLhurAWGMiyjkVbDtX541Z16Hkv3azNHudnt2KZAs4ZYMWQBe3AmdA8NV2ZVfgf7eDE4xqf1T2x",
  "key4": "3M2KAoLrh7VSpwsPPiKp9qTLeVG7Q3WDANCqjAfQFQJQs5H9g6jYxNLGMpnDoPz98AANTcxHjvMUWUJL1xJduLSZ",
  "key5": "syJj3su1u4w9vx2nt4wj7DoP1Ar3DTDVGYoUxrZ8Ts9S4waYywTr1kfUibvHk55AQgoGVsDZ82boMXVWrfqb4hU",
  "key6": "4Yp3f4kBqVkb1juVMqUmUXWGUZfEHRvP9XDne75C39viEc3ZFW6hr9ybwGLgzfXVHFG56LPY6tWvhkxAqgtKR9AJ",
  "key7": "2L6MRuSyLAGCqV9rna4YptJgSC5vxkpMDmCuheSLMmAityghxJZHujZKXSiTPayW7GrNXm4QqTn72zGMoK4a78QB",
  "key8": "3nTNdYSupPgAuoTVS8F7a9emm7yVUkSeYdFHEPLUi9Bkn9QnNvNvRjJEZreEhDqChBS38xGYoyfHbiu1TdAye1MB",
  "key9": "52zDjnhf8xq9uSCYiis5m8g2cwXBQL1QDi3kncW2RQn3FLUbzb8P8rPjNzYRL8krh3DDccqD2TWmARwLGRU1Tun",
  "key10": "5LavbRkRn4Qbq79W4LuUUeNTPKne11s4PCpZsciyZeeye6bTFwYf8QUX6d56U4CmDBH262NECG2srR2qACy32pdd",
  "key11": "2BAfC79JNrYKgzsXsubDa4BaYLWS5s2ASLfgGekaK5XdJq8xkHmwwTomXa3gVPSoC7HiZ7JG9UqX8vCLCcbN7bcB",
  "key12": "wou1XctUfCUKgKFxLzKpMcT1oQjVo4giLmcT9ZDxcQf41kXhQEn9EnK994uVzC9cDJk14M7pcBAa4GnwBTN4Ekq",
  "key13": "4oXh9fb7UrjCvVzhqGjTQHqPzGmQKGaQ63TJ44Uaxc3F9EpbCpDSajqqwPoYGxemS4Qe2KMfe9MGSwSDHL9txVM7",
  "key14": "4RdBy4GarxfPdFLxDr8n8BPU99Tw1vUaYDaXjvXVF9KMgdvd31m2fTwRVuC1ZaoJSfKLqvgGkiiQMSrR687qdVQf",
  "key15": "ZKArLV1fWHDdxYfYpZZgvd4W1ybXbYognWdXqhBrtGjYyYGBc7hntwJXhrVbN7eHFoFhsvzWgjyTqVjd1LmRwad",
  "key16": "654yLJzFU25qQPU9hoz399nasiHeZmAUPAhh84NHGaza47kV4HprftJGM6megSZY71KKVhNQ49xnKxx1EH4Tewf5",
  "key17": "5hF6gXbzgKNQR11YAuSmqiFqP3rPALreuPnfLVNzpnww8MCQpaFusT5XKiQxzVYyPWKsJTy1dKdMKxpMVEmaX9yy",
  "key18": "58x1LkrBUfeXC5acpoHjrZ8khkiqn7txHiEAFwYcqqvjSpdrwZEptG7DWj72QcDS9skKQLXXUD8a7nBoQxu1ZMuJ",
  "key19": "4PhQPqjopsM2M4NuMRfXmur6okoLGLvAkkV65fdTPz1HhSk88tMT4UUdKEiQ335aAyEaBTXyBDkT697px57DGSCA",
  "key20": "4LBickWbapn5k9kTnaBYKACW2uJtuRZz8aa9RdFAphjk2PZ3WHpsdyDQ7Ju4L3AGGxzabjcu1ARbQRnAPrnLWjZz",
  "key21": "WS7j1n4KDtYRN4PVHZtD6K8Rj1hr7svqEdMnBNMv9wVFmDNMcMJgrgbFJbC5AbLK4qMKvEAUk8Z28r6v1nEFTPn",
  "key22": "4Etq76oUVYDwsLWiLFY4iVUfNh5SxW5qBurgVb8kFHv9Yx6Ud5uCg7P45Ge6XckMJyeqzLf3kovDxRcJMp8V2snA",
  "key23": "245BGyAMk3RvHXqZDf5s1pT4ddLDmQzrALZkuX2AXXEpdMTjcN7yyF5nXKoVdpJvCxUyR3NkBDVgAWxLuhjDqZSy",
  "key24": "5LLjT4h6kKPsBRqo8wajyjAPvEyMVUEhGhLnFaAZVa1ZxqTaJY9Lvjxb4GowNWH987JHAnPFY6kuiWhZ2mo1TYj2",
  "key25": "1PewdunY7hmkpx8AzYUN8t3U8Be7iPqWpeEJw8yeG7vEPd6DDFe8StRSBzP4hVM9pzX8qMrPkqWZCCcfMaX5SWB",
  "key26": "3HfPNfKZFRb93um2boG746ABVSkqRK2fgsqir2PAU9t8cdcHCtQWSnNnyRNX6vjhRQNFmaySeiCvzBFquaF6vdGK",
  "key27": "5vFzduR1x5zBmrTAChVvjqpzWADgjp3Hsitg5JPrw9fe8fYWg2wbFrEFY9WpPitdCfgYoSnYQemG2pxqiGupFpwr",
  "key28": "29xgBzLWutzpY4PiXsfyBRK46hyAbc2S59U6VPA6JNwzG2QeKGz9PqSFDV8ofnbvhxncxYcs8SKi9SNN2YQez5yf",
  "key29": "4rv3bCZnz9S86P9USXxaZ6qJRsnneCD5JXquJ4LeUjb2zGCFa4gEUktKxPQRLRM7kmnwZDXTuFxKjeGgBxVNxMpg",
  "key30": "66zqrVGtpudfyKypXckEzo9U7jqFy39nnbgtiUG3VXrv6RNbafeZwt9whqbt9AbSv2xohpJNM3opxvRDxYWTXXvX",
  "key31": "3LvumZ2bYPPMnJgHARU5wuwhmHCnbbjse5YHEjNriWssgN8uKmLtbJbDq4L8Q5Dhi8jScda2uGSeMwVsPfHGUsi9",
  "key32": "Vs5XZWgJSUYccJuY1HDNWwZ92gXEJhS8UpqV3284syrPnqUBGzdGFfv6Kzv5shj6BQbKzeuDm97u9oLwZJAPeQv",
  "key33": "2wEExdsZZyiVBSZgErNmtdz3jZz5pcQKPpHPjg7nKtcEeJQFZHe5FY4ZKsioJodpFXAJ7881Y9UqExiNBncsBMoq",
  "key34": "3tu1Qr3VE66vtMjBmgGprGr4kCsppMPV4zzzW96bZSUSYGVQRAvRxr5eSpkPVARbBdatoad2ft2vfauXXHKeDTvc",
  "key35": "4Gt3NBdaSGXN3Xbdko8hyKbNMzYRAYAKxLi23e82DZJj9AZcrBbgXiFfvtQetg1ustLtD5Wjr8Xjq6x1U63Psizt",
  "key36": "x1soaZptyCPj3kBDu9PQqwB59HpdJd7TWjRwsvMiMGdRrztsHNEB19JuEqJnGpxR1oDb2s9ELEjVRhqRr9PnRM8",
  "key37": "3sa7R8TYo1WCkLyo82qyoku15TcPjvARSgzdePcq629PNkF7nFjjEqpau8FbgVcsQim64CXXqwquN9WQcLr78Gj2",
  "key38": "4ryymJXG8EeNdBeakauK63RTrZpVP87pk3Cn7a8KLmcWkowucK5s9fmWQtUQLi3DttnMy473yen8gfrKNPLZ5cT9",
  "key39": "5nNBksaTjMpQXKQLUnKJ5HVFiTYs72Amde3SnHDB2QhGyC2S4wGhzNj3npZUW7uqgFEH3F4azCJMDdkZrTZQqCpB",
  "key40": "2WT8qDE824PvzuRSsqT2dodgB7erAhDKGfsJucb7frefGMiHEazKAKmXKVxgba6DrTYfvCmxgWMfv5BFkDEruM3b",
  "key41": "29JNu6pV6QYD5x2MxpnTfkQv4uWttafMjEkjvFterQqGzSmzgE4yZAf87Rznyd2zKpFFcXwZuJJs1pBEfDHdN464",
  "key42": "3EvLtLwxWnqypNHyHiha5FBNfE1z9FLpDKGjdayYpQkyXWsGqUF8acs298h9N1JS31wWpFX3vX8d8ykS6HSsugnV",
  "key43": "2xQz1d65wHZvEfzUL85XhBBuNAK9PvHUXLg8hNYZALrzoFjgCFnUdFVuxh1pnyyZP9Xo4wEJxaZUt9xVLA12jPeV",
  "key44": "iv9niVgVGrpsJR4zDJNrgw2ZnyWRQZSAtuGxphgcdjXV69pyUNtxLr8Uc3RZTVwkJcMtS6xzywWAicLd7jkfCgt",
  "key45": "3sM3G2Nyc5e5XvFkpVJeRuudXDtzibb5Y2aPCyeRY2QuQKa6QN5H8xjKFLnQjMBCPiba259Xre2xNgBiRkwZyE94",
  "key46": "4PRZE97qQ6iFBsAGBcx3RWihBSfjJMb8sRVtLwaHKU1w55RceuzDeaMAWhrPZBZj8sr1FnWqbua36Kiyt9EwFkDa",
  "key47": "4kaLwtNqBE7UiZvN6fxEnD6qBVnMjDrpJbzCwmq9953Fyuf3yQSmHJvTDXNWBoDt8tNLesd7BuWQddZCoHAo4DdD",
  "key48": "UdtmaHWwM71JmaY4Asb8Sa25YhEub4w4ZEwmde4sDxaDp8sT5dMimtA93Qo8TRq9qPDmpduudB1ennqSmNYL9S5"
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
