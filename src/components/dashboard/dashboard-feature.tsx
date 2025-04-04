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
    "wWTZ4Fpr4HhVqpcWch1texiYYgQBm7p41KqJAPAaVhDSMraHbJW1S4cz3FRRJSMfc6hk2f6wXhhDHcznaRdb24u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8j5QmPLeo4kTVK6fmyURHoaTSb8abgLhMADwhjyjp1EidQu4bN3BX21hYaASWZYugSd616AWLyMdtA8sSKgaTtq",
  "key1": "4FNxiXiwzVVuhQaGDFQx4GamTABskFvB43rdCga4qugJA4pt2n6t5D93zKiMAGm7iE4kPR5JhqTZBSpnALgAQ5h9",
  "key2": "3U1AaQ3XJr99TikYgEr1JXKKMqKaBKsUtJaKcXoUr87EwLNWSuxUzNeCbEHu3EmgyQLGZ6hyLA3CPMPAUGLawRTX",
  "key3": "4u6NK96d85BXsxdAQa8mdi4UV3rkXGMmkKF4bGQ3ZfzkTNXTKCwNm6AUByJddm2wTGfiYiUz4QxSrscJnQ1t9H71",
  "key4": "2qyVJUDfpGmWisFhPkWDvPFHmXL1yiTNdim6z7LrRZiBY6eoFt3iwoY5i1XwVax6bTaBArfw47QhKhgx5NrjmDHq",
  "key5": "61uimfo24dLuBhMXCB4Q7hBpSwvuRBBgzD6rgq6nAMrg65p9H2taEXpppq3ERDG1AJdWEwyqCz1sSBjzLSvzogCM",
  "key6": "4QfMgP2CtYSM8wLnGB8BjBQrf83m4aZQqxziPGXtB6fjN7iR7PxNHgivspUooZdDAEjEMB1Q9rvdyYFh8w7D7oTu",
  "key7": "3xGXoJmsauxadXH7TzNDPNQ4Vp3X4Q1dxsDYqPBzstAEbbFXPLuHdX2M979wLgu6WNFMwC9N6Aa4X1ZQzZtSPux9",
  "key8": "4XSn83bzx55hepTRxzno6wxikMfWWeRoRNkE9kxHQpn7WW2X3WQKi2AGCyHmKXxd6gmdDh7qpiY5b1iWJAoJL2F",
  "key9": "5BkDUoDbLEvXrKnxUSertWfTNTjHroj93gQbYxjCx4Rbkcvhjgghz7MQSWQ8dVXTgeRrZ6V3asiUGumuSPzb6hWR",
  "key10": "67ikxTQiKwW7VrxzaMnBox2aAViV5uXZtpsbBjz4xYfhK7iyioiAPSK4QJTKtkVuKxV3xzz2Lm1i2pXpJRLysMax",
  "key11": "5uF9CvYS491KJawKNwwzfQdXytW4DqJDvs9jbK2eS1oxNbcYcGrd71whxBARb1h4erbSfXQpQg1ie67SV9rrNMMT",
  "key12": "qYWuKF5bkaYGviUk6HK6eBExxKbkrCLHCRSbC4H3XaJbC1uWTUgNy2rSeCCGvfrEWumx2bu36s9hghMQ1ttuHXu",
  "key13": "5vX9PrVkkC6LH45rL9p3Tk8zxrxMFPDpT73YSuAaUQr1x91XHXACCZHt1m8qNyNp49DfFPkPvH5kCPtoTFEq4SWT",
  "key14": "5ZLxw3McXyfgji33yRdqJtRa44DYkWrVHAL8ZNafRjYequFmhswWnNaUzyJqCE9wyUB41VXsf8grx54pjxBB3WEA",
  "key15": "5sjDZfjG2AaEACgiDo2Zyir2kiL8WwrZfNouLjkgqZkcq3RPqWEL97uwSTJXeipRmNM51D7VaakDgwoYkQdPNhaZ",
  "key16": "64yqA1cd7yhVta6fqUEtPuZyn71kS74gKjs58MsMVKPMYjSrBW2F6zYa2WnGZKq7jSkfgrADwX2P6c8spUssXArN",
  "key17": "4jGEn5qSwUwZTcahkBM9uxuqCd8LkA9Te7morGHNAKLR8dr7YkjiYZLXh7K7fxFfhVqYC9wCLUq22JfeH8pvibmy",
  "key18": "iN8b9Ua73arRt8WcVQ87vtLsEvjz2e436rBdBYLQovZH8BSEzogr4HAnGsjPdVEwCmPozLdFQ5VzV5iWPW4fkqF",
  "key19": "33FFJ4XX6jLNbUjMVCRVim5cq71q4rEWKdSFDG5xwcuKbKEGoYzwNMkJJyrmBAxxY4kfhNJmHsnSqhvTFc89wgHb",
  "key20": "3wm21fGZN1DrrkDofZ9e9vr1534yTFKcMVzMiSpwr3Y2J41DDFyWE3Vc4bByBvbQg7rzoG1DzivBzXkQCyJKKpsB",
  "key21": "erbnRHJhk8BjfJLkP4E9kLerBoKFtX8HwouEvrB95aVhEUnZ1VDB1jgZWH26pHYnPJVzndJ3H4DRkJbPqsxJoYq",
  "key22": "48dzbTQg2HmPMKPvQKnAPqJQWJqMLcpMvmQGEQ8YnffQHMzHJfQU1SFMnkEJeD1zExLEPaZtUzRZoUm9m7NxaLBU",
  "key23": "2QFMawQoci8khCt3tYKi4VZWJ4uz7Cm5vg5UXTXB7NyBbSjEeBfqxvszT2qEQx49nAunsitgRsxmc8BuqgTamNR8",
  "key24": "uBvzg69bP7sDkgvy4hNx6kf1LPfGpK899e6mXVNDxuXhABCw9LAiyE86j7e5koTLHh4Z5WWoVRvTvFxYH6j19fn",
  "key25": "DJxYDSBk5v1Lrj3XAniTpLcVnUQLaUUPiktq5qm5u9mWhv3SyQJ7aTNo9rzZQJJtgAoFLU9ih7tVqoQvTE3LqJP",
  "key26": "4rssHuZiihRiRQqbKtteSHQwRaTsTccHAiuuuJQZ7hEPQcZ4WVYhjeNo6Kajty67rGmCxKbD34YAXdoUAwBBn21M",
  "key27": "3qiG6k3xiZo66LsTz7fN9vgS7E8onLNeR4NibRh4X45ByWnUijqAjgtJEXvzFt4pHeVbG5uknoLaaaLv9Rezi5oG",
  "key28": "2RUE4NVAyJ5YNxsab2wTU1QwxTBmnGCXLyvkGW9YJxdRtAKFNaWTGkTvCa3NWAjmMQCxTqvj5e8fAvG4D3PASoYz",
  "key29": "8am68SHM4c5EgEu3zyvC6CLhZn2Ewu1TtEG8Yh1VQ8ivdQGqRxFKd8QA1FtPJeXYzfkUfH37TQNUSSSHQjzRowY",
  "key30": "55CCC1JRoLESMq8nca8JAnPu2TiYGsebHUPu77BmLhHQ8YEqxnuDmbZSTZKqV54CztMGntTypD9uCzfRsXkd7bGb",
  "key31": "n6SfYS2ePEsot7krJ4JUN7QJMwaEx6jJwNTQ7dUKJk95PhHL4LizVT3nh1TYUzjRHFmpr6EA5pTxTw5F6paMn37",
  "key32": "QtcMoe9RLE9omrZSyr8Yws2m9UT1QTUHqcC6e5H7XJrwCMhEXP3wY7tGcVG92V4MkW4wTFfrabReVHwjSykT5ky",
  "key33": "2N1pYHmYbL1JbPi7yqCG2MdKnZn9XvUU353E1WepvknUwxxyzURA6NET6s3b4ToBUPpcsBrNrT27RSQHG8NnSjyf",
  "key34": "5TB3BrucjFvk82uNEU5M9D4UQRpVhFAgD1KtSWGwnhXmCT5qGrhJYB8ckX75b96kYw2C49YEcJYoBmwBjd2z3rsS",
  "key35": "2DAvNWYuTQJKJS82udoQfYntdCmjAhxMHFdijwSgKaHXZ2BonELC6nJqWc2GaDZ9W51BxJvUfCTCFRG8oMer5aE7",
  "key36": "4dtihZnww9z1AMYjYcJnkvRM1CJN5Hxd3zZWUg3R5aWRoLuC1kqZwGPVd5Dw7VZL8hr7Y4DiDq2xDM47bHh9M9fy",
  "key37": "5pP1xNr3rkdGzcYkAcGp6DNhFa3Cfp9BWujtFpVU9yL1CTYmvdnw9akcG5hxBjkqj4832jQpe33xRhNzXLm4rcS",
  "key38": "2Mg1K9jiJ4Gy9hsPR45HtR3CM8mmQqwxH8gifumj5ZMfCzFZDQdoNY4UELxEKDLJbx6n3RoxYPcx8187qorhUh12",
  "key39": "yvMZYL2XAcBWejMN9k3LpmrdM7wDmER3Aw9jgFAK3aYq2f5eeEjB5BSvdx4EF5wXAL5pF1u74yBSnXmHgMHbv6q",
  "key40": "5WWzmC2cwZCjAWBoApc8HSRBY1WjQpb8XrEc7oeeqD5HWYqC6PAsTbLsJcaxR7eJbFpgbYBYe1NRs7AEZGp7cE3Q",
  "key41": "526zW6zPJzJjU9sWKqtanzBCgT3q5hncR5Zeuxja11TeoBmPKrBtTw4ixwWvk3koU2xb8SC7Tg8CS9e4HxhJY2jM",
  "key42": "5XgoN3psXBAhSm5zTbQBDU71VymmUeELTyGtriCjTLTg5cTFUkTJmhJwXNJrGa3DDK5K4QkLeuSuHcBtTKkfLmV4",
  "key43": "4Hpu38E54Vdqb8quLpPTcEmBZoQfLn4FKvXcf8PdKbHf8cYrwnabfQEPDVcKnoNPRijcmNhMMh2hw7zX5Lzn8yZU",
  "key44": "jKGu5g1NHNhkvF5ywQLEC4cjaMNAMX1nb1JwPph8VfPHMavNFSvfDgnyHomRxLVtvn4ZmtfdShgdBKZpfgcEEhE",
  "key45": "2gLzeRFDH3WPyhG11GaeJm9pYntKoLCR7MGjgzKTNucNC4xHYFsgk3TBE6pTeNwgFmXWcfMAZKxNr52KbYVNHmg"
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
