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
    "4UPYAaiX334PkbcGv5wwYBNgaZDVPNeKW4tukTcBDvfFaX85niurBWZExywrdKLRvYob77FM7UfRHrVzrLWZuqEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oYzcZs4DFFGit4i5AUYxHG2uWtj2J95kSq4QdwEDyMN5EckDA5YwQ8LpUgVkKLqUTtYAt5J9H5vDbQYzeKSg8M9",
  "key1": "TFWCuhAKCCC9PPHVYDxgD1otMarHHoEaphizhUrvJ3gTeHezEKiCbSMvF48mTTcNzQbccnKKugkR2Lp8MnyKYM7",
  "key2": "3cg4exgV1PJgyRUHw8E2tGQgPRwPY2eYE27D6xDzVMHTZk8f6PiiBwSd7s9prmDKemB1f9PF5uwzwgbKUCEvdFHx",
  "key3": "6254Ls788ep2Bs2jLpfaT7CH6iDT7n87r1MmTCFjbbosbz2cmVEppJCSGvZZa6rPF2GopdPh21yPuAUafuiXofaZ",
  "key4": "5Aqg1cfciu67weGBe61JgvjLJGqf3B5YxdJmUu8DGepgN6YRM37RjEVL1NyT1qVbM2mf2yz7Zn994fcv9SvmwWw7",
  "key5": "3PPPT2HQXMWx4jX6MUVeRfnGqDuFijVm2wau6y37N9USAFiVzeC1AqPQjMFXYC8YfyxLzmBXn9bzXPZGm1GeSoo2",
  "key6": "2bcYds4qKPbBFs6UmqyGHrsbnJRk7k2xREcCqDFNEks5VipJ1corDeTxRfE8AyiNCHmBLJ8Mgr85W5Q867fibDyr",
  "key7": "21VfFsxhxt7tViE7zzxYuETuJLx3V8xFtCXgtUBoHGPtsMeLsELEyyJdF8nDrqNPDpdsBuJnd4WY1qaY5jZakZNM",
  "key8": "CDhpM44WTvTofHRS1CVTo18aLnshVKYU4jPEsH4xWmG9FeYyY7yzFP3oK39W3BbabunS3TsStEsj8sqazKY1gWe",
  "key9": "3AWoErLf1WAsYoNns4V4kUBbmudV8quyXNoaTQjvd6wvsuhkA52Uk96zDr13Zd8GsvF1RBq3QbPVv2Lfgm371CWb",
  "key10": "3xbvvgLzG4v44NTD5Zjbz7uqXX3M2mMh7ESAT2hLnoSKvQp4oJfDf5eLDUth2RABDQQy7hzaprajrm8mZcTTdwQ9",
  "key11": "3oykguVGhkS5VdGNBfUxTU4A9DzoSRHTgeHSU13yF6AJmMynTL8FhsXPALDfAvAtQ1kXEe3nRRYXoMR1kVJEnFhH",
  "key12": "34mNUNQjZUZUxwTudhUnjMx7w7Zm4qUeD7p9VPuRXjvjxPrCKoe4kjQUw7FXT3ENE2YjGe32gF4udReFRR97v2r2",
  "key13": "j16ZTAdDTB4CbjngCnLmNvuxUKnp5PbfoWuTgpCZXWR1XpThJzzRsQcxNLSQg6rkLyb7ZGSpXsDtks65N3fWd3A",
  "key14": "3xBs8JdTR1ZCQeJN2jAnqK3Ne4RHCGmCHLzqQxQs6enrpTbvxobp4TyWrgMYLSxH2qoGCQPUPDFwSnbJ6FVHEjFr",
  "key15": "39vv3JxkRg7k1idzczi7RtZiwiKoJjQBMsmVbYApepxZgVNcar44A5PkZUmR1s4UouxrKNunHv27J3PF6BM6tGxZ",
  "key16": "AMqirP5Pv6BfxJ3vsLH4bfmsteoMYZVh25mL7ae1JZYxxvYApvaQDTfqU22nsfEuK4S39NWNjwjooBWL2ad3FXe",
  "key17": "U1ViSTaszetnhBAYHFVj8Bn7zXeLBnDH9WXMB6WA2DjtAFmu1opWehT7Vmapc3zAFQhmz2ctJd4iRuTp7xFdyFk",
  "key18": "5nmQzEMhLdLCCedLUxS5rrwKmP9UjjffxtAS5EFeq69XfkkDT4knMz5Zdf8hkmLViKPmAHtSodiaBcJ1fYM5AzMd",
  "key19": "2r6M8eBaiAg8Bo8JUiWhMX6FVHoRER478Tq1Co7iJAke5QqzvPxui9fvzZVNFbSzia5418RA71AQm88tWjyCMxGo",
  "key20": "3RLYRK6c5GfxJVQDvz8C4a6cJTmQAjfEDeCbsVjg1ARhNJs5gqkVPAHxVtDjrpGZyEdcRxPyePuQMaUDKHg4FkLq",
  "key21": "5Gaw2eg4GDSMpxLipce8j1VFs1fVFb3KLJ2hYKk6HFFas1wUTEyy3P3PsGvkemLSwn2RK51EksBaBFL9YXfqu1MA",
  "key22": "4JuSxm5CdqaSvxWzh75vvUZiiUX2QoGZCbTaNu9X11f2L6Vn9fBcZYDUnnJsnsXK8HqHRGdhFr8zKPZrnKbB2PkC",
  "key23": "4xz2catzRUUN4M1yoExGij2PKzBA5XokrNHzTtWFXLybQLShAYNbsXj7V4tJJ32MjEEqs8aQJ3dLQsnCqKw3Lqqi",
  "key24": "5ijL4gZag3XLHNjwgXj8k2oqqKF2q6Me5LMEnPsCYhjRdV2SP2iRvrsCDyx48EG7pgNi2m7KQmTteSnot5Y24YPM",
  "key25": "33oGPMRyiJD9j53GTRXn4y4ZVFtnP7c7uQNadUmsX7TSroe1kiqsVaeb31Ezt6zw24UbAtvxs5ZHGzyx9ZaUBbq6",
  "key26": "31qNRQjoz8BX6vz3yxrFHkdd2P3BxXxUuQCDQ9s1fPLKRxy8StA8NUYykrBkZEoj5ELcvyG4r96xU3ko941Ktj8Q",
  "key27": "5P6HpALcEBHaMiXTko7NFocr1spvNjTgM4NW8yRzVwFkdZDYq2JEdZaMSbtxECfSEYmGEHKUwdCjZVgnDca3bemi"
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
