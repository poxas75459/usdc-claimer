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
    "3fZq5Ma9cf9BCJwNTMU19pmSRqS6utWPsL4FPb3hc6cNnSojt2NMPUPhY4GEokb6PXC5W2gSyqrVB1asXWrAooQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EQj1mx6b4WukRRgbqki1bkEci1Wttse3YmCw4fcmPkHibhAM2iYafVARmwFihBQaBukQJJXjg3ETx36Rfae8YJ1",
  "key1": "4XvftRsz53hvLp71E6CgmaViRodeKR58xcFqWHa68Li7d1PYQC87fsdy4xp2qDSmLMHZ9vrAwrxsDe4puiK2zdN4",
  "key2": "5Chpf5xsw1bXaHDNv4nQ3mMfiKuHAzJsBbW6UCcAds1kk8v4wXtgpifTF9QehLNHESJQvWfxtiqHSRW4E6TGWARb",
  "key3": "2HR8Y5o1A2ZCTEkEWwz916LqgxYxnEES2f65fcLFfYgiPSWteksFpuKrzSzzKZWwdFjN8b2P87oUmVQe6Xks2a9y",
  "key4": "4gPXPogtmHp7xGHtdjmLXDv296JCBbChtjFJjfpQQw4pWqfKySzt9Tk2LfAYGXJMWdMrjoFvT4nNAtawTWyPY7Xp",
  "key5": "4RUpeoE665Vc4sCtMWMVNL3jm9D4VrRD3mwy3Kdrb2H2hMG1NbJCuBzYBBkEiUHiMmXChnfiaYR3Hvw8b7F7cguM",
  "key6": "2dNKskLTvJegwVRXMeFzUT6hwKmstn13uGAG3Vc4HLuvwgjyunsMue2vy26H4Ki1QKL4V1a1vPk2M64eRVm9bq7g",
  "key7": "3N5DAz8LL2AJsQRHLnwRSoHwTRvYNHYThqsaVmicpJv2msD5Xeq9SneV3bbwAiPa7w6ZM87wu4GKebcVofEK1KMS",
  "key8": "26zXtV712usLosFd8XkJHvhHpj7wX5DGWZHdCCnVrxv42toyWCsvHAK9D6rPLEhqNs1u56YKPVQNXc3Q6BXcjPno",
  "key9": "3ihVPSa8jydBCFFV142uziK41YDs7F9bdteLKgMd6T5jT78LPFBdGCCnnv56AZL16BvZ4jfQFREaHcne5qbLXnsg",
  "key10": "4gKtwVLKeuAd1EETyDLPCbnSJGM4S322ghjnuey1EBSKVG2T8J1pmEnQJxWYRzCkX9DEny61fDQrucRP2L1pGjsp",
  "key11": "2VTCiN2taJefFBajx6fnTGZ71RyThUdhJ9bCieUw9JWM1XyYQfZu9b625tx799YEFHcZJ38a2uBdHDgKpds3bAWP",
  "key12": "3d9b5eF5pb8r5TZMBqvxf4MiNPmF3BiWYR4QutuPrjBy358JAxtfxmz8zUExxcfmsPB4XBDxPqc5gXd86jCCKght",
  "key13": "26DR4Hpgoq5M6cnnW1xWMcFRuq1HMtSSZrPf9BfWUxmqGVVFYFBWfZBVYryEZx9o477yfrCsdRW1B9rhNYJDmD6j",
  "key14": "47B6duLTSNkDHnqdWECcrgugmTHXsrkuzG825LeaQUiGGBmQjGUmwhpvuszqkfHUpMeCcQ5NmHgCQ2sTwj7gj4eV",
  "key15": "4utCvpnJ1QK1w2P7WuUsDfTfbqa4oiBLSPyZSDmr6nUuiD9uRMh5Xn68pbfofnBEUxrbB2v8zG74UTR6iupaQxec",
  "key16": "4K4epEsgunU3kG53tLRcaAYjVTg76kpBU4ko1jd6dJP2ib3JF8WB28qappGT4Wdw8jqMVhFNsG3kCah51e34TW5u",
  "key17": "24sV5YnoghEjV3MzcNJqqD7vMJbifFNhVorCT1SgEoBysHhyWmS32xezbHyaLf9dkdorB3P9CvpJsvw9hjRwPbJ4",
  "key18": "3WHrCkhT59hxY1TZ6DYebMk4AXX4cL9a3Wek5ftVb19Win7Nnb2xcCBg7bEGgwQyzA5gd8D9NnuhK6qqgQSmq6pL",
  "key19": "4NnAM8Gu89oVzm9Ey3U7VtbtpWR7dN2XMMubRvHfgXbHn3Arxs9ZhszebRUpdEEdVQinnJQLoHWTtuxhaN8TckTh",
  "key20": "uCsYToFxqnUPPXv2oiFpKSQY3CnQ2ZChjBGA61XzUrF2AJcnhwSdh3mnVmHa7Bg8J15pUVReijA8W9SnHayHjtD",
  "key21": "23aLaZEzvH1Ar5Cw2rubaFS1EFNNSxq2u7czBGoEdHygCxqLFDqNhLYGT83BwqbwPbnL2mhwjj9Thg2VkKj8JzWE",
  "key22": "BWQtgNCAF3CSYjoZN4oMWnkTPCDkXNUUZcCWQa4jWr714xxABTq5oBiKdVc8LgYQSFr29YgneYS1qb5fzfAjgLC",
  "key23": "4kXtvs3jidGPX2wBpUZfqfHHrrvFStFW582D9pXpA5KoLjhXayteNqtBzzL74i1Qc7otuARJKP8APCGBpDieivuk",
  "key24": "2Wfzouz8sgrfopoV2YRP8DhsRbfvK6PcAbr6sY6iiMCC9JoxNEZRzU8d19zgx8UaDe9Mg7VVS3AFcf2tSWUQdPbn",
  "key25": "2aZaWWqTp4B7EXVHgiNgkLKHUSYb6uMVApezMSzPLge48ZPM5EpKj71bHtW6FcTPfu4csEoHWFKgUQCJsHHFPyx5",
  "key26": "3FMuum1ZvdECFVANougq7spdunsKEg2ULwnRdEzN9gkac1kfdf3GynfKZqVXKr3pyyWDBDCDL75bQ6gqxwNm5NE1",
  "key27": "61ZtvhnsqH5ESUFzg9u64FpCipk5aRkEVLuYox7ioMxHobu8YJgRGK4TWDps8vvLbJ9RvsyZzaVmNst9kujjJosn",
  "key28": "B9E66yFpDzF4HLpE5TKXcUpm8crkoq4yHhnSqDW4bhhE5uWv2xKwwDsf2xJ9ojichzJ2PRWemvURnV9igXC6NDv",
  "key29": "44kxMroR58JfSdBcu4sR7PNeNPWZCUq7m3fupRkgGUE5btwPk6pfNaMPonGdh9g7BjRrgX9thKspygpHEVwdNdoX",
  "key30": "2D2fCqQcwqswZLUUiPpGzpVhjzpeTk1WhrpKL3F95ko9V9j35WsuhfWmujD84yxDfFrquhMFTmjby1Cbz8HYX466",
  "key31": "9s3WDYFiydyiKYY4bEJtxGvSRts23iMy2t7VvwofC2qDRjxjLdDCrjSJTSy6jEgFmHRBsnnnxkAwku8zPgcx8Jp",
  "key32": "5kTLb45mL4sRys4aRL1MSJMShUC9gnyY6rMv6Le6tvj9WoTGju1VwjvqsvTKDy5VB2L3CC9pBKSY7z3ztzBadtxn"
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
