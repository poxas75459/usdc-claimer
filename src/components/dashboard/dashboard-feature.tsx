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
    "5fNi8GF6riPDHJqwQGYCAaZSyo3mYtMqvTdpBQdssuU19N6MUmEXdd6AamW8UpKLTd883Q6H7xPM3R2KtSTBfPrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "223JGeHwPyLGNYg1ZPZaz8Ezo7Pdk458ZWqY5ZKzEmMKdjMHqgjSAqBPssn3MmRL7XCQgLPTFmpp8if5jwNTok6n",
  "key1": "3ANUTUgu73tYp9j73QYbvATkAMpj3LairmS2kUSmqUHghdAWvZo9WvnNyL8t6avf4tvnKNwDUBhgBMGHidPpvkWY",
  "key2": "4CSvmvT3tkQPSYqTRxYPbJy37tuYbWT1nnvTgxPnvKt98Ysge7M7744bnpFmRDkkstNcHFprrjfFesGKHyed3yW4",
  "key3": "5o8aDGo2nDcoDrtNQd7ox1Wjq9wpXLZWhq1wnvZ9zBfwsiau6Nu5KVwqAe1pVpYzbMJbUJABDHQEb1wCQDPeGnN1",
  "key4": "5qYPE5XzVCqpRtYVfH86ZmYhC5ihVLycS6ataCTXXUZz6vA5nfmmxW8Vdtd1vymFn1HsYJaY9GMTM59Mztgh5pEf",
  "key5": "KtznmAKJzJejXEC6zc1PeJTgGx9Bii5qcg9YJ1LGsEs28VziQtuaUztsf9oaU556mbiUHf8osHYC2fzBdNTh8Fj",
  "key6": "7etQpGLx6aLswwhkPcgWzcvWK4PCGWKwHYJFeTLDzuLw6EukNp9dJ7DFzVL3qubx2MGRpnjvLEkKnBY7UiyKe1x",
  "key7": "4aCPPNfuJKXSqW16p2oE2MkFkPc32Th5KGTB6cxSF8YUA4SixRwpAzpnqfHQwSJVCAv4eVVHsFRHsEf8vJa1Rkru",
  "key8": "5XtciqWSV4CVJJJuu4vouKqWpVg7JM1TJnioYHYQJPC3rC4X4YBJrMkEHoupabCQzh6d88NhYpfarPsdFoep1ZLe",
  "key9": "2y6j7qKHKFBJ3qnFaALQdnxWBtSKFupyekE1HTcb7yGYvfLFNyuopqMwF6n1Dm7nssfB2zY8XJTimD3MykGnVmh1",
  "key10": "3aMdp5ookigkiDS26JtFmVpPrQ3rjf5VZ4f4nadkCSk7c1p3ex1rrYXed8Z1SkgZ7MWXXdyWrKsFtcDsn5wrVTGD",
  "key11": "HtfWf4rnYpxb9HTjqT98Pwpuc5n7vyehZgEtLjET2C4jNYjJPRLit3AL4yCdyKbwUKZBjzrBGkubER1vkQrVVra",
  "key12": "7mhoJoimiCFXaCe1DbCoAxwQ5KgP9PyRko5croZGXgsa5sBnGszn3s3GjktkBHRxBxsdyq1L4Kev2ui6fuiiPJL",
  "key13": "uvqiztsK7F1GzJFoUFcDvBrz5N5UtVatKdqv1BAfCGQ6B1UViTXWmmjR8j2FGnKSVLqzJ2FijXM8uyvZZai6tgB",
  "key14": "59SxnwGDUZXX1BGHeooajJT7PYkYdwmwxZAuR3oGEjmeFTBFZtGVhzChhsHk5BLbNX69QbzzAC6YFCd1rqrDqigZ",
  "key15": "2dgDm7M4ScvLtfi7mpYS2mxa5KSnqoDMP3WuFFGffFvAfnRx8wpd7Enk5UiuNVhphxNEcHXLtkmYaSobSynJgs8R",
  "key16": "33MAX4LE9nUtrZj8HukYyJMiUghkFRqkKPD1EGzvzQ4nLyVEQRjycsnn5rmwQGZhEAP6hKYZVjdhkjskGCxwyNYd",
  "key17": "3fT8WcHQs28hHSAvWTYi715ZPd1y5aBqrabnUMZZAbJ9SBqVfJkrRSboEEry5Qz9QSLATNezQQM1dtGou8uPHnPv",
  "key18": "3UxLkMCwdz86CNnrg8hsLphiDumn4Zxw7xS92y72HCZ2KEQKujTGvzSfveAwWf9wKna6GE4Z5pa66ZnGx2XwXjLx",
  "key19": "3jJ6LKhSFePZEwiYBVFjn6ziCqZvuVNMpqBBBfmWd9h1NDFbHu3qe5Bat7ZvsoHFohwtM4qh2b6YREyo7edRPU1H",
  "key20": "5yfFdaXKig2qQTY1pC2A8ofFoPWPh5w8wDBX5RY4SAfDHpbw3XEtjeA3ZV5233M6hXU2ySwQ5n2FMFx1A8T4temF",
  "key21": "5L8Nbdz6aNJjEoj95AqSkyifcHVdpkZ1x9AWwYXhR4jvLoUn3HXUzc4B7SyxQ86TWBAcbrECZin3ukQyJYsT229V",
  "key22": "38616kAH48743rVoW5eM7sCmTpQnLGCyFVypfoRikoaNsGgU5xEFZGFBKvuEQ1dcKwsrVCHLKkmnzwFcW5AjEze6",
  "key23": "3zroeCLB3YYAagsU6huUtauCQiHvm6XGeFndEwWNuwD4J1tzVM3UudmcJ6HtaTjFrcyTnLgEhxAnvytaTB7xK8ZA",
  "key24": "5RDVk3BmR3kDm83xpdnnF5jSBkRd5hhN5iCAgo2ZqeEvGZpfxaLv38a6UuA9Zh5QcwFVJHkajxADCNmZVGT2azoB",
  "key25": "4VKaFbzTuhTDHXhy27RM93DjqsZJPbsbyWskbDYowPfVFrfWDkzU5m6bfrnaFEKurGU3SFfjxcevJLfZxiERsMt7",
  "key26": "3TWLhEFfS7FYjf868RiAJciKf79YTNJf12vvcFskBR17zsped5e4UGdEiU2ARzjm7JhF1RXock3hkGDgxjJD2q95",
  "key27": "2h3LTKvikg4iuKHWrbo1jn9z5bprt8GEJ7qHrWorAESU162dBsiBkbaTysK1RexZiXrYjHk8SxsbTEfTPFUK8EpQ",
  "key28": "5QZm3NPQswFC8CnYmevWyQfUCP9sLox3hsvwVSXhKCDLa8pxbBoAD39QaoQRzLoopdy2aZDWGiptA4GQwKdRsCia",
  "key29": "62rpxei2tywBuVEon2WwWteMiRKTut53bExVbcKaa617hHLD1X2BDrvAJuFqr3hAdpSt3Qxpeg7W3m9SF6raNhZ",
  "key30": "51HuFtSMRL9cxGHvXFPawiHVqYDQSoQPgpJgiM8t61xvdqkHWynFxbQF5ZhDyEDWhZo7s7hviKgm85EAaervz4FZ",
  "key31": "2jG6w54zqBgPN9NP27i2TtYPixL5tNdNGA8Af9EFxzpCv2QgxxX82yBNbPRubRLjDxaysSaSK75J6MSKauiTVVHZ",
  "key32": "3yvMUYawVCR2XpUMWfuansdnx8BHzarSj2oFrR1LupgsJTLjyMmCR5Tjw4Su1whpk6ZL9XLv4VSqwA7uQXpFi5Fs",
  "key33": "345rg7d2LpxdjKfMS5CsuYYHaKgNmKsGHvTgthnSkF8p9BzvAUgKqRmxgRj2Gmz4caUrzo8FG23TZJigMPB69X3j",
  "key34": "5rXWZV9bjVcv1N8tNRf5RiZMt2jgXvJ9EYRKK83JQtkcpKFtMYBc8EVmQgwniz2SDibRV4g3x94DEdjM6WwgF3oE",
  "key35": "5Mx4XcCZS9oYMXLK2BTXo8jV1X6KBWQdcJNvFxgMh55eUNkDpDw9UmQ9Kw5jcHDQQ4EwHAXTkdVag7fCcGLc94SF",
  "key36": "4ikQ9YEKJHa8CgmgB7GpDd3gsK28hckU5L2Q945PFMHU9LhaMxN1Mg19BEG6Jk4ES7R4QmZ2PmXZ4Y3MTQm5vU9M"
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
