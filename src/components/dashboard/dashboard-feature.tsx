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
    "3Vqkg45GnFTsgipGQkM575LRyDyLM521TAPpeuW3VgzqxQB85B9sGSZcPSMRKVyD9htsJsSYnp5i93wJc2VSq745"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f78shFoCJn3qGwhGMFdKLpGntkNkH7Bwfhe7MDN3AjMV1YZ348ffEdyk23obcmRgprV3iwMqRGm9vwF3af4Kp3v",
  "key1": "5nEpqMbVyScL748ktaYeTZo659v7J9ZDk5Ly4Ns373iZRzem4S7f8UVid8xewcR861Rr26vJ1owdWbtHGa777FtL",
  "key2": "5rvNRLbS6oHprQ1YxcNYZZf4qApZNVYfcC1sWf8fvbgzkaXaJdDgnMTUpScudRsgW37zw3RLLnDZVGN2QipApGaU",
  "key3": "3QncgmabFCjH7wffSU3WRam73orCWj1HwSQgSEQ3S4Mmmovh284gVrzybEkBupdem51cTkCkz4A4h62bcMbdqTL7",
  "key4": "6325bg1nFQi4jJTdbGCqoa6BYmqLmdoyEjKVK2qsXjNeU2ZuDqFp6NmTAmGhKwKUZtdtQrE9xnqWNqKVyjGiNwt1",
  "key5": "4D3UtsRyavmDGoziAbqs3768FAEpkrJU8TibwUuBeY51i8MxDUzQr8nvrXqQoy2AsAn9BpUcmhVxZg1JeHshezxg",
  "key6": "5VAD14m2ftooY1jJz8xPMU1NLhGdWfSu95g6AnjtUj7q12Qx4Xow55vmZFvZctcVvWUTkXuzubgSKtGfpv98gvRZ",
  "key7": "42gHSvWN7BEWsvVYaAfHF16WmeHFsvK1eN57Na8oRxZkFTUTyatMhBW6Znt7yHKqjgFqK1bXuG33htNtrY7hWTo5",
  "key8": "5cXCgF7gqKn96SjFhJJ9uGLLTG86Faq8E3bXrSkKYs8YpzeB2dtU6Fi8CChSihFABjRvftj3SKmLjb81Kbh5Sg6J",
  "key9": "3wHcXoT1jnkHuX5XJramRRCsVJ91cpVzCKFsHAQSxT3weLp3q2ifb15NnkMxXaKfarxj79tWajnnFgC9e5ooQ6GS",
  "key10": "33qfsAxHoVwggLFWtwYZcz5w7m8kqQbbeQG7GGrWicV72bookwyivhNPmWfVqhnGkVUbJdkiBSjBFcbkUKzyydQV",
  "key11": "48CyQ111Gs3ahMdtQhN7SL2gP2qs973Q2djxjvNmLY8FKhDGmjwkLjeW59Q19qhRsBBVgv83WJrqKw7XN1Wtwiod",
  "key12": "39k6v2JgzK5SZQ5X9ew8rhU3jJmr9MEoffgQivfC7Udu4tdkf4JfitQSn1DanaFWt7X9vPkH4yxqMn5wGyAvpkPV",
  "key13": "eawXHw18S7TMxM3sBXFLeZjHzSQkPDpo2oqdxowKQyLaXBGjaLSyt2e4n9Cjz6jb7echjcXAGVgCkcrumznMFSA",
  "key14": "2ipmQek2zSfj5divMBWiEiZn77FtoVJvLJzSXYzWFRY7h1YkGXx9B1jTaQUFXYEyungo59wejjHFGVQb59wbefA",
  "key15": "3s9inb11pF6gQHhrs6viqqRZ9Mf69CDzAJizbg19eYuJVDMtyBjNudedGwmNuGH49y4n26aZwEpatE1zrHV6sVk5",
  "key16": "53Lid8sS74KwE4Z9tfKUuVXomiCZiNyUbvirAy4AywNgH7JtkQi4iZsncknA1rjxnqENU9scaMWe61XGSAysQMcD",
  "key17": "4DEYxmEs2U5mSgiWSe8d7DZpvK1xQiqkRbuNv41J6f8YPnTS9o1f5HFmfUXvZrQ2np55AxCdyz5amp7RwfDmTVSe",
  "key18": "3txorPtmdi5dz2giFPStZYNUohqvpcQwMrkk7eQSZLN4umqzAJr8j85S6299QhJzs4RH678irfzK2tyBpkYNEjLA",
  "key19": "4ifnmGLX44Gx3aafUxNCKQ7mkyxhGjebUJhsLpttWNPUajZFP6BXgLQv1aagiHLGezNiVQLNxCGm26wNaPPFezZS",
  "key20": "2gL2YTQYSPQ3AV94sbrB7kPmNLKQsDrHQRja748ZrASPXahL1yYLyUx4vYFXWbCqtcJ84dunyZjX76L4DiZ8Bjhc",
  "key21": "5u2WqXJ3YLbpBtG6SnajMyp9ALFeUFSk9zvoTX9aGXGMJUCx1XKLmLk7bra1ubMVfmZinJDUfeSM1vy2QbqipjbU",
  "key22": "2mnKdzuuodABcNqwYhQW11Q6xParS7LMwTjVJQgqfVa8L3bEA3nGXqJFQgoJrfrKCktiyJXq97cwYZPZiu9vuBKm",
  "key23": "XYUmHuNiv21MGxXvBMnzjwvRGdV5dEdZtqKt737USUrWDdChN1KHxrP7tg8j5JJFWVZKnYLrvZyjKY7T4sbG5Lc",
  "key24": "34jDNZXXbkpw3HcyFE6Nv1rjf1MSyN7dmYbgWfqo95VKraqasekrV5Gw8qkUAYZfHivRdLo1zCAmFPF1ufbpERqr",
  "key25": "3pwKUkj27QE47fBsdA4FWYGBzTKpMsTFJAaonUVo47utKh2Rhh6ykEvKBERbRH8ShC69g6ruhMdSfxb8KcD9bt77",
  "key26": "2twkBXNZp1urezoX7sTDRu4Ex1Q9cH8JckxkVXT88BCzdNE5spZhSpuWVpw3osbCYn5ctTqLusmx5okttSxHJxqE",
  "key27": "2h37mXcQ1NvvNuecirMRNq91Cisf15fKEHxJ7sTMcdaMW9i9PioT9Tqxx8HURGDwVj1K854NzqQicfzEqdBv2NwY",
  "key28": "2Cqac5BfbPCkvCgkzjTkXVsJ7fbXg6k4dpVRASUv9e6wVMcqdtXLysebdK3aXAbUTzmvKQdBg23s2PPXdmCbtDrW",
  "key29": "2Z6FWTh7bAawRkzUzyEwhDkT2aMp6dymhfHtiHKE2SYBNXVFfzvmawMWdgpu1Lw5wE8coKVpNd6xsXnnjP5d89k",
  "key30": "2eqDeZyib3ndUy81n3vdLn5sshJRzM3HHqQzw46sgkyAjcSdxyjB5AWiWYbrxAMM24n7maSest6wAAVLFdRvucS5",
  "key31": "ZRDTgjwPh9iSkpHZovDQB3pDmEHExt6GtrAEWbCvhzj1AEYeUCSUbZRTu8xkh6p4CHRtYxVNz2GuLEcCuzFz2CC",
  "key32": "3q1d4XwhXVH4yU9jMkfmoMA9MBgb6jkRVH3nxwuCvwWp6EaFYBn1ddueCvMXEy6u9QA99z7fGp32BwBuR6UquPhu",
  "key33": "2bEUnN7Cs2NWm1arQ8g95TvvrweEsHAkVPvoPWcexCxKrNzvy3VpeDxtdLS8H16C2ewmKztTS11VzqjjAVNoAz3v",
  "key34": "2WEqz2LF2f8xgpWPnqQWv3NR2sJx3zKHrooRP9wXNoX4i9fBQ4A3W6xrpeWiYu489PUMJ7xfVavKKq3z73TEvTf9"
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
