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
    "4XX1yRBezH4YDPMCoEmp6WdmEieuMEANSx6hCd7KyP6UKtUWP1CydYYTCmYpFD1L3m8Qr77WTNXnzs9LzzBrrddx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YApd3qCpVZhnEEoZjf8KWWXDFwSzCpwZjQH3wxKFsM7ddor3KDsRYRepz4jwbKtj95Gr8yZJHniffUJjKJUkaz3",
  "key1": "4fWTos39jfgHTo5Crd7ZRJCwsYKWrCXcqFr1UsWDPfKvrvTAtFyrngNdamQYPZkSpkcJSJfExJJX29tuUsb5k1ee",
  "key2": "5NeZu6x9kd2BQY2y4hVdCRGxMCeiMgtvRTN17CBfT6ZCqizqxDSDhYRctd24Ga58eJ8NS9h7muaEKQuRp4boKrPB",
  "key3": "57he3SHB48Qbor5Un6ZghqBE582KJC8xW4QB2UMEr27tfg2yVVPpSCGrqkPui9mW6nkNSU5hdPP56jwHH8J6CVNX",
  "key4": "51fjgfUECoDQgfpKtbtYpMpfdSTw7eScjtDCmpagMujutsVYuBGiPz5wVePSBNTLgEiQ5L8p1XvoGGrs7RBmQLfx",
  "key5": "2Egw7aPPkqDMszipbm9ehr25HfqDN7VbJYuKUGCRe7wFmJTVfxw6kzRwmXe3iL5jKibLJuRjApAujaRMTy5VWFm4",
  "key6": "3Cpb6cpoXhb42dFazbSqwy174jPAwRMAFMGA2JimYg12KVkMeppFRUatkrZL7iwCZMjpXGSwLxDr5fic8pBPbHXZ",
  "key7": "3o1UgQy6jqMJcw1cHLmJTtZFYDuMo72Ph5443vMMfyzMuiQbefCYR9tRfZrvU77sSA5RWda12sGNfgFqawCKgKwq",
  "key8": "EoxokdXzqreDiN77zKsurZW3g2jKUDVZsiNu9ndbjjyUiDKMzqo23LKEeH7EANmVjnW3FuAQxnRGFBpvkPRDLmi",
  "key9": "Y9UQAe8kpmCTGBsth1fDUNgGDiXx32MCf5CZET3GSPua6bMt9z6kvabziJDaCmZ7MY9a1Rjyc7WomeTEXwK8FmV",
  "key10": "4ERcY7MAocL6Am8haZbtR7QWhtJubZxEZ3VP19WQCRzeB9e4PMAzhYPJGaDti2Vo1Ssfoifs4TzB6ZpSp8NKtXnP",
  "key11": "2xKE2y9TDEXF9P8LRLvCM2VVSGmmV5XtCA2enPx5gfWPQZqZcNGB3y13UfMppuMGtWZXZeWmqu8EpJLwnyEsEduW",
  "key12": "2wede15BBiZx4PDTR8HnSxYrUNy9mqJPx5bXGTqxbqsXqmNcGnpRrJEuxnEBq63CZPmkwmUXRwrcARqLmbb7rtvT",
  "key13": "3L2rKBnbmUPXmbvVuALeW3FxPvKR5R9AQQLDTLeKeFVsyXvBYTf1pWMb7euBbEBR6hGGNa1U2YBJSLU43FvNNs7w",
  "key14": "3EidFBeFvjzBDP2TQTBxmhiPafsGnLnc8NzxVyLL4N2WJM3xM8MbwrgzActqWcX8sgQeAioJpCCxBTohdS6LTGGe",
  "key15": "5JybLuzqmSXccMULgQZ2GJEwLws9HeqWAkojK9PXo1i2RcH7qVTGpAUz8GUxNJQdkaWe9QtZuinTXppvjZ1oJF4i",
  "key16": "4zieLZf4yQMqeq9DyquQMachJmhkWtx7e5JbRHLGRLzHmxu63nkxHNwNH6gjnnoBZvuFj3tq3RcKUSNWyF3pJ76L",
  "key17": "2ZDCHKJqJerte13xKQvfTLeCgRxLtqreAYkWpTBorv72hcyYmVdaxt5gMrXieMU5uYpwqFeh4FrmVzJMi1YiFze8",
  "key18": "5RChScsaXYZfbfKZfMYVkEtRieYz6r7Jezu7bn1knnmKLBnnqrjx1mdAz5RqvDQERaNaUWcNAKPsY47JnsHw6EtN",
  "key19": "2cGELzDTBQ4tnvXB86jvJMRvhFhtpxr1ixsmKYJEXcDRzn9EqjH3xx8Te4Y7qpVsncXM4v6tDUGUGuFWfkQfWQEy",
  "key20": "3qMmc65KQA4vxNHwP1hEByQVwn2AgPwqhoAAJ85bdSDHbAK1Fb4zogvL1HDHsmAAdSsEdXZnoztpXECuSu4ioKp6",
  "key21": "NUwiDAN2GXdCnEjByGkTScw1akAAFWgvmgHAsCVjqwAgo5xVB6YbivRGp8SPPLfG6rsnENFH6shgTRrp1tCx5YL",
  "key22": "3VRqbyFSKoJAiRt8CQufKC881gXrHLYjLcG2z6MH5xaXtYLtwPwpahBUbydsg9z3GJoLDiKE6M4CrvyYkQU73k9e",
  "key23": "4vfc8XTEhdfrFtxQnU3YqBPqWRG73oufbXwcSAmidXk2vR6Mms846MBPfrLrRZsPRpMc4CLv56hfKb2tcFmkRuKh",
  "key24": "4yCNPWTyvjXLNH12DQki7LWooDo8P2sdSZd8e6pcBcSfxfLZwquBR4xD9RwiCtL1ZTwmb6v8XqWo24HjFEiZbJzD",
  "key25": "2W6Xb53EunsqmiTC1kdLLiAjiWFPFpKq1sHWraysepESsgdYnv2nbCKqPnoW1SFdxZd5waWPqhnVYpm8wEikimLE"
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
