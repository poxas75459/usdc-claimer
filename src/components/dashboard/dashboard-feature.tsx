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
    "5SQnPmZCup7pGwouiM3RyJGv3vTseXTUf5SzoKKEZ2buFmob3YCRyfKNPYJcGFbM7xuDMVnUk6Kx54SWbZiZqJAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eAG3ti4umRTxSYvfiggNakFWmH1eoqVwnAPP283fgDRy7BS5e4ugYRwvoSxZjEu4WRbgdWe4i17jeAQfT3HzDqr",
  "key1": "4sh7GKEDCtisqT2So7Kb3tMbb7z5kJWe98op1UwhSHJ7SNuPqdR78UQo3DDhU9R2Sb9pFXA8wKWS1fyEpxyuLbqW",
  "key2": "46TkHzsXXEhBgsdiLoi7nwNn2369zYK2cmvMXrADXY61uKRbMzFexDuZbKmdACAYMNSowKUwpjW54oqZVkqccoJF",
  "key3": "5ZZpyWGJ9QVAzRDTBC6M7r6Thid8BhLCqe6Ji79mUm5WXN62aXQ4KZHwQJSkZEemWCcUxaBE2aeWnCJ2QJR1jGAc",
  "key4": "5gEgsjyPzk89evgXYsGmYomm9GRxSY3JdLsXXnnF66oegpWrmWzNEnFSjLSWCDx8vM861vjfUrK5WoP2LYpXEhvZ",
  "key5": "61UpoShtHEyqkwUoqHiURuaoNWu4deAEyWPR21vbTTKzEBGuXrqhCWwbV49TMPDFmxPCkRnhZoLkvL6ixYbWe1fa",
  "key6": "stNADWCm8moEgGmeUDRF8HaA8Q29VfcRm78okXowXZ1VCp3miBV3nRHRsqDcYvuKKNeiAiZEEiyBuZqN9KmQ3Cn",
  "key7": "gQiPnkeBB65sk52i7sKBEXukZ9sBg8RotCmsSLA83zX6oPQajm2gd26H5KLGBTZXDCEqFLzmXLcLMsGfC7KeGo6",
  "key8": "59JWXej3RbDFMJ5xbjxLE95B5cCj2T5LDWqDnvkce8VJKvzQDcmDqXuq6HH7LTBN49ZRV45BDsA5PmpEXoShg72d",
  "key9": "5QUdDPQoTaJ5YGB1AmiLXz9XKmGh6whTuc5nBFogz59xowM96q6Tih5puKjP869bwqx4mfBFeHP4eKv7SQ3DRVys",
  "key10": "41ngKyFJMo8RDjirck14nhcut4Da5XSkDYxEL9A6mqqjb1KThN7eWpFyUPSM6GvvFPAV59wAG74A4812PoADiA8g",
  "key11": "3Ffs3BRove1rHvg9DQJDaDoaEiJeLg7LuWPKA7Cr1k24RJdCwaYkS4Q7TG5C32PpTsnPufzeoS8LAwuPRzTxRf1y",
  "key12": "2HEWVbLF7yYA59weoBEEcZmjXyv6YU6uFMiTkZsR3DT851tf3rCzXpeoW9ZxjNH7qMoaJbW3kknxuKRq1vykX1m9",
  "key13": "5BPHuZPx339L7javJ7H7Tcbg1EN7PvAaDps43xuxQyixVuZfP9a3FQ6P2brhnwdNEgyhZLJ1BLUMa46eCFHsej4B",
  "key14": "23YsfpQTMykoyeTPEK8NEFNCLqYX4DzCQbCPkLZd3fgdPRasiqJHdTNbk8VgEkvbgeGoqJkdJ547h2WKpNvweQDe",
  "key15": "4JpyqfoU1snt79LG93yR9PevuZ5u9MhAoKDrQAB5oH2ZThZ5nNbpcfywEdnXRrdA76HuYpadBVVphZFigbgbCbpz",
  "key16": "5wuPzajQxs7LZQjy5kiNoUZAX19z3G1KdFJcDko1cf1f2CtT5PQba1fkx68EN9gtResBmza8ohA4TLQBUxdRd2sW",
  "key17": "3YbRBZCJ1DCWYq7cja4YqyPSpGdG5W1TezcD2NKJ4XNukb6H1GBLzs8jzWpqTw8VwVWB2FrGwerw3Mu5kbP1WNyj",
  "key18": "2T4j7qPdho1jMTATmtRPMDvzeu8rxJboXiZDCVr3aQqJtHjHcYzDfn3Gnz9oGod7wrHLjbqE2r4NYdbeiSvgzUpK",
  "key19": "2KKLVWSmAjjtjgrPBjdtgk1FXh4TjioBNq61Au1bHjbut9EpfCCgrqk2EJYYN9Aih1aPkWnezNm5ZPpeDEtrDG2V",
  "key20": "5Hm2CBayKE7Z7gsYxtEadBA7p1SskVjFRhrheKDKcfdR2LQJs56YL185JbfN77Eb9tUHEkH5YUaGVn1m33rUotax",
  "key21": "5MAus5TQorycALVXEY4J3urSRJdUGThqNnbxSYoaU68wnismdjME2GZ1YBf5ddwLPmHBnCjV2jXzvwFDrCF4bZBr",
  "key22": "49uneJM4LLfLxg2jW7SEgZedZxR9StyGJicx6tFAt51w5yqSoaa213Ux3gDSXJHyz1F29AvWqiUPoCxMiu41sfR",
  "key23": "EVQq7dD8qNxvWa25VNrvLuXyNMpi6NigzxGkzEe1oyNWDarGSueZ1JZafXCgWpiYHcjmonjS49TvN5YGtLonXBY",
  "key24": "4UziVKioWZedifkPQNUgAkg3n24KjFC7xcVe9o9sbBunYWX2et9mBudv5pxExuf8LpDo2dC9cfF47X2Tr2trGYU8",
  "key25": "5FcH74JDCuhXcBGQJF7Uevscbgt8SZUoxEUbbed4k1HoTzySozDC1nV1jvna3fxQQWwiW28GnDYjmisMQzbVuq1a"
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
