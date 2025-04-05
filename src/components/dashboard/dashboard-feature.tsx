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
    "2gUkriNJwCudPims9xrbfCh9LsXCctej56DHFYiEg3PJ5EhAhw8DFkpAa8C94UJtuLMTG5DtwpdM4RML32wrC4iK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nU5wJYJ9dsLEpNxK2p29eGXcsB2qPQwSn1Xm6kygkXmyeiJhD5LZ6rWNRduCqNLdHh2Zrghb6NiYzCkHM8GbKMx",
  "key1": "3wzZLCNbDP7kDPjCQjS9XQMAHZuUerGKPytWLAzQK1enRbfRoizzzRCW1WNxCNcXhUkSvS9BTj7pfu764LDEuhn3",
  "key2": "5Wtfabjic9rnvADL9DWRzq9LwDaTKL16zSLZ1DVwd5Fs3VSL61JwiwSHxzHf6xUzaiLNbSo4XaMKasH22TbDG11c",
  "key3": "4fC3fmURPjaM2zxJdr3F55TAdymcGy48JgLFzpufT9inu5VEAvq23VLr5tmAp4AopTY4pEQNTtaVbNWvATb5sDU1",
  "key4": "5XUQG93pTXwp98zAFzBrWwRn5RoLDCwtWrUpSk8XqF1T6yEXWNvdU8Af5GYDWC2iW2tryASCopand28LivJM4oBh",
  "key5": "2Kwmv3B62FsoDGo3xd1YpQggiNE539jKYw8miU9niyWW5ZGEJCznFLdkgDWtNgVcPFYBRFXEedbxpcaSHwwtUu5R",
  "key6": "Nrg2C3EctUQp8MoTywZ2A9umNaWtm8g3WsTHNkxQmyYn9dTjhHEcwcHeY2CsGqEBqVzadJXeafY5wUaaPdHRi6Z",
  "key7": "3SNxbp6G53WHY2bjLJ63Y9yXpXV6hKDKDcPYvNUAyjtjMGJZCTgVxXU2etLVKd8VFu1hHzhjvePc8vcF7qE1AJY3",
  "key8": "JSdx24dKC5Wg4ixucJfLLrbbgFabQTqRJGY9GmsefFykJbAX1xDm7L7JD7xjGR6upTYQ2rfCBv3sgTShrU4MkR1",
  "key9": "5pC4PrrBoHJCsXUK2tfYtWMRQJW4dK3JgyyKcRRLhdjGCFndmJxncksNnXcSoei7Skxfa7AejtXZ143eaxrc5JGo",
  "key10": "3Ehyke95aabaEshEtwL2G55BZFyVHdSEmasoeMqQ33fYFGfY2F9sMPTCy6cpxZUTiF8vdMHBexUeZW5By44Yytu",
  "key11": "5dineMHUSg12F31cxwqYBAVL184fEvCfYYQUyFaac5wpUyZBX5VHPGHEWHVweXP24LTavY6hRvRD3r7eVYLAmDVi",
  "key12": "2dzVYacmfxFk5fw1b7vf2QRSZmmo868VHco2BbGuZN6wXqnvPuLJ6C8Gg4oTkrRR9EXhjVSK7gApLRF6qrtawWXU",
  "key13": "46DRitFU8vB5ANaNk4s2DzQPq1KiynLyy4eDj3G92hpXU77ncp2r4rBJ6gBcSAngiZHAaVARn5Q9DnLoPaBG7GVn",
  "key14": "3nv7EtqgcUFaV3sUN1tXGy7HMNTspN8RCCovqtmQNmkgNfiRQormWsk873AfEaEvERYAR1LwsEZhRP9586zwyE62",
  "key15": "2UpFgeuyiFmFhCAd5JL5KPku5heNG9mGSS5QiDmCXFMueo1JFJM5baiq6vwiWDxb9Rh5a1FSyY2FfSYEEemSfZmn",
  "key16": "5fXxvcitf1e7uRB5TVpv339YwCSLfW7nLy231RCd6fkNVYH6C9KG6PazomUY6wb2Kr6k1mZoTEsaknUFhVaredFz",
  "key17": "3kM53i71DwDt5ojPN495tg7yRi9YysVdFuRunmFemGjKhvVPsX1vHfMVXJr272bEdr7DbnCCUG5ychffEznLyXac",
  "key18": "MadXm7LRm95rMwKfSq1F5wXfxANcdh2iHQsBmCq8uPCqEj5bYNw6Whm8vEzR2eUk3n1fjthX1WArG7DNapD7YJD",
  "key19": "5gMAQL2fKzD6FaxDr6H3NUoo1fJvW2TX5h1xdUNG4M4cpKRp3swQ3PxRrMZBN6xhQHiuQnuFyqnUycrf9kRknoVg",
  "key20": "35hVTGfe7PfVW4D9VPjXNvoRY6eYV6fevnJssv42jiCeQ8u9TFPadkSFpz1cF8Wr55pT4xy37cNWDMSM8WwUhhrM",
  "key21": "3PGkaoB9WjQbWqEzsGRSpdnQwjZ3KuDfpNP4hbvWXjUJPtjQLBG9YP48Lkdt5Y9TzEoY5wasfno2XAKoSBjs5spG",
  "key22": "cDmvNnZVQnAh3Z9cMK6R7hs7m8YFGK2xKSWyGR543Kh91thpmP5QXxynLLfEYedYJKbd9cNsUf87LKYYeMWeKrP",
  "key23": "5uCDzoLUZidsJrMmaWbW6C69VXaYADhKiCgxUy6VYx8KLYetL2CQ2NbTpkMcTgkEcXtvrW56uNoNGsb5EN8fDYbd",
  "key24": "3F4MwSWDARP9ob7CAHYdQPz21fUtD6ZUXpRhFJfHM5TjNf2kPPyx2jXNcJBVvkfphWidqgMcUpqofnyjwcVuZtEu",
  "key25": "5H4u2qssgPgx2GZ5vK6kSuw7RVQCJUdMuBwgtidLGgr8eGRXeuwScRZU6X9FVEbaX3Z1G9ZaSSYNqC5nVCwvvGQM",
  "key26": "2RWyMvGEzE7sN3LkvMfeLhit2qsUNu9Tw4fAm9jAMXKc6rnkedpyQgnVDT8PQ5riuRTDNRstouGGDpQWXK45Xm46",
  "key27": "3w5eMsqfLsnK92GnH8sCzrHdLdYkS2dUQeP2zsPJv5ud8riasUj6MYAMT3GNmsWgxAHdWEyYhbj8G6UpPWRPV4WL",
  "key28": "2HGDG8NPfLChruvjMveHrNvUTR8M6CijnCzbwt6jtEtXn6GqexE77XFPDSbXvPVtLLcHnPhVpboNMsDR2AERe1bW",
  "key29": "BbZ53JbD1caBy8k5bayjpNeoi965z2LBBAkJsQoAzViEQcVtuobXEqp3xgoLnNxJw2ET1BhSYWsjFzGhFcBCp9P",
  "key30": "3aa2ExLuXoS8eTjZdxaJSjD62pQaRjrojBcepXb8yejS9a8bBdpzWLrkp8oiRWCWxCv12z7LSnxfwrVcPVj6MSA3",
  "key31": "3EsP7VzH7boKd4xH6t2x3gxQ8hThTf6Hh9LvkEsAB8UbB6VsnfS6UxWXo3UnLJnSH4KQ6CMCRa28vZ6FExh6VfUv",
  "key32": "4ddjqHZG8BTVc2fMLucby4NtMkF2V7XJuimnZ8ZNkzN6pZfhVLQ66a2aqNfmHfz73tt9APPqiCNoaf4Rf9QJu5X1",
  "key33": "oDfDSE61aBQfE96HnaCyWPKjzWbbhtZh77tuQwegXev5GzA46EKzQgaDuQ5FNqM2FV2Y4RgK2LSSjJcybg9ieY8",
  "key34": "RaBfKAVJi2YMJEGBrNaTsQHFmk3EkZZKQHY2jCf9ngzaaHWiAKBZGZfAVYBJ3ZP16dJjbtBUpmrxdtKfUp9HnZN",
  "key35": "3YoMucqcb8CSguXH5b1749dXphQyG5Y49ooGqNsJAqMzVZ2n14RgTvvBMbFwk9gs88n9uVo2cNMmfcbnDfmXsNPh",
  "key36": "2yXXeXpKVoRkWcHLXwajp1Yb4qa2QbZF42JwZHPJmb76uT8DDC3vgfM9YH8ThwVFRdQUN6ZSjCBCDFQbcZrXJGGn",
  "key37": "58sLbqsqxSbXg5pvKt2GSHZ7dVVBCQC2R2CfDhFgoR3j1h8MCyHcSVGALNhJzHhepbt7EWWFQus4nUoR7DystAuA",
  "key38": "4yxenFzTkyUWMpRAT1r2e4w2U39iqgTB1oi2abeJbqpK1VnnrMEQSo9d1V8sKzZtbydqH5SosX2HS9gxSzwCGp8q",
  "key39": "3xDYscTKXUjGK1kHWY79E3RhkT6JoUud1F1LQxGb4HipBD5C93eNt88pjAPQ1NQi4WLehrkKLiokPffonV6zanoP"
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
