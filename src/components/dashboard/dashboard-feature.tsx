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
    "2CyAPrwwxyaxGMzYaHZbjK5S4q1jaVfHfDFfvttm9BPGURdP5isVVN9zJs3PEFZA9J6iyrcRJeNog7s3iTaUBobv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PSV6bPveDksWWi8S2wSsgrE2BuwVMpujZJBSPMc4WDQHBsXwCTRYYqioK82eaxQAU73aDH4SZNnSNv93o9XKYRT",
  "key1": "4EAin3DGivEj1BwkrMuRwP79kaHHw9a7cDwFbR9im9VD2Xm4a4if7GTmhA9yscRKrhBpjrU9ehFiGNGr8JAPaL8V",
  "key2": "3zrR3TzAZtobY7LYUyKrVkAouf7vbufk6XPXeRWbXByYiBLJAZ8ir7VRx6BE9aPL1nq6KzMxAcF6oZZvSg9NAuxM",
  "key3": "4zBhjCEKTtGYFKvCm1unYDpMtLVcH2mJ6D5jVXZz6k74SfhhdAKKnP8bBMvrLFdrm4F6GhGVykx11NtrSY3UHKTV",
  "key4": "3UXrpp5qufK6r3nx6h2XMW7KsSxTzxW7m7GrffPqtz1RPJa6RDAQqKDYqeBBu8zFTpphjA6XrcxFWYXCjL949mag",
  "key5": "3xSzqTbDqoR2YuhPCBFTz8C3FovK33Ws8uPTdNn6gCkdE4HoV5X9HcQjNhiqTtqxfbyVd1mYrQBxmJK2uC9rtu58",
  "key6": "4pFdQxMmym4RbeQsikENyZ7fndMQQs3q4ZHJNQiWbG15XbiTWVK6x6Z1SLFciBoc3pPK6UyRrRCaToC2YXJLiweu",
  "key7": "36MgQgNL6r1ReUDn7jziVwxiptc6QTP8vfMfLc82t8R1fzFdZETHNEVc7pzMW4ioHjcb8Da3Ysm8t783h1K3qBCV",
  "key8": "5nPbhpSMGdRqD9LLasZKeGwqE8njzuvbNVQr9RYPW4NhBjPzXvUwwW5n3dYgy3ksy8tZTWwxPmSuXQ3QBgHd8G3z",
  "key9": "E4PChyQsqj5j4fhZQopHHVcXJKWZt9rMrZ9evZhWm4TuXv1oMvvPkmR6795VXi5gF1ZL54CdW3Zw3T5Xzxe89n3",
  "key10": "Ex7xFXom89VqpA7HuJCoph3Cx9VE9xJZ7eYRsRT2YJbQvAF34h9wJmceEpbDUXuY68DR9YgTWf5WzvvuYxidijk",
  "key11": "4DXM9wAn1eRDLkQABuGdPyq8qMqHJkjsXsdb3VSR6u5kY611zEug3tvPmBE8v5xHBKjybBMioA8DLPJZi2jbYHYZ",
  "key12": "2uc7QHUREZ5UGfEkQWvXeBKq4J2VgHqmVnwFzXxRkThxg7vgdn4GZjXt1KwbfuJweSHEGzpWBYntX8R1quScsewX",
  "key13": "4XwiqwttJixLUVUCJfjbTFYgm5TTZ8HthYnxdqLsy3w4eTjH3m6RxcTR7wV2hbn4SFXQeNQ9op95mFrprnnpCYBg",
  "key14": "5ku6Na1wARnjbuC1XTCnH3Lw9VDn5GgF1UCyvf6h2G1ioRvz2ndWWNZMjySFvL92D5gRdkuQm9yn697h3oTLFhMp",
  "key15": "5aXaCPd9AkgZrhWyMR1867U3NhjXeNNRuxafkSyWjQ8JWn65KrFqNm3QhVPq4yKavLFxc1q1GkAgTuWb7gRMNPJK",
  "key16": "2sappEypfrLtq7hzrcLuKqNoAmz4FEDZZE49k9JuPAgF8B778yHCLA9WFNi46iK556EjbqtxCjk94pNgbdBW78yd",
  "key17": "4S7oKxWZjNuQ1u2cmhLNofiZTvguGAknkRqh6Et4aum6p7Yi8fx93qkNTXw1qhZVDmjpib18eke6rQhfTMuuSPSX",
  "key18": "4z2YgwZrem7FqY3QcLaGP7Jqg63B9tDba9oip4zoGRFddF4otYEGWsWuheU9gQ2vD3euvPJjm7T2PKMqG2EWJJuU",
  "key19": "WutkM1bkgGmb3H13VUjxWd3dfcgJBC2QRgnPvChCwncUdE2Vnyv431u3ymAGwqiqgNQR7Joq9wUG3yRC1SyEvAS",
  "key20": "2AqHQpNwMj2LLwQrhyCJuFgNNyinZaPnqJXHdEH6yzGxBk4C4ymVHWxpyNj3e7q7XaLUUDc9gjjDj4yG4qhVirFo",
  "key21": "2Gdv6zgtnJM3EepdAnHa4K1xqHxTScaRBXp6yXkanpN46X8FQCXUNLujgNixyQ8LiEauNNShLyfNaw6MDCufEW8n",
  "key22": "3p46Km75cNo8ej3cyiq3fHFr6hc99Ln7AmtyZ4Q3RT89WvRHB9ZPahLY9rEXtFi5Ks3gQ96fX7sb97Bw7DXU1RwK",
  "key23": "3mQxWTHFVpHYFnvatprTxM198fE74TqcBmBfV5ggDahhQ8BWDTCKn5Jfb8mot5r3Mm3LDrpRr9TgrNV7KnWKoK1q",
  "key24": "3uSkGXnTR6RdMaea8kgRPzASdBXcgXMXBtKGCyxtLmawmZLKtwrnKg9xEuk7se9vPTDE7Ahz25FqUWv7fYp7pyfr",
  "key25": "26Qdj6GLHaGeFvSbYB5K1PLuBuPPH1wuw5tkP6vxhis8CoS3bT9BYnfkAmuJpH7gxHma4uQbUzfDFdSvjSTFZQEB",
  "key26": "4UVgi98EYxJKEhNifz9L5HNd1WYqwL42Dpv7Nurfy2grkzLcpPZ3Mdh1NsC5QiePvPAkyfHkczvzH414oFPHCR9D",
  "key27": "3Xi6dLS7vn9JVic3K1swmqyh4NY3PXX3oeM5Xrvwypy4GosTFtAVG59umnyqFGfxxfww9preKa3b5nU7krqJisYw",
  "key28": "4HVJkgreQHb6kSBsPkjTtb5JM5gUeA9rdQFFrvuZCzWKhJnidhic4vPw3mPoFoEjFiE8FTMm9LBktmDmud4ctTGP",
  "key29": "2TddWuokRC8d5EryhCwrtmoCeyBnVTkFnchbELnsqkZZqezm7yHBdQys7GKug5SZ5vwR6Rdox9FuvS3oevK9zxbs",
  "key30": "ajrVSKN82Xx5YUshVXWz2rGN5UfpFJo5W4K5Pk4emiEzTSz2nYDm537pCNpGV9R3bVthxY3gPzfXw2pdxwKeskx",
  "key31": "3gjpGvA4mwzMEoNbEqkAboMgako4QfEH3sHD2Tek6cD7bBfY2NK37hLLzVAvkg8gVNJsh85QFAzH8tFDamWUcyZn",
  "key32": "2GHvKPedArpo1cXdfMxNwrzQ2veTmiiQee2yKLquazTdxApVQWjA61JEyLjpoqxShDF5t67bQa9KvAdyMDV6BLmq",
  "key33": "2drTehNgu9JuDoKAfeDytZgnFSDDbniT3GHXjVgRZrHv5SGuC25qwpXkMrLB2xuFTyqo9nQPCp1RYn3Np4zvushZ",
  "key34": "5N535LFTz2QY7VUuwL4zRoTcxwPxbqgt6qTxdpw7togbM5AoWYZUr1arVCjkkh5YomUpLaRxPvt1QiaVZMDsfnAk",
  "key35": "4ARgMqRQQrKHKyHKUehQr4FX1Hi2KHKcA3YGJGax9xxNTAWp89mDMf6U6igMwZgRsSrLikGv2FTHLYNgoybsNrX2",
  "key36": "2zKqKhLSksUtereN1Y3X4Xd23NooAwjLLcgGhTVeo5Qyjj8HnRBZ339NSLW9jkJz57bu2kcSodkrYqFYj9DBTF3K",
  "key37": "5t6t4X3A3xDBZGoRydERAEue7SESzyVgXTMQRkmiK3wvusDRDJX3AaGwoPvpNSBJdwX3P4ipgTcYHThabayicL9Q",
  "key38": "T8eCH95aAvtWwRYZ18afcG8L8TbnYRvExTXB7UpbS4fDe5riwbpPTcnpi2smV7gR8DM1g5ctNJpHgndsJwUBm8C",
  "key39": "4ttpqrWWkzxrtWAVDQ2d1VwURFVDe77ULzYBmJCnbi9WZZd5RYmG93KEsJ7ruzkWcuHo4c5hGKVzqrsM4kpTyjUJ",
  "key40": "4vw29rqscM63hNiJ1pKzh4MMLiy5Djo9gTxSJnLZHnJKMBcWwBsPa6b5ueUFTCBAVNrMnnSYTHoi8pCMGPucXjuB",
  "key41": "pRAATLXKAj7cLweAhfPUadpGkJBguSAWvTgTnEqSuFfjZh5nmd7zaTx86LKuHD4swXYJp75bPeYpYs6eu6KWCGP",
  "key42": "5H7Sywfdtva6kKHTKBHnx8p1SuhKUDQ73RVV2q2Hu9sQRodaZnAzkdEgGTWtXer9EZvbBoYFvLXLNmABEfrc4LAy",
  "key43": "4dEhTTLKmx8iYLikYbDRrNqESDUQuQpFSCNqhxk44zmHukgwiGMQEB8vETAUjU5NSG3QC7fF1pDBNa2LeR4sDiM4",
  "key44": "2N4qeHWS9QPEpDkTxv4uki7CUywMARJ5o6HZBBKYggZ2sh1AcxTqWWP27Sc8q8zmraQJuxGi9qXR2L572a4H1N8X",
  "key45": "k55oqqXivxBd13N8zg5dL6VGcenUraTwXT7p4iERRw3CoZfoqrYsqu3ivsEkY5wcrPLiQqYj9zzNC5D177emojt"
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
