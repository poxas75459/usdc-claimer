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
    "5dzNBqnnjqXo8mJyyaDDbd6oSaUA2L1H8v4NGM3LSvTyR3zX2LMYZCe48a4UUugN33qMK6VCKRiiv1gkVX5DwV9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34x6fw19pbHRsysPXnxennk9LSJfC7uoskdvisZvQeBBHWAsvQ9FffRtXYnZCUooJmZXGLo9R8sdqR9nr8LD1dar",
  "key1": "42QyEkeARU55iU5QJaANPaq3ak4FxsioEywSdADGP2fbbaKdwZMZdkALv9WBWFwMcoLLntqxNRnP8tTzoT89RDRq",
  "key2": "voWfbpKm9jwwoRYjzm691Vp6J7tbpLCCX4U4Xp5RqcQ2TyGhbBWJvEaVpq6T2Udi84ajTQqZecC3rSFtJY3Lcod",
  "key3": "4ghfoLrWsWkAFxpPi5ieizF2gkAK2XYoLfakUrcZuC4wSPnnsY3UriY4ZmsqRkJrsYc34EBD5MxWmWhNyVMVaGdQ",
  "key4": "5GTYD17e21XZejkWpjEC5QkNFAsN1gCfx5ecjgSrGDBnuxzRQEW9xsX5GLdnpC1YjtsjCK7jDzP9qtJrc4dxE1gv",
  "key5": "4tgfooEJzU6WHVaqqiw5WdymxYJVrcF6bNZyFPBRfeGV9McFLr64go4XHoEUoCYDDCSt858wGZpqe5arFjoEcevw",
  "key6": "3jTAEJDyGASMqiu6Q8QRoETxhFDYkK99NRzMFsWmH48in6VeQ86nPQXCeqzmPDTDan2Ve22m1e1cG6d5HFtu9CcU",
  "key7": "2sebL91SzryUJEuwu7C4g4mhraaZRedoPX6kqpgUhLteSCvC2rwMmHpnFQRhEPbhWL9dZeNTMFkcubUD8TAxfBaw",
  "key8": "4oyEM25RmpETBTbdYUhX2MLkLD6v7Z3HQRasYfHfe2yYNDvGYmbSLy7uYA2mXk1wQWJ79HgEnDDowoMXYHZDCoA3",
  "key9": "31wjcZhju3b5ijL54jPsizuGnXoHNDmCNNmRxmx9HCiUn5B6gLivwJ6rxqRoBafg6MUcNrAy2XGWFEbrvjYDsyyY",
  "key10": "47xR1eNAgaYeP2fzwHEeLSSrV1wq3mjJUoDQ1zEMBYXBYGmGEnaHqXtJpXWy8hx72HEAK3XGpenr9xgkJtcVAaop",
  "key11": "4CDBfLEAAsGxi8NNFKTKorXnfft39sQzajhaHodgyaA8vN1n81Evd157FEW4oda26XyFKsPiLkxC3AAMDTWETexD",
  "key12": "3L2emkDwqpuds6iVPwi8Qnh5GLUtSFf62LZowQF5varD4uGAiyemrX8SUryLwRTGJJyVqpkjaUqisFRZF3Hj7sxT",
  "key13": "6ZSvn7EwsmnunzgjiTq3UECPuW9EWr8AndcU8ne839rWKwkSrdZKFvLanLKDJgSEQM9PVhAFoQMSHxTq8Va9Xr6",
  "key14": "3ycDgXNaQ9doS2SKoaxEHfQWbQHm4r8tHyzDUyd5mtXVbMGhAQCzhT2Wk9u5pbN7obL3qqn8NhxJhmuuyR2VGKdd",
  "key15": "5t7ZZQhPdk9LUuNndVJZNy683KYAKvGg868sccKueLc15qej7TBCxJVnqar8Jzeyh1cdL472SFk63UqjDAfciKct",
  "key16": "2s3LzLvv5EdyEgrchV14F3FdkBUu6zTeD8tLJnCJAYdkcixDcEaWYEPu7obRXwpEaPGHkzbF8Kueteywa4pRXyWb",
  "key17": "3tEGNUpt2cvESH1RTeT6UozYaqfUmZYRhCcJERG4W8SwPtGtuvGjuP9u7TNgmYA3c23fTxpTUiS71eiaFaKCY9Gv",
  "key18": "3gUqo9MuBLC7nAK9wh6PXST35DgXqeyMXPHV2jYsjyCviNzLbgxDeTVwYitTvx4PFnRsEDkdh6co4RHQt7sdxhiS",
  "key19": "2AwgGtR8hkpo4kHqdPuVLcSZXsZFnmc1vwTrBPnC7tQNm7z3mrotpHk8W3uUHUpZjxjuvqsSLDPjRJBRCkmtF8ub",
  "key20": "4qUCMbdm6zhdhqBKJMoEEJdkcz6Yng8jCfWZSygWD9opW9SyAsfnknFx4dtebRfBh3UQjbxNbk2hz9M8VzHJwmSt",
  "key21": "3Gx1NMhk4nwav83tgPftaDq67i1oEhXTHSqLcse8emiSPRQMwHQUNkSLXYD1rFdsjHm8GhCdKBg7nKgBBm7uVcWj",
  "key22": "jGAYo1xiUL7o4ikSNVc5oT1kmrJeHJjqRBJFxsMbk7KoQLiJU8EynPtAPUunnKWi6aLDoFSb3HjSjnhwjsZWW9h",
  "key23": "3btNwkNRWFQiMp9JKdKLjhs2UQz5kE5YycwHUu9omCmwgawRq6xCdv9ofWte2kCaCupGKbrUFtTRVM2QpotQaCAH",
  "key24": "46GVhzQV7iSc5C7Tqf3TvJ33Vw3PY9m1QyPgrwdH4fjGATzCW97nYyidX65WGJmg22x34K8DaYXmVZmgDLNSdHZB",
  "key25": "4usCk5iq6WoV2yKWAnpKrvrBgUsPZJrL7MeCshsgR9WM6zYSTWZ4dePKpebJmk3MaodAyYKT3fwcje2xsjpxAs6c",
  "key26": "4joWPAP3UmCwwXUNt8eBJUNDKCYHjPn4D3BpS3tQjgqsxKRTNJVkujeFdBYms4Zd8BiaXPK1nJFqZCuQT7jqyAGb",
  "key27": "47jeKejRcPwDExPjDZa6mMVxqyaZWxUc3zr58HGp87dEeLRJfWcmgxMDfC5qQ31yNPZMXE8CvKyCFPEYsjvg27Ko",
  "key28": "2qAQQSi5v2kzgjeVqmv9ZihbBHju4qsxR8tAo165r34Mw2aBUZxJ2MDKnB8ee6d2oi7XL3knX5d4FXqLNj6CGR7d",
  "key29": "5og3PHiWxGdKEZF2JNyJDQgertgHdU4eMjhBLty33t9HMxncUEcyNQx27BJTfpPRPf2EFZ49VPCqNypwv2xVnq13",
  "key30": "2qowS2m5de9UKvk8CTEY5fJdLCJuxieiCv3tiw21SBNfBzoiJwqJrfJy9797xW9Ln7VprfTeErYhtP5oYfQqfPC",
  "key31": "45d4DiCQScvHrjSeBXXSimhKc3pBsbHieGSRU5ZDiAaeybfsEMfr93d1KXk2TJPfLNJrB1TcpuNoFN9nvWvsoCFg",
  "key32": "5tE6GN2YkpF6BF22MP4MNuCWRpo7eF4RDLamAJUYtnPmiwRibM5Vfaku6EU3ES7kB6K7zGwuMcj7s7s4LaPxTVcL",
  "key33": "qSbj2xhPKxP95buYWkogNagE5URsqQcZDMVwQ48JnaBLi8Z7PWzbYF4rRhL1C4w3RJrCcaFMfKKkEYiLjf35G9S",
  "key34": "ijuhuvxsE5QqQHbRTx658nHUUyPEdTBWomRptPnfStdmGNLFHR7FnNusUepwpr5tCpGxgJJgrshqzk5ycarFECU",
  "key35": "49HeVdzF1NtfxxT57kd2kMSU9axtSi9eumLsoshPLHchu73H7ShRk6QYt4pVJQAzvVrKkiAcJeKxVDsvcRtjs6Yc"
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
