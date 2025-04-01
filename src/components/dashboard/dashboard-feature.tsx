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
    "2YptxuSRZprXg72uoFdtBLeTrmPGxpSccQgdBegwQJGC8jaPkU338fdfHDEwWVG4RzU3aujfHUmpnDzhuLqfSWWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8hkzNuHfFbcYjTMavwG1DSopN78RW3ibyG5sWdZjZ4zvwESZYSNwwD9kDs2RHfUeRL4s9bfpcs72vPkpPW3dCBX",
  "key1": "5Efx2XJYdkve8FoEvSp71dY2R6DPaAkob4yKzzgsEHrVi7G2cnJfNfN7z1swKSnA4sA91X8VHAfnuTHC2LmoBhKr",
  "key2": "3hDsx5tJd5rqxe5nBYBtfegzRecwDRyaVT3WWXFbqTU2pWLhFi3NYBNiSE6rtQhPNPqsJduJHapTB1qyjvL9qStR",
  "key3": "3UaBm3TgpcgDXGV3t442yg7ahPfQuzy7zyrbmPZB5atthG3GWE42KpHA3KCZ7bbVESutJpvvNVZMoi1kQbPwnCoe",
  "key4": "2FAXuFW5Dd38gwBTwS7oewkT6ijzHoHDh41hDTBUeYFU9j2MGSmQYNNNx2APdEFTUaCPRBd3vAi7rEq69xedCDvD",
  "key5": "2KgxowxRVimEgJTFHq3G1HkzEUTW79EM3m3SWv3SF6w4Pip4K6njiU9P9R484RhyJAAWX2sg98qmjRNaySz2JjiV",
  "key6": "3S5QddndSLfpFH7JxsYwtC58KNJNAeHFSF8EkLtCDy8QXZDMef6KU89Gtx7UW5LuXN9R9mYtzK3zy1EeEJ4J8y5b",
  "key7": "25eBu9jnUrHS6ReAcnSJrsaiuig36qgq66u7ih7fHYpLq8acdznva33vuKRV5M45hqiQxjJy71oRE2DRxUiWT9LR",
  "key8": "29AxtX3RoKrMh4QBP6VJCWTsJKph7UBe52eKWFqxQ66gNGGNLpCB82y4hZubiXkfgrx1oX6Db81EQhnu6Q27wHAs",
  "key9": "4KqHq8qtjvb7YX4ZUn2AaVwswLfJCQHNf3N3Nap1MTDNqQkA3hriGkSagSZjdwrQsr3FUo7ByN5V3WzEXHxYMgnt",
  "key10": "2SRRPyQye9bCR8XHs1csDQP4a3kuwV9Gva3VFqSCCrvqt3oarmV6AHGFbLPwMMoSFM8gmFttveFFTdYmrhtyTwu8",
  "key11": "3V2ZaHh8cHbtEAkLXp69D8V9up8uuxfik8MQ2K42oqqUZhCDtWoJy2BJETud8qT2qtkzZVHYPyeUUivEsBVAmGyc",
  "key12": "5eS3fA4mWVq2GAmWTir4ecfLbhYEeYCgCEVTLV2iZJX8DxJdDfiQCfTUaNKzzxDcng7KfpLmPJZZbojnJsLnF1gt",
  "key13": "55VpXQ1TcCdXHmPbHPHvb9PPSBSkT4HgpFyAsEAJJMEP1tc786hNhqcWtbjfVFbvqcbp5drghpaYW5kjHrDBbV1b",
  "key14": "59JxxwUoVfPA398AMkw6jxTSQm5SNSdcNudL21V5rmoZfk23akSTcah8XSQ3CMUJUQL2UoA9HnU88uP8x7L1sJZq",
  "key15": "26hvPn8AvmCe3nvyZuZJZ2YadQP6vNucwrh5RrX4qesdxJ1foFAP7UxZed2xesyW2Vv5eXV1Zv2zkkWUVCHszGKb",
  "key16": "5XWEWSozhsaArF6DujvTEn4ySNBpQK3YYjdfXW6PrdA9BzQwHTckt5xUzfT3weJHzbM556GdevUjmSLo5zPkwQYh",
  "key17": "3X7A5UXBvEGhEDM31Rj4xqA2krgACoaSz5QHYFpdZ2JqgTbnq6wBNu1Px2icmmjRgjkXJc1gVutk7YaCriGbgSwe",
  "key18": "5nUMfaCGAvAcEQ1H6KzY4ihj6qMX6dEnnUsUz1c3sLLK7qR6aSmeFNGFFeSb9WtGKg1Qsxr4RTfW5pyf7P5ot6H5",
  "key19": "ponVJRBzjrz2iuaP9W2cuWvW6QKYJtwDcTdjANB7J5Hty9YGHvthMbhyhNLJkg5PmegQSbe8D5mW6XtKavSf5qJ",
  "key20": "5Cn91QMRKRAN6kxXKpRhN3TbxJfrg6heueB37TCUxh1N18V3Bn7NcaunvyFrQXyk6y4fqpRMvakRiYng69C3jxip",
  "key21": "3T2eYb58sjgzpECVfDu9Z4WspXG1UJkvs96ntaTKwxwXE6W2PjEqL4gFDR5TVT1hYGG2or2LKFivvb5YUhHkhWuT",
  "key22": "2FHF7TEh3G1VQhsXDDvEwy3hrQJFJxatZ4XoPYmWXfQPMFiHeLUvm4Zc1qpYcycnq9EVagesYuPua3airWsX1v3F",
  "key23": "QbCgX6VagfGzHgeP4D7PajnxLTmjUBhef6DDWCk2C9RNfz4UL8nXM1XVH3QcZ1HqHX6T1GLsweUdtjbFZgUQg48",
  "key24": "58b3kSNcvAfnAS6mGKAnmTHsTx2yaMZ5J4XEdmctJnsPn3qjmSexmF4CdbMCWqWHmnubGVqNpZwm5YidPVufUdV8",
  "key25": "2r87nE3sMTBx3BzPzXd4HgR1u8KzZWDUuxcQyhypQZFXgWxJrf1jvsZnpvuYEiWnzRXQ4eoeQcHYy4X3X5TpTK3u",
  "key26": "5VXgcAWkvqDSWATb644RWwuo4dL8AFR7wwYDZseyewDq18h21U9xf2JtqUET6NKSL3dbpJD4kUBXVgdzWS4vctyq",
  "key27": "2T9Pn7fLyUCgtQ4MCTvMd4vkg7jo1pWvvzFre9XuUQx23y5N7q5CeTnX9p2SEHXmdghGppvwHomEF5nUCq4X3yFH",
  "key28": "5NrFQQqnudpxN77RhJCg2i1nMmanhtfrnKuqDxYb1dp2Lb65fqu6QL3zTEqENrxtYX9AvZ3bjqVR4jYuZ3gwrTpg"
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
