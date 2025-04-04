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
    "5mMjadJr8yKsaN9FeKvRNQ8zoNpBhuMh1jg8wLucmAfHJoUreVytoSbvzaBKXfUwrbPbaq8eGgp5dNSwZRHM8TcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yvMKvhMcMTF4Ns4YyTFd3nmksCRfLemPj3b2FFKu3JDwcPeFc4fAaou85Z7k2Uyy8txEKkBrAmE1DSVY5FCqWX1",
  "key1": "59cX5fX4T8ZmT4iRTrTjWc48Cex3rQSDTB78y7Jq2wMudcRo64Vj2s7UpU8jzZjkyb1gAKDq4qfufZcDsSR6u9gy",
  "key2": "61LRTwuBRCsem5hUVWotJ9RpZwrbRw1rDQSvQUHu2me4RYYQiKqnnPwSMpLVu88vMbuJ4MLkeXzhJ5sC843NottW",
  "key3": "5R52Q4pduZmg93PvZ7J7XuA4tirdKaAEuJtZRdo4cqSfv2i2xUomNy3mZFBESTYvVm3eYJ2kihfN93xRgpH6ggFA",
  "key4": "3Y8EStDQA2qprCpeSSDrJKEzX8KMukKzETqTnQvsdCj3VnbWjfoRA1JiLKi1KegVhV9QUwRrARWUS6XHGeYTb6Wr",
  "key5": "46BbvZbdCrXvXa7sDjm9eRMC2NzqaueFmaR2HQXrPuYQb9siSzda91bwSWuFkH5dSkj4ipUngWsuaFAViGa84qQU",
  "key6": "4K2Bi3sx1TxizLipUh7hqxDFZX9KoeQaZqJmFndjDbYx3pR8FuSzMaSdFhKRnvQ8KMjRkKqvQYVhiMfhNLNiwCrD",
  "key7": "2iGxudH9RyH3D4U2Fesmz2a1Jt9YNiNKVpqnVz8adDndPouKGbmncWNoT3U15xa2rGa38gwJZagLphBoop7ssHH",
  "key8": "3KsG1VvT5WJaGsXiht63yUExWBqzGBYUjgpj8RaxEo1NjMgS1Exwf17A4zNEjaztUJ2hKVS4wBWSaaND9VZkzcin",
  "key9": "3zwrkwr6C7npnt4WfyDf8aXESzsssPBS4qCWkpCh9bdHBbMVwxfVQcWRfxjPxKpjgvyA2cRCP33JdM4BNVY94Vjq",
  "key10": "4RWynM4vmnvzSbG2KG9vGskjYT3Jjcq9fYxma6RgTTGtGEZG66fpCVDM3is5ukiPUC22kzNQpsBVJ4mwyhRyXD9S",
  "key11": "XK9GV8LRqUpF2rShkR9GvKJrgfG8n1o3W7Rgrjk2rdeBahHACArVWHWmQo4NYo3PP63rhjStcre5Bf4G8nBFQae",
  "key12": "2EMXDn8b4FwA52mCGtENenAKxoWVWnLgPcVUWscQHopmNGXPTFUKfEdCwfLW3oXMLmxyiefPJVKmBDvV3mNiqYrN",
  "key13": "xn2Fpk5PZ8mWiqG1VgHcJ2Ef8xHfr7qrUrykpGgraFyKSgx6vCQErqzhCG3eqA4PaAnDcFDKgz6GmEks47QbNcC",
  "key14": "2Rb25evvxU9dd4xkYLuU4uKdZk3a43hrBR4e8foMV2nAgnP4ZhitKbLg8cJSF2Dsh96TS62YS7bZBphYAPPLrcJr",
  "key15": "2g9MSXHUw8aCsMHRDvYd6nZ32dMBJwF9wHcaDMZztdS2LpaXB2akmicJW8M5gJQEAzMMavcpBassa6q71R8XHHeL",
  "key16": "8Lhy74hvkmuuggNCVRNXNkJGLQqGVTZHQwU8rPxKT9Dzcfqie7Q5nyk5tuQZ6VxrTwp4cW28h3FWhpep6qxuLwM",
  "key17": "3snGLfUrNvR7qUXCWQ2WtzbRG1YXoLfnnpKS382s7WSnBLvqWZbYgHTQLPxczbpGY8aYN8wBvwJv8SoB6b2EeYDb",
  "key18": "sL1BDK1h4eNoUt5LpYu1XMEbcqnKmKbVLE9fdDutHfUibjP4eGeTut3ev2ZPgYnysHDBtD2HjNG8QawCGd4qTZF",
  "key19": "SigQAnrPcg4KbR7EAq7Haso8bryqAntUDbc8gthbFaqxYAxGp1f8fsd13h2j8RieTNRuj72yQPGSjbErJXSDCzD",
  "key20": "T6TSEcGWn3hHbrTiaxESEJf5NSho33F54mMVSLrsbmRJwSF2xM2H2v8JXwHMV37EEWjwww5CSoo1c4mgm12tUXQ",
  "key21": "3WgYJGgLm5z36nQwBrht5RoBfjMYA9iEjgyZj1Mj5i6S49Qc4xmT5NE18tAzk26Cw7zJgkWR5frRKVy2N91sTEoW",
  "key22": "2wi2LdyiDniKNegbc3jqBWLUY4Xw3ede3LfXfHw5q4BUhEV7XBVBR4KpcLqhhu6wcUCtk9vqSPuv6rUHZG3FC5BS",
  "key23": "2saZGPfypU15YUCuxKFXLyj1exnRUYsj8m5T1iVGddedm43E5ZL2nX6U9ZDx9nsKKLaVGnUFWEguaJ3dEarB65xQ",
  "key24": "WKMpkWQ39v8nbUvZnrzYTMofom8Y4oAo2hPM1moshnF7HnRiTpixdtYjByKnWyzEf32LoEvRC79sNv5ybfTM3cX",
  "key25": "3tHyGCox6PexeRF7m6zNen3biWLBUb8GBPvmdgzt4JN3uXEkEHP33vWzK6bUUG7huQhwwEVVBPfqaGVThZpzVCzQ",
  "key26": "2scZZrRbxPPJ3ZwhviLomaYMzyLb7ExGG6is9Q114JHCdAYnMfSCHtQbEvvW8piR49LrVX67YUa2T9x3CdtymtFH",
  "key27": "5jXEJiiQF3AMv9sfQbJ8uTdUqMf8XB3oTYNtP9cdpeZag8okaPzatcDoP7HJHJvNa2166GzdxPAwA6e8CqCEKUGU",
  "key28": "2GFCUgCK2sSEcnne62MigqZXNmZ8cYzNUoKJsBC57w6kGpJuPZ2KvesHWqRSbgTjTtkMChGEhatWhXRhy5Wruw7T",
  "key29": "3MQa4RacTCPLRqx9QnxUbTC8RVnXqRfHrBv2W5yZdgtcu48BpTfQSprGs1HMSuUNMqGoEJdrpPxUE8gVxGwNjsry",
  "key30": "5cUyCCBDVVmYAXmGTK444RVnw3TKM7nrgy2fPwTQ7CJQQ4mpY15KCcHb8diLrhd9N4EmMsyNgkk1XXkS2DWf1ZBc",
  "key31": "2ginHNjrgferq1UCu3WuVieDg9ZagQ2mmw7RFUFdpkP3pJRQUyjWVRLWYQaFYLKy9Fj3qDMsPTpnwNLT9xzbJojD",
  "key32": "2gcdL2JXXpNhErfztNMapEDVs1c5Q5ZC63Bd4x2EdNxgRYpe9cZN3yHpP3ZA9kbMSQomoe9a7Q13GY3zQQacUn5U",
  "key33": "4KfbnooK4p4p2P9io5FFvnFYLAaTVPrrYjXqNUxZdEvU9vvnFXwK9wTYQXX7yPWo2VLuPeBwFGf6B7zKYF3q6MV4",
  "key34": "65vRtiwoVu7huuxPMTCt9kzTDWFjFcwHhV2X2G3UDQ6A1DodynPWGquJVz5K7arRgudjK9DU1UKV9H7kdJuun4GK",
  "key35": "Fhd9Cho13RqgxfAjkTsmWPtfyWoBvMByFq9KnYyMrAQRmfQs2qEhkB8pjbdCUCHpcqid4LPTagPM8yUP2qrdTxN",
  "key36": "y6o2hUXTGyrthVKhnpyiyesir7DFGwyT2LUe2A9yHjmNQAfTm14HMSprGdypDFFZJ89be6fPVrLTQahDAafaGUu",
  "key37": "3ZfaQk8d3q9NvQEhToQv8uVnUpuXMFgYcchcmkzoFuzEhgkmcm6omtvfqSmwMSrhzndAzaduuuTdEBVGSkhHiYm4",
  "key38": "5HNXL1RQXZCGMLouFJDbf8UwmmYwoEa2Dq9FxNoJecBYAGuqkvi2L6UuEEJG7Mk14Dzhu4LCvrpauxW6VkecbaHK",
  "key39": "x264mQ9jWErRStqDNEA7uHDdCDSqMxK8P39njvj2rgffbKFgsZBvm7PEHiZkD7o7gCS7cPSthLvS6SzXvfkhZBJ",
  "key40": "4heX9P4jeeLwfzCc88Fu1f33E4xFCbWw5RHRmaeDDimo6kNTXEf7xXm4mhG5sj3zwcgrULvpycMX6Wwu4PcZbKoE",
  "key41": "3tht27tihGteKyttYi4hcGqvb2UKZTbyt1FXi4KeWkXNN44ogkYBXdHYt5fkj18BSFsrVE6nYBLQzBsUDVKehrTq",
  "key42": "3xoyQiuGqU3rNfjDCGH8EBq9hoTGyGhQ1VU1wdN6Hbp8ijXRXKTXzHWsPmAEqGULiB2yLNWf1jbBp6hhzZR5rDZp",
  "key43": "5tgcusj8gMmmaK2KxsFsHuySp5nJ2MLe41B9bZZorDBRGzVfPQZttzhiiRadFHsPCkbNVL3eSTfNQ9kC53qN4FBy",
  "key44": "22XtfY4LesFPDqD8aGXgT7hWA8Pq152f5fWkxFZZx2TTLyXruMhF4BiCyUCRrHUUUD2MgigdAzk32qxxd3HutTJd",
  "key45": "574ocwgGzfmoTeHAEjGQnZA3egXsuCQx69pqMQQfBA7USe4k8X6Z8tt1dozm3DHtjyTuYDXxhd7LoLvMqGSS9hiS",
  "key46": "57F1yuCfuyAojH3bvtWYy5Me9Dj4WLKSG2VAEvX3sYCqqKuDxtfdNeaKoxnzHGRUWLSECHCTKJMw2aEnL6g7MzL9",
  "key47": "4m4pmfSGQB3WufxRACyzP1Ky8ssqEXWNwd2nHFpfdUsycjJ6LVfou5V6T6DBHLcWQqxx8fesPAtNSqVuonCpCsQs",
  "key48": "2HDDqg89uE8aKPatt7AYxsj2S9B1Uz2TnoNSqvWzPWWpuqGLdXQxcSNWvPUJCPB4pRTWbdJhd8FVQaGUrs65TjLL",
  "key49": "zkLb82Er65K79eM1sbBgjJ9LgumF9TyJ8crKYQgUB1Za2kZeiYLZSSpzjCVmPDo4BRv7ZnGYJijh1hhNqfjLUgr"
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
