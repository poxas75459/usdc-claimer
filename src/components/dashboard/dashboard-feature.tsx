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
    "2gXH5aKRKeFk48kepUnhBD691p8tT9CpiGe2wgTdYfB8r8bhXjrBN44PRdbYbtNdzELamQPm87X6DfPFTQJzgzoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5noxYJTAvsAHHA91JDgo1reFX8ZX3mWbxNSz22SfUZy5ERGmNshicgxg85e3AEeEij2Su6mUsUWdMAmuRxgYmNtG",
  "key1": "3LZHjktBVCjf8iCxtBs8Cf4B9fZNtqmtTy9HUGspXZH6KYhjFm598vu5WiuvaSUmnTKMYrk1tneaALuLmHG1ZLx5",
  "key2": "3wo3MEUxYf8WgbtCmAnK6tooVSMHeiP2WV8iJqjKZAPEG78jkASiGftomLvMT8YCFAAejGqX6rZJUzwnA6EcGkmu",
  "key3": "5RU9MAdiAnhegWW41hD3EzR5JYspNBoKJDJHVdFqbZ6SGN3T3GVycknY3MqYpZixbPREAJk7hH17963DM7PzDVZA",
  "key4": "2rWCEGkodbYiDPzQSMjpQcY2LBxpk8nLm2EeL8VqjK7Dg6osFAc2TqiTkt6cp8vM1FgNna6TAiXgbvTZnQmijbwq",
  "key5": "5VEtfzhyt1pcTYyPTizy2TrtvPDqBxgW9gEzR8XH7XoaXaySPQJkYt99atHvgv7exmNgwGpnNVQ5tSbt6DnDWhYV",
  "key6": "4LoEy6pzjKorXxd4PSZ67b2gBgtCidPhy6UdhoUmfSwcEhnMXcch5tqEVgaLRXCrfugwmHVPLYDEQxV9DgUkZ3TN",
  "key7": "2k2KQaggeg5gLP6AdvwaAQqoLpwB5JpRECCJeeasSKxeZ8AJn3esVe9J9QEKtvZVACExYgwj22KqubvTA8SMZDLc",
  "key8": "5vUnjtUgtfHinFvQMwJ7aCRmXjrjkz4bH8TkipxTRAp87PE9KFdLeZncEsYNx6DoS3Z8vHGp2Q4gpNRttPGoVrHQ",
  "key9": "xMMdzvzXhPmff9VccHNF67pGSKQSFUH4dMJLksAC1a7nzhCnxRqn4GgdSSF7QfFxnBSBRLQias1bkBQd2dTEbv5",
  "key10": "4xPqUZvwbtXK2L5uwLnJyWeuuEnJsouxkjs4TTJSCER6hcp8uTsNVe8EzxvP3h77r6VeehcbiCsUEqusxC44wUwL",
  "key11": "EMUUqbCq2cY3GpERcrseTvyQsTwqbMf1zVnGjdwNckk5Ma4ncFavCXqLFxyYBHv3XqxWS44R5d9dp5QdiKb9CMA",
  "key12": "4ifjLhfg22SFbGJPtbtNZkQqoeDcY87CcmWKCkTnKiiMGwbzDrUqUQuX5DmGNZNeU26KntpLHqcbFHeeTFCzUFck",
  "key13": "61EZm2gxHhXcSkabkCW566GDY4x2M9wDEjV77kKejGLuKZ1kPsvMonDeQpuHUyCZT4XLKNrWUZNPSJDJSaabp4QG",
  "key14": "3gUQd43CLQgHKRw9hwTMv4q6e9KfACMsnEDJmws5A3Y4yxNN4GQGmu5u9BNqN6yhrZBfZnqjhDaY5HAFL5SX3wZn",
  "key15": "hpNz42TqmviNtv237jqudLQqoZYBC4XcZQEtMr5vDrcipQWxKegoATCPVrXoRn8xHsy5DCa9Uscghs9NJSs1FG8",
  "key16": "4J9tZAH73PSVotqju9DfFeBDvEerRWT4ZymcNfZXr8BKfJBYr2grz6Jc9UNKYU4L96J2Le9mFc4KTVG7jYNFTX9M",
  "key17": "4miZk7hEsngWt6psnR2SbLwLQUDNvNaZ5NX1TJnfSZTekreMNHuZH545ThcjQmuyvjyTpAf3HSeXwDyTAaYqsb38",
  "key18": "5KpVbXNZkkYGo3cbd1xU9KuFZ8QBA8UTD2qFgzbo9EQUpE3t8W6jxkA12cqwoKJtzG2tRJaFLP5ym619o1RMFx5R",
  "key19": "PvTZCSpxe8pDgcbBVaTY8bqezLSdWbBTuFNykvEQEhWTxDHqr82LX5BXaRkpjTSuw1HxgciotevtJYTFN5S3Eed",
  "key20": "3LPQYgVEyBdXFLeBKAPcSRT3ZAZhTzJVCCRea7wEG4D8wqQfiJG493mdS77nShmWhg2962DyZbkuNWX9NdZ69UbU",
  "key21": "REjwP1nBqiFJRuaLaYVky2GhNrKzQr2Shzmu8EZMHyGSbBDJnrnPU7bxULtdWipaFQ6xsvhBqAUi35msts53Nbn",
  "key22": "4JauH57CYoJ5KghjEP7LXMYPm1ThAtT3UgT6HFYAsR4SnaiEvkkkppjBu1Nh74cesWkZVWoBbxJeSU1mwVHpv9Nf",
  "key23": "3qBice7Jnwfcx1m9WB6mJYEdTaB73xJaWLJeT6M4pZSFATitva7EuBJVtczsFzpSkMSXLZfhGnmsj7QfZwrG1eMi",
  "key24": "4tjVMSfCG6zRou6JiaFspvaYGkrvhir7WkX8W7Mq1m78tmFDBqxAqaY5pVY6zSa3A1s4BNefViJhQLddZiat5ERk",
  "key25": "1CN3HXRBV8364ySkiypBdQfsUmqSdbF82hhNufpxcyUJKJFTH7oUBsFiPzyzgCsNUvd22Uni4Z1jycCNv9RE3t8",
  "key26": "GA4D3oGFACk4eqyQGDaRJemWL3uiAHMHdtNfMU4uN1YWMVVR8tqMCaZXHUgs42V3zDuHMJJC3TTc8GQeRtXUSyf",
  "key27": "3StcnWDARkXHUJ2h7rZcX5jUiJ2gsMxUg1fh7XtAyRcJDS4VZJMaJutgorKHtqaqks5vN2HW3PTn75115Vg1vSmH",
  "key28": "5wqBMhguUTLbyS8GQT1z5owfy3N3cWCHtCRT21ejiFMmwpDCY9JFcowVfUMhwy9xmWaxHnE9u1uSCzgAhVHtDRYR",
  "key29": "51f9jXtcyUpZSNFFYohMG6J9AnpnawCNVVZfv3kWQuhTDH988kbqMYTBgpq9ftdaixVY6je2xnFdhbAfqdyNHZ4J",
  "key30": "qo8UY9LRLanxUcNzn3raDy2qksj2B1zU2DhK2HNpVimstartJzyPK2rezUBajt7U4NmS3nGVFYgmSz6rParkTsn",
  "key31": "4nfj79atvJnGpFsnXfhWzWswQhNDP9mtzCXDBECAwm5pSRRCMPkdUnDWP6Qd5PpPMMjhKd3YrPAbYP7ZWUXoWXam",
  "key32": "3Ma9ZcjngtrmCgkd8NBSxTmpNKwP8EXAf3DN3nP5hSkgcsAtwCM4KGxuPUabvbiPnBvy14oyeL4NBvuim5gWZQDK",
  "key33": "33Ue17daCxSkm18ERnrvC8NMhm5u2UV4aaMRtBKBf8fHUYs7yyeYbWXHARjgtW2jBkbPpKQrqKL9563mmfPpsqJW",
  "key34": "5S4iVmwwa2QCADFriq4ZZRuCBHzEi7nQnkBridSMaTcN8ccpzgVW7JAekNDC3eL5yDRTqgQaByn51PTmBLyNEdYp",
  "key35": "4zF4TJzruDoUjy5G2AmbbpzLTyMQJAfSfLB7b9H7FQJrdpM8rBWXcVK38dnqCtQeKhHj8CdXhAwMSnAtvb6Z7N68",
  "key36": "5MJmEj1Xpy4ZmuNi31cmo8Du9tXn5ZgYjsJuezTRjif1TnhT4RmkZBFjL6JCT2HkA3q9toaPT9zQ9AtaTvFbiK2X",
  "key37": "5FYfRD3jBCHaBG98F1gJA67uHXrfAJ3xmugb1wVaTH38cWHK1KN3rDLbep2sVxF15jVTfRD7UeqrPVjoUEfZSKwL",
  "key38": "21PiM4wHQLApFA1T32PR3q9GYrTZDG3AvFmHMexV1Tj5ervPRuRnzRehyoNFUMvEcm8NSL41vYvLjPgY7xRAHjpT",
  "key39": "4jXLw4GKjxPyJKhDTcfHbKcCu4aKvqVoHaUfJYQjNwraUqmHyXpxdTMpzmtFRzekr3NtLWg9gn2i3JhL8V7ZqQsT",
  "key40": "3R4mx5qHBGMbGGnw2dH2LAByoF1vXt8vduVyxV8EWNaf4BvUyYJ5hfoSCWD2Goz11sPqkXrtrXpKC4ZVAkFx9iTT",
  "key41": "3uorzRGtGMtcXuc1e6szUDo8CLJuuLf6NSJKYBbB3SGpAYevxJkxDsdkg2ntQ1QuKAf3rUCSaix46tM7ysAtceJ4",
  "key42": "qR98mKyNqqMNRBuGd83Lzd42a2XtNCHakGpjP6a6QrFTw1g8ZjZvtaN7A1GBzaL2aBfrFFDE4TTFA7Ct6a8vHXS",
  "key43": "4VrNhjH8FjtxMGrXd4gEvbg5P7kdhnEvHJAe4DQy8dM4T6ed9KpnfaB5R1HWfWBTfsqFc4RLCoqZNDa1YAcdDrVX",
  "key44": "4abSi8Ao6pVoaE11F6ch6VRkqQ9yN2owUemLmCBNQ6yRSNq6FiU1rwDmnFdJj3XgHSKMKt676qWaqg5JFf485gfx",
  "key45": "3HwiQSv47WtT6BvRSixJV5tm4rtacA9A7tE6dNNmNEgbTkSL3Vfv1D1s6khDZva3xWeQq47W9CmHnKzkAcW242fQ",
  "key46": "3eSg3HoRoWKLzrbHhuzFo3qKTCcu9HjwxLCVGisz12EHt319fTnLAJscfeeRZmE2uQb5YowGpCeGzWL5TP1Hn88J",
  "key47": "3pYUqVFNgGKAUmoh5vdAHMgumBGUW3nwDwbpXy7A5ya1nzyat6RWqb4GVb1tEGAF3NoxnTdeehzyyvhFTgy5M6Cy",
  "key48": "F6xRiipsYd2YeckibqEf76f6zfiryiJomBoKy3Lmqp1M9REkktTFjWW3Hf6xQ3HyU8TJVBKqYn6sDpHCstEzDTW",
  "key49": "3EtReFiyPvDzLauWaPrKx9TY9L7nf4oy3coBGSg2t3MVgDiPPGEF2CZfVLvXrbHwC8fGz5ib8fVM4nB41sxSLChM"
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
