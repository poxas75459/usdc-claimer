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
    "24yZ6cnWzPem1aJUmSsjBtmaTUHGYaRhFukw6fQArXKumzHJ8Xfcfj94YGuk66vQtSas8WUbKRs3Gv4rR4Zh3XT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZNGvTCVFK5jnAJntoJW2hMjRCQNgnhQED14io2dSn4y6zULRnu1zEw8AyWkjdJr8pdbyNH4os8EFAVcv85Nw3j",
  "key1": "38zTXzK93QoascKAq7Q3f1Ju26htLd1cLvaWxauhpXq914DT92tZiKbQZr2RWbSyoAzTBdWwX1SJxC2idzrTiFH6",
  "key2": "28mjkRHfoCLVG9Z82YQK8FEgz7P7dCQebbKhpt3yxHE8CKu9bG5T4u2JJ4wJMq7QFk7my1S9JWgxp8YRXUEKT4Zv",
  "key3": "4tqLhd5CWCZH5Xi2FFwebjzBAmc9YQy6Dd6NfUJL54ZuvrTwvjUu2s7WhCrbbbmpiVXGHQkzHW4ndAfrY8rpU4ii",
  "key4": "w6gyozg5QnKRsYFKHHFgR2EiCN2fB58ZrpVh5cc2728Qr1EEtdyMqvjH1r51V9syVAYnsWx9xn5ZnQDi5hK9rxH",
  "key5": "4DPwaJnRhXYJ5c9EGeLdUPdfNJBuxqBFzcVmFwvKnSu3rwSLsCxpM3Xu8VBEqoBbGdx4RX85f6saLtVaPsbpuXPc",
  "key6": "zRMWYdj9JPDwwE55CUTu4M5AsuxKdfwbCZHNbsDb4bqdASywmajZMtXxzZVBHt7811q7yYNLL1xNx7sjxa9GByA",
  "key7": "2oDEvLGLithK7E42ysYqb6jLxabgZ7DBQ8yHeQJi9spo5npHEVStGX9jPTEFavY78djyGDH6uAQoFeNm3Uj48eZc",
  "key8": "5yzEFnreKfYQRS3gVi514V9h23DwtKSyQGapuybxKQwRsJCRcfVStmXKe1QgqfF15WSXT1aQFaHJgeno2HMobYNo",
  "key9": "4eHVfNEGztXvdqRN4RBgbck5oEB81FyEdERrdfSzrSK3C9NHLo91s8oNw9Z6jwRHBsxw1hceNV8ynjbc9wDTK7FP",
  "key10": "2RKtkrjTCyFHieTRoTcGmKhZTQ4CohU6iPwNZLysowfyCztDSzqZ1QJ2e8CtV7vVHhtxH5gjR1wh3pTupQkyadFM",
  "key11": "2sXN7uNciBv3CVrBAbmFuw74CASNaVGU2jpfVeVeKKTUnTa7g5oLmqe47nNG323AeJU6VKcSiBfpQRC55dRW6RYW",
  "key12": "22qnVtTW4gmBhXuPSYV8M38UpmrnTtKDSkF128iGLcPgZJDMdpsUFnwzms2HAgwLfFXzgrta8XqNPPQGS5q5CGwf",
  "key13": "X3jQsfZngod6MAJZ68jPyL5ZDikQdspTtGGgz9csQagRvyJwmEGmvcpoL27CkeVtdSqkoZLWQxqff8iyv6E33qP",
  "key14": "3wcBwJsyTH5teKbtUG3i2GZRQw9RLhWB9nbHLzu2ALuAEUPxvQctcZfZS6DkGPhTcKaut9NPxfZpxVXMLkk5bCjM",
  "key15": "21FzwjmtA3gGbUiUBwngZszwwnGzr54boH8SRkx6rT87gBu3fAmDvXHqCrxnYML2k8B8sTqLBnKnXqr4tRp76UpL",
  "key16": "ovb89fKye2VPuefVZoPaHkGY3rBwTbik5efCCJsqKz9ciTHgCU5usk9aGy244W8Q3aGygNQxfWaxkBiKyXiafa6",
  "key17": "b4KFBUa1cjuYhjkizyWkM5muaKLseGcr2DShW9BUsnSg5w1ThAeFgNZWrnrSgdQ71uitgiW7zwfqaTmzmag2mF3",
  "key18": "3x2HZJCbtzSCXaUCjWmQx8RJ544oBVyifTbFHGZ8m6YZJfHVXQ8bFmMePr8uJbCmmyNWRF5Bq8FdZwFhXHU5Kx48",
  "key19": "yymMVobWjHAJoy7VrPMSe11nZagnnjNG8ZEwt79EkLKKtGA2tZNRaSRf3Xy1XLeZHBxa6GACeRS54jMTmm5VjaH",
  "key20": "2iqTdCDgeackj8fugCMneZVLcUSbPdYvJzypU46gqFfhFjk8GTP1kRtKBHTEcCzY2aVpXTVwPuCAac5tSsftdUTq",
  "key21": "eXZiZLyUFspHeHWSvTi5Pkyd8DvQnz8eidu5rRSU2mUSCNoqVKskLtXTREboB4Abr2YaWZAZT6AKReCGNryJpG3",
  "key22": "8cEvqBfuxZsSconwE2NPKAQtfD4vx2YUegqjMeHYpTxh9yP2mW59tMrkQfiarf9MTaYqzwTGCL2H69cuzNTWuoJ",
  "key23": "4MrE5B8YXBFyBTsfP21SVejTKhp5kFMPb8CzRuMat9VXZyW5Bzb1KD58QyKByWeABfXnzg7c86vLc7AEbjtFf2Rt",
  "key24": "tznCuhPUrxBYpxr5FjCiQbvMSVhCybP8soxwwQcnr4JhzsbQenohVX8s4FMVQ3BkbzVrhULQPGpXzKAKEkPak7d",
  "key25": "2utvPxwSD66WMYR8VMYWuyk5wV7SmaNQWD9kbKqnhk5MiwmTzf9KNsdViiZAhRvLbaUF1fsRpf1U23hDfYXET92G",
  "key26": "2KyHRr2ruC5ABuB67j5mM3dEwTvxdRgaKpAgiaRVdZhoBoXoNY5B2AbfXBAmfw5EcuX4n9ET2492hZ8LxYvNXqEZ",
  "key27": "2bLrrUS6Hfk3Nk6zo4qNQTbs4RWdXQtFxJzGdW5bfkdR7DudifKDWzYcnbmd4bRUNnZutD6Brk9j1S32YVLasYYs",
  "key28": "5M9QGt1657daJmxuqVtXRyNE8MXyDj1cUPgFDTZ1wEBjpYBDHo9y1pNM3y9Fy5YJzeoEkUFArbUQTGJXnHK3rZJG",
  "key29": "2a2kv6NhB7HDYP7gNSPfNE5NnEmRYhY3Q7VNFfH8esX3puKErwtkCWHSZy2C99tksLEyXL2tENgbtEdaskJyhvN",
  "key30": "4yWPimriMmgbeTKutxYrqrinVF8uj7Lqsrqz9hC7ALycPHNxeqDuodF2jH6xUPGyCMBRjCkFaCocBBVrHhEzhoHh",
  "key31": "5LX2Jh966JZktyEYeLcwQFUsDSgkbqXSx7XTbnnviVb7hLn36EA5XJg9ATrx6JGnMsscifrs3vLkB7UdP1bTCif1",
  "key32": "35s7fz71U6uH39aqQVdxvANe5SjWKpsqoa4Gmm9MB5AaGzBxArkB7C52WnyVrxz2TBkSH6JkVrbarpqEDybEAgWX",
  "key33": "3w1ZNG7hnyHGMfif1ksR2RWRSfV1p8zzs9zNNkcYVJBZeD6s8zuzaSKXbYSR9LRAoQyviyjfxsxbJCWB4dqt1oNX",
  "key34": "4UszsZEJxhMRJ7TzSpmpyHZWj5WWatgrYzrhKndHJffuEVnKqgj3K5abQQdXZafkdx3MWCd2EgGoJtXi41TysjqD",
  "key35": "26EQW4EFfneriHKTWUq5HbF2wAUwMXynNmTyF1FP1iKF7XJC4Akq8QzRCdAcy71RFKX5ZcPk9xbAEhZFjBtbenW6",
  "key36": "bgT9wkVg168WgQTDduZHUgh1zjFtkVTLLiGVDteFAMRuh2aW5pjFGBWRnCFXXSAB8fsTm7XxAFS3HTfSHLK47QL",
  "key37": "44r69R3QHwTTXeQhpGNodY16wTcMn1QP9tC2836Q7tXF4Mws33JRBMcwhMpMago68bko4HSDfG5UVJGkf44rqdsP",
  "key38": "2hjAce1k8hLhzjXeaofT2kCYw3cvsduhRDCxmiEtJoVtDjJtSnAtANrVYhVvXhWouGrfbgedxpQFGQaWwxU9Lxt6",
  "key39": "JNcNzRyGvvpJ8sZGTYjrRn2CkmQ2NQt7ZgjUsCqcrFdK3TnckEJpakaPSWukYWnyJTSJkcooEkK1CKucpYWREDY",
  "key40": "4qFYy3xqTpHY4g6yUvqEFWZx4Jbd4BPoQBB7ZjfJCbKaijy8im86SW6T17fzTaDpWgCzgikKUXowcBM2jDnVTW7h"
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
