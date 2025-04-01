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
    "3k1pW3E2GfM9jYyJE4hmeKwq8D8GnvAbLkGGFxAxb5TCdQH3djY7Qoz1VAoSJn8vbBGb9ZMA1DWwJehnPsYvWMUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gNkCNunnJ4g24vDyhGqRCepGXiRKJixNuxKy2YS9mvQo6k9zYa3i878kmkR65CpWbp5DDXDgsdkr4Q9SiwVaR8E",
  "key1": "3qjgxsqnaTe35pMSftdoNXWWP5uXtBnX11wv3WuYDR3wMTzL8jU96GGgQ9hTT3NXVBD6tBKwpDi6JF9yziWnaU99",
  "key2": "y2v5y5sRhxSqrZTz1sRuzyTxtKL628wdgCSEBByNLJvrYNWshuT975cMMFyjh2bht6qNymF6yjQ3EsPWVx1TwqX",
  "key3": "2S7So81CMX7Nnr7k4GjaAVzSYhtwSMeQ8bHrBLFo38nRxCsvioJgvd5napgW5QZHBbiEy5CwQJypx9gcGSpbzZG4",
  "key4": "5mHLLesP252mJutAZ9MVJh7p828ZcACbWFLGWfYLVCpxbYVza1QgCfFSz2uUjuLWiDmscdZyowMVgWdSxc7DNGmz",
  "key5": "3MLRWMVkhgYY4yEDiAkM7Zgpo8V8xN6UQU1zJRBcG2esgqgjHeMjMB1ug1MEdd4WBxJC7L7mEBdJghSWgHr64vfb",
  "key6": "3aZTqNJ1sMPRwVwaF9EYtxG2UbU97R1LZpkJuNoNLkR3ptxkDDciG3yGLtk39P9tCHWQLPjUpDCTDbJtaGbZSGEF",
  "key7": "2UUQri3y1KERBXdq6ykn5RjwRdknU57myKMGUq7ogD4tpYW6DbJUmSZ53Kc8yTszETv7oRoBxm6nYDtn1BwHcvXF",
  "key8": "33g85Ux7KQEZAYiCuj7UY5nyhpeddx43p1L6PnaPtycrEnzASvSc454bQmyXndcR3HsiiWSJ3smfzMje5C3xBzPL",
  "key9": "2XvREwBMU55dkR5PqK6i7tced15vsgSYjH6c6xndKktnXjWmCopmVLHuu1pbBFTmzsCpkHoQqeHwbDUd9Qwnj6xq",
  "key10": "q4bEuoeXVTfzJwKyxRcqAjHgeqtN9rr2PXTqjUTud322x56dGU1Lrt1Gy6QszjWtsCeknyChWKZ6TVtmNWWUAZc",
  "key11": "64BkAxUHwnPpss7ZfqQkpiRK566f6youXr6NZZfmbZxEXnQ8RJgEwuLpXMVfRXbC9eYtZPREazhWWftBijSD1NGN",
  "key12": "zfiS4dweVdUkUCyhjThCyprNRu3z4Y3ZgkNaf7AgJLf74e7yriJFExC3BLrtU6vJePYqPfrTw6aeYQ3E2TWjujA",
  "key13": "2heZWMgyNvnNYAwGBSo4uqgDQZYGRAupcR7Hw54h5qHhTGWrEeTJgpwPxxuCFKwqKecDQRxmBCqZGguREWYcKXiA",
  "key14": "E1AjsbecGNur7acgZCbore9huzUs48SgWPFGx9oTUeYjgiAJGLx63HMCnUEhViMS1DatUiewnbRf1HyBVLP6jd8",
  "key15": "39JVPAjBHZfqLYnTG6h2EX5yrtWVKuxk3rR6ch5uJmeLFCHXY98xnr165AbTYAgWcfiGijcYWuvAP2Fsz1Nh4a11",
  "key16": "4F7qAGdFzjgJhwR6iDWPz5s9MxLnA3HkYYyApJzbUi1xBb9BzJvvwTX62RbHGhCMPM92ap7NnEcFZg2iwZ1VmWAq",
  "key17": "w8TZn2p7hxit4Svhe6KJQ5N3PHhQS1rJnw3xgMquL2YWN8cAMpCsJ9qEJPHrbWfufg7LKserStv1iBhH7F8EnMY",
  "key18": "2hECM7iPZVrDp7rYgiWJyVMotBnUfyR6TQco7jTzAmWupH3FcTshYHMiHB2AZigFzUkeLJjNLpGrY13cQ18kqhXo",
  "key19": "4GK1TqMYgDnpnuKoaga85kCMQyoFaLZr5sgMG3t8SZBoBMVFF1SCEm3rFV2RZJK4R8x3T37MYfBpEpWgdQ2yJP7n",
  "key20": "4aB7s8GDLeQ189wPNBBAarGRSzbpQ9YyBAPWYbNFpbjcHCETbmCRAggottgkSWGcjjwGAcNDJR6KzU7HMBYeBYei",
  "key21": "4SwhPd8M9GHbApqZQyiHXW2PnTFAHP6WJoJLiyzhxLxZhR8zihEuRBtLsFzwoPrMsCMeByocnkgS3NoCMHAXLB7c",
  "key22": "5CMnMspePkXiqzBgDvvUBLXixLFscvJCkqjLZNWFRamAQS8NZm13bHTkF6WgeQKhjQZjZ9DQrmTt8CGqLsuFtrJ9",
  "key23": "615iHnmn82XDAvohkzmv9gxwiWqQMWPeEWA5XMS39GJGKkTxhoCDHonYoNKYiTRVxDuc8vsyj293poHjsMCjt6vd",
  "key24": "4EbX3yAH4ZEqQCKhEjyEfwieVduJzEnqEusSb3bwzStDW6Y1WAKCBEPVtQycXxxmpdE7y1YpmN8irPA2EaXzV94N",
  "key25": "4NgjwTUKhtRFaUzDXY4ES7Zxda2hRudK4fSahyPP5iHUVbziXrELySB2MCTFrt6zbYf3Lcsv4M9s7HVj8bewEByy",
  "key26": "5PhsTQxdXDiiWzWWgFtY2fXMoDZ3dsdi4amcrnxbevJSGwebNhWjS4btrsxj3b3MB4YE5hLBhXqtHSCfjq5ja2DG",
  "key27": "47ay3rhxZN17aSYKoBTfthM6hmzWet8VR81YUvh5iwiiG3jnBcRUHEb2JGE2U65BQidXNzyotfYM7o7gVoP2Ucqu",
  "key28": "36ZwUdExyQdCcZQnXAJisXoVb4YZyR3y8iLdWSNBfwEw6T63HiBMcE8a9UF7g7MJ9QJ8rZLKgQ9uSus87ZDx6nXr",
  "key29": "Q4eyc7U1tEkFK2ZCqx1oEVUHGgjkLNq6e29fb4LrwsstzgR9dXFBxdusJMvUifbkWU7i6MKA4rFXDi9gBT9EgFg",
  "key30": "3SpDxv4QNuYq395wtU3xCLudcAif2zJgxerNhTX4JLAubKDhijGcxxzN5zcJNGJpzQ8MBK5roRxTaxYR6vv1TwMo",
  "key31": "Liyu51PKCVmPYLGF7UQhYzR9ZrXmyb3A37TFnf5CSG2eC5SjKCpupzYVY3tHxxLyYjQJv2iFnERbdkESb4TNa9D",
  "key32": "2wMDwJrDs2wptniXegRDfaar6K4ypneqn3sgtmpYgXS48TyXoAUjGXBAFKaCPswq4yYxJfycP7p2h9ZSnS4g8m8Y",
  "key33": "2VgzdBT9CmXDt7g1mBbr8sznRt5H6ryzJ4jy4sKHRypoMFG99ABa92BVgisg4uCaqsPBmYHGfg3JrLUYY8ircEhm"
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
