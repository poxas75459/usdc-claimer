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
    "rD7N68iA8Nc6N5D9zfAnzkxEaD9379ML65gx5WQBGLFF2QfU9sJQmvfkrnYrdfTrvd4M77sXoXTbVp8owjkkQX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T2FBBW8EhVhLkS6M7gmEtG5cVKhWTw8mTm9XffZQEKUnMthjRaZwtZUhHVYfZT5jChXdbXcDwfh3zNwopSfGpN2",
  "key1": "2AGKrUnCXgEK22TuDyz8vBr4dKigY3VrXemvJ9SYFuZcRjgB8qToFoftFcQftWGj7tPGrJoWqSEwDzZmuoXte7RX",
  "key2": "5sGyBkeU2Wdky4BUPLKzAAkmBuahmSQ4qd4mRXyHHvW6RBM3ookZJ4brMsq2q3UwuZcP4pi1pwDG6Ci5hTJxBLMD",
  "key3": "3rM4mfY8n38Z8wCTLMrJab3haP1vSfDxKBMTLuo5UW9ao6KACAZKumGonQgZhvesTcMnkHSnvnbuEqtGkm6XdCH5",
  "key4": "jmvHvAYzfRtFc9eqza9MVdg46BKxndUgUnvEZTHbcR9ahgaWLe4FaCvZJxBKZSVDBkYf3cFaiUYGW5nqpSzejHN",
  "key5": "4SD66Mmof9gRZhMKMip9z4a2x4ATkDsT5AxYZorQkj733pQp9Szq5HG6wgdE3KNiS5L5z3c1GXLnormitnUcjxqh",
  "key6": "4QU5EcPmMWYVNbhXYoHbLYX9k9Cq5BRNGeG1Da6tHVuyPnGGF6E4suo26g59gp4ETaHgEo6fJyS4KsgfaSYKxvRb",
  "key7": "5vmtxax8JoUtKNDEhnFm4RPzhgPv5irwtHabUV4SqAg6tZVkAdEXj3K15hA2BqEyMeHjWDoCMETNzWpLj6jiKzfM",
  "key8": "SzkT9Rfv4xg3wsEQBPKz4PARjtUX7iKs8VdKBCrkMg5frRWeovfrfZNPxrPtZ7eD5pMuVZ5bJET7y31mSC82bES",
  "key9": "3KdtrJcMd6DLs1TEnZ2A2eNoda2qgKVGPJZoGopJfe1iV5ETHWZrtTUkyorc24qMqLNSxyEkwwvBc1da8guJPqJq",
  "key10": "57x3vJHiJu4cSAYXouBMwBSeqD7yyjHMJ6LLPGWPzDqaGKL3LNcdib8TNDjTtTUehTTr471u5FyWq3XL3r4G6urf",
  "key11": "4GoGcYtXpKYSh1GcfNm6hgEdDM8cwjRrTqJUe2HJkC6mAR6NUZTDPzQnjuu3BtqSJgzN9nVcpSaGJbTC7rx7JnRQ",
  "key12": "3SYpWUZ5nFeJNiwRAwLBoS5iyQEYjmLzxKmiKwLTUmmwFMd8HQuFbTnQym9QKudRe9tFoH7eg5Uo6MtBtsrK1ybE",
  "key13": "5HU1YqV4oib4LvuccdR6JSEGdqGBFGVXwW3KoDjLziWQGmHiazSxTeopbq8tsheYoNiA2HGSnxGroNnX8UyM8SfS",
  "key14": "EZNG1mNEjoYATxr8puFyHksEt6Z7bqmc79D1pN469tjsCBNJdmNd9oZ4hSv8RFYvSHP2grLQWCzGWX8mvzBhDMx",
  "key15": "63sGpjGcvKT1uqJVEm9Xc5rRJC7U9ZSJG6KxTLeh2WvLWU6EyTYKLirzSFdrfHFSadLFCoeUMpsLJL4ZGstATRn2",
  "key16": "4D6t846Db3UXGxNHZ5UCY82mPpaEJwbz4x2CThi4RPouec2fs73tNdoZVYTarJ1ba9qVuiQ9jwFwQRGtDzEjFXBV",
  "key17": "4GZvgnVf66ki68jfZrzWxLT5StjgmJanmcNSnJo6AT6x4XbzKhCwrdr3nRbVbaLt52mhCKbHKaT7iQR3WXBE8T86",
  "key18": "43FVRE9EjLQiTzHyn8wEcVUsfg9WQZDQnioFXg96dZqS6qdTFeicFyWw3PJWx4ivq9MFv8hMDDHxh6ijgKe5t5zV",
  "key19": "4ZZxcmwYUYj96ze9tprsDQGCJUtXYBLVDreu7y2L1j15f1cYwo5XfUgtb5LHu9hfSGLtJ3YK2zdLv2xyEXgn3FUn",
  "key20": "UBFdk8TSWGpkGSAHjFvQZdo42TtMeBkT57cCfBiTFMXy7rYekTWFvmywD938uBq24Rm7DuznxCpyhho5bQ2XVaP",
  "key21": "2mUFgnty8nRx5HVFa5vuXBG8VASBTGisA5CNVYPdoTqb1NfCUYF2BiEe23oznrJL2UvXtu6Y6LwxeTaSWBnZxrcS",
  "key22": "5sKYEfsogLuci214FT6FgEE761biLaYprFpuX35oZpnzx8pRqtiQwovGnLKnmvuHxrGAPgvLRbBWSgzzXmG3CyQ8",
  "key23": "5T46YFtueA1TWYsDVrckxn7msb4FiiU7eHikqsHTwCtPfkjqGL2AchUZoYTnaAeJzyHyaH2eXwQDcuikGmFAj5iH",
  "key24": "42vGvoetC1GHwimLmGh2hYDbWsSWgAYCQKNHh9BhYiHMWnNi54zu45zGJBkk25eQZiimEJH3CfqB1MuaLYuwhJhG",
  "key25": "3vSTmbePvenKi4yBH962DRES6aiWm3bMyHbJCE39mbN6ndM4iwiczMYNDJF8dUkDjkHSU8cU2sdAFUxcxakKQooa",
  "key26": "2RLFHVqe48KxJ7KJodExNzfo81T2SVPWAMWwHcnMCYdN2gphBBfE9zmBtwWcywaLbP2hyXUdwfMQnvo5kquGp1dU",
  "key27": "57V5iHYxn9hH3qT7o4BSWCQGr5NkdC1JvEb4DtUeB2oJVF6FkpqYaj3DdvETkj8EiPZLbyxKAtXiQ9C4ohPgJ3Db",
  "key28": "63RE5XUS7rVHXyKudHnCefV3WPQoEY8ipb2VGNtKtSHsAgX69C28F9N873rojuZDceRTjXvzGcZGyCnhaM7USqaR",
  "key29": "2q1FWLpZE8B3eqy3ScVYYQtiG7aSGXkQJbXW8mA3P1ctHmrqChAqMXtPbx9JdncFyADQAdUNcntYuBYbQBooHLDh",
  "key30": "EA19uoSmZZsZCpAaofqB9x5fSBjqBwqvK2qirVLSSBGG3z3dBefpHe2ooeUzD93WEuY8hyqrPqNoxog1FJ7Umry",
  "key31": "59UNc5JExmRmxzK3sPyUQiVCfazTVWwN458DAJb4HiZ86MtBncCqu138B3GCH6TpfUstDavDcvodNV9STcTMK4UN",
  "key32": "61nQYpRPwSGPqQB7kUBeEqLmj5HmBQ4D8d8iX8uFsy1NxVGJBEXhYvQ2hsGBLstUaJaFkbnXzT1U7F8kFJothqMP",
  "key33": "jke8n1df4JKbQtvHDRviUVTXjxay7juUrwYUvEpwfBpNjER9JNUYvf7UpUXNhgM5NwUF5KhdPmBjk5HnVZ8WoKs",
  "key34": "4aAmUMFjBbtsovA22jXDDXh8cvzauXfAXNGCxGo8CGqkxMGUbT6MXfA3fbNBUZ97jVkccmEpiRP2jv4m3GEGcGE",
  "key35": "3BEhefhoQz1dfr9i34NZDCYuEL3hNim9bx9SKrskbb9dwhYJFir4wF27t5rQKMBhMrx95TmKgBbXQ9cXfd33GBxi",
  "key36": "2z4JKzQ1bkVgu7CdDrREVCS5kHxar1vRgSAssutBUrVVP1PSjmXr3Mui2opq4BUijGxDMudfGFoFVW8e8U7i3SX8",
  "key37": "5UbzLVrAUe7NeLQAbLDa17bxzsWpH6kcdw8RS6oDdUq56DwiK9v1oh68HNnXQoLnSYaKgFjve5q3AecePaKG7o1H",
  "key38": "3PnTwySc3HMtz1hx21oAnZGxbKyjvrJDtm2id6TJ8S9t8yfdGuLTMRWL2dUUoCb2J2V54Ao5TrkiHkQKtAuzuhvx",
  "key39": "5EJuZ1sewMS5yCkPF2D3EPqpFKp2UERcGSLmWbscGR77bNNYies1aNqvhnkKWpK1jE8oXEHmm5aAjJtREnVd7v4Y",
  "key40": "8FCKy8mcCiK878a1JYmcoThLwYYHakt3K2rR5vbW2WMvViXdqZkB5zi3xZqBGstSUqfY8GnXv3x33sMoVtkNW1r",
  "key41": "4K7yECpskaq2BPHEyaD2zADCJRhSuU5rCRjcv1dnbdZWPqtBGuQwzDXLFwPfoZKnWs5oueUCcwEDGsBAUAcYmW8S",
  "key42": "5G3BCyERVZA3pRmLgsSNGxxPCrmc3p2qb3LMFSiDikLMWNXsadBtVzgimuVXcu8frjtDaYhjoJNb4hhNuBgT2xDC",
  "key43": "48Rh5CGYZPCYEdhUWiFcuw4djjJWCrSWJxWK51iaCmzCK4Mb4hXARmCQTezs9zoey61Kckeh2XrHJhKh8qi88vaj",
  "key44": "5ZfLeUn4nBHzZTZGYDYuAkKsiUETyzeoyqgar4v9xyyauhEQb2GGh8zQDP3nQRjMr7AkuhQXyVjSg45rBiUgkeGQ",
  "key45": "465ip8pWy9HvzCVgWDJGALndvozzfYZArEyEB4N1MkscoyNjXkvaJxyM8XZzAVpq2sUS1bd5CWJhrBQicGoZBGsT",
  "key46": "4wGhREXPpd8gmvA5zxUH6zoW8P2EsdPGJzz41FVFAJJPNT13iPKVuMVM29MbsxGs2U5hRZJLTu7HcDa1ViXB4sX3"
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
