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
    "ibrmwbpsJiwS6t7KiksqodXAJrqpKzPgDDEhgBiWnFeqDDzTtT7cFdmty9B7xXEoHWrapp3D9rrb9xABGiyWzkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q5SbbVbHj54QggnChQVE6od647zJDHpyPFHEHrKjqByRtnM6wJJqHfXVxGyZnyfgWa4XYXBJuoYHNjK9NJMbFLn",
  "key1": "5eKgaZvZnvd5pg89V1rPBap1tBx2RSP76r6MQgLV89rKsSZ3BW2VQYtTunQQTq65MM9f8FeGkUao1Hw8YVhdS7A8",
  "key2": "47zJ752tP7x9hxxqDvnFVNmita3LGfgboZ8eDW6jeSkgRvhwJR7JPzG93rfSh1XZfBJifWpEMErX5iiqeSVacob8",
  "key3": "42Qaq3eoT6ZcD91vgcfiXGP6keDTM82bQs5kMaYu3P4zFnGYGwSYhxQzrzvJvuKiB5NxqCAee7sMF763AHR2jXMZ",
  "key4": "4RAki4ZnUDdkiAxqY6ZtkxHA15Nmc1ghPMxZiawayahsspV8J1uBR1HUPrWMgUgFFC9k49gt51ffKQd93RVLYJsW",
  "key5": "3HmLHQwVpEuytaVud2pSpHbDCNs89yQMUXAr48ASDGddSh5BuktAxatbtb3pkt4cGTZSNQJEyhNfsQR2nVj1MBgE",
  "key6": "2gLwi4aoiLtKAVWi6vsGBHnZERdE3KQoqT5EToh4p4dJnfFTU4rFgrwtg8TYdRc4cjLVsUHDiJxywMmtxcPzuUtV",
  "key7": "3X9ZMseWYsXuG7ikSVD7vjKyCYJ9vyTvCt91XzBeN7eWDonaFHF5uN8o3G1bvtUrkQRYy5VjvHJpuxqFad7FPu96",
  "key8": "5S3qq4EUZDjhQuqAvuyJrkNsXWbKamFpzknVL55yW7Nt2WrV6NQLPMCx1dowJor1xNALBDQXdwe7fidioWAuM5U1",
  "key9": "4V8emXiCHhPMz2yghQnVD8u5KFKyRabgRynXFCHfG6xNSqJPbNXN87UC2cXmxXedJELFrETv2dSuYpZuvqVLcZXT",
  "key10": "4JrM4xGmWCtNmH1USJgZaNxwfWsf7x9v4SKdpJPHnhRKBsEzg3HmVqXVS1FsKKkPUReesocPFCwyUpeGJ3GMwv9C",
  "key11": "3uHVYjX6ZzKhXPNhdYuUXJdZCVKCvoADt2EnYaPGGCJ7c6zVDjrKVQBuKe9icCjA6Kzo5cMrVnZZn3JkUv2JMUAF",
  "key12": "3Dn5WzvG4DxmaeiB81sRufa8Mi2ySRcyG1r8Ke8Y6tbhsiDV3NsWnDLgT7sWxQW7xQjrM4T1tdUZVBW6ivjozXf5",
  "key13": "2XpvXwG8dE7v194vjMGSEVL9YBrCqdh3NnduhmBcPkgi8raT2fbP9QMRdwKBCa3zJUY2ZC1dmX3FXg2zgW9tyTFf",
  "key14": "5muREJgTx3qmJcxnAL9qks8CTZvG4pM5H882Ssi6gu2yHKMyapnP4RvUdnwaWTh3XwLnA2kzpbtmtQZHGj5v7dQL",
  "key15": "62MN7QEtNsBFZrrovHayNqKy7CGhyBzkY4FcMRt7ZoQK8gAqyfvqWnzuWYJd6KAUMCTdKyqP4ccCT9CvmeSVs7r3",
  "key16": "3R4irJMxctq5x8E7Q3mBPGz9JepyFZq9EeDbtejadSuJW76HHMAW4tHzXDX2k5XWPtz1GWSTbgvqkYB7JHmURXfZ",
  "key17": "2TYhzrfuyFp4EakXHFjWt2nRLU9aEcVuBxdG6r6CQdbk5vYvHYQKqef6nc5xM4bdA5Cc1FpVUQXBeh1tKdm8KAfA",
  "key18": "5ajMHmMdxYMcce5BSGsQMjex2vQXxTKWJ3x11ia9q9Ee1geXpywkY6xeAwsGSTpdt7mj9bYwvb4b7zrjPXmMrqsp",
  "key19": "2WoErMKNjvL7DLia9JahD47aptNCKAwTcqp34AfFAyVtiGUUBSvL41R5YDpFY3h4idMJAq9uXYBcwSpsytY6vYGk",
  "key20": "53k44mquEkQpsifQ3VKTfhhTS9mGVB68N7PEBUPbmmXtTFuWc1NsU61dVP6JsbPGkwkSH5jztoTXSdXH5yqfJdkY",
  "key21": "g7rv2EoASnfcNA46C9T7JdRiPLSu3rpin3eL3ryKpUnU94p3u4VU3ANL5Strt43AC6UKnv6czbP3v2nTGiRVqTG",
  "key22": "3P6mDSF1nZwc8UyRbzWtvimtNJwR4D5dALpZhD8WiyP6tpN6JLyxXsYipR6t2hU2gKFaNjz1gs4NrzZXyMigGapS",
  "key23": "3eH6dUFxWTpM92N7YodWHoD9byXQjCZkubLYozNMizPb66YrDmjMfneA8qQ2w39v2xcUQJq742X43GoQjozKd8io",
  "key24": "5dZarBEfTVRvJSfk8uGKMEoPKqYKUAQ52agtWQWEdRfzyf6t8NS6k4GY3TsCzDynCGazB3zZE39R957FocHEBNvn",
  "key25": "5BGLK3DXrDtiX17m2MiSFW9wqjd3HSbrTQSbPus9Fn6N72CuyrCHWLaHVgCd7AbPcH2sT3vb3rKmMpxy7XM83HP8",
  "key26": "4ywuzr15vqLS7GJt7VuYu48q6ssZy48Fn45fcG9UEN3E7ScJF1NuchUKRWWsPrc3h3A6VRT3dNQugEVHkSXs8Tkp",
  "key27": "4G4RgYUSTtudEK4n5k8RduEjGuwcRhKqzDpCzSPnGmGh7ZLDEUBEjxXjiK6zeMCwnwzDdWyCGgJ11nUWAqdjBD21",
  "key28": "nD1gj18JYfyGw9fdxN3ujZ8GbWuKMEpKXbLR7EJEmYikwV5RR5GC3YdfVWyWUCeo7XpKi1i46Q8YGGZnYemAqgt",
  "key29": "Rd42a2ABC9cVYpuujs7MLN1vVfReM7HmaV5RqvCtMNp291aAS1MDNr1i1kaTvb4ALCSpHsEcPfJwXAaKbrq3gv7",
  "key30": "4UwiSerWqFePiNQezLf4pTTXrcm1ns6VgKBfjWo5kQbRoHtyVKiVF9PQAAQyJCPYwLLmwvrAZznWqce3P8q9Qwou",
  "key31": "TBsY8tg3qBG8dUfCm1S6dcYSFHgPi42SH4DgM7jsQM6jtdjQUkjxyzbhD27mKCPqFfi6VYiQzqg6YsY1DhALuSE",
  "key32": "5kvb6L59xo8L6qytAqv6X4m2A38jLb8dj6cCx34kJxVdgcnRcgfixg2PLqZfJ76Uc7HcywLEkgdftT1RaMTCJxJ8"
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
