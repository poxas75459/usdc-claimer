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
    "29kEwqzNbvkdPgZz5zrCC9y1M82fW8Rm4SnXYoj7rbTVt2PmVQWMaWPd73Mj3FUH1ZuZTfProE2YyFsttJfzX19C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H1SFAmiSEcmFPrs7jgeT1QSXKZ7dbJmNdLDHFsb5q3j8ttVUPZZMCrnZmDDHo6GJd3baTXhuw4qb6poFPH2cKWP",
  "key1": "rWkwuJrkwuEZuJtpMkqQ9CsZS9U56ucUQpqqqySGteXp6YiHNtCC3WA3KGCeN7TwP7gUAR1xRBgDyZDpfLo41Rz",
  "key2": "2uMuQqZUiwYir6M5zhHcfxMUcoG2PguBdVTGXTzZfxCeajvC4TFhAM9F1QQJAr4Pe5haaV7qsDYsqYnPwTSSdP9G",
  "key3": "3RkiPjQ6KiLe84Wv8v6TStjukyZov4tmTZhRM9r7xfLDkcjLzQ8bs8VqmQw66rVBb3nTbUiQ8Sp7aP12CJwQL5Qu",
  "key4": "3MRt8Z3T4HMH1zLTSxa73xVEqRDPWZwcVdMaw5pXJeB75dzRCtPfnzYNTvjaTLC8eoqeiW4BarRzm74YDRkGUbhN",
  "key5": "67VpZ86wvfwbkPh8nUQm1H81cgmoccSHJDRqFfhwRm78tLPaDHzexsg7G82rc3TNiCigghEbtQfMZ4rVgEHXw5J4",
  "key6": "5v3XBqVDi3LfUHREspBqQgA4irtX6MPZxZ1fbfhT2EwEg7ZaS9VBu5gckDCQfc1zkZGDgBLQ3Zs5vytjjqR8FtAC",
  "key7": "3vGJJps6ehBDXprFdSByoRQE4Qe4LY8SFLt3rkXgcboBrfCxC9GYdcWdbNkK1xxwRVF5BMtSVE2oqRg13ac6QpTF",
  "key8": "5VqRjjSeSf7ccigsRsz3XgaNL7e9fLLxfUqRkZHCFixpMNXoFeKDGZN6uCEEUrXrn546YkKdYq7dS7Cn4c867bqt",
  "key9": "JD9V857hw1PXaJVp5ETm5kyQkfZWtWDem39eEFPsUN6ABiGoyTMjYWJaPTLPDqAvYNzkZGNMKioudwjsRz4Qbhh",
  "key10": "5S56qv4ZVLrLA7AgiBYdYyZc7Lyz4E5s7Udh6oj8LekmmgFz2MYgLNhq2RhMih3E2veK4kqiEzve1QANQUEPEgNk",
  "key11": "yVR1E58oTf3X3KeVsHtHQ6Znu41KYe4hbcZfs3erci3urtpzyxrXBQZsqqjzg5GgbjC84Yc9YBP2o6S4zSXzaiY",
  "key12": "5xXViXCrpQzdUZzmyiLM5r3GW9mEo2NSwyozMh3wm97KRLrLY76H8RPCG5c4b4Wgmj5JPuU3m6CqwRtDHjNT9B8A",
  "key13": "5iWy8jNdCFHyqZqjUNTH3PqpQVBFaHEPe9SZi7aTHzdvARHEXaiPhYCCNN4yVKCRtP9tcHCP9erPecdnk12mNMHV",
  "key14": "3jn1sJBM3w6EX9Jp7ZmjqEGPggU2C13opMWCrefjpqMRbCYyvLspowiKp2MQuN5c5bfZJU2uPLoeabSiy1pkhYWQ",
  "key15": "2uNFtVLLJEb9ANMLAVgzTC1XuJf2FUYa9vio7Y3NuFz3LaUZsLXKcty6XNpEmX5JwfwNBpE7hSr7LPvSHF6SY23D",
  "key16": "66T6AAC21oK78HjqELLHCSKVsBG6PAaz9xHC1vxJZZNa1fFNx9YBMdhH3HteHzPunPzsAL4g2va5smyznBgYBy48",
  "key17": "5Ya8zu8c6oT6sKkbua4MsNW7YGPcRhidy7nb4WmaowS1z8JDEsoQmvYfa9Hp7z8YuEcv8hKcaP8wjyk6JKk98fVi",
  "key18": "2YFfmU5qZyVnK8r9HjKycv2R2vjL1C4Yqg57zMEhuc28hhbi1T2Aie1GvvXRbtWgCCNNF7AFAk7c1Ce6T39Cq9zY",
  "key19": "4ucwcq4TNyZb7td8UxaYDZg3acASe2RSYPXJhdKgzZPvRUdZDTiGKt6rAiKs2U8jnG8u5wbxQWw6tUgQcqwY7rhL",
  "key20": "5FZ287WoocmJHHW5kDE6ZjRC2ubvPkDZLRRv2obkiPXkoMxYTtCRh27i2V39XPu5DNoyPCc3JJ3BMaGuCQDY5KtG",
  "key21": "3v1ivRcfJcD7qhyTm1jVkEe2DdenhMhnbPUDK8vN9T7a4WMYQJD6ZwgRrRH5ZCpu8Zuw3m6AkxfKGiCmE1rctK7x",
  "key22": "5TqoGKkfWbq81nwfkJ5b987SY9cc36SE8f8JTYrw2KRLjz9b5ouNLp7UkCMtS7oWi4rZH562yaiCP2fUgMDYwCNE",
  "key23": "5GaQjQNWrVUjJjvN5Wo1DC5PGkSCCdRq4GqQS2vMibDzqpkPUfNVJGH8XwUtagT4Q25sbVeKDmhziU6888znpzGt",
  "key24": "5x4pcjkjGJ9stBYwGma72B9QzBEJrP4CrvZ3oiFoRsMjcPL5QhXsW2bh44k88AwZ3pezQ9ecR9M9Rkvtxn96gAH2",
  "key25": "4cjAQzKNPM1C5PMMvHy2VeVzzojVrZVBXFvbvfFf359xJJpZBQK9NTtgvVUsaKHPuWWbXzYn1YP6pZud5cuMTCRF",
  "key26": "5SZzQk8c6FPCZKQvhzRGdviw1LSnNRp8ZMYSbFC94DofXLPEo7dGPkj7MDxUubmzXPBkTTwTDFgoZuv9o1FkXkBE",
  "key27": "5CBFvv85ohecXUNUGVoM4n8XPhz2MR7RfMgYGByafB3BaqArhX2qWXss1kL8BJhSqHpKTKXbaGHtJ3nqurEbbooN",
  "key28": "2HZMBYCy4WniWq4cr98VfHWHkiy4AwzGSLdomEUtEb2GSbxUa6jxVZQeCCJpg2H1L4PKFpsyjkgesDg9cPh1XYWE",
  "key29": "aZMPDhpiZkEqDLamHQTChekCt4k5StAt4Kz8HfhxWt7g6yjchmcX2arU1BFVuGFm2ezzoNHhxmt2uhfJe7MLaHc",
  "key30": "28w8XtWfaNEucsgn4mkE2mvVih11KNJYur5W6JR5mxRepooJWeY9zVtBxxFgxqXMTpTivUepNwrXHV1a4ZAqQcAa",
  "key31": "5ShGHZVBmqS1e3Woi1Av44CJ3vTaWpTcG4FVmX5htp8wUAaTsaSp5XTcxiKBQ5gdii4D5TX48hbffFEA4oUvH1o9",
  "key32": "mq8vFnqUBdBQJWs6gNwhR8e9UnLA2PNK2j1wAumFX446t6ujEga4pJwRDECcJNR55SjYNFHwwtjPummF5wYPM95",
  "key33": "2VXcCqnQCt2Drimq4yjaYiit7E7Aw995Vqgd5UHRxBkSBg349kgy3jCHC4tDPUPL6ZmdRXUDPTRnxKmhDyBP4g3U",
  "key34": "3QkCKLFCQWGZVgctAbQzHZQmANGN6XDXF9bngbDn4f3sbzKr3aRt5wb6ZZGwTsAVxmFpXXmgb9NpC4EJnocP6bKR",
  "key35": "45gawCXQmvCxYt88LABrimAPNday8X8xUQxQ2PLf7fW4zB8ZfgwgYAjYGTHaTPho6ro8sUoZ8z2JH1BNWNXchWwQ",
  "key36": "38mAHPWjbcB3kHXGakdvNxhbWKhVnN4aok3mC8fCqGaC3tZGxe2CCURBbTrentoUuTHCExSauGdfzWMDUwQ6njLp"
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
