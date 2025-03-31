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
    "5eke7ECLt25ye77JVJbW7sSs25KJb8FYR8WLyEoRJeNASie6PZuKMUHXSYJiPGwGdiA7hMJa7zVh9cMQs6LsHJET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fx4r7rMVGq4ci4sWnzTDv2qYTRrkwo4MGTm6ng71D72TzB7q2R3zhXQ49JheZBpqgxJJEBxFHDHXEsLh2VunhAm",
  "key1": "5JZL4253GpNiEKuQA4B1XyCiuBA9ESkyDt5awLmpf17EZ7h8k6b7sYPtdLhkQQdSeg4QUY4EE8i4jzFeH3bpi4Kh",
  "key2": "cSaacXTeaJDDD5HE4mngGbK4A6Xp6SNRBmQwdfzf6Xjgc7En3mwPq4878F9ie7QKQQrHDAN9cYoTeoHPMku1FLh",
  "key3": "58kSRPG3qZvJGbFD3H8WqsfLUUaprRybx3XZik9To11gwnC6SBRhakgJvNbGPfYoU8mSm6wC3UdcPF8R8buQpYER",
  "key4": "UDy7NHELN2mstWUNcJqskU87fFCJGBd9J7veYXfR1LDtY5HsBgdkrtTMkRTo2jxtNYcyxZ4p6eepvoMebRdT2ro",
  "key5": "4gZ4CGUHgksbESWzhb24YJhGViUj4VbfWwBENRje6zhYjVC3y5h1mVZdDxNKANb5uo9a5c7D58MiE3yywq2urFK2",
  "key6": "btTo8ahXRTWp5CyEiqFPpiiYrcDK6PDovUq3eNV4b8FsZKQY23zSbmzKRXg9PNnNb4mez59PUqA466CVv97spoX",
  "key7": "5ocyeDXiKEyzDCKS2V6nkjtvhFVZrQULMgjUxaSdTzSB7ksxk8B2apKAU92kGaKAVNjLQBbEghNPmnBKGuFgr14H",
  "key8": "2EoZ6ePLvmGqEjoNy4cCg6BoCmnjy8ajVcCWybvGGXzvp6Adme9V5Ykkxk3wCR8mKKGFZT6fFEfru4W6s3X4PzpF",
  "key9": "4MjDUGG3kGgHsheF6Y92CNtqbGx7Cc7PRkBwWh6sKGTgESNCsHQAUeiaErRKVNp24MhhhqtBnGd3rKLArLRYaWHE",
  "key10": "VssY4iYvyFMV3hirssNdsYjCkRRxGcxnY5i1aaz4krfnMhSftheKifmcjziYupiwVKn4pFpf9tDRhCHnpBuVkgU",
  "key11": "MggHEhHqTvYhaDJSWybmzSRBgpgaJ5ZKJm6M24LA2V7Po9G2XMBFBS7TsjrLv3pmQdFoyiPsW6g4pBxx42o4Gpi",
  "key12": "39xkmSwTvFgRA581h9E4Y1axVnHkLvTqgnFgSrsLchVY6s48P82Gem7FEJoNzCY2VhrpQTB3STNfhtQuWmppmXGo",
  "key13": "5yT68yEPKYuqaVABMRbfC6zSqKzo8LNMwNzkmtpmRy2dWPNYsksq7kUUvUsbsSxF9jMJy5a9k54jL6Hj6HHqiLgi",
  "key14": "5hgQG3A1Yn92e4Wq8PtsPkgYCrcyZyq9HeVaW3ZDyf679QY7XsnBjVtqv2GW4ujHjGMu7ucjxa87zJGQdKHBd4PR",
  "key15": "2qrQtNyNVbm8Yqfza3XvCRdojiUa9SYJN5TEsKRx1pgqDXVZNyKpUKDyd8A3qhXAzo2y7J8SsqiQDjBAUq6k7QoF",
  "key16": "5fLxLbhNGahXGVPGrGRK8MfaZxQxtXWVXLK8ZiFT2gLcPYRzxP6mcSuijVmtaWsaJQtRCvDwPpRfXk5caXPVxrqS",
  "key17": "2zedPXGsrjHheHAavuaouGW6QZJTcMXDNvXEgrLy5RDNyXcxW4wFAWf4ogdftB5WeSzJTWwH3ZivjP4sD7s7CG4V",
  "key18": "5TtUJHW6i1y6NqpJCG2J8vHAJo5MyL1dJdZ2MHVeF6M7cfgSktvb2jd4XFsuWYwewjMwgc1f6CSwPWNWwA9Yv6ya",
  "key19": "5yqqu3f8nRsm7Lv1SBGLFmfy4CBp4H9oqHgtZNHDYUBGAg8iLDDnoReQu1fixK2SWcCv3woB7pWa6HBjHCMpiDPA",
  "key20": "2uTWEF8Bu5DauYWHd6i3xPjoHEP5mzDzTzwBRisGxNsHbCCNYhhCT8VqCuwJNv1zBgFWJYifPzZ2yahKfCsW3fvA",
  "key21": "3BnjCgCMqptVdRfvvHnkVr32XkYugJH4FBaYWXfNPiS6o3QuMNkhQDw7o3s9fB8iWf4zUFco7ghUkrJDHPk1vEB4",
  "key22": "2G1b14TZvyong3bJWRBQqVaFKtMqxnckHWpHS82KbsNBJFUFCW6H4ixw1b1Jxvtg7863P12oLFEqNsDSuwyTTbkq",
  "key23": "5wja83wKZEjgZWrye1mZTPHGLd6nNgWtpAykhKvDyKt9rvoNcDFJHU7whFBXLHrLENJ2wmCE1j6m4ufcHPcthVaF",
  "key24": "3RSafhq6YB1xfsvVLJX4RftftSLNgEhXv7Efm8rAMzfZdKuSFrzWiMVzpXQjzhy8KSXnTG6RyX23iiZ3fT8WqzCo"
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
