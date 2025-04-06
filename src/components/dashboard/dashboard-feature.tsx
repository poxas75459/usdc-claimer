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
    "m2b9T1MbNQDsHvMCrf63LVFo2xtWJcdtV5cePXxxg6N2L75ws1ewkywtKjUyCPoMdn3SPeRs464SJm8jH6FiZd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qB3TSA2ka9Dsf77DS2hypSoc1NxJHcXnSh9oxM83Tz3dNLprWs8BPvxUh3QZWJbrpBWC2TkuL897xvoeYWjgiGW",
  "key1": "2ebehCvecD1D4SjEdR4ByJtp4E43AFA19gG2pECSk9xEGGANaMu5VYGEwx8uEUaepUgiWWwqwivSQNZPDqriABYo",
  "key2": "38LR8CpxBuRe5sz54tbDhzHkAEgFJBzyFPggNCPoyk8vQtLos5cisChHJoq7xdSKxHfAqrQ6mSfNMtf8WMBoRpy6",
  "key3": "HyKeETdmCyxAkGGfqezezdrHqZ7op8sMWsU4uV3mwfk6f9doQLhfYmqUMGk2VzkWCotLjkQ9VxpbuC8snFE4Sfq",
  "key4": "3Vhy6QjyyPJyZiwSD1qBNhcH3x1wWhDysefWFEcnPZd3GNVksQ5qf1PAps7QXcbCuSGzXT9EcMgn8yAKrSKmyrkp",
  "key5": "tJXJW9EsUAd16PWDUBx3ypBYBKdntq5CvJc73uWero8WXUXkrmucdL3knk9LFEAE4JR7NfLW24UXKZDsXVCsfiM",
  "key6": "2qKx3cKaJSoAuL7AKqZ2BXcdfvcHjWhyNdeRqwGUpRqG78ARbKAwjRES3Zab8xx3M3a3VJkHyWq7PFhQFAi14jaG",
  "key7": "48BXAiCwYAbM5GXj7GiTugpaG7EYW7fio88AUVnFwEu4HboJMxZzQEULDamyK7Y1FXQ3WeHBpyqpdyptKDHkfPvZ",
  "key8": "3GHvUffd2GD6GR32DacMiXJD2Qa1ovjX9SEaicYFAYqW7Z2WEfAZYRRNzq8TCfpTbh9DSoK6LJa9X12wzRX9eRZy",
  "key9": "5bxQrj8Rrc2LkX8ffnTydBwqGzPsAVHDJzCrEvndTNfsATTuXtbDZStGjpzyrnzMuVTG9AiqFojXQAaEn5FrDBG6",
  "key10": "52v5Ea4dpTZLW2Sy62w5DHYFe1xvYrrMjbWt3gQebsothnHewHDQi7E7L7YNM2vAtLoaWcpcQDxQ9sjbGbqt5K7r",
  "key11": "3CJoXWwnmy1LpgBUpvULWvWFdG7oquCAPJ1BEKyQWycYkYGD4NAMkL492S23K9gSEuHaJsKU5y9QTmBVJTXBhbJm",
  "key12": "5JcNSj9fYQydTYxHJnkm6FXYCw9HxhDzCqqW6qktC3WVN1kkhzbZKqKkK5YBx5AsSQQPaDD7ZaK5Fxk5rwqmJWgT",
  "key13": "2ZhM5XgFtRkNDRWEAwDwokTM4h6mNVeNM3FZ8vFbgbfC2k7wkVqELktfmYfSAgGNn9aMT7LzuEoPxJkyD9NURMYN",
  "key14": "5QKrJGcQ1e8NjD6CCNYjbg91zk5C8Mf8NLas6Mku7AmdzvXyZCoDVAe4oX5vQyZpjab3JvQRGzj1sk7abUVxkMN6",
  "key15": "E2ETB1G5UdbsmXWuvAqVxxoi5zsD7TBGSuQFFg3SgAhsMdV1eHrnLfeMGdeBd7SKdY8tTZvgbnhVYwjmXRm5xgJ",
  "key16": "27dKwFfGDeVZ2RJ6MHAdZLv9ytNV58prZemfYQ84XujyT6zUEzv7f3F2esoQUtqtCDzYzkWE51Fq7heDwhPC9q78",
  "key17": "42R3wfo82TKzpvezghVd98qe5gXSPWuREb5NZYtfq43iCk5FUZHwMsidpRXsUSiq84HWffsKciGfgp9RxdZy3eNa",
  "key18": "2wuUGw6c72RqAKX25M9WjtVEXfjmLmprcL6fs6qB243ub8m14tjPPJHgvC57MKQnGx7EM7UEdJteqR73x8W9W2XE",
  "key19": "QFSb1L2qPdbcU9JCNJFBUun3Cx1y15p499avzsc3h7q521sddnJ8t4KpeZNDz3rvFotUT5fWniXYtSrfgZXYULR",
  "key20": "5Npib7mYmKDVMoEBA6r3dc9RGxhY9YKVZA87dHPqXhMa4mHTmfTv4vfmwZ2swm4yoiyDcPPbsP5ubn6T1o9Y7oLj",
  "key21": "72BJsgmQYwkCDbjihJsGccqGVxZRCXHdiWMiXF4pvdUpJQ4z2osF9qBqbjMBnoftkP2tPf68RrW7QEgT2ZYM6PJ",
  "key22": "2AGZLZzedBgPqX5eoNXYvyna1thiwrXF3twXjj1iZmU1B2XF2pz13jyQqJ7nohejD9ZsghpM5D5YQiUw4tM9E4Ru",
  "key23": "2ep7zNzvbKH7QwqgDEeGCVHM8GNhs9DUTNWT3tpnsrW67smMdZRTU6BCCs1hpuLcwARCLoBm4GmSUV6B6gLKKCAN",
  "key24": "5uQwcmghenZYxJjb9ruDN3FWXuK2CGcSEjoy6q35A2QztLSw5s5Amp9ASSHi81CNDe2qbKuS9BXcv4BqKPUj41yC",
  "key25": "4vdyu9m3Nf43jUo84YgA54t8md1Ppurj3Rg5gDEMQXSuuN5pA3V22mwo8stRV4g2dEcsFUpHJ6ZuD9MDNU4xsrtM",
  "key26": "44QHr52obM4yEWrm4ZbzNryMDmvLXHUMBYpkMGqBLvfixgzafvMKYqqNxtZdy1S9UQtKyC5ktosLKSx91it3tNSC",
  "key27": "QPAV6TG2kYqiymNCsa3GjAdS1vhEVKezKiV7buf9JiuxTEXPTR5fd1oq96vP9sTDLASHgXDqs1R9ZwaczUbnmr6",
  "key28": "4Ze16D7kU4qLrpCYoEKL1r6mSFUFFHp6ZjshDLTEdpC1VitDCgHmj2iyGNe61AkhDkKNWuZR2PJARtsPMyZK7QrD",
  "key29": "2j4BcyJsZE6nKhtzTNdg8robFC6W4xdxqLUKes5YWApjfLUBsbCSZZYgg58WJ92dodTxFFwGS2sTjeV2kEtwLHdH",
  "key30": "2dJr3sYotrk44kxSwJ3Ucqv5Y6iyJtbWv6VVP8nybwexpKckRi7DyYxBTDHSNnPAJoG1XgvYCQv5QZxtSzUapaAF",
  "key31": "W8QGqAfUaQtsUJgWwvdvaJb264qZN8cZviJdasEj15VywrY9KqVYCWifaveVJ4pFKnfpWXfE1LpxPcPEnysXz8L",
  "key32": "5Kj5TRmhBae76wa3NcmRcoRMStixdTgaA31pRp5NVGXKp5SkJ818FkQa9No439gvtkyafEcaDfWcWDPnFXujEPLj",
  "key33": "4jsQJFXQdbUpuUwi8ep2jzBQWFRj8pt6FeveAFDkD7HQPRpgbSQ63S9A5NZRzUjhaiN6m8a8tov9t7yXq6p8VNB2",
  "key34": "mo3RCa3MNUrvCDq9y6YBJFaqtTXHRbhpLPo79QPh99AjGqrrnbd2Yb35AEkQck2gfg7JQedwz94GgrhziX1FPeq",
  "key35": "AiDS6WZ3KSi2nFHgfEYUTt6sr6ZRUdTk2uCwUSw6bThH7qEKuXVTLw1kTbRBCfroUpYjCp4tpqRiCc6k9vErNx2",
  "key36": "33DukNs8TUHugUSyxcRSpF1yVR256vtVYZgNYQyP9Cphd8psmvo23BPrkXWKo7rk2g3aCKJjAECSsSo1sD9kbqCn",
  "key37": "3qkwzxJEFgrY8A4w2LVpnFoZFELubipU4QJR1LDM32p3tUBakBBm83HQU1csPiupsVzNFxm1x67587nQ6cEXguSp",
  "key38": "26g8EvL3ibFmpoCwzzECTHR11jjAhjC5BGdTufNN7kPxMBYyLmrJfiX7fkAhZ9nKejAy41Jz37HhDik3mm8dkV3h",
  "key39": "5x1hBqb2CUdc5zFBHshHvA4LB1ovDNpv3fw53i3yrKkDuqArc88xjMgAQSqZFLMSQRtMcDZmcsJHPv7FY5xevhtA",
  "key40": "2yesExqW3VESt7gzkZMGFYnWTMkbEQNCK4jq19KhxAeKNvkZCEG5S556d2YEA8o8wgkbZ2UwkAKRWofybCYzwC16",
  "key41": "5P6px9m9iftPb1Ne4AVMjEaw3AzGPa4V8WPB86L8fLBiQuce1yaKXmyiZTRaX6HY5JNuCwfGZYLUWEo6Q2K5Bwwx",
  "key42": "UNvQPobrQGWBP9UPDoZgnyrrwxbaUfs4HANnpp5bouWTpJkBfBHzgVe9tUBxqE44pgErFDGXkvhThgww94hmtUB",
  "key43": "2GDkaJmWpmtCoBBW29WZsgCmNh4dhUGMFga4G9yBQmEwE8KrwzLfnqBf7yxmSqxyVtoyNMCG7zBUPn3kh8PJgPSr",
  "key44": "5Hzhawun72sLSF7nnGuATN5J9EwEmBgEUhL1gg7txdz8MmZM8kSJu7ypSjufR9wZQtfAduCgNS95p6Ft1VFB29Z1",
  "key45": "3vTJ39nMXGkq2iuUoa2JJsEwYj9P4P1aVLxFM8Kn9dkMDkwGiuHLsTJEfNdNKkDkRL7BmkezKsx4bVwoiik5WL5W"
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
