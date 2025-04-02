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
    "5PK5hwmgw37Gq1JH1KXrR5gULngiQV4AmgtKuhxcuxS6tMgjugazEDw2qiWpKZcTJFBJZEFxSftDQPTC1Upgk62T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JkgaCkKjw9KdDH95QxamGuD39KAWBy4jhv5dRuL9W5Rmc8nCcyFaPJnF52o4G9gw4yXkZXbNjcmj6QueBvWi6My",
  "key1": "3Ppv1aai4jX87MGf9ipAa1GsdYg3R8erEUZgyH15tjtm1SvPyU5mC6BCFrN5Dedeoh9FRyFP3m5dqpC164FYm3wF",
  "key2": "fvQxK5zmcYLwo9XE9qfzq2ZHfDVAai2YfYiojrkgjqDod7iLAGYwXvL7ZvWtVSbHuoJnc3dqgyMmSMyQeGPZ6qv",
  "key3": "3B5wiSzXyNxVF3QZZuNNbd17LgXA4TM8TW2ezV8DVWNv1vSf34W6sGuS21dKCntU7gZ1k5XinhUv6HaFqQ7b9rkn",
  "key4": "5iwnTVrEUNkSoWr9zkhiw4ZUmwPMB15qAKV6Qa63hD9YvWU4qLS9mz6rPFM6zCqPS3C92VWbk5cCBcsUfSaxV5oi",
  "key5": "3yBLCkS5qUmccCfmoyu4ssEXqU4gaNnFGNs9Hqs4HL6V9PqUbHDtdHqz9vCrPP2jVp7sb89vZsu1bJBmxSjh1DWe",
  "key6": "5PRNRMWJUcfaGd7WnFsVuEQnvgoZj7vkYrubrmmv7u3JDghRwa6wDpEMJwJzqEr28exRffysgp9nAKFTtZQA6JFz",
  "key7": "23GukyLkKdnPBUtQthYqXrbWEBvydWYzSyPUWwVtWAAfNQb4hAx6yzdvQSMwAWHfVdwqVngNnPZwcQgyth8U4bkk",
  "key8": "5YXhxkmcgsK8rraaRGMGRxMdsV2ms9UmgJRuVnaZmkSf4wJWXXDgMDhYcxspTamgV5sjJeNJFd7m2m64Cvi4TvCz",
  "key9": "i4ADFT9SdoVLYgNDro2R8fEGAstLVJ98pMYLDUWv9ZhysN7W8A8A7aUoucxuCXJCrKc397KWFxbp5NB8rTE8WFa",
  "key10": "23h9NuCd4J9qwRqwfwygGgqojS7c35NsGuXY3Q4QimayAiUVax4nNzweAzMJEWb2bec8twoWJwv41e6riWguAVqj",
  "key11": "3g3XhD3AzdiQFW6RU87YvMbVDsadGqZ3BWKfQw3ryvNzsDgBFGSL2x6BxHxQaANA4zuCJKWYLJ6WTLvpRSWVCJrw",
  "key12": "2WtNYyzN4ZugUzzgG5CzLTMyZ8ZjwygpqPJx79jnGjk4MeSCgGT3XCmBSeF4CRBMDzS6f6YLX2DyxiZTHV2CcSin",
  "key13": "63dK8zPK8WKJebLAAFu2FGaQG1HR1bBHNB3aBoe3BGPEG6g6iVHRYV1DEUwA6GA1VqmSVuYNfNgNFhXhGnDwcPYP",
  "key14": "48rXf4ygKo6zEuJSWeJPNKa2zg38fveKehhR8ZgyorybELydf4GMXA5disZKKqPd5r5qCGwHytnaX8XDtkTT8a3J",
  "key15": "3WdiRZUPRWpFmyeXjca3SEEiEPERpVMYbJwEXVqox1VLQjzpwjqZKuT8gGF8KRV3VAKxZ9qX8GE7nkCYNYk4g3JX",
  "key16": "5W6rW2rbRt3hU6kMyQ1s8WQmouG632MLAQP1A7Z54kf9uobBLmdp9KXBHgXdeedo3gNePQbkYeYPDnJwWvSc3w4f",
  "key17": "4Z2dZZDvPeQwFG8aNFKzGJPZqvYbf7LaFwhi5hLQxqPv4x8qbmPww7hTz9Qbq7DYT2xRjSdtfrSUojP1F26PgeNQ",
  "key18": "2CGC2owUr2gpSQP2fMTKdUj6FTGpyGYBYCDZXw3tBK1F4wtaLtFv9DaVz77EuNQwsxCTZRnyuKhHWHMzbPrCmpqU",
  "key19": "4nZafhx49eG9mh2fro7WWWZA39JjeHGougs5yhr7Ns6mXDPXpBqZfeYFkHNf3iwBExnvf1mao4kWhCnrQsjmZwGr",
  "key20": "zuqGVZrtuXbVoX725UF1tEKgVByfiera9ndPPactUF7Ho3KLdSJRuzZw17yrQFSuwzNarYXV7czugPrUeZvbDW6",
  "key21": "4ht16M5bgRaA3x15vTYu8GyavvyFQsoKXj8btq4cZU2rxzkfiuWKmdUrPzRVTkKyd4DC6osFrSDZjHSjXm79uH18",
  "key22": "3gLhKo33vturV71J9BsGCU7exgvsDDnYpHJnFpUQdxv9ab5sQgYzXQsPHcAB1HbGBEsKhgDnFLDojXvDFm4jgrZa",
  "key23": "25kLCbrpqtbrwXiX9wuhLjfP68QaN3gjweM2hCyjTMiSPegUQUJb5iFG38ynZfdd9gwRPryM75fWaW6nwtQq8Bfv",
  "key24": "TPCZ3UMnPq1RyCUeiPxbPLMGjx1v52touQxSvtBcxJzT1kBSk7cotkxTrvAe8F5bf8ETM9Z3jcRBE8QUyZYfBPr",
  "key25": "54WWEhj7PZKKWj2iQuz9c4JaZPgHYTAQbm94EnbfkXRQy2WaneBakhoYuitzfJpUxkPXnRyx84UG5vRa489kUt9B",
  "key26": "ednD2u8os3LovMDuB5WotqDgHc6ymb9GDqrp8hz1HK1Pw5gGUi9Cd6MR6o1W9b3XpHbqyDfFWxErcaJnVjeDzRS",
  "key27": "5uVDx79DdYSSHymzaY9hDp7tzvbRLKyKstsNDmL3Fi9j2C3hCXWfQhhboQjsSKQNftZh5cGwNuAE7mzuizYRLjfW",
  "key28": "e8DPoq9mFPx2ujgcjSRPwg8nXTeu2pKYgwnrhFrsnzFSW2nKiELjAYkvQZ51Lhnskco4RNc7x5bFJpjb54omEoN",
  "key29": "3BAGQwLQQE4qeUbpBVrbhVUqMxjQi3oynyjgRBhsvDqykJRqNKoysTUxQ8ZXqU6WsBYZ2Xf2xoGihgKiN673vQ3q",
  "key30": "58TVgGPxqUsrUwxAcbmUvnL7d3VLoQvqM391fjekkTMDPgF1GMNk9oFMDd9qtsBEExJdi616hPmC2Ee65jxv4vMM",
  "key31": "fctZK87cmdFFZhrsbowoTXZa8bSsKj1ATew78NEZA1EmXbnRXcrBb859qBftCvRs3xWitNVVV7BnUtNGx8svVcF",
  "key32": "Axo2gqatvZCG1cK6ZzR3WrMz3bfuBcEg34tpqMmtuSzFSZJMiqY4tdfFDXQAis4ed2WyJrNLJc71QnBzPeKwbwB",
  "key33": "2b4iAEh73PuRqHDXxYPDVFWao6gmLnzUhi2riUiD9zDPi77rjGg7x8kb8MBhfZ27CxGLnWJUmNHKtpjRFBEvhc5k",
  "key34": "ugq6iWcuKUCvirsxWPFreMnjdxSgXmM721od9hZEGb3zuVAT6cbYRB21uPRJFntX7QLywUW9BWSLY5Zd8XcuVHr"
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
