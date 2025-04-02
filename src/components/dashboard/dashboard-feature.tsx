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
    "2i7JPAa18zfyfMPD583MNwgksfNv8RzqoAPYhNcRCDHTCzjz24k4RwXw9QfVqpXWJURLy59goUf91FWdgpMiS1MD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dtB6niVAhKjjMdLgewQhsDRAhtoop5AKmMksuPFgW5nbDSaQPTEgjSS1jK3JJhPA8KrQVtod4D47wp3jiSw2X1E",
  "key1": "5BCGwyJ2GZpcVofaFbUHheGvq8W594Ru3U1uQ6FLxv4is7bpnubbVtFohMm3qY35gWjLzKZkQtNrxSvKzusyQ7y8",
  "key2": "2RAkNn35iBkp4fTcLmbN5DW1vWANnyhGJE2sxogZWdxhRkKi58TcxZ87ESBr6uGzQ7ji6bequpq8YhrKA5rgKChu",
  "key3": "4RAQVT6mKoEKb9YVL1aL6yQAmdWueZyAnntoWVu3KaTeXJBT2RD4UY8NcsKwSEf61NxmPgXwhtop1Q8njJ1Kz4Ch",
  "key4": "jKv1i1vEUSXLbH1gEv3hnKYEi4VZncrhGu1en3VaGtTUZTyxhxArH2oJsd6SKj8dfjefrv7CjZLJSjgaGtpTU5Y",
  "key5": "3gzarChtx2qnkk8yvsPDS9S8sxyUoxd2oUVgQ1NpvvcZf7GDXNHLGRf3MdTDAXuCurZ1bmffLacYESHb7SAVGPjF",
  "key6": "2qc8hWQAYbNQJAbmcVCkzvwUas53czdzF8R127vViwubjrMn1TLkw5nEPyLhJoNbm2qeJLNqQ6e7WzpsAi3TzDBi",
  "key7": "3UGymnBE5n8gQ97FPeg114LU2gkKL4qqdxx2pdxEaT7oquzmghsKxPYHaev7rRz6h1D7YcwYy25uK1wvm1SftBd1",
  "key8": "5tcWnXWU6tcB68wn4p4hmo1hQQRCm2pCCS7YCLkrjnH9Nnc2HrcgTuYmb1gFCDSJQdUtWvnEW7LZY6jUcGACgagG",
  "key9": "28g2nWGff99xkE8EfL4qD5wesr5huVmx5xY6pFweuRGYHPtZA1mHx5kZQcwpp8fu3A25L2qDkCPKvBoos4RbT4sc",
  "key10": "5rREiJsCp5TbP1PXcGkvQET7B8HpCReAbA985htnZkN3m147fvPoaVzpARq1V4Y3vEaN29AzVmK6Ti5Pj6bTrUE3",
  "key11": "5rkY6PtAcpMZnKAxjsfmr8LPGtG1psH8MUXi6nJM83byMEmY47M1MXKEwx3hytwFKsYX53XoyVqAN7ix8XDZF6Ct",
  "key12": "4ZozYGBrezTeVZy1RevnZpjaDDdn88cFJgtZPJQsMiQnpbuFFE8knYRtLdnZy7NaknTj5ZTnTh1NY2zr3ykD8kg6",
  "key13": "4uq6rg5YESDHfALW7WkTqe8ExC6MF7FQtm2ihe4TfToGy1jW839hfFBLTQgqQeYreTkbs79JJ2Cd6pyEqe3ka6Em",
  "key14": "2TqCiZerKhyBadSRhymkj3ttCp6jmEHehzT1qGPfo8FMH5SFAiPLMTUY9MEM49rftkWwAF2XndS5Py7rntYFqqcm",
  "key15": "bXRLzX5ZawxzkgUCV8YqUANd4nzNPJdq3HFvfgFg6UcXhW8CbyGdH7h4AmRf9zzuZiXNoorEKHPcqBQEwQ5SD5z",
  "key16": "5ewW4s43xg3Vyj5FdyZyybrQvaWLxSt1CLig5GrKxtDv8fssPwLGomeoE3UPFWCcjx5vhd3Lo2y9uxwi2VcHxaQ3",
  "key17": "5MxdBAhad56gdJnWRiKRBY7TE7XXvBxJgN1YzB4YboffGQpdFhWi4LrH2eX8kfiPTZnhuymC9CDPytTu9uWCezB4",
  "key18": "2bfFwzgvLrY6F9cSFfC4ekwFwxyRiwNowKmkZbCP5rrsanM3NsdSJmQDABKRGvTkFPx8ahEXpWSLZmXYs9mxXMP9",
  "key19": "5TzrLUdeNDQFUmRDWaLxgFfsiZcYz6CmfG9UzWwhNFvrnRDZWXpHr8qcaNyGAucsGvJcmSq7EJ8d9dhjw2g5Cg3V",
  "key20": "5rseLibbm16iNmM8ed7pX9vj1TDv8963pqkH81T33L4qD5jusv3onjSvWzWqECq4fYQ9cn3nxnASnFWrnqgVnwaj",
  "key21": "ZYBiBpsszJHs89F2KvNXj4B6Ph8DRXskbhybAm8wAFfysvYjcVHDf8YqvR5N3z5iAWUHmfsJxrQeyssEY6tFDow",
  "key22": "5T2oB2cKF9af2xByuvZNiqQVthWgYafmYZks1RA945UTSponfPhkS2EckA4iZaZcjcFKnDnjCcDJaumxDG2EtHo6",
  "key23": "FkRFZ6kwgTu3XjwPCCU8ZirjKf9cGcrA4caUToy5We3bu4npPWkWkBHTGcPV4wu8ZiaAEVh7z2VzUEntiKd9zy4",
  "key24": "2CFd71V8RcsfRVxKsgg8qbnCUHbmfeuq336XqJMZAn6HTUWz5jHhjDXYyE1ty72586XwoFGXi9rYJbrJBWMtY7HX",
  "key25": "2iyrB2cauXjWB7mwC6U6A9D7hroP1Yfy9zvGY9VK9V6bv1Qd8Mvssp5avBCwF9E1SHmsjhS8gpJfymcpM8xycwPo",
  "key26": "uWDbYmZvabvoHMwz4632ht1dWbkFqR9EX3v8kMittdeacPSwV3MEwGrhhmYWvfyG4GgHvCJruMDDeXLLzetbFCG",
  "key27": "4NwqgqMSoSG5WTTYjh1Md4y5CSSYp7gEETZf7kG3C3VZknewmB7qk4Esz5GDADAZUmSyQZ3cE4Rjak9AJutHBcLa",
  "key28": "Pm8Kt27Vgu1JKgph8wyNd5MfqC7bLMBjmn9MiiPKR521oe8LBoULHPQbRdS7wveiacDWez8EfeyK2W9X14uspds",
  "key29": "49mynin3AAZabSvWHvdbbDDUVmJTgCTDYdw3oKosPfhmge8Xnmoh6fMDtyXkvMh85vbGPY7Beca6Jn8Qit3ribSF",
  "key30": "2sKXzEDV8Kt1Qv4NPxScnuCDVN4zytWUSJiaBgGuWQQ7HyRksHzFptiBQNUEiySSW1inu2shkM9Hz1tD2gNYu4tM",
  "key31": "MbGpYquCW4V1mBsg8yk1BbXzGWVfA6Ff8r9YbWYVj7kDSi5KSvvvD3asReK39Axa3hHb1PihcCHftTkuxF3FpN5",
  "key32": "5YpbXzig7ukCYs8n7sXzKSY8oBJk5kAvoHWBBWF11ra3g1qLQRxG2nuHRCTSMjCYw7D1QzLy95jmZtUzVLYKLCk6",
  "key33": "2yygwp6GH8Wp9Qmqfiq75jb4ykFBGnxZiDBfYriPY4cQxiSXMv2a57QyrbPiyzBzFEBewrKypJbU1STdLTAxFi4z",
  "key34": "2EN7W4SFNPdZzJxNaTRvy4Cp3o1s2U8vcuutrjfNHUdLssJM5ejGfQEfEZ1showop7hnTc4JRHhfqUtGaiyzfz2f",
  "key35": "3S5Mso9fboD7yNCjsg7QNsTEm2mU3uV7XKFv7A3sBZMridyJVRGCFuUHB9QGb9FddujX6YygM9perjQwxHunBtRa",
  "key36": "M3k2db1QkMTuMMqRSHj5MiJMr6opiZHaBYZvX9RATEQEwYjrZj2VP9nPoxXaxQF3Sdvg8SycS6PZ1S9r5gKok3h",
  "key37": "4n6hmvBX6fkDnUBgqfkUwM4sTV6bjMStzw2uFuaVLCim86uYnnK1ANFddBkzrT4Gt59aDJrVETc4Vq4hyTDbtyjf",
  "key38": "RJcaEs1SkU6ADnUUKvaz7hAE9M6Nz2q45L6n57JNoZz6hhiUB88qNt43r4bfmJiQfCrFbZL8sfkNGB8fiyGdRsf",
  "key39": "uRxGegZZ5MWy7ore9bq5de2AALZej5HoNXy3XGptDLjLtFrZf9rPVN2CpoThHSDAHutrhZ6ivYHQ9pB8rXNgmkN",
  "key40": "9hQRD4BdUCr775bLb5c2fAWxShKvjPznbJ3ouZ2dmoDdzXiKbJ5wx6gwPCVN59i5G7u8GDjC9E5rLwwYTrioMHb",
  "key41": "2QYiK3cq8yR7PFSPN9qimpAohDF8NhUgzVUtSoscEGfGKYpUZyC1Apo8rH36Dirn4xEsyBYva4S8scHaHdtGSRFq",
  "key42": "2BceufEesgyE8Q8D4rqUMdVRFCkkvhATXrjfVv2WGvmX7qQxXRgm66zFEAe2gH4vMCuwuCtyZZZ9iNi2iTNAD6uD"
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
