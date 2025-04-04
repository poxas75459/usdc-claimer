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
    "5bzhYsQnpSBrrwdwq1vKrLrqCaqkTqw3GCTRbi4Yh8k2bY6Zm58WCFZa7zsb1n1hCKKmSNjGmDKyMhZhSmUdB7cG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K5f9tQyR6GwGT7e6J8dnCEyqjvUSZRNovGFvav4aSY48v6SERDqsQdmctPsc1gf3ZUB2mEez3R4JA1cieFQLtWx",
  "key1": "yztipdj7Zuk2g5CYgjoGnSRNGdkwN4Z6TrJxj8VNW3QmvP7TsreoyegnKpkb3aRQJ5FNvbZwGMvqRBEspYkCrS3",
  "key2": "g15QD4PTwMqYDXLaHAZUbofa6jZUqKBT97tKvnKkTDqLWpfKfnbdG6sRSX46AjAXnXReR38ECN2dYAyAjgfbQLu",
  "key3": "2bjzqvop6aMkqnsY9X97Jsy5TW8PtL4ZewMjyG23owJPjpxQxaMz8kVkwPhRQn6QxwydKT67eTURxoP3Re25dytd",
  "key4": "2wirVeHqdd2FwdAYfyhLozYDZKootnt4z6RVGxx6DJ3ZQ4hFBVKCc9VDU3TAo4KLVBxZeppL8xWZmHSRD4NBhCjS",
  "key5": "2zBKXBW8SmxSmSj8itWS2RnuLuUPjtg12Kmyg6xVpgx8FC3RpDtciTXKStkJDdRJo3RBteLSfHHhDJ9A9QbMRoKD",
  "key6": "3UiuJJSXXYqAVs5YxJiAJ67mkk2tKPuP3nFzbtG7FGSvVgwTYrSxaScKsBCokJ5BGN1ek6PycCgxdyuztBh2RARa",
  "key7": "4weEVkcXDrqURUD1MrNqp4DXoNcXabLsNvqLoHzCSnUmmUyLXEeBVSaCrr4rbksAAgmM7ig2MXgjeJEAoJk1Tb5e",
  "key8": "51bZDo7sG6jGdQSsbypXzMHokwhc5o44MZRKzfgN86PKqBu2FdgFxz6VccH5uBhYxwaYRQ57KVuscMCwVT9hF2vH",
  "key9": "3baB4BspBbrVNpjzfieidBMqPKCVSRRExi3MtPRTQpnjB1KeM7LJRXWsTeNXRrNEsaCg33XNGiPtbL3djpX53TFL",
  "key10": "vrmNjmP26yBDdyicLxaiAzgsUezHwGcQA4dYttR6eMv8tNMWHNT7eawd6ewyNzMSKkxQCpLe7WmSMs6ZFqhas1v",
  "key11": "57J2rzBNcZsmo4zRD9FDNRs6696KuRegpbonuiwwzFVvCf2oAbygWvXU5H5bgnsinY3uzBH2c5nLhhSxaXrUypyV",
  "key12": "3XPJhNzoyCtzTW2ygHwyEyjzHx3WK2HGrdDmS2pA35y1VYtchkfGdXRnCxhNz8qUmeQormu2eupsJrbhRhxvUPt9",
  "key13": "4nYFMB7P268Y9PNSEt3G27kYNNuRjYxpY4iX8bvf3KfnRsMyySNpcKU4KXAx55znQKisPeQncn2155c6DEnSPYsj",
  "key14": "5mz1DD1p5n646b4rfihNvoXUkTZFKmwJujBX6kpLFgxFixkeY7canvT2ndF5rMNa7rFJFCJCLwSqgQtWNz1YcZai",
  "key15": "464v93a2BcYMt3v9EZPSQZXkfWxjsVSWc21qeNrsEJjDBAVU3ZH4ZX2W56X2aUnwiEwRzVJM7RfroxtjKryybXPk",
  "key16": "55NrXcAHda1AMvE91jXKrjnwFMwHQStkuwdCiiR1MprDEUpU2ppsFVvEdYGd35qHxa6GGwJfac3qnyzDVosznHqN",
  "key17": "5NqLsuCZtCU9b53aoo1Ki8uTB3cBdf5JPbuU4xjYu5RY5795Q4vqQMM1XBEB3na8qtW6ogq1VaLeLx9kmjB9DpJA",
  "key18": "4CoGijBrGTsLjv8nMgixbfLhH2triyAFkNRbsovihYWfTW6APRH5yckJdqCBSz1T1U2pqcJLdXsF1AM9suapjsRE",
  "key19": "3hRKwfL1x3skkB7y6Jfs4QEZQZnDfjJ5aA9MXSNCJkwvMPTW4P2DJ8gL16zqUD31w7EXY6oCAhy875eGZjpRrt55",
  "key20": "581v8r9h5AAejw8F2gZ6Yzgj1ZPkzUhR7kGABNk2o5Suv1amDZrGSPb1YzhxfHxgXCJXSRQDppWVpm86QEtXJnhg",
  "key21": "4VAsJjcJoYCQLqZ4XpjmuhUhTYEusc1sgaEPXhEh5zqEATZH7oS4W2vEtMKqW5rmvGPQd3GpmSWoL19JEScRkJrG",
  "key22": "4raTKDV1mWkn3sW6AGEGhsNk4WAZsqRtnVrG5bTZ8HPtqo4yd9ETtMVF3SZ7ycqZux1yTFMhE6cFCfRVh6F1YDGX",
  "key23": "37wr5uqfD2Tdeso4FFW4M9BE3U3BVaWF613i1RiAmdc1mVNDBXvJRkL8www1MUreFb2ptfDhsmZ8sq3enZAfg1v",
  "key24": "5us4sT3Gjpr2rirBcKp1dbMWkJHM1xiydYy8YQN76V6jXDPz3z8x86RtaPLtkNdr2svKZJBMFwUAM1vcBL59F7rE",
  "key25": "53iMbBw4futuqBoacFhDXd1jCUwhFKTAw6Wzd5u3m4jxPDBkSUfNr14Q5LTnjA7pCJqkHaptiM4zoYKqrVqM488N",
  "key26": "5FtzReAyy2z2fxetEjaEPzhPawZUxpUgfL3AnN3TNofMf5gXNv34STL5jyso3pwucHhRYCf7kEjDakmZoJyByiyo",
  "key27": "3MtXrm7gJuRc8F4JTUAS6FLMSF4eccHVwPTDupGzg6ZYtPCxqagnowEdBLmJTN5pNnXTUWU7r8J7s1ccrf1TR7Ew",
  "key28": "3gGogZKx5wH6ZKugB5kbtyWj5Wp4tL5AMTBeR4yuymj9HQq9QH8eTcu4fi4KwQcJZuvvU5LfenCEcJtXY7jAZrhg"
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
