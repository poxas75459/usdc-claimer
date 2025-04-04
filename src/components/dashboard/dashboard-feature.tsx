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
    "4WwKmSJRh9hX96t7NcZ3SqaMJNNwj8oK6nT48zbLU32HQSFwDGSzHyAu1uxFAU6ahfihnrTtcJ6qXJ7ACmjRnctn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58BaF3seCGR2RV3QpZQhJrynQwKFCkSjwDeWYEMyYQAJbtTKZL1FLx8bNx6vDjXxK5Tz37EJhv7grskGGc7CTZ53",
  "key1": "2pE1NKzqZxc8RKgMCFPoH5KXpyMbRv89RmsJ1sX97FoKgFe2kquAfKDUh6RsEdxKA69EA9ftsb2vSTY5vAhUsWsx",
  "key2": "3h7mhgKsoATgjVSCtKZ7zAHv7kGizCqjtWYQEjEdr5mAvjhW3oUpbq2iM2hTbhSTznS35izhzUtLdafzyPoD1fS",
  "key3": "4c2qAWBZ39FkScVWWHh3GQgHkKJELvuyFw5Wi5cmupxo57ddbEyY4J14dameG1ijRAKm9hfrUs49qnEhT1bcrfsL",
  "key4": "4ZUX682GZur9tULk7k8fDf8k9reRmPuriX85zpq4YRXKDFy25NSGP46HByK5ceQsHbkY88iwz577UjjywULPBJh1",
  "key5": "3FrW249riQ5nQNXMuphcbrYZSdphrbbsKjiYTPH5UtPDn4FJ8bKTTqMg435EyYuizte3FHrpPDgPdxybFLnUvCCb",
  "key6": "563asKhiTRkLnrwmnjiTibcdcDnJsccVfP7d4MEXyqR1XETnaskz7X6mcptVBW33K9FxeQqgnepax1EpkKsB3Jkm",
  "key7": "MLz2DRyiJiYqkgjB9GM85Qo2QBXGP5SuTzE1H5urzToBt2pWGqyk9e5zxAEUks3TGab3kZceRF49fwpWANSrBwn",
  "key8": "C86UvehXAzWwvyumRLkLx7qjtarYk2zyxByxErKrFAjVnw5ruaDot6UKyN9EfGsq7fnMvbnSwQPtU8J64bZkNKi",
  "key9": "3zhz7ZUXAyFipULBycS2VsTo63udAWv75PvV4FxjVLVrWkh2BPC7HgUXDJ8V5LSgMNSWUEgUq2ParWbHWxNpd93i",
  "key10": "65hPGFSRuyTdcAwUsRUBUZsT5VzPbb6s7xSMThSMxR8aWTSLBXYrED3kksSc2JsP6Me7FaL88P3YRoQ85Ye1VPWs",
  "key11": "487r7qgmCjgKgsCzHteFU7ULEBJDLcMFY19vRA3QsnJ43WUpGjEEzwEwmLb1bcDK9zoYWrjnW8opC2bJi8d9BBe4",
  "key12": "3RmK8XvtgN2rQxDs3VFuxrQTTZbEpqkBowoitS3EHhTHnfSqGbpVGUcanqeh4gKR72fX8jGzmG9Pb1bB87qnJEdF",
  "key13": "LtBrTmKA2KNcnvcQqMuQVQA21T6KJgmQx71QRTWeDUNVt9CKfahxqEpTWSswZKZdpLy2eBMMqxA6KBqvxPtHf7u",
  "key14": "QqMyz4335PH4cmQkhinMV6NbZtXJ4Yfb4RQnjccVBfmukFbxLboiMCu9wUg6xUQuWtmQFnWe4H4bCXN89toFcR5",
  "key15": "Tb1hnzqTFKKZ9L9w1kvpHCBcvi4bwvqoaupuwci7qUJiWGRs3SyyZgHWQuBDLfmSgefPZ6gv6PFrecR33VcpqJ3",
  "key16": "3ntQM12q6KbaSccmVyYTwyJQ7dZLZZ1mtmN9Hkf61NCbKCLzk8ZxPgu8cDwgGzZ6xzrQAYV72yKWJBdCabUko7jU",
  "key17": "43Ghg3mVaPJFxHNptaZ6SoMr2aJPT2ZA4J4XGWr6si4PhMQyBGqjbSfSDNdcfNN4UtxRoZs58SVWuD3n2rsN5oJL",
  "key18": "243v5gyn5kjtWLWNNEpeFP55RvvjDVoPt2UX8vXUbkaYA5NWX75J1G7b5MYpt8KfVZ46WcQfELnCzRiKA2Qkt2Jc",
  "key19": "obk9PeVmB9tDSXfUP4KcauFKC8Dg8gPRKqNTyvKjpCPtPuNJGpuZcM9DwB7hoR4pnfbeEoNV15MKFAoCv363dUW",
  "key20": "3v4HzfTCSXpmaVQF5LZCw9baWQPT2T2pdbaZ7tM2cNVpvJfvbvf6MWqfosf9Z1zL76sPUacaoAV7otVP3NXBLAGb",
  "key21": "3fWHmbqtSscKSD7PFqybePQSAh8C3hdt81fnyjJ9vFFuEGCyrAj5UGmYCuN3G1EF63VZHjW1ahthY3gXQBkRmQBH",
  "key22": "39UgsW6z75zF4nTNX8fJNPhxafQqtxzWCHcvXUkUawJZoSkG1JTeCuBq3Ur5YbzfrWm3pN6qg5ks5QKY2X7hBQNp",
  "key23": "56RU6pJ1UscMky2GawDtFDSkpB8eFahxmij93T9nssrXDKDSyGXjtEJGFBcX2ybbzez154MN1K2uCyaZEsz7SXrk",
  "key24": "5zj9pUHg3niFYYyrCSZ5H8sCF6zY3P44edDopyDeAF4svNMBppKnPTL5ddqZM7DU8x75ev8SPg5N2bcJBkJW5vbo",
  "key25": "5JGr3P4tUeB15DHKvJ66MkXuRDfBiKGrX6YzFiT7hgtbgxkSLbE1cbqJj4fRnK1VGnaGYV49dajZvFawZE9eXSZJ",
  "key26": "3H1i6cgKsENQc5zhNbtJUSQTZvj3rhsPPWbK2F5jd5iiFqPcsTUovWTz3WtbsxhxU1T8wAEHsSMwAMrmfKWvJwuT",
  "key27": "3zgsRREi6PHXxxD3ArmKLAacbUsezAQYVuK8N8DMgrz3gQQB4N7nAu7oRh2mHddQHCvqUGpTEendmZnqhyfM6yF9",
  "key28": "2CcnR2osrfKjC298bb8QgpnU51A6EExFEMZmNNFJVmRasJ619n2TJUp25sHnSN4KWq6TjMuMkPzGhnGK9VqXvwYx",
  "key29": "FD7PpDVQ3zXf7AKL87QEt6B86QUVDzUyxQQbrfch7EvxwGFnZaUoLGUFLYAFvv6SvcnjE3VAHG14jcDV6qMVYFj",
  "key30": "3iB72t6ZiVvqJ26XxAWmt4xUJZgxLBVmLDBbD8kfyBceFUXAR1Bciy14kmLrgLaN34ei5Z7NLTfkV6a9bMeTNVzn",
  "key31": "5EY9SCxUumgy6rkfqrygjSZzJx1VFiHVDgGXnmKeboQkg5Nt5SrnzvtTCq2ckEjwZsFmLcdURHUoA8y3PawfLDf1",
  "key32": "37vZXJjFseTehcubJG3KWevpeTLx5ZTUawnioiFWPQhqpPkPZ7JtdPg7sKU2j7YfXRqvuAN4yjKtjKrmqoiD4h8Q",
  "key33": "4si1umBGjNBJ6S3Wd7xRnCkEgtDZJY8TZ4AGkz8s9eWukRRVGf9QSPMQn95tMdf7qbTn2Y7mtKd6b6MTmLWn3mKy",
  "key34": "3bffavunLRU9kNuStFWStxg45gJtRTbjsq9wEnwrKYAKptFATca4oMGoXdPFSVts8ek7tLfTtjrUcLqpvNMCDiNd",
  "key35": "3YcZTrgksdcuihhwRQVjY37JHDhdfUaH3YgLQFjKYbZQpSPdmEDN6nRoayTDbKj7jZX4i3paE5jUQrpEeji9GNju",
  "key36": "24K3TERzcUdosPHCJBsv7HQBn99Df1Rnyxirv3mQsvvY7pMrSV5WJMzSf1Q7H6Up2je9YNbgU5AfEAJKRjKHUFSR",
  "key37": "3F7ZJYQt2iEtnCNxFFjaFfvAKVuA4YcSwqJYWMqYhtp83wEG1NygcLbTbMtQzwNVHRPF64mTar94XAftEGRTQBLt",
  "key38": "xo3nnvyFJ8oMiMRkFCtZDcA5YNYAH3tqQn7tSxc8Bf4rucDMJXdoqLYTh4SmS2vxPA4jMCYU8PatuPhFrtkLzUF",
  "key39": "4SkpfBVLcmc6WB4mdUTFUZYjwGdLTxXgkE5sW4oFiJVMdAQXvhUyKtqH3iP9KAdteFBh7iB9hRKv12ejk35q9Lk7",
  "key40": "GqWnKKiDn6ALvTYMQHiinrSNso5XQxckiudCcodXXqtcGt2Au7WAHKvCyVcE58jT4D3mewzAxfTpFLt8T3BQZt9",
  "key41": "5YwDmsZpJhb37Fp9dWUHJRPoGoEtUeJJVwGE51NecrjehMdH95MLT4nyQbjJYGRQagGewEKTBKLhQq4o2zQsKpix",
  "key42": "mPcn2PFyytf9NVSDZhb5yNgcJEcEvpJ8eHfiRGphZ4jxy7e6KJu5BPskSzjt8JHxyhjufUcgpSL6zkcv5tRfEUo",
  "key43": "3judK2VPAtJPp2BSjZZgvppr7gh2zUTELUrxKSLPsY5V3Wvw8hfQqqxXBaWxWT7TXjRXhQna5En3h6pDagityJvc",
  "key44": "5QtMwNCHwn3z5Cmp4Sj7UekZRjRL3gxQWuy31DPJYqKsrcGxgc13AdR2kM3wfNKu3Ss4XbKJwm8MqzpkzaMwqfZ",
  "key45": "2kzJjZ9BvUkaMj34vCAcMZhLykLn4Nzg6JUPmG18eHrZp36DxzTxbevWusnzH5cD6eNAVCrV86azdApLQ62hipfh",
  "key46": "2YbS6cXRT2GfJ5y9BJXUyQ4ur6DMP1fM5psHCSfGTnufCiRyWEDxtoaweMkdSaEQQJ5JYGbq5wNMgfdvh5TvHVDn"
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
