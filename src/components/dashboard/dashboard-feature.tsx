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
    "4C4VWHZSywwu3MwWsFXysj1f2dPUhWHxWXTJuE1tAgJVJrjjr1rfyTzxMHac7gBnKvSGoRfNAxzH6FQZWSGaQ8YS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bD9WUB3MpetRMkonfCwxiccNbA4z3wLDt14eQ1owCCD7yV5nQzhFLUboGDrT4xmMSMdBP2aPakgkPwdBFtdwroR",
  "key1": "aHHqN56W5iUd96EVnHbivCPVVXKs8Gqy3GWb3r4igMNVnjUkCcbt34GYwT58pZ5mGXXZwbQb3braHQdrPNNYCR1",
  "key2": "2rQuQe9RNiwtbwkav5Zxp1hw4EGbjLuPwaHqgGxrvCgYTEFv2MUhddxSJGX8DUmygxGUv3Hwem2YHccmAawEpkQ1",
  "key3": "3RLKKKhHZteTa1ggtiQcqNVWTUZvNmEpdsyRC8abivuPR5Tz2vHK15m9aZdUVPPKgtoFHZrztrwDqTY69qHQpFSd",
  "key4": "5W8y7LNKwGjH4BdxKxHU6QeW7tHujSoZQfxqPPBbJjWg3n5ExAftT7h63BxzgtiZNFZPchepmNSfPFXJxhcJk3RV",
  "key5": "3PyceJJYKARNcsn3dE1w6GSGMeG4jCpNHk9iptfqB8aEQa3EfwFiAbc74eeNbr7w4fEvEC46aqy2UxDG8Kt9mmqx",
  "key6": "2eWC3K8azUMuhbv9tftM2iuu3u1qM3JxCyYJfygdjGazrUm7TooLPvZehHbZGDLPodf52RY7ys3nDKSKmRwmPYQw",
  "key7": "4AVTQtpVCyJyyNoV5x7kcJZVCwM27spgmur4AJNpT8HdaCWS4KgcgtS5v8xQLu4LHyGcvxyLEBrZuiqAb5ovYYrW",
  "key8": "2RkaHyVsxZUzNFfNctZ9a4zjXDDQSUhhPQUHzwP7mR7Uki5RtjWrcBoKjEhXj56iduTTHMVPXSmz2DvUHq6JrYro",
  "key9": "4oxLviMJBLUT5wWANAAmiVaNbNihyWeEZUNPK782y9WaFNE1doZ6eSWkaugTcZVkVZ8fbAhMC1cw4dttG4nebUAn",
  "key10": "3wNoSyHEZ1tV37PyqZT8p6SVQyeuWnzW8NzvFDbde1j9t7RKwZ3kGPSMucgqztJuLY3wHTU8qutoxqJ8dnt1AFz1",
  "key11": "44Q2LLTb9gfYJ6QUTEYk5CB1cLmoNFAtEDEd1ZDr2yzpMtDcvfpE4FQbg6HvdkeGktqw6hkfXF5968d356Z9E4qe",
  "key12": "2zxH5QK96pfYxu7uD1NVbSpP9s5Rk7ShqcWqDEvqo9nFRDgWx3kLWzAw2d6xQWdCAzTYqZfspmF4uQZLLxEog3bT",
  "key13": "5mhfGrbWEL4uWTGgPCwECnrWG8DAcJnU5wQoGYhLCfFAi3EANMPNcTHhYpDMMQxFr2VFd43mCrQgJ11hJoeed57T",
  "key14": "o83wo75fZaAnC2PrWqRBkpAkfMX92fziV9xyxD42hvHpis9fWZT5MrbH4JVGi6JWx5wLt67gQFUt3EMc6pxxbqQ",
  "key15": "4gRa9dh7bwFJkt8WM2XexCozf3pAiHEZ7ScvmecJoYnGx2Hea3MdWZY49Uh5LkqhMiuRdVDHXUBR5E8bxE3xU5Ro",
  "key16": "2d4VHhRuaqkxruFo8sc3r4BtaxgY2E1CDB86VjX85SRX4Lc5bjhNhd34zUthHeybZFEZm456NpSorJEJfL8xnAw7",
  "key17": "5rhJqGzkvg1unhgq9XHzpv3svuR6bBbC6Z2FcBpJdPzai7Sby9wd4yfpvL7i7TZrvm8t4hFPsy2fXx1FsQ3AjJd3",
  "key18": "2zZmT21cfsQ8eRttucJVR3iX82BbiMRWKRMCGxCWeyFKGH4ynHk8JsscNk7H9u52HYSCvtmk9h9j1eJfeAtg9Rev",
  "key19": "5DCbNGmzLXeevcVdk5jURZ3Mobm27RJjTq6MbTgWxHqauTBG6vZhe7cuYSdo53v2wYKMyGg43fZ7WmurdBLfL3vS",
  "key20": "3WQ7GfPHVuQHsHDNunNxvtPMnN5nYqsoTs14y9LhHBDhdR5oTS7tRYisAki3phVgBSxsidvqzKY1Lie2zFTMBTyR",
  "key21": "4fPdauVG2S97pxkKGB6kaCUwmM4ruZp9AUkFi6dnTXuHmhisp6gdF6PQVMxbH576GDtsUnzV7jMzCqAxPANhUAuQ",
  "key22": "4p1PhbVsJmg2AX4EVNhgbe93VVDKofHM3eNQCZbRgovzA64XbrhEyM71nuDMPDhKyzpouTL8FpzzSqd9nd1NWVm8",
  "key23": "4jw5NtVNNFPMuf9pVge6ix8BLnoFWZLexzhUkJ5pTXJgWeN4eqRGB2viUow8H8rdUX71NuhFJVLqhN9tSYR26Awn",
  "key24": "4zJDcW5iNLRQyKHFKDF8ps9HTufA9Eh6EXBnykwARAb3mGkupBN7GyhzG6EYaRBw1EaAVqUAyscmzMhZoa1oKjkW",
  "key25": "TWj8xvafAGcz4ic1EMJjYBWexz7Xht7MwCQHCCApNLLU1UKgPMtz4CsgLcQgVF2iEzDJasQ8zkqBzokFz6VshnE",
  "key26": "3bTACUVZ7rdd2yYdZRDwTAPfDrs8x4KjYxntjFYFMS2xN8u6Jd6JdwMdmdxAsbxJVGqJc9nwLd1boTPMAexv8k5W",
  "key27": "21smsettuXQ2jNuPyGx4EmuJwoEBP4TMspvTMVtrMLqaQZSkVPkonvxj2T5Z72u1Up55keE3L6L4rxLdvgeu2Vef"
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
