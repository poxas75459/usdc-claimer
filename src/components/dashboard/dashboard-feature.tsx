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
    "tuGUywF3sBU9XVdzxv4RbSMoZVhKQ9hWNK6Jgn9t4gHhVW95MGKy8jcMgfdCYXQzcDCqn2kBFui6nDjDzwuNrLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xsHxepfWU4P3f5qyhk964nrgzgrUa24EtbJgXDtfYYa1thtUkKDR9kySLe4vxAMyGBdxFZFAstwYmoEH8KidSXq",
  "key1": "25NPQEVX8p6yQAf2JGffc3yuY595JcqeKCX8DUZAwK97h7jhi6T8vkF815SqyPMArW5zmorYnHCNEwJZmGMUfxPz",
  "key2": "5hYq1WAzoUhgEHqCJRqCQy5557iq4DcektkW2qow8csGRj1gzJHPHpgAkfLCtkfBxbZToAfm7nJsWxDiEg2ezG1H",
  "key3": "5csAw33dZBi4WsoXVdr5cvqfgQUhvd9Br9soNMxASx8koV9dm1YxTxx874kRtDF4MpzCnJvfKeq93aW9hLko8Hij",
  "key4": "5Bywhdffv7ZjR73QSJvZNmvt6ZJJ5twyo7H2mrcqAQVevWUGxqT72zaGM1qiCJAtumv9S8Z5GH9pMWG7DGvWrGBW",
  "key5": "3zNeSftmKBTA77qpjG2gshSuMB44hoQLnGMmhTCrxvT8HsxcPrEqjrSYQAb1xjp4LURV1JspVaA2dLsorMPKfhHp",
  "key6": "5426pGm32po84UxotJ2EGZLusWZWnEquoKkCg34XkvaUwsnaxn2cWFemGAvkkCJwJurKvSKGv8otooYwMVDp4xwV",
  "key7": "4dR4PXLVnaxE4fhKvz5L6NA4K36meeGCxK76Kn51ubyk9HTZk59A3nDXA3Lza4JGamdpV8SY2dzPdjiLhZp5fVpC",
  "key8": "27SVe46M8xPUrW39qvqn4xVFivuiNKJLLqaRoDywDTRFhm7YFMrSrXivcu1Kca3w1G5XWA1xkmD1i36n837e5GgL",
  "key9": "4qK4LVdoeLnoAdEcZpbMggx6sunJjnp6weMBVLUR6RUeaSQm3k2sMqSW2zm1XCWTxYwp7Wo4vT4HHVxJXMPztQGf",
  "key10": "2gvemgPUiF26XZmQgko3qiTNrc7D4B3usrxM7BzJ71xUPXLeGtjwVA4eQ932S1mrRyAohTS2TkgMEykuEB8iRhcY",
  "key11": "2hMHsQtEUZtoexeERX1xrMjHxMcRrDJ2QtQscmBisy22WavNYkHNH5FZBe7KFfr4xUqL2ZQJU2UE3pT6pshEH4o2",
  "key12": "4PTxVp96NTzr4xUVawUtZ8ud14QWWzuF4zNUFpo3mkXwKCQKUUTuyb2xjHjQVm8tx88jFqhGMqXWW2kjjwc4rZDZ",
  "key13": "4cqhrfFCvmPXjr1QDsx5tSRZiPB2zEVhbs8ghdeLw4KZPQ3Jnx447jxpxYC2shWdTQQLC79471LSwZej78dGPWJg",
  "key14": "578LhAPbmvUquXvX2pEMwDTtzjYELiwNC2mKyGqnZWp1GZKuk6w4MGDMfKqpdSffaTkcMgDoHamexJxSfpp9v6cd",
  "key15": "33YgyR7v3HJbf9VNb2TMJawkVoRRjdhwrPFdaKT716u2JgqKQSd47GLbje8mM8u9DNUDFmXfDP6QVdcYjtrVtiiW",
  "key16": "5bqspVzZakYyhjh9FgLPjGy2Yf6XRGcxEnhpiqm8qEdjkhzyoo4rKcZiuZTLWpR8ehrdgJQGKk1hmQUypEbhuVMk",
  "key17": "248Riwum76F6W9Rd5QXzV6caaCrYpQyuUUnMCPvV2i2C5yZrRH9LP9sHdgGxscTAHTg56F1MrYadNPLksW8sLcN1",
  "key18": "pqvBu6cFJRu3caabEwhA7ojGVe5s5iJws1W3o6NXQhVkuLJ967SxuE67DUfYWF3bhrDxeTdngYUjUZpTmd2z4Ur",
  "key19": "3f6URnsnf1CKwS73FyJL3DBf4EzCQt5o8g4ANz7pRNfRgp86FjNuEyYbVEXcXjuC5Krg71J6L3tmZYQabKVyQkf8",
  "key20": "4v5MckYp1QnfvTBqq8rLwhLckv4itgAGCY4kToBSDoVi9HwydBXGjFLeprPsw6LDySGRsrb3Kw4w7vWXn5A1c611",
  "key21": "2sQAxuBMDvcT9Knt5TSFMuqtrq5b1xxJpYwwWtai7XT1Etme1hD1WVozrNGJses4bms4aS6ihF1daXE4mmB2wAj4",
  "key22": "5zpJatpJQ1H3oKzYfw2YxNdfaiSEhPbGc2up3xcELsSYXX89A3r7o5BAmhipbg5DPqgrQTK5uCZW8qmesWfNGbmU",
  "key23": "43J2uqS6JqWZ1Wn7p8zW9RjUtYdcyM4WoF1FsWxSfYoJNGnyFmpitkh8mTeGqUBn1KQqvga22f7APWoeDayvcAu5",
  "key24": "juecotqZvESDcS9WQZT7RZALf2XvdzA3Lgs8FWyKHRTCe4j4LmDBq79UmxGMTVQtgsTiB4iubxZk4cJMr7ene1Z"
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
