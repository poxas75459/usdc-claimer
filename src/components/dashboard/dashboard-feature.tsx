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
    "2335Ky8WK7E817cLw64v9qL5NUjPquiEFLL9wpSvobkNwhgTVcGc9RgWRf8wd3zu7sGcWEgWX3Tr3gtarYDsXusp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H12JV8EwhQDHoiSqovnTwJyEMyTi5PmwaQ6NG6Z8SBFoyjhKPWDb28S7azWS3bV5iQY7gp6wgMPpvCAGcdzTeM4",
  "key1": "pB3gc5cz8jRZp1HfXeTftqt3qV1dTv3mNnVvriDLyAtPdQVsR3U1PzCQgULayMRovPou1nxsiqYTYkmKyDGNVZp",
  "key2": "9ChZScExpqPdDbj1ULPE5KztYuBkF73a9JrvU4ndMRJU5DK1s65TGheoKcTESUS5P9YjHedX8sqDvYXS96PB47g",
  "key3": "5tu12QbZCbDL6yiEHcJcRqnqCKwE1WYx1TELqQkPBGrEXsV6i7cM5W3XJSMwJj4mtryw9UQN1uVau3QpaynVm3BD",
  "key4": "4v7bVEnvc8quwKBVAyvoa2WqxK25Ev36ME1SL2NL7rTKhN2gCMeZNCeSMDPrKEpNyVQU84nw5dW2rBrRv3ua5Lqw",
  "key5": "3Y2q6A1JV69RKWhDbd15q3JvRG3cDupFFrCGjga9hzkyeqwbgti78rHuWseSRAnvvEXYEds4yYG6dBYRxLiu3D8F",
  "key6": "2uSMeLDUUbq6mU4oWLAxNZu74BmfxddjB1M2BTk3YF5a8zERaSWDEmXQZMwBURcu55sKViwCuAqgvxQsuTbmQmJa",
  "key7": "Wn8BRpiQWLCs57eHadgByzcsiVr4cYhL84tNrwCYwWzuqUJtw8gp58H8gSX7ovniqT9p2whqjAVzeX2M6WsHNkH",
  "key8": "5jAFEpLNdQvudYTN87ytHwfU9sY5y5FSUG94G6F1YtfYtPmSX29E8sT14f26Bv7EVpioozdykpZynJD92EykNzHC",
  "key9": "2ZeBzSBwYEcmiKXPf2CjHPGrTk3HhibFsQdP3rNSaTxSZaQccjEsn6xuL3fZeAwFJJ7a9jdAhWSfHjnuxAcrxKEw",
  "key10": "5CpfytAPg3t3ew8temgwo3MYsnB9h5ZvbSZLpM66sfMPAQHmYgbpysHsAMDMVAJpJ49CEduXzNx8fypKUmEvraKq",
  "key11": "h7ff1aypitWNveEXYTyVPLzZFKMNawyqkhtJkkV5CsqkYFTCS2HG8e2g9v2uzVGygFTWms5361dexrfMXc1Kvxb",
  "key12": "HWy668eJHhZFqEeX3ZmitEsQhDLsVub8SwvMNbZeCwzoFh2WDCJR9tvRFhbGabmKTMRBhx5b6ybmt8pyHd4EFPD",
  "key13": "xcKdwePNTq5kpDZjdtPefhDSn18dTyoktHxDuzApqssSFGPD2i1comPZXaS5ncJLYK8ZDLnV8BPi9cY54xGuTff",
  "key14": "5TTsBR9cdEjur1KeSTn9aju2GKS5yEqzAneEGiXwvi5XP2UTWWhSz96NqKps1FYmPD2Bb6SHdU7vR1Yxj4NvrmC",
  "key15": "2CufVBvV4irDtozRDTRD64H9xBr2nSPR1eGxq5nngcUgb1agFBU1TYwLCZ61JgSo5pgtvawX5XaoeTBhCkivG7N",
  "key16": "4JVRAS4ouZw6MyiCWMmmFza43e65Ao6SQXSKnFa9p27xcgsJppYaecWrKapHn8Yax2HhAbDqPfAQDVPzY8F8U48R",
  "key17": "3F3Mxvaopb94yFdHbxA1PsL47bdg9byDYj5cgVnTMS6RN1S2hRA2qU21tUDaeiBvFJsdWuWXEFoFgej2vwHMmFsy",
  "key18": "2KgM6YqcyCrjFzxrNCop3SaqwzKA9DuH58yQ2uwyUudBPbMBXhMPnFJQgfApcEJj3TvRUHK3Rk1XLpWHtr81Sxht",
  "key19": "VqVzWvFjaJpGAqx6uKrrSzb14kQbyGxr31BMUsyANKfxpM3dP92gS1owwNQFcRA5XXVVvn3W7aoxRWtvWpZcQ81",
  "key20": "CxrnrfWwJWMr1UWMbfgrP8KZbzAjXdoqF3pzWTSFX915vkbig7ZfBcbzUnTga1MfBknGTVLDLpHnX1WbM9cuUyE",
  "key21": "3x1isaa7kAnsgM3JYYX6DV1ibQeuCatiTcxEXKGT2wKUJwgg8p9ACH87GaMAkyQBMWcN5gZNEEqMeYiaucyHCw4m",
  "key22": "GNyBUMHpVHhAyoVUKPr3EhfMzyUcLV7YBJQ1saaiWKZFnHMzN8VngT9KkhXHMxbdbZgyws84kCdwMSHmUyTomVL",
  "key23": "2mg7JjFbgjd8oXjtnWyBffUnSaxYLdz3eXtott1HfdX7HvcyEq6PXu2TR2fQJvuXDqE5nqBkKN9FX3sbVaB5nZge",
  "key24": "5o1qJ6rkKEiHTcDpGcY4SdR2TSNNvMFBG28NJ4vM13wUWshyGKwoEGja2HZLVQMKvrZy9WuFjvXFuTcjEdBu59uJ"
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
