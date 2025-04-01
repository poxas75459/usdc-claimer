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
    "4dQt9RUU4pbdNWFUT2vQE7gea9mTugdMHyY7LQxEaRQVLVcmboq5Xxxye279pTzVDUAc5tjMConLxVv5cy833y26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RgrEqKi9Sgj4eM2KYLESshQRkCQuXcLBqjUm4AAc6zEBywZp7km3FAJdU5DotirDGFh96UVGzYe1rxv1zQsYJCF",
  "key1": "55qYrwTTeviSLbsNTjuADi1hD5rRsF1kmtnUt1bjt5nQDHw4toJsC8Uif2NUR7fjXYb27FJbbkcGNGto8bVku37C",
  "key2": "4z7c9dTaS6qa9PnCA4RxTTLZXC86dum1ZTFazFuXomKHj64BwSEtRbFXpcsyPbKu1yB8W6ukTyRTiJxP5CBiuCj9",
  "key3": "5eU4dJvucbeuPR54wRb3VmPSKwFDpvr7CEsTJHVsrL8ZxvhaWhwuEgEAxgN38F3DozXtEHu6PcuRL52DAC5NaejY",
  "key4": "vML6mmE41fTih3ep4wCBC9QcRSexeXHDPtho4vco9AAevwHphE3UNjXXmtxMqoThLsfkP7LYAiNyBdZ7XxXAt6M",
  "key5": "2Yc1rjbq5NrRUALipkWjJNGS1B5BF8PdEfsrNR6hQZtkTnyMgM333YZKTCV7DZjKUq17hYamHbKSq6yNmXTeJRKq",
  "key6": "9ZfWCY7Xv6oRZMATqwi3mm4Ra9myfiqZ5XCu5sF8HJioueB1D8jJbTdmcVtKofQfLeyCF7Sw2KWGf8vhDjM7vCF",
  "key7": "zHFDyEqMsNTq1JxNfTYyEQQGTuJTLtEuuebo9KVEizwZES8fumgfvog4waYTGWGyRHye9psYS6KmBvrXmsuf8zd",
  "key8": "3VYQLJeBUqcpa8tSyntmeqegJkiLgSzebqerrqHuQSf9VH8R6V5DDDBVGucocfw5W4Yx6ekKs6ESPRhn6RMbyt1W",
  "key9": "3ZCAcdYAkZTtv4TwGgZBegA5oRu4amSfrrowhCbxwxdvfWGHM6yUvecEcBrMRDxoiH1MN5XYb7Ze9ez7u87qSmM8",
  "key10": "36rkUgGK7YKpNAZbmHukqhAmPejFzPnwFKDYGeygDRF4fsqRwHZdo4hVJdnoxQqe43K2atkBGp6x6uk58z3LoKpP",
  "key11": "5jjd3cB3d3wf4yhX7JB6aYEHx8AfLCpS1c42548GXKndYWzNXpromurdmuNNrqQboBGaHvA7yWPMNbXV8QinFueX",
  "key12": "3WzpotpzQEuAkjaXW9BSQZ6iJBhcMn7XqVpZPdQXqHd7wy2yPuFE2YBat6JrGpGfiDcehigqurpGJBPF5qS5nunS",
  "key13": "3Y1Gn2ysCiugJmLQBVNJVG6bECx1YMHZGosQnk2fsBP8xPFcSLShamH8JCLfu7EJzQwmDucn3g5yXWATeYQzZZUS",
  "key14": "5k9ztThv96gSXbmxTZwmEx5Lj8juHGpaxYCbsc5pYiUvWVBRd7cfe4mEx2tK5odVaQob3WfdHM3asT9jHuWTr8CV",
  "key15": "4QbHrc7tQYSMDoyuLdZV2Az9QmKCVtzrGEtwZbtUhF5yDGfGtpdJMESFv9iV2yfpFgD3Fc9hak5iYoVUnLPUnsLi",
  "key16": "4xYyvuby4RonmXwp9ZuQzvCpU8kqtWohVSqDfArcWb8qPRcgEYQv2bNsx7BdVS5g2tD1YeP7DWgxEGLUu81Fbc6W",
  "key17": "5fbVnaU4JbakxoN9M52xYgmnTRGnf7f8f7AVuEzc2xcsrZFziPbEStXkvEhqGyYYoSKVKc8xf9QyEvB7J8Yyui4E",
  "key18": "3c4ZMdBvVjchymqMMVLBi5i6LCMXpwq7rU9hys7ANqwDdPrCJJupkJN9KzyFPJvdqdQy2T5ZyqQYZnqGJoRY1jog",
  "key19": "3Hif6aewhrbQCWC4M4nkXfh7MGx3AFJvNMZRDrEEgi3ncFRv2ov7XQD2pjRzDAnLDVNhj1vytdPnGNkNWPqZRh7i",
  "key20": "5GrvHG3dwt9b6Wznsxu4jRjEZJygzcsn6u9YqbYXgarWAY5VonkaupGb4PcbxSdV9RPeRKteAN9Bi79Ghz4wnyqe",
  "key21": "42JcbrQXjzGJDtXAPAkjoUfKFBPRwiWh1Pp7VwGFs3nQqV6jVen6kirnMKyiH6L3F11Y4AykJcvHtws475Xz3QoK",
  "key22": "2BzuaccRLXaBAKn4jgutaBPZiN7UmUBY4FD8RwAivm4LzWffJypWyrLCqVci6bthiivPAmiAJKJ6mDDUoErhdkPL",
  "key23": "5B8oiLaEjsExbAUvRm3Voj31HCAzasc25Rvz6b77rZSvS1TqfVTawEqCjQgJq6vMQB9TcvVPQ2pjpHN9hzHoLbNq",
  "key24": "35yyJCQpQUYxBb3XxLh3BNewcX3XqA4GV4hwSFDhqp7uWhDEo84mnPKdLxHi1X3VAkdSAeT6mTsrPcy4eBzzD8RF",
  "key25": "48xZGGAdkqrBRm5ZKno3QR8DZsXFoS4W9tC2LQXLqXUeB1At6kF3K3qQ5VsuBrgZJq8ta1uSGKVqJALj3Xqt5gkD",
  "key26": "2bJeoM5jUkUkRMB5BUafmU36jyo7js8c8j9x4VtcGFiS7rWtLBTViHfgQ7ZcbHZ5cpYi1EJuPqqgnfE3oWgDeHnS",
  "key27": "4ZJy65ZVtBnktxBna2NEJaEf5ZMA8CJf3xm9dKH7RtNiXrSHsk6ZQHoVgvbimLGJ4gULb3vfmSPvreZdGq11EP6j",
  "key28": "2YUHki6MqXXMg2dE5hxnGYDMZVigyzVKuny4Dysr5iqiDm1Yy4b997Jz8nfbZGVgmoSSs8assC6UGcahJramtGJi",
  "key29": "PaYcSGV3zqyCFaMXRij53ngGhiUR6cRUVTEriitZy7UC78kPdRpgeUp3v3HFKTWtpt8U9Gz5TiGyXvUhgvRgCg3",
  "key30": "2pSnw2EUUv5gECn5SyNiAcH8gACo4s85NifxLR3GqMVUFmCY7RMigFwL4cPjmYxty3JYGF2HkHor3X5isTgDV61f",
  "key31": "2ZXSUQLxH7xcsjz9XCwZsYKGw7ZxtWX13BcpjmqVyUfZHBB2yMwa5949XMiTX5BqLEwYAKEQHvtZgeaQPxxQpSvF",
  "key32": "2D7MU9EjGSNxM5PCNxHdC2WUwpu4hRk59EpdcwWDRpAsSqr3Q8iZdKHE51JDdq3sG9JbVHKbnM964XbMmVEzctF8",
  "key33": "4buideoBzChBGoWryyQurGRGNnoMjqeS46cpwnXFwuxBedr5jYNNfURabc7AxsZb1dTW2weCcYT7zzzxUEb8nWhp",
  "key34": "3cKKQme9Lam95sMF5TMiJmuXZSMcDDUxFbpgyyJaVeRYEjQt47ojkaTK9FW9vgG5vZUkr59NUzHHfCsKH4muigKP",
  "key35": "5xLWmQKgCrXRgEYVLpa7fdbhkLcwvPrsU6htPGSmnQY8kiYoBEwspds4fgJqVHS6cyVr5GDbn2BwcKtmross97Wk"
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
