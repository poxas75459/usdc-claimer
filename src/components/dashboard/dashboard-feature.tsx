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
    "4XW7hfrN3ZWT2UbcP6M6QZXwGtqEvZdhE1qRE3BCsMXiSN1pKVesY2ezEH1kAytPNUDuUrrctdw6MnAjUhGwLiEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "449B4RSm9Zc7z9C9BxK4cq54ZA4id1eCwG1CR6NuUHftkBWkFPFqajkxVuHUWD1eg4bxJ8Bzs27ZJD2ZTQM9oqQ6",
  "key1": "4AVwAumTMqzSkJqkGGcHNApYHeqScfztwiNuyKtRpuMtdwAtcUxgzwNrX5ZXve8nLSUiJn3uiNmbpZLbezkUvhiu",
  "key2": "jo4wLYnBXSmDzhxQmTQcreodKDb4bnKt7SRAzJoxaSvNdUKoPYJYvTdYS9eECyfeABYJ5pbrdi31G5WJSW1NEar",
  "key3": "2KhA8mhGJRoqb2x6cqBA3Ut3tqiEy1vryN5dmrtcwKDuKJwaQ7h5jGUpJZYdaFnPprmB8hgMEv7AcYrBhy14j6e2",
  "key4": "4sgB6MfonZ7gQKMqY5u4A1Gx5SS2hhL5MFgBfdzxLTyVNBErpKdMukDMm3qXcuHsSK2XPVJbvHCLoqRESoe8U4do",
  "key5": "2LF58Fs7maw3r2mWPQynhwYg281WSk6udo4N3XCLAqDZpDk1LnAkDsvz77nUbC9sr35HC2vmVZn8JFHyLNWwBDPX",
  "key6": "4FEraxc5bKG3stqwe3JQKjbjgHBPrjXJ6VZrhHaj6ve6TZJ7LyPQ1jgLKa9Xx3HKdrJEyvTAD1iL725MGdBJJSUU",
  "key7": "4U1DXHHHfdPF69ztbc3jnHSAg2yw6TmujQzsLjJd6Sjrrm8TdE4pmiiWZ9LPFMJUnmwgvEhKVzwLwcCFLtC4PVC5",
  "key8": "3jLNVVp7pncKPiqchHniurAxh6xM3Bk2dnzzYLiar57aiZizimqZ48m7qnXE8XuKabZZaaKmV1tQryHHfjkNNnDe",
  "key9": "5Qnn6M2zdNh8JoEN3z1AMwsVXmoPfaAZhj3mxarCgc5rWhwgF2buney7uvyrVvTZtgaQGGrcn8TCPSuAUyLLFVCJ",
  "key10": "55FLJVwBA6SrqtoVT4zC5QdTkQ6L7zTvdFtSH4jtjKDFtTjJjXikjScRix1KXbfJJmTF5c9J4iLsPrBjuoNw8Fhg",
  "key11": "43Uv6HRDzK8zmo9GfchZhHMttUFwo5A1ZtfAoYPK2zAEqcZu3PM2eeMk5wwLtxhuMi5XmtU61iat4VkSmHUy2iE3",
  "key12": "4Sx2yXjSAVeeEcsZ6eofExztoiPteT9RNZVnWRJiamSQbDYVXC9JjqFT9SAeUBnNG8f8dS6LNft53zAex9CRGeJL",
  "key13": "4r2o4KsterWPKvp77fLC9bh9gUauh26gdav8po7YZC7vrWXg4ZcSMmjiqisTq2Jc2Mo345Vdpo5jEb4CxMifVxRf",
  "key14": "2FPzkGcq4obTJFRHPajHVEqixrK6mBsFgALiQqvfCviGSNtwZniyr7h9KGA7SiDRRg4PshLyQ8CG8yRyQBjfdBgQ",
  "key15": "4bB7FcrekZ3yjr6ijxQEotViTe34eSmhvoqD8dgjWy9DzC4bREDHk5ZndXg42VTJogU6tKUH7edsDEim5GVZM5EK",
  "key16": "5oydKH6HELFY7d3v53XxC7544QFvqMdkjSxS6LkfACLosV4s6dzRq2gZBsjJZS4GDW4UN5uHhejLHJLy6HasLVmK",
  "key17": "3zTFuT9ZZ3QZN4KG18pEXqVHCJ3iKXbrswCwsMjXByfy9jNrXWdgPc9mN2pw7PaDSjef8qpzZHq5x6ZGKDf6xVw4",
  "key18": "4iv9tKSPQAHLPe5va2kZwU4N7Rt81DhkCyfMcs8oQcLfnCEFa8pTTA7kMnV4nx9ZF5NSSLBKWnYoN9UV9nvvShur",
  "key19": "5Qvm4oT3HrLxxkWH3H4wkdzSVg4ZRC6Zp8WbMWuZbBDu3uMV58AN5EJuz6bMhYYWZNDbun45AUhYyhsxUd4RWD5o",
  "key20": "UGTg3VHJwT7jTPLigrzkqqSNTmoUsehU6xwmYUkUJKJM1oyJYzPLbMYyaWqWz7pL7BNLUpUNywR5DVdtNKYTqYL",
  "key21": "565nrp6KLhy6ZTeihudovbXZNqxMtCAtMdG3amGNEWrkpPZL5YA4KURvEfVUMhR8CL7TrXNLqSgcmYMzrcAAw9JP",
  "key22": "4Est1wrjSz89cHD3bBtiqfdoMHrfzDxcc1g3TCecJsqYS9LQvbv1JuBxLU11Zdo4PPyHPt7da5a4xmaB1y3S7DN1",
  "key23": "3xBGBMwZZANn2ums72M4BagqsHgJUJGAMrgU74pSoGvKXEhwygGHdwNffdFQT7ohC9MaWujzTxmXvuKEQGVowgw4",
  "key24": "4wTd8wVKHKTTRJHMuBZyL2meeZk75NWkPmx5GcXxbfttbVBFKnFqMjNnL6PTeTdVRHKaGxytTauXFpGNEQjBeRj7",
  "key25": "2BuinnWS9M4qnh7Pig4rMk2TF7B6Eqa5FAuoqg8aZvhsfWEupREGZL5qrcGtW587WP7Hj5MJC2EWCeBcTVEPZNjH",
  "key26": "3aA86BNWeA9X5uhmq5VnMySwbZ1xuts2s7XCQTDF8mCcHxsn4Y35WHk6GvwrB2C3xVQuB4Ref5mJPKX6bF5RexqT",
  "key27": "36i99J5kmyjiLWNquPzFMcADugnj78euPKajjweAh1xQWar4i7NXcoTArN5hPFYUCfY39TtPjL8EoqwdQ3Ybzz6C",
  "key28": "5ZeJxmjpRpiqKMSAK16TDq7UMZhcPhTX9evqbRzagGZpRHD6dWKUuK2o7FXNFaRTMTCBsWyJbWMMHmtFCadzNLyt",
  "key29": "4Lbr97qr88CFnmDo2mqsYFixAyDBeQjMHFHVuNGTrPP7QzFvmZKJcpbpBmwCrYdkank6H5BnPdZ27YByQHQiYQEd",
  "key30": "49UKmXFvbSjoSoBH2VhQaeiVsKw9frkiCcav6YkcSPGnFtSiW3kWYBdXgrgEoi15sytgNr9ydCbFmUoiy6cVwi28",
  "key31": "4vuqDvgqg9ov6WeLMJtKk4TVQ96caSmAKvQxwScCrXFfnAzi7RRMofAQ5nPyXeEqNiMNWdFYJ6LFNH9t62zBVgkU",
  "key32": "4egnFp24RBjKRW8dQuUeQFqoQNnVp8Q5PJHUhEaMq3HrGERSa9EJKVTkgqJUXc9h4aYvKnzUcPr8YEUVRd83oJMD",
  "key33": "3AVge4djk4FWdYbbpRDR8cn16DtuMiiSMfDogUTfFkL7NFuXzy6TDNzCqKMiCzTQDwCGBMNvrYG8hv8sCKk26f7L"
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
