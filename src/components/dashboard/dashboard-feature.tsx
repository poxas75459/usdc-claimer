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
    "imcrPQJDGKw4UzpyNSWtyhy8Nc7yyJrphvX7uUqSbLQw13WxTgRqTszXEtng59BRZS4qqVbffCSPZ19rWeCaJCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Edo5cBTT4oyXBHYjRBzbd6G65Zw5zngZfu71VRptEXoxqGo5KeEpGBjBcpoEbfkzdkPiamawrwYEN4JRuQLJQQL",
  "key1": "51kcFT7rFX4T9zngU8HAwGgtriYY4fe6Mom4u3zxMkAJ8azqevHSz48w46b679aDNbSESrBY3ta1JQEHi5CeayeT",
  "key2": "5QoMgyY4s8BHq7vdjeA4cUX5LwgtpL1YXsbsoUzkAHTjvNjf8NLhVkePFktNMfL8e94N1P9U8LVc6ZZ4n3L6tASM",
  "key3": "25pWzmAD8HMuZd6SmAqo8BaMgYkeGwKARZ9kY5AnCHxDMmEqrENBxEji1duxXmSEBwoQzAHGZ8G8GyRPqTBqTPws",
  "key4": "3CnBAa9qiV5FcVSar7gk2JwnFTcruFiHSG9ZSZyxjDciJjZyqTBR8QUJi7Z9B4qpDYD3ZhCgsM6cUn2Ae7H4NoYV",
  "key5": "3c3ZcjFAvgETobEnyLij3WnhTv4tgZ7VJM4TEAPv92J5zNFzGbKw2dHh1oqRuBL7eVPFUvrDW8e4r38zn8YBb3pa",
  "key6": "4PE54PubJP1HsPoY6gGCxY2kCQU6BojVcTVNFneJh7zp8iZMrS1CQaFMFqfzYHvnoYa7ay6RdpQT6MeTsBrNbtaA",
  "key7": "4F2CJ67JvGaVHwC634eHYand6upg5MzxaKF2xAwNQkBoKvFmGWxqSiCS87xvdcVBNPNtQLK4yj719C9Tmr1vds6E",
  "key8": "5Epq79s6WMwDzkS4f9zi9F2ZFSSipME8UjdFaXqzEXo33rEt4tNsnBagjbqfW7aXGo7AjerhzQ1fVhQK2wseCAQc",
  "key9": "2x81vbC7dxu5UoGFRZJ1pga8AM3vnePTek4kC1KxBoUDXsM6rfBTe3o2EZ4aRg89QxbNuvALiUWbWL7JwsMkBqLi",
  "key10": "2EHzi2QmiL1pC8arAD31TCPShWm4KJf6K9DR6Mftb2FHkT4EXUAcKSx4h3YBAxNb5MLfxwdqvNi34S9h4Ff5oNKP",
  "key11": "5SQeTCXUaRPxTEueV62ChRovzd6EF8Y1z6W3hJjphAP2zYNXARyVnZa1rZHQ6tdFCVWCQUKkQiKGAQAVe6WChxUY",
  "key12": "uwAxuGw6GX94s3Vm5Y3Jq3f5twRMpRtGqL7CCUqnQxUGCDqZHPd5f7UomhWpHV9Ch7yHg52TM1xfWGNfb7WSY7p",
  "key13": "542Y8vBNzmhLGF8L3NHvdYXwP1RCdYkDe2PpyFCEDWuy5UeA73pjpBpB7syqCoh27uAYbmoQjM54JJ5vzLYn69WA",
  "key14": "4KZ9YE39c3fhRg6ZXxHU5cqxcswj6qMy5tptDfxUFBMapXhReQmbkxmdALQktCBZXLE5KwiX8ST6xWoSnLoAydDN",
  "key15": "66HeEiM6G5gTR2zpZZVY6SNkfoS3RPyLqjFTMPAzcFUskESrvm4sT2D3pFgDDvtTxrSi1CNeyjnrAFGWQGyaYRM7",
  "key16": "27ZaTXWDgiqLeLhVyV7PZxT3eP7JtPxLmPh7nKCqhAVN9nw5qsxbNN8bacoBUszhA4p9sHDgsDewo6dRwByff7kg",
  "key17": "488PYY8Bhop8WgAb3dwaMWJHzj41Tv1CG6i89Nrk7iiHjRN7v266mRP567Hqy7agwmxxf6C6zaV3JxWioBgYWA6n",
  "key18": "2Y4UmpfEPrzKzD5JrciLhpmUB6Chy4eSnPHdH1KDcdBFSwRj5sSbEoPaexdtwt2amcpVDYVVV2qEjX32yP3Eb1gZ",
  "key19": "2TNk1VFZfVRusSDzDQd7vQiSyDFDcNC8sUMGbKa526uMugfnjXP8Vted1dj3enRpWhQUJUZiP7p3BxtqppuCMqCy",
  "key20": "fBHcoiPZzoT3CsMn3sikaoQFvr7ksdWy9mGFsUjAzBFo6oFGfKHUny3m76QVQhzHr3Qn34yA2XehHGYDmy2diN7",
  "key21": "5a3PZHXePEGZP98qzFdD87bSRBsSseFqDxVy1wWXrpE41Uey4PdqwDatHp8srnfR2KWkCi6MunKbThGwxC7rvYhb",
  "key22": "4ictX33SALEhxhHfuK3WrnnZ4p5arguQkyyTJbsTMrsbXzFJ6btr7yWxtbuJ7KjzNJJCLTwrR61uZxvkP3i8TxSt",
  "key23": "VD18GNu4VZp59t3bV3NwvSvSrYyPJfSFRv4CNaXTjSZwvLwSp75Qw18LDWAcxEyBYmRnpb9RJWfXJwtyutYHhJc",
  "key24": "2jY6FBUxsCDt74tfi49qVx6cPVa4YDLWSEnhM6qPfEmKYp94E5NTYRLqrSkGavpDTVZUEEPVajQ1PJNLFhjijSuz",
  "key25": "4eG7M4CyQdWobvnQPEtUZjyd4HeCMvGT7Z5aYFRSEnU8CAw1xRCiAhP1Cjf1T3c72FiMrqhmycNkiRsr5hNmnisq",
  "key26": "3oJHhfzbJuWoSgYNMxSabvt4GnLSQxkQVHW4PngEn33pchK3nDPHjiSHeTKaEgLULVbCofxRmfxiaNeZv4vJpgpv",
  "key27": "2XEomZzuVA9KyLyLyQCeGbzfrDBFPTEFwpRsoygGZ13rG57BSAC6mbi3ka3NSe4iRzVmgMmn3wmySgH3F2TxWnW1",
  "key28": "263AZPV4G3hTSGeZbfoKwCqFqa24zWvWw8kHYUAbD17Dqx555SrPMrBvtdcSYzep31nZLQtiE2nk3Nh2AEWWxCHL",
  "key29": "52R8EquHRkoAwN48cJNQTWxb8zBuzW31MV2hT3bXmW7TXy9G5XTNzW2YUqKKTKpAmoHzHYhW22aYg2XFKvUHCyeh",
  "key30": "AiNmYrDUEDFRAcFG48oc4SV338sNL6ARVPqp2N4d8wPM1vMxDgMd88kVxHgeoNuywZgHWHtb7WVPNQHj9rehwuS",
  "key31": "4zzvJRSaktV11GmssTCW8mh9gWVga82GUXJu3da3SHij9pLd1sUNgbBkGLeiedWpUGNQYM2TEyPdnXKqyf3PeKkq",
  "key32": "4zhsLgpA9DJUNx9FRn3qLKavVQMJ5riF7HuwNcKfFUa5XDKPMCbVFh7HuuQPFkUAAyWsykuXKxuGqZER6mnBEwtG",
  "key33": "5Stf8GGkXEWakDDPkErnjdR5tvGaFTTouYyA5wJpg1t2DqRGmpBXTgTuXawhEy94sfafwKkkoRJ1deqBsNALm9SG",
  "key34": "23h2KEBJt9WBNMMATffMyUSHQWYVnSARZ8Dh3gv9Wa6qeLpftK3QZkXV2aWFFR1saeE3dmrjmTamLDNz98V3jB6N",
  "key35": "4DXd9RwGJm2W9Zy557Ebm4TqPf2MonJfHWGi8jW2JCwv8eqKLV3qsP87AUG78dUu2qZuHyBb8AX6u7xiwGhYaWQW",
  "key36": "2F3PyRoPTf246rJqUs9od4iviLphu5XNfMrPv8ydHPNh6MM7RV3weGKfZrjM5AfPg45odYDFzvb5NgHHzASVfZKF",
  "key37": "4FBQTzLQGWhQ468MMfknqws9zymc5dLc3gJvJxqvRVJP8LFmLC1MdEDyHYYygqypcgSiE2BdCwMQYwkzjy8mMxkr",
  "key38": "4zvTo1LT3X8vCZ6aSM3z1d9XXGidcAofe7bmoB9URHAuYvFSGSz7q7JYuXrEMHHqeqENGehJK5TBBxLfKXxYse6v",
  "key39": "2P5RBi8bBMN6Efbat7rC3vbZGPgMEskoQ8d6fQtcfk7Mh7CY88Q2tViQ9Pn4QCcR2LmDUGo6WrFEoToL511MNgwD",
  "key40": "2ixhW2K3acL11kZSdx1g4EYM3efYDUdFVE1pnM8dteYjZS7qEnfSrTweRHKMUgwXsYQMe6ZX5BzxbZX5SWr4YKcf",
  "key41": "4kqQ6cXmsDLYDZUPefpwJWTKPHViUBiYfzcaWgfEWsxcXzEkaCLypBhSqseEJooBdyuQ2Y6D3vex5myE1nP6hDKR"
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
