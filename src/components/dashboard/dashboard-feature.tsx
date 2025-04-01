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
    "34aKxguCpHdJQTZ9NydLFxWvcvFKXyvSmZjjNDzZAd7f1c9Avc3yCznpiUtRi5ayu1QXSrzLdbBvfULhG8qtsXvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UYBa1oBG9rHmKR1XsDhXhgWCoTjGZ5yq1w1tEK6KPvyEUMiERXTRj6ouUpj54fpSPqa3yLjD2gFfrLPDWRfTVrv",
  "key1": "3Yo751JqfNYp3jpNSrcpFg5MrY2keUiMuzjpn2cgrZ8P6dgniGgQZHw6tnZ7sWK5kivwLyda82NSqcy6xgypA3RA",
  "key2": "4jH5owkD9J2mTPSdfEJ91fnzF5qy1ztL1ZUXX2V1LED9d7291MG7AsqvuGx1v2NzEuoCaWCjtzMCYsAGEzrB2MdX",
  "key3": "jSrV9KKK5pUikV5EAa1NN3UtRxdJEdw9s3B9qdkCm37t9mXTkKFnqnYsFiEDR5HSTvewc4LM6UjzE851QWfjWvY",
  "key4": "3d3CRdE8yUaDecmrS4ndFDgVY31q7WUa2mdz8uyVUwthTBNKHxECiV6wyMEvBF9qQpqZawfpu7QGT3N332BhUsou",
  "key5": "3TnrhW58fKTaVDYyDebmisAWxde2VGEom3tgbnC45HD5ZYf8JyLTyNxYXXonDiXvQNLFtUpRo6MFqpoXbhnjczr5",
  "key6": "3cLXFWcqwZJRrQZfGvto5wEpHBsoGkwJpWTCHNaWYK9WH7QQerX11fT8Ppr2TTJnVAjEdkBfGRRZXkNi1oxbk5xD",
  "key7": "4QrCuVrY3NfsyyUwArQCfsKrqtXxrJfC1fwMekMoEwP5bXJWTpJbEfQ13pUP1nVetP383daWJ478NTTVx4JWVDhz",
  "key8": "66hbdtUhdM5PLMQxBXUFfcz3KSpSbknAoPWqHJB2yPDZ6TdidrdLGbvAcsNHEWZdbRdW35gENpnXusgMaiqm8Nvr",
  "key9": "3QHBAg7eQ76FL27VG8fj9ubDzJo4PLnXL88ubnwCLhYdHMUHSiRF983H5nEgS9sfJ194zVmm87ibCoP4SWiZwieg",
  "key10": "5b5SGXkjMcvPTUaypZDGYycTqkDvJtfifgJuhMWSUrmicUWWo9CqeJUugutBHr5YARhu9BK1aeUujXvU2s7EP751",
  "key11": "5pYUdqGQk3wkafrjpS9oU2bPkdFpSURXFekhXWA84qJEHbSDzwmso6UY3uqFnviD6p2uKkar92HnZ5X5DQ4YAgM",
  "key12": "4groXjDeqiGumGw4mFJY1y5zFrVB8gUbrZs7UvyX8DgnFXemaYhhuZDSRGf56tw8xhaDzqECzQj8hwjSW8ajCqbY",
  "key13": "4xrzZoAYUPdJNuZRs1cvugQyEDr1cHBFnMM5XJimqDbrW5Uu47KQZBpFKPgYmE2t56fav4pyk9asDxGtMxKe5Qju",
  "key14": "VB84SEaVMeeA27aXDfqPsFua9YA5SyzGTpiCLysBmpZk8qmDtugCkXvcm5YHKgENVCnNPyAwqtEpPBDjp4vGRiY",
  "key15": "KXzp6SVbXi4dULPNp6mQvWEd6Z74xd7W4FqhmxUZdDQcHCbfgqtFovLEKgnhs8viU6f37vqYMSqWc9nqxW2Whxj",
  "key16": "49uBD9T6F2eoMdw1EQtZJ6NNyGxNVb7rLS4famfkaURGL6jBJb7121jUwN3HxuG32Q1ZYJEkABiYotzLsB9pcw1w",
  "key17": "viPZRLW5XhNDSuzcpQCBK6pWXtvcZtZvUgKhcpSALg3owFjMfGTxxGQxueVBuBXVz7mRTGbFZA5s6iqAw5vcKzm",
  "key18": "4HnvKVF7MtU88HtaZ3L1tQ1emMtW7RbNxtoHEW1CxMr3kKoNNZC1MYseGQ9tEQY9KPbmEQj8KWsFNNTxaihBCrrf",
  "key19": "3dR7fBRGhJPkTX6XMfbSdmbKdCzAxPHtCesg3yTBnEt6CocCBbzBpSstXZKDC1JiBgw45ozEboszSner4pGquXGi",
  "key20": "4BztpYUPAZDG2J2jQbwHKJL6UJbqyTRUcM7uHG6mQxFoXKmNS5bbo7PbRCsbzDXVJKSftd95Er6aheP31J22hHnn",
  "key21": "54PS7ntG2MiekyikY2GrpLzTCQCHPzhskG2bB1ythR36UkqWNijUuL3qit7Vem3kyUt7VW7xxARruSnhjdFVnhmN",
  "key22": "3P2jcRXsowN3NB7Bm1XR6fUMhGX7Hr17wMuTTmJrezUjkaQHZmXT7NQdwj9zCxY4RP68dPLNax2vxtphLvdYaBhk",
  "key23": "36a8XdURvrTreZnqHtRoMwvriYxAKfbn6jpxSpy8QaKaHdxy45kusVok2Qr1124DNLYkRXskPHk84xj7eCmogTsp",
  "key24": "3X6kkvrUbz8C7ceKbCNyrRwJUkThSpp6LbQomgviQReB5xhGKmBpQFLAN9LjetDR8FHNwAgnnsPH1b2tWuXMxWt6",
  "key25": "4BLMRMSgqDNuCwNAcvmC2Lo59Bqy2mCkG7BxypzYJDmMMTnZcHjDzQL2BWPZ7HP78Fi7TAfjZ1pxBBUae2ncN1F2",
  "key26": "32DnyrvHUupvBa4GHuNjwqjxRpQ1zrcnzdxwUNXX7Q49AFTq9R4Bft5cfx1Et4hVonVdY89p68yrkWeLhejTDeDv",
  "key27": "4Ut4s6qavwm1MYpp1AJB2AGJ8Z43EM1dck8fhqp94gqYHVju1E4mqUsiUiB1VJj7VvGaSsF1mFGG75UFkdJnG3V6",
  "key28": "3ky6UCtGqxjkCPWpYPD384fo65FtQkehuvLjD7JeLTUP3yfEMhiFfbnxWw4eePwFjnqDWBWUjrjHfCBCrEhfdaXx",
  "key29": "2FxD194TeARCoxCPG4RhYZ8iVA6Cfo7MSh7CvhWW37Dy4XbBrWQwEiDrGgnXXEgRdL4QiNzCCbKEKbtEqtQjWiSv",
  "key30": "61Uy7Bkrfr4duvbrqX1qe1U8ipcq8K2qosR9VEgrkbm5HVgUJa7aVo8sF45y6d7QJSjf8a4XkTfWSJBV76aCAAxV",
  "key31": "1i1Ms9U4sWAz8VUP9AX5LF6L4nEn3xfwM3nrov3UJW1hAAanzFm7ad7gfCLbxcgpijPKfpfBk5Un1YGxH2ZWwRW",
  "key32": "5yTr99kbeRZeHoKsk6HeBwjetjP75suFrNj2UMoJeTinazC32nMXoCwgQDEamjLpyGq43XnqcAuKc1y36E7B7nbY",
  "key33": "5q5KGw5izhSrJ9bdBFq9wW23RCRBC89cb4fAcc1DTFt6E3GSUGBz86w7tCvueZLAjVoLwAeGfD9nhdNgnz9KfwxD",
  "key34": "4wvFSGKxmC7pwR6cfmJsnnmH5Vs9Y53YStDa8QfbpQ6L3Qda1af9fPabgtkRwB78dpe4FhbnVUnc1fsJg6JhDT4L",
  "key35": "4omaPN8So1DTqBYovMELgbUDYKqL3556kDNFMtsgvr32xvJgiH4v958R6Cx8muKarfL9nZkApefhme8MMcUG5ryW",
  "key36": "5oo8obBKSEp29fDovXNrCAfmogWayms8vnwavRsgV6puMbGGYjb9deCZ3KP6YCzR664YoTYU5bUfbYfPeSH3bAch",
  "key37": "5z5WHygX4VwfE9mojNriVq2GAFTY5DWDKpyqGwXo8xuaRqetcXkPZEvLBdhX1me6B5fNwN5PwENA59WMrTM5uN4N",
  "key38": "4WgQYY99KjBC83cqSfPy9BoH28JvNMyZRb22pk5PNAbnxwv2LwjvHgkLpbEdMsKRMPAS63GFAd4vDL9ezDmvDh87",
  "key39": "5PDSYb2cqnEmjGwCB8gvTaANgFshZscxdGxXPdSDaYe4UcMYWCvoqKM7W8TRkkcZmo3G3GteMf8sE5HhowHb3BX9",
  "key40": "5RnCUpVU2YtEamkzahKjTye7C6CGePAkQ8NcZR9zvfMRL4yq5AQ1LyChYR7cF4euk4NF3afDL2CjGVetohzG5y16",
  "key41": "3KtThvqFhnBRhwpKGjn6jNDeVEMWZSCiZBg1FYBqjtNnYVT6d4gp2stTtvu19EPukXqtje1zXq8Cf3TXtuxZvY4m",
  "key42": "4Xd6Dw9arD1S3ohd2YFYyxdNPm23fkt2jh4cqUQMk3QociBg3RVdPQLHNdTqQZW6rb1PzNkisXEgHKW3yaF7hSwE",
  "key43": "2zjYDCkq8wCkLeTixKM8vNzQop5v1M4T27yzZvDfJsuPmN5pHnZz8WKzECKmpJh8f9gHUQ26ENnSFeR2EUGszpyP"
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
