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
    "5er7D7tXWVb35sVbkVcwPwGEykjZ3PqfZNmRFu6oCynNTvBtSi8Ww3mdvN8ubfBNuYEyCxeRG51bAes8M1vyvFjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iWZYf1eNaWJdnWoaQyYjguxiV2db2YQpH2dr8X2AFMriFM3VYBijZSyd12roWxk28WqRJh8hhB3PgnuJbKCsLoM",
  "key1": "4PAGrYEDnRgr9NouMjjJzkKQiZEDsP7TL3dipHjSQ69XLJhmabK1QT4ATGZHPtxHiBBnw311FvoVbZ3YjMZ8Hj9w",
  "key2": "hbCEJiCudDsqxR9RhvKJrAgC4EwMzvNcubWuUQuq184r2z6XLz4M2bfEa6Xrp5HREM6d4GNXxvfiDFwLjNyr8AU",
  "key3": "4YkQscC8FuJJnfY2U4ce5mtLetLPKNTGikJAn73xP9s3gmMdJbQt3WcEWCjTbrCXJzZVtv4vLdrauizq4wwVMrPQ",
  "key4": "2Wt1BDTe2RxFzshWZEZq9uRg7C4fsbKvKrZqGyfa5iyL9UdBSDzobcKHzHYUVTft2HwonDojyANksACnL4sVNDa",
  "key5": "3SaQJJBBJQCGUzCgM4MB47dmsJsdzyvZ1GC7S2LRa9gnVujaGy9pquk3eKuM8v3jdssDkD3ncwYn3WdX2Ta1PNQY",
  "key6": "3bg6mkriRGPbjSKE9TJyvfN5FPhQqNfGW8e3Avp1MRLRRcPKxJhtydodSjWg3Gf1t47EqyqVfB2scWp5ax1e2MTk",
  "key7": "LJsJgiNmX2gH7GvLW9q16ciSVFJ7an2WmFWtpCed72SDGUegMdyvGANCcvzVF7vZiFfJfjvvekkgsXNZPBdZrxT",
  "key8": "HKXzRh2JTdc271Fpi4qrKUU9cJhQo6SojZT2M1JbhQqn8vWUKiKazbiSfEn5hVaHr74b1YPvaX9PiCFzyF92XSX",
  "key9": "2aGi3r38FJEryjjEYV8SuboooiPARSeHCHzuZGe3SAsU8G8HRryRkYKpqZa3LFEwucrS9JQBXWPirKD59ULrqRPm",
  "key10": "3ex4gnJe4n6GrNjT9qvR35qCH3bF9UJygmkhrUqP79YZvaButA4F2fQ1BJJ5vxuRczM9WPpKGeef1sE2tLsw3nPY",
  "key11": "3NT64LyJqquQ22EtN9t7FS4W63tSE5aiJGgnLRcznWC6MDmS5rGLsj1NPfQh8HiAJsDJkBCuzZwu3yuA9wDnfzzT",
  "key12": "4Jy4ksBYRRFcq3bJDymB8wngjPsQe5v8ghhS8pyPuBoMYyCMvdFZRCbYtPEbRbwNPifXt3imtzdEJ2HjWTDg5ooJ",
  "key13": "4kAYoSrEcFDr8izub3YQvEZhandjmYnc3pcqXXie2NkHP3swApdswmsPnD8C7JzFRuyeWkbKj7D5XkAzDSmRjoix",
  "key14": "W7FPrUfatMmPueQcqAsfuk378keTyMcmVcxudhBvN1rbQ2gx3akHxBXxh7bcmanQXiDbcCrGMZnBnukfPKRVA1J",
  "key15": "5jGGM7A8QBwdNR2yiAztHvyEkKJUboCjKJfeCV7KnsgAsyouB7CLkCD4xqcJqoovdd1PucsGzTRWabzCEparwFYm",
  "key16": "43FzikFcWgz2Ff2mA1oNRVju9cuWyfkVTFGzgPA1TKVMrfxAwwMeYQVVXDNFMf61J8FoCeBbZAFHtejTooj6qTb3",
  "key17": "V26ZZMgSDkioNWjbwWBjrHy2VAVoNMfQvYLWrhxnVMaZPMBzFfGko75PmoTKKwMoy6WBYGGknbJeRFWeQLwbVKF",
  "key18": "2NG1vRKb8cpQFM5beoMmLDDxVBcYC6PDFSQejV6zvRxFFRoHidRSAL6JVm3xePtb4nfEfdJrtxj2acLhYQzGt3za",
  "key19": "3CGSU96AVX7HC9kUGfiuw8Gwyjh7Uptu9bjMGeDoGrpUTu5QDzZ4U2ASkPPkHB33hCYs4UTazu7Ec4iNGXGQ626F",
  "key20": "4FeW8ZUjg1BwrWdkhNziqRJWoKwHsBh3iqjmkmmyTvDM1vLjtbp7XTqzcfuSKq5C5c27Bj7Rd7pHQhcuyQBPtERA",
  "key21": "ojvBnZ1QqoCB8JpmiwYoXsgxzXDrkzDT1D2sHFFWimqqdniYWCGVUt7vXBZZ3EzJ3knVG1m1GjLL5vWyF4e4zKc",
  "key22": "5dG8ewZNsa2u1mHf7QnaTahgT4aQnsqNxK6YARJVKo3pGDBeJ8ghcqUZrz764JRfq8PVwT8MEudoHFiSeVy58m9L",
  "key23": "4hM2p2sng4HRwyxeVjTWdoNmk2tfjH26VG4jn2yBsZkUep5wtCdBgVX8BxE4YPCnjK3zk9HH9NTjjviDb1QG3o88",
  "key24": "Fexf3Sx6d28hQAJwEAJQ4iY6NjnGwQHtWhWaqjpjSxBEB698azdcGBVHqK2FcYYADYT7WzNVn7JuTfCiWLWbjbm",
  "key25": "38A9v9rSpSxZMF4NJzJZjr5XfCvJ4reH7tQEhHdRxobcawxcsonZZDsUUUx4WDRwjQV7m8XG8aN8XjZU1jvquXgk",
  "key26": "YpK9KNBMGMAuX5toSNhu9EcrZ33TvdRS18CkurYrio2PejEg8nincagPdbee3SMXMnu1fcry4Z8HiXyn67zpC2r",
  "key27": "31iEsZMtS1uqwrKcSCRbpUPmsvDJaF2DXKZvmtrukwu96ByJFpB76QS57nFddj6qxHuPKDmW9rWqyNmHjuNQwhGt",
  "key28": "5EqLnxi2U3wrofUjQKfj2dV8CXmmEdCKh2P32QJuWoB3S31pLegSCTsegPqudcexZftxwrFZ5PixLrc5WHnauAt7",
  "key29": "5QZ87aMWwLzqUahNo3RnDma3MspZQ4yoTmsvHy6Erixtz6RNrnoD3QC4SoqX8xnyGuL9Soa7eLt7KQtG3eR5MEFm",
  "key30": "3XDcNJMAE3Cy2WDrixpHoXBfNYgXfMKV2HrbXHn3FP7Zi87ftH8eGujeVxHQiNxZ84n5EagHNpMykUeixHLswnzh",
  "key31": "3q8HZoBfHfNiHmjF3tKSoDDgXH62Puk71pNYSvpAmxjMRK5ePmWWcrXv3E2YjeWa6cWeFwMmcUzCvxyRRBDqgSgi",
  "key32": "24r8kTZKy7XMHPEqQGs8KChR9Gq7PSXN2ZwJE8RbA2HwHT3ui4698K2wTa1Xn1UpVth4PtzYUQendcvYmyK1Sz7o",
  "key33": "3iCLT7N94czF7czK9MmRxaErgB5rE3H6Pf1LtLgw5MqVW8rxnH3gvTB3C6rWXYg1pfAgZrXa1TYia3qX7H7xU8eH",
  "key34": "3pV89bMxNSjwdcDbtfrGTBq1MQ3oUH1MKjodN9MsCXWSXBAJMfAXHCLo4UpZe4xXakX3qhq5NQNk6KAzW1CuHucX",
  "key35": "3djqD8mB8YXKWPCtkV5pAFMa79EMkBVF67CPU6un9Nu9nJMkjwMewrTKDDGJBUhgjdPwYhzH9Ufxp6FVkBKc6U9J",
  "key36": "3UyHwz6PymLrkgjeZXHwqH8hwafpKVupWsiF33c25BgTg5ZRmdnZ6SxM9zjzH7KEoPGgYWCjpd2mKqmfXxnhoHDi"
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
