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
    "2JXzW1uBu2Zxh4HwYAh5UwoKvTDGYVyRDtQEGGQXaE4bh1cqEy8Wr3be9ECAjQVjCgLNuU28s4K1gUgNqDnCFcot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6VdjV6kickWezUjHPqRgvXjpRDsDbFLQ7ZfbBjY3W2BFxM4f9LnV74UCwPqdUG7WJyZx7S8En5q9t1gqdt1cbLe",
  "key1": "2Nt7JgVkVTSqXM9FphPPpYWHLyTxySLLcvwC7uEKDZ8KRCbFLUXwsHVwegbYWH2KVsMtB3BoqViK3bhwJKhw2K2A",
  "key2": "65s577zR4Dq5c54rgZC8w7kGVeqsQ3DAnsLxHvdu98Bajyd9WPvdbbcrH9k6mVoME7tg37ExDHEYWoevEAtNZfo5",
  "key3": "3pZ4NvUU7NCKDjsv1TdN2pvee2EHY6Tbt6ygo6KvKQL1gB1w3QXKvPPiLxJKSwhAqKpLByny6owSwndgKfAXB8wN",
  "key4": "5rGsHbiTadLtmxSc9L1rzzhPHfmdhizmsr4z3mRCa66CLW3yUckcevK6KFSx55m9U572DJrrn6PmZh8qeVeGNZP",
  "key5": "2sb6mkQFcC2Tk6haa1M9JxBWFeq9U16jo3YcGfkvAGqwFMxToQYmXHpLTtkH4gPyT8tuWeSvyu6ciUemf939me4C",
  "key6": "2fGRUhwnfWUax7omdXAHvxKuepKiZ5XSxdKn2T31Cagxmjk5zsK9tXFS1TMNViBfdNSdpE8c28BACNLAti2n2APz",
  "key7": "5ucdKPVfDLuAYW9pSLFToK76xwqzWj1AqWjDJc8yBjwLdfez4L9aANYqdgaww3GgBfMRScDbkwcTyRsHaC9QukN8",
  "key8": "3WbzqbvVLNgjGEJdsdZmo2LsaJkWtcYeyUttrwnsRmmKFhcwAw4FCfKuPjzvNfBacQYRKUwST7pFBnfYHkJAbgRp",
  "key9": "41YPQJavcwv8AkxtmJRDFgRgfCCSTQhj132dHcm6jf5tejBgkuxHGoXhT4BWyqVkG7Yo4nvvXhZDpk1zZrWBB5Ms",
  "key10": "4TnfYRHrj9RFBGChzd4XXZEFqcX7Pd2HSQniimZ3YxfWeL4ELKbVikwCMtgmhnyfZSTSJDFZ826Ufsac7MR5SHkS",
  "key11": "4uZhHiJitewroh3FH4Y5HUkz71AwmyoAhsnbwyZhLNJrWHRUHgUgc5Ycw6cjC1VBDXow11kEuSuHZLYyehxLxKWT",
  "key12": "3y8UcXh5uYeRt7Up8pqSGFRLNWgiRCG7SEjRNVojUsEUTkUmU3sPtC8kEArNAo8V2ybrRgh6CyT7XRctAcxka7sM",
  "key13": "Upy4ZN2CgMUbKiamwj5a8TzZhSKAcseP95ni7JAk1UGqhjctpKzBJPA5YrcWD3qTSk4Hqb1Z1dMf7fu6mroS1ME",
  "key14": "JEfShzuPHJpYVAP4PnPfDPbYedJ429bXSwonMsU7rGxQT2738EFSob5Jk8NoUWfAvUeMaikq3cQ1DxxkT3kx5me",
  "key15": "5s2v51iMiHVshHQwj7Kxdn6pT2xWHeC9kv1P73Xr5RekUxahmV7JsddbLzX6XTimpST9Z28krDCygvtVAHjj8EtW",
  "key16": "21rYE3EvUN9qWFwGKyRR4dvCwGc2eMbLpvSijPCV7a9VtV2xvjfygoJQFrWTbrjg6dZg1cVKu51NWiXkv3r1x7v7",
  "key17": "K46zv7gBpXnPh29S3gs5f62J94C3dAXzyLgzbmM4hPyiqNVQ9cXrEs7wDpgV7qfG9BsPM1zNHztP4bocpGju5CN",
  "key18": "3PjkB2dyH34RewzwgZVWniije6e1kGe6dQ7VhSeWCDoHbH6mBH3sPj3dP7KUWMGyLUBxY9kQLKcSd7CrQjbb5H9J",
  "key19": "2NhbfXShksJR4noyx4XSnnwMnLja1nN9V2QXYrqMtkVu7nr5YegA2v7C77GUmTYb7ftkMKHGUR9DZCCWthPxCrNh",
  "key20": "4ZxvWHuMaREV4CUaF8MNRtxHa7CG6jigU2Z639kAK29P5pFE8WDC7cd5MhHRwrWz63ZhiHWEgeLuDd6n9hHRKG4s",
  "key21": "5vrN7gP9J2jqE48Pz6drs8E4Fes7U73K2rNqgVsrnETgMVEjSfzomfKD1jeiafUVys9vPmhZjRr6r9xkjSjvrjaz",
  "key22": "5iT7nkTLuAzX6L8e8YSXkGCMdREWjwCqCX18oZKRWrwnY4h3xunsoQUVrqh82RMoY5r33Mc5RtPrpD2jWn7mMtAe",
  "key23": "4TntyfgnWWgHLB3y4PHKp9P7q5sAxdMbCTzC35bKqYjuqcfCdd8C92hpi6bJoJxkcG6V6DWf6M6kpkYxMjpXdgTc",
  "key24": "Grx3ec9kgnBZQkRpj5XAciLj3z2GndstPzwnYVFN5qpqHWFctWe2uJA9SsjArREaPevomkvjTiJcmL3WzqhUKsf",
  "key25": "Qb2AMffyQ7ZsJvBbpMcCHNZHjUHv4oT1pUu9S4jn8WCz6MRfBZe1t4WLoeWBGDvsnx2FRu9n9UBpFknU4hkEs8C",
  "key26": "33ihSJMYtbbsKWbqEc7UPKBrBj1cL1v7ZcDPczisxgD3bEinZ3X5C4afDVo8wjfNi5jBz9YwgeGZBqnm94oizSmk",
  "key27": "5wQ77Dkeh39rNN46R61fs5rUD7T2Luvn3ZaKKpcpqbfsZCjTR2g8ywf4ZuyRcxuBQqXqVFh1mVwvsUNk1Ea2PgFZ",
  "key28": "5HfuMyZ5nCcbBZDuGuSsrUdXPjikFegWedch5o2VEw6DA2F4V5zKNngsk5ZKuvEVBK9VVe54RHkeZbAzKqJ71F7k",
  "key29": "3HS69TwkSht7yfJaw4XQ6ZAkb1XDyxjyYKFPgYLsgCDSG53xFybrkYpiZPzFff4afPE253oQwRayowM61DREM7q5",
  "key30": "CAbLLfe23vsm3mRpKu4d4j4mhwt6ckMFBG2GGKATn295CCGsVZMoYLKToRAfUqsMfpRpWeeHar2ahPeGMu1TyG9",
  "key31": "pnH8kiuYuAWhev3po6FMMf2dP3iuHpp6fUojyZG8Fer38XnqYS8BBt65rCG3E5sfNaU1m2Hosjo2TcZBKCU6PEJ",
  "key32": "5M3QXoUtGcYyrU23B3869BqBYHgbK4AuzuxcfrKiw34awrdctEnWgLNokcSLj4BZVZz6EKtRwGuzQfUjeaUr3QXV",
  "key33": "4adLLWNzpp7KGopkCRucRjLewzabGDx48k67qnyZkbvd8kBYAUEcSsYhtaivqfMmaDT2otwSJCL6RqbqUmsR8WZm",
  "key34": "2ywMY6HMY61SagPfcapuDse7Qwob7cnJZfWvBKudHqBGft7rGbmRxh5wNkLKmznVedEwuzcExJKPC3aw9b8Eq3wK",
  "key35": "3XP2i44B5q7y4dvGcuhAKKEuNNkBTiaq9AQaFkH8qKzP8hB3fZVr2vE4wgDGLy6ZbBu6aCqjbZSqyMJmE1Uv722J",
  "key36": "j3Tm9tGPgnwXHRRzUwfrGq7cMVUcbn6NqXpsWXkYG3wSJuPvdDkfTodsN9mb4H2SrkkjNAaSe1dxpkT3r69dDAU",
  "key37": "315TJ2s4LHvntGmp76TuTXhqjCB5NUJHHuLr6nbBmpUGkqT5TX8vVBEz62SBfZXSgfHbnFNMy9v1LZoqNsXSihKW",
  "key38": "4bqHnSg4w2Bu3F4EEqeX3kAjcZM7ZJPzXU8MLG3UXosDrEcszviZyNEksWvGSnw73iUdDRP2T6LBQQWntgdQR8xx",
  "key39": "4RR4CnkFTd7SmH55rccV3QksAaAGzZoNAUFaW8bQu1XLEHmt72ZgWZrqcGU7CVUTJUFrjbThjoPXh3HczQ196daB",
  "key40": "4w9xXQHHHN7CoL1cHFmAcJBERejcvRiuKLATmoJFMDLSjZsdbYkHTawZsecgo4Jj5HYLXpUN4GksTw1yDg1s6DGd",
  "key41": "5GBwjYesV2mKu8ryR8EDaVXMW3pC5GH37qU2p4RCzJUKgrGGBxANP48QU9HXh1Fc1XGmS72Fe3uDY763X2aRpuNb",
  "key42": "2AiAB3NXHvhj75XQQTTPcZgBtTxnBY4aXVGtN6XgycgfyfPbcBPShpGU5p3it6SGEdKv38gQw4mKDwNTy3HrhVc8",
  "key43": "25TQxtncvkU55GXL4c3bAmYaU7MPwguJLQqyExRyWZertoqLsaTAP88Wn6NPzvMLz3pFAgDjoXeRFrxnxVoWbDm9",
  "key44": "4tZTyXLwC1EKCojanuRDiNnVLFauQsCECQnZw9GehVBCNiKdzhvfVD2N12JkbawTBnE1k8nkRqfia7mUruet74Sf",
  "key45": "2oBz49Zot8hq3XJYeAxHxz2kp5pgMF21TrMUByLKws3ddiTgQDuTXLMMvmBhSWSn7K5ZC1DgihhxRRLojFzAzTmQ",
  "key46": "51gZoNzRjTRNuTzSBCVMZLApLXPwo5TC8sv42mfymCnneak4v6ngRJwaPPnuUSTKn4BarW7iEnnHc5Po2FhDCZ36",
  "key47": "h1zwEj7kMkYKe4pH6uLAwYHsbN9XevYQ6MYwZ6zTK39zHhC2gWp4r8QRrffyA8yTVCvFg42qLcNEvHUXv7W8r4G",
  "key48": "2LXSB8CitCdsCkizmBKHQ8dJLToVR3QHUkmgWJkgqdNf2U4zDdDRMGGWnAQCYUn8KcsT2Xy8kcAnyYZ4aeAMNar5",
  "key49": "4J65FS9E9QtDbsgn4Spa8M5iMtyNiwjX4a9Rs6wYTkssPMgWKwUUKJESDWkgTbZwZSAtK9oocBZbYk8CwyJ6tZkF"
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
