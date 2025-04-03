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
    "2PiamjS745trWuiTULFCumuZW2mRBvKsF9v9kx8CNqtYo2GD2bj6UGQjpXqQdVeg3q8F6EL95UB6owqcxwisnESi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n6A7pbtQHurA3pACbkeBijzr7GToxMa21gThPww4uA6B4fmieiUSYuUGYMf1ypJZVdyA283bU5YxseCUbbZeBXL",
  "key1": "3z1SJbiHiDfpjkXvicd5a1PGfCgPes97UDaa7xBp6A4AxxHaGJ2Vqd19c7wHM9EpQ6CeBojzsv9KxwSxCysPePqX",
  "key2": "4s3QjpWSh719gtgiZzTCwoazi6MzXG6fx9VTEAcZF3EFinozHaeEky6CkrbZc84ZkRQChyYqQzfSX4a3iVFGipCy",
  "key3": "5ZfmUfQ2k2poSUGPeLsfPtXkxNqdNBeUJtpq5FGby7M8v5EWRMqzB5YzTYwg7BkaReAPPLCXoaZnUhD9n8RWRmjs",
  "key4": "4E13xZhiyyoVNtYNyrSBu7bGR1aNVDduGpXy59Qrd59CvYNBh3Hr1XhAXVmRLSEngsVaroAkzEyG7MR4runsqbNB",
  "key5": "2dWcA2nKDWdGNi6ePQ4hTsWs71w9aQRzgxpjh884URsG3JcSMF9rshwnjufN67np4squrNTzGLmkCvrWMqqgvduw",
  "key6": "3Kib2hR2JTgtxUJTgvXYazjcejGLYuziEaPyRStvsmDe4JCABNxe4xZNQhV6X631BJtjh9ENf8ekh9uEHyQviUim",
  "key7": "4wCw3HewzNirC4gUyp4YUixJe2ZNHCP9XXFBdxEKsZF7WyHGJBhjgqFELGdcZPpyexR26gceTvKNUJEhZ8UcVZeg",
  "key8": "5BukyxY8dpKb8uEPmJ5RJJTLYMxTdakQ1oVTipGsPAFP6RzDz7hBwdRL9rpcEgwpSJa6Gwf63mEumuZP2fgDHHxZ",
  "key9": "28zZMYKq3w8snZoyRXn86bRPMwWXgYCvdKsQV4kdNBomRyruTfbCUWvGAvjFJfDiUoeJ5PRq1AFmq4gvPkArSvzc",
  "key10": "CWURUhDS8Po3ht4Sb3HGFMfFPciiKscbm1iXJGi3xboCyfeTRAv6ccsKnKE88qE1xagVobjaSpQjdbSUY67aFH9",
  "key11": "43V5Xu6FQT98uviFNiKjDmx1EE7BDuwCwpo4LXKEvtZYLFDpxVi1knRx6xGxC7SXJ3UWLCdebW7CmGM1ERWvmpao",
  "key12": "54qEDpHDqDi3yGzrsXZTc6R8ZjANT4oMHEZyxRYkpoRLcwiPBTod5YYSeqiCSqiQEC3KqPypyeCJUarG4E8eFGAQ",
  "key13": "2xAsBbj2kzBzpqW5RME8zY4GqK3YiwtmF8DyP4mBuhXWEzF8kfE1JGJVTkppRu8hkePu9u7Wmc8ecdKrntAxQRAG",
  "key14": "5WNh1HS62KsK5ftJsZZw8VkX33UCHZpBpweL9YsYHSF5CYFpRuV6ye2MakTsxqJjpwkrGgpnzkksgqxNMuTBgLEw",
  "key15": "5yDk4uBudHGNyj9FfZq3S6vFa7ou9xec6TcX42uzHE9kzqyu35yPmqF9yYSPGJNERkysM42DpEJ9kiskLKJecHT8",
  "key16": "2kdYFrQ4avbVk792t9KLf4xt9xVwXBd966jihhjkUiQp8vSJV3mE2AYtyKbAnUqk4s597AvSow9CZxG81WAjNYs5",
  "key17": "2zpVX5daKxuN3LnCdTevdoB1RGq8rbJ6F3QJrqdYpeT1HbRe6qJEprWCPcF8Gk4H1KfjMSuYiKFmfGY4RVf4CS82",
  "key18": "2M4TukjgUqpDB2gXZywhnVn4SWq17KmcJpJ2oMSYk8xCtWTLyLne6s4B8DGMDAvfyq3119GqTDjWrxjr8SovWsTd",
  "key19": "4VymUMNEHzCmtctkpn7p853Jb99MitG5NiVpqmD9kuWDdpzf9L4WS7dmFBm1XtJMv3vqwSSsbJ499x2JsduGW12r",
  "key20": "npusegVCTCx98Jd4PbNcCaVhDsyorKTeCnPghT7Qt73he9HdV71XTuRBxu4qYYhMaN2EC79PAFmyL2VfWUEsGo1",
  "key21": "2vUHB5P6WdbNpFuVhqPjLAjEzFfaCcgzZLNz5iosAevLJNVuYHpJCAurG44KNEXCDRiouxGNuLmPZVsvQNgJnnEV",
  "key22": "26G9qxGxSy2CJMTMvT7Hv4fSJMoA98Jiutr6qRugJTvDQzxgLenVPQ9PyiagcbETpNipPBMxnoTYemVLShNj1Xw2",
  "key23": "DSz3hs46ivLZThLX2Ryza5KHKWrQLZXDcKVoXcipJUNzpR9VzQK8q6eERzvaZMgZVbCTpCEgCGCpYsTA3uJKBBf",
  "key24": "3GBVboGEy7DKcRG6pZKh1RYMbwbSCgMq11cMQVwnA6YPbYBWLCzVkyLHBEEzZg9Gh4KSDPqxJtRZeA4RWbuUcVDx"
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
