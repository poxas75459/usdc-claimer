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
    "4LM1KgP79ddos1Zkgs7Q8T9a5pyhSi4sWAaAe25r4Q2DnDLP7XpExNtAgd62efJbRfrdsG1G3X6nDUdGEtG2vg4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bp6EzP1guRQpsdJy9a5igqDW1Zap1AVZALfErdeLWJAVLn5jwFEwQPS2myeYiuS5MKPGsrMP81xzJkVfgnRw1vM",
  "key1": "ojwTmSQD4MTcGur7LwQNE7ctg9Cy9fgGKR4Ay3hd1PaVSxjCG6bE96y7wyUniR8ApNjVoexxAL6y453KvXExKri",
  "key2": "31G6AW9fc6h54R5qa4wmmfq3rZuJqqFbo818TJxf6YiqJZycLrWZpjSzSY5onAANak4GcUykUfaehVYvNq24JwPF",
  "key3": "5s665RuxHMQuPeDRmtzomsMPaD1eBZF1EYP6Xigv3HvZL8XTkxcnqRwQn41wHXc8x2ciSVSNvMD7MGwW7tAqiSFY",
  "key4": "AHfHvpusRxfy8wDRuEdgHKnjLdz5jqC4y6wArRBPT7DPqrghz2ZMHkc6DKVEKKRFwexLT1S7XCeSUuyMdAWmFzD",
  "key5": "29EaEzpFxSgWvy6N1KCpBXFVpBFtuoiM75mwrwbzyWaWvLUmcxUVfuox25zBfHus3pzBbYc22HdSsWLsrucH1st7",
  "key6": "3gh5mbLyDNDcLuCMzcLjsVHmsbtqPcMmg3exVrE8ftEQZDRaKNgALmcjSLEsJF1ZP2uZUPrEe9seGexFLn472EeU",
  "key7": "3ZrRDxCijtk1abijFQNpNRUEjUSz5XWkUCmmEN1JHpwvtyTZ9pT2XbNin6XmxxLfPAhbMdAdEBhp8q7FTTLxRBQb",
  "key8": "5D8U1yDsmzkZR9UVwin8jWFGt7PJbKT6R1Pkv9ARRUnLEqzPppdKDCqVS9Eun4TvoDu58DYXvhZL8gqgjhEkkTg4",
  "key9": "446qQZkWuTu4asnq3s6KYYt1DJs6KEceuuyuKGkuvMnT6XXMzVxyjfetPTFVCSsCaGpMGN5UR9JYdkYt7ykMD35m",
  "key10": "387eRPkJ2pgwdPZiacPXn7WxRiieAn5s8wkviY9c8LftJRpLsHrTtB5JLYS6D6rUmE8YwtuGhDEcd4wJM7RDJsAp",
  "key11": "4zHu9PGx5FbQikfUUqEqwndY5LMuw7prjTzGYw8tWEy96Yf1sqzu3aGAoj4GhJkYJ4H9P4bvJjgJkUgQJ52GY1pB",
  "key12": "5XyAkoA9HfM67Eio1tiMZfbjNd2WBx858bbuxF45TvLQnvYRE2uKaihVWTceuaYUgq1DBmqHUjxGLMUpDxFaNiXN",
  "key13": "7gaR1py6f9K1CBqQFFXxtyGwsqHV4KMwUkgP8KqMAcAwZfRZd2iiRjX1cAxXnA1XandVzithc3jBqPQERutk92U",
  "key14": "657B5ryYn3d19hrfwXcWpab47ksCFPK6imjHJGZMp5vVBrtX19wwC3dv9FtvvV6byeQzdciWSXnfJFmmZKMTdCfS",
  "key15": "3a1PvZRcmZVcG5qAHpU2M8bFBddXUBVVaYa8B5XHoQAR3AaEzrSfP7meAj8TsCiz9Zdta7Hm1txmJnKtAV4v7DBC",
  "key16": "59cBwzf1ziLvVrNy246pCDo7riEzg6otwcequbQqdNtHzSPFWYeKCTSs28gSYDQt79fhii4XuBdmqCtw6J6JxzQz",
  "key17": "nXwqB6ufpMN8M7MTTRgb1TUGuSzewpKDE64e1guTP2w7uruJA27Eks8vpqj1kpjGsUADTYKNeCiTFU1EQ28ETL8",
  "key18": "29cC7EoX9Puh3JdWHRGyvDjfRQbrW5cHuGbPDsWZ6xRSyKoHCXxr1ne5Uqc4ivjFo1N2UVUs6jWcELmWuSoiAM63",
  "key19": "3xJ46okGBKbSVwTaxbsbBWWXQpinGrbrUC2YhDV4GY3NSmyB8wNMwfqbLSS8wi7FAHL3gDbXegAdMiQ7DLVctQdx",
  "key20": "2iKjmwJJ9Nubs4Xf93Ytq8U2Do35VqoFX54CMvC58qq6q83XFDNEupwGwhExt6VnzP8o67GPU8JzWMgabHjSpgxa",
  "key21": "2wSimWiwvzcTcWK1H8Rz4py5N1yQseAYQnPwTvtmaetM8rJ1WHDN9sTmQ4kDpqEcDLgaRSySa8EU7ecwgxE4bTtS",
  "key22": "5CFjCBdTaArdjuY9Nyjo5mFbJp2Xjiufz3RUhXXQ2acuhF6gob9xNZCKSMmcF3eGhdPwzW1kJjybWaLskXFX8UL6",
  "key23": "56SKx5hiP6LU2kexpkwcYb6LjgMYLUru5bwxLPBsfxurV54REDGwKNBVMGYhkERHmWFzXWs6HKhqY7s3SArxHvp2",
  "key24": "TjYG2sTmAv1VtXzUoGhw8HbYQ9nG2U6Lbb2FL7atE9QSrsaJWay4e1B9WKGNF1tbJpt871HXb2cbaAP3vQEaSXm",
  "key25": "41fqd53SS6hki8LkuKJaYr9yKLrimfLubk83MgHrvaN8Gn3QPWKQQb2YVRYLLkzCkrXFrcbRFsaeCVWqkLeHRYRs",
  "key26": "QtXgEUq8AT2n86zD3VSXD5bhievHwS8DVYBQ5V2teZafhc1CWmqjFF2zh8iXXwiTwx1aoAMPtBJD3GcD8noTqtw",
  "key27": "5H12amY9qddQmTMSWTAU8572vgqTKCCX151oGUzQrufEcWtubc9gDhKUfSPYaRhLJNKHGWteY9hANHMDNXoroMtk",
  "key28": "EcvzWhBi1hdEh2HQpfKs4kGq3X2DmgZf5xDje5R1W8m4kSACGRByQrxJFy4o3DSZpXrZWFy38Pkka3r8Uqgs4TP",
  "key29": "3WJGJAbLMczedfXDNxvof4VxSZ6wRqRmKFjsPVjhxGGu6dSj1AzXPLURMeLDRFH4VW1zF9MABBegnscp6bTV3meb",
  "key30": "aatLFrFLkHZtZXns6YX1VWZMzFXSWiLwq3MS3iMMCSA8mbT8ZTC5u9Ld4UAqkj8md87CuVwrGWvKGNbab7CnRPS",
  "key31": "2dtVzQErUQcWjQHuaFuWBnQEKsRH4Ui42NkzMEVNczhox9FhMCKhjMVzzXNaQyoV53hVZiAoa86YTPoZSpV7mh6F",
  "key32": "2y92Q4GKMrv2zyNtDGNjtV1FpJB6cNqre73tx9LodyB54nxcswywGsKGJiQD8SfUDm6vWdVMYXpWG4mArAB2DHBf",
  "key33": "63CVgeTWK5D8naSfMMHYtgwyqtHHWY4ivaQCnbPQr6ruVnAk4dauVBvz3jZz2q5PaReET6Z5ogGrD7m42HFqa7p6",
  "key34": "4uCbdQdfRRrEebGCMfmXi958S9NGHDF5rtGvo56WKHEsH2nS8sbzeDKyEcEyL32Qcv6D8JVP5poe6q3j9NhACjs4",
  "key35": "PwU9syx5tj8JAkKRsSzHXwm7Gmd6CyRMJNwaoEFeBeEEiS239FAY3Z5fh2NoWpA3F1UYuXhCu2A8rq2g8Ry879i",
  "key36": "3fa8zLBqWfRxgT8qwiK2LPo5rKv2jNFXBdop9dUVXaTx2TpK4RqR1BTygMwtdxYSoF7XDN4N6WLzQ8P9wS43pPgf",
  "key37": "2po5PmvB4GuYx62y8WYoJMcjsNCJBSDoZQTmgLsGW82zbsRo9t4UPwPNpupx6gpGYRGUTTi44W3UMQCFUdMjVbJR",
  "key38": "24v7DutGRnowDpP9Vf7kjTgFAkRjjwLZKTXQpUs2WhySf53kpeSQrNd8uCr9SpdTx7ECSqaT2PUjiWiNJ7rq14cC",
  "key39": "4XC8zyDxfStBrLZFWt4VfQUfJZrFDLJ79C9LzYXdzYRW6VVyPZfyrT1x9NfkXorqqUopzPhnXPiNkC6p2iq92DkM",
  "key40": "2EHAtSP1ZJ9M9LxehKuDj7KSznTSDsgVLvSFxBJJHk1Zuby66Acm2DEjwFH6cJQz6CLzUUGM22W3TcwNjEYV9nAV",
  "key41": "2aS47bkKc3x3xbZBoriPQF1TG2bA2GL1WwfSNA7rG4sgW88dniDRZJayWf2oTosuWM7KeYYsBugsZ7RyCTQYSusM",
  "key42": "toJdVBD7yUXN4Z8gNx7ZdqErDQWqHGtoN3Hr7z5pxNsNPQyLo1fovC1ZdQwmAzxoiXMnYbUsYgEHt3dTG9RGykC",
  "key43": "43FMGDU32JZQz3JhHW1qZirGu8qRdnd3NmYYcCqxkeAENEozk6jZAkqaPBbhBT6DYVuuioBuWPQgm52smk1VX9U4",
  "key44": "5VrFKscBChWXwveU5RyAtHrgfpeN4L4JX33SgL8EPcWR5KUWbbpVcHyS3q5EFpibrHg6H3Vb8fy81GAvxBWSJ3ib",
  "key45": "4Uxr2wC4aBFbm6BLt1t4i7kkfFuETU4YGptetii6SFLSW38TyZawDwKbbm1Qct6GiancGjGBi5sqAKAPkv6YEoox",
  "key46": "5JCUxW7h8GZJVtwBMbWDHYPbCwHRY7wu8xbD6vLng8XYqxkcmrmmeEVkBzUkjLXc9j3HnMVHUvzGuPRu4iqEFoyV",
  "key47": "WtddqLFGKJzzAv7Wcnex9h26Tbd4z5GmNtukCRP8KW9LQpiUftXBS9HfWKudAUpkDdxgDPh781YafXQUAsSyxbN"
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
