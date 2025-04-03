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
    "2Svs75ryK5PoDrPSm6ZDYroXWGwhphKUFUUXQthaFsmFvteetrHhzVQb3ztW1npJp3xtAFcgECYmquYExup6QJqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Ai3wfFhP1mneqDzN3XNyGbTZTAeV3Criu5NDqfJ5aNRE6waXvjjJWPZE7FoLAK9y7mGT2wLYCmcmMWqU5jeSKs",
  "key1": "4LMBEuHcawovhA3yNv2R8DUgffetM8rg786aQ21bx53DPySuUmpEDsFtqtoHf6E5ZYr6cQJLZPjhmmZ2hdDaFTsq",
  "key2": "PBBtGYcV9NMbT2cypxsHouUNqA2HYUUt4SMqTzjzVn6cguVDxcXX53PztZf8PhbhFg8czHUPxiZu1UuCY2ogr9F",
  "key3": "2KXfQ2yUv711QMxYaxKjMEgpNVRc85pNX7wH2xFvivWF5XEByGrcY3NoqezyRUhh5aZvumdk6axCKQJpd74o9i5R",
  "key4": "2yCJuhqfQbkTnWUELJ9aF1oNfz7DSUL3uPExP9jJbQx4Zhz8UkBDvdPjtGZzGnayVMd4kN8ayRnCZWVpWmprn3rJ",
  "key5": "43DAsxyKTC1aXRxGV7xVcXH54NpbfQzfE58NwA7YEUUahETpj7Kw321F7nmCFVkzMFVmnddvrN8t1F9xFAzzT5wn",
  "key6": "5MjfWJ1Q9EyA8dXd45h6CGrz9uBw3VYGd3uYVihiUfe7KF3c2yjfyUAgAubtNfKAf3vXx963hHieD6XFVCvYwt41",
  "key7": "TmfTgsj5JbTiBxjQupvkwp5eegbAyLmd6DZcNvNF9e76s7Tt5KsynJYNLk6ULBFf73NQs2asxF8aG4Ah2FmyuhU",
  "key8": "4k7UoXX3tPkKLr59Z18L3XhyXNh5QSHREXHScEQHyHzxsfdEdzhnKXQ4sCd7BkiuadNTgczXmohGmknvMhGbK5eG",
  "key9": "38Wk8kwVdwe8noc3H4YyhPPP7nvMUDhYRWK5prCwx3fwLi69ShscAjQDpCUwFw437iCugH9gMkY7mR5Wn889vu2E",
  "key10": "2EdohGU4LbjH7tLizMGWwkzWd7UfyvyurjzE21tqsLnedw2H49mHMvbTpAyySVLxqZmotBmDTmTtTGyBko7RyLFz",
  "key11": "21N47NpwCsNYQv6G5HHrnpzsDj9JggvpfZ6kC6M9bz2tzKTwcwPP3mfLd9xvBeYQoJGQ7KpsJdSPL1ABdpt7xB1Q",
  "key12": "3MEu7VrV7aFwkxY37QfYQ1PbGTDirTHrTwCUD24YDJojxjDpvn9fxEv5UzhhjjaQvPKzt3uTkaEVC3Einj8orhyo",
  "key13": "Uc53ZnCzF3pmvYgLNK7XD1b5bXbDq5e2kLYrZRGzrw5gFXu3eHfHm8Fhe1dAeg5JHEWPhDyh8uLvJMUigYt9wdy",
  "key14": "3h2aKbeSnLtimLAQXtnBGWyMhe5kaDyt5Kr2iGfceRANY98JHsKmWdZP4mXUCbVNAsqNmPqtAHxkF5P2zNKP5xrz",
  "key15": "2LfcogeFJg4ofXXZXwvHjHeesyoz4aUmVzXDzGt7V1qs3exj1uBSsp7wasVzJjQhfBzmhFvncStftuZ2uoU33DfX",
  "key16": "439DdjkdtNDFJMwgmEEvw12ZEdtX5sj1AvACv47EgeQmKpwotTnFqm2Jc5h15qynLiGaaZTt8pe7MkS7gzsoVjJj",
  "key17": "nXSGC6RVv4sratAkAWUhk568Pzh7AQqUMqXhpZXkKttZszydwcv82wuNuxZJAhiR2kkknpaZGmC111EDGZ9mVas",
  "key18": "29wC8w45G2ch6wHNsqmJyfeud5NcqvQQ2Y5ZjVESdaVYS9JHAZdRiVUB7wCvYDM1nMRZe1MYcMtCPjBTc1nnrPG1",
  "key19": "3N7buaMoU4MHWGNMWQZt3tMDvBxaavDFi3zqdnr9kh16ETwzYKsW9hLK57aiJbKikeFGhqr6q2ANpePuokfQvDgs",
  "key20": "42faFBrZjw7RWDngvdjP7VD11DKMLUBautujthqrEanLLiNBbVt5oTavrU1aPkR47NB2sAiZKqHGTSgyTqhVb6Vd",
  "key21": "eNdVR8UwGFSPt23RpZqx8ysUwaTspBFATzdEY6Wmy3WR4xBAKhQvd8khdPfG31iiLuk2cJAozBVLxNX9ap6Nu4e",
  "key22": "6fL5mWGkfqRAac2ydP832QqPaDLA5GvRjSbg3ebTYPDYmgZcNxzZ5zgJS8Q4o7cXgdW2oe8JcmBWHBSpG3jphFC",
  "key23": "5JLSwcbL48G2iLffKs3Pnga2ei3EDhD8z9pUbNuT3Qp9ZbFqwtguVpSujGLDAEGbZBKTa4GpyotFcSkqCSQNgB6H",
  "key24": "3zCwuzzM7Yg2Nfxuut8FKKStNQmnU4kGsLFdZYJn5piFfbsKtXRbW4gRQKL4MLTMtUy8XiUQMkR2q8firpErawu9",
  "key25": "R7qUFFDKBHZ6Thfuzev81CsCudbBfW1eQfHcoeK3UBXnHqun8BXhrwm11K8HL9bnsmb3VheN64xjX1saBPNWcnP",
  "key26": "361kdaH8VupxPG7GZ7JATmRj9HTFSQERXpugky7jk9tG4MN7gcq6zg8pwjrvkmcvYmmAz7C7RrAfqDx8yAt1VfqP"
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
