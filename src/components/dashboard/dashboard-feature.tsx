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
    "3t96AoES89gtFHx1tpYu97rvbpaNNCmf6HQCeaALnxVkozYJiw8ednMiYpm8Hp4PhN4MyGnDe5fbMeVJqutkJc5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mjf7QY3NqYswHdEuGWSxna4BqEykVCM51zV13TjwKsmgU9z781stg4fJPQXNBAXWeqRcQW5z1BPt7KEATVCjFVt",
  "key1": "Qvw46LusZr3rRnjLJ6Rxgg9UifhDW7vVD3yQwASWuPyg3c63Bp23L6ZomRWWbi1dqQuhtQZHQNohhnvKePxMhc8",
  "key2": "4f5PQiiPeFaLLL96Wex4oNiaWWDqcS5EgNZ9Hm9WZzsgR5ktcEmRAZQ6c8gg26bPKnStXzM9GmCSce4e2tbgr4pR",
  "key3": "5qDwmv4AWcmT8VLPbsum2J5hNKNPrbtDUWcNDWRLwVyrHrMtZvAF6SJng621yN8iq56BVoTM6NCJ44JVurWos1cd",
  "key4": "dGRoJNVJFmrxVTD6mmeksTXWfJQV9mzJLLYLK3zdVHT4RQpBHnRjBEKDsJdq88NUo3BogN7gYqidk7RNGY3XaLY",
  "key5": "5JGTCATcQRD8DWoFvA8Js7Fy5ZEPnbaKER2rk4p4BKEcCzUUPSmu2u2Y7LHBTL1Ms5uUUWUQapTRCV2ANxDEKYEq",
  "key6": "3iVEQQAxFkbxyLSDHHEEJb2TtGisBkg6dChWoQzgnnf16qUa7w3nmQPafQ9N8pAwj4Hud2dpdUN8oKTbUXgiTW2i",
  "key7": "3WzRo2D7DG5tvooYCeDJgK1GBAUTr2SHyS59NYctntRJp1wsM2oxeq7QfpsVtP3HULSsuX8dJMUrM7RUKY33eCSj",
  "key8": "5Xs11HkHsjaj9qeo7a9xJdMHC47SyHRYEmeNS837WvN9fDmvuKNA4DVLVLjgMeZGptXCiDvZViBGWwSsm686oBsp",
  "key9": "YdgcadGjfj6w6yCP2ZB3YK7vs4fYiRUHLyqQ3pjocuq7R5cWEUva9uxv68kRM3cnLGnrwZVPVCjAz2jdEam7N99",
  "key10": "2XEyn2D4p76o4GGmv89jutXWf532mPCEbfw2Ed7nu7HoHQrm7vzGMLRLuz9nf84ncDD2s217PhUtwEukhjaigCJF",
  "key11": "513NJokzpUe6Td1xtpLwBm9i8TqMRjFQk318xDZAYiymoTggixzZF9tzmjhxuyuopqTUN7o5mVrHjZBC9bKairVD",
  "key12": "5ogwhZptJCQ3uypJcR56kxZJYpvFHwv4WiUtQ7oAJrNpwGYTZnwk3hjH6vzj8Y74Ukk8JPoLrhvRrsf2piXtUT3Y",
  "key13": "38Mn8vTM8AZGHzSiAwWpodkXHVhjqXxavUFRRTgkjrtcKXSZsMxjFsiZz7Q9uYdNGb5xjw5AmJmGmWgsfyn2sAv5",
  "key14": "36eRpUsEHBnftTUcRPyrj8z8MNSJbwNWBboHDnBs72efv86GFJ98jav1xNR8df71Mhderr7GDVDdddLg3UwMsBPj",
  "key15": "4JiMYoxt9eQBXJooq9QF7C4tCTKVv4J7ZF268sZ545zWrn5VWbCuHU4hxcAZLfv1ctbZoV5gP8jEkz3pNrsH6coN",
  "key16": "3XAjbmZbS4ZoowQ3dpw33NssVVn5KQxfs6GUShbhs6WTsEjiaVqmQ2zD4UgHiVvB5yfrtSy4j32cP6hqkeavLu3b",
  "key17": "4ZEW1RccYNFLgAjDgT9d2DnNewPbii2NgmwDHuTbYez9athoR38xyxbs8a4eSxScUzDL2o1v1EbVy7k7QurPwsQm",
  "key18": "2rJVjYSEZuAVNwu5j6HAbit6s57N8vaGhnAufVhR9cbAwXABonKkYUUv1NKxRAgjHtPb24tEhX5P91QR57XFjcoQ",
  "key19": "dRxgxUSXXgyARnAUhnTp1ZL4wX27BxJ1o67t1djMFodjewobkFTGHRyVukjjk6hLbV5FFjYAHDtbHFWrfa26oLp",
  "key20": "5JFwSGKAu6kKhJovaNTyqq4K74LauZTswGKmDEs4L5U5rMSdrDFqP88cTQTsbM36girUikz2cuEvMJfC3SQMtu5c",
  "key21": "4Df2qmXHH8AGX4KbXwp6VPGA1cJs6QQswqyYNn3yMTRkMX4xnySoSZzUmMXMYu1BsLYKkyvNuaFoA8kcKpiW8jTb",
  "key22": "3CQ6bJLeDrsfsfmS2LRTtJzi62jUBBJJ7xYsxCmqQzEbbkBmLMDhq2y7X3fSa8ArajgSjARtXh3ypX7U1FRrSXZu",
  "key23": "4syJKJDqD1Ci1bTpenJMDDsqL9G4ymFxefpZJfAkKXPYUHitNVZpmcBf57RNJDt1Ktd6gV29HssarK9shMoZbeL9",
  "key24": "2jgyUSkEksChtYNhxkJh1dc7cxm5K2gQYRm6mdYXagbV6ygXFkSn8BwModDQqdMfmmcx99qdyUorUwU5eaCSb68F",
  "key25": "4ZbSPiq37cAvvw16cQDYe6bJkiqrNXG5HGFhs6dJfNUrPDfnZVEADPLPzzVGUaJ3J7CRk57rivDGNnH21fEmUe28",
  "key26": "42uLf3WrNmNGyhuzQdekfJA7kHXoqCh7MQrw9sbMAXJVpypGFtSVmMWgcSWCZzJJbdeHxfh22DuD5vYaQB5PXDsM",
  "key27": "4YQhukhU7iLQF6siMHqPTYBzxiEFcisb5r1FuFhbh2PJsBh2QsrHgJNPG6YSjCzbBspUmC5ZmQgkrZJHHzK5yD2E",
  "key28": "5kZkrMjn1jXAn6AgnuVWVUWSZZHJTmRjCg3V2dgR215joTgLL7qxxe8p14dEexCsC8RPQKqCnvn6yCtrNLwe92RD",
  "key29": "61oiPjWHXQUbZ2AWneVyULNgNpwKxe1QNNq2WznB1boGubjakqsRS4Z9BhuYkEgcqVXLTs6thwBtCXWHvqxK7ais",
  "key30": "4pzXEmNnHLQsAQSPKQ6H4hzf9PFHBV4WYE79iYyhjm1dBRZJMpNmMSVykFidTB3Yxv7yDz9p7Lzfwb34CoFqL8jL",
  "key31": "5mQ8Yf96kdyKtZz68hTVH5dzDg6sjE2WvnZYnXh6pD9WemLgaXLFxDqFskhBftAQaydE1C3WUdpzQ1mdMsRnrJk5"
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
