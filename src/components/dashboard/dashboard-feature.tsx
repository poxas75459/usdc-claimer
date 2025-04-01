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
    "46matajG4p5zsB3b613aCG7xtK7pQQYiibHFET4rk8XkQu8fPYjgmtTwfnjP4FBSRQLS4JWm3g2376vh7KZGJWZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q463VwtfkSh9B1rxWgii7BgNMagWDGH2WuQzhEh8DefMLneSmGPt5U1WN9e5HNnkonCdjKkriMbqHHmryje5KMu",
  "key1": "2Xk6cpxXrtsRtMJHE99juA9x7MJuYdYkzfeQNeWn12ieHGpq35KKdhxJdzUnxhybagkyWEqnyHXWaikMWmjdxA5S",
  "key2": "5qF8pmSFLEYSwus9z6px5cP2xuzECDrJwY1MgpD1Za5UAeYLvfLzbqSGZFjQ1jqWescKpk4U2WxS4c6LshgV4nDn",
  "key3": "5o7qLx5iskvSeBUvHiFBKPW2cHu9Mm8ZVJn7f9ENM7n1jf3NL5hG8SYeXCh6ip3tzSBjtpDuies7wpvYEzRJHCyx",
  "key4": "4gojnX286tfLWrPc6pGsVPwd139LYMs9DKo1ktQnZ2aZ3n8GqKq9nP9ycjiDtHZCPqaWFutbJY8KsLagP4ZKa6fU",
  "key5": "33dtgnGuNan11ArtCTxZf1XpqEnc3Qgp8DN75MAkeBgqdr2C6zTuBBgQjUhBSzQ2Rzhu3qAj28oz2tkq2WmU52nL",
  "key6": "4GdTqWjRvKbd3Z1gbhv6r5A23YLh4hehnHvqn4BKu3XjWYuiSoEEt3Uc4zchSYysEJ5KTK7d39ErinMttnodauqU",
  "key7": "5kehdaYZWwVQT571infUFxJtV8phMWxZLAd73og8pxFzFrFRKcCfFaq2pqqHnwnALGtrNq5CVmubrrRGRVHFczZH",
  "key8": "3GJX6pSkz9pPNR885SdGXygyUkj7nZXNMc1gBDDM7rfLEm5ZdDHDrDw1aorRvdDsRuZbewX5XfQ3NNkjhgGL9VtW",
  "key9": "5bRr1xJdXuM5c4Zx1ag48JkxnmYYvfWUPiTLx7C8FxhBnnjfbymiWAxCGaoQe2FrQfwXg6QdngoQbGe3oByMH4oF",
  "key10": "39AHYxcfiqp1J37hvC2rRyUsABA5nzTw1F3bWJ495Yjt7jktpJHFj1McrF9jGARbErZe8U86rTrSreWsvVaS25tU",
  "key11": "2a7132uRTdt4XzGYx8chfoZhkJMwdfMPyvuqbUYEJJ388vGR6J4pA1Vd5skHwiRwLJ86mSt2Yx4EKDn3MY9KPSLC",
  "key12": "326sBhvL2uBUBx2Q9eUnUrtFdrmQ61HjLDp8SGbgc9DanMtXUMdLfgeee4uodZUHxn9KTXsGZv8MEqryYtSrNxV9",
  "key13": "3UjGyzo7v2aMWHHRaGCjbk26PPDme16qVkgGPpcWzNj7TgxRHE7D9MEieJZiN6PKKCQh2cmcxpgt5wYyWJo92y1J",
  "key14": "3sRbAcvj9LFEEwhFaqgQtjwzXcesJxPCuFSpExwqR8WkUsorHpz5fs8jhdoo7hU7z2hfh8y288HKShUcpQu9Lvbx",
  "key15": "5zGU8QnBwk5TnSqosuBD4TTFypBuPGXENSmzact4dvKDoA6YnW9pyhAFAFiXNJXBqxHUJ2yMUwm2UcBBxrHQpYdB",
  "key16": "4rL2fh3TwrQGcZNmyyb18HQVZ2GRixXJuHnD2PEZjxGXPXGZwDyeanEhJuSyJ7D7ogfcapCRmbK8fGZpDnwtk4VT",
  "key17": "4MtSimoVMNBSE9N2J6Z21YWfU7pm8t7aRpwpttAym3TiRWR2AEwSGDc2Qm4RJ1cR5PFGGMhC4uaD8uY96gHUfx2r",
  "key18": "Xce55HV1SGdUyRQoQ8Px5aA63NdATkLctazJR3h49i6U7hSyDqQ6tzZyaJAbMXVsKe4A3JkESNQCyjRtBYEYDWh",
  "key19": "2JZLoXVYTYjpuU5JnmaaQSw19XzQUcngrs8jGXHp54dHwCzxZQDECKuQJNJZWLKFqooTfHeJ5NhJK4oFgKwf3yyi",
  "key20": "2E1aaAj3NMadAoVfrEF7XQvsRruAqh5FKJK4bBm9e6ju69JWm5vEriyWjM37T5KcXjMhnr7C5xKGMhTfMjgvweKo",
  "key21": "3WEeGATxGWzjMxo9c1Kn7gnVhU2yZcCkbwJiXipkbNh3q6p4JiJYtURdiWncjrCwXPJB9FZNuPHoTpuT8TssxWRc",
  "key22": "5DRN78ZJKbbkjhtQgZQE5uTzdxXtthuVkRP95MWsJ6w5sxqJrPupsQjDjzMeP3jPtgNQabupV3BzHykzB5DQcdcx",
  "key23": "q8G1bS51uLBtcqBc6SpFApRAW73V2sSvE7CCjytQi35L8q84CA2APGrjJ1HnYCoj6yrVovZ461L9ztgMSSpiUdA",
  "key24": "vf14pvYC67fKYC8q8UUQpeonZhJq85NY4F9mVa3dvU84dsmKxdzSdRv1ioxDtpaLQtTeSWNMjPpF8pNzwCcsfCS",
  "key25": "My8Qn2Eo5GfuYQySiDKf8Rjwiw45pQNpdAcMLXhA6TZ56PwLn3d5Y1EMsNr6WeyNGqGACR7TL96JrbQ1kpeTx3m",
  "key26": "5i1zuCq4jALH5Sp7wojSzpuEENYymLU9R5R2hskFjDiemuuMPjg4DkNM1KezcNBkP1tiRoD5NgMDDqqk6r2rmMQ8",
  "key27": "i7xgRuhNeAHTZ8RjqGyMWyGme3FQqyX4G1EoTCqNLuZb9VKssnRhAhoAohJpgTeGUK9iJu5MqgXTreEG6VWLtvg",
  "key28": "4riMHyadrXfvr4nqvKFuRQUYKj1AQnpdXEe3kG8bVFtxzMG3b6EEq4yHnBGHyi1RNLuJ3NjjV23GtkVU8aUE3Zxk",
  "key29": "44DPiJHRXUGJxtmUzKtsFzLwBfmfrNjJ4DiKwtamYehQyUQYeRLL7ghDwGCALDeMn3o9RpthKCUAg5URc3ZUobNJ",
  "key30": "4ce777acJQy81sc5Sxt8PBnQyZHp7oFmD6rjjxYFqpeNnvqL2U8SZ1qNgNKgU7G3u9Kxv8tRU531AQu4czm52qce"
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
