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
    "3dPRqohwisK7xxntkdayn4t6w29TPDPcATCgBZxHLWWNK3yFCJtLZYbUSidSzYvLhQF9FgzCKDAvm6iZ33qeCuNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WNrnYh7Tgk2uTqbxtFPDomyXTcoPdpi6s9dvaZEZhK1DabNyFgSaJD9G3S7wxDGq762sba1Vj2rXZ1yEvzhScFU",
  "key1": "4dVpXHKWxHSjCGrPTfdFWE3XvzB5i4tfGgghcoqfmJv9wTBsjVwq1XVQStiJFPiwKiPWZixD8hSsuopvvPoNPjmp",
  "key2": "5FSQLFeFrV1uQkXdYH9NVLjGnt2nDDwx7TBSnP2ZBaqUMhkiobQ2bMQVnCu5EnMAcf24LdJjBeuVYpgPUXCohuYQ",
  "key3": "3KogZKyZ5qynhxmJXZqtNkVVu4qeX7vab9koCuvnXrXNXpR2noZXLmeoNXmFsWzPQrrGiSHRnhq1toe6VVeFY5Ns",
  "key4": "3DAsZSeN7sRRq98x8KzhecgSNu8VkRAb4JZFQ5JtazKPg2FnKZ4dCA1UvXu1kVXaxPuRgabjsgYnK1EKGnBkMi3Y",
  "key5": "4oSSdtzhGcZdH5xiqaiQ7YKTaVhsN9MVkQjcXkRf8bGsz2nk1PK2KfMiyUejJhwK7nfMLu8FA2sqGqsoP5KXrUwU",
  "key6": "3A3sU19ArJGBUtogVhTE4iVmtJqp8jV4BSqiAiuRxnp4T7u4rtKw3HfDq7WwYtn7YVmid1jtP3XzKb2BEvB9rLGU",
  "key7": "3wrjoZ5eMYRDK3Eky877zs3rPEy1WhoD1H92KwW6Gq5jzWoRSqPKrtPEU4fQbENKgcN7qmjj6QVcWRHXvzLvYiUd",
  "key8": "rt377Ed2m6CU652HoLCs7qDY4gCBMamw9ENv2etSBr6LZEGRd8egdiqEfSV2rc8PSmcDKMLDbZYkCXhPrVpmyzW",
  "key9": "4HZvr6yXPyvmHXBACCFN7AAVZLAw9GWgTJLgmRycCPyCuvxV363xs5RQhUAknS1D1U39tu2SHUD5CiDdVcX5gEtE",
  "key10": "4pvNKQDiPVjShV3f8qUV1grZxZFqneWmp6nBEHz2JGRpjyMifgH5p8QawydpBtNYSmafdTnqpL9NJH6W4oZYy4N",
  "key11": "3aGxvmTukU1dEcUHG3ZcY1SmqX3NVEjKAWE4hDN1QyxwrdFY2ASMoQcDhK4zNRaU69nCR94JGEtTY3xkWHi2QgZf",
  "key12": "2KWPJgCwAGzn6VAgvJTrjRjDbwUomJfR44HK4ie9Ubu8Md9yN89KEgjYL72hd4xzganBuYL7NKYdmnUz4uMUvVCX",
  "key13": "2454tSCK2LVH9a82hnYY62faPDy1eYNddMbkDFsZMbm4T2dZ6iTPxZNDDDmZMdUuyDB7VcuTE6KEZrPUZYQx2onY",
  "key14": "5qpv3YVepFmSerHdszL8Mt4QKs2VvDmM8K2ExdgDMajhLVoEzXdp37UUddwcEej4ouw3StHNgr8MUWet4qVWrKdx",
  "key15": "5PE3o8tsYz5mik9FsGTeEAM4agUZAPaSUjnhHxR4h3AsVhkLhViQY11dqemB7CRqv5b1X6H221qrdBELg8cBq1KR",
  "key16": "216qvFPFvfpCAvp2YWDfoKygCk54qaDhK1pwysrH9LjvFuFGUnY9etPU26StF3SWzZq6GmtvLgwPm62AXSt6run2",
  "key17": "4ffPQhAiTEPV7LHAZQxKAAN4ZcnDGSe6uWE4PhsPWhgryUEuNarqahGCBeeYHjc8tiyS81nZ2GNTxNhfXjXNttP4",
  "key18": "24TarZ9bDCVeGJHMECMDemugFscXRmbZJfTW7hSDwxp8vjSRUiwKHcwd2oR5uJpueinyjnoXwhaevBubHAE6aaFY",
  "key19": "3T1ZmZ3wtwyaBhpjjVrNWauTWcnhBPfu4pxURNnab1PGcv4vCk6jeaYPpWt28wMikwtdewDdJ7ZET4ubXBHxonzE",
  "key20": "2noSEirNfaJVcAjRaMARQHJtfiPpmJQAYWZvnk1ibdeLAbgHe9X2Qt1ExN62UBr382xSjGH3GAG3zATM7uAcXQ1U",
  "key21": "41BfkebeT1DhjUTMvda7Hjt8zpAZ6oThfoiEGUpNFa3yJvDqCPq53JC88TDtV4W13aa84gFTdCGMt7Cau93xq6ce",
  "key22": "59pmnEwRa2mtd1Nw8JVSkYnRFDCcYt8jDoE1MeUqaGkphUjWV2CgzrQwkmGvhQFmimFhQMy1YkSa42J74mkGBbU3",
  "key23": "5t3VFfovKfc1a4Dyk7EpmjThPWbeMJEBGE6apk4sPQXJH9z6aHmq5MQbBwFfDZ3Jfjei5KkCoduvyVeVH5LtKckE",
  "key24": "3TGukitr3zokVc2iDy1GqGGLzrgKAVBTqoEJV4C2CPGZdN4YSh8bV3StGk6z5wv7hxB1NhLaJLLTuxijgAeg5BXc",
  "key25": "4R1yURio93BPgUXPwxRnxj7Hun3QGrSkBkvBq3CbtLxnFPJ571MBPtaNFVXLizKXBGyK2NqvPWNEGV6ZNttEWP5p",
  "key26": "gqotF5LX7TFWe6rJbdz8cGJMr1RmcJc5RV34Zn3mBYFnDorN5GrAz5XwFBo7jyzTwL5hrQ3bgoiHiZumxLukEaF",
  "key27": "34QHYdxrdkcenyjG6ZcetB3CnwWn8g6fhiAY9Yjm1FX6iauhVby2LMJ9Jmaw48ke2pfw8hQ3LcS9jdA4BTG19mnN",
  "key28": "42YjD4pFKDAar9uMFVqZCe5M7jn4fqzykJxnne6jFbNfmdVz3SqiNaFVaFEHV2wFai4XdNGboE4h1861zBV3CRoT",
  "key29": "5vmQit5e4srCNNrJHAMYvmXnssyEe7mWscJxkHmVEaod1tpnFMdNP2St3ikRqrnCpsErqB1TP2LWsA5oKH15LBbK",
  "key30": "49o9zRyGiND9Fp8pxAgk5ivNkEiNZUH4cd96FFR7Lt7HWt2pq87EqTBkjnXYfRWYaSMkMVBZBreJTG1dB8cMDVPo",
  "key31": "2WcnLuLKmjrgjb9vmgDQpB6mGSytBGoCetR8WPyEy1GLgU23tVwkRmB3LtNe2Ve6TpMWKzouiojSSyKw2ko6XJE6",
  "key32": "MmFUoE2E1BjHjjqFr2bnF4NeUsfcpPc7bGsBS8gd46SckwpjXxUpjc7NL2hv9ZK9JZgu3HnPgxa9FP9EdpfkQFa",
  "key33": "5tLKkGfTiPGn6JDUjQ35Ft4gGmmmwhXkF8MytSdC3Bm6u8ey8mWA1QvDx7EigePi36nJL7dQ3LyLn46WSm7n594n",
  "key34": "kyCap6DLnevrPWkYr9uHkSVSGnb9GJjti214uisKrkR54C8Gpu8WxfLD4wYHxzfinSXpRMmZbZx9mdZNCRb8Nf1",
  "key35": "5mYkygWRa8NiMWjLKPcptKYS57zvgEm8UdhpSBMo2hfmiRRvSV7MJ2mRemk9vF482xWsUViohHfiotx9ehqN56xN",
  "key36": "2jHuaCXHd8FDcxzRaXAYFuUeeRWcEoSQ74fTsupZBjXTnyKgCFwNHS4t6EddmnWAajP9YYkZu13c6KFRSpjURRZ3",
  "key37": "42nHpiTHH3c8jM2FSvy1SzDuFVXtDbnbh9Q2EWJvQ1qDMQ5GNE494fkUdmBZJc6rudyN3RrZffTjyMSPDjCFcgwh"
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
