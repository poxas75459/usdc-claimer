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
    "25DrfQToqbTkxe3xfUHJVofKTqGJw43tv9jMGYXyUfWAgyB76fRmcFcFG5JAXTBXrWrZV7FZfHQjh52PRnTLFenD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W4fdSYpVi89rHPm9GzDBSR8ai3XabYaV3DnmztYZUq3fnV1KSuSMXz3iV86xkQQx9JDvyDRNikDvPgG9HTkqkpa",
  "key1": "49Znx4iLVkBecfMvGMyxtf7BxBTHL2UJH6UedAr7VjWpjAV29PMHomc73gC68pJ1njhYyfsfJTcF8yw4Bbs5T4cY",
  "key2": "5d3z8AM2poK3oyavbrDUh8JfS6aDiffaGKcWXGR3LUubBRDZpeocaCV5wA3YnxvxLD4t4G2doxoA1WczHszHweY7",
  "key3": "3vHCinM1H2Rf5qt4xrZ5mCctPCz1cEdA2vm4F8fSUV3kLrCsjfrc2teST4Z46X6tj1gdx6QFWYetVNpmT7oUBsSX",
  "key4": "2YkHpjyMC8jazzYc59ujx3VUJ4jCFSZoqmttETzwfCp2HCKqg4fM21B3ueMWExPcs4R1HbLPKvF9YovkhxHLZkh2",
  "key5": "3bB7Dsy3aWPKnvGyZhuMfzQ1RLKrLtGvngxFdkJhpjYnW2k9XjwZ7cuSA8HYDGB4Rx3cbRs3RD3SaeJLupymdg4E",
  "key6": "LxGFEY8p6eEhVW5pQZ7Hv13YcPqFaoqn56XtjZozr75dJBZG5HMqu9PfT5WN4vv4w3Mb318qnseAXEk3Z2A6Uic",
  "key7": "62RsGZfYsnDsko554pPAhi27kxQNNkbyH61yMBMJDGSGk6hVzEcf3gbD5o1qvHo246LeBRRMJVWmSe3k7sLn1VaR",
  "key8": "4JQtKmuieG1dictwZkGR4kYftt9a3zwCMbMGLz2ZA6aKPdDV126TNpEAiuMTkBG8qLhrAigK3e18EET3PTteFKnZ",
  "key9": "39VEcDMnnAkf6hJ4S4AvZM1q14GE1ruYoZ5f8dCbhukMkvjwnJfPuWADGadRrTDqEiJdNXrSt6D7eoJkfF1s2Wyr",
  "key10": "LQsaEZwG6GRP6SQw3Q2Q7nh61NKi3VcTmzcmqS6SacgvFxoeGJYKYx5PW1Ks9vBVknjkbx3h61tbKsesNXnS7Ji",
  "key11": "4A6mZgB6uej8MrrK8AW6E8Hja6AV5kejUJxorWKVXG1GViK3woRXqR12Eif6ds3aVSHdWdiASancTMZX4HNCwdgJ",
  "key12": "52eMN2yd1nVuWRWuevFxQGBNkNJXJgpHtJCmwyqDF3nseZVW2EphWySXP92YKXXkDj5mXLtAohTizRa1DqZKXCXQ",
  "key13": "vAgzqC1kjo7CHCUPmh5rh1eQYpjw2skhY33KpPBzCF7wUH8PXeimQrsh6RgQi3jHLfZft9uqcLJNC1ihSVxNWqN",
  "key14": "5rEQyi6MQTyf4rZ2tqxMqxw9XqxJeXVMZSpaRpzKGMCiBrn4r2bvLtEa8sqwQf4GcTjvtknrnX7EvdP7AoQB61JY",
  "key15": "5nn2GQ8sxTXxZkDxsjKb2JuPC1ywDankVQpwgaxj98itjRCW43ejFb37Dwg8G297JE8ZwteTkpWFeA2tsBL3wcYu",
  "key16": "64SABd5o2fEweiMoT5FMFb4KbJpeBtHCx1b83L6PRoUw6XTPsRBeSpbKW6TLVNLZERVjYZeyJNZEGvoVm6hxJMS9",
  "key17": "3kvbEXMZ67CL4aFsiVQUPE641uVJf5KbVATAZXoM4hkbEUdaAfpmz2BQN5BvyNReev1hVEchUCUrZZ4QQFdjrnwS",
  "key18": "32PJoEARu2tfxBxxzu6LTmarvnGuhX6HcF3tY4YyVwonbhQwPWnVojd612A3ZCJu5m45q2oDDEFDyrQh8wCWzYmX",
  "key19": "4mZPG7AonVQdPDhP1oZS6HzBVUNcbpuGHeBN69b7LauLZwdUo9Jjx7oEUNG1rqYdfV1WM1fkJiGbUwjBrSGtXVWr",
  "key20": "4dJtqL13XZamz2JMXX8HPGMU26f9oZqjXmro6YSRSawB1MSmUNYJc6ZpPSqfZr7H6cirHHirMTHzc7qqM2QCnG6L",
  "key21": "3Ef3VnmzkhfgQGzAb1JrHH8xYwrbbkFeFXJDKQWqgj1rt2Y7yqkTUuKVeDGix2WRzFoz9qF8b7UbQJjLgrMRfjYy",
  "key22": "QF3wLjfTX7TwGNvvHsW67mBjQvuUwovWQnyKHufnvuzquoihXn1UcyT6qC6iwh6M157Si4VqvaCrFHProDxFxsb",
  "key23": "gvMr3iSJUu9kA43AwiFZQyzv4VRT8FyhipuvwDFW7pCU4JhUCbaH8aUa7Kik7iCh6UjSsnaTCkPepXqP8f91ANC",
  "key24": "4m8CaBrMzxfYYNmp1uVeAwmT4LkEohHoXMPgnA6M6i2cUvhdLFcGgcUJDYZbZWtvaTQecnAbCMD9D6DLdxPPwDGi",
  "key25": "yXcntBCrw3PQMM9SwHSdEyKi3KKWuorVu4F2xf6X4GSpD4WJPTCGBUCqEBBVJ5BhswJXZagNSmKo7EuTbL3eecz",
  "key26": "3jzdRySqjL5oa9udsZXC3TbkpA9HrBAjasVFaami3Nv7FA8zvggoa4e3HW2kqhB2K9uMnFZmudG3CnF4v1zZVCiH",
  "key27": "3Xgku48hQzMYV1LXBBpJ1Y44zuVWbGDc55NJs4Q4mXAb2T46uDqYsNdfmNMPJ99CcNqmxeWyB8wAXajC3DpHKFTP",
  "key28": "3jAQi6bxasNUgVRCKTdrzyoawrNMZvbiQwjYndARn5bXrAg2gC8Vu4tw7S7sHYnFXzjrta2Veif5h8stk8Kv3zn7",
  "key29": "6629zzjCg5wvomf2PtqtzG6ftAodse2cFP7yBr8aP1D6RyJtjD5Q7whPTPHa8Yv8QV8EWh1j8jrQpTCG9FtAY6vP",
  "key30": "5nxSfsLTZWxjWtxidi1HYJwhRCgSBHw86uScDrTLULSpSUHUUECox6vtCuKvYtNRcvu478HR4Yv68CBZpdNdnFob",
  "key31": "4U4tUyHrP22M29k7Pv2kiyWVq3unnrHNF4stTrNaBe18woyPatUF5x39NXbSVSwZ53JaJn5DpnECynBfry65DXFc",
  "key32": "4xGLFD7NmWXLeLd1kWxSQ9sAQPZR6n9NQM9gKWE71Yg9iWuweUubBB62e94YNqLcEa2kTxyxwqwgGXuZg2EMDabz",
  "key33": "5P3cdEKXcG3BYZWhuRcojoN31aq2pRnnm9PSjhyGJhUCTUoHJD4osgfRzmwL3fBceNTHyBnU17dJwCQ6XxCZ8T8E",
  "key34": "5pKRnDcqfKmEFusQPvRfw8SmJDNg2Sa74YDZdwEZg8B581MnEQAJFhYCtXHRg4EJ3pgrJFLXzdiKJeWWxEsaJMnL",
  "key35": "4gZ1xWAaqEwLqis2pakso6tMnnMXaFUfhzGV9u2LzNXy2vx3L5JA5QR3NBpkLgQUcMYU4zpoQq9kCFyDmkWDhXcD",
  "key36": "5u9aWuZqa6LDwJvrdSTHKNmdBezBSnyj9TEViFBcZV3M5i3A9HSAA3bv4tdzzxD3DmbQimD4avjGZBTMkVp3BHmd",
  "key37": "62qCCct6CHNYtoyEJeQgy2x5owhKGuGGRH5arP24hGXZzMHcbEmmP2acJhXG41ZMn1gXpWQCyMpX2RcatqiVvhoU",
  "key38": "3zXVizRFeqtW8FBUUg3zijtkDHuXDVjRTUwmJE97RLPzAQWe7pnpLTsTzE8gK8TvwECTGRvrjsqwXZGCExWvva8W",
  "key39": "2SjwrPP6K4u8kgfK2P15wprDpYVMbJ6wT5smJoWtVjzLKeXqEL2jwGD4DLSSE1hRao4xup5KtYfyKFfK5gCfSz8Q",
  "key40": "3CwGzrVY6MeoLB38LUpXotz8vUKg72K6U9MZcHfF22FeQviE75Q27ZVoDxjVwinRQpw3dPiT9178UGmwQYMdgEJF",
  "key41": "5JEqwH2LaG3xbwxMGRM8SK6oGKUXkgxtN9BrTGe2SHG3W4CKYVomD6yeGM2WAdozWzNLuTFk2sUW3ht9WRyMekeH",
  "key42": "5hpTiPkpaN8yxv3z6D1evbnSHqr5oMYfsP4FZZTSwJy2iKacZsCeMvnehRGqf5kye7XBSdJzoyidgnibjyY4pZWT",
  "key43": "3PDJYBDGNhvxwPcY7UAszQ4qtP3dGtv2BqYj7qF18YZimdp5bpXjcAe1fcBf4cEKHpWU4pR9ugewJcSG8dsD4ZcK",
  "key44": "3D3fsZujHERqzZTMJCQpofvmtFUgJy3LUGUbu59a3aKiGK8YpP35f5ja1Znu3MwRQyjKZHyPaVFvu8jTFrqnHyKo",
  "key45": "4aKNCyyiQSCuyjpvFX4YMMJm1x3UfA9LwonPnyDBXf7uL3nygEE3sTj4R35vrT4MsYGXN21K6X1MnJVsEWxhgPd1",
  "key46": "4b9kBQKSKvNYJ781r8vWCfaoav8nBJVeUxD5DHy9yxGZ2XXDGBfLas1xg6AjEo1bwDDe6BG6Hs2SMGf9JMbb5Rc9",
  "key47": "4kwLP6KSW1ekyairhysvpZkCURAXegqn1NfbFSgdLRbQhgwQdiu15DZQSrJ6gQiJkb1KLsTKQnC7DMJFBQrkGJD2",
  "key48": "5oiaEbNV9kbgrNLnAak5Rk2nje3HeLK6hNGmUFTVDimH2UAVGtXUjRW7ysk2giat4Q288f817fZp1bkkZbxoHBPb",
  "key49": "2n7fTJy65djLVjPtXBB5Pn7kgjcxunCyALgzshccuHdV83MiLs1AA39cPuJRTWRujVrQxX4TdJtTAFZED2bKyUg2"
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
