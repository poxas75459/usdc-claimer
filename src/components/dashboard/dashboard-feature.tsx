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
    "4SHs2ydywNxzmeQYEwXeyPG6MvoDbsgHdhk55JnGKiDmPdEezsDDhM4sAuZRhnKwWZEbQRTuxau7NfLudoXV5rUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4amxP4BxhkPzr3SQsrSsHXPJCEUJ4DGq1k9Fjw66ccRK7SLDAzE2peka1AjUyvUPN6ydpHVPWg4RmBg8fWLVQB7r",
  "key1": "a4hfiKMXjYaUPDWoH9yAWYeAHhkEihemsHoWmrcaH6BFVTmgMxbuExhZ6FyGb7bwi6jGJZHyAcKokQdLMg5y7w3",
  "key2": "4YKuX6KyjAxrNM5HzGAzHDtWvRff3U7Dupw8KH1jzpmuFk1hL6Uq1MN1nHgyTnYKJW4iF4owkpb9VdYTQy9V4q4k",
  "key3": "38HLPLP9Yj41eKUkLAazpCbKPhGCoMPhToWaZSdqiica1yiDcHz7sCm7HxBew2TBnpMZciFr9QAkvSH7LPcw3Njd",
  "key4": "43w6wCBUqiGxs8F3pTdgur3VgSjSQm72aFTFXpKxGXDc34DZfciECg2mYrNGBhBP4UvkVaHeK5uCcJGiT335pbN6",
  "key5": "3c8dmg93w6e9imswEsWFAMk2QHJftHSjuSobXGN23haXe95ZZMcKKvG1usdC37yYUWxSQkNBYMtFtWvXFyNJiA6F",
  "key6": "5LEmzEDw4Amb2qh1vaEmVJzzLtwPC1LSEw67JxL61Z3KMxFY8DQ5LmmFY1DwWufPLeBaYeBkK7ry17Hzt1gWDeQ5",
  "key7": "CnFanKCAeUEaoGqH8pwVdCHTtxE6D3AcJJ86N79zeGaLLc6nU192Gd7GWKNv8yoJr3HBWUFAhAJTnrCpbhe5YQ7",
  "key8": "3yE26EeGpMJQW3UEju7VN4XYA43zHgHfoF5iPnsRLX2Nr22ncgKpmiL8BUHFqBWU25sA2ZH6a3xgfj8EVR68eggW",
  "key9": "5kaxoneDEaNyna7kKhTfixgPzEnVnDk7cdHAYmrb8Pp1nC2CRAFbCBwdp6xwm2JniLxrtHvF6bou5fj5u8kGQK8H",
  "key10": "3FTcNVPyyjsXPdCzzrr5ec6h1i4kHhHRkgwuhVz3xmRHstpiX9gQ11aJ9DDsASxCFwJ5YM9cVKfrgwBceeYko2Jf",
  "key11": "3b5TfA2g8sdAZhk2hto8rEtewwDPXRZJ1MoFE2LnPTemvKu8TbYNsxgbmHoKvojqMbeKyK7FdUVkTwYUqDffhkJk",
  "key12": "gBh4zkquvKpHNv9ev8T2FEQdgZLaj1wBgwSnZhFkHst8HKN9UmRLzGxxrazrrxDb16nPBPLJFmQp7Ch5gYT7Kyz",
  "key13": "bW9VjhDcV9a7zaGoHRL7vaYgb9N58U4KSX8K51Hdz4r97jHCntWdKZgQdkUnoT3WouUMtb23cvEqoGy2Wp2Yf6t",
  "key14": "fQ1QuTpbuaPb23H2SNtZygGWTEeHRv6nHt7DFJoYbykjMXXg6ygstQVZWCBpqvUgDk26dVdnjw5Ddp3hLeU6Ppi",
  "key15": "MH8vVG9ydh9SsZQUWQ4pt68fgbkVdnxFxKv7NyXjXTqr1vXbXj9Z4rsfKrYRGio1GEnvVwsXTdmUtBi41XT4jxC",
  "key16": "FYRwLd1f4ufB7bTHYMQ8qkRMNRSQLpeV2ibHTTL2xLTkQn3x4Mbqo3rdSvdpdUtGaaxHWQH31scnWQAPHWj5KRr",
  "key17": "5b3k4eBHBhQwMubQaLWGrPXSEWyq4VB1qP8xnfF4TjWH7cfnUUsmLTU8SauVHfzxKaJFccewHdBes847jAyHiqr5",
  "key18": "3p7qTLAZruGiujQj3FBgDAFa1B4SURkJ8ikS2t4BJLwC1N87CMiRsAwJ7oxrrHPc3XpvSYh6Brgr8f6Pv2i5S23s",
  "key19": "3g6abMpGwM3MA9ZHyRgAZDoP1EXkbCJ2ZeoF7Ki29TRQFApskCQxATvpdUVAAquEyjoAUwNd25d8Fmktq73eBjbE",
  "key20": "24v2n1Pi5w3duwPYLSHHDHjC8jSgTX23tycAk7LUxfsQ4PKs5Yk4mbjn5JhjD3FxRDKuuBoTA9cXhMj392J9Ka1C",
  "key21": "35h97ihUzNQATg97J5yNpPCAUQHgNoUyTiLd7gbj8XTS1zxn5AAcCVexWvXJjKKwxV5huekMTWcHBrxPd4uUY5mh",
  "key22": "244wKXmUe2hwH9cYvCeTRmg3Kdofmg9ee97kuRZuM91q8rJKPKqLvwskEjfbeuubyiUTshVJ6YwF3wZDRQwZVbLj",
  "key23": "5N1iao3bghmPdw8jXFf1XUtHqbpZ9SsRJGx8MRRRbXcLB8J4DCV6USXUdkEm7tpbb4yRbVMtELexJWBpah5ad88t",
  "key24": "8YjSdiGFXepFr5fvHKyt1WjTzXXd4oMxCj9bidtDF6DJUuD3ubNFWe41mMT5ykvhxSyeQj2SrXs88jiP4ViNxyD",
  "key25": "38o34LDijSacyZw3GRNTqd3Fn8YZai7YdA9tJVX5ktemHjPBZZgLw8rQEBc9kD4urPWqRJCFpRbtXKcyMCXadwzd",
  "key26": "4SaLJv8jqKgjemcGajbrePpsTKU8ip1RazxpUHqJVDHvDtrbqvhyncCD5faMip2FqPM4W2LCXs8YsXcTT9VsLpZL"
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
