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
    "3aRsK1AmkR1hYYxnRYEtFmSp7S78xbwhmiknjQwAZvSVH2Yih3JBXb3iQbM2FHebSsbUgACChvA6gmdrvLn1DcHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqZFSLqcQ2uEGmjCL3tPUSw6Jincavjs53DNFfMAZaRn1iFCrJPLNEgfzUo8qHMzVTX2Fi3H2gAfBYWyFeedpwq",
  "key1": "3JxxXE26Ty6cdGbjqNFq38rdPKi3wEJsWxjjZ5a7f9cvgWDK1TNtvB81WPyE8yEvnXdf7tXtaePNh4Mz133XNBR2",
  "key2": "zx7Q6BN2WnR1VcAMCEJEnp7cTbEFFcmGwm6RnFvryvAr24KaVPAzewgQbNEBFaCjFW1xzrqCX4zVW2dL1orEhUu",
  "key3": "2k8DfVWasQnHPsY6vD42dqhqrhG8eXXJR3eexVEgSEjkG8w62nNgzGSuaRnVdtkCgQskYafSCuvNTvbEBwXpUR9V",
  "key4": "2TtzfL9SpUcVafTtGDgp4YiGdRR6Rvg1SEFhvaJhWCd9yR5qEhg5rMPF2ijB6DUciRZHHrBqqZ4S7ymwCLfUYxgF",
  "key5": "aesKU1C22ihHXhnNCJkMCwcUiF56f7VQbbudu2suDcXxTPQuCAezSYZVfV3ffssmnT8NnuirkZXeTarCyDfWFTj",
  "key6": "5CnmReC3wMyrYgNkcsAMZ75FSqTNNdE5QgBwqgRyFuw5DLsfLDAyn8q6Yn2UXA5Au2n1qyEKDnaR2A24i3WorTwd",
  "key7": "FyJY8W6aGPV3NiigmxuZ8oXHdgN6aGSW9RcHvXWYHpiWB1xa5wVG9MRLp6HU2DQXvpF4NgVbYu6QRcxjcwvsU4M",
  "key8": "ZGug2EEfyuxdp8bAEGLNrNSmsy1qzLEZcxthcf9Vqwyu3n2m59tnv2rDSL2q33NwQZdqCpgoKws6utoMezUQKTw",
  "key9": "3enwkYXWqong7n8WeEDLxZe9Mq1X1jKn5EjYRLRGbzBQvZxoN1tHMfcQv5hJZqQhZna1x5m2kNFPrZGb2fhKiAfc",
  "key10": "4keiNssyWpBa5A5MYhsnHhFvRKUYmxnaK7jETgcHZpTkpVC6eonPCCnC2XSgSwMMt8wEoHNUP1ZNeJ9BMmsaqtUQ",
  "key11": "2NzWdUP1unseDyCQdwX8S539eNWUBdT2AtpQWXUhLPw6rtJYam7iMAs8WL7CXMtHPwwhFVhWfd8icUDw45Dg3kL2",
  "key12": "2Jc7X7nrLEcmeQ43vHHPL66HnVyudaZNS5DHqrjiDWj8ZFbECMVs8sbNgVciRb9YgbwMCVJ3HWQhKwepf2Ra3t7B",
  "key13": "4hsmwscJZHmtaKiLwWw9da4FBciPyMKbLiRU3bcxebYW8nM5DNZeMEyW1pR31iRWy1Xe187FWmRPxMiJVFVk3ccU",
  "key14": "5erzcCGefHGf7y7mBVrBsotfcDqosw6uUwcoeu8MCSkn94Ui4Qxx3Ct9UM3xF2HweQ5FqQTLUfjK3BMohamFkLwL",
  "key15": "VnV32WHUB9AYxPLZe9oVBUgpTSQV1MNioe5vSonLBZ4XVe7R2CAX4mdWbrY7Y7pohEjwu5hJt4XKLVz9frTS38j",
  "key16": "3iYA6Ci4o5qzLZNKBV1cwNu57dGYPHpZVLGR2qqWdbnXRgv5BMhKr1qNBrsVDT9U5En6wg23gbwQEvEBzomr7X4Y",
  "key17": "2mSpmg2k7kVkqzdqywuG4y4s4GQTjkocxV6iwBKuJWtcG8L1An6AbH7e1nAjr1UAxnBtrxUjmsKcqkCsbDGTNUA9",
  "key18": "5aEVoUU549d447NVKTGtAmnGgAi97CkzGzB73pBSYThAFJ2PNPQFbdiDGy7ReyEf4zUyTZ37btBYsvh5EQYLqQvQ",
  "key19": "TmFWYESop5k39Lxfrm4x7C2zhjBi9HCJLs185FiZ8ksifyV1YSYmZniq5V51brJnvuYtouoSrYU6RxmM5x9Ewuv",
  "key20": "63oZWVhbMTEAYxNcv4DhgPBq8RrkVdFDeeAYoC36FkEH1u9kyfHuY4BruDccgFur7PWz3U6W91FjV6sNbtei1CJu",
  "key21": "261Ap7uSwgALM5gaMbdUTXJBXmK1ivwhQQppBFHk358SdsMcC3wgdpVvGa3KG9T7fNAnjmAUx7EDyxnDtRCMRJQd",
  "key22": "cF183bC9YQrWYihQViGzRAXHGyvdUBMZQyD6sxPBoGYU9r6gsRutw1JBRX2MpXPPKnNjAt9ra59JCE2bALERdXV",
  "key23": "3SRcVrBt4WzAwdGN6HozeuZSHXR7XoXrGgEeLvXauawWbkGRZMXMX3Ves8DLGVi3JQHUCdYwcAAk9gtecsRLqbUR",
  "key24": "8oDHHHECrF5MEqRpwnGzeNUkvaqh86V2iZvz1dFd34dJPnTTx3MCPjG4vqaUmEekZXdAkojgL6uNXhzzyQT2ZyX",
  "key25": "58PKiZBZiwBmLZNdP4MiQtLRuHxxKfv7rwiYbT7eL2nZgDya2x3SB6QtvsCCy6bzL2xCpvv3hjvJi1sN7dfmRhLS",
  "key26": "5NeGWZo1rLWaZ383Ntm6Pq1Ss8kRCKSHXXbZzxhurTucfNBu7EB4qyRVH3Pqi9SGqfbhKoeRvjueBEWmxxwbrdSh",
  "key27": "5MLYbup5ZkCJKMDkXBJY1yEwb66Xz88BEewvXAsbXfAtf53QDL6t1pj5rixCD79GKVDmVHP6nL45esvt3YsdWaFo",
  "key28": "2cbj9rS4kD37UbzGWFEfoH93NheCusqXfykvsoJYKFBssCWxYwZJ17fp5bCCcfA7EeH63mSWnoVxF76baxt4nYdF",
  "key29": "2yDuBMYX6z5b2etUUW7xgKbwpyYzXYjctNn636qXZ985n7Ch5McTHM2v6bQEkp7iktfeoxVSm2c7Mrxz93nEuM6",
  "key30": "56Kt6JBwXPHJJTjPW4sGKdyvNmDK6nibpGXVk7owrL1Kw2av3z5wQZUjzRLhmm6m5e1JE61NzPAm8BaHUEgXXHVw",
  "key31": "3FRDdTaPDs9XKmS69tHZAsS3AKvzbzvAGvcnES3D6G4rGDwyZjp93nbUF5sgoDJtxvcuZZgDpZj5x1nKT5Te9kZJ",
  "key32": "2ySudHMoWPZaM5Q5CYgeKYD4kYwXDV2PnsNSbtUi5AzRN6tiQH1NoL2x2hWXXb23T6ASrs6Tufz2dK3r9HdrbSoQ",
  "key33": "oo7ZEuKy4hHkEpmRj7MJYgQaSRagfYMCGfbbd3UPPqZtWRBYV96b4PSVjjh1Kym9hroEVdpNJuDGdzgBoK9DcXy",
  "key34": "5PUxBW4KTY57cfcFApqRxN1tEa8zKCvB6RobnL3EpyWc5uaoj2HxhcRMuRWhgPvQuHdZYqMwePdMjJAXK2D7Tk43",
  "key35": "5mNDpGTTK26KSY4QdVWwvs2GHyRhqrX1dJp4jxGChzkUX5t4KU3exfRhJLaZytYGHHh338saC6AZDUU9krtdvt3D",
  "key36": "4ha1kvnHVf5jmVfcfgxauk6waWpBzUxHeJfCs5eYDzZyrhRHgDJTWF7x1YSizvfxGP17eL5rxijM3cvHXjMUva8s",
  "key37": "4EWDUzB5f6qRoYzvnPb6GUXXEWEYzkU7cH6JFKecqSCyMQ68xRmWGQexthmMTNJKFqc3VUusm7mX6GLAp4sMWkuS",
  "key38": "4BxbRp1qbLcxtP3fevVhqkgE18Xvjx8N5z5siDjz3qyrggHYQLvK49R2eppuGHkB1eaRHCBAbLy3F6sh5hzBW5Qw",
  "key39": "mPp2RDidTLsbHfx567GeAAd7PwYVC5H4ioubgEtK26WxBLdtUtQcSrR2ULPCYpuRBuAS4GVFrhyPCBFpNe8Ufzp",
  "key40": "4Xy8VW5RR1vLS4AEfo8ebaXNPyirPe3B8QoV21uQMUPv18DA19MSSgHYKZbNzMhNgHgBSeq22YTzETVFUW2ahDGU",
  "key41": "4iFGgvgokXR4oqQYiuG2mTHwJvsuSC1MGWAAxy2HewsFUtD6uZbw9r6qmMPhYXegVR6n9HHbP6WZAudUxg4LbXmw",
  "key42": "5RZ51dgFBzu79B2ezgsBbswPk1hHfp7HdcMrp1BAu4XLFbdtTjJNfDjyc3Kk6YhGVqEQN7dGWv7wNT5bF6fVEg1",
  "key43": "4grsXMjiHGAioRSTTMt1jEqqbaXuNMSZfZXffG5XATATLh16Pt95V9SmbE4fqi6rFoWL1KvriYLtfgJfqsKNGzT1"
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
