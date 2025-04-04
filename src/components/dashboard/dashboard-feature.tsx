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
    "4r99eP6yYqf5gxtrKRJq13WissU4F9s73t7xK6GFy9kP8iZ5oKwMrVK45r6ramHR35iWLUavVequHfqdp6LvWf75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AjXiGzttT6WkP5jbCzmdJGq26REwSpigV7uemAqynJ5fAcjoxbd3ixN326xYq4U3VnLHBnngNsThn1xfghBVDtk",
  "key1": "5Qw2X78YLyJEaXNtfxmyQyK4sRLH7yxk2513vTcZFY7zgEJ4wgbd9cunnCJ6eRKsqPYUbSXK8ESCoCPVBsrpFR5C",
  "key2": "i2AkCfEe3Yh3Mvm1qEt63M2sTMeJasdVJjfQPg2M6DEWuKQohhAbyeMrbHVkxJHJNCbzGtyj88N4ZpZE6jZprRL",
  "key3": "tFAQ12SmEJQ7jm7e2KPAD1rJeRWYyoxnvAJVhqjx8kkQsXrScqqdPKfneB1aaQ2H4JBo9wTVkw4H1WaJvbTN75x",
  "key4": "3BXk7NGRCRGMaJwDmF6D9DsZY1KUBQBJc944T6qeAgdsroJ7SCDpidhELc9ZtgkHi8abM52oCtHrfs1x4oof4aEs",
  "key5": "reAMXantoLzZeod77VVDUsp9TJ67yrnKW6fLU4fd3WcHTgibZ1RgfWwPTETPqH243M9nNsXHcaxG4VNktnoA6QT",
  "key6": "2kSms6KTKTnJAtUS6EpuVvKFYamZPQDiLqPg4837sE5LTEEqmEWYZ18zCQ1cAZLnJWRk6hDKVdUXGbeaeLT8iPH4",
  "key7": "4whxbMoHVh2sPATUJvpKtcDa3niezwTPvuYfrWZzPwXz11Yvjpm44HV3LEiuwXDj7NjCREHEKCvEh79xypf5nVdS",
  "key8": "37JkWSSARST3EhnGE877JVEiXgCUBXy8YuBThyrsHywf1LBpfmgtpGXGyVBaamDkLnxybCwZGfuR89YUiqBqiLt2",
  "key9": "4FxmQgvA9a2vCvR1QuC9k2cVZFiBpQqHCLJyg4gARoXN2jGPCGbZn8yjzfehsQZf3vS2u6J77dWNB2oeANWA8DZi",
  "key10": "4WeYkTdAU3zPCU78PtZniJZzQJyLy1cLkNsECG6r4di6sUjBoBBuLkNQuzWd8cEoLRRbz2GQUAknfmmfXY8gUis4",
  "key11": "RtGP4f6CmGqTqE379JDTUuoQJqUeFCnzAuoZSALKikeJxVrPTdeHmZCMckiikLUNyhpopLpE54UtYKSxGHsbzLF",
  "key12": "4Synw1US4cjhNc2sHdhH25xvpVecBdQAi1wBXmu1aFfT8drxNW6ftns9JSdBm6jZk2CAYGbaCFmU8nrSJp7CdKTJ",
  "key13": "5rvDWrutjtzgpgyysBtgTEFHnG94UfWaqTHTWgc6eVYVBx521KQ6BDh66QjnzPY9uULZmiNP7oWWkbi8PberMUWS",
  "key14": "5CC1pyuckvS657PjABFvbrrpjRCzU4epwyrXDXJ5LsTyVFyXiuUWbJ2vJvZcCwTSPWHzaCTeZR1M1FfaKxVxrnwp",
  "key15": "2RFLvsSK69xDNEvrnCztA6A1btSTBzpzJoDvEs8GT8Hj1XwPDgs8yJmBKL955unruspfV6QDPDqxsKM8Mrqc1LAC",
  "key16": "5aDgY84n1DKqfHPGrjBY1N3YCmKmPp4QLRutPY9LigHNgRZxZQACyCUSKU4QMRixGpm2PhnkzD27kA88eowVrLgy",
  "key17": "3hPsW2h2ZNGoEWJFpyM421N6TaXxJeEd9GxJtrm76z5QTxRbL7iK1n8Gd3HExMYjFuahMKpGG5FabMt2DMz4smK8",
  "key18": "3G2MfVqcApzyeosHQDrDZLutkSydjiJ37gzp7PyW12GZopzW6w7fPUEw5MUopVewp1WrvUqD2Qrz9z8JVFTReRbB",
  "key19": "26L7bGoL1kdiUFvquug2qYFMCfK3aneS1VxMBoHtW5Pfbut2PTrDjhpjwDqZyU4X5X8xiE8tWN64Go15WDhR5K4A",
  "key20": "2qRtMqaEa2sxLnU3Lhu2hSMSRqZfDYh7yWWLSY5zYvbvrmNK6HeQiQxSmDLbhmzt6P1PZDMrHnQvb4sjvYbYFw8L",
  "key21": "WFAB3j6J823raeUzeTUwtJRY5fjNDmTyc2QiB8x41MUkATV2LkPHfQaAktNXfU4jjr2hh1mX8Siu7DxrresVU8D",
  "key22": "2xcLhQanijap22kAgzQFx9MAA6r4PB7G4MWS2o8u1qGakF5jAuQPYssJ1sW7xQMEp4WtMbacDBQ8zfgXTDa9XS16",
  "key23": "3AwjwvEezP1eJ8diEuLACca7zdqe4N9VGPp8FFhmWHvAduNZSYCXZTExoDYPoGVZRoobYSdrGrWiq5myyuEN41jm",
  "key24": "3tHnW4qoEkzMsZMopwtZ19Ajpj7qDWUD2Z82zWdgoMCDiC1qdSVUheW5nAnexWc45CgC997Ufft8kDpSynpULJmE",
  "key25": "3fx1MsKnrj5r5NCse9c4APkE1nHwPgjecrffaj9NmcVHB7Dsyh1urD5ksZUrjA37UdbxLznqRhtQxYTiY9EEajSE",
  "key26": "3tRi91o4GMcqpTic5ma5UWn5Ut13w42c1zaP62o3Vr1GtCNEPtKZ8wGaP5N5reyuLYUPt4NpH2saxra5FZJcd8rM",
  "key27": "5FioEp9NzGN4dT2fmNB2zQwduHLgP7qtMUf2vPdF5FbtGzMohciVgHMGNWxrcMuTxE2joEbs1Kd38aRVwcatuTYj",
  "key28": "3BHHvd8YU35Vd3hPXqM6yyQf2ZxQ8pcRJJYNqMMq1jPMekTRnppvgGETb5X8b8aLWKo4FcHSjoeCXCGhsfut7pzc",
  "key29": "5WQPSSQn25Cq6BFky9g8CWXWbRrFgoSjQ5No6ojCFQR6ZKs8wKLvUtPkg2N4TytCLC8U7AgGzYsvHynH3jTVDFSN",
  "key30": "nbsYeekAgzxgubQC1v277svcCQtjnr8H9BvGf5gsmQyocYdAPUFoLWt9Hj5e6QTW4KKjYxonpdxK6gyQf3tmoRi",
  "key31": "fT4KLWMS3ykfRe7CmHU6Z2KrE3ymHpakfdQnkj32qUtbAYSqsYAAA2Fd2qoFXirMn1bmLmWwhFaDtmWi1vu41vU",
  "key32": "483P4yywDpMTJejwxkGPXqm1FTRhdvSc3Pm2JkWmDRCKma33TB2jqzXPwcyTEV8ZjK8cNCzcawB1Dmx3cVQcww3X",
  "key33": "3fSii2ACgP1wdHXzHY4YJKfy9wNoegWLRPJcHCYG9P55E7gRgUdMQ52bLQadf19DCrBXsqEzpum6vofr6ZE1BZY7",
  "key34": "3YNSawexTq83JRJByi6cBefykp6AtGNhCCHXupTwtCME3QyWUU99n1fKWGkbr4EAMa4bqKLdSexZMZQaqK6exWpA",
  "key35": "3qdsXQ1jMmFG6awVT4Scw7p7wfoQw8EYCbcv5QRiRK9yrTa1EKD8QNJDBGrVXbDv6qmTfjPmpjzRAv7ZBrB1QcGf",
  "key36": "2QT3wXhbYuDj3VEiDAUQNfpEz3ujjV7jtVmMgsqnCJoQXiusG1p3CneK4PLdubH7zbkSvwaa4Sxs9ciaqWd5P9my",
  "key37": "5nou3siTQe5nMm8MrYWThMuKR1yCAJTEj9MUPKg1BkxGpy6PCuqXifde5hyyD9uc3tA7RXmy7BGQGTxH8iZCtq2C",
  "key38": "2dVa2Y7tQqc8i4SiRPjZEAsHJk3oJRFS39K4Rr8ANeqzq99PCkC7yvaPHCLrgBT4fAGKmz2eJQP1w53fM3PtdWZ2",
  "key39": "2czGYre4efrN4yQL97fjyRUgfUsX7jwzUG7a3ZjsLS6JPHbUwVdefdTCgMH1kXnW3oWWNfWUq69WsjYyW5Mg5Wrj",
  "key40": "qnj7rQWBWyceUUT2FDefmu132q8nnZybcjdf9kswAFXpZpqxnxLpDvbdmrxoNCJqSG958iRSCKDHHfa3qiZTgKG",
  "key41": "5f9EGdJjGftr4v1BHbM3oxwU5Ea2Y6pV38yAZkd1oRdtBpsrWtswqVKqHNpdqvbCy9BGc8jRMvN2WwSUZQc5NSU9",
  "key42": "2SJ3zwamKD3XSDErHNtaMwmtCT9n35B1ZMHAPpVuzzxDG5H3Mb2uZicDkTsmHRejyuHrmMnR7WUmN9QPWtMDPAMJ",
  "key43": "3SRcexduAX8aAYDx2G7SRFYZnDXQyBzGfMLWmkqhfRc14TPPGBV61H3vtc5bcAYvuD9QTU8jTT1cVQ2VLJYz2cq2",
  "key44": "5xboDJgV1DfsmM4y2i6nNiKdKgKZxQzW5AgYF86VBaz6JgThEM61ddzJG3cJy2Y9oKkShZerG8gMnDv4hgT2CwHs",
  "key45": "3soNv3oUSKR7XFFBvnP8Z2ST2PUWskA2CWMxbKvXZpHMpTUYhKfXhrB4QgT8oS9tuRKYjYN8QMyZWxpGDoUmXjJB",
  "key46": "3tFZTkokvsrLpekkv9bqW4Ho2To8sD8SQDd4FZAVrEXQmHUizUw1RLwzKhGN4cxrMbm8kVPeHjYBWKkSddfJchtF",
  "key47": "4FSi3ygLY4iYL7x2qUc9nTZHEAREGLoH831wgTwn2YUx6geA5bnQuwvo7vjQ3yeDFhXTYsyvKHYDrSNG14c8KZgR",
  "key48": "2g2pY8zghTuwLsYmvdyK1vEMBPRBgpk1qAE4aJeNntAUHHXQnQJN9q5Cd4MtxeD5VLSHKZtm9Vt7YSAP82Tb7vjY",
  "key49": "4DphsSFqq83TgmXQyFVDM5EC9As78RtZs6w4ktuj99R1pNBpXZaUS6PbFoFpMwdJbDQ5jiaXSfC79DKH2Y5uNjed"
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
