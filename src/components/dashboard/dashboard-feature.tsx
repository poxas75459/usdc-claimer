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
    "BSsnLqxXWLjpUFWXpkktMNqC8qYSYk8s7RVVxsrGuXypLF3p5Fe3z3vRirgAYMuCDxJm5rW5TEVejHH8AZUmmWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q6CSgdT5kKyFgserECf9dUBuVnnUR2n2u7p8MXYDXUo1z41YQwdYKqqvHEZDJkmNaDb5N4rpM6Eh2hnCg3TMTXu",
  "key1": "49qHK3d6HwZEqovF3mCLh4kywF8KmQj3yApfP6mu8PGXXFTEGj9TLNm9ZWTYMGBo7SYz9uJF3aWJR2TQmtS5ANU3",
  "key2": "N4176si9W3bQTVnQzrMtprcvyEcNFf4dTQwnqj5viFpm6DGonshXZAqb6y3bkXGwoVAhwqc4XveevLPFYzysCZm",
  "key3": "5DQXvAMP4vMFKK5FjAxDymMeV2nMFQs8JmsswUMZWa1V3kGr9ziow6LqxrFYXRtps8NMhVbbLV99HZ8wuze9kk6c",
  "key4": "4m8cpSwEz1x2rFH4cKERHQHfGWn2ZqFBGzunwqLc2it9nFSERZ8ThkRjqwQMye3mfbCx5FZWp1rejd6bWZ9vBXWj",
  "key5": "2bVZgx1fR1S4RqakFt8zKnBPgNTbjCmbS7B4wW8DKhdhtwag8PZA1WmpkyiU7ohEzkpuZFUn2B8bqdxogUqebHjs",
  "key6": "42u31Cq21pmUrxNpAdFGtQeoQcmWQBMsjaHxcXuvigWKq8ngHMf7waWytnGdwrCFvm2LvaQCaFiDRfdYr4fXj2xZ",
  "key7": "5hPk1HEV3khbTBEzrpwy8xyPSWx81MecUyySeocQoX3NWapBwukTi23Qk3Drafbo3uPs7a88u1AyN2GvR6v2GZha",
  "key8": "439BenGJi5Fdeq9ArcAwsGereKJxMYM8ncumjtkwVzy7oN6uHeyfPbbG17U1EErXJVGeNbsDzHgsNhFmtFx3UWj9",
  "key9": "299f8myMRM2C322X4UqLCqo3vkzYnF15qe67FHDE8qbTGSEXYTnpPdDveS2Cb3f5tc5thL5i5S7pF2bY21aGubFa",
  "key10": "eNmk7ZS9bYVAQ83vm1Z2XAcp1bQo51pzpmNfRKdQiH53zcpnJxERVP1279EvGfn7gWZnHP5y7LY1TU7HbvtgosC",
  "key11": "5Rt3uuGqEvhxd98wvNUSs2VytsWJFyTsKmczHV8L331MPSmCkQWKJdHovbzi7idfP82TWWStctVo4fxPXhJHt7Wc",
  "key12": "3CsC2pdS3tb6zmAFEGtkeZGBCFBK6budPQr87BJMHgscRtUPZvKQ6YNgLp9RTb3Q12j2cUCGC2THwrXHWzcfNsSx",
  "key13": "26wBRAkV2dTNAk9VyqtArkvBUgUFprykVsztMQs8G93wEChayb4qS5fz4ZjUA15oC3P8kfHfNJAB5cGxpUqfT15w",
  "key14": "47veVP3UPn4xMDDDhnKiaNZBEoEQQDFB6oqjw1ZUWLPnqPinQikvp38bqndqzpSF8DVzrs64GKHsoHwZDZuJvJqE",
  "key15": "2Zj5jHvLbcVYGDRuJTh6sQ4GqMcz84ZEcSDGLw17tFE8AkFRiCCvyJR3eCuHWNkit6ox2kpMqwBstXuwEc2PYcFD",
  "key16": "2Fni8FEBzKiW799dHSUSLpriv2ZZ44isabsRVuC2gZda5xHq5H2BHbuqf1f54czhvBr7M6dqYWpDMz2mZb3kHZZH",
  "key17": "JokCy8umzHpvRvn5V86MdtVKbchnVm7mwctoP79RnjBPD7RLs8825kxYYuERNaeKCRK5y5bG6V1GHNXNnm38WXX",
  "key18": "54FvneHeiYdTnmQBDbsb6iXjV9PTt9azkRvb9Q1aFhw1PhuLwmmZXGHSdrJbJxKSP1LshuMeeRFrHHNwjTrWtFhm",
  "key19": "3Em3dqfVrH4aY3QW58xyDg8ZH3Wvj3ingPz4KAKgBtGwGjaxJfrprESqX6yz8zQgFDefx848qC4aAqGWrwhyeskZ",
  "key20": "3WUdPqcUDu3T8aEbrQJ45YSnYeBgf8T7cN3Te5R9PZiKNzwrbERvKMHDBDDfUpVGJTViV3pDJxNyjQUL2B7GwW3s",
  "key21": "JqE3t4J98aVX2ZAbjty2oCfAaoSywa5gAVPiQGpS58M5S77YgkpdBD1FwN1M7Vwpan7vjDJBWvNdumcAFRRQC9E",
  "key22": "2t2MLCr8ER6eK2RARfdVDuVZasUt6tuR6CiQ2mXjXPVtUWAy3gVXvCZoRFSLKBSUFryZ22f8W1YGudtF5Mt3GiRi",
  "key23": "5vqq6RFhkniTAiwgyv3KFvMJBC1PCNLH5D25S7xoi7owu9dSuWoxLfdR5e9tFoscbpGSW5ZPmW8BshHfpkSSZRA3",
  "key24": "4xEejKcWBc7KzsmTWCVB4GtZAbr3rv5q5VuZbfjAL4Mcgw8MwtyVW5Dxo4Dv631puYLrMAWBhHtRyRhM3s9P4HWS",
  "key25": "5RthzUnCwbXhgF8MEvvLvVXWRRpTD1AJyYbJC3siBQk9zB7bB7TbhmXEvbVttUdskzYVR5z7AnBFJE7mYsHv5j5Y",
  "key26": "4omsq7EgfszWU3ovAuscnaidLGtENhq3mXxScMzaftSjVSQrYuP9B2nD344LCug8CfiZ9vhcz3Nede7NK8B9UjDr",
  "key27": "EA2khvGE641RednhAgnmshTYgezM8zCrSnz1Pu2s3J2SmJTYszLjJkfNUG766MNSUGZjh3dJ5bE5soqr11oLw4i",
  "key28": "3XJ2zSad2tRtSL4E9aMbVvU15xA2dWZJaTM1dHcSBNpNMysZu4qmAwDWTKXXkhHbazs2yKuZ82uHFuMDvqfea3fq",
  "key29": "4Q4pBF8kavCmqaF3Kma6duP6BE7LeQRRH9z3iMGqRhXuokfEuz9bJ8GrA2gTVQAMsCdDnSdoLbGjgF94DKbZi5fS",
  "key30": "3KLjKu8Dw1mrxbvrVw7NUAqFyyq4X9FWVPMFJ7KYmgAQRRgb28yNNfMVbVjcAnHDTY62q2hKmi2L1E5j5djhEJ5o",
  "key31": "5x9QzdRyG3xH75We4NoHDGr2286VXGARRHLr2pLZuMsTuqquknkdfQmAvXpG3VoEPB61qzdkCvJM2hz6Q2ba8yqe",
  "key32": "5F9jKXtPzfHiXssMv1ZEZEMmUYsSfM6EjNkhXATWKovya3JhTjuVn3Fm3R7KuaJ3D2wzctB9stxQywpwy27mnvBp",
  "key33": "3dkorEQYfLwdxYSZ293VQN38zMm5rxS18YoNUVrqMZiDSMmijcEXVbJu4TnzRSmTSfgybwpBu8R8yer4LMW3tDrH",
  "key34": "53m9gd77giFt64HUVAyRZZCfFicqSR7mSTyR5hy7orAQYSWUDFgR6gNYTMkfTo8FZbwqJ955mDHbixc1Rv6yNcuH",
  "key35": "3MWHQizm8qwi1cV7c6RD9QNZwfM7qn4K2eKBepAaihrvjWng4PV9FAmExZcag1sJ19q9PkJrL8hEjV9AKC2f8Qki",
  "key36": "4S9iWbtFQ9yWS7br68Czt3tHdJwEhrXs1DkfApfBKpywQxaA1n5D4Rwb2PyYkXkSiX2EeECb3jCtax82CUbzLETJ",
  "key37": "LRJBcuXin48peemNy8TEaSTEvfDBTCkh2Bm9UV7RRnuCF8rdTpEUmuriGhQYZYGxLehbLm5bXcLDPJrWY8dn8iR",
  "key38": "3Hi5zzexvoZBJhjRXruUaQtZHu71Z4AeEpxpTAABKySuvryyfnYmMTN12qTYnoZbPeR3E9GdXu8JvfUszL7sY8T8",
  "key39": "3P96DmfW4U7KBq8L83WybvcRWYfU8akbettsBPAibjK1EHLjEqjdCPQLCD7jecu9M13gtKJJGnuGF137a7DfWXnw",
  "key40": "3q4Ykhg3FPrEnczc11RNdSdGC9id4ZRzA4DHUf6p3f1VhTeJKBWWQqN4E9wV3oJG7seaEETqG11DLC6sfrFTQa3o",
  "key41": "5NzJfH8puC5HTnCeYg1mxqurqUoWhLsBDuYm5ysUWu99YaSzoNCxsdcpwNrSg9Ds6SFLjVx394bNftsfUHN2wi4y",
  "key42": "3cCLTjCeU7N2P9ijo9yESzpCkx9pgte79bqfPSSfyUpyCG7hTobovekxLJ1H6q4imMhm3sQq22jbtfU7hqVAHXoP",
  "key43": "KEuAXTPEDghYKtjLAYBKbbs9gJVRVtdzGwtQAxEZgggQm3jfeiJAPxLmt6keWG9URx8oMF7xUrR2sGDums2ZAQ8",
  "key44": "24irjTd6kYsAByDERK4ENb9YXsWUx2evh5ENyNCHf6QAB3ZK2jPPE8vR9tdaK7BHtTuaRH32dbm4QkuhangiW33m",
  "key45": "4SXCs5716yFicr6Xqsu9tPi6Qq3tz2RwnNz8EDFcHPaR7TaFpdqJCuUeuvf8CLbiG3CPFvJzcb6eXanSPk1qEEA6",
  "key46": "34p54nd2Afg36LRhr3MJ6Agx7tapx1roko3E8umNCiRkY5qaur9jFakveJP4TFhp3YDA2TiZub5wihhE5mAq9KTt",
  "key47": "3GB4LPeyfbJ9WrkMAFuWBjVJmET4h1PGNFzyhxvVzVQrMDrtmLcW2EfPVUX3oiNizohsEAza4ZtCUJnHkuCpUJaD",
  "key48": "2GvaLkBPEiws4Mnw6y91V5MxxSostJtzKh9F2vjMu3na6J86CFvJrkgxFHbfhFMsPHcd4xyRWmWvtwohaHtd47eq"
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
