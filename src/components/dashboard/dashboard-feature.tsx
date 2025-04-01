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
    "vUpeGpDDmxEGe7oWE8MB7YnfzWxg4XY1vo9aL3BpGnXY6zJjbgLrefVm1eteLTzEXuoRHQKhzpAVNNpb6rbUzKJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tHrRqxdYdoLf4McXWQ3WncnUAxJmnuRqUGT8oupWMxALCGrK2shAf6PCedq7bkr2bLvcM8KReeeSFEfKnWj8okh",
  "key1": "2dndnTgeG3xFeU3gUoZRyc2tMQ2jTYicnvbu7hvNzZrauzrQ7bTbTtpgdV14sJjDtc9CRJ4yyY3HmXRg4KMkxsA1",
  "key2": "32FGwFQMu2CqVVbbZZpoQrC8k2M9rguEDtn4urJNCKVHyaeq6WyKUrjDxSFv1AcwKyjecrsAxvhtozeGzePPwzkS",
  "key3": "5JmLdHvFrnkpR2ysce32FzbApoXPoqAaUqBRkPWJwKTEy84Xc44PwshsG73YwHGNnHdKg7h9FQmWs7Tb5agEMjvU",
  "key4": "38H9VhrsYmS48aobecFB6mibNdVnZVgWxewUTHp4GgsfPVQvEyCX77h5BhgDhw2aTstnQFjSN4DRNE5yqa4P53hv",
  "key5": "5qe7ifkUQ8zEftqycCzBndQFp2xk5dpQnaezRJNZNLDs1vdJR4ktBKUD9Qa8CRVN4RPHhw3x9dK8M8bwUrdGs6CX",
  "key6": "4m6zPHGC8ueegHjabBFLDvk6bwdHYZ6YfQfK9jDMvLVpox3LaVHUAbgPcgvYL3nCUPkS8gwn9GvVu9RUN8mwvGYh",
  "key7": "22a4g3Mdu5SXgoXpQR17VCH69Cmsze2L9ryMcoNScxz64A5TGENgnqs663xo6ARcezYpvufS1eumB4KWKYPtYrLB",
  "key8": "2zHasVs94xdDxmPgCaPT61TksQuzt1A6q26CjxjJADZFiLp9cf5oWFFxahEy7G2BzizPtQMo7M6NHovKu2SoZXYf",
  "key9": "31ePrFkzEqKSE2cuPVdHcqa5oDcWpEdZaqK96zsJuvSjrGgW3Jo2phy17YL3x2jQrf5vYCHysv6sXGVNkRLyQ4dr",
  "key10": "5SRvzN2PcFs1MXDFUYEdXM71oK9abPy8F1wqMXhZG1uVahGuoR6nLzB7ZmcGJxZLjpr7a3xV1SfsXjLLBUVQ5u1E",
  "key11": "hPzGMRXyFNWnXiXeRV39xEhJbo4TBznGpr4w11YVrGyuuSVkdJbDaW79LMU9drG4BvjaHj2Bex7MEDffRrSjG3t",
  "key12": "5kiU8eVq87gXuVmuhCMYU2YnFFz2vMJAu15m6ADv6XqmY1KWytUESWT6ySFf7yRqZ2HMVXaxgNJBainkFKJjAhAg",
  "key13": "2dSWyWYnEDNgJ6UQVsA9kJcJUU2mvT7MgFVzi2a7chKBf9d5svKxXtsHWmgBoK3m5CBzq3aLzJpULygPscERinTb",
  "key14": "5o2Hd47e1wufp7okJ7NtGdPPGQZJ2bUibSE2z5Hx9vCVAMue9xrAUYA6NJp1ApzQgntKH5rYa7V57LetxfoxkdkM",
  "key15": "aX169o6a84Z5jfVPHTsV4WDebib8zgwrTPnerKYMBokPnayJw6igEMGfCGyKbtQVL2YcAZ9RBd2cYjtDf5UtHaF",
  "key16": "281aKh1FXCN6H9xyPG2fLNpcW4K2SK8ULvXeeUh1wqWiujMqczXptxH8AN9ThHyR5Dk1PeZ3Ge9usok7NSyNgriz",
  "key17": "4maJbnxFz5AASTu6jJkcen5WPkSVbf5hMGrCLZDS9Uzc1KGfvQ1vZjs4KkkdVzshgt77iKosEv1mgM6GdWCNe2cP",
  "key18": "3rFQYFFM7AYr2uWgBHmC3Kop1oY58oqfLfCkNpGTJQiLz2n7VfWaahZMMrZiUjjuWgHmAkU6FNorju78YGBfbMhx",
  "key19": "3QxgEoowsebmVkHymLNNfwQCpkRFm1Q8RQefVag5bbeWrHPynfhcUaN382LLS3MZJFLBpwbdR9BmNEinKCtwgfrC",
  "key20": "5nn7Q8JjtVyysruEnX1fXg2TfoDoCrv2x64u5j7XMH3QWfXnvfdxNRbZwyXK14b4kXvffNbW4wK2djyQ8kkkPnW8",
  "key21": "g9s4PAwm7K1MWkZKNTpz1eXq3UgAFirhSvQcQnGsKsk2hZzGW5FAA93mAzn46mJd3K3TZnqxhHbRzHYnCAKdgCq",
  "key22": "3tpnzv829NusfMa3f8auakW2KP3XbrJJQRForDvVdaqAMVwtffD5GRLTJTXuFaroxUAM7A5x7Wi1yL9GFkMcj46J",
  "key23": "5F887YDcCumQuWs2w5wnRXkapzjTgP3VqDkmNi57Cc9qVdhoUeBTDKBxVTDwHKcGZijstFYoEs3MUvhCWc8fEkcw",
  "key24": "7agSF5gvweDaaDwB94FJQ6rFP49S9bsY9BS54imK87FMQDJ1GemEd8wLczHxDGGjpTgvX88rA3nCgk8geaZvvy1",
  "key25": "5ReZphccHdjgT4YP2rEHgUiTFSBNv1uTApSvEdrkQnqhpsybG7n7CGKV4FhS2ZBsft63sX8V7P8tLqSF1wFg51CL",
  "key26": "zDJqvKFYfhgN7cRmrFAxy8woGew3p1eCFf4VxDkP3HsmDkZZXe3qR3s1eBpo7JC8swMCinh4P1WGfpoPub9F3Az",
  "key27": "4QmwNZV7Mq4yq84oTcnMsuqS8S46tXR5Wh76UQLuVnTZxfs3chLtAU3H6iTeYKT7sbiNwu65wGqY2bPQPTxFtkv3",
  "key28": "3wwDpRaxisLLioz44bfpseGAk4hheCjT5X85Ac7Fjy5Qyf3nWE9TBgjDHZQn5o6kFW6CstiD2kw4AfXrUE1Mzqam",
  "key29": "5DkMbz9TTJbwzr1unGcaQfdtinveBAmnff3dvD49CtsGGASPNej2mho5Jzzg1xX1qL8KL5qBDdHJGAHRfkovg3DA",
  "key30": "3W5K7XtDQQeELiMc7XvwwP5RXiDLCPhz5dNG3x2RVbXvx8XM7gi2aZxU9TbSehTSYPKbBFqXtWqhLj6FhxwZb4pC",
  "key31": "37o5dezBMsFWd2wcun3JUUqjGzfYYXsoYTfwzBrvEJBCuCfMz21jpqLedrsLEsn91JUccfmvsBnGrrHjvM5d7BAe",
  "key32": "3YteMh2UQcr3ZqWdMpCC2yTbnzq4YE7gYWb3ynakcJv5ep4tdsi6x8Td3wuQwDRs1HQAwvpLWVdiseDnXyD1umDi",
  "key33": "2skZG9rXZBAmsxQnHmHLi7BepbwDpTuGSRGkYcQypeLTtESRtpyrmJXa3FXAmAjfF92HgWSPP6VVLeVRvsXTGU3t",
  "key34": "4P2kJnJbXsdG58gvUWisbMSRynRTwdsron2iJMxgq8Ep6ZTBmU7U5PrxCmdv7NrseCGUgGVAPvPx5U6ebKafN8V9",
  "key35": "4BKdBS8WxbcwZYuTxJ3iCWz8aDPXHoVR15cQDBTxS8DxK5DNHxFMF6KLWM5jrp4TQKEH9s9NvpEhGoeGczojGKdN",
  "key36": "4dRcQHS9kKS5PXVeUaPgSsxsizjDNtxfTmredY9hZhjAnL5sxz7PcQqzUx4zq2AqH4EjZbFymLtXCUjXycVeSxhZ",
  "key37": "2dUn4c8UKqLThPVixfbF2XkQmqDBZkBkE9t34rwVhcF2sDsRBkckdAD6XbMFuCLCNoonkNei6mxG2RPBz7AmFxP8",
  "key38": "3CpDM92whZkQfsTNGWHEnCBEFQqociLR1r1JWfZj8NwWXE53DzNcrA1UY8M9fRKFkcLirDtirRYGTVKTaoCVjatM",
  "key39": "27GR39AjyHRBHg3wUxkW7sYUXDBFQXyXsDim5LPJUjea24Hp8uY2GuQuax9gWR4vC2CZzy4uiF6CP3NpmpQfGLf9",
  "key40": "3Z8GYAr5rtchEd3ZNFHSDiMsfrVxBMspNwSgKvJGuEwqvmHqRnrGu9Anacoip6ieBiPhtpxkf1LrVRNR2PyFoCvK",
  "key41": "YCuCgt4N6JmSnkRka8WtNSEgL5SAfSmFX8xggB6bapQsJdzS77UdrkMH2nxMZzx878QibUURtd9n5PkUV1Qxjzs",
  "key42": "4aMYGhNzHLiwA2NRVYK1NzW2MWzkCZVgrhuy16zEhGNQ3zrizqGRm9Jp8fBbKLoTEkSRQFQT6oaqi89WmPAKgLMV",
  "key43": "4wTeo1U62AoyjChcZ51Zjeen9osCzCNRvZPQ4vwdAsGLj346YkzkRVGNmJS2XEWCAdaZNyFtsZfZfCMhN9bb97by",
  "key44": "2QbfjNzKUJzWPw7rSXEboa5HYinxsG4FeFucQ8Dv5XraBGNbRivWBdrL19zvnTqbfjM3ZKH8J4Xh9JEzLEZb24pQ",
  "key45": "5CfffCea75J8WEuXX5nxaxuwEMjYZK8BVoBLecZ5uW3i3KekpAZ8ukwFyReJq22q6PwkFrhy4Jr1zmZDf9Q8CVLB",
  "key46": "65kfNPRizAgKMujohm2oBDgKm8FeUkUZSGJMBSW7S3ZhR1NUqetaW7GS7C35a2DTpSRDBCZ3kg685RQSymjMugPu",
  "key47": "47E7MurdsSprQdMMTdsZkUa4D1F9DjQ6EphvxDTKcP4Z4vifAZppudcbN8DkNS8dsea8zF1Fi5jLgPQKdMXjpcvN"
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
