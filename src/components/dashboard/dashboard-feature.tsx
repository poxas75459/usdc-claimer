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
    "4MNKBEEZoMvC1NLh4ewk8aMAE5fLtE7c21uaGBG4NTtWAfmFvVqVcfMU7h7WcJWHapUgki3mmDpgEkWkWVLqbvdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4auanNTRCbNGjpaYtSgRZVzXf8mFHmoWJ4D4esEotWsnSoc1CexK4p5FabeDcWxTBkLQSLnPNz7UwR2NtJEHh4qJ",
  "key1": "4xqwb1hxJadSAEoYQjL3vDYLVTe4bV96E8azb2UL2PAMqZUJN69QiiLS4t8Bf7jEYSc8jTCDAmw57M1ctbAggf2",
  "key2": "3rcu8Ks3wX9giugGnS8ZULLq7vuoW7iFcGVv6h7KBMM4MyU5B4axHMKGj91x654KfFfcU6s3eFvJnVtKE26QsQKt",
  "key3": "4zn661xWwVK3ieaM1edSFXoowdwxRyVFYG3iPet5BcSQnD2MGovbPoDKkoCMzNDq4X5W8jGr2f3GTNMrhDo4HHC8",
  "key4": "4BFHkvvaHJuRiAuH5RZXYDmZvcwEZEPv6dFQtWRezuQjBucFS2zs9yia9B51ERrpCySxWtzDkrTX1kavMnK1mALd",
  "key5": "z6yUHs6ZfKQAjMXfKzDpyu1fP3DiA3trpvmpq7ykJkQYdemUwxtBsKbyv4i4HpfANGwzorck9LyAozVUVE1Qefd",
  "key6": "5MgneG9QCuugiofHrZpWroQz8F6to5nQxiGF9PSd1kirnfQUYYFJbiX3H4n5sWhFqnUWwdiPuSgQrLF8VDWvpRAy",
  "key7": "2FkQ1Kn7JoJin6BDRBk7Rfoeraji6ZrJ3Kndi7VsA3AtZvsQR51do2jETLpYtF7fRQSG7h8m1vy5RGpRPNCcpYzM",
  "key8": "3HVMLYCK5YnbKDZn6HBGzKqSQaCWXULbUGbqPBEWMHCcbh9bLhMoVArsnuKrQQ4UhELHKJw2bt9D1WKwCgm3rTCL",
  "key9": "4DRSSLA3Kukey2J9eCQCBwo5i2Mz8jbHkM5p92frQffdkHHmifQi4eBfoTNpS8zQFQuCfnQiBM4kb633qE9RkanS",
  "key10": "5hkEokdkimBFHfgiwbEM8HuA9GhQm8md6DkFSLDqF221vZsSxW1DQiZ1qAbVSrxSVVV9UmQeunBLkMnJ6zM6naQx",
  "key11": "27RXx2JjyCz2rSifRWDFBpuTpmZJLQWdWSTAgU3vXBrGeS9JFXYbUvxHQVGeFpaoDg1bRBqeaSoyjnH9SgPxVBZ9",
  "key12": "58BGQRAitih4sgSTL7N1rxpUc4KuiiRnyNEsCWwt8dfMUtC2K4QEQHb9aKugUd61e4g9XwwBToWcsEBef8BdkF1H",
  "key13": "5HCpy3GPW6ZeNugKNFyibswP5HfhRxxF9xRiXFA6embd5ScveXiDzKGZhAW3Pqv9RrcJ8KBq83CF4nV2zXxbd5eJ",
  "key14": "HLvKzmGrJftbBBYwM2ZkMnGVp5LQFULKnP78kNS8WpFSyRMpQuDqqtEoyfNBxQ1yBBdDUfjVmUc4USxV9fNEpbT",
  "key15": "5grr4DAJ8fQGEd9z6X3r3S7wccTypUgg2jdrYyuzey8YQUZSswd315V8aeusv4A9m9jZvZMRuJ7isxf6WNxbPK51",
  "key16": "5wLE2bqAQbxqqbdJZZR26fdT9aaMwoou9vvUcxTNBv6uQ6xeCAhSPEwNp1q5zBRpk2MPrjD3yT6MmKHfCee9tu69",
  "key17": "PZa6CWWTGAKS2sYdJ1ZwFU7PoraCurs4GvXkhPG4iaAjqoyhmFLQ2rcxePBcojfsbUfeFcaVcuYQEq1NYQumxgP",
  "key18": "2VLpw6QDuQ2mTaNJQMrHTL3Aucv5qm4b4oeNHsfWbwCjtAiuN39pDAVXaPq7THv4u3YCuqTY9woqeNw7cH2QJbZM",
  "key19": "2Z2ELZz8v4zdvdoY9d2gow4hbYw4y6gkuU9f4h5PJ6hDp3r2WQJ8y2khNqbo7jp4Bo77BYqsEsh6bwpLXdUGacNo",
  "key20": "oFYnNuJo2e5TE38fpRZsbWLvzkFoE8or4XJY5733AfaTvhMGiHLCQZJ1T7ezyQRwFfkEKuesWR46ahxzt49Ln4G",
  "key21": "5SojwPH3MoAb5uUV3KX7x4LawdZMaTFw7z6oGMYygXMxYc2UFYx19vSHyx56oM5eVAPURozFvc9MWhK6JAhvsAN8",
  "key22": "2M6JSh8ZjG6ThG6gFCyTKSrtsbu1HHh2TiJ9cpuCBdpWy9v2UVshBSKYWNxo2Z3WvUYYpecxsWPfA71v9DTkr5y6",
  "key23": "vMGLCHV7SpgJjody18xJgmv3tiWQ9D5RqZL7Kfx3RwYLJr8LxT6ZBXF2ByVAkPEfsUfk94UZqmwajCXuvfr73oX",
  "key24": "4C83om4LYSzPd2gE8WMZiuXQsvKBZPRz3gfk9oZNxcoy5mX7d25rN5KWuiPsCJ7r9gWx78vNmDEp4MMPF49A47mj",
  "key25": "3wmTW8hCytWHtaB2BVrsnE8FHGKNRBG2X9p35BXf8EuWUhUvDDaGVes28RrMUVJKiJWupg9Jb2hrzyDbbNXqCC6m",
  "key26": "54wa8C8tP7hHwRJtMsZJ7sUecrZuig8hzXUKfrj8FAfkijhQUV74s9DV6FSYvHA6RVxk4bybwPs3Nq3bQLLBagzr",
  "key27": "2V4Wa7QkD5CD8Vxribqhdp1oy7ZrStxR5Fyb5Auvtvn2ZWQ7M9g4XY2E1wA7Z9USuU9j3MDbUzBCyi2aEjQgQgCQ",
  "key28": "5Y3kssJA7aiC4nMD9EH3o5nY2KPDZSazgYjp2pkk93uqB2Pjda2qLpCWKm1qdHJ7hQbipsvoemFXbsULyZcn5DJj",
  "key29": "36cqDZtcCVu14Jkkiipuwc5w5kz8DuUJWXNeseR1ugCcoB7zxX1JJ4JSJDVFMPH9ybEFqSJdrbWc2aEAzY2DpkVa",
  "key30": "4X7md62jGfk3BMFjkE2kJpxXD8PQnid5Hdw2WVaGDp6HqfYE2cL7ACFQpVCZ7Yxwgy6ZFPyHsDnH6K4t4eZ9hJMX"
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
