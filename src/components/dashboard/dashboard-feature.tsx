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
    "3oaifrJWK3T99faB6UkLUs3WAcTz6EGZnhKRo4kTr6pHi3Jm6pQayE1E3aJPmUPy6wpXBr7XjMKCQYLbHsbkneyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ng3oqzg6VRsYWQHNTfM9hryTZJ69NjLayBEnH41KrhMteQqjP3YYMQubCFFo1mTZJNrRHyXzHVgW2um5rFgLo3S",
  "key1": "2Zki7WE79hQJ4xJztUjoiKQ9CE98LqBYKD4wxbXuR34iZ89mjHpsgxMj48UwL5kkoBKJBHrGvNG4RBaaJ8LE3DHH",
  "key2": "5GiKdRKrfoKTg5eBGfxi8ecnbtxpxj6FPLU5xzkes36FedWGPyoYNUK6pbYNbYBeXiFkp1YhLqystiRmj82zx4kG",
  "key3": "47guYjTLvLjKv2V7bJXqHXCBHf3YC18NuSxAfymB3b53SQpCNF8x1CQo7py7HAcDXLUj7w4snTikE1ZHvh7bT2fa",
  "key4": "B8XqT9SYFGRxWPpiJrzhRf2UHtKwySA6fFBLSCJmCApxsME2T9BBnMGnRN1tHt8nasXaHb3La7tBKk2Q3KHBPgN",
  "key5": "2vCiAUk1GTGfKRh9ewVmGK6anonLuf6cYDpYWqruKFQfCzTA7kqFQgHaDH1h5DaXKFFUiyQMtsSuc7ZmEM6dh5jr",
  "key6": "42Ab1WXGPwGVg9jm51PmWC9W5s7wq8F7PX76erLc7SxCJDkcePdaXi7bgAbAjNTMtADRohi8vdcuhCCgxq9FdJEq",
  "key7": "5ejqSgpx5WKnFjZr7oeXVwNqmbZdSdCZGqtNMuaU1t9GkUgv9JdyRaXfetaekqA6i1DLJ9LLpYWhnpxd1jTZFdSy",
  "key8": "qzuMHMgtvafey46AgvNNUqGBd6Xwg4hsF8jNnbetFJnH6iWNPyuixfLLXhVCDs9jCuCCTdCtqe4Ld3GwDPKJa3H",
  "key9": "2AJk5t6TELDuCPmGWDb643DuNrPJkkaNrmNsCN63hJFGBxSFZwYtLYAdqHTmNgfLKji9BJn1aHgvX98wwJPPQ1ao",
  "key10": "4LrY4boov57snBuWHVbrBe9fg6cYwbVJksbMvsneu8EGKfm7FypzniANESaEVTLSCzPwsw5gDTcKnsXgCmiSKhY5",
  "key11": "JudRWBqMhLXEaZgdGgLWDaC216gQrA9fPXBV3VjD1bfuUE69C9N1BDV9bC7sctvxUoUHHggo79DbYtVi3SwLNMt",
  "key12": "4q6yJyPo87NMXuWwzaJgbaQ3vUCroqMqc8ixDfe6nhCGkS6TADV768mbpmf5J2kVoMa1iy6KJCffXMok7BpEEa6J",
  "key13": "61FM1k3B255NpZaRfr256xxNKn5savdM7pe4dv37rEDQwqUiEjs8cgVPmbv3Mqy1BQgh2tUzX23E7bMszLKXkh9J",
  "key14": "62s4njDKjH3moL4xc8DUEXBji3239ZaWemw7BiesdskQ1tiy1NqsdoPti2dCvLpuzAK7EZgZyAh8J8ZSQBjHZnV",
  "key15": "3nz9wwDs6VM2Jc2rmGvGRhaiNkZo63yBhWSFh6u5fevEaqGNqgRqBHSWMhd8CtfdJScBccTtPhjdSSdFuma2VSYA",
  "key16": "4ZTqa5W4Uh8utfjFQi6AFGdU4U4GBzptiz1rssSMb3ALBBf3FiJKWGZBajwyjVi4Tum5XrBLxYYXrJHLrK3VW6JP",
  "key17": "oTJXR3bzP2iwY8FthUAEqW2iAz1csRoXcR24ttb9DxzqxdbzNa8UeAWruWbYbEFK5ZGPRZCm8kqUQopD9GM1cNT",
  "key18": "JFQPB1vS3QeBNnbN7SmncTQQ29oFxMR1wdhHUNGdZzLQwbZGN9vDApV5bJv1RRXtKZh92fgZfp9N4PgeKS572hu",
  "key19": "3ravUCPiPytLbS9b4PMDh2GW5HKATcZrFp8ym5mobkFkhdFtnTtAPnesWvvGs9eVqRdef6xB8N1vW6KKSZsj3Lco",
  "key20": "5GGN6Jrn97r2AnT6T4YBN5nAkcqXZkDDKyvxgSCVkGLM8dXZUWLYWGSWuX8k5mUqN3FtSXrWW5qxdrydCeUK5WUq",
  "key21": "5muBq8ibguagrUrh5eexX7Z6PctfKjaE39FDnPqMCE7eZtpDAoyr5KEuUoAxfdbVw2aio9K8WjsoJg9BALQQ18UK",
  "key22": "3U1A11RKDCPXJaHtX9atdpQBYTBKPWxDZbXi4pXdUnwypZFh8hLhmChQ9rUFcaBAPDa7xGhqiuVEQZ7PmFDQT5Jg",
  "key23": "5anebQ2NixwvgPUyFVSdhaaAtk3FoPidSmqq8yd7kN7W3kCx7VfHmUM6MNsgT6C1zoZwBrm8PkaaUFCi17RByBWd",
  "key24": "623b46omzys6MJsENRiJm3chRn4FRehdbeRJGTGusAkumAf14U5GprvuXSKuEqrjdgJPhGdApzajyFpM7yaAmCby",
  "key25": "65WXTc11X3Bs4hbpizEFjbXDR2yMnKqfUdw5VTsWogjnBzXKQtEdDiPPv6DgQo1a9wC7AiYLDWnqTPYREBk6x1TM",
  "key26": "37Ua3y9rrafmtQseJs7cBYdB5o6RKFJ9gaaPUN8dGY4F3jj7MfTc1Z9sFLhwR3Myzzk4adQngWGSLq3o5TQEwxej",
  "key27": "4RZcxrKUStNSkJkQ2Luxi8m4MDaRwPECSf3R8ZAXKq7z5vA8YZraqx2qhYsT2SAvzFaymqkJqegbfZGjCezbamUu",
  "key28": "4LFv18XKiDnimeaWtRgSww8QMopXurw98QLdJT96rwFQKUya2cCY8db5g1ixRsrVJoiHqPouto3DarTUtg96EdAw",
  "key29": "4fuX3tHtqEc2LjBWRr1aevvbBESAFbEacbnFc3hoGrRAPHjSKbeYxEcauZGiLexeQBQzjGWUAtnSKotknyaYSA7Z",
  "key30": "4HNiynB7kmqP833CXMPvH8ZgUyQubEUh6DJ3GyjZfUjKhUJr19CoQLmfvT7jYCqgQqfU7c9pKCZLxS8dTPCjDGgh",
  "key31": "4SoxGid12JZKZ3aFFiKkhP85RBmhFFfQsnv5gUQhUpTmZ2CAF4HiLiiSf8nUhJ8iFLTPHahL6ce6emJDtQZuitZo",
  "key32": "4m1HNXScQUHSVNxhvgn7EDaVktAYKwzVWnXmw4H7NsmQAJB5UPaDkrWMVBGuMtVP8gK6RrA36XXp3XT2Z3d3wbQD",
  "key33": "4Xb4LRNhuV7YZmgofUzrZSUC4AQtMiw5Rafn5oCWCv8eKggLKSUuJRRutbicWy3paudV1TwJMrAAa6PafYs5FWnm",
  "key34": "4eNaBYUihn3mZwjXJqhorkFa4ZWRNKwGaK451AFmq3SFHrdrx924sAJeJg8L2EnVNN3GTkeqfVjLtYQxGuozMcTU",
  "key35": "be5ttLSHuwWRYMTbVjwhMX8qdMofzezEndvLVSFQb8BFAuLuGTPsqdYn6jAUhToprN2SJz5FhcbZ4thrtVXpMaV",
  "key36": "5nAHSQ4ZzuAhSpoEnW7fynd8A4vL7RkZUwM7mt9gh5vahQMMEp22osisn61h4JKSam1tPh1RAdFtJsMqAJMC3h8J",
  "key37": "2hQrE78ieKuGswqQ7QHtDWuEfRWFSCFV476gVE1VnNaHAaatb1suQGZ3R7f4jTM8ekt5SDHUXwSsbWMSFoyYWdXU",
  "key38": "26EeR2D6nq43cWWDEb8JuhJ3kRKMUzYtyL2riQSCv7ieMsEP4wiLAtLPy3sXyBPo4jnsURq8pTw5qCNeBX7a6QyB",
  "key39": "5Xbj1fRzCLbeweyK1WPx2uPYAJbaWPDvE1To2RWfbxpnt2QYhcWvcA488QGu2zkRwuZZGRZzpsM8ubSUo8jnDNNh"
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
