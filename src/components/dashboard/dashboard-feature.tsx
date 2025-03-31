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
    "pxrnWLfvBjm2w3bWRVSGVDakbywN4hQhJULgQhvKbv2STowTn3797YvxT8QoKyPBrsCcgohGhnLGn7ZBZYQCRJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vXp3NQ7XmMVd2CZucrLA9mWhftQGeLV2AQQxRbCu45pUmGvrBzr8itejiR5zntj8WccX39HPxk8kYEJy3xgJgLD",
  "key1": "2HNbLUdgcEqadoV8xn9FtdaUbRnLTMroKaKm6xuet16eCHgkr5yUgCasGnRfZv7VnRnveYYaBe8LyTVdcYosHSu",
  "key2": "QQraiM1KHDdJQVidoSfPPyqyiGnwdQcyKaRzjz51xfFCQrvDssrgKChogK9cksNaUG8ZCdhuJfhjLwoQLwUEXrr",
  "key3": "9aMB5Aio9UcCHNL5Ry3dVSA1CdoMKLfEZRwqFuwGJZDs59WYFz94TVyhN3oaHtEYDk92DztLGmP6UZQVGpBRaHc",
  "key4": "5AQRBVd1PBWbhSB5f3kkhQCWNAWqVAiRNNTCaciTjCdh4aFfB2NxPe9N1aFjU317LGMudU7SmXQxHBL8xXoJdFz8",
  "key5": "4EBSSCuZPqRVLuwXRqDM9KuwJLDL2nCHbWg5bFU9ehsZWr9K3peXkAVzkEYXfmvtEEpyNVDGnLApnqHhfeCM435K",
  "key6": "29v44WfaDaPxUiA81L1j4NTPqhe1aweNRKYpiW9gMDcXYxpd53c9vVnX25RWbDF6Z26UAtiRkawdNd2LiAPzkaMY",
  "key7": "NR6nwpkN3MQzxukcqgMaUadsunCKu61NjJCe6CAdqp4yiQ4i7YeP28C7Y93LsuUn8KghmDMpfEuAF8x7CEJRp1K",
  "key8": "48XLmnMYMNSSYtGKmyRUtcRNFG16pk2XQA2uPAoFnschf95b2X9cPg3vejS8kEg1bC765NZmqy3BpQNyZKqnczcJ",
  "key9": "5i4xu18BqZhZqPd4kbDdipakvnTwFDKUdpeAWagcsD9QVF4kuT6JVkiURGhEbMA9eFs9MMFyB2CuWZQMdZzArQYR",
  "key10": "3k6YE6usbGtCvUK1bRQhY3eMuR8S4QhERYMSmE2PowknDJ1aL4qTzJ4vEYJQpLyPY34gTboC5XD1J5vfiymrhrM3",
  "key11": "2wyGUjNND8UxUdat8iiASa2fNYwcnuDCTe4tADHnuQyuwL4jic3hm6ZrKRBpyrCAcFxWqGiPeNKjJCTb4WXoy5b",
  "key12": "3tFaSUy4FpyLXJUG8jLqKodWuJDFMoevwBhm3AGH8Cn4Tqmf47dQgKh4QVNRKcWrZfRU7pyvNoDeo9cRjYYoz5o7",
  "key13": "2Fwvmk56yBBiEQWzEsFxiJajEs377mWNC4GodbiAwprxB81myERDFPhvzatK7NB3aj8zr2dhU5aDn8s8L2mNS7Y2",
  "key14": "mqB7uWpU4jUuRh5G6gaqVapTrRN9MVEjpbHyGYohaWqoQcbhXGCAnwWCMMSEHiyLmhNGLG3Fzk8Dx7p7gkAFLx2",
  "key15": "3KLPxPv3KyWh25rjPeiZmNtSgiN8fQByEPUPRTdTfbz4oSGngH6qxz9c4U1Yw5rRo7qrMcH5RFMxZqE8CQz5i7Eq",
  "key16": "3bhS2awkduBAjqtFshHJJoaREcBiBNok4nSkFSGo886D1rxmB3JGkyxpwZEjbFVMtDXein6UP43BXjHgxhX6b32K",
  "key17": "4rHe6C2N6T13fCUHR9iEstx6wG58QQbHPkSdanFncjhccxQnh6qLw1TZmVGA6V3QHnkbkPACUiGvmZykNsC8mYdF",
  "key18": "5RsssEJt7ydjsgBrgDxJoJx4qKcGZbizAcjZV84K7fb2F2YEX4MfWSsQGvbgviLxU3WHBZacYrGCB1BaAdPTfEML",
  "key19": "2PonnwXDSpFZxPDWS8Tq4LYhpunpSwtYmtD79dqe3fwNgKDGgkkSk1i5UP8UwF9qW7CwQEoPyTjDECCpmeGcYNwG",
  "key20": "48q5pckB9W55dWQAuFPpuS46kTgWmR8qsNcfz2sfBqrDBDUHo6JRciBD9ErDF7trnVHWaxpnkGQGe5Q9UeV9PRkQ",
  "key21": "3rNdpvGs1EuvJ3CKtpHrUtqCETiF1kc4ZQYzENHPzHBgDsgqby4mb24Acr1d8PXpTE5SDYicT8UxNiVzVKpkWBKy",
  "key22": "3THtLpdCv7eU13TnMbgTyLEzWggCZrGZxp2SHa2CNG8fGFrEtgy4pUCx7gkN1skSQiAQy3k4Vb7YveMmaQnwiRSH",
  "key23": "2J3pbuQipFSf8TTuWYD5BuFERDXVRfCG5jbFUWSyDNxgm3YwybYgus8eZajJ1Y8162bm3mvZB53sAvhuGdNHUfbr",
  "key24": "5UV6TZVPdNU93rnnQifvpAFQyh7G8r8iv3H8P2U1PBsvT12fjGAWM3dHZgT6xC6Fp3pkZiDHaA7qYUWm4kWQ7UVL",
  "key25": "41QRmkPPYV31X9CV7RqjJ4JDPQ9f5MiZV2jZ3zyUaTRYfHccgTFtAGtWpu7rUfvmmc8wNTq5jbhcmV9vWFmTztnS",
  "key26": "2L8cwTeeuxdzXBux2oMYimCWHw2U4nM1aK2g5HxH2H2pEmnQH6pMqUTLdp2K7nnP2zD1pFCaRTKVkecfRsibN7if",
  "key27": "L6VHifpbDmF23V7kEHfVmqxoMEFEKFUv7P9qraT2FJXRZg1BMyFs9eTWWoaHrMbUyYqZtqH82bpehqi6AoT458G",
  "key28": "3RdGbJXGRr9aHgN1tmnrYewp5PGM5W3SB9kpgjNgYQH6c9J2Wm7eoTX41q1opTu4h6wbduRok1Kd5Np2DXXDz4ft",
  "key29": "Bs7e43XxbEVj1tS4b35hpUAME6TEUi7VY83CM1u36seYV3TF2tsVFXpSEGtJkUZStgP6hhhMTHgB7xRb3dU5ZWs",
  "key30": "3uveVYXPoK5GGWJYXtjUVp72L9woWpvp3G9scagQ5rNfnHw7jqWaiYP4pA7UW2gwLnq38VqUsYocgkScay24m5k7",
  "key31": "5SanwUTf97vuoZ8YDUEhfvEV2oXEbHdSd42CdLB1oya4WCMJ8V1ofbpBte6qN7bE77hqqXsdqd3vRi75D8LYd4Tq",
  "key32": "4mLdq1PZQJfYHiyrjW5164RhcTV1noK5HPFA9raap2Fe8zRcoDdiMv5fLd1Zwi5KBJVS8gY8VZyRhEbDWSjqc6kC",
  "key33": "5BBXiVsmvgBYiVrcM2vBxKNHT3jd4Xa7L1prv5djHGLx7DvKSBGYLoRq8LN4ii18FLY5pfUXeZ5kJ2jBAr7tdTJL",
  "key34": "5ArZYcf3NCFamob2bXYXeCdG3FHxS29axQiJpscL3cR9Tu8KdUdnCzvn3fijEEGywNxfgs2CrgcsuB4hmp7ACbab",
  "key35": "2i57ZDrVpytchsJaEu2VzxZuswWvSm9pyDCX3zcSuNJm47T6DjbJF2nfRubks5aj3NLuZyVnWcGZeFd8B9MxNiem",
  "key36": "p1fotYK9kTTwCmXEWuF7JmPncwu7yfC5bBVktyqwZFeSddotuWimnDLm1oDfbDm8t1KaT5ijzv3KgFaAi1TKJZ7",
  "key37": "v4oEWPqZiJPdFtSzabfzvLV8uxiYeoUGvindnu5XnXdYkwyF19gNDUzbWcpnaiXnc9Rb2Apc95nojfoDpGGfjnS",
  "key38": "2cvRHZSX8YXexxk8bzaGPzXJxHyTt1ecuoD1dMzFTWW7NKdNSWfAjmD23c4rfYcopKq5MbM8BF7uGvopx17greep",
  "key39": "3RAyscfRhPMvtZLNAqqN14B1L13uC4Qr2EuzyShRLEhdrjJoCcDSHvFvWXTeKbygmW5nRW6URjuUqN7gJjTVqJhG",
  "key40": "5WY2u1LQpkqZPrYVy3ZLmtHJhNdmmaVG3EP8XYQGWSnEpLqHh6AsWZvzJGqsJPmkrdCWzNFt2NktWm9FEwwEQVGq",
  "key41": "45jf5bEbutRXQfakb1LBJpUzjUoYPFFEYe3aNPdsuDetMpnMbfavCm5KPjfNatckoS67T9BwRUEZqwcLnEuBQA8A",
  "key42": "2buaXJaG1shhtCToedA6rk7E9jA9rq2YNRWnrTFFBLHvUJMp37gwTh7hSrAo9r3bh3jcf1zRaujq84ACsVBJTJtU",
  "key43": "5NiBC1u18rLyZ2gzd5joSscULVDgiZHMN98FEoTSWfX8pbs7W6A4ipfrZXp28AS4yXS7wctNTyU18PWQpf96RvJV"
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
