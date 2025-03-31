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
    "LrK2PnkCQmmXATgjqHL5utLpchGHAhX1WghhU8RF888cC4yQe8EEK11SFz6udEXCUzZSw6umiEPhniJ5UPt549T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ak13D4z9m3acZiY23rsm7D46XZ5y6rFgVxztLcmrYBttNDTtvFaSKHsTbzNqP3iHjJ4DhpzRAzwBAHr7NDqBVT",
  "key1": "duuUejypPYUjqNUn1G2PSDpsLF6LmAveiEqa2Kx3WyWovrCkZGvCiiELGEdv65T46yKjELESTfS9GhFUL8q2G54",
  "key2": "3HRQKHTfaQgVHWktzcMMUDysE4Sxq8Vo6W3a3j7vtZuBp3GtXyrAFRKsSTkB5htZoNAG2PSkFKtAFZPXTwAqDfJ4",
  "key3": "4zLn6oG2cUhSffvt8gNsyP4CLkea2cXWWRABsa56A3zsTh4D7PfS7P4bzoDz4W2nqsxih24WbhTyHjaaqAr2kDS5",
  "key4": "5F357xMbuCb7MZPFXsdJVKUy7c5J4fENDGer5ZL89M1gA8VtUBKjUFWQrmM871epCPnMJUwfjpiPsr39fYxBKdQ",
  "key5": "4DsNJgqxLvZoSQFBF3SveRhKAAE3GfaVyTHsDsJ3fY4dyN9NEVvvYaDYnAkAh7emcK63CMPTuzgktqSoYV9jUY49",
  "key6": "4nUjnvig2dj7jp7bqJzoFVq9T3P9sa1TCaqccQiNv5uYYUAax8GwsSGHychgFCoCSjkFAXZBNMk47iSroguvjGMG",
  "key7": "3fE69A6mzkenQELq5X76ncxwP7kGcBu9NKY6ARGRAK1ZEx9ePemZHDpyZp2cz2pyjgbsnDRVkYNompLuYN9d9jzW",
  "key8": "X8Lg6f1CaHvk9TN5BdpJYA8juodxzoeEiyjbQLoSe5D1hE4exJ99Y8aSjSvtkBvhBk4qCdc2uiSciD6GqwJ9yJQ",
  "key9": "2XeaDuaNtpCDjYguPZZF3y2KqNU7qKBZvvhi7h5khLyAD5BBrpGDsgs5MDGWuPBXTg7YDkFt8ADgQeVaT51Ncxcb",
  "key10": "2wfr1Wx6FyJ5JB17C1QaMsDmFCmYYaue8HYVzy5ia8usgfnXY2gVkrvuU9z7qtJCGzeTKc1qDXJWa6UsBJhbDmn5",
  "key11": "4s3gvphZu6T2wKBUWbeXvGPzVpJr2sxjAuZs4oPiX5CafZ4fQy9BZS2MSXF4bJ9y4SSe1VDh189NMNASNbEDEk7X",
  "key12": "bjS2TYtJGo9oenVnHcbemn8TXCcTqnTYBE7SaBC5RLwr66FAKeq8L43q8TA7JT53C1QjRHcodQCNUGq7nA2JLwm",
  "key13": "98vbVhd2JsbHEKsDzY6sf8cz7dVTyH9WkZGHE1fhZuwSvwBPoid7uhLX9BkNsXCdX7XGgmtVcX8QQMMgi8Zma7K",
  "key14": "4Jxh6D7vWWxqWuEWYpFXM7xiX2am1f3KCDKNrKvynLUDdT45b18epf7vSVGmwHPa957ca1UgoMe1uCAAawKwmpGm",
  "key15": "5EAtfNHBkSpdXMMXGJBoe1T2ipZJ5yww1wG9Ce2hwHPGCbB2LSFJRBBqPJAYmpDPUZHGAM3i23qAi6c4iv5meeCW",
  "key16": "3dDy2bcfGG79b2WCG87ZVrgdvRXjV6gM994v9DYXQBdHfXVeknmbU7YpMZ2v71Dsj5iWEBpTsjCeaoVuTWBc7YW6",
  "key17": "2AxTuGtLLMEThLf5YenqmJaKkiExZLSKb9a1fP9DmS9b8Nhaju1sKeEyYniw55XaDwX9veGoBLo5yk5vtcZ9jWju",
  "key18": "x6hPnUzpVRZZj93qA1rna5y9cjqmarNxQWUrFaEej7Uz5T2nnn64xYtQbPHQkmcP476S9jiah1VNcGxrvqWWP9Q",
  "key19": "3SictMqbYbt9WPJCL6VvGNzjPUFiJ9Xp8FvTpDqvtpmMFPfi8A43DRgzqrZXfnzCTGMgSXRqHckYbmneTZyoVCyH",
  "key20": "5ATMyKRgS2kYt8S3dCrBGREoemut2csqvQqAqpn5iRRhPW58XY2r5vzv9xNpHSfVUXAXhriqV5oKiLUC5Q4Jb62M",
  "key21": "g9m3HotUs1pCq4LuApCJYqQMpan8BVaM1DmW5hN8ss7UfkKh9fYqVoRh2UNbMAoKsWXprDMALbw3GMhihtXpn53",
  "key22": "KYfzRtwYKqqGcRsCHDbtxrMCfjaoH3eEoscG3NDXRLGrG3maRB1KtYxUM9nFUck6op7CBYdArTkaeRajiVgFCmk",
  "key23": "4dGeP7v6Z1cgog3EbiUXvva5FTgWkZzjSucwUJp4ErGrr4L5h2dguTEZHtNgrf7LzofA5hUpxZ14uWHks7nvpPB9",
  "key24": "KuwEaan6YMpY3x3DDExTPXmoQvrKh2A3zGcEmM1YB33jhx66wwAjTN1B3Q268UDhRaMP927y6TijYcrY3KqC4tW",
  "key25": "2m5hQEuPN22K6PthGXrqVRUR3g8GBVNMFyGKyYsaGHBE4Birjtt1YaDwohd8DfhCWR2SbBQUzAWp3EjTUXxV49y9",
  "key26": "32MF76k5twLmhq2vwbYEs81Bg7ZZkDva8YcpnZggcbph4poiEkEsRiuaYxzQuGSPhzQhoeBexBwhWhcXtyPiKChy",
  "key27": "5KLmhMvvG5QRg7fAfXqH4fdGVMo8EAFJRK8Wx5woMQJXSJ7RHaPoj5BgN29F4vaXbMQ5viB5RFaso7pwmbxLLps4",
  "key28": "CgtKPdNecPZE6xfDHWPZtfT6podCkkhX3mb6VQF7L53AKdToC39ee5JZfiEDc81ibtg2Jvs7GfdCEpmjMvE6FsE",
  "key29": "4mtA4oLbBNpyKZ5sKPYWDW4Hrp6CCnuv5nusWcxEUe4E8xihRLsWGoBoCRecSFerZvVGtUQnNii5Qw5uc3vPoih2",
  "key30": "2SL2xSzkR2nNq7NLYubMNEkR54fsinPfogd2EJCQwYgEzoNximLxnJSx8JSVjCQeiGodfbtiDJjxWnP77n3b5UFA",
  "key31": "3pZQ3AvXiYgseu4ZsPn8YrTcmHHwBnPyxeonvztrK3AyNk2w5maqoUwCSzCMJxre6a5QP6TyDhw57otG8i4KK4Pr",
  "key32": "4ck9HXB1gngL27Gd5noqGwcqa1Wfc5RaFkanyqynnJ3ohDJDvk5EwCdGCWLcLPtPNAuU6ZzUJaUU1sE6xgzPK9UW",
  "key33": "3qFbBMv8Ztvdi1G5isFjbG5TzvdGaLEm67JWWP3ZzLdbnrNPWSzzc9kW9TcXnp3QgrUNsTH3yCb8owzdraLhqVdP",
  "key34": "2v6txurRb4ekrmgknjnwXW92iGyxucvUKXmfsy1juzuDjQ1wgXWbwRFwwwxcaB2GoVsB3TE7Zk2iv5a48ChmtdGN",
  "key35": "2AHWBL3Gtfbfffecpx8kMN756NfLrgcmPgaSFz8iCi4RTY9PzJ7B2MgNNHFV15egbFCdkdHMGS8yvha4vwqC5UWK",
  "key36": "prFiaKTQHinEyaimvqpVq3d72cHyCKnqSgg98gis8e1XvK39WwJCmZ8DXgYuqDrdwvDPFA5PFWUdtb84Yq1H2Eq",
  "key37": "3HWgauNG1eu5goxAdzB8tyiGB5nKF6YnyuvsdBrx8QBec4wyy6T9pB9QgUzYhzsLiSbHXkGxyP8iAto8PpWoYaER",
  "key38": "3oBiLd7YHRU1fmyEKsnUmhAnkUDZFPdhsSBbr3DnhVL42pB3TB1zKjVCxi78r6W9yUja2gU5WVxUCXkoUfSbm27Q",
  "key39": "66NJj7Mpgt48Jz7jZXUDF8MuojACSuSKrQZGcjQRAUAfeUL2Y7inkTYTTMzwTsq1ALuCFKbidaAnpRpRvy6sC5Zh",
  "key40": "3qQhEh1YE96JoPmNGdTdxZByJ4uA13bG939zHhgz85Bi6tdYiJC1b7FjqKT8Qxzp4CVqcHsYzemiq5GnXUmVvrnf",
  "key41": "4FsznDhA9SXbnsf3KQuBCvMo7Nq1EkysLkncQUe3vdW6phYvURvrhEjW7pzRxnq2KpbaeGM3AWiBXosPJ5VDEGBq",
  "key42": "5hSBcX2R41meHF5pe9Dc19KtqA3NgpMxnPBYCCsbCqjp5pyuEUBLd5hYjsWMGDPFCG6B69zJJi1SbN6Yv6WbePPV",
  "key43": "39D9bBPYWFbWjTffRCbJe5CHnCdW1GCBei1JgKLjsneDWjZF5F266RXvtWTuAzNcuLrCZWQp9wvLEbdeYeyFYQ9p",
  "key44": "2CMV3TkU7K1b9A7Sg72vBWPKwquRt84pQDU2hbsRS89dsCdzSEkpVdx2BarrZsiX6ZpJSPVGpW6VEBNSN5yiLM2k",
  "key45": "fSMDMpongnUJU4qgFSVjZ4RDj9YmY8x3iyd81hiShK9jTpY8j7Xcx3UzMu2kgg9xEfjD7KPUbEF4W96BQ5JoYdp",
  "key46": "mncUdEj3LpYVaqYC2rx7TAeRLatvqE5qBpw9BC8GSC3hepELAX6FEDsU7hU7eB4YsaL5JTmG5KBo3nkMC1aZi4y",
  "key47": "5QX6fHFUNxcvnHtBYunBwVE7MpB85G5ckm1Xv5bQkqqd9ZieKY3WgSQWcjAud1N5fFS2SFFAcyDL4FRU26sEivLY",
  "key48": "2VCPjjDjHKxCnnTUuFXAZ6FHcqkaXEhF7d7pZkkhqPco8CQGT8XoRj9pW7DBPsMY33Quez7rwWydAkscAwRkz3r2",
  "key49": "4GUHBaRxSibt7aSLqERBPJPQHsUrbDLBgEXjYRqKpVrdetfu8m2feRPfP8tJtxsb6WvcxJHNbVLFmeMMhFaTKjvs"
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
