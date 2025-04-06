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
    "5iypXu3GznViYjMMs1E8oFmd1UeNgJPPw7QEhP1pDS46Tak5sfaGg1fEHhvZXD3H6iAuTNxwYPDbqNYf9Dts1BrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u2uH3KRNeiFvAeSWaxLLWm1FGxhUzWLRRAhFakj7tTumzhRiYR651aKCTccSvUKDBnhfgwnVi6uKH9NBygiFfnj",
  "key1": "4wzHv1SsE7r6sdGFpcSmt7YsbGoqLZ5YFk4uPzfDcLajNwDwUXKFfUnyZaUNiPEAu6iT3KqGc8JKLpS8gfhucGaD",
  "key2": "g8vd9qxR3GVcuPt2m1swPzshh8ykY2Hddoekxi7ySTvUUBJkwwyvMDPtGKSuKaRecx2N1REpvhdZA9WJiYefBWZ",
  "key3": "3XXTLYRoNZsRucQbF1wULtp7UJtmtFv38G8bGZzUwk7uc1DRrouSzgZKs9PHZsddczunCBTXFaWEx7iBo3AoxUkJ",
  "key4": "2jvUHs5ru3T5ibCd6P2nA8rqgkevsJZTptBwPg4zhq8e2KCfbnyhiZcTiMxYWvpzQ8XSZ77XYimhmA6mF44dyG6u",
  "key5": "2LM4DubFQLy5ygqysJvM7RWZZRZQct2H2MPmuGGS3bkNcnVq7iRmBQanp1gRst71keTm984gWwLjcL2JiP84thEA",
  "key6": "5BjgDJwURPvWeLEo5e67r7b7DvWPt1pEENY2JQpbWUVyWLzhz77PijJPd8zzPkYx3mDfR7YfvLUiFJWkXbzKtwRB",
  "key7": "qVzwCu2dJyjSvSK5t9xXQpaT9QbUPFf6JqLJUJk1685Utk2Be28pjYBX2jFKEYv5ChD2kKy5gvEdvopgewMbSf3",
  "key8": "4fqFWppXzrusPK9yUQzAvSfYuNVdCpPgUwXrfy6h9pJdR5PSuibP434SseEeivCBZew6iC8um4Vfb74Rk4P3GnF1",
  "key9": "3MDGNWQUbxcgDuhPQHHynQk8VaMe4T1gpqZVTotZt2hc5hYMKkE8r6Q5g82iEZcThGvz2DVvXc2PhUKfZWK2ZX72",
  "key10": "62YPoRcD48G1hzx7eMoqfJWFFecZvUxzJiXKt6JoXow8aUK1VMCzAHyKz3n827VedKtamvKf16woFfaJo4yoEvSb",
  "key11": "3JHs6o7yuiYQNibp3Ujnbm7yZtiEgAsEaJE3cHzhsZdR946S2ndVFBtgjrvHctxusG2Gwj2cEKVh9BAaHn7Jg5D",
  "key12": "2DuhMAGjsW1YU25Qc2xi5zMBDhqqhNwFQaddhdjT3S1iC16nfG8YPTBFnFwLWnZifWr5U7kpXKpZs5anrTawxEA9",
  "key13": "5Pe6y1eWXd5qERUzBBVPPAUcctfNKY6ovbJqxx9iuLeK2Y7pAzu5wPLvf7kT9vp2d7YoRm84Q4fS2474Zh5a5Ykv",
  "key14": "2xAF9pCAkVfFbGJb1prX1AHKY6QMie3xLXa4yWkDF91Cp3ZfGUimkYzZepZw8XJkLFfQu71CDsqs5NhceXB1Povp",
  "key15": "TRAbaF64WRqTiPsx7rNCFMEX8y6LrRZvSvgi4bdiLXE1UxGgEscRkocbTyvYpBchjWhJu4uRGtbWkLbJvDJcmQA",
  "key16": "3RxFSkd7agFRq5wyWwxdMM14ieDD2KM6wDaNCGdmQeRX2C6iYfcYSPDMfnHVbieU1cXAkS4BJg6ykvFuZd1ij6tk",
  "key17": "5jhigZeyD4vF1EzA9CTK7ejHQZmx25HdedJ4Hc2qWbJhVXF9oveAUFj99PEARtMYApXB5zrwLqHiKrZYvWRvNAeD",
  "key18": "37NwRCVotV2xPGEEqGtayrf9swSdgYVAB2MnB7g8mREMWnVUQoaRyhho8CKUZSzQDu8vysnGBTiAWzJ6D3uSaiHP",
  "key19": "3CzmQ9WVJVXZ3Whm8osSYHbhMGTSyoobJZ2iJJBPAnixxJKEgAu1v2WMSLsQtsfKTn8gp2PWXf5C11crMndWDCMX",
  "key20": "37QFR7PkEUZqFqR2q66ehHzQQThDBLzXBj4iuA1xRCKPL39kxptRFEBC4gUmp1pQHiuHwiH2mwAyCN3DcRAk6QVY",
  "key21": "e2HVp8mfc7gn78MbwEQxPLVsUjqdPuooP4rRECLz89K5bAEoqY86VDF8sm4KbKT3mLT8VCi4mAjxxmk8DhWAZqG",
  "key22": "rX1KMS4kkVMqqC4H6xHr6kLUipUuMsc2qvzXSFx5qoxjxsxHPQ6mGoXfUZASzf3K42Xu6EwhrvFzNC3iTkcb2Rf",
  "key23": "2NoLY7JsudQfMLtXP3LTPVRxyhgnJoWNVSk9QNDssF2BMCVvC3T1zySqXspAWsPgjAXmGUpQZ5FQm1GZniiKw7oo",
  "key24": "5S9XS2WVpPtggywXtUbCimmeA4ZeuRJtSFFiJ2NrLfkC3LY3aDz2WUQCDAvy24N6pYixu6xjV2s7SoGXBpw65qtD",
  "key25": "675H5AE6QhhGbD2Hiqa8SuLKWF3z4PvBtjBE8kqdK27vcDKkey6P52P58D9AGsBo6qT6sQDKD4Puq2N2kWJZ6duJ",
  "key26": "2eugHiGFpYdYNZYmw9BXKSbyzJLcmT326rC1ndakY8eCb7PkdNrmaiiEQvBkdk8socRwbJaXKijZw3u8D5KDZX8G",
  "key27": "4p2Xey5LG7NU3UNK56x79QsNKpQPVCtKdAFtXYQugs4WUpqYppXZAodhLAAgjZhBsXGcn8hvkWN8Tj8AVsSe696Z",
  "key28": "128KD7yL3YddS3AkRXjBeC3JoKuVeK5mzccmMWhi1G7cASan1jcExGAFjs4dcy4PaV61c1s58iw3KTYrV5tS9eaZ",
  "key29": "3aGTP9wQ72tYVYB3yhwcs8GdLZN5pF4hYD8qSSZGEbuh66XBgcF8k65qbSFsLTAfPVdvAtafRodF4mRQAjJn8Ana",
  "key30": "4qenktMBbg3r6Uec8QWA9Bkxhc44tuqtL3B28BgvjTLURxxCmoGm5y3RttzhmLozjSkZMASDgNUuE4RoSWrhMHWr",
  "key31": "2YBq1WuQHH7cdEgJGnptizehKjAhsLT4GL36e8sGTJXNzTPfGWKyt58xqZxw3Lef2nLkuBCoE5g4fvVYh937jJ1s",
  "key32": "5b1nMKWXSHSQ6SRNmFGGbE5WtS6UF8s9NRbSWWoETdPWWximPLjuvYsbJgv7AYiJKzyJX2fxe4pLxJsn2UnKEDF1",
  "key33": "5iduvAnzhSEBDvcHyirPgn23fEqFwQSwKFnNTuckDtbWECS6YgSGPw7azvBFRY54kB2ASsPikBMARe3zj5tJvp9t",
  "key34": "3cwEQTDPGpC9NUhjTC5MUi1bAwqN9Va7pax3megHyK6MiV8LyVewp1dSKX4kmHMcpXNVvaLGBduo1nbdZ7CnGLy",
  "key35": "2c9fGGn5ikbWKBh9ahZ4Mh7qQyin1pW7ey1AD9UxEaxKrEf8c5HyMq5XJfA3MUg8MBWYwkDoKE8qhGbPShBg3Foq",
  "key36": "5AnFvyNUzJgzVcYDfopxtuFbrUtGEa2mhGFgqgeZXtLaGfoX8ZrRqCD5gYzQLpTeu1nUYr2Xp4T3FRJZuW618BGi",
  "key37": "5B1Qef9sj2cLbJ8cNk1LZxwdjCvTB2BETgPNfy7xFaeLXy6Nzziasewqnca3Cvm9A1D4guzJnEPypnAqkGePRv2G",
  "key38": "2WATxafq6eNTnCRLEMBy7SSKybwVaadhYrC2LocMUXH1V97uUq1ebUE1YmUk2YJ2ts7QF94KRe3wbpo4gf448jxj",
  "key39": "4t4TA15b1d8F5Svb7tSzbPFp8Pt6PSJc9eb8Kbk8ArGoVhAkiFeAWu9qWfYx9UKupV3wJahrszdf2eA1huYt8ykF",
  "key40": "3HcHexaRGLYCLqmfJQQ1NatcChWPSTsLs1YhFP9iekaRdomZej5N19xSiaqizP49jS8iUwKGksD3wiUkR1nDLKC3",
  "key41": "UjoQVGyxNwma1DN4p8c27HV2jSERmK2dXSsawuXS2p26Ccgrnb962j1T84ExBJZQazEXn1FvDpes8Ynqek4Jwpg"
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
