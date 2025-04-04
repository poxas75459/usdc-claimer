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
    "2ZVGyJJE7eVUUZQohvTsvxABWxHeaGbC36rLBn5CEfYBVNbrnvWdCBfsJcHhxqjjNHCk5DnQSjEJMXy58z6YcYu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WV2kXbMwrpcucVb8LeztAb4A17Mm842yg9b4tVmPJrCVEHfYCoab1rRorCb4KDcj12iay4PX6MS4XZiYaGp7ews",
  "key1": "5y3RjatMgbiDVtZRWU5n3Zj5q3Ta3XTVxR6VszbfKZQUhHu52WHHYJX8RUgnkxTnUeUdyWy6EGyqx5JiAvrDJrsT",
  "key2": "5r5KrTdLBdXGBe8aMuyPam3TBErGf3uNeMvxBvdjojdAzxXvKGXgRJ2UVUYYe8TS61gU3pnMLH1yLRMYMDK8q7cu",
  "key3": "5U9NXvZFJFGmPU4tLJK4gBrG15JUXrv39CoUjdaCbov3XbgnQM3KKmjiFeXP6LjNyWw3Kd6AchN5nXtyRhE5vchp",
  "key4": "4DEVDsH5SmeGN39j7Ahi5kHCUtYcGvChwp7oZJPALrxqNzmomZnhsta8D5PQsavJYviQQFxVzuMR6xkEVyfw6HiZ",
  "key5": "4ka9DS1a5SPjudUfUaSuEDk9TfkBMTzQYZ4XYsHpiL85uFdxSYqVx9XNmEyxx4oQHYTd5XNzvGFaxmsPw3pygLDu",
  "key6": "A2vWd3UXJMDV9mHKfwJhx5bytCf2G7e974XrvLEHiHzDM4bFw5XYLwHT67MSu1jpC6oQQqPLJbc8pVqFDXz213D",
  "key7": "3wupUovHH68Qq36qmPa6sh3tqcH9bTDa2TeE728ScwdCdtLFZKEVoeDtJnnMjZPvYuPQzUrADnRc8orNiCphr2jN",
  "key8": "NQzaSMqmFLDMc3AJhxvKpUisme9aT4nMWp7zqD8FCqXaPqexfF45k31Bzgws27FxTtb7bEsDPic6qaaG4tu5eYz",
  "key9": "63cNaSC9nHdnWjooecaXQkr1a9QvRamuv2YGQr1nUxe7o9y8VfGMHAPNzs6Dy3GvfcbsibvzEKQxcJKwgxJBhooF",
  "key10": "3xthpEBYZcZPsxuPftZWTi45WTCACdY1XW2XGG1D8yHHCZRPqH5JokmiTakMhG4afk2GhkmPYmNRXUK3jxtdT2Y9",
  "key11": "2aERZphEMBAXvdVhFKk7kUyWj6qfkSRP8waF9Kuk8JLEGvw51rf2YqDg8BFntUdXMBrM9ur2oHiMH4LpHkouqEaw",
  "key12": "2dh8ur5t5dFZQoAcMhm3sGbVCzvM31hC9fmciCAdAmx4yjajKqtQKMWpRcrPGQD8TkRcJVuvkbhVBh3BzaKT6J3e",
  "key13": "25Q53LiQARVEmPHckJF3yozvVYrmNYr1y7658Zr3zqJkP2E8AvkXi9Ue6g7zmE76poLnY6DuJ4RCA88kYsV76CRh",
  "key14": "3mU617U6NZR4jMCtXw6nbeSzsYRTfnb1E16q9agxJQm4jd1wzsW5SHVwo5deudY7Vq8gMmEoU3uoWqFYFiBdYjTC",
  "key15": "38514fZtwPJZ8Nm4ZJxMVFwWw7kd9unvoxDiP56hRCo7aJxhaFKEyUGaD84rxnLYbbsq5zMPMDGL1QywvcGSEDUL",
  "key16": "1LsU5b9D5dKjZTr9wkG88YKZfXJvmUWQietY9fFCNUDNWH11TdH2b1kwhz1z7yyTMajppjx34VS4tjPDaBHDnMc",
  "key17": "2kjZ88ya1d96nkTaMUfKuRPE6r5CbEMKa9yE5VCqPL2JFiarNc1CvmtAC4rxSkeHR27dNUhZkwvLVXi6qtvnMmQ",
  "key18": "395iCTn7N9dcxBr6vx51pyJJnGVxo9yeYKgzmRR8FBoFRjTsVYEtQUsnzgM9qLcXMhY55Vvv9wu1rh2b6f6ThU3v",
  "key19": "3uMWfj32e9pSYW6X6WVBbEQ6zKgDnUGf99KqvUNWbph4voe4snoQmHBWw2usg5PAWrd32MMNf9NXX2w6F75VzNKp",
  "key20": "62CWQm7DaBzMxKZntNLCCAR5ehszQULaFbXsxpSkiaRLqco9z8jKiaouw75aJhJya2nzYCiBaqQvaMggCGo4pEWF",
  "key21": "3xAU6Az1TJZrHr3neNBBEjqPoDxVfZmLuPUynwre9Jhv3L99ZBXyYaKPLyC3y5b1MokT5mFHk1H9BmRene7sSWc",
  "key22": "GALnoew66SKkheadvow11L3AQgzu7t6kKTasZtM1UUqz3t46RguMVMBPNVBMdioV2AkciVgENBhpX4M8PLhCCew",
  "key23": "37RJ5QRmMMK1CY6W7pvoH6kPMv1B1dPxqFCfssQnmPosSdEL5UQKZCkApy8PpJVCTZK9Gc4zix9B8izeY7or5Zck",
  "key24": "315uSzHSyXFUwuDNk8tqDzvk8iE9HXDqSJZFpvGnwbREGgfex1iiJbpbH31umWcsGWZ9ui9yqt9dYyzQUmvGV7ny",
  "key25": "3Gd4keZVhS1rpQVCg1mHYHDVSUQUYJoAyqwymHcSMfmJDe5JmowaZXe73cpzkH3bKtWpf38cbfPq6FNTyWeNW157"
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
