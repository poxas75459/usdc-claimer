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
    "2xKsPBqykn3RwSKEwgsHykSHaYvTLgLhzyyJANsDyebdBKoNZ15ijRmH1yAMJvv833GqRBsvdgzPewZrAZE8zaTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xh5jgDDJt4s39acqQ1An9sVukVJ9AWWFxkize27CS57f59qXMTWNSECE8qruRhmfjdSns6iPX5JTfHi5521WXyZ",
  "key1": "aJVH4unamcjrzMLMrc4BD1tpTVrtUu1a1humtUoxNCXU2dtHbmUv5jnTwTFJ151bHJrHxdP7idhcMtmK4uu8DFG",
  "key2": "5hhug3ULSyU6ErAcHRFZ1yKaAV5QjAPr7WyS9pfdnfEDxKdFW8VDtMtbWCHjyoa2Nn8vdJByRm3qug8YJqQskuQg",
  "key3": "2E3fmXVHymNg71Ks8kfRFa4pwvBqcugfFjmxVpNK5bi5pzcWW1bLYch7uuWDBDLqyjx5CTa1uRrLJc8ias5Z43pk",
  "key4": "4EM9ypkzX4A7SE3iBr4xyZuQFiZJW1XVyw3Aqnpj497vejr62fVGJDuCucg4yLFohEp2KNCKy6UWS7N7ZsRgrXh",
  "key5": "3FBmFJob3EqLM5VezgXzQQzSQ9fKQXDf8jXi8LwKPPBbkH7NvPpVkgpfw37sKVnWyKEp32NxC23CYJv1MDYgLjRX",
  "key6": "4uuCyrunKeneFpae7a1DUugQX6kgw8hFtUyNWm38zDmM7DF7zrvF1PUL5udzsiQumGSZcpY1id7pwmog641GeE1p",
  "key7": "oU6VRbAoiNRt8akQxsHFb9sXnzpKJeyT5b9LnvUZ2uQ8vRBgdMJV16vEafi6VRsTTm4vUPdemwV3QBuymvWS1BA",
  "key8": "38yvtc3tzPob9JxGFAcBdKCMpwYUiy2EVLpzWtks36Fr7iPwSsLeoxUvEAxkvsMAoqjsvj7cmXNkKg4nJ3E3usfU",
  "key9": "jY5542SAVem4VcHquYGFLTDTLGd1Luyg66G4J8cCDwyeZctxR7ctZ3NkonKoVmJt85kZVxzhQeLSkE4map5abUG",
  "key10": "2sW1J8hWqrKhsbxm9N2e7S92VAxeQQikGLT92ipuLWH1FXJdd2YH3XFC9Jpzwsi2Tq25Hn46JjL6HLqfqcrraTHV",
  "key11": "4A39ngzfCqZ8pC2xzXb5UuAgUxtBnP7GwKYen2WrY42MaT6NkKzyyLE3PiLqgNqKQZbeU924PH6bXzvtPsQzE4Sa",
  "key12": "3cFnMdZKbMn5CBQZJFgRRjFPYfq1ebN48Ewx8qJjY1SKzc4o4PTgQm76AA6HY2iFVNqy6s7kbxFj68ev7E2JRt7m",
  "key13": "3EECSwYSqLpRfkHJEw4Uhm3HWhcJMFMXmVoPNeySMjC96nyCjhtws1vNfKrNNikqDmmu4ucuySbcg6Pm4f8uJCF1",
  "key14": "2Nyc7evGrgCLRzg1gZ2MKZPmYzYgbxRa44UoCtRJgcjzQqUPaFGxrCNPN8Kdx5rFcPn3H76k8rokFv6Tui5Gi5UR",
  "key15": "4m4mWMejbLTgYAfYP72ND3iSbeAKw8DCsstZ8eVYk8Zh23C96nzDtswZeUz7VKH3KcRyp9yhZE6ZnpVthvtpeFXt",
  "key16": "66c1o3desefytKbtobV5sPDHkJR1QPMTJqbLZ3c2EG9KdvZiTn7kmmekovCkk81jgDk5zhXe7vRWpMAJkFQyzAvq",
  "key17": "ChGZsB6f7WHskdq6YSENVJoV7nxscDmgVSGYG8eM2t1JEcAErpnamcK4JjyNCFAMWS3SJk5LvdCbPBYiQYdb9dk",
  "key18": "nrsMG55hLXdFRywqd2RkZQU5iYsznGjLGBt7ESZ5yWxAsMcNYRquePUmsuNJDHxcMHvvPtYZCNCneaH7dC1KMa5",
  "key19": "MDgX4Tg4QFWQc3kKLzgM86qTQMcvgZQ1Fqed2fg2hNzWBHDCDtm8HiemLYDEyf6YCzend8TDzaAVNNKk3igB4Bu",
  "key20": "3GZVeEreiaBXKnbsmHprd1E8HMzsXba1gt3q3Ua5TsfVM5hR2BpUrjX3cJA3CinhzK9wy15bEe1N9LrVMUoqZHLk",
  "key21": "2w5ApBPBxQZDpUv7cg3xNVMSySVJTJ7UumUoh9yK6pX83VM8KE2kPMn899Cc5jH3vu7ewY3Pxtu2VWSywFrqCtgE",
  "key22": "2BDXBNsUNJwwwDgsgUJbmPb7STJWSv7wkC317Kpdqdr2ETNdYqyt9m7S88zDoZzkodjSYLABydPYvZjGnDgLAGhX",
  "key23": "2cRe1R3SpVtw5aHadg7aCuo3MR59WZtGPmwpmTtgDGGRPMpYFr8W6XHZbz9XJJmjhgN6Drc3z8y5XA5Vwu59zYxE",
  "key24": "3Kf9bstwbo2LN9UPtFD94LYyzrmLmLHDPzHaVHu7FzX32QXFjcm7dfHy8HpGnqgdXMGmfGgXfM7zcRd5Y39MtWq3",
  "key25": "5uzFNqd3oAS8kVdSjvFVqTS5FsZaJ4FrHuMPFhsrHHm9itRwKhhEobTgBuEMPqcBrfKwZKfuAmJ7Z3ANpp1865GD",
  "key26": "44H8Tie8PAkrLeC4campnYZgXZa9werRirPZ3KsZhbVhpMEJrR3t4DXAGhEvpncZeB7bdDSuTK2r2Au4KAXUookg",
  "key27": "3yN7Pyee2KJdjg6KdUoZodNRTA6jCa7eYE2Jp3u5hyyYQ4umAX1yUyw8yVWB8srdHN1XJa2nN8Q5xHhb7C4ZkHX5",
  "key28": "2fsA4y5FH23XxTjZjvLPj2fkfJCnmEacUANfAmTQpjfKwfHPpbkY6o2CvbLK6qcPhSeupHFKXfFbTZx6YtgjKjVW",
  "key29": "2FvjcZJHBdu7AgyQzhbgKtdG194DD6p7V9Fk8DxeTCrNTz4QAYmKZhWbCTNv8tNi1X5jKzNwh7Z8KkMvbK7GAhND",
  "key30": "2M8UVzBC9vesZt4AAYyhUte1YWzxY3nRq4AqmeX2VQjKhCVuD8kCr7o9cHm8oRkaPA2Sugttzej1SVQnyFp1u7ua",
  "key31": "2njpgcsqFugjAbkNYMS2H8akG3yEh6Fz2jgJpVSzDTkE32goTrKpdrqQs1dopmnJLUDD5pE8SoYm8cw1CBskSkqF",
  "key32": "4veNtS8sQRSfLo8yQxFD8JVWEnhHwuYiBBfTkfoYEBuYm5AF9GXJKiVjULhQYn1WrjyaPM5y6pvKq1w9xEwRXyvA",
  "key33": "58UtmSdURQDjVHtQBZ1t7gbU6Q691TMwYhdeQeRNUmgbuSusCobyVcQ77LopCthigiNndFzw4Nty8u4AaGWqARcS",
  "key34": "3qYtqyM9whR8MfkYieWQ4d2vFzQzbrx5cgmvuVzZLgR1Q9c8gAawWAaphtasJzga6q1nTwKiwzXWwUAotTcMzwwn",
  "key35": "5Qfcs9XWgaCtTB6oBZGT4Fxi6zJaejUwtKAnxN4MviytPgoioJzWUwx83MvtCkTvA2xBAjR1QJ82HiwuwphgKHTx",
  "key36": "5uEk2WqEWpSBxHeNKdoE2KmzC8v2s2tmU1CaExr4pXuhhMu7AcCvS5kXCM6TNgpvRBz1LokQR3gLqXdD9u7Byh2o",
  "key37": "5hGkZzGwTX95CFyMssgPcqq3tYRNFwq6YpnGckxRs5KyYqV2t2HQ5m7sWDM8YwFhz63iZdedGiomJiUFGneK2nfG",
  "key38": "4JxJKzgtU7L3ZVx1TA4XTcdiBTwkRGg4GjZa1FjaMa7JiLtCRj2kJE6ucFtW5gmAQVLMJXUuTSe4xvA9kPL5oAqD",
  "key39": "2hHStHHJXJ6aapVTSVC31FMUgNn66VopVijd2aao9L7kwEZ93ba9vCSZVbzNnvHrHHgsf8Lhveqd2gyUCFnwihmX",
  "key40": "36z1XiT7gQz8afak8vKSPnRw8vvQtxWYNLHKKa8FJQCp6EyJKZukAG9aJmhsNKzp86UA1ojobALDy5cRW7zZioQj",
  "key41": "5u6UyYkp863LvDvKXkjwXN6jApdRFTVWho65CAvnTrXY7vTV41WpBRFiCX5XR5vaKNENKLs19TC4orc3onrhk5BN",
  "key42": "3MnWhV9oM2p2aTr8VL46v9Ju5a38kG7jpNGEAoL8BcXrbTPguNJNNMgXckbAQhnVSHzhWq3Ab3NQKU2oqkUTmhPR",
  "key43": "4e7WgNiZczucPMPzVMKqRbKP5GGXsr9CTSGHKA7v6LLh49m1RJa4hFoRcQPuMrT2NzqcjLCzHjYWLxtQbmbwPGew",
  "key44": "5tCHNubzhZBrY1KBrD7QWLPP7tcEwi6Q34LdBq3VwNV4cy1cZvYMnJf7ShfwTSSzwgvhcsyCrhnM77qGFqf9y6C7"
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
