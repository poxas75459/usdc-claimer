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
    "5qEkbX5vfgSvEYZbXSvzbar14StxQLRS5dRvn9mmgv2TDnyYUrGHCEvpdZ9Kb9yTWPv5vT8TG7NNH9yn17DSy57D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63tDZTfyM4zEcNWZWbQNZVmBeQjnB949bgMPbHgAo1MKqwFVSV2pqzmHUZySLVGd6UGji5oq5vLe9KWB1kZSzBhL",
  "key1": "b1BLgg99wLyjULwAz74LkwiJwuAJdwndW4GkTW9h6s3VRLZmc62H3kSoMmhHfuDQNpodArMusnXeNj8qKsVux9Z",
  "key2": "5eqEtdyEQsdHbXF1fueWVo2hHZigDy8FCi9dBsGeRZ8hAED9F3x8PWRoroBCXu45vNLHvYSgcWqgjgWxLjqKKCu",
  "key3": "2vxGHSSCXUVJdUGqwVHk33bFrkkqvvjftgxDnaTzauoPiHBreqLYB1vYUsL5YND5XqdpLWknfkvgzTwcJY8QqmFx",
  "key4": "4QSaenDz95qrTNU3oMn3xdVumwVbjjP2yCf8cD2nv2xjV4uSFFdakDRjdBfyqxtnk1SY3RFTvgx9AvsAzvm9vZE2",
  "key5": "3V9PdmYaF7Xj536pWF2SzEEUY4PYpmfL9RJPKXkCLWQ7jNaKa7gjroBwu7K5GTejFBjiVa2DatDSpy7oTn3e4Ga5",
  "key6": "38nSGnQWy2CnxZ5uibetpuePHonqhKJKUiz9u4njBtUBtCzU8VLstRzYvoCTTD9bHZtH6rW3GCNfRrjNZWyYozNZ",
  "key7": "5Dp8ZBpjqugTSHYWCSPv1NMoFEhYSQ2PmwZVFBmApJv2Sr21RUY26NtCyeD9hMyDQsQ4xa3NCXQ3CSRYvHjyUwjR",
  "key8": "wyQHNCU1whng6NWHUdFBYBN9UmJfZWJ9DuXmYLv6DQmyPSQzCeUKd3YFuBoLTM8kFmWP9TECQRpxSoj7NoZ1mgT",
  "key9": "2KF5ZjBhLYsRz9TCj5PsNMWba7i8TxFnJyN9VtJWGRwnpBfcyNzTRz6GNbrg8GMokcKrd47TwekjnEdiZFk7yiTq",
  "key10": "2rCDFkNKLwcbEib5KJoC2F1yWKDkgCHuEbyevdij2JNPhPrhAkxnTfmmWryzJ7HMSCQG3fq6C3Eh9UkAFk8xYckv",
  "key11": "DTsfL55NooEmnHmSQAseBt5Ff24pYd3J9728UGdqkLTb7GvaTGLikz2U1ihHKhRHE2fqMv7cbfregJ3YVjBe3xR",
  "key12": "Eg4LEQRt1um3f9ZCjG12se8Ds863vJk6CRrxnMtFHdWby8gxTRKCEWUrCtjC6BTbrhaZYGpVg9NPD72GvHcNmCN",
  "key13": "wPpkRUb1heGmBqbh4spds162xPKfHL9krdb9GojoJLQh5KZhEj4qgaGyuEkew1X3Ubpz7QyjNNAm6z5V3uggxBT",
  "key14": "47iDMzxk8cUqu4S6zr5KrYaqjkiR1Dnw7UD2d4B2K6jkte43gnz89cXBsAGuhpRsT8y3mKHVJdpPw8FurzM83HY1",
  "key15": "27GrcBcbGkBLjsWRRLTGjzm82ktuTLXwtgDY8JMA1wnbVdgJoLsXbTvrwkPsJTaDUy7RNphLWsTajmU6xyACC5o2",
  "key16": "3vrSsh55PooqXcF2J3ZjGEXzFzXaEnnB4FHd11eUU1fm2Zk2Nxaq7ic8ZewFzRffjPLPwQrakK2Gsvx1n7A3uBXS",
  "key17": "27HDVhNRDJrKmY3Hqn86jZhtN3KF15831eym1ajjVa3kAhLCBiN3QDrgC4GnxE63kPkwzxn1WvDueurYPUNKuM3E",
  "key18": "2UL6tF3uZG4uxqdHSJKGeRGD7TbAU1vPkUSmAvdtAcGhs6TzAHewZfhJRqDcpghBoJNUjDgWvNdzT9UCM1kFzqGB",
  "key19": "2T8E3S4LSWCyABU76rv4Ko5SHNh91Ydt8Dx8oGv8iHQa31NxpKVcDAB1qzfncL3j2FcpmWCow7YyUrqo5o8d526S",
  "key20": "78BJYwDTKeQGZaDh2fttKjxrRWHRh5B8gCTGz1nMhM77KhwgC3NBibzsp81YUv5Kx4yr1XvXcjkCjNze5f2wNPL",
  "key21": "21EqEnsSnHjRTL3KodS6LGRoW7p7GbJFS1CSDoZjm2rHEB768o5KHTFFZvReNurAUTntJ3Z5R8kjafH7Wu9zmzf5",
  "key22": "4guQeRLhDxbLD8ZgBFjd6jDpenACXAVuY9wrrz4qKvHCZ2EDsUjhnmXPi3XvaFn19DsfLMi91Rq1TYAau23vRSLM",
  "key23": "49ZCrydDt79NhAmYNo6SNnGvU4yPJv93nPSoopPpe2ED9JccotjryQTUL9qz7owrMvJxZxWeUVaAsyhBixuvDfRL",
  "key24": "3dfm1FtsnDy6C2urkKpYZMukMUxRRwsDSeT2h4eFtW6wvnM9BGiGXU8zk41xmkSQjXspoRxhASgHvPM9LYP46R6n",
  "key25": "5ZdcwxdT2P27tjJAPSYyvokYeEUcbDHGezA6WaqHhD5jFXXaY81d5Hb5eELDimMysgNi5VfmqipzPZx3MTsUxw2i",
  "key26": "4KRThSVKfhmnf7kYFZcxBop9unuRewKZbVxcXyeJYTzh3gRuPGx4jy2o48PL1FtPyYupQWhV3TMfc2a2VtkmQDwo",
  "key27": "3rTheMZxNof36uEiDcwuZHTber3PD5ikcCnv9MCv6gej5JAXsSYiL6v9CgdNAEwx3gG4582xR3Xy7Ja5XGS1wYq"
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
