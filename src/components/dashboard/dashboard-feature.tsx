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
    "4LpnatSVpWTxEjjTEmGXiUHDAzSMxoYmKoNkAPHH3i3VgaDPFxNjYQLPhMLZkT68mYe2dShVixwWDUCwKZRtCV5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LjVMvNVi7xbt8mnmziNqqC9yUP1FKLHHnLVxVw5ua7LDixuTZ9Fk8DzADspBNPPd5MzEnzQDsPHcMMN2D71JgLy",
  "key1": "2r8dXFbRM9EUjcW7g7u8A1oVT7qPJN1ppYASg4tBxcwUeb7i56HudwAP4x4XobgmVsM5uo6t5Wy1aSVCuwE4SRj7",
  "key2": "2S4cC86qEJXasQVTrmGRDvaJtBy6cKR5NL8K5QoNUJeFZ2h3YDwXrN5CcjkCdkGZKqyGb1qWCCChEbbVyS6J2mig",
  "key3": "5aXx8ZdanYqif52LP7p96J8JY4mNwATNqJgBGNtf4s1uy3L3hwBdTgPvNhYXdiHFuC7scGDZcPoopKTiPaYU3ARH",
  "key4": "2NA2RKHEsrnBwK9yAypS5jTd3a9GapF47JiusTdovLkHrKGLdwLFNjqgZ6CUZpF3ZdfiTXvJRPvGSgNJfWdQZsQB",
  "key5": "2PERotcqvQQ4CSxB49VLuoi46pJHAJjNSqeR2x8uEAsT4uP5npspEVzHjWZXKXe2XJtMdFpbuaa1vmYxzXSzxzq9",
  "key6": "wRaSQmFnAUS5hx7zyyvVBcpLovRZnMoRmi76hc2k9pYqtf2drjynEQd8x2pmxHNsVktbhfbNvjGcsKSJwDGhLpT",
  "key7": "5omYcjkVwE71HGyTrhZKqKntr4HB3LHkWAan37XTcw36QsADNxvha8XhYY7cQPNXWTrVQHtQxPAmSx2ojwZynBBe",
  "key8": "KJz453qeKbALuYXPQWkQHAXxWJsCkuXchDq1DsisKiHfAK28PSYRyNW38gxJFijk7U8MTc86NT5UNwsYXMq7Wdt",
  "key9": "P9g1b35emErqh8Dwnj28EmBY7xZYN2Crs6jaBqn4BswJDnvtjPmLAsXcHo4SVQD281YNP2MLNTxrVqf5oT6jUVH",
  "key10": "4HL98FZSPFS6saqQRmd61zHPJm9ymdu57TE669n5dn36CjG2TfZk6cG3eBdmKArpYa2B3tEbtZJz1F7iPDxBJyQP",
  "key11": "2hvVZBuy4Ae3XmeesZ3fGy1WBuVmZdFdbYRo6s2Brvj6TdEhJcXCuNM3pLvc8d2GMrZj3wjyHz9WqTGNqAeyrdrn",
  "key12": "2xDo3axuUfkKy76NN4tB1tg1GQJLjyHCx17KWoPbuDoGjFZqt7afeYQiGkqoWKXFMKTQkW5RpeQXm6KUMrY9DskM",
  "key13": "5uWE2o6wsBioF3RMkTTsqkSoXZoVZxyyJXX2yCBs38c56UBgfirr2wfFweobHY9t19H1ybzctyyW1q8HV6rc7zny",
  "key14": "KwsMsp8YN65X46JndPXEjMkXWCvnLBq21jkR7TX1h8CvQkKo2w2fbmDTN6PBsPCQZ9moLzQt2PmE8SFDuGbgazX",
  "key15": "59PYymS3UYGBijYYaDc3JY5JRt47dnZeJVq7jzsKsvg2aDjPfyQYejxAfLWhbpv2zt9xKDo9aHTQiLMmA5gYFvrh",
  "key16": "3EXqM4QQKRzmokTHTqwGSfcnWyCPMBwCSEgF2yciZ88ozNX7oaYVQBoP8VwnBJD4CMkRzojt44iMbwaJ5feP5nfC",
  "key17": "5vYT4zizYsE8pUur4orXPbGeuQS2v8PyEj4Q4aNMrdyLNu8SrpmdUQHkf6WjzpeXn53rhYcDVuQCgEm3Ppk1KNVF",
  "key18": "2wytRdkdjchHkrgN59SoU3ZMoVRfLUMG9gNZWqswtg6mo98eCDnXjBQxTFSwpP4REu3CVrXKY8cxYthQsH3miT39",
  "key19": "oosECAZ5fdrsuowTL5CLpCJPVGA7LZ89zRKiNQc7NfTyUNTwswgwxc76qYjR4oHAGHcQs5eZVxFuf9q1K8dTQuK",
  "key20": "5M362Kf1oa1jLfu1eUCbaaRF7rnbKuVoJsrKMXnPXRBPwfyHM2onVXsnjziNYDkFawoFMxD7vZzPsTR2rR1siFQp",
  "key21": "2pAV4EQCybia1CQLQ4gDZ44Eadj3gzvnZQau5HUvCFiGUr5LFUm2csPYtxsrroqc69EFpvKPe1gQaRE821biRgh9",
  "key22": "3baikqRfmu2keowA2h8qXBhNQtEgr2Ya1qQaV2nMULbdASCu599pQoshVm7qAW4PMboGid7zHTRgsMnAayZL3dKp",
  "key23": "4UTui3ggwnT4eL3dZHEKi8Kw2ZmesvWPU3ftnCqw28tLQGiWFTVmgxBq9Fbav17Z8KJwseR4KvQGEH1xirEB81zA",
  "key24": "4BJ7GZNnFzaVY3fUgrbbt1aCzRFTZ3V2CmGKzuyj1tibsQV8x8YHb26GpGzfqVW9B8CGEdTYMRFJy5X59kCYvdXA",
  "key25": "4gUZvWDvMGtafeUosqH6Tgd423k9hAGf3K9TTGZvHRF7rQB7swYE1HXVL5cXMju1Mg2h5vUZ8C6ggT5iPuptQGXs",
  "key26": "4akgXYs45a7sWmZufDiwBTmrhhaCc82N9qiDqXE8uSJmaW37kWhz5Cm3fgUBeuNyQKaTf3MbZzqitQ1EkHN885oe"
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
