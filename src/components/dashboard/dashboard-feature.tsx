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
    "DWtWRw9o8JyubAaYvpeHpu9KHLqZgRP7Q5EX1EtrSteVNYzJmumtaDURYChGkyrWXG8UzKttBXLaoAVDo2i9Mg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2jfY88HrAqppgwEg7PHhj2p4jgrpw8YHTvFYYJi4yqzDSfQYfniBa1pq2NQeiTA5rnj7xpDGtKZMUAAXdi7ERN",
  "key1": "5CGvWy3RPcJJ3S6uyT6knbexo5BWjzgQ9FkpJnndBKcYajheKP4tERvKe5tqEGqGpB2MdCTqsSaAxWrTzuQAuUyM",
  "key2": "4wD8YEfXM8HuHsEkTmHRC4LgZhYUXSmsFwfQjNU8v7DjekDXttDUihA5owK8d7qpexALWYTp2EBtrjuvwHZ55PhQ",
  "key3": "124qfdjmPv8jcW6iJuwnsfLk4Snek5pb1T4trj5LzyjEeVAPLAqgWPpSSAAsuZ8GKwifT9TivEBTRLbYcsok39Kx",
  "key4": "XXATwkB8p71SPUuFi4cR8zr8hNvxTtSst79GDPDhNswVZyYBhshHWphefRV7eqFSfzNsvYcXcLAuJqdkwgT3X2w",
  "key5": "4mTMnEvTYCozc8UxJ5p7uFUzEn6Dsg4Yy5v65d6FYCL1AsjcaLRdzZ6Gj9WQtmG95pj4MVHk8ySCf6BVG8SEFC44",
  "key6": "3g9MnLxiDmxGDunwr2xpvc8oSFavN6XWpL4FXBLCPGP7C7MMaJqvVBdd9jEPY2UzY7PiBi2hZgQhfoZozCJJSW12",
  "key7": "5TEDJTeMcXQiqkcXszw8m3BkCdJjFSWCvjkfFMgaYS6RBQfkGS1UT3t9Ww99EUQZcxUPKnspBZSJhxdsod1zqYLr",
  "key8": "25NeVUMMJL4FzvfXaoJRRcbLMVC6KsdquNuSUoZUpG4NAfN3qvr6ffwccw3QTt54z6wdWPTDa3dFE5MkoQQkaWiQ",
  "key9": "4nsbUtaUJEvknhsrhtmmEh4PZoUgBizkoPrEQNEdf4HchYeVsU439F4XUpfD7yngpynrhkcMkP3byJsNvitptaDL",
  "key10": "2cEqSCjDt2KeKa3x5XHzHq2rhq6HSfPK7sfracHGbru8ukmv5w6D3cxSZLTFfHuizFs4iAcMVSLwLrtVrd61e4YN",
  "key11": "w93bSXvsXBoBY8izqgvoRuSrjvFXX5LL5KS7wyTDCKXPLEZze1nH3E29duB97gp58mZjhGM9z35myYTdWQu25MA",
  "key12": "4xtcSf92E297AoyXLiQ8HyC5zdmoDwexh2WikUtWQxkq2tEVADrcyLcKfxZ58V9G5NU4RMYXjDKa1EvZy7m473Gv",
  "key13": "4jACptFttA77D6YmuAtk9fe1jTvhRVkgbCnwLS862MZ2Meo3pBT2ztqpiWCGvUtiqUimtPcdJig6NvUdMuWrMzyA",
  "key14": "5L1deZY17pYXsF5fHE9ixeCqtKrtzXRPoRwy8pn24rJE5uKk3ci7h19zkZLYWw6MCKX7x1hxoNeh473HLQRGpttu",
  "key15": "34JgSJLxjWCsgbDppuWzxWZcd3vJmD5LBh2U6ZtbYiYEGHb2jRMCUV6QkQFgAgBKuSS6uF56JiwcJYnRBDz2iaVh",
  "key16": "3agZDuYco5MPpf1DpggVBx7ZmQnnt5EW7EbssfCozJzDW9Aax1ft3XEx2wyfsMbvrwbYWjqdGy6cjFU5bsvETj1r",
  "key17": "3qHpNJx79968Svstm3ZADH4yzDB3Y4bEePxCLpG6gTCbdEZnqez7crX3Ky4jxrzXXVyji1AjdJfMWaLDk1xbG9wV",
  "key18": "5YGN2WZB6T74CscKEywMMogNWtWiESBNnU2pjMMrxnbDHebBc1wb5jiYwaCuHM455U4Likw7ydDYHhQMxfSVPeNx",
  "key19": "5F6Md93ZyucJYmjuWNZMksuoZPFaLDD6V3RH4DqHvZ2AqG6EeZanJuFjuTtkF4F53SCg73v9PjXMgErDWzSFJgrA",
  "key20": "3kzEgrrGYR6885gM7DSNgb88vsrjunbXWDBbbaKfYdxT68wNAnES2Af4SHkHN1Z4M5KENJXAGmG5mL63xmKGnNtW",
  "key21": "AdMEwQgc5qo7hbyb3v66xJrSpCm6wD9JiD5rp36kL93nU5asv5CSrHqq97ewaTZfB9ywQTFRq44pwMtMX87hjLQ",
  "key22": "4Sa9PJrAGk1RvgqoHGeZm6jWAXPRXCTZXtKk7ZQrLPfZMGn9W68Zq7S3y6sQBNUt9EBcXoHTRXRzJxPSdeiqBBoY",
  "key23": "295jGAsMTNY2yxADFzwfdopfgiViaDw5TLSaR6mqoUitqFC2p1qeq9mmwrAoe65mBqrVrXrWZTvtAHtatuB4rSHx",
  "key24": "tS2g6UctVJYkv7c1qcbEGpE6RFtaM5esrPQ9vdWb1AGk6cz439qBfLaZpuprw55Yf7AXv9ZwFdhFAhrzbk5eBEV",
  "key25": "2YcvH2dDDJoVGxEX9F3CPd4A1NzigwfnMzjQ72t8HDVPERS2yxLyG63HJmCwmkJ8AtwfPZL3dagKUuJJj4DZoRrx",
  "key26": "3nVtEnkYDuAiMM3w8fTggZ7P81NRuTUxS5bVKD7vkHeC3RAd5ajkCcaEFkcF5eXFDVaffBFo7aLuJR1pfNus2ivP",
  "key27": "NP9zhuqmaGQZWHoTShz7jeV8ixVukWsjrz8cVDXqFMJSH3p2oAMsdVcZjmD1cX9tYcX988KSmJqPGqxUafwv845",
  "key28": "36Qi9CkUNGBxU8Qc3H5cHWv9APQh5nE12W8Vg2qxXwuacsCQb3zEb6kfYbwHkciWN27NsbzoUXNMiBehAs3whqYx",
  "key29": "33Uq2fov4usumCvw7MgfvPeDyNWVx6F3JXxCnGGwzPQvsztavefmjgQRkS8D3dkmS26g8WC8ANHQh4HiXYqW3bqM",
  "key30": "5ajo4oRPWEK4KgkqjRtUZDiHMjsA5EPpzKTZZPKa9zdXL7cxKWGCJiyiXsh3d7JAutTeS2prvinosZDeFh84FtTh",
  "key31": "22wMCqjuBQdfTXTgy3517egJxVsRWJF4VJGyk8bXxVXfk4MnbLeuhuWmA5YWFqYRUV78zehm6TgWC5f5GcpKPLxv",
  "key32": "4XrNCeUk3bQCuvsx2oke5kLkXaW1vryJTJqyiSKxtFhDfhXbAUPeZ17j4zeprkh6z1vuihzSE98bok3u1eKnqNgp"
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
