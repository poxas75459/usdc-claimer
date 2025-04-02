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
    "4WUYXLNDV9SZMDtmDsZgPbqoBLmnJ6Zj52sBYNWH4wuaP9EX2Usm2BSDqY1yFuJYkdfhjY1uWaVnqMqG9deBzf1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57b5wdfZPRQateabxusBbGvN4Pzr8MeJ2yJTrjrxmJvXfBn7AC8g9aMYBvPESEJ5e9TbKxrBtBYXyZJT7UXJiYiL",
  "key1": "3VvAENBkxHT11rdxAsnwgPAS4V38DLFbhvpvzAZQ4rKoAA3Wq27vMQzMPBqNAvKyeRaasZEPQ51GmRen7EaN3UjU",
  "key2": "MfDyimnvDZm5kEaXCqM1VLrB8eMYBFWttkhpJ8JMjcjUjoaEFkffJsgPCTwikyG3z3aUM4QFgDKemjxHD4ASRSh",
  "key3": "2jUpamUYZq2xNWb1MiJfGF6zrXgPzcnAJH6w63DTbLjNeY6oswbZFoL2sNAg7Vdkt3odXH4X5byVHHZX7uEKYiS8",
  "key4": "38ZzDiEv7sNyw7ZcA2ujCTDftkcr5MgdkG1mGjaLjGxJZ61xyedojxBh1C2ZjrdvMpAgHG6HTYRos5kEnYyqXDSF",
  "key5": "2v6RdhuDZhNYTZdLfh4Ju8qGtECBh67vW5i1ZHj5qkTfzgMkNRNayFM4FbrwJG1vNt5a7FFqWiE29xiNJRcdbBcE",
  "key6": "2qF4daTEb7cfDmbSecqKy7aNCLMnomm8GgM4RWhKw8twfCYUYkGxsHtGo8aEZHDRN4NqLPit4dFXXC6vnnx853MA",
  "key7": "2zPDNE4DNNFM1qEPBnSdB4y6AZBZ24oYxLxeESEG27mQHtSdxAqU5R3SgN91tG2PBRJiCQmduaFuAyMwVKMHu8o",
  "key8": "49wKCrxMk6qoXEnD1jwRLn3uy52cQZUYTCYmGtioPjEAncucsXjM47qUQzw2PR8QPHQqGdvDrCAESfkyUijLmb9C",
  "key9": "ENnTvjoosUheboujVUaSxm2ANVLUbAS9YiyoU5Seuk5vWsF6HpHarUYRMHYatT59kyYDc1KxP7V52iTAZgFc2gL",
  "key10": "3qWjBi1kHxgf45Lj4iH2JBqxKUC4VWN9Z2s3Qm5kzP88xKdTNWd3tditdsQb7S1o8Gvg9UguQ16YsbPwjiBNA9Sv",
  "key11": "4pfHKGHVaF2jtXnKz8pUJWw79wCny74NgFN2qLY7fN6EKh66tzuLwZKv2dNvrP6UjoZNShX9aLsXeTvw11gwwbKp",
  "key12": "AiiWchbRmqdXbtbZkJguRQytfTLheJdmdZxnkNGhRoLSySLDseYNbodnDye5WcKP8T8oWYtip3tp1AfKbCGZALF",
  "key13": "5Pt5sEtpmKcAbNnLp9ZNdvuQRD9SVE2KD8pPYnC7AjWs1yKD47VGZzbTgwwWJG6upam7g9F3Pe4MNqS1BKLzeeSb",
  "key14": "2TLRgvwLBTsrmty65q84zybCC1Yhg26A3Us9YGm2hCV9kDNUboopHufRyMLccZ1x1CECpovbYCwptDCWZfT2CH9U",
  "key15": "4JNAe1tzcjsYBGBSHcgz1bnNbwpSUByAkt5pYGmYXbmWynE43DnrPsNPwrNjJsZf6ncASvFZwQTjdnhpe9ib9be7",
  "key16": "ygbxRGEjfaT6z2AeWZAiN5nXn7koscqHBE9MxgZARcbaKe2c1LBPsfjrSHRZYubrSwyk8QuPqJhTrsAniKeSY5x",
  "key17": "2YLfZ4xYR6tsFSifEoc5TubDthSsrGkZhCrq83kTpFKkVPoNZkPLRfLrBkVic8aJWsX1K8ndf4xQ3biDcS6scRNJ",
  "key18": "4B24xDYqt8qdcHrTq455s2fWpGd1jsbb3swbWjsgGpgmF87edXEnjViL214LBgi9GsycPXTqdMUuNbHDzqL76egE",
  "key19": "2ZmDjVWiB4FagjvGUVFYSFgcJzQ2zA2KQ7Yn1KbY7mQQbGE2uL5boX2bkbGev4Satq3oYgKPGxK67kJQaHG546PD",
  "key20": "2vQeckZ1eCPLnx3mFwP3FcVaVmG9tvCsty5ScVfkuHBoTZNXSXK3tNe5ToFcMwNceEu15JZ4456fayoVHeWzH1K4",
  "key21": "5SSdV696iPACRSx8E2MADgNZhad5fUQz8EUZy6Hv3MLiyh2bEwmdNPvuCzMKDHY2bdULp2oQcNnWBs5FRdCL25Jz",
  "key22": "4Qbs1oLzX2XRRyymW7iBN87Zy2eN8iSBF52MfiSUjwwhbzUX2EgvHDvVrBu6jjEYHEAyxBoWD3WJ7TxTkLzPgUqY",
  "key23": "54qNtyn4T6Rg4wsFqiB6KyxcAEqVaELrgRL1JRtPPZtrzoBPiihkzLgPTFGbSb9AhMp8fRZEWNkNyW7LL42wY2Hq",
  "key24": "5jw1t31zGaJgaCimiozMWD3cC4Zhk7Q7gFVVQ4drkBGNurw9YYCqq29sRicFREiNhMgsZm596jD68qgLpkKueNG3",
  "key25": "xdRA1admGWBWiywc13Ybpurgt1MMZ5AmVcqwtAMUp5CzWKCDkSPHbuD17cJ9UELDb8AVEHL3V6UJoMCbhbK7spy",
  "key26": "4ZDP2aJK2yKgdevhk63heMV6sMYU6TZMNK4Mn7XeNksNRwC3Z42eUCnpyjkcBDemoC6EubzPqkXGnqMiwkJ58gNk",
  "key27": "3hYJp6dq8BzvpgTQ9WXjHxs5vSA1qAMsWn8ttvbEZsNyLDi4fhHenvuVx3j8piif6PRuMmwETXA7YNYiS2VrqDry",
  "key28": "4CJJ2qLeSPq75MErLqWLzEYZxHp2hPLBUcNj5iHTBKykVUYW8QmdkK8yjZuzSPnGmqk3gKEHixYuikqMYF7ZpU3o",
  "key29": "55u1B5TLWQA3v7KGHXrKBXTbLiT9pra4piaxwNdWyeBqk5fssAacbeemZMLyuigsvUyrj2DxWJvQJxt593mXx7n8",
  "key30": "2f6apV2ejm56VeidX49Cx5XLQvQ1vedpzJnNfCEkP4BFDxKfvpakPf8EZuT8tKyWQQAtcY8nZL3356F8snhcf2Gi",
  "key31": "4XSepeV3Yibhfs8Meg8khW57J5wrbZCE1YD9PVoQYxQ82YRjnHbXGdZhQTS1ppeGrbrEEJ6EuNwmu82CPsYNuNU5",
  "key32": "3VWGKXG9J4mww56n1DUAAfe4wMdC7Sv5dfEZAj5G1DNed5mDWqhyDSKXG9qroDYWfJiBNBWRCEoD5wRDjaMCoRFo",
  "key33": "4rq173eTTRNtnT2H4qU2KM1gzonbpyLhnRXJTj4RZL3u83VS1Cg9Pq1mCyJqyL88SJjxHSfbckQ8Pjskuic3fMDV",
  "key34": "344ieRjruoyMfqCGMX5hPqProwJgGVRhYsYB5FtoRrTMw1rJnT44LH1poyK9uY9FAKzygeGZDR1dWJmcqNVw24ty",
  "key35": "WfcJG2QRLBtcLyUBSDksaghS6bC3NKVssDJcic5gvBadrdt681P8EQgVtbTGGREv4bp8e94qoXGhApwYTQ37zZT",
  "key36": "3fiS69e9piis5Rjx7fX9JoMARJjMYxXEUPSrMLLF8h6ghUgr4dBhPyoeQwQsz92XngHaZu6B62v5VtTzjujQEEFi",
  "key37": "2yjBhco9cVM4smS2cNsdGkygN6MFPRBLprKSurXQAW1C8hAhfvpt542w8hXitRmv1z31iyduFMwYjiD8j8JQVcdU",
  "key38": "4jdM8CnNuTgnQnobr1n8BYTuNfaLRDDjwgwqHtf2eyH75C5YeUKCBxCRqB9q2sn3987gd3Yj8RMNkyk7AunEjERQ",
  "key39": "3TFAujE1z1TL9a2zSCctyyQG8K7CmrT2NoDvJ6gywYyFgNfoafZALFt5r49rGLsGL9BuuTeTQ81QE3RufBfSREy8",
  "key40": "4sA7QyYctvJ5s2RwYeZt2msFdUea1vZ3LCh19sWYrLHtdxxmGeNZATmnhYEnM32fKfTPA4DKLNosmwBzH9yEx7cW",
  "key41": "hAcEZEvgkswaQX1PxR8CQNLDB5Az5bNGT9M91rety8sXbCJCpGLh1e7ozYwhb5YXmPunRSuUCaSZVSzWGiTW1fF",
  "key42": "CMGA43LGR8Bp7i3DqP2Soayj9oirz6XEz81PU9ssETSGFc3R5kJ2ubPj4WE7thdoPqTM1miUkE9tQRKU6bK2gGc",
  "key43": "3HVodU4k2uvB7TpJHyMGG9CgFb3B4289ngwghZynebGDttRDouXS3AvJHezqksLJrrquupANPm78M4N7mMJkoCde",
  "key44": "3AFNvvrXc4qeR3H1VWimarSjreLJZTYgh2gJFiPDn7wqzSrr7ZUKRWzsAdgmjFGGszCBGUcLcTdwB79gZJMcgGbg",
  "key45": "3JJhjW3C4uRxxdd3w2UTqgktK9HcJDLLafSMPkL8HoT17e5G2Pk3hirZH1srAnmtV1iStJaRZHvjW4XXsh68HcJ"
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
