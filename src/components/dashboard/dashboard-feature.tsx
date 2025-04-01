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
    "5kqtQqZd5maRTHsyMECwvXRPsTwgbhp2JetGLoUSCGVWEVqqwTEhraM8WWGS4XWcfMEm3hrEGiwuyPaVJ5hra3os"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dUzJbwwFuox27L2TLSJSeahekjMfmXobST1e1ZyNiPrjPe9Kg59S78oJ5R8mR5VJuWJCxpr4UjN3LXpNWvXWyJx",
  "key1": "54gebx7hek3ZTdoAaVMpJprBhFnwzvFTvYhwpeGsZfYmfLmZuMaoafe4xj2Zoycd3r7BSSNhYjcaaBgYeoM5aPZj",
  "key2": "5d24DahR1UkW9G72287RpdWJaQ5D3TTuQdhNP7rN4A5NcWWtVkkjgY7GqXn5YPmmgHkKzJ13FBykcSVJUB5LpFB6",
  "key3": "tEbPaFham83VUQtdkG1edSrzUSsnBdhkFYfPCZqmX5iTdxQ6ur5xtU6muQnAmvvahyNQ9iDYHCynKDenNox1Tog",
  "key4": "5MPET5doqjGqy6jbiXz4Z36VE81RKoHcjotu97kqToQFcE4AuA5TkGTTUBtadTbEdkRTtw3ambiDJh1VdcsiydsC",
  "key5": "4JhpV2SWiQuxqQNvxhu3wX9uTPX2vFQkvYskJkoQChFm3NnBWKLCcediJxuNY7rGmd8UkNwNcmfB8EVC3e9PneEu",
  "key6": "2xApWm4KxeoxG6x2VFyh34XLVPderZxsGmYLpjFYBowtVnf9HDe8bTdL4bA9uV1sfYqS5QBL5XkxJqgM687hC7RX",
  "key7": "26q16pxSHpGxH9e1p32yGBUUQGadwavb6gGC6MYCfh4iJHf7QaJ86AS6wNyUmdbtGoeCVbEbAhNbnThHvrF9ws3V",
  "key8": "o3gdgpDpAyinL5VTRdxKcXUmLUGFfApZDuNBibLcuGH2sHs7koa7xZmWUbQ8KwFKqJSp8U7YYrDJdvxq3E9khot",
  "key9": "i3FfmYCLVDttcFoQx8quPdrW8oig8AUGe38qssyaH1G7VFvfHwdjaFuVzfoX1SmcWx9EXnRvdyGvqGgaKTEgBUF",
  "key10": "494MZSzfuU8bkP5cZrieHVvEokgp2YLhH4vLyZ7rboR7PsFhpRFK2Q56KW7jfDBwbnh156eoKgFrUV36KbByv3U4",
  "key11": "3oH5H3hRpuXj6m17sEFJWk91NqgYbUZqtKSH1Em2TbAD23aeW7tVvN65jJXr911neeifa9rJBLfYPH9JijaSBUNC",
  "key12": "4CA3zUX1t1L3wdoeUWxvapiVyrZo1JiV2jroeASvuVxt66sU6UQMoWmqaSUZdm7nbwcap5xnf1bKb9LQZVxuiAui",
  "key13": "3nb6FRpTkq1D7FJPDn83YEP3em96mjZvKr7qUXx2fZMHK87rMQq8N5rPkKiMZh7UNCYtB7qPVT4DDDQv3pWFJNRx",
  "key14": "3ektyZa9GBHjALPjZ4Cmy8rYKtwYRQy6ciMgF58fczVtM7kTtiuJtwPMD3Wfsa2i9iDBvgPRh4oEaMYQ6oqHmuUy",
  "key15": "EbrKirVew8K863gMmH7UEK5HHEUgVKRr1VQM7q4TYHabkftMTDZ5oonVP4vh9w8rxxrtJDynB4cJCNNArFH3a6e",
  "key16": "5s3K3eXKf261HmpdVtDsZ52t9Ght11spd1PkN9hLdDrNWZJzuvDLkHP9v2zyKNQLtv2fyawGH3cbzrhxsZWgSTtX",
  "key17": "2am6U51zv9hV8YwFNSkaxBXueLxH7Za1ds5dLgDjxj2Zo2TG5GbW7ivXcZqM1k4heBw1q8Xkuod3SdEFnd33DxQG",
  "key18": "3gvUXtWjfuTiCiCNPpMQ5GSixqge4vK2knZ3zxFingNeBVt3q36CRVeqU36CwXhCtoTiEAZD5QnBLQNGyL7rumeY",
  "key19": "3LFVL1utUVAJcWwreXn4X2g17ZnTwfGcvxnkZU2zoAhf9fTvb1zo7cmJXV5RK6Nih42j1C7gcpMVrFmSYVgGZAqh",
  "key20": "L7xXY5WqHAuPLZynT3UMpgbtAiFMtZGK9nVtftUErcFyLB16dRH8Q3gQnWkX5nhoaQdACcpRKh9gwiMsZzWRuJK",
  "key21": "38Sd27ELwiBLsB4Je3QrDazXrgtFYMx1zs6pLtBQ6D8r7bgw2mfxU77S1H7Pe5WyBcJVzMkdwVzvYRdD9HBZCjkn",
  "key22": "63KFkkJsnDwx84tnwjo1b3acQjUDnuRB8ggQ17kKt8JkYKqZCB8NRKh1dZtSLRe96FDucCsJ6G1hiq7WE9vfHhyX",
  "key23": "2sXjp1Dc8Zrvtq6ktpRHUHtrdbWnBMGhEazfZY7xZ8szgaAajfTMsbjwduy28SmHXMBJmbToYK1UaQrXbBrarQCk",
  "key24": "tBLJ7fJBwSGbQ7GVVVM4v8Wn8RJKxNdLG9ahfmXHRJB4ZbEKXRrqrL7wfodRPRNXefwVMxdXWotztxpRxnogGC5",
  "key25": "5gtsT1sTUficBHeJtqVUjnB2rm77wadw5DNYwwRdrq2mnkZJQuFph8Fmyf32oG9vJgLaSkqTGy9dwZfiYykMtWAk",
  "key26": "4bByG3a4kN4stbivCpHAiJRdYWKCDcCHfYe1SyVD6ZZkxCegP88dQg9i1KJ8ZQ6nvEKXNpnLN9mLLD7kA4P8Asdz",
  "key27": "2xdWFCGM4NkeZ3F64NzDwPzjoFexwFZyLQpeeN2YKnMvKBnWYt5r1EqFeKSN1jEB8DoujoNFoBHYtJ6UkzDdrYQq",
  "key28": "2mBa6PRvtwv5TD1BXxLd4XSTuwVzZMN9RRB22BPM1Z3e4mmtxJpWDZMuLb5xEcHVqzXZsxA2GbHbnXjK7w6K6Phc",
  "key29": "3m8pSxDRqTT5h3desVE2Kn5QUzvVh3V5LE1cHmYHhYBWzT7j8KhGjLw7RKTvBmXYNbyazK6ZbmsJFzGK3sL2Rzto",
  "key30": "4u8P7ex7W2G96M88RJ3Q2fJEtrjxXuMa3c82Lony6EbE2kuiaBXNLxaWwjYgP9jiA1BAoAAndymRkVksDE3icBWc",
  "key31": "21Jd52rwirwJbobg6CNigJ5ZWTCqf5AGJckbovKEt2DKafqDt8b4x2BJPc1vZMmzEn4gFQxPpEv75UnsvbhiFwLY",
  "key32": "2BTzT2D1EBn2BSHausoVowbJWkoXE9kgQZCnaPdR8fyiaJ1Kp1P2fYVobXV3JULSUAvFS9j5tueajfP5hKC6pWHJ",
  "key33": "2F3LmdahwHatrSNAUippY3noov19GNSibdRTw7BS8WaKwXiukfNjCyKtwKDALeYRpya5rCThs9X31EbjUd4zGLce",
  "key34": "3Ji1y7SSxd3ytB5Ltz49xwqE14vNg1JEcnmo5TnUmE7mAeLnHW45sDCeJoC6bpJ72P9f7amPQuRBcNG3QHGzwwCD",
  "key35": "2KNCR8ewk3hQNTR28pXjBryR2kChavGyqFV5bSFLXAeypqCCmksygoDk4rgkZcvrQG5MWVxj72JqV9frdLc6ampQ",
  "key36": "4nm18XASYMcKszf62hPrUc4DXRUJQhPwMWQQgbcxDoJh8RNLzuDAzWLQupyjNjZNTNwUiQL9SRCCwT6SunEDcHNz",
  "key37": "5mxSm6V26D2AVdi9uba7hMEJ6QfWyzWMVHCcCfTsNwzQ6Z8oLonbJ448UdxQgDq9w3qj8BnFWWPTJgYyQaKrzewt",
  "key38": "B4AsjcvoCqZQmWZ6CwZytUNHUBo11UZD9yujKViW9aeXNbJBobDeTyv7yiqzfAjuDpP2H4Sqmrxo3ftzPmD1RHZ",
  "key39": "3jUw54AkGzwhP7fo2s4Kn3duYnM62ZsgnFKYztY8V184TcExzZkyuyMS87aR7r5y4akSgA9hYmeRbHhnvnWsF93",
  "key40": "61ijnLgkfntpvJzkwnNaWeoG1BHkc3SV3d7LcNY2HaNZvy4WeKs748XfucTsiGHA5zHRp3tW4kMa64pg5vZkZHiZ",
  "key41": "32JDPZnqf5zzL7PzxqASjmnf6KPXZsmxxAZVhULwnZbQwcPLnQiFj1KVPtzURrDvJVf26ruDoDniRCHHirG9kNGx",
  "key42": "3QYY4t9eWJYD9H4mgQEGab93i1Gvn18Np2jFbiszUSEfqkX9KPMtpoSae53q3NpfF46X4GHQukBDuRTY2A5yLQno",
  "key43": "5ynv4k8CsUq8CBsdQYK25xEUYTXXHyoMK56jEKqKxzn6MJvz2Qyjh82BUzaNddRr5hzsveiorq7f86hHJxrf6iQL",
  "key44": "3cxKWac1TubtiatQXai5XqqYrufD9S8bpuXwzYCyYe2yTopu4QNDycJK54asWyLRf3mSw7mtG8oywgscgYz1Y5H2"
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
