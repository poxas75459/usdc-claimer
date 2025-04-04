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
    "2nVi5mJqxMmdouQ3ytTM3NG1p4JM3aNw1RGUMGuNAwDfG2se91Nrfx6pUBmNW2oiD6Nfz46GhUDgzEFtTmu6CstZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LVE4perLwdPKzPbYAWp7xo7tWKvQPuFKPn4x8jQSDyhf3wbSLLnoKJD6nLhQ6uvop5AvBd31qGBpbSoMEwkgrLM",
  "key1": "3ZoxaSyoEwrT98YY75Zh3hfhnsMSxsV8DMWk7Ere5BbQcoMJb5X1tc3ZsudeADk9BhUZw3h5961rHFBdD4wpfF6S",
  "key2": "5cpRWMrnoKFzSZHd9fvfuMuECek92yjgv925y9BXdC3nTZ6F8wmKrEkPGe4Ri5LHFtYs9EnrFNgqM8ERRqeTBFHw",
  "key3": "5wp5GHvuVAKVmcQznHDgRH4W8fThVSs2gVGt4fDp7arZ1xiAL846FZsZdaG2Rz9i96a84XC2kUMgATbf7VCbQFHs",
  "key4": "2NSbCx734NHS6QuVAotc7RqWnhhdu3nKWURD4kdBK84ApdBLcA2FCvZDLjpMBgBYGyumUE3AUqmWyskHirz77aYN",
  "key5": "DjPYFPksGexReguCN9EZRNso8urC9jtFQBv84C5gKTFnHBS8NqpwSjayYbtdoQGt5YKC9o6FuzboUciPtgpPUcK",
  "key6": "4STvZj6cwLTvBs7raPnpPxNooYmFrhHqracfKtqLJZc7t8MGH7Rzns7NFscHAPUDv9UnT3UJep5gjHv5MxgaZkex",
  "key7": "5bhnnSYej3YaJvf4Rp3n5L7GSR6UEgARiGyTywSfPdvjfEPVYA1hXiqq2R6ou7HuGHS1E1psurojU8ydMVpe5XwE",
  "key8": "24uAE57JR6vQGgYmbMNEHzyVcGRvMCq8NzUuvqzVFYtFLpkMu6hVkkMULhdFSaseSveL5r831323Cg8dd51Fxusi",
  "key9": "5BZU9eTYmK4yZ64Uu6LmYhujuWA3suCM6RMxM5nfPK8Cxgj81MZJQdsfziPGH13Lp7ae21TWwzv16iqKNTuaMxfc",
  "key10": "4mgQ5pjMdkdeHaW4hqVivy71PyYt85pCcF7g57mxK9CmwEDJNikt3nNrtWniS5BzEsXvmmj3oT35ftinBpJ85cxk",
  "key11": "25Sq9S3wBhdZF3uGheVeVTJz6UmV6tRLXP5grHaPtxcVXoryuPVB2GTWEKvqbvDEsM2jQjcyRid7WADrvsjCMeCC",
  "key12": "4nDKxyL535sGgXLqeY68U28wdC6wd4YTTUypoPkvG9cDLtGjL7kyfwUXHGWZDcsGqqGip9Gg8qpgqgbDMzVFzVf7",
  "key13": "4YRhrgJWqZ1TUWhRphbqWKueatrJcXR36Q44JpqJokDZ2xxzJpXUTsTGXz8swvrEbcvYueV5EcCMpBaSskfKJhyh",
  "key14": "4HJReRcJViALrXvL8Rzd1ZefJtj4Si8L7DR3WTrRZbaB5e18tjEQwFq9L5QrJNwxYGJsfJbuKvGH6xaZeVKmPwK7",
  "key15": "2e7yg37XwwxBRZNwLJbe9ad1kje39YgosVC6Hca9zVgEZo4niDVxtWRLBGJZTi74uPAYWzZxLmteieYWg3TN8Hiv",
  "key16": "2zYFCNYuXvvhwHq4YVojpUksNmqsBo2dNXRLL677B8VfSJHUjggqiKVHtKGJLEdGtDuHVvEC3zQH7UypmpJsrWb9",
  "key17": "2APdgYYvNJ41FveCiwKRfKHxa9G1osdKcMkQquFdbRuwKc3cvJHJjTxDX1QEopnBjxE8iDixkCK9uZWvZLcy5Jbm",
  "key18": "5TFbaiWHnSD7VVEKc3LNqBePTbggrsHTEGrwsz3Hujs8WZB3AZRpFgLYQfMh61cBZi6FYkTvUfobfWGVj2xuxaqZ",
  "key19": "4tX1WYMnM1qQBY1w3m7qTJJV4VnwPHbPrZw5JLtPHPATzHA2X42EDKSb6Pqph24KkFWhz2v5Cwiej6iwtyt5LdXb",
  "key20": "4UZ4VTCJ7zpTRTQWn7U8AH972HcGuN9JaKQV1j1SJaSAC4WJXDnBhYZtgHHY5Zk48vVqiv7NuWYDArK1QsQudDME",
  "key21": "3G6sR8J28wQNLSUVsqyGKg2qVeEjdV4HeTWnGxNofzUzzSWDVzaXp6Nr9gAMiFzuxwLnbggypUbmfz3MueMP3nVV",
  "key22": "3mK8JdgwFTmtdPzLMa9a5S3u7e179yTk6Er38bSXiPpfMcnw6tr2pEmoVmjeEKniBohHr7EUnDfL4r93BUUfZt5n",
  "key23": "3t9G25ZdAh7Mwqc3GWE8MGtxJb4nQPm3SSV8QKmNmEMjZ2hpsZNzzTbepNYwR43uxcWS6xZC1qdBtwTTxt7a81YH",
  "key24": "4BNofcPLTaPfTSFkkdioLYArK9srDDsTJPNTLPuRCM17S9jfTKFpcaSckkLVhx1FDKMaCVTeFckacmysv9Z1wTzn",
  "key25": "3ZUCFjsDftggVXgmDUAXqagfYBUxizKjqL1Y2kyTpvmwiXgVFbbVnqJz4UF4sjpKrLVKY64vy61qF7agENw9BuGA",
  "key26": "4hCK6LJwnBdJ47ZEsKh5YjjDqnGwDvWFBTUtx6AejZRMn86KM9hsyN8sXEkPXxcq5cWa59BcdGKR6DJH6aXdZpgu",
  "key27": "3oM4MLon7M5H39hhBPFqwB3BBiwYzH5DprFsr81hcguseVaFHmrdz5XjppSZDFCBZk1FDZrW4FggqGz2igavtGxX",
  "key28": "jAL1gdGF7hhz1tLi3R18MoQdVedNr7RMpk2TA3NHkTkixHRLZCjUtVXMyN2bSVgoUjN2oCyY5m4soBxDwWwuD53"
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
