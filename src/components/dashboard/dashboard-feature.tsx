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
    "55FZJbDsX8zVQgPRZkveEQwx8EJpNRbbvTCdQouQTku2Uu32LFDjJLz3cAusmrchpEEdRRx9UuQQvVTNRKALEyZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tBmU2uhDyemn8wqHMXuYLoaKyRagRErF5GoDfJWYpe1T7euXfbK1ztGbpwqAhh8PcQMSGCf7H7fxY1UmqKE4feD",
  "key1": "QGV1fT1iWBK8PdAFK2TdSG25kq7V2tQyr3DrELJDWfFRmHwZo7HKpVToqXuV4YemBCR5uADoQGQgU7EbPSA58HG",
  "key2": "5gizYpA1dsVurRV29ukMeECEw5qRAraDc97MWGeeXxGw9ztWFie6rnTQXUxTTD3vRSx2bGbbGfCxAkdBgkCKdTNd",
  "key3": "5aSZjQPnHQyKyJKqNoSkDL9AniJNnwS8rwkYARLWqguxjfaGcjDGHA6G7AonzTLL2KxDY4nMc69tcrUP633TG85w",
  "key4": "3sRjWH7fg562QDaL8LU2ietT4wknSe1Gwbwme6tvwPqA4zW6xnFHHYobCi9BzhEECoZxuMqA2r4bZB3ywe9fMSMy",
  "key5": "3tTUHohLHD3kojAkrnv392LKs3vM6HAyUStvKnmaqWxZjh4Bdcd8esSMDWhL3n7Do2TQNfC9kauwjNiuEW5XKsAY",
  "key6": "5CKD3tQ9rYD52HkUQ8zkb2sHjQLB8p6fyQfaayNor5whinR9MYpbwrME5dHh9iNoNFSpwMxTUw7KB1Gxf56qYGyq",
  "key7": "38xaronJ2Q7XUmu9RKtmq4VyTjGfLpCddwQ2qHnzgZMKRWqyyAZQ42p4vbwXFGqA1koap3rabMYBnvW8vr7iy4SV",
  "key8": "4YzL3qXnt1UihmDq7ZCzHdRT8ccUhaho5FWUAXALebdQAtuSPyNcPXdxEXYfGmSR57cu51ihUyFjLaBEp7aW6kmh",
  "key9": "3bhb4TikCNTT1JLVr7edqVjPxsfHQ4WeL1ZDzPsEPpPx5w68ieBNdUsGPHH19VH9snxHAF6hzdmmGinnWdcF3d6r",
  "key10": "5qGtjHhHm5ZLjSFWVE2XBy6c1JujtMLjT4K1vdqVKvS4vRSs3B9zUHZ2Po8cnanXg9PP7N2s9wxjit3QdpT1etbL",
  "key11": "4RQWEw23y6hCDodUgt8kSTwRZ1e3n8xYsHXA4oMNLHBtG6n9ZKn1oKqf8SjKdHxjrFwPgGCyYAuBXDs294MEaBpW",
  "key12": "3VeSqrzzgQdcoE2LxuFokbwbSpNnNK98ovE6NaDUvN23jUu5mrMj1K2P1n1MnWuDqoeZDeNEfGirzM1Kv1FRZ3Ks",
  "key13": "5jXV64YQL67PEhoZDUpxrF7MGCMugqSFfuwpCdNiMPVfYVYWseQw4QjtsW6CG13DzUJfpb4w3CzJr2HY3ZjFFiPp",
  "key14": "5pj8tyrzQMAFZs64C9NysgEz3yCjgfmt7XJiUGyqwA2a6DV1MGAkMTsDsjASG2yfcSJ7tubpCJgxQTzg3ZPzKBdu",
  "key15": "UPYJ8MCGnfy1jaKYpxuSt3Y1DCPFD2sdZRCXDrbaR1oZ7Pj9b4SkPkczGEbvqpoh3bx1PtGCRK4zPkhRnQGkW2Y",
  "key16": "i6pVRJXFijT5Pw9NtngHMwW22CpAmqqnhobUx1yTwPnBz67NTzoKQA2V85BSafGLxWthBFJj5wVHifpGnXMsp4m",
  "key17": "4AoSS6JgUz1nUUTNHKziYskekgxrfWgeykyxvJB6jcwMXXYgrjLJaVdFNViFYKAaARMQD2CVrbekFoJ2WofXc66b",
  "key18": "4zsyrFUitL6yAmWZNMB9z1NZY7SvgrGoXfyDNcSoC1jodajVxnpotTp9wnPYK46HreqKGYLDxhcA6bPPo6PpC6i5",
  "key19": "3h4BLGVyUz2pjjs65ynvZ44fNFkFeXbBgcHMr8rZiHMrTDLkgDy4Strj21tj3M3AKEYi6AAKEh8c7e2axhXb6KKz",
  "key20": "45aM13tf1jhvfTCE3xfSFGU2bnQxBjCH827ZzDhFTzv4VNXHFNNdnGWKSRpGQXAhtAxgKeZBuvUoRpAAncEMcdfC",
  "key21": "48DCPoRLi56UpPpn7SP3oWYV6hN4s5WSWxmrTkjoiJhJqAZ69QecLfUedFiccePMNPXawqcrKiev7azDyrkXGgRm",
  "key22": "4JNvTJEhDYNSYCP4L7hg9Ga9gsWxUaA8g4AFLdS5ZidGArj9HMB5JmbK9Z5zM5jZoH12Zo2CexygX81zRVe6iAxD",
  "key23": "3C9nZNcRUZJia59N3DEhz8Y4biUNZVBdHKxgVek3mtLhDkskwK8H69drABZhMpU5Gu1gZCM4M8mNrXz4vgPsbYdq",
  "key24": "5yPTWCAZSAY4LkvuJZ5N1KY7qERy9yAUyCN7VfSwWdyWihsdmv7tEQSFPZR2KNF6kFjek9X8sE9yobh2CqKSXVUn",
  "key25": "bjrua1bwS3U8vAwuA5mtM8mgkfVXUuFk8G8k1fnJrey7fepsZMFM1vA7aJBQwBPE7QfxhQbvkXvVumTTRBYoh4X",
  "key26": "3uob8TM4HqEcJQetUPWGrn5ehfRwatykAWdaopxKRbMtu7LwzzKL1hCBGv8x2bCeSkD2926syJakrCFqrNrWCueR",
  "key27": "5UcdUteYGT7JAchnXsWHcp8UsuUWBcy3KiBS9HEqgQGqaMRVLBt5JiNz1JFCgeNHnK2yLpGuTLbRgdr5A3GyxhHF",
  "key28": "2UTHAsiKgtQFpRrCzqnctAvMUoM4dvwE9GA5RcvuBwj9wGo3Xi7m2AtgvT7cXhpNweaWn38kt6K93UXgANZJifBF"
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
