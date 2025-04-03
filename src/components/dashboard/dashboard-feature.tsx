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
    "5KhadWTtYirLWTyPQBmosQWvegpLhao4FopfUgWUA2bKKzk8DHnJUfTFoBbbKGZvUVZZEXgVWU9D1SRyF49QN1xH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RUksQxQTHX3ZR9sUc8xyuaHDXPWnHFWucYJ4GoDY4treSiuRtEJfE7W7wRxb3HV9FgSczV6ZVuMbZUUt7yFVbbE",
  "key1": "5f8pp7rAnrKw7JsEyLYjzt6cyovNXVV8zQpc1h23qtqJ4SQpCTGnBMUTUKqeRf38RY428CWfaFVFfj14uwa6QpuK",
  "key2": "ewz6HVVWkXdSrRJi4eqqDhRQXGgdYhBAn5onMjWFZUAdjL7D98dFUnbyh4Rjy7rGnXSwqdTTv7Jgdhk8aJ8Db8K",
  "key3": "52NvYGRm2VdfNYA7oZKq5JhXztVSuB1zs7MwLtrFH4qXBt6gsuuXPyAttacNnxWsC6pazQYS4g5CaFhCGReFJYeF",
  "key4": "4wdGgAWwrGvfBhBJ7rdQJJ1iRD1oWUuYu729oxL6beGD3RNqPq7oa8zyRUmA1Hc6oLiHtdE6WzyVbAKTaSDNPwSW",
  "key5": "4oxhF2rKAaLiZqzfHCpgJ5cTfRTrGzyt49Pzr1U56u62MfMn5ZgcRK16FsSNxjVTo9BxpC2hTAU27ETxEEAYF2XM",
  "key6": "3yHiBk1EziuXTZbZzU9bSt5uR9771mppsnJM4ad7e1ddxaftU4w5ur75Bkwqg9JfLHC8YuYx5aD1ydcreJY7zNvs",
  "key7": "2UTT7te4fxWYZFcoa8iyNs2Cfp6cjFk7o2ooY8tRjJyAKoSuAoK18thGXovfVFxAxVVa6FRshf3vxPcCA1gEiyQR",
  "key8": "4qqWpYmg8BSYkipu1xJuTFKRLcKfRbRTsDTnJ8wLNa2J4xS3VRUwatHXBg8fE5FNUEfxyD2TmAk3GJj7TrAf6J3z",
  "key9": "35bGqFcZqfQaVcZ7L1p4ETXAeMZwU45krmdkJbDALh8xe93CEi8adSZJuspL51KqfJsGCWUX8m3HTKUHwwT8xd54",
  "key10": "67KRvDZ8BYnrMx9BzSXc2cq3FPbgcQQQqXT8VyfMcrHTtx4kp2oULf1UBEM5hsknRd46KtBbFTPUs1gwagXuJ9P9",
  "key11": "9bxjUqJiUoGqWyGjRwyyRFDofj5i2K7KcNS4DzCRVLZoDoqW983U1kuE9AEg8w8c7ziwT71AAo1GuAWajgh8Maa",
  "key12": "3XpBPfSUJ1F9HjF3f68PQogwSNw4Jm4Esr8AtYKGVoSbKtSN2dmXAiW5E4PoNZa2iHtBo4DZnhWTBnMTYbAfJ1rw",
  "key13": "3VxBB51J8kWANgU2bLZupwrRhSvVha9GVyyTKpePCXwEeZA9APi92NJFQ8upRRQPiejQvpZGJ2ozggBaoek8t3ND",
  "key14": "3FkH8yD2dAaBaEEMsM5jCEqyVQDrJyUYzUic1XsR1RPgVXdvRXsq4vt5aBSVJ656U7hUVYZuo2yK8p27ffLK8ZjX",
  "key15": "49zaHPYTdBqM4C54ttnGcyR2eHgCERvbhS3ZNvQpjfQvTuLdZ2wUrNZAx2ERYUQJzkRRPqoBoVsVHSAazmS7dTAU",
  "key16": "4gh8Rwh3BmvDDr9F1BwLRCNy42BEM2Q8NdixvxgEdCggq3jJDKVfGPMHTDuwmecpgZSTCWpVGsnSJ8gFGdgZA4Jp",
  "key17": "626JSGPk6stFq3AqdDJMr5K9VWVVfhT35o4Q6kz4TCdbM9hVVxFwAcchWURgfJ8xGMLPQ3nswtFvsBpDpTDkbpFd",
  "key18": "J4Njj5BWfqUJpxkpZoFs6S5m3gmntm9k7KGZTnvrLkkURQjQ39LRzuvhPDi1Zxdps2TGiBPFn52kGSF35Esb423",
  "key19": "3DDY5qBBXZfCrPosBf2bA8GsSPQw5J33SrKd4zBXraV3kKhsmEVWZg2tjB6QcetrNS3NWkzRMabjAgamYPRkeejS",
  "key20": "2pqtgEANVhb1yLJM1QHiJ2h15F2G89JNbCuQZAGrkrBM8CZqsZ1fErDCkFeiR21CDAjggsgd1FSnCSfGniiQShDx",
  "key21": "47Fig8CBYBr6VHiHxKNMWQZhy4e9tFvJBXZCAVJPWyszqYyxx443qJX1bA41bjPKwh38JZ8iwM9unzjgZkov6bUg",
  "key22": "5MVPyZzYw7cyuaWYyG21EdTjKwZZk7gr8GKdJSYnXWf2xH9i5VanQV6FCm77cDkHZVwVQsUkKq6or2DKFW54Z5ur",
  "key23": "5R43hztqE3Xvaru6mmmd64W1QuLUwiTG8nh2JnGHHeZYVbzYAPkXGWDuyp9sw6scRYKMuE42EmBkQ2tJ9PFWhGx9",
  "key24": "5m8MG1bWQ5HyMrXdDiZSmNKsGkJswA71XTrjHq7EgwALXYyozJoBTF5wwsQkSKiuZ6Voeby1mauPqDoSEEnwWaSA",
  "key25": "4oRANNoderJbjLHd8ohYQ8c6qsNBJSbrJYLGDUC5S1rM5Q4igDENwi1gDnPYj8Sgdy5aHozUne9PHN5K9CW9Y5B9",
  "key26": "4RrdbVENuxoMEfxbbkFdKbUP1hMjk49eia9P2NYjZ1pdqGGG6qupT7DAaDdujXPg1gPQrh8SZWfChtw7VfGQ2BmF",
  "key27": "3NyFaF4yv6hRzd7hZrxrVKQePKciJcDTWokqYYfGaPMCWhMckLSaZpMhTQhvGx9cxDt4TL3JRnp6VKBjwpwXwpzu",
  "key28": "5TxJx8KYFzWNe1E1an6FE8ya88VqCVY55F8xv8ZuFeSiYDRy2s4T25gPo8FKgqY7B9Tpjx7cE6sqSProaMd9ZZnr",
  "key29": "1XzjydQLt6vZpfWhE4PWcCMUtPUYfU1uA8qTLLVH3QGuRAZr9nMRvNCamL7YvqNaEHUFTZFdAaSBk3Xsx8aeHPv",
  "key30": "FLV7EzuLZJoCjAympH6d7Wh3LJRBPnwL85QvvikFNUdB76kwMUgVTMxmfiXVXM3MCbWyLLnvLAyqY4GwaRahybi",
  "key31": "2vN7J39n94H74U7u2KTaFU3QfukqJ1T4otm28pQwGcPd4wLoxk9FMNU1izTSM4dNm6aiHqaTb3r6NuEirCtKq7ys",
  "key32": "2KH6HV9G4krWEdsrXAH2RLqCjvYvtFeRmwj3GiKKqG97s7ScMtXj25uTYpxTW6FtrfT1XzAAMVF1ZqXdUhkrGPXG",
  "key33": "4A4A6fY5aaXQUv9BV94zsqYTLyJEDU5vAX8p3WPFGLS1jxvWyBEMTmXmiqudxXb5yw9hfxXDY7ZRQ5XBFTzQme6B",
  "key34": "YCWwfgSyepVYTJNocBQbNGYde34jXY6TtDs5Kqf8R1vrM5KAJ1yTTK5E5Lpvb6EWvpxWEpk7MH1Mmmgqyh7gU5p",
  "key35": "BQQm7UtBHxvfbLtPXL5oTVTDJYd4esNv1upHtwjUxqikYqPNVUTf4qeL6kZTEdocNM4aM1PwqVcEukU4BXiXQUL",
  "key36": "47ShgA4vxcEw9xnV7aYPeDWRWC84Hxu3qsf1G25V7msWRcK4fxkH6rw77W2ry3uXAnZYZiDau4seU5bBfSi7fqJv",
  "key37": "4KzbqbYpXTKJKMQedYToL8MNkquykgrH6wXygKFSeUF9nBuvFseRjM69GxhS63f8K3oaGqebpgQSXL77sptEDZJo"
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
