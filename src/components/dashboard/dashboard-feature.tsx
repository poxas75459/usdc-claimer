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
    "W4j8Y9paDaCHJNu85StcGJELAqSbyp3DiXwaZjoXuxYvLbK5XWcWg9mEFXDZixskxFTGMtHGkMu9aqvhhPSpG1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X8L17nJvvQZGW4cqBL63VAKm88L5DoMSuLCwKKCySwW1ksxMeWPD7WJgb1mtwLsk5LCPpKxGypTLtU654BVVLDm",
  "key1": "2veqVFsBms8PGL2xBPmN4DSW598dpfE9ggunfvR3U1xe7umLpcgWGgCHYgPzDSZfEVu8XZAiYaW7v1nCKYeKXfsM",
  "key2": "3uwPiZFAS9Zr4gso7Bsd2JhAWB6wgSkZtHf2V3JVNJEbVFtgayRbXjzXJnEe4WKPwwhzDMb5W7svQtZz6hCQNcn6",
  "key3": "37DDGWyJcsWkbinF3YZNwpD5dNwFYtMYPTFRMur4taQFGwTC7LZyCGrkGeqHMj7KVGGaWcAufqiLw7yWQ3VjnKms",
  "key4": "2QHCAhE6rozshCshMd7mkZCWWWZkYhPK62Vuc1DJU6GkvZYFw9sZvj6zKcHJioRseRC5xZWbS6mZ9a9eJFxcty6t",
  "key5": "5KRd2y29FyrDWxfNd2pQWWT4iSKtz7XAKDeBYiktSe3hNxWZAJEWo93kkZignPouBEqaUsykeZ2mLpNzihWQvwaS",
  "key6": "2bUyBiY5zHLGSdYiTro8YszQ87YvxPsnDMGnCLz4Gmw3kdJLf2Mea421bVQWZyZayCUELNpF5NQu3ZPpew1189Hb",
  "key7": "4iwEYTbVNMHU5tnr88LguYh2BjdPuWHJ39LcHpu7kWMP9krzDp9pd71FLgFrh8TBnHj8CJ5ffWi4dCLRTAoMMePB",
  "key8": "AJ3qDHMbMVo1vCQUsHRHG77mQqFUyo1nffA16yQy8QZJKaUiHMBCcLNgNJq9Cqhuwm9jQqpKMhUFMLZ61hKyYbb",
  "key9": "4Eax2YdaZVdyyvvoVi6qgYzxLpMMqjygjHXV971hubMuxsQxTwYJCCr1HMGESQEp1z7W4bR7PCHZHt1SRpf8KCAR",
  "key10": "4rn5agqCXBJkQQwgQGQgEF6wWP35MsjZNr2uyZ1sWg5w8SW5C9qA8wgzHm29VX64HgCXVidLqSzpztaK4mvhri4r",
  "key11": "47Rm5By9LefGCBAp2QzdXpRmd8mbfCjwS6bMYePAT4N9XzuD2xiNAD8F4tgbCkbvr9gJzSkoU9q8xGDFMXRMLTzz",
  "key12": "nPESzyVLQgnEVUfikYfWiNTgiyBx2BNzkuibVhBqSpPKiL897338cscZBCUGMFD2qztBdorBEZViBVAnuQDRTPA",
  "key13": "46pinXfTTYAY6GEi5JYfa6QP6eyEPWSvvCGuDSxsMVAvqmABvNbJiS74PxxRD5H9fgWzi6zvvQVhdnVzn6VnT734",
  "key14": "4jxtC5CDeCUpQxUjJvDv7Y5wRa1jNe6gPXp2pjppLACAd7MxiZEXGMjEg3uxJbFTjZ7mr2Acn5CURA9LA8ZF2BUM",
  "key15": "5QQPc7WZrQHBf9GdCW1WEVpDjRYbvtzJc3Z6XbpUbQU6zc39KCmYuxQmGDRiZX83s5i1WsH8DnPxbT12aj4nuqQE",
  "key16": "264qnUqYzdDgvnNc25T5xr4JY1hKrgexPUJBq89KcLgiMyVeosh9stGivEQUTiTp5Tymj2LLnFUTANc3oEYsRFjt",
  "key17": "G5NaqGtidPCPEMeWkEq2d6w6W9bb5ryg5cezoWohEqB6RV81SsDLmsVAZPYn1JbutgeLdGaxRU33VDbtoq6vQvX",
  "key18": "4E6kbF72YJE1VT3x3WWvXT8VBD4mtrzxr1pvzuZu3KodwFRD2Rx9xWStuabL2aZV8HKBAhfT9LGdpB6TDGFcZUJK",
  "key19": "4edZTRPqJHgs6wwzQ2TwdS9ZGQRPN2Re6ZNgBDgGB5bAZr9MrsjszrbCnn32TNEYtHfXAJBdAEHAbqQMf5xVeyjc",
  "key20": "2kzxHDt9UQfY4Wx11bAb1HNKPk8ihALVursEJwTphqvAZFCoSr5TAQWkawrzfgWcnwYwACnw5qH7fXRd5TyRa8ii",
  "key21": "zq83aa6vYjkyHHUPQQDGFm1MyLoxhF4ULBiWA7hRCc5T9TuM5a5Liu6BedwcYGvgGU8TTr9EgJBGfpiBWvCRzsA",
  "key22": "ES9JkaEA9vzKN8vqy2S5CYryq1v7qASAseD7dkEpKJFKVqZuTwpxSZNipuupNifCX9WbeYP4aWUQbZgueZ8cQNx",
  "key23": "4che9exsyhPnr2tFcGroc5NTPVp2CM3UjFaCUMgBX87p7BVv4aq9x6Y9wZr6fJKwicYV5HrZMNwYAtizGn7bzRut",
  "key24": "63CB2gLT8yPd67aTZk7c4k36Zgpa4W1z7MSCjU72iDr8aEzvdWabQYXKgVZgN167reTVp2EtpKbxYjESAFuXexeP",
  "key25": "31etLtyY22W5gCSNt88gffciP39RWvJ7ZC8qkYf2aD7zehosgBCposXsdujsf85iHbcBVNQZ2BqREA3Ez46vhmjn",
  "key26": "3zpd46wAjUC6H5noHDLmdfApmm2zSZMS2fWfcqJhqMr4rm3KnqJzpXWdQ3e7Z95AC7one191kG4NDwBjXZx3KzXE",
  "key27": "5j7ePRN65tnq5vVz5mDH5erc2jsjMQo3Wx9oq5ieHBmXy25ZyZYuKMvV76QLLNsgnrN4egALxMpv5qr8SsLBvVMg",
  "key28": "4FGPFrPpdkkVy7AaJPgf6jtY5t23dWzwTZ8yDRW21HxdwhnU4VAvWAn36URcUjSz6xsTUFMeWwhTjE2h65ozRpHk",
  "key29": "3qeMGa48oBaRjNKZ8f7iKFr2KDAbDr6vNKLnv9DKrDgPiVTkb5JZNWoxACnoyuDU7L1r2a2yVy9FK6VTQpdg2gvB",
  "key30": "4FwHzWHhQYbNaUAK1wgpqiyJco2rvRtZvpR7RqerqGfzWNkdBzanK2shV8NyZGWLFZu4a2EmrMgA2eMD5zE8fnLK",
  "key31": "2TJoLRDgw5CUoY5nDAhvrGfXS68qBdUzGHTrnCcruApufdQNvoK8SeDv31WTSSb3tuWTVfvLMPUDgNu16e6MXJmF",
  "key32": "56Gs7fGW26eP2dVaNj17Ti5MuXD7YNQMUuc6AifQnujBBPkEvJBAaRmreqpkh2nCuf1HZC9QH9tG6ga1JHmmShgg",
  "key33": "gJrwqpa5BGNn2XocQTiLSdeqCZeq1ewr43ho3KbXT69z1gXCYF8bKyaHoj2oMroBE5JbYiMGeJZGWwfmHH6E7K6",
  "key34": "2QPJDfHRggUybmvpVQ4u9YsYPjMxoJ261xFDahBUt3VNkWSpxig1kpHDN9gfGegPkRGK18g14J521G6phNJHAzQ9",
  "key35": "3Xzhw8dejBijzeGHycLi97cYB8NUJdqLFyEztHckPzCVQWV9VXbFwjynzW9kYzBNWex8VpU9e1L7NVoT5W2AsoEK",
  "key36": "3bWFgtxoS1qmZu2dd21VeKH6T5fvRm4R3pDY57SNqfm9FDMQHe1fX3cZNtgJ29P9S4eNFFvcXLVQdrmrKM63xUk3"
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
