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
    "2qtqNL5aZxZktsj5SUQdVVyHkmPnTgdpnsg3PdAAQ2B9HCHto1jpC4jgmKdrQzh1PivzUhNgCihXtDQ86FghQiwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VZXcQ85roPE9vYQDGPXYsfNEM537PC2z9Y691RiMtXXXn2moxfhb9vdSx88CHRETH4cmEgx261UdQ6vLicDRnSE",
  "key1": "2QrBgLd8LyTvzuNm6WDkw8vDAi6rns5a8RNuB9fYtDfVU7MHFj8VFhpPx2RLNPYDXuTMoBkMXUjY8dtKQqMhCikP",
  "key2": "5JcxHgyvsfDUx1oJqQnNhXvjA9Yv5dfH3Nb5biMiXoskM1onW5aDngPQGYW6mrjWwqwq4p93eqyTK626eAkZ5e43",
  "key3": "3PhqdMvtQAoEcHkc4Qfor6wY8h4W4PEqELSvMHzpXvQW1rrXSPoRW2mBYZcQmf1kXkhZbcNwDitAPCsgmV6wNQZA",
  "key4": "L2XrbaAg1n1DHq1HKjv4f7PuWgLZdpbPJyzUVPXEQxrM4cjnJvZ7KCWtbR42QhbaiLE5VCCFaQvZW2SiAg5ZB5N",
  "key5": "3kjtVyPQBJBrmHE2YS8RtDvVJpiGR6XGD2qzmcXsXbrR5CQkQqkcN4ZebmX471zibPtEU3JVc1gy9tj7teYaoEjc",
  "key6": "45YbmM4eHq1uDtT7LXrqjW6pakFwbn1rb58LdNDtk9VtZxYie2N8r6BVP1RWsRK2FmnRAMVRHeitrZHzNLnc8Tzt",
  "key7": "5QLEPQDGjwDbRKhLdRUKMBpgCqRUcMkMofj7dAHpYV5roYeCCFfPtRFbDcuqr91nr9eMDoKBUbMbEAhJT1maEXXD",
  "key8": "51k2gPUzWtpZrQggYn7zHvX5wkaHofEV1xmjWU3WGboLnNDuW2hDTk18mDwZr2srbAL5gsNuokUg8UVHMx5ntfmQ",
  "key9": "5L9cucoNovFCys9qm5FYSBrfmv3xq7LeYQf7htHqDg3Fxsrq6LMs3WwNvS18rHdHPF3iZF4UxYYPbEbsDVoxTPY4",
  "key10": "3vfiqRPCyP73ZQ8SEvAe23U4P4UuGTdaxTR7gDmb6Lej8t7exGkjdM5Fqy3KmQ4FsueaeJ2MFDjdJ3r9HYbHVReU",
  "key11": "5y8jZfmyfLYSyDweUsdYBLvWz2FhbcNfRdVEiUzXkY29hSguHocHqGbpJrJ5mEAuYVuBTYQuFiJtFCwLHqRsSLio",
  "key12": "277Tmo8rPfQecFBxFjfojpSzsvqxDtWn3w7zTs3ereQiVXGAdXTwGicFJEfMubo7mcNW6jDUBim9NEDqxrHU1ftr",
  "key13": "2ohgnHmWPuPcEXk46Jmy3EThMbKrGEGebi8qGtrYcF2iNghTEVkra1QT7ZSaqvRuxFHecP3QvXRoP7huiBvBJwkw",
  "key14": "cJEoH2aHWtR3RFgdqPU6WvMHCigW5CcvEZzpmT6BGx9wTtxs7gYnCPfnHW7sWD8FdCj3KduaY71bZNNtGNrm3oR",
  "key15": "556tcseY9n5XCLjKqLtNMiJAELjEXnXoJGxXvLd3tCkEyrqz4rxY5c3bCaxQuE6pEWF6xqtci1DueeiRfpidA5Xr",
  "key16": "52CjUwwLpP2qbcgvotpMEdYRyyWWNaJuqDVciSPpk3jwZYiCKv3p5niGFaprda6FgZHeiz3kCyRFpvh94fCvYM3R",
  "key17": "4YLrcbx7Uxcu6ohUUBtcVJHgDE5RoZxNqrsvmCAuJDuzAfZZKuSEnJhfni3TetNensVxipapUKUVsxo6z9xicMwh",
  "key18": "2n2v7xZz9QiWT1NZT6Ler1ng48T5XeXVagagmTCxhuQGnxYxRAyGnwnxjWk92d87Ex9eRQF8cGecuq6M5n1a3Xti",
  "key19": "2nTD1D1Tbf3w3BMx6qLiv6PCWZ8PPBSqT7cYi7whfBswiUsnMyPCfUQMTaN6oSmQYXPwU6YbZoeb7vhHt5rLmBot",
  "key20": "3BqrCtY6qBaaLxu82ZAzcP9jhZPCM7VrzhvVHWzHh85UZrK2ikG4jwc4Bym2t1oSKh5RVtM9JQjbiry4S9WGB54z",
  "key21": "Voo64pTtJMsBuTrQ9jjdFLwwM8Csj4tdVqL8SHCpsMfPRtTSoDoffZ565bafZhTpmD3HHAuhTtFxWSRrDcQqCJQ",
  "key22": "3nwJ7LkFJM6bWXtL41veVYkhVdnBKpXQbgskj5SyA8kivZx73e4T7E3w1r1rJ96AzdDryN9juW2n5K7WaVMcErhz",
  "key23": "3U3vh8n5tQ4f7v5oex8vaVh4sKnSTHYrvURvyToXrUwtdTZgfrj8uK1kS8rv3DJEsbSZ4QSFTv5NfVTVpeNBo3HP",
  "key24": "2VNtneAxfituvobo9ESAh9Jg5WSdvzZ5sfhsJdLAVEpeppSK4y32d5q2AjAMycSeaKg3aoNkVhqqh6aow8XiGXW2",
  "key25": "397WV5RyrYrjPuoWoBdSz5uJpMfPrhDMPW4NtxM5dBEiT8SS6s46qmk4grNwSKdHEeT6CnBnNX3xJBvivLnHV9k1",
  "key26": "E2zA98C7HCEBPpsFVVYxT1Bhgtf17FxubWj6cqg6UwBhV8vgvooLLuDuSKDomJDzoE887mMExj2W5uNnq7Sd966",
  "key27": "3SLr1Y4vyTNp9FoR79fBfrSULrMgNRQE2cEhVFEndXnmpdFWG8uyhc8MjfVRT769nwMDdu3cMsArDgJVXf9ijuPp",
  "key28": "THwFWezNspxMoFnS4BqFFRdJ4QBqudP446CunmA7A6RBPwVYHVCU4mWMan5UxCr7SkVyMhnD45v5156BuQNDkn4",
  "key29": "6521FFZZkx9bJtBYFND1DZbgXFa1YRubA8T6cW3GZj7tRBNdvJ39i5bjG23XdFcRE14UUqjLuzGH8YfTyXt5QZSG",
  "key30": "PsfASEadJe91Sr1Zhpx6j6YfEiSfvt3XwmjV5SJnNLXsFBMqRdt1oX8Euohww4aeyxxoKT7dyjCZFRHMMXqtkX4",
  "key31": "4maiTCWigvczCMxGMP9VYW7FPiaNxDYvEk8USuagn9qE62TDj2sBNbDMSCRAkp4RhL1Z1zgC6kgx1ZPW3WtMgXtx",
  "key32": "2iPWhPzpxFbLCsdUNv9KTqzi244Pa8Dryx8m6xoaX1VivAFHyj91siVskVx9mS3JGjEKB74fufjQMTbjKE6mPXjY",
  "key33": "yDh9XixfXwuA8qaPfWcC1wsh5P6uTfFhBMXZm1EFw9onZxYN3fc9nNqPZQbJ6nmpDSCCUr2tBvuxNkqLQkAQfEb",
  "key34": "Ak6mMXknMMfyo4GDracqDUTe1CqGUF7JW3zxRCGgntnuJaFTX44t8EWqgnVUy5bKDBkBx1ccoTt9tJ8nboa1jfn",
  "key35": "5h3gE4fR2wN5ZYbnHLDqHQAEDKiodvPGpiD7bgNKRsAchCo8i9MLn2o1NchPSR9MRskrhSsCYqtHsQbfsNuPhYi8",
  "key36": "3QFuT3zVxczd3ow7h9PySNmtyNokqzPCqqpSeNCczQsqGPoVpoEu3TH9kgryTCyiF5oUgLNawPoa7mEotkwzuaWi",
  "key37": "5QrUmyHZWfm3ea23Dr6YqbG64UU2pFMKSZ5msfFVaWygHsQLBq7Zr7LyWLk6TPHCmYcBMboD43P6BsNCfiHMbJRJ",
  "key38": "42Q4CTuDHrV7FoQX6z3f6zYWNjq4TEwASHn2WLgoPyFrUJ64tpXiQd5W9Qp6wPjgadpBbFR8r2uJmeRf2HM5ao5y",
  "key39": "67djFfFEqX6dQ3QaibJRXgFpzVEM4GR2JQuJjWfTN3LgwBcGZ3u82o2kwQhCiTmg2wwFAGnBoST39Cz2c3YZHB8Y",
  "key40": "2h2HUKMLri82GQAmi9Kks2J4imaGp3EotdpL3imWTHnbRAJGm7rted9HswyLKqJL8x5inic1AqwPTdKUYDuhQv2f",
  "key41": "5xf7zjjihEwyViz22rUK7TMbA8g5beHiFRNhdvJTtRzUcH2Zv29bMZixzyERsPhaeno59RLWhPF4L713vXQCZFnw"
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
