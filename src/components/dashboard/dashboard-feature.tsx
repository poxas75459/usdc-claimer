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
    "4jYUQypXK9BY6nQqN4vkPbfZdbZgrYKA3oFKYygP3ApB9SvZcA7pWNN76XnPvtzc7WLbCoJ2V5xcG3ifY4Dh1yQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rvhX7gTxT2F3wW4YbiJYd8VueicjgeSQ1c1HgfYBgrqMgtmp2VjHCYWUSdrL6ivh3fjGp2suz6BfL9UtPtMdTEG",
  "key1": "EBeKw7mQ9CzHjnVsqJeshR3APJL5mpYe1pE9iKiCRJDfsQcKcxS8ehP3Nby464BqFnE87JP7nzg9GWL66EAgF3S",
  "key2": "LVHM2ZjfNvHRog5aTozSqU73qeWCf9n6EQue7xDxJhVSFBGKnEUWfDxsX1NKGpjNHxPNHo8PJhBzcJE2vpycC1J",
  "key3": "pDvdsf2csQ9Cf6ELoueZSKs1iQFZNUgQVJ96SiQjNtLTVnjc2JwM3ZaAED3cXzRsnX48McfLGyM8ixZe4Z5nq3E",
  "key4": "67keit6bi9mtamsokJUp44SnRVS23cGF3aVceLaUpJkputss42edkKourZPB2QdmEQbnqA9YVza2vRcfEeXipYQs",
  "key5": "VBTf9djyy2G4JenXBCqHMCmFj1hYsNQ21q9w5xxj2w7boyTyhK53ethDwaonnhW6fA5QDqvJTqBN55KMkDLjmob",
  "key6": "2ssEruLfJjKEKphK2HzXqccd64EYvkhfzfD3fgZ1WVRq87SvPx2P2P7h5kNRHMRBVzRx64mitxH1JgZTB5KE4vW6",
  "key7": "2SLR68edD3VskEcpE55HocjNKjiUNvakGMh2gzPBoy5wmee9mFYgufc4GVy2tkQBh1rH8WMbY3m1RH3nMkT6wLVd",
  "key8": "5cM2Q7RK7cYhK397kHSYA3KpKiqKMQHNWu4Y5WWY1gZG1QW7vrzp4d6F9fkt4f6xyzNyAY7UuYSwjNA4hiGhYFJ2",
  "key9": "2wcqXKiF3dpsJEoxxr9i7UcSEx1HT6MowThWZS2LkikKcr9gidmFxoxAFjxQAjVkiPJwUfG6Af69JYcyBdxfTNEj",
  "key10": "4dkDBRddDiuAptADRW8MLNEoU3tnXQ1Nm5GH4nHWFHpg6DrqSrG9aniFeXNCRLduiqPJgqH2NNQ4R4dDdnttsMRb",
  "key11": "3EU3cJaFj3nEVjwurPeRUqm9zyXmoPf5yNM2GbCZtMP3g53QshuL2jbvYgbq28VbK4WgLE2BHjEh2d2ooAFtMaD8",
  "key12": "54sbiLeegLqDLFeshVLvvLdoJwYeJFSpqbRPnk2vm9cdyLbu38iYcA7KNQVopzpvGsEHNLwtn6QFgvqbmWfqLYw8",
  "key13": "2iPMYMMCUJntBAwbRuN5PJng69VFHJmgQyFH7DJ8dcbfxR97H8XRfX5yCYCeLaTuLWrw5qQYbHECEAbWj6SwPKMQ",
  "key14": "5NE9TW7VgqWEkzBZUfnsNmEyx5CdpT9Qgr1sYf1yZ5pqYTMdYg2iVbs4Lhv4eU1KAFaB7pE22zCfr81roQzRjKQh",
  "key15": "cfi28bnccd6UqSRgVBW2KEE7r6ygrJ98Mkc9mC6uEYD3KcjC1J1p9bL3touF72jz3JzrJFSrvA3QCLbVLw9pB4r",
  "key16": "2HS5KKVMh8S2pwmerrDUkYoE5QhrH1iAhEEZJwWACpBNY4Ny58FBZXY5pYirPaD6qtcujDW5rFAWqcViDHaPab1n",
  "key17": "2ipjGQSYdsTibTdq8LSiPv7CRbgB1i2yZizpYj2KTsKWKtzUhJMP4xpoaB6mC3APkjVBt9BiUSSY2Ei7C7znQxsD",
  "key18": "Qye4J6k1q2fWfrE4S5jsjEx5oCLACCtSNmupMxaKwYW5aty2PgL7xHQS9sXbSBSiXWR4k6TaFobbFUjXJxx21py",
  "key19": "w5UfQp3B1X1rY99Fs26z94BP7gH3kvT589BQPrbtewuLKS3iyHBLExSSK6vLzdRjYxPfBDW85Bu9bHBWbJNSuZm",
  "key20": "265SC3C2ZyiAjxak5oHbH9DQXTYfDwoyW2gwDK2HpHtuZ1hpPbJUN3es3JdEhfSy9GuMffouroouwjxJRnfM3hP9",
  "key21": "2GEZrvaAU2HYcPgY21m6LoKgoJRfGv1epYw23S3FBtSFCFZmeedu5agdBMoKvkvNvBP4QPKMkdN1jPr3FPbxnwH3",
  "key22": "Ka4vS8CWDFUqwtE8WS9pkRtcqsHatj6e86t7bxtVyzjxoSVo1VenknLG3C9QPvpS8YVxN3qLFJqx6rdTYjN6v5G",
  "key23": "3m1NXanJAe5JvX2ukn85nFMvgra7YUet3W2vXskjhjSJNiAZudrXi6E9Z8GEBZDDRvfRsAGBXvGUnkTmZkTP6zSY",
  "key24": "2qi9oXPDA2X47xZNAhC6TrWt6AXNubkF833JDqVrZUZXAjj1QVSZdJ2hMUcfjXN6gbyKtnSba4jCwnTWWLDNXNsX",
  "key25": "3yEoVmKmXArtAMhV5gEzcFLTH5EtpSVg2Lt7tgizKSxaVgcd8jeCbn5pSGLHR1pwAiHanaj9JPgQFwV5A4HA22ZW",
  "key26": "2V5kE1cUv6ZpvKYEzdinE3WtsNY88kgKHtFBwoSSG7U9fUYZqtVbSdo6amTzvTXzVRmq58Gb8SgG1ZCAAcNhDeca",
  "key27": "3grEZSoeLsNPxkvhT9TXGqsGRJqf2n6fMRpvGWvEW6QXepxyZrBrsDEAnuD1UAYhDSAcr3J39fkrgANmJS3tJ76X",
  "key28": "4qbSRVZsvaZt5RTZE7qBK7pQjQpaS1FLkMaVYE67aHm6smB8RqrCQzz12P1VpRF6T3urZTbHb6wL7szyZKP5CwuV",
  "key29": "4LLEPwBzMiPqwfhAcE6B8h3nahcHx3Fnu64TsHKxCauULZ7t9uWQjdFU4EYdXhna15gPYwEDohjpDodRZBSpPpEY",
  "key30": "2wdFy1AUD2Jf1Bcqsm4dmY56ioLMjX5q5oJsza11VZPrdQB6UExF9dt5gQNKEKRohsW7jS5FNzjbS5XEvUKPReia",
  "key31": "2LehrWZDXnLJ7kyp8jWXNVNVUhLa24xtwzzjEBsEMiXejxfJFUmCPiDHSqXm9PNtcwjEEbwd9ErHWGdCkNWyqjeG",
  "key32": "4JKmRqrkLdtCuA6Yi2jrZDb5t8QtZdy4deo8FqE1z6btpv4MKqbTfvuhwWQTNkq59vt6dXsSJyaQTuLBPfh3B7bJ",
  "key33": "27oWLqPZcDdRVEwUCCEqeFCD8qAW7dzmmXa1BpGBqL73DKKYydNv1bawuvAGKY4aUxB3NWhsPF6Sj2EUeHa4bj3z",
  "key34": "3owAsFQE2oyq9aDbLPFWTNSXf75UevJWGpk8Xyw7mMWtg9acjTBrwu1zWhWtNN86nKFYL7bpXzwX1CLtExp7reDm",
  "key35": "3V7GFsthF9aMgW3G7hZhcTyPMCzv1JRZnDMCAep4VGCpYMmNuthM2mJXpYmd6VB8Cy4bq8sPXUB9SF3xD12D2fJ1"
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
