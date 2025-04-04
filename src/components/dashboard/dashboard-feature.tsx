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
    "v845Rnnc6db1EAez48zM5Ldwca8mG1D3CCo4Xx9f1wJzain6Dm4jKdeRTXB1CRw3jnZYjXbTZQobaorkXUrtEzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4bYbbkCWxAo9dUA8roT6vuQ6LpM7P1bsgTfUgmq1hw44kpd1N5nVosznvrnRv7AeCnHtqfzzNnTxegpvfLH9Zy",
  "key1": "27SWLt9RTpgxmJWBFR22aqnk2ufJtTXRZ71kiEbohJ7dUF68eQthuWpwHhK2ovbDfB3vQbgNJmxeGKitDCmggoG1",
  "key2": "32Wv8CBeJ6ifhGDQxHTBpJoZufZa869R5vD8vGLevsmk9Kf3iJ9v91jMhAWNpoxJSJ6vKQeQcBW1DcmgTsLFu8en",
  "key3": "4xgAokDGEEALZSo1EK29Q3d5kq5FLPqqG3KadgpUJTQ7bfqinRUCgyAbVjFKjfD8X9ns1xyZRfNeQyfkv4hMMf2V",
  "key4": "5hBRGeZuRQwXqRgFnfZ78NR5DhSZ69Q1aRhRZysJYXeQwq59zRSx31ePjbScVxfiMCfFWRTVPEP25AJddZe1Pm6g",
  "key5": "2PKBWQazjBTBb7mUPVLFfyYMFPYu6UyVv68W3uNSU9X7cmmQ5K4g7RJtoJDY2j4C8oE49qKXarc11NLJVSi8UH7C",
  "key6": "2uQ8mHtPACJhyhedPRu9FEiyx1R6yCTMZ669DqEPhiGEM4hKqJskDL5TzcaWnfRyiMx7A8UwgDUZjy2Tmrak7dwh",
  "key7": "23PcPpJ7oxtEmMpKXsc62t4U52AWL5mTnsHw31rCv55Ws83iBTtbjjMzXchgu3VSeFvtynikh6LDSw6svmyo1HCC",
  "key8": "EJRJHHC4h635vfuSa2KcQjZHZDL4xZ7uZkywiZY2bPB6u6nUwt7qBj23KHf8foM2kfMMAXiMqtEVzUqB9R54mnS",
  "key9": "4B1vThff1Gr1Z1ZCV7daFZ1VXiHemJ7aZd1zCtzjg8Nsnseo3U1MuiHc9sznwSxWx9PQJJj9dhe4QAW1piCeWwAE",
  "key10": "23mwC5bJAEn8bdv2zXkMKnYmJuNxE7LJFsrSNY9JhWYKXwPV49k2YDxj7Xs3zJZjjrHPkGTqbPt5mTVgmXShyBnh",
  "key11": "2vF9xxBAS43NunH9GPRvJ8bVkkDKxf2ztKbmF3GhXg1xA7eFQFq5oVcfms2U4eUHnMNzxyzAQJdvXrrgKAu4hrSs",
  "key12": "5LefiTfaPEswrkVXGaoPFRkiPPjPbqH4DpzY7VvzQk5rBPgZVqV5idpNifiMBQc3RXn8KgV7NS7o9LmjepV8zji5",
  "key13": "4zriztnYZniDNHmemzzVTyEzkBs83Yoyaej1ETvCUjmCz6xsHNdybJrwBWDCQ5nw1FyXHs7n3AzAsUvmBtLkx3gh",
  "key14": "4YL7NNHjkHP3n7KnpmXz4Db7MfavdfxLaeArFJvr68A8YmnNwnZMZYCE7D3x5GNr648Lu8yzkD98ah54Pi8xpmxn",
  "key15": "39ghz7iSEstNNfJDDjbm9aoURc98CBs8QPqS9JA3DoDGjTSCtT9LwQadznybFWPW5aXonu9kTmZ5dD2rk5QVK1Gm",
  "key16": "3uQkUatiHoeDte2koZh5c5tVtSVdyrm1uYLjTZPMqRFYSLmUtsSDwtzh5N4DtKsFf6z1wYXMwwvJbgjPBRX1oSjZ",
  "key17": "497x4SrxpCWgtjiY2WDA5EiDuKj3jqshYUgsNWLAexFaCn7rpD23pSxRmHCrsQZ3fGFWZ9uDMnArNmwpDzahde85",
  "key18": "5mVHTU6kfPVFDUha9oaE8QqVK727XduNXTC8LMcVfU2QTWT4pPtUfviHHARoNWuccRuYYQR6oc3wcq19AAfxcBtG",
  "key19": "3VYepRoYYZYFAhp6KpG5uZJGwDw4geLoxNjET4aH8gFZqNeJRJerH2mhyi5eMjUYv4SCJrFDzswzj4Ke94TisNaF",
  "key20": "3gHMQ4QpDz83f22EHnDckdPPyB5a77Xb3LgvYEZLGngreGJz4fDztQrXytNkouwUUAN37gEf3gXQr1dcy3d2aVES",
  "key21": "2vnCiFejqcVCKjjMy7n7hieqdZRxAcnLbCztwU9ghcLVk8tEZ6cUPuhk7axYg8Ucg3sxFWwPu6anPd14CNwBeF4Y",
  "key22": "3naHVp7iSZCPeGyjHyEoKVFeY1aWbE4n3MGaPbZYuHaiAyBKsPJ3s3goix4tbrk3gEVd6sARz5ZooWnK14cCkYBw",
  "key23": "2MMpkGWW2ZGBmExCaxn2ppweMP3gD7pJrRoErkHXYDjtgnjJbYyd6EKAUYAc9C45GB2Ji16mLFfGkF2qwh5M2FGU",
  "key24": "4d7LNstFvtwtXUDmCLVEtgZZEbpUxBMPmnBJp1boMWBpW5NcbNFCznwUhi7qtrRKUgsRdQALeSiC9EeF4u3s8owG",
  "key25": "2SuGyDgL8ZBW8upLn8CvkChVb5t7hHoRzyYnTuux9SibR3dZLR6rV1vTrxyLN34UY6CjV527WV82bGJs5qg52jUg",
  "key26": "5VQBLTNHvirjSRuDiRGUeBBHcpKEExeXH5itLbk88oHTYUHTkTuEGQ7hxQQTUjiCn4wbHB4vYncBYuuBVZkBFSph",
  "key27": "g4FtwPfLu1KCuB4b2xo6gyTZSFf9R29ymgVptEJJXh3imCt9zN13qMGpGEJyxcsWsxpBpQf6LcjoStnXVMwidgt",
  "key28": "3QCxx7MoHueiwJVdsTkHpSQVEEdjqNrYTxekVsn5AjJCujiP9wKDEY8MUZA5jGxvipdq2VWjrbXRsmqFR1Pp1opM",
  "key29": "63mq5nQGUYak3Ufn8MRYvzs8MTyTaAe5BnXrErurjMK6Sr3TMe95azbbm1z3qjKCJg1KrRCRKP4GsxcoAodKdGPZ",
  "key30": "2Qve8RryAsStJjkTRRkg9fUbdSmXQFgGULa4g9GD6VSPpdQNBfSEiSeC6mZP2oxmrYasaEbcBGXy8F3pJDNcRTcT",
  "key31": "53whHaVQsSZufqw1APDxtrpz4QMwCox8nZW4qxEeLTht7RvtNGtvjq6r1jtZ1UZxJE5qnbTJwCfvnjPXN9Xn8FWf",
  "key32": "kb4Dsa2Jd8rGAqSikhPWkE3gC1bSiGXAvMVZkju9orJUCs8znfnDUM7AmCELCDy2E3sPFwKY8JCbNoAkx36KGYe",
  "key33": "5hcZ7Gcm7scE4eVif1cDFb6eYo8d7JfkQh19HkDhHB824PG6JV84DUpiFt1Qwt6rTApLVF68aBdLBpND3p6w8W4U",
  "key34": "4Ysx9DNYmkVPqGmFD9mrrDw8TEjFGeJPwNnX47Tkm2HWJDrcCYu61YT1Z9R3XNoJWtpBnHtjgWdjeqx5AdPCaD7m",
  "key35": "5CgjrU4jbBrQg2PhizicQrUJL97A2ToWx8Y8khwtKVcRmTTzeLttepmAdZjbbaW2JMLknXnmm5CjLnexQyJX6ovC",
  "key36": "BJe5dr15FSh9M2W6aA3hDVu2Hh5t9Ra95oxTWgf3QDGKZjo5nvXPpY8igZHmUP4AH6SinJenj1kjyCBe75Cd4Kq",
  "key37": "55PvoggKFZyawawXPZstycvxio6L9xeh3SBMJH9ALMksL8MnwgdfqFFeZrC2wZ1M4XsDbyivU6e7HWvAo9GUTfWT",
  "key38": "2QHKTCKUAQbdBum4uaegW32HoSqrQke9LcVtn5W2BxBjLKZSnfivoYKATJQ3wtJQt2x7GKzvd2QMnRRvvX7ReYfY",
  "key39": "3oSJxrJ7jwJoFwRm1rekeBCVVVivFgwQuCftpd6MPqhGtF1gR8yDuUiLiJFNo1iSvpnbpjQ8aqWLGtpbBF6JN5jZ",
  "key40": "3m5syjXgPbcbEQ7HrMhFGu1j7ZvqFMwcv9qFTfRUYkVxjnuT6adQKJaqxvTrfeetFjak56k3BD4dp182HNFD4VDQ",
  "key41": "4RF467FSsq1z5hkroSCoxEWu3NYWLSy3gae1xn7XR49PHDqhpeDAVeyf4sN6777j4oBDRwmsL9nCz2Swmq3oy7oJ",
  "key42": "27VwXhTucvDTWd5abyTtRSs42ZfVMh5F2wsF96YcoQpe12jt4bHYP3EcjaMNNY3xYVWZYRWWZEwjaJqtjTUfuhcV",
  "key43": "2rzjujSh15BT2M3NJb5azJ44kbdd6cC9ikCiLQcAmWQqwbJF9YeJMh3bQbekh3Ugicy5kzq4FxqKR8c82BSA7in9",
  "key44": "3TGpuqA2yCFqNPTmTdcf7cRPNoWYXpVSiSbh8BWJTyG3XdsqtpVD9afSvEyW2ywZkWaT1ihP2TKF2D39CjRTmDpG",
  "key45": "3bkRidTaJgrbj8sE8oa7HBH297jpzvp9rBWW3VszaNckRCHJX7PSQCiC3c4c5MgVpBU4TY7aNKUdu5mE8UH2iiVV",
  "key46": "Wf8yRkXFYdvqFkYHgxkuxZQsf57FDgYfbXTHLFhrE7EywLnxmPZw61YAD6yWimebAUZ4QnW8JUCTQUaRanr9B9b",
  "key47": "3Gx7NvvkuLhPq4ouFBfqTgxwbgi4yea4tHo8kdY2bcBmBsSQPJ7WUGzQRuVC1v1NySkgBJdbVbroF3x6XnjtKhZX",
  "key48": "47P7rrFjKt9setagkr8ZEsbSFB43F6psksAtW8ayzkaTBqw2SUcN8Xkd6gyP2mVAtrPyX84B9UF6CjK13VdesuKe"
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
