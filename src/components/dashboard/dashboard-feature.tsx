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
    "qVu3GCC3bjJWFmn2D8EZDX8yxwyjEsncbcchJQdDjnEYSKrN3w8Kv5pyHtkKton2KWNUJRTTfdS8KkPc4UqjXLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZJC7n52x7WHCx2QqwbDgGEuEcGXz9dWzi8Ehfox6UVC1AGMVErXd5Xv5D1C1TUDaAqsbhfB7e7YARR6GK6oSJMB",
  "key1": "2wAjNYmq9YUsyE7YZrqQA5GR9BoviKuheUucWAEvFWCdt7pDAxJeBjMGquKg2WAWCt6Pas4ffU4SfWQyp76QqJ67",
  "key2": "4nv6kTKMN3JN6s7cmNWcksdnqF2DqcKJfX7RxzkGSvaFeRfSkH6bB2MkmpqVAyxbnu71K2AfW8vFhSCm1sNcYsN4",
  "key3": "2uHUiC1vzAgPBTHg9R89ShtvVb8ULJmYBXXgLFXiMvAsDUUT8mDmw8TZhLvpqhNCrXRzARMbLg9BPCSfMpdY2nkv",
  "key4": "4k8DVfjWm2Hd3YrQo6P1BuUUtHigK3Xv12rdFHgdMVcLCPJNENeRupuQmY6GouLi7RZGf49dVzCSsh7A9GQUMkHd",
  "key5": "3c1cqDvY5JN6yp7479p7YykSNnETS3PXeN8RLgTbQyV38znSurw2gTNcrnYzBadsW5hEwtGpRwqcY65D4Ah6uWiv",
  "key6": "66ZKqfYveq2oCyhVm42websKE7x2sqQMS1EQNAbZdDiXckZRL7MQSqqxufXNCzohzUW7x12zJTxL6JU5VoriVjgJ",
  "key7": "2EiJW4G3ypWwb5S1KHbF3KPcxdvUjq2zUFkLPk8qenD7o3tsia21WYxGK6Ak8aC7goZFhxc6DFaMjB6ji8qQHqCZ",
  "key8": "oJAT929J7Kqq6Xmw2Bx2yYP5UV8d6jUVzuqB5wZC4S2q3z3GP2UYNAXM92sUq4SqHt7wWSHZrZxgYHnxYdTBJ4y",
  "key9": "3usvgR57NmtnZV6yikmtLFFSti8mQYSypds2AwciZedVJUorhf4Gr2sSKRGVpcpqYFgsrffT3WPVUhsC1BZwREvK",
  "key10": "cDyASU3vr7EsDkL7HQh8eRaGzvRxg1QjtxVgLpFkptc5hpBMCb47789bw96NZm4onJqYRcf8nREK3sMw4b1ejLy",
  "key11": "3MpkmbbZbDMunH9TcuASig7cwKByEevmSaYREPy28ejXi7m6DNhyDUXWeez2AKZBEZCprbaJETAJnTZYoHKvXpa1",
  "key12": "iisLXU6QW33Ku51TVw3YezaGSUGVjEHrrzicKrLWcCwG9KdQ9ep3vB24nQu548jcYoRWcMLXCCsLyJdkjHvFVRP",
  "key13": "5XLaHhds5h1akkV7PRDJb5x5yijaRRST1EmZvtVQBicSBVwrg5G2eJ8DScEzqJ4PdXK54pfKZyW1rJTumu5AN8nR",
  "key14": "t1ib9vwTdMsX5Wa5P1zg5encERKzEQ9hULAWLr3jfP3bLMBcNtjpNgCpRsF6imBGBiArRZueCZBGhuzGXji8pL6",
  "key15": "3dJv4LZd4iUePreFfyUssQLBmPbbYh9VHAqPzQRCZmUwcK56qBFuREvKF23U2Jkwe9GfBMFb7Vn1kM5byVbgAFi7",
  "key16": "3hQVwuBgKHu8gGrP9WDNooWM75rdkn1sGKxN4iHt4QNZDXW4WDHPXpd6zvWpLKncKLjq13m6JSBactX9KLkZD3z4",
  "key17": "2PrQztgQhBxiqyGhqfeGFDuJ2ehc4Az7A5dHiEGwJfmT1mJojhbT8wJS3JqLWraPhD4DP9sC1UCPAiRwyVqZnYja",
  "key18": "4dbinZUfcvjVLc6gXR4NtA7kzqKN5MP7quK15RxUbwt6ZGKdE3szVw6DaGWfrA9TDu8djgufQ5kp2Ww1YVx8qS5N",
  "key19": "4ALa7QajimYWL9onRqejdhMNCqtyuSSTjciRsDqVGN4gqjzwFNJCL6ZwdZFyYsYtgBqkgMJmikC13F7muKqZSYst",
  "key20": "33jtG1yk4NoWTRu3GKaGF1zETSWeiUNuAp24rmDZG9vN8uHBrqvbAQnMu1j7JJNUHPRfFNkQJNpXMtF6qSuUAZ2A",
  "key21": "5M6EtS5WBs4Pw1VJcqWHYBX5yCeHHhFCinkEFW1TDr6ZoDGFxrbVjHHUbJhzyMWUSAtSaM63gHQ32CUaDAiG8L35",
  "key22": "P1wLVn74GYRAsCjvFvMUNDAku93nVUY7JTznujv2PrRw1YsBrJxnxgJAhzyuJtu8bbPkjRWzscmLG1CUqMAW35h",
  "key23": "5a5hSe6DB3A39zx374BCM4FAyTZ1mNGuf7iDkh18vJEw9zbaZB9MJu1ftrLFqGX9gWpvNkqkXV7kQgXwVCi4e43W",
  "key24": "EPM5LCaVZ5yAZnsnAzFog6MNceFLiCgJfpsJNmYmJunScymzjd6jMaaszpDhvjgsyzESHbMpBugQR1cTkzQK6eb",
  "key25": "5BnYve4cboKAbR7uwMrF7feiTheWTvycew4GTzug4FyuALrGTQTixEdWFKyzcfHnqyzw4hWTka9fezM59dTMnYDF",
  "key26": "VbUN5pMppUWBVXoT3gh76cdA4v1NCfBBdxLWzFN78KgYJ7AaKGcbwqhmcvGVm9aDbq2WfpMkUdHwryEtzBGMULt",
  "key27": "2fhRy5ea1y1yThgK7todNAN5iYP3qXLQ1mPsLq6iQc7hvptgUymgKuN7XJeT3zs68PqkpUsUWiSvKyr9gtWFRprM",
  "key28": "sb6bRUGhq19nxkVw1xBH8gE8bxHFuBgNMApKXwnpEbAaLYpppToLyfWtCPEc7TspBaUt31SzuRKFi13ywNotTAo",
  "key29": "ZbjJ9ErQMswSB47oZKpiMzpkZms5Nv4QHEmLbz6Asdx5NGBq74s1WESM9Stx6V85pCC4s9ALFfU49mZzLgM7are",
  "key30": "59LGbG1LCJyDpgLTdvVBrRsgWwCC8jq7xTxmkH7dkASidCxN4Vnf9jfhiwnSkwRBUCshqMHq2iMxZE3mWRF2thRE",
  "key31": "3RjiPzy3v82gKzQdMRyYXFXJbLrwM8QNHWf3cRmwhFuHzaFpAnTGv9xLv9Ytkufgs46sjZwsranDd1p98mmqasnU",
  "key32": "2cF9mDi1hLn1wqV6tsvVbCHPeA1nNXqq6Lq8kkzxzUvaaX2L3q2WkEi1DGT5kZunajPe8qoLnsoysp9gk2sanUt3"
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
