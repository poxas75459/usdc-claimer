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
    "5sJFD5ThEFTkghJbEj7qsa9b4z7MuxAXJdskVUwBnXTuMoKPDLoqr8aMgMXGWFjv1U2atJDsaSV2aHUHCcUjj53W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64VDfLczEGhSkhR7v8KbGG4vXyaUTJ7NwEUxXUveAsDvjUZ2kb53WX4vQUvzeSaE5CPaWa7eYQVhVUfhyxzfYho",
  "key1": "4bPgBrKzSxLU3LMpCLFQYsw1aM26KqM1tdttopERKHxn7sPjDbyf6ZRRrw44dhvmRZyFYHaZVbNzxMTvs6orvdQy",
  "key2": "2VJ8pggn3J8gt8ogoFZUcdWHVeD4oHGyhbVK8iEhgM5VSpJoyaNyDPQ7ERjuzMtjaNko1w3VCXWMXDyP54Em29GU",
  "key3": "2mtn7AWnMnNUHi7Mk1xVguEpvqcXbjbTmP8iKPduKHcLUNxDPjbvPb3hNqWQQqhSJb6h4sNfVL9erGNAy4zEdpva",
  "key4": "2E8P8fYGhjpG7FgjdE8JHn1iswWh1FFVLupCZUR8VFgkcQ7hfp2hoSRgyQrhTtYsaNTFL4dKZQxN2feVhsTgqdqV",
  "key5": "4xBXtT6L9fMM3Y2n7oaHEqCY42seGhAYAK4ANAGew87MV9GvDyLZ4dQCUNT9eweagdxfwCLhY7u1zvgSSEwZGyGd",
  "key6": "5MhhieWSxPAMrDH25hVMPfyuQu6hfp6vM3pDCPt1iseHZaxqKWrz83BGvUKPcs73i5SQL1SMZtvJiVnrbzGbLbuS",
  "key7": "4DZqA5GG5gEn6bvDcNgXi8hPFGJhRLTFsDp1aAM1rR5xBdyAb8KDDLwHxVgscwToq1nfzBd1pVoykoj4sMW8xURZ",
  "key8": "3sMSgmBMywwaHQEfGPxi4DTMsYriaq6BSAd7wJAeAk6VawgLfryagDN2NGNpEWWjEKGNXgrY5WN6LMLdmgYu9Sj2",
  "key9": "2PoUkZNmFQUCsiPc3kf4cpejYyuLG8sQwnmk3nVXZzvjfGmuAx4X3C4d4KyzJZnTrcVVx6rRgDzVXU9NN9cjPRsE",
  "key10": "5s8HWQAvczZNYcVEy1hi45Hy7rU3iPtgWC4uLQ1joSxVsFS7gZH9MpEU2sGwq5SXVa7U7juhVHg8rRJqLdmyXagv",
  "key11": "4yRQyUfqiHB81hGx17JXWxtEj5ifFA7qNSpAK4JYfdXRA619a4K5xqGrm4Qk2mCvyYekKKzoE98NAnbNKnnGoKc1",
  "key12": "4kcvdoagDHKjvaXgoNuv4rcgcWEjdv8AC3CLbQUPXj7tjntWjYDqJFsYPVtPEqmgurenP98YJAxob1q7QyZQ1ffW",
  "key13": "1G3p59FeY7Tx6LkdbXRf7fuJ9dKujre1Zpb4moGi5mdhR4hkxJGF8gV7rq5HdakLT2XKVWCoCxqPiZYo3wSJq7h",
  "key14": "5CCL3rgS7iwKGoksaFWj8eFqiBFW8ZKmM1Ux4VRnrU8rDVXqCs6YEXC3zoGoZznfmZFFTPywcdW9VkhL6Z1KDDhW",
  "key15": "58rMrtFfYHRV2WoNzFixofiQ9tj94wgWy2xcdnKXNMKH6qA1RGQRdjdz8gnHxPurTx7b8BazhYLDGxZRqej4TACe",
  "key16": "2wCSiEAuh4z2adVikmwuBm835e2HSiYS6q5dMdb7nXL26tAidZaFJcVArrubXAKRb6bkVbXDcP8wv6tcpuQJxZN1",
  "key17": "4UtAhbQWeAUPhexaE2fZEhhwnwGt2S72zdnMkdXeiHH7RisF3KmknRtZnZja4pSAfHLy6GELRoxrqitG8gNF6Yaz",
  "key18": "4MthgFgG3feJ4hwcmGg1y2dqjWorfb26UAKB5cH7GGhEm3V3uW1aPWHNXVJnuKTH7xfec97BmJTYZgWCGjWc8MvK",
  "key19": "3tsNt38CDi8MVKi5MAfufLyBrzCsPcBFcUfFSQ5NXuwDwgFJrHPqt8wSUq6V96X9hrwCdE6PmY9Ggpp5KphBk92w",
  "key20": "Qi47THRWzdgizogTaLk7mL6EzCfn5rNXtowhaj1oUUFwHYAKfkcCbwCW4TzSFDjtvQq9DF1BxbujziybcTUXrpN",
  "key21": "QigNsCYurjiGwbtT9YXJ5GsBAp3GZh7AX4qSnna4WuaxpHESBEBQR3TXdgMcfqP48KdejanEknecdkcsM1pRGGL",
  "key22": "gdsWttDKao4tJeZi8UYkkLZiS8AhY1mSDbhwZmvmcv4rARtDJNCcpKB9agGumQcwdJ5NMmLeVrZr1x8NguDZst6",
  "key23": "2mLq5cLQdU8Fyq9kXba87xW2w8dsX8ZEesBn9GauaarKJNhksJJaeXyf36Wte2HnTTb8k1jfwLVtYRmXbGsP3zk4",
  "key24": "44Xsu63iTLGMR6cHxkGzjGiY99CjC5R5pXkMHQWRcytNJzfNnt6yRG12JHduFQq1vGxaRQ6gfCzmbEiiarLCnLb",
  "key25": "49VEzfkcP9J4mpd2XrEUnWPUQw221iexqvnbZqHcwp8xf7TGyRrmHKuBsUzCZjmuw849jkqHPiQE6r7smAzd5aVP",
  "key26": "47UaVtBG76YsMKVYDGDwVnchQYWcmnceNdMfGPjqJzMZijrbv9UHWfi1VujVqfEtdyEQd3wgxHXLcjJg8TPsCkwp"
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
