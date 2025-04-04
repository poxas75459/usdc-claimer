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
    "5ia7K3pDtKn1KiaRQeMgkZBPM7frL5P2s7EWsiwHs34v5hkZBk7VU4AjxB3ge5oYjRDaLRCVjmkbFGAAnK3vG8AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C5WcABwC3az6g8TE6T4UZR8xocaHv7mtDfqj8m4iWpLTti8XwGFdZt2tw2iS9sACYGXSuQkwVBKvKpUynpXzts",
  "key1": "5KStkh1pVTaBRfSusvE5KAcAuhvLriY2Ei3oPZk7qprput6uf3ERERGyQAs4vnv8BcNk1ZTEDC4cuJkZF5vM51ic",
  "key2": "3jtDzJyZBzD9qKmU5mgjDDXuushcbSZvBXKCknSVLCjbhvyXBd3MqpqHhZBj1JsnjyC6Gufwi7DXG3AvYAY1ZfYu",
  "key3": "4EdgqkG21h1h2YxdMfJpnAkAeKRHfTcchEcj9dhuuKBp5uQYRSeN8dVgAtWJRFhYGHTCahaaunqC39uLGKdA5ZhW",
  "key4": "5syuAjg2j3bFi4rqnDodmE2q5hqkHx7FYjAGmP861nx8q32uJH78HLP4jtp7n3J9xtqDuKmpSJJi9wuQFUFmP5rt",
  "key5": "5JgYReF2B2KvRKphiAHrn6x87zqbGW2cfmSX8NWj7CCJKdWGkv17m8KzZyZusR4CbNj3m5KH9JvytoGMSr7PJuN3",
  "key6": "4X6HxUg9HGbRiPx3B4ijUB7W1M2uvPzWf9gM3a8pGTq4nggdT6w2e6oKt2NdHQtcK9yrHPFYarGk4CKcYxWq8q3p",
  "key7": "5cqxfbHwBabwshsSQqMhrhutnz5oim9xLp4b9HAQqgnzdBV2A6fumykqnC4cz4gT6Lw2Vi84hYYQiJz7PxSPKNQd",
  "key8": "66WrMB3LYU9K7syMQLcqMLCuZXpi7WUgqo7ZFfUDNLa5q8A2qHLaRGwpS66pgLG8aoCta7RLDDxztQVVW9krTGhM",
  "key9": "2ey7mQ2CxrUVGCiaPNSfsDUS7K5PyDuyw7BMvNgneenYr1A9DDdwZdRnoZE62fgBU3Hii3nkKVbBThUC46QtQQiw",
  "key10": "2nqdLDvAqB8ZRdcwAhxLyMBSm5iBdoo8AiJBBZTQvNt964L1Kf49ehvnfMqhE6yi7MTBTLw7EFRuJQoruB272LAn",
  "key11": "32UFCC7vbL1KhcWwcbxisqn4xoFa3B6iKUwqKCizpiXMCa7mwguRpkFEdnmjysoRsxaEXTYmkSWo2PBfQjkWDv6t",
  "key12": "5GgUsMj8gcByCeMmYwaqKekQ67y33hJPCQYmtMA2x2pZQ2xEp7cX8nvPETFgoBERszkLFDrNenv81YWdmvaWcNu",
  "key13": "5XP9RmxvX3uNP74aXvjkzCf4cLxeFF5wLqzoA2eXmiwH7G1ed5VhWxPcFBunK3ndCtq7zrnZrkNhaDsBAE8Qx5rz",
  "key14": "61ok3hQfUz3iG3RXoDrrkzir3aNy2pbEZa9jUbhNTbBewCr3zUsHnjVH77hQftjdUAgeAQzKSks6KCFMjtpPoPy3",
  "key15": "2SYLTnKPYUNbsvfp6YLBhdUg1q4o9cJxqoTpj6m2HHsKfLP3nwJGEKqfTMyc73MYq33K5a4joTJJBADe6io92RUw",
  "key16": "c8J3xT1RaeZXYrc9KXyiRoaK2Xc1YrjK1YcApDaXiAMiTFzeeJhMMpvcuV876GfNgKzuCtXXUdiudrKyngnYJyk",
  "key17": "5ztGpmPRUesKdk18ySKWP6iwd6j7mCptzgUGRY2GGoLgNm44WHGv2bVmbjv4nyWxA2VnAVMvULMWH7Aa7UtsK6gB",
  "key18": "2QojNR72T545qrtmMQgChFwz5rk6BFSfZicwwis5KeEVBe6KQVh7vSnQ9QmrdxL1MVLpRGuogie4Czga396cj4tN",
  "key19": "36z2Gp9Tucd8iAZTx5y6Wr5k6fidS31oJXKkXpc5h59kZrV8qLG85SGPmfBtScEkGaFTTi8E5KtVbyjvjKx6pP8y",
  "key20": "5qEEZjayXyC4qTi7EREJrUppzWxDLQ6WHC4Nzvyx34Lu5vFVYvbyjmutgabqww9yCsG1Pw7BH15GVaqcT1csbKEd",
  "key21": "5ePCxQ7GbDynVea68GrsrqrzA4qmSeuNJivtbbkGmSP2xu4mj3SStBCuaKVrkDTYnYE1MkvXznX1cZ8YP8NsPW6r",
  "key22": "3eeyL2E4vCtq94r326TpFKQ7AVQkN5pNiw6n9hvHwy5PGTLxjvA7GRonNC4Ekk36xVkx2H7KjJTPVMMuKUx6ftGs",
  "key23": "2HaiKgMqojKGMxNUrFiVZDoX7XqJGFUtQcYGrjRLFbZVGJPsuJaxSPUyE64Z6F1neTj2XmmPi6V3f7HtB1Qd8NmF",
  "key24": "5d1JaoPcjYB4Ubd3WSbw2BNQ4r89y5hv6VxiQZseaS9jqpkhdU3HuirRBpUnhG9c9H9Y8aFTdHf1tfJRYSqvwV4X",
  "key25": "5p9x9h1TRBitZFU9mcG2KDQHcXqvPNGHXTPYmAqeW5Lc3sg1rW73vuHnsbVzEEwYn3sFigCCZe7T9uVjnoTisiMx",
  "key26": "4yqiexsTmUR9C6SjE1wARDaCdEaJqKQxUFN9ef8tq4Bx7g2BP8M9M3ZTra9qkZV2DuyfHzuZX7RDmnqNLgPq3BSC",
  "key27": "67bjJavT1HJkRtf9nfa9baYueyN3LShvg7LTxYYAwvG7TEN5K4VXtH1b57Y45YpfEpB4CoEAWPgMCEnDwkHDwPHU",
  "key28": "5VdDowGYoPSDQUrdcEagAYrq3Xok6B1t181AfLLRhFGAQBBbwcJAw6qkgdNZbNtCBvS6LWwZNmGmkvZvsRSFvc3P",
  "key29": "3dr3uyzNGXqz2zx6Gne5qAFmjMiKN3KaX2uYk8GPB6KQgT1L8u1nQoAbZmxw4a41KnhpX9MuJg31xej9ssAE9WNb",
  "key30": "5H2ZBd42DGvUdp5FEHhHWqiYBp4NRjCQJT25vCfMfy7gnami8yAJNGZkK3NuTEKKx5P3N1roe2ezfscvBSKhYFDT",
  "key31": "2oXiG3rQjeMSoFZ3hX3giTLtLVW7qn8Tk8AdHbYSEmvHAEoZRWbZG1QESWRi6eAuHBv98X4XptU1LPinA3C3a9a5",
  "key32": "2pnedj4XG7vtPbbWkqCFvmUfpCZBC3bMic1hSoNpkYeftyvTGgdmzTz7Ak9xwzQbshdVY4wSU8uUaa1gqK3Xwctr",
  "key33": "T4pHCCHsVZLuNMRj9WaUYQw6wNRuT2CCtk8GsiLtYtMeiKMM2gCXWb2QPUXvZ5QeDc6kjrXjvu4eXfQEXy8zwHt",
  "key34": "2PfsczZZehcYCLcN9A63ByteRPUXd4AHPjGrcxmqiUPqrZcsePjAoCspntp4v3KF5Jbniqh3hYdUxjjmMGvtsiEJ",
  "key35": "3jKUvyumyn9RydVBawehF4VWRjPdgTiR5gQm8eRbCZVjQaif3Gonv16FGzoPjuQ6veAmvwdduELaQ6sUdZoTNo77",
  "key36": "3LdxMi4PCuYZ56wSCGpUz5yrhG4L4jYUBMqpVqZExxYLkp2McF3Q5QaaT7mwepwfMHiHTJj9Y5Rt1n9rboairZ5",
  "key37": "54dZu7t9HXzN52M3HMt13Hzkm8ZQRyB3um2ESKViQNhhnBdCJAspUEowdmq9y1FzmyofBoyAbAM6dXpec71iwgSE",
  "key38": "2RAeSVHbMkMbfjVYvzsjhdH5vGZiLNswimtHDiGJsnR1oVUirNjcNAdptEY8SNKQNQ63XwAf1mj6bDEyVFkrpywW",
  "key39": "2nfqdu8zYNeqBQ6JjTm6g9K7X8N8ZoCLRkfadjV3GmJrtUrKksE85yYDrCQWVDQtKeWQbAxXRtrtixPdQbvUkwet"
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
