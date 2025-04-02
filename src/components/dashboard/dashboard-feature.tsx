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
    "NsYfxYyF8FWyvtUSVrjPdc7qXVp6MEzZdu3B1s3bUrGvUA4BvqmpRpHWkYCt8cUgLmoNdmqqVLGvg84uLeXvB8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPo2oJSqxNFzmJsEXUYQn5P93s1HnM4wWJLNQHppyrYtjQJakifWqCeFSGhMJjMcWC8zkJAd4B8WtNdogsLa1RH",
  "key1": "4vqMmdLhS2xNFAZxtgkmYqtYdDMQytEa8zv71LV7e7BfGGAk7f9rCSn2DT6MqDdxVvSPfuwiYb9q76D4uPC4ZFML",
  "key2": "CoypW2yN4Hf3z4Q2z2YnnsE3ciyQx2XWJCaJvVKzG22UeM4kYRsurugas6qeWt8DuNavMw2YDRoBzpzNpo4i8NQ",
  "key3": "4jav1tZkW6QH1kKWiDsYX3TGmuQDQQQUdxHSH3Prd9cjCmEjyBucnPEuNhDgwD3kUJeAvtBJueAfNEFbx5suE7po",
  "key4": "5LpMGTgwkzDvBaEG9wyM1Baz1gXSC7J6rhty253RmMrHryqv2YQLoNNkYWtyAqn5zF3wbPRHunfd1vdmVXVyTVGh",
  "key5": "32Bf6WCMpRuej5fzxbrCPW8aWE5AsMUkRCK3RN9fSe7arAr8LFNtTugU2w9Uh25HVkRoH3vn9rZzGqjEHEMLfrzt",
  "key6": "2xbqqyxvETW4ChgUwZiwBtmg1uawiYQgJeGpwKXibLTsyizqYqpHL8v4MbhPArq3CMSGWb592X6uUTKC4VuhcG16",
  "key7": "qoBjAaXBHP86MrSKqCWDTx4bsgaXbR7TXjmMMZ72msTABsqDrWuHAv5UhJb5YWZcs2YZzSA5xzqeKqh98Uiubi7",
  "key8": "U1AdpXyqnmkaXowLv1EuXusdCLq7KSzZ5WgxowzZ1PEhNm4bLTsAGzrp7CkMRE3r7b9Z1wyKRr9WCTySkrxsNTb",
  "key9": "UFBCuvT6Z7ve8ukDnpon8GwB1t2wKe84fGBoCaF7fdh6BFiwj1fw7kJaxeVpreW5H6up6ptATuX45rqTgSodcjK",
  "key10": "gXFzTAk5xpUDbf8nmw1odRoUfvsviyfaNUsmTQzK4qmUC36M47p7Fk62jr5TzYwTWLsKdE6qzX5zWMYHx1kYin7",
  "key11": "3a4Cqoq6HDHDker88KZmuwbuwBwLVpASdXYR8m2WvgcBAHsCCCcq1bnMPjKr6vbTnm57xfTjHFYiePCAMrkdA24W",
  "key12": "4rYgsSVLLrz2XBr47twSuNQTzteJLvUJ98R6qFXGi5SW1UWgxcT9ivDSJBCMcjiCwKZWd9qyAMbma7GT1YLbq7n3",
  "key13": "2dcyuKJqffKQBshuBqdQ2oS5hR8Gf5j6N9ou8a2mS2iSJBExK3qen7cb3qrZB2MLXW3qSP9BhLTvKYoBUeympDLQ",
  "key14": "5E1d8X7zQhanEuPwKoShTUjZqC1fnp3mahjb46CFobES93Xik5Exqcd2UaWH6k8BEcnJy9mfk3J66ekp3ZAsWPqr",
  "key15": "22nhS2w8Gw1bPHaNXU3R26V4XzfZizxj4F1emN5F1pHfPpYAzM5LL2NWpEPDvabeyTB8pE9m2b9K16NFRGAYFx9h",
  "key16": "2zvfFvQp9tkPbGSYnB4bFevffQnyKAMtvKXBRDMcwwbJ5jGgeDM3xEWtyAMEaRU9ekuoZgbBx1XZk9upxRFPm37C",
  "key17": "3GUyPqqKMoZ4YePn44RWygbrfr4whfou6ussYgLSGarnd8DaA5fzbrw93ynyh17B6tEzo69KcTwH3XgNYhMqKSod",
  "key18": "44KorRx8AN2H3wofM4ZTv82UNgbDShkqjtXkuLnHGGBtc3MdRJebG7YUBoP8HsQ2yadPUgJ5qxyzc1TcxtL3xk8h",
  "key19": "5eM7gKbKVF3rbHipubNz66gEWkRL2dJp2L9WFBX3j2cMimZ6BEoAkHKMZVYeeiPbhheKVxCAhmp7DdMxN2cE6Z1z",
  "key20": "3MyMh47un5zmTkFEG1zEFX4pz1F12qsntGrsCUmBzDtFH3cBpRVechn2dZqXhzUbCKLt4JJzjUMsBW29Kg2RaCYt",
  "key21": "2TJcV8kHK9t8N14nDnEUS1KWV3f2XpJVcPkYHQpaR5WthEFu7cjLEmt4Ey8ZfENVNEzFVYTRGoAJLJoDA3cFN5To",
  "key22": "44uMwCiwSQKny1o86Xd4nSweb4VbSyp4Megd6rpghUDNyyhwqe6Z1fNgTzVov8fHwZ2KnZM1xvGHuLfGTtCqRbtS",
  "key23": "2gobEENmtZxXNNbmHzaorKk4Hk7oY57MkKAVTmR3nQnrga8jvMgWYSLpmdFJQCzwq2NL8MDKAhfozQeqgfCenK69",
  "key24": "2jFiUtJhwYxYaHGKfmzb3z4gCFWcg6kZS6Kga7UGsP5qbfcMfxshB4VMxDJ8sPzUmhvPB8rgTEGwHphzK8cJ1XYx",
  "key25": "2Zdtnoz4NBqW486XMsQJn6E25ZRC9GAWG7KVs9A9isk1Er5SzCiG9VuFeG3bCKgvc3ZRkF7JkMQbYwJQL6zbesut",
  "key26": "4VwAp1i6uiCNyy4yisJUnA9SYZCUYhdyhzf5v5hMgocSMrgnjNNioU9FHDpnj9e4mDVubChpXv8Q5BdXQoeYrETZ",
  "key27": "5FyN31QjVwJVSw1DjmjidC9yom6pE696ondByHY893TpdDggy3zY2pXX7cgdfiaq41P6CMgh1KVmsYmriV5vnFf7"
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
