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
    "25Ros6veWratQ2CiPs9kn5cuVwbLK6RHadEGjQSrHu6RiQaK9S46gXxkGumxxjA1gSxdf1rXueKnBXRdBta2pZpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oxkw75zZjQU6M1P6Wofkepcz5yLhts4EJjbd7FvZ2cX14KhYWf5zzYKNYRRn94hkxF9prZ5ketvxEeNqQE2HxZx",
  "key1": "2ij3nCRfrzh4Q4krCWjmFBnU2XZWN1z56xGiQAkKdeLShxGTt28khW7KpB5RUQ1XbLZ1KGLXZX9hFyAZsnaJAnKh",
  "key2": "5UrmeVe4eN8SbSFWDkf1eSySXwwEr5HYKBuPpvJPh1dMa5mWycryGmDvtyX4qHn5purW5ppZrBgLB53Ec96SG8Xc",
  "key3": "4ySPwusTFB8sJiuSaxfd1oC2LpUWU3F1exkU9ViJVEa52gdg9KqNT7mMV9VaVRNS3wxojEeuFBm948H1aRywTBcU",
  "key4": "v1biecBw4AhAjRCTf9NpJHrrELt7w57svwDuT662tb6atKXQWQCUsR1e2D3KmhuNnDDv3Vm7jTqX5Ty8xCfmCkC",
  "key5": "JgSkBm3oMrJTPYSY6XVpu8hVseurTdYSt8BspJSwvtPfG3PQVcb3fwN9TZAgSDqFMt1yesKgTBtcSvfrjMWj21t",
  "key6": "5pBuzPsEfHGJR64bLEkxYs532BpDWd4fW7j6q7rR1JKpFAjcYhy5ZSHWH5CqvW9sskmMB1vZ2JXXqy9LrJLCFMNi",
  "key7": "35BCU4KhhTVicKbhPoT7wbz6DjCm2UMht5eGMSKuoZAmcmC4vXnCqbyFMFoeEkXePfUXs8vLYTDqziF2cSoLD3NH",
  "key8": "5kgztVnyLYZ7daBxSw9gMmU5pXEPdBT4NceqJbnBocK3QBpsG6JngYUnzG5fgJ9MJX6zAnigVsex1RDjhUgN1ZkC",
  "key9": "2qc6hEVFRwtWWtYHcQSBciNn6L4MQtUUEVThXYM4nU63mSwehmMHDQRYMVrBbnevsttRH2CjM3WhSUzbJ6xNErET",
  "key10": "41qts6q3S87rCm7KZzsRPAxGUHCCJDv68fbqRcEXSz11LcRi6xuSEtQ4XFN2XcnSAP24Ls6McdXoVEKukUrjfNfx",
  "key11": "28ofhDgjfChHz6bv99xvtQjzv67WtTeGrmKHHJMFJebxZaTW8d47AE219dGVpd9e2GVMDmbhhharxicpDSpyrmUe",
  "key12": "2GpkGX1dd1VJfJ96K7cWmcvxH5Eq43TXuLS56KKCZKQsPS1HzYUcVyTGMr62aVdERmQQG3SWY3Z7UXcVwexmSjCG",
  "key13": "5UVGQdhttc8GJuzHBcvnyuCVMP5HLr5VK7RSEXkuNvUmeTMjBXN1JvoRQVi8QanRH6EmbEhRdDx3vEPjroqv6iCz",
  "key14": "2h5ux5fDS1Qb2rbvNVBwrnPQaU7yvYAvLcm76ZpLFW3NEb8eutxjN2aaP5YD6x2yBq9A1z2dUj3kjtM1MdxdxuG2",
  "key15": "3MZ6Ywc2udw4xsjgh76GAGkPgHijcxghrfJxoD89zAM1WJ7NUgKBQ6c5VPDzzgBSueTX4QoJyHSv61kJ19uzrnkZ",
  "key16": "4T7hedjqeRMwRT7vztWNi4gdYZADAWXFaSW1xSnLCxuzRehYNMxi3SLTLr7ZTU3GydwjS38e85o3iUEcjBoG2Mhg",
  "key17": "isnrvqcGWFnfGdEPgPHV7MTqojmvBdhH5BmGgU4vRmFzjhMh4w7irddjXkVk46n8jTsktbeUz35FLoUDmpZq9op",
  "key18": "3ddR8NEbqVSAiZWw7wGwjQusmnJ97ywMDX68qHzHEVA9e57Rbm8n8jRj62965gNi5eM5cUcDz7RKZzhnsMgZ2nxz",
  "key19": "3LbYRp6NoJRvmKTUbFUrWgbWMGecDTAUSXCZ4iWvegfcFtUpw9NLgMFm3Te7Hf8qnBuvETb1WGC9Jmh8DUeQ9LB",
  "key20": "5UpfoypqWTiaaxZvYcvUeLCFsUBiDVuVuJ8rckYyWtEG8uP9SkjokgKzLQXAnZZVXcyvrjGMGbHKfqi8HnJ6nDC5",
  "key21": "3UQoMNasDgCxt2fDKx2kGkpHmAMXtJAybuq15YDpHMs6TQq4MfVVZyQ52vw7KSV4uYB8mTa34WxQvKYfed1eaFj4",
  "key22": "3zxETZZmnrMorLD3DPvzgixabvuGnyskk6EtyqeAByHemTVSZ2MsJv44ND6vKWyAR4Xa31Bz4kYs5yw3nTvWfDKo",
  "key23": "43kL3fxYTrxGy3yyHNQSAzaeQUMnvzScP4dVDEjQ1wZygKQ8R5jpchVDTiSVJBmN6DAzRVav6BKEkTLYxFh74bya",
  "key24": "ys55KK39nQMuyPv4f1NZy4jo7F7HZbF5xf6RtDDmbAPXGsF7mhEMyV9JUybCwA2XcoAx11RWwqK8uZhhawcwKZF",
  "key25": "3XodocLpG98B7y2B31FYyNuji5yQCqXY6P83SKHJvSfSkrot3wU8PuvUzFSERgXRLPBeDE5t5uVETDny33eV7CVU",
  "key26": "5XRu1ZZWTF21HPikvhuejTp6TMsRC9hxpBfdaps9gFHWjjeSwFZeSQ96CF47ebqicpEZJ1mmwRwpEpEzaxUPQiiT",
  "key27": "2H39XY1T8HYQjxS7MUvuT7ZxvAVJnBoiBfkvGzb9mX3BhuuzStw797s27dGhKTWTvvJ4D45QvWFps9yVMdFUa4HA",
  "key28": "5PxVEYhxE6DYynxc1AtwKNJsg6D1NHRHaTpxJV3BfnoEzVbXsfdhkqbHCnCp8nmK1rmhMVkx2Yy8mtH6JDawRk2Q",
  "key29": "2i58DHhAjHNbprcYuiQ7GnyQHZarVu4d9yVEEDdE574XoR4KEnuAFGXhGTXKBcS8gdsDFBBYBCkJTKB6WFC9geiM",
  "key30": "2QAiMi4ZWqLzs9wePA7rFDRwkrLTMLRg8Edan6B6vSzCeha9VH59aJ6CyiQbeABuEoF6Qj22GL9J7mxVASYb3MAE",
  "key31": "3QmjydhRAicB1rorWHutKtszePmPDX6kwf6JscTifrCgeqqB3YcbWMpMfqeHJpBEK5GUJaf7WH9XVUSp5v7KjVh5",
  "key32": "48vX3HMiyutK89gG8G7dhBoUhP77nN2WEwsTpVi4jd1A3vg4vD7qXW3buxCX6g6LhJGBgWECkGDMS6YQPJj12xRX",
  "key33": "4FYNN6R5tdAjmttJGHsNUmV7EGK4vHRExwxoq8ivqbXtokHrzcbMnPvfpPYC9KQx4hdbU1xRz1ubY7JverVPxrK3",
  "key34": "3h2Ytdoihc3gj6xjYqedHmDxjoPHJBv2WiXKX1gHXdaHbPzEyUP9MHCndeLAC81bavCGigED1VbkamXRpAez9wJ4",
  "key35": "2aV8NqRy2M459BKDewkhkZTsZbQ579X9U5xvnQViEXyF55VKvMra2qJ5UQG2q7CPwW82hJ2RxLu2W2qmd2ZBFFhb",
  "key36": "3PZyzEwUYajCWkRa3gMY82fZev281ynMjw8b8SPhCsL2SWStVhq3w2ohaypmLHjNT9kxHHsvnZNo3HkSYP9SfSKs",
  "key37": "5biXeSjgYu5dXREUp3hSXxM5cdJRUCyAoJmEYeMPJHW3jwVqkPsVfmZwJKFwCb2XP37JUNdKv25L2dnjGt6p2jsZ",
  "key38": "Q8eNj6pm99ihqhXe1715wNDJqq6Gma9TEbQVSfe99q3aKwMNAcRTc4USzWdRT4RvqpbXrS9rGZYUGtrt6BE4TQ6"
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
