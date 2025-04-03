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
    "pmx9VwkLD5B5FLpKcoToubHX82QUGe3JNNAyDRpVxeLWL1LhkqX85zFydtvRdg5g6jcbggZg936epC1ghaXQavJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zf8RakukBgUEmBK4dE537RfMS2ES5PUQUiTDG39V3hmwJEttTzha6xR42SVHFVQk66mxtMRzAzoXSnNn9FargFK",
  "key1": "2e12JJj1JYggZRyQb5bRYx4zEfFuMMNKaJDPFTpjW1Ni2Z3EYNKqSjmyqz58XRCFgVjUTdbde6MeTCYqL4J7YpsH",
  "key2": "4wcmVU14DqJ8Gmh5rHgoX1khFT6bAtMTveYyBXjnobZhHiVGXmGPTmEGoQPQ94xx37VRHGRhjjP8gUCMedHxxv2",
  "key3": "5hie8kwB2D6yMuqUCs4CSVsAwsuQRbFofmKU4kcwVnDLpFMuMCBSA1G2HnxZteoyKPNxZrkTttKDmGmGR9UtvyTn",
  "key4": "VPEEqUw4Uspzxz6YhgNqWR8HjiiMgzybRzVhJjc9uYv5mPPZtuC2pEvFa4b8forLcmnvJW1iHWt1ZBdhHpe8E4R",
  "key5": "rfsUKt8oZ1FmptLa8bpuu5wpM4oJwehUGgucL5TEW2QC3Mrab4VQnc3G6935PmwTQfH3TMbzYGWpvy9AEXtGm7L",
  "key6": "3fg1T6eEGRdfqAHme5otMYnrJkNPRs1uc76Bw1UJMcvZoD5N1qzW9NaMqgcXqc8z2kJ8UnjmEBUSKhhkwf9uGkDN",
  "key7": "3CboJwYaSa6UuyKjN6V5SWv1z9bk49YibRiMvmfpagyop57vk5jdtitZB1cXy3hdWvEwrtPYRguJa6yr3pDjVxaN",
  "key8": "oCV3XhxTm1JNp7UfeiNchEQU1vDVkn9Psqh99LGPs6b7WS8yaP2KcSGnit38mWjVy8k4MYemRb26QJR2mcoNmL5",
  "key9": "SZ6Zfm5EL3PnBnh6SEDa6BgDoLXa4NZZnUQHGxMFVcpNkNg9X4b8f8SaUkkZbCZCdG2ThqfpNGqseEXu5cFAKEo",
  "key10": "4NU28iC4wxBRzC3QQpLHZba9RqGLXGRcdXbdgzUCBNNBxE6JHdLPxwcVCJUBnNB9efPi5jiEBd2VsrTbaLdT4UxM",
  "key11": "2W7CanmZdkPF5h1uJ4Psi7ybmtXyJEY7aGS2REbE1ePZ5jDWWE35kgaqF8hJ7rMDnW65yUjVNwN9uTLY4Uno28Gw",
  "key12": "5hsF41hCLNfQSDRpjCVCt8QyvanNEskXwrUaReYLdUsPq8vGaXUqtDpLvvg8Yuimaajx7z3sWxmwBUk218ksMcQn",
  "key13": "9vr8Tbcee6WjpsYutL9vDdtz7FzHaurcQQFZtY2xt2zBVwiiwQC2XL3JZX9ZAedma7Jvjd58ZeSgC3LY2W3FsiU",
  "key14": "4dtG7Lnviz6yBzHPUAPgHJ8ig9b9GCWrpeLzXENnReq5yfMyhqioT1v19xB1Z5t6f6eCo7EZv9HcxWBhE3tTJeM",
  "key15": "4ixddjFRb46m4sWmy7bqpTXmzZyQShZqdnZ6aA2fDJ9oDxjAiizJ5hZzHL9Ndc6nMfmrCCeu23RzWAaAoBdzqpNq",
  "key16": "3Un3UNttykUsuqwCz8CVfjQRJPLaWspXTSYAof6XS6qRbev52rP4UyWAGCv5Vjeubn57UusyygFZgtp2MpqTFzkp",
  "key17": "4MS3Lr6GBD6WLX9sE4Qqg5xEo8D9v2yCXzCwfgicUv4ydk4NMsyndj1wNJD2GkxSN5uceeg5QZWU5pt9zHQ7mQ9p",
  "key18": "CEJxwobhooViTaMUb7r9jB1zvory8Jyne5bYAtNYcMBhxZGi6vt6eppGiY8zHfBXeaq1g5mGEibBiKBjShAGvrP",
  "key19": "2p3ErQzU9dvZQ22SW6Ud4wXjrWPSxvejjjSw4RAkknW1AV7aY6NM1PKzFw6J61cg4RnC9MYzZJBA54WSZn8q6eXW",
  "key20": "TAjJppkGXGXRjLuYhN4wSjBdvmWWpGfUwgA8LTPSiwwK76NR5as72CzPXe7FH8WWoArWhPTMdWLJvUMoXMmnJN1",
  "key21": "2kgS1ei5puPmggNwTcL6XToeonnCn6JCVkvYknv5d4N7j7pjeZAACqiFVxGNpsQ3yYkuErHeR2M41fQhtKtVEAUV",
  "key22": "45F9tBBZQNYcz1gdkis23B2n1Z5mHmaaNMjrRg8m8w3eTYbjTcmjL4GZsjVo7iaH888aPG7D9uozWX2a44p16pHF",
  "key23": "4Ck2z3PxkEv8wYciyrhiWAEBsh6Dpst8ujqL4KvNXoVrD4TQN56J3A7RgRa6ogpA6fwirVi6keACAuCkcrJEq7ng",
  "key24": "39Pp5GV3ViPxaJMUDNonKUJPxHLP5dRC4CRCYqooJEySgh1Z91ojhvpoVWGr1YgFTHNSfztieycVJekoL7E6Wpyp",
  "key25": "3jyjx4hWj9pimw8DYDVCDHbX6NWDQ3zAPrMybjcWw89xrbwwEdeiKzrjjXsSmizGwDtYrqnbnmtCPjzbh5chCR1Z",
  "key26": "3AKSsfusSZQZn8jAfMnip1LqDsUPjCifRGtryE9kYyXyGW4U14xoU1tP5oC8tK4utSJFzuwc9xQftgvKJxRBB4Wg",
  "key27": "5dC8MXK3JZSRXDmjFNM7JRRg3ueC9iGa2q1AT8XZTQJ3gVr9skaX1wRHm4rHe3JxgR6gx321vSkZREE3p3F7KVjP",
  "key28": "3w53HiTDVX9qfWmoouN6rp1RFHcBjT18mNwssSAdfLML72ufa2Ef5hybTBs1sQVE61pL2sQyH5emksa89jD9ziNV"
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
