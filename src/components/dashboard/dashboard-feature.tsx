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
    "3cLgGrtBUP97YDKzhyUjEh95vbeodJxUCsiGKfaKRMTXtM1A4K3zjnSgNsAe3fmbvrvnES7m4gtpoGx5cBYZ8v3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mKUBpnpb4i3d4zJbLeWN7y5pTmp8G14wJFHbuNM74fj2f2jaqyEZYAw6pRpmp24FsznV5S5W5TBsEQkhdnSEuJD",
  "key1": "4pnqe6CPkq5xtjmVSgMXYDyfawxSndqeeokWA5Zp1xhvp2fgf6tcUGumccCMNSmPqnfRimWu6T6RoNXdRqifWNqG",
  "key2": "2DuqBR5UTjCN3bEH6kQvEsyLXjEXmkj955ZeNHebVoLZHVbmWnSLMdDenVron9kdtXfnEWgeBvrkx4LZVsnS4xRW",
  "key3": "2GFZjWaBFR78nvX6EYSh3YSqECGEKxLatBvPiwMaNkAXPq6pd61VRCHNkuXg9jwYJut595cNoq2ycHN3HWHmN11t",
  "key4": "3FzLniC1maLQiJWQFVKAH6Gc4uGp5Fz4EBvdxcPKi7VbEx5BaZ6x5CRpcv8Ch2ADvbbdm6hLkG51u4X4KhxGSexe",
  "key5": "3AqFmEWE2p8MpmY66hfJwwupPt8X67sS5352t7ahfGZWaqZKxpr22AxnU8X3Z91iK4BN7To3FWTMGRn1mwqkUuZv",
  "key6": "32bzBy7xE62Gnr47WeD2HnFCDgb7GM8WMNKCFFEpq2RKxeiJWfMcJjBjeeVJd99Bj6mmfxSZwgUtNFdGeNoTjexe",
  "key7": "4javYYYmbs45347QT4W7bYpgknr3bmxLmvZWsJVetquX1v6gFczKpJ91m4d9yUXdiv4fj1GhBvnhth4da2L2jREB",
  "key8": "427PJ1RsBgVifFAey6wCovErjnRR2e87rXkzXerh8UE37D1vorZ1drFiorSJUb7n5ddgE63zEUBNgB24FKxNvJaC",
  "key9": "KV4AWbpbR6VsR6xCnokS46UVCk9CKE9DPSUJU88WoNsmyKviLttd1DVgp8CQrSmsjyySa6N3JbydQtELUwMY6o6",
  "key10": "62E1WXh8VRKpaqw8oiZVbArZStb7fq8R4tBvNi1GXgADFYyBUBihsH5Sgk8nSovtg3uGRemUK7SesCZmchtDBCoA",
  "key11": "3LJiumzGH3afnPKuwYQVxbcrnW93U8BnPX5DpveNgrb4XycZLHyMCe7PFRy4TSEHAtFkdYbQb66hpBrR63p6ba86",
  "key12": "5XZahYSp49YyxGFvrVrzTsYQoA1VXUPQ6is4KxFR9FpuRmfHXDUVgiP5fF1MstvXtEfLQDAGU1UDVgXrVaP5MgcF",
  "key13": "5UsvPGU8sDfbZXKSvyr7AaVvKywCGDrFccAX25HzyV1jB7EaGGZvP77tgFdQCiawgHB2vs7NN9qyqC66tc7bFQKa",
  "key14": "47NCB9ApAxj9M2GnwkvSWZzqBRy9ngHq3SXyzJGYmbpcZzoRBUgJZgVHA6Sh5ZZvptzhMJn2z4op3V4f59BPFw5n",
  "key15": "2F3C9WA4wdaonSgQDuNMtba8pQftiNxUER3MGYH4p386DXfQFuYWSMFddLd9kCZNcGm6jcJ2iGoiwfbvsdExHGe8",
  "key16": "5oyYcx57FQGKM4KwTuHmq2uYERPPkvePN3DFVYzCaFFDtu7JBmafCYpcNgfkttcuPtEuzVPDZkGDhQAXgfA7y3PY",
  "key17": "3D6opq93MDAxwd5hxFWGJMG5zDN4mSyhcCEojFCBQoaXyefR9eoX6xqY3gCAh2rgfKsYVRoq67NPrWmWfauAwL3p",
  "key18": "nwz7ACZa2PErXhSvoVyzgP9EoXYFzeUttWxiNPLmbnsSUKV3FTbSmgGFHy3Lwv76smmbhDV6WkGutNbeZb7XgZT",
  "key19": "5wgPEFVH4HaS8d7Z9Nkq7nYQWFMhsk8T9tXL3yqJqTkK1vFD3SCm4yeVPK28HS3qQbhG6XX4YdtdDXGu9Ygf189x",
  "key20": "3VQcKncaYjFFpCsXdYZrgh5Djt6DUu9eHBJnXTpyabvPT9PXj3iBm4mpaQvkd66J5bUiMxeyponVfRopSjasynPj",
  "key21": "5oU6yjUZtrQ6EgG1tN954U5xQVziCnrfh3XVS8urz4awnPa4hPbhTrNddfHXmdqLqJujRxgAipHGY8eA4fZiH2Ts",
  "key22": "4zCVvgRYR2pGiGGTDUAQJxTxcNMizWi4ia25mqpifvu6ePELCU2P85sFdmCmM5KHrJjCqtph825hXJ6VDmc3rjjW",
  "key23": "49LZbDPntQq8jhSAJxCWgotaYwC3a3nmxjX9BkHimQTNYqbv7uepP3jZbA78K8Abg5Cyf4bFivpGwkpK3vJoGEE2",
  "key24": "4F2e5Ut7d8KjsP4ndHqrCSxwnexH3ZJCL87KcLkkj3ANsYJxKzsWFZyzvCAHFcTQ2xTASVLn5sqWwKh7jhF4xECe",
  "key25": "4kht8YnFnFoFTadkDBiwCgRN1m3ozmbWuCyyFTPrpeBFcUWFgxgAewtxoZhUKCF6aS6yZf9Qe9ebZNamES4bfPhc",
  "key26": "3xSK6meDkNBx2uqUzDURCHsj1cJAQy68orQbtSHnGE4JVsdn1snUtnFGpT3NpPGXi7oX2hnag9Lzbr6GDHe1nnZ5",
  "key27": "3iVFF5n4xYKW2yMMzrKaASUWmvY5NMaRLe5T6Dud73uE61pfeUhFwpQCpdrN4tnK79b1Nv3jQ16wRKcpBx8QJTnR",
  "key28": "2vjXAxgRMcpFsRTNvMm3E7MxGPdgvvnW9EUjQrNWkFotuwNzQG6njMjfL5HVLVzM5ahydHtqERp3LxmPM3MzYqFP"
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
