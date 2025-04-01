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
    "2YhsEZ8BmK5BPajW8mW3Nfebp1weg4QDiNDvCL5Kh7AVwoHSaLbhPNKmXeDJZc4g8eHj4wwv4PtYDxxQrbQLuV4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26zoPkRrN65jEyhKbX9pCS5QgnoiNS4qhXdmatCVc5CVMEkgg2dNPtMwVbsfNCuQsTrmMbKRAj3ahW44Ax1E5xiY",
  "key1": "5H698Wpif2Bu8sKgx4ozJnjZTGwuLW11Qe7ZtGQpgzSzSQRaPkTPBAXy6DVWJkkeqmn7D2RGVqf4P9wPr1ZXxn36",
  "key2": "4andJ3gpqrHG73uRf2ghvg43hsxh3iqKitj5C1u7QQKkx4cDqtj9veEcZnLQmXZ3d3TGGCeoHTuDxxLX6BiyXqUn",
  "key3": "4dUosC4M5w8eCaqVxrg1wVyNiqR3n3wFTCtvKCbA5Jwk2N7d1TPmHNC6qCg9PKqihHMjnJkugNJcKcuZenMjbr36",
  "key4": "4oKNyxqQVCpwxkfM5hLnfW88pKceNxYqVYhsmCjmSM2SXjjzRhHk3KobDyEjTFhacnM4LUeqhVFDkYcUaqSvDFNr",
  "key5": "kwaTRiHFA6ai7XnNKbva97pcy6KHAzwVN75PHTuMnXn4CtdtwceUP93xeuh4fxqDyqmDycp2eMWTf1Uf3KuC7tv",
  "key6": "5A9A2ZQnNEBK2MvGWDANZGVZcHbr2QWonif9cBhVpoTZcV39XunuLGwwpuwT6WuJZ6SoVuQzGvkLEYHKSriuUtGf",
  "key7": "5tyYx23wacGANx4tXa1LRDhFdEDhoPnsdqujBnf7aAXwid58jDGrskJLoWn6fkbDGf2HVQnsuzEzMg1Ys4mhSsg9",
  "key8": "2urN6w3Pgik6Dp4zP8mgN7JoqG1RnPBE3JSRpXwTQfqZDXVBJVgSpEsw3zSp3zJsD6EM3JMJHMjWmgf2w7Z5SxdS",
  "key9": "4TvHKbCA6SP2n6gx4PW7DSt2jBdFLaPZb4HbPYTjfmkWjficCBDXdZqbEkDufiiUiRZMGKQn2pGC7cZGhaLSJNgD",
  "key10": "4QeVJmVLSy42BE8VfMzf2yE6Vv9pTvdTUg81DkPeFU8QuRrg3CmJbrgXdNiupbmfDef2brtt5gVZcGdpSM7h5Tn2",
  "key11": "dJVW1h5aSmGWnYrARLbPKaFau4cqxyhbAHS4F86Bbhrs9MHYPmGtNRWcgjNV9DpjrMVX7QoM6wSEiHk43WNPvJL",
  "key12": "Yw4DED7AVd3je1vBx9UJD88JKr49AbBanQJs9h1HqKpGTw8Ff3Ea2Sj7MpCMXBhTmEU7Zor2FrGRrPsJPkh1Kxj",
  "key13": "2quNTnX6X5MaWEzftVvy4eWN1APeh4dsgE2fdcP8CpeqBvaNhiPoc2qqex5qmq6gWwdwLPnxtZLyAMfq6g9h8RMk",
  "key14": "3brZ2446LGWUznW9jYG9HCeBU2XAwmH5RyeqsbKo1mNVkAqLnefAugyWuiNkntA1KVraXcmBeASxw2mL3b94TvEg",
  "key15": "2BMECC7eRenrVT1HYssfaF68ecqxWJnPphMZjkURExoCqP1xHKjv3jr33N7sp7B2soMJKAkr4TveV8E9m1PaMs21",
  "key16": "U2akrP5rbZKdjWDSkW1iRYKgLSwP9KabpFHWTUNxUXiPnJEovewq671hG6fnocHCgJhycL8tkKTDyuDTpS115Ke",
  "key17": "3yGkjDfPg3zpex2pqc4pohFEsoGE3zxFQhtxq3hVWXktc4JfxDWzgTsd1ZFcRJJpndwFTooV9QkyzzSzGiEkxzAC",
  "key18": "3BDcGNJyGLPSCBXnop98DyHDFmKnBhoZ8egqEQhy6MFUDjmJWMTHaVDCwweqiBDqfR8beJ6Xy4x1WEgnYQJXGjV7",
  "key19": "48W7yEmsHWPA8TRBwmwUUxcih4yJghDXTfXcVkrTMf3iz5QSV9WJckgFRWdWw5DgUACvokRuKdAoUy68TGkKkYnA",
  "key20": "zLQA6BoLZTVGTDtGFo9ePVVEDgQDvUL9Qt81XzuqyFsRUykRKabemnpw598V4SCPjf1Xwemxwgvc1vsvXKZ6u28",
  "key21": "4mVw38xCFTztxCATGC9VQ1at1gsf5YFcoFdA7ZrCfGh68KUQQ983oor6UetV6bDNgRTe45V6gYS3X7UH2ahmQxCb",
  "key22": "DrbW5EqqVSbHRSRGbQZiVEptYuzmqKAD3yh9DnD9PNuxuHhsiNvhW3bjJUkSXU1eXi9BJD4ZKov55AaNMHwU3g6",
  "key23": "WV7FFG6JRjdKUuYgMfL2osBeb4Jx6PuXLXYizcSPoNrNGEmwbNmSCmh1BUbpZm4CfSENzGogKFGoNfs3YRU895t",
  "key24": "fJxJALa5YqKvhS6kPJW2v7TWLpA6sM9Qv8pYdJuyfEx2xQJ2jU9S5Ks6BM7jmv2sKLcmHBkm2eXwB3TpG1WcAov",
  "key25": "4mX8QV8V85fHxC7H8bnQH7A5Tzmo5XNL27e1hx6wk4VW5jNKXSJctvJjvRPpyDSLCrSypUs39xdxgsouS1MNHSAk",
  "key26": "Hk1BjRaLffuhWXQiGwKe6U76pg6MKFGSad6ZJPnLu1NQHVnzGmS7A2AG3Pmsn8Uighh4p8p4XLtCE8gkFFjx6k2",
  "key27": "4LqEkVUU7ssZij9HwZXrq9su2ifpCJ6CHxfGmgoqCeNyGZptsFy5rKwRrrffjW1ShEQ39dw5dUEpm3qjgEG71NTk",
  "key28": "UnXdMDvfpNUcqoQtwr2u7zFiuE2NDftYG2nXFkeZjHksXmC67WpZi8dYpQdXXVkEwnt85YmnPCS5KU9EMGRjYkc",
  "key29": "4rGeFzid8kuU4uJjxK6yD3i9dJZJC6qfrN3qDCfFv1ScnED4nZ2M71dRafQ8vuQU3tUYZ4N1Tqorsvzqscc4a6ad",
  "key30": "3sYkTB1Ezfdaxi7pMNrUPoc17iPqPd4tcTqGF5KBba5HtgmaBJ8QjuYCJh4Nw3wyBz7vhZQeffyarjstkE19o1Tv",
  "key31": "JfhuKyZA1dDTYVezRSsCnaj4cfLEi47G7J3t6cZQ9bMTEXYN3nk4aey2d8mELaL9TNyyVRBb137mMbvzX37io37",
  "key32": "4piF4GqfXn1QPFVsoUeac52NVgNxaJfcc5ViBqtGuA24v4gPxgjFFDnX8LfYB1rJvoo7S7yz7ayhBLACQENSVT2R",
  "key33": "3XvtKipWjJhi17TCddite76aSHznL854SfTXDVSSjw65tHea4sXUbGKZkJ64H6u8QAezUk1qFE2Cagu2fDQtJLRX",
  "key34": "Hpn4c65KMxNDkhsCD8bNUa5uLpxzs6ETXpPTgWVwbXMtNbHd7rQjqZDeoeYshxpZq6K6uVuqn6miH8Vu1aZYMhs",
  "key35": "vQuhn3dJuhGKRRre1XX9xZ56rEQb1YpMHsExXrp6tY3Kdk5V9YZcRSnpNcrC2uPsgaphiq2yZKQZzbLNqd829zo",
  "key36": "2XuFWhjxJmYCeDTKPwrN3xWKUeYvcNoeCJKSR43UpiWM7Mp1c6zoRHPUdhAjDC3pGgKJH4YF5JXoCfLwuSAhiKaw",
  "key37": "3znC6HL9dr21Tzu932bQnvHkUrr9T1aMAtm4x9a5b5a6zMkBso4vkyVJTRZhjzCpuK7fFghrCtmWKpQ9N1mNnizy",
  "key38": "HA9Euud9zPVFo3mvnZqLN8b9vGMQum8fdd6Bk4YAjmg3wXPQyJwtuFKGSUDkBzgt4rkA4qRgtDwGsaW8JRY97in",
  "key39": "4sK9GTaTcywA2zPqLgj2RG66XmtYuYzZWKHurj84m721vHhmZMfLzceRWKjgdx7fGuxuSccZwZy2Qq75cp3mPTeQ",
  "key40": "avRoWjjGYfYMwGNXEFGJhikqKhy68Kw6QLEqJgcxKbyzMm7B8N3cwT6bU497GPch19J8kNx93aQivsPKZB16i1E"
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
