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
    "627NHbkZbY2cPz6dshYgwRW38QG6Nn2TsJvnS3fi32KRRtL5VMhZUpKUTjk3ZGfb53YAfDQmAcg5vYAULvjSL4XJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvBzVdWW65VJmm1jBn3D9d9t6aY6QuuwVNm77KCL2fAf4TYAD2XsM1uDAqXg5bCBUL6kHEuvukBuoPNLkDkUAiz",
  "key1": "3VgBi1EBVnVHcs1jxkjtsqwco43iCmkTgFrrq1TGXm4C91g4FnDNrD2BLGybVvHAfPh3ZFe7pCPVfhdU559aAKmu",
  "key2": "2PxwD2TGxcTTJa8GpEZwBEwTpavphE1oLKCAGLtHxczrmWsKo5KCtgjNfZw87N7ehSjQH1MRuPays73XxYfYrFxr",
  "key3": "2CXjRJg3CWutv2DoqnmHtreQQv1jWxfYCQZQeJmEFzeiPBLthmUwifD2rPJReML5GEY5MFBGQsxZWL9xVBvQ6jYN",
  "key4": "PBiN8rmSQuBMU7yhRaAN8fwwMhML9LpmWbHUFhqNws4Q5Kus4qY3GWZ4LRioZpa97rt5yvqiG5cN8WbS7dB8fuK",
  "key5": "596yRkZCFNVwZfL6uySszkayTp3quJFuMk4MHjxGoggHba2QYiBLwgWTVYybzy61i2EMS7ZmXJPM3yPirk43jRX2",
  "key6": "3ankzYcmD4TsjPHujqZRvjQyagxwwaPGBatvfVaPj73eDMSzCJUS8N4vhcHjZKqEa1ZtQGSA4veZefiAyzvUoSEQ",
  "key7": "AMg1qrKTueZPUzRAchzpWsm7zPi9V3WSGSNnUCcWL5ZHcMqxHoYjgTXMUGJaGeNbmoU2Ww1JkP481XtpCk53CiS",
  "key8": "3J4uozuYGJ9mCfpixyYdPFGnNfBLAWnh1xxisadW4EB1cYqsHnkV8VXR24AjCJnNiyBETdupG3CVaY3gg9c4t92o",
  "key9": "5ZYxoiz4seLujyeDjW2dF8bArYi1fwvG3kj6CTxdVAH2wLCvmSHspe7ZrFCjmFyY8nV73RtsWLsbzczMZCZXfM8i",
  "key10": "4qdnTfu62DnjNQ9xrxSq11DPGpfaXdcYR9oReLiLMziNJn38RuL8yMMtagZ1akEyQk5i9vq81tTcEhCcMMLkwsYt",
  "key11": "5UT6jwVxVfdusd2Amr2wQMGMmMmTxv7UDfMcxotbf18Zhap65Pp3kvd7PscrUFFu4jogfxSzTvNhsEPoyCuqgT6A",
  "key12": "5188nWA1Uc7cDdDXtSi1G4AifZegjcLyppcyDWW8xawEWewKCiUK8oSUKVE896pvH1NKaTZ58SL2TGoV4mQrtNGq",
  "key13": "3v94B9w2w425RdGF7Dw8RWYg2d8dc5HceV3MoQcHC4caBBNneRy32tk8R8bp2YkCaWdCjHLDEFn6uUfhS7QzY45H",
  "key14": "55HMKwFfopQKzoTp6w34MRGB1aQSuHtfSETkga2eWnwAV8KHeEh1e74Ng8FsfUjWmss2WrVshEFaX1ohxcASN9ku",
  "key15": "9sx9mVzXkJ5FN76wyqBhHd5y6DsAQsKA31s9cerp51xfnY9bjgymkqGG6EgUANNFdNvsqLt5bqDNQxyX8emGUH7",
  "key16": "XnixZEWeV4jKmqoEwEUYqikongRcxEMo2Ny2X9j297DXCiyxmjosHsyDJuYfuFyx5YQvBgGozWQRmca2a2MXuTs",
  "key17": "3jx4vtVihKuUAgqPjvncCQJi8tfRGn8jBa5FcNWusKRJTgskBtdgaqMHfPPmJRQyUxa3kbh5JWvmfhE3rJJnJbMR",
  "key18": "3bHd3NJUKFtVSK4xgXZFoPozEDoq3sgtNAXu5ESzYW4NMY8KtMsLKCoxLE5Hy9C5iLDbKMhWwKVsAXb8wJypQiri",
  "key19": "39aHKBzsw13UEucGPR24bzAc5oha12zXq3YqzNXLWtuN3tuSmG4wBt5PZyJHpgnpMRjrEzP9Gq8ZLwzj3HmGqosr",
  "key20": "5XQP65yof2HmoVBsxcdzNhGt43Y3qi5bTVsd9YFpBqYGTfsJaFKjcJG7hzxdq5UbJ2HZ5jm1UxYiaAkhNhuU7dr1",
  "key21": "36g6HoqsGts5A6KfyJSpmpZ4GkjthiJexXD4ZxGkQNZ776mAtRd7g6PrUDkAiVQvSCdGgejA3d39YqWPxEdP5DpH",
  "key22": "KE1abpnX2Xya5cAn4AhAbSoqqSVALcQsCFz61qwUweWGrKjchLbWWvgxHqcvLTaj5huoaZSy9bjUSbFny9KRKun",
  "key23": "2FxVJhLwvFARwY3vgRED6d2GALHjuBz5roSNH27fTT5trwR4ZDJN57xAevWqqAYEGheEi2uvqcbPtfMytts9yD25",
  "key24": "2SNNrXVkomc7yLgmaSJGCS7AkUwXwjT5pM98ti7wFXR3hzG9aUCfWSdTvj9LNuxHWEhtcguWbGj4gxjn5qeraVLc",
  "key25": "3USB7pUAdqk2mJkuZK4C4XoM9Uc5TbGT6ReigVSTM7YDnfeHtDM4eSnHsc7Fy46B3ynnU6rT3mGZCNocMD4dJVrT",
  "key26": "262Z3L3PckwVT1XGv4NBcyjtTcSsWky6twgR1ACTHheniHRG3VzgT45iyeTGZBhNtfaYHa5oEZkrefcHSKkZHU9P",
  "key27": "5opsra3JBRVNz3NUVtSsppZxNVLxxnjRyaGBzzRENWstcs28KuhoSqgqRAwZkFK66V28iDRw9jZ1udhq7kbTd3JW",
  "key28": "356pqU2qrDvjy8Ma6TVcZ3tSip5SDVqdqfU8Auhb1VgrkKJmEiMK8aZdnHs3bECBB4skXV4WWxijMDqFb4LYgWMu",
  "key29": "2XMBpJshnwSN8y3Pgf3bjaerGMuQAGLAQydU16JpsJZd4nKXu5pzRcXd5tQCwxkhg7dkLDqKrirHtGswJE4xjz8P",
  "key30": "5N9ie4a6GKuzH73PTFvnL9mZEshCezEefqvHcenPqua1XkyQPUCNUgdFHtSqh7zqoDMrXUgdWV8iXmCUxMaF1T5S",
  "key31": "2EWY3ddxJFD6GWKbFSJwUFQtZjueobvivMNrmf3BYj4pjVHU2etTrD5JSXxK2gS5yA1WSd1WAAnHrqttJAAzHSis",
  "key32": "4nAaYnKoHbhh2C8r2dyEoz5rqy6xk7EKJgQRSQ7sMKHiyqNsXNoBNvMUYesyfWxBWruWntzocqv455SS14pz6WbY",
  "key33": "5A1yC3fHTQjDqvekz9yp11LKY2PLtsp58nHRa2BvYcBzZF1dBGU53LopkBnHyRtnQpHUyHPkomarKdSkEe3ipQLC",
  "key34": "5L4vCqXjt9ZMLCGAki2rVx64DhMYhz4XazVLUSJucbN33xD8q8DprpoepKFjsaMW3H2mkMWEdVyx33YqaSR9inyB",
  "key35": "JUU9xacRzhBStym2RN12nX5rq8V1kC6eAekxPhZN8fQPHiKyYcnxkwFZAL3cXvUgwuG2x6pkwHD9secZbNLJjkP",
  "key36": "2jxNiLCCSnDDgoYd2bo5X3GsFdyn3MKbyeAzFkFparjB5V2qNAUubWtEt3SYrWcawJRLnxmE4wPGBAZbSMr9ZK4h",
  "key37": "3DtVxiScBox5K5m6zWCtL1WaYp9YLR7mdAQHTVgF9br2oDo95PwUYHsX3XLWYFxHwPS6dD1NunLuUEL9bAq7H5g4",
  "key38": "4oepH2YU6kucbyCBsG1vQtD2MznkB44Zhdho92iaoys5pUbHMgr5z17TtJxmF9AMTVuLSAj9abbN38CMVmbCzpWM",
  "key39": "58NgLAhvPvSbxmKrn2z3tu7cyUfU4igWjeFsSFdq5rYsKhRqRTWQ3Es2T74sEKemAcCh9k77fbpGhmFxR7oUkbhY",
  "key40": "4vsFsJM5cxFgymjeStSKHM9xKecdiBSave1SmHwxVrfX97NxwYu3HbQuXsr6u2HrjsRw1pS44saGc6Lyghfu1a46",
  "key41": "5AF3DXYXuhUecAJhucEFEqdvqEzi847Ghn56JLHgwaiN9wWDciwAWLgdM6C8zi9MFcaEnE1zsXPqQQmMW4Jx3R1W",
  "key42": "89rxMXjmQbbrDfmbQWnLYsbFUqodQQAwjPKPiwQ8j1VXh4TXM8nx798HUDrHXdeWB34QDG4WdmdJ61N9GQy4tfs",
  "key43": "3Xk2UtZiPHg8JV1KE4Nn3jm1ZNmD84Ha6X8UymrubCnhLiZnKbPXLyb8k95qYRw2YhehiC3MxKBdoiEXzqZj938P",
  "key44": "2xNcmSTTBAdnbWbNBBRpi3i5n5K7c83SJJSHR4aFJNL46v2jq9Ys6zEQtVbdxLvZh3E95naV1hiR6HpS57TrUwVT",
  "key45": "5uX637DCQYRjUYDmo633afgQZRfPdUXWE7v35TF55p3RebKNfifx94BvKvLtn4Dd1kUBbBePYyixV1MAEqiHcrvx",
  "key46": "37SKMEwMjz9tSN4MteHe4qMd27uHt2wTb7gNPkyzpYHgXAGJULML1KKarZGZkjwgzSZWpxE6kzMqhCZNVsSHoDdt"
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
