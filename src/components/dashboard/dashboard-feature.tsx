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
    "3UdqNTRG7rdWRDMbznMJZQyE5Gxo1Ci5EWVcVZzfZ7fFjwsHws1k42pZuiytkJfJTLAjPqEL6kYs8n7SUoGh7fmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qC7gAGqSYuyqv1T87p2eeAnGEBUxpz7e8pP1AjhcNHZMgWaoi8567saWKTMtr883rQngfKDJQVGCJpmViChPt5e",
  "key1": "5f84xxjcCfKf7Np4v7NZaheDv2BgDkGksPrs9KvTEcLaxpnS2aWYmxkVp8T8dxqqMqZgBhb3vz2X7K1YkMjCXd13",
  "key2": "42qXN4ZKdSDrxc5xzkSkRsy65zDTsjvWarC8KfYCCNwrYB1WCYC7K4yavtnDTNjiZzyHEg7smHd6um5yrwKXB9Vg",
  "key3": "uf7NpFcXkf994ZjisMRwzCkxDjwuQZh5rQ6SEveFVRMmGxLZLEouHNvGa7gq8n2YmtesgdBYK6uizNwQri895nJ",
  "key4": "ZCMPCKkTXR2ENBouhTmNeoVfdGAfcY58W7x6R2DCz4VAuqWa5HyNiH9Znf1fSY1GRY4BSkjYXoLit4iAZDG4qA8",
  "key5": "4571q1D7sWi2uPsPgn9jewLL7EeZPF8kCEmA2RrFDHiWbTFvhtA3HUmcaWGmgt7wYi2VTcML7aYBoaA5UZMkvkNf",
  "key6": "499mJ7yJnJ79P3z3HULUAMEBLQhM2v6G1mJaQ9HuUwwTM7xrvWU5ZQhsiJhyLwdjbp1bFnAFNYpj6U1thAWvZfc",
  "key7": "3RuMbKqTTJvR6Mv7yEt4hHKsQXJFyUhZajpLoVzhRVc8bkuBH2QZ2MkAd2715HE2UxbDSHR3z4tRbbJP18ku36Tk",
  "key8": "3LuZC2MP1caK7FsfijWJ9nw6PAEsP4pP47PyKZjssYdG79ajYV967D2NmXGNhM671jbBKEGjybCKYsDtiSJ386zW",
  "key9": "4ExWjJE58kB4fefJKGQcPLCVP9SCVFRfbskftSDiDwko26zjqcM2z7CkykXvLwh6yNqdjcohVBKKN8SueBbwEsF1",
  "key10": "5fkBzVafEbaH5eN33XgiBeQZ8xDG2mrTeWH37XARsQTUCHqTv18GwWrUag4taKyLssuVtGh5DqiWdWTa3gRdcJUp",
  "key11": "BBgXWGSqEp7GtVk6NF4ahodATf1PGPkUUSVs4FP9Ax2PLTVDHPvm2awumHh6QRHbSAppgkkcHf93i8VfK16pLpF",
  "key12": "4ZRfmcZsaxni8oBqDHemGyfiYfyABaDq22HvqrM6N3KMxnvjyF8KZqXZBLNS4ujVoN7GCdsMTCr6w7XCJNZ2mdzQ",
  "key13": "LXtLhzdEhsgvvjAoJU4XCvM4tdkNiYEA7zVbDjaHUnWDMG8TuHqX2MoPGWQ9vB8ucJqbctgyCVsLXgG6u6TpQVn",
  "key14": "4c65TYUQ3GnD9c1Hdmz4QASjC15vYQFdDsivCFPoT6mKiqy6wH8xF3SQZ2B1YtGtZaKrzNc2xehBmRcTHLpQmqMt",
  "key15": "54cYuqG6QHzyMFLKGNCSF7gy7kuxf5y62vPmXThvVj2c4cN4X8zidseL3ZYJXKYjSofDPmWLFGpZSshiUfjfTaat",
  "key16": "4Hzdq2HTmvhRrBRDbJVymBL3Wt2qtbVPfCfcLtwZkkxswBMHKkMDdZS1fufLSEu8jm1zkUTxKmQMgfWfYBGjkyEz",
  "key17": "5ZrNeZPQU5qPPJvMXMZTWeA3dqC3PWMkohAwLq6ejzRTPsxyjWjAKTYKtaxPEER3pAvhKoSmBovh5DvfCaxBEAsX",
  "key18": "5QGUMU8cCgyZ8sFLGX7LgUZznqmqRmBn186tVcXGwjW6pddmuJSrb7FSTGBsRfAXsw7WZcEx4PL8jAMcTyf2rSsb",
  "key19": "66uFVuFhkiz9uvUiSPfwd2takZvbQQLoXFoNG2JUU3uxvfSPr3rB8ZdvYNjFNjB2qK9uXrVEvYbbSAHc9FmMVLfM",
  "key20": "4jadWiZYiMjPeJW1EafMmhswZ5BY9rqgPEDMUYinWsUCDKkJ5VANVNEfJSKYrNQrv8GbS26Tmb1pEiPM7whZp7yZ",
  "key21": "3z4iNoSyDchidLZ6pTBJGv5n3uX5XetJ5sCfhQo3Z4LcFoZcdKY5Q3V6xvPeiegU4Sx55RgMTa43L2rDjtVC8brd",
  "key22": "5798Q2Pvfpu1b3S4Z2LwmG74hnFoWY99gGGKxMthT3TszTfojAjhGcSJco8bfpoqFtY5WCRS64tPRiVLb7VRod8g",
  "key23": "3oKS3mSKoEBWoYZ2GsknbEeo1497xCLY8EQgeLojqDT8rn7obebUKuKSmyyspuyDHid5rfJYB42emHMVzXxud2Fn",
  "key24": "3XvHGKPapT7gAinj4fF4tkLDF8dHVk2RBvbBYN6kod8UvLMWeD53naj8YWy7nxYAe49SScey2vFJ5qzXratEkLqi",
  "key25": "q9J1Ev7gub1q2r3PL67mCmsDccRWcekd9kqkFH4kVKXZFE5FS4iCw7L2GrNSGzQB5BsECPR18Z5tSeT8QVuCwpf",
  "key26": "2UGqPUjmxuSN23yxiS5ZKx8whjSVkyq6rr9yiXp7VyFB3Pnf3J5ahnddWDvdn61zjm8nhonfE4CUKSx9Vj8Gout4",
  "key27": "3eEUtqYqrsAqEsBbqRHdRg38APzfC1Eo9cRFy3MXeoJze1cPB2k3MHcVHnapRgXFp1cuzn9AzfFu7oxtEfUaig9B",
  "key28": "4Kiov1XFaVo9zFvnnXnAGcjgWFm91yHi5Sj6R5Kjfv2F6iYYHJq9g5hDtrSPtni5XKA9qcwC6rqskaSma2xDW9X5",
  "key29": "3jjAz1fqtbtkXdVfh4jHWJwDzjDvsvAbYRMuRFrDohkH49RTm6XbYbmEL6WGqfrYEKw8PJwRc3318cPf1GHQQVNR",
  "key30": "2w5ENuP2uvMEfEwRLXQ7DTfhAvj7H1a45gQ9EdMEAsyGQCbVQUKnAHtZMzcodHJdfAAQ2Kzv42tRhv2AdWpRd8oH",
  "key31": "3hXvMS2Z7R6qNNFTSSXxYzLCjjFS4FCv1hPJccx26A5dWWgefSMZM5xfVhihoYr1tKRRvxDsD5uPkncL5X2PnFSU",
  "key32": "4Fffrz1HnE71SrkgMcKYAUSwBdrHCmGG9Q2Auu8AbNRdgZKJ8AocyWQ1a6UUaL7Uj2heLoByCs8AHpSkQJhFCcMY",
  "key33": "2CR7y7898DzBhGdJH1rd8tyAjGMgJK3Zczj3t89PpMFKRoQgNuaQD2V66xCMVEWupxb5ZWpEkEuUsQcaao15F1o3",
  "key34": "L2tQqnzXtvWKTRLKnCb9EGnhtg2AzGeGJxAjUWUig2kdrNHJRZ7iz7eTEHbGnbQwXzU1VXyWhaGx3nk3TZmf4qS"
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
