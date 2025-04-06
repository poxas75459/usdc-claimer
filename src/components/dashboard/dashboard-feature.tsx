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
    "61aLQf3FcsbMm9QoBVGVPCTTJ5DE3ZqXsuY3cCdEH63tKJbZg2aD4wdNtKkH4KtbvN8KipM1aPAUMXCacak6Ty58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hWvonpkHv7baH9TKSfLta6ypzgLU8y3SNwevXWzsYPVWXVQbngTUNRaJUmgyGTT7wwk3Qgc73Nf9ZP17iFZsgP3",
  "key1": "2ehTynqxKowNLz4DGJjXzN9H8K4YbviyBFL2K6HMiy9bDsz8NK2oouNMg2p9cshweLDzJyzBN3dUz4HTmV2ViG8W",
  "key2": "4b3kggcz9XQ7oiVWiABKfU3uXwMXkaewM28NRwWx65Nyptv2f8qPW5okAuSAF4Spm2N1ZBWbGgprnXzRwgqh9mKN",
  "key3": "4ePNyCrofpDPhqEZTSzsLidF31ZvYmEkbVAz5kAjJmrq3tAufRHKFTC7C2Q1GU97RgPF9ZCoGXQsF7q195UP7Qfx",
  "key4": "ByRq1dMfsoufpoHw21BxWmSKQ9bEotAiPp7SRYrXtYspvLKF6NpngGMf7VrF2CAiGZVeP5sK5PszUaokDWNCAvu",
  "key5": "2Z1fMJARmyckHU9YPJMc59pF1SzMPv2q9L8v2a2qbanfeS8ShspNwFxMoibCPGBjCgRuvXQFddJ2KTTwt2jyVtPt",
  "key6": "3eoz1cZc6ndbQ3MteUE5A2vMviWvqmNHUW2DTiRFNSUmTQQeFizBNv47Yukp8rT4UAAJQWb8yLCT9er5LGryVix4",
  "key7": "2t6ojqZq3ATgUro6HYJQbqeJPMxA7LV8Ek371L9CTbPDa1naSq59sD7hqhJLpYExcWAW843qhf1UXQhQ45vTqjBY",
  "key8": "5kwZaiFurAMxShi5LcqhqfQ8gFCu65QsFYE2ERbEqKAYN9eqVx1qQns22LPF9VKwTjqpjnrZFL5rsEppGUYwV6j2",
  "key9": "2jM4AriJjTFfDQxTZKHPGkTsMmJzMj5R43p6SLsVC99JdwhkkjrMCTSqL5ro7UGAKVfXdcv1kjL5uWrqGWurPrPr",
  "key10": "31SSPC5EB3DkziaHRU3cwzanBxNudQ7KmgA8dugqiztvu1g5pRW9Cfasb9BySAZvkPqKGveN9Mmxjq7b1fWzjamJ",
  "key11": "31ZFd7yLg9qhzzAhRvsfMQ1W2buHcXYi2cNfJR9vrJnMRqTjRiQfKGELLWZvpH2RWyo2CmE5jxqFU527itsURD7u",
  "key12": "67W3Yh1zfskBA9qTANbsAWxMQwfz3Htm1ynzSUnNJG8GvRvWg5HEdrx5iM5FS8Ex7jr9R1aN6zzAshvxVxWAej91",
  "key13": "2yTvhK5bUTsAfCr6zLhVzXfA9zoUaQV2rpHbAHWxGMnMq31RCQcFUX2fvnqpacrLWH4sY2i2gthVkijMs767mJxt",
  "key14": "3hjQZdJxzQxEG2cYsfJ5mtiuNukwW2tGB39XD1UfcEDxTnpJJaeVXXm4xe89eFyskxTMEN2VDNR6PT38sdAPhU7o",
  "key15": "63et2ug6GMYJAADNYtPMDnMcC74k8JGUbA1tCztNdRmtb3CBQweEEyfskiatJVqCWaVMMMpByHSw21syvBzLyMWo",
  "key16": "4R562UftC4DGazNDNxXNbaQwxCvVioJLAGRitvTGP4hsdMXGPKWF1in4vi9Q6AjapHf1stY7x8N9iVxsCzA4WTqY",
  "key17": "4y4isXamBVSpGqTzuVNVFCR588Q3z2R1fF4CAKDUwMaCLaETFY61Y7uRCBAjBKCWLqXqeRK3Z6tayzXBux311o3m",
  "key18": "3DxWUGugPGiAuKpQ15XqJYh6wgmKuCtU3f9pGoHSNVquN3m8TUR621zbRNFpHy8u6B4HDZAmYqACc43zhw86eMmJ",
  "key19": "4tAomuxfZgHYsN5mDQ1S2r1ENgrCRpCKCcuEr4PzQoFE72cEYp5cbo1qqYdxA2cutMWSUpYd5GXMdndjfxXyX67k",
  "key20": "3KmzF8WAn65hSBQs9h5esXNV5mfX9nERrjf6whBDANbiacsj5M1ZJTETH5rFF1ckMxR6w6a6AXESVHc4NDDjxKBq",
  "key21": "4rXHGCnF3zKubhj9ZaqVZZ2XywKhvJB2UzjsFrjBrHT8PH5VMsPhJ8FiQGARaHo8VyCtzmtXsmzEHAuDGoYF4S9C",
  "key22": "cgBRLGbvxL86DwAQdg9jxCCkwtMUuAWPsBoD6wb579ZCaA2483DjKEU9qCvg1xrfpQ47EN6bT5HySoAGwVSNLSf",
  "key23": "4wA29H9oCSdrdq1eX5Cav8LUk6bgMWo6GN6mJDuMoycKsok6vgYmSgB3uz1pUKb7GjWbmsbazAJXuqmdb9p8HZB4",
  "key24": "4aw8cw5duciePFe1rBKLP1uXxMvNr9LjivxXbA54yF1EGJwaGonKGNgZi9bdHZFkaodMbDeGDm9Kfmr5B51m9mEa",
  "key25": "5bq8RWgd1iKdmfXWXDkwT4ftfFM3BJ1uVCAG9MSZ9iwAfggypycSmWzGMarYFgsebDhDc7BKLRgnB3JsabnS8DcV",
  "key26": "5UzpC7rFodRDRd8XB2dwQtvWM1eFUHqghb6QoC8cHkiAqs4sce7EmSpt4fzdjkRE2P3t2z8CfFhVfWDbqsb3XVd7"
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
