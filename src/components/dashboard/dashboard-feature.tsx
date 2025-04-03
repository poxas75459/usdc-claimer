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
    "5NAsRhSksQppxviEhnPGaPPPQ8THoxantQoCycKrjArMSbp3hC6zQEuNcgbuevRVYKxmejLukRASaZnQ8sDwBLVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46hRZwRg4oYnngSS1mZySPewr9q1p2DSqpze8bsUbDuT1RMexxLBf7GQnkvzpvZE2LZdkncZ41Pj9nbswq6iXDtL",
  "key1": "4zYmbUrUoYRnkffQaBJBM7b2huhPrvdhj7A3kmBHWAUnNHbTq2T5S4gyULkraCXzgZzTwuaFzFye3XzoCdZQYmDd",
  "key2": "6BXBd8BY6iCNPiH9p2Ehz2AeBDwH8r1kpeQcdSuuVhmAxpxCA86342Z6GxTZ47tEWJJA83BZq4gD4qG6TMn2xjd",
  "key3": "4HQnZKUbs5WRjDDgbrCxyBVsFKidTfYHL6bc55QvfXHbruRSXVuXR8EgBNHfRbaKqQGKYTWhmYWD3Wsv7rqu2Y1G",
  "key4": "rjxaEnc7foWDGNaybB1DPRdtfihDnRYmDg3UZ58C5EwCKdQNz223UgswQGfGVy1H8NFkijMUnL2QywUGNQiPFyD",
  "key5": "3rVSyvs1RQLXzgLHABxuH8RutM8tdSkXFVybZAtnRcJyu6uzLemzRh7uhHiWmFcFeVmcTcoMthWk7kZFWbbC1SnF",
  "key6": "8H4x5p6nFHgga6XCF3kydnBoF3nakt3foGAxfR7w1LejY2XF3ZK8XeHG2bWV7mwj6pXQ9h1d7kD63NwoXryqE4c",
  "key7": "3pKvpiQXEGnA4wctbFjdW8kMdsS8N7nKfzcAn2BcMoxUN5JBLewT8TvLtvyc4vx2W3YBkRYcnWMeFYcqEzYArtSR",
  "key8": "4aAjk7KUHGqSTVABeAoAceLXEkg3buWn3XNSDYgDRjqhGYbs3qPHXWNMxWDmQ66bJihsx352jHdtrN9HuBmwxTTH",
  "key9": "5K788K6b48D5AEMhRavv7gVtyV1uza3CeHL9KbN5QtNy1ST6mX4osGiMKHxZVJqgmTTsxJusStrFwrBhU5taJCSw",
  "key10": "5QmhkrrTTv9Sq5yL3gySjniQxRBc3PKM1yigsMBLEs74HuecQFBcMRvxvi6QSAfbEnsHT1wqg1kpBsP59Pkc7zMG",
  "key11": "5SWvybCk8buc83Mq1Z6zLicZNM46eit3iiWZ4vFjPSWsG1NwbS3SVKJ2q1CnMaTssimNHNvve9dxKRunWc8xiiW8",
  "key12": "5EHSgpbUv9CGn2voDrnes2e5LEoyicuKG3mCJjAhbFUmvnTiLEgG5fQnJuL8awVQsUe4LE1WBW1xMELrfV3cxgoS",
  "key13": "5zC9xmgVUSPFHfAGyfRoG1NN3yTJD4zicmJip5BaXFYQLGyZva7sD2nmHvRePUT4uWkdnFaKKRuaJQ7smG39gmEa",
  "key14": "2KcywDJT7MfFwmrTgu62M7QENnybWis2HQc5iD7Pm1XRt3eaJdeSEXszpK6hFDfqcL7tmkPxDMkPKvEPEXxjtQ3o",
  "key15": "2Ms3wFQLhX9kVeE7y4HzKYK7YkktLJARR7Z3AJSY6B5yBfjEqd7B7Q6CE4y64Qousn2FcWv6VCxjmKDgY15mKkjJ",
  "key16": "64Ls8bAJSBjUYCipcvyzWk1hwhWCzwfiSQuHy7Ge4i9kXeRJFRRo4KGnn43BFhynyGHPt4WQkbv5FvSv5WTmSdSM",
  "key17": "5NMLgUmTTcyYCGYyiNfTDfUEMQSnYxu6diHyY5GphMD3LFQQpqGJ6CiK21rGKpmchQDFMnvwBHiHQ8eA4QZDSaKm",
  "key18": "2jL7rkowKjpT1ggzQ6puBgCaLNEHALgVtc9dnrLfBZsurS7jk8v3kChQMe41gtu4gircZruNu1sbkNpCCmsanT2C",
  "key19": "3VziyVnoppmtwjrmJX3G6sEM9C6TVWqw6rAvJoqYZ4tU3HWry23jPosxZZfRhYSfbXGJuxe6notfWyqBF1dRTyYH",
  "key20": "3ZQUtVe8JrSShZ6zymAPuzWoxNT5dMzziaVfahQ2RBu5cTidVe6L7vjHWGo9jwNKSTY4wqmouhuYicUBj4rZRKu8",
  "key21": "5qfML5DEBxv5QLBdnLngQniD9ZUvaoh8tVAcBMFmMfYfziGDu3R3L82uhFK6W6HgZHJNUXpAkdu9KUzmPKoH442m",
  "key22": "3QVnGUc7VTzDruFVwH4dHqpJJ6XwcAKGsNDbaeNvEhmjW1KgUniCnbc9cxDn13uyhoS6GoXQuHwnAuhSQsdxPp67",
  "key23": "41y4pSnDzbEzNQSfEfE1hbenoZ92i4UFQc5qBVGzgtBRcKSH45EFP653nYYZjWsRC9f6RJd4hJsxdoYSXnpdj7bX",
  "key24": "4qs35JN8XZEfdHE2hWkNBQuC8uvp16Uh28YiTwr5QAAhoFRLso1riiSaoy4c38yCusx9fw1i7o5NHaexrJ8vbUGf",
  "key25": "5FY38q1gv6YqEWEcu5HgDbQrGecsgWc1kcUQhsc3QmLY9zRqrffdegFbSjBMiyPTfiweHCDy3kFvSCSAXSeLFf4S",
  "key26": "451KXmrf49a4C7nPj8NB8rTdDMdNnCAHV1pwM3j4RoFxfayoundhW2bq4tUnVEVNLRLFrWoWFVWB1fKykZeEQ2nY",
  "key27": "3y2yuswVTZx1SjssAcupP4JUUfVxSh21nirLewCLL6DduBnADbyz6255JAUPEVCCH8cM9F65z9GehNkVsRRqVErw",
  "key28": "FoMNhxTFygb7HKmjiNGdUNXshSQBXN2bqm1PTqsAYLYgPf4VEbQqD6hXsL61dRAxwXSJ8SdU9G58ZDCYgtSerPu",
  "key29": "2UY4JjzXPr4xJYxEMzya1QXYxf8eamiwt3QeUKv4ybppP6DyGxgDNT9iVRK4Jd6gZAyHTcV3anaTzpoCGyWPwJUw",
  "key30": "35Fk6kxAcv1ke14Tnb2GqKgVFKivWMwLiSEucaZd8xSR9soB12AperZULVJks8oLFtCc3bZNvUJK8voRqj1zJxxY",
  "key31": "4tiQWy15voGxPXUrF93x93e67iLDqRVfA2dPnoJgVuPCqWipPU9VrHTEsoLCSDbPTRfqtknYraYDGcBk5ycc4MuK",
  "key32": "3mNYY2A2SJqedeJDkZbHuX33LcedhGm9G2QAPKaadpuBzn8WauKAZP8Bmg2kKv8Sv5vb4U1jik5CNjTQzBcEoQr2",
  "key33": "2iZ4KySTjmUpiVGTYeMq2FmTvk9td4XQN3v7uwoeMQDD7vyvNqp8LGPQTTx1pr7gFxMwcgfJeipXE2hUSU5uEJEn",
  "key34": "24UB8ZbW3UUhy6B24vTPRuuAW5uRZr67hpJ3AW8oXD6CtDNetAWNzUaP2w8JgrP9MRZtn7Mr4GGJ7vjZKZzdbVRn",
  "key35": "2YUYWrSvW22Vk2K3YAtfPS61MLNrGEHJ5vEn2E6dPYirFphHBhbaqCvMbHjUsguwhqLEWDhhqzKbwEL5Qw6HyarJ",
  "key36": "5uVKGNz9vcYhnm5s1iTGroAH1zNqfL6zQjZk7LoPJVhe35sBGXR9VpHzjmwfBFS1EZPuB7fiYKDrjNJApqeNPMcE",
  "key37": "5TqiHv8hps8vbYuBXHyrdG5CFcAq5quCNsag4xSc5qRkB3YiHM7WHbfTBqh1MqQ144254iEXwDWK7VmMDMCGY38J",
  "key38": "4e6e5Fn7SgvtgcqLje8Zkj7dLjksfKGUKKsinuiSbvHmdmuUemFri9t5Tr8dcwWNetfLqx7fekanrWe2XxpNMqML",
  "key39": "sH4j8Hrm4YhUVZwf4NeQ8tmUBc7PPLwcLyENg43NEGxVF7qZQ77DsktWPT4wrpJHhBPnxCtYzf7CX5CCFDAV9Te",
  "key40": "2pnv242cVGA6xczp11yZubr3xzPRAMc15qpRonWEcQCfrtCnF7UEf73KZYTTSuAQxFBZAZWkQVEu99nK63kVDMtj",
  "key41": "5bokcdu4yvdUMMVQockkPrDbCvbtKQnx9374hqi7zwXca2kHXYGMJUuRnmmf58BPKHp1FiZWoYZzQX1K4z6cU63Z",
  "key42": "4YWvbrev7i7dWT9FtMBZ295FWtj4NB1t5hPBbdBHZv6UAnALgVDAV6hWgPaf7vqyQzaMsfZvef7obBrs2KKi4SDM",
  "key43": "J11DTYP8XwBx8mR2WPs3nHVwj35qhbi7ycVQwnKmjTG1jWdvGWxL7fQMcDJGB5UaDgTabveLXMqiiH9t4JuzETQ",
  "key44": "2Hn5MJBsH4k5yfxz9UfSunz5RosVY6G3KWSZyvkMGS5eccdc8VWGkP4Tk5VBr6Cv9o7t3o8uxH2xWAdcpHSjvb7o",
  "key45": "5BmWC42FN8iLWskjimX4teLjfYYZYgYEmUYC3y1k8R4W2nGPp72kLMx8eJsgmLLJyC39hiCYMSXmYpom9Wk9Tywp",
  "key46": "oP4MpNE7ktVviHHzPXqBFmiENEQtLoPoXUHxGVZ2uEZCiudSRWyEkeyesBVDUQdgXqsmBUncjBEgMiGBs7zcJVj",
  "key47": "26jcMvcX83joEpfMwvn1EPacPnc7sqUdCkiCtwtMwFRmk1pbB2jKMRbPMXrovNHBf7B7LEc5Uo8BJqJBaWofXB9S",
  "key48": "365UQ7cR79NyXFeXC99pLvT484PpJCsdQc4ARcTDga1Qk4vfiQQ266YYx5zHiDTeRYa8vhdkjdhMdgHHfxQDSmAZ",
  "key49": "5GPPRxxYCfGp1aGvDA8xE4qAMafNWg9JXQ4GnR6J7BjHNNuRmVS8qufyhvTRRZ2K8h4XZpP1NDxK2vNHyBvQ3X8A"
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
