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
    "3q1tYurokRYQw3JcmbsSLNjwZvQcL4cH479RYeCUjEsrDDseMfoCPWBEqswY41ekaZcRkPGo4ciURsoHPrX8Xp7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e85N7aKu8VPt5H6P6LmoFXvHAdQ8LnEWKvbWmQedajct536VrUBJPSGc2sH94DFJkdV4y7fp81fjkhRJnppjzYe",
  "key1": "2cH9r9zVcF9DatW8rkJbzFKLNjw9HVqbS5LyuPHfF4bqxohNoEdbYPXssVEkyyxMf94w9GmzpnJfTEoKjDE3tXi",
  "key2": "487SfNDs9ywoYmxu2kE6K6bXwPpqmgbUnnVYeAJVc3b2WpF9JhpZK92QkTT4EugsvU9USGAMz9cqXicquQmivP33",
  "key3": "2sJqGwdgzpyiSzTfcjqdVs39BB6e2fKTgxzHUVzypigyPq5mptwvjoR7MdR67yyxx5FKZfc7PBPBvsVoKMF5yGjS",
  "key4": "2qf3chdesEdF583hECc5UCNsM4ncpANUmFqf5xCdL57bmvwHMjSPr6xgHRfx1mutQWReucSGMxRPa1gckSULHNLp",
  "key5": "2TEAc1NwmHjj7g976YWWmwGPF9r6b3Xwz7RVaFTGFuMzZoGqMDsNQvnHPkGdrB6JFzmysHvKxNDN9kzwbiERCQgr",
  "key6": "4myRMk95UYLmFzUjKCMhYa6Giv5VNWg4fu3SZK5qRa77WcFbGtmvV7WoYnKCcS3zoexqVKheKErXxGApWTEz58fY",
  "key7": "3S3hDUC9B5wCC91fkEwTtCSq6oj1dMZCWKkPvymXQ4xh149tNi3GGbnD3AnMXrdRTQDqmxYCfNKi4rGUtW8FzqG6",
  "key8": "63D5ZFn6U8cpM1gWho82UDC6MdB8Bom2GVnbLifJU1buHSmAHKeYnKoiE33x2R7G4r2PMCWkF2MqgHwypibNZKxR",
  "key9": "4U8trUPGXXEaWLEy6hSQ8V8c7dCF4P9rbszugDo4VkmTSG3FbbXU1Jt79KHGMFYvuBzWM6iemSbuHU2sU2gko1aD",
  "key10": "2f2mpPB15dEvtf3j3jmKtmMnLB2rwWPK8EHYwmTXArzEaTEUcjAfo13jp5D54zftswMaLiSicr2WsLDCwG3VJNaf",
  "key11": "DE9sea9X7MUC1v1sCTzUd6Ee31Z9mxfs5Upyr8C5KQWR16mfyB7c7a3Mep7Xf8JHGhm4h8bCnLwPoLhxvppzekh",
  "key12": "2RBVziChE3igpybhYXMGCJy7fogoLA8N65u8bpK7iBvYjo8bVaf8eadFi8cCoxmpvB7mHiaRYbq5DE3EmdtzfDXj",
  "key13": "4gbABsD5dSjtrbsHupyfEvoYwd81SJqVtbLfHqex2YyJoYS8CCZFDpRqctRerabZyxKFqWYNPpVJ7cNxo9Rwunp4",
  "key14": "5eWdpbQKLQTYSLceKfhMiYxaEFoR7R6cccFkCVEKMusXy3v4GzhbFD3nuCU777QkLKbnKKni14qKHCHD8cA5QnhT",
  "key15": "5N8qBEj2Zx8Z13TitAnAVwZGRco1wR5yNPZcUp8pL7yU7JZppuNWGJBhzUYfnmRj4iDvSLR1aXJzjnLmLgf8AuYj",
  "key16": "2vKbmcjBSUQ1Nx5qAstGLWtPk4wTY2ief1jrdqxYF2fn9dH9yPEDFk1ThmMosJtXtGCoYHug2TKL6dErF2onFf75",
  "key17": "3iAnes5AkbM7KTkf17eMNummsshbtugkbtYQ1EHURR6M1URct1aQhZH1XyARGhdg2psQepc2qv9j8eEkEd3q7Dhs",
  "key18": "3Er7ysGLDE5Ud7Bh3kGn816bUtqjNh1y5KqmVrhiiHF7XMcNqQ9otx36bfWvLhTNE95156MqugpU2g6Z4XB15Aqp",
  "key19": "3xvNhv9gxpKH7xaKeL4krP7WgvY5ipsfiWviDjvYkuCy4eDPc96sjX8agzKGeqU93duES7t8W5pM68fRqY67sp7B",
  "key20": "5gokuzr4psUtsC5jRSA8fWonjrcVJ2cdpfg19sDhcQBHT6hkZRZ6ZpYqv89WX1t2c9X4vv5PFuVJ7E7qy1r6DUep",
  "key21": "PJ3ZpYtErbSwNSpCEmHsVv18aXX5dotyxQakYpMsQomgUCPQwXeFbV5g1SwahKfnzBwhrvRvEuBeWgCoZ2gLHtP",
  "key22": "5wuCE8N4ZTfhC3u9UJ4QpVo2tKCSJVeABiww8r15aCN3fGRfs3mCfJjKMW14Yn7UcNod5z7mJdzKToXbDuizkX8T",
  "key23": "fLMFRw1CZZmtu62Hr6dsGYEqYsLWmJQRTvMaxgG8CqSbvsBBCDDT64LarpnyA2dBxTtr5Lmzy1pF2TpYx4oCejg",
  "key24": "3hzuiEf5oRJLbdbQBWX21msGcD2QWXjwyphEJuV5SYnkY5Nn6rJdwWt2JHiAtRr77Xo7Xnj4Zu7QLkcm3NMpnKu4",
  "key25": "3ZEPqms8xtrhoRZBcwbhuK6TvuDB1FXipHQLtLt3mNBeqKPgN89u8fjjAHUverZT6Tos9ME4QAwnffu9MBSx9Q9X",
  "key26": "3yMqm6J9zbQwDi7h6rpZYDJgeYspzpi8tAHmRpoBEycrAP99y6QybvP3vT66T8jv49T6tHQQSQL2p4JDsLNC8Ehq",
  "key27": "5AoJdm7GyHeVP7nEGB3gsa5SSodoQvk88o8bo4oHiy9mibq4jJ9yzunFWavtKZAGBkvjKqiPhbBB1cViJbNYuiGe",
  "key28": "Tk5MvMWfSTNkLP1JhLzF3TqTEVdih6hxzKRvFCZuaEJW1GeBw9UvffbYXs6sxnhAWP81xvsUM6CJ2Yxc8zwdNyY",
  "key29": "3RKkj2HPSiKn38a4L19sUx13FY6RmiN7kGqoexy4me14Pzx4hBnsGKHmjU45MD16cdBfLmqULemzMwSbT9jSYDca",
  "key30": "2p5hxFJyZUc37EmS8Qhi72jY6MHDdyFooNwLThZZKrNRtXErPedQEDAftnhuwi7CJoNoJ5FNcjLjHYMbvutHXFAu",
  "key31": "5yvzW3DPFji29tbnd65G6ec2ZPQd4QVtaDdThXCbftWTe6ePu5HyU2yJ5L231quy9t2uusmKUBcgGJabbvn1XdWu",
  "key32": "548AgCvi7zWRwmaED5LYYdMzH5NQjUaJA885cHmicGdwCdVagX5himRKrsa5GexxbNBUjHE3ZfhzDFmj31Ps8fnM",
  "key33": "4cCtzxEJTRUPWpRPsGev8TUukrbKjnQYwTv4AMDQKhEEZ13KUbmAfxKP6qG9n1Vh4EiCJ5MUxZLUJjAfHw5LK8Ym",
  "key34": "hq3ecvoqyAHMpcJUWawstwxmZdLjFXPVEyentxbahb9FnSB2vWENALiz65c52foNnaeMooAufSMJsFRFbntxaQY",
  "key35": "3sWU2TWtiL7Z5H8NBHSU8dxWopnx2xquQHqbXRQupT2kcGH68YQ1rmnqxGCnKiR64eK9AXYQi2d9offJjwj5g2Vx",
  "key36": "4nZhR9XYmMAHUkyeHd9HZmQkCrrZv6KFqWrc1egxdMtPcGEV1Py4y6ATQRJ25hjXuaGiTTNaaCYeyBJKsB5Ftx1",
  "key37": "3GhQFY4XXRGCKr6tb1T5RS7tGYTTbS4TihQrJVWvucKcgyshKepbF65xzWh71sXjrpmetSy2r3dbUyfouMMSM4Hh",
  "key38": "4CZtAnFrb8x2aoLSiaxvCd9usoQXPx4XfyGuhW5xxDdi2Agfe4qvhL7WgFavvthfv9fPj6kSuniDbs7QYRmv6cnp",
  "key39": "4VVr4rXsZFLbLKycnoA8fF6wcJP62t4ZcWY7iHbYfLRPqHfdU6R25uciW5pL3dTTCtvPTy9fem4C3pQtw4o8HXf9",
  "key40": "5H5kmqk18dQFToESxgjM8xHfbp69ghGbDjHAfLnqkvjLLnDqj7wC86JC3jbmqr3pjJgM7DFj53SqSSbhNpKbsL77",
  "key41": "gnkw7JNj5v4rwQ186a7uvYr9kdMqinmLYaZDFVRvfcpBiczUM6vEBPcsszfkmsZZ9ptr8GaVcbnFwxVDWut7o7M",
  "key42": "4G7RhfchbMxUBnWbNTgaUT9b3UzcaDyMdWi4QCZ6tw3JFtprbwSYKFvCfD3YYConAnRhYssWVjkmUz7GqQsxBiZV",
  "key43": "2WNLQ6An3movcW4uGkQhbvstJvrHBPjiiGhxPzbpq3QCXBQGa9Y7Z5Y4juSUnx45bsFChh1pAyybeYDaC2shgYHF",
  "key44": "bBPPdEYCuWsU89ETb8cN5rFay3ZbVLULLB6ixiCpUzHsaCuMJ1DqQFxGtD1NW1nHxtjbuP6S149592DS2XKmL8W",
  "key45": "GbHZDuts2ZdiG1Btqog8PYHwGFt56ZfEnRWA2UGnSwx7LmV5C4VnNAcTCUyf5KziEQiQugZBP7Y2tjQuv5upCfh",
  "key46": "nPbySznbnhFoVuQeTXT3DeHtFY5f7NshmgT7ZtMdNgeR3ajk95aXUKrd3BejY6fPj2iLNo9NcnEBD58sBW6mky5",
  "key47": "2gY86xfiW2jHoFbAjPneWWjnm4D7PiKaQL4hmbo3WxcDNicW1nN2HxrJfHRTgQSW6xDRVVLwiSaXvW6oVKJ8Dw8e",
  "key48": "5wRGLvAumuFTKkA4ioiws3QaPHyGJo2VMbSp7PaKoDJ2ntpGMTsGkZWfsnsvAqPW51X4R5tDZyHYJjQVSqCcUemw",
  "key49": "NsctHTMR1q6J1ihXCxiMTgqhh3XCXgiGuRfkq8Suvv4c5KDU21V1ZqMi35xK6J8qk9JeuZW94m19piK9BNVLq6T"
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
