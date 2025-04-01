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
    "5jj7zwLyg5LYkqNoeq7EhV8BBtJAgw5LtiCKVqDh5JjWbHUC57yvpPhHaNS5qAgoMtdH6nhdjPioSqzXkLidUnHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ipv32q9vgpvDnSZZmJ2kTemNppF591mmga7qLXC4M5DtZW2vtn2Acqh49pSF5wTr98gFiXaNKVXaeBC1WarHFm",
  "key1": "2SMHuiF6xGiPNN17uPs4Tkwq7GG4ZDTftTfow8C5BudCkXLVgqY1YYyYYXqoRZwkc3cADzsKaBsYMxoTFiVNVHf9",
  "key2": "j8M2NMgkn3e3vyDtUe9HEtbKy8j7xnTQw5JumETyZiF5UxSPebtTjHHK8kTnkBmgBCA7fCfm9BsYSw3iuGrJmNg",
  "key3": "31CHZa3pkDaAPdK4VujHXYsXkABnE1ecHGZsXCrZr52zViJ9Lf4FkKG2dSPG1EWnSaADEwZJyqFCdEzSAjdqxxaM",
  "key4": "3mi1RVvRStsR3vnnE2JTj43cegxJH4u91o2joRTQKP9ArRUfNUV4xT1usJjfpemnmQm1EJkjdnq7eVEa4owjkhxc",
  "key5": "2iTCYzG3rNegPFZZJYWheShWVMJ2h2pAHVkkHFDLDh9G1LDSLHjEgxzhLke2f6JUsTogAgLfQ8Dne5qEq5X3Ndmi",
  "key6": "3SqUdHVqHgDzFdqiepU6KWs8M7qew6es41XeDU2BSwdqkgbBy36pRT9QjqWqL57NYT6BWYjSqof9UKpvdQdMkEuk",
  "key7": "3n6nUwfR2pkFAYpXHm2BWZg25mdrkGRZv16bUY4i1ymQrJhoLeaWEGjVbKK3wvMdGjjurJjmj518ZWxBjn3rH3uq",
  "key8": "38SQs1Rs9euVAtHPNEV4zHEWWD4esewjSxmAKZJRFqUiqtkBQTSXuw9XCFLxmMQVDk61RtoH3qiQ3bxen8yiAnwe",
  "key9": "2geiATMQBstjnLw9fLReANK6c6rmEvmMCZnjjAK2TUEuFYxWd5EcpXUyVsgMz1LKyeg59aPYt6j5KyJEwZwx8m96",
  "key10": "ES24vCPoWGyYUhn16cYk9JdPuk1qkRTdsLjvJAjdn7bMPejVsWPhziB1sjuWAb1oA1QVFQH9iNVy56qte6J81WR",
  "key11": "5iuZNuJNoXhDMXevzSJqizFYGNhHtdvdiUEEoknmXe9GKvAAVRzLe2vz4QDRBRFmzHPC5LsUEyLWqJ7AQFHGKJ8F",
  "key12": "4EGEc7S3GFgnaGPZmvnionPqU9GP5HAazpg6T9ctCfaUMjiBn8APmLf8wf3LbhPLHWkMK5GXrww5pPFPCXrJJRMz",
  "key13": "3W7MWqrgpNRpZjYMuWWbjHYQbH1DhPPMCrDHHBuFGQ2Wc5S9D1pBqk919zzmhBgGfK6tKSm99ss3uWxd8sCfbUYV",
  "key14": "2sjfNNmqC32Pjsq24SU6WFEQZwx2L2JnVkWZQJRLbBq9D5fdvCn8pS2RQ8AZRP2kZ1a7Gehafe4McQs5gFAFUdHg",
  "key15": "3gw4WhZdvvKkMURfYncMbnRQkbdvUBSpeAucmMvQmyUxGRWh49ayttUC1zcZSks5iNinPgKDpEZfZVrSMCDAMT2m",
  "key16": "5YjvqNiqsM4nBBrjjkMGrmyXYzLwYdBBb4wnRKNzYSViqeD24ksTcJKijcs8zVwSqxPZJ83WaxwL2D9szcDY6QBM",
  "key17": "42EvLqYzHpTbyGVuHB2NVXAYbuNUmK9uEdeKJH11dVDKrMgbWQuR7ew4sSQvSPEQ9EbQRfS4SHqZrQb4jsrKMAiA",
  "key18": "5RW9ynVnvmPrQp23bj82q4oGYMRQqrc8xHCEaxCoHTSZ1o5Xmi62DDgLC9D6Bc3gMKpFNWNnsgCRKdARjd31xL57",
  "key19": "2JM7ubXhChFux24L7ZAcRR7aL2eKitRTtyWhg6945bbgCrv36Z3yPUzBbStSP7yMSDvJpE7t7DarPJyssXKoJT59",
  "key20": "Q2RpH2QPV7W5oWLoPBBHeF1h8QKnK7HhKQ5kJQS92ayaz2Jn3JdWNp13rxreE85QNCChvkbDEd86D4tgHqHd58N",
  "key21": "AeAhsxWVTDEEZSXAcuzVRXm2ihBsKm5S4Zn2oVZW9dx5BZ4pmmF5DebLp1dkN3BcRKFFBUzEkcQuPbZSdqhMmCk",
  "key22": "ZQUYgs9VonzQGhqhZw3D3Z9kMABbKiftJLe2gM6zcVrzH2U6LLVtYXHXy4z3wxhvjvoqEBwfZXpqGFnuKqzFo8H",
  "key23": "5eyvdwAnJ4YLvuJW2xqe3KPiAMxce9z3FH8WpXMGPvkrSpUnkUDuqCXbKjny5c7HVuzBcCaNRNFU1ByMvaoc4qTZ",
  "key24": "26nANnRWTVBReQvdK1WcHWBspYCWQ332Ub2xqhWVkvUMCSHjosFtTrygnFtCKtLzB5Z5vdUFd7cz6t7ey9pjnsCs",
  "key25": "2v73fYbWVJF3VtwZbAR2NpZ9y737pZzPku1qDXG8qNfdTeRqZUqp1GRtTKi6nhSGFQaQVsnkwiT5QBPrv6zf8cZn",
  "key26": "AndbPhSSNz13VfWTAnkBzLBShyh5jqLkd1buyg2k8SZUCEBAgKXNj4xiLE9v7TMzEpYx7dgBCK3i6Yt9yM1XKPT",
  "key27": "2gU8ptrX9gFnZ17x5aTB56cspinzotkc3VYUixEhhSe5fACqhyf4FMydH8o1BqV1aotyJoSkgsL4tnzF2zvoViTw",
  "key28": "2P2hsdSyTPPRD4rnarT5oq9s9qJby7NFtE3gFz25V8oTgHMGdgEwiswXmCTdyTxpDaBAXn1BDPzbJtynX5MWxNnY",
  "key29": "4fUoSDCKxqD9UHTgm2p8rT6zYnw5JnrmRjGWreJaqZVhFa7DS8bb7EYxc1nKKUwsBfW6FZV1i2TSS8DTYqrxRcXr",
  "key30": "2NhZumZ4a5NrFRfBKCLE5B7GhHotMiu2QXZEF1uHtkMD8ZYWNjqXCMo2JFE9FKNyzP7V9caHbDjkg9Gp7yuwYour",
  "key31": "3FBDSCnKEivjVi6thMgG3V5hpNDbWTfJDiKxyV91jQCFJKqD1wnW2VUM3Anejky1fUJTp8qxEBvv44JPM9rv1sZV",
  "key32": "2TpqU8BhSBcH6KzyKQpdkfB9kYJXWgko7mNn2brCrMM8wXrcRBjx1zfiUkLqoRFV7moSPTv69Hm5xv5CSmoLfmFK",
  "key33": "4VUAhsa17iod4jdsUgWuyUbcfr629Jtw7qg4xehM5LEVgxeyYLuJC5mM3bwnP9EtJY7Ffn5o3pDWCkVDaAndqBgE",
  "key34": "4upfwS7HeSFt6kvSwCGAiCYYUov8DD5aLNaP7wFM3Wd4Jeb6vQLynQsD7bwyr7aAZLRiYMW5oFu6uPhn2yryuS6j",
  "key35": "3ZdYhFE5BMrtPniUSADW486fLewrBD5szHkt9fr36Sv3CX2fhcfmFjpk7E1L9XhnuKERGgWVpixmVWUBcS8Kn5wd",
  "key36": "5wHm142kMDFDUD2USLd5PZJSLV8Xv92wfAmJAHNiUL7BAMLmKPQJXcJPWBW3e9SnbiKpaPsYuzfdA3aBb3eyuR9c",
  "key37": "2Gra4B1NV78UvjMg2NDPqxvEuP1X3EduGkrD5JFBhcWiSveTNmjjuTX6u1twR11iaGHouuuxdEtujbLBcdb2VuCg"
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
