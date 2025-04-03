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
    "ejptUXgJm7BticDJm7r5Tkn9B3MCiwx71AmPwH2LVBGzLJyATKva9ka6h5kTpasG7eLBdJKdWjLQ7sFxwzYuMyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cz7rdspCR5BCc1UJSuA6dSZNhyZXRYBCURLrMxjtX7thtc5t2otiVoW34ZwtNag2hovP5W1Umt81HP8msskqioQ",
  "key1": "3xbDZ8gStKR7ncCadeoSMErb8oNFRnFDtwRa1GBA8kYxby9rSc4VrYDDt3cNs43aF8EMia6nVVjTD9faXf5UG7uk",
  "key2": "5tLNZxhxqjN3Lz15zZriX2bvrbSMd1XsV4KC1Ege4aUgTb25itrpX5ToaXM9EjjT8L2NetHMV9LSr8oAuZUqvmcn",
  "key3": "2bB4xhXCf9fRMTf7Sp89vk9u19gZb5hd41484wVK31muuquiJU9XejmaH545a6AnLSicrJWJaf55C7kduu3c2Zmt",
  "key4": "2TD2KwE4M6yXzekLmnEmJaMxhh5ceQbbEqD6YD8PW67NH6wXkEQ8NcVgbc5hm3fhEWMH5nP1RwYJ5aSMV7QTTA8f",
  "key5": "2qshARKoWVQXmbuhsQtEZstkf5fKPST2B66BQxa9WK5HjTzwveM8Qcgide5q3FXdMJdAQ6NEdjgW34SX7en7iDV",
  "key6": "3mDrJFnHFVW1PYzFnoFBnyx4MNEngEv2Tbmrf67uFD4rfwurXKNYAgXzHoPq7dihnfPq3aYEDtmjtJ28AhSBtqyN",
  "key7": "24PTMjGvzbCb18W3Kt3p4EdHqwzJVKYKypZg3ojggZoqqitDymFPs5gmF4EmhavpbwyHXJ5HgWcTViE4dqQtV5bS",
  "key8": "2PmYuwc1YyAZpmwgsmyV8qJfHyugEfcohoqGufKo2xNoQL9n1kubfBd5xyHA7pZUZx5XrRkjQVP5XK3knRMAPg2K",
  "key9": "P9dBQ2rk7vyesoWaYkB3GZCZVej4n2YozC4QpDjCRCPeLQbwxf6NcYSgMTNkPUU4aBb9gLECPQcchPnLAWVBc6z",
  "key10": "5F5irx7X8DLyGT74Etiz9R9oHe1fhPEA65rdemvY2BuFTmzgbwdvZEum489qBvJ3f9PdidxYbDNULiRLsqfZVH6",
  "key11": "44iqpkgegNZbfm6UAzaZcwYwgjSAFb4DA5AUT7kRxFjA5b1UpfB2bwnvwMDHPbdCxVMatWqxTcvBEJhdv3nP2iWw",
  "key12": "2SEwiNz7wXaJsMCQDyKREmaFNANC7AfF1sNttMbW7fEGwAkos13b2rbobt1mpVf9fnJQKMbu3nnTqVwA8Jn58fhK",
  "key13": "urNhXbyuqm3tgZZmMxG2fHegwdkEDsX7vRsxpB4fMwJbRwN42M2w8gyRHroxDysiQKDxjrwq7MbkUC3BP7FL83J",
  "key14": "3WCuTxYRJ2pgKW77HjdFvRPi5ThGYsm6R2LYWiowJcyTkDKtkRirkGaV17y3A1UenoVgdxaokvAKb6RymxkxuG9J",
  "key15": "39E4GAAb4NdAAUFaAh1erwyPWaKxRiMfp78YDEM2i5s1qEEi3dHqWtNGB9ZGsMAKPeH5htq73PZnpK8F2sMkWLPY",
  "key16": "2wRhXXpp1DiF7SMbeNz8qYDtYFn11LkuonHJwgh17uswmmj1ypL4QKvBmKRFEboedmVn36kVXYRdtHVLYtPV7AkY",
  "key17": "5itf8KHkzBa5QaT1hajQyxDRzbehvhy2dyu2bS6hfqCTXYcoWVRn44MWQ1AALpHf7VZyWznxeKKPV3p3uBn5DYL8",
  "key18": "2CgRSKfiioAPobjS15YW9RbeKX8K793jRBdJqAzqcH9gmfyU67zt3BnpLFMQGmuLoZVWiZ72CQbyeHuP4dHc3Vti",
  "key19": "2xERB5TYxt2LVAhn3MgtM5b3FGcWFK25QPtahmnfUQpnryUJ6aPQFoHPb3N52PctTRaAexEgeY94FeSsnWHVPKQq",
  "key20": "3MPYZbVLWHHHMQj8eKQoE95VSQHjqSeLtzS5CPu7EvTreDWYCmLSSWYKLEKrvxg4VV8EfHLMWzjNK7rw4WytEp4P",
  "key21": "54uX6RPa3TdiJmrJ5taHG3AFeV67YHgF3des3GMCnyAJjUKLC7g9Gbwh6CVGWftnoLb5Kc9TPFEkTKFiG6BAQrA1",
  "key22": "bjih8gKFnkRtQSg5cYG8Mje8RKakb26apVy8gsAWvvxpkt51LfEDLpkFMV184mepqxRv2Y4Fex27frMMWD38Te5",
  "key23": "2xVKMnEMRkqg9qdqyyNoiGzUoAkcsYgZgEkHVCkuWWUeg4yfR2AfchVXugfPE3jiHb22CL44asfL75ySUM3UUooG",
  "key24": "3eB4gDSam5SDurdNMrJiATJ3RFvgYvFGYasmxnYx8dGh5sayp1aaLffQ7XTGJxMr1M4A2ShDsr7Pm2a9EAvou7ox",
  "key25": "22m97d9ajHpmFMAcNx2VbvkJvz6SsZrA3Hp6x5thGuEqt3LZSVPvzg7H4UKnc6F92XNCEwdBu7sc2SvRKU372TZV",
  "key26": "47m3WBXVomDoRmA3w3KgQQdii5UtWbHmsGnVktxQSqtvn42xqPrtC4E9tu1qoMcRAmXTpa8iVXd6JXysa1KJH5Hw",
  "key27": "3rw6zSudVCHUdnu1FJrU1f4Sed93o6RvEQeEX39AiBqs2h25faEk4Y7gEDcAywtoYNxi1HHMe3UfAPZ2EhcB5ZkU",
  "key28": "VAMUyeZbVEhgBF7XYUBdVhzLeQhzecrjAav3m28S8aou2kyJQ1Pn3o75s6PT68uMTUpF3HS8ibdLvGaEwcRyD6t",
  "key29": "2myCaYjGKVQbiHWYoGgZePUQsQXqymENhwYDLNWCgsn1zPwdRj5vUc2aXmuNdg35uRTPNC8U6DfnKxCTu2bzSPC9",
  "key30": "5DWw6Ue22hGbvbvSUkbxnL8gDgGiN2kXFQy2kxPusjcmCWHKKSaWSADxTeqGft9UFiKaxRqDfdmLrccUpWx3xyZF",
  "key31": "75Nb2BhiVE4Z7t3XunuaVFW4QE7rQ3n9MfyR4SRwfCcXztdAuQTSE1c7YLow1qgPcotG7HQvSd7uRY8AiCvu2Qv",
  "key32": "hwz9tq8V9TeiN5ZNaToAkW4E94hm1sSRhu8jXVJipUoFYByCbhNccxJqcQRc1Hz1PfXZESrU8MSUSf1d8vsx43d",
  "key33": "5K5jjYXu6fYUf6SScMruaJ9W1xhGb1FWtFHyNbjuJXvLJpbKbBZdbe3Ej3caStTwhxtcEnnaCU2iSitSBuYoT6qw",
  "key34": "2dPr3FDoNs1jHbqDXU6HcxZZ45BtwyN8a63CXj98mMHwS4seCjCUszSUUTR9HpzX927umERKCxCqArPVGtf5rFNA",
  "key35": "E6WXv3KABXtWLq3dyJZ8f1KXhz4ZWLRHQ4gf3GN6zomie3fwyqTAMLhtxxY4qcZnXSXsaKSYA82QtaR3n1Rjk9u",
  "key36": "wjiLgXL4bqX8zjShJadFjvbwMFNSPxAvRsrbag8TiX2VhWUyfRFpcW178QVz8BU2Ziue2eGefThYrqk5K7QFovq",
  "key37": "Eqd2eRdGxPxKoFt1CTTgprNWtt8u6huRzNSmMwVPJnPGPAHY5kRpspMUhqZfca78sLcMLf3JiXo9oVB649UceYy",
  "key38": "2XaxECCWYCa9g2eNfXvbFmPdnhHiNwcPfsfJGfpN5bBt73LKS67ak5oWEFdiLrBH3xvk2LKeqiTqpni4bdGRjkQs",
  "key39": "HAT2xFJ9rK8RKKpBHAzsKA8c1ELFLK4uonYuh5kTXhjnZevSvRjDv1rW52v2thtgzVfhYZESHABZ3nh6LF55f9c",
  "key40": "tBVD5a2Fx3kwS4gQwkYwYRgkNp1UL3fPrzEPDxCXpQpHPSEkkD9xXjSAUbny5yRznsRxARjaFYb3oCUszQ2cyVM",
  "key41": "2NvHvxiKDbmJcLc9E5kYyHBDz3uHdUHU3QwLjMPdy3uUm71WWxfsTrRrwm4GntGVx3VDj1Vtp91PjVJ9SqdYEd4S",
  "key42": "2hvEhJx5hMzCtxbfLW2cm3jSHbGCxXiFpyYsuwPhRRtzest2Y9S8mcYoU4BaTB862itJoFFDGjNuknF4CGJAkk9x",
  "key43": "22PLwheicSF6PzK6My6SGjrzFH8JYYGkGSLZJQU3ZYPUdfqRZ55DHkhP5L87a2QC3EYsTiHTLxpdnCyyjbzrvkfc",
  "key44": "4YzSBv9g1A9RYX8EEK5Pn6g4j8QGcor6CwzcovPgqsADnuNLnyb4NPpHgjCtWcHnSvVg2gdtLnd9oMuDt488UC7G"
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
