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
    "39G2wXGwbS3qmh11oMcamr35nP9h8YKWHDmPQYX7PPUmkADVsAibL64dLs9EK7QovoqsRgtqTCieWFP61tn67VwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5boNhZ1Zyiq8nnPRwm3Ex1TcW96E8UDuG4dbkctoidj7W4EJFvdxTFQ9tuiAZnijNL26kYoJfULTBYYkPkYCbfga",
  "key1": "tLnL9bhX7rDLfU9hw9Wk25rAZYSq58pm3mCCKDW8rRLqqwFktLRkAFQfrdAVh4SLm3eygdcnRD5XhikgdLfuTZ8",
  "key2": "5nNJsWyj8HpSA126xWDRogn3bqMMATy6iNqkkerQaxbx4N5NiVyqtnRavTsQJigLf4CJMjfBUD4XpnptC7ZnZFFy",
  "key3": "5d2jJSo3HaXxKqeuQVaNJ9uTc2Sq7ozo79i4LJrLZxzLBFgjL4bMAdCMxs8cyQyn2hsdzTVR25W2mLvKWY2gfyBD",
  "key4": "4FiPef7fhoWmq7dwfbsDjPVULmePBYc5imVSP8Rj9CEXXjuUvcviWSrJYr6E5aK6Zrh66mUkJHow7j7742G3qoCi",
  "key5": "23C4NEFhQ4Vq1Lr81Qb5DWrBxKobAAXFkEhoxTxhFBgf2p517toxBo1jSMXnE7rcYhDcDQiBKeN9zzaXG4fmmGk8",
  "key6": "4fbg3bYgpnnnULv896Z75fYWn1rqVLkivToKE5SNHX1i4jomQ6LWvHbfgjUQAvXEWx6cFYyViFKPdHECSSRjnsaU",
  "key7": "4V3c5EjHAYLZQ6PdC89pPvncsMH7N75aMA7GewHDMtJ1L1qpdA381Lhiph3XDkNfGcAazBoprAeK5CGvFbKkjWeV",
  "key8": "36N85mbYLepgdFby7gWMe6JGDxfAeKUVHuPNQRDgzsacA57st5bYZgtY5ocMuVJ71fnjbPzLGo4NZBDAAP2oHaA8",
  "key9": "2Eq1Q7t57j4RRZanASeeNSDV5X54u9U8s2PxMmsDffhQ3ynb3qrr389NZhYTDojFgJo6oqgioPJhyaCfLUuKN7g5",
  "key10": "59tV5PkFtCwk7iN9nRL7mAHfxPk83yLSSZrKk9hJuBEYKdFT4PFWAanziLRFqWoCyTxNrniE8dHZvWXXiTSid7KE",
  "key11": "3WVNejRkzpeUbYJdvba33XVgAxRVJ4FN1ozRTFXjgar9MvnHf9Gfjq93uY4aDzdjyy5WBvM8YXbYvRMq4HVjYzcg",
  "key12": "41Pt9tyniLdA3Tvr8Ffp22jQBTLBzTMdZbs3MmiEWztE1pzGniSSdk7uPec5ucm7Sm7X9JBP3WM7nFwc1m9wPmPU",
  "key13": "2R2341mzREFctyrQjzv4tkjvRz4kkQphZrGUjadauS65zpELwVDaDMAEN1VxF5HDvdatm3JNQFqSvHqHEPxD2hQj",
  "key14": "4duFynrHGChaCkJCaPT7MMf3VasgXkbhzsfTrQYEpaygiXxZ7hMaSW2tmm8e7GLiRWq7BYek8hWkB1E8GzSZSurJ",
  "key15": "5MwJg3W4KvMHb6NnLT6Mj1ELKcjxhHbJtuu5vcSQm1LeaStraje8csga3UePzpyXhj28NjgVT3mYU75JE8EMtaUa",
  "key16": "2NsWwFhwJNUaMKuL7UPTHbcAETsHukmAeArh2TeASS4R9XdAZokKoAfBTkqvQqZNatuK1MhjQJtuikFwctVkmRFm",
  "key17": "31SdQu64o1ab8WpfhW3BF9Ftz7TMcD1BBJDiXiPjxkE5gDe5oYNcmTNNBbnbAjxs5HGxx1wZL75iWyE1KJA2WXfm",
  "key18": "N6HbMH3FXaJ22P7LwJhxpVRi4WPKjBoSzPLGABkJ1hBkGc9ZrxsUWaWY3xM1PHU41ZS9yvvfmB4JNrfMxKKViyv",
  "key19": "5r6EVpRiQtkvAXy81fyTh9ixbBRbjTV8qzYSs5rVKihxXLpkm9iRbFj8bUfMAr4uPTQYDrMPRorDNeHSfd8j5Nwr",
  "key20": "bdMjq72DAJxwcKBPni4iCvgcnSUzjqYg8RPHXdjShiAnHwqMQHtqugpBobTh4qJtMQZi28viJotRia15Hg23w95",
  "key21": "3otho1XQV4befuhpF4DD1SNLN7qVoVUp4BPYqZu5oMw25QcMhiJ45TY8LbdX4AyHr5uBwppMVKVsahY7K3zcrHjs",
  "key22": "hBHZ7AYJwNtZHMeu4QUNCGxhunRbSDrWVo2jYtNzoNNZ3q37EXbUrReua31sKWQbcyiapBFBxfCvPXqeNeRrWsq",
  "key23": "4wuwj17DgpKekCTAusRwusdFvSwg96g7DNanjs3MDMjwM9U2g27g3eJ3RTpQgLzfZSxH9mqEX15xtKLU3AuwjFzf",
  "key24": "2XWiLH2BYrUWZqb9feeCq44oD43xy8UNknG4HKfbgkymKjQvUVy8QcUUKCSgt9vwSHCSZX9wkyfTTxnDUQrX4bKP",
  "key25": "2cwRyy8ahiybsxqXSJ4hLcXfs6iQ5QPcHAbpm5gFXK2Yv98Dz1GoNgEkQXMWUKSKzfPanGECA118ja177A2dZDyf",
  "key26": "3KoC3xHCsrYNm8gaMUXTpRzg3FJwYBMqFNoSwbWwVcS1iSNHwcXf5PaxUx9Y4jSC4dYJzzxnE64HvXnLhHRruSps",
  "key27": "5PmqjbWs2xvaUZachQ7duQpNJZoMyCmjLVbPFAA7Vmy3Q9Xrm2oT2ZDawf5HKLYMwoHJz7kNYLtxH2U1xLrMANKZ"
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
