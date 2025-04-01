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
    "4ESo7XaQPX4e5xL6kENJU5mkL5XFmvNTJSUR1PTsVchHd23AEzAa3teuSA4dztdU1Vn3frvW2XTCzhUgTjYKBRVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DvchqEiBvxYCrVgaoJYqUiFyQNN8zphnScVxMw5txBZCbrAQ7CCwTBc6MNXQmYjDmN9CYDPKcnyKwTJGu6CbbvR",
  "key1": "5wfVDgjchRLRZHkBE3FaNPe8Xw9jMBJXcUbfgwUGG5BKLVMdt4zwfav3FNwrf371NANCWgU7xGRL4NKxtVBZJ9g3",
  "key2": "2yT7ij1WCMQTQVQ6towPnU4m2LqTbdUPeTwZG71LUXvgfyXY7RxiehXdsG7DhANXHTTzYR4dnfpkmZTxsf6aC4Tn",
  "key3": "5eYpFUDMnuK81vWadenpZiwU2tbpTVzLSupZyhjSdixxF9DLZB6arpFu997CLFWHvypYwJqtViNy9bUxqPjwhjBX",
  "key4": "rsiA7c9zVy2Vg45HYpxSEtie5pfVcmZRZ5oCHaeEhfqK5TcZ6UevZ44hUusZvhgRm4vt13wB5PDvoQXHZe8oD6i",
  "key5": "2UitMDvGQ2Srr9dPprdgfZxDGAwLRydzWw6FJaUDPMi7RgMXEq74BM399NbWTwnLXx5ggC3QCGTBgDjmosPhwtQT",
  "key6": "2GU1tj8Cf12E2wUo5CfMvwY8kVf2ttHSLNFi1Ep73748mT8M6ZGnM56TuZXoEvw3kKLiS9dqCeAAWecKzWXiqfXg",
  "key7": "2HK61WbfWtMPNkPHkHV8VFoaUAAB7qeLFG4gq8WwzsXQi1Ajh5PPEZK3ixqLmycgLtPTV8nEwrcvJVcHrrLUsT1N",
  "key8": "EaMm2ZoAKjrNoDJtoqqRj5DoyizjcE4tGP82uUtxZhvqSdiZnko255wsiDH5Kqbi3kzYtH6fSnifd4AeWBekYGb",
  "key9": "3SRxLhkWBDNe7TtqbDffhhMnacgcvMMiLNW2pnghKYTcGRVcE4vF6PWkTeH25t3tJLkXQhbj3ozsJWUuyaLvYWJq",
  "key10": "ZTxCifyNuw45VzLfgE15UL8soc4n8EB6536CP3GBRxvLo6JDqEa4eB2Dd3hYk3W1gm1RsDqwWbNSa7qD9wMomgc",
  "key11": "5PpFDwLg6uX5TxrpFVwEDVnXuoFAH5AzyGbtbfDPv8kgsJc7ibJDXnE66pVzF2KxFvE2D3V4XiwcYEyzjamHC4zm",
  "key12": "24WxkWQoP9G7B8DW2ZN355xCZgYhQ1MrmEEkkVzzdYwPsEe6stdekDYkw2MgdWNr4Jrmrqq2ZNwX7eQto8zBo1oW",
  "key13": "3BRjSKEF78oQaqGgxHiMmTfqyMNJj7YJx3jWDDL51AQHeRkDrTnzuihVfW4CvEwnnM8EdJDhfoYkQ4V7tn4uy6AT",
  "key14": "4sbo5mkrpmsFx32GRrEfHaec4dLEsoNQfcTLQFP8mrSba3RUvfh97cJRLj5vXmCmSyvT1PJKLjQYpLmdEMWa6mt8",
  "key15": "44xMwJEMRBK8nbSg2rRx5dQcdAhWpJ6YxiJRtuyy4N5mHnGUWCSCsh1FCNPEQgAe2aux3SbZvfb1Cr81DmqDQK15",
  "key16": "2poUqRAyTZB9yHsVnsojCR3hjGVKkp5bXNATWhgmEfXgV9DHSmnv1Mm3TqFxdiHKKmPVu5nCDepfif3dx4gMszm4",
  "key17": "2FtdX8soJCkoRSbaSZQokY7HjXQmBfnsRpRdse5vFp6GxeNTptmnaR7a1fgCNJsk4eSzTuEUBw5RjRJEimoeaU19",
  "key18": "3J3Pmteb3CvFbv935D5VLaRtBUTDqGHnYWNUJ2Dspcibg3YspnzUae3qLqyeN7XtVF5E74Q8PvTViJ8xmGBQRtGN",
  "key19": "2utr1aPmCPRQXMmLCJjedUfUVDBbSTRh1NYwn6UvKBSNC73pRS1HJfvy6yrtw5yENe5158RqLpz4tdteBPQiK9dy",
  "key20": "3rUZrAoQLXTokPeYSRRaGTmdKisZnjQ4Uu55oJC7koNXBBXFb6w1bnDWxf6DAbTVRsP33aBFA45wAqTvfJ528Lkd",
  "key21": "4tJ84F5coPUSEJK9kYUA3RBLhyg1ZmgEzHiW3M2BgfL4ME5TWhu87hRbg8ee6NrjAU41NGqtLAn5d95WJaJkUwoN",
  "key22": "4HFEn5QvVxJC39eSWfjEiCc46Y6PtMTtetcEZcLvvtDqcSnxbNr3KctRphgsfnadPY3CA2h8BJfdcDGPRAXNZkTx",
  "key23": "4id6yJshGKC5jyGjFRQDapDxMJbgUWeLqyvannXvarLe8o5JNNDpSNqSUF2z7st1KBVSriEEirYt5uQPDGhLrmkN",
  "key24": "2xtRbV2VtKTFVWGTgygYMQxXf1BHSNiCWwZMgHy4WZAaT2KXM89SC9uYbgmThwdGZCX8rMf8wuQbEToasRyLUs8B",
  "key25": "3BAX8r89eno47h82yzYCiLbJa5Z7qVYAXQ9FNvQvCz26wYeZ1SypRttFZ6CxPgnyMFDGsTGXsUjYSGchwxtpSxCc",
  "key26": "4VKwEqJToWriQtEN5vVmd6tWJaGFvTNBgAG8PnR2JeMZLPriFR1waz2W763tzkLHD9WPmJbvxrNm6gtYFBqpkWYh",
  "key27": "kuHXehgNEJAiz6gM5Df2QzdgYEGxseTMf6idTxhE4qNk4TuZLD4sBbNRSmuGL5x435AvB2ed6JmEgaLPFxvW2Yw",
  "key28": "2TybbjcFzZycCwwmUTE8fu8epzu5SDrw17zuk2wbdiL3rbTW8tJzavRPhxnRLDyqzLF1Q7WLKYoD1LjieBPF52ER"
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
