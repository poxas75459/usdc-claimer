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
    "2XeEbg9wGtdKDjXkAJ3C39v75cbokFGvvo9Y9RY9h9Wtbv4YZgm4x2KKUkrCLNDMofDScwGCHvQYbkTuHsrdxtNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W5G4ZrKeEsfzvpuNtH9tcX3UaFd4bb51Af6eNwe2ZZDyKUyaTe5MpVjVfSmR3YdU6TTeiYLFbQjy2z6htAnRWty",
  "key1": "3eV2Y65RPQ31dWesxjZmoDuwgg9xwHFK82AoGdgo4pKiHmAqtsMoDhFEm28BnMQ9UvUf1qXDP9UKBBkz7XvPjwGq",
  "key2": "4WN7FNYUCXxnqfFQFhoKDWrbY8N395NyfqLmQS7xshFyfo61kzZcKA74QqZQHj6PFXkyUhgrs27NXdKjUzjX3Fep",
  "key3": "4zErK2bunbCToeJYju1yZz6FZXphbPxgcJTDRy6tEkAMisRiodn1uQ23eq7r1vPqJ3ANEZGjF3i5SKrDXFCanj9K",
  "key4": "3pJV3ioTMZ2j79RxC43btyvzpHfubU8Y43YvsEqNovnTNZMnAuS9ZYToSacv9by4UH38gvPXzkbKHHR6XtrSNXCo",
  "key5": "4mQBXVoWKs2CgXbtc3fbpCxCrQpEqKe81SgkofMpYFTw9W5Y9qynfQXr99spXp3GzVR6N83R8FNYFgSWnPbxTTiD",
  "key6": "3VGKuHihTGdDqXFoismwEaR8pbQbVBZetKug6dTQhpvNJ5wqE5VmHAv2PijEwPRxftzh1ath4qytkZJu93zcdM7N",
  "key7": "5ZtAcWNHHreYxLUKxa3zhcGBmarhCJUAfUDGUSL7mXHMpEBXvHUoGybYDBt7qSEbZu3hPyoJpWQCtvTQY3d5tixq",
  "key8": "5NqNnvDHuEb3HfCcjQa8U39TvxBgArJwaVeHmZQXTTCRrVTq6BUk7Ve3ffQ2YKes9aTnmR7GxxFNCB7y8tdtYUjm",
  "key9": "4Gkt2kPsoDs7pHD5P5GUbaKPEdSjKUJc5gLQUETouJMTuJXqMGLVft42A75ccXgX2B21tDuvSJQGk6V3W8671pte",
  "key10": "2YEUMEHKXHs5KRiYWnSax8UF8j4js7uLbW9A476FsA9ncz5WgV9v6mXDfJdtBVT4UpNq379QbcymTt5dXduKdeWs",
  "key11": "4jYCzL3ZC66aKF8ew5nRqMxJK4koWgmphaucWT7VAePJdhAVNeuUcS589aVGqVbCxh2hTJ7eDaqv9G25kkFKPHqE",
  "key12": "4qo8qRvyofMvTAJtc8MoFu2ZakqxP5fwYP99zK4N56FbmYYUF2yVXpnkZE4JhqUqXaMJ2Y6cJSZaKpHndSFMUcZj",
  "key13": "3tbRcVYcpkt4dZhYViuQdene6LojchpMVbCx35scar4tUcUxTTqkg6p3aqPCQumURMbCERWcGotREvXsxjJg3Vsp",
  "key14": "3UAhsTYvjjkD6G36LJVNKvudMsCDvkhK3hAeA9d46RNVmu3KnufeTQj3f7ANbixDawxCGDtb8NE5TF1AW6NhzHae",
  "key15": "2Yvb9kJwU42Nnc1xKKCTY9snNxF82muAcqrf59Q6kbNnd9hBFgvXLnLEJxB26Jyw28V9HJY7mgNxRSBZFvLMTT5V",
  "key16": "5gmJk94LYBPMQrrsArkG8HxSSf8ypb8tk4Xf8SY1zDkphFeykXWZWCvtxMnXT3nG8Ny6Ae8PqkRyUbanrrhAoMXe",
  "key17": "2cmwy5NchQYVSi1TiWosSC7eB7izJLSmtX4upeRgx3MgkeuwAotauKUKoa1PaPFHPFYXFLN8eK3AndYEkFjmS5w7",
  "key18": "3qkXkaUHTRegpsMvyjEVb2BtHQs4m7NVaS1GkdtA1NRugK6WBvzUTqdACep8JQ9yD14wAqVpTS2histowHdpuh8K",
  "key19": "4baaAgSWHVEQ66MmEdh9md8kbjPYNR7ycvjLTJukhPMz3GFcqGsbSGM6gj2ci6dWsiLncS4RizN2EZzagxT7jXpv",
  "key20": "Qj4a3a8jApqL1jj34qgu7bxiTTfhLFR9n9KkT6gB5XkPAjxkh7jXSEBDotdAb2YzJoNuAvsTdm6AFDeyVWamaeC",
  "key21": "3NcWUPK9dhYgAZDFQHCdhjQ2Mw3bWXZYpKaAhcDphykp35gKTTSxku7BU3xN31iAQCsdncaMVgu6mN7qCUFoUf42",
  "key22": "jzQ16sPR4oFnD11vRHriednGUzJPpANAaSbvGfUUPnoz7FaHeae2oVcKBab7d3cKQy8iE15yGQqnsDgyerwfAsv",
  "key23": "4z6YNPHCbcYoSRAAKxgQrHssei8dPEVSGUeCxdumGM339hr9kpJjd8ugpyNqrtKVTxVyB16KcZuHPpAqe2s8aoko",
  "key24": "5c7tQ7ibkSxj9vfE15f2r6dGPDrPBiwiU3F39W1Rr2sbRezDBJaLRUTzdfj8GZmBn5H9C192MynmHTAF3HcWFFVK",
  "key25": "jKLJTit6Sh9AsW8YTGAKd279TDtxTAngR92T95CKCS62S4C7cioPGkQH85hr7gWyzGUp13PsHQKw3a8DmYyUXjZ",
  "key26": "2E1s7YeoCeyaUAUyQvEkH6GpBYJAfVbNea1jjitefeGiMhto2M4KSX7DaPUNxmEBFkWtLL5pUWRmxd1nWeqjJBvX",
  "key27": "55jKSWxYQvngRW4DbizoYRDsmMSChqaBbCzmxvhkswvokDBbsUeeitYTJ8SkLg5xhuJKr6ahM3PRGoPf1WC7HmGa",
  "key28": "4f9mR3s56mUNv8E7bZR28sGwQ7svymdPmnz8bcKTM4rR7aW6FwAyGrwJ9BzGSuAuBFG9quQ29CeQw3jb8WssUWP2",
  "key29": "3E6eMzKEAcW2WdiQTpcoPLLxUknYMWQ1Ffs41MqgfCPo5TeuJLcpaTEPSCHa2z2YAQXvvM8fezvhhDw5NquDv8xE",
  "key30": "3wDQPcXcZujRzXKYU4ZghXAEsisJa4AijnH7uewA1ahX7gqtN6ErqSjEAJEmKHwaK2hXaMckXEbEyW496QABh3f3",
  "key31": "2hqkiaPA6GCyrWMrtwghcFv8whirm5c4GdegsiCr2uQihuRerBHDFGd7xVduDzec1GtR2M6P8t7KpoCmEhEfgaCE",
  "key32": "csD3Sr8N84T8pKpu2Y3pee9sy3795p5JeRu1ZRkKAL2wrG1uYFDjU77JGDE5Pzf5yMHnjftjrn6nkSs2YriGLwu",
  "key33": "67UMgUJ4RU1wXveALhs1JHmV2yzThiJY6YGwcyGw1tmAgqDnpXGJuVGWRMySQ83KfXDCfS7haQcYU9kK8m8HFoUT",
  "key34": "3SSag4p9m8bw6fb28FqehoAEwySVpv7PSpDq8fuf5mYyvubA9Wwqn4TFhdMRr7HqL55Cw2hL2yKxa9B895Bk6fCe",
  "key35": "2VUJKnbNSF3MT7gNVbnz4gK5uNLRTQtsM6uZ89xVYfW2yBJS7dzHmJijXFH4PdHWerWyqvTj6KYPt17sZXKPonyb",
  "key36": "4drnWK4TzVDUyKpQmrctHnrYkAgDHnBMYk9YR7MuEVnqVUej7B4x7ThqYdCva8cwycBG8m7ZbrM6egANYLm7RtJf",
  "key37": "4Eb4qQ16GFKXmBchFqLRFsDXsZcWD4QHf183XF1HzcUB9DqFaWvvwkU39EXDyHYqs84DHwL4dXYo6yMVAYHLAMhN",
  "key38": "2ogy8jDruW546aStHbHDtDgsAUEZssepdVmvWBXKbgTx2xCzn6jmUF4Wx5PUPDRD8EFXyh3P4QDjEPWLzkLsSA6j",
  "key39": "67DxQ8HfcLEmRkJJKVDVw6rkBwE9WVrFKBB1fQr3xBoqSCYw2T2fBNQCjMKTzcpcW7DuLWgtjw2S7msnar6jaHd8",
  "key40": "3TPY9zDMsWzKErN7B4e31wtKZZ14J4GesSD4tkVfckmGssJFbRAR8i1WgEGqXomvkmfbDDXbYDUg9hLzDUXu9kds",
  "key41": "3DF3pLgMV4AbP9nZE4McT7t6VEkQapTq6vQM3Z4NFcoRj5b7kmg3UdPhrAivMgwMaD87jQTeL8UbXsTAHzXsMWyV"
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
