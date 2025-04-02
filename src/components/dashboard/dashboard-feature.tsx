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
    "2T2VR8dwW36NWFwNkGtVrZVPS949pGVNkuzVeDk8FEY4gtkezBNVcXWwwcpb3EKgo1tAUtFJKv2cHWL4kxSwVGNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eaZ1JY14U6G2KkaefjN1zKehLqq38GKVHa9WivssdW8vCdoaH2AXBf6CXxTkFFuFdGrE4xZuMnEsmJKTCN9QMFA",
  "key1": "5wA68qLwSd4c4AqXTV67dGvwuLrkbnrr2kDPdyGL7cuw6Ujd7gjWcCczcBUNgq1jaVy393XrebD3DpSsuXtEe1jD",
  "key2": "benSbLaBFfw4XB6gXdycmwQabqtq122zzSxdo39Bq2gz4mqCKpR1mHnbC4QG3sxhCbP2QZdhyNkhaEePzDoqSLa",
  "key3": "o7K7JohVZ6RP2FHcRM5dpUo6Nfzhp3iGZw2yTCbpkETVRSEvpf13kToBKVF1M4rvU94wLmnFtCWZzk3sSac8quD",
  "key4": "hK4ZiTesbxymC5QQUWwoTM9Z9qUW9gwT8CBaAxibnVNyiePPHsMNxPNyZMWpEkyDXg7xdKBQvzJvKBQKsoUC6oc",
  "key5": "3upzJp1M5LFdg9v33HZ7Jy1StHSo1JwammYHcR7vorEYEjoJCiYMdPhiJwswueWX2gcUDyN9dQe9u2Zeuxz4xjD2",
  "key6": "V8d4B4tZeHzYxUS43wGCoXGv3R1UK7tvDb3PsjJUxx77ZqbgoAL6BeqvifJNXnEssL7TxadzVdJ4zj5yFJouxaT",
  "key7": "4ydfGMctRYAn2vwtndNEA6pBgtvvntECR59aKmib1Zx6Z8YDWN1ULmj4cEebGKPU85LPDQbAQtGVSa9rk7RrT2vd",
  "key8": "5z37WmXCCovja6M7rkffNu2675udjmaKBjEBmUtNDViKhYKghy95Q9JKVoLetwpeKNANZqvUhpZtTX2bcveur16X",
  "key9": "5jF3cZydGLwAbbg1MevpDxSZXc3KQUQEULesv6Jaftie4tyvMJ1J9mku9fLnnn67xsifk8xCvk5exf9q3M3e7iE5",
  "key10": "2JEoDtun9pSEkGJSih27ekGEm66vpog6M6RX44bxQ8RaP3udMvmMinCt3qEQCVnA1TY4H698EHEAAKytRehxsQsc",
  "key11": "4CJVSHCp7rTs2LTRijQeg1SggwMGXpuBKZPtpGgedCNz7PnPiMeKT2hyv5aemVh6Fgk1PPmf7HtXhtti5gjDPt9U",
  "key12": "ywrR1tc1ZTFkvNiFGLxCfmisxkVzwehSBCV4khqQ5ajyf72RT5tESeHUhY5HizhfTVceTYzm6VCtpP3SX5i6GfZ",
  "key13": "4YDYMjs2MxFBGLuHL8uMTFW9jMydH82vFCzEupT4mD2U7cSP28eCqNg6DHdZULM4KjE2NXMLrqYkFDo1X1d9fJs1",
  "key14": "27t7Vds7gKyrwXmpPEEkJAnVHBNwuYdyz9HBYLMDD3PK9JCqoPsP2hLDgWKKnLC6YRTP5qLvNKSXQyU89XmNG1xs",
  "key15": "4nYzx6LtDYmnUUt2rqQPudWnL9uXknZ9mbNtU3qh3uj3eNs1YGrYM88cokDUXaS19kjZRQQs8eLJ8HULd8a1fSgv",
  "key16": "xuh2FPYyJ84DTDGFG1YCZpjGAZ14Z2c7Lb98A6fXd1fm115Nyjni7U4fHW3ju6cnSewsbeF5oCDVve41m5zMjm2",
  "key17": "4v8w7HcnSTR54pDtNiuvQJf7sHDnBsbr76M1pny1JPzxxkiwdAtWBhoamUC8JaKTmoFQCxRjyBiQVf8rGhhTFzAq",
  "key18": "4LtjSRR5AR1iBYJUHkkRbVdMqGrRSufCJhhQDap2mUpUmLXLYgFQwHxwUaDHou1kiiK3izgqFJCEwJEE7xBv4db6",
  "key19": "3ALwuKNws8reycsdZJoyfyiKy7z2y6By67fTMQurmXifhheRtQjxv6SmogULzQLVoUUBYMCjUST4Tr2VRzgqowHw",
  "key20": "4V5EXZLUk2bHbLgDnm1mbcnzGUnJjkciX5PScLYFkQKigYNdFHPMpWqHKKu6DBKX7L7Qqfyqar4VUGZsGEV3EGpq",
  "key21": "kWWrWksnC9qRQigqiDdzEyf2mgvkEQZ9V69u6LcABbafY2GHpWXALpJbiHQ7T8HNuHwymWc34pNb6KcoXBEhBfN",
  "key22": "3nrGsUjvWnw2g4crkpJ8dyi5kwt7EupwMizzhZmaqEPDErTAqk7vTfM5sxBGSZvs5d55EAb3xdrBPpWJw7h8WM1s",
  "key23": "3ovGKGuHUpFUSnNmQFjDzkuGu4wHFE436dG6fTqrS8xu4UeQamoMFxhsB9yZhZ2o7Dz1k3BXKo7DNNZFhnc7KAZH",
  "key24": "2HG4sszFeTJGhVe7uSrS3RzQPNzktGCz3J1sNXB6EfUzGn81bUHnbQNKbzFq3huVrA8PrmiSRwMrrwuBm9eQJZNS",
  "key25": "2KAyRaFixGLV9kYfgNqqxuauHAbnQAQTmYaTVxdnbfSfkfw7Yx34GMazy2B27N697NMk9JWbpmkJbJ3KkKtuKNh3",
  "key26": "4i4odjsC9T3oAS653djTPorDgLLgLbax9XyBJZtwTjvyQXPkSa7qbDMpbpQSvm7Ghckgjt5WQnxM6Cx3bbLTCzM4",
  "key27": "ZXjdxQtX44p3C26WHuXwqrxAKgoLjku66WJqDeP7d84mSZ5EL9oMKPVuvgYQvdXgjVBTpQ7odNw3Ympfh5VgydR",
  "key28": "5EqTh6TuzykEmGWasXnQEaBaZgvtfjR5mR9WTBTVVQFwRE6KzuKEJMJKSfgQ2XMCu8EZifxqm1CFWLLHx2R22aEF",
  "key29": "YqW58nJaxmwmDWfPr6PXLG1jEJsa21xcyLRdm4ChFyksWkqVfoMxHgengowbw5KiW9SuDQcFguvivgcDjVeYnK6",
  "key30": "2x2TK2wYnUodhaKhZg6LPuWhuQgWKC4VjUrVyxEHTGnhSkVA9RFSB8YvjmaRjGcXXKjGidfEvyuFrdi5pW2eCmDD",
  "key31": "2uRgXuk7uDHvvofoehrSQGaf9AuktwRKPANY7NF6sjKXvEsWDuRsUATFYx1ggAfrZkqGWKwUrJk5YH5XobkqmHNN",
  "key32": "3KHEuf5hfQAhUriKbRA8uqfgeUkDSB7miRJtxBPnSJRURuYcpaJp3sCBj7ReHryxjT4LQng7zifgbKB9iqgZ7qa3",
  "key33": "5fsbSejDXq8kyJXKwSnVCZXCx2WprCVa2jUP1AuGQSDci1Awv24YhqQyXjtXqQsecuFb2nFJidKKjNEAAbvh8nrU",
  "key34": "2Mwkj4WMzoMtnzH9KTQrMXYQm4yxUJfyHB2hAzeavNQ3x2fUCKMRSAW8S3yRNPMM2x8Sx4tbMLKrbzU4f3wtbnHj",
  "key35": "3Ky9mkNbqWuccYb6kqcGcFc9P8VGJ5uYJ85Bc8VU7Ktn5sQha5DNdk29reriD4CNeMCjC2EF2XJh9hxLEUo5fue3",
  "key36": "2aBtkU5P2SqD7d2A9JyRmSgP8Tg1oMKuzrFE6pQARofTQS3zboSfD1Vj6X2nLE6KqkbqMR9d7g7RVLfveBhYPsQU"
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
