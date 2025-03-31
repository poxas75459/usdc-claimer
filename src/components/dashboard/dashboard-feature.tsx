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
    "5KumYKsdTHZhkcZn7XGtXw2cDyNCLcwFfnm7LbRM5UHAkS3fCpJRL8uzhrqsjjp4SmmccYhYTbmautsMcZ5riSWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nfhfefavvqEQ3bu9sPEB7c7hEZoTGfehhUzK8avSvQ8AmdCmnZtU3bF36p77kv565YWJniDnBPGEWQBDtmsvhLd",
  "key1": "65cbFzbVhWxgy3QUT7b6VCwYXK5sSQLfM2R7VgwLvBBk7GHkxuKNK8nVZhSVicUf2bML55uYXFMCvzzwuj7SC3en",
  "key2": "2Yz4kArGekPmAoANSJVzx4at3SsxvCUDN7wKpvZJMazXhnRQ3fjbShbVXJ3CH82zdUoFGUNQAxaggBSz7aH9gfj5",
  "key3": "5KNe9KzrEDDK1WWSQCtaPbdkbhPEUSNpjgy3z9tyuShnukffxxDhoUm6eq1iZx8G33hCytp4EdEoqcXTRt1YNgg7",
  "key4": "4vxRzpLsz5XpJcRXL2p7J9aGk5wDvAGP1fmrMX661xQTRGv7FxppxfceeLHgPZYdBCFf7zNzUHdXYiBELWBHhDox",
  "key5": "3Eh28wU5K9br5fgKYyvF2c7n6ZeqqsyUCTkNXT53EWwBjDLwga5FyHJXNLP42xdCHkwLfwUhETF3tkq7KP1Jh4CJ",
  "key6": "2SWnG5ybXXmADYU9XX9Pyirzh4zzxz6sQVbxjbjmxJUNNcVkXseNoDZAaQB7Ey45kdQFfnzX35FPxsQh47xNu3b4",
  "key7": "3HCnEmGQTM5L8GrzzmZnWmAg6faTKMiDEsFaJHSsooptsJctnBJPK4FXq2LZ9R2a9x5B3KBr6FsajUGVJrgfhkjd",
  "key8": "QH7PDeUWMj7q9LwKX2TzmVnsnGzZEY4KRASNU9VyGrGey1ZNow3SB49YHEM5CgXQXAaUNSpzWDjC9FWgaENzyQP",
  "key9": "3cnhi3q44xQxL4UiyNu8RJqfanJJyp1rTRS5wQUxVXCc9kpcPCYDSM3zE3DvTWHvJap29q4yPFx434PfXxEuSYsS",
  "key10": "2WZgQRqBhr4TUrSQ5kjHwp2K7Q4PwxkM1RTtE2dWkRxCPfY3yRAYpk3pvLZVzK3PH8ned8PLyCPiKwxALP7t7d5d",
  "key11": "5jb15Cxkwj1UHVWJjJZzMA8YU5fL3LLAfCWoLPPb4dEf6NwFMBXwQuXJ8eFZ9MXULi6YADCcPnxiznpB71xSQxsP",
  "key12": "2RTXCjAW7xZYshRkqMKJJ4YX1T63WMxA4UYNK4SjT6nFLMSZNBxXC52ZYedFR4XJEKHN4mYpsH7t4ga64tG6C6ta",
  "key13": "4NGdtkkoiTB4VvVjiHVkg29b8ztxvhPravrm9oGYbtKfdzRcProqrqnCugRftRieg3r82y4agWw71pfwpytzgEuC",
  "key14": "2HJJ48qHdXc1BBs1eDJbE6PuGtzyuG44LzDRzfx3XSzpQQZXKqLnR7PnQTFeCP3LgEWstwUPUV7QXzd1DwrPtNM8",
  "key15": "4muXzeLjSzettoDa16SGMBPsRpdV2pYSfiQapV41KAQ3mQQjTdjxPZ4x1YfwRQgc6B9xPy3e1ynApFmeQ3ErtkS5",
  "key16": "qcJa4BdB5z7fMVwfVro6GnMzrQEaok5X8fWL2rCNPE8nmgvufjmHn7wy46r8Cx5uFD9U7wUruXK6Lizm13D63Zh",
  "key17": "PntZ4Dv8rC2Tif8JsNK2AC9kFbRzM2pAaJuHn634szRhF24ZW8GLfQVWnB1KQ5RYe2gvaocKRZNSgY5xGKP1R8F",
  "key18": "2xJ2Gk8KCcjR8RqpDuZ13ZsCLqXbFDpRLDpoj5opGvjx9DaN4ZJCdrjGLuHkLbvmtptyreDtFXf1HGLEkcxAsYFb",
  "key19": "5afRqNFaUgj9ZRLrQTHAc4B3G4NmXg21rpXcbUUVJKCU5tN4XkSWXdspKJE9Rb7Y5kRQgxycmoxNngw2AAcAvWsD",
  "key20": "5vRkxXQrZ6BoWDLeDFciRh4kf5tuVm3ofxHXkHQrvBaEaWzaJhXpF2LgxUKLJDSnL3jUt567hxVytxJvgSBq89Fh",
  "key21": "32KFKCNfeA1vbM7nD7orSCd9F6JABCEYQNeen8pegwe6ADJhxJDgj29nqLob7kDkBDiXZc276icMVZMnXcRuqe9o",
  "key22": "4g21pQAHDE6yH933YCFFvzNY4S57BwmSPW8iToDDhreg28DYLU2zL3WgEuEoEpwVcQSSE3T4ghghnfCVyFVjSTPw",
  "key23": "3pUKwYMpgf98rvS2K82gAqWpGL75umYHPc9rfj4KHuweVbQmUMvVRtVcSjQwVh2c4GHPqbNfnfAkwumCgSwFFM1j",
  "key24": "53BNs7HMkKw5hUZEsgiiKDapTe7tBP6VarQVdquSKbNwbD6S6ZH91pf1rETnEH9c4xnV6BXJSs89gT9tEpnJCXWW",
  "key25": "4AAroRC6oV6DziSPZDAiJNhVxy76vxw4tdzNCHfdTtVZ6YzXWrnPCRqEYAujA2fRx9Qmgs6nx7of1VHXfWaeCQtt",
  "key26": "4ZSBCYZd3sBn2Qkxcopk24gQ2nGsCZ7uq8wF54pv9XT4qVQ21GWoP7BDLaBK8BUF2ypyyD49vsq24QDKCVSjwQYa"
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
