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
    "4Utfk3TmEmYkq54jZWZ2EoXt8qGq2aQBSHoEFfosCRV8AMF5uzrGUVuWWTFMNrjmeWJAVPmmMjPnBQxKpUU51faA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bevCk1jtLc54N148Y3B8k6oJpZ8a2vj89kw5wm4wcrcSvdCWrx7sxNVsgTojz4okN1sC8537uiPa1gHoggUXCPm",
  "key1": "3W2NbZDmx3YX82BzFXUSfF3YWqKW3xJyBbubM4UQ3RTs9tdGnYkW1WSbthAABhBe3G4EUzLo8ysd7JUGBwt2VjNw",
  "key2": "5UmpPDZqVRzi3FmBESNHJ6fRf14QJ2mhhkmxX4zrJpGvj9FvuT8JBzZ4mTYCik1q2cueGa3n6hKakonuR2dSWT6h",
  "key3": "RMXY53KcfUyH4DCEXeY5ZQpjPaNiXqwHdQ6aqCTHaoBcvbcTW5vYT3QzFnj2M5Xd7LrrfKi6LgZi5xPQVHGbVR7",
  "key4": "41xi5JxjwxixXav4w7JUYZPJVGQR5BWjehetvUaU6NxvA89aH8nRAxjhGb7yxmewzw4BW3sW4jFzAMZU1cVxnAgA",
  "key5": "5X4nDaayhEYHXq7fmJyLFjacJDJYHU1zYmkG1z1g96Fh88dm5Ej2vXrBjDSpWiH1UfyfzwAtkiTki2qPoTMnyXbM",
  "key6": "3EL4Xqdpt3LzZB8Eo7irS2Fmki5vAFEuyXD1mMV6KbYHmqpupHzaEMBd94X8d2pou62WV1qUrd1aGNDB3zDUV1uM",
  "key7": "4iHbUbC3EQV24sBKN2F94TzNVvJ9EiEHpypj1CYSzUL8PgP377nf45baNq8boyqozofv4FmTBURDdsL9AXrMPwfx",
  "key8": "3RPPNAyogdbMGnxTLstZ3T9cUjUdU3XgfhPGwGP93dukQvprKcAV71hrgkysRTnFnWN7YERzcEvLFsRtArsRgsxX",
  "key9": "2hX9SMcEp7Jjr2xunrzocEZ2ZqdTVMgr2puQh7krdnmu34jENv4tVS42B5V9PjLZYfAQmVeN9GJBATytpDUXYupN",
  "key10": "4oeN29zfGaeX9fn14UQpZaz2q3NTpvs4HMvDPhvyhfvPxbhAUMzj8gEkLAnhb66sWksPe2u5xtSXP2M8qcVz3jHK",
  "key11": "9yj7sUZzkpHcPu9UQNCH6vzxifFDHw6SBo99FTw2NePf8y4tj7P2CKkVtbJjPJwvbXd8zZKbvCbin7sUPLQyw1u",
  "key12": "2s9tpQGc2sSutzVydFfuXpH6GSspMzwzN6W3aVvCAfzB4LNkmSYVFYLigeXdVieWmLjns8F2gfKGXaRf1ssHwDkk",
  "key13": "4w6LrLXTGd91tRenbgVsLLBvY9GJfXnJTGhtYny2mZR96yBy9rqJm2PoAGFQcdGZVnAPoKwVboGCkrmYsUNuG4u9",
  "key14": "4yMHstwRVxjn3puUbDefpsxWBdLhdtuPTQkJNATqKVzGSeydupyopnbeBifhRMPXABhRvWaQa5dzysBaJueagjNL",
  "key15": "4R4iBQ3tukd8W2uy1DoUjJAFh2SNkR5yUkXLtjQbi3Egwcoxku5uFVDTRGTR7Cr2B7wMJzQmnnkL991j7sJ2LJoC",
  "key16": "4cqMAm6Cc4Uo4Rbcdc7pnwd8VyUgfDkMoDjQpn7N3rPEpnRsWfjozWNbWZ1drdG1msLUvxd4YpLCHUF6z6mzTGbo",
  "key17": "2rN28WE82mXA7iqCkviv3vga95LRLPzJedmAVFaJjv1AdZBxLjeMPLfDoGZcxxiWrXvjMMfWRpBkwyosDS6axSYS",
  "key18": "4bgAb967mjonJsBQzkEx9R4ZBZePv5HYCnbWSWbUvoMxVC7P9hrS1ms8XprzMav8CcAXBGAJCtHo8GQ4wNuVkA4E",
  "key19": "DTkFgn2uMnCb1j1QNNqGZDxyTc75SEd9dPR8PYwmeVZ3HEk6QMVzammwu9KPwhRtsyDpPJncJYKrF69RqBfzmUD",
  "key20": "5X4DrDpfEL8atRUD7GfEXUdx8jq5h7zs51R73raTJEa3fNoWQKZFFf3654cCV3XSxNNyyfNCyagm23Af1557g8i6",
  "key21": "4V8akB4bgFYfVqmvymQ997pK5E5KomuAxc4bRE1iuhrk8AeTxWCQB6HzbbcricaQmLcRcLxT5jMwBgaoV9d25rY1",
  "key22": "5ZWb3qYEF8kXRF8dr2XSiTDx5w5iJrwYa9tApF8MaV6GpCTmfVZ5YcpRstWr6jDnKS8oJ5wWRZFpnZg5LW3v5YyD",
  "key23": "35cRUAdtfqC141zNawoSKr9trQJ2Cvxfrx8ScaoU3qgMgUrKEPnaXx6YoXWFuSTJ1LRGEjEJxMKa1r5bjvm2629V",
  "key24": "4WJg3nZ9fQM3bnzCx2MYfPbA9xS2uVvXjgfNeFdqHXVSTkE4WepcsUYtVH6ugzRE6dt4on98NLAxdQmjy3fWYt8N",
  "key25": "2QiYorUBLgm2pd4K5uJ3NFAuW9DVpJhQuV9orunKTEAKYkZCNymGNsR27bJMmM9apw5iEiEYmkqutWty4VN7D9y3",
  "key26": "3bbpgEAWNDEvck7ooHxPgMqKJa3vsK6PzCSbqYvE7sZZCZZgJMVp5TbTZ75khi23mKH9RTi79eKGK55vn1qFt5BX",
  "key27": "4sYm2RGJRt4G2HVZvYUkBHuUppUrE2WYvktM2Q4LphuSE1hcB3WLFQZpuQfuK1KsLY6NbDRFojWE2ugDYGfHrmWN",
  "key28": "5S52vzbcXAMGMjFEWnJAbu9hg3VYiN79SDCerdZCs8gRThgUtFRdGmB6JB7rx8DqDwNarbUtSSWrRgr7HUWPA9bW",
  "key29": "2vU8BMmai1ZKYwbMqpDxkqjwu7WrPLbsq9qc3V8mFdVjjx8eQ7tAU9uLx3zS1eK6tcXcdcLjjeAG4KGjnxo97ggf",
  "key30": "3YP53BaHMXuMBPN9Ng2qmcvmDbkR8yFmJviPgD78czVc5d61XBqoGn76QY7Aheo6XhQqcdtv4CBz1XKeEoDgGAZX",
  "key31": "5ssiuj4iS6ks4rmsaBsZtp5DKauipJnvvnv9fb1hbBMrfVuLTmRtQvZoDrgDrrhfPA5xqb7R5Yqkm7UAxivp4VqQ",
  "key32": "4QHC59RX93uVbsgXE6vfQc5gLPzmNyn4EpHbduazAeqZrrhCHfGDW4TAjaBHzrJmNoMmJR3kc3F5nSJctBzJacqS",
  "key33": "5WGAMhMDFGfqM4AQW7V8KxMXehskfe54qDdXmwNYpcACtMtgG8yCBf99oJk35HsbrCbK7Aqspt1HCYy3YnSzGADc",
  "key34": "28k8eo9LbjPigu3oosxjZjdCNAP1MGmc4JyFcqZGAW3myKmsaAeAYPwAR4oPAfdhSBjKawn57coqpXqjzQze9ESL",
  "key35": "42mB7aBZeCHLUpbkkVT1h7zGMmkrxB9nKyfeEbGen8Ue8Qz6qecuRsCHBBFnTgqfur8Zc8TZGbqDs41adFGQY54J",
  "key36": "5g8fTb8R9qMeMaJh6e1AERTqcYjbt36AHNaUkuzRLEH5UKffPpcrKw7nrhmfU2Ewwi1Aj5ZMeT2UdVGuZKwh1jd4",
  "key37": "3TQJ3yEiZ5GtVgNneprFcVHYSP8N4uLP63mABVZxepKg6om2nPtPepZBXTURkdeywmxzXKavbi7tHAnnS4EQQC5i",
  "key38": "5tFMiJPFTGZQQQjsbo6zuWfc2PAnscreyiDQPiKCUGF9g3XHPdsjmnCbTs46amxfUwFfVV5EQsPVCcFd9yu3ZVVN",
  "key39": "4Keej56rgxbqGaGUSRjp6JUuuhCMv4RtutE1788MoZMcpan5ixNwU2X6Gb9XiZzwKg1Jrq51zbj6J3bY4oJwi9GT",
  "key40": "5hQmbMXDGsx6qUA9zDoARsbx96YESvFYWyofq8EqQ1c2V6op9C6btpRUKG5yZAhvzZLFn6ZGYZKUEJjHa4j1wvPZ",
  "key41": "3nnJ8LQqZ5ZUzuDxmgX69kTzRAgZ1nRBaLqN5qoQPJzMJaEkaMtbFJes27CyQxwyrtfbFMgogvTsTugZkctPYZoE",
  "key42": "z3Pvkoz9eAVH6T7RGwTDg5MR7AtDYNFb4fBn5cFkodFUqhaW823C53HDEwhbrx4u7e8ZADkZV2seMhtqa4sCq8t",
  "key43": "dXEMFJPwnJLJJwUmthCVkmGfNojy4iGRe7KY3wJWUiAjLFtgB3LDiFZv5iBWAZJ74Pgcn2N8poxrx7DVUZqAd2h"
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
