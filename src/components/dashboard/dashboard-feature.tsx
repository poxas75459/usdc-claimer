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
    "dd9usT6rn8W4bpUZppaUN9JNFkWjqZXZ1C9AucKsVBHwBZqdecfTs2SWmbHCyJMje8JJWWmsvCF74LFBaW3XXp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65g4RqUfBKE35bqVTa8Q1a9vYoaqBSDSgnvn2FSNLXKESdswXwuAaRMaGNDvRHE85YEomioqro3UkHhQDP8tWx6Z",
  "key1": "4Mvea8kQCW2BaQswGqkWkQhHyZJ8kc3ET4VkMHcFytHfcbXCtnotWvqLT2o9qekD7MtaNdzCQG1m2s8U1nR8XPVq",
  "key2": "43zycWtvCbzcyxyhkbRowic2mwE3D3GEyWukm4YuQrPy6DUWQzXo39TcJSkRmuLPtWBMpaCvnfgTweQhto5XYfJN",
  "key3": "hBf27rMkYZ4yKRsyBG7YPGXfRtAYWwpGNTeqkW15kEE4AkLJz4LDhwsETVwbVJXfY1bY7dGwtocBPUTWuESBoqg",
  "key4": "2JBr71oM2fP6DMsT6bFd2MMLRsF7TnapAtvDnQsGpNYNK46uJSz1gquBEH49bwZKCRzQA3CsMvbEumNTrBvhgpXi",
  "key5": "2ZsyuBbj6owuJcKPRpfpVPqXp4SgFZdN9tsRHas1YWx7MfDRo77hr6Bj5TuSYg8qgZ4hyDHV6bkAmEWswswWGFRV",
  "key6": "3WeVPmCLn8W5PVjx9RY6SqYJXrYmigm77itBHJ1i5fiMwX7Xd8a1Db634LRB7Vwg5RmVGs8mvFxJAa4H1GeJU58P",
  "key7": "5gwe6zMspe8TzfEf2CeXDP5mfukoxFCyTDv4hEtjnx482TtuqaWDwTbqkGGz7LZVGJ5oK2tdYFYdbDQQJXMWqVH3",
  "key8": "FzMaKqcHbPyLopCiStGGZiBvB4nKB5kY7tAmvuwfWb19zuKXu2yfxL8sE2uA6uTbN4QEK7h2gFFfSjz3yiisRCe",
  "key9": "2hLXZ65GQeQ43BxJZvfXQjGDePFDQwNtPAC54Za5oamxH1T9jcx8WArCtd2kZgL8ujWPXCDD5x2bwNKLKPjXWgkx",
  "key10": "4aRuNFqFYLENw76SxdsauXY8P4DZiBmsGNgN1S8c1FZS9aQxA3Ahxx8FbH89E1Si1cEDXQNgkwe2vBqs9bRJNabH",
  "key11": "5TxmtHSJMKzrccb9Rcn8BnNCA2GYt1xpe8LtKu5huYknBJTua9fSL8ajPsJM3fhwFQ11ukiknAu2xouyadshGNJF",
  "key12": "29jRyCuuZufjnReZryxXu1FaZ7q6jUPwQ8FYQZVCv3hPkHuwujwC5MfbB2xvtFdempArYTmDfT2vcfrVZqzzEiMP",
  "key13": "4SYdkDiDhvD8ypDv3cTA52eo2nb45u3VRJvbkBVUMk5G8reiC84QKZPjZAtxc7moYPnKtSnpPE1e74BMVZ1hU6vU",
  "key14": "2T9zsKTYkm4ggV1cWgvH2LHdNtW7zR4QgzRyw5uGzFzh6z7Cr8K5sNPWvhE2R5tSvwUq6zSvtcveLS7GsJW37tL",
  "key15": "3AevMYN3qfyrxmEJrfg7qdnDN3V1x718NE5q2p1a3WDXP3fAhKkTguY7t2eDfQiJETVzq58TnRjBH3u8e7GENFdF",
  "key16": "mTCmHXUBDuuypr7G4TihcHzW1TmUmw4AHd37PUY7BZMfNKLegYYS7x9R2q45UmZrhQrScpxopWXkTAPuPA55fTi",
  "key17": "4cpf4TUpoQxvjLjozGzNmccKtQMxSMHquYCsUwiCnnScp2CFcrCdegFrYHZcoPYSLSZTCCEJxcRT1VScs1fXHS5a",
  "key18": "4nJd6niYXGZXbdmFg6epd5TNJggm2Uk8L2wN7WLhbMrFPk2cUNEW3bBvxdcE6CRFrK8AKd8V2woUJAfyGykurHft",
  "key19": "1957L5S7ypZ87Biayp7Yfc4xGQ4VAG9Ha1vEzgT1j4EuJyqctGX1fBXk3Q7ZwmJsGohNZbhsbGnvuumWifiWBuV",
  "key20": "2HWruAMHE7CPHnkU9BZxRW5qN4Kn2XdeK5SA1Eg3TERHTDye15JZ4QtitRRD8r82wxYwt46qNWfuN9bYahV7ZCwg",
  "key21": "39jY8GFHw9y6JqTiAGCA3XhNacG5jV5qswAECD7fkhsNsSseXxFaUpRq1odFcag1TNb6kPDDK1cVaXVzmAo4RK3q",
  "key22": "5TBp8nVrZcMVV96QAfCD4TusiXQyxWw3u6UwS3LejazEmVFS9Pu8mYZhWdF4jKeAieg2HBes2fUZbGEpUt9NKe89",
  "key23": "614VVkX9FxvnYpuQYVCr5ed18m7ga7qu5KzginmCz6bjETcB3PygcXLDYrGXsa5qwALERf7tn3rMYpJeCAa4S1Zz",
  "key24": "2jVg8GYFQxbcUaWucX5rSvgL9cJk5oGR8V3NzGioSd15Y99RhEjmaqv91RV6pJyc7aJPKqwzEgJCbiDBXohZKArg",
  "key25": "fWhnq13uZc28jocYGoWnFKGyC5GRAt73bfBTLUPWn4V5gZaNeMpRgw2atGiPvEbC7MUnPHxMg9K1Xmg7MgB2of4"
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
