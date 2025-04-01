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
    "2UkMhJp1YZjh9xZu6GBJZSCntYKe1GM4dwfjpsyN4F6YmRCuYRucbgak4REt9vvtfopWxHkkT54Eb38geFpgjJsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37KQGWXUSmT2VyyfuB4TH6hSnzgz1WoW7xzMmbDagQMZCWzmC7P9NMcwYrC6xwNguCpm2K6noaTf2MfHo2C4z9DM",
  "key1": "2YeKw1h9VGyMMqH8x8uvuUfxeenB4QCe7M8kzX8J6DriACq4hxhDioadcdNa7pVLR1qVfvcoCSCEMandgvaZ28sA",
  "key2": "337uEfcTPqbvQ3w6qo9ChzspUxY9RAF4CNgTi1wPu7PPJwRZiiipEN8Z9y5iYPVN9QwmLSiEidrn3CRriX3SVGBh",
  "key3": "5fo2XJffSq6pntk5nE8puaTcYGBqZSuJZdVz1xkkW6wJamFCyFiVhPqK5MSv3kUKiFiYh5MjRvQHBs1objhBdDB8",
  "key4": "abwbqK5zu3drZn3FoiGycEZeRKVbHrGevxffoQZSuP6cg96ayZrdqU2ncPJ3trivhYRd8pH7JL3w8YoTTit2MCD",
  "key5": "dCqkevb7uRzYF6kqi3JV7iuQNPLtnSWUMPCyiBQCbtkauPuDUvWFmwnhPLGpJfc4gsu1ouKgV2k6rpvUhPViJhW",
  "key6": "3EL9VGUutCN46oqDNSzg9U3GpexYA9GEuNNJsWNoMDfbG4YgqzrfaVSJSz4vT8LEexgx23vwqg3AoR4pKsFk63aV",
  "key7": "54Ggi44byR4ZprEQVCVMAqte2PFFM1T6s3PKixuEBJaDdWzVdX4idsMNoZy8FM4r3riiCzbvX7zstRFm9yVeSmtS",
  "key8": "5X4EUqTP3xfge4AJMcWRhp4hCnruRDJDzbrqccqijAn7yv5t3WAWcTTiM9U93NsyVVAbbnm4xP72t8hdmAcXVqmn",
  "key9": "2XzoeSKzPpdaVeJfSQ6NF1uh9ZajkpyJsHGwi9mCoL93gDi4DoTnRjjiwZ927i4mi1fvttGtoaqXNeyob4VE5aA",
  "key10": "4SUbhjps6VcoRhd4D3PFM4fuqybfNxSK3UhYNswhSXRFZ5SNDKiZctUmmmFpZMcMu7YQDYKBrwAmFsVuRToHXk24",
  "key11": "4crXnEifY8tJ5iUaUBPsTjo6pBTnxX8pZFX1zuGMAi6oaQ7sYGVkbBMctRcXAKm2MkFhqohe8eA8PpuiSNrZcvia",
  "key12": "5ApvBnSgVmwhRmwTnVydhKFjwAD2GTkUWVbqDHvxDg73tk1o3njmpwwg5obEYnLJ6YfrE3GzXrqu81CxAGr2duns",
  "key13": "4tjWxpk2SvUeoUYbTW7Hn1ewTjnExsXXEFHpNKVhDZcN9EF7oCbPdcVANLzzPvdwSmYLLHFyhiCbnqZkKW8VbpTc",
  "key14": "3LgGzXNPAbkB69UBM1VrJDwmYehtBtv9Eu33ZZsBvgM3daVKNxRENqXZM9VgdmWPiNYBje2YLXLs62PytDoF7TjV",
  "key15": "4TDzCmFi7yFsFcvUchwjPQn1rF5QNLCwRqmryztFoousDTt6y1eEnXwVWXUc43dSJray29LKuUGaWdSsSXxQymXP",
  "key16": "32TbzcpCQKDdzrMJ2CW2LqLDTvdyfbsGmLf8G5iniy4rYTYB5PArCs8hwKyEu9dH8Dh4A335zHFjVKbgyGR7wZKy",
  "key17": "nuYwJAT1WVJSXf1TXdFguMLvbHKsLePfPoYQL7gA5CKfdaosPq8DNVFR3zr7wth4bw7fUcfteh6EGaxxGmWw63y",
  "key18": "38yTrrhYQpJe7sEpgQhQfHQuqj2H5oLiwiGqHc9AiDQJRkHyifoKGp57gsNa1ryhXcEXeWPdtg2qmrncBbsbEArD",
  "key19": "5H77GeCYfeN55iSj4QhUVZtANcnKXdtUVgodSX9b7veEFVnvGXnNFiymvPRSArYFqEuHvfApKZKav9ZKY8hMVa1S",
  "key20": "4aKQtT5fmL6sS6jUQC9Eg5sXpXMqpFzbQEUDCraoKUGJqyMhupDm6uuzd6SuK4uMAQu7KKkJcymbVvoNvFNT1iJM",
  "key21": "3arwwJ7wiKm3U3QTxtSFTfKLWPfv4i2i8xLETKY2uWmshXPQuCAJZKHSNLfJUiWn8kxrdZsSecgXduGmtNqiB7og",
  "key22": "akUvTEntr33D44bC4R8VuJwy66FXinA2MSWQ48KSF51BqmuTPrNa4jgYNMA5RpioL1uDE6BkwaDMWNtfMAEpj8P",
  "key23": "3iT7XV82T9uQCUhTGi1WCrByUd5WnUURz3SwfSEDt7QoZZDugNLERvmHuqY7Tur4Nic1mqEieGQWYBxUNjAgWh8K",
  "key24": "35N2aDZ5q3LHir77GvVQsQzFEVSsoVw8DRvQfY14Nn5z86TxtTJUDdGQoxbThojjZQz8AzCiGMstH72mnCnS5wwb",
  "key25": "2Lkov2zVkbpFrjHrbCjUfeupJuFRWd2gBV5aapDYwDmJ4krzBwXCcFqQoArr2KCVwQU4Y8NkcoXDVvWAV83aNH4x",
  "key26": "62ejC5Rq1ewG7GB8t8so1TVCeqqRVGZAdqQopStYYj7nTBuZfuDzunbB6mN4eGTUMzR3FVMrdhQmDJE7EpH4y84o",
  "key27": "BF4u1nzZXcX4XY5FEi7gns6KDugfdtzzuTkQhK7d8VGY4uuALGhuR14xtVGcRzmgLqHqN62164aMZ3CFURaz7Ss",
  "key28": "47PPrHLdbw7rdK5uzCY15SfL2XLH5kC62m3BXVhpp1m8VwesJ7eDXFadjeGyZCvBCZbLtSrkkffCVisp8rYaDRqx",
  "key29": "5WDF9F2WitCdnNDcVgWUCmjuj3cVMcEG24Qt4EcnJ3pH9B9Vh9aZfD3vYj2wFFi6MpDRcJ2Zd1K9AeXznK6bdPda",
  "key30": "4LXjdPgTRmswmwCqDGkcR6w8vJXhnchL6aPLxK1A2vS7yKi5QuBRkY562Vek2jmj7oh4FEfjLSCvPuiXt8CfGBou",
  "key31": "51XavprvyRvsW8b37qz1TTtoeMmA43BiJ1vA4Yer1RSs3xrywMNeRZBKz6Ax8cVeJh6G8ocEHYEbpDFaeWiV9DK5",
  "key32": "2xpHDZNscxzZ34eN1Kt5opKFMxMEjnXm3zAprdhTy76SGCdB2UDLDm5KKBFhq63XhfA6zEsi8p8uKUaiKVsvq2sT",
  "key33": "2DwjVKuNGihf9gaymMe1ECBhDCdG24Wiuw3jN6s83u8hg3KpSd5UYrdCZP89A55hkCk4B8YCryhvrouhKWUTJcHw",
  "key34": "3faEopFKPcsbuKHcZtGZGDwugE9mTgz2h9uHMm7pRYamXtwAhkehU6xWtGkHwbXMCZ4FZK4MXN3ShV9BWX85VzQ5",
  "key35": "259RH9jxaKQhpeUYjgmiWz53z2jp37RoVHx89bU443a99nvRqi9Uvk7n6zPW1PtuMrJcEX4NNqgKx9ha6FwNfxiY",
  "key36": "3ccJKAghSXJwzobmggayBjLDT8hBADYgvKb5TZD8ZCbnnQTSQjPZo6wKHTLMM21wvDN34UL2DPBjas6TkJ5WHky",
  "key37": "3z2x1iB1LouCkuZPbv95AXHDDE4kxVLeqtPY5LbTiqbB8UisCNC6Tv9zFyVjnKNTXPrByaChBUmkUZADAYiVRV9",
  "key38": "4i4aBbxR85Uo7d8Xkydqn8Mzi9vZzmgmVjMtJ3nigaZ8XbjT2aZDF7MAwm5VZrbpYPeSkknb3Rmf5dpc3QKc7BKS",
  "key39": "5nGvR7SVjhVukSXg7h3Ue8PVVdmZHGDtpDvkM56LmxcWcmyP6pMCxQkaXkt6KUtutygchrudVLZMKJq8gFH35kRN",
  "key40": "3RzWgxjFY8AHVVd7QAhLtREZZnrgfrH4EE1BYC3kfWrfajBYwd6BNbNJEvAXuMgQz2vXLfiYSUFWwmnnW1oYFLAU",
  "key41": "5FPjEn8VxkGRJXUpBVDgCrZ9i69KERqzo2P6wD9cfqVc7FJgfda14vqGmQhPKZudNPTG7NtjSt1bcZKFCwzcGyPi",
  "key42": "fk8SDa31iKwyKe7RA87p7db3vAJfMS3DxEUQPxQWA9hxTkjVMJ9jLvo7kw8ZxZ9dWLwMwPV8Ld9bXUFF5j9buEb",
  "key43": "L3c7DFzmT3nGfyBU2ujUfLoQ441QphFG7hs7AMDHsB2nc9NWdRgNNAwWL22kMCG8k1EykVGn4n2TRDMBTaHPeuo",
  "key44": "5SwcgUfuAhYFFk4iYRQrPRHEjckXmqgoPjj5PK8oPpkHUkYrg6yQfmr4SZQTp1ePGLFJnQL3Y12c8EptNQKAbKtC",
  "key45": "2wXn325BQuEpFXvXuHVQjfFW4zC1rhCRrXEePcn9qwLvzJzHHW6iyHcbf3Gsd7JocPUR8VTb5SjrkKkBYefjKrnM",
  "key46": "5sEvRMoWtnwnQDqnpKuR8nEqBWzKxpNW1x4TaTq5kEgwDMawbWtwAxV8So1HvKWHLhm8KAXa7oPpJ79M7kCV1CAA"
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
