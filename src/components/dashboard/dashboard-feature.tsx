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
    "3U1ZViR8L3BhJ9EonXjra4pzHiDeYCPXMPfvzMeMbkzCRdbmRXQo29PQYqR17cjQdtCQdrpxu2dE2mkLq6ZnvtpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31eFY3rXEf8aymEfcssJ5sn1sr8piJjSf1Jx4GXkZcUBMos4aUjEyrhDqifGaRXujBufvfS9QrdCouNb2Vp2uoSA",
  "key1": "CHAXfisVzZ9VDJ9FbQvE7ZQRXp8wtVCcdG3ffZBJH7AcdNuRzR459s1XpuKRXV21pTYAMR2zWVrV3MxNH2pUS4d",
  "key2": "3fKGqyh5BrQeMsYLNYQfkNqSXM1caZWqkg6B4PWMdyhHHYddfo8ZE9S6kjSsDzzS5wLLpVeqkt1WeTairsK6csKP",
  "key3": "4kcnETiEC4Ph7Kqx6RLdk9djQZQUsVYRBNwnUoNGKHWCF79hxdnfPFreyAHrzuwGiyUeLnmYKPQM5ixaqbF7DDor",
  "key4": "56eYA9SQYH4JrEgfQj3mZrygVRMnrN4WgSZHUoGyf6r4aS5edB1tr1P6gvfczuqjvBF2V29qt3mYQbpHqQfKBhPM",
  "key5": "2micTohC97ndQuLadLZMW8b8kdo6ww2AdkH6z59wtJxhvn95GhmHV5w3cpKXUE88fsUywypCMYUtEJSNkVC51iMm",
  "key6": "EPSaW7iZMLpCMMQor9xRHYisThNSfqKRaaA1gySkN769mi2RgEaX5Zbmpw3s4TJAnHYpUbJ4ga9PjXj4nD5SRia",
  "key7": "3gDbThRjkpqthSBKw233DG3LsawX2dVfNy1onJWGcWqLFqyqj6xRSPvQKBqjfYCA3KJJtq7mHyprJHYsu4zSL2L9",
  "key8": "4uGZe1GiLGdLXTuAbk8tFLNv5sek9SvnRKSXM39cXoEaeqDk1mhgz584BkUeJya5fBmGNFoUkKmdC3iYbpCVPpgE",
  "key9": "DGJTxKDyZNx98howN2FYyGNRRv6LYdfx1NTZcBwBz3ZfkLRfrrhhk5r2uPoyN9zTZoq9evBS4oBjkVaa4D4QSZS",
  "key10": "544MLKdFr3TxDUXJpsfnz6DuP4w1KPe9YgRyHPat1eB2JdPCRGSEe2sVtG3n9Ehj8HQUwuHUfVbQ2sXRg6y4sYfE",
  "key11": "2VAfVbkJQiYKr5DmHDKTGUx9w2FBSMsnaZ9QDBa6qW9Pa2Y9V62PLS4CXa7JF6SLfn94dLU5E869Tnzwca8bffSt",
  "key12": "2aE6NBfJiiiGnwFkvB3FGHE5SzYQ9zdSM4hQ9PGgpYA3np7MuUSodwRCEc9K9sU7Zer5aChFpegw2p9nadF1Z2sF",
  "key13": "dXA9bPVayVY1tWn7yaGUJ8soMm4iHW8kwKiAenurMSSmT7wd4W7aRgkCNeSLS7tva5LM1gA8dvEBZyGDjXLfEvL",
  "key14": "412xVSDdvEdpNTTvhXqXvGEXEGstytnmYyJMEbT853xujqRd65PqsxmoRDTMx4kZocaMW6cKSL3Q9KjtkNPjPKLm",
  "key15": "1gb8aHCAZ28hzVnvsfrBamspcvEaTUNxng5k99sC1rhPuZenegjRLukzzefWkiwUuhRZFT3P1924eedxT1Bjpwt",
  "key16": "LxcFE6JadNNxbxTzQQqMx8Nd6t6B6qUYeAzGfv3LsDjwScrqQKbt5GshJ1BVegeywsW3WFvSmAK9K9Hbjrpr6CT",
  "key17": "43UrtNPQR2Gqp86J5VUvcwY7XfupecK8uxfJRHauwjp2VfreUELMcEyGTJZd3cLHTeBhQ2ohkyhyhSgcrw62GhZJ",
  "key18": "5tuz9p6hchDfDU1EPuGNBKYmzvRmrLK8VheYNV8JFAcUuauha4YhFweYGtvSDAE9xmLzjJUQsujXFWhGoxETmk3W",
  "key19": "5KV5ZqEiYhUAxMe2CPCzvHmxZAkZPwJvXdTxRxJRXaMEpwsNUUrHV5NuAP8nxXYAapJYtrnLkfT5hBw5VD5aigRh",
  "key20": "TCjfG3CHEsHKXHrcHBsoh7AC6w8AQ4ER93sakejmfkkhximaDdcmA7Avs16h7vaVXAG66WBHXEGk3bhFYhg4F8r",
  "key21": "EUURn3o1Ve4QTa2FCMEUeokkqk3EmKeHwNhkCb334h7C1EvvSRzuVPoyqazxUGfaKufm5dH3CPgSKVcxGML8gr1",
  "key22": "EkzSouDKt1aDR5YRkufYZRDBbSP5USFMW1T9fTVZ9zJiEj4JX1wtq4iAH4HPbwNk8iFkrzaZNks8oDrxASZk2QE",
  "key23": "RnDbUVjVa72CxeSBJ71EUuNAerv1zW72sub5Pib8dpB1EevF8z9GJePizE4sZ2RdfCm1THC4TeSr3S5EwbyhHqV",
  "key24": "5vBMi6XkUgUn7X5evhTmXnVfh2GSx1wVUDfvAdgS1J7J3GuMuryjfe4LAJ9EHUvr5BYuRzBrH8NMxE5gWxyanw2w",
  "key25": "3pZsJs8a6s2A8xktYonC449fKF9dqey2fyW6C4WHHWcviEKPhDkopmRRbNMj7MD3baPXmRmKf3Ssuuz4rdDCunZM",
  "key26": "2wox4G5ssFbTw59KGbZX6xwmkhXfY3AEDH1zC6qsm8WGBWisAEGAvKY6zGooGiZgQteEUypFTDPoA8fEWDFsgHkv",
  "key27": "56cEsnHPpB2d8bUakc7SqKY1Y5NoSwxARUz1tV3P3EptAC74t3niJkg3BbZLPHitqdQx2ueLBkd7aZfBPb9myDW4",
  "key28": "27MFKViVTvfbWRTe4zmcVnHMrj8ScGubzQTcMnhehWa2FXifK7smK3Mfa5WrXwPDecnvNYSbFxnHz3zUq1hfE44k",
  "key29": "5pS2vQZP6ZU96UGzfkRK3P3Nb2pc52eEWAtBhkVgQZNNPwcaqeR2rX6opwvfS4xzmjVsznQZpASUj1WHUHomkWWX",
  "key30": "3UTMzQZERQt6nmGjduEJzTH31UkpMXaggoEiFwAwuaouUeCH8ykCHNuyy7TPuGXaZPHf1E3P8nbPbR2M5RSm4ojh"
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
