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
    "46oN97N66bpMFATB1tHs52s3KN2GEQJGUJHH6MCoVKYjM2Fkof5UggLRuZLV3J4PHD1cHXdHnbcHC3dWVyb5jQ8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ri4JUDmrTJMb83c45WUDbUS5gkfmKq38ZYWmBF1Gdh2gAwFQmQVzHRsEGEFn2KvvevqoZ8QDfMPbSycN6waXVQV",
  "key1": "3qB6LuPvUFBvNLamaq7wpbwqCrbLGdxAhK4upBVXD37f8sbZsVGg58Tnd1VnGg3E87J7M6f6k2ewBVJRov6vx5nf",
  "key2": "49h58A9pXSiixGPAFMy4KKTk9myNXmkHiDXU3GsTDsxF4Ge1UzStdbctUNv9dv1NZBN35QjDwKY2sKfq8e7N3Mpu",
  "key3": "2soK25ao46bCZqgeBKnWUAGy4fL5yoCAywbTqWAe7YUujJJ7ZY5DmKuJdq3HPQtTsozLWyL3oFHftfepJ7eBWWPE",
  "key4": "23SsP3QzvVWnRjB1yyAyQa72SBkFyRB8bn7xmGPxKZRVAKDVvxFyhsUNV7sH53ZG86BRapFoJnpPTsiXhSkMmW7o",
  "key5": "548Yo2yePP8acqyFdoQNcZNRxsQkN4cB5gB2uhhmKSM6c3FuwY1zt2CgDdWFMxaimZxVPMzx5SPG2j81oxUfa5Db",
  "key6": "oEFEcDSzTTeTZkdByKokexnpMWXpMLWMQUPJbuXu6eQjCT53WMGvi32X9jmLqonxRtPh8YxGYgJ1tVEq7S7Wxuy",
  "key7": "56zAGTRP7HsyEkyi5ZjqNVCtDepLfxs5Z4Xe3weBcEA2oTEvTx8EVi4Cz6cYKwcm5NQHtYQDvsNXGDwaW57CYX9p",
  "key8": "5JnzRWx3m5fs2UTN319JyhuN7PWcgFryWx2CXUktCeFfisgpgnMhC4PTU7Uf9we9z3GvyLxfip8A3fwoffbsKSEs",
  "key9": "4HKUfLYx4kMxomvhiCwst2JRX43vEMV2JguY1iiULZ4C1YYCVpHixY76Rbt1ApknrqN4CFRraN5KPD2xviTvq2Tx",
  "key10": "3UR4ziHF7TaivG3vuj7x1Z4Nub42a7mVVN6wCKq1EYAFqSJMmji4R2u2oeZ35J4hbFwVpotFV7QEsUqQ1gKGexnF",
  "key11": "bgTQeqqrWRLbU3WNokFpYsobzdKd6qEhdS1voHeh1opRrCMBLxvLoNp18L8RB3YtZfGoafRQV4G3GmtT5u9LvkL",
  "key12": "h3B4MSdK7ti4tSsdW4ordzdhY7qsJL4CwzefR4xMGfeEGaEmKe9YAdzJkqEDuqZmVcjFXmQ6bXp1wXfqboTE6Qv",
  "key13": "2Pgase7v9GmGDhyd6jD8dFsnhJFWCy4wXsStzGHJ6CFTBUrbZ7FS1ecab3kfa8nE6ow7dGtbwbS3mMSkhnyDU15V",
  "key14": "5AkHg91Dv7JTADtacxi6kgfpeuRjv38Uy1hrz8ZfRBfnQmcptUFdeqKYsvnS9hNPY3WYbya77q8uJjxPkCujPqQb",
  "key15": "5QYQEcpeiE6R6ecgPXBJkQULtp6eagFnFfMWtqweSGcqe69dmrWMEwh3fMRPh3VxBuRG44TV99fya4rNMWtQWmWY",
  "key16": "2UhAWpDBy75Wyn2pZKXRNUQLy2Q6guM7FJCQmAKqYgUGQ3mTbYFmR9obt3NrNP8oRXvDcr9C1xkEXXCSsp871AYq",
  "key17": "3J3Gb65DGZ9qUnkGEWeFsfLr2rdx4pAP7vdwF78pRLGWV2Ugk4fYsAX6sP1U3Z8Ba8ivd4GJWix924Ja59WvfgNp",
  "key18": "2rmfBbxnH9xo48QoXggh9s1FCfm7LXNmBBNZxBxkindqMTtvGgBtwGzZYFTGoLG8AKkmVdSfAzeafgewgBgvbcEL",
  "key19": "5sE6SEEEmgDnzqqEcwgU2giS5BJkySibvEAUFHguhAxySe5GZQkWFkVUg5rWKxXLoMuo1e64a64frtr1mGzF7Sv3",
  "key20": "2JcG2xufd6DMtDKiPcSo8PNY25ybZpSbhgXwFHVAY1vuaT2mAAE43mko3N9EB79w7AeWHr17UizTrXHhQSXREGpg",
  "key21": "yVn8v9A5s9qKbLVpz8SnoWwhEiQN3LdcUXLWNg2Fy7cWGLtxEG6iuF8fXAFRGAUKZeAtbx4d2qbZMgGcYzfxemT",
  "key22": "4yva4RMgguS5tMomXVXMqpHxviakLbRV6T21GVht7kVVq113iRnekAPCV7ASFT96Z2eKSUtCWnc3tkFYKC8ZZu45",
  "key23": "57CeCbqE5Y75WrRPympfBsW5u7A7MbarLSvwfMhxVtLjSrxKU4zxwPVQ8hZzgc7a12ZvwXMkNBDar8AcHHsiDKCN",
  "key24": "okbfGEC8cV76FS1TffmRhW3eSpF1tL8MedtBoN2doEDmSpb7cFaNsMtgZ4oBKb5P7kj9fv7vpJnJ45mUDxsbyNu",
  "key25": "2gc9ejBKtaKK2Wm4fN1VTxFhhoM8oTcPJeJ3nU81Eu1DqWhcdeVprDzRtY82Bb5BDQjy6AsTHTaN5fZcQn7Xadxv",
  "key26": "3iMYkwcrLgZWzT1xj1QEpfABEuz4ABKnB2yU4xWxG6wjFRSrM2HhU9o42UpBdFJ5kjVsuHptxdHiwHq6AfZo22ZN",
  "key27": "56Q61zLxjTYS1NGMM7TNcFqBBxvwVMPhGyGDF6QeSyB4PviJAeVEtGhQUGtAnUjGB56goBivDCJUkcUkeNjzaMV",
  "key28": "H5kzWWegomJKTNmQW1guELXRWmPVdJCbREEfmGytTByn4hMxjVzb8qnpkndJPjG1z4pcQG19BUGHxCAiMnxB8am",
  "key29": "5BgnQSYVSqU5cjFkChdYdLRSDLDoTKgUyFkGBxJYyLcNGWHGYWWMBXtXCHdK6eEdtn27zA3A9ijdBDodRAbi2rT"
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
