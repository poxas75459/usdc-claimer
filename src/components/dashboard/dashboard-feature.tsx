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
    "33ygXfe2sFnkcLw11mhYfvwU7xYr9xQURsv1xzuZpi3DDWA8yYmbL4j8U1W7hVHoTMJcqZ9ZR7B3kw4Xda38CJdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bfBx7G5jvSauuaiSunbQ7smJKCpb2XpgpACkYPYfEJAVg9uGBN2bo66HGu1LsvTGSfK5FYdvqvPKA4oGvoKi5NR",
  "key1": "2Nx9QUAVpKcw1PnqUWnTfatVs3Qhhmtx31VHALPMt1ZL2sgEMFnjWzCzsox4zvVhWZdniBouK3rvwyTrdimHDk2c",
  "key2": "5vFtHF8h2MqcRgBgcoUNRKmJdsrQgvxyJT3hohCyMiWD1V4p132ewsExct7z9YnBV2LC3upZ6Wn8zsDQDkwnJvkT",
  "key3": "4pgNPjD2iDDenhdnmTtfxMi7oAHDmNRxwciix5kuoBENauYSCmnUs72wqzKZNZGmuu9uAFi85yC2B498ysJqTiGa",
  "key4": "3sj9Zy7Jx7MhthdAS1ER3aAvj1z3mvWgqEGwze2C355vKLvUmSHCiK5ETRroPsRCEpDuqvCJx1U6Aj93yLgXvZLf",
  "key5": "4R6MZQnrLCKDACvw3hj3KWeeuZKZm3XyAa6nEQ1Y7N5rp3goiDJ8jmcMVdE344sJWmHFTn236HHL11Uw1zmn8RrA",
  "key6": "4jLFwcDwKoPuR9UEiRJrc9Bh5G7p2HnW7xTkmnbiGv5d6o4Ecpuh6mdrw3sE1W8nKvAKxWgTANcHUZzhi5RbW5Ga",
  "key7": "5DM3CrH2xKomYXntfWFWMSMaSMkaMkA3odGY6KdF3zMkf4DRuZJ51KT8u6Scm6eCXCQnW8pWYDjjnkRh4Ef9C8pT",
  "key8": "3PndbqTDF4n2vWXYyuTAJnV7FQZFMrnoV5rrR5dsDJXMm9L4NKSZx6twzrQqLHDNcbH42f27P5F6AhumrucKQBfn",
  "key9": "5cHHMFx5AayM2J9CPKAFYWsPcSNFA39MhWRJc1EtTB4M6FWWEGRJeh94bXE4E6Rn5HXJjK4FxSj2fnioEeYEf76C",
  "key10": "27vntKhHodYp6vTx3iM4xPZh3jFVWnVoBNTUVVCmAKE8vbsjoBsrpET8GUJN8zSYkFamzyKyMTRx3PfgHnDjtaAz",
  "key11": "4Lg8JN1wBBxRV9erD1XUuxqbsYfjGCypEuVtDE3gameAQuadokX3YtQ3n9Nu9hdJNxfytvZqPbrJRpFV14YBCszu",
  "key12": "4xJezhErmim8BuKKzEscexcLwxjk9Us2UnZFavm146pZL94fvLqDKABuhx9QjNQoo5BY9LfLVna1JWb3ZVvpfNGe",
  "key13": "4ZcGeGxL4DNsteAei2x78QrCL4yWpZT4wwp3QfdtqyB3kRAHWzBNjiyS7qsfwBsKHbxcZ5WRxrnTU7nHpMxvQpw4",
  "key14": "22T6jgSZdKCSLn45s57gzg11d1S8ccBkoN56neCtvPeZQJrNEvwRzeAyJxMTEhCQqVzpSicC1VBzhJTiGbc1evQp",
  "key15": "5tUU8THXp3nMPuTM9Sf5aV5ihf2on1McKS9BXxxus1an615iuBKyVQjKSgVyxqV6DquiFF4AT9X2UWvNH3U2NuYc",
  "key16": "C3fryjAaF3xJbA5bi14jLdBAo6MLtm6dLPLFLauieFpWG7AG5VubjjThCEtqYcLU6Knca6wnAH4KsEER2SNPYSf",
  "key17": "NbH5m6XetwqrF4v2cymnCf5wpUpK7G8E4rWUZ1FGFeAvsFi3adSZxjTVxXfuSHPw5McSu2wsY2HqhWQR1gSz6R8",
  "key18": "3CtZ3RcZd693ngLNbkNEZsVmg7nYMCRUshm5fFZYokEK1FXPFqFV9b8rLytpk2ESZM9nV69hcdAHKM5uPqDSoGLr",
  "key19": "2aC5V1Kw6wkmmt7M3rbiNPV1bxeMX5sAshncLd7BgpKaK238PWipLE6UQi12uSdsYpaiwcLZaaWrhRNuHFNZMSF9",
  "key20": "2KUNUWc7BsSwBkpAeg2hknncjq3FZGB5UpGgHJ5M3EvE7VyuQKcRrz3wEKJAY3hJzCnFPVwD2hhCf9kCnv7LNMti",
  "key21": "5nFiWaHgQRELxkkhngWxP2Yyq9scCgYnn3EQMqfEh6RtDmnx8AMVWz7SAW4Pr9sb78D9uzshxQQY5LbCqjH9qAPM",
  "key22": "2aEL96JEt4TzaSDt6z2C2hPkttbVKZgnj37TR4oRDZRKWXFVXKPyYd3DC3tuLyefkMtqJEFtBjFfpJUweFtVvBg7",
  "key23": "2i1excGNY8f3EBpFpwQUWRCjPY17F4C12S3F9TgNJZLWwau5g7GhFNraGSjvC24KBX6VwW8Zui1H9RsD9yEB6p43",
  "key24": "2KpM8eUz89a4ufAWgbdx94nx8ebSHkLoKhY59MZg3xXHuGm4Cx77wsJLzDNPY1w6sNFsk4nCKpwPMoKgnsMe5Q9H",
  "key25": "121aEiPDyFpaDbNhiKT8QB1LScX4gcxWz3acHi1kwVXkY98X4hq6UQLTVM8bGgDBFtgpaJ98LpC5z7Q9oU1rjNkn",
  "key26": "3ea7ZDKFfkcjDNmN65fh3TeoWmJBMZFMZREpkZrva4ik8oefaMFpAR8u3pwTvU5fYvN7v1oZxBds6HGhsGmn8hJN",
  "key27": "29nWCyUpkDEtxgBCYX1ujt76Na7huuXSyo1tE8dkLo4TZdKN645oBtpHCejeTVhTy3TgrSfsTyzjo9eGquVJKHE7",
  "key28": "5EPQowVjgTyUH6paggEKMFsdcUiDL1VPrWLm3HtRtzy2SKekEJ4FR2yc9k9ueuPoHcswiZWTohzzHaXq6eVfiJkG",
  "key29": "6vWWXt8xhMeLXa8Nbvj7fizp5ZGR2ExDcwx6TKqETJQa3gUNo62AdEiYdjkELxBM5PTXaaAvy7QbcEyJ83GoiFU",
  "key30": "53LELmE23C3EUgzdSpV2ioJ7gU3m5kj2rEFMtdDwkwAurKmU6n9mR3V1M2fMrSkkKNmkghbTPsyqDAXYf6qhq4ta"
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
