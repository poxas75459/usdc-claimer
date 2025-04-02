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
    "3FbDnzFSSxUNgW3xVkVj1d55YYeLPmWAPhttehZfgEy9EZpT9Q1HwTMToPnpkE3jJUyh5jkgVTCj6cFneg2ZJHph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rZuRS9HX9EmUeGN8mpPPrC6tJvC6GgbTTD2N4NyS79RnRPHUurMnLCH9CeMngUc2tihXxNTBXQddqcuYbV7w7iE",
  "key1": "VhU1Kdn64m3KTkEVKCw6nDXyAqWxCgw1a1kEGvphpLbw6canqo7cGFUWp7L6PYC8UdZ9pAZUaPfsjy7UQcbPxJw",
  "key2": "3irQKutab9MUaJpL1ov7YY9xUXEiQYoFAMHLLAPqun2rhKCF5yEvkvRgA8GFcV1xxXp8JPoVLjvvSNLXyqRUvdjV",
  "key3": "4J3L7sHjD45jnzUG3bBW2SVNExqx8qG5S97GMg24uLD4b6bfxwnCHEFqRkjt8bFfb9VVm488NNoT3psB521xifLU",
  "key4": "EuVXjxBGwpDnNEBqHULTecFo3b4mztsAFeRkS5SmMrepavisawRCoUdy5ru9ypvaScmGg3Nzs8xmmVdViS9oKaF",
  "key5": "3QxKxnaQjZKHBrS3wnLRUiUKorw26cK4sgmcKVWKq3WRMTYSnhysSnYHtkmE39PJqXuVCuUgYj3MonPeptLKkTA6",
  "key6": "8KMY9v6vTweJfTyvUnGkYZJv4dAEtBu1CtVCx6FEAfpqyY5zLBPHroQK5ZzjPztLytQcuZLQ4rNJF7cGGC5ge3p",
  "key7": "5XdY9ubsyow1ncfMxsXmCnCFeL295ThFLBGi9CtBybBLCArNC13zcZusN1X8GXJBuSzhAXJsUon5dgo23CD1zFsT",
  "key8": "5KEueE1cYAtKv6WELK4Qo6S7hkoXKWowFCSbhbQgbpMqwyf6VLZoYafT8SZEPFMR2asNBf1wWCRAcJX8JyF4fAbq",
  "key9": "3YA9VTwa1PE9sWoMjXHi7bcYC3x58XmWyPuZzSA2zFY9wgpfuX11nTaxLGmU6WbhUy3AG71t92132wkHe1FHEumz",
  "key10": "5J5NzZ83UgWmfaqiMVvXnTbz1y8kqg9YfwrWiYj7WJDGQrUhzvZ1woZvRkFzYMyDCprmnA2JjP8Wpaxh9ZUZbmXa",
  "key11": "52gY2r5WvPV7cnjCRAAfqVJsjKjQThYmhWzZZPV7rCsekUzVSesstKbdKCJMXydcEubxEeBPavaN6j8BJEYr3tW7",
  "key12": "4BV5NxZfybNSR9rdSVB3gNisZpkyQAVusyvYnfcoyubezSAgPp95Ks3aFg3ZXeyz6REaDzngfvV8TbddDGNc5U7d",
  "key13": "4S9vFZs2SsvYqz196sYZ6faU5HtpRVTHG8Lub5u828CWAxCHTVa4tLWfKc6WQ4Z7VmLnE6pyxPfid3xjmk8h9sbf",
  "key14": "38hHsG3BqHcbmdbbxDBz9ipADwNtx7NQqugrTF6YKHyUafEdxtwmYugX4mEqLHqjm9EdCXsHsNZHshDcBNBvDzda",
  "key15": "2DLmhg8LszpJDVKRy4wchoZi4uXTALQjyuiAtQ5WUvuNozibFCPhkbXQxpXkDkiebK4JPWi1Z9fMqH4QHXrwC1E7",
  "key16": "31YHep58a8n9YUzUBzX4xP3t3EdGvA9Fa8vVtY7giyukxiSfQfGbry1MoH35NCdNomZ8oym8N4mchuwTaPPFthXD",
  "key17": "4JS5e7yw9ZAfQQtsA9odaxqvFanu1LengVxTeK7gMKkoRTmRRwu1BCA7i6QpYpWobUdADzfz1LaXDhLDu7zaMYof",
  "key18": "DwUSsZGL3E77dkr9PhcFus58ocRyDHa8khUH3w7knTxoaFRMWqDiz2eCGvZWtE44cuA2CJoB3DAtjEbNqRephDs",
  "key19": "5DZKXj7nZFzYsVC3uBfihmr7o4uqEatKZfT9ex3XNZLh4ymobJCjPVai5Fst1d4h6Ais5TYJhWfLGggTpG43CG9i",
  "key20": "5GwcMQZCgjYJy8Qttz19YBDRmDt7Q6TaDxaLGimMtHDfdanaJAT3woAnqrg8q4gNYTN9CV2BQvLe7k5qsCszNHvH",
  "key21": "3XcSg6scZUrkoRRcTuwgXtmWTYehGDffvwvcHr7gKftUrY2XB6HrZGeWwPofFohDMy1yRHbVwDefSt4Ug4vtHz8D",
  "key22": "2mTJH8Xf6kzMDcRwM7HAGGBbdy5PnusiyHNazLhtroTpcRYx4yJxkmVzfBiN4tRcD3r7Ec6i5cgmFb2WHPQ4VpY7",
  "key23": "43pXfgXxw38Zd1JC2MrZqE92MwtfbtgAUrTtT4ZdWornkKMEN7nSbrr9KYNCdQrbFBVYr9cofVyx21BVvG7iL5o3",
  "key24": "5HKuF569rKGSrPyu2UHk6UQNv8C9wU5vipJdd3wzsSsUhU4UPDh7GaR88hPcvsSNCHJKyUVWkw3dtrveLqxU38Cm",
  "key25": "44N9dA9z97sm4eUd6PFygjuWhte5Dr42Ui9sTMTCKGLQw4zR917yqxSYRdC5i76grhQYmAVb8e9Bv644EFKyJxQ7",
  "key26": "4RV6RvvHxkjKMfFUDJHYHoSMDqu5wz4Nae67HcMwBHYZwLviBEnGwb9qQ6hfMRibsHQuXh7bQpvEyMuy2yXRhD2W",
  "key27": "2wn9iNcuD2jJ1cscZREmm5Jt4mmE5LTD2ytokoyXFAgctKNYAqLwxVK4ZezxYUs1XTuaFH6mBHLu7rGkUPcRQAzL",
  "key28": "2ibvZyuhbKdAy38x1wP2cR6tMzqmratkj6Ed2XTKgaM7nLtZ3A2KCSZ3MAeU6df9Ga9sCWTpVEQuuE6vraSZnWp9",
  "key29": "3VAiQ4xWnTrZuXa6KSW9rX5R1oWpC29XvhZATeLCsFomsxJ4CRgXtn7cs9bHXAQRUJa8E6RsBEjUj6sUCAZSHhSx",
  "key30": "3YYxsJUr7hwXu7H6fgC91poeaD74cRgBoPTBjVoy1h7KhLDh144F589vq2UNij8khTZGLmqQmkHMQskRXeuWsjxh",
  "key31": "5hKwPkuspeNkotkNKRAzab24eSsh1ohWRF6hvb4JhMRhiBtjCxdMAGwNAiw5pJhJdCB8jsuLWnT6ZqzE928XYvPh",
  "key32": "8CLhwxZKyp6xenKTRdHRnBpVgyKQdL4j7i3NvXNUeh5oqqvDxi5Jejco7xmQfMb31feAFkzaxp2i7PgphUxijUq",
  "key33": "3MpkA7N8Sq7UnAHZAZGyjZn9FTQdVPcieNPQXWqBUazihSgHi2uYrGxE8NZLJSiqKPoGL3XRLTxsPE9tGAfbi7pV",
  "key34": "2YC6dnQdcqWG9dLsbWDcp1AQMdkqhXYKhcG3WEycgKjrbRKKDiwnopyij3o3a9iauryechM18P5KrhbajM8HhUhE",
  "key35": "4mUw3jXARqp27rrhaGd76RKtt9bECCsPHcFHYKfEz61EDe9gd4NcfDaG6ujbsQUKZV4waPvnZe2ywuDuTAdFT5W4",
  "key36": "5rGioBgrFRYihtWyVDgBbqFy9fthbQYpA65VR5KVi2CuFutx6cdaqtb2VMv5kki3WdPqG67xaStXAAM7dfyKEpSZ",
  "key37": "dRpLAD4GeaXkS8n2EWnAAkm3kxm9vZUz96troRKmufxX5XBMscPSyUdwQzTTwwFvLDVZRuLHxAxHaV87Fdm3N7f",
  "key38": "4zSptuHMRfUYPYgAjMjW2KLSxQWsLGx4aGNXtbRxky1K4NS45PRfPFnF9Bc1YJRQTmzwJyv9YdW1cbBp6QcsFbc2"
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
