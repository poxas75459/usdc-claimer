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
    "5wFP9jfYJHQPN553uEFJkb1Wf2njX7bezRYonmCsB91M4RVHNDMBoJMab6jgssNUzAcfiAcDhKE43hU12u1ZErbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gBXuXBJSYBw1jakRYQJuQudZSChaduWUCu2a5DMEFj9AtCM4aVWt5XXHW9rMGNHCMLhHyU97uVmZAmv2c8Tn1Sc",
  "key1": "4f1nSDBkfuj86Sr2Jmwng8bJXBVnwTxPWy2yrLAUyMLq9ZbXmvL8P2x1o58cp7bjCKvXtstqCqrp1w1XX7W6fCo6",
  "key2": "5dSo2m7D4Y4cBf36g6UYf5tVT25hDjg4X5ydFpvhfZoh6zypZM8B64vvVTozw6ESBznCoTMU9z8kTRmZXDQtrNNp",
  "key3": "2e67mwD6tUS6AY4L1RdpvnujnTHF8vm1nkNhMSVeRAUfD9jWpjXgQh56RtjYWbNo6EQNDmo1KkydbQzAciF2dwp4",
  "key4": "5s2U6gpFKoz8Fpvi8QggzTLVRnwpooyeR7nvHoKkb6BJYM8sPz1mTPpFejwx44JbQDajiozff8UaiAX5NonmcrjR",
  "key5": "5zowKB1VZqechpMhLPk6UyqbTtveYHdaMbaSCgcfJJjT2VZETjF3BZzFQo1qb33aXcHfJyzMt3JU9o8sPxz968AR",
  "key6": "nw3mB5ru9sZgHRWSE96v2TCm8oBmZJL8VbEtfA48scjibL2YH8rpeFDpcB1k314sbhahX9z6zbePp5v5Gx5VLws",
  "key7": "2JJ1or8jNqHwfNEGsnCA9j229APLc5jo93P95fSa6nSszvm6k2zTfELvepYGAAFsihX4CfonM25ce25pgaYtHKrQ",
  "key8": "5tN6iFe21rNvNkE2grFS7R88L4geuiQqFXMjqbEHJfgwKkopaYfaesNK6dgd1BagSD9XfAHLURzA79v8rpMBF15L",
  "key9": "66QsgazsJ8Y4m7NE4qyQcApRT6kBFzrbbDGUjkd1EKZ18ZefgjkrFvjtLKe8snXokLZh5bQwSdaGM4zk7pbb9hvS",
  "key10": "5scP2wBHzy2TRAysNP3npgHDka7ipCpSxSDR4K5S84UHZZk9VNaXQyDu475npaxYpETVnSHnucEFWFUrwbeezchE",
  "key11": "5VaZZfBSSjbspZ6FWKygaisGQynMMqzRm7YXWwJh9PKDtigzBijzyB4UGHARRYejtmv4ghsEhJTeTxFZ88EaZXP7",
  "key12": "NcmzicPwaVUuixSc5thkAq1oLaKtXgM78MVswmCrgX7dB842VTTvi7ZkB2xeXM83xhFRpWn2DTZRLhVbXA6vHwU",
  "key13": "3vGcR9iJSBpSjTVn6NhUKqFFcARxCqgn1ZFkHNuNHhyn1sKWH55GF2JPsnE9if5qQz2thwosuJTDhoaWzqoBb7Gg",
  "key14": "2UzcvmnhMniVrPERJYWdmgVhNR4nwSszizZMRwhJMvbrb2xgMb6y3vcfWw953XoQSZsbaAUx669MSPCGdvfeXxgF",
  "key15": "33opdHMPL8GapmpUHvsTPrQPWef3P3gvFF19XF3d1dAtqABZKXK3K9nYfUQh11DoxxygjrdMMxUUDZBqpLz1WwPb",
  "key16": "ptPxS4sxp8KQj9EVoa6KtMxp3CygdZ2JaHA7HzyqLKyy9DMk9FYQKj2h8tW8vC3GQgupji5ZGZDZPPf3QzojpKF",
  "key17": "54pPyJDr1zhFDL1rhvKukVCGdWT6LT52kvkHFGAi5FtNNCQtcg6nr9baxkDMNfT7Rpo3cbqb5m2FMewHdRotGFTQ",
  "key18": "56tLfSsSsthA11uv6L9Bf9TSnTnnRuooYJxrZ8H6LYQWcKCjw79YMEq8ERwJ29oM71HQiYmmk7srXS4VFN6ocSnu",
  "key19": "4jQrJoGgsDRdcqkmwWj1qzdom9JrMbBU6D3xU1CZca9P63zFGvqt9T8VxTM5UrRiugnsaTb3xTWgUxhEvGtFxxES",
  "key20": "kkfUfozm3P1c2WwibVo7KHtzNUKkAXfSvwbyv2YUAthBJoZwVGDtVMgMbXxiNvWdkuPbxTpBpJjkqhLkVgpAVn4",
  "key21": "44ZmtoGhC496ADNUFLVg9Jdi64WBLaUSv4P4RG2fTfQgpiVvTGksgrZ1vyfB6EhckhBQ3rncwFPtb8XxZLhbApXQ",
  "key22": "5t7YLfR4813Dt4bG2LnkydjuofnFT6CUjeB7V3WvrcAZqQPSpjTY2AXhsduRwVvPLjE2XaVeWGH8dRbjTqabEqoV",
  "key23": "h2bhqpYhRkYutNGTennzNSV5gbGYefKTxWUVJxDFu4mnX8bZZU57Widj7W8V5GrYX2xzjrZNK9ffi17ACwViuEG",
  "key24": "3mn8yWrZHokwXACZtuK97T1JENUXH39rgMrpnpAR3dgbEjtCeZtxnBfZCHgNeThYCrLJBATWZ3Mg252bKgFNSmBA",
  "key25": "21gLXeq6hHLqDYqg3fskWjG1FNm9kzapmrqjZH5kUPu4g9KVQWjRLYQTqqL7iHV8QfwdcJfqTNMDb3CdrdPN3wTU",
  "key26": "2dyFEUtKQRmuv3CRjZNdPu59xAPPbbQQCuj1mYxjAPdPXn8eHN4juwNFgBuKnKhQdQqAfhLDAhTQnwTgaDajme9q",
  "key27": "wPhfWamMJRzcNR8cU7E6WnpuBTNDVEuwUpPNC7fSr58TN5NRAWgUZUhUjNay5AEZfHLMpHDrcBfiCyv8QQBMY5h",
  "key28": "ueUg9Ekxoa5WUdkWuNk5UjgkVSvK6zAxbdCYVSZNzYfa9JHbPpA4eMGHPqGLTNr6P1kMQKgrQ32f1dnGe3dFRNS",
  "key29": "3YgZCbAiV9cqgjriY7J6YxRw8QKtsqzbfmc3U5pg9HTNvdNSkehwz3QfbBYZZpJrk6QjVwfJeJ31dSu7BG5ozA7v",
  "key30": "3F8HErTrjL74W5coi49LE4FWxS8Q5AxC11AcXWNQAqYVAtF16ynqsgpZjxxZqVdrgkxSxgjk7YudMm8CE9XMjcQ1",
  "key31": "2k3wmFBF6w1hVL9YRDztsE3KL51wVj9M6sGCxiNXSqRRD3JEzKfHR5ad6y5ZDfDz9vWEFCg7FPXjvgrbkDa8xEHV",
  "key32": "2Djtgfu8ZmB6VbYsY4DNYnBHrNKRiNpeW6GxeMFe9A19MPATkr9DJDE9t9WoQAa1WjGosWksqFSDpiU93pckCmFq",
  "key33": "3udFxgzsWpW5ZoqzLjUB3ZAuco2U8bzNLyi3yszAUkJjDnKRTmmjsGgPRUQcqi4Zxn6f8EuKKauQ68isXe82tNYb",
  "key34": "WH6iMSVJn2PvYfYYrjVUZoLS3uQoRsVwipV8tfHwP3D1tRZXpvvoEKs3T66xywzmQ5Ny4YA8zC97VFuhnX251Lu"
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
