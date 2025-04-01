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
    "4YUB9RCJFPydKDMz6TxZRXvZATCSHZ9fYTMRDtv2Ln7XFKdiooJ19FPbGo8pXzYEHzqwUdfGtX35TLRMoNwUfcZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cA3ZPjdnnzARcjC6X8DEusVNokSiHHPAdtwp1SV1y1bwLkEoVTmdSyJgN74nSiJSutet5uH5ZA525soUAU8ikak",
  "key1": "3zJHqsrTvHNb1uXCbiyVggdwKhYoMzHKW4998D7tEurZn6R2FBzyXHtxj4HPrKdAEqTXV3Y4bKF39BHK2U5bAcLV",
  "key2": "4N9ScQEZigjp3d7QUNxExiEb7HkazXSjo1HK5xaBSbkDMX6KX2jgoXzDacqhnQrKNKd6gBG5tjxqXBct4cVkJM9a",
  "key3": "2WmqXboLAtvGp1iWcjHgQXQiGCf5KBXTK25XXyi3c9unVHqFdBp3LrRXNyWstVSrCdUeE9adTPDKYHgXUtKhgktH",
  "key4": "2LUDxw7CjrizmCiQSXJ3h2n4iYSaNQnrYa3Xsuf2n6gYACcgq5jiMzUxQBfuztyiA89vZkLjrFeqfqtW2HhDmz8o",
  "key5": "3CkqDy73LpPAxZD9cFx2kko5DHtbtKqgBBf62fvCW4wxmSgLCigkarrYFmxSSxZvcVwYv2hc4x65neMyzC5LiNxr",
  "key6": "2SC9SDCy9HNk59TUqjoAYoYpPpmp7sWE43pRRb6QcsK1ik89mRQySG4uuWzvGNiAuA1RCQAfCTbkU2YVqAo9iuBf",
  "key7": "qnX3sMLLysfxmHnj5EwoHZG8egJjpsUFeBzEZXrgFuMTjRg6qcKBg7Y4bgCmgEoU2GrNEYETWPZQ2w9joHPwkGL",
  "key8": "5qiwB7UQE3f11XRXoUrKWBGKW1emBrUwEcTde9qA843fgnqUJsYdBDQWPJ61qxEYPwucttYQET9BXJvv1eDoDVd4",
  "key9": "4tSDzRVEo2bC4M4R3LijkRkcpThH95Zc9dk9Zot8q7V1ArK7w7A1FcGRuBKKgT91pV7j9gocg3T39cbPoFZcMFfk",
  "key10": "5G4fKh8hgq3yyfAfsdgZp1vBujYvTvDeuMDegVL94rUZNmf4QZiYeQCsW8jumz9B2L33ZkXvXZV7uhWEFNtJwkSu",
  "key11": "5DWYcb2ngVT64SjjmnbeQ7XRMXyyT9fwp11RHYRbHdAeHVpeV6FRs1CFA8Bw6aNqjLbGJHn92cEktCbYJRDqA1Xm",
  "key12": "3vzQV5zEfJgAbRBs99gixSLENdPoDTTHT4NZNex27kzaKCREe8f9byybSZ5DztHatxah1T2JVC43GtDQnTBK2WLZ",
  "key13": "5K5aCDTyMCRcwTruBfGj9sshzQiBUdAfFLuhmtYbkJRMmG3uoNCqokbpboomFUEjHpbdKV7nSAgdqvGbiquee6kk",
  "key14": "VFM9bnKJx18caJJUi2gYbE2v6KK2814hhzLCbUzAoJcdSYUGB6jR4sSbq1MgLRFecHLnKCM1i5nH7bTGNCfxSMt",
  "key15": "kV1Vt9ii4S146P3YYK4wHxELbdf7PoUMrffQLEU99ZDZ6LMWSDpTqej9Sc4yX53yjpmbLNDsJ61KJCerYcowcfm",
  "key16": "4eNUvcjsrLB3nvg8Qgt1k6QyfGYJchCEon4sJtvWVsRkdqw5LzrnYozAXBg1aH8FUKLZju5PozcA1jsce2wNJTmV",
  "key17": "5aNiEQ3ua6yG2kAJYBYcjFGyW23V9wfiq45LigjAEo36iGzSrAaA9TQh6uH87owhMS4RD4C3Y6PabMPwNpBNzF6P",
  "key18": "21u8nTfvKdEm5ZLCyPHqjwSTdDV99yhexFSWhFkTmBFG4fzYUH39DyonJdVmgC4Vm6KRcwXmWr5UefnokLEhifpZ",
  "key19": "PSS9iHGec93qRtQcMZA58QJeDtnBJPuFF7BaevDRMFkNkeJbFGxykmaMYN3G26aGhHeDkNt9aYqsQWepvf3VZbD",
  "key20": "4oh6QYNLxx7UU26QbzG53rgV7fDjGJFukgjm8AWTruPFCePhdGKHjcHWRZbo3zp1e5b12VFJNLJwbw5sAXrACU7h",
  "key21": "4vpFq1LXNum8wW95FDatjphA9MtG1Rg4G3ZAcrB155qED2EviS7gUascyAashvAwMEb4fyoKj8SRXhxbpUq95uDH",
  "key22": "xnQ6UBWimYBYuMPtFqxzmMuJoa7LvfFcGUS6LGdiVzEQyu9o6wUKRFvTnMkq5n5kxRHwyxcXQ28XZ49BPtQiA3B",
  "key23": "5H6TbxASbPCS1AKFXc2ReLeXLDTxbGJEBnVb1Bb7W69ubFeH6CaYp58HnAPf2R7bgNE8HwWgb14KoSWwqB9XX87B",
  "key24": "3bSA2bDdtrJsb6frcmiR8n6dC9Qu34KyBuh7HZHnymvtvXskXVDX6jewoTH1Rf3Cqbd2evPCB4whqjUXorNrauDE",
  "key25": "3MR56BkGqDYRZ39gL6FQiHw7vJVkpEpUk7ncRKZe18PDzXmSFwrth6UgTe1jp1qoDpDnckKXtJhe9KGVGyvnhU8h",
  "key26": "62omV5GUGkSVWfyHoNMZea29gKmGkEVgBbBYHHwEMZrX7GZHXNLmdV4gqiMWRPmoHY9uPn8okXfju8jj6AkgTc9c",
  "key27": "T1xz2dxR8Hx7tuvUsVma4vzzDtNFCx5WihXmxAhG7rDHiFTrfs2JNkFP3RoJSL9eg9bp9jw3mnwoLpZM3KR24hV",
  "key28": "5GX6LwcNatGzBoZysupCsLS9dDUJ7Cv6NN7nvAFtAWBTWSMeBdcS6F7kgjno9DadxXo8Sw59uTpPtFJ3skL2LoB4",
  "key29": "5tU2FWdY8AknKKaBDAbHpKuNrHKoZGfwvtSGdnSB4cD8dzc3EUo7kj4uxoeT6GfYynapspcrGi7jv732aEPLhDqT",
  "key30": "5WgcGhe93sbQeMjRfc6ViyySRuThUM6jidvguoL2SWdS17yWmCCmhnbk4dmzSFgoGPZr71kUM6iqAxz8Kq2DfLpJ",
  "key31": "3hKKrGr6irHPDvtx9bhdUHYj3QGZUnFztNCytAqPWSfrbFoZGVDSpkziSe3TRCThLw32vepjWkJNxLi16U28tYid",
  "key32": "1oB8BcKPvqwijFEtUTigt5xnDK8zgXqMEVdwB53Hk1N3UacnKbHNyU1VF6UMAxgwhVLrWymWV13anhRQLvqxq8A",
  "key33": "43JDorU8BT5EZbxSGhWtpnEsTmaddbEcTRooU3BxwC2dKbBbKhX7P9XggLx37JRQhCkHSEFHRaVj2u2hHyNNBRLM",
  "key34": "3ZTdWwjX5rHfKydtq6vAG8kNVLuUpqyVNkjRG6ZuL1xKypvxce2wLeaxEPuuvMpevWhpVSho8riDexfMb4jkQtVU",
  "key35": "4h6toyuzgaZ5g6aNMFjquPTEa4WfCFDbvWLyhPhqPbqzWhz4xs3UVP3zUtkvwCDg3vRRRtMegBFt7yXPEt9SfHnY",
  "key36": "d1CwoDzyjyNXceyzc6zngoS2JP7b8QL3f2H2VCCFULzWpoQ8LogWy1Rhytzytuyj1sSNQ5yxdWgXQ3GBeabnvw9",
  "key37": "WwcBEJQVUp6EBXtrZ7nmgjD1VMxgenRG4KfE6dJAakoKqwumCwFw3u6GJ32TzPdTFBrWyHs36aqGJ5LHvvNjoEH",
  "key38": "3puhhEQQWJP5oR6BiNKj317vQ1Vbg3Vp6Az7VEgh9TK5iaJfBA7hgXcb3WuCuWmJnMF9hCW3XebcGEEHnMaDkZxV",
  "key39": "498vSyjVf4aM7H68ZywnMkcTa6Po6uNJMQsvjtLoQpdsCnJ4a414jgqFzA9GstAVu1TDTXvWsHtrX1UHTvZWx1xy"
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
