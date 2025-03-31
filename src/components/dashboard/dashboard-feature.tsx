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
    "5YG66QLfa7ofAGLLdoP3monZLKHmcu5kibLJQGc9Un9poAULLDJPacXyq9CYhoRE7sgQkUDbc5vsm7cPBku13h7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xfn9VxfaBTmJnD9N5HdHp2b9MqRzF6UCuXjKzkgCaWekarGuARQ5pSboSrpPcQomLnsFd7ox1Bp2oRGCRV99839",
  "key1": "SyArY1Z8YhDvAtDTYJYZUBk8mD26PmA83ZdT1XH51Vk8NJTLFR8F4HFNYpcdVhvxp47cewVaBceeZAbNzaYP7Cp",
  "key2": "3aHkLRYTxRPeyGRb9vhbNspCwZbFEtK4Q3n8HoTLi3Fj9pwAo1x7XjmjA5Tif3NDqmYMHhG6q28Xg5KKxrmQGRjc",
  "key3": "CNns3ZTx6HdqwwhZ8zpK7yLKFe86bCVfQVdyqvch7YJc3KC1JiTUKuoKpsB2HbzKGJcVKXGttZttP2pVH7CYNUW",
  "key4": "5XoMZVUyAaLzkHhiD91jduiKvvopkWT5t2aE4ARM5ZHD1quQPLT2WSRLKVTMQrxqgvyCKTomvYB4CkhEr2U7QcAn",
  "key5": "JGpRuckmYw2T8Jz3V7gvm1fHy6PgDyCJ8xq4hgZ4JpgGgTHtjtEJUf6Ap7NQKJNXzhJgMegpTDFcYNxpDgWPyEJ",
  "key6": "2sqXYUsJDuJ3CbLaArWA5jzmFSNHQDAWEu2d4iXGNKPJqVvTa1TaFPmdmYsjunNBTXVqKNkqqHT5ap353ynRirb7",
  "key7": "3rxRG2P7yPaoK3hU77Z2LcBKUPFRaAysrcb2bdtHx2g7nsyBLiSgiMjD1ZY3i8JyYPiiQXHar9wqFT8EUKbW3tfN",
  "key8": "QbUwfqheqy3CDq3CwnWtF2TCRiKTMtko3MAT4GYwGKkNmFp2WMFHCoSooKVf84yarenbBnEpy6D84uKBsYynWaL",
  "key9": "3N87idWZBtvMjxx2kXJZd8x5SYEjUeVkbUESvVhytc6Xbk7r2cK2vozAu2wj4KeZ5N9Mx9wFciJGZxJrzavzin3S",
  "key10": "pNmN9V6HDhHc6m4TaddMGWYQd69dLUGXv7jWvtLSzYeBPENE8UZmKpyXhn5kqnZARsw4NyQan3fCp8hkLs5mhh1",
  "key11": "6AwZg4fU5KzgjnhdPJ19kUDRBRYXvRWF2Rj5VS6A149zkonNQeabtVXZ8NyhysEoghhuPU2C9uutfYKSEc3K35A",
  "key12": "41aKBZL5UNNZtBt2Tzqt2VnjfQz4ASvQWLqUqnRhMEyhvekC7Mfqeo6kSbAKY6KEH8NEqUB2wjmYFx4C9WEBHjKw",
  "key13": "5Nd4mBMMjiPFqm43q3qV2F76eDNhj3L6t1qW6YyZo8oUeS3db6pZsWtsZacVo7FufecWZJgHkeM8RuHvwViePmL3",
  "key14": "3BTZo7phtP7V2BBFyDDxortt1ozSKkeAaCF4wsmQmgbK7a5exbHoLEfZn9FF9o1NJMPGLTCL6fw67tYBJyYtqafq",
  "key15": "7uWPMC6hCh6nG7f8DH3dNgpkhg3zRSEPfwU3eXN8SVuXMzEuffzf8kwqBivpChb7PtCnWJA4rroDZxLAmhahiQY",
  "key16": "4KPA85qSNpfnwr4WhbVst9o62c5T9BZPTEUoErg3thjUzZbBYWfGwjgH78oPo3MGDLPXPZ9GWWd1ytdBm7zaUP9G",
  "key17": "SG9fMzqKizgMzmoANoPp1F8UEtFveWdK9bV2gwS83uxRqLw1UA5DM4rr4SgahoCAgPJCk7tXavDnPEApoeaj1Vc",
  "key18": "5bJnWJsMagfT1wyVVhH5A7cwzsBxbT8uwjfKJAsKQs4RbZXuDc9BQimMju3QCBmQaxgiRGXY2L72me9L2uCtB9B1",
  "key19": "4zypoDoZ2ywnji95kcmiSMersbDh9SbaPfFMcENYdJGYsmCzyKxTAVHTQdqmLdEY7Jo8b7saKyeBEhUaHTycCdzB",
  "key20": "3RcHjshjjGSajaaSkrYY9r6aUmJugx7zc1ox1ZVwzfE9tqyq9SKuwbTZyFPzJADj41NEf7zUdhk8Y8wd4jBhfoNe",
  "key21": "4RDJE1pesPzrdKaJotiidxkFuSRxBr613ktxKDDaj29DjPy79gchWCEZUCr7pfcbgTomQkz2Wb6RtGqZtxFuXqjn",
  "key22": "35dtVX5v2XPwjUs3V2yqRD8LmPBuKZnBBvPq6mKV1DPSp3QCB39YK8pSneLHKrViAGoFh4em1uRirPZnfx37sD1Z",
  "key23": "64TVtnbCPjLZiKCnrMHSit8Ptacnu9ebo5mbH3kdXXSj846uD1W73AUgwZSSFeUuT4gxNDiVHccp5Tcjja8R5B4Z",
  "key24": "5aj24RixXTu1Usn1nyFbxFEd2Z9ZzQvMZ9Af1kB4tcWoPEenajhxRSLutfGM72vZMeGDsTqEUfAJ4FYT8d7XaLf1",
  "key25": "4tCFDjZC29QiYxNNr13YkN1yLvfJAFrEA5HTMx2p5txxdoRZZUi8K3JpFXKXGiPMStYGGy6gv3GVAY3yWK19pRCG",
  "key26": "5PQvbxoLDtrp65nuC5Vw9Lv7WUk388Md7k4bvDu1L3bnQrbV7ic5BSwDEBaseP3uehp6Q32VJr9MVPsFkvpSW5vU",
  "key27": "57vSY7HXrytzWdP8Gc1Pg5GxFoCfcjjZZQTyZXoQKqNotmBMWgFS2gUuzdZc7tq5GYYwx2iv9f4EpBmh8DXkPpTB",
  "key28": "2QqCD9aNdQiaVBuu4k1LKvRPAcJSgT42x4ai1qTDfGjmx9FzsqTyLRrMyo5ej5r6C2x3HMmMhHW2hLeKzsEkZjyF",
  "key29": "5dd2jaEaczsk3zLRx1WPBAohucx8fpc9DCHdS9de9gr6fxrAF8ZEjvQfXutoGPgJ2Z7dmisvFszywVDUmWSnCFNQ",
  "key30": "57CMUrxeneHw4hPNdPomQ2vgmCvfg7aUjvy6T3N4GMVb72XW27LzdsoceYc86DrGVC5fi1vdc1RLU3F73n4veuoY",
  "key31": "619o76M4kG7j9bNWCoUQNqavdEsU5LNxFH8sKELWBPn9TaGw67jFsn74V58W8wYE3rRKMhnk1k41HetsjxT1iRZP",
  "key32": "inXCkLe4D2nwqF4A2PgYjALvRLqCuP9rPKRWFNvDYx7ThTWFc3DS63kLhhDZ15N7m5EQHHiEaJXWuQraDcezLPu",
  "key33": "497N7n85aPeqEismeaDDZGhcGby2ivb8bYk6PzcUFF7PfgfnMTygzyCyhe9FqoFwnCXn2U7B99L14QLvJuNyLSp3",
  "key34": "fF21H1NV5JCtxLiWsuXNSu9xgk5JosysnKse7q26xw6qSvD8Q6oY5V82NigpcEJCpsUeAbm2Cz5A9J4T29PBjej",
  "key35": "3DCdEVzar9yzQxLYaKWTmTaJBdZTKKowMusoyzmzGP2XFtLZLzB43R1Z5fAMTjyV6rXpmjLRi9DniztaVeJXJmC3",
  "key36": "3e4BzBjRkKzj42uDLefUkF7f7kGk2sjdNHb2fED13aqYEwU8pMEmnLiwQ72X1WpEG9AviBfKeRyEoHMCx6fQpBiD",
  "key37": "2DoEsv1tcB8v8EJqq9vXGo7ucSEsZ7S8Szg7sYpREWJnn6VvkGgr1QYKCZGhYy9h94fJkAoew7qEm9GMvyVzh8t8",
  "key38": "4aPAC5Z1tVgDHPX3mSXn4mAFTtQT3nyVfCquQy1cmCoVvrAMFiPQviRyWVGaVZPoqYStksU1i8334R6Js3xy6SUT",
  "key39": "CVhuhfRJ24i3w12HZ2Y6WJjuCiDpPeg6KhdvdGN9CvMRbVgqLBoKnyTk2BEaBLiicYDyzBU5rPd1jLk8RWyb6f8",
  "key40": "4ZAeNDhHfd79C27V8K9rXtvXZzxYuSuQMmRmxvvQXiJeQ1g9PLHLvAMvjXZNyuxSZxpocscstDVakMy3k5o9sZYc",
  "key41": "5hw4c1xDfRyUBqUkefVNw8wJDgCPF4gfhh6e3DzfNCWbG7kQ4YnYTygxYS3ZcWwj3wVa3ozEpqMEffSWK2Zk6ntL",
  "key42": "3GP9wvEXRvXqw6JKBVuQ4wXpLs63F4hQogWSi9DasPcpiqfpEepGmZsj2wRncEXn3mizqocvQoYXvpdrZZxSVCEr",
  "key43": "37HNqpiwKCXpd7AuBzNU1amGnTvRVpiEXAnHuJ1xbM4vDGaU9RpEtTDEs3VJ6kV4A1NQUWNzNT4huLjGLjWGuhGw",
  "key44": "3BxBAcThNKq7ANWCS9davd5hAS4iV7cKKePqUto3rL4HHgTeMMLpk4rJMGi9SYx9iGm6iccN5PfJqkJ54kgDa9pm"
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
