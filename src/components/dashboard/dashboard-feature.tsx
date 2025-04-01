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
    "5dgm1kKxtKMsgPbtUpucGw3XWyLBhp2z3deZut1AZdaXMgY8ftWMDtKx3YjvYjAHhVn1umFG5UpA39Gtadg6ymEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Drc6vhaH3DZ9XAJYDmWG1koWNS4V7YoofW5ecKZahdG31RNEU5bkicAg9fiZhcc2LUwgN9etNdfPRdiUk3qzGqq",
  "key1": "5SVmyBSY9jLFjq1MANWLa3FaSnT7tS9Z9YySySRWVx4Dj85btjzZ1o936a2DBT155dreE9Z9vvD256pQVn3CLjN2",
  "key2": "5LGBnE7rULH2ZbrkL8g2ZrBfWD345odYwmLAAVaFCDAtc3UMwLPuHSJegshE5N4J2XJ81znj4NLP8P8wRDXAMhwa",
  "key3": "2W3qftS6Q2VeH8grQqBDGb7KdevdgSS8QgsxTEmte3KNNdgJD88kEn7gshdCQob2XFZGAor91XzP5hVyW74XMKZD",
  "key4": "2EsYGXqn8LWT7mEh6pVeT1AK9MwLAWbWyaQXbmzwhDB3wFHnXj5TxXvoZDzWGbWvEK5HatBfD6Sbrqr3YKswfP8c",
  "key5": "3m1Y7dVabnoAbf5uKYJXEygjDCC73LNDAReAfVEm8mQJGLrYK2paS6QYLbuREezNh8bKotPKpZGaZzUtyn8g6MAg",
  "key6": "4oVBYitK5CU4EnfDoePWfMmZkWuoAuJFAxSh6Z5suoeK4NCFGF1RVKGJ89JnrKLvBE4uWraHGZX5jpZkAkHMm71w",
  "key7": "4695gmygWmxxvccpvgnkXHMzZdfcDretzp9ca7ZGFFHwBDurTNCJnpewpkGP7d1zy2ZEf8axBW2KpLmZBKXbdaA1",
  "key8": "3sijqvtnd1RHQ26Fc9JsaAUJLzLpGvXDt1r9xgrhTujZyWsPkbBxXMvBzrWJWe2msLHFNLyp8RX8vQ4FRuiYQp3T",
  "key9": "2wHcECaxF2jERoy2bY6TgUdwkwcjdf2EzMJajuBcNyfMx95oUD3SkV1SDMjVvWKdJp5aWDryjMJaVrGB1bxnB5ox",
  "key10": "TyAjRsaYWSkL2d4JjnrY6MEgbYHz1unL9FV38kAfkysTyrPnzR8gQm75tk3V2XL5zF5uoqKxu6ecpaxvS26RApi",
  "key11": "5QPXPfZj4wgFm8HVRGHTtAHDKMvXPWqEJWEcFisW9zo6muaDCyD9zGwYzW1uWQZGdwQzYFibxFikS2zLssdthBRV",
  "key12": "dZ6uww5Re8CpiKLnZLNrcUcAM72Z6zu91nUCJzBHzw9oMdZ4eATud2CtmVwUuUMFr7wtnhKPdhRg5kxVz5d4VFZ",
  "key13": "42S1vZdSW44y6CfWtv8MTyc25jcxNjMMLxTnNvQ9XUAceYHJChguW889eBsDodpiB3Hey8vyTQBbMUhrmcqNiixQ",
  "key14": "am3eC6HqzMmU7YQtu9yg4TmwCieZ6j1Ehga2NZP1ymCNx3pKcbksMwa6Hz5pbn5MdanoNH7et5SY9VBPvtLU98M",
  "key15": "5v4DkWxxBfLxw9oeWsqgbhKCLozwnmNAR3j7tJLruExQAtJYRn6c83BWCULeMis54vhJApMGTq2tSbh3BS2aaY49",
  "key16": "2y8eGUmFkUbGbivCZqEFG5LBRi1Jb9JWm3izQBZiwrfCKjtgFBypoVc9CNKzto1mfZecfFGiq9gcxEy5Yt6kEuRc",
  "key17": "4ovi8PpcAX2GT2fBnNaJnqBtfct7HgEYRhBBasVPEFGcV4Mu6mYYZXL32ZvtC1Yki12RxxJn1Nx36gFExNU8HV8U",
  "key18": "2DQZYBz3xXLiiNrFjsJco18Tj23mFGt98woKD74qfK31ZC5QG6Qte912TSmffgPxiUVTad2kbVGGkKmxEM1v5pFH",
  "key19": "2165ZApQr5uFEnkGNBVFs8ZrrUCghdQhfKJ3bFcY7poBsGFuzvThiZvyJzSo2d4HJc7USgtKGetrrB3VdBtaFa1z",
  "key20": "4QpkMuGWBWeercFuYfg6QP3DwAMKxhF642hcx4SkF8VtpU1bkdEnWxiWpwoBRtN2UviYasw39xGt2udHdm72Uou2",
  "key21": "3p7Eb5oHy2d8xgfAMbCFD4vtmAaCP1nTcUyoULAk8jLeEPJ6bsbHp4t9PCSkf7oSx2gw6HRD2FoxMXDdsQhaF7z",
  "key22": "5FMwuQb7frcjRtgFCTLUsceVfpTaXvCMpjJAN2HoqbiqzZ9JipLErChMspvsFZxufMregY76jGVtnDPeD1fhvdjd",
  "key23": "2shQUHPUQfS4dtikB1651wgimV8WyCYtwE7LF2NVNc4hjwbqAvMHsM8NajEwZwRNaXjhtTPSgfVmiQbwC7H6yi58",
  "key24": "2NWKzzvw83SnyM5MMR4NvJv9HA7cm3tevqEgKpkjw9FWqvpBSMsunbfmZDpJ6frUdoJrWL38P7KcammdKrdRMse4",
  "key25": "5tWpMjext97LuEstZkkZtq1ESYP1eFuXDKU79L1yTYqHnKyNHNfAV1bYnQetVifdcN9rKaqCeMqwTnv3BavgoECh",
  "key26": "4YTBdrf7uMaibFP9yHyfmDvTpuDkZhkHf2oWZ6dNaukd7hs7TPEqBzYqjq96Gg2NMAWRZy5o82af4G13Ai42QUEK",
  "key27": "2VN3zEdaZUUJUYGVWS7Fi3TeME4WzbLKZh5VmEcwTpqKUzh2YfwPC5owfnQ3owwHCeQgEebGCPhUokLSCvVzTgVE",
  "key28": "29pAKRc5MTJzjaafzWuALQEYAf9kMygBMsTCGryAG43TbGwQPkjSC9LkfMJh5ZpVc2PgscnAV4mek91M27cwbJp6",
  "key29": "5oV6X8MXCEUZaMpEGTX9fdkzty2cVzYr5sLyv4SUM1NSaWoE3QSNsP79sUQWxs3yzXBxbtrur99whgyGjNciiwmv",
  "key30": "3NA1pKmdM1K7qBLW953zZCUqGVJ822SW4qDPUEBGMibNV1N53QKnzUaX8FUHZaLu31uVUENdb6zM7M6a1ZoyXKZy",
  "key31": "64doy6VFBkE2QHzZFocQvRZfaYmfLKef3ygB8NTfbW1vAyJVDRxfKtEYsSThfiYQ8tPREEcYLaVdmXFKxMibvHdJ",
  "key32": "5mejXjqwDGrrQyts96w5rtbKjDeNh1VxmtHjqNdHU4xBEBf2A2gF3pFvWjLt5trTcfUFS7wB2D8EYEdHuuwu4DmP",
  "key33": "3wViNc4FcnuCxXwr4owVppPVxB9A2jXJa9VDBAASn9KduK3GQdkEoq451KuEXS4CGgAVMi9NmKMLPkP4aKxuN1iX",
  "key34": "ekupzXg8kjD26C72RxdL3VywVJhDR2Z4TaWoBnZ47db2dmVmPtAdjpVCES6a7fRmWyhnjksA8Fyzgqv3pSScDfQ",
  "key35": "36oUAbRL69Vn4kFFxV2CkcatGzJnDmHupqjQwwQVknk6FtKGcZSaqg3JYLvmbcoWTD7MjmkyfRenwi7USnqezzFK",
  "key36": "52EgfL7nXzWBoASntvU1fpkr7PuGR5x92FbBG64Ke5aHaCTEfiPBuNAWVbr5ExK7nMb7azWAZbuKqxWxDXaDeTRc",
  "key37": "2i1xiqsLNEA4B1R9Q7ujWjFG7UHHQ91NjySTNWHq5g3rRLJ8Q94Tgj1k8XgDNxzeqyXCz8vxZ4H6WYbcgKefenP4",
  "key38": "2QFdMJJD3ateRkwxdfvehdFyZBYrV6dkXJihFREJ6jPGTTJgvzExDLo6V3uf9YceSG4xBXSnSFkR4ZEfPknEWnx",
  "key39": "66hqNMeJYgytqfZcpSmf9AY4SU4PhqraQY8y6RYNzWWQuAxVWp5sAMSuX5QNMQfbFTj6MxxJsSUqDTsqowHrwcVf"
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
