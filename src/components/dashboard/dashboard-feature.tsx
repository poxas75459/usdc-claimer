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
    "x9fGyNDqQWMFH8GgX4HFhidYeaWB8Jm9tcsyB4UvYcTFrgBwXbJC5ZMLnp5cTYJYi34K8xQ88GPGvu7D6xNcVnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28tCCd38LxAB8BYHce8PRoev252dmfPaxtUsvd9NVsoYuhEsWSheBvBCejb2NN5CHe4yfpPv11TibZbeaPfiA4aD",
  "key1": "3W3zTbTEn51RQ9Gkgnzwzz1HmdKBDgobzfkdgjbTSoSnDn2Zk1TJnq36PWmEMyRGEEe36sdFCbUXXzCLt3Sjy881",
  "key2": "KcEhPRbDzcasXPL8zJ51Bxi4bXGiyqPqipBkMGb71RJEsno1f5yY2HKP1wm6vR4n3TzE1TWK3zNvF6qq3BwoinM",
  "key3": "hTG2HBueXnVNcTxzzv9QFMmk9rtCNpb9bA3w6YSZ7oD8Ht9mfmGn2PBwPq7k5yWf1kXFv8MaUyR6ooxVYCzbqDM",
  "key4": "4k5qbGWBMM2BxJQMQgZvM91NkJj6upwzMSvD9FX1pVunWnuaHDk2YJLJLw81iVoXuXVj119FKwnUDGhv2XBEVwMS",
  "key5": "4f9AjR2w7iBBR8vTsjm3bcbWoN3q8qpikhcCdtKih329yTupWgV4kWjyYVaPURLgZt53Q24PvRy1PFhB3SQNHhyn",
  "key6": "55RswhoSrvZ7SbBpAEk79FS9y63BBHeYvUKNQTkmschR893dhxVLxfqQgFf5nMXL23gbxuwa2M3ADKkdk49ena6Z",
  "key7": "fWAjbZJbs115Suk8MM3N37ESu6r6auVjYPE3DjpoPsacGwLmL1tnrybavLXj98q1Jv4LFqsXgNpAF7wsHf8tok1",
  "key8": "4GR5iRekdvUcg21unWWLSviLoTBkNvAUwgNfjcwURepEfwbCPu5pHx11yNu3A4PUeGgR3pPpwHpGwTvC4TocRRZu",
  "key9": "4TYgNjhUm3N2DBdPH3QRsyT64qpfuQjDqjd6WUuJRSPETeJF3y15QD1t4pg1BR3vwgNVA3rwrzraPxwrdD7NvF55",
  "key10": "4nWSj33rUEMMsfwJo2YpsN2HTsiPeg1cTSVD2UvSQAXBpdByfM6sThyfCfebauJNvyozCxtWPy3u3jRLgPtU6aT1",
  "key11": "5M8t6J5EwL4YV68Q7sAoaknRrALWRjMCd2nwGCDBSLvQWabxUmyDEupmHYnr2s4NMHvvraPePL2owFtQtaLkfMxW",
  "key12": "3KYSyBvR9rET8ycaPwpsf2sfrjrZAtcAXanowWgCodKh6oP2mcmG6ohA9R3jQB5dwcCSgUVi6bDRZFCW6DtD7h3k",
  "key13": "34956hJoGCbryBMVFtq2z5uDTf8obXgxJdj7Dae1496aVxvXVbDMLdVwUbZGJL4HQoiCRWqiLQoR4QMd9Ludq45i",
  "key14": "3ma1Ve7aK1AjkkTh3RPZBZNpc94TSuKn59nJZwNas2ZyRdrJjj3HHukmnDDQA9Ze2bo7sV5zCJTQwYTAsXd7pZs3",
  "key15": "3r16QSRiiwDG364cUj6ZUz9LbKQ8v9dS9CYMBJyuAA9YnFew94jZTju7srCLFQ8vGVrh5DtfsrpvBzQYctQqnTTR",
  "key16": "4JAQPUMrvA38jMoSuHmsVUnWBqTPrxG7YLJPupXoUGKdU1m8ZeBXQ1QRuYt25SxFJ4FzCxjChnMvhuKxGsje1kEE",
  "key17": "oVBiJg6DkDvQNev7Avs1ZCvWxVqpS1uUkKNkN9fWaowjv2w7GN8rHqbHo81wnRARg8djUcQoEh498A67bcES9Ph",
  "key18": "27Y4YAK5HT2KuXZFShh9Ep1AgzFtHaP12VRsnnAthqMrHYwykc8kCNLYV2HjfZfCJw98exmM7hqmJmziLgKyc5nn",
  "key19": "4S8Dzie2gUpg1TUG12vHybrS9VsedxwyaaZtqwEUYDsn17QBHKE8EQ6zTFER7YhnKPjqhMt6LJmiAXEUZw2yUUeq",
  "key20": "a8wV8Xe3YhGYdP8GSuAS9zvEd67awvTHXYdeTzMFSRZxi5ZQT81khDG6yqrVVajL4EYUfvNhKuob1eyLxmKcyzt",
  "key21": "ACVmo2p5u4RE417uenNxS4fmKxG4QX1DrtAE4cqbHjN6QdLkK3RCfozkZQGuL3VsfM1gjQyW7zZUSnE8nAcbvBW",
  "key22": "4U8YA3911o65xoVammTUemrtuThXduDARU6oP5LkazMvPMu47WEWgHPs41o1abWjiWxCiEX4B2FutQoykQi79uEj",
  "key23": "2kJeTUkd4i8rmW6QfqnCYsi911MU5DT6ka7SXiRHyxRvBgEYatsKezRy17fEteHkezXDAnC2BG6BbY47Sw1Qic8Z",
  "key24": "59knhGzWrckS8tTXvuXKfzMAGCkCFkmwryYDU94asaiXQBMi2HdtqaBohQBAfjD4aFCCsspZukkH7WbH2699qG2T",
  "key25": "2EspMJG8zcf523sy3dk8D4D2injAALqFW8ZH48uV7ad1cnpfxrBfRC9Wzi8nEm3UvVnQqWBhHmrvtJx9wfweHoaD",
  "key26": "4youhckH1nhDqwQWN1i32MAX2rAVF84SbDNhmGcmdwEKf4YSPNgcn7vhCGU4Nu7dg2M8EyLnRPQBAhcorHKsfxGj",
  "key27": "21TcQaPRCrAnfyGDDzQgJBCJPbugCsZfb4BK4mWMr9TooDRcQPgEcAwRwdWMxuX55nfzXAzU42iayvmSHELS8cw9",
  "key28": "4y4BYprBP6zPxf7ChX7rnEGft13GpWhdaYF9S2rmNRHa4fKZRHYbwyekphFRC5fXV8yysMSY5pLy9mfGLdPWLVpS",
  "key29": "2zGdZdx3Ex4PaUKQaettdHQTf77bCfe7sESjNXJ3CDCGCHXCmYWxGoMM4kMrePBtHm15N31ssq5PMacQEwAGotQd",
  "key30": "5eeyoFuJRdBEXPFPL6SvVtsKMZdoaTKphmAsd43vJnUEuswWBAce6hh7m9zLZC7oBJVVQ4Z4MdJmdAmnWeU8FbFm",
  "key31": "5XpLBEC1hGMTZLnFPRL6hfdDriLJ87sVogifBxuc6WRYhmrBzHXXWwBhnrWwpR8T1KrFPJVHX6rcTWpoZY1A4Vj7",
  "key32": "3uRG6BXHrjTsqxM5v1CKwR5nPVp6Topoq2SuoxsnM2FqP23uQJRp5VN8VSrF4ZCkQwGQg7XbYit7YGZkTqSpR57h",
  "key33": "7fUPUEN1LpKf5WNfCr57A7mBNjLbLVK1b4jGNFJAFvkXGkyWzj4vAjSL53an79Si1HZ8BG4fLzdrJnvPA8sbBom",
  "key34": "5wJBNFA3bcg7eWn9UKzVupbJTnAnzvZ5ZuU5Mm2coeXaDSEzZNxwvtdAJPoyXArkiUvsxWELbp18UZDXab2Q3NLG"
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
