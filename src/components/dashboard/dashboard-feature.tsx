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
    "51AV7Ab9Jawi2VypurDMWTE2EdTgfcLtXz6YVys3p3ueBWaPHU6q8T99RSHPG3tzjJjWb8miMfkgL2A2PS5mkN2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pp8icxjQ8yJKEZQ6AvNNEyEvQCEd27SaTuGqRpDfzdpZjsRqRvqXMAf1Qddjj1gaKroToJRJSYwBYtbazqpiGsD",
  "key1": "2mQT1cs2JRb3QSVUjjqa8yqm6FcEw1DXq63Ajcj6gzTKJ3chtzXCcVLkNnaE7UnW3sze1ucS91Q3AH5fRTKXmLem",
  "key2": "4yPLADUoikXw6SCokGh14NtAhE4WFTiEZwMav2qRnV3xcKk5CArarBQFHhZ6k5Yt7XBCLMrtYzPTXcbSdwSQnqTR",
  "key3": "26n9cuwTnhAzY2AtepjVLmNCN7MsTyLpryJuABrf3KERw3h8wS11zjeB8WPr9yhg1yzk6SpnmJPQV5FJbryCxdtM",
  "key4": "4YRRFsF7WXQo9sZAqa1KL91s16U9dKSd3ZvsbV1xLQLP8mVSfo2uxkyrweAYJZdpzZ4kfvnrzHCw5FFzxaJJ5bti",
  "key5": "m7YCVZyzeQ1ZknvWmxTq7mEh2mEarsiJYE1fSL2XYLqqjQJsPtwLSGCZnPYE4QsrkPcrepi4S2yzanLjauoZ8Mo",
  "key6": "3HJzamop2JH4RXMyPfTXjAZvo6JscobQtfV2kYc8Bz6jULPHoCy5aDUW6JQ1AMugNLQddxWKHs5LpfyXztvVoLjd",
  "key7": "46L4URijwx9sBWNwXt424L3T65ywznG19EbMA9myYRsWMHfKSezYwLcgEEN8DjFPVFzPshi69cWfFGz2Cz93uzx7",
  "key8": "4N5w3ywZqcePrNYg1JcU1JbQrG5FojAHDnWPJCUWyQJem2MhvVkdwTvaLXizgsFHgG2WapujZtamfJLfFP8hZCrV",
  "key9": "5cmLT6fzJzQZceaRMnQZT352dUfhTxJrWoLDga28MGfa9jZHCfVZG6HhtaD3xCGaAafn4ToKvnTcH33HfQ5FrjTr",
  "key10": "2b1T6jDkRzdFFvmV4G7oizk2a1aKCqmo6fzUxrA2MmGXEUUbwnwTinTWCiawd8YMzAqcLczR8VjbuWgBm8q7G7Ux",
  "key11": "HTKBNGotYK9MZVztALF8vbjqMLCMdSzBCrCaPpzzH1H7FthxiKTFt2wZtia1yrad7GfyEqYmLvMtMMxTUhvQU7j",
  "key12": "5Ngnc3pVuS5N1w7xZh7JsnoaWc3HDxd4QsatgHeF6rWL2jeNNicfusj5AcMtFvhPVZrQEitxy7nfZeoh7M2SJTQN",
  "key13": "4rfTpekWcz8NcR7FQWLy1DWw9S3UTPrzTJeWY9eyJkPuU93vvyPCRSSKegpL2owBhXvXpybRYfM5NUrZYcHiZXmB",
  "key14": "2KZmQN1QLjy7fTDvW46M5mJfUwgQ7B6rGWUBqU3LvuEX2TeQt1F3HYAQgdismvzDrG8kDVAn1uHUXp1eyqSjge9q",
  "key15": "5VfXJQhyKX7GFw5A2UZq37gwohviAbGhUXk1bGGTvZymKLHK3eDjBeFCbfL6iM2Vm6vbb6gDRKjzJfFMjTBHde8U",
  "key16": "5urRSa1Z1nYetc6Gem4GktWdQrRYAy7syUAECgp2QzuTEkpjw1LR3ortsQSFCcT2qGGucqzeoxcz3Lnff8VujeH8",
  "key17": "3cNepHXxQpJm82ueMyTjsWoJn4r5o8AtXbMb8uNY4dpEci2kK9weGFWiH17a87D2zZCPWUD1g6CxDorsqXTnYWF3",
  "key18": "3iJGF73xDyZBzow8Ykuem3MQSuLMpGJhMJTNXP5UjUrD2zo4AVU2e6Vc1nMiVuTuBhjWCpoHkVrcuNX8SPkCd5dh",
  "key19": "2jqRqfkmRYteMFDZLGnRYcPoY3MaqQLJfXApnTfsFvYdBpjted56KVrxEoY83SNZFwVrZgNKUiFjwv4tuHqpmsF7",
  "key20": "4EPr852przDokBtXJSeVjL7MByDu2dTQQ7TYocpiAn7ixhjcxR49Bqd89MVzYyjZQYB5VxcQcvWhwKhzw6tWc2gw",
  "key21": "44Fi28Ef9rt9Bdc7kdFzJo9CFuEzVp7nmQhp9mUbLPTTsC1X5HnUJh6ABqSVWtLEhaev2z7d8AnG13VPUcAA5AYk",
  "key22": "Mmf1EkziziGXTxow8ea5bNFHyDSTkjj4DeXryNTqFysAwXT81pn4J4AZDUw6dwTFqn8V7MaHu5DvYFhQLkYjsaW",
  "key23": "3M2kqn5UJ4dsAxoKevzk6mWoGrkKWRpNxk4GN5AeUPXqUPeTkou8rQgEjs8S3AnLQHk71BSDv8vgbRpu3ihi4YEo",
  "key24": "42WZUVzUMb3kRMRJBNJKt4bKajkyzbAfEMs9W8g5Z85oKmoy7uBLK2g5346Xw7YrHFhbXDTiiqSgKLBp8LS8FZ3C",
  "key25": "2bLMQ2LY4LnaeCm4ZCT79h7VQnW4wZPaxCDJFCNzqLAuN19SpN9ENo6dxrEGAU18LWNLPNzKipJtyADV8fAT4uQi",
  "key26": "3HerCB2RptLm4rLAgEkQwbVmHgi3WxUcF36k9819RwzQmTKj4DDZgtiLdyDz6LEjgsVyKZSYrEUapF7xRKKMYHHZ",
  "key27": "e5VUAihMK6hdWs3Hmzf7g649QpAXpJjaK6oEgJG3trxwFt8LvVnGScNzcFq49kCaAdPJWk6CDdu3zeocFeGCHCF",
  "key28": "S4iikDmxGtvjKmsrWXjZgYcRYaGdY77t738fSzLgBoN6SCAg4pM9UhMHsHSPvwzTyVFSfsiFTDZAuSs4nJnP4Nq",
  "key29": "2ZyngWnm64DDpwJTNTvWbEXqUuzG93e6Y7YEmemuCcsKFfY7bV6U3KLFXX5qPnpbguvqsekVQRfgU4s1wqWDoiuE",
  "key30": "4CSPteGgUx1hGrfdgBg3CsYkCizUEKHFj7szhxhQcNS9CV5h5UKAvozPajnZCmjpUgHZ8d2PWxutJ7NakmET5FLJ",
  "key31": "C8Qw3MygDWqpmZYYdUL5p2QfmAEEQmCSYDytPDagHNWXSj5LF9LMuoBX9agHZE9DVCiJBPgHo1w7UgGa9q34PeB",
  "key32": "38m5hTzStMxXYJeVhMfwx3ryMMNJ7zHYzjepTT58CjfvZJYkDo7mRk85ZHicjGi3cuGMWAwyoRo8F8oVRtwXp7Ed",
  "key33": "4gMCDXoRYWATXMrxLzR6qzeRRZ3G3armHtUEmTHbS9h4aSrvjsCCJvZ2YZr3W1iak35aVRDkNi9SdgkcT9uBdVdX",
  "key34": "64e5ExcCn52JeZAerybzTWn2kfoF7iYDd4mHJSmfPrme3APPrRmS9HkVZGqNm41BCr5PiEZLJzqKnkJTAeSUfR2R",
  "key35": "4L5F5Rf41oSyAjQxddedhegU4cPS1fycWDyxg8EWPUfGrSmjpG6vC5HFJG25XqFD3beKRvkweS3AaaqGi9ZQm4zY",
  "key36": "5HmTJygMvPPK9gBgbb4KBmgpwJBpkAX5vfA2fTqkQNFRh78CLU9vwurA1Ehs39zyoNHsiZdm15EVgoQr8Kzp1wDM",
  "key37": "2ECtiP8snf19svLn1SAwW4hWCFYqT1wjvRrTbuGUa8EDf8tpEjMQua33Br3KveQzK5eeY6A1mPheLHuhvGHBMUGF",
  "key38": "nxKgRbhnWJKLoYxesfm7FxaCeZwDKY2HCAtkdkeojgHZqCMZapZoETdcfWkewqDPc2B6SCBjwj8McJvQCseGmtc"
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
