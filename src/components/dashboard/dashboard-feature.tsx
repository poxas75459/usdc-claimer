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
    "4pfuu2tvfAVGaNSJpuX9n78ZH3encVYUcuCL4Wmv4Lk92UtFzeYMHv3X3HaiZX41xGv4fszAF9G7LFPREYd2cP45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LsYqKiwWWsbV7gM3iPK1skTNLJjsvxFtTtUvMWgqAkbNbYFjHQ5sShUaf2bCVZXajVf7AseEnHT7LvfaWrVnrCp",
  "key1": "H2Uw1r9g4CpAMAHAr7xFfYuBLLnUv76yQSSbiGEmGCDZHYUsnsmRV33Vg9BEf58iC1W58TP725qDzJa7ASjNTej",
  "key2": "5huQMsAsCUDNRDEd1ipurpUCt9JJRggKWP8imb1CoRv5YkLahe9hj2zuF6i7WS22FoEiuEc5M9r1necwiWx7VXJS",
  "key3": "VPQKhyUPkEV7KoYKRcCQvPiygZMqszRomBExJrduqtmf2H2SyRLDvg37rrhbJECVC2VnbtuvmD5eLRA51TLhggY",
  "key4": "39pG9fDwQUj9Z7YbFFFvGv4NR78vYwVhvcETPvEzTzUkYcQzJ2PSpfbFqacgLeC1zKCk6agHBQwXmoMuVcbRdgvZ",
  "key5": "376PTSVpRdL4DP5pEmy3bmp5iHbfYmyfjQJvmH6akpsGv4m4XgRU1nJxMeGQrrBFefg9kcpYEg4AQveTYzZ2D59F",
  "key6": "3gmkA5V8NYdXNvQAi3Wi6vvPr2Wqi3cBxs7UTKnsP85L3pvJTtkqdcW8nCo4c2kTSKDufZYMa7Hx49CoGqrw66Y",
  "key7": "3scQzMoSVjAJmC2QtZbQRDmpQMnW7aSBGkEX1LjTuSrFRX5tBpLNVrFrauRu8jpBRffDbUVsJtiLiKz5rieYV5gS",
  "key8": "5r8cMYPYPxafknNsD9babBQoxKJ9LMtU9p4DJ6p3XaERsTRthhP34sDMnn9Tib87fKfz51BkQT3T57SiBRTuhwYP",
  "key9": "5jZU9jJwwh95yax5Cq2CgeQCVucN1oeAbTBF77fhAkU5rJNMhvPFZj4MUkmqZ8S8eeSJ8AtSiKheTgoXeW6EXvQg",
  "key10": "4TR7PLbsJCLSU1QdHkTn6Ly61HVzthFiQfE9vqgPyivPNirpjtKzQdU5iuVUJtw4MhRLM5L5fE5XsvEbsvtuqUCs",
  "key11": "1QBAsiiiCiGpRZRmxxmPKQCg3f7Gjw8HMM6HHgxZWWudXrsy9WrMho8VuFckJQMvd66v32hTiyXkSuQy31Ep3bD",
  "key12": "39LC8HVpD46queyCu76jxA23jN15bd9HXr1VJxmVo1ePwRVctMJEXjpNiyFqJWPqw9iWn5kNjR48JqStYdhKZxm7",
  "key13": "5Ww8dcN9TcJjyfnBzcLb8ggz3qKSSNkewmzu9cSxrRebzNcikL5ViiaVTquzgkq8pmsm6muqg13gsq1LavXwTT8F",
  "key14": "36QjfTRFk5Yq8PKcZW5nPrGMeGddkuQsGXuMmpaJoRD5aCYxEUme6oKtFvhn1Dthep4TfoUfDvWQ96jzPPieM33h",
  "key15": "EMPJa1DgA2kr2uJXeSuYLiELoBS4bYEU12d4huxbUqrQGCgcMMbdcycMER8csAecSDV5jVZQuLxKYAt114SZKG6",
  "key16": "3W3EVfUMZD2Vk3TW8r9fpensCuZWNtVtN82gLZrErXMmpE5KRZ7L32rJ49e4rNREDVGTTgkReUJFwiJxnvosUb2n",
  "key17": "3FJyikAst7UbRSq4D4FpidPg5mSNEtCiyXjGRBjR4u3ornNh2VsXExDtXkm4Grr1dZopJR7y2Dg8Rapu9usMnJBT",
  "key18": "cFjVNCvBak3afdKKvM952Zyqa831iDRqVdgxmijGbWsNRDAiEeQ6u7NnjaVvnWh5aw3hfLug1fhMrih2TLshoST",
  "key19": "ck84hx4r2b7ZejwSQiygrjJJvZx8DoomkeKFfC3zvS2ecNzoAMWuYMMYbkgxsx5AekEWJrSWad7TCnkqvRoCBds",
  "key20": "5aBB2EEvnPjM37PHYznjBd1s3sGq1L3K3b9FLNQunDQctegZg3j3WCCwfvCiVzG5DARwWyrFjMwfJv7RrWZuVFEY",
  "key21": "4SDoBt4QnUWnFKZXZqfG8fXWwHgjUqufKGrW859vbr4Y7CojJ9E5dPmeUwtNSHPpdxZmdFA1xyN9W66op9YT8v91",
  "key22": "56dJkMjKLBpSLriNPoRjZPWY57ntgHhTJPzo1KQL5DBeUPPWevbrRvZ1obohpHkUWWBNtMxmh8NvCaEp8Z5Hncf2",
  "key23": "24nzxAKBviFphTEsKGPnpcchgNkE1Eu3C9mjXTgfr8r4UgNHB5Bi1enRgFufawFZuzuoJx33KVpANi7scAjM1sz2",
  "key24": "5XsZYJ2BvEWp3UTQYaajGh2jbSgSHSLYFpmsjLT3XtQdkfFG5bhcxXwsiXLRTzY57393NVccnpgWPD3qVjhWwvF",
  "key25": "5w1Lk9eyWiz1VnG9ihqBPFyRdPf9H5ado1hJ9zSqAySVP9y5Fwg3ix1E1fiaeR3RPNHVtru91YFCUGzuoQhK4NYL",
  "key26": "3W7MHSLGr9Fqxfqn1d7eL136oze75ba9iL4T6qaLR4FM8GmGhEHhC6F6Q3xZttoEGmnP1QCXJsojGaLrj4eZgTf6",
  "key27": "5tczHjECZPmavaac8HH1QFcKaagsFuFL74ksEyzq5qTY6TjwUDcE7HA6kbvvP1ry67YeKbaQHWp8nf2Ly1xsdDN7",
  "key28": "3hdXeCaSEt1kiQuh3bQz6TQGzxnVdGVyYt1Tf6vvTXAYKgh4xZNsdRhGwweMbnX8jPPYprwtEwf4Qdb1wcx7VMVR",
  "key29": "2J5QKuUkV2BtMHBrb6gMraDVT81YCfeB1cHk4WCEZnSGXwUdUQJvB3nsSsZHBjXHJAL7WLKLDavoZMbzThasNBuF",
  "key30": "3s49gopEsb1W8k1Y2FhDfJbsWDkAD67yexPff7Y6hTN4gn25aAaGNe8FAZgbcB1qGjtYLk9p372mmuojE5wDHDc5"
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
