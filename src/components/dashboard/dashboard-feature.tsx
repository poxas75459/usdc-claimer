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
    "2569giBKiniWc7jUj4y6zb3wzXeYV8zaotMpfQrh1Dk8HidjZRPW1yMvPnAF4PbmhA7KRdTXzqjKVy7q3MgNGpPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s8xagXmh6PrdshP2gpEvUibGKWSNj6dn9k7XNDJ7sU1DJfwdDAgephqd6w6bjPiTsVKm5jaSsE3EFSQqAnGv69P",
  "key1": "5QiuGDztTEYgu16VcEk7LBX4EnuT6czK7m6NHgrZB1jpbJ5aBww7HYEucGSXbCqjNChMmEWe4jKJEoGi63JtpM1e",
  "key2": "5JCTdF6HXFgdHTSgEBLzu7GcYR7CaDXNnm22FKjshvKAT8Xidgrk44kEt7nEz1kBPymChVFhxTkW2SwvsM8Gm7oY",
  "key3": "2K1CMejfqfZcrbvAMcbvS9HvpHpkfaJwUcyHSCjmhbWoP5MbCLdiUKr6QDLYXLVMZBMPUT9ik7EBxk13SUr2GvMJ",
  "key4": "L3jF16x8qG6gxoPSWASFRpsiDEtj1UdREGC4VzdrrgPVctAbxmYtBRmtsrzQybSWdr67Qu9Ud3HtpGqAchr7uw6",
  "key5": "CQJKnNrZcjnrGtmjviTvPSp53mvdMkVq1KcMzRNpbijZk7W4USiE8DvHc1ubYLDiNLZ9ypWqSBzhsRGVpKRFSDg",
  "key6": "f2W5iz8xrSDURg8ViftAPC7WrikRNRtfXTD53fdUM8TgveEzAs3zFfdCc8btUTTmR93LbtdgzioxK7k8sosQDz8",
  "key7": "52TCQV1Cj6dErUTpCu87UiS27gxf4GumrPKRQCb927Zfm56VacNqyYfE5j2RMi2R3v6CSfyRgyKdjFNJ5zjfxEBR",
  "key8": "4Tht4ymyEE7HguQGSj15ywDwwQgU1QLtqwTBmWULbaG7hh7qKWT4XNsmVfW1YVYDAZ6aGa6B2vyxgp8YgtieyHv7",
  "key9": "2pmkuTpjXyqmZXJSpCg3dHFi34Tj28wgLmBwvzhBCJpqU5oBdMzQNbvwBSTekYXDQbkjeWpR6KY8PDnj8LHj3mAY",
  "key10": "3zyXMkJwG3MJvTCs4Qwy7et58f4LfrgiyGuhb8Yu4UbrB2jLfk2F8aaSZmAVGKkVaK2fNNGeX12EWA4uBjArJAH7",
  "key11": "aPyLK6fyAFrd5PYtSBXiKYKQX3EJRtkJD3QRYzYmuLoWfxMvBsR7HmrgpGC6SdnN8kC2JxjE3EA5MeZhJFRRk7A",
  "key12": "42tMuVWfZrKuhCUxR8kDk2HXjVxzTyqvwYvaxB6gemCLgkhS3793kQnnRkxUinFJ7b6KG6hbSV9ZEcMkLcrVhmC",
  "key13": "5tse6qgpj5aHxLDNfADXayD5BVKZ6GRH1JGZ5Gd6FWD2whRBnedLSxCx3zCdc3ghnYZHrARWLs5j3fbVfjM946Ld",
  "key14": "9k8taBSWECeX6BJUQ8owYC7phAKiNrpUrGqHzG8CUpBE7zznfCJNFmC7MQ9cThAmiA6vB5ikuseaQNhvzMa7HU8",
  "key15": "2eU4kr84wMSXr19sRGrA9g7fseEXYJtAZQ7H1AQcfwXNjrifnt14KwT1YdKQn35MExh6Sf4EVJ48Bkxe7dtcddwt",
  "key16": "2xuX8NKxE7JuV59UQsVZPW3KTMhbh8c6q4fgvCpKQ4Z8hmPns5xgCjjHuMFGNVH6bzCk9T38rADsADXS8r9WY4Kn",
  "key17": "2NQHLhVUECCSUUB8RvF2xK9uQWahTLHay41EJwkVHLhsjgABisGHPeUfVYsov4neP73DYnDeGkUL3uZcterehPoi",
  "key18": "5q3FFpWmehJfajvwHqT1Wo1rUeZTHbrcaUzE1JusnZm1ZcVYaJ4Gyk64f9t6FEzPASEmPeb9TbZfjjZoRc9JqCHh",
  "key19": "4FEqnBvRSKvknfAWX6QtcdgpVeJYoNr6L1TLSsan9pg4nf8QWgEnSJBJ9SJCjsR4vTF7BQGR2pL7tASAYsW5XjiE",
  "key20": "3SQHHWKUJdAPmMo8hgpf9xNA9nPP9ptCWKgPUBdRNydv7EgWJYKd57EC6N4JybHQZLpok7JHqBbB9B8kF3gYfjK1",
  "key21": "42jMywwbRoQsVKwrisJUtDJoCfRwySzXLbiwiUbss2AfpibaxL1ZyQxaiAC8dBeLS1wuB2FctKVvdmVY1wwADMoC",
  "key22": "5ui4uVXyHUEUtY4Rag3FipU1PeWpXbMAB2qgXLwUdpZUAdqTRZEQh7gaS8Qro2MXeBhcFGETwTPTYX1rSB4FPRxX",
  "key23": "499yi5BiF6unt3oF5vrYzkgT8rbSNAxU8BTc74eigAak3ENzuDewXJb63mTyFVMVCXY7jKWtPz9ZFYeQ76xchPb9",
  "key24": "mWU3w1ZYuAc8TSDS4KVgz8pvsehd39C9vNAaXCWShuDAVYjyr4WofW8zVcqsM7SwVRM9hEmv45Pp6xB2PFAR2ya",
  "key25": "2kzzCkhxdMUyyxsTCQFNbfK7tJtj5gUTr9sbmYRigQZSD9tFbw7ddt5PZT9po4L3pNP98kH8Q2EXjZCRYAvuuUmn",
  "key26": "41poB9Mbc7EuvTajabsz2NYgNf1YkJsgCqCxRjgokpcVDSPW6QobePzgmY5q2LefWDAdfCmhKxhaFA99562qGmux"
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
