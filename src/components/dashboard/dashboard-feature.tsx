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
    "4w592jnub6FJynwqTzbzujKtCwvhRWRzxbd78Vtg8R1MRRV8g36r8QrzmzGP269DNwSYTuWMZLYr8SLbpGHctzw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "638KEfikruWmSPvmEMQW6yeoq5zEMdvv8kj12eLYzvg24QpoWzCPdoRLW4he6MZH6knbSK22gmDh7sht4a8rZBAi",
  "key1": "4EtqgUYr6xxaDBXFBkWTsQb6CVeQuweoZDzVJ42ZNqpLRxctodZUHFRyjTscajcKKEdXUnfgcE3WGPtShahhW31r",
  "key2": "39mGcC6zkrZ761Easn9RMqcrbCcnndgaiqgZDLoThLCcVh6okKBw5ryCjdShPoBi3YTQUVTSYLLxCiQZ1MM7LfaN",
  "key3": "3LQZoakJEmvDELKEtj99Lsy5GWpz8fQApRB5QEG6ofeMzEuHc8Ub9zs4uxc7x4J4pvYqBaCPBPBuBWtJqLjLPgW5",
  "key4": "4EiUnjok6FoH861fuwCP3VFK2NBYthGHkGfv2D19VQprFgH5oLX2qvgDirVBRBmFWSXgFcZM184V5B6Hw9QH4kaZ",
  "key5": "2SJGNJ3rbdbqeoZiyFMNfFgZvACTpJTgA9JyFVse2SP7vHk5W5Bu3F5jEZp7JRFMgzXxVroXfecCtTtB9ug5bADa",
  "key6": "5GngYhxTtUkxZgrzpAncXUhsFTfVZdtVLZNsWAPGDBhjWWZUBnuatJtamC9i6cRzkfbm4asYoyF58D6vSqu56Swy",
  "key7": "5YnyCMGE1b2WDtXpiuyHGGMVCrYz2xX2BSXGzdcmbdTCcoVfNj4fqrSjZjJk1i8TAKHRqq6rnjLkLtx2N5TwGHks",
  "key8": "4XLLGviFFvakScLjEYphAY31SdcXY18opzCTKsCG8QMWCJHz4Dbirwk5iBKXTeaSDnoUN2T9dTw1MKFzyc95ZNn",
  "key9": "2LQ9Gz89Pk2spQF3tuSAERRCxD6obYF7eG75patAvkAFEn2Gm4JdEzkRjz4TPW1Tb89HpuGPkEMzjKiMSyFtb3Dg",
  "key10": "5aYRKXeLwiJWoh3Vbuc3GRzVmHEz5ZJ9AGCk1zmY2Kr5ofVR66mEGqcLdmobLDLGYPak8rLfZd1oZL3M9bpUScv7",
  "key11": "2WkiHmRHbwuBxNSqNZAHeNkpN1WLCoMt7EpBS4TCq3QzJ6eHZrpQMZDwkGTqMEiepzMLfkZAGpyh8Rq6u17JSSt3",
  "key12": "5n7LcG3h5WxArJ7PpaM1rzJyqTPU2L5XHX8pmz3mVcszDoUtWmsuUXtpi5i3LfrZqUzuA66ZtEdQwZtxrbYPm7AU",
  "key13": "2RH2AM2nnqgES3jXYe74be2zqUARF2fPZdxKMrZjL7Z3u25Vdg7WWNF8gixTuSp1xz4ApCHcACNVvAX7qB186nhk",
  "key14": "2hCGU3SQGN1UqXpimSVK1w28pasztBDD7npspLNHVyCbheXaQs9uzhkFZGfChyBadL86hoSG6v3mUN76RvwD25ut",
  "key15": "EnQUKVA6Zvs4XZbSv2R1i7o9Q72qHWgGmTpRHrV1GYcvJAMFa6DrUpS3Ye7b1VaE8zTPVx3c4ZbcigJCit8q7BR",
  "key16": "3NA4Sc7RS97KXGsm7YyeMrqPwajS8hcDaTV8oicm5oAgagkUe1PPBmpYgficusQUReiH5Y9cXnGJHGE5MNSJgrqy",
  "key17": "3a6V4Ad5fs2gmsHQtsTmy4DKohs8DQL6nczBxxgeniLM6kUuZcRqgmtWDUvs2Pj4mYfeYSiAxDc6ccydV2WJcu3h",
  "key18": "3NwmNAT1uzNBYoYnRPC3RkdfoM7DwybuDU1kaSEwWQDkSEUBiouPvcuNYduKVnk7tYy5Cms3j7UxnWw6kQgzEf3z",
  "key19": "2uVdJBtaoU27jUeA44di6tty5BXgvRrK1RqLquYmHB85yD4SWVKofYKBPrZWbXZ3yRaWbqS6NmpnKV9327PkyE1s",
  "key20": "2aq5KzwBwhGGLF3jaQdDRZbeXYz17JJA6jkfXgy9XJrTpSkLwJnSAEdZJNEg6iQKjjhff7i72PNVL8bs986uUigP",
  "key21": "4rBaSy7DVcXALVQooLTRZXG8zTHHMPkfPZwC97sNQEAPfi7xsnoGEosMQVwxitibe1MRAudHcBTBMWVaX5hAyFBm",
  "key22": "4ePdUDtQkLeVGizeNiNwqu5yeM37SbhCpSmRvtEGTpTwzaXZJ9m7uorcLWHVSS1PVzRUt42UsbjZQmyaJ3muLwzA",
  "key23": "2CC9XnuV2MPRFaqU3Z2WSSyRoVH7YThGfQ3CR7SCy6CL8TeGdDLgw8DX9ohAJrKAatUYK4FuEnVmxyDj8G5R7dZU",
  "key24": "4nJYBjQ9nzDanmSPzNjCvNxJz7hjsfDQbxAMvPgokkY4C7gcj9bMnEwuAj88apRVauAFJ739pekvG5ub4rXEsEbv",
  "key25": "51u1sWjj2CQ1RXTASHfcoZh59zoEibcJTUiBQmVcUN6is2UC92jMo6KeuytZ2Tm12utSfuZSRJfCiNLW5jp8Cai4",
  "key26": "2w6i7Kybs26BKRkuny1BWxi2KnhW6WndBNdscDrmAczYDBnFTVBWVdKhq7V1pqyvgALss7e1AdfgyCMAuTJqy74F",
  "key27": "3zqkPFDRPniVBPSxAb4qwzSUTt8HbbN48DMzuVuoVFzc3PhpuSgrHL1bJZ75FUj8d6PArFFpsJUoJSHSF5s92Yoh",
  "key28": "2i7adDsVKYLcFrKwRs9NpfoMMTeYnuCy2TqHJymqfsBcc91pmYGj3tNwo3ZWdciCdF8UgX8CaWDS9asXNPYBCJkD",
  "key29": "4ZX3t6wi2LSLVhmjWH4yvYqKErs8YnWzVTsubinT8Aax49Wwk7THxKE8tueQisXhi1hznsTG6vQMxKjoY7yDor47",
  "key30": "4ddeoSisYqRvSGhBE5Qzv3o3w63Sp77tFVbV5LFZ34wK5homKPYSuEy3vY1kEF77fBop3UMAcKZnSmXutTZm9sVx",
  "key31": "2iNqeXwXEGFaWwcxR3LEqRPSj3ZmSzoS7yq2jjHie6R8PDChF8EVF2WCZHfm7byqCvKrLfMMvJzqo6DeKVEqNsB4",
  "key32": "3MGYcETQJLshsikJpnhUN1KkC9txoQYtLvt59PcAUtCeq6vWpJp6Bt38oeyxa7bm4uBZ7Mt8cEkTzzX3o3LKLDKn",
  "key33": "5XnHgBWrXFxqsM53qXCDJFCNdTDjrMieXihepZmqQZxRAWF3n1aXLBxtkGKTctohec6oFg7L7rUoitA9QmYQs6W5",
  "key34": "57bGkpwE6aH3B65cPiW7FtARqsbiARKaCX4yYKzH2u8c28KokbMERykYHFsk8M1ELeN4zGj6vfd7YDCknjJtfq7P",
  "key35": "3AHPH4x2GSR9eQA1WAksNiQNzhtT4pEHyDGrTJRWgLWqZyphcbC831QDHJ4YnpY17vsHdzgdtdecZLGgGNAZ4Knw",
  "key36": "55xLuX74S6aicCfYgNpyEhtVPYmYuoZSdMGWFsdkezofRKmisrD88FQTeWr59HFcDv3sPJfr1TsSLjmYMhhH1nyu",
  "key37": "5vjCtjfeMHMDNpUHWSDS7q7NehgCBi5pJKHo3NW7qpCs3qvDUiAmTBs4EfJXABJVMiDPgTcv2AHMwiMSHoHjR1i8",
  "key38": "4A71271ukfnVhY9eUBFz4VAsuoTmdJaajAyrGRSj6iwVZ3CY91gxc52ZMXRKmZtpHCVvkhVwQZzfRhhzZ7w1Xjrh",
  "key39": "2n3xk8BAAFBohHBTo4HKkDszQERMbQL3WWFS7PxMLqZDCyQvZzqEMNotPR2NtMP52d3zik5Kb1oazLBD7zkU9FDR",
  "key40": "4XRGMds4VYhGbaSwo3VHkSLxfhtm4fMFBKsZ6FjpJ4S7X9sSZJSzCFnshG9zM6z2MNPWkyvupfQKE3vXGAAyutda",
  "key41": "gPqxaaAxMAeSqRM1mRCp6WTriWv1xnEXZo5MH14m45byd7z8TrVVKHPzwx1oJ8JxzrFByriaaVMzEnzgExDn1y5",
  "key42": "3Wby33nDAoPJZ7W17Zp24XQVeTY7yWYs5CDneucyaVgBBVDop94vPnyQbbvdbxDhtf7ECTCzmC98gBQ6mySPeiHK",
  "key43": "4fz1yns5y6p8dQ1QyngjUkYvg2VRHJPstWJ1TQ5pAnSuKVkELmTC4irwtchdBpTrSVb9ZkXJkemnyzHwwykjDHnA",
  "key44": "2J383EUUA3fJmnx6AtX2ePr9QAUxi47kHyDBnT2Rr5DnzwetQ4HRYt6PT8ppei2qVNei3RFCUvqGxNMRkyBEAJKH",
  "key45": "2e4qceSwPARBaMbPh7UfEyUb8dPixQbXXgTxTFco8hfvpnx4td7eosb2MCwpxyKjb8eTs56AMNKxQFr4FErupUZa",
  "key46": "2wde1BQm49c5aHGkq4z3d4GrDHaPLSDKiDUfgrzmMAGy8P2zRPY5DZDTDdrpXbG79YQQ9sdwxDFmSwshtThCBLgr",
  "key47": "WpyZJHCg8hrhCKCfxyyXS1d84wDQnQeq5qd3A9DdBfJvWfHRoCwz8CjZb9ctPG4hyU7YwZdgqwPHAYunaPnARrd",
  "key48": "Ujng6ZEJDRfFQj2JvejH5hMbigNat9sZ6PmBjWaWRhiLLPQdU4Bv8hJGgvrqaJyL8ZEh1MSbhYAGmQq5aTrdbEK"
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
