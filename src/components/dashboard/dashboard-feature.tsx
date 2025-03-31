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
    "5Qc7VTV547wBZKpC5S64rLmp3k63D1BaYfvzGENA855wFeTgYWS8eYmoDbCDBCyxSPGwXqYFoSiJMqTt52EZY4Zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a4fCx7prSMi2N4A2VtSZyCS5G9CMbnb5wYSKSqeevvCP86FUdC3XAF3SrPPDPesuwppbx5UYLm8GcxZY2cVEwKH",
  "key1": "4ckBc5xi21V5Yg6GNQfPz4JmZ9pvc4eBmG5ELMYNapYb1Nb8LrwTQDnW6oKbmRn5aswWsbkLWaSCNeRa9hTH5V3y",
  "key2": "4EQ2gZriJMjrtwbPkmmV1JtMTyPhLjMfpyDvAgLuo666dEiaWvyeYdEcgnN6rMBakUVNxhWEomEr8VkCY7heEXk1",
  "key3": "5AdWfGeHHXXVuDk4tAtLmNkCMTLoGv2FqAhytkTPF4v1VeP8pgyQqGjJNDPF2RTCtF6VtvLSHKbeB4KRLoYgDhZu",
  "key4": "4gBEPfbScKAKLrMkbZExJsTvDuAaZPWiVri3xDhgKWSvcWQGzsiz2Nhuf1f4BkMvbzc3pAznWUGvAakDi5nvcnBS",
  "key5": "4bJfMnS87XeqHK3G1snbnfYorRQKicNusipvRFQbPFk5X24UL1ctmCiaeztALbK2GJX1x7E7uRprUrPPRxbpeUBY",
  "key6": "4sharmNfJvQQbmWujwRST1brvQNjJa5YwzT4x4mWVfx3hRmrxDZWESFi38UqJ9cfMZKiZX7vis78sE8vwZzFuW8z",
  "key7": "2rMz6feTRNgctr5q4xvdPtNstGKZRyi9oimzvD6LrV9MZiPXX9VeFFWwSQYLdVeYrxDC7ZDCqh7armvjvXSLAEZp",
  "key8": "2zRnXinMMMoNEK3rhW3onk6WzYMqvjAmMVm6t2hkT5QecoPWmwKbsjnKyHJtCNojGvV7TkUp3XWY6onbNgBEc5Te",
  "key9": "273RXXLnQ2oM8TAGGSyKcWACAjPH6uxggaty32hSVejYJLqvptw2gF1P7Qcs4RghGVJA8prSRMFTZcSqEWmNEZ4H",
  "key10": "43Zzn3CAjTd39bPfG9moNos4J7THHuFLqNXvLRUzP1DajSbGYjKGur63t9XZJCVUvcW3qQrrU9Se3SKKv5pNLgFc",
  "key11": "2d6x8xNpZWfr5nvgF3cNGx3j1ih4J7WcC1hfaSX4hj3VcehmdwNMHvd98WbcBH4MsTwZ9gm4RMQdCF4vNV5Cvs4B",
  "key12": "ivW6jqXdXY2wgYNafw6RXYu5k9mXy5cex9s3wytmy1uzTZUWxDQLn7nBiRuNMBd9CttFfZgxqvv3fKUnzbo2anr",
  "key13": "4niwjuJiv6WJYSa962o7d7zhafKhN5N6zw69fxWNYb1AQtQaMGACCvyb5hKfGB3V4hnm8c7GDRLxRd2XYogkLnVr",
  "key14": "2H6382vW351EqBjVJDribc3jYUoDwHd7cqjxsTixG4yVMWmw7U7eA39f5DYEnh2qukLQGxfTrKNtjndvy3h7Nbtu",
  "key15": "3BDUt7km13xsPazLaWMFUCVPRoafVYrZDP3Db2i9YbNyTp7Ct8FxrfCeAs8vdBeM39E1exnENkAfMEbVZG3Ck6u8",
  "key16": "UYRnzmHFr66hXTVfV9s9qb1m2Wj27KKPxn3QZnZYpkyk3cWaCiTgXuW7hrxLhPGYr6mTCiQq9Zpg18gz8vYEUUx",
  "key17": "4Y4fYG1y571ma4Li4ccTH6skZSGYiDtQ3JbNUXKzkG1f1r3ggYb9Gag3W59F5Zn1YavgVkQfQCcZGwQ3n38E5Exs",
  "key18": "3gGE2W1ccSU7wiysGrdYTZCQeXSrrKqqyLiXjCtLvus4GcvaEVAr479xZK8zt2ciN4t1RKhTUaW3BywcoT36X3j8",
  "key19": "5ynukshfzz1yNjwuzQPdyrVDSBz65rLp2zjH58mwZzW4zQUyxM2UFmVtGhNKRu82zWD4cvtMLCfM8sDHWmz1cEh5",
  "key20": "ZNkv7kMRLzZ8Pkgio6Lbk76VG4A4P1DnLyPv4RoZ8KMs69FvNLdHXpR3Pwpg5tgBqwpgRFk1hfPg5GhrvYAjVCH",
  "key21": "4RTghUwEPZSmGAkBsXX5pmwbrWxdZyckaoGaXm78jSixAfWfVFzaVJE8sGk5gBPReKeCEHVW7NaZM5U77nvekXcQ",
  "key22": "pskEaESCanQNFs8MQAt2e6xzFdSQwA4rJSPwes4PgRwS2WF6KzCBRH5NF8YASFVpHs4XnBrCSTsmLX32y3DmFYJ",
  "key23": "3VvXZo96KeEyVVrs2FieEZFKBxAebDvuXhwKwH7oxvfo1DLuqxkDGB7dFp8JxkvxdSVATrKucfaiaFFwSRVog9jj",
  "key24": "4fXFV4Q5J2b7Yj5eevusRGLa9uLu6UehtYgMSQqHFTzGjN3P91kda5f8wGHAbwBrx7ZHGVCnMfF9a7faUVF4GGj5",
  "key25": "mnXi9kSgdT4RPqKaLHvnuz4uo8qrpZkGcMTN9gc6Z3hMdWzjNx124kxaJAxYokvnnyYG25urSyFnStEmNCKM4MZ",
  "key26": "64NzZZvka4s9y5Cg34gJ5pTheqNFdoBqSKjTDHPKbp2e8a1cq1acdJMML4vqnKBxcStCUjifrMQGrM4NsWi6F1kw",
  "key27": "2QZXxBbRLN1THP1nY9wqhhM8N4q4v27c2RvCQTCRa2B43h1vc62GcL8xEZYrK8WAa1zfjKwHi7D8DTqnXirW1gAY",
  "key28": "2wQYSz3yTkjoEsdf8AqyoYgpEZ6xNcpBpYazQiguKe2zePJuepC5Anq3Gm3xeSof4cdrox1VAm7pABxK5JgGSiXP",
  "key29": "5uLXDSv8vA4LqTEZUMwnyhHfdHVnc5YCjUiy4ubNW5UXmo3EN3vtoHCnGqMhJwh5N94PoDY7LEyG9nevngyjbmfH",
  "key30": "5WtL88yzJWqqWk9mZocDxuqghPhs9UskBMRN6GwAzmfYDNG93JhcKDVhdZ23PJfUnaWVzthoohmJVeuC4QkEJffc",
  "key31": "2SsmoWMbrkoKLrDLgoDmc83xgadRzDk6n9KdbLDwbEWpXtSgpopiETa2vKaD4rd6KSLFcp3yYg84gBEYnjJMypYH",
  "key32": "53Lnzp6aAmABhkE3YzaqqmkvWC31WbZhdYD2CPu3fGgi7M1sbwx8k47U22i4yJwmH3k1R859zHWSiVhEHpTW2d9a",
  "key33": "5UTr2WQhjdn1vMT5Y1pkUQwDzt3gwtSAZuELhS9jDVQfANTc9kFFqjZVrDsdTFA7VsdBGyaCi7Q4esE4QXZTUyTN",
  "key34": "Aw2DRCbw5hGDX33bqFWKNeSLEcJvzpzN6YFL8Vv7SZwQCH5xVzfZfPNeh8ZFzTia2pNVGyxpap4F3XmRGTr8xSb",
  "key35": "4JeZNqqGtjFbf3SF3uvhYKomcVviGEsphYHCHxKf7UV9XF9Sey3r5TZRGvWy3xkPu4S48S8SJgGT2iWsWZXc24X8",
  "key36": "4U1sw7RdjKgNZZ78nzTKSPWPPCJeVuiRwX7x6sFk9kRz8hdDpbWDGDeqWYtD5tuEpg7qAVbhqfJbfxV2uVRFV9YG",
  "key37": "3skuD79tvntzfVGPRYMJ7XojK6sgqzWEqQVvnDQLw4gdXH1ujJR6VKeY4oCmfKYZRctPteiZcWHDw56watTtVJw5",
  "key38": "5zsUTeMWyqQoEPE3ADoVrnUYnyXHmySVwkq5bmiXvU5UfDCQ3EHVhyJwx6Yj9FpPJBB32FozWvapDTfcLPqpaj2m",
  "key39": "61AMXPbqDExXzcuL5L3ix7FCPqsY1EbdZrrRoGAswYhkYmozS8q61H3WmPMRigmig2MuxYnCXVH8mN4zBvwaGqJS",
  "key40": "3Qp5bnqyTytFBWRcf6SGQ7KeLkQctEANxvVruQu1ANsEYMY247gqESqdDZnvUiTbo7uuDDfoVea4g54vhJZ5zhBA",
  "key41": "5tpLBJjaNFpeqVSiyEuS462beBKwhMGWDQi1rreG1Qt7cx8VHPppPUv2ii7R54tw6A92uEyt1cBXEo6cSKYn1Lsf",
  "key42": "wf35aRRKe56zE21JUDwnVP8fiL4a819sxhN3zsPUq8Ki8hETgp1zbgf1Co2M6Q4btXWNLk9EyKwDFL8KyZF3XnQ",
  "key43": "2HvhCK3yaSxGBSB6cgEiLAx1Dw8kC857hapTHn7Qyp2rJ2kjq8rcL8TkxUuCVJF5Wb71RwbvapwkPbRbddWk5QRo",
  "key44": "3nbkfqPbXnAmTwR1CkPCAkjqTFa37AuPRaspLrjv76Szm26QXtdUANNFTw1CXkofeuFCBMoeWihu9mUcNNedAK7D",
  "key45": "58uMydUEzCQKV9aRL75rv1J1v2iPpztVrreyd3Vug1Xb8WdamMNKfbZqw3LfXyJiUscSbaMAo3ww6dBjX8orLXdY",
  "key46": "uxRZso7kB37vqmTCpkivNyrphgWra7M1RmZCHyw33gYjk3gNtAwQp3GRJXtZUsC7jDFNd8oPTd2iQupiBCRucYZ",
  "key47": "36pL1qeekz5PgxQaAafjkVdUvpAxHyUigwUcq1GfZ8sxZhSu21VgGuwBwYNea15nbJ4369pq3aueGZkcB1kkNF2m"
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
