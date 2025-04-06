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
    "3ZRkt7UKAeR1Z3u129pTQfWELC7FnX9Jficr68uN4rowFDbx5AJSABZWd2x1Tsx3UH6fuZq1ujUyq9NEZjUJvj41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kwuEec4FkpDrawb32czDi3UQ585yPwqGhBMFtTSzStnQjtT9grkcnhZTMkdnXjzEhWraMt7XqSseBaeo3NA51ck",
  "key1": "2DMLj7dz2ybgWy9rmmipZQRPENk3quT72BPGexdLP2NLBvvCJDA1Rck68eoC8hU9VmKD5cSdhPSGRBhGxxnRi2SJ",
  "key2": "5r4bJPetbnBRSvCBqzxpnSmQf26aDs5nX43PW1iJ2tk47xG4V2vc7YFbGgpkoQ25BzDEWHn6BVmb2sEWBFSgLWfw",
  "key3": "54EnmsS6ZD7diBNKiL44xGSsBb79GgHMMPNv1kiP62kEmd2w9LZv17TwNPqerR8VwDQAnQpbWweTkH4LUkxtDV92",
  "key4": "5SggXgB65cUPgAvYD4zGVLWeoBhCADnpTKaVHPxAeWay2DLBBMaKDNE7GRH5hUzWKJWt5EkeFtqto9Ev55rdYTxM",
  "key5": "4DJSnehY3LkGbWbxdLYGokVxGP6LHGWroDFo8kF5fPqLG4gMjRVcGyLVZXCVP1VJkRkyiJvj8QzECeHk5JD8xAwC",
  "key6": "PdCE3WjRWXw2LZzLu7tRdYq8tmXPJoS5uC1q4hRuBDuqyosWjtyY3LvgbGqfshhmTbzAAsjAnCNnMiFp6nVgpP2",
  "key7": "3uHEXWa1tk8vuHbzwvzVjyRbhdhCSwZhKkExpaMxSDm1J3ZkwJVb5gtiWdnAd28FzP4Lz1qseqsHx831o8iZA47h",
  "key8": "27TcyU2xDFQxH65jN4TKcjxaMW75SB3ZvWJWoun2thBhSt7xhJyE5VmgubviH2fBZ61Zd6Gbstbt7bmUTNgy3twX",
  "key9": "acEyfL7321pQ6TTawYazAT2kSs9ooDfHLfzJHLEkBVGvF8EsnHTd92FTSQMcK1zH2jDei2FbEUJwNYUUpFwvZng",
  "key10": "2ZLVX3yiZVWuWwQo83piWXUyZHT9bKHzxoeP8Jbz9phd18ZiwVD6FNVzLfRzWctJErAY3Q2ULuoEsgjXk3bXEcmA",
  "key11": "496nxunixixZ5NBQNGuhNFiybBxXESJh4CTa2x63bDg8W3LYXXjPv24rWvqV5MHPS2Bkb8WHW8r2W5vXQCnZ48t4",
  "key12": "2pM1GqriYJd7F24CnhJKgGszdYnoDR9q6RPEd5qNUyZA26YFzzY9EZ3gmqchozYr9VdrYG6gEBwFp6aPqW2B9eAE",
  "key13": "4wXQ5ZBVsc5uM8vawMfLnjsDbPAxxDWgkkAuNf4izJ9SCbaWBum5rRRYWz9nDTV1woGrPTEsNCtuL3CWkqYZrXrg",
  "key14": "QQxz4GQWm7kjfvVMmB5YZgU82HT3rkcjAyptHTZDFSZnkkFG9PSY1RR1ycQ86BJSq5MLkviGRpY3fRuavBTARtd",
  "key15": "3FipLiiJ5jbDLCbexeKTTB3F1H4woLxuNSPa3rfPHwPchfqfxo9aDDqhf1vHuTwYELUhciHmsgEk2fihwXLpZpZv",
  "key16": "4EgEZg6T39vdkfyJxwxctmfSQXZaxcPwxTvcHJ2GjWyTrHLPiA4VnM5Q6zgdFAZnoTLgQpWJDARD2jn7PS63xExo",
  "key17": "5VF6fpUNwfrSCwch17eaWTqqa3xU14Dk71PNhX74yJuJurvLaPTy13sCbxsM3giaEpoGfo9DAv7xiaJwAAEeWhYh",
  "key18": "3Y24B3RbxYpgVXyBWW4W1SeiW2BNjXmmB8B3viZTSmKezJzHu8LCNwPQmiPkY2nXxzJ762Grpfhz3KeMDJYAJfAh",
  "key19": "5EoRLzVeWcuxraoqYagT8VaSnHi6uZSGH2qxiYyiWWLfc2C26jy4gQUX3Y2SzBoqg1xuLTNrKeB9AkCovQxBeCNP",
  "key20": "3PzLqo1mTrt6JY7xaTxSLvc5wQAzASW39mWVqDEmoh8v6oVngwoULcxW7Q7tCuo4NbiPS1kqqmApDEnBfzdWwvkW",
  "key21": "3a1s4wGNYY4vEXersCPHeBJDWwwAZKRronBunrtjvkYTbNFWmF8H6gqtYLAdj4Jzrd6KjWFjoNJtb9emGdCqwLa2",
  "key22": "gbY2uSQHLrekGUXHcCD9WyDDM3aJVukEn6i6i7aX4CeLvJYvG6j4n84pgFo8RX8mFjLhBYfSFov6WXnoSAqBwHq",
  "key23": "siqWHejtSYTWNBgrB1Ux3pBPB1bQkXSL8QtLGNpJbs4Yv1VvMjXTWoeSWRWrSYXo1aG4Le1854Q27p9d3nygMjq",
  "key24": "wn1gqRXmFjmFiEHwRaMPVLEpVfeSevLdB3GkgEx2DdJqc1iuCRLCY726gJ9ZoRRxUG7iikdGnE7RVQURe2TnsRu",
  "key25": "2FJfmHi7QHSGeoXUGr3GfjyKtdUBQhLWn98FPPaPRmacDLSLyC9ZtwKvBDqAWKNHaJiuHYVigQE2P9ZoddGJodJy",
  "key26": "2pQUBNgvYeQvCWf4RfSVyCqKyVFfzMkK9rouyAZUwYwia63bYqYM3MCj6gCCffxpaQURrRjE3M1GE36E1kahjxQo",
  "key27": "2D5NBHqVEa8YpZ9UZt5FPSWims2PDGxq226S7ZznB7DU79RMbAqrwiJ7CTf1tknTfQcLCS7SrrNQ6nsKzoPWVd5e",
  "key28": "2xxUqF6pXbJmvBVR3bLpak1Mavg2Hjuc2DnATEMXuyWomGJ2LZwC1Wamjr4dSB9Ykc7Vs8rJtyCc9DYXDTtqdZEy",
  "key29": "4nu17xoJ3M2kyCd7ZgRkp7bu7wpvcqM9UJ6PjcSfgQK92VCrqssAiTcF3Dt98wPeQMPXxqkZ2Mi9VDZmMmR63MMd",
  "key30": "vY3BZar5NMZnLdyqa1XHzDdAvvUM5283DmBimVAbSN1yS3BCKUrv8EtyPrxkczi4TKrQozHytpqW8Fd8fd73Tbd",
  "key31": "2wxYfbBXdfMvs7C9qExmKNNVsXSgZwKfHFrjrd5e3TNhMUhTvBGxmrD9xfCGpxGLZR566fsTLQZVHDD6WAnTRczZ",
  "key32": "6q7Rnv3zodLfKfoziXmDZ7w33xPbJ86kJp2BShg2ThW4BoxUQ9kRbNejVuCBrK5PwuvJCu1bLLKjt4kXouJknD8",
  "key33": "27MUFH6CTD2ouxZp6cFJ9JWarBrbRFWDYh581u1qj3B3TSzuQ8rETwN9Trdd22T3wZT1DC8x9CZgrFYhr5tBX3s5",
  "key34": "31ckXktUrQWmTZgT137D6qZZg3vhoGU4Ra6fCeWv4EjkYktPuDGg9yXFgFdn6nekHSBVAbN6opsrHLmXyH5vD4Zn",
  "key35": "5XuWCccfPaVYvj7D9zwoEfFdKFn22vqRJfg2L78Nx5BF2w1QsV9miKpk5mYPijgfgu49NueXMCG7f9SopSAjK6uL",
  "key36": "5XUUoprZchQBAKVm2t2ih3PYJU4QcHhszhSjsTzPrDDaHHsf2TcbR6ENtG72KHF2SPRT74qhSXhTdVxMp2iY53DR",
  "key37": "5yy7qeWZ1KsuScV9LyAeLoLoavKq3zkTfawTxkdkMCaHjnTAhYPbnoqf7eYuKbCMdi2EpE6Neuur6juygZ8YMToP",
  "key38": "4qcqRqHypexAKjsKP8TxLyU5QEvGCcJFd7gETCbnc1JDDbati9qrAduCEQM1Pzj7Jb3aihNWUz3P8xLXFdEf9c1U",
  "key39": "427MTq4K48LMvfQquoHFqKhJCymhRUAsy8nKn7JSDiy8V3pdY4Ac6RpnmrBQP5AuJVoppb8xaSk6eLpfYhjptSbQ",
  "key40": "5Dgt1jCkVPVCNvs82JCL93UcobUqKx8txAAhmPADh9Gz1dJRhQUteUY3heK9Pdva6x6HUu4RmsWw3VkawLkFF2RE"
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
