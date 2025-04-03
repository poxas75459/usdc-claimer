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
    "5UPEeWpF7erEkUiatueyeaTEXCmp5MCMvAZWV5Q6JSWsasqek1ZFZiisc5d3vF1uPi6tcL8SzPGk5WReNQTpSSvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UamucmrPX2mDaTckb4b2cRh99kEw3jkNbMPFLZZytEKsxuPxqTrkBX3QAy5s7R1UuLvV4opr4YCcmp8dUtnnYVx",
  "key1": "2qhgYXngWAv75Hc9Nv1X9GEr8E9pktEcoL6YebEZqpVc2x2UqRjA3vny3tYvWPZPGy9pTGXKSKsnsKLPSZwAXfBo",
  "key2": "JZuKkWEB4yFg4fqsPv9ibDNcyp21cVraDGm1kpdp429hSzytM4Xg1L5dD7Bxyi1AVn2aWhtXgT1ANXKoeNddx5j",
  "key3": "5kdPEwjj9n8RLowXaJtz4uXwNMbLLcwqWdqfeo1vmLJJT2Z8eKHotKJA48GxviKFb5pyNqU8TjpxFk1zYSjQema1",
  "key4": "7ukouUFemJbUXLqusmrsCKmxQVXQXkQGUZuHxeHrQGzvowXtFBJ5ZxX5UGWFrKUe6MMSKBiZuqEE6PGfLDCQJqh",
  "key5": "2p9D9h2VD98yMV3zfBvDdZ4fjXWBT1VSWNR7DvshbfuUefyBtJ7rFUYxafS4xxch692YfStLPfFtrZcp2NF1HGZU",
  "key6": "4ZWSaQtzxCVrtXZPQjEPLVHp9LAC3cMaZ47sDmMRwNQa4kRZ2N9fid1QZjwR6dkMTuX6ccrjCsjURBp8ViktPtgo",
  "key7": "2VCyEjGcEXPx28XVGPURBkkEmAL84TwWM2YLN6GgDm6oZtwwfrD6LWLpLgqvjmZBX5WMjnsUiGYwEenvJZ5yZDuC",
  "key8": "2tbPwawBtH6Qj4DXMTV1zurpRuzFzxNf16LncMrXyAGcSJCVXJJeHLZ4Uyq8TWibqTdisNxXAaecNnvkixzcsZyX",
  "key9": "4tSUuWyt47W1xTaW4nLhfyfqtBy2ig9EgVqA8ocEMCSvgUb61eSrH3YZo5i85HHjamboE5ZFC153W1P3hvGgvcpe",
  "key10": "2LTN5x2YESnCoF5zKzh5KYUH4s1BDKZTT8PzQf1NcsVC4Ptm1RF2eREeC2ZdfC8EzA8rojicmd7NhWtJk86REtvH",
  "key11": "4epTRzehRQynVXTngoQTxMsJqjUaLqzCwkbeVuJqWdiJzVLahkXM9vn8noJqUxKvCUDnMAvgJbR2yMFWZgaTLWMq",
  "key12": "53vUDy9Qg1pJPbjGESU6PZrnNHYNbj28RmQsQxHm8C4k2YhChC7fZ8rHgb7WHNuqVLvVjqaBvc7iz9NYNA7WisKY",
  "key13": "4hA72brMuTwga8EdxXaMyzDTLg6wY8vrdnNZonwpchMAo8fivTzJP9PsFeXvdCQwTFQfjyBE96vmApKKJ5iPLQT5",
  "key14": "4qsMceHryQfj7aV6txfaxDgvjPwHVxopUDaUvddCEjvd6hB6Rsr28sLB8cU9wp2gkt111HR4pvSY7Emi22vR9QvF",
  "key15": "vzLno2hqhM4SQVhSsBhP4rgkaTRDizbRfVxkfgnk6CwjPPK1A3zxgt9umEUx8AMdLEXBFm24tTQSJsTXAk8KHH3",
  "key16": "4sp4zqKtywrCXowThe8iZLXUGjjkdtWmSNg5kAB1YmHoeYMh91CQ7tinu5j6LGu4EWHhPuxi7myXpqP3Gw6qqZS9",
  "key17": "4NnbZ7RMoWkpSDzDUgHhaEFPZ5SMPaKE1m9h7CERBZEJTjp89CXWn5SKnzwBPL6MJZAWkpS6MDxNyyhywcKJ676T",
  "key18": "4Txz134d8ik6vEfTb7CwCMefBYuQnep8bLpZTTWb6GkujagvUZKCTYtzFjAV9JgsGNttWQiW6c3A8FQP3JaNPZ2a",
  "key19": "4HPo3MbZ154YF8NTMdGuC1babkpuJJV9XPwYBQmvh9qPaj2YoSho7D4z8VXk5Du2ZxmgwrZRFGSRbYVsmfJDm3Dp",
  "key20": "4Sd6tXd1TWdLL9SEwzxPwyJ1zL3XVkED7HE6cvfrBzHY7mQQgDh8RBdmSvwWbMhu4reVXeCUciqC6uxHX3JGNVYb",
  "key21": "3mgRPCr4snxyZUWKV7uHoTeSJHEcEb4qtDHVtL8zLfq9Ui5cjrcWN62gPjpWQzfL6i2etSXQ7TcGWYtqCaZCkto",
  "key22": "YQiqjwRLxJJEpjrDkB9gQKVJt9gTeoy8eYTm7YkKY4qvqMmvzdeNGXULB2b5SpJZHkZi2FdAi4dkBidR5M9eWnV",
  "key23": "4oHpxzZGCetbHRZpYiHmHYUKksC4jRQX2N9e4csHQ8BohnaMAk9jSwa6T3ZPquPXYa7hg6vH9QR9qVenFqtxPzor",
  "key24": "SL1ENJD1uricKXhJCMJPDecyVdHpVyTAmzMxc3i5vVkbQCknvy7v9NYKiZPMnm1hahugnhJV8N1uP9EopxYnSzH",
  "key25": "2vdaDyJTbwMBZ5oxK7GkZovetUJGrTtkKQsVExxzd7oh8fNW4j13bsK6omkmScSUJQUQniEtujhPv691ucxsJqQV",
  "key26": "3tvtaizCKW8wDU9qfUn7h9mP6dFrRWCm2rWvAjkE9EYXyAuEBNpDCijLRBgx3q8WGkWHtp4ExASdHnvfzzJufK4A",
  "key27": "41vqQmVKV96KGLHeDBZPshD8Bmg2FXb4CNQUjMzbzeSaadnBuXdiJVuE6DeMrweLCmSTVmJ9ttsPpA5grpmvPPKz",
  "key28": "3CRDieHeuGfm6BFkN4C51ahybqJqNECBFXTdtJnMngD91Eun8MsXj67LFPPRBYSS8Y8eFuQYGemKyjghYQPF8pRY",
  "key29": "DXuEHbWevBuWpghDyUeJCvtoqDodty7jqZ5TGHg2p3KJybPgWSoi216ThL7XTcx6XdVboba41GbLmujhdzVLZZe",
  "key30": "2AWfRxQ1wKQ4LjyeT5E3dpDsWabRRQK7fp64bu26G6PYyjBk2m5mnxGrJyCoBKZk5zz3EsEqsVR47uZSZZmw4HCa"
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
