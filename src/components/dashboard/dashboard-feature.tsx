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
    "49p8nSsxg8bdCv5MJHtzsAbyhhiPoJqkrexgrykZpR2HXPw54Ds63yTpV1MpM4iSXV2vPzpRzbhP8mygYuudL4Y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9wVja66TWEDGk56zx7BCLKRXMXTqTTsBdhy8N69T6F3m9rBrMhGRwNSDhMRHjst1ebfiqykN5EDpprhsaSKtuU",
  "key1": "5KPwLX6npUZRQGueE12buFVjSkFCSiQApGjBvmZaALx32xpSGSxZKziw93KThTFvMMuwa1rv6dkRqo1EAzMHAzDd",
  "key2": "2SXwSGUPjS3ZVd31GzsEpYYyX2EXy8Z7wcYfhXfg28m6tHY14FiGeFRWtQgQsZ6ueanYCLxbGhxC9eJmfasiDuUV",
  "key3": "2a2p4hRqeV9rZEHeGipjJ2LTnT1hvoHWpPro1kwXVGgmywcGcUhbxXdpbhckKcizWWhbnd413xawy3b6t3bz2JnC",
  "key4": "4EKscX6Bi8iXjNsenVc5q6PuZEFEdZq14YihJNfWEJFv25LnD7vz8ViwP1PLrna5TPRTKxSRyzN8LFLKyEA1BLtg",
  "key5": "zwK9t6XrPVaoqBxoNvQzhcbogLoVAmJeuPN5AEm7FW2mnhuCU4mFbaQSNKAhnjRoD3NgYJwGFbPzFTyyr6tLXcp",
  "key6": "52prrqUTeZAz7vPcKcUMEbaHXnqZn5NDLiMJXcvVFYca8P1uW9yFk97sCB87LetAPnLrhpayr4CvP8HjgyT8Ypem",
  "key7": "5VqscMz6PNMGUREXd87Bi9aAKdoixz3vnkMSAigd6SFCggUkhtiPJaxtQEP3K1UCPvpPvtDjrQUATiQmtmY2YbkD",
  "key8": "4u2dnjS9LwLmR4J1Z4LF1bHZVHvoCvCk11N1SwRLXV4GBH8rcoGcbZijLw3nsRGJMgCi8ksYp4EQQX6mJCmyGpbh",
  "key9": "5kcixrb4n6cdL2FoYF6CQQGEChWFv3SnxVEjiSiM1H6t9WSFyUKwRUYG6JDPC1Zf2MLZVZZ74kKXx2FQWHLphttb",
  "key10": "2zofZsUWZQ96xbWx3BVPE3pq2hn1zDHiPZDHV4PFqer1FddXzfWEAWujnUxjiFcaTrt81KuQZydME6EayRn6vu8i",
  "key11": "5eS5oaHCFrAqFcNJm87tjcT4TbDrGGwwSUYn9RUfqZ7nJyHMfNKEgcUUBuBRQzyt5b7SqESCEhci94f8mFp66H6",
  "key12": "3fffPxF8kYWZDeaWRBguuxpyPedy9oUod6zGtCKpTv1uG5p1dxHrnAshcjupnUb8fJpk7xW1aSSsjFZLZ4Z1An6s",
  "key13": "pEQxqSExV4KMthiHSCvdSRL37PSb4MyZbAezzhZqt3zBkhsN11ibJ7SvPUDfkSpomNkBeEXfUfs6WWVnA9Hor1A",
  "key14": "5hCDZ4bXeVjoocbqDD4g4BDupE9esyrrAcxqjFudxLytFX31MZvnUxMpzDmwypvCjwv1PbxKd8ADNK8rSViLLeiw",
  "key15": "3RNqkifwQfKp2sZXbnwLD3FuAqjf68HZcKCuJLnn3zNQijFt3Uu9rw6qkbY73wL87VXMF4huvzTYjzXXQrpa9kRd",
  "key16": "59LWkXheu4iGTrdjz5F4QkBogDbNCBN9DmThQp8XMMwqMYc6rRqFFCUNk53sieg4FCEsfLY5P2cUBuXDDERGyPtr",
  "key17": "2LNLyoPEEnxQMePSYFjCpY4vGaPSZQrMndnRqqRF6yEDaop6n8zSJHULmoPPRb1JtrSLwf7BBQb3YZ2d1Fo9RQmk",
  "key18": "2KwBF7ezGXShtuQKkEH21krWx18kMSyyMbUooVjsYam5vzvYCbF6iYbFNi9EHbQ9HcwKeuMGm8w2DkKokw3zkAFc",
  "key19": "4D3TzPeTcEQH65K772yaWtKaF9JVKJLD8a4sp9Q1Gb18kCMoAEYaYUeNoDAX4e9MvADWuMSpL94fJr6vPftwFert",
  "key20": "TnPE4NG71ySf1TEsp3Qu9GedpG6G5HqNSGjZnHTBmxoZrvgAvQQpyMyUWpw4udBBwuefknfFaxdQSzWrX8kvK8a",
  "key21": "FPFNGB5dhbo2DhKghbfUcboiHjN65PNYLraQhiqiy8RSFVdCQxGLPMWBsWr6NNQCNsQ2t1zPg2RNjwSfqDeZB6w",
  "key22": "2ndji5AgBcEgooWEfvGmyzsXm9suzzDvav8BfUXXKpEjqYoyvDpDWqnkzRPDQGrbxbRPj7suWFHYWqwntF1D6TXe",
  "key23": "5nLLsZjpRmbcFv2XUtKcoDkDdr4xyx6C3JntAbPSsqJuvEjjQ3317TNSMkRecsRWAQSX3upkeMKFdgUWasQ6X13S",
  "key24": "56Qxshgg7HdUrzeynMHb2p5nNKccXeNSWiMTNyj7nVWbLcpq3V5uEipFYYLDVkLEhph64swBmruGWxzt1xSnPCUe",
  "key25": "3Kuodjoah2WUtNkdDLXkpgkm19sm61KQHfreahZDEw38W1eopLJRV69po6vmD7wh3m6NG7RKi2NvQFKTeLS8xEAG",
  "key26": "4LZN3eG3X6ZqvPnT99R8m6V8nqkgdD2Niy447JixU7CFkPEFW6D5fm9qU6hiudo9cA8jNoabwhYTiX686eWD1WV9",
  "key27": "4jMDaCCmt8wjSVPW2yw7i3M62Hw6q7AZN2aMiT23W3LtSNug7hP7nuZkjeX4t1vCYNQrsFgn3FebgVVLSYUHkdUv",
  "key28": "5WcqQoDMbxuTxqaQmGT1UTBD5fQ2imLkxjVTZynGKxVs2T7pmDctd5AjYp2RLveJJ5fNJBu4GW7VLhvQQFL7474H",
  "key29": "4ogMZgXdQRPPqyzkRZRVSf5aPRYymSeX5Kj5k6Uu4HqpXabkxB9nDy755nUisv5LLD1DZ2yd7nqK9vypEbjqMDkL",
  "key30": "kXZpS2MYjpMHL4omKJF1aY5f4p9a9XEBXehhTqhgZ3HhcAuMGbAsW22MSNSWSewsaenDVvt5BpF25Rb1ni2nSVq",
  "key31": "3xBrYJ19fj3cFNTNs9Gsg1Q1Fvgt4UVNnBkL2qQku67iWGaMjWxeRL3cwjF1eZ6BemgkpRZxMKmAaaXZ8oU7GjVT",
  "key32": "3bKtRPjqhCzeXr8RGSqb7pSSKeteaDbMH32i7Lw41thPZM3XYiNa1GxJsPAYzn1FpvLLXxzNSm7mQBTGqAdJkCSK",
  "key33": "ZXLPNfTUg2hzqs1cNuQrkMiVi2yFFM9k7PnAj8sWQau2a4j2fNgRyj5kZPBtLViwXDCuhaAHwsXt8Svwe3RrBtH",
  "key34": "wpPgsk81YVFtpwaKLN5xcawpiD6FeJ8bD32EyfREcW6hMHxkyH6371G3hGphFmoFhsxKUre7P5on3MgDw3e45Zq",
  "key35": "3D7yZd2hpZ2DutPcM9eTifByxKBCRMBhH7bDCJ4WS7DgLvoVx3DZoWqLuf1F8wYVUy3zQFtfXUg2T9CGFibD5YHk",
  "key36": "3pDT8D2VDHHrctHgkeYTt6F8jrpw5iK7VkobEND1DKGNEeuo8JNKiCMxCGDJwDPwcBceqFN1Ppvh8GCysqLJyce5",
  "key37": "3ZQgTDveYrRKiaXWeC1AmnjVeWtr9F9XAU1mXRWiPtJ2pVKRGcXpKVLRJSwu65JdBMKF8mWHvw5V8U8WEdruSaAu",
  "key38": "2kYG4VLVrL4itdJ8zxf55ZjkRGVMPgGSaxfYSzZxfwYkAnZEtMSbVNeoX5kGdiYPtrUQTjgj3NNea16hzNGnA1bY",
  "key39": "2FsCBB9JJj9E25aCGMTzxLxM5DkNyUZbK7iaosomUiLT3cN2Ztnk7cdN5dGSYzBh8fUnhWeFTXtnDtpvg5tAptxN",
  "key40": "2UE773ELYcRg3W5bwFyDxmEgFbCPbeQEos8x3jgzb4M6yMmEDruppao9SokUd2x7xGC4yPmJBkDhTThmVTn6R31",
  "key41": "5nvciXtPg2jTFoePmZwnsYHSvXMCMeLS6UMG7t8uiP6Rcy3UATUTFe3R5x8ntFuqzPmNLSkXFkdzswPh1QLiUe3e"
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
