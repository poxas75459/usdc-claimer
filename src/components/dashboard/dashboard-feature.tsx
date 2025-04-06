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
    "3Xi1AKTT6cEqV9qxzUGMNczSq3p2FHYrMfqXfTrGvPCiWAT4hFGG3GsNu5j19WJ88zdk6GZHeMdcZvXfYh3oAYSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1TEhXhyDC19bwLiyZeLjZC3xDqsT24hBqwmmM1z8UHqDDSyVTniJJEdFnZ4SqLD123kBNrnZXvKDrPKRBnkRqkw",
  "key1": "5M513pwYj3uvzaQB4n5uHBCWH8hEhygj9y3wu1hx5F6eJQPivrHK46SrS8a5YQwqpHReKvWeuNqSSUoid1Uh9WnH",
  "key2": "4UmYRAMaNevmohBirYhdnnrg8TNp1WmNvDLc8ahpKYSgb1xB2kdgnfTx6K6ueE5hVzLDae2Pvb49pQ9UqU1ts2Hh",
  "key3": "4FpfogFR91kK4e5pNonwLC2h9QYLL83XGMTwA36LQY5jNgL1kS6Wov6Zc8D6FS2CUwp2XuAkji7yVtXfQJS6VauE",
  "key4": "4eeFZhJEio81YTgfB3RAzPi9G5SVoDq5FyNmVmstzbZ3tPpuwJ1MpsVKCKjhFnkapPsjfu5bc1Vwk8ovz14eU6VC",
  "key5": "38oUfiJQFyJFVY5nMFSVMQQ7Utmu8FHD5fQDewd2DxTXNfzcjB1SUDsDmWXSWYXWrXFQSVKt3Z9jUdJUrgUGyRkx",
  "key6": "3iCDBAkyWyyQSvJ1E3gNrj3ULEkguYfeGNkeVzLKhkHZKYAmKfJ6cZKdBvCYsNLB5P82cnty64PYkrWa9qChY6d9",
  "key7": "j2WRutabnom7LcbRqb9VdrSzmsU6RbUvrECfZPvNnWERbL9fLMzvAE4FnFNJd5q5rpf7mYCYg3mABShhLt7QkSp",
  "key8": "2DHcPVtKvJYy31d9STk553diwA3HoszTpiCByFpGErKjaUhqY3Q3qqdQrpLzEDofQ1BotYRW1CNp7kKP7rR5hdZz",
  "key9": "55nQKTQZAHyXay6bswgG12eQR35LMxJgkttXa9Q7JLEpqiJMUXVK5NWiFRmvRAqi9hfPRniuKDCTm8FBwCfaLvhH",
  "key10": "4zcSzJELS6GULCnatcztkE3Uan5RAg2dqtHNHhx4ScYANsMK4MrabykBuDyyAgv3JDfxn24xKeC53etDee2JVR2C",
  "key11": "5aLJLMGMit5QD9uD2nQaWRwjkpKfMeXBuSE6XKWxyM7ngRWaf8rztVGaEVoZ4iDg5Bod7TnF3fAfJeBv5B1pkLVc",
  "key12": "4VpseaUq27UuUTe6Z7KJebudBGNRYAViQB1JJC7oWtxkLrJwGTkwBpM8gfjuJKkNgi9apf3BHRs5J7XKLyvD7nzF",
  "key13": "49ntHGFSFFt9BUEgX7ZLr9cq3wA76YBrYBmsABC4z2fHqYdfwBEXryjRxgNptJ8Dr7hVp76WoE6ZfVqvdmYCBuNk",
  "key14": "3U1cyurC9n4V6ZoVQU6pS1Jid59xbt6kq9YHqPF5C7KrMYVxcjYH9PQ97W7ibx2TpLLjdz5UgWkWAxAuHFwQNWjD",
  "key15": "5fkKF5jGCnURN1CjicnuevBVLLNoJ2Ua5LJ7mY99VRtK7ymvzJnNcs4XWqNtYCo9NJubNNV7Du7sKioNTKBun3qX",
  "key16": "55RouDDmf23RjS2f1kwWSGdiEmbZdDUt2qojPm4UDCoUS2jFHkpUDfNKNMoMt5SeeFe8RD6cWGLzhZPmd1SrNDPH",
  "key17": "51GxbGpfZHL7xsPg9x2xbsghFf31atc7dosxEhNbUzrsEzCYEWRPT5ge3ozH3iuXcaxuLAxvVs5Lhye2eWijZaWs",
  "key18": "3goqSf7qyxs6rCcgrkV3BJRiRf6Q4W8raXhnT5Seay83CsozY5zcbVtK4ssZjpHdeBt8e6bqsRk4XK9QmpUiyYSn",
  "key19": "39c27sNfJN5p6qLaTfNDySdAc8EpxDXrYtznpx3pAjejou5LJ3pXP7jsiMp3xL7AjZFRtFrXWTrwDSpyrVFeTSxV",
  "key20": "2RaUhrbZhVcdx7BGGBtka4UeRqU3KNjXW9UZ3j6QL9m9M1E79zydZ4fA1tgJAQcCauJ6jndt6tzkaVn61V4eDTNj",
  "key21": "23PYMgeMfGu43GBc9Kt8aojbnDm1CaQKz83rhdExWScRRxfYNRySy5Ep6nzPdd9BcDA1W8kZg8PYgtcwKZKeBUSX",
  "key22": "4qbsfEt9c5N97NaaubG9Exa1ufr15a8xh5VG3oPcZnbyFuwyMJhVBXpTFE3uNYDCMV8syvmLVatgMThPYyHTQdGT",
  "key23": "2mb8ByQqLkDHT9ug5ycWgDXUrUpUMcChvhfAGadPguxnHSHUKfM4z97CE5NAtzwvhGuFPv3vRrjZkwcagp85rpcM",
  "key24": "4qvz6qiVKhQXU2XoM7MBhnhKoRrQixt1rFCu2BhYVypRwnzuFfUsnMKdczmhb1k9eSugMJGQZTbiocDxBGqvT6VB",
  "key25": "4MY2wfQhg7rFQaSqdbZ9f77Eo7hHSifZSsiXBJmz4exei3uRoY1qHLJXjfMia9yvdg7UnveWP4khBxEyKpcP39fX",
  "key26": "4VSAdZbdVDRdVQMNvgoQ3nCgT9RCFGQy4hTsTLdHBuRuUyhG4RoBjgcTqBcGDDiPMLXPh6dqUzJyJ7f68YBi2kDM",
  "key27": "5CLjBc33hVuex9uaEEwrhy8RRMg4qDs4fwHxxLMdttCPaJZxQmunLiyyiaEJr7pweXaox8Ci8z95JwWCSVEZ8ufv",
  "key28": "2L5XfGY7U3Jj79gztQLLvASMtoUwvAjTAnxHnxEuJBVJPgV1PMW7ipDnSu6BxMYPoBoV4wZYJLVEnUns5gwTWfb2"
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
