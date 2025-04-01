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
    "QMTZrEN1YEwYZFSbFhTPp7QDqT8amXvvF1BL2EvakvHTMgyW9EiMHapn2EGzHksQy4CoZCWLDVswDSgiZ8yEYNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BkkJneDeuEBkPKoc6bUKV6S2Ba1FuJq9DRgBoaZhQ8MXEz87f57rsjjGbKgx1VCeybrCtVuYhTkMJ36hzNMaAqY",
  "key1": "4Dh8Wn3EbUtcFJeJ14W17Yixn4RyC1zy8YH25BmGWWizHuLvRHxfFxt3dLWMsFL3RrM2DDUnpofbrinnuZAwRCPp",
  "key2": "uhiYtcm19DfrBVSj7xanccWVuYW7u5zek4h5r2sVMYsmKMQbrvb6CB7DmKXkTAT3tM2Y3fTAYGM55E5AVxN7WVv",
  "key3": "4KQomr4NzMT1sp9nkjRuyEYYQhs2vERTdtVPatFmVfd8yHKyKxALcg45ABihvfdCGCTTRRhcDBmLUCA92B5JgA57",
  "key4": "2a1vA8qwN3qWDViqProcL9dAcAHcgXnm48LiMgDAtWA56nQvduw9cXH3NBq5DXtGkZkxDAP35em3fCB4KDSZjxBG",
  "key5": "2r1XrBHYhMvQMz9mLCta3dV2VjJw22ZevUHjxuQ4V35M9URX5ihFCiKx1EhZTWMPU8d8YpqBBqf6VEkW4SYVry99",
  "key6": "5QmUNxe43C1U3MwvHxf2xuWGb33KDs2JBnR7EfLMqzTuNXSPPXj1PQSsXa4oKYxcjAeNHHWjXvhbtQrncLYyUKhX",
  "key7": "4z8cJQccKtoXztc8VXdhagKGucwhqEYZNjPDvFpGgrUBxU8Tabg7zzWyTXjqJrYCsupTJqaL9QeGuvC885MxKEZU",
  "key8": "3Pawat9NDVDe7bT4YEQ2w9inmGn2obsz6L2insX8bah7X22DHxpCrq4x5Ku2QRC5Bb26B7tDMGW9c3sN2EQokpqR",
  "key9": "4eYfDY7j3rvV6ss3xcjNoQMW9bpranuPgaq7TFWj7PLTkwbaPVfCmsrC1p96gYwY5tB18Zun5FHEbtkagGBJq9V3",
  "key10": "2o7eBU7nmwAZ8xSNYqJs6uGudroVfiWUPqmXEVMBQCfXeF5FR6uN5nishnwzHecSNiVAfVYTicYwiLPV2bMRkGGe",
  "key11": "2YBJj13DfCVsAFvmedF3VQdBrb9nPSd7wbKMdUQ51Pgi9coJQiKdLMaW6V5aFZQ4GofWnEGEDub2FVriuwPxQkm",
  "key12": "24i4yKQZQt6BYyGk4ywJYgHGfvSDsVNiebF49Yi5B1xt725WncvdMgaFLv9DLd9NNVMaqcms24jj5dfMVcDRfzGh",
  "key13": "4gc2zC51V4k5mJbneXNzeMn23cgVih6AZ2jDmj7WcJenNf2saxTZrtF6Ygopmr18cNwdDp33mPeUSqhZ2igdtDGt",
  "key14": "sUk6F6qqFWzjKExpRWF8LKSWumpG6fRAH2e4h4nxiN9rCf5Hgu6WkX4kVxhSn7Y3bThGUniGBTWEk2Vp8t3E1sK",
  "key15": "3gaiQ91pQcza2SHk3xZi8cbquwwLRqMFaGGtxAD2dWPT7j3ubbzQyLN5S4uzEj1L2654E1P7Vd262yJ77jDvCmzW",
  "key16": "3gakdEF4zKa4VzBifXMKe3qs2PG8CZiYkckKgFVwwyNDW2bSLnddjy9jXEYtij3mvuHBC1fTVaJ39iaSycBoZnKH",
  "key17": "4FbgSJ7yeJkYdaJkzYVtCMmwhH7k5JUpkrtopXwN8uUBLGwNoAngmJ6Ge9RzaQcE1nfpHJnYWRB5UUXGftjWfWTp",
  "key18": "H35AnaDNkXX4tdcrpmrJJNKzNaRGz8aG9d9msQirF3FMGch4GnuJMWLGo76NcDiX63N4Jo7Xk1o7zfN7qsSmgBo",
  "key19": "5umYHyTx64Cm1kQzy3gjebGQGijVL3rqmUjEFY84gUJ78TYACmN6AQyBvbohhvCUwcRtpFVE3GZFiHRNvNBvyHMA",
  "key20": "fiUYAh3BMKKjs8NByRBt3BLqVGXhSPjuLeoCKU4bL2A1kpWXR4RwPeTRHkwVjq36kamkg5PcCAa2mMKrMSw4Ue6",
  "key21": "4ZTDmgyJhbyXT4kKbLKUd4PVcssFzqCfEA7LbSjt8kUqL9tXjUsgsGgu1eqMoSxYznpAcRcQ6TSYdXNpKUtHBG5f",
  "key22": "3LjNvcmbztQoU5uyCzi3PSkKMree3C51QPrXqtzap5bVgSYR8HZ7Qr55t8bBGvXkajsh95jYw9zCueX9L4SPnZKV",
  "key23": "2iJkJgDPvxy4RwRCHsWnUmGPacHonX5MDw5kbTjwfdHHWsYF5x14WfrU3Crs77v4JMn3n2fiDXoB9mBaTj8yv65m",
  "key24": "4uopAhRP2jt8757AR9MCLDePAaHmaXjuZvgNZb6XB2KJqBWKv49LvHK5JEEwbsTzoXWsDRTzVC4tMxKny3JF6xPq",
  "key25": "3sbASMXkYTLRtJzuiGmETxrugdRu3kc2c6RC3VW2NuJuXS8boH76EdRfGhUwVoVpQaKMRKCwPCEKF71r6U8XDWxY",
  "key26": "3kp3gZsKuUKS7Z25Pk8zPAbpxTDRX6RYHxDrnUw8xN9fHPTtvwpDnFbEA5cNJDAjzK4LMDkKrPa5oc7rkg3S524k",
  "key27": "2kdH5UxfqXsmcG2BoMVm61jYUiEdy6fK4Shji31SichgqyWntytcGG2x9TsJaoPsXUwiig7s4ntTgz6L3iDXKHVp",
  "key28": "5286zcgM5nUKhJu5FK7owrL1XvwXjE8sMbmxHyGEKPaA3t9wkuApbrmNhomXqQJoFQK2yfKJcQbnBwwJJ1kn4veJ",
  "key29": "293oKSyAAL518J2PfmFNdsTJ8igrVoqWS6dBmdPF7T1Nr4FmDm3SQNJEgog15kqDgx4eCdQ8UyJrJAKVko829FsL",
  "key30": "5Je1oDidEWkqeMZ3LdMwSj7icJurnZaEGh8HYFTk9J17zw3CPYxcnhCyGJfvoufwjCk3r74qFWrp4efedCTsj1J2",
  "key31": "3Q6j4cdjrx8K3d9igrUM7ZFwmhoACnU86yEuFDwLLuzPD8Qyip4SPVTMLdM7LAMXebs1KSgptqtN9CWPRESZshrM"
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
