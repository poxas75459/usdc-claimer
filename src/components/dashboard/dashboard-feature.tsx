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
    "4DKnjNcz17F2pFBaRs335kvWJg3Ek1FmPnz86cq9vosWQzFqy8ozBnJT6zSfm3i8pLKjXyjRXBNp7b5umFMeF89f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ifh7hoWfBD5QBkbb585Gn3jCVEHFGefVjFwuG5VUnZWTvf1JsTwdPkUgGNRee19nHto7yqaeMUV33SQrUDt66n5",
  "key1": "p3tAzFZ4jS66CWt1wJEe1GQDQEFD9qiad4vfJf4xSeu7JQkeXk3VXYhDwrLZosyT1X7FJg4FcmXeeKL83Yx1zyv",
  "key2": "3acYRBNiMJ398hFZDDE554GqAUPma7WXXhgtp8jxsGeG7nmtUbqeiAuRfaZ7wLg7Skbg6Sue2SPhMcmULos6WPzz",
  "key3": "4wt1pFLVdEewisAQY6diaQjbBxJKbADzF2HkN9yDG6gpwKXhTXtfor4UZptjQ5sHSbnWq3rED7Cgx4xuFjrwEuQV",
  "key4": "U2qUwasLZR94FySMT9kjbwmWtuzD1AkA65V7SdTYhiX2etw6Fr7XVXXFF2DWjAJTYaLVYrjL9yy5WV1BacnZB7q",
  "key5": "59tf9E8eT1GVCAZPZPfQQC6rxt8w7Xok732McH5Cf1MteUwV1Ti5mpfeiDWXiZmbjYYiaaNv8iTfmN8PHePjbpqW",
  "key6": "2a7itTpr1K688EF25F7Rnmx2X4Q85xYTRnjSbp2davEp5U6z4NNwjUYVNvntLU9DD44uLzGDr2AD3mMkPHaewdKE",
  "key7": "4kQ2Xik8JTWF9Jxg226yLkowaT5VCJhBmfPxP2gykLJ6Usw4gBLz63nrnSZpeG1mzQhD3PVQ7cMjRSwSkBGd3KHy",
  "key8": "2ZrhwW8FNrSxLdYBBj7DPtt9ycerhGSSi4h4ki76J7EARYLNHzzDW9ihappr2STmaeCADvMDzyEoxmiUpQiUgAB1",
  "key9": "3mzg91SJUAKGAWajUvRdeJoPTFfaHXpemhqhe6GHiTFKmD6jRoEn1B4JUXL66vy5wQsjucgDzAFD1T6c85qJhkne",
  "key10": "46wQ66xTho6ihgDRkDxuSZP9H5LVpvRHZx91oGCTinK2ijjfy41UJnVxuP1hK82MQcLWR64axHRBwXkvyhQsdDTJ",
  "key11": "4iryR2qctLY8cbCwqkjcU8f9i7qz3s624R2T6RJyZ6nksQVFnSghqnMPHrgqX1vEy8C4WL8ndsXo2u8robQgCddG",
  "key12": "3FWztWfypXdZiwaqY5VGc2x5CBRbDLB5g5uRUYFbsc1JgoviTpBywLr8oayGhFLQCbLgtmQtdj3gniZqDB6SA84",
  "key13": "28Zy8NBTpXCMYX31DAF8m9WhxRZW6VerpDePCDi64p96W5KHtZtQCJHWumpET7qmnA8gDm1wCSTJQ45jW7KPDpNS",
  "key14": "4p1HK2RYhFm7L2yjNeFMee5sgFTQeydmcniChqM3Wx99nXds126vP6qX5hdGLVGZv3mXakAxmHJjY8dKsUXQFaWY",
  "key15": "31jQGCtzTiyKPeKtKWGW7fhGDjEYmcbLve8K3qxmQiXSjLaYFDFD643TfeMBixgmQa2h8uHjmSAhLovMDUGDHgrW",
  "key16": "5gj1xELv5zWHN9EpNMB9XfgUhJYwUwarjBP1gHZ1EXoW34ZaPaerZPLVCZwrQoMWXx6HQoq9JC1nSXjT6sCZ5apq",
  "key17": "Z93LCPHKjVyujXMxD9yXgHAKZW2favmdgdprLPaVoBT9z8CFNeUfD3ZvadBBQsEhtH9BcvwREstMWYXSPsBTXif",
  "key18": "5U4sk7P32etMojzrDcaVVtiJTdtZNtVt4ia1FKarcMVYqJpyuugJ6pjRVtkxdRzedysrkq2Ux7HCzczmfUYceDiz",
  "key19": "2GTvMfTyE7f3RgLx8nTBoYZ1LpFX2jPYcttGFDbbZRqnnq5dp6B2TQXnHK7BgfxTn1UPPWEHdGkRrqfsbKJDx7iq",
  "key20": "5KJ133GFvU7zBuQuYWyZf7ynT9aDBNbWGajfzDeVQj14Ed8wKUvBntZzPczyPFhgvVsEEtboLR7HzkeGk9MXfa2X",
  "key21": "5CVSwcrYHSAxensLB5m4DzUTCqVRi14xnVbJDTiLeAQTzjiSmt9sXUWa8BYdYgtYKtbitPJoT8GFnAfSK8sZ6GpR",
  "key22": "2m7hhnMaoUBGAanm6S6oKqG13TLvu3zYDo2TQh2t9K1RbSFuAHxhjz2yHLoZqGnqcVaa8uf7zXprQ1gNbmWBhMVM",
  "key23": "PgyCPfvWqHhBh6LRCssLw769X7BsJB9dR9CDPYdpSTAizFwHo9VfJekrL5wx4723iXDM1ScjcqKnJqUvVJA4ArW",
  "key24": "4pWJ3Vq9JBtLs8SxuVBa3wu9aeQZBRx3ZkzR7mBvN2rQAVxiEjprLR1GLptiynuRXqnYkZGiqX8WzatZi9hFeow",
  "key25": "2djthVvXAzyo9TTndW7tTxXWrXGbh9GoX4mTVZg1V6Vs8AExY8jUXkG959b4kB1AorGfjZkCuKpYx4q7JPWUcc6x",
  "key26": "63zjJzhgjL8xAETvN5eyRu4sW1xjW3rRgGZr5ArcBGXPxLnJYeE7JQPqRMDqCsv5MCDA9uXu3nfj9xeDkeXeNpsr",
  "key27": "CmxQHfajNtp7ePBpF15wQKe43cs386Gnp8gFfZqe1NCnQ2cb8u8iKmYpw92UPf2f8KihdE6B3Fugajrgs19nVx4",
  "key28": "4uvMebDUiLSUUxpu6TEPuf7SsZUKmETFAmEGesDjk8XgaHLdGhUHoN91y48N5nwqRpv1X2JKQ8jwMbWAmxL7RidT",
  "key29": "QS4sh7PLNxVkhUCNF2ev5tiFoUuJ3J6NdeN7WSdt4BCZmUFrXnhAgzYr5nq4LwtLGLqx3J1EQLip4Pg8WZctyjh",
  "key30": "3am7UXw5FtzYGs2xF9qsLz5uHRQxdnLq9DjpV8HREE6rmuhzaQTKzZL4dY8Mrn1gE3hUrHCoFseCA9hpyQBdKcQc",
  "key31": "2WpqNndX7BQzzWituZDXM7yymirUZxMFqD5TuqXCWJQkxW4kjRCmbgME3R5zt5bxVHWczaXd6g1RsyANz2uhno9V",
  "key32": "4D7Q3YAr44vuqtv1fG9E88DP3mfUx71E1fu3q5DK1bUuq6bo23SDxZ2eo3SxAD8Wb3PUTfMjdgpJdzZ4u9nsKeiS",
  "key33": "67hoCd3LKzZNweCcf8ViNUWeiQeCHT1oNviYkJuq8y7zHTUPFMpWoLASFt5xC8xx8YBgyZtyW5uAnYx4kA5katDr",
  "key34": "3tqLBuzC9qRv2wgYvh3uK28eh65K8LRVAsxucKxVHMRiSBs9ccfRnzie8VA9hPffdw2wcBaMCsENv55E31zYaaAF",
  "key35": "zWsj3QkpKgJJx2A1379J574fxJ9f3qq4661paKPoMj91yfhot27CfVbDNqWRMv9MtUHK454p72GKwws6F3ERZU4",
  "key36": "5Bjdj97r4AfHU5hBs9i4casgNwkksSvQYnXf3qtfQ329GPzhktBb7owK5sZCNDMkcfajF9dN5HJ1YjT375mZ5khq",
  "key37": "53fu71U126kHh7FCzJss45znTC7LEAzct2AKqomWgab72RESacnsMtzoq5EreAKmpCSsq7pLT7PpbxaVab9wCpF6",
  "key38": "5CzjeByPACNEyW9bcviiPDvwdS9z6U5ZtJKS4iggG5KX8C8VcnF3KEe4u3QH9hhkAPSCrnbNz5NNNrfnhZj7ogsM",
  "key39": "657usDPWEyMbnHUs4BfWSdP9gVeDkruoKPtZYkK4s2ecf3UL2YZiTW4tRA2GoouNi1F4L7WM9TfoKRfuWAxJm2H5",
  "key40": "58G7AVr6tZuErbyNrjJwAy5n1yUJfKckAzvMTi8BfkcKDqmxVkvRhjxKtMYaY9nd79VotRTfjuHmDVVxmFL9euCK"
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
