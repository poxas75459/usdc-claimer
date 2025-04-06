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
    "4QG6Kd3xyfZR6a5vPFaF6XwKjkaLK4YPCWGM8Pu7FU8swnPBjjHh5f5bFsTYx64ZXfxQ1rqKH3g1no8tyCohmJb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RGesdxDKAdMGqPxfUvEp5CxoCV1Mn6oS95M92vWbJcQcSP4tvkS7ZgCUUqjmqkRktQJuRtZ7QD4NUDQWeAC5sfT",
  "key1": "38WaWzBVw4xGUYckYhCc9pqdwgHdqpmNeVU5dnz8V9NpdwsBPivWbRfEKFiw82zCb53DwyBLjQPL2ptDtS2gt5rS",
  "key2": "5P56v5bg8T1JBjJwAsG7FLQom7sBULahALUUgF9KkcXCieGbCA9t1a2bHYZtQYcMrGVAK3oSpaxJ2Tcs9MPbEeyP",
  "key3": "4cGaRKqW93MBKMF5aW5dC163Tf3dn6kmBz7db3JVjfndmmLt2GJ6KrapEXJSQc7C67W1TSz6ewyZWN29AvpQga8A",
  "key4": "5oDWw1ewZYHqKuYBgj1HJeqKRD8jVxnL8ZPF14HnJnnaL8TihUEwHH8PoYz9afKB4dsFH1FzXjRy3b3wEHwdA6de",
  "key5": "XDeqTgBq1c8hyNQYo5i9JSrxFi3PBVKqgJojc13JXw5kpZidmqP8VxgAxn9eAsnzq5jZdtcXrYRr834ABrBJtBg",
  "key6": "4jUqR5MdGjXgtFoad12hwXjQNUH2R8gHHkEbcMc7LpAFFmHcTKwyfjMHreUUBYsQdMDpDXBRyyrzuJYG1dQki32n",
  "key7": "5QYbRUy8YXV7Uny8Et4hGHbuuehiwgL2S9NzNngAy2mzuJ9awKHLHHJeHZedRqaxfkbfDW8okcfnDRV9N8vQLQhN",
  "key8": "348TaX7HRDqaD2YKwp6msWqXy9DyDbsp5hhN4SsNfbpzGY4Eh17ZrMKFA4DANKVE85b43oUL5MhoBi22N5gwTtDA",
  "key9": "2bfVKzuU4K4MBDARGtV94Hr6jMPnREm5i5MN5BtyE689ovwN8ZpkD5jP8DTamy39Q1q5ttyJCgWyjgJYzuYVisv",
  "key10": "2C93ea6xXwCi9FhcxDZe35KNt7PkQEZgqZYQe4To8ewzTMQGcD3SyiuMVLFSj1pKzJwcBF4M5dx86G3rTM9R7Yo8",
  "key11": "47cYsvVuB4GHDbWvYZDhRf4h4262Er9uEUTnppmBaoLx6Bjtv7vb8TT7tEzoaJcirDgzYJcSMEtz38BZaGZK3ELo",
  "key12": "2YYAVUBRFoziPeJSXLJFLsAszXnREkQB8dfbDEsUnVkgx226opVodbRY1RGRh8z83QvKsHzD5LUxMge9BiiyPYT9",
  "key13": "5nQ5wSLswH9hjK512SHL6j9w4uHj8Zk9LbwHZPyX56BzNojhTPbkFr5Q53yf2EkV6BdpNrNt2gxAPPrjt7od3beb",
  "key14": "2Ye27mxKgLabFyZJDbwYRnepeBEZQeXKT8rUJ3cAUZDKuaUtNHKLexvZzADFqWrN61PvAbuTdoKrtG4DYErfJ7vq",
  "key15": "61ZFGubBM233nPcowZmMZLm1r4pJSyEDr6Pm2XNKV3PoYSmmMr672dcxMaH5sLpp2L8uBSdnpXfYAmC4ZsFwRMdo",
  "key16": "3HzunnxVLNKSoMiL3gdaL74GraJgmH5xLkJWnRwRhdpRwp7qSf4Cg3NQiU6uXFn5G3zJTAkiT822y17itkLDZsGC",
  "key17": "4GHSmRsXjqhZ3zHF3ZPFaRGwjbpCJLteEFooPBPgKsN4jsiyYW8Qd3D5x1CfwJZwWtTu62MTGfT1BR5SpUd8LELW",
  "key18": "4BkWgax2RyqvbQyhw99xsZQMmWfqp9KSkCfg6EBvkxYWd37eRcb8vtsUHVMGzAe8MfBDuLxo7QTvM2uw83ovi2mL",
  "key19": "3EMdtgW41cKLnr2LXP9ESmm8myxJ4ic2f81STkJy1ExtnwpvyP8e7c6gz3bsUCFJVdH92G9yA7F3wU6FJtPiXJgy",
  "key20": "41tmRC9PmaaTunoRWz1RajSeEnhNSXSthHQr2CJMUtP9ACCVVH6s3vBAeEwWKmWtqpR8Ys9oQjwhYvk9ya3qKc7h",
  "key21": "5wSF94YUPGAuFbYfd8HU5RUWEyXLN8ds31pEQvqcBS9XGzmxtMJQpNW9yw4PWrEWVjJ9dMVVag7mXGFvRJFM2ksD",
  "key22": "2sG3TbJZzZSNLdNhZiAQB5TN23V8PLYTXfQLYDtCLr2fTbaVSep1p1kF2xLBWnpwmjmxCnAo9HKdWLxhx8YcD6ZP",
  "key23": "yQgCeZ3ocPkMNby6Mfe2jw6XMKakHUgvbEdkJvu4Y42apsGhXjiexFnqap9a9VLwaLT8LDz9czSc5Qt7Pj3PFP8",
  "key24": "2DS6nqUM7ExiRwYKi4eQaYzkUTndiXK2UoDAu4CUqKm9LK4b4ZpX7MJqVoZ8pm98eZfEa5JNsE3SXn5pLzPL17ZF"
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
