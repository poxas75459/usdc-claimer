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
    "ZE8KSTqp89KA3XdRyqY6T8ZciNjXe7GyCgkgduFCn3J6DVZzWg8ERFh4EzsWhLogEPSRkGgTAqDbZeBMnqbDaxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yzHDgeeN4FfsVcyurcDNkCUXbw4LAiiWJovZrgGzucg72UhLBkTfGtyVSBAwNgXW4Fw1Dg4MHxf3o5Dsqqd91yp",
  "key1": "4adTWRy7LWv4RjKFjk2BJZ3sowQvFdMSYgnWSmxiAGXCpY22rmawLmxcaHd69HjbT69KRPEKTutzr4pFzTFp1YBu",
  "key2": "42j1GEM7iC1Dvw3oCDMCFfUwjbbn46Q4iGcf8GJt5PNMCVGrevKCBUwhXuMwde57dqJGcnEtriBPLYqvxDKiYnqT",
  "key3": "3fLEKtJZayxDeaCp36nEt9KemANqmVBwSzYZWPUxQxLV6EW39SSyRFJoMNUHoiSrsb82megnR2kWw2nTqeXvsKky",
  "key4": "qMZtPYRtqVSe5y74BVAFuWfZVFXnJh6XtAWob1mYyxNjxgreJaEAYKfs5mLrFvFN54AhBEFwnpqDTuTdvyV7ego",
  "key5": "3gV1jMeaMsqzGJwBXWwem5TUmhvT8XnYtxnTfNMpw2CkmbjjihVkUCeSgfGa6fL9MrQQpWpDswd8uTBQENpKsMUF",
  "key6": "4hZUMjMuqBTzozvhH3wiEW7Cf2TUZRSnGMJwaed9yPfAfSbWxfovcrVKJpiThoQg4nZzNC21o6oUu6dzSNTwdk3N",
  "key7": "3FRxhYHuHnPeNbaQABS6ywwHFmyzNz1W9npsTMRCbYvw4LWT6rcqmYpP91G1HBRJCwVjxDEv4Zp5fqW66aLfzjpG",
  "key8": "3iZw2LJBx81pr72ZR594pqHheQiYoYKsZ5CiamtU79fRV4aUVdSRjiqjTDrb24B8xULkZJPjHh8H9fSdx8nCQdro",
  "key9": "5aQDm9ZjJ8RD5NRJujQoECoL6J1kcJQVv6MscZiuEKrXgHX1U4iLYoMiLGtq8Eqir1VtyjRTrdTtZ75HQXLTNSX8",
  "key10": "4nJpZT4B3UnQzRvMtzYerrJk4TybkBWeLWbDGoxp1TtJ6ZQVNh58sTLYEfVqMwrDAdodjmR9FUtxXXwRi8g7okvD",
  "key11": "4YLpbDyvNKPNaZBUX1uhdgZLusQi26RduJc7T8ZSf6mgdEo8CFeYhFcP9qqPvkd48ruAf95Rf33Gv7C74sPQdNtZ",
  "key12": "55RxBkhTpPWCgwqEhSsz3yM8Fdf4S69ZiiuokTSfoXdjahzZsUu18cTbqXEhsp62nerx7fGs8Metw6XkqZV8vx8t",
  "key13": "4rHs5Vw5S3iN9Rndk51cawEAniFj8LtNh4ZTDfUGpbK8L2bFeuon3wGwFtsfqyaetgNdYtRZUAsJSYY3GajA55yP",
  "key14": "4aocVBncHZe3YUW1N2ukfUVtFFzJkhS8CqomcBc8Gexow5eMtgVAxrGZ8gnDb4yzfQTw3LTNnsY3GW1h5gVS4uo8",
  "key15": "TUi93oVUx61Kjw2gqNSww3vYmzD4JkdJyaQBf9heGcTb6vPi6KzvPPD9dy5HbQ1X6yTxEyVsunrdEi4FsP2xJFD",
  "key16": "45S8ZXcHsqeagSSHnawJ3G9u3HxT3PvdXU6LKJ1D9xnoJfbUZdoQnb2uAJSYZ5NcbxKazaQiPt2ztL8oNFaMWJv2",
  "key17": "TYcxcnN3mEvX6opPdMDSJXyySdknXM7sd1S82SwZBSNBrVnovp5QP6vNk97KUiVarK64aoaJA9ZJdfs3VzKtV63",
  "key18": "5EEJM3y8ECikAMu2CEksT11znbCUrSyfXjJZzUTgvHHKxVLC7evnPuFqxugtYXtnB926sVCqPRZBCWZr1qsGp33v",
  "key19": "4J9aALRiBsj73GkXsiSDKH6GJKXxFwAV2ZhntVnkMkV1GvXpYMftsNHGCokmM9Eeb2f5VbutrEMG3frVgg9H9nXy",
  "key20": "2pRVmct6efcFZp2vXiykGxbPfMrTsNpJoCtqiYgh5Hk4WG1Wc63ADgvQCsNzT91fnoTdLWmaM7ZL6cej4j22s1VS",
  "key21": "5hAyEh85yZPHcYzRghMfWnY6fq8SnoAga4NXTMAYdKoGfbR1yAy4taYJ4NXBa5D4ZbtdiZcZAShecBLsDcPWz2VV",
  "key22": "4aE1HmJkYM7mopdGTB38jYfzwXHnTEbCRiJcSPKZk8v7WLsa6XTCbfBBDa7Gjubg2VCFTfdQ6fMeecrk8XsX9yjx",
  "key23": "3LNyYDKcgh11Wd5yQbdy4vM5aeY3bCgLGwiMhsTvgEPzjGB1JWiVEQtd6inGoDZ7jzy9RiBKE39MBFLkorLaM9FA",
  "key24": "3dhC7f8bHpDNEN68AffvxiAf6z321zDnsrJhoyxoGjL5dMDf6jRSBV8FyrwgwGjnQAfmj6TKLQPKBRWj6vzZbyn3",
  "key25": "VMwRUrL1TXVF8gfbKsF3U6oKc7ek61WbdpLsA9Wxzo97MFCQ2Ep5bXH4qkcSSTcRXY6CXcksaVLnm55sFtdeDMF",
  "key26": "45RHchrmk1Khq4dcAkKnmePUsiuXYdpFyG5s4Bzh2oLoFFW3R34oEgoXdcLPPEW3vjB3fYtjbY1dxejEXcbcY7wK",
  "key27": "61qV34w4fcEaqLqztyv3EdgLcLGifNhYRBNtP8wx4SS1AQ6Wabzsy35RAL6g2U4HbURAMPwvsztS9ZYi1DaCprhb",
  "key28": "4RHw24kXZRXN4L7WFHNkw4EqXAFmbgPkppJR9aUtZc3VjabXM9G8BFEAqZXS2a6ELkLvCnnTNojeTZQsbxu2jvUs",
  "key29": "3C7q7QuKJ8FH2p1qQfNJyspLGuBMXKF9toTAy1aTwsdGfZJRCgZtLuXA2ftzuePxqD3WLTGtrL41wEEmofz3cuej",
  "key30": "5MuF8PkUY2vdUPFiMB8NYwk7dpPEYQrxTbEZJNtzhd5K8FhgS2d9nKs11Vw6X2xF5oL2z4E8Ba8eJJuY4AA42YCk",
  "key31": "u6yGszcnhf21cCPeB1bAungzcD1i7epRUXZFraoFZFPimmNgmZ8LKdW8ZTRyYVim9s2zjAXWarjuckwZyr9rTjU",
  "key32": "hj5ZxC9VhzmZKis8CXXRFggRFSLSKWPiZPC81xRfb6siGxnfkfni7oNqDuziGDzQHJLiY4tTqmKoDhyZyd3fz72",
  "key33": "2P5UPkQs8fokZDaCPonHmBgTMurcPPTgpi4k4ityWw9tVLEaA8s9HQ3Z8NUygAxzN1V3tgMZcEjMrP4BvmurBftp",
  "key34": "36J35rM9iCNN8Ez9WsXk6s8nUMTcQtvae7CTfYf3tDkYog4FZVuHMSnbDxc77jBum6DsdHFbjgqXD7WD2ZH8arVZ",
  "key35": "3BbKTRZXu3uafMEQyWYYTYb7txponSBfJTCxMRi2vjm5Uz9MC73ja19WnwtQzbtpRfoCnrzwDa6cHBivxBw4Wpq4",
  "key36": "4eaPszRnBG3rY5vKkYVCMRKpJTCTsaWK8c4MYgaqvdHrWyrLCeSmVhobNJFg3ZpffbTmEN8QeXYK5WPoDumPQBCH",
  "key37": "4XadHjR98p8jXkaSv6WLzpr9XMvFQRMYM4m59vCpuf3qBwCzHZHUvAGyPSmda2d36PWw4hg7TLGbEEuP238yMVEa",
  "key38": "4pz78ncbzy5GeRxthWia1GypfjY8RdrGNL2gTt4QfvQvSom3sQ88LyCxhcXn8MDvU5FP3JkG3EbbXgXj32PKuyQd",
  "key39": "2BMhd8jjaAHCRTkjH6qoXkh7ePTs4j2WDox5UhjzvRdTcmu3Ui1UFqbyZKYn1SS1TgvS1SF4o4vpYKJLZGMh7oH4",
  "key40": "2EL69fq1jou73V66cb5iohVSLpRaDKnunRetfbPw9NBE9A4mUosQbaMqumdisk4xteTGBbyiF2dqrtZ4gqxi5XDz",
  "key41": "4rNgN2jEJqhsqFwfSPKHkQCvzpzf14kqmFqURt9m7ttBavgwk6JCibQ34RASBHcCAQtywkhpZoDBU3yZGGPG4UVp",
  "key42": "29CTsqcgbCUSyBttBTbh7mHpPCJkoit1P56e7jroVUhmHcwkNjcSF4B8ixXBiVZPyj4myaHqeVitfp8ovjTEzGyv",
  "key43": "2LYGGJ8zmAq2duqJj68vo2hYFWrF37RZbGe8E94TWx1ZsApUY4WYhXE3yNidc7fnURZJoVp7aMF2NfKm8EnmMxWf",
  "key44": "pqbYec7Eb2HCAJ2zuny8Sk9HczBw8DbeX9ieX4HRd8aS6aVzEEd8Hwz3b1jgNmHKeuR1Z7jSpieH9CxjyjWC9ji",
  "key45": "3Sv7SJKnbWQA8bFc79FJvosmGVzd5HKacbmBhZNmUdacq9NpLQ3yw8xF8egfGvD25Sx6X2KkDMVhYxnM4eopcEW",
  "key46": "3AdppThyGH4oDr4XhVBANY8Q7xrZbDXa1nS5j9UZk9gQLdX3mXpRZ4qkJ1riydvMMNvqe1eKaPKdFtnP5jRkPnKM",
  "key47": "2HktmvoXNB9k5BotnfsYDuXL5GRyzWaQXQTTR7FDGWi69wK55Jr8aKj23seu8eiDEScFn88cQgfnkkG445dBQagx"
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
