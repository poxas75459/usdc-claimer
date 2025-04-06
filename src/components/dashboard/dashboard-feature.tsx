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
    "3Jdw2xnLQpaCczY6tM1iHFpZacSgNBCqsVL6ETk3RwZDjuv95XdU47djeXk49EwSo5MCtT2WeLzmoUfiMARcTnZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57GeLUDBCVenMoJQdF1zChotTCL7sCWJ7TXvb2gTmKEVUSaA1AL7wLaBXiLaYaw921tbKDuvukxjKBvUMRnxNp4i",
  "key1": "597SSF4R5cjnPYPbMbr5XFvGDPcsrhSYgrLXwPeDSLvXyfT3vhT5Hvd2V28cTfgQd2ytVbdwVaoAktdQ6N9MG1JV",
  "key2": "5AandyrPpt2Us2B69h42X7GCEEu8NHxxBjkM79bWZyri1JPZnid7z74SNhwN749j2rkCeqDLgmimAZJLvxKywb6p",
  "key3": "a3vU5wD6eMn9AiifHfZQCme5i282A6VtYsxmnC4AHRrwVQKcM4Aiv7rsiXwTCWnQLpmWdFfFSSK54s6NfW32k5u",
  "key4": "3nsHyN2vyV9x9AbAjHoH7U8MhNPhgF5PVhxTTM9GU8ZTubr6HYcocvfAd2ezuzj3nhcbDY3rbv4XV9L2Vsi8kzJ8",
  "key5": "5hCf6V4aZVLtkw4mssB1SzjgUNBWkuGAK2R7iydoeQCnmgXZVQ8nEVmQDDYaUA3sxz2VbQz8Ko5gD4h3tfCkj1XE",
  "key6": "1xrKArMyQZ2hE8PcDtdPCi2QacNCvYbUCsXsXAqCiBfwCiAvQAXp51WTbcHJJTzFPiVwnp3k6DwGTHLV8ikwUiX",
  "key7": "2SJpXhmUEaKd29XRXiF7aB5MqRrAbHqGuncC9qUNNKrzNqona7eYeQfqn3bGJ3fJY7pKcLKzvwByLTphtwBs5cUi",
  "key8": "2VRmQhaPj94a4CoUEmoquey5BhVAHHf6Z6vKaug8TLJgvnq3eMXi4gbLDfa1nRwFJv9sf7Pysbk6FTfvJKak92A4",
  "key9": "3Asp7qiQuTcZegztab28r82VEqVzffc7Togs9XmMhXtE9RHtfBwW9E1b8CHQ6LjSLWkZDhxacdXrgPGV6imL5MnD",
  "key10": "5NaumvT3MDXUkcMzwZYLShQksCYkd3db8pVtjVHKw5PC1ESjY3VywtSeRNkFE6eNKF7srpHPFG2M6nWtpWbhLqaq",
  "key11": "2wLcN4tUxf1HSHeQoqnAt7NbFr1SDkxRoQLD1tA6tLCLj1ASqKD6aRgYm81uFtr7f58BxTBmZKRcDXv1vodt4gdy",
  "key12": "12VKWaDdb7ZZrRvSmnHiUVMK5dYf9eAQ32xSjrRASrELMkXCFeiL4vYBrNMmvFsZ6DfJBDn1j5egdCWg439wEG1",
  "key13": "5yc96FQ17RmEvJuBpeqbZUVLDCdEYKQeFySpcQqKnotdDHqkxCaknZM5uKdvogcLM6528rjAco8nShv6nybuq5A1",
  "key14": "588Vde8sS3aXWHHVgzGxvYLNCaKhvR9zDUhaQonZZUkQmFrjfRBibuagkj4TqpY9dtfo4MXoafJSTGum5cTFAf9n",
  "key15": "rd399EuuzE2GSR6i2tuNW4S5RkKK1jtb4rsLSdPmoUVr3CyvAbuoik8w7y7jZKrFBwty1jRPX5xJCCFDrn9dE1X",
  "key16": "5JkhoZMwWodM2HKtq1vWHebSJj8N1PAm9TbLGt4jz1z8awRH89TSwaHzzJ3UYQ6PLVXDZG4bLmANCLYAh1rDQ9bo",
  "key17": "UwpEv6LrxS7Q6ZTFjKXkTj7UAoZVi52NEg72aHkPhXWtv5LAurD5kfviTkSiYnG5mNMc64ZhzTZYRHBwx65bKMh",
  "key18": "eRrKBvM6C68yCxatj4s4yFnUnVi7JMT97yNLnDtXnbpp1EBMZS3dmYFKvUUZc5avTU3vjL1QFQQHim9sQm3UMDB",
  "key19": "4h2z1A7Tga6EHMyUdZhK5arPBnZfhR6DzAif3dzce8Lki71ztADtGXBHSTHmGWbrzNe8b2ADEft4zpmrNmZt1YUe",
  "key20": "2rCt15VBQXt76dqUZWzD3cVm9KcjqhpcWrtyo6eW6Danadqz6UEfXeoQYDEj3FZpT1MnnKbx3g4JUzgtzzk3JGB6",
  "key21": "3RaCPEyMMVgG42htJqtsaEkfBJJiAsMFpNoqAFXeLzoaf7P2edWEnZqY4kaLGk8ofqhfULEKgPx6xVZMRh2Exwz1",
  "key22": "3uMdJph1UTyHpsaZUTiuw9FsS7nFg5XKoTa2vzzXopUURpxHJhPuTt8sM2g4JbuCi5E9hSE3zxuURsScBpV64ieT",
  "key23": "3RvYK6DkLuyBbjUHfumqpcVE1VLjM6MoAaxaoLkwAvTvnkJJ89CP7ktfqgJpUxhLsnmazUsERR5jxfXA66SNwCiA",
  "key24": "2Dtps8HPu5NPPuLC8KFrGuRXW6SDU6nfVJjPLbykrVPev9z9aWqF1Y9e3BDagtWPUdUVMJc1tViXKgZmxQ6tw7ZM",
  "key25": "TBWAMVBvfggN8iJDZAx7vUYWz3sMZDtGRMgRdNbNrrAN6VkDbUagPQ8tZPdW58UizNnNSBFKbviLTCD9xwwduz6",
  "key26": "5vtn87CRZxjfBhY9KWz2aXCarkNwkmCey3mtAgX8FebdUi1rnMfF6WSBysXjdEmBu9A1kE9H8dTzxjHa4haD9zVa",
  "key27": "5B8oVicBEcGiEDiTSK8rUUoAyGfqxpqFU6j7bhhE9yKxzmELaMLJ7hNL9EriVM5iZGtqdtMCKbGyCi8RqfAkdjpq",
  "key28": "26GNALcX8qDMBiJzbcjrwjmGmaYnVvifCxp9ebkAHcjwxdKdnGydtGufbjjgCqh5Xc6AEoz9TVeuZJiWJUmefJFT",
  "key29": "2nxLpLftHcFpWkztdDm3qFHeXceqb2fJcSNjtXMMfS6zXBiBb1ZgsgXFg9k1NfSDcdTYeLeKnDFRumYf9u6JAAwz",
  "key30": "4jiKiSgzgX7J7ms7CSANn4WSmaVGXr3iQigrk7wuEWgfQnkN9FCsAKtmgodDCrdT9Us3FmrWvuVjChCkx1k9um1s",
  "key31": "4thJqRByeY35At6QfCYZiLEGtdNRJM6raRWstYTCPDS7DNYxntZ7ZoQ3HgaZCjfrS4Zm32qiiD7vKXzdtYtGS16a",
  "key32": "2MiCVUcB6U2aZXLUofUAwyX2hvFMy2GPHAZB9WbrDjpeYBQogsjehZvTuvB2p4qNiUwy5LrhQD7GjG75eSMRd4Ej",
  "key33": "2YYuTrkCKJPXpvgxsrmw23ywgGuQvJXqxiWLjaL4KvHLi4h7VdatGN4Bu4w4kTP1PC5MvXxoy9Ug8cFhzP2mMx9",
  "key34": "5aFGGw6SrVCBscFaMZMJKYxbjjszrWTQWzpM5FMpnbfBAjLkkiq7rLoUR2nPCN7C1DKgzj8cvNT6qwuzEh8iPLMm",
  "key35": "gep2skEiCpqFgeFqvLU6B86NiZvcHMVKFWfDcakYkzpeiDhSRdtn68Aqzo1vkoewwncnteBmG5m5HkKPPbi3n1T",
  "key36": "3JBhTDEwzyCU6tcZR8ZV8NmW7pbUthUQr3yaaWwEcaejE1Yo5i9dxHcFSnfUZTAGQAALj7iNyEeeSaE15nfUHAiq",
  "key37": "F8ZEVfvA8AptB1VbeYYjhQF1YBFrHtQ553vhYG74Gxc361oddkrjicrDUX8KthxQ4qEJ97MHxxXG1Rynv31E8h9",
  "key38": "An4dWmmyFFpJGNXH9KuTnvwp3228qwsG3vKcoHdyWMw8jDDJ1CyLDD4tg469KXQMJ4JCa48Cmsyj6FqTcR2sNpA"
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
