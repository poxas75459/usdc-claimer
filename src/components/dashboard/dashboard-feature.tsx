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
    "RfVqsicfUeMd9TKsBqauxqyWBeUu5SpqF8DmnNw5Q4DEZpacHVUh41nqBPwM4vHytj7NUggcfufHa9C7wGWTW4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U5a7Q3imUi2rXrAxhJbKazEgmgK6Jchv42WBeYZVDi3y5BaUjA7Bnmwy8UEsJ99zVJYaQC4beg593MrVuY1wSSw",
  "key1": "snbQBzVX4WTXjxcM4kxTgymMyLXxKyWL2X2ujgeZ9Z3wDoJ221T1vF5aXiT72MC1vY1xyfE5TfWasagWM5s8PzT",
  "key2": "4ysGVQ6KZwpn3DLjJrt3xd8aFX5rDwpj22qAWVJXw2v5SZXzwhdWXYuh2YcYcM1njb517NqyRBgjXw5aka6CYnTZ",
  "key3": "4wJ47q9Z2A7DqpnSR2wPifvGq9CNgJZzptkX1h12rUjnPDyc9FBHiT1BNUU4QgDTBPnYRWWQhjh6MRY2RHv8dW8Y",
  "key4": "5Uyv7M9zpTUxxitHTHFfZWA1ZAAdqBmjqsqKA4NhE9Zr26ZEhaUJVT6PM7SZr5THbYfczWuwiZhiekAUe48Php2a",
  "key5": "5hNEwUYSzxWBTChZjaXYuB6LhQGp38nD5ryHMHAbF5zYG3PZAzyzpjKEdtGBsapATx2Mu87gzo1Kf4MPJYuZKhn7",
  "key6": "4wYt7rCpeuLwsVEeFLtnrrikL6gw54LAq2RjqNyPQHAejCL6sJWLaL9GuzSNmgV2rtDaCKnuQomUnpVrh65iBAvm",
  "key7": "5jeFPpx2jQw7QYx7psnaNkrWCRw97n3FBWDvKuCkRzmDQ7q1rKLh7Rc3gmKXoLp71oTs9BF512of86bnvkjJrQpk",
  "key8": "3ZqTL77gcNfRk5yDaPEjiXz3Y6vYRJPrT4miWNU9twzz2koFgKYiGwAfL4rRioQWRmwYmkDxD5xVq6eK1ihhYeXx",
  "key9": "3So7TTzHGNAqnHPAvxag5Ns3iFRSGFSLgwjB6EqKDSHhw9dVY2mNAhZhsAgxtbMfd643E1acbKs2AvaRFymEXGKB",
  "key10": "4QoPx3Kcfq2vjfwxaRZgWLVGq42u5J81U6ZN9nkG1ApoTywbftXE4Fzr45DW3c8wUyfWV8FUDiMHTnwsRT6nMfhp",
  "key11": "4BcDiFMJV9jiBVjjo66zGj5mQ4WkPYHYcQAepDFdGKDtqvrZmWn4Yjmj2bTENi9dnyBeEhy2BCkSjVyqkywPiizZ",
  "key12": "4UX7zaWC386rv2TxVYnMTCdcbAYmquxhiDfCDxM12q29DrdvYRUpdxqdvgruSYEmgKz9a9Y3uPCM14edYEezVWpj",
  "key13": "3cSeMAyqJwbANr3YWYZsbidA32oAmGY8MTN1XK5Rp7zBP1qS1ieZKf8jsJpVr2XvUv82UeymspPVvGX8nVhb98cf",
  "key14": "5HbPwihiijTCwVBQkPBRnVWTY4sFEasBcD7fPAFkJXTmc8PSDBE5iGXs381uqDsXwCrYqqDZeWyzni4LdoSUMDSD",
  "key15": "26zWFLNmRtiniH4EuhsvfgcS6F3M3EBTFpLT4Cv9CqMMid39PGXSk3C5pS9k2cCKmLQyLM9QxT6SyjJvAjqXckNi",
  "key16": "2p6fiy8Pgqv13pqtr5okdqxhYjCh9diH4ByotKiMYvgWuivs5jXmDzeK4tDNeSbD67yyosaAuv7qwZYnhAfCKoUN",
  "key17": "bkRXC2PWvA8dLG6cLdBXwFhkSXZuMtwe2tqSjFo5vwjuQiHLnHHhL8ShbpSC26yxRgcwKLJU2ApPNNjQE3S2Nbu",
  "key18": "4ds651S7kDghrWuDY2oUXmmQscBpWfUmRL6DjUNbjRoVZHSCbmXTJj51wCQbkd2z12hUEGPXcjBbPrkerrqCgB7E",
  "key19": "3SbZfuDGMfSFpDYYgsmoBun7x1ZNd2F744LWxU4RetBDZ2cQhiVvrfuKzNGGEa4iPX4EjUfLvYP72VUrwB3MeWzz",
  "key20": "57D9DArAvFzobqqsAKbZ7ubWFrLDSFL6wH64m4cEdeeBBN2xh5GHf3fEhqYfG1mdHXhLdGQEL6mhDogMw3YTtU2Y",
  "key21": "tv1GSfnSVhDAXVSPmXywz2X7RuaWPqjkuaj67sD1QnQPZGvuYxCfN3nnp8cEmTc5RRMuRRJZzBTStCh2nqiHMTm",
  "key22": "21rs1Ncjpjuwd2JnvTM7pegU4MVhvht45GKa9A1RDXZHuZJ8zGqYjSSXLTNGmFSzTszEBZTDYdFj9D8NTkaPwsch",
  "key23": "22Wjqq3WCY1EqxTdSUJGmaXackoQJ67Q7Z3L9r3Sb4esG7Vwke2qx9aEX7e7uVARshZqmp2KibEaETpN3obnBENg",
  "key24": "2uPRyN1CkFwB65xse23TnVvdAVkZzPGL6N2C1nuDBzRmSEwhrVUDY8sHoHdoxA8pm8R1KCVKDF61PrM1zsQmKW4j",
  "key25": "wGxe21chCXuHi6F2dtazuyCmX5jgiHVfHwHKKCzbD8eULtcrqP5iv9tnAwX4GNe2EbfXN62YoVPdAzgXTuHG8NH",
  "key26": "2EL7ec1KV1UUjbr2PH2r2foHSCmxrTtmGx1uncGxhEZsssNnUmMYE3DtD6bnyagGemCJsCcJU1fWdAHPaEuWasXr",
  "key27": "37bm29kRi4FKM9Decf8yN381xoqrGxG5U2K4pzDdzDPm4NqY6KdJRb9vTcBpDPw4NAwvPDeNEgNuXuyXZUfVyap6",
  "key28": "4PHkfQ9Rxb1DAkKjGsp3r3w9fWUWbDUCFQjLq2447yNZVd8AC9QMpHxpDY2H2wg34ZAtLt4vEXi5UpNgsWraJKwr",
  "key29": "hxNJ2CdqzjGPpc4UMF7tsH9oyDZ46R7mDZ3YVucWDcRt8LcLzkjpgA2S88jbZcHpJsMgAfUfM2nGeDYo2Uh6Qho",
  "key30": "HKTmQ5Lut1kG5Bhbf769k6c15LcoUBbhqNpiHiXF2UAwyX8vsnbhWgraPdF8fhiM3azaoCki1Ys2BQQCC29ks1y",
  "key31": "2xLKt8NnmmEDEWNG7RouWKK2DNGqeJ8Wonjcf6nPPs5jSfwVMrhRBEVtsmKMWQyZ93vPQ4YuLSvruZKSSuV6m1kM",
  "key32": "W3noNUD7S6n3m7yAk24HxBWS7sNEhn2aX6H6SMu7T4iPvWKA9thKJxkWazKAYyybCCPAmHBfDvvGFsAHWiDU2gL",
  "key33": "28vpEb8JZEsKhGoEk1od7kWCGhizHMU2BKHNHLfDEEmxrJYFVkBN3GiSvqETFsJwPGCditByispdaeFCFDcBbKag",
  "key34": "39RfJqPSNoSFs7qMCg3UHctPDNPNWYWSqjauuqYfhyZ3isfsNSp8wE2pkR6WkqTcbn79oRKPSibmR6LjiH6RnpbK",
  "key35": "XKxZHWNwvwzzgt8pV74HYjrbeGLYvyFJB4DpLSjrA6gn1fX7HEiNwnzWRoecQPSgewoFL7WKmvddSFhwapwsbaG",
  "key36": "2Ao68HRwxpyvsi2ZAMGHwxs8EKTHYmLGtbnWeaLKmwQpmDRma2fqnTbAYZcqiw5wfbm8AbVW8478U8oJWNDhm45t",
  "key37": "3vg45NUXwpAjYZYJBySqFR7kGNWZVT7TYVb3VTSccYG72na5Xk8QLcdnfo3jawUSF2zwpJ9jmJy4r6EQZSpiNyEA",
  "key38": "eFEZcp2pgQ2p1hBEfTZzbRS75NN2ZHgozsdSt1eBkFKptNwZ1Tj1233XeDJnerzsXFsCT3xYpVpzeSaMGtsT35Q",
  "key39": "4bvJz4gmgMjwhZBbtqjxXfo33GvYCExZ2VvThk4USK6n4mW6RqQFV3DvLYB9E8XZEXFR2sYaTUHBd83bLgL5vKXp",
  "key40": "3NyNyhsewKp3Tr269hRFFQv5q7jGTyHGoEjieMe6n2e7xrcSeLiTW6z2fKcFMeNaJU9thNpzXe5r5AW8sectkdcj",
  "key41": "Vavs45wbAG5f2KdfNAvid6hRoLyRrPY317F1QYZs69Rdm1JgdjVMXp7PcaJgxBStwvGbG6staprYR5o21waqJyo",
  "key42": "3EW5vMxGJJy9E8yrqwsRsGep3veSEgxfAqaNjwodoHxAJDqdJmhw2E9jRGLsES2aSbC22XEaTM4z4EzXrU2e7dzG",
  "key43": "3823zhxemrAEAD5JdkizXofwpBRuvtv1eik2Rvrxkuvkft955g3NE7DsVoNGWkTk2pywmQJfS1vKg5L1R2u9AtrB"
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
