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
    "QS3SYXV7xvUVrMYy8q4Rfv7kVA8UiMAt1XoqQ79Szn48Tf6ByjMPqfxZA2t6VBis2CNYKWSqRgiAKJ5iYvTXCb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t4gDrZdFu8kbPgiDVjjA5jRkqnEdzg6Yq5TFyeJpB2xCp5CZ7YmmkBPXDE141pdv9wduDmnHwo6L4hB9YFp9NwM",
  "key1": "5TqQfwPbTctrZUVigu89UF7LmoLu5xT6vTeduKxvQj1Y2zMnoRQ8pzMDWaKnMXHS5hUXNHKUQS4nBVRwCZUYVYpx",
  "key2": "rM9scRLwNHTTZJCJHyLq3XYVsY8ALc6aUeStCDhXHZsbN8PyEmU3WzercwL2S7vXf8vKg5hWBM9HbfH8S4KLEUm",
  "key3": "4jf3snhNaksYFr69b9CMBpm5aGCTscG2HGFMH222ZFYAsZteDVFzpLgYo9odCVnigf7jE4MHsBibu5PEPQTS7JD5",
  "key4": "3gCzty1Gs8cjppKSgyDxpU3sWXvaSDTv97uHR7Yqwmcf3RzGmhmiGzryCZctYx8mJ6Z726soCQUyWycbdrzHVYZ",
  "key5": "N2aX8J4bhwV4bTNVt4aW3xNQYYSGk7YzYJQyTXbParHRYWFPyhvMG8isTMfdo3MBacyXwawxLoPKpozkcQL3AP3",
  "key6": "4kFuwujBZnmgAAXEwNQGCoi7nPUdxDUD9E2NLnaXCgQKQtTPKhVvvKPYUSDjTF6cN7ZcrjvfdCtUtvZLqreZJrz9",
  "key7": "59B8EU9JxMsJHQRoQYudNUPFJNdvifb8MoW7Q4b5ncYU24LkSRPn9asGug5MuZVh7bsirkgJExZpyVCUYjxEdpcm",
  "key8": "5Bp9Y1Mq9G87GCw1DC9goQVuxvRWd1gyuhYb1JSvGjVem5dnyyWTACrocFz5KWUH1Enf2oS3SJwHkENhxLoJy4QV",
  "key9": "5Um4fmSepMyP9YMw9sjdXeCBSs3h3rMe6XbRwngQFKk2pxRio85BsdZuVw4vs6dUiExEj3rgLGdjBJ49YgHgPGjn",
  "key10": "4eN13htSKoQfycmStUr1skZgndnaEs1p5Pn3wKy3eRboXCHtbY6ELpeDyvcibdefPRPX8eY1sgVtfhypJGDTabyM",
  "key11": "LMrRjo6WBXk4mhb49DnJQZ3Fe4mVDyF63gHN4aAJH97TEPyrqPerUxTpgzSwDpM3NobL28QgCp7XzF3PMWFd3Tj",
  "key12": "2QeyE6WvTzQuZFJm1yNiNr41e5g6CtQKbJSsfQVrNuyFYbG4mQ7gLsxJKgLgf1eb2iXA4M3ovDKu8jMHeRv6qAY",
  "key13": "3r4fFdaTyXWJ9Go15Zpc2fS3HiSuRnGgr5ADLL6QwVwMrs6nbSr57SgheDymqycNcF1tFkzq2CPz3vz4E7WduWXo",
  "key14": "51KCd5cHxi3QHVFzjCe9k35L6Qrb3aRhNV5ETer5mjzd9eredBtDxfrdHhiSNQ5xd9G2moYxtfGPBgZtMWNEtinS",
  "key15": "2iAEXKk3FembPFeTsfSUXQ4ERgdbswyYQYnneFKgtnetW5RzwcpChCpkrk4vdNGyLmyzc4rJPGJ6fKERcS3KKgje",
  "key16": "Sh5dXT5W5aqQ7RTznwp7RCoY8DXYrGEaxbL4Qxw12qgauGDpLiGg6pSnDYsVCq3pd7WisYVjwBKvgV9kLbCUaDS",
  "key17": "5taYb9c2M5zzpBEC6gR4icnbvdu8iGWrpGrZoBS5NEhdYUfbnuqZKSS1yYfCqqGTK5Gmp8H8BmdBpiayrco9CQe1",
  "key18": "9U2t7mczPCRenKm9spk8a2JJF3v5x3x8fPrL5DsQwhSackBvxk5Sgxbzep14KoQ729inkEG2UxmTL1Zm4QgsQsc",
  "key19": "SoA1Ls9k6DotAXmJESMtHBoLyCcmYMFQ33oLk5Zk4kRJ2qpGSwe9MRmhkdJgvw58YvoJ2QWnFskr46CMyEqEjKS",
  "key20": "4CCzDaQZsQwRTJbiZ2pxtsgZ16XoL7UsQGP4bM3bwYhydHzC3TNcBzvjLqHu7TH7aW7eLQt8F6ST79ZGp2yLBW6x",
  "key21": "43xZT4twU2iaxRwyFCPXquo6nKG2oT5kWxdyYqcK9azqtNRjwgyt7Mdcm3mSeiNeatcCceNfyCsifFk5muC47R1V",
  "key22": "4qZeqK5tHD4Xn3Bc23YfPQS4ypgwNVi7vPrHeYmTKcmMMk9qWMugNRwoYXYJVXLyq1xL8ijMx7CgnnuPULCr2Xwr",
  "key23": "5ypbDuFNPXzYddfgY23cUkYCNR9PBLYPwhx8qEAW2Y8Cyn2iaXy7qpoi2WVTy3EFdpENqdXsspVJ7nviBuyEWnD1",
  "key24": "2veDZkCwJ6YjjRxyPjERccZJEUGiasxCTYmmKXPsZYoZA2n4SRqBB1aGoZQLfqiNWmt7Sj3z3A47oiCyewb2N7Qf",
  "key25": "NVcSJvwGKagdZe3c6smnhEa7F6K5huCJptZg2yhrZo2yBRHwKWiDiGmt2suqkMxxJPVwv4ijfEd7nEXrytsi85Q",
  "key26": "ttBgoYjwX4DCkjSnTDoqWf2xoXAybfGQrpSogrkrHPZ7SxsTUUsoZVH5s9nPqWhEQh4DLCc6evx8xPZyACELdZf",
  "key27": "V94S9TTFQJ92vqtW7aZLdd7uAeVLYqwfNUSaR1Hzp1ysrM8GJcp7mnPb4jKNfGKtKeinuNu9uPRqmeYreGsov4c",
  "key28": "4MZZESbw78PU2TZGrGv8H4S1DV73PrnmPRerxB56qmVzyy8BLa5bur6WjZRHKxc3FKhvrdtBm3yEzWC9tYHQtUWC",
  "key29": "39d2wjH4FiN8GRfTauddiyFfHXSYjuUkqAWpBG36MNVmNP3jKncz2Py2Yp2iid5gMxnpddJevkNhqqTLFqHL6GPF",
  "key30": "4AAVL5tyF14vBgNpEjTc8tt4KPv5Rst5gLr16sfHFsYEmLkbvtrV5AV8Tnnhckrdy3ifQ3xgedPK3BWxnHjNg8bC",
  "key31": "Ae1EDnd8Rde2wmJrgkwbnqyHPbLeSMnui8PDyta4s37DD9S9R3FCK7GyPkAmsBGDJVJDZKRH79j2ERsiE4nDepM",
  "key32": "5SBYkyJaqDxrXBePNqVJTQj43PRTU13VsmdyorY6fD1vxXz8F9baKb9ytSG5vcYjM81xJvSFTWwNfUpPeouC7g5B",
  "key33": "22e8Nm7DK3dEAmMg99LpnBKoT7XDJ9yBdY9P1523Vba1n7V3nttskZepgGAHsLo2w44YnWcEqwqTs5WZt5eY2QEv",
  "key34": "41LWtQDgRxY21eAGCzjJYu7vBZgFXqDWTC6qTxgf5PAuKEdUBHDkTZhPrm5AjKrqqJ9KXhDKbaSurptH7EiDsixa",
  "key35": "2NQM4gUC2mCi7cyKRTeZeBaNSBw8KuSQoxvnZaoFTyDJwvWroemJBFpFkYRb26TxvN5K8CrNjJkVzrEujgogECun",
  "key36": "44zghc8iG3jzDjDm9kQL99zxq9QtWJ81pCrJnWzQr57Q3tY88ASjAhYXPsCrnToDTvmaTvtFrxqFjh4bLn3zqnUM",
  "key37": "mvpYHq1124WGBojAqWucxp9Y72ivyweqbZm58mNTcpX2iMCjHMkHtrL6m5cTU2aczbE2RZ7ynXxDSmTi15XLSqC",
  "key38": "5C4MfbMyitwFeNvaoobkm6dWjZhvvkMPTFnxvCAhYKYrNQo3dNqr8jZCaHKFFAhM3kFGEKibc7HWtRpY85E4TUPV",
  "key39": "5WeRvNjNAgo5KYWXiYAAEFfR2v5J86nudk6KSWqg2BxZ5yp4xLJZZXarsStF7wR5EAfRfQmDAZT59eknVwU6xnbs",
  "key40": "5s7psgD1P7ZZPSsUxbDzHaATrUUYNgwtTrj61piWd3PRauKZGAkdxTuzTgsJdSP6PoGHHC3VhRQVanGo6wQEB1tS",
  "key41": "5iaqj1wNHznhQ4eBumwNuPY75QKyLgD9D8hSxE3JEbPk6d4ZPumiHMm5x6iokmnwvcH8sTYd68GWwycVsq38BbVB",
  "key42": "3bUoWSNFMUvmvM1fMQUAKyyKVyRh5nkbCTPccjFTNn4JJPqSqZfZPpTvfuErzQLjqBWX3QG1etycuqbYF6zLLEWY",
  "key43": "qfSeQ72yLihtHZvNTTNbuWk2TnJfM2DoxjpZuNaFaVXGc1RCfZ2LrRYaVFdGyRfC25KtmM9o8pikrbxyozav2jU",
  "key44": "5cdKAc8Tu3RRb4PA89vrDTH3vmths1C9G9EWfeBTpaDxAQuFffNG35pacM5yMnoUbRZe5SaQwf4EXgfWDdUViXdn",
  "key45": "3TcaVTUJpbG3TU9AhVHgDM6VnJSQ2tvrfnwW8rrxX19UoKW9RgFLZvsk3xYWjjE6nVgjBfUKaASsmAe8cnvvwXBE",
  "key46": "24g15ZPjRM9vQXR7oeb8PW67zHMiD9AwYTouCybjAcYFvXzABTDqUtTH7bvFyCZpJgvnrbYiNjH7fSTXHmg3CWzn",
  "key47": "3r7ttNBUghL7FBX4d2woYWyoU6dprpdzbek9PYMVcoUHx9dCkbAgb2iHb9ZZuAZrzqxyCtvRVS7H21cDXAoPLB7d",
  "key48": "22cwsZ6A3uCkWFAhmiCWAtwc8TREWpjgnUix3G7U4NA5KYAzbTV4qUWzrzmL4wvUPdTiWfkk6u4bFXvmQRSJWByf"
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
