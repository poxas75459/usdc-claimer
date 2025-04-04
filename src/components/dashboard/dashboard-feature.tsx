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
    "4ipU9M9vqtbz1mv2XaK3rm3du1LDpsR8uPG1SuEg98CSrAKFr1yjfuxPYpx5EwJXYxAcn4LxY8UtgX9hsAi5AeRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4egckFAWhS4zq8vxSM6AviWoBbiuX9Pza9HraGQLoheYbFaNV9uAXnE2tdhm14rAr3xWz8iKX1cQ4DCXYRGgx7xA",
  "key1": "4aG1NhebrynXJnrrRNDXgq5WguKbEckKoTE3ETHCpQBt6WuUX2MHDubMgzgt6EURYgXjfhR8MryEc5rP5MutmM4f",
  "key2": "3ydEyFSaBg9uxQLpUXtK87Ribo2TwpM5pHRtgNjcAUKrQfoYR74zwXcKaiFC8Gs8aEGnEVVXBCPuydgvoao3GvwL",
  "key3": "3guzJn9tSGPfJjDAPYGjm1uqKrwJEzKz15J7mPC7HmekG7Z4nS7d9kqoRsLC2BiRsvkxzfjtBYb3xkbjMDbhLRbc",
  "key4": "2gkefaJfiM8Nb15ymqJJVGKiHzLkaj8b9YVAw3YVroF8ryWG2SXeLSuMuZbuDxuvFUV4mqkHtRcTc2YX9H76K8y1",
  "key5": "vxFu1JXDkZ7fmSFFtk1sQ13Q4uBGY2uHYNnjpwr2tx7oN7jU9jqRwEeLM6rPa2EBEWmPko9NAZkC3RHwWejHfB1",
  "key6": "5cdmUGmZ66MVvTsxQvRrYkutxycq3pgRwS85HRvpPeaigzeG1o3UjbhfdVdTHtYXNuAqMnG2FpfPsigbn9cDveZV",
  "key7": "2VekotkvDSPFd5EVqXWuixw9FimQfDMrpRyz6VkKod5MvqcWvwTwgxwHyBUwKRS3sUZoHXLFDQRZ3T8zh8ZXF6LA",
  "key8": "2nxiu6qxGzqbMQQzbaprtjdi6KsJRDxNoKJ4ZLvoViNAvhTryq7T2gBjEmaHTxnGApyr3TuCfNsAqsctsMamEp5R",
  "key9": "24zu9macDwiPHSU6gv6YjmThJC1qnQEZcx2qFVww5JsDhnTYEbauzP6ZZKWFdqxFe6FGRJVWUCypfn8yz6ZfPXAV",
  "key10": "5xiQxSYAMzQdHw1pam7CPtVK6UjMAbFK74VWjbRvSPpLFHyqL3GPhoAz1QC1mNHbExsAMUHP53mKbDseHLPLMyXk",
  "key11": "5wXecaEHStc36Wmb7vKzBM7wmj9xqTSHp3mfHTQV3vhwfW16UQxiBreo7YtNJrbTekZRS63JYib53gUzFMEGejVK",
  "key12": "3tpfqAF49ahdSNJk6gupB6P8zUbQc7cEmDpjDvp4vUFfBNjVxEKN4XiE61rhFGDdemahRhxgiR8bzAJvZsgtF2At",
  "key13": "3nr81hJwBJdGdr8EbkuwZUa2bbd777kpGwTeJQ3YdaPrDvwTkirZZZppPBYfPNTSkRQfv136vb9b6yQoRr2CMSM",
  "key14": "4qrQPQXZYbo6Dnduw11fDKSFYk9ggxPJYqwPd7ixrQNigBT6DAwY3wU46B4F1eoDTcY9XKeu7By89Ajg5xB72hux",
  "key15": "cvAAgGmoBQbtHTb1wBaD5nuT33a6NEpe13oA9kk7oZFpttkq475ys2x4rUHcLGb1gDsUmzKE4JQaggDwJHxEutt",
  "key16": "3j27zimR5CeZNoCZv5yu11c4VvCaXmPof8UBviNXgjeL5mTeau5BHpzW2zm1K5BRq1TERSRwF9ccYKcnp4Bf2PcW",
  "key17": "4MwsHLzHeoPfDpkDb2ddN7aFLJevxGU4PWzHuscP7gyC8pFTwhk3SYD7VNj5s4N4RKDyfprMDjMQLUvntZi3diN8",
  "key18": "3QzcMgEXjMjvFcMQPrCmfdKYEcXqT5d18epq1BUURV51CzDivVQiXptZN7WyZPjFr2mDRKUcEjP9FU6i3WFQCG66",
  "key19": "KwijTBchR9oxCM4bcoSXGJhdoAPmLM7sH2Yjfou31yqoJcWwE8B7kKrcZok98sAqM2YD4RJn9ubjL44LZKeyYeU",
  "key20": "3KNJcx8MLa2Ev7tz4S6poUei2H1vreMVEsf93JP4YWveXeGeDNvTwfndZAcaDnh8MLrtUYtHeAndoYpYtuRNMY4e",
  "key21": "64BJ1f33eudSeQ75qLMHHv5nBgYqY2BUbK6GQ8s6vjQmZTBnJzsUNmJyga2zqooDpMzZZZ6fKdCNuerBesPsfTBV",
  "key22": "UnCPTDnsf1scd2dMVTCKeKvDqGpngPt3DLYm2cqsuYQoG83dRck2ZzUCB5wgzvu7TGag4ziFRTuYQRqh56baFDz",
  "key23": "22bSo7SieTprRWcVuRiGBEm9hgYniJcL1tbkofKyLzLqTWcvJPw6JTFQQDg5fLZFJCdsam3zWRwhAvJYhjCSjVDG",
  "key24": "5T47DExGM2e1TimR5R569faxv4hjq2BH6VaWXo3KB1rMmueatGxZcx5FbNVZFbL116tQkfhWudH8FD5yozkme7EM",
  "key25": "3YZRhWjjzRM1BwnCihEkLn7GUoNpqJyngvjnN9FwkS1sZcfGcP3Y4MWfXXcGrRZtLotCu3J18cB6aPAWpubn5MDh",
  "key26": "2CwZpAboBiLm7X1GCbijd3URmzKRYC3iHPZ76UQeg7A9VgsvYTwZk6ViGkQnA4vVwkLuQ7vSN3fddvK1vwDWMTtW",
  "key27": "4Tj3t1vbosMwe2Nb83ojB4uikXqzcqxm1hmcLMHMvUTcgkFvxE1pqubcZMTkfe9DLyaPYPA9VRFVY57mbfztcn6o",
  "key28": "3Sk6Sjg5BTreHqvVYYt9EP8W9VonXQqsxaFHgXSJ6fqzBGuzoym3cfirCNZRx7SVabziqJUsm5YLbE9DDvsEQiuA",
  "key29": "2RKiSLkr1eGyfkVYCeizXDzXFHVkuuqJEP7SaNyyzRw7sZxAnTqc98qag8BACg4c15gBRGA34s676iFZVpbTLu8x",
  "key30": "X5axRLED16k33rj8Vz8GEbWLq6S3wgau4T4eGSHiG7c4GjPgVKcT2Hw3eK3exAR7ZfdZoQVVFYFBFYqGimfCEpJ",
  "key31": "5EdvXKWFwZnrF5dgU2EbLuRM893SJ4FLkAQYc1RTHriMJrksEPSVLzYXciSxVi3SMHkvPk7M9VBWaLgNt1ua9BGX",
  "key32": "2n4hQKKtg5La16iUzLTyf2MKqDRcVB6xFBHibLEBBxSMakGpyGXhBJKxvqgEu79kZRLCUAvJg1zx755VMDzS1HVa",
  "key33": "2qNVbvuQDi22dnpXSh5aoyfRHRwFkFEr5ohvPwQbcWpiAGPMAiyFH6nwVPS7iTNnfPMjc2m7d442fPdtRhoaWPPr",
  "key34": "fXF5nJxjzgPSDTaBKGWfR64iR4ozNqjE9N2K3j12DSVsbo9aYsFKcrECXpQnzDz1pVQTGFThefEtgoAamJ8JRze",
  "key35": "nUDAxG4p5KGxYySUPRrpZ9DnCeymy8LPfGB8vVMNiBG9nefkUD4ZfS5sYEB2PK3nqc2ydAZqb47Xhph5ku6DMLC",
  "key36": "3gFebt5uUMQ4uKfFXr5xJ5rRSa8QbkTbpTUuJNCaT5rEfLHbFQSGmgC3vXvZuGjd95KGNq3jxjQtdSYp6giFT2Lf",
  "key37": "5dvqs6mraT4Q45sdkUdmVNYGM4NxQDMsYskP5oA32JwnP6AquhaVLCzFLfAy32ad913f6qJwycWe4j31RvssP5ub",
  "key38": "MK7dpSXdM4MHs5XQzS3H8bAAYQG24sKQEjGB9xm8yb47zc52M97MR1zPiSJnLWgXVDrPgpezthKag2mQYZgNfyd",
  "key39": "3JZGa67jvbCTDfi2xFaSn6V7qfBmfoyjBC39G7zG93MGRyqzcnEn74CoSvbKEoAsEhXSLCmmxcDPPgzoEdUVhrDm",
  "key40": "29CsafdRSKYGQUuDEX4T8ujxn5Xv1zVTKFkGFTC9HZGgKsPbTt5hcGjrDHcU636V4UKkUipKPtz1uv9WFDKgUfWx",
  "key41": "2ZtmNbWuDVv4cnNMRfMc9xDyGZm2ddHNfNHWc1sAB1CUjECUfrK4qiVUQmosodVNT927BF8ttZaEvAbMMunCUjjq",
  "key42": "5agHqyy1j8UJwo72kZUkqFom2G9RMAMQmefMnrRZcdHnP4J9LzYsQznuDBweRXaEXkSJWdDhrQYCkFEkLooXmoAa",
  "key43": "4RZsebBaPStQCKyRhXXWctMUBmpG41jfcdXzsTPhSSJQMvSvGH6vYSuMZykdqqEUmYWqsM8zm6nVFgGnNiCU4pAt",
  "key44": "ezLtYe1FjeDRHvDfZpHvwM55uXR8tm8CesZcZ3tv474SnmDaWDsBakqGZ3kFPinauEpS6pGGkpfgKLcqETymyvz",
  "key45": "2qDuD4LVuYn9WCUCSYTZjjRbhZEcQwmf18uMPZf5MkD1BguSC3N7XKRJbP8sFP8meweSd9YaYWqJmNLJMVAPK8UP",
  "key46": "4uST6fdCNRLBd91e5MXW5xKTi1zUDzYo8LggYJnzvjszSDbU2WK9jEuHCEKLaUsPJLZ18DgNAcut11F8MCjauJW9"
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
