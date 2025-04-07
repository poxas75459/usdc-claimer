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
    "5ZnaFDP4wzMu5zqT7Jit5ngQfamdkXFKaihRdfeMWhuzLeP8gkKVoiN55DabqTrB3iUSMxDjT3fNU4EwZLwtjQgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JnYwxKz7wLKMPpf79sFpf7yBcXSA8hyeRN8bdsXRHEwm9XHzp1JdvxVTbMugMzP4AACKfnQUujCE5eBa6NbDHSZ",
  "key1": "5ZPrxdgKsvuyGeiPKpJcW7y6tep14dr8ez5R7BpmPGahKFAwgqsKWbzxVnPabRPFfgwtKnoRX8d1xdbukgzNE1Fk",
  "key2": "PxKJLpA8hCgHrkyKPHGduhadz3N4vH7ydAwRMCiNFPddevwgX23cXdUhPs8Dmmmo3pKZaQUFr2f5v3j7feqAK3c",
  "key3": "414F7Zfj71a49yBa63edpSVrShwLpcjaCrXxadZCKAkqYgBhxdZVP9DL1TebBjy3ZVkVxaS5oajHriz9fjjQ9LrK",
  "key4": "FkmGPAhmK1vpHfQmSdqC6JazaMmpJiaXf5SZSpx3W3LSzXAUqggGjoK3iDcrwpwxnHU9aSrzX2zjNYxtW98L32B",
  "key5": "4hDdrHYhhQ4gP5ozH3jn4WctE4DUfV1czty82UHPVdGkDjvNJyer2Vs2VjqUt7rTvTDBMF9qb8oJXCJ2JoLVGizd",
  "key6": "GrFPxswXBe1EguX9p3LGwLEp2o72Pm49Ld7YBwM4xkjrEUDX79oQX6WBbBaQ2oGMpeLjtxjhaEuGxKbYcez1gXZ",
  "key7": "26BdcJiChUdUHzjGTN6X2bFhewAsmwjHqUs39aud3AcLw4itvqsWet1xHnxWxUDV9YmPKyNN9nLEzTsJfJv5ijEu",
  "key8": "251p7norXhLMHmDaiTyAgosj6Z2GaDDMuYeYAVZFExX3386JAkMBpLrYHUFo97CGpcUysrGDrx9sh3ea3g9qWjpr",
  "key9": "3E4B6ZpBmedJLDUjxtfD3VpMQxGCojQWPG9RjJDK2EMyQgyUpd7jzfiRBCRFM8cCmDyrVEaLST8DGeiCQpxbns6L",
  "key10": "zkw1Tc24XkRQzRf4sNPTDF45WTNTQbY7Zi6DwA5X5XncbqKyXAgmW4q4iWfVvaT9ysUYX7a97h1z2muAwyJysa4",
  "key11": "5aHdRkhXHcifwNGMpshkhEDxF3SwBECFMKEgh5tYAszMe7nUpXmsPPoyR7vhGZ5phRY3fVoubVZeVqVTkKTFfVaB",
  "key12": "5czFXU9ZppGBPmF5TbVgaL5Q8pFKNTRVHV5mrkh5Z3VvGdiWqVTtDpkxHY3w1S5wJAMNPtD3DrF8WJdeGh4ALVV6",
  "key13": "2PSKsT2ose1cDCTeUyBEDw9G7E6KZuZYPNJm3VE2HF4es84FPS1VdKAMoWP6MLvNs4KhvBwq6vTGteQYUyU48Z7J",
  "key14": "4Eszh5LcDx7q2JUcrVDoS7kuZpFNgoRvXyZ2Ew4k4jA78jqyhzYgP62NTLkckGVTLZTGroXyx3agi1UKMs7EDwyx",
  "key15": "2XeJ3J82x5at65Ewt3NLD9vU1HUgnqhxRCn7RjYdNp9nqbvEGwtL51XEJnp9zvJB4D4hw5DDbEeqoE6J9tBYyzFR",
  "key16": "35FbxkcYDL7vNTY3vxYA1TnCM1hoXxo3wZ4EsvcbjLr6Xuq9kc52dhrMjYxS9fRt86JZXfpbaZoq1sA8ubYV37t3",
  "key17": "58DWDaxjsW3oBoh8t4P3GaVPqaV3AiCVZ4NV43cdvcY7nBXMLAUEGyN1YhHDJVkhogvDtYPEQWnnK4yrxzPEvZDF",
  "key18": "593SUZjzDHgjKbeabSAxZWDFVucaerEC2SZWtDqWih8k2CEdaP5E5Yjv4Edr58xirPHimSvdcTuiKoiqyV65S2WE",
  "key19": "4WRyZLBKUn8NsBK5wRkSnU3PVQ5rELTv5si2KRLgHEuRkJfF9Co7RS2N55vHRnK9EGn5zcioeGHVZnHuHdJXTKCL",
  "key20": "2oyaewQPmrjjQyAXt6AEMRZznuX1N19N5bLMDxsE4n5gwFR3qdLD4cg9CoQL9wEuhUYs9vMxvq31T2LH6AWoMFSk",
  "key21": "onLMZtuid2CaEu6RbJwAH24pkAss9mhpXkZtinmZWxEHN2BbPcgKwwYf7LNHp3B2j2XVUvGAmNA5vojtwRQmTpF",
  "key22": "37q3RPChVjfjh56EQtqJG59StfYXvESSfF3GXU8ytUf1nHiBrzdKKRRWa7FLeXrAZngTXkk1Nsyv8MyGWyfyySuK",
  "key23": "2fqdDnwb1DsEi7fiayT25bTt6Hdz7TDtJw4ayXngefjkmyc5jErSkYScVDT42EcVNau6YzMP8JJEHAvuFAeaRBWo",
  "key24": "5sNsr6xFE3rpwATokk1FeKa8gLrFznmRst5mCiuz2qyh5gU7BcumToaQkkTQkiiqKmhEAZyfNMKMqXhkcLEQUuZL",
  "key25": "3T6BDg8jf7Za1rjMwcBr8y7E2ezBHs4HCT8gpx9RcgvrPJqTVtnmYZcWhkSGAr93NaUYs1o1pEZecSgqqeHy3vtr",
  "key26": "3kSYhfHjQVM5MyF4vYtAmdyFpuqxsf4hVYK25msMMkes2ZFzEKtYnTQA8dkfRuVziq5j7CHCegZ9eUu24aDKcPXR",
  "key27": "2kjhqCUN1odWXZc2ZgBEzFByXCXNsqebr34My79nbqktVFH2xJUvBjUL2BSAjgrkvWCM1FhSuTN8xfhBSPSVcJ7r",
  "key28": "4142xD2RRe32fPFhR8y4jp5HjdaetQzLRw6oFzxAGVigGXbyhA8PTnDAQbtqxQeMU8HYcxC23Kv8UreYfX4bCKbt",
  "key29": "3ABaDWaidHpuNRGCBAyiuVd86VkAQW3h9wxPqBLB1g2nHgKXQMn1kHeGCJ1ruqUSBrjoRx3oqKKUYRiBD42juuXu",
  "key30": "2eUgjBoBKCtLRUa3bA6m8qdzRNcrTtJ7tWBfrK68wCXNPeVPFKcukEWBKW2WKCQbMJrNSXvRwPnkKTAmaM8xKzCJ",
  "key31": "3GxGmPLwAosHg3DsMbsy2qeeiraWBsktcY8AweYUhgGU3yba2mEEpj8hXDb88PY9XyJj7pUhS5xNkdbzNa9asSr5",
  "key32": "3YpDgnidszE3F8FktfLT7KjEYQDiAk7apbB5xqxDsjLX3v27kW7ZfY17DuBZRQdZiJNVTE5iMZNcYjxf2RT7Zd8u",
  "key33": "2sGwuWzpbrgx3Lb8KaTBpxsUJza5q5vS92m3YYyR55Px1FxKJfAqtgNE3uquzp7reuA2vuiuop8sRfPmj1d3sK7k",
  "key34": "YeSQVoyRyxumwFZvSA3RymfdKWRDcoUYcxPoHNTf4vAyQ7kv2tqoMEr9GbnxAWCux75WVeReX1AMkxKz9QQ8e1j",
  "key35": "SkCG1xg5egED85uw3fqF61WRC1vg3fN91E6cr1Hrb4vfjYM9NFMKYTPKQBgzx3GvN6sNAzBrnHCb7a6VskKUN9p",
  "key36": "4QJtpduZZxJVbyJp8Pi9LaiCPTEjRxH3P9dE7wJ5FuG4K8rTMqcq3EQpScftnB9MnxF61MyHQ6MhRduwv9HyCY8L",
  "key37": "4WTK46xFMvmiWaEpBTL3JSqghruRTpT2zTxUouJ64QxYDrj21ZutxmsotfpJn9DNgJLc4im6eJKM3soVNvMnwZGf",
  "key38": "5zQydLyr5f45vTSLqS4jXRug8skz6VTMaJ2M1gtHTFZtz9dr8p6tWL5br7bQ2zUyzeUgf6HXLtPgtg8MBH4Rhmi9",
  "key39": "4feX3kzJqCrJpBKJrJCGTKhohrArC625LNK1RGb6vYBFF9FkjwinHxeJHjLLkQiPCwGa8UwqwV6m3TsfGiqbViRo",
  "key40": "3Hga7vYooW29CmfXbQ4AfvnAzpg2Q3PuQinKGnJePq9jmC72q6pQNxT34XK123TeqiRfxw492f4bruRFq982F8R6",
  "key41": "3mBoGzWiopsXqaLDNrw1g2KMEc9sgweqwhCDKQHcBDCFjZo5mwVru9BV9WcQnov5SJphbfbvyUZCy7is9ixSy5KD",
  "key42": "3Kw7Dvn8QFRdyEkeYHxWGVSZq7oW8ctp564iCHWNh8i2PCTFWVg4xjYQ2rueQjTKjNDfTUkzGYnoeVRNdmXGNP4R"
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
