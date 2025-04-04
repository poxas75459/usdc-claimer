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
    "35zPFweSYePgmYVUunCGLSGKWwLbxKwSgkdsiTZLi4RrGBiXVUTy8DqKw75P54TMLQJEqxjkMn96UbYPVXG8cmU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mHesrXuQ6gxDaoxn82qyoAGxCFgkU397FZwt48rou9UWkrgr7BQEG9xbRTYC8PjZ6b6i5C8GooDGPHZ132VfcKq",
  "key1": "GLvje1YvVtJWLSadjaDVRAzU5Q1SG6Mmkp8uWjyJ7SDZcBgh6pcwNd56sAuQeeP6rMASVQrzL9ZEV6tPMUyBkxe",
  "key2": "2q7gYJ5Wb9gsvn8sKfXLdx7iVhS1HTsRM3nof7edJiEth3UgahtcuiRCrhNAojhZbbuXJ8jCw7jCayyeu1kkadxV",
  "key3": "Y2RZ9eCwDC1KiDjSbLZB2jdN9ZaqoZVAHfDjHCbPCeQd4Eq3vfxxRmMvzcFDnfPyoCCcMauPVBJF6KpcybPU5d1",
  "key4": "HcbyrJ1rqPkBFT48iQwjLjffnTNTb8QFSaQQecJWnYQYtjhT3bhBehT9GnEZSdwr61pkKTXh7uEa9UkTbu2jiGd",
  "key5": "53pEPg5SoiJkaBuHA9bcU65TCLDNoAxrTcqPpehxbcLedmvT7vmSefRHCYYen4mZCqrHuZhEoCbbrhroJEdXJj6W",
  "key6": "orXBdvjf7LbLkMaG5rTvBCn6xXni4f9uif3W1Sa8CfD7Ne8xQWSvC4h8jaZHFxZUshj9WMRYR3mF8bUjFVjRLKv",
  "key7": "5bHsUXpkcbSgEfynFboRjwk51EioLnPNxiEbfPsxtZ9qJT7pvkFZyuFbjwCF45Sri7aJnfegKoxeNWCPzypqKtXp",
  "key8": "CqoZBiHWago5DL7jwVxNW38nkMv8WsrLmZV4pCEE9akxCwvubqJRsVwvftk8Rfv8umwGcMUNmSvi7VUb9LnEfT5",
  "key9": "5xPbvZgg4KeBN66tAEzxVk1TY4qTJmMuQcJoSxjbTmDjznqWgrXwHcVV7Gbc3YF3w683VgaT9uRdR4v2eCAbuxDm",
  "key10": "51kPuxyunS99WfNw3TTCupXPHZ9SAofV5b4iX3w7USh4JaYNnEfjanzrbAxsvbXRpQCBJG9HAaBkoKvBRN2uT2Y8",
  "key11": "o5iz5dpbHC6sQDEjCGqZLMD5C9xCNuHQ2cdsFxiaLejhsZ8LzWiwXyoBr68SnT76coi6yika1TjMhM7NWBp9PEU",
  "key12": "3gsrJd3QCqyuCy7JeGar5WyP36ox86jVcHQCKgmYpWuv7KigAuALgHVL3Up73g32kqackuxcwXQKDJmaY7SSG74R",
  "key13": "3ffzheAeWJMuCmwh6D5no7YRD2vUhsMLwoFRpZF1CmhwskGv6xM9LNR7buoZuhuirDnE86ZZ2nmEB1WCTJ4SpvUE",
  "key14": "5bSfEV1mRbffYGF4Aqq8A4UG7L7GfZBfUVWcGw1CFbw5YTp44J7P2rnXsjKMNNq6JbKGAdtBYTosq6k7cEzZtQSV",
  "key15": "2j7RWFeCLQVqpJKPETMZQW4LTiWaoJ7aUjtj3BviU1X4BWbvGrq1EJEj8CFykHSkW1cH9nsiKsW3sywsP3Y87TpD",
  "key16": "2H4A9QWMws2PWvm1VC7QYAPZaJ5HjDYCYxn4QWZWs7t8ZM2W4wbEEorVbmo59iSSz4xJkCur1BucwnhgDyCqNCY5",
  "key17": "5K6vZydGY4xxwEuqEkBBXx6eqhgYShXroaeBcpbzU6s1T2mj2qqGiuZXB8rYUfsfYLukrmU42tmUGtCGRCx8DKAT",
  "key18": "4gA282dmUx2cU5NioXERu2MvgSRS9t4F7hcJkcGVRq1PDedDfR43DgSgxGcrc6WHyMjzhxvTRqvv8z4JAigLXmbs",
  "key19": "3CMxVtexKfAapG3Bne5bgQdtFqgMpZWo9cDan7zhXhSwzFhFqecyAmCFsEmtSi6R6wtqZZr3qDce4vyZvU4fNaL5",
  "key20": "54znmwqKKCKkKdvb1VygESCX7N1kSKrkziDfFCA4RE3oLTZReARE8X2fA4s4MFh2zaCFoWWTov3ToLCfAxtNaH7S",
  "key21": "hUL4ejjmnWQxSdyjcncyJ6dondYhaNEvGjSi1cLTXdBt2Gx57mmGRXkaJWGu5QoGJqLeMhv9PvCRtxa8Gf53rK6",
  "key22": "5LxJimcv4cbSzeEeyQUNdvvpyoDRfeu84Tk2ZYsRo8FiHf49nDboXXwfmfV7GdwpHa374KnTjq8u2NXzqp3RhuM5",
  "key23": "4k8ixyQcV5nUhVScBfijfd19kBox41BjC3uUKtRghWPQq2iKRxhHpVMvbMs4AjEKUjvuRjs3mBsbT2zjydpenLFz",
  "key24": "2wqeDT8jNbVXDbiDH3Vobv4qrAXWBFRUtLtUzhpwHKZiCN9aQjjyAYKxGSvjVqeUZtFkzJsHXv5nur3bQKdpJoKw",
  "key25": "pagP9YYQ8HYv98SectV6tsGeUufitpwxMtXQszHn8AokSZSNwYDL1fZRrMtGmARWn6cyj67LSrwtGytLrfMTLxP",
  "key26": "5cADnHSNGkk6f9SeHegfE8HsKGJg3rXVdN1UA9fAjnhWiAN45cjEY15K2YFRFDUfesHxhqeXBGNPxxFsqxaxE2CC"
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
