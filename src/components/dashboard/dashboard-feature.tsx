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
    "3StwR8UDYk71qRzupg82nJ48qwUknhkZ1nk6vMKsnP8FHtyAerFoEnR2Xb66CGzJb5r3pgFCobyzaAxyV2AvNmNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HYoUwCYXbXxYh6LcK76uAADicEaggD12cyiZZzZqEKPzM3Xih5TEs3t5a29hiEYwa9EpTdAGKPthPiCdN8bZFBN",
  "key1": "2r7WucqVJNFkwCp4eZLGNJdcqwfCuLrdQQku7uwndbWp1uzokpwRQAZ1xvfuRn8hmSHBKh795rnbw82EVgaQXKMg",
  "key2": "43SgH3jL556ukVnRW6yR98SRXT8y9fcrMCnSRVduZfSWMpyUpm9x53jQkBhUvYCmhPV9cBSpxa9DPWx5tYQCFECf",
  "key3": "5EEFSiDnD4JZZaoYvWC6w2gpnVG4jsnnT7X2wtfyorZTor5R9M8aR49JrK68mCtL3KMSFBD6Pd7gNtNpbQqmgbkG",
  "key4": "2Vp9cMTpzWxy5Yi1kn4qnYqypHwMEBhLCZfjU77kKJ9CXPAu4tLjWEWdfwUkhwaNQLY6PqbYE6tx8NcR97MVsxB8",
  "key5": "e9S14i2qD1Tz6bg2Ej463xJeJxJDfQjeU8nG2tMESqDyBikCoBJF2TxcC471Je9jTNgiNV9VzyxAXLPemUnVVMZ",
  "key6": "v1K7ySwzXFN1kVCSrKnDcRcDE9H4KQMBoPYpEv9udiXB7xo7VApPman78i2bPLrdGszeKwdE2rAfT6QwyYHfYR1",
  "key7": "4q9nAJqE6DzGkzit2Zt3kxCamf7AR71A9Hxg3KzU7bYmb1KeS39DQi5dgXQJWY7qb1A186gVNe1GNCXKLDawF9ch",
  "key8": "5E7GE8Ncv54S7UusFiz2GFPKCfJXoyXhNF8o92kMmWfuTHKKSvboLW8guRaJgBJuY4sn96ttDWfx7N1e4137Qk8v",
  "key9": "eyNLmKvjuFbT4jkoQnPAkNoDdg8Wk8AXsh9vyemaB4hUWfZmzsuzYh2wPAG37ESv9zy99EQN42UzQbox5ZbxfUW",
  "key10": "5pPM69yqHYjFU3BgT5R4qxsdWZzC9ZBxiYgn13389KdfpdcXsriNhBPGKHojAtZB4zcrvidAKJXfmEs41Z8uWYkt",
  "key11": "5iQdzrRPBiQTX2rX5VpKjLmPc7WrN7EQnJXgJEcqdQKb7M72rJEmE4uhY242J1Brm2DdJLhzJfWYCZP91FL4MY3S",
  "key12": "3L6TLdTKWURa72ke6ruUDcBJfaT57BabyMFdXU7W91FoE7nV8ndWdb59RJAC9SQGi2quhPAEjFaVwg2Zp4KukaPm",
  "key13": "4VgN8b1TzsvbnywwkkHqe9CdGYdbCN5WmV4dUZMnzFEC8w6m7w5DTmwmSfZqzUyAJdbzYuHMzcbEgYLpshNC3KuC",
  "key14": "2zRB8gxm9uePMpyLsAU2cHEffYoH112Y4fAsyozjGQfhkXYXSbX9HapBhuz7eVznEJdf19si3W19KngZfg4mce2E",
  "key15": "32PMG4oCJGmabSA42Z77k2Gcu9gPE8itXezonRAACRHwAgFv6XxET6k6UyLqzJZp7ZzBuocGhdAhupAdc9PG6QL6",
  "key16": "2nL9ULvjY9BEdXRWRGoRBKzBvEA85qA4hfLzCjSz3rfAvxZUpS9WcGy3i6hfJyA2LhiJmpJuFTENG19eCCPUNAqf",
  "key17": "377fewigLuYzNWCGaEaVeSawKvnC2Xn7xY9jvb4GmGwZkY43i89jcauhLPzBhzBzDdT5HqrwdnNUdjmyxDUfjtin",
  "key18": "4vaNKAMg6bsRLGRmrQQGpg6dRHqFj9fjva9Gr9Vz2iR4DwUxyt9E5wyLJ9kTMQea7vyAQeneEAiu8oFZELyfAaFn",
  "key19": "2beMnUdJPG81wqFtwymT2AhTxc3WLeh9zNK3U4UX9qkmYWE73f59Cv3vviFRtWg26FyQ7WFFBCDnrqdDxbmUZDvi",
  "key20": "2xaFcLr5KRFK3EuiRkLL9r1155tD6hfj5hSZNPswoqyYLfScUfaQqik9HTETRBcjw3DLmbfev3pEFK5LQTqoQ9Sp",
  "key21": "2iT2VVhVNxNhjtRjebFVY7R2vxaCVGspbwZGiRbN6G6ja1Bh78EZcuV64K22WaKmuq6Bcr6voTBrqyHAPkecHqQM",
  "key22": "p2pmuqjLmqZFsmy7Pq4ARmR5W1jms8qeeXzAg3yPEnhVU5x8nG7Nx72CCRTSgn8MbQrQyEbMBNMfzd2NLVSqSwY",
  "key23": "3XbBMKndk4d4ggvfXVnMtT6gJGnAoUaquzfiDcQJLSnmk75rbyw4UuQyN7tHbYjuC7d178xKZSzYNHGYW4AcxS6a",
  "key24": "oSysoE8tjmzEGxnUBVXa7U3AqLPVX7WrV1eTctcFYgComc3sB7U6hseBHVFRSvZ4nYEUoxNureUuZKzgj4R6bw7",
  "key25": "2dgaKTtbEnWd8TrM5KMD2NNgbgK9r7cT4swLhPWPwaHSNmbF4QQGu1Xbw3zxGZED911tkVBfHtqCXh2Th2BaZ5uM",
  "key26": "2cMJTgvXWHCDEh7bbbzDTQsCorcud94jWmGuww7i4NXYSbhQpqC5aTxHnRgkf5nhePPzEAZxkQLvWaTpoomeSrXM",
  "key27": "5Qxr1zVyjWHge6FkvunGR43voenVTA3cd22KQv2gacv25Yz5kLrBwiPDVppiAF7hKUAoFWuXSfwt1uGG4KR27YAF",
  "key28": "5RMcr8dCs8TaR8yDRHjATWnLqfqarU6qbmguxX6M7Dg8wQpLAMrHLVXoJuDC3N46NfkS94C734VBqK2gt2cNXooT",
  "key29": "v82apC8HGv3hPCvp8avK4dQaQu6GRhxap75X22B8bi1eZbRfexooh6NuBr24H47JBNKnz4CWESwGxYnS9aSD1Pm",
  "key30": "24eyGuRvsYJXXCZRaaGBTbt7UDregY4pGep3YhMWgJ5h6sHWnc4x94gmcc9dbxdTh7ppZhxTZDpQooaeZ23tmTNr",
  "key31": "2ehztEApPFXPQ1TgAWgctVQTAgXbMYtsbJXbneqa5hrEnoKd9EDCKwqoeYcZcUPuR1BCBDVSygCvLt8TiHEGgKv6",
  "key32": "3kjfrbUWiNojzDXrNrPFtRrdYD6C8QLuuFoBTUZQusyqv52V4YwDM3Wj9Yymtzuu4fgd18cvqTJY6Jx4LS36yRx1",
  "key33": "4iUpwQvjFTU8DrMPUpnMHhx7bJVAcAhzGpjeejZ6WY5kS9q89PNz366TH9fEnhsLcy8PxdmnMv2fKvxQZCFWLuAK"
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
