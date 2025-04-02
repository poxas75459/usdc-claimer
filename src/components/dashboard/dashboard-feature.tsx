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
    "4SqpdMfgUQ6SwUWLi5xwS6ev2tJ3tgzjNfz47oxjYVvoEbsdkNSyZWHWNoCBDgwhnDYkMiYbY7m4R35D7gKBg2D1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xcBAaZVzrrg1TZ6Mq4ERNeMWGZG492CGU1mcBgvWm7fu65nc4iaYVwRtqi6AARNZ6om2qNaeawmvkFJSAA5siB2",
  "key1": "2Zves7Y2NunFeSSP79J59GPuNRocaoZTfsVFXHrYkHx8zcGkbBYsjRtmoDLuJCNDbdRkqEtd2BnrjvyaJuRczUpc",
  "key2": "MpSLR5Nx3FR2sNZ1J1MhhGTqX7Ph8Yhqhb7f6MWxgptqP2bNVUzpyuLn9aZ16gzQjYU7HQgyiF2bhhT1EdHddQV",
  "key3": "TLqMN885Mm1RTEnsZsDS1KZ8NhfrBmnWp9eDNaM7d1AKuiSNp9RoFcxKm4XJRm8LfNEXPKhqEd8Gd6sxordZNB2",
  "key4": "3c7G6FjJaHhDFDw6hEk2pysAr19kb6jjJcDHq3MAY9bqnpyXFvxegnKL3ndnc5MzvrZSTXxGP7RvSk4LMyTESXTj",
  "key5": "5njHA1vBaa3vbpfSBuMmbM1hLUTdrwgxhZcgWKPZVe6Y3UoiTm5CAFMqZnTrGUktjmCgdw4krf8TZBvYWNt4zza5",
  "key6": "3Up7fxSEtPg1Xfjx1ixescWjsApwuUi9V3wQMo7vi991DE59hjVrsm9yaX31hgV2L3JMm6av9upRbfTVfhX6yYv9",
  "key7": "4vR5JQjLVgcwrrYSx17DTXGb5ydoMc6QBPVQh4QgSyhcs4aJ6ej18yK5z71GgtENs7ZkjA6aHDpp5uTJ6bEHuoMb",
  "key8": "4TmkHagyeNSSWFNGkrB3SYu8swbtgN8GnHfHKScRoaua6XMrjkcCZSzKatsdWhHESYU1wNdayMkV7mNEukEFyAn8",
  "key9": "5ELsQBEkZ5rp3S6TTZMWgUFmfoRr5NsJN5W8s9mrskB42zk8NqCLDdofXjpG3h1qRxCWf6ygkjVoy3AkaanwKMSk",
  "key10": "23bKtdXEftAPdFfsxjDiJoFY4sqByEofg7Co4RHAUbHwg5XkUNcK3QQ5hQg9QF6gvVMtrJSbngdWQ8pHSX7aY3wP",
  "key11": "h9sGDcvKpyGwFbKTbLu1H1y1J8R2sPMiWZB44zNQt619pJzfKx8uknqR2HwLo73bWAYV5NSf3XDewkXF7eMW7HT",
  "key12": "rGcS9CCUtPdpELCbVhpshirefb4oWZwp7MHcWnYVeLUYCr9L9ePFw4shLWb1fPNHcJENAMJvgLswYRektayqX7v",
  "key13": "5BcH42nMbU3pY1CCQ7SBxjSQBwy4n4hns21ssg8JGxkBNKDoXapE7jQyFjJNxxZTZcQAJRxYLdn2rn7pRj7bpByp",
  "key14": "25k9u8EBqCBmB52dUueMPJjEhGNum2X48rFa6PYLenDnymb3vMvv9PTn6zo6tfxwaCJoBxJ3bzm3JmtKzaAtmCcs",
  "key15": "172ChAF5jgY8hmiK1DTK3BGSsgx68deqzKWhkYofeUWjS9naHKWr22Q7xzh1jEj8rBedQNFcj76Qv1pqnc151WE",
  "key16": "3uTom3BMy1zkEkm4SCVkxwP8A7z2E5ba7aM496dE7Xg7EZxQ5QasRoZTGd7PSLwp1att8fXcyA2eZeKzkXutcEFB",
  "key17": "2XxumBt4NwfwSjzkYq96c6KYskVrQYHKJatkSnsLb4ofdH1AX2sZb897vqd7Eo3oJg4ytaGLFw48DSifRLeCjB6t",
  "key18": "4yTzQRhdn4RW4XXa1ixL2PPA42r9bxc3ciAUbZi9AGtAjw3brqSbJGHAPbH1uZqaG2Z1xdRNcGpK29Qwyi9qoqUD",
  "key19": "3adJgpxnRLdBCsaPdNs9SsfnrkJjM8z1K4BZzNvSNUNhAxcSEc89Giqaznu5iyotnFeUbo8f72AQeY7ugaGa1EUX",
  "key20": "5nfyN6VWckmUa7UkguwqaDAeWpkUGhWG4PfR6HndmrNA7GQAx5ERe1NXCBLa5gYNZUdsKfe79hqjrNPApfR8k2qz",
  "key21": "27Ryj4e9snKkVGEuk9LVcfEz6piZCyfDJWfEngnk8DSmK6TmUYLjMpf5SMZZfTDU6SbRwnRQXs5jyasY1g49tz2H",
  "key22": "3sqn6WrhE5iXLDjYKotNf4dwGWcxm1V69opUUhL1Yt29qGNgPEeL4B2JP6wn7Lbs7o8FjzQtSCFo46avqw299aV2",
  "key23": "2pBfzbQHVBJfJgtZ45WDhVFXAb71xVNm3P7nHKC3ETrdNiUi28VmZbzc54CSE7KxSk1LPQA9iq5Z9qKbw4BaD7hB",
  "key24": "2YfjFbJkLRgqMWdPve4U66EyChceTgecJ4aEYD7P9NNtXmUdGmcyd3TieVT7cTMtR2ZbeQnwj3VCzucwvG2RxtYs",
  "key25": "3hn9oisSzHv2xaUxSAMbVFG2r1r5CXicgY2NHx62i83eivHVysYuH28pL2tdmbck6AEc1Ci64Y21K6vRJXbazy69",
  "key26": "Zd4yfCx9RUPQQVR6R55K8ovtY5DE5Vrmmuc35Z2bRZKpwbbpVsUqGhtxzE1qEFhnvxeweCBkNuCBXqS1WtJ4P9M",
  "key27": "4pGu8tDUx9SS9HmmbUpBcdy3onryfEHBZQ6oegPL3uvuCW5Jp2M5Bs9GJZL1gseDghbH2qnSW71Dfhn3pxUxfkJV",
  "key28": "2cRab9YY57f77DjGSaZGxXPgtkZTefhdY3kTTWoMXmk1JucVSJ4xkcyqQtr5dr3ws2rGA8CWVVCC3ZpD9Yuz4Ung",
  "key29": "BB8v3PmsP1qiq5uQzgujVU2rt7WS8DbZXkVhL6duJSiArSvZLX3nQYfQ5efrVdmzmTEoUwpurrENsMxbYag1NBx",
  "key30": "4MATF1hKEUvoBUtHXrxtnTfYTTdbW9YDwvzXHd8YYX6AWPpjF4CQJm2Wdju5aEjJjgKXeCA6yYHmsuivwsdCXr9d",
  "key31": "5rNCskgQFDqSQAXFDTJ6k2uTibxU2zgfzYCjeNmsvhNTmtKipfWKbmKp4MGy6vxv7N5YT6yDwNFDvhopCEgBHTnx",
  "key32": "e9Js7uLJMGGPuu6QGXv5XL32bVeWfjeTUVJh8dD9Kkr1FTAQbcbWySLyx1mwEVJUQXUsHTCYXBzDq2bUoaHoiKN",
  "key33": "5Pa7B8fiWa4e8eGXz5S6RLpZ2FeikBLassh6paWmZme2W3wXTrBsLB2CcQC1jkMChdRcbX3hLf5JKou3i5UcdXs8",
  "key34": "HdTYagqibqEnXeazSahBGHQYYwLUrUBcToB2bjU1vY6dP7GweMu44PLZyXHJHrq53QsHhDn26zVZxKoqnJHVseZ",
  "key35": "4W2PTjtcmWmmSDiJzufRaLnNKTnJ33BNEgv6wf5a78dcdxXT6PbLedk4ejY7XfQ3uzpyzX4TDHbCfwewE3dz416y",
  "key36": "5EgxPmVc2Poux79HH2VTdqP6oGJPcbbTRS6jnxx2vZkm8XPqU2gNc3VM4f7qAgo1meb5QaawWUwjL2Wg6TbYR82c"
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
