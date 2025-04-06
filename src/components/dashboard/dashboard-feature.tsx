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
    "4pTxKQq1YdWtE47PLL7wWGcXx6thhRGLpFaocXrvikU4H9Dvnhe6Vj5c1YtKL4PSDeJTKX9ZWrCSBcAFG4oBjyZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AYtm6VAiDsy9zCQhEqZEnWYLG9d6dffYJC969LHfsS1fRKx2XuhAs4hHN9xaaApu6KPGQhiQR3Ye1pdsrLX8DPp",
  "key1": "2ZJrhMEcwzjiqcmdio2hKUkvnvpa5JofEyJqTU1vaXkPKa8zkmpECeRYjNRYgTtFdTxaEGzKwAGzvnj2QHBptikD",
  "key2": "3ijQFFCSdofFUdy6sXstWFiRqqHRgJbURfgnUj7kB2j6eKxSEEypJ5rCFdMw5GqVb8odiy96x2jjodL4T283m7yU",
  "key3": "q7M1phhEorPXoMqyNoagb6DkWryqLDaZGz9X8jH3GcsCmswrChree8ddc1BCZVzd1Z7trxQipTTA1H7NQKmwQXB",
  "key4": "2kCecNKnrBYFWWcMnNLpB3SxeNx8onskKqTARnDGRcAyVRivGytVDLipszVVtnumbTpXnCwSMwuKDmsnindbSgZm",
  "key5": "4qabyFRD3Ka8Pw2d7hrzxvcwmxmnAY29Es6US8zaP3NhNhFopN6J1DTubGTnfsQUPXi42y1SyjmWUv3hrBAZ6nGG",
  "key6": "4x5LULHuzWiwKxJ1vky7bSjVKz4LeCwFeitV9B4WFMV9eVziyQGVpCa6chETUVm8KNUqMAKhUgJ9qwTaUohz8gQA",
  "key7": "5aqJD17Y91L5Fn5oyVbQUrVTT5XAjaQzQuWqkoU8N2xuGZD9gFopFmvmF9BnqswHBXq19sMdim7GMdefNjBZDjah",
  "key8": "3rWyAbPvvjGcUC2aZfYN71oHkvAJ3WqUWLoV13eLEADYBWTDUBSb9GURKa1HRY41i3Sq5j5CC1C49W6k9XbwHFmj",
  "key9": "3CTnwm6VwAPUv6y8pHH6BG9cogSRtPhVSqxSkmep2VDgpkBAjH9APLTm4R9K2QY9JjrUPkLTdf4uMbVCoPkhJ6ow",
  "key10": "2KYVLsaGQpmBj7pR6cFVEYKbZDn77xAc8LZvoKnV2bxYRxMgvBvQhXNsC3SQMzJS4ATR9GDAr1Khg3MqgGJoqZck",
  "key11": "3H95MGU1wujCmVpnxj2fn5TVpdGLPdTVHvN9UZpasSyNeESAihrQr3pQsMfP75dKg8xjsLd9uJis31wp6b6yLRm5",
  "key12": "3MNPNSPdGgEEFZXevus5GDSds4ALwWp3Hvp8EkqzKuhDjVvi2gD2dG2CKqNQvP1eqoEpM8Zo7bsfXFFeKTgxsNBp",
  "key13": "2GXqeHUBhvMJwKbbTVofRMfxRsFJor2D33LJCpvLfy6djE3zRPTCh5CtpDnywGpcRJUAKR4xk1Bmx18irHP1T3Td",
  "key14": "3P9rXA3CujHDmYCaxJVgrpMBdno1QVmWJVhoXYgTrJAPp6P8Bh1eDyjcy1R7zm2avV96etFSPSMS5xRmVfEQ1kfU",
  "key15": "GTm1nHx6dNXiR1KF1yqRuWhNzaz7byb3bBYZpCeLAMKpFxtEitPAzoXDc8Gmtm9nsNC16Zu2qspJRGap9nDVXwr",
  "key16": "VBKqs3s6AtwPkDgqstWsnr2V3kvonirnYnasR5pj2fWHWkrEkK1qUXqmtUADcLjCuE4yYhUhs6zj1o1VoTnbFUw",
  "key17": "2868dub7hsitqgaUVy1CBshphQi6gVN3S8Ra1RJKrzBtt7Y2NW9QDu1tQSFyPppSDZwmQwgGghcVSRQwmjA9TpmG",
  "key18": "3w77G4cWc1yx9Y772HQdFxeYadcERwtLhRN8xpFASotHHiugYLjfvEgATcy2R1TnBwBdLJDAXME8drcT25sGNMz2",
  "key19": "5des2vNbxo6peS3zr58L3tWaQtkF67c7opWyQ4SS5ngLgvnpyE6tEkQW3hioPrjJ1u8KBMZAWrdpNyXVXTdtUVDP",
  "key20": "sEsFHqmZHpjriL7fgxwSqeAq5kLMVG9V4xca77S2VU6KZFaLzmYQ4QH8rq7T5LCKHuigrtE8cAdH39qPniLA1Pc",
  "key21": "4oUqPG8c7UurndyDmYrzmMnC1WRTGoZvSTJskx2zhSRaxcnWHf4HCGdvK4QC5ZbJkXRNsSUGNA4vgrmpEpVi9oma",
  "key22": "iNwxVNTXzdvGLGUNtmkfsrpc8afwsxXvzR5YeqGo2gURvQrJPHJAShNdUA9NSn6VvrYHAsePCdTVemXykADPtMW",
  "key23": "4N3BsJ6DGBhvZq7xkZLRihE7AbvWbH4yE7jLPTEsf3mERA2gEox8rNb3m5A9cDqL7h8GmztPSgxwC4QrqHvsdciu",
  "key24": "3LZQHZq8dHRhhDY6yJup6XTBjbCH32QNVS4A9dmq4CGbLf1wGaQfkxyrbTBuZofaNPavpqj79RAEyqVTnH1zHkA8",
  "key25": "4gBh7q3R3sps8jjaLm6epmxVno6moNFL2MccG8zoTQc7b6MLfGoRhpKtZAqrrzazkjfBoMWwLsfbzc5LCT2Q1KqV",
  "key26": "2A4Pc4yhbJiEBeKJXv25Z6CVmweSnCeS4bdcPCjCqpjKij9uWPnoMz7DBgTZVFSFR2uan6kKq2cCMdX9WjBgPUwt",
  "key27": "4fbdV3trVtMxAbkTpK9tLzvVmqfneaSAAz6GnZHw5y7HBuctiJ3xGybXHoTLU33kfcje5qeei1fDUqMVTU1dusjk",
  "key28": "4DaYBUxWW7vvWFPqnPd1SYJw9H2bpXou7ZYGyowBiBCgiEEpwpjQryccXLxjjVubUGsy6XYsAgNUJDoFbFiBtVTB",
  "key29": "522SSFkVKoWqvrBJzPsKxPNzy1sw8bVHdQ1tNAjtobNhRdsWPrWY7DmJijV7q5bbpg8veDDy6SJFpojQgbtnNxty",
  "key30": "4eV5JFh9sEuZTFsExSA95uBKD5y42PHyQw5HgmeNXXamyzVVDYZLH4AURmVKGasxUjpd8G7SP9Gn4cM2Fw5Q4Xdb",
  "key31": "4tLDFt5P5RpFnBncz5MVcqr4D7BbHAp57EZ9jcskBcUpnxoKjWnaamnDc7CfJjAoijWKQHXGezBL22VzJJxo4kHy",
  "key32": "5cBMCxsmJ6ZP4hTtzdGBYzYVyPL4okbthp5ATDM1sBZAKWGQxS4FjjsB9w6uZa4YyLojSotJ5LrrxqAd1vp2TFrQ",
  "key33": "3RT9Ww9EJN6NZS7BuFi61Gomn9GRHjgpo6VbvNBxTJZAseqNwWcFYsUkhgdTFrXRUhuNq69eea7G3BXLznDuypuH",
  "key34": "fN9M22pzeb8M3kUGR7ANr7meGGDACFMPWBAaf7xAvgPn84fZAz2vxhomTCShV6DJZjqAtXWqR38BMrK1ePLbqgc",
  "key35": "r3xqAJj9idFB41H8mE7KvejBfgJ4Q9AgwDcQCCN6v6bVbn3fHsdX7GXJMpXcuzivyn3hNHTvhBexbHH7drzfWkv",
  "key36": "64a7SFZR2rfPre9Fh58o34w2uPT6WJW16jAny1Nprx2S7XGDmnQaKtktHagYuoDqKRYygLkCAu9NpF29xZirEQAS",
  "key37": "5g4B6yEBTDMrKHX186dErSZDrKMDQ5iryFbDbB9YJDHsn5r4mXb9XT1ngJZ2NSg1cQbiFBKxECd6fYhcQturQgF8",
  "key38": "5zLtsaws5mnKtUtmJLeNaXNuZ6RKFhhkuc77qvRz7eP1JezwvQsHaEencVBGXwcQ1F1CgV9PVWxmiKVvYaQnG6wu",
  "key39": "2YruGmtKJZ1E5vfkJpfgn7uSucZacdv5qneGCnBSGoEeJRDRHsZFsQcccwoKHjScHUq8TKJTRDEHnu2GeapTgPMK",
  "key40": "28tLmH2qCJ5zhrqPeZSu7NX1Yc1oXiLbpvkAKh6VqEQ5Cdow3ExsPYgBTvKsnev8PPdhG7sBL1fivBmSoEG2oxRh",
  "key41": "4Qdb8h65mtF9TBLCfmBd5Bs5TuAQMvNZfos8RLXQyrC6YCFSHCBzTz5KJoHFd3AfG4Ec31ea9DJDmEHQWHGitQsL",
  "key42": "3RjvXkCJJnTBGmUubxgyE9c42rM6FKu7EnqxZshxATjBrUDxFvvVzopqaFVZF3soZQA12hf8oUCB4NbxxWAXQGJq",
  "key43": "5er2GXYGmiw7Xk3uMzjgNH7C5KQf7f7UKmameahjzbN3okkgs4VEyLu1fMtxrqedMVxCBaHhcrxC3KHBVyVMLqaL",
  "key44": "6woLzpTgpAXwmLUd4LbRkZ8fd8LT3btuMtWqDQqXjLKg6WqLkp4aavA17w8QzuBrb3au9jwxHSG7uStnhrSXw6j",
  "key45": "2wdbKPxumjtnLxW7pTPRqpjvLjBcwTxCj2aTZ9B1Whoc33sSGun3DSN5N7CcmtiPwjMy1nvY6sQBU93zB4MRYgev"
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
