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
    "3pmCyrBaJGivontgMvfpS8JU6h7yLjEMrvp8pUY3RTndFCFvfmjXMhmns9iLMyYzVHkHSgKtmxvFPk468T4zcjha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aAbSeNv3cyCMrXRW23LJv2BztkM6AhBytR3nQ57Ss6wEUgr1rqzry8wd8myq6K8wRdnjY5kwwK548q9KS1WKJj9",
  "key1": "5WTM97f2WxtsBNcgN3SRgN8B4TmrL1sUA8vdRVQM8eFRdnQ24azDg6cWGeLzLCygg5JQP5ZjqXjgRW8LPPCxJiCH",
  "key2": "56iNn8PrbpBrdBk1earAWi5tVtAPiVcNYgZb33GB4NiYqhxK76uMfsgnYaDATufSowz1SoGrqTmCP4Y6cRtUUwYM",
  "key3": "34ovGMUuD1wCFQ4udwBFiAvFAbncE6DGGG7W3SrrHQEERSECgFBf4wVQX9A4ropj7me2e2GLfKWbs7tDPjkRkV5Q",
  "key4": "5RpvdehcADbQ7uvtzUyaqcFTWgaorSL3BKG9m5FtuXJMSowrKtdrhMRg4SAHzZvS8pjT9tK9svjtcWVTr4g8EhwD",
  "key5": "5bXRRDiYHF2ELWVzxBxc4FDwqPJpVdPoYVwNJLVeTfhovmv7e84crkqEuqwmoUcbncLJ3TuMuqrsF7JvEGj2z9Bz",
  "key6": "5a1rsFXuN2sLs3p7kvi4rjj9vPQPdnbDjqZgnM81pv2icZ4hsHtraQvLRL9vNPq1Vs3xQiPwoVnia5isMmbMc2Ew",
  "key7": "4QhAHxW1CryEbStRX3LzV8AZbLnnbLKtKqZvvEpXWG6gDQTtxvXLnYQVhdY6QizMUTJzu4ZxV4BLKC1UFyj6hg6s",
  "key8": "65hohRYXEv4K58emZi3i6RDHhUFmqqGjYHpTeCX4TXHjAB3k7f4ipmA4ip3CwhXVb8YpLEQuJ5ky3jsHxNKZfm6y",
  "key9": "2Yob3cLSrAxXqyoifgt4Aoimrj9Y3a4eydraEgrSqZGJ8t8ttZPFNA88WbmLTKFeXoTBuXNqWg2vcRHWyM4DXtP5",
  "key10": "2uvsQzihgCvSJsPyvUcHWvWBYn5CavobJXf29ntXKzweGtkmfkaWESpqy8zywtAp9pyNaDGcAkdaqpSkxqxrX246",
  "key11": "4igatWfafGYZT9wvjMaPoHk2qv2Pc4MuF5sdJxsQTzB44L5bwF9ZUHQEoRPPbXgFnNYBA6Jwdd25QKXqETvyVNCp",
  "key12": "2bpjRXM7vHfnCtmoxsV1GwKE9t1R43y2MjZRFesDsszySUTtGQv4L9FYpw31zaWpJMJXq61rT9CPrWvZbdMbNhCp",
  "key13": "R9X5443uHoBxP1UHWNrqg1PMDBy3Ye6tXrUXFji3KzzYtX9p7qU3CkwfyK71j4LHdangLK2vT9zLsqbfAjmiQD9",
  "key14": "5Fhs3Czcji7E4vuWPBkMgaU74VK2w7bujV7NGdV2a3qB74EHcDsNCXow7id316f2f7bSsnGqwCefE8P7BBSZa3SA",
  "key15": "59WoKKhAE75H1UUuKf8GGEmRbLimz9E3qRbvXHXe96tZeAUhF6zV99EA1SDHiJcEYrQ5kBAH1Qs7M75bTfLKbUFD",
  "key16": "5R8hXtPNtoo338MgKbhYEYB5okeRAuhw3xnJyv4pymFFs94XNAGJ5z7tqoP6Gb2BRqjwaBddN3sL6D5r91xxPDMF",
  "key17": "4nhTsTYtywsDHi1ESjCYUfFMxwbKAvzvG7zjKwccUBStD6TWQ9ohJpYxfK84DVd8fSjFqPRgdstbZ4CNT5DcfauD",
  "key18": "2u9aeiDqPcHsqCgjTAXGz9WJdAPi6ZLctCswj2svfv23AGCegMvMkN9NecvhVnVveDCQqntgrJLcPmycJKqKitXz",
  "key19": "44p2SAmwybZFGj8rQhiBoKpWyAAHUciS57sVSnJeUPt5cYCGD14jJdWCecrYLTPFFthrfz3Bkwi8cEeaaGhBaLmW",
  "key20": "2kB8XSJAHvSk5A7fzJo5c4oxQkka7qESXxdFeMdDTiNRnm8YWQTZNL6bwLmKyGkr9e6vhYmaQ25eGRoTN5Ggqx4e",
  "key21": "28oPFEZQgZTDFP9zV1r7DKXCwUtVYUXh1wPvhS1ah5ujnvyv9wuejmTisg5YaMKRWJzGbDgM8UePChVPeD6PKD1C",
  "key22": "2ZqKmTEH3UMrc3Vtibee7HRQvYNmGPvwfHCfXTNnNvfbCeraKwZ4GpwqybCKb5EfDAuE8hSsmps6mX7ppAFz9eP",
  "key23": "wYwh617wSZHffze1Zq3oLsAmMhCW2PfpxpRoytPgftaGMtfV1qW67GbMPQUGfcJudBTpGQnGa3EwnNBdAj5Szhi",
  "key24": "5hdE3eJyujn46usrP4WcNiJ9wePZPCQGn6wxbXX6zztiyqq7sSnECDY1agHhdcHFyaiitwPoYoEgcQp8F9o1Fj6i",
  "key25": "3LzzdHY8DvEU5FZaTqBfDfMnmngRAR5ceQGzMcuuj1d9vjgTteeCzEFK8TRJC2bq6hQrTJJ52mcz3ZXv2fJnQzg9",
  "key26": "kBP5U6oCgVjpk54Uy1tAXH6FjhNJu7rNcea9CenJ1wyKZT1zHbF8GkC4do2yqyHwqrbUKZA7ivLiLEWubtvVBa1",
  "key27": "3iirVFUXGfeV7yGVw9UdCdHRx9B8AnYAxdmxhHFyTsahb8T1FvnxybK9e4szDh9przotynjvyACMkSMu8X2Ne7vo",
  "key28": "3LAEaaJ2sbLzrucqaWLG7VRr5x7GUzRvBo8nVda61d99QzEBtWvgcAzLhzqUk5sSAoJNTq7s8xJXjESNoWsXPSky",
  "key29": "2YNqeBsChsP7jjzDjjoanHwFGfMNgtqBAC2f2CB37x8nagon6fCZWDpGXWNtC6Eqi9kSFNsHqstfT36zYka6xCGA",
  "key30": "4WAakRtPsX7weKUXbjhR4Ad2zRPww2eSmabMFc2oSiXfdrRXBPGHDyAPqZZRnHY65nPYajkPEiKkckZ8a5mYTaDz",
  "key31": "3Wo2E4AU4XM8TJHjovrvisCAvCgvaCQwMpKbEXMFcv5XqoowpRhrQpZ6AnbgvU3NJYWVN4noG77w6WMcEEMxQmQT",
  "key32": "NTrDkJmZtafB4QUvzvSKfTuqJuYSfhfu41wJHkhRqWJSRhRCMmU15K7bXDvLsXBtB3FTtKWKiNBwK1oMDRJvkjP",
  "key33": "2bC1XCVs556XbYpRGdekPR17zLyqv5Mhk6g3xfKbGwEj7hH2qyvcDSyt8PVQE3KQKCtCR7goWUKKtSqdwHnjtuJg",
  "key34": "2nET7RWjZ9FEJz4LSUaL6c8qATxxgVeAsQ5Fsx6HepH99J1gRMRRN99Jvt4eHGj836WCTj1sc2YFQXk3Jp1Q42XS",
  "key35": "7YVjFxwCw1TKZsD4LjWWxfz6Aw8LLQ58tfxDv3CvwZpSzGwXXnfW1YgS42Zp6zgBgzfGA6VLzNYLoF4j8Ntkw7X",
  "key36": "3jpgsXnTajHNqZwHoBUWrWEgTN3YiMnqVdwddr5ibTZ8yV2fmKY8kpWAoHpq2KJiqdVnDqSzW1iqfbQYPVvZ6pSG",
  "key37": "4R1ZVZ2uAeNX1HkwWC5S44AVMSdePWnHSx1idDhem7kyxGWrjoDro1eAhEHxutR3vkgczwqyxsFXQVZ4ddrufTxa",
  "key38": "4LYybEY81WGmASCAF4BoCvDKXTjECAccwAPKoeoUVv7K2SUmzGVsFVkajoaCiLt2jZws5EQSqjk2Jpsvfj3dyTRk",
  "key39": "3Fw39bi3dSEMgpgFfZB1GJwB84U4wNwgTVvdhEa6xjeCmpX1wPEQPaT9Y9pZiMAAVNy37QdWEKopjyDqvpCfysc6",
  "key40": "3iHnBWi3gsnQsn4jdHC1yKbXCbd1uorYpaCgxodYt5UNfRGb2GfAyRkg7zJZxGZ1dfcEdot5PjPYtWJb2tbzmjrS",
  "key41": "2pqMhvbDf2Ntks2Me2q3zNjFahn8Eh9Qft4hug4gaui9tHQHRrWnTU4qMD7tv9atG8RJstHq1RRvmAWBCs6Vg6ip",
  "key42": "nczuemsbkCLrpKTTSH7Uf1131mYKHphrzsAa3LJmwdvDPMYshKduRKTwjYZyNd8xBEyqYdHQsqqNjxDEuhcsCjH",
  "key43": "J5n54Rxsi4UvNQB3mrVDPFMXhLJ8e2vsphwXpBZVnrYD7Ce2NvSx87d5Vx8G8MGypZKNJFNWtZzMbQTAmXAKK7f",
  "key44": "3KovqR7rwBBrmRuuyXLCWKXrNRKXkvkHZkqSnUfTsQxf1mCrZm18Ygob9x2uuCd78YQtNtNMQEabjU9iJaTjeSBz",
  "key45": "3HzafZjrbDP7pz96UrQ5XfFFwr9vG2rJ7MZmbwEjTHyB98M7VFyzXU623KvbXrtkRM7cXMPbAVAm3KWxdmsYFtxv"
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
