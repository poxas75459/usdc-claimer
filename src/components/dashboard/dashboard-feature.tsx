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
    "4p8wTmzjeMXWt5bbjASZsANQZ5neqCUVWX2m5gM7i26VDtDjTAuBjsGbtz26pKkx5fGqC9PbCk7DZ2st1d3zSKqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yrgDscDkSQmEcGjCwL9EzwpDNKUPdguhAc217pXhv6dnQoUBK4UH7eq4fJ6k7tdcvz2FtuuXvfLGY8bJZsvLkV6",
  "key1": "3GE7HgtcHuJi1J2RZntefofjecFKy6nXituYV6BsxZtwdJ4eaT42KQhnX1E9wEGeu6dBDxyfk7vQPx22XdLiRtd",
  "key2": "2fgDYurQtUVkNWJdDeffgnLaj3MMTUrG3EQ8FcMZkGRxUv6BgUoPwGdr21gfU3XMkGbvn4F7QzLVjEqdNh5vKPQ9",
  "key3": "4kqMnA8knULnRG66JY5WmxJMQJ6xaYZefhiBd16VkGkkLjwA4L3xYnywBLoJMBcRgSPvF8s6S7drCdaafn2tQ9ck",
  "key4": "4gZ6TSZpCn2Y6jw7Z7hw4GwRSbtQfH9YRjRSV1ut73Sb3MmDRNGbQGEcS9CeU5Tu4N6wr4V8eo4jqT4hkiMtRkXQ",
  "key5": "42tCfjYB7jj2jNFaBEr9AH6JwZaLXHWwozx8UuEeAFJSVmq5jaZv6B43oei2x53mh2BGfh88asJ4YDaRy6MnZy4",
  "key6": "2zx43sBH11VwrzoojCUeyfVhizAQ5VXnm9o9RWdBznwtLtriBEwdNhNyveQXsPueFr3QLo25unC3CNmDrrcevU6P",
  "key7": "3usvoTtfbudZedz9agBt3yRMhHvrGwei1rV2SkgzZdV6bXd9WNk3X2bZGrrbiH6rmNUVmTxLyYzw3i2NCwDXnXdr",
  "key8": "UTzAde6FrPSW5kNpaQC5JjYfi6oH4GrndKy1Zwga3KGLRCmAQksghCvANvHxmmWTAFfGCFvz3o1bUWkqsk8c1LY",
  "key9": "5c5LeSMHsux5sH6McBy9S33piLzxitgFs1P4rASKeYTzsx8MEMYtMMZSQtBi7Xigmh8anyPwCjQ9mSHZwL1bdgL1",
  "key10": "2QVysyeCRFQZmwrMciCdyUx9V5w7n3t1CJ3mWpXyoAmW88uZdU2H5FXRHJCXHyENaneeVPE82ZPcZkjJ93wWGmXz",
  "key11": "22qUdfS73FL3dkhpHkCh4CVXA3PRKxUUy7svLugBAHfZSowR7ZPbgv9jm5juFsB9N2eYsk3fDd6YgubXQA1ptvsB",
  "key12": "2PRKWbYaJtS7m365zbqBmz8Hm1PhZpsSA47YWCGHnHeSD62w4vm1F6KYtQzD7xLxridWmFmRv11jpwU57sNnVDAV",
  "key13": "4njzyBgQk5pwzWZoQidJcYQ17Tc7YkyznLigjeYGdZpaNxbGZBXg7RYrshyGYrbVnNR3jf3iSSeNMB83ZoiGW4e3",
  "key14": "5gxBdmLpocqEK4r2u4LE56f1HkLd9Bftjxbu9DzKYeuDzSwefPhJBqCASAMUAZcUK2zhJoYkebYhXRCsNSnwcNYb",
  "key15": "5P5pGnppeRyRXfUpu375eRMQaPKMuuVvzU6iGLanXTEzMh5CEoGU8uybGsHs4CywDZXLhNNzfdg2Kom5pR4jzt3P",
  "key16": "4XLRQridGB1KfeTQK149Tn7VAKhxyUzkZ7kWMyM2Rf6ko1ZdwpFv38x8keHyvXAEhgFgcEZz761e7HkHQXgJzc9F",
  "key17": "4JKwrWXWbLSvLqp2YhCfwu9gzhcLh2FS9A1VmaeG8eDju92KhWijakCEC3hJWK3VtG4G46zYpB3M7B1imWS7pJjG",
  "key18": "4davAjUEFRKZYPCkRxgDQUoodJ17vVXh3qEUZEuwUD8BibAoDE7GX5eYfP5HiNT752qToTiAgxo33zyWe1svd6C8",
  "key19": "5guyodB1KcLNsrCDwNUWmSMcrBcfXavPdVHrejDDbNe2yA7351w4FnmGJkjutxFReiQbcKYi2yxB8LAjQVXSPzHV",
  "key20": "7xuTGTp6KLsFg83GnPVYazfWkUg76wKyL6xpMyGBTrRzT1k97A8qyk5d9mHo2NV9qmmXGCMBjWqq7e6guid7nvH",
  "key21": "4aawfxDKQ2xjWLyki7yuS3HPR8sJ8DmXvmUkozfaR7Rv1e1kEviFrLfwqQG1To3dChAUtUpJXGXh6W7wWje2DWRP",
  "key22": "5BX9zo7WmTrHu4aF18Q9kmtcPDvEXiwAYMkk9ag3QMQ4BXVcskVb1CmXk5Js7QDNHuHk1KjLt4tnKiN1Yxhtq4qG",
  "key23": "5qPC7TvSZD4m6GF3UJd3QxLEiDaM9sxZi3jzhVWwCDKho4RCRWdXkFcNsjrXMY8QiMpyVbH8uHRfT2hNPYndxGJ8",
  "key24": "3XSDGD8scAtjDEvn2jZ5h6CG4AiycUbfJEzKFwdQ24y7GDqWmiKYcicQzas6rYKUrKGE1z9xfeDPHYzijM19HEAH",
  "key25": "2GBFkZhYBTfm3ALnxhT8aXHNaqgBAsoK9oQxjX57LDHvEMPvvFgUCBcvcyo9HDb7qQiYcmcdp73CtnNzHD1nFTtH",
  "key26": "5deyQfpUqwLa1iKahgqDdjWFpZn9HqZkYdZZGYLSuoKbSrFHyN3UiDxUjTkE64GtbafwAfPdNnE9NGn8bf5YtEvk",
  "key27": "5F9BLmCGLYzYAjQ7mkP2AJGf7W5bA3jbyuiQ75aYgy62nsprzsnVaVarutA3tVtvG7MEXMwcVx8L86yWkSugUQrK",
  "key28": "3iYNfEgaMm6VYSZbA8nj5EDPZEeFBXmfyHpeDd82nBSDJdBexkEpzjo4X5kdFZ5VnwUFaQPczErVAuaFz1L49JrX",
  "key29": "hSufPQvDkagbRywrqyh69PBuwsqtigCRNtpg9K2YANkg9YCagTyX4LZMvunDYeWCdvTx1T6h7hTYQShBV1U6mqR",
  "key30": "4rKTAwVHXeWR2mkBjbHZxbiM4b7bGkZNJ9AT2rRPfppFXb8oDFTG4uhZ8Qo3VJGiwFihQHy5vbNj34q2Ht1aYTG2",
  "key31": "5oZYM8jt3TKrZLNt32Jyk5WSPV6FYSJeCubc2ACmvK1W33c1YifronCNzF11WzduW4zfDoKCbHAt8dWaR4bQHoHP",
  "key32": "47XFBxCtEDXh8tKVLXEbkLVUz9LAJBSM8j9nYLK38bn45WSdqTgFJRJMK36mreGoqxqjmu6S9QRdzvygW6VZrFCN",
  "key33": "jmCFrfndskBHfxh4DCgshp1PUnAZg5dJCfURVgJMK9fP1VPfsXzg3PsiRMNEFRCKCx8CpEhY8ocVN5jxQ7GwTKH",
  "key34": "2xnEDm4Xbw7VnG11hzSduUmRXUcC9hZsYmCiNop29EAqHCWcfUQkrjQdhDSNUNJuxmMt9jGYMULEHjTEe8YB7d1p",
  "key35": "5y8gB8CVTttoGwRDUzbH4occodfsNrEyWUJ2VuciA5k3kBr7p9BxGt4QwJJzU5sAc9zy2jvup5cxRB9HMvdTiUGr",
  "key36": "5cracRrb3dsmnc4nEhww8KDL8JuwKdANAFUnKFp2qyjgo57Z9yCpAViko8kCigVehdbkfCRuo2juiAbCLxtmUjU6",
  "key37": "4XQvvx6LKq4rdGAMeiRG8v5WvcJRTAr72Jukf5g9NBPFmq6qWQ4GTecSXiA1pneCJM8FncG5KwhsRUpeAxTnGMLf",
  "key38": "59nzxhPferCaEwoyRWEuEFZrGULQWF1S7Q7Ng4WN88MtuqAgJBkJcE9FXWMu3qbZF9fdW1ZyhJsvyxdSEnjRa2j9",
  "key39": "2jguvnPAoJf5QGpE86R8fRWqHxcpvuyVTo7omoJaYmg51s7jYU89FM4uYZ1LSMRFkUifFCtfkN1BfiETTxBbKvTM",
  "key40": "LopXPymLKgexoUhiSSqGSnCV8vtG5xH9VREK4dMPaEutnPuzZXfzDv3PPzsJk3pH2719JF5iz6fkKTDAZUot1FZ",
  "key41": "rCjhAZx91pooTas1pnGkQd6ExQtLjD3cvkC77PpRsFx6getEmXLyMbmhoWo6uhiadtDki9MDWDMddnfQqAQeyTG",
  "key42": "gnUWccHQHMD4UNb67ZUbhXE6PqJ9mVUyYziSiM7HmhBkno7N5oQjqka2KgRfpTSTAzM8jxWjzYnUNnqDmAB2T6x",
  "key43": "2NVuWsYgeAo4BPoZ3RW5pjEu29QEJ6tbwx9JgMTpnsXz1xsueuxXUfH1DwrkD4LQaiB6f5HJd88P35fHgugcq4B8",
  "key44": "2DaiDR7pDhrPSBnMgCGM5hfBYK3YQ3SbAipN1sCSDQqkfSvGeiamL2uAgbhaBT9B82zyVVwuVXCaxAFjDrSQqjwi",
  "key45": "m75ZYjKWgZyKDY2iR1FQyUP57phxCxyNfWvU3sqDnWAGoZkGTNUxVpVR26658B8ExhwE86j2bjdsVJgKDYJRJFJ",
  "key46": "5hYHtDbK7LhgGvUA85q1tWFdLyCkjLGRd3XpJMnCANCNyoha9PakcgSdQjYjpdcLxztRW7o1RCbu9ZrVLqJPJk9J",
  "key47": "331BL1ezywAu5UuG57mfp3X7s8wBxg3kgEPxhgRibQdfPFfmKcy7uq38LitWd5nEVyutEQBhjpZJsTLdUV6m28A3",
  "key48": "4ZPbVEFpc9YdiFyHfbF5S3EMHCcWte7WRQvtJMoCHNex7u28Pm9Cuu7NyzJo2XVKjT6iznf1BPfiEBovhF6GEtYx",
  "key49": "4w1vBtUrJ4bKqeSu9BHmX8aF59jmvnumrJKAWZmXKnZM4N9xp3eAJAXseYubKWkT8PDySFMMF1xTzigmDH3225xc"
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
