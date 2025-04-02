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
    "2Vabtv3TXLCYjX2GqJuM156EKAHmMp2ygUbXiyKu2dTykLg6R68WvPf32pzkFfLJXe32Xi5tEzrbTCqbpCne2fXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T56173ZA6oXLJZAYgZCjhmVPL6dTThs8RwyoQcrq2fVfNZ7vFqnxgaVLHhrLT9wwo65d25cfMS89nPhegvTAU5K",
  "key1": "5A2PHdTzJAnauTmgqjoKCqigJwQ8LvgFKA1C8m4LzAtoknAR83fDLnSYz9oGBdVoQnepNQwqtSC4FKx1fxGC7zdu",
  "key2": "3yXfdALkiHXTDv9H2jE7WqZPcsnY3M5RmbTg4zcLnCZ8K7QYYZEkG9LLCTTZoK2WPvWgTMw45tJj2cJ9hpmppc4s",
  "key3": "2WWFwiUFDYin9XwkrpQXE5gKR8KmX1QoudCnbC1C6FNQ1BGtfiW5TyZ3TsGfPev5a21VnAntbB1SFsb63ajburta",
  "key4": "SrxgzjcAvScBJi2VtNKJRQWfoQVKo8drmYVfQkWRiysq7FTZFyWfNzM19z39gGNBALq2sJ44rtw251aCFzq3XaQ",
  "key5": "2CnX1kobQjqJb3GtGpcJm89iWMXbPDbpYSLLf4TuVoZ44cK3UEAjsVjvN6EXtgvr9o9VfBpWDhp7wcsnw7hxRxnA",
  "key6": "2izB88CxbkhBSmVJxj8cFA2AGiFJLs3P8jRdKPkTLQzVLYeVH2fJrybA6cCuR9VA3Ea1PQwENNrgvNEwk5vLAwK5",
  "key7": "2bfCg8eb3DyowtDgSsdHVgHmwVbE2jrBVwRKo1oDQjpEGrPiKFczRuGvGVyW4WEgdXtNJvhKEL881gEjNDQ3jF9E",
  "key8": "65VPAk1xD9nc9vj8NKw2HuUcjVyMA1ctuZwQHU5CvnuqLiddUaezsJWtySbhRUMKmD67PLGnFXcuv9S26tkzurj1",
  "key9": "EpPtke7a8wRdoLzPyUjoCbRZQVNaAbfFxqrgrmijGXzDJk149Bi8sjE6Qd1pk8DfKM9V4rsf3Pa5haxZNrsySBh",
  "key10": "37TJrzQKDrP6ZyHg2JNnrhmsG79kiKagsuuAkboDdEzxLAmX7M34vwcwpvxpihnSTRCAXtsvuPRxhgqioQ4YWF96",
  "key11": "nUdev7onvwjoRbzcST2yu2sd636iNduQxy31ty1ZFKwb1s2q1Uirz3AnBGJYPShnosRWZAPpQY6WShe4TRUCe3K",
  "key12": "5vmjhYuaAgL1BQU8qMJ6ekWAxd5fBGyPZUZ5PGKPQVGVSaNdXRug3FRTauxjHpoZQHpa33dEtn6LQAwGvVLJjt1V",
  "key13": "5Vud1AYtnTdRDZDkq3nKFXPjuB3opaBwGPcz2xHWiHdwe8MF81Vb64s2KhAFyTs6nhAwvmBTKvUkGu4yTKmfKUZE",
  "key14": "3XGrBkwr1YTKGrrhvwKrRgZ2ETKkvYK5LbMZgRkTWsaZ9px6UnauKYLUXFz4LoMyYSr7ucnUMj6ikpS1kaJnsbyu",
  "key15": "SLGjdmq5RN4igqUqCbDMkhrEQoTtrcM3atjNPWniZXYqxVGK4d2ddbdya8HKm2sVWube9rJwtVpAvJmJHDsq6uZ",
  "key16": "15GMi4Uy5bxX8fqGsuGTyjet2obpqCbwkJPNuDp97YM28b9eDR5nvJZDBKC8vnwkpH7vQu6D2H3p2TdiirBte4i",
  "key17": "3WGcARZXtdsr7WAPQR9UCbsXEBErCMZNgnsd9vmGafiPjcirhSN8owzLoPknWcNxNybBCgwe12CeiBg1KPvdA7qM",
  "key18": "4jvwXk68Ys2UcAMtmvi4n8HbLLjgkq4boWCroMdtSn7E4wabeWFySMbWxbtVbnYmcZD5TRuNnCJWdKir2dQiBbWN",
  "key19": "5uECvUFjdr2NBZA9A66G3HBQqFg6z2vxZC2fRVL2cKy7yS6yJuVwWThv5kBeo8h2Tmr7v8V2eK8zm9RjqK1tgN4n",
  "key20": "2xfEcBTU1GAvNtBfaNWrFfsrWjQbvgyHkipistGY8TGT9PhtspdfrojPFaGEw93AGtqtkgoT3bTpnqY18op9eSRu",
  "key21": "fTkKjkS8TCiuu4ziSD9yXtytUyLK5E5RD6ysX7sE4Zj2zRE3bR4trbdY3E8syEjPcoKcY4gacjAyAGPALb66k1M",
  "key22": "2zVRuGj4kdJaehjx2SLKUVr8ZiJq5Q9W9rEd39Nzg23Z2x8GWbtbdsUNwHxip5gR3mRs2QZh2Aq7sFKEUJXrPi1T",
  "key23": "53prKBqWeYFZmfwar7QttNg7vPtuuaJwUM9eSgQmqiCQyt8k2LsfJipAScxMWW7FkHRu1pX5EdtW4cBUgRXwBpmP",
  "key24": "45x7dF18Q6UCGUhGKz3srzkfNSQVUzgCnvDuBsdZe1sXth4XTxDCkm5GEEXFNo7yQn2hn2PzV256X1XyK43E5kwH",
  "key25": "3SzxPJU1CdQkGhBeXUaszVVw7ThuFyW2AGGaUDENVgMdtURW2K3BX3sVUii8hnDJ9hSmnk5xarSyKmKtfMEqtois",
  "key26": "4DHXGkxCGXwDFoGnS5GjDqf7N6fKchja4HLzi6kxTgPRxVV3SCBdoiLBFQXPLHnU59qn2EB8hGHB2A8njC4SmpZe"
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
