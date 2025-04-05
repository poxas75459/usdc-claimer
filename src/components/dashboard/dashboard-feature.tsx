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
    "2cJdVsepc1UQQCehugSvyseGDkRAPuzaWNakpfWQgGN8V1dbTauW5msD8V7FGamAWzf9fZijEy2pmaiST6DuPYt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2532FNkZ3MkQZtuUukhYRL4jen3duYhrtzG6EyjbRW4FTyjbx9avfZNvZuguTkaKnAZXLYgtXTYnH7mnb4yRadFi",
  "key1": "5hewPYCMVvcB4nFNjuqS8xuphmN2u8MneAqTu67pz1cjjHaPPEDsheJ8K54tMoj5yVuyvP6Bca1WbFEypNMNNsUC",
  "key2": "4UAgPkjbRjtZE17aEUkvmxdoWUoxGVzBkzhGz3yDi1yUzoftaMLrRv5siXkGMYs8xUtLBSBJFRXcfjfdR7ym7Pww",
  "key3": "34qtqwAEYv8MRk3EGuUcZQGc9dW8iNF3uk3D4sEB47haW1ewuyGxb2cFAV13Q4cYKUPNVxq9k4PhL6pyYcm5Yi7D",
  "key4": "rHSetJ6WNng29s13mxcP4uC8FGRy6W5rK35kLQVJVNsuifREayEc8o3KWxTTKxQmEBYGXyYbdr5NevLKh7Wqirp",
  "key5": "4CC7KBoLwdYoc9T7ajMBwpTy3RxCz5QCZk6CKkZ4yrWM22mP5zYvNi8N8CVBPhSV8FF7NtPvHVyxXKmj1gENWALt",
  "key6": "2yzmgA5DTyU4PqiXAvjGYRuPj3DHJnBJmAKpHR4nwxbXbkwH4LWLiaYZpesnKDw459rqeweiYY4Yn9A1oYKYEvB",
  "key7": "TVgWyQQNQyNnsz7EvZ6zZT59fb873oUTB7xzJqnB6fheqPp3ygxDC6R7ZuUo8hRcoyMFt1YXf2Qqj2WYpYF4CTU",
  "key8": "424vmfNto7K3JATdgxyPUqSHCDhxEg4c1BN26qMSG29VJTFjFfnrGudfWmFuDahfLWtjUCRNfpGRm31tcBdd18EL",
  "key9": "4fTCyNHqFYPbk6FNhFyALyowmN3ziEwaiL6CHfrvQRDHj7aLfgferWd79pDywWCLzhV7gzjU5izQ36ivXk6zeZva",
  "key10": "5ZD6WQgRULezAF2UqfNp3NXSZ4WgBCF2G1QWCBaEdvmfbhq3rVP2iy3w7KSeDpRXT1fKVwwAhXWhDhrqJVhdZtyS",
  "key11": "5ifrxCuretMBsc1GezmVUC6uxnVeTpJiMAtN9q5WcVqQfXVFymNdvjpJAFSmqT9Qys2mpqCFF78Y4WmS1ghjEXiY",
  "key12": "4TrMN51sXxWk3EV1ELGkfABUSzJWQttFpJFSbHTZS5Sv5XymumBpB4Y39qfXFu4SXc21BmDKXzxpytFAVqvCeCPd",
  "key13": "4YHSJ5kCvDt5rM8NPGNA6VXy51nb7bFvQU3C9VFfpEx5WV9tTr55jpuRz8G4TNZhHCmff3SabhhsaiMdxJBCViCL",
  "key14": "3pVGV5dNQfi1cx3BHQp1EgfZXX2YA8BEPLKtedxFFr3s8EJhmaE98x24xUDCxnLKmQAVijJQnTdXR8mxG4fSTbmD",
  "key15": "2gwVxLN6ft1B6HWY3wgAAAcykNhFQ79aUbVXwC2CsgfaErnGz7jLJRtKhy5vQyPLX6VkM8y3KTkYpNfHENKzSBam",
  "key16": "48roy6zDjcPhy338pFv4hZ8CeDMAfCdv5T8nbVDjhqGXV8YECK5TJHDdkvZ8WqG13kJcVTAZUrzhrZK9Pn7b4ybK",
  "key17": "2t8KeR5outcbPRgQgTeC7o6KgHYZch1ic4r4nZ6LhVCfJkQXLSrwGEJa3hJ3jpNQHEmsNLPnU2vSxCT2F2SvC3BF",
  "key18": "58d6a1jaYhKUYWGd5yWdkmzzbdWyhroxTAJCSNnfoJbevt7ff9t6S5VNAhCxXzeStyTnRqug7M4NLvVoF4rzB4kK",
  "key19": "42YyDR9qFcTXVsvxWPcrBZJ21MG5KDMWKUXhVT1oM7cnTYBwghJxCJTumavqn8amVXa5Xz34kC6AXYhF2Txs1RXx",
  "key20": "37uDjSaGF9ZsQKcRwmLAWLAqSkGBg9ny7rnhScehAdnjbzSexhri2VM7P93oR4j2biAG88GQPYdUhcVvkqSoZB5C",
  "key21": "3RirM84sZYaijUstGt1RVurnqzwdVHwb7aoc7LhNJ13SVWPet4fVmJALZXZjg4PJhUvBSnJiASeqvEd55QJbKNd1",
  "key22": "4WSNbFwBGpjm664WuMF9mejzoqp3dqGtcekzu2jG9kDQDLtnGKBVCak3HKWLYN8D5kBbmp9NtxNoXntP8TZtgrFd",
  "key23": "4w6ivPNPkw8btiFNaWkuviZrsjTn7ydhLwFYjfMAHQtkBgjaf7qSc9jaJ31gNuBbwa4WEz5gtBu9kcvaer6zXsn6",
  "key24": "5aTvbsnd9V4Rs8F2AQMreNjL6Rf3UhYhgr4H7tCCAx9iesSiWgspQHYgwwatbwUWrxTNyRoUorUUhXWVpEoLc79z",
  "key25": "KTEossNVzzLpDAZyydtkPn7QagN3zFR1eSuDnTcoV8sNdr7aTs1cV4J9deeTxwLX194ti3PmoJftW5cBc5EoKZ8",
  "key26": "wVjkgqE2VAAt2yjJsJMe2G3GhJpn8XA2JKr42xEYsDgcRRhRKLNzyevrRV3BtZSJptcb3Lk2yux313DPQQpxKZM",
  "key27": "FHMaCTNGBDH7hBjvUFQHeXjQjpNrTWBJo45HV8iFqhU1vDSaM1GDD1hPWXQbHqLpE6TmVFUMfs4ZhBxPTVGGiqV",
  "key28": "3KgfczeFrPEskHXwrZ2L6uT5CcNaEYvuxKG1ERAKBHzWrWwgcm527WvmyPB6Vrr128VQtvez3wy1JHYBX3KSjr3q",
  "key29": "2Vhpf692YNhG63RnYAnzpjQQ8XTbxAwaCg8RcftDCvrAjsqKjEEiiJ869LGs45d8CQrGeuuBwLpds8AWfiXhRK5h",
  "key30": "TQFS8YjFp1gQ8QWBJ6EC6iS7A5Mbh9HJJfYPfCDrhg8FWtMPVVaZUy29AXV7gvKDLuLrz9UTRMkWvTUenBks7yG",
  "key31": "4T2yMtZpBuu3TC2W2ipLB1Z2sqTyATNRNuSNa2xHEU2UsuVoVvvGhpk74X4tCZewV7dL5xdQgZFTFgh6PPontTqC",
  "key32": "2oxxiZKMpkCfHDML5cXdagBd7KhRWz2D81vmdPZTSLydLff2ic9gkWq5fKuycd8YUz3PtTEXnUVx62UVxrDwyPKJ",
  "key33": "5U51RUnuBNcNaZWTAJV1ze22u6oDTUvMjwX9tMQPADhyb3q22uKMymPQek9gRBGwmRs1r8YZZfGZuA2GVwb3vuss",
  "key34": "41pUAWiCohbf8RBsexj7QH7LwFyGUxf44cVaK6SRHnXvCGjGVp4tLYL2zXMcJULajHo9YVg4pUCbaz5MpWcbyCBh",
  "key35": "3xk67KsVRpHcaZSiPwbET9y9zQcv9tZi1m1ENn8HLrGKRzyP79p9TuM9qYikQu5bifq2c2ey4C3kiTcGsgsYrV8W",
  "key36": "2DRqZM3GCoZuSmBP1MnmwkM3nKGN8JLL3V7ioW5oyvTDWKj2CyxaT7LMYYV1wXxgXZzgzhBQK36zERC8u3cvCzZz",
  "key37": "2EUqb7Fs9MvzzkZgjRJCo15MDGaz8ML1Jb9ayMHT8C35GyCTSmExTkH7SkHb34LBT9v2xQuyojGeZTKNjSYApKKH",
  "key38": "4zcfwfuMUvCfKEXSmk2gUiaJHhqoc4QhpexhhdCXQ537iwH6KQTZ2U1cXZ6qKufZ9a58YmucrLhyDri45UjV8rLQ",
  "key39": "2PdpEQVPXiYQmUky2p5ks6GDwhCvA1rPkAR2v4yNuHZGhTCFPta5GUWn9T8PecRKn8Fz61Uq2FPNiLvnxEqibRXC",
  "key40": "38BmrqYYDd3YbbyEttRJkUqEcFuMpSVDpH5wNY7MdXFPA5zcXKiaj1U2VZ5NAm58DxPfveApYq9FB5MJdnGJy5C1"
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
