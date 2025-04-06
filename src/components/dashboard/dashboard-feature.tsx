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
    "jiVKSXuRPNrDHGLxPG372j7eCueQUs86vbWRkwd7ySkP5TQDx2nkdeGJDj7V2u1a9evWFeALjNG1kg5f8yv3AU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dM1AUyEt9Qu6ZVUjqbo5dYxcPGTqLXyu34o6DSLtdrk7aZXRjdgDE6W5ZQhnwMorfcUcgGWKxGYbo7TyWuGJuU6",
  "key1": "2hbpczuf69iqw9v271tiLXWpt3wzWZJoAS3kFgcB1WrbHLD6JxFVF5kx2ddHh29Rxnnr7xE5BSoPzeBrMCvNwnY9",
  "key2": "38uia1LyNztSDK3DoMBCWJn7SXhd2gYj7AGn5zAFzvo5GxyJ21yCD7GgEBA9vhkqQWQooHVdjwN4NxAaH5D89x91",
  "key3": "5BkpkxPuPnPYeVcXL1eMhzc9Ed1Y2FZS8DyZEqVWoXVn2Qy1FiF2E1sJENLjCVh6KTn8dnwqTcTqaPWBkbWt5JM6",
  "key4": "2Z8RrYPSkfM61igwbS24S5M9W3oXRkH75tC2p5goPypkX5MQFL3H5whpgMAqPbSPnkLPsR7FWnKNS4nruekWMKzV",
  "key5": "4bCjpkhfYcCkKwfXwzzhjSGeXEgyzsxzdRzxEtGNctZAcMk7QsZ4nVXGXqUpmgMLYMvcNtckisT99fH7wNykFaQb",
  "key6": "2uVQu6NYrDMMro91dAnJgJ9TwpXrWowWqgCF94pHasP92D62bunCdp5SU7dMvNoTxeLGYFQGs5PgQdrNZEgQrxyx",
  "key7": "ZgEveBzAZ9wcTmZabDcmqCngH7KUmQHdQRCmzFrBXfkpAGsbtFht7anot1ZpTgWGQvWEpsNsP69cUW5aogYH54L",
  "key8": "254EUNKGRu8ExLEKpaWgrzmjNiWTJ5Qc5DT4WdSPxViVavt1RiivjW9cFtva3LiS8NEWtpPxGEf3zi9Vkjj8Yp1P",
  "key9": "4YY94hrbXt4rhwJ6QU86HiE1ApVxSDVnRhuX9hwwohHruQxB2qnSJBL82SWooCJKUrc9ksDXoqZru8sFoB7XotA4",
  "key10": "5r1aTDjecW6YCL56m2f3Y5dzDhxPTGjHgnPTayKQrqVvgSPMhjFACSbzZegmYRJmk1icjndvsoXDGCEvyUGTLLGc",
  "key11": "DNS8Cfe36xmVCXEjD8irbmGASfWyMeVJ8kRJLPpTkCDRDBk9VCbHEYnuA3gJmQp9v2P43jVmKZBQM8XrsWJ9LpQ",
  "key12": "qLoUncHa78WXwXarPPxsSHia9iveLxe8edDrTM4Ro4bDRqVt1DNNm1tPd4UjjRdPrXYpEQA9PtKgxUrMgMwhSoo",
  "key13": "3zWmRtZMjZNo9pDqSScTcobBs7rwkqdUSpXXrsHhEwdua99DYt5nGa2EyUsbovZ2gVhCqtHAk2f6SXgbdS3XGLh3",
  "key14": "2wJeK8cKqBVbSV1Q3wc7q5NEPsqmmNuVdC34qQzqMFwQc9ushCQiao1r3p7v29cNoEBdDAyh3iuRm2YgmHEjow2S",
  "key15": "pynnFjNpjAXV6QsM9FBJDpKsBde6RJGJgCAw1MLrxwbPJug1Vr8ce8ug6FsYfyKbfaSRDn6oQGnHkdNWWoKsF8A",
  "key16": "42kFXHmGutVV695sRUE6SHLyyyzmX6yNfPZAH2F9wZfRGtxv6GW72SucXc5RdM48RvSjjRkB2v5nJY6zthuHZ6fd",
  "key17": "iXn2WgSzWnkhDFe4moEf3BG4H8eNhh3EhM9ivyzUvNTQUBYQ9SQt2tFwPSqweXMH6HRuyJJRPb7ZwU52XQnWwZ2",
  "key18": "2ME82PffVm4cHRhTqfjptxJc6kNBzCAMNQDe2Xj3Ee2d8URdyBiNUcgXzAUmGtozk6EsnKFsjX6nC7t6162pjttR",
  "key19": "cWjbBq8kxELr2f39PhXUifgK8dzcNCg73aKsQVrAzw8NkG6fzRkUVieoH235JwEvnMa7XtXg1Yr19mZNsVo5Tf5",
  "key20": "kWQkYGn3jhvzbmt9XRBb8vLZkM6NYVozD7KnLcXsx4xwWmeX7qVCSznicqvWD5QabV3ZEd5y7NRWrbfksx7YiFt",
  "key21": "4Jg5g7yiHw9QK8ZoBrJr9niQo8DQhGdaiNFGQzoMnSrUcLaHchNtBhViAqWHfgwHRjAa4nYYm5UVgsWWtskZveig",
  "key22": "43AW45gbEia4X7h4S9QT2yTib1yEbAAxwaAGD2U9ebUVcSLufCn9yJvXnyY5rkDEi9v634NAZtY1EXTHZp2QCvA6",
  "key23": "Gkgiapvv6UMej4MZsmXqMdpp9ZbQyxGMPdcVymuhj1ZHMkHnyPikBnUd3LjbRVsMJvohz2tk8qq6F9qyypdtbXi",
  "key24": "4gXWNPteWRVEDL2tWQwPNCwDQYDiwXZakV7zjAiJKPNsT36cxqfMjbfoGYd6DWkTkV8zuKjfyRhAEvf2L8QWQFtL",
  "key25": "3NQY7y2Nxm74TprWP6BAbLc1PyBsXJ97ngeXsbxXHkjb373uzTJxFs4MJcn4kW11xHSHe5c3hZV9Evkj5xEvBVZs",
  "key26": "3Md5bAsQuXQFkz3jAe19kU2BtGRALikYAZhY91VQ8RwyYuMUeBf8C39FiwAg67Tkbf8mbZtgAtufrxotYADw8P1E",
  "key27": "47NcSPPpE8JWMYaWtnVqqbo5feXwPuj9uDyZeMfawiux3UPaSnN3eJFoGW8hyQs6vAHL5Q51s5s8wf5tUmZs1M5U",
  "key28": "45UpjRgzQTHyHY6SsWC7tMssiJCwWNx9xphPQvqbgWNQfstdJn7SkFxsEzkafjdZKtbckTYqM9HsTLMsmqXnqx2A",
  "key29": "5n2LjpwwVbuyeaUbZ4hqbGpTsgPobLt145UQ7zhx7zD8rV6fUJW9TriCLSeJxQDRCj7tKF3T4fjFzp9GfpJ8DyWJ",
  "key30": "5EHmmM5V6F6sSvrUNTunqx7bDLNmQPBV3QkdxbX6QFu8pJUhYQRAvUP4CAx89NXsqDjmpwFLmW6WnvDSWGvhQ6Yi",
  "key31": "4bLN5m1YmeEJDGHS2F3iH9cYfJC5kdEjGbgUqBWvjS465KzUKAmgsSA2A72kbLWZaBWN6gY99Bhm2d9SGdoz2ya6",
  "key32": "3zXpqp99PnqxuW3SXTvRySwngxdqigfXrGhieVQDrw4Njf3jdgWNAr7DBRqvDVuQVD2kvbzbqUUDVUSoP2uM99Tv",
  "key33": "4YDGMRgqHmc9JdEPQG35mKdg4powpc7YTpp1fWfNJ8ew5fukL5Cesb19ZQYjbX9q4mshT6UGhgzXCyFiD95fPx7P",
  "key34": "3td338JDhgQEHdex9DNbKLF4JKpY5W5boXMVTv6DPdfgRtQBzyxG7vFPVdLxZ6qdx5g2c9s6643dBV2gzecyipEK",
  "key35": "3d69HGAz9HeqEDJxMttADZbFhyQ4gaveQx56uBeG42jCemWRzwooQq1WJLaCmZZK28YrbnTbGkt3mdj1AJvFek5A",
  "key36": "62AuXhjMtDu7rpejAT3qwHgGpkh2WjJB9RCqP8tXhfyWa3w3nCuDfgUxDsH5Hdzbtg5oZ49ZBdPqDE3MPDjcfops"
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
