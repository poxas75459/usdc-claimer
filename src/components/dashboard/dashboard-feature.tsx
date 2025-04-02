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
    "3b4FiLBknkfDHe9Rq8pEYsRRuzQ3Bx1WVkJut3oGJr1PuymWF77s8HBkLNN5AbXugfHrcnFzHT4mP9GCzBa4UNQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31bFTHXeswgBeLRk3BKPQ7B7o53EFh2j43qbE7aQcCJo5xABoagVy4113duY16HHvwWfo8D8ZufZZagVwm3xTMfn",
  "key1": "5syVymZLsPLEWAQSsDS9mtUQHBpGi8fj5oHA2ztDnSFYakxgK2zWx2eMrfsMba8ztPdcVhiG2eCcpdYAJwNo2wLg",
  "key2": "4QVDjugwQxxbjarqk3FybepN99ZWbayETar1smBZWMfAJfZnVs2eqD6yLZ77UheKknVrmMtUdqtiT2332NShX6Xf",
  "key3": "5EvDikJJSunGxhMunSdU4EmhFPPqhmrJ1owJEZ1tEGHjhEpMtZa2wEukC224NcDsMsaP2AXwvVKeZ3NfV5CKRAbK",
  "key4": "5d1q3x2Apka2AkGcY9wh4LyRYDkJqUMiBgKemsoTWC2ZckrjYYoo3uRzfgU4CvJTa6pYbFJD6bXY3i6Es8ceu6PF",
  "key5": "5pqnqVoydz92GNRcEn9jhfqXUWWkNDs2ZkqRHR1SYz4m4AqbfpyM5pvEx4sj8MhVmBzqQjKAKvvnmHgtVz8c1Mhv",
  "key6": "57X4n561F9fXTbNeqGi3myqBdhb11XspVCApXosx2byDz552rmvewDikpTU9J9Lr4eYemACwwbEFcrjvcaw1DGk9",
  "key7": "4GTSe2vFpWcqRcUat6VovZ59uFV8h5Qa8yxyFMeSP11TaX6jMjXsUmzNnch9wRxJxHN8FeMicwXca5yqbLWJV6b4",
  "key8": "26ZBbXN3mdYx16gb9Eayj3bF9ACU2Xb2sdc9DY4RdNuLSuzhVrCV7ffZKA1Ds6HWwige4aXiT7zXFLyf3rVbUm5L",
  "key9": "5SZWqP4orYFkYtfZHRrcfQWWHbVDk5taB2cp8peFc9aiEyWUraYnapn1jBHwxAYc8gBVZkfMNwSNcer3chWNG3XX",
  "key10": "5LYBrB9AJFjmqCGuLavLT3ASjMXgsxfqDkfXXrjBjyzKMpMz2MVwrTCD5dr5vw612NhC3d4g4tUPZFwmGApN6UxX",
  "key11": "b4qCt7whpXRZVSUhvf5mX9YEeqzn5vQk35rVQbBvpeEhaM7raqHC3nk1vhYU1Lik5x48y2pVE8k2VC6j7dhSsPA",
  "key12": "4WJgkAjxCwPfbMq73nUX8Ao9HGr1zEjk3nQ4C866e32PFsc45PrpHJ6dB3SEUutp82v1ewqUXWPnHuM5HLWD5Zwe",
  "key13": "4K5RYXio38egNabZtR5i9opsZREAM1PaciruMcTBSe8zEHWHTRDJsoci1wKPqN4TzcqDvK2HdXgWptXurBBbDUsB",
  "key14": "2HrcdXS8P5ekM4e6HaR8BXtVp1jTEPG1yB2LjKS4zBUGb1meodA4Nb8nEDoWm6x9YQQiAYH53qwZWVeTic6kmXiX",
  "key15": "u1eEzGEYivqyHewJBRUNmWiF18cbWmRa8iaPYgEfLamrXSVNUyoW475gkd84MBTHcajEmyebEJ6uSHcv7GagYYu",
  "key16": "4Akv47TZmr8KTSsqhoAbgxcLL5FB71KKHXbeTfSppHwggMLVXUJM5HPHqpvhAsEJtanJnxesKptWpsGLPyzekyN9",
  "key17": "5Gqi95AJt16ZiFRFfpNuGQkxLNrixFXqyMB9NgLcbLRd7PBxcffGJkQuncXEquPMQTcmfC8oqY6fBLE1mBRPKS8N",
  "key18": "2rnCnaEuocSNfbuFZooLbeDb9f7ydLATPweMkHRduV8xpUGq43i2nz4vHaVojTmxVviWMCXCfqCx91ivVQZdeKkj",
  "key19": "2G3imJGPwxdSxCs9hwXXTve3VXkovdzgpWKnn4L47tncQUijWQ923FjiNNU2ecALqexPTzLffwMpxWhtVvF8XFnE",
  "key20": "3WQkNZiJhJm4EsbFrJm7qiy7wJwd3qnpu4eUVQVeKxMSPBekt2soXjy9g7btY9aFzbhpX8yNessFuRPC3Ui9Dqvo",
  "key21": "VLnYftuJzXjGAz5WxMsduxMBYMhFiHZ247SeagH5sv3n5w9GCB57D5vUjrtniVqd8gySkiPm7bPhkV689PfXu4J",
  "key22": "yq77YTxRX71za4UV1rVaxZCVrU1oF12TNy67fP7xsH8vc2RH6TnqCTdJvKzQ6zGZTmATutpkmrCB6nRP1P97zFv",
  "key23": "3N8yK76ZcT6TeWRFntUPAngQSim2bWWZKQ5hzxJsFPCddk5qQb5zfuANuTjMcHoCJ1UAzZmeyaSA7ncvLRFpA5wD",
  "key24": "2ExHRWomfHu3vRUogncGGJ1aewawWRCeUWsevhkSdf6gx5LKb96JhvMhhsDucfgNwph7ya9qPAxAxHcWXK3ZfgYh",
  "key25": "5sio32qqSacvSwsHJe9RDCN1PNZaEAuoAbZKKALrNMNmJgYHgsUYNvLu11Fua3nGDMEwCiLTiWzNaHdbgV6R4q1m",
  "key26": "2iSqPsVqvyVpQSUgjJUj2tiuvSEqtJ12Qcc4BFmiS9r3jciDZJ1EUbAbXsA2anVAuUNLNRivLPRPZFzAUfrqA1PG",
  "key27": "5TKy7ubqcgiKbbbasYUDMzRxyYd4bb8VrJoVG4DvgVfPtWMRCNwZ7TcfobSnu6wA156d585bPXdMBDDjeEqEgQ7c",
  "key28": "4JwAAnBUo9tQNHwTAaAmTQFLkRdfnA8ENT4ynJHe4n1pT8M9am6W8rGCLQMinbkYoBg1dV8t3irAZmNaiUogPxY7",
  "key29": "2bak3t7bB8RSWySwWnirgFcZE9zFGBXkdFpJbpkk7NqGuCyfQsTXXffhEAMcz3LnFS9duWEgXXqf6rUkexCyiigL",
  "key30": "RcuPYjJnvxFmPY4y7sTDDGTMtqmToKuD8V9VvTC3CWJspWqsRFhVHsXrV2smUaVFBCW9HmsocfADvvdRnDEmt4e",
  "key31": "3F7vtXCYqUisJrAQudbsPY1hZtscG5MH5nThm8KLatcQtbXhR15Znk4keCN3PHjwGti8nKC53njJyZERAsFdiBuR",
  "key32": "3PiscWbnSpk1zLeKSM84JJQHSMvMVnDTxKT4uvN2hXRX2z5cYQYLLG1jejP5EU6Jx3JPY9fLHNbGiA23fY2AHCgu",
  "key33": "4MRAgZBprXDeBeS2Dub2Gm1XxE8mKfXnTndzRnAi5roKXnyQvvsUZkSE2CtRMNkK8y8VBemojV3xtzpTWJHANjzX",
  "key34": "2XPfD2ffxAMXsHNZZFqjdu6C566njXiyYjrxfXLa8A6ejPQB7FcKhLWrVE42biZ8LF9NyieMUGAShCFbdBGFTdJ8",
  "key35": "3ffu9XjYCFKW5AoZGamXDUqJPX824yAjoLEppejnLhkWhFajVxsjivxQSHJLWCitopEE52P5Wsj6JnyCgHbWM8Rx",
  "key36": "4uPVyPSJYfPd3csMsAHhHhVshqUL1aEmx5EBFrsEjda95H5VtBxpXSEzQuXtPYHAmCf1a7yFFVGxxkVSVfzJE63f",
  "key37": "5qsiMskLMxWyZtACjNm9MqQVgNXiSNHynDrWKPxzTRYs9cZNjM3UCaDudNjETD9GKRhV4Twvo9ukqCpdfUYABo68",
  "key38": "3RUccHGek7BKsbYLY4BBaABBwgFdigG97XQnNk3hp2zCL1XvETtFCHuNGYCWDiM7X8ypwMZnceqVZBztHL8N7fVN",
  "key39": "Mv24BC3foZEBwS6K5mHgF1VUE9WCx6VN8sa5ZP9oMpbCyyYEQE1xeFPtVvfrKYiMG22Vmrn4FveQ6qNBFaUmcF4",
  "key40": "4BVxia9AkPpRmg5JrQsWk3miosoSY5m1qhweJ6Ft2TENsXmKWQPRLfpzaavUWH9PSij9aom8rRvj65wSjC95AZAP",
  "key41": "5fE2Az8MMNcjHp9gmsb9XNG6N3zgxy6zBvRugJKWWgBxVmi93dhpQEAr2L24y5eWRRY1DWE7iUKBgEPTLhey8oKo",
  "key42": "2iDGbV5PcspnnwmMquMMUTmwca5oDcKd8WuKDwZUSHwDsxvNEaeVG8H8eQe8niUGzSnFmvk7LUK51XDjRysB7CmK",
  "key43": "uhtXUdeLLM6Yeg1xyvo1gwxJrzywe2EdY8nrGEgpcpWcygUKoUMyqUSYG67frMfKnjp8Y46WGCmyFa3vwAkS2BU",
  "key44": "3jFojxco7eg3BiNUn44FcPT6JxHx3RpSXMPESKZnaeMGQFLYSgNeyTbVC4WuT6zrthLkWSzppA5VrvjNynypD3ib",
  "key45": "2mVJpXzL4u1irkMkUKACX5WjVMNi23XnDddQ4yniFQJ2vpLPvALDDyW2VVUpj1gbTmCr2WzsqkVvLmCcobHAdCvC"
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
