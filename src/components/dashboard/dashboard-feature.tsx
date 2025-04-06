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
    "8e18ynXRgbFTBEbX1cqp4dKVVytGz99ksMxMEFiXSD2beRrtQvJ38szUXH4nUCTYzJaepNMAmdwqn5tz7tsb9eK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43XKvRWkycxyxQmk4w9Lf4uqvcjVvYBjnwpSEShqM6z4ePWZT33CJmdiosQcmfBdBX9UfcQkMWmuoNCBRii6t7G8",
  "key1": "YasYRVNTk8hCLe38u8F4VpwK5jrbfFSdiCt4mTEGsz2jdsGrPnEkabLHPhwN88cLfuJBRbUBTaHJstJo4s6MT8R",
  "key2": "5RLaZo7go9cRSPubc2dvADgt93TkbUinCk3Un6m8tv3PxxUxPuaq1gA9VeU36Csn4eP3vPRSb5Z2aqo7JxVdwzhQ",
  "key3": "4XbvKEksRnQ5gstj9znbc1z5khMoTCqw3tDYueG9C2Dxa14yR9E14wHqSUgfmhYKfu8WAUnRpN9E2xrt8sy23ggD",
  "key4": "FBA1VfvK1fyBWXWcwr6SjPrYPzHajkU6y4KGgifJ3UtqiJzirttJEMN4aT1L4etr3fXtV14XRKt1Kgi4YqXCtnb",
  "key5": "4Vc5D1P8i6JaUWVSZffLbCSr4H4Bcx9YCfLrKj2Gbaice4ghX2HUxKKaLDD8WYXxTn7czYhKpQFGiyuYyE8ozBRf",
  "key6": "9uu7oF57E8fqhhmb7MHE572z3jXMXAH8NepaAREsXUHzGux9ZQ2cojt7nNfdtqSHfaYyyqwoJMbLmS3Nnv81ysu",
  "key7": "4wT6CSjggb3o1WwEfBHa9i8LkokAmfsExPwkBDpC6Hjy9qWpzLM13qwDeLWpUuF87sqsX97qbyEGDYCoEtbdkojP",
  "key8": "2PLV4P6b6Fc3u2PtinEuaetXba7aZVGMQjGBBRq9CLJSGKj537qNNY5gvpQbbzPcXoCXm749KtB8q8DmDcivKtUD",
  "key9": "5VxzAyQfvbTQ5eJcxrgmfGwkSMNNEqyTACZvmrMH5XwBk1TSX8vmypRqzQbgfqwDAa1HFscBRWpWBQKvruPuM5dj",
  "key10": "4DBbPEK5ePBtKvBFqVHaTb7fstP3Dn2HbQKfCE6vrbv96D9dPZ93arBpgGBwyTtxxonypeycgL3rygsLXMzkGB3J",
  "key11": "HECNYPDNdNfnKudEomc7GJFGHANg1oPyXhcGRmQbTGHtvjDvtcgXMADqtW5zvtBqsZPkAkBhzdgogrqFk69zYtQ",
  "key12": "M2kpH9T4PH5uup1GkPE48fHxMYBzvCc7ZK1pHvYv1WrJvReSCZY8N7mbvp9nftKXfTDybsAuqie6biGkFKGx1m2",
  "key13": "oyFv5kmkMqbhzegMoKiR2uHbsnwhs5qFu7HDV1AQgJaAh3SEPKAN2yFb7fgTVYWtcbbz7rAqFZtyR8oQyTatTWg",
  "key14": "n8DPko4zYRwE6zes2yFjJzKfnLZ2rwTtDDPQSPBvG5ViCyRgurBXgvgi2WvaULrLJJShLJjJiQ6gpgqXie93MdV",
  "key15": "35r7ip91JxukwTF4K9RVGCa4kAZAQvBZcQvY5XdZyRwjp7XfeTivwvPTQSUUTSPh5viFTrzdbaSH9de32eSqvduf",
  "key16": "65kphdcUZGwQ8xZ1hcqfS9JtFhEpjfizV2NeV9wWF7hgDAiiM9jxLBF1CkbjQpHL23RAX4Hq5RvD6exWauEPteX",
  "key17": "5WhRxCtu6VHNGLiqoApvmZoUfSWeTmgRxjrjwuXLdTETrRzr2SjFT4GDoTnnqBDQMursdyXFuw4KKZ5mDVV2Z4kc",
  "key18": "g1bCjuQt1qLvXq1yKae8vgETWbmdwkWHgRobz6uwZbe37CFrBc3NzedNNBtmBuTeBTu2TWpdDyPfrLZxu7midGQ",
  "key19": "oLxxbptDJPVnn5gESttx9pjkpMGcEjrJnC53AV9C9ZQiWSxfWNMqoDjsugniL21WGFhp2D7zDDzwkurtMPtW9Eo",
  "key20": "5PKeBTLhZ8KNDPEq9hhh8EijyrPnx9JnMYsrJ89Ceyc5m3mkcAt5MVuqFQ3qw12aLfFPZCQSNTy74tBEKWNzRnAz",
  "key21": "3X4h1kaUmkmkV2Nuabe4cEGNy6STU5scQaAT9AfBXFmAM79QQ9WtN9qvgjVD2XzFQyn95fhSLrj1JHbuomswiyHQ",
  "key22": "3K73vRvPetp42NXj9HnRdF4dmmNsGLmSr62DjcHvEvSugGtpXchtf2gY9xbd9ZsQkgaBPS5sqoshd3tw8HA7KXem",
  "key23": "44ZgrfnL8iR52wg8RmuugenKap6j4a3N6aaPca7cSk8CW6q4GhGy9A7rKfEgBbKQ1AYD47xHHLcbJMgjUMNrJeCk",
  "key24": "4ENBTiiszgUoBEJPc2VhcHk9aGvMdRWZ4eTFsZtwvjKGjMcJ1uHtAD9iSiDbdKDbiMNytH1tvAap6777W2Uoc1Ni",
  "key25": "3oGXAQRUwHratvk1D5a6t7QTLFU7mLvGmJR2eGpmWEDWiWMXgQfjjyQVLJPaahgGFuQp7uaecG6HhzTTPN6uY1WK",
  "key26": "5H2FAdqec68doGPEnJhy5kNtHwSC8XnkLZw1gV2diLJRFBtqYgpLo7BHCVi8jqBjS9VTJk7XX2KwbD1zfW1voyi3",
  "key27": "3dJkAEhXTy2a8vqstJ3pWWaAg1i9trJ19oQdyEjvAUgxkNTEY8qG7CQ4U9izL5Ng5VBQo8jqCQCV8hHKVwMs6uUg",
  "key28": "4JwBJ3yy8KQBU2brU4UPwUWpg1VwXSutAP6krbdXtt4kfaVEwm1QBPNqypmNiqSfsAuH8dhH4ego6HCv8kQNFTzN",
  "key29": "3YJFqdepm3J8aYZw1ExU4Pk5hnkt8j9Gk5b8PAxbVTnWYP93dMPfgUH6vFQV133SYHRhqQhYGhGRDA8nyiWdraEZ",
  "key30": "gPJsFeE49jhgobb72Zz9XDhJ4h9at8dRhx9XWBjpGuu1yprJutc1ovXVJ1VrUPjR8mEWRuQyARu74nBYs8cQT8f",
  "key31": "CCn9D4nyo3akZFnaZE5jHgxucNehvy2L7MBBFoYdYKvCcbfTsbH3rgNzy25uShBVHv3yemhGtF2o5CzHvVNSb9r",
  "key32": "424tw8iooSQ19K8Y4tLxkhDUUPWhSsvZHNKdiMJkLsZNGYrSbsmVyk9f6hhZs8uQnYrySKxJpb1MgnXP4XYQ1JZa",
  "key33": "4jDsrLGrtNLVYMLRDoU4M7f1tookavtLvBwVDVhAiYdomtsa9CpCquut9fSztSAKofWVfJKNNCrqA9gGYXTxN7ds",
  "key34": "EKVhML9zNaeu8Qe9MGJJLLbWj7tCbnKFsWMxtJm8sSTs9tMXps2tyKqh7GtRwaU53HeSqQvXTuSbZbS1TjjKmzL",
  "key35": "3KZNuPkg2KbBC94LSGy98SJv42oNxA8hUrYASZTMJfzUgw7Vs94wPBDEnaPkmbs6PJUgWXZUL93C8kdUdSzxnY44",
  "key36": "61sNrvuFzBKRytTHDErS4U1YYiopYDZjLVMYEE6DQghup1cXjhc3pR8gx66bBZa74gk5e52BkAWXcm7H5hhLjbiu",
  "key37": "39MZReLs2HohTzguHRiBx8Eep4WJ9mucyhet1758vwa8M62qFk8bNk5rYLmtUNqh6pKYi1B9RvNkHfcbTCf9L4DJ",
  "key38": "5ECE3qBGA53ocxoZBThoaDbP8jWhfCi61Lj1QWsXy8hU2Y2af9zJHkpMSH4r7nn9CzKja9eGbrxYfzqQPWDVufR4",
  "key39": "2ws2s7XzqboQmFdyhM2871xhxJfWPagRQ8BjxisrVSPDSpcaE5e63SZYaGBVmYxmaD2irqzFbzXDWPMBPERddKre",
  "key40": "1xXbAXowWRLuaGR47DrPAVFBGHeWZRNoHqRhiAEoZhqUpyrgpGGtNYxkZLT5yfm3XSFKQ3Expgj5DSPqu58S5YX",
  "key41": "4mCkVuooZojXf465Wf924zcPmKcugCxVs6xLMZiofvioD53pkzSXNLfvT3rzkstc6SsBg4pbq8PhTzaYyg3wtvCD",
  "key42": "3NixuDFxwpPtKWwcraFh2an5QwtqrEyNBSWd4erh5Yk6isVsvvSi766GNjxaMqPsFUfTuHfYbtyU1pMY4Fsjxarw",
  "key43": "3CcbWBmwEbcKasbsga5RFvMGrQWdCu6TqADKzoaLp1r4Cy6ktAfhqSSwLPghGxrvokKTfWeKdh4HE8DKwzv644jE",
  "key44": "RxQB6zZpn3LKEVwVegfZdjNUtgGycDBMh4iSH66zAnGsLAr3rkooi8vgLXKdh9aqg3wXqJziznAfzscphZCizZo",
  "key45": "5MURWcGwD2M8DAnNLvZeqYcANCwNBZAmDEi7JB6V91zbT68qahT7rGPbS86rgRLnwJReLaj3vVzQzGpY785DFPNg",
  "key46": "3xKtqwcjnRHqwuiwce9T987iqtK1f5vmf1NN4S5LWKTcJ5ax5Draq7jWytXdyKomSviz7ut6d4j1qQE4zBz1zYey",
  "key47": "312npTNA6WDycqWVJHd7JUB4Hb7rJ9AbkWe1ez68rsf16CFqYVAra1k9q8HHaBnWGsnin6STer5dewaZbsd5s4MA"
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
