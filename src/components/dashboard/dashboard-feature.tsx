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
    "42iNsTqxWMekeJjY9JkP18ecUWTS3wJMjecjqX2srZACLdZsfJ53QtbscYqwfYkKkWWjWFdBV6YQWtbcTfopDYCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDFQuZuQVEe6TMXttJ6GfWd2gZvR4CdWaaXgvCSmFJs5wraRtbDYRozc1JZyNwsbsTbUASnKnZEEXNGxSXzwwkY",
  "key1": "3SQ812t5D6CQm5RNkbFacNyA9XA4SBdX3oKm9T9hSa7ahvtULpRfASwevnmuGWcgn2xa58KfX7hHLW75zLfyDB49",
  "key2": "5Bs2mDRKRfkQZGdCm5PMp62fovmPmPQqekWv2Xysm6UUQMUdcDu8UUV3GPHqoDdc9vUsxb5cuTFb2vUCoN72v7pP",
  "key3": "5KW5kx5mJYx4Ykp3gPgbYuj2RmjKfA4yk7rY6v5o5Z7z7bVuuDZEMmkmbKEXUg6MPPtqXe3ZwLxiMA7LUmWr79d6",
  "key4": "4dyZzs5wtdu7quMm9NeMo5Qf31smShLGPQd7H96x4VjnLwKKVrBU4ZNaDCwRLKgFJscZiGbDuz1vNZfcc7BAGMbB",
  "key5": "2jeqamsCumeRLkhEFUxG5XonJNBTGrjMUkJpnCL1HvfZXtpJX3Rht8cm96PacJi2b77NDUNu1dvZYR2hyUVo9p1n",
  "key6": "5VCc9ZhQak65FxqoXPF2SBJ2W8aEZE8EAYMcGuViPoC2XMWCWFxdv2yuwPnwUYBS2tP9HzbyUuocRQnXxvihM7SW",
  "key7": "3FggW7gpbo3iMkkQf2M7CymdFHd3VgZLTdyEEevMTMpTbjZDYMfUFbLqGwdEfktwoqtwga6bcDd86UypUbukkadw",
  "key8": "SeWnP6GMH6fEy9cHXfoV4cK2e355XVRby79acWTRszipA74mtHZpaCXvZfWA57KugXMVbUEWUHLDoa4UQf4ZQwP",
  "key9": "hkBUT1twJkfVs24kbQDeAGp2zMRKUQuaAkYoN6vTZeii6TThy6QJ8WZRCJBLjx68PGhfXeJ9BMFAoKcXfeCAnnB",
  "key10": "5da5yZWLfY8xwsLi2tCcc7h7WtxNEvSeC2LhvNfavVUepa2nnXphoZw19c3mFwWNy8pmDjR4y15Ac3b4QbngC2nr",
  "key11": "48iNaPBh1y1A5eW4KcZQepUeXm7jhiivz4ncGwkSBb1qJjNK2otYkyaRnBisHp5YJMunmu1u58J9t72yYGLvvL49",
  "key12": "65zPsfZ3JUhiDFB1HZjMuPNGVWuF4wkL5RQoRbAiX8qKPf4XG3eGEsnPYUm6tVeeFY83yccZdecZpYGuW1YB1rrL",
  "key13": "2WSRHK1ikmPykzFyKKzdu5ESAAWSwZCYHsHUGbXrWzYg39w8iQdW6s8MuW662k37hqRLTyLxnR94NaDSPRFe7ey7",
  "key14": "2vWzBkoCEAMhqahRXLqXqJWeUcDPRW5xueyPPhWsUxvz73XACCG5XeUNEV56Dw7fYeG3aBJpewYNdJ8mi82DgADU",
  "key15": "4L7PfUZP3kuzLKvrbCQSN7oHpwBnt62NnSftk64jUKyzDJhDy48yGCH64f1jVpFF8cbwoZPWsTU7KEyTENtod6sK",
  "key16": "DBsJMwv45tLaM7CENuUXLQkjqnWXPSpGBfGjcV98hjK4RQkH5Sc7TvUW8DxD1vHfLpFFqEdDv5ZhmKVuB4K6UKd",
  "key17": "5ZqUFwLrnsCWvFvLXsDF4XLjz4GZsrPc9crJxHZLAwnEdwuwMzA88FoZyFq1mWLS1t3HgpfHKjvGEHEa9xpwpk8y",
  "key18": "2si2E6v7zuWGb8R4YKkEsh3mdFJAzS9B92Ua4jjDxsB7v2qePLhCaC3BZxoTbJXiPi8Ru3zLBD6HtSxBiEBz5Gde",
  "key19": "4RvCE9hAC7sEwGdpBmirvjGzHHpsrLcDskjYFX9mPFgPKLcXpQondChjBW3LJJpwWpdfuGt5UzjeAt2J181ZkELq",
  "key20": "4NcBYanw4tEe3H9ZRzUYGiswHbnkqn31rgDwuy7WDrScDCks3BXZ2G7zShoJ3w4kBrLGzwmQhUo3WuKUMNBqNThP",
  "key21": "64onvrFq8LkZKLxtgbp55FFoWH62hb45DGJQMWShgpBFuZ72HAqpN6XXiGwLzWBCtoF4ZJuAmqBFotYWdsFBKuRB",
  "key22": "2YnpdBNj2yuuzNaS8LtwN3FgJxiYxfxv1m4oq2Tqzd7FhuMKo9r4qE7FrwPMLjeHtDST2aWRRwHMys47imoS2ALY",
  "key23": "5sa9ot2Yx8Mfbgjurh2gsdNrdLx5uLtmzNYqsLH5DZRvECHB2cCAiZkjfTjUrXufj2hU5vbxwRV9XeedjjAeCFZ7",
  "key24": "4SJui4wYjZNaFACbMWbSkmWUiUxHf9Ps4nZTVQVkdA7PomJxSpjNskD1WdHgFv6sJ2Efj7z92xmSH4N9v9ocTkN6",
  "key25": "3qxcv567UTZ4T4yuWBGFMX6w8nYZxnDyYMf2F9WWEATT59Pt2a9S5wGmsunpj3rEqSAzkrg81zRGUAFbcayG3MQP",
  "key26": "5A2udX8MtB6CfzUuaDocX91AsadtWQKDwKfXFrAcaak1X9Wk5NpxX8yaxzcvfQqB6GBnyuKpPsL4NmAAHuezKui",
  "key27": "37Ybe4jwsRvLN4Hsej5wDuPPXerGMVBsTGWDUyNEwiZsX18N9nyen7g4m4EsCg28vpdfradBs6pcf69SBSwkJ3Jz",
  "key28": "5ipnxJTK9uMdYbDhcw1zWBKTXA1ePAQKcjuW8bx1qbNucb3QNbmUTBeQyTjC4niDS6nkmq7HP87jq4tbCYZ645rY",
  "key29": "4wsVpzek7YbHCw6PaKM2kvc8Fzv5HTfAmmJg9rNSyb4CjfveG4CiFoCZqCHT8H4YCAHAtiEW78Hi53qKFXtoiqxk",
  "key30": "2RRrNGuQLSrHTZJ1BJ3MnKuiCJ226fnaBDCm4ib9KxnYyDxYAXnmQyn92XSGa8PxodMMiFf31AUcgE6oMHwoCzNk"
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
