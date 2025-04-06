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
    "W32fF4PF7thQHmSB8rCMd94VHHuo3VrrJZiAbSxyASwdSS5Mm2cWscs3z3jFHnx3XcYjjwgdxshyyDoTQ4GgRLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gzmhoZvk9SabnUoa5vKDHRDfVNMpURDWiLFDzVXCNdcqQ3YkeJzNZ1dFEhUz5peJt962VbgVpQ1hZrnimmcKbFn",
  "key1": "2HYVMduQm6WkY4grR4SidYX4ScskMT7vGJn2ABU5imByBXUPAewcGiqmbtdoQEEZo7pwBZbfXmhabekUsQFqEXWc",
  "key2": "5CcXKYFfJhKsDimzbiX9H5PuHp9RZ8UTrTNP3mV2F3yYouQ9NggCxnwKDUCvUx1jQMUK7hQxtvebNkb3yP7Phq4F",
  "key3": "2FWRCjk4MgQpXELfjtDn9qretaK2iQDspbYiwAoyAdgEELqtCXL3XhpnsMBmFgCDpSMvEd3aEyYb3fyeueFYYNZk",
  "key4": "3opTxxt5Hhpfbmj3QNttk8kCMMAPuCCM59pbF3MEPSgCYtVfSqhQZcZSz6g3RC9RgNYRA9m2JgTtUpnztWb5X4Kq",
  "key5": "3HP3M9pUxoYHm5VCHewWmNoVR7YRgTYQkFXsYRRTUZyCCnKHmzA2rBCqpkZtCi1R9UwUa8QwBD49kaz3kzzSW1aD",
  "key6": "3LHZ2AJGTNoh8v7MydkzXbUX2smyf1qiL7hRAo593UA7TLd82nQdtXcMiiAwYrYsZFA39Gxud4PbG7wSj526qfCT",
  "key7": "3s2AGweAvKzWJxYbGf9x7DCpB3iP6GphrmGvGboCeoLdbyDoJuhTtAWpUUumEQEMqp57DmAjHKswyuQpidrJxPgU",
  "key8": "5VGsyRx6KDBD8wdQyjw7X3CsfL5MRszX923nEWPHiSCmn9qUYAzUHK5PrRAHPZQEgVYiFbi3C9XkSc7duZ265bu3",
  "key9": "AsTgL1m2L2raFxJL7EBQmA1hMw7fywA8z9K1btts68aUkJfgmQrJXWEyi71DT2Li9NG1FiKYZ53SThoWnb6v8mR",
  "key10": "4KcBhUpCacSq26KZHgzH2VHYnzY5FSjpmGLMfPYcR7j9o6uCkKDM7Pim1XWXnAazEXEGDPW5edAEKhDXB3PfSNFm",
  "key11": "JfERhdRw7Wa3DfndsRSwUEqjPncQwt7N419h3f6kQTJLPDzQkriuhydQMQBBYuh2oGRjko1mT1L3C3yicBvNfSE",
  "key12": "56ap4o6daMURsue9B1cPttsTpKs2U4xhJ8EZZMhnn9Ypk8Wak5VqHnJNN8qrcKTU5gpA5vJgPpFu8FpJnvBVPU9i",
  "key13": "48u4z1wmg1iZdQBmDm45ApDxX3dBiVnVNUX7Y9YKFCH9NLVa314vgW5jPEVwy7iXXG7UpcoqgopKXXZoVEx5XXFg",
  "key14": "4Lh1htfBmMPw4Et7hzDiLivM4AH5Fr9wDvdV2qm2WXho5bSd8j3MSQNZRmW9mWPZMmYPvNdPJPKP5vQmNpTzH9EJ",
  "key15": "3efz7K4GucbTruq3YEY4VcZzNzy2GSF7gG9k5bBeFvEVMMge59SLmGLgj5Zq7NGkqCKuScq4v3NvcavfwhD23ba8",
  "key16": "2LyVd8gRFgatsVhPcG4Xi6eSNMFYyhV1kcE5pz1PNzMNZpYv6bRj2HeQnNfkCjmZVxDJCfk9hLMpYbZdXoeeJyrU",
  "key17": "5nBCTQpbd6Aq6epRsghDtZLjaXDQD5JqfU86d8B2N4ihS91De1mEgxcK6mx2Tp9Czm5iJo4xnbsX4DKLVEgjacQv",
  "key18": "5XGX66Q9NfRp4kLVbXTp3x3cTLmneed49dXptmwTzcGPTGQ4XYK7HXazmB32nUHfSrpVYou3cSEnEECb6aw3zTTv",
  "key19": "2j3e96UyATfuZNSuAipsNwii9WzUTaA6oFZTaGJBvNhaaAfpUUnKihF4Sd8AFiiFaXa6TLW9DyLAiywu6WSBCZ3v",
  "key20": "5doLdGcMdAtGpdsjyfs9pnUZ1Z8XyBjn9a5Cp8WjFSmym6bfRMXrnmcbHpEvCjoC6fFTaeeMVnWmaDpLiDXPBCy4",
  "key21": "4ZTHDKHvAxg6dNiGXz3ReEC2r5pQXuyHbMS9UwSGqsz7JFoxA5mSbqa2yN41RPYMYKfmomoYk149LVmMuRnHAxWe",
  "key22": "65tqaroPqKEQ1pQsnpmmFu4gvwgKTjJc7khTW8euvaSXd6bfY9gWZ288tr6byRUZTjtnY9BtYa7NoEXi1KUeWUuZ",
  "key23": "5pPjvWAVJBiaKoHXyn6j1C1fNF4q5m52vrhGRj6N8ZK6ijoDmXpe45SjEYm6oCMTvejz79VkX49VMqBfzAKi5VLv",
  "key24": "2N1uppe3CadfXfEBF41mGJLZNeJcEW5yzoWdLGJEL4qKwMsJAj3Mvf2mSfM3iv5PbUKt3fz1VJTnzQ6xdoMBqsHc",
  "key25": "2TnrBNvspbCpYJiyvpb67z7w6paJhCee9Wf78yZ9uPdipFQQHQX1kjx9rHWMearPevjfCK8SSrAVgympPD2877U3",
  "key26": "8C1c5NuvbMzipFYkv6V2mi3gVi9XZM2wJzLnEEaxpt6eZYn6w61ppEQLReUhLMG5m8HdK84X1hrw5Dc9P2HZyLc",
  "key27": "5QeLDQ78e1NjB1KSUoVUsTWtGNuvSCit9TNcjf72nBbkBUSFf8YA6UsUqWUH65MS8dZZH27JtqBSYkWM9JKvHsZs",
  "key28": "2KVZ5k58SNHScHWmhbqkRPhrHRCh46TujneMyMdwgSTeDKcWh78hQvr8bHYBa2cdF5vssBD5TSvEXZJzRmqPmMY",
  "key29": "5An4QcGrfnvHU8mtozLeFrFNVkaqVrexvBdZBLs6AkFbP4G4kfeKGSwbCUu4hqYB47khqfR7jPC62QuPMFvA1ydm",
  "key30": "5TeADtwgMdsLK5HjVrnjN9jWdQXWTwRAT3thyd1ZPHfwTMjnWj2xz2mPfvwgWNP8mXnaN98RybGi8wacckeGics4",
  "key31": "5aZDiaVz2ywdkBZd9ez9cozgwPscfnkJ3PJdTojWTCwgx4jjF6qrdhzd1B2ZUXWSWgSRmhwU4hJNVmS1nEoYfeb6",
  "key32": "2EiQMXLYnnvPVoEmCT6fdx2HCuvVrjgXgJqg4GXZH7A9bmKmKVvh8Rugmrp9oCr45DyQvyzfgsYPnaKSC3wQCB7o"
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
