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
    "4yB7thhmGrusTKRmWf7UnxHS9YRtJ9XecsR7qFo876CvmL18RdAnkJTqfwhdQoaiq9HA9PNXCLWgGiQzLQtAYeNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZX4cg5z9o722mVQAahxDTE8o13JS5pFdXVhm4HAk7Jx6XUZX41wS6SySceBWYt1dsimeBV4ugNKxKAd14U2WowD",
  "key1": "2C5jFNtX5A6MCMwdF9j12xpsXs6vY36rcWDMkYLDuDxeHYZ1gYzretvqcSr6GDaNv8YtAWE3kuEtkEw8xR2nLuoq",
  "key2": "2DxNNnWnhaFg5m1jEb7yVGSotyu8SWXFughSqTLv1DMPGrB3MCbfFtEBYwL5qSQ9xo2HaHCWfgqZ4UcYk2mfkRma",
  "key3": "2aRZS1C3rKpgSUvh2XuY3xCcmA5AjgmKrfvgyG6EPKtHKV1UeA9EHgrYmx3uCWY7qhShjYPTb6C5v4yk2cyZqBcJ",
  "key4": "2QrBoQU7pBDi4h2N7ejHzT6HkwkjX8bxTQUEPREoBTMKycGwL23QcHX1Y5pcProVPYDgY9i9t4ygGNT1XvwyQWQg",
  "key5": "143K4o2xSLDb4Er9Kiq5wxtihULReDFt81PLuKeyzViMRzqi2ya2kfs1cReGUWkc8aAwQW4osonjPCUUbwGmk3C",
  "key6": "5jp4V9MaAz8GZkSp3qxDySGdCQrWNkCBAYqkYqWSiqBcBJCiMWuyvquM8aYJyAchCxv5Xb9pLdbvwvum7aRTgzD5",
  "key7": "ZkPd82ksguWkYLiAEBqrCobnz6DqQecnjVGZswoWyPQcWcK5kuc7Apb76izaZJBpw1H12rjCYwj7YdTAaiwsFpv",
  "key8": "54cNcLcewSRjfCNLV2q3m9mK8nySniaUmQrUUzqEb9ksktYW6JDt4FUpLthUxHbxRLja6G9n2vF5pbMA6ZUxoBza",
  "key9": "56F8aCtmkhd8uS1N2h6whZDHphN1i4hpbPZxy2yod8f67TiH977DgUk4ZStX59RyL1LJ8GtZYVHmtKBamFXH2qvh",
  "key10": "278XTmcRWxQhV7EGBx4iC4mUgQqwxz3gNHkL53Nmfy3HFBCBgnRcwu2hS8u6uFNLoD7uekgG961FWcKbcbg7zDdE",
  "key11": "2keaEsRAGAZiS9anqvdq2GNh54DWaNK2295Y4DAYN317L5LptLaTpeNueN4cbVcHLBv29wSUD4qcG84r9FsRtbZb",
  "key12": "2KutFULm5K1hercZkPR9nTwZS6X8LvKpxhpSoKCciPPwdAh47rJgdJUedLVzZhvf943Fd5mgvc3cnid8jpMrXh85",
  "key13": "2mHDLsg1FbNMKxZ1WNUKfH7PudZf5FMHUq3agujNQ18dihsfnva57qpj9jeSx8BrEec7TrFhP9vdDtbfXrZGahSN",
  "key14": "2q9nfbFPeqqYj4Lt7TvQGNmszdXHoDSV7BKuc5T6tzjSgEAhb9wyVPLQwEPgdTyhM559t9Qfx8SzZfdsECk7BzjF",
  "key15": "5PUTuWTQa6joPEGpaXBzQtXqS4WUSkerJrSXiyD2o9oek3egxq2Socnzb37bG8W7XnWLYZpBNXd6y5HBY5cL95QZ",
  "key16": "4UtnJqLWqDLNcGd6Na48yXvj4tjWBPefQ7xFSKkjLs6S46hx3UQ23FKRQ2RfRzMBd9ao74oTduzTjkCNdpBnwPLF",
  "key17": "4mgED43Kmi6VSCmD5D3qScaLjyiSiFbwJFmWL39fUP6Hwmw4k5bWKV4p1CiQb8EeysBFmteksJ1ddPxkBnJFaej3",
  "key18": "41q92ur6bNHef8vDdoE56dyBfwUgRuAU9Q9gDmVQXRmUZa9NTcS6kCqBz12HRfDfQbkH8nPZ3EwSN548Rfr4ga9f",
  "key19": "2vfiA6FAnZkExZ3PVta5XVA5kzZy6ZWwcZMFmBch5HJrfQfX4fU6RTpjDKzYDvAmnyHaJzdQotWsmT6mGoDYaQ8k",
  "key20": "2h5vFn8baf2Gc3ypkpE3vwj136wFaDmMonZpo5XCk3yzoESCaa8AAST4yZjdU7yXNVePcddc6taAZE4CyYDQ9YUQ",
  "key21": "2dYu6342dMYwyQ5ZqBPNZCBdS5CaQpv1xe7mzCQuoccLSuLCM8znhUFbPiN8xUam7dX42PVTU4ueP2UMmpYqxwjR",
  "key22": "4qaTYbVAfTPWcV6pxELSVUXiDgw3fo3QTVPcFpCkCm1GNWnPuZKaBVwBBVFyAEn9Jfs3zkquVc19bJLjvXXfr8pD",
  "key23": "5Lvz4q3AxWbEM3cpxt7QHiPouRsh4eqBBwLRWw6je6uJ3ZFbfnTdfVKu2qBAJaRt9juBzNJHbfQLumTtyGoHp5Xw",
  "key24": "5m1TseDZonFXYzsr3996pufgUeZywAf5JtrfuQvfkPgwJiS3x8esqf1cG1uW9XempVnU6kTqaU2KRpmW81JwLjZr",
  "key25": "qVQJ9fDfP49fgVkmxyYYP8f9VUsirNBgoevF9WcmzVRUkTY1VkiiP3o9wek7YBaxBk8peiJMSeqCqeTLtCSWmwq",
  "key26": "4AzXd48AYPcZuUQ567onrgTEzrQhEmDNGQKPHJXZisa5B8GHge6DebRk3j2BsZyi96uttbEn4o8YrnwaHRASDrFh",
  "key27": "2gZz7SZ4V1Bs2gRtYjvuEo54fVUMP5oaeMfRtbi9mdJm27WVmr2Zh83vHYTMvhg2x7453Zh5zoMcRpx5nBnAPmyu",
  "key28": "3SzKTQEmY31Z2VEwM9nrRvGyaUewm4Er6fkQcZ5c6ax6sN1gYxfM25k4Q7ECEHsPZVZAjLw9syy5Eoe4T9BHu3ZV",
  "key29": "FvuxTBjiaKXkXAukxXXsg9Q3CaF3sEaznJwMLxnStatLaWMiujj3ZM34DeeQDS2sJxasttczuDrwUnxqKsCL4Xt",
  "key30": "5h7HZ8Jzvo2hEsshVyYHuXvbLdBHUDmN1ieNbHXTxeskQ54WZRpQedGqHJcqfQxpm1e5fmAEf61t7pmjnJhErMg9",
  "key31": "23tDwHPBtqzygHMToMUmRD5XkNZsXHmFyNrh6KRCAn5E8fpyNsFyJxtsv9iqHjVjS2gnxrRWAxTg7h8UoaHth9xd",
  "key32": "47tbAtKQjSBsuD9ccD12TcHPCBaUAdAnWemVydWa2hFbRarNcDPUPCDNnBLWukNE9r77GxzMWqFvF7rXwKgC91VW",
  "key33": "4SpJshWuYh8U7PeTJV2k9cXeqskqW4sTRjaRrfF9sL82wrp9gnWn97PuqmuHEjNgjpwacksFWuxBJi9QUK5dNvmm",
  "key34": "4WEZFeQpMHh5c3npJcca1kaMsukqtK9Zbi1DsmztZyUkjE4LGq3s7a9egFDZ6JAvycPVBner8pBg12iHN89nsnvN",
  "key35": "2MVvd3fCTy6wvQFrhwQugLWt7uroPnpEnUMAqhXPaW7H1AVgpr2cF1noJbFUCscvjFJZrF3SV3SMMVpHV38Uqw8K",
  "key36": "5zSxzn3MLqGuHP8oxjtDLBYac7JM9kBib1mwFTxAAzXqgL3mRRvrkfP2sBDjppttdpApbUbNzAQ9HChJLqxfdYoh",
  "key37": "2D1M9QjsAjteX5VdxVmmjkNGn4tit2wMPJXC94vYrk2fr4siButvwd9u3zoD3jW8DcKWMdJg3wQXGEZFWG2aYwKs",
  "key38": "2ou28zHMuGq9jT17XLwfsqjooLe1zx4qrv7wtyqJtjLcK7hv1Wn8TD1MnRhgUeYwZ7BGNwn9HsjHRpdWWUSeYf6Q",
  "key39": "dsX2i1gn6F1pkkS21ikgLZfcDimrmk4rdcM4qfMcyYxVEqwNmSkGL965mAwwYgtdjuyRQ8pR3CckiYS7FHxtqi5",
  "key40": "T1dYSyRRrfY4XTNSfEK5tFjNApJCmASsrFxu9tpNzASEKjQUsSBvn2XWrRNj7M9DY9A6qKZm62J14Y44rhvnzXm",
  "key41": "Mu44pZyvjFK9LX78FHMifpoH42z6UxrgCWz8tt4u2Sci2duzmT1YTUDshawMfa8sPApSVsGbRJEYdh1j93NMMPH",
  "key42": "4ChAZ1rtsZSQZMqR6KkEoKm5yMdo9cTZRFzHfLnJJDM6tgPqrVWUhGQiB1GVWdAXxFUxCZGo2PsD1fmTw7hwW9rJ",
  "key43": "2pDH7ri1g47umh2cyCyTjspgHG8sE4edfxdYD6iTSNtYcG8VczVH5hQbewWPakcL7gnKaofim1FTrWqvkuiYBorE",
  "key44": "XGzoMPtA75rkcwcM38osqFvJMUMbqNLYDexH8LbX6uVVEc3svei9kn6PbKN9QWmGKejA2niEum3UR8KsAALnDcv",
  "key45": "44QBeDesrkMX9qbPcWKxF7PsLHrS87drwNNNaMPwWz2B1dBxDrsvc4ppa6baNkAaHze3NyTQeXsy4QiNSSmXixcG"
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
