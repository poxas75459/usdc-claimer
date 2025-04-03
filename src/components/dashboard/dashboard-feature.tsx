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
    "388YEaNd9Hf6kAbKQgKuvVs7qjsiFgxxwpcwur2zNACphK3iCF8PvaCqZYUFFJ9tP5eNaKfhuHAZNVCYPBF7cmD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pJbifvRhbuTtM8jQHqZhHP19tSY9nyfDesSMw3gCf25eQNDzuynT1wNPNzZwiDGnVEFc6tyRpNJBnGKcDoLubZv",
  "key1": "5Tddo5odBGBe86Dk8rYZbLt3cTnYGADLru52bjVjFpDUaicZ13LThNAprwSnkRtDXNDF8ptgemCbXatHJHAmky1b",
  "key2": "4WjKtkimD6b7gAicqUpQ4uW8AS547Ye1mSqnp2dovPgWytngmBhQE9hTpk1NnbtqycozXUXKv44KpFz2KuAf9uag",
  "key3": "46inPKzmFE5tRtxtM2YKqD5o6RTkxCWGbm3sDegPTRvjEw6ruLSyKbGmyr4svFabrxFKjMANgRXZGnDT33Wz6K4E",
  "key4": "5U2aLFU6ox9yiem7wuH4t8JrTc6dsNUNBdRtFAwGDDo1N11PNzXoHPyKAqQd8rnh6LKh4QUTijjyMNip7q6ExF7J",
  "key5": "UiR4aEFnyJvxV5QPiYvY5Zax2ZMNxt2wqY51SWtgmHxSYtHKnjzusKLxQ2uigLQYLw7x5nYxJQ5teYxpbLDsjoj",
  "key6": "554PvRymA6Hn5yAZH6oEpzmoKzAEfeX3NtTHYCK2g15H2noaTuZqQYPUCZ2nC6Rr7tuhGBUSU7XFwCmCERaPkwmN",
  "key7": "3ztWSbfhxdaGr3p4LTPDmarUKiuYmVVNet35gQvdbs4RA5A1v7sfCaZpfbssCUmKrXhUF57AvDxhJ9Tg5YeGe8no",
  "key8": "2w8vski5CgvZS1apHh2XDw7kELp23UgxyTAXrkxHvN27ZuNKztdorewK9jjv87g8L2GDbomkZMJQ3aAYy1Fg9yNv",
  "key9": "XN5fu4i2txbG4GHVdGkU5sgZRUmC4qSQKzRpEbhZ3BtyuNG6sFRcz64fYKmmCYZqD9oLNYeHTe8EuGJCWeAtsDD",
  "key10": "4jnJPfnYpZsAr7sXoQGH5o2YWgkCpB3xKhzkNA6t4SA2c9JNoutowNADcYRpjWYMR4qNKdNcjq7QVFW1ab87WU2B",
  "key11": "5n5t1tEXazQ5P9BaCB7hNRKiRqmC3C9dtMkxmMm4wEWZQ8FyuaKGkLrwXpmVHzk5H9Hgf7KPQsjECBGBawEUnNcg",
  "key12": "5a182fN94ykeFnXshYpDgRfP4BdNV7QjLV9o8UL6aCyp4C1diy5msDGGExdkLaRWxyGCtK326n8oFe8WBCJPxMwp",
  "key13": "5PmNF1hjrNMBZ92g767rcQupQ9MFAwtHxz49BAi75o3ojGrLDxf6BtxtRncPiXvTQPDtroU14sfFEXujd7Lydfgk",
  "key14": "2cWiYXddVTZ39Ap2TKGSDBHqjiE5xnegAveB1Ja7LXTxc8MyYsw9ufUyU1bwRiByQxT9Ew9EDMEwXhdM4GqECJFi",
  "key15": "4hGHbg5uTLzrh4M2jxcLhemkpMs9sKrWoPCDmjbjHR5cVs4dokFHxnRvTSGNumdrHcijyFWph27zSMk5U7N7TREx",
  "key16": "5Uu789YGMm87Hondtg8BLbNw35zRCxVurZK49F5XuKNN1QWmC9YP6PNqUWvhe4BpW3TeMPGpbLhzFEKa7c3LxinB",
  "key17": "3ZmJt4E9ngbD9MmNTUMwJsNj29RD5vUiJdeck3CZuyUceMAvLh9x2JYPdg8psbdqYdRMXXjUfZk7qwkFa7sNxPiR",
  "key18": "NGb6WRa7QKKny1bvxEv4hX1eyYFMfa6rnzbv3zNiuutZifn8Wn8NvQxo8yVd73AB489xaSZBft5755ZnPEZ6QFU",
  "key19": "5Lsha42ZhDU4kmfbUP2b3Wx9zqcKH26gv91oXB2Ym8d2QWjJzkpMCQTm7v7Yw7Jz4ZPZWDvEjBtnAjXKFsXCGbBa",
  "key20": "cgEbafKRn9TzTyAE4ZiLt9idprUdaVyzRNRnT29zkcGa4XKsvqKXPssftPDXmwvcAMMDHXJXX3tjhCVw86RWtqt",
  "key21": "2gmaNhaqdbXPdsvSr71gkPsin6heHkppMasRXFWwecYrRd7uQRX36B8n7ZEyK3gkfRQ8W8t6vwhxrGxRGoSdLYu",
  "key22": "3PzJPrkayfu6H5CUdoLoAgEXEfpxgy4e7eNVu3cPVYxhmmoLr7RJFo9eHybZh7yspJ9ss1LVDj1dHT6MkKvWdCq6",
  "key23": "3itUYAkaEBMfC2XuW7gT6nsYa2Eh3iVBuDR2PRAfnb18if2jgsDmsJaYoHuHZLSdQqP9Kdpif875RqajNPWURe1z",
  "key24": "61D8q8oFb7LuBn6X8oUYtu4R5thcXHmw8eopViUhGGe1mq3wwMR8mZytRwKshujGjfXXLP3dKmDNtu1dCxk3bpoo",
  "key25": "57jphe8MG1ZQnuQfRd9gP9XjFZ7WtYLUUj5hPKkdbCUY8hBEyXUkCB7rG8A5EkcPC65HZJHvcxovMzFzrCfWXNqD",
  "key26": "335N2wqT66umEbHjLCzxUyGUgsmvHvcWYn15kAYko9s6mBtopkN1KennaoTRhKDHjVe343msZ6rFGGK7ALUGzqhw",
  "key27": "3Pet7txuNT7QGw2WXJ24efqBBABYLExXEeZxfNnikbvLihvffJnKQLyaJs7YX1nd5Xi7n61ipYheYUwmC9Br9eK5",
  "key28": "wi2YSgetmHHBXdpeyrXgLW12wKL8b7qEnRKojT3YjZUE2rT98DT9nyJUwqFzrYzmBFq2swXht835PKtfZe39wze",
  "key29": "3ry2rrggai7cjNXb6M7AFSSM24Xgk3bPMNBM42YonhPC7uSaeexCvc57kKKwnoogA9gDWCZk6mksor9gFjpr63S4",
  "key30": "C65dUh1pfc2QL2CJjyVn9oVNpRPXDTFbQxXfePNy6UxhLw6HP8f2Q7yGmW91PrkQJvB9pCPW6BcWbQmoaPjzMtJ",
  "key31": "3EqRpmptWSygYjAdgH1gfcjscq4JfDir8RiZxYLaE1YRfRNug8mwco7eganQAyRMQu9F4nuSGvpBWAUcsibwYjJh",
  "key32": "3WJUNE9ViNxNv3Rs2TJAcLPwL6FTBTD3PA2VWRntYPm4eSPq9xrWrS9WxD6179BhwdHtRJ3iz6ky31Wi1RMzwCiL",
  "key33": "5nXjaUfLDKFGbhnx8xKzZK737Ju77D1UmnsvgaywdLAUuFGezACqPMMN5zP2t7Tdr98RLo4reFY6eNebzxLKBC6K",
  "key34": "sPSJX9hLLKc5TJhvdGjhFeGhLz1hH7EuXY1DEvzcd9sf4v9152USMt2bduG7aZe3ibjb98nEP9XUYvrwcTjM1wv",
  "key35": "39KHTKK1x6gEm3W6CBXQCDS15BPahRc4qFS8WGSTN4A577hPiB5AuhKRE5sVXbQd5GLhgTK9UT8cy2KZYDHgRjAW"
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
