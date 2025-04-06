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
    "y1Q9CLLwLA4PRTLCzNBU2kXQqeBxWF7VvKEq7rvndrJ94QvdX393TWoBsgFbdTn5TXS3oLp5jH8Ji9TBMSutEjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UG6aQnCriRzwFPcjAvfi7L53dS18ooQ3y918p42JWWKi6h5LiR6kob8YsmjqmXApdkcf6UzSfuw36uyHGfqdfm5",
  "key1": "4PyipJYs476Z3wMkBrjV72C4abNHmdLwxsih6a4zAkMx2vaJU9QN4jQTohtq99q5k1ehkvAUnDtw98yjAg38Xchz",
  "key2": "4et2dE6pTj1rW4gJirge83b81XULa8DCoa3g7sDhBSWPaQi7zix7Vq4WLj9J31tDED2pZr7c4bbHzEZtqV3evqzX",
  "key3": "2gD7a2AHEV8RSdBEeSYMrLhpY9u23y9x1tatPpcVmyddx6LkJyiYpav6yz7b3Q2E11UKnQ7pNZ6f3Fm9gWBaPRdF",
  "key4": "24e8N6oFG4m6gPpEWuQ1ZuX8jNhzWP15M4KXhtD5erEaY53Fm1kLjrXU3hRmorHjRi8u64qaVgCS8jvuTv96aGns",
  "key5": "2FUMitaRKSvQN3LznHevTiLPQ958YFQJKA3NB7swdpZ2sPB5ZK4GEbjoVAEbEG3VssAG6YAnQ9VfeXAP9QhRa26p",
  "key6": "2FMNAA46Mzb79CAWUDmLRnR6E7NDEr7g4UacSwhV1AWVc5fEEqCZyRnwVxpG62m5PMNuvRnd4afZ3VCBKREm817h",
  "key7": "5t6LX5T3ogE2EFqnAYFKpGzGcPnUf9eVRhbmGsi1eZGFZ1S22NU1JtYdGxtN7ZrB9zMbYemCzwoxS5ooJtW31vhT",
  "key8": "2NL7RhfisXciDbznhLEKBsvNBsyfayJwpbPXmWRkAoRMWe8EeUb7VYg9S5G7zUBCobZJwu2c4kgWjEHfyJBgozHn",
  "key9": "j4TzxNGrTLNdA4oxE8aMuPHC2VaR7xyM3U3nWtzVkn21h2J6PDFtwkLxjPtQMbfXMXgdsStvimTx4supg8kfjDf",
  "key10": "3Xoh3GYKVhFz6Dj6gjgScavZqSxzd7rgdCjzCigSyUMqnXT63VHZVwVHwtDumYJfYCQDqX1GjNRSCe39DHmWHjC1",
  "key11": "4r5u5FHH4ZhK9R5xVojRZvocQBhk82dPY79kYyBpv1A3FEqnw7eWwnmNRK8bsmohMz4PV1KAt7ds8zSBpXH88xZV",
  "key12": "3ZHirL4tWc9gzutK9rWTUFMeecmeSrmFsJp1qp8qZSJNiBFEv5NQhxkXQ7CvWKDfZ7XKGNfbB4Tg96VjbN5bLLDT",
  "key13": "4oZXkKJZj4adQz7eAkf3F4qg3ewbmknHRU1TuS1CgbywwfL8QXexsua65xpUQ7EsyoMmQkhpBGq3HVX5cg6BP1dt",
  "key14": "KjW759K4gZwmyiuz1NeyyFsXnrmpFX86mysjpQBGQQ7DyNPUkvpdz6HkPgdJUHm5iPKtkgBQXWLmqH6jymVKYL8",
  "key15": "4khTtnaGp5yeEqB9ZkjkBNFoRy3wa4rXZqiBhKmncYAJVS9tPPVTadTFgLgFPzMtMUymy65UaXgJwwNVofvjG5WH",
  "key16": "4S3TzGnPtft2w8WSVKe827pwug566PyF3nMphivU83MVMSeiQ9Xq6MdC3KoCopbXNkBtRmb83NVPqnRrk9YVtSGi",
  "key17": "XecGgLAFBotmJkPkA6HK4DJwRFFJT5aKPHzGy4FpdmbAjN7tGMSqc2eQuaWcB3LZGchb5GkUfp425MheYEp3Q13",
  "key18": "3VKdoorf8S2mcif9RS5W2rhjnTpFZAbY67KpkrEe2B6Qjmf2DqWWHQfLdEZ8gXpfDJXVZRsyin8RvC8WnXbo9Q6G",
  "key19": "3gz7Nsrb8J2CkDnFdrr5ND7FdGeBCDw8xvYUfDe7SDbYaY8xxCdrjyxD4N3xYsnaGza36Rq84WSdbFq9TL5NPQgQ",
  "key20": "eFQgmE42cRFA5fm2DfDKLnY8868RwLDEf7czwcq5U5CpZZ9G1WNaFxtjoiqageUf6gLAUy167S1bTvLg9cy1EAq",
  "key21": "66Zmrm5YaN3EWpe2tFiRB8GU8PtWieS6Ke67M2zRj5f7HSCap5aWQWz7onJqQZaFjHY9ZewxGn8jAR1HibQosTtE",
  "key22": "2Z1gYhhWFMCujcDp42pRzAduy2aNXEiiTLUUmjFSSaxwnvC8CACTyriAqZW8JBLDPD5yGFvYvTLksda21hCjuZaG",
  "key23": "4XeGX3MgU5Nnb4N5rPnrAZaQM8gow5UxSmuZyijzWF1ABQ8YMEMNjhf2nj76rkD7czCsYfixSAc6Qe6zTCb4WKJ7",
  "key24": "3ggBANpDL6rxvrRFVTqeuBqq6FgWykcBoxEub4jrBaVmh1kPHXia19eoGJH53kNbzS45zoixNokmejegs8chsFu",
  "key25": "2ECHhPxn8dEyrEhnLEgmDVE1F9TMiBBYDDx13BA8DCwCwx4hJjPKDoytLY6p6PQSQDFQXjiJw49haYys7JrGwWCB",
  "key26": "5jjXFVkCAyYDawWz9p3aTtH2WMis3H2wr6HEverEc4LPspXN3pnoXNduBAi8nuKTJokKsWCXWxSdoeYf4nNGzfWA",
  "key27": "5B4gSX2UiyFewFoq2Y6aaWWA5YB83KFZcLUxUwNaooL5fTzL9ihmN3X4d5x6uXP41MvgYxEQxcUtBCfymjFHyfur",
  "key28": "3rPjYqmLc3uyZBYs71vtoSDMKfkiHCWETvinSXGu7jTVesD9sYVYbTmp2CiHPE2pSrc38invDgpD2FPVPPb44aXy",
  "key29": "2zQ8YRzVzjYxLsiTf75si6rPjjvP52btR47y6vNCtJqzPMDMerwkXyGn6JSCKLjbtVwF4fcUmKmBTutxnVdqwM5W",
  "key30": "dKRim1s9gmcArUJPqFDNMNs34irwsVThryc7FW4eGrQvhGciWR6FCPqHqYoLvsDJyHtz4gVavEjzX2YjCSzyCqQ",
  "key31": "2HGv9gQmQfHv6bT1mvLNAQ7VXXust825H88DJGDABC6BPErZZmN1fWJ36NfFEREPrkTDq5vewMGFhzGz32zT5vEQ",
  "key32": "3ScNacLukTne9Jee8Gtqs71oSr6Y6T2tZn7jP6uHNJ1Q4NQRkNPUi8gqTeD6dKg7oNooDMgYGWLvUnw4jBau7kNY",
  "key33": "4P9WhQFPqx4b8zZQb31MfuEBdBJTQnezK763ESqDWyVpPCeTtVRk5UAdjGF1um5yWogk11ptdzR4wd2dakxbFZ4z",
  "key34": "4spbRjZXB3nizajZp2K8779ux1ysyGQqKTBZqwrXdo38LD5NCReoKKAEj7Lp7Kdog1igDK8kMeGPU81dTsDFoxCr",
  "key35": "5hfbiWh1ExKNrhiK3ioFKATpaaSY3Z91wuueDqKx7BYv5tmS2cyThNb6ks1Ar3Cz7p1v83K76tbDkfYfEGaqon4z",
  "key36": "2FVY37RoBZmTKqyEMqEz9494Wr32nZRjwuAxcv4EApHmHbAUJsuom1D2imdW3urRcRjkK6qusKAZ1cyNEmYbjqwC",
  "key37": "3GSW9Mm6QqMzvXf4WiKKcc72HyYoC43Ca5LDJBnf9qp8jeX7mdxp7VYfXTVeCch3jsENt1qQaC7ULneGpSvouNaL",
  "key38": "21SBvdegBxXhdWYHHpT8hxr6vriQaA21zP2Bbbz2mBLgELSqG44wmAeZiowvCF3A45u5JiK37xkeu2WpXgREDPDJ",
  "key39": "S4fjpbDWyL352CZoaCdFc1aN8pqVY7AspeQkvMNWoFh8VbnomXLyc4ZJckESLPaZUPx9U9S5NKyQXo1Rr2pwe25",
  "key40": "2du7d5VQ9jZjhVuBEYxit1XpXTthxJfc4WnK5bWfjtXNjXS5yKVRVJ3suzGHYpW83W4AQaWkFZVZNuCpVWCGzz7H"
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
