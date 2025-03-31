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
    "3K15MGr1SoEkUhDYUaf2bD4RXWhpFHQmZrZZRnRmf6haZpXEbuEpseQ1R59yzsJ3Taz7Rt3udJ1RNzgM9nYcUvKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2modpivPcYkupJkHiAKfauV6VWGr6D3BhqUsRWtP7XzAtyDqQPzsHiKRcPvRTMtrtAyxnqUPtMTy1HNyheqpWMXe",
  "key1": "2tbkWFzAss4jVvzbQrW9y3FbD6RL7QepbVS6X7YqVt1YudRvLxvZShABL63JcrH12UFpkxfvQcptaXCcsgaEao6S",
  "key2": "2g2y9SgEWWKHzAy1rC1FjY5dUX3iD6nWT3cZcw6SxSqPCJF7GnoW9XB1MJ1qr8A49wz4q6LU1wjBMqm2Cnrzm6cv",
  "key3": "2uPxc4esGtu1VmssRTmxiLRRF7f9smYdKZFbfvt7EYB1xfVfVJxf48FR26Pb8CfACbPoFbe2z7ze9L89ao9dPCvu",
  "key4": "3ptNL1mNv5rCw5z7r2JiLiLPSkyCT1qGRzz81FfgdzkahvFMX1KhaVcH7ATdSuMkVyvhbPvUM7Dh4wpWmjUGR7mH",
  "key5": "3LXCXFoWydr3SjH1B6xmiyeVQ83b8ENrNx9v9wTnPQYNeU2Nt4fQo8z6PshDarZgTmcS9Ra54hbpG5MvhWWYAuxU",
  "key6": "XAVN6HvDP2zpVr9btxmgGUfRFhyB9Jkc1GVVBmLPAiydpfGHK2wpq8aU63Utgoy7AWLS6QU74BuNAGuMUZNnztz",
  "key7": "yuwfnYuSJRejkvoam8Xm8PRBbSXSyTkaGJD3Yvzq5yinpdxpri93Z2oCsneZcEqqf35HdgJDp1quNpauh5AUSr8",
  "key8": "4amJfVFoF2nKExrEdN3pnivBo8q1CabVFSz5w9HcthPTYSE2yasbcGZScwJv6sU2ToDRwGeTAdSEA8z31n8Nr14H",
  "key9": "4SXUxz9TpBXdZoqgVjR1CWj67yT37Txt27VkMMRCA7CkDxsqcXR2sap3SpTtWD3JvDTjnnsSbJXpLMtKaG4j7TtB",
  "key10": "54owSTcYSGpeUgjhB5xgdGEExtBwm16Gm3e4yXHcV2Ed6CXb2vgCdWV9dB8G1gTosoejER4s6nQxK6WWX1XPmf1M",
  "key11": "61Ygvg1fm4LnJDGuqpPBAwgoV5Hj3zkQiufgtwDxNimbg14aLe8G1bTxDaskCXWYA2FRsUAmf9mSCQyrn3271fVo",
  "key12": "4ZwxpdTfYiNuRzdofwvTrMDcg4XcemQpKCpg7YAkg5M6yyt3ZjLNbzr9y6t5j37Ncc5HuPTkPBYdKfsDb1Mg4i5g",
  "key13": "RZgTuCFXAfsLT5TZoNrFhhxnBMnziQ1368aWYYNSHuLxRYKLJRHkExP7D9KYpLNo1D1BCRFPzyZ42JkHQEHsm6K",
  "key14": "32hUS9eeBKTkLGbtn9pLtP6eg3VrtrZYUULxhGyiwkfAJ7vLSDmdWCK2fPngwDgmhAxUcqB6QVxpy1cUPUqEKSwt",
  "key15": "4bmYZVmcW1nBzBKLQjrZ3QivwrwsTfsxA4tkiKEpz9FP2CLZqRcGN5fQEPa8adJCwq6AAzX2g9rxqhBRgmyXrjx7",
  "key16": "3paqcQqZ3KDMvgev8iQtVf2B6q1TkV6jV6BLhMJ5AZSbvd5kXZr4xhbSUHKz6F2ihaS6W6yFgJ6sUkeBmy9vHFP8",
  "key17": "3fmBwpgSJqJu3cqJPb6eaLxGfrLZmDpiXizbgZTekRZxTEoABGC3HrGehSGktNQE8uSjt7f7oq1Mpr5Pg6FNYBAx",
  "key18": "3fg7UQnRVUV8bqZuZrxj9vMsCP7f16xGqoH7rkCb3fZQPXf91eKHMf1LA889wLT5ZhJKbfeHADC9ku5CXpXBz36B",
  "key19": "Xz2UTamoWbyDkiSiQ382seKbAeeBB1MroVauJkVvoqiUyfAWKcvjY9pZuXmako27C71D95PKgfvo46doM4ADXKB",
  "key20": "2NaDMD6NCa1TW4ouxG4VVsVNEkwWn7Du2beTC5zs2puZbLgFWU2uYo7LzS6HSkig2YpSNLYWgZm64Tu55JnBibWz",
  "key21": "3vV49bMijA7SpmQS63Av6fhnYVoszNhRx3oJrSYAfzSt4ZQQzmhGCmfmMhf2mADvUgm5hfYcbJk7pdK6A8y5aXMd",
  "key22": "3UQyqTHCvsvL6vn1n6FxNbLn3FkjPWmGiCjsiCeBv7ZThHZ7UgthiP84EhzaphWcyDE6GNuch6d4DLGvECuLmHP",
  "key23": "358xAP6cCqJHNZ8z73rLrHk1WVUdsvnvXF6yZQXw4w3wCeKW2CmW1WXYp7gr8NGzc2eMn7Me4MoofbFL3AgUwypE",
  "key24": "2k2YTDtwK25uy7YT4edtKt6VkrnDirgn1efJYjWh2KG1C5co73gUma3B4aADyKyK1XPfTpzSoWcsU3Sr4Njb2gkZ",
  "key25": "4gAS9jLLS88wwNQJJjqYftzUkdTfKXQkuPsUi3oJP2rAbh5DVUh9udHTTMzmhmvCro3kMnqSHTynNx9r4MWtBNWQ",
  "key26": "3wqmsNMbzUNaXs6rmvgvssEuAaPXs7YBnWwoURbMPUvTRaAxBNFSujcYiaMYLCVHqgm8f54NbysAgWMGCxs7JKzH"
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
