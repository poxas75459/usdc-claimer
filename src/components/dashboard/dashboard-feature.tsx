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
    "U1Bkymh1EBXJ6cF7hrU6C7FuAQVxyuLAAk4w6zftoYpQpDVkDQsMP9GPXkdFWHvKmsdtpsfWQSbQ1RBmW7G9pCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Szo3MoiZmV7FG91hFALHTNhMu6nNXQNsZ2xqzRz4hYTBVPZng9MbNLYZVLpnrxoUnwEZK9aCivsKmhStK7jRgDD",
  "key1": "3XedXkqHp56Wedraupv4VoYnTcHeLNVt2mdRa7uuhwzpzXB9KW8Rjop2NNdh2459tChqp9t6KvS5Y4Za5fmRJqPu",
  "key2": "5gqZdptQ3nEWniygf77BQAY32SpkHcpBV6Vrn91aaYkPbYZUmF8fa8mMvegUaUqz8Fqdo5aaiEfnzPjoxLD6RCwb",
  "key3": "4gYdJrCyHFzHqHrnsTtYSgJe47QJuJExUMzDuFHB6boKnD4bBRv4xNJaAoA7HNjcn6YEUJpBupfoFRdGESezbJsU",
  "key4": "GSL5pihLn4Stfu9awqGnZdoNfvrPKJQh6wPcBgeEHnT3FZAiKQcwBc3aUX11D39tsfqXF6eqvZTKnxXaWLHQEaA",
  "key5": "52Jpki8xj1oimvJ9KABMqvYS2VRcm2aUgDP6WgFA9iG3DZua8BXsvf14aaqexAn63pCAkjkoUmERa8J7e1WSboya",
  "key6": "5jDyiuHRpVZ8FkmpEQDrDTGHwGdfsYCMYv5WmHVkPtK4davkBBQx63BonPiRtYjpap9xkjZzhWm94PuHWEhFM6ph",
  "key7": "3z3Rqw8xupDDS6NVR6rVZLuDAqoVvFRuKwKitHSMZH8CfxNpzbQwgGs3UxZQcLQCeMWG85Dq4S1rJNqLpzDcvxDA",
  "key8": "5UMPxTCjqZ8CWuVPaB3PLGkzfpahZBKapn1MwpzSbqfdRDQgaW4EhLAALNWzKrbWogWkL7K41BKUieYZ5QcjhmPA",
  "key9": "3HYswnavrfAh7eLAtv2veyoM51rSi3c48Xs7kBYiYFFaLYCR6cLMhkTDnGmsVJ88m7UKt21CgopVp3MYPocvgZoh",
  "key10": "2ac2USAZ3jDUsSkswLgjgZymJTqtQ6W9wzGANxtwiHYyEyctVAFYMhu7D5oAoAMRDrk8jsaqADhE91ZnzVqUFSQi",
  "key11": "yjFxbTRQ2WLFs2qmPTTUmGoLmWBYNX3UVBuMduyTBBFvjxxCR1TQ3urRNqjoVoG1oj9HcWRT94ezFWbQbgSqFEw",
  "key12": "5mvvW5Bp88uq987x91uk7vKssS52avhcpXjPFt7BACNjwUX4qbZYukgpeug1BywRGiur8DhvXRHix9vtcm2HfkRJ",
  "key13": "2Qg7yBw3Zkx3Sq1yQwgkaZv3sFbEYVjK5wBfPFzua3SQKzVuiobxYieSRqvfHw9kDALdgGCco585mSQhte3LoStM",
  "key14": "5UT47UrfVtDTZ5AZTet5gnj8PhSYz28iUfzYSmaKsSWwC966UZqV9uv9MGE3UDWSv9cg8nx9RCfsh1Xd8wbWBVKk",
  "key15": "5EAvDDL2bRTxRqDy2NCSq1hwYzgPAHhHbNFbJnwnJFhZTTYeYy5wSVC7mana26AqCiT6EyJQ8oNhetVx15rUbAee",
  "key16": "3YbLVxTkN4SiMEUATTx8EsHHBHstacPZru4RwzKNq1N8Y5e99zBjmK4T7zPzLA9Kg2PSha8b3YD3PjkJoMvoWL8B",
  "key17": "53tTjkzC7975bRy4ZsTF9zFKUf9tEUwcBJbYJnhCKW82RBJcbykWnngmWd1t7qFhqmUeUGyTSzfA7JFsF1v5a3jA",
  "key18": "6YasZ7YefHMicWGA6k2iMQe7Wdx57EuyrSVJxUU5TpZzx8KZqaKCqoiLUjxim8iUpg2R45RwaYmfknUAmneup5s",
  "key19": "2X6x1suE9P4zwcZiE1u6k64DjWFwGjJxsuqushfqirE8SBgxcP2Eh6aaBT7sfm3o4SBSFvQBzikEKz8jjJLLi6Ep",
  "key20": "52Gkmc91Kub4fr2y8BCkS6RbA89TfdvCD9qBrFwkAJF23ss1o6u12dG4MwbUVJkLdcg3ELRXbw7GmjRBXVrbrZSr",
  "key21": "66B8Go3zLYmCxpchUngbSLjG1jtCAuRvv4EyoprUUcaHSWWoT27ACCeu8R4T77fbN7jEHY9LjFwTEEkxc4Sjjjok",
  "key22": "5SyTnZHnsy91UsUxPpS8ooTFSBKcL1JgKb7RBQZ5kJeuAHqEZdKNPtwA6WUuZxMhmSctw7aC145S3brmaKwqACs4",
  "key23": "4RRyrBy5SSF8QZFgmah47rykojPbnyWhC3ZHqWRDz6va5kMPiTizEN5Dhv492MnCBWdko7QY1b5y3FiFeHyn2fsP",
  "key24": "3Nh7GzVc3romSXtb8EG2uJKhYDxkmRSVMvyqZ82hcCcfav11cFBsAic94qY6J1N86gepqwFpzuDbJqRoeVXgyeMx",
  "key25": "4QsFtpNaKDp9vCRyr8ggicdKu64TMfdVwon7UWBhJ7TAqiQKvGb2nr8SYvtzUpd26pWP8bpmvjQBUM16zVCQHaGo",
  "key26": "4EZjbBDGKrvkYadNWqTMbjKR1qAMB3E81iMTNbioMWNd9wNn3kMNB5LSJWvJVoga2t4umKbjeYQHN6K5Vqc8yFx7",
  "key27": "2baL3MModQWfTwvNeKN3MTdMZTT1SdUA9zq4hQvJQ1cDCFagnmj7ituXUDVYXiPHWKFdoUJA3MHUXGGcq6FG91YL",
  "key28": "4WJxhgJXw8tfsu7uDpoLRwzg9GkbAYgvtDs6MXVKBDj13kXcorre1q1RgdryJspNm4cFUSRgPh6Q7BfdodnTvuE6",
  "key29": "5v3nEbSen9hQAg8YqpoPdqsBaUFye2NwNSGecPp2FL6s6c7mU8m5XgSDVwMc85ieKr2tniZAbwMEG5WFWcNkV5Em",
  "key30": "3MEzixcGNUhoNsjoUFGvm3QVk8fsToFoTZ8juQeinDE7Z7oUjGmAjw1Vc9TrYG6bnMhe54teEsiReTjwJSMaHmhx",
  "key31": "2VG7e5ENieyBX8pjbXspddqGAdNfs12Ndbyj7WctLrd6yQnLPL8BFzTUwQ5Nvxp6iBxt94LyTxTJLHcrit18jXMj",
  "key32": "2VJn98g8cfowU47vjv5WKGyCDZE7tvK5rHfRPaiteiJJB18sFFkreiunLBNe3SwdBFGPhUYmnK4ubbQG4koRKRMK",
  "key33": "5aRLYFuE9cKsaTYDqJqiUCtMd6G5LLUGghvH6NkP3gxAjwM6X2wdnAE3Ei1mmFiVfVu7ucZvYZhofE35a1RA2rW8",
  "key34": "5H5ZargCH9hgQNk8dSiJBnzn1HP6sPxh6KX2WafKmDCAsVMTMsPMa75gXTSU77bPmapMa2BpznxSo6TK68jydFDt",
  "key35": "RycnBBxFGenzMJDRYGTEDsa6MhKHGiV2cusDXdDoHJQcCAAMQm5Lv8a3wuhW2U887qJ3fZaeoKDu2zK2Q3qM3pm",
  "key36": "63x1UXrUekZFaM9nRq7728jCojAi6GN2ETs4w2AEZaVqpghx6RD26PjapTr4q3aWgZFqLfWt3EMkykNq6NpGk42r",
  "key37": "1zeqb6dMpfWi5FtZsMRTBg5w4C16ZEzRJ1FZZJLzZWYhk21ScxTR4SxBt8EpMFuhgDtSqenBN8PeMWedwJUs6Lw",
  "key38": "UxGckSz4g1FNPFWiUDs1LatEooM3YyHh1kRcxn71kPwuZVX25d5yxTJiSddfMmYQ3oDcodLdRjaq1Jjoit3gXiV",
  "key39": "2Un368a3fwRXNSj9t8s8mSAWEys8cQWwAteBZjjNvUmxvUYXp2heBXx81S4cgQ45Tsgsk968YHdcLT3soPwGExLg",
  "key40": "2naaoZXWGWQ2HYstZHedkYQr7iejNLtEBxNwMx7BS4CxJqMGgD5xy3DZzLzN7D4riqH252MVenHL6MarJGVwzuaQ",
  "key41": "5a6dMYFh9JJ1W8jk6E11YJ9MYfvGZbsqVR6Dh9Jrr946fngtPkEtYuCk7XRZa4P1nGt4ndiBdiNBfAwBcj38bBWs",
  "key42": "4n2syzdsHKMAEtUoUjjr6kxSxUbREWZsRXMjmL2ce3s5LpjVNZSJRGhw95MkjChVaUx3FXEjR5FtrG6yfQiPkZW3",
  "key43": "33UYZNP5UhfPq3xAp9CPjqkaEgZe3x4h9PaEwjQwJVznNzMQpSQhKJYZ4ve1PNLmjqw5fEQQsVve6JPkFuCvSmxV",
  "key44": "4ShjBegZS6jB8sPoyvXGzAhYTofUrcPD54DPCozSdpnnpuo7urNKDk3oSm2N6hHnrVc5tKqUjS2TxMQiAFFTNVg5",
  "key45": "2yYYwa3y3GpmU4f8jANXjrwNWJEy7wYMXPdJDRhBjNQp2oNmfkmsE8aSDmbHBxaLWAwxSHRKDqvgb58v7RKHsJEz",
  "key46": "4m4GA4ymPA2NhmdS9Qwc5xDWQgknxnXEhum2mAT22zmbJgEFfeQtz8QrabnPyKfJuFRPc5PbZ79k6GoU1Q6pXjwE",
  "key47": "4b5LnUGYpDdjhwZpaZG7DaYKATsCrDNoi579JfJH4VJVnGWJEtYSxCnwR65RRr7inxDtJfJvb7exNAJAroef5HnG"
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
