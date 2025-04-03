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
    "2ag97SGgem4HVwmD1XKimvDhjBZTGCcakmG49QAftU6gvbp6NpbzkkArnCtiTgNhtB5vcZB27bXDED3MFJFtL8sB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24T5sv9pSJ3hV2v5vmpAMiaz25ixrYpTBRGoBfJirmU9cR8omAWEQHkKFBTT1j8dHwj1kd6htd5S5sxgYm11YGog",
  "key1": "2o726rMGs53qRoN9ySWzSQsonjqUY1fLbQ5bdPB21PMDXwnvT9gQUsnfPnKwfV6iGGySAsgFE8Q3MKxV2ugGdPbd",
  "key2": "2gHytSjMppj5rYaLcdgd36ogRjvjVqauFi4rsG1QdYzATpnYAPqURJmhKiJCiDhF4NL3GKnARkFth93nP3se6TRz",
  "key3": "33PLUnvtfNWvGHBfd9VUu1uWEMKHeKAYwdwaYCd7evcijga5XLTgqSYSbpGveyjeF2JKEU3tHpLRsxKdUiUK9KLs",
  "key4": "42LUjwE2N3JRjZLV7tQrmG7qpuXFS83Vv9apa6tgsZgN6xkQy5XMNT2J8AT6CBaJ8GWpkB4SBSZJAdyp64dqZmoP",
  "key5": "5G7cSCBJvNfL1g52Qb3fpJs4mFDQgNKPBWzf5xfbs78rhZaABAmNSVcdzywBS7F6RngUHfwgxUnpESxJJyXswyfC",
  "key6": "8ojePb4L3UvJ5GuUCLNysF75Lzz1wSTCsvknNUoQDsj88XAqtHj5sTptR4Hrr8iLEMUgzzMFtDFDj6TfrcpUgUp",
  "key7": "5mY2vnxa6NmSRvM2btPV3gQRH2KePifxwbbU6JLaRty7CCjiLNiPnEgXDuLjDKD439cnTwpoHd6VikfrjDtoeTr9",
  "key8": "2dv9s3Fuc76xeVgteexdEZdcLApXbsaTmL1hHwFVWAkjtgMH41Wcg3QcpWLF8k3nXWsTG7EXAYzAECxDxm8NfBZJ",
  "key9": "4WXVgzme6q1Cew1d61tr1rmce27XPmztcp2C4BP3Lk16V44t3bom97QMLxjro9WCqiaicxFvFCbPsfkTDyM3VZw9",
  "key10": "3QhiAX41MnfaYMM4yAF5MbHaLpD9x1B7UgJ7VStij1xGB9sV38Uid7C9TVBLQJFX298L5WabCdh8fA5BKvzVcZW8",
  "key11": "5MpAGFE1SXeF4NsyWH2M3T1n2VDscP8rnXRMBZKcC1cpcwytNhLTifSjwWAHqLTBMQVbFxiNDEej1eNm8iE84ANa",
  "key12": "7hwYz8W7yHGHzS5rAjV1NSqfxRQYqgK3FrBWyDNCkzhr6bBDD1RWrZ1VH6yzU4D2EqZ4aqRWPwS9czEcWJbvR1L",
  "key13": "9stJNBDUZ9SoH4vZasfhzVLjCSqvfRoZP3kNR98nbctYXhsknP6sefXeetgftCLrmPtRxsR6m1YEqMc5yfqEU1f",
  "key14": "3caXVS41qDydDQVSsdzQPExsuEcT3tfVD5iX3kytkFDKy5wyZtB1axReMJE49bSwkJFLTC49zRuKQLdV6PrQGpVk",
  "key15": "2A8oCC85SFSfUeu3L7i7kXYfdQsAUjix8bETktJ92CUV8ekfvMeyBUEsd7ad8SRmFkYydj8BWpkS5iQgcY7yVEyq",
  "key16": "2ZeCkgND776Ly7mLfvKT7tF2YtwFyT6F6gJxyqRnFxjBW333TEwgkBqPuAqPZxrWb7bWCpiPj6YMkvPPFciUZqmb",
  "key17": "5jeGo8gUCHSFM9ftveL3EibdYDmMdvyUD3XDVnMcFN5GTbwLze9Q383mjpco9d64miNcd62qP2C1mVfuHNyHb1c",
  "key18": "4a1DAcZz3Rc3yCvru9zsN52kyvzVrb2QnjxeRWPgtzUV4nRNARsUEjYTNEo8c9PXrSi5FoP3hovCKD5zumMdSuSk",
  "key19": "HGFXtwY6rSE7AEe5en6cSUb4VBQphC2uCgACgSn7Xe3szGfiwFC9JiDwACjHDzTYigUwy6MtLfEQ41dGb7QV5bF",
  "key20": "uxzsTESBswPV23yUd7oXVVCbfx5zojWvXxk1Vnt8iB1feN3oGXABVDQqF3Pr5NyTJxyDvK9AK5qQcfjuNPcLR6o",
  "key21": "4AwoMtSa2NZSnW4gJWt1K3CtmUJG3TnCPXSkrfGVXuhNb19AYXrc1YmFY9h14JLakC8AmCwX6pR4XDroojHQA546",
  "key22": "3tkscR75j19vb2DttAeBUgab4He1R6H7qCLzor1nmvyX5Z9uEo9MEz3rDLY47b7PWDMQB6MGDcXqCDjj1BGn9vUP",
  "key23": "3MXBCjZ3RDg5hTzJ5suT2aHN2avXdmXtdQEbKDJfhMdeRAZQxnbgQv9vs91gqDvEPya6pA6Jfxokc8zgd1wDT5nw",
  "key24": "2tnbmLiSCf1YR6MfvWtpa4ngJfPUWQW1x9uJmPCMgRuJYcASgTXb46v4wr9PsFE3oAtGZYMUfdNNybcxhgc2VY76",
  "key25": "5TMYFBTtzQkFj7pHXWdNp77uCxDq2K2WxEMgNtbWUfb6ZCEtGqeVijnLbWXgZj4PaX4ETFkTU3MKrRHjE8bkwSRY",
  "key26": "58Dunhmc6zowBphzmwe6HWzkGMMAwzjK7dXagzjRHQWgrmAfX7CpipMGsyrTbKcu6rDRMs6Mq87QcGp1biPVBAxZ",
  "key27": "2xNSH1RtY2EeWKHU7ugQP2TrYMpekRHTsoHRAYtqDAwyZWP9GsKFQQQFkEbxCkKWH9diwa2ERg4MpQudXUxRsn1a",
  "key28": "5zX9AomWEZAdgK9ojM9v5mnmtm1gSxUabZqjRbacnZPNq7Wzr2xux5DV8SyNtKpaMEmQvRiNJ2sjRX3z4Nz6kkrx",
  "key29": "2zFkXYXbf4fg567LzKcanh2vMqspbyHxwQrKrNajB8Br8i1SrzTEZJRUa8kSNxgCUUb4EKk71ArGKRNN3dGLNVGh",
  "key30": "61hn48MULaJBCa11VuKyStGPS59zcp3Fjb7XgYVcq9SLQjDUnp3e72zyrVhwwQBBLr6GAghZ4UC9qNTVyXAakqhr",
  "key31": "4ez6d2fx1y6apREgn55NMhoYvDk6VxGmqrGqn6yJZDMhzkn8PLULtLvqWXTAs2Gh31HdpVhiJ9STf7bRDuKxjPb3",
  "key32": "3tSHxYMRoXwmVXGSAGLHbUV32kmmNjkxEztTUfLyHksZvJ1Dn7RrNW1SKnnzzn8Bv8YXsepd4niUn9GYfcBDFRXU",
  "key33": "3XKbGaCUwKnCcjUS2DCu6n6UkPpBYTW91nn5kaSUHvFkQYii8a3vk25t3K6jVhkVUhSd6XYxm8qrVRYAMTAB3CNM",
  "key34": "5ovFzeF8wJ7SZn1ip3LLNEBuBtPwoBN1RKkE6n9zSaAxRaQFKPoaJVfzt1kS8ghUqixFhuS9ibQMd85HFFqF4RSM",
  "key35": "5qvDP9jrV4NeHJuHKpCwL5RBm7Kz5yk4BxK4wtjSkXzavKgfiRZHpy1QiabXXf7E2xFA3EDn9oGJ7f9MQ4Rtek63",
  "key36": "51Bfy3PwRA4i3mxUgN6qkYqKzVtz2ob6R7NDmTmoVmHxVvNNv252G44exGJByRfLVQAYmzbYVYBE1FQ9xYhmUtHa",
  "key37": "2Phen7GSW4755uX6bf8m9TRpUkycDM9JzYWWRzrqc293Syb4YbBQHKXTQjgGPcn7uMJyVUWkiBVdQHjeNCckqU55",
  "key38": "5LPN3NiHrhpnYUGdUhZyKeHVWr9Pue5aZp7YsKR2XeZiUfvsqFKednndusY4XVKm1T6BRvSdjYfaRF27EknQJt6c",
  "key39": "7cFy5dwDtASQ98NumdmPrZFeHxGeWFVAaVfGZ38KQhA4jZkgxNYr2buJefc7k2jRtbPmA6Pisn1eaMqa1hZRTBf",
  "key40": "2A85e1UjepRdvgcspPgtid8gKS6CY1fi84CNCYscPULrpnho5pQTLMPFsLEZQNmZtLmMMMUpr2SiVvPhtW4WodN7",
  "key41": "4NQWtk1SmMXzgqPAdvhV35zBbq4pQaJtzQdtGH1joFsMbZYusLrqrn8Ygw8QMhU465yv5RVbBH4wxP7b3wM8qP2j"
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
