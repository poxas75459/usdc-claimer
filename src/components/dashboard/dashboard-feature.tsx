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
    "5L8BX2cydEYg9c1pFZXWiwvcH5VvNR78k9GS4oHj7SQdRvrkwYFbB4q9pAcECWnTvsSaPyxhdbwYmGZ5MDR5Qq5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m4fxevq1LLMo9gQeSe7L3Kfcfh6FHjr34YqrP7KtegDwBWfLHHBGhwkeW3jNU7jhL4XXp7oAJVUFH1mEwTceL5i",
  "key1": "3foDoHn4c9zcKV3A5UscoZN8ALbZsF8WZW5DbJDhzdVZBNuRJHDAYPSH1upqjgQboes4YorwVa2onAyxQwXFyGBr",
  "key2": "i3F68TMZj8dZVXSDVUuY8KymXwumGDNBNMB5BevwSxm1e7CvcCUt8pjGzvXJq1RpEXUrtHieRHB6HBUiDVeQVta",
  "key3": "4dueAUjr76i1NUfXCTwABD7o7RpvUXXTefWQyV18RxPkJUJTXfuiYFnNybihtpa31gAW48G8GUd8L8RE8FC5n1x5",
  "key4": "3pLoFSdFRBHdrsamN5hkrCAmZgftYGouf2MBDKv2Wec8ZkzhAZDFKtLxLvfog32QS9vhaB5BkxXenhGaNUcT3sPF",
  "key5": "5UrJXV7eGHWdyeEcnPPQUzmiejxbLiW9whwdSo3GiGRQoNsUkdyD4YVr7VcGYD8gezwmhd9W9msRNP7LKoNwrgHg",
  "key6": "5BHvigG9HujsMPU7tzCW2CDjbUDqD8xSm69YmQyXQqKQuJn6ad22GzNNXYSaXL8CNc3gK3wJ3iyAopjnsZShgrRx",
  "key7": "51imVyMxXe87NaetAjABySYHunZGvByFDtszEoje1SoiXTnFJMLGEBnV54tQXybrEur6yP1EAoy2VwJedFVYvskZ",
  "key8": "2MEjYAYKqnHNbKLLsmjDcxPF8aqdzQwEGSoYPTWkBKDbEZuBaiXB5z4ehoKAAtRKX9fEDQ2fqk8vQkTnJH4fAWGu",
  "key9": "2jKdhJ5ugDmhabZk2MT8yLGJEJ3LYeCjkCeG7aizi95vuhcH9t4J9J9dJjkxWTf6bKEcJViVhobTGxjjJsA9EvXS",
  "key10": "2csStZeXbsJzg91bA6FwHZq5wXWfCYEcqefwKCiu7HbaFHaEsddD563vqe2gjVvSziNZFqTK7onfJFMHBTrDYkzH",
  "key11": "1G3rE5hgcK5EdoUnyW9Lh8vf7Uv2JcX7V64v9gTNvxKxRwim8kXJZBVmxStMsHPntEkgVdBnWcnhfvUZqtypMCk",
  "key12": "3x8q4rZwQ571cj6LJYRgu1ZYsAhWUJNQo2u6Rq9ap1KYPibcg5ymvq3FpRnTf8dKis18Sf5PsRaVUyFUwK989dvn",
  "key13": "3tD2x4N6hdiCvHnTfAztRJP53kYLpcG7GZx8Mrx2M1VKVr2Rb9BvEPxS9yTgQ2cJPgJ2J6GsaCJtDwt8XMSfg41h",
  "key14": "ZWBzxRuoAWfUXiv3cdfNCfd35LcbX4qCkMQgazEXqp9GoPEc8Mwe9eRAuZXuubVhGLa2cwXeip7VoPEhCpS6CM7",
  "key15": "aCDH5Q5dLcntoKM4x7ihqww12PZ9vzj5EcX9gMLbyqZoMbEu3jXieWJvtdeCLKuuCdPyy18qySp8HAyXgs9wxcM",
  "key16": "5Dktn2n96w1zA9ND13d2jCswBdi1N3BLZEZVnTWJVDz91hmfHnZ3wpTjjvdYExxh5r9zsGLUbauW8RQ3R4RMhmTp",
  "key17": "3vBvA3Zt7LWDh7ww4uYrmPhxfPEAH4vrvTaiwrSAeKUQj3YxZA5dTN7w6758pBrperNVSTynrSiEzQpw2wvEHxCJ",
  "key18": "5fjKivYpwe7C3zTcX85e9fMExDtNSkrdaYtY1gqQfVexvxiH3LAvXiBWeY7y2ojnR5S7kj5cPWAkD3WsrwqaLVP5",
  "key19": "3ZRxhKfhGYDNLFXSi8Tejso429XTRNvsCifg4p1sP9b43VMz6raB2xHpZR9PB3ZikVYkYwWRTNphV4Rway8rddNf",
  "key20": "3JXkrzBhJiKK9YGZUy7NCdmeHajbMFvpXfSFScS3eV2VvhNtNHz3M6hVy2USGF6gyhug6KF9G1ZMKtUxYsGrqtCD",
  "key21": "4JEzCCjGNfFNtCaoPEUKrYvADdWAELfP6JrWo4ses2pocLqyXUWQBZ76ng63udij12mvYZhWdnHfyiT5TkhNqZY1",
  "key22": "YhBmcUduFWBnPb2BTVoj2CysJytn3krdbQzwuknPYoJdMp87f28vCpYKeiuopJGxjbsqZRkpBkgtH5iaLAoEcJi",
  "key23": "3Aunj1dw9SrMfyiSzg6vYLuy5XPYJDaKEpeLziHtWb72aqdFa5zonCEwaxVgVQRxKuToWtWofcWU7ccP47y7swYR",
  "key24": "4vUmDTZVykUQpvLtHmY6ZaF6Xw6G4x52Xm4ENV3RQgsEvXFeMeECBwnp1ncBRWpgzCoQTLGChfzuWznmX41g6zyp",
  "key25": "65fb52bFuyyuDB1H6vPF3d5EKo2kZ87noMb5U2ck8kz6C1wh4ACw1atrY9t2RdjFmVaXaUdARq4eqRviNZNTjX9a",
  "key26": "5j6Pxy7kPFTFPsxkhun5SQJZ7RjwcgkatdnzU5zPWaLwgymyKJE2yBkbGrNuvyL9MVnB6KkMpq4N9Em3i6iRmrAA",
  "key27": "5mWdR1gQKkxvxBwnNcY5XJ3gavoKUGbYVVxdjgpQ879BcGKdyJFkPn26xGWxQoi9ViqsLZiGivgD9nNXAxfLpMNS",
  "key28": "ksrvEPtjAvXKUAsakeqZXkwfwtMJ4Brrtp6WFLwrZM3KdDXKB8ppfh1NpxiYXFPfgQmtzeJi4ryPuaUGFvBA1XV",
  "key29": "44pU2Ce1PC5s4Sfihhy5VFNZactcFABBC2ZvmKjivrA5i5BYEAbAUNuUguSwHnQapFviFQ3xqeTiD1cKeATE6fBp",
  "key30": "2m4NuUSeHJsEvX1U2bfU55ehdEWmu2WhMT8cDYhi192MpN4od5GRY5gpdr61uPq5vTR6Ny5Z9f7ZSVMiAjhkq5Kq",
  "key31": "5N2g36Aw2bHY6JV5PWSMw1bHrvpe9urvzt98QQ9Kpfq269mnCYsh1ZSSbn38fVwo7ry9kJRbunXRa8pGFVmJ6trp",
  "key32": "3i54JtQ3Ujc292mYbbJX3CV1FiLpuGzfjVWRfXBwgRxU1qbzrLctBfmrSVBsiihTpCdgNQbUnwvV8C5ccK9S8Z2f",
  "key33": "4Teef2V9YcG6RGanxyJu9MkPb6psoJLBKPU5zhPmnXWX29P5FXL7YhCsv9uB83pWPaJkTjikkNGijL1jvtviNutA",
  "key34": "usCwJ8G4zvqBim6xWDESkgiVcS45GLLigegPEyC5MjRv5tRiYUEKbDhJmSfwHsPd8HwLYkapnCE3MoFGGFVWi6r",
  "key35": "27zNyPs6NzWeRPRji94CPcSUyearQGFiKDyUAA66o1jrvJ6vZaqa88xgrhFzJQx5qJHBFdDqAJNtE92CrTfkowwK",
  "key36": "43PULvQNS4mKvENf5E6jiBC1upeRQRycDApqN5f619UeXq5AcdeoYKPXUMP7FtBtVFQGR9DdDC5QiRr9WHwdEXoG"
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
