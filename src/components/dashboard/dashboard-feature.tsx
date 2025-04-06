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
    "4fbnXVqw2c7sCFLFesnomakhdPENQtV1Q4FVGKEiiMLC5vcmeny32ZdSipvRSgDnUU59VHrSvj9mSQyvAJaEZnax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDzm6JS3S6KzJBf7zEHHt86r2tuNTNYCaLBotpCQRYprrWBh1hrsKPg4fUsvKDBzy3ZobD7Kq3Sgn7MEqD7rg45",
  "key1": "4DGamc1acjurRkAeDScqPQ6ngNPSQNsGSfhPFFR3tbLSX3r8arGp7TYpKfNMrizG2HqDVZZshm4hEQXmxrxi4Lz2",
  "key2": "5R2BZJSwS7jGvMJfA4KzXUDirafcYhFaXsEa7giLC7GfRUyD2gPhN9qBUKksAgnBiM9PUJUJyh6zs9qxyiGbXrK6",
  "key3": "EHdExtToGQy5CHTYdxYmUdwKNEegT5vxGNEpYd5VM9ot6f3ZeTWcveyibC5xTyvq8v9hdqQ6eSpvWchzNyBnrnz",
  "key4": "52YPMy3wSpubZSpvxokvgGrKaxKSFExYr6AphfTf7JM83uCKuRyEZkWgVRgXR8MdPedMZoTe6oqtre1jQJakc7wb",
  "key5": "358QjjscW19kGd1QLGQuJomNvWDxroZx1reE6j1ikRueGnYMAjv2PRJGuS73sYT7p95Jdzi7s3mfcoxPqGyXLfWt",
  "key6": "5kAGTbLM2VXrxYbAuubLJdHSMgPUeyvtQKojEE7pVLXK9sAsbcnfUbbC4htkRyF1zkDuUxDi5r1bPSkxiaseAi5u",
  "key7": "5A7K4BDtXZovHUEBj983WssXVnyMhVWvnTpkZWZuG27o4XLGWUbgDivXQL2yDNwRemKXAxdn8PBFPyqPm2x4TBov",
  "key8": "bn6CYSAMVA8JN5Au7Yxzbz2LyNofrE1gds5RvfFoQA3EbPzzshrxRNmzsbQ1Je3WsXb48dKT3mJ7u5Wtd7jSyQT",
  "key9": "4hG5cPsYmig16a93KTtMAN1zomnafno6h8cnAFqyygzyL2sYuNYh4A6yzJWe8TzNZx4QiF8VZygWm6CvowYzfF7F",
  "key10": "2bVSFpfqwhfEWTM3p1DaWkrd9DxfqY2Bwc4UeB48q2KUxzMtRv45syP4yLgMPKnEE73uxKHJBC9vqoxK4GHp64cr",
  "key11": "61bGxayz3D64KFQthFTw34D9KmQpcz2PUchVozwKkSifZbwY1SErQbLkT41vDnF3AA1ZquEJpzQjvnABtwTHpQmU",
  "key12": "5rWsxZCc9VgEPRXDGobiZo3NpMe1NpPJwvhEBMoEq1QsscvkKTUQtJMLokkoYsyB4S4TYWBpz8vmQSz19KtsxgTX",
  "key13": "57gB8dmKJBoYD2g8o1VF1AixWUcwB3i13N1Wfj6e7sD3oRDCHKzqdvRnAVMR5bypLsU5gBn86vGHQE3deRw7xYQo",
  "key14": "61qX2aEcddzcMYkqCh6gxYcH7jxw9CjUvJpwwB3SK4bSyV2Xw4LGn9hpohSxbxbuZ5kZx8zBhr5re3bbY71DrUJS",
  "key15": "4QFNRMfQDKidXw4Sff5g6KXvXHgGdzo2Nyt11iHh7Jwm1qBjuDFucPZFXgeF4nDzcRXUCUKk5MTpYEdH164TK8Le",
  "key16": "5qXdMZ8BjjXNdWqJh2enTDfiSB8HeNLTcuu4s1Ux1uSPWwwDwXq9iJLCrhxsa3HLNjVHp2ZqsKjqyv7JdQXjYB8c",
  "key17": "59XGemTx5eamTq2ZSSvsxNUnEzAkSa1WtydW34M1Bthb5YwmpgdKiFcMmvKSvcw165KAPJfFtSeZeEbgMxMG8g9c",
  "key18": "2VigrUYXdFLz2YR6ycjUHQWo1s5ctwN3ZuDkanzs97dxRJrrGyKoY423JJtvfzFqk1BzvPQmSoaMpbgE7K1aVPUv",
  "key19": "umLmCj9MiarZSETEMteYYVUqisXMFH3Rx1mX5Zvxnq7Sz152BqxHHqL53qKyFM7fDjeQ554eg9dNmn1hckKjDmY",
  "key20": "38PMpRqf7eW2rMaG3WGAo8zruzpWJgiZSjSoYojodzEL8Uunf6kMQ1cHKeEKKZgN9WMhiuquAhLTpRgPgo3KNDWe",
  "key21": "2DJp7DoUgVMZGXQtW6Vfd96fh81Pp8shMqetXXhWmqCubuYMDi3PSyNoQqLzJ17YL2Rt6YL6xbniPfKpeqotR6ka",
  "key22": "22UYNrkue8ARE6gpZz6pq2XEYgEXSkYeYpNa6sFKkUFHVJiiFM1jDeqkjaoVDksRbxwHtzkRFCqEUMqQt5bkCkoZ",
  "key23": "XwjaDTvAQ4bMkmKx6scXnEwNawjJy4hJCmi75FqLARFamhnbnXKfDrKD5mc6fZgewBeWbb3GNaxqdufkxftzRe5",
  "key24": "5qDWZ6yXN88MgebphNotshwJf5fY6RXvfynBPdWKyQkQXQcJMvcJELLnEsMgFoHrCRGxn4tjnvi65bsqM2Vdoi1J",
  "key25": "2sozFQzJYAfreDXqrVrAuUtUfuDmQzStDzdTbYzNVAvmFwCpSnuXAU2ohTbpfxi8zesNn5aYtJEY24zsuYZxDbWm",
  "key26": "32hWNSkVhceKadxiVxfVLKwJreyRRR7y8Y6qge1LzetQQWe57FAD5V6P8A18kb936tzZJksvAdEerhcPt2xZyLP",
  "key27": "64To3omvRF2mnZ94YveKNwMcyXTUbaGabcgJkSao9yFURrng8KoMaDy14a2d1brQPGZCPDfc9aKFpKubPsrQCSZH",
  "key28": "45y5TpmXFT4UJSpkRabkbKLKTSkEah3cS8XA8tjuxY615rfTk13tGgG1CUAtMv4LCpx1jNDYrByCtFzgH3zAnju",
  "key29": "3yH3pAJAhrzvjY12gV3hUT2fGGCcncK6vxfmBMaBAW5ccWKpLnx7rPsoS37y2rDvzCkKfc7cCEhWZL75h6KSokp2",
  "key30": "4TwEUZeQUDdaKSSyqmDzTb2Y3RvFSB1GiknWxgn9UKkyKV3MGdkjG7LVNXnwuThjCkPUUBgN4qoGniCrhgF24s2q",
  "key31": "5WqMJ8mwPcQa4C4zJrExBEJHQRp3v9uQTQaLdjdSRDoWi77Ros8PC45xWphFxsTkhRyui4oSihRHH6CedMDyNeNa",
  "key32": "HajvMVMYngfSUS78KLfPndbbBpvGPLwwyeZSBWpuzGEAJiD8CstpBb6H2B9UeirXsGWZyUx41kqnhPuktbxdCYP",
  "key33": "4yARaqdWAXi19HZfrHddWrUQJr9ZQv1ygD9sykafdUphZwrG7Mi4DukkEwuTPXdiW734m3abKVFZLXSQGN8QGQY5",
  "key34": "4KuTQcYnUqHheVRaUAC7CmLbRsSNUdnKhkf1SUGkhBFK3GPQKBMga9nEG3qaV3eVVkfs4fhmiqfH8CETwkudzaj9"
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
