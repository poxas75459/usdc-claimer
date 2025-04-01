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
    "4dR916CssXC3GQjePGk84o5SdyAB33aTPkd7EEj6MXH9bEzWFboA3AoGh69FABbVsRddGXrUmwtJBUsqcNCRsXoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FCZ8v9HATum96UjLqVRKWuwCUjAVYd2RJ1i6H337CmKUfPeLE8SWcQUgSGSzxpkdUVLPvB1T4TkoQ27BhCjRXKy",
  "key1": "4eCpbRNYJJEwoTue6xtQiMYjehvHnDzinzwTgvdWcptU1UWdJCyxmBxg9dMb9nGCGKs4DEmPUySdL3fzvsnR3UDM",
  "key2": "4mt3G4GyrDxJ4mBJdxKeVkNXanrAVs41z94jM2zZyo3H7842WcYmEtymYqAsxkPyocJgY1L7d2BP95Tf5iVH5CKZ",
  "key3": "4biPq3mJqsF1cewpr9nDGSsCW6oC44zhPcCLEPVyby1QuH9PHe31BArkEDdWh5g6VuUb5GpzaK5MKR34B2pB57yd",
  "key4": "wHiF44oaV8TJ8yTHjw1q2Ph2Ss5aReisxnjdihs41YLLC4qDbaLaaZhcDws2aSXiLpnzswmWbxRNg3ZrNfQ9j3v",
  "key5": "AEsAg4ELFzd1Tj7o9q6WiNQf8KNCr27vycTXEzVqP2kZtJ133pUxW1hwVLauzhQABPthY6zZr2a8gyDvrvdrYvD",
  "key6": "65oAFWf9yB811zCrUfK27VTymRVNyGgt5JBp9ruwmLRPjCMSSeaWuhvFEx9APNWGuCATJaqxWUCG8pzd94BbFcMg",
  "key7": "2KipU1BaYPPVn2ANZ3cZpsPw1GDBKcCMhgu1nzHFJRcwTEVXpy3v5WYTEoMiMMpUBvTkr5o9LvGUJRo6R5dEPY1a",
  "key8": "SUKfu8DYkbtfmEGaM9RdcNKcK2uKm6iEffdZ44D7DrX5ctzHupesKzn6GU5GzQoBJzRnbVgXGzLwuNZwSyxSXg6",
  "key9": "2oVPKWPyuFFzT4QYdY8Y9Z5KFCnqGifRZGV64J8C7EBvdrMHWXT68HAAFhptpS9eAZej2pWEXLAtZrFdxnxfBM4e",
  "key10": "2kRZ2KrdmZFfUQkugee3zCCugxTjREwvqBdM8vSUpY4mGCKu6GQJX55QdFoUbL915QF1ze12RBdy99rPvF4ALFg7",
  "key11": "259aB28HifLLb7p9oQNwx1vFN96eHAhyYgoWvo6ntH42JZWgkNF8U9PudsL37gHS86jvmmttGxWmBiCA7WqE6qQn",
  "key12": "5kj12SX8p1gjFNNZV5BrvqAsC2zvAB6hzvApttf7AsPGnhLHSP9D3KYV9GqJnsWus7QszNLZvh1kwxs1QvJmH7cJ",
  "key13": "2KSJHZUFJz2HYat28dJ7dPsh24h8FDYQ8oHaF2QcyvTKAnipZMX94Jcv8Usux5aVHsxn55ZvEFpaVJUUD2THN3xp",
  "key14": "4xQ4ZdRpcwUaVXv3ANHMmhsPVUoopyuphhb1nWDQHWX7thR3Se9GK19p62nBiY3ezbY9xG645tiGHdhiJWuJaYGC",
  "key15": "3T11r4dk25ACfqMWPokktXoTS4JSQwHLf4viVCZbnqN86VzFKDnTzLTj4CVvWu1Q9w7ugZtG6ewY954mhs9oLWYH",
  "key16": "pz4VthFzMBFwGJ2QxLQbtcz591K3QoQ9SJxbafuuhAfvgwW1vn86jqKqb6Y9X3Ajt9HMt4uEzBiQJSVBSUX4nBH",
  "key17": "5PxKKGAB4opsG28mKxyXtydnnwD23hTBNRivP1vTAsG25gBugjGYD7tzZYeaaCF5i99osQtzXieg6Q7jVWqpPx3R",
  "key18": "3D6eYzwuhEuDnpkwDR8XTSZAoypYcUxJumkHg8nvgxB4r8u6h4vRBL6eQr1y4cPnZQqtqjKLQs1ekTJxP9hzyp6t",
  "key19": "4SQ3Np84ty9BCsCSyzLBtLZG3UNCb6s3HA251bB7o3wCvHL88meWC1hzG95r9Uf4oCnjbhUWK3wCHgd2y5XhefJz",
  "key20": "5GTsYoWns5wCuxtiCmSpJ2Zpobpidr3wq7moeV1rjhaqy7frod9sV8tzrTM5iEbxBmt3dhhVMpcSXn9eqHxbeMVQ",
  "key21": "67m4bCL66V6fCvPuLy5ZKq6DosMbUgJtrK2CABULrZpsvASRqXmrjXQbUqCjvtuDdsawLT8uBjyTNMYL6rvWh2wT",
  "key22": "3zgWgR5CvTmFwKi2SyTtZgPCaTdUUr3x6V3cocYMnLGK666GBmU8xkq8qZbTP9BF4T73LFunEK299CDGDPWn1fJN",
  "key23": "4mdh6KzPNgwFb36hQfX2TD7BGrvjtQt1kRXu2ZQoPxmSHNVK7j6zzrfxnTGc9T81hCadayUPAzzUb6VSvpp5jnUH",
  "key24": "rMpSk1rgqLamD8jzveUG83ndueMXBcTpy3pru5SHEYFipkXUjjTcTThZS49w68pAjWTAqGNFm6J2s5eurDTw9se",
  "key25": "61uLEmRQcejPgrJvfcZTy4NpeihyGDSBUrRdRU9EzhxS7pwWxfiCSECzJMS1UqUd7Th8PkiDPL7TVZpRUyeih7qv",
  "key26": "Zz9fsGtAaxLNMF43rSNEff9syRcasPMT7PBF7hY4LSyjhC3Tw7e9YoLH2cfQtec4VwHUp8DPUFaSFsqiZq8Jm2B",
  "key27": "RfHyqKMjfZB29aZ5b3RB1BuqoAnK4MCP797iwGfcVAexVa3ChEKzzirTgDpYVk176LTQHfwYCADftcxJZSqtP9D",
  "key28": "5HSZx3J4rLZorSdqYm8FMbkbh7b5n68iu3f8X97sqf31pjpminhjQpfNJTguEhBaP7X8yajAhHk4gjDketdX2AjK",
  "key29": "3EHMwrPM71ttkkzGVHFvLWmS2jeJjtR8Wjfcs1LvXNYivz1eyiTS1vk9BqN2sWuphZeuKvwzeo2eVzHkFNCWNNVZ",
  "key30": "3kcaMHXgA1WHXVb8DLHJF6cqfuArFrJ3anLLF1a4V1iK9iZbSTMJcEKgD7QFxDVtfAnRwS5HQmRTfGkC6YVDXeMm",
  "key31": "4CwJcdd28CXp1uvJWBZj1LvPNiRUw2ghU2BNzz19Vw9DgHHsxbiTudiB2EH1XseQY5cZSPMkNTuCXCzT2WLG5xMv",
  "key32": "4QzdHZ6e6hQv874uQw5FqaQGobdEF1QFroRWYwZ8w3LS3pZKNym4xa12NGT9pNtheHUTxxV1inq71P23sUJCLyhj",
  "key33": "32bW8iarNfie8aNQMxTXFcXhaJQep7vLMMDvxZQKHwTmJhTLvHaXu53Fy42BBvSx95XhKtY1LWoaBC9MP5KWpXx4",
  "key34": "4hnDj9sKs73jrULrscDXctbPrhd8MnPZ46Rzt3NJGZhqrvnWLzWczD5SLVLY9HtMcDECc5JWH85xFa8wu6SSGcZn",
  "key35": "4bbKRTG7diP6e6Fo6oL3GfoQPboPdtyh62K8wHUkoiHVLou4zpTaMSjRYufu4xQdeesqFRWWqoLgyVCBwkrER16o",
  "key36": "4Uj17fsFGBR6BUm6hvbZaPMPmCLjwoPPER3mpp4dbafpwNVzhgpEsiBwdDNMvoJJ7PSgjx5XobKFTdMEWxhs7h8M",
  "key37": "27ETHBom59HKWaeux54c9ZwmufWppMFF8ymTSFgGnzYZynkuDBpF4R1DP25KtLbnuzbgeJUrG8t1bBHV8Kbe3kwC",
  "key38": "4tdBSSRnsh3nTTgQXMdiAMgWwqTRE8rvNyCuFbPuXkSqrUYtbtdQHTa5NpVxUiq9tbFWdZQNhX2ShdqtBgBAwHoi",
  "key39": "tp3RtWjANk92i1h9uwpmrRfPnnYygwpW2uc7854VQLiPYCBnTWp8BWCJX4Muctw8Fhp769JdKybwnWMogcxmNHJ",
  "key40": "zizTgAAqELKV6euxMrQkV1g46sUoTUTRp7LkTYcuEkTMvNfGCjYUV1p7uc3k8XJ24e8eTLLp91H2c516SS9iHjJ",
  "key41": "PeKnZ2kcCcPmjrKWtMPavaLJ4ebNsudkHMciH39WSvxEX7sHgujkGVQ5MtZpXCC9YjBBNZQwcxLyhWGMtdqgn3x",
  "key42": "3PJYdMs5SPbWQzQYHnZre2NETXME2gPFGKj5TqJMeuqy4mpyjtu6EDgsTFtBTWbybWpnUcDwb8n8R9b4VJFCVGoq",
  "key43": "3wdttbxYyvUrQqoXZFRRVid8yJcJpDqPGXCNSPta1YRjnVKCsehun9NAKHJxhhMc5PLisBb6succvu9zbhJE8Yn7",
  "key44": "mduURqFRqG9cVLFoXsxSy5mmgqXAydKfKXEYLig1vQeAL4PZLUydTsSiDPrHXWFWcz3nT3WUtgDxLHdVAryEX69",
  "key45": "32UCjk5ZCGtX3fWKejZYvbt823L8xEr2e37fqsSxAf4DbRRMtXxk45JoFDzf4uDKobaK6qoEU91oHwJcF7pFphZE",
  "key46": "2ChHHf8QuAfnyX91wmisp1anjXGniJAgdG2QZmi9oYSh9LHCj2f4s4qqpjYkgVWRmZpcAQsTgxaa89Z5rMJ3vrUD"
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
