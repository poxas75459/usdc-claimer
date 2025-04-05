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
    "Y4ZCvRWgq2xHAssLRwRFk5iJQji9yLu6qxagFAUpEceUAZiZXDVEaRdHuXKzXxLHvWWd5PTjZgAj8BUq3Ah94gE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dc3T7coV1aoJxFNANPr3BbuoLgqVW1EvR4nr1KsuGeBraNyVNzhKqBbhKJJskNJEr1cJpKao7Ugtj8vg8MSMx3j",
  "key1": "CRkcqFze3ih1L7ZBdyD1m9Nsbkk6ja6peqSNpHs5pceHYw8Fd1Mfhqat3U2JQTo1WE3PFcbmy6nc5wA8deQZyVF",
  "key2": "2wmZqqFG5BhtwAuEAX7X96ERxqLraHMmKPvU52bB6MrBFtXTTTEL3QBknf7R7PcYsHSZpqm5H7XVCE7s4KpGENiw",
  "key3": "5mjaqb7eo9CrZ1jvEP1FhsZRCyAfwhAmojDiTfEAkeAdfXCPcrcmPAmPqiEY8x9mPZt9beenyzM8txWTVhVdRSpF",
  "key4": "35z6sD8oKe77yv6DhuDnmVhXjKRKb1dk8Dc3CVaAwxNzmQ4ZyrRAEJp7PYsNAg1vFQKhCJ3RiRGBJ5p2ZQTpAKvs",
  "key5": "4DiUx5AowUMna1JSM52CXGgG9V1KaSNpK4C6wumomCQLWmhrq6pGBFEUMgEn3bSVnmJWGqtNuvqz4tBhX4T3aVtz",
  "key6": "2onnDk8dtuJY3dEeVk9wdZmE7qLVQW4Zj6xWgP9Qs3RchNCKkwVzXWcUhMLZqA4QQ81YXFAkynM1LpJ361nG41w6",
  "key7": "3c94DDuxqz2XUezgu1bPAagPdu1uNfGBhgRYNMXkmGD6mtLa5cd1ATyaRrfdGZDGTuvh1VpYUE6aaD58nGhy4ZWm",
  "key8": "5ijzEXaankhgFpLVC2N3JP2xGU1BUHp8dFktkVEDoitiGmnXeqitBWwMGLnuGbzoFjL5od48itzB6NHbE9oMG27J",
  "key9": "5cNDGZDSfZF9hVWgy3AhjdrXEEdCLRfqJTdJxPhYJHppqEWC2wyKekkWExFuReNaSbg1BzgQa7prruS4UCX3HbtM",
  "key10": "9wYBd8aRjp5m2PjonhJVnjxTwaWP8QQHWFhBSP9AT6FdxeggjTYcCdAi4rumC8yfZn7URjP6qbGhbHs8NgRFPDF",
  "key11": "5AuHYFSqAb4spCrEEqP7UVtC7fqppvKyZfjPAcajUhakA97Ys6DQm3bpAiWhEbCUZPRjb5judQ8qu71krBSWjUXJ",
  "key12": "5FN3cnPJxYx4BYWBUo2dUKAvX1eatCZtjxyGFB7g11MbPM7N4c4mM6yAnicy7JoPRfuqDLejyBuRgyRjBCFLFAEj",
  "key13": "EdC7oB7Y1auryiZWajCizDcPfu3n4fpSErETipNzbnT6apUDfcWpa5bdvQVPHAfMEqKgoiBdUZp9uLYb9oKzM1N",
  "key14": "3RRLULDV3MUw9bo7npXVPUQxTEQvnfVfwuY54tmm4YSvf1CmLizeSwxGoRfhtPcPUjrPUb4ANA4AZdpPv5dNUdcy",
  "key15": "kz6bKUktaY4qA2wtvGX3a2JX8gWaEGk7exeWowQuzWCmfqhGsNDPEvBruyEmTR6Knc2cYVjho1u2tewaguNdxYu",
  "key16": "382r5RCyw9ERYXXS3CfZXRNaCPEtLG2ncNKHTtY2nVhiq7hycugGFwW3xAVT2Vo3rG3Htky5Dt5BD52DWaXr56CT",
  "key17": "5h2gf63mhnAPH97vSrXTAnDMExLZYKoGoBcBFHMtaTtMVoBhP3Tad9K453wLhCPLdPN8d7YaYwCcpXQ5CadQ9fmj",
  "key18": "5ak8A1XyUTsygHv148CtQKcQ4cPWhCBqqTfbxJpZLnhtjMBKSffnE9T5HS7PApKqyncXZh9jMXdKPZhwyfjjYTY3",
  "key19": "3XqB1KZ3yGXnhuETNhBwBCLCm5xsKGHA5YEDVnc2QVKZ6fX8h6sCnqbmLNh3fhtc3Uibka11Hzdqyb5sfjdwgCww",
  "key20": "5inFDCSYFtre2ucR8U7cfZQJLmaLE1s6g8CqKD9VB7CXQwfjKag32UQU2PVPdzFTXrU8vSYkRoQf3xSdvtHcUt4T",
  "key21": "3gUSbLVuqzBFj3Pi7Aff3sXTm4SXxxjvhFWvBYKjRWEpUuyQbEF7qz1J4quN5yvYUtqfWEtPtmQLsb7ss3YEY3SY",
  "key22": "2qcjeQ5Auir8M4PTF786sx8qUA4sjrfw9ypC32HKZBBgkjFntrHsak4PJigSEfA5ieLuqjuN3MphK7F28ia4DKCD",
  "key23": "5aE2nyVZkaHxz7hBdikHg1zA8uCL9LeWKXgHz5Xn5nrxMr7vfYPj4ZG6wgRVmFzRVypUBoVR7ch3uLxQGSi26bhg",
  "key24": "3TdSd4EvJt1zACMmcbEAsnnrCNPWSfUDfQvDDsr9mznfu7ztqFiUgDv5Hyin59uLTYg9ixNh7jXv2gDHjewNHhKr",
  "key25": "WBnc4DdBk6gs55dSxjKGrQiswMy6psG1EuNX6BFRqEsknAnJaUvb1kszra81UNV6sa1fPRuMnMLo9H5uFABiijQ",
  "key26": "AxxgciZv5Ci7nThmA9H7JytvVLnbfwZ5YgENznyr1hSTERtpBHga2Z391aH1GzZrUDYdmxWqjcP9kZpaJ1mJZUa",
  "key27": "4qiGhgLjkqAkMw2bmTiDckF2THXfmxf7KN76FxNGYT4VLhQUBisobY7rQvoCWPscfzD2BLJKUqT5DeCkYUzL74zU",
  "key28": "2uMsMxWDxRwryagAkUVs2ARNj5TD2vA4DgfMBQkujUgaMTwbWTWUs8jXZRCX5PTnYcTwoF4HSka3KAAsk5jUiZts",
  "key29": "QMZagzwN5DBD1CWw9i2bfLy65j1XWZc9YCYchccqKtRvQSYDzTr6n1x6af34b6sfY3iNAyLoYYzR5k8rDPcTGgj",
  "key30": "4piyg4zGQiv4g1wbPaiJPJhpD2dCEUX8Nhb1sEJLj6kn4bjYg28bTHeyQGd3PFPJihzXZ2QvPPkC17dPdYcmqc85",
  "key31": "3TYfMGRRpbs2QmmioCCERkexKDD1HTGfbypLbvzgPNToRXKPptew6KQF4kWUW6FM4VAMCdFdYHPVFtmLPUevDb2z",
  "key32": "vg92rU3GtfZCdBuaV9sTXDbtMM9gRsUuFadqghPqxT9YcnAM6E9BH27GmXRMjEbwx4vNzPrH6X2gjJHGdCGeVKS",
  "key33": "3ZVPh86HN8rmyKB7KWVGLEykZvrWgPULwgoeh7UBnVZw57DKHdpmFd7EGuUoTQnHAQo6KHMyT2vhuM9yJptsL8S8",
  "key34": "5wBLYApdLkua1Lyqda4X4e9FsKnHTBKEKvjnho193P2gUn1zwAvnjdDqW5To6kWb8VCrJhsmYHDz9wMBBCy2mBS"
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
