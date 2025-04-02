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
    "Q6VgjVCxJmWTZ3b9FgpKzvds6vakMiWQxVx886dULFqXtUnBQF62zcBGHwXffCQaJXsPEfqYXerm1kSP8fZDumE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q5AVfx1r2NwcoBd6c9j65PLUJJEooFC4ca2CSnscqyepJNmZYEwjhp7oyB6jgULonWQbbg9299wwxAw52uAAjgs",
  "key1": "37ibqJHhgK8fFdYjL6hH9QsVvm7wbBwx1Xofr5VdKFvMeScCQt3Jqtm2LijVZM7JUsjWoENHpPiLLZajEYEGcx8n",
  "key2": "47h6VCtct9FuqQn7DDtiLTboAHkt56HnrFWk3fon2muaU4kvmqoPviCN11vALPLjjpyzK21EDhNq9iqB2H9Ejizi",
  "key3": "4qUfPjc3BmxhHd5dnKxfjuT43pQwCF3N4o5Cx8vpYRNRUUFBHxBMnb6akh1QmYNESbjnaBUJw2YB8dpxPGWhGZ5Z",
  "key4": "4tAPkyJ8VUKwXWX6LA9gZ9E9EcEV5Bx3c7jMhKzfREpLuXwmwXSU1nvGRu3vj4wya5EVJU5gb9SF8Z24G7BVXc7R",
  "key5": "2dRmgsmJckrc89WXWvVPvs2wvqg4Me4GoNz8Dox4gNBsQUzPDFKLBJhwHoyVxmEtyEX59WKgqKvxknYdjydkBC94",
  "key6": "2VxiqWQ5KVA8J7yywharcHv4q15gzSzxLG11y1fCgEp4ScTbNnhgUg88i74pykXDREzVm2QwZ3CjDaxTxFiJfCH2",
  "key7": "Q2xkPRrd9evEZPMECzM3UxEoLjRRhUVnMpogJuvkSK3c7qNqcizHQH6fq94EZ13ueQfr22CRNt346KtDiJYd18d",
  "key8": "55bSoiQouEgWvnNoCDREajr7ZDAoEMoevsuK4dcqNESzG5RMqujqaJgQZ5zPpPhEw5LmhwXAT2NLKriyHccmRWyE",
  "key9": "2MVhT2UAXCdXfVUNGzrSegXEhcZHkBvmGgcpMTPPY8gYDDnyQu8wcTDd7N2YNZU8T92xdd6hPa2zmyV2iZ3kvBx1",
  "key10": "2pLnBB938cV7MCckKqdhiHbdUUjosTstw6ztBQKa5n61vPd6fVhPxWK7QYCraNxsA5htKcrS3xjG1TULirNw6QJR",
  "key11": "5ergfvfxyKV3MiBsHeB3B6DvxPSkSBi5RHdMaYyZyEQc4pYqNBKTchuvnho4cU667wnK62EoaDZcBfj8V467Nhrz",
  "key12": "51K5771xpH4s4T9wGPRVSfRZQJ5W4BosvW47EudjvDCRF2xGkGpCBKK2pKMFAxcucikEW1MgduXPm8QaiVHw73EN",
  "key13": "KwJjyW7RRjQ1iJ4c9saRa6ZZwR1LLQVU1nVD43j6Yf1rzxXpKfvu3FpXr6kuonhs4QtEA5i2TZdvGN4ZQZw6p3T",
  "key14": "42612eRaXtU1Cif3JwwfJNwHgguaWBykJj3r1NABQ68CKp8GDAWVTSZFcvxpARCF9MxcdmtLEhhqT6RK8b3d2R7M",
  "key15": "fNm1HDL9EHSkccSKaPWh2iRhoQgmuyjtpLx66DWQy9NrPnpXSc6C7Ds2KdF5TzD7U6F3GnKseaztr3R3Zng3LGN",
  "key16": "LUvByJXQdZDxrq2LVG9aSbPm37SbwmxaYJMrJTgejjVbheSpWLLR7a5hZMu5KStpxdXQkdC9nbS5Gdjj5YuRJUW",
  "key17": "MT1AwvDDNC4nXsixYx1gVdqsziiBCYcPQ6HXjC2DtasfyASs1JJxNytawnreqxJ6PjZUNDBdJXmCMr2SZT2aTAJ",
  "key18": "2bfXPam43BswfkgGjhHyQwo5MhEp93TCj2mM2m3e8jMS7V84LnUvXDcNXAKpqtS5H2CNh4xjnzojgApd1KyoW46y",
  "key19": "oponxbvK2RxYBe4UfmSc2zMubRCXmEQdMhSQVpRwf5bjsnUfGZvo9NzD7o5f87MLZ3UXAcVeW7WeGpZnwJfkvEE",
  "key20": "49iX65h3w2WFke5Vu4wXDg7dPfd5vUbaLd2YAgBkFJPv6woaVRrGwy8eU4WkZGqjd3G2b7cHVXubfe5PwxZeFAYC",
  "key21": "2CnUS88fGg3bsbJMPfGj34m8TQ7TjC6f6K6xzquWQoWd17dri4byLYW2GyZwHcTSafL1FkRhyhdaAyMzs2LwACCn",
  "key22": "3ruvDUk6VFyxYzw9mcturpEW7Pi5HNm4PcH7GU5p4V4fcasAxw2NxxRtSqPtZuWS4QKWcZ1CwYtkNiczUNBhRhMA",
  "key23": "3QTePABTUXYHRFeWs5LK64PBQRtcA49voHkLaDTNxyXVyMFmcQCw82aEuNseae7mrAnN3jyr7GHdyQtcvJYQvzrs",
  "key24": "4NZ2LAgwax27SGpr4VrVGjCqfHMxDtkirVtGDkf9rYyCEFqJophfc2pD7fC98bw9qhCYqbcbDSZosMsy5hhdm6Av",
  "key25": "3JFpDzeK3cQywHe4Wf721qMQJGFzjuPfjxtSzmKbQtyenebpUtRFnmtPowfxK9ekHHig6QvF8tA8QEsAr28GUYuU",
  "key26": "4q9n83SmHuaUGBdSZxin4BaHMEvp31sMsSkbHwyrdBZS6JHkM3aFR222GbtGwJAMFzuUaW1cXEmkQwYcMW2mmSr8",
  "key27": "4Qq9QZFauSdig8mYmgmS6LeBmjmcdKGRKUs7tYhd2vKo9v9Dp43KmFd2d12JB2b7DC2o914rnjsNB7BKoQBWukhL",
  "key28": "5TatMZPWzJCThDJh7gZK7yuLKFjeysHNdqHHduBSDy25dhTm4kLMWZP8PXDZh6SW43fqKya5r22jGPejMPqeMBYp",
  "key29": "3DTyGMiRyJaYHwFfgNpgNTXf6RdXpjBsbeSgT7941rUnsw8KmFL7CFLQtGbBKeErAVhipEgYdmh9CNF3UHXrc3Y8",
  "key30": "ME5Yy4yPfWnvqFiJBkn7ETZg5xGJ6WMB2HJuZBvNuASWDvEarAExCmSdWT8E3hTxR5bEpwsT2LRKjJsgFUezuqn",
  "key31": "5JCYMcer2nyMEVdMGF2b7kLgNH65amhnutrafhzHzbiUUbqLpZLPB23gBH2KTXt1DY6ZPruR3ZXiLvw1C6bZEeTS",
  "key32": "4sske7cqRxCQqGMsNfTXyfPLtX7PQ4nz5Cv8yiUGq17vMBTY8LLN5QaVDx9tZSjwx1YA7wRDU3CZVPp9dqsjtAk2",
  "key33": "nPRg4uN3qYxaF7GD3TwE1JroBgd6H2mjwDqv2wb77RgJGCUx8emg2YCWWLqitGLi5xn81PA9PpRtfSPomZuP4aH",
  "key34": "3B18fGYXE9rNNN7RvF9urAyKiCHoCRY4ms8TXufncgEyAnvHMUevNkQAqvTC3P6dF2aVpskoa2xCkuwbYiXsxdJs",
  "key35": "WBXT3RcEHUmMqj8X2wmJYjFYYYpihwLyrsj1hWNUXzaNfW5nByq62VjGDK8FToWS2gB4xsshfYmDBUDuyPHVrcj",
  "key36": "pKZ7EAryS7CJaS7fGwRA6FyXFHjQseD8F8nmxAYxKkqUgPuqPv1NFKuGzpCeJjZ8HSDrxbdRRZvJYXc3smVWqYP",
  "key37": "2FiUEExgUwf6MySgNmyzCFoTmUCXVzC5Kk51TULA1GntrHgjMHsAWDtHgSG5SDqFwapJV2jWsXWGwXWB7pfXyE8S",
  "key38": "65EjopX86dEggTG4zFSkXPLNwd4HuypDk9SXEcV2uL9dzJqvbX5f5SQ9rtYL6aav8UTEgraPDA7SPBdE4GCtrvsw",
  "key39": "2uu3MvHdY97XfobMGH3Fs8q4dqtQQfGEiRJMEKrNhLqaxJRu84aZrUS7bwijVqx9zdH8db2TLYvuAZ6BUhsDShDh",
  "key40": "2m9eZYX6riGAM3XvdQUtFs36ECbQCukMMxCpSpPsR8PZMFhehHqBQhaRYA32zb4pyAfkCDfPxCozuZf1cSNAfR9x"
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
