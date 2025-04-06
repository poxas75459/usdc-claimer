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
    "3P6hrwjrBRZ8asK9CeZAAkLt3DDWk3ckiPK3C9965TxKXyVM8FUkrKuufq6Gie88rJyvz4kXV25ueJqtYj8H8car"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38dY8UcXJpdVEXtTxGQkboNVj6ScwGwpF4da5hy3bhyj91sk2XqZvhL6x6ErDGQuTL5pAS8NVimKxwfhSg8tUAHc",
  "key1": "5feWrTyhFabb9SzkTUeRADtfkm4eHxKu9DE3F2BjddZMaLM2RrrikoiZVi1HU7uyJBtooKoQHEoTkem6g1KevmDf",
  "key2": "5PikqZxvwTyYRgmG87mT7Q3eKcqyhkaknguyrWV8aoLGwLSxJBrsmvc1ZsjvF13TjnNsEK4qDXmWt9HEV26K8ftS",
  "key3": "2o2V6CuXHNyCA7jsDDNXPcMFURatywThbRG2ZG1R6VqGRvuNbfJyFuFXnwEw44tdiiA1So7K5RD26z9R4EyB7YTD",
  "key4": "3JeEfVPXdiVug2a8jZrwpPcwWehqjdPuxkhhPKdXy4zGZA5V1t9BXwaRgvZkT1Nk1EwKKAUxUQZc3DSLjtMcpmwo",
  "key5": "3eAP7cr3YAVHv6qFqzJaGHXTXiKNvgoLVtvhY2zoDd1gQZqrzJYSXJzuiT622dXm8gY23qbLM7MRtvNfoihX5EAc",
  "key6": "3MDq5RrhEZwzVkXz3rDKo9nXTsTgdPa56gcUmCKnZUDzMbCDNdgeQ531UTfZfWXf5osba2NMQjybekZZuNY4jgq3",
  "key7": "4kBGE3vy4Ziu2mMbNepLrnzg55MbJyt2hXAUfwhYNhaPVv4rx61NAUwirwHQaEuTXqfU7ybQtQ2Sz4NSUjuMSpvF",
  "key8": "3UFdbj29XxFNwhc3GrmSPT5FM5q2goHNwm2vTFJZXduoNEeQbUrZeT784e7h2HTzw54EMwWQuwxpv4B8jpS2a3oc",
  "key9": "No6ufNdHqdCLfAnyHCW2aNKc1FvRLNE8PgZkRLFVVEN7HLRFcGoPkCUzNghEALH2MZkWtqnAKrgb1RN8jGjE1TH",
  "key10": "3AWoHmNza5EDMKWuu8vie2bw56CsEqgQJibPp8qwU6jiwWE8kAEzsjmCK2QGm1w5iGz2vMP6KFJzaQCn9B6FMffF",
  "key11": "5FhHJ31piZ5iicLxaUHsWNqm2fwNogj8hQLDCoPtLcESDwCrNwYqtbv2nmtwmDPR9fRLXUuVLBk6LbbDAQ4acCmm",
  "key12": "4KnHfYu6KijxnfoJWkoULzroYjNFr1KGeS73taxBZhXYeBT9GWmFxJSP7yg3pSom9kfsQyEXkwKUETfJcshrUr1P",
  "key13": "2PERwFA7piAAtbAdfoWVB7wf6b93LCefKdDZ28WcSmU4hJFNk32P5uuWsbsAVedHEhB7AfzJcc8kKQWt6MctiZfz",
  "key14": "xYULf9AiguwvnCRjraLLPpmfD5vzKqNWVjQCwGTtNqwY9A9PpEGL1idsp2QJGMs5v7yfDnhSkXrPrGtr3CJQrhe",
  "key15": "2txxQDzWcbVSbo3ZX4EEkZhBhwQUeyTzP1BiNaDnb1iaKAvp47YyPsTcCc2gLwz9dE85J5eCZKDaXuvHYH6WU11c",
  "key16": "3kMpqjbyQv3PvGf9t3u2FwJCqCyWi5wycjFhCsMVtGKhpH5zHR7sne2KpjPy3E5bT7e55pvbZK5CgZ47ReJENJTC",
  "key17": "4c6EHTqkrSCfDyN5wnBfGyuSWJExYqQxFjH3HajfngyhQmFko1xyz42HAKPiJnNU65WqVJzWK3LGEVFz9X2Z6Xuv",
  "key18": "za41ScHoRSZM2cguGudD9NKrm9qhu31pxe4tMnKLsM48RsbXeT6HfS4TdUkf2skmPbUjxYD7a6XqHQs8MzQ931K",
  "key19": "5wTcwt6LHzwe92nQ4UPq2RgD8vY69NaKV8Vb5kL15SYtJhMVw1t7Zkfw5J5ByCgDWQAJJCFfEUff3eewV2JCN9G1",
  "key20": "5YZrTboDEzFuy4onyC8nz2cLsBRx3f7JWZ2yByKXho1bsGz5L7iU3p2ryyPvtZeGE3gJNEKVbmgEVmGEt9CdtFZc",
  "key21": "3pAuDVkiQKsjUK5xCVpvT6usWqWbwRqvgvCskp62PctxNHZqesxhApVrmr81NNKUkwWczevQ5PLw8d1rsNb11q8P",
  "key22": "5V3zvzC8qnxXEi6HEXszzuM4v5mZn2v2sNk18S6audFzmLhnybYYZ3H954E7jDC2vZSV8DyLZM14tWwScw6sTobY",
  "key23": "4pfkMXMRrQbs7bprFyXWecp4NaYFwoqiyimYqUpbsnjMu4ApQtHoKtG1QkiXCjRjnjRFyU9PVuNFzpgfNKFm3FJx",
  "key24": "2bYLimhdeRStLWCuVaWvH6Eax6ndu7mxTCrv3Mre4A5HKBHF8nfZYXumRMPHRN5oLYxR9HDK2MiNtMkM1o7kpUoi",
  "key25": "4suwWYHECn5piEWDxie8kHNfBp898RnoGZvmYRjjgkRKpTZVBVkUzUvAjUagt9mTiwLchJCPNSvqAu6ypfpxcth5",
  "key26": "m4xDEkYBV66JS96Sfq9CjUeaAxBmf9dgpjFMdCA3L4Lb5zMRbFcr5SFvLNprz6bwT2MSzePTSoyALpRYL7Aiszp",
  "key27": "bdQakXv8JHCVKmJGzWMF4DFCSZPk7eVwCbknz9b3VPrVrj19B8cJkkPWrQ36qFU5sExHAwQJKE1P4o18aLh6yKs",
  "key28": "4gGNndb8Z3G1oaGe4cF1HFHBgLNN6w4Wa8w5NJmGrKXjbECVMxenE5nJpGUrDe6PCT34ocd5styFCwHsoTKGzh6Q",
  "key29": "5sYULA8QZrsJEqZSDfmJiTbyMFzbXPS84S3wfmGf3P7HhLG5PCge9ajRFNk4V9Dfq4L1fjBbFWSfHXERepXWXrc9",
  "key30": "4pYWu1dEYChZPoH4pyRbbwUsG5eJW2H9BVwuzbU19RqdEu36fRMNwLztZF7kKrisgLtqZ4h5JLz5SFikZP8QPf4Y",
  "key31": "24FqcE7aMfUrcTLst4Ts7njLMP3diRjd7JSmPSzVBDncwjzEUWwBfx9JBmEUbSkdukBVJe7QKPJ6tQFficaPZGBh"
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
