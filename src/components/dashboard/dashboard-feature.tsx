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
    "RMWVp6GxxkRKcramJMwuJLvx6UcqaoB3NPwDmoH8VmLiidJzxDgz3dhnGXwfCToyQrwq1bNkNqajb9E6xjdhJYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w6ZewLi85fp66Z2Lwte3vHYcRiQZMrhR1XKosxJ8BFapvPaCzDAmxSSYNEgF6X9442m6qsLxMiF91mkFMpbjpPB",
  "key1": "4DfGMJzTzMzLbb82eNWqcqfKYwD7m1WgQmU5mm2Hi6UjmrtGWwsym8QYDJFn1dFqVPfmYiCAJNFGfQoa2HFbKbMw",
  "key2": "3tg5Kqtf5xWPLqpzJfqc2NmCQwzbEMC22HAJdDKeha9cyijZtT1UhKaFZrYZ1KwHWpfaDHJUPbue4BJVRoLMH6uL",
  "key3": "3NfadKkj4hFVQtgayAuuqvuLXPE1pJ8VbjkVPTZRnN86Q6w11ocdFxT63BVMaDxsP4tA8oJ9bcfu1YMPAxGHQN4M",
  "key4": "2oxYjczkvwDcJMVMVp9evqHMZX9aAMnHHxQjCYA58xYY7WdnzywSYCC5xyFZibKjrZbDw95njRXrNcmbL18eDfxn",
  "key5": "FkvNQ9vcFyMNAzZyQMgBFzPKcYCtHseMRkU8uDTtMv7o8GuakSZPiCCP6B88TsvEJUM4vwVg38LtGuqb6vPAXRg",
  "key6": "aPxtZkUkomKS5YPfQzZK7ndzgKZ884iVKzDC2hhoJ41yRbxbhDByYRxK31r8QnNgHDjLpXseRtgCYm9MeFu9vfW",
  "key7": "4ExT2QGoYQwGBVUyabyyYsvMhNfxe8tBtc7JzHezaKGYg5dKQjEJ6NGKPNTFg5tVphpESddbktdijHNP4enDAzH4",
  "key8": "2rkjFKXA69efs11sSu6SPmnerkWZdrp741VoJAm9MzCvVQ2ec4vs6CnL294mwZtximJJR6jE3q8RJMD1X8T78V9e",
  "key9": "5h88Dz9ZdgyKr9fSx1cS3LrPpiQGQi2odhGNJraXUAWUD6jY5jqca2N2ZyKRJLohNDDp17Cftwpuk6LCq6At6gM4",
  "key10": "37AN3jmcT7tHNbG1Dg99BMYvCp8hcSAF2X3MV4PVi5fSFFuJ4tdJqUXHzbinvqigKDwDpnKDbmkbiRg6UVTFpcf5",
  "key11": "3GsvLWfPrPLRQAphPvEvKdoR8V6DiEXjTU5i4ZX9kfPXLnKbz2UbXuZ6SNcvnjNwCH4UN4av9SAGuGRFuGCX9gsp",
  "key12": "4qSw3htrUm9Qf36RJLRk3bS525VxBcxFaoDZHTSZcxddgijLtC4xFSxmgqK5AqpnoKbFbYoCcoouUHy7WmzbSG38",
  "key13": "5kn21v2CcrbbFNnzwprGgavmmZEkEtw6teuSLWbdj2Wb1M9mr6acn7vystqLD8PsoRFdGHQZBZnrMv9faSDQcwgG",
  "key14": "2HdDAerKSvW7PWxokgi553CVCMGwVJzQHxvE65RwfpVYvfDWAaffQDDENXH5FqcXfwzcSfKNrknm8NCA8wVsVMYn",
  "key15": "3vkXnwchyyyg3srtTvKhb4ZDa8jrAYoCGD9nTzCAW7ku6ZtnVwhi7HqMZoU9zFsSD14qEj7DkfT3qPzGepWzJtXf",
  "key16": "2uDfzYiZJVLBMUxcA6rMQnuFE89ERbAxMC7hhWq3kfyTtzVr1z3qBthqjtEmKv51aHzimqvwQydxhx93H78M57iF",
  "key17": "4ZAzQ1iaCZpYuuqiGbS3Cv6o2xtQr9cJHanLAG3YXTygLmZe1e6VL76XEbSrrrTh3j3QkybMhtwcupBekqMpyhAM",
  "key18": "2Cadpi8H8HixBCnKFAkZVifxF2A32aHSNgTFw8byVqyY6FQdXcjQYzANskW9erkWWJGCQYNVshyi7Bjq7XPVSQdH",
  "key19": "3xg5QyYjU76EqNTshZ4kAJkJFBHPFnx7uhoVfn9pGgKd3oxmsTaem15T82WS7LrXa34vYAVGaQUtujd9odo88zni",
  "key20": "2zVhxhwWTSmaRjAxM5nnrXnKt58RpLvMrZAoiYCy9iggQwYGgm8fpvGxvR7rp2cUzPJMYvZ51wifsLKfhKStjvqS",
  "key21": "21d3AqcvFA39qgNdFH6AhZSxoxpkF78eZCotPctARzN6APKAueDZBVSo5kQhJJxTMfbZ47HeXQAxvBkmq467wY6C",
  "key22": "3p8AHZGkMjZW8hJv5RxHdnNdc66Q4GdHEqTQk93wdR1YGHfy7FKsCKsdXn8gUAJrRLgagyukaWhKSKKoE73YPRKR",
  "key23": "34KhD2b86rea8z2m7E46FeyUQXXUZEXzdNHNX9oiHtNqCwoLWs41fD8xzewy7BqS1mkUjMmnoZhnSSRxmW4EuM9A",
  "key24": "2MKrVtc2VULtnFXgbZsctUJ7KBUb5NwgE7jkrGct3UxjavEnQak3Z6uRft2ahXHChWHPE3HreMe2YEnG3LFrNhEi",
  "key25": "3AMMn55H8PQLnUcZCw21YbxCh4paDHudNPZqdkJSFHCbb12aptYRFfCi2mgdWu9t6cQDrH2tMtDcvvWzLs2Dampb",
  "key26": "2ugZHi5XEeHmkKwR1oRHEij185eHjV4YjpY8S5GtxqxYV4qiRMftqmrcuqGq7p2n2ZVWoQaBipaMdQYeHm5HnrHg",
  "key27": "4GoSwLQmuDKRVm9cut8xDQfyY5ZQcmxn6f5DkTGKF6F6PbDTkKepEP62qULyP7rqfm4ueBBRx17YMg8vxzgWRjhM",
  "key28": "2NNvWS5gcZsFrytfTt5mGZrzsXp1hUKVxTjsDA1Hbvb5Hc8JpJEUbFYu9p7P2PB5SKmmF6SAn8RVRvX7xGs3rXcj",
  "key29": "5dNWVREKGyXQ8c7ecwanXfF5o3d5p61pLya8mHp5iXHHjg3eaTbRw1MzwPNHK5EoDzQJGk5KBEKYSDfWv1PRymEe",
  "key30": "4yBLzivw1VxDcR8QTk1EgMSGdHfvG9kjfqXrV8Xrgz8Gt6uqf5s5HH6zvFpEY2wWZg7bY5AEJeQjEgFbbLHKcByg",
  "key31": "fE5fdGEi7xyyQn3BNHfm5E9piodQ83u5JBxpZv6BfkXFHZtY5wuVRYSV22bxPPkDLbMvChgU5Rhr7jcNpEAboFP",
  "key32": "Y9JYS8zoKwyewX62CsB1FerJZSa7wbkumVCUyP9LxZDzH43WXq87GVM17irjg3Gp8BC3nR7tzbRFZBSN3YYK6WZ",
  "key33": "2FgwZS4SvFEEPDsQjcjpC473uqR8Xom2GC7mpahVQBp8AjtpKTMNRbeDuUi7vsRbtEetUGUoHpSaHLbrGmtd1oAB",
  "key34": "iNociRJjGyq74VMxHoXxQY9JC22GJwFHWnYxd3oMARAN8xpYwnz4qrDDGvHnqRQ58Uq79K71ZhfT3Xke4nNG1Kz",
  "key35": "5mx2fyBtGVwZZtXpFAVyAs6UCEhwQsmVMibyEpwCyAuPn2L7XcTgVoJDW3Nm3RG33V26BXRAevwnBacjeqKyiJvw",
  "key36": "2ycwhgfw2xMyTdSbqGb4kLp9bruhdViMLP4rzymPBkS4AmdhrhzMYhWo1yGsV4YC6vCUTavRaUJibLcZ2FY9r8Pb",
  "key37": "52CYSV5SEeACdwGYV4JzLX5h7xCnytsCU6c1UZ1FQMZ23xuMrCxThNUExSye7C1wStNHvQeioRgGbDnZHm1vVk1X",
  "key38": "29M4oheHnXhgGaw1uoJ3vHBtrbFMSAePRPrMd7D9bwarLhY2JfdMdzov9R8RfqK5fTBhbKUuvusuo5DXw4bt63k8"
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
