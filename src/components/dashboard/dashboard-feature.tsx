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
    "4sX2zfGWscZEkSPWgVCn6uNGfKcZBxsYPSqfGAghNJ9cHfpn2oHz6En6DwGgD9cSqG7p2RXcodXCf6z9R6rX3XtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "egLDBhevSZTXhuLPZ1wHaQY3EsLtGmQs4jB5BrfRfHiyaYUyGPki8daNUczj6xqzexwmfZ1fmMku8y9kSk9bJrz",
  "key1": "4aCkNvpk9Y7eFBoSFBySQr59YLPuZL3872vD5fssz1xnVXy3VyDVddKEBovyT1DnpyCm7kL4uCWr6MhjDYKgA5VZ",
  "key2": "2Uq9rCyE5QRaP2j4sKaUm9n6gekAHFrfmy2SzdAiMNut3b4WnqmneLZdYW1iCSfjC8EZL6rfPoihxWeWx2euZ8VE",
  "key3": "2hBASSs45JDUNJu7owDCnBCRmjDRtLkZT5p62ThHdPxfFp6wTML8dP8y1BNRTfYMuNSnVNYACfoYUfHWwaAFM6VU",
  "key4": "3vaqYerGUxLjLmm8MkpMUUZFhGSpfnL7DkppUi6EyVku5M6P7SnKWALLp8ECVrXogJpEszuu4d2uq2bkmDLu2Z3H",
  "key5": "2MWLNSkD2tjaqSkeBXC6WayrkGJceKf5Sdjz3BUTtdv8WJEEbqVXVsYGL38oWUxKQHroymPWs7vV1dNXwDYFPCdX",
  "key6": "4DBoKJdzxA7VAMozu5nRA65LE4UZyAxoCizMm383hhhcU9cK6ZqCuQU73asCXFmCNpAYiH9jBJmaVGkKY5PdtYA8",
  "key7": "2oynCWGweNUCvsckhbdHMGpGwpaYtcF5c9dhdty2jFSTo4g9skSKUCzx7yXKT16fsJGabCuNLgAXjuwheXD9Fsph",
  "key8": "3Kg2W7qPeV2xTGHpXjVDn1nfLbEkLzbLMKAAK43aCiXX2vK15zzm7PhX5evTwUjFCSimFFh5vsot3PW1oAgaZB5L",
  "key9": "3JiY65un45JXGZqVqHurwf4JH198pHkEebxUfxrxR1Zp92ZL9Z5TE3Z32aNWt5SLe2UwDQu4u4YcoGsxKqWfxaBu",
  "key10": "4bTfvjP5fKtN3iCbrxzJ4VtBHKp76Tb8ya6zbiKFYYFjgncKorqHUVqmAfYWBvJvT49EFDM7uvGJDcki1fpEQCLM",
  "key11": "4a6ag6A6ETGyPYDnC4KExhL1qYo35AhnJtGn2dTnXnPnaRS1X4gixnockPBPpyLV973EXfTo2z4usvRZdvN1hyTF",
  "key12": "2tTCK9XaJW1jnvvM3j39epfxfthVoKH6HmnX2ZKktP51FcKrqjpVfRBUZp3dmZdjrEufrgXADDz142iT62yqita1",
  "key13": "tNyCoPe7rfwdfB7Sq3Rxrba5h13VVZQYJRTEmgjZc6LBSmMk16XV3Yu9wmYdRqCggipvV8nPCi4QEezaZehu1sE",
  "key14": "2SDkaAnryNjhWTtQGEXvqH4xLKnEAnD7FLHHwgezF4qhXt9AoVD4DP8P61JFXzgvrAnxX6SJRhHW6ZaN1UgrFaC7",
  "key15": "5qxDk8jcUok6CVF3Yo5trDuveTPE1ZQ9v3PWQesU5dT4bSdjGDWWhhZEi23C9UNobn1EnprWk7Z2VWZ39gMPyRq5",
  "key16": "43QLvuhKDPK1t8FhCbgEQc5PVqTh9guofeAytHGNHQAPk2Bzj5UXAkyKqVnc48Pq87hvhpFLEMbfWCcUhbrUnwwb",
  "key17": "5cEsg9VHaBs4VY7JHuAQftFRpHouqKyTiKfEXPnMK119rgKpsqfMvbmoFbgamjpRMB77nHgavAE3bNRXyVWL1hwg",
  "key18": "2tzHthmBrwBpSnAmAR489D6JYmfPRhsr2xm6HGj75EFrVtUDncQcW3ZaLwgMZAreq9Jew5D4sfTEkKmbfnGmMmMA",
  "key19": "5EFKeVGzWds6CqeRRqdRw3y7UM4cfSrNjLrdQQYpueGqZTZuqk1VPEDoLe4SMy2U2x8cgsoxwUaEsBpqnsY1f4NY",
  "key20": "2BSgbEJNKRycHuC32R7T6ckon728fhPABm5moGFdZcBoCU8knUDkpDZshoDEDKFEUQAio4RCKkXiC28mFatGdEkH",
  "key21": "2cdVshLMXHoYN17HvCr1k1cr9ZcrYrSnQcFtyzS5zkm4MnW3GvEr6wRcH4bfRKrq5JhH8tPUchmaei9Yy7hvVkz1",
  "key22": "31a4azu2TA67mUTaDZk21A7G9E3m5Umkwvg2v8RH3By9DcFhLrVdoAbbiuhLjGbJHaaydeA3a44atvFuSZMSnphU",
  "key23": "5v9R9rFUS4WFgKLRPPTD3yGRF66UHp9wTJu5hQzBPUgnSMqRYhpnGkK3uQnhgsJJbMtYjhzT4JuevwxcmBog52Nb",
  "key24": "2Dnc1spprrNJh9Nk3AsgCAxzdjuSWfBGAxX8pbTodneCWhx9Ab7nZbs8qRjXWE6VwytHRVjJm9AuuGBLxgd2cfVQ",
  "key25": "4KkZXwPPwqzhQmyP8P874TRyK6QHnNnYHnfyXbwFtcaJaG8kfkYLB87JyPapgDUJMZHaUiBgoBmovwnfiXmswMCd",
  "key26": "57dcQuFw6eAZSg2GQ1JhAAa1rLGn7t5wcFywSu95dT8couzQzcVNvh38Wqf9eLiLCxhqG2wNBmWN44niL64koNeK",
  "key27": "5jqabMaJ3WeSNVihoix3qK4FHtyqzsThJj3mhTRMrtLCEPApj6ESTUDmgey6UxUxEtHADqLykpyipiPuPucxSnDk",
  "key28": "3AP77FnkSpoKuXH1raLaUwzRXJ1cdhiMx1N91WCkTwZNxNcYTwx9xfRy9wHDJC1juwSaS46VhU6jctTrwCx24Q5R",
  "key29": "4FhP3mPyemqvhuKLHcVQsmjnwSZdjXJ8d9hMUCfHBktoi2rKStUmrPcGGjcLtSS1iBWshDhC2ze17fSUKnsQk5Fi",
  "key30": "3RAX9s3HTRxpaUsbkRzHF8CBe7zNcoDAt532RFecZY13F38mFBHH4ZcDUrjDhXUrTnXcXMbKGjFnGr6zBbuFwRcf",
  "key31": "4oKvAEL8kma7m1gUKNjJsEzhp3igD4cKi4vbe9X3MLbdgGbXJ42CqujcdaPzMMJs3QfnFFcqFSGDhfNin5YWxBLE",
  "key32": "yvEmhEpk2uD9xaPt3iei3JVEmWZJiGRaySR9rDTe82dTKFwktR2whMrKBFJA6LQo99WFcNkkidJEZ9zmaanc6fq",
  "key33": "4xiSMcoYHQgBHLaoLY4cuLbpXpJbw9t5qsGxsGG7ZJKuRFhi543o7fLYwpRByzHSv36EX712nTr3SWYTZaHoPEfm",
  "key34": "4zMCCHUzKFVsbKjTBE4wefRsGj75F8Qq1HaBuySP1Kwz4Scd6K8BpC39eMyBPJ5oUxG4Cw5KdrnRz4ycdB2TgLft",
  "key35": "5uGs5xoG6ZeZq6AM51MC1jcQAJz2JrN4445WPyXVNsGWqvxU62xQFe2V3DzagzC551FGYwYUqE3onpiUAtUDGPXd",
  "key36": "52v5KsH3xBrR9mpsSkhw8N8UVwpAwJwTsdhkDe8UcMaS7bhHBbMac2CKFjMzjcpVPdkBvqYvx4JpkTA3obRZ3LHR",
  "key37": "3d22sApKz8K1w5VsCx1znxzFtCD4EAeSxYwp3BcWYxGeHwXSrAY8iTdVnzazsqJP6XCqcPmW7H6ZpsGakoq1LQwF",
  "key38": "4Xha8ENYkmrpN4yxVCx71N54PJe2nb7pzmuNMqR1PCyf8XPReJAXTWTha5cb3TvfYz9ud2Jb1z2kKhCsQbHoZEWd",
  "key39": "2ShM4qxpPVaXQMzfNHco9vjAmAWbYnxvxuFcGvksWndLuXuZ9AwLZtXqh935sPV2epsrxQaJ3UQuUAoxj9w8kN4r",
  "key40": "4rDqDpz57bZCyW1FXwP2sthPEzyY78c8RjZcgtxNZ4Jgv7GQNSRaWGupqNpbP5JdYVNcQ8pVNkWr57DHVirJ4kde",
  "key41": "3QwqziSnc9gPLU9RPzptGkRDW26PBAFsiegjdahVVaTevtYpk6Qn9wts5h4ZC9nJ51RvUEUCLW9FFU6K45psNThM",
  "key42": "4oJFXDQ9zXzM7pE2RTNkYpR3AjH6dRjv8KN5NxoqmHq6z889C4b5k5iyzrRyA8nDrVprbbQGT3gpJZFo47uYjuyS",
  "key43": "2EFUe8Q3ZsKGrnEbVYhKu5NZUs7yWzR5eNB19cTR2T5dctWkgdpNHaMcUKPzdjvfTtRuB4SLZzjAuTK4ibXJpEW2",
  "key44": "5HcFF9WGcHMp74SbWqPgqjmtMNLhdpsxLiMVRoq8zBD89qfqPUaqyMUg2FCEG3yfeMWDeMcgEDhdpiz7Zzqyhg6D",
  "key45": "5wKbDy7AD49FEfK6P5PmUbtwFBgQSYcVtJsAw36UUC2zwuTLo88msz5LLxi8MuxU3k36nNjn9Wx3Ba4F673xubmn",
  "key46": "39j6NoEsSHuuyV843kVPX1q2m638ZoZuYTNzP97eBPineGXdU7peUQFnVuktf7bcBUah2PpXWm3TLoPsjrjLK7PJ",
  "key47": "4nVQxVQgCVH4HjQDcpfgrDnmWUptuTn1vSQLj6LCivGzuVPZViJcaZvZ8XfKi4QycoUwc5me26RnhquVBARmK6xn",
  "key48": "57kBSJxymMm2Mg5DDHJRLYz4cxLMTkcEVV5uap8wsLr3VCLvMopf7fwSAkQMLB7p5MCmwYcoXMXyHc9S8GR7s6Uj",
  "key49": "4HCiuf8yVaP8nqhmEjxXqNvjYXbRjqdWUH92Gv1c9WE2qCyfnfEuTqarLoynhkDSbiRmmirFHwuq7yk7uMai6RM6"
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
