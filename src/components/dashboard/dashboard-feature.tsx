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
    "WHnNUroKYVm4kxAvjHUrGEovPqxUX8UgUQjfjpgEPL5EGZafRY1a2JEmSvQ7uBFKjT7MozqKeDpttf6jow4Yg8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ZSNRPYBzdBNd7mWsdaq4uVJLhCVs7kmgWW5ahxzLHTK87fHWwJPcNktq5KbPLjEDpQ5EhnaWf97FaSNArPUiEj",
  "key1": "c5QjtjEBSyxFApdbhSJAtSqKaPWkuN3Xqyr2cyayXKNmLV2SWbpK2qJp4rUvsYdHBMaJMZ7XmVuU2VmL4Tnkii5",
  "key2": "5tsj4x8WujgcKDcT2GXMwmSDPW1apWoNRurYhmQr4sCujbDGj2wmnACbCKfcz1NCmHFtRejkPLDu3yek4uCFqLQZ",
  "key3": "2DZxjFbCu3sVEYBbkwjXLYPfkzH3PLJbCQSR6MDNoES2SJQ92JEmhrTxcDL3cbqokEGtJq8EW8863TjydJHMcWVY",
  "key4": "5hWPWeNqgK8LFdGPfk4KVBmDCUcLAGsR3dkuzeQG8DNDMNqBxwvQWzgMidB9A8izTgEex4CLXutTFPeNsvUWQeBp",
  "key5": "5gLmYRyperPtoCZXDMixUBCpK9ZaYJpvHDvaWBDLvMmpxRKKd4uvFUD3tDyT47xbK4beXGhN5YV1JEGgSst8MfF7",
  "key6": "5omsFMJ166gDUxbQGk221mbgeACS6HXEKpJPjT6E8uYMKPFxNcSTEeg2fNjRuZ4PymE5Fna9HBvJYioJSMxsAWtW",
  "key7": "2TSD4DaQzAqD87Q68orZVj9fEHc9JrcnXxsA6daXaJtNB3HNjkuBTvP6YGnwmnhfYmuironEJ5APWRUjVNEW7sR4",
  "key8": "2NS6fjHzDEuy4EhV5dez42D6gdzSMw9wEUteeC8PB6DvB3DeK3dWnvKnsqDbsBQH9PyMxfcTzkJ33ENLZ1PNcSL7",
  "key9": "27E3WhV28qZ1uuw4BuzWuTBz2AtstXXHP9ZJhrcrGQ8rq2MPFrd4D34wNYYQfradzpBYqUasL6TwEfN95mEsVojV",
  "key10": "LHVNRTHe2ENPmBcLax6dxGwfWWhk6TfV8sWLAuimDvujyV5XQe5rcgWKmfTmQPHXMzVhuYmnDe51j9173Qov8LT",
  "key11": "5GhFvSwUKvRYT434hVXNdN9KHof9VsoZs2pg29UywF3KtjYBymVZkaktyybMLJkNK4WfLwt6jYbP9KmJVBBsmsfX",
  "key12": "3RNFbqPVzHpNeKwC6u4KwUhrjtqNvyW9sJ3bBrHNi8Xe3qwzsDDA2soXPdLJTQZQzsbcjVr7q7uNTDwd5QEnLxjF",
  "key13": "2Rvxp3a6Apufd1Y52vYTv1NpR1SsgcjDJUAadc3m1HbKTfqFfMhuGWbPosVwCevYu1TDvvyhqzX2HF3vs9L1rPhL",
  "key14": "3FXWH3ieNU3GEf3ior1supLKe3vNXa3dbuQcVcKTdDjnfajvYx4o7BtKguRmo4cpU44SMxuhrZSwE4aF6PHeJEaN",
  "key15": "2rSTYPR9RLS8s93D8Jr3qRfynMbueHSRwxaNDHMCD9KzsCi7uzhJLx6T4xnpXb5PUCkcLeheqj5W6ZyRc5jLvT2Z",
  "key16": "4FMapJv8id32T41VECri4tfvqydnAg8qk2cZE6aB1WWq1wh7mrHDD8ASkppjqUCunmvLVJtLeDSq1W2kGtMu53KY",
  "key17": "23K6dAFD7xbEEiD68kJkASH8D8krGS7Z62nfZi33BbPwfLihyL1D1ykTYeQjhLVpuBnzeHSbhfqu1FMSRGsVSUWv",
  "key18": "f2VqFcDgQqimmzBgUi5XHqW4SzhHvgHmMN1pW9VhNjcF14maivY3wdb8oRDQCNE9Ww9mFD29CwGoCjyKobyRXRe",
  "key19": "2pcvQ1QSTpuML5fUixYvQPpHcaXR2Gr9sqJ657etPMaiWMy839SQHQ4Px5nHyFLug84ga1cKSin5dvG4mRWR1mi3",
  "key20": "3qmWrQnNxFAuBxQmfEDtbVxz3c41gEBd5UAoty3mQDf5YdqVnmsEWxYFNy8ss2Jn4mRkwktefGmB8KeLbHoZPqLb",
  "key21": "4592R1XEk6bMCaaghJcYZjwVT88PBJ67iZhynKt5Hn2QNrnQ8P4j5cmC1Uw1dhN4JBzYt2HzchA9KbcBKGPD6Txw",
  "key22": "J4UnnPAnuZrLzvTFpmH8F1XpUotYiBcPXpMWictcraWmeB9uua6p4QYPuLPTYmB6snHRX2UpMZH99r9GbFrwH2d",
  "key23": "sCxfGYbdt8koKPq1xG6gehWbNk3Po6oiniEqobkcWHVKrUFsESPSH9vHGJP5pTyBBXdeakjva8Jn2txByoSf3qc",
  "key24": "2sYvZ25V5sPQ5Viy4gkNjvN2LRbL2DvP7RA9qpNNFpvZ5BMJk2NhXEyYRgwFXEMVsA3nCUtq8wXEDaG1dYbxKGEC",
  "key25": "2L8EJMqKsdYJ5zfm9JBTM5DPud5ofuQPgHrbHVwc4aZqnV7oWeU1hWGwwTKNdZ1WGJ44riyrXg7EdV4NoMugAD25",
  "key26": "5gEQtC1Jv77Ur2NXTxkYXHpqcCsSXZLxiuuTqS9KFkZyA77fRDoa9uJkBC2qB9mvunG64XqtGBb6gRjPuv3rnSpL",
  "key27": "3i9qaxvG8SXmqx6ghu46BwcLGP4sc9hujeh1hyVHyDuhDjLuVjXz348S4CyXbEawq2QSRqgQpS1FPWHvfYoBB3EW",
  "key28": "2W9GTDNDnPFbk7FabbjEvsYsieSyWNctwb7NzDE6fJPULGjzkXDfwr5h1ZJbiSVoWfmLePBjEGRNAJ9Enj6N2HfH",
  "key29": "4kkoCq9vi9MxF2hWc1hFJn66riXpW5mSJvVBxa9XvPEmi4oYQph5LP9wKBU87ro4nSsf5JMwgp7YZcH1DtmskmvN",
  "key30": "gGyQSmQ2yt6KqsyVj5oCmW9XpdPRe3S6HJ5h494TtYuqS1zHimZHWbdvebh2RBi1LtbVnetbKiGG7t5ToRJdDCp",
  "key31": "3jqrWNWBCqdjYwhEpyntoVp3wsvcu3K8U9TUtjnWWYzxVMxwq9eZroV8U1XDiHfYzVp1Woxmi8m5c2HRH2LxqTj",
  "key32": "2jJdVLKZpD8ojGvQ9X8jL5tLKD7qyfVLHmivcP7ACVLKTFzQrhWamGwJQ6KpDHCiJJ541Y57TSDF8eBd8NJctfPP",
  "key33": "4sSNeT4iA1WXFpdSSLy4q1hgkyJtL66WjFcjMW5N64eKXbwD919WqSvFPVJPdYeSEoAjcbRm5Pm6dquqhkzbfmDr",
  "key34": "2FY54xXvVVruH5fkwHxxCSJZsW53TPGR2NP3Fn6QxFyZHjXq8TQ3EQxZwvHW1uk39oQLYeKr3azMGS6TYXeHFyQ2"
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
