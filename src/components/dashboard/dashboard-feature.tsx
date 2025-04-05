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
    "4B6g3TJDzRgQ35324BahX49tcdpBcEqc1Z3Cc7Ut1ZF4ygus3sg1ziG5szkyvHyCZ8hi5SYtKjbWCxyqVXSAnG1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HQRNG8NaRZmthLPo7hFMP77gVnNqcEYMwbKyjThh3mXU17RDAy649JPCzVqA2sGBiuK8Qot2NK3hfTTnWiFeNQH",
  "key1": "2LoUHPvnQfyCopexaTXKyqb8MyznMJGCRbfjMv6NnL79XJ8SB6R4k9TUoaLsYTUkh8yKH5JSiUaPrmu7Jfs6pik4",
  "key2": "2aK5ndCm7Ub3rbEyii5X2S6kSSWazRq1jcJP8VaqKGNawXDmubGT1f5NeCDntQ8jUwcJvaYgzpg9zUYob9GG7Nf3",
  "key3": "2YuPwBzUTou1bBZC6JVNC76ri6Zubci763RfQkUMMPfzCvxuEU9obgABFm4D2S9JLQVVb34mGUPCB6AzwVUXcMzw",
  "key4": "3TNkvDnyaSp9AGh2PzTSAWnypyvXvLWRnAPCWbkcgyPmx1FwLnqWUn2GnVH4TP7e4EGGAMRyrpcCf2qHBBt3N6kB",
  "key5": "4WtKEdBVhWHskGaAwPF7KG8kjQnMeDG5XqnzDKqqax9gEbNhMprdCmuMuYF1XWq6gLkfNakptiSjnWoyLGxYjtHC",
  "key6": "CxUJJWN4zD5QnaA1Dy2iXvG8N3PomZkmYXBpNAJJnRFQWzNQnVMrHBDCuoriprrw6WLe9JbG5fJXJGRkmhQ3tq6",
  "key7": "4EgogwBt8swQwURE5QLLEovbaQxycAz75s45m2q8Lzh9CwsNh9MycBQysXPquwYnMLK7tjarFsSZ1QW66ebAHc8C",
  "key8": "ZQ3GjKcDC9FPeBb2JgLDUrp3ZqSX6eMDESEf5fuHWSSxBPuSQZyJUbZ5j4UNEuUyrCNjPBnfQtBnfKpFHiyDuZd",
  "key9": "41pF7nXzrSBprp74LfUYEhnVEwvShSMQiJH6Doa2fDhAdgrPgfw5Txzb5titA2bjmtF2aovHgwWSGjZHNsGGCFgM",
  "key10": "4KFJYmWYpZw1ZSHXD4JGZjTKCbjLBBnfK7gHrnfae8xZebKZVw8LXGgfREihKe2kDqyQeqYxcPDq4qKLb1T5aoei",
  "key11": "MNqaT2Syjx91K5EgNNTwEKDuRmJGxVKfeggKMZycpUdg5Ch1yPeJfYKZ3PrmjHCtBvy33StcHn9p8oVHCDjhktb",
  "key12": "2p8fBX2tFFDLdHPGRZLnT6X7t8WVDKAitxjSB8XaKatsUWdrWjybhqhUDPRZy5ESGqsGqoW3mu4UJKr5rwTmzSoe",
  "key13": "5gkyNPANLHG85tt4xxRR13AcRYGQHKaVQepkut7jXquR6t5eapZmsye2LXCH7FoCJRPL6JEJx5dx3GhpAuPqB3im",
  "key14": "DABLXCwe5pA7pgxcwXPGUgTdWnCEY4VgELUvbJJiA6ZJ7MzuZgSxR7DBbbiNiHFeWAUQUVQipUehqvBHzU5NeUt",
  "key15": "62xD2W7gJgUMUwQha8Lc6r4x4o8HP5M1L3NbWTLoLGcc2mrajFdVCayCBN5y1mz1MkyAchupyTm1ycejfKXHDbgM",
  "key16": "44y5j9Ht4Yn5Jh5zyREb6U92paw68GshqLbXyzyQFRv3LAnmxvyUoQCiCM8bZwBxphX8psMwkYKmR4irwU3fKCpQ",
  "key17": "DEswGi71kJatvfQ19Kn1u5a7F8PBvMtp9guG9mMJpLSx5YQJVwSoCXGvYVxJpnkN2NFR5aKtmLvT4VUyT7k1P8U",
  "key18": "3ihxjAeJ9npVSEfsAG6sLpHgs7bpqWx7FjPduHMEK6MQq7AWiDoUGy2WVTFYSaxYYUyeNfa8wZzttM74KgAqT7fb",
  "key19": "264bWMcHeKuVy2msze9sC7eJzjoxW7Eo45vaQB7qb4N5omsRFWrxTz7ryFYVXSWtvsCDkJsXarmqCAYUnBfN5AkS",
  "key20": "2vqbo689ip5KJxqPd8Azcj1oKGNATyvY1udzoX5dtY8opspXePmtHCUHiYMWfy3VnsM2ZBhQchkD6pFjb96dbCR2",
  "key21": "V83V8AEkN8GsuYivKpnbTSKtVQXhQFqpZgQsVi1jSPjMPj672QLVzD2ynkp4N6DB7HvTtY9xWzHdtnsWwt5yFRi",
  "key22": "DfjwLBAYrGJEg4oYb7z41TpFRjsR3qx3jqNMNLgAhoN98hLpQdj3mimN7fUuD9JR1SXrBU1QpSnHyQs6iFehn8A",
  "key23": "VFGtVTqzX7rDzHrFNZMbcAXasKesKNZRUw2RyUAKrTPTP8va3FVdm7TBQedW2XJB2AnzUFhizR4qbMjnfuKbTeM",
  "key24": "2RBcKVE9A8Dc5bfjER9rND15DWzJ7g4htgZVAqMtMmvdrZL7HEz4XneYvgfg8SkkMqhs3VMvVShtRA6ahNam7Gc7",
  "key25": "2QbJkHwKcGmy3SKhuGDwyJ8CKSRXkawyZRufwW7DFvRji3MetLsKtrbg7JY4hLuuB6CmujLzqm6yRtRLw5bNo63Q",
  "key26": "274HSVKJm69Jbpd6sMhWa8NfEMNU6AszTbrgTJpgnCmR2BHXtYTYfNyhZaoR5yq2vWmrVNjoZTybY3xNzbqtLFVH",
  "key27": "DnJf3c6QQ88txQRywNcHfTM3gTamc5xHCnh7wCZoaTNU87QAsd22JQRsgpxRbeEwEDg6NNuFLcKmVN8W8vRxTTu",
  "key28": "67gMvGx8PvMY23fD3eZmEArVpix584mKWDpRgpNhuqf1CRvrmm3WfrZCfmyo4q1dJrVPN5SJfmFcUAB7vGYUX19o",
  "key29": "aQ3AgC5dD97NStvmZtvVMy5rNXvjzNidrv17h3u1m9Zy66XtgwWrHFD1sLXJ441KZjSGHtgHJS6Ds5qFHFrVLxu",
  "key30": "26P2tBvUHpx4tQC44rrJMJXQDiEejgFubcbenPnnwc6H38wdx41ikq8edVDdywSwwje9eHbnxLLvje2vNnTxbR6W",
  "key31": "21gTf8Rm5JmM6F7Lwbuy4k5pke8BBFgwBc4w3RTgE1WLGuBNj5JHdMwsGBya1Mfs1FYkTnbbchLRoY8AVR1BYpJX",
  "key32": "5pNVzZbKqJvxdH24gPDoYb6bx6m1NMksq63kiwWmDAoEgn6KTFxMo9mALZsviKWfa3GcszzYxMyeRM6cTAtf5h2z",
  "key33": "5YpiaSpR9LXDbERbGdoEZAjKw23Kx9NVCahVsEuXLBRk4DwFVLTopozp1udLaCo7r3Zx1z7bQpU6LfmzwVDbTrvU",
  "key34": "3uPmC4QVp4fKhign8wDxBDuEGnzA33dQ9ZZHJ4HA1vukQEG7FZJVLh2xhC5SRfEb6h8QsMZDaH6S8uyNnT27R9tX",
  "key35": "3FwzXUVfSRyh2JfVyitTm7BJsEAiaZhgZPXRj7mS2ZyVb332AULJWUYxMRzcqPqd4dPwQvnHTsDn7kjKghn4yqgP",
  "key36": "UyQMgVAvwjAyQf1z8gsoQhPbkyoGwepFgQ2p3iFJYEi9UUF3uZmaugjmK1jr1b5zZG56BXvtzEvFfgHhwMawZ6R",
  "key37": "2g1V8ETdHwmWXawTrrcojWYCCN1sxcdM7JMaYBEqQAyNBmNxpbY5qFf7PC9XeFR1T7k9LAnPxQ9ADv5jSMAfBvFc",
  "key38": "5nWErXe3bBqiAJgbx8tMARdLxVqfooZ6ZEWoKZaXUQ2T6nrzaCcqtBodYocUDe5ow3YAo6z4pALdAfMcGxpmNvJW",
  "key39": "2jSoUsUyYbir675KXGK9Txux1u44MJJmovoH8hr9pr7tbijuF4F5can9jMETzMNaEZ6MhJTDQMW4reu7kYTxKLqj",
  "key40": "55CnyUKtkLYuoHzNVG4HRMvTEphxrpuz8aKnBwM99aPw8YwZzjrVXdSH3TVmiprm5VwgHQXendL4kqa7GT91qCBn",
  "key41": "48THorMSLr7wsjFzemF1ddW7z1BvjuTpenafVTmxLqPW11omjGJ4WwZpB7PjZ7i3amDm8ToGcWnjPAnMbaYtrPUh",
  "key42": "5dkWTu4FG4dkeL81aEUdYbYtb9fCKPTnwxDbXgDhf5gpnXduRkHSDoy9QmedUN5X3ej23mZgsZsjrVvniYEbpJKj",
  "key43": "3TW9n62JHWKLaaMmjCVCsGRFp6hsTGPWNgYyevpKocSutfsDXYdG64BcT7zU5Cn1J7SqoGXFDzitjQW41gGWgqbM",
  "key44": "3XQ96c4FWSd25HX2kcXcY2ZngatdVupvYHjHD4NGMLm5evZwMca2ttzQmyT4sxJ8X7vXMxkxZptE1gKDmQTHXHrN",
  "key45": "3pNcURm5H3ZkP1X7WLaSvadtKzLRuabDnSDL3REsZUehQ6rSpWW4w7Cr9kfaqXwnqeAHgcq2JNofqxskNC4Dziq6",
  "key46": "2JgfKrk9dniGgHq8xPss5qEaFiLSEGRqBLnet1bX7T5htVS9BnAGN1kNsFTd6cTZr6WdJghJhaf41SdbH2JbWhMY",
  "key47": "4HinDRpVJyhcyExp7AUeajYuEz69xjsDSJM8VCmK7nzWPyTGxzmyb31pkj9FTydyG77SwBUs98bJb9vTKB16dScG",
  "key48": "4iWmbMziBhbQLNqZdzxQYdaQDwhnLVSp7ZKh4WgMw81N7t3TYZY1adiRyin8AAH5Gn9Jpw9XHMZPDw44eEcAAUwB",
  "key49": "5q7dQFVAqbEX1xB6b5hGMiQmvsdqtdYm4FYcoPpWN1AjzMCrpxN3m53SxFLEVgVD47gYKie1aftzZJUEChnVANeT"
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
