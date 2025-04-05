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
    "HJqnEjYzZJFhENuxNNvWjPxTzFPrynQvSTNjrgia1NNPhr7hqctNeELPNQWgWnrJX2PvC2jwhrP9H69L9sg3kQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kf4X1E7u4K4Jfy6McjNf1QC2UmM6EDBzYDpzVzFdnqpAzEhUiCc3Qa5JJLXuHfw1SBYnzSFjYp27dbjYVLKe4jr",
  "key1": "46qMNByk2vhLjUk8bWe3u8mie6XWjmq3gnuWEWnWX3Ht3XTVSMaAZL3zMgPPeTSGn1gHCmguWJrWAPiQxM7tBnxH",
  "key2": "29DARaQygKG6YzQpoTSLkKXtT64XaaBSMU72bRkXdibwQCG8b365xEj8nFDqoEyeFMzri3JTZM6xfiDUTcN9VMvQ",
  "key3": "4S8xB51RnrWJ5pvrAD6sxqcw5mnnJYz6d58AGcvmxJNFceEPEHPJ32gkde2czKNgmTERsxvpaXgUVPd12HT1WyZB",
  "key4": "489NupDi7UkQeFtd81r4a77VWhwbjjfVgsBzCRqadjR33ravmm4tXCG5qqVEd7WvVesqgbzhfTtNC63SRioiBkAE",
  "key5": "2BsekQWZuEfDy417qPVFWz2EjYb7QiksFBcbRAaJsHyXHGmCq6p2P4ymvnbUUVQoUafbhKjTSHgPS53enPQxNA8E",
  "key6": "4C6UjNQniGeeHABedyiRCBZQ3wdxKTdUwYiFZpTdLFAVMRmbyPCtw345nVS3nQnHTaa4NiorA1qzvjUbCRs3q4Ry",
  "key7": "34k6pM6jNLVn4s3wZC4A2kqtYNZLJrxMD5vhmzmgG8HVZ5Ho8fn62S8N3hFZqniTDsVq3yJ4JbH4p8UULucSFMwf",
  "key8": "PUPXmzoFpHT1ULHkQXDxz7ie41Je8b1C1RWqG36HeTJcHHsQPuvvXRkRZ4vUYXbCu9KAy8Pz6aTvB1k1wAwACW2",
  "key9": "21gui3bF1YzWySoufmrnmN7Zm4ZTyUbnwDzMMS9q4Qho5E2QLZaiQ2rRwtynuijdohdu8xtZmLtp4ojnx7bV74Th",
  "key10": "5pgpnwMtr9UMByC9b6w1vd5UXE5XphNuAvNv7sonGzmARJX2EKz3z5pVrjJDMAmaoAwoUoV48ThhVmukrku1MXAW",
  "key11": "4dDqrjVenzFWyXJ9Xqf14VN5zg9voKysq7fTPzZcyfXhp2y7TXsU4AnoY71Bgcyd3c6PN4PjJRUdhR1PvQP59NzC",
  "key12": "5rABBwaLYf9KbK7ELJJw3pYoxAbp7R7gVBCmwYFpNeqg6W1uwKzA7d4K5MCRLBuBBkqAztKPwTdJgKgo5Q1xoEcW",
  "key13": "5sfrnxzrtHyGvoXyt2QPnMjaRJUYm7ZfX8YEbqNUyrPHSw7LydUxGMyYXR7QTU5oTzyM5UDQXQCo1ahxts8YS8NN",
  "key14": "2PR2xvroXpPo5zW5SXgRsnCkHEAzXtho17KTwRpjtsndh6NRgJozudX8VV657EpeERmrnuq5zjdt2kWYVC61mqu2",
  "key15": "44zxoNp8FGHi9V4Dab6d1NSH2ERjQFxB3nEPnoVWskaKMezkASEbWgKeerTHhf6Y1ergRhmA5dQueiAVmBadMxAK",
  "key16": "2BnuPtogDtbLxjWdcAfGrUdomhEUfb7oPHgJstj2eexRX63kAY71rqEZ31G83ZdvChLVFKUMoWsmuCxnqxCfT5uo",
  "key17": "5QZQ4ZcawnENSy5evwd8KhjzkPE2ZqiXHtpUfee9792w8gYtdF6UJUcUK76J3PKAoEZMk3tCCojqyk2gENZ7tPiG",
  "key18": "5qfnW3dtmv7wkAHk5d98MVca9xzDtH2YMULga7P97FnFwZJBRvj33hAJY9wrU7o5N1fkmakwchGMEQdxBWv9SWFm",
  "key19": "5MPhsENbyY3r4dYqMtN68bZX1UrzaAGjkiN6egNQNnKcN3BQTPiSiwjmXsVtHGR9yE94U1bEU1KSe8gBUHBdqbSK",
  "key20": "592JuyBTPwokxsFicDrwmoYt8iGr1y6bChVRFsZDyLXY9ykEPkEUEoN8nADfeHCA3PUfE4NojvFWaSFsPxMECfgL",
  "key21": "43hFujHNyfBcQHnTMAyLhQQCrc9YGVqDxtidqWss5ijkmWeALZTjpH6qF5utSfccoct2VUkd6Zy6c91a21oxvGwm",
  "key22": "2jia641XiYUQ3e7EvxFYsXXaWeJLL9twiJrc4AfKJGAQp6Tn8Apy9BN6JwxxaM4QDqk5fBPDMdFzA9DBGQggFEs8",
  "key23": "318jHqXSFox9zS9UtHz4Jk9WThm7wPhpKU1gHh21YW7q1gCMV2tiwmNGHtPcvC3zRngM7Er4dg7rvxfZZ4f4XEyt",
  "key24": "jd3Kvecjxa1rKnMLB7GiHg3gHqcE5yZDyMd7DP1woQvXSz4SZ189RWj51e6itDf1F7gjGqnRRhgrUQWqN6ddEjo",
  "key25": "2WKV1X7KPhWwGeihKTpiMe9Ed5gVYQwywv9g1YQVLyrfqRGAVSCkd8c9CPUZjeVecY7PZn3fjdsrZoTLWaEFSVGa",
  "key26": "36jsFkW49eBnPQ3eSwBckuDBsGHCN9tpBYdwzdmJ7ogoxgzJTt9d6bT3yqBegvMhkUNpADHPFJSp3QnVco5u8skh",
  "key27": "3CDV7dzX4hwG4vjFNkavPenCwfqcu1io976jBoWuMTt15wL1NQxF1vGmtYwSpSsBX5xnXCYkRRAfQBypBt8tumr9",
  "key28": "3EXGoZdRup9GUxzniWRWygsZ6x981qLwbzvuVK7uU1wcQ2eiczFHKT6PFtupuXuu2aeuEE8ehup134xt2JueT8AJ",
  "key29": "5izyRE27HURGuoRB4Wq2sTdDd2ioLUdaeNSHKcWYRUppLU6QB7RhbC2mwVhUahJPkUtpnTkUd4uXt9PPiygx5qtZ",
  "key30": "4imaTDFW6QtpJHdu7y79CcNw3Khc3Y5QDJvD2gbkXnfjRGF6fGDwi2aqVVcYCTEvzou2mVXhs747e96Rz5bayiC8",
  "key31": "43usJpVbgfEc8vvBUjvwZft8jQz7MuhkEBjLhuo8pvYPGRK4rQZef6e7S9kiQMZbtN2Hw8smztiETap8RKRYU7G6",
  "key32": "5LfT62YihSL6dyGLsscu7borNy3V2uDZLvuSr8nV72HpTQ3s7vho1K7yKcEpQ5qG26cJV8vvXDxuiPond13iFvvj",
  "key33": "VTSV8c8KPnAbCSaGcStsZNVquK8mxPpCMt7ANLQVf3KEeWfWh3ynixVrVsCm8vma8h5JaRoVGRSnSTx7W3NZ7Qo"
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
