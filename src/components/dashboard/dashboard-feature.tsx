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
    "LwCGuotLm2U1SRJZJpGGMdpZtgsaUjD3fgFQsiZxtjFuoGtN4uGjikFxuZr9dcYvjutn77ZQ21BbrEs77yjKcop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66zqU8kLeGegorGxf2XdHZMsyxjbG5tc1smqZiGh5WXoaZyZi67ErpaP51B42qMn34mHumqwqRFbEaeVm3AtHET4",
  "key1": "3UsFEwr7YMVf5QxpryNoahcmoP6LgojrV3cqgMSgt3KjXWoyKRiAPXNt3TxzHFq5cRL6kpyXMdhH9w8UzigibkHe",
  "key2": "hFDdtG7Bi9xnzaDFYqryqsF3HVqWianrbTWjNPC4zJw7aaT2S615U5QPHA2GAMec1yvodS4Rp1XjWsT73g56jD7",
  "key3": "2nwi9JPzuJo5QLw22cTVSdtB35uGEWfjwSEJD5Qgq7DF6e6SnDn5K9U5MciLZHgA4UBaPrcAWo4DUQBiFxVWqXmq",
  "key4": "621LGev63PgddGsjcJgJi188cQ7uK1jD5JgaSK7zA6LmpzG5Wy22G6vyYnf7mpFEnMSHaSwtdmuWaqtAbZnVGb3k",
  "key5": "44SSB6s5d7FM7S1qpGorWsJAfFQjK4KKVK7z6e3wjXAq6AY9hectK6g9dJGMb6u7fWh86QRTun2A5hmqf7KurnAq",
  "key6": "4Sa4yx3w9QiihVsvFrDpGh6Wh9kjxXudqHLZLPABxGS6dPCiUyMG87o7Mx9eKfS8u8dYz8kjwUBN8DVx43qFeAea",
  "key7": "3ndKSBjC5fR62FXSQSqFSeMFtfkyiZWjfz2iMnV55ynMhT36WmJJHbAedFSQ79aokNQqVD53DuxZnHFJT6TfZXUZ",
  "key8": "4uAVbk1rqtr9keiF3UMRwJd53t92fBfqA2oo54AXZz18BkA85AA253pvn8WnjVWvTN1HhApcbbiwuxYdPGSJtGCc",
  "key9": "3n8yb6GqXyDpevkRmdkhCx8Epv6U2NNh34S4fFFusRhNYqzBs39eXmDjfvxeRNheKDLxw9gYVBDnzhh7JWyCGRDP",
  "key10": "4RUn4Hn8TBrdh7jnQdHYbS2VeEJ1FZ5o7mzAqQRAFn2tu8MyJWPL14izAy9GyK1dywM3h3uyz9nw6En1SBwYZBDd",
  "key11": "2qa7muCRaNSEyUHV8vfSJQ1vjoYRmRQjtNkEowbhCUx17oWBmpeHeCXTgJnjsXaEi5NeH2JeGpwTsbxBcAYWiQUo",
  "key12": "4jGdhZF1UrkSRC2Yh898o2iaZKbchw9FvYN4S8VfMTRJn7QU8jx9LojAaQx95E5vyf4g8WqF9QBAadzYE6HauEb3",
  "key13": "kbph44RqWBhqTC7js32tdyGLXMCH4Q7wczaiWi28LWY53J27bpTQ3fhH5dHbUjchTNdfjfxtZKEGXtSbapakk6d",
  "key14": "kWtSjLvx1DxP3Tz884B9txKP1KZsp432h54wAiLt5sscHN1dwn23BJ6GAS2ZvFd9ZbSDv9v8B4ESm1tx7QtDYdf",
  "key15": "4zre8ofXgkB6iQLEBwzmrBh3jpbvBwYwEy53RZB1iBWqLpVsz7Rxd4PMGC83MJCo9GaHoH5u7xJ5myqCejMpggEj",
  "key16": "56a3nfaakisaBfJuuDs5sRMkF52dhewYFihjYuuzXN3NdsTEiJhg7n2LwRj81aEBxfDM2QidJRwMZMXWoHydVFmc",
  "key17": "5chAeQg49dECoEaBiitRufoj27G5VtWsM7c1L1EULo85hwttQiHqVnUfxv8TBnmQAjAwVkHwsXUsjN53DZcny7id",
  "key18": "J15NW8pfna8WqdLuRCoAhqrYQ7uW8x8mgoqnnn2zsp6hhM1tb2tEAM3DasJg8jMdfuWAp4tWmE5Lppau13nDYYc",
  "key19": "YJjeUSncNyP9uCMNs9W8JYyfDSuhebizEKQc3ZVzJWQNyavqyBVvmeEfZ8V3m9Z6yaPNU6WARfEoY9J16k45cpY",
  "key20": "5kSRrC34oknFpcSChyxgRzEfgyQuo4vnJ9ecTRPiysJsYnszqVnyeopTZ3b8fBSfRSc83BStPzuq8BVMkhjBe9Ki",
  "key21": "3ucFJsetKBjc2KQvxpMteNB71kjH4sY9b2bLUWjmapsimhufm5PRaFyyfoNVBjWwRTXgGAvjD4Z4hUHLmPHNujDd",
  "key22": "3rzdFYeB19biJA8KaGjShnFESXmcCp2MdCW6PtKHw93MJuAHWWrq2Aeck8aLvXqqbKSHG3xeQsnH7Ejo1qsE6JZZ",
  "key23": "3Xnfv7AmS2updE3fwCDtdfoW8yhASdS2wMmKAjZ1YzoESueVsrbgy8sN4LP1na7bJKHKCK2yvxzDY9jTLve7mQDx",
  "key24": "4jBFZwCBkvWYTWXN8R793MuSkjMoc4S38S1K4AxjiDPewszbHZTbsqCcu94cGc7KnkxEDgWaDiyzsHP1CyxTpJ9y",
  "key25": "5MQrk28EAQExd6DXhToNtMbbPoGQRjDGks9Gbhombh4czguJpZQehwrHGHP8U75XHeAQ4cFrCgX2nDwsFK1UjZ7d",
  "key26": "4i6euxGi5TX1g2r6ZHpvKwKtDZ9p93D9YU3tM72i2VCDqDXxBDuATQitXBMbRaYexn3VY76RKyREEMF9EamdUWA6",
  "key27": "26yXhHp67zS4BpKYgFL7qXZiiUPFgPDTLyqoJx4o49z7EzMxPMc9TghHK8ptG5TjnQVrtdwzb1jWjeDo3Vbx5PCF",
  "key28": "dVyb3cbFGoVfYLuWDQHPP75CwA9Psnja5miMzRA79saQ8t3qmraDz2HwstDQevEG5b8evH8dhKwv4w6Df4WfZgX",
  "key29": "5jRNK1CzbyMAriEq1F9pwtxwPk3WcjJu9j8bjnDpreizDivSVzSRDtmCkQb8Vet1WfJFehBc1d2BBCv6g1UD5v7L"
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
