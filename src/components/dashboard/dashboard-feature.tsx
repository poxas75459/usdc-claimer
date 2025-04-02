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
    "4hR1SoKxTk5ZRPcAfet6wudfTwnZp9DyJwV2afKxMkMmzQMwxCi3i5ioAyJ3hPBeKaPtkFtx4RQJ3B62UUSQnvnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vs7CpccvreJWxNLdu9UENFmbQ8npQkaBTjVUwZXimUtvzcYoeeCaRSUxCZgFBrkTP3KNH8tzbSVXy141nfvamdp",
  "key1": "3PteTxSfHB8gTMwZSf2a6ibP6TEomCn9XMzwEmm2jhqh8AaTTucTYWLh5PWhwcCCzFTg7ic2N3mf6zDJxeGvNYf5",
  "key2": "2RSVLNB3LBuQS5KRG7TPis47Xya9M2xTVGRFCBf3rfGgUw9JEGqg8rBZtzPCTSykHSuPvE4oR1PGyzKyCK55yEv2",
  "key3": "5Nm86hJf6QG3K4qKmVGDz4rjQz3epZdmTZpjRZe9L199ouYcwTSHbM4z3k5kzpKtBCRF5rN8JpxBWySPMg6zdB8q",
  "key4": "5afyjsSdDZyALsBtoSuYG9HwtYCG13EubM8FzYtFEnmq4xKRgipvFnSqCsne5KyujKVAV5kiBfM6pm19N48DXPTy",
  "key5": "FVq2seMt1ERD5xXi8pLhywxTt6NGbmiXSXJ9A7GoXuofbLCB9xgEaRpYM6njvKHYpQ4Qu5jLKdPmwya8je7s2Wb",
  "key6": "3TcXKRBZWtTipv7JjyCuVBm4SybrxoZ1H2K8HZS56GdPQ8rQ5mxBQYpZrn2bhhwY6FuB6vnt6juXzKTCaCiXdxwJ",
  "key7": "mBGNqZeUsxdgzpA3gDKgrLx2fnvjGXbZMTn9FVhyGjfbssv4f46yumbnRBVnSYFQCztPjoKj6ezvbtsMjQ2rgvr",
  "key8": "5eAmezLCs5ww2W99NiPSAVQueuAW13PmhAFLubDai2WUeCKSwS3VKr79dy5J7cNtbaEuqvLPLZSymRYhyhwky9MT",
  "key9": "3kw3YFD7AQVPmpXFmX6DtbirdLHHTSXE54WVDjWJHBb66et5ZUSzr9uvcpMGfb1xd1V95Xgv8y7zbWbVBKXuCpoZ",
  "key10": "NkdqEDkAaDzApnHRSGeye3Q6v6Uu95qstLDHKaxTgCv3YTdNwSJ5AUkttzJdxq9Sf6EThjWyPWzh1LNgazHrJwj",
  "key11": "2MAK3cvi9rbv7fK8ZtnGM5BD5NpENpXAbi2RGVgJVi8e4sJNHNdAGi3Yraf5Cn7D38CSxSFEJC9ybv2Y3zgFFQoW",
  "key12": "2EFULirZ2ZeqPHFRr5jxQPLQzcDDmd4rukAYPBaeGSUoGpZNedRdo7u4oxZoq3Vwt7LdGkqRboSdQwrGJj5LA3Ha",
  "key13": "Jayy46UEfbrLEkiN5nmM7x41niK4W5qUmWXBSH7Bez37qKeLNuBpMyeg3KP4JzFZHrq6bQJA2C7HDxydZHAbqVJ",
  "key14": "4us7ob7JWiDkWY5wPVEFhDPN7SafaSmXQqYus6kAZ8GzkK3CnAEcwkFCmaWyWFGRZopnQFp7aqTbGxGLEYMdqUgW",
  "key15": "CkH1NiJup3ga9coGsw64MR3LMSB8UtcbeCRxVmo2jk7nySpP1Fwk66mzjC9k1SLwYAayucM68eBRVEdKcinYMwW",
  "key16": "3hof5pGUL2rzUbgJsbCUU9ybRTeaPAVvjp8QoKy2J8xmKqnTGWUZbDW3zAMu4j7CxDB8aWwZXNpbQvHzp4GiVGp3",
  "key17": "c41pnt3pCPusdQSKXZD5CX6TJvh4BQ3yZc5nzDRoj1jrKBUcsHG8kTUGc5UV7GNqYEyCTWPNXbYDzxk6xPrRBFx",
  "key18": "3Mnxk9qHkuLr9QiVKTdVh15UXABcSZbdH4zGz1uaGY1q8m3hvM2w2Fb49sBXAbj71Wpjyjzh3thguuMzT6P48Rgu",
  "key19": "2ngNRKbaPJwAPqdZMDfcZwPppHcqL45zGUUz27XsYrsnGUjGrpXhURLcLrDrLuVx4Zvr5RyvpAyGrFab1UL4FCCz",
  "key20": "66PJwBRds3Dak1UAfsTATrHese2UPV2ticNGyYn2r6xLxTZBRWqfmtMUrW5a4gcDs7Y8byJ4NnYChVXhwFTAuJLe",
  "key21": "2Ku1pu2xByz1qwjQdReZxxVsjp7uUaLefYEjV1SKtw9NRGRnUPRt4Fj7iD1V5UghgWgDNsDm4876bgU5Kjn7Wp9U",
  "key22": "5gYAyb4mXDyAa6dah2zv59qNLxWQNk7d8hH7qzEX3oxk4FcpPqaU5KqxAuduEsz8ap7vLdNLRNnQSXx3oBv6m5ur",
  "key23": "64HXEXJDbgfpJRXTCzhvvaNNc37AGU2RgpeZLAfakcQgji1bo61w3ZeLNwGiNAUGAGTtUf2De79XwtraTqCi7isu",
  "key24": "3g6PiFJicvFz3k5ACfRy6MZ1eCUnnKoxXBHPp2o43MpM77qAnfRGpTBaoTGnvLHFZ1gZw3JkZPEBFcYEak3tmAHW",
  "key25": "vi473r5pH8DTjtN2cmaRF8ddrvjy3RphAu7zP9fBmM3SVTnEW9kCxrcJv9djmBEVd241uGoDNRSdtw6MvWzBx5V",
  "key26": "3U8QvLFdcyBMpKCgJtP986EwTnBvZ8LG17nX4Eemq3feNBKLKDQG2DtREEez1fjGXsna2vmemq3BqtcCG94mtL1s",
  "key27": "3HaNdFmQkSTX91ovcMe3pBXYtnhg9WEE8ALwfXpttqabLAVYCacMynxU6vxgdXGWu2o36JKaoNabrYopM3zCQSDd",
  "key28": "37gqR47S8sQiSgJ1ncAcpCMEsPA8tifTctsbnQU8MdBdLYbf9qYRPLpmbU8pxnGMf9yor685UjiJ26Y6sZ5mLGwr",
  "key29": "5fvSfBnb2ksEgobpzDL95zMEVupkEoq3CBwvsBqzEW6vmXfkL7otdhAHgQkLra4CxnzKN6x3rp3vHzN4EhFZypgC",
  "key30": "bML1HQ2gYhRxaML6GquGPZbrWXpYLTu6wNuZwdmDhaf88weQuAgPWSTPd55kWbNMPL6k2kpa73kSFrFjzDLkbEA"
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
