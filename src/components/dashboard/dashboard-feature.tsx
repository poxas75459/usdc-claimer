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
    "2QWh1GEnAc9cf32znAdyiULR98fugNQvSNRF22SrHiNq8wuWmUf9gACeFxpudYgeKHZ81idffoQgbtw7eoAmECJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jg2bQGm8DcUzZeq1HWoo6TfikH6Li8tUM7K3iddQ1rEJsQnoyQepg2pdKxsNkmswEvJo2bQ8XtbJm4ip93rmSug",
  "key1": "23FYw8RZQ1VpzFhHPqbUqx8CYTRe24H8gpv89iM3ZaFGuopfhZHxyuWV5JxAhUwPp8FiUvUXf6VMwhv5VuWyQSbU",
  "key2": "294WHdEbahij5BMhCz1Y59NGmDd872VRJ9CUjA2iZYupeGiS6f4uaYoghp8oGwDKSrejEXpfwvqGgZhSiasTf7qG",
  "key3": "MKsPjXvBa8HrwM62Pp7bzbL7ht2sbXXN3FgUM5sr4r4qoFyoM6YoCZYEm2uV55sPjmThVzKps3yxttUCaWby6FV",
  "key4": "2pGWkU2jhiWpMMbDjL6RfdgmoZ2wwM6pjCiGSuvjxCbsd4EAY5MR32d6HmAE64V5zhfDXFYUfmDknPJJz83R1Xdn",
  "key5": "TVGcZHHLV9VmemetUTT4opnCwihKrfjTfLjzFRPpG1Y95rALatPAsaLgXaG8RKhZyMaN9zpABiLdbyZbKsrkt8g",
  "key6": "5yuDKTFUWnaD7QAx6AhaEyEJfFoNXaa4qYmH5c2WNgswQd3AFvTqm9vWqu18wxYsQmDmhu719pa13EjAUzan9FLQ",
  "key7": "5VvhdAtLBeQzN4CuMGc1ACk3H37h3cLucYHsvj8tkrsvKF8fdvPKZQedbB3ka7mRVtVxLPz24ZHjhaPLzAcpJQou",
  "key8": "5rBMQWVJgddA1AYfcmxvYCBsT2AkHztF9bHTqbKk2mzJzZAVQx2dqjTG16dCrChew28NV9P2k4CrwGqyYLnJUxYZ",
  "key9": "3MnUu1EAYGdEh4KKkH6ZhiMguDkScMx26scgN5wVGsZgwGbDAR2Qws3BRtgX3grk5AsWJZLyRSx7eWpb2CP4n7PR",
  "key10": "3K447DMLPJvRHNfV3cJ5okkDLddBFqHnU2YKUFebCop5JByMQ5DkR6nWdKNf3qjeHU3t8T6zkir777fG9T2Qcmvg",
  "key11": "5xXwbSDhTPVh3NMHyRu8nk3Rqhn1dejfGq8vrTukpiSwXLFJtSh8u5BheaXwwRwDJgKZEZdot6F7Ny69aCtubXgo",
  "key12": "5E5VgSvXH8bXiWJkL97pePwbLaAMcCNrvNfrCWYdUvwQLiVc4pybs47FxDR5n5yuBDoYVKgPTEACCwuwrwJ1apTY",
  "key13": "5BsEm5dbpSgNFf46FkKsErmuogTggJQ7WVp4QPAyWnvbSe3qQVkesoZTpW7Je7dVvorYXquMbkM8xmTU6LpcfYBk",
  "key14": "25hQCL3R4Xuqgz2UdWuLScMqQimrtjG22e28mWmgxxjxLyvD4wVvZPAjftv8SW1sc2qAQcZ6oD1PBwcg9t8sq13m",
  "key15": "4X2M4ua3wR9H6yetKmM34QvhmefqSt1eVhUvHF77JtYCerC3apgWPj9f5jEyj8zpRtS74at5GwzxeWireqoWKvcw",
  "key16": "4FL1t71rQKhWNerDvhn2drfaVHvPGDhATcYPG4rCySow6QRcQFZeDr8iQ9BvQbbX1E1nhkuApTxEYviPBPuBajXB",
  "key17": "3KrauJUk29oWDP9N65s5sW1PXrofaFoNUBVzpvdMpB6tMdG7qn9D3ipbNX6EP7XgSdYns3TZtUMcrocUUauweNEy",
  "key18": "4iaaDfVNUXy48CSaRK8H41d7ZTCEaDU1xkRmYH9ntkviVhid7AhUhvmExtAqMkzY7kRSk4jM8PvQiKBusoq2Rs7P",
  "key19": "38jJDVNqb2yG3b2t3nrLQJsYpiDAZ8Z5vjc8v8TvjX1qTA5qyJyVxpUw1NdTdzy9gTYPm5muuV8NgGNEKyAMA5zf",
  "key20": "2UiZAKtQfSCzkNfapvycpYFzzQ9gfK7nhgEPRcqeF8kBvszYCDt1wW54sSrjvLfrdfpDctRTAQLBnreg3EFXqfCj",
  "key21": "2xX9hJhVnEHzKZrhpdfnXjA5KBrDdE4Q9NVjazgAhp9v46hudbsij9f652oV1kKdz9Y5nYBNLSCgGQoyUV1gBA6A",
  "key22": "2s4d4wt8Rpv6vZnkX247EAYKXrbhUu84Mpg2xBc3wmq4nfsC8zBMbDbsVMprw8jFzqk8GifKZWQRkufaQznNQ9eN",
  "key23": "tDfDZkzEc9hpzcSxA3g3Q4So6x8pXY5tmeCbXzUFtjCNXMztjYNqr5DMDM7dG8GjFC65NZwvTfiXBx8kh173f2y",
  "key24": "4ZG9BeLaR2318grGLVhWrxecSXitLaT87T4X7sM4SzJQvGRC8cp4AMMmJqjDKvHCQ7o1uD9pqiFoNa5FSU9yDVic",
  "key25": "2NQ9J3LdDe3bPMUhc4bUAbX8xWeLbe17sza7ucUAvCv7KY6uf7sHtTdzHi8VibaVtYAVqtPApxyPFiXLaKWUc2bz",
  "key26": "4SLUfAKsFz3Ayf9ohLc4LdRBJxTMN7Vod5fujh9s96bpESeRAsqAWf8KZvEiLmpCNnUXAshC2a29XJ9QqHFKmpoz",
  "key27": "3H1pNBWXGnKRTyDR81yMurpsXytWw3dProAXyyyf6jXUfTjC6UKsojUPjkrzuVe8wbXCv9ktPVByH9QtCj8eNEcy",
  "key28": "4h8brAwgJp7BAg63KYpu4dgRpWjT925D2df5kuW8DUA4ebaKeaSsaeGnBCA85vZYHmWdeiJuRvyX1eqEh9pFa77u",
  "key29": "2aXYMb2ikW6oCA7EEp5UeAqTGcBMDxyNAfu9q2dYcZRmWWRn5bP1ACiRvdpbMSba97h9chghvwttNM2xEeEzRAoY",
  "key30": "3k8C5s6CfXCdhGcUaZT7HfkJC7aVu4jF7q8Sq9ZNW5APPcxp48j4HZq224emBYXm2RzRshN4YiGMUVfVkULQpUHG",
  "key31": "2jNLMCRYihJdLBW8MFJ6V7b7m1sHcgbD13c3cWtd9whQAHBrZis1fkXeoMnUYK5i7yMkDFS7HxBCPMhS2kKf2FkV",
  "key32": "5BCjiJUEZvmyubuNXxHz8SxkvNnJyYudSchtufmSYHKAtiHb6r55t6KfpY2rMyfp233GyzJfLL5k2awf1GmoNecs",
  "key33": "2vCP71LvCKuddgu3hqc4KrDC8A1AQE1D3sVwW8ve7tXYgsNxWXq8keFUD4jRV9wqDX82zrcSufsCVea8m8w3TWHE",
  "key34": "5CFMxG6zEdRVNpE8cecJk6vWzzX5xv9tjyUbsEj4b2GeUiSBModFGZ3WzukgffGMcGQhUCvP3cDsXiXNiy7v1ame",
  "key35": "5R6D4truRq8JF6xoCr1fKFGNXGoGoUrBzP7ZH3sBk4ozoySVfkSVQGQQi6GSGVYi187LFDWJBzi9XkwE2LiKCosz",
  "key36": "33WGKtspniJ2YPKVaDggYDp2TTVJnXPfn2r7gdubEXmJaqZXs3X4z37h28hFEW2jqogYtbjBXMXeAbRVAQMQGJ8x"
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
