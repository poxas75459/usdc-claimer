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
    "3cWXxqTS1SM2K4NmnUBimRcnb2xg4JRnqRwHKeCB6tLKn2zhZAZ7mPRxRmTEi2Sqvh9x1EmcQSB87JZycq1wGVnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UUNiNr5i3qdXQLEjN2nwBsjCeFFuZVQLoGwugeEBptLA8f4zu24w5aYazzLRQpdhbQx6BtVgnWcvLHPXuXWgn7A",
  "key1": "4dwfQWLE6bSnC8zHA1LmYCtQzaiWACJfgLRCFSzMdcSdS8gWTx21j9FgHYQPbworRBjNkdTQnvcLNhQVUJ95C1Qn",
  "key2": "3Cda1cjvGtg6ADdDRwtWAJ8tE97xnJBo1BsL5QgYkh43WKTXYmdRgUfNWHmjPNZkHMgPXmH4XoGPyxZtGx5mzGAz",
  "key3": "3HnrqJTKYaD1ua2GyJJ2Qp9eg22XtZsek89dJMtpMfZK2uAXykp6xd7pLb5UL2bpEwe5zNq82eVFYsyB8RpfBvZU",
  "key4": "5crfPud2kxcbxAUsWRWFCMmp5yYwSu4xksJmh3MCsyo1RGbLwCcPzuCNhz7nbgKXzi14dyUdwo3N1qcjG2NxRVKm",
  "key5": "67ZMn5fDrnZL3LUqkZ96qSXEMkApeyCnFuts2QtBBL7nNjwZZhw3UubzRviTAJSXV3gEGY5Ss9KcELoRqcSbdwr8",
  "key6": "43GWKEEjCaR9Ac4JtsXHGNf4RHPCYWUxo9kNfu8a95kcreEX3ZZa59tZUynup9yHtJVJMW2wgMoA9ogAKDVJTetN",
  "key7": "229FgnPzeRNBRSp7Kod494b7LrqN6xLCTwLCXJXUYGmn3Vm4et5cbvHHFoAvRzng62xha7wGUYbg5JZYCqXcMRwF",
  "key8": "td4CnvrezMZE9dQakHpcjZqiZ7xY7SFshSzq1n9x4ZBsKLkge164q3zSmEFCUMuUCWy7URefAqnvpCXg3fy8JFY",
  "key9": "2LoaDuKqWBXNYo1ycQ8sxwXR7ztFfCW93GwortKPFaXmquQ167retXu1fnv9ZBYegXAMNAknZSjtEzucJzQHLbEs",
  "key10": "5aawxpRTqnJE8ND549RBt1Dt8STv4XjkqMDTXUWBJYVEg1tEkY9T5jjFDRwVQSGW6GSpi7csjVLkgVegjh1pQ7rD",
  "key11": "3Q4VwTivAMG9KSchZP2BcrP9gC6FtHVGeeknyXzm9r9rF3TSf16RTGDV1vXeeELvVi2draRGs5iDvHEEKf2p6N4t",
  "key12": "4yBsquh7JVzc13GKnLwhZ4F8gDPbxtfUXLe9QmHAKgVWtWbKKWo3EKMpKbBMuAEmECbZNesFLjkSU6bmaVLNAZNT",
  "key13": "2FVjKPuANWM3FB1UWRNYVZ3ZV8wbQ1HpsPgoRrNFTjQiTtPX1LGavva9A24QbL9MHp4Sw89aUqAUNmxYJ28rNkFH",
  "key14": "QnrmR6rRewhu71aNo9anb9Uz2jkKCpoHNNiAf1BYFL2cFtLMEc8MNPGsyjJ6LWHuDTHaT73LsQx44ayW1Y6P7bj",
  "key15": "FoMhLJUGBQ6JykLmjpWmyyKuTh1A12PrTJvYnfVAcASBJheMhnsn5Xuf25VfenNqh4FsZEyJmKS8uwpBQz3Jj95",
  "key16": "2wxhBtjysvA4a4fwJJnwKECCkZuqWt44HC7JWGv2ZYMcwoDwDaWgCTUmKhdehuzQpgARWuAtojyVSSXjDMetXVLE",
  "key17": "3DkErio4Srwv1Kf27cW1MX36MsRJzP1DfdBkWJxXp8z1MDSXcY1PzHFfEi7SbpvjWLZ6BRxZytipJTwmiA5xwew4",
  "key18": "4NCJtw9GSxVnFB8YVPHpuKzXmwHHVHM8iyGCrKqSqUh3AwVst4F5i1rXgMZ1XoZ4ynatb9kV8859UCiwc7jt2Trv",
  "key19": "5jFy1NedaLHWH6i8vm6gUSZzz9eCwSDTrCAmJPC4xCPRLhLvnw4hvnoWkaMD3cJ2uReF47bBmRVBqyBhUNkN589b",
  "key20": "3iq37kR7QVT3ecG99Ww6wFtM2QsSBQYoT42CQ3XsWmeCnfAQiytse2hpxLh8oKPqEkUjpu79Xfm1U57Eg2GvCcfD",
  "key21": "54KyWfvqUaZcuAYxCDgTDAj9KuR7btQ1oQgLTSgcBWKt1aRFLDnHWQFAFWVLHbjH5jwdLfQiDwz9kqXXyQ1pLVVi",
  "key22": "2oxJBb26p7Ci4PqAJE2mPKsD4gPsPSwtR1TFjnJWg8EMpsNYbaYTG1DzsUfw5hF3boVz1qibXf4YaYjWjL4j2FKH",
  "key23": "2G7qrDQKiRRjjVdZWNctgPntBLxAbnRvvX56AURn4L3iP6bW9GKzmLvd4NsqcPi7AjU2ytjJb38rWTEkRtdbyk6c",
  "key24": "62cApGJXg42hdpcfC4qkyZRZr5oa5KyaXLmwK3Y6ZMmR58JidhvaE5qBZ4XmJKaXHh3SJ7h3KDzVeuizvU3hffqz",
  "key25": "21fAGroWb42TTRMPnGkwXfme3KQUSPRf1ppuJd8TtdP5mzoYYTJTWCQBcabXedZ31rLUUspqMwMfDaLvLfjgnmTm",
  "key26": "3cRSt6QVht4HtoJrAub4jWgWeJWwCvQ3K2Xh1Munph4m45e1TpPn6HpDoD5HAQorrZ48JaDSNi4QZvaB7bUJRa12",
  "key27": "2ZqF95vazQLdP3JWw9NaWfu1xd8PzYwi7nGT8XNrhvpQ5QsjJgZp8wGxUwdZak4hgQWZLoZdjemju3ZhaP2RAGUr",
  "key28": "2UvnFKvT7bW5ou5SVTPGkb5o7C4SUPXpmWWCJu1dpu6zEcFH7WKuDT5dsMz4sgFkcS4HwRqHYqtB6DaFmGvgjMzi",
  "key29": "8UBibWoZJWKY7uCai5doPyF1d6mpD7QCFdkn9mdV2hz9vnGLrHRgDosaNXowLn5Lk8t3dDSDwdmem3JDN71K5Nj",
  "key30": "34rmhNLhKxx7N4qYJL8q6WeHf2pSKKC6ATVpr9cr6HqvT4zNzPeW5kPyWvo9sJLwtn2bPGwVdTSh7XHUu4oTFjfr",
  "key31": "5zzJaLn2UraPmian9aDV3ThM5XKiTV1LHfPyzCaxgA9YpiBo4X5o5g5tkMsGg8fp6jcdRGHhqaADEmjCCx47fpMq",
  "key32": "2jjQkXbf1V8U4UcGKohnhMgrwfQZu2pos5P63tDpKtA1TFPA4ozMAfgURgHUNxiENfRmMogYthQ6DaYUqug9DgXt",
  "key33": "3MGTaZHa1VpVZmb35bbMw9x6CgVrLD2ckEwF1awMhwJ6Y7xmkdDfvW5yvvUyKmLkMYVM5bCfDCm93SLPqGeVTWoq"
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
