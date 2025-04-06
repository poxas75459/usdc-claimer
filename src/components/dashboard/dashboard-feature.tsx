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
    "4CW5mVtUapPANbHJQPjhKV9zxeMaFu5YyQj3eNqW6kny9D1YCxPHoaikpv4nBdFEgnN2HPP5mMAMpPMQY59v7fQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RcweimwvzTeABxEePKtUuvZerAnnrcj5ea8i24pe62yNQ8QcJyNpqoKgdCGaCVN6ng8Rv8S8YXm1BNtu62pDd7j",
  "key1": "5pLqVuUQRssb6p5Y6fcrFzXVp9jWpgvSdStkzL1PR5d2XGGkxFcntuFKe8PCCdzrVCbJiRdnFRnj5TWt6g9SzXEe",
  "key2": "29a2xef449b5ZB2oC8VmuNri4qqy9KTjSiTzkgwLQs6suq43dNG31EioWirpYkdVcMgx9bz663xSqqo9VYuGqJTL",
  "key3": "38N1uA5oVRnquC6k7eAZk8ZYSTth5PujJWn1c6gL6RqceVN2W3n2jFiAWzsNSzLqMsQkvXy5R6FwqV3WnmNWKr2H",
  "key4": "4ZfyGnW3b5C7e1RTuHNirJNBvES96v2fnefiousmKq4fEEnHG7Qr4PyXSpTE2to7UYY81zr5gX9cZhFU8rZsrf6N",
  "key5": "5D38w68ycEXPUFi8HG7iFt5vgpDXAYPBTUR9ccePfY1m2gatS3vtvJQ9z3U91m4XN9quHKCnQKiNfpjMGT8vFnDG",
  "key6": "Abr1jVHxp1gASr6yd1fzTXsnxHK8dEiFoEky6GeYApW2DARuFqc9d2H33hRZf9J6ojxG4J1FVagcdtQVULFwh5J",
  "key7": "5yj3kDBT7K6kbZkZh4GELr2xM9AsXEfm6UsoNR7Pz2AmSCZFqA564Zfg8WhAY2J11DorAVuwCPvCmsvQMhLfQFFF",
  "key8": "QfEyb7G7afHwfG3haorsMwrg8te9Ea1X7KUR2P9uTkYzDcXDNsLVj8i5CaFgtz4E5WQwRvwcpKCGyoiFq87VECJ",
  "key9": "2fzVWXARkgXTv6XQtfgd4g5o3sFBJrW7bFXLUumU81rD83kMgVRMvK7LQCbj16guBzJm5ew5y1rNYDznTHnvYvMK",
  "key10": "2zzk5uDmdEsaDeBQhTmUU59F5Jos1wsQRYvMg1j5LuSgcbx8x9mYsQHwCSgnnS1xJqyDtQQhpZzNFbhCtpvx4Tuq",
  "key11": "5Tmo1QmJfwSq1rACeWU9Nn4GhoAoBwAJQGbrbnH12mUh2tkjCKqFNLjap4CQuebkYvkEUENvYCDA6j2j11tKa4Lq",
  "key12": "5TAYstDhmgmDyaMybH1rUGy4BEtpQFKHW91zsGx8LfdbkGrGLxDvW89MWfs4t4DcxzFCMapEGFFgKeo1ukZTv1nu",
  "key13": "4U7esw4feRkfZtk3vMYnbugHAB2vN42HgKM5RACqjb2T3HrEyiXJzx43L98bVUETfsjbACkZvbQhB5Fb7A9oY4Z9",
  "key14": "4kfnv7upQnkpxjtKD56qbNW3qa5qjWACLiknyPLJ9sKVmyh8sXVDQbZMn9tXMMxE8HUVvSSGVrcUXGzCCSFAg4zw",
  "key15": "4Bmc9gEUZdSsEHBLv7sVSuWB6QJ6hxnLQVqL89YqfsFR345BHxp5EyywvLguHb2XuQrUc4xXEVjyssx81unomPEG",
  "key16": "6fWUQk3pxvhwqXL58Y7r8cXphsYgJfDDtrDUByjxw6rykFszJkEbQ15fK1dxhv48mHqX7GpfZVyGX12L9DhfB3D",
  "key17": "3nHZiovDGVsWrjbaG8souzDKu5vWxJbUSd8m5hSvikZ99a8ygXae3nYoMm3rCq4wsiuvpaf9NjNzhyqKby6cGVkU",
  "key18": "2DJRmPf6f253KVCkwAKz36i4GrMNFPpHzDeqoBgrH7JgTkuy6X9pkst5ZDBA4U4iARDwwsLU3ZmQuB8ZQnSi5tNF",
  "key19": "2r1CWcd61EHmZg9rWKah4RTx8BpJMtyGQpV4hjoSZm5Fjh6X1TefXg2kqVtF8psTKuRx2e7V7vTcgvde9LFwzzPB",
  "key20": "65qJq4YUQpAjF2vTLYStnroThjTBtWSiesNHaw5EBva9GGbxu3cp7QkfEJ3e58WGr6AKKHRiwKDEJmvwmHi5ivVg",
  "key21": "2jrocE5N8m2zq2TKUnc8akPBdKkwKDrdTkDh5wLhXGuVUWbmJmbYhiqzAo9w4DVBNgHVk4dGMMfA6NjNxuGdEo4r",
  "key22": "3L5aXQKL15yxo6GhEzGww28gYCrVvPLiDF6JuD4vXXxXFWs76NX2mAjr3MFwABZynqDZp6U185kgWpZ5hFgSi6n",
  "key23": "m4H7R7yLNaLfNLuQgoa4T4GQVxKUKZGFeXgacQ1D53CuzS86oEPMgGhtdY9JNtJLBFFuZAtgvFd84g8URh3raM3",
  "key24": "4EeTMsHtZ3wXzR1xKkYSguxLSr99K8icERJLU1KsSo9CNF9zG5fJMBVXxzAHEhcuSikrY3bypj8CXNHetW6ADq1r",
  "key25": "snSrjDFpYHpqcmZQy5VX4Js5yEgwCy7rwKEW2qxq1ZF6yrQSeSqnRyQtE6sk1mA5vbumGkgdUqKESk4EG2cZ97y",
  "key26": "JAkecKSrcCiUQr5YzQVgNZMsuypDshH95QKPmJh25TjqS4mLaXXtwpUrZyyM6fyvP3gw6rEngchSvHGCQSnhCcs",
  "key27": "Kv4z3HkB7dycuWB2R9FtT3x8M6oDMWthcQpNdubg24wCVGRBg5cd64EmPXX2HLMe5q2Fr9Gs47bkkc9HbnGydSc",
  "key28": "3Hz2yqMxQFDFcLLLKrEaFRdPis7KSrrnij3KfDyBqBKWXudd4DzvBNpZfDNqFGG339CDT2CZ5FeNY2fUgm31aXNB",
  "key29": "4e4afe1aWZF6SY9ayotFpuEzFnkFPzHHf68Z3vFietAgTYohevmyaWupqrQNTH4bZJbSK95m3yRdrsXBKA35hhpu"
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
