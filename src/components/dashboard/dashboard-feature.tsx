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
    "kH7fkwnJ6CLCd17yZgvG3q5JsZ3KHx3afYtaqMMbCJumsUiytDEtyRbQVsXSBKnJeTmZoGXojGBmUbQyLx6CUUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rsA9QmT5saeofwkvmJH6WWk8U4ZPF2PgXBXN7gGT7jRP8nPt6vvHWpu9sMTKWNaj9uxwzyVw5RJVtc5fAFBPfpP",
  "key1": "63LbmbK4Gt4Hmn81qKkgjTqGUo3i4ULj6rSYxDyK7bLreAsM1T18D3uJt7oUSUGtCVt8c43hXWAYMCsdcFFon27A",
  "key2": "4d6YS2GLpFHqHJHmYmTT86eNd7uUunZWkiaBfwWxFzBV6TWxU6bxKhtrcJ8XxEBH8AgGQYTj5kW87tVRnmyErVQ7",
  "key3": "2NGQuJEMuBFq4evXBbWQYrutdRE8dJj3mHMTmRHaCakzEXiuA9nhh9N2a6eknVVWZTkMBrJX9jjRuRsWFGzuDoh",
  "key4": "2rX1YU5cL7Hq4rShpLf1b1Tg6Mwb4uFWvvD4YboSRHixzTpNXo97EwTE1zgmBuqN2CuAG9Jtf3AeoYfyDMg84FKJ",
  "key5": "2LkrLKEXNTjPQHKYA7krioiVAMch3r2LRHc21eLxcWd8h8qv8WAn1CPkgx4FXxXzLxL79grHrsGWgWcWSjuEa64d",
  "key6": "31Wu3Dw4xwZNf5vHVmMK2bQgXndLYEzFPBRGSsDBd5R6himXyHwjLjUje23PL1SumuruUsfGsnF73j7dVFq4UGS3",
  "key7": "5AUaPw6o9YhbT885hyLwDJckyxX8Pq4DgzYeySUYrTBiArgXjyDaoY8hQ9ft7x1U1mjs8eP5bp9dMv7bDKB2UJQT",
  "key8": "5KZVXkcdPx6znKq9C4N3QFgSvR5Pavt4jaVSPrzUkNdgGM1GvU4KxKQe6yiWjb7A6oSQqFX1jx31aZAhqWWVzB17",
  "key9": "7D52BiAKmqYn9pWcN8n5qwuvJAEhGg6B5wb77U9JgAbiwKRdE1GXofV4fTCNJBhqctAyvqoNiSbtMgbHvid5313",
  "key10": "5iyEUsWz1HN3dj5zJt6GM4PYYNUQ9wXcLwNt65dGBuSmjAMRkoLgyREGw6Yw1YjhjvaNEL8HCmufvysmu3AN14aj",
  "key11": "3d3mJrNReza738j6rNMGvmzdwGzw4nqMgKyKEaod5ZwuzKZKSRLDGScYNg6ubZh2P7hQ81FMgH5WZ58eAcX6K2kW",
  "key12": "37JN36Bb7tVP14XFyTYL9aj7sPE9YSYFrfEn5fbjK6dKHYoJX6Xrwe9QPp2k1vyNwuUAUKakWPrN2sCFQRP1hs9y",
  "key13": "2csqrNH89LLu8u74Ln21Q3jZijAkuv9tEbUi4PeSAtKsn36caKNzXVEKHCvdA3oiGi6NE1DxMycBbtZD8TgJKAFg",
  "key14": "2EA3iwZL6qTwBNTqc1xm95MHNsNHgVaghfNhnzLVt8PSQZS5W6jkzzfVHRoi8KspGLG5jpoG1Lq58YKMKXhmXjc1",
  "key15": "2vErBuEuJbWBVdxT24bsPpfYgrZ1MzkPgp3ecVQsi745eJY5rnCpPC36Wgi6R3Was1se5L2N1yarCAhKGVV9oY3R",
  "key16": "ksKVCi4nKdud8NUeQT7AEqzBdTCAza9LnB5Hfo9bFBeaAfaUp1ADUWARA7mTynTWT3X3ZcwW8Z5c99fKbxY4KKq",
  "key17": "2UK8JQfAsSso849Qua3W6sjm4r22iftifaAaFjyCaYKk7rXE1HtegXQv5J1wvX172fH3wdZZsrqeuT2mPjXsah2N",
  "key18": "4xjtLigGLWgUMTNh5FXAU4CTfQ9GQeMgXkeN1R3SCaTUz8HP1P8mSqZTZf972kp6w1ygQYu4BrASaJXUpvShxNrH",
  "key19": "2juj7JagiiJfUw6qYRVWUBFnFRhHVyxXCDUrYL5BNDsNGAdMFbY8ym1g7HqG7JvAYzuAhFpJuy2ZT6cLdXSW9yzj",
  "key20": "5SGvMsr8WyEbXi9ZhbJUdyEL9Ug7tC3r9DnLBsFKkJnTtRkLPcNK9zCRceMfVU2woMnKz6Y4MqZAED5BcMexLLBM",
  "key21": "5pPnct574jUru2vEie4VYnxGsu4qkqzCmoY7Umv7XAL4QwbWZ7nBdAFBTiBhugUWbERXGvfsZL8mBUQuwg3GNvRT",
  "key22": "3JPVWDNoY4A8GfCEULQ2W69jYNt23HCFTTLNGn9iRhBEcu3rXubbPcJjzfzG13pZSTujQY6ifgSvsPUd8ZaFeggU",
  "key23": "4i9au9LoeVFvGSBnvVQyEFhao8s6ArZik8ubk149D579vDSBGysfbYtyzWc4v8LzV4vGAmG3DdtR5Nw7cdBKHyxQ",
  "key24": "az1x31tNRRRUdXw5swNEy3vVsGzL823LMUn7r28j4hpsR4eXCZ965Tdx38SK549FcjLj1FHbjqkSUYKfij86ykK",
  "key25": "3YGYSB1SSdqHNh5XfqdzY4mveNSL3G2Pnkyo6h73VmSija7RTJY6y66xTmTw97eqN8mqdm1g3asSaA16ajUkvikV",
  "key26": "2Mya1r56E2wpioXoP6tun95NcKPy6S4ZooeTGJPWGYPEUktqjXAKsbYGpHsNoAWoEtSPAqLNGFBchyFgM1ecXffu",
  "key27": "5twquSH1fgCKqDd7PC6dqWACwTwur7q8i9J6ieTu3UNzxwkEL6hFeX1NL2YpUQ5xifzzDzHdyFToDhjG87JPmW8Z",
  "key28": "KwUP4sDXTJW7ZCLz5svPwVRgHyF5faofuKp4cyGvvH5zXi2t2MESiWb5ywAFU6d8fH8zcec4PjqnMXSwefvjELp",
  "key29": "4pCkvP9u9WUFJABuMqwocQ1vijsT2vb5BBWLrGWnooaJnNHYVfhZBgj8745rfgJwKuaDWGGc8RoKJvWhUorj6qxX",
  "key30": "3UVAmVfAj2fhzpYmXBo9UuYDVvXgCphp5MdkWyQhV7fFwN1tC7d4axDrSM89N4BPdEMYp2mekD83WcEkBdnTgHqt",
  "key31": "pWz5TLJYXnr1VZL5bjJNgF7xJcBgtwcyNZPBmwRukJ8W7QL9LsE6N7qNFnBvvFjDp48Nzmj12pizDPBnq47JqSM",
  "key32": "64JFC8Wuufwq4Xi96qWX2PP9uE2xyuvoJsnLbDEsQRxQsdxUqRe6PzjwRZ2USNAgPh6MgjQ1x1FVK5GTNC6phGPp",
  "key33": "8D8su3XnLjHzP1DrjaWc6G2NW2RJjHG8SgMEkqdCAi5iWadg4ZceQRucSafa82GuEqynHybegfFD11k851AF82R",
  "key34": "3qaZmiik216YHzFDm2Rqz1pTJYCy7BXwmAHxByESpgadoUYeHUVfNCiPGgCyRSgfJ6JCWhLb4h1RPdjd1YKixcbK",
  "key35": "5cGhRaBgZYhPg3wdhJEr9EQKNJByNQAVYmGHVDHNxZSM1dsLXEvWBSKdhTPnduQi1QgypXjvQrSv6Qzy9Nb6YuNQ",
  "key36": "3CHAUUbywTkrT7eJxF1wDCHhEcwM2vwpNM4Xo1rifyUsLuUhHoK2xNrUhJr9K6qN16F7GzKjGcvrofg5bd82kRLR",
  "key37": "4M15gNGkzJLPdd5QycRVm6tLAYHLiu41L3wDgzFfncEeufCu8D5gooe8Ki4SeX5YmMoswtD8E2984XaK97CJXkwE",
  "key38": "48DeUaN72yaGkYswCpkNT9sViGZczE6EnmGBaQwznbvkh1unjnWBcRpdGNyNjS4UnPhigQu9JoZeVQmxbQ39fkC4",
  "key39": "5Ps2NpaLSH4A8H54Ykri4z2HR2dmL8cu7jCAmgvozheiUadDPo4EMG4aykHJ3TXcTsx5obH1HtnZ2y5dJ7zwJBYK",
  "key40": "3Hif6HEXoapwUGqSHkhwjniZo67KPn7QuVGH2TK5KWvmTfGGRC2L11B7F6Fp6hZkqeahycyp86nRYWAchsohwB5b",
  "key41": "4JaUVFgf9PAhFciW1KjyYcKKE8BP65dLDaQy1VspYXBSukD9mXU5PJ8jWQ1avPTLjRUAdSjmMYQHkc9bY35i2vUB",
  "key42": "67Noj9tGok2gX3pr7ebK3wmnwT3JaEB9WW86W7bEQSdMLkFSm6Cvku5iXkCHwnxBiz1ZGqoFMpP3t5gYRiH7wZDb"
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
