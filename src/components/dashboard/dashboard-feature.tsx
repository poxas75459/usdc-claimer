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
    "29tjCFkXr5PAPUxPP5iirQmaiec4jfYGHAm6S9mkDpBMykrUiiTEqrPakqXAXZCGct24Eh9TnWhtGSvCqQc4pSM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wNaYkacTv6WdQxDYrBDcfqspPaBqXM9M4FGS83Ma7Rvw5jfYFNKdkcYwswoExgjHLDSamuwvNHZmtfJg2h8MEoh",
  "key1": "2xoaVRhjyNwmRi6BbRZLHtMM5Ty8YUHc23yvmJpAtDgGBJEfKW6Cyzewefjg3VBeMVdbq2Jtf8TMtadG7gScHWG9",
  "key2": "4uo7V9175s3MY24HFJC5voK1Y8FR7Zzvxs752Qm8QzDW1FZJcM2AsMqR6BM46AEM8vGsLuR2naA3nPY76YXBMLhT",
  "key3": "4nnWwivdriLAmXMwNhgqiU5UpdoSqVDAiX1ZGTUuuwXeAWK43xb3AD9aWXzWHc5G1A5gaLbirNMdVqbRM2BcpRRv",
  "key4": "5n5qX6krhKzzbxv69M1cpopCb2UEUkU6gjLVoX3vaTRWkSyZX7erj7rbPKrP9azchzXh3CSweuw3rxxxKnkxi4uf",
  "key5": "hipTsMwpGBjQR9gE1ziLATdBgLbBTgpbmSTKxFEafE12yyJiZscPtgNpC3FbL9Sy68ayHXjbbdRw5AHiDMVLiCq",
  "key6": "4WqS1CrFUWxr6JYtfj4ptgbG5hTDDD3RQaSmiR7hq5RZWRGZ9s9rNwHYpfVLPeNmH7Kw5zZZJbU8RHxKoYw7wAnA",
  "key7": "5pCRBto7DQF4JNvJrKFpoq63K4h6UWcCPjehjDDpQjrVThMWXdWjdRVgEHdmBvivA9SiXiyWaNgjuTqtcUMV9nVH",
  "key8": "5G38f8XWUUZJXvX3zYViJk77Hf63pkAGeXNV2acvy7oj8g2Z9W4XJHvk6vZubD3jFTWgcsA23uhh2sFu57BqXkdZ",
  "key9": "vqGeQ528848PV8tJWGPgPec3d2CLv4giCZ8VMcR7d44E9ToK16zFrRs3bV4A1N262ivZHetn63U3vP6wk6bfYxV",
  "key10": "2ZNpeFNpMGQwELwGoQXFV9PPvcVkV2osW17Rv7XwfLTN5auLqSgLkGEW1kviJ7bQpb5KgVJxcneQ5LXzfK6Vqp9P",
  "key11": "5BQ9ikzGzXAB36HV3VgtuDgGXAVoDgV8jqMytHj7tkE643d92QX1r9yddLX36Y3Ur1NHcEEZW64t4FeZZJDFesMH",
  "key12": "5vbRRkNawjNTDu2t4wqZysxuBEaRZz2fSfLWr8jdfso4DGaL1tGyaXC67jijoe3icv1R1p4Lhht2MyuR457QNzZL",
  "key13": "2EdkVmXmAbqJABWFk6dRwmNwcgBkzTYBEjpi63Cxp6zatmrvtsr6yyBha6PEJnJSGKHkidREQVwVfoerzdHgUedP",
  "key14": "3XHZunHC9pXqc3P7X89u1Z9GQagZzJ7uYGvP8ACsHi4ZTGN8FbVcP7faV9XYR7TMyrgrx5qhm42VGxkhcUmaVKVE",
  "key15": "123znxdihCrHp6t1h6s4daUcNmE4KZ8VUvJrTDF7kCcJL6UCyN1zb8n3f2QQtQDnRsxWxVkL5aL86j5jJLtxEsct",
  "key16": "28JxN9RMWgvrBo9WRsZzDUBm9cwdMWNW3EzidHiwLW1NMvL9zm5ADfvBcAL6c5ij5BxgpPHvUfg339rE9oEHznEw",
  "key17": "2RV38UY1b9ypH49XJuBBBZLbn7RdSoCbvX8AP89SDfhZkDB7Jx4WbKrwphwieAktNnK9W5ayAJ2UpNf2zKvqSz4h",
  "key18": "3ipwWd35oQuK5QUDfS7Z9ZmAGw1k2R9DvrJbhvcUngWAduT5Xg8CHCkrwiB2Wf7Q15ox7DPdnbrDQdByJydKGLWZ",
  "key19": "6175r27sVk5JHeWBMUkX24PwP5nkVUr1SNpk7VKdJwESGETHVywbRowRkC9QK6Jz8C2NJtF14qSdsoH4tZyVBnB9",
  "key20": "jeSpdGWWY35hCUtP9wWhQgW7CwNHL1gMf7sXpuSoES9FQLWMFTn56vyz2eTHBpTg9g7LJXhMcgEi21egb3WKZmS",
  "key21": "3WaoGNfm95AssYMrP7yBYoexhcWRfgvDrQ7uuMoqmijQzhMrdeUEWTdoAAdjHQZqX2frBuRJwWEC2PhSMtd7CPsW",
  "key22": "5qdeofzyJxKqPc2E231RksZn5mkhxBPzB48EsegGsqMameDDHBwomFUkGR3c8p4pRePHn4P2xPXaZ7KjKBN5wEdR",
  "key23": "31NF77nNJzWZGPns5R9NeXeZKbC9zGPfiDCdgG6YVNTnuxjGyScSzM8aSdK8VmgGJcNKf4LWgxcTKVMo2W12wJ8q",
  "key24": "5cSkBiizw5jymq66TyyLm5fqN3Ao7U8wFVksV6QHMwQPhxjFUUc4kYnxvvUWo5yXMXpEm1RCGPy8nNBx8GKyjqmW",
  "key25": "Vz1yur8YXcvKbw3mYGwJSmQAsWrAvwoHBr141rhkaACkBxBroq3SYwe24ST9xGNbEZEf2d8Zrdu86gjCxRQCjEw",
  "key26": "3Bj3S44QaE51stcXBptB374g1QhrovMtX8gouALHtkB4DtHLZZxcDsXJ8qvkaheSRi8sLPXyWFA6KWr6WT794kPf",
  "key27": "4mCmLRy1sNCy3vbPzWtxvTKr5QUGK6qgh6XqwxHRr9RtpneFUhsXb3bMuAoRmW8Ye2kpnMRVE6U8PiMWLLwva878",
  "key28": "2sE2UeoT9njLmQGpwPwEuAZE91s7Bz4hpqkcCrKXVuz7TfAZFHZn6yrNW3Va6rE3QAFWKK93sNU1ALVno5w12CXa",
  "key29": "5xRdmMchAPvao4tYbmc5AZVEFMa3qckxjrbkRe2VSWjbBaT3ZLKAu5CDAmjZ2QzvBny1KjtgjubMURX4nt11jCze",
  "key30": "KR1QJpwLgBgu6endTh72Ep5L4qrQzVYRwAwqcqFKh73kzQqmxubNkhD1nDNGThW4eprDiVHar4JGnHBnuGhGYdT",
  "key31": "4Hd8b7sipygyNZwWfs6kVGzRNZ4Kx3EBE7Q5QZ9EEk8xUVqP3zC1afoXjMXoAHFVGKdMmzdtvKHtbLdUheKDZYV4",
  "key32": "5MKcVwVa5aLDZrPwqo17tyG73WoMY2k3MDMAk2QbezBRtzCHG1k9D6WDu8apz24iSitxv1TVqTQ7Gy4s98hUzTpH",
  "key33": "5FW6HYZGVkVfmVTJEyh5gdVu81Wdr4NTwLYfWiJXVcXHCHPBKJfRSHLYoaw27TJtyPE1NRELc5bcbT9PqFSv9ShH",
  "key34": "3o3Q8m6HTVhw5K1BovKaZBtjt7Ei4oaKTw3yBHwRLKyChFFGV5bPSEkkjqLmZ6mAV9brPfirNjzpnVdy5eGjbNcv",
  "key35": "AbuVG3LAMBBJ3TKywhvVGwAhCVHFtji7TNnuF7tWaPxhDsv6m4heiy3bpaiuFnBgRS6y9o3X8v5NwJqeZcMmodE",
  "key36": "5tdnPMH16yPMkJ7C2q4fyfThsaQy6QJUdwhcguBB3YuzGeQwdTQ6RDenjCNdHPPvprfUqncZUJtybZZ1tQPtXQCG",
  "key37": "4pDPqjZEapCMs3ZPMd6J8uQZuA6udYjTu6bfQU3duy3xdPHgkZWGsekXefUUwaZmKq6yt2mcYLKAq99jkCC7zydU",
  "key38": "3JETzqwo1hDpHir41UJHQP4Wmj3dBoS7CpwZqXjsFUpuDGJQSpUj3Q5WxDngmJENbPHxdNVPXvkjcUXnmFni6d6L",
  "key39": "bZN5jFK8RgUqTVmHxVVdzudmpKwC9gDNYfDo98YBR2jN1wgcdRVQUfTdeP8yq7kEYUkj9uK3w4rqb7zT6RXri7w"
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
