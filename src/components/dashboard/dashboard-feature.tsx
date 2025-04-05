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
    "5uRAPAuyaqg6sQATLuXicDvruz4XVx2KQq1p9ZGQkaZATGAJSxwJtf9Rt47kFLxHzqx8Z98FqNFCimF968wwQgPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nzyoH155gcBRRAjqGsmJ1Z9RbvFjpAEZ3tMKzRYFzsyTkXntDKF7rXUNLfJcsXkunac4XSACiTXvMjYkPXqPJe1",
  "key1": "2ZDbmQ3gGaL5sbCjNgagbG8Dwxg2agcMn9UkKg9ujrg6NFnS7neryeNKsMnB32Kp6esaUawfmZtgoog4oZbBkS8C",
  "key2": "5NyN7AG3UmdZZMSQ9Evrhisa7Lx3EWYB39rNHmQF71ypYKJ3XbVKqQHELMUPRsrKShq3eJ1ZG1yMNZd2vn7iHzKc",
  "key3": "qfmqxvNeeuhZo4QB3g7kkKJf7jVzYqfUoiHEBuxjcHWNnWyoWxzEdqaUe2oVVkjUuJi5sgovRCFhUgV9R4fsJSz",
  "key4": "2s7oNsCnD73HdynhqJDPkGpbB8BVZ2DA4CKgcxozVrSgfG1q1V1sdxoZ8XKyAprtsHekFTeVU3m3jb2KXQGPM2LY",
  "key5": "f8Rpz71aZVCk4qeHU8qTtuBPFNURtwnjMYh3tTA4cccEPRGUVhXqvn6Fyz8NLNViUnyjFeic8tbpb1nMaihfFhE",
  "key6": "4qyvzzmbuYCjffCS9rcPpLLFQk7DjzarD1D1PPwcGcTETkQkf2V19EkurxNG8D4NdcukjzZkNfmyoBt3wm65pF6p",
  "key7": "3FXLXaC2FPa7pc9zqbKARALQ8U1ZLevY3RCjyxPVgikZFjaPw5tWhAFx35rrsWrrRBi6Tbr5zJ36PNq8FbLYjG2U",
  "key8": "3nQqGq8LJEF9m2oGgdQbw2XT46pxeoXegJCMeqVRSU4qPXKVaBBsriNAEpzNGPQUJ9iWmNBPDuAw74KnDnhpXUXs",
  "key9": "5suihDornNW8Qr4gUkv6Q6eYZpvouf6uNDS8xZtHPxroGa33tLng6bfPWvThbSqGGvKrJg2XLdDcTTt9wQtr1YCe",
  "key10": "4WYURmr7WgsTeH4z8SsSajKE4YCD9uX7y9wTptd8emU8XCMshTcX1YHeWnJMnY5K8uLe92toqvj9KaBHvFRx5HjS",
  "key11": "54un7GKYpbbxhune6qGg8YVzUJs9zi3qfukAfgZeKvV1vw1Ni99uiHY6E6QdE8NFh1SSWE1fmAqERQU79aE5FxYL",
  "key12": "wBkLgCJqVeMmVR5Lo2bYWyXnLVdw9mNzLZ5Tk9unQf4AmjDa82EewX3XvwVjt1mSkbHmiby6ZHGjPKZsStjDsBB",
  "key13": "3x4P7u7NfXhswjis6d387K9MevpXoUMod4AWsURWgboMukcukktyvYu3pJR7yqGDKRBqfFQnU1UwBgFBYHzJqSYg",
  "key14": "3QkKFChVJU8XPuKE35G98mztwd4sMLHo5BwVQh1tqcuPoZsT1gNaLohAaFK8yRcjj8QcNWf2y8mUcz3HuWk8SK2p",
  "key15": "2nnT9S3W3srGrDn8msbjH5n2SPwGFs8BvvUssrrhYMoKxMzM2CZszhyJQC2wSjH4mvctxtK5wCp1jDLztfGbA1fk",
  "key16": "2fiRJJghAsWfQ1MTzmVdWs1ihcpfNYdWRrNMCyQJvMGyxR4kwzFTsUedzL6xsKfqqefqmVpMC7aEBq1RSp2FnqUa",
  "key17": "5G3ntbfw7uhmrdQJ5PuP14jVWGMDzZBrxFeXt87BeGaCAqGwqQaGCB26AzS4Hk8USERxDdb2qPeaHXi4g4RwpEok",
  "key18": "3YKRUxS2Kp47pMmNLSN5ZkviWZdrnLEwwZYB2Na7wqkC9A4S9fR7ZcayWPJBEBkhCrhjZrLhMnenDty78GtSyWWq",
  "key19": "5uAJLsiYtJZ4m4xuEiVhGtjLf47UfcEkLcY8zyScEXPA2nvZGFMCwZ5DQjAqmRHBmTm3NbzqJR3tZrGKKbPRFemw",
  "key20": "ytzrJNmjmCkF18Zn77WvRiGey72ueZgbcPm6uPfT9G4FstzYyoZAd5qeaLnATu57Uo51T2Ev8bw3x6caWW8w7Ex",
  "key21": "5YSvCU9WybZ6Fysf9fL26aC1sY3KyhHswF3r68XmZHcMkuTizjdyNxNWibtCnatntxKdiioNA6C4p17WDrzDGE3b",
  "key22": "5pVETE2DBxuNaMbK3oNrXETK1UZaKDbAw3ZV18jgcTyid7bq8kTWabjKxASsdMcemGRnYeCY5wk3vjgXyLzhfq1V",
  "key23": "yqd7AzGcGiFX6VYCgRdGJnPZgSbrEeJkmZK6j9EhcXSmDpuABpBtGj1Gej3w3qTFkn9xQLDHU4dQAZrmTxKqkc8",
  "key24": "3rXAe4jiPTM9YwpRbkV8VCiBadacCKAb7iZtsHyZASXj7uwGt6RVyeXBJeLr6Rq2exJhLCK4KoU9iphxfyDzNhSt",
  "key25": "41VoqSKV5tDsDBbprEg696YZrTafCPERXQJSUC7N7ZYnqs51kR1WQ6USr1hHYRHky5uLDkfo7bdQbgAhcjM7w5UH",
  "key26": "EugeU7Fwk5m6ebUMAraoLLxt6oodEB5ofXSsZkZuX9NzMgVcQHh3KEfcMrbGuHjYcfDCnKUgETXMfE85CmC2vv7",
  "key27": "2YJFdkXc1UBfV4pAkL49fXemMmTznkFAQP2ev9Towj4NQPgZGgpbNVtvezFdmmGWwHXkc1dsjAUVqpjqRR6SyXPL",
  "key28": "3T8Dy3z9EpAW1zF3zvTWYEJtbb9krRUtuovkWTH5aonJiwWphc8pZjeSBsk3BoKxAvwpyfjguCBmWEV1R4e2GLHV",
  "key29": "2gErija7mqhe62vsd4uNDpMKFRe5xD64BsjijqjnRgw3a2Q1p89s85ipDKYiyvJzpuHZxTDvoPUxjQQtAhEpFgQM",
  "key30": "4AmXU3tx4jerJuBsbyvGh7ZEc7D6bHz7qer6UBVYRC6S4uJBjC5QArNHhLmhJ7LEEP7V3wG3pY9xmM6pFVrzbf5V",
  "key31": "5xUN6s5uyPz1Dv73HgG7F1kPBRZpeznAFZtTKuBUWhxyWLcDpNoQjyBTRGJLCruCToBQCN1YQm6koSP463VnhTVJ",
  "key32": "4eJ44ywFBmFYJRrGStoPRC93ovmzVa7BBEtCWVFsDMGShFX8ToNksG5bzpumUfWRNLYiMsxQ8RtwNNBc6qwiN3zk",
  "key33": "5LRnNpoWr9VjiNVAmqH6ur4YDGxLJWpsxHUPeJerZjXRTaFzd3QLzMyRh5U7SJGnWxj1drcbXcK2AUjnkccj6mY2",
  "key34": "5zFvAVbxNQYJLxVyzcpFZ3a38CWdHFk7wvEVR9xEnQQLXMYC6NrJsY8exaCvCSn2W7iHRejdsTnWnSb3zG9xXYLp",
  "key35": "2AyqpSGfxMv89NAdmVAU9UnvgML2VCNZsS7QUhJDgG4Rk3wuNVeySrecrtk2yw1DqDHyNvxU13dFzP3ppbykQ6yM"
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
