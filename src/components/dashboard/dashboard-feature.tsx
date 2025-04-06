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
    "97WUMes3WfsvQ22LWqJhjGHdYEwFTqR348h5c4h21TUSM6YN4YGsrDpfPCL1wBYsZN1EBMAJ8MpiSJK7GfqAhAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Baf8X5RiwtwYpqhfKUwpjyEs929MgpTj79HsxCmq8gjCePe4XQtde1VXkjtaA1MPNvw4z6PAQAxMJE5PVRD66j4",
  "key1": "5KBHWq9YyZPH5Z2YVJHL9dKAwbzyRRe5PepK6TnrrnbSXsiHtosZbxt88wvrk4acaDVQLwDde1R5VQ3VxrW75KYK",
  "key2": "3EK5qdwTGuu7uiD9YSwYDe9R7NeboqNoXpMsk3DxqD7wA4VRESE4iVAx2Jz73XodEqC8SPmtkGQVkWPXaqimC86J",
  "key3": "42gbeTLSiG9Gzzv7he3x6PkMRtTr7BnoZA4fR9BadKwJcahvbJzsRomP8zxmmScctLRs4uYtAtWSz6fvMJ1NMk2V",
  "key4": "2XQ8v9RJr73DQJWUo9t3eGwZQjUdGuV8ZoAjZqQSvdzaHCGM2rXrs2ME5kPoTJC55rt8zgxvSwTvGYyLhV38Uetk",
  "key5": "6vQ93FKad29xZcqVF7fJbUhg4ep4rGDqBswyPJLAz4LqCuZZhQbTGfQ7gcTShVCPmwxDo4aC5qMJUKtE74wn94Z",
  "key6": "2oQficZjZYozJMwdEqU8iK7RDYPw9Q3j4cetv9zU1jpUb1m49reoAvn2hB8GXqoxGJmthDN4YCactBeDZ5os5nH2",
  "key7": "4hPZWiz1BoaH4BZVrwha7y1iZJLTLSP14YAAauJSD1uBAdV4qbLiDiMZcDxkZknnPH6VpmueTJ1X46KeWNQvV1nn",
  "key8": "5ZMqFhyPqcP2WGHA51LK9K9CZWFiNFMi5h9x1TNJjck7FSD88EikswdkoAB1W29DtDBk6tZNwzTTu2MDfdwdaon9",
  "key9": "5Ujow1GLtNkUtoLhYWwZLuRAMPmwUuidXSW525dVV2qnfGVSww4iz8pJzUhpkFpYsDxeY3RwdodbMaW7vgp6p1S1",
  "key10": "gNuVTp5aqhWBHztrQnQd1iKCrVmfzUrogufcp9iWm1zvVjATyB6ohg81AZYyKfPrqtzEaEx4CwZUyCGP7YfTNiu",
  "key11": "2wLRmbpfQJ5fUURcMoGNTTysa255SjaMePVnHeiUYtrB4StWfNAExxgiUee2t1rxiajCpF7qUzr1X8fo1cNrnwpD",
  "key12": "4GZm3ioUUpb19sab43VEehi9jWmoJrvyuMFZMVzRVw3GzfKi4ybh5qWbKPotk4sxUBKPYR2AoG9a6ifo3Bm82L8N",
  "key13": "3B6my64578qu5VjFXzPqmQB6YCeQ4r7U6jYG9LxSUnYpHMAH7AZWMkcFV3nkXrXV8acP9YhxQ9VHm5iXT1fu5mjf",
  "key14": "QvAfoqSYaW91oZqaQE3f5HizUgY6ic5zR7HAMwzj9V25BgGqqFtdarUxRMNwg4fWkewVVrCNU8a9vbAwjTBzDZu",
  "key15": "5gAbdJe5T9ZeJ4G4cMpQ7dvmHuA4frfbpkt8BHHS7NLwgyDn8L3moQnHaZGtQRjzRNz64xTNkvjktr1kn5Tf4cHJ",
  "key16": "a6xcMa44beKRtB2faanpJZXE9Lrb3cnzxVep9JGuFbWKiQsXZ5VvcK9CAeqg2PADtchf5rr72hSJPfaHN8B29ek",
  "key17": "4BLsgewZcDstWryy8FxDFcBm6qegpB4zsDg5sT5g7zzf6QWy5a8KRXzXmPXJCFGoFwwHkjWLzy8N1JC2QUxgQBCY",
  "key18": "3RsDcx71epG1xU3x4ztosHyVyhAHpXqSYPEnNvvhNG1nsKSCwEP4D5NQm78w5JCJnD59VfhQBZFbAEXfUszFoNoj",
  "key19": "3Exj2GuQeKqCsmfvpzY5Tni4go3BJjtYnkndDotRdJPFB8Hq5UHcofDmE4x9dLZN6xpDnuyB1yUXqnmf6gJgDSNx",
  "key20": "5EKE1fT9yfGqCx3dGxmDSjZoSCi5NqaejY71uj9KrWhWpatBgdnadXpURE6akrZmXAH5Hhp3Jk9gYVMmppyS4fiq",
  "key21": "LNCHVK2sv1zDukBTfQLgwSKWBs61yJUgQcQrRK9Md7yh43QKxv4xE215V1oYLqZUfE9yifkTLejCgTCXu9isyVB",
  "key22": "CA4RbmshAQKppnj7NA17ZZjq66Z1Wagp9WWJyLmLopy7NFFsU8qKMc5khFeUA1P2sdspp7WdruSBYg5nUTNtHFV",
  "key23": "gr8wC2H5UQug5PQAPoXFpGiqCUpiLEhGFm9m9p8jEFMrr52NCeFoCHveJimBzmyqP7ZPd1pji94TgpgMLtU2dq4",
  "key24": "2jq42XPBuy5XYLi8X9eWLJmBHTa5Tw4sRggwTP6rRfwKbwzMyuuKEF9G4PYecmEEJK5umstHWtHnr9LJmQanpP75",
  "key25": "ueGo3BHmY5zCQoaS1aupWpav1f2tpuWLUELBgeotTDK8TdzZ5vGojTD6LVFcWFinVuTgk6QpwWhP4UgoC72U5Lb",
  "key26": "PZF7WtYVbe21e9sGFnUQUmJ5dWtgaDzTLgpP6KFp9Fgp5xsAhMtriVhHkKdBvcywCNe3J7r12uX1JscQKjn4wVy",
  "key27": "uD7J2gmwFmUHfc21ELw4sUNaaVesNeKgmgzYjMrHg2Eu2tkM2jk68XfqXVaTWpTRqUU3b2BhpC8TUu3xMqFum7p",
  "key28": "Cw5X8CapFmNZ6aS3dSYonaWCzPRsKE9tLaEZqHav2Fi1QZ53tUQmHvARjHah7NDKQnYHcJ82YFaYQS8jSB652jT",
  "key29": "5FGECbrTGcDGcu1cHvbxA3oTqSfXkCdEgRChpgh95VdMtavcxyt4mCgSPUEDxF6jd8t9ENoMMq2dPaGbTiJcqh1X",
  "key30": "2b623h995C3hBMv3dVq3jCFZYNyy26HeSYy1zq8HeQAG9WGjZXFgXSmEnrGMCsk9uXwjdk1yd2v6WNjSz6iqLQTi",
  "key31": "4ThJGHaBuzTujnsyQokudgzuvziJ9BjscV4mRPy32f5LPhckguTAvK5sutSCZPLPvMqdbDjrpEGRDx6cTx6hL5Dn"
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
