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
    "2gGACzNSq2mPrTMQ44V6hB2aM864gicBpfjrF9cQf2VHeZbTkqaMbScfJZ3MH61B1LKhDtd5Co58c5pkovrx3hMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UWjQ5KqWhNWZCN6Te8FJQA1xxm7gDoGydqNyLaPGKoDL1ZKED1iN1YQWCnkrB8gsceEWhBTBCA7Qgc2NXcq6iSs",
  "key1": "5bMKGeW5qekx8556fstg48Fk1vYGt3RvGpE6pMoDDEoS3ZaccP6woZ96MBZwB5fJPeJ8Yz5DT6R2S52DxJC3a55v",
  "key2": "38ynse7XhM18u7iV6mmasyXZERBdzoSdCH74d6EsYF6km7SK8dfXufGPXd2nTyMhtwR6zacDWNpka5TqDoqn53Vm",
  "key3": "2VNoxEoH9p3gKG5xfwrmU5e9zn33zQGkbdpubh8F13X2NXxRzSVv9DFAqrNNQAsxHtaDjPRkJfCrrgiUNsbgDbsf",
  "key4": "zxGnL9FHpjTHJcqSYVwoad94x5QDHNs2tGrLysKuVgX1vsuSCDhe5SNeu6VBsCD2iEQh6zEhB3QFpWUNUz4Purx",
  "key5": "3SzQpxoRksQn7LJqVRbLbHxTQwxJYSVaY3bNYDbhDDjnJsYSQTQwGhFgYqzV8KdbEu6qfVkZR3UFFGtBUyxpqRqk",
  "key6": "tujsnnPRm5ZQZsywCuQLvxQvWXS94n9odnq8Tn1dGTYXuKYToN2fKW6ob2H4UjFGbCv4rNrgcwRgbWUDcizrTuK",
  "key7": "3dSzxNsyhW2BX1okvXiHyYhNNTZBRh5hNHaEpxkN3ZCCyXSCH7DLQwpKN4LFbQx5Tdyb7neK1PUr5mqUgcWgdGr2",
  "key8": "5J9gKCDXa7bPkNpA4wZR5hKo9vbxXT8uL9RqEFNrX1vjd8nHCUtCvqUrqt7mT3VBcJ8UHZ4kZHfNNGrnTrUAqr7p",
  "key9": "iQZZsVon6C7fxiAJsam2LFpCmGVJL1KpfT2QP3J3tAt3XcRByH64k6xtv5qaEUe45BvNxemHyL9a7At6TbuScRY",
  "key10": "3T4VnVepbKrXDRAUBGwctzSZsipyaBCJujYGoJ6X7eY9voVFhuKdcQjGZ3D4vJuR8oJskbrpzjz7kA9oD8Ge9Lhc",
  "key11": "2n1MyPTZvcyGbqXcWxrkvHabQo6vbB2PHK94m9potkgFpDiMnFtKodsbxDHpTW9a3ytfsxwyvc3mSGS74bb73Uoy",
  "key12": "UC42bSJi4ofZc4LLsRcX64AKQogCbBC7fzBQNZkDuAmjMTxMmUGZHhzNVQrtHhTNobZxd4yRPS3PzBnw6A2FLKj",
  "key13": "3LG3PpbXQAUJxzFCwULEBYhH4V1DBmXKxLLXDKe7UHZKUgHKZtDBMSNSq4Qzk97hom3bMdFucpVPcG6GaqS99bqv",
  "key14": "4W7NNS7N6tjuxjeN4r6CKjDqSnPKsW5z9m63Ps5wonPjyZwdAWJHFZYeGrWVnsVHPi1ukGPabzbV2eaGPfLD5dff",
  "key15": "2f6ftXtToABzR23zGjZt2iDJgctQo6YggtYPHbyWaE7wwRHbMe2xyKxybgE3jMV2e1Y2wo2Fwm8tYCxPfsXrMGmQ",
  "key16": "4iBjM3iRUhcEhGCXYthQEfYtqSd6ShdTzuiKS8CKCoTg3QRHhehxKrXarRrbshaDeQXcKERgkm2K2DA9bgHzxCRy",
  "key17": "3kS6wnJkJ1xGVer1EfGrCnorKAUpKHu2HHTJSqtdqZg36R8cyRmxzLEEe14GkbBgdupKgrfu1enuTqYxu8S7Kgqc",
  "key18": "5i28HX1hWv7nZ1ZbkABQFLXqFaRJRhjmzpZXc1SnJiNRs7pYoPjvHELvjMJnvnSrcYydzCMKsKSo3zyTBXHqUvEx",
  "key19": "2dFrL1iRGBjceKXJzHdyjpYzXvqEbDDocQh2swe18LGYGjowHEhhy8dqG8McrDnbuLVFKsJh9KzC9rycLSYSGEfZ",
  "key20": "2BWnXDANtJ2gG8VcTWFNguNBLKnPJ52PcSkbrPdguWiaaatvy7c3QBeqvsSpcfMhz3pev5avkAgYEhirWXzHX8ac",
  "key21": "2GZLDsHH2MM14BicG5PxxJmjuoyVxfgdZykvW9TaYPq8Ffnve1sJ7gxRhjgymYEzVUanWUX4zQxRWKhXrxdATy1z",
  "key22": "jMDb6XdyqsjAfbq8dEwZYKrF1NZ8Rh3aQokiQbzDEYKD9mdvfNoNZ1aH6oTTw9gyyW6tZywKrSaVnx6m8wFrnQQ",
  "key23": "3vDofGcFQaAnf8fofnt1YXEmHHg3s3tdwPm75KWE6fH9pGhSCzNbEZQab2MmGA7ehFGaSQC4yZ1dSbequxqNTouy",
  "key24": "3yMWgCfAbYisdgjTznvK9QwwWEpS152YSb4qfb2hDARQtxCWPfMjnjF7xrbgeoCKgRzj7zRqG4G23dYVNJa5V97",
  "key25": "4RKnu5yBc34JnNzWVqAkkbpah892tr8RfeVF5PeuZtxLC346dPS3k83aicVEctE46eGWxp2nKipnr992Q3tpkb9p",
  "key26": "5LNdAkCZXbGhbL6DucUELbY7ZAt8hGmSrfgXbLxtkSnYQ5iv1pj2nYqwxsd6yMCj6HgMuzHcCMsUUi9PaEGQCuhA",
  "key27": "WJjzvQdFtBMCHp9Wb7DSwJpF1pvkpyh2cTYsaJmTLbJHj4NxoLocRXZRco4CRhzPgbCq4sfQrLoUrewyDiyVzuR",
  "key28": "3mUmP15uyS4D8sbi6qcKzCG5b2C14DKt22mNdwW8g5aVjo931oUhGtoaDTY6LtFenGo94Y6i8YjfkphkrGnV6v8C"
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
