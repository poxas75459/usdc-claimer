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
    "3w1jajC5d16JnYeb4xmCeyKGzVqQNfyBMU3zyvReDHAn17LkPTo2DPod6N3QMpS9ha2kYkqVH74k3nvGnBQbmnD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v1V38sgV6HJdEj6hvRvtyQP1pQvneYccustffNJEELRR1bM35YzqzwHhFvqL9R26dSXYGj5PpSjwhQnWbLZfS1N",
  "key1": "uM5suaR6KbPxMsgaeoQPG3GZ6r21yMdJgvvRqeFpnUXXX42wvkvxxdR2xuu5BLBicT9Yi4ikTyNfeuuDvh3nbox",
  "key2": "5W2MqYAHvpK1azmm4LCV1QhNLZTSm5cFR37F6qEZrt7ys7LdD3qhmWmHD4gM4m4UTYfTYYTaLLhtvPM25Z2jaKMh",
  "key3": "26TNYrTqEgUw9r7wFmFkDKsRHm6fzsnqEY7uEW7bhuRhYRdqA9GZbgVx1Cym58eXxF3DwK2txD9jrxWAQvfNAMGA",
  "key4": "641ci3HEJHsQx3QEaDRgGUfmsQCeUwmypGpcECKDHpa1PHaNWSbixGMqB5quxCNMZMgziSxa6dLTwKCFWtD1668x",
  "key5": "ShEfYrnDyTS2ohtHzsAX78jrjKL2RAmyh35VrZYTWKbtbgXbUfW89E4su41b6b8wWbFXQXmV74RHSrcU6oMz4nz",
  "key6": "vjSqUHny4gq9mbrfE4cQFvzAVpWqPDQSeEaF47bpDDo4Y25Vsf38ioPpaBTsVAuPV5PUGoxWKfPjQk4cRT7uJLz",
  "key7": "3dZY4nqHT5Ec2Ubffbd2dzP2RVNEbxuUXjiZ1fuUmDnEJEfXiMi2wotfswxiQKwooAt3H3jxHFbmAr5A85PSYNjg",
  "key8": "2rB5tP9nnfijtAdv6LbHCfg8P9jnYkSkKHCGpRFY1XA41NtcF32n1rdETjvihHVtouvs6ZzeFjybULUU4vWVud1C",
  "key9": "PwHd8RNn8NyzGALBygu8rnovKtPUMhgdaXotHw1DAYLKPuh32oEVVZz5rDy83UXHsv4kA8iYe3pR455ar4yKFVx",
  "key10": "2qBwJBX1kmHje8FrdtQbLnkbDqyskJAvAwo8dDEceg3e3BPA3GwYRXdmJRd9N2tYuWMoybK9eWhYUDnzR7o6vBkg",
  "key11": "DqwqdTvxtYBDGR9JUnJWuC6z8Wz5MnUDiSDaNh5JcqFcfSFvYSMyS7k1rAeToaT5DE7hQg3tCRZnJxgMVgpeM6H",
  "key12": "5mAry93rhctBxW46LmrV9exkLbRLZDL6FkzArRUwhKz2xwRASYweDUepszsbo6YXZvkQ9bst2SCAT1TrZ7CDdC5k",
  "key13": "41DvYhE4KH6ADEmqcuz3Se3kBzubqf5qdKZMEzUAz5UuwRNCg7BMAHMRbvZ8XVQHn2zEKRiVvt1NWGf8NxYMmHLJ",
  "key14": "F7TbqmdeMHTnzYtEHSSFi1aS7YmNCtrzXqRNmCSkP1PBDXFs6U9g92emxfxCHhpQj9cUWbTC7JaaghpRa2zSKM3",
  "key15": "5JPsmHCSp7PpBPNyQSjwbjitQhjApMfvzZdduTUoG3ZUMMyzNtZFJgZGtoVwEUb2HgD6wZ7uA2oXxXASb6ikGpM1",
  "key16": "2KqrZXVqnnxHMzPVz3BLRKc7ApkfBBPjEzJKaH34WYPJoCgzvNkrRYaGgLV1gfEDDoHAkgch7eRxBanapYf6JxuW",
  "key17": "42vgoveGM6rTgM2LP6FGxjCzqZnv1obEiN6ebq2EFLTzSc84cJz3EK7sr6pAFgXEpSYgj9LayYjrqsdj7hRBsZto",
  "key18": "3gC9dNXzhU4haBWW1BkCDhgi8WA3t9uxkGx27XvYYPHSG7ywHdBiRZuUM3vqKkB8uND7aNjLimA1QMRcFezV3oyV",
  "key19": "omTqx1q1n7PnmMBvrktmM2m4d1zKmk9hdvSth5iY3PxFcrz85HBeKEb2sNsw4iYzgtfGkeeELynPP69qWNavoW5",
  "key20": "4o39zpcEZw8uyBehWzZBdZ6FC8SXEJULRBwnQ7m6jkyXtjyqc9cU7rQgCSJCoKt51NsnKQ2jxGuVGaYvQDoMAMoX",
  "key21": "3YEF5yQbt6WGS6DxY61Gkwwz2hqY2vmY8rPiPVzKfuUKwh74DVmNPqPMmmTEcgFPMFboiRDyqiuESJqnauG2VqGu",
  "key22": "4oG4LYeebfBX4yhnd3jFR3dxP6Mg7HRnAsxWVm87ZmcPoD3qhE5QRuqZrZ2Mf1QxFErpUh1Q8LNvyMhQHrPP6iNc",
  "key23": "54vVKJP6qqkRDtFWHeX5SCm9rugxjTVXge3UiWm75ZWhatJjNntnev4uk2FeQsXZby7TK8DEnPUr65DgQCVsXWDB",
  "key24": "5squb7CxtfDXBgpSW5W6BGkRDtceYBxXNvJMUfkLGy1B9sQX2NuB3Tc6SP16w6V5drVhNvbfZvfWPCfBMtdZbnx9",
  "key25": "4giSWuhLp6szsqbnjgWcVZcASpXgMHypqTmTUztGLdA7ygUkATRRwG2KZdcax1Hf6ToD9Tc27AMvBBe41soET8Tn",
  "key26": "5y2NcgsdYBAFKrBcKHGUCVMM7K42AsawbxVEqZb8Pcb9mXnfsf9dYNTwWV8YuC6qTMvLER8AB28nRQ5JQwCSHfS4",
  "key27": "5zteWxBZSLtjjs6yBgYL666w4xew2ZUfyoQPuDRHWduJeCyMqCnK9CddxFKATQyGQxYRmVtktjAgYdWqn2ChhLLY",
  "key28": "27iCHCvfQymwZyJmAsE1oPzVFssvzbPbvSdbVf7WX92ipLJSKKgTCu5HwrJP93xhge9T72ciMjWo2AShDdfV56uM",
  "key29": "5Job7thiBhqfLiWA3EzPwsMSWPJ1DdVMWCzq7YiP49MK5hoEReDGkiXVRd7Gm62nFrrUqrgg1fkw3B6poChLrdow",
  "key30": "4Cve6UcCTEhgE5AZuU25uh4MyW7RnnMVrQcmBkLs1nB3utE6Vs9ssUcDxDs9Ha2nGcg85CBZ59chWVWGfpsMspY"
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
