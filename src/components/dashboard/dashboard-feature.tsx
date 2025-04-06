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
    "2im2uFEXSnPT3T25e2aYseq3PkMdLfoxxUArbeF65uZyNeqQVUta4j53HUtnK1tVXJDip5GRVWHrKxHu4aGSzDsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HyCjyCWjS1eakRMUYcrAAyTY6oP33LmnhpkHMtTSMWSFa6Nh8gLSk1YLZGwwyxAT2i5Qre2qqPer4GnJUHx2V6H",
  "key1": "3qrsAAFUarqkcLrsT2pcP9zqbVX8DL19pBSvY4rmR63BDvQFHFx5sLdWAs1VjgHbCGJKboh2tFkVLikcZsSyaBWR",
  "key2": "4GRroM8yxdLbP4ojvc99tkt6WhBYhaZiSYVwvDSQKL48havWZPcUHzkdRZgau75y1tJgR8X3bSFc338cQKaBJpo2",
  "key3": "33KRjXEibd5YSXaqVwEWFPHoCPErbX5KYGxHBCQgQC6C8HWJQNS8UA3HnqF7BNk2km2zWb3Mw1datfPzmcNsDxMU",
  "key4": "Xx1SxyYMCMk9VfWKAyp4VeMZCRM5jimNWCCGLJU9YM1JLtatLda9GDUnpr2LxkJ5MjMjrmt2mhY2934cQ1EbfYM",
  "key5": "5XQDXPN888AuSNpQxQejpjPjE7UtL3u5kVNpxuBgzSv2dgSbQF5cpCjiHYvdiWgdpq6p6CWQkjjSa1VedJAgQ72K",
  "key6": "2sNHVodRMnni8XShufRLrSYDHhFJTbSKjtS1Wf2GFSXFmjnfAT4pGLyA3yKWAMB3HNtBnLWZRczVvHsVijrkKcte",
  "key7": "2PapVM9MRhEvjqyd8ZjDLbt5gPVHD2Y3A6XU9VBbMS97pYUyz2fkneXUJVxywDT49aPU7d9izSyMBJKx4fJBn5WY",
  "key8": "5EY6HDzT3rcL2sTPB9PNw1Y4eR37rARXxbRXhMzDtBjB4qY3g8foHBzcySkcxMKYR4iLSzfJReH5NaanAs55dkX",
  "key9": "3e564XGDSzcSoVAz3fV158nBRu7m21J4M9sbG192Bmz4Gvt7CDKgKdHqdcYE5kgBCm6DZg5DwiN8QDwK1TGScvzv",
  "key10": "3nr86YkjGFkEGmRVMt26GyYCTX8D96F2xi5QGN6H9pWMvKzSr5a9w1tBXXGzzjJuHk8x3XkzL5dm2NbR7gvbj6HH",
  "key11": "4TQGvBzkcf3Yt3oRLDpPDEZfQ4yPXamAd99sNURrnu7iNUfbo3V2Ce6pbksC8FqvVEKE9DErhvCCk64q8ehZqgtC",
  "key12": "32gWuzaM8gmGD8HYW6AKhD2yH8hPQmqJBSAFsZzoinvCe42kqKZC8yxCBFkbCXjQbQTk72SEiJiEd7p7mPRowi3r",
  "key13": "4p9VSkuSooRk6gCv6WS2rwaEUbJTwgWFHzY6R8YCMX9c25y7fjadPyK31ezZrHN6FAsYtbRNQxi5n5BmwbjstEXP",
  "key14": "4LEsxyhVLbxGgfLPqkJrkGymeqJbR3gHVQEjBfxR4mtrXZyC9FbCV7hB3HjYb49SNkW1WtQKMaanMc2cHGjYxdCi",
  "key15": "5mCPx3grYQ7ieuSHiqgK7TvYQW6eYmE6bCygXohbbTa9cX4sHaiM3XsSoipamdGYxWoixEQmD7uabCEW5awVGhKg",
  "key16": "2AtWAJicsj62UPFfVvDNUwvGyVyNfY114XAonVKBXUVBrm6vSnCsqg3JVVXY27JhUVcKTNb33qKsSCbgFNcccBMX",
  "key17": "5gCqiUGjL2PLW5bHg1JuzZnfgVtSFCqjkvccrmKjMEdADRwdnjcsaVkoaoaqNbWteSyrjNbkPpVHnTBYvJ1VsWmU",
  "key18": "5Aai4Bci3jfotQQqucDCMurUGSgNbrB7fuweWL7bvzjSpEGkjApJ2CefdsRYFFUjShoi1LNse1ccsu6yMzVVxYwR",
  "key19": "5Fe663v3PQtF6DdyCqdLUxajSZLrHXP643Knkuh7FVdLmgbP2gLTecbqvcquF1XycE843QPAbER1fJApH2HsVGc7",
  "key20": "bvWVw5ybqYgZLL2WuHhTGZ5ePWLcDtC34vGdCfxHfvEL1EvnpNaPa92eAUtzYrN86AZysa6Ls9UonaV6NsWjVve",
  "key21": "29XS3ew1dej5uzLMKHyM677xUTvwiWgEy5fKb6TWiRK4JownWAzwWQgs9P5CTXAPjVkpcHNwoePosVxLvdrcsm3T",
  "key22": "3i2xq5tyxDujQyPQYXQCp9T7qTCke38Uh637jU57MsZSMqVKFf1KuN8agaGgNSfBhsWv1bi6rWhj5sB9M2ESJnmx",
  "key23": "25BGDdkJQNGgwqLMgqQcxKuR7hu6dFpcvCixC8eQqcNQwjAqK3vAbWDpZ2Guqi7Fcf4L1ALUvHbLat3wQ8tM5ZGE",
  "key24": "59ZCcn6y4W99tjQitUdg8vr1dcJScNNBKqZiDxhA2TnS91Sxbauj43DQQstr9o2xDVbp3peyEthyaeymKPwLu219",
  "key25": "4DGowaTrV3vU2YfNT1nxBDcN6cJH1JKpDkmnT5P7G74Fgy1U2SMrzxCzLSoCLyH1CjxapFmVX9pQvoqgzFvMcXyG",
  "key26": "4dAhZWXxVXKBGUqey6inC9duQzarQoup1KYi58W9AB8CnRAU9dr262mQSX2esNnEkjaxDKzCXtpF4KMDHguDLRqB",
  "key27": "3puLq23KpWoNWehzq6t7rSmLxKXkrQ79Vq51W63fB2H7xXw4YqmMYPX272KZJYuA91bBEk5ZWc4bccFnUib4RPhp"
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
