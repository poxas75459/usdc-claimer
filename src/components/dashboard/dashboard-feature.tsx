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
    "3acuUeLn7NQDjsk7KqyW63GbLcKevMn7sPzyJ2Hz7x88226dQ4cav1GJoi7zpeXcDziHaoLAJxf2Kk3hbz6GxTwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtzNRyoVYAhFtGsNQydoHnVwbvoQmX6ZdjUSrSyqTRQ3b4G7tq5c3kXHw8fgH5h5KUnHKiij1xzEWMQLA7XFWRb",
  "key1": "21jbHtdcfCg1aYEhFBGgkXkM4ADLfXPw1bgWeLWsHJhS4xcwgjan7JDXdyna6ekeeJUnt9YEcLwdNwe9bpHMMYQW",
  "key2": "4RiqPvZQSg8n7zNmqLACAjzsdcUrS9UvazqzgxjbVYJvC7T1vqSFS4pY2xWHEsEeJuqHU3ZRAxr3S5AAnrZX9zaa",
  "key3": "dWh6N1kA77RDr1UCSzgruJypzhVwpJQi7rfifmx9xs8S5AP2q4FL9SpaBbVeJRk74HRyWcddrp4t2kqsqvVt9e2",
  "key4": "oBkt4xE4pJZHQ2U2Ea2ho1c13uELYahFZCfwjxxSKm1WNdVPPMCtVfzQccjv6kchMM4K5mSD11MGzLpXxFLaGeG",
  "key5": "4wvTcL9SZTWSXFDB7ZtrY6nRGQEDg1yLAouEfj2bsfXCsyHCLa2KbeGJtAbBLUTv7FVFWk5U4jESJpwZfiuopxuL",
  "key6": "5uRPzxNvej1JUaztCSR3uKpeqtmx7QBeDJ9VmdweLz68cXB98CD2NdgpVDpppUwGdWZRWmYMtLerwLWuC1ikfkDs",
  "key7": "MpDvhY26R6dHu6MN56pMD7FsB83sZqAY1zJ6CB9RRsniSKCXADrgX8ECRDd2iEj2NMQ3sRdKR2wz4HgrxoUENm4",
  "key8": "pt6tZgdRyTLUAPTeyeZkbF7nPZfVyZqQto7NEboqMtjRMieTGLPPJq4ii8EGPQffsaifWXRjhAJgvJrF6teNDr2",
  "key9": "3ry9CS8854WskCn2SaqLzDdY3msJ7du84DgeYVGbNLNe73jyMsJRUwHSrU198Q2Ux9aqgC8WGmEYgo1878dKSBey",
  "key10": "5PUM6h4J6bEyENmNGtiWNzcqkT2HwPrJ3bRibScU651KNWT7FspWar4XkchRU4J1oUMV52wMExTmi3dBbheTt9Hy",
  "key11": "2yfmYq9vCkd2Ew56ejzRBTz2dxkpvoNXGKBBtigQU28UUm6K1vxtPNx7uRPJJh9MXM6MDRU39GLBe7mPt1kwvXZK",
  "key12": "3qtEYfoaVQ8KBX9jXGMo8L75zGqnnnPgaHph6hmf43AeQ5NySKwEv6gq8WcTt7VrEADEcGx4wSxgEtETs8cDiqMU",
  "key13": "57LGdNfzLCqYtbUQFV1HzPvfrx1fu3vAmKbNSVyoEP6XgYn8nhd65bhr2snxLiGgXoYaUi7Dqq82AMkrKsAS58Lx",
  "key14": "exS3G1Dr2ALc2rczHtxbd67wucofpqcVbqZT2EryB9X9Ybh6CFQtKGG6Pe1gxWqxFPbkZz2uxiVGuALQrD3jhGc",
  "key15": "48vQxQuVQbyX86pgpwy7SVJnm8xTJsDfgrWg31oHUvYhwWKjSywDQDXzYfZeBAJBBwQMSuQmznEmwowvsa5o76z8",
  "key16": "3vG1uxrWautAzUu5T2KsWVoFajg8eGEZoKGtrv6YqPNa7uoRtD3sM8RKcfuXjzq9GRVdXDKphhWKXGRyTqYYNz8E",
  "key17": "2MA1eFWrEqQW1ifEcGgQyLZ933ixh43HSH4kEV29ehhQ4GbuQ16VhWvmZsZtzCK4QxsRJGNtbzVbREtfmE5bHis",
  "key18": "rGMj78brUjUaMhz436j2t5bCYv3wSLvfkg7D9AaqQnW71rgz3HNbQJbpTdj1tD1kQ6RF1KLV4Ezf1ay1YSmQG7H",
  "key19": "49Sdyq8ixF8FBpEP6dusFPUK56TtCNhJGv8MatBBoXrCvzwQaJ1dPV6efGKt6pgRNmpnkqJG94bRdtqSihmY7tTG",
  "key20": "3VniC7XjbogwRkdhUxb5n2meiMsET2BqKKRv78UPyxvKcbY3Go7UEkhtL6KR2bqZtYUAvgLVQ8nCemfYhgfnDBiU",
  "key21": "213ELFnC8tL2FNzVHBH8cfv3uvEkQb8x7xrspGYaEPUsZBkTsthL91vKFSXyNDySXyKeMyLSzjw7KzzBzGE71yNP",
  "key22": "33wxviSruxTaCi9UseP8AWJceVKGdLBsQUAyRpqF3FAzshhWNSTXMPPsM2mpVDVgb35HrbJFbA9qXpCjR3BcTsaK",
  "key23": "4yPRPGvrTvbfgcZwkcmkhYMf5GGRjzBGBV4kyvDq3f7Kvt1vi5PFsYXE7NXyDBNW6EKkmNQQpzHTLB5AqT6Ybh6y",
  "key24": "56BGCP7RruXAU9CgULpjXm7SD4td4kJnGYpzwQavMy84EXdRPHCRSLWEwKzPQUUFT3J4CxVPhWxehXSB2dCt1ULS",
  "key25": "2TC4ELVvbEPJBaiVh9i35zb7LZdoHfDeCWCwi9oTMnPybWssUp8Zbv5yyGyXgWYUBq8Gs2ivtKrpNKqF5cbgpjxX",
  "key26": "3FNUScFVshLZFFGpxcXZxVqHcmNaUssQQ1UJ2muYZxDGS8gpUeT85xf2euatg7cZ2PAc88Ai3sctUMEmfJbagvuq",
  "key27": "3rk6Yq1PPh7b9UhW3NcuJX6S5SMB6Bwi6X3BmtqTUMH4D5nw6fWaokpyNMGFw7gboWZhPPDszM2z6Kf2tu7WLecV",
  "key28": "AJd9VXhcLzbacqXACTzpgEqpqYoFo4GGFUtCjwXtsceQ26NWGHLKbZARytiAxpjtr47rGHovVpzTLj6wgR1UASq",
  "key29": "3pFwBTvBeG1Q51vKfMLPcWMBKL5URonSqemrsz1YBZc6eHGb2sSYYHW2uj26HeCgzx7mqaV175pYxsaHUmHfGAMM",
  "key30": "4THawKsFcaNtqdQQekbtbkanD48VaVvbcShRTE7P9J4u3oR62ZjWC5bMhxUoMKudaX9PnCkA2EtAzexJE1hdJUza"
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
