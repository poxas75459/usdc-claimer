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
    "5g2E7HQXMYNb9LsBNnRcpAXeLap16jEiN2DQmrHUhd2zv9L3oKtJtraoxpHF4kseVptYLcJf1uEQUG6dAegHXB6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27U6UfeTQGzGhcJfgYSuEcfbb4mvvSbutdvQLC14KaRDvRqEzYurDqQ2hmP1CekJnrU88Mc46MzDRfvvcN2fBdMN",
  "key1": "4B4SdLK6RaTUsnFVNpt9JB53uPwvZzaEstaLX8UqgsTe78fB3oPu2abXRFTjF5Z1EtSvtkF2GF963xkuSHZMJbaW",
  "key2": "61kektSjyrU57FaxmmBb3TpjCDx5MunbjTkdw472kvQwpyMKoJ4cE8HkVCLdxr114BqW81nK8XB3UEzyLLZLC6nw",
  "key3": "u2pBPmkRgDnCZ44eHCyg1jHRyqtynBkqMTHBgv2fvqpUy5Zq8HdjCjNe1fyQ1S8wVtaxNcMM1LMBCHXJ5faFGCW",
  "key4": "8bxcm1Y6qtxAaungijbHfBy3BvcUMo4ZWbLdEBfYWoNfEMFaHbsHveNo7pjzAb1nxHdXvJJGwmnpz6nFW4qTrki",
  "key5": "582WY8qifZTCYMCf8VvzSbWhU196UQjcnawyh62uGHGTEYxqtGMdpr1E4JjgfeP8YRpaEaprn8h7deQ2Ls3tD32w",
  "key6": "q8uQGx2oTkTpYSxXY12Lw8W1NqFQ49tWtZHFEqiLVf7w31RC2E7SisqA5F3TWd7TdccP6jtBQjekEZsjd9zew1b",
  "key7": "4gVsMJFTm4upJvZmppLSsuzdWGt92CavwV2x5TcDaFzB8miYYdnE52pr3tBaZPQEMdnihwxQMSJKSunjjawU8Gco",
  "key8": "2oL5p9EnB3RthzpLFVZjDeBE56uUn8yCS23vFXftKGpa7uWhV4nVyQyYTz3UUnBqdas6vWxKU3Q6TtCucvQkgbHD",
  "key9": "3sy3uL8V8SNJ7E31mWSiZtaYqnjNAnaHe73RJsyiF1NbxqsWw2FfByZ5ytg6U4SkPeoxk9K1CgbfYtBGk7x77bh8",
  "key10": "24kwkP492CZnMDFLKESsurAd18gJ2Dzrk2cgmfrWfxRsbydFCxpUbtEbfSrGwNvoFPshyc18mNtFmeGAiWvCurQe",
  "key11": "4XpKdFrev1tRBQQJxWZmthSunCLvNVEAnAd5TnimSFF4SK9VMGRiLx8AFVgzkmVQjAaPVGbowMgpwbQnunAmbzAk",
  "key12": "JjxLS1UUCjZZ9pqnneSLELqkudEhKrK4ehJc3DmJzm2uZvVs7XZcSAxxopBBvdbwUM4xFf3dztUi2fajjf86EVp",
  "key13": "3kkqbQSGxzxs7YzBHedxNAdCZr7PU1zZeuTcXcEk5BjnYDQ1yDNPGJr3nwuYYbPPGEht3REDeDxnrQCrPU9f5BgC",
  "key14": "4MaxX545Ur1VNascVhFxGGNrF6qjyMfXTWqiz6WQ5RD8kiroxwSSuCUd8oAaRhTve4Sbz8Nt8CMgw5scLPNGBPtE",
  "key15": "56kzk9EV9g976qJ3mdEv4mg7mXLXau6294GqnE45u5q8D2fCdA5PQVS3gQirH9hYRyh3uo8UaHBcNo5zG3rkvyuj",
  "key16": "EgdgC6kpu68i1vfMeFVn6zJesWKknaSpDEKNXtcoB24jD11AjnteY2ujoPAaLmD6trt9CcdcRek3nKJiLcmvLWT",
  "key17": "44SymQpUw9WGRXCiUCgpcEwh2GC4UMNXffkS1pCM7mojgXxmmoj6cFCxdsoqkvc8RaKsyETQ9aogZmdUjqzn9ewA",
  "key18": "3Cbgj1pPG9rbHKJ3EmNUYh9QfS5qiUVjs2ZXHnNz1pxygHBxAFvL5SM6hiBzjt4xqA6VAtREJnBcfkXkA6W4JseG",
  "key19": "s24uZ6tCi67Tx5ztiWb9fdY4kZeV42nEJHow9YooC6PrhNjXYiaDttfHQXAhfb1ixRioaPJ3K9xPcxBbHC8Jifx",
  "key20": "5SfpUBjvR88yN2Q9ZgwwqujBmUgLxpe1YRUMDJxTQJQzCnfBGvSWuYmKA5LMWPCxcLUCDJqFAtUZGiY1oVUbf9ni",
  "key21": "4nkmqmuejTRq7JD2p6cGKCDoVxcZRW5PYv3VWDkt8cPYx6bV1wjTEk6AXdPrGfYxn7VtKU27SZSDoVPTLfVLgjcp",
  "key22": "2gBbUkSMBCQTk1JhiUsCDqapbQsnxio1mi8LufWsdNFGJZCksMyq3Uo2AYiScXHvgVkC5dq3kn5PMTXsy4ejxAe6",
  "key23": "4oHd6eGf63zXy4MVBW4yFSKCjY9KrkS9Nkauz7bFMCwRS7cQ9tvd1q6fHct4cnNxrgbKQFgqy5LPRbnUTvXCPPk7",
  "key24": "22Qv2RA9mxvXPCCt9tXU18djhHtBxbrJP64pmGPByFLBpybvNPuXyHKJkvpvq9RgjWyMmh2C7ixiTAfUnaZuDu8Y",
  "key25": "2ft65pw4qFXNkAu4T94Q2WtFCQKcdn69FFziPTiH754pF464kfDiFwQfyZPp8ugMmhiBjGD7GKPA5RqZVbXVx4Yc"
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
