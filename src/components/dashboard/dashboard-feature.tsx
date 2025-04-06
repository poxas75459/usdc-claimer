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
    "5zdHZT5a5wKHdKsHQmdd6EUjKfBGsH44HMojN8oyYEru6QnRLzS3uP8n62DB7i8in33aL6xiq5qk5vgarzhHbvyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XUkvt8cAyGz2VYM5xrSPiRjCPMWaKtB1HfhmYF2FvhLz5pBWEJ1iJQdwpwAb1aGK9ootWRRe7h2Do8SCHWtuBdc",
  "key1": "5oUP8JviePCLM6Y1B9Mr5qxLGRefm2iStcivQvSqud6CE4sWUHdTqbR4XLuLcor4xwqypd5LkTkrsf1F1WANpEbx",
  "key2": "3CQFU7Fh3vJTo3gkJdWwC3FR4noS3ngbnsAhMNzuXQtWFJcKkcKPJr7BAZeTQh5v77r8S1XWF8agBuo5UBRHov6Q",
  "key3": "XNk9SU3buySk7Q1t6PQBMrRrqwGt431eegdspRzptLeexpcZRnkRxqwzGNSGvknMVdxjv118cLNBrtA9ebxmKdV",
  "key4": "5SVBxCz8vZcg6edsGcmJm5YZt6xxoLiB7s91Yecq8XgUtVNYhuayxpnhTVzk6NBaHX7MhJ8FcRFENm8QTjN6UMxf",
  "key5": "4VWLjAvuLkHsFf8z72d9LsTDzXthd1auEb3MJyS9tXB6TjoVkhG46He1RLjtN4ZtwcPBi267XWwTVTyzc18bB11E",
  "key6": "3eZ7udsay5mD7L3Fk54ABoX5KLg2GeyqmnmE3CFCXEhqFfm6NnvpX1JQuhKbN8J9TZErJnPnWpNitQ3on1iYDfFN",
  "key7": "4wY55LEY1dWMBfUdyvy9mqLfL476xG54ZgJSRf4pAmyNnUS76jdPZgK1jVRSnt71x3ZDkizdg76tmXas4ukW1GcC",
  "key8": "5xUwmyJ5keT9hciVpCH55t9iVU928Uc6VyL4MPMPQGm6fGAQcL1Z7h1y8GtP15rft8csX6J84mEu91xUsC22pKB4",
  "key9": "2ZUogJnjvnksjDMkU1Exa3wxatB2WpSfQ1WKQXY9TiqRjkG67x1mbtV8SBqmKTpv9mbAnNVVjy19AxS5czCvXt1H",
  "key10": "62iNEqrXFs5id7Su6PMN8WLHFqqLUy3VtHQBr6zJf6QXEjSXc6Atyq7RYfBbrbBNpXqKk584SmcuA5iB1pysPkhY",
  "key11": "2e51S3iffHnWiBr7mURCbVZfWxdxwKRkVA9RHJ3ASae8WWhiuUhkkofGKMx3xJc4ZQXSYSuADdHxYJYc6ZUyi12h",
  "key12": "5UJ5JDpK3BYkCpW53nBHu3oPci5mAdDEdcMYqZ1JyRX38YAmkzPNxA7iTwBZHiL2MpzJ5esThkF7Xv7yKEK36E1B",
  "key13": "2uH7wjuMvjuPLZzMT2Sr1DZuyc56dpRV74x7VJ8mZBZoKFRVWYUXRTHHDCaFpn4vqtDNLsLxp21LLMKGFXzieq4J",
  "key14": "zYzMvdHHFsqQFKEWFXU3SAA7fJ1MUx1X4o5EKSpHX45ZJCrduhHLyTAKYq1d7YGvwU9rNiazvXprciYRi2BBqse",
  "key15": "4EdHaHkuVe2we6JPmPoG5e3ca2dS8DeFU1iPvgcdEVDPi2QkKzmz4Z7hZEsu2frYaDNmScZqQs35tTDq3TAwUhjs",
  "key16": "ACH5PyGmQXsPGGigJEtiNjAy26CoQQNMEDMScRK4nANNynyRFNhYEbnKPyucGHrS7qh4J65ocmY46HhThNKyMKT",
  "key17": "4sggy594ZLaLDrisD6AzyrSdkTjh1V1wnAynUikpsyeYnYLHLf7Qt7fXkT1F6kN6aTHVqkFBqbFkUg4fmEawm1RB",
  "key18": "41Y679UTEw8CC3fbAL6kNspceaZyqCyGsuWhc6hVVZD18jLssvQmxzXrZG2zLt56MmCTTPN5j4tD2VR4aRzr4gVX",
  "key19": "5agJspeWhurgESLM7urrUP4sbUPNdf5dzicFP78qJQzjUVECJ3Pf29MnyD1EjXqzMez7YbHDidh414Bc5DaEeewG",
  "key20": "2A34SuU1P2pdaVBr2fcA26V6E9KZiBAkuhj697G4m876mFtN7bJMJCozpbXxMegTth38kVS8sA3p2BUHYALeQcNd",
  "key21": "2G21KXgaibKey5Bf5k9nuprr44s14zAmwNcVhNikNtSQknwTEadtq9oZrusUAzLxvr2VtFyGoxBpSwAwUncbD18R",
  "key22": "3yirjE7JukusxFzmF3ZTNBeBULbZoYtCcP9r1xTqn3DvmfyrN9NLTxbaHHkvdvwHurNaquzoy1r7PLqLEH5WHbLe",
  "key23": "pPGwDP29fHAWBcH5V9Ksyk6UaUGN2HSaGFz9SSXm1aRgJKYbMzsksbBJZQmARrAktEwUV37JEmcbiDFzHPTLSfW",
  "key24": "5iMesr3S6hGSioR42LDahS6uAYd7QHMpuLeogv5BAgo9wEqB7H8x64Lz2eA1bCWGeCWaZNG8Lfhq5bNdxfURh2WV",
  "key25": "64HLBp3HuEob7bWSg6nodmkBUfYtQkhanp13ruYvDCrUiBW2L3wTbPBQhf6Mui57E9NNCKmjWPG4K29u4Jig31yX",
  "key26": "3fDaWKfsWh7dc1CHjiyT8GB28vfzouAbqXZ7xUfcnAuEQEtkr5RLuqGZG9BAtWBLJJVhrXAsRbiA2kfFxsuau4pb",
  "key27": "2ws9m2TMtGd7wwg1CPk6X9zwWLmudXoY7AAhUg8Adh5t32bUxpF7craRqpSxnDAQpjgCSFHSyZ5CGi8A4tR596N4",
  "key28": "2GV9Wo98pEf3sX9iJVDX5Qdw8Lp6dX96xk1roayGS8Fxv8iku7joVG41u17Vcz9RADQoNqAQSfWcgSWBevx2gKGa",
  "key29": "2BUWuw8qNcoW7qJPavBsKxjH5coAvts9ebr9XremWBZSo7sdZ24CthWp1zfiwzh5W7E9VSEfaG5U2wgzSpz1vfJm",
  "key30": "ghMg6Vtgd5oDJyAkAbofofPpgyaWY8jvZYM3SVhmLiZPJo3EaHmwEKJ37heWasP6M5XC8CfSnoZnkjEoXKxyoJf",
  "key31": "5Z8qMkN4SytfYGwH5nvG8hqPJKnZUmKkz5i4A5girPwp7fxLyQq4j76L5TcL71SZUVWJKUPBztYh4cZVr89pmE8F",
  "key32": "qUmLn8cbGzbZsvswCRgy5xDt2Kxpok1Fc6h3AuCAqSTgsNuFZsB3ixTKME663k31WhCZRJoLgd9R1y5wkJhoFNk",
  "key33": "3cMY4G1UDTuZiyLYrjdxkatJgzRtFmQE9qRSPsawUM54yHKeqmobWUVJTiyjqPeZF9ZUSqqpQh6xfZ2Q5SskJg97",
  "key34": "4EWy1i2fKPoTQeeqDvNgoFjAje7iX8oJfM77BzJb6GRibAHXYKyfekqasmXLNe8aaBhjPevgBvSDKuyfJwgJm3ir",
  "key35": "3o1sN7FgWP1FpbQshoBbcRUX78T1u92rBwtwAwGNm7JdqwWb2ZPfWmh3L5EYwzQDr3UCDp4Dy2Q93q2wCuoLjbSM",
  "key36": "49nmkfMfuKoDX7uR5KzLmuijWFUEvC4qU14SxRkr1GyzexhuAhgDWMJZWCGLrNJR5zWx5wt8oJm7LtzsM1mLBpTZ",
  "key37": "Bo8bv8xfcmrnuPQGHyMmxKEgX4NgK4TfnsieVi33YohRjLJErasxsaorEvSgeesyRaUs5KT4seYuaydjKu9d7Jy"
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
