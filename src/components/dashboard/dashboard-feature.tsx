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
    "4PUm1NkVPTPPZppcau8wf713k5GdHnqjrEs899QY9TALmeWS2zeXZrUmkdkjvArryJuKGK1La7GHGZnfYYCtm6VT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c2FJfopuHwnNxZMLuco7ceBodjMvDr7DeSWgZS7AHTgGGC3qBb1P48DQaNiGhX3FWSsiJ2wwrj92FHmvQbH3rZW",
  "key1": "2LXhF4f53mEA2bSzJcnh4m9ApxrnJJmEvXz5mRTiGXFWZNJVRaTKetbTdjZLcYR9QigwCvyYuUVt1Kk9npCEBDmd",
  "key2": "snbCbSau7Dk41vW7ENWdyA2udW59SXTVJBFaybFpVTEax5oFB4wfCv7WgRooxPtt2V6Ts5tKBBVzAxaJbkikPnr",
  "key3": "4UkkwV6rLb1gCACVGQCJXHw3SPM1JUHGcmxgTZgh7fhe8zFM5TunR6ndo3An6afddsiyhX7HAoVSgKhAmvUihqqV",
  "key4": "5vy42DgWXqxZbwyPR9Vyr8tRGrviM56WujDYdL1onE1Qzk7v1eCMQTEyBUCqu1JwQg1qgCZ5SMHvvV2GHTKppJ3y",
  "key5": "5GoyvS3467rtYU7oK5Y6U5jxq7APhUqQwtJdxF5hxAQbpNcQXQmyw2LbKgLqLNVCZeu21FdGUhN8oXaisRqsUgqu",
  "key6": "23JpgUywbTa4umrRJH2Bdicdn6v6wArmBoEBAFoWzd1mEHCVuiyFcwoLS79mAtqskYSwDHLMHv78pGzpd3X1szU2",
  "key7": "37fomVtvyDEC9XC9faVq9A5uz43yMzvwuZpLV7qcj9r9atitBqT8E4dAGQFpzfuPb1PLTMZaqXvtnD7Rnc8wvmfU",
  "key8": "4stYF1znWSkYZs2SdiJ4LXu7ExArLd7Eqdt6VZWDJUtuKwsjjB3XRTw8MhYV47TVphGc2gwrUEJ2tW5mbZyWuXjG",
  "key9": "4crssG8DkntuFs9N9xneUvWY1yqbvKdr8mumeESt7wRJwnEXbNB4jja9YiNYd6YzVsBVXdyNKe5Lbza8RZeSkrxY",
  "key10": "2X7xJSZXNnPJvFSqNgNzBZqXKxw32PC8yim4R1PwEdeKnFtFoiDEfDMMX4bDTzm2nnZbRZCfDpnWG7LZ55ZRqFrA",
  "key11": "39uVZA9rdqMHu3wnyzGfA75NaZTZHyoyuraE486ZMmiPZEivUzH3fjZgM5a5vKakiP5DrUvPyXPgAdep9fkXNFML",
  "key12": "7qfaZN5z3KwcDzkeM5gMsyA4pzFt1aihwpgJtY8oE1QsiHymerww98XfKVnqS5DGZZR2biEbHGbLjudcBDC8ZyC",
  "key13": "3zzJmkNJbKwcKaUpEYsVL9NH9jWDoncPgAdAccXvjqqdn39mzM4WvFTTiePvBcTDMUBTQnzB7PSGbAqaQjS5Jp83",
  "key14": "2rNsNuHuHcfktj2bvb3SCCps32bozEYWS5VwjFHxF3tEaMoX9LAmGr84RdvGyWouwqzmnfLVHzUxppmNSLYmNJWV",
  "key15": "qLj1F7PSZDnTpJ6zaDh4jef3uQCF5NSPRXdczzePQRAKbFFiHvn36k2CTj21ViN3b3DbtqnTBPc7qVptTzG2FyE",
  "key16": "64DqfDJUhgQVMG7Us9nYVwxVG2cEFjM1kXCSbpmELpkX4H7hQWZM3Zf9rrVo3SHKv6v8oBkhybHgFTqzP1LiPydE",
  "key17": "3ncFMrLdPh9GZ19vvQr3nbKGDv98LkDCUT2iJuvfF9TD1KrgeEti5tH9N3RWzeNM6oRb1ErLStVsky4zKJ9KocRu",
  "key18": "p5dXqUuJbHdDEBhr64C766nxnjZmjMqYhSjqZdR3GwbTVxj6x6PqsGCfkURHUVBum8E7T9XSyzCDNurVSwBSUD3",
  "key19": "3wK6vrYaLS6VFBn4KQys8sFwEHn1tj8qihnPEKSbKVY4w3FhzzVkipgd7pXhbGVmFTZjmKaUSrUm1Jon37t3Jsx2",
  "key20": "25oKtDmBuxCMaHSqtt82Lee5NDUDxeRKQAwHTwGSXjd4rc6MhiD9VkE2oH8H5ZQBZRsyD3fZhVg9cDf1MxFYsKQB",
  "key21": "3mJEq2mqSDojmcLQJyjw4T6Usvij3KBH2XDj7viFHMJMeCsnRVsgkdvJ9AJUqdPb7kz9wja8rdfAxDM9758Wqra5",
  "key22": "5hNvsbX7MmEKqy9Nb8mJG1j2u6dn2DsUAb6MP6BgvrnQRnNmsK3KSZeJCTdnxEqLLzVs418ddKaHruaUUMKmkPFz",
  "key23": "5fhy4FXGmHbUxxGUwSqZP9BYnvrdFn4SZSiq4q7fahe4VkYYVPqWuKM4GZ1J3LFJo3rzQ3m5EqHfJBHM3EbNfj9C",
  "key24": "6cQVhGkhsiicXDTyzKXDbiwKt1UMfLepEgpHqagnFzvh6d288kVJnmx1GVpAbT7x3dNCozJKnmTVyVKhRp9gyBz",
  "key25": "12VUU5RVkzLTqhoLbio2yo1rnSSTaxJUSSXDQj4rxaqg7TaD8GJoLF4KoMDnypH4m7wXiNaVBXBf6a3ZjSnWSFJ",
  "key26": "3ut3JwHJRUuj62joihRk4PHvyQjSKgrJ3HsZ1cXSVRQ1NnzTtj3hWzAMigJw4VWqCsEUFhbSVTFwNDRRd74EbqW2",
  "key27": "9X9X2VxkTdftrhYk1fnDjzwr4r8cm14Q5haNJYgDKAr5E3dmDfA8BRaYrFRUQgtdWpztSvSpLYpZcTXycmzmvyq",
  "key28": "5NqjnbS3sPZzEP4g2Q33M72zgxtKtAMfPF7fSovV4yirm7nqJ96qigN1bVhq8KVbdpBbpeTYJs1aN21pmfLxcgJS",
  "key29": "2LGwrkoc9DuPh3yYSgHQDbboMQTiK9wziVwh6aq6Q8KuJqzhDrquUJoK6NPnZL2hnQ8ceMYDiB1buhQ5V2Ewg8iw",
  "key30": "3BNVLKcbVsmbLAnBmk2FceRepw56JqAshTq1tAmPNJdGnngYpwm81SFd6BmyGfPoCCrAGzFVHNTCXG89t341vwM9",
  "key31": "gzrvK84GXAtm4p21EucjV1VdAUCc45PTYmfqyGFtJ6sn8aeSyHyZedphMddVStKExNebNEBqE6TsmSwcT458Agd",
  "key32": "rskKgS9LcW32QsSzqdFgP41ugutmzWs1ctHvK8sKg6ARVEY7DBPE6SiqjKSkVCjndCg9iN5ZCGv5W9GvRyH1RXD",
  "key33": "25EZvwMFv7ToJHX86mFoDPMCSgqjsfnSShX3c7LFxkJqQie48tDRBMtqpcAwUwHgoGYmPabfnBPpc2UMaHwtz8wX",
  "key34": "aMmCwv8gdE3c4wvipJPiuRniSuX2NBRPWRAE4jsyHnFqpAUbiD85ZNtCX7q6Xt2xBXpuFX6tkgxsAsTH8Lh4Rgh",
  "key35": "2W14oKGvM1LRMEukjtH1b2TgyQGY8oL77m9cjV9x1k5G3ojRtLsLw9karmg7Y42VCrVPWxYeUN6KBJpJKTfQsJw8",
  "key36": "fdLJcm3YVJARBQDJgiGKN44mX1zvgwURiPMVUuNDbcgLQNJyoeEjLknQACNBFFtrn1FtjiFPudrcwjMWsrXBJD9",
  "key37": "31XQXDz5BKT9AEQQrKdpCwLL6zg15NE4wDDumQRnFXr261QucJjZaDtptxfLowk9YkQMv5ng3cBUjD8HQrV15YWc",
  "key38": "2Bt1TTtwAU9hoHPLHwPCfz4hzNtxnezafn7H2vAQLuVJ2VzgTTRXGY1W71HzYMWVyq3wQFUnRDmGzfbciFQazfax",
  "key39": "3KHmH8qwiH8edSmA5ZYb9kkpzbzKxMx7kAn4efShJLgwdzPXK324R7ZDYaxp8CgW82NX2BsTWAEuvzkTsjHRaUGy",
  "key40": "44gHRDX2CwfqH1rPgPy1Vv9GYYFFUC6tQ2zrJHXhGrDtuyPmV1xCiDtzQsYHuxchbou9kJkA2gMsW4xnX5BHxxDy",
  "key41": "5YCyFTm29b5S9HQ1nCh69SfXq1pTdH9DQN3SQ48hWVj9pQxXXTYxXinXRJXAA1GMpyGvp3dkvsmt5DLm5sVAzZG1",
  "key42": "5zEypQKUcgzQr1wYZuVCojQLA6SCYNDX9zjBpQ5Qf96QsJEezSzU594Y1A7auonzdqFQQVTj7jEoddDBbUVM96kU",
  "key43": "2Z6PuQyaV7TVbc3jjrskbZuQ9qUg8DCeWeM9iDFgFTpRzR6ryaBkY2fZuNZ4WLvdo7Dtu1niHHm2wZkT83DzrrvL",
  "key44": "2qTK74caLn6Lx5KM2g2s68MZcWXfgSiVZ72TyA2b5qwof7FR7ePZGqZPsZvQsdJuyidBM5MRPYBNamz9N79rweaH",
  "key45": "4VTdSJx9NhAKPk8ToqJYCdY6v8F2g2KcGmQQM247XGCCy8ZnWqPVAb4XXUem3GDd4EAGHa1MFitYt84jYRf4uG7N",
  "key46": "4mxvbJgkRZ2V51MPFmgF3u9hVj3wxeRRqPAQQchnsfZgX9NUwS6ScQMzj7Vj4gyczG1hJayadHjKrM7zXauP2K1X",
  "key47": "4EGCeVpDtjKgSfj828kiKZXSdB8myCCd5jh4Q9UtCk47JjpRncajcNMqbf79NuNKWYY1BLZDGySzqqNcEZhn28PX"
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
