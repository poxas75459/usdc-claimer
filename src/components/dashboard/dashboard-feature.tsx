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
    "9rx8rG5BA2QZBxvHe5hBG3rn4SjxzKLErJ6C2wVq6vyQHV2xGMkun7Dtwbkds1XxvCEyZ54RHUy77hnaMMNsj3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqoCEZqX3BxKCPWb4sFvP7RymqcAhV7rineigGdXUuSsJ1wc9pdCpC4PKt1JG4XhnttJn9MT9LDkEvJpry6ZRu5",
  "key1": "4mQJ5B9gLFLiS1o7JNxZ1i4DCaRnGQe6f4oZozRcaMtAMSnidFqEHpBJ7e13A13q6vnrVCwqDrXED6bWiY9HBSCr",
  "key2": "5aHWwvPduzAcAwSypoUMCg7LqbS15MbMgxVs4fnJonUYCQLnGgb5FUZfXZ9xWsThmBRugTNABw91nd3F5UasQgeS",
  "key3": "3HhuCRptxoZGPAQVCaC1hXqQ3ta11oLcsj8SjHw4Mk1mShSBqhiMY3NNtKbHW59Po6Z9faPzZFGeMUtxjDzJt3gH",
  "key4": "2zDuHLaYo1mMSeM3N3NCagzYBkchuPPJwcfZ1TVLS6rnnjWg7zpa2g4DDkp6AyjvuGELWNrFyVWD6gBqbAaA3ADL",
  "key5": "4ePSRmXSDk25hJmQxQdAskkcLCR7gMsJ5Te14HpL3NLQzwW14SEU5gqh2cAvzS3pXxFhcYnJXMyKYhVhtG7yVM2v",
  "key6": "5DVLwMFWhZX4yL36LJsvVvEWD2Zb6y3rwtZAGo7p6pBcdWVNkeNvT8tMW9B8KYwHmZbeD5AvbYSarQwVtR8Hhh2G",
  "key7": "3bcBFbuFpp42uKw46pyJdp7Z44ZdLSk4PzWsCnPyWkxJo7PwadiJqhRDuAE2MbqtAjFJxasEZ7FxDPSsT7KucWaR",
  "key8": "4bEZ6qn3f8KioUgbWTToY9f8N11R3ge8DjHqunJgACsAvPxFJ95A6Jegzdgpfe9h2j5qxEoU9AbJDcdeZg58Ykud",
  "key9": "2XLgKWo9k8iYvezRjR4pLn4kqHUKkMUX5UaZVJgw3Pgf4TreKCUCXJz5EAKi2mgEu3NJaZBa3WvagqeBch4Qotrv",
  "key10": "3QkhaREdCht43Qa9p391yyzBdLbiELQ3zyyjpfd37cfFmwK558SXY5tLMMRXWViz9fVNGkw2LYw2EjdGnoLRpWgu",
  "key11": "5nnWXdrMHxup6eYi1tPWmHDsCvrXxaB7rLpxZoHtUwWwewNLsNcoZPgmbGQCEFKuB9Ja4FN1UYKgztxcurTBkxYn",
  "key12": "2kZgA9F3yt5H1ALuBVjyUYihLZbdGgrjq589NQq3FqPDZHvt896zhpcRMbrEispVv4Q4mhjXeTpVCSMH8V8ayxVT",
  "key13": "4A3aTYcZTPxFz9Y68unrZmupkexEcF87Y7vKrVe9iz1qZdB3BMbKQXxkWhui4V54PNQBArXNqkH3RudhEuHMwTjM",
  "key14": "4D9HpL7bNxBY8mPKZJ4LVCD6oMTHCeaB8hcdhYraPamNTWNCsrn494UZGUkuvLnYSyyzdZMo6VxPgENhhcB554AH",
  "key15": "jg36HtwjVj5adCYjKHHGV5PUSVAU86HKTTqMgnkBnctJQypbjXvCYJapwwy7vZMgXP36QJrf6i5yb5jNUgXTdkN",
  "key16": "66k1Fp36NFpwwWtbC86jMxk4gFSq4tfvTzDsXNGKip4U82QUaCAXwAni2uxZKoPs1SwgZ9GFsHBLBhHz6VEb8H8D",
  "key17": "qtWVDFAzn3xSHj8giM9WLQCTrrfgndeVeDFwCzwQVbA14QWWm2nEUDRSGw6rPN2xpF9bqvYz8paqDJ3B8RK1H4B",
  "key18": "4PRb1a9Ptrffg5f5eXWxTh47kLAEJZFZnuKQonuVLFuj4RxtQN8WVwNvgwSRue7TbBykHXJ8WEHQnD1XwxVvXruS",
  "key19": "WQ9UBM5FYgnc8Ks664vip6hYtoHF32u6w9P4A7vGczHA5Vu7SBY5SnKi1aiNARNF63NtuJzxMgxorCbH8BMxVuL",
  "key20": "2Lj6XuxTfzr8RWHw8vRVe4dJpxNbuuppsjtJEP7acDQEW5V5iCTtXgwAeQJRX3AEvWdidnoRDituspN2ypZM8ZLs",
  "key21": "3vHpE68WE182dwNFePaAovkUiNpmetHdGrk1CEHU7stWS4PnSfTk2K8C8a9EcpLhaFBtB4J9mtaBRFkSsVcCuUeM",
  "key22": "3NtXQwztwUV1wfDemAvJq8C5hQ84YnGv8iWmMnvRmZ3uWVdvuHam8Y1N1bnBab8shFx4S6mDiv2ncaXJ2MBfYKsY",
  "key23": "nhpbeqbWoCJT3tab8p8K2PbFvED9SQX1bHRVfyRJmqi5puw2NsBjko5o1Eqn6b5CvwYC8SPzyKaBqKmamWNFJHM",
  "key24": "3N1GBPvmYYZ44EXNZV1yFdr1Ry1aUqUYrfPXEyYPT1szFL3WVGNtURhbskyX1YNoEs3UNEHaX1RagQarW9uK4RK8",
  "key25": "3vHY699PYhh8J1DiayfMzwvmEqCUJyCgYMubGeDVDKYQv4q3tWkp9HCy3xFJ6UurYc8ijwzEfTrNDPQsy8XPVReH",
  "key26": "e1cR8kRLSjb4aYPpJsZBbfY2VXt8emPMNJZSkcf7UCRCiFbhY69RTm96YomZq73heAvKqPhSG9ZoR8ShRmXgnvp",
  "key27": "2538VHbq7hRCB35dyVUeMzyKYLQMgfB52JWtFj1XithYdkWzSc2idkoqUymrsQkDzwPHo44JRxUrjYzAkxxY31re",
  "key28": "25noVWYqE59W4UKgsPoLfR6u6SpETDWg2YuDVPZP6Pu4fTZy3VxMEcXgofzZnz1nwyYayXnkasVmhnVQoeYXPK4X",
  "key29": "2Jtc4sGF3MvTieu6x8As2FWqxFp7kyuJ8kw6HVHz8q48rYtg12p4gh5wTzb65HsfunJfABTA2jSinUh9rahLbAPP",
  "key30": "2pDW79QQhCnhdrcV8xCRHHHy4veAcRt3VPB9zvMP6LKTjn14M4En7Sxk9XjNXkVATgiBbo8BcXMxV1CP76HUHULU",
  "key31": "5oyDjgGym5SzJeMxxFFuHG653FyoXCdUk8QLJCoo5BiYVadbkGifXnWUq21Th2x5QcrZEFkZfp8uRLR6StBrsiKx",
  "key32": "5AUoJP8S4MW2Qq1o3QHLPm25pr2sTURX97JHE6q1MgrT386Z4iqScBbYwKAukTFivqr8rc5Q1126PA34mgDEsyKj",
  "key33": "3E4GbgNi8PTHyMqZDSjZxzM8u1UYhP73j5QSygrGffAGpikU7xbF9XjNVkBg3Ddg72fH3mj1kAcA78fSBbdeswxp",
  "key34": "38WPbgHLQ1Ly9eTzwxJTV9TYpD8YyMbwLh5Yn77kqXopqTUq8iCjatkS3Fm9K8yAifP993RikNxuqvKAmuaaJBsk",
  "key35": "3K7ydoMRhkSyjFnu6Y79hyJ1jEBXHMBEnH4PvKFKh5pVm2SSVSyt68fEjjcA2vyyCNSRiwruec3P8kWxo4Qa1cRX",
  "key36": "43QpyjgMT6S91R832x4X4t6sMBkPXk7y2XEBSZnafiA4nwdWjFv5sDZDtUSFdCicTpGa5PPxwEbusg9ik5fbrXr3",
  "key37": "4SvXj66Sqkm2o7V1CfDgm7qpTYbFq8TChauzJsKQCivM35Ce1V4MeXMwqfsAtFoHjpEuzdFpT8ZwgwmgGE7dLwfh",
  "key38": "YqexBu7N1f4qVwb6JtagwPvRcy89SuZskow4Hi3KKVMeEv1Ccyi3R2C8Y2R9KR1TjoATtWzk9mTRGESBHJFVmPz",
  "key39": "4CuxgV1okyVLx5dYzK8BmJgFBfJh1tPZHGUrWFbEfg6g9MxrKVD7oVQB2LjiZVsgLxbCBpi5b2cEeenUn23Gq5eV",
  "key40": "2U7MhHRB4wGd1yjqjx1Zk97iUC3WYJu4RmgAq8UAuXU7siYw6JfWatJx3VKn9RK1VVv2RVhZonvt7BmTmwJebdoZ",
  "key41": "EQzN5hFguVokmMjiZsWdpV6UTvsWsYSZ5MxLAWgtMfuDBGrXsDtaBYyARyEWzD2vtFaLeN3rqFLRrW2hsabtczw",
  "key42": "5cQMzCY89oRMHw1JooGVntVZS73DYgyhD61chfnpprmEbCupEgcST4ZVCoDsT3ZQfCLpqUxMSeHmnfPG9oxnnULs",
  "key43": "4CWubBFh2Rv7dpCko7cRh1wQRzVU11tyKL77JwdLUPP41KpyagKxP9byWBtTfmCFhCiHmdPftZ8roqpYSNZkFeig",
  "key44": "AVihgUnqBuwZqizXY1Vntdwnhf6MwnQmH5LkkRrPQMGANpzpYynW4yaaWPvJbZEi52V2RWRHeMXxTLrvGQ44u6D",
  "key45": "2yns9h2VcQWKQ41uNPwGtgrQ6JFrZjnaShCd8DwZarey5pLMthEfZWx2r7vVAeCGx7yZp7Cv9CnUe1gEFGtk9gwK",
  "key46": "39qJsaArwtpmpZkrF334VxwVGhjLgXp2FzUxbZKgCnVLERzE2oerwL58bdHJTNZ6qXA5noin4tjmifo97DCQNVXg",
  "key47": "65VGCohdyaEdsCwJckAWKFaK4qttqYvRDFjN69mS4bFyRNYiBeUCX5BupDmrqN2J8JGGCH6UQbpdqUJK63d7hHwN",
  "key48": "5AHGpxYAVxb6VAxtTErMb9VzYmEveLPqFJtdZGQ6cH8Ncf7vixnAotVgGQtXWoD7UpEN8B4D4ZqjAZjDWdeZPXM7"
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
