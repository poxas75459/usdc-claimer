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
    "25U9wrvtFTfTcxCav8Y7V3txNCEWAZq8AyxV53HJJmdpvDj7xbLjxdbZriTS7SD5kYpSHfDzuY2cxiNrTstUpeBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLXAXTk3R1ppc2PyqW11XUtPt2igX57TgStMBCmsBTdya7uRRXAHzr9rsAQPW2mWEAwchKzVknDEt2zYchPYWwA",
  "key1": "5qBRGtTyfHZp86BqtpD35KMF3k6dtouT1tzn8cZmqFbrWyA1AFL1dFrMx4qvxXokRBY1eyEqYdfWUcRFbu7pmwPV",
  "key2": "5xGZwprVXWV4CuD8XoZBWj9BHszL2qLrJsPL6d5z31ypvF1aMRunC51Pw1BUAHDsR6JSJpCF9hHzpbUERFzxkV3q",
  "key3": "4xcKEudkBTtrb79qtGsRo2WqQfLcwYimB1cyFNyyitgAfiUkAEU8GKm2hp9jfpEo6c5WbBhZyRzdkU3Z88D4New1",
  "key4": "gPVyh5PRCTkkUy1MU4gTnefdqd2fhqFjSrVcuzCJmVYZeogzQJ57vPV9nnwewXGsRH4Kw72YF6JndqwEQHrc6Dp",
  "key5": "4UhkSYtYah9V91BiopeZifP8TuijeGVgbLAJDEiMaZvdppBCdVzbKXgGHv6cPiAEKq926jk7cxAsd6DoYWFevfno",
  "key6": "5u79pTAC7n4XrNPfKnDiBbx3M6ThjEsbw3sowsUrz6WW2iVpnMshtQxTf762xQJf3x71qzaRXpJr2XBdHwJRiSoa",
  "key7": "stznZsqDDzAjsdyM9bYdE9ZkmNBCQmxRxw3PCgKf9ThHyGJ8Qnxbc1C8kohXV44Bu3aed17LTpF1tmKYkXmGha3",
  "key8": "4Ub12cU1cA3wD5bMfJhdcXmX4z52XWfr6ffzXktbysNZgLU8BLNrevDS6hWoH3aMNGmxZnvkhXJBaVj2vQh4nkqF",
  "key9": "3Qe9iUXZWxMBXqu1fzkH1vqjwVijfo9dmxf6AkPMkB2PfDkmbfF6k4Tf9x7n5z9GgxoJiH2Y2CW6zYuDwGcG5EdN",
  "key10": "2uZLm4JhiMyFRu84vuZkAUkACfZHuAZkVNkDNDK9VhRB5UQZtu82oeQwBfh2prqVXZYEGfCkWDmK4JAQMatB92Gr",
  "key11": "2uJpgwzr1EAAMMRGKKJZ2EQS6geapvfSbd1vYfc7keUi8XJfMmpSvzASE76eSSz7Qfbfux2rYBPZVb6KpWgeQt9Y",
  "key12": "2GpnFruajDwo3NRn8kp9amcHieDjWHMZvXY9vCPfC9yfbzCMMpRm4TEzzdP2Wuui2C8hhD5wkxdneqpY7CpmdSc1",
  "key13": "TZnu63KtKitS7hJsgfEHFdWpNrnSWaVranMUVfLZKydThJxGBhMnho5XzAEg7KEAEQaGG2i4sdvGJoJCHAuYhjx",
  "key14": "3pZ94W9vADiVvoyPDMsZ2Hwd8aJKjmUj3jKEGi3hdKicScCWT7j1hN9q616oyQbtDBvVRCUFvQfcetgdLuhD6q1Y",
  "key15": "qJSE1ytjnc21wh2kcaGdo8dqaiS2KAmkBctLw5NWdbAiCEPV9Qin9uZc9wrnUS9dPe9JNuj18DSuUrkeHaaySBK",
  "key16": "25byXLq1MmZaRzmHukkLZWa7LJTr97Ybq8q3KTPoirpEYkptDqjoLsmw7zLZQ9vAu4wLqhQBzDHbvso4C4w2KRRo",
  "key17": "4oeZSXz864Q53aVWkpcfpyrTSXCvnzp4drASGKsWCGF3WqP7M9dcb4UUc9gUvv29VxH9GqVCMscfGqTHopvKxS6B",
  "key18": "2GmFqFjuDpTyzwmNmNHrRD4WsNmWuiEQ6Zzab1wTK5rgdqcmWoRqvyUJyUZXFStYmEyr8qayR1pJyvcv9Yq2RpMj",
  "key19": "4SsXygF1tbbBuoriShFvoywqhhdLDijsanK4DECn5rHev8eZabpDjyX9xT9qPAJexNRGNeJu5vFxzv27EbwRFwFP",
  "key20": "5DgoBhdcwo5LV3PFkJ57vamgYYyFTD8tMbGSQeLJAqZ5tz8Vwwh4FgoKfFFcyWHpyRwErYSKiSBNw2cWhKQjAuH2",
  "key21": "5H2rrh5cmak2PkKDtAzyNebU7rbWPYEBjjYrBRVwNqSAH64EBA9PjyQngP4mszzes2GjujFVWfYmNyCoAxAd3ZT1",
  "key22": "3duPR6J1SnWAGCVvJcBV3DHbsRTBh97N7gANzGhiPL6b8QSYr9YVJqdna8Rigddm1UPDwFaPvysUXS964yJnH9d9",
  "key23": "bXmyP882yKW4kCq978r29G67Btbsny76eXKBGFEZ5MLiJyiQ2ZiwaNSBmMcxM8oiEYF2SgL6PXPQfygfcSdTjy4",
  "key24": "2VGb7EWUMigVVDbLquyykn69DEx2D29TucpASWTpJUDNf7jEWJETcMwjz8za28Gy6aNwYxGAKzdyHum8GUVxfJvp",
  "key25": "2VwoEsLS1ikoVAuCLUi4gonqqAoavMAeKkGLMqJTiSPtAsf6aiUaJSe75p5dCqBUTK42FpUcHhMS6sTMEQbhPQWE",
  "key26": "3UFjpY8rzw2Ud4sk64PD2JeXC8PYHJsnMhf7GEhW4SoGUzSZTnjuBRrvRoyKmNehBhxE7iPscyHd9WE6wp3GffEZ",
  "key27": "3Cy93NmrN26sVA1PMhiWicgSB3wRZVFsd6gEKZ3SijWSQ15e2686R748EdbAJfgHMDELxjf7JRGcH5fGosJQybXU",
  "key28": "3Ytf3idZ96vNcXc1y3tp8dZA8Hu1mzDGTa7SnJmsygGiBRKSykJtgh8caU49mT3jPKUvUs6KPLQACFxk43NnCRG2",
  "key29": "42gB9oW77QX9uR8YwLFLs7X7SsAVybyE49TtSWEpJ9W8tUXmZmSmKUFwJDHwgxtffqHzDkn3A9jdC4AZUmpthH63",
  "key30": "4UTFkYfN8hELcymj4rcYp9gLjhGKN5L4B6fSWco81mnyrLZ1qSrLSw9xZFjAnjeFVk3ubPn4sYPHdnNiPp6E3zzu",
  "key31": "5SrLjisaY63EFTKf6Sk8ARgZcY9wESrhNX1hELAJpBo4tL43FKSfUNu5x3tAXc7VctNL7SVWZHUcd7H8WjVFmnz6",
  "key32": "5tzM7er4kR4pjuJ17KkSnZSZPasYJTXspHZgvKNdejbEGcBoqnrcJFMYB6twQFtTJ1jkxrLdv64Rm99WPYBa8Z5m",
  "key33": "7jj2NYetK9QnGmsgLLcLhs79ymKBHZ5Pfv3xbyS56Ass8AR733MuMTdNYgWPjtPB7SopAMuACnudwm3q3vyo6ej",
  "key34": "5x2GQdmJojmKAHx1W6aJsBMjfkBgE9r8fuVn5zrDaoMZGXXr7JKWYLeECe2tWy2QiS3XBAYYHfhPNxKC2KvAekn3",
  "key35": "47Bj4kQvQa3BpxP1FQNteikCFERHji7GXtZs6Xtaj3vLqdGGFWcTKK2mbe8dX8FTTqVxM6Vgr75wJhyhRoF5uExx",
  "key36": "3wqrganbQKEpFeBWsT2XTS38Hn5TaciggofxMVXijDV2de9bDki1wXqyEvu5mSQrXWFA6CaZ3YvkVKhAL2tFggrK",
  "key37": "5nSPBWxMDPo7qRrpFS3cSbLWQmG96tyaavGT872cq9m3K2nvTCgtbCapotGRVu5TmYDXoawGwURGXvzbpEivLpqL",
  "key38": "BU6BX9QjpW7gP7Yf1J4sBCNBxg4jeg8Tb3TFkeNVzTZ9V3zs919jcTDngdmSBPWkAxeBzLjsEU6hsXSqUT7EpEx",
  "key39": "5rgC7aFMZvxufv2u6ymDySR7gT4HGFVdZyybLamPT5rE7pmBsZeNFAfttP3ridKGH4zVFkRZrTb99SoHWkftocmZ",
  "key40": "4a2qK2h6D48HYKswikJYLKqDUZ8Qy1sWmPdZsxBispBVyk7M3LBhHCGB8KRyTMApG7bn8FExsruRTt8C7ccjBgMy",
  "key41": "3iUJy6N3QjsrqY9qPa4NVmpGKDDtP65ew1SKGMnTcfzPCjdE2UaWwi8HogBPHJVR9Bhp62Tvxq8qTtS15onxjUJC",
  "key42": "3BBbjW1hoR7NrvTPiba2wzAHMN412cx7QxJ3WGt6UBJMBkyrFod7TPUGDEc7NjCRUUNzwQh365rKqC3qsKe63cL9",
  "key43": "5cegtPMUTSZpjypAmtRmhMyV1XYE2K4BXyQKChfYmizRS9cCEUrdHLmSc6DtRxaQh8PzU7jZcAaX1jCrgfwzEEyf",
  "key44": "2EDyMKdVioxDLNhVSZYEYVmgcUBaSr2QyVJ1gxrhu5QZbHbcZxCmXnw4KT3eup5w6rDPaCGN3mWXkrFPpvgQd2od",
  "key45": "2UV6XzrfyHezsyoUw4dLNU2M3TgVpKFPPW67xRh8r63PBjYvPT2eZg92HvfnqurMW5JYuo3zNhheN448doUC2y3Z",
  "key46": "AH4LU5AASwkgHi2gVo8FWKr4ZAbvMtsEPvtzREZcGRbDm4eGmSqgvqmAD8rY6U76EMRKEUANR3jpaFKqZuh7xWg"
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
