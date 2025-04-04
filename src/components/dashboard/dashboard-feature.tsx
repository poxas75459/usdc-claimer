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
    "3NsBr5TSQ8Ye5HD3SdGHVfKaqoNBgR6hmo7BTRYAkQmccXwDbwTFXUq7x7STg4xaeJzss5b8xcZWrLmQM7y6H7m4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oyhCvyf3XrQumQW7Rgfphq9GVzZPdNtD8efP9Gc2E7yGNRKXq3GjSvmbWna9M9mGWb3hfXHEzgFtEq9YQFM8Mup",
  "key1": "9uNYJCGo8VkBYSopU1VkS2J1EfQz8o6ULsuDEquT4Y1FUV6mAYcSWACzh2MbXMg6AuqCy4Vj7SVSp8t3yUUjiqf",
  "key2": "5vwSgepgcgPjD9Hx4vn49Rt16EBsm6pezt1DEZdM5DUeFYzs74EPjCvhCJLLDCvg1hwH6MobuGf1sf3MXeczY33",
  "key3": "24M93MzSmwMJLcWWv4onXW7Ni3yB5sXiPGB2XL5wgpSNRZtD1bjfqTiv7TFRXLrzPws1iFT5MZDAW5x4ChdypSNL",
  "key4": "5cjwpiuifsHzAe9iXcRwKdsqDM8Y5SU4JoM4nj5YpYGA2PNuzVnwW8Ph8nPPcypBfcSY6XrYV1iHvgzsWDeCUsVP",
  "key5": "4ykXERJyfRUSaL5v8ho8Xh3i5S3WYcftaVsPusPiUU9P28RqzrJ2yvvs8f113P4odmCwsfugUooCDWQfUCTmkVuY",
  "key6": "3r7LAsyn4aWTrkLW1beGor9i1x5rKC6WYAttjd2DJbAyaKh1QdY9Yyg7LkLAdy7UJ4wdTaaXNcsnKc1CammVt2Z1",
  "key7": "2FbxUWYJ24UgPEe4cwSubwwodRtiRzVSgs5xrkQBbikXmnaYsTvE5JzGqrdE4LpVWEH5N4nzkbCzwxpiranepWhv",
  "key8": "366xCPKwC13NNGDYnMMbb6HcpytfHkX9BifGAAeW1ghDiYJR9nkgEbuvsEzkAR1QigKwaFzEMkowUAWYbbECMetH",
  "key9": "3GtLMXqUusE8YyaE5Pzvx15tsSqdvJFPAxCYuaBaTbP75HDbmpmCWYLFwJ231zcgiHr1UEbc1LeNKFCBTDbtZwpf",
  "key10": "2ZBwNiCPjbboMjAaVcmUzL2JwHyyoz6mHZhyNSnapL5e2SNzFVooC7Cy4YbzXgH6TXCZVu6zKu2GxhhLaszWcizX",
  "key11": "hpwvgepnjD1o5W9e6BUxaPFCh5RqKgVvb4kasxjD6A7feEGaxF9X6CW1bEZKtc3r2oGhAYhqcewMnYpyeZh4zzS",
  "key12": "2nsvqNF4c9EG59XMsBBqv2BTQShGQWWcwB1991kLmKs7m8C7ybrQ2gvnmEjRotH2cbeCeDfJQ3EHhHGoXXD9nyWf",
  "key13": "2MvA7MUAgLvZyNeswNfNE8SpkUbLu8stdh5otCjj5TuYxef7tZ8J9UEVnEDFWtisBngL2AP8NwsUpG99q5AfoPQC",
  "key14": "3soVb1222EcEfpectDkQ9W5gMtb88AanhLexJ2jm63qTmCKGUr2E7SWTsFGbk1QZsM8f5NrsSJyrGQ5LQwxSimrL",
  "key15": "TcCiB1KBu1VD2doGWduJWi5d9sugnHQPMFCjijzFrq1PP6Z1fqxPWGiwSHAfVXnUr7UBumFqgyn8B7FJSdxWKzE",
  "key16": "2DGiSXP9ZRJcbGc3EwQsQ8tmCW4WA7xvKczQwTH8pgCahSNNNbKpGuVwJog2R2Zhp9pQhStauuPRyBP4rT3YtLRV",
  "key17": "24GkPfNbmkAyQMMnmduUZcgXZBSrX5ZkEvXjQ8sdGHpQCgWjZyDWRJgNa6F6VRfnDai19CuabVj2wtEdkfraWcmG",
  "key18": "2ou4s6r9FDw7izQHrWwR25JTBnBs7ZcAF8rWaXPs4jisenZZBNtEyqPjKw425EMS4yKA1A2sTzbXLsd9pYFgfHPR",
  "key19": "2BnFKEAMYew2sAnPuFvDRyTk6kEYyx5mXjQ1eY5irJgwfS892ritwvB96PF9gCoZbPZShYnMq5K3ZzN4Zgdc1k7F",
  "key20": "2EEaTSrMUzDqov3DRcMVMwBYENQid8oH6G2aS3v9wWsHXzbZvuc82f9uHiVxzo3CTezHmDt6U1oSYQdg8od74Agr",
  "key21": "9kRyrrJZEMb6LDNhuX5GcEPSrXCv8DkTBZiGJFwWbcGiu882VwBByneVTdmkg6cFMwhDEine3V5DSjYYUeKk68y",
  "key22": "17GPrpfmwtQHEpVkKz5CavdopAcFi9jbCQa9UQ6QsEcNdAp9VGe8PhFkWN5WEebb1UM2881RDexiGHKLtpmaDVq",
  "key23": "4PgPnAKq8SwctqU13W9jaPjKGXPNshPK2Ljy5EH8ps2zTwYkeNaFtNPSNZNpjTBZvYRht1GgFGHNKELEiB9uCjL5",
  "key24": "5tiweUFzsz1j6yN3HvP9zFJE9EdmZpSB3doNLMC5hneohvNdmBhp7vKEQngJFR4RotCqpRQhc6uo4CVMeTcr7zPa",
  "key25": "4GGLN252j4KTTsrRCQ79oUZo84Eff8Phuh175fk914xRAztRiNTfFV6x4bDGLakhrzhse3h5SzsKsfPyQFkNmQ9C",
  "key26": "25FhWCvWUbAYKkVziT6ijvv323jrhbUY57LCRubyHvbQNeapgcwA7SXhkdCMP4XAr3W8t58qNzMPwSQtaEUR4kRe",
  "key27": "43e7w7xAG8oM4iC3Y8PH3YMJoGEwG7LM7KiYD6Kh8LACoLNAZmRpj13upsAS47DXWt8z9zeH8gZCdjz3AnnSycHE",
  "key28": "2iWYUcTkAnWZFSqmYJxEiJD72HuUnAoyFPzMe7v6XXdy8iFPEZ2uMS9iWhvH4TzbH3GkVGrC1irE5NNZyY64Ahrk",
  "key29": "5udY2c1anZ3NFnxQsvqZf89fHd3yRTPRs1S74rPkN8314PzDDafhZAfuq1HwwvT55zJwyJAPDJMwGX9m2eU3J1sz",
  "key30": "4SgJPsi6pmUuNBnqrPpDBdCpX7DA3s4xX8zxqKSrngcwavqJfFEmjHuPAgWv83PrBVkViQpNp5rVH6oSeVf1Y2ik",
  "key31": "4hqcSTHN9Pff2oSkqQKwb2BiwviJaL6N7cyb38LGR5umT9NNpjeWMoT1fmY8q3Zndvfx8JT5xhhrjVaXnUrrBEjg",
  "key32": "gh6TxseasoyCcYScyWN5aBvS2Jv9iNVLT66Yhf1Tqc93dRfEFpwXEUWSe3geetKNpeCk9FtJ8kZTDaaJp5JRvwE",
  "key33": "pt5Jo5cZRMpVEpPuihRCxig5bvj4HmWTe4NoGzexQ3ZsDPFbamGUnrZ5LfcqTjWHCnzzrbt9w4jbLYeWKMoxQpt",
  "key34": "3psjCafU79KDcViC3wszrJDD9KHSn1zWPZUKwvWVrYFefhZxSjG1o5YdjBkJ85ceCbgFWgYszLDe3r6BbZizw4vR",
  "key35": "zvYTK3WgWtbWHZgoKjo23dCVCXxEUaCHPcz6rxTwEZ78CPN5pnWcdhA14ZGHPdpzD7gxLznPVS7BPcUL8kvPSrb",
  "key36": "52ai1hMYqsbR1SRHnCKH5cryDg5za8d15VefXAaBfLwr4xYdyQT17MmMzZKtzNNaLmyfVWZN2MEK1zRExhphiYGA",
  "key37": "3DmmDoer5B7pavxXSvHYqCE3WiA5A5NDXJdo2zTGZcSGZtHLvMUbxJFFBLkZmx5wGmMHFV7vcdtWQTeU2QuHo9mG",
  "key38": "5nJ3dhh4Hu2G5Hewd98JEuuGgfQVkTSkBv8z1qmzfBhC7mnfo8H3sMVb8GWKgbRnc7haFnJF5iKco1phFdf8pPnp",
  "key39": "2TwJgm7sED1vupbhGQ2i2XL5Rjaq3boAydh6z685g3aeWdx8uuZwgTkjRPe8GMCR4R58K83BMTLyNUwF1jdTeQEz",
  "key40": "2JWCsCCynkWFPRWfYb7HPEy5Du33qRSvCCqZJkcUYGZE6s5q6jZGJpcTE4FmSV4irXUXxsd7mRc6vYqaEwfqfZYz",
  "key41": "5tiuF8HhCvhqdoLjAFVNFDRsfMmKtYsmGi2d4XUusgdMa17ey94tGLa79w7CwmgK67dy1HzpzT6BnYof6Zo2Frwq",
  "key42": "3sLAxi9VpXC5KKN47p47fHJhe5gVwvSgVPzn9suJV9WLK8fQP4pgNyEn8yyNvzzyeT2p13doq7W4MFzDqWXsvp2R",
  "key43": "64Ehp72CpT5BBwDojSQPEnTX63igBjEn4rGXL9Z2P2rN6WB9qdXX4XryGifyMbDpGBdaYaRaspbveZ1kAKXxeEJU",
  "key44": "5KeMZABDt4oJ4N2ttWbDkxKLWNKFBDpRqp9NsCKMhva2Ksnxw3vojXAgmQ72o62UTHoNmiCrU3X3nFUaNtXW68iX",
  "key45": "4Z4yjwB6AvUVH6A6tXpK56cJ8GY9E3sjbtFTDo5sDhTszRf4CVyQ74WLxWA2vdXiWtpWkDFGJukgqkt7frtMiVu1",
  "key46": "38Z3k7Co4No9zoPK7S5GxH4aEt7yEwr8LNUDQtb4PPtg44ksBrLQMuzXpaFnB69oa5z6e2peA75ir514T6FHNEyt"
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
