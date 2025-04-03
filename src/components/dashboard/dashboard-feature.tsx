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
    "46CsF2C35og9H4NWMUadDHVmGoaL4nmhxFeBQJaUzLhWN2tnLJVeTKSLFKkufSqpcciaJeHewNgjeYCy1zWJmGSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LqbX4YuybN6HVg6BxMx2MPfVy8DRzL8JAtZas8Bytdsu9PksuMsZQj1Qggvw5336FUrXbpKV6mT9t6G3ARoZRMk",
  "key1": "37FuYTuar3bree8cgEux9syKhrhaHhzwiHuQgV2itF9kN9EkKPDBui1p2KBRzRE3Su2NxHfcq9mZiy6tHYgB8QJT",
  "key2": "5m8MtXqWj95zgt5UYWANZ6wtG8nhC9G2vEXnrJNi5xu9f1xNqJ5uMvM1XAk5y7THuttuwrVdAc81zzJH56ZrJcnG",
  "key3": "4nge6RKDqn3MsSRCHLUHHwcYXVV3BTYZttboactyP7SJ28fgNVYoosqpQQ97h5ZJjdb749cEzXHS7F7rQofqUu2s",
  "key4": "2V88FyLFaTcPMYbRfFf755g2pwuNTv4GhWxZDZn2bzEpyqEBEsDnnXZd21yp1JbiBV2RzvaThDmLEim5DRNCiHEi",
  "key5": "4XcwD5Tk1Dq54wrUrQfsEbTuCgHv8UEa9HmRMjLHWHE7zEbGnrm6CBNFXLiAYqSauMpR9jSBoqvmgXFEGHFhjhYU",
  "key6": "5DGYbgHSM9Qkcwy28PfLVg9mCktgqJg8KXa7YnQS6XtLV3syNuPQ7P8naVWgNoVbnVi75s5Nx8mEV4gavRUZRY7j",
  "key7": "3yADLbWKkARCkEVyFgaCZiYMioT6SZt9LEisHryJAr6PKcA7zkentaSGCBg96K2nRtR4NCEr1KZ6z3Rf8Juux7SM",
  "key8": "2Q9om1iQZXymmquy847wRvFqPAjHWj4dBaFhjLqZFapvz8fgRMv51mDgT6NeWLbHmAr7BU3xbCEjV7shPi436cqK",
  "key9": "3saTnoeA3GwafRQyCX5md7QcNVTMCFMBjg3DtsVw3mbAaLpTFJjg5bjsmKtUeJCUVmVhq6jXiLPynmVFpwUShvoy",
  "key10": "M69TTNZtwRbhNAcaVJVcwxVbAAWMTgLmQdkz7JqzuF5LBpd9kMxHL5ki7FQy4zuw87WeyHSochoaAENTvE6SqVi",
  "key11": "Cd63767JTZSGYErdrP9Vs5vqFt9iMUyYwe8PSCjN8ba9HbXbhEnzusGqoAhiKbT3fEtkLqCuAJafmDAc6HEAjZS",
  "key12": "63n3QftqVkp5D4FLavwQ9C3qZDVfTqX4NTJa3MDaocngmFmcHXySFHsBciprUkjgYeSybqh7Ynpfsskqm8yh4ARK",
  "key13": "5uTJch6chH7EMt1XgzU3TVxxE6Y5APVrm1g1CRkMy27uRJtoS74GAg4gejjzSzuymLmDgPuqsNZPdNdm243cH7Co",
  "key14": "5QEc6fqEoVkcyLPVn1zx8ToRB4PsWz5az8CsQg7U4EaVuxzVzVEg3Ckaqo5jtMH4gKHPnamJWQaxrradaJgx1o7R",
  "key15": "967NmPMfEEX6zJ3hKkd22QrHR2MmUU4UVQ1u5Lz3S4anyNzDDsVFEA4YxxRSKxqnvoR5ukGXHBatm7F2WcJRezq",
  "key16": "41yidtoZyznN5pXEBo2BLgLUbmwvXbBtQtB3Bor7kGQcUyLSHomeWoMPNM8VgBYT2G29ZDPbptx9VVMJE9gRT97K",
  "key17": "4ADkiFzS8RpxyagU9ncVMwBFSypcuF7V8xBtZDbcvQJ3DRBTAbm7DQJtS5Z76qpCB8WFWxVEfrsAdS1RK4tSE1py",
  "key18": "3kaEGeLvorKF57TLuZugJWzBJFytSovmc5SrYacF57soctpSNta8acWntTrPemEDQZSPLsK2L2YjxszdiA1zDwiR",
  "key19": "H7JGVhWSAX87mgu3chRfCquMDoUFLJG1bmyLjHquufDsbSUHGvAbdm42RZywQwMxkrAjR6hw4zzThDsm1KMd18U",
  "key20": "5M5V1qUZXX5WXrseCNZPcgjuuyS5rHzm691niWsu8yQHyingSoGzUteEG4i8wC7HcZYbXNfXhmBMv8jKzEud2Nph",
  "key21": "2qQNbbDZUvZtAjHNK1kFcNVN1iprJjaktGWfYXeK8L5tBd5gwkUN49mvMXqD5QwJ7HrRXVVDb6dVrFXjfXqsRT6J",
  "key22": "4oqmKqAjhbmDEuwey1v97ZqseQWBcGXLz1uAUgW3Tv31ruZqb7jPFWNok3o5HB77fLuUq8nV6qToRErg6BAod8uw",
  "key23": "43zsQBP68pMkNPNtZz6azbj3VmjT4yyPiojPLU5wub2CLwFmuPVtDdrMKkDrKSBag3sYJc1ZpeV4UNXhgTzE3MLD",
  "key24": "44Yqg6ntRytuHV7r2GDof5ZvdmN1PE6CTLyN6UDbtk2RALDHWf8YTjU1FpQnPG5g9yEKrWZLms5EHHfSG4ZTCWzF",
  "key25": "xYd3nFqeGzKQStszPyyAieWrEPsCnnEymShtxxXSDQ1eL8ccj6nP3igidcxxEHuDYaFmuGWWhoPYguZbkRaXmVs",
  "key26": "5R2JgYqAqNtyNuebocyk9bh5vcJLwsyKvrLFPHjxPxvsuQJbEE8f7J53TnNrVT3Xziwsks2Wm17EpkfUvyoqsMhu",
  "key27": "4xtoJpNqkBqC8UGKKSd2RnDGhyiJyYrCpETabBajZVz3oKVz58u3Z4pjuQbqAf1kJjk595qnBXrmRnjFLauPpR2c",
  "key28": "5wAQiJUyEmJTLgELhFnXf6y1u5X4qe15nUnfYBojexKp8LkaJFjnEF9Ww3TzdjbziUedQxAh76vW34CoA9HShnbW",
  "key29": "2RpmH5CEoTUHArseeFRCw4dw2M1bH9f3CDJUTH1fanmMKq86cxw7wD1MNe65m6hftxHmeGYXqWLbWnpajkZKDxx9",
  "key30": "5oaE7ZQrajZQSPKHGtAvZgUcZarhQ4CYnzrcsT6C5buxKov8mCGCbpQnntH8kJeLZKSxxrx4ypY5J1s8Wx2BfjWG",
  "key31": "24KTy43T6SzRqbjozCfCBQcj2AeXBVGxdkorQCzVntkxMohMDCzXJuxNS3gLcyvNuKGA6kfgeyuUUJgev5XDgnjX",
  "key32": "3CkPJBCbN11tAKNAybrtjXsEut18i1Beh2tuhk1U7W1szJTZYMWDg7wbAByDUGRyrjdaNmEBwLajhuRfGkv5sdeJ",
  "key33": "UaZ5BqG6KDfHLoweRsLND2A1uo6HdFB4pgeZtsQH9ZmAbDDSgMLoDduLa6dXsR7bKb3vWjKGtHghkwKAvjXGUWa",
  "key34": "5cxSSw4w6rYyANDSEsgnJco7bMPH6pXUzapYmvYtkeoy5LPMgP8Z9nDrVXGkkeCeeYtACiYaCMwGTTHnaC1mBGSs",
  "key35": "35ynoFdpfRr41PGTGSYa8nmYGjEAvaj92s6YsBPNaup7qQetdFjaiiLgRWdenXs18af41daLnWXEzsNmtfemWMMr",
  "key36": "33Qyxrfx3w9FVcPfbDHXRtqNbzVFbMTb9q38TWaJ9h683dVhsp17zy1qLQZFWvF7n1udj89Hs2qZntub2cEvjk5j",
  "key37": "29tqfYonJoZMZZUVyNz2WgrmEx26Ai9tkcmLWHad7rw5adNiN2Rr3eyqQGWKWNQNYncEvMgUWSu5NZ7DaCeQmopd",
  "key38": "2pdAN4h4dwAAedHEc8yvqJTRm4dX9fc5mPLMxWZxb5RN5TESCwcDJnMngdAaXV2SpbMaYysZfRadtMGgKQJpJxc1",
  "key39": "5qFFNzrpiYSVLtKZ38g4vkr2EnQ8TB9H9QXicr3yGV99b3m87WU8QKJNRDW12SzgncDsqKgdL3Fx8d56epxcztGT",
  "key40": "E77HR8QfyxSHEw4unstK6yC1UKVTMu1ebFJeqFq9HgWoYdY1Bdaz1RuKWnn9rP1AsmEBc4daAwqvU3XwZ1WoKpR"
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
