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
    "2BWjJtZoncwSLKw69Yk6gjzLDPMHbnHWmCfwPx4nixFzwG1y2TqA7mHG12Xao4igXtJ5a6ik15YC9RVAfF7Lt288"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3w7BCyRNTiwpGZYXDnL8gMYcfKfbYANu84zqAZRK8ma84UhM3F2ZdWE8KDvfynRdtVzmqwCyUMgQcD2565VGa8",
  "key1": "5u6zUAeePzwHvYz1zrocnAVuaaihns44sM4JL78vMKjdHNLRS8StschDgWDWpmF7QHpKP1uG9wXnSS5Q4w5iedhB",
  "key2": "5gLTVZfpXdWDuHF3LKASK6SNxaauLwUyWguPZmCMRiyXYHzi9gQ1uCLPqoeSnwrYqAukDLagh29hBCi3YXmmTd13",
  "key3": "9q3cTJR4H34YXijAHzSMSoUBkL3tBR4ZKpoFtWK9CtehdmctjjCG75ufrMLZNHbjP3tJupsGpKhwMWHAXcM3HUq",
  "key4": "2rcPmBrSGrDt4J6pjv9KFuWjbH9px8WfMUEs8kiqYHjV2Yn4WCoLDFKUzMYmioDoDSfvV3z5aUWXR7TYqeo7NB48",
  "key5": "3erQVndVZsRoUTmS4q61jfkZawAtm4MmoskwMgUYA7zjk72TG4PmBvyB1vf4in8XPWPeotigsPCCfpKVSnKc4APa",
  "key6": "5FzAwnqqr9SoVaqS5wUi2Ccva6quTtH7KsANvSdtHgZcfp79Lxrtadbn5wV6ByNLCCXFWWmPiD3YQN6WuxVBP9F8",
  "key7": "2xgUrjJYGG29N29CjDRhZUC2QDFyoBsi1pna2EijF3T4R2ucUicd8wjrtQnpFLhbpJdXsxwEisDPHBGA63H6eGFe",
  "key8": "TXWKscLTDecHKV91bTzQ5upx92U5pwgFEbSSiJa1sagHqBmdZabXEKkrTwBWDnJu2voE1qq2J36nMsN8gG4ZuCN",
  "key9": "2a6o8wpSZV3r361spYk9xf6UQswiSf78Bwy2hvPRAaAHWUTfUWSHZ3uDgCFwX47WT2EejrScvfQphxjLZe8dGGXG",
  "key10": "42wx9ckD6QQfjCNFxV5C74qJeWxHXQW546149qT4cFZrUYS2sEce3TzzfGZoE6kaK8LicW2hn86mPrpgvkXTEV6u",
  "key11": "4Xn6x1e746hsNMWpS4qpnC1aS8GysPCt6QEgeqNkTX9Qg3r6vnzpqFUGVxmrLLQL8qikkbQqmJCdTvud8ciUhzEQ",
  "key12": "3XS4Ujwx6WqjmAD9y1TfwqgYTgdt8PmZXP1kmuukHLBr1rS6Z8kvBPXb6ZFrG91ihMAPeiSFKdDLBm2mFtbEYLq4",
  "key13": "4Q7mhnUnTtySQPDPdNgUmh9uXV4AC4WFnsJcsAboUZ1Qju9M2FYG99wJe8zxU2f39933eR3GQf8Dh1cdZ8mTUSvb",
  "key14": "2rYVVRBwyVZ2XKjaad5AJevS33ZvvgFtpJUyc2aXcjC9P3Lrot8iyQMnCAhbnx3GSc8RN221DQmK2R5hygcTsBau",
  "key15": "szDtFQF8SDXvwyFksaHqacEVU9TKToFJN86LcrpWSwJSAjpUkh4PXz22cd83ujq4hGuTFpnXgkZuudC4maCCcSm",
  "key16": "4HLcKSqLd25mUWfghy8Jvf7H4VNNdDZiTgt7pq8U8PserpSrJBzKqziAhXiysPV4JujDLuzbY2XyXCY3GxpCK5N5",
  "key17": "4xDayDbXv5AmW3Qe3unc9jfsTFih7q3DU9aveB23tdhQezjWCRVTtPEuu9qpT5JD1BJtJbEzjN6xmHX52XCaN1Mb",
  "key18": "bco8Ph4T3dgbtaqCGn6PnTaAsDBzoBUc6c3thGyaF7Kwcr3ciEfBC8MaFqYb5aMzVkEdBgEXp12egcusQr6SFZv",
  "key19": "3jAvrQiMn9ec6UQMd15vGEqRpmTCKnT9YyxyHV7m1sHTUv8PhAz5LSic5uDqSvi5dv7YmhGev9cPJcnji6si8hgG",
  "key20": "373BsuDUsBkFahsViBRS8EYNwSjhknJHAvko6wXvYqroTZCZKR692FaBP3HXFH1HhgRGTFFNa26ZSpxeKVVkxXgB",
  "key21": "2yfaPeBAB1F7W6qrEm2dv7o31c94MiaVLLDbc6eFZ2HYPzs1wexB6UvBpwpnabNve9DwnTPZysLbvdqKajKKUAwV",
  "key22": "McLhcHuR61uUQRNzhtBEJaSb1naMeXm8rdKrJC9uTUgjpY6RjzpwNeGLmetaFh6jHQt1hasuxrSQCgDTpk7WBNu",
  "key23": "5ptXgzuYn73NKKiCNVdcHCcArZy5pR5YgjziYnkaz9miQ2t2VS6NA4LCR197Eov4EaEnkioEqnZDaZBmNhytyyVv",
  "key24": "4AHWDHUavHe4en65G6HebAXsCXS4PsDkFVQKfqSrp2A9bVE39gEhBM3ybzdiyJsU4orPoq6qHKCjUWTSXW7DZZwb",
  "key25": "2PENugTPRmnq92ha8gE1Bsp83A9iKWZAsmCdFW38TV4HgXz4aUozFnwG2QLToHM5abj1GNZ9evgmE5Pnm9xM6Vi7",
  "key26": "5xiV7oAWYr635cEuxcwkq8mZ7EPcmBpM55h3RcXowigZvu84Jj2hkKmQ1HbRg3AJX6KRVUKQB98agfQkppX2NdTx",
  "key27": "4eVompkHDoeYjAN9WAQmyzNKjmnQ9DNMnmR82f1XqtFQCM92jnmBu7yxFKvLEeEZcbp57hT1kQHp9qT7hfQA9wnJ",
  "key28": "5ta4FwBHgL3bH2h3nrJD7YhwrYX5X6BoAyU4u4nnCmF8M6Xdc8Yna2efUcqa8ihkxuZR4NxWmvMhR9XXUN1SqK4c",
  "key29": "3n6tXndxcWdovZ9PXTV1y9VRNoK8q3wJMBiEtf6dA2bgHNrqYBkf5CQsgiruSdm5Bnp2ozu6NgR78Hb6sbcMufAG",
  "key30": "3BSukYLdSGtbH4nXsXqJervZ1V1QFPebCzBDGPP3aMXqvit7istwNNFbQUB8eSwkvWy4qHg1rU9HZY2nVxTL9oRq",
  "key31": "3CuC21GQe8E4utQunLsiCRkBkgUsuR1NEJdxyMeBrfBM4w1JAstYSPFfAUYoQR8SSfyAJN5JfkHW6Z3yL43p9yJm",
  "key32": "YYhghPNT1mX2Z7Niad2nAoH7fHrXqtN7WcdepQfhnxfFzrxsavfU21jxmQM6AXu4vdEJUgjYGMoNXrSFLaJ9tBe",
  "key33": "3sC1ijtyCikyG4MMsskQpR3QL3xx3fSHvAEMZSsAY6kXdBdv9uRUqTztGpz6Rvdo7TH3qYsZwXLdAHZtQKNtZoaB",
  "key34": "2pywDgtUNUEB8YxDFAwUuxsphLddQWKZwjVpc6UZrXwm5fo1XaxZ5andoS4wa9YCxf9eW7dtSr2NKfSm2puGimTT",
  "key35": "FXhTAAWmtmReE5oLcjMMpQu5atzcw1igxza3E2Mojv2FgmwrDDN86bfDuAZqbBgnjCeYF8UaQ8LfMyzXadYfCT1",
  "key36": "5jweRA7dQrcb1xtuwQMDfEUyibpw4BNpgLhRZNaG4WyXwmUVg2vFgtUb4veHZmhAMuxVXknXnjQ7STsGsv8eotQF",
  "key37": "BPc3fEXUdQvCV9Qw9dEd2AdhUQCwY64JDDrB2CdXGnbHm4x7AjYHZnc4DLm1zRCJ8EiLoC3Hjk2ruLpivp4G632",
  "key38": "UhqTzJVgejuJttovsruCTk3VoJ9fF5mYxkayjtQRyEXmjJCb99b7Ap37JmLin6YMAVMq7Sv15Qn6YznLocGyE8n",
  "key39": "4HbrFnoWmKRo5Eeum3jeMFUm5ckmhEfogFJGakiDKmpxvobGMgAXjGHtFYUV8HsmDuaZdcyZ4sMVyb2wYzU6KqBN"
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
