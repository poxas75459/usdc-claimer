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
    "4dHX44xWyvgy8XkMLNg6LiTPjvfEYW2R8SUDk4TXUUsUo3VvDyGw1qAdbihMha6jKDNrzeWqxb7UPucCK1oLAVgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "666JpMHdEzHBLa4bdENvv6DMKZeeM9QSce1pQwjhcjqP5BqLhQK5SsSb5KQfZPfyCjS4RtuPfgsjUC5tQDNeSFKX",
  "key1": "5Hn1Y5CyfeNKfUVGj6Jfm73xm4YB7KXaqvk2hAcY9rLE8vVXWxkGRFyF486jqCk5dRgHU3kJVPxCx7zRHaFHybu",
  "key2": "46EXe23sVLG8Zhg2oWpN1nNxrKndwDHKrdDabJ7kS2MQicch2TW7Ahdmr1DgjS4ePBjNDvbJ6TXye3Cx882VbBWn",
  "key3": "5m2hfPNzmMXS5QWJrTYDt8wZDdY3iXW43fBij6jYPWNxLd7TBKGNFTUG7MzscFUAAHytJfvfJhADUWonrzCsQwVa",
  "key4": "5C343FqRdSZErFSLQusYx3zGbEutLTB93sBFr4aij1cnGTYCJTTCNFHAAFNPC1zaUc2bLMeALW49r7gPt2QJFT8A",
  "key5": "oYYDyYBcWQhTXTBMebW8HDUQ4b59nDDq81JiAeveXg2jm9jVKp6Drkiemz7tpdwUWp5QKwStVEQ7L6WKueKqrvg",
  "key6": "9uCgNQRCWsu9P2ca4wJFwp6UUupaiV51WbTRdHzTwmjFoyaEQQpnttmd4dBSXPDoE3ne6pGaGsbPK6ujQfW82rh",
  "key7": "3ZRBgK1vuqQ11Lubxg4XvsPDGzMyyC7EoCZG1AmpZsdfAeLuASVc6dCA2hMEDusanibsp6NJjRFy8porZ4EXznbo",
  "key8": "63Gevg7caAD3FLuqg2ZZbBDQBq5McxrB8gCJN4E7bYvT6M5aZAeLJQy1JjKFfAjRbmtMDTv167dncrgPR4Ptaxst",
  "key9": "5gdk9b9bAwHmC8Hcz17aFv3z4gCjhPxYGJKTZeugFcwT73AwJmatnvjt7krSb1iW9KDo5QiNJvZEHPep39S9tG1W",
  "key10": "3rQpr8qnGprPqsLFyHuq1QfdcE9JfB6WZ7URVUjtsG4sMtWz9oUbAtPy7RXfCrfbESQUcDNc5bjStp9BUbmueYDA",
  "key11": "4WTyP4qC53aLB33rV6k4Caa7wP866p4CGioG6j5yYaUjVdGYcecBoweS4NURQSJSjZZjaFdsrpUtUJWxmyYpqWT6",
  "key12": "3YuzgdUbjMiVr9R3DpAtqB4v64woQYkqHVgUTZcM62iKWnsgkPrs5D4QMYSXuY19tzE1rfNRB5Fddr7drfp8AcEc",
  "key13": "4A7Y6brwakxozik9nLDuCRVoAcUKirFBpwjstTuCSu3vRtJEUF2jfs3fpHMs79eGhLjxCMPw7Y9XuyzTHksMw1AR",
  "key14": "jYS87C2m4B5A6CENURUzQaAosUCRNuckepmv9dYLbL9fcTWgr2e2iWhPwbqDg3v7ett8WAew9wVn1nPLiMmjfkv",
  "key15": "2wsp1eEyguaTrPbqSEuKQp7KJDoXBYq9TRHzUQKD959b5J9XY2edATzxUkXm1TLyy86AunBVCRiSM5sXg7ZVAKRB",
  "key16": "291iqwXN65XQrZ2CHwjmVQK5jfsAq7d5Q14GRWD8jocPkVCeh3MLAuaMfDhG8dPDU2rCLfLrvQp3yAtspQZ6rZJK",
  "key17": "33XxKp3EB8QTbZzaZrdxjgFWWEfT6TYNfzJVGfNybZoLDPCXHLtd26jTBgfsNpkEVxz3kpjYjSJRYcqT77FAgSMb",
  "key18": "5kBUvuF5MjT7yRZG133Qnnrb1VUeAT395DaGPvgsJM9V61J6JhR14GFtNvn5RxzXu1DaRrE3bbLrLX2RuGuv26Mk",
  "key19": "3AThHiWbtbdnYtU8SfedSSEwsraB6Gg6EoDZUcmhTCCMXFhfga8uYGEnHM98PGtZrfD2RH1Tm91Lo3XUjUqkNh6P",
  "key20": "3ZftbFpmqgaLhdVyXyNrJj2LoH1nCJcHT7x42LxygnVGjtFwC2Hti22ff9F5q4RgBJhfEVyYtkko8YGgiSD3CqKn",
  "key21": "2oBNGxWWkFFvQfH7bnkbJdH4xYYqdZpfu6i8KgyMBm43uWhTiuZ8H17kDJGTow8bGs32vpm7oa9rmDK4qmbe95oY",
  "key22": "5bn4CiUuiJJdhPEt1x1pia6b7HZLo3e4f1Tv74257roWfA9CijPq59JK7XVEhtEWbfUaNNAAqMwTHdR4723SX7k6",
  "key23": "5Wwh3sbbMDKwoZejdPNuu1rxLXydNUzCYXigBeVSxN3hWouFXWJ4h9HE9cuB4Be1c1BgdN6juo1ApHXwXkC6mmXU",
  "key24": "3FX1aaXJfyebrtKXyrquxfp6NuGUeRGTd7W1jHG8mKNUMMwLZFiqLanH6aeqxnNRdWRQDhBpFFeDApztwYCtp7CD",
  "key25": "L5wb65WVasPhA12HzEYfE9HAckxoS5mGj3KSxS2t7eND5KEfMxdtkqwDYt77trL8T9o9uRiuiUB6G5qqbaVrN2k",
  "key26": "2qfP86m7YyPPQttxtVgg7sNAADe4y9AJmCcKENwsiCaLyzmRTCqX8c8XFVs2VABst83TLRZoYRuJpM2eSawDozTY",
  "key27": "4e66RUmWQprxdhNBLRifAcuBQPNXzak1ynQPNqpaptxJyTTXhAXiqqLPFQ22ffhQTAeLbKjyPeCv44y1m2FSSArd",
  "key28": "FPCbrgp5w9U5NLAYKbtjPFmfmuoDwB5fssGbgLkpM2ZxdckH4sgY72VHBdebJRrHe9fnub7zr22DpvkPFtQM5cw",
  "key29": "43121HdxK6j72Kzc1hzqfRmqUSSMcDfvxsxX3bL9oT9EKNnzff96pM5nEpa6GSjg1G5BPkAypEPc36ULshkffNis",
  "key30": "5hNBUYSZ4W4hTJduPro2YHUEKjwYMip67MAZbRi7hqGj29MPouRrcXaQG1kGaFv2AUb2wuQ5euMUUk9T4RAzPrSp",
  "key31": "548d8onNRcuu1RY6SHsYb8t2fp946xG7o13EXZr4edYAFmrSktxj5NJRpR3D7Jw5AdAcHx4pHzcgXADfmhTasA9j",
  "key32": "5LKzuYZg29bUWjKRFietoBmFargbGA7uiZFnagaGf4CvtnQWYWrkx8ykVKQQAjVksU1y4AZ9U5tM2XdF26p1w9px",
  "key33": "2Ao7pYPHFeFcvgAhX74qTApEZiatdxWkK2WsTjHWtp1EUua7ZEXTQ7XMuGuhq9YVWqc4B87HJoUP2VrTkFsLWcno",
  "key34": "4bBPKm6croT3R3yJfbc1YSVySKSjBA76kTo8hS7m2hNWyamyXGTdyyQk9uf8CEFGwTFmd2GWnuWtMZWk9DdTic15",
  "key35": "wNogmidvSo78jK9ooRotqEetrMRbDEztXxAURozG4WfymTGtPpYYU5GQi17wNpZbta5C3P4rVvkmEcvNuqXrMiA",
  "key36": "4EPFnycroBFSwqZchG2FMvbtuLnZLgpjbNA4oo13QbYgCmeXVJeUh86egQkA3dyeozEs2NjEwmRdGTH7nLdaNQu3",
  "key37": "6wMZ8cpzUcpDftWjvY1nCxdv7usTmKRRTZB4Sgp6uoY6xvv5T6gkRTrx16KdwJ7j7BESWWbxga5y4iAE1nkGRm9",
  "key38": "4Mg26F6Dj7JbsHHbZi5nJXSRQ4ZCgk8qa3edeJreAFkWvPWUNbCK7SB9KpafKBBQRn781pbySDKrpFvHwMpS1TNk",
  "key39": "F4KeeeFu6P1Z4xrnBrkVzrWaShxmgh8CTwJYc18PKUoUNQzJo586V4c7waEGsJUaSqn8wek74tMZ9rJKEbDUUfp",
  "key40": "CJzan2aV1NtkpupgLF2jFTpRYHwPPRdCQkVtYq5H95PjWwg7QZFDzVfTcehqFuByRJPAXUesjmsX61Uivq9HNgj",
  "key41": "3UBH89tdJ6ouk2yGPSr97w1i474jwDeKxSb9KtUjwtQhmGWgdhbxqpHRDSCiiFmcgoaYoYhJNSfuq5EzdiFZgyPR",
  "key42": "4v3kSNrMk63mgU57ZpzJGvMruirFuKfWaJShi2FEWbmzRxqWuhsa1hb4mvYZovgC6BiKrHC1KmFQf6cv4JGEnwpd",
  "key43": "55i1NbXJ3VsB6UdpaZMdmiKgB7V77oT78o8ApFRQv7Yw3MWmwE6xDjoq1xsBvyWuq3AKTBY9AANbzvQngo4NsZ5Z",
  "key44": "4qdf9zcjXHGkwEC2MiJQgHb2dhyTprbZPbCY9aZ8oTJWA3pqhegPnBAHBQN2cb1Ef5VfPBWv1pao3XU7fCHVLmQ3",
  "key45": "4oD4JyJWfNn34LpoKSdV8M81irGp2rWsrDPRDmHDpVmXg9Bqm1PB7NXs9MQLW1RZPy1m3Ub8JHdXt4ahYVuD6r6H"
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
