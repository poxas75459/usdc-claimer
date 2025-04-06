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
    "o8T7dNxWzENhSheFW2WxSMhkbg6VUrjxdHBo3YMqL4bsvgWwjz3Cue2y6ZsbgaxwP5jzYjwH3zUTTgi58ohQPr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54sXh1oFqsgs2U6mFPLqTbQyQhT5Y6EiAccwSyaDVNMpSjmjViBVjKbfBsh26pFM5ybrVpJdZ4G4BunRiQESWqu2",
  "key1": "5mivUHL6pRC3oFZc79RFd95a2UUGoQ82bZBDzX9wod6MNeKURLBVCDdo7ssPPAfnLMvPAGtdNh65At3bPpdAZsrb",
  "key2": "5Ra7q98SUPPdoMwYn47xdohVbQHgBFMWppPRi4cXzh48FrFT2H8wXxsCoagab8FraGNG91fLCKbDDZrVzuthBdH8",
  "key3": "2rsvtCuPx9aBGTtDmtuCj2wtk8uL8KdY47kY3yP15XM6BsgzyHbrHEiPset5RzQvPqgivUggiHqFRYo6DTY3nfF2",
  "key4": "3MnVr6R9ZMmVo7QzzvUpggJrDuc7MEdBw4EKt1mB9ktk1pTj1sttmFXrgqcfNTaCThPA9fjM333JiYepbaw1yrNm",
  "key5": "35E2itTBxWHZw8Ykyv9r25NuJYiZuJYRJZJTzrFA6HyhgdVoshSnavmgkmnJaiN4VHsmmBsS7XjJ3cSeXoscCn1J",
  "key6": "5xr1aMJrs5uk8rUmtCXB94SmgPDAkPbC3A3ZXSWHmthZAUBSfmaCboJPG5Y4gB2Z2kujNDydcaCFwdURcfMFyVLL",
  "key7": "4amcPHhMxG4RTog4HCfy6vd9naXNSwxdrx9tzPDqsk8vLGHiYz9VPdguXAsQvhQTRb138cjyGdqWAycgKx9gXdLu",
  "key8": "44CYW1veWtcPYT2D1NjHNozWZ42QxKrUsQnhSKvFZN9uUUxmePTbj2LSfKsbGkvvgwXk2trVKsDras3rxrsG3x9s",
  "key9": "6vJuibv8nbBw1FTeeRNPpnRPHEo8oKqDa3qUpdp8PxEKbf1DBQHoY7aN3DpSa3q2jGTpNQhfwE1Kih6VHAgnwru",
  "key10": "2paBBNJWNBn4XTMqTCq2NSqJiJVC67QMpsMEMdfUdr2ZpoRTCx5UPKTpnRvGhFUxXb5bJ9We4xgrHu83AFMQhbuY",
  "key11": "3aabDyqv52uTKuH5SE17FGdfKMq2vRhdHDamgdY1oZSeZMdEva6Uvta2wBnYtpMsHuFcyuKgebC5ePgHCpa18M8e",
  "key12": "KVJqyT6czHPppntqYpP2ysV9fJ2pqDDzCMHh41XGjdWvcpWhhUkNSDBVGzDtwYBnJ9xjiWdBtgh72mLJr5k7p6j",
  "key13": "3sdjfunppfEzog8L34MSjdmcR5X8mPH654KzybtHG53Typifjih6WTme4LTYw1dPrTBxHg5gxCzrAQTEGCEoiqcB",
  "key14": "2pzRKfUivzNsynWS6f82DeLwgfGcXKFCFRi2ZiCo1iFSJG89mBrXo6XPqfq4LUpdpDnGC5A2K3cYKtrp4FDyv8SY",
  "key15": "4m9CHnehRyZ98PWSsn5jMTUixYypGKuxESF19NxGcdzq6T1o1ek5vg9PSdPx71NwNo11AergLbLdqm1hWU9XYE35",
  "key16": "5QCaRJgq4p8ptLPtuuLCuycm8Ekne8Ac7YMisbHYfnnmpiNRSrp6GN4fjAfu6rAdj9m2Sy88asYvNwE8nvhKvthZ",
  "key17": "YBAyeCDxx3TwMKLL7mfCuVT9WTpXowiU4dxQwiWJaaMsokLH3EBaYGeJPJkV84pakMYsW87Zs9hQb1D93pGLLLr",
  "key18": "3Zxzm75PR2WAMQomkMDeLcG5xSxCWa6GYNJajeJsoQbMQSaNHpckW4Zghq4wdJWNY9FEynG2bdiA3kxWy4mRpmwY",
  "key19": "2EugtdhQkGbKcngMs7Yfuf7ApVEccNaA36ShF6qezxDJGbKrd2vDq7DrnTcb7B1dPXL5QyA8B8sNzto1nhAiBSDg",
  "key20": "3nivpstQwC8E5E8MP3vf5Ssy2PFzAyBsUQkBKuTyq26CTbgqqk2G79W3Pe91YUMQw7FrCnYmexF3538yviq5cAin",
  "key21": "67kf8mzd9X9s6Uw7kY6213EcFReeS29bQguNRdfxoiTr24QrdxXmtURSw4mMQwRRfpRyzyTChgx8reA9XDbzcTSj",
  "key22": "2eNougwDZr8n47UZ1EopPZTNPENKbZLq9TPwBWsdZYsu2ApoQeb1ThFPE1FtUcukrDBG9g8vzpnL6JwFh6KbNoLP",
  "key23": "BoDkUDDhuuXB2foB9MSsEzeyiTGkPkpwLvihhhneMZeSf4KMMZxinDHTXq8jEg98r8fbkLMFQd1aQY2GmFabpJi",
  "key24": "3ktUNDW26Yr38MEybAsSiLwbPm6YwRrr2seDY1A7r2pBjpaWGjkPsw8Vxgqr5zt6awzTXEj95duyoHTovhRaDdBv",
  "key25": "5ppxhZWUp4DFfV8RhzUxh2iwYWX8ZtNbnNerZdC2VMzse1L3PkpaEpmuikX8xWvAMtyzuf6FYLWZrW9i6yJEmhGs",
  "key26": "5EEEGWiuKt6yZZMJom6yfdPmuNg7aXbADUBCpK8f6paMwiGjJJ2WuDC4EzrwPCo2aws9dRTjxSLzZUokZth91b11",
  "key27": "2fDEBFm7eACvv6CEjQNxDE3sFtvyGqzMLP2iKsyezkku115ayU3DyaNfY3PsH7CsbL6NM4KH7wxzRDMNWC9LPq2K",
  "key28": "mJ1bVFwB7KTyfvX8TUhgCiQU9kxBtBrwpubuDWKd7LqQxkaL32C61AtKUMfDmsvkqwtyawZ5BkuPqKzoAsqbE1d",
  "key29": "51WJE8SpStz4dWHGacFFfBbsomMLgGSrMGtFfkWmu8m61ZDrQR4sNcH31PbyVrPGNhWQGS2kVFSJNXV4cntzbkvn",
  "key30": "1q3B5u3mwYBsMtHvpXjw95izXMFmRLG21LcAQvzc1yCEgSWe34hJc37BUCoccS1djScVoWAk66zmyuc8KoJHhiW",
  "key31": "3tkdYH15wd4rTREWQmtopzHKEFk9BDohh8QhhDqHFsG6zPE76Zzm3h5KVWMNK2XU5suEtvtyy9Qk79hWWwKXFesy",
  "key32": "d8pXGCb5UqB5BK32zAM6JGi3vR7F9ceXwRBzQsKz7C6QBZTTrEw51Qpozr3gGMZREMfXQcX2jAfLMg9D35WcYzK",
  "key33": "4GdwYBsdLxGt7mA3tETUM8ujvrFtG6WNt2bwPM8tQBWr5ggJUkWfFUzaNDLPE3Ch6rSCj2ZAKVCVxW5bkBciK5cS",
  "key34": "4zteM68vNxNqG6ZzUndk5uaC9jhVQK2HcFZmXwJXhUhx3fcPo69wpcsoeeUMhec3a2tDTr1koCEGTXBXQBQd7oRG",
  "key35": "btbLDd1d8tbmsfpAQoVXpM28G9LBUC8aTJvAD7Se62jfjRFzeSFCJQa9PXiqEjQ4V81fvfKmmj6gTgVMjB8Efsc",
  "key36": "4tJFSTkVVDGHtTxVibPvatiHUxCswPzv8FHSD3Bm5WYzMGyimtji9F2fSW4dFmkbwuEGugxk2qQRndut3dF2zR2F",
  "key37": "iWaMhpR1i3smPCvMVmVFGpx7mKoHDyncXZaQgFrbqmTnS88gq8SoGskLbRjbkgXh2vt2XrcV7nVfkCok3JwF1jp",
  "key38": "4tnrtRNXFMPV27JDKphzNwFcvx1koTYAkdA5q1ftLNdfhpat4EE71mHoy5dJg1rFDZ7Kx6Uz4Sp8WgJ5nWmdczTF",
  "key39": "3F1rCHE6Hube6jVqD6VDPEyUCj1DVvLWpv5Y8io9b1sRwJSprBxhYFXx1nZ79w5SnjmZuWA5XQVhSjhWe81AYESW",
  "key40": "5tH4jnYSEeVkvSy4a52YMxuiqUxM82jN44qaM8LN8P72kNpH5vNLsu6uwL3N61MVxyuizcd95TkwcCz865hPW97x",
  "key41": "SFM6u3rDQHZDScrirC2QhRuMc2k4JVfH8iMzk6Qe4G2EVRtZP2168Zjz3SKfhcQZaMuNiwZLS54TmMo6zJD9oyK",
  "key42": "3G9nHeHi6mqMHL73abHcGUzVuHrQMEc7Z7pGiVuJDqjQxSLU3WGTCZ281TkqBZ4SAUP28uE8ujuDnszB927ykEwQ",
  "key43": "5tCEjRoBCXrhCfyiC4R4uYAb8FcgosM2968g6Zw8Pcy7jLQUoLJ5VkMwbJ7nQLRXprR7jqvzYQgDpNGzZ2QpQfQ7",
  "key44": "67K4QK9UhTtbx1Dfa1EuYf2DmPeZ4CfwWyFTm7hx1WvTG7SJTZJiSQEzXvSo4ZHYzkYgsy3LzBCmNRJUxjHw9Syi",
  "key45": "5au7DGfNUWabFMMeF7jFjTb96gpKio6fXTxu5rVXBse3mpHi6hJUxufARghEn3S5BoVQ8YE1dQbJDNKaWoajFSRx",
  "key46": "2rUZgRjdmU5kAt4xzzZQZNLRnd8hx4grwXeiF3WmacT6692hjmV4SXyXEukAKNfCBBdNK2UUpGTVKJoAWf3dXjaV"
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
