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
    "5j6VhTQfJ1k3y6MXYgTwjoD2qMGcJnjooP5sFbXxADQXAsUFv3gtVWm3DbzGo7xtsy7XWkr1jWWRwHFp8znDTJoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t2C1xHhYG48BpxXW26MDTM4xvJCdK1DhUgpMDYkbNakJ9qh2j6qTSjvRnxE8Hvyf79fHQvpbR5SRwJWoXA8ftXK",
  "key1": "M8s1bPqrfAfoo9rkRfT1esdhUF7pTU6xXshsYuG1hB8JwsgSzXefaZjaVC7hCkuFHwYZpFNgM8hwivgvfkgNDQU",
  "key2": "2R8JqxjcWVEvXAf4izuZCmRART8vT3eCGnFWchdfB4HZN9xcUTByZ8F8uw33pUwdCCKnQuM7gPwKxFPKQzy4m12Q",
  "key3": "TXa5nFnDWuHd5h3TUgTjftGzDjmRwYUXrN2cgav1eHQBfVeJowjPQ32DY8WfTcNX96ZTZLFPYMh8JEvCsn6LDWq",
  "key4": "2NsfDG2Fo2oFNe6iRhJaUKF7cykGtvFNEdKP3HKtA2T68n7oZ4Y7FvrsvuvTaq8f9UnhxogcnyPDbRC6PbcoTcdT",
  "key5": "5ANbxSAKBsYuzFgkkkCrKzqGxbuG78gjgEdsVWAMLHuwN2scq8EPR8WdMbkCM7krdXWr3PuHK4HpWGqoMM5YTJFD",
  "key6": "y19fVfPDmRmby3tgjVCkhuh5XL6FKFUykDrYNwUTbXRZGdEC49bt6fHd8SDiUCKAGxRkERQmY39m4Uosmqm5Akc",
  "key7": "3yMeCGNABWP4kCVs2FHhqRFgLK2eu5eqqQ8VNs4KhUHGSPgfGpqkAYFDCrh1tc6nyWGo5i5jw6hGdbyv4eV6sxLq",
  "key8": "2kiJFPB1WLhGhUW5EBQGZdZTeJL12ohVYonti8dgMaQ3sDodmJ4SgjdcDqNUrGt3ZyXhQAL5LKnmnJ8mt2EFMktK",
  "key9": "3kE6vuVzHGTDr4aVCumjGXcQa9dhE7XJqX3nSuveDo6NqzcD4CKSZ1azxtLQ27737r151nh5vzeWmdoc98HwGrWG",
  "key10": "3qSaTzwDDcuSHw9qfBF4CwQCp5Vybnu48htnqXSMvHW1EoLtHCxZr583KgiUx8BmGb67JhHmP7N4PmQPH8R3C1K6",
  "key11": "4i7q8dwcNHMdWQbs8PZCWCP37Hdd91E1FmGUPKrM5FtAED4w5V24mpzRyp1mVKjTRoiBymGLYgmYq3uCLbwPJJ2i",
  "key12": "24HsjiU9HzD1FSiz6EsAdFReTD4Bj9V9TxBgPifVkxvzbDHX216z3fg8r4QVdYq7LRBPZtvqLe6AyRUM42HxRzpV",
  "key13": "ZyY6VemYcFmWUa4dBV4KJkWhQFeQ5zy3i634xCWvJfoEffQtK7pdxy57g1i2YosdnrwhqMS2wUqqgYdcAXNDS6t",
  "key14": "3FmL4ML7g24injuKwoHmVjySzGAGqYUpFPZaopcMgyaMeLiUS38wUYS4YcqcpiG2LmKSXD5HFdCxSQgMyMwyFPSW",
  "key15": "2w6v5xMWUk5q2fmYtTNkL17AabKYkRiRW3k6eBPpJyfxvGmYccXdY4rEyEdao3874G7Wnb643oZMBxYneHBSvJty",
  "key16": "q8Q1zryCjMTxCGPiDyNbyJYXSXUy9huhcaWRmmMGGGqNq6zk5f1KFSuRWtpUxBsrhrEv7PkcUyS129aZQHsTBmZ",
  "key17": "5oPoW7EeuYRg8otwYZtdSPAPaQVKMab6ZL672V7HyBmFqy9pzmbPhuc28Un59XY4dHVUHv3zvAH8Jg396D4an6vo",
  "key18": "4sc426s6ZkajjSPxrQZjSuv1HM3v9jYwdD8p4Pbvsk6Cgitr3ciRSTumhH9bGUqVjLqB8UE7cWQ2BuWnACRDr3Jn",
  "key19": "2KcX13D6RyqsmGCprtn4DmbBbhZfzgke3HrBbpr95Cgjg1bxWtHDHRcor3cxDxmePSGvkLrgVV9iLBmTAcKtNRvF",
  "key20": "3kAbyajEN9VAB2RyxKZB2pRXTHRbWSj9mskfja5zt4r6sqoVFsKWA2cwKXX8WPTP1FJSMEA3Q23MQEVAXKcDLyyU",
  "key21": "Gyi3YMGTga7MGmV2Er62Mk4Axe6QL5Ri3pCztBytP3xg5r9x96p47TKsnK3CrHjTSee3jqPXHk4iaaR3TYcuJdA",
  "key22": "4nEdc5sTz22nfvKDQAaGrvAo78yjK55rPu8BzdXCu5CTsrq13TdMHBLJJZM4zG2gxFBnh9Q29swaidpFmrEbs4He",
  "key23": "kFjv1WKFbKRCPbtxAnpJR7JhwVrKzTuM63rPjEHpsea5FYYgj5ms29QqFEaLF7eS4hQNaLvtSHMgt15Jn2TLgbZ",
  "key24": "2t2PVJNkn2TzcdYZ3dz3YpKCBBZVDZknDAqZAZ2c4eDYQ8fTFihkrNWeseAtUzPzjwQUSrAcExksdWFXLFcChHd5",
  "key25": "4BbshydvEUhE12KsFjHdAkXa6aMfKcJZZ3qbFr74XTyMXhk7ePhAcwHZKMN6NfswcqTY1osTyEA5pE73cNfdUGpF",
  "key26": "4bkLko62XGyiTQGVMyFZyY8P58mESg94a36MpW9oiGar2tLjLqsVHp1ZS5KPw2ehcxT9Tox5hynEFweUQ1Dg3SXj",
  "key27": "SG3sNfGq4mApJPMR6Qc7kPjZT6yXjhgPgRi78wVy5uapFLKN14zBe1cfKd5NcnqqBcbKryBACKCJod7XnRAWadU",
  "key28": "3jBKUocgu2iPeLibKhhzUHz5UqyHsddTXXhtAuQCr39vBAY5qS148tQpEuBqDobTuyRgNCQwjJ78WD93pcacrEKV",
  "key29": "zuQCAZeCT89Z4RKKFs6ND4ngoy8C4jHYA5UVtWwwT9N4RdAQA7eB2fowRwxWvWJoEYfQMCMzvEoAqUhqZFHbuBB",
  "key30": "5RjNcuLbqVAq5rwbSEDjemBWH5Yvr6M5PhqKPTpTaJb8ucy1G3dryLcFH8CpYn97um67zGxUMWMceP9pTuSxcCMX",
  "key31": "4DK7vFsri8PAhD13SfhYvStUwX7grodTjug3qrvFK4bg6nDoxhebe8APaZ9cH916sP32vUtx67Rcuix8Q6U7wYxX",
  "key32": "5AJ62KcA1ZV2bkyznu2D1PxiVrm72UbPr8u58ur4FCpCVqSSUTZV6UfqBCFGgvnu6NsyZeNj2QQA6fdjzcVnb3Vr",
  "key33": "4qTWchvnkzGvmVySnjz38sfdSRM4LDNzxM83bjAXf1gEqnMjTn8FVtJnezUTJ6SRqrephppBwANGZphApratHsVq",
  "key34": "48qLGUWeR4MPKPAkqQeqfdpBnpLAkkA1rf2jhDeC3zVSznLhcfsvtj78p8GDqeCJkSkiypV1X8ypZHoFdb7wd61L"
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
