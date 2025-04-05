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
    "4iAriLXmhyCz1PShaUZWzqHMMJzLQFbKrW8txYuZSxTWSjpmRnZQW4Y1ApN6D13QzQwiUmPGM8G6XAspZHg4VSsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jNFWiuYuk5EkniB38sEjNgeek5K1XHqa28GhkHZFD8RovSKen1N5djPfgyUyWxgXd7ABCd8LLXEmMBYDmxmKimg",
  "key1": "t6pzLJtk2TnH8Wbh9z5xVw7Mj7QUT5CCZ71gQpuMgxoXUd1Se7MwPpwvNUBVk9pdvASTCEh8wqdkhUxCYRXqKuM",
  "key2": "JsmJ8M4SBL3WNPrNcBLhCcFt3vKme61mCZfSZR3HqkRTzyGgQosrb4bncibSdTBbs7KZCcmtnuhnxJxfjzya5yD",
  "key3": "FdUZ6qEXHFCgexBK1fUkPock2rTXXrM1j5DdUYP6ojqduLEHxvtWwprwAHLHKcJ1DaRWpJG8Uiy3yQs3oU2pGH1",
  "key4": "435xaYZMjaQjTrxvmNDSiwZk3xKHnjjUKRi6qMt8eC5NT5dBEJe2YtQMtZVsi64HwaypGjQez5cV3rY8KyPATr9g",
  "key5": "4FgRDvMZYgDyzZGBFLKJjfNTYBb53sKWfnSZopvXajyjqUQrZkNA3kCe3yAjg3TxzsPse181P8urq5h42Cb8ucbu",
  "key6": "HQEbRvvLs5San197cGbZFtVzexagXLEUdtfRGQtqMxRbr1dvpEeb7BvWAg7cm7kLGZfdWb3SLry6UCLzZ7n9BzU",
  "key7": "5D4QMmNXXA8c6PeMPWFxwWHSZEsF6oXrtEfJ31ScaZj5iu8gGKzoD83GXULhK3HmZGz2nSD8ye9WeY2LWi8f8TQp",
  "key8": "57SvkSCwcWd6eHXRSxPMEtHPjafckswpu3mrugEBkSiMeqY7AjhBqTip3ZZsBr75MSuZcqTURkPHgVK8DhMSFdxy",
  "key9": "vMtkmUh4xZn5ZFcZndKyqcDhecemfVjaGDiQFHgFoay7qkUDgHdiqCgWBnfVUgTz3LfHjK6qVV6Tmrdd5PCvrdj",
  "key10": "416Q1tFZ7EYcuGaWN5gD5ZtjHmE1uVqjDhPqCHLZoyh21thhG2xS8qpdsn9wNVZvxMUZyYNNGP48XdeTkrXxCfDk",
  "key11": "4HV5b7znL3NuKLMgZPYn4pcEPosKpHqYveRZBuNZbaGAfMBptYDFt7mLxBpwMG4RAad15fcDPgpfJSQtbfzrSkFw",
  "key12": "3tpurrhwJzsEdmRt8jg8ZYedphdMusPVKhzhRSTiHs2eU2mgfW1VD2S4uPW1nXFgJZPwCeguJSqmoHXjPp12HnQc",
  "key13": "4WqpKMNYpjf9yc1CC6VVzgQHQooSV2ZwYKotGzvGUKc2XWYXZ3pSNAotbyBxeWNGeBNrg6J5BXfoHPuZa9hEW3d5",
  "key14": "24TvipR8GLScCT1eF3xivCWziF1LhZe7EpBp5qfL31SMXiKjTWMSXuQEMXdkPbx1uccoe9nu7mdSAUG4XhaDWx7n",
  "key15": "59gvSvCbxahpodzMdUbPthg61cdw7EukFBVnCm24rWtqD4mthpyGXLZ94gFytD55HNyq2VN1Y4BD7Nr5ysVPv42J",
  "key16": "3ZN4i49FbRF7i6mxEfbS7RCdc71KJjP85WZ8HJhrCQxm82at2ffutRqMQsoPgMz5cYi75NdqGdVFHhVaMXpE1bjh",
  "key17": "4uy3aWHe6h7RFU3g2VNL1tUnL8dNe8rsJWyghtJLDy1BfpszqvD7rCg3utoHNMaCFNn4F6rxmHXFD1i7wsCYV5H8",
  "key18": "5n7oYj3FYtjdL9tAzjyV318NrhZBzDZv2md33VzUWSzvdRcz6gTGFTp9LijRgLvWZBtBwaCC4yjUZ97CErj3qbbS",
  "key19": "5P4J4Swt84Acs7jQtV7upr4vFxtzoU8UL8mjiLTtNhVSUUEm19xPnzi9eZap4zXfq9jcWCcCpDPwyytHdkRfhXiv",
  "key20": "4czv799mq5z8QHJgZHUGNeqvTsWyPdwLB34psyZQNseGjLABMTCrWZ441fcJyskjMqMaHvdH5sgUA1Lw9FJiEesq",
  "key21": "4RtwVi9Bc2BcHkMPgnM2VVgH6FutDTAW6twECU6JdMC7UQ7Re2AyF1fyU6WpQKU81KbvcuMdTEuW8ipirsyb4wnu",
  "key22": "53DRZVxUpziPgu3xyQLS9P5dPYddyGtv8My1mjruLk3SFnjMERuSPiqmg3ftRxYHWfw2Fs1zVqqEgFCzojFycgrr",
  "key23": "xgedHdeKbAcqy2BvXmc9Muq6DYQdaUVbRk9tdR61nV2qScoTq6CY8jSzgyNwvrQQyzirddD4CLyeW7UrYsyLT41",
  "key24": "5WMFPypB7MDU3uEJrcd9vtNf4ak7JPq51dWSb4kWyGgyq9zRfr2seT9HKcE5tJ3WnJ1bRAc8dn9B37yShZDQEEk9",
  "key25": "3wCGq8Hc9e64nFNvAto6NbPcEhUfQmcvkCWLrhr6BM4uizfCnkQVGaXDgRbQP8cHjvri9EVZKmZEd4dF28TyR7S3",
  "key26": "4E2fffa3qcoyWvsYYGPBsbg7WK5DaEK1WW3L8rAD7Y3gy8U6NVKFEWKa2GFCZZvbusSBT8dTVvVedyn2NpGDVGC5",
  "key27": "213apuAzQw6zoGpezLcxGRsFUpwfcJfWUJDdcZHpiL67qFnncLhYYpSNGxSno2pu2oU1pyAcbjMv84sFkg6NWHQ1",
  "key28": "9XShNi9FieLWZJySdSW8Co7qpLK7Kc7qq24TjDpYioxYLmefmBoy2B2TPA9jTBcA4bboabAGXZ4fVtZBszUJDqj",
  "key29": "5mxDpuUKYqgzFosZxyfp2kGgNWtXdLuQ6xAS6wzxsZG5RqGtE5uvBo7p5gt3pQLhqdbSreCiPWGke1qhz5NRbHc9",
  "key30": "2jxwQ6dmTZX4SwP3fPsZoyKrhjHUcFyJexPGKNtYMjKAnckPMX11RHB5jHtgdB483cq5MEk3z5aRq1NHiFPphY1M",
  "key31": "3QxSAbHGb12UFhMjAWbfS2PzhH9NdpuJ78RrGeNyfpqtgNSskaWsErLXns8a3YCWTeD1CPpQmgkZasPZKMnUi6iN",
  "key32": "2Sfuu1D9zsScGzTpLqiJX57pu1je8nAgE6jnScGqS3VvbozMY19qBQqQQdrqQsx6w6VVLEdecf5LQmkpZ8PpNri3",
  "key33": "4JcWokK6JyXu8QsVRfebujcAtoNHPnDLWvQgjseFGjc68tMLc8Fuy1xkDUN4wwB6XQnSWA6T4nBqMUgGzezrRSv2",
  "key34": "3vpA6FtQWTAE4yWS2Nr6Hu7dzAqkTmFd75tFZujAAfb8x4ej1qnv9SDFgJrYCbpCDUbuvA3biHFHDoLZaBV97gaW",
  "key35": "5SGaKNzMEGDaVZdo38UsJQQD2x24ZnT4KYBE2p6jt5jgG5wxf9VscujciKeoZHohQ7hTpyA4zsqxDPhXMguSyTTv",
  "key36": "3KpwK8Kwnfep5Wkmt8AKkyTjjjWPXSdncfHS3KBrwQDekk5VPQWYPPXv7gvQL9h3w76eJjVHgVeGZ8N1bHeHATWB",
  "key37": "5EqsG5TT7EivBVf5eZE1tJEGEVQtzZyWxrqqKmCr62KsNpM7Tk8KtK2qnZwVZwVdz3x4Hg1fPnTKfRCMx2nXWw7d",
  "key38": "4F7cDKXTbUDAt2rBK5uD9g111cShYzuEEmXjZH6fPN5WdE6Xz2VKWcw4Y4NXFdRAnoifTAPFmaEv5Wbnqf5EV9KS",
  "key39": "LhZ411DwfNGZm3RjHzJPriAvuvADxnGvdt4REFBAAGgAz8w1SgK7Wx3rb7SFjJcRT9WGe21kfwkzio2tyJ7TkzV",
  "key40": "64XpVbdiBMb5tm1MA7A9EeNrAiaum73zEtkor4G3xJRKcXvwW7oQb72MPuB2KGqotnvQGjrcB8WXLg4fgaYquaf4",
  "key41": "sG5rbt8sXnERYJq5Y5AimFRCksD4296buRrWdXempy4RKxue9HWXx8dKPKm6UNC3FkbPREPvMRh4VLCVMDzcrxC",
  "key42": "4sqHNLCSBH2zLZMSqxY3cY1VZGvXtbU9NGRgL86PfHDZJm5eicCqqnxtsnhtusDvPeymwgQCYv9ZhBGZp7oegZgU",
  "key43": "2sXbw6RkMKqguTMQFDyJe7W2CqnSUDvCWRQs5bDWoZnTTxw8G7Q8hoActSHkQtfBNXDnUuqHXqsNCiaTBV9djwGa"
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
