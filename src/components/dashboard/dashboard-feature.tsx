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
    "4azZghRUauXKGrfBGSRmAjVmLo4fr8YePXePd6Es5RsGJAkSQt3JurEc3HnK6aNCzc23GsAZUmacR8axpGAVKcEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AgnDg8AkLuD1GaLskQbHPFTEjbkmj4tyUwWH7pH49638CBucMmPvz5SohUiv4KRvo1iwDCuxfphzJiP96AaeCqH",
  "key1": "5aBqnts2RnVv5SKPQS58J8euy6pnFFfJo4wma15JWm88XhQ8om8S5pY4WbvBaPNnZrJ49aa2Y3kq58e1M658REy7",
  "key2": "qEGUNUkSnfDHroBveDgh171y4sFUQE54HoxaSG9eQwQgdZ5odRUmmT5d9aD2C1PThDak5UfjSVnjGWwQnL2ZzmS",
  "key3": "2ePAfeK6k3hadZd41DWHyktAGLoKJX3XUPJdZYTTzRynmeTRU9WFVwsH5UfqD8qzExbbtVQTKxX3qr9ZEJVFwbYC",
  "key4": "5cgWvuzTjcYkJkrFra5XqFtcbQC9a5t29ifeevwqPw24ov8aufhkMwnki5h2HugGc8vS1aED9Jy8dYzj36HAe5f3",
  "key5": "2EM5dEymzBTxFBGErUMbaJSyWZNsFc6zdVmV6LXy62ekHSsTqPERLehP8yRxvMPLwfUNfDHkoBhGLu7AU1GvDe42",
  "key6": "2CR6v2aWAnvcQvuNMzntiLhJMuhwdd3dksX5w2WXJCQUqzFodQ5RVbtykSYr2bX7qqAt9tGo8xFJpWMLXU93VJFR",
  "key7": "24Ko91xUcrtteKG4Tu2fdPLnqiWf9wnaM49M2B6SxrG13NzSYwbtsD2TYzpKhfQvVa9ioTeDQ6moWk1qkWn2NkqD",
  "key8": "KgTutrouQiys2Kzj4fUm8ukupTTe7mgdbexDypufDNGwLqUveviJxvBHrrXhH4zyzsBuizvp9S3TTx4Vw2VRWkG",
  "key9": "4idFRp2oi77WCavo6mvaWXKH9GrNhaEakH925wRkFwd7C973Afw9DsZwJsiju8TuUwWwXKK12kuUU6pksHWS8auC",
  "key10": "NKBVPPhMRNpqwXWfApkDDmvRJtyyyCUTyi1nuNZXboNvevwc3KECnpZHN3MSeAkyrcXp8vPSk2ccM4fzCGXdrmg",
  "key11": "4humXyeCpUapqMteXfCAPqppgkvbNcGTufVKuEQvpar3K49ephVuRYfMf7VArSwf2UpFxtoFhpwJWUC4Hb1DkyfK",
  "key12": "3SrjmnyA25Ji4eNbLbVzkjp3uSK9DjQg4VmXMyMYSKxgoxeJdgBrt5xi4U73ngomP3EbgMDaD29NmJWeL2QjN9dv",
  "key13": "3p2pFCVTEpPVXVHgubFcJcshfUZjxgTVFhKfMtDLDfnkXproGjub9FJBwutqK35v1uNFWpuSM9aVtbFt2rKVTr9V",
  "key14": "2t7LdYWtnpxF5ciWBKoBW85pQ9SAmRpo7pVZ2MDQ7z2iJmZfXAreG7ju1FStCTcxRjLzrQ1QEiXf3w8dNdyZ5FCm",
  "key15": "2476M5CgdGt45BVCcf3LpJ73aPNKqfTGFhc7pT6wP5WLMk6yBazAH449sgHpVhLMv67JzpycXkUxEYxKUKGy4edR",
  "key16": "2wskcvFwgK1fLNgdmXecbvNZniDwsrTVhHjnWHF2326gFwZMcLhQh7gEPYHefTwnfDYNsAaaxDJHiDGQGAajSDV",
  "key17": "5StctohMiQDmsZL1fxXN6nAtdR1P5FXZqNMc4tMtiTHzE1ynHYvbBC6dVSLJouDPhRCiT6U7Q7QAT84W9hRuf7gw",
  "key18": "tf78iPph3tVbDUPEiRRQikjaQUNX5NHNR1UpRsUiyabXstaVzyyfPhxP64pim3gwRQhQkmjRVPfDFPYoRYFXqTn",
  "key19": "t67ibYrsaMLRVBc1s8gfZiGn9jkqriHP9NCnMZskrMf9CRbAJXDEK5bkhHg14bjiiQNHf7dbZLuaD7UMy25Y1Hx",
  "key20": "vJCJXXPdcR3pafKYmV2jgi3X5fYm7cGN2ikYiyzY9RPe5DTmehhMUpftFNjwf9Pz3ar8QEZS124RfsLobHSBWi3",
  "key21": "46AMQA1AL994FYZxZd4eS3pemB6sTUMN7a2EkWBbfcDYySBvArstfC1xNQWENSVbRzTSRMWGb6im6LWcRLPKayNg",
  "key22": "3jt2cbncyv7NnPTANPkvY98rJMEcUQ9PV1J1wAautWsJ4PJ5djsuZexuSHN5fi1Gszs7NVfHfbNSE4XbAw9DLET8",
  "key23": "zWoGE4eiKPTGobtXA8TxrTomUGkaSb9yC9mMMemKY2LKELbv7hs8rc8HDVC5wV4WPBkPJ5fiM9BdMDi3D1uY1BT",
  "key24": "4NjGQu7QfyqrTGSVhnBzSVKVYX415yfwswZxQPCZXtZU3mpfdwWQNPHEXz4Qxoi14kJFWPNcvXK54zrVxqD7ymvM",
  "key25": "5y1CUEsMTP1i3zPV5kmipitUZV8morMBnYGeWbKxc3ySNbtbmhGLqvqiyxxMVQ4a5hziHLRu2nCtKd5di3XhXq5Y",
  "key26": "4upJdpWrtU42y8g5jt87w7BSJrQ6WN4yZeJWMrkfShWsdv6FVEvRziGA1ZqQ76fQQqtjah5rUVuFGhrA9uqdebvN",
  "key27": "5xszriXG5wRUztwcfGdosR2cvbw5byL3fvwU4AvGFVsMDQ2N5KP47s6jNXFa4SdePtWjjKmUA9G1SGLTyycrUqkT",
  "key28": "3DjyqVm8v2fs37jrx7UPEEJ5h1s97T1APVGq31kidUcZy7SD2G4wxPLryCvyWb9EqWPWTZ62V42mi17daphMp7ZS",
  "key29": "4XpTnh9eJt3JRbxYY8HRSbFPFgh3Wx8AS2tMC9wzk5vg8WYYFNQfwzpPR6psUUtHBK6oD72WKc7Po2HsJLRSivuz",
  "key30": "4to5ppAi6RXNgcaP9bPY4SJ2hTssbyxmo62PTuGQVHzEmRaKHtWLAmS8xv74RNWQYmkiJRQh4KmzFXbh7SbhFj5G",
  "key31": "3cRKsxXBZWeEU9Tz8v7XBjE5j9KEfUmkNnM8maC91MRK7JpRCVgZpawoUreSZWAXAoCUBPyni94AaiYRA2uF5p7W",
  "key32": "3qE3ZLkMgpJYyp1kzpu6inqwpTwUdK1U6dsPfuPAX78Qb1ZjwEmW2RdH8dbguo78VoRhms9Bar3JLSyn4rEbX1tG",
  "key33": "3WF46xLgVH4jdBoyGM8zR4AXdtW7yfE4KY26kg8pQegR3qoX4u3CdLrSUxNjofYRoGNLJYZJa6NjhPPARst9NnJ3"
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
