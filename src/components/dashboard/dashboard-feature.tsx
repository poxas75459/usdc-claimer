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
    "4QZj4TCMAcLAhHU9otEXZ61VR6hnxPHP3f8CYvttSDWUY1BAprJnx8sUs3enX1Mbn3gmGVovXb3SbSvPZ7Z9jFam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47678D9FGzbS2UStNanFZCS8KiVXMMCUAwhJ36sYcemV5cDEync2Q4Xif34kxew8d23XVij2nLSvb3T2nsVhxDdL",
  "key1": "5rrHyqvWvh66T3j4zTLcEgqSJzLzUXoVXvwA1WmDLtepbt65WVp2truBYKpmBhiR4FinHV8oPpEZdVCtftAKfZsa",
  "key2": "qTUzxQ6Zi5GkgevzWxBxoMcRFPMeHYo9braKMCqhLjJ7tJhNhKHCqscqNo2CM2dL6gAo8iCqhFFXKchwiz6NzXL",
  "key3": "2MgFhoM8oGyVSTW7Yzd31S3FhkwS81Bk2nojyZ5SbFGZ9zE5J3nhVCrXDMAJr8T6mAkmsrgrKNSq54byEaDshbmd",
  "key4": "2hETQLDTSUX1tbDVammT4qVS5HdgeVFpGtHjsuEBXw27QCCgAUgQSoPWbsyFpVHXAMh1XqSky7MYFQ5pCv6nw2hj",
  "key5": "2GafRyNtRvzN67tV6vGQaWfSuZXu2XgZ2e8LtSVu8Ekm74134kcJwuERz2rS9jJ4tstw21qsg248mbMXX8kVxRRJ",
  "key6": "3fJHZiFuE2KftfBvNFAFHgC1hNVvfNM1YTGyhuUN1Q49f8qes5aGkpAiasRSbVcr17VX5k1hSrhf2NaqjQoQbraS",
  "key7": "Hc79ZeXYNi6BbezL8ygSXDDs1EFYFW81v1CbSsKr1NRMYM9XNeNVsgjtA4HvP2Q6JyokrWirxsd5jWXWMRrjxrr",
  "key8": "5QLRcwDSdysddFx39vnKArLNVhrXrHVZMUGf5mf7Q7fN734seGRBpKVQGDPSYHjzwCzzTp3iPi4jsrZvyStw8Rpf",
  "key9": "2JCZwdvWxpoz37HHUBcJQEZXUi6zALtGvmfuyTVvFcL7vDqT4VwECgTGr74ZRyDegjXCFJNRhgqo8rnY1MVzZiC3",
  "key10": "2i2LkmncD3zBsKzrtRDZ2Zq1y7v98dkM4pp9XH8BML2fZ1a15PFpEq73JxTdYX1AWpLZ3Aq15dfXzXcmPE9gCiaJ",
  "key11": "3fqJWannfrnS9PyVDTXmPhmF11esCzobhN7GW8KAb6hd3ccBhLe3UyzsDUzkHVbciA3eafG2PVbLDUsyXQdsosGn",
  "key12": "b7e4eHe6mH4Qgg5k37QS9Dhy5RedttmeGLjwpc9Yj1AtEJkvpa4X1MQPopZj21339jZtaV9gdhK7gUwAKBLfh9m",
  "key13": "2YZayQ3tSYa1fBzsWRGSz8iYuKG6DH3KQxwkrLu9beK1aHKJcaU1pX8zTPSVfSDrCZoAhEnJFrVjhygQyeQyJemG",
  "key14": "2fHitnGBQMaZRXyMHMa9Heu69NHk8KMZ6Nwk5vGtnz6L9ACuRzNZdf6uRPv4NtogQK4uYVTSsJrzeK53TQxfvHvZ",
  "key15": "5G8Z8TE64GzKMhLvejc29Qh41aJDLi8JmUUQaHJ8aip7WmeMKE5pwroc4xZk4kDQUYqVDTBVVUuimSNs4AiNSpAw",
  "key16": "2CVvk7R9MZ9Jq7fA7z4Bbk76gYar4dKTsZmCLwc6v423DLNeCp6yenPx3qkCyY2sqTKQRtgcMobx3brGDpCnKy6b",
  "key17": "4xizsvXeDgjtcWXhTPhWqmLj3n2xGS7mxjrnitmZT2VrABgYR8EbzkPfwRotzZ7VbKJ7wswWvV535NTSNpTeRPzh",
  "key18": "4AbABhfqsVYaPKEBp4aywimTqdtrwefswAuNXjhTGi2McFHsar8F7xHM3niRPFzUrRyx7wPMr2kQSBKVEURzMLz5",
  "key19": "5FkF51DYvg2Z7u9tAHqzaxeA5c5Kinj5LxJVmVjPvzBsHpKPj2gcEjqe5VDiYWBtWJrdZznBAMWwjurpoaSNfXZ",
  "key20": "5dQQsciRotLSbbXPBJ8YJMbbd3HHTsHk12Szz2SA3RrowJr91igtRxKxyMsbTL8herKUxUEwxzuRVNh7GvU8Biv",
  "key21": "cKLzjfN8aFdz7tMT8eTJh88vxzEpf1g9Z3ytFpcfRS3Kz11MBDQGUASrLnLS6nWP4Egj8QTdMfBKG9RTQwoB42C",
  "key22": "4zmteEF2TMYCaLLiquvrkLpA8HVdNghRVCoMhWfpk8avAJnzjr4Pa1dRMRaa2uG6HHbiDAEKWTuBExuSAsCbFoE7",
  "key23": "5oh9CGceHCcRuKvxvVnTJqWkHR7fTejxd9HdNHfy1DsocFb8hKyJM9evxHSfUsgo62oBjSwKNNv2qhS4hkHhV42K",
  "key24": "2Be5JWG6jmT7Eobux9zzRKAZQq3pdb2hVUvL6qU7kutaLk1ugGFA7jqcWYwBT62tpGcAmpDKyvEmi9BpaJy8g9D1",
  "key25": "VAVphXwsWmECGxh6D3SzUT1rvpQCHg9bU8FSMcUETmyqGwEbpZjTaoPbdbjwQFfjkL8KYt5cFYkMS1wB95Q4mbv",
  "key26": "3KRrK3SxnK2hCK3b3xEhSCmTFK6mBX9ukxQatmcqqjNQXebam7akVM3uChFKzF5HewZP2eftnergnUAt9p6JTxfu",
  "key27": "4PgYZHnFyEWNDCzRQ7aLcvk6DtiQffVSNEPUyugi86yLTiwZcCAsBs8YCXvzS8GwHPJuKLmaZnEtxJWfzBhHX6Nv",
  "key28": "66MdmFPY7m2KdPDNoR3basu2jJjcy8ksrWMExzSk7SedfDBkw3hN9bzVQeouzbYaATEzj4N8RvxuJErLGKR5C1nw",
  "key29": "2biUXzT4mVMcZqwai8fKW3GFL5kNv1tr7oiYVXfARkm4Uiu9q3TmET4PSBbnzeJVaXTksw9AYxP7FcKQLR7upf6H",
  "key30": "d5o61NjHpQJiuT8Ay42SxUMrVcwDBZ9nJwu9TWRHrsA6LoMuR8Arh4GRg3aEoyDjd6MMUXPDKU4LWAuDivpsvvg",
  "key31": "28LkLXnyd8iCUMLLHUazLHZV6LPAudLdrdQidujpLryXBeeTjj2pMKT37dDPjmTMZ6rjiHtr48P7LZVBszxtyVHt",
  "key32": "5zJnQRgghCvXeeQnmVow8ZbaTgHBULpKHBXphAtwppdNTJ2BaWrPGVHWtV1FyzwngMv2VyDWrVfjLCNNSiWL9Snr"
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
