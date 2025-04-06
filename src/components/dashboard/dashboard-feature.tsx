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
    "B43smws6NCBawPRS72PEWyQ1bvpq3ivSHHqgJzjc6iGRobdyYXnpLFFE4GTGU4vcaQKmYN8mr2KNbqJYrQCYVek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tNCduQroVHxXSffP4oVUXZ9UKQhgh3UWenDp5jmjrR6p6M8WFEajzauqvdQDfpffkgxixXfciuJ6eZ3idEV2bAw",
  "key1": "2nvtDNeqeozaFZcDoMYPmnQgRwJHh9KR49sw3DTaJZ9mFsPcfRGebKqAW3k4FjuBuY6G7R2QiPtV7f4EmPPmUgFR",
  "key2": "52nJWwWgvGRNdN13N1PwJVEndsUvCauq5eR6KNwpFFcVESMze8Aqzoj5uaX95BFZRbN4pGY9bDzabXmSnCMgRiEk",
  "key3": "4taDjSz8FE8VVhQ9y8M9sKYSpCS8PJY7a4nbHMKaD5YHhhJPYSFwv5t18qfox8JDNYdrSqPiGbCznotiDL1jFFGo",
  "key4": "4rZXd4UMzNuSwu7kaFrUANGub8D5bmUwQphBMVMcJBvWmd5itBYv2czD5a3R7ir5YxK8oWXanadBny8djheBU8ez",
  "key5": "AWvPHyJu8W4DtdfPS6LPXfhGsxxYHgyiFoc2AnjVzbM1194fN7MjB5jKNyDdg8LdF76vZLhvZEpWf273Gemovho",
  "key6": "5mXwPEFkt3ZtZkvE1auDCTRe1RUP1bZQMHiPBg4ed9cAw6LPrGYVLNgWXXSjQLyfyCLkYQEiLJ7yoeiaV9vGhMLw",
  "key7": "3EJbXwN1C6HgqX2h5G4ph892LbirLZUdAb9YvfdERhFjmke7v7qv3YLeHAV6MhX72yqNpYouR74nUDy8UzoS8UFz",
  "key8": "2PvKjwzZhw1eJkBeyGVAUB3hABR71DG8NUhfWTGtCbXKBQ2c8MsgYafB8CyGjTPf5dCgaR4fefudG4ubfPfS9znU",
  "key9": "4fDz7UTDo9jYacXXTBs6Ziyrdh8s46rMY7hjjq5GGFcT8yMVUif8aRYjyvQ9Jw21fCUGLZz8SxeecUWLaLehYFcY",
  "key10": "3fhdRskNNSsV2xENosp4e2PKM8NrX9LB8VKd7wD1kQy8QfPC6GB8XxdC7sR2ydPwWoW5n4koVxtFMVhhS4MDXHyG",
  "key11": "2MyS3zmgfCaKUVn71UczS4Au3WjnA5NDrc93Gx35MBX5FnRx2RFoiE1NsBFz3qW2qpUTyEmWCJajLRvSVs9wTCco",
  "key12": "5KUr41uM7tNTkAadRYbi5gHTZu7mehT2EMtdZcFhggvrMYYreamp7Wsms512wk7eC518LAKg7apV94gGwUkR7zx9",
  "key13": "2tii9FBeNstjXKBu3TZQm26VzZm8ytNgzPhKrVCrMaPupPirYnEjvNSKs8Be6nmak5t495tT8Pd5tBJQc2WD9RPE",
  "key14": "5agvW7HKk4wbvYYarP2UMP38VzmF2FnuNwg2zygTcaHkHdRiU7FgicmGXgny1akmA8yqiB35emCifszipqF49VuW",
  "key15": "wAVr5G8GfAokGWfB9PvnQusH45CLVG4GjnDqDkpjJoSdSPwPfLwqPwFaLLd8wfAk7kAQ517qjBecD4nAv4YGDzj",
  "key16": "2BiEpMKEpPa16Lfq7CnutXUN5SpJgxnUDKd8DEMJW3sfc6dbaqyXpgWySxDoCC3fPzqmNrL6MrAehq9UHJgSdkUy",
  "key17": "23418eew9s97TE9sASjz3WB24V8FbEM7GSwvyjh7dSBwRrmxAszQnfECba7cRPbQSDpAF72jRVFpxBbUrjc19kBQ",
  "key18": "4VgWrsy8Zur8S2cFMFQVRPFjQMhWMKvenm8poBiPKbkr185qvUiELJXCs8RM6QUA6h7aFJye6kdMJyf8WJ5A38QP",
  "key19": "ADTNeFtGan6nbWGpUJJ8Yn53bGMm8dmzthuECLHVacYnLVs1GZMWsZUJnsrD5efXx7Gr2TtMWYGaS88PvFbkuGf",
  "key20": "35zGdCTSXVyHXDM6JwiJB2BdhiRYB96TVhZGmudPwxXpnQJy1C2RirL7FRVnyTjT8vBZfajgs1ABsTBwkWqPBWsS",
  "key21": "3dEe8C4ou6Cknm7iVVSaDpu9nx5e5eq8XT2RuAdyMdRkN7ZA3fcmX7rC9Mg7ywJwyW15tfAVrtJSiXuY4MZPYxTQ",
  "key22": "5NL54LP9eSLLC5wAnDyNchETypVQGinymhDiEBMr8kgCvZmohdnUgfqNJADXASfKZmmkiTNBtPnE7AV8BPijwV8r",
  "key23": "4n83iwMwesVRiHjBeZ38uGHXXoDi3oqcJCZfJjoVXVgkBWadoBbXG3h7YyzzSXDuWQjYj4mi6xCVrPaHBa8cXqwk",
  "key24": "Eu7mYPbDQXhvAvx41EWB44YQW9vh7TDFGAkh5Uzuah51BiURhPuxBydibCNvvn3rjnXcCkd3AYXGfXSuM17Mo8T",
  "key25": "QqfkWwQc4ieinsTc6rBihgBjEnzXUi2q4RGQFLerTsHTnH2azDtc59AmwGEvM6CE394PK6MHax966DRfg9nRaup",
  "key26": "2BmUmJYf8bcEX4Xf2UFJqHYD7bMLh7mKjC74PzW1BZChZnK5tuUiuQzjp6tAp6jy6yYNAq3Rfhrf21akQPajkths"
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
