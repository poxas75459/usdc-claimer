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
    "3tLCwMGFLYTn51Wb4jqtFgh3bn76TCDPkJ8xhkT7uS3CBSS5HEpmNnq4x2gC6yLQtgCZCp271TqA37FgjSad56WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZvN4w2n39vDBxRTST2yh3sipw3mkpJXWK6W3pJWToY8TcLCy4SqnZEbh14yy2q9MTwzJddeZGkhrHUHQT1CZNT",
  "key1": "5WcrWdTENzek6daroWoqy8jrB54d1GJzyTuLJjYuJU3HLwxgBLQ72rFhwqG2CVryYFi1xU98kJP4Agju1g2sKuyv",
  "key2": "5Go6pV3chFZRrKV3txBvYPQkz56XSeBaNUYLszH4qMoKRp7L1QGgt31D2tcxQCGSuTcjztgYbk6U6PZNa8jubNCJ",
  "key3": "5daxazJw44vG97APDrV4uh6MYETzEb3w9c94AvxdNp7Acx58fb8UGRBDetgTd5U5gpgzNEcKTqGTw9UWXWjb7Xkn",
  "key4": "3PrnwG8APyqcqJ9m4NyT8U2qUnjzP3chmUbEp1Vn8A9jqvDKskyg7HwktBKk5tDYVKzb9VXxbLYQGgtZFRMbjDWJ",
  "key5": "ZbXqFy4Pup7S3ZTGstwxVcS1DychhKFLS9Q9k213s4XfA6erSUAJsN4tmqL1mwmDX9zhR94RdrJmKS4Cn84sDN8",
  "key6": "2PXMSXgYPgsxkaH9rRMwEiUSu8wf5NTMkMMHmCX1YVvhhWPWgYDHUAx495aPGFzYcC2Mz3Ur3uavM98zwwZM1Ea3",
  "key7": "5cR1Mow21xWFPaHAYqiufBM5D58oNaWZ989d2vmcMqHsRHY2AcGWMvvfx1S4yECVreR8XrYbkxyz75P1k5bwotLc",
  "key8": "2wSbNavUSGZjwjqQCm1FdGD6p5SXRVBmBMdxBzGsyKSomr5e4owYNmU82X3JG6ctG49x3n1CEwzsY3bSJETbbBBZ",
  "key9": "5fmx5wpJhysFR4xtMHCdUfrHZN2DLQ3hFncYWJsNJNCo4kKnCTupfZ4FnQauj1oTeGmYC6a57HRvwFSEgiX5DPwf",
  "key10": "5RaEk9EgVdrLZtEfSCNHVH2Whe8cnGeosqrdNsjCqJwq9GhAKfWkS8JJxt8Svik6GAy8xQ1DS5CKtms2hrJ7cPVs",
  "key11": "4bYRsLzE8GuEHrP7BMAeeykfgaWWZF8fX5JJDGEUmmsbDSrowmf4RvfURrxMib6UCoUSUpPoKAP47DyzeH2tenas",
  "key12": "hf7Y5ouw7EhKA2jTqtCjWgibThSTBzFCPxgpeK6NyBchNerSu9KLug1uuivxqL8XhC1WJaQ4RKHrdGrJoCwJNRg",
  "key13": "5UZVYwFt9GQdLHszVJQ36qiF4H769LLAGAy8SBN4hcM4gZpsJ8PKQheWLEhsMaeB8epDrZ1g3Mr5Bkuw1P4AUJTL",
  "key14": "2m43Df9i2BvS5EzZqDPeQU9jUP6KXUpUS4PptoPBzPunq1UuKKtQSNyUqPq9tN7p2gKy75oNYsDt79qn43Fkg2ec",
  "key15": "36USELfkTK13GF7zPBBBQKh25sMpv51anYxHfHYCfXLKx8pfZSPZA8kFNERkDZxAdRKHgdqqeqfq2Cdvxqh2rM9G",
  "key16": "2jbDZzzQM15fad5DgPVuYUpTuZBsbYdK6wXctYrBKd4LivktJWevpNYCRdy3pb3TWes5dfaDKkNc1nPyAYEUh3yL",
  "key17": "37MzoqGmSqqB7VDuPKT3MsqMc7tiASHasmJjMBLqGJd1gZRanGxER6rx9ghSCKkdjd8Y1cDBidMcjTpLdauSAi14",
  "key18": "xqJMN2v5sJFi3KWRMca4kSE6ywwecPMKTqugZhwuaKa8itJ8pB7DB76z9cEhyqonSQHuzSrWCz7FRf9Teeutg1h",
  "key19": "pAGoBrpnHS74jtqabMGqeHp62fbvd5ppUiY25Jmqpec54cpcyW9s6RDfQzYYyhkGPMgb4jdXSy3wiKKWy4VJF5b",
  "key20": "fSDuLUkiJgmd9khbsJgKg5Aq1wWBuy3NqBi5yTN5564JbcUM7BTiAVbq7L3EY6WcJFVV4Kuz4JtD7mhMjSY4wHz",
  "key21": "3ttjACUP18rBSSszKVriYvAwmzPzf3mPQXn1WRzhC3rjjvALrQ2KJZQrMnhHNkEEynzg5X9myqnPFGsKeAicqJ5u",
  "key22": "3AfWsRt5JL6E1VLVqG3pcstaegxGnAgSayDLUBpshbt7XMyZtuKbk5mdr1hawCLWPwmP7GasAJFDDwaGNrQzWhta",
  "key23": "2E4L5WvWfWtiDUQ3bEn72raD5jmgto28XbkHo88rojb8WXCzgSZx15rSpaZUw9xeP1DKkoNZ49Fp6eWcqHBEPMtW",
  "key24": "fSjBn6VRv3JoBAfZGLTi1Nag8RDZwdyVGSQbj6XR2FbzDp9RERurbnsX6u4cV4E6R9Pwv8aCHZLAfGpmFhBuT8K",
  "key25": "Mdzw8agyeCWzosLjfFSZMGQt7F56xCzVK1f9qcprSrBYVTwy4RcDLPkQftXFhNQTw6dtLb4qUBXd3vze89uAimm"
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
