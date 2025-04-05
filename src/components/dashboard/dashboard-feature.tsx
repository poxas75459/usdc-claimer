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
    "3itRwpnoWxyrsGPJwpHT4ygpZu12wN2xYrvRkGSYirHibQL7myE7Ft4p3HmtDbWxFGtEoqzLk6dvguyAVCYTcHHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3frz4jDzSaeSMkXvC2afWZxkPjx9nWvragfEJjrXQ7iC324G3hPhj4Mk8v66DpVgCYfJDkmb591eAqbiywJRYa8j",
  "key1": "VSDiWKUvXnvHhBspQHnUazXMJ8LcvHUrvSqoHnQSi9JNDEoj3schhVB8o6dHjHkDYoms97uAsfrLE9fCXPTQuuG",
  "key2": "3K4eppLysE3nk9BPvFycxYoYoYpDW83ZVAupS9MNvdpz2EhTbUtPxuJiscYJujyX24dPdHeC9R5ykkRiNvSUAd5G",
  "key3": "5CFfSpvkGCL9deRHCufY1rzSwTSCmjLsPzMPFHJdKeMTEcVWXHoZbVq6nuHRfdw13CUwpdYMm4a8kQvz5p4e57Sz",
  "key4": "SaFHk5Zcgg1EhSPqDXavj2PsfhiVLX7HkfUw7C3upRQLqfwqM5g7TLKPZ2GPz439XuEn9FGxHh3Cy7ro2xrVvF1",
  "key5": "kGRa3msjhopaeYVdjiJ5iLV3fLrm42hfZga8gRTZpkrymswj99tm5KzWVdtVYhGnJLnjGBBMLYrVvtwZ8a4pkvN",
  "key6": "4ZGkwECDSdpWPNXcwGNAYDRKiDYveSsUCcExzv84c59RGFNxMAgWCEaVQTeDX1kQahpzGWnvt8YboiVLHqqSp5mJ",
  "key7": "4QDuUJVFFZvupDYDyNeTFyk5ShDc7CVR9RVGFnuBZFEScbMUWP8L28M4NoGSA73q6SuARww8tNjF4pBb2dunLJss",
  "key8": "2FnEzrQqdwmrh7GkBPXqhSZuSJptUWDiXx3gbmhTmXJZ7zQyB6zuPvGQj2a66qot5Q4GsGnnDMxJtDbHQ114GKQ5",
  "key9": "633MWaqAkw2wvhL1MbcjEWqp7vdsoBDoJXahf65ephFZAadkjkHxBVzzBE2quzM1GwmF6nndgeGzydm18S5oRM5U",
  "key10": "2nHqy3RWPhaeSxVbwqYakz3K5iqTa68Ft3amf1qPb6njgh3vw8Go3dudrsfFegz71SzoE1fa4VuSXiA4yZBFtYBH",
  "key11": "35ZpQzivJWTpcsYgMa2dZ5qcGihkU8QSFJuk2ZM6T7TGdyjZm1MdHqHdC2rDubqmM8vtU1nYHkVCdakAn13kFZAv",
  "key12": "5M6HA9bqTVT4kzc6hjHT4V2PwnPqnhSWnbniSUZSQEVPpdUssJQPYThAexLeBzYWqigCC9rdMBmGyRbKxpBYUkFx",
  "key13": "2ydwt5d3LHuBBmKFDQBk6Th2EycrSqHcTJqaReVnxcqQoxXDn5J6zdCXf3Ky7vwRQtCYfrpetiTKzrDf8GiGo74s",
  "key14": "4wTPGLvpGWNCJenbNirNsJi9W1vCqJ4gfweFTXty2v1LXFxBZbxyVLAitjt6ooaYYEQdtqu3LeHKSJ86qfLCNzut",
  "key15": "57c2dsGvw1gB2QJyuPNimXDaeUCDoXj4SnPFHK6j9Es4JBifpo37eP93SkzVPE2toVhaE5RQxRjiUbbhkELj83Uv",
  "key16": "3z41Y8mfWgryAbryNX3uR4vApsNqCiauE46T8yGduDwwazXZozMSqSGxx6ijkjczxHR8E9xQ5b2mpfb4aysucpHR",
  "key17": "4X2yvwiNEQcousdUq1nTzQ7vh7pULkumnDxLEuAoBaiJiNvtTs1QiYY8a64hpnMgHVCkJ1m72q9s7wejJmNoEmKt",
  "key18": "mg1BPqAjdc8TeTp93VXe3FvpcG8HHRBzsSG273J1sBGqGxbAtzpVcs9X5M7JoRBv6H4SfhwRbuLjEfMrEzNofCm",
  "key19": "5GYWns6aSLfEqe995ZgZfH7EsGBC5Es3cm7qtCAPkqJE12pvjF4MqLHd9WqFSFhdQCen4dJKvSiFGUh6yyavcnC4",
  "key20": "2jZ85Yrp7LNrt9MW6LS971Exf7ngnztN6YyzAFAFRQ1bCATcBnBWcoBsVAat4YeDpQ4CNTCvqFhhTWJRzXRE1bsD",
  "key21": "zWRUJkNwDkHSHpH6E5sxsnuA3V7RHNSrDc7MEkVQedhW3o8dm5x3vhabUnxx5Ypq2szRCVP3yXss8aio8foAhp1",
  "key22": "2eNfjAeiGoNndnzNozjUTB6KRVNoSVzsKckvwsyYjcA5zBKQaTVLUvLurGXXU7yRHx95qBTxNqnrDeW7BuidSzpH",
  "key23": "daCrxfgixFHg1RJr3RJArRN1ZnEHTH1d1LnCkj6GjYDJiwVqKbhkDw9vyywJ7CPiFKUXkzZFyr2tuyxZQWPD9o4",
  "key24": "53Y8xYjzj1KstGtvnx8G4UMcrD3urGvn2BAefLQBCKrz8oFteuoeMpd1iHS8scnWxrBuWVDcbgx7GDFgfF9LP5WQ",
  "key25": "2k4AACaixDMYdp53DymCZXmZCP5n1HQ14qtqGvGexSQtPkZdCu9UdMw8xQD2dQ16ipxbLiqz14o7EFw4Xe4CCUXv",
  "key26": "SxfuxCV8GdYnc9LuxAyiPhJMU3TSHZEjBJeb9GSZNWK9jFbdnZFpQSK7QW1JT6zmbtjdYJC13Q7GyKrXiNc6jVh",
  "key27": "5wUR2N8uxDGVp2jGRBavx9Q7szXSpbdmaEoMsvRhrEgZi3X1hqUvBK6dcJiBmPpBQV512ei7BoNCGwHJooqSgSy7",
  "key28": "65V53mnU5Ze8C4stF3ZYvubgbwHrJXtxMULrZfdqXQNPwT1PQVMDDrkCbEVA3ZESpsf74tmt2X3Uz9iapiFBt6qj",
  "key29": "3bxZftUajj1eHqYTzKE8xyEBBi8vVPwtQWHGx37bRwoRvX3HKatGLsf9zGNAQYhdBBSFQGKDy2yeePZhWdAebhyx",
  "key30": "4ad9u6KappYKJTKS8bi3pWyXrgLWKadYF3EKfHPKfn5GJMQNnAinWFKvk5EXNyByeHz4CySVSbR3UFdAhzx6Kspg",
  "key31": "5HuW2K72s2G5s6DUvABEPbMXx2pjzMsHhKHxGXwsbgFWJeg4Xr1XJ7VbkoVU7M8hBUHYEsRFiHDVHDHB7MCrzGUR",
  "key32": "3T5EAR5QMtBU5PgnSyu5ya1mRm2JJaM7Q58Xeqr8XCutpxepo4vq6MavgHn5qoDfchUzsXGeoRVRL99dfMUKJdiT",
  "key33": "2Qd6qYP6XDC6J8JZwQecxnTKmFBCYuMFtiJ2R3qQemF9DD2vrUM31ENPxN1Xcd74ekuf3enxDmSLECz9XJSZKf3",
  "key34": "4jmi79fSVisUuxeE54i27mfyXbbyRb9ejJg2ETDhSvsfuJiJaMz8d5bUuV9mY9uQNsUhyeDJwB6WwXAgbR9LRrGU",
  "key35": "2soZKg4ebjJ7LZSPScWMrVJaevQJNLsceWLA7gSU4LkNZEfgYcMzAKKChbNygya4x5uLS7WHaxButBvJpVS1A9Mu",
  "key36": "47ufoMdCYoduy99wumjH5TjhKsrfxrPWyGYCcwCwKgNyDpnzPz4427nHEJNvq3uQQgWJxFua94kcESZQgNYzRhtV",
  "key37": "2r2qEwPUdxNbZaqy9cWa1sN1ttZgAC6C32fXpNuMT4moc587EZGNwBRtGvNwFoMpJPS3EKRPCcwxjjLfM3L5jpnL"
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
