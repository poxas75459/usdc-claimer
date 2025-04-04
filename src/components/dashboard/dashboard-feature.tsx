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
    "53D6fpsTRCSRGstdyJh9uzB3uhio93tMgtYWo3Lf4gemoT3Qx78VJTqBEcbhCFzsArvhhjivySY11b8FEj1yerWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xNWs5eo85idgTEwrEyuQjwVmFSyb4uRd8fdzKwi1v32rA5DwcrmgK19NJ2tUcKxY2FKisTfkgTuFLBSa9vdWMhp",
  "key1": "4vDw9bxAkeB1wLmNHmabRMzLn335K1oxEimeghTZP2rdrc7eUCgyju7BWSwdPZadp9yTzPKs47iiQq47RWSED73k",
  "key2": "3qVPBtZz88M72UHHAkvUpaGq6unqRccztD7aBG9TtbnycMa49WWYgJJLnWFUnHhRgdfN319u4SHceAXypovtofxb",
  "key3": "24Nm45jhqcBwUcHiXTMaG8BSCwBo47F8CpA5znhhDCC1PGcFGJbwjHRVp7w8GXXoD9KdJcgexqwuqcCDUP8ntLTG",
  "key4": "3mPmFTpmvU4uLSVdM4Y1KdFm9c6oejuFy2AQ24cEiUntdb8QjZUag4vtfg7MMYvmiCCk4i9Rcz6KaD16qzhN5oyE",
  "key5": "2wuG24gErM1TmySf53i5BJRCYevPXm2tgPAUjn2W8DcQhHTrJBzVWSNXCeixHAH13iZPD7Nqv2oePavMAtjo3hsP",
  "key6": "2VmRn5zuQc3nnFC6BXqxMYFMS5taGrg1znYNkoW2DMrdbFCaLahxqhzQiykz6eX6iASQF3Np7o4TawWZmV7jNT8i",
  "key7": "2pHC4hNg1FLRTzeAN57zF2JR6RwvggRAfmYd1qtaFKuiDoRaT3GZVLxxTTxQaHowpbsQELXdMSjAgkjNJFrPw3e3",
  "key8": "5usEgESxNcBBYc6ZaJRnHX8khtApzPaft4o31i4Q9cadWTuV5QjSaQQi4bAmvPvTDBxEwXsFzSyqq2j8aLXYHGLn",
  "key9": "5Lc1XaAyGRfbQ8DVj6Qyq8LLp1ii6YxaNZMnQT9Z3kYGRSqqbiqjNU3LpZ54ABDYeGrKaBoN3Wa4ygQq12ZY6kuQ",
  "key10": "3v1x4N5xR9Xh1bFihermwYA17kb1vYA5SyTAVpdnYLN4ByiLQrgk1DF7D9XJ1w1RGbuRw8HGLrExUw4pWSeKndiw",
  "key11": "5iVh7KFP86JmU4wvtNGStKh2zT735ng5GVuP1735sbGiKhp7eyHjxdeio2XWVZuqdMoojZV5m4JRMeqR7w72DxeA",
  "key12": "5tvw396aKF4ywTjQnuJL3VRMkLxF3Ffv4Rg55x5eSus9FPTQANVmCrfjHibyYoGX2nPjCC2pcNVKTvo3PgVmKDF8",
  "key13": "35CSXKntR2kfqo8NKaV9rRG7JYW9Hquc6U6pgaZM5LiY8QaBXDsEMaAf2AtkFmJnhCFoHqTmSE9eEvQfQ5b1nrY5",
  "key14": "GfLWAiRP7x3WsygMV3KzQEnNnm3acPe5mw3WrVsAM982vhCPqwpbMGbHPa6NkFtarBqDFu2y3g5HfzMeCJVqC9t",
  "key15": "3fHSzFz7gm1bDV1CqF3AzG4dfQUVE754kK2fcYy9Yi69DHpewSSJyckaSLNADQ9463vUjRX43zZwS1V3TnW1yuQq",
  "key16": "43Kdjdv9GLsR7os1WfkiASjEGtmtXS4AYHsr2h5QAR7t1iBxBW8LWErJjfKMKQHQnhMamkaBwp3xD9nFaATUQYLf",
  "key17": "3jS8dPhqyGextHtY5AGpesmMbMdpHPYUTHUgQgJctJRiJn9SiswkgdGU44cUH93kjK7Rt25fqd1dLAsgv9JDss2M",
  "key18": "3Xp3zbZjqxaDvwDjvUiykcC4vHWjQBvNTAo1KveJixy7GXyTuT1eZAv5xkqqff6cgrUfNp9qsaFvQu7oN7BJnCzW",
  "key19": "4vZxntMRV4W6JnTFza2gesVD7twp7JZAQ2XDvLFSQwzmEc3hppWqaWx4jnxWmvZpkkYxjkxUG9kpMha1jK4MozKF",
  "key20": "2WozSbHwMZwt6ophDmFwTXWKkHHisvASJeAcPdmortod3jsJU5vFU7AF8ncgPNUhRRWhUD8sZmnwMWSfyXcg6X32",
  "key21": "E2pCr6oEkx4LoWrY1obMwzU1JYQV8e7sAAEu9QpWFueRDp7586n5AALC7VHYSyME333Tf9LRZEHpH8jJSBYKENX",
  "key22": "2FSjRhbeRYugXHP39F89S8FYqVDKh7JTTXLyHbnoLVtFWC3iS2iqZp626KoJMvkPitd1g3DsmvSuanLbvfcwLEU9",
  "key23": "4pPWHgyDfgK5faQJ5SkxdirCN24gByYD9wazAzkFSVKbYGnUoK7zDyw5Ybyn1oVd5hiEErvV8KqYe4Fsz9psjsWL",
  "key24": "bubfEG4ZLFVy8TAYUDcLT8Nmnswf9Bt11nM96uvyqSUyrdA18QcchvKbbLkZ7Uwv1jyfqpkfsrRh1uKNAEdt5Jv",
  "key25": "5uYhrgkCcyz6AijkDZc3H1YVLN2sR3kHChTWhvzkFdY77YY7Pxfbx5uC5QWKDnmvbGBBvgP82rds28vSufpx35nG"
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
