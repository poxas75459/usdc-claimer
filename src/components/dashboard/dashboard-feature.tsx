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
    "j6bHktpQss3faygKswcy86q5WtCHDbmjugfGwuNbtZVtKRPRPM6z5kZ8tvDQrPYvskZg5vkHa1ua1hDAYZvoa4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "641b3DfaSbvoKkNdwMSwiwKHLXgts6Lbbd4ZF3JBDtCki1f6xCucHc3mFsdA2185MpRviTRC9Vuzm4cRbXbHtATs",
  "key1": "VwJtsi62mmqWFTLgbYEMLQQ1CmANpv8G1CqvdFdQiqy9jERgafD2BHxsCMa7VN7MxWH3bzrCuB1nPj6fzxmTGCt",
  "key2": "4kPSXPHftHVxPwKkL5cH2XzroAbz5Gkkpw4P76mjhqit2BzKokpBsiwm9waVWtTAHs8dUojNFAKRqQ7FPwbnTPMC",
  "key3": "65Rpi7L1KyDxAmgovGvmDV2ZzPFkJT1YLT4sPj2AFUamy6GGqAXLHH1AbfxiaWozU2ZReK4Q6PGngZfX8WnUvsSV",
  "key4": "3S9y3Xv2D4wcNBkZSwtEB6kaKuFUHqULNhC5HrKPWpS2vFopLpND8h3tfF4zhDcteDTUAxB9wfjdphjweobjNb8D",
  "key5": "4da52nZWLKrzBbBKZXfJ3APJEH3BdWF3c6jTRDxZptbxvSJZWcWjMS7BomWrw2HhrDA52ddT8ib2oNEPosmPDWkz",
  "key6": "5WysKW9gbokcsfxQvMfoCVPuhTbXwSi5ZUN26kXwGu9VZnxZU12Sws988coyXKz9GAF1n2kn8U2UTBHiorUvS9E4",
  "key7": "42qq9xev9uyGEoSTF1VL3DRmECMwRJZZADVcYCTaExH5sgiQhnsWXCKMGYC25RCngrZSRX7EX9aFqJfdcB1FH546",
  "key8": "2Xm1jHBBiMXhqzGs5MumvLBg7yN6KDM5CBDQef9yg3bfBg7XNy5oJ48hHcNdQ7XhVavYJdSYWWL3AEkBoXJfWoVo",
  "key9": "4HxFsUSAWn4AUu1tg6qpGmpCsVAbCMxfUsekBkkBEojLvvRMtbPHfoibJbtzLeDgrDtPkQomBYwD1z4cs5jpLsC2",
  "key10": "5j7VG3i7YCJUZ8wNDz6LF9tWZB9qQ8TXHX3mt5Zm6ktuiVL2VZNWm9KMjRyhx8nakWWMnm2z1D1G7E8npogsAcHf",
  "key11": "3KL2m5c6DPPWL4Ryz28Roz5mVuZAFFwGNZWz1c48BCZUfDPGVWAK5cJNncYLnYFNvg5mEyp3KxcTQCdCKdzuhPkg",
  "key12": "Te3rHxEEseNvSW5zB4k4tKEZUHBVcGhxVgNhrKE9Ua53FUsq32VZ5BV77Rkb7YHQrNAXeFn8AEvUiTro98BZrNJ",
  "key13": "5Mfi9iEQc6dMo7rucMtwVJvHNTMaFjzH9WK9hvQfps2FnsgZntnSW4cMkN817P3G2WN9uFxXKyEmmgnNRXyyHNPc",
  "key14": "5JCkFuitX1CSAVaweHcmqvdAdngueZApqSNywMWRfhvt1dt5YUZoV8v8XXZjJxUsQ4vyQxXCzoMpA8goxziwiQ2i",
  "key15": "5eHt5A5SwAY3YPS4LaY5cYGD4kq9D16AS115Bg819uacdLUMxT1QG4vt8RiN94cjkM4vn5ZLiFgNHRwA6KTKitXA",
  "key16": "btENdxuWDXXJSu7uB3QQx8AV7UXhwJ6p9Ny1f9MviXGgYqxhbrwmh8BYSYxLKgwm5Y6WVjbgmPCW6PRjJEtGZBX",
  "key17": "34zkPAVPFdhsN76pduZG5byAnQ97M4ybhbSCZVGrFgxQyhg56sLwVoAVU1Cm76yAaQu2rEot1xmp7u9SEm63GAng",
  "key18": "5beMdCwr9gr5LqYKydP5SvjkhHoAaa2EisVw7x4xGe72GdrjsfdfUzrrW7DCGoK3koEWA34Dwm7Fcn91FX6gC1pq",
  "key19": "2jPkTU5bppyBCZS8aRJ7ozWpwNK67CPQuwqKhUfiNEZ7LvYSHNUSQKAFBd7fg1Sp5DDDGuasgjQbbrGKNRPMjULG",
  "key20": "4r3QAWbaixSwef1nzTvSfdhRx837hTw5ndEskGNmSh1rJ22AaZsGiX95Nx4L5Z3kCZeTVcqQzNjqzD9sofEZ4y1p",
  "key21": "55aMwWDamgYhcW1wofbCvuS7iYaiMbsoL7HnsmZqjHDVunmvMW5ZWAq6QCW2cv2P6pdwp1BpMcTYtS5PuC5hJdN",
  "key22": "4DQRhbo92b1sSkQ7tUQcxtExaMFnKLmQv1z3djEf3GPrTc22tT7ctShqyHoXn4B3HccH3n5tNW3vRNvQscLcUJke",
  "key23": "bjxgcYhzkUKiE6dZeaeBbTrQZYFDLhNUyNenKnfuczdyhqsa6kSG9wN56pc7qg6indxnUyrx9ZxSJ7jF3KPtBAw",
  "key24": "5yuoFQSDeek258ib7NdQhae55ZrygKvr4FX4roVpAcXo4bqk676GaQQ3LuVEYzPvfZ1WZaiy9LxeyNHDWUSQA24c",
  "key25": "2gpWk99UNrh7PTeAD5KMqnz1WkqYB78PpDGZKbbVZ9s1difdZTwauBGLKKwDbdafaq91nKjPJbDewBUm3XE5RaNB",
  "key26": "4kHUxf8C41BQzPg68XMme9BprZ2jGJ1toWj243xk8drNFJ3HayM9T68mJt1jCWP1Rhm89ZLwW19Uj1JzHfKCKPcj",
  "key27": "56DYBuZZVtf1heZhDXD9kttb3rFauKu95YCyQUFqkvT7BZg4iXZ4T2w7qoYwFYU47znecVpJPgMp8LEeNRmN3VCm",
  "key28": "2cCMBAkKiE4SxYHe7Cv4YV1SJcG1jDBn5gV15yHNcJGZ43DbPDa1HGZopqNorm11QvUrFcFmwP93N3gEzUB8DWxw",
  "key29": "3HZfXaUvUoLTDBALawp3FJYbJTcyHyy4JahENcTNK9KmQoRvuKxq1gCyD2raWS5R8nkjALpBypDxcRqWXjRjA4MD",
  "key30": "2XpLFcUJMKT1o9FvQ1seWQdTK12FVu3jt5qsvoLECWgoFUTUp9fAgh81XAXn3fP9DeuYKjk6c8MimcLbZHVSd1g7",
  "key31": "5q2vfgDnaASmaZh9c3Nwo8ErsmUJZQDbY94MiYHUg7eBs6xzftPxeFsi726r2RuuDdjBAqUM8KR1ZNyutjAsC1Pb",
  "key32": "4fSM6DxCCrTQEUXVaxKdahkxAEtMsnsFFLPB5XS8rzWmh4pmjy7syZi89pdWTxLa2XqiRHjdTQFZDTufnk6EiUXH"
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
