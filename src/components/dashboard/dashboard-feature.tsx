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
    "JM8p8nfZDzpv77X44dRTrpdGqCf6WcosFHUd4KSN5ZX6Yca8iNyaPdTjnpQ6JCMsoRFocznp89RGwnHZ4SvhY7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZ1CuSiby2QVA8y1Mfyj2Pgb3gFYXWrUYRFFSHrfjpm64nmTqzt8Gd5tvf627a1t9Re6VwspwKE2vmeA9r68DUM",
  "key1": "4hDg2cr7oZrM4Fn6nYszx28xHEsttxSvCRVPdbbUMDAGfXgS4epnCK76GyKT12JRxiMvaE8ULRcFYZnjrVPhGw1L",
  "key2": "36gDM3d6KbTr3uxbbpoaKWdB6b1b2rY8aPYdYh8feE8SxBotmDs1U4Hshs49CsajEfBac4GimchNuvRuQp1VGQKp",
  "key3": "65myaFSSnnekiHUuLB7xbYYVpVRe63Ns24wMBGq3LcFBw1WgY9CJEPPfPLaqsVWpjx5vB2y75FnDJAiurHax6cUp",
  "key4": "bTWzdesCCszaSsa8Rs1VQRu91UxGJWzAdxsTmmsyWMzFV5GYFkb8PizeHdHRnfwd3vbi7m3mo1ZQC5ubqfYwTTB",
  "key5": "2E1migd3aMVzycrVkiZRjoXSw995yL1KQE1VB2u2nC9PZdsfG6kyTNPjkAXdDxwhrXazAgzr9eMNyf8LwKvV9VsZ",
  "key6": "jRwFLuQNxp2cnnzuFmyci38gDW1gNmPqM81thX5ZGj9cBi4gqTEVtbenSt6BoroH6RgjnMHMew6WipWGvMH92b9",
  "key7": "49MP1DXKC5mD4NvdAnmCXE5va1NLkApnriYPCLrZo3KHj7VB7eYg5iheMY5u1dmQhohrJExueZgppvGDMXHXs34W",
  "key8": "3sUSqFfgXhVqstgXsnMVeddq2KsyjoVaabriAPsf4LkMoLD4uvNdy37c6TDTFQA3LDwfd9JQFueeVV2VBswjSPfF",
  "key9": "5Q5ahXFnfAx2odNg7CoSouJDFSigu5i9kkrRF6dYp32m2gf5DtAH9wSpTgmDZ6DNWsyiAXzF27Z3KdLrNsLRasNt",
  "key10": "2MpF2Jjr4wVxbBYSJZrH5dYEY6rCjHn2hRYyvSeNoAbzYN549QfE2WrRv8sf4HDfcpXP7sEBgxoC79JdDiEDcEzm",
  "key11": "3HN1NmscgyjUSFH8iqwQY1ShdLoT81hSwU6tmp865ATRGTFm8vRsTAxu2WSgKyBtTkXoB8hdFqAmN6cHYRYtbWZv",
  "key12": "3612k5H1SX7mHSycgk1xVQzCnRJsenoTkywDQmAbFu89jEJF7mMrqNSpkXDp3opFKanx2vpvsFcvruGx29ej5TEf",
  "key13": "5P7SLwms6fgWrjt8WcpYRGfYAtJPt3UKA3sUnSKXPq1pt1ghk3RY1uTCxduRakZUY9QmH25s86E8hPbK3aTsGnS2",
  "key14": "43UKy4ppuew1iECzeq4ytjSYFbJxdvkHQRHE5QACD3rFyUjUkr4no3r3HFVABXiDYqxaLZBQWGHCwsqLkpC43hL1",
  "key15": "4UgpGPEKzEn2PYDkREggzm4SCgeNmiwFFy6z47LgN6fM9LpN54YVBrF9xCbkQRfDuqUE4pk2mztydRBzajEeP484",
  "key16": "4L5sJr1hwQB6NxWF6QXxC2Q8wH2M4gF5zRAT9igDMT67tZRLav7cQuJf8xfxh1GyTQ46xRGMDgLJyPxnknSFtoGm",
  "key17": "2o95ArudRkAxpKw1jsvkGrMHcR6opQFbBirYMY6ZwA2pboHFqoQ4m4zaChFZ1QUuTEVDzQyPUjcprQNsnLURPrVF",
  "key18": "4FiZeNoKoWzN3KFcHMc1b8tBaLPqWGTANPYGvBUmeaAaSVrxUpcNR8PYr4rzRAMk7okkJHPqdTLyuuSD2QjrFRVk",
  "key19": "866oemuftnzWwcXemr71Z3wQEddN5oUgBnESpif8VNxk6WsAvEJ6mD9pbF7Z2gt8u9oUnFyPKicdzmygDcBbqX3",
  "key20": "2dCNAFTcsyE6PcHXiB57LogbwV25VKVbUQDw7nmYCHv5nf5NFV6erYwYnvE8m23yQ6eRrkMowhuW7r3G4dubSWeM",
  "key21": "2jf83wEGZaivscEhGLJhddLWKEs847HtbN1GUTKNR14MNt8ihCcqjd7zyLaLzMu4vrDWkko6gwmMKqXJmGg6cL3L",
  "key22": "2DoRasQrde3Fv97W2UyKDMKGTPRXLLqiwxp7mCPSEsiaLbUPzDfCv8fhq3qz4EtSVsL87xUaUZw4wFYLH8zmqGNh",
  "key23": "2XXVunLabUhaMYBQrWPuLawR73YWjmHRe8wYFc1sX1T5Gys6GSWGRnCoqrxUcv23trTCQfoeNmqEcVk5L3b8PNzg",
  "key24": "3ZroqMVYn9PLDFrm44TB1T6BABRBXYSrS4S1eqxWngTsh2zFMA5hz7VdB6x1pttvHKhuBhJZzCqEakBmtQ2Wdtph",
  "key25": "4aZYto6GJhTnUhodPntJTknCoF21JUtcEQbbABk7WTvsA7kztsNEFU2U6mo3TeJVjyr8fXqL3T8TEh2RUCUNHpjN",
  "key26": "2A9Jx92y5YQi2ePk6Fk8QQnHR6BvujcEhdDZ4rsLzk9cB9Wt82hiiDypnmkZ6QjexcdUm7Pr18zMXXDVWuh6m4QD",
  "key27": "26JffKXbppeshxSckzCECnGEN29AXNHuhThKrhmu6gyMuDzSrZLfmxh2gGhRrVzZwgexC34u7nHcUGio3xYwfUFg",
  "key28": "PhnjTyUtJmgVoBM1K6gaXtp6bqtDXUQG54CesAraRdcuafwx14P3itZLjSZNfNQrTZXdAkAw4KDvKLkMA2w8Ndi",
  "key29": "4CLNvmkd4PEnBdeVuiaFzCKm6yy41QEN7M8JJYSxJ1bZez4Fy51iNybsiFThb1UseEJFBmHEtCtsjeqzKU5uZDVU",
  "key30": "2BunLriUkq6HrqKvHXTnQTtuvx8HKZkp8ppyGtDu75iGYkECcsDEBxMVySRzJW21MkKqyHkLCGfNsFKaCo8jN8pD",
  "key31": "2sR9dZDr6hVyPzH4wZ1L5dunT3WEZRDdiRAadDf48FPpSUHnqJeNGXrWcGFgT1QipcpoqEhBsU5d84Khm3FMCXVc",
  "key32": "521vfzFsSTzTPHDRnmmZvohbecoFDXm9tXs2zKKpQDXoSntwiaFe8qxLHWya5YtzEw8y8yAjRPya25avxQKZp2Dh",
  "key33": "3JDsHofoNLoM1iGdG4ptd1xoFzJBW61RpRmYUDbF82E6cpRkG14WoTKzuDDGPP4EZ1SYt7gG983QGSWVrSBzm2Gt",
  "key34": "5ZNtLZuJUezGJJmmsZ8fe4Ed9mvGg6oQvTa4MBC9aBaxBTGeu3QJriGrYwvYxVtDRuqaMf6KfnGWWH8h8uBzCj6o",
  "key35": "5RNiX9yPiFabbsg5Bw8qQc6UVNeTrK8Lznym4P6GTBrKYzCB2r5qmLZKjEhPuhfWm8pKhPLonGXxgUZMvrqV3mxg",
  "key36": "3m71nrip3ry35Sfm5fu5Cx7PMFucfjdpbE6oH6jUdd59beMcrPLpbTNs1oiMe4FcS9GTDGf9GiZQQ3mRYN3toHQg",
  "key37": "3wjD5kaVgrwzvzh3cPX7GYGQ5GcfYX8ZaUoWt5WkCcnsdHpk8u9xKqFHG18NkBwYu6CfWSHejwwttKM9M17vMStd",
  "key38": "vFX6WEE4tnwzbRBZnxBdRCXDTbAELmejyNaMw3y6tGYc43Pi4SFruCPo97aWDHEuBcaYxeiNaJyj5M2namcxnfF",
  "key39": "gXERm9VmVtcJhradwTdkF3dKHwWyq8ohsXVWPpCkqmgsRbEqfX6Z2T7G3t2NfH4JEEqz4VZF25ELjQJ2kyzhzbm",
  "key40": "4p7GPqYsnNBxdMgJM1f8t5FnbyGgY2orCWBRkTs7kMyHCqAtzF5zC7xim8pM5AiJ9rnPfiHBBwYZYzcJ1Yc4T2i1",
  "key41": "2xSFWwKHzWjsd6SCmkWJM2syXqaNtTBYudYMuqU7zcRfqjWJTF2vkYL6v87GK9CFSs95FedwD1wFZ11YGbzGokeT",
  "key42": "saE8SoumBfeXVHDvABPD88bSrc5otj9t7xFJGzUpkcTY6K84BQ8kB2DoPJxGEE8wU8VRx4HaNseQw5JM1oRY4nd",
  "key43": "N7Xoxv9eR7xnxEdfXXW3KTYTqHEjs6FbJaNw5SMijNpV2SWa8SyUoUDD2jb3ChBPFetJuMkoMv2YuNz5vv7JN4z"
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
