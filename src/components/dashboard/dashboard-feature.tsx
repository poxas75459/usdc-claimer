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
    "3PGq9DRx6c5G89qKu1cDvyssfqRvLk9EX1Ezz27oJBzLtUwBxX4dQfuD1nEH2GiThepnXDnPTHXqH2i91eM8zKro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36dLGjNLQDho13shgti24jDwwLs4eQQg4LRWk14peR71vXrVMYHWmoRWmhD3yxLUrSE3QiYqya6mAybdnxkpDNdb",
  "key1": "53jfKhqRAXCF1qmgMdyESgpq4nwS7XkP9qsHekkkxUr92uxy5yCLrSwv7rvFDyqYipgtkcAQrC6SEQX3SaZQQbRW",
  "key2": "5mfihTg4tz6ktWR4Q62QkJXEuaDC5NfkXojXtAC8mY8adb6sv1BXRPr7d2Vc4dmouGf145g3A4JjDtGJzeSYqgBi",
  "key3": "3zL2P8kibRTVVkxS5x1ywCE5MKu6NBdJAMJNKGTyDELE51UBVZCb1Z2FHHpMEFFpFwk8azxKHDqYhUpik94otYva",
  "key4": "5uuF7oVH8rhbsHG9iVF9bspcvrZkYUC6Xd4xpw45LcatWCmq1EJ5CGpud2rtCRdiha7oqjQvTPcAhQv8BW96XydE",
  "key5": "3RRncQ9wwsB9FE3aRfND5eSce5hgCefGuYgpkxfYWMYhxAVRdepRpQVVn7q98zSc1tHYpYTs7aArRNY3Ddhjpjch",
  "key6": "hCqgdFJdHt3k6Z5JXhNML5f6zihDHLvq814LsRLwmWWgQMFP7Rdk1c9SBBjYgdU2uf1FqWwrwHk8zcU5z6rf3vY",
  "key7": "2YQrWmEuuTYeud1aXRbE3HzatUk7u4fvkNhmvfnEyGuP3G4tx8f5Bn9RyNGzxDkuXNmMQ9c5kz5xzdDNzE1rX93q",
  "key8": "2unkBx2CuoHEAw5RM3bWNJ69gbPVHG9BhooC2RsMFp45HSZzuUZJySeFHdn8EBLhR6CCsdjqbeM6QisTSCwPV4mm",
  "key9": "14ypzDUJxULTZUBGsmN6q3FaArfpp24zkcDv3ZVESEWJLNvbDAYC4KWDKqNCkXyr2EEANBPud9yh1bMz5hpYZAm",
  "key10": "KxrquuB1hVqYxGPtaKpfzpWtsJQC2hBhAPNV2QPtqjRs6j1XEkw9sUVQGjMumXLuTWqRbmSpbLuVCzdEjhzvnMG",
  "key11": "2RpAgX97MyrSaXBQ1Lj7Ys2suCoZqudjD8Hi8DKmF7GjwsMmintA5ix3ciXg1XmTRsMqCrqfEsecJhQruZA3Kypq",
  "key12": "51T5C5zCh6UKCBj355T9Bg2cz37VCbETAdYtsKT655WFU95PJ2XpvyuKMzAArW6cWj5CxhK3DHyHf8G2Y3e6zcV1",
  "key13": "eM2AaYEidZaP3ZSeyq9icFqJ5GDqwHfbtjJBL4bRcV13JcSPmnGnoSHd5a6cAtMFX9s7p21djyxmJDpZiJcspg1",
  "key14": "51Q9chqaRuoqFnuc1P5JEdhcENHGuigeJbxJsgDHwgRf3en5erAtPsDx2ZHciddiMx9WHaVTMUZud9P8tD7v1J59",
  "key15": "LTHhKigDFvKTam2GKYZmmitVVYmiUh8eR5BofogVV1LtWNp44L99jwAAB7uXB2K8XtSYKjcxo2SHdUb1nwhwZuo",
  "key16": "45uAMwMreKnkGfH4EkjvPKfNZnJ4M2Jjhdq4bG9q2JzVXHzdtej9hfbxNmsmCAnWDnTYuxYRpGPLLgBKqhnd2Vs9",
  "key17": "mca6kYwvxhX6AQDh8tqci7cp41UDVqt5NCCE5y3JvQ58ZEsCtJZRGKsNQd7WHrwfExeqny8Jn1spwkGBcdKK9Nf",
  "key18": "9BNKZSKSy2MmW2T4nnZip4SovbP1EVzYqjcXQ8mgXxNnwjQjnzTwVhqE94dYZb5ZKwxkVFtJWHvf7j6fGeiyCt4",
  "key19": "3Hxrn2Y5MXNkHz3LZASe8CxtzoeAk7eWKENXG77bEzmJcLfhJnSDnt7hyAQ24k7hdfR8jgTkdV3WED8aAtWLCn95",
  "key20": "2UMavKRNmyAm2ACrwCmd8UEGeh2PQ6FpCfVneomVg99NXSUxzRU58Nr8aw6vihuzcsQn8NLrKEtxVq68DWmC7T1t",
  "key21": "4piFybH8fFTYWMe8PctgTojUM7JYmMcFL8Mb8EswkP2oskDwSntWPXrREKMCb5M88gioPs947fqEHtBQGPVKNesb",
  "key22": "4RqJ5Y6zLrnvLW7enK6EPmTShNg36GrX7nuLkEESYoPgXg8oNZzHhLrDAYFLrSgiTQSZ8bARUaQXQJ8GysRRtpVs",
  "key23": "sZsNspVtjsYXS2JzbUo3GKVTWXjHdKZyxVgPHE9Dn35m9UvftRiN7C1jyqMjBKqCWf969cX3bAYtxCi5whhyhnw",
  "key24": "jL5YA2mG42zYCiikjGqegBDoVYUS8VjXu1rj1pRGBc2othKZ2hNeV4eEMsYdzeYddSPgWdfobwo3ZzDADSYHSG6",
  "key25": "5Xsfa81qc3FtpcL1EeZ7hpH1Z3mtm8UwSSXyh3QRyX6NgEVTuGD97VZo1FXD9G2N9m8ynHf9sqEQ1PUgZGvZ9oaL",
  "key26": "3Cz3inndQUKe2mtV5heGkzMUygm3QEazAWWnXWiEx5xoc1r4H6UDamdCrqzqcmQF5V5roaU4TjrsPh9X7zfYo4W3",
  "key27": "5ZZkKv6r5XzAKBgEs1QqpohWaoPUVuyc485DX9eH4BrFA8W4jH8PKQqV1UANwpcAXBnTqHr6H18EMyQSxKWFAeEB",
  "key28": "2aEAZQQ9i8kPaqVL5xnxPNXgnBmmTyKgyFyVY4rqXDVgLg1xMtCAetYemQUgKVy3rrqDKBdSBhsZtQde2i43i4ti"
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
