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
    "2fKRppqQgyqCZxXyJmnqKZ4zJEM7rYuQ4mL5ZrPQb3kFRiPEaJHehHi64U6RCNy5nVXZvBPELR4TVykFigrhB6q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rNyUPjaLN7efavx9f2GUDN2xEtHWjYoqH7uSzpA9p4FDKsg2cnggdtnZ2Zjn3Pvv2kMfBqzrfU6daPSH1J8s8Xf",
  "key1": "dhuyzE4tVuz7iZAHQDbt2w9CX7zhTY31jVwAHmfLnLxntgTS7YyKNRGKcuPmkqXGEBmDs8hPaw5Zs4hdafX9th2",
  "key2": "3gceukzQs1obnPZyMucvdvG23JjKZyscNd2hTN1DjcBa2gP3H7FFnsn1PHnX63cTUjKMrEJE4dqzvSPF7JMUGeJ9",
  "key3": "3y686MXQkVboY1Nr7QSVDfDCUCXNSLhnEn64sp4H1i7tYNnvV9p9jGmrhUDmVyD21c8vxcP5H8JGYmZR9gXFH1Fd",
  "key4": "G3JtNJYNiH27prP8rzhhzYFPYPct6k8h3KcxJMhZxC7iV25hFRadKCYpJfq2uLt1YdBJX9CTRmKfLBaMuTt57pS",
  "key5": "3dp5bhT1PDkVAYyE6bMTU9jiuH7zAuefH4opFTzFJVy6zfMGRYmJreZfexR8yQup7YUTc7xvpqW3qeunSTxe2V8q",
  "key6": "5k3B9G5RkFYqj7PCsz68HwLMzyzs7mG85sHGDtF36N1XkMFYNdCNUXUiVTNwNsa7hjB55HK61bqeKrXLvXcVXzfi",
  "key7": "2SqzkQgJt5VoFbKZPN352Q9jmUpBZWGZYJZfkSngoc3kvaukCmXcsL7tXphBunkpZEBJABC7o9R7VM6wch3mJGHB",
  "key8": "2EW7KfDjFVgwgi6Eqv4YHLT6Gbs5UmDpJd1vZ2sLCzjgdFeavopddqhYVRfFddkKxbHBDvGTncL1DPBkoWTG5BS6",
  "key9": "5UCztdRWCRwbEv3hUhcUwdZYeH7dRTCJSgSUqoG19u8JEnbUkizS8kgRoNdz6ZtAAdhuzVT2SpZcKNexiVjwgqap",
  "key10": "44yanB4j2kgokJyQJtbAd7MtBLg61o2zRVc5r8quCHYHAud2oZttCd2Si9HJCRSzRsWvFQJjB3rrCJqQ1woo7qex",
  "key11": "3SCX6eFXjPNTggKk473TftbZQLzuY8mRXv9bN5YYRrPzvtQ4JP9zdjg7BkWeZRpKZ5AvcA8PEkGAuzzT7DC4GCZu",
  "key12": "2exDRTzgbdrhJXH4R1pgnSXfpCtoctKUGU4LXr8vAspKqYvJWPDmWakxbSrZzFx5PaMkzi7FxcKYCk2za2aZ1yG3",
  "key13": "2vPzkVPXmaioaUA7eGte7Ss95qzc7kcS9j77EcoXPHwyvDtZ9mKKh35L41nYCLkawwJChujCfXhbM9kCqURfNmrW",
  "key14": "39bdDSxYdPTpAjNsFeLX6BHvYSfAKGBvBjNVUv3MHdPtY25DqeEP2Lbi8KYaEdQHiajgidoU7ca4y4eYpURJsfaw",
  "key15": "wY6wzLtCAAsEfbjsFQTXiiZvzAouCnHwB2Axmj6h43abAbp2FqPTPd4VFzBBNgP1ma3PmpvsrVVDbiajtnFTh4e",
  "key16": "439YUumnHU7KiGJFWjMr4tGGEruW87gZepW8zTdK85BZWm6PG5BR9ATbfLNsVieZLV8wsEGxZE6qZh3q5aYQgrgX",
  "key17": "2zSV7obaWfbTCz87pe1NCi6hHvjBhnQWpXA2brV8qFVE9RZtPX2GS86VK8koiShGqCtARCoxxT3x8mRe5DBYPqYf",
  "key18": "3LnQLm7rVCHTVjnfnzAdeDLASBzAUSZgXJNFGcysB7jH9x1ECVccX4SuPo5vSyoznGtnZgJ8Z2q8X187dkcgmzPK",
  "key19": "PDun3SFGJkRZgiwpVst5RpsWWEVSBpyLg67vbRYxDtKekquSfHyok68NVmBn43452ZP97qdc3jbzQMyVtcw33pL",
  "key20": "3UJ2b1jZvUTHjKmVTLBaCcgDmNZsgkivK3nX3ZCWXcoi3fbNSSBvJnbdtw4JWFKHs8bXSbp8xfzdPQ9ZCVMdr4KC",
  "key21": "UEAkViPZwB8uAD9gWCUTWhf3Ueggm5BG16yudksfdaY2rqfyHgRZqFyj6EtdUU16Q5fc5SsFx2iZotoSnGvpLKY",
  "key22": "3P4VVDKHfMDpMCWhim36isNVyXt7197G4o2nzm7kkYp4qWVMAR7D99h8fZZeVCvnE5dxLwNgFyAfBeeAofZU1erq",
  "key23": "5zs39sTtUuD983WoyNKr3pgLH9xUTneanJL8eirs9DAwto2NXRx7SyNnjgvCds5ENuMd7Qfc73dHxmxp3axYXQmb",
  "key24": "4tjinjJGnVPShG9466CgXcoPMnYSxc1Kw3UHFn2pLcEGj68AwXP7x2LYsznh7qhdDSafFrV2Hyb7vQ9j8MHpL837",
  "key25": "2dSUw7dPsvyhWmvAyq8W2bo82LCc98EZkfcgTCa7SgcdAEaEEia1a1LNrjXqH7PMVrhcXVTH13v688jR8e8QiDyr",
  "key26": "4VUJC7QUzs7WjQPpRTGpUPjh1HmdxZsoEJGJ4e6eiuyfR9PmzZ66CaENqAuY8R8GXtxPbdrTywz9AwAmHkMYsdeX",
  "key27": "FFfJR7AZcp8Grha5gomXVbF53BFAfrJi63iQ9H6EeBbsZiKSLViCzkVViJL9aAutfUkKjwWJD6cDTfhXo8EvDa4",
  "key28": "3mF57UubjzM5zBRknyifweBMcvDCqiiw3ymfG3tdWwb8CBkE5rnzt9AxSy9rrsg63nhT14Loj3qLNmSWxyTvobuj",
  "key29": "42bEWdd5L3upHWJowAKAtZaVP7VsWqQ74zutRx5rSdAvQm6jpbDfonTqY6TcLxAHBCzEsZ9veiV14LWLgsNhVkbX"
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
