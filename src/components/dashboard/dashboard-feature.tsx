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
    "2oKihGRHnt1UKuDwHAuiNEnYLiMdpQ3Kk3beocQm9dnT4ksM6JoxSeRWyg5wtiscTCHczckxukvfHicU55LRrFex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t4sLyk9JYXn1tneaUMwKHNf3pimFhU7E3g2m7soXCAiTyuwCAxvLeLUmrMLc2pD4yDZMCKbTmw9LBgfD4txUh2p",
  "key1": "4m1ki8EL1WbnymMXmxfUY5kjPEQ2fwnsEDU4w42y2fZsjezR52kwXxEAYpGGfdkmP381x64PuLLkpPMHLLHES7n5",
  "key2": "21LxZqpEHU31qQFBZvqocFSx6YMKTMJ98C2PgrD7xNZSs47Jw3kTMkWjmV2Ecjiy3nH1nqW2cC8jPWa8zrtnwGNV",
  "key3": "673QLMW7sunPPRbVQsTbVJTtJVyJB8RANAKX2xb9kCKpE1rvMdR9xCXPKCDPX3e3p2ZfTyLzaDBaVD29PMzipXzf",
  "key4": "5BMQab48TUV5mBexstJfeSaKJU97mTMnVzj8JUZDfXCzv2wh3NktuaCuDtcEKp3DCQpkGgieY2KjAeSR5PbNL3nx",
  "key5": "cmA2tmC57zhazXTavPg7ouVY9vmNQkHnBAz5acdomX5mHq5gAUgCntcro9ikZuXHeYQBv4ySZy7631mWRUnjr8g",
  "key6": "3XTR53S7d8w7owKrMRYzwzD9Xx41vhZZKQJWeMCkTLq3VMcqN7bzmr6PPS6PDH2cy6XF1KZYhLoRwVQygVYkNuDT",
  "key7": "5tzxbRrguNTLQxf7fcRtRmGFDAbQdiNSiNFYHNdgdQ1bBGmh9NddsU637uXPJkynioHL78tHboa9qo8gvyWY57iw",
  "key8": "9bLsyzS4GDrGhhwpCouipecAMkAHwPsv18hWdwas8zW59HvWzHKdZDvaWV2dGEMkfcME4hNTqU4q3QjYdBHdHQq",
  "key9": "4D3U8hPWpQvAEzcd46ojsR3WTSbfpy6rzNkpoRQ65J2AiyC8x5MQLzZfF3Zg7sKX7e7CdcUHM3XTjxtU4d5jf8LY",
  "key10": "4QSGKNYNgjsGGPNjZEaGJhkA55SDhQEqSNrAh6WyFDUwrMG2h1WNLfSN7VTo8ET841ZnjSGKPaedZLChS1qaGjmU",
  "key11": "XziJuXdYPKXqeduugUB1eGnBZi7Dbt76d5MgHUMACPdiWeYYbDFemy6TG1W89QDCfYUEYNCT5BaHnxTN3CqmvgW",
  "key12": "2PtrF1vR5Afh7hyYGoUDV4hRb5nqyASnZKRfRnPYPXZBvZTzekKiuwV1wqkTYBXriQ7LembiC99pHZTg3GES7FcA",
  "key13": "22nQuaFunmUiwS31pqvhhDozhVsDWFwFNphsX7wvtKjGAhEUFfPhURUJhUxrmvhTRQJgq1oYr4mHp2kdgsfjMSAt",
  "key14": "4ggYzVb6sDDpxZJddjSGwmFyiWAr5NQwuXuouRbmuCQTRAt7hBFiQWx8MtE3Me7KbDEWVEHJd97TBAjYNudKdKLV",
  "key15": "5xxKrzjGqUDhXtattTav2atkjeHt4HrUYjWJghXEV6jRiGFN9WNKvRmqxeqffgUUmr3SGzwae6SDWakKBQrZEzp1",
  "key16": "3yR7PWyuS6CEoz6DxBwTE7YnQqaYCGwZZ48Ri3UZQRYYzGiph75zTquM6edaZfyGAw8CNykncR3KF3sP2QFg5iv5",
  "key17": "syih5gbVd5bomxf715BcLF8g8RkLwmuNEVRc3txps6m1SXd7RQCoi8cKN51zz9ZSwJAPe1AqqLdtoRhwdavwdc8",
  "key18": "4JhRsjAaRL2FnfGakNc68PDiXRLaCZ2Rn3BfoCc6aKwZ9QGXxxevdjWyNCN2QPwgfAMgK2ER384E4NJM96DHt9Vv",
  "key19": "2yme5Mum4V4dKeKrE6H3YLjmjbxPdnactE3C1g9rdx27offx5XKh72HG2BU1k1UnNCF7N2CdTsqyKwYTNADB7Qae",
  "key20": "3gQZ5s2pEGby4v8rWkMQqgQkfPncTKdYaC7iqNNWwzsFsKkdvFVs5pqfjprk6eY3W3yrLDVceJyA3yHjjHVBhwP",
  "key21": "2tGWnxAzJreSXiRYSVMRjfTFHEBJ8Y9aReREUi2sWchbgaBjrP1TWDnuNXbdt6VUZ2kFCP5UAg1vvJTPE3v8Rpu2",
  "key22": "42SWR2wVDw5CSVUG6ixHP14Gy38AEwjWXVajmfhh8er2d11gLGrMRBEaQCSpzDhP7JaKsru9TVBHJicDQeaWyDUj",
  "key23": "34LaD8oqBYFkyL3h9rzCbqkjFK4xaCJeiCLRRMQxS1NzNC7TKB7xvLgWii42jHpkZpPJNvMYEXTokAVY8NW8NWeu",
  "key24": "3xf3Mhm9zqtzivEp5jb3ccc8BiKEUe9Kzkqbxx49FrNQBwSbmYgCMAAfjfkGyxqKWsqFF9xYp63saMUHWq53uvFY",
  "key25": "2i6iQ28iQ4MzyyBir11gSJFq3EVqEKmrtQm21CoMP34k4mxnFtqgZohCwrh2Lw8TNh3oUde9SJk4hG5A85nLW15m",
  "key26": "7FxNtfFg3coDm4QBh4owAaGRTBUns6SmxpFKpTf6HDjxczoHLKzX2RbVdqbKkzq5yW8GGnVVJjzQHUUvo2QdteW",
  "key27": "2aq8mhtfwSskdw4xJ2xnnU3poGerMn4Qcgi6KEWf6FdqB7iukxUj9Bf5rRiUh9tpfMqfwmuwBnNCXJDHPMQZ48Qf",
  "key28": "4p5brKb7utwApsMQhCtnHEHPoccWtuwrkMxS7yhguvYq5Ut5dsrYNQvxTseDAAfRzrYEhmGGVN8hC2WGUqiCyuK",
  "key29": "3mJMj488uFWhuv2hkDbH7iknC4mz29fnRKqhkMJLL1LqgqS6qZfB95Wsi6gsNaHFacjZSQzsDJErw8VjgNwiJuSb",
  "key30": "2ZdzRwQhneqHXeMXsGy4FTjKoKRSdZjXCCCGgZDXj4cBu9gSQfj1uu9JMm332fm62CrYzNPL1dmuXppAPu8ACN5j",
  "key31": "4crDUDPVzfVjpxrC6SAz8CpnJxs4FZ3TcZr2KWgNvfufy5RDH9WxigrdTzA6wLk5V6YjZKud7wbmPt7nTReousnL",
  "key32": "5yXX76MaRziavnqXcERJbjdxvFZYKoAaqp3voUC2szCJ7NgEsg4y3zLnLQpmfxB21uwnJQmC215s1n38Lh9d2oua",
  "key33": "mwzJNx4RkngdGAZqccfx98jMXZYYoyFKjeRqUEBYviH995XhvKWwWyimgsNpTQJwaEVxfnQ2p6wJY1W3xGcet8M",
  "key34": "4mHXjXQ9JkEkf9ADKq762H2z5RDWuL6ApMUMQoLBHayV77nHBzuz6wVqG2rxVHmSkrhK7usnnKw9Y2pKDvvabHWf",
  "key35": "2g41Ex1uo2EZfCv5rePYTrWA2nAsXzqTmieX5adyPSCQdNvGc8tkYLXRWKWWUPhmgykpJrTuQUZds3vtS4NxEWh6",
  "key36": "3Fp8RgJYJhG9ZDkmRZiKKsGAFooN2eZnRJx9XXd8tKwEzbJfheXfJxjb2EfxjDVuT4deU3XVqMJv5ezGVaKMzsW1",
  "key37": "5rUkrXftddiXsmgsYUJ7xhKGox6GLWmo6FL5qtDymzjLfmVvFt1cHkBn3WFdUpXVD24hiQyuBqQyfzq7cjopoAFU",
  "key38": "u7xVd7GsJxi6xR6w8EXEanfCy7TCfsd5ptCCfAZhMfEXyKsAwtKFRy9oEoU76GdQj44imSZfBj4Ygc3Qfxxwmsu",
  "key39": "4bToDYkUCHayB8MChR864XYqCaf4LD7HRsmtGGtCvR3jdNDyrG4dEmNQBTXtkaDaHtY7n9UTx3mqW4wGT33vYJHs"
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
