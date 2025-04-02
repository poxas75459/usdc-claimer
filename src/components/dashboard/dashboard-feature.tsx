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
    "2yzzLk6MJw5VFycsT6CtQ7HtEb7YCDcf6MGBWsMD6StbBMCPRQcMLMRyKNDrsqJCwZZHRawGWjGVxve8ZT5HCrGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5evBArwW1Uvm54bvDiVRrd8BvneExBSKuqUxAFg3sRTRKinW1tQiwi8vSfK5Ah2yxFiK3xZ4ioCQBwYXpMnZAR38",
  "key1": "2B5oQYid5N1TjXd7jBQuCZe913N37oqgE5oLxQR5jdFZGJ97mC4HZ8J6sePK4KuCWfdTWPSpjHeooPkKsunhhWig",
  "key2": "dHNMXyM7bRwDH78xhesD68oXh8ZLzQ6KoEqCvwEDVdxNWR3Mrdym7U2Gd11gMBU7LQBosjbgGqTncd8rB3Y8R2j",
  "key3": "3GfgZSauH36DhH6dKumsC6EntugTURCC3Bpk5ephYnWsgFXtuEL4gJdQ44iduLhg8qcaecFgdFKGRmpCqWvsNVF4",
  "key4": "3Rddx5NfUdJYwXpZm37xAC4eJ2CTEic7oFLkN6H1Q55Qw7PpFPdfKcKb5LxsVBmcLKz8EBNFxGv3jVwjmGAzYZgZ",
  "key5": "2J3gGnxMhcX1wQG1Ny8fJt5SJikxnUhEWhzEd3oa7canEgkoYB55b5Q93ioXnrHWryQPrYoWcgEGshSC6xNVPqPC",
  "key6": "4zbHk4JtmVwfBsHdABjbyWDta7A1P5ncJnRinBzqUimpeBZ9AGTHoyu9qgaCuhkeZhLayCCRpRAJUMxvB9s2rjk5",
  "key7": "4XaV23w89ciAscQ55QsBEiGKnTK9dHEgy4gML6oXt3UeoYtruq2o56yZLrc8LPwHErfLgAC9hFwrtN2vpX7VZV5G",
  "key8": "4smA84hnCr2YxbDDGcqgATLnrT45BYtvCy3tdJ4FJc5QYSZhHqs1PGisyDtBXaNAivCgSjFboCkZ7XDiSXD1mHTv",
  "key9": "41skxAHkYj72zt1jdG8ij4Gc1JcWBytiFGMbFBNPRNVGxGGGqwkoSjAYbd2CtCiEGeC9r3cS7fCjkA78oDTpNy4j",
  "key10": "4ViWw3aY6k9wt1WizVtggkmkRzGsgAi1raZBK41mYAYnXUnKWthAEvyFD5mLr19KLrH2sMCf8FzyYuSqdAXJgb17",
  "key11": "2T1xV2WH7vRh5jRHGLVH9UMcwAA6GWh49cVkXxsy8oRJqj5ugbSB7DFrfyJr7owK4unmtgrSsKREFhKyZXkhY5WM",
  "key12": "c63z5goao5T8awi2ToQ5yDeFq1Hw3zu5FYDKKd5yH9fgvXrTj6BofGScpjyGq7YGeaYRDtMr3iZRa3Wa8PCtoEG",
  "key13": "4mnsVX1cqubTBKbJJQqvAxqiHMrU6uJQEhYRDN1Vs7s6eXcfunms3fUxq5Fgg2gGii3s7FGnjosuujGL3mrFTdVh",
  "key14": "xAQJMgtWfjy8uhDNC2VpkACZn2Rh9ce4pEtBd4kteZeMSWt6ed5aSZuVjpsiFzLrgKmmxjE3r4kcN97Ku4cgNPY",
  "key15": "2rzTBPHYybZmzCLTU9h8pfUP8FtfpT6TKuCV9VwnWtwKGiS2vdUMg82qHgoSg6FZzSQQwTkL73k85xZiFhTEL19b",
  "key16": "5KiLkdKsMgfRhN4PhxsJvtCwxECKMmoQKDi31v3HknbM5sfoPRyQq4gtvK2YRta1qjjGhHTaKDDDeWwTEU34Uuqo",
  "key17": "2Euyrm6WX3F7kxinRPk7WbYnpwq63cAxS8A5YfFSnB3NNTwS8aZuykpNuJmAP1DHurfjTtEV61dBVYr7qqqSZhY2",
  "key18": "2DvdK5aV1EVzyG6WRv2Pru7mVVpx5foGEmrL2VETGRci4cs2J1wUU7kuugcZ26XwLqkK4xomvTz2VJbSN3u6hjEX",
  "key19": "2Vjcg7jgA8zWhRz1NdSPr7yjoQSv52jF14Se1EpCtLwqkTfYmdQ4R4o7h1CehxgkHwu7kwyJmbF78SGKGkne9RtX",
  "key20": "4pF5EMnZo5ZBfyV3wDXQK1GZSqeDYTAqmbu673F2TQ1xVuhFdiCzNxkougwSTjQ1nLVVTvJGhLB9VdYS4vvXW7Qk",
  "key21": "ofdpRomEqgaGriwKLgtK4ZPtHp9dfXp4BY53CDGaPbs9mzn1K8Vc1VMvNxtKBgFCD55BGFstdXMyzwWptsBVJNL",
  "key22": "5YCPPN3TtpJH644vipuYrvZMn5HQ1ijEkWs9yGBamJg3PUk8zzT4tdCdTBke8LV3mvV76jgiJSu5C4yiiSn81dQA",
  "key23": "4azZWkPtt9cnsJDtUZrv7w14RSECifZLb2Wedfah2HF9zUL7MEUMqHX91oyVXXBPXtb7tLsq9DRgWkJQn7znxFhJ",
  "key24": "q8A4Uup7ptCn93pj2ERabnEC521JFVp5WELTKLwGurKNytN9zTHtyVVQA62pyrnACRgQQpniL4rExbdBc42756G",
  "key25": "47EyyigQfJ1avmfQPK3E1YhcmExzrp1nk43cSrmqz6R5Sq7pfnLc7itHwLxH4ZojWjSQG5s3nqpHc1rVgytF3PRb",
  "key26": "3HhXQTzVbuD9TVDApfQauYgRsc6NCCcGngPchGYUJceeC5y9qEtMcuVDLWd5azDTrs5W8mycpieWuERADaWsn2jX",
  "key27": "5KqJsgTR3No9WiUshvB62FFUHgCeY4UMbmE2BTPLQBFxV9fmL1ftNzK9pwjKFQPoUYsMz22cPewG9V1rEKFAjVSE",
  "key28": "pEYp8shh6yAZn6psxj5rUVaq8SS82qjXKDeCMzKipG5pbr236PowSdrcfeNWMZrhqYgWUgE8xhHny19BqHLpRVj",
  "key29": "Vp5WD6YnaWFk1whUCC2kCKLvE4aj3ZKBukPxvVpj37se6CCazb8MUAG1UfwHftdccS411pg1YXtWxmtnQj16qrj",
  "key30": "4nM5aSc8eYbR9hFaVDVfhZrmUV5rP79SVVwaYH7VmhCw21hkgQecAS62mz6XKBM1LXvFukNvYjewvtDDyGXVQRfy"
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
