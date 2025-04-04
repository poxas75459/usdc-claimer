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
    "4uvWeyP78SkCDWSLz41Fgp954fkFYfPmymNWA961BdAfJfhx4XnZ83qZ9JbypamKqU9G1qwmiWGSP8pHmAaavvRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mx8HfD7vZLsanwVFNBLHzk6NufBGoGSTrQwajebCBHwLXCpKjGTBy4jizQigy5WQHqahYXKc7XiXrsgyUGAHSM6",
  "key1": "3xk9c9DTDTYCXTPxU9Cuzkyh2duiDBEyfp5zb1UH1dNXWnfS2oH6KGAp8hKbwMRzzcHnfS1WLU7mATYHKA4NidhX",
  "key2": "4Vwm8dQeL68sxq3ZgCpfQTzFeBzKFTqZZY48QUV3E4suyxP13KzboFxTGBZNABBuxNrP6k5gSinUHsZfhcEiER2s",
  "key3": "5ND3Z2iAeALdWTHo7B9CbYMKz1JhaAsmeFiLUGkybg5WKQj9YgqmNBrEkp3pSbYpsNAeLuqgzitcTCsVk7qtzvjX",
  "key4": "56Eko7ZtoXdS8nAPPtfZgxY7TXbPynerJJtRyuyjDakn9xRwrUH2wcbKr2HtPVGaNqnRweMd6EqJ1zr1otJjHuAA",
  "key5": "5F4KmvHHXau3tpvL2nCuCsDF7XWhx1g9MHT776NW9f1Ar9K8bHuNZe8j7SJd7fTWrqpSACWgcbYyZuNg2N741scE",
  "key6": "3Y3gTSJiycQyuqbSpvp2kYh5VkYLy85z9zZgdNhbxRf37yF2pgqecQKp6PbrUf3UJ9iZGceTiJRjQTCfwJvjLsM6",
  "key7": "34hMCjZxEzNqcbhx2zhhfSeEyvYJ9Hw9am58AarX3Ri9FXkNuPnUC8GnNaRYYLJj77nJmtBSDQXv19kjbZw4K8PZ",
  "key8": "4q9HKx4QQDRc5UMKdXLzT7eMWTf3AreYmPHDTx9oh1f1dKRSU6L1EiqUtGoXDdCWpKiLzbTWzQ6H1uSAjq7xiiZn",
  "key9": "57pfzSGCe4DY7Nqrp2k3EqQJ58CSQ9hme2GC2s1jqphvgyyHNiA31h1TnqH32DrSxRxH56osFBA6dx4e5woGPmbk",
  "key10": "4CnrU7zTrXw8X3odcr3Hmty2o1cL6mRAazBqUa25dQLYUxQfY1S7SmYp8MqVuAecbDw6H5eW8owa4W17JnT4VEjW",
  "key11": "5GiZRpFYrTuPmHWCR6yZPku4p34gdANtkx5ZuLEf4cmGTFDDr24LYvgXiWNYPbgBN8kppikuKXFTp7MHYYv9Q3VF",
  "key12": "52evFRWa9RwywoKNcvcg8qJYg3fPA5J2ZhX4D8FwXyxFA8KKcq2gVfJLqwr9XvrQUJTAmkh4arSKyTmVwVT417LB",
  "key13": "4giCqqhnVrTaNKRGX3gypPhGWaGfpCbzDifuW6hgjQ1Wq6hJ295yVYLJF8qjmDZ1jjUvGchGSde6vYY7UrGi3rwz",
  "key14": "4JnhW17UdyndJLdqQygcR6KnrRLMPSE8phJKR25zunu4k14VhnTftdVASUnsTCfdZ9uFZ1BucRbFwDY6uqBxSj9t",
  "key15": "2SdQBNSvqPNXojATQFC3ymfug6jpiHfDZtyQNw6zD9k6iKAoNtGhCQR5X4B81NWqGBdp6o8Spw66aSpiNBMPs3Z9",
  "key16": "6p89d4x6mS4bS4EDQwLFzh1CQy1pzF8b4HWrwsnQLkYKEq6akisg77JwcT1RWd9SAt7hdVrNiJTXEQszhrGywa4",
  "key17": "2bTGP7uHccYQ8UGXLES2YDGqH3arxkn163gCPcfYnKtkCC3shTQirKu5qq6hMAmAdufoMZeYFUzdVBQJfiWP4SAL",
  "key18": "5y9maypbn8nJUFsBb4WzsLhgfAPpXXYjKPGUuQApQp99Fj5jXbTmJFbQdbwRr1L6HPHEG9XwhVe4UimzxMGAaPt7",
  "key19": "3jSjtwxzGtpoyjMUo6QcgNMNtUND36ocgUP9Ef23iY67Vrxn2BotFvTX1sFqzWdhJ1viP5QyqFjo2RWs5Bg6BGFs",
  "key20": "4ryv5Jk2ako3dQoUdGGYehEpu6iUg94Yx9RpWMA9kPGNgzX8gN9dwrbkCmZKhCLaenLBk8Bmb8ntwCCY9YsWHvSS",
  "key21": "2xuD56fRmxwzXktrzF6V2ME4YX7Sui9imQRxubeGuHJBAReVAZhLnTsAR3DeVUYS2yD7c1x2jRgJFbPZBrJ1Ke7Z",
  "key22": "3TXcXCoTWtHaLCKQJMzkbpgw4uby2M6VJaor32PbowiAGwoYnS5HbhCdxiEWe9STBoPEGyTvFTg5XfaZgoh9V8ZK",
  "key23": "53mBEEArRaPjX6T8FVSHXxbCBo5KY1wfMnrRHhkz7JTt1JF3cHBHHQat2MsAB71YJGfeRyyZMCoTVSwLeRJZmjcY",
  "key24": "2heGrhPk73aKMzwcanFjHjcMJxeNgeCJbfzkmUCDKibmPxWvbfHM3DN4PRdRahLtNyF9rjVRUsEEuWXztqvg3NgZ",
  "key25": "47uCs7z7hpHNng6bMdUYLYvinkkakBd9SvEsFMCAtegdsY8QfvcPDsN1aY3QSM1N9EXF9hARWPZPTq1DugBhTq8H",
  "key26": "5DKKkoUThSs52wkP4MhHcccksNGPgFxpoVZ1nqoo8p48enoehkmcDg1MmdkSTPWJYbgF2oFhLN9PSSkLDnJ8g6xx",
  "key27": "5VLYdR4mMyxKo2k3NTK61zuwAJ9LK4bMa7RbyD8DpopeZKHMWVqGoDULGBL37psARGW9aXt6aDjz9RoYsqXPSse8",
  "key28": "2gcvM2wPdC8W5fRtcaiufQnPnhpx9XqLHraWHAQVqiv521LtzEnnJm1647h1ASySNd7MYeHYwqCMdbZjNGeDTJp",
  "key29": "2gYnHHrShQugEhwQRRe7ibvscpPHJfvt2gqkDmECbr95mi49J5LsFgPbsWcg9mSmeVFX8fTiyDFHtA2BqVrcyf8b",
  "key30": "MrSEKJNRp7NTrNMgryP4MmrgGDkchWYDFJUphDL6MbkxjwsWsv5pczwKWXw3w6HzHQtcD9NAFxfp4wDJKdkpYD8",
  "key31": "38GMKZ72qpmXyWDQ6xatQ3PY6gi419S2LMamf1kJnUDzVb9L7WnTR213qJCYgf3g6xRFyMuZiDMVJzFiLeVEbNch",
  "key32": "5J6EdHtt7LQibCPxuWyHdQgLY9EYCu8xkPb14hcyjSxAfJBZadyeEN8vveNbyDTemXa8RMep5ZyDqiG7R5q2jUbf",
  "key33": "29ELUHAmNhL2xG5AReMqrrikqgag3ww71oMW4e9xbXn2kjKWCGSxRZdqymofSzQ9S3YKQ5RET4BVsWw61YhTfzBf",
  "key34": "4i2biZRKtaHoNVzWU1eaixLrbYjqnXakiQT6U6KTPBUBzrHqzgMepE4LtX7u4cmieAtLTu7nNB8yJP1xFGx3o4yw",
  "key35": "3ddAEmZXnreL7vTLNAMHytMADLfm33CFGAEFPkc7hTg6HYQ5N6WBfUaCxExxc4uiL9fX1debU24crrGe125HMWjt",
  "key36": "57iHA1yUqYYtqeUA3GjsX5h9vtt3gFeVqM5KtWDHw9W6dvqKN6dt7Zh27gfPkgrf6wJjAQu4Hve5ZX8hDfni17Co",
  "key37": "fTZPYeYgF95a4FiPHCoWo5CnDfbE76HKsQQRJ9S483E7uq5HGRHUmS9CaeGq9ZBTg7eefr7Ju2P29tUGP3tu1Ws",
  "key38": "fXhR7mKNkp5aGDzmfvq27rkDWbpdeUcC34zDs2s59zth4nQWN1cGC9RDZ1EkjBVU2MjNpCvJMH21MTqKzwRQzDf",
  "key39": "e5q3bsZsfMRS2YQRCyexrpqxiPy2HapuBe7ocqjnsmzboML7RoCY1bFGiyXpZpcy3kJS3NKshNJCDi3TxuNA2Cn",
  "key40": "3j4WxPFddpg7s1VoEaNu155bVdmrzdhaGyBdQ6ipU3D6W42Vex3evPbqxYbYBneLwUdtmHYQsTdioGb4aumeJkzW",
  "key41": "2eYbJo4QYP9q2rY4xXDCe4VXukp4LwKrWai6Kzpeogcxmv1ZLjbaAjk3JWX7brncsc8wqcbjagnDXubuGYptCz1U",
  "key42": "ctjTe8k53VgdwRzLmx1F63fMJmg8BTM7fRDWQb98Rdyhmc4AH2CYwLGKQLbBkTERPmz7xJmGsWHHpADCJ6spwa2",
  "key43": "k9oNejQm7NzfdaEjmdDXZ4Siv3zrBpgrUx8tkcUcDUBmrwtYLEnGNzbUL6aKzVJJXTEosiodCacuEo3A2jua76D",
  "key44": "44xJS6qUW1hrXmgjhrG5Cnhqg3XsnnUdJUZEhZW56KPzyfXdXhKcds2zvoWFf3d3wUjQsAyxSDhXSVSf1TbWjGBP",
  "key45": "32Yqa7sEkapiB3vbvuNzsUgXWPN67vN72DLxbcaDw6ERQpwuVg2Sj1j68YM8AhNBZF5PmJNNwCh5BYFy2wjhsUMN",
  "key46": "3DuX2oWnsLZJTMgnFSG9vUjhaVqgkuxTeBSE4yfGwnggaJmbTj1X3EE78xVC3Cm25BGyqTxAqmzPHQYiyD3W6Kyt",
  "key47": "5DNCrooMBNg4uCYFYFL5BzTA5WBUX7KkF67ePQYBrBNfSyGBxsbh4gFQg1jF7uxiCK4KdufBShU9XjYrY3JJMcta",
  "key48": "4yFor1AKPrbXm7afH7Xr8Wep52beuQMkk6La5F9tTihR3kDTJ81iXAK2uNKkeD911U5Patof4B6svnMoPrWRz3a6"
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
