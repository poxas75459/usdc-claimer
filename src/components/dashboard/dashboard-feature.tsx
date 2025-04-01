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
    "mm5onX1amF3K9ff7A9jnvkr1egh1nFeitonvrgn6Zq4QzkGPQKDMAwE7rjTBwusNLvNo3uJYk37njjXL5wuQAKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D9T5FvJ6B4KSpLjz8xdnJy1piGYvq5JaoyvS1BXpxsvo8gZXSo2P3PD9L74cqQm7Jye7MqKUNu6p3fneGcypmWY",
  "key1": "51ju2bhWEUWhLw2G37ujJykbiGknZsLAbECCpunLNqnouZLVDWKxRZbCk7JPkgmdKUw1svpV7h1et3M9XEkFvWt6",
  "key2": "2w2n745JDMKXf14uxT4KYJVSkCWw7ayjnDrW8wGu7z5E41mqo7TwUBu8uSeyYLGXFDNwpwX4787JjtpQBcxd72nj",
  "key3": "4sk4yK2bvt7sA4dH5kp7ZfeRB591HXACph5pE6sYtJ6e4Ahw5i6tSrRuAMCCory4ZsVJrVLj6Np5NeuaFYj56JW2",
  "key4": "5PpaaBa5XokkcF2S2djytgKqt2BJyqsWENSrmUGYKorSB46N3oPssVNKYydCBmmjGjGgF219RfU8gw9BB7acvhR1",
  "key5": "5kPU5JHLk7PJUcRaz53VyGXZgRWVTgPfRCRCDmgLXXptFfqDPn1AwV7d1KLGSQfLtmANLioBJB3XXYNWjBJRHLHw",
  "key6": "A2n2vweTQQDMjfdS27KcBmBzvSqXvkvgCPCaLNLrgErGhrwujbv8zigZkTzR9AKnXQAUHrFYq2rnFPG7dg9Av4e",
  "key7": "tiLcnoo8sUvXYpHze9BLZWmcieatVvcywL1iKzqUwqutEX4BT98jFEPcJscmKjNdXqarALZmganwtoYzZxxJpi4",
  "key8": "5nuTLv4PVejnQ4JAJkh2ZZGMVTkfqjf9bLaqXxVusQh7xRFnuJptMizVNtXsoXX6ZnkTvuqZX8A99iHVMLT3yH13",
  "key9": "4A34Ssj1kb4oWgfyhCj9ujSn9R3n3bzsLSCZAK4FWRZoeUAKZNQR4w7rKnJmT8nXZm4qkVK7k46h8CWFXTRdoVQf",
  "key10": "3QHRcJjM4zimn8XfrSA5DANasAEkkLKQNUKJgUkmtoxZQ5771dzZZU1xPRkLZQVJJiEMwub7aSCXAiJco3PYijRY",
  "key11": "5LrXeYfUcHetbHFwS6hZSsfXHtRVvH7V7qM9tFkFr4zQ6QmDmEPWJNKUUDSYHvLGjyvFGagYmoesLfxuey1mQLq2",
  "key12": "23xyFYJXa9RH7XhgnYP7gb1qXkZDXstcJQ7VYM658rh1fXG4Xu6LwExNPM1ip7zZFwQ6jbo96w24qvc9UnkSqdSb",
  "key13": "5AWKky7n3gLokMsbeY6NSC2tX9FQSVmNBahGseioA4o5XJWsGQckfeAMW1JpebNX5U26Ddwnw93SHuLyDbyRMtvB",
  "key14": "65cB79ZeLF5vV9MkzHTh5nfxmWWqZSvEvw1SywL9bEkNjRewrLGCKs74aSxtQTDtvxCGx8jytJHR4veWwNd2oWYc",
  "key15": "yFxY7SUzuAje92W8LRMRn9wdgzohPtgRy6xmCUtBSVgQXn7RBqEuapNaa8e9W1cU4bFxdh6N6WpNFa17y5VbEQL",
  "key16": "xZeX5ws7qtAhrHeB98zfMTyvQSSumM7gWkmDNCbWGJNYr2rkrfPdYL5TEbXUugGRcAiifUv1L1XPkiWtyXq6gck",
  "key17": "5KszLg1aZ4T6sVbhtCUWaEi7dRqG9tdi4AtSrtkaLKvHoig9wmTcUDzSWz67ot2bnWpP8LFg1kYgw7nZ9ygTXyFF",
  "key18": "3qwZEwMrXYW5HQGqjAzcr99MHfAs2LXb3gmedZ34WLSrMezxU3qAN8Zi7bDXuXCc8V8a4j8EDxtWLB8FXDUffCyu",
  "key19": "4K1xk4bp3mt5xof2qBZ9aHM7te3hvUhWDgvEMucFEthJCCqEwMN5t4V2S9CNM9yP5EdLS5pSuhbkXsdV6PhyX2Px",
  "key20": "3NSVeLPDtboRNiPvzwfitFgCA79y5eUoh8mqjzMwk3RwvhMhEFhbFYdNCtVponoatzYJozZEsBrxnSXrm77q1fDs",
  "key21": "3w8s7N7nK68q4bGnoY7aBoqCyz7gchJQokd89AoBhnAE54KCph7DS9EeAVdaU6JKdKWtHyYhZQQPzhsGZpXwcr5G",
  "key22": "4GaMDVXJNbciLbYSBkk3ZTFcXgSeM8CWPk7Cu9pVxjygMyunCCCos8SXajdh9wwVjpZQ5jPGZqM8g7HkhGDYryTb",
  "key23": "5qCSoVq1X6EhS38doqeVhTRcfkdJa8RQh6GVe4h3JWr7TJ4WBT9r8uUCNWomfrRtNtYssyiP22ugDSytCxjpS1g3",
  "key24": "4AFP1kBuxwXwVkHT3FKNYwa6cunHBSJ2qyfi8aqT3ttLbkQCQGXGL8JXuXr3z4gfUg4kvBfTXJVF8fDzY5t9NmFN",
  "key25": "3gSV4pND3XGQ71GgsLbdhoH1TNdcytjXLWPuywKdt81aWa5PFNTz6xjHwRTf3zUSgx3VEHUdYErQhpsB1tyM7a68",
  "key26": "3tJeDZFjpMtZhLEJ5TDt1Vgho95znopwkMnA49TFAUZNaCPeqcq4PuMEJek3WyRwjwcMMCYx2itnjFvUf6xjxy7R",
  "key27": "4W84wsz28ixXq3eJjjRbM9ovn91bNZNj1zj3DsLMVn1moJ6tNUBWK4E7MkXrDgiwWc4tUwfKDKBD6LRSHsZhktDX",
  "key28": "4LH84wQFUnFCYaoH6mevjcSnf7Ar8vseW2YFRRm8rXh5txKq4G3Pzr2Qv3u9nUrBDkDWn1Caq6qLYwNXDambkYPN",
  "key29": "3BXWDTYYYrWY4R3M6SgFXoAFMnxY3bosuG7x8To3Vn12sm2Ghr8TBWg28tQs6AgPnxMB4sL3m7SKHxXzBKvM4R97",
  "key30": "5MkzUgEFMvJcMyLFs1Z1eDrLCPNcmiQJX2tvR4w24MLm6Zuiii7Wt5xDFFKroA8D1dCmNFcREB3z4s3ZE49jvEzx",
  "key31": "3D1v1RveiPHrfknR8JDyNG5aS5oUVConPugYNvjqwho8vRjyhuiYcCBs6reLyqeimhhGxcjAtueP5HR8x61yDQWi",
  "key32": "2kDuhoZSootpx8S7NK4kYLWyThRfbEoUGJ26mtcoZNigNnSmjipx5664zmbfLs47bYHnUTQ6VdPQgzXCWzDBMHqD",
  "key33": "ukQMYRXq3EKEALJQeaaEy5Gs1b5G1LktMWbuoap3WJXKG79toY1fzp3gi1KWfoybnMHkZ6iPxKFQqtKmYqkYfmB",
  "key34": "4V9NDq5wf2opPqHuBWY5o4fXbyH81csBGYyFhbWZzrcc7znGPKdcNLW3B3TC8zbA1aBFKHbMbUAaHYiek56ZLs6m",
  "key35": "2QTMBuhi6KJfLXonYZEZniyxHH6tDXUULf2jkBvezQ84zLupzQNCv88qPvwvFRYdWidEka7DKCZHQWtusVR8d4TG",
  "key36": "3cmN49kVerb32Pp2Ue9XmAkBiCevURZ19dhr7dQRon4whDytnYgRJhWWKUcF6B4rb8KNhnDyvXDGcogMuQU5yRwt",
  "key37": "4VJu4b3vY15syxqNU2ex7omBjWC2J5i9nz1ipCm1gWJ9jd8u8Z1h1eKJiGk2FRwFqYX5FhZ71jncvoFp3CZ3iQ8U",
  "key38": "3ixQT5PWQX1z2hgv3GFqZfErzfZ9RZzzwmdjB5ESnDWkCFSfzpDr7CiUAubY1KkwoWx3AnDUBL6FhWnjmWHynTS9",
  "key39": "4uhEswuY4hmzoAwEeYsjG28sgfjMeHwHzgRbodcRn7sjVi6DrXDwB1XcA6qgpqZUxGeXUvX8KcU75P9FUDMdX1by",
  "key40": "49Kiw9VkB84JwkShd1oRQiVwXdKWWihranwbjjZQd41BZydXCD3FWwZct2L2mjxoVZ9oVfaYhzcyo5YVfjbzq9fA",
  "key41": "2TxzJe2GucBkYGVCXCC7NFc2uMJB5Skh5dXi36hm5AtYwerQuotipTZ9A65tdBh4LjeeNpRpwt7w6PQNXjr6zgWo",
  "key42": "4HNPr9ZAoneYthjgsXCZnCEySg5Aa8U2gPE29cQXL8pUax7TDiK1gMskQ9VgDZ9twsUMiJkg4nMrQYWYcVBdponm",
  "key43": "3i2rv4JnjNZKaW5KWK2vwLbhDWFph771RfHHAWFDdJpKEvcssZZbsRFEoufgveWQzafLo1EehnKwBjrTKmXatsyb",
  "key44": "5BRzuwMSZH3qDNSGU53sW2HDSKk3kf8fw8sJjiySCgGz7orajh4UZTfVYSmBTRxkx9LQYb9iJYBcBdYb5JFCzvy6",
  "key45": "2bWNeEZLyFJsJNbbkomt1Habv97MFySoVJ9GdxgEqRexPjhQvDM7doPWQikmwpJg3J81r4TvGe3j1oguMxo6zm9J",
  "key46": "V3zkx7QSWsogPvpi9rqGhafRtNrGpPEuyMdNeDrequqEvLx3tM1K7rwcsjywQvc811yX191ByYuaccS2KkREaY3",
  "key47": "4ReQUGzrceF3jMshyJf4Mjvq1PYymWLZTw9xiGmmbH6H1kAsARGLJK13yh2rzbpraNsKfPAsd8uHg31jXHhrD8Gd"
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
