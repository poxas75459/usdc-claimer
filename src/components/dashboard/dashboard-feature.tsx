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
    "hC9XNtYepPXpdvPKX2gzHPe8aFww8ZvNVe2E4aaaYkQ6hxdMcb41bCkpFEX2Rcf93aGhutqn6L9xps6GjZy2BKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVCShUusVvbsxi1DtnQpaks6gHdPqTyRDoq62WsBT4yLGaB6M8C4NCC2R7L5JcTUuP1LLZ8pSa8jzaUyp9rLoGE",
  "key1": "5xrJgvC9ABQwu9qUu2mJCHr6MhRCD9UhQV6WcrKBzJSgZvcJkGYdCrXdJJC3Q74BdhUSb3tXeNGTVfw4WR3M2K87",
  "key2": "5UMi3qnyBxKmWXmp8RSW5Yg7EUXH1g6WfB8fShuEQWVtJEkHMSZveXMiS4YgDhjaQBKNNNpnFnwm4d56pvx36DRf",
  "key3": "GFDbk8R2xAtCfgdFY2HGPfyfRWVa48HxkaRDAi7vwUGit2TStdavWg5Jybevaiift1f5XV7fS8ddtegteDFiKtJ",
  "key4": "3Nfs54oivBvmKQESFsciQ1nFX714cxYMvuxLQ9XtwR1UbuK2uobRZSdwjUkayTqTzHXBbEyhbiT5mS25biY1W2hj",
  "key5": "8kgCqY1EpNbCCTQuWuk4uVAobSypMJDMkZdbHQdKQRYYBUcDryTw791k95MCwqgP4hGZwfMQiM8qydwza1s9xLL",
  "key6": "3Fr28qSj9t5c2gAyiTqTEmcmroAKJuk1CrTrz9pcwxs2FfnuHrdSEC5TMKqB4QNTFNRhfwrPftjdRL2AgVSrKgmt",
  "key7": "58uu3K3BrVsCWv8so29xqSmFeVwNLSVhSRLzVoS8JJ314Xp3AHc91b3NxKhqGwJ6c8BHU28gREt2VzYGz1EDRFLg",
  "key8": "65iTLZLuDYUqynTYDp5YY9bMtMMxsGHPmGrckw1FFQjQQUpQMGbzKNyDf7XKC8kiiw4F4RbXcRZzKVgYEGiaf8Bj",
  "key9": "4mq2EtYUociL5XJqZ7jnqKtKC8CHxqJwJK9PNGnBvNFJbo1ZoBZs8QEW4mt1Vph4CdyoqYLVi1WpBMcikfvtZdq",
  "key10": "9hVucB86BT2XNwhiLDnz9HcucKeUJnStgys373YkAvisTXQjtet5i1fzrmGNTG4QAVCRiaHuEUgAinovbDkPGho",
  "key11": "3c6LzH6PUAAPLgL8mABcszSuryM8isLfPnv1ZzPwrL7s1WK4756uqGXBAWkCpm5ZxHEwSTjwqKmB3UVLCEY4EPjN",
  "key12": "5YDQi2fhEUw6iaoTqJ3Fehc8rYBXvr9NMGd92YCBeKn5M3JXXytRxUvvMg8MZHsmDDirKxPJPA4gPXUxr6nFomEz",
  "key13": "5nFRa4iKpg1HXwdSPn5Xq7XAdDhwmirrEPHsEik15EiHkxeeGSKU8hUSnJ1QMGdzQDK1NCrmcyGCZ9JFSQbDBBQV",
  "key14": "5EKkCnGkwZyCVnQPTtc17UP96WM6WGi2iax7WfTWzxAeBiwCrRP21z1qXbPW7hGeswv4TRqXfbMj9MYn4jJ9CtQ6",
  "key15": "3Ttthm3BioD7AfzJAUwKPU8YQ4rq2ghpZQEK646qGChWMrT2smQXUqb4WF2ArnaqpipttPLuuTNugppxKJKyavNY",
  "key16": "33kgPTCVoJbYQcjmDakUTYPGqEfYpy5ipgpeMyFdGZcm15bo6NYkjY9AM6e88cSUMGSjjYvPGHPQXsgvHQkGhrG4",
  "key17": "3ig8ApPUgcSAJ3jhiJMVDF1a347sAxLGV71dKT6NbbgkJ7UVXqEEt3k52URaqd6ivNSe64FKse3CTPozXsmZt5Cu",
  "key18": "2HyYrALBNyS8oGkWvpMbyp1pQLXgLjM63Y6sUvzSEnHu2hNpiyCNXbg1PP2Fh9USJUmKJUtHWunjR7XCpZK32UjE",
  "key19": "52Q3k93oehe7wbP3guNUojoUHZBMCb5FK6TFTRshr7FF8Boo8aTc7oqxJt2jzuUHqL4mhi6ehJcJQyiGbbbRLmwJ",
  "key20": "4fA199z4doQ8oA52Nkck9u2PU5jJoS6EVFHaBNZaKoRkgopwWL73m9ziXgVzcwBoaQBPN7JtxKLDpL8NeUHvgCi9",
  "key21": "5Y1V61gpyzvtChCFC5Rbec8uyfbxb65DLXuU2ztMqBn27ZjWYPw7BPd1LApH3UZnF6vLyPsosihPibMU2K3wg8AQ",
  "key22": "5wKvZ7dRNcNCgiZCpLXBRdSBv1HHCiWzFke7cVvHbbCZgUdMAUwdBCWQz65Fn7q2oNt4tYY1gttnAiUk3M4DCP7G",
  "key23": "55ir4769LRgEfH6UjEpZ7DyNEoaLEU2SiTCYmRR5QDRM9NXpZRCamcr4GdKKodubWEy1qgdqq8toprmbD2ZvKWr2",
  "key24": "5pdfYavMYowF7ZEyQLuznP1zmF6phqQLmBB2DnADy1tKbEWRLY81wFW8M9R7c7rp73Wq6zyPd9y2Gx2373EksyEn",
  "key25": "2HQRxWYjMztXyEPE5GmwrDwNNWPFsvPguTKAsnMXnfdo2hSXUX5cBCNiEdZd7BTccxWuYHMKDCNT3TwAXTLvFPXn",
  "key26": "pxj7UzpCTMoyN36mnjXa6qpo74GjF9if3Le6MgQyWqGb7d1SZvXvK8Z2hiQ9uCHBRDeF9Vs5HdBbFGhwJ2oRkd3",
  "key27": "2wSuDV3y7PdTnGNxxNPvj5YhSJshcQCqizRdJLtdr16fSnbikWqcDowFNAUT43ZFqgKE3b6HFzpRheesXcPvEPep",
  "key28": "4fTYN51Th5hF6EWrLyRVdRwYZfcjEwJtV2rXLxTqajADTLnn9mpGP92rDfGxXtdZnnRk3q81AsM5rTk56aBosHvt",
  "key29": "5eYwWXaNUxPDJHRbqPsGNoH7HFwHDaCqF6x11UQTPCN8jkYmptJVdHBuifVZLzGod7tVSadANGJFQeEYMuoGTnZt",
  "key30": "25f74EMHG5xqHBpnnSKMm8g7WAjup1Vs4rKk2i4U1jR8mfaN1jYc1gQqhh7FAvq1uBpN2khWVX3jvm9EsDqUYyqy",
  "key31": "5AoqKqzmihpBswZqTTtuAdZM3akX9e89TU2y7eHRV7KHLxVN8W1BovkXmXp7CdgduFdm9ZHn7R3CGHpEjv2RKnfN",
  "key32": "2C1FAzgNbAe5b9rmpwGmvkaREycFsCAydJAmgSf4an9vpUz25Rxaac9giE1Gs2bcrkdrw9mdmN9sfJkoyn3VjCyB",
  "key33": "3oR6jccq373CWCNRnC4ftRYG3mbrgcAVXTyZSy9SAxyfLJ6jcwwFoaKLb2VCeDtWxhfco26tfkdyAdFFqedkZUH7",
  "key34": "5uLXcNYBKEgNg8ACC8e2jZwFL59FXxxCFFi5RXsgqpyzBo4gNUiyBkn7vCgQ2TTCW2sJ4YmSuxMY1SWMVXB63heo",
  "key35": "4pFLrpgaDmFLbvoZbfZbS9qtp6gpk9aVxpBZFqR7JiCERyyT3i8pEgUZ9E4xRrAtzVWgfLXLeJWJmrrr4MW3Fnvu",
  "key36": "3DwBGZ9u3yf81b7nMUZ2FaPkvTUCdqVwQANh6f25xRWcFCaXMu98qqWupnsDbVDXqEuyDWVxHMVQdVpMbfnAuscA",
  "key37": "4Kx8vHM1eiyGbYd3aV2zR71RamNansHre3whHsVkzrsZZMsNE9JsZVT9cYLjpFdzg2byqNrZ8xkjqA4q3vVRGHrw",
  "key38": "2JGtDL8Br2Y6Cwi7j32fVLTUQvrWtCTfmPotfwUgRYNJ9Kmwwcj7tRZRmP7gk77KUwLUQVkj5N75ir4pQ2szqsCP",
  "key39": "2G5gCFQ4j23tSEdftUJYv41jyYzQTkKyH9CFmQgQsCVjD4jyE8MpvNRQiUJxDvirCMXD5EWgVXwSNYaKcGkPbCds",
  "key40": "5CD1JFvR6eEDqmm5jHPHQHC695ptMPgZJV2NdRFKS3Sg2XAqMKZcMx7soeWgcvFLGy1kt1P55RpwLktoo5KnUVr3",
  "key41": "KxtsiFvL5Xz4TEdZFkPVBvcSxMWrpf8yeWkJ7HV5SARxXvztGZ8oV3Gfk6Px6U7LLyYoXyXTZMbao6zGvzYuJC5",
  "key42": "vLf1SoMWsdAFk5vsucdJt7pE4h5Wq9XM4EwLN5DpxzZmp2f9ELSZtiPQUriYwnMfyUYbyLbLQukdg6BxhAsEX4x",
  "key43": "12ituPgdfmq9UZuSMtAvw1nhZTg9jx9AsGVDRZEqXtdjmWbouD8WpjRBEr68H5zZvYds4UzdgLv4NsHdQg1w3gn",
  "key44": "n1xJ7UhdKh9EreNEtUmZTGFkaBxvL8ddn8qx1jqesRNkhc5JSbsNbS7iogihXromTtXePuPf2NmRU1AuZxLvmN2",
  "key45": "4kWYXdRv8v76mZ3BpgvgkZcceZCB8sanbURdMaDWLdMpyMi8C5Q6rJhJPJKgGkjXnwyAoSocHEXwQVenFFd53B62",
  "key46": "2EwMynoars4b1Xbs2YzNBV73GBxv9Cb9ump23rLpwSES1UDxcJRGDDBL18ySEqqNgubFwgYpsuxuBdoznqcXzcw2",
  "key47": "DzUxfGmzgWohC7A1h4483u5EvWfTSAXATGbo2JgigAfPddyTwVi2889prS8XYD1pmQpCXSg2MzuR77i56GrnstJ"
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
