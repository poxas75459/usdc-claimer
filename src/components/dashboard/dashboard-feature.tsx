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
    "1zp1UZgW8hV8VyntrYnkfapvBikTeXVbUUKxN8DQkSCrLx6gNTDhwcCuAWrGYZxmKxhephdjSpUt7gaTEqzN3P8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xv92zUkVygNd8hMnS9fe5wfY42SFDHR59mNBFvtyJHTghaDX5hhLVJ13uzoCHA8kgPk2D7DcmwXmS8vQYGZEUZh",
  "key1": "36MM3oavCGe9gYvzDMCqtfBRDubLYgaqj7JzBAQ5vMU1yMky4R3gEfq55xSVSTjaNToYnuy3ioU4BLVS41hnAHg2",
  "key2": "5X14hWW9dCRWgn39VWzV32fzu9fZtEuTe2kcyAEGYCKBuoPbL1cPaEoRnTVbmgSaH3byHXe6Ytaakhu1mvv442Rp",
  "key3": "2tiV2nutWJhULnVU1QfdNaLQDBYaSJpFEMpx4aRkb2Qm7vXAN8MDrtrfwox8LU6htbJgGNSFffRAssHXcfgkuWPb",
  "key4": "2GzAxgMnDj3Nb8WShFL74xd8RaC29K8rABZoRVUJE8zmtb82sgb81Aht3uXJiPUMhHKhuUMN8A21TzGViLqJzeaF",
  "key5": "3FHnC2KgyxJV77pUZ7hXabxLwKzyxDS36j3ieDL1P2iTcgfhg9Y8f5Jy8wQ7HMbzDSEN8NPQDYfQqyMP3d9qdCJr",
  "key6": "qJ4EKqYFEGhQBbTGHgqcdNEFPfs4VsWAG3G4aKu489EQS9W6wASU8phGJnHVjtixh7DcGUXiaNea1BhqjX8GJad",
  "key7": "3vjENe6F7GNyXtwWybvxWi937EmkS3zHcCHrapTQVN67uNs3So6VpKrakoj7Yp2bpy5PtUBg7Ne145Hhz3v2FRyT",
  "key8": "5Hw7PnkBtFMneASGo81Y2bjV9DsPnPx8zj9RXKUL1RGLpVRxef2MUmrbWuB2gWxTMDdt1gi3qEBSfjLihoL7txfn",
  "key9": "3bXw5awRjmSoXD5qKypVhCmXLDWGDd6X7eE1KCh8YLamQfJQ867yNKARoDL8mxqXZ1DqyLujUr8fSyNbytWwxwmb",
  "key10": "5NAFRTCbTF3BeiXhCWhUA7BQkdC6YcLBZuqJpit2HaTUUAadZSuk3JpDX9kFN9qr17EutbcUERRsHWPv5t8MGb6",
  "key11": "58N9zUf22cjfzrp57TknctzqU2LKrCCbhBWGPbM29enhHYBTxjRjn2UEHMrFdzp6Vf5jsEyoZgfMZZnkGjzY6JLZ",
  "key12": "5ou8Zm7BxrwYmeQUBJbmy9vt1gun2YyiqjNjPLsD4k8323NPghVGY4bJbAHw5JRjnrfoYZNMVt56Xdyx8HmbgZUj",
  "key13": "59rHbGBd6EHXGwZH83M7Q6LBUzJ8V6JvW1qkLDpajSh15dLgwQVjJScFqHmjA6TiZnsfyRMNbYxBLPo8iWCRFqga",
  "key14": "5y2wqKteq48A8u8oSz2voFqnvGqmEWLpj6pnEw94bcri9j4aXftokLZ5drgqf1coZC5QV43NW3tsiNDWc6cvQ64k",
  "key15": "5Q8UnXSbK1v2NQz1ovQMjwFDhp8WJ1kL3L6pmLGdNJLqeautvve39Jj6moShfUkSppuJ6PALdydB9bzBMv4RcS7D",
  "key16": "2zSNXwtQ8LNxsxw9nrS5c8tPsoZ4Jd8mZnqUh13JWFkTwUg3oRVbX98jm9yD4qRdPY4RLinBrBT2D1CyD51x3CqE",
  "key17": "rqRjtNdaeHHF7caoFYuduSkwLYPaRqsVcW49smVgBQjEzwBmYSqkLLNHdUhPMgEDskqy89XZqbJg7tvT5RroNbD",
  "key18": "n4YVK6CauTjD4VXtoHg6VKA9oknxjGekmTbCB58vQccwgJVGfoUcSV5UXXPgaGQ2XKQUXkxoWbkBH58qUzvdPWN",
  "key19": "3rBsLNVRg3gc9j8HBCDKFmsZHchHpYxD58zT41fs3xZtA6B3WDvBBW9DuTiAJYm4MFxNB1NU74WGJcEZkFvrfvqx",
  "key20": "4TRGsReBkN499ziQEiRT2DNVodHLNtG48kfTUA34zPuN7NDZiQyEFJTJMzCBfxuuh1A14gQcietzgNTgEKYPVn9V",
  "key21": "352sMbGV4WZF1KJQ8UgJdBzhGjTkkk148kM7AxELqMkWctQKanuzt2y6RjxoLMUnqasc8tdEwaYUe2gDtWa75fSH",
  "key22": "5jvwHMBdnYW9m5bZxybkNzyAtvDSnLUBiDHuFReC7PZYzvN7sPWWYpAsm4cdhoFcXjLjiTDiDAq4PHghB1ddCdvD",
  "key23": "51a87PnGCWNkt9MrdtgKn47QgBWR4RZaBsa3aLmgGRs62rJHWQiFWTb9Fiq7YX247npLy7mKZ6gwYPdupTCGsDFm",
  "key24": "2E3paurLXhW7yH8i9gRsV6e7TKTVS46RXWzDdx3WKhhC1vftGyU833ban9BeHkZNFc25FsiVnCX9r1idCj7Z6HiH",
  "key25": "5EZdj3gVQrkJNfczXgXrqWGa2mfovf4wsBctjRN9W4WcnqwgsY2aYq54Q4w6FoURnZxYZAbGngX8hbGjQBpULPm6",
  "key26": "4htJ9jGby6kmQb7ZdmUQGPGxyvMJQfi38ttt4a51uJGtHveeNR9uW8DZR3nGnVgqxZKwNaFFNiy3XNQtDiQsxzG9",
  "key27": "rmMifmzQBawgahkv6y1CHeEssphTL9da36UyKxn9MeCcaXQynXiDu6gRxdD5L8jL6qyTjjR4czq8H1xtY51fevY",
  "key28": "3arTepGQc11TwN9c4nDUBgdDoPYGbtvGs76ma4msR8GctiYuK9KtmJDttM3XoGz2zpg8UkJcWQpfdVGewZSLo4fw",
  "key29": "xJbmnrsEGMRUhU3xiUvWdPavQ8S6NQURhEX3DH2WBgk3VyCwUyoR9Vod8ppGVqpbmc3aCsM73hkassszQWM6nfT",
  "key30": "3TgmrtWFcne54UScbq1nsuHo1z1FtG6CKYpLeHZvf1diAqG7vG5sUbZyAZUjmr19GhJuC3iPxjJrX6HBW73opCU4",
  "key31": "5aVAgifh4Ewc3Jcki6XLdxE2nkEfsq4PmzXkHQLrz6BMYUnojtLUTiPDCkkHYZp9iZB7zdvABnArUNSAsXG9DyuS",
  "key32": "26G1MDJJUzH6DK3SMAJ9oQutoSCs4yPZGhLEExTs3VzgFpBmq41ZPU8r3yXYqwLND2AiR3iXME6atcPjPZBHQQJe",
  "key33": "2EZiRtiitkUd8MbBRcRHypftjDzM22RG5q1GZ4PH7MaLwCnYeAJa5bnKMGhJdC172i4euBo73qvPUrV7yDLd81jU",
  "key34": "32mz1MZFQSXgcpE8W1rRKQYgX4aCzN8UbFeneFf2AGKmwCBYFnYPyh5wtR567R88uSBSqz27i3h6wXcHxhrisgpV",
  "key35": "4iH74DCLgaD9CQYx6jgfktQN6uwzviN9JZuWRjbkkf9gga51F2PdCw77Rjr1n1CTAPAf3846qkR7m2SKMxDP1Toy",
  "key36": "KmMNdkZoZs19j7zNPKzYa4dSuUMNniowKFbTRoRYGGq3ANP9BdN18LDQF3CG3wXcpx9shYaiqMX1eg6vUtaUjt7",
  "key37": "5RXnFS8guTMcCzUnLuPb8ceBC7JVsiE6PGp9DPWhqHvJZd3SRSJ8yHTFYPuG5oMAqtFtnU6GcYYQxRSaYUXvF7UW",
  "key38": "5E1YwgP6RDPKJQPD438HFuBk1YCqeEQZM6hPQyhpfTy7ziGjPrqBjgyzDgEN89kW8FwppPP2GDypQ5ebDK3b1Jfw",
  "key39": "2eSVdZsqruf7cbdKr7Z4PqNEt6L93q55WRJHoMraD4bUD7f7XbTcGJrkkxJKCYQPe693S1PGyTPMAR8YVdtY6T6p",
  "key40": "5erzxaEmpyV9RpHfkrAMD1eEdePpq4och548XXTFbeBSKRo7WHU66kBccwrw6ffxW4Bnbo41VqJr5XnPRatCv4PL",
  "key41": "54ejPpCzbjW1SwfzydURkpiZPSdx5qQiYM9ZugG8EQNW2B3cByww4VdNcC8ftudybjSp5tw6N8URVF3ftRVyzb8n",
  "key42": "3U6ndccd9UMjxXxP3K6gJMGdwwEKMDG86o9dXW2vv5Kt8nbcnd5n7gN4dhAuUGgPCseGnFSW4YzHmuFpDrtM2Kek",
  "key43": "5vKn4TkH6op8eqEjmJADLGDyYyYVBXt7ALv4NM2txVkaiz1sxTCGrSSpuh7Ebq6vg6xDBQGshcPARuj7uEQXFVe8",
  "key44": "2ZLCzHoVHhhaRRoABzQB3G11qhvpjfesdt56EDVXxGs4E9KyrvAByBxx5E36Zs4oG4NAnhk58TkYXtEYcbFBZfJj",
  "key45": "3QG2hYrCMkm8EHGK62VL6GgHSn8dExFa4sZAvS9cQxmgGpoBFF7irq7Pn2icMj61jpuRL6NbAtQ8RsSZkPCkBXqE"
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
