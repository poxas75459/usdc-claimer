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
    "VT6LGXPPACdVqi5k4VS6nNKkYEjfX9junodd89vx5mjZLTFEMzU8NWNUgjyT8dt5rsdJ8xd3mK21TmRrcxAkcP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NeyBxrW7o7eShYbv6Lx7q9jK8vC2RCztHf8okrBYaCQ7S1Sn2YENzBiNTXcbjtrTMxiESqYaiXnxhFxqw6yLrXx",
  "key1": "45PHxNJo4SzPyd6WejDSHcLRjB83Tz5isBwAdfW994MJiH6AuRsfhnreTxgT3uJSPBmz8byjie3AYdb3xPWdpgRT",
  "key2": "51VyvK6rAFmzeuVaQDXCWTTM5WyubXfNwujtLp7sdsuKMKjfK1AM2JYyEQ8k1L9xeYwU9wC3vpxJonrsT89Ci5y2",
  "key3": "4QHsDWDpE8sHmGVfhvUfM8bipptMSJn9BeVW7Sb38CJMcrLKvMRR8xmDXKzqD2pMDMhfxMC9efrMQLvtJFUXvcH7",
  "key4": "21fLMeq2CUPYytQ2N5YMnJvtrxD1xV9m5dBWM3JrkZheEPw82XLqyuXELUyoXaS11pj5nASn7CQXnjqkWdeSohhs",
  "key5": "2xvzUnotjrMKrn25A65bHZdhZxmP6AZMzKAUkTBxQYsyWqitKpFFMrW4AXAoCReX63bhXiiizZ6F9Z1XGRNn6JV7",
  "key6": "5ERrXy59beGi7WFBxLxK63k8Y8PK7C4pzrXN5kEGpCVJrgS9oJFKfZZ7GLamwMQVHjXrjQ9icQDdKVzoPaAg89Wi",
  "key7": "2oocGdoPA9c8kpjZGsz9Mo5HRBib6TxpYjxcTpLFcnDaGfDWaJANkSUB3s4Wd5njpz9c6Vk7w1iea6LoZnXb2RZY",
  "key8": "Jmv7QSKV1oT7X4SAJcwYc8Loqw8SqajE2aT5MSA5VW3huvCAzLqsieVjznCd1hEYq86Adg6aYp3PTFEukJEoJpq",
  "key9": "5XU3xPqCoNNPPiRRWZ11W2aWaEvLXhxE7X98BdNVHAb21mkZB6Av4s4i1CGpcV9H4fbbsfRgML9hZD26JNEhJRhb",
  "key10": "3LPH1M215Bv6RpqsdMiRfC37TAyT11pn15LDACNXFjWBbVLQ9mp9aAJ2gfQZooXC4438GWo2r3hLPvbCsJD9a3MM",
  "key11": "kjjscGsfE52tYJuqoJMrNzUJztP5kMGvwTsMuouoXE9zszZRgPGHRZ7i7eJBxdbpZ9oFqxzjuEFcQzJi89L7FhU",
  "key12": "4oHMZuGTR9i1Tibbh57wrn5FrG4r9SB27SCzMWX22TpCvLEUSqS5TetRgLDeZkkS9S7Kh3D58Y8V3CtA1hjbwXH7",
  "key13": "5qpJcjZ79egep6BXM5eLSfJDHCGftcYpjdDWtaPnhzmEEWqaVja9VV35isfPg6W52WB64To6YruAFy23RWB5CHSC",
  "key14": "3DECBU95SY1SdcNk1KTqehR8joUGwUKL3o74pCHWwq1E9BADeVvMK1341QwR5QGbHdnQWSsddGx3a9zaTTcMXydo",
  "key15": "3HpuUhH7d2UtpRfa9J97mBFhACj7tMWWvVUaycuE8wx45oRgsTE35j72LvLw6vCg7zQsCA49g967mSHcpytbGCTm",
  "key16": "2nj8B9u4qqVRgR3NpeGadZ4PtiCHokR5H3Y4xHZAq5Qb5LXSghj4LuGoT49ETVhDE9EDzh926cWUd7VMMNTydErt",
  "key17": "3hHdhB9poSZXHExKp5bAngRBbWCJZyzomZdW4EN8B65A4ujEdVCNmdD3Ezk4NUXLx6AuuFswNHk8B2uzQX4XTqmn",
  "key18": "4Yvaqcj2iw5vJhaLfPVyeiVaAgj8k5qydGzy7HnbDTqUit4gzN5bd1KiTcUtYD5Vm3tZyhEwZg18KuZZihoEiyCM",
  "key19": "3Lsds2hF12A72XrLFRRfqiVQSVyAqKCqWVAEBMMAxTRddbyFBWFoH7knyLkZXP2tNk9VjW37tPwT3ScQuonWT6WB",
  "key20": "288hmjsK9CbganhsvnxF56A8vhH4PoLEjSx299nAfV7m6BDgeJ8e8L6DnNzAwvdksHR8dxE7ov2ez3xfFp22MCFv",
  "key21": "3cUp8EyYHe8XAGda4oiqNsRWciG97M4ykV6CdkFwYR6Trr1CE6g94z9EEU9DGGB68R1S1RxTs3X4DsezyBasjPBL",
  "key22": "2MUfBJVERanhdorc2ykzQiBsGGZSZrEY2cr5hjgyAy8AUnfNjhAHDv3UG6dS7yLDgrYyiwuaGtMqWHM4VvRa2asd",
  "key23": "fQxPHBQqqfFUA2g8QQNVY1T34AzGyRc5wuH3Y1gdnBrwp9QiV1t2zU625KK8atUaniH1cvresZ7GDmcj7Ctb8hg",
  "key24": "2BXW7w1d6mdxDbf4FyFgoy7UiZpMSnpbXVue2TZsFA1DtY16nLDzJMH2USyuzsKnjkuYz9ov5Gw2VDL31gPzjxug",
  "key25": "5MGe7VfbW8ZrxrosDQbba7rVL7Mw4Zzn7ea5VQzuFT895hiw6PTtXesptSWJqrETFKheo4roNvCB547EsBw6Dezn",
  "key26": "2HGgqzZbF8si3FzejHjP3LJdxEpBoXgXxV6aUNAabsCkCW3CabAk2UxBxixrgezpBHTMGebR9gU6QT1gy3Tnufu3",
  "key27": "4gL1dJrjLjC2GrBkkBMRRio4yDmBKKDtKNCyXAnKnRBavpa8TtRYPVSdBzFXsjCVBoXcniEmYEtZHfWC6asdy7L4",
  "key28": "3YczSjwihzrwUKL8ZK7NqrZ8MDTAH9rSyGtkgmkS1VdmDk59NPr4seGDHmusUm2UajaPQUAT9M54M3Gy4Go6szd9",
  "key29": "3SGrBRLBYwuy7YuMN6kPweoXMGDKG1RcsfXuRsk4ivGVnCxvx6XRNyrDs3Wn62UadeizHq3iT5hsrCe35G1dYgL5",
  "key30": "5ZBmHwdnpdybADM5cHoonR8b5g6skUAwiyhy867d6jV2nDYjKF4RyzEaF87c2rr2PZSicS5Wv2VyNzKuk82oq1Wg",
  "key31": "3ikFXAAK5QmFwr7pEQMiUwkfp8NcWbaCJNwsBNJAhbseEKGzu3rq3JL8nPFDPUUPbAtQvngEAxuP1sNM3xHK9mVw",
  "key32": "2j5UTv3yTkYTmDHPvhSzyKnjfQZ2f43aPN9gPAUFD5tt6Qmca3GgafLYm7tzjxaAtkLNcHFPpA7RJw3QLgnzNZsV",
  "key33": "4aeVZ4uqPDYiYUDZZZ5BfnD53pCpr8bTpgjoruBuj7poWmMKWGQyZ8Z5qsjxk2ebhGUSuzoSD8N6ETTWhFJKLyWB",
  "key34": "BsiYNBBHkrksAdfXDLguGt1A1KqfFXpGDtn2NL4TsbZSnshVK5fnupwapbHy56LPzPhGEjhEvFKg4xEqyoVXyU1",
  "key35": "462ZQvEdj7EeyHQ11rFvTYdNHEsTDNRe5U52B2VVuhnuCeSN9ieVCvZAgPSMpWFx3KLuSGcjWsmu1gGQsFbj4F51",
  "key36": "5bnaRKB93pdhjiiVGGA4UT3kzEz2yVFfYQmBWst9TVcmtc6oL9zMBvVzpqBQq43RqWsfqnBJwcWePFUXPPhHLKyx",
  "key37": "2kXxByGbeXBJrQPmF9WLDHQCev1ouJGyCojkYxaw4X3hG9Yz4EKFxD7tQ5NFvfMKED9tziWQqwfRuhvmZ85hGuc1",
  "key38": "3w8SPMjd5vPt3uVkpJsGmivHjFTYXauW24665WuHms4dk7ppBnPHdHewCrEXUg1i3vxdFLgM6z6c6F4qJm4JDFW",
  "key39": "2rTMkHBXEhYwWTTvnC7M7ATQECW4fGu3HWT3NdehWc1w9TJq35bpUBZUL2vJnaKFKJCZrf4Du7kwCVCyDwdGKrcx",
  "key40": "3VFFHEa8n3speRDdyvsQY252Sdwc4yb9F6QiA1wCHMc5L6fNMSA7uDSpwiMvJ4L4Ft5mGw4oULbxWJCczKmDo7vh",
  "key41": "2Xwu8PjkhrRhLXSccV9kFSmRDjeFMciVqRcaeCLDuGN5NChmBEgAaz1BYgRinBuiSEaJeTtui5hWBaPzngqX8RSa",
  "key42": "5C3M9kTGBuQ2sEU3cfeJFVnVsTCMmH65BkWTwi4QcptN5tvonnZmjo4DpgMRovFxsyJ3Kuse6CAHG6M1vXPL9Zff",
  "key43": "3aD2PpP1kmBpurBpj8JdD5QZmfQgTVyFCLnE68oPyfURKVBxHfZ9MVVVEe8UbaaDTKopaKqz7adiXeiX8cUM9hG",
  "key44": "4sj7Gtd1jDsAidBAQzBxrgLrJj7qWuN7BHYHX9mNhd6SfHn1i7JobjG4vj9hcZUDbCWaUohf5XtsZpubfc3ech8D",
  "key45": "Z9gRL2TxUjzEgrq2L5YAK9ZYQS4kNubFY2pt2U9iaznJfsyXk3PXjvq8was7DMdXMNq6WJNbpvks44WcKAjYioV",
  "key46": "2u1pRhC7JEMJQf8EpwrDk7ZknraHq2X9Rzbs3BJQeWAkyz8KZWaP2xT4Dvp42FK8CCu7zLEZA171pLEQvhGR7mt7",
  "key47": "nfeEcmXjDKNFtRTUqmzJYp9woeYALAie5kmr8vVqBtdMebcJx55QwGPyFLajwRgubXSvALRnxm1WwSDNA1Gn358",
  "key48": "21DxKeuQ2WVexbBoX3fxbrULSyCwkepX2mgsWnBb4yKyMAdgmiao3nrjVqAE6AJZgY9G5X2EosxKcPPCtHyqU9kt"
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
