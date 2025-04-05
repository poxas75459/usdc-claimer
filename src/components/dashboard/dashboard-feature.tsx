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
    "5KRfgVqBfH6w4Ko9ToSd2C6fLGsX8q2qYJ36StnkPCH8oMR8DMZBWJj9H6cFU5t2ow6ocQtrqsQaU2mW6XpSjMGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VyaLZH17KTDK8ozMRfATZFLfhjQcbqaXHmbCXzczpDKuzQ5FBhGCqtaNpMZTF6taqCPdAQLAJUTrzfwCkCK7G29",
  "key1": "3sNAV6XPv8sZtzYJ1nfv7HAn8B73Z7RjTFUnJWJkBdDbqcuxhFFz9RqrQBKkRgjDZ6f1aexJ8xF6owGCr9ztYuyA",
  "key2": "5q3DyWCVNzXbURvGF9EszmNVJqquQCy34nUiDQpnqpbw4FtT55nGQQTR6A9CuGRyzMGkFQ3B5vYBnFR1s1vmeGDL",
  "key3": "58V3994KVa5WtXAaL8wxcC9nLMx8iqBTbcCNd5xVX12LSNUTdfD6b1eFn31Lp11GbCHDJuLcHSKeu4pPU9xYU4Zm",
  "key4": "3z9Ge2BgB9STcHJ1mNSR1ipchL8gMVfrDT5n7EBKcrrWqX29dobZ5QMGs3DxfqtkZtna96eJG7hx1CtxRvq6Chqz",
  "key5": "49zTUGdfHa4LfnagQMiANbag2ZzFYiDppH79yzGzBVy3yLmy6By2tH5ivuUGej7y52Fr9DKsi1N4ENVMisNsGTS5",
  "key6": "3yvcfBFZjy8KpBbaR4KhhTXH1Vk7gh74Do3iyziEvBo2Hev7TLxLfk4UePXCjF7YXSvMQn4nFVpAvZC3UTFttR7z",
  "key7": "2Feko4tdrTWywaQvEhf5ayJaySwysFskKu53HXJVH5rR5U9g9pxyJRYW9XwyUKEYH2FBHNTy8weJ9Bg1iNffFkw9",
  "key8": "5U1VsqGzyWutf6tD32TfZz1M6oTaBr3Cq3KbzdbcKTDf29VmgmQWkvoipL7MJyFwzHw7UevGswcvLiKRSVhsdof4",
  "key9": "3tfLzYBaBgayjiNgPMJAtD6Xhv4QvGuHXH1qeVjcgcJqdaiLtvYxdJUtA2jMZV1KNXRDrSxrG6MQTWiNBGT2TtC9",
  "key10": "nRSUSM8WzGjSeU7R5E6g4hLE1saVTN1WXigGAfVvDcuZ4Eie7LTMWitrtaJpsoFxwmrMeXn4P7ckGa7ZbaJyNYm",
  "key11": "5LtBwzqGfeoefmK96kPYa5iHA9LhczfNQQx1G1YcPv7eUbbKNiPjkJ4qoikLzuwVXAKKTR1YJPMYLfUHLmAcwgGT",
  "key12": "2ZwqQmo9mEbSDVRdrDD8ZmpjpYhjq5kKBZwh6jCxdzMAYgqLvfjV16WqKajjd7Too2uprZYd1GUSx8SARYFdy6us",
  "key13": "4FZx6ZFxiWFdcSLhFg2oUGscZpSPvjere3G99vyd64hEXZ4VFr1cqwkmNsogDM6zyfbxJTvsdSXQXKZSJwSx9yg",
  "key14": "fRxV9NCUkTaAybLUVDkD1FwUp2T3wXHd1BPNQHjC5yX17rFWAWyhQvvqnA6gwFg9gdYPfZjPR5sQMRsXfVaGqoY",
  "key15": "5AqjbuQqX1JGySiry85vL7MrX9GauxvYtP2WHoeuXtYR6NZAzYRtFKmUwu2Ah9YJqYgjKSJJjJ28Xe4rgxYCC68a",
  "key16": "4xKoh74eXuboczoaB5GLwCUrWk3bUHFiXTUtKtEr6XraWSorScKQUZ9jYLcw1DmrJQ3FdWdVsdXykDva9YfkKQmk",
  "key17": "5ZfnU6fmh7GhGSthszBtWpoFh2abDum6THB1PyJToFG4X7bwKYwL2JfCTQA3KoLRGNS13UWwrEPbMBr6rTmPNpm9",
  "key18": "BM4wLsyLU37BYDS731ryXnD9tVHSSNPJykWfGYJqjq7d3exy3VEdMfARoHukqr9fmVxw9XzthJZ5FCeUruT75Jk",
  "key19": "sEGKGfmxbyjeWZDRtyy1aTKbtmHHNjfNuErQaAhqcYbNecDhqUKDSeofQgRDJtKRNaqiTFRAqydrvYa5KWGbz1X",
  "key20": "4LT1v33KnQLg7fiBpbzGoR99S6iTHzEhGYWpJ37GBzCeJX1mvJdKyACVV3C3tNVxqVG89pkZeUqfrBjJHoxfchp9",
  "key21": "3qrFZhFzDVcr4DTzKjdVgk6akz8a57dTj7ZiMznSZDkA8pCmzBtuU5aL7Vzp3q7eKEHdmi3Zs7YULP1iKEV6Uy1c",
  "key22": "2DR7Vz6sbdhyupiBhSsL3neNSrhEGNkEcaJN6LytdrhQMRuCQTJHFBDjeNm657C29K3SPTeHcakoKcxD2t1f1YCR",
  "key23": "4RePrfRqhzBgXnuShCBbNPYXM4oFMEByHFbrjnkkjRoxLM1SWe5481TNAnH9QNLzMGWPBYENpJq18t4XuyC6fmEk",
  "key24": "8dNAk9S1wTL5o8fayEeiRxe2PES9jtsjAmr5B6gVWkMgRAYWNSAs3NHa9ghxLRHD5jfzUsJJmxSbwCaTybhYwmo",
  "key25": "5z7ibjRJNN88XUy4TBeS5NzRKSJNLjSvNqBswVzkfByfkMaTB3Qk2mqFkR557Krk6U37Vv5ZpvuMJK6U46UibWby",
  "key26": "4CUiZo4wnQzrVnJ5d9sg1nu97focHwTb52oq26DT8ciF5aLrtMFV1EnypCr2n1K4rRtsN12yuTFRu5Chdbxdp7cV",
  "key27": "4mRfsoC4ELBQzXnR3py6zE5jZoXuzQA9udTU8YUk6xYxPykXhyLJDgV1QbFZQ5GgKtwimZ127aVpnn4KnG4sWkNY",
  "key28": "4roTE5wM9vRrPkMy91eKHCRxDyvhiHe8ex96AkdjnsnuiHCAXZ3n6aFjDG4t5aCFacDQF8DdhJRCFQyw8B5Nn5ht",
  "key29": "3N6CERsvif4Kr22AKGxv3vyAWxXCrTRxha4BK99t7vVqYrhqFhaQ5YCR7K8iuKvEr6hvN1dF2swvdU38zM1Tv2Rj",
  "key30": "5cBcevvsgUX8W3WwiambgN74mWZvfYDMUvPtKDaABGiwibxaXAWoqTzdcU5L536WZvzjEtoScVwDPahgjiN4sArr",
  "key31": "3SBSzye6QBEbjMM67XD11N4EgGC8gD6CHkbEDDnbGKB9nx9KRMLh92ERHvKhA1f1UxnbgFKYijfEKtzCJofTBWg3",
  "key32": "3VeGxK9wBETXW59gEXHCu6EoKoQfZH4oWLWSSovqVB38WENQR5kNhoEbytkzeho422Et9Ww87RzuPof4B7s2mEQ4",
  "key33": "5WcsUjFWkS2YcVxmJiXx9bM7vjqKcY14ew4BFwRuFqzk6UVD2Ypm3Uj3VhBWuxYYATo7tNVj6s4wsWmU53ECPG5Z"
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
