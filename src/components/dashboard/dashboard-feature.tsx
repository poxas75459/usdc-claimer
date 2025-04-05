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
    "65o1bxVcZbaSCQS8rvxTJeMt8f5ciMPGXdLfouG3uWNdjNmQSJ2K4uutUzc4Vzd6PtYM6TFVUMAb3sMnWr5mHZo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oGyJYbmSjE9rEP3wFXmab6cpSLwvpbn31qtjbPCyu1L11ig6C86D7GiYQf4dUaeCLDGoM4PX79gro5ggeQGPrqK",
  "key1": "3w6mthfJn2Hez5V9Y34Xb1As8G1REmx9HV9bMw4FTj6rYpJF8s3oxnQLZiKYgW86d2j1UpGEjvaoRPXz3bDKyXcQ",
  "key2": "3CuiTt6eteTuy1qRLKgiWpvwy2k7EEMjQQ5UthgmwaDWuVZoxKXvJ9kn4tfM3oCxaJUEPZUB6LnMgQ9ovF5reDSc",
  "key3": "TcTkDGvVyXGFMqdqENCaDTtThCBmMjayLBuPV7dHZErdGGpvDkRSYNw22FW4MjYaV9WFr1kF1LrTPCeRCzxzW72",
  "key4": "4Ls82c7up3iHP9KMF6uDw8MntqqJXn4n7ivWbcgDsLedPMUQgdA1hiJtM14NDtzN5FmkhPDzDLbEBnsNRGbQmXsu",
  "key5": "5iwoCoRKAd7xDq2FFEvKtvWDWmWzZUNCMxe4bPFCLaUns8h8nehATEyehyvqzFr2Yg355JagdaQxENuqcz9tb9Qi",
  "key6": "2N9n9zLBUCutpYPTei3DvDEU3VH1ChwoQ1eeauxSKye9TA3Lm4JKg8zZu7CQ4JSrLKJbCniY263ZjYtyTshuP4bk",
  "key7": "WhPYHrDgphLwPdHaS5HP3HqMLoafTc1C3izPrPVa2kxHX38ymfcgtkxFLJVqHFhMpbuNCr5gS5q468KqUNxGNY8",
  "key8": "3yqZm9QfxmctGC9wJphfcNTk2V5f6bm49QeK6K3MbSUutUgQJHNbpBFW3NuvxyWTqRgDmNMQunEL6iCzg6fAar8U",
  "key9": "2HRu1JSrECAaMyHee6euvLuA6vLX3vauuE9VcLdpaBUpNi9QogT6cASuuMrezNH3ygoN5aZ9SiqpA43FxTb3CGMj",
  "key10": "4S9DChFkRpazHHCr48Haw7XxH5dhzCnTasAQR4J59Ftz7GModBJfEAM4JrwA9UnL8pcTiQjDxKEM5fjETYeKeqLn",
  "key11": "27Z54T3TNwxW9dyth2UiroiGdPBwbJmKKCLJcAfSV4JiU21dG2FsZUNKmtoFcAmS33grzVHeNnqAUPqJwg2MQFrf",
  "key12": "5KVxfRjDApeGkvbREdhmQmQ5xUQQXQey7pt1R778PVJ5B7KH9uEe3sts58MWqn25tLX2Sg1k5aJYWAfZH5CeWe59",
  "key13": "3QMmrdhxRtknbojDD535dheGe659VjeFozyVLPjdGfumRhCzHAG3xSwz2FQndCsfAZxTcvsPS1JT4fMzxruY7LJd",
  "key14": "5YjyFbavYwpzuqJ4o57Pc4EGBpXw6Mr3cG3igP6DWJHGRnFyAhLkRTkkt4PhNfidRmuh2vaZ7du9GqG2nyZUEBPE",
  "key15": "246Nfo95ydkcvhMv3fgnPNJ48eErXYRnrrskuUovB6DiB7hTF48Xeyu5hDdznDDKKUNTfJXz8zLZrMTWEP2wo4UP",
  "key16": "2RwTWnwzAN21THnzysdEnbm4Javyx4YX64fP8qUqp9H1Tvnz5u3419PcH85VMxryPsS1mBo5V7ebfaYJrVGkzm7w",
  "key17": "62famLHm24YAZa7zz5iJedvBDTiLwj7uSVeFpxMNJk8E9C8MTnh7z2SEQV2TcrVeChGtF9HaFwFv5FcwaxG8YBgM",
  "key18": "5WRZxzo4gxiXsB9ePhqH3pkftaDpTnkFc9Mfc7yGQWfdfdMME6PiqDWcbJZniKnGE7DgC3DwpA9EZtWFhYAdeQft",
  "key19": "3pvMjShX2TEhhaQXAnJp239iFox6rdGx8mUnxzw5mSffSvkYbbQscbS6LC3KobydABMSNfQPeF4SRXcRoDv1WAF",
  "key20": "qSRdis5Pjrrpf9t9CUntThtGtqdsAzGDRJsFJksrpbQfV5pKGFCrRV7mb4NoAS92mjHyksWaa2q1uTfjcLjtP3c",
  "key21": "4454pFRy1ZVDYsbyCaWSaz8HwbYrecL6FVj3WqM6Wv8SbiwhucTEKyj1jE8D9QPBdTftRqHYv4vpdow13bM8fvCy",
  "key22": "42Nq11FRhvVVkwVMwzxNf9QNzEYGFFky1EZs7Ux8yER1ACixnuqWXwsNWPa2mo34T6drrPdgdqeiCVCuKUQ8V8T8",
  "key23": "4SEBE8qAY9b3iAs7jjVC3dav9mTEFaypUBCCDe2AFMpT9X9addEjNniBwU1RuFCCjikSEqpqT8XVeDfNS37pCDFz",
  "key24": "23sRH7USamWVJDt73q8Bfy4tV4NhLpMz5YgrfLXruJh5WbF2mXdk6j1uPArr8DwotBZv54FJ2JCPz2EgLz2aY3JT",
  "key25": "3HHqrKHd9gQQRVHaYD2HenS3n5BXL9BDTKfLDhcwFfheaLEmrSYLrpRbEJcVrs2hYunZPWMjE4kqZywQcppTVJfA",
  "key26": "4JpbQCSC7A19cQQqJ5M87pydhvnsfznJNf9tZYZ69LTYR6cTJGjmNBbwHU2Vh14E3HQh4CyCYoJZ4RdfaMoP12F4",
  "key27": "2v4b3RPzyq78s1LKCsVPJgBzYwgxeSHckPTBJ1PC1bexHbwcsFSXT3GNv4bSBebUUh4o9ceYhCubTtzDRVzdResc",
  "key28": "44Z5PK4VZ2vTjv1DPEziZKNMavg5FcBGGkXodVTLe66Pbd9JWSJnEBrnd3oTdDvtpsnxVPJhmHrFyavDo68Ammcw",
  "key29": "2T7iSXZ6gtJhtMXC83Nk3rk7sfdXsbRs2AQKfJRYb6sWjZoKeWrLG2M3iVmorkE56kxoLkgs6x7vdLM1YTzwgLva",
  "key30": "3QddeJeFNPuvSZ1i2NJ3yA8x7Kb4WSXsq93W61e55qdn3wKDdxmdsdnWxjjX84uoKNz7946hHWTu6RdEuiCkLMTy",
  "key31": "2Ei9szJjVkqU7vhuiGsJ6ZtCmPBoQEzfZTew9Ds8KR1Xqx5X1HsQgW3bqwW1nstWL2LtTeFH8FvgJZReLtZeWzyt",
  "key32": "E1cJgd5nMr2wzBSdxmFUDH8FoqxAfVBTSs6Zyo7T7WTBhbJzCkKqfhWREMb8i6V3aa7mZYPSzeCWQhqQ4TY99fG",
  "key33": "4UCewCCiz2xWzRFb6XGKH8SHzrDRo9wTkckJKDCVpsezaXRRV3X7q388LYBdN1BCK9ure5LKfKfQstoff3ZixVRR",
  "key34": "5gLg3dD15vw5hVn4VKNSRCZprvL3xRSzu169toHhAfxEisQBeWw6bgfhixtNJNUSX63QRhYMEXMKZ8Sk9TTswLPy",
  "key35": "3LnYdqqnfwA4vksucoK3VtJAJU2YbHyfQ2eUqQwPkJmVDLKm3iwMkwSD1XWgGuSXcoi22596FdoPwndn6MvRX22Q",
  "key36": "2W3VZaAj7uRiGyhrvTeqNH51nL69TV1AJ95RLxdDycfh26QhuJNf6ZAHLA6sEjaimMdVoRycPUzFtpZ7r6TuhyQB",
  "key37": "2Rx95qXzZ4UaVbjJSbW57qdXA4RrWrmNq7iCiT7eMAW4R2ZQGs62X6MN9gJwQeGdPENWxD9qpnKWRzChyq2xcKF5",
  "key38": "4TYSn8WPhuuNAyEPSkhKdr2DJaCwpxYDaA98Dy5m7jZQbv3hZQJGugwUw7QZ2x5fZSRWYmBGAubPjnSD78FFsdMa",
  "key39": "3USHnYEAX54TnU5iUyFEkiD3Hv65XKo52wePcWix7YNTxBXGfzNWXBapEpeKVv5nwdL8dLbP3QBHBRXjYQxuKkmQ",
  "key40": "31LBQgU8vsJR8nbRgLLZcs7RdsQ1CDzcRvq7iVd78HsZrjtLJJHXKNrpZcbfMAE226xFr28NfRka9hGBfgRnptG"
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
