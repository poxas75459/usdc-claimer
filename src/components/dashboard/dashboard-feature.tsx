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
    "5uptSzC8puxCi6gK8f9M5LvXzQagnoAZtoaHirenprRtiiYFkXnZVEJbzLjacRpPTUcjhbiZWG73shvCkY33oujg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jom2ABgV3CFRViwp1up4SYgm9R7nkae5cJvwWhk8nQznnSmZsBP65T9REkQAmkRs4Jm2jB4NcnEJSocQLb2bM5E",
  "key1": "4M1mEvLo1Mb8GZa3eZexGJqfpZyLLuGdahUnojNkfFs816DXFtPUK3QfLTdc9NYnLy28ZDCyaCQw8reozyV22WWy",
  "key2": "5qArRiZmA8H4DY1R71wTDkuzxhyqkdfShThYKbWFjGb3rU6P13EmmboAs2aPMYBb2q6SCHiPEbvXge9YcdVYLFDA",
  "key3": "3YzzMnFH8qRVZXciW4C6wYCx7McVNRx6EY5B7FxV6DeH6NfVG9k1gNc6Bb46kQMrYJFGB4q82ozHhvCZEq24EADL",
  "key4": "4MnujxQtjwXEC6N3anPz3daAMeGAxvza45S8d64A17QnfzX7hdDecEUeh3aApX2pChwebXBXNCfen3bruHnwk4pE",
  "key5": "3SRrAM9EQqAbxbuZPDzcGifrkm9NECjzg6y46gxVoBxCTJ8VJo9bpNAQQriDTFYi3AF5pqHS29VSVyJq5qvVCbda",
  "key6": "h4UyDwsT2VcRazMJrANXBYPXYTQP3P72Vy23wNuDFo636vue1LtvKkUQMMt1b5eSaK5B3LJZ9jFK8tPTLcDN2iE",
  "key7": "4Sbg8CgJMxt6xK7M8Drt2z25SZwjWPHJMTDFFqFTmz6SXq2sii3CTAFHRPLRE1vHhCKASovFuCeKuVyEEz33eabu",
  "key8": "4bSPnfZys6KkYe7GNVVZQF654hn4Fo96QGaZ6DxG6FYAuopYHENkXwCukeBWAyqGpGu95FV76k2ZML17GVpGzXJA",
  "key9": "5NdAbV8RMdFGtLUTGHVy1EPs34A9aiPc7fxDHECuPYTWuUL2snsgP4xHT2zP9QWpEixzoprpdFwLBRhWqbwdCyTV",
  "key10": "2zpv2gGiqnSevB7yH1cGAq8boZei2N6wTxzqmZ4h7BHEm83ugpGU3RA7otM5DJhi4tCcRSp4uhN5hoC26dJ9jobi",
  "key11": "2eJQXx7Ds8zq1RAqbgqK7hF9asTCNMrjpK1ab8SGEsfDQvLJPsPG2SDT75mnXYDLMfoV9gY9d6yvSS41ieFpddjo",
  "key12": "5fSQ7rvd4HDGmt6hHv1CeqAiEb8V9jnxuD6yGKcW4DzkaSZHVd2vYqsYvDZfPtxykLtB3587RYgeDLv3CvZfkXvd",
  "key13": "3W6uneNk26GomBW8n2Htias7z1c5Sn4wmh26A2NNbHTjoFYJhwLaRCJM3jt7s8Dh5f3FP86qMTQnxmLB6hSSirkU",
  "key14": "4oJDFVWfo3s4pyiwGbMBGHZ12zXTySEwpn4d8RdR8W9NiHqRBxdZLapXzo1QJYvPuww3cANt7ViUXfM2CTWbGjxW",
  "key15": "2tNKeL9YCTifRQzFE9mdbATsTwmai33NqUpfGQERPFUDDKLXze1pduxzJKkn8NBqQkchJc3npJaMmWWWWW3GBnFz",
  "key16": "3QqHjjFKLjEt4kKot8mEiRhGgMJJR5dmqy8HCUfS3i4KaFf3NVHF4h58SAEHKzjx9RvJ46tPUrwJRAzsiZebfT4n",
  "key17": "3FDujXTTiixngtZTnMd8N2ZX6WhtHAyWqSm5DYSpbDW8rYuRcbmWKTp7CLs3JtkbK3maE6weDYRUSxNwZunWzA1A",
  "key18": "45HJ4z11JGpXXo73truKzZpVcts2xHaR37J7VaA2vNrjmaXARosoXFY5R7tMaZtZQUYixxPEnCPU2yT7fepzaKUp",
  "key19": "2Z17Sq3GAVXeXNQ8j7G7Rvt6SY7Erx91VMSGHRZRRhe2hKaJjF7enMRc5thGYGiJebwEX3xkmoMQ2PrMvzVtswzr",
  "key20": "5jm5zU5aDVUQzvgq9H1wdtLtkgzrPEa1cAZkPAFyXR77RLJyHvBdDHR91tN43hbdmC5xo22dFubcaXwHYMnQvX6u",
  "key21": "1ihQkhDXmVj32Rr2CBdbDafSNPJTmNersTdtvH3cBDdcmtduV5vRTg7KX4xNaHv8264rer5D9YgzHgEgHW6kYDx",
  "key22": "2nGJafU4UERo4TT7dQjPbg2DBYUeTGJ2SkegDHUTQttGHeUKFtj6c5upKQUuwPtvFmD2BY5hvdKm2eXFyAEW5vWn",
  "key23": "CWZzB2UJZcyVPwDfJGfcvhpLW5X1BfZ9KhCKmnDjzQ21LhJMuaLzoHWWTokB8zPWg95KP9cE9CJT6SJevvivJJC",
  "key24": "FhcW9DFpEWcX4gJeCfPs4Qtzn5aQXqVn8EtTWS7A76i6H8XBHpRjVvTDNeRmdmHCpyHEH5uFU8KE6dAkpcM5VbN",
  "key25": "5fNSi34Li78JfASVLN7sTAt4apPVVBfNDgAaw91tAGKvahRUiLvdjvswiDrLGfkUH4ZRyVXWQKHGuKNkdnVvy41X",
  "key26": "4AhHn5LrvFLBWhtgtHpEqgfZPUm9MxaUECfQFkGHwNeXmPWZLSy8nhDBabi8zMzDg4BWbqvPgMf6BSjKSW2mfQ93",
  "key27": "DN9c7TPEuhTEDvNDyB7gS77XPeTQeqUEVime1RpyN2svtAwAVfERqDG99CxMcSCPGEJfDrFQD4B3sKELo5cD6Wv",
  "key28": "425P33KcUrBVtzXWQk9626Benq2LUAGX9K4SWMhavg3DXJBEQ43aEidRP4XphcM3WDRnoUCCcp7xezqHzbzgCX7f",
  "key29": "4JGK2Cjgdriv7rN3r1hfZcP9LhQXYeJ8Ksp75ayN6SoEmchpEUwAGXsRmBLz9K5Ua93bzNpFLUAJQehSPeUJdTE2",
  "key30": "5SGUw2LPrD4JgzmFGfmQbn4dmY9uxMMtdVv1WWfSGUp2L8jzZPNffgGJfAmRHHdoVUsh17b8Yvcg978BTGwpxfBa",
  "key31": "2n4p4dk8Gmcv21MAVYmS27RGFd2NZXVoVFCouTMYdjBcTMbwuMcijufftBJbZtYfwSfd9gaitzjppvwj8Q1Pb54m",
  "key32": "AtJXt17ndWmQEmDC7ry2gqJTgp2q2VQ9qMNvCbUaSbYksaA4fBn81mKJzku9CZBzYkw9gnfSC8VXkWYWaEktEPB",
  "key33": "5bU5w3j2NeDe4j3vUF8m3zGKi5RBSEDEn9XJAtkjWmoMe2dfaQ2Rmp74DD1zmBDn8i6HrTxqLzLFkxHVKzWN6KkT"
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
