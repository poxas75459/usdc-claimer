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
    "2JgqeQTzm1e9YosFwKPmqypxEUio9DJxSPjgJJCqjUbifMsdTXvQU3XiKF913RebnpmqFTAd66FuwPvNdHZBQb9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zy67dBwucUGoe81vyBsDj47Mw8xhoCSTGk2kUVghGrUJsUCXUnnBYjywoPJGhvNqrZfHd4W2YmrpSgncoyEGDXA",
  "key1": "4CTdM7uZQgCzYUzB8jdBXmU916cYEYXs3PBTfjZ8ybtsQrpLcDGFRiUBiptghYJSxWTcafd1ePcHrc7Nx98zTu8z",
  "key2": "38aW42AyUhfv29dUBVompiE3q2mXJ721Dp6cCmJXf6PUAQM4US9yYaufiTNvo3WGcTgNAhkeRAY2wkBHLhUTtfNT",
  "key3": "43sQtLgdmDg3UyvbhPptajWGGJyZU31H7bmbWCFQLBNKvgQu1skxAioHu49y4jqKpGLJMmFZHgVJqtXe8bqhQmjT",
  "key4": "ncyUxC7VxL715Xc32PSnFpdKEdxmUF5roEHbExAgq3ys2A4aX6R5Mf9sxLWrtU6c43gvebJr2G3osnL14zheVvz",
  "key5": "BZCGPCyi6X6nUsHH7H3GZwvtKzcNKWR5oR76xqnFLWRhdHA9UuzCydMcSseBXp93RHvMmHfq7ZdwEpAcAZJz76a",
  "key6": "5cwQAeJpH1cSMWjCdqLFeeRfVdoypkJETcyp8nJwJnmt5fTsh6mxxGpQ3dXsL7YwS26H24c7GhTfaH9NduH8wcyt",
  "key7": "2ChVUoCuZm6PmLuMipEdCya6YCCqAHwASRjE1kb6aJL2TPAgaV3EqPnPXYmTGhCmrogQ4RT9dJnaKUKWBbprD4by",
  "key8": "5dBWnAbCdwmGvKTFoNaoWPEJPkNHBEaSqaVeT6geMVwTPfuqPfw73iVabZerotVnaYj9sDeCYkVEaugsBxBDLo3V",
  "key9": "zS6dL3cisVab9kY4ydfcfRwPejKJ8EF7oBwzhCAJyw3kb912e9uB2Brm3acLfFPg4jdCqaVDYZgLMzSrrPbURKY",
  "key10": "5oETGN5R6Qu7qkMZQzBDH37ymxpQNvj5p7cxj3REgrNJoBWtJWFGJTcqQFUANyzPFdf1g6ocRdgqzvKm6qG8TN52",
  "key11": "HTihbqQfKC4eYMEJZDpeS3kFW72T2Cq65cE6v6b3DcV86egc275ZSs9P37JoD4NFx4vuWtGSs5puCsAPKePpr9T",
  "key12": "3MrFMbtrFj9t2YBjyY3XZMwf7VuUVL582PdqbLt4xLY6ymJrRNr3hYVTWUeeqytBQ4Rwu4C4dBeFrNmdFwvcoLjm",
  "key13": "vvbND6Ss7pXNWKdX75A2cvADFXkFjHJpifqcnW5QSS57pCn4xi8eCZ8KdoVygnUDg1R3Ya4JfBxb8ftUVXw2L7Z",
  "key14": "47HtjjGZtuYiD7WbavWm28G9juyKzc99c17oVwgJon18HFg3gNst2kYCGJX4PKXY5jZXMYVrV95nDNgg86YQmALF",
  "key15": "3dTCfKFLcQNYytDVeN7MVkdnrwfNoJ2FUaRi7VaJ8iFUnVgqgx7esG3jtkJTKm3J91E8huHFxUFbE3c8pVnqAcrp",
  "key16": "2nBWq2UgP75zHrqWG8EyUbTkXuTscDJGaAwdwAHZPSHfW5QBpUAznXV1d41TbXfgCdpMG2gX4zLUSctY6rATS2aM",
  "key17": "462gAznYiyuG3gDFuR8ZBUYQUCkGPGq78b8jwZkmWFtweZoBCyAYRuWXLTt8t2ETzvkTSPDucoE5MeTwB7iUL5we",
  "key18": "5TUVgCavDqKuYWoe6KuWnAWRUtrFdEoALndEGc7LGa7TEo2GUsv9kjvRJhwAm3jbBdbHrvAYx38ps13Kt9HwYJwy",
  "key19": "53xE64Da5JCzmfaAd6dxsy3DZksfMoMP9RR8G2hsMBaEAeqqR6YAB2KkT3HE6yGMYAypnZoB1Va3n3KCUsSCzGyr",
  "key20": "2h4Qy3LZJKiZ9WJ3xLaxeWAwZBPZ1yjyTkThKNdpfLSKTt9qENy3MWb2EUCnWniFD4MBdjWNYzeuUAxwzdCCW8DD",
  "key21": "3Wf2RRmx5GnqZcmFjT8x3ZbztQPPnTymddacMRWTogYf6zJr7PB67oNZNd1ENPetp1U6t3fnpRH8389T6J24qmNj",
  "key22": "4YoGY7yRTEuohDp1P4voK66JxgFKo7yPSTwkg4AEgEURfzxntMT2oTRCohs3sRfKsn1aR8gJ7r5uM3Ss6ei821bP",
  "key23": "38ezfP9YY2KzZHsiwPQsGXpwRzP8FLPet6TFbGCSxsQLGePSs45U2zeVsrnQwKKzwUK6NTNJfVFpVTXDqmWcbYbt",
  "key24": "5qQKbCWzChzWUNp2kekA9TzrvzWyb79MGXGs6a6asHZbQMAHRGJvGQusKVc7y9wnqqxCRrSxMNiJ3CMJuxcboYBK",
  "key25": "2q7bFBiJn58Sw4dANNsySVS1c1BCwe3U2utsLUY57vuteNyz2Zzau78y29qGLWSGhTizcPSig15xsxzipN9ZBmZR",
  "key26": "wf1rYGrhNNc27CiJJPeUUXprMRPqYq458S88iEXhRNepKKJhayxWVKZ9YGSo9i4X3N8yXQMD1UTfzygEvQZV1PJ",
  "key27": "4untomn4iNx7Kq3tJj5pt1d7o4K4ghPw157aPcewWR7syzU3vBNiRfQh5crrMi1Sywbypm3w4ro5UPw2twnJeGWf",
  "key28": "4RSr3yLz5UzmnQifF1tEZAbBhquzmrubQZUyfP7gRryeh6iMmFxTUj9Dv7eEujSvF7zMukKfDBD2bDi1MLsEYa1y"
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
