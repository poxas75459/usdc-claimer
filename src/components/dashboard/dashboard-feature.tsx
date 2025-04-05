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
    "2BwBkwiqDgLtpM1CazaMfm4cg5AFneeq315Ghy36yKohGB86FDedgLSfSR2FpqP9xQdWdmLqZxoQ5N3v6UupVXqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TA1i2Px9cEYwQQRPwPiq61Q2xu9J95o74jnbgdbdsg66YFRDU99F52yWZ28k7EReZ67cyqcGiuzzUYNtgNYyZkA",
  "key1": "3wxLPsoQfVQkKJC7eD65SMStjKu7AHrsgZ3dY5jgSwFs7d4G1HaJpvceoTA96BFQFrpwJ2vBJP5fe4LqhskdFMXF",
  "key2": "4GsgeieNt2PJ6ZezepvVWKMD6qe8WxjEbkQyj5mwe4i62GiNT1SKmSA3PDrXjhfVXqkwvBeKfwt3yLdnkmAH5jan",
  "key3": "2B2xR7dYiKRr1LSU8wU2ohqfGD3ZswLr8RwobyU8sT4rEUXdhvp7oUtqdQsbueTXHN99Fm54Yh91vQUDbEc3XZbT",
  "key4": "5LxXYW7Gu7ZRHxbJY896o4Se5UtojytRuvrKTgSgbQFrPsnpGXNcuxtTvkthoXxS9AMWqtvbuXds6ZN91Gv9MTpr",
  "key5": "3zF9guNM66WoRT2CNffbTukpuAPBhXSDe4kri9RYeXAJJq7Fu9EdePayeAivtJvKhx2aVmBAroZxn3D2pbtv28JS",
  "key6": "4QtvnKpM9YCmfkz8EJwc8CoEqqVPH4BZ9ij4rrBtAL7KAhGxArCKEAuKfGH8ZetzvT7kLQeTn6LmTcJKRG416juD",
  "key7": "3seFijqrpbYaWZEaNwph93fqhr16FkgG4gQj8G7eWWfsC8p8V4vkVCqbc3U76vtZjGNbQJsdFG7t3ZBPDWhqFWAF",
  "key8": "ykGGgx7uukbkxJAr9ZAXygwuazbzVL96QS5KENm7LjtcyGMP3oZJzS6oCmPoifFbhKfPz5RZmypdCPXXhe3NyzT",
  "key9": "4VUK9jG3GsEzYvFfWVjodFVyV2rcM6wqxqnWvD8DnAaXpKGbL4rmo8X8V2Bb6Rqqk5NWBCxEWPHdjj74z6JYUu4r",
  "key10": "5CrHsKddRSzbyn4ft7kdKwe4w5yAXUB66mWPSAxMnq2RX49pruRQHtD6fNtCQGNJwwCr5WsMvE9kwtWpeCuUyZys",
  "key11": "29TGjZjUUFb2qSPtH6NLK5g6jshXixvEop5s5RQDf1gDxq3wAYQuhNCphJ666Jpoy7r8yvEogKRQdeTfQfTsLPiF",
  "key12": "dcCYLRR4wL3bsEcEycGBGvHMz3ifaX3vjTdQWt8EAFhFGs9ARg1d6r1w5G8ss5W9mUUXdUD2vnJkbLRR7Hqo8TM",
  "key13": "2rcYqKEkJDTtS92EqB7jJTGaFcj9hg1hTf2mQUNcuTSEvb9CU7y1P46pLPxegZpXJGpovMpe3Bra4nSdKNgD6bRZ",
  "key14": "45tnGBnRXEPdWQymoeMCcwckYQCXX55uZEUC1tb3K2GVVhPugKctcJfqjYNzCQCJKvNeRiss1w5beG6wEwHtE2Nz",
  "key15": "Jxp6uAPL9js1crf4toe1hbdSNypuipp943aoZE8TmkHbSTu4jhNUHJJFnJSMcvqagdsWqwMfRdmhEbD5VhHRdyc",
  "key16": "3WAJtEhtCi5Muj1qzdLk4YEfdZuvx8goo7HS14UWDYkyEuyQjKZnbrt9az4aEmL36s86g2bhKBgqAfsLnnzwNJYW",
  "key17": "RMRoE6yNGEbXipW8hgMmqzSJED8t17GAxFP3yCYv7pja9CifAsLCL7ZhFh2aNCiYqVtYLLgrhWMVD8DD6J6f18t",
  "key18": "2BsyGBoFHLXedvStFqFbuTLQFER7xufj9wd5wdmtvHTu5QhsEZsG14Cc2SRxksSRfZRcpBSayBXeV1ebjQvT7dJn",
  "key19": "2ynmhG6t4wbF4HmDtMhcbHi96U65AjxfEkUwHNoUiPzzWGM93o1mCg1jTYo7VDxmvDB4b1Bd78vc8o4ac8Fm2Pjh",
  "key20": "4Vq8xSJZgwFQ8HVL58d9MVz1uhPUABXAjjFPcepxgj8ciob6kLb42YTWbniwP9CGQLHeMww45GgR9vnF9XRyLLAH",
  "key21": "2TQHNj6BPNL3nbjGYn9w2RUzTy1bYmf5t6AVshEDtwikGBey6wD8tA6CDtp6iZ6eJLdu8Jjv9LfX6FVfubfBEo5j",
  "key22": "26yHeWTrrmXkdBXvrGLLeDR2fpTeT5ZvdndM7TUu7P1UY4PEHxFP1ihQn8XXT9zhakQ1mjyCDixUTxbf5ps7MVWs",
  "key23": "ZfGpDw3QdZ1pueutqtL6Gh8vtRt1Ge2Zc3VqVg83ivd1T8pr3qfKJt8HTDYu2oSkmsuEakpdA74Te1piziSs5QJ",
  "key24": "2r3vtgEauA6nHx12Bsac8tYkQ5c3N1ZAdvcUtUzPF4GXrLVa5m1HVNTWSSbtE5GVbzpCipunquUX9ty2JU72QnCD",
  "key25": "3Z6W8uvR4nvnLG5UYyeRVHG7JeZR5UsUHzcB7aFr89DF4rd2JNRdzJxurGhe8rwVeiY4XrPhm5QPb4ghbXDQ2wJm",
  "key26": "3BFJA31EAmr6r6sMu4a6tLK7UyLLUpYHbX7D5guDy2m3DhBA9oub9L36TxR8cAziPFqvqY2iSejoH7kNWoivgmN1",
  "key27": "42HH74PJSsSyYDfhyXntiKeq2QYiLpGGokp8CNFtHv5sm4DuwxP5eQDsf5Thv5AAxHi7wY2Z2GWhpmvDa7D5FiRg",
  "key28": "39EcLjWA1cqk4d1bu5T8ZsVsRbbnLdzzhhZ8Q3xHRYXV3seUUVuDVKgrpXiCavnRuhxqGUJ6yArKFx6oNpLws1hN",
  "key29": "2WsbWN3T7Sw3ibm5FxFdbcaLsEGY6ZURrGe2BYn8anZZuwwcXFC1PjdEUFJYiCuU1u7Ao3vBbgbpVdLcTtwWaz4T",
  "key30": "4WL3FmH5NeDj1TcLDovBihroFWSjTd5KPC3e2BJAi6Sg3FySnY6yawi8QwbTcrCJmaYxCJXmg8gpUiDUbqcvc9C4",
  "key31": "4RPpFwA4Vntabnw5CxuXarR3FeiSLgt17cxF87ovPyAFoWC3qE6yvGAB6agmmMfRjxz568F2KQt5DSiUibF8VMnQ",
  "key32": "2wqg8G5PYagKjFwTbm5qK45A8ZSSoKLn3wpMy7Pfajw4G1ADvcm6YoQyB881Fo91i551eLfRgZ4iFcAGrBGQf9K3",
  "key33": "2TQyYUDTMJKe8xyvY3tJKT8dVVuxUkTs6mYKiYTwicAmjA2oVaM1iiz67L7EHRQwV9ZMbGNuJuDh7HHWioYvZveR",
  "key34": "3hmzdcHJUbQgpFGb6px8dEXFUiZWx4Nha89aZEJ1Nqu39LFTd4egj3Y8pmRVNVzKRoj8i5wCooofu3UqYhVeHJDw",
  "key35": "3nZejFCEYiq8JDdrJYpVcRXPj976q1sXxVfJoJaRiPppW1okG66ZTo5UjB7aq5qB75vePUSJXrVewerwPcFZzhyH",
  "key36": "2WvwptDXVnQx3dRkJTkfSFRF5fG3gGfcCZXZV6YuVL27Uvo8u6wfWxKWrDTRAFp3NUCiinNhsZMTFCrZLXynfn7Z",
  "key37": "4GJryBB6ZYzcAabKA7CU854wLCXkW5wN1seDGLUuy6dh7BArXXkgZ4mGpzBiiYEptJ8KrcYT7VVM5j2XP3HhLpnj",
  "key38": "3U5EEnGfHGRPyUo8fEUcyB4NKx3ZtMXxHdfQpdLqkBvsmJrCn2XtZQBpNSb2FCbaSnDVAi6pCRn76xrUM4iqCbJw",
  "key39": "JLNrVmniDvFeWPjETHnEEuySrvMZVNsxkxusFJGgYt75SLsALuwg2NhaaDuEu2SuJQd8pH4WejqxaMcGmHFhaed",
  "key40": "512Lc2dm8UWXn7DshDmVt41f6B2ZfLvzJPQXL522GkCZ2HjNxLCakTNUjUMGV3REsFJ1ynckvgVZ2cLZLjv92njQ",
  "key41": "2scoJ5qS5EpbiXeEARMVxmguXepA4PrBvzbH8BtyQL31JrhmCHtpVN4Mr5HyBKqY5PX5rBUUq7T5RAbLCVw8i2h2",
  "key42": "KHcLcXuQ9QAie8Gg65kS3gbc7ng8t4SsnZrciNMAQLRwQhmGANPAs6iFGvEXFrJU9pfZvd8tK8feLkEqzafDNKg"
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
