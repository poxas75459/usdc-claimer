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
    "33Hiwop5jzVmCgfWSqQk8xgdFmqjaBYLEwV3MUGJ1N3JicYPC9Pb7yfeZgtXHQpnMDfZkJVJHAHRSjj2o2jLQUz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8RHi5JdYxPiwk6wETkzYVm68uZrDkXKhSVD5Mw91Nm3hVSAnUxwDW6PsP9S19epZ1nk3z1CuhiU6FR2ToeM9TTw",
  "key1": "4fQNb8vRrfA9KBYFs9ex9UQLMWbaDNLnVwvcqQWcnwqfbAcQrnkSz34rAwBxj8Uu5La1H18H5KHaLRwXcrez6EhQ",
  "key2": "4z7KioCZs4LPYy1hBm2U9mALSoRvfjS6ziwxaVqcavpHrw46VMPU8zvJ5Kgu1AxroqH2x8hMzhd5uoRqR9jHJ6LB",
  "key3": "2piciuwLVM2seGKGdQbMgMMCYq7Zqx9ES7ZCsb8n7C7Ty4ALryC8vUEJxnTBCbELcRQ4nTQC2AVAGmgDY13veXoN",
  "key4": "3WZtU4v1wRXDydpbHUQpuxPpp2hSRuxLu1TrDeDf3q5HEprXsFZhWWFdb7cEDsc38ccc6ExtjmFoiVt2bcLyRMPm",
  "key5": "572acokwUcJyH9KBqzHjcsD6Y2xFMvJPzJUnCMASots4QGdYjjY23ttjB5b7xh2K4uCeKrzF6ibKCEXU4jUoaxcL",
  "key6": "2cyjMPqexC3pWJb4LN4kyh1JjVzkFTZVynwsBJXugZ8k98mkm4uJyrF1tBvRqXS5ckwJt4ik53pZ2med8q3m5y9j",
  "key7": "3b8o5oqyYDNpk2sXNWxaLqnKAr63beqqrnvrtRHYoUBSxz9YhLADRP6j75DHdYtTL5xPU9y8Ny26VNn2AZpmd2TN",
  "key8": "2ZDgWqkQFPzaZcghQxn2citSjS3WATnD3FEiWPXX4xxPgBr7xY9pao5sZTPyTf9cgkaAxKGRBusUtakCYAMvMsNs",
  "key9": "cPVnzFeqTSH8MbYkMEkWQVFY7TcytbHytkLAhTqwqoqZEJhDvZV2pYuCDSmv1SVFfm7xVhyuzLv8pMjg7ouzqwF",
  "key10": "4ckJcvt9mGY2EmGfQuGS8wRMapyq3fjp5iswF9QVJRsLcf2XtcsUoDk4m8yeCbpqyJqMQnFzwVxqeoFRLtqqfyAZ",
  "key11": "4sdfkq8edVae3bff7Kw4yYk6kFfeL9pJxPKe6CdGpEszKLDf7sFVJ2cGPRgpx8Z2RPDPidejTccrJXnf5mzKr1aJ",
  "key12": "3syqRqQ5fcMvNrmYbuSxYypkhthLZUTrMxQdQkKkHyoekY9wnbFhmVbkzhGcL6idCkNWNy4fB7k9UnaYBxwshyCJ",
  "key13": "1G4Dj9jdJJwsQXqiNdhXmocqvw2j836XaMGnoD9n64y9CX1QpFkfmrJj5hzdu38rSt86p1DMYr5LHfA46JC1LZE",
  "key14": "5NhP7sH8Wm1ZxhYwGMWq4Gpd2vnCCfkFh8XD7b5u6sEhgzXf846LdU2Lj5HrxBFnzU4c9jkFgKs3ahcVzsqThQFF",
  "key15": "5QnuzfKy4aNmEdCmjYNoAA6DhxZjCyScnxNvqD6Q1UTJ7ERvCFQgeRGm9FoMEwzKbFrAgrcd7dsccieXTcYmhE1p",
  "key16": "4oCexZBein3y1nVQL91yYztkE5NZKkrpRidYvW4DwuFyyWCytkWvdP4W93yEjaK3VRhmAR6Kkx2FZGYkzxXyABFr",
  "key17": "5DHi5B5VVWYVqaTRyJy1piVGUGot2GQmSxCpZXPhBi9w2AyGL7Bb2iVPVRhNs1UZ28RzZXjSxn8yxaRESgm4Hpai",
  "key18": "59p3rVF8U4vC4x4ZiBAfApNY5zGk4rNvkJ9UaPRPSmK8ExZJeZT8uNNSNPk7LgBXSKN7zKS5ThF63HPDWdQhYu5n",
  "key19": "4aNKNABZWP1oSM4oYAEbMktMWUzuHypLH81wvXAsq76bucRTeXL9LM5G1QkHwQJFRa67kgLsjseAiWnvZESqHNwx",
  "key20": "4mDxFiiVSvRisGPY8s8F2Ajzr3ayEnX7QtpxuZPzV2Xdy4CWS6KSsyRQdALAntydw8cFCKGwYMNvfd2kxFf6TcEp",
  "key21": "2VfyBQwgu2X9UGuaTHR9MYbMY3zBiSbwLAWmACgcrJWudQNqgdmrX3j8xQa2vQJUBj37RdVo4Ns75STgbsEkpiEj",
  "key22": "3qQ1SV8nrohpHxjUmgsDXt2FfLfdV8q2BXHNTesq87o7HBLjofgXPSsPTd4PqNGq91D3AYXqvDhocmd42VPx1tmM",
  "key23": "5Ye2jLzjdY7WpZYKoqxsNQpmRHVYrnosJPEYNSQPbtC8kmcwdMJBQeENP5otJeTiadM292R1F1HNsdiVDc2zpzP2",
  "key24": "4Sc8m6F6RBCBkUgc3YsRe9BRMyAT9ruc2dfvNft6A4jjSJYjj8JiupMinMYSAf1nzbQSsNucoZqj6Es7mhchGq84",
  "key25": "3D71Y9pwBRkY7JJJqJHiLiA5srd5EsYmEvWXA9q8b7YcfWYpxrvnzQBQMzf69epSsTZLSCn26j747gntERWA3AZf",
  "key26": "2g9dB4k6qvPtrrxX8CswBGh6Rq6d5i1J22HCPYRoxi6zr4P3WgGRCcjXnVwwKVr1Xv7zdLG5FXm1oVsGHL5oToVB",
  "key27": "5RhhhrBbwiwDmk6bUddgL2Gmu3HyjvnFmk4BdqDUef84XfkMCDg6W7Q7LqkvhSoe4jjv1xFxEna8RbEiDYSWFs3j",
  "key28": "yU7rDpGJTbpRhs2dTWJbj6NpCZoG63PkU5TEFzKHFAiz3NniDPvsP41ZtKd8T2bASBzpjcuZ96dvmV83qDY8mhW",
  "key29": "5L8UMXEHVxmLWm3erCZxfouWumc3RdVxYYJv4kaWb54FbFZjcLV6Y85wHEEhKNgbtCWVEZz7EzzvpZknKbzd37v5",
  "key30": "3bD8sDyzZU79K2HdeoRX3Jhvy6CxFKphDiXfiscqt35Lo5G9T2PoeyREtyuDcqhYvZ1Xv6wqmVXQpFgvBfaLYge",
  "key31": "5ZvSLHS6GtcyTyS73syYYTzNbB9PZPJUbCbHM15To1f6yBf98Z8FFe1iJdmTsrsu3VoRGBHDnMuo2LUKfNE3dUHc",
  "key32": "4C6Ht5whe2m5MHJcggP6F2n8grJnZatiwNWXCdmjx3h1rzRNaBbLeE6yXsPDc9WcVoocoy2iU8oR2d1K6vc5C5so",
  "key33": "4XaEgT1rBCZiefqzrht2ckMeznWA37Db196Qw7kZxcwGVGXMTwLv2K1pUu4152cKnsnCzs1tqs8aTLMNUzZETEg1",
  "key34": "4ajkqNoxVLeF5gHwsYBxuejGbeFMywb5DBx4RaL8jwiKAVGdBfyUMc1cMHExUi2Q2RGxHzNYnGVRToTYy9kVAukh",
  "key35": "3zi7EV1ChAfK6ymZoG8R1FCbysUendhW1Meqo32Tu2WQ98F9tfiu3vSXXHWcQtHMXEPNqVtZ7xGWSWw6H9qozcYW",
  "key36": "4uxzGRRpwX6JZULH8PJEFPrtsPyHyex1Xe9vAHAe1kdYYcapnyEHxsi37zA144TGTVcN6aEpXoSe5rr8mQoK4Kse",
  "key37": "5EaswdpknGMvYSt2Ptq4imM8nfoLaWu5oxBczAyYeLMkoYcW54dMU1g5D3xgUWeSsz2De8nmt2Dt2D52K3Ax7HHu",
  "key38": "29WhZgY9qCaJZcebicY5dt9TtgHQbnwdq1kN2ChsaNJZdfb1CGwm4j7CroANBiqQJuiGkAbDGNfUTS2JvDdcgHrL",
  "key39": "4ZgTXVSMzXHRepUHLktJp8WQMqmSwiLfY2gRckPYNCVgXUCfeKfqV6yFqNhyH6CKshGz3z6G8S1ADrTGcei9GWk7",
  "key40": "bZrsofHcmVaQudhrYqAMKHuYJ5VNXT4XKtGmfjJwZsq3vBFrHGwrdrj2mXRENtkQPqc31W2YvhEuay9NHwRFRTa",
  "key41": "47DGN9q9oz4P4ALfoA2wCNZcXADgizQKHd4K2ywbgtWLXgqQcJHjs34yjQKKfoYCLcsaxMgd9xSHigz4prvYS2XJ",
  "key42": "2D97tG8AzN8EV81YnjxJGCLW9HJNqjcpWsXdmAyutPWj9i8KKpTH2TAb5KPHJGnUM2U1Q58sUeuQ3buz9hS5MCx8",
  "key43": "3q1xLMig1EznkFDz3mFmV4hTRmBTa8Vz5MSVERUgZd4HkbnwQfCJpSoGmHCvCqCh7fChKmNdT1tZjGkyCtrk6PaF",
  "key44": "3jDRCtPc77hpQ99wJDr5S3asWioDe5JykPtqPQsqqEBTw5ZQ2rFNtutwNAsMRv7CF79nJhbQfJZVSkWzaPd4yAn9",
  "key45": "3CLZ1qk8GtnqEc9oJLE4XDPPFCVhi1nktEaNtJ4zH3M9g8HREUo7zfKpr9TxYY8BSRi73jGDi85MaXVXzmJuXj3m",
  "key46": "5U4ktjKodrRp67t737w18TQibYYGiWd4pJ8PwvUce1UyGq9viRfjYAMNyuY4dCYo39VZ6X5fo7XtSgzJ47ocPCiX",
  "key47": "5e9mvsbyW3WaiZwrCEXHSFTEG7DB28swzsRSBtD3wkAx52Uv5wmLTgQ6rpjsHYbqGdT8n2gfnpLKeg1FY69pRrep"
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
