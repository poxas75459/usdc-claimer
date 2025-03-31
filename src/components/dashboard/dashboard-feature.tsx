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
    "37LQnJWpsKpq9EKJ1fwhJzyENNsV8opNecVzkseSurJjjHxRt613Dn69DRvpxPCM9L6WGJQstv48u3vd2q1bxRHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZiofNsczUcqH5PXfCxFcPQmRsp8Kr6PYvH9gzTqyU9Hj7XiqSyNx8rWehRP5BfUHQkp7MwXMHrGEdtd17q945yV",
  "key1": "2ULqsGKYUr6faPEwV4iWPnAwunxX6aaS3Rj5hWsB5pWYMMiDiEnX26X1GsyDBdAuJNRaNijJ6LU7iZ8VeUQyvyMa",
  "key2": "2sQuWQdZbVwAsM9N3FFQ9fHi7GrPtH2YznadFAzo4er234ipzwfwmsHK3uHztg4DFNN85AqdypaS224U4DXpe9Zi",
  "key3": "4hGbW1cSgmWpYuEbKdXcQBHPyve1ynLgPDxHSCGaSSEP3hqhuBuRpvVBKoGnhRh7Gm18RgCNsoV3fTXFVJ2cTUBM",
  "key4": "556unQY5vVtFyP2vHsm7UqgrHFsq5CGAuozjXSZdCM5LNwarbBRXKi41LcSKNubRNNxSquSiS6qXA8EzN1cB6CmG",
  "key5": "6AS8FQHRiu7tQ53qs1E9f4XJeXqfkqpWaYyqm5Wie9JgnyoDFZL9Kd4vknxbfKM82st3hbYGpUK6DhFS6mfW38f",
  "key6": "269Xp8NatymsZbEBswgroZYK4kvuMq93HRdUSqhHjTP9QPJiPEr8C4QxWfB8N6rjAKkhHH7xXEBtTx2LczURaXxX",
  "key7": "4y8yJW9QFa6VzHCywnmeEmxh5ckY35PmUMPGj2eAVVvNvWbcqv1TGTVambJ6CuGPF6fi4ods1WeHgmoL364yFKAL",
  "key8": "3G9yThTuADbwzTEcRAwZ7zRSLo5QvSfAAzhEEupKFajWmzSBAC5PwVWEXbUwcuzZB2YmMFJrdowtFjjgXQmAG6FY",
  "key9": "46YqNvMnSc4z1dzaZA6W4BkXrBACATEWK9pB39FHhd3BUpQ2RVog3AHckqvNh2ujPRE9zaHZBJMJqosZJ3vzF4Mp",
  "key10": "4YM7NtqC1YPzrNrpvLdqE3RwSt4kDbfkJca11GmYKaSxdUNFrGVdcmkGdFKSc2thvzvwuazStfMHT4r7d2FFdYVt",
  "key11": "3JtbxwwhzsbtHxyHDd7636f7zQLG9BAXnVwMH7wgqrHr1YMWdVYpHxHb2NAdPLivGR3aLRtNSP9x294dbw9x1sMn",
  "key12": "4ubwQukMPPY3wVtnuAV8DtticoMmpvUzFMia5zeSo3aqoq4sTcBRDi33TP2Et7Cqt2yW3adj97DbnquiAYcnzZCZ",
  "key13": "34KexQJ7vFqRCoWGXXoSPM95sitomg8u9fP97JqdF6r8jvkACUX7sNZL9CLcHTVPcCtDsY61YRY4bbMRZLykgxpQ",
  "key14": "2cRkdqvMeeQkoiAqbSN2RH9juCbRANkDwvrQytEUuHvtFVWMYKQiBuNyGNeVAJQckPGkug3bS7JPXrpuvcvdtBqy",
  "key15": "5vRTZmyaAiw4wJ1ZK7sMFjJktCLRtZNZ98FTbnqwAUowd59LdPj5gCtJYERJQ55L1W3RSYbYdWMfPig2RCtsqNR",
  "key16": "33izUMLydevty38WafKiit7guStKZyHq7GvtwZwFyP8bpmpeAPFE6ZPEukLGA9PoPGjU4Mz8HEUmvA98GGDPaYMZ",
  "key17": "523jRpWrCgiYpB29j5nV2QymktGj6nGczMyC9s9Z9zu5Kq4YrGijQDpsKirb4RVUwvphy7CbBabFvUddZ88Ww8qz",
  "key18": "5L4rD4gA7qDcUf2TfjCYWmg9rojoboMAV6GvrTAUaTR1MFrasSaYipHttJWgUhS48ZQh4MXZRZAcKXRYA3BbfcBY",
  "key19": "2Q8EH79bh31Swn7kmCFXCivRCGTk6V1hykZ2WpxkiVanC2MEdeZ2ok8hPhjGHMGQheDdQ5TefBRwHdeHwz3uxsVe",
  "key20": "3Cf5F1cJN35XxCuG1ESAU1S32jxTkW54NCB3q2Z9FeQ3RCrE14x7Tp7L6rGvQw5reAAAcaE5Y7TEKGj6mnkQg3Lg",
  "key21": "3eM1EDiVGNJ1PxcdHY8RfZQQb3B2H1Yz8vK2UAXwoLEyA29tqH22fgJuHB1jyudg8GyHca6ySJM3whgwMUjLoqDz",
  "key22": "3p3CQ3JJFKKLb24VXdQxx3GBuqU289jno2dKX8jfekh2PB34eGRgKhYTRj9Lzv6ccTQnNBb4D69xKX5qMLkFRHg",
  "key23": "28dAR9pUr8Eb3kUX2GyF5yRuAPjjVPGVP1ZDTJXRH57mxn3euhk1BhrUwQKXyfRusB1VcgpjVPqM1pdh3thovZed",
  "key24": "38xRVAnotVU9wjgiJH8z6tFE5V1dCr5DBMj78PMGCibFbayP46V4qQ7jhBhcdNkC5UeW5eW5cNvucWxQ4LYpHy7g",
  "key25": "3s5REfTGqv7PoTSGddnckqMJFgnDapYSfoShPkXQB7T8dXS6DT5Y3JwVTxWXw3WkUSJnyninkHgbHCRU86kbWsY2",
  "key26": "4ZAXRG1z5nZCsea2RJWzFSBthEpzENmArR48BGK5GYa3D5XriQAkvwaQHP8y5zLgS1SbSGBz8DRZ4K4R4B24FRSQ",
  "key27": "5Xy7M5BfNFBn6WeRESG3ufbn6YSZvicAzxZKWPhRZMGDpaLWNziMfpeUAfuiCtiAA4vyhB2Jch7YmPmMbx5DBfHe",
  "key28": "3esiDZBxPQ3eiZhTKBv8eqQzxQMqK2zjWCjHuVEFt2h1hLPcffb4ggBnmm9js92Es4H5pa8LHfWHgWWkFHG9fmaT",
  "key29": "5zsik7gC2gXQKLoYMeTJ4oveqzfF1uV3sBuT46dNLa4kRgYXE633G9pkzp3hhLoFkxExoMicRZ2bqENG3Jxti1wV",
  "key30": "2hWiCfaE6wMcJxach9BBf2iZ9y45aRHGkjqMVmQUe4aG9PnxZ7JkiTLkncDEAnYfUpQi6nnE4ySBieTSZFwXkNjb",
  "key31": "4xm9CQM43uvGbxrGznUnQxFQ1GY9vW1KgW96btE8V69bgsrFKp6Kf3vPP1cVz2kNdFLroXHrArmeSSbUxdcRu1cX",
  "key32": "2kTmNJTBxmLTnH1ZiqaSGbWugwJBRQy2WW6rhMgdqQkHq91CmScTrBvFgiZgfgnCB7jTfHbbkbJVJujWdX4Q3AV8",
  "key33": "2aXsvkMseDY54qgxB5uAzfX6zaviPYydLnVxVuhcqRhhsG72gYAHqKy1w12whQP7YXCnmzsEEb32Fi3V4brg7Lpo",
  "key34": "67k7DMXpyzdQ1ETPiaukbU2dySzBu53gxozmPrp3wkz26B3Ucu3MkUoVi5eq8FtX2fW3E3brh5m2N415D4QUL8K1",
  "key35": "zhB2LH6ZdK352iDZ6QJF82rC9sBrQFuq2eCir3GHQkq2v9gsCNGucxjeiyrL99AYh3DVfmKEiXvEoRVabQWKiUz",
  "key36": "2eHQHHNmqBy7ug69Rd3KMhPDG1Mu5qmYJ2n7VRnrof4JBmgXfFwZS9pq7Zg9RibthEEspqv22NwBdSJ7svQHfx4z",
  "key37": "yCK5aHCkCzgcGjELSF5uqEmWDABmKPNS9N4LEzau6J1e5NCLC6hTzSdMDmwKSuhYeq9TifRu12eNQPmQwxdiK31",
  "key38": "5gCnyzQuHmkoVUyzFR3dTc4uQZj19Pwjr1jwcKNy42TLmuEDmqGpFEQXCsSdrGLdEPmPZF1MV8a1rzQWmUifwChr",
  "key39": "4QRVFpLybxD46r4W8JDsxqAEF4pRymyjwivL2SdA4qcWCN3RmNGFYBnZJpBB76WEEz65uSP8yTnJxQBZsGH7TZvq",
  "key40": "5K7UUeAskxmcxciGuZhyoQMV7tHsvArkSYpLSXh2ZC8tHM29VZuKG4Kdnr4cXaYUHaWdLYtyRFqkUo2dbkpb3oxp"
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
