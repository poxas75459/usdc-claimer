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
    "3TCP49E6mznuYdb4TnsBg8PE9UhgBa1P4egX1YmCCz7uoVafBNQfjAGb24wdmWgGv3ZHvqjgv6dtBcWSC49ia7U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HfmK4d1JNng4Axit8uro3YeJPrzFhVB5vbvyvtU46RgADS62qyTsQyYp12BQ8LGUGtt4eMXkd7bkXXqskZjeekh",
  "key1": "2opXYuexB7GobuqZF3JfdM4dfh3wFFd33qBEZ92Bs5xL3VTGRpCb4aVBpVTqtRPEJEqmnXLmkFdawPZ2s1RLJkby",
  "key2": "3epkyihVxS5Mh7iUbrfDGwLbuG1JmgbTyttP92Gb7AX9nCA2kESjmtApGAZKM8Wnec7V7BWsmDKkt6oednmGryzf",
  "key3": "5to1KgCThHAQdkcoxLdPUbAXppsNJnyrs9aRAvMz4xFTo1HLtQWArqnPdMCBQo9QNnAuaWV3a7xyvCF2P94DvmD",
  "key4": "5S514XYCm1HUpWkW5RfDR2Bz53TBhyBJrZ8JE9ZMBFtqjcLW8RLTnEhs8j5MzT9D7jGW8mX44zFAtFTsrMaoYN2m",
  "key5": "5oWa1ZuFgcg8Lo1nawYTia9uXNofSHq1F6ZeiwsUzbzndGKwEKcX6vym5RwAx1XA6EFSyu4EWzU2ifjLsGt5tFnq",
  "key6": "3Qq1GmD1pcnM6V4MPjRXgEVvZtZxitnBcMDTdhpLCtZBiUM8is4vZT7rXmKzdd29Fm4YTqNrsGQWPrLYAy2GWFh4",
  "key7": "DtCTETh1AvhNsgRV8SyP5ACqfqVKyQwUgiHcEbYi5LDjvr6xVnLL31mFT5W6FL3fWqJc1xygP2pH1KGb4JmDLQP",
  "key8": "5eodxiWmiVBvm2YBUME2oXXHgQ3piQCYK2m9FAJm8rz2odzBZPHWfN5itwqHr9j1SeZiB2im3WuMVbT4G3LhKsBJ",
  "key9": "2cpeYhAQRJiNDUVTk7uJufCPFMi3fmoBLjehyRR5q5qQNbHLRYFMTjXGo8VwT8zmXAMTMeJz2S96PEm829Ei7HWL",
  "key10": "2whPbNC7ckqULjeCwgbrrhwmu4g1kUKvue159GtpkVSFJhY1NyvPb9qaJAmjCSfbZ16CRUfnELYQaCy774CaNuAT",
  "key11": "44JQSQ7YkXmeFivV3HHkWpFkrkSLA6JR3wsdZa37bTHD2zCMDkRi22Pvx6xuQEYEG5gDvjtzBQXkDPpnjYZycSxY",
  "key12": "3uhDU6v4k8cjy8zmUNAmxfV4ZG1jUHv8J3PkXqa3Gmcd6rvDCqWRRKLgMQxBF556dPNEKXFwHHbNFxLce3RLLWTd",
  "key13": "2u6HSzyocYW6di8fP8p51TrLatEFtNXigHkFgcvosf6J9H3KfuKM4pXXhL39aErGdDkAfT9xMZ81SRigAWugjWwJ",
  "key14": "5KqGjUVWjJikq32xKhnVmyWDyDA3KSWLWkndAV2ZQDV3ruxTkZ5Wqta9NcYSwa54USQfqvWL2M7PNzoPEsVY4bge",
  "key15": "5QXEBcB5LXurZHVDwuVvMjnzPvtCD9UKLn3RUSzTF96Rcckq2NRcvfxvDJdwa561QDvAPjeA7o5xZbakzwjJDsGe",
  "key16": "CZc3zt9Bh1DDqozq1LNEHTa26DBVZAxc1TfpjTijE1Td7w7nrFVkB6s7Sri6pfo3873sxARypVZLtzovVdLTYFH",
  "key17": "2UhE18DV8efFBGNTzQxU1TnBRFnznUigEDecKdXVcvC2PrkQYZJFyfGvXP71C7QEZ8aCvHBWxY4QAvVGsWpMKp6Q",
  "key18": "Q89Dyc4eoSkPCMKa9uh5MxFougReCxbv3Aspo5tD8JeWfhNpmCWXSsYWFCvJQBfwKQ3ieFwF4NQp81dHssAGTkU",
  "key19": "2oXCrTWSGLSes4MLthjXCW69YxhazLzL7QSxjfP3EdG4heubFCkw82jwYA4kG4Hph6oHiqPnHBE3PHJGTDTJjzuh",
  "key20": "3ZtnUdmAMo8prsT858Fi1JoTiGt9BbaWS3mGAtYBeMQsRVRW7VHL3zcEQRGhAbGZGkHWDAmAqRcaKqXm9i9pggu9",
  "key21": "28W7rLEp44mUwN2bWzKgM9E8s4RJdFKxcAKKh2WiJHkUu1J6D1dEfWWSTGMCBjvgvGn3e5vVH1ieZpBGAu26aVzZ",
  "key22": "oN2MXFx935SxZcY2RJCG6PhWKtW5mrH4wjnP6qMD8isM5STR7KG2LD4y6Yw6AqecZ6Fh5WgRHvJv6DfT6rUvncv",
  "key23": "5chmLHEmAxt6DYZUxVyFDiWP6Z7zC6HFsHaCjF9SchqGjEL64t5je1jqiAgwnsUzYXdrwMAByWwYpftfTXYkZW9o",
  "key24": "61hkkBzDet1kkxZAtxujDdRivCFv7DjKPpcXfcZZ8F8ZMCn4KkPB34EvNpWr4Uf4BuJWrfJacf8MiANipKv9BJBM",
  "key25": "4pk5WTcqiq6ctmdXQn5UyhGaVhqJmWDb3fhFHYWFfDthXzM7wxTVQ1w61G98kak3B5KQjXXsfvJ9bpEiWaYc7JE4",
  "key26": "3cRWxyK5Nr8x7pd7vqGV8NcQ1AWf53kEht1KLuBW2xJvjGPQbdphBybypwCJjXoXvx45NBvNqUzhpBwBX8KaULXw",
  "key27": "4q24umEVMGyuw2KHcgE41roYfXLU4gXudTbPKZGfwbUT31uhLqo95npj6fwBtegEHV9pV875pMQtmLMpJq4ytayS",
  "key28": "4tJrFP1H7Py7fgfP9bdXsZ5xg6iFCWgCqqhgCcTGcC4Hivu9kEAuqsRHAs4MdxgxHzGiWY2q6AhATojoEwadaLtg",
  "key29": "412CNt2k36Uy4TUZzJfuC7yeT338jj19gK4qbjhwKRd1wGERTRSrPzSEuV5PpeWa2fb1u5hhyDF6HCh8Utwr7VdW",
  "key30": "49u5W3SpKxR2DM89a1t6BZybi4iZZE154JuNqDnMMW1mkwx6ezmyEQXf6SsLeUEnJvzMfWUc4mWiyyJk8gB2d5NC",
  "key31": "2yvxSP548kLR9SYSsFSbWZeTzX4TperXzgPSnbE3nPAxTMnXUotCRE17251poe9ytoWy6zHXDi4wWWkuP1jx12FD",
  "key32": "5kqmxJ7ywgeyXDRuCucARVTWY6ta8CX6aot9gY6Mnm1MCtTjmtmaJ7QmZBs4tY4SjBCXjeec3YCqF6Dq65ouyGug",
  "key33": "6156fFpzedxfgFntR8aKHx8dRigDrctwcb8au5VccLaDr9agNZjRZPtWEhDzuVyReKB4XeJuNUo3uVCLHNrqD6Zz",
  "key34": "5TxxUdG67iMa5pvja1nvHi3HGimquZAttuUSYq3gdQTawcyjom976gaeEvwHPYA9gNcdh19cVBpcn68rNWGuve2Z",
  "key35": "5JNmsdtYNDWJNbj2DtNfEVdAeEzdJ3vQ8b5MA2Pvc6zHhKth33WaWR84TcrCKhqeW2XLtSPNRu2ozWHoq24NDPLk",
  "key36": "FmuTDyeMHfBGEM6LB8MnTtuPYaTKkPwsR6nZ7ZtaDetwZSrKTfpPMFcZ34HBM2WDKLmGzZDEfZbJJgKzNTsGo2s",
  "key37": "c5rhAj2mLuJa8B51qdcvoddFoeVJWAnHndVeKYoqR5SMjNrAbEDNH9ZpwyHWYNQataAXXSD37ro3ZUtAayRCunD",
  "key38": "5W3rKFdWqcF2fVusPkmX8ceV8PGseEiVhGQR7jbrKdFnDb6rwNVrwADKZtDz3FQ368L9Vu88Mpzudj21JMGBdFcs",
  "key39": "4bYsoTEb4s6xSVoxNta3u22V239yzAMBV87LR8MbbJ794kSZUMwGKb5DR1PT3viNFaSDvMtLsbvUvwGjF3BeiujB",
  "key40": "5zL2jDMNANugtVGkdgCAmyC99AHMBNq6Uje5Mn1MYajGVdnbdp2pG8trcmusC7WRW26qF51oVnwPuRaxzNnBzrdS"
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
