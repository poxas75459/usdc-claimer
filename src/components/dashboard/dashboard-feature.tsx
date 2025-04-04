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
    "2HeUq2Twv7mDf7qXW3z6qey58Zh4KuEXCDHLdi31bsU6LsGJKDdkADvn2N57oXenDirwEUR2LMNaewxftV4DSzZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oqCHdtddv3sEgdCZwiL839DD6N6CrCyeLX814v44ZnieYNS6sgWSD4LyxQBpQv8usb8ycv5FSxGcahZxUxkdfbL",
  "key1": "myaJPzmHkRwo6NNZ7LTQ1b4mHrHWLd7ZhjauaqwfAEy92xzRQLLPxeQ6gbyyxxLzWwXv588qYmWWrUJAhiiyKeK",
  "key2": "5F83PtNpEejAQXdxkLBy7Wqp399TDAdyrka3VtpzYw6Bcw5X1pZGnoLyFr3WdWbwqXyx3KVDZPz3XXvdeboXdVw5",
  "key3": "2HSDhJe8wtxti51msXrBta8jnEKvRpuymmE2YekPMzpUt3i6bBF3V1ZDXyF8i1cifXNKygqZ7GUPFM3hC6CsfpS4",
  "key4": "rgCdHV8Bv7Yrm79iaNaerVPXVGNLQ6iygWtLUioiBz3VWpYbygpQ38S4aWSLtwLtpscHaFiEwiYMYWSKRP3Dovs",
  "key5": "5Canzxj4wnxRrReYQ7DS81MCjP6gwzNQaGa79JVCDQUFwwEZT9rDDRJ1xHqJQ6g2YYZXfPsLBV1bu9pLjaz34Z53",
  "key6": "5baK85sVfgtvKvTuRViGAZZxyPNwUpGiHwprpqKjXUZdqZnu8wcEgtDVFvZqNSFbU2nfF7sT4C2kitTK9N9nhzHs",
  "key7": "32X5SB6q25ex6xhdFiPjgG3UbQFrfJXXLQLmNN6aLw2jevwGprWZ5bwHzWCno5g22ExA6Qz79mis9KxdEBzL25Pe",
  "key8": "bw96bQFKFrYHWgNSb7cxHS4VUesDAESXFydWbFayh48nfaZumcMJEU4rPmFY1j7NKK6vLb375bf5vcsoVtJesWu",
  "key9": "2MGXvtCXfyL2o1gM7Vpvp94BWMQwBPgfj9anK8ZWPQ3kfJsrZWx8PCCxFTtKHQ9Y3fHY6yvtJCShQJm1rN5MhY5B",
  "key10": "4jZK4C8VAoEtzAnUY4FWkyTYvbFSRRLx6VQRPw4srWetoikWtacWpGvKx6q9jFFbyaxcb1oJYuupjved6qme5b4V",
  "key11": "f3Sd4hYh2fk9uosvMGKps4QAN6eFhrMiVEavLsTvGFmqm3qpXFRJTj8fBqUUpJJUg5CMbSbtbCqUht3TJfPSxjj",
  "key12": "5oojJY6C2Z2dUDtenakC9XP4jzWzr2vh2yzKquyKmckNHSVTw4DPkzTmc9mddtoXaybbq7rCrKZ2LaVig2WhHsDA",
  "key13": "3y2QHm19eWNdfoiaeqWYNUacfZWf665PdA6afQ28rMUPWA3PusPN6c4jthDnjnApev8D5scdPnLEiPoJgDur9BHE",
  "key14": "3p5N93MSfrZoz6XprFzzjoHLyyoLmhuU2Xihq8vF7NRbLLWK9JifHNVq1mojpCYNuWLh9L7sp9CCvZsyjuHoUVFp",
  "key15": "48Px6yRoJquicKpeNojY4UwU4wajhnEzHKgrRSPAp9AZeNV9bgLiwykHpBd1FoiefaZLRU3DZw5og27SxW2kFBLJ",
  "key16": "T72A2HTpTbziUYRtRUG7jREaAcMgcGqSY6iUwt7obYEYCVbBGADhEZCrXVQFzP2sNDPv9yv556ngaTwqfJHexdA",
  "key17": "2Gxw93ccEFkzwhGc4mzSVKkDjXEZc4j9MmoxjvxyydU9CypfFCs41wZqQTKzP5B44xCGGtVk8EfCpUiRPUgPDL8E",
  "key18": "3XJaCT1dELNsuvL1h12HPe5SjnjSxa16bXEWU1WDf6vYWCMhG4pML6KoJs9eM15JBKjzKEGxP9kjyDdMXnMM5NvY",
  "key19": "2VMo331SWKTb4WLPCzFHEvYLhcLAMG1ahJKV8pAtZTY5tRQv1iLea3AHzxkCqQsetQUju6JZAgfqZzAhUXUF19F3",
  "key20": "3bfJtbFUzUBLk8i8Q1e9iwzw7GFzqhfZCPToBVcQkRgJtPdV3D2NzB5xWv9bLYQhpCU2JBMT12VpyHZTnEkFMaTM",
  "key21": "5p7cHPqXFGrzEETsnST1YvQrLve7y3FuYt8AhjNt3nkrGRar9JVJqjWtQ1ThDNBJ4nordux8qEwUR2nhE98ta7zZ",
  "key22": "EjbaW7qm77ZFgAVzdrDFJ7Qp1pZFErbU3PKC2zP25BC9bMSf8iSAZFMCGGQHcN4tu7qwWSfYbLzMvGXj2cFpW4z",
  "key23": "5Efp6F6Gmac5Rq3CxSWfPVZYq3Fsb1Q9tmhNhVdobm58CCf9tH8MUnbG2Eb4CbU4k6Gb1gMiij6yMNrLpY1iLGbV",
  "key24": "gsmzyARAYBhUzSoWpQGdUUnUV6zK7AZSUUoHNRXP7CGPuAfuXCGaD7tixqLipTJBaCWf2A4aeowDXLFDvE7CUrR",
  "key25": "jRFPVpxU56N3Z85EgvNbD5RKpkJxiGcKxPoHFzPYSzriBdFqLZhyELEesti3SHCiamdJL8s1BuPbRqVz9PRTomD",
  "key26": "52RPFAamPhCqHxUePaYG3ZUJPd1cTf4UkJf74R288FFLRJJ8U4qmr6ifbfnMjSoU8wgCEPkDApwbvJV1qCcYYj2P",
  "key27": "3ugVUU4YHkUFEhq4pQwvv42bd7ChM3jDYFNtTy8Gmcnae9pbEEfUKR8wrWpRJ14Ezmvr35apREqu6D3R1hDp19Ek",
  "key28": "4d5tryprNTHs85fMS8D1otoA3NJ4BhsE6iY3KrxeMaTh9Lru78tBjGWpYzpT2HDqgnWZtURvDVRaMmVLnYkBUARk",
  "key29": "32F4QS24nLVk2DpSnRVgAij5r5eaUq1QjhvgbHGY8drc3LrBion6C2DyJt2D5YrfR2cJqrsRJjMT74nJUjjjy8o9"
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
