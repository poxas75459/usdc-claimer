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
    "3Qd8fZSUjsyDfeAj5NsECEJ8KLs3oDgrexwxCWRx2bhLPnazt4JHNSxy9nb48KEnanFn5vQigs3Bh2M59uzLmxXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cJpUGeMKtPzqQmc4sU8YojVdg9YpQZadRSk1vpvi1c3nkeh5ptsmYzRAPJSvgKooFUCiyPsuLCNUbF7zBDF1RyN",
  "key1": "2Xzb3Cp4q2dMpU2diK4UToxjfLmQNX3h97f5AHTtuAh8EsAeumDWCz22fvSN7d99qgVYzF3TRgd4mcJLYRzo87SS",
  "key2": "4dQQbjxRZfNWC8VghLJ7FWGLNKpAv5xXtQ5ZRxS2oXBUPQ3MatjhW4E8J7p9zQPsNDua4pT4tbzQSP8pECQ3RgW6",
  "key3": "42a7DviBcGHScup2EhC6S52rQY2XBsYpuYRbjuFCPzWggKqdTYC666sHzdSEY2SSL4XigEvYrDS5pzyo9wg3uPEA",
  "key4": "2rGx6M1i39XiSjd91ae5WBwXLqMQ3FfC1frdzRgBMG6LTRPZooQzWWUcoXL2p5w9KyJ22dCu8brbxh8xzhyVhiDZ",
  "key5": "2Dbg89iHo9nPwC8Wk3gSGHAe352Wa2gRdXoWmtaKi2s8y6DS8fayznaWswx3PMLaKWkvsXR25AiPGGjaf8E5Ugmy",
  "key6": "37nfCXjgiKVgrexbvqcgTPkzbuP1UQTNPyJKXPL5HzMAY3aMrcwBUTRngL82ib8RDyYT8LzYZQMsjj1328XuFRWk",
  "key7": "37aPUQW6Bb1Rf2pVU7tmRMUDR8od7t9biSddwF5NmhuLB1RczefEyn4aLRYmxrRDtKiEpuEtn3czKTztfN14Q8yg",
  "key8": "4w917j3HkyUHKpDoEELutvt4ni2bxSokLsyZCasANjkZ4ZW4r47FVQHcZ9aCQwL4gE7JqgmFxduGtAKvacB6GZ9n",
  "key9": "2BTss8V4R3MQ42G6rMPkeF2R5ymdaCubWC3hXfVNhtJvDnNswqzJzdn9NfxABjK7TwJPcwxRPAszsM4zDhssVjcN",
  "key10": "52LVNQzsSbMUidgQr8cxSe1y471XjkGkJkm779Wxz9H98sr5HnG43LQuiwDNkMCg2HkvgQcJRxeBCF5EQ1PYJdMz",
  "key11": "3AFaJXm8BZS6JVjsWDexgdiDGkV7jxdsLEFYRNqSqeejypVzang8MnMeJsBZYENDQqF8ybdaRnxYuky5hSs9jkW6",
  "key12": "KBi1WMd5RUddbyGPxrztsgS8uhy68caxsLmUyRZLpPmLctXdLy3qPPzdEXzxrp5g7wE6VkrMe9NcrrGtcP1C7z4",
  "key13": "67HndZtHUQH7dST66YnV72vhgZySKrGmjs58U4s89yij7BsmzBVLvLVRm3ZaMC5RK3htq4QXukVT5R7SLwrAQrSy",
  "key14": "4Hb2bsWEz2Lx6cDVBWYsvYPaJAkTGHf5N9SxweoMzSwTLA6jonvHypXQv3vNkXf7GKqJmQAtKAtSj97jUBJASJs5",
  "key15": "2Db97JVTJDzX2QR7Nty3KTsC44WbtHmU2zgzyCc2fpFnhtvj6Rw1euvrGhHE8sVjFyTLWyDQKUdqaf3g38inrZwM",
  "key16": "4w1u4nncVAcxCMGBRMFbFijAEByC55voNwqmAWgcxD7yyFiWPs6txGNYQwq9ejLzDcguZzorQwUE6mpx2BaJw2Bs",
  "key17": "4K4gXJE6PrNykQgVC1sySpLqHrEYBciojyMLLfDJ5tSNkpbqfEyWRrESEiXJhLztrTmyteQ9mVuG5qTHC9qfRoL4",
  "key18": "3CVrwbwWynLZ7KCYjJjwJN2yrmwySz2K8y1mP1zr33qWXTr3fDedNxhTfgiRNNJ7Q41pekT34yZZuCREEgkXDEJP",
  "key19": "4BmrJUjZXvZit7JdVNoGaMhXfBPu62VmTpGXXo6pGS9FwdPNyz2FLv34HmWCkvg4KibJrD9FvgziopUch3VPdYBx",
  "key20": "mboVTR388Vrp3NFbhK8FixqdkqviA4DB9uwRwr7aRNbjQBQunXL1mR6JaZ1hhJkRMqGf72CDsowrgShiMsnLAbi",
  "key21": "5LVd5fhZsZZiJZ2tnX2xW2DMzEQLUqcE7dzwEFXd8S4D8r4poC4gsBQLMDmzxDocaRx4YuP7ZQiCoqNk6hHRadH1",
  "key22": "5yeDUcBzgmWeZCvmq1T7fGnRmpsW3i72Eao4K7y9zBQt1sstkFrnNZm4BYrH3xbMeGiTWY1htcRt2pSFxp6Kw2yU",
  "key23": "2pJmmzo5KvCSazzwuGFTQxfpzxQW67z1grYfVtKZMVnvQjRaC8jEuAPF4zfwJp5drrs3nTrkw3HyF2V59F5W52uf",
  "key24": "3EYLF1TczWSAfW4HZhEP5owibHgjmcjpdW4FPQuYkTiF3EfCSJcdzNphESaFSDFsANWVr1xUgKXZdENR5dqT95Z4",
  "key25": "3C8viWRdErAone8imX1J67Zd8R2vxPuZ8hhtUS42YQG2XrnfV7Pumfh3j69mobq4JF8yoj5xwnvDqTp49u9JGJb9",
  "key26": "3MuhbV7Tb8GPrd6VofKSDdH77Dh6N7J48pVpRVHRTavcP8WMy5iS5CCpR7M2FNQ1Ec9AvJoA6dxRKwGM8VasZ28J",
  "key27": "3sAnkFgnZLfaNrC3byBReZoMuemCqmwxUWYvS9EHpdf8u54Y2x4zDdsDBnn7QMq8bmxhFeQVadZSsasRkwHjLvYw",
  "key28": "3ixwfA74ewV2RaeHamTKxGboDpEt6GpLZZ2exVcgHezQmwtpw1nqHLrhsT5HfohpTSstzz3NKJj8Vpcd9dmZoii4",
  "key29": "3hkfghTS81CpHdMokVHjqUiCKeRpPTSa53MZ6k2nt9RokXRpwAkqb8XJ8NyJWvHJ52zt5tRehVc5BiX75wiCmBVp",
  "key30": "Ki5KGdCJDJEWyWXNauEXxcX2aXp82B5x8u3ngJUb27F2WtgBGokXiQKGdxV42og1Y4a6oz1AVC5uj9QxRdLz1qx",
  "key31": "4Vwqr25w9sFFR7nphJjp1nLbYUszftYFRqJANN12axLF9iyMASH6UbfyWRMnF72PYvQ6qnKMKEN8rwvLXbAUDaeU",
  "key32": "5gcqGpqvyAiFJNUdXJPFeAfrdosBur4GcY2eqZEYKjJinbk9yj4SD9KtebkVAKLcpgy2Wm2jYdUDJTzCPqgpnafS",
  "key33": "3GkfTr8enSJHufNFGq57E1eHPVave4hBbPGVXf5Ut4qjW18wQdXRzeBE5RPyRryHvnqSRHM9auPmw6kstCTkJQAP",
  "key34": "2WcWnATkHV7oaz2smKo813CWgT7HDbmB6ecMg1ZbsipaMxbns7nMRuaMYaHantfcJGpD4ndvG5bC2FSwSAB5VcVb",
  "key35": "56Pav9PPv1LUYxo83LipP8GWuVE5EAUaYhoN4jv7Gq98P6p8GvUqxrGkxWRemtGKfAvd6gR2LWR2MtBSK1k6eZ79",
  "key36": "2SYMPNMZcnxVwNittyKnt1hoxmzZP2neHUtgCX3AELKbtQgjTyvjwaW36UXn7yPNwNJDHQSUc8i15yuWNmGQDh92",
  "key37": "5zcHdh6hPtnM8Y2UAbpHitL4eqpL7niHKkKybv1TYPcBeCwiQZNCoK9m2PPeKYn8LPops82HRu64C8LxVzSPL92t",
  "key38": "fzYg9XuNmuD6MLbzhrn218cxHc3pgbnaYRYj8iYwV3DMLwdsxCW1zH4PZMb9dqp4P11pqgqwK8ri9cZGQUvmkuU",
  "key39": "421QqjXz46eAxWo8iYAxW3fV1MZ4w2HZ5pUkRd6bGn5V96bTFvbjcqB5id2b3CfjzphRHvNnyYuWax9ay5SaewtG",
  "key40": "fXgxYi7jTAN2Xmn3mQu9UJMuQc2WrpkCqka6b81BMJxCzhmYKqJsR1HR5v8mjr2N1W5SUmzxjpiusYWuxLEbfyk",
  "key41": "38G7bM8R9LuCzruxnt7Z7ns6NHJASWWE2eSNsW7a8jvpyBmukZ2hS5FFyBh1j5bG2e8zbaNXe2jRUZzYKSbfhLfB",
  "key42": "3p5esRrVGH8X9p3MNhLzB98mT3wfusiWb7z5XDSpgS7DEJgUUacT29emUx5TGqCcThmE3QeEVJu6NY8ZLKeRj7rn"
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
