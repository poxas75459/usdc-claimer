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
    "21x7rTzijvmzcVwAWb4vENDyzWGfm1T1tvpQjC8oPsWJbLrxoTsHJinp8RT7hMKZaWK5jycU1cXHC6gNuDYBa3GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nVXqUQzuf6TDGaa4qFNdxKEy6jYtTcNnswEPZzsuJD8ceHEDEAsQUQJvXAj7rhfF1zWQai36JUeao436QkEKkWN",
  "key1": "5b7La5znSgFDKmSFrBZh2KyzQGWtZuRbFx9A4C6xrbfddysHKCBeSavZgS6nW26QthVLTyNVN2hYhdcXMks29xxL",
  "key2": "591ohShCUzAKLq2b5uCd2mpJggSmndCn6JPsbTTpKzUZ4rwdSugn9H7uuLVyPxmS2QHjfy4S4uAe33oyu35YTcyf",
  "key3": "3yymwoP4UbEXPaUXpiGoAxLC8fX2zCsoHua53RdUQpSS5XAymnP4yr6AVBfXwAwGuzbUbZCUAm1jEAbTHE4JC2uJ",
  "key4": "2v9ZZy6iySsirC28heRZkgGumJVUnwZjV1Gr6kAvmp6RX9o61mQsV6N39asGjsWdthnbj7aFi41CuXYBRDzdhfW",
  "key5": "3npogziq1AoSxNue1XkzPYyFLY6T7JrRBAWo2GmsrAnpcaaqby1mjprAQmHswfvFRfMd8uE44xG6qcYaFXy3BxS",
  "key6": "2eDL9NeXFGap3eqEqrMMJvyLDm7Rnq2WT6HPmLWPNhPySmPnNjjm5MLou3h2EV2tiDKasCbwVSoVXpoG7Fdp8qvo",
  "key7": "4JZi6Zm8JmCm52Emzy5LmSoz9e38pb1gqwb6q1CA4sRkaNaWefZbsA4H6ajoKJ2o74a3DRUbbATmY9HNsju3rEsu",
  "key8": "2U33ebZpbCsidu4fSibnivT8zn9mEenjSAmCf8PFWVuMYuxQqU6Lt1w7KPX35vkoV6FS8FvB3zf8gX1fQ6Hvs5Yp",
  "key9": "3TkyTzkQQboE9zxSjTt2bPEV1NLABimE4X49bg9MC1b6d2sAoiXsnCDLZZRFWDUPjxzP51DPTJ1AKktWbNQSNLBB",
  "key10": "2bYTJhJpbJoEcKpYL3j5zvdNYuY9m36DZA3Wzy1uNsWJUceAJhM8FbpugFpo7qrCd33Zempsv4yWECafadM1EWwX",
  "key11": "5F6vKH6Zgx68a4ziqe26yWFNUR26ks8T2GeFqcGkUa4kvBZ95YBMA3MhrzTXxJUffLsH5dNDxrPd13xsaepSBoS5",
  "key12": "56g3Y5qkmVoqgKHBwEFh2v1A7Uw7Sut82FrCXohyR6b3idRvZFAgrBP8MwTejbLyjQQevPBhqrcDcBgvSBiQFPmL",
  "key13": "3igCB4c9T7dw5x35bYodpDXTWa5HcQCyV5rBS1V5hB3Ke4EhiRRqpWyL5SKUDpyfiRYsifwbCHSr4izSf64NuNQZ",
  "key14": "a2TXZdeeurEkuBv925tUuSGKD2Qwo9EoYBCHHg35ZxLYUpt4cyvQoHu4nes6K7EHnEobPyYv1sc4SasqWCdv5by",
  "key15": "4ZcCJmeGYWpmA8J8yyPWvBV92NjcRQXry68wEULc1uQuqpJJnBVzSTfjrr9m5eX4cGf4tBoC2GjEGcYxTiSNsQxm",
  "key16": "CZHcwUFHkvNxLqZUcvgsdaXQM2DeMfq1MxLSqN82FYh3f4AzkxfxTgXG6wkGEpKNRg8ivqGkMHmwRPi5zTD47HU",
  "key17": "bLDKV6c4qF7Jg6pSkbrqNLZhx6d4z4YNnHaQws15tfGrPq4cP8AncFVYzmzsFy76Y3hCfsB9WEQG1uQX4vetKJo",
  "key18": "3AtoXStCktrxVtRZ1nN4b9id9WD9dsnDFmPScbPMXFgzaBZ7b37Y3SoZrkJPbBY9fQMrZcXS162Rru7mH1Ji6Dnt",
  "key19": "2o7FWW8q3ShEBFkDX8nzqG3wyatzW3PNaPkwwqmyYweeG1EPUeTh4QgFBdvusb1Gdnweu7ReKQzB4ZSvfw3dmJzP",
  "key20": "5YdAj18ceH3HgDFpL8EQnPpDEZQJ67hh6CvykbynUsQYUTmRPwSZAWGSqq1ZzQXcbsmfBjX3Lu1PNV1CoZ3xGz2K",
  "key21": "4myYGuGUAj4YBiq3ZiY9K1c8umtrfNtNhNUHWiW5cjkffxtU6x4YDpB5zHwtLgE6LFzvGMg91mc9ePTaP3nYSx1E",
  "key22": "2tUyyHA8N8rhanQipJtxKsSUhuwifwCs9Df1QHN4GSxtgcPBa8PTzbYPU5TdpJpWif9EUbd9Lh4gf59S8TPXQPzJ",
  "key23": "BsGZFrUtsUgiFfeVf7kEn7t8vUvf4wEJU2x15nR1X2Z6bAgv7Eepx4nyD2gYBnsfBzR3NkjifZ17eotVaP2AVw5",
  "key24": "5mx8t9nb83rh97YUEPNvn3qyyYTYD6tt43ZipJ4JPP9JjHm7mozmmGwhrdKPpfSKgRkWPX29rQa22vEMjDnqbkZU",
  "key25": "qDEtp49uGFtTN8RkQcEeD3JrhVfgnNQregiD1G8X7viTwJ64E4JZdhk3kYNQz4zJeTNSNo7wKm3PudqFLqZMjCL",
  "key26": "4xYP7zG6M7H1uzUBbTie3y91pRPzi49rtDnQWVFGoPwnAbQqp2iRFfjKWhSK9nU8wefDSqo7JheenZnAXQ8bM8j4",
  "key27": "MaK1az1HGSv6fEhmoKnXFLP1Y8m7gSwNpeSwnJCcEWhkjd21ZF2UPzsv2vU2UhZrDdEMqd5CDdPy9n8VbQCv8SV",
  "key28": "SqWdR1gfqdQke2KFvPxLPsErguGPmrJXpi6QGNaDExooXnA8KNV6dh1HDknj3FRvEqXeAPBnFR1UDyaJWcfdfin",
  "key29": "4W6mJHC9yc1eX7pnPgtbi6Ax91yeSrTyujhfZ2qrth5pwiokYGKFEvMEMXeKVd3P9YoyW5LANLCXmCcxekgv64JV",
  "key30": "EVB6c4XdDVCoTjoMb1hZcPhaEb3YMZhKFX1FRnMBiQjYfdKZPrAQiunopdtJf3EGcJWTZ8mmrGfC44Y4kyBJpba",
  "key31": "62UWqtr87wNQ88DGFwSGDoRrzWPYtLRa4mPxufLMzJUpQLUPNdmaejYGm9dBPQcuuCFPScd955zsc8AMoxzuuRM5",
  "key32": "iF2JJGBATa2hiXX4bA1GuswbtZJrnR1JGCkCjHDX95Gwcz1mEuKmq6fadkXjH38VHU54hhkFw3ktk6kd8JNHpW2",
  "key33": "5g6d36cHpwx2JXKRtZEtczw6m6rKf4Ydp5rLXYZkVyrNm2EayT8pZjrnwwJSkQfBCdGfJCd3KGS375Yx8XoSKG6V",
  "key34": "3sodN7PnwnmptHSYa1jbEDB6iZXWpU7KLR4DQpiFHzSxv5p8qjZK2kDzjDEKoHLoeyNcyoXDVRMRmRhApJc2eokG",
  "key35": "4fNrm6DAbTHW9kVcSxVnAEEr3273DhJLYmLSc3LYGNELmVfYKiXmFLXkPyeJQVSfebY1xvnRiH921HdPiYcDqFLz",
  "key36": "5MCasKA4fnChVnSaSmqY7okbrJwcB8UY9SWZQS1EHUyuicSquR9N8ReWD97gj5RvvXY4DuogQfiZXbEHHGiAwkkY",
  "key37": "3uqsTViCEY21NirTnC1XchXKizHmnKmuF5wUAvMuNkSEb5dSrG8c4HgnidsWYX1oVzSiDzixZ3BuLgqbp4CfFNqs",
  "key38": "4QGWirJjBvjK9VM8jUVtYcdYz2kf959bfoggEa4PWf548r3EaPK5SJXodivKEYjEiwNDWhuYLiMsQdQLxrpwuEtv",
  "key39": "49ihaRBkrWfrD69nV2NNfbKd1GCkGYBopESNdCCS4yrBHbcsGNtHUsfyMv4J7pwo8TqBn9drVZxbR8uSPU1Ai41N",
  "key40": "4cnHAGquyF9z7osC3ARa49DuqiRgVm7hKdPRLWXs2nu3GLpcd2L5xb1U2e8tgMVKDo8iEDjinNKnwN2x63TJeYEF",
  "key41": "a8C57SaReGLCHFx3nRGf47ZykpQvMCbu4e4ZrSiMFQyKXkUCyHg4Xv3aHiGUfrGmtvfEDb7KhcF5u7uQTbKgBWt"
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
