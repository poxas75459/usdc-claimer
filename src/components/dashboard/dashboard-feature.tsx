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
    "3TSZ2JpBZu8TEmsbB33d29qu6w5gyhbnaecsChRy9bjXNG658gCoW62yRHaCa9Y4CNNt6QS4JXfbxsNumKd4yreW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qiKseAX1uuxYwpwzVhbi9DCggbhVjRGBhvbKizC2TLwbyrWyVwh5HfNGsDCVGv4Qb3wqr2XwdcJ4yEbFrP6AvKV",
  "key1": "3iiwH8KFu5yqU8ZvcRWA7fdwWZE2neVjmZ49xdwbt8jNmJomymXYNxtXvtNUXr3BzP5j8GFhDWJP7U3e1xUf5t18",
  "key2": "5VRRvjosDoBKPCC16G3XkdpceEPcukdsefLAEx5DrwraLscRC85HjVs2oKm8SRj3YJfPAC4hjURWuZY9CJMbshtC",
  "key3": "4nrLVJiZKy5e8cYSa22f2DYYtQXoS8LSCEE58mDDn8QrF1PLg1Gebhd2JXBrBDU1Va2nDYC7tcGAMyYpU6GAMiJr",
  "key4": "3HhpbpboTEbJUezYTfz1gwee77yRJtJ8tMUCGtY2TS8xxUZ2QAGKFRZuauiJwpEYw4suQ9FicYDyi7Y7j4MPBvja",
  "key5": "5MAkvDKZzoxgNDA92qJpGyzeT9GZyp1jU2VY8ZAGF8sGDr9QF36cb5QiHkKCXw3iVwXJcKonkCTi9B1jW6fwNfEq",
  "key6": "h8V6p3VgECnWBrSExUEgDAUgt9tRoprdAZMYDEtkyC7xW9rHjFXV1zn3SqQejF1qod9cQg83qzBZP1RXszcUKSM",
  "key7": "5wv6t91g5wvTzLZS5A849eNv1opEAFT1AX8o1rzCDyWkFD1veyM9ZhV1A1ihZCCq4HjMpPehLtxrxM9oFLPGBBcm",
  "key8": "2gfzHsVwPHd6cG9F7GoJ8NjejT5awFgaRvy78SpVecNrC4JjL3v4FAXSKfduHCX9ZAdTHgoGoK4cugfz4mkkrzXu",
  "key9": "3K11ZcafdsTzhRZFqrLCrrWjFaa2mfArxyDf1DAb3tyYRdWTGcmzgmaz62NQc3hKgyx35e1dVHnbbnCkXapqkxCh",
  "key10": "hFxeCyLD3TRQXok93mUPZMze2mWaRhnLAEmeYZbCS2r6buxRwDJLDoodCGeeZ7NgpNRKUQEcgreFY6X3e3yRF3X",
  "key11": "2MDxNyQ3uzAmYHGpBsiUsSF42xGm29vgtzFR85DsHyZYqbyDF4UsNL2o7LWsHG5mnMGSgzNn2c4DSzQwpWe5meuM",
  "key12": "yYcCFvq2GNGvNazG1mPHBpvJg6JvUut4jzczxaPdmBXQwuhBisfCNgWDGf2svtHXn2b8tTTwzzCnGcjJzjArFV7",
  "key13": "2oCbZfokEdSurSpKcfDuXik9U7SKS7A7BeW4DLJ4tnDtyrz3bjDQ2XVECRonfrgvB7kEFyL5rxNJngMp8J15SdD5",
  "key14": "2NKeyhEgSKK7qQmzXbBjf13y2P6qJYuCUMVdoEsDmMGffSGdTXHQnokKzQ5R9A21HQfatqWmQE4ZwQbDjQGbxxCb",
  "key15": "2P3SkwKeYVmSqy6F9fLrfJvz7cr7xXYZrKJD75abFGAutcRp9BGJ8vwkj3YC6wv8eeon4GQodKipELo8NT5g2Auo",
  "key16": "63Dkrxs9EKYBh2e4XqbSrkvoYQA3wpC2MGUnvd1C3WyoUDu5gnJFwPTDWrZKQjH7vFFhWpvTggZVHdEkdntJ5PBF",
  "key17": "5rpunurGoUkk2FzvDVH1ArTdfpAMYd56RGCKP4pjVP5TMx2vhQvWbZhQuee9CATMSiTtCX6BHb2C963MXssbGiLG",
  "key18": "4RmgjSaGofEUgL3Gy6f46kxTFHH3PNP4z3hjM25k71aK6UfMHduiUCe11X5pRcCua3adLP1MwWds6ayTcfV4ER4s",
  "key19": "3wuqw7wK2K17rptdfmT4Hfn2mvpoJHFNDngicVQ7AUqa1YeuBiP2JDXGHGvZdAoFG3ud33WapT8Yio5yu11sjJFh",
  "key20": "fGcpp7a7TSaHvG7fifBCEPbVqyeB1hNHgD9p8jdkKGd8FWGejfDSR7VNf3ZigQrQKmeoQ5Ai1cgFKcFTauYH8ec",
  "key21": "KWUgjiR3z4ndnUkG9MUaRL7vxCt5woBkmoBjAAoY6xFBsqZN55vjyis9gayqZvUycPuXbNsxu6oJyZWE26VeXTY",
  "key22": "9vmEpCpJ6xGfuuhsNjayt6LKqFbvYpEcE8BrbEKvHVHr5rXLC7a3y1wcxgwBAaa75uZAC68Sozng1CDHcgFkhAg",
  "key23": "6Wg3jXjWUzBGNeXbuBiXoMaSgC16eap5Wp2E5cQfrZFjyGs7wg9Mo1JYdoypodjgxUCAuJrJZGMEiuBYvU49zgn",
  "key24": "yHwTfhzuATVBrw2nks3XVBSRT5UyzcszvjuU9paQTW71wSDb8uWNBNQrz1W6BLYPyQMeMeUdayNo2QvYxf3iJpN",
  "key25": "53rFSdA9FhtCK4rKZ5YHcu2AAhb2d5VuJqHnLinErZU1RZxoW77D6XvTKLkxVUAiiyWcVCfGyzzLqdG9VR3yk89A",
  "key26": "fBuh4JZebZamirhw9QAEgrxH2N5wfRJwGKW3D4pSnjX6Yz2F3TniH928DrmrxaEHbwjeUiVwXnB7ipXd1KYSPZy",
  "key27": "5mKxzZv5Zge6t2qFCCVqUUjFPXxvTk4pwFW8crzANVmcHqE4uN64Yn76D4VXquExCXTvqzRTRMACRHkyEuZfgcXo",
  "key28": "BMFQ7kUpH1gQLfzhoVbp4UqQJKzbg4wuKx7rWFwMgsYcUX7vWEmeS7cPhhXVd3fUGgmLA2n4YqoBEVMKEeHzDPi",
  "key29": "62y76bTX1Ro4GSitnqgKd2EXPzQJtYKMa2tmcUHSH58nfu8JG28pmDzvmTujhGUoTMaSEAQKWy36obUuHdV5wE5F",
  "key30": "2DFy8DdxWprPxRRCthGFrqkxzCYmMe7rNqUVpmyk1vHbhQsv6YUtwTfMarz29kuqcX2bGLz7m9NbJcQMcG3DSQMy",
  "key31": "p32JscUqNXv5VztqtCrrLMNbeGXpuGDAQr4KLRD36gYhMvtMdiHy3a8KC3DNjqKBPYDiNv9thBf2TbaLy8V7mQw",
  "key32": "595m9Q9M8UHiWJYDT7MvokpFaaKPrKuJ4Ve8sDRmZPVuV9FzKBhDnsqzciPC67vYT93f5uuSCZ43X4fHxudN2dJR",
  "key33": "2qQCpLLX8y9fZBXRDjBWDrEQr8hY7T6vPWBBd7oWjfk6cDVZ1hn2ggThVvNpzV3WjXnniiirzvcKJvtvGzdWKuk6",
  "key34": "2HUMXVvZDVZ3t557D1kiEVXMpGPXwQ8JEhpKCw8EpfbtbkPW5GagVAwW5xXc1j7dzmQgfp99ZNkf2Tf7tzG2Tuag",
  "key35": "44DSuNVehL34mUnZRcNXAVUCQ6BHcpe15tUhjjVqFkd3rkjz3xynNiGC7G1q7vK3Xr8weC4hVSDjBs4Z3XTg2UGx",
  "key36": "2m8HUVxTfD34my2QLybBRNYvu6QU4fT9j1Fed32bxbkXpmmidqQdwBtp6r9T985pBkiS8t2dWm4fiSM5W2q2aX1A",
  "key37": "2nYWxoyY1ewkgsJJKdWdDWggCx6ynjLeQWyQWY3zcpHAsskaugnsRvL8p9StPd8mEFXxtQ4yyLEkDpajBsAgGZxj",
  "key38": "3Z1n15bF26Pf6iwoR4pC8gXJbof89s685ZYcQYGVjDn2aRqKNeRpArZQkKQww7mtKhj1XcdyZsT6cNmkJLRhhXDW"
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
