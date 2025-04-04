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
    "3ibHWaxuQtmU4fa1emaEpNyVhQF8f9s21ByWm4apccqVYCjyoyaMX6MLLP6LZsiZLdjLGHJxMkyaQCeaB21RxMAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4onuYBjn1UdJT36VFwm9oNtfjATZFPMXcPQWbvuppPB4vJA7tCNtvnJjrkghRAfSAHDVGMtzsnFsdWKVSpvg76PL",
  "key1": "xzBT6kei2An9LiY7DLcxVXCfxw5oPdadqHFxVqYmq5sEtTv2LStNU5pPC5yANL4R9HAgqsD8zNDgMv8swBnHZgV",
  "key2": "qA3UrMkm2wtvGec3JBJrfSxmXdUVYUgaf5Kp6JwpqBiLfNoBzQarMhrNZ3bMAtyozBcABHKD2ZvDs8bH9v93QJU",
  "key3": "FcybEYmRiT8bVeRzAQK667RMGrRYCNoXiwVpog4ddvAGrExuRJ2WQ882GmUZFKyDjN2CTz8BrAhFxWEEPZUUpDz",
  "key4": "2FDXGDiDYPkpYktFnMwjujyCXrW2n5YgAK9feqttCgSYo2ZRi3cKfjQ71GPUSNiARbRHWwSLy7eg1iqy3x5xXYBh",
  "key5": "5CwdWQs1XpxiWxPiWugzVH6h1wnKngQeF8aLDFafWmKpv7EmmAYaUT51mFc5w8KGyPq2GaTMYUQ8SJjLm3K2k9yA",
  "key6": "44z7Gs8rSJVYsfqEn48QC91uC8FyPzHSBMGWwnbUri43dHRKLzDP9NXLsUde3ggM1FwfjewdqfsUCFKqAbPo6Kp4",
  "key7": "5MAtW2oRVp4eUL1tEyHtC3nFBtcXwD2hBrzihuZ1vKiTGWAwKYKYEu7xnTAjz1gFr9GES7knckfrSJev8cQh4Npe",
  "key8": "1fzCzjYYJ2t4g9LfyiFQr3Nm7k1dnhUPkeNFgtkNaEfpCVFxSCwYybWBgUATXjf5D5orN9prwPxTcctZ3uV4nD5",
  "key9": "4j7BBWm3NNRsc3vHxszKwTomU5j8bVYbVVNQ4FQwWYyQZnuNvHCCZrT7munvhmyBEnrtDRtDVQnRVLo4rSywtTSM",
  "key10": "44G4yHVqzqwJ3cSq4GGhUmpHra2tqQX6wuaLxbJtovHZPy27MembsAaNjMjH84XYSK2o7Y7yvSDDJjHSBtYu3GCX",
  "key11": "26vha7wyG24rFh9xgyrhMLonMdfCLvuQUfvc2zsRRx6ugcngFqKksiHqokWT4a9Ms52L3zD7QSCA6EfRFCuXVaMw",
  "key12": "3pPF7fM5R2CKu59C8WiPDhcXVGZ9dQwE1WjmLNe8tsZcXguxYGka9XYENiBKmQo2XtjycALFxDfh5gSASUBHsJQH",
  "key13": "2akdaLJMz7N8o6WyGFKgardxw7V3Y1aCjVAy7Z7KcvDDHZ5VbPwAoQXHp1NX1YR4y22uGDWHor7fCw5PDapFFsjy",
  "key14": "4fktJFiC6VQm2CSNguFJ5erBWYX2HMsKKSwMxLiLpHsH8Zd8Ts6JuSsqNLbyfBo4FTsXBzCQrXWQaCu83nAnwcSF",
  "key15": "4EFsBnREPjsFyoCtzXAFBTj2QJVAN6pVNqxiH8YwvruZdQwrMMa8PHo8M7kTnK7XcgdMVaGa983nrdFJyZtTVaPw",
  "key16": "4AWpAUMbiXLwVxgMF8cKVyosrx1K8BEGMNBAhBakpHaXMy1oufGRhdAoMhZCvhxK81DmdNvdmGf8J4iLNiAx7WLh",
  "key17": "28iDG9sPeCxAJPy3sULjhZ2r7LSmaFrd8316fkKPSjdtUC7hmHrG3BPtSxAnV7jUf8HMuAgJDnxVL7JaGrTAfLyT",
  "key18": "xZtinfc7kxR6zXomoULz4Xvu68NH9W9fiPHJWZ2jGhurmogMy8R45fiemFbe4hCoAFwij6WtSGf7mXA3NC5n832",
  "key19": "3AndtrPh818C4kM5waApczbAZuFJJTtmzhXuBoKUNcvQrWgHGvpnVjgbzJZV7pdp9JRr6YTaoz4qd8Ai4WYze68T",
  "key20": "37BSkPzT6N3kVWaFruteJJQ9Zp12Gka7PAc8Jcrkizjn5a7H7vjKY9SoNr65otbySPVoRXdva2caUymkMmRGKN3e",
  "key21": "2KriKLjh1Nx67UWqZCGyUYshL2jghW9ohJrWh5z9EReBUgXXHshnjc2t8XhEkfJ18vBJGNhsGQa6dcSV3UgPE3xT",
  "key22": "58uKhAFDRycRnK5MhWkKmGW6XTaSqEDGN5tz7hCwyBiPJ1VA5E1GsZUw1PYn17gvpSprZEgB2cJEiYxBcPYbPcsv",
  "key23": "nRw5i4rdR5YiUjJanxraCMwhXP6tB23tFYNNCbzkiVAgKztcnB89w3XrqvCstr2HtmVdyGj6r4kfAQhfLMbb2FN",
  "key24": "5tqGJJP3784C9HyX43to1JY4C7wuWEbvQEe5yunT641M9JnF5Q8ZwKSe2t7y8irT3tLNnkqGpcVZD63joMPHB9st",
  "key25": "4u1W2kGNrDFKx8UaUD3cw351ZYVhRgasMFQguGctqhK2YGDFu2yMfKJZAk74EJgSBd1vBAKGDtYKDWx7MFzca7Gt",
  "key26": "L2zEM5rQuVxMwbY5UjthwZnhgxnFEPjPTb2vJSXyXgf2dvumw7Ya6bcfvdjZamt5DZ22S6kbEs4HPqPHY8zmKoe",
  "key27": "2TnFtjxjuaKzUiGVchh5i2tthiDo5LkBa4RzeVkuTyLuJou758unbpBwTvP9EvyoGbhmDo4ieS6Zzi5b3tqwvaJz",
  "key28": "4ahRMS6xxHc9KWi2evWjRAVVSj5L6LU2sVw586LeSnQde5xdRLhnBTauwyxj9eMjDz89dJZTpfWfn5mWs5J1WAh8",
  "key29": "43kdxPgU5VAfpzdQSs1jjeebgPNNb9vQr7c47hzUeaDrmDfSuhYLFsN5Gih1Ci5PahLxuboZrtxsf56xF81wU9uH",
  "key30": "GrYB6RzsbRFPqXYY7TDYvUFCjGA8LpveSEXFaG4UNoG8Wdsjm2DnEbqX7ho6ycgadXEFoA5yKfDVmhX2exffiNF",
  "key31": "2wzt5x1NXepjTCNbeQHZAchx6dDsyy9dmUL7KMxcAk6XTL5mAs5xTZt51ywxLDwBZLZRPCeuEyfj85GSs3nxR2Mb",
  "key32": "4nUT9b4u69x7BLEqwjnzmugrdJG37rhXkmdcv7eVefJMPwuWt3AAPHsskdcD9gQR6wW9h3QLNAdQSHy1LF4KGxCc",
  "key33": "29bWLNRFrkgqZn1fSXRGv4voSQdwEmdxK5cCtnXpRrbs2Co64s5ChyVCJtG9A8JbNGVww1is37VSB8JTB1xcnRXg",
  "key34": "5MAfrbKVijkhNJ8raboZCn2zSYYTM1ACYBp1TMQTVuBa1Bc57pEPDpFL99ecgnf6x8NPpF4SAw68bZsjGSKGLfHL",
  "key35": "5LQWSRC7nqFQZgKMh4nJ51KdER41YSMtoWs9x87f83vV9uTsdhk6TXTcWmiQrhTRi2Nq3UKwRK2WVt8gqpAkadbe",
  "key36": "zHoTGGNL215fsKip5NQ4PGWbeZmtsjZGN3yZAmdcXTW8aotS8ERqazsnSgGiSMpUuAuBxyu7B4zJV1wKzWwYVQC",
  "key37": "4Wun2R8KdNyfjjkcV2rxuGbYutWrtUY9PdBmRjg8VH44jn8Cx1T3ANveC3xG9dXN8mW16yvbuJonv9JAW79zerw3",
  "key38": "3k1TComEp3WsViFzLGv5Q6da71b4bE39GDAdUd489NQzxBUFdUUQWvPZhvzCqcqmKNCZ5MTnTmxANGsMotQ7tUN9",
  "key39": "3AHKnhPTNJg6qikkHawc4rucXhGxvnxjPj3PcZVpZfsUtzywonZ6FHPeLdw8ZVnhj2zs66pocPVyRR8fpmKnz1e4",
  "key40": "2FW6NZEu13BxJJU5JsCVJAd5U6DK5DkZWL6vebegUkTiFvByyRo4zUWBXS3RvqhugrPeerR1idy9cakxiCyDi9VZ",
  "key41": "4vAizjiV4i3GvWQNchZcmHNAqKvtbee7xeLtrQn4ksCtU9PUvaok3KCXaEnAPMQs1adKdvbrjW19Nsv8XWpRoeHS",
  "key42": "34vu5vDRaeax5yJtdaG12yfL2eeACmef4mATCxATpDw1h7vs6WvYxhycMPzXcw6XA7TXLWfn8QT8EeEfeLFftBZk",
  "key43": "kHnDR429V2dtn1MC2CAUTicWMXNL1G7GgEGntBNu8FqcTpTeQXvMkMcdKdEcni14yzHaiGz3FLoDhwb3UaC8JWc",
  "key44": "432arGBQNHSdVXePZ1Caq1D3xoyTpnisdRgnzfYprXaqW99DHKAs2iRU15oXwzBhAcEFw9cGuAEaH6Zb7Rn45dwP",
  "key45": "62bjjFbtrJyQqVFsFmsrJfid46aZJStaHv46c951qmZE7AZ89QxQgJm79JJ7RYzKMZN6jtHEgP1kzQCCNhoPnATs",
  "key46": "3YWMFS9sTRk6F8WsyWLywGTmowVT2VPcu6wYbkrWTybTDXW1AZw3be7GtaaArqTBfmm9thkAkNTZZF59GmKQGR1o",
  "key47": "5XeuJijMjYcRWdXb9bzV43jrNKX3cdbBCLk8aJJ7Mef7VCVmC76N2GNGcWQkKEkaTUggYiAajH6gqvJLKc5Uusk8"
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
