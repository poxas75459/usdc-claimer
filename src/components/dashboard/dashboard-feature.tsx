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
    "4rz7fiaFsTic8u9GpExFr7jnAz5j2k619cyhzmTtJYyrqWDKigCgyd5oCJP3CSRork2vdcnpHNG7WEhKaccnFiBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XSXxYkqS4ZVVsnACLGQhGF4fY3RPMKJ8SkCVdxnouRJFhnv5RaKAD76dmUvqSARmiMyqbX8GwfkCzdh4q8HWY82",
  "key1": "2oE9QdkED4A7WrSyBoPBKfAZGSMuCXkGqDt5pVY7GVB9ydpP5uVfEGZ8RMpVnXyzSUpcTU973kLtD1FQxL1L1Z2z",
  "key2": "TEfXwGs277NR4vKtvcSYeLmrsmxruyaSvdrDfZvNCqtavbk6xQfXuWF14nXmf5BDiZ63wmNaJsT8ZNGiJGwDWCD",
  "key3": "2PQTDYRfe5h2dFfbigFGkjx9gr8XNz2qcFzzVeBdn6w4G94mGcmuNit3nVygpLumpgBEgyWwEvump9N64Mq2tbYn",
  "key4": "59cQZcBqorfcHAUUnbHTZZ5vGZiYAQhBuufvhag1xiCqpaU3wBGMd1QbLXunbUAt4a3fjCnNjQ4a2He1winYwa1t",
  "key5": "3X4LUiEFvpsQfvW8qfv3A9Y1L696wwvWw45CtcHkYb82Rkqkzw77s2NV5cAfUgtcgF6k5Rw4deBcUt2dJFsxJZYq",
  "key6": "2gv4WjHKFjGMkgof3ZjRs6XJec9VoYH6pxhdAcKqYDZ8dzzof4nfx9yKA1V6bFDBik8JHwL65cTVLAWS5QFrwtZv",
  "key7": "2JPccBGce76QKMvgfAPj1wNSjwGaHJGXxSmiWGmFJwh2v794iqHXz6WbVq2GT1Ys1tKEsXQvGvGEx32NPve4p5bW",
  "key8": "4R8U2Eq31ikdrn4ZANmmpiCf9P5m3y4taGJruz4xzcG1x9Wavd34reQkFpA7h3FJYsv8DkfH1nVjFWAig6Cru6gN",
  "key9": "5rZLyWnmZH9JVc1r4vJfgo1TyZmyPQvsjc4aSWPepqy2r1aGpDnK5x9oe2VWUZq4NUNG2VrH3EN71CSRdpLcYJu3",
  "key10": "2DKMywcsXP4RQ64TM33Sq5whVGY4axJ6xmxuyRuNuUjAg5STQh2LALF9XPVJNGKDTUgwnE85aeXCSqac3EWi6ruk",
  "key11": "5SMoWNWWUjkpHmJJyDaMQwk6Ure9B4rcAn6sWjLqV6peZUChG1nwcLj2VKA8x6uem4W1XTWRW6tq8Qqri2T8jvvV",
  "key12": "ZNcqzSbxUYnRqgH4auvDX3tdg1sLbKGwzR5UrYwMyU7aBfhkCznHd9yKA9sfRN7VtpbVmgM9ALTUVNurJWUQ5BN",
  "key13": "59kLoMKsqsfYRBEuM9zHsrQ8kNA6CEPqWGmhe3udYuU1Krdt4N4otGDdd5g87A2cFT6nxFpRJW2r3GqkVShNeHcs",
  "key14": "JV33vhQC7htSWw376H89pzHZMAXLsZeCQ2WcQGRxwyBWTgsjBEXxqiTRCKgN1VpGY9k6z7H9ENUEKADyAe6LDVZ",
  "key15": "AQmqp61Q2GqmX3b4wMKcAKWPAP6JT2ihZgb2fiPxeLBX7aUG4TyEccoZ89CamFzrL7ooDp1dQSon6HR6P6vtT4U",
  "key16": "5i12u4XTC1tZoCuv5sm3TVGQKv9a8W9dkaruegm7NDmwsMPo9WmrBq55SN33MQCGNr9tfJ9RiVpq4Ufi89HLUjQd",
  "key17": "3JqU5s1kCsJ1PCXZTDjdgD4JyGEgB558QjNP8tKDWEen5JA6ruKYcJ4KQJKtfUNTg7QYA7oex9bvi4HxJN7mL9sm",
  "key18": "21BR4CaVo7iC9fprH5dJPwvBW7NXi5cbqgvRh3U8o1u4A6HJjB9uxT4vX8ck4j9s163YFQMLeHXT6EuAFhapsc1U",
  "key19": "38MLTKRBRGHeqs76aRFQJhh5EevuYeVrzPayDnzoKbrwRdbAMKetnZSYxLc8YN8jsUsyxJn2dX6tRN2sc3AJp1db",
  "key20": "4NMMuJrwGCadLiXgjmK1LkAwRWarNzSRofKb4syjPWQKMeExJShFhvxh3hU1kcZMRTeZLTwCSkvfs9xmptVbfwWw",
  "key21": "yuBEkkPeSVybsDHwWihsrX1asnMoqnBEc2i2ud4mq5UuFKkzKd4v8j1MXtsxt9vxuDzfgxz946UUAvFuEDdDd4F",
  "key22": "oF6yow7vwEzzgTHtypFcfag29RebgzBpExExEqAc5YHU7RzDtHML118hTJ7Rywp7Jnt37SXDrVyxX1q2GYrqPv3",
  "key23": "2ueJTzz5iNZzWAxMbUyH3wxexoxLhu9saMt2R9H6VZnBuKKgyVY4pZiQ2vCEuzdK7XWvaTVJGHxJHVoiY7XbzFcQ",
  "key24": "2ueQ9TL9T1RuLjkKniYF85T8aGvFJay2qrJkEU7i8ncMgYgt4mDnFHZkWw7FjimKB84fBRXs2FUDCmvvfWQozXC3",
  "key25": "4PtJo8kmutpN41fLFKJ7zb26rackzGbfJigsRpxq7A6Xu7XxCox3zN9RjqxQTXMyVYUn7b1gVn6bJaKutVHiPbJS",
  "key26": "WfosbKsTP3bZEpEgUkhx9dDT96NtnvvhjmoktKC597wvUENesTaMoD1hg7yWWbRWnJLM1PtwrCzzVFtbepdD3mK",
  "key27": "3RutuJNozp1NVT5aTLjpTAYbvqZ9MzHp93YS9UhwRj47ZMcx528jeu98vq4Pctr8ek9JMWb1fUFusyHthRffsRo4",
  "key28": "4SWmfW4oFRm2odatUVcBjfV5GCyUg3RyVpwX8Gp2tYBGsBRDrNqJnK4mE1rEYBvkTyqibtB8gijr1wtK8LcKiWh4",
  "key29": "3werQFbngURaDcjDnLt3aN7fyGB5S4nMzVjmDSmwzCwKsFDaTUzmhpJHyf4T75xpXXShhj93fesiqSG72JAq7jgh",
  "key30": "3UWij1mHqNKc5dSWoMGXvatuEKryRgY1rstKXXjvNm9wuH5nZaoJqGa85n4sveub7xxR865JXrSV5T8X6rs1Ysuo",
  "key31": "5n3Tuvn44KoFYi6kEg558cJmDEJ7fueYxMjMjdxPJaF2pMtVuBpPKVBShs8uq4jQ8WTsDs2n22neqjSDaiYAvVyZ",
  "key32": "4B9mDtoZu9jfpA8jEceytSsK8nzJ1dpA2Lt6E8YRUuuPu6JejFcYBMCEboDLZriW5ciUKfKDywWyyLVg5pMMBjnd"
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
