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
    "2n1mxcYSLRqKgGDat9Ya7kvr7z7n9t7ZTPJDTHqwsfobmhjyXsoPqnxXyJpcHt4s5Y8NxUG2VDbfbsPXhbtXXQY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Xb8UPWAHXLQwmjVrXo8SGzZqXTSrPvnRJERhDvSv8dLJ5SRRbAwwFg9a7MN5o7gH2Y3M99bYD3w95GjNRAp56p",
  "key1": "Z2ZCnpGPTftEdE1TFYgven5L4SJ9ZgLRwqYmiYfoFTBY7ujZnkEgSPYnCPh1Ep6gWAf4Xu4vsPjP1h3ehhx4VkC",
  "key2": "2QrstQpmHjLB121NDtBVJ45i1ahvhxyrnGHdv1sTwwSL2Y2EHUu3b9jXhVzM7Tf7Eug9Yu6nyeEsJS89iBKwYE5E",
  "key3": "52xoWKwrqqbkGDwhnCWEcviDe5fQapSKrnYKkPYhYVXf7pXshQ23463LcMaXynYrCqri5ASHp7hcPv6GqejQrhuK",
  "key4": "VEaNuFdrKA1wAuBgC2UcJxVEDgHt6BmNmjb95HBjxtpUWyzU28JBnsUF7HVCvtk2TBmvNAxDDhCgJSvpWgBFBBb",
  "key5": "3oKVhUvQtqddtd9cY9ftjSzwPmuvqBkEPeDmyYsN3nDX7VnnxRJWNASgYxgnzhbW5KDrMJTfULLbBFKJgzXaDtNS",
  "key6": "3a8QpJFr5UvPa529FczL8JT8de4p9RBu34cjXUFsrpBveLSNCihoJUT3SW4sYXykHsdtzKXtmwonN1KbBRe9vWDG",
  "key7": "67FeCTNKR4X5oTeRHVApqHVmnVQwVTyq6kHUo7bYivvWEabKUzSWqAiJENZcahs9uusmHncNSZq1ob9YiJ41nEvV",
  "key8": "5PQqbPp7hCemnVhvTyZ2bFKyRnpSpfCBUP8mr8NPCzBJUZGKJGZUdcXr7E1MY8PJ73PqRJdHDRScGK3hFedQNPZp",
  "key9": "524bVtMi2CfNuR4nVnvAPT6Ho5FiJ8D2Bh15mPvYck3zUYFJHXzCRYtEuq6UdiNomKD1RMVKBnDrcySuXAArYiuo",
  "key10": "8SxoibnLdfwm87V4WECPRog3Y6D7VBeRrZMAUwXr2DuLyNYwhRMueahCKsvJTS7KkQ8iHFNMqfFA8gW9Leky6cM",
  "key11": "58jpdsnHU3XnmwXiEW4d6zcmXajormk1YqJJuqn6tDkkqvmXPEWpenUSbt5YPCaHwoDTzrnwXqUuYhcQDTxfEvcK",
  "key12": "2WVqHL6KXtsEJ3gZoHwnuwa5Hto5FjQndfY3cianxkTu2W8RvBax23LuJ3ufrdfLXyZrJFwgEHpxcz8SMLoXsthg",
  "key13": "5waRo9MviSE2dGXBPPhcmsE6vutbwVoDVV3Nr22s1DLJXSjEnCB57ZzTnsdoSSSrhWTdC2pTGc35EuPVhRMBcj2r",
  "key14": "4Njq67SVQTWcuuytgqKqQvZCXQWd6EDmSbdFDFVY6Ww2znDPZ2LfBiijyRvJBbdtaCYN6y2A3DkyJRzURzPzwBc4",
  "key15": "5TPHBgBTcbv14qvQT84dR2mcA2oeA2nS2qCoYB3iFRTWaJaznusDC1JDp3L6hgpyEbDCpQ1rqzF67QpoqCqbd1Yj",
  "key16": "5YB5mNtWs7JftNt8J22hJ8bWSsaauvMXA4bhiNPeRRabvy8V9xJWyWRS2ZCNCtZzYQCr16Rm8dVELhqbLm46hH2F",
  "key17": "LVenmLGL1xgLWpidxujbLPN2o3eZ9NQhykbgKjLD5sA3HdG63A3ARN9iezuAZj64cwPJeN976UroYdZJqqCmAtx",
  "key18": "2BGrBqdd7kz6pQZjyQnF6KT6Sdhsi6cJUn4ANcPbxdb5vAB9CqtL51J9VHbsrHjUokYCZijH1fWdm5DnCEPmn91A",
  "key19": "3U1CJGyKNywFVkKgrEv3UGKTRkWeaB7rB3497GX9rooSq6vUPqytth8WiYDEsaVWVEuSACoAAukDXHesBN8xBhmt",
  "key20": "2gvfPfFLawj1gwrUGo7UPoPvjVmwNUKRA45xXJJm6n1iQ3JwMr8E4r1bitXzjX74RUY3S2UP4VM2TSSjvcyoZxYN",
  "key21": "fjsc4EH399itKpyPoKDx6jZiPKPBfgWXUTcaKMr4c9u9zL3Xy4Es7jTWUF8aTV6sk5deEwW2wQafRFtu5L1Zq6d",
  "key22": "3kbGKP7bhE5FVrRLkmTGbRgdBnAN3eH75K5Twt5oRLoc25mVJjdEBpg9oqtBG9pMhqMowEBzYVMQnTFtVo5rGAX4",
  "key23": "5cb11uqaz728vVAAeokH3g22RWx61MpSR2MxiBqhqL6uuWmKdtA854F8a2Sgs6sm9HUujKKcF15Zj6ZeG61u45kR",
  "key24": "3Su6Wc6CcGxWghWLeiNRmoahk2BrLbUQ8DpHh8uoSKanKTxWhvGaEaF88PyiV9ii7CiNBXAfQRA7E9edHp2R749o",
  "key25": "QJQx77CVsgBJqgeJ2bMyp5gsGKy6vUvf6xczL8TafZe5EZfuWqdxfy4Kd7QUMVEY9Q2A1eMjYHWjWAe3eu734iF",
  "key26": "5Fmb512QwWZ8ypLaayj9PAjh6p7NY3ZBRvqqg9ZNLRSy2prXUJpancv3K1L2NF4e4VupqSYYq2BbGGhcxDSoQtou",
  "key27": "4vBYZEKrySBUQZevmCwXNF1fZkBj52uEJtuLMCaFw1epJUMiGK2DCbVwfjcXdMN7dPQbxW8mStJtoas1JsH4cnF1",
  "key28": "9hhmCf4X75UMMwyWwRtwqrdSNDdJrHrLE6RrXHJULxzgz1gaMr6qX3ppiWZAb9DaZ4nHD1jCfihZga9WG32824w",
  "key29": "3CBFkM9TLVgT1dpdx2Cdia2N8vKYV2ZJeuz2B4R8mGJyKS6nN6XdB1zp4Nfje74gqecXv4xksKntmtYx3wxFFcbp",
  "key30": "5CeAx6vMWoJvocFGF8cjnLP5R7s6iRngBTs5rRQ5UphmmJkf11w3xnL2WuXvUvCMkhTGWwcd799YurFi9yh6zEwW",
  "key31": "QZ3NCjDafuX9xBq8pmEsC9K5PApqGXzjZGbvwFCeYBvkzAu8vnvkFPd1AZpZC5LvdfMwpRikCTbqSYr2vPrUYgM",
  "key32": "4YTqhxnx8aDS1VDPrj4wavoyDgfLP8MvbAEJXSdyA7TUjrU9oAaPJPbfmMyiCapLFGDPXpE4VobuPXk9AYoAXZyJ",
  "key33": "62RQsHKZta8dxCcbbECTvJFJNVeAz8hPZXp3S2BLUErxhKfwrZRVpNspsPPxe5wRt7oxFMZRZh29z7ZvvFYC5RZZ",
  "key34": "2uzPePmrxmjG4JBiMwXoxFqxC3RVpdphc6o4Q6ubiDwQkziufA6Twwco4nX1ooXNnpXTnLNQcrM9BxwNNKtcaUrK",
  "key35": "eSsjDBpTS369TvLwPRS8bcCdqGPYdWvpBvvpAAxh9QeGbH6XNwzKLRg25a366PAANmNGT95XfUwjKsqqwbjkHNJ",
  "key36": "43d24rPt8HbuFdGpte14EZgxbxdzCBELh6uU429NNMp4YzdLBKiJZaANhfWBXoxPBX9qGrg4tsKukJTPTN45PdHZ",
  "key37": "47pGnQfeXn6iAEt7AKARD5A6pNtv1aYcisdouxT1E8TBkxQVEoKojSaD5EMFoGWN7tKEaLLjizeEgJKBRgKYAKGK",
  "key38": "36ZQYY99G82bdvzWjMcWtNQNNkDiuCJZ9WNwBogZXy419Y6NDdiM79aCtbqQV7MugowYkoF4amXKhnQN2WKYY6TC",
  "key39": "5GG518NZXgRCJc4KJ8zEBELegzYZJUhyNtbxdKv19toou4HbKubY1Ch6n4edM5MhL7Krye7TicYYMeU3TuK6Sm6U",
  "key40": "5vUcEPX5ZdATnhqCeAnQdHbbCbwP4WmhBHCPKGpEwCznJasjdMKU4U45bK4nDuNZTgs6d3UjmWaGng2AXawyax4C",
  "key41": "5rdWzp3j5pihJCmqYcM8Lzbpjsuqzfz6geQXTvn1YTcxf8vFS74fLWutdKMPaS6p65YpWo3xSwrHBFmg3dDEqSHp",
  "key42": "2e3tVaNswcTaLCqqfAjefab6rdGNb7Zz3EsfLhEERAnzQj6g9ytJ96cNaQnbcnbKKsRXwkkRySQs3QcvkHVAiKQx",
  "key43": "VaFUuXnbuL21JfxRyFVF4pJQ41oAMhFbM4Xt1uDGL4pRAHZbmxW9idaUwPcDNcgyQwGHwvf4ZhueJkJEpteAQLa",
  "key44": "4s2hBfH42QqRgY7V2rJavk64r8p3epMVo3BajAmniYLFYWaXJRsVfdd7pBm7ihTpiXzYzEM7WcUbeUtUwTSienVx",
  "key45": "2HeagbmXs1WCNsN9fXFo3W649PfhUW8zRLPEPYzz1Hg4vaKsajTVVfKgMoA1jdFAJRQZwdT9kUfGLDohKQQQaY6d",
  "key46": "3t3mZkwQaEdXRXKrXbj9KGaKNBGXqcaaMDZ325nV2xtGPEUe88FaccFmZGon5Xed5p18q6rCHa5v9mxMnKDRjP4B"
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
