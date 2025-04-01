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
    "5Ub1kYmaHikgh6ZTA5F42sW5P1GUdMfTEZZebD1ctM82dKUbuovnRWAZcLX5QM39wpkPM9dTP1HZ9g3bvgEkzFZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dD2d5Pqg2zzWbegRoeW7sdMgcfqbk1hdNXabwfNLLzBZLRLqTqK26xM1S4ZEDrhpSWESKHomBRvHzmhpdEW5yVf",
  "key1": "2kLhAZ1emGMCPkVWSyHGy9JMKMAnEuAatDAn8Kj8iSLP9AeajkpAzgo8sw46iczNpHnDYeDLegW82qDXLCnxKTDc",
  "key2": "2qKnPCJiwmZRwkicjDuGBqUgdYmVH7KE3oc6jFNzi4w1QaC6MAeRvELK4uh8j8DMM4ArZV43osn24xSnPCeVVQLT",
  "key3": "5ujjPTntYvyB1JSh8uLTsdyKWQCvaQPx4KUJjgE9WmWKSbvZAJ99VgYz2THmzxb3XyAFu92eEgpNTKFreha1LwYT",
  "key4": "prvhrpUXrC3wmErLi7cL16C3fiPvoBAzEiHJtGEErDTpfmW6qiixXoM3Vsyd8BgDyXBMeF9r7SXn3zmQL7by4g5",
  "key5": "4HZHCC8aMxnrPjKkwZD9ni517uFFUTP7rjY7h9sEBDswgtRBkpytQ1MSwxUnZQc88jmxxQzKxfNFYpsqoajnK3Pa",
  "key6": "2wc8FhhVqkpCH1Y6WDpako9q63Myi9X4XmzPGBtpvrDjWBC2FyQDAqtqKqoYHCiD3k33QCTF3v9VfjPeXWGiBHgm",
  "key7": "Z442Dc4ouQH8SZ7chKNcVE2EU9mvu4ho6Rh8ZL1VAkKrB5HpxnRLBj4d5s6oJDCa2KxG38zW21m77aLdPoVxPzY",
  "key8": "3S5bHmTeYQdzx8tkyxN6hA7daPDBtZcT9hseBkZLu8qsRipE1msZ5n3696FyVKAsBRbJ3MwzgpD4VBzRxtkWCLij",
  "key9": "62XjUuT1TBiHbGpfN4ZifnGk82Cy1cHWToZiCbSXE2KR2oY46NpjaETBynCNitAvxHAHJw8EJTxsLMu8aBae82my",
  "key10": "2fUq7NK5H8PhaVqR312qwJzhUUbJqbx9y2cFxXqmJdz2xxxAk1dSGLtDYdiyYhG5Wb8zKDQ7eGZtxHSQZBKsuj4y",
  "key11": "4xExXWdyG5BZyf7CKo8yBUeMKBWbNhAMopAaNXSPYd3NcJC2wmPH1vzrxFQs2NXKGbneNfL9ZpbWAgt3q3V5ipop",
  "key12": "3veJx7n7efzCgDtyrqoz68jaQcVkQAWhmqb5K7MWkXLJ8C8pjnD4Gn8VTmNgbkVA2NoaRrdzzksZfTL9jkYovKwo",
  "key13": "5kpZErQsENkniRSd661Kq4zUY3AdTqerYnFKq5PHbBrYoa3jXAdLz2q6CHd26tccC3odvv2Lbm3KSFk2s2gBetVo",
  "key14": "2Z1GjRhdVdvMSXFRuwtiXZLEFxXt2ywkfQFY4cm4Hkh7Zt3hMVR2TiQy8U3ar2q6nJQ7tcRtwrAGDKD2NEuS4HN2",
  "key15": "2m2TF2XJmKauwDmytFcXN4WdZxRJEAuUELcZQiTJkrobqWbTb28JrjSyiXNyNfmcQ1pemADpCUQL2Hd3umQ1Rd2F",
  "key16": "hVcEZSuPgZ1v2NyVtcZuEmSjS5rGTxuHvVjEfSvzb53kq64qVFZ2QJitV6vhx3DAH678a4Qk3adLmababqdaSJq",
  "key17": "3PeLGUwMhigDdEpNNvzqTL3y794je4PNz9p6jFtVZPonTS9MiVL44mn4D34E4vEBQUAG9K1Nb1NZhfwYVnoGqYMz",
  "key18": "5uxDFX1Br69WSp6pQsgfahhe57HrkD6uRnqRzJZQnPwHrDL4zUg3bdZ4BFgxVazsedHKDGWRtm3jQYuWTnoLmfxq",
  "key19": "62Bv54GtLMKPd6C4jUPL42h6LG1s9kRhF4pa7ChNSJhA4mGhemPv2xFjxx5f4DyxTF3zWLB6KLXTE2vWEQBMMyDn",
  "key20": "4aeMiAP9LhJN6cSs6HrhPrdGi2aihkvrfCD6LV8F1SzZe1VUJwquZuD4iyUECD8jLETcwxaVJn4ZWvjZEeKvyhry",
  "key21": "3qxEVEKAc6LLwv9wPqN1aZti7pi7pGgzpe1GryY428q7BK6WSsk2VUwnzQnHLBUgsdnWVtRYi4tqbph6X12fkq1R",
  "key22": "zPVJtceTm5ECFodpZ2WRWCtgkDcTXEVmgsX1W9NdqttTL7rXqUJzyXxb6BaruQ5msefnbpNM3DpifxqqQK4DzK8",
  "key23": "3JRvQDtMLebXh1AxDq5d1HxZMhj9bEJEpgzRjTocqLJpZJ8Se7JyLeKLDLhCJinJRmjzUnr51YN8T42B4tek9e6F",
  "key24": "35jGHEQk77uXw9FBMoeFWq1AHUpTzfKYDDuqDHr4QbvxfxAEpT7wgJcBZvJDxDxiLrEBJdP1DL8TN1AZoGgBP9Dh",
  "key25": "CUMd7ttEXqcJKQ8J2njz5DhzTdMLKcegTDJBJzwJDc24cjpRpZfy5EheJABAzaDFFComuYnwVwZbcxmnrJ5qLpj",
  "key26": "524FivmDvynHTqiRKeuhPq9jqRyxn2WHh7BE2wDfEgpERk6RmWhRejatrcVQF5toHbj9foNHfXHi9MMZeNZXayag",
  "key27": "5gzT1KUWeMDfghFe6ii5HuPdDSVj1i7Zy4fvT2XLPqHut6tfe6EzgUvaAWHM7593dUoTrYDt7hvumoP8w9uEuvjV",
  "key28": "zHURu578nJjJHaAe98YdHDGz1tAXbgoR7tjdLFxUcJQQ3u4n791n1n7qUGu2afxcEenTj2eZJvzFznfSfje8DQs",
  "key29": "585cPDLRAgcvhQxTEHxssnBwmprJyM42gj1y4rMorSuRmSAzstiso2JK1Pd9VVWpuDeSaNGLMtS9rmpiz1seXUNy",
  "key30": "3pUycbZdcFU4aEr7FUb8fRVTHhEsYL2rZDY1V6kFYaTFPXVdUAhfTdfLHEX4FPaebjRoyqQV2426FkMK4oc1i8ae",
  "key31": "tGSFENGr3KKT1ZN62CU1vsfJtqWXXRtK3fsqSrViVfasmxKTQk2Ph9NmkvFJrnptkMKB5U6hHGG9hVwwphSz7VM",
  "key32": "4MaLD3n58wGwkborENUXmdkDgPU1RXQjGNYEtq446uvz3CyDw996XjDPCQsruvCD1bWPadvZrMErA6RaK1zZTy6v",
  "key33": "3az8umX9roKnGWv3H7fTq4wRbkKByYhnzAUsw77knJcTqqxi542r3vhnhy7nsEdQ3Y7XubRkNjy9jZrr2MPSrhWy",
  "key34": "kLHsun1siKcVzf5gNvnHefsqQkn7UnFHZp2mYAuxEUDQvH99KW43BXUVfRgdZ59MshhvhKbGd85VmehHvKYiFpt",
  "key35": "dsN4MNBDEgcwWnujnkALpbSrztLByw5h8q3udSWKtBb2LM7A7sWgYPogXDyHGA3zhtC5y29Zbjs5wcp1eMRyaRC",
  "key36": "3ibfstyXac2BzCAfFLv4HGoni3nfHitCSHotfq4qfAUnh75hZ2sirV4ZiGDzdq5k123ZabxT7avdfz8MGHhrYEMF",
  "key37": "3vtB7t7QF8msAs7XDtAWGNWpAdap7LiEUJgQkSzhum86AVjfkcXYe1We6KZCmoij2SWSX1Fe1VFVAX5qJyKqhhmW",
  "key38": "4p9uNLVyKtBW3SKsbZt8NgTDvA7YoQEBcXGAiUWUCxTNVMZdcFGE2hyGM1gED6Ajd7PxtxaNXi2ptiBCJ5PMZVzo",
  "key39": "4DE7EfHTjP292v1og9tSxGvd8L25agexZn3394E2vG87j7oy3j9pKHT4ktDMTi59nTrj5PRqXQGzT6Li9WmDXcpd",
  "key40": "2btJpCUDzecSLVMcMFE4VxxtkB1ABoTNT1PNanhKh62jHaby3npPDp4akNdY7hr9c3T87WMit9i53ncfayNNExef",
  "key41": "3qQweR5TJ6syFCyDH5f2Asnu6C6yYd9gXUxykzcQfxyNRnB3fiyX2vZtZJ5nEy5d2PNVTVGCw7Wx7KnwtNqHCkU1",
  "key42": "2ZGWcTo6dnYiVauLJFoE7nN1fhAwDVULKgzJAW38hecafdJVM4Uz4P7G3CGNZ7UpE9vwxcfMeExpwmeEbBBuj5BF",
  "key43": "vCiFoT8zTh1obAHAbDRmRKirH45HnANRror8SgSd27m68JTMaHY43LMa5uvWqq2XewJrJQSEfsDceL5eJ8CMAFy"
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
