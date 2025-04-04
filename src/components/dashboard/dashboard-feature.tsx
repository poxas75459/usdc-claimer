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
    "6R5pMgLRoVFNod6GTZTcPSugywhsNYaxVepumPMSqQYa4ydkKgmff9LSjcnpi4f2nhpLP95BqpYz8XTrKg48i2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f6uVmghL8HmJdvHzMKRpypwomQk3To4eahPtxwULp5FAmPYFQda4rUCikQnf8fu1sbP9tjyGUvoq5KhRnw2Y6LJ",
  "key1": "5Tikhn5pP9zXNQY4EoVx1yXTmv4SUiUknmeiNNAjb9m2agQyCz25jGomoKmcbpeXdye7UNak1fq72mGVD7VeR3X1",
  "key2": "3Mge4sa5K6FpZLh7LqB11HLYYQsX37gdL2dnyde8TYbczfZErRnCRZEysFU92xgxAS9FGtbQYW2NUW5tAay3CvT7",
  "key3": "5KGpxNCc5ZdZqBRMG5GJ4iivRH9Fwi54MvCA4WN4fxqxDTSiKVp3rmwHyUEf4rU7XE2FXc3pRB1edtLFNudWyYK4",
  "key4": "2dgPhF873ph5GP1DHnSnUCuW2782iyUFdb8yiJfyatECcdMBQot2QNTfQdjfbfYCftfeRpWEb6nSzkbJJtdYxNeY",
  "key5": "5MmXckxRUrbgqMRqyKUYBf9zR9vZhciMyxoiy2twuf91XWGZQFCdWwgLUNeg4xABNdQRDgzNZDEUKX3b1hzVqFMg",
  "key6": "4oiMqbB8h2Ymrw1aKCfmokUULVycqq74uK4Ts41QBm9YQ9kbNbkE992qq3iiR4AzrtijK5ey8Gr6YETuaqR66TA1",
  "key7": "3YAVkJsnfoqWhQDBzMtZZuWTt1D4gxojwEaZDnhtytkXz99x6hhMRFH7uEFVSfqAXiaqH6Spz2GTU9HsD6GQGaY",
  "key8": "65xsxVKMKXtj69MgJuPiXfdRL9929pniCim9Tx1Cf5F1ftXMTzk66ipEkJot7BqSqhT5zZW1wAGGuwzFv2juoKLb",
  "key9": "3UviaxFe3VX5Ac6dG57oHVuJ79a8fVL5efywijJ1maRDyAZZNtVQdxRGbqN1s8iq7Zd5oWTdePEa71oc1fmoDEYe",
  "key10": "tUYVb687tG1fuQGTgDChmCiUr8xWdGDR8e6FMH4W1ZxgKcxpi843WM2xFVjaAMdgyC7L5GKGH58jQuSNMKS9VDc",
  "key11": "2igBekMnL74K5ABmiRpnGJU85KGsMsB6sj3rbJwCSrTdKZ7ZRvi6VXdbzNa81uptzgtQ1co6dV7zwHV22QjxBmay",
  "key12": "4EaWPjDSn7DW7Vnw7iWWs6MLz2EkxfMxSF2BuK217VUQoRmpv8GNYtVAFnhsVY18A3FHKD67wbLoF3xt1s56Hfx4",
  "key13": "4rQEbNgDqVWAM1eXecEUfgcEQ9RdEPiR4h8XRDeX74tVbyyPcst5U8NoVW6hBaHfm44fnHHbtLNMyokWTgFPLRDC",
  "key14": "4XRbiU9QS4Uqa9gPaDqJxGD161L6xFYWFNhJe4Dxmprz7Fc28ncMRecBLmZYRzScGH19PmF8FEe4HiC6ysu7w5yU",
  "key15": "ZSMeBVXc8ZYiB1ah2m9Q7RBsHf2jg9rZArJexRB59WtgysYCchuo2bPdNzXinVRovtpo9hWaxzD7rqrHJMNvXZE",
  "key16": "5fFivtzW8qg7ZSbZPE3T4V5k33atRTCh3m8tChs4SUWnS4Fnz2rTsEZAm9wRqZe8X57QUkDZW99v16a8NRRiPCZq",
  "key17": "2vbBYiUiXEkczFk5Vkbhg61xdMWJFjLAQAvRPHCVK7oD7j2bho9WEsZweYyATdGnTmbigU6md7Bq2eAuji2BsrX5",
  "key18": "4XQRwYSbHMt3neioGP8V6gtd7fSas8CUeA4jTdUFtWYjtmCCdMcSLN17EzQAFcd7wabpRP23mjcNH5CWG73n4yWi",
  "key19": "u5syj9TYA4g7FLSJkPWD9YsHoeL4RXgt9pcWr2UmqTqiNR83oHBKUTNFv8tQm7A7oeN3Jfi1XcK4FUMubMtcgD6",
  "key20": "5RYEtBEreMoZE51dW9zqL4cGWR6UBzYm4Zb2SJkCyJ7gwueJZZKsMy4X5bp7B3Wv4JpJabq7GUtFzanjifNJnsfv",
  "key21": "44KiNeFniUxzzDyKDYFo2Xx5y1DehzpLatZUH9KvDBVU1TmpWKXiT18pba8NYcF1XcFV3GiQZAbQpBorqSp6dTvK",
  "key22": "SXkpUQBXvXd7hdzW3UtxnZj3Yd7127SgkHvFd9nz4M16UATzfnJhQWDoMJefeyQBPV3zCrSQ6Py4bJE4A2a3r1F",
  "key23": "63T66JzhTv2JiBUVQ8aGCCX4FL3hgZvB1F3VthWJac8GSEVaBHbStkBMq9hcm616oDxPnjsyofs2mGL7bBpK1EPD",
  "key24": "3ARwTjKnjuoqEq1xi95RSav8Qn3fHwxe2mQ5SBV6uizWzTGs57S6fJ5wpfmudUn1PENxMRGVV2LCsdTgzwqUoZEx",
  "key25": "5ZC92Jhyvkt1CKq1NGZuYHkhvnuwnf9XyBtck6PX1XFi8idiAfgc3f8eYc4acEm6nLAHeNYPCGmnTm4GibeMbyRD",
  "key26": "3AqwAnCgDp29eyqztpVHV9BMS4t6jeCrQcSkPoMrbn3eBScTRtMHcjE4nfehijMLTi9r8wQ9xVrs7gVhV7rjjf4t",
  "key27": "5ZYJo7tAHHsJ2j77rodRDBK5qPkMp59duLXu2tJBY3ichxMRiRex4YEpywjAX6M4un6eHosaMD94pPGiQtNVvmRv",
  "key28": "43cgAwr2xHh4LioKtcPjPsuW9KXfdeXfWaDQ8CJP7tjqHtf1gxmjv83Gwv46skefjAEr7wTXMtddGrTLsAfnZXi9",
  "key29": "31L4DXCE2FXJoWNVxD7hMctYU8uFzm8qBDoiuj2besvkvCxRR8k5vAVDMpsZcvjkLkx71WtgC6ZwQRzpZ7mjAoGJ",
  "key30": "5UovE6kLiM2NJ5wt9eF3P1iHTdTXKw41EJTGFzGYr5B1N4ymcSecvUKzPjxTbXLg7wnr52oE679Uj7hNJ6U9Pr54",
  "key31": "2wPgmMsC4EuRThGi1qCjPPtkPKtu8AtB8TDSuXEAPV4XLrKeZnBRJHQdPXfrbJSdPDcUEm4hbTkZ2rWPQH6oB76z",
  "key32": "5jBCRGuVuW1VLqSg22VebnKZ8AmSzmWbUMYY3aCRgFJtYYv1MXHxwtbXkzJEDMZiZ1b7bmS48B7sjKTvvwfb3Pxs",
  "key33": "5sR51ADwmhxD7N9rvqvWD94AjytuvX5rCSzmVE5ZveuEjK9K75jRXW8eWZ35hCcYTwzPNpbJMkgXWkhx4chfqSu5",
  "key34": "2xATzk45PyUcnW2GKhXAFcYEWZS8tTTZ7FCsrL5wWGFSSoo5GGmoAddw6WTKZMXF4u7z6pw4fd91FhdeTAzbgtdx",
  "key35": "2EC2PTJLwtNnMPc37ycyqL1ywdjGBrwjNoRys2Q26uz1baYrsAwggEJt4SPWihaun81GfZBixpjBrhBBUDwf8uYm",
  "key36": "cFKRkB8Nrf4acG844LeDoC4ogtfFDL6iQhthiPFJJiMyJEAhBT4bfDPDwh1X9sn8KYSS6CBNgyXmpFvzq2qYzZq",
  "key37": "34TvrnbNNpfdJdoQYWt9ATvdcZ88wPVZHEQb3WQmkSKS8AgWzYdA5o8hJVoXXC2eem2LEu1fL4SziEh72DbKDRfa",
  "key38": "5D2ogShdKEZHQT8EHY3jJE2CPeSS7uSs3E64bmqHtqopR1p3BSVjSU7JoifoTpbjN2fRbtTNmFcsnPrc8srmHktL",
  "key39": "5dpdzyCazi6MuMstGHKzqcpLrD8KovuU3TCb6KczT2QvzM3BnPngooUxioFYiMnnB4C4cJanxzehax7EBZWvss5S",
  "key40": "64Mtmgz9PkqjPgajBZdXKs2H9ftAZ8rNz72TFczNqhzpNWVLwXioW3i8EAxYdpRywSCPpZkRMym7Rd1baid8dM4C",
  "key41": "4nagG7NdirTo7MT794BBtnnCgu4qQS4nnyVMjjZSKBUXRct7PX566WberUrmvTwnyJJjDEa1NeobZD1Y4HqiXrfe",
  "key42": "QQeoU1HXD1q4sAod2rdpVDWcK13cwuagL9BndVMiUVfgUjpwZy3EPbcaesi9cMyNgjXCjyy3qZfMti5cUY1vFrv"
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
