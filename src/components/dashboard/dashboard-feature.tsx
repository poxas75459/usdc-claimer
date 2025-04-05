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
    "3wWaXZBLU6zuY3Yhqg9y2kTLRXs1mv41UZFwoUQ4vCFMdkZzJGFAWXQp311tmpynzdEcRag8scgqmYD9z9XoZY89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E21QuHi3gKMgMLr5jqhCSpU7MK3v66PrAP1w4HeGwD1u73hdASmQAkGdLYKywQ6ag6nWjneotdGmYc65WbSbNyi",
  "key1": "iFZFxhw84mNAzs3VCwPMYJW7KsqdBQTqtg5KuuqDa4VnnZVRP8nqtzhQuEUizztcxDkgu6PjyaTdTyfYdMYv4z4",
  "key2": "2d1y9FZ152phzbf7n4tXgbHn8sxmEAECoDPkhYgmTBex4D7Wj6MaRWzGG5X4bzSXzU8XEt7rmPJj67YFFcS2tYAi",
  "key3": "47K1VgVQEPYaPBSshBjPuqxSVZKBP4NBw9MRrVK5VrztiFKk7Ro6jL8wzrC4tcT5UxXTfaaXq3wHdBCNz2ryZm3m",
  "key4": "BjqHBCyqkRvo6zwbmVtv1TcMGmEdc5RtdA6iGzAriAhhPrtSPKpmoBxYBDnUuK9pRNY8vvqRBJtS22yarSEXMwL",
  "key5": "2wCzYmbXYbNXsjSXRqrarkrVEXdNfKF1zUpgThXB6C1QSfrktfS3WjNWny3TkuXy4YRdb7bVV2KNEnTfR5R1mDqr",
  "key6": "4w8P7XRYYHufEPXZXEnAn2W5vax4xpE26sdJtFquEP1u63SvTuA2ZpmKmEcQXinkE4QbDpQhYknXX4p4PpXjwKWi",
  "key7": "4j3kCwdU9yVgSaR6UMx5PGgmFkAFAvS8UxTHKek4JvWUqAm5KwWPyhMpJhyWjoDMhoHJK4nZ3PWitHfRM6Gbg7i1",
  "key8": "2BjpCDKzWMCdhinQbkHf6uf1LAABhGaJNT7UY4MavdhJCBqyLmmBCFDhmfoc7EZ6eTn5jcYTE7MBa1YDC3fJDoPm",
  "key9": "2o5bZdUcR6hcahkn3CfiLh6xok7GfoFCxtQ5N4RsiXsaYyoKQnxbPYR8h6re7rgVfeueyXkTtQDVaRraECEgakX2",
  "key10": "64fh9eucVyv88vUhjUAidBN8GrKnamEDC9D9Nfps8nhpbJDYoxoXUw4Qkt3eUsYuntXFaZqSWCYztKjAB7256FJ9",
  "key11": "LR1rZuAM7nMbHMT4WREjSRGUP2QUmD7R1kfeiFS4oJCi3fGFYxbGytgjmdEFv2N4irSLmvtrcr6mkMyVMPi5FRc",
  "key12": "ZZFnDayeKTFKi5dn3Lz6o2QDAThavKegXpdhiqyBioAeHHwkZPU5SmCD9wYXNcuysB8pbwdm7GHr7HyUi8otTa8",
  "key13": "4wLTB6b8uR5pmEMbPQScEmXZomyDd2oBet9GcHih9xHpTn1VXdfzDf7uAdRkUkAFmctsezrDPZkDjxfugpwieCvR",
  "key14": "2vFS47dWC331a5FtzLHVnpMX4tC5wcUboB3w6EzXXQFc4YdWyYcnNsYcpciC4WJzxgDnZDX7yFVF7tsJopLznRAS",
  "key15": "3NZX18WpvgtBJjY8h1wxv2LGR9rrxrvyLBTVRDramUjk7UvE7jJiwpTRLvEaQhPJJCtoBHKTkNeEYqBrojfksWMb",
  "key16": "4rm1wRDaT8p6uVD1PjuvkEXBc3fPMC4CEpBk8pe9h2PyXDRS4zJ96JxkJx3KET6wh2T1wZSVE46HwKRxDMgJd7Vd",
  "key17": "64PEVKVyDX8mQnzZhFJQ2KTtGmHcXbXZcCSHxySD9oBePim1MWToRQJoGNnzhdsS2bgU5qnKf3MzzW6W4hZUZssS",
  "key18": "5wJt99NzKddVwibTz5V2TkttvvNGCEmWHr526EwrsMFuXfNTuKyWw6LKr8dzVei5yzr3xGSAv2fCwYCebHsDxhCQ",
  "key19": "DX1EVqeuBL7kEhJAr9JmuBJZAhRfmmmh9uEFX8ujq3XnJk1ZhEVopf2yvLaGvcL3yRh4G8H2CooE1KELqBJWWV6",
  "key20": "2Wa4SRkQPoBdMXDt4qSe5ARqBfn2FR78wfKH8H1L78jZw215qqu7JK1BSD45UvVQ6fBBYpmmQwZ6eFEEeWZ1oKGs",
  "key21": "582PhN29df66XFAam2ZkcQ6WevqHDsxRT9hiQmKKx3ns8tYDLJmFeL8U3WqjWFxPVDL6WUsCT7bLWxAXH11gnaua",
  "key22": "HYiCnKSyVMsrnM8G4EJjPcpD2ye92jPUcLFW5a2ChJ6wnSaYmHFE5ftZUhe3AysjmFMhPa53ScF9fTpRAM3LqcM",
  "key23": "56rTCSp15NfH8ms1AYqEFwdUaRoawaJDG5y77CbzToFWnDzXe7LDn69vpHRCSY3Q2EJhpD1kErDdgZ6LEcNB4rHH",
  "key24": "2LZrpJkGD6PVS16gfu5aDFtALtKNA15RK3wY2T1PBePA9ZYd5SbfW8oKh1pyCu6frBHqeJ4hgf29b6G1oK8KbXTL",
  "key25": "QFPT1qAnEWTH8AEp4FAhuJ4bTEFeYMK5GDGE2Rm7RUUQKWjdwGWhEqEhZGuMSNrYiutvEtvW4xE1GsZvrorRb3F",
  "key26": "2hpfgogmkw5VVzUTN1uUhka9hStW9yFXwPHVYXQ114vZ8WdAgSKbhRVjUgWKfra8fXdJT1XHyjqs2LHaxQxnNHpF",
  "key27": "R4LhtFpE4eBwrYMQ4DFwefQGiqHGuYmnesHVS4HbuRUGaWyPZDhuNzmnkLwJiRB4GF8YusQixF8XfcHZ5UJones",
  "key28": "5rzJpkNWPWkQGiEJoeL56vdocDbHqsFTUeVKVPidi9EU53h9T7y9PgKnQRpAsRGB2SLjw7Wm86NKY39vgQBtYSxB",
  "key29": "3U5Kop4U91BzQxavuyLx3VVU7W8HUskrGCbvAeyRoyCSh1eAEKaxsR9bUhFQq8E82Bxm5NL6U9MoA7PMB1Jbz67q",
  "key30": "3GaBiCUCEVJiySqtaDV75Z16k1jcFZGykeEA7QmnoL6wKsHB6M5YCEejJRcUrDnidmMvpYGJHnYSNQAwARz6Wvig",
  "key31": "2uMDfLWiDJGmemwA1ezpPkhufHegXur5PBC4ASDg2N2wqMe1USXfZHU9PTr4WJEz83oB6HVwwjV4no9vrXAbUkHw",
  "key32": "2ymyie6CWRz8LEQVMZs8pGLf64rxZCK69aqpcQ35HPyfqFwPrKtt9M3RCfPnFiaiLfFKdNQwE1kQGDMWfEDenz6M",
  "key33": "nzJkzmSWRMVAv36ugEk5SD7UgrYaTnHyuzzPLW9SxXiJwKsY2MhiyBH1EerkbLoCgyAqx29thxPhHS2NFiy8g7s",
  "key34": "VuB6aBtRj91BiT95FtHcqqMepXchcEi2tJwxYtquGzz8jgju64oioWzbNee9G4kCCmeznR7cwJVwJBnzaqtN4DV",
  "key35": "5F1JDTsNJptcsW2EjbGuGpQXFBfJJfKussa38AQADGYyBocJBc6hcnQUngCfHSZjr5LFh1eVtUKowzAmJnQMGnhN",
  "key36": "2Lnus8STEQSqVob2ApLeZLqZotVCETC1EMqfwtQ8boVgESFGk5bPXywwAWiNJLvaPk5XNt3KuqQkWDiBqnMozSsV",
  "key37": "2UZTLABR7atRa7c3SskMvHuEb6TbowNg6zAK892myaifFatvnzYmtrPZ1TRtotpa4Gg9aaXhm6wREayfkCCSYakF",
  "key38": "26GscyxtawniW2krA8tzdLiq1vHJrNUMNyv7NXbRGZdevj8giVYWKgKPYRVSEcgiPYBt42S5xmug6tCDcyc4L3Qp",
  "key39": "2aKx7KhwZaDmWKJRU1hLNUv73eGEgnTdUTxZRvTng22iJFM685c9u8PBNogTT5hXLwJmxk6XrvfCoGQFTnkgUny8",
  "key40": "3Z5Lz8VcWJQAy9RJx8m4Efm1KJZABXuFpSuz47VhbRHN7zEio3JV2eJhsUSj3giXm5KeiWpXWm3fwpDFTa5rLB7Y",
  "key41": "2ePAnfqZnyYWKYAi9NsPy9PpQpyVCvU7ZMC3ht3U1nS5nS2jzSP6NrQqoEZrTrk6wMa92qU7B3w8E8voSzRHUekT",
  "key42": "cHkWf3AqyYYPAvro45Vq8hC7trCPiKJ8MnXJNy7fTvErUim9QaHkiTFerjGVpcJbeaqaxGQE9vdpLVpQxdWm1pL",
  "key43": "2GD1MS18EbNypFuRz6PDiEPExmRRkw4duUr1TyHuYgcZUbrdNPuYgCuHbNBdQC9Xn5pB6a43Df9hJj8XLDADqsRY",
  "key44": "3Njcb48i3Vzr6KqZEGGcRdQaHthC5unMC8i53LdBAkYVsTz1NwhrNygfgzAXh157DzPjLkyP3tjTRxqzPg5bsmgH"
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
