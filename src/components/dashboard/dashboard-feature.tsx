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
    "48caoTRjtYtsLBrDDQuVBajJa9H1sMG868f8KsWcZTaj8yCKzkUDVw9ajddMpFRYuNrsLBgbXKz4iSfctumqBjMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sqAh9itQbKPYyptCjPry3b1h5s13jshJeHJmS7n5WQcqQepSN8NufYaqQDuB8KF9SCeHoWkYcWLmdtKoKwnHuCG",
  "key1": "gSVHWyKzjxGetE4gHAr98FPnknAJ8GP6Y69WC6djsgA8WE3AKypP3KWVYmJzRYrJURJpfYakZ9phGT4ySx6rxfS",
  "key2": "4zkFRhDmtMjZsUwYg5hhETbDt2L4R3j26AfXazQvTqcbLH5GLmgJgpCSFMJHvDufcbjEeGFvFW1BxkZJMKGJqXQq",
  "key3": "4Tp6iPoymbBuuweGtvV6W1uLnRTGhbp1oirEAAL2YrtX6x1ZEVirTpFTFbcdhX7HmQFVFXvfmDdauKfLT6ouZgMG",
  "key4": "3LcAV8MsQzXnukNAYKbUT3PZXAQBmk9ZaiJy65u7SCkSawhjKztQ5pZv1bQenLNDNY3bRGpFZQ9gGgRrbqQT4RVJ",
  "key5": "3YdkyXwkjDjbzwDi1vFx9i6uCsY7ziTJLGRnQwHMGkfK5tVq7RfTBFsvr36YtJ7FbkWU8Qkd4CvJaTyLw8ap3zMz",
  "key6": "2TzB8W2VM9oyAytE8fFSVedcfyc4Bj8w67jdk5RJPULJ3pcRt261dTkN2jUwawpdpUkPBXA6VTyHPMZYKVLh6JKx",
  "key7": "4PrWvMVnwaQ7c2HmPUQzTjXWWnLASV1iobkiM95vUerVFw7mmEszgg1Wwn3syknJP8yFu6aEriaC5j5UEPUMK1b8",
  "key8": "4hiGpQyGv1KxyMv9tMkt7AezaJ1cqxdDp9SbwtXbG4P9UyucerYyiBm2HACRRkW7jHjZZTnKbXzg1UPcBsxNhzfW",
  "key9": "5thJS5CtJwgr4YQ8FY4eZuUy1RpbKSQTWCqC8s6HJiNKyAjdGT5zk6kj5FZtNqpBbN8k1ugRLHyc6EwsyEaS1h6w",
  "key10": "3FTYuyeapdnS1m9LG2JfQf2NLzmHtnLekRjRy9P3RDvGZ19WMLbhfRZWeGUr9AYBnvsSnX4C89DdcKBHrHNmABaD",
  "key11": "vLz3xZU4NBLqByDjtgUPVT5uNs31LvFRU6SuTDmN7ikdqPnLiTWChd18fAuXMBRCrKe4uv6DAqp3P1ibYhDsden",
  "key12": "3DtrWugfy3ZNzN1x1NQ7NXMPtGP3q8F3UQ7nq6Yy3BJJV4B6voDwiGFBWe5JVHHegxi7rzU7NwuS4SfQERSsxvgP",
  "key13": "5Wfoivck8X7ey9Giy4qEfWDd85bA1fzxoc3Ad6DU1bUsPXZDUaxyKVdGiVd3WFtTWw7W7fKdUvugtxEsRUEdHuuA",
  "key14": "5oG7RKisxqYyyVZPfxM8Yt7dhZ4AFAcHCLuSdvd9xEBtvxscsFQfo6NwS93q6HDxydF1iWS57pUTcq9XAM5pweCp",
  "key15": "4WkvAVTqj9nfXVgMZLpxFRuQkRNyy31WRsrR6CiEaBk92UA6qD2V6TzbbZefy43YmxkVAKZ2oveo31Pbf1vv69Qn",
  "key16": "3VQYqqjNctX5dySSB14T4wQUx28U5kqjGhFuL79J8z27HWL13ZdqtMkq5zQfWxZpgsekknCEeyXUWumTFfiP71zM",
  "key17": "3scC32oYadzzScNeQfVvJBwhLJf7TyzTS4BLsgFhjXHLrRfhFfHq3g9SyeLX3pgYXGeCCmWJjphJ4haXRb8Hebke",
  "key18": "5oBtJEAeCeJkgHmkyyGRUdAgAgjQPjUS25AhLjk7vNFUTLJKK8vWdDph59hXtEmpydug7DZGsLYRokJ8gDZiReja",
  "key19": "65jK7K25zfvq4dRJEnHckUYHncizDdxFEpaXKwy5SEtS35M32MBp2xq3gZ392PCUB4D7EWFREcwKGjz4RH5AZoaG",
  "key20": "5g6mPbuyLhW39yyZ9bmDhnyn56emEWbjfroS83r5v44qiKWFeWfcpWUqp71uqBLztqAnko3Hu3twGpjQP6SbqXjE",
  "key21": "4x94vjwAXh1EwqVHrDhUcC1Yxe8FESXoiApgp6E7E94ckQfbDHyBVKn2SEZ7dE47UEEe6GTYvg1ZPCzfBX7D6yyz",
  "key22": "4aE1nB7yADx62ZgfJ4iqigBN8MEKnJ2QhhbmBvdLf5WnRJdezozPWSFwrzEboTEbhaiAANyW1PEKrteRe3icMkRC",
  "key23": "5FR7kKFUmGtHkbdm9zLBqpb5m5ro4D3MXrJ2M8UHSZzmRmRiaJqUF2YYwWVquQVRGMPVXhwRSi3EfQq7MduBvfyT",
  "key24": "3gtNBNikpVArgRSPVnZvCJ6QUEAF9ursR5SW54ujscQ8YXSwrmVVyPEfMMtMNRYKHgqTc6P4D9wQmgZZ4pvDxVrn",
  "key25": "4hLTZctv6eUYHe66C57mFB32XAKMibkKo5V9bwMx3YZfo1EedjNNanrCMxU25KrT5YvBdmNF5c6gLXp5DyH6x1if",
  "key26": "3dtK9HsFDVkPTdoFMdNfTuiDgQ86y9aG9AFsp8RbYGfHuLRPiXq14zzEcyzsmJDnRcgMbLN6ZKP57qiSNyKr36cY",
  "key27": "482r85XV5gzERLyCSRsYaANGfpfkGGa8MShKnHodeu9cYdD1YGcMxpj5gZCkYPRiVoY51PdBUbJeBzmME4SBPaW6",
  "key28": "B1Z7NNKMcbJNxpBBBSLv7AqX6CbwBtbHubBKACZKBFDCRkA2TnCctXe7fHmuRBHMC5JmzrespMEqgZX2K5qTf3m"
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
