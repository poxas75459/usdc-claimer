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
    "5MWFtqSuJBkb3xwm9NbvuhK2YP7S1JrxvshJyqhjwgKAMpdLuDDzHi7KXsQfttiFjoBKarUNQqYcFuFiycuwvmks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UZeHE6MPxG923TTHMWonxEw1wKqv4g1s15wn6JwoXSb2K44sQcoBXh5XkHrvcJV2P3LPiZxPYRkCRA1NAFyM3ap",
  "key1": "3g6Jne1Cg1mFVB9souEvcpAx4jV8YMzzYCprWzzMfPm7Bqjy3jtHSY1KSM4iD2oDDtCZcN2A1DdK4icLvpM7KXqF",
  "key2": "33XGLagmhGcvJ4HeYsb6Xvefm9426345P9UMUKFTgT3HVvwje9Jp2W3UedsNE9bC9F8wjd4FzQUefi3UwttELPJQ",
  "key3": "5YDWkQJUeUbn3BfUszXwFCjsE4hgAvZp8ViehkmuVHmrogXk9bUsZPZsYigTXSVkUrQFsVekiFmwEdPfiZujT3Gk",
  "key4": "sbjCnAYmJDpeuLXBXjtfrNd1jFa2xUPxVUV5sCLaXqSDjL6sfxpf6YEk1yXBR4SYzmmn47m8y36eNACZriY26VH",
  "key5": "3DQNWtXcZFhy6KCg8Qrb62xP3gcUpisJUS4Ua544tHTrQ6yPzJLimHvt8NxnpLQhGgdv47tuokBvDxQePUreFnZG",
  "key6": "2HXaTU6LsYvgJodPryhvK5NWtSiU9hL8af9jvmkAcw56mbgfEJRgbNsDHsWAcEnGASNQpd1mzrbL12P1qc6ZxuQV",
  "key7": "3gBWGK8wqUzH5nTppKE9GmonjYBbv9LFASMSm72jGmjRLyVoU9F1d7cCTQrQDqxqUERtSdPikqekX12JMVzymf65",
  "key8": "63V7qkS9zKBHpFjXq2Y6s8PcMETVD1DomPczs3NJGqckwAZysM7U694eSvv8AE5vxWxgxKeWXRRXtpwU7mBdXfzR",
  "key9": "5LDAfYfhDUufgXfGg4KVgNMU5mLRvahfQEhVoyfmJfn1We2ghMTiMtAQ69imfuWUH5uJLSAsttgAUV8ixPaeFSzx",
  "key10": "48SGGbVtvXCtUYavxVg3EGzVeoPV4QMzne6nh7KCEvrjMXFLhQxEVQhb3bWupCpeGAbMBoQsrFK4MZy549LzJpVx",
  "key11": "3B4V3cTT1y5ez1Dk1VF48NhiE9rkFs8Y2dumhK89FcH2GAz7kawTPnJY6YoAP7JWpz3dvSLpryee12pt7mQxzoJw",
  "key12": "2eWokTpcpQvKoesquTkkw3bQGwwxaGoWnZkk6QAvKzPfB9EhrubTVyPSfDmhj8cDAvH4pNr73mDF5Y1KnuHeENmM",
  "key13": "4X5JdHK3NFn57Wq5xbysRiN9QJj4om5tjLVk1Mowb67Q7Y9MqGVNbPdNGgQESyKfbvaRRKrqmfPz7f9s3a8daZVm",
  "key14": "5AYdXFLrQ5ZoyBRBnCzKtMcQGnWJK29BpYEmXbrRDtFiuBArueEoAHb77Xzxz6a241CiJhwEt6dbJxPWmYubLh8d",
  "key15": "5UHyB3tf6T2eDLy4Fnqevv92r3KQSxFpZuLH9GbZBD3EbTThTtNk5NHdTX5S7xyTWr4Rv9jpZD9P5dhuFux2Kdzc",
  "key16": "4iaxuM4dENQkktHKM6Hjf5EBAD2R4KArvaA3V6BoZVqjt1uddTEY5kBsdzh6cgfWjr4uDF4m1HXqKJytGJak4cak",
  "key17": "2XVDf3o4oiS6q4fcvNrNS1i4gsg3kCnwghfPUtJLJwohfyAEUYNxryVpB56RPS5q7cb2pL1np9ZiU9Ga3NadsHy9",
  "key18": "tzA545sTjxA8uRtE4YxnoEF8YcVEUdavLNXy7Ct4kDpCtAwAkBHXJHZJhjiViM4mJhPYS79WkuH6wqfmEYBByRq",
  "key19": "63PESpEgJVUHRLYtpj8fjCzdiWMmEACk6hm3gpQvhMiY4XtGqwhffG9M1YM6e7ZXhCrDtpdaPjo1Di9nmWmeLWkG",
  "key20": "4rgg52FcfAMvSW3KWKUXmrfZtV2evdT2tbZvFAxt2Y2FstEZFsVaGb94r69FDtM6rVcfEf1RubGAi8ZN5GHYsaAV",
  "key21": "2aAoBZC7doMyyewzWEjjjTMdW8H7smXpSTwQNYxWSpmwiG4JqJU22jXBWMjjt6Sr1dgeiNQVvZEyCZVJV4VVSePd",
  "key22": "3JpN2zmNMHaphLZc2FpZupzCLyTD2diMgA7RpLzmdYnmZ3etMHPMvXp8H1WYBccHPLJjGBg6Y4FPXugNkSLVobf8",
  "key23": "4n8YtsxC1aSeWh6DxQc1FinpSJKspwHsD2irpYSgx9UaE36NDVDHRn6BwmPYbMchZpfqwq8LaYUWbJB6zV2Yrhfo",
  "key24": "4Qx7DqVezAqRNoJjifXLx1fq67odr5G5zyD48DT1ZxU1aJve7R8281XjTbE6LkpQF6rKrxaDrz2VGFxmuVgPu9NK",
  "key25": "TTindctbcES8xofGuXTxhwHaqcS2Nb2nLwmQs9fSSXhdnpcdkeSjTuWrk3MZgsYs6kcdgG2BB8Bx5H3HS6jNtVK",
  "key26": "2vH3YXovQ61ttEwGrLzeHAFHzCDT7ALkXb9E4Xwckxdt2UznjDg9mBEPMo7nkD1kJBu56NT7RSv1kh29fBWmFzDw",
  "key27": "3yhCYg8X9jCGBzh9ee53RESQcmBn1j8sw28ixYuuUGfPHLjGnTymCmHtPEM8qzuCKqrNX3fGaqDGQxTPnqPbakco",
  "key28": "4f786YQsiieJGL7dhKfmAzE9i2FkzHxGtpDtQfm29N4AQ2JTFCZepWV87tWeANpS7JXpUL9zzKWUfAJZY18cZvXX",
  "key29": "3beP6uYWmsAYG974jms6CBGyy2cAxbJ7JoZ2eVJUtFUokXHF6QV8FRaqD54YdEqjP8aAkEQGNbuAmw4k1mGqNaVo",
  "key30": "37XCESqBExviqkYtUjimTdBTFiLCFrjqM2A2mtHKNc9QEke63cg33hV4VbKCUwKrp68WhLBmU3LmqkMGV6aHAZve",
  "key31": "5znMne2x3DDWaqZWzNML3oVXyfJg9ioaMqjerFdijs9fw1mCCxfUZf4wDK4ye18ikx2vCZPRx5MuWiG5wgzdfwj6",
  "key32": "3wv67XsDaaXhKrxseXe2Lpfzbk24HFeYNViE995x6zTRzS5nieVSBqbbGmEPf36pA2WRhGqoZsTfscFesVZYiXKx",
  "key33": "575BpY1L5jk7ukfqWQfT2BbWsfSdvtNYZtk3rEr75YWPdBA4bbGydirGbPNnDppQsQByPPBfQDC3rx9P1MAqCy1x",
  "key34": "2monEATPgYnmQjPFDY7HgZLALRHDpTdPpsMqNXeYidGSNmDtxUFjpEUCRmfn79AMtybdXGztAuzWXDzDJ6qUv78y",
  "key35": "329ku1fQ18tgixmjEk2xbVVp3DtzVFZgTvnA1S431XmPSv8MxNnMYanRg2EpQTe5f8RKXAU8PZjqeY3wAjiqVyMQ",
  "key36": "3XicYQeDGLWWrS93g24oNwwN48KXAr7qeLE81yrGF8m7YFdMp4JUkBM2dACQmvUhVu4QGUbzafYpNMhmVykpPY3o",
  "key37": "3VnyY7iQSGtZBW8MwkBTDz6pbGPqfgnVjWD482456RzuyGcVVEigzynDZWB9xDcDtLuhA17DwQ6HV8uWnZgtFN8d",
  "key38": "5bBP8GWaj1e93Hkt7pSzGecok7m5Q8cFMprAB5oTetrS7xULHZubtsFnE5kTSya9fSBcBXtQxne9BuUqpAifCr2H",
  "key39": "3mBKjHjVKXU8SXJL5PymK8TbvyYyTzG7w1qKDpZXH1iWuMzWdes3DLZrdyyw7QoPnpwRJMWDdTpRqPdPMPDAP7jS",
  "key40": "3BzCjjsaypACQoXdaZJ1NCXdAvEjHsNx4csKFzCzPyk7ezeJdrw5XMX73Df7cxMeSXLncQjhq6BdQi72QJSzbJ9Y",
  "key41": "365U94RDTvCUBTQ29NCzQfuvYA14kWefS6dHqMy7gd7iG7kAgXQeQW35GkvAvCekyKfTjn5SvBudtFj1LL26H4tV",
  "key42": "BPu88rc134s1fGM93Gtb5Xam7qbBkhs3ZU6Etm58sUVgbZsGuF9WmLJN7iZXfAQ6zMuqHWGpQzx2SCB4picPvcv",
  "key43": "663e1YGZzYNC6ezfto3kwpTz78FFHvrgDvqKXrqFbFw2RaYAsmaSCZZ9Bx49bA52wPEgHP5ukumj98PWi3UnD2LJ",
  "key44": "5wYkeNkGCBEXfM4PgXEGQEjvCSVqmJnR4awWcsgTNPezkV7YRyD4ChZZbDQAjirdMXhGcr4Ci9To4FgnYqrH1iXB"
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
