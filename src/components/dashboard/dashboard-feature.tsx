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
    "3P6K1FMhtontDC61Njvbd5YhGLiGCrgnW3djXKfcu57Xozfpor6Enrt5zvmjSvDQm17KLzhcZEoJxdjBEurM3w2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hPX33nBgr3FQs65uCfvuLag7xxc9B1553FS2ZXYKXuqsvmYMksBtVaFxKoGBCWMbo9kA2ebafyKsTRJobhGf1ow",
  "key1": "54stVx1Z7rRaRgVSjAkMBjwpgKEpgPSMFkfLgmpt5VQqGWCzQ7Eh2Q7YcSATyyoTYVbVrmBJHjw7ZNEnyv8bNCL1",
  "key2": "5pCdUrPdPcinSyvkTu8Fju9csxv5Ubqq6HRg7Yg7eBKG5wFEn4XmJhS53kigMt3c7UB9TDZEoRWR1Cifbnhu955F",
  "key3": "21dRn4Bg6wBwobpQJxJ3Jk6PDjzA69sw3EBMPz6Lzkd2JAzUMuXY1iTsBEEmJtY5aKVT5gY4QHmGdrYxDpnG7Cgu",
  "key4": "2PqqtmX4BxxqBsJWR5n2J4uiVMdE5LEnNdbxJD8nscLVJ2GzstEoVVdPzW1XvETTWruF5KLrq6Lj2qxH1fKLRbs3",
  "key5": "47Q4yVY7Rny88BNCUybKfeiRfhzhv1Yyf4eG5rVXYGCy25N6gUsC9xRA1Jatk6VNekuc4MZ92sGy8MbaoeR2pzHE",
  "key6": "5Es2G39uwPzMHySpLBALwF8DpeUnak4DKFFUNnB1WQSJjK799dtSdtyM6FjkvdkUvNN66yo9r4ZGD3k7BtXBMGx4",
  "key7": "46urcRR9xiQoNfURdN6VpBesQzzATNuKVSPuz1Nr96rX72L5iLmtvMeCUbtDpqS7sEa6DmMmRyzk8uGDDzASLj3K",
  "key8": "2EcLyCNFLXbRdjSvS6jYKVbFm3QNzdZspMNXmgmDopMk2znkgMfUM6FuL6HwhsAhCUuwxwBqQPRiY7a7b6LDKtHT",
  "key9": "5j3v57Ywgw7UfPxYSbBoQVjoXmLLCBRh3ib4TgDcm7x59x9q3PLfiMtrv59hbZhkZRRXtSFo2qZJ7X9XsFhtHiKJ",
  "key10": "5JvLLZmtygNnyew1R9Z5aYSvEd4NCCzykhCyLPemDkFHxJgshgw1wmSzaRpd43ujVAHUWofat4iHHcYVpPAwURrK",
  "key11": "z36cy5kp9Np7wHmZdQsXnNH8jjV3o5P3Ra7w27vErxtVfXmf8xApdSt6htiSGta3kq344tt7pedDkRSDHg6F9Vk",
  "key12": "4EF2R2rspywF7ZFpML98E74iJhRCJmLDKHyJ8sYP2fsD6Gj9XgMT73X6fbufQpqVPxd7kafTvFWC4kGqHaPo11YK",
  "key13": "4wDBhXgszyCRtE8eazaYbnJJAdhCULua2HPwXg13xiup8ydmS2syEQyuLdTC8dRo4DWcWpiEk1tbktEn8veqDc6B",
  "key14": "5sjkUSEb31h1aAmQyR2dCrsHmQgK5SwdHssoCrA6vTBWELVCKVWrvsLYfsALMTxUmW2qzvfDQMBSoaJ1pP4Wj5CT",
  "key15": "3UkBRA8KiwxG7c8hPJEA6XNCcVKjNFh5tVn4BV48U5VgH3fyGnYPEWxi1gsbSz2G2ezCTuFZb2UiAWaxUvCEr7hZ",
  "key16": "4QAexFnybS8UEcorvayG2YxwEipPZmYwSGSSMMLjRhFrsohoTaHPBiboqdekjRfK4iMDCd7L64pinewQeFfbq8Ue",
  "key17": "5c3FeA9krPMDGs7MHpVpEBinPuLnDZTshWaVvgMNfHVYAgd3ULm2QPdxj8r1KP9WVMrU3R1QsSUUSyaoCkPyzVUr",
  "key18": "5aGWni4zbtQGF3bE6cLvwurabjj43EQ3jjgQ2PDVXz8LHs3yA86AM2sTkeg3QoabZbMBSwK2AnHgfHK3sT7HRR81",
  "key19": "5tJge5mFL96yJpvTRXKPppNvRCUgLjmJYbD4d7GfvvTLhZZsoNPaJc59JiZk6wu2CtT3hMd83rAdSUC7ryvuNJSk",
  "key20": "2qiHwEfc2gZ6rpWHgHdQKnFjuVdhGoTf9JDUdWwbC3WBY6JsMQCjnWBkSw6kZUrEfDoYNiajVAy9MXXtehWQbAAA",
  "key21": "3gP47arqEUM6vLzzAhy5ReiFYMqzZrfD5sVJM7XXQfmocDYHL9E48Er7fqTHofwAzrjL2BqVwRnKtf921N5giMDo",
  "key22": "NDjXSxTtYvHbLyMrNUdKByEf96T4UMF6g2mkhJr2uLrgUrLr4T1f2efLyTji9bSFVJe9iuHD71V2aPoi98TXUPH",
  "key23": "3u12Yf6o5cjRG3kXbu4joXXE3rWtrks8bqyHcLgxUqbVhKnjAQ93MHKvqBAvSGLy7GQkEtFbc4vBFKKTAKdEPzyE",
  "key24": "3Ln1izWczfQbM4tkiNfjEC8sGXMM4HTHYPZXf99xTmeKU11aALEF4iUmyYKrjmJvr3vzzkLPT2voeWJhiogCgCpg",
  "key25": "uzXNcyiATmHbXsnBSBkMDg3T6uMLVEmUTeh5xDNh9VS6YWbiwhpjK7Bch65U9bdkKQsTU4LappbisRZkwubdmdD",
  "key26": "3YkB9Qhzcc2ETPUfYFKwAKcuDwYx4a6KLGJCXt7J7HN5WCsoFFhMHQw2VAbDRiWdJaojtL3SonwqGvmJ6NQB42c",
  "key27": "45rVLMRbiaEyEEXeNnMHDYqiZbPZ4f3b8BhqiHSxtWmZsk3pMdU4NprCSU18iem3ZBkaY2199D7YHMHMtF8CJNwJ",
  "key28": "3pYUy1LNoCk5Hbvgs4Um45qcyPpSo5w4qfqmaTAWFJpAavxwGjmsFjS4owC52cP4Pef1pQi5zrvsWxzXMM7jr43e",
  "key29": "2sVowxzsazkpt2qX7M8FuFNQahQpS6R4NdtmbYhKm71Dpttob6ttzegpAowjQfJRk2xEjo4btaoxhhDCLP79ZFD",
  "key30": "2H1GJLpajH5iNcGCo73GuTMXvcV8iErEs4vTt9HUNF1Qs6KHV4W3Uu2grBckUcisaC6veAzGCfGACiiQHvf3ySmw",
  "key31": "2F5pz3aJNnx3hF9Joa8ARmCErc3rWcAMW1YVGrYSSC1XTdJXMqTHwrEL5VvLePWxrTu4vUCfKi7xrWAnFy87a4e9",
  "key32": "67Y1ScsWiKBRhL97ETSChDDx8mqJV6gxFWPt1yPTjCdsnsC434inbuQnztFnCmmeZEiVsmyNxnngWEwaTn3qdA2k",
  "key33": "3DqpDPYSMU3D3i2Ez2qKYgsnTrW4nwtXfhxFyQXkZoAs1tXNfCsXFHY8LwraVe6jpm7EESfhi4VBF4X1NUBf2Rx5",
  "key34": "5pyUK2wDu8fFKcP7p76HWsFspe2Tf8QSm5i4EMUKNe6hsx2SuvgbPBVGkYd5VtXsXWFSaQoscLjtGYvfFLWXGCij",
  "key35": "58WUM7cZLaLYqRdBzZCkZd7D8738Y5rRbfHUAJJekRcFTgLHyU9NKKkehHiSHehnWFpSpA8HDkUCr6LzuXWLCWqo",
  "key36": "66bavaDQAnyVPthyhfSJe5jmGTZwTjNGoWqVYmrFi8zHnJQfeAB952HJkjBK3LrpGfwA7hyZVvb9S3FJfcPNR7Hh",
  "key37": "5RxUzkmatnv1jyPjRniCNrefeAAXKznxZ1gmxCBbJWaGJyu3Gegt2QKppFKGen38vcmV3JK3zALn2HhR3wW4hBQn",
  "key38": "54Br4LUeiyvjAw4fgQejQBsjr8JZMdxU7ZxqSG2WpLjKEhoxEH36V6yEm63jr6nygwVkWJaqg3vP1S7zcqM5ATL2",
  "key39": "4JVHsYTQnTweSoSRf7ywQFZLrmtwHb2CpcueN7faUomTLuSYi4YcaotGVkj4UJYigWbP3p9hmf33dGEpJqLGpNSN",
  "key40": "45BMx1V3mGj6yoEH7QJMmAMhKTrFiNZDiypgcY31WyEfK9CWLdyvFqh6GAC7ascX3DqZEbP3x1g4gAyDK1tuyseF",
  "key41": "5SqcgEggGZx4Sq9p5gGshd9dGDC7fW6ApStHbqC9YvpsQN29jvFThtJKNkFvE5F44WhG4ix9QZvcXg6n7YXK3vGx",
  "key42": "5gdJNvEQL4nJJi99Mtw8qttohbQkN3HF1Vy1xPzQeDSktsbE9TGbhATGPX8kkB8PRCNzmo1QocnvABKkCY3gw4PT"
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
