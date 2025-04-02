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
    "14ekD7H3PfYjZdrPBftrbcjbWdKFMz7wNnJ7df4SEmwZGm9FjVJqWV8ZeFTABkdx54W63bzxwKQvg7sCPpkv4Ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2abovW5m9Ce5B7mc3cgH1zFa4BYNf5bnFcBZHKhMian9sB2fa192jYcKJg68ExJ9rs77UNno6k6Xb7tmL8hNpaPh",
  "key1": "2Tz4X9Gsr84tNUT2C1YSBxwbMqYCiapGjF25zmo6RiLLJMACb4v5YqhnAEiDmyQ3oK7xwGYChRQ7tLH5yeh7mKcN",
  "key2": "5nbkw6U4jPivACTpQz1D4KK27w174xFFzo1bSS3wM4PxeYz9zawkvhfJ2kBjNCvb8xk8iRRFQB5wdVNzcGWiSQoT",
  "key3": "64WDK7yu93YsP6xpbZzf8RRb8QZPqZA2Tx1XLSnvLnazARMAssEUGeBd23zP4x8HMCwjgHabcpNYonRhTNcDwkJV",
  "key4": "4EpnDwNjPqL7PpMjZJ7ZNejkJ5P41NgJPDcY14uKRzL1DPYXxXye5bZzKyovwXzdqmAjKyPBheVpwFT4dZrMnfV7",
  "key5": "66keEUPHfcNAxUeENdDkMP2F33Sz8q9ukc6K9GroLuKkfUC8GJeB6EQJxvQc5GFYLfjzALj4FCrJMEoLoTZnjBA9",
  "key6": "48QAUB7qZ7BQWFejFgRYzMqKRw2chrgRUxmN5WUD868vecmiZBFudWHzLF5M6wroGNPpXn4U98C1pBoVevpp2suz",
  "key7": "4wDxSVrTPK3UdJHC6ygr9oMEoyxZWi6qSVjmCCNS5gD9xdAgb7axoapSgmJnLvZhsZaECMXL1J9VyxbmBDATbu52",
  "key8": "5zkD4jyufVFUKLuWhPCeGDUhVxqhVB4YxdF8c85QenouuP5aV9oraDPLgxs4NSxhL718Zh74erNt7RoDpQ9kjMMU",
  "key9": "nBTNvfLpqvoSrBqEmPMxHJz2vyvTNDSTqkqsRo72KX4XYmCoHjvbXF2DzCrajzBi8aMHHxjeAE7Na8mBjVPf5M9",
  "key10": "3ZDfXAkERcxYRkRc4qDPCcbfqgDLykiQJXHMpTHis1tr7zzkJR1m4W9nArgrf1QWMY5so6w35VmxhcGr6ZA5pHGx",
  "key11": "4vFZzBVbPLi3Nsphox7MTE6MEsC3pN91aowViqHo5BnxGCyF5ktrNAXmZ7DEgAYxXH9bBaUGerm8VCbHo9rUnf5y",
  "key12": "zGVS4R8MrpaAsPgbYQC6xmPkpzHCMoofWNzEUzzkn2AzkJEtDxg6aHNAT7JfnVPuRKoCAmRQXDEXGWLrs6U2hb6",
  "key13": "3K6JMDjpnWevqGqT93EoXnU8xjggeG3bp1Y8buMnu5nz4hDvkSz239hiUWRZoWTWqaTgx3EjYT5FSxyvhzXMe4k1",
  "key14": "3AXbYsK4d7YuiWi8Py69NphECBZ18FtctQmthBKJ2VGogRLqwmrBj9qeDExQpoXwUK6NsekSMaK9kpoh5pskk7Hy",
  "key15": "2kpp51dEqqdBWY2PFqcTv6YZwk6b8aDJiuK6EKhpH7p45YMdTubYi6oSKV7Wbsfk165UZvPr7QwxkEVQzhm1aM7F",
  "key16": "QmxfVh4eETxaBTuD7AMEWkWWMinjUPKn6G77dHsu6oPQRb7Q5XyyhvCXhohopkzqv1QtCnZCC9WBxwPcoAUZT4n",
  "key17": "3GLAbQgguJkqBcs8duWp2djjkprNQsYEHcLCrjNygcmnENRjsPGpPrsVhQuxeJu1B3p5cmPFkqUD4W9cy22ofiCA",
  "key18": "4ofhiz67EmofsUCHHp6RGgs9W8Suj8kpVtH25RiteuBXxh2yt9TKLPtmBbV8uxzpu3EeDXA9BKYgtowBiz6hZMzR",
  "key19": "5RLGWuBMQQfQqhGE1S3cuR7RvXgoAMQ3VNL68zFpTAe9RcNziLDoEm25ubTEgNo1MCrtQqPiM8d6Gs1PfBYh6ocC",
  "key20": "4sE7VXbgaXkZVn6YtWvkoXs1nH5ELvoCccULnCpYHC9Nw9CnAMgfacpjD4JaZPYErV1mnJVZDuyAZ5naUa2sdA82",
  "key21": "3VJkLe4yE6STGPD4tapNuvfmTSLUXF9FE6RaFWVSUJagAtJMZPEAr7JeqfFtcZiAZTfpbcSJBhHkWZreXs5jMThe",
  "key22": "2449ftp4WTUSDFgBvmzngQQWyKUowzZ1vZKA2dLQZkZ1UehfdghXbg9CtqP6BqbN6VrimszBRnycWUvgtG4s2sFJ",
  "key23": "3oJ6W6XyNd9TD4EG7xdUmkqLWUNYc7sFxubeRwgaPEY8EU9MN8pSTy8LMmT9NT8xWT7FwujtmUGfaYWdUAX8Nvzi",
  "key24": "5uGW6rbAUh2BxyzZ4vxRrgegc5rVJapeWTh98FBq7roHHSAmX2ApmdZ4xhCmPDAY6Bm9tpgoeruGiTubnRBYnBMS",
  "key25": "5rVxhJLPdGAHY7N7okMVhMvbzXvstaVrUUXxPa53k1rWJb3HRdpijV2AComqaP4ZKsXdCPDHaAHirPuyt5UdF296"
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
