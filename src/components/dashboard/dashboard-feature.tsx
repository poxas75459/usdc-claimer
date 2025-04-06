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
    "5W7LYzq6h5ZAmUyCigSzLVnRWGsK46UZoJCyQxd9kDhLhJdJ2scWgmveY8AhEswRQ5Qpt18BY8ywRk8bvVcw2e1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21hugAGUPULiXdfCoKx5Bm3FC2yNQHWgCgoAR7WTMJSwX72PpeoqJbJTZ1zzdGGC5mVQpvKuXLGb4sWXZTERikJ7",
  "key1": "58eoMqtzxSiAvhvMnupKZmz9MccMoYYikDpvgfppaa8koapmDwLYMCsLYbi4quQCbSmHxHva1B9C78yADXjjNh9p",
  "key2": "2qw8x46bhbCFvL1KB5HoNBD1Kv44H27w5Pr1h6HeWGCgwnK5YCyHK716wSCRRGYSX1b6KERh8hyTiCkR1KTgKhC",
  "key3": "2irCcAckX5MYoXFVghMaCscPUA1B5EvscJbMiWev3K99bZ4A2jYYx5dD5rkcuFLDTmW3xmRwK824xCB7AfaT4gPu",
  "key4": "52X1sMCWHMs5ec9b9g6ARzGfqPZgfWzkdELCZq71kiJz3QdoXHKLMjWh2FL3ToD4MiDpFUtQcu5B36xGwgcYV6vD",
  "key5": "4ryEhzd2iLGcMSFdJeYLREWmoExemdpxiZ7XiXaS1jRbjyCQ1kKMgCev2YxHGh7oebW9DqQvGy95wTLQ9ZqCXr67",
  "key6": "4EaugCp8Bt6mDYYDBaDBnszDT7cX9hd7ZNTcZT5qmyDhZQsgmTTbb7JcBEwk8TzF7fsjinZYp6Acrv38ZsKTpaz5",
  "key7": "5XPEE9QGyAuGpDZE1g9otbrdiupNvX3JbzmsxjLV5tpM9Bcz6RRZy6VbnRgz122E63u5w3Ge8L7hr2QyDWgGjvou",
  "key8": "4fRn41JjsrkpnJZh3x7aF6TpW9v3YsufMG8aCfwB42kz2yt8A6pxQY3NyCqxMXoXosQtfqtehH4aFE7fgnftYZNF",
  "key9": "tGwNfCC1mahcw3pQnCxFytu1BH3HBF7N3r6S7CQ34mePQ1ggBHQUgLbPrE4F25x4oiZU6V44r4uzK9Jj76GSQad",
  "key10": "2yjoqiVAhbSk1Ani8qDmXPzN4BitDanZmohTzNiGdmVLPoa1b9LLjgttpDRzEc2R3fD1eus5fiKz8SDzWwQKtszU",
  "key11": "5NFeoxge5iTUHcD5qczaBkFmsFhYLRpnWFDDYJ3AB6z5EVuRPs8a44GUdP369Q8bpA2pF1GuYQh1Loqd9v86HoVH",
  "key12": "66TFyYLryyP43TEeWAhYfct3R2RvcDXNvPqXwtkpNAPS1pfqpQw28CWotzJuvzPdZPX7d11F7evjX64smzSx478Z",
  "key13": "47fXmYNuPfAkBi8MrTXQqBXuLkWFvrArSQqKuYtAFJhKVceZKBDJj872WyJFNVve72vfaPd4Hp62WJtsj5Q8hovS",
  "key14": "g9cxGymzWUZswvyBLaDh83MpvmZNNENrwJrMpGwf2G4J1dgX4XBW7jDt156mCv3aR7u5h5SKFPNe2LzoLt3GHDh",
  "key15": "3Tt9o4oresuGMvdufaHumQkUinUXPDomp7c7N9R4Wjbw4o47Z6bJ4DKDQAVy5r1HcnkCMLKBovd7Eu57C7VYB9Fa",
  "key16": "4kUDE437eWbfK4qXvgECJYL7FVFmdsYe2QeSfGA9DsmQNhHRQCDWy8pq9jwauYo2yjrzpVdKTnpjJEUYk5CJhQzr",
  "key17": "3b8MT8REFRvhLJRC83X3HCdBmvKp8frDvP6rqW1SgtXHYd8tEAEAwa8DeXRw5HJMZpPTDNpm9LRdXy5nsgoWwwRv",
  "key18": "2F4Q3TqMij96xNtzvm6kfF3omEeYWX9DNE4LmQCKMMtLVvmtJTAwe8fqKdhQMhDbrQtjR14LnXtNDXjNjMfRbvsA",
  "key19": "4gLQCvjFtnfVqNZwMBvz1nKRNqZ6vacypFFRByszXQkNcjbR5SKbNrWrjZUzztZkgzU6rXDQ37ZZtpJXuaW5ta2R",
  "key20": "QajJgnUuW8qCbTsGyc3cpdnW1PyBLGVXYwRPnUQjEpm3gNUG1j6DLNBNQ5P1kBFYUfKeYVZFTGRQFs4mKbp781r",
  "key21": "2i3m8vKLYtJkP31MGHjsnZhjukQikzqUXqccnrGukHszmUGAH2R8VTDnbGCHR9717pT9E4UkMikXofBnVMpGyNFa",
  "key22": "2S5qErjzbNd9cRyc1z2qUTBCyNwnj5WRG6TVKyArpBaAJuRQ5ni5DuuH6u2efBTkQae7LEACTK67biXbtoEca7fa",
  "key23": "Dd2kSfLKEnBNmZzqUdpHprvUZpfQ7mghXU9hhjyBdq1wL4KHwvRFwE69EFKkPbSc9vhHF6GJvyxWDybjPbjYQYA",
  "key24": "3Qn5aXD6szVepsuP6r9gXRrDcwkfxS41XiKD71m9LUcHKFmmqFtHPqUk3VD2FgML9QfGDw3ohr4xnLBNGSucDP32",
  "key25": "67YB6fE6uHtCB1uesKM7TZukwAq6qn4gkhapFGiPqKdGpLokHY3iagKE1vxBneNZMtGkEjaxZy1bL2bR9tD3Bba9",
  "key26": "3r8dzPD1K62e47FZmyge6wyUPaXxsNUufgmHRSiZfENpUEGHdzvABpvKcKfY6krQbLmprRJBSwniJwx23281NEKg",
  "key27": "2PoBmHnCP1awt4dBPkHEduxBQwqNGRpGamnhU8PJhX1iueK9ex5DmJHdNfk7pCBnnjEF6wXB59ufQy8N4TacnSgA",
  "key28": "5En2KEBTSPTN3QPKZvwmKMfsyrksN46rf24V5CEKavdEdgCibcP73urJZYr6zX6GYcBysrrQNAaUXHWw976VjbQq",
  "key29": "YdgjHwv4zdoftxi9BCcFn9eoFbHx1x373Qbpo3q1SidH2Cg8zehzDJY1Kz7c52xog2cybLmuSvutmfCHqRmEgJn",
  "key30": "21neC5CUxXkCuwvNmsLiUVJVx3WfoE6dQPwgGfDY7hzqxr7A9UZ9358eYk7uQ6L4BMhv2EzLTiA5C5fDsdZzg5iU",
  "key31": "Kwdbsvj9MAt7vPQywVr8jCoUFC94yGmSZ4P5qQ7ba7TgFTwQGqZwGGmHNMNccnWywVTsxgxnFaNEv1hcrTcuuim",
  "key32": "4MPZE9mq9F5sc9BTL8XwRiftK8duTbNddULAoo9RdmdW9aDRUmHGkjwT1XjtLvJuTZKms2VYtovfM6bhk23Jg8bf",
  "key33": "2tQgYrvQu7AG6Z3shr7VjgvWvn2BJWFhP8BoSZx9TT5nySf9AyHUTQGADuaNiYENDeRT4qYK3Mx1NhifYh9BtSLo",
  "key34": "4cRC9YLsmjVCB9g9mTiajYzsm96KGtnLCy9x68eE5mB3Cyvg5YwpM7b5DSAXaBMebbxMR747s3xFx11F9rVNvjRe",
  "key35": "TYAgjJASSoapyT3F5q9uNQekeYmqoDabBJ91qwaUQ6MtTQrF4GPV78FMBmnR6BYxg3AThxCJZeSmU8PXfEoRND7",
  "key36": "2h36TycaMXTE6V37wBifsfkCmgMEi9rjk3yPWYVbLN54ErfURobHto8zmASf7h3Z2uFE2RYexJEvChALUYaZa1EH"
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
