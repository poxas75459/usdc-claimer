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
    "SNPFVgQAbvgpEgXY3vR8PrXNgNsFwPru7Hon2ers24cr5KvuJ9hP3LpD7kuG7be1GEJVwvj5spxU4mMfvhKZWuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314f6FuqfSr9JNbhJ3UDstZLmrEUsFqqKVwuVPcEkajc6A8zak8Q5W92MzCWWpVJFntefzN84yBd5BiG99pkShnm",
  "key1": "3XXLanaowypx1WHBw232jvV62RQpHsGM5yZXy7o8saW9xAe8kmctvu3ego2btM9n9doERHSJHzhR2gHQ38HyLVS",
  "key2": "tzW5FDF7g4XRVwofL2YWSyS5a24RnoNNBrofmfQQMWeE2nLJPKiAVT7WA4wmu5RuFnDhbkLJH3vxfgeR1X8ievh",
  "key3": "4roBgiR9JahBPSJ87Kjp3fEKra5uUJLJvdTnFZSSq3LYhnpQydTN846tHM9WhZGLWAR59ZiEj8L9UMX9prVSaJnv",
  "key4": "2vvWweh97Yh76ZaxUnfD44hAgPHEBaPd4w2U7b5nLkfHbMxRuWNWqvoi78kSHdEL7hJ7ESr4RcjgH16WPxX4qMZ6",
  "key5": "23Nr5rgEdn7StwVfvdomHyNjY6HFYfQ3Ehj83YQjLcMGDXENzwEyJWbK4fwD9QkVuaTsTuXQ2KuS2mWbGUu14fUF",
  "key6": "5x5yGesawoPkxV7QTtTKmhwV76KUVNLCepJrESG7TSS6sTVtmdxPjPqjKsU6jTTYXDVsDozgtUnKu5aV9VkuS7mk",
  "key7": "59yZXRMzEtaRA2Un1bXP1hhN9PpfbnuCAtpYxRDdLnbVUv2GRiLL5rMJUVNSwJXqJ6mGwNC7VeYGxMVkdqP8AsVK",
  "key8": "5DnPwDDgagxxaQq3KrA3jYN1eCLe2Dyg7eEH7rKLX1tu6DgrPzwHjRMUbveJGRjVNbYTVEUcVF5xf7Abqc6mtoDD",
  "key9": "2ZVxJbZk4ULLi32XQy4K4CsRGarpiAzB9qDvBvurkYFpnTPr7biwgpVBkKP9CNtPmrJrAdcRmy6pZMUxwGwb7Pgw",
  "key10": "2gkE1LMjJV9v4AgfCfnxmJqEJuU6QDDR2MLXUn3fmL4KNd1W32y3h3Qi5Q75Y4mtRUjnBtc3ihXDrYbVDtSzrVQs",
  "key11": "57eokqXYErMbhrcL4mvBKADHufugZHNF7J3jbYj8XdtH1hEByS8EB7WS5PWLm5KgDNti3HhXg2FiMmCm5o2Pi81s",
  "key12": "2xhfzX2G9Df7zEDmTWUs8L4HeBYMM2s94rrca94dC9tEgrFrGuyGdVHJq5tvFSM5ZgdGJDCESEot3QvCnj62igY3",
  "key13": "22JDAb78jH1TzeX9Akh1YyC1BT6KHDRFjH4dwTJEfTBCDXsHF4iQNNuWEAoMV9LRUedUHLVhCu42eg2go8FVP52G",
  "key14": "22CESVttr2TcFmtfPRbv6jSiiRbK75NNZAC1fqgdRTioAtJ3c7pb37KizhzYLTTRhXZ3oUKeG3BpccPdpGTxQF4K",
  "key15": "ZjdAfYYMZdNB4p3KoxJxQY8scAFQi1dCtnEDi2oVuQBiLDUd9iDtEChjyZu5XiTYVY69uXmcDzfvrFm9ToQCGdT",
  "key16": "3a7xcNaG7gRRonWH1vLq86Nf7yKA73J5fVBHod2KJsaku9C65YwUA76D7yFgZYCjLdwVeqX97dXw7um7o3bGhAat",
  "key17": "3pwANDMhyGmsrAEBzVUEXqCFqN7sCn4YrNSdPbVTfNjP15hp97iYsc7jmQuRC3eD5bhM2DsVxLgy1DjRXAWWCiw1",
  "key18": "2RpgG58NVCwRq7ZKWPw4SBnGkTiZCyn13CT2fVhRBfMjipTFqTyfpz6dF3UxsXoymdMe24FXDoaAXGqXmtY54U5o",
  "key19": "4NP2hgCVXVv3ZVs1eNS9ftnPkKeZYu2ry9VjtDbbyjFAerLiVH52Y1qcrt8F6eT8oAKQXWRECKkZbRa7jDeN8NLe",
  "key20": "4kgDJQH4iHsiboZho1LjCA97UDv72zZt35eEeT5twcHj5nSqgf2CCFpXocppxeFJJrUq1SsAQqHMqv2DXB7WNpL6",
  "key21": "2GUb7wBzGRju2MFn6YJtpGGtBYyV3gn2QgZJ9zqtsh4AVAYCrY2LKgKaA9cZ2cgPTzqbukezkafrKCpMiY8wHQFT",
  "key22": "3X4V6WVx4ae8nKTVoV6Faa4qHFcJTEho8tcu8mZyAgVcs3kVKYzPe5JDmPxYbex8SsHr5GrDA5vFyDbVYyPSmkiJ",
  "key23": "4NAd7TWUUZ5nPypV2uA2c26YSTp482vkMeQx7NnmCYFBg5N8vG96SsdFSXecgjjfnx5DG8dhhHSapBZwhusPzFLP",
  "key24": "4BwZQu6E3XLDKUKcfBQYe6c6igSrTNeVs6Q62STe9tUieuDALXfxH5ExCdSGc58D1Ci5T7mRAJVfWssdUx8FdUPA",
  "key25": "2Et9vaTA7YWt69rzYQwwx3AqiETE4yRgsTRkauJiHV3b7pfcPUqr5vw9ZfaAPhwJBFXZXZ1eAKi3eg3oN3jKMhHW",
  "key26": "5KQJDZnzFiij2hn242S4qcXJFGqhMxW4YUr5Eybi1embBTkEC3f2BmTqKaaxiSdFTkVYuye8bdA9icaavqZXZtPy",
  "key27": "5Co3AxCAqTEPPzwxzUhHHYQrMDRgqdXsNkaQDWUG2FeSVA34yZ1JEnKjJy2wZFVLpne2s39xEbWf4DCRPX4GU7Lh",
  "key28": "3ZqB5CHMJe7dPr8iypjfYtNrvca71UtNsRhN5E1FKcFqbjzcWckknAiGsHGgdrvvYdZqghdonpWViyuNZepZSftc",
  "key29": "5s7eF2a7CreMqBZq8WNKQnadoYHzG3TujM6tKn1Hveq462NPbdf3xq5hqYkHKWCUT8BmJjfNrFiYasS8wxd5vvJE",
  "key30": "nx2ToAMCtLhQfaLC4SPBmfrDtd8Zknm9USFgMe9tPBfxSEfG5QX4PBpBrW7DDUumVcdzfyYvin4LH1WzUo8fV3v",
  "key31": "59oC7BndZmpYJW5RG59dv7DNhx6SEPkAdLn9kUSxWKHPTZr7tjZz4FnpcY4fPKVyNbD33hjricc9K7exboPb5cdq",
  "key32": "2j8fMr8fAUKDj4Kv16nJNTRCgxesfizmbg4ghGQuEoC3DW9E4PV9rDngXMdQBHrymwUrpcF6oDmfXGjMNdbzaNNF",
  "key33": "4giqFJ9C5BQByTD3Yxm4BRkJ7QtiCvb2t94zsedmGnw3BzNGV5QTE2qusTi8QwNaTcJ91rmShbTJBLCcPKn3haez",
  "key34": "ZwRtMFQsCB9vu3EzgRPXcNzuXndLq5EsJ3agp8iNuhrMWnEbhfVFS4U9pHTYgwj1JvAuyabRWWhNDktGbqgSPCL",
  "key35": "27JHDph9345U2MnP4AoH487Wn8VpqNWm376QiNtEEPnrctYdqt27CV8iPJj6TKYPWwvFYsAFAZftMxaFj6AncHFE",
  "key36": "2tCBwwGq2wvHzprzp7iAH6jPzhEBTWruVfU1dAkC1oNhNUM49HJVbVRB9rtUMiSrnHvSUBUZwReZTaPM9UvSycXH"
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
