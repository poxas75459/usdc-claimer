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
    "3gLDELdddZTZkSWgVoBYiv3HFecNMpwJN9RCxypFGLU9CxjqwL9GnVTJbFK4imAdUG7MGRvaufZRfkR5vccijRYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sixxn4LLHytM8tFB1GtSHp9tLuzVMnC6xFt5iaUkXuQRqBwANahqqg44NJUtcgCPhdCqQgkvmHtzbJ49RdG5nhf",
  "key1": "5zWFicxe3whN2cySqeYFrVux9gEwFJzAohyE1cDbMvAHM59yzQKUouz1ZDAcjs2RMekT1UxhVfayvL2WJzfAti7v",
  "key2": "5dqgLpAYKG5ybob8KHgmd6hbFVdCTkZCjopAaumZMs4oZs887CYPzgYQ1NZ5VLcNbLhG1Qf3bdQL6ZdwhrKor5h8",
  "key3": "5RZZWiRmsUM7yH17bqaTG8Uy8Vry5Uo8rGebnbiVm9vJWTWtZxYMMRpfoVE5hnz8c4cQxo7oGYqwCwWuuE2hpjf9",
  "key4": "5RDbUgZqfnC6QFvJtwbDeGtC4b4GiDMDFtpHinoSBxiuEWRE19DgKywLRnC294SwGbmpmaizRWcecskDkV9EHTSC",
  "key5": "5Si9XwYpgBGg3shzumMMU4w7Mt6y7Fj8wJt56ybJ56N158M8JD3DhTgbUKGt9aNL81KBBopyL3JYLYsgdY6k742x",
  "key6": "3pWtQfwUHSCXJwyUqrmBVv98S8JYxxapPz3dvYto9ZTiev5a5DtXjKMPMKot2jhkSr5PsYXCQvN2weJw7b7A6yM1",
  "key7": "5hEKUaMURT85Jb1FtCjfB1zDLcqSby9BnDWjd3ajbGvhoPNvrdsvvveg91Fsm2BLXUUtDjBv2Gx9t3xDAS3fGGXR",
  "key8": "5cG2B81AgwR6Wov3SxHtECDottZv5e5EzsGJ17GHP5o2MJ1DdMVKK3VSk8Jri6Yc6nGbEiXczuEDjpyvEkzCECwZ",
  "key9": "2QepkPDR2NWVjKdFgUUDinZUjjQ5m6ZUHxtjjFzJfnuGFQfnv5xtP4CE7D5gyzKrJbYspU8ehDuHbEfUgNW7EkNL",
  "key10": "3MkW7WwCELtNZeDTy2VvJQjFf3v91bd3cMY4fJEuD9QHAawPhcopJ39Y4zhQvtmsoNXWwv9iK1AqcnXKoyqw1BGf",
  "key11": "Xh12hjsL8QFFzHmb9WLyB1oQ9BWPAYgVE8d9zEsNDokfAq92GCyKX3D35aVDBen2BAvUrdetLg1nd65jtW4FSCw",
  "key12": "45q6xS2ZeZeCNewSD3YdNM9ENAH6HmfUFHRNQqTSD2gceBndvPscQNRLusRyBmVATxvBvxLHLcP3U9ZXM74bCSux",
  "key13": "Mgt4xipq5xVmuEnYeUh8PnbiFgeKVQm6hbEcWTrg1JQupJx4vS5GEtqRfHUGmH2uSRBG4YhyDLvcRnht4t4aMpL",
  "key14": "4rr94FynyWFZK13PJR7GSYLeYRaX1LRYS15mqARYF2mhhEBXbDPaoczH47mM97J2mi5YzdCtXFZz3vqFs5r2FxkW",
  "key15": "rkxbGnNfzp5RzUQwjtcyfEMXuo5DbaYCtK9BaTRPhfJATQd8BvoZWJjmRFipH82Psudbz9NkFUi497MzEaUzz3o",
  "key16": "3RYKHHTtz4Fq7ShVEjofAfwzpaNWuQgWbe6AUGRwc2Wzd5LgMSx5mrWfjEjiASRpMgpeng62MWvDT5eoWTPpPBXK",
  "key17": "4W1ed1odqxRXk1VTEwW5zr8ycg6m9vBkP2mJDMYYA6mXmSxcSzLdQ3MBHqAVKDPnJf6TjQGNmYQZAq2MMt1imvvk",
  "key18": "G7PuAk9D5w9S2A8dvgotopRUZcBje6hwHMDqnn8J9PC6iqLM4ouuckmA1UA8MjuqJhBnHBwFzcKtmuPCBbNQzBr",
  "key19": "3gCoU4YAiXb6De9Lw9wBUe7KEDAEAird7awBP81ARRdoPzVwLXUtJx95wnLHcN89Rpgj8NdwpbPYWyM6RAjYSoi7",
  "key20": "4YuqZfs3VSrNx6yV1WWvmah2HdfZUbmS5342rzmrmCBgoayhkLzv24J2Sb6m53QV3kmL1w9aBs7jUXcT6siJef18",
  "key21": "3zX8hkW9moyZUrJG3BvKZ8k5tH49Yj1Ld9Lxb2RmBQZKQ8UwtHxeupW4XfpsmYYAapm9dbobcpHpqPhcSt23Qpdk",
  "key22": "79wmCRNS9RE1eLrB4QMAS8b2Z5EmsAV4EKSESn2yzcj5pKJKDkj5Pso371S3j3F3Cpnd1Dw29pXgPmvNo2xo5Xs",
  "key23": "3jz2nHhXRt2bFJfsG5K8pvCg3auanZrPjnHxCwdGJC6YmwoxLSvgSaxDyMF12uy4RP165UDkP5ZJpWjZDHZpPpVE",
  "key24": "4n3PujgBUKF3BkbCK9wpfnMYjEfoA5JDPzUBc6BqXKxkYGHwcnk9zrmQQghiq3XRNYw96apX7s59iFK4bdDZ3hZQ",
  "key25": "25YbY5ziiCpUJgPQTXpiKw1ag2PFMnkKJeBdLrgQcedaLgSJM2HfzkXVYPEpzSRrKJSHZAucL1qtWWu2ueD7dYWh",
  "key26": "Qr4pXLkFkbBMe891jrZNxJzgfZpX4R2qg1QpahX7VWNo44543Kedi9if9FURBjewZV1GUFTDigcMuAGW9CRkWvd",
  "key27": "5bE5DcnpbCvp5KiWArTydVdktimNvTMmxz7EjgZxBSa1kDw9VxfKFyx8KicBh1znKcJ2uWTANAdU3cK8WMkevwyJ",
  "key28": "5X6qM8DDLVrEMYmyJ46mHzbnBDj7QTMMWKwnrffCEKxaavQNBMJNQnKkkbTu8R4uYdhkqbUvkmhJTsjWzsY9JWGw",
  "key29": "kAXjza19LM6UMWaTdgN6mjHGNmaYGszCifLV72y6e6cQU1zocaa4phSxTMGGZqhtiWL9LR2RBYuYqGs97wSHXkc",
  "key30": "cWRjGAcov3cA2mfvJNHbuWMuEcE1uHJGS4GKgKWAxFX5qp39LAgNQE1DKNu8o6MY2M7p2PCjnUcE7zgcF4uEYqS",
  "key31": "5TyZxjub4iuJDr3s7vfahhnTv7tx46FL3aNnrQZ6UgNkJLh2s9xQDWMNcYiNaiB2TUyR8ce4QebWnpgkr1wPJx5s",
  "key32": "3SMZ9uYA8cF3pAwUNDTqdzLAq9s54Dsp3M8NjGHLPW5iJLTWGMGJxoNkG9BEq2meaoisKuHX9xmy9mNhvSFQfQ5c",
  "key33": "AaTmAwhiq3B2z79nHkTDwwxtjxRdSPgybTXqtdbahMZQvwFrMBAkPnx3RiSqXxW21Q4oWPsWRvH9vULWifyCRbF"
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
