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
    "5xFmZK8LMxacv5uDyJWasTJ2ALz3t4kQVKViewciYkKSY34QLm7nBpPfCxUGwXBW7Q9Q3sRh4bznDcMtCp1RRcXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tTPFA61tD7roKSwvGbChvYdJ9ALTN4Jte1qQiNSEfrP7ztqDhPk1NQnMAjk9gHS9mabiUqmcWX7yHtsG1ETvA6E",
  "key1": "2fuGgSVeV3eYBQB5WZBZZr4HWo7QV9cDb4mA5StqvtpK73spry3khywcQaQ6W8uKK1wKvqymfTEQrDfa9FHT8GfA",
  "key2": "3pAC1ZG4F3mBPd7ikvf7fnJoVwUitTy4cg9HPyCXYgHmapgmyyGGW719NX6q6ZjLp9S2HCuuAVti8dEWtbn4yPMm",
  "key3": "5X9mfvPnhD5tu4Usn3ovCAZGfGqijCoy7uRZVpBTiwtC11tZAfAkCYzwRTudjpoxPn8mEaaf6QJ9JTeXY12oUkFV",
  "key4": "5yvf7TM6B7sFaE9cu2zCXLdC155fnmNJJ5k7SN1Z82p3q7Ge1VmwxwCosXypBYYjriTUBmgcu6rFRSTp6FjWdpMx",
  "key5": "58pvxVaN3FLsxgmq2B7pbVDPs9s44FLwA6SsRGzXJ6ueJvWpq3uwWikzX9DZUPauquArMWbxgjGyAFu4SZugFENu",
  "key6": "XrLZBa1inM5iUVyhCh1eyaJQtdxjr2NYWZT7oszGeU9DrkhQpJsTfmRFdUbE4uEedhTWxrFXNVcxFrP28G1se4D",
  "key7": "VEXpKAPkf8zUK31DnyjWzioEQWVvS3QPQMggMk5FjB7BmMjzZkYB92yMPqgVSWPssrm3grfon8EVUY485hYcAjQ",
  "key8": "4EZdiG9smGFLzwYzSAFv7CznhexxLYGNBjwHtU2Lm1yB56nmrGCob7SKV1kLLmxLFERdZL9vKvzuFfxs2vZb2NYb",
  "key9": "4EtfHqqv6TNxxBe5GzuorRt5k3fYYegGN7psi2eHnnWHQa8qN2R21jod8vuqhFsfqYYSsXYeSyJQt6vjC6ksxvM5",
  "key10": "2TaDKcXHXgPxA9883yXbjwUwJmpXUMSFwZqmG3NYPUJavMVm1atrVNdzvaxQ8vBDSymFoXqggbrhtN4kwh9CuTyU",
  "key11": "5YMAahBv18QfEF4pGbJBKhjp59TPUw1KbunHToNSgmN6ghXm4bTmjqQqsZykZU5yK9FLLqVRTi4DLM8M2gVRZxPd",
  "key12": "4zkAvqL8n6TvXCM34S8uskLyojnTFoQ2CgmRKKVcjLeBGgVJ1r9cycZW51M7sHsER2cJVaf2iGYgGQj9PUL5PedR",
  "key13": "3269NHgAgUycQ4Dgv8spnTcFb1WKg7f7phmYzUk6cKzw2kH6StDPYLanSG8y3VrijGLxnq4B4zi2cQcyyTGh2Rp4",
  "key14": "qdxGzmWbRhZvZ43mGUEry3jiqj835aDr2WtFEjSnZ7EdeV9d1By6xxdbdrQFLbvrN48RRQuBXq15FUSwiBgL3VZ",
  "key15": "5Q7F9zXg2L5Qbyw34W8VuWTbLT3X4d2Eu2bdQNiBKrV9nEyKiG8f7wqYv7LmnpV7y7X3Heb5obtrndEgkygeF1zw",
  "key16": "5qkERtyfSyTei72ArYvdVNhEPfb7yozMBp7TAKxWYp4Dip1mHFadQTt7qs98bGJCMQeVeTRTvF7PKshWARMeCUCX",
  "key17": "3xuF3a7y3fB9yXLYiAreUVaqhgpUhkvbov5DgiFwLr46cAMNx2GGuE1HSyXi6WiWiDHJJQ2qFY6PtEQGVDuCQQRm",
  "key18": "dKZffi7gr4v9XKQYDtA2bUKqMXC2h4bMcgk7H3d1cenGXNZPCDGn6zWnjcVrUhxsb9UmUuPiF9VehHUfohwheqp",
  "key19": "4YdLSzbnPtAWQzmuqL6X53o1BFFBmaMqpR9XGW4NYPNkJkNNYoMEdigFfYxEBTWcR7u3wPLCTf9x8Q1arG3djr2D",
  "key20": "3aE1yqYAy8fBoyn5an3GegeS5YJeF8TAr83BRkhYPrCpv6z2AGy9nQ2KcBwZJD8qhF8GHmDzspTHfon74uTjujJH",
  "key21": "4GomykxF51fKruorE5vbDzEYk5Dmqix4RizPkKBE1A7f9i9HabWhSVmDa7DCwZbEc8ggeck5RZ8qRpfy2opaMKtF",
  "key22": "5rF7XjAax9rMeoX34XjitQto1Yh5AFyPqtXksuSnF7QQbkBqjp2aLaJtP5fYEhv5j7KuKhn3bczEypcXVGZ4zsR8",
  "key23": "3L3ndpWxuMBN7nN34eAAuZYN7dR7yChaV3pLi7AyZQBrMV1jjnKfxazBPgGHxW8FqNL3bxE2YuB75js4hpoSu71Y",
  "key24": "4KQZ1tqpsQpiUNes6qD7VzpiovnTCyTGRS5Hb8p1trWonT5q3pvjSH9MLwZMHrd8Btb5PodZoNHoZxJs42Qex2TL",
  "key25": "55sbpzA7d7rEAa1LiBitAUoCvDKhZ2R1pWm55MJPq5tv4aRy71A5dSc1b77X8BNUtP72MVxfaGGN3FfthioYamnj",
  "key26": "4NhMrHiRFCK84zBvN6vkVBvh1dfZi8FLtNmGDckyHABqtnrD2GDzHLf988Z9KAw2CnhUnMRmGc3GdEXBxqe8CiPs",
  "key27": "579gj8s13uB562ffbz2hAhbwLc6svNaEFcP7kSj3UKEoXRdms23YkgSFrPYLphkj9oDPZMhikidSWb7RJHp969cW",
  "key28": "3f6sTSnpn6EuEtaJSZgjGARTSALhLLogvPa75mjEVYwicCCGe6CUkvZQqapreAv6EfEM47QH1w8hXmeYxxWJoD3w",
  "key29": "5h77co5KT8eds3D9a34aeZQiuawTsJUDK85hQFwn78GU8Lu3MW95LPXf41jMExiDDM3QfKCgV1mhfDgU6SsAZAsF",
  "key30": "H99s8wSTjez1bHPH4Sbhs5fkjk9LheaS5nP1TZVabMWzCxuztsD9MAoi1gskruRMCngfZ7xkFtMrj6safB44N5q",
  "key31": "4RR5oEvf8jPM3j8WruXpGQ6mqxLX1zWGu7Ey3bftjmZatYNVywpJUkzcHwFvSCtid2CLyqFxGFt2AtYNgTn2q2iR",
  "key32": "ZkKpWJTkWhe7W4mBvEr9Uf1QTiEqaHbr8m7xZGgfksyhxys6AHWwNC5g56riCpZphzoaGKtv32jghw1p5sQi4up",
  "key33": "47XHYQ7RFjFNjh65yFchDL6exrf1swnJEE4BcrJ8cpHmVrQogSThAsQYbDzkxNjEppqa6HNRFfdvf3WAUMm3EfSh",
  "key34": "hvwhTqR5be44GrST7KShe5ZV5KAEnEMxtMqXe5h2cCNnn1EgV1Xt3XQWdLCPPbxxDSYzcw3PdFkCzGDtWVBCx7n",
  "key35": "66ux4ZuAJmEtryZKHFeGVZL7zUY6XTJKW2uzZHJGP6frhw8aNrdHue53sj7c7MnJjUgxsUfurZ6JEiYbet8bmzDb",
  "key36": "5gB1JdF7DFF2Y3Yj7fjhETEuKGvwJNd67Zpz4S5EvdRtA7LTNunLX8HQRBEmRzrXJtDkhzKfQ3UpZ6xn5QSsUVN8"
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
