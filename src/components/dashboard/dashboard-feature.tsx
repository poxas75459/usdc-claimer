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
    "5zoFdbKiU6qQvaAMrK4GWDMZqjK2dHocpoykgp5hMvMb1eE2w5kTh5G9E1h3oWt1LmGABYyYdvyZJ4tuctjuuH4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rKhEzVe8dczJTDWWnwhd7XsVWcJBin9SuabsA6jAKJtP9BH65byEw1LR83nauxGQ11ZgjeeEiDtAuF8UgsV8fdf",
  "key1": "2cedhCY1m4EFGxYGBchFAd7D55wQSe3jT18anmfcAdvUim2etxZ6G1Psg2oRSNF6p5rV7PGWKPksgZeymqnbVVz3",
  "key2": "3q71icuoXBkpf4whdyXkZkQ6EfinaPSqoAJEDTrBg7WXJhE1YEpPg6oLZD6aAhYtSDytHpCg5vjj82CQ6yeLG5Xt",
  "key3": "7YHdE39JYwqV6FMXCWe1wWRkyXC5XdwEDN1JP6XzAkqaBzY3MPNxr3nBZpSCSFyGLSzc3LQvfseRq2y85yKrZZQ",
  "key4": "311U43ng6Q71Hi2G2CjwdzN4UHPQJx4EkJjKc7TEuiMp4EzGkskXAcSD2X5NCyB5yfnvzvLh1nnMaU3XAXLELGDm",
  "key5": "WevxAd1eZGUqCwteRoG1y42mFwQSpP7G27ATFuJiSeaPS3aWyFfg4QfrK74DJ5eNoEwFZRon56qQzgCyhv8ddBr",
  "key6": "5xGgEHu3BfEaraL1cjYW8ntqvv3o6jiYcgciMzMS1VDbfBqARfrCYVxcHhvV6XjJArxtM1dTrib7nQc1CbQQZcYa",
  "key7": "sSzUGdWyJmCgF2uR1J8CYsYYd4PUB1UdGBbWeh7QZ2UevcWocZvxcAGXofwpLKi4tauSS4YdozKQd2LRPnngaGr",
  "key8": "HbhcLotq2U91QRp8oBynuhoZM41yLYPAtrox1ZAiidZs7rssZDNfGs8BKFYXB79aAThF9qRH4zJKQsyv4fM4qd4",
  "key9": "26qmdesWw5oVyFJ8Ye3hXJBxMtRZvYQVyb8NX8SGngfPWiRS55VhTcSvEbDG2tKZv1sUN7B8orkVzUDCbsx8NqDs",
  "key10": "hLGLZLpfQG8guFwaYJ1MHmkcZuebWDFMXnFXbdxUDN5LvkcZnv2QjV63xNYYpMCFvS6YNZ1DR4y9csPMFwjkkLj",
  "key11": "QosSLD1nyjMwQTT1DdKSMXmAtM2Npghm3YZAPqieDPFvireutLp4fG9RxA1d1ahWhw3Ru6G1g8PKJjuwJbpnkV5",
  "key12": "4feH2AQpZMcKCpe6i5TSJ8mKDUwSXAnsLxxaBHsRX7HxqJ6c46pHNWFyThMFmtJ57PuFrxUrKBjzocAAmATv6b4g",
  "key13": "4C3e4kRKRE5hsLEyR8GsehQcT5jZBj9zb7F7QMdbiH2cZsGr5ZqzNNnCxtbrBkN4uAwTuWLvnTYTpxkxP8zCR2jR",
  "key14": "5vRjUVUo91xKZ4YCMnZG2XkD8TdEER3Pt86hCcBtZri4DYpKRgUzbjd7UT89vAU5WxBSwRZMJ1pai2FeF2x1hRTo",
  "key15": "44wMPJKk32kiUToyUbDh4RRoDRCeZ487EdjXBRpkGNNNUWKGkewTFtSThqgcwA3oMGTGYYRGBMuw8bW3fu4KpLQ2",
  "key16": "3m83bC35n6DE12gkZKJrKVjBsPTSHcbJV3zU7HXHZemrhuGaz7qDtwKAsXVbyHYwug3HsCtZ44R5v85uKymGCTE2",
  "key17": "573ULZupnzettKmakXNEiJmJcgJrKNjqD8Dq99yeLxRD6YZBRFTf3aN6P3ZZXiaX7o1i7of14vbzv8BBiz1ZPXck",
  "key18": "2aRucRTMyGgyYTim9UzLxuy9RoTRH2xnTjGxdUaCK7E3okNvx9Whg1Rom6L946QVe2Yf2cUH8tz9BCKnFYzffqBs",
  "key19": "5Mx4jyS9SiUZEw48iNwfgF9JvrxSGuzRX9dPybj8pbsknnn7DY3NwXNfqzBtqEFUZdD3XFAtGgqt8NvB7ysRd2e4",
  "key20": "2hujrChp948qY2EzAAniY581KMo9NeYqjpDrLwG8LRm7MF5zTYACoriENvC4TCaLMH1VcQRyn4DRR4Ma41AtrmZ5",
  "key21": "38vfQ5FpLaYwV1ayoYtrvKiwRgToSR2GkSjS1WbgHNjukP1tDBGesy3NSM2LKVi7dFhG5vhGRDZtsUQWDRFV1iDR",
  "key22": "5PEr8j2kbefc63tv4nmnbkt9xtB7DZ5Ew2QFrGD2jTY7WaN7t49EoNLqP2c9kA2nUD3F8kbQKS9R7EJ4eG6KDyV1",
  "key23": "42bia9q9MuKYKLMH82nFGTKUaQ52ud1moqtMbvUGArCZju5d7wcuGVWkjHGucPPp3fR7edphqq24cbgbzC8wjMA6",
  "key24": "4yT7UwdCn8CxwU2DJN38P5RvCFfk6qyQj1nV6ZQuAtDMzyzRiKi3pdT7ZEgoK4gFXCBBe6ykX78GcG25ww2pcF4C",
  "key25": "TF7Nk3aYb6RKKUnYdnAyh9QBZfBzpDmJ716UaHeMiY7UzpNJBK7EMN4j18u1kYC2Ar7JfESGzxMKg7tNC4VUZNF"
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
