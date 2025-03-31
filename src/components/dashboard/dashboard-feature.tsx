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
    "5HvHGVrUWYLQsRSg36VppBwQDwUeX3aET8PVwzQUoH1Qz9ZtfBDRFGLVb7eVuNskuqCZPJBYfKQaLmxUiRqcYk24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ms6FDtcz5VjTVAo1uFpQTzDYbpcuqMj65PHJkRaQHNLzJ8gxotqA9ggiCmTHsXUPRZRHv8tBJH68SgmQCzHag33",
  "key1": "3jGWQRVNwLCo3Z88dRqDk8o2ZqkCAJyPb96RLE6v7cjRDgkW7mo6N9o8dBsrNUVFF7dSraTyUkiQuRiK5TRXZFpq",
  "key2": "2giv8B2mVZKDJ688ohed8Xp2UZH19pB7RH5wiwDDJdBCnSP4AocHXLe8gkh4CRsXzue2SMktmnWErA3MzP9ktgCP",
  "key3": "3uqGJzQTPWYd6A535jNQTB3JguZFANzqpVwhhNTHKaAvtuPAu7hLZHdnp2vEfqB1WtbqrM4VS93FTKzdXajowSqy",
  "key4": "4Hp4Q7XcjyFpN85FxsVb4igxw3yza4h4XHZvGTE4raJ2mw3ZvJ83PmiAiNwDRtfbpKghMoZGhhjQd9naYZY3ewcy",
  "key5": "3URcyHopg9Zf9iXCfMHYy66QZdmutqXw5zrPMWqwBn64NaSBwFEHzpuaRgchJNC83cSb7WVupS2TZu411UEsdJPB",
  "key6": "3XJnNpJouirxcTctB46MGipJa6yGTTNMgmYS6t64ac6xpSvtJw36sMLRwTpwMbVYDYJZx78DKE2jPmnGt38tTS6c",
  "key7": "yy57rcKxkfieNnfQhDBxVswtgh5Xnq3WVczSKicRpYEUBnVpJazEEZRMW16UmEL58y1ewae87FDeZSMMW83Xq3i",
  "key8": "4vHfPs512QYQKu99Ju7c48qvdcmEJzWCBp8ja1NMc9Xr6b2cPchcca4tSJ6bhvXhQ4qwcQiMJ5Nj9W2deCq8jJqy",
  "key9": "4R81zePTZneyvjLKnbL1AiarUXsgshkcF1ikb6qVMNEqv11uZpZa9aeRsmj6nmWahQr4seWPaugAwKG3wDJGWSSw",
  "key10": "FWVSWaj9NNH76EQymTPytGPoAP6ASG8RwbDM7Ww13DEKdFC9wzpg7Yj918whfd78WtUmb1xHea4LiYAKt4JhsDy",
  "key11": "4H1bqrNgePFREKZh3bM3Sce6YuYRAjW8QY1vFbSyjY3QLUzNt44ySsLapL5L6yQFmmiXRXpSdaUrhRsFRkHhiDjo",
  "key12": "N6UYbtZAdDPmUB2i8epra24PU3rTwqXmTXs2oa9Q1Q9Z7AJiFfecqNo9KQBYBLwDrMgNxNpzQSuKfiSBKiewkgf",
  "key13": "2wNz77z1Wunv5AHDvuaaVq2tt42jJx3s4p9TPcianpVkyuwnC4w42LM6hNZzFqP9Tq54XuvEfEZiK7PwcX5EyQEj",
  "key14": "Zo5DGJMLXq83prSSQN8xKvNmZmAn3TXXp9cRoqLstvrvvv1wWtveYv3YXKzfoVQLpSGgbP9eedow7qEvsqh4QCw",
  "key15": "2Z26TNgPJDsaW14bPEV1kA39wM7WNNmN5Cymve3y5motbyHREHnPAKAKsTws8Hu2XQVzHUTYQLNJkeUSyYWRxqnE",
  "key16": "2vkbjAw2mTu8gfjTrdA8qebuZvSEfhzY9NDMhgZBc5ayqFDHD4veMx9qb4kW959AZ1KM7RDyDWT5SYFvcCRRnJeW",
  "key17": "4boMsHvqqwBZhMmHHkfBWYRykdyrvyLpUcnGkB8ZhifHamuLZNwWDTfQGfYRZFxAJCt6TptMaLa5JbSQGT88YMVo",
  "key18": "3iTp1z2jAUFYx41kAmmGgzvGma4mtL3aHQztKy4fMhokRX2RTpqtqEPE94W5gctnj3iD2ah5dHHjkuD8fjxtDQHm",
  "key19": "3T9NbeiiK2kaqahV4Wp85tS8BnKqL1Td69nrRsKammBmsWhh8BqKmBJBmSWqpchYRCwxts43NAaZ4XEYeBvDXRD8",
  "key20": "2MMXJr1BwfCBeRSmMefZYdMToybfRkzE8m39KfXLZky9uQHuwy33oHwy3G1XPNT55ivJMab9vjppRTeEZ7vy15Lk",
  "key21": "3ZiHoocNepZuf7kseoSWe9BBt8fsGt7UsUoqBxAMvGba4D4idWUsdvPXNPFQgxDH774Z73PNKGEL4BRHQaKHSjo9",
  "key22": "4QLMmFr1KCyXzXHSTR1mrhbcsd5Y2imRuYSWNvLBFoxPowSN3x1WME4vqh72dFUwvumy6g6Ub22YrkrLKvZ56poC",
  "key23": "437v23LbS32zcH8xuQiAWRWsJQ6EBJ7kVN3PqzmdB23JEPvxBByWJNTno2ADSTAZSMUKree98CM1kp7PpvdRxhaW",
  "key24": "3yaX5a3vkQXZvBjJaARUFZ13qf6Ta7uqkQAgB8gbkVodwRpwMsfpwYBCQWcvAQCMfNSHG45sSZJqe72GQuCJy54n",
  "key25": "3PaTWPSfnkjkFrsyt7BECkjKCJmtCaqpN3XowRgBfEFNtvp2yLhxfajhjFHin7zQ7Tqe56AQ3e9PLgTNhKkmXKGc",
  "key26": "3igfijMXwormKgMMMTfFDPTaFH2EZdtig3p4ouYMhwm6cEDCZxTRr2r3kfizbasTta55G37A5sgyjteYnjUh7oUg",
  "key27": "4NGKNhFA1pFneKhRE3rnc2EA4mQsYLyxS4UpLKV4zm9KG24FcM8Wp6ntbR1KiLAywww1Dao9LBAb2rGTVnXSYd1R",
  "key28": "5fq5GrkEDHWTMSU8bw3FtAxzbv8ZY69d6TPLNt8z9Q21hZsNj1yYtYKAhUSS5f6yTaV34uS28HRxEpQc18yg6kjH",
  "key29": "4BV4b4vNa42cF7y86rjZePpEhDYw2uKuZ3b41Xf5AEmknJWKRXQZpbztmDR3tdjyuf4GYN9qvM1Hnhb2m2Cri3C",
  "key30": "ec3PSV8w4w7m8yw2aQaeKEcocuY2nomGQTBFcKr7WAVEiUKtBHgAuKQ5XvNckBHayqfRTfMKTnNjNnRxMNKM4hG",
  "key31": "5ufQVMNyFqRdZ18yqcAAgszYM1qisgHT3gyX1L8UG3whjw3s7jH1c1MUq9SMKWkqHHnVPmH48hqne9GND3ef3zfe",
  "key32": "4cWz8b7YHptrknZjBWnnGcw4esMvfyhNjvGSX29R2nxH1oy7ibKAPDrTkkMqMY5SrfmNEe8rTLMmacUxfmSjhKuC",
  "key33": "iNNnov4iSeeFnkzeHyw4aCUDHGvnEhQU9NW1qbGp7HojRspBowUygcQM2EaVJh59cJnEcosv4h94BSGMAGVyRFx",
  "key34": "2Edv2u2vSXS3egEntp4tX4BcyxVHi3SY3NNiVvtapRneAXMbsL6xKH4aUt4JXXsh1veQWHQwVZpK4AVNfYzYd56x",
  "key35": "4rvUPApCZs3mhdBUCTfCNou3tNoou3cZ8qULBSw1N9W8FPT7vptwzBe6e9D8akfzha8pmrRo6cMcNRyFEzU3Abzw",
  "key36": "3Gnqj55a5fsCrvX4R2CxT8N2CX6PFsMBVEWro4niYVGewPP1UtiRjAZHpFW3W1hePJaBZ3tioZgBCQotBNvJJ7r2",
  "key37": "eziW3pAH5nGVLjqPTPvADQgrULoAB98xzNomrnJHx2swLwxq94vcb3EQfdXNWDEoCeFWgVAznK9KR29p4hdctvT",
  "key38": "5BuN5Fn1k6ba5ywCwd17ciZ73uLcsyTu3HAaXxPcNFuS4wPGjAY8GrRP7Z8JGg7jdV3KqnrSzyjhhRvuSLhx9ZB3",
  "key39": "2icMNjzzXdBCxTRTutW34HtL2cUQXPBYPRLAFVRqfvVkWamtxtRVKvDJyWbbjy4ud18sbFxUXQuQPPcST1fknwFx",
  "key40": "3yATKXnS5T2jYAvpu8Gyhm4HXD9Pp9HekQULcPungSb7dHnwEtRG17EjGjFsAoC1F2Nh1EZe2rK5CihTGDZHWChf",
  "key41": "4SdGnBJ2a1ZRPk9bNixoBatwVE4YLguL5SByvaptcSpQb8BWQVR3CaoJjQXMPURt3TcxqGiM66zW11qRe611hxj3",
  "key42": "5bePeXDuCBjizYg7GVQwHsQp2Jd5Mc3Am7MY5jVtmEh1KSfH8F3vVDiDivk7PjEdxfRTevvTEzbUfe9K7opMbt3J"
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
