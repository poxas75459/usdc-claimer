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
    "3Z9dsfLtP2GCHDReHY6QASGcW7bPCeSAy5zLVgBBSGmrqw4Xs7XhvEWkxJQ3aYvcgvz9o98aP3EY9Taan8fozg4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NbM8YJQqMCQnPnFxut4fPzBcM5wHZ8u18XxzEpTMkhP7BGGT1QDZGTMRcjjMQxnafAbYoNp2K8hBufaiRnTNf9C",
  "key1": "2dqZ5w8gbfdTnu9VjyedryLmBFYZpfjUvrywbBu6U2M82xXeVTJ7yhrotjMGdfkeZFiB6ATfxG2sCEign91qPqJ6",
  "key2": "3ejX9TFxvrtv2DVHNLAaRL4qXNE9ezNTSJ2688cuzxzgF8dTGv4SJjQJhBYcdt2YgVvKKnUzhCi4kdSqApdpd3uL",
  "key3": "5LrXTEDjwfEowfEtAcQeDuUT6AphZTECZ8dgcNBMC1A7mnZM5YCgnKMG7FZ5d4NSMvALjAT4DSFzpkzokHCCQXt9",
  "key4": "4w3FMpjVt6p4fDhgJdQX9yQ1qBnUfK1g9vRPFi5MspfGBRwgb5K37BipqF9PBioRXQzxJJ52Lv8HgKCMhzmuBG7f",
  "key5": "5kp2HCiEagrk5CWDQNvF6EgFm2gxBrGUuXV6LNsyzUEGbhdsGEQbWzScs6MDrZAcCgBTjCyCk1Rwy7NQKTLwXhkJ",
  "key6": "4pP38FkBcZcVeED1DTUWGrDo1Ftx7CXSrB2LMW1yG4efzXW9BfgqMj1RQSuScu77PJCD5CLwRZeyE1v7gf4kxf7P",
  "key7": "5LiddrTcfvmsgBSc1d3fusehYDdHBs9M2kWQWsLh4ePVTxXn4dKTBRYzWL64dCYeHB2Sz6ypiHhS6DNdABUdchUj",
  "key8": "4tzH2vvckyvPHHiCTQVjZhgzekeESaKBHq5siKr3c6aYFuQahUwKSQigvnsDwPqSfHwXPKn4ns8zeWU8DXiebe9A",
  "key9": "3CUVPvmJSF8CVx37Y4v4agx4TPpd7wVM7zjZ1ASEvo1rsoMEXoUbmojJk5xQbQCfKcAHLj1eyGBwq5FmsaDbBLUq",
  "key10": "z3mT3jN2LrXTsFxhrQ78EoA3RZp78GBjsWpxgXFk3MGif1nLeXiuhGD15fvJf9qr7TP2QKwdHgndJdJbjjeeuGT",
  "key11": "4Biy5cieS7g7ZVb7kBfwESSzrxZDtTKEBkUL2jsMfzvJ87B4WpUc79bQJTB26FDjJezrctMcjKHrskJZVsC4xEPW",
  "key12": "3c1aQywBhY2MsjF67NpwDJMfyPd4uNxUGgvNeNUptdnPUs8FhoreAPmQm9GShJeUvAJUvLyv8fuYkH26zru3wRgh",
  "key13": "29FpeUoCiGaZ9uJPcnXfQtuiLKMJRnGfDdD5dcotj7cMt4zL1jKejX2Cg5bYcukqan1gnBnweV9swW7i5EJXumpY",
  "key14": "t81U5UynkwgPEusesizic5uS5GYvzpcrMCiT9fAMXo8tiA1GGt167gYDE41NFD483Mvt4YweTwTq1eio7haQ69x",
  "key15": "2fKULRMYKznZefX5X6qQMjVTx44oqPNPpdm2pTRYMNTV61BJMJKc6cCvicg4YhuupZRh1Hfi5hvJuGA7SyLgXZVc",
  "key16": "2rm1t9DnGzLomcYYAFVK1EBRcEs5uLAn25cMwCbRbWwv5QwUcC5CprGEXR1HKrksipMFMx3z79vvr33KhvNvkrgB",
  "key17": "2BsFMGwxjTpQ4B3WnSGhdF7huUFp3knBW6PgeacT1vYVzjdL6PJvCd7Zog27JkpEnStJsxndasmsmniYHDNXHzq6",
  "key18": "3YbV9uH6NAXqQYkkVVENnNBh23yxLKHKSyyBDWMJYg7khRgtHZfDSmCmFihMiqVCFYgeSnsPFtQb3NCRN7ZxEDKi",
  "key19": "3gjopsZmMPNhEasR2UJc577qSuMi4Uz67G178ziiMxg12Zh5Rzz9dUTQmhsjZrC4eQU7ZFXwtgrP94TfYeLjkyBb",
  "key20": "24Xm1opdPHEN4MwwHC37ddANAmoMiYskJUhtrXa3pVyLv586uo4NM9beQ8w2cc1dxbnNSx63UsRpKLCG5gV6b5ff",
  "key21": "4tWvtTekEzYURqLUmzLbyQdGMTxFAKL9Yx4Kvhat8qodr5XnmpnAV9VkTXDNb4bWC9cwFxVBqB5xX9VygsbnGhi",
  "key22": "2h8ySBBL8cwpTRQ1SuccpTmYXsnMkemUUyQ58ptUrkYgBULUydzzAB1LHsCEQT3P82VuqME6u6xYoTGRykVH8Rot",
  "key23": "5S33X5bZRpGPjtVaBcLUrfA7yF45ZvsUnVFyexXUzc6TQgA6zyhobrvoCnauRZZoXsqXrQTB4rVZVPWL9qjYQ7xf",
  "key24": "4HhSNCEXdqSukLJteJyydEQqgRDRnWsLCfZ49r8Dx3hsV1KHgwSpnvKa732g1pvnNrvXfR2TJLBPxAF9qhRvF1KD",
  "key25": "3PFTtHuFZVHC8GKFs3qumnkCKNh9atuNZnEkcywR9WwgcNLc1En5ovQdLQLuyYxaz1KpX6jANLj5PqMFcv8SkstS",
  "key26": "3L87MCMQjJDcAP8P2NtKqea9KrbPt8abSYdvpmH2giK6cKAB3eoqvBwKPuY11X5qhQFL6DvzaihgNvREQfiGetSD",
  "key27": "3iExy5cztUjDzQfcHL25m1my5fG2zGyBU9ajE99Q7Kt5ndL18VYJcSc46Ychz3s2xhZUcqaPVrDx1PCEGzaLp9tm",
  "key28": "aCid6qnGHGnpLWcd2Y3A9Z9u9aVAzAMwjAux2zX7Z9h1aa6oJmz3yTZyFpYbmnWSJnq98Ye8jDwjoNhGxjW35vH",
  "key29": "471k7JavDyn417XztiYkMXzog8MDqrFm2oirBjAZhvspBtoq5bZJa8Mhr2pcMn9paZNU1Xvyi5j2R76aqxGDk5W5",
  "key30": "2p62nbtZp8WtfERWahcCz2Su5YBeCBiELia8BEdhK6xrak1UXRvCJMc8Gv1mWBeZCtjYWWu1i6Ycdrez56hQKhJQ",
  "key31": "GYUQyiBfcAcSa7CsArMUSPUDn492Nafi9Gng9PQUSk6H36JUNXZyeTif7nPhYsuX3xh6rAKayJKc2FsbfJm8a4o",
  "key32": "32C2hhV5Q4i1yK4AXabsg64nytwc9cZdA3KVFuxDAUPQ5KmZufFo5DUBdAabJ8qJAuR9RaV8aCekPezDvERVpjET",
  "key33": "51hng9vaNA4U4fy2QbeL2KMgGuSHMZ2ouMm9zfbRPYTJqjbALyiBKDieJWeKuw9f9dh13smFKr7vR3sGQvSW3b9i",
  "key34": "3adSg4hg3NMNprHEEwWVh74QNyHRct18kU588uLjKoTmR8c4PLcG4Lsxv3gwpUp6Ncn5KN9fqeH59a3cCVFXycBp",
  "key35": "5UgYLsKshWSgX3v9bcWBWo5AZ6P7JVudwJYzurUgqtQTMVXfKYHTPKaSSbW8hdeLjaCnM4a65tfLTAxDhx6kzebb",
  "key36": "4Y1sXBR5cbt48HSeqn6LS5qZ5VpVzDJCwQ319HuvseXongMnRUDtYUayCMYpVx3Qi7bCAMJzEGZCAPmEo8pLoCuh",
  "key37": "3jhS5Qor89rCzGNT67FcMZfQWn5kGtvTVKjWaTKmnMMQ9otSK6eyttCKPxbccNsvL45pa5EA7Qt9Bkr6c45EspLh",
  "key38": "3ZuMfXynpRhFK3ymGyUzvXLp7idYxKeh85UGE583pCjPH8MUnKzS2L7n4i48YSzWEvEq9cjKdjJ3pcqvRzmsrYiN",
  "key39": "3a6BhwKspf31xb7VXPEBKuhmZX1buKcYzDHt2MsfCRgkXWZ9iRud6M1Bp2UMioSe66jAtxiWbjBPdJ9QNASXNyZD",
  "key40": "2cM955xmJ8iFz9L2suF5NNaTnH7JcsucaT5ynfoCiq5GdC1dtAp1KMyVzt6A9gsQyJ8yWxJds6eXt4JWakx9fviJ",
  "key41": "4BnsxuzoZ79cpLyLS6FdF1NkuC7whdBNMQDihn9CvpdYEvg9PX9SLi2zopkuKQupGcN1t5vnvdUdS3ynLzYkrk66",
  "key42": "QaTbhG2nE9zWPxe8ocDDiHQQp2jpwpHpfztxw13iDCR9PWJWeG4ccnatugyRcemSVRcHbb1Kksu2eJoGjCLt2F6",
  "key43": "61ZKq1SSwUJDfvN3ygxEAUZL6zm22RU5t9zJ4sD4DHhG9uMoDVU44aK753GoJxB7tuaDYAxqK3L1L8R7ufFxUFMk",
  "key44": "5scdELzjKJzUFtRzsLvCo2Fv3hWCbUJpZD2oKTPBtgtEC63mS9YsXtfHDgdFtPLiEDKyMZg6mtHjta2t659SUbNp"
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
