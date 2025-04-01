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
    "5hnMRK69fLP9E9L7Gyjg8AN3mqi2f6vu9Z1oWPQbRLAG8h7GcWpB31GzJaY9e34uiMk8EkLioJvJwELsFG51vVs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fha1FK8A6u23X1QNTVKztkJE8E1AFv6mEAGo1VXneSHVM6CGehcjBHwqpdRAqoBmAnM7mb3MNMQ1ALcFN8ycRsp",
  "key1": "2RTXuHJQqk9wPY3zwhwJQLKQVXUgAf1gk9dsRpWWbFtAzm2qw3vSfoc3euf39adiDer6m1RRDMJkp1S1mdWL5K2A",
  "key2": "5LyJCHsSTYVhRXg5BWChYizo6MG4PHBdzguS4i8e2MLKUtty5b6a5fGkVf4xdtmXeBFxsAQRwGGr31Z76auixWz5",
  "key3": "4juE1Fw8c768GZ1Sryq5bqiRY5jfccUj7JptvboqNcLGUZQSGCZ32Pt1iHxtqJoMEojABCuczgY8zT3Wrp81NyHL",
  "key4": "4MRvn7WZ6PTJ3JnVLfmfqCetDvSbXz8nvuRt5xMnbhrf7BNwasFwYmAPDAFSXZiGs921ypQabWdw1oDD2GLx5n6u",
  "key5": "5pzLxAPyqvqn1zviPWDdBFsDj3TLwpk6jte3gpVtD8PHfk4i35oGC6hxM2bCkBETR3mepzu939iLGuRNcfXLCGvG",
  "key6": "2B6uvg7mRUC7bXXa3wDsrzs1mQgucFpeeoFhhMZYAPQPCrgmZ9d9QWHiJUM37CWMQt1boDo3fRb3yV77WkU82Z21",
  "key7": "4GnNQ9xVP9RVMYcQZqKxDXHRT7njqxzFthZGd8mNGto19Cj9rHLAZAzpEK2E8bJXqysjwNKxtkn1T1A11stY6oFR",
  "key8": "4AfAfYCGUT6PBszsfexCUHwqKUcNESSe8RvmPYCiFYXBsGTVTHZWuM7TXjartAnuYTuXbyXF2FHw3HoAtrNnDaNy",
  "key9": "4tNBTK44Tp6ghMsFXuLefevfACQCR4YUBx6RFD1nrU9KqV9N1id8iEGAsoZpyqc8R8gCPfUVcFb4dYvdK7UeZ7kf",
  "key10": "4r1vHNqyNrv9HoKy3kek3hszBxxRr16KovjRAvmLj4oC7a8QwZK2eDTM9tJ2ah7mWUSFC5EU9Qf1QccAZ5JG7rW6",
  "key11": "4BHVyARpAKeapCdqwit5TN5QtZPh415vG9Ps88opdvx46BhJDaaMqE7PAtsNtkh2Fz4QEdcLkXCXLgkQKCCVozbx",
  "key12": "3wHVgAkQwnkVjefVhLTCtB9jifQHe1XsBCKNJS376FmEGCrUYzqVvCi8VQbbBq7A8kopC9a8qSupiVMoPuuM9XEs",
  "key13": "XnhfYQM81ohMzPNP9c1mN2AAwhKnKG3LZCw9uUZkMofYphdgb3u2i3vDeBwA6TeTbS3bnKEABGAoqzNU8qqEsZ4",
  "key14": "485PqfdCffytrx2ZxYVUWq2TzQ8LGvmBXLSpxStTRaCNJb3vh3u6SBrnETRKYeLQvehNd78JiKpvbgVnp4iHWrYb",
  "key15": "4LLqpr2ZNtfyHkqNUrFMjhGP38fNQBS2raK7JHpQDpatanrUcNsBtiWKLCQzVVH5LzCgEawnSaQhVHUCX3iCneQE",
  "key16": "5B6J4iBwaNyKa2tx59ZacyiNLeKrJxiDVW1ShSLRFqFAzKPxYAcK5CNBLqFjZtnhpvTgXRu3zz2jR3ASthewPtNM",
  "key17": "4NqweN4JQ9HSUug46VrLgoWTVV9oxspoBgNGM9FWdkreYHFbKrpNtarUx9aLP8gDpcQQrsGe2tPrtZhqRfELffsc",
  "key18": "yxgihNxTAwiDCQ3rZ4cU214Vd9wPwY2kmSQovLgy5DHyW3gQvmxRUdiDmpXeHUYE8p4mCqC2K238GpqEsFABUXr",
  "key19": "5ZfsoqR9PKzyU1u1zYreoaoTvJa6SDfZ7MGfDYh19rd2YPHN51iriAmQrYm3NZDD9XKQpCXr8uDgnqEAN3tTWYiB",
  "key20": "5GYjAYNgjP6fU9PW9TdjivgQ6f3zULmbv8cCMX3LHmhD1FUxc8UBg8XmwZcTiwmv2rjtvhECugxGe8LX9k63fJDZ",
  "key21": "3PvvvFP1b4LLsE5vC2BBDmEvR91UCaKjhN599dsiDfp6ti831m7R4PHdUpt1CrMpVVoyo8Mai9bqFLUJUNgaUQ8X",
  "key22": "61TBwtPo163c2RDHAcJF9Ae18vMESeiDBqUtrzcWBXgZuDu9rL2T1bC1knSrcAWvJ8zCbyjtT2915x6NYnUHUAxp",
  "key23": "4ieCRh554i3CTXWfpPFw65BncP7PjX4f7tLWihvxhdnYFfA5dqr6tD2LxdwMXesz9GQq5JGF1PMF9tGNddXfNJvh",
  "key24": "BDch11ZwmSDuxBeQdWYa82Q2nhwm8YpTudN6Y7Y4PmoZvDTctAUdQdJCpfvZEsLQLexKC6RLtfXtodZMbWm7eN7",
  "key25": "4WrEci4Wp8UQpXVxYEX4WRNhvSP9JRxxySv1VekZ5venDNyvue2pxAYS9uziaxkfVYSBJww28UstETuB88TnD1CJ",
  "key26": "zrqU7MkTscnZ7Zuyxr6SjnVt3xtk2tz6u3jXL29LnUaQWFzN55iSCWJtLUyjNmBHptAFJ9pzJegxEYXg6qu6G9h",
  "key27": "2DZrsYabS9cp7YVWzAz4FrSC8rYk6X1DmS3epsQBege8Tyhewo2nMDm5xH4n61P1J2d72KDYm1Ne2uzs2HmgBhez",
  "key28": "5kLCqtQcWAZEQTRMFHE2efDrqrNrdWZFQospXiwcLAKSMUMDL8hJQswddEPS8ZnUfXGPhnAZctS5HazVSG5Qfu7m",
  "key29": "3aRk4nZedMcYgeDhDp4QZNtw5Yzy6jajU2No6jizi7g1eZ2o9yoXjrbfew9C9kUqi1kG3Nz5FqAmvQtsvW43AkZJ",
  "key30": "5qfCgMnUq8VRTiuPi9tk8AqfVyk765WEWT5L6dxRvw2S1v9LVv3XPxykpqssRTKZq6jge4Pg88BhBJegQ4KyWffZ",
  "key31": "us69kXB6PB6Zbr8bepmyDGgf5oNcrvFWpWuvRLnsxAVf6mJ1mtr2kLDesp38xReuU1K1M8SEcvUwNb9RtRASYWb",
  "key32": "x1dn6zjqY3VfDjxsf1P7HUQR4pRw2pm9SdZ5PDfGieLgkxyhs7smoGaB4H9mvcsb3nQFBKWfNUUJg5eztMcuz4Q",
  "key33": "4tHgexbC28upL2USQVfta2WHiVFAiaVHs2XzZu1A7NxiCPUoZiJfnKUYymBJoXBTumapqwb7aqBgHiQiu1jb8Gu7",
  "key34": "ejpxp1Zjmc11dFjAdnyrvP3SgXNyJnza3FiiEzVrf433g6ja493w9Ej4sCGkd8Ha1o1XaUkvJEfabMb49ht6xGF"
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
