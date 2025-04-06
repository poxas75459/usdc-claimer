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
    "5YayVHFBe7VWqa3pPRswrDCwYeF7WP98W58hh1ofbdHwfFeKjMvP9U8ZPJL4a4ukg4XsnDyhwmASQufmCiigV6Jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M5h2UeZcFryxe7Z2DXPpWHBSUUcsLatUyt1R36W1yfEeMGNwA6CfpNrewaD3rfyYtfBiYeAn7Ztx5DwzrbK6bp2",
  "key1": "5bn4QnovRW3aC1UjRMQDfZDp6pZNLBtH53Bx8o91fbKRma7F9ubJf1wPGVR28EBKyRarsDhZYNS8wNYA9UXqEgqj",
  "key2": "9VuybbU7Z9RJdaLGR1bRxw9URMKWbSdTC8jeHTx6RX5Vyyh654fXobw33Y6y5FF8o6FkWcuxBVPjgQAHcrsV9ha",
  "key3": "4KDVvqgSe32yDS9Qi2k8n7b1nQPvLF1kE3hHSjS88PPSJtRRGsgrzbjKDEd8BVRX3M5oZVsnpvKi5Lnx9o6CCGYY",
  "key4": "5xCEkrX4uuGnqdLgVfFSpKHrQG1W1gLnnkPXPcPHWorCHpwn1p3KTBFU9Ng6AxQGf4G61Q2omze285eWv1v2L2hA",
  "key5": "4Bnm7HZcZ6xCy7SkASMCNaVyEtYxDe16Y75A7mBYiK1P9ihvtQPp4qkQhEkBPCwdJyu1rpKm7HMcndkvbvunN4ck",
  "key6": "4QXQP258YD4fNctQFeQoLYtDc7PZy6NGgkjWeq8UcvE9dSgBtBSnYZWky2gb7GzWDbT6r83zQkca5SWGh5fxm1Q9",
  "key7": "4VhbTq53eitFGsgEBSeYa44dwzNMqysgAdPbef3KvRK4rfBbe4357cbaJ4QdXarEuGDpqUngAi6M6ejEVu9HQTSP",
  "key8": "5vEAYJcqvVkTucUGwHk7xZL8D4uEtCLu5P5iYPkgSz5souf2r9RjfieG77jmw3GVNEx3BjvyrU5i5TSkQBzktbm7",
  "key9": "3jonbZwqk56WWwtodBFeRvk2JJyyfs5XwD6PdXnwsrnud2XkPxc7fD39sfdr6sc7xwqE1PwJYh1q6bGYMZeu5U38",
  "key10": "3NQ8UHu7tw3ou1ZJiDq8qZSEewQHkeec27HTadZsXqU6drw9d2LoEQamRAWsdmLf41epF9JpksjFPToJmizcaSkv",
  "key11": "33A3H77LPbATrZ8DqmnhwNbW2WBKPXU5Av6PnNG4dg4uocPahwp1swMy2pdG9PHrNiaurWJjdA6Mij9rr8suPpf1",
  "key12": "3oSWCuxj5GpBfBUEChDEMTKrP9pd7DA9qNSNde2zdmAU1RdW5PybmjAFcXqGzPfqJsUTyqPuoftVi9jd7J3ByYxQ",
  "key13": "Xyi1vE5KmNcUR9AKXSi1LGRDABwvicbDYGnNLLb6BWyBjpoyjEcuQFxcmDUuo3yjnoYn5nMsQvcRemy8L1RbSDY",
  "key14": "2E8d3njK1nA8PhELBWM1YXHBcnCXe4AE7Q3SGbr3cfQzPpurnEEdkSeAjZhtEGqTgV2oESdtVoSPYdZ56Ce2BmHJ",
  "key15": "3MXxvnZYnuWkmZEApyrT8SkZX9DyhUudkYvzYKvKcv4ZBCVd1hsUoiAzJCpnJjgQQdYHbeWRYYhu5nj6JJmgr5iw",
  "key16": "5Dvgx8oKCPyvW3AQMpq4TWrFH3QZbnKbtPT6zExZamHZFvze9ZXuCBJuoLRroXboeMyQfFj9fLYFVhE6wAK6YU2P",
  "key17": "yEmpEgXbysY3vRcSo8VwadPReVDD9DHqf3zSuoCGmkdirTUD6YzrdEueQEMgA6eGYhnpo5yLBhbvaRcHttpxtVf",
  "key18": "3j7wkxDgKvBoYkNHULHY9kew5KQbPa4KWfHP7QMDu7TV5FiPuqQQEktCmWJuY4tXTA6t4T7xhN2i9Xry8cABHANB",
  "key19": "3uGuCP8HQHW4Hf8fNZdx4USEqgBNfL4siRM8cMHCqZNbLXmHwR7B3uSaVbnXYTkBVws26mSdiyR5Qi9G3oaX4v6A",
  "key20": "2MpNJ6TShwdPLQGVnsxJFKuZUXdy6vignZKYqPJBXCyFm11EuPGA4XmqkV7vUrcpVroz3Zwojm9rFnynbqt6hvuL",
  "key21": "N2mAaGpnQ2YHtMaNXLQPeEtjJCP1VFCiULkDba2NasJEeUiuyS21UoykBVkV6QKUvMt8fPuET9pbNNwhzBtBoYo",
  "key22": "5MVEWSmY9H96xtMM1tm2JogBYCaVdTfJznkSBXSqHMAihoAJS2hMjhqkbKYwcvnkeYsz373USYFqQ3eFRLEvXJPY",
  "key23": "39KYNYmksTF69SYbyMSeJuNJnVm42RsWmoBptQAbj2MRuewGnPQNB9eQPwMNqMd7xXobrPr7RVAJxU3wRF1L7T6m",
  "key24": "1zW1p3xQkEycVjfUJCwFKHazgvhYD9q9UAG1wmxCMpCv8P2arx2v8SQAhErJ5kPs6ETP4QPQh8rF9VQHoNpZj6M",
  "key25": "5dSXE4PBgxik9MEX7gjNPz2TC2DjxDALEu7qiyHrDc3D63va6PVG33ReGYbrtxSGidx5yUFMvusXYWm2NCFKC7xa",
  "key26": "4yAHX29am1mPZohHCuhuzsoBokFSjYMtbZo7mGXWrKXrA9T355fd3aXLXu5ek4yQaMWrfDomsW41xGqtv9kD6WSD",
  "key27": "4a2YRuBD5tUUoTaaANs9H91dFdbkGGKFPjhmstRwPy9ccWZWijzHLWck6gUxuAQhL8JuuFCVMsPotN5QAgJTbWHP",
  "key28": "3zw1EmupNhXGDxNsdijiP8tDwrbFwDyN4cHmvE61N65ozX53ek444i59DGN42JZGZJ1BUgdTR8GqXTPkSQCe6bAU",
  "key29": "5cpYhyz8P9xQJebEtWwpjBPbC4ZwRU2sBtKRGwdDgcXnAWn4SWL6BeYuWzb1cFfviXepFyRso6sJ5oVejLLK3SEh",
  "key30": "39AsMCQYRWuWcztqGd5Exn7cWRC3UmR84VgrysKvmvaghuig2X92drpabiTy6HJDUs9jeqgXxB1yLLvAD5nSmfWx",
  "key31": "5RysWnxZX5nVEBVJNsJk9ba15wBZxCFDX1UmKngu7XmJ4YBkXjpDR233hMAm9jiWP76dBFZPepawrakZwF3QoDEs",
  "key32": "5pDA1FKcyUKKaLauiHcMkmPcd1Hgw2r8S5qELt4uqXJGF8ZrWiCoyw9hNCykkkopDPqEb3gqUWLQ4PC1rNEiA2zZ"
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
