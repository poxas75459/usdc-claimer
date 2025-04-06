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
    "3ZWiaPdJLKnVKdMgykDqR981URraTCgd9HwxmLaTUUk2avAfTcQyP4PpNRgjHjTN4UW1cYQpSy4VVcxvwsQDsQs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YB7W5V5HhrV5srLeVueWwmD2mqzMd9zqzjLaWvgii6uiVCL5cjg5gB1Te11t2nkEM5RZgWT5B7nj9a9AANkEt1Z",
  "key1": "4gUYwjzWDpsvpgjtyUt6kFoosq6aH6rHNsWVN8SNnGyjs8orcEzB5VGbCKcmaYLWKzvDGwrg4ecB7xHbGdpvCGXD",
  "key2": "44hPYJovydY4ei6jjaLhGJET5CoTMCYTA1E7evLco1VnpW3gqNzRabEZ1TnMX3C2NTBjXeGanjtEQycBkSdwLpMW",
  "key3": "NZt8FpzrwKK5D1gcB2EZ1kZYag1beLsqJLMdLG3jhkAHZ8LQcmuz3LUCeQN8pu8Ubza92a9jYTaYzG4gCVtqGyR",
  "key4": "5YwGB1obw4YU5rHhuGeHQQxRNNtqB4TvZPyU5RqGvbnrgwKbTiMMnKgiR2CMThXbVdonjhngUr6zj758v53vUT1T",
  "key5": "28xqJj6e3U7oe6VwaLEHS9yT5BcHq9TR7gMqzdpnrb9zidMdWFiF7HRAZG7Xi7MM1oWrpzgXucksb72cTtxDPz3c",
  "key6": "5Wu5bBghgPrmmKWtpB76gLgRQJ2rVUhqf8eT9z2xeRMDTnwUPUCcsYzZPNbbngae3v9GdNr9Q9iT944yH4bBk4MG",
  "key7": "4paAHCTor5UbNL1YKKYzgiL53Ckmbsz9idZm69qpxv94TDtchFTnGzCfkHwNcLMSnqeqZ9JM4JeaQGVHskQrftd5",
  "key8": "3KHGSkcbp1EBaGM1wyBRpqYHThBsEhZZ98Rqez1LdShrVD4cskVXgRTTCZnZ5ekCbprXoCbqHiW2wTKCvgSW2jei",
  "key9": "4NYaAJmjze8DmRyFL1M2vRdHMyyRgicYjjypaQEZMqt2fL1aRiu6A92cC2JjygCbHerk9ysVZMYbNVJaDzXJATsq",
  "key10": "58S4kiaWkorNKrgBHzSJzzc5LtbGZW3zQKTJiKbN2tkshDXoDqfpcp5dYSjqHpbkp59Yqc8VUMC7GqtmZfvoiMuv",
  "key11": "48RNoyHDkt5aC4542Mw8DiyzWhXQQjkYibtoUKPMuFXF7D6BR7FrZ9e7QGbacZdK7LgzWqoeG5Vi2Bg1B69xCPdx",
  "key12": "66MweiWpxLn3xqbTfPEGhy3542Ggi4zMsvDdRWrr1XvzqDJ9p2EZ2WC9GyKr9m9SPxHzowrTN99Emay8dbm2ef1F",
  "key13": "2qWRMnh1kX4MQFeyUxT2sEwRvNzPDsR9eUgM6uAXSveYu6Cqho33GB4u4PuB4XVjjZna4e4yaUANKrLSf1k3qvN3",
  "key14": "3JLeEuh7cCAn9x2QRWvxbmZarKDkwy2TGGAjyMBF3NL5P3qmyKGHCNupB2caCFt4sMGc9nkEzCY9p371asS68CH4",
  "key15": "3SEDKj3H8Y1jPLfRFcH6TxxetSgTPavPoLDG4dZFKPn4eETd4UfAAwnq3Uco5uRQ5jC21ZZ2MY5ouMbZcnxrVTTb",
  "key16": "2J4zR3x6qqPRPfBeTE497F6ZwiLL2KqLdfsoQMCh5jE3BhsLwg2AgW7kZxwqx2Vc3zKbDrFgvGCgtraTVhpQeVxA",
  "key17": "4sKHoiiNgPF1uJyRnnmupN38MKVwh5zfCwiqYixaTEmHr5wEXfsbg3TsJgdVP7vJ7YmkJcrWjSyf4WmYyEP6dnjN",
  "key18": "5q6hWUWVLqJyKoFcT7XSvJRuKtLpgy8TeARtT2wWEVjQVWfhPm95eLCT2v4WPB72tM6fMAxBKGkMfhPFisagxWEH",
  "key19": "4YyFK5jDmqS4WRz4BNzWhDUtUzCGgiodQaoui12baZVCkcmBfyfGtAQSi7i4VzyupJBcF9uALMx9fLGfH1bbjkr3",
  "key20": "4xNhg6V4oTFnT4KXook3ztpvksmug3aZ3zsz4gczyCeBUHRZ1AD3f6LiuX5gd7pLXiKe9aHHmR8rY3XGg6QgArs1",
  "key21": "5AbBwuSrHMBEJPJ4dwPA97w7zeL8uvY1VL1aF5jSDDqdmaJ7ErHpmJzVc926q1FJKHmBKbkfSwDjSQtPHtLG5Ydk",
  "key22": "rbN7XUpARsU3kWJRYL1o4oiKatgt2rSUZ5TCrLMo458P84eWT4wA5pNUf9BpqaQQSYq9Tqyuh8WrvDfD5K7pEYx",
  "key23": "qWhQ6aLHgD6RBzvRiNxsVQZ8wnKs5vCJZ1WXsp3BG32ipFCruJ16Mq8PamnxpDbbZzzJL1xeGjcNuDDZ7aKPE8q",
  "key24": "4ST4qon2oPp4cZJfXGVGmCqvTpBbFLd8pQN7f1yaJSbG23PNmbtMaHL4UDntLEpQFzk6Fq7Kv8scoUyPvQkRXQNK",
  "key25": "5YfX7bGRtQEwPGMMqr5W8FNonrsWt1viRuB1aGZvh3BweCZ3yYr3ZSjQTqJd1FUg5H9q4pFHGK5VrTFxX79Fd2Xb",
  "key26": "2YfSDJy2YrLfcNuAbu6GVVC1j8PxUALFz3Buo3GmcA5M3mYknNvthgiStvDAKZXG6u314CDw9Q2FuE693PHhbyAa",
  "key27": "5Ds2uAAaSH8X1RYxrMefgJxGhD2r69jpCJMSAUVzaPWgtQdvJUa8EAFY7RvajrNozG6upohH2GwVzmswAA5dFj1L",
  "key28": "2h6eCEMfdGkqDnJSmTrfnpMTuHsEqa9HrRgAynLaHGcrBErwFReVb8KhU4FmP9k9C14QJsvR6J51MYWUmbSEc1x2",
  "key29": "5a5Ta3DjQDWiJA4DBA6xJUFPdCCsJ87bsm1pFgY6hNYCczjcuw4FNzeFmwtU6rXMo1fEEU4di4At3aQ2R1ZdBqMw",
  "key30": "2UwaAW7tCSZ6xsPvP9FGqzX8aBjNxqoJvmZ3EYGb1YcsQf8hXUd56FATqjGb2nLN3GQVjFAuE5vaiZqYQS6oVqjb",
  "key31": "3pomAM59ZM5uTCnE4ai1cafTGPX8Gn5CHmiGZG6amaGckdXXYAuZseBe95qKEdWNW67nfANLmo8u4dDm1H9D9zMa",
  "key32": "QaW3tFK5YDm1zVugdTSJXr6YLdh9AxADvUgtBeh2VHewYBy64FjCb3i1wKnywsri1c5M5WTibeZANHns25vv4gb",
  "key33": "2YH58kQ1DHnhMsRrk75CQ8nCDbLCX2PujhgAHVvBwNtHtRyu7ToSh2mFa89t9n4pgd6VxdQB1Z7CG8JmoF3ooRob",
  "key34": "3tSo63LX7TXxanQgwhJ52SrYJjpPZuRd8hFzkqbEAZY99oEm4vCELNayyt6eFFBgwyBWHW1tE4DCkpksX2Ph4vFR",
  "key35": "5MvmxViKwat9LN7iZrRzV3Qw76zfNUxqi4YY6HBSgFYUBRsgeYHemHAzaxmcYrFTBttBbv33g7nZthgXHLNRqRXV",
  "key36": "27MnL4fRewPbEw7W8EJ8MwMGMWn5j72wN59pwHysBoggxjfwqmiivF4kjDJqA2DFxrenzUf1mtuj3zvVGDcELwny",
  "key37": "65LLqRnstF4ih23Rar4apAEbnc11s7TANcyQ6CgqDJLUtZPtdFCe1q4ehrhRqTeovfZeLprPDTqEx5rarHVA881W",
  "key38": "5L4GxtzJBMe31DR1UUppmV4JqtdSijrsdcw1arYc6uQm8JVCaLpbUBGqHY62Lk1hTQhN7HrQgN49kcn1u6GUN2rv",
  "key39": "4sadQpejHg33nycL7NjAbgvdcu6FtA18gmKKPonybk21iAnEqAXCFxEkVZMLfxFeXCBFLSPzL2WoeuvuG3wabR3c",
  "key40": "3JbjPJt8FQyfeVU6E5mrVQzThPa19SU3tX71n26xXGqbvjyH8pAyZXMAXiS26nBm2xRatS2yV6RBLhnKYdtvS7dZ",
  "key41": "5BK9FBTWx93KQpHwdnJCLyNsdUbmEVopekHKacY2Vc9ccUkxXiS8zh52VtJpL154RdtiiZsfrPgdWCrEkFSdoMKm",
  "key42": "4aj9JQWiV7saTErg12tict3HD4sGeKfmuMv1hdFHafSsHpYpTZmGn3nEEt3KgDxAKLV3zUih7CMuK9iYWjw2owKt",
  "key43": "3MeZxDeJgyLyPQUGC28u1gkgVKUHhcZSZoUFCpJxjLar3k75sw2ULu18nCV1QWNGHbhnFXLGSzppNNam9e65Aown",
  "key44": "4sZQ72gBXouXw2ikAYxb76xUfvuVhuT2Y7u7tf7EAxB96tpProB2E4cfqouK5vN4y6Z2WyZdNP1f25qTJSnQgWv2",
  "key45": "fqC1n6ww4gWfreME2k9tZySJbfwLiD1Duz63eCR5ybBpNUVzd2uXvPJFvXCbUMarwXGEmoQJJapMhonCGFnu4dh"
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
