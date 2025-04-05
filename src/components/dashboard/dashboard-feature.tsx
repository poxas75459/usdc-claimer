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
    "3PCDDYFGURXe33DRgqLtKqDkmA8jftb2vsyGreeRSYnNgsJgoWkG2Pf2zEpHuK1ww5tJCRMu6gQtfhL6ooGQL95w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zRmLWBd7tHP7Udi9vR3reEqLRVb7TPfzXsEDF9ky6P9PuJnSmoboPQWQAdiN99oVVCk6SJfAHb8z9Ecw4MfNAr2",
  "key1": "5JLbzz9q3RiSDAb3Zy6f1cWC1n5hvUjEBUGTMTVrSW4yJidmrsq738jPfGbBs3gjBPwfW4x34JcdCqZmcm4ef1Jv",
  "key2": "dLHJDSx39sJcEfkainFv2ie1dyRHTc81QAa3jufbj3GdYFWmwFnDSMVLJC9RiCZkja9qbVLXhS1qFsHgUtLzCRP",
  "key3": "4VDJam7MjK8EH5r68Vfpc4azN8rpFLcAWn9xfvfLBG7XngMeSNq4X1VX4ERZBGzWRqC4E3FvPaVS5CDHtgk6MqzZ",
  "key4": "5S6ygC17N9HRDW5yY6wejSR3hJmXQnS8PgkFzgGrRbtszGp9eVxPL5CtnD2vxknt6ViBV675ug4QNQAN9PnK7KkY",
  "key5": "5uin8pNPuJvxS1QqVSZ72Hsxgyb7mH5Z23Yjuk6To3LjdzRmXuP1qm6vVTWDcCjGWt7L2mpJa5S1p1N4kaMzsGFh",
  "key6": "jLUwFPSmYA9Ds5VbowS82Q3CALpZVSkpVG4FGjyoVhv4HmkYn5Fuo8jgTz1jVGmkB9cqSB9xcEkiRuRSR2AH8W8",
  "key7": "HRk7EBrvM2rarnZZkkgaEKu5i7zr97wCAvRGLGMMm5NDoftie8vtFGMHjRpiaTPDrci5QFRJ7haoEqamY25QrPV",
  "key8": "2awHQY6RwFfA7soFWPWvZ8xiDWaVHtRzuMYqCmnMFzdd1w3hvngwn1peFgKczHN2aMBs25YGE76AYtDehqGePwQT",
  "key9": "59CEapdtzN6ojPQ3Ei1x8tDjvF4CFEkRToAcddLVha6uaR6nvNFE8yC8pbBpRSeF55tLmX3ATJZRPj2ZRCeDkef5",
  "key10": "rKUsMD6EvTJ1G8hXhZ5YrTpN2u1v4A2VEjmPtFhQm171oDZY5ALaGrHCC8hRt1vmF3CupnM29esS6iBEvpa654g",
  "key11": "2cAQC2CirKVzJ6sR95G22SVofBgtHPc8E4UFXgSv5kCjjyk198Hz2LU6DSf7pvoHDurPmPCEVwnnDfvScyvK5xmL",
  "key12": "3z2YjvmhD9HSXeYasXVDjRh6QsFMc3dzcjMxx9hjUdvBbPw64YgbjK4GZ1eUNM8Gyrj2GTW9oq4MKw8Sg2JHvSoU",
  "key13": "27DFvATBuVmjzFmiHANLcq8P7gDPoc3s6tWqg7KkRhDCyrViBHX2NvYJVPqBTdqDbwPCD9JmJV9yo7Dr2LbtpkNw",
  "key14": "5rogXjARHh6QRvMoWwjKuow72XvudqwR6eesF87aLtjA1HtxuLXFugBWRDRmr1WaW48a2CK87haHfiEtjiKca2tk",
  "key15": "4zArevUfNweishQA9NyvVbBzJofC3LNoecp2bZVH7fzmVSxUdsGpjaYjZhJqFfkDXVGcRvbuf8XwgkVGTSZwdYs8",
  "key16": "4GewukxMuGtsbYvZfT4XF8gJp5GLeCcrHp28oRPKrsHWzksDoHmFxoEn8fksrY4zeaUavz5YKF8A2mBBb15MbbPN",
  "key17": "38ArnUKpELwjpkTZ4TxKC32ZbsvPJX1PbpNrUtmKuVGVJZPW4H2M9N5fFsXP9bsSXKE8dyq6x3znkJ6Dxf99kXJG",
  "key18": "qSCFe74w2kkRHvWCst37JQT1d8VmXpCkchKsf15oeB7i9FeySvodJokbGMnGHD3KcVCHS91fqcyUWaXQz9P9bKU",
  "key19": "5EaMar2jLdpihEGR4gtEKqW8UEJmXnKmM9LrM9k95shhaaU2b9aTCoH8ZozUZvHwn3jvoC9utqivZ3vaiRhv5h39",
  "key20": "4VVo77pjTqs2W5dCpmycEicbK6ga8ukrYcunSQapcFicKSvWhj2DX8EJJ5tEKXUbJZ2yK2rutZK4vxPBC2tSPY8G",
  "key21": "4osL2bEfDay3fVnyvGm8j13z1FuJre7xXSG4XkPbMoSn8Evc191qW697Lt3pnzkPzQ7pxRWPC4b1fYJVAYSPYabx",
  "key22": "41D9Jc8V1Ji2YkUhhTa61W942K32iU2mA2r9mHdQce7cue6tqmcxVXzfdb2Mahd7hgDFkrTfGYRNaVXif55PSbz8",
  "key23": "2c3JvzXznaNYk5js9R94H3KEnDLEq1SKC7fggtY1wLArhE7M5TQfmKUJogBvHqYrcc3ovoBepLX98n9DRuPu7PyU",
  "key24": "i3VpjrpLXz5UQLwnfbfeFEUth4A6PuiiotyqqhVDiRU9mYXhet6vYm56yYGn59tpPXcScgk2fj6KyXpQeqYs4Eq",
  "key25": "5VYh1HT6xBa496aFZcEKSLqur2k8Fvh6DUxDFg9h9Thc8yhsAUW6k2F2dFg56FudsE2YaqPKCvTFMAQ5vZESbuuA",
  "key26": "2A2PvqYSJZAfuD6EyezJK4rRbMGmSqnazhsbC3yhtCiA57pGjb47RrSmoFtm2bRvo4MnsnA349ftZNhoP5uUWsLH",
  "key27": "2FM2gbS3QJmEwTRLGvTKZVEVn6twBz9C9ExRTyYswU8xJspk5YurMpob7EqxFmz7LZYj4VUqGg7uzxcpdm9aGtDt",
  "key28": "23tcAWb3jcSpXhqnHMTYp1Zx6dEbUue24Ure7m7DqsraPkzyxzR6FYoMN9dDn2vexXXAB4L8XQjX4pBspiUTGB1b",
  "key29": "3SRsrQTU8pYHLk72p7vsPaxU1yvP8ef4YCZmu5mA8Y4tSYij7hPnovpNJT1dq7qPgQhsYK3KEJTuRzEvB8bJMBsB",
  "key30": "3uvXNsRok8BcVx7miKpGAq5iWS7Dz4CK53Fw2yj76boHjC2zXeisGqybKBfPR8gYEwDbqSv5fo8e3uWWnvrkfgT4"
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
