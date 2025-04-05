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
    "2UT8m6DCrqKFyXWFD4GhVNMVDaHdaGW787PVcsXAcgfCcrWvX6pzbhxsvRJXZFAcRbKmoitNCojny8FwJsSfSX6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45q2TrgcxmZCieEsVfTAAwpzRNCtzyKxvR6Q5Rp2MfEze2B6qvKFp552yPfd5qgEUcH67XEyyhpz5pwMmhjRS5DU",
  "key1": "5sNX91gSamxpmQmUHTXf3UuX9Zot6TkCibwo6Vo6jpF9oXxNuTQ4Y3DGYM16StDfkXbHj9HbudXJG17vehJ1JzmJ",
  "key2": "2w8GHEFAWkFNjeqF1Z6KgGxmeFRayE1rwcLRChA1jevpwpUHJ7Dje7WLdqamDxZpizDueq9A15JoS4dY6P3VNYNS",
  "key3": "3fzcs5xw2L15VHjJSn9UJQp5zKjxqB8upASyRqfPa6F8JmPxbRM5CBA41wTLAAaHSzS6PHbQM9V3PkjprEmJnPfu",
  "key4": "63hTGWcLEYcfwa919ogYkwKmFgLN58CdD12b8uwpCct9inoZYVFY8u1jQTN3DdTPvwK5FtCAKQeCjVabgyX3Qqws",
  "key5": "4YBsrCi2gEhRVPynXnNC9r6ScY2z6EYVCgSsMSfzD2HmVXmyrcZi2AGkaaojf7F7KEmp5343enwZy1UMzBD4uj4Y",
  "key6": "55YPWUdYmdDTKHtcjBmEQy1CPSN1qiaNRmwMu1waKLdY9h2By29Hw9ZFmKcMhhYGjz1FLNuoyQGaaFmvEhvnHJVn",
  "key7": "3wj6Srdapym68mnXNHf9iFJXRygwMQarmFMfnuDz4yWJhQCnnLXTqtPdDixA4azztfDw2yb9HByK7cCpcUAF3uE7",
  "key8": "KENrfaA56udqimGPWJV6gQw8QBRMJhbt5CBvwX9QUzdHFa82VqfMNpqtpdjBTeVDaGdHWrYdijG6QfRNxTHaRG8",
  "key9": "3svXxyLBwSMr7HSjK2HN5N5zNqM8wGh1p2Ax8YdsHTuPnPj4onVNXQSo4tChf9xnofqAw31V2DDyDpReWbqToRfm",
  "key10": "9AamKzvwbyovqkr9PvXfj25eW6sEd1PjyvBvKr9BSpZPnFZ813Jwa1gN4odGDsw3FwRKnsWSf1YrMqiELNLtErD",
  "key11": "2uNJsfuVNLKYzWPwP3E8p4wf2BH1Ge2ubzKD9MFNeMvqRxDcRgKGkjovHR1gc7Mu2pfhFEGYyK4hKx6kbegYDSF4",
  "key12": "3931AeT4hSF3K3yAe7evb57QziyGfrxquXC4Nbv6f3dvXUMo89PsKFZbCbtxDSHcZYzRPw1pcqhJwkvpx3bqJ3KG",
  "key13": "7wwpgx9QmXXxbRBVaLBe1TGMFvm7E43t5YGmkbCd2WKBeFz6MSnbcAAUuLHpwGzo9Qr2nUX1XkgRtBiEnX1Fzhh",
  "key14": "37LYZJ4fK8qFLkF26ZZxLQ3pp9GDrbSZXV71USsBeKaBgst2NCfRmDL8ZjhPttmgoY9z7cvqWywVFbKude7zfGsw",
  "key15": "4P85i83BSoYGAV6ZrKEh5xNr269LteWSrEbm85MgFWVjA1T18jevZ6jw2LdxK4NFMcgCTQdQwH1Rzp56NMVukhkX",
  "key16": "4nHJW8ZPwpqG5LkcTQGSLwCmqoX8DV2vYLwyCdbeWEokuxQ5NarC7hBT55c4jAvdypQXDP459xM2aV7QDMUycXtk",
  "key17": "BFCqtmZ5WJNM5vNMs48b3mKE9vvbqiCvng2BxMCDoQMMjXpDBZSnUGv1uduJoc2QHiAa6qbvab8rR4adHgoAiHd",
  "key18": "Vo9mxFfwQ1hCaTQmyXxobgX3FQL5VRLgQj4AmZG59ERineSP7RA7khHCugz4ZbXxJi4z6VBmQByoNdU8nRXWFta",
  "key19": "sn86W4S8KbKDfeJwnJk1zburpGvdscRKJaj5JSdo7zfshhcL88H2a3mYjjfAUskLTVLeR3PcaFVfWVfgs84odJw",
  "key20": "jDhGdEZnwmpCvMUSiWDj1FxrNXLu65E7xmriNHyQHexq9Ti8n7CKKX66Hp8MRmnMrjkiB58isrETEyBuAw4da2G",
  "key21": "64NjRiXdqNyw2hRRuxALyFphmJ4HWvBec1TkeDFZyJXodBDcXyiZykw2dJ91avNkcSELNQmQbyjvMfmaa312USy7",
  "key22": "Fj5gBQjgpyyLy5v4yekz1jmBuMu1hk511s6oVCRi8Gz4M2GKnsyEVD6r6LsDTYWZhaqu9LJWjEaaPfr52UwMeej",
  "key23": "Bv7QoDEgZPsedyTxtX1BupBmF8e4JUE9gC5HyTQGYKK95Gs3TMqxSbMCH6nzMWCEzUBgFjew1f1xw4HA42UncZW",
  "key24": "Suyn4tkUqoKazxwUC63ZHKUktQgDP2Fy8CbkJr3duVV2VgXSkPbReqpuU9jrhLYJ1dBRTkrUweUCP4MGsTXEbum",
  "key25": "3UoqvtdSVC6fo8RU89gJdXuAUh7YeF4BntGPpfkoNpLT8JSviKjQoQczRNtGmu9MiD6sytbjXJsArG8mxeD2bZxP",
  "key26": "2LvD2YcBVecUbdUDAFVU1ip2AGYYLzL4BxzLoFQ2czxeDhvWdUCzwegw1aX7Tuz1aWnAQJbaKs5VCgjsSsXAL1gE",
  "key27": "QJyaCy4nEojYmXyMPLFoQkv1p1kz5NzJ5K9tM3QtCdzGiGizvoKTiEDTRZTw4W7EpuzLsVH7LURJpUjAkj5SXVh",
  "key28": "R6PcMSGE55s1KWJXqoVdNKfni9J4jR94Bun9BLrd7t16M2F7m42JpuTV6ZvFSz5gLLSnE8LvXVUpmSCdmKBJ4Y3",
  "key29": "3eMNoarhSEn49mybnradeGhBeEJNXHu3fp8FevRMJ28FvTUrJghTm7Z43qytUrsWuFRCrTmQRJoAAkngEKLPkNFz",
  "key30": "5g1AhN7uHFLDUz8P6JYn3tTZU4rfHXwYS7fQuj7qAi9RqeKyexUtqQxrpcJofAJnZD7BeqBZ5EHAWVRtQGxtWwAj",
  "key31": "3JR3FX7c46bN8thLjABcHEkQC2PE2G33FT4J14GubxEPhCwo4SvF2kZK8dd1Gb6kPcno4gGBN8FsL7Abog6MMT1X",
  "key32": "5DCurVTAjwRVhbkYpFXxY8HrrAjrsRA4WmPSPDpGGb43UzsRLAM3qjU1dYDXkwDAHmnYLqT7RjU2GrP4Rt8Grbwd",
  "key33": "2a4QJrAycztu3WwxqcmfDX5GprZ1nuAKPPFpP2DXeqvns5sSwvbJmCgUVvPpMG1JDWkDLjpQpLwbmmB5bzc9UWUo",
  "key34": "vuvStzBmhWM19XmxjB7JwCS7adaskYhfFLk8RrjLBDUHyU4Jik4PcVgP3w8Scv36enZ4kDLmMt7JMyDocDizieF",
  "key35": "3mxDsPndC6RdfbfGGn4bwfEkAFufvaZxwSgeM2ZaoDZ3aJwYXpXoq3eSwNmu2n7qHw5eQkyr65sb6jXAEfWmRdZA",
  "key36": "3fR8zmW9pyuitYcx7rJAi6RbkrRnb84LT9ZRDBqWPpz8D9VWgSszzsmYfvEyZP1wbS2uv5zLgek8Xu2LVZbZJcGw",
  "key37": "21BdbWKSkPua26rDFsu3TyEncVfhktoaFLo6ZzyqYhfSQ1yJm6psMVPSBXV4Sc9Pjykyav1sN7UZmxmTDft8xeGQ",
  "key38": "3WnkKSh4kaCQV8MUgi9zviqYgkiXvhLXzyQhWyizqUnvKBCCF47sbKi6MShNTV6yHXYi2t1DToCxaWDLxUTk6zFX",
  "key39": "334hmxEixMuw2zkVJmqhbB56zLngJj2v65vhmE35JhnGjfiVRfcQVaet17t1PsKi5RVn5Pz1sNLDCCmvn4g5WMtT",
  "key40": "62RZWEZD9tX56se3Jk7H3PfDE5V5hcrsWECH37VjQndQuU2jRt7fmge69btr1cgWN469GZSE95XQguYFfiPZdg7D",
  "key41": "2hSCGLB5dKQxu2Ka4HwrBn6DQwtuHZGjxWPTcYeqz95q2ouDLjHgxyoBbVZ6QpUVQXBBndsv2fTMV38j96SuUZYs",
  "key42": "4jHndfsrLTgYduu3oBSHfP4uGEppuGtpSv4nWAxoM5WxWxiQgXQdas92LoE3RDqpXdT1WCYh8huc1i1nHLxbsxWH",
  "key43": "38mwQaikfFN9G36udru3HmX6WEfrHFjEWRX9m1nHsJDCCunJk9fTKHJ2MDHJGvaerQNgKqSpxejVcaT3FWAumBWX",
  "key44": "JvFrzms9RqxSX25xc4VSeMspivLPWoeV2LaNQCYMnphnCir1Z8eYVt7TWKwag4KrxNHjcRaH2BvXrcRuwx5iwDZ",
  "key45": "4yHCf44Miq1dLfsDT6nx577Ryf8F3TYmAiSukzodyjt7QhiZt5S3Q9piKjkodhrYyN2LWaWpUHKHAQaevKiC3re",
  "key46": "5CCyVX2e8zfeM9r6725wDLE8sEyGjDMFi5HZSJT2KLC5tnqh23vGVMQwNqkE5ncj9A5KWSFASk3koctvTxHp4PAs",
  "key47": "48XDAx2qxs8UKrjYfzSR8fTfoX8ZYi3y492MeSq3gD8ZJgSJGrr8PazMapMQc1rx8S7STSJfTsdvbaEi31CM5dWb",
  "key48": "2xRCpQkV9xRn3X9DRruAdKhSPe4A9H8Q3F8WW4KtVwY3n5pTmAknS73BK5kkgssR8xQKyrjbVebub49VpmYbfLyC"
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
