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
    "3CGVMYuWTSAzQyPQ8LHYY5tq8rVo9bWUs3RQeVcFEQd92nYx5hU7B81tCmoNABahFxYBv5ureEEkGP6LUa37Vg1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xRzeQogdFRFnYodkUyFcUpaDjjGpsnuxR6ny3N1JwGrUcD5hTGs8Yzg82AnydZJha3R8JS7hWgw3L97MTjeRRft",
  "key1": "5CfDwaB9wHpdnDZSdmPy2cnvenSdHjE9uuh8jicPYX3LEjwTUvAx7XMMiRENcKB3VncFN3fU79z9sFDjoJJ2nThU",
  "key2": "LLnyFEWJVQGuRzoY7xYDb71iaBAZsfdoSGztpkYM4XfNehRAZL13cHbA2pnS2p3itWitv3TB6oDFZYHi9j1YgTb",
  "key3": "5NJ9p433TYJboxa6ub3wY5Q6KeWhmWJdh4PfiLxt9MfuHgoJKv7qwfUQgo5QYemY6F56F6zq9te8P2eShFQqXuHd",
  "key4": "3Jgfq6C313UE1hFaHvvpt8QrzArrt276EhBy3q4K2VUeh4HvCJV4HNJaJ14nfkcwZn6NMBKgYz9pQBWcUDerJmV6",
  "key5": "HdvH3UFx5CZp7kdSdPMQ3ZFDMYm2ZySkLy3Rato2RCWz7mYDUNjutBrVZpKbqZj8iy6KfVWfj525w2qGgWeazWP",
  "key6": "3Fz9eW7EtVaSsz4cHwSFvBK8Yb2hnsEyvDaPNNZ7dNJ7wfU3Xtio6zrgJaYybdEQjsuQauJ4jtDzGN1yunnqKDev",
  "key7": "3HaVd7VntKXgKHdhB8TqgXwgtBYuT7ypRiN38CCkmvDttYFUswCNqzUsCZTE2Es6USQMGRxiVtKLMHuhwGkPtYc7",
  "key8": "2wYHsPzZjqDFRaLcMDwzbSoN3WmmuRqW6RKckGHrvpSMzqpsphcLuboKYsCMA7AaGcc2BGkPPRmA7hBaop6tzZuP",
  "key9": "EWeqD2KUoVMpd64apFqaKXBBtnYvihoiFNG3LuByTqwyUspAZNqqif5tfVdFUwffcwvDwM2XkckXj7NNzVRaXry",
  "key10": "34467DZrsyiaQgDpSYsJr3CrsXNpSobGWxirCb7f6X8HufYXhGqQCCRJXHZfMqZJYbARwTi83GMUabzUETjjxTDD",
  "key11": "49gtXe6RBHu69HymRDPG4k9sQs7s7PtF9B6SkSaN1PTeHFWfX6dXGsnvf3zSqqJuajTd498RabgtsrfxbC6hMPZR",
  "key12": "2HG4rDXxmH4bTLJP2UjxH6TAXPZ5B5PWd6mJDGf22jzau8huYdapWQNWyFwyKcJc19qqoDX8rG68oLGBpraMj8iB",
  "key13": "3SxLYjgPX8e2uDxpjYHR4iMzbn9nCaaEFk6YG1Ks7mE27qqk2eCMCzWD4kXPRKXa4kkVbdX4FEjQgymMY3wozr8Y",
  "key14": "332JiR57SaJm9ocZKbW768qet451gpNysrKbhBjetUSUAd8odR1bkoJsQ6D6QEFvbSGRgDqnyyxX7NcphMyHnjYJ",
  "key15": "8kGRtWvP2q5jzM8HTWhkeT8X2NufGFZue5PsahQToxmPEfQSnMPi6aNaqHHUPioLeZWXRC5y7mGeNAeD6h6XYj4",
  "key16": "2B7hDty8Pfk7vDa62GiHwiCZSjyh1kADETkb4dqH88YR2o5j74BfDBTF9QJCq5A2fqX242i94avBd4S7QDYFXJ8t",
  "key17": "269YXMWtD3EB9VSB2ataQuKWN1tkHhtbZJSkWZj78oV3bXP4SV89gpkW73A7vjrqFiWgQFmfBGibREqvKTA6sLMR",
  "key18": "3HL7EBBLP85aELRe8fy4gJ1EmszHQT8i3Mj9VF4s7yJKFd5H3FzMjizFeqX5h6roMxrvQrx5mYBoGQZobRubMynV",
  "key19": "31R3h3D2ocvrCySqGP5EZTGVie6GddimFP2pEtmR1wBXYGcy6uoDiAmmC4i6KDSwbvwvRkTA6vMVi16t7zUDwaJf",
  "key20": "56EHGyLZJWJoGXHj8cZSYKDfe12MYgJGnx5jwbvAGVvmuS2EUn8Pj7hnxZVtBDr7ZbYu2qdHvbQmjdxkphFDANkZ",
  "key21": "UH5NYd2jYi1rPhrpYqgEvHMu2RuivxmWgWj5XSBtHSSsJ5EZPr9z3kqbtkYgfKgzRaFRhWS21DZNxajw3rEEytR",
  "key22": "5vvMqyArGdFyuzuQiUQTfZ9V4RizDZ3ZiqY4cURQX8a1QnRFMHfdJGDGMVLta1brqRoK731uDSXyJ7Vw6emzf4fn",
  "key23": "5MoQbT1QKr26xbEKw9raHGvw3xnSNKsKrBuRLogSuy37wFBzSDXGEmumJBjthGtC8ooZiGuZMK9qt3moEXVsLUvu",
  "key24": "2EeFLdneFYh8Bdmuyos51cYfJKXGKB6DcxuotrMgYdTDaaLgopajMJwFiJp5cq2PE35f36cKw6WwATWEhvryGUSQ",
  "key25": "4xcfz9PckQA3Y4xdQzRZKWnU2i1Lc8QpPZbE5iCmy1zDujFoxAsxADBYYfvLmhUGfTZbZC8Yfs5fTpnqRfnh3Uaq",
  "key26": "624xMWDQHhQd3pDBF37aJNjKBcKk5tgDvYzq31QfJ88JYVbe7fqwQoBCRQC1zczXCkqpBiqmgusm6eoKdwZpqFjf",
  "key27": "F7c6ANpquQord6CdsWWZAnCtU57kbeAGJnrk9pmrHa5m8hMQ3EmgieDK5XsVuJu5QC9WSnQrPddQ5Evn1MyM5zZ",
  "key28": "3EL7rAQSpqry6SA2RLjutSaqemiSAEg9YpRpziLeaZXUQoAyZGj1MhvXWzPbaaQTcoVkn5G7hM5W1oHZG7M854nm",
  "key29": "uBZZVamjrTS3kpqJTCQ8XfDX8YfLGQgKwNif55L4XpdZGQExxTCBCgkf2A7KkdAyT2XRkyiLSTfktQfj5A9USjv",
  "key30": "5eJq6qy4tLfnKRFFQ23s4ujJ6hkBRHH6E8DzgiLxis7inVEiFd5BWKwfmxUpKwjemJTyjjBH7izpF2CMy3uEuSZL",
  "key31": "21dnUHExCTm4jpGT5f1ALh86H3LY4qofu6r1QhpUh2Z8VxAKSU4kk87fUcULXvgJuK4pVcoApjQ8C4AbXW9p9vde",
  "key32": "41nP7cAkXsRdapqxVjadRMCYutbhtB421X9rWckLYDu7d5nvCXPB8b1ysDaYeao6LFC6nToZvgwAH6Xh4cksR5p4",
  "key33": "2SC1R2SmKSVNTWQRWaqM2ETjcTZ9tb1ZngCxwRgwV4iSLwj5xAaHYEB9WzDnavHZTeSeHymjjb4msaUMSK1jipCk",
  "key34": "2oFK1cVTiArLuJKswAjMCVjSsgdn46mPX8MS8JJc43hxkRF9P5RXmzqaWHXrM9tfoXCiL9nj68L66EWcMUN8Fuhc",
  "key35": "5dpAGPoGCrgyw318aadnLjW6VwhFPNhBkTmYCtmaPrT5AMdMyHmwviLEbUsowTUcfLfLyzNPkoURswdaP9HnfAx9",
  "key36": "4yQqDCobXYEn59jk6ba7pLbMdJXQ34eSSgZAPjv8Ghp5XRv2NVnPmDD3AQixzLSwbU7syEEAeWDrutpGudEmnAvG"
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
