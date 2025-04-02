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
    "3znosppD2Fdg9x1ajEXvwqfwrfVRfu8WcRJ24SediCcm9z5nFCmKKcBQY5WBWCsaVYBwGrX2JR7BRdLTeVqgBLsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dkSEduQoTiXVG49AoxuKBagWqQo56DnpKeXtGmAkJY63F3zUb5Ak12peTZQZo1DmAMudMmiryLzygHusGCQD9k7",
  "key1": "3tcCidLTjsWhv4xJMgvwVTbaKDiLK7Vj5yyruLgBrBmPAmVHkzZF9oxCPKgu1vzaJQM5hGbmQ6Ne91Rf3VDNr29G",
  "key2": "5pjfi5by1fwpNPFG8NoRjadwHrEpRbe3qvNUsob5PawQBCPCyq8bQiiDVSXetMQVb4k2cdGAM3bPpuD7EDQS4a9b",
  "key3": "F1rUH2ziZb5rcu9WRwq2xVXw9PytBhqVpdEBvPN1UkdsgiVJPsKmZHtQSAkKdqkk1HuBerb56urHGQpDZhM3GHF",
  "key4": "mCwoQi5t3MpKPwHqyTinBGFrZNfo55yNwatEWs2LJoKdZviV531oc6P179TDCgZ8yWh4Z7yARfy3aj7mrw8VJFJ",
  "key5": "xtAaonynYysJmouB61SvAokbCPtGKQcWubUXEGvbukW5swZk9Fjw7KhkvTqb8vEsniSWB4zJkSUobrmhsJBkpD1",
  "key6": "5A79wHWRhPcQhFhifPjNwxiNBVLjFbcSBbhiDXPAJ8LTRKDmobZzuxyamAH1kiDegemRL4K2zTB9WrtnYdxe3Csz",
  "key7": "64uNCYmPSbre9FKR6sP74xGGPb31VziNcQEZspyrdnUHk1D7BvaNiirVciZvwy4oNhTEceWMDHSb94MA4G8zpAD3",
  "key8": "2rbCniDwpEzWLLg2LCgR1dgSseKBXWs1amNf3jnrS5VmzjnbBqCYcYWck9T3YgnBfkHACofTh51ioqPiDaJUuce",
  "key9": "5oXu7fCJjQZLh8rs2AGe3bMhjQTxpovVp7NNFqf1jy2c8BByLJczUVRzmURb96rPQDviZYFjHcAoU2DkGL5zUEAK",
  "key10": "4WinPwgktEeguqgQqxiDs5S4W5rabbw6zdP6i1ygQ54BG32zjtHXCGfjEKddkCNtTGyb3jENoc24nHwfTLdqjJA3",
  "key11": "2j8XH9LqzsNC21a7V7mekCr6dexRtVWxKBC4RjuxzyjAuQyJk9V7ytRmCm6b8oP7SBJdEoGvz4gd4jwKNLdP2Ksq",
  "key12": "4qcAyvL5fhzFp3Ztz9ggZUt6qp4qRwrUhRCD4UbzQdUbth94FNnCrR3KxH4TaUueoyLTtnowNirMoah3jpdACrU6",
  "key13": "2pj3ySaeiVTrCX3N3FfMQ9jcV2sgvQdhbNJkE67QdyJDFSmLvvEjYNtxZiFmZsGGur4PekeBjqLkJgsoxj3tjSrk",
  "key14": "4iEcw2xZpb3HVh6rpjQsS6kq4buDY6TXzXzHUntQso5RwuD6LjrTz4eL48iwGnkFkHH7tzoMzEfvnhfCaHjFSu9c",
  "key15": "5U6Va9HFtaXEeWMqjbNF9RLojNDp1D6fNiCZcvq3DnELwLC1KDW7AgH7bVsRwQiXvojgyf3t5HyPfgZfyYmKC4F1",
  "key16": "2uEPcqCSHuYrK8qd4GAmgnN24uZwd74NVNFuki6D1aCQQVvZKepYazPrn1S6AqgRTugxw5BqonFYqKYAZhc2XWTX",
  "key17": "4ABgGyYhDPTFtFbPjoGnkSGdLDCGnU3Ru4LcWi9pQmrmJ8CPeBGvePSErMVDKujBha9oQquzBHru918MohB6DtP6",
  "key18": "626LwzR64qzvrdch3BCYQYXvQn7yDu9ZDPJE3wmSo6GJKDhw3Vsh2uEeF2kWqewdYF2aMkYEwdU752gdAA3uGDDK",
  "key19": "3EKUReUkeTNoxvoA3czMyVBDfQzkUBmH99yq39mwpoQkxYWo5WXp5fYp4RqmMoQXMS7WWJRHGc7gtxrVe2qrEymH",
  "key20": "3u2ZsZGyhxzDHw7Jsr6wRRZCWHCWVMtahFaJ78DVQdx6S66QVE2CsSwmRPZDZ8nbMswsqxxkreMLdkHz2WY3RwQv",
  "key21": "3p1tKcr2GgA4u7TZxvYLitpcRVM3wYrasZbM3Ff93EDxKswgUNyyGy8LLykzom62C6huWiPLVNRimGhkrRpheEhW",
  "key22": "3VxRyoqsDgc1UvkgfrhAjEKdMtGjvwhPYu4wnRqKvgeWkMvyni85FJomoaU9K7TVtoQdR7GmZPv6DygxpiN2vLvL",
  "key23": "4xNGHJteinRqWxMAnHSN91r8jVR4tzZTJaUXC34dc6KCfS3KNBV7dg8Tb7sGuRddn6XWedFKMxXVJvPs2NjdQ8Vm",
  "key24": "3MZkrw9MFaQPdLi4U8TPTJMshDB9FK2BLRAwWTJhEeqcGhA4x5tn5p3Zf6r8JSe6f7Qb1gtL3x79okzRqYBEyWCP",
  "key25": "2wtCexd6Uw1RG947wTH9fS7VCHC6n7TFyeq7SZXbXXDCQBbCzgCmVCRBUzYJsBfSig8D4tvtGMV7Eq4GTjPKdc1c",
  "key26": "5y6n7XfTJvKa69P5whEXxJHYr1Lurr4fYPmYaeXeAR6ooVUXVF2Eh5qvo6bvNgCeh89qiWX65S64NhS3NEyRDLbG",
  "key27": "3j4pqaBafuMKiZYrLWLSdTj7m3cB9JvhyvZsZtedGttmquVjS8gRMM7du5ateHRR1PudViS7BY8yegmeeuXJRpNg",
  "key28": "52YP8WoDDK1DTGZ3T7BHqwXZ7ZkyEYAd9BNAMeoSzLUPESaCDjYDK7m5hzZS15sjjkF8eMByXTcbHjVeyrgm6Kq4",
  "key29": "2thogfYKCrDH3UZ5n4F4Xp774rH1k5N7iDQuHLvuHQFyvGJjPDBJ9WKw9Q9B8E5My5skaWsHUeMhCp6YnnUsRPc6",
  "key30": "2wWdLEi9tsRLoEAKghpTmR4C3ZkLSaaxWVgtrr84R5unczew7F3h5U2RmNtwMgdhyduv6APC4SZSSHiooYkTqSRq",
  "key31": "3UemP4S5oKY88KqX9w1RBpHeAApeAhCYViXsz1Hbg2RUKEEbGcE9Gr9mEw5SNU97rKyvfAymw9ybMf7T4dAeTBau",
  "key32": "QPsJaXK6qdNTa6ub6pe69MYkMtDmgNcGcyjoW8us1Hwc3YNc8tGFhCUPb8iv5q5xQbrGzS4iBPczDLWRxqxk12m",
  "key33": "5G6h34N7nnHEC2RVSzTdHF3GGuFh82HZenY6FALRf41CJQamVzkDAdkz4EfnCDmbLDk4VNkQFPxD96g49eTbREA",
  "key34": "4SLPkbKkKq1dmJNGVNd9NFJGBD1cMwSzgLoCKBLkdRrP88tvMigMmT6tqMudGzs5XxsuHPT9yv4BTKcLXVPWQxwx",
  "key35": "3p411cn9ucSN5rmUUuwQrnEBSM83d95Dhc1s2WqgZsznBgpaUeKzk8pY55Li3ykxG6Qk8Df1YuRaroRELXKaaJ5D"
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
