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
    "2CwzzN4pN2idjP5pdMxT8Rg65XQeyXQdyiSgNxCqQWYULxy1omm5vGjULEkSQ47w5nNXvELjFCDCwRX48Y7QKM6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EcXShH2cpPH3MWQMcZq1Hv47yC9KDsQM42QFivvThYJWxWn3R4zNHUggVchEYYm8YgTiEmPUUoPtR4eMSwuMBmv",
  "key1": "4PGmkWBNqFpRo3TBYEvk6k8G3kuyn2H2xT9hDNABp9gfXM1nF7GGktL3DZdjRdpHjHwBcBB5s3jXGRj9SHaUZFtM",
  "key2": "58GaHN8mbUeVeW749Sx2UNEHbBmpwd5YLtNFreyKKYp5Naxg7EKx5eMEhix6QmjZe81k9ra6pQDkKtEjbsvy3Q32",
  "key3": "3kPTLcuHDFn96ezTYbamAYpgNLi15XA1QDanSNjSPa1F23XNaAhRW4VoPS5vHw8qKo9oiBZqTEsypy8Evm5cJxio",
  "key4": "4f4K5fdjCDC4jKSVCd19Rtq22u9UJwEfrm5CtxtxMBG4knS8QTJCrizYLAUDM75VqNLkEJ1zuHaBxFmFpRL8Y8Lt",
  "key5": "3bY5sPfKyx2dbNTgkVtusxDFaBz7VZPiQGH4ZUzxiSBHVD6hXtPLt6pAryV3UFchAZ3zB7WhowKfKkHg65Mj3Vuj",
  "key6": "5kwRVQZKBXjToRxF2WMU4K1yyKaREoW1eg1NPzy4aHsCTYnJY5nX2MJcSBS4z6UL5uyAXKwQipkZARVrWtvhYL87",
  "key7": "2AWjZ7Wy4RHj28LPVEzdQjAax93TKV9tPFhMsMmnDGzhJooCdK6Ych76c2cQ6TqTVmddbUg2vGfg2DR4viQKGLV5",
  "key8": "4ezcsyeb3VkmZDfgmVB4aZXYAMS4xe7oNUjhNuD72ig51EPH1yq5jnbvwhcYy1yJsecfXFBevdHca38XTXDZsp9P",
  "key9": "3He8AzjGbP3W3tWjj4ojmBBEbPxM5MocChXFpNjS9eFrfSkAVqTixuSy1H1r1ezFGu2RDUEx2vJRavsqga9yAxc2",
  "key10": "GyNY75vJdN8gUCVaQHDKVYfX9WyciCUBRsFoqNZS4cepVxUHs7UusRoCKvoZRHApMpaKuxoNWhJtdEUBtyS9Tk8",
  "key11": "63KpfTvox1pWBKC3uTN7yDC6PQN9UV5TvUZup7RrYxC9AjuFYvbD7Xsi3Z24iw16MLzV5JhRQnqHAJDAdFGuGSxd",
  "key12": "5dX1TNHuakxMrszHTrEigpUTJ979bDDAbVRVsEhYQ11e1umrApMRjjeyA2DCRGX2EgK9xGrhyiJdjdhBLVp23GGe",
  "key13": "3EvgAjZyVWaUXfEpptJBDgdnQ1jDqYAzeLb1H9raxg79QMb8ma6M8cU1smi9o6LSWfHQaYtQUvSJw82N9CYHH3w8",
  "key14": "ud9qxzyVjEHiKvQtNLZJeabfWib6AbNDAG5G1EsT2e2ZDPH3PVGCEmWXajSbwtMzbYX2x8emPgpQf5h7fB6AZmD",
  "key15": "jChUtQbqZtRCWQFHS2go5hfr1Sobs51PuxnqvsLtaYbTYwvUZ3dsLmRXRBfirWDXFDW4gEFgtm54u2xnhUMMsWK",
  "key16": "3S1PYw6WgKVsbgwJJLU5nvbB4nLTKt2VooCNG7Y7kekiHuVCEnH2GtpCcde7rB6jbGPV4Nhd8xVbbPa8TqUGcvES",
  "key17": "3PEoXa9Bm1HySDXD8pjzgBEcUvNyb45PfLRwPDqENQnempeyci4XdP5cnQDd7Sxp1HkGjDmZuSvS5b5j3Reqv3Jc",
  "key18": "dUJTeLbWLVJZYw3vvXi7C74Zz7tUncgmXnD4Q2BhFsMbJztgte1XzfNbMfuJvm22CJ51VSDTfdDbEFbTkfwhkXW",
  "key19": "5PqcPPr4zHNzU3pNEVJokrjmm2yCqDfXaTeZDa2u5G8jN9TN8hxffB21hkyV7MbNZ2KoDXrq9fNSg2qMwsW3jmm7",
  "key20": "3PAFckTHN2h5vMfSk7QTqFrSUf2eCbXUrrjSRW9ygpRb1vPqASMVgf5Z56yqaGgkj3jjmFs6hGL5X8QUPVCVyLeY",
  "key21": "3cnJpsJ19kYWohvbJ227fTaA2kgPg9XpJYeu2XfS1gdoNdbQMdtUxPWPnGbgyYfFgLLmxy5SV4Ukn2j4zxHaaj17",
  "key22": "5HfeKUQXzpKmprpdyQnVHW7pAD87P12kNhs1cvmr8EFLo4DRnyqLCn661T7XDvAEupQXbWKTkD4PTuWSuL7QJ3iB",
  "key23": "2NdBooFav1kh9AvktXZNgBFgEqefctoZDVTwKLQwTmNmVu5oxnChUNPYmrxWKrJMwRJxzQb3McuPj7BwwsV1t2ce",
  "key24": "35HnpWDMDsrortqKxktjeLZyVcU1evS9Cq794fxfWa6BY3KgpGDrZHxjDkNewCSgs2yuac3rMVcGm5YwmwRnGr8i",
  "key25": "KUdcYK3dqx3yUUEjj9ozGMi6TNxBAUL6czTDq9VhCTkTyLSJK3HZHinhLX9yxC2QxUvh5GxaZAv1j9cNqCeBouR",
  "key26": "5RFXbYteD6FXsdqq7kAqgui6qxBRfFtbbr1Vn3MPZQAuU24M3BUGkTrBj12fgQxJdK4rv2ZeXXwZPtZ6bir9D5aQ",
  "key27": "4H7jJDFgZNMy52h5a7sqTYGkT6HrfST4dm7woAzG5FdAwDyr6mcnXdDZLUobnqCxzZr6ZXN1xBZgkukFdtEuqqKk",
  "key28": "4ptT18veZZBW9AGuhgqrAmGrJ5fCo8FA1gUVuNoW7qpdc5nx7j9XhWKqZrb4WdeYKXtFLYyyZU3A3iziPK1Jrwhr",
  "key29": "3gkqvTnJQ6ieb4vZ3wsbqy9REVZEbX1YEy7eR7WpmJFqXS9RgiTxCgGpKdo8SyU8UT6zQsSryd1QXwbKgeaogAVi",
  "key30": "5ATZWR3bVU52CRKJ3BGJggz4KAhxsWyPPsDKJsm3St1m6Gcqy6m9gYSfHbXdHDN2C2mhZKnNVbZhBrugHd41FA3q",
  "key31": "Qj3hNjA9NUdp4WvWRjVzKtorbozk67cKS8a17dfzaXedHr3jXQ8etRkRiCmgRAkTHn9Xf7HiGhYSoEJuvH68bMJ",
  "key32": "24HXUAZ14cs53PbfmMcvBiXS647NTjLHakNt7KMW2M4B7uqxu7VVrPznmuXGxsCvdRbkLpXW9LrC7fow85hpCFCg",
  "key33": "4z9RK7Tp5D2TyLsv68b1KhdkM2J8zq65DwVL6BdbPps1HS5MVG97QcgSg5PrbDzzNd8aEAheeLUMbS2t8odd3gU2",
  "key34": "4huuqG499zcDVEPEN7pZpKWCW2jJEYchJEapuPzXhKHdBHoPxCVMYnWJSnKfEkk3ta1gBBYGMMnBuaxQ4mEkKUNd",
  "key35": "2bQ3xnBGYmC2P8esngryPCyGHfepkbeMPJmbk4wBBPPDEnY56gq9bTPKSuL4Leta75VtnCmz5nMc55EqrigDjtMT",
  "key36": "496Mbp3Stab6QwowdHThnpaRaiYbdb9fzeZTFnX6bWwydnEAz7zpfhAjwUuwn25hqnBJWpJTa8VofMvVmWdufLyp",
  "key37": "4CPXgzL8ZewNt6T3eyFMmiWbkZeH8jnhCC7yevRQCMjC1fjCLRBaVELh67Mm3eoPwTdiYDHXJQ39d5oA23wz8bGX",
  "key38": "5sN1MF4S2a5G3ZMWLmT6wDZaWDVKQWfiiL4xB8rfQ89izKZL5WTowkbMTZg7te5Ngxz9UwF6pUzHux3GQwwnGqoR",
  "key39": "3XbbYu2EKA71azJPaLNRcTpfc1sFezxA1he23nivaLTNVg4L1AtZ6vSBBzmBzizq6yWvs6nTMdf4F1QBvWNka8E1",
  "key40": "3CNJGye9x23ew7YmoGUSzUhUM3LrEqJyRUXMsXNCvjjSCcMtNv4ExKMR9Q8xixK3gbyL672aHGuz8GRRLJEdmQ5c",
  "key41": "3xtudNrA4zEUAo6nUPDjodDbeLU1pAJg4Qz6yPmvLTM8R6ekseXEDPmcAfQBuYC1Rmf1D4yxVHXg5ryc4bi3FCQZ",
  "key42": "FbxNJ2czrUVz6DUFky39j3JuYa6Zajstt35J8YRP3cYsug9vtzLznsUCwHhUsBvEqbwQd9jwfjokj8g2AZmQGoh",
  "key43": "5sPBgtdUd7bSHsETKGfPx3rvEV9qmvZGBRAo4HH5rzYV6gRbiyTjgokCwnFqAYcXftgo9na69fS3CazADJANkRca",
  "key44": "5MzvwtAyYKFim6ome1Jf9aFknUNQ5EAUuaBTZSTMVwm96jH7kMNoYinsMgd5cukkoTd5cJxPmyrEbqPYRMEvMRrx",
  "key45": "5obkeLLVVD8MmN2Nuf8xTwiysRQxJR6LN1MxGfhyFLBJPc8TKESHZ5M6oRdaBc1s1ywxrVamYZWFXoH1xUupuS84",
  "key46": "4C39UezhonfQPoUCxJv7E8a9rQtzz9bn1c1MMDEYbT71KLMFxakLk13a5LJA6PTcnQWxZ2ACaNAtGnkQEBrVQSqb"
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
