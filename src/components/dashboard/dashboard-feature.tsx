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
    "4Yh2fzEAuTm3ew4AsjpHswMsqkRYrVXSkwd84akNX3JBRCPNpietDJPjQQmytZ7RLvNv5fBDgceWdfka8cQ2tDD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZfZrC32ccnj1GtHmuubtiTnGTGJotR5qA1ZcaG8f3C4KgqoiNUqJjF5RQdztEFoaPBEVkrRBvgCvRLtttEUQCXP",
  "key1": "3FZ6CQxHFFdsgdzubiptnpg67Rgs4un8kPzMt9Wrt7JK9ti4C4KpV2suWp4BMgR3EPQfhHG4Q3qDKbCpAV6w4DRS",
  "key2": "5wLkYn2EGu2jsAB3xap6ecHCLdM3eTzkqBwcgYju2XuANBW8eEdmA59SZ54QQEwPBCHmeoQaVFQLZzLQZqFephZ9",
  "key3": "3ss5joRNxXYVu32dS6iiJsq1aKpCSHb6PqJS8Dy4cXHLUoJTFnNptLPZPxtUJyxwVUtJmKk7YZtaWFVRa5CK5S4H",
  "key4": "625o7sh6sq5DvLv6Tn1q6u3LY67UMNWWhmKFDMrPvT8HPEoyRpfBQNKHqQ1BSQsUqL7EvR76XmdMAuwCCPBQGoe8",
  "key5": "5KYPp2oKXBi6vc5Q7kBvxNUKdr9eqaYRGBGvMtNiAR47zAwdJZcvobQJ2JruLmAE8wemj2GvnbNNX5336C3tqKpB",
  "key6": "4cH9x46fUX94U4pdSs7DhDehxYwACAYn12WqFqpkfn57bUXfcnssY1uZNtSHpdkeza5EmAdNdVQsydvwfN8AMqk2",
  "key7": "gGg7ro7XafMLNXi6CP9k98cYH2kp9A2AhJJmg9BdSqynQZ4kAxKTMLsG8bB8BnoxiaeXSoYBrABfLWo3AzS4w8z",
  "key8": "fxHyqDQqAJT9xcGVSi3VQSBV49QsxdGhtz4pzUhQbGsvynuNYKmj2iXH9RKugrXP7cma8EQJwK4FtE3vaADWfB8",
  "key9": "4LgBwiZaABWQTHtzK6BxKBVnGGfxdHaLSH7B2pxrnrDTP3otarkA63MjbuQH5o6SSHynHaTH4UKBa9DkQvYzfYbh",
  "key10": "bB2FVTH1ZjUbZ4CHCPBiSHrBrtuGgJQFUMxJ9mYLzhchxktHgd9egZ9gh65MVpbTr4orox6cAMUG1Gg9XASicpz",
  "key11": "3NNxMEE1kDXWavhY6StXb7KrNJzpko5b9uohRt8WhU1ARsax2PguGRPSyYxUQWqCDBwdwrTE7MFjTMPx1x8V1Hwt",
  "key12": "5ZMW7uABnfPoit19kJjmt4pgouzFJC8Afi7gdR13NFF4aRWAFsjtueBHPKNRTFVkqgxTTQHLTTRTizxku9nGA53Z",
  "key13": "44mRpP7hdeYdudC7QdbNu216dcMewbV5y6kfDEmsfpJVyXfvLu1gPJ3BzuW2FLDDTjz2NC9q33z9A7qobuDhpRtp",
  "key14": "523aWRTPMsX2KkQ3ggxpnYmmNZ3YnHZjpJ4CaczZPVCAPuTPzhSjHgZLaDsATDvFsAjFtcnH1fLDXNWe6USuNTAW",
  "key15": "3gEVpFsJ5XLuaiTeCj9eCVg59vDGhwaXqdkSrBZda7QMH8DAghKKNn9ZPoGdD3ezjVtqAu2F7tCd3SR2vz66h1BT",
  "key16": "62vH8mkw6jmVfvMpy84xKMNJPgeBfXBZzeNRfB7FvVf3w3bvoAeWjdvNV29Z41jU88rY7gebBMPcwtScCyGD6mCz",
  "key17": "2B6HNbvrshn2NoUQSSzHmtDMR9oRfXp8QCrpJ2hkcmkhHCufpRpaVAtFbPcqd2b2PPD7C3DDvpAwGYKPxTAfF4xK",
  "key18": "2LRW8RwAVdJ4tNiDqmGdKFWiuWEUSp4BTt6zTTLARPRrpmhif5Y7pRcjSq7ru2PXuFVCeWHRH2FfJ9APEGu2agmt",
  "key19": "29Znif9iSmcWg8tPuCFvFTFx9KT7fQsfJ1oRQqjRpL3fYtAsGXZCGpku3mxmyebkaSMsVgYCGY384k5ZXGJKsPJ7",
  "key20": "4am5FQwhmJkCF59asFBzkSQcLF9xTBazfj3vyweBrUoWsf6tPtcYMTyPoscfF83enzLVxMWhkgNXzNxbBCM5CcTy",
  "key21": "USAxE2ft3wgDWbF3haogckisJkqi7H9WioUBQeJfvKwTiRFpj7wnqvsJuFgy8eJXeqVwjJd9m7PBDoXzEXPkD8y",
  "key22": "2udg2x7PfxNu1iXcNB9uwZA7itKH1p6Au4m9eVMfriPhv6mF7YkXYK9sz94qfeHu6ATHXrrnung7sbUXLzN3cPqX",
  "key23": "2fDDF2sWUNknQm2rYV5Lk5ihAdEvi1qp1VuDbo82dbbbXu2xAZco56ytLtdXCktfFSbmiNbt1CKvqyd1JXsEz1yA",
  "key24": "3MuZ4QBHMYsCpPkg9jJFgKZsSE6jLHiirwu8Xy6DamAZpwvWUoTF9RZs7Lv8xxzSFUrQw5cQvFrRE1DwTHdrSQJC",
  "key25": "2SwgUYTnx3hXnddU1hcB9UsrUHbRAmdTbZFC4NPUL3cLH3srubPcgaoYLMVcW61dtH8ow3itU3dycXwSBuQNmEpo",
  "key26": "kEJ8zjpU1aZqyb91mBuBSyumoJzHjQkH1nAtDLAD5WK96ZtPj2VNVDQnSJC3WZW76eQk5bbHSL3r8xcqRTmknnx",
  "key27": "5XJEEMHn8ijTwDDz5pDSwNgVgfP6sV8jc1oBvGuSeLANXSvRXB3ryYxLUznjuLwFVEgd7UNTqhJ4FFiCg1QrFBbY",
  "key28": "61M2v5Wpaw5JUv5cWT42fCDqxZXSbeLHhjm5mya8Gb4PoM9n5vpzYFTNNKWF3aoyYssZMot4vjpRCnpQ6B2y4FVw",
  "key29": "Bf14sr3VEDHurstL65JjSXaRmNhiVv4j8aByJNa9LYVPpgVnHjE42fdRipdD4cjqaxCGzP9u4xd5SAtP4fyZSL6",
  "key30": "2GrZTiSNZnn26KMeA1naGFRpW7xw5bJPw6FfmisMpzwDnrgm9ALpF5ecYB5875Zd6yMhjXYtoezbed2vmNPQLUm8",
  "key31": "4yecFeEz8z5mjmvprvx1HrffTEgaQjaTfR8cwV1nBvdekkj82hJ8frim9LBXNLnKyUALajHTfSCi7L6svX7LYZmD",
  "key32": "3WpBLyb3FboBC2NaqZoupxt4EN4K251ajf3V6VkfknoXWu1K5nbUgW6dgeG9STDbCtLWdueucSJCLVPz38eGbFTN",
  "key33": "2LTDQvVuYSgkNeT2adbXepXExHeZ4TBoL6TWtoBmjGPspZ48bQxoVnYNqvHCeNP58mePiHktWPkipv1jCwEsyaKW",
  "key34": "gc2Xy8zpuxox3KjXTGdXmeKgtjTtXStBU2pS83LUzyRfB5EH5q5jaTswutKpfAiuaBB7AqNpEXQj9oog777b3mp",
  "key35": "3VqWF6LXxhQLTbo8phiS5khRzg1bPopw1PaxjdM998gQMCFf1LQS9M7kCLF5JG7UYJNucypB8MN48aALke4UN75V"
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
