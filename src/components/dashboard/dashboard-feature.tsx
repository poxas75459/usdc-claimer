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
    "4oGyN9peq2Ek8RrNbKxswfJPYFLtTiFkR1UbouAJdYHZbLqREy3QwhN2h3DEqYj8G1uT9d2wWfRRDHkkdtR8Ut5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22og4mzTbXu3QNtsJXG2uy6dqJx3tgwTcg9AoKdRFLTqXENnbFjj6hgG4GJZseB7DuY2w7gLah9pRHCZBozk9XvW",
  "key1": "4B3RvvcX7hLWgwjpt6zQtfwV5pRzMcGGRgQ92ufLh44WPuzpMN7SJMyA5YiJHtyPGxqtvrBNoyX5dDmqzy4YkLTx",
  "key2": "4VnktswKEcirFb1NaPpgVfoMMPLHvwXMy1cDD1NoMMWAmTwH9ivGi97K7JC6d7mAQ4pYNxGYhq2rJGLkp2ad7c1o",
  "key3": "3yKSZypmM3AcfTDLanhhSmp7gs6NoCW1mVEiMbaoyc418J86tBvhdBAeYG5bfxPtmyvPC9aF5x2gbokcAPWs743k",
  "key4": "xTjFtQpiq2PHyhfbAGB6zcUyaUBaUDAXRpQNsJirtQwMCnoVq5YytQ33KixabLCeGUYHDKZN2TdgcGMG7FdcT9S",
  "key5": "3Wur2aJUwgA3oevJ8XqAuB69zqtx5A3u6aZ25LDoia6Y8bMFaKuvAzKxAGtQyCzzCRREmd1oA6auqQsCu9ab5UKC",
  "key6": "3Q8aeuMGKrW7z432w8wgsWVK4CeR99gNdTrrQfHcY3CRqDocs3RydLpKdZyJ6wpUvzHDKLgPXNNNbgzGrfoSB62s",
  "key7": "2i3ss8mVwgERj1EUwXYTBpfuCW2NbNJguoBk7coc1hgqNjBvUAhdwne7migE7sti1GG9nnU7fXwfugrX33zfXVu",
  "key8": "1KbSm5LgRnLNcxUuwsn4aNsiQpwtktDxz1J1EpntMhxi215JKTWt6sL62qcXeQp36xmxKrRUpX7m7Gx7YCdwqdc",
  "key9": "2WZDj8hjoyk5nrbM1hYL2XVfAibXzEtcJWmDXzEMrLpboduYuhzNFyWuHCFy9yny1GHLkqVX5x83WCKSkuikxs4a",
  "key10": "3d1bKjEMASibCFkjNq6fFBweqgg9YHUvcvYCPu5HdGeXep4LvBAa7uf69m3bPJCXpMi8Fmyrr541yPAbsNZkDvqk",
  "key11": "2JV2EJJxbz6ceEoNj8ZgLTvR4EYjYs1cavnSyCtQiAw7opcg6KMF7z9awcP4u4Tm81UgXrmNcdxhdx64NZP8fbff",
  "key12": "5Q3UqV6KgofYhz4A6JmZcSLgaGGUj9sRkFvkZTAkyYKUnspL8T1GWgwa57RX61bS9XQw8E5wuVJ2kR7KZYX7y9KD",
  "key13": "2BFXCs9RDRvopxNSQ9c4uQXUVY7SW2LXyGs7qe6QjNoLchVhkXMerM47r2daAAKx8j2d1mHbif9foYRScf86y84m",
  "key14": "4PetDEvF4dGUMf1wJsmTJ3ChqFPnA7HNF7ifwnjF1uyDz4WK2xU8viyhDLmHyZXhKgvad49xaCNgjXDYnoZ2Ekpt",
  "key15": "Cw8pLbkaN4MgeWssRuG3wCnaxsrmsqgSAuqq5eaBtoZ7Q3vRfoj6GKgveyJWvVaLF9cgfd4KDcUpNevPwphMUkS",
  "key16": "4EDGhtiBayV81XndLvF6QR8HUz5Nb9yBv9AB3dYHbEa5KwgEk4QGXMTpZ4enDhYmDto74mLx5bf1ivxthWM31BYi",
  "key17": "4C3FFQpThoMFsP2sEhbFyqS88wZUYyMtJQbRNf6PnBgRCDvKKVCCuSkmAPxobiQzdqzVSPBVw7RPeYkYTeUy6qF7",
  "key18": "2B7DZtbcwziLVbhG1RAwYdLQBA8b4gNPnYyzfxtRv5WwMpok7ygL4hBEvvoGia19BzzKEyY7N1DijWWr6dkpV9hx",
  "key19": "3YKsmQiM8pSUcwcitnf3zFkFb7mQoT58yiXLCc2ZQEeehKGzLnosobD2RN4Gw7ABChNHV2tNAmgvGR5zSaZqSxPw",
  "key20": "fXeA7TTQzuXouJcqi4QFau7zDqmJC2qxqzFnVPNnQmJYa82yF3uS9tGWFVVtKeaCSnhLLtGayiKnvvX5AkTMrig",
  "key21": "26c9uExNFEpzY1eFwYsf7G3Q4YUmxu8ZiQQdXmpKiDF969aXvYcWaF3j5TqFCJh6kq3UbJaC6UPRdB9u2NxyGGY6",
  "key22": "3m3C98o5b3rJ11Kcg5j532XYc8tUdh2NxegQvDtdNvVFJDSVpwZ1UbGfrPx4ymvVNWR7imAgTEsDkiGxoipeCbhJ",
  "key23": "5UHU5Vq7aAL6iTks9fDMr58hoRWYAazx2ExenRkSbes12V4D66A6cpdXADfLJF1DKiUb98K1MzqRNWTHHukwxjyq",
  "key24": "26JfXzRJvmAdPjT5H2v214bi3s7YvxP4xMPdFLTco5q2MjNyx4nu7DcNbPxUm9vX1VqpMpf5QSm4ydqMsseWqWQG",
  "key25": "25qapTfcRtJf2uyhfZVrUo48vrFQuy3Lmt8AKdej8zfVb8mudtK2eLVkaQELa1ACFthJ6BCyTvR418JML6skVbTW",
  "key26": "213YRn2ckXKcmTg1L2twoCGX8Q36xW1K2iWfSEzyBDCDGV7kgk4rDmMP4jfFvspTeyF5QxgDj3XhF9FYiz2zpFgR",
  "key27": "4J5gtPYvU1JEoL1ze3xYifLWEq2SnnDoAXtBNPYE7SzD7E2qTdiyg3fR5fMi5nDeQMA1cX3Zk4Pmre6PKa7CRybB",
  "key28": "2k5dCkKhhtfcKMdee9EdHfxLitKZcmvxBjf1T15dgXWdJyH64gYM8VhHP276fyzQn5hsduj2DoTXwbuF9t4DWN3A",
  "key29": "3HdZBFJDUe4ZFkX1rgXMZ7tqum6RUCtDspMNZ28qR6qM9ohV22kexTn9XX3h1LfMVvJ4fCaDC4qvB63xuQGroUZt",
  "key30": "3eXQKuFuqPYSbTkxGfYfHQBAnfmJYCD11AbXSEmxbPGuL43nD9SpDrdZEmb4kMg5mTu5X3bRkSdSQ1rD8tK6oJQK",
  "key31": "2gPTgEf51ZijeactiExh2oT75WT9m7CSDLC6Dtc8A3D4e7GxMPaFnVswahM82XR4S6Hhr3qycpoaWwZ2knR1xMnN",
  "key32": "3XYhvj6thonFsF4c9vv7aHrWxPxY5ZTtLETL3nNhCK1xeZvgi645hECRy9Dov1s83jJSMTxqQVCZuG3sSF4HZkNN",
  "key33": "3QaXNQjbP3vrVz5poTPh4b9KD4tYoqNppTeHLZ9ZDiWV3ibrU6FV7U8uBVHdGm1EzWNC8kGck1ZsvH4Qo7nRAcQA",
  "key34": "5YrZXF1CybWjjyx6arPKVtJMpqSKtEiEViKHFD841yg2ie18yV8Xig6Ei5sMyFV8h3SGnQYfTPhb7iekhaPUugk8",
  "key35": "TYyhmLedkewaJqVVwwcc6cuttda7E1yTXGMBebzZaNJ6owzrzrdXmLDKTimJEAdLHSfdk7EZmgTiPCd922grZDY",
  "key36": "uhV2wtj79jodoC93maU7gNi7zUtTX4CMmXu6VVJsspUaW2JnccukGdRCEVS5YeMMQqRJKrXUCpyhMvQEojZVDtd",
  "key37": "wC3Zn3ffLFiWogoQv12kA4n2B7Dok3XJdcpNy9LMxpAceDHVAmpL3SWgFbrittdSnsMzbYubgaGqV9Xn2RQrnKw",
  "key38": "5vrV5TaWZgZugAnK3ZXgg5ZGyMLKHj7XmuPeuN4KKnXaodcej97SyXx7cRezAtCXntpYB1eKKGiZwSSthR72bQJd",
  "key39": "5VUKVfC5xZN37ShLjNELWxuxKmFQNvpofSS4MEk42pEsppdcYdCvtj9Fdv2fR5oGr7DeGneVvQwW1THNB1iMtZnr",
  "key40": "5MG7kgw5pNmtmpMf8CdZbftPW93w1okehRvJXxbgAHD1ZnUJznMNE9aV1txXcwV7dTAfYNTpNeDjVQEccj4Q9Pa8",
  "key41": "4V2J1mUkHdqxpcnZiswxE5zvCwDkbxxnarGKPyAStQQ1woVnHTz6vhYR2Z5NLByqBWAjzStLvfb4ACc1UcSPkqWD",
  "key42": "43L2dGnZ6t8MzDvMzdzkvpyv2Ntcpkww1L4hhNhrKJ2P9bp2Wgg3tJAEEH31zQ2ffRHViNKhjbzMFJ5B9yQprxMo",
  "key43": "5ZfjNvkFUFCwpb6mwntiS7TA4XKVQ1E28dRKsYBQL8Hgi7wrrR8k3MhSn9cenpnrWw1W7WN7dziAY46nYTuMqVfz",
  "key44": "2G1dkVpB9NQCwX65oDmAMYYpu8sDgsxNy5mic1q1WkmDG7Fy5DkywQkRd3d5um6XzXSccD5DBAFPx8npbjzJSPsV",
  "key45": "3ZXFvtwa8BBmcSCN2uxU6ZWWteZmWVN87NgheCaJnaf7hhJJqx9o59FxC8idw5S4FBoqvrXtBEa9ZNq16ejv6om5",
  "key46": "EseM8vnYcon2MoPxLAtqJ2GQnqdJGECAqJjLnHkKj3DT4c8FBxsb9E3js3BeZgKEmtjpR2LjWN8Fh6Nzm67yuVU",
  "key47": "3CMXRwXmdvFz7ySrBqZrTiYEWV8Kh9rqPCeUa3FSaPKwAbN56Fkn65s8PooWhcUP2iXGqeZZsF44niWmP3JVLJ4F",
  "key48": "vwymcLPVszV35Mo2HS7XtajjVB7ySopVVtLWBB24Eg3vG35G7FivpustsgpNatCkBJrKvhrtVzwwbokCFUM8Kcx",
  "key49": "5YzvvntwapjLUwYPTUaay3KxMzJVyEawWAchWn2XzTB1atqaH2DY9hd5hWhRVyyAp78DtKR1kp5NLmLGgaKWW75f"
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
