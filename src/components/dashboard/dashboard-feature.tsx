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
    "XBKKJThJgTFHagXV49c51EjHPzLb35AwYT4zfHLudqswEzPGwvVa3qA1baq1c7dabQAxgNftSAESiJqgwq6rySG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FvGFSgTdtS2yp9yL6BLHBPzGDeUMXXF11XJkDNEFpprKs3eZi7FaX4Q7kthJUH68nRH96Jfr2VGpaRCn4n7gj2Q",
  "key1": "2DjHEoLTyko7DT8PAiPaZ8U5wioAd8uM4dbPJV9vazDtFBToZaTaguP7jKQyFeTm8uDCTjy4usqiM9NTVKh4TmPp",
  "key2": "62htL1SuBqBHrMsazi4nHHpjfFUTYPthq2FxyXKympsGBCaVngwNRWfmtN2pcrBgVCchRHYJH5nxQan9HxnFUiVM",
  "key3": "26KPQubdf7b1Zggb3qDfLvaToz1TvH2xGTXsytLF4bwT4FGxMRd1onTcsLz1GxUPCYd23HfhUKYA4Uu13QyMMAen",
  "key4": "ayqUrSPkzywrBXnqPF76d5ic3tyj5b34FESveNc2j6XFARc1vNsgjcUksj2Ww84ZCzkrjExkbVKRA6Edib4Y31i",
  "key5": "3oNTAGYUCn7SiFrQnY73pJfm5Takv3V3bm8pUP42rwNBQvGaEKGyB1Z7bQNjwQo5eL7pyxmh5ihcW6PdNmbyJaRs",
  "key6": "DW5rVks4DEDA7RcNuid5CDMB9oBxsV1CvdoByC1fYuz49tZhGsQTdsfwntPaAqdqJkWNQ43SWwBKvzc5fPLJtDf",
  "key7": "5haPcrbJDJDL6b6f5u3KeFBKtwUgN8wuB1ej1HS8ZHKLPjZ6HRtHzKpEtUzH3VW1NTHfhFPY4jbxb4zgduSDgpQB",
  "key8": "yMXrAeXA4UcY76chtdrsfFNordGhMjz4ec9JBng1KZRZS9CfM4TQ6yhk6Jzp1sMfcbp53C7D39NgzKsaNpxo4xt",
  "key9": "4YfWACNqgWzqUFVm2jJVtNyy6XAxX46dfZKcafBA9sXwY7Q3ooFm2ZKYxhMexvm4UhL9qvQSkMjP8PTQWdyX8ZWQ",
  "key10": "3pzioY8vSYU3boYYmsk9SEdGuVLAJaFXy9NH5bE4SpDwiTvfPGWHUUEFq6Enwp5BPs99dx67YuPknDiGDxW7U9Dx",
  "key11": "4UttBBohT5WV6o7vv2coaVpaJEAxUmRXm1EPUwxhWZPdXFF95E7emDwsuvDo1XfpE53w4x1ydcPp3EdYWQTfFdHo",
  "key12": "53reLDb8UT8vbna689mAC8FuzyEQ2EtK4FGgvRwAByUk97Js2Z22UZc41QcRgXtpT1CPU1k2GX3pSK9dKBZyXksC",
  "key13": "57zPKTFnyKnNnfQyN2nHZx2ndyduP3CAzzVshPXpZVP4vkyVKoYnPSYTY3gHSCK7gngpb4sqv4iGcD2o39HoyeT6",
  "key14": "64n1fMhiHNxKgxtLrkXb9RnrrwbequE2KDb9KSjzPDrBxPHwALh3RXcvj4hL38HahAUMy6AsrMsnE72FziXTV6Rq",
  "key15": "5qN682tQfCVyrsxavVsnU6VKFJqSnTFELyBCVB69mxniTfHi2E4HjXh1wo4pmcFDXMmvMwjDFVfRiaXNBEmZ7wNx",
  "key16": "3ADfXXAuPFdL4d4Drm5BdBMwweaPYTkh7szBaACVHAZprx55EemkXuu9DqwQ2tuAdvKbzSMd97wPLGzknE3N1qwd",
  "key17": "4hpJt92xWb8Wc2usc79W13gxZTEWthF1XgEZxZepDwbcLoxwdMtqrQUD2eCW7hPUWrTC3bT6XZPgF5Qu28Pb7Ec",
  "key18": "5ittfpSWPpg7BU8vWJKUbG3D96Yz24fdNuzQxhKmU61d7YyAnRLSEWPxzrpTwMNXg8jmfZfuGbkJ5Mcyr3kNuEP4",
  "key19": "42knkEhUJbkhWsJuEzPkrA7c3nXr9rjEicr2ruh3n5iMoXDFj1BnZdwZsUbWKZRV7fNxwoBSQPALcQnxk5Z25o9n",
  "key20": "2G4cUN7GjXtQH6bynDfwDzsjFcsUQrwTKz3bc7EmBgXvPxwLkbCnybfamV2ugSXvJ3xffRqCZ4wxKLxRsSwWpfks",
  "key21": "2SsKzGWXnsWPk6gb5adt3kPxEK3XVcojSHs6YhQdibFn4kLwwmb6MF9Xt7yBHAs5rmTHkeoSGFXVXEPAjRxQ5pVa",
  "key22": "3as9vvZz3oexiYyq4DGwUH5TmUAnxxQq4XKMM1tnMgn8NEWTXEwuxW5yUaWHs6rhjpyifnse6f26SCN8G7BtYurz",
  "key23": "4f7HpAc3tHRGCQf4yP6ivfummwWrqyyrQTRcsRoD8ChapsRTtsnFqi6UV55PuC4XLdWyP7Tgqsa6ey8y57GLCZF7",
  "key24": "5YA4WK4uN8KAHRaxikcU7dYebQ7Ttfva8u3fQTzWrUPPt68daW4ZMPoi1tsdVHvCxqRu7VXS8ei2dqg9WSYxMsq4"
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
