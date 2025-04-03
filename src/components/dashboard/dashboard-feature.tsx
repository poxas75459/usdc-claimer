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
    "3pM6gkuFAkSPr3MMHpvU4FSZgrwNi9uCtWgyEb15csDfcBU1T7Ec9z6YbECWQKt2m88on7o9iFncTsitRp5jFxr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3STGeYd1dEc3h8tYmxsKfXngDcrDoMQkw53dpUvgc9APrGy59SHP4DkfhULx3HVZBTG3X913zbU8pSYvq5B3Cnub",
  "key1": "5W34wPBkBxdsBiYq4Y3PxdvdRmUb1MtPJjr5oVpr27FhGkwzcFJHnp6jCJV2qvUJ6CHwd7TAKyAfWYA2ZZaguvJR",
  "key2": "51DR4MoEgVfqpKyZGC6eZ4EwTaW7ccg5DJHhHypVXPVN9abXW1tuYKnDP47bP2Kkk1o2MFmzNX2MXcsLETEKK52V",
  "key3": "2R7DsPiHXstgjkiKnzbpScLzuugMBcuAXSNyiGi5nCt8zWH1XsSzkGzHpKQvf36DNo3Xw3NfjQ6WonwqTHqfVvTp",
  "key4": "4SyWNZrvbDYLPQS62QjumSzngMp427qtpEBE8FYA2vBnjCxwyKjRQoD6AzYBSkW2K7fsthnWawqqk2nY7pSdvBwg",
  "key5": "2fkqRxggZSzYxc9uydXYUeZDQZE9KHyy6HXLdS5Apt2LRAEvcPTxqYmmou52NqTxzk9nuuChATgABDAVoVZP14KM",
  "key6": "3XyeQgnoZFV49hVazfyXhQ41PNBxuLfEmjTCQjXbnytkAQHDWvp72KbikybyXyN8bsCyvXHAG5SnbX1Bnc54b6QM",
  "key7": "5iNeRQjwoaU14noVn9A82988mH2mtERGGSLJnjq62dQzZ8yZ9uPf5eg9efGJUw955vRriYzFoKU6C9Qzxi2vp5LN",
  "key8": "4TiMx4NKV6UXWtWZDH9YVNq3nH2bK4fg2FfLNR7kGckbp9Ss6MdaFfmHWA4d4sqZk98MNhoyuyhNE23ebTLDWTXa",
  "key9": "28sbWDLZGH8KjjCQ68zCe53Cz9avKWkttKTcELHJqQLfqWSoL6D8fYSXtbW39pU2nsS4ryHWuQPD4HFSC1dA6Vg3",
  "key10": "5MRwFTuZ2j6c5CXeErzCWNyUxhmCfEZstvpPdkW1magyR3qj57aKywBZrQLBzTvH4uyBEHzb9ncyFNpFaD7sRSTv",
  "key11": "2QYyMGfZ9WTi6U7cwsFe6PJnZqc6dggXDTrLQEb2fsVw4meZdHWcTfNDUvffDiqvzga7jFpsFn6XXjnzYBDwubB4",
  "key12": "5ypYtsMN5eNeXi1wUKMjAKWmHYGEdZuc8Nm6mxSNTUm5xUSnwxYnUMU6oAQePekZ1EeRPgFdiuJe15sWe92wsybX",
  "key13": "2CCTvhNcggaMG3LUVSsbRLgUCv558Q9WcKaMnE57APy6Nupcxi1zNa23L3D2CAVcDEAePDvrJRdrhU8N6dV3qm83",
  "key14": "47XDr5XZ4CQEocHCgxnbceSp9SggyEyBtrtU9CQyKmdPXDcZFWmWuewxHKBTTARVCXFuPHtbSWGdB6re92hZQEV4",
  "key15": "26QkvyvUBoKjfT2vj38rHYjtWnZ6rQDa1ovF3ZAmqzdiYjsca5762bxBabAuSq9emdNUdTNqP8pTfXeg5gukPQa1",
  "key16": "33R9oLkAMPnnrytXjby2XdVc1odkzT4kPgLzExzcupnkPTe3Dfi9erYtfxRc9uVLbTZH63T3hJVdwwZoRhVN5YXN",
  "key17": "4cT7YfDmmjZPSi1ETA9fSCis5XLE5aDPqux6VzZ3jsUdz8yEL8tLVH4nuukLoxCZx5HvAyNYvVQCgPfBQYSVvQVb",
  "key18": "4c1Zo3jVLas6g5yii98Lr78nAyEDX97ZJcLSAkz7syv5s1qn4i7GJLSzSfGEqVDfDs5LhLNxRCuu4TzHghVR6zXm",
  "key19": "4KsWTkpFEwzeFEyP4B4kx7mchWr9rdnvUMLPmTAYyE6FTGQyfzFZGLcxcrAJ8E3UdwGkN2kCTK11862uZ1qPKcQB",
  "key20": "5vBD7wsD55Gp5Wsf5EJfc6Spc9MtzpNv8xCTwWNUz3sM9cdg9CorQAr9DByxK12EcAzWCT81Y17AZLb8qnm8geAC",
  "key21": "4Guiiavcefj9Dts2E5CDreKKxehyLE3i9vH5Nx8nxdzuFnt5HVivbq9JVKhv1MUWQQBqvxNprJSUzzbgm7gHFX4s",
  "key22": "61tJjEq3HHCGHTSqQ4qXKLGJB7nAuLe3GzgwtiQUqXZicdiSRmZirbz7hoe2sTgXUQFf4AJkePP7patikfa6GwgX",
  "key23": "3jTN6R91cPFRtAJZWehq56TYHgu4HpzxDcUtnAzahVocUPbhJNRAK1dcY3nS8sgChvMNKSXPtTx4wuToTsZHBbvC",
  "key24": "5CL4D6mBcJW6oRbqepmDYYBVo5QFEbWemWox3wAYi88uo12rC61jt7JV22ri6erSivvKdHtjmkgQUMkWFKvDK4px",
  "key25": "5YortR92Q6BF322XnH9ziTu9aDuAD3kTwfRHxxijTUAbYH34wSjDW8A4Cwi63TTh9duzvfWGXjVEnc5X1WvUuXKW",
  "key26": "3yMXAj63Ji4eMQwqe9jhT9CAexdd8VZUPTJTxtP2sftpiKmrqi8qjbmzWPyU6wWGbx1c2zPexTbUdwrdMGLGka5p",
  "key27": "5UjPhZ9sNuCSjJsBdwjXaPgESQb4ynX1ueYGrFH48SuVzamTvrXcq2EG8hBv6SErCZW5otn1bpHG5C6oMdWiLovT",
  "key28": "4n3Byh3n2ZEmkW6yLqEoXdMFmAFjAiLqtqnure3VjSXsyHCv3wPfjw1m5vbUxWo5RPSMuQCPGqzGGy5mj1qSZmyb",
  "key29": "3VqWKWd77wLhGKRTBdhhWRKyLZknQiYtQ91uLLfyv1QmcGTad27Grw9ecLSrJpedwHATv5azYg88BA2ERYXo7QkB",
  "key30": "BmDSy7L8pweU9uT7HnNRy8byRfZyuJS1okiiedbYJfooFBaK86SrRuiyjgjL5KYrQ37nEQYT7aVQgm9bW1kR9p2",
  "key31": "5wbFiG4qtnDKQ4zrEhdQP4Pg7ojxgh27d3yETEUpfKxjDUmVhp6yBHW9h1x8KbVv6bqT7b3WojbWWES5qLvoS1nK",
  "key32": "4w2yC9P8aSdZEXPNYoqeR9xPrpArr59TaNuULo3vsNeCSKjr2vp7hTGhp4GkuNQZojvDCZUR9Y7NYHXa9avDy76N",
  "key33": "2Mk8xix3jNhXmZ2wpJ7rNxD4u6CCaweowtLbXCM9sAAza6brcvMukRZNeu69dCnch1D7C3eotVDMGeZ1evuhAWup",
  "key34": "3hf5XZLKGRY94cqCuFrL1ja7r8fn78yA4hvCwb3NSkKMkFTAZPLzhFBPevhGae4s8YiUKsC4iesYHe2QdC36Jp8E",
  "key35": "23A8VpUpKHX1ogz3Dn4AmLt6YGy3MFzxF9LzyLG8WgvSPY1J9WwhMkyuY31fNEtQQeci5QqDjk1ZEkWFKtkEq11D",
  "key36": "5ATDbCqeUPyseB3yYjaSeLHTVf3Pa2aLbm8asuGYeQLwccoJ2zFJXPCXoEaedWxvrMMzzvHUs6ipdATXkDeaTjFL",
  "key37": "47oUHk4n37RvbsgYgRvmbuNKe2NC9KU1w4T3FFD8t596pxBaHiG4N5h1vUpQ7wJwWR3CAKgLtwm8B83eX9fpEMXi",
  "key38": "2ASt3veG137VLBXeDXCh8cEQAjYo3FRWdkMfP4L4ocSbbhtraSLZZGHFd2SPbsFp56ZafWw683eQK16ZQcJeQcNm",
  "key39": "5Kjon48oM5UWaJFznunz6cqhQaFGsisQPeRRwU8bm3hP77cdawyAD4gaCdMr8PKdyWB3R6pgbbopor1k1fvCjs41",
  "key40": "5aBuEqi3ZrtvVhRR37U4pdoiFQ3ymwErWUrPFFL8HdSrpUxq58v3wEh4s84of1eYL3L9DLqPEwc4m8im43GTU8hD",
  "key41": "3XXpPKhe1NLeEJFubcyDKHjS7ePQdoApQunVG9RFfMbv4ymFgRiPaV2V9kDDez5zGyjvdix1k4g1qPVERxeVQuKd"
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
