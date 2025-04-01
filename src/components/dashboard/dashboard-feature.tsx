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
    "5Co3UYchteihz55o6XXreoN7BWZDyHfahU6X5UNnnK3sh6jN44dKmLGWvSGahxuN9qcFCKUtvSH7hZr52xiMabWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GAF9TGLnkqeYhEC8sR8EdggRUNt4EurpUZXDMXKLHtiskrbm57gJkjdr1bdsv2gLFgXehCA6vhYHahkSx276JNk",
  "key1": "4GMcBEHUc27NvKhHN2ni9eV4bT36DtQ7cgd5LHHgGjpcCFK2u6f4KimWshkyvet5mt1sAw2uYrBKqA9sXYCC3Fsq",
  "key2": "55j7zAqmfzUxZwMs8LqjJJmpax91PygeSvT9nZ85HXT916isKKEppMKUWnGYa5En7bq93eMgJ5Mg1p4zsZ2TagsN",
  "key3": "2V6aQ3zVjxBvzVFgzarQ8SaEcDyBZ7hUaq1djw5CCrovVV9Xi1McPBBkWSbsgBLXRZmbLDkLdjDng1pMbnojpyK1",
  "key4": "3P9bpJBXUF5BZr9k2c2b5hgok6cLM6xYxJYnSuaht8X31qQ63xh8n1u2MAgxzj5eVu13ernwgoXqwpJxYLqpsM7S",
  "key5": "2ZbLVARBtWTxZVyAwxXVHv5NLXRVfbb1KC12rp6gfWE7PmTsiuvjB6Dyw6y3PFfzZFXcz2YKY7w1CzEWnWpBR1o3",
  "key6": "48RGh5jjkrtD418kcoQAL5MHrZnLJqfarXWKUuxWZhcFeUQSG4hJT9YDy48wQLCXrep6QtzVDwsUgqNvzbXdVMvr",
  "key7": "398Nzp3cjcvwmUs45WD1maaogE1oxdyHdhJnGidNc1BTMphdqv4rLZ1KSGbYxtD9ekteW8UtQhv8UkSaCJ842BEk",
  "key8": "2wkba1KitRARZfCjUmSuHDfYLoMWKWUtWbJSaDUwWTCc3rmFkrauTp7bqtTYAAHkGWBL15Vot3MNM7u8wrz9SXtc",
  "key9": "gLZvyvVfP5TBc7Ae6KMMLKpnpVd8YD23T9Ldz7BYFhjrk1r9gEGvZge2FnLE8U86LF9ngXo5KvFmvWg8kCyAQ8P",
  "key10": "314eqG4DiU43bFsHeQYKRhh86Aim6PdLMVLp1XGkZZQF51GAFUauDTRD1KvcBfSYGotmGG434AaWoWfXL1XhsJBJ",
  "key11": "tERDbQtx91qdABMMU1dNFT4CxgKA8PhcvzrKACG3J4vCiuCaK6TrmCXUAHMP6uKp6ox5Drss9oGfkoeay985C4R",
  "key12": "UppF2AXtvSVFDb6Hf6Cfs7bj7swddqehKN9FmJPbgXAu5dwEhHWpvWkMFj485L5sXPgQY4TXK3zmxxz5JaSfcuA",
  "key13": "41EnvAEFjho3Je5p5XuYX77pM4PYawnWrHLRNAqc9LwSERBKqH1ghv41b8RsJhLBmt3atNeDZqXg5DH8dFyTmsL1",
  "key14": "2a1ApuC6QgLZ2S6HkPxq36friKq1Edb3uPmbKtgu1KEWzhGPRTNWaVAmKdyjeEhK1aaZHBanA3bGFQqqPzHmHZws",
  "key15": "pJrURS5a3Lce5iR43N2v8Bwve916YAzM7kcDhwdkT8PduUCW4EyGSsXkgWJJzoHdPXeK8XTfBqmp6FNk3ypGiNh",
  "key16": "5zeX59H8xAw64dsgWukM16C1xrB91JjG8Xq6JCVU7Dkd4wV43WqdjJ8QNaSqtKkTauyU2zQApmSN9uDhiCpWRjNh",
  "key17": "5eZ1HdXGjYj8ocLZ2v2SNw7D3H5UhZUaoHa5yTPKxXzhgPqV8YDUq8i8kYPvewWvHsQmoQy4g3dMMQeWr2m9vDa3",
  "key18": "2vwKfAfo9MWELRoKtWfsJUqAvsqLZV1mdhuzDTDJBjn7uxv1PhDQqEgVBa2U4o3SoDW5pEBxqLXt9gfCYdic3WMj",
  "key19": "dWCWV5QbWJnoQiCUhxZWac15sMoK1rYxKx1KjAPGcajavHR9cAw2d1iNW7f9MAPRfmZJ4Ma8qa58fuoGRQnmgYU",
  "key20": "4VJ6qUHy8Aujd1oGDyw2pVCe3CNRneHcbRPALFFcnZ4hhWoVPvTk3D4RyEv71S9vpbjYUUBvET8HZi62Hwq5wAru",
  "key21": "3D4kWCCJrH4skwhxVRiNRuMDpFXpzMMiTRhvShWpASy3YucWxz9ccmRtsvBxpuWfj9dnvD3tCaDkAV8gDPddEUyb",
  "key22": "59jLGCWvPXRz3eGXGoQkzb67NcSwRawuW6PRrzDJ4LQRjZHNon3yCTBW7sKQEj4y3x4vzUgP6nidjReZBW8v9fpu",
  "key23": "4qbnXqnRLmsQsDwDXQPGCwshSu9oTbTeMpZvAPJaW1qJJaxYqFChqWVBp2x7K77yzstz4HSfovYjrwYNAg945LPJ",
  "key24": "3DfsRNjVpmQQrny4z1vgdzdeR43W8mAq7iBFmyET2pVE6Tatr2N9xWfnnXbHQoAzViNfMByK7rPeBg6JrK7XD6w5",
  "key25": "2qxqETyTHQAUErvcwSpe5vBydRsfNjiscWEKrjWfKBh5PTjugP2mNbfBzoiMJcimjHyS7TP1VVcvuPLUx4kLxew7",
  "key26": "5ZTJJHgJpZW91D6B98GVzGXJxv2y5uRZnKi3Yn1iQBKsSbFJ3DBpdq1B6aFUHKNeJWkZdBzXgVeGszW2Dbs2hWNK",
  "key27": "32PiEmbj9nW5QTm7UZUAPaHiz53rS9WqhMfJ6BAQae37ac6H9LkBKC2a5WBKnTAUAnrx3oT1H8vK4oBo3xhVj1Er",
  "key28": "3bSwmVhULwSWfLCmkUeTvUrL8EM6LQJtF3eZVVFtM1MLhu3zBS31B6t9WKLr5UgAL9sk15ZRGnwi514WShQukNNh",
  "key29": "DmpPqXKG8FTUw1braMfa6UWXyahb82aXB21aPMywyHmeQoQQ458suExdVZEHtxTGZWyGgxs6v14Z5Pzin7A8Zv6",
  "key30": "2o64Cw31LCBYXxNZva775N3iWQcpcYNoXLmN7M4xHhT7EcrnPva9Wqmn4h9NpVMwiLtugHP24kbACrJFwXdv15bQ",
  "key31": "5LP1k7nhK3CZBy6sSYz7yrwDg5toJbJwveNiuRrVRRVHA2nJjEjMZ8TuBLWKJfayAs373tdy65Z4svn7TPaRWoXM",
  "key32": "2eZNCyxb58FNpKFuNAX2VHoguFDn2eBoa3BmH5HdPDEh1pLUse3Fp33EujmK9EQf3rF7N4JJBpgGvxz7X1rWKy6S",
  "key33": "5ERMqzxwvtjN7hU1yRoNBHP3TrsPgxhU1jsYeTrvLtW9GwhjgRXdLwpiCgFJNVzaMikLNvwvT4XBwpFre6irh4gb",
  "key34": "26TG17bRXVZDCkomzS42KtdvGYc1SvHEsCASRokZG3NbY3jvGksapSAXr7ebXFMiSNU29pPG3dWMsbgFWYRGmmHu"
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
