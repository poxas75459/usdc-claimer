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
    "5CH6w6JZ3bnBCXKbXcPowdFJsgejTwsPYmXbUMcizbDKski1M71huCFGCPSH7MQzZZBKJ3bLC5BpYutmLv5js6uK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T2sdUrhr7rz8oLgnwbDQoRSFfbUSPhrhHSohD8xGoahDBbCAJ32Z46YCj4QkbC37LA4gLkHoHELyPGNobn8NBGw",
  "key1": "vVHFzMk5mXCpY6q9vV84ncLWw2zkWMAeKCc3LhiRQNziRg7xyj1UTKKmATFjJWmRJ61T2Rd1pd3PJfpK9BKgm6u",
  "key2": "EiWSmD8F3khNLAmxm4yFrPAu6b2Rf11Bb3KpdCZyHRKYDyW2BVMzfUnZjVyXwzaKdkaEjxtEtdAZkTqAPjtgNph",
  "key3": "6JEYhrpXgcCDUxhESV79A3CXgKTBxNxCUhJMydz5Vr77eu2WipS9fN4qf5Ait8j83gxjMrbWEkxkHs1Z4CHjBhw",
  "key4": "td3x56rvxqPh4oPsuDdzCePqrcdUtMKqjQPfe6WCjtX6A8opyYmvxLhHE4z3aqf5caQj96Hmx8L3Mu5mZqyp7Aq",
  "key5": "53dq6cHKbnxi1pqp65Q8b33xgSvxqfMpXB3Tf1kVo2KVcA4PKnrDG5gRpNw9k6gUBxpEgqY21qLkyWRvDJDSnEth",
  "key6": "25q95hajctLx9jDX7TV5wz3SPyhFRbGGMLmYRKTpE8df2jLGUUKTVrHneF46szUhwAEKXBHTajuvn3EWakLRAmtj",
  "key7": "fDeM6sY1TBKkpRoy9ADrfW9QdVpgXvTsJVy8E8hnRpKmrqESuvTcozFKAxK9eofpLas4eM6JhB6ysa8XGVWjuXZ",
  "key8": "4f8uTeooi5tvjcJte429aK3oxQ9Hit1GXZLYLbQWw4VBJEzFdrxKrUYZNyMtvZT8eMLqNPzDh1trD7gAuHWcfAyh",
  "key9": "5SnKM68To3Ba73RBXNM9MMDeJNehhJKFrLAEEGSxHnW1YF6PFTE8yEhmLTGV8CqunfuFqQvuxdrWWuFSmmRUNhru",
  "key10": "m3sERXGo1qvgQq6kH5YV5bh1PCutfP6yKJEPbz2s3jMcK2Mb8BXuLNuqXiPwUuLqc88XNB3mn73vNfgCCqjAKp8",
  "key11": "4FMkQ57m489eLDPtRcQTumAHHUveQKpxoxMaBotn26VyfjqfXWWah9P39cCSoekCQEE6FGq5zLs6mLccNr2JwEsB",
  "key12": "22VPwzicYMHBXCwkAt1vsHtbu69HkiFXT3YZ8KmDrE2tKCnieaqaEkacvfikszggqBaqQiKXaVrFEkwF2CV5q3Hn",
  "key13": "2pA83hwUGH3GGY321YpifWVzExFSxKxuvH414gmQ5RpZQGn9NS6Nm9aV6o9vbwMM9PhUqrC9VnbpKEMEAPLwCN4h",
  "key14": "32msoWZzMgFpPfjuao6Jx8USmSNEZ8Yhct6dgkNQQ6Ew4sfgTmKQ98y2BQfxePFTxiif1MN71Ziq2Y3APK7y6V7g",
  "key15": "61AUHXTH3AqoZYZVGuZhzyRVde8oN6SFTGV5dtznYJSSrWxek6MHhsFfVJtjRdVNFwMS4rtSyg1HLGYoRA5Q6nAB",
  "key16": "55oNgsxLgRRqtH27H86YRgBD28MyTGTHaYgesz16kfUv1P9zmAQW9nV6hStf3nrfrZ5bo3faR75uJgZhBwB4QnRE",
  "key17": "52JQozD2cgcPWVdHvNoeq2Gp9K1LeTYd9fLcxdhaeGoZYNoZxMd2DRK4ztGwtySC2ba6hnXenXBq92TKwBrZWybQ",
  "key18": "2hAtPfQ8kJyLv8VSFxXHZZxBaNguRLNGzuSnSxPrvKvESCHfWCxx6MnP6jxMXNJvoZFjpcnCvDWrkGcg2maR6Fm8",
  "key19": "2kbgxEQtGhD9Sanv25Y9ry9QU8yneUXcYvD1pJ8bLwpVJiy8GHfaTqfPsgkdShHjueKUfMStdzHzZREiAgnxgcZX",
  "key20": "25Jeyb4o4N1X8XvFhuHZMzRriohp7ExWyhuChM65Q2kobFTJyY7HWR7xtdP2UtydjjGxwNUJMw9VhShi4N2Nio4J",
  "key21": "2wUZ8PE3Tbe483pD1sN55b1kn7BeAQbi84Dg3gdxqRZYfn1DaAkFQQ9eihYKXR4BvAMp3CbG6X1Q74CiMdPFgdQB",
  "key22": "3KWtPHbWVHcgadpHNXHjZN5WVJxPcSggdyxRnfLtLXqjTVVwQDtheGkQE1G2n7orAKj8NLSDUjjPzwcRnmh4u4Gq",
  "key23": "4JSkkjthZD1W8xEURhgEPYMj4nQN1XPKQ6dtzdHMgEnC4FU9StqVG2ENVpoPim3bDbD9LTkNEEgzKSguGPW4T2Gn",
  "key24": "3yacBcLguNx8tzzF8AscD2Ct7TjT8ZJFepsi7f397U3ePudwHx5ME68nQQpeGhSn7Zx4ZZ8JwgaVMPxDK9rTGAXZ",
  "key25": "2ASsNs4V6qMqXbYQfS3s29VgJWD381ax9E4LDumgLvL1i1hu2RrXa9W2mRYZfPyQN6rwkxiimo6Lz9fVMaSocypv",
  "key26": "3hGhZ7BAfQkcMpekkAPozU3J3SDtp3vKnaBQJ686UZnhx3gtjrfWkUKW2Ca2YhSB4zzv9KtXMpRPkafoCajuFJTT",
  "key27": "4rLyeaHd1Dta9Hg2o9WgX59kELcZnyGThC3cdCby4LjANWosbAoreNyfkYmBPrA6gqP7WGtDe5sGv8a96qDnuMyE",
  "key28": "3Gy5XseFDXXvXsYToDkPNFRXNRLE186Aa5nR2hjven5Q9E9FwpPBRug2bVuR7KM2Ki2emAD4TFTMkJ7d8CNvaR8v",
  "key29": "3HsCEkhcGhG4ttdqkeLZxKozLPtLdrWMhVdQZnKC3y6rsetz99rdyshWjkmBovoE3H7xiRLCHEveLowBQgB91d4H",
  "key30": "3AaDWYKWy5RjM64oAdEXBcN7D9as7nvhQ3GAboBAzpGj8uZztANt4kdBm75zinEPQzCiLjm1tzEXUk84ujrv2u5N",
  "key31": "5rgfg19GYR4LdU2bQgamK7yz1hMXwhgMAMXqetn4kt2CfdR9G1umEfxKHc9k3xCe3ikSXVfmbjbSgEkw1y9DiabU",
  "key32": "3MgWJKewmwZiGYb4yejjjpq5onVWJzBqsFYZv3vmCvNrGWbdna9fmjcz55d8uMiygZwp7BrrACgqah9Vp7G9Rs8k",
  "key33": "4MVPQUa3M143DNPN5aqLzAUxWcpoKVS7wvrpuG4d25Be9h9Xzddz2CU68w79RLyqYghHMUrfdPVszqHwVu5rNnES",
  "key34": "6G6FcHQdEcNnuZ4krkQP5RsY2MP8E68CGzifD2HdzsL3TFsHarJcDrQG6avRAiEZawBA6eDNsEEx9aFpVeQquTT",
  "key35": "2pxjgQRt3GXgQHkcSqH3V76mK6P1R8TGBJACpF2Ai1HWsGtWfv6ev7abeFJ21CJRfBVgkh8EYbVh3n2fbnVvoaLh",
  "key36": "2aLFDtDG4ApsUenZvz2ooSfuvnGFbvVf1ytckJmPxdo2N2pWnhcgV9PUHBdZbLVad6oLxB1zx7jCZtU9K6C8M3pe",
  "key37": "5EjC17CTHVWB1uMRLWvL4kD94zU2obMndx9VsPSkE498Ww3ywZA1FbusxnJiEvV9pgLbf7qXAxj1hmTYw6RcEds8",
  "key38": "bkbeqbzvm27RS6K6VpxZMXSL7GnkHPy1azgFhRCzYBzQ8V7NNmJ7yHiN3vwQ9tPShnnhRsSpLWekm7WeBqoaNVq",
  "key39": "4v1QGsZ9K6UZwrcvJWNjQu8SZQZv8DseT11y75PWW4ufB6mh2ktv5KvYnCeJyoequWpN8nSgGSxpeRKGvMF8M8py",
  "key40": "5g8jrroYUezmbdhKtY1AQyNeSmFQoXCNB2Wucg8Qt3dMu9mg39ALhEqCHouhEPHiKeNFaiEwc7w8cQgKgds1MjG6",
  "key41": "3WuqG2Kz42M5wFDanJnRcYVxFSzLxo5uLpatdfR9CYwXE64xkEbLcf4ryWkcEZSHiZrZnzKcrnYn6SpimvAzcXq1",
  "key42": "hu9XnNddzV98CJw9XzmM3qdmDe1qwMXWeCga2FHCRn1dLaZHCArzNAqPCx6gbAaow1pgrb7fAaqdE7B5SXj1anU",
  "key43": "3VnAvWHKH3mP6oF1TXBe9W8SASh9bXfcNudH2KxgT6U2HYfByxzPfvKqqJ5sGoP9vDqFtdqT28F3BFgo6AMPy6FT",
  "key44": "4iXm2WPRmSmFzmrx9A4WSShhAvZKh7vmp78TWvsXiHMLFaCV9c7n853LpiuMTvVUkeVYkr1dQEimf22qMFEreZLx",
  "key45": "42wdWThtobyHCh8vkMVe5Se1KJcaaZ3jsCtPh5JSATJDETSDxfhEXTwAkML7Cg77RgihNxeL3Xdqa78rE6S9sgop",
  "key46": "3uV2WUz8QTHT6iKs3iwPj1KiFXraEWbe2ygvDk5qJWzpEBBywKX12M2hkggyYN2fNyf7fUhAvtCw77avRkTe3tt4",
  "key47": "1Q6EUbXwyrrujYZvszU8jJUr1i6PL9KvjU9gAKNZjByKz7AwsSSo89SFn1MP1XJPYs78Nv2nLpR7fwVPzt5HzQp",
  "key48": "28zf5ETXqTSkF1y2eRsJbcQsT48D7GhQ8jrp72GUdeDQnVuQrTofissugfuno71nRCvdCoGJGQ432tFiHW1PGroo",
  "key49": "5RatFixYUoTkX415mQasQXLc8cpPFsJCasmSt8YVUpm4iz6q3BuoWYoev3AeYbBhcFKPTZpRoFsrx3vPbqP7ynFk"
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
