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
    "5LXiwkw4QCrShN9u4ujCqCfEFgdZEymC8ezo6ksgxJkwPQfK27bETveVHgRmAHaLqBjjU3tkZPSG3ENR45PiopVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wXR9hTioiswDQJky5eP561GympP6erQ81KCP4ygEyy8vyELi78WitKWuZt8GE8F8TVGFW6eJV4yR4q8xGTfWvNq",
  "key1": "2J55FxivbNj3XAUFz7P5tKCFUHgkdejMm7EBBD1kPfXxTygGHZkBG7MYwVcP1HhzWvShvmLkd6cnY8kBxMBb3fBD",
  "key2": "5KdSPGco6yyBVa99z4Pu1NeJ3N2GnVNXzL12ZLGsrq9yTFna2FDZAk9ZjLK9DF4MKbzBkYPxAuxwamyGKrKvncCu",
  "key3": "5BJD1LgJeepxq2x96oevimJpZm9e7XZftiZXzKNkgHR7qU74RdX16UZHhxzZ5DrATi5cPcMaXatUVacxT5TbaBTE",
  "key4": "3Uuw2zjigh6AtxX2GFCF1oLQvPTBv467Bbpnx4nFrMBshoye9bSQgdZCYnUwaVWCpt2cNDRc7miSJGPMMFAoVfie",
  "key5": "3TZTFSiJLGjisqiwv6qCXKSG6tomoa9WtuMH9DG8fXH2cspe7CPCjTAYgYrFr7381iJxiiRnGyr2e28kwFngtSbq",
  "key6": "2bN8qChf4PSu4WmeVPX4jhBa8WE4X2AVD1Jiy7UEqET52LYA3Bf9sCfhpiWrPqRDjmyoGoRo5uG5toZJqreahtvB",
  "key7": "2oBAjePv1ZpVryYWA6WAAb1NCv8ULZZm7vNFiAkR9zUkLZES9BQ8y8GGkS317R1vTGcvFwCjfDB6e85yeC43arTF",
  "key8": "a3FtivYrDXR1w1q1RfcYcAKp5sa6aF5B3NZFGhUu2BTuVSeNKtZRxXAYtuAq3ChFcftehjjBn1iP7qZt6vjpdZy",
  "key9": "eWRkQxEG6AG5Q4pAaC2sXbLmN5nCi7RaJAViAw3e7giCthZcA8G7CZ615a8cKdTeay4UqvAoyGRofBsJmgzeFaw",
  "key10": "38bgY2owEBjt6e1Dvc48RhweJjSVkkEQRACzmSUeTeMubYvk4ugNvAGyBMEN8gAYywLH47Qfo13Ax5MpEtELe5Yc",
  "key11": "3UCmQw9gSucSaBwyTQvLCZrwdRn1yBJDv3TCgokM2qZEyLRCp3svyjSMQyBXdsqtzU7tyaseraHVnLPswsRNwWs5",
  "key12": "5mwfgJQBP9EXnNvqFXvi1bKFWQaHnuGuUkyUKMP9daCRMjLXPA2fCm1JnRTTuGVb3LruCg5xVUuimqbjtDufKWGx",
  "key13": "qS9wpYLtMGLWUzV3Nw783x4bVTyVMkufJdCP29oHGUJ7GsArZypTtk6WDbaVnB4UddhCmnEKngtnkrbtmE8D8oZ",
  "key14": "3j8yTV2gs9VSSHSYaGmbbES2HpBUqAvu8b1EKjRgXyWDK1zbAoLegTFaB6SgAVSCr6bEM4Sf8QeQs8aqMmXWQzYM",
  "key15": "2r3cFNA6A1QpzdrZiCxCM9utLWCpFS8inwkCDQ3jtZvyEEUV6zdwGC2iiheMUAfWWi9mpeA8MENM3JJw7Znm3c5m",
  "key16": "2RbsPk5uJ2HTPzm8QUD25BGenFx7unNoPHQs1TGhmsuDZgbWE1dpyxVNGuZiJ81g3uKvMKLei51BYbEam16MypLd",
  "key17": "eGuNbuk1vcT2FxxRTSv4xXt8fhDPa7BoGU66KE7fobA2XkPDyYN2qgqxQyArNLdtYUNcToTgjLLzWmZD93efcev",
  "key18": "3u4LdUZNdN2hgQ6EiyPZzzSc3SpC2BfSFA5GWafbtdV316AmaJwt5zeyKwAVnVSKcEyLm93MXj6o9nXHCCCEkhc7",
  "key19": "VfgyemkFtjbeSvNUUNXgCCE6B4s1cYudSTi2Xs9edthzhKy42i4e8k9GcVbKwb5ttCuJaGTYR62cy47GwNDeR6r",
  "key20": "5cvmctSJ9ZsFfV6t5S8RqQeqxfAwhSabiYbmdNiYdKWQAu4Z7j5fANQux4oLCXwpnnrX1GJpUzMW8fNHABdHPLH5",
  "key21": "kJiZyuPQiDq1BjpFp6oTyDUJsmkeUBPpztAUaQAcN9mRvCPoYvc4d69pTaEAFsyCGEX9UyE9ZcvgUPgKaoAc79x",
  "key22": "np1BaBUxyvom8mPccTmgmTG73cxGEHoxLuyxMgvT4TcWJSPx23tBDaX1BDedcACw5AQHetrri37qy9sSoDEDpAc",
  "key23": "5eEB1jVojFhjWnPrSqhPQS3L3u7XAftivUpY5qwHx4RekyLnosX9grZ18n4kyFCTK9PrQXRdp94dz92T2uopZHP5",
  "key24": "2TyTKiEuEPx8gX4ufiqoK3Dob5CQrAm6huZS7HYn57hgFhreXCAkoTpGCTZXeswhW2kSjRm3x1btHPFNb9ir1SFM",
  "key25": "4FPPcUxqkWWLyfJJSWMyMHrJfSSnsELRCMg247jxcWWt4yijfMWxRFpMTgiFLjG4HWwp6C4eu25gqPidSpGu2R5g",
  "key26": "3h19RDRkxe5atyc8tMpeepurLyfzcW43edpPscCZ1eEqTrs4y8VPprcRXCfcYSvKgcw1r3a6hVCXaiHAi7SZgaky",
  "key27": "4M8jxvwPxpK6MWppMYGybDRigh7bpYcHSxM6JtLZBAL7wiEPk4JQkuydc6451GfQDYqirCZ2TwL24b6gqRN9iqys",
  "key28": "3zPXKswL1z1trnr4mG5RonLsPhSBnmJXGUtgT3SmGXRaPbRmMeSGuPvZX76Nj5mdGyJHXCGHcjNfJy2m77M6hbsk",
  "key29": "59WHdzdvceQc3BUqSvStVwQ7yNsTvz3yCZpdzpCcjSL3aUCMTac2wVvqEnJUGmuhwMNW6CoMATr32gadNCuDPg9q",
  "key30": "2JVtUGN8T4WUy9g7BJa3ULyR9KBHRpx2Jh8y9vz6J7M6yE96nEde4RpUGaoztKJtCc7BnPTDF4vKy5vmgUdm3TmZ",
  "key31": "2FLK7LYxajUfASYGusEvqGFFVR894YzdBTC2U5X7Dtvgz8DGmPtRJDhmMgDC2vF6Sr4QJoz6ZRFVt7ER1knoBozJ",
  "key32": "pxiuL4MWE9ZKdHWYVAX5qptvUwHWKfkj9CxkL343bDR6pczdkAmuwxoc2wuusrCj6f5DesdFrFUECMnXYvbGzUb",
  "key33": "5k8eHyrweorvN4yyvx2m5bmvpSusSQJwaExMr2o2z6YuLB18azKbUsd8y3fvBeeNf9TeZxM4s7XDU3JURDXNNYJ6",
  "key34": "icVEwNewczDGLWsAtHh4jUT7XsVtfvDKvJrVTrsgEFx8Hz67HaLdQtLFPVnX6tcSyHLokWcXHfFA3j2naaiaFk4",
  "key35": "37e9N77KcCXX6aUu6LdJn5gfX6RztRNPUuk3cdjd8v4QwhHZwBNfYkhyXc952yrqSDPmP1vfXNBzDPgRbUAiSUHs"
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
