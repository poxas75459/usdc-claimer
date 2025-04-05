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
    "3AsGHiqFMFYhU4BkAaaiK3FG3sSofA8NcuZD9NbwpmDbvuAVRAi47RoqAoxvVWinUbYdtjF3X74o8uX7qRs8Ydxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27SZX73B1WVT513eeZhStUQm6MmZPDVZqT13JvYmfk3Zx9dkf5J7KpsL92wWxhMK7RCj9J3DE5fLpAnzATNUrw7M",
  "key1": "2r5KwsjDG5YiXhB5JEvVVsZ9oxTzkUdHfKjRHWspDJezc7ak8bw2iehuK8saQUnBkg9E7c4CA7J9WZU9TzAbHkhk",
  "key2": "4G8DkKUMS1y5taVxtQSweq2HbDWFMjjZNwockiJgSWqvEhwm27TSdmTzipunVkiPQaVZaD33bZFkMBoyFg9yptas",
  "key3": "WaGLhGmBUJrXKYZHwCLLzw4ammB6ZTcLDbKU9XdzgcX6mFGLhXurBGpQ9MBYnXNwgXssfVL4DYWqM158GqAf3ya",
  "key4": "eCAz3n8y5gx97TUxSgqvucXa9YLR8No6fLjCAWSdGk5MMNRAtMM29RmSS3SfhZ63wNYv4Kx9MMoek7RE9gLE2zs",
  "key5": "4srLRECuBAcrZRMpyvmbSHJaux97FMmMn6UKYGUBpz9JVeSCFvb7viyit4iajwPs99j176FtJwuwsY8X9WFSe2oq",
  "key6": "4uUD2DKqv8ubfQjWzTvCSbhPhrSDGvEpoakximGU7x5VXW1rCVbAGn3CoYceXEcfXWmN6du8VisFfHDdH7yjrC8P",
  "key7": "63dEgCdaCcxpmSpyKBV8fPheEhop5yYPBDgqT5rzfZPzTSMpeDFG4WqYrEZfsVBtv4LE9BEZ4w8H51b4YYmJXa2g",
  "key8": "65Yt5UqFkNKAtLnNbLeG7KsrHsK2VEiAzDef3qGEDR447QrXQ75oEmRJMCR7VZQo63KnyooeSHXWA2s55FuzBKxg",
  "key9": "2NKzmpmmMYNaohze8TLBguBYPZQF72LVedxw3SzdhCV1vG24kzUJfWBdHs7CHF67Y15Tv51wXbeNd5SJqU4k8GN9",
  "key10": "5knMCMUDAuPvHjmGuCe6Bm3Hg1MhtMV8GsxEjET9j8sUud3tgBCzo615KPV8pdZWQ5Kr9Y3LpFiHZXxyB1Yxt1PZ",
  "key11": "5gf48mtGjFhChm1HuAUtoEySD8FW3cjW1kSCx1gVjGs6vwQyJqSZxLqYo2vuvvYFizvez6BPhfr4Ptmdf4MG5gKq",
  "key12": "42equkXw1E3Gi5nouHk27KFmDdcZCUkMDh74shZBx91DVHVhmQiWkqoe9PaMkNKXu48BEqCqghZVsS7ziLtzCby",
  "key13": "3yYPWHXtWMTXRiiEf5WDFJzeqEtozbtF9yDmXmPnCxbm3QK65yt3pFuhhPaSvgxWWYL78WiyTivVtMc47L82m35v",
  "key14": "2BKYUhJDdHy8DDwhyLvr421rW1Jp5rSpcRRUzXLbw8FivQjKBBRxrYgXBkVxpFHHGqZeVQhJwt3UFP61sNMqREMf",
  "key15": "22JruAgFaPg1GdSJaiWUcqeWLdY7ZiDnzgjTukKA9uVsSuEo1C8WEGg9eBT4x3AhiFzrM6tBzqovGwWwHgTmbz2J",
  "key16": "4SsTAb1aNPsnCfz9Egh2qQkXgp41RLELbKjgi6HtdMf2oNQcaN5UBYPvXzfF4cTeMZdUjYVNcpWmUfnFx3vK77xr",
  "key17": "38ZENhiNTb9C7NXHU35mCWKQ3SmxsLDo3cF9htU74x1be7CFNGzU9jDVsA2vpciMWxYchgRUQcnozqZ2DozGoDDW",
  "key18": "3w7RAHMnMmVjVyro185dcz9NVseeK5WScCME6ipaLdMyAMeZEh2w5UCxPuGDRiGMg8PJGAraU4AVhsgS9Ku4u9z6",
  "key19": "5HqVyFBDeaGnJqo5q6V2FXH7Tdgk4H1zm7nJdiXSiRfpVyTkrUFQsWYHBKm74WHozFnjVPkS12BMDAkm9nt8AiUz",
  "key20": "5KnSvGq7XscPLyT2BZu7mgnMZSv4PLeS2nYWfapdjauuaMXBrh3CeG1wqXm9G8VVe998zeDg6oHoFjvQsaFbTF3s",
  "key21": "35NJyJQLmsCNDNRYuY1EA9khC9oYdukJkSa2cAzjjvN8ifmWLY8D9F4xPZkqJRRpuNcSTbY1st4x3zU5RLjeRNqW",
  "key22": "2wzHz5qFaTCtGatcGVDXMLxb3WATJW49xcAzxiBvrXSRB86BJA7e2Fn2cCb2Zr43pNy6P8a9HBwkaEcmUH2cWycb",
  "key23": "23XrR5yMoZsoiVNA5PE3Xdoff1ZWQaieM9Mtfx1WixqhCXy1tiQ8uWtGvKPvtP5gFt1m5DxJpkeiJmtYb2QqCbPi",
  "key24": "5m3N2Rr5UhrFaVxxs97s792XWLJ8ucT66ZhCr34AxLQsHu9S2EqzRGe3WbMPaZJtn5RkGhyzdbKPXK5hii9zy9as",
  "key25": "2ScBYAdSWYnVKbm4hmmSZ1Cnt7jsHDAZuqBGUEvD1UFoCDpXLY82CRxuCqyjf4sSGr4HY65mECuP4nkDLMPg1uut",
  "key26": "4inDiVTBFpcNfMVZ5BpfPH2S4ZzTeLj6P6As8Fc28VqSUTT6K77iLcZ6sSLZ3ZEiZV3ATeQwGgbAjqjM2mvC6Fnt"
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
