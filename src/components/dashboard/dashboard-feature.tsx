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
    "55L3DZk8cthJ35Wq5iMTsMsMujsNLRoDNypBXA4dNztR8cV73u7zW5X64s3wN1b9HScaZUBLGR5sZekdy8ogyXMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Yh6fUoUi98JW2CrynJsPmYoFFpWNigAuhN2gjFNRerWg2avkpbwupW2GQPcY5FVRsMoGviRq3zXiJkKUzLXeFM",
  "key1": "5C2s1qsBATyHiqbYb93nrrNRGYHi24pKVk58q6GoH3zhT674t6Ymzzm3GqoNAi4VmRKefc6vbpoB7TKragUHjEbk",
  "key2": "k6g7E69FxVSJkdhjZ1TD8Arp3gPrSmHwNFUBVbFB81yK4h4DE2frLmQKgwtbWHiL26Mu3ApfqCMBLc9KAGgEB5m",
  "key3": "4LkBSrYBdPREpvKasxUm7kqs4RSCwT1mpFPbRSvqHrpZX6A3MNDvqXfHeFhTQUot8jhJNmV61Fafh9pwEk9NLTEN",
  "key4": "63TTUN2A7n93E63L5nWBeArYpkT9w1cTujf8VCS1AqHqTEkePTsha3D6aDfE1gagBC7ms44uDbQbrktaDvLGWyBn",
  "key5": "3dTyg25qnukwjHxbS5QFcXWuEoSv1THJrRMT9MbSqQcUWL2D61tYxumBjVknWEJ8PVmUzuHiDUJwHxmE36FtDfFy",
  "key6": "5E9uEh6vs6Lxqv87FS1ymo7GQLJTXjWhfjSxyRdExunFqfhkGXsDScmdZSrMg7na9MPaAv9G1L5ETaRk4nbxZhv6",
  "key7": "5c2W3vEEQQkHcgbMkg1zK4mYKxrFD3dh9ezv5kpLA6VEmLXQqdhRNMEJaiGYUmZXexFgsTSDytGSMtPQZNgy5vx",
  "key8": "4yCQmPAz7SkNGvZJ43Nb1Y76yK83VfMP1vaD3PgQSkt5MaBM8bJnoDWdvbD3PThWgu1ZxJgf8yNesRnH4MXVpEKX",
  "key9": "2Dwzyy2P3158mVd1pZnKRBWCRmCu3zPx2gVC6HkXxNpW3aBcpNR1YWtz8yXy3Bmd556HPFdEw8gDvFuuds2DQH7L",
  "key10": "3j2toErAmM4qP9Qw2faWDRmkg9rsx8FDswneo3EYn8aBfoJb8vTfENjp9gbN7jTyFSxqFTXrxpJpG3fkmF4Rn6nY",
  "key11": "eYAYwTwppGULwCci5Cjg96vAXirjw6jzTRjVA5DXyq3RXMp9LtkdMW6Ym3faUunKzUWc38yMdbZ23DzBBHttRDC",
  "key12": "2Lysf9k7HC9j2mEjZsAccwTVSaDHhGr2f8FsHBVvqGtjfQQZ5bgHj9beA5ucJ2JnYAuDA52P87pW8UVGvNYFtLdG",
  "key13": "5aR2bR591iNq5sMgLw25ZyEqajFLDM52rLPvq17dd8ggwuKpha7gSzzGhaYdZPVWcJcBfdm4yDv8sv3ThWM8UUbT",
  "key14": "1qupb8Uwgnd7gBH5wCuu5ZSNYjVMAUdaQQWPZeSVk56FXhViKFR79gwCFNPy4aBh9tdGyVXfoRcGJdSZYUpyjrd",
  "key15": "66zT7EBSjvZC5fc1ppHCupV9dEKFWeYmX1f8efqft4Gonh6T2DsV1NKMBG6q8DRgRzvUs2YuTBytPny7QGVvvSCJ",
  "key16": "3PimhDdANpdyq2mUZeDrE6tAXce1TWZaKFMwkZfKhyfMRCvZ1BxeLYBJ1JQgmW2YjUq1TQ9XX2evRg84j8D5R9W6",
  "key17": "63fVUAnoGhY1CHVu6MEA9Wz1sASPWitqfqtuazgNSTyHvLdgRza9xtCUH3rbCDgwxjGosnen7ys9sBeXfXaFvree",
  "key18": "3HQRXKVt7Yx9RxRmwRTEngQFD4j7q2NUWD15PYaBdMbaMH7f5zeQezMQE7WL2Zrs7ngtMcpS76PqsgHc9UgUJQQA",
  "key19": "3aja95jt7CWQ4wVDmoYPkjJ2VM8FRyNHyrqAXHF8W6MjtpWfio7rK4TzYur3LvEjBzw7GuCfsG6fZdHKjwCnR15V",
  "key20": "25vSnq5gGqgKdtKZcMaPcSWPxsFb4cnR9aPDGEUrH6MwFh3NXx7sV3envGJFD1i9QGhhnUxbkEZgiK9NZRkwm3rB",
  "key21": "45VWvmRz3gf7xCRA3bxbq1DZgt2odth5yuYqNct8mHgwi7Da9641HwWbSNTBuCjsqrbdPjDN34soctP6x2LatTYS",
  "key22": "2LxbVZ34bfowFUmkzrxuyBNEpi8kb7qQkLwtiRAsm5Y4fFRTB9DdT7WFuVrA1Cogjd9wqsyhWnr2Md9QojTCv7Cr",
  "key23": "4WZMCPKmjwjTgp4C4jfUTmhGU5EWY8qUk9QzE4XYWMv8HPuUCbBnYGB3poCHpzzcvbyMn4nxcu5hHzXxwGVJV2ci",
  "key24": "5Czw4DWjBWDubfHEsRUA7b7H2E3yYZ9a1ZyuowsgCnhPgzzKFQTyThpTWibMn9RMNkxDQWxn1543PoZVDUWy93TB",
  "key25": "274cgMXucVUhvcAjXNQNEQH93E2ZhmuSGRyAZRv8hyVNsyfw12ySs9t8gbrKy8c3QNbJHwcxQy1KVrbVHRGsdqo6",
  "key26": "2b6GUiQfqaanofYW3ptNSngoZJECATMft6Ar59Dzm8kNMVDde4t22s3GBrBkUX36Q2xyLhGHF2PMQ6ViLdUj6WiB",
  "key27": "2hoxYrYbAKs2yC5jSyXEVK4Vce7vHwevKqMXs77NxCPmwipYoBjKjtmkV1c6XNN455XJMkku8Vc8jXjZtgAVRHAD",
  "key28": "4g8psRupEyoKJ2vcTPs4dxxemDxUMTA3U2htuCsxYs27QwnQYmUM4PXo6H5LJCWqfHXseQ36k2Tuz3YKKVRnRy5h",
  "key29": "4qDA5MxiWD4p87a1kG8myjoYq9Z8sKB3r3z7eAfe3rqddgkzo8a3uhRDwqw3HLSgTiWKcFqBvNwLpobfFTffuwY",
  "key30": "5B79ip5dNbfAcs3Gms2WNpnXDnQdsYupXmgdAWwA1STRbRqxamSz7VDagrXh1RGUQbphcgomDAPBb82dVCW1avRR",
  "key31": "3GLSJ3kHWhkxWe6rnjPLmmtN5j2yRNaqxqUkKTrZ5QgEVPDqSjU92JwcPRo1Z6TBZhyZRJma9cfAU5S1x5ECTDfS",
  "key32": "2WckqzUXSyBok5N9JnAX7nRvKwsZ6w4NaTSChWLJcXJjJXrPFk9p3kSoZTEXu1vKJtYLVYeJLJe98baCPWAM7Kfn",
  "key33": "3kT2ZFz8tVonqWDCm5ED6xfqYtMxVKKYY6dGowvjSt1MU8p3uAMqTpzDpuiLCMeCYYU5LPVK1v4HE9MQZJU7tz8w",
  "key34": "3BuLyuErtRHWgk6bHYYsUzgSGMmWRLmdvRvHTf6rBJHSBCEksvoYAoocLejBgNxEam1xDR7yBpGyDAZiBfNV2266",
  "key35": "SN5ckmPpBT5Y2aK3pvfTtTX6uaoH2nMsmxHA6NeyivyfPpZwWRDwR2WqPgcg9etqrh4HY1KLzidpkLE6zQ95mqv",
  "key36": "UKtHQ6dkip4XHPV6yib753Dv23biBb8Zq6MP3yf12EDSVmM5TCjUciRiAmidQBMMSehGG6H7i9iBudcWjRS9NuU",
  "key37": "jGxaPCFTxqZnRbEyAT3SEvDT9EeZJhhJRQeHTAVg7km4M58x67kVB5jSMvVJ32NNnA3MZGksjcS5kDFMj5gUaeB",
  "key38": "3WuRtxYRYEkp1kbQEuVqUwCzQMVbcwo4ep1sPayz8HbHFAYXM6YMSHtKPiiYH6BcYzMeoe88RDnnaPh2NfuetTVd",
  "key39": "6yjvgPYSS7rtT8JxYf4pgoFVZwffrsHTM2GLTz4vCysU4QEVTBm14yqUnFZanrPJTooanAeojKPfWEZMZPtae4Q",
  "key40": "5TnPE3cqxLwhECcuAYRsHSTKZffnPt3pp4rUg5FBKMLxutMVch1vH4XpmM5vhffcU5t469qrbHBZHhpm9EMQaKPB",
  "key41": "5fq2Rbhd6Upqk4dtDuCxQ6e366PAPLBXTbWPrkquKSKnGwXY3mzFDPcnEraLu74j95kczxSKKfCuL25QGJChhh4X",
  "key42": "253trSYnkoAsrn8ha1bidYKAqQmcLUeS64qVkVaDT4uaTZ83pbzDsSdBk1ETnYjEBuFNCM77wXu67CWCZ1wez7Wb",
  "key43": "92yrSxFL3MX3gVpmK4QzoCy95hJMGgu5rtrC6k7Aymem7oPXtnszigXSLoz1z9ipyA374oL2rqaUe2TqUXstKa3",
  "key44": "2Qnqn38AybndeYrWfn4QyaNRaQuLwn9sgkjbKGka9w2rAWXVZvnSJbFAThUUiN2VT7EPnspCc1XQWPUsNP6zDvES",
  "key45": "3mqbwchUG919PYY6KHvsHuJxR1JAAcJzKu4wj2D4Wt4ZPzk4BqxEPubd7GToMMsUXz6nRTCEjUoAD7Uss39CTza3",
  "key46": "MSnk1DzpuQBW4VdEAp37TuPsFGum4dbz3sACcCg7jjvwexBT3XwxS42ghPPwssfnDgpd84PzmCxEB5jS2xhm2Fr",
  "key47": "exABFHLVbboUkvvvEqwvhz4YkUK4z3qrzvsT1cRxRDSSBby4XFU8ybrBeRvcj5jksYuPucKXXFnkggrJ3pw7UhL",
  "key48": "2gtk3kroToDXLYECULX6LWvSPRZNTMtxxyd7DKRKs9XXmAGvAMK6ktTuoe1aFeommj1ybPx9dFPJQTt8EUQ3Kqgt",
  "key49": "5ENQUrwbLXopiNnqK3s8zioV5zCBcXgUo1AwiMNMhq9pvgpduZhFnsH6BfWpqdqBRkDa9LfWH7jne6SU5ZgP4VsN"
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
