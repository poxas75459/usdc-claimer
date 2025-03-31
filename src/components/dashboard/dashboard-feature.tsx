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
    "3bs6D5BtWQfysvoCnWeXCt94cz68cCFgr72C4HFw8fgdk4vwoqev83tjFo7tPPv94q7tHVjJSomKFkjsou8wyZxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "th6x4cSQLECpMyqLkDmJH48DWQTacF37fei4xZB6S7aJDoWpyL9EQQ4fMVRcEjdiCWrKA7SF86QodKmpdkESmDh",
  "key1": "4p5qLFFPTwx9KdPVVuJapp4buiExbMFCWsTcMAycsWhAgL7oKDpmXwRAHtpSsWKhAvzaL1qF9F9fYnoHBLBMD7sL",
  "key2": "66LvD29kntTMf3beNg9pwwfz9AFZH9xDn6a6MuZx59dwMD62fQQXCQNrLocGVK4gMiv6zZAVxCsR2HCAjBkNqp31",
  "key3": "2yM7hmfPi9os2ooy1rdRRV8UQWdYN23fDG9J6FvLFF828hWLmnyfaxVSxePUicnfdzN2hYVLnsChwJNbUzPWfx6X",
  "key4": "3zf2ZB9TTHVuHEwgrnGJBmFRSqN37Fjk56iSz2XSLpVDTGMDkMoNybZPdmpeWr4W8SmtCovDJnTNoVNxsE89ejHG",
  "key5": "5BHDS5D7jWq59Grojj3zszRKpSz2pR81ffzw32ZpQLwVVGtWFzC3fzdM5HT1WygbfCUxXikYSSJ4x5eBFk2QwHYi",
  "key6": "ydvh1Avzq5RS5FCJLNkpMNN66SUD5w9UjsYhMJLu3vzjnQWGZLyYZQce39Tp9xPew9E2hi6TP4Kf9HwtNjQ6km4",
  "key7": "3NWAnuayNbFC6fESbCv9ogC6vPk1WKgC6P6ss8Pbe7p4QDVZacucehgNobK7eq2c8T7sZpPisWYCrBjRia8D3hpc",
  "key8": "2bxfx2aiasxbChTA9AZ7K7UenVXVhH9F6GKm94nM9D7bqEMZt6mycfjnQAVJ4qzJw21BREqtzFwFN7LhmvGwW7pj",
  "key9": "38pm3zYEAUarUddAdHfkprfLg5na8EQ8XpPvNZtx861mce3ySXYLRgYaQGzuMRxXMdoiziyLRRBkUjrB5F676q1p",
  "key10": "22gsMGm8sMz3nL41Boz3KSV7nmKWs3ddoN8BjKt6tjzm6Zp5hHKHKfT6KUkmGGANJWacsHPdHnze8u3pqjkLbLpg",
  "key11": "4TG2fW4KTjGbB6aoWsvXm8Mx7rYKoYpA1sKhUhNSoFFkHa7BUz7kCKJtC5Vhu4e1s1Vks56nRDmv8gdFVqGQ4rPw",
  "key12": "3ELKxWia2bbhgu7stV7d4w22Fvx7ZvFv1UxrM34xmAKDEUGF4J7QjS8mneNJzXGFgpGL6bm9JWBpND5LCMWQhwEm",
  "key13": "4j7DHx3fgkdWL1qHFiuDBJjJoh3G1tLkE26fqcPZ492ZVa6ed42gDd1FcqizYsvdhWFy8cCXZMEXsRxAcfNguhF3",
  "key14": "4NVfBMFBUHxbBqzd9DhN5sqXK9Wk1GpkQXDCsLqjNaRr5yb3DVYeztE8Z7kNTiFF8JiC5f3ukC9naMrtZsKTV8Vd",
  "key15": "2nUUyDLnL7THUH9RR4f68P4tTfdk8t3jdEEfMW7ucA5YzgnYLBSaJC2BSMsdxRYRv5pR7ezcJ8vRB5Qm8EirjbZK",
  "key16": "3sQA5WEc4S9VATgQ36cXPsVfFSqBFkYm9A5HhaeVJkJUXZNvxYSG99ZNBH2rz8d7UZ3VKtX5JReoLZPJd7EXFBVN",
  "key17": "7Fgtb8V215ARjefvbBJ5HeY3jQMMzeaRGYkAPfDAg1bFtRRck97en2crEhEZo8PNVMrbRQS1kVK3fND56S7g5QM",
  "key18": "41Xy4Jc727hfYCb7Ard63ZW1yLceRmyc2cgxZzZZwK1HxVZNSrHEh2NtVeCgJB4QJWniTaPL1ceoPwkKqo7aESoW",
  "key19": "2fZaAVGYvfn6BZ91ATrbsr7P9d6DByosyG3kgzev9K3GpsvTewt6jjxCW17zEkoLQSj89ibfQBq5t8QiSoEGKxyR",
  "key20": "6ckbbTqPhGw7VZXBAr1QaadZ1cEhtyXH3iuRZvfcL7QX1ePQ9UDwfSmfnwn2bupuHHVAtJ27fmXws6TCLhqWxRy",
  "key21": "WFkBJCVKqhaZUwUXkLLSdTnuy33L47EDFZXtPbgLxMWFQQnsiktdfajCMfX6UKwL6bH5SsgG9PZbR3FaLUmKPyR",
  "key22": "2dpdHNHNxcSgiqZcqGBPE2ZzpNTVJquVEFYdbXA6LR4Fv1UJn5ydDxGfhe8inZNZLCgAG28CmtYuFbDVSd75x46t",
  "key23": "59JfLbKL5DmgFpAdi4S2n9zy7fXaahTQ1fM5KyJxHMbYtZaYsjmk4JNSa7F27Aj9uTgPrDWkSzWnTYjTLnBKqEnQ",
  "key24": "5ba82wbTgU1AgEpKkxBqcYuhnHWndLAEDXpqaPmeq5pThbfbURbTR6A1rwHoCKtfGkJQ14XY8ANnkr1VnCvQzwvu",
  "key25": "3nyhksfPvZrWnnC21Q2WSYrboWZGPMpv1tcpjHj8ipzQ6Vd6HvYRXNc8cBHiEpVszahR3fDjpKtyfgh44P21K115",
  "key26": "3xoiCwKAgvYWdaTtoUDuYzCLgrgzFTR3XuJLQw8PDw9WgUGZbMfMg4iBsDiF8mF1ERqb3dqexfHFcWQ2hcZRcRMX",
  "key27": "JWF4ceoJEihgkXUy2G8bqRWu4Skb4gCMKjNRdMMyyeqqEkeu9kZPDVQiokXBTTB9wbnrsEvRjgzCajgdPDhNQuu",
  "key28": "3QNDyBMmxpjscPAXJ6xDqvVyNXrks1fVCmH7tLx4C3gGquGt1nxRt4og2nVX7z4YBfFbJT1S6zVqzwaEBf4zLDUp"
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
