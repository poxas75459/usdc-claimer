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
    "3TvoiFJz2KVhmeBQehA6TesCkWPTyrA4AGNJgWrwxrCAqt2jcNLb7CFbBUbYEopqEd1V5rHMFrBDaRJMHbCCQWxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35A4v7BVtHFhHcWKoiVsqZDzVWxWNvSnpNJeeogJWF2DEXx1jXFVxeF5pBTNmuFRaUzP9xvvL3yTuLecY6jnihym",
  "key1": "4hXWVbnLQae948qBXayE3Uqs3gpR6j67qp7W8euNSQWnVj77igPgdEpwsT2rMtBrKakPV94FWiuX9wednpZi4aqj",
  "key2": "4Lj2gnBSHNhUfTJ4U2RGzSDKFakQTYPucGu9G74GogrPimeRMHRp5sGJSqnEPx9edJmCYug9GTDYQ89SFctcHhPW",
  "key3": "4inS6FBCNTJdQKEUWD85vWSEcU4aBK4gAt4Udq4mUFZ7Aau2pzRM9dpDdj4xQxxDmPWJwGRGedpc2omwDzVZPwad",
  "key4": "5fgK2XQbbkaXxr3pjZjWY7zATFkdcMTBLorhwvHV5BQBhC2iprBLwwsdwngojqgLJUnzbqE3zEWJ7E6hHLsmWZmM",
  "key5": "5XwNrgeRP8Winz3gKxSvF47XGVjzCu1H1S8PdAMMCzyDEjYYPCaA626J1m6qjyvvPnJDtkgcqUuFq4fKqWL93jz8",
  "key6": "5A1FBM2cVGvquPUTJmokbBeV8V3YMxaEoehENajtEYoxgGsjLtU3ZbScQ6uBYWejmnuBb22jUW3T5i7bEhoMYWBF",
  "key7": "4MWKZKtXx6EV8eQfr2Jxt29nWjCrC3mie7Ki9bkwZCrbiJcHap14wtyyAUCaSt5K8CVajoLnsBvtCenfSnLS5Ekq",
  "key8": "4iisJjhtPALqTL7Kvuaurz9Hn2vJPuhxZAeLFpBXN5cgcjSPVyEvXVUzj2tFDB6DQUWhAbFNbS25e6qmB7Rg28au",
  "key9": "YM7B9ARYnL8GwXEYDuNGSgD6TMtMYwSB225azexfiRn5baB6fQ9DNKKd6LxLAF5YkbG9CxCG7ao6aVPU7MFM5rA",
  "key10": "2iLLiufKrhk86gzqCc7Pvgu6FpFPURx8cn77oeTXUyR7TEH8Vrkd543qeCv4TwMQgx8Bpp89NHXUQb6U9taHjkZB",
  "key11": "5To9wmKie1kTzGFxrYHEVeTu2yVvWRPfXo9s8rxMwwJiNYsJn87FUwdwsTw9x7TuLuPmsirLtgvTAk8THFU43eGx",
  "key12": "XHNw2Z3JCJoa1MHbhdkoSaYEhpzbrxzEReKFsKTQj8JsB8rES2qFx5MeL4myJE2pTJa9yvizytpf9v9DMPed4Zz",
  "key13": "4oAt6GUJcsArRA5hyp5pVno4uvT9NgZa1u8nN3pZNKLfhcLfatP1gKcuj6DpMesLEevdn9NG3eTFkw79ojmSz76U",
  "key14": "5hxmQBJWTyUwsgZeujhKU7Qprz1VfwgeJgo5Dg779KyZZnKS53YnJxTh5Lst3Rgh94fkeogByugNT4m7gAB1WXcD",
  "key15": "3KezsUzoiTxxnLi21XPncVdSpsGLEVSdaBFjGM8PJD8xjvuE2iskM25fEnocLos5XnsE3GeGAxWHkuYQKTQw4ZbH",
  "key16": "TLWZvoyocAvGpUy8cpoGzpaVrxRb72FE1DiLo9qz1DjgS873Rdk6yuYpUkM4wVHjmwwX47J3dxE5e2B3D2JzhoK",
  "key17": "3S8qSURWCzVwj2ugmLfwmk6QTgVpwAbUWJDEAJt9KLw82c5NLMRULY6M5WH9UKLfAKRvJJTk4gY5W85LmpGXvNNx",
  "key18": "237himiK7GFMzvRKLuUF1yo7Rjog5p6ibSi1mFB1QWVe8jh6xTBbqUhvH4jJ9Si3wp8g9jE84f4ZWEsv7Ln7oKUq",
  "key19": "35K3xorXgvKFQ7usJaKXzT8axkRA8TpfLqArsbBYwf8KB6ZL9GfCfKAmac11RuVC5gvhmKWWRVo7kPacGCA3NU7n",
  "key20": "5FVPD3BqUsrurchRuBUvT39dqoUZuCoqvvA6F7rPz6f5ueAb9KZfhY4UBAUFKyDtrC1Td2FCRfjaFTsXtDquDdsP",
  "key21": "283SA6fKwCGx3cQfgAE4fJ6X319Ujahq2ojgRd9TB5zToib7qgEKjkmsM7tzccyCGonpwFuUkWR1GaPcPqTTDqDR",
  "key22": "4Hc6iqGAHd2B1dbDdBZprpLhWjGy63qnuFgFmrSiwJBv8BkhKkiuqaBvQHUjMs7bvMPnGeJx5f2SQnFqYaHySmch",
  "key23": "5hJUhhH7k4hCp3nUHHfZQqE9SjKsKrEbz3jCSj2s3PEcSMfssLM1SemJBdFZiSaj9BnwkG86JpBGQiLhJL7nh8Hk",
  "key24": "2TaDNVjsLrTtU3ATWpqNe9nu8wLuVf5NBRLCebUNJAY8gfSiF7EyTAAToCVGP77Ag5JgVGyD5n1zwhQbzZCHekps",
  "key25": "459tdaHXZgDLVUBe9dzoFRfeyfKiUFGm9dVSnydN2bUpE2NeKTLwpsbQb6tjXwz3AmPbZiP5en6QDRQDKzDLmwJg",
  "key26": "5bjUvhAd5CTCG7uPbj1HA38zoAGSbrrANBfRQfSrkkU4CmGkNB2sga4XiXwpkxhcH23xZ8d7GDasJHTbAKNiMiAo",
  "key27": "uMLa82jPbtfc2i3Us2qLgnx15gwDnFvP8dYnwVZkE49BGr9TyxxCoLi2vDfHEV1mvP12amcsLqBWPbGat2Lrqgk",
  "key28": "dRWgoXJw7JebvsBxez2Y8GB4huk7cyyySd1a8qnX39LRquHkKFLrq27FPNAH6PoxqFXQ73NQMxZ27h9jNF8LUr5",
  "key29": "J35hMF79ReEjafqZ5ib7428cmqggurbuF2D8PPDvC2aJw6y386ZNJ6jNcbvJkF7zLLqjskkVUVuVt1TyzFaPwit",
  "key30": "4bPRY5kWC7b1mxSEqkeryi6rm7RpyuKrHbemJ87m6woctem5XhRypba6poR2xxLdXiB8nSVAhTD7AV9F5MBffZJ8",
  "key31": "3QKnk8UmEUQ95NRG3RJcAMWWnqjecWXpW4VGCracoR7nSnyxWqDQseCotKzUGgqdX7jN1p1Jafum2jYoAca8CD32",
  "key32": "45FFXsWdz4GdB4fJBtNM9F4bbpeYmpiN7PkGjHptkfJpxnENCT9T7YhpREkGSFWmXLK94sb1GitKVW5X9Z89g9uk"
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
