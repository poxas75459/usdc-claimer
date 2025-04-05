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
    "4eGAsUQ914FA1U2rPxDEsU7SsrbfZMCMHHihjGB51i9LDwzjtufB15v227Rtx9YzumLgRChRjma7UZXGBFwAjFZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UnrdHEdkpFNhocwWfnSLLaBrY2CPeMCVzKFzr63aWVYWNoWkwB6ZzzBhWK3hALEcFwykEqhCVgwHbTbfARacrDS",
  "key1": "4SXw3CCqfw2vkAkz2kYe68LE733pqhpbtN3rjz7xL41t7E1ikf9gSt54dMR8fcurdUFsvMfhRiiaJwdwZgcvfqCZ",
  "key2": "4mjxMz6qzy4yudpVqWgrsCsp17CwLCZEF7SBgaYQfUEJwPrh6P9dPigUv8JFep6EuLokgPdpuzoNspH5YNhJYoaj",
  "key3": "34vJCLoU7MTNPrsjh2MFbueVrFVfMXSA4DUv2HYAmKsFnQMJmh6UyzirZ3sJ1v2GESwky5dbhfCeEFYXDA6ZXNaa",
  "key4": "KnK9JxbKWVvfAgfV6G518U7eVcABk2FtwBYR8wUvVWCu623N8cLWCK7gtysgmkYDBGU5iU7WahxjLNNa4bQzQwH",
  "key5": "qEWEoVE1U3vgLoL8ALx7LDRoW7PWc6QGAEqfX79bTaimLVsbKtM7FwqtVn49brAVjaEEXnwNT92jHG1Hoc3sqcT",
  "key6": "39fitQfH7D3ajpxbAbLeTJq5MWRP61oGEutvC11qujLfybuDrkRazFua6ijWLWk5P8Qg9gQSSRCtxquJzTr5KDuA",
  "key7": "675D9psPgxYKWgU4ZmvJuGaT4QjBPC2MtDEoWs8MGj56x6T3ku2pQ5V4srGcKVCV82ffvPCtVtxDx3pJbx6G4ksS",
  "key8": "3ZwM13eXGyreZwxZqigH8LyPyp2eBxSSEtdyaogSkdkzzs95U3J4diMffiqofYSA6cD2UVgxpwM2AMdZvCntbtQS",
  "key9": "4Umc3PJ25Lk6dP5XBhKHuibfG32dizUR7F1ZZBDu8XEAM7L8gocS6mLGnpbLm4YHHEQPw8cqC6NYV1WpxMYXTpeD",
  "key10": "5M1thoaEGzphfjgJJV3ne3jwQtPq7UVPiS56vuMKkC7LHdCQwxvsZSRj3m9b9Zu4RQnjpM4J5LU1U8sigCubcWWy",
  "key11": "3T2WvdGtNaZyf5wG4VanimFGyg1v93i3ZyWyPQG6RBU2rD3P8sa7qwyeQbuLTE9ZbN6FxnZ5WtaAS4XD14S2htND",
  "key12": "4hAhPYMTzppDeHrguULU5pKLSSGa3cbUiZEvMWoVfHvsVZretwTnwWE7uG2d4Lk8XWkw5B2ycoVMGXPgf9qXgS4V",
  "key13": "46CNxidQBkW2CyGsW6FLer8eW436UmRnXVjuFQAJzy8oG4d4oy5fkfiSRjgRaXL23W75BMCcztS9j4MwfRgg8eU7",
  "key14": "5L2fHqfGh1WDqzKRR5SVm5eFEaSTcJhBaX5swWkBkMd9bn9VRK5knZBU843FuYeXSaPfH2dEGgGSFLrS8sfHMkca",
  "key15": "DrfW2MajCTHSPMLFvkX2aGpuWN9QVkXnfo4183xeZ4wtXY2mrDnRqFpuaghoNAUXdmWPrReNZpgTh9saZdY4NQy",
  "key16": "54DSJbbsMS2sHaLrdPmH3GFjWF8Y9XcozbBbNgneTLjGGeMVH1hpWu5BNfknhfx7oXXsCimYv13eJxQpRMzfou2d",
  "key17": "5eSyY22M39vsQKpG4Xgy7A8Lmw71umuizU8AWQ31crDuizqR18PV71Arp8gfiGBQAWRBgMLEoVZaLEpCrowqyLAm",
  "key18": "541itWw96yat6t7C1ZSSENsiQCAV184ZXbSDJyHv8TKKBHhPHpHAgxj9CFM8QW99q29mdMyTknXQoXbVvezcKWx6",
  "key19": "3tqPWwANdxnr9ASaFBTL3jDnbkpyx93KaYFg6UKt6gJYdLtWfyncfUrCuxPj8UcvKUJGWzCm78BjsWb59LVtngkg",
  "key20": "2M917pGJq1m41o5vfFe9GL4b9Xb6wn3bK6NAVMA3UuPR1SowMomzYvJK5S85rHWw39HsiCEyVXSgeaMKMeqPuTWV",
  "key21": "gieQXTqLTkbMCxi9Mc3hy2vUSgLWq7FGMfFzCLXDY572aZgTPKGykciWfYBQrSUzXQKmnZhEnMUApK7gC7Ar8MG",
  "key22": "5VgotuVyzpPvv8grUaMindiwbmTMTU3LqbvMc36MzYN4D5tcRnTueQ6TqZNRNrwPnLj4SrK9XfuZfKq9d4ZxWnEp",
  "key23": "2jA9cKFmvXMfHbCRGcECCmR43sf5BhjtFDHQfyYvDQDbWnXzg4dcnpaqiU6YVFrWn7iAJB8epjkfWhfFjEJtrXaP",
  "key24": "3xDnoy78pG4XjxXy8psHu4G7KmUntnd6PNLwsRJaE5s8yaqs28ms4UhYffZBrgsmpXAFUPJRJpQo4vcfA9iAXiKy",
  "key25": "45N8TvVfzjfZr65NLxZdqo9qZbop7GGCSgGn18ZxTAaoAEfWwwz22j9dTg3MpjLXJygo8ED5svyQsUrnSCiXWMcj",
  "key26": "3Q12iRS3Zqp6fPftcA7pKRCeKJS3CBAXy1HAVuK8MkAef2ZmzhojbGzgZJt8qc1F3QtibSnuFMHwmvpCT1zZx7sX",
  "key27": "u2TykhWrsjy17a4mWYX55R1NQrCipJ3g9qeC15K9ufF6rCgskj5G25soUEMGNht14M4LXy6Nh544NC6riDjskDS",
  "key28": "cqCR2KJ65fmEyUK71nr2K32JGEZnvxbgRoBBgWG3y4gp1h8oChAmgN6expnmtnFSKtrynkfomaCKgRhqicVGoLr",
  "key29": "MZidzRavqadYgnJsMJD9122gBXSdTWW6kneXTsWNz2inp3j4VQEmqFPMBMqfTGTwvCVhoBawxszYf4QPwMNxpQx",
  "key30": "2i6dsxxTadytwteFTtuVTREZ2p33rZdR1zAKQcEno7MXg1U4D5BYWw4WgwzxJbuS7xXovDNPgb6tz2pySiy6kJf1",
  "key31": "vY5yTpXnvMPaM8puVWWErvQdjyeKip241YzAn8FrUHrD26JakR7Ygrr4G9CEVL7jhU2GoPGdqHQ99nJJTyAuCyZ",
  "key32": "5ZnnwN3gxEzQ7fMwoRrniSw7Tstr2UtFDf39GyNuBEL3TGbkJ5cBhUioZpwVx3wuMVmqVphhvsu85TPwELHv2Thp",
  "key33": "Hsdks9Jbd5JD82ydKD4d2sxYdaQdXjzZVGqAVpQJi8rLtbJMZ5qeusneiEp2t9F35fvN169BneWTvtKVfJiJEzh",
  "key34": "5aubJxMBJHddEeTcpT8rDUBgWBa344ifJTXKLrLprLFD6UJmfmruqAvysyXCfUjM8Et5SojKQp5DFcNNEREkk9VZ",
  "key35": "2xdeRwAeshcWUXz1gMMdGDr5xF5zKN8xVj65uo7RDjgm6J8AFefaUKcqx1B7Xn51yHuiefxJ7Uwdti9fuLcCbeHh",
  "key36": "4yp8L2R2eePPHrKaWxEYPfFo1xngGFiSGbvB7GvsTuk8hjtn6vsj22StJPrhrE6U9hohoxRmAMc6UfgctCRYoZbq",
  "key37": "36VTKQ77h1ron4fyMYsdv725rgbtGdYpWyuvE2JiPmZwzpekR98a6svSE1jdpKMcVUYe5xJGiadtwp3oUn8xtKNo",
  "key38": "26RGam15JH1tK7Z8Jd1P1odRxzL2y8EVknZQ8rmRxvdZ2fCy31om7SNWy97EpAfZzG5HxSDVkt2hUG7oMAAZJmZv",
  "key39": "5ZNY9o4PSsBedPtH27sHhnFQtVyLF2ZXnoETRBk7GcTKhSZ2mB9o9wbhFDt8q9P9fXMjKBudxGQTTCDJAhVi8dbw",
  "key40": "4ART3fJP18cyzamtoo9E71HefAhqenfjoZvKUDNCK8kTfYA8qo9uwF1fYfFjKavKYdSdWTBATKNvDX9bXTmYsadx",
  "key41": "2b4SBCbpdaa5d7RTyfAq39N3BnBaRw1RB6uDz2avh9NhnjV7LAey4jNDRp5my9ocYDERwtz76vLzceEdpBsiez37",
  "key42": "5yaEHhGYpmqG1uLzQFKKvbZwnzkwpBHGj5jsYraTPytViCgB9DYdxLgHF36ZJrSADm4TFgUjVkXdb8K7ww94pD3j",
  "key43": "2vma8VhSAaijL1PbHKNrHDW8EtfwB5YrnQUSnK2QPjYXcu7k6z7tnrJS6UuceWnre2SKdNr9ougbAx3Rb3bPpmjy",
  "key44": "5zvXuxZ4DdkHiaJwUuZXh8CJEN5JGBH8UPYpmRs98ypnPVt4fpGveVnc1HKhmATpVszq2cbLcR2uq71fZwsQ1mr8",
  "key45": "2LQeSb3YQ3bD1an1insv3WeT8Pr5RHiUBTBtvhdKk4wNJevEWdif8dFi9QFbCgecNXPQyRTrhB2BGwqPqCouG5j4"
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
