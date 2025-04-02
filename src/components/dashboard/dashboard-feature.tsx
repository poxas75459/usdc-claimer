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
    "24RdQUByMNgn2MyDEAq4JMCjB1DRFBY7qSt7WvS6d7vdLJ8hzW9Z8eAzK6xWr6C4Zf4SSwppRL6fsaDPvTTW5vBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b9ZeN8tW7bH7sb33K7nPoXQgeT1W5nCVzYXV3sbsnMzeUvnGenz7fhpiqGto7mPnESj6tS8r6ZfSoLiZCoRG558",
  "key1": "65pzBGZJWYTfH6TKKvVfbpYw3a35CCMFzPYEMacw19C9LHu6xRB1KzMBb1XvrDLZ7UvCTXNADunuYiUava6SRWdV",
  "key2": "5w7rjXHiWRT7uDbAudSWPFZJBdKsAGFLrk8ksQv7HowVkzMe8pUdfBamPsCCBvMBRSzzqSSqBG2AEBAbD2zrBdQ5",
  "key3": "4pZaFGDxsmoXz9kbj1DfN1J5Wg1uDbuzpMwmTzxXcicjo4jFSYkWP34tZkBDaJTZBMBdSdkiaFGCq4ikCoph693z",
  "key4": "2L5c384eA5DbGipxdNRBE7wWnodyc2uTJDDSdhYsiAhzj3EaAbpcmSBq96bxjSk1He52RaUGwZvEU7atUgDru9Tp",
  "key5": "3YowWjPi426EnFet7ZCQUWfm5h6Bj2JrkSSfuejXb2QndH9LA3X2YW1rJ8PZjC7P4k7vwdmYZeSHgztmJUJRRrzN",
  "key6": "42xD9C6EGVX29XUGdrJren3cLetenz9FaHtLLTz7mQp4MxG3TEK1atCHARgQWSxP6TvbqzjRXBeQzD5nc1hnetnq",
  "key7": "3JsKjbFFRAqbA3VjWSeQhqXw5EcKHQW3H9SxZwqDwickoq2zPE9VtLMaTquFxD6YSrG56GdqntPXZTLMhgUpspBA",
  "key8": "3zEbbnByc16zLXocw8EFuRCuuADwod2fXcoPPGNRn6hHaaLyjfAGrt755PUsiHbpw1KarnhzAhBFdLAHYn1Yky4A",
  "key9": "W3dhtVQwYuiLTYLTKp4Wmz4EpVPwU16QAwmoJbPd1dJWJyLQJXQ5v89NcPwno4xgrxnQ7JYcyTMMN1sMMKAoqjS",
  "key10": "5j9dQ4ubmyuYoHZsd2LNCkNb7hThaJ2JKGV8npn1LcgjSoVy5EfqTD17QjCQg3t1mLLTgJZwiTrmD8mXGnLrndkp",
  "key11": "5iZaCsxEHRf94WufZDqiZcKr4b7QHqdJfTNye4L1G6UwFrXhpD9rFtMh6HK3zhXiQ3ovMBSc4gRnoK9bc3d7nY1t",
  "key12": "3wTaw2fq2Q5HaMTeQUW5iJhVg1ExtA7FBCEQ5KJc5kB46ZDshDNpaDSXDuJUCf9vciUPZ5G6VRhNJKBmGBkYQ4t8",
  "key13": "4DKCq5AqseehZJQd4JMJZHeSJNsb4Y7pfRoBvuV2n2VwZHsghW3D2hR25s91ActVmJz1Wp6j6VvoSFHuneXvbnMC",
  "key14": "2XuusKx8rdf7YRhJtdA8u4oDaTr57v3AagXZtEBBrgVxh8jj8ogPpKx2N13HzygG57yFo6wR1MtoKn7t3ov9oFby",
  "key15": "5YYQeEbdHDxTKyJV4UgYuN8CXDQhJnDNzXY1eq4cPfDtGDBJWz3NonJvxJjPNNntKxFcZeNx7NhW214ZP4qzwwQ",
  "key16": "3sijEJXM6afDik74EAY3mnadTN5dMveBLTz99uy1v7qKzHizhmQwg1T2QX85JEWKUx9a4LES9TwcmmsG8WSrJdJc",
  "key17": "33YouXBZF6yjP8VQPx9zYhR2VtfnT5vsP3QFkB395aYVY6BYMXTv6BfTYSmarGsReBbYqK3aZWoPAgCtdXLRWZjK",
  "key18": "3DmTzDgQtpxtnGEQT9mE6q22C7D3VYwUmYqVMMf4FkJrnpyjpUancSZEH1oAP25xGoG5sFCZmT8rfG3Zpee34GsE",
  "key19": "DoyDHjD4bKo2VaGaB9coMKfzBd4GA4K6FRkNYUnhMibeDrcnmH1b2WWwXkBqU7S7BGhPCg2hbejA9h7DqGXHX2d",
  "key20": "3eSBVGQWQcJLokXQLFU7kq1Puk9Y9rWoZAJAyyLZW4EhVwz3feFdUPp8vL9D9ZwYPdR69fFo1zVYQppwqECtQVdG",
  "key21": "2MoiEn6EbZprp8kMRJs1tDXZHkEmm9ChrDV68s4uScf9kR6qCgTbUsee1ki1n7ckwnVsa7qeRZ5YRXvYQzxUNxaV",
  "key22": "6763cVPhkF4jaABVb5S1AEVsNTdS5aaWgXKo2edNSVmdZyad26DfFJTSShjt4QuMSBEZLSS1oFyJ4v4jE4ryqRXj",
  "key23": "23ChQqpscakBqnsNFwiM8WQfPjC1sCXDjBKZYAvGnjwnqpJQGgLNcKX2jFM5oQDJ5SABe2ntD7zn5zTDyBg8aYNX",
  "key24": "2kCXL5K8nYgBNQj5rANjm3X1MsfrmNpuPrKhYMfRvaBrJGACDhSdqJU2qT25Vp4XiAmpaMgbaJGZDaVtyAwYJUVN",
  "key25": "2drbhrz7yos7U1Z3jeatSx56PsdX6SYBvYZJDwsz5PzyLsEvUJnzGkCMYJVwnJ7JAUrsC8QfJRqAoLAyy59gfMH8",
  "key26": "BS58TYevM9usRfjghL94GDqvG8e2HDMm4kE8Eq99p7BdEPH2FMCi8Hj4DttBbm951R63xVtaTNLiwhQh4jZPijx",
  "key27": "2css5SGefU392UTpMupdpSvStMCQVFb4McpXtYKpZ8TSUtACwUB8XwRZaS4KwwWPaNGvQSGJtdUD7QCuxPeQnTzm",
  "key28": "35RFAueXeKw5a7BiCxzMvq6piD1oy2tMuogxF7LDrd7AcoMt3H6xNKYzCNSi7LpWSfBAQSLHVrftCTbtx7yfQLgP",
  "key29": "2avdwFCsW9Zh5S2CdcVEbtTKdn2QCAAPFemmwHZE1BWtxTP3CgHn4BifY4ihh83RYWcjirQcVDUcm8k8PtjiBphY"
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
