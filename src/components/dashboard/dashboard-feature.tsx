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
    "2tTZfMeBFF328PvrQBYKAnWEEBDwm6kSxDWdXJCqxyFH1LF9jyAHw53xusPXqzygA4zEU5Rbwvya55tXnhqwEmFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gRQYBnEvzweiktNG4wFaGjhfPyQ887uPUmqq9o8KosdEfcTcXvgiUhopmWirPLQfqU6DBWQsgSr8riDoHZCSR8U",
  "key1": "2ip68RYuykKpuYkBsVETHwKSPeXrpVz4T9rcpAiW9D3ugahbCL77q6jymUZ58XFo79N1roKk9ZcvMuUwgZFvkH4m",
  "key2": "4QDyyB1RbRjinPs2gFjgLJfEXR1KfNUxYfmgYsVaXb9J2auwMGiyRyVf8Wsexfe5X6noaeJ6JDwiEG28nKHCi1qy",
  "key3": "2S6aVn2F9pYGd6eiFMKDPzZWkHVm1iEUQtuxnU3xBiAGjh7cn2T4CJnivFeSj4VBSK2TUdmm7Bf7mvbm1PmvkNsK",
  "key4": "2JFtXrPBMpYdXBFEDPTVH2p1feQ16Ygf9Rdk4zYtoyAGVRcb1K57UmAfcFLYBPTNjN7onyE5t1rXUibKgqV8rEFv",
  "key5": "5eYsf2wmxojFktZg61e9DDyzPFsLDihHuGRfJvsWTH8E7HsntHUTnVain1hBLRfptAQXT6igZXKeTuUS2gjeLnGe",
  "key6": "2shd1CTjRhTjiwpekThuGFzqDScGnqCw78wErZtTSV2qkpzoFw8zMT7ZFhq4bhcRsWhp62zm4F5s2C9beWADHnpg",
  "key7": "4SpJhEX8AHQM8u6xwCsaGhGMRGEvryx4fQFHDEbsMQH51KQQ2yr91454EtcRrKumZH1YGuBWgwXncgGbF5cBhPhu",
  "key8": "5XZXEyPvJMPbwkLYYJXdUSw9vzyWMp7rN1U1NiFpsjQ98GQp67mE5SaEdrkj39BuviCsy89sPomWUxKg7YfUKfpS",
  "key9": "2sHgLTssX996gs3ZrnBRbmkZzEoVnE1E57HLTDF8qftJEyY23hMGX1fLpdfmqeUrrmAqRQsFoHRTRHguFxizcC6X",
  "key10": "rA6JYu685YCBnEm3RkppjGkFm6c4pqWNK2YCMDgEd1C95WyBvxUmRCgaW9UwWr4enDemeSmut1PgCGSj995ARba",
  "key11": "3Aedn8AZ6S5MrPTTNzzWLdfxkZgij9zrBHrpnKKq55LMLkVHdNskLVhmR65TiDANYYVFj42DnSYmBEGKnxjrpr4c",
  "key12": "5yx2VGrTdKKBct8WpNy11QGgNV3jAkzAbL1p7KziqhA1EsANDHdg9XbNm4am7F6Je9v2coDdp5Vptjmhp2UJSeY9",
  "key13": "2a6vktyRjZtuEeUNuhwzdceyCEzSJSxdoNxD1vnfeu3CRBwsCEGdHsFUpsH96P8XrLpkeDBBGYk42gcRvirrJ6yb",
  "key14": "2MYXEVZcexKUEmKKNtFkQX9jsiiD3BTNc7XEB2NUiqrDzEhCcNh2FZaBmskSzYMswTiJLfjPeZ8C1NKUcL3PksYp",
  "key15": "3Jy57zSWWJzZvFNPKs3QyL9bP4UWctJVZfy2N6hQNrwhJSdfs6mxDtsgNm5DcT2hhxcPLGA7ybyXvo1fqjK7gsTK",
  "key16": "5RrykD2WUaDYs3SQhx9kgBuJz5tEEjmN7EbmxXh3sUCdyrdjcf1ngmTkUCHJzCs2Vz45fvTqcRvJsYMqYdiq1hL2",
  "key17": "5MfKqg4wHjfW3wtpnP6SWCH9bp4Skx6KRK9pRvR9P64aSqvVx1meVcifSUXXrgd8XFepwRbs434gTc9QzGozpm93",
  "key18": "276yHnb4e7gknjt1W8CnGJFZN8B4hYbkGs6N8GNHppxFC4qpG4KE1yW8bWrNAE1aVS9Savs6wrYyH31UyS5QZmFv",
  "key19": "2jVosGbGAef3Xwhs6LUT4Kiydpc26wFFLmFe3wVmzLnHYyDDdQdEe5vPfxvJmBwNjTRSDh6eVjvPFxrSyac5aFn2",
  "key20": "3GaB311uaojZZgQcTmuqCqroPpVmUCtzwqUFxDiZHDbF4fzHk7q28QbvBrHCu59yR9LP8pzucyyuce8UhwLSqZVB",
  "key21": "qGKqiJ1ANv85dSZTZRHFZh8M8JiWbWjcRS21ApmNEzStGARsknzcb63XWdyRtDZA9znECEPuMN8vsw7G6YDzTnp",
  "key22": "3QKFEdD8mzTFkvHZEKwDTJzYRGiCMgTwCk8NUNRwvvHx7cLfMq7EiyJT8go3NqQUVPA3X1sdUTZwwYqNfSyniMhX",
  "key23": "5PutbaU4ALvm7h8tPZXRsbh76MrWzBPiLSjN4ekpkuj8ZqRDaUCuA6Lys87DZmFsU1nxw5rLCajCjH1Mx4CvLKF3",
  "key24": "3kkC7gSuo5dNfB8Ejf4KpiuLKTKYwPDUNmzutrhaExttvyFEk8kwqCDvuQShp1aoYp9E8BMq2aY3oqBP3PyESAuj",
  "key25": "2jKd1X47fQUvSzC8eSorsnSid6mjFA5PbKkChnCwd95f5bRwxFDoYzk275Uq7fjHD2V8wdVtsRf9JhkXaTgKrsfV",
  "key26": "2aJTUYVPZTP9pSdTXj7bRWb3rjpu8BV5YcuuFFCkZKPauUqjzpyp1e8TaUcQGSwaJ4LcGEJEQzYnvkNvoduZs8yv",
  "key27": "3DSjAdFkiNQEFhG8XqHYhHS9NREdi4HkVVNKx53zwSyHeWtpKRNs9jhZQKZ1FyPvZm7KpDEyUT7EKf23CkvtSQZP",
  "key28": "22aZV3XSPPKkTdrLQXEehoRpd8A8jJZHkNoyGtR8TiD4si8EtHZ5XGfR2TbRasaesmtPn7XAxisNFwP7k9jRMkDJ",
  "key29": "PMMh3Nd4YoAsTL8atKjuC3bXWCoLTtDfBHoWmmGkY2JN8uwS816vRgU3dCJgM3UbzNRGJTcXsnPpnaQSjMz2LT8",
  "key30": "3upSbzmkBR8z1QS5Vr7FWp1wuBPFMjwRrgQ8jZGN1pUKyFG746mLfH5aUUMDBSrCherWbtNosP7tymDk88d8Rmff",
  "key31": "63sjxGhsEbREvXyUKBFyheVqmTyQVm87jWUsyN1JzoPvBqJjeJdnKpBMqghgZshMXTi2uPM14iS2FcrAjzSDc7MW",
  "key32": "2Gi9y3fPJGDPnv9GP6cPnWK254DpB2ksThBn6TjA6DXdgd5ipi6D77m7B5e7BZPLMUwCHH9YnzD9nGseWmKggNtn",
  "key33": "3jfnN4c5dRdJ6MUgZD6CnvUpbKDGS1YKkYgUYFnqg2YNhYAppVg7PCDcwWxsb1aeDmHXCSSWbyPB6ynFAQRjpGJB",
  "key34": "o2TdWN3z2jgCf2uWdXQajcpCmG4bzwSQV7uYXDLGVweafymLD2S6Hww5Jrcs49L83EYJedt5SzQ9aJbQDWYNRUw",
  "key35": "EcpDhR4AzHMQ94kdoKVgFQn5dfNuUBc6iFZzHCYjrn4UqifRSbQhAbMNkyN926siZhQmwsckiJuMJ1QAmGJCbDC",
  "key36": "4pnxTtkf7uzKeEgvKF2r3kku3LrTG9qy1uXwBLRFS6ioGHgivvh1jHL3Dia6oUqBzEqz2uzHQA9oLaUxPVFiTkfn",
  "key37": "3Rkdb3JxF7yHubRUFUsxM3c9Yzj4JonANEHgScxfbo7VPP29M9STMCUJebXzaeRFDj1VMBwGuSyEYbt6Z8XcWZ1e"
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
