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
    "24gi6CJyDqPouKNtQhoAaqb3fCWLVYfjy1qDcTvtr6WEGEVjso6bG2JcYbUijigUybjGK2BUMpyCzkFL4SDLBYe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kqw6KZQ7q1zqtVhxCLrRe3GPEvp15rXU3WsF5ayggcoM9XxkYib2eVBjeqx98xEEEqNqtRA9ZTAHwRMY6HJ415p",
  "key1": "98fxLCBALyKc1q5a5pBRvXagZnTchjiFb5GKwX2ey98xerESkXghpc96WWrBihwJWRN8coefhdJ9Lzk8Gc1bw7Q",
  "key2": "4ZcJgJxL6S2aUgi8XLy7K1p3mLTRGrqaPEU27G6HtBPkH2vZb1g9N4uDGbMKD8JNAeYWUX4GotFxKaYLCeyiTYp",
  "key3": "5xDTcneEzLzjtLGC65MuXcAC2xU6x3sMVAexe4YqWKWEVPx4BfQVBATkBJYHXzkMpCnzkRSV3sydndnsTDZbGYek",
  "key4": "4nM1w5mzaJrAFkhy2aHuzCUu1rj69FG5qZhnGRStYYaFEuidUksDCKPWY7LwQsxcHPci67oMazFQVbieiRxN21Ge",
  "key5": "5YHNJPgiBDKS24i9paWmwiQNPcX3n6rEQMEwXK8AG8NGNPzSNXjDYskdMQ4ki3zoCi2mioDotMUBQpqtURywqXBz",
  "key6": "66UaTFmYoDfm5qmPeRkAbwESdWzXVLXUgRokj9hQr7GccnuqUP7sTxFabqHsufvWPHuikqxdGdC8nFv3di4n4UgA",
  "key7": "3NVh7z67Lm6mdxQeti8bj17tTLxQQNxUQRuJ4qh23ghGfYRXeYw2J4WjRCYFHFUQWtb3ywVgbeqYJaSzh2XjijJJ",
  "key8": "2ziU99dsaDCZhoijpnHkzmT2QGQY8HG5LRBf9q4bHqFVTYEPJfcaWLbg1SCknHG5uDxpM8XsjbEXKsNR7fu2Wm3k",
  "key9": "2cxaqqjnD4KEAitvQcTeMvb4zMeoxTvdF42Zdrjhuobqv7JiET1r2FjUSwvPrQgrG9dXjZmFEBJvys2XfBqRSgPq",
  "key10": "3oPH5dyFLJxr6ejAcweACjvJQbiPWQ7ght71oMWNaK5TELBAjQPwpyKUKiDFnvpqFVd77BReyTjTv9MroNVZtY75",
  "key11": "5X6vod1H69GVAUi72RueJJnXPLZ8owiVWqi7A1gFDoRoSmCnEHXQRMNPSabDvebVXi19mEM6kfUyHf9ckTUwsmWm",
  "key12": "397vF8wVVKzgMK7nMjzKtVuhBWcPC3Vf64HmeBa2NWgQfZLWUG1w8JqaWs1Xxc2L3Qpk8kcsgTrsL1uiGiXGMfB5",
  "key13": "XjMGCMgXbnkCTgFE2522GZh9BFwHfshFudK4Lf11fLCdYwV21zm8mQqMavkZAj8wLX32vCJLPFNGtZ33T5Dmz2f",
  "key14": "4VqWJsyQVkzJZKkz6k3UELVfGaS4ziWcKLGoWoavTwyLBzvdYVje8S1mY4uqKBsWXdS9h7GRqNbALbtoUY3Ao4pM",
  "key15": "67QkTWS4c4dqTSjoUYd8DHK5XzscnUVPKw5neY8XPJjQrSTEiZSMm7nLv7iy512UULY66knC3j2PnUdmmNUYFiJo",
  "key16": "4VFjjwuXQVS95c5gMtVXZ89b1N1PGErAydeQdw5mgvJd78vZLVWfKeaaawaeg1v4sxUHHU51hTNq2EmmSH2oemGj",
  "key17": "4w2UAeWgWqp3L9q1kLbxa4MUnkeLKEUQh84UtjYABbG9o4dUNnP8dFHYwbpJ3JYeYZkfS1cvs5zwWWyEWUmcfXhG",
  "key18": "23ycZZByjLUL6AQdaESrHL2bUsvuBJvUhsVbACJNGxriVY3sZuLULxQ3JoeMZaXjvqYwKfNkHJUDnvHr9nEJZm9P",
  "key19": "5UGZRKmCLJVcYXuQYwU4rP7DqUJSVu2g815GJaADVuR7Gk2WdsFjNygcbe6SVPJ5e9vXUmTFrfKwqaRqDis4uZur",
  "key20": "o6GW4uQmc6qfnBJ3C4HEUCAr4UHrFaVXfHTC4Kjif3fN6GVdo3RRHMsJb3Zv9DZ9NkaHt7jx6KiACcURdd9Kh65",
  "key21": "5zZ4TVfXYXnF9JMBgSPAYhtE24wvknVinyvoSxMXSdLT4jp4NHNszMQBi743KFS6XR6HhNwsWfeNCcMPccHY96X",
  "key22": "22v2jgFkhJ93iozXdX6W1EdhRujV5Rxt6vpqoRzuqz3gL3sv49HG7dacaCaWG9j957ibWhwSeKvJykiLvMsgGhNM",
  "key23": "EuRzEdeNCCFgWjAzbsxx4vty1av7Gir6sSJs4ACR6zSBEMaMnJHqTmXrMJoTRovmt546gAUgzqpPdw1mnmBpqAX",
  "key24": "hhquqapPJ3Fae98iVv9mLuqh6U4RAX6TvpNCMfDVZHVZtP1Rznyc1xEvmR99jvMgmYK3Q79cRZGfuphqEPc4fpj",
  "key25": "2f3RHosB9Sc72bSGvqBg7ce7TEAsvGPtp4nVELywBFHQmm2Hurwi7hc9Po2aZV4DNpS5Yo5iMDvPwGEvZqQTnvZn",
  "key26": "Tcz7YFy7PVhHuqotUT5mNJ4niHNLkhdQ1VjCiWwDFqRaPi83b48TT7xN34EHTd9WEdfa2Jpf3gajHkb27QTDuFC",
  "key27": "3AobFCTp2McP9Z7Wn5BBoDCmfCQmBnpvdVx5TsbP6yrtRAv9vP6MBpJZbNFMdhvxffHxNMtP6FiW9oVdQfjez2N8",
  "key28": "43cc5zNjaD9QkGN4cGoNu39fhq5CrtS2hxJPHdUXfWim1t7jxSEAkmpe5SDkeehbeN5eH4a2VfLGwSxX4fHD6bxC",
  "key29": "5EMvCVhzadS9ZvafhsiTEHobgAR8LUoZdNuLSNzUzmfqa5BdPmiH7vS55N2iYoyMHmY77keUStrxQNCmJmbHQbGn",
  "key30": "5J5CoExMkmYuWusfNMrH4bcQus2Smobe8RbxYXTk2WqLPCdCM8w3F48Zym6PTwYk9hHcXie9k7LEwzasH5pThZho",
  "key31": "w8rfd1SR7yczNXv997MBmEv9CUAK3RZsBoxf8QU5zeV5D21WLRDSKji52u64nsCkj54hNhdKzrJ5LKyopjearHo",
  "key32": "2iEDinc2N7bxATpokrymLx49PwN8LYae7MtTQbRQDXeSJRyAgXdkGS5vcBRQKVi63tTwbQ8AuU7WQV3ZordDwTUC",
  "key33": "5SL2gmtvji53eF5JeWXaqAHfoQSgcC7HMhYvisVVJoqRvAFqVahCYfeK7Dk1jMowRqXTHCWbnHQTuUECgSQCdm3a",
  "key34": "53A3zPKipnpYCeChfeHtKzQiMKJ1hdTY6FbyppR4ios2KwQBtC6w44DC6VNR9diyaD62nqAVrxBme8a8wyAo2x2H",
  "key35": "2XMd7SnEdR1v5bkHkphnjbk6z49DJmnDaKgPBTNf2RsYZpcGPjmn1qcXP5GCe4gvxQpNpHD5eN2EaepcstKqhpw4",
  "key36": "4BNqYTZaTiKU542WrMsqfh3ZrFsQC7PtTAD7Q7tikE3xe9GEwKGfLEE7k7UtLm4LhsyAyGUwio9sB2arYCoYUddE",
  "key37": "6KQKtqbM9hfn5ucaj76tz39nFNhM841FvgNaaYE4iGWYq2k3EpMbNeg9usZRd1u7NJGt2Vom7bzFWtYu9s8KDAY",
  "key38": "3TeVJbCvanutr655V4g89GDBxY7AtArTPEqnj9mnyeyJveWWbtZrHrF3YN9kvLZtLVCpvcdVeoKR7fM6Cq2fz5Y3",
  "key39": "2ucNtFaCBymZW7s6SqPdvpt8p4B75E4RMzRnxx7YXYupg752KuUDYDLeuPXmJzGqPFgtGR3g3MMczSnGQQVEWwrg",
  "key40": "2GjPe8iSoUnWvKHmagL2pfuSrYfjvDiKFR2Nm3kySxkPuBagkmS6bDiuz7WhH6pwZXe4HCgwWQPxtaYtVWGY9okJ"
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
