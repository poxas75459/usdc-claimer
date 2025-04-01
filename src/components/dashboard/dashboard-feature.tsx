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
    "5KtQ4r4R5jZWv7EHDTfCnFQmMvvfSGNV8ZBYzUnFcKxRFcjSxpMuiLgSxe4FU5wCFZ38GXWGM1KH5UD5D3Yn9wr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52nf1atBch5mcQSVphb71TYrBnHtZ9r8hR4ScZvCC7ioG6fEkeagczmi4m21kpYs72bGgtNSSA6Csve6Qm6mLDjZ",
  "key1": "aaPghLEAvsC3krnj3hWRcviL6dro8WpBF3J3aY7KDNPSMiRnuzysnqoMAZb92wip5S5VnjQQDXSgVyAwRsixoxG",
  "key2": "chBn713XJWk4DTae9zqR2HeADnoFFJFHTb72axKkZTKMwGWZrYDy83HcWWcpJ6GSzrTd1UxCDMGfkV89YBM3C1U",
  "key3": "3QufoXoJiXAQuy8ogFKMxEnXBNkShhU1GhC8ziUMtZYAc9jNgrUucVtfsdbqNUP8MFpZPEupCfX88XU3iRw2Q5Si",
  "key4": "3Wx4KS4R4kPUGu8pmq6TfXoGv7zqS6qpiZtK6sYjiCHVZbyuX7qixwBY3W9ACSBVZF1ayzhkvgBFCjr6tuTG8T3S",
  "key5": "67S8Vc7Y7YvTJvbZnurLwAFeTSrpoNerNHtSj3dSsgsxmHMUjvj8Wn76yPuaPhuPhHVfovQvCkRme26vL37ViqNF",
  "key6": "3VVoVGGrTHW4go3VvVTqQeWsv565q7JRttdv3rnM4SBSEwoumX4psGZUk6nEsVQgZxh8dQLPa7GsFLmUMb7Jc2eT",
  "key7": "34GPjaV4hoZof669VswPFots5TYzyaeHeBdrc9mRN99rRwzeg3EEVRChcEamuzg4tUh4Uug9Kng8BLayacLmZzEH",
  "key8": "2VKBj7eRngh2X3fPfDDNKoRVc7GZqGNa6YoDxoZSHSWBGASNp5qUaxePi9zoysv5hpMdGTPtbrBS1Xf3R4PCiZLc",
  "key9": "2eJbnEKZKAQZXbhNjDwRt9VaJuUJsQsJSGAfTfVTn5GpjScMdvZtKg24ipbftZT77DQzQiQdWAtvv4vbp55k1UZH",
  "key10": "3zVxCVVdcFFqMurHrLknC6Zrb8tGGA3xri77FbvXZ6VmzSLwv4pgrtooqor9GjfR9ovtH44goqaZoEaFh4i6rmgo",
  "key11": "5L8jfMbuCkuL8yyujT8UmXoaLkRzqEtW7PDtFxkVsy2RyXdvDw8SmjkHb6yZ2NpQwBaxWkSVeaQqPNFLE9VjHhsF",
  "key12": "BVLWvHAMbQbXghPQhgP36wbsypLBvnSgzxELFhjEjKrNhZBrpvnfhKdNsUW6rawksSEnKaQGx6LDcf6RFuHcGNB",
  "key13": "2t8bgnJ99tvapf78Ca5qBkFYV2Xo2V8dSe1j2VzqnycqSoEZd1BYnZgFj599fKUcCBxRqKGpwcGSS8shW6dVScZG",
  "key14": "4Gbt6hLENTtRGedwswfCQHYJVMUhDCJrGQ8cmwdL2xd5xv3DVf5foeUYScL9rApqj4JTHTMSuNdTdXBXGzgJ5cT1",
  "key15": "3KDCNztwEJPHtN8UbsqMk6DQtkNcDNJUyo94MxzpKK2cHqhjPmD1Re71cg3dX6tzPFArwvsuFATcu7b8FyGVoZzi",
  "key16": "6Q5VuZNndm7S74kPQGm7GR1bQzmagfwSDm52JfNJ4gSQqJezV53dB4pj1LcaJHhNwvAarma5QVYpY79Ab7QqKPg",
  "key17": "kaKtAfpVo4qhoN4xUwFEs2T4vL25QHs8bZyLCJ8joJc9YxrY789MtGRDY46are6HJEXC14Yiz4DjKJctRsDwY4c",
  "key18": "4bdjmC3bf37p6jP6HnvYWQYxsHVQshHURWDCGoY6wzSd1RANdRCmbE8cUPGs3n1D6Y4VzVRF9M1EsQAWKH4TAVNc",
  "key19": "2Ft4TVtLmZDdch1mbdGK7TK1x4cxYtJUjEYkvqNwGznkUP4cusc2uEFzcxqk84Hv79nsiVi3mesPzKyBjaJG8o2w",
  "key20": "5LUfcUozTGkyAzkeKSZqPWjGXhHrYeqXUmYnxMmqRpQq2Fnps5qJY9Ueg7CJETgxHrAaVrPd4PzD6Df7CoUSMyXb",
  "key21": "2UVHxm85hKxESLZDP812iM2kno24VeVHnkQpXVa1BX1paFo6WsheTz6jwgxQQVsPaz92Lx5G6BvLBKcx8wKKrijg",
  "key22": "3z8pNW515KGcUN2hmg9JRKbSiRrPTmtsmfH5d37pE4v24gecQSsbVX8eYPFQcd633MXyGpBJpwgd7ngZ1jDzKobG",
  "key23": "5HXuP26ywoAwqDqURX8FGRQzjjfgKhenCrFU9iovMM7tjiVX6ASsDiLYRcULS5xkGUMsjgYT29wxKLBVBtWK7Tns",
  "key24": "NBBuRqrarVpTWxBXDMhwUn3CYPBg7TAAbd1mmRrdd1UsWfvSUp6inoLT8uwhcptEdQzp7yP6jXxZHuz9M51QPam",
  "key25": "8KjqGTUdVDrqffhordVvdxKBKwPafFwX5UgmDhkq9YPL34mfddnyTKcxhj8Fs8ewXLCwA8ka5uJb9z7pD1PVcds",
  "key26": "5GTDJY5JL1AVG4XagJ7Brp12jb6wH8PjNv3pWpj5YQDhiuwj6czEU4NAcikguBYfdAJpkVQYH1dFB2vvoaqGrZdB",
  "key27": "5RPkhWopnFpQ7oi3TmGg6EgMxWaESgpcDwpyZhM1xvsCv62t8p13LKX6wvHNJpkHuRtA5X4XbSSmP6e434insZdB",
  "key28": "33C24TKUy76FEh8nk7S6gVMQRrgzCin1gXjzkhdp1XJeApskz6eo9CzXXWKTrc4FGVSxAoUXg5SZ3hdruPSGvu7v",
  "key29": "66Y3qWXFFWpNeTsc6iCvP3wiqxYqW4B3y9Sf7vKbMvu8VV7QwdEFhHQ9UaTUqYKQcGB6J1FEqydbKR5v9H1UhoiC",
  "key30": "YcQVk29mHgsbEA7QKdMG7VGhPXH7GV56N8wjiTrYwPtQ9NpSChHW54vUkYxm7SbYnZy3XnF3tGCyfN7mNxpN14M",
  "key31": "3eBaaUjZ3dwaRqUjp47XrrrUSCqbFPkwSHMAJcxKT1erjEwys3TfdyiEwPqdJ7V4Xt7KYVENVVx9CT8C6wASasQP"
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
