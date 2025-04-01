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
    "3wgJS5F5oxxoUsMcsJ7pUx3K4L6YjWtppG5663TFcb7r2JYd1D2chdC7kFhrRh48ARLQVuTrHYb9UEZkbJt2HTR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jFaGwcDoEvLnW5BsnKvY77wSGxkuK4NQzXiVhxbax2EFvdhJYaKZbeK6NgiWu6c8LpoRdU9AuksugYXop1FHE6m",
  "key1": "2oRSe8s2cJWRyKE2XfiimkJYNB1zrp8bfK3BR32xCQuQ6ghWCkSySTebBsLZh8J1udhPPD7RnwoeoTbKLGK4Cxsc",
  "key2": "AnnSvZLEpuvZN7BEpqX341Uz5D8PFQzbA8wXCNJBDCVPxcjRReLLnYQDCRtV5eMtPpfe7nwAqnzPNdUE73wPpz9",
  "key3": "5542FpxKDLEKs3zLT9HKM1PCvmDqKp86NZmXk2nKTQkL9Ts2jirJCdSoEj7dHnrMxFRNH7Uss8tGV3FzFGiKbNiu",
  "key4": "51XpgnQZ9r7uSAKByJ5XxaRGsmu4LsBkVpDXPvTjC2NKhnSnyZXySWRrfG5Bjiyp9cAuACM4dSej2ozYGrGcTWXN",
  "key5": "3nCA7Y7dW7VTPNzJ7anYhQVuDnrM8Be3tN4T4ukqCZTwDz6yicwMmcKJk8zsUVjwa671cGN9DTThCWfXLT5FK8v2",
  "key6": "LDrA2FE7yYwHi1u47YALeAN9wWWavNb3Q5AbGjpH31M8erDaQVog6AojQy81GPURnvcRJLeikjHXdJmzhBrm8br",
  "key7": "2Wfr7qxYf8ezaqMZJRyDWNEJDyntqwkT8YYaXznG2hvdxrc6Y8gv65JoRXxtoZ6etPqsnkgckyd2x5RXzhGabkCw",
  "key8": "2WWYJgYsgZWVrGnGiXfhybb8P5GrPDGb8JWb2McH1XDh6JxbPAMP1Qoy7a4rXHpFxYooK98p3gvopXLPpBbRK5xi",
  "key9": "2Q2HL7F6irgdi1Hpeii8bBH3vZCMftU2uNSmUvowudJQ6xDzzUBi4tW7kWwgWFbmoynz8ZKLcW3aYxuMDVTevWLQ",
  "key10": "2pwEWAPjqUXsqVXBnTgniZk7ZmmNGf4eNbqTa7SFPKXNgmifiq9zPyuHTBc7FeHBk38hroMdNGHJGFm9iTsMDDC7",
  "key11": "46GAnaBRSQpsiNMufkM36mc1QLnZ6kSiNCCH2Fa3rpXFb3kzf9UsVgHs6WjUAHCAQnUrdskB2FQUs8fJbwSEq6fG",
  "key12": "5MBT2Sb5zVr2Awofc5aiXgsztafeh2xN69831Rn3jxS2PiQKuBmhn77LFKXfMpBySEvKWsdc62qGvfPS2Hj37pH8",
  "key13": "2hWSLyL4sFz35BDGLmy955xyNoifwsHW7ogBUpxQPJ42gmituff4kZiK2VymQUQQguC6st8WkkskMwmZM3yincyA",
  "key14": "3S6bosAJY2iWfFpGpvHo7ncdXomP7TcAUCHfm2C1hciULG6seRjSe5CQgpFzvygFMZjuFBcnFLRfJiVsCNK5Ck7c",
  "key15": "37ZPyvHWVVqPTdzjJeKU3JhdeGsDSSPD8LDAeqtcwyxr4WjVxHuyDfw4rwTjr2e5TFrcbXW8X1fMpeehi2NEqchK",
  "key16": "5nLpLxuhKTgFex7AuVkbHNnYJQE9DFRxVbGsaF8dVaeuKd5PuRWQRkUpDEeYNmtAmkvFBsUpT6JAdQjqD4o9p6pM",
  "key17": "5VzzTdxrGigq6NKNADansGsgFs3HWg49ADxw5QTpFk5qi3CCJJkCSPRg1jDpB45ZzxEmTdH6wiQTqwepJXKtbKxw",
  "key18": "8ESTf6Hoo6axBkwJJLCGMdxZbMNYkLKrGgZfCjCN93CKS5FKbq7CkVvWPq4qumjLR9SCyQkYnEJpYUkQcLoFKre",
  "key19": "4PExUS3J4qwhx3HJVMgpGTaymYALZ9Nr6SWurcMSzKfZpnqYPJmKcyyL6zvCsNGgB9gdYgNtZ8kFapAdrpqkP8Ud",
  "key20": "pPuZ38qvGczAioN1RJRzEQGiPm6za48VjN4ZkaggDieZ6NsQ2YRmtGvmsUPnNHnSrT5fuQGFk6koiJWvifDXiSL",
  "key21": "4SBaAbAjz4zCKEu8W8ZvmZDs7r7usW9zpKTuAWvgEj5eoLSxGs4HT1HLrHkzea9t2e2bUFM5LE6zqoJGrrVfmaDu",
  "key22": "2xGYhy98n6s6QD9Wc8XzsHb4Kq7gbVEAN3doRxAQk1sKu16cfwPJynj44V8Qzmu4AM4vmnJkAQ2M2413QshsN6GL",
  "key23": "5twka6YcZW2rFGDMcJR4Ha4xgUga2X2wFNyJ7UV1kzzJ9By2HXXgDBD2qJuBJGFkxkAd6PuC5ngKscyiwTxKmPz5",
  "key24": "2nmWanNKodFhJ31XmYvLHGHs6F8o62NWZne5b4cMApeinrMv8KcDjD9grDVsEsNibAdEnVMa63nbsYvQ1e7ns66F",
  "key25": "5JCxDy8u75sYJKqfNihWrZrQgMc94bUrdPNfqtSouWdCxoaQ9pLucH3EXeNcV3NXcro4pRHeMtRa4yJAd4hsjRMB",
  "key26": "5DWBTYUqfrbhduuky2FecQBbUAgU3FYR9tJ5sbJ8zoBsx2xou6jdd5j4N5sUorCG6nXj7icBbh3vcR5Fy1AqPnkj",
  "key27": "4rqXxCa8kE7KnKZL1t5L4gV2uedg1sncrG3jhnz2GpYVSPEQyLdssU8yNuAuDfVLhsupFoPtMGS4A1kkmqCHkErT",
  "key28": "2sjzRqkLqx3wxmNfKgzY9Ce11FQSPq9oPtnKJ97mCVMhe98ZUnttysoNoeywFFpqaxRSfemwSYxqmpBpKWgcFNbs",
  "key29": "3MqgBDpMbQnKjAWZqymqrjmo7gQmK4L89hYxE8ZY5Pq5H95Et9fZufPyLAk1pAQaj1ayez6Duvpf8WE27KabUTNZ",
  "key30": "3C6M6gm6j6hgRoCxzQzfeF9zCVRgrF1RmzVvZ3c93besZJG4TqwcsXgy8QPZBDGE9LGizLkSHiGQRy69ob6eZoyM",
  "key31": "4jx2Pdwe9RrnhwAn4ULGqeQBiWyAbgREQq7jDkADumTNEQgeyQtyuTUkDTs88EyfYsiXiefSWf7pHajV5L2N3xFf",
  "key32": "32MPLg1zPSrnWirXA9cPgjeojzFgtbLJnqx3eghkei7B6hJMYHv2LNkc2p2ELTU4k2ADXr2PXhC2QaXbdCsQ9iAu",
  "key33": "5MhXvX2RHMsg7MXekMW1GjapG2t3sMj69VSPWygf1zqkDURQuExb329pdrndF7QwyfVCabv8sdsCyM71mUYgKc9v",
  "key34": "iZknZKEUhq9VeTu2GKqfEnJkTZkwKQeFMmQmyNiB3d7mXJUxagUhJgNZmpdW6THknXWgmPYY62bJsZtJxoEzKtf",
  "key35": "59XmBUh6TpdY3zQFShLjVxLXRBZYhJiBQr5okb3M4Z1GK7FfGfYypbqiMFDDSxsWLJwWLWrU3Nh2rqbW3MrmK6FL",
  "key36": "5eipAMBqXqXc2Y7z19mJw4G1UJfFfCcD6rgoaG54qWbeDk4PLwBtsU5YS8D4jAYULUandz3vfiBAwfaWzzZEAbZs",
  "key37": "3cSxRQDDuxi2X2mvgHnWotr3WCdKfsCRfVi1y2mwqUhPumjYfqdPaKAUKzPLWnVQ2BZ1BeDdekgD7FhGrLJhMfTy",
  "key38": "Lr5XSwYvZyBCxU1EVroJDfykER9qP6UGoFPPbEEkX2qSACsuFwefbooEqWPgtkmehRRnh6UaQkvaZ5vdDu2U23A",
  "key39": "46ybvG2TBwg7iuoyhnkMSqWVcqba7XFzm3uZPoGTNDoZ5cU5LYYZ5MjehKAwhezr9uCj6bP56mxoaPcgsVd3yZDN",
  "key40": "GcLV98npQEHUGFcD275gHax6NCus4tSVgVtzeihZNzw5p7WAk5BpBhuNXQgUVss9rWGRrdZQyQniugGSMJDLGYq"
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
