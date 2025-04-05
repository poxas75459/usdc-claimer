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
    "5oF1YgdRuxCHsDFgFGfVjmVmMRS4cugZTRr26K8B4hyz1biFjsF9w4XMWQXENP8rDuBjVSogTE3WNQQvbm2wRL4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aTMdBudQLef18nstGgaBRxiRfAhBjJhLqUCfCxCTYf9UdK3GvqSV71ekGJZtxXuQBQ5d7rcGHYyEXMjyJpyva8k",
  "key1": "54e6NJaeFzv3eMAdErzvwhJzDL9nte5UR67g4Vaan8m4mdUZBLmLqX1CKuhWKHqabcFGvsze6rKdKXruRxPHHhTY",
  "key2": "41HSX3qPA33oKTPuDZcfDsUVrY8sqDuQGmDNJiyHYpF2ufPtEoAiHh8QNAfQG9nzeEfSD972PAe8RPrLQTtjEKgK",
  "key3": "54sqnhXEpue3tR88126UWouLdxanZ5hH3LMFonp4k4pxtqDdhLsbMPrs9F5aLP7rj4MJmzs7rLYopb6WkCUbYfxW",
  "key4": "2NAzucWftEkcwXN262QKzkqQmAV7ynUHd3EmiKwcc7KskuGpAzbpYrnCRLn3yNWQAcNTDCuBvUXXXumrDxsgJ7fD",
  "key5": "5DhN2ziAEieyFZKnP5Nf3iat5K4ZJTsPDPXRhwcK2yisEPdUJyPwsamC6QxpJzvo7GHbccZkSBif1PFVBu7XbKbN",
  "key6": "4b45Xfr5a11WMaZQstA5Rm5dSFSXEwkhKnieiGvf8y1sLRtE4xpyxGX2CXn2GH8mQoZZqnVrptHCarutqZ35PaBG",
  "key7": "q9WhWF9VwCSAQGV9gh5z1kGsDEenMQC6F53zVg9tzn77ximYfUX7zdEr6Kj7R5FnjTyBoW4pajMYVG817bmgsNE",
  "key8": "22MX7An7YKQqNEkbHsjWAvS4FcY7MFUCibEFHYPZTodALdcr8U7DfWm523tA7TrEB9MkVY5LZxouEYGQwHKtCzou",
  "key9": "iUDZVcDTwBLN1REBeKrWSQ2StUNYTBXhhoTbTEi2eBNPh7D1FUsq2NNc9oAcH2FtEdPYu3ch8rx8md5YT8iWBrk",
  "key10": "UFqTNtEUEVtZsJYe1XvAAa44cVNNrnb6ShhzsWhe6rUz2ucUhibFYk3FLdMrGwntWdB3EaBaLj7VZpJ5agv532X",
  "key11": "towZDfi1KRtuuqsWJpreM9USS4DCJ5sD7xXbouymk1dzy3T7kLmRT4YY4sLP1TENFw1Udiw5ARszyUXYo4ncMDJ",
  "key12": "39gwFsKHHjpq8LZukcv3VdW9f4w5j5vPjkQ9vEzGMB5jhSJM35SQRWdEaEW41R5B1hD3r34YSGSaVqC2KghzgN3C",
  "key13": "GUSURGi3MFhbkinteS1Bms9631EwLUwT8ACXHc8sEuGkfPEsCZDXtvYPYCm8UneTSixgDEBJW2PStdZjB4vUyWH",
  "key14": "2JJf2CV9HaLK26t6NToRw6eQgCGpyzQ2ufpC7pvqZZfoEa993NmVFzGYvfCQR7A1EWauFHucYxv13UaPRmZx4nWY",
  "key15": "q2stdG1AmxMADZboxf1ZjgX134Jt2kYLCSwXBJ1WFmSecRPyC7NR9Y5xEFbziqbcL1vwQM4mkAmdVYUbhVhYrF2",
  "key16": "5XnZuZxYmr2viwoZc9hJxGs5QZoijhoBp9wBiC1kfREZPsCZUZX4ofP7fR96GdP7CWjcSr5YJyAjD369YqXPy8HB",
  "key17": "62PjiCZojRKR87nvw8eVaTu9SdBtRVRrikHaHHyu7u6wm2aempJoF3592L1bTQqyepBPNayfXVkLNmZz48DaPFTo",
  "key18": "413eUr97rbk4UhieKRFA1CaW1W2d3wWki51kVWW4FDaT9JTf5D7CTVUvVQZRKuCYxRDSZUq7yTrFERsUMeTXYgXz",
  "key19": "3nJDUY2WPnLQixiXDQeE2WoppizoDHFrQyxZQPtTwPfqHEzv96tpjubjjXSHv5oJYNVns3gZCkgVLwYijyq8SstP",
  "key20": "3qugxWRKpkuu8Mj9ATVP1kh4L6ePCwjd1aKssX353FnEuiJ1YKumxP2aokWS6rPJwCuUA36kRqv1Wq7AjSya6yQu",
  "key21": "4H1G7oxDDdjXQTnZ53xZy2Rmw1P92avXQjAFFaccZxBdPKJPPVsg6uDoeD3aJ3uciBQ4z3a5qTdQ2vr4bz5CoarX",
  "key22": "31nxWH4zoknLXy4DmRqYh5j3S5yNpfMtQ8wePMgQ5KHN1zahBtqFqkLL481pWak7eZJBFHP3FEbrEwjHppDgfw7",
  "key23": "2kY6BVbYPNEDMj5DcBY3cBktjaLN2wei16BhkxTN3X5VpYS1QHNtVAufsWQ1e8f11WXkn6GWhq8ifHkKL8z3Pj8Q",
  "key24": "44kEm2LeArFF6mEcVYp8vKNtoeikvdE8GXqdWG1X8e9MGUSbRdAEaW6xup7Q2D6GugqJukyQ6oU3XJkMsirJnTJi",
  "key25": "2ZLeTWMNyqoJT4KNzfCC6tcZFz7qaK9zh3qoBHvToDSKLG8ggVZozNVb1Ck3JXPvzovV6yvQnfxPTDL67At8jw3P",
  "key26": "3wQ5PzUhLd1nca5aJWdEeroTnMPBEx4KnDFn7ce6c94fxiEiDqvCZPR856Q1DatAwmKkMvjutpEPfM8avjgYtuLH",
  "key27": "44FYMnRr5G3oYoHLyaBCSahqzXfo55zBAmGSuJ9ki1Y21ZZi1UYpieFQowELcnoAUNwLs8Ym92yjPvqvZRK5P5YV",
  "key28": "5j2iR21EaphFGQ9iVMxf9NX5iMmw6z11XgrT49Z4ihadCa5svJnaXuvgHanX86M2HxokoE6MccX6PLR8ENVTuvU",
  "key29": "4m5n6g4JL1WFbioxWRqRBbK2ads7MQFyjmX3VGudvWbwN1i2S4fnmfPkBkMM2ffCk1BjnZXZEUFRxd1hBenrX4JS",
  "key30": "54WaTWeMC4yy8DhuYmD9pxDvHaNUZayuXGsG8Z36T1GujhusuL7LRvGTDuvvNpK8Rz6x74UY9vwdWAHEwGhov9rw",
  "key31": "42oPVREfNp9AHeYy8jiHuYZLRJ7bC4YGKt12RUkAcRVHoy1gVs8LhenxQTSHGxPmHpd5G2sUDywJAN1A4x35BhcC",
  "key32": "4KY6XScPs3akaVRQpvYk77kmcSX5STS349zxSH3EeMypWYpq7txf6PowWGhsXWx742nYJiRJiHXDYFKqmDUqVAAc",
  "key33": "CYVg3SxRarC3KtnJXLkp8YT7BmiyZtt3NtK3eSU6HjXMdYg7UxcueX5PbGbWqNXVdGzLV4yJJuXJ6BXb2bWZh6F",
  "key34": "3VcEH5NSyqFex9BLLhdVp9rxRxECtCyviMn56ecjiAnxwrc7pau5nx8NSABj7cudgQSrpBuN6Pf2YrD641pLmnwp",
  "key35": "3eFDM6xbETQHfo3UQSfw5p8eru38VsD5M3HESzsceEwksQPp9jj7wHzqmJyvupFT77VcMTmnyMJJVHWkSr6wUazu",
  "key36": "W1oB7tQnTSz2brqPKRH1Vur6bc5wdNPVkh7XqvYWg57fscqFoMH3UimtD6KR7eVV65TtEkksrDBsbtP8NPB4AVT",
  "key37": "HZ7Vm1jn8vo9ZLk2VcN9JTKVHCoWdAcwi8aSAA4aCFpopm2VkKzrTn4MVupURAhmCCbuhtr9Bwh9tz1hwrpVfuz"
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
