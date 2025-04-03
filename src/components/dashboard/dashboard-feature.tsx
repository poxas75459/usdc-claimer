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
    "3fE29xQTnEAMThB6Dr8gjG8WRQEH2kD86Seh9sLDntHHH11uECsau6bybHWGA3mVZHqgt9EDQAWVbh8xrR4WTB9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dJAYe83WHXokgH76pXMNpti8Lj47fn4ndoqjohs9Kq59zGwKMGH8cYKYZzJvT7DCoWgVwzx44hWuusSrHqTdPh",
  "key1": "5u23S29iFrFQ5SBdPjBxFMvMmMgUbx4AS6UDAFzEuqV1ACtjwJkH17uW3h3yRgkJkjgEHMPgLTB1yhmkWEtgpS8M",
  "key2": "3uCRJb72Q44LXZC32sNXXnoaGYa25zkSM9jBQtZ3cA6JkJbXLhJ4nVRrSvT5PMhergft6E7B3eRJqreDjM8wU9Di",
  "key3": "5DMfmWzsQvtTq5mnmRAy8qQKfFU2pknTFh1BvR1UtHwxFNwHvLA1PkwYg3Sz4pvstm7dbqJVQuY39KQcRk1WvsQC",
  "key4": "25DCw9C2FafHy3CSVJQ2wcpesemGDGJbcw4KpVaHS5KU4Uq6aXtS3Gm98iuPGMJcfCHLq2Lxmh4sU3XemM3uy2va",
  "key5": "4n6xtmAgyjkUtTV8K7rZfXSMR1rYrq48RfL7CfF1cDoChQmUwB6fajoHNcx2gVSarTUnsDkpiHdv3FfU4xCUHoFN",
  "key6": "58Tn855eUjS97BMdPYuRajPe68hyiKiTgiWGdoYqebWfWbEEsEb6j59BDwA5CudHTPMCsVHPPiBgSqqZ1BcJgQRW",
  "key7": "3yTSeUqKmas1ABpW82WCsdcs8SdxDNvVim7BThUVEr8LmfFiSjCmjNwMPaN7cADySibqbELAZYsLUarEaj9sXJ5z",
  "key8": "3Fz59vhP7dWJMiXGGZo9Y3DSHvZq284EveaMBhEVq6A3PunvGnGbFFWroZS8ZhgYg77zoekwcPUtHK1W6ehSNdKT",
  "key9": "5zvhDMbxw82MgMorHYyWK9WScdN218rchRzq91ZdCp45QeNYFXY4kB3HbaoiVpfFPVCYaDgd9Acmh52fy4KFzYce",
  "key10": "3TruxJtnMGrDgv6djqKNn5jD8rUrQekuFTiQd91PQ3aurgSgS4sqpBQ25nTEhcUZgRn8bQqMFtu47DCxxvgdDtBv",
  "key11": "3LP2aPVeBjzNJ85iki8QT69tGMaVTLDZaSmPPqCMjKj7SiBA2XMVENY7CM8Hdu6MDqvAJGqzN3FBJ6kce8b3tCn3",
  "key12": "KSwwndrb2vvZteJGe1U9vsbb98UraDCCU1WNXo2pDNqgpwcRxwn9k33qPLPCqD6opwgeifxTUWpDDTmEysioiyP",
  "key13": "536pMqaYY6m9Qfg3qQoySSTmmwKfqfT2DM8uT2CVMsk9Mko8MTnhqtq43VdxpL8y68NjSqF9f3LMN1eZnpD1n2Fg",
  "key14": "4VY2B581mvC4vNmZjqJYx3zduXSNJG4RQsVFeTxRg7ThCAiy34zxNgcsWaXLmfFLQoRum1ZejjmcWRaVweo38tnK",
  "key15": "2wHUXCEc9bah3LXHKcLL5829pZgAkgVsZxV8W9z4hEpcyVvpSNNTgdLh5mVLbxSUCY6qWMXg1rTeU8mrzkpa9RGw",
  "key16": "2TT3zXr7eWnest7PcKaND4dygPw3n1Yj6hd4haz1VymT3BupwZYnCQanSuY3EmXqBwEyyPyDBasZShefCBpmtmE4",
  "key17": "34ngBpQhoYTaVkbFU79p4dZySweDLG8r5uJ7HWYBmub9VJXnfWYBYeS5HaGsKbXyWrPxbiwwkmAX54P5k9sdRqeH",
  "key18": "359Gzn1u1RQGav3rsnMwfjnrvGYBZWx8if8m3BRF7uwxxddVyxM27f5yGuh6CWaiKs6Pw7YDh2DLQ9b4nUCrwKAy",
  "key19": "32mA41ERUkXVqM4z3MAULN7RwDmiqKsfDVa7JnbfBf2poEjbaraTE6AZqUGBJ9oqHGqAKaERizsrLpZPCxctnFp3",
  "key20": "3gr7yrL3a1NcsXmQzx1hm9VtymMj5FTvTkinVVDmP7Nm4JpSz4rVe3RMD4N2NcpPmhH1ztCDPD6xK9y751mJtpdJ",
  "key21": "25eoVndjiJRWaJJABpP7rbskYzgvnjbLQ3r4skWJ1JKvypqG92r4mzF4UWZa5hJ4NqbSrdbM3T9aQQkX9ZexnBXA",
  "key22": "5bvfMp6CnoUBLShFwhpXXTjBqFedATB567N8YQxSp6AtHpQQ4N8G6psJX5ezm5uk56ddSbKWdXVqfQziB4PQyTw3",
  "key23": "RCanap8aFNsxkJA4DsD7pNFJHaVw2bji64jnLTEJiDawU3aWYWnAPbnTq8jSJqHR3GkDGZCFrpUhAjwbLuK3tLp",
  "key24": "4tTBfFJVT5mPqXPmY5bFekJafCao2MWHPEz6EPm2bm8vo2c8ypq83AABTjsF7tZVw6TL6pqyopC6wq5xocHtARv8",
  "key25": "2sQXQdBXmmrLd3jgeGeUZ3Vk7TYcN8butn8uH92erYWxPFJSfVJMmyeBGVX3x46qkJXY8PGgTn62YzoeSiTBTxCF",
  "key26": "24UBJehxECwmuUEXDPDMEeZHAmPJ8zPFmB3MLTQAL3ugtSg8LwJJ2cgUrrEqwCQ45koHjFw2qdwKXRrqG4ZgiULh",
  "key27": "4FKF4Hbx4P4xuzoddpYbwB7PdkTfiR2PbFydc2nqDgBURzsqhzChcR2kPYm1aESUgoUEkmraGLGMpybefBh9Tkz4",
  "key28": "2ov5MQbWcawK7zkUr4zAZcHa8hHWGTiu7dqe8gg5Pbd8jQk4dkHAe8wEsm2RC6B2wzCzibfDSa3qf6eL37x6KrcS",
  "key29": "4q6QAjqk47qybHiW9nW9hbBPMDX8vAgSTgdCrdxaDaZLSTQSXYH2pStWVNQq33KpiNKyG9zReSmtg1YEEzhUqTtk",
  "key30": "wtAqy3kMGyJpKtn5ts88mwdEJfd86Xt6bwkfeBFrk8FnM8wKuQm7EfuvmHq5wqhyUJ7sFFr5zKHCwV9SmFbhkfK",
  "key31": "4z6XFN8nfGRdCiHQMBRzTSAmYioHPQaSgrZu4SbimxhJhNWwjHxdKE7qmJzTFkQiGCJ3KKVXnVCBquc5oGfqV3F",
  "key32": "2TU9GS9DHtHHCd2Nt2ry5ed8G9yJbuxGScBTvdzgWkdHWXuiEtzqfffPQoVF4V3FUAqzFobWGnSXovgkqA43bAJY",
  "key33": "5NjsJveGXdHy99aNDpdWgYSC7twQEMW5aRz1ziEasefWXQumq4bFqcPZaD3ztiN6BsZ4gD86AgmxpsqWVoVTQoPS",
  "key34": "Mmo2PKjYwpydCcPmM5WiYuodNG1GS3UTqMaJdjhzJfJpNV7FTzETLGfWTrSvp5DcoEAaBHCrGQRjggkE7ttt9o8",
  "key35": "4VwMThiLAGfU4DQjbu1MsTrPNanDgvVswTyEFGRPS4xfJcaPCASTpySaXbL9o2Q8fPZx7gJGZm5H2FFnvPeSZ8vS",
  "key36": "4EderxZpahegQjtUWiGogCr7Hpw1qNkYbsTAy2uBcTHGu7QRee9cZQLVsLTbR1PXui1swdjG2ND32GEmNL8T3i18",
  "key37": "5AgAqfLUokouyASteHEeXxbWoDpVqkhkAJcEV9WHQMCXdkMxNYRBCznokCViaRH4GrdKtYbhVYLNizPFvQyJGj1v",
  "key38": "4Xu65tY7P5kYtKtbAGx2SnWuGyPgEitNGHVns848FFtZsncBMxFSwgmmEiBD7n9jAyDMPzAj44PdfBefQ4JqtE7C",
  "key39": "5RMXcwsGy1YUnHpuDYEBcxf5aqya1jGPqmFMjeiLXZ3Lzn5Uo6DXdJj75PnJXFPT2kVjfiBJTu3V3pKaCBxpDe91",
  "key40": "5poa5yyAsgw86veFjKdUfdoixo3TciKWu4QBUNN783DDp5PG5Q63RTcyXJ6tVZ9DzWfUxdRUSFgd8CurfLN5GXtc",
  "key41": "2fydhUEmNDXCsa9MQR1si2TQed3cZdd5tugMJUtCo57guZpXEcifvftjcfseNkRFy78k5naxcQMnrWJdimzfNoNm",
  "key42": "525dhouYuJwQzouue1Z8e6MQeJPhXyv9p4zvg3PVrCTpT28FZ6q6KCcBJ2EkhfuAxQBnHVB4Mdu8EUMn3qh2pGZU",
  "key43": "2UQrfANvavSqxK8ccoDfr4zZie7aFACNEALxJLLSJDnPx9ggCP8ECrm4dDeKjceaGipoq7WdL33RGWNFRzt4kpLC",
  "key44": "2PA6Ldhr3R6GxhcLY1io7FTqJpQytvYosXKy16q2ttBA5rZfJzS58ZF5pRmuac1J8DnPEp9GHWLqamRq5fauawvQ",
  "key45": "4wo6zyGTZbvnx1dhGjBxrwmZ4GCK6YQLzaYC2cauioeTuV1Uqimy2KN7EJUeKYM19uzXb981iURKp4MR81fZMC5d",
  "key46": "3LnuC5W4RYnT6AcG1G1qs87A5MsV3oxcgwTYo5LbV2bSukLPnke2137mAdKixKQroWydqDx2schETzEFVtymEH3v",
  "key47": "Z6bPYZP575sSThNixhxAbNCJMY9SfDutuFmMoB3eiDu4id5YUU6hLEMs7nYXXmmBXg8e55wSDGBw5aDSZ9La8dx",
  "key48": "4fqxS4pnKRMAm7VNAyrUp3RfNoQHrh2smxty8ZFxCUbEvtHQgQNhrYmxKnu7UCXJyYRNd4KkRdvPBKHoT4hRT13C"
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
