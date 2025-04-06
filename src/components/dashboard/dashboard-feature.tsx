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
    "4dB2Bhbq32t1ERrwYboRomvCkCJikQFKcmLDwz6mseCwsshyxc8fn6HEBHsLyRTdyPs4AEpws5ZEnLmGxm3vhEnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TsRFt7VBX4VyT2o6cPA627YWvUwrLiEYN17Ld6L5eERQ7TyrCaGr1eJRVswtnxCDfnod5rgDurXUnf1mRUpvfi9",
  "key1": "3c9iW2FnRfKFaLkqg7cSWMP5DnswA5XMvuuUwuewvsxEXqiFDi1r4HKQ1U8pRms2hpFm23A9AzFQV2BSdiwHBZMi",
  "key2": "67LNbP5RA699Y21dt55WxBTBU8utH9hm4YG5SK7bRfZastmPp4W4YWg4RNbaXpNnDesrD2udfALRUm6jiLgC3meX",
  "key3": "2PpjrKTzRcs24tgLnr5ah2hC513TuYAyGSTEU6SW8rB4HmRuSyXPXag7C9k9MFAieWqMUrd5zjjx66vTQfedB7e1",
  "key4": "HyP23pB1cY5StD6jLN7mTzZ4JYfYnQBgtX6k9u1n8EDXLSsMW2ePxuszEcvFU2KGpXsrMJRvgVdZX62nkiiccY2",
  "key5": "4AZBUGwm3ReycyMUWL3CVWNzghoRLUeAP2vzJNEWq7gpBC1UVutrLepCtbi5dNBmboqC7MTwoCvEXY1GPLw6ELHL",
  "key6": "49U3n3N7g6fhBpaYhAhTJqipsKz9ZzBdCZsnPqDz6XjqyQgHdvj9BTD5yZXHfkhEADiD3r74Ch72UNoWW6kStSMU",
  "key7": "57spHMxehTdSPDM3ANMM6RJZQbSj3niNUPk4EGcAitbJYJ6T3cT9GyA9C1ySkw7PneeQCwRwQASNxPBaMeKrwXy",
  "key8": "39DCcwNwfC5yfujA2eMKEozNZyNxSwxVhPJ9uBMrfaarJ2ktB6U6Pa3JT9Px6EQNb1D3jiT28sugqN3N8iBABvno",
  "key9": "5DCYWg7UPvwqJVWuYnVUSZJAEAtzvpjyG9ZZ7uBeaZndkhB6F7xqREsrjcrEj7bRP86W4xL2DKjrqyz5eQFzPsgi",
  "key10": "47UC9N4g6MvMbUGEccrhE35CU2nbnuiMNoRvP381hzHNuAbCxwN6v4oLB8wGSCg5drPsxoqencChGyvG2YvSsdBi",
  "key11": "4GGkGjn8B1vtyQJhsQJVU7BE4XQXSvEMBo1jaguUDCvh2EYXAqneTFwHgkrz595BMdXo9soo278yciH4hp7TXEWT",
  "key12": "43JEvdS9SvKo1FxH2GGCXSYFxbg2rFKBRQFWiogetYg4c5apY2AnRE1XtDUYzYXUfoF9xuitWwmpo9M9E62LeHXp",
  "key13": "5DyC4iJHpfVkYNxhZeWpfPthvYBXuLCxyiWvTU3T5HXSSiqEzHaN1mvD7CpUQgXzYFynvtsbx8iWx94y3NE9En9T",
  "key14": "4JPGcqUFTCtGLGr8AH6VBMmXyjku49EGJVUc3n4pq3XqQhV4aw6QP4EXUsV7JB5rhQrUAGRefkXXFzDoFUrREw8d",
  "key15": "5TYC1Wkp87orLbPXbrCgqjP9BHuPBvv8DRidD8LMgzf9UJvYU5nGvPYVGSzBnSBg7ZnTuPyxnv8fpLctSRNZNgKi",
  "key16": "3KUJ267DkuMvC9wxBodn51AyS9tWu8A3DtAmRQsPGdd2w4w7nNf8M1un3SseYedrusGKQaXhS3HtBsqAxfwopYpa",
  "key17": "4PSip34byqYQUvg3qAofkQRSBqkckqbp8cAhzaUunMweMv3NjSM62RfJ8VFsxzaQ7MQDUaADttVzGxrcXh94JJa2",
  "key18": "4iHnBfXLb5Pi35WExoXfReL2k6MnYGwmPQMDRyuGs8TcmXwkANVDfFsWoTvf6CAh8bzGioC4tyGJ4ZMXwDutaLm7",
  "key19": "4SuMfzasBAaMg8vCFB2KauemuoVh6LgfyG8uXRTG3XNHnvKKyMb2Y6f7eNhGn5XZdWmMAquGC7SdDRryA7MPrV25",
  "key20": "2zkB3j7i7qYwh3tTzaMo5g5KF1RsSV1A4sHhVYJK1d6EA7JEEVgNPHNdpf2rvxhXKjnKtfNmAZtyYa8uKCeUW5D3",
  "key21": "5JwViKetxrN7GpBwsDczsxU3GjqnrCQvLrsPoZjM9sepj9NZ2U17sd2Q3vVi7nELrQBPmzQFpWzj7PYPC7CTRQ9C",
  "key22": "34duebDcDUBhT3gtbB3DxC9TtCE8E3A2ASTSei5bBh1Wah4GXBnXCTN7mYERSQBRyaRtUHeumjKEw3gvZaN2VogH",
  "key23": "62rFPCtKx22nXPiQfZaaWnpxYALgcWQ1TwH9MTLkeaNEW2vnATUAA2mUWCGvQBi6N5nQ1Q4g6iQfhGbsc3n8JHSR",
  "key24": "59pgd6YSDhZkTH6qeCZx4GzJgrXRXy9ovk7hHroo3GY1cxwTVo3AErArZVD2zLLsoPbApEk3WbgKHhKdkFfQ12va",
  "key25": "3xBUhf62NuUzmr4xmuPVTMm9cLh8Zdw6WcEjgK9YRh6d8S7VM49tz3ycLZcZsEZvC9k2iJrNUVKTYE9SdKc6Yqtk",
  "key26": "2oam453zpe8y3hH4WUZYT2PKHabaFyqLecQ5LvtnvX4KVcVPYeGtWbeVbaJhNH3tgJymHk7mDuydhGgVQFfD7kFv",
  "key27": "21TmcXstcAoHcMWR7MMoamMPH1LUZoJHPK9zkGt1SKK1uy8waPSLDjrDZA2LUuc2FA87sTLRwPPgpEemsmR556DQ",
  "key28": "5YzTP3Cbhf3DkgbeREpi3ybu4wdQaTBYAA46924TgeUVRsKPNUGui8L8P6pihmTEJLyTAYzkxwduLCAApSHVtA8V",
  "key29": "dNoaEvLUXdna1T87nx2Ggtv9puzAYzaFbgArWf2LiePxkY3DWtzxHogfEaJFnEkxLKi7EdomXSjeTyfG4aFGFvo",
  "key30": "2hbzWuDTYbYB2jYkNdu3i2TyMT88W9F9VTePdaztEfFznwtTAGhFTh5NFcDczCFMifmUUQhXNZJGo9cdQ9KEoUqH",
  "key31": "3Hsbc5Upyu1qGqzCo5vfaB9NYPkqY7H2dGuhyyAtEoVSY47vor4HmNjJUdt6CkHR9rgSDioJoEYdw5k7ngWPSsQj",
  "key32": "4XWFb6i3sJeV52RCqaWMtvLFjHhkcuh5XbGFtVFaQFJQ5qbwCPzm4iJrcq6HqyCGgUoYyASzTvekQf51BFo6hmGq",
  "key33": "4tvejBoFLttCSTZVjihfpWjPUXgC1681boqESPWdsccCBwzNMzNfRZfbhBoHJRPrgnMhoTY6Yv6MNb26Re7nVHuF",
  "key34": "2xckXYgJU1m5ZfBiPgc8m9tFdg45SynArGLsd7kdeSbj562DYEcttx829sdV7Pb2Fq836Ewa7jsg3Jd6eqLj263",
  "key35": "2qFsv96MET7YNtRbReeuiC3FNT6VQDfmeTRN4bYGhdSUzaWJG6XDrmnh5GaT5tAYVzKUMhBXYZ4ooYKMaYJUHTQH",
  "key36": "56aL3WZHReSidEo9u3x73QQhJ7uMrH3RDUHaRKguNMhdiUsD6VkTqFthpUJmbbtCWk4fYwktfkiQe5nm6LLuP8Nw",
  "key37": "2whvE2FQeuoK5L1pgAE8ZBuhEyeD8F6NsTBHUWhMZ7QnPnDmcZvgpccfse6529nqpkNkCjT5wFhwPp9FTznfuzw5",
  "key38": "3rQ9dGnRf9keQ7AQXyMrVrMbQ3mX11235MipKgD7HrKUqdsfWSCZmsxMnFUA8G7w6832CmUQzP7UwbmJUxoWK7XR",
  "key39": "4vLAQSqBUTUYYpXTc1TcWdWqXghP5twhTTWvpLnugBopjMvPVp9ygsoXAhUdDBVfz7fiZAQVnUDjmfCiYg5cpEz8",
  "key40": "RLYVWULy9RtdMfYkYEURZ6AbP9BidVrgLm6p3RETb1k3XRhPAxQHafikHEiLnYggPD5E71zj3UJpeJ26MVRsdFp",
  "key41": "2Y1LSzQmLwMpq3e6GLKLhPCdqhxt5eaFsCJ3NzaBJgD7ajwBvJ8jm4gbkEq2R8zpSXsqbY5GASpj4DCLA3kPN8wJ",
  "key42": "36XiPbDXJDee1ykfuMHHrAGF3st31TN1aS9AXEgaGYJaxrro1TCVCqxwvXmc3mw3czrZJehYfCrZoWW1DjMCVFJr",
  "key43": "3r6bgAWCeh3UAP5pBo7pC2uNv6nKp3LkEW6fXEG1W5MEQ9ZLr2ZwaLZa7QFymVSRZBAUp724795gTfxWHdWF6zeE",
  "key44": "63ZcA5auu2TXfYdjG6EF6Mbzx86nEpBx42oj3oaEneMvDZgsQkqAgLnGXykfgzcZJ2iRLsvSEPGCownBGmB1U3ET",
  "key45": "Pk8Yt6jUwEuza3CMffM9yE8rHynmF4dhUU2bAHJW6q5vBL1A79LodmcdANhQRMYCeq8hLrugVefV4zcoWeKHNdK",
  "key46": "Ej3siiwoa2LTE6MSghk1pnMxdj9hsudDdcVCUgpYN9Dy9Rvnh1N5nsUvRhkoMcENt2g7a9Nk2MwpFfnffbTNL83"
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
