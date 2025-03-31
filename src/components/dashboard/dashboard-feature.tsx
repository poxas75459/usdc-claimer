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
    "27RYA9jFaPKFzmNMBE4mW4Cto9GiVy9U8Joa9WYCUZEdQeHuF4XJKgio6wdSKStwasZM1pEHw7Qc1EA7DGMGqJzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46EkbKmkz2Gzaau1a9LA9HBnZh1t2Rj9KdT9aerFEywc9z1u5dizMknBZYCh6CSvEWNRMSX28psHkQqjhVUPctfa",
  "key1": "CmzLenCbcF9Rfn7PW5445LkC8d3xgaksDssY78m3cFvEMeWprupwFRy38nJLvXTPsHG98yY7txRZBobFd3aeCsJ",
  "key2": "89RdDEAqVSrH52BFwMdZhxgCW1oH4Ay3XDXf1SRxsGRuQgsFdtWNwQKK5ciHtCfcxpDz6SSBSdJENqEbvHtcaBp",
  "key3": "4xnaZ7o2x7U3gqfMW7SCt6SK4WKUCr5y3toYCXdXEebxSBxjxGgqsabs7ywEAnAAwJdskTdXxtHjEr3sZf37R8za",
  "key4": "4cqPCQ4MeLyCeLwmyvnd3ipUQrah4sMrpfshqZSmfGm9b1JDrcuMRbMQfeKwrRwG8UobVoDXy2CuzUrqgnG69o17",
  "key5": "2sFq7WGFHeA3WYcNn5AXpDM29TsG57ZqthXBfemcLxDt6kb4gJuvkcP5cNKiT3Fcpv9ZqU4CRAvCWxqZ1pkdJ77x",
  "key6": "r9Tkxby5nJG1fArQa2upjMeL1qGZGPt8vM9m3SN6ppaBskUcxFWiRtqcCbmp3Rt32HhPQoQjyHtTWj3Qz5QUWqk",
  "key7": "472ahp9iRkucvmyhzC8K5PnEmnVpBxA6d5p3GCnnoYqFNmBzXfCdmiieJXsZ48wJcmrxwYUQZgLwV3JGscRCXXEP",
  "key8": "3YDWxnkMPLs6iW8JcHpcrEfjSATtghHv3YUQqFWk2SsbMaFRrwCQqtQtggxC5FwCPdXgDkQfbrwiwrZUzWnyzpAW",
  "key9": "4n4h8JfJU7SmZwfHKbxPv4udT43WscsmCu817evnrTFjB8EmRw58K8TRJ2Tc9o9d6J5yZEoLEhyQfvm91pj6X9UF",
  "key10": "4PdPzNJPNgVWWwLhzThQhMLHqM5PP6DY3CTQ7mQ6cBiEMpLpKNsHFsCVMqA4oBnQL5Fsfbyurqe7HJS3foZaGFEz",
  "key11": "63JNP8D8vMu4b7DAfJhU3FQBRUbovwLqHLn2Pxj4GVNFynDNa6834FnC5Bzc2jK3VA9VwAUJ4TMVBYKtccDupeNk",
  "key12": "3qKwkU598MBr87RCywghsTa2YNvv2hzy3GeMbdCtnqRZ2kcTqmyYDofesxZXoD1gWvrV39a6FzU4GvsBbteFfuB",
  "key13": "2WGEwoAcAUYLMyK21P9G4kTWtetgQ3E7AuWLVjgdYkGwirtkhWkjdt7cygcF6mio8jadLYJycQZ1iy2CaCbYJ667",
  "key14": "br6AXnchJZcbXN7nBdpubKdErjCiTsYzkvi7eK84iKKVx5aZ18zjUuzkyvYWiNyRKpzd4cTNqH9mhddZycVEV1o",
  "key15": "3E2Hfn5nnph1XHUFX9QxoXL4KhAD2BcfEM8hMiQ9NkcJCkBUiGuBgnuG6R71kw6cgMxm721DRSUzsTpbKC61Gagv",
  "key16": "5zLWDE1QcYdRGj2ZsK8CFzraHtDxwMJRTgfwL5u1DTB62x3HY3UTGTZRLKWHmQ7kXcqcGQL6R6HiL1GXmpguouLA",
  "key17": "41KqfUUuWUoYpibeB7KwMJpH9DUYwhmE8UHs7p3VS1mwgbBEs1Ue9TQwfNgKG3g4xNyFDwVdR6KCms1ULYQHbuJc",
  "key18": "5V8yMRrGaRrvoKynQY5ZFykKYSGUzcBwW6as7W7gHL5E8LCLpoPZNWrakWT7QdarQtAHKU5BryKiLPR4dLMGxX6m",
  "key19": "3EkgVS2Kq2vHyaop2hxm5r3npGS4jcdjWANdVqbdaaCwJzM9a2uD9t3FTgK3CtwBmnKyfih9zEJFpbhvMFGLvjA7",
  "key20": "2jVms1HmFuGGfcTtj4NAHrSTF7XVotTFsXbAF1hzwH3MS9SiJF6KBtcwAyFRmrdu7XadkczKYMiXw9skFBAAdHNJ",
  "key21": "3LPyzvZaTTaybYQ1vW7CygMmzHAEJwd3r3do7xYA17VmS6gGeNH8sdntrpRyX4FW1hSNtSJJ66y11kbhpj6s79kt",
  "key22": "645SKT36CFcNeoqLfR68Hhte3kqNZ16nxuEYsLtgp7T7xhr2o8R1ya26tVcC1rbmNLYBrqF7uzmyNbU9fVJzBgG8",
  "key23": "2uZ1beRNGSaNntdJmteuZhdUKZTbHGAbN1aGpuTMQ6M52FACx3SBMB4f2d63QcUXcEdj6R76b5vLPpADvCMY779G",
  "key24": "49wcN21hDEGuraHC6z5dfQ6trxnTEwejwRCGEhTczJYTrPJqfARu2JDm8memvhwPrqZEkyV4QpmbjxeuzeGEQpRy",
  "key25": "4MffGnes62v94rPhkC8B9a9pzfdLsLxMCdZYwiLSpKVNRfecnF58cCPLu7wTfB8KrcsrT9AuAJSKiPiL1hiXpx7g",
  "key26": "9YKovukvCqnRPdnnDjJfy3yQAJhSA7CsTjdaSvE1qgMfvCM5L34ysbv7PkvnaeU57ggNNz4Puwox77p1hTJzbZQ",
  "key27": "2GVjxuc9g6pDYhZ7qeszFe5Fp5vBzr8xHZtSjSAEsfjBafEvWwpVwGcQifvimjpWk5YKgxVKBcXaFZ1L6tJzBZZN",
  "key28": "28X9P4ttNMC481gitWR57TcykR2ieHiQ3T7NUpNN9wE9mxcQc52NVc6YQy7yPvAQuxZtWpFYB2rbifXJZsZiT2F6",
  "key29": "3De5pPJ4p7ZqTDdbzNWwA4VxADpecnhUvyCTkkCZcubyuEs3s3AXrirYNh8y16REdS1KZ1xcFw6jqv8dzedJco24",
  "key30": "65xY5QySp8poxApXa626kG6CwNskWcGRF2BTSutWrN1Jmk61FcCjNhRHw1ixqjHpFrsCdxwchXXYxYPHGVaGK4Zt",
  "key31": "3acEtKcSHbZBWqLLuZXYZw9V6vPx4AQWi7j9gXoCAGeAf2Nex48QNCwt3ALCmubh2XLjYDrEbct6YHJ4aqjMU8Cw",
  "key32": "2wPeDHHtXXV1HMAkU3V6jGUxKmcW5PuTT9d7FLDJQ5SihKGMCSGc9ZswvGtmoP34EpcPFvqnZjaKzjwAPS9qXh86",
  "key33": "382SJnaDiaYHTmS9u9Dyc7gBxAj9rwVMuZVovtx28aYaHdRbgu3M1tuFQMXsv3BA3pgtGZd7yn66UiZx2vYk2oLf",
  "key34": "HBJ4VmR5MFiPL5D8wbdr9W4WNUE5c6CHtzrZec5zrfue1ntCRoMwwivHrzrFbyZ4yrAMiDhwqtPcSxpJUafusxN",
  "key35": "4X6MQf964TK9LJnDtowJtcjtqU3NzornBszQZGsHx5Z1cK7HCAhGtgz5hsWqMqWK42WGhqH6CUrdVQkxnZDEjAkJ",
  "key36": "L9BeDDtYD52q8EuPzbCGhpSV3P4pHNpqav8bxSKb7q3suRDz4rTQv7KT8mpKdQTooAKNtuz4BGgiXPNYJgGo2xq",
  "key37": "4hc7CviMV59g6WAmmpXYqv31u3MNdSdcVEcoYfymYLNQKcqrtccJ7pQuSxfRMmKGY8XYdY8ZyNFD2o9ss2PhYZxk"
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
