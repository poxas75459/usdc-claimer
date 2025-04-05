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
    "22rqLgtTUTFYLY6vS69rYcF3VF7v67ms5qsg1tq4PZJQiuTmeM5DYTqdapi1y3Qt8F68H7WHYSUFwd3sgMx4fvNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mHg1ekh6axXWgxHonGVSQ9wtX98omaze6ErybsksaeUcqCAFeX912SKTQcxWtUa1ucV6Hkhir3h4gRNtpmRQ9Mj",
  "key1": "4LccwhyL52TgKU6nbFpHSfYmhrjpBPsjSXbNZL1y5EztFDD3wguYUdUsuLwPWWxEUcosC7DPZWdg9qjK8aZVQTh8",
  "key2": "AMvoQ6bvgA4GS4WZSbhH7C14Qpih8TZhdB6GvSZS12y1KsvNDvnH7dP24wnfRyZ8QDcnqr5c5Y6PnMRMxC9rtP4",
  "key3": "66Mnv5Qsqf2T8VgofyvzZS4ff1SFCoLvj8S6rSLqtc7BbQjPoqzXtowdULcTnHDnaEj6j9SsggDDcaqFDjTgggpj",
  "key4": "38yh6B7LZyZrY9Ho97zXE45dmb7cieDZvd1ZYaUyjBShr2CAnDRZRnYAMZRQsc77xR6WSCkscsoRLUMFrqBLFKmW",
  "key5": "5VE6qbR5vUXoeTDHkewQKnWQ7sD8uPsgPcELhrDrtx21gcQEok7bp8hHpgibLSrA7bsJoyH4n5PZHdRGzCJf7fSz",
  "key6": "9ozP5GehLixpboQ3n92tGpYbGCvahpNkGT8QX3hX4vcZDmDFnoJcRRP5fh1HpTwuhiU981cnh1apMF9wvWon3x7",
  "key7": "2iJHHGpPKmqaZtPZHNPf5ktraYHXzJE3DmPRvmudSNECA4QUJeaa1ay1ezRm18ykAofcGRaF6MdSk93S3CKBUT9",
  "key8": "2KQCP4NtMbezkK6oRdzMdGHmSJo2EEnyZqmUXgWaBmdFDdKSyk8ND495rZ2Xc4mNTarfPiC7ibLnqkeqBxZ8pXWR",
  "key9": "5Qwo8jLE5nnc2CEx73yWtM9oDYuWEAW8uJKZYvrPnrqujnF9eim71o3HuR2yDCXxf4KziyUAvBmzEqiDhuCB1if4",
  "key10": "3eVvY6GqBY7iNYVzWNwb8Eu4dBjz3KBRfUbhbnotYSbYr3uAJLjyhE4ed5bHhKCVwza5qxZ5znjYat1qujSkg4p6",
  "key11": "2DWqT21ihZ6dKYVcnNveggFnuWJF4BumBmTBS9AoKwGwBV4PbFR16jYfDBci9WvMqj2asCi4cRVrxar4M6vYUgM",
  "key12": "4qAqWJ2UZ9ZT4m5TjEc8SLyf86kzeo4f5zdCCJ3hNTpV4G1N3JKSfSv3duuxKGnbwLTFt54s5K2vQNNevScL4Xgn",
  "key13": "T5ME36kCUxFcXjdsoYSvC5g2GzDh7WwMdvCadUitSyfMFAKz3cWER7uTLFDuZQnD2Y2sspQuyD3WE8CCCtHD5cJ",
  "key14": "4NAqVqknaSwPv8516ZYP7fCiQg6NQ7XeJibvLSvKjAGVJbRUTV5cpKENEHj2bMh5iqKskaeGnwk51iVDkucB16ac",
  "key15": "58cjRFTSigsC3DKxrjSRXDkGSbY1mVLFzg4x4in7iHYCW8cjLYRhssvHsc5UUhxAgCpsYT1dqtnAeoqW1an5YByZ",
  "key16": "5QBfuEDAAxNeQrkX4ayroS5w7riDGhX8L3Guiy1odufd3Y5UxVwJWPLdmtVq4CnVQet44695YjfV8YjvqfY6yBVK",
  "key17": "4V1dmeWNioUHPk9CBesNTg4akFhkWTF8HWU24eNKq4u7h5rf3fJ6TDEt7LHeyGBk8YaesM4Euz1g92HvnKFPdkNr",
  "key18": "4WyhNHkEAtPvxQx6xkNFfZQjh6cPco3Vx6qteJVxgWZgGBz4kon1ZnTmN9CMagkcpfPmxAUEGugEGt9uH1yXNpW4",
  "key19": "SskrruoHKBE6sC9muApYmWWy2emPmjKFwXZyRG9Mt4WXipDxMVyELpj5UuTcqvE44Wrd48CVphKC5mfZyAc2oSn",
  "key20": "28Q7rennRFcqP9k46h1gxpzWMeRQojrBkZgA2Z6GJL1xhfYnfjziWCTif7qLsouoh9roZPnS9ETtkZf5NWSFGc86",
  "key21": "3zmRFQa2wyC6nN2WiyPrRgna3YJurKQHegSwFrRfhsh9s9JU38xnvbBcfLUC211FkmwnSvNTnz8iZUubcY8sbrtv",
  "key22": "3J7kz7swKF67qfmCWFmdZrKHFNzeZtgXr6fHuvWrLVzJsGTZJuZdvBpPaTLsuoMAxmFKnDPuiNPeGN1ZDwQsFSFv",
  "key23": "5JZ8ZFs4Xtn1aZ5jtjmsUdRSssBuUXgibzx3rtek8b26Q9x51DisTnaLMTKVxUv5HacpSCTxpRrQDTNrBbyswh4s",
  "key24": "5HK4Y6dZeHfe2NpF3XAZNPLQwoWWHBmuuhf3sdjCTaM8BrJRmB71f6tptA3oWa8bJmG1osskfZQe2XUsnTnzxMgR",
  "key25": "A4LuLn3HtLXi4T1KKb4fATQ9Szq5La8Up9XetteDwpqZtCCSoXuStWJmGb9c4g3CNavfwnatFMNtcCUYCWKtgnL",
  "key26": "5LsrYrV67b2x58v2sZ3QH4roJufkisPg6GTA7kfwDpkVzcBXFZ8o293yNx2sGpLgPq6CqDygHc9tAEH7U86ow2gi",
  "key27": "64poh4EKxFks1QjeNvKqniFoRPanzGbtakZGzYuBwtpVd8m3UYVkfzpbEexEr46nF1Wm4aebo8YAxhDYgX3AXvo9",
  "key28": "sbRp5V9tXwPuWEdhJShLWXF9FGrmML5ahRsKdL9M43AR17rvusRgomvZeq8YryqFuuA2KMteUqvM4WwUhjfZcnS",
  "key29": "4cYJYhebgwmgWDpkpfTXPq4D3byYs4NcTR5P6pR9gTDMAMhH1H26EwQDh1uNzYNYVdrmpndoHD9jQKZMNk8vZAeP",
  "key30": "sRQ8D934Hg6uWFA7HjhPQ9Te41HD5ns226MzrnbhhKRfJCHRRqSbaWGcBVswbR3rdpKnLaoRcn1Thdmhyn1aHCv",
  "key31": "2Cu3fST6QDFm8nAqbVzvjwDhg5xryGoJMAFHJpkT2uFitrXsMu495eQUD5zDqCZ9hPKiuPG9rZxcxdWxxAJ2Ecax",
  "key32": "RowBn6prSfX6dF1CUhoQJhFYTayFajcXFtcJPp3FzFjC65sqsBiohim5vs1Lt83hXBUxWoHRhwVFQ5a6S1VV3DL",
  "key33": "UC11DDyhzF9BkpWfCnX3UeCJqMa8DxVAa7L5HXF9w1oq8SXnpXrPEvD9g3EUCwmfAQFSSzzkf2rijwrx7vB8DVB",
  "key34": "3hDtdfmwLviMX4X28GafP1KR7vT6SD5vjyWK6c3mwnGbhdaeK4n1cLxngFjNxVnnkmeFqDzjPdz6B4knm47muxaQ",
  "key35": "2S5s6UYG5bszNyHwyXzqnhLSwZcMVu7Ay5aaLuGQrsybkbYHHuENrgMfot1CKsCDTojbESgcRiUp5jUnAjz314fS",
  "key36": "3S5NYnf1MxYCACCEGoLPGEah8DVXXXrwiUpyJaFcNjVpRYTidwJLw8bGVMFpcsYTj9jXcnfD8fXU1puU4fPRSn8G",
  "key37": "2Li6z5fUS3GTRQCuTnN9qnZKtyb3VeV2k9LReAFpBdC9D5LeGmkskworvdfrCPaf2s1Ft6dMGoQ8NGg5BApTTgrx",
  "key38": "LsinfVN8mgTT5fqCR9CdXtAx3j8dD3TBZwjo21qcB3NiLMLvxLB8ygSi291SaJjk9J3ME6W8CCPoN8pMsdL6SMh",
  "key39": "26Fj6zt51N8zYHgWQSSHmbiZZpC85kSyvMD8YaCzXSCYgyT74ReN74YrVCVjCujZmntrPFeQ6cbGTgGS7dsntF59"
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
