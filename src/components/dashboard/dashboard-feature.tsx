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
    "4THGRTw2RBy6KnRgnuEY6mZcxhWbnDiQeGg7ZudB1VjL8MjV3AdNeA2UFBwhSQmMR8wetiF5ZCVUpxNoKUcfBaiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MkEJmULTXbmxrSzgMRGXHnMV8noPHttsfQsVPbSQRkZqDHZ5ykt8M4QfwEp5KeLjxDTQxjjz8Pxd87ZUrB282Mq",
  "key1": "3yZU17yXKjesP5syX6vNtbARc3y6WKUBYPpuUeHbT4PMKEheaJFJPpCanDtdjamfXSTagDaTZk1Ahg9xcmDTkvfk",
  "key2": "4iWzH9nSKnsGWWv8pFhxeK9t2JVfUM7YX5e795Jc9FigDQu74vBnSUUQqaQAX4BQvmkKaSVeeWGh1pM5dh19tNs",
  "key3": "4XU5C67FooQQejSzQWdBqzhCMRW7KojEynfjTroGtDghN8dDqjWa9XLTC5K1DGsBK6KvuAzGztCAZP5NeAyLy1U2",
  "key4": "4bL1aE1nxmL1FTBHSAkEMJxBgfA78Seo1KYY9h68ftdefRAVjgTdN36n7zvzZdZAe4qQS3htfGpemvcodvoUNTxQ",
  "key5": "4XA8LvzZAUCpyiX9YGJoi51H9v4fYNpTRYWqAPEGm23xcMZ6792zwNECzPRfiBP99BsECbeHq8GbabVmSugF8MxR",
  "key6": "3T62RVoCycyYo2HnQ1amQKmNbqtgvHZohoTbTdqYNhkcHVSYdnf1eu3V8PQNY6zUJEWYFKmpSwQ2Jh7V8NRi8e5U",
  "key7": "2hnoV4JC518Yd29cNt4tWDPHfdk4jh9Mq99aY1AG9i7rHqDBYDipAky8ygGv2XoLacmeozf97zBqXX3ruDY3gFv4",
  "key8": "5NrvVjLDqmHqW3wcsXKECedd2eic4LqPf8AR7ECUN5o9XsPH41AVpUDjCZ74jgHgUE2eQviCR4LXB7KyVb8Q2pJN",
  "key9": "5hNiqzBhY7d1SeASxZeLfvLdVuQiQrJTgBYPyLVoqsxWx1NAKV8ipDNRdUQcCQmRdf9p7t74Qr68rmJGstWGyRDM",
  "key10": "5jRc1FK2tsF4xvhJNiCiAcKamyHT244E69HFhJ1V2S7o7JfPMhJFAWSiSDmeXEPDe1XKJd7AxZPT39gMfBGPY8Cu",
  "key11": "4jMkEWcyAhTYstK1K5htPdfFEhZriFwhwuiq7aAdzvBVzF2R7DKJWzt3iDtV5LFPk3s8AL878ZykL1Lm2aa4ZCR6",
  "key12": "2MjGJW5p1kKKN6HCHCFj8AbRsU1TDs7taRQg6ziEmF8sfLXVXwsrbsHUEWca2Rph2VTSweFV1uniUvF5zPqbyA5Z",
  "key13": "61sPVCK8SaaqdGg6wUtJKZRAVJVUxXGUKLjiPfbBozrPy6UFvkyxXHZomxjn2hsN5mfXVHDs6GCXtFbPWP5PHnzs",
  "key14": "2KFWSTAVQf2jpchM9H6Y3ULgN3byDUFx3J7Tu4gNwjVSJ36JRqhpAqU1bgx6GdiEkqdhTTxejwTC6Z2HXYcGg9sL",
  "key15": "5hH7286MKeksDgzwNT2ad7LY9fD9a8v5s9cvSVG5nFkgK8VTzzYcLba3Htvsm24rXm3JKweAQKYJ69d6gjBwgt53",
  "key16": "tEbp9GfQ7XukhpgXn3KQxm3ViR7orAXGWKfnWqVF1NGUYkSvjYuR1CBTGBfCmuJ9BGowSRbn8jD6vMoqFDc267Q",
  "key17": "2wDqVioq6CUTxApaJ1nD8foxYXGp4HaXcJdzxR1V3citMJZfnL7BvNQ4w4YYrMogf7xPYctmb52LZxRGUUqJRQMi",
  "key18": "5e8CSLTN9wWbAcrrdDUK95toruCj6yGowVvnYiNfwzNh9WBEZv5oj5jeeLsaEtP1GsRCuFRffVKGxqYwDniMDyaw",
  "key19": "2BPP77kP97MWZLU2vQaDCy6JdnKU6skjJaNqf61WXHtTKf6fr1JGeKZBotng6A7psdcpwysvU16fh3Jnx3oWkcrU",
  "key20": "5qCcZxn2ZDqjiyC8V4r8A9pisFsAcCKmpcsfvx1HowLyyctrG2EaMUM7w6RNgFEyfr5SA4jFaiT5so7YnSKsQvrm",
  "key21": "2L96buLCPqiDvnWBmpz5GHwMkHsqSxkVms8Yctz166XovgNEawvHxiSzFHWVozysPteD8Q9TyVKEB2RA2j1kK9gs",
  "key22": "2BGDkov9eL17vzeBStEWwWNN6YP2tbGuq3bWswXXb4NPcthyZfYLMXYC5BhUNDxTFMjGXcgkxm1JpEHTfwEscGbs",
  "key23": "2rdZZBfLg14W1PK5bZPFpKUMsEi5sFLvNsob37vznyUaXYWP8DSki9ViqDRj79Aq9xqXbvSxtxx8y398GyTQtNpu",
  "key24": "BEi68jCB2JNAamV654EZX8brXJaWREh64Utvv4dzKHzbAv5vmTRRSaX4iVFTF4qts92jxdXExDkQKt7GV8KDhLV",
  "key25": "5tE2McsLJuPy2uTRYRKUvoq9SewwECQsdzVmf4Fq8V76JnwwBwC3ptzU2BvLGLi4GgzTA3c3ZpEDv63myZZJbUQF",
  "key26": "64h5RotKWbdaYNBa1AnFbdsBiM3GWshxbiHooC1EoK8MnbiqLMqvRZxh24ccHS4kQZTchABcKFPwGUJFcpRM7aZP",
  "key27": "rGRCG7vVm2pMXHef3RqoGxsy5ksjAahpAVAqH6tq6KtuqagM68CYPuXvAN1XEc8nscrbndnU9B23gjaDFi5ckv7",
  "key28": "36LVbU3RmXMD1Pun9cKNTqVSi1EKfoAEJBTGWq7gcMLBRsx2YVmfD291kKrpr8QDyJdyHcNp7qExV6pCsipH3wCE",
  "key29": "2BoH5v2BnA8CNdHjUB2K1iXitqFHNNQwxUzyYV2REX7HPQLXz7ULrmAHWvN5F8SD4HEbwqFPfsvu8d5SjuBxYtcN",
  "key30": "icNwYEmcnTucH1gBMaWv4YRSrWzGzJEm4dhoq8CSohvodfhBR71HNikByt6NfJXSEoQDnoFroF1mYFTTp8EJJAx",
  "key31": "56FsRPhBb6sTETM2HHtYVihPQCGTpNRCBuV7J4TGiNi6LUPVWhiReo8BjENy5PDAvt6urvL8zVwQWRPi3fcEMpBo",
  "key32": "3Z36wgeb8qnmu8F1FKbbXW8f8a2WmYgc5zfLTMLVbpo2ZAiV8A4iuDzicK6V9rPhUHYBz3EGLm9nvQNuG9TLdQWL",
  "key33": "PT2ayQaraQnRY6oHb1dHyokm4LmtGwJHjRsHeGQkhDbMBxuV19UYH8Vh3GZVc8VcbWNmivsU3mkYnWJnie7EDRF"
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
