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
    "2mp8vb7T8VqFSEGxyoZsnjYDoqTBApkFUsdKfiT7KbU6AA48EiCz5MJiWpsBGgwhX3EacYENqf1rUYmcrYhvzDmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tMsZkREmdsrnGHSGfNbpJZAYTyvn3X7sMZYMUe6CMFcr6h1y1hbLNbWQjjWvxUpfC5dmftE65bBV7gh74DqegGQ",
  "key1": "4T9BxpmaCbZZ1tmf1L4fcunFFYQvqtZ3GyiFRy34394kbvxthF4dEN2Z5txe4VCffJ3am9SAXSA4ZTqSaTKwG4cJ",
  "key2": "5Vdb8WapXzHH83SFTabmha3QwRMGNFEcaXyoPrHazyd9yj8DML3kuLmj2Q3wh1omvgY5WjDbRWZNahfUdY5dZVxE",
  "key3": "2Y9sFGD9EUg3x2GQAck2bwVN6W3g5yx7XkZt2KwiRYkbzDdvC4kCfCihLYu3vX2wn79nG8U1br1oia9PqN2q78Li",
  "key4": "atTv6uc9CgcnLyVXXGpWNzonXLuoVC3MWTq1HxoXJnqM8roTY11oYTr3t4QbtJLYj2TQ4y8xgjpjDTZdL4QqVQM",
  "key5": "2suQCQ4qLr57TnZEL2RuaBfhXmFKeaXbMtA3e9Q3AT4yvxArbwwEHz8kc854x15f2Xim2wyazEWZ6DnUroHL4xpp",
  "key6": "4M3TwCtxBen6D7fosJgE3JGou8wxKYW5mZnf2SCgjHmfGQ53Y66wjnyihQdJCYt3gJ14pKeJ2VczDYTu5zk2Woiy",
  "key7": "2iJkmEMCYm1N15ACciPzPBSR5icw3geBspQGKH1weG7g7HYhfLCFMuEwZxDEur7NZxygRLaeJrtHzNpgPQ66pS2P",
  "key8": "3jML731JZNL1CZA5Nr5NR3g7V8uqTSSV68dfomBmvNcXhCja2fBtfWMH1EQcKi3c5AAxcXMfWQoQbjqLTHfk6oq1",
  "key9": "4geWRWCVifqa9NWUmwFpfpMJDspdWKyPL3CcHb5HWZLV6TidaBp4c3TLtfyWjJ8T2bL3yKuUCh5mcXSLCzhawgzN",
  "key10": "akwPnfkVSWyAf9UivyWQZEr5o1QzVMLpzuLTUcjpXnji6uR23sT9cu8C5p1t6eF1y3V45Gw8FxJ8BPNQGWJRrsa",
  "key11": "nRuuJ93fbJgf7jkuDSe5yQsW6CpvFu1p5u1N4zkTGEb6jneVowEMqVbjVvaHkhspzZktzhdYWa6K2T1dc8sDAip",
  "key12": "XyuPthRvJXZgonfiFhmj3SfhqTJWumSWtjoZ7TEkHnKoyD9mXGCCC5gWgf2RWDeBBoePeEmymNsvZZfUiG1ftqp",
  "key13": "3K7j4GkFoNCbfwn6GvysqjaxkyinTAbSrGzky5BMiucP5FHmGLikDB3XAjH2AZcRzU6vTVHpaD7XPkuaCASZnBtY",
  "key14": "3zxQdggN8foJEzAe9qKAQ7MpKNVk3AvJv1ytQvZpgJJTrWQ2KL4yZXfcXAvTmnJZVrAyHLfDRUyZsPRFuUebw3EN",
  "key15": "XTrBhazigfvHWdPAaFSiuTFond64aBUk1i7pVFoTSwTaBnnapVKhtYGN5Fzy52YAQZySQv5H6K3pTfhS6MZFKQH",
  "key16": "3nS3DooKT3n1VM4qXqhmffzxW6vki4zkt5XFGJAfKnaUub38MwwxriTVUNHvdR7gbbLatzxtztv5RWJFAvYCWaxU",
  "key17": "4CMmPqDcvb2g3g4xT9gukUyen83w6NcVETBB21TNcjk3nghiwmks97UBWheVj8eUPWfQ5h3svBuwK7Er8XoPSwch",
  "key18": "2KKZFfCxeVhGTVuE6xR5uBqBtcyxezkhpBwFAGMpg98y8wKVPSsMbHzf8rEayXb6c2rx61w1WuWYMfX79teiAD46",
  "key19": "475T2xTiGbg8ota6zxm6TKUGK6GRKcgJLGNobueHa1CmbM7orogjeF5ATXpdyTD4e8PoyhB2q2wsffWfeLFWPRfk",
  "key20": "3TJ4cZ8wkTELQcW5TTfF2renkpedCD3F2wdXdjmzNjhUE8v4foiNzf72nUcnFueJyVoXRGBmWyGHGYDpnZicr4jU",
  "key21": "2ouCwVJFWajyjyVcBkCM3ifHLxiWxdvzjMVchbzLuz3gpxko1Z9VyEXZM1q1mPCg3fEktcP88TzVm5u1rL7aNuPZ",
  "key22": "4iqFJ1XZcHZSe3H16uJFW4gvmEvC67XvgqeHMfrDLLf8LqZR5Hhmk2Tp1cpBC7gvTAVw8ACRSgcwxn6ThRzApc1M",
  "key23": "2y5ZUf9aZKXJyg2fpJUCmNHJdZWP1GETBsu2STnasG6QFoWaDKUDuV1pg9GtbvrmpHEn6NMSSFR4L88zbYdEfBja",
  "key24": "4H8d4vWrgtgBmVxrufpi2Djw7FAaRJBbxg9zSFsYxe7e7TE4hoMMkKfZV5smyBBtHkRb1D6rriqKxznt9Cksi1uX",
  "key25": "2N2zFt5wcT2fkiUXxVmapKhNtkhwuYeh5eFwz1wm7U8Zq9yvSvjMte32wwUNLcBUpuCkdmwWkn5Ho2QEXTcgFwKE",
  "key26": "4asFRUsZo25nMEaey5C6L1WRxbMY1dnLBEW81UCgovmAx18aiijkcZ8Bi1BeoCv8Sn5DzjYr31KPnAUV9zhsV9fw",
  "key27": "4HfVC71T3wzDfHWJ3BRRQkE2VsPo7QnNHsxLmVAGwBQBzzLaMKt1qzfNqqrg4ZuxAeCZxrEdYm2oLRdg7XvvYx1U",
  "key28": "66Dzyx1uKtefP58TPjwQQABdSdBvo2QJwpFbRd6dfotaMYjYn3Ar8wRLFAGt8kGGKQuFqkNgtLqaDPg3247nKrnA",
  "key29": "65qybyoU3PG7tCXacR5zwnsHgwWygL5p3YuD3fAvH7sUeGefvu9ziRE9SAZQFEDKg7wCUhwt5piGfqS3v6iygCQr",
  "key30": "3b3UDDcDreJdDWW1fVeXXoZ1hM8mC7dQM2MAorf3Dr7uh4TafWu1PjC9HuDFEQ9ucgTmfibywSwoseRMosmGAtGL",
  "key31": "4qjBeCfmt6w1gaRAczhsV5jBhxN2vQzRYvMYwic1sGKWC9TRrAAmjtX9U5LeJiLHt1BCq3hbTGmRoecsy4m6njDm",
  "key32": "4Jdbxg3qHoJAykeLdAhX9wt7LkbWEdanhPAGWqPSpkNCWikBr3N7bSMx2yqJsr6qdjwpxiUFAg4Mfu5PyE9kdGYs",
  "key33": "55vNpM6Uwj7Uf2hPagpKPe679TC2TyJsfZ2onwKVxWem72udh5kMg9f5ia4NAqoMF2Q9UgmLTW4HaDxDS5yicMut",
  "key34": "62N52rMFGWu5YKrSifh9Sz8HXgdEWe4TQyBFKSgTVrhAb8qyqXowLBHcpkcx5Jmx3HGDtKQH6T6JbfH2ShVcXur9",
  "key35": "5i3Rcj2N5ybVw8j5ykeFSMq5tmZNjNBmf2BLezAWGCKa7onMSCyKWB9nLuYJPW1pzsxe1pXdin8bPrVGCRCUB8E2",
  "key36": "pXPfkvCC2ALEr4UHWXo5YDdPoTaj45SXTM9QvyMhhH74nGGripfcVuUiugwYEv3v4cc85gLC7UP3MzmpEVTXaxh",
  "key37": "KK391LUFcS59Q8PcZHAWykNdt2D6o6c5R5j9FCZdZJVpkuojny7CqGXcp6YP7DVWS2QNdhSizio8qMaWD97oCjv",
  "key38": "4PnoS5D3b1BxHTDGgQBHmFdVtcTuYEKaQTyNg6aBf67Y3bdUE9ENnkUzJaxypi75RGuzvusjHQaqKpNQTqGaar9c",
  "key39": "2byHpeXYELcfh73Pa6QZzfQ1Ek43odFDZ5cuaFg6TBU4osrSQpVy6GBt6tyZJR8e835ErEiYE9m9PfVViHZak2wH",
  "key40": "4gGhNoU57uqdd5veuxgTTC7NvPWYsFYnDhN3AnzytJYpobdeentN5FDA7TkKt8fW7xKa9DLWxi4JUKU1TwyVs9jN",
  "key41": "3iy3UEw4T33AEczQ7vV4G1mcxSyvigHwa3d6gk8jXrjSTLstCqurPthRgujckYEaK4kfKfpJmMajsqvccHz3DtGx",
  "key42": "3qYmpAuT1fmefHyMDTpHPQUCtydfjxX7cZuwrHStKE2woADnu1F6nDrsXZWnyiEoVZhW15Q6arY4SE4UZEwudV8A",
  "key43": "5gANWScLhHBPZ1aSuKe6kL8826Jfjy1xdxCdVa4TnDkJVWWXB4Wkd9fXcbEu1Ujqw6wFXYi6LGNk88tmugiFCQVt",
  "key44": "5c3Gra7nUtB7qyBbHhthCod3CXiob2DAaqPP1jG9T4XXThorw3LLuiaUjogs88Y7GDaxdca8aWg4jgDZ9MvZWAwR",
  "key45": "65DAKGhZusN7y3CYxPqf4FseqHyxi2H85YwdSPhY6uuowPxjfoiLVmpxkFAaEEY6KUssThLoF9GY2USD5Aedpbci",
  "key46": "43ciKpfoniLkRrdb6frZSsSnmyUC6KHTFzkepR12PEztQF6LXK5AJJ22nbHPjU5A186ednSBW5XpHVkA6qxP2ZQW"
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
