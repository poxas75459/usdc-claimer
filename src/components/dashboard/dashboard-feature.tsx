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
    "Lo764VGVK218XjEAFNLm214uCTvpsBF7DZ4ZFBCfYLduVbiyGhZHJoXBxwXCS2EbVXiJMHf53RRrK54SXnv9Ppt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JnBfsaRcssM7cz82FFvoXe6hit9bf3RpD9gM8JYpZAW6TidDSCBom6P4Y3s4emLQBzur8i8FZeNhNGasn2jj4t8",
  "key1": "5AULLqbEGWjJuXA5oBJauUF8Da9igE1GEYrQDUA3h3Qh8qP5QVkZU2Q5FGxirnCwBQi273wz3njCsGEJJa9Bpd1i",
  "key2": "3BFZVrZMyx6Xa8sk86rQGjNtob5xfbRnsuQDxEqPhXmUj6s78AyzS9Re7g3YcmR5yWrA5DrxnDisPnqcbWtMUxh2",
  "key3": "2tKbQpEee7byLXScVdHTMpoAACJWk84EqZWNKUmMKJGP6ZXjnCqGneFa3JoSu3n16BJ8i5mHmNM4cgoz4rCkJKkx",
  "key4": "26TjeGQYSKpHCxsTa9wNkXFwpUTMXvsUPDHmopTBrUfnGvZirBjZjmC27oWXBeQ1DFMfKPyLRHJky9vzyeXny2jB",
  "key5": "3QcRxoWeYBihUYDdsXn2MeLhNZxstVWqVaZr68xKFmmu5yh422kJZPe68yaxxPBATG7idhibbYXkPhxgQzxC3GTU",
  "key6": "9yxHf18vt9Kd8nphoUVRwav6441emejQbEqnU1gWJSCSQTPPZiPdKqP3R4dqk2m2GZuTPicJ7e8rzhjRkdxerDB",
  "key7": "5o67Q8cCnbEuyR3kQoMYttLxPKGqneE1yyEmUSPpJske7bENZnwJRVqzk1kvMzSXQWPoiS2NgJXWMdiXvQJh4keS",
  "key8": "MeRyR6PusKnkXkwe4s9hoyuRbAbYagAVqK7mNYCdatXWC4112quUNFRNPehMi6UoAbWdweBL98VTGf1iyh1DCM4",
  "key9": "4fJhMnnm6Y2cb2jUmHHkqJLWHy5JFuTcvFh76mk1je7Rg8mNtCSrhCygF5gQSR6Zc9SrgwfSzhNksmEYD8kXFBUV",
  "key10": "2XUNcBsLVnKeXu3YkG12qnPRSR4XcU4eRppgLn2y8jxp84iNiY1esFJmacx1QWtWRddt5NMDgEpdTcuGuMcu1nbn",
  "key11": "4h8h18JAXLWGGs959bkovtKgcaWC6SuXkwXFdTBvfaTxA7UxQajf8M6qsoicw5yZF96U3U1x8rLV6vcuhKQMYzE2",
  "key12": "HQZRm8pQHrhwzAyHusyHDwDF5sasFNuB5ihuCeYPJXrMcbaoThothKubaToAak3mst3fd2Yr2vARQGozTPEd6Xg",
  "key13": "u9jhXFntg8jqAsVpJJfWDGw5gxDEGiZnJzS9cgCpU17wY7RkhYrCdNQ4keNiMd5S4ftGDa8PyBBynXLuDshexwK",
  "key14": "EQUC9BNQXTvu5GMMYKahsvdkcGvri3DXFxuXT22rWo26T5HHsQiKoLoy3yA26jAMLPyDMWBxFJdvBpWKRL6Bupr",
  "key15": "4VJBe3sgHsuEWzcE3jNy7ctQBKzmt1BEHGirTTtL7PHaHFhtLjuNw4NXn8Mohe6ga8mMRXkSAYfMgKmyWYtDmyrA",
  "key16": "4df1bH7HJk77RUYmugUvpr9WLkAAMy7zSro1HxMHC3CRC6DxaoPm9iiBoWpQqSfMsfR4ez6sjUFLZPFRkLGvj34F",
  "key17": "5nAo5dKdd6DWN6Doodn3L1xSmARDeFSUKevqAPyZKYGYucE82mkrJ4FaxKJDnv5QY1k214SMTusEvsj1px9nhiXQ",
  "key18": "46dyDTnziBdMeRLfC1sqnQpzcjaCWHrEM6bJrsm6nkh1azFxEiWMbgcyewnc6vnZJ55tA36Fyp3fwj5JkUNg8vPB",
  "key19": "C8vwky5RdYWPwMqtaBpztkZEDrRuFXhuWULZBzf9rSnwURjhq5hBS8ufVng7mZEYMZzs7nVz59JUEnYCSs2Q1zQ",
  "key20": "4BHJR9jyheBH56A7Q9tHANt5GSx93KvWdHXfJkEaSpAVKzYibouh9NpmbWuXKj8txaLZAcgnKV1k3UzJM83DAQA8",
  "key21": "2MB89MmunrmzwsbtXJTjc4mJv48vBxVCXcr3Kz3Ng8nJv43d4ZtEs329WCaWuHVkTEauZfsTweGRD31GZQ3QvEb8",
  "key22": "4UpCBqJZrYpwFB4ZAp5YsGZ19j7cqmnE3BBh7wdVBRoFNZNj84XEaQQqrdPaFq3Dm5ivCtvZjpJLuknGHHCfBwqc",
  "key23": "2SpmUyL64tsKvtDtHoarhfce6ZuvJchVPxoAjfyrUN6po676LnjQi1k7asxoHGg6SgeKMyZ7Swa52XJQ6mi7nYke",
  "key24": "2LKnJHCNEesvYSzdzkngce68HhjqAfur5dCHnoY7nZ19tNS9A5X5sve2uDwA7huM8uzPkpv4rrNrkDvPTFsrBQPd",
  "key25": "5nLHVbEBxZ1jAKZYZFR1QzeoYojVP5ggZwdZYb5e6DBosfESNQdHwEGSBP69v2ti6dK4xkwiP4XfxzKEzNgG1vnC",
  "key26": "3SWLP4Q1Tbb4ci4R6fEZCb75gcPTvMtnjJWyWzWi8yFYCi1fPWZn4cxeTa3EMtggYRsSuFaUspQhQsY3PZN9XkBN",
  "key27": "5cgTcfxAdYrHnVDr5Vvz6fmedE6reRcdANaY5XcKWKapF7gQireFsNVKbvhQFTBiwq4EGc7rB8ehh121BM8ApAiw",
  "key28": "2Nftt6aBoQEmeGxNZx9WHKFuyLhtgN4nmmck9s46N7kQCDigD2sK4JjxQkqVtEzyfJHNrLV296MZN5hZgdoegUki",
  "key29": "5bb9n4HKqP2jvN85sdMqGo4bVVsP2N7JjRq1mGMc56QYG8MDSiSe3pcbWAgo9rU9UtpibkQtLPYNRYSUFHxrJ8tm",
  "key30": "2pBr9NQcqTFo3yGZ5TR8ZHo9Hm33Ndamc4Hyi9o2pDqxois1jwo3N93YDjwFEsHzKd7UXB6kryGDcy7LBtQ74nDU",
  "key31": "2uhxxVFbchJLt7hgAt1pJQLh3zC7uXxqxZm8RjGjBPFhnqsVdNWd8YY71waY7bdtcveYPTQVrmGdhmC9ThqipNWe",
  "key32": "3Qs6C8RPLzASC8Lz5xv4HUg2fe2Hb66biL53umNYumWfCo6rgd1aaeVRMfTpAWTUo4gcfoEKmdTsE5dmLcZhXEgk",
  "key33": "3ssmHDGUrzCjv39fC94nNp7ShbywgRFBaJdiMH4zo3jCMx8eFmd8FsnwQ3M5sRMEqEdUUTTB1d5t5szafbmbj1xe",
  "key34": "2rTQS1fQT1JUGzDppEnPdmtfcvMUWPzCEDqUvf74kRpoL7diQt7xs99NMbqniZEUz5g49K2EmEnLHfanT3f9mE8n",
  "key35": "37GXodyTGagbjDZ11WYqSKmD7WhTSyuHq5CpbLJ9FGBco5bwsMipfk5w2mKyswsAJFuHRVNmM9HdXQptdLTe4Wzw",
  "key36": "3vbJkCqbKD4LePMat3dj1gu5N8oHocVomqmEjwpxY1ZQ7XhaeFUFcWFMaKSxeHFPPtjXRAFjJEbyMjcd4Mr9w29p",
  "key37": "65dGanznRbkU6jRVRVwQsLxa2WJSx1a4Nz63XKzChSmASJDR3AsvKEjzUZJexoFmbMd6gqB9DUXVTVWZbrWsP1hy",
  "key38": "4zMyUS63dr3cwkwHB3o3objsruyU4ztB58bA6mcgVewg7ioxKgLmXLezQejg4PY7zcbmQushDPo4CtnnASN1T8ro",
  "key39": "3uZhVfqnrmUpV2BaUimDRN3PDeCSSdnRZNDABCZWUbktwKzdVcEos28j6Vs41DCqhVJevxpQLPtg42opiL9nK3qh"
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
