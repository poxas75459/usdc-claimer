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
    "UuzhZSv8xaKnJJcts68LhLDbWKPwWFxqeXTiGqoarA2MxTYgnEQLHSSYzpSYFC6pmj6vCSKDnkzWncymtcXPje7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Wnc2QXjyFAEWQfkLmx2t2UMZYqXz4sNTGnskbRArzCDhsutsG7EnZwJ3MGQ86M6LTwYvLGrKLGft763ziXzDse",
  "key1": "49gSjdi9VwwhPmi19etC86rjudyj5TNRhspaBv1aG8q15NSwJccwDT7WVRWUJwbqsoGBJvKmZmpxv1VGhyMu1Z1p",
  "key2": "Q1eS58oY2yJgwTTsRAhBMLbC5GvzpKUuxbBVDtb5cLueLWVNqq7cCrfEphZq11HJLyni6TCACQuVgB8WhSXofUi",
  "key3": "SuT6KqkbMT2A7Muxtqdz2CkWyMfHXMCT4DHow59S5arCYUauuppas2N13Qbz5YPbFkKQmEKNP4KHcp1fNefpJPM",
  "key4": "3NzQTKMdVbPf5Z3wZS6UTFusVUCbQKsY7Z8oCBbfAegVG7We92uC4CCp9rUe8Q5HfpbNCuv5bTLJGE2gExi9iaLJ",
  "key5": "2EX1mvExppNNmt7tdUVDRuXtmD9hvrafsBbqCHjjv2gjymsehKqG1escxyRDD24j5RY4ihFCKzJyi7SFBXLLr8cs",
  "key6": "2Kq3ogDmxSVJpPrM1h1qMGzCg4R4xmAKisXhq3Q14eM8mJaFRdnJrmSdmTwSJrj95Ag2LnmxeBCrsU3GtSpcsWWu",
  "key7": "YiY6JFJ5bxEnTTcgtzGAhEQRvwUt6W9dqBtU5ejm8pKcvvZQSgLL2vWBVR7TPDumd6HtRvZXFSsyMgDocpQNYe4",
  "key8": "3f11r658Zrdz5UKFGLt9Awn6ttJzoj6VGynEyQtT2BPNymEpYKDzPrS8HHWN8aPTSFh1MN887RrBjo3WCvr2dqUn",
  "key9": "5gLEZE1XQ4ezTAx82qRoF5JbckUUs1KU5dCujyR1Lw4Ksgco8urNPcekx9W8SkqhFJ4gGkdCvchxxKJygsPqhSEU",
  "key10": "5WyqG1TpoMXqtLAtd4Wkc8pFoea564Cof7sd4sWvktkgGoFbEwzouWcpzRYQyvkMNxBE4j86gdpsrvk4QKTgvzFK",
  "key11": "2TxJ5Afeza6gQ4TGGo5hxZaqhyRCFvWSYDa6G219mzUQDajHd6rLpuzrtBnb7k6F4WQya6mr6Pg9obb9EfJbjQk2",
  "key12": "iqYidRPhQBRAFwaU7d5mov5h5jS1Efm9czaKb3bhWWoWReKEpaMopN6J82FWje6rU8ybck7Yan4i9ovq3QiNztY",
  "key13": "584V4WVUrDZQCZLao7WpvHGgJUTgCT6rTHFyyYevq4zYYYzEG4JoGufJ7WwaGu3TNBCStaYL379xUenBrYMXn9Cd",
  "key14": "5duNkoCAmTyGXDZuzT5EFhL81UJvoCYoLhUZc774DasJBkVXNAd4GALmqa4KKypuovxcZ9wT89jVN1ddoRW4uc9E",
  "key15": "2WbK2eeLgWcAS4rbdbeNUHpXxoFsuMFxXKCmguVNELJEsVHHV5rbw5qAxD2aoo7TihXmSGdzGNSs5YoYMkdF7dSk",
  "key16": "3zjGypqNZJzvRLKewwzepvkZm4mbRqV6qShAKLF4F1GwgHVQmTyfh6fkd1vYW4uDTKuDS6wFW6VbGJcGHaaSpj4V",
  "key17": "4a5xKMDUxLHKCqkWpaMMcf5qcJiEa1UUYaRwLtC2TdiZeLZfVyC1x1Ga5jLfTJ7abDRcyGohJbBrFfybUZXcSn5u",
  "key18": "5S2qaX5rdcvPngpjTQ4h8yFRH9BmCCiPRXxAX7qWf23shmvyyj9niNefMuvPgxvQgqkfWGstTxgYj6f1jBh8puiz",
  "key19": "2mNTbeJ8nPNBL8vAxovRpZBHhZu3zxBGeCWQFMcpFBdM3KpReJci2L12djD6w1nnvxj8kcjD6Ffxn139NvTZBkwN",
  "key20": "3oVD5k1sWdPioMP3Ek2uCUKnaznseAgQRPkHWeeH3Dh8wmgApzANyQuJhGuDNyqmB8VUSwWUuPaB2wFUtpMwqeiL",
  "key21": "3R35x48m84bSVbeR8RDxNrDHTgWE5vJfLbwNebw2P5egXtuYWXi5GyrNH2TfrDmPhRfFBDAVLt1jBvxpmwe7gBTU",
  "key22": "56rEQ41R6jezayVn6PRbXAXBQvZUe9KdaJMSrxKAprm8g7pxBJYvXtk7CYGaNNYpWKsKCUcg2geTzUKC9qFYgPeX",
  "key23": "go6H7ryqx7fAneTMTkwURpnSZk46KYnoy3tkzWa3YzbGHGm4JA6GXC9ub5gNavQsm3Z94x7HHiGqiBFSiNNFphv",
  "key24": "35hLtNaGFg37V2qWjJ9e6JWvR7b2TbixGYoPVrToQDNDC4gfFXYZaQUKpkRyngx2jKnpviuNeVUVqamR8LLgz6Gp",
  "key25": "22QDXf2qA43keNgpXpMH4h6SEBT84paNnYgg7kqi881ckR5Fy99miAyG3vnccuWPND2i3gyB7FD8WcTDAMMiMpqj",
  "key26": "5ronQsFZ2Ps5PJbgy38o82QtRNSCA7emuEPJeSXQfXWoWcexqeJYrmnJQCrPVKMbJjdZhAFTwNrGkWh7bGGKcJMZ",
  "key27": "5HBzrrzEiqqWrwX7ADeNoBXWmKrjKk6BHW3zay2m9UkgtVKVYiyCYTti3iqhWybVPHwgoYkfAnoNM6uV58g6SpAo",
  "key28": "4D72Lu8mwghZGk4MieLJdajM9dtTYii2nCbB9WLVjmWcadk4EQejn6fAVeMXCajghaZurs9Ws2KcwcNHkDw8x4qP",
  "key29": "5gg9Xsnrb3ApuYFYSWvX9WZAkgRfHvD4uKZCd3FneWz7AbGTbNMQFefKfFXgWNTcr1oKTGTvqJsuRUtq9qZjStui"
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
