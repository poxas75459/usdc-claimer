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
    "5yBcb3yzF5tEgPowYuVv1HeyKCpDdEjdnLH5Q4cqFBNsL3bnjrETKXLfqvpzjUzF6BWe5GUYgMm7QfoKMGxsBVxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QpJNhgauipxHMpZBLzeg7udXKLuM4rwYVWjVN5jUfFbXigoayTTgcegLSKzMj1U1Rp3RPM6e3gQyRCRVtcoR2ca",
  "key1": "4p6noLJLncGKc3SycMckHiaeMK8sh29rEdRrviTwRaiwH7NRpqJYGrmHDHTJBAgeRyEGyhhr8nhhDciSkBYMEwxf",
  "key2": "JJH3M6inGnVQNjcyGjHiY3ZQanDwTNJtYCLmSjdbUQgreWscJvUWyDLGXWZfXRUZJngtVS6HtJMRkpQEJcjy1xY",
  "key3": "2MU68dmiGLohSTsZ1TqMvtHgjxFctvjaZTEUFT9n5cDrdNxrFTjoHYgTQPU12EDgaF6h9r99JqcpseQUAUBJbs7E",
  "key4": "3ERPD8rn8B5E25Mw6vsDCTifm9GNADiNN4G4SDrSrToYVuqD34cHCHeCHt95JMfNg7ETzG2LdCps1TYgQ6Z4XzaG",
  "key5": "yCmouJ6BG8MZjRVUhKZBYk4ALU1wUf5WrDSS94wnEwfQmSmHqVZcA8huXrNarM7h1C326eycA1DxYnJdw5GUtt1",
  "key6": "eFL9piWaHKSzum6rthW9hwuSkcs9JkBWJCd23bKqhei4ZexZbfJ3vzVrn3UwswKADhiPaEQXCXHG8qoPx8jb9oh",
  "key7": "64mMEu5qy1V1CxSC8GWWpw2TuYYg54NgW8hm76i4rVs7nV8nfJsnGAnmbWrSWaeJpDCQHe9kY4QBZv5JRLDJnXMC",
  "key8": "5SurYXJ3M7khhHN7QC7474dAiyxa4GGAnx9Hu6oHgFr4cpULUoJ7YZeijGh9M62PNv6YVkLkmNHbC3PKTvWHViUJ",
  "key9": "4iUnLNjsv8oPbepBpyWFV98wsyPAaAoyeWFXzewQbdxiMa7aXxZZafKQ3HMX3sqHKZYKRrJzZC77NQvmot2FxQWK",
  "key10": "4Y923JUjknZdPvkgSiaSmqsbQSkD7rZzL2E4nFsMzTu9B2ifVhSqDfgcuTXtdBTsnF6Vn8QfLp1upBGesqx7ucGe",
  "key11": "3EuEhvPCoJQDPy3Phd3MJwzvtGXyGC6bZWZqu4ZiQSDFXT41pSEGpu7WEtQJMjnEHVgJu7H56GvbKfrE1GVWards",
  "key12": "2fkGhqdWAxFKWi5Lc42byBoJU5jH2yY1p8PxDcpoAbk7GT73dMK1pDGYT1sATQwkc8XBVJAwuftqRnwQeUFdDrEF",
  "key13": "5KAH9ttafpqkrkPWoPhNJaF7Z4J6vPehDzrVJYRCL2Qd6ZqbpD8wm4yv735Z1Y3rgcCHoQKQrJu8gdnxrf6ePzoG",
  "key14": "5odGhmyyCRsF2ctfkbVKa4w25Me8exW1RnUN6ZsQAsZ2VCoVEBFP2rC6rUcrGFkV7Ytx8VX55ftbg3WSzFsF3hi9",
  "key15": "4zy589fUJ1dkuzWERvnG7yrM8YQtfV8sSLkCqUcGdFBYFK97nCLG2degN4k91AY4jm88umCi3CyybKP2A9XSv7E1",
  "key16": "34KSWrKhknNu4zoECfwAAJSXAJHpVycr9E1qvbRF1kt5C3HNzHmr9Yo35HL1kAvdrmDkSijnMkuPmRcZaLAJ8jX",
  "key17": "4a8vqNb3rWYWfZWaFbbTUwHPtijdxFkcJhhpBSwKrSVnMshcP1WMvAd5iu9Ky8h94LtA4oUynJEcwu55RuHKSBpV",
  "key18": "kszKzSDKWCWgpbMkVDo49G7JS4LbQ5tB47ASxccSBbmnPqGn6apDVPpnLjKnQC2HhUBpdKawSNLvHPFRb5R7EDF",
  "key19": "489eAYqguUNYdLDEuATUwQUk6TzJHukM2z1ntEXfcWZZgiqVot7WEA1KDqAp6QN5fdBzf726PBBN3ihH7dzjxBrd",
  "key20": "5B5MYZ2x51p8A72SNUabBE7bqmNFv5NGkZ3rWm4actUrjMXcB8ecgUZm8sPtpRNCXxU5pVoU18BhwxUmazx7gA9u",
  "key21": "3z6PProUfzNYXKTYiWj33W6nJ6R66W4Vu7cnkoLZjifSZ4KxnkDTAPykKYURxbjFZ7EKUcbYB9Jg1iDtQPbYEw5t",
  "key22": "4hHDHrWA1YxmuURi6Gu5vc6iRDEdkdWAGj9uDYSkGfTbbk9oaGY8LfjENb7GfqybXdV7TqiM1UvkDjDMgNH8pPk9",
  "key23": "3CWfWws9wSZNjvZqDTE4Z8pryKfHuVEyyentKVrYgb5AM8zCEKkhQg17mkfGK2U4VQgaeVhzw11y1uUsYSeTwexJ",
  "key24": "edYDVxhaNegfdu5pqmsEGjGUtzbcS83HsavRo8hE24qcWCzUSNEGButCw9fRj2sdifZH4Qmvvf94gG7Fw6aVCvT",
  "key25": "49Tr5xj2LUzphC8zoBkB6uWx4MDJ1EK3Wa7wKCF272Dvf5eYzPTVCRrNZy5bhYyj28M6iZ1xqKABWYK5zVRX26CQ",
  "key26": "2tGhs6SYFPsBwY6JBHie5MBBCoRwiuQy7yqq5BdhMXTGF8gunVbguMVFyosZcPCeaeC4hUdnueosbWqZXNv9m76R",
  "key27": "zeuojDNz9AShb4rXYfWszZWv2X9dvCPSUgp44ykTjQLjzAAeXrVNbs6VGhF4hvDMwDQKgDYt866SgszUraQ9Lkh",
  "key28": "LzyBT7hSJgjt39eZVU7tRi4PD4JFL4Ny2sHjZMGQWFWWJeyWgMDUnmGEoSAifWZ3DUynSCnknvR6oq76nuC2Khr",
  "key29": "4YXrqpMXQ4NmJCsfk2SL7psPucFSEmzJ7j61Py4AkuRsvKJk6zf9qnL4aoxoYqxeDDRWBynpsFfPFZMPtGPZhq8c",
  "key30": "65XLDYTqQUVsrLx4325MWPgh1H15PbqQycoYNQZLNA1m1Vtc2GgwLtFwWuxT4wgmNUTS81RBPxsZ789FMg1Pv748",
  "key31": "3WQTPtNWGiKamoN3BJrRxfxaoQAq1kqZQCSgQThMQuXHHbgSnquC5dqfgvqVVGtpAcBtydAw7me1SnkM5yBrfoYa",
  "key32": "2xWsFUPqGmbTDpeVc4PPMiqcw7KSY1eVx4RqoLY6Xs7KWiwXf4qipHED9QgPz9GLycP4bijy686CyNA9d22o3e77"
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
