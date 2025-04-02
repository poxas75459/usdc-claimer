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
    "3MsLiSnC4oquNBLz2vYmegyga7NTMzwUuCDmeHyZGUQT2uFivskzZwfBGn3BKEn3u9YquAwvygqo55xjvmc7vWZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDtBuzfjiPCBBiBv9FitRR9QYQHMdWoUuhFFF44qY1N37ccTYFj3XD3rMVCxMSDyzc4Ysjf2eLZjB41VAjGraLw",
  "key1": "zXn3upavLg42pkdcXDDX6hghEdXiyb4Dz21x7VA3Cjr9CuyvKishvyE8x2tdof62dvEMuBoJK4uGM4Tp14acZ8e",
  "key2": "5T25gFJQQqxV5vjC2M5Kxb9CQ6hk35ye58SDaxP9vmP7AXmkJprCiTrKPTRUBDRioRh4wePUamadK2C683YuqXQs",
  "key3": "4s4g9GepPKtSJk2ttvPECP2bYx8ZTY8JhgM4GtUgt2oyc1cj894FHY1Pjy1kvjzS9SJ8otZ2KSsRkU148oomAyQX",
  "key4": "UqSFucpuZRGz85V2SVA9QETe1gi3dMZbWHbvzhxV5K598SXxqdNwara7tzqW4473S2rU1djwQzN8vLENSeFm4NR",
  "key5": "2DLD11MAVK8vNM4Gpp85ZcuCHG11WKqgFFTw2NCm8TsA33iV52yZM28SUTYxECYR71TTHwG4CaKXTnZ7D8EEssfV",
  "key6": "TcpgH72tTRy9KFqGyd3rbuZB7ab6bHw3MvemSmNA8F36HU5FKB5h1AyJU6fjFnXTZH9rbtXViFhJcQHVQRym5zz",
  "key7": "5jMDRSr4SVjPM8mooV5hA6sjiTnXhCcUvA7eAzKKFH1Tp3o9fCaBFu7WyNYf8vrUiPcA3mELqdPTxUuJA4cT12VY",
  "key8": "5bkEDGpMy8egL9VsurYHHXZ3fFx4ksuQpyMzJg1SLzuYUKkHxW3gF1SoQjoGJroZsShZHJUaJZMXxvKVvBgoWLSz",
  "key9": "2T6UiDabRc4DFMUdgiey81uG8bqddntAHq9qYscobP8TMsFTmLsjTPsYgReyYAUWLHg7RXhkuDtdv6sCD8RvW9W1",
  "key10": "ayBT1kmLTmvjsKJtQa7M6AjHQRn5MVvb5Tr9BE2B7BK6zXGDix1MjerLhstdGysgHP3uTLxvUH4jTVXNgYgT9kA",
  "key11": "4Qv8awUz1wSrmHCnV8g2sU1WoV2YMtThVzPsrpbEPb1Q3dheKB5hsPcfXxrcDyA6yiTRkcUFKE5tGrAdYTXZ5D7k",
  "key12": "2sQ8Yb2aEfp5x9aQXr3Pq5cqxxE6Z3C1nsRa41n3fiHSj8pN9aVDA6U7Pat9bH2opjQwpx3sVyJqx8UrpmbNJgSx",
  "key13": "3rya2Vun9728E2GtffaFBeUmBwgD59UZCJSb7DrBgFfQBPbAki4vDLbPoBzFRXEFLWMiSv3w93xyRihAPQyVaeb6",
  "key14": "41HddDJADKdku94NNkT1xFEkn6SGGtDenrcq6qYUyeAWHHWx29rnwD7jYn47Wg441LkA7G9wsq66Lzn15j2o45VC",
  "key15": "4vbMcs1qrPBbZjdsRLQZD4ZfNZ6UvRVW6ykaEoGRZ79d2dxZQRwmvfKS55GdNfyArzn9KDNNTkYqRLkFWeeVKzuD",
  "key16": "5ayNTQGKYxkcNcL1K7X7Mjf6AAd1xW4GQBdCB2qyouzH4jWaqzsxfYoanrn39PW1D5Ct7k8NpX77ZrVQt8NBrqoX",
  "key17": "meowgAYfmbbGYkerQnNDT3KBK6n8jruC2Ybh2DzCg78g6TaTKKk57cAxDvWSYK1eaeaBNBwKMXAdvLQHfFfURrV",
  "key18": "2FxPJyP8RoC27tsJFYiZ4BGEX39TLvQ3NeenWR2mRjRZTgoxUgaKqELnaP16DbqZk3apRqMVmASeJ2YhpPraqwWg",
  "key19": "4y6ctkKGrSaNbU8t9LBinz42mDSvHMh2ba8xPq67o16MumDHPHVHi3qeDbfEVcWYmv2Ra1o4Yr8VrykpRC7LwYfe",
  "key20": "52RarGHTDfsPyNL6LRn4KgpLprynPey5QDVokaCMsVNgRfVbyG1msM81vbDmnKkdUiJFm5pkS3nLPUew3yTUjUrZ",
  "key21": "JMi2TzaT3x3WhKsQrYDCnshdtaahtEGnMmeLUer9B2cVoH1hJ9cfjpUsPcToA6LYtYQcH4brXZDwkz5aH7Fk7oH",
  "key22": "3RmHrK5yuySAzM7bwQD6e6qobstFoUeSxrNsj4SdJj2agCJUUBAmb4dy6DkK4Kbux8BGcds4RnadSiMrdbL6RuoB",
  "key23": "2ES58agGwTX8JH4qR9DiMmGpbCMAeQNepdDGYpUWdBR354Vg3NE75F5D7YQEXyakX14Q6GezuxkEPQjvW1nt3VSz",
  "key24": "4bUYiW2QxcDPwPVPM4EWNgmx8LAs2MZwLWrRTNHp36YhuxY7h4ed13KqFcWmZX8bZFDSTkVYti1fF9B24av8466r",
  "key25": "415k5R6eKhfwgaTjUS5Rgx2U5quHZMM7F4Fx2nHUenAoachAR6RSoRUPyLfqXxkEjEhaYQfNq1KLA4ZraTpD77fZ",
  "key26": "559F4bvZAhvhwAjiWumfxGXG126bNHWJu19PcEoEza8Rj6UDEpPTusRKMbGLCvZpHyKxkpqQqN574K4XrWNNXjwE",
  "key27": "XaWNDX4vGE8GSh5mGjJLgdnCBB5FDcsUFZmfJf8PKa8ULmorZFJSKtV5kJULAHrR72e2eCSD8Ltz8CKb3vwPNWq",
  "key28": "5V1xPicWbffAFfMV9ssF22X2BWsa6XMfbqmdaYrPEWeDhxeeYDK4pqQ6Nh8EcYmvDZKMMtLbxfZKidDJ92jCmj7t",
  "key29": "mTysjpBetNJuMG1WcNBPKf32paP6JNk5mZJkobf4CkMtv6cr2k5a5b8t45pV2wtwhG4y7Ua8P64CJT6JHGxStkh",
  "key30": "2BQ1SMAXcgrqKGj2xQGq5xBjRi57wJfRycnmTHjFA3Q1UTkCYWDK3oxxSNVRc1EBpuhv3pBERRP7GcVTSXZKqPe4",
  "key31": "2q1x1DahyrtDoX2i2KiE23ZFGTb2t5Ugv7tjd6NMjC9aZwo4cGoNozj8Cf9HhpnzmdnsbgH33sC3t4mndD4dGEPJ",
  "key32": "4Jy7scqt351b9Nv6K9ZpyV61yiJ7soAZKqBNJ1X58v7HZvvo7WXZPcPZhJtJCkXGAKRWZmtpwyNK9M2dFoaTZz6R",
  "key33": "3RTHi37fwgACKS5PHFKL5uG3EKaqYYW3KnNDuGrM1HZsXrD4h4MdeTWHBpdNRgkqcFBCeQpGvaf6LUub9TWjRzEf",
  "key34": "4Gpy9mx4jPFt7jV6WVmRdU19utetS7ZczbufdFUFJCKxPf3H8jN8QCdx7J4Db2QAhT3mzk2YiFnAogRfXNqd5DMU",
  "key35": "aPpf71vqFu7j8GV2qe85rXe5oEcYLgeqLWNK1djsZkpzHKxiPbSSUFzqAjb53U67mQawDjT74caHV51WqThuEsZ",
  "key36": "3aLvE9ZWhYeuwG3SDMAWyUBK6VoaxtxBvrH2JYKVD5F6NDbtRGs8ENLMLBTBrhH8kNAyDNZ3jeX879wvUMpFrytH",
  "key37": "5zE6AYA9kqDMD3AK1h4Do2wYPUbgFAw6qJuPryzYFLfed5LGyVjwZ3tusGJ6LC6AHixNDpWm9mE2daFyQnYL7MxS",
  "key38": "3U1rXrmjEASPD9uYhLiYrMT19aDPXKbyXn6A5rYtkQa16WTvcRwtkDLAAPmhaWJ3MhG1baZHRb3ztK1iyusy5xRK",
  "key39": "5qEJZNTBNz6eqnwr57ZwPGNkexg9R5dZL4Yaf8WavNpCAUNQSeEnXcRQiumiFhGPCd5LcQHVPNMpmPXQND8tpiDa"
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
