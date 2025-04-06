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
    "4o3BG3HdcRaYsQ3sjjNxE5kASsbYGi6q4VkuXo8yNgB2uyMAaZRzn1QGiDt4ti23rfCSffd7C797C7KbKz5GS22o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RGVTv9huZ6SZMWMKhvGBDZfADaBPbGy5CNnB2dsxunU7PSD2gi822LBcbRrEa2Z9XWy6kT1e4TVSniY7DgEQutt",
  "key1": "4KWF6Kqb2RL6i1rTr3op4gWtsF82BL2fEoZmcV2YS7rxNL2KJHdsGfpgnQFis2MwLhgUr4AwewGfn1p9FRLYL2gr",
  "key2": "4rrQmUNQG1dW7oQEZuvQmY5LuwjoU9UTRnJG6CpBoW1S52He4Hu1NLwZ2NVtVbGr9kiGcFoyyGnAeXEECPjyEA1T",
  "key3": "4FBrvZk2HBoECncwWAaWpbrdBbE9q9rWCNAkyMzh94QeD7gRmTFVdXR2zKx49Dq5sU1ExsRUJzF7m4xyVi25yd5j",
  "key4": "4Uwx7Sobk4GNqy4KV5rXd8uSXj3ekm23r9DYgfSYiBm8ewXkDPHGmZvoudj9TaJdoDVkycd6HtTeCnxCR9Ke3xXp",
  "key5": "4EpTJfqwQPB9T2vWsJb45mnqgYLwrcHXGhjZqg5TzyFggJcMLyZHnrc2EpFGwj9nuCt4ZQsTr1eg6kr2y2j9Aakg",
  "key6": "4Dt2FURTebGUrkhDa9H6qtqkrNvtKKAq3SUMW4YhWFt6MdzWTgGXSbBM6XGvvF1FUa9GCeYFxW5W93GXeZUxwrb3",
  "key7": "2Fo5JWkSeXijc3roZ57KGDY3UDFZDkpk2d7T3ErLZDRVGM9UxG7N719ZLzSSAE2qBiK9HfNwWTK5x4dRx8HEZmcC",
  "key8": "5z5g11Cyi4iwfQAm3NgZ6ziLXwmEsp8VuH2cKauEpLPax5ksiT2M5BcruKbnXvrFrK9MxvxRoYacFZfGTEpwyFLm",
  "key9": "8b3jZqWftWYpckWxpZt1poEHDpPsguLfAX2xC1xq7RstzwpTGXqGhKUPjaSyCM3gKpJcDLw7uXqasXbVRwGBnjU",
  "key10": "2PtmXakvzAW1ghaWw3LKLXZty8oTmMNmo8sD8Lzit6jipzrxYBhJDud8zGLNgYqtocsxR572mTuQa4kkPpR6bHby",
  "key11": "4fEzLX51zWZNm5JV1QduMA7uZ3iNW4DvrMRcyVobkEk97sYsatLiPz5XRCk1Xg2fBKVwnh64ct8DQrzbjHjYLvtD",
  "key12": "42eHJk8pFTKhuEx2n85RHR9NTHCfmhkr1vKu82MNm3zmizDNzX3qQWr9cirhYdkZQXkskdZSKdmHQaFz6dMVENRM",
  "key13": "3kTgwAV9sUFjGRTMjAMoN1z8TLg41Hx4BCKLjRt3iDnQpi3sEreFuS6KcDP9PS9c2RzLq1Y2GisZATGdHP7oyupw",
  "key14": "2hmQfG4bb272E3QLwYX9rXKRyKHsQ7hf8Lp6NBuUexzxpRXYx7S6pwNVPLft5XufRrcd6S4vr4YcA1d368EpSQsw",
  "key15": "3SwSNoZyehypmZwkZphsnJkBKAwR7F6giH97tqVzfJZ2eUZGF5k9A49UBcnQuXorg9XqiTCoZqTiAxQUH8tRAazn",
  "key16": "4RMSSAXZspqRBYvcfRLYgnxsdXHZXoNa5AroDtvKAadn8QRPRRXidCBwiA4xWSo97q9UFpKcvGzen7owbRSGmt4D",
  "key17": "3BjCNfyxHiRva7NW4eBrPBBNkp9BBJoBjxgjkS2um1j2DzSa8gn3hHniahLiqA2KgZjL8rcQCayUZYB4pTYeiS3q",
  "key18": "2ocRHiYQ9uAmymCYK9ngiUWCqSRfar8uonNyLAntNZXLTwkjaexPqxd1iY8WwQpacyH9AvtMKppJAFRdAppA9MCF",
  "key19": "4wn4kWLtS1eKqS4wNfxfzT6C7BUJTudvKxQgvrazbwW6rJUi5rQtGDcjfPkxaaAzit47cbdG4GxpP5zxk1oCXE8H",
  "key20": "4pJf9j19SneJZdzdgYCVgr7Am7U2chCwHFYj8iTz7jeypoQ9xkGxcWhjVZ7xLxDiKtLETgLENJk8QD8VVLtLXfQJ",
  "key21": "5WNQA1kKyCSBvnyjC3ASTPPE1gX9robrGqBYTMeY83j2KhrmEhKZAkBcdxsyhj19FNZdJwsTPNNqLCc5S4Mp1EFh",
  "key22": "5TcHU12dA48YxtrPpYVof9udZMPXiVFnxMCM5i6UHcc5B1Rc8LEs2kc4ENnhGKZUHfcwFuVCSQCd7a82qNpQ4y1w",
  "key23": "2HVscPXcpCc6rpiTx5txcBsXcnK7znPjVjZcsh7wYbkiiKaB9PhpMzqacQSc6sPokcnexoxSNGTZaWDn3FiGGQC2",
  "key24": "5VGt2k5rK2oVTB6KcFWVHrUC66hupp52cjTvuenS7ycHHxzjakzPATxreE4oDKVs7D9HXmzmNouGZZnkH5w4Eprd",
  "key25": "3cb2nECDyysENHEjNayv2TfUgyfLe9qG4qC13bcEGD56c8YntJo24JsKJuB46cVFDU9KCKRpjk2ANHT3KL8ARZJi",
  "key26": "31gWDrX8L5ujSxh997UKXmAoeZns74pCuuSrYTJ7QtWejHWzeD6HuriLjAz8MFxwb5cMynFW6fym6ouofuTBrkvp",
  "key27": "5YQyZdLsQaHHY22GHwCzDsF5GavytnpjY5yLzKqBjUkzaM3LFZcQpwWpmKrE8kMVFLTSQicTPWe5vY4Grm4EEtg7",
  "key28": "4oymjCJhXBLiVrqxQUTNUCaf3GEZQ6QAV3hSPktPY4c6XDE6sUi8zN7APhsxzdJW6NuA4ot62kHRYJenNhPJtW2m",
  "key29": "56VFQfi5ZYgF2bfAkyYNgn3rrDKziQg53NF6ta3rrzhVEEPw22GBzXBHWb2XmM1khc6zwZAswa6Ni2SH6M2z9YBy",
  "key30": "25RPaXzXwZyYB1jrR2DeHokHXMem2NouZdnGYuxB8ZWFt7jDLiwHcxZXqoPe1MkFM8kJR4SyYRYikFv4SUDNShFK",
  "key31": "4EHHGqiD5P1i7cNVjzPyXo4BhceeJtXa5wHuwpHn9UKS8cquZbxkHDXBxFuWrhwEWUXQEMeF9WSXhJVopBXMaccq",
  "key32": "5uAFg8zvpNXKtCywyPkbSqb418kXRrsCKBSHmJJDHES3Tz7xN81nPaDGB39dcWXKF8aKwcz1zgmS4xZeTFQB1iPP",
  "key33": "jkpWCTTx78xHZJFGhiA2X5wgNCoSchcLHzPPczrKNZD6K9gtTvhCrgvo6jhJEvpfi8VWHbbeim275ixUDssAUaX",
  "key34": "51mSkMVEVxfEKUF43AFVZFjPpsfYqWr7kHa2pvLCRK5c8ZRB1UBJDvaS1pcCLsdo8ZctC9Q7A3vsH9RkdHz8DJBf",
  "key35": "4CwhyY4c58dQiZCngi9dp8fUG5hxeCpP9KZjWY7nRzLwskcWyPvCdW8t2JTsJJu7hAc2dpj7tf88BqvrnaBKd8xi",
  "key36": "5mBhEa4pn5Zws89XvcNY4yc6GirHpapPJVA5poMA4GLM3sMiGDhdV9wNAnTpeFg71sbnmpBkfzVde2dYP5U9JArv",
  "key37": "29Ngg7UaVobiqsH2SHCRnLyPCCXDipYMHtqou7v9oNW5CjC71yriPXgWBWpEFcNcV3JSMwZAMek4dGhqhR5bdXSa",
  "key38": "n3GrVFsAWaLBygvbNJz6u5psE6m9VLZ3F9hK8MqtVN6L7yniK4QjDEAkmHEjBZpmLwrnMi575JCWnQgEeKRVgzz",
  "key39": "2cyPwkFZbGravDW9kEKdHXrgr4Scp1F9CHi783zXvwnNQSHk16XnpXt5NwgL9y4Nbk57CdMLgj8awgrvhqgXAHqc",
  "key40": "4Mi6bP7PRKcFc7g6RJvjiHCDH9kZRJMHENyu9nfZokCA47zTgWC6bBU5KBKJDnnHA5b8aAJibW7L8uv89vgyG9m8"
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
