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
    "3XHJn4Wv3QFFLtwYU5ut7oTRqCoEZpqyAJgsDGYSoi5QbhGLEMhqzgezm6izeVcoqrVXDKNmkbF7yf3nNNZLN2sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45kLSQDw6jjPYqmZ2Tqw6zEeN1boMdCykuBecrk38uBxWYkUtP3s8BLDFMHohYwhvfBam2QR9sx37gwyNcDkgnew",
  "key1": "2K7uk9k6FTxmKzV8HXaYge6RPaTrxUfJrFmowX2f5PrMkp7kmjcL1wJzQ7F9izkJXETCNhAD9Sj3XniBSHDxjUku",
  "key2": "3PtyF1oFqRpdULo2jF9MtkxAx5fFiwbJoxpxfqp72chFFAoyxwohHKWHuF82NAHrQGM5rodiS2EMjRu3axEW6ugq",
  "key3": "3jGDd4o2wA4RbRR4Gjc4iWZXvu9vPB9j5pTkrH7Wmi13tGMRLf653bKn8efbyUeszZehLTrM9HRy1hzdjbiYX8jd",
  "key4": "4Kr9XGXdmS1EHKEu3JAZVuYbgU8MTpb5zUJc4avprvVKDeSPvE1XHkFy4h1BXdn8StyDKJFSNEdF73fbBmFrBDQj",
  "key5": "41t35PtLuFBHfhir73mLSeLYyZ4tHfri4M853WjWp1jzpsRd4XryaShSBEoKTc6xErkaGgfvG4vSyNhNAigLCKo8",
  "key6": "4BJcL4X6NwweqzvmRGZhUumJyGmLTjsG8sRr4gq2JtD9UL6gvwyLvwHMxg4kQ4q5BESGyoY89azcU6ghPEBmnDtT",
  "key7": "XmacJs6X3ZC5FJ6Kh69A7tF6ScRyDRN4iX7wuGr2j4od6rNR4ifR8Z2erniyBhAWpAhpYzF4LJYxvWY8acvFHH3",
  "key8": "52VULvEV8ehKghcFiiUKJxFHZaAWqWqm6jP8U7TieDPqpKsAsuRfjTTDo3GRbL3wQpYitq1p8HjD6H1inJ657JPZ",
  "key9": "47twj3GgoVqJBDsrDAGk9ifVmuvpDnkVFoGHxbDRXso2VoSvtbzci5BJk7jrzhShLT2pT8uzAPtZUcDmKpBjp5bH",
  "key10": "3t4jxjk6LP87LD4uFRtWEvEWu1fNKA3fZ17KMMNdRYtA4Tu51gu1p1CJkjBPFXbKQUaG4Uxhd42JZAXw3wjKszKg",
  "key11": "3vqnAD6NiyCAvywJ21xQym7vdvY7nbvTW1NSxngNjeVL9CvdZEjoYvgD6zY2fRMLknLHBCs64qegJkt5GVVHh5Ms",
  "key12": "4pjeWC45LXpb4VeTJw7PKRschZfFdcGcVZotWf9gGhKMYc9xnt4VjPe2q1VvTx6y6aRqsBGoX7GR4zNNjWMxv5Lr",
  "key13": "5PL7xVrdPjxCAo7kA1UXZ69tPa1xjSMGnE6HH7cVGFMhx1t39Edx8UHpbvEffJut2Zd5JSGHbYqNg2gRsoLNDTox",
  "key14": "49AcxPYYFdYT5CnN91Qk1v1Nbi97VybQV2dg3Eisz97akw8hTFkwKqKJnSQAVUBvkX2uWZWxVnDPQz29LjMcyYXw",
  "key15": "XKmBRCFXvMN9Uwjc6UUSJbQMAB7y3viGtsmRUYT3yxfEqacYZJDgNs9Ex8SgkrbrgPdqMB5Vnjx8qwSnALJWCRB",
  "key16": "3kZ43D1hnKKe43F4ysjRVyVqPaCdh6ZgdCtVMEmhsmdkZnP3MbTPoddiuoAm2fgctvb1KiYpQa8CkrMxZGATcw7b",
  "key17": "5FXr8EkuTqoW1wkVX4qvnYHHzdwZMWngi45Y9m7egZGrML7kP2QYSD2V1gbueArXbwJnfLoxtMDmjx1CQHahNi7j",
  "key18": "2oBTiaZ8JnB1G64A7XFcVvdu6T3p6eMR5sydqbgbER7kyi52DhM4qJRX1Kc2RxRJVvQvMZ3gEDVxDhcMe1ZzNLqE",
  "key19": "5THyJnJqYJLTWwDqHWvXPQquSBtjFB9w3uDAMQpFSmB1ASgA1371hSTRjZ6xnFpjLwyrVy35GuP7tcuywQgE1Rff",
  "key20": "4qGTt71cwSzJ1bS4fG7cPbJfx3B3DQqEJgytS23vMw21HM43EHigxnahbjX8qFZfYV6jxREyYD8gxSkQt1agmLu1",
  "key21": "2ZCUCVi3ULH2FpbFJ6gqrzuk5YGVbpcwDrbkFtj9YBysrBwdm8iWwNR1KvSaS4FTvrzHf6cSVj8qtKGR2BUJcZrd",
  "key22": "4d4oureuPqCpqdFmgpTCGNti4uugbDBoUmnn1LvRSWw9DWCR6XskGgLPujrhxyfW5mPYSEXpT3Th3kLZx1wM11cz",
  "key23": "2pYvpmF41eT6KFDzGsZKim26uHZfhpRyAtjwt7c6zLAktDg8mAZcskp7RX8w975sCvoW2cNJ2ayqideREdvErSFT",
  "key24": "sh2guwKiq7hhFh6YpUd2tRbcFqdzY8Sp2DhMhZpZvstHr5bPEkwaL1xzm6kxBccrwneccfcZwE4s6L3FVBvpBAd",
  "key25": "4s5rLb4egh69DpXQiqoTQxP7ffqsVxP2AYRD3qrDNxE7fSZLjUBVroJKaLNFLbp193HXAYSF6umPV8YdfoeGkBeo",
  "key26": "5GgjJ1415eaLMq9bB4gedDG33uEiEUkUKTQea5tSCcT8bnsBktPFiDKF39JmcAyoZso7azAPE9BY71RjMkzy4Gnq",
  "key27": "5to2oUpeh6HY5WPWRjANoXAGAGp2pocM5Wj1FLoyuFJAJW2D3rhkUr8MBYVu9PZaiz24gqN7WqGoWZwie4RL7HZH",
  "key28": "5TJV1y1keXK5DX8JCZrN25XQcZ7wfvfZo2hJLcowtXU1X5zwJAMSN6wcbj8Mizbacb51j6ZH9C9ZLoSWkoajac1U",
  "key29": "3oGqVzukrPxEbRLNxhgYuBFro8V2PvLBrX8yPaX7pwuieLuACV36Zu8FXSzaLahVyKdVqbsxEa5tizkjdYLkSLd3",
  "key30": "3fE7grfrgU3soSGdCrXm3fXQwL7nvd9GrXakvzgfxoVWYn3rqFH8LxFiSDFpHfn343cEsmGjiFEpi5KeN3vBbtAM",
  "key31": "4bMbcwXGqNUoqGwnG2zLfW7Mmm9W63mcVGCm5h1qyWQkRrdFDV4vqQDXPemTw2KBP77LoSvAbzaKturse4F5hbsj",
  "key32": "4UXFUySZpuYc2TVTmqErLnsmuRSVD3vkJ83GYMtUW3gJfvAaLuAx3Jqd3H1Uzyi5xRKSFvFdkhmNm1XhAtyV3KHY",
  "key33": "55TTGd938fmsvrt2P2xL1f4ijJcEpMFnhmDZi7Ne4i4k3nnVXZ3VKPt8mah8vCe98M2feuXFWBdmb2oCtMmH9AKE",
  "key34": "xCLKnELkUcJTupprmaEfgD4c9SjqVAg1KwYYgEYYCUu82fXpf62QwN1WbbEFCyjtqyCukbouuwHjiH74AMLntkJ",
  "key35": "3ukysJq2xg2fGdmytczMVPtp9BCiSfEAb2J792kDs6jJZVYMqocwp6kDPHYANQ8VzSUWtDKJZzxzEJTx66F7CExC",
  "key36": "5ewZU6twhrhRCSnVAxCWEXaqT7EkzyyhXA6EbdHt2GUbHyqcrheBABUVVoUwnRkrgNbjigNEL85tEkb3F1dVL7kX",
  "key37": "bmGj7r1uviVFxb1crozpeamvx9g7zNQ4hmRXZmL6HfYyU1hD5qY2dNkLUKjodrfizzxrF6BfMgB92GjJBSUgMQo",
  "key38": "3uqt5Lk2D9vkDojR92eHMTxhDx8jxR17MZWfg5rBvjYimpuNsyy87wmTmowoVjBbqQZraN9s28L9Zyni586dCdZT",
  "key39": "58UtFF5NoYZX55znNjQ3tEQaeVz7Ve9wc4Q1zXd2xw9WZKwEa8Dd2TThgJGCkNVCKAAMd8DMc4s8YWhxDCLPmpeU",
  "key40": "23BpQJJWaCmXjKdySHpxMHqf1kpY1XdTPcmuMbhPWsBThM1xMhxWJekv83CY4Y1YYqSmoVe3oj9Rm4p5MJfQs5mp",
  "key41": "4NoV8kNJj6cyVB8ogTthXheeXdYoCcUQNTixGKD56AEv5yaYwomXfZarNr8YkCUsB3Sh8LTbqfypTDLsFJrd4ewA",
  "key42": "5nk5K41JKMdKuGQF6VuJvmGDJKs4swBB2TXvUZESQ16dNhMLZgZAYpSju7vJLXDR1ZZcp2bM146TpjcEjoa9o7kT",
  "key43": "2p9o6Gg4wiougt4VmcoSYYGnU4VjXeKrpAsLBSrGnzCP2nAwSr44am6S6hnUXe35MpVNUyEeXWbq6wk9qLtCLh2Z"
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
