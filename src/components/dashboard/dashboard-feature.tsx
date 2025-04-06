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
    "4nRWrPFpJcfk7YZuVmQ6g47oXo7JJSWUjZS8tGTdvqMhH6JhSacHGWgVayP1vCdCkhCAz7udfnsV1vzgLgBhcFY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3awH85RKJD2bi6Z5gv2V762t7Nz3i8W8WZbfHWAUx1754aoYx9sRyfgoZhAdZH5F3zZSK8BLSFTUKg1Qb3yyJ3Gi",
  "key1": "qLiVEVUmRLKVr4ZLP3TG4v6y7e4ra9EZj29NZoRaHNhkS2Vyjdpe5pMys5LHqm4mYspyzqZBiHUxLn8miiB8fYz",
  "key2": "3h4WY7GqNfbV8831RGttPg5ftUaVqRsuT35dq8pZAe1HKSHxfeM3AhRYnW49VN4JTrYLSo9kmwnJqMHUfvsWnYHF",
  "key3": "37xPttu9dRZHJyXAv3FR41Tw8vYSBT5dki9kVLPk8Bb6PwdgKEjQAH5FinPpiMsYmeum44SUMbPzhQ1zhtS4LkSk",
  "key4": "HwbyGnaf6KokdaBXPnNsSAxYhNPQbwvpr6PTATt9UYvW3cj5pq3F8YUnj1RPz3w4RvaJaRuT9axGD28t1JuQHKF",
  "key5": "137FpBnChdxcYVTLJ5asRcv1N6Gz1xohs6dEUhvsiBJdhiv8qrj5xX8ZphJFiGRS44eC2vBrMJRCSjWWwzfVVgT",
  "key6": "2NLcf5XCcd9sNVkv5pySVDAeFXPcAk7QGsYXXbBvJSfjEG2tmPM8gRZoT22FvCQ6ffeWZ6sDdYCP5LXbdppxvzjt",
  "key7": "3widKqd1S4xX6sQovJKEbuoXvfrr3m12hx2Ziq2q3eE1qYPi9s5JABbSfNTe7RsgdrFsHdztLXrUPhGGWtE678rj",
  "key8": "sEFDZLJrhTwjmnsx2ND3fPaEGVWavFnXReaiEJPLZjGbMyHuJm6mEHdvAjd1CK2qDzXisBjLdzVDnWpNMfg17VX",
  "key9": "LC6BNBhcZXxq2nJp1rvYYoi8jF7YaAhE7Mn11zwQJwUm8WWXNnDhjsfBJrMN9Sf2JcmtxB9c6wNrH3btSpLX1Do",
  "key10": "5jc3Yp71WcL9Uq9uemTqEu3WGxAdhC6rv1CLLiB6Y2TbHsqponYjRZjF1UtrGagaZoYEC7v3vUrxT8m93HftVxXC",
  "key11": "2dhpWJdNgm5a5SdsdaCjYYXtCVKkeWM39uKCpjFsiqcuMrqgyopuZFcn4XryzxduuM1kGoSVkXaSvMNt9sEdJies",
  "key12": "3Lbq5UptiFAkcRMbr4t6nYy8MthebUq5VLo1GeZfJ6RQxVA7XidWiKMk4YCaHK23h2sjzCoaUHowpP8MpiyFfwVo",
  "key13": "DJuLrdAsLr9mzSGtcAiLigbBzpDGwiAXWxKmneEqFdtx1g4DdKaGSwU1MGU96nyKt1WHxckEW4fva8Uxxm2p91g",
  "key14": "3Lq15jkxSrwv3tDsfvVpjjCrWs3VnYdjVSCi78bbf6CpLoatM2AkCb7QL4R964FQ9sY2tSLvwFtXdyoH39aen4sG",
  "key15": "3jWyQy4ERJnU1smq2qxB85oi33zpfAWpVX6XmnLHBezgYmsUYdSNjcAt9fXsGcM9MHPeUbuiyVE1R7dHCXqQ4C8t",
  "key16": "AwpS23BkqW37iygzBG2XAxWmNMWUJyXtKSo8sUeFrnjn5z23pT3coQXbM5Y5mfuAzufTQAa2dKvn1g9ZDr1XWoN",
  "key17": "58DujdYjGX2HEC6Hk9KXbxtfXAyftoxwGZDSNEhiDGXLU89wW27r8o6NeZFnh5hsDLjAKz6iYcQFVrKyze2jz2Hp",
  "key18": "3RAKyaRujzQYqUd7KdRKq31RcDgtsg27uU5gDGFoSK1rpj2TqaDLS8RqgKsELB3LM4op8pvptWMgQkTcKA1BGEdS",
  "key19": "4WYRVFjfwQmh1BADgQNXqeeW84uZEWhUachvdi4DtGZBotzAKGjkWgHnS7BdRsWPt7HbovPAJXfj6q5XhEwuWVFq",
  "key20": "vN1DTXT2eKi2XJqJRsDvnMkC9RfKjFX2kkZZ7JSNCrSEfCAWhsANGiWb6dTfiruNaoF8CY5e8eTAmUQ2Y6ETEEs",
  "key21": "4qWD3bkU7YHm3xMapXhXDBjvXLytYHLT4ABY3D2UZUBho36vE1eGWNrfTGwLng9nqA4R6EFAhmJKqSw1AejRZXWP",
  "key22": "2YpwLAV6tscVNixN6YEihgDLy576JDru3rkYZW97DLoQKnEjG2uQphmEiVFsBkVJ3HRjV4TpcQE5bf6mc7nBe1kF",
  "key23": "4KLjsVDwCcgoTBf3VjMpHaXRdcEYzDm8apEd6diG2jBoH32b6wVq5iafxDPrSFbgExsQZffSrwAuSPrLXik2mgMi",
  "key24": "31T9YivvZNtKu3V8LcDiwecRg6q6avWH4Cb3KBxN4qjC6Cq1e84yhZ2M752BEe84S5mq16AojZPDyyNr2DY2oChu",
  "key25": "2yyqBbeHGjvdV7uGR5T8Xq3MQsmiu1prkx2WRJ4mtStA9nT1j7RcVpCPEkigVxfeBdPzrV8wnayfZ2dsSxUxergU"
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
