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
    "jUAaEBiJRKVBupxAAQBC9iWvW9qPZuvD5PfguU5wm3dhnseiusPTPFtdeh3Ccmh5opTRk4DypWjNMJ8T466xtom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pcXzw9R2GjjuyL7yTMdhsgzeswUsjJwrbWBnhGbwaMfg6g2cKw2WmYv8pLLbWjanYASFikES54zt7mtQDz5Ffnf",
  "key1": "2AN83KVwi7rQRw51Ly9PqtKjpMjbdiBg4BvcrSg45tSFbrUZ91gTRjz1dvb5RpaBUru64t9f1MDnnQunJaPJr7Lw",
  "key2": "7xBMsWyVcEtXUczANgywGgSmQ2uUtNJYqEztJXLtBinU6Qk4YcZ6YEjQVeLiX8vcYWM4k6PwytFnC8drebC5wqd",
  "key3": "5u8BHdMu6t8rE4CC5qqvg1G8sLmdbT8ZxQEoMySMsyDNPDX9Lb1Eu7akPgSop52XtWaV74qohKwFZdtZ9XCBi8aB",
  "key4": "3141oWBqMvtHpQrQb2e44EoU4Ncfa7F9rTau9JF4DB1LEgAmACvjduJzDkWSZ6wG7RA17tjeQKLHQHdvtuwCQrtb",
  "key5": "53k6Sjk6BUS22dmhMSbYNB21sfNfHUmfb4j5LKetjDm3ViPwuDz8kAU1mdsCfCxdsdaYw1CuFw5kvKsrCVR28XJm",
  "key6": "4yd3bY2uRkGcwW3XKvfvw2HC11KPYpJyWbowP827VgRAaaGeezM6YPm2UMr3xstBqZp2zAExDwmD3HbDxMSKoTaL",
  "key7": "55fS5txU6qrzjwr3VynYWdk2NFVRFULY9CZP3gsZUBwapsQdEEWnuWgeXM2V423LWeqF3gJKcDywgMBkEWaA3wxs",
  "key8": "4v3ZfpZgKi5NTDxQxUEsoQ2LtAzXq9RzSF7qZPLFzb7Mkv1LRYB7PEdtP9spxdBDC9VJLPUviLnAfoWDgaBqgHg6",
  "key9": "5VEsiArArvNCX5jC3q7xtWNmDwv9bByjQsUqf4SMJW2wbwMdWxNKc95DwippZK7L6GPhsVc4VwHLxCn4winXComm",
  "key10": "3aNeMG7hEfeAwLBxBhGrR2YpwARQk3TLmXENCvteUEpCT3khYgzhob1rA54Fv4jgcHP1CAZFhkJ1RGWKBw1Tukmp",
  "key11": "3QirHzNJtTCW6Lkn3L2t1pvQxbwBJqM5LhtuKvHvd2G2h3iJd9KZKrNEJ33Nugag4GnHs1aorrnYYGwBFTtMT57M",
  "key12": "mP6qoF9UXmfRYbt2JiuAG9GjjMi2Pxt3oL5Kxv3jQg72A7PQD5eGmKL1JgNDWzNTcVJ54h7YM41Mx6vn6uYsRPb",
  "key13": "5mThLR7KXKtD7B9z55UUAPBBEjg34kLaTBa9XEup3DxGsLk81qpNXgsJNHHRtooCjEY8GDhYLUAghNmEMR68QSw1",
  "key14": "3HJ9VT37CumxW7byiu4pvSs4XU9XUZCtQmxUxbUTDQ5ZfAdKNz36SpG2ddtHFimsR4UQfKQWFxvXYMEwJFKS7tnN",
  "key15": "4HbGjsNnT3NrHFsANUmbhxooQ3gzwgz1fxMHqv75oGNEpJDcyc7WPJeDik43e8GnZ9PXTMYbabZE8CJfysg5oos6",
  "key16": "4rt2RL1tWjwRqvaGLn8H7uoZUTR1zfG4J7EKrUygP27LCJ8r9BCNMqsRfACZQw3KAehrN8ckoFKYLBndhSLx7Zwv",
  "key17": "5avXPgDupvM2j2yydsRbg6eFpLdcyhc4Fp8V8UJdFjEW42pPpTVJBU8HL9LuvkcFcXiG5H6GU9CFp4GoRRtW5qi5",
  "key18": "5m7w8ZfTubpEREyLK6Qw6qPuRyuE9exfNbwKavrJRsCw5bRmUbGUKsJDtpUHrnBBBed9ox4bw94bPxfNESVuarUJ",
  "key19": "5b3hywD89S9vRCDJb17QgjzSXXx8bgLtBK89BJK6AQkCzSbZKHoy4qELP25CbQzL2Z45vvA2KSrJCR7RHjC83Kne",
  "key20": "2PcxMiSRggnvDePNWGno3U4yije8k6KetseN8fVHrwmHaN4mF2HsUFfpwvkdaHqRstbbsMrQC49vwHbEu3b3sqaA",
  "key21": "3D8TwUXBHi5gDfvagdfrTJWUr2s25UjMYEbTp5r49G3aHbjDM9exKr1ZUBrQvnJQqZqVbhvyQ1zKDyjT1xixN7cM",
  "key22": "4krR9S9jVJEr8jNP2yhuZHt6rA8MbwLBpcmkHZEAujpW76uvopuzkE4A3u5fnWtiSFDTedDpPzxjYzoiZPPN7NDw",
  "key23": "4coYPuHajsVJixRv4kC93fZA54FXW35eWbLyzS2EqND6Dfe5vJfd7kaeYV1JwMwxBuFT29XWXsa2s8Lk9CUUGWHh",
  "key24": "3Uy2sAtU9KRRBRweJ5nddejm7zHCgn4EX2YPSYiuCFUQQhvAjZTy7feZAXj3hL3J1LE5avbVWduxLckcwE5eZNij",
  "key25": "5Ct1kyDxTVbYJ3fBpxavAS4DEnhuz6iKgddyGwoVYioGqct5njz4i88mruvGz21CEiFDGmVqh786644zX6Xnwqfn",
  "key26": "33stRFvURRWjmkkodZayJwUVNEQJzNDwPnzHWeuZtdRdvovvPxmGLrhgdvipuzBzbiDMag3bzc7upEmn5AuFKof5",
  "key27": "3gzG54fUxAEJTbrXeCcXgzTte1qTnB5M3EWjQByPKEZg2wPjfDk2RhQaH5t2c4MDv7SLMstr7KvHo1evnn3stips",
  "key28": "5axzEc84uVPmgSsVvoV2qVTshgZPRt9FzM1AL9JgrqNr79NgQ8KWegz49HVYzGnqQss7HHtKBPc49UF1AhctiJMA",
  "key29": "2h5XWdMRhnEs6y1fLaAt4ugufBESHS7VbJD2nqZhMcQEeRFYzUYxE2fUVrfMs2EtmZL8sLnezrBMVLsXrMAm2fLQ"
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
