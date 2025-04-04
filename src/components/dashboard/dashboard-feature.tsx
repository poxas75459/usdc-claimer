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
    "5v6hmNS5HfDrRXrrhdJKZket2BHeTVL5TEK1fj44465knNXiT9uPRjqSxwgHs2kotrCsqZ9RZTNfrdSijucJGxPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VD2K73G2s7fyRsfcdkx884bqjdnceDtsWQ135NoamyxCt3iczHsoVRtE4ZJMnnF7ss1uAyWFU47FoLT28bWMpvq",
  "key1": "YFn3VLyEPErdJ5YdMQpUrvBm8kwnZzqeoGSL8hqixDkw9CkZMJrVPYLL8gxWTxoKvk9VPtXmW9pY3EsDSGRxdjC",
  "key2": "5VC3DbHjpZEE5Z6L5z4AGtgccqu8z9s1KMED3FKYQSLpXk3oJVV8rJybqoUmUUFV9ijBFtMg52vdZMBXmkYUr8U6",
  "key3": "4oT3RfeF3ocPF951i1KRuZEUwqEhEiUA72sPZnie1EAgtSmHSLLrGK79JcQVeuJRL5HztC9bwAdau2AcUnQzwAuv",
  "key4": "5X1TNekXeGvnhWZhxKzVz2dxYqjKBojSYUJJBEG1Xm9uTicRv9d5bGoyushWTbGwA6KxyXxNFtNiy6nG7tqug8XR",
  "key5": "5LiVhjvCsPViktQLVj4xRPELzgCW7DVf5c1bfxwk3UZxazj7HSx5CMRQZdugnUtbvGg9sgPZwmvAreb5hSG26D1",
  "key6": "31E8aSqdnXc9NcuTHLCFjLdAgcH5hodZueXB9Qc6yE69tgcjbu2unuqmNK2K9JqxZgYnJyp8TWPY6DfhmqhV5wUv",
  "key7": "33LGPk61SBUqfyNqwpL1czirXrVGBy2v3jLxcSHgqzaUhkxnkVuhvtx96gSC2rVgiaGoYZbwt4kTKG3iFvQ4ksJW",
  "key8": "4Dy1XyLUvzvHKGopnwwgoHYvsCMyP23PR77SnVWtZBacyYQPPb85Aa893GdRgncg9ypjL4aj8B1WhsYZwW32A5AN",
  "key9": "2kStjYRJNeruS8JtWXn61RrXWzwoLZfX3doPcXw36uGbXVHxNFXxMHF9qchhwzDLpq4razqWa4sugnsG46zJwAx2",
  "key10": "2WbQTGQ4xuTVdxFCbFogVQtutCqspwiJ56jYUXuW47XD4t3MqBzPzJj4cTTFJh276nDJJo93EYQs3iTk2cZwqvsd",
  "key11": "5Np2g1dLzt8hfgA9QJRJH7VMPLyy6pZnCQug5otw2wNy1uEi8JnXgodV7sTisic47cCXV2dSEAiD6FLmBNxiFKxc",
  "key12": "2Vw7toU6BGHHPvXG6v9KFbYT7jv5xMpnrgVMJjtfVsuYmXrbthkcHtDLFYtqNz15cfNSzn2ur6FZt4CFAEKMMa7q",
  "key13": "2pc7JiVG7sRagP7tCT8WYVBR7YSEWd4nQMmBN8A6rpR6Ufe2JUCG36raSfT4p6dRuxLr4G9nJnhWJMpCPnazukyN",
  "key14": "24EE1xpsz3X2RSEaRpWGUSVJRkRNqEZHsV6oAj2Ph9J91JiM3d2BfCACmYE7t1yE683BT5GptQv19x57NMoXg6ze",
  "key15": "2L3DWzpgsApiCjyD7b3N26BMH7EGnXFxEuuoCHoeyQze6RZKRP1NuVC6CNaUeZrHkbUV3eCeZ6oxkpK6rh11J9qo",
  "key16": "5nXt5v6aPtBHLcMNXTwfenqXDhCWp7jvNqPiqYLUoTkVtTVgTR7mZmdzLnzXzEwfLpXyt6NKnu7tqL55jVbsWpWU",
  "key17": "2uqUR2Ru8FCody5YopAFovsctBhtyEfb4yymByH48ydCKmJPdwYtT2ZN6qC7PnkqfodA7NHhgod1gPvNzykxHQvK",
  "key18": "5Wzid9rA6fyLDkZDvPpx6nGYxX7KpKNvKjBzj1KYsVWX6m2bQaoFNv8oz78HjzitCohsK8fRwbGVkYoRBp9iXpi2",
  "key19": "4mFhRJS288XQo1c3HmMuxTDtG2ANNEdtVPEeNGdDRr9itjFx3A9LFa6B1d3Pv2nki9Gz2jT2q5ciyNrUJRy6VbC2",
  "key20": "3gCTBhLKUi5oB3rt6xq6C5uN3cSeizn9pzPxY3pmkQGfbVSuWbyEGdjSHrbHqhQ8bn6GVf3PKwqE8geLiNjFTqYH",
  "key21": "3PP2oMY4xuRmBLooFuNViGuiHiM2pxBvaXZE1VNLmiidAVfDhRXHxkcEDxMzucHvg3QFNWrEKGtqH6ZFRaKdYoZF",
  "key22": "2V3QWa5M8fc6CApeTjKNxsyM5ckdF5ERcMEzaU9gy721NQhdF7xvpfuoCEykcyUorEathXr2rWjTxKL9Cg7j95Z2",
  "key23": "2X6v84tRauNTMgVm4nP9nyewU2ijPqP53AURCm95hK1gxegVXQdxJft1G6tVBvhGCB9oAo7FRyL2A2v1mD25H65L",
  "key24": "4yaRaYQgNfzY7uiRyq8YpPFuRRoK3VSHQ9ZAG2vkhR9kvk4QjpDEQcuUu9GWenKzcQoLH8Q3RZ8qXcJR1UhV6k9J",
  "key25": "5SVdrtbJeb5PZCkyLzT8ejeqDXN1Hz7ZteJzfUgFN4gjkVcsKi5B2DpS9nX1v9Q5UfepeUhC5p41Umf7U6ueKf8u",
  "key26": "67ABhmY6xYLJ5nGAGoZ7YiaPT3SNevqRf4XUw5PBo832TbEDVAwNGAEsCPUjEX9NRRkmBEfrTbXMYVcAZZoicP5p",
  "key27": "2GxcN4cWJD1baHgY8mTH372UNcpJW8isAgdQPZeQXdFCJojjBqDa7iEraU5kyH8QAKqVFTrTFedohPrjHYSPB8Le"
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
