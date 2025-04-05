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
    "qjarAiarQbtzRYuKwHMw4CT5JAhtKTYPZkhKjqZzZ9Sut5iQUahGZAPTcojWaZzk249e4J1XyL6zojD5mLhmMnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G3cs5FVnJ6WjTxESfwcitimZimsdY7GGUVm9dh7Rj9rcgnejEuztE6WfUdMexjtB5mYZTMBTaC1MAbW9atHWSAu",
  "key1": "NTf2PGX75KdK1CZac6VppNwgTixYLXYu8B9D78zJfH43VXWWYpaSc46kHgXVotHw8xD6uaffVmDaGnSZZy3QHsp",
  "key2": "2SfsVXh8ARDxTEZi7Y4ADP8Dgn7wvQnXV5CWpPP2tYdkL8N2m7xAmEbmPfFjaUtbKwzDny4CMw8ZkSkhsv4bdDoz",
  "key3": "5R5bnSaxrqBbkPUtoWcyYawjTB1bQA46yce5ywU2xR8hB3STTvhQKtDP8cJYmY52JnV1gAAho2xtmhTkKSC8bDxq",
  "key4": "5cNRdsytrej8s9xqtoEipPZQEVHbuJKEh1sBJ5jC2JnBwAWSRH1Vf3hWeZ97CLfLkxfMroTGHJv7Y9JGYcevgAg",
  "key5": "3iaEeokCR3sdfTFw4yV6snk9NafvSmNkXpZwwLVzSN145qziBxZbPkFPo9bqby95xXYGncWhXMawtbgG6S2e7maJ",
  "key6": "4jeFWfLjPzZcsC1x4rHseYmzhVFFXf2ZWSZTtXmpJg4RE2Gfr3EunBEF3jSZBGoZjhT1zWCiExnvjAWoxaTgu8zk",
  "key7": "3G1F4ZdEVxBarfwt6pdWDcTGHMFRDWGZUShPZdbX6FEQ1AXe2X1mFutBbWcshiTZzzbPtAk5qEvu56aU3Uz91s4m",
  "key8": "aLw7rUGPz74omKv5yetLnQ5R8tkxnMRqAX6ac7TVqz9WhNU3E5ucw8qQQCQNEZwnKrDGv5DVcLaLDdhQpoJMMwz",
  "key9": "2cL2EN8raV6rq8d1iAUWouV5AAeasV2VSLR5hnvHNCivXJMq4FA26XDGF1TrBiiPjTxJrJkjK6m3EpAq6ErbbHHy",
  "key10": "RdDB31sJwFvAEsEhxaTZJNh5sDShrhxe7orNTGvNgwLc42Pcmd8RegNKCWeCALmCaVFi8SzYLk6Q7NgV1G4g3Jk",
  "key11": "59YnqcJB9XUqKZDYRU2zhcSGLSf5oRfRGbMLkpR7dpN9hg8fBjV8iLoC6Y3f96jBYgSQ3TJYWS4Ap2cuDPqytW2A",
  "key12": "5ii5vSFj8mQyCqHdZEzmT8AGmtZbE8qpDRQiKfXM8JuZsLg359y56a27xL8YcAmtv48NpsLca8drKagYZBt7W7DM",
  "key13": "36cML7oFB9H6d1qFckSunFas487acxBMfcg9uHQp1zihRszBeGb6PCL94iDdsMFBQFrvKeWG6V9j19Wxu7bxLFYz",
  "key14": "3zpDHGhLBXgCSTLnv67vH1VeSDAEyjwQM8jenoozx3MnAQvHJUKerQJEXtL53381mdPwuXTbvLnbULo8fBSAH6h3",
  "key15": "3eiu5DFLZH41u3nMUqwcXaffNp6oXdu4crYbrDwqSkuQ2SaQF5TCA1D5ydsBNJZnXRPsizEcXsY2teAKzxsjgKZj",
  "key16": "5C4y2kTG3HHwpJYRLhGRBUDbhPcVjSS5uSepDNH1amKSVKMcs4mEt75Gxo51eHHSkWb6dKCompD6BKX95eAh1dWg",
  "key17": "BzajTDWXhYDrk1fUgn195vdXiPPpYGK8hb8R2nhGTMEsTWAQS53mbw7qJqKLo31S87a297Az8FPePetGggy6Vym",
  "key18": "343oMR161s8NNBSTnCbEWtLaovXw2MyV3Jsgih32UpzMv4uhYwk2UUvj7z8JGxp2gzSaN8cyayih7ecJSawGQdJ3",
  "key19": "2ri8963xLVV9wVQenWkDJugumYcb9DfjtFfuT5SkvZdmDBkYxP7bN6agp1PpaVTdAX6rTCFvvEVBjfxYVnr2eUiy",
  "key20": "fKHSQEjDMkPT9Wsuxmtvx7J4KPU88V6XbJbgUXtAHvwpdyWpjRP3bT7VZjbCqJQbxQLEMjyShBuWkMLxpmQFNF1",
  "key21": "3kFAyxHkZgTG7iWR1dU4WvKXWSTYEeosdix44UjLzCPsBGkqGyVQGkrjz2uFLdyEyk2tt6LLgNwDSX6gpwzarA7",
  "key22": "2jz7vXnhVHrddcwKDSKocrp37E5pfGXFuSj6EVLPPFdhpo4cVAbCQGPDAr4Jhce37smQjpzvv2EifvEzqm2KMWVY",
  "key23": "2tF4GjizZbu4wS6Y4tNmkB2Yy67XLs3FBNjCQfr8SFwJkSXDszfZWxAvAaNqU2RYMU6HNso2fJQuHWQQEDSYKD8E",
  "key24": "2EijFkUkPkx5iJWm4qDLUH1TZJFoTRwKjJKftcLAgSXuA715nprV7Ym88NQwsp47uenrvWHjLcGKk3RNernXRpYv",
  "key25": "4tjFjkB3bvQLbTmmqAugGxvDRWZP2H6dZ2rejZmrrG377vpqFUxUhrbQaWjGNGEjCSRR6yeqB7dadaK2EM423zes",
  "key26": "jApUVZoUTW1jLw4oq9ud9mHYxSuxRKBuzYRmATeh8QF3MgubgqedZY4qhD3x5RiSPPGjAtRXGdB9YQJ5hU5ReeX",
  "key27": "dermJRAacKZ2VJhqf9qn4sA2rCSY98TZQ6JbyRjU1ppv6Xya8P8vBgxnwbnRWmWr6KrnSwmhK19qhnyyRjeaxMf",
  "key28": "24ppt4dQKTenHSQpWPtz21FVDKG4sNQv9Rn7XJreMJW7edyQozWPWMrX4achZGBiRATtTZ5ad6Tat5dd4t9B7d6t",
  "key29": "47URmsMWx8QtptmBTd5pHPwDguVzNoV2MAMrqQKA56FmxN5kkRmRxFj2THh2TxTT78dK3gJiofVDzUiZpfUUYrCf"
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
