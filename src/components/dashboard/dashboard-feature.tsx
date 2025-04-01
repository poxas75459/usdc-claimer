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
    "3PaEQFYb31Y4wN41nkDiWWnDRcm9ucN8rdK91ymNJP3sLgqzXc9dn8aas8hLZ4LibCMWVznadk6t3fWDYqukPDnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42AtsuJFWveR3uf6j7uLfUBTQAPehytHk7D4wGLHVb3zRmFGaHxvFii1q1BSYVdpASm4xXNDWoJNZhH9qVEiRoWd",
  "key1": "28MPNGYaMy6V4KgUeiRVdHpHTkyPvjvGhQfJ7ytQHFRiuHEjNYGbMgxg4WJk37vrQLDicnjbk1NRfvFWtaSvFvFX",
  "key2": "42mBaeQ4UeBEBsW3iVjmKtzyJhdsLbGboDMwCHS1icaLwyfWdFjizQucsfyz1q9JfZPrUFJmPT3b9GMENdCcPj12",
  "key3": "2rip5EGFQmuzws6qBCXv3cnUtTrPRDQxWUtGBkgGRWoTxoweko3qN7rnjXBEDq41KtDhFBNTbLVrpQJrpTZ2zphD",
  "key4": "3Kt8Do2d6wa4FRA7eX9oUWjaogAoenFcwkvcYwiUkktTdZG5imTsHtemzZQDYotE1KCEm39p1Vvrf4vi1oav9MZb",
  "key5": "5nnrUSJfLpXC1kQx7PggUJZxc7yGbRFsigSfeKBWmsdBZYQpQjeakEMNybqimHJxHbp9VfYrAnnqVhLbxP1EwyAT",
  "key6": "2PKyYwWmcP55QaEwgUVtScFuvRtgAi5eviSr8FqJUCjrCri5ntnnxCpkyMZd17C33C8JLP2rUEQrXq3Qx9g9QGx3",
  "key7": "4kV5AmwfM3G1oKL25hGPSpdUha9DZzB1GK3ZZ3nzYd5gBnxykF8qwubS8tEE4RHhnSim93dEJ8tnJ6avLbAAJpwP",
  "key8": "5WnDa1AvXSnFvFqXjQ1VTjzucnPcCMPQUi4YmqF3tLyUdva75yjDmG5xTPh7rd8A4MTadeQjvevUE3tsLgKzWuGv",
  "key9": "2WL62kcykNUH9DJ6nsC4KobULhYBTaJrJNrqMhE1U4Ccw23yTYvpPdNMj53BXe3ox6rd6awuNne78sHQGVRuTh8m",
  "key10": "4F16th4Rd7pdAjKN8wespHicebnw3a2VPSnpFtKKsyxbYCUz6jrzATFJnxReVsQjcGDue2s2fpoeEqMXhaA7gRAD",
  "key11": "3eHucAicvhfGAUkfF3VqZbwVaupFw4pixBzTjMupqRCPw1wSNiqfanbhtBVNjwSrjSU7Gus312AmuqaQ8Cf69vGn",
  "key12": "2ckFUqE8LsHSGJ3nYSEEeMmHha7PrsWhfoDjHMnMx4bZmN48zxgog3T1umGrYCJKTQ1AYQjtHYEBmfvPFsFAKJwM",
  "key13": "7RJ59Fz3kcrb3X77TVqLjxLSEggud7toT5fYeJdHritkuJmB3TZ7JHbFAALmkdMBPQWGTSPgjQhcMa8izrjKtbh",
  "key14": "3KAt81CDx19yE1crjVCFNdEhjtfFsPQ4zqcBMB4yjvX8VRHBPbCpaCBBSj5ZXuZ5JVbrK5ujpoJyfy6HaLmQA8tR",
  "key15": "4UzgQRupcZdGauFrZ31FED7MiqDbMyYwMyLndgunGSXJQ3mBwBcESodjZb7UQUiSQMswhBLyPaDoKPXS7LVAmsxo",
  "key16": "5t7ARKJYZ65LhyoP5cfff5LKyi2MSnXTHeHrVVTdudcfzneQXWJHadNnTsuZwfY8BJdBcgor1VyquMuKgPsJGC8h",
  "key17": "4817GzyQp8Qxiw9Fa6LeAZSFcPDmFnVfbtaaLPeQaB49YFHWG1EaZbP9pqsaN32FdYbTvvgzPw7xZvPE5XJX3iW",
  "key18": "4iMMJ1zgcz1jN4X7uAjUb6Kcxsh4heHxGdgG9oUqEsbgcwutgeQqUVq7UtndfQnvKA1c18tRdEsaNAPYU3qJxtWz",
  "key19": "3KPn6jnibERttZkbvn4SrvzttUHrJVaA7FxGoGRaCma3AmHefZfa6KBvfec3Szzrdj8Ug6XNGhkKpmBqCE6biAu8",
  "key20": "5q6TLg1RTUxRLP1wPVy4DZpAXoK5C8JJDmHReTRRQbjiT8hR176fnWTA8ZDgyjZajSsPtiNWhocSPqZ7kzre6ow",
  "key21": "3gY1Tu8sYHuRRBhYjCjkyhw1hMtyJA7pd31hUaLsMi8gAMVS97nTbsdvXNbduiHXDu9qXjeiH8Yt3m1kP15mBn3a",
  "key22": "4bbPejV4LqscHafqA6NRiBo2SH3JzqSiooPtBD3cJztyoPN4Us2R2Ev4BP1wMXUrvCWQFrnrJsVm7rzpJ6p4cPXL",
  "key23": "3ims5phNRgkkgQW6SQF4WfDLHNY9tNVmDyzc9EcaURa2aypV7vAC3TorU5xkHeyZNuVZffRA6nbeHBQXhtDhu9RT",
  "key24": "5VwuMXoj2JQiCLJ7jYgF1KHbBVgmMvGipB2LiCGJgpw6AEAb9DfPNWdtxcz4tL9JAFpcrKENgp5972qWzB4qh1D8",
  "key25": "isqzWXypXtxdki82vU9ov7h2LKgtKaD9E7qaVTeVc3x3hAsiUC2sAcQEPJsEZoP3sA8xG1BhbWsFF8swJVgp2QC",
  "key26": "3KvRuN4BaR9o7xG1hUcuJXZRdYe8o56xrP9cQzuUvo7LYm2TvXCTRbT2kThgF4Pttd4BEuhroCDgaomWGUxtJmzu",
  "key27": "43MP3onBdPdLFEe5xY8KEfyNDVhmGDcdZdmcNLxtwPRsWzh9UfjUBeRCtoSokwcvW7hG2rPurodzH9iS4LG7ZgkC",
  "key28": "4eVdiAEEQ3prGyG4GtVU3uF2VXtXWBkcrUL9J9AiHzm19YR7TvXuyYKpdNLugnMkZR1aaY9YmRvozRHWmsMFdiBw",
  "key29": "5Mhzvw9dqmKut6JwAy1fLxtzhBP7xcQV8Bj5AuPksvjMwqTMixJekd1wPhuiLyhvwwL2tftPU5cWZcvvdRn2EHuW"
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
