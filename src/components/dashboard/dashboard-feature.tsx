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
    "4Gb9NFLL4noMbB3dCk9D9Y4o2DMYB1Y1SRSVHxoyqoX1WteryRUUF43ei3kUBakefBK7Waa2bvmqpBeahXNr5BjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VJKex7ombEYY5YyB8bvLwoY9wwWRakVSDqqwUb9YE2uuCc7FU59v3zuwAboan4461j9hQxggPquJLLAs3TgCcy3",
  "key1": "41dQtEoiuoLykFEXvxaJ2jLGQxURa6KquE7Vj7vrzscg1P1gU3edqN3s7xrKJQr5NjzHicQ1st1geqDbs9pyc3g1",
  "key2": "B1kFkDuqyLcVbe2ZorirrPD5inBe7j97TN6QCTYEngYZrEQrDPeeWSEsrae6EL7Wvofc2RDToT1Ruge8DFWApkg",
  "key3": "qTXztM2zzfSoQ8iVhmaxBJVq6ydiFVWe7DqkW9HenZC8p6NtzzsJ4L8zQ7fd4x1nY2DmKoMS2cr7UuFefuW3pzT",
  "key4": "2iP6qGDE5Cf6Mh3a3bUWR2rAMZQUmn33hRUBFosWSnLgcjwvdd6Y1AdGkfJXj8E5zar2N4v17MGksbGCVTykPL1q",
  "key5": "2hnpk4YjQWfy4GdR5Qtahugx9PpCMDqG29NmnZpGMiGDoLERU6pLpkszQTyZLUyY7M3xktwo9xEJgabjUKXpVpXp",
  "key6": "29Q2a61h6FwtNcMLB8H5c3fNEDQ89D716QG629rnGLcX1aKk4VYrfaaxRnMjAcAnfYCkbVica4K1sZgwzkyLeuC9",
  "key7": "32AhK6cYpKY6S8S4wgsem2k1o85j5dKc7ZEj3T9Usq7Cp1qmoEVKgGT6QhX2MtkfxX3x7mXudwfN34jf5KJYwFBH",
  "key8": "3ErHYDfPqPke4NSRR85kcqqG8pHn4akKjfzc7RQKbXdAfvoaw33U64xvAUzURcv3xQEQ7knAND7pJctrQaEGf5o",
  "key9": "4UCeRb5Bzrzk9GFQN15kf4WJHwBSqhpr6P3FAEn7CZA424zer7jhFrZqa4q9YMzkszco7D9DuvwSB1hmhHchM3Rv",
  "key10": "zpHQPAMcXtjVaRvahzUr9uUC9561YFJPHNVaQcReL4ULcdZbDpacj4JUNoUvpttSv8ci5cnec9MtPqG9sYm5aQ3",
  "key11": "3162Yez23RXoWdxAAfBCT3wWemuXu3EdM8rEiyABqeghmXLtpGwKq9NefzgmKFD6jtyVm45usfAPfR9gDFpo4afR",
  "key12": "2ouSiVB9n5rWfHj17cFKpqYve6KojCQJNijLhJaLsi9caxrtHHWqPUYCuCCWXqzo2RpHLuCFN36J8gNSW4eA12cJ",
  "key13": "5dwYdX7on3884S88zo8rH7d6xQXHVekdNCrwJ8owiDBSnrAPL5XSk6RjSgGLdTwFNj95f1Sd8kL8RajMQg2pf6f",
  "key14": "HY4XUjPDBtu5yqJMk23M1228x5GaxiCy97qVoDzTbcjg7ZvQtTwDw5KWgg4rcMGP3gvmjigZhyRJN96AqFmDrfA",
  "key15": "2o7XpXwjvCvB1qU5zm2v5TdHBEpY7mpu99cEzGu7F4c5gscUMGyvBLLTRdzyXccCEtoywaJzEDCEM7RqzenyAoRM",
  "key16": "25dN2hySWyDCY4bPpVT1wTrSAnNDDTKNDfev6mzbDkV56adSX7Y8MFWiGk4m6bpJN9P4uCEcrwWd2XXmJz1WeuJk",
  "key17": "5vgXVtUrLJEbkVa1EwAPYs8kLKv4SDmN1G93pBM32cUUDNCBzZiwfm7ZGvziwhStaUuP1tBeq9cFZ5DrARbVCWio",
  "key18": "5exL7HJao2j6Tsckt4pqtPVyQ2hAV6EGrsVfb7aejY8RmaZe7Cg79Xem59qGfNjmnTXpgUqCZknbL8PsuHW6CvUX",
  "key19": "B7RRipZvC7N3KsHasGaQ9Z45rxphHMq8ALLh15izgWhM1kyXVrw8J2CCQpgAQwkqJy49S5ZcszLSoJHfvnc7RB6",
  "key20": "3hBsUR9sgv8bq8PoTx88KTWCTt2aUDAUu5tPF6jYLTzFzdFW1u7Xxa5rg8obx15jgXmUhmqVgdzpzSC2hRJ4xLhP",
  "key21": "45xgmmRdn6k8vchuPvabmaaBBniv7x7py593HrhhBszZZA3Ni8r1V63BYGzVsdkygRDo1jV2jMVSTkB1ioFiK46A",
  "key22": "4ysm6fSNhTesGSztHSpHx8w6c3zokCHP32MYcr1TYHSLC51DuTmP5jgLsg5ZzD2pybHTFStVihutigQMEGSiCfEz",
  "key23": "2snhHvVWArzrG4e3prL4MACk3SkNt27wKkem35dR7w6q2zCg1eUkL8nbmRKk2FLmVNyoSBdu3Ct8CKU3fVspjkae",
  "key24": "4dy9ZV3qAET8TqadRUHmy2BCsJbZtr25MBNtJeo9Bk9ipqu3d9NLLEJD5v1NuNzooACLcKro5Vam1oA898FFAYYu",
  "key25": "3fgzMTFdLCLFLcH77d9nGk6hAwpjWYuRXaX8yapE3sZ3sRgSM4PxVmpxARB29rA3pjz2iawxQ9V5NcmJDhtd69Ne",
  "key26": "5xjSsyuNFJm5Y9tbySRRTrZFTtoTMgH43fH7R8nhgNRdoJkdrTkbWhZEVtgwLwY2sUt7Pk6bwthwY5bqEDf2CRJj",
  "key27": "5Fwmj6hCw8NcxKJZMCAgWs5ULBJziEFNSXRdd6e9i6qQrFQ9bPiz5TE8BVJfycnhDC3VtGahe4osLkw768wCsmFJ",
  "key28": "5dnn2ccB2ee2kfS8CBCiZXKG2itzjn9RJHoZvuXPxRNw4g2rwm6vPQam3STr4RggyFagE1fQVFkwqaez1RwPyonk",
  "key29": "4LCPsrArCYimo7L5VuYHHWWCh3YbpHEPgfemChrsBp4q8i1VQo29652NZdvuA9RNHcP84HaGSSXN8Dqdxe5AHHg",
  "key30": "4t6ejBqJkdW47rfijFno98QKkZCH44TcwDgK34KrKZdnwpPnwmxxvbHvLxrUY9QeXQVNLcQMae8xYRHgyYQhn5nQ",
  "key31": "2MH5nwUBGmKh4VVraFUqXHPpidZUhGPHjUXBDzBa51CSVfrQ5yPSNf8eJnoHcQtpNevRxoVtkNWsufM2jNiDXbbJ"
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
