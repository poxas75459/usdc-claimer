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
    "2rtq4gQtwX7WGtkWtffDGhZdVNV6hm23XaiEdL1rJkLM8zjx4iaxowiwZYkiGmiqidEJ68oFYa7JwKBrBGeuR3tU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NeKNKFoBerVS5VA2oFGxwDT3V15kQeveHD86XbFQJkZvmbLEhMchAdoGARd4ics8tjymRebcGCwp12TTcEev9Pg",
  "key1": "2YUxbSgogCjyXdve22HheDNbgA2UFEPtFnk2keq5Gyv3MrP8zTJJmRgEBzoTHvWxrue3deMRGoBqbYzXStDxDvDY",
  "key2": "5M7F4cnQLQAy1EYFqgL7RoMNuHAYuJcSckgy3U2dUygDpPFBsrExDxcJehH5X5soYSD8jWDep2HdXToo1VG8mYv4",
  "key3": "2ZX7CyrKcK6WmnehGNLu6gBZC9yegWWEe5jEjKX2Gwi73rDZrDttjtYYNQsT6yKjRANUzw7Bp5TqCyGjb2beuUis",
  "key4": "5MDK1KxtagrwVw23kSC8VJs6z2m6tyWMiyVrxLoBzvtR7vjM9YmUrbgERkqRb1N5FwukjTdFMQGnZqAgvxhHfzJF",
  "key5": "PxdiBZkUAvPqbg8eEqX64r384iLHVGQip5HmDWNF7JzYwD4mznVF9zxcH4MsSW9UHRVJydLjeRjLRvVZ3YjJtoJ",
  "key6": "ph8oa411KuES5WfMaaggG3NCCM4n25zekkRAdVvNSSsFJigtSx9XceU2TTPKTngeD6nUFpQ86UcMCbKVhFsMVnn",
  "key7": "5A6R48XPgMnvw26k7H5RixqY3gSpFV2BH13Kh6iLNRAas3vrJ4fE5kofge8oegkgCw47MEou2eixComKREuvkKwm",
  "key8": "4okjYH9MYv91ATUuNH7ZMujMt5TFELospZUNYSLFA4kLwSZg6ZpNsiY78B5pEeb1x7M7LuFzEpYfpeX9qRr1wUzc",
  "key9": "61MLAbyVnYi5hgJJBoQ7P49XG23dS12Ec4DFUtLzaAdyUa7X2F8sgr89odHnGGvooF2DK5JQUNa8BGQeadaEqaWQ",
  "key10": "2iWNZ8B2t3rSbqEVdgt9i72TdEeEDx3jNHBFRd6ki1JLbLvQU4vpZPwqaEbi5CC2esCfEykngpmJMhKDBqRhT8sH",
  "key11": "5L4ubHiaMpDpfSnfS1MSaRFDJgXpeYaimvoJkMxX22p3QFksAEzMb2bxSZMs61n9jQmvpYi7AMLDghJKkVh3zLtU",
  "key12": "4p6x3uMwvmnZtKGQw7sfGXvQt1zp9Yd8bVro9FvJfATwhC1qxGZNaQCn44qanqixQNTdaergYz4HAcPocSxuJ2wu",
  "key13": "524ktMXnZLZrv6BoEoqwwd9d38osvVQTiYhPtknPYkB4e9dX4ykomgnxYESFqCzjY5udgmNsGL6wGvzmTkFsVtwh",
  "key14": "uzM52vGp7ssfcueUJeNXqfXG2vDpUG5gugPi2zQdmdJqNVWzSCjDjsACqw1kK2ZDwNxGBBMPA1SgrVAtDiUt8i8",
  "key15": "5N1Ha6kRVY5kVdFpTSsdx7En57ocFQ6E2NooBT3djCsFvPC54fB5NnCN5WJsSHSpKLkGNy9zYsmeD59ZBBwG5MkZ",
  "key16": "sUkrN9C8yQkjjXBqTJB4NKGAmEjZs5SCivf7fF7Bu6ctRYkPMN72fzovnWytLYrXHR633xVYJcpRvgfy4nTXaLV",
  "key17": "2XthHYXHxbnmEEUEhfFUGcfryWgeW4VTmG3JFXA19WkegeNhkAqUPMxjAgJLnUyLms5s3aMEwfmoXDb7StARWVZo",
  "key18": "5oz84WYm1kJPeL1C3xKxGufAE5NY3jo3gUZE2MAEC6T19o6AXNqa3teY1aj8xBRkMm2HMAGZAabFeUTpdmYk8Lm6",
  "key19": "2Fv5qGkU3rKLyfYxot1aCMiZmiTiHK7SPAgZSQxzXeSLiyNxD4ef7QeZqeFXK8rSr4ZAgqHzC61ZhU3bYBZQZgzP",
  "key20": "5xsxeY1pPPp1eQVx4VQEccLHsP8WnkAiGK2LU9eZwvW3mqQ2rmQi33HN3GPekThz6pvDF42TrpWQxjjb81nvKSmm",
  "key21": "4bAd7wADdonGUb4Fgr7MWr5dFhypecgMkLF3FBSzNWvPbTWazFJqNk7X8Y4xZtPpRtDtcJcGt8dcssYxQSU79yeX",
  "key22": "5HNfzudEiPz61dSJRts29aeHToiyBDRmjGwMdByP1LDWtGedZmUFQCu8FC9Ha2Ge7DM2oRcUVJHWjw1fYyncCAjm",
  "key23": "3kCQN4EbqwQG31TQ4WdjAwvLgS6irARgoeDy63dAiE4M38LgRr6ctXy51re56UBx8gXt48t5Xb3AFfbVs3Rw62o3",
  "key24": "65aR4AtRZSASnpBNKCwfivKG86fV7hPyYiXo7AkyVhEJL8L3WCVvPMA51iokEmacCVGoDsxWVWLQZHV8txsyMWke",
  "key25": "3DpxjjTvYmax3NVS6PHYoYc77fcxG6tpunkkvsxBz4DppFLzAF9ke4yskdEiqJAtRJiEAg3n9ciPV6Zw5FmjQc4T",
  "key26": "PqBxar7UFw1JgPKkJMggvKrYTVtcFuENq5ahYN12mgpm533ej2S3kFcypFyPFcGroaoUTwGspBes85SfGV6WCki",
  "key27": "3tg2yrvt2VtBUbTg4TYTCVEmZfj46hg5p3L5fp8fxZXXhRe5JsZ9kWon3ms5sj87qyTtHGTkKp4uJGNtfPGHkeSR",
  "key28": "5qNGSyaJUNAMK4rVShbPjgTBZkQg6TtCPmZZAaUmzu4dwjM1KgJfXUUHgZmkB4mfjKieYJjHE25eggKV37uKxWm9",
  "key29": "61Kr717Lbbz4gRAeegyz4ctviqhvxRMdWP1gi9aWwyFcbyQdp1SdUAj1UJxmXpKyUiqnP2qSvdexUPKgJXmxt1om",
  "key30": "5UnLAc9hHLLQoW4EkKNRJjKhsdLNSUyt5Ftr128LWowxQN1DHvGgGFavUzpnh5PZwQ66xkG3pQzHYzNXh9q55Czp",
  "key31": "5C9sbj5ED5a7HV8D6eGNt2fh3v4pWaWNGF14H1Q5tEyZErKvGY8B5sy7PouXoAQ9HFDQ72HTpgvqL5e1NqvfpsPX",
  "key32": "3Gw9M7jgYgEPCjYNeQpcp2W1BKCoj8hYYjaJYnBqGTHLYaaswTpw5jxmynHtQ1cpdE7W59qKZWaGZPVpGSU9MCL9",
  "key33": "2HkJSq3KrWR8zDqJswmA9tPLr9P2K43d8nUGZuujow1bsXxQK4iNNnsCxCxqJy2Lbqnj7L61G7VQBZdwCqvkhbix",
  "key34": "5MAW4vKVAqXtEe9Mcy9q6whBEVkhmknUi3pRnbuBiKA6U66ECqfvyugM8EStxaUjv7SF1h5P44Ch3kyjKXvVCozy",
  "key35": "3C8oEDndGLtZvkvVN2Cv7wz4QJ3tq9NBe38fJVd5q4bpHbqTm2uNmBNMFeXDeTJB1Y4MfGR2GZEq46utXNJ3dmFJ",
  "key36": "ceL6ET1S4xxUDPNVWgi8QpMVY6seTxrTTqcpwna6gL5hRmFHM2EQGnrVUEzH1YBa4j3nggbmTNWNtdsf33sd7J4",
  "key37": "5ZCEcLMhQSqiVYZ7YDH1YeY8dKwcuECHBtudTXA3BktwntRHwnG6pET34nkJqaXXxZzkR98GdpBSy6cy1TCLuFVW",
  "key38": "NNTVNNQWq1Bh8PVDgWJHT3jtqLs3vaGfi6e44n8QikmTPYNHZ1CnnUbqLxg3UG161237nXnZAPy5gjtsznBquui",
  "key39": "4bHkHr5WmAZjWWxmADnatXsmcAKY7UaoL7eMmLhC3cWDZZ7UmAfpkSc27DUoz6S3g4szE8buXaK5agnTYHLXcBbG",
  "key40": "NPY814ATaeRcY95x1vtn1D8qvuD7gm3KhCrhik51KabDD5omB6CWrx3EeJKet9YkHK85XJq2gzakUBxgk7dn9fq",
  "key41": "51bxfsQ9VyCTg9wHWPBdhnke5Ju4r75iCWcYsKNyfJsK49LqqX3sBcfATw1BqA5BmEpFF5GTa8bRQ7j6A5FAvz1r"
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
