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
    "25PmUvW9x6MiHWU37PsHfyNpPGaF8HZsPz8CBJoQ5fUhPAovfNrHZjgFg2HW5YPCtcbkuAgJKEbGV8fnsWg3ycRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZEP3dK9MHeVxXdxcyVqgWjGBVakXFPvQ9vJLrxkG7Ni32BRoMrdjCf3tLPUW6fktQvkaHASSxQCvPvnLwAVPzvc",
  "key1": "3drgraaLYpq7gdRktaoJ8PT3qRWSQmRALD7zRzRaLJgMbDi8hu3KbaUK6D2j6GMygCR8Vm2dH7XCgNkhwfd352Ai",
  "key2": "27LxhBfzHMUVAGUPbTM6zy6jFgtgXpaHaGbc1PesWoRVLR7QKQf17WdrX6F6r414mJkL3M5HKGm4dm2zzwJcNUgs",
  "key3": "uSyhgYscqPAZ2UnNeShbvnS8Dt5bzmYeCbcNqTAX4ufFgLyfMGo6BnBA4oh6BMMWLoJd2cgLGLwPJ1HJ33vLWwf",
  "key4": "3cdtPryH4qggMFjY8H2LZngPhAxLtSoYQxsgsie8PbzTxEH9djoeBHMKG6jPCFSJpL1n4vcneKzCX6VtohwQcdTG",
  "key5": "9GxLqUkXuzkzX9dw4FhbUADXbcewHTRYcBHowkzin9ujF6kbZMTK3ohwTpxseS4WPbqw59sbkXFmnjnbJPPUkj3",
  "key6": "52EPes7uVhaG2sTfHq4q8N5FWuM2zXr3tXPNr98KBE7Ws34d7kDuYW2nNTSh9CpmvEMmizenwXPWdyWVvdzRT4oN",
  "key7": "5RGKYjoNcKZ3JVS2F2XgRX5HdgFgxBH5GsAYd2TCbxdD1WfpscsQRWo6Fyx7wG4vVrmH4iVN8MMiWsM3YBpU9boW",
  "key8": "52LLf2rT5LcexTJjuVfkNixkHNEbkzsVMAghHkrFA2B2YstSVutbyVurhHhRe36vB4ZBmX4Df8UWvfdXbzBXSAp",
  "key9": "2kFuGLC7hgoUARFSWQRsPjWpFSuZo49DMncvHFSbwxjLgxEQ8XAq3ictRcegzfGosD8fx1V5NVuYm2D9sKDLCBv4",
  "key10": "5WrhY9LLDNFwzknZuP7DDgQBNs4Z4nH7FtXNaDufKwEm48e3pR7joZxGvt7mh81UvqVRtThUsvPCqNvFKD3Lboyu",
  "key11": "4UkuxnwU7CUTECLzMb9yGBRhvweNcMumH949q4UUKArwb1kcCfBbbWc9M1MTKLnmBp6BQYynz2sdJ8BZzEHStnqS",
  "key12": "KyMXzSZxDbFjGUvqztaYnVKg682hL3p1Rm87Vfwn1nkZgyN1pLo5Wmtq77nZs2irVEnWkgZ95pRtucM8i3yCLoB",
  "key13": "33UqexgG6FQdd2kU2kPczgHXV2AbAUege9gqq9UPWv96n6KkxDKghhk66DtFJGj9euXKmDicVUxiw1vkN1PkjKqG",
  "key14": "55iNynVCwsz1vtXVbiKc1qcfKXWoG5V4jhrzRkpVhuPNpSeN1QNzwrksjTnnfzJmqdac5y7GL9RYMrVnNfqi2buS",
  "key15": "5f8AgHut8z9MV4bfueN5mA7uv9qUJ4cdMq5pE1L77VyWNzTjVL7JHtqPhfkCE8yAWpBTmgK4rWtyyoAF8PWZXLdQ",
  "key16": "2PaBjSaB3NRTi1Vb6kpMPyzFdiWy8oDUBZnCXpEKWA7Ld3hzrZec1GiAccVZr3JQfwAf68xAcNDLvsPkfQEf3NrU",
  "key17": "y13ciFkNtQY9Nb5LUMvcGRz9JXtfKY8XNgdx2ptbV1TT3D3NFKkxFVSUc5i4LHvxGTiJQjcjcbueX6okE4gAvZF",
  "key18": "31fJFtHN2t7sR2hUyfYqBh3qT3BYSbiZRDARVBanZpeyiBGwYpsLbYqnLMvcuTHpscVjYZ9GofGuNgkS4PBjvNeM",
  "key19": "3hBSVgAipw4vLcFHQHjReCiaBAoAmnBoUKfKRscGfW2qPcqQ9FLUtvBDDqfe31XWEdxKkPHTtHsZ5ineqkdsAd8k",
  "key20": "2kz5cVfgTpMVtcXGo83TqPyV69VVqYawEc7Xop23RRqyMcTq4k4iEK5LHh5VLYh4SgQB3kjkDNzgx4if2GcKVLNU",
  "key21": "ZAuSdj7yDbKG57ajFzSgLE4twHoqiEV38dRJrdLNEiWUAwDSKPFQ76EktpGhqxPDx72cMxinFzfiC5uA9h3heXi",
  "key22": "2f6MtXrw19Sxy4HRS7EoG2gjDD1MjAfjmV26uQJCtGP9obw7RMVfU21MStNPgPqEdMwGwzdrFecV7tQSjjE4MPZP",
  "key23": "bfdkhfpmwwLxK8KTme2WTdkYWCDyqtCeoMau6AYxBakGqwFK5iREjXt4qrYvYLt3M2uMaCLdwFoYXPMacBqmVWz",
  "key24": "5JyjtUmM3DeEgtrvhcvfvkPUXKq57erytr6A1VtGBaf9Gh2UcEBAEYag2b1S6f9cyRAmwssfrBPGNNfMn366unG4",
  "key25": "4PcijTPop7CSj6FWFFziZp3GqTpyCZU4noSndf3RHJpK7oyY4zjZAUhG4wj1KRSLYH8AgLgoWyMp87L9BSF4rB23",
  "key26": "4CbJMsLRrw2bBYUv2wFw1wVZyJ9od1MgDfLsVp1aD9AuTxrUAssk7Rq4tKwH6BVJXQeNUpYvUpNjcHZqPhVrojM4",
  "key27": "3xNrANMQ8VL1bzzUU3U2mNLzGrZK6P3reti3Nsyre46pXthLHHqrD9nmQyfoRgaFn8LUrkbdeyAohcL1tdtYcBrw",
  "key28": "4WnwoLwKwGjiHg9MpZD86hNYG3wEgmpp9rfAAnn3VTb5cgLzsjpKsPUbqmabYSH8cCEF4SDBo8qKW9mUSX9TEW4x",
  "key29": "2YitwFDA2d4FfvyJPDQRyd465HnKyREeYPrbRti5QJRFAR4vjgNMJTcQ96pDvSTJLokMdHYZMCKWfYPnFK3kWxKy",
  "key30": "2Uk3QnFQ77B5pKqzqobco2sdNJ8x82FpSQBnxuhE2eDFJvnwEoXyKDWJyxo7AByJDVqy5y84Go6A7hP4psizXp2w"
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
