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
    "iXaWNXKre9QfBa6oYtaoJ2NL8uQvo7Ji92KG9jt7Mj8wfBibSjeYSHVt4e9utKmkbryyRmdVqFSikBbdf5ToCSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jf8UBCYMX9xwWDTZ2tXZ577VQyU6xdB5kiymgiNTUrsVF8xPe6TRWyoFrqAYP8wjA7sj7YCi9jvmaDycb5b3T5t",
  "key1": "qGC5rD15iHKQXDBBpT9MwMVGKZ7k4RNr7U7w5MXknv8LSpvsRR64WujSmbTKYjvA6CUUB7nWJLmQ1cpNgsz4KaT",
  "key2": "2bSDjnLWU3GLPxf6dLjfhMeF9bhuZ3xQN6Lbn7ZuCaPnXsQEbee6Mt7EuSW5gRGViDG9pJBM1zSGLFKcG3Et18v",
  "key3": "5ySyFTS56aMUVFsQFWEHe48PiRKMQMiRd5zfP1twe5MwkT2WmLFaiDFncstWp9xetkCvop7RSJRvbXkCWNPZfeJm",
  "key4": "2x6v7XKM7iKw764T3SbkRhZmTXxPUCQYVT8Pm6rvUyomLZvge8d2CMuHSmHtFKrsF1q6p5DV4xBXUV1dVW5HRBeJ",
  "key5": "3jzPTnmkHY1W1qv1vHgvnnXvUvAzz7egFYWKBT1BgUzdvkEyLxJ8TFjon7LrJNyNjz4YTbL6uQC9Qj5hpea24PCm",
  "key6": "QMb6PgXDF8sGEScgCb7QV825ft1o5SeDywe7yQseSFK35X5YY2RsbVbcBcbuXsEE5PABD4uR7piu33zRjCueNdv",
  "key7": "5dHe1EV91VVPyPfK1k8Lk9d8hi4wiJrNJKWRXzAMhLsXiQUnSeFyo4ynbVPDsViuKeibnZxZd3ovGErERytpUo7z",
  "key8": "LCz5jXD3KekYp1xeKuBqreAVWNGfDS3UhedTzG8rcjRDAFxMSbWkti92SCKzdcdYoAD3KVTs5GhmbkazJoyedYH",
  "key9": "5U5LCmquciAqbSmHWMGUyqBrDn2h7wBmq9PYH6JxgApTd5gc9pQLgmHcwUthSE1bb7LnCBeev31VeMobQcWQSQ8v",
  "key10": "61reZx2qo94TqBQ9v5S2TTaxccLyRbvsHmyJhWoPf4t3phB37vWWKQ5fsMYZrdUfPYpdsDf3tCdwa1P94cMhjgmf",
  "key11": "4VFpFGv342b96tY1N6Aw9MeCEY6trE5zuQGL41mSTDLdhHX4Y51SxW8cfNcLzBkWV82YxG2ZYkdzShmGtoQzPsqr",
  "key12": "RatTLdB2PYsqL5Kt1P1n8wSjj4TmrZQPWXhKD3ksFQsfsDV3kvxdqFmxZt6s6ccp1BC8HJ3eKWU8aFELkWwU711",
  "key13": "3Tq8uVzGbS3pwu3S8TgBqiCi5ZHeBTpHBJQiiXxxFK3Sr5taTyxWzW7pyFjCsVx1R7cx1F1AUyfsrk73uwd5S8HD",
  "key14": "3ZgUpJ1rhqdNjDXNfBjq6F4YoibRhTbypdGswHjwoV2zHfjMoJyiLESzftpPwL3rwAyF56mVqfc272GgW4hp7cMC",
  "key15": "3khA8NrqnMrCedkhHWjzK8TaTi6W845Mikzbp7cjuqTG8d3qKGdJEVVv9SkaF3iBHzZY3oWCbvg2g9TKQUPFt38Y",
  "key16": "2FxyFSAycfXu6MruZ3KHDXEnGB9HUY8BmiqTaV2DKTSexU3hFsoTxrzumXheAj5qrmAyYKJ3wRQ3ZHoBhgPxif2H",
  "key17": "5ASKqqMRmYyZimF7VJBrmPPq2LYeeWAt4WSijptNRVLb74ducEEX6GYMDfU7mRPNWC4oWhcWUTDE5w2ftmfxm5Hh",
  "key18": "3PEVQszDceLwsZ26iHGMx1ny6oQH9okHzTLmHYeEXuPhngzUtdh4veihbyicNkLmsHebSXitxhtXXCnMKDepeLLs",
  "key19": "2UmCkEMWkFyM9LTgH8bfBGW1K6Jocm9ra9KngkWPzzPciKJ2bk6fTu2htCDQiwMBLWmx9khU5SVZx5ufBwtrTf89",
  "key20": "4x9a93zvuMnRNBtfpsBXFzHRBAnTPzDiT6PAtJor4kDrPF9xozsD6ccqDXSYwpgB8Zw39tF2JrvCCNLrr6Cmp5tx",
  "key21": "3MZZk2bHpLRPAbzjMMMzMAQnSkpX5aRec9aeSdr9QFFvpBr56udrDJzaV9A1NmDuXtY5EU8pZdzfofsEqSe1sBUR",
  "key22": "2EwnWwPokJ6BV6G1dYdSoQ3SgjpzVrmLG882ihhyYBBhxKJafj5BqUhMoJNCiJkc63jsobrBBBuH9SCEnBNS6i4q",
  "key23": "4nrFgX2t6KvT8qXRxUS9kBUSDAaG8YcchCsEPcBurBPTnQNvi3qsx5NA1TK1E7vxKVmazkkRdaxRVk2cJ7z47HF9",
  "key24": "25gDvJfVTL8KeorByssswgFdirfhyWsKpGumWCaeEPaoU5jpmLUQqoyy8ctZyRkQghBCjVLZz9KfDb6ZNjV72K2Y",
  "key25": "vGVs4HLe6u59GMnDnN7Pf9HoSZcAnARBxiC6eYxrGPapxuFnRSpVMPMambBmzocMYdqEG5j2zD9cGgfP7mjKVRc",
  "key26": "5W9FpUkT3FpVZpTzx926T1zfxy9F4RB9tBozRCbi5RGKVSac1c56yEUGqxzwt1VEmfsFEjtcTyxe3DE92oQkzACH",
  "key27": "udLLzWAQyCiZWSjoxMB5akZ5Lm6FzMohnnEapAEjuRTLB7s9jJWpLYDDiuvAN8dAYJoUJx6DHRY8wTfRof4PgRt",
  "key28": "3GS1rCDxn8owuS62RsYmdvwTb6mFn9n1E8F5VrQncfZZ6EowBEFiSGzh81dPwd1C12SuD3itqaRxSuG7rKpo6J79",
  "key29": "5Y58KWLC8Zsg1VK9hswgJAAJHT3QF4Tf24fwYqTPuEhDExxqnAuXWEK3nEQdfDe5SEZZgHUx37YLCJjNSwv5gUrw"
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
