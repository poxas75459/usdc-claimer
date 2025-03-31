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
    "w8EBGSmsn3WkKpviG1vufi3mEwRiFuYTFee72U4zhxCaU5Ct3gd6z9DTorCcrysWmexZcSk4wnRY9btN6mMBXjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WjMrxqkYs4qRpuNaRXXkShn5GSop21GiviQRZasb5KeVw999tRaq5F6jbwvkA8HWZiPJDTj4GCB11wTzxA92hd",
  "key1": "4qfLhVKyrNG8HtHaZdW4f7uoxVEiU69gJq921tXsVKFcry74ipNzrsqAsJBAijzyUbXt7n9h28JAoUWoatHfmgC4",
  "key2": "GHvYxNMQhwNom4kWxsku7hxLgqAdiWanG7dqtomHUFuj5s9Weebu5fp5yso6bqZ7jgUSqRocw2onBkeSYBtCRGV",
  "key3": "4RkF2LUFJZdYbc2p8po65zHMuB4wcPw2vVdnKrrb4jAvfEgvLz81jF8nQEQ6yf7usMTBfPhfX72TpPLPGCaS4JUQ",
  "key4": "62vg7pFy3AWMw7VxLrfQBpTruvEj6FTUjBXnyoLX1FYp5AkzJHdPtJh25uzpjr2JBMYajzGTAoo3HUxKW2YEHxnv",
  "key5": "3KT4LftRJL7h8d478QJDZZGaEM8LPic3GcYLP88n119nva9KeQh6xFs3qM4ALTfH2sNvpVZecJ4rEmtRpHwQaVLS",
  "key6": "4Kq7vPqCVqf71nNsDkJ98Csu5g6ARvY2zrVLiA3XZjNnWJZ1oqrv2Mzt6ZdFGWnHefCLT3hxKyhCiagzv2CbJTpS",
  "key7": "3wobcWq45LL6ZWaZbDrhZdxm1pmeEE9YkskBPdGev4hxsdr4snobuMVK3k3QZbkSV6MkvTwsNkVqEM3nB1V5rr7C",
  "key8": "2pLZZt5tBTXzzey4tWn6HAc35Wtogz245DgCSNrM5t4hSSLKTiErV5sQnniYeECiGbkyDrJs22hqWdrCrdkM4fCg",
  "key9": "QJEMsrnJj7at34quk56pUR6rF4kxKnZ6ADDhbWGEH5nNNK53Ju6qCefCVNqHQYXiur9krSvqn5Dxw8B3KG5igas",
  "key10": "4vr9XQMXMnYXxgwSSudesS1XgV9EeoMevMtGFmgkXTuZ7hjKquV7nDK2CAhoacJePgJ7xhuuYwTYyLfk5WMmKvRX",
  "key11": "3de3XexL2w7bNusi1A8ApaQATNre1PCjZhK1FMnkyvEaMuNbc92k4KmoB3E67PEbqejN8gtyz1nL5vU9hcxEqiSD",
  "key12": "52DeqFk5gew9Si4Fe9PjLUQnF58zp99hf9CSW7HrVjdJKu8RbJ26CYMzgbAcd1Lrg5g3nQydoX29aYvhoWQMsnmj",
  "key13": "4RVnM5L8UmoeNrARhqKGEEy5gRYfyi6EgSdwU4yEbfEKYhGHkxKDCEQG8sixMYeyCimPbo34Vvb8NAg3uSvTqPuJ",
  "key14": "3w51KyJTwiHN9JiuSSFLgYaynwXsDFYAnKcKNUg1THVyPV5tPigQHWgBjR456LKVohjsyqDTuaUxYjYVRfgX55w5",
  "key15": "QACPsmWoAQCR9eGTLFKGetgfcyZyzaubAar9id6nAhZU8MMkeULLNK4xhveXNFEuWSEexGdefCdBVxxNnQuxrVQ",
  "key16": "3JAzfTswoXrbee5jY7WsJJjEr9eZdkA99uVSdU34y2dAzmfDu4RWzQ9Jt9aVNauBTDJszYitQ4CrayFqzPro74rf",
  "key17": "hLAjM9jYmvVMsgrSA56jJHQYF7oBXgqFNQcHAEXgfNQNWKuiwLt2PYZAjar7CttmjCzmPH1WvUfzd4pDQY3NWoc",
  "key18": "KAp3jFVVWRgpDbkssWLDjR69zTNXt2hJJoxYhNChmdabsr9AmtFfrudTS13uvkA5bqa93DMLuWu5L9EYzu5dsBj",
  "key19": "52Xccf2ENrniWbNwhCsyD8jb4drpCrphRCZidbxfehSSUkm8o9sJeAZKeE8jzGTnzvvkd8hqRbZJHMEshLFPdsro",
  "key20": "5hwjfN29eJLvmna931AmVUkkViRb5Uwo7QB9ZFdnBbYGMWemcGNHu9JuyVngSdddC39SB7EfCaEbv7C3dzKtcxzZ",
  "key21": "5FtvfhRGZUzFbBRsReafnFkv3pKJShkJASqPjhMNU64uvS5Zb3cvXUiWbCJKG2rvUJDk3gNme9NQQxDYCCxwVyaz",
  "key22": "hTCDjpm9eYTn14ho9sfEmP8pFjfKJpsiuGup4T6DMvoJ2sHR4viB2UKZncqzCx2bbuSMAiMp413Hefcc4X61NNk",
  "key23": "juDt4gkGzT8YQh7nfmtVFwBDVEeR7YwYnzf6SmEHcFS1cowzkHjeGBrckY4iqo1xiL1o7fHiaa9Pcrzqs3UMqAc",
  "key24": "3garcNr68ULrx4rfHtMfaf8XabVxbz65j2Tp26KDKr1mseCqbG645n5B9PtmN3obFZAYNb3p6xN7peTTmKADMsoD",
  "key25": "45F99k2bKoHk9yvh4bqVLfo5Hsnw2hLN9W7Rh4QM6y7Ds41Qam8bAcENJF33uXqVQ4ADd9j5grN4FRXMyKpiZwsL",
  "key26": "4Akcm4sjrs8btEqwPQKzaTrcXNuy1JPrageoXxEVRXrhETU9oPc8u7jqhjKtkiksToU3SAtQScV9L1ASfUqfC8Zd",
  "key27": "RM472koMwtmgL5wVB1ZynSnSbUJtpNCgBwPTw9SYkvYeVZnGyxpyS1k2uTYs5axBb8RztPKki7BSXqxxxhzrXvz",
  "key28": "21qW9Ve6ZETtupjUkjy2uvZ4WPsDp38KsdkYJRHyCs48pGGpTrtVgZXxRC2YiF6LxjNPocYwyf5zLJeoDPhLQsE4",
  "key29": "3zKA382sPLxpdzKSGAa1Mj3AHBnd8KsBWbEJB9wdxvUsZDj2wAh8rRtob8b51DbTP3jYp21UyBmMsVrqKHRTVSNs",
  "key30": "sVmDCt95YMZ2kKViXjtaBwPYpddL1q8JaFUpL7JEE49vAWsd3fgujAPA4BRYjgib52RRMbnQufWXjKxUxV3DMZK",
  "key31": "3MJK77L86DwwZjGg8rYTvSerRe6Vb7D2MSu4p19YmvaEG25rp75UcU5jLJ35bJ256aGWqnNS2FddUmE8snMnDjcK",
  "key32": "3xw72yumDk6jEFJmy3hn3kRrvJ9RxFcTz62PrSRWX1EnTVaVBg2DNKzvLADdHxmGKRK96diND5hgBNiwhFePxKZz",
  "key33": "2ZvECkpxm81dHUfpRsRh6o2pFEtwqXUYbnHGM1FuLU4HFRBSEKXVbaBMw1PCt6XunVNK7wmcVxT1vhvqePWzyPJ1",
  "key34": "3YjmtPh6hgjdZHA6xyTudAG3weCPy4mTdJVWUrRbWayQzdBTSKwiCnDWXzeM9zrhSKL75uodsiymSd2tQmwQUHc1",
  "key35": "4UkDDYF5haTYMQTpPs35Kx1YX6J6nmjjB4wwSuRmwd25cnkka3aS5iBuzcBRN6Bm4NjAeDEbFUPViKrqamoex5Dj",
  "key36": "3KccTTdKQ5Xf9WjRahgJPqAwmiyLiQVpv9nfpSw9wfxLFHqnFhmqKH4x7CGVMT4iWjj8QSx4zqLtpovVd4VnV16w",
  "key37": "2zd3eJ6qYQ9qGWLLeNDSMAcHB9fj9HG6kuabWpa4ad84KccWbnvu8XHRRBFr4fsC2brAmEQto1bbUJqJqwzL9Jex",
  "key38": "57Vt3u2K8LjYmBkoktEKSVGWRBzoaL35mfmeFCURcL6tZoMXACtzDCXLUoVtpDYXvjNaGHsCoN7TBSx8iPDS21Hq",
  "key39": "4Xt86AGF7JmNQiWq1wMa6mmwZ1kLNamcVgiUccs9i7Q43S7NATVAECj4rGaffMdKRFKPSartMFgqLL6GJmbo3Uxx",
  "key40": "3cKL92u5VL6FFDPYCyEsjzTvTJ3wf5u3f5gnN2yCJWDpV9seydmSVWco8fKunzxPovPvJ5B8sBtKf1QC8DuTHXwk",
  "key41": "4T5a7mrd6w8ikNx1dESQjRuGfGP9xnNbbAXgooENyXM183b59M3DwKBfUPgcW9ut4nhsboYH8JYgYwFR1YMFKHi2",
  "key42": "2eHn1exrttffghHuWBN7mPyWewTu3GuV8DCJPu2ZdZAMZG77rZuv3TLHf7f2bPYKHjzTVmsSHTnxSL3jKA1UrCKU",
  "key43": "5AUngxy5f5yxnKF1VLMFrXujcsMWCyGzSEgkSubmGUPewNhWtSXqPci1mqaVzGnV5iS8rwJcKqDQicCQhCvnyuCG",
  "key44": "2bPgyuVZypAGfJcu8GsLa9GUdFpTaTjUgWUZBxjwTUH526BY9hJbFPonfsaQWr9qPZZgEqERRum8hhM9QZXWr6w6",
  "key45": "5kLfBGaM7f2wdFP52SyAyDRi5v5hJr9w3i4QMebLLEfK9zvdn6Co8i189N5FAXCRJz686Ac68amiZV3sYDazKKbX",
  "key46": "LA4C986ps5JsXjT8PcMbteQCkYFpg5185Y9kFVpjUur635zHkq88ie3ZF6VvPEtpfaExGHRDJSfMgQGxH9bHZse",
  "key47": "5uQN8erA8r3usLDbGsfFGNCeHFMnX9vSDpEXj4fxPWQ3MnNbcyZpGkSxnAicExEM18X3Wm5fXxRsCYbUS1rKEDaq",
  "key48": "2FYJGy15NhrTzYKCBrqVB2ytre9PJDAd5aXgqcAVPbLJNXFh2Kvp2wn5ts1y8QAaKK5QDaWvixjwk9mjoZVm3ZQU",
  "key49": "BJeaWagpZPzjRTDXxqkmpnz4gg2f9cCLAJcxzZc4fZkEaZFa8JM8pe9h5ksUQXEVQm5Pxi7jYEkB6hMaoffvSkU"
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
