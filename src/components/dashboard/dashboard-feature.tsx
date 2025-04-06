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
    "3TfnAt58VemZWAb1fvjnqv7cMRU8tQvAbFuksJ97MxDGSggBE5Bv7r8yxQvpxrxuS8w1WzibzgMvbTpNRYQC38UF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cj1NcYoThXbyLdAt5rZM8acuXmEeU1n9b3pzwbyB8MFa5CnNuSFepNEF12e6XRpwYp9Ldy38RCNUtXUaCSJYGVR",
  "key1": "t9BiBSWSRUzR7NtNC57RkzjBorK8CnDhdwx5LCQdwqDouS9fHBKMbMMseKtQR2AUJuiM3DeY7FHf8JTcvY6JaXH",
  "key2": "3LGoSGPjWp65RNCNEyJWUCf8f9N9WzSYnms9veSi2YxUQ7tPy5hzf3XPjb8u63WR6W5UxcGpz4Rcw8mgDx4vvJzX",
  "key3": "gWVZqqDhXF2JPUf24f7QUAscXrd74NF4qGCXoD776Fs4RQNZN1xjDJiqSjdz9N22zL9oyeBrDJQQ6q6otYHZVca",
  "key4": "3kg3evmksA7s7gwtbKg6KiDFuDWYtbgGuEz6k1skn4gYL13qk8hwizn9XffrmHKh7UX6S8WvVF5p11TihW4j3ra7",
  "key5": "2SBH2afWbLjzcMW8Y3zWsDPF5aM9PeUim4a5yDj3CKjaH6WFjABwVQMmdXQ1Npew8BtXwqsfxxAHEUUBN1xpuQ7s",
  "key6": "65Ps1s1FpujBtab5WmHTateTxjqrxSHhQzQKgVgDHBSjhLUjQtQnraC3S8t2ZkL5HJrGTqiMEZdGEu7Cmu2Z86jS",
  "key7": "5Eg5o7ZknYKbavizbVUCjUuKwH2B7HJybUgK6wLAf5gutQZ6PoFLnsT6THLQHwqQq54uXdrqjDgqAoQKRDcTZRT",
  "key8": "5r3YXrYRexB5jJE5mTzbJCNJdg48BNYTBYY64vJwcWdKaaZq1jf31z1Bqx4LF2cbmr5YrYvSu3GXv8hFqgmxypdW",
  "key9": "koqLJYgS1oBan1ZGPffmXmip7vS3rvudLzr7wwu4DZ1WEuF5A95ynDN1YXQUtns5iNyT4GecZG5BVAn7RZb2AnP",
  "key10": "3a7RfVofB4QqyJXNPAkewK9KvzHKXzD99LMq94tWwgkZpzyoaKpg7bBLdRpapfdD49XSqphPKGubpDJo6yzUd4xp",
  "key11": "HnpZ7h3fHDsvmLMELPTSgA1dVKabxQrxjTuwwN89WT4yPWHrLXf3TVA9GU9XaRQPkmuv58Nd5VXxKa4wooJSexM",
  "key12": "2q2ZbgNFGYqcAuUwWKc8xnFWMCu9drLEJfGAafFZD4kgYaFzX98RU3ugYAzyzs2M2HqHpcZNijV5z8kYcet9y7kc",
  "key13": "2mGEQUWr59zgQqKub2F2rLiqFuXTMgyA91HVojWq926CFun2kgxsnkL9CeyHhT9CHnApR5mRv7pdq8Bj8Vih8FRM",
  "key14": "Nb93PuV7t1juLxjaAMWsGL2qnLiRbuNZXR51q9EChxo4N7uhJNzJ2K2vJgpEBSAE2jodz8FayYxb3nLzGrz8kWq",
  "key15": "4N6J9WXPrYssuyy5tsKgsNb9dShAe8oGHxRvQ8Zj94CLsBNuTmiBrfbMUKXQeph5poCb2RcdoYghqcL7uZDGSUT5",
  "key16": "aQzsbQgC32zC4tGoq9T2c8heBjHyfMoyGbJWu6aHq16kucdQQUqnDVrGtyispj43vx7PYhL4HmqHpjeiCwBHGDe",
  "key17": "4AzUPFqjrG1rbvujPzxKpq5sULdN3UPSbPcQ87HvieAViRu1jf3P2TJKxWKpEqn8dKtpKaV637iHvDd2KoDpvnw9",
  "key18": "2hqW1DMaXLhtiveFE82Um9gSX7fCzhnBjkGFHQv7wt5VwzfNhuHDXGusg8xEJ1Kjz1YJNaGi26osxGgnR91Msi1o",
  "key19": "aPqcZdsVsDDEDhXYDsHRKPMg8unjDQ5ULx76d8rcJZrmLR1XBykyXjoURc9vtDRQfyqzeB7mdSfPbocP3ydLjvM",
  "key20": "2FKkwAYFbA4Sg4EFnP2jB4z6dDtqkznLkbofPPWpZARpXhoGyRDdrkrBGid8jc66Z3JsDywYNSBCFcEDSwUBGHBB",
  "key21": "2yYhSr2Qp1qTrwDiu5TN7xSrpMXiMjgS8gVnoKuzsm58w3L7cLfroSf7zdnBvSwFh9BCSwJgno3DTA9fTiuspASh",
  "key22": "2D5xKWSiFB7Z7eSSKqBeKnSYyz3mg1pvnhhXsJmtZKVd3wgFVgGvs847mZ4nuyq84eUpvkGj2WDPGxafejNK5Bnk",
  "key23": "27U4TZa77g66anEsB6oUzw95a1E5ut3EW3t928CzUdrZhC6FGNaTWP9HW8zB25Me9udsXy7qXpdG8hsEd83Br1rk",
  "key24": "u165nQovXQ1tAy5Q3URU5ziGkhNJn6gZqheZESyD27fQruwJ8CA6GWkgTyJNewYvgETgupGfFXXLUGT5myCTgs3",
  "key25": "4CuQ43D8TWKNhnt7n3eTeRJfnM4SzZUSqzbJCMn1K8Xvq37STmwrVzp5RKCbVdbDq63KaJfGbQcsLbzJLMTcZwva",
  "key26": "4tAp2wwifdN9aFRKt1fgdTqEytLpkyzBncWE9WkY4k3q6r4o1WSexkP6M3Thpzz3R9FQj5noANwpkYUGCjwfGhCW",
  "key27": "4Z93QvnzGhuTh1iFZChC4ZiWiSp7VSe6MtNfy7dsaFkJr943PK3MBrgZCgM4Vs1EZNpjQSCM33xdsSDn77kF58HK",
  "key28": "37ZyPfkGiskfpeenbRqHgrKFQFvBWTUNyUpHtSuUQVhpYmeRLDGEa77EWB1wJQzoYWnzgzMYVjFPkeaKLyCjwCs6",
  "key29": "3zRVRBcVSNz3zFV3u4BC8jTcvTD6ckaYrLjznkmmb6RogJ7WyCvJa8VpA2AP9j1C5kN6ZXUD7ehEPvTgbZAhvmDT",
  "key30": "9cyMy1z8dBGY2XYeR1zdFNB63aMVJBcxnd7GfV6zZviwNaVw6VK5hnc76ay4312hpgzBLEEQSknMSxkwCMw2YPs",
  "key31": "4XQ8cQHptEU4YmZLZzQEn4pRBRBhzSQHtjwAzyohjT6pnHCkoisYQgojEcwb4F4J2UZJzHgQxZdrUYUwdFez6s2E",
  "key32": "3re4WEBxDbBWZ9CvgCDcmvaP3fDTwPkDdbczqXhkbq3EnZGwHZJgTtXXrW5wU7k7XPRGgSdiMZzbXw1qxJMzTfwd",
  "key33": "5eef7rvPHkP7gcCLMKYhkCb86ebGJD449rCSD69h6SQag5qKqAvShqQjUS5SXU4eCoUTeckptuUhu3aZZ8KmZsWC",
  "key34": "kCURtEpEH6UdqH11G7rV6ecSpwi8WzRFbmgM8XpaMnTXXWqPbEw3ErjfepVDuS7LZmewGBJ9ma5rePuDoaadTRh",
  "key35": "3QUkcMWmwGu8JMNKiW6iAoujnSNS1ewmanf25MajsGM4eBsyFkc9cNAs7wK1BVi9zyHrVUhpuETN7dNWKYu97f3F",
  "key36": "3iRoTnhScYczmwB95nwYvAvgrbFCCgE81ghwtp9A25tn5o1tYFQM2WxCFsL82fFYjspMN6GBHzAxnMoAGkvv6Rue",
  "key37": "4VDGAJd9zBeXZrnK8vkTs3WFpzajHFRFSV3gSbacviP6gDeahKcrJ3c6ivfqYFC3DKbMNvFHJb2K8u5aLFRh8kG1",
  "key38": "4xvfRkAoRYEbKxt8SEKANBSBEjCTjJJkV6huhngJqW92oxxpzoKgTkf6sa4XCshf8MiUZDrvkABcR1xCKhJRs68A",
  "key39": "3humYBjzo3XbMRRWEwrXbthaxi5saXbyMVomGNJEUZJcMzKgyrimgpgSxHe3wjeEjVmELuxHmdCGV6Un5N7Nmwrt",
  "key40": "3hSc9LzPMARx1Bp9Csje3WFQRBqSfRjX2mfvA7HTZzYvucSrMpSaTKqfi1u18vUbywgpMj4LgB7cYgCzMmvckA7p",
  "key41": "4GxYcf5bUccWkv5ixWdz5aunAVRfCCDH5zAdGewjAQhqQjgBNF6UnVn392Ek1Pri5XnZ19NJtEZDqehL4TCp5bde",
  "key42": "2DgHgG8zk5AMtd1BunAxUmc4kNNEQ514LAiuiAYhTjtzr7X34CXojFsDCwS3XF25TkiLjkS65e7BXgPYn6kqMW9c",
  "key43": "357jrjzF2tH199dE89io7LrT6X5VPUTW1kF8NCAHCKjsy8VAzC3LKriRBNM77GPwHMqBZBzqmhZdNeLPkbbp59eW",
  "key44": "5ps3oF8X9mLMRWTXD6wLf8JzSjpdkkpwU5t5w7rYkv7ecSJjmTv6C6WiXQ4JQjMv5NmXocvGMndVSwimPonkAy8q",
  "key45": "5ecDYFSc8m5EEep3J6es6ys1qtGkVSwkUSC6kjDHNQxoUi5XXSQ9LKfAdaoukLSytyjJKwqSYqXztjNaQ89J2qAH"
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
