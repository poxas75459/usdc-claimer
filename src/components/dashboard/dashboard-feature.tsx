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
    "5QN4hN5yniHY4qUbkqU296kf44b7SwoBSdLGXyEpSJ1ghiCXptksTCv8iSZVA4NLYGVzsHp9VW4zQSKNz4W8x3kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PLHboCpAo6MEycFz9oDA34aXrntE961rbWLBREJ8BWRC6uwT7TaEegGTHQYqqRZqfx4zNoTLSm4f4trXijvYpQD",
  "key1": "3SSmEyBkRBghG1uuz9M1dVyoaq26TXm6QTRG2Dg6DnkJngJ7PY47xm9Q61ebEsuxwa1SpkrgqVJmYGhck6wNL4av",
  "key2": "3acQWW9VUeYh8oYVBaj8dPNLui3HKsXz61JJB11HpyPzrKEAGf7ZzJ5JrReE2X2XMsfjTkxN3n2Si5HGnyzD2XRP",
  "key3": "5nwdHoih5x7JceaHwiztp3ngiufR15ZsocBkwo7yRvParxfsU62pxvNmfUDMzUeLvBmRjS28fyPtkZAsZ79StKCq",
  "key4": "234wAywyLwTaVyyYFjqXLL7arBqq2fzMokUf5o6Ry8wAaayyBG2naW7jDuMgbEeyP75EEdr6GEEsq6rqkqtWNoue",
  "key5": "2QMfLrxHpUb5VpXxHuHyqSr7HiUeKdYSXwFKSupa3t99r2jquWCxXezkZque2iqeqMwfkTsGix1HAw16Jjez23BH",
  "key6": "2HExSX2PrbTAEdh1A6t2uuf93sa3C9RvzPGYBZjZYXu7oVG6t4di8opPNFEXa494MPj1MDB9hx2ZYdJqH5mDZ65N",
  "key7": "5xwM5xpsx8F4aCo7zi3ZPJBsUyCLBxhCcyebyfvMdrjw43sC2D8PbAiwEKvgcbENtdoPiqBpywKQdVsfi4x62gUD",
  "key8": "3AkTdYsyBfoxgvGxvqDwVVua92izvruL4RwwQ1eSBrsPgxHXiawDYUnCEVSRYpc8kFXvHabuzRnsfnA5dPGwPruF",
  "key9": "3JHWLwFRMmREves6DsE13D3NCcbRudY5Ltg5CyWXWy9i76AyVphE8vho8NYez1KPBYdPu1eZL1QtoW3Ps38hTTQi",
  "key10": "iUhKu5Vu4nv7nkP7WAhY2A7Ej97du6av3eNntfejgoGcTDrgusvqj9pSnyYoPbMqxBLRvSqqRay6wsR5Xv1XpR9",
  "key11": "5L9Wyt1QcvSdtgM9XcRGt6TufcHsETricGPQteGRNzwbtsWRwEb31kCgw1qRmKmBJwC9VmScKkmigPrQ9xiihrKp",
  "key12": "4iTHiqcPaqHSSWgMT9ztpPaG6nJdP6uHxghG8Mwu5TDxnNtcr9qnrhYWZYpYV6hjS2deB9jYRUChQAKdkK4eXJYL",
  "key13": "3PLypxQTSGGw6mZaMvdVNZudchVGSCwiBffU925sU2QBWnNHETVBb1gafzVbLmtomnFhbAdef32GUvTsSPyHosnd",
  "key14": "59zPiEDRKuhH6szzEhpoe43mpVgaqQ8jLoD7VR3NkLiFEfufQ8L7DiSNzzY8dPcHWGCdoSM7vDNYAdMNRyn39qdE",
  "key15": "4EpQgUwcMsxst6ZJXMSzCsVLhZYhfUaFFVZ297M6je463Y5zGL22wXiMR8EobvUq9DauT7kksSiDddN8cAEfyyU3",
  "key16": "29HNswXqwcznUgVox5T2tVCfQpq6ZW4WWFoc1L7Sri97ZiHwLHxrQZJDxFMdWop1xVYwNqGi2XoLjcr6HvW5VYMP",
  "key17": "32cHWNh3khMnZEZsAujMFa33a3WnjWm9nDgbeJ442DvbFSJ8ewGQyQH7LQF1Bvo9f6Ud4tk1B5ZQoBjzzTHyP7iz",
  "key18": "2YbnqvMVq2h5E1MaJXctqiGVZfWv1enTq4y7vGNJXTra4Gb1gvK99PSM6N8Hf3aym8GAQ4wdBXWxXNmm5V3H4Qpn",
  "key19": "49dSH7GyiNKaHHo5SFMWiLmW2ujwwwUhDPcVr6g75GG4vqHa5st6iHjjbVVNPtQQcXJLAg2amP5xHbUiYAN6cNiR",
  "key20": "4TLfZVw2aUo8gYfbp4fWipogjSnv9viJZ2Jywd4U7XLLQJkWeN2N7wNLo3o5UUsqgCJ5ghw79dUVstbL4dngUDqB",
  "key21": "2N829n92ne1MeQy7StuQ2oVB3hK5oUSa6YaKfwQ99GukaMMCmwpLgVKqY37vXMqywEbh9AvtkdSqkWZgVBK3xGpP",
  "key22": "5p3rdSuDGkxm1PVQKyCLfgCkcEXSozJrNwNZr7Xkg4d2M62PrbrajJrw2fUzQAvvg6n1JhFs3YNyu43pfb6MsDQB",
  "key23": "3w8Bt7xtaBKFsDiGbjLoNAYkT5vWh3s9mEXkawoyFpJvFD3KCxU4jeYqB6sL1cBkCw8AdN6FJ3erRR6YZVAcnhmX",
  "key24": "3TGH4KF3Gms2kURbLJ8d3nhae8oVUUaswgey7rEJfBkvn8xiSYasKskk9tUCY1gkcpAyG5UA48mKDcVBFtgWuTdM",
  "key25": "4HVnDauYCJXb4mLbASk43kHG5VoHYAmSzwQ9ecUqKTsrgYr8W3NWFXsMFNsoPwvaj8wqfkkzTW89nR3WaoB7WfeF",
  "key26": "5SW6z9KSz2CaWfgtM2j9baGebUZDCn7JdapDzb13Ms7zCvt7J4XUrKCy9zkEsRsGq22826KiH4U1pZAepngcyZeA",
  "key27": "XQzBu2AK4xpgoGBSqR2YNhNgPGDkCUCFsxzGRcMzvGBzqtAcbikZMdaEAdfa2zPfHZLkQ5QGVBu5iWfzG2a1SdB"
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
