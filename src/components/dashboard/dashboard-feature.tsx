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
    "64yQPXtT6rsfKCvDHVcV16oHxGNEhXzsXL5ykGUSnMyHKH6TD1zbvkq4bVMSKKVKgWG3c9DvQ4xev7C3DamVujoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDESGpiQ5YyYUBBjQSStYbv7PY2Zei3gw9WqVuduEjdpvJrs8fUbrcZtpsQ12F7hfFmWqxmFUGW1Y6asXHAkodS",
  "key1": "5Ks3Jd3WSH7FmzydLMZsgbr4Aw48SgFfGFit3peK6bzRZSeKZ8sAqFWPkzdCyG9kNsrnqLT1jSjDkaJ63eSG7gyV",
  "key2": "67TjsqcHR5Z9XJtBNf2GPWDh8n7NfPf7yyXN37fTku6r6UyhxRJRtiq5puv1VhGg7AFsUMgYeo176nz6Ea5iB7uB",
  "key3": "4pnHXsxucn6w283MTdX1doMCBnorenQziJGpiLE1LGsqHWahQQ3cshFQS1Vm7jqWTQj5sUvUcgjVTaaWKMmnr9zd",
  "key4": "2WVMSyT2V4ZNdUHL74moG5fXEbfCMjj1VkfnSAZvHBQaGYMDAZpNzp4YJw3XdtEEjyv1pRhBQsLT56P8vt2d1p37",
  "key5": "3eUDBy6F4jnX4ykfFKot1JebuYpdc1r4kpgjp8B4qcwoQLQzQbq64peD4335S9PwTJy9g17dT5ejtWrooxAC6HyY",
  "key6": "hkpLQ2V5UUcwkwBUXY24aPnREZGfFwVqfuLA5uEePRUkHKhoTUqRUL1S2W8qPFSpVuV6HEMSa32SjMHrR8MCJQT",
  "key7": "3xEKfbL7opnCNQQ7NDLqhs63xztUBWq8AaKXuuvYnpqc8qpRWG3t1YKUAhdngJh5RBwYSUdjsg2EQBpoWbRXN9a5",
  "key8": "32EH82bP19mRZyRHz8iGwiUNGA2Nme6CobKTVvyecU35RMXK5pffJrryrQhr5GwqEPuxyx6uo3nuuCdNxANcPLJZ",
  "key9": "3fUo5pXAs9k792aJpkXqN5xhQ2R2WgX4RPxi4GH63HjkLchjtXSMUEQK4bFqt2eWRNyNiCoHiXb6NPvrEHmhZLv4",
  "key10": "4keKRWrwn3rjqDqdZ4CUkqcUHJ4qRV5LsunJdR2RMmkJUaPph2B4o4paoj7Ep8ZTs8kDTJZqdcWVhMbc69BFM37a",
  "key11": "25iC1tEsp9AZeX2pFvo77RUGHWF7M8npzEdaLrh7Kp5QpRzyGbnXZxPhdiMbv17Xzv84giTK2ARnf3D5NDWHbsQX",
  "key12": "4ASSXEV4zQgnVFpZAERt6FERjVZ6d6trFidKWRn8HfyAjKzCRPa7wNnYSNPu6rgQJ1UXvuDYUtEMx9oqsd71hPq2",
  "key13": "36vJWomxycGqmiuQKxHtY8BAEygKKhcwya1PfRcj7BjEKfhj2xYCYVHHNceCz8oCjdfpp5dB5PFw4d7ebER8po1P",
  "key14": "2A1AApiXrpTrWYGDvf1qfajgER9ZEL1BxZedMHLKwgge3i7dhxyPMyCHwprsZ4YwRfxW6Y1zeiTVdAEpJpUwLFdH",
  "key15": "3i5Dw7TYLofHMtVScnBEvF6PJkPBt7jSAy26f5qZFEkJ2W8mp8nCMEd1Qs1GrKYXaMEXCqvsELqGQmnJm8NGKRpe",
  "key16": "5nzAmMWVxYMVkkCafiGDrhbXcWikMKSg6BbgtxdGRq8eUUEcKN2u4RCWw8ZFBEbFL7KFt7EBTMqAM5kjiNV7eKrJ",
  "key17": "2Eqt5UYRZguHkkoGRCmHL3CcFdzUiU21e2EwJpyRVdrkBnJit1B3huY52pTchtQvJ8RPmc5qYkxT2qEvZJX3Rfjk",
  "key18": "4isFXgUgRjT7x5tKr73zQUKbPZvE8fRq6ZoE3DM4J834ENwBWhuyqPwWD4aALZSHcbLyCTWyk8sTU41wfZ1DK227",
  "key19": "4FvQz81qGKbvZannVWDHroRbZQZWfhHPUx46tUWMGujcCkmL2jQX6hnVbk7ga4h42puRJJK629ADsDWUe2h8YGL7",
  "key20": "4uWGUwmunBkUnA76xQFCqrPHqZ1du1ZpyFuUYvbdQJeXzXNAtCQ765yzqoccDDrrnGB8otLMsKPAiRvVa79oU5cb",
  "key21": "67K2DESryKZ2G39JeWQhad7kGLtbAbnm21w29BdRXkuakPssk4HZcDhKEE9tsJjh3e8gBoDkTDdzs3krbUMy2k4X",
  "key22": "5hTRPYABDTL9ZS5hdv7AD2X7RiZJtoskTeadDkupkbpt3H9KrAZ2W27dzzV2MU2GysWWUpoj8bbR12qRmbTZKTPa",
  "key23": "4GTmnSW4YcEBnUNjqF4TCbaLMVQNxbwUvKwAu3DbdJXC5XTacA2nJbvaEZSwX3pTb9cXbS5QGJ7SXbKpv8GByjzM",
  "key24": "o1RF4GV7B6j91gvQ5LnyvQFZFp3Yg6teNjnbhXyzMhYofWt6UYduHt3kc6EFDDDWkKAhjooKDZBDMGdcP3RnUPt",
  "key25": "4ozZAifLcKMEqjVKuUSrdmZnKXVnevpCPT5CCQ2fwgxoKxN4grnj3jn2pXUZu5PNc3ZQu1dLsPvwgEtRgNqbhu91",
  "key26": "2SuKAJUL5yhbmMBLpngQu7Nkp6LaCMCTUVFLm5GC1NK4eZ8KN1f5Scp1vyxyAGUjUvyxM2E7tgq2xEbnQxBfwtRo",
  "key27": "64uHrdxEPxdGiwY83dQkqvtwbKadRogMgNCUrQDb2Kpumqh6bAE9YpPAZ2aZNe1A8vGW6kQRbz9ERFZnSqDPVSYR",
  "key28": "5sgi9qWxL58kzXSGUos4raote72U2uqeDYW9dGWpzq4wPwBwLm19kBHP257E4fsxw8GwGUJkKkZR3HNppS8kZ5AD",
  "key29": "4EST5vTRNvSFQBMG9xECHfgRS2p1KCdhcu5mSJDsEsvNqTDrs89hD9dUipxEqpsbkpZkWPsCAjiTWjkKmp5j9Us1",
  "key30": "3u92ocbNJohEnhnpcDBNvSaFgWZpLKrP2wwdc7fDCQT4QPdweWjDEFkwMm1YPVEW3DeQb7TDmpjpButiNSocNk5T",
  "key31": "471t7JGmDc9SjS3H54TTTZDSiC2fn37aWtoo9S1ppunVEEX7UzGtKc395QCcjj7ujGnTG89X1UZgAPGpxtz1qxqZ",
  "key32": "3ZvY6rMMoC5HuLXVYuGKcSTmZeA6np3c3tAhRSxErUHov8bc8g37fui8SL3fFPeBHqbXPxc962U5Pbm8NEqRtg9b",
  "key33": "2sZtHocnWkryZK3XymdZMT9Ke6UrdvbUNrdrDyZk6gE7JswqWwr7uR4dTEHN1JD1maiJBJ37VAoQjknWjMhWtNU5",
  "key34": "3ivwxQuJTX7fNwy5abMWFcL3xnaFdJ7eaccJEuScLoErrF5o8hSGbACgPrLnMuMqdwRrTMvNmfRQekbmT7QuU7z4",
  "key35": "3Ny3822LshQ7nAPEzMkDG1nMgDH6tDHQWUoKKUh7dZCfh5qx684q2yYtEDUarM49Uuub3TmQNKoaeHFcRbRPi4Dd",
  "key36": "51x4UUS9X6gUu59p5WWbAJfxEKZ3u1fcU2mkWV3PZF1D7n2eBH3HxD6vv2zyfr2LcMTkFn91j9pvCuHkazHnDoxe",
  "key37": "ZTHvD4Z2p8FrYq343kJErX3anY6m66hyjdFfea5BsByhAsU1GWqDtQdGNyo1nUvRWbLJvdzHSg9wxzXJZEvs2Z1",
  "key38": "3nZ4k1MXTqS72mcSkY2LgrUj7pEk18vQJYkojsXD3VHubjNxdD3egfpvRK1JhkJ4F2CSni8at7G9bWavGF99e7nc",
  "key39": "2KoqtffqX8or1VHPd7Rp8CY3dz33RB4x6KzHWR3YaxRCq5fQ1B9SBjsWzfcXkgCxJYq31LQU8u2gBj5LpzWWd4mh",
  "key40": "2UbhETgLm8o4B3Y1L2kkfuMzCe6MkVpd1PFyf18xaurusu9CWq1KTuqefJ1k5n8rHAuARGog4wzuE9yDAcC35SJH",
  "key41": "36zQASdHJ5hVVRXAh4JAR7EBzJFfQaexumPCkKrHmpBdCQ5r3AETeZGax6vQqiepcLbeJ1WELS2imAH783EY34pd",
  "key42": "3EkW4VgEJwrYfmRqweKXqG1NjVGdR81xXRvhfcVkvZEU3VJzgqyKmHGjtFpimFvYFC2RsxTXCmRb8Rq1S33VU4q1",
  "key43": "22YGaUChTMma3FuvSVXPVLwsHoQQgJAMCfn3x6mYNztqNBEjYgUSXTeUqJNAZupQagGR9yMTxJg4fQmrK3wFRLgU",
  "key44": "2j2v465a1kQ8tvpLeBRuoydfbEcQ3GGj8Cihemux176Xuab2vok2dKGsF7LCh3xx9Zu6kUrb8ypGNPzvMuaWrsyE",
  "key45": "5gQUijXwoyJNpknxsMyh2Tvap2UdhkLnQUGRR1DcSfRfaTJpm12dbdYpPR8Eb3nbDZsDHpWUC2EwXLgEejUu15Bh",
  "key46": "twcirajmVAwmiQQBy51GzK9axTr1XeTNTmPtWXY6JUCsFMrN6NsRqkGP3mC6gWrU17x8MxywySztPnxdx9RcRwD",
  "key47": "29iEoUx2x8vqQCvZTDjpBdbwEDMqpHQNh2UQNY9UL8SiCVb75tjtzR1qQnAorFsSJFfeYyoRrpRrDrgdAsMkbxvv"
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
