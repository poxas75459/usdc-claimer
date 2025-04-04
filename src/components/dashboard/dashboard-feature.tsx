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
    "2deFgjze1z75LK36ze4zQtLQTc3ui5295XwNRharE5ef93vxDiqjtun6nk96A7EEbVc4dw3c6QMKKZGYpjxHjbPp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MyB1Hkn4dERudAydi7WAgbDakAPsCCFY5M9FqryuUZvKfBYdz5crvixGUkCK2cPpkhGw7b8SDHM2qETa8bAtWX5",
  "key1": "2BfRZujJfPtGR2S1omdiUaPQMmGtpn9pj3B6nfTM3qNDA9Te7h6xXhiWEnLbkfR2aV2bzk63nDJryszo3L1uHa8",
  "key2": "5dusYXswp7jiEf3prHnnCMESey28uVRiHzUffjvhmLkERXtDBiqFcck1UwfnokgEeeFpnB6QxaSB1EZgT2mQhKS5",
  "key3": "5NbkHo18A1Vi6TcoqbAMik6cm8yqg4F9DUWmahudG3J8MCKt9HY8BpNNep3jotBLBtgK57WhUFWRhyQpKuyLncj8",
  "key4": "4gqVVwS7AvUojmaLTmt75e9qRqeUdqMGqwp59x1TPZbtY6F3wVwow7fEUqABYCus9J4zWUdGthfSV9XrSF9LA2tN",
  "key5": "5ktSR61pud2V4LDjMQzGWYXCmXNcDjN9mmXcEvXzFMTptiVHgTChXMjJFVUha9Ten7mPP5cz27UHdibyempcoaRJ",
  "key6": "qTgwNnkJGzifJSm2KeENS5BAY5BeQfEhurfrXbKp2UDnezjXYGTB6HbMfW499bAFwCXZEKvuHY9iVwnSjD94WQ6",
  "key7": "qHjC2CwtAhjBa52DFyd7cygjk3Lqpv64md2rJivGqn1cP4gsqec6e5BJ8Y3Z2KhGUAh5Fey8KHeNRaXFYvm6x5F",
  "key8": "4PV2smP2CvdgMv1WvM4hFJxS62a43TzdbaSd1yKxkSP7CqHc5DuQM4Ggx67Kt668ELVeDyaZLCdhWryWnwCnjPib",
  "key9": "3MieQoKPJcy5ueoGuCkUKuwbZtv35r8SVSwfrqQKvZEPhtkJH3Yxp2phG9jLFEoUXn7S1t3uvqB1QkVdBRg4Q7ZA",
  "key10": "3LF8mqzwB9zBYyyvXHB8G3m6ewCPmfYs5boLC4enFbGVFkEgpBjZTt1Ydu4CfGjC7jSFvzw6JR1SEdG8JVoLFSVC",
  "key11": "2fMgz1QjJCCKJbrCaRWkYYq32ihWQnAG454tjkuStehvucWbxsoJQz8fonVchipqcHXtbVzhWfvuydhBQ5vhnLam",
  "key12": "1jnEUTMUk48o5GWFzkKN9LytwqQgQoLHBS8UiZaY3VQes8w1sbYHtpzwhDu2YUKGCNYqojaGn75EhN7PrLE8J7v",
  "key13": "5bx3wLbZQiqshAqnjueG2mc2tDVEpm7ruWCb2Cv9CTbBFs229YmuyDtyvbiWhq3mrqCPRUYbLsQBkgq53TUunaGZ",
  "key14": "29fJariR8DvFqyxtpgT78vPW5NmtuNJknALw52YMz4Pgin5Fj2eyiqPCo5XMr9eVENf2LTTGi8wfWcUSmFh94AKT",
  "key15": "5K4tD4RuAitGp7NG4fcpLFsPumHsRnjoRcAgdzExtLdZBJnBDkr27HJiBT7NswQ9wpTSzkK9YwoEyqYvFscyrxNx",
  "key16": "DcXv9YtnLNSPKRrRkqVgEQssYP5c1x57hC3qc5GHRHpghV5ui2cP6A8KLQRVXYJCe4yFpYVeEoMnwRz8DLKGYU8",
  "key17": "3Gpjc5BuuwWrgUkuBB2V6WJzgqszzanZTo8BW8J5ptUiPtUZkxmU3zUy1JaKZvn5FcnxwuJ1Q2yZ6JcU4H2SDoE2",
  "key18": "3pHcfq5K3vu3vXCEWtLFkv3nNQdmdVNmX2tHrHE9mu78jVj7w27mnovucVAtBsGnjaoYJ3RfTV4fhTwWxUP8sbrj",
  "key19": "2o2ASBCpig87T9KhwkRRLGipzpCSRuiDqpcShdx2Cxh9SNgjRvM8rg5FBBwELCZEHpHXJBSEsm1PdBwMrWFL94B6",
  "key20": "5qRCLWFvyBdjdzSPf6jjzUg45TTmtbBx2o45jU5sfjnzshWCaG5cNauEbbR2PNdyoG9N5xWY3kp8kJvpUdr6XEFV",
  "key21": "45bGZGPXpyZN72sW6YWZ6wTexhoJmMohcnoFifAhH8fzk99xM6wWBuwLY4qKrhsgxaQVoiSNueGthCWvzJNWCFJ8",
  "key22": "3i2Lm1hReSuRd4VfX7tUx49H7dxe6j8GXoHDiqhNi4wVLhSaJgWkfoCVWVA1ZhJGqQNgQ6EFNTBdUA5HmZebw9po",
  "key23": "3SSVDa64TsZC3gXmu7rXPcVYi8862k5cJx73779qXFr2gCLB3V38mdtMhji9jY9R2za8hU9dVt56L9UPupZTJvb9",
  "key24": "mHH5Fd6JuHcYUykjiesrSwMLTbebuKCnaJbBZPgMsVPFr9HLkjvn38ssU2a1ku96LKD4xZiAVWoNqBmx8HC1vcj",
  "key25": "3ZyBruj9wCiNFZEprvGRURHzZ35FB2qACVCaL5XVQoJoYCGXD525iWfixyUtQKv3h9maRNixcJsJk8deH5BUUbYF",
  "key26": "5ghSmVMYakgPqj1R4WQUyu7K167HdK8LBNMjPvsS9TE4u5iEuCfPnhvZ9CaSFo2MnCjexZnKVBfekhfFueS6aXkA",
  "key27": "3jtADbzss4wPkzhwp8YUZ1T7nTwej6zAJdcLFoA2G2NQBRKQ5q4sHbqFyvKECAHRy6TpWjgeyUWAfYnH2qNQ358U",
  "key28": "3pu1f48X7xzSZwaFYSF3piBs9AoGTXvJFmtm2hTjZFoYaG59msTEWy5WhAzhutPVPJsuvi6JLGYUXFpLnvv8PUPF",
  "key29": "5beFdoexU82CEAwbkzr8PDCQ6HFvTVSHbkt32VKvkf2XYxof7v2ERqFvj8BugsxKAzZ6jrQBS69H5DyHcpmpmDy7",
  "key30": "3beWr7WBpWhJaGqZsy378t9Jn2G6uQzZmNsR2wCLtqCEPWpiGSnB9TzTx59UTz34qS9kTYd8wUGmbzygUzjGPwtw",
  "key31": "ZBeFeCpWJV7WqU3oarLpjiEMpCDxppz7FZhAaV2Fy1mbdmDbWhUBbRZhPQmP9JPmT75KH1zardVnqRqxjdCQM6Y",
  "key32": "64zHEH4PF7tVEEeYBLZnTzXcRaRsDe3UVU1uA9vRr2tmbRGcCBErZyd3LBFTxo3YdgPtLU1y7kjxFTae4ioPhGva",
  "key33": "MrUNbUkKWTfLHSX3yjQmKR14cfRAHk3r6ynNptPK7ANownxow1H9PE6KZPav4xvdCbUfT17QPXNa8DXmQSdDWLh",
  "key34": "2oRdfuYApVDyNNVkc4gB42h1vrCLeSuNmA38Bmqz8pPDPHkoaLcRbMtHAuYN6AZ7F9aNgTMFZounN4dXqmRFGH8a",
  "key35": "2NBfAdykZBm7et69xLnKBvqGvvwei1cUWLL5xqfdpgAyHRDCqKTTH9v9y2tHyhsssWYqMcGQaDiQUrNjVh3yDsu5",
  "key36": "2Nkoga7SCAxcc8YCbN7mFfNDMozD83FHXo2RHjQw8z3JrWs4UeYfg5LmoSzrAkV6djDRdUQPx3Bd428nAmo3kQ2i",
  "key37": "62ub5TpqGMYNDoYSRTZkAeG6kEV7Vzmo39781w5fwo6DmaXwAi3XnX3YM6moBzbDVt5WDpH76UurAN63sZin4Aqh",
  "key38": "5hXh8qvmoiMyYpMvGEfwDuKfpwiAQLKcqM4UR9NQWGdaBpnvPaWtN7SeFpeKdLGcbHEKBaUoGgeWx9NQuef1Vw4s",
  "key39": "4nUtiyTRj9ee7YLJWKmNQx8SHVApPTyrZ3LorzNMf1qSfwBX3bc5q6wHeufbYteejMwJfqSRsUYH3M7CXuaUWkrK",
  "key40": "4i3mmjLd5quz1sL5FET9135uRDNxVwVXFxZHkhn84Mha8NEXYFY2nymEE3D3y5jR8rHH9yQ6Pr6U9DH3mAwtCKg",
  "key41": "55WEcJihpMTGYCHFvBtNjxr3m9mX6v34fLYLzr9P1sr26KMBv8CdwwySymVoo49sdXEfHo3cn8KmfsMmN8AYU31",
  "key42": "4Ti8aaUhZi2TipuiP9wwGSxvMrfYoLSuoH4cjMSdZUXRw3B5xpnMn8MBSZXCEGaKdxtdnAVkk7NBSaknrJ2XCKZn",
  "key43": "2E4NttuJGcwcGHEpMHWzQ8MAs2H36DWHDoDLHQt2S527YcvJD1wXZ7PGDQiwoDMzunD42gwFmEDu878My5z2pPCN",
  "key44": "SW4fFHKGFbrMQLPUykx8d1CivDwnihUhsRbLgDj8NX6Zp9B9VCJtAcnF8q5YdCUzaZ68nqhDAtjWB5oZmp2XHuE",
  "key45": "3b5g589xN9a4QiFpQn8PYhZBEPV8PmC79sc7coza9gRAPqvNDi1rNurb61aNQCFDi8YTEqUGLETnj25h5WQEG7qM",
  "key46": "2b8n7GLNMgSmbTXQmDUFScgCfMGPDTwwsJumicizMWBvd2PKU2V2rh7gJYn8NvyS1MEdY1gza7zWjm7cpsSQzijT",
  "key47": "2RdsP3U7ZmncKGRLpfayRzAgkFo3fEPrw8nvMRD7qwJJG67w5FbL9JyQw3Pq5AzNCc5mLkk4BKo1EYkqJkp6yjSX",
  "key48": "3J6UYDTuzEFpprqXrB2z2qTUpxSFenCcMm6opsczyB4sQ988854mEpk8B9Kv3nh87VuMHN6Ei9RKo6gY2sVrZ6oL"
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
