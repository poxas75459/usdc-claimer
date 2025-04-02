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
    "TNpCC8PvoXgxKfmPDkUSVfSpShhNLKmLYdLmFNPfs9w2qiBE4qeUGzpEzAhNchaFQtAvehkz45fJQRZNz6fWAQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VT2oUcy9ELQoaeoeoEVj929AMDjeJrPCTtZ7Wpm2QSfM5HNJEHQmetpvToeYXFdyTFN7ZQ8TgagVpnEB7yx39R4",
  "key1": "sGZP9K88rmfNV12zbS2UerPejLcpMSkRQ9xG9HCvtTesqCJwNgLy7rF42JHbDJs4fLvynNUHm9mKKr4g3WMU1oh",
  "key2": "2kkHYDF8uLgRrhoMUZ8EeMPainCRY41oUD9PqXiSuHXjzz8QGYYMP2V5m9wxZoGstfAadDsJWUEqZNz3o4CzEgYq",
  "key3": "4Kyv3QaqTeGZ1conH3Vno1XBpisu7xfV71fTxRoRhh7zkLXzFeifN2Jr1gJGvUtwda5jo6CVUmtrHExzP3c7V8jw",
  "key4": "36ou9HdPg6H2fNtuYYW8vT1baQUpa8my7UmkrJzujD1vttynMtoK9DE1nJdSeaazbgBhyDJJv3BsZs6Dp7y3G69M",
  "key5": "26DiYN6bzYXTE8C9ptQmegcX7me1LT2AC9CErmV2aoCLRo8U7BcUWHhhaczDWmGE96BSPDjAhwRoJtsg7s4TCFkS",
  "key6": "2B5wyyAuGzfr26mNU9p6eYvYKynTAggCsYkYL1dwB615PxaKfG2EekUmi5fuG5VHV5AzyuqjBTEPdJ9movFXKzN7",
  "key7": "5gEm4UmizS4Ssho5tgKTpRdmDcCurNvSSWZjpiX7gKAANE5Tq45SVN61VJ7CkFJVAJzA6u5uRcEnACuJebwtsosW",
  "key8": "TsaxB79pWWWMur5MPjGbwnQ545cdt32oS4XPY8Nw8Y5aFs3XfDnmu628xJ8PaGyw4vvPaMnkMoJC5R1b4hFM8Yx",
  "key9": "3WkbKJRKdwsygKMkHgKxv7We63xWSLiqDJtcJ3X1h5kAeptBpMgVmo1RZowXTYGBEmgPvdwQZYamtWdFXAyAtUZM",
  "key10": "441eeGvsHt7XDRCT65X13cfhbMoRwXPAm8yDxRc64bLJeFqXYjpcH1C6B4EfDNfPfBC7ghqaeWa36H2hnusySYcn",
  "key11": "5jS9eaonvnEPeGxDcm6xhHFfvFm8HF1ZQd2EzHB9xaAmnPAdEta8fMaewQnALazdmSqAKnuh7NuaFcf233NwR7aQ",
  "key12": "4PLVrNUhVPQuP9e1Xxsrf22rSvBh3dP5vAuJez6iFPK5R6NgnJEY7oAXicJWKQTnqT9ounBAbf6xfAt7mZ3ukoro",
  "key13": "5JJP781fzNSqp35FD6MDUQwRTJkfrBJf4TdcAweWqohtEiRQJF5NvLVnyDT85oLUao2g3ETMQ9WLHETibKBz7mGZ",
  "key14": "5UMwrKpdYxnBfUZ9hxTEzinWvvjvztbh5yYYH8hc7YXTVRozjFQ5Q7VkqeL1aswtK4TvLzvHc41JiJ1zYsR4fXEi",
  "key15": "CxVFxqRGbbL4SPvgtCMCVMzL4eBtuyZNX1HXwaSMakELVvyDokjM5RkErwNM7pLbCLumEqKsL7sjyngaaQC12Fr",
  "key16": "4qWyZ3EWs5Ms59GxmSK7Hde99jLAhTBh5GjXzoLTfr3Co8ErALYTH7Zm3GTZyfr3V9ArQCH9yv8VEDaN6A7a6LkX",
  "key17": "fwrehobBxjVL5Qxr7kK511bJ3hWtfpBHVyPC65oRnbd7L2xh7LDnGfYcHw6YUyBuvApXYHAtS46T7srYdTAJDGu",
  "key18": "2now4DMAa33i8nd3kdTpcxnEeqJ6FUZYxa2iYFzGzpoAjNoHVc8PYYwnsyT11thXkXUYzLBsTeqFxJGyocNBM8UM",
  "key19": "KsJKWVSvn1qkdjoVqGfGt91faWhv7aJR6bWrW9MAEtmaPpZxUc4u5XKWo8driSDFntCSQ1n4FnY9vMhFCjBGFJ5",
  "key20": "4r9coPFMnmTidmtaeMKgzizhEAjnzcnwYmHBiYFp7QXcXdT5fjFVXBEVfQHg1M9termz2WNdSbXzn3i6UM7tdTM5",
  "key21": "4mPmA4766287ChrqcDSY5Z83LmTWRnMWEzpZCZyAAiKEwbSeWn9Vvi7o7UKmWRMy11s753UJRZEr4UfxGLZ3r4m",
  "key22": "5gh54JJKfUKJcszD6VuZUJgP4kdamL7gPGfDucdwq5in2PKiC3qwzCvcy8EDnurWHeSr2azmgVCEgBLV2aU5y2cF",
  "key23": "4N74Y7M2YbubwnBMzDbCP4vbXM3iT7omnrpba6apRteQvXFZBniaecpSWQ1bk5Mx6BYVzubRsjbSacqbhsoH11a8",
  "key24": "rZ31xuJiQp3AGbB2JtTjjYf6eWEdoLQa6Kg1quugy7oidV72p8KRDoyg4ac6YxbqsEAHv6jHnFrvkEBkgicz8hi",
  "key25": "3a2HAadf2EdTJh2mqqX9jjF8umbqLfGTza94im19omq6SfVQKBxgz8CBWMk5mHoQVkZoLrPkeoiC8Z3nr42JiBgG",
  "key26": "2cpABR4RzStgS4upXd5ezfWj3Du86wSwtRq3aNLvA2tMfawbneyji1vfMbpEkL5DYEnoWpxaKofAWJPzfXJd3qDh",
  "key27": "3oYPr82j1wLKMyco6iR4ePP86crHfF6XsjruJyP9aQVVWJ7TSJzfWt9kjBFe2xHHqkrwMqpnmckiWM8bq8g2aPzg",
  "key28": "62WgGcdA2GySVUnhoJVdE8EsYWcTAkY1USfV3kVZxx3PRwGTxMJjab9z1zUWTJRgMMbTMKX9syR3QxRdWJxRfYj5"
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
