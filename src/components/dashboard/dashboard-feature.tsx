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
    "2Ffp3U16zY3GNoNb5k73Qrjn4PxgG2QQBr2Z6GN3MeZjHDkQZKXo8FVQDgCGDyhKZ8A4dvvHoDHxHqXPipk2ymwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvLJwZGtr3bTjJ5EZEbJx96gzYWtVAkRcTeqhr2qNj4mpwGGRrqHaih5Hy8R4fnm4jJpdun6YVQfpTrsSqf6tsT",
  "key1": "4hoWbT8quS2iKGe7LbH5jHtMvZRmdZtYhyce2CWe8KxrN8y8DqpKAGz97DKh52uKtH3LP5iZVzanARfFS34aTzwA",
  "key2": "2u6xWerSEzhkNgJkcGdroetsPd8cNArrvpE6P2Z2rEV5caFWnijsoEWnR4RXT6dDsTJcLCgrq3NukVTqvZ7TYJf5",
  "key3": "2f77pja6sYBPoiARr3ovZuo3zFWKjsZMrc5Hr8W6F17ZgZu6mFaicQu6h23UGV96xMDzcLdQ3WCNt6XFVHWxAjTS",
  "key4": "4dnmhHd5RpfN8DR1rHgpJArtXGuaVc7xCUvinbTx8dS3HCaXsASk6puJKJM1f3f69yXAiLxuvHj96WCaBwx3yPJL",
  "key5": "5K3H2kTx1Q5kZ3D9di7U5DaPy1b1sAJPChyAZxvZATu4d2qutJx8JrV2jBEiVAoKBfBGjc4nW6WvbPjHV52UPXZy",
  "key6": "3snptNEEVw6Gbdv6uhaPXAvc3gVF71mdBqZSpMm6gtra74qxbzEwXtTk9dpyBMKCEcRW2FCwLKg6GTSAF9u3Z7FY",
  "key7": "55Lniy1Qv26RSjsMTnm5v7q79j7rL43DwjMLLnbAaxeFjkE1yyDKpmE9VP6j9F2eTwbmsgXANpbGKqLhzZC3cSqE",
  "key8": "34yoZTY7nEZak9834UFET8oyi3aFAQ9qoM2wWAkC8JTZkLMMxoFwBujQfjofyj39ZmGQ9WtaznkhWvnPxPpq6JYA",
  "key9": "4vEZ4JWifNKGPCaup2dYC7D8woRFomYu1XSLrLdUnRaH5rbv1gt5hRkmjn93ocD9Md4AH6uwvKS67Ljwze9Cs1KA",
  "key10": "YVifhxehgjWdzjPa3sH6NQFTgfezjzWPdb1BsFi1P7RBoMWgAbkec6SSHxr5VEnYWXat6ygziYTfkwEmPkS5wbm",
  "key11": "8TeUiYftZJjBcx87MmXme5P97ThS4MSUtKX1FKZxfxarekj4CANaEUfq1iAoFmgBgnimV3YAqAmCuDq6EazNrqj",
  "key12": "4npZzpbHn5iqBkFmgQpNDsxvMYo7KvM6P1K39Myv42h2uGk4VwcteYVEfgC8rESdfftMQfXSaBsaThr8SaT2zhtc",
  "key13": "KfkbqEMTzEpdTS7BkXZBmeYWhY8jRYwTMKg9Em6Trt8PoAsxqmUCNy1W3GTgvRXzxHwkMyKrAsd3sDJ7zq5FZAt",
  "key14": "5LyHyKandsmv8YdyXa2tPZDDyKDijwFS7BeHRo3bcLicEYCSva5PsthUwXnFwNPnKHFtVC4CKiNDQoLw9X7vzmZi",
  "key15": "2uVJQc46Z37GwVovpCyUMmR65xJrhM9oR13LMvqMt8C9LMYfSfFCiLgwqwDX9K6LGg7bTASM1zcbimwgAGfW4xX",
  "key16": "Vqsj5RnyXWMyf967f6H1s8CPe31vDcL7NmdHTnHbkx8Y7Yzi6Bp2i18JiaRw9skM871RW8CsaYRJv2rk2DL36wP",
  "key17": "sFf2vRBRT62TKm5yv1wANxJ8UvR6QnudBRYDqv9L9MPfCjHMM6HNVoD1erTbr1dmBNXPQXcbhEqhFrKLqTYuqhn",
  "key18": "3ToWzHkWZ6jmG1b9BD9Y9rJVqqob2dxczgu8RuexserdGbwGPUxFPWkeTUSAoC2Q2yyFkfgEa2tGPdMQXCn4U1gX",
  "key19": "4k35kdiAKtTECXwJDx5XwN3Zrz5uJJYsU8zMU4xcVwGQ5SBakipXprXsg8BVQW9v1mm6XCfnPhL8f9kT48MmC4Bm",
  "key20": "4XaQEtnJo5aaku4neMh8FobUu1PzmvDFAmbivjVVBEqNzMQgs4jVBnYYPUYLqaRHApAiknePLGFCMeUzx1Sjifug",
  "key21": "4A4WecD8Vad1PrSfpmZsw3Y5QgA1NuBCCBo5XQLceuqK7J4DzpWpvbPkfTtP3Esb4dEk2yFjV9AScBFz3FKWEqA7",
  "key22": "5u4g51yvbCxTUCdtw6tE9snGwjfHUu2eZhSwbRizRfgu45meyPwZMQT7bAY1H49YGfj5UQoCNd9s1tExR2AqfqMj",
  "key23": "4W9TmVQmSTbPSRayhTd7mZcpRznFgjhheK3coQFj3S8zT7QxXfoHFQwaoBJ6WvZgemnpnhEU8JKJHsVEv8AkE4WJ",
  "key24": "575Qv9GKiAwHi5bpsXL6csyjzBCJFhQjXhyKi67mcFTBoQ3ovEfFSmFpv3cm9XDd9SKvHuJQqTSngebaxdSvu9ZG",
  "key25": "2e8jnWwq3Jgr1fcDt4vY3i7G75vqJ6oj8CnZjDGb1THL5wEMcSA5ozskETViF5mm9sixaWCTy65vimFcxADN2nxt",
  "key26": "5UXz4MvRHKFtfqyBWoEhom5m6Q2prcxdYJGZB39ccHXws8W9Df9TAFrQvW1hyiYtqWuFKt76VKyi9tWJzniewQJW",
  "key27": "4JVa3CGW5G9nE163z7pEqdium48N3dkfZ8sgeftNX42oBbnxNPKVp5WztuhdCUxhAEVwpkoSQuPzePUuwgUSd9oz",
  "key28": "3nWPmPmaYeVN1hUFKeA5KxuefL5wzB9dRQMTt6NAUQbjHqprUQUsyKvFFFYjhBREG8rYR348DW3L4cNAMUpjAa2G"
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
