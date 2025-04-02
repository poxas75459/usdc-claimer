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
    "5Cw2sH57ZjYHgEmrM3j71zwQssVJQccCp4Q7ZhFKrJfGU7SxjPMWW1Evgj9yEZeJSdkYPW5F7KvkLA7wi8CC6htV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PwqNhHm1WioQZ5GkcmAovSJj1sDJrbpiDuZzZuFwDcePLkio9xA6NmDA7KoavNcUaUNgoR6ggtbjC1pLho7aa3o",
  "key1": "3pR5Hf4iHhnYABmYLHtM9A8V5Rqcn1uf8UqNDUXc8quZQjStCKCRXNYhk2WiMxPVG8AsxGQADgpemg4WxzhBdhBg",
  "key2": "TwaMhBk2JquYzspT4VhUMpX4qn6fsDSj1kxveHZZALRdXYFnu1PZPCUBWiyaNKHhFbW1cmVMbooiEPzXrHZvi5U",
  "key3": "2YSf2YbEC9FXnfFFSdes1hHDPYW3t5zNoWTxA4sUaCML1Ty3AhTH9kukP7zruxKixaay3m2QTi7QimqT7jpSPjBU",
  "key4": "3LkwFzZx5T6zjcyudhFo33w7q5v1FmPUECSwf5syLsWna2AfdXTbfG6srdvCQtEyy33vvP2V3q9P9jFf7uBoSpxp",
  "key5": "ekbNJ5QvUAuryJNHt5L8AraM9cF5A8aerawX9Svawu7BZi3Hu9aNZTJo4G1WUmbn8cvwUGyhVSbBJ52WnKJQ4Aa",
  "key6": "5QxwcCXR6T2SYSjrYtQDmvm6XP899LxTheGYiwoCbCh3aLowG19MCp8QNaDqZuxzQPCsuBzGiEQfHqsd9urgW2ji",
  "key7": "4VXShBz8yYxfQPYoo39Pf7E6ChjV2zwLYY2Xx2knEwZpPZoufUky5xZvcnrvRGppe2UN9hWZVVUoviJqCDmXUBzT",
  "key8": "5HB2DFz2f5vxAaB28LYisg2ihZHi4jVJHX8LkTLEVtTgFaXJZ35bbnpMVFw46NEtD1X8XrwGE9oQsFFWZ6yKEMZc",
  "key9": "3134GzkjwqegmiVsLG6WjbPnC3LHb71VJED114mVsxaZ7KSLtexETuLjrj6BEtmXYzE3rfCGCUZeKRGVda1bUe9B",
  "key10": "GCtAgkKnt4b42rUo9xMVmfr5RKKySbpRYTuu7f9oQ5KM8gSvdQKozWh5VjqShFJmmT8jS9Bbh7U1wBFe3DwqZdj",
  "key11": "7YUp2dxttkD25HtcxJsKwUNGj51VbBsNULyPrz6xqBCz7U3DtSzZ4Qs3UZQXjAv1EcrnnscFVhfVH6XhZPGELXm",
  "key12": "LBcLGw8bRDbvpM58Bk5P69QVnpnFyjWACvPp2Ujmy5RpmvwAfHwZvW3xQb1rs8eCRY5wQfXBJi285JSMTXtVbbw",
  "key13": "oXVcXSrieeD8965otBwrZxRFHtBbSBTNiou6XvD3LtL8FwX1142wfgDbMyQ4rC8waT3jP4RFvw7ZLG4pTXwHNiL",
  "key14": "2kKFDjGKf4nsa64b6YYk2Zhh9VF1DrwwprEcxPZhCKWxJsXYJ2FDmQFyafu4qJcvX5Jcu4BApzBFZVwDc5iajrtm",
  "key15": "4SYHD8Mse4awX1tAXNHA37f98KXpjfJFWefUucg73FLw3NZG5t6b66xf4PTy3vbnowyvoAv9cjvkMHGBfBZ8BStU",
  "key16": "5nXFgwGbhqkbkNk6RCAa97TeG4T6qTRiFbubuzv4r34PkesM9DknjXGGwAXtBy7ifZ8RFymZAoWWnnfAi5nfer9G",
  "key17": "2wwUvRXCEusHB6i7jf3HZyYXHzSiYAu9upJogcR8oCaAsoYP4YPF47B85CM1NzbqyzXZHVLufknd9DF6pitUpgn1",
  "key18": "2qyBYY32hJPn6qdW46eUJjU8vmRRyyg2DsH5zo69cX5P6xAbxRMFZsHQBwMVCu7bV3vbeaZqbK3UNz4kbrhDcPp",
  "key19": "jcXKGH1aFzdzGEcMEs8DjgfVeUPWgRbmoif37ogF1s6XJqdJ7V1gvB1fBtoXrReCDYBbTRh6y7vogpZWaqzbxUt",
  "key20": "3X9MWa57KZY6uSQugCcAm1a3KnMytJSouBkFXAqVQbpKhCLNme9wqPnEXp7PLXvP7sAhaao4mzmFqgb9JyZtZsQR",
  "key21": "5XJJaQmKzZfvt27Ex2k2obLgKNeik8XfhBGSYPrXoQGVmr71VZ9bUVqGLquyshd8tmbaUek1hw5oLcugiaYF4h7G",
  "key22": "5GTS8FvqsmEZ5hZhqaEdAXdLogrwkmj5x1b6nkqizatz6XPKX18QzZs6bbjtPeBPQVnqTUXXnoyo5QPGXA5Vi8QC",
  "key23": "33Hg6bJnqvMiL1uy8puZEbdYnvhUB5ifop2z2kU8VStPQtqpc16cUM3FcKfqPuBBFUZKSF6L3aaFGkWT91rJoS87",
  "key24": "3FH2JcFVCnUYb6qwB4jJgRmV1wtbxHRWiXkuZSsAQ82NodCycr5y5RFcJM3zjkKGw9JmH18GHYQsWG8yB1jQ57vu",
  "key25": "5pwMuvuxtDZxTFoUdxpZSskc4shQUdFLFhniceVmmW32WJhFyW3mPMurUDWvZS7h7te3p2VLVqTugD8Pvob665o6",
  "key26": "QgaRhsj6b3UXAuy8MdoJQJ1JMuFrmV8LPoEisLYwfG4RB7htKvyYJJ8NERLKaGVufx1k4R5LCroc5vCzenTRPE1",
  "key27": "24zHiZ6cV5oXMYGpVtLbjWx3ke1y6XVccvFnfpB55C58RqswiAHLmpj5vpcxTGJLyBgPXRRJhDHQkxe474hBtpxQ",
  "key28": "5e7LPxtGgGNnrrSSHYs1XAz8R58FP6DJ3U4ptZTy4pUBgETPAak3o9Aa7FCvLBb4aaZZrwTPy5kGbuKJ1Ea82Zwp",
  "key29": "2e5FVssERGSPEz2hoQ2MhkcVTRUBDrEqS1TyWMprxVdGA56iQ9fyKeWSaybbAhW2jv2eSV8LfvFGSFC8SC9mRe6V",
  "key30": "QMAtWJMH9LDASghunwMpg46Czquxu7MyL9kxfoavQcdvn9np4jhz9QQPkK1wmi1UTDyNY6okvbRYEeHSPiQ5cPx",
  "key31": "9Q2AkZrpUyQNSKE6hecuxpAaJTJFhPe5X1XejpLCaVRHm1eyR6rAJWAfZLR9LSrYLLg4MJnqiy9EKEzZaBdVPKP",
  "key32": "5LR79ePxC8Ng472JfGKF6tavFCT3K4RNKuUYiKzYJm3FyPuFRqUfN68qWFPWeUVCzysEWN6WvCPjJuxXtjdH9GSF"
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
