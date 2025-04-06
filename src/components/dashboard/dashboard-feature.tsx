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
    "2nZGeywA6FRCSfn7nPaxhfUHUoeGPNywPHug3AANyrXPVtMAY43xc5SEp4TaBqsjPHa3zyaGxdrcPhr8ZG6fBDMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkHbbnGogz6qBuANoRjaXbxWrNNUfzrddvodNeDMfaa1SKQK5H84rVwFGGr16Ex3AcC7X7sxfjN364FsyeKw9hL",
  "key1": "3KCfJgodZ9TWJUc2W9yieUDALFi2feuPD87jNErVx5aurjnzYvVASw6vQhnFtt6Vq3DsVy7GJFeuU1PBZf8CaxBf",
  "key2": "366YEShNvQ2oe4FTgRN1N9SPsd3W9YqRcH1pJfr1Ffp6BgEYbDmECucL5Xb6uBrr5UZEtvFbAm8AG2PJN5GXVARp",
  "key3": "38Pbdz1pLGMqnK9sqWwHYxgdHNxb2gjrnSbd95rYsvSVTeHxjQLNsxshBW9vy9HfXRcYLLe2YgHu9AUzkVcjyiWj",
  "key4": "4YR7V5nngQNn1voqE5XAbVmZELpRXe8hcPWaspMUxC2RxzDFLYbMuhHDYgPHbVLFhxFZcQGC8VN9j4jZmSWZwLdR",
  "key5": "4rPa27h2B6TYbsGE2JWiMNH4YVRkyZyCDKTYQZAsPXHZwNxBu2fha5b2uAY559fdA5a9SELD9P9TR6RjHaAdE1iM",
  "key6": "48gpFoMHRyDrEnNogtocprFcEsQkxhzHUQynjrRqg39Gcz7TkiJQvtb2bRu1pW1xhSasvXZCxBxU3pzRvyuYnuLV",
  "key7": "2LAMhD92kXSxcK1CiT7JtmCkmNud1FdVtAZRqNtZajQcBUSoDDuMZADjuvQ57FhKBSud3kkUd8aZ3y6mar6inMQx",
  "key8": "5ghFDsSBDvaQSPSMkUnUMtQvs43eGTXFVrbEgxhovmtDcLHEhAvHeYPk2f798KjC2FwWgsSYDbTQbShvKX9DeqDp",
  "key9": "3EWa2dYnEWL7xHGgD45JyqnqAzQvwULERzXTuDb3hjLhikj3UkuU5sMkaCs3Q7DbjJy6i73KsD8fnu4Ja15gjYqR",
  "key10": "4S3j8eGi1YsgQEYnxNSitFGqp8MJbuFb2e9oTtJTbH9n5GeEVJQjHJvEESkb9KExN826xyL3JFrF7jMgX3K2prRu",
  "key11": "3h8YSc8V9ftJAaK2JS4WxFC9f9ow9syDLKH289vqsGx2gbytfQC9nwkHSFZgss1QJ9HJnnDY4dSD4h3pkgcGanhq",
  "key12": "WF1rgr5vP3Lt9c2fncgzAwg3suv7Z2bVSFZn4f4XRbPf1TT5MVygvFT7j3AtQocgNsRHH6TTwrC2AbwP8HevrsZ",
  "key13": "4DT4Kwdru2zYF3UTkPfgcnMYYbkoGJhp6sPVXCSYXccgBVwKcgtAFMw9GczxMYpGRXb7QnsdrF2SBvPq6TCEJLvv",
  "key14": "kffnncZ6B97B65rkkgjLF8s8wvcZzeoJhaWE8u1agnoMo3aUCmbFNczsP4x5h4voJg6QfVyPZt1q9JYp55MXaq2",
  "key15": "3VHmZxnzBZJVk3mj82wA38sDeMjJeWE7nekQNgMZqY14ABLde8Aato6JuU5dZaT6KUowFAJyMrZ9fYsNfHCwJKkc",
  "key16": "22a2R4AWByPwPqvdh435GiMFj1zHhmdqUvYtS3vq1XS5DCbczF6yMkKBqrRS3NuNsD7pu7TMd6QBw5qWNqLyPt6r",
  "key17": "5j8h9QVFViSDMcMJzfA4JZgfyyZuANHCPiiuy913Qq3PnKpeM8SjSKqdpDwX5wkQfxr9AXCRWXGrVbNQiGowoEc",
  "key18": "3UgiNVVYraraTj3wStQbXWaC3kNiAJYaxDFKKXd8uuVYsnB3cKmNQA6cn32oXxEJAMUYeKcUTBibkexgZztxZsB4",
  "key19": "48Z7hDCpLUq1mRV53xAkxqysi2iqgvZUdqyWphMjhizQf1bYqHwAAcbyPeUstZk7X9DtWbpETWztWE3aio21gGik",
  "key20": "3sfGhMxGzd1G5wQViEHLFykGZfLVDtdPNU8en6h7Zgupyazpw1fpB6gmNHsgKQFvb8pz38N1M48CauUqR8MSF8Dn",
  "key21": "3ErHPZgSKSAT7grrm4HuBFoUv6k1V4jJkvSrLw8SxSgzznFL3dhJteVq9HRn8EBgwuENAw7T8seJmk7DYNufL1hS",
  "key22": "kWJjm5fZ9SKjpJYHrVRNpH1Wgee87Ty6gXn4iL5ZdzoFyEvW4P3bgEU5aJ9Gt9QjZ4xBm5WMNv7GC2FMGRruhqN",
  "key23": "2q7hivEqKNm7CLPVSuNiHkahQR4CPay9E93w4eszNsnjkq8gZFTvY5zgXoQugiyGn3mxRsBte1aL9YyBTaGX5q5f",
  "key24": "gKVbYpYMjKNaJ5pJX3ikicYDMqqTgCCQB3TVvpFf9V5MNhXpgkrWaVVtZJCSrizBie9PBcjVEFKtMSv1SYSNfgy"
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
