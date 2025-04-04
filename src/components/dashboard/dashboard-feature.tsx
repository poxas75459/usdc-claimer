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
    "2qcoWkKEaKq6hgFdahNTyvn9APmZTxTgjMJjFRLuZVkKxccbCEjpdh9o7ZMegvKcPK2kkApaFZo9mTvqKvUe8bGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v9Edgeq2tk8HoYSiJPXdqzafsBXPrKSmB2V6EjhxFXXRfEX6FXcqd51dyj6P2q95HnaakE78acHLfuy7na5H6ij",
  "key1": "53BTizsTLpHaqahwq6sHatnLNF1qnH1cMSXdzwxcA9Zc4goipVmMakDLyUbjsWLvEiNaYSEzCiD4BLGNiCyDnFaR",
  "key2": "2t48joJwJracRTjx5KQ2UkAjTokb4U5f6UG19aX7pCL42kxfxWJEsVYPeLLtSnzKb5wg3fjYNz4YT94BZayZxDk9",
  "key3": "3PdovaKcoB7nkX4h33YHiGZ3MmKHYCewqVURpqsvRpvf71pzCrW1YzNuYa5gjQCrfEBURyqLHWV3jFz7hCrf7v3N",
  "key4": "2KjzRg2geP89vsFiRMyF7b2AHnRAbKpR6w1ZufuLHtVuc2ouifGX35oEZGfgRMVcHvNByTCzSCFQ9TSttkVsXVrf",
  "key5": "5GyTvF2fZsmNmtHbBKh9bZae3kx8a4t7C4tRzxqX1j8LDCoQvh8CNd6Sm7ruEKbk56DKUL9ELdncYgMg14pe2Y5p",
  "key6": "5YdQbiRSqR4LuHpU3UsnqW7VFEPFyjT6VYDaGSTi31zmW5axqxR6EfSp6JvTEVsPCh5zR2z3NyMzCJgN6ZRd17pK",
  "key7": "4WrKv5EqEdn231ii9eZptHGUB9qhZZfao9xqzC3WY5urDArGeAZQUdBZRWoVRJZKYFHmwu8B7Q9iLeeXsjKA1BCf",
  "key8": "bsezyTpmTfHncC4yW86JWVwn6Vraxb7pV8Nmu7KrtKXRbu7KyuiGWJqcM4XwMhM62htpyaZS9YLENZQm6WN34zo",
  "key9": "3uDeiFdctKNgMfuSgkFkcZZ9jXLXs2GeQgfry1oWmSGUro8U9yNdEiokyYhkkCjrgCFi57rjPPq8HRXJpGc6czaH",
  "key10": "3aX1WMeYPoV6jk8Y27S7YyMrJvNnnr7WLbMh5VZsvfsz999BWb1sRDoJK5mPG1k98Koe8P4bN5o648d8cQWzN7zG",
  "key11": "2jQ96V6tSVA3SDJzNCnqtPhR1xghK313H8fjbGkeZr2gZzoUTXZsLeHw386X7qWSpNe5JftkohaN5Ni7dQjJdrw2",
  "key12": "2s762THV8QbPhA8rjcJZxNWhVw4P6aYLkkYXuTEcLtQg3qfyRcTc731YgX2viHEQZsMH7AdRY2BPpSzTLxVvLddE",
  "key13": "kgPaQCksaXeKBYg6BmL8NvzzvGUrEhURrkcQFXmbXmzc1Af5jPBJus83vHDxpnQi2YKauJjUN7ZdEmnGWG4ZT4i",
  "key14": "3rryN4p1yMrutnWiFKTy18GRfLiNEYifgJxkSg59vRE5kfhKvpraRaySs9dyo1DvXCnHuToHh3ajVXj1MPGi4f9v",
  "key15": "3nd7E2KooE9qsXomEXBWTNeCTwDcKboGMCQKfCEvJ1hgatVWnxUxgYXbbmP9QEHQE5cS35kiNvmQ9kfWhAzxmCML",
  "key16": "7djDeBKKVFeK7wt2sAqfWPjQfUrXJaNxpRzdBEbMGYgXb56hG2WkuWPht5eFuTyMxToqhwuLg2z9pJeeH2B5m8s",
  "key17": "56atxntRRd43wsCqstYyWErSR8b2sFsP2tgWQ5MdSWfDyJycaYCtutnGrPhghjeu2SHbsjVETmLoS3fAZwWKAD1A",
  "key18": "2BZ2fjEzL1ZisxNmbJCno3CS44n6hryZJyr4rMGUpmE3a3m23w2SWMwmS5W4DFHaxyAMfxQeP3AAWCGQMrCvGtCH",
  "key19": "3mV7Yd5ae3VEeAuoS64EtYRCgEez8cH3QzUVLVoR2gxVGFh5YQTVwLm7XQRxgKRKrcNAqQA9NoRirfTXP2qYXWku",
  "key20": "62R5Q8UVm1S59FiBXzAf2KrCPGXhAwBLrCQjD52sBJMateKGUo1PoctUKngzSkcEBRtJytqvZ8P1jmdAzbG7YRuF",
  "key21": "2qMMfZBvV2iMm9kc8Ni3hX2FthY6TkViJGR8qdsV6DEUVCDxS6jPQcRXvfjMkBz5tNqrsdazY6A41YvjFfTxQiuB",
  "key22": "3f3sdHPTauNubD7xkvw6BLkTX1roUF33r7fJt5BRiUuen9WKuRqkmevkJL2LpukVvCReCh8qZHKVRyJ9pfjpK4Hw",
  "key23": "5NXUNFQ35Z5qma8zLbVWiP9dWTvcjrGz3XfVMRNX71n7gWNrrEqJ1p4YiUsZQdvDBTE3JwncmkW8cQEGEGCr7a33",
  "key24": "2dW7PuevxoAnRQ7AMte8XHPj4t5pYGZMNrrn9jNMZBSryaBqJvK7iJbLKqwX5JC1oh79hoaR8asV2ejbhngDCEVR",
  "key25": "hTwrYeRhZ3Gwk3dR2SvvPwCRoabU6S6aLoC9MS3HUNVSmEZGfkH7no2VABXJEmu6jcQ5NdrUvwB5nVAtRzSdhbd",
  "key26": "2NP7DPQkyxmiMUQxAztk8gri6tiaAREjg5gxexo2NaWRw19dDrYNNiR7hzDFRwXjSNxDGE2nBPW2jwtJB77Lqkwd"
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
