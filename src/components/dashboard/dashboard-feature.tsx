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
    "FQwyztSLz9S5HPbT3EXVqarMVydr31KK7FPsNR4LhBMjkeHUXgsjrgimj7S3EKYUAVcJ3yQnnCHZoRk54jkasXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eq6VZbC2x816mBAKW5Je31EVEazQi9jhzwuYN5u6AsucUALAL8XJzTkq4rrPHVMSRrcHbvLq2XCRTEkAqr5AM9b",
  "key1": "2oiMQ8iACHknZBVeNDKHxSzHZZpsi9S6BKRbcaFMy9UXeM8gDDvw6duAaLJwTVSEmbL7oFdb67HkfE3zzZzMKq7C",
  "key2": "63fFREbexxHLfWPhQjqDXJaXhFRyXfjKYktHR11pqrBMDeGsa9d12eK2HqnSyHXcgFpUzsTqqMnw6uj6AwydxmXN",
  "key3": "FHtpjrrhSxumgPVZS2mZPGQbb8aGDv3jZiFns2S5Jq4kao9DVwswgd1mFCEH61hbWfLmM5kgd2hNDBwQSjaG249",
  "key4": "SKwLYkRSj6YfZAnFWLgtAfm1VEPpi21TuSzBSFvpidmoDR3JKQXRmihcmvUzzvnTpzvymV5ypVgf58sm5Q5y3wj",
  "key5": "2A18nHnzKFks1yf2m5oxr7p8BWfpZAsY7v8GiuZcp5XJoGhxJZ5Ye4vLtnQzHzAchECjheLpMXQuyJWv8eXSQqgi",
  "key6": "5CUAqc1LYrtGGSboLgWEdLVKWazPVg33g3hZYMyjC2vjkwZAEpSXdypMQbVivutbt8GVZWmqJLFv76hWdsN8z8Jh",
  "key7": "2wRh5qzvPLoGvEBJoy33uT2qW4DnA37LpaMy5dXt6T7iKt4y8o7wfFrXBuhEm2BH5Gef2tRcj9qVJXASF2gYJgid",
  "key8": "3rZWbXz6RNKzoDVFC8k7gJGq4j17Mukx18QCznCDqoo6TfBenBPcBSnbiXEvuzJoNvt5PHrffzcaj911jXWkNPc4",
  "key9": "CmKUDwvTeZVsUAYT11ozDq4FfkxPWAPRJErun8NvGPgh9kuW2xrG9GUJ7KUvhkrPqvpweFFDsZJVBThNxiyU5CM",
  "key10": "5MnoSUkXjk8HofHZ9iF3a6xA2euFGUuXX4BtH83j2v2czz1UtzHuEpYEzYFjdr6i1i7VqHggbjKUcnKnCPcveizS",
  "key11": "4c5YYrkVaPnL1q4iLzJQv4xUwrNVwvB3uTF8RvgPLUfkHokv7zmJkRXeYnZnJKZH1nzcvb5TFCZ4kbXFP9XNmFCi",
  "key12": "5Fqn5VGtLofgZpiCEro8mo6MjM22iEo7J8bwCT7cCGnVPkqKZQHDwZgh8pVoQ8oUe6FwyEd6bK38xEiwLsoumckk",
  "key13": "jV6ULFox7XEdFcGwrYnVm2bk2hcQnNNyvZ1CZE3vjmnEEeSigbgbrEmt6Fhukv9zaEqSaNXgK6PXqncQ4pV9MSe",
  "key14": "5EZhyRWdnEQgeuTvH6mxjDtLnqwWXZTo4KDzBe6KDyg3DqE7ZtCSZkp28AavA58UD5BScMstU8iyxqiboPTTzSzM",
  "key15": "3kePmNoVMLM6gTCwd4YjUP4dw67hn6uNXXC6oXdyJRQZFU9k3bUygeWSosHJoXdkZVTAJxTmh55kt6gg9qFGU96j",
  "key16": "4e3WbdbAMJqvGtFqxf9ZkmuDLRYs2JMvSnYtmEUZfzgCWGsrDCi1PjUUuZDLNV9eUDkeCRyjayDDWxTVx7oXCqat",
  "key17": "2akX9arzyNgzv5suzSLADNYNfZPPPaEN9ygc8ZWzQ4T2G8xuxc88GJn142xpYXDtxEJP2QM4GFDZuZRqGgGsFXBm",
  "key18": "3EVQRzTM8aaPZn2isVoSXi4nMtqt5cY6QWvVp7hicS8Trt7KPHaWutSATMCZqv5GkqRPHr1SN8SzSyPpjnGsVdw2",
  "key19": "rdTRTmbfymezJXLGzSbunaQQAsxwmgV8B2dstx3FLhtTYeQ7QTbTMri4sLKtD4jupFpiM2zwgMmqyCBMRxp4gTn",
  "key20": "3WfXNpo8qhFzK8Nn6KPqGRqDUZ7wF5F5zMmkr6XWGaAAwdzyGgpE3M21MtSkQ1gVEEwMHaWYYaubAj6tyTJUPUJ4",
  "key21": "3UKjecNhuNMCSDAbeZ89LHFf7mzfd9ZFTkxeq8rJbScmfj1ng1ZGv5uEhVKVRCnvLA8okzirpRCkYnbu5NgCwmDv",
  "key22": "5RTKXzjYwbnLa3CqJZd3qji5sPPmRPpyNHC8Zo8YwPvvJMQhmQdfabDd49kQyKw7UnyX9HmnAAan8A6k59Ln9Zgz",
  "key23": "3yV5DPfJqoUpHDtsbFzx2geUS1DThQDRekcr4jmpaUoCti2v1WHTFDxrR885T8WJ3nhMg4HCfWzZvfwG5Biggqs4",
  "key24": "Qjnpk8zBBD5DseSrt3AFQQfcbMPmZUBzENQSBdSh5ZTQmquom3bxJsaTKYPGiYhJbXnqbq68ErHNHsqJGrP4Bg7",
  "key25": "3toRavovgwWRqnzyJwsaE23i87zecwYdJS4oJVp46iHaPsSWogf7bVufKsp5gsBwqZbC69GvF64HLasLVi24bens",
  "key26": "4gpwTUxVoi22osJp852BXqBPdgNFi36wR8oX7fBxBk9rT9WgG5nSitQttPGQJexDE8j11LkrvWB8ZEFRmTRG7rYo",
  "key27": "3qzm5ocPP15JfD18yyWx6zRVKWxJvzaPMmA7dKDfMMwEdU3oPqAyW5jLa3uSwfzmtFpcUMYGBnEaVSW9JbivkqAe",
  "key28": "5wwpf46DEbe9maXBqHxHKFUU5g2HDPuTimRrJgCxEuUsuWLTqoAxRhcftNC13kEDgdH9BPKPivzK6x1JqD1F5Z3A",
  "key29": "528hrM1H5a3Tyvu1q7YeNotTeqfhCw8uuWSuhThi2Wejh1Vf5nGyvAcDWwNGtcNym2nuPyeDuykoyHyJPzHtv92s",
  "key30": "MDxTHxRqozGezkBAp7X9bvKY2crtbXHY59C2hAC1Trr687RNV26n37yWMt7GEwMFWx5XL99Yh9xEfrckc6zvdw1",
  "key31": "3mGfHmcXUExskroY3pGs2dqX6DECDc3cPrLpsjGZmCrAktHB6HRcqgnGAhTBcxVgWpmsHgeQetb9rN7UprsSYTUU",
  "key32": "4Sn1G5Dap59c3JBanx8F1yTpvq1RuWZMUSvCgTfzLZ3UPiZVvKxPZoNFBVeyJVku2WxTQfKGJWdRt45Y6p8hoFhH",
  "key33": "65g4FkDkgshW8J3GQ4HGESW4uUgFh7Ax9M3P5qNsMAMV1wsKUtRfvbvK7UuJbU7PrWajwXwzAD41qDkJid7HvvPt",
  "key34": "5GHgtuxRZJ2jzvnru23upzAqRrw61QdpmpA9mJS8DZSoFpEJ8pNwJWW6YkvdWFz4icMnjZJFWRgTuxbowJbwcUN2",
  "key35": "5AHuJUzhL7LkQBR9223pXDQLPMjMjSqzBYPheNogGhxFzNjgRBPypAsrQ3ZZTBcjy7jRfGyQK4G5K7LGkgRh4E8t",
  "key36": "2NuN7BBTTHe9amN7oJt76YTLKWin4xLtYRSnFz7b3mYoTV2fwTmztc3jgix5CJz6Dt6NQrqiUuBdTojb4JiWd3nP",
  "key37": "3BAKd9rXXgAw1PT2M9Bs1seTKRCvAZDY3GVo2f5dSjtb4w86GmYvoYdcAYLeyfCJRUA9hqUFEionTwJyvV4g6kaH",
  "key38": "5ahXy72AismGS1HY2Y9ALsSbhZSwHeJw2EDQ3RzMGKeJZkZHpmZzFkgnFCEjHB3eVFx58mKPwZMhoVbaW26H9nKj",
  "key39": "41DDfjjDpzP1FumcK1unvTaJpHTvPzZLeNskneJrA4oezVzqmNDn7n7maVKB6AwEZ5VrtYLiCXPsX84KwxejwLeG"
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
