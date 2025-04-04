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
    "4PaqzdTh23UzU4hHhbMiPFvaPwEb42mGgg4kz1kPBKdy17TcavM5BJk1V6wRpKfJgWDzyNm4czpkJ1Y1fuTRZTY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uBgtqzHZUt49AzUYiQCDKLxiHe3vi3puiuwGvhvksGzugwdj6CxKctfENRrxNb3dwjVzEPhjLgRfsNDh8Pw7RKG",
  "key1": "KRMcLwX5ou5dP88Rj8ntmK1ESn9Gdg5JoC7fSe4kxXCJwiekJn4xU5rijaBanCWD8qV9cubnxZHDiC96QfeQrKM",
  "key2": "5dZaXUKCNp3whd5GxS3qApxSDPuqoW6cWAQ3ZpEhg57QKcG6BpMRisYMYhcSw3ZTJmbLPoXyrNaRrrHYQLPSxUnE",
  "key3": "3vvAuoJiFhA8VMhMw5rPUgnDSUB7YR7pk3TQZLsKhRh7rbd9gBkqv6TWLGtp5FvYE2m3VcLZkRHHcMB7cojxQMgD",
  "key4": "2C68mzCagUz4cfPkXfRvLWZUBHsWGrhj1vvL6qD7b5hHGhtPsjs1ju3DY8bBLzHgjkQEpKTWrLJ9XcS72yTK3596",
  "key5": "cV9cbTsedn9r8qHe5Li2b2kwYmf3rh33TxNSgJLNwuu93ER4hqDmBofpDd3yE8uWZhrCrCLZaU2CPBYkLNophPN",
  "key6": "ghZX2Ti6Jg1qqHaJubbjT4T1mkuxVBhxvrpRv6SbgmG9NWrLLcBd5spRd3P5M37gHFwnPgTHryJe8qBwLDJzeXT",
  "key7": "mbBtUxHowUHkARQ5Wg7ttd8fZptvyJDqkNWkemdWDoia5RwbaUeK92KJQUffR5diXxwScfrHfc5LUWSADFyr4fL",
  "key8": "2VN5Rt4V4FC9gDKCUfncE8z8g1sg5393HU1JV93aFTt9fsVkaVtVQpoNNm9gwcaJ4VWo61g2GgVTwxffyudqPFhp",
  "key9": "4qa2Rkw51iekwUeMs4FGxwptAp2jcqNi1zGNH5jArKHgWjX1KP4scp4a74k34gPUdExxEpY7sxeZDphV2JiKhzku",
  "key10": "1aX5q2R8CibkFRQEQ42oUjwdoZWJWAjjC4W2dr17FfnL5kSNh4TBKWKtueMB9dcnYhv7J2MqzR9z8Xux9ojt1S5",
  "key11": "KhWETqXcyn4xHQkgJ5itggXEZ8g448Eziikx52QcugM9ti1sBY975fB6ofbQo8siiQhW8iGQSKzYd3bkuZqNsMh",
  "key12": "2F8BvimcuwJNKSzguq2G1idjVonH5BjfrrAC74j4sc89rETTkHZH3PwH77ioMNfZuCuiHKhcyVErFmz8v8SQ8cqx",
  "key13": "445F5hiZqSzM1gxUU8VYGcSnCbnGdNtGgvDP7aR24HniNCUuGVZt4DcKgEdzVVErbJjvRXDH1sFizHwQxnxha5RE",
  "key14": "4GW17kgNUWpzP6s1PnN7P6wZgEvyQfJd8HKpY95aadTqZWQiyz9Xm3xN9nN51Jz4gNGzGnbwgLmi3Z1cLU3y4QtA",
  "key15": "4NK5LUZ4KRgQFeEDmCykiXbt2ZqGV7omBjDGEe1nVkmXxjdAVAHeG6KJqKY4sqqCRtViYiyuHR8H2panBkgZx8P7",
  "key16": "UCJ91bESTsno7jQJN76zdgHtvH7iip3irQMDH4pbEdZfrXL24Mr4TuUkc9prU7tHCnKESfCnLQ8CZGZRpqdsgyb",
  "key17": "bgfHuRmiNWzLKm8UT1MwVZC9wgihozAJbcPHvrw6zHnn2p4CX7QTAhrUifioRbSPXoSCcFMRyCBsJbckfd8FcB9",
  "key18": "3Rsaq27avWmsBFg42GfXG7Dk7RKYR1SPppDy9jHfM8TApK8QhXUJUUhjbf1PZ76of8HV7f7G1n1XYQBN5fJCkCmC",
  "key19": "21NV8ZR6opBGysUPdSK4ATPBg6AJBzorY8qJDxgheP969fc5AswAN4F42EeCiwnTitMWGse6Wv1YvfZHHicPux2L",
  "key20": "5Hum8ituQqzH84xSyZHcwr4DG1DQGaJ3bPQDrga9kzLSCFDm6SiMFzJWSsJrqyp6G62P6dmb85iriUuRJ5eG8cDV",
  "key21": "45pTxJZZGaDdaXneXFiDsekCPjNRFSpJyn3wKPDqs655EdNTAFymm4J8vJgGShCXRtZD8xGaaCuF86FWuQMdtwex",
  "key22": "4HnCF3TvrhF7JeyUDmN7o45jdrffypF4xzdku2qxtjLQfWpGffJNGzwRKSf7S1Gva7mX43s3bN3v7SSV1syGxQhp",
  "key23": "588GtuPm3WnQUutHi9XrJRo1E4qbdtN75hUzif9u3ARAspm68fb1jvBNBh71vToD8zkDn8KSho3RFpFePh3Tarmx",
  "key24": "4qEDxeZMitkfutXFVN4WNj1n4B98pHk9B9uRq13vpt5V18Sh4EnZg9DvcHY3tZPDBqu6xA77yiHfae6Kxhp3niaY",
  "key25": "5KPeiaPMK1paRFxmNier6YWsXuvCE6BEmwFvF5a8QVxh5CRdMR7RQ2E4rRUFsMSyfBC25LtkcR5JwCxGnJWv3nmv",
  "key26": "PR5FES6CpPT5LA8BBAbxyhoriAD1jy9vdrVFxucvigEPxFveFzEXMCC5ryJ3xxBVanuNSTJpgDuKFjcEuBzTct8",
  "key27": "SkfWnMG8eHyRqbHEd9krXtx14PQemUo6E8ozuH5UN8fhDZ4jzXUZPpy1oZh267Qfq4ggq4gbFNPRCNqcchyiWXb",
  "key28": "1G5mWZaouR21h31u18KywTrMVL1jgsm5qNobf1hheJ6PsZDdCZUoyW7jVkH8Wj6vStD7xRbGFDvFGZz2EmyCRjo",
  "key29": "3Eq7otCRXw6BnCz9gmrWPAukStzgv9kXp2yqtoKz4oU51eTSfMHEBk1z99Gk7HJVr1pTWT8N1iAGcKnq5kCbyUnK",
  "key30": "4mQw2wVWBFynNoHj9sMBNRJybf1S1qijnY3jSc4qbjAsVmaZfLchX4fc6LCgyjmHhJT9zUNpJvbhU63bZp1GLJgz",
  "key31": "2fHGiZGvVbeSQwuaH233BY6r72pwZjh3HMVwa1jE5u7vVdiZC3jBKdP3p28ga7czqZLV19CbYFa47p9mY3Tu9k61",
  "key32": "2Jt3j4gk9uF2bAr8yDJfBaZrEhhaJm1kqFrco27qQqnGKJRY9GrQvhpiAXiSZHWb3PBQExsUzfYFuYoBh68wzLxY",
  "key33": "5ABsinn6TqiBcYzXuHmtWAbEh9g6LxsHDWnnMFmmXiKSpuhfi13xD18wP8ptt5b9ez6H9WoABPqX7vnj8vHxqRER",
  "key34": "61XMT5QkzsWWphmnwJRpW8NkR5jHdFD4TQrWq7SJJL643wXqokGAKyA1SzsGKkgk3tSBTZou7EEGcn1rdsTtds8K",
  "key35": "J1Br2pDdRihm7BhBva4uXGhqCcii2r5XPiap6m1RK1jjJXSe4pFN7PZxZMMd8VP5VhB179wxWYoDzFdYg9na4fV",
  "key36": "5quhJpz6yDXmhp7SbTwTakyS97Y5PAgo76RR9pMPgzfgykLPSJLqcon6q6FAiz2YQDvdDpymG6ahNBBMrSjzZpc7",
  "key37": "3ZVLnjVYqCX8CrxaNC8bj43z3qY3KEnrX3728HQaiTJYQYJGoCMtpn5ZqEPALE6R9AqHpD2SLMFftqR12E3HTbU9",
  "key38": "2dvzV919mnpPn1iWTca52TnKsBcY5CF4dA28s6i8TSAMkPdjTDBiCzpMFzgVnJksTMXXwbrHnLDRAAfenuq71MEg"
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
