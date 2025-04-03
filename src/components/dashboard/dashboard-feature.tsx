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
    "35LdLv4ABrSaHkBhJ8mudV8AKfXPYyv8gDoB9cTKvUFWnsPKbPFsnYZjLFnBCi1FyTxFcy2pWNmXgzK55s4NXw4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZu6ibnJTPrSN9NuLQvi5YaqN1AcSt9f1XUD124jA5beFS2ceNjoRfzodhsYzDfZQdUQxFKEogc74uA9bwSjBi1",
  "key1": "62JwQRC6shMLd6GnsZhvoceuQuGUwmbx1t9aV9WvUrgZUdZS4wSTC5fectc3VU4DUqTUqTpJXathMaA6NkQZSTG1",
  "key2": "2MVfod7b39kNjJ6PncVHwwiCvRnVwfWiinmP52wowBxvaf64J5LjRXv9QDQbVnsdzXeoSL38gc698FDhEbibHRXu",
  "key3": "bwspNA5hLekdYqZKqyZJzbWiCjtz6uEpqCSKSqfVqXoMK89Qr9XkugQ6W8WnJ3aHbtj62YQ9ebxA6RPsiMNPPAv",
  "key4": "53rLo13RZgy1dGp9F2MmDoxYuNvfeSGZuHd7HdqLReSXZzjCAM293p7CrYWXk56Nrs3ag7UNbUTWzJh6gPrJtitX",
  "key5": "2mdxKPjU3HEmfEac5ii3woMw6KzacdckJNgkt2p6nygAo2FzixGRS2DKFXC7x4pQ8HZFKpQCrDiQppg4fE1DvYhw",
  "key6": "5tsTRwWLkLEQJqkVg12NwPjubBQC14hGEcR6Zif9sc6emcVPwtwNbUvnRBJuGDxyVKMXGvjg5QHnargHYuMP2bRw",
  "key7": "3a1BALa7LBbQjarpWf3YxD7EQ6kZPBbA77MRyCHdLVBU86JSCHPWgvnzaWQQXQj9DSutx2EV6AVVGztkdESw9ArS",
  "key8": "3LcYFukD7hwmUeprK2Ergo9mzuJY8pXPjWDdRUaQvqBataqpngzKuJMzLm7SK21ELCSfTUZo9s2Sa3eNuXotk2sT",
  "key9": "3zdydAsAjYmDufX5xowouqfPP8D79TgFfh5gpXo5UfWKCLgRtusW8ufK7E23E5rtfqhYxBZZfnVgBMQAi5s5Tn9J",
  "key10": "34J738C9uGLY3nprdgKnnGuCr1MabDDYHmDChqRZs2P1mGxJH4UamsDHPcrmK4jxi51afrMjG9BjGJdgncbrbPnj",
  "key11": "66gYcHrrYhqHkKcNx22igogYXyGVy73FAdtjyJMmL2zzVJwCTtjVqb4zTHmf5M7eXzo7wsGYTjj9v9NCDH3j3FB5",
  "key12": "3ynLkoPoTdnwa4wH5uK89X5cZ32mPAyQqZfc3si4bGKQQ2MYvXttKBTqyajnhKftiGxfpkf5R92heknVA4a6i8tg",
  "key13": "5AjDCHYUwQkpdk2RBo3RrkqNpaKTAhTJ79ShzMWRs2Uf7hLsFkjy4aE9sCDN9LrcJxG8aGAarZH7to6X98TetguA",
  "key14": "61CvnAD72KozeqEwDydgdnGPzo1rPVNgagVanPcKL7CDft9Y2h4BaEdkDmqMPRymG2GUCixzdwR3xErULJVRME27",
  "key15": "46sHFQ7rC4tCm9AUXxSZTpKJDKhVRZ5ae3RxEj32X3wrMZ2ZxezVtSv3pdcpj4jAE81G4uyx7kWwLKqCBm5XVDYT",
  "key16": "2SSzQsZgsowHBD8axBo3Q9WbA63asDn47KRcndckKASsR7osmaXSLGqyNitbs6kQzEaoM2ceLT4TaAPaFcvxXo1d",
  "key17": "53Gsw1XsgJLWmY46BUw37P3kPWkX5bzYydJSYvdm1Scko6hnhFFfKiv2w7Dvm2Zp7ix91bc8Ruade6zUuEvEXtAs",
  "key18": "3EEqZjNeRKD9zydPLeMBS5p1TYhrUvA4nraC9AGXppwYFaiNGs4nivMfpf5koNkhb1KdJD3wUtrhHv6YffoZj91T",
  "key19": "1qYKKBxGEpXS7woRvKH4TY12EXMEPeWXYRfuozUFTHebLs6ATcnEGd8ZXrVxvJczA3cPDz1m3My7tdCjAKPCZoT",
  "key20": "4jmLUA8SKPJ6LkGDub5bpvwZekS2yvhkt3dQAnEcVN1vW8zfhERbz2VjvjDEnMNyFmAYP8WNrJ6e58ZJScefcnCU",
  "key21": "3hQUMVCndaMMBp9gGXSbzNXgMHohu5ZjHYEvX2keDoYi94vWei9bqfhGfrjHUak14gVc3qeDpMh6wtQySNa9XkyH",
  "key22": "2o2zqCKhzwLi9qJKG8ETibsB2craZDmtTHv1QZ9RFBNMYQiFFn5mZzBUn2dPzjHYD5RthM2EWxzQFu2SXg5JT8FQ",
  "key23": "3HKxar9ztM98Vu6EGA6M8iJwqKpPb1tyxiaAfwqnYUfubSp1mje4kqkmPYr3NekzWURDGKd3GFcPqu83LGKeUwSR",
  "key24": "4xf5jn9j16AZfwt6zT4UKsXRLZirK9UExVu167kjuXp3QkZU3FYVy4A9WHrG6ZbMyxzGScBH9477NtCxj6AjqJ9g",
  "key25": "5ET7ke1GkrgKMgsJnYsBSEp2Y9ZLr6xERW7WQKWyDQfBqSvsoEccZPq6thHRJGBAxwgRw4Rgp31pYfWXaG8WMqHd",
  "key26": "5JsY9u5m91kQxZQks9PnMQLCFerAx8AfjXZQWu2uW6aVHN1hTmFFGe7UFomHxzggGb6xvVfevBjxwEtMQfcuPAQo",
  "key27": "55eQ83tDHt7wZNnEWv6ydhdoXrEdC9nu2n22qVqMckurUB5z5pJ46Cy9EVKLMhnqTc4H2v9CzSpdnEG7CrWYe1Vy",
  "key28": "2NGg5Bxuk1r1cbkHR97MEVxfTRpKopxnGtVYJzosJdX74temm26RcLsXpV4B2eoPb2TNrYCabJCPaP4Ckpepgmgw",
  "key29": "5wKXva8LC7RkjWE9yLvPgBjrvCArBoi6c5XfpxDMghZ8qTvJG9B5QAkLv84pPPhd4RJWBRJub57ZkAh89bdwEtaG",
  "key30": "3JKHWP7jJ9kRq549tzTQWP77QHwrvCwPueExKhQqs5YGfQtiXamafaUoJvaWuwsZsv4BCbhF91km4J7JLg36LEnV",
  "key31": "27dJXUTRYRo2m3XcFmbUyg8t7Js7UdAeNdyVTJbLVbmfR7BNiahtzqK5yNTk7bZMBt42K8Kq78hQHP4ypJ72Gb5b",
  "key32": "2uwgJvkhnGmoNEg88qipMi9SLhW6zSrCfTJ27eRvEi1vWEUDt6WHBzN76UJCqKvU9pdbLYL8hmP6W5vNbfb8ooam",
  "key33": "4GMPr9uMfS7sXUYC1RESHvak5CKJm71AMNhuR6wmgA64EPUza3ajVfi1pr4JgQqfBbdwXFHz2QD55gkjFHhtGKdN",
  "key34": "4GJd9PFRhSiVetXa988RHCtWig9XpEoWBaKmgk5osx8vdb21JSMCJ6MnD2KwnnmUnFAwhFTBP9bptXiMC5ySFBKD",
  "key35": "5nwYHywBBBB9NboJS4hcesf1qX6yRP2ec9s5kCj9fdKEArkaWuLxapgTikjEFm6kRDto7XBBTz685eU4LFQXwDT6",
  "key36": "2JGG8WQYomb4nbvM4G1NBxhEKzQjTvfSAovbs2mtGGX5jxgGFbPq3gepnNy7mxcyX4WS2DmPgYSkffff1h2L1GCR",
  "key37": "5XcgaWELmXZgqxPbecPna6ZDMPP3agckwXdk24vQHLrBELa1FNH4HW9uHs6KG9q3tH9mF4iTpaM3MfV4stsdcsUA",
  "key38": "19p24pRGDdCvWzzWBvp2EVXTCBEZEM3f4EWYEyeVaUDRQeCnxJ4eMFucSH2VhvBCafjYEHoU12Zo1nuBogEZYgR",
  "key39": "613LCQKob613n48rsXQkXFHjXpQKFP5MPNn9baUPEBkEcmtfKLm4DeXPtDTDVK5h5JHCPfd4Gm6SP7bUWMQSYGyr",
  "key40": "5t2RxPpGBwpQ2U9fifyPSnxYnYgCTGz85vZKTrsqqAaaQrQfZD25eYmRDNMDTKAqk92g4EQLWF13Wh8VcQxwT6Tb",
  "key41": "5TMxxURwSruyTwKi43Arf8g6fHwxLZcDMedrPRaNxR9EzZ1m7zoai8JGuwG1U3NqE4JwiGNLQvQ3cSoXCsXv4YNR",
  "key42": "258jX176Y1Xtmeb2LsvnytZC44bGmd8nGEyQu1ryQnTRFUR9onoaYry5WcKS8SWnNpEAqB9jV3pdbxHydbuP1Cww",
  "key43": "4B5HXQYz2dtq5SxVJ7DmJmXR7T2neVpuagvvPP8nmfaKkTgxt9SSmq53LuTo25twykZTeCQN1d9wyPrNiSoidyPt",
  "key44": "SuHZBYHXeTSmFEQjiLoi4pH6ZB3qsbpzHxaxvKwE4r4QJQTzFDibP4K5R5xQd592uSNerU9Rz7LzxgBGziRrajT",
  "key45": "2aNmpq9Z8Kb2H4PXRWGr6JzQ7vHeqrYjX489cAW1hUcmah7eGGrjiGe96hq5uf4rtfmA4sZxgfiUvt2pf52uBQv",
  "key46": "2HGUSG4jKBAmSysGvUity2WSeN66yaK92jHzvmhGFMZnxAfpFJYBGjYk4eaDZ47RnUR9eYMgtaKP5avtCNRVg1aq",
  "key47": "2ZuNtXhTaFGwy9oa6CvamDuKiZfuNZAyrnqBHLJkviW8wnBwNss6XVh3k55qVcJ1gcVSjCQx5WYNvZ1Qm9g5p5WE"
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
