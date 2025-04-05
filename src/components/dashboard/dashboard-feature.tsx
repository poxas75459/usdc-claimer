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
    "2n9PXjdkridvigbXq4syQALAiotavrjPJ8RXzW6FZxD7UYR2SJGaTPhjJvmH9GujL3ZT93SAmwZuyXJuasDQCkXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35rqHYsb7RfSDnN8fxFLGqk8vxqK1b8Wxo34pF9a8Rf62MVbqW98skWyW1sBDnvopZEEp2J27P7XdCZXrcP54H4N",
  "key1": "2nXjtEXBinTHX8gSPvCbT4k4T4WMY7U8514Zr65wTK5w41yn4diNJC4fjmziu8fFGpNYe8f4mwJFcsZtn2gMBHF9",
  "key2": "tmQLYJpSzrskLv3aBtraLGGp3FhqA8u41e96xFZzUvGQ4XbEyoeeoe8WYZBQF39x6hHAi13CRGtN2JzjNYaxPxB",
  "key3": "3Zyn2EVyX9ijnnUcemoJWJ3Jrwm1iv9g6EaU1bGU8CJ2kwWfUqfxyj6futcR3VQ6dyfvQUgMWYELmnwGHysCpwsP",
  "key4": "4vJpaNLibKocCpRDNEDyvJfABQyF61weuTaUR5BR4hBwhUgQUDrcjpHHMaQQ8U7WCykuch2KgjsvtEQJddQJnD2M",
  "key5": "2ZYDqetc8YCb3d3FSrGqvbz9gDSgGnB1nLp63rGwSwrBxHhML4vLZj4EoSa5ZXGX1EEsJd5j2UVogrW3SLenzyTq",
  "key6": "2XVofiXXpHP8YwR13WzAo4vU4WzYKhjgSCuxnwEVJpULZdb3Pk6cWaWoWn6kvXxHnx7sYfZTETJhw2YovwbctLqL",
  "key7": "4QkXA2A82LvRusPSUPb7Uh7cHUhau73m9wkkBeBJm71srTJrv23BVqdN1nxBP1XZe3nE35hHMMnduDxAjGXEA44b",
  "key8": "2SaTf8k6oLvb7UcUJTWF41hEFSKUtgQaJ87Ar13biVCeargKSPuUBsMVDiUycmpkmC5ehKTT16xJHMRsiPYSHNse",
  "key9": "2u8dQ8XEvAStJ7WwfGaGYYr7QwYTWhwzZ6dpsnntRvWQovN1JuPS5XgkMNc36kahc6eueVeFESJ4k4H43S6gKDUp",
  "key10": "dy7Krymqdn1MZUvhpr8HbHWQW9UgaBpSEUafrVHvmvMAv7TPqWxV4q1AGoVNLDko6Lyc2cV1cmKQ6RMe9jBYSrf",
  "key11": "2LfU16oSEMvBBVGz3cTj9Vzu4sSBx8vQWeV6oA7GbMuWVkkXcyP7rJvgsvWFwksiaCKam1gqvNVNX9A3UXejdeHp",
  "key12": "2PDph6VerzMt7b78A9pKyNwoQ7SY2hTQXSvN7392xsmkgdcFKqKmz8kcXyxNiyvWt87gfppaQk8J5ACN27RRkL71",
  "key13": "wpTEbsDMF8xUYcqfYGcw8ooAmmxQ6wx8Au7KZ1BDTXzYHwKhH1uS6XnjxfQxneFc7AXcWpVesMebF3XH6d8SR5W",
  "key14": "o5opR2Ri9UqmrMmhkZY1G87uQ4c7bn3GDiEMwKcCB7eP6D6F2eSat5JPhnhCH9Aqo8rfggr5zsuEmioDv7PoA7F",
  "key15": "5pQxgJgY8fG7CVFm7abEsAcUD7tYt9KBELHV17mbdzYtdjS5532KF6Ly5hqwdxYQEjG2XLuhLPYaX8zag9MWGC5g",
  "key16": "4DbTZpEdpUKGkVsG8zhSSEXv5W5BB8rXgzS5dH7FDkJT3Rc2h7UpsAPNFwore3oWKxy5XyqX6XaqVewb9gNub9bn",
  "key17": "5aCtDn4L4FqGLgnCE3iybGTp8TZ49woodBQW2WS2XNvQoud6t2iEoX8yhMYZfLSXeWX4VeGMsjyLgvnhwqUDF5Yh",
  "key18": "5SQ9aoShbXouRvJBgnsq2ABaXxmTJnbSyxzcDkEtFrUPod7qFBJ7rry3CiXkSLHTqAywHL4XdYi8BK27CSav84ih",
  "key19": "5rd4ugcm1wtz33yzerFxCxKvuEbKsnkSJNveRipPUDPEvi2rZkBQhXZoM8WykkvcYiTnHdtPFsfFnUZ1dDQP7ESd",
  "key20": "2ayvPR4mDCfsmdfQPnZCDjrNBdV3VBrNifhhTZyi8xc4PDie1Wm7kivdPvLo6K7JCQaJeBqZjT3t91o2259vLuoN",
  "key21": "5w8GusWENtPtb3zUyvB95Kenf3iQS9nuvXBf2NpYfo4YVY7nuCYhysA2G5wCUFQYZBDHM4r3JJ1A9y1J2drAnUK4",
  "key22": "5GANqFyRCN7hdRu9Z3P6SnNqYawDKCjaZbrm2Xa76Kq8vnfSHZStdwoUZJnAT7ve4BFz7aTHvAZpgEi3CgLfcyiU",
  "key23": "34fyrA7Urt1TBfq2wseiLY6svuEXLHo6FhVegEWmEA1UiM6TbWZBnWk8LhTmskUJE8Wrv8hZjRaD1aT9bDWfxKCm",
  "key24": "o9ea4EwK8akG5xdTvweuAhWz8tdg6DJ4TEigsLKS1r4WpXhixqXcg186o8722cx5ePgGxHyRYJ5Ws71C6jgXTAq",
  "key25": "3iS2PCmXwkgVd8Y4wrDbgXL5mGXaLQUnDDija1enhDP3FhQHAqgKxU75ygE34vGuQ5C4G373DXXr4hBSL4SoQXbp",
  "key26": "2ktTRr1se87ovRHELv9GvNMjtZ2MSxKpn1TQPHNg1q1hRjbzRBQD9PEBkHKuzWQbw1LVn18ahLVzVfjrGdAp2qQr",
  "key27": "589FZF9ZCof6MfWSrb3fsqnpSvtXEuGZyGpYVnSn5oHcj4Mnf4b8ruBx4g5bKuiHwueoZ8gjhGTZ2pv5zFjmtR9S",
  "key28": "5s38oBfj9kYZiK7cfR8APpupbevPNzYMmfMF2piVFxPV6q3a3WsBxqHSPBoCVb8RszuUTzXmvruf8vUF2Hpx8BAL",
  "key29": "4dGq5iF6PmMPcs46R67yBd2YLb8qS8Zvp6pCyADnBCzoXRBvFsQ5RrMfifMiTSfK1qBqxH5UJWCxbYCKJKBQ34h4",
  "key30": "5hHkRYUKjNaijvnS3GuAse6d6AHzNd16TZC99oWBxFbWt6eq8dyJjUsqp7voG3AyRmL7pvakoaADz2EythxZnvEZ",
  "key31": "2dwaoKoxwEc52NKoq1k188eeLYyqAgDe9hxGv9cLjZdXpZzjJ8WdAyguYeTgwpaceG2hrREKPWrT3TuWxK9NGrVR",
  "key32": "uqjUtPcBvyHsGgbcTXyTqH9ZgrGnJxAxH2bZrp8bjWuu3rgY8UTD8pLKu1EqyvrpsdtgtEhZC9XWPjU6iZ9SEgF",
  "key33": "5JfVRfeDxy54mvnLWHFqDXcmU42BzuHM8W7xSBB4QbEnwxrfFi1uiLNQhnbGvo4A53TvVYAXaePAbWjDE5qc1o5F",
  "key34": "4oXCef3NpuLLxTKFgkgWLhrkvTVdSwRcz3YzPZ9g7Tyv7RfmFj8YFVSDvuJs3Le6MS5G3gXHHBB4quHu2LLSbYvs",
  "key35": "5Lp3urcfVoRGDNWkhHYLCjBks8HBh2VRTm6qFLq9Be6T8TKgaeDwRsw4sj574Xu8o6Egp6aW4FABxDg1jHbXx4JX",
  "key36": "2Pn1tx8NxC5nY1q3sVXSDTzM7rqtdY8YgGVbiFh9pEvyQug5fcPASREdX38zFTtWCDtn4vmVmJAMMUDapvZrAoaq",
  "key37": "67KEG4q7wFGFF9qeoJUex6ehsLcaSpfvLryb16DA6gcBYmqAy8VmS2zEcURmFysLjgMmPcqJfkp4mSP4eUsdN3dn"
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
