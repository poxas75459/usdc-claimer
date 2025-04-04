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
    "5Q6DhLkMAyqZsNewqi7HiivMrtXLXsqQkEyFWFG4DA6gaoTfqXjCbTku5r9rQ8cQxeELVdS2C2TCsVoQkVMoVNfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CeXAzb3cyqNMnD3tXJXiYEEyb6HXoWytFux7x9HqVNcysZHsYQB6RgpJmiUodHoXwvBVoSQsJHzHftk8MzhdQqy",
  "key1": "3UK5yrJ877EUcLqJzUwYa8oEzcWLMrGwifoWonHTxM7xLLz3njDhTyBEpDU8nFmUhqpGCqS7M6wBFT77MmKMiyKV",
  "key2": "4RmPXkpaRVf7Pg4gUjmAvfgg5UNfcr35z8MEi3diETAE7ujzYvMdHWZGFkmeyz14J3jpNyzdYWBamcEkrXugSstT",
  "key3": "5JVeyo6paKUfjxbqW2eiLZJSBmtCYWZZ59Bek2hJxyND3YwiP4edTu6Hm7kcavwchBF7vu7fqfzgd1rp7wEtoiF2",
  "key4": "QZDq51dQTygB68w2XMTpbawm9YtsPhMdW2mAxNTaYYzPGwUZ1nLGXANA5hVEhX6jLMzpiy7xtyQEY1fuXhB42js",
  "key5": "3Dt7BBePVD7tEue8ro6jYWqm2SsdUEzPAk41ccrkKXY4ZLyEusLdVaBPBho5GT9ip23oEbYEPjZvC7DFQhFDkFHk",
  "key6": "5BjkKGuMtJv3zguS62SGAEVNCbPyPrJFjLL9FxZgqtpiN2utL1ymxdsL2FrGtBRCkc3Etbx4dn7TStEcXdoPcZen",
  "key7": "3UkS8wYkuCj3yn4XGhZraRmxNiMgNfZUNzMtfdAy3cxx1QqKHe9trB3fz5WKtcPGywAiibzgzreuncgUJw7oox8b",
  "key8": "3Yyvxvzs1D9azUEYYfq6CG2QCR89cTpt4ViMa8gvDSUYbdZ7gUrixsyu63viH6Lkub8CqsDkHJWajvzsj7nga3kG",
  "key9": "EAXkcRGDNAxTDM9NGUjHwc5uKVkjiUhSMe9KrmfAKeZD54DhzQ4Yh4rs3R26QiBEHfipfvS7wGsJCsYSrrLwADo",
  "key10": "3m8P9wZ26xxibPi9tGnRbsMPQ63xo5jkbKVqE7vWthnWYr3PRtHXCwFJwCBGET7HGCfRs2xqBoJALdtszjdAH5EM",
  "key11": "5MQfne9UkpQp9NRqRgMvXTCF6knYdFXsdLC4YKNAbjbfVHKFRvA4x56UeWp3QGbirxgKXQvGFBL7t9fqtPfP4PxG",
  "key12": "2BNSmyFvaqQkgoKZ8pLkxyViLRcqk9A5U8Lxkwnu1NhBG3fMQYQusEs1cmjYxVqnHcouaMdvrPZwWh35p2K3y7bT",
  "key13": "2kwBhnBHvqSpnrETVT2Gza8MQHPQHUNaJJKKWWpY7vz7XewxNafX8VFj635SXgPQfgUXPnbxHjSndvidpjUwvnMH",
  "key14": "EC5DJJVYggQPSZv6ummACkWiBKHXJdheB2Shnwt93NPtGJJtqWBAoRGCwWYJhopKGhKhSM46RB8y2KXunQx3Mvx",
  "key15": "3aLmDYjQrcBrEPnpvGZPw9FEc8FA78EDjX5Rn3XBAYinXBtjQmiGbGgQ9o4rGpNQwswBdewwnXn3SEX4fjJBeKk1",
  "key16": "3jjA9ca2kvqd9DoLKeCFqaFiPF2U2yeet3GMX2TS5UtMd3gjDrKY2p7oDfqZz4kq8Rbf6izY2FCnQNV3VL12rtYC",
  "key17": "BbfTt4NRCFSae734u1ckUkLbsg9hGQK98Bkdc3WrYfZFQdLbnaUp4ndemkrNxX7StLme5G2hsGnYGHjDjM7uyyi",
  "key18": "os324GkN8vrqH7TsE58yeroVetaUb51R4geCjYLZT5MnMug9EnWDMqHrCWmRKmh5m7hretVEY9ebxV6CHPNxCbM",
  "key19": "3ctBim7eSHCuKk2haqoEKZGUzdge8Db5Rv5Jj2ue2q42yUr9eBpntLuHPd5mTJx7stW7NfXENsyEABmVZyfqZZaN",
  "key20": "2dAvdCDQJjTwQMUpCL9RwGsRbmdb2evKgqSggSephX8VudzRxjSM5tvLaUYNzCMgn1fAPCCBxUnGep3Eg7JB3BDS",
  "key21": "3Bk5GvDpdJtLivZKj5A3gidRsMFdzQFPV4e4WNhf3HTe8fYVdmCzgGiNBg6YkBdsGoNCUdrbnwSWNahh3m6eyEmd",
  "key22": "2UFCxTHL4pJFHn3iwmgnQ4mHfQcz9dbiR8ct6hPgF9afv9Vs1nYbYfkyriRZisCDy2y3drQ11S75dABUXZXmyfVw",
  "key23": "3SjjsVYe4dGE4H2FWMitwLdRxr1NBhzkiH8Li3wLkPMEV9aiFLhueRJsbmXNaJpvdZM3G1jqArBTBrH7Tq1iRBw9",
  "key24": "eQnXNZVWXDVgvVYMMAozAgsPDcBS5dhew9a9FzJjZRGX8JGQ7YdCVbWqgoTSDAQh8fN2dxgiNUYHyy8TgfKwqSv",
  "key25": "3uFEtcxatsgnj8SY1np7o6BXVBK3atb7hPGKpxbp1Ww7Wc9Mpwn3VYbuKasNsZMVN1jkbs3pU2rqAjUVXu5PZwzA",
  "key26": "5yosjw3WK5tZmhikjxzsy5t2S6Naff4m4g1kGBJkYtovnpv6MCUA9PD7Y3bfGvKYuE8afUvjkGFjvkVEZbUBQvNP",
  "key27": "tFq6XsBjYsRfb7UH9oMxEmhiYSYoPvSF3NHKyJ221aXd69rhfEWLD5ctkNpKSZx26bPYDRH8htu2MXj2L7JATay",
  "key28": "fEy9KowrZwtsowARepVSf7KPUJfoJSdr25edx7eBFq2TgAsUfkp6Vgc8g6ak4wrENMBPrhQQkUZASsZVo5ptJeW",
  "key29": "PSVwKXSpCZ3UVTwD3aEg4TCybaDiPzmzWjLpyZGrQAP8qaSAGReyPL2whBakF76dq3zoYFg7wZDebEwtfzeMpcW",
  "key30": "bNwy4eYS9CS71fp2djzVdvdwFNcA6SQy2cZeZF9s51MFmXQv3aQN2LAaNEQg1kEXitPPA7fVQG32f63eDGpf3rm",
  "key31": "5gMhsgKibb1W5Ee5eC4KJi3gXk8WgAqG5XtvFoLiRc6LCdWp9TfrS3GQoFaGbBVmASustiyWmzxzJPmA3cJ6Ve9i",
  "key32": "3EcYrGxoYqsNhomYgCfWwS149eiN5wtNs8iRBi7XtoFtkZ7uK7XY9THA5iRG2pzWxwsDeaspXKwcP6e29Ayacnrb",
  "key33": "5iWbux2rDXywZciTmVDiHFpyp3UZYTHpmKwov6yVmCuXUphjfQJikqkGmHiqbEgQ4REAzEo2GGZs4zRys826qTsh",
  "key34": "24zxYTD3dquXERyrpJdRR2QV8iGKRXMeZeGKVTR2WNqnsTZAsmctz4WXB4dVcyHLNUELMfguh8rD7CqH8m62GG6x",
  "key35": "jpPhatkpUjnBoyUizeTei8FWw6aWXu3CY2yJgfonW5EK1dARveXiaXMBNATYwpmTTBtAf4K4L5LdUf5TBM4rcdW",
  "key36": "4yAK6N1wiCuofncokqg7XgW8nL8QPeKMFU1T7G3N9UrQhzkE8dqAtqfyUsumxSK9QDacVZwS2ZgoXtRZLZrxkm1D",
  "key37": "4Ea9D1VTsbnSkAAPFyaqDKxJWRPvD1oyE9tvZF8Gq1a7wUTWMW8aJquhCuZ3V1Ww11JjStPAbzQJP81Wjv3jcGdB",
  "key38": "wdwRnaeipMySPD5wfFAWQYnbKEJiD7Rso9cxdu6k96MtriMHjJUq65k8wCaVMdQcBTm5LG6m3e7S4VTDcEdcn5L",
  "key39": "32fzgeuRM5ibYuHrJhrVdEYLJJTt18Wtk5MzJf4zuZ9X34mji2GwfN2DYaUFomnQFeQXDM4xNTy9YyYDmVxtoygU",
  "key40": "5izxzci8UgzZqboALx2G25TJXZxFocbU4tSUN4Mt5fuo2gg7uRbqETerLVPxwscXTkXiWb3Vv2KGqK3aJwkzGGcC",
  "key41": "DGEavtuFSK9s3pJfZurQpqvR83CEZgaZNHo9hiNdj57oRL2uof8rgBEdA5XGTCdVhGxMWNJu8KLbHBj8YQkMRwu",
  "key42": "3uZyhLgycz45Y4TFWPKKNhmgn5vPhwDCRGod9YUWrWQSWUQLDFbpnJXyE6oXYgyVXDgYr8ofkCjamzE3JWcrkfGR",
  "key43": "5UwLv52zCAgt63csFNFo9JLMQ92qJBKXsRmP2WoxiavoBUHYE4Gd9fJgARttxJPhzzQPjBZwfQsgBf63AJ97tNFL",
  "key44": "2k7gtc7TdxmJmRPrZT5CBekzMfKL8QxhudQtM9BTS1ZNzzwCA6fh4CcrfDTgcs7VjNyVUkdP288M2v6DEje5Dy6m",
  "key45": "2Xq9qanb4FKZC4PBn1sKauyKgfjXJL1HQjMVn5Jvt8s3LyicuWTAwcZp44pKuYYTEBALsM4x9wMiotLGWooKCQdP"
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
