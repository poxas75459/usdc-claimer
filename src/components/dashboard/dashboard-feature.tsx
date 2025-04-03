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
    "5S4tFpbVgUHj7J8f3UgLzqJTVKfEdp85Wd8XYUztfqgdw5jUJw9xnych7NwwEQWmaCyDi2UJLH9zkBRauLASNQRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ya6YpVUri6RkZKMwsuKNxjEKAtR3MJQSDCWzhNm8fqHYYnhbUih8m6XArBzreTj28tSm3cWi7msRcPS1odcoqxo",
  "key1": "5ug7AbNq2ocuc3KAd4LFs1XRsS76S6ww2K8WeK83JsC1mfYQahMB2QsFNZF2djWUfVSKvAXRe8XLfvNH4cKym2HP",
  "key2": "5Mk3qb32JsnKsSfHt7HaU7vAcgLTaCCRV4ZUUacvHgqqEfVKYsgL9qqENYx2KYeEyohZqQxNs3WSnW2skFLoFTMw",
  "key3": "43s9KaZbn76y4RbwZqX2KP15UANMPVFxpi9kYnWwfMsK2horoQbX9nA5tCCh3KxHdAia1WBjgDhurAUdRGFe1Fus",
  "key4": "Ym4gNLkowDkVDykHr8bzRdLRnHDsK2ySzVyeEVPeE69BJ36gqzoQZ8r2uZsZFy7AbDXN9tATCd3rRQnw1J3Q6ng",
  "key5": "2zTfcZQ5bJTejsejyj3xyudNzPcAB18WPpTUEDfCWFwRhZaJLjVxkFUPG6Xr8xZdU5NHU64aPtF2TrVuexxmf5wH",
  "key6": "4Ben8MTuRM3opgL8gAj7DCSMSEZh1omqTdDnxgLZB2A6r3cYKGJgrrrYUYeXsd54ysCDgSWvz4jaVHoPz1HQ4Ztw",
  "key7": "4YQNpUj66GR3jsyncJxRkcGQ4H9VEsVWNcUN3oVZfg5PJKuoDUL7TWZNBHwQNqKze18dKNYobZu728uYjX9uv4ri",
  "key8": "Rf1sPoRs4du8PCpYDwHtvhFn3GWP2MmFN9xxWefpQYdRdkpNqXZezCfqhPNy76X8GWfD2pptxZjXu6iPUK4BRHP",
  "key9": "3XEsa57Z2WsugCVT12xZkzujjYEomYYAiuop4BRqM6m5QuhHiRMRAPqajrAN5SadnKJum8czXmo5j28AC3zo8f5a",
  "key10": "2cwtMKRSxkvmGhj84NibhcUy81nANFtCasUCPxtjMFVueVTbZwq9naikyZo5TBXcovkzwNfNsFeHCsHvNzknRm3X",
  "key11": "3JovLKpUrcjbXPyAEseo1aL3g5RMeho65AFpt822r1vMFXCGYPcBfb4B7meSYH5pmC7T9gaLUuV18bQNuCZPY6BH",
  "key12": "2xFVZmWqbKnwEDwtRnfGRyZvY4dHTTQY3ciLy1T84mEqdD8ZEtA5g2biRB7LJYjfSfvPoRzFa2MSBa64cGP2nNcu",
  "key13": "1nitaoFsFqseZVRZGc9qPQZFpJbYYwuNYAdN6o32x94f983d6fNJju7BtorizCTT9mRdSxCgjWeqs6pVUAkW8Y",
  "key14": "KX6VL4u9Y1YGpnz39efrt47yz8LtAoraTdUR2kEhWsA8EHQ35YTLb6aHJrMTG697jvtViZNzcXCL2sRM2LgkXBk",
  "key15": "5uXHL8NqmZRgyRUiLDkVA1Y8NfQ4NUgoB17ARdE7Hqx3QcmLbLzmoMacofDRHe6qyJwQcQVAsqs4bScxtQeck2j1",
  "key16": "3Qn89gFzSXwNFVHVtYEc3TP77o85V8yh8oL5QAFbLbK9Y5gKQqEQsvSxJAkrnJq4re9K1P8w4i5Zxc2TRJ3jTZgs",
  "key17": "4bzygjm65weRLtayRq8jdZKzDXimCDqVKn7JdTe89uAaq65twH6JrjPRjw7ScHTuBYDNen9cRqgsqESBodx11Rkb",
  "key18": "4yQE37UfQCSuPfJGx8SdBPzeuhaEgv7jEqZqPw711axBTSmbK8RM1Eb6puz69f8cYBwwYsy9kKNJVEhVKh8BFrJe",
  "key19": "2YMYVXTeJ3QU1j3QXPM8A8AidjddUsch8hVphAsD7sxqxsk1cPvE8URenCUYqeCGTHRmoiF39cGsDfc1idJ9sHne",
  "key20": "3mdA4nYo5f6Fh3ptWGPst6FCDvyrJPwZRvpuiXjfGLF3b245iffk9widWsnjzbQRt78CxPhkrdPKoi94qdH9sTFp",
  "key21": "5CasFbW5guwDw4ZrHWYcgmnfnAqmA6x5ukKU9o7tkkYnSNgrjv3vhsKCegyzCs8QG3kxFwWgx5ryAt3BbVHZXM8u",
  "key22": "56akwbBHpENBNDXrvXKTBJajV9rphchnnHgKUwepAug2S7XvMnEpAExRsMA9a4raqY51oBpQpS2hzCwbAuryNQXx",
  "key23": "43XFAWbtrrkWv2fmoYw7qn7D4wpLmY66h48Uydw1fmJj6MjbTfZj8RuChKJQZvPqCo54ehcS5dd5XNC9rRtQupSJ",
  "key24": "438jnEkWw5FafRNF5dsDs97yPXKMDoFgPSS7FaTkmXqc1vuCrFZ2X9uoYcxs8gnQYTCLGPFqhRGENqSfofo61hs7",
  "key25": "3sXDS7z5YdhiDeudRgwZbzMizfNHRWLcXapsJaTBdjXfuEhrFYafq583RfYALtP92yNq1e1Pm27TVQwnTyRdyYdp",
  "key26": "4PHD35hwRNUxW1PTUdoyrM7jGcN84uBTSZW3km97MUs46ma64LtAbnMXvfYKWuBruoSfRXUQZ7KgdAv4QKgCbGjs",
  "key27": "29S9nivETZk8ZZbNNMv4wvg3LNhKSSAG6P6Y4WxwPVSrJU5kD9xGzcvhcDQXS6rjo1Lyi7BnHYXv36PSEG41BJ9j",
  "key28": "5TzMv9YR4CvyaqVvb66ita93sLXarLf29nmkmDbTzGkFR45wPpyA7DPvTAxzAA985KFAykzuJqXKXRoGVVLf1hhT",
  "key29": "3faW5jRcBoRoBBjRtjMNYLVqXj3ps9BUhdZzv44HNGxNiyEztTXAv88cnbJQgQ9qkwCKTAdDhsSmn4KM8zfGEznD",
  "key30": "64b667HvaCGxRuQ6pQrQnHBTRi7xT7zpzd9nMyK3T6nZ3PsTUBkTjLfTuVYNS3NqD47nb4TAPX4uw2Vw5CtbecQs",
  "key31": "2v8Cr1jsdASNtfmWCyhU5SNs7Ycp6AdEjD4ApSD3ewbETNPir91FizQwXbmkBVdkSr3pXs9W57uo1HqfdQ4CspuG",
  "key32": "3CFptLRXpTgALgNLs8exFj6wrjiX8vWZoYTgFHeiTkDnj3VWkQ7XgYnofdVtruqbAzV3v1ff8cFzQuNPjWV7o9VZ",
  "key33": "3u6MAw9oXyDbZadUr6PSCLDrwVfsJGNBFg5TbbCcxjhFS1SoYcSSLNs1PyTEh2Drtdf4yHKA4eofK6dA4U4Vnhek",
  "key34": "4xNJT9jyc3cZvp9G6wK9JbHFWHDC15zC2kEfLbkU5JHZoZi4QZf7tYGKGT1keSzGCBcYDtc1KGYGsbBdwPetUs5C",
  "key35": "gwCXA2Srg2RhBrC2PMsomXw99Qw7QYnA4rLQzz4C9RShQnp3yGE5vULNYRDEPjzqDjRcQuP7aZXGDH1P7LwH5B2",
  "key36": "5R8tcF8yTY2ahUgqEyNeU9UijbcvsmJDXm1GJAiyySVVzxMC89MMTvXRNYbDzhHpqZ9D2o9F9udSzhVsCoBUywPy",
  "key37": "3s5N2NF5L48qHdJ56XpCmcvezzEQXs6LFKMs5s1WPE2dfCvDG2pcRwaP8G1eSMDeYwjYpFKtCCwCRbe326Zcw2Rf",
  "key38": "5kquRUJWPYYJGtXcANRDEjVZZoM4xrJXk1ZWdhQGC24nSfACVQgcNMkkhQPYugQo9TBqq6xfoC4EMNgmGRTWesRf"
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
