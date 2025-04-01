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
    "3xSF7DAVsuxB1U7eFRmguUYbwjtmVExxisPkYSDHGnvo7v3wvmpqfCFhfD62j1wpHEPUS3DFn6AN3VBfSbf845bJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38M3fJpSnJ3GJcneyZRf8fY6QPfFo9mDVjwKRSvom3KWPu22oyEJxqHkk1BfajDFx3VYGog1uRTWMreua5QtoFie",
  "key1": "3d2BfSkJm63SCX8HwMgjoCJ5CDpAYZ6f5GDLyQaqjmpMjACjizbNjcKQbwmp3ekLFspbV7Ein2wgMKwAdDjkHBoQ",
  "key2": "47WEA6hLXupuPjFY23ekZUJ5Zu4jGSxTj4VHXW9QRisUTw5c1XauETNnzTMFQHmQtbDsbzLcghzK2zr1Bse42bik",
  "key3": "4bQpwbbrBr5YkZYWJNEQuMN6R86DxFQFrPvfxQm7rR3UggxEkr4Z9HjzvkegCcKzc2pwEKH7TrvZhXvhjnNDWiHq",
  "key4": "uVBa6rjFib9iLaEcMJ6yvuFHT8gU2yxi2r4qvaocLwenpPe9JT8irss19qM8ZdviSmoGKuGr8zv3HE17ugaQKpa",
  "key5": "5yQYH24mR5rU8ovKxNK1GWaAdZSsRgTixGPbNswNvbYxeYpEzi31q3YDrtoodcZRDwXcE72nBaUKg8DLGWy7eATm",
  "key6": "cXGsPf8XtdawDeFLXeBrMRjTELWEjezj38UXcgURBPq6vZL2RjmFUYYbPvKZ3pyFb7K2kQozzNSHR3p7CCHT4ui",
  "key7": "3NBBstya49XGbepyc9TPgisY2fq4kU4C4Kg9t6ahtyhuSmzDnraNgdh7nqxQTf9hh9yc9uLN8M6MQSmritTFhoJG",
  "key8": "2yVGfBYHz8hRuSMCPNBDEgLyr2rbjcYRd1Hg9xW4iGPeT6hvzzqctiWj3MvyAReFcffc9Q5htLe87WzJYurR2KwM",
  "key9": "5iGdJRpLyNHpQMDj4LbwJU8Pzw5LUMSoMW9jNz9NoqJCs6DJMkMnPgboBNX6PXryv8rFzmxz6s8yS3hYYhs1QmgM",
  "key10": "5bjeNuGEPz54JWkMJ8aEo9LqDMzBvRs3NHkjnu2mHBDyLascc9g2dUA4Xd1R5HWTi6Q1XN3RC1hn6imaaWHc7hNa",
  "key11": "43iPCa3yUK9Yhq4pd4ANpFojNckzDEz32qapnMqbmTanx78ASDQEPAXjWyf2o72ucB3AwgyoeFqC2NSGkapFoj5P",
  "key12": "3ckeySbQLH44y5GYzF19sk71YFpWg8oUj1eny6PD3ccEFsRWTfyQ5Qx4DG8fA6sNdgvUbSeCLEmdgHLwtgr2inJa",
  "key13": "3X63TqRh7V8h722L4mnZUGDJAJoCmzxtJo2DcnG24Q9nsmGDLaVqrWGng7jjBmR5f8edLMGUTXwsMYoM2cPiFgzo",
  "key14": "AzvxCXuxgLuE7gQFiBSKorw9sWxs2cxbeFcuaZzQeSciwLmdkCGMgh7H8v12d8FMWAEHNd4vGaE1Fi6gwZR7WZd",
  "key15": "5GLVsfotjWnnCyF8N3kCy2PmxquKP7NmGwQ2ntsKYq6VGBEsTpS15eSqiH7fheo5mdF5SoGkMyZC1VSHN1MHWJdr",
  "key16": "5CbNMWgmp49JBe16mgCBYGaXf7KrJdiww2k3N2xsHdY516DEwcqfGNK6tDyKUkZKKN445Vxmt9NyNmh2xHYjA1UT",
  "key17": "3BPXMZzK6rQ5Zznb4QY8ws7hJLhbD6V7VDPfB8eERxfYvzHACPKiwREGaGqHo9SZz2MFdxsn2zuBKrow5Vf4YNZR",
  "key18": "JvjwueqszFtR6vMxpVqSgV6UuaqNhChAFGVX6oTs7xZuqENPXTKQAU6YkBxv3kvJDSmQ3JcHEXHesV2TRedStVy",
  "key19": "5y7J4qGULSMW8FevSo8cuNu4S9nHxF7fmnCAvij1Twc254vyXmasXeQaUT29rVQhmSdeFPMvpmF6USSbjWsNGqfv",
  "key20": "5fizyWacUzvYP1XxVctnD9w2hsB4UTXk5PuFAFNBsmmVMtB1jMdQ4yTtDRBN8GgNMxLF16CN8Hh8rLqeTJ49VaA2",
  "key21": "3HDrVLeJ8PbkYBtWLMMjS247BgQPQ3iE7RSSWNA3qCPpzr4jwpCPWogsGaZbp9zwnhgVsTnYfMiGP5h6X6S88S6j",
  "key22": "8y5RaxX6sD6Y2fYHj96ood48e6rFUCMNbv731STqCqcBDrTDPFJGthyykHuFThpAnXCq5oyTyaxskCgmzhsw9fD",
  "key23": "2sfZ42UWvZNCucFgMKp9dntSG1KVSJEsF47EGuPfxoMKre895vnDUQtST4QMXA3hkT63UDiof9MxFV21hqXejPbu",
  "key24": "5GmboLN1h79qnXw6nnYcjqKrJ2rNU8azYNBob5LPnDCdd4KTWgTHd3Rc7k7EctHbfm3CdSgDLqaWdzRAKWZY4FHr",
  "key25": "5mxNnThT97b1GENRxtpFmmGyzjvZaHczxYvD4ew2ursiQJtJxfxckPLwz9CLuY6J7STJgVJN3vLqSdvWpBTAv9Bh",
  "key26": "57db4NrUas66cHE1jXHnG5RooUMCw9Pn875JbpktqnJWQpK5wUrx2eLFpTRXiKM9moHPWvyQAGQ2qbrrqnAABXpx",
  "key27": "4HAQzmmjH7Q4jTWbEBqTUVs9cNKGBHWdDyTRSUtb6heAcudXZ8cbVxbJFTVTJkkkqMyS9xSjLnRNUU92hvgSQCez",
  "key28": "2PYfe82YJbowcWvjWuhS2mDgpWoXpRt7XEhBu4NZ8q6U3EnDDGgwwmbWFt8tjVHPRyQrFYn1S4B5cSwMpdYfciaf",
  "key29": "cLcwe2H5AjHNoWkt8DHsatz2a54fgYN89YWyaRfJXP9dRfEaFKgiKrDUi212WtcnXV9WtZT2wX1yPgmfGCNgePM",
  "key30": "5QnoCfewuDVyBZg9wMi8SkMKJmqaGKsg6J6Ydmx5fAJkY594cAKKmn36PsL1Ma3jULz4Y38g6oHHmkZbPS97sjp2",
  "key31": "4AvpBZuQyA7mSTyeah56qU1NjSS34Df4nqL5zxDxNVsSjSPfyjhVbL6mGVpvSkNpBJNcJfjxq9Bx6cFKDVXLzs7Y",
  "key32": "3v5FkMQpYf1jkceBG1NvNYhHnyEWYiarwQqPWZVGUuqnSvoMEjMMV2jPaY5m7qsNgnNzER8jbnCCV2tTWi3T3hUs",
  "key33": "LxEnTx5xhfwkYBnTVPQBpzGYPLEyomEhExhKK365AeD1fAt1GCY9z8PkDbtegzmvwCBkNhhWkeWAWh7rAA1mzKX",
  "key34": "5TSqN2HWMH2ykq7Dwb332jnouA13gCFuSPMSTnMNXsreH1KwETENvNdDzPrZKcpeUnCsPz498v6tygVez8rjT391",
  "key35": "5qAiU6jtdbA99cSAtiiEqZctgcKfH4mNhJSPMeWE5nKDoeaQz3vZ7NqpBKjh4iubNdCn9vfWB5p78vkh74cwYwWt",
  "key36": "c3STT1s8xgYXjEjgpYXqY8kNgsGN3yXRgGeKp2ixYZe2i88DQoX6JbuWkHBv39M5F6tLVunbkbnYHymGVPC6DLq",
  "key37": "2u7zWbkhicey3a7Z6mnVZTojoqtgbv4WofG3bfEzykKqmJKWy4HCCDqFpPHz6Y7RDoR4GYKedP3xSLetStLkANaT",
  "key38": "2CUnV19yKfLJbhJ6SSNSRYrpPhq8LVTvrfdcx7YnuMkSspfX1QsLXtBqtE1sR3mr2Av6yZB9XbU3LFmH5L11MLKV",
  "key39": "4jDGB2byKyxa6KHA255YztPAAv9z9i2ydMuPjQfZ6YUNwr6ickt13npvwrT79F4pxm7jexsd4rXKYFLyM48qdrJ5",
  "key40": "59iVp6rDbwrM8hrrJ2MxGy9xecc7BnUhRRceZqk4HyRHjXkreJzgwHtaYVTcPvxZr8mozrjoVdLtDmy4VPAMJcU6",
  "key41": "4dqUea1itiavpmr9L7o9SbFCkPh67QyGF1P8y6Xw6XnHVEr8W62YsUfmVP7GG9g9x4cUqeV7SBHqBsMzX4vWcmZe"
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
