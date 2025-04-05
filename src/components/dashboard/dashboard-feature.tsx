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
    "37uMXPPWr9kwSdQtAjMwegYQtGYxvenQUDtYr1vcuxbBm8Bskf293jxX5hwV4WFaC3j2cKE4i1MtGNKhyVRdrHGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mqbm2tmqBK5AGKpRRd1xt4fLCYGWPjp22psfBRQadK5GN7DCv5bCzcfgN9goRBuE8FVAkjt7GHtPbyQYD4NKQW4",
  "key1": "4z7L6JT5nefvXHdeSho7EMAFqaDmRRP8HM2BpqkLjEcP8TtYut9hQd4oHwLAbtmx1Tkjq5qF9o2ffu35aZuM5mZT",
  "key2": "3zX9Rzb4Q9Xyu5PAYsqsg8XovK78LntjNg7Vfn8NT9KiG8uhHHshBcS37sxmFENGPWoCL6PeFcGguNzu2sP3rfwn",
  "key3": "XMix21pSDvRP7sLN3w7o6KxYAvNS1Co5VLm8wWEHCKQY5sj3vJnwg2hKJ9ACC6myDDJMXDDu5LtkU5YpcfgVjAc",
  "key4": "4XuzM1npceeu4RuiUydcwVu8P56j46XyGaWGSRTXRVjj5yF8sCgJPJQh65R4HXEasX2x1jbvK5M3Qxoa3ZWDhyut",
  "key5": "4UUiYUZDCertDFff5b7WR1s2FoRng6ajWkn9VAdwGtM6jH5gikPPt9v2NS2H3oCEPaCcPXhvAA5G1pDf3CwsaXKD",
  "key6": "3dFLZLaJiRehCgvxnNnmL7aie8RCsCkXABvJX226rrJzj1irSEeciBjAuyxpQ8mRbYM2ZeDqBsYR4UcHvaSAu9VW",
  "key7": "2PNxqmZci97djCeMPgLY1uDuYqLo5PgMZBhqAEMsAJzsRizVHMCZbMX8WW61vCkeUV8UKdeDCba5YWytsARH7aPJ",
  "key8": "2n7irW3WejagiogotHgVZKBqavxwR6PYDqzkTGB9Y9PoDawV69YCcqEXJRdZjiaqQ2RBaFzEEBL3L5KwvdWwYXmc",
  "key9": "3HjTBa2rA38NqPuLv2upxAVYorHiu5odYjo6XFK8M16RLFZKLHA7YM8SGCzrachwWk5qKjknKiAFA8uziJBr8Au3",
  "key10": "LTDGJeQis1pZWBF76JKZcusSmUuwZzmZWMhHzzE8HMRJW5yQEKZmmMH9ARMv7YbdRC2vvn4rfcrEYH6m8Mdvqgc",
  "key11": "5heEyVPmS6x383QXTBro2VXQfA2HyHotknssUiG9TBEzTLizBfUHi7P2kf2c1wKGEPAbmDmEf4QCY45cQeeZvrjQ",
  "key12": "3zEfdq3FTguEXBV8xGJEgFNjuCnLqoc9JrHKycGfAGTRofTKtvWtUVSAjbjLsKUVxj7DBXcng5eKHc9Bym8ciUmY",
  "key13": "2KE1Z6iXEmVLZydRMoKy26R7iWQBNZjxddcxnmLdEooZNyM6SCiqDC4zJJeEDo7BYYu894Xup38EczUYUoxXgyXM",
  "key14": "3VkzBAN1WGeG62BRDet6u6LrZLT8N2cpXvujTBGQGyrcDvfeJFUu3AiR9Mj9b2YS8NE5DBz9imETEGfnXVN8yJny",
  "key15": "5p1Df8yf4Qbu2ndLHJstTRDrwGTr9c6vFe94EXYjiDZs3pJBQHNiHynW1v2jT6u8P13ACUcfczvghKiGnGjerbbq",
  "key16": "3DpoWnAJmqxR9PhHQTwqNTtJVVRQ3eTKZZRzsAa9kASYbxWX6dXvoDUbv3kAF2q7FUF7HdH7xK5EkaNE8hAv1bjB",
  "key17": "4qwBSDcQBcVZWKTnJ9hBeBbzA8qw4gbXBHZJUKwyxqb1PzXQECXDT2Jg9F3su9Swy3pfW1wYaGUFvqWw2rq2sYWV",
  "key18": "3CAK6A2cRCWkHyFKkbYjNuKTGiGEMQWpfsRtaSEPyudaN5EixoPDBeFXsBTjgtkh3MUndy3Wtmv7YAQwAZx7mBev",
  "key19": "4eBboY2ysyLkTz3JiPztrRfKurNmQZPtb1C6tK1LPMLF5Lhnuap3QyngVtjtDVYkwqB2M1AFkiPobJNsvSJ6qjZY",
  "key20": "53Q4CTBfw6zhoanPY9dQEfUd8aejQHyEuPtgjcCST8jzim6c5X4Aq16nhX4uFJhx7bRMymEpeLyYFvqEkSK94iaJ",
  "key21": "2woKBGquQofLyMcvsAwgt4EZiNsWy64acht6SVap79FNq9ziKan9MbdVjd7iJ9W6Ea23dWS8EwmU2jtq1qQbdrmD",
  "key22": "4rzsLFtpxoWcgkFPbCHvKsk1H9W72qMkTVLYPFcXi5NTZ1z32ydGNYzBM7vGCmn8k4eG4SbdiZanGeSrrMRaD3SJ",
  "key23": "39JXaYozRiD2sKNRA413gFcL6it1J36cerPqDoEQmbGzpQqVJm4HMgSuWBNr6j6ZR4paT2tJumo9nBiTcPxS7seH",
  "key24": "5BLZ6aiZzhjMLWpWCvbU5zaMw3pWPF1W6PV9RJbjhqHrJMLKMoV5qEhWZpzwBWqiSkxzsiqzcfdWqVsfHrgUuZsM",
  "key25": "4XELHsAYNqpdwNnvQSPmGhcP5DG6SJdhubnrBMTMUZAwD28k8PcxvqLwrVkJrwoxcR8Up1Rb1yRzYyiEpCuUPBkc",
  "key26": "3324JRFyNtnV8GQvexY6qJRWYhvmf6BhVG1PEZspeK18rMpFSezMQZaur3hrpbMYe6ySq3Vi9fJzsBDPGQuEXgcK"
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
