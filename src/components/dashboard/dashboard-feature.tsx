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
    "3PNEtjm4HLZDS9mqpmtbb4x1gfRPnnzmuXXs1Mm9xHUGhHzJat8VnnAmQ5vyc5UJzspnDhy44nCxzz2jyGRTartd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NfUaqfV4MgSFhQc7oz679XHYsw18UgJvZhuU1j7jG27JSCyxV2Pt8Vf46ACFSXaSx3k8zDjfGH4RyiMFAQCZgQ5",
  "key1": "4swSDGWt8dKYBb8PrcAAH3VGTvXwJoBv33gWbow4dST4Qu9kuc8Tmju3RARvFVR1UETHu6GqRtjyhxm5kwrUHxKd",
  "key2": "5pTT3hwLyWkcqZ1exXtRJPFoM3RvV9zU55RUC1Axoqkufa4iTU3529HctxtXcKW4ff7ahZ6awEyfQa6E8G6BmKAr",
  "key3": "3hkeW4kweGxPPE8B6eky4MbMW5mcfRXBZQKQQ9YfoUkoQaJszUnUDDD8GTMNZH6BxzbMtR756aswgACohytQuTXi",
  "key4": "5nDufTsqm6NSvw5saYsbVZLs1ybMpJHjQHwfwdZc9EPNpmi7qV9K5BqaCHJX3Rdjurh8ELxzjPrMKUY4Lygd8SU4",
  "key5": "o36EMMv4XvRjwXEhRrYHRsLkeYNDStNcEmtKk8otFMZTFGoHHo2rzYMk3KWQHsn4CeTjTRhm5WaNs9AT5DRg49c",
  "key6": "2c1vLg3Df8PfFw3HM9uAF5MfdLHpeGcf4yH4wieDYW85aSEZuNTziPMmoYPLqR53UE6QXLELCGitYTpBNJBV9Td5",
  "key7": "26q719UTMddQLWvGZQCsqVdLhEZB4KrHYizwZjaJDBPdSRFVDSus85Re9izSKNRKcFiZmjZ4S7tPF9XyC1xFK4w2",
  "key8": "2FC97eTFhwFvqsA2zD3zUc1TtGe2go5pAvKm7viiBsbXzok1XnwQSsecd3CisA9psAnxtZYHzmcZJFUfhQJEvGCk",
  "key9": "3b57Mds4yheaiUzN5RmEb85KdvqVevBSmJkzmiuB5cZaSxk88Fmvp9nzVAvoqCPx9116Qwn6FCNvGwc3mujKHeW1",
  "key10": "5G3icZAedPK29JQhjYDNqoHbTJeE4r9eREFCdo14JkUQuUNJkCdGzhs6iKPNKLkSeEy8jMpoPC3G9SpJZskk2zQv",
  "key11": "UFPkzeLiGisYxuwSKALAbZx7yjZysxHbhYtD5jLqQCe975TirD5aBEGfgQJVoAP7LukskEVcL8xKTKwRYmRTs3T",
  "key12": "3TCd8Z8T8FmtPARdb82Jn9MJMsdRuMzWdcbVba8V9B3CE6LkmS7eCuRhAf5875HdqpLqnUBK72o3E9NFtpaXrwSn",
  "key13": "3xTvMaijj24vmYu2AFoGkzBHhHgwsozcWd5QWpGgU6xxpACSTTkJDUx62wkt7Nwm2feS1cK2Ggx2Ns3Wgvje1CA",
  "key14": "3RBRZtRVPnkjUBQLVDpDfBXXBGgtNYx1QFV7Mj7KXS9gYQB8a7RFUoGK8kgHp2Qd7V5MNTzqheRFzYMRz7WiRpdX",
  "key15": "49qxTqcrTnUxCMJwsBy6YNMMaw8wBE7aA8eNRWEZws7WAAZqUCburvHjiELAMe452QriUpJYs2JwYC9wBfm4z9r7",
  "key16": "3MHLhEth9c4p6nG4LbSWDsQmCBtrAAuJ7Ukyi1CeAdetqvFaihRu9gMR7MNMogs3BymahKwh19wSpptTrgYPqw2j",
  "key17": "2tC2T1p6RHaTFokekUGR7jXiazPK9iF5UB8Tavc9yDKacNVk528gQmJhDF24j6EiYRBq4FKmczExDG5tT5mNVbXA",
  "key18": "m2fsmsBTJnmL6B4XXs5nwBcEZwaAgKmjpudZz5BUZeuGeg2pEHNgf36cMfa7J7p2Y7t1dKF2X9YHUsSXhBezira",
  "key19": "5uddaZ5EiBsNy5fe9o3jJzpniRwkrXwaM5Lv1maLygj6EvmZCntSEWwJmf6N7qxGRtREDECxYak4CyKypUK5CAPe",
  "key20": "4sC8yrDwFkMzmTeYMr9pToAehGChLtRy1Ms1BTgZq4F9QLEKHck9JLzkftK2rqMEbqav7JLPfDfMhwXm9Jb2pZ1K",
  "key21": "5NqSNYynTzx7wFFeX53PJwe2iS7GD2yVbX8q3JBAiedonQjTjNYhURSmHqhM9hYHD9AQi29188Q3fbmePMY7medP",
  "key22": "5JqutA7hXSPmKrbwTHjoA5BGMWoaqkzFTnXcG8qFhpRFUANY2DZr5DHrt7z7iWd1fkH1jFoJybxzxDYa66eZVMhH",
  "key23": "5fMqmPzPRz3xv7ELFMKDZj58gkxZeT4rpEcvXxMUiT7hNrBWziewGjEhf91PJshZNwDgMxjYrarWwNZdUSvDT1Cf",
  "key24": "4Z8CPEoiMjKdSXwgH1bzrkid9iXFXwkrnxomKLHHo34M9ddLPrhcme92pPybsza8TYnKABMSW36e1AzpfJnC1Do2",
  "key25": "uDLYtimZGUU5Mx4EXi716dGWRKv77diHtHJghPiUm4jaknD3R6xWFgCxLTYTZZsbKX4ybu54wMm57QBFPKmWm9s",
  "key26": "4FHz8r8KTbi3UFRrJMbV8txKG72mdW3RPZuhXuUBQrudpdsSvN6gLhkS56NmnJm8q7ebuFPiSK6RDPNhroDLu9zF",
  "key27": "4xkMuL81izvs4kZCeM6tREVvpVBLi5V3tjMJ4YpkW9FG5DXocrgtrfzXS6G9APxSPR5P7nJk4oRD9WtaeaypEvkL",
  "key28": "2m2HnGrer4VVH5pVEeqUJMUYLXVCAyamNGYYPKtRkYGYTRiHQvnJbk64tKfJWURHfR5nfVaKbCCeScroxUfWdPrv",
  "key29": "2pdBVXbHuMni2r3eZZWvhECsSvyD9jit9HX48yn7ZKnR13HeQ9y6t2wr9GXwy7gMW6StcHjv1XC7J5oshFcDYVvr",
  "key30": "tLtJJi2qimPkP6tkwT43Vw8E9iqvHmjPacgKJdTVZQQZCnegncEZSq5zMKxEunUsbmihttkisuNsbi9gtPZM1N9",
  "key31": "JUSUmmesqaA3rDEMZeMTGhX3Z2BF43hAidzmkBoPsutoNhtCqQCFGA7tMM2xhUqFZREHjszQnccLfZof8C8J41F"
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
