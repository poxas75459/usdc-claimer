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
    "xYre38NZykg7saFu4dcYhgQVUQrYnNZxhFyjgyPiFoHzTgk3mqhix7JihdXNBQSwLpE7GbfTQ8zLu6tUcHYxQb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wjwf1g7NVoc7ojBpducXoC6AFseZ3Rn4DD5wS48oXDLWbrQYKb27qcVU1NyDJu8yMv4bnkhNsftVh9whRewWihu",
  "key1": "5AmUf7aTtec4X4sAwD6FAAqUZxb8FJHBBbNh7573AS9N8zpYkJLkoEvot9rsjPmb88NEpeU2j1Enf6tjbhXW5a4T",
  "key2": "Sn17TcbeaALNezjRUEgqHQsybmbsxy2nLhd4Dqjc6BbWbevYhqi2dCMNYUyu3mFUSWdkRHkbwVt3ExTMnVJRJQK",
  "key3": "TisggKJJRE9HA4pL8eeVCvSrGcWRjcEyt7TXzsDyZnBGypHJqCXrEwLkvk35sHaPdEPPVqKpK2MnqsXcFAjE5Y8",
  "key4": "4vaneJD59VM2zuNCbfPc3yLinfHb7vHk9NSxJ1cAgWoai6nUPiC7BSNWfhLKCa9M2pXr3emyLNaUswPcoiYkgVqz",
  "key5": "5Aq8RSPLX25UH53v39amnyo4dzLcJE89scwXsDmg4zSudQHvpaMg6AkkcQqjD7HYy3a56BWLj9brqrMMYx9Ezm2i",
  "key6": "XkMGcCAHr8QGX5rxsiugLxLKajoYEWZmtmhsTjAPrZU8FdSVBiovQn3U4SmKsYZx5eS24SpHk3Ff4Xjje2Z1Ydm",
  "key7": "3njgpSBMKLMMG7oHugNbLrUP1nCAh3F1TZVLNPpmaMFd6m4TYgWDtjZw6ejEkampUjzVY3ejBXqRmwhV6H7V2dQZ",
  "key8": "3wdJrShGGFag4VDCkQYGQzgmPoDF2KdYxFu3X2hJE8ygCfZaAabiJHLS8eh4sWEnVf4cHGcXwLn7dcrgfu3fueBn",
  "key9": "58dtA4iSf9wZufDxdf2KFNZ4nzmoFY1P7FysD5pvePkotAjBhEXpkW14anPmYFZboxT1cQwFzEk9C64Kh846bBv9",
  "key10": "5KnNeVP36BhF4469rpwQnJyqKByJg8NNB3Djn8GmXL6A6LCDoreMuoJ2ceGH42TZNbFazh4gYR9esSuMX7M8XHb",
  "key11": "4CUWgjB9bW6PWhYuPeE4dRYm4wBQwPexbfhKNaGRSYkppkbWscBR1Ewz7UfoA7B8Us8ZyZXEef4E3xeCdrLJPzwb",
  "key12": "4NkRGhe3arPyWjAy4gLbDMdMqZH5tRdPAB7A7CinLVDcrE9eSYrcsQNZH9JZCCNsapsKnCEWtXqSqH5mV49iy61Y",
  "key13": "47hNTdsgBbNCqSz7e8tZSPyNq6ghkhr8TAsLQgpPJqCzj6yUJksMUj1Jcet829Px6PikxYoL2rpL6oznPtcdxz2c",
  "key14": "2b8ZMRdLfggC2Y75Bp2bWWCtnB5GA9MaEsVfuk5G7Shd5fAc6UMqaSE6sSjV95ofhwRP52b2bgTCgSg3q29nKuFk",
  "key15": "34uJyM2bQEheMgwVXYwX3k42HFkVeSV4gBu6b7g7Sq4FqCuBU9mzfdPPzTu5KbzWUDjkG5qMUEYFBsiqTyeQYyi8",
  "key16": "4XXvNK2AcbfcPb7VDVPZCgHdZCFQD8JeWBRpGDhvFga4g4R2f11q1oTYxNTMe1xRnmR97gKesJ6TmxeZUUrbsivg",
  "key17": "31Knb9HL5DDGsqo4oFk3mwj6chkXbFhW9imLEZ3v1QcnpdKPxTnea1Z3S749aswYWMn2sWd7aMDEoDDuNbhSvug1",
  "key18": "D5stimSirHJ24RoG8F2yQSZZ6eaU6wRG1jbquFg8FK7UpmHhQbHpHFfqsZyNcdTZwasNzxHitsros2VZqU9nAm9",
  "key19": "5c7GQDZifJjzQ9MkAY5HZsYUJUnZkQoz3ifQWHtKKPFnqJv4SJz7caqgNgMuq8SUZpKfKEwVmXkk6VweVUpG4z3M",
  "key20": "3w5aaQGBD72dKEpDHqZK8coFzGniX58arDAtPF4KCkLnktJ45HQYnzEs17H5Vx9ADAH69fW8sUbw4TwzRvkKhSus",
  "key21": "4SAYfmNmoVVWY6FnmTiKyTPQKVtEnrjtwzLbjh9s8Mxpz8zyNpTsZaA9fwP2LVpo6TJSFF5yfEMWLokJobMC5soB",
  "key22": "7TgiMSKCsYoMofsyQ19JfJyQ5J8VWSGMApNjjtddtJ5axkMrN781sFhTKbKWmdphZvEhqGUpYtAyo7KPYZqubaG",
  "key23": "4rjFs4iJwdCQGZWhSTk4meRfVPLhQn6YkRVxTzss6VsRmk5M4K1xSTUnWPMADKYdbPEMCDBBUW5hGpD58ZNy19aV",
  "key24": "2SeiYAEfaSm9QZct6eazTEnwob52dfrQCf9DkrwMtCfRzLg5ZkHJ3Ty6HntdBoVoQ1BAsDUMXHER4VdmuLPi9HH1",
  "key25": "65nNHEcNRYVdtskNLpZBCTa26eqgPYphmCfeuqLUvFLMxBnpnjmrYL9nTyuSbRboS9twe9pWhHSg33dk8bHN19co"
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
