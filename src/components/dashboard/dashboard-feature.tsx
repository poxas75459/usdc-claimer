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
    "2tqTXHJoivk51awfDPuAMipTbbLRRmqCMexTpxNUptTN49RyFyk97xjmyCofESWNj8aReUJX8QHhKW6a5ugWqQFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ATz8hG3JtUFgK6qhpeZDtbufHCt4kM5MpZ28ExEiGU5GXYhyBuidLKc71xKMhnogBsMKRzyqdFNikTEYAr6QQct",
  "key1": "2vGPsHHfN3eSGRq5uzMZuVvSPvDQPdKto9ryThXLzddEfSUkr1scySLTfbq2myEydC9h1gkXwmp2PTw9GXKSnoDK",
  "key2": "36Dyj6NdXFhXXf4hR1QwYYmEijUcPXDFwutotioWnhitHCMRokY9ULkpFwft7LB5jetxNPGrNt5hRhPARm3qdFk6",
  "key3": "2o6UukRWvniXaFEggAsmfdNypE2TtuAWHphnUCpUCVxvKLRVdFsczT7E1FQZLcCwesu8UxbKnFdf5fXQJhbg1WDC",
  "key4": "5W37z97sRJL95NifD3WrSdb4dxNqrTJFzVSVNCMyp4rcq2K6WSB9k2akLCr8o6ZtroxnDHhHSKigpW6W9pKNPK4v",
  "key5": "4LiYPGPXffoGNEvCqZAQg47KkfbEtCqaZjkPxPZXwT5vZwPVEGt1ST6oRSwkxDWFR75AoD1ieRgF27UNJ5gesocr",
  "key6": "557oyqx6wpLxjCX5BpjZPnNtisZUwj8mMcQmXXSqvCeHQ3xbGVPhk7Vvs7vRQUztEmFEfugkAvydajja9PibyGrW",
  "key7": "NjNsh1fwadnhLVTWEvgBnuYQegqxHn2GUJayAjsHSwuArgpuuccLYCZCn5JVs7AP4fJqCYSL31fGAHG7jR5s2bL",
  "key8": "GrYZvhsjvvTVTBDS9HuEv5MmA68p745aGF6ruLXsKvExmFJocbKeKPdK6JQXYBxQGpmTGsMVFtrNBtHd4tob2Ca",
  "key9": "eLkWf8Y1Z9n4qk9G1poxJpEAbibb6whcM7NzEYG2q8wcNqMBhVLd3JZqQcvgn4SavjuXaV7yejKDfR7cBvPvbnr",
  "key10": "3fKUgAHoTYzVQB7cLsBMYTi8mPD2GhXoGd8hBMnYgzxszXuXq3wByzVbr6HkvKfJpJbUEdi9NjF3DWBCDcqXmbDA",
  "key11": "5zbyS9Rwsegyb4DSkCkimujJKCXnX32wB6vz7DxSQxm1SfnWKiCviaQwTTddDpXQcXs4aw4RcQdewnicTufk7Vj5",
  "key12": "2qMiMXcgXCc51ermxdzsejnDRi7ckHmAMznT4qhE2gDS8yCVDkCzdc286pjLvL8bfbQ7WpUCiirJCBtC8r2NP1ee",
  "key13": "4gR49gAevhix2cgoMGwtq4pJknq6X27zaaissoYmsamobKVkcCwmRQiLYMUPxcuhsgVALTWeLMahAnCfqZFbYXjV",
  "key14": "5aSD13NGzi6Hu85ncUEow6kv34PSobVbkNYDERWzKQPQjjsucm7XPtTuCrae3PANCZq6u3uYP3BsQiXwzWGdYLXn",
  "key15": "fbg2FjGFcPUs6rFgc3P4eKQh3QmQvQZLX3i5s58eW4FLBpwzBirztypdnUsDyXQoaWZoobemD2h6Cz76xxWwDNp",
  "key16": "2t1CS1y5fHLxnigD82856rdod4R9pMf6bacgQ44dfMX9yjNf4PaEuDppQQiq2cyo782oYLj1MkHHcKdF5d7BS6K4",
  "key17": "4GWyzsQ8o4eum1eAmjHzVng2twkSG5AugV7pzuGZj1xnjaX41mqQCuPVtMWpcC2EJu8aa97QXkjZM7f3V5HJg6Ng",
  "key18": "5FpCWVKtUUVwrT1AB3bjH1WVByHVtHZBuBabehg1ChiXxa4H1MufJVNR1JnnoUtZqEu9PqkfX9HiKk24W6MUaXyR",
  "key19": "1FeTJZsFQBLNbdAt5rUJmSEQLBiALMBGkJVJtf7RDL9qhMPsA9dSB8GRxFs9du1quGXU9ZxpoZXe4ZRFEWvkCbQ",
  "key20": "9Nr9eK7eKR3cPfjWdWR1fXo9dy8W9heq4gL64VE5HianVSwtUsQtQSGm4cqwpiJrJ3RBfKHbR1wGf9ovt43hqR5",
  "key21": "2LohJk4b16fHY8WSGrzZzsGDRk1RjWoV4RHZHZbsK6q8FQ8oC9JpwrAGsUZviPATVEdYjXtGA9sNByBAhkCZkuGc",
  "key22": "3eaFaeFqVa9tWUeh4L4mbJbPpph9vWZb2T9yEnVp2HdLMeXbyUFPRguQzcpFG76jMRrH1SahZTnAGtHRQttQjj58",
  "key23": "5Fzq89cYfgYHBJieAtNGCMHhPyRHUghnj41U7PkboZYTCYNe3ByMgY2pvX2ndYzd1Hf5ZkmwSxVqSCjMXk6MvjkR",
  "key24": "yG7Ji7pecMAFAB93kw2brbt8yY7EMzPfCjdhYiFDKU6Wy6FHdHiFzAjd6kq4gbHSA5cgTkeVvhpaX8FahiseZ2S",
  "key25": "4kuuNK1Bqr8Vrb2V3iKoNru3iQEQo2MkHXKyeGM7y7iy548tuig4L6brx1VMTD9Ay4FNjso3zsw8FMnu8Dadxcny",
  "key26": "3MKDPv2wu85Mmw3FNwfpe4y8UVsdUruVoNA9BXgx46CCgNaQp6WP8hJjqzkh8wYyFYPuRYHegUrmfUyfjXe2dnWE",
  "key27": "b3YT5KEFbFH1CrFZDsjM8JzYYpnzUBG98B6o3cYtgP9pYVMSqL1JwXJPEGyr9YE33TNZef85BpLL1UDJdfcD7Bs",
  "key28": "reTPrTwAHVuzrw43MNa2W3iKamBJpjXZwbHfdTFvHH5Kr8AdU19UkvVjuBsCvB7NX3grpExyPbx5ZeoxNMfTPkH",
  "key29": "2QWnz8Wn8yF1J9pVP1hN7DtgZuZoYGdwSWW5kcyjNkbjhtvF6WncVz1GQcZFG2CckvQUYuExrNayu1bRDwbFAyRS",
  "key30": "58ek33CzLopjjZzuERpSCPaxMrD3FihVVStfhuPjkWTfm1d9dtS8WkPMbBFWJBhFvm7uAAuNL9WQ5TXuqtCRE3ag",
  "key31": "oVzAvU7bHvHzL2RXmnRmGWXmTqejofujcxrYMd5BhJW8aQHW6hyT473BM2jpqkZVa8J28eYhGZvHwGmWSpRf7q5",
  "key32": "2PvupPSHKQiJFa3yjMdwf1Cc5YyunwP8FSJR6MEriBaNFRhyoLfkKncb7SbtBJww1rzKHF4ZFFf4QpsSf4cJhvfW",
  "key33": "36zyxmmF75CtCm6YKdBAKuk7R7R9w7T5ZWqVLVsyKwXo1pfKLjvkNgBAqY423T6ywEuiR7eWPpNfnYW2GQJUzyZN",
  "key34": "3ToaAxztPTvVFS2uwznVwDDDBxuVgW7PywHjTcfeXMWH39uUXp2xduAjf3BtmFrShTkmVpQTNJJLJgCWchy9A4mC",
  "key35": "22nAwVW7Y5WnWXdi6ddHbR2SbymowL9dk6NRoHQf1tiU1zaLvoxdaGkpQpYsGfMszeStTq8kLc71rwbHxSVVLaEr",
  "key36": "596HQs1PbnUFN3r9PiAnRWWnMgfEWvEkeydRZgA1Fjq7UW3gLTPuTRS7kyEqEvZeSDJ2cKYim8rx1vUrirv9YXYm"
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
