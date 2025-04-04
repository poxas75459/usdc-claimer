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
    "643BGB6zM4AuGCxKVmN3anYpxH9g6FFPsAqdRCPcxy4F3Wgrhs5RWxUncuvwiZCQPJJvYLeKm4nx89DAGJdPECa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DAVdei4j24m2aHjAv2Mr4Z5t7U5WT6TKdT5ZHKsENCrXddaZMBFKrvk4B6Kz1PU1wrWKex9AeEHjr3rzrNRb2kh",
  "key1": "5knP3kgtoujdm8Zx3mgeJxZHdtsyJa9WJU71a1xwkXE9mqPLFsen2TXST15PsV4vm7aKj4ksaMzYCkbD5eYJp9jP",
  "key2": "3mrKqoxLjcy3cp92MvJKF6Bx9ej6a18VzYsE6YYEF4gNaWntj8MBjXP1PKucjT5iR3hQWNEKUPpH8PXbXS4U7ttu",
  "key3": "2g4Zkoa4WkNVsau2DXJs1nuZvaZYqvufKS2qU9ansYu5WYjJoejXJmWyZvscSQpxEeCCRLq3X3UuiKkVrgndYxHQ",
  "key4": "3zNMMsgssnq9nj5ZgzaKjdBFPUYv1UcFyq4T62vGFbVV5W8eTa8Vv7NVCe5hYT9tVpg4m6KPLwVZkF3mhvgAAVf2",
  "key5": "5TVRv6ZFatyQcwmCxe9QaqH97pQiQ2dABJLS59ekszy8CKt2i1tG1sMVLJsLFD3gERzP9SiLHGPVrvu33zxBhKCb",
  "key6": "5LD5ndmrRd8QnX7sA295kVXfTUwX73HEz8GYmMJQBKy6xa3KSezpxVQx9JpxWokMqRjUs6K9yY1pSgdWEWGdHkxe",
  "key7": "4Zn6hG3DNcX4e15dxD9sPwyqTQAABmfLfuJmh2yMFZLWYpfCacphSfjzcmjqeYis5wRJbkgsGUqXzw1NLG3BWifv",
  "key8": "4kFQnMdySDPpV5ZbK1smnHR92MrQPEDWbNrZX862dbxTMLr6v4xsAivFEUaRmvo9eLUUmwoN2T7heQcpX2xAg7oc",
  "key9": "5fAMH1bvYtrYWVeCE8gV1D2NzVGiRaLDy9ipwPFJaW9fspsoRox5ng2dmygnSksAMejNPjBLfq26XcYVLPPCCjPy",
  "key10": "ZX7oxX87fCd4PoS31joYj7wmeGQkhScJS6ZPA99e7Meu2VkQwpb9jhobVA5GirG4vQuxrhW18i4Fo8hu2qsoky5",
  "key11": "2pG45PbA36a4hAjQJzXF46XfCyiviTp9jzAkUSjWnguJiRzs3CQc2p3DUxLEXYAguDzX1h8eBHEkUCd7jQhkYRNa",
  "key12": "Kzmt9WUwirrGvZscGN4zCzVbc7RcBi7YV8qUAnLVgRY1NuM6mLewdnpKHxkaaU1by4C4absEDGbNrCupQH6311C",
  "key13": "oh7geff8KHdDr5SgqaJyxUmxZxeqA2rbxCcEuUjqWEQieTRf8Qimonx2UzAt74ViGZXy3Nm5QiVxEactu9jBiWZ",
  "key14": "5w9biuf8L6tdYgTGVXva1XQhHDCuHpxZqGHnFZZBENr9BuPRoAyrmKGTgdBHrdyyG5hPFyTaeHuxgu8A2RVcEAh7",
  "key15": "37hT8NKzLSw2BRAFkmpzAb2sYE2wUEMEmEo3Xt1iYn3KnD6mU72P25h1kze8ZCSJgE6eMDPxZNgnSN3yYA1g7q65",
  "key16": "2fiHLLHXs7WQpzG34VU3UQVPtJWWqK6cuvMyKJMWu56nfZ3Lmrx1G7uUSSoyVtw5iruy8REwRGtY4XXgFpYdCYkL",
  "key17": "3Qh8rdSiJ15WQAmPWjZxJTAqWgth31N1ZfnC6rV8TjV9sXjg4nY2TsoWoiHEQ2Ew1wqaXUBGYDiS2nsAKQsZKpWV",
  "key18": "52vCLj1V44XzCenotVMLrGe3ukZkGVLJVCYV7K4hkMpcDsgMir9Ccpb4jf2AgRM5SQoMCD8wUb5bUm3AVUrT2yzc",
  "key19": "32j8T5sjZRqWHGDP9gTkgXfKdVLTpPkC1i9QfePuFT1gZggfFstxahuoRTiR5rCwyJTjh9LPitfS1opSvfJFLrdk",
  "key20": "4QovWXA3bidFWztRREL4Cm25shSZcM7ibqjnF39cqsPUa4wAuKGctA7tT2UnTtd2FvjNTyLUdPQh4awK5HpMBFwa",
  "key21": "yhhagKiwNTPAiCsVy8rTBx2FoN4NVG4j38Sbbop7dVjXz7zfgULGt5xMukvkdKJWYa6jp5ZhJkA9CZppDHoSg45",
  "key22": "DGC7CxyiTvoGAUMXg8gn1BpZqp7WFBenRrJ334s5unLg91XFo2Z9Uo5dZDeacdcq1Fbjn4N18rpYHbTLiD467M3",
  "key23": "xkTucjLMrQJgPrHcTA1HfHnT1moYwfUqs9u4Qzjo6vcg6Fnw6HvvbxATJcLdSdcgJ1bw4HfrZPngyBNrT4dhuTP",
  "key24": "CpWuSYxtWEJdVVdtBjjTsq8Kny32F9M3mRG2XK4fb9o8nWDE2ycimqwUQnkSRMFZ9K1yFebeQ1PMyGQ8cQW9e6L",
  "key25": "3W8opoCGbgTPNgX75Hbh3WhZBkQ2x8Kb9PfJMohiS7x7BYn44T4ZwoLBgBXdptxN3QF29Gp2Y2zPKnGnCyYqYYH",
  "key26": "2WBUZyCgGeEFc6MTKQvoEVuh9Qo1cCgLdb9WDbbMCuq6RP7i7uA58g3CA5TbjwSbn5dMLvqvzHgtvbzApER15QcN",
  "key27": "5WDuVyrgTUqfePqehzTYS2FU8cVyxVobZsgPskXHX8SuweJw2NNDmJAzM9KpMZEB6njXPYZprm4KTRXVZoDpxXBJ",
  "key28": "U4jyk6G6Qun5Zyua4CCpj3ryK5jUEjwv4W9hZPUxEQp2S4pJ31gQCHRjN2vWhvnfjiRe6C5Uwj3KumnzEwUKAKK",
  "key29": "5sQTvotrfZbA2oKNdjRofpmG3Bysstt4tQtxskMTBGJz2LEC54kh6bvsbtMyfCqEt8h4extXtSQ9BVPfxUQGVS2T",
  "key30": "fZhnL6j63cRNYGeKNu4Fqo3ojfp5MSXHjB1Gz1CPsjkm4MZU1kxYmXPMesvo7cdetfvPpB1PDFYPQs2bYwdrq6k",
  "key31": "sxpvZJCR9ZJ8DePJ3RxFV2ieHsv2gA6FTod6tKjGc3RauPGM5yyNSkSmjiFvoXsyNdNB578Ho7eqaevkbpLsWYL",
  "key32": "3FezbVjKg6Cgux4cHjfELyDdbQaHPxwq2KSvim3diZWSe8t9F8GQ7yBS6q9TF2t9osTUVHBz6A5PB5Csr1yvEp1f",
  "key33": "3eaAUutYzMKL4WTiPaya39i8dwAFi1hoz1EKvdtDTU2tX8wNgcrDkTFgsDNqDjCczaQDH18DCokvA65UBcastxUo",
  "key34": "3q1bQeGfW4sn7Eo54GTzJdd5BEZT4FqxsZQ3AUm474WWvZd5vFNosKFmtveHEpZsZ6GkPnc3ZsduMVJk5JtHqc9U",
  "key35": "CWn5qoFKx9FVRBEUaxHPNfMgE7Z5f2ELUacV67bwJFckxD2pyRBcRxn4pJnMbS7qE3e7w88v8W5Yvvr6jPLLkyT",
  "key36": "2bsW37Ap9wDZ3G3e8orMVQ2M6ZT8aYmidJ7nJvvMFTq4Xpacat4EBg32gU4csjWpR8EEzfTVA2j3fJsiHPNRsgzE",
  "key37": "KEPpWNoaNw9ap74kn8wQMCJMwP23noSe7WtzH9LqNf4jmN1wtFzky3rB8CUCXrDtf72fVfMqsLH5kxNhFkmpkHL",
  "key38": "XfqszdzdG4hgwpjxqo6et342LWQVNMju4eT473St84qheEVkn3tCfpSHTzH4qsHTbwnX1MQC1pY8YF34qtLNqE6",
  "key39": "33eNdAZhCovynB2Pv75v5uubKiqde4wVCr9bMGejPRsxyMV4bfp45VLFFFuW2HgtBYqGMi942UuWg9iGJtB8dNCb"
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
