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
    "5pPQNNMFhy7GHRJTurHpEZv5ZjFwYDYaTjUXNXzBKc8juiuE4xZXP1jLD94i1LgLkNeET7Q8yzpZyyHZ54LCi8TM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V2XgLSWLnFv3RjXjqpSVoMEkc2aJtx2EzKQz2otT7HrcRypS5x28W2kh4m71MNBVdL3CAm328zBvPFJjVeikxCP",
  "key1": "vGTDK1PownTvYyrbuHC9HhbeqKUCbikHmh46DYD7VwPd73seosWu6k9vSi2tdohF6N6FnmEZ5GD9KVgHq47R7vS",
  "key2": "53vSfGqq8pBUZE1czcZuPninuQZ1KY15encWVYNmCrrWhhQE38PKJUJsvNp3B5rmiFRRFraAccnWL7L6mBo3c1wa",
  "key3": "2chkz6fPkHr5JrYABndKgGRzR9rwrRVidda7pNpfrMkk5fLc7rGykE3oHf1QCuVkn3Rgttm8C4sp7v7BdpshCJMS",
  "key4": "4AVDdzZN9rANNjPJojT1P5WgPUvd5WLic8H388oUKRvZteFmuQSXDvRdjUkrZHNXnRDqbnBzyPULD4hLiq7R9KP9",
  "key5": "igyE5yzJrPdVTzjP4f7u96thbiPfrKrV2QJrpt3KuhDfWyQCsCfGcKqzUY93mpxTqjrRZcGqCYFqHdPgmPHXoHA",
  "key6": "4o287YdYf8Ndyw2aYYzZrms57se31Sh3j4FbwyhoyLwVghr5g72NwQzk1SrgXR4ikaa5zqLGFX7oKno2YBbWx66K",
  "key7": "59WN9MdTuB6NLefhsDMPDXGNc9ZJvDjbzUSi2ZcFES2G5NjnqVRRnB2EVvsCF8Ja3JsFpXa7Wd91MY6oHBUdKdbu",
  "key8": "3yyFvgtTtHb2KA6Hf59j9FWvbcm6P6vLvMS7baqtqDgNMPQUBS4pDGGnMCT9UNWeLCYgt3JEFzSGd8pyCcVyoVmc",
  "key9": "2egDBwgkmR7xfiM5ffWB9tKLrdEx4LdSmYmMiuuYuivRuqKma4FC7SqyFMnCWRzKG92rx473yvKae92WztJVAkuA",
  "key10": "5AtnyxiSmAmyn5QjYofDgiHnxY7BazGXvwEZbJN7K9odq9PUXwgrkFbqxTVuVePVDLMoyVzXnzyMxwxatG6MYiyL",
  "key11": "2Af59uPGjkJsD3Mzjj5pJd2bAuhQUjF7qDBVFcAX3CE9RxRjjd17CRMUj9V2Hxgu1uBYfCfKNPDUs92KjXXdtCz2",
  "key12": "4WXue9yx1Vk5abGjZgGr3dHLLu6Z3NVK5G4fnGPsKtEJEq3zxWtNmaacbMWAhWRRvapWvwXW6qKRV2JNs2LiaHQF",
  "key13": "5JCnUkRuFxcP1LnVVfZmYbg5nkdG28Sy6HXpxzUe695yQEnLe38PPe3RYUVv4S3HHVFNc4DdrPKUGwHsfXrahWy1",
  "key14": "5YHs1Mfq8ZENUkRxppk97KrH1j74u9YK5qwuNCY6aBP5Etf3EEPyLbBiyyp4DDHeGxfBWARMUqSdJ6Duh8cyNWT3",
  "key15": "31teWsu3wDavRgpyL1U9vKK7xQ2U1Nj4SAR67Uwt2DQPvjZdDSPqq3d4LhYt9EJfbyfzM8zGAG7CDTQptF7jnWVB",
  "key16": "4dfFhZHFUASUmYmcYtj1Y9RkufLX4J4uNJdQAHkTfv4bLWPNpzrPy6fFabs5TW6EuWqZKXBXhf1s5ZDuu1phY3SQ",
  "key17": "5GAewbbtGvdTwr1c6wCe8qvNZGtfoyXfUQdgjSxZbKPnivLp2HVfTc9TRgkSqhAjhHDxP5zDRNvfFnij7Po7tAfZ",
  "key18": "2syt3irNcs7YHhvNxhXU9UNnRHQ5Vye72fmFoXMShPWGBArr6KeRnShHzFLjnCSUd77fRYT5gWgyR15dhaYH7zPZ",
  "key19": "5fxLT963ZaZ8Wy3kCLK12zDxhHBD9CvHSzXQCSG5jDDeEVW6QU3HAJZ3f3mjMWkTNLQ1PXKCXaW6do5iuRxmXwQs",
  "key20": "FU7YtMCUjEP6j6AcazKoSNKKE8fuGJjDxhfAyKBd2YyRTYmgayjzPt1LSN178TGen73Xv2MxrUrqmrUggE9JMjS",
  "key21": "Y37QKpWZppe9JHaMVREGBasczvAyaDytovu1aCtNEWKfwoKP2cgZRm9rC1tRTRXrFutNSWmkonJx8D5uoZ5zVUX",
  "key22": "3Z6wFaSobG1kmwmxy24UgMPtWF1cg6fbdppt89ZvUJVXA4fYYQVA5ChUGrZmNXdDEXqkRTJhWuBLCWrZ78mKrsmd",
  "key23": "fCLApV2hY1zt5bCp1NZgG3B6Mguc968v9mQMPeskqj5kGzvDzu2wn2gk7iEgfJnkhTNiPHtw3kan7uH37KaR2xZ",
  "key24": "2r7Yokty9WXZRCvmekxR9Lzao98Tg6CpZjW1MDqMk4awStb8NaT8Z74LSmyu9px1zTk7MEcS1jChezgjZf75gCrD",
  "key25": "p527RqxVZ8J6ujvFnig8Tm2owKFMR3vCJPdnRekJi9J1CVorG9we9zT8zyNLQ4E1RUDa8XoVdgsBeQE4p9c25uh",
  "key26": "2u8EjNrkM4SRTuL969TwvMMNLrfwghbh26QLS2bVKbFNYzSF6Kg1u4U2GmKkLFPmoSr1hGpyCk4NSzRMchbiDCqw",
  "key27": "5Bap62ydGFMc9JZ2iLFiPUjj4p5UpnKtGvhbuHtWEmwkChWSTbu81rBmNV6vCkjCuVuXk8nHVMMzT7i771LpR9Hh",
  "key28": "2Rivqov1YjK6iw4UM4fKgbAMAmmVfbMLM2u19uNHaEu41uLuvMMqdZm78bf8XZDWVmJMkwL34gV5WMfJ1QXXAoK9",
  "key29": "4sH3zKe4zE73vMNHn8snT1o4CX5N8mKfgiijni8BZfpAUDVJVqodNqy8Wu7cBwrwisJdzvcVvjYB59g547DEyDhf",
  "key30": "5FioaLnPxE6p79v63e4z3VisgUnwzrWccA466dodikEi4SLUHtaK2Xes45Kj59iK8yM5ZgPY9PpvT3qQ2Evzp5Eo",
  "key31": "2jFgrZgN6uPtbv9t5Bn6pd7vHp87e4LxaMs7dd47fLKnRJ1jk48wppXqxsnBooGVTaTmHRnZH1CD6q1JxVQmy8iR",
  "key32": "wE19PovaAs2LGc8xZub3Ad4kGoxWran7hqChKbyPgYnHpaXQN5hkjg73szZhZnQNcei5JptDrNCNvx9XZSPPegK",
  "key33": "2FCqqFdSTLVQkShSm2khum3qiS6HTVPhG4d9p5GUmbZJA9jRAxrAeHfseDq5JDon1XDEtaMRMDuR6f9HEeTh29Uk",
  "key34": "32h4gLwXeydvSnBmmb3BUk8dtKiT234NiwuBXdVsJFCSZ8PbTw9jTheywyEE5Pxrumi2jRQ6Xq7K7QsG64c5KKVM",
  "key35": "w9AmRLggAoxoXHhg4B96HHLSUFV6CHCn6yw11WQmCjVdAC7AZbRUhrSeifSUrDYmkSe1FaFNR7xdhHS2M3YqeiS",
  "key36": "5LjET8HgQpeN6L2RCNdoqNQpQzP5Z9hKgvXusCo69ojm6hjATq738jydgUF2B426JupjLanagp3N4iPiFc5xFSmu",
  "key37": "2tnbpHMcn5s3Bw894CFjqwmJCb8AdCmCxMKQuzdDJSGJgYiZLuxz6Q576tUZg7FAfGgkQm6a13i2Rprw6Tcv17PU"
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
