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
    "BJmdbWAhmdVsiCrXx5GZDnAAAcKYAeoU7GW59RTRDBenvrcoSqe4se2xGRbHfzqmsuKwCX4wM6aP2GKpNG3CZ1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mBsaat72LpzD6LybXQJMzpWJYyPD9kuhNoaRqDWKwpNvnjDy3bCp3xhGCCustFo1C9rGjszFhsHwNMYXoRXpxLD",
  "key1": "5LWd9CHMsEnnXXz7mZcDXDieLhxu5LrNusTFniFsgCjM6Xn72SCprjS5FRztfH5gQztegu6mA5Yw76ppZmCXpUwd",
  "key2": "2qzdxQhGYkpkFTfbeYQEwxGo21uvKb9rsCdypa3GwsTkPgshTtb4A72G4sggQ7F8ZRGBB7puBHrejFzxrsBbPwGV",
  "key3": "2KhX2Rwt4ghKoMHHzVArHgGu7sasRu4cm6LEkFQpjYBMx1rM9vN5UFJc2wZWoS35gmgbq1tb5Esi5AKYqhE5rMHL",
  "key4": "4M73maDyhUkthxyQWpmQknZUZdhMfgrPFxB5FghUkvUUzTvNd1HuYjmdyvZ9SJ7BgqT31Si3y8choHn7iYmoHgPz",
  "key5": "31yi11SuD3NydQHCvRp96tpcBN3ZmLBq9gKzSZGCdnsJbQFN9PFtaCtTvDEQ42GAbJm1cZ3uRw3K1CRFoCWeyiZG",
  "key6": "3jJML7gTjHn4Y2pLZypxRtHwhGmcfPrq8t7Sckm2BW1qCJtRcJDSYaSqXE8GtBhvJAuccjeYSkBZiABzZdi7iLMC",
  "key7": "d7VJSjnoaqErG5bPkLc8vCzj2UnJgRyMaaLr6sNrn8LSggeWUZP87pJPt9cMcPMCnescxpKPgCvaG7SjqE4LBN7",
  "key8": "2uYQ5LxBLsLNJwPaN84zurmNLPL5L5UWbPM1NLmwdMsdSHWB1PvxaBprGoDAp8mEimqsnKFcDpGAWGra9hxxKgbV",
  "key9": "58MSMa8FRNywe9iMMGUbnXGYhSpcEVdVKEUZu4v7rJfGZMSA9uHjvUJRVXQYQTekCB4C2zg82KrCAxVf6Tozqhkh",
  "key10": "5dVbaSd2JY5cJH7Ty1C6CzutYjqPwdNV612f98gD5Pd7Cuy1kmsQDJ8mNv9BUviSq9XbvBQk8mLPsCwob4wEsAFP",
  "key11": "n1e1DWXgaH65WVyvGSWEu6JfJ7jvoawuzy9ZAQe4bg1kRZhWDzK7nvtt8fYJKCc1hjtRcvtadbVwrFzB9HFjm5W",
  "key12": "4mrone6FcaWNURM74UJaSE4N69kbEMxg5vBLUr2mK55GZbNeAF9nME81Hss1urNb56E3YiSXgst465Hay7jLHFv7",
  "key13": "5zvKCfe3Kdh5P7CyFNX5Y7vhsRPcfPQ43p2uaNCRVoxr6TSCa7PhraHs3eNuauDANfhY6iV5Qykad9sV2qXGm1FC",
  "key14": "5FbQbJkwW6s3gWF3217gEt1WaGSfk8qgG4pbU9YukxBVC4vaohmN5MeHosVn9f9vi63q2LiL3yuTsbBQHnizVto4",
  "key15": "2GgzFC1bvquJ8AhrLG5Vd2QqzR3SfjLpK2vPfz8piBJjtFLjMrfsjHikwf2TyAe8eUr6k2NgX1ChRBiocozRwkv1",
  "key16": "2w9e4J4c5TQtkDieGtqhZmS5qQQXQREw92Dar81T5B84C7S4hNyyt3TkMchf5zTgnoFv7KDSKAGgAXe6yFYmuskp",
  "key17": "55KYB1DoneFHv3duPJmsKDKGEKs9pog2SpJWHKpY8jr2F2WBQKQ8Neyixdp6tetYC5QWjrRUQZF9HJR1LpUXmFt4",
  "key18": "4NWne81q4CXTJWhGRHSTYkPBq3scoHpxRcbEQGeBXimKrckXqGWd8vfr7RD536qHBqH4v8BjL2pSSGBxvLGpLadm",
  "key19": "2y5SmmZUYGiVjmgXGrS5RFEY3XcauGxSM4pigpXKtr5BEe5MeNxTCAZVU4xgLoebsW6SPbgL3CUK77MvHgkrJNWW",
  "key20": "44t827AoU54oyD8K7Ryy7nzzmz8kAeiM1WP1LszT8onpyr9LgBDv4SSmPdPGuAbiUwUjKkwqS1T2xPhqBEEHiE4G",
  "key21": "4nsuRAY8LbwHcQYJSSzmV6o3D5QpRwYJX8wYycSthSK2f2Mg3GNZetmeceAvTHzpgrMRGrfNbvv5qsoLAWCUsxgU",
  "key22": "3qZgKCqXfux3bVqEUdZ6V7vqZthV8yFZ7mXuxWTPd38CWUuwtB7JWsB5bbhSQ3nGA2bQ2egejpgK5DWrfYWGt4p",
  "key23": "4vSYawZQJzroDmG6BPTTqkSDF4dL29Veiz1y3FjbR7eY2xULxJJUy8BWPi64Zzh2VmDt91Cp2jgb88NsBZF6kXXb",
  "key24": "5icsQyhx4HNs74qyBdG6Umy487WNkP9RPJAgKGNrPtBhWNwLSqB3PphRaQy5DQofbFiyLgs4rdhY61AXtBkxPpw4",
  "key25": "wtH86SYYxBanYraAdBGkgHJj2DtdmyM1jnVFha67DUv1iXWvNi7VzcBo9ho6VuGPomZ5rPCL9ME61P1Jf8dAq2B",
  "key26": "3VUYoYWZ1xtrGuiBHhk7KQPxKh49MCkH5ZYkjoasJErBhfzLvP1Mfbwx9wN2jaMfRC9DnyUmtR2kMwR8eW5rZ57K",
  "key27": "63wuybgS7axzEnenJQHZ8ko9s4eBPeGH4uyDvPgf2YRUJcQPA1i4MCEQi7KGfXBcsD7EMybvXkNfMQX8CY2vbuYz",
  "key28": "35atcX66Lz7soWeRo4mP4FrHCsEoWgtSYNP7MtCHE7cKshCVPYrxqh4CDtY4Nxcxk5Wa7Afb4aebEusDcAjcpqPL",
  "key29": "WU8dcrHpYEnt1YRVcGWfGr6N1WJihJWHgCYkop9h6uPZ47kneg17VWr69VTbqZhgx2NYxJTtxFHbNys2tH1ndNv",
  "key30": "2bfHBeS2ehhi4Jvz2rU9YLN7Ltb2gyz9VNFwhTKC68PnUwcGpKXAPaf9wY4No7d42pECL8YRayDGLZESbBhduMBv",
  "key31": "3VdF8Lc9ue13CdGTQWgR2t7CYaUmkK1LUVfeBcTfZXj8HVm5fMpzomB3AahNofY7UbFDYKQ85eYk5XjrHxy8793z",
  "key32": "4VA6u97Ve7HAJB21pPqd4Nf4Wpz4iaLK9T99Z78hHBabk6m69aEZsfyExiLZM5vNdrPHTGgiHPwTM1xtsSAd52it",
  "key33": "sT9WhwMnqAPqVYFEgDRPnKUwFAHWcrCmmcBV6js8zpYFPs2VqbHG85CPq1LPb84ds3HY38JZPXgjXhxeCVPaUjQ",
  "key34": "xEhHBXb4HXogmGvwpFovuBBCGfDtC86kv7sxbhU1Pc2frdk9i7sy546FLLqB94mknz1VQtupBNU8KWhayquTziB",
  "key35": "4dHNxsCLvga8YgQZBG7wiUZzivTLSNAdx359zLa4Ec3sYDz474MRK1rbooGsh6ig6rnqwj7gmmsLVVQkJkgDvett",
  "key36": "2kgKbyfZS5fcSYgcQPCKv8rkhtoCPrN5auekrb1aZ8cGw6dqWhPnPrRBc8Tc6HYoA25E3XbY5bysHHU4bmNCuGUF",
  "key37": "5SQNCgYQbng3exWVQPXVgBaVqRZBJYBSSmGbdNmSAc8eog6iFHBsf55xsDyxWq1rBvmZps8uay1Hmg7XsUkXQX3Z",
  "key38": "4dap7oSTjXPKPuTK5jQYmLGuCTKBtguU3zmem9PF5iM8Cy1nxm1VTTCyhZNuAR9RPFeKf5w98insdekN5CmKB74L"
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
