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
    "nQVFqM9FEwZEzkx34w8LesTUh2nAxYUbwb7xSNe1mDBrzkxSWUhezcRfwKb4cND9EZSR2m2UAaCAMyMaQ4Zagy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G3hku5hvsJ3HEzzb8HTATvcfwo5Q4e12hXKAcgj1sb6VS4B6EdzES31t4RKAitTYt8GyRkVAUaDhLanPKG4k2YT",
  "key1": "3d7nnRkFWsCQMKKuEqt5pCddDRHqmSRuowneoPM8vTMwhjrqQeX9T7A3r9otdHoXgAe4QSPDbnQd37yaCUuP2S56",
  "key2": "2kqP7anmn5J5Qp8GohEuTMHk2SRtLQyqnyz2y97KqToTawF95bjmnMJVdmugdKkNdLvwfrniZXCb2V8cnWJFK2oE",
  "key3": "4g7VmEWkxMbCpDsh2jWGDbHDh3gYFRqT7khhAF8Xgcc5Ncc8wrSYUykxhDfJPKkqqVAQcqaiXMC7ZQshbUH3yRrW",
  "key4": "5iXSH5tm8zYcyBfhFaxoBPmhGkFcwAYmZ9JbbN8dT6iUzCMKHcqvyGoQsePmoGyYbXQPNCKC5mTT38RdGioang9G",
  "key5": "omwY68VHacWsf5EjqARJu9kBfJiAzb5Pnby6G3HuQaUkCNo8eQujPJYd3d4sxoVdwJYrE4iQMWUpGWEarihLsai",
  "key6": "3qJqyGrcqFH5EqB4auFQttcuRtwcJmQZ7D993xA39tWrcY2Ax2QMUQpL6xSvvQ1h5zffbC2KvqwTjnKatT3Az5Gz",
  "key7": "kGLEk9FLQUQqoXYECEpCo9WfZz1ApsMM6EejQHw3bYEJfF6zLCaLARXJKNQgpFNnkDvbLToeXb1AvzwRJKLzFZd",
  "key8": "2bbednQYxWBqNkaGGBLp2LmNgPGY6Hw3fSgjGj638ZvMPZoLZxSW1XTVAEsdXnBtpDGNWKNbSMa5trFYurCoiVu2",
  "key9": "2fVR9BEpNkwH9qtwqZnA1QzbkMB4JKVJKe8KbgHKntvy9L27Hy6FN3kv95pnDXsJeJvf1fYwZRSjw5Q5SA8vz42Q",
  "key10": "36jCSAi2mnoThq2pCRK3iqhSs5tjE5KU3dpaMhFeSJCDkMHw3T5hjfmZvLoZEHaqQmaG8tZaj9J63jhLsAfvu3nv",
  "key11": "2m6nSbcLjLuSEaHbpnuaEiP4cwpnxouhXLMGsD4QKcE3FRp7wRgrM33twKtozCL2JiipuxTM4nPbYGg34HUe7iRr",
  "key12": "2ak59UbbGhn1squBLdmTevrFdw5o2EVt5gLPmFTZn8msypbSW472DuoaWhE8LEjWbyNvETSX8X6PKZ3ymqsd1dMU",
  "key13": "121Q6fRVaQdT2c4ncM58yX2UaX2hVJovUjxveQdmeQdUr5uUgDbsaCfWyg7STgLDRVszhFk5TbBgb6yd6XosYkfD",
  "key14": "22s89MDGL47MDVYDw1xQfDDRadwVrEyGwqpGEU6Q3Gva7WLGmLe7pwtpKuR2BxyWWtZCzwk4tar8UiLi6xkUiZZT",
  "key15": "5vj2SfwzCUYTjzxGDvmC4kt6iVCNwXJHsHT96gA6UNqwJeHn63zq1j7AP7wFhNqL8ZMBs9jMwjqGsybezWYiCXpf",
  "key16": "2GESmpdQLjGeYagza58qpdjnK9xqAk14sFBrXVhpZUQ1EeQqXq4v52qSMuhVqnQHMEr7LW3wz3g13EqmuSTsViUc",
  "key17": "2HTFEsc2mEZjopy2g2pj9JLnTwX3nDbj8VbaxjYshbkFm6R8eemMsNERoWScBFrqRLMSBoNuQUEi4Pui4PW478uE",
  "key18": "5k7cz6mGaeirjiBpkJDQyk2rZAGPW7bcc41pmDvFYrrHM82Yw4zqKCr8jMBi36iQDhZPthF7mnEXRfM8Dr1UA1BP",
  "key19": "4g6KETAtjBGSCFuVpFrPuV6VJ13rVuGkiJkQ3rTgauAajq4PRzJAfszbT8vrYiEXDRQn62DBpKQkpGHyFQFTRyu9",
  "key20": "4EjKVajkZa9FgMfor1sgVWZY5iGxymBccrTUxXQZWuDqx6JiU7zfsapDAvDPpEq66gVavh6UbuJrpD3DMuE61mBe",
  "key21": "3yZqD8V9C2PwKTdMEmX5thrFYDTH12bomBm4g2PadWz5B3HaGpgtFty89dfSykxkksd7mkuZQmq8EZqbZRnMMMkL",
  "key22": "2oYh5HTAimpymRbSf43HPT6oU95xHvK2mHk84SSZXBemgcZxoPXtae3oduW5Hhv198qvnePgUn1mvXb2PwzDYR7z",
  "key23": "2CtAWnBVE7oxCq6q5FqnSB9TzYAwsEhAeUSQxYjGKB9qnfaRBZgb2QAZx1vbcFapXijACp6Heja4aXJCKay7E2BW",
  "key24": "2GmZSpPKVbxtTzUG7PnFiQStw29zdupmFz47ikgZaXo1itLMUUnVN96fFAnK8Vp4QMisic5Uh9fQfZdSsFtspVha",
  "key25": "nWDvEW92Y2ZVC5QyeAqfmSdXfPRkbBHzyNaJHhvM2fo6YME71g2gtjZ33jRugmk11zihJgSyRjxpWMzNiHp9P5P",
  "key26": "2FMPcG7fxoWWCH1dEQ6MkAU9tQXXoQtBoohtyfdCrgb6d3hBGpTxUibH1QMnPKK4tzqsQuHWhzmmNE39xJadAP3L",
  "key27": "3xy33cnD7NayytrzGktHWGwp9sumxKWfcExh88TJ28YhV9CxZzEa34P9WXtRSW2hjxsxRRUVmxUE6cdwygycjFW1",
  "key28": "3NYYCPghzaji9o5sRgNtBJo96PpR4HSFUDF1MYvdaWeHt4B5uYqA5nxfZY8uJGyCQRvEmpjuTehALH7sAUjqFd9d"
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
