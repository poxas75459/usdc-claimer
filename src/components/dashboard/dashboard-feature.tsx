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
    "2baKbTainRvZFtEBmtMdPV8sjVoe3Lhz8n5JaMSFATZRBw3Vb16c8oFZ2uhHwMW3mNW4BenT9jrSEM9MRjFjkF4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FrAttVgKQYGLYbEVAdxozxNHosoYtX8kF2HK9QLBGMLh84EhYkcHfgQu5YXQF61Sa2unMJLnLZkvAYEta58UvyM",
  "key1": "4LtwN6Dc6ijUP3AsMP2r61AQCnvJvd7M4dRJJNSF5qNZfFDraCRuQ5EELSDC4ZPyJjqWMd8k1YSgm4uhMazZRnV2",
  "key2": "YzruzdmYhB3fEAajCE8CcCabJh1fjXN6ZDvDcBQQW9hQLEtvyectbA1vKKzVP5KoRgiYi7rvi5pgcQaZnWuGLDE",
  "key3": "5jG2hAjYUBnnNnM7yvt92oSfU6NVFA6hmnw439kWjTUS9wEPXgALuhYwqdV8uxMkiyynFSrL3srDFRn75q4pXBye",
  "key4": "2ryvQCaeG8rJ9NA38n6181PhpbvCA4BnZuwjCJTzQ51QSZi9bBsH3is8LEj5R5ZjB1shA5YYwmKALkZyEiUcLZFA",
  "key5": "3UHAeDscJ6TuvvBHeNxsg2Ef2exn6BGiaRbbLbfpNrho5W1WAdL5DgJ3xiquAZVtEM2qFJ94tuMBTLaqTx2Fh49N",
  "key6": "2GEvbuGDiGGtupk77kb1jJM53fgu6Knowx12hQ4ESiV3Lovmw9edAxQaBBXs9yQj84bta3zYMc2L2rsXH99yBrZB",
  "key7": "4GcwgcoppdsVUi6wEHwKLounTGEA3geFVoroCgBsrhwtAmYbQ1j3Pj7Ey91W4ZT4dV56C8LuUzRk9xEuN1heTErM",
  "key8": "3BqbNUUfJpqFxRjx6C1DzoNh8xHj1wRhTyqZJtyECXKyuQSTHbaFZnC7Lv6rVM6UhZftrJdBbVbt75Gqk8MjDS4h",
  "key9": "59e1yvzgUFny1u4Q8SMy2wCAptRH3JzADXAvjqM2D6tBrcW5umbTTSvhoHwDMAMKSGZqA535bBLEo9fAawJzkQWU",
  "key10": "5SAFiE3d1a2HWKqDv6ZGNKaykVzNT6MFiiBAwD2KydjN42mfAkjfQuu1qLRXPxDBYockVnqagmpMnuFQeshhdsYx",
  "key11": "4aSQXtpQz2Rrv1wfuYjYc2zLhpvmDYdvYNvBsGm9dBihq3kWNe9tu8NFk57QBatqtTmdnUgZFNqZjxSjnisXmCmX",
  "key12": "3MXnWDzKgu2hFHbK3oheky6oXx3J827BJWiAwimPCbFP3MbDRXLYDpKQU39Mu1ZMKbS7RPG7hagArE1UHGdkz3Em",
  "key13": "2fCS1tf9ZK4iWzM2mrXEg2WhENjmFnC1AjWkbbzsA4D7XRfx8AWE4rm5ExdJ91Mm4rcWXAugjQt1vyTPjkiWQ4Zw",
  "key14": "5Z4V4E1ykmqNECsQnzh3PBYfefdhKR7eaR6vbcTP8Gzmb5PswNb559w25oMEbnpfufBTwjAp5w827bFFS2qQZh2c",
  "key15": "3EJZDPP9KdJVzC36FvPsCS2Raw2H93ULdZtVrUCjTNRNR3yYnhDnFKGufPq4MWoxtmYnGDp6nf6hDDUbLB9q3uM4",
  "key16": "iVcDTr4XGrh3rDzv8VkNYooQj2ZuVbgKic63bRdwk2s3Akvhkmw4ShkTCLXzQw3bXRApTYigJ14yFpZfVpabNjt",
  "key17": "3S56Bnz5uGLmy5Dz1bRGkEnqZnT34RKZkVHqTondiNwP8SzdhGgJvUWoadpAK4Q3KfZwFb4j6gH8WEGgEzK7UhTw",
  "key18": "s3gZGw5z9En39NhwwU94rppLrbS2zBacnuK5GJGF7dLLcFZBWs9ehSU54f8YfPYezj5r5REBooDFuDqsPsBugZk",
  "key19": "C7wRDpu7E1vzWsadxfis9kcVKJ3ZAgxo3BS7LpWcYivM3h38pWBXNmXKErTZ7j1g94k2ZoV3pFffwzRqvfnbUzQ",
  "key20": "4z82zsDK81ozqbv2SMeRWJpzUvZRG4E7gjvKKdSLrAG42fzaacUhTXkg8HqYPTmkPqDkLMAd8GKeocLhbkWHxZ7v",
  "key21": "4WVefgoByDCFaVbmCr4DUxLxC6uzDtWJ5AF9v7WTjxhQe4yHZtGdNUXru9Jc7LyXb77Sdm5vbLJfevERvZn6TuJc",
  "key22": "52uRxt8HWP7GeQksQ2BjC5T7KVh1vDsWKHaHC5MGtBdZwuKE9MVUZNBbe7J2Rq2kd82FM7Zx7HyyAZj52vBQkSTU",
  "key23": "pL1csG4azF9W1dNgdPQEvjefLBgxJbLfpxPBHbMGi3mjcgRTsXvqsG1N3fyFTYUv5seJLruqpRtoCQXzjaBrCDi",
  "key24": "4rr6LFN94hZn6TwpnkyghoNvXGuSaFTWwuNzzmzUF3JqL6XnwEH3dUgaKqvszZiGjETsG27yaJh9LRujKxMRRmDw",
  "key25": "56g6C9ySeaSQvXAsYBeKjMCRVTnr3ffgev6Q7MvwPoe2eaJoWKgZAQRtnLwPHTojZNMzVz8ZosNhmELLmdHfyMpx",
  "key26": "2j4ZmfN2vZxFiitBk97f1cJ2KZ3nUhhLpmbXvHGwPKcwVAQJXKNDorJ1YBt2FNTf1a4ikxvrLx7LU9TWwAdEEKnz",
  "key27": "3q13ADKdyBBG3Bj2VtrCTEZXEKsnsn4P77KjB2dFSEbHpZXZ6utJ2WhTS1Ginmp4DBqwQLYrjSQrLnUwcpYhqLQK",
  "key28": "52Yt26HPjhrVZ9Y13wAVSbNMFqgpiSAfE2htfkjPFjSGHn11gcfbA6eC85fPByr3U5zZuRLCKCz3BXcEGzkYPAd2",
  "key29": "3tCeym7dK9iHPDCS8fkTX3NgL7MxUZ1Tid35WMxwYmSCM1v3gWeHW8EMocXd13sdpiP6v1wH25uptefyWcnVo9d5",
  "key30": "GF291EB8KZiM3Y6UTzYTK5bbStQUXNRSDmEn4fcdgzUXPqN9qgAQAVMovWfqFD391TNjXjFS4QWiXPHwV5VvW6E",
  "key31": "zN3fDypex21V5KgRk7taidCGcHdXrhr9SdmVCFgfXwAKSyM1ooReK4Nr71drYycfruNWTD59vp5ksXYQT93A1ML",
  "key32": "129FY1c7VeuGGP3Nh1SiqkymPjuVnKFLJURo29A6w8BM6rrA914zLEtgXCz6J5dCh9659Q1hcKoRMDYCQCTKrUHv",
  "key33": "fb9XSzTXKChK1nEHc62NwzBNKHUUrqPoq9azYttE6emAEY4T8N98P1QYaMEcirAv8YTpvubaBUBowaPm68N7ChM",
  "key34": "37H4e3NPYfqAHpHgHsGK8vapHA1MAs7r7Ca3vjwChYCLWE9TTvUebnCaBjLJJPQVGExtPXbS7i4q5XzdoMeufHmh",
  "key35": "2HNvMERmpisy8P9JHWH6NwdK3Rr93wsv1uef4HrutvDxZADb6WiPszsssJF4mtEt6WpTDFkfignkRxai8wykmds4",
  "key36": "2mUHZ1u8tZzD2KuSDPEX5ykKZrbufzMfZ1NLN17cDMULuRtYhaebsA11Kf5s6cWmMNk4XQumSmwTdxrYmeTkTtgh",
  "key37": "5L5KiCuAsxKPdZj356W7KcxN2H9eRcQwkLs8Sujo7XcBnNvTzr3139ShqsyLdVbjkwMMFjb9KFi7piu3eiFq4yHi",
  "key38": "635P9M4eNY6NKLbpayjATvetP9ZP6zDooNcjbA1J2CvqZPjrtGr4ZK6fJXhGbgc496PqrfHr9rH21FAw1gSG7Kkq",
  "key39": "5wEhxShvy5hMNNaKLRKQ9fWSTPwPeKTre3FrH81EJWpqCbJUZCGGgAdGaY3ACULoWzuFaazJLxDSRHxHX7tRcitz",
  "key40": "31HZQD95x8YrYv4txDZFCExHHiUJa87dtWcenUR8ejkueAucJeLrthVQTKmcVJKi8e4xU21VCf8AF15R29bhhWRE",
  "key41": "5wV1WEhQz4LCysNcyszVkdYD5zvjBfpcUq2uWNFSwKrtZCARoVReaNUL92S8SsVA5KjHh2qZxUMpEQWEwG7Tooi7",
  "key42": "3ScueQCRWeCUWXHv6Bnzboihej1oAAj2Xq2djmZ863eyaiQXybZdeGKPmnF3XFTmNaSyXQXVHhE8iDHCkQn182jY"
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
