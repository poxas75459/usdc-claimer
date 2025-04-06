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
    "acHcy7LttwWGJajU44d6xqF29dfm5KJkTBrMAuYGvbVaQcb3TTzuzkBsPNJb33vdPLmmEjf6dDn1h6BgUfXMtrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zJgf65eaK4UrGoCaq6kiC16HLnKhFUrP3XjqJhsiapN3rsqcDb74DCCPQDiufNpzjVdbmma3Fn8rF7n2UHm8bXV",
  "key1": "2xveBpwvhGb6nd8nCZBgmKpG2Nc4xpTPtuf6EkG5WCwdpzBWYfFUgV6mo9nJXan3rzgmJ6YrJLVFpHRzPDXiAtzz",
  "key2": "3GfHo85zYbSBvS1T8EKgL4ypqaPmnWFzbBH2E24tCYxPpcqmQTojhvREGhp5JN6HEE9rqxAc4k46tabydZs2covm",
  "key3": "4WNAYErhxwB6nSZZo7RMHrYbCozrZEouSWr7u6zfHwK8h4CCYdR4TFysLwk3wyx5UDiddcKQJBoV6cs8Aihp2sqQ",
  "key4": "2M9QqNw32n5JgFRb1ctb17cBYxN6VMcw3wmfR95qR6iiYHrsFYPdfuDPaUWf6R2JhQT3tizhsAsjfFn9pBY4bqw8",
  "key5": "2EF3WnDT1L7uXKEKgPztwn6VQ821G45L3npTbnRRDSnFabZstcBj2D7YWWWFPnXKJX1S97ajM9PykwnSyAryHh8y",
  "key6": "EK7yALrW14XygCmgAiZXxgkBJhwSBamdCqsGhB88GZ3juZLyemizkFmNB2QcJWT8pLySsfBZa3e4Ujc6SDLfjbi",
  "key7": "49MxZpwpB3jugtrpAY7Kmr5RYQ9Tj1u8ZH9eQuHzB3PUrcpRnXYdyHDrKGyeFJRrY3RYwwJePVrbkRCwkwdiLEzM",
  "key8": "2Q5kX7MHJBR43XdZFiUGojZPtdgTP1XAicAiA76VLPQgK4fTqgqq2xhLbyEJ2bdvCjGRoNTm9sXJw33DdpCNLmfG",
  "key9": "57kMWS7KU19Mrmow9KkSvvAxWLSzCJCtXf45aeJNKVqNH1JHRwX4DL3Vzshi3o1TdvCEFZDiUeY2LHaNwenfE3Lk",
  "key10": "5RW7Sic4mKKSwv7GdZ2Cp8c3J87wRwvFGYjLwDssYPKnnzeidYAZxKioL713NTT5RKLti4ikcu35ycUudRkFefGk",
  "key11": "62BDUJfP8C1bxjjYsW1fiqfCbCiy6RcSALexSQwUMsg48ucu24ip6i6ibr3j41Q6mTFwyQdTBGF7iK9dumayroTj",
  "key12": "XLPMYkdSsW8sM7UzircG3CKDpD1WDertcUeY6W9C7hmwXQre1AVH1nuV6Vb5zrnju5UPDWmWDsnR1LqQyGTJZbi",
  "key13": "5v8UAgzHvkFa9QgqgFUcYXkkkHoBe2zcYPaDUa1jzhy71VxDdcqZ3qF7eqrTB3GofYZ7AdT1WJL2oXX2gi694Y8D",
  "key14": "2cSogeuRZtRRBsRbhXpYAcVf3g8A73WeQD1A9vqvvwHw3syRkotfbXtiHEC6Lj1TxpYv79Lze6fEVY7YuTQc5h1k",
  "key15": "29bWeckUzSJQC4vYbWq7CJwCdbY9pjybLL2bft8LmFFWV7GSQfLHCBX9yM2mCW3iSY3bNTSBkRYKBoJy8TjaipQK",
  "key16": "5buHueKMg884MTHNpeE8dNz3amDiSSeNeXrCUTy6H6epqgeES7ffX8UkF1G7JBTtYh9fdREK3wF8Ys9EB4d4e761",
  "key17": "2dynLBc7E5sjxStYTPs3CGe81wdBFiABB8xm97ButxZJAuTpbfh51G7zW19UbcyUvQzF3G28BZkmKLHWG1YneJGs",
  "key18": "4gWk95VvZFyWtgC3BcxwnhVpEKSpTJq8yXUMcFsDDKfbVy73fCAVRKkKZ8qiPXwyLffKqJKoK12RhTEgobeFLKJY",
  "key19": "3Rw58SBQZCqrEsWaP9VCf8ZNbtmtSXSdtcKZEEW7UBUkUtAfvDTsYvy3cTkiE4qmdRsM3d3YAEeGBUCoBXzXbpjg",
  "key20": "5i3HqJdvPiov9CpsqnSizdbtLxFaUFiZqVGYneNYUih6d1zYYVpcbNg5z2eTDxYnG75MsoEzno8qyaFWA7EE39ne",
  "key21": "64B4AHzzWN8FmEeVzwJyuXoGRmV4N4Z6voY5ZRh7YJy1PfLQwsYAf6PVJndhr5xnor3nFZ8kXVMiYMMWCnBvLeK5",
  "key22": "5W3bTVaQfSxKFJK2L3zHko4Z5XvDv55sM4uWaGp9rmGdqHzN2zNaMYJVpVvsxWcXo63LVGGMkQvMUPrD3Zn3VAqb",
  "key23": "3Ak8Azr4qNxFjJXWcZU98d41WEMJhXfX47uzH5hSRXV5QKk4hA8a4bxtYVwUrUX6tESzKXnKYdr6Jfiap9VJfJ6q",
  "key24": "2wmvP1BmsYGnZ7tkdseqRuKuTXc8pfpQ3SHRbriL1rX387JrpZNh2W8CHkBUz5RLx2ZustgEtLheKBJ4aJ4GdA7B",
  "key25": "5xQLsCd4s67M7bKT467NJPutz5ddwfsAi5bS6Ufmexjx8P9EpdCFUGtxE5YKf4gQXoDMXTd16ebPM91uuj6sF1B",
  "key26": "RvopgzFF3AY2TB3MLKxzbKUWobnSArZjwdXnR35NcKgpAVkk5BwjQaiSoy7bKydA1oaiUv9SUdmqYGkXvKbMBCX",
  "key27": "58znGHdLkBuaoevTQLHNsibLDAiZxxPzQAAdkJ5bUBZeMXp9Kn8oLyRpTA1XeAtX3RsjqW6wFSxsT4FoKtcdr2bW",
  "key28": "3L6cM9Kjo4BB6G2hwc9GB7LWXG3TvMAtb6QzvvghryK1YYUjUgiSeu58pEBuN2ySmfNzkWkn5LVBYhRrHdmLD5LX",
  "key29": "2LmwwBeK2NC7vh7mSY8B9U2wAwcoXVgpG7aG6RF8tGofbmDHQg7v9QYPaGirv7VCor9SctddQ6DmMcAEtZPjctn6",
  "key30": "2wjs58ESFhubVHZwrBLe9FqKYbBtFbck8Gp2oVxfh4Vb88nuaK9DYSP2hnRHFHqFgjrWhjMnUoHqLmJqiA3cfSFp",
  "key31": "232NydVF3ZaccKqVEfXXSJ5GphmSgYFbT9rV3nqMnkhn51tMAAg6QFhaAPBCPLDFfrRqSpnfPUYkyP6oNERwJeo1",
  "key32": "MhX7xR8BSUMwTf17rBanUBh1cC2Q9fHXp3pUaJo1KRerWeXNa1cYgNQWZrRF6QVcCMdKRGCtBgNpoCXtWkHNnTo",
  "key33": "31YPkiixVW7i6Qq54fpacNCU2DWtX1XaKUgQAn4p3aKiiM3wFPqniEJD4c9DbRNN2mSZr5u18QrutxzSwkZKSVVL",
  "key34": "2XvVfCiXb1JJe25ayEDrmPVXQThUmNJxrd7rMKs2Cjja8ft7bkoeLPtdbmnPWVNtmKiPVEjZ1UaL5ymH7eWUM4ym",
  "key35": "5ANUEvtCVPfuzuEg1SDG7Gu4YMNsqmgi6nC8eR2q7QxijaZQ5tj1aChXEsxQLEPuNM1pPKLmRHommwyi9L62iMBV",
  "key36": "66UVyqf8pvYPKsGYttLXm54fHQotom32rHLzo6UAEtno7ocaa1gBonajTeEwS9nHHqsyA3vJybKYoUtsztevDAMV",
  "key37": "4LNjJediTUa7iyqYJekWLuRvZdevKb55DCdxU3kdKmemEGqDbLCYYTCePB8JsmhNK5cnkDxcztp9H4U99a424bGk",
  "key38": "4V1f9BgUQk5449QYK5EW1QSSXtBCHng9S1CquaxGFLZ74L67YkQG9vBN9CEv5zLqVgLHbPMP73pNnYsa9hvEhu8g",
  "key39": "2d2PKQ33AQMo6ytj7A17pRzLW2DT7GkGGzqDbatz3QPioHJBvFtoYc9RmCZpbqv8V2KiYHbgzYK5TUtYHxgUXGGV",
  "key40": "5JX9MJwNVF1Aj4gTbw1mUvwBmDfwRNA2VqeEeDNZwwsMWYSnkGarsrXkkNZZ1xHYAqDsWXArnmKEVjbqJA1x8sGF",
  "key41": "8SfpeMWN162D5WNnmhLzmC5QEkMswFuvbp37KcuBbZJcsKoAa7JMbdtMv45Wad5enmLEGJgZZcXV47V9TnNeu6u",
  "key42": "Qn9YP5Qz8duC7A22ocqNvCsE2DH21UKx4KZXChBBcgNcHc6pZ3B79js4iovxm4yWZ8UfyR354VncJTGrPuHdDos",
  "key43": "5XrT3hj3AMAdAhyHUw8StswE277kQSBufCDHuPxNG1MLrMe1duDdAAStiJtibQWAC5cN2DNPEpKRjVRx1ifAfCfr",
  "key44": "2ZoctxPBpLH2eLtaBqyC6hCzTwmY1VyuTTQBZRrHxtnB9uWyR5iPvpPYkBobEGz4Ndm22Lq5RuMWG8VXMEdUtpNu",
  "key45": "QqEBLddbAgRkrt9sJo3Ku9F7PaDibkzKbmcBWhrUzPZw5VoLEJb51WxCygRJfhFGrGtGZDqYTSkKcLhd6TJBYdG",
  "key46": "2LefLyRuB3zrHDpE7f9L1CK9LLSDsYUhJaL4rqdZnRTuDVSSNvGvZ5TJScZnVsQcEgHVD8Kr4cHnVmrMQE2KKXBa"
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
