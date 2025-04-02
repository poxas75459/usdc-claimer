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
    "4k9C8JHqKQhQPeroydj6MU6SvpJVZjyvm6j9tqTcPYXmHsK9CgsFpS8XeMMjsQXRRGy9D9tyUu64bS5XqSjcPKNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FpwWciysMye2qnMMJNDEGahUoH8VKmXVWZracsoM267hrHJ8NFmDyT1AF5zTDTtaypGDVBaU3tGCZUQayhHRuYy",
  "key1": "44Msmx2kHTJrWpWfH735ThG7vnjK3u12YNsN9Bn979dekAzXnfMg5xRpUAcKxCamp7XM3jtdjEoVB4EbYK8rHPGG",
  "key2": "4CneWqSQHBkVQQ3Yap5T14iAZTwcmp5TQquEiCMcJJ6tkppaBLkkur7ReWbnsL9KTuzt6V7hiBBZywUpy9wVQY3x",
  "key3": "49o8t4HiMeySxwUWLC52Ry4wcmNqAUoq4p5uvyGEQKZ9Qs48odGXCC2B9Kwjb86G17BENtjCnCrjviZj9JmdGY7T",
  "key4": "3nF12XS6w2YiiozJiM4z6AhcB9uyDPY8yo63tXjjcmHxmNagZxxuhkUVraGrneAkWqmVnsFvJgtgD1TpTtkzeht3",
  "key5": "2XaxnuSP2iXJWnJ9GEWvYJf3Dov2F2usZhCmywkYSnqvxVAmnzYmu9UsKsB2FbqfZkxB9fzqnydMXNSmDwJvhEQH",
  "key6": "4McaRAdcW32fmLcttXVdg3qXgpbFvCBpJ9TKUA3U2Zqh65GBvC3qk49babSNJuqCK5nss5Jb44thTKiMvPwZCfPa",
  "key7": "y4z9YrYrHFYVjtE8y4djCPHzYJfzxAA9GSHthLJgYTBTxuxwUQFkw6yMQvrGsU2SRGmMwaJn8DsymRjr9vwEFSo",
  "key8": "3iX7Tv4GkWQiGfbTZTdT9XojWR45YwEa6UzV2ijcAPPYvnkrW9nUdipVkHSMQXjF7tiCENULmVykkGLfFtTRZGXp",
  "key9": "2ZxAQmDEM6c8CtJmNksGscdHAatN67LA7sm4ctYAnuTAx4t5MdHTmebhWCuAPQYCNikhdxeg7Hd1YrGyGaYDrCai",
  "key10": "3i2z2d2Dj5YGrZVkxSjxZGWfMZ7Rqwgfci4T4ckWTWaxSun5AaeeecLJfdMYHHdnrMQr9dUj3HF8DrXjNUnajEfB",
  "key11": "4rEciBywBqu27z9Tjt4X9nmDmS5BWSmhhdfFTtT2EdsHPZhsyGzinHYMbBbuLpsU6v1mrEPhrptagB3ivjXNrZM1",
  "key12": "xyhXRC2Di5VBEbZbL2AJpsPFSN2kuaicaQA9mTAg7DipvQvyewJ9KtgxsrDrJzYAnUKnaqFsw5umNtmnzeF1zEv",
  "key13": "62TZpuE6UqRR2qo6hCAr8GgTQ1aqBmDguoMst3ZPM2Ybk29gzyXEHZfzt7nYVAG6YnK8b4v9AMUP6xSiA1fUXQuY",
  "key14": "5zaGUaagMeqNTWno2rWGKUHnYcW7qoTG3Sfnk24uLE43mEBoP7wq62Bomz1MJyFZyniKq2qtCUxtkg1zxT18pvfV",
  "key15": "MAxfraEgihANqEmrCzWfxoZkfbYzATk6ovTYduy3RP9sYArkcvGXT11eASJC4rBsuWRSSVMQ3TKetCEVGvKY2pb",
  "key16": "64qHuiQLX47o73sXL4nhuSb2nbhpUydRKXkEfopfkYzppGFJ38PubsCuySAWz1z5ZcuhaieZJiVtM3a2v8bYVwN5",
  "key17": "24RSv868AwoRcquDjiKFsKA1iZQxtn9FHJqdTvfp3NP8mha7KEGhF81CxK2KHeNMVKenUUHuvb7n4YYowna3GyJa",
  "key18": "2bVb84qaazjcYGynUVo9nqgpdk6iQsRxTiGpSCWj6QMjsTRhT6tJtEZ5h3QVc6fZxfyxuJWpioaGeKbxEqvt6sZZ",
  "key19": "24WhqDcbXpmbnit7acgZmvHVmGsr9iwJR7gjNDP37YLMNMh5YgmaFMzru5XXvFzKxXaiLpJFD7e9nptrWymP5X5s",
  "key20": "2ZhpsSESKd15TJu1GiNJ2NE6MaG6dXpodSLYTEHzTv6bVDM4xGKqz7DH3Ji1etvFY4EWEgkZcDhxDLuJL3v6neXz",
  "key21": "5NpC9pqXDPzuDCGp8WWj4UcV8UxkEYCmXqQcj9kewWvX9brPHvdprMz86ARNc8P8qi3Kyp5GgsdbCqzBZDxwmUzh",
  "key22": "LvZRsauiRS7c7vSxpU6WRfadXnXyQ1MTtCJ7Mm71jaHr8n7aBvhTuHu88AWeYiyEL9tWyh5T8csYpPcKHkTzYaf",
  "key23": "5vnUwTMcGv8pfpDtZMmJxj42pG7TBNZmTi32zE5GdXg16kaPEtfRXBAXprGuTbWHNpfzEhkJWbkxT6mRVBqCoiM6",
  "key24": "4e3yb5GmvyUpr1twwzWdDzgJnPjYUZjTH11mi1mi3787sTQChiCJ4wuf1TptRGmA2z5LWD9mSepGowNySdwM4Rck",
  "key25": "3R3iVcHpJuubxzaVWFx4xdCUbJYBYmtqadaLDtXaqgNpFRhMs52KVX9i9cLYZJQwioKrqk5fubXFErPuDxFFns5L"
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
