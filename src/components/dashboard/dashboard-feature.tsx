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
    "4sNtErX2fzkmTSBCAd32QPTwoDNKqoZPzcar4id4WT4xn5CLXeZypoQevEKDbMf8t7s7nwS2PX3qjpKZ75uKWa1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vvNgLMZQcNTgZ4LtspUgocfD8qxfwvx1bk3o2qiYWnqQ9V48MDpBTzjQhgRXLCyYEVPBAGj47e9xrBC5wP1YNci",
  "key1": "qatGM82EEwEz8zam8N6ubkKLVkXCqpzfm8qRnD6SXP5TYczdE36rZNtfF7cch4xSv32nJ21rkFq3EXJxCFefsdP",
  "key2": "DEu1L5nSq9JG1qwJYZcftMMDpNENCGf5KFQpj2ctybmCAECsVDGD4k7WuGgpvqVK1yC9NMjwS8T7VTdLxH9eaHS",
  "key3": "4QvgfN1BfcJbgjdq5JPj74wfoNj2i2bXYLNRVTziPqmLckfzUU8CTtjyi5h1DdvJhAAr9NbBP72R8WbEApUKnAWS",
  "key4": "3i42jd2C1djyMDhSH75ZLRUkeLYrKC7wNAvxbvkFAq1Tkv5PyG4GcsQRpXMU5SVn9HMBmnybQGSMkPPfcib5LA34",
  "key5": "M6EvQonJx87xAvuLowiBb6qhAgv2ix9eJnuLppSjvFHdkUWi24QsuBv3MEVBZnc4f5WtxTRZT5gzDYuT4M3kQ7w",
  "key6": "3jsv5m4vMxK9TmNJLDfvrdYdvLiNjogPLrBp3cAegezPsBqDFUcrvopbbisH6enYtzVNE8cW5fiu6GqtMJx4uA8B",
  "key7": "N79YPsQFQoZCSo9FUoake3ZMiCHUfuDBDmykhNVUDhfK55qwTqNnzNCN2Utv9azPyggXkoU766FdMHoNXpxUbFr",
  "key8": "yUocXJBsKYaaHjo9DiSAvf1MBSnuBCN1MrZNt7BxBHknA57nbBY8GaRnDqnGBsLdcRrp86ei4DsPrMhQfRfgWDf",
  "key9": "4yKwswtZV9KEUgHpcVtsmSs2vrcBsQmmPw9HRin21wY2CS9rpxnqDzPfc4zmc2MorJnCXqEg8nwtwuphGx7fijAw",
  "key10": "wwVZPKmfkgydiz4zgWu3uVVxK7ih5znaHggMgivpsLPk4U7HykuD5NmX1e2g2V6XyouHnNdLtu6Vd9vfzX7QvZB",
  "key11": "36beF5av9KC6FPMb4u6FUUWX9v8krJzM1LEkH1CRBqf1Z5eQ1o5ENws2qQw1gvUik9hrupsf6PS3kZbK4QSWdAtm",
  "key12": "3uAfJzkFHofiZUBtox4peDb4Aa5eSsSggoWu1pikpYFqxuubRquwnCQSA2U2PMaR46yk4Wz6xir11ogkmnBQuL3c",
  "key13": "sVQNNuK68Cna9vjEyB6okizEmiXjA1hSdTkhDPUZWL2DvDNL6wiUoUsaViz4jaVQjgHEuM3igcjsJwnzY3Q3yNv",
  "key14": "4yC4VoG812YWXH39iD93SyJyW2tcXwL2Anv5xyYh1GUR6M9sLhU6fSnmqZj3uGXFGLzuBqqjHW1Uk5cmijSypWAj",
  "key15": "5PRQG3jZMBZzQxAJynn5QPzKS7v1jvxjPVpStEbie9C14syKGV82gQ3ZfZSzczqZc2WyShrkP4f1sTFtLYSohviz",
  "key16": "bh4mfrXBhEFfHBPhYZSWg3LBebdodKSnYasbVSZVwbpcoS3DM1UrG4mJ5neXRmA5gLXpEf1NwU1NgunASFac2yZ",
  "key17": "5j7a8QyDhTGKD2fokicZCMmbj2UcMA1EDerL3tdKVFV7wpFjwpRBBZY2QEC3Vc2ZLUQh3jynEkNgHhzJDwJhfWfq",
  "key18": "2y9dkUZ7swkakvUH6HMPBzwBiWPkHMrKFFeSiim1Dj9wskF2pXR5b6CJecs9zDcz9qpTs8yWB8nNSAfaMswZEZk1",
  "key19": "SgHMVAG44bGqSyuYjpbVoVNZNHoKGwxGpFD7zMWQ5f6ug5JtjQJsfqJQYWtDYdUaeZYhNCCRvdSkRucCquibntC",
  "key20": "4RkPBiEEmjGbsuYaTHbbhqX9671U7vUu763EATzirnu93QmkSSZMkDL83iXF3sJh9WzrH1zfW5mHhgPsFkRtgHTE",
  "key21": "2xmYhuWyxRiDr4391RrbVHRfW9sV2gJbFXU4zbprD9NNRA5CjYzVz2aLhzy1PsEkSyB4STmXddVQKS4viJiVygJ7",
  "key22": "4zPys4PykJSE9bheTLwrroZYJSGyLEMY9az6mghWWb6gNF3FjefmD4ZSxVzDUH8BJnRpEP7mwo7fn1xhkBAvE65M",
  "key23": "65vuBUPmtgjhndkANmJ5EQak5duBgnUTnWzZZoiCAPYRTJ55ZuH8oPh7vXbtJTtsiETBfueVfVzX6r1zLh3oyZkA",
  "key24": "5RoCMLPVbuuipnRnciQbvhmvKTriSmLorkvB167WgYYTxZ7mFsYLLzcbee31uRsE6yMawUBUd9NBpkA8UzivqoKa",
  "key25": "58jtNUqpgE5imcBys5RgkZMvYWGxrLahEm5SQsEVdQrAEhzuYGt5iTcGXMejQPSdhA4QcGLWbFfp9L1Z71UMjitA",
  "key26": "3iXFU87rpuKYn6K8rEcfKQWV9Ut4kMMJSAT3xqUMxEDwJysFSCUjQVHAXV4ThpiwH1hD7TezqDTnpr73xoT3z4to",
  "key27": "617w3foHS72NECJUfb2rUbz7LDGwxeLQ1sxiaj2VhBK1VY6k2e5swMHipCmAnVne2QgBkrqPzUD7W87CJhxS4BcG",
  "key28": "2h1qT1XYmdii3ETmCoq1x2fgrgy4JvLxJFRp1eYy5w7jtVbisHfCSc24azAsBM5Javgg9URnHPLScDtzG77fGUE3",
  "key29": "1266DgkoJ8g67aAuotP2nLQXYgGv5d12UzHzpkEjsLrycLwSDSKn74v5YgudoqgLi8LaxjXZu6rtM11cyK6V4pfz",
  "key30": "28bTPG685YEGhwqp6ziCzHUovq9MXzJkPezmBuSnM1kweN41NrZyy4xasKucfgGXzKoSTG9cuMrEJ8tSmhQr1WGZ"
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
