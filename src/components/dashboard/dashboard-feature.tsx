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
    "ianMy3gYeCoukmtJM8r52HtaypUBeEqiiunpGvSa7fyerYGZDcYdEmCw6BCFn2YAAmNTrYGtegNEPvoPJLw4SMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ELh7j8Tnaxojix1PLZoSPiK2ZEBHer8vwk47bib91E1HS4VXTPj4N7TLmhZnNWtf3ix95LMoGTuC1xDNvhiP2Fq",
  "key1": "qFXKZLYZGn2syv8v3VpQK1RQcXpiGmGdaw6xrb5nevVQZ9S23hb2Y78Sinu3a8NqDoPts9942Uc5s2mHCBwAy1A",
  "key2": "4UaAmagk6vimr14e2FCnf9L1iAG8R2T2SuivYbRnMQCWhUycURZZDpWoMWfdpv4JzFSdq2HMzfkUhq2afc8L3GT5",
  "key3": "4UqeghgU48LxNH6kwQHErvpn81XsWB1QeDD9wk6ceJtXSBDfxiVBoxdCxKrtA9h2kxEZBZyuTiDVkhmCEEA7FxkM",
  "key4": "2TiByQ96VFPKLHuDd9ag7cKToy6jokc6uXkrPi9XoJeAVgzmWGG8c4wvykwcp78XLPSoXgRhRxr3SwGTiJt9zuTh",
  "key5": "3GwsWHjewBrA7eSWYfjJ78P9pB65ceAGCUBMAXX4kKMLcLEERGk3rNiCoxpnyAUquSxnLj5FBC9tnzkpyLgrbgSx",
  "key6": "DXPsM1G7DmeeTsRVgXrJmdEVs1reva9fUbc5UVhgBm9sQYguJ1a5mNV2SqX9NyhscMVzaRQDJqmKRnXnYjP3v5h",
  "key7": "5WKP7Ct5vvdCE3EF57BJK4ZWdJQ7qmxzwqiw2Bk1Kvk6zVb79wiDyhvfTSbBi4VDdeyyoKVfthKax7Qe8wjSGV35",
  "key8": "47iC1Z9CMsy6P3TDioo7xCVFP9DG7exJuSMjUvvbt1b7sze4rbc2dBLRzbnoKj92MJ8wxLGWY6FRqHDPZ9WE2jPr",
  "key9": "5gCoY3zwPrEKJhFBeq6mLDCSzF8JYbq8uw2QsKxPe3vZxTBEucTE4zgVT2Tg6H7LKLDJBiRTinAvZ5MvT4GGUhJA",
  "key10": "5FLi3ruT1HES1kR3WWhryi7y9fAuLcL8JG7BmcZWSW5gnzFkmZ8cT1ptppWjVkBv5eb6HLv3REGM4z2xM5VyMQjE",
  "key11": "22nreUNh2sH9EwuEZev3gN3X9Zb7seojS8vyvDukYbiXxHk8U53S9vXXkxYsTQdKcycNfuhy4uz2mqdUV8fK3W4r",
  "key12": "jfNUG7DDAaYdzJWpRZBBjyFyAYHU8soNunxMwFS9DMY1wh1hk3jRocg7zwfx4c7VZN9SimV1Qn8uQkqnHcxwowo",
  "key13": "kEyTURJCTk7q9xQJbonW3DApXgjCF4jmRit3PzxVGgpT8LXUacTabfp38n2A9h5EHYqhapgWP9NdxjaszUc4wJ4",
  "key14": "2tMdanh7jufriJiA73kuZBCHLxMzZ4QeWkfexB9kLnpjadiDyysaRG9k6eWKFjp2gj1SQGqHHitdHAu9kCdsXoZa",
  "key15": "5DxWtXE5XzYrVRXUde7YTyx5mGKEdb66Gze6oFYtS6ZJe2tTCdWuyy9LMxjsXw9UQABdzbySL4ecdUWjc5yAtcKP",
  "key16": "4Lq4yW69eybsSgAE16PQXPsE2UZRbhP8cM4BUb1JwejWhurJLTNBpK2y1Nu6QYZQG6naGqqDgJRXFmjZPw1BjmTP",
  "key17": "pHpscXvCKaEcCTKgnHN5nqFVD1bNrmWG6Y9Nnd6kxSCi38fwzwBPxAwv7hX8fYWpgFWgbzkZEmCKrgjuf8qdFEW",
  "key18": "4PMbWiSG7CuBqZpZcE3Bb4mK39U7eAeNa1sJ3UxRiZ4pajVoudJEfJDxtombFCVGdVQk4fnQZFTu5Y2mZuTKZpTW",
  "key19": "gXFt9TmqAmupeKaN6a7WGHWAFWJhfrckmyWbFrqtqB4Bc7bRq9TgTh79iwmVtFuLuvaQac7Mt5KUBU2hFpwS1Yt",
  "key20": "2PjzPaqq7us5v8wE7h5dXBMZB3eCE331dXDfGxB6EGqZksG2kkmRJQ63PK5ikQG69E4UktjE1hYsUXTUtR6E5gFB",
  "key21": "EGVkUGmCmQdtJ9PMaaGDebXZFPhHV7bohMec9dD4DvQ66SAZeYaXggcGT73pFHSP9htkrjVBr6tMVuhC3LxeQDf",
  "key22": "5DAvKsETcqZMcw9jmp2f4p92V6dRim8onnh2qd2EPZzyqjj7ZvEcd5MnsBN2ugz8UonHxHvBSBwoZj7Cuhbf3Dxj",
  "key23": "3esTxtx8bkoREXcgESk8oBam5BVvf1DneFRWeMwE92Q2K24FnLZZeywkbiJumxzp2e34ovfybsv2NN66SB44HZ8A",
  "key24": "3UhVfCNDpoHHBU9zPPDXp7D4USvvdgPRK5pFuJFPtcE9qd3K99frp6F8E6xjE572RWu7YMDATEfLM3dZkpmtqPEv",
  "key25": "2kpCmFZwzkonkpqaqCQzRiZx1FQZzhRq265ayUfhNVYevG4owv2fncmSFi8yrb1uYZSo9ayMgsWyjDqo9oUTHg3a",
  "key26": "4tN7fzAE1JgZhJuzrTTWUheSq5gYfqkFkYEuRXj2gSuYkV8gJEKn14qG6y16ENasuv2N11sxgQfvovuAovLVrj8b"
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
