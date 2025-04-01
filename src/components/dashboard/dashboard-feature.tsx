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
    "pT6qKkAfRyqtVrqJktcEMfGXAN1CgdsPW7LHyxCx1gtudjBAgx374LLkrpPqDxQJwq4GA9CHqxAeU5UZUK37GEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r5Nj68eUegwYKu22KF5U9aackJzuf8wUgmo6onURxwBZf1Zc3eUKmxFtsp6Zjd2vmfVApyG9rjhi3jt5MXwunqk",
  "key1": "cLMpxAVrtnZDM6U7Cw7FG3qR1cKdRREkCDaVhAfa7mPhBBX58FEo63SQFLQSRK7eLUxwztkSxeNW6PjhKvNkpWh",
  "key2": "4bmDvRAAmRTmR7uKJLQtLvcZzkpc9w2dFa57vRDoJrEQ8vmdRWhE2w2KSWkjuFXfX84oamNPTPsSbbEn8cjo3pU",
  "key3": "4HMaBvBDdnxCMvwrdZqXyUbYSB5ZfsUWddkttYL2a5ouNiJaLXRboLuQRG6LPG1r853DWJdRFQ2iBkoW9H3iMmNm",
  "key4": "3ELugh1ASPxStbZrB7UXXRS2ZKkzKj5TXs3BppMHR95Ji7WvUJW4fguuh3jm1CNCtBqvRccdk3QP3SMsP26rbJet",
  "key5": "5Tm9zxAC8iMM1JnE7Nz5vXHsgsW1rbzy7SEoiwDXZ9FtjBACQEff7g2t1fRAGvSE7PsRP13hw3dRYDCMSGfDkxbr",
  "key6": "5KbXpZJUa6pnoCrZUBMYbFukj2J6M9CDLexwiNK8USqfGyNcYbuTfkSA8yrY3ZcxJEeMLeyYhCowW1ME9mu9vgRV",
  "key7": "5UoMowQev23vEYKRrorgzmgHpyaGefYuD62P2vySoUWayam4QmSCD2V5LEtYPrFAGiDP1Zqip5U82FaUhz8XEVP6",
  "key8": "3ohVrXjxS5hJFXaRzxYvryHnYeVkUNt4PMoznXqLJB7jQWV8ws47FiUGZnTnfxWRKdXo5R2NCs4qf7st36upw3s5",
  "key9": "3Jhgcrto4cBriZmT4VaCWLJRYJAkGLf39KGj25WGdeLGELsTYZUBcdQ2b9TGvDiKWEuWTdgHrWim8ajUi58aYEH4",
  "key10": "wq5sRVJVojnUXJVwZVNchZxzNdJb9muSEcXb4hMWCbPzzFopyJD2DCACxRJgkkAMb3ZcAkzPas2qwZDN8d352Zu",
  "key11": "5nQGFqJnJtE3nHXtwnmYe2u6cMbC6C1V5TF6HVTxUnwXZZ5pETCCgVLAfkTmZkAhMsGcGXm8PfK1hJKiEZSuTREc",
  "key12": "4qmKnmPFMAKkLjdCRfFTsuQJpGGCwaXcb8j9qeqAPG2f4UQzmzeVBVZZZekqqj2RfM51j9oJFWSkbJ2B5cxKzh6J",
  "key13": "iC52dXvH8V85R2XRSNDaerNtqQmhMgscYJGrU7XE9Bq5uNc5Fu8GwEFM49Gor1HUMp3vSNywXu5gXrZNaKwzZ6m",
  "key14": "5Ts5DKzWKL4tjqiCtqiJUQrPUenUqSAge2CirD6n5g7reDMUt1iyurWCfvNDrdhkJSsHuBaT4cruQ558xud4PDGF",
  "key15": "6628zic7XDvbQ42gER4C1BmL9BFfKHKVoY5HBeGjnWq1sgEkhWnPY1PAMBdqNe4b9LxrCzyaUQ2UqGMtVaJZnKqp",
  "key16": "5LZrZpW687zaDG6Z53YonHMnC7tYey28iXYXe27uNDH4eMSNf8UrCu1vtHJmykgUeXMVus668fkUGhaHG8vXUThy",
  "key17": "3qa5JcYG2zt7TJd4RxNcwdZiJTFiN7Lk6DQq6cD5mEPuyS4bjhzP2oLgYBZCQEWcKva7mdQhjhXw3eGSmHhAkkLd",
  "key18": "4jb2G9kiwo39tyk6XqTrMcQmetVsdAEoF4BAQiegPRuDrZaHwW2JQkgVyjHGFNrYJspn3aDK6Yh1QKYVNzEVxa9P",
  "key19": "53ik9PtXsrxGMRWmqXaXWsjqLy8q6yAUSob9Tyn8Zg4QEiG46oKr853SGVbHzKR8D9yfnhww7p9P4gXp86vgzAcX",
  "key20": "4dT8EJ6DkijYbgn6Myb6MsHx7ZtVK3STJa4HFjQD72wp4Hk7Kbwk7SG31GTDAm28b7kPPzoniVWszEE2KZN9cRS9",
  "key21": "3evxMoEoVgTnYm5LhXdc4ffb6ZMFcb5KvWiR3xykF9prkN1yja9bxoPook3z7dF8GwgmG4FCxNehVnGDjZYhv1cb",
  "key22": "3bx3RpVwNn3HQGwZk1Dq9ZAE1QjWVvabnb6f48VzVV3NuKGhS9JTswbZQ2qqGWFWhupebEzP1fVFiAqhpM1bGoGM",
  "key23": "3mDuTP3hVAZ3CqtrYXn6RoxkG2ogChw9PNuXEmUCHxc8KjwKv7aMFHD6sv7wVkXNpzvQReK3CVPToUAAYGtPEY8y",
  "key24": "4GvsXJ4WNu147c4ZJZUR1fvucRCkjcKL9XiBFhdbcBDA9139CSLTHYhzvVoCfZZVfxQNvZPVubgYs6gRe4sad3S1",
  "key25": "2KZW4QUrKqtzkwf1EuV4v71bFEiCMWBu7Lx3wgzPvuVGtUG1b1TAv7ARTSaH6NVx573CEuzg6noGqRrwZPAnchXj",
  "key26": "LM3DYadgiGJTqXBQWDJyZEQC5oFMo3mcZAZcXW9ggUUKbaRPeNnCL3oAZcjZrsh3WciSgQt5VacTocopY4su4VL",
  "key27": "2fpU46TQPhLrwxwyKKhurq1T9FufKHku94iHHyzb1qmN7ChvcQt3hKNXrZU5pQLFcqFC3GaT8t6yJpPpYBWT1b4Z",
  "key28": "pxYXjd4fGv5PXFsZDyKXNdkMwob6Jm8uK6LWM7P9MUMHXMo9uZpNXFAyvjGSAaigPSbgAEud7goEczyQ8fYrzw5",
  "key29": "58wroZzRU2vUxVB2BXx2QyZeGm8LCR3hHpbgv6kApmtbnnxRr7VgxFsCMmMrPDNP1TzCZofRSSUwAVQZdxeCpcxr",
  "key30": "4e6nnixYtHny5PA1j2rWxownTHvcjyZvm219vPouijRVLFJpgYcXmk2WDzSese9oc5wsDgfvHgRb7tSKUwa5F3zZ",
  "key31": "pCYyczyhpcnC9xkbwdh2EQ7P4Uw6Hkh6eXkaG7dEm1cR3Y7ybVh7VF7SjFDzH3Ppka72tDE9rxy6cPSAABiLWJ5",
  "key32": "3tKtKPaeWrS8JS58yKNYsTnevCavVZFQuwuTEQjepCYRHqf2YK2YBaqnSbsXCRPQPhNSGmTn7U5v1FL7bcjpNyGo",
  "key33": "2oPkxLDED7MbRyv4pYafMJo4vXP8kSWDQ74PAFFq4rfuFnftgaBAtG8tdNzKp35SL7Gt2roHL6d3AboELQg6Reat",
  "key34": "5CoDZnxcWEWGkyTdEiy5pMJdTa2Yf9FMEazji6XmijFHU82wPjWRAYM65nVNE2HZeM52VcWQLRVVFN129VLPH1Ra",
  "key35": "MXJBii35fPoNwuWRkRy5nt63s5vW6JjGm2nLYpR9Xif7R2yFH2whDu9gZVUmD93J2GNGfUQvHwYktbqZseA2QCc",
  "key36": "3jmUgKfrF3yMBFDARKVQABwxU5mRkLRnS9AFhrv9gDDL4Mq3HYQvs3gWQcXkU7xRKc27n3itLVrNuxcyVQsHHK1Y",
  "key37": "2jARPGbvsLd6VAycLEsWezSSNRj3AYymP3wSxgD27vrgqC1ZiyF4dUnq2kXhUHvo1equmr5X3cXXUmzEyuJV4DDu",
  "key38": "29tZUAB6vufxMhdfRBc9dQYdyXFcW2tYjBuXVna9fy6wmADapQ6njgkDddTnVDiktsMG2mosu24N2kDPngy2fArs",
  "key39": "3cKiD3R6nGaEju81X4ggPgV1QWw5EXTfxHiQ1T4Nx5tfcCkajMDt8rdwocbQSpTfSL5qVreFLEBikip292o43EWM"
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
