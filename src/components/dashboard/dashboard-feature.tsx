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
    "H7PCAyUNR14a7jANYLBFijn7XuKPGTiMeg6bkxxi7Zpe9UfF3nxJhmYL5PmTCnVbausXtW4u75cDZ7uQuHyxYg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gjEya313VwiwYdQRXkb1jonk2s1rvtxExhmHTyCPjiK9KyN5jKAUkkmrNcGd8T9Mnr7VnrwKp2cywuYajMr9SZT",
  "key1": "4WQT68SE4dL4vwXkZhePibev4vcc3NAJY8u3fBZdfVnXjePGYiF7P55Y2NKUZM1REVvbohvXJoPoFncdesnniQ1v",
  "key2": "2ZTbUNQvmLfhdTjnSknapso9WoYSJkSwgX1Qy9MYCrDsuKsA4gkCg8yawuwhY6oxTZ53mcTrkcp3x8PaJxvcyuSD",
  "key3": "4pWRL68VJW42XTRF79nhFwQ7E2yQm6H2ze4xEjDCbqqNRL7XxR7epWc5QxPwfZFPecAPsnziD5Cob1ZXXGu6LbvQ",
  "key4": "3JEQ9DG1eeEg2veeKY7dwagsPW2EPFqXtSAU5YVWW38sLNgd4McMRB56WuhNUaNXJyXDMAh2gMTrvYMwQEmFZjoh",
  "key5": "pA185WEJEgXLKNceHh8YKLRVWW23SxGS4hzfFdxL1kce4Y3TBDKexPGgGgHazjuHbwGT4YuCh2KNTmASkwvJcXX",
  "key6": "54mVHFiDKzrES7fZhDSs5ngEhi3yfqeo74UE47LKk5CRCjDiGhUgEDfnZnnFx4vsqTvfZBgy7epn5EYU4mY45Xkr",
  "key7": "4tFFWLkgpCRMEe4Re7T29DdvbUSVAU1pC1y1m3Pqrm2czxhKq9tk7Y5iqzddpPdutoWQZaURmBHaBxVLZkMaGcmp",
  "key8": "2Rq4qnV9YmPrCiDtyGXrzAcVrHTBEiL5pDjEcVDFbmuLcLhMe9mZEkJwnAgoZPTqf9GyGcHhKLV9jiVFqNZq9uHH",
  "key9": "5mAmUNu6hHjVuW9zo1U6wwniCWMnRXqVxvuS9sR5vEW88uWL6MxzPnt464fp7pRpUiTLbATa1EDGSgf9H8RK1vcF",
  "key10": "2gTwFuGr6Z9YNAgxRGH6g4FXJXxNeBfTNyN9qtnm7dAFwxM9r5wVSk3CvY2qCX6jsWjou59t9Ux4x7cmbiZDxZPu",
  "key11": "5B6uoaG3GhDKYXabxKCnq1QCjvcsrzEbps7RmGHB88uMCSRRy9LZKo6MfCkVwsA6eyadsYH6p1Nc2wWypJXrPjVD",
  "key12": "2sPWz8ezTgpRcVPyGSNrxYTdUobs5tuo2U4MQ1DzkbqPr54VNARPBNhwMoQj34TTYX3FM3k3MYLHuhz6Wx5P9Z4n",
  "key13": "4KgRPf9y4vaaAB8LmZ6d3qPTPiCwA1vMWun5FiiJNnrgRRuDGy2fCqkMNCR2z4fXLLLdqLa9QgsC36TgiuJN67kS",
  "key14": "2kSKyuThziuAFuuTRi4LAezNAshxYCchQLUF7VwPMA5ZMqSZa41QY9suiPN2WppPcxTVzYCYkD4Xa12vmB2ToJRj",
  "key15": "3gqCFYp7Zchu2tL9XC6WAndUkBPJ4SLuvnzn1r8r1FGeUSeE14ZWE9tgwVVGGRpD2fF6dLFStvixxPLJznxHeAS7",
  "key16": "3n4iaxRFXBpdF5Qg2fiWdR8xzJCCvcpEbqXV8iNe8Mkuh7aehRPgnQjAzA7JeP4VVMaVWoV7eWfKscE8wkJVgkiK",
  "key17": "2iuwkvUDKC8jhKBqfgBosUKg9c5yApRMWiFoyqPrrMchbhfKLYVQyGvm1qQqMZDr77rRJ29oXCBEGzDagp8XkeoV",
  "key18": "3Um2xuQYpgg1vJWpg6tztVNs1RFmBB2V8zSv2KUmDbLX6PEA5yieG34siNKF7oAdqkivbwxV2myXhfJm3avqNxg1",
  "key19": "26dWHsJXJd3YncEmWTn6jTEAhZ6NEQDeXrE8tXrp9hBaxQHm6xvtako8Co5fc1jpyf7m6FcH4pXXjUzxweamas5a",
  "key20": "3DujvnmzGYCwDw8NC2qb3MaMPe9uxVaNJfyqnZaUeD78P1FCW8CYFPNAtPkRPqQGBQCaiY4Xo8yuD5tq86cz1oM4",
  "key21": "4vQcPGQYesJadDLZAK7S83Zerv7KZ1Ffi3EVJMxKwZJ285LaJgUAEu9vftqqKfCJ5SK21VvwkikyyJB4GgGoZga7",
  "key22": "2JEyXyppJpVUKJejRa4Ahkue1JaDKefZETLxHWRwRcav66CsaKQR6YnjryLLNf7Ju26B4hWRvVGzCrbaBFBo9AN2",
  "key23": "3NyynFWhTmdvwmXjNyewFmyWjZcFTFPBiRMUieUwv9VNVER8R9PcQj2o3PkRysoxckFeDkUnRUSwsdoqXYzHmwXn",
  "key24": "TnvMnJ6eZm1Fqjuc8xW2fGEMnT4Q6JMDLjv9Dz6uFqTEhA54APMZJtNH1DP6EPJZWLTHuNb22uGp9MD6jV5N5xs",
  "key25": "437AePsJgMq8pcZ6iMoFoccSwDsieqYSLQ2ioM7cPeuUCtJ5BL4iqSbuJe2G1jsWLtFzjEqNUYH2jpxzYPcWkqg8",
  "key26": "DU2a1MihzPXXwnEyjrkVTKmVQFE1YJDeeVmufyQSwiBMFMnHrmpqCZ3rp5hgJyRfmwxWUyz1KRtJGNkg1bzoJdc",
  "key27": "5C4eoxpRJRJTJqGNP91zzBbh6cdeLsx8QzrovRwpxDd1zoxeCmgivrrAcBzBt7MjAPKxnZEhKeGCsZWdcVTd7zEH",
  "key28": "4jUZSgpLGSVyJx3ifU5xo85Nqy4XVPpYUk1XjBr87TXJKoCYmmsdUaa824je191sdfS4psjqiGo1s4d1K2sdoy4c",
  "key29": "34bBoqgau3qksytL5YDfCGQTAYE6b1MqSDSYsb7FoFvhSaqVAiK728j4G83BdpSncuFvBYMyxTE4p8Ad4MYuFFqo",
  "key30": "4xp8yVdriWUJjPFukzqTsTwGGvmkoxBx6MWoUjMvBSYbcA5GhHD6TzrNyYpDKMRVYAqcLetBxZ9r568gcgBLa7P4",
  "key31": "5SPaHB9B4L7adSRp8cr142rAEa2gD2y6Jr4Ht3LqSKmtzRZho97gBbJuWqwrKRQJcpnQBXHWz3qRQwUYVVNywzpo",
  "key32": "56ymvVX3ZomWqtWfeb3tztd2YQ9uaqsxFZninKwoEe45PjqYAxHy1J5hvTaTFE4RxMZ2Xy6ZPs47abbR1tx97LLp",
  "key33": "5EJjM3nWupkWVudg3LR7A1zHjXF89B9n3S3sdHCf2mMmUtFt9fK4qzQJYoRCyfJgjRYvpQe3nCJM8J7iSrD8T4Pv",
  "key34": "5Tr2CYjbwuxs359BA7EmeeYyTLdQYnZYyrWw8or4r2LmeRJsJduQmXjtZRTcXZGpGBPLeZaSx5nySANsKP3naRpF",
  "key35": "3bRjpbpTSMAhVcTbmga1CvYZaLEC6Uzea2oD8s3ZeZpbwLGBZvnr9sTURzdtssJPFVeBjTGsdVWrAg7vV6v7erb2",
  "key36": "Dro1GEXiYwpYvmP64rjHpa6doH1dkJGCui9JqQgZmm8iF89zJn4WHqVhiVgvMiAS3RYG5mEFsqUhtPsJcxEv2mn",
  "key37": "XM3uG5jHJhCnW8ZQPNT9ZDVyCyLuDt8xKPS2uDDcJHjDHt35UbrMtSsXtSvjmswvpm3eEvw76FspxiQxmhMC8mP",
  "key38": "9Y49Py5VkgjuPU2wwhUiPpAV6BwPPdPXBrLzFAMmvpN3BBLbYw9LCp6WgD5ut1vkyJKz9nYw1NtWFNSJo6Qmz9L",
  "key39": "4bcVweBUiYQn2f5EMSZXa3Ca7i9r7KFUoSCqUKwf1cPoaRTcUQAqN1HwbCrE1dRGkwNsnnupCyAqRY5uZyw1oM7C",
  "key40": "5eCs3LmWK4GAmKhv6s5e5qd1Gr2nFw34db3qoW1esbUNsoiM7HrLrTT3PgT9d3TsrrwjRTpmh8YxuQBcDWNZYnAP",
  "key41": "UwkDaKX3twVqM4ZuXDPLMczifMEhxjfDcrh76nbNFyGL1B9kZyBSNn72ybseLqiugEa1WK2vwRFM2BQJ6RXEQHj",
  "key42": "5tFNuiC9enH8WgKn43evNvTVT7YjkagE2Xvb5DM37UPYmQXDZjZRBS6PP9jyNhxSKqZkobUCFpadXGjn8wF4s6hf",
  "key43": "43DBV5Ead5XLS566K2Qtq1awBck1idaxENeKuT3aUTktP9quZWs9c8JVBkVn7UFb2ha68BTJxm8yWFeMHPFVkZHf",
  "key44": "5u5PiAHrCNq741FCAgHmBjCErhsXQVowjihYkEWkGxt2BUFyyWJS8sPPaof4R9f3CruacecWo784GkzCnZWBbaeS",
  "key45": "4ZKqVcaLGHyEGaUP8d5dinnoFj45etkigA4x1LcPzvKaHk4LpUuN6iLtkXRxuRwo2ByasUXsiFK7fW86VGotusyT",
  "key46": "2tmA96Dmr8ogWyE1stqefAp5L6VTRtKBwiE2qbeD4MUJkNzSYQ7h4Ks9LrCKDaSM6nRAFD1Mye8VmNAndYeH79e8"
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
