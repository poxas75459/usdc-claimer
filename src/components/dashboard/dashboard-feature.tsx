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
    "4ZEWX9WxW7Tt7qcQwmAa8oQxh4hc6JzBGtP15sqDwejWgQGgWFgMJvj5RKtJiu5FC6WZgfstP5HqxW8dFoiP4435"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HKTs8EpeY1nD5XhF65buwmkXPsg6t3fesURiMHhNqCrvbXCpEb9pC3og3Pv1VPZqx84S456W2TZkqz3HiLCkTvb",
  "key1": "5cX7zFBLJXenpLkqjpHwmMz1M3GvuM84NGnfJzmWMhH8KrRhL8MKCgnxYWxv2TJ9aJaaHwhVM2JcuK6evWirmc6n",
  "key2": "4M5xsemGjhfWdR3F5GSq3GKKEJXhBRQCFNAfCf4CHcuK7qfPN4eR28d6uhr3a8EmCkj5ZvUryxtXMtG2YynVYV3i",
  "key3": "WqzYfby8MzT6gX5cnDezRxx3scjK5awibBwkUmrGBeZH2631oVYVB8p9canpv5mfbc1WD6ETNquDDusCqF5BQsh",
  "key4": "418wvTkwfZ9AqUDuHqnNBoZDV61psXNGeT3Wmmayp9uwBHd9cVtHhPgP9BDfxq9hZ9eznjqSVeyoQmnaiGr7fDYN",
  "key5": "58RxGZnXak13tcSTTBv1GmDbHyHVb8ESQcUJbgwRV6BDE4yAztHeH4zVRs5Bak1Lw86bdrT49DK354T87aFNs4LA",
  "key6": "3q8NasvQBcfUu81kczLdCVgjGrYqxcDTgaMuNajpwQZ7J9rvtSc5k75f6ggo9SKUuW5ZhXRE3KU5Hkne1Y9KsVkw",
  "key7": "31h3m1myisX9fmnZ7GTaZbKVLHnTcXzFHprrT9iAgsZsH9LgCAePSKGz1xmGdAzukrWousaCJzFiyXVNh7hrsGJZ",
  "key8": "Jz1e7NNfPy4wTUdVaUvsVrzYTMJq6sGQdop4jNo1rmE41P2mXm2MQgrby33U2BwtuHiidhTVvY7aCS8aFTr9HSV",
  "key9": "58EimPzhwEub45S8Djw73rKFyezxKmoCYQUEjL9GqqFNuVE8mGVmK2wF4XoeUq2EnnGd8XFjz5Ngoo2o2K8DoEWm",
  "key10": "4Ahx1n1ymyQ9ei368ZwcPPaZWrocAP2VL3ynWpUBbNrPbhMNbjPP21Dno6HfL5FZdDocRw2CpeYYBo6eE3Wo6rU2",
  "key11": "57mshdUcXE1159qHGwGSmV8RzizsftoTCUn6RCtCsfRB5Zd9eWsGRvK7dB4fXdydGq9LXTaVZ232RvJbBa96JA4p",
  "key12": "2SjJkgvVAhMmLKKMnwRfUhFGDge9PXF7YR31cXLCCFjnhiitXMbY543E5Jyg11TdYEdNDdaJitbaHFcXPty8JGvL",
  "key13": "3FHtAp4G3hyxFZDtqYZQYacxJZ9KKDNfN9rR6nVheJgcYVxSW7wDoJms3bATAroB4pXh9saJjy2vkcw4Tr1rDYg",
  "key14": "5yz9nqPptwnknLyAb5XmgZE359CUzMvY16UfXuGL2SbRQgyQQSDkkNxVXjicPWh6dYQkufXb1UQFAxQ8qVSQe5mC",
  "key15": "4uobF8giaQc9tZonDZvHzbgbwmRxUnfr3UYuXNRi9pVUqqRhzKux6XhcQwLJmseFZPNNDVG6UY3wMD6cofnrWgYD",
  "key16": "4jmobbhiYrEED9qGqwyRbonvySEgfNcXCrk8vbAWoj9kuV3k3E1JoJmEshRPMQe54Emx6nUYAM2akYQxNvTYnzWv",
  "key17": "2CpDpG36RTZBNSyDwaVQ7ZioL6gwPxWmehcf92rKZdWu51yhNgQaoq6YATays5Lq4kBBAvn8KkjUz4FSGS2n6tDq",
  "key18": "2c211TNFQhcuM6QJqrgr4t7D7c6omv7mLSQVhtjjht8mAqyTUyphVhSHpzvcZ8YZn4fRxrG2gC8nYUxQmd5C6rMU",
  "key19": "922k8QfXNXraqq4rLprSZu8Ax2CSH1qCxA1nEi6PuaLjhZb6dSwZuqAzmG83d7w92CYxcCyA57Uj1EjZ1QzS2FE",
  "key20": "4kkx4teQnpzMLYuEm1uKJCWRKMFU69uuNQCDbctkWQUTT5eTXpg13egB4TXuwFDyP59eb81k1beAazBAAyzteMTU",
  "key21": "o3auFS5QiFc7W2heDzaxnYrfeZ69x3rXA6SwS73fKCkVAtqteK5rHepLsMjZpEwGLjSTG9yQNWvwgNaR55GdV2c",
  "key22": "3iMASDqiW2xyR9yGTBjMorcEAkS3peP8eB72rKQRq1yYpKhGUs9ruNXwfvf4pGSH7R9YodqEagKtwNQ8xws5cT2j",
  "key23": "2UUKHuarnVBzx3SfANPUWT7iiT1PKLWaGsFqZqnECbYGR5xhDK5AZz3Wstpch5uk8DGFYs9Qq1DfzRDSSKr9heDx",
  "key24": "3rdfakC6Ngv5tZSXzRTrAKC54Qakeg8pnxVJwY1PMW7QBgMEgEiAjExFeYUUsixuS9N9hRcd5j1bg28ELaFEWjBk",
  "key25": "4vhBQ9kWPReBq6DkQ65BS31cesuCvV2QftpCny1CsZgiBB4eSzBEXrWs9vjrmSNdo9gAFS5qrexzceQJVkfHKYr5",
  "key26": "3V58NpvPuQcdA3bN2texRxzgRLAWsKNwF1TYatzKMWnqJxwm1GHuacSxX7RBb8ocjegCoTdE2wpC4g9yfhDDD2J5",
  "key27": "58iDUwzTJExJb2TTBsGZ16Y4AqZ2ujJZDsiEMiyKXSGmzeVqjhj6t4xPyp4XWbZofVnEATZpcX8zaj6UTs8H5kyM",
  "key28": "3xuA4QKS4PLj6z6euu7XmSFVZDVFdbobi1swVZ3EaZCRYMJwNwawt32ngkciGPhxPvSBdGqMa2oBf1Mr9wXtmRpj",
  "key29": "2dZgdZhoPrkyJBCH1hQNTXRGawwP7EP1eT3j3XeT8yMSeRTJ9iSNXjhVKCGgGinR1PwsRM7fYrX6QZa7deqrdCnk",
  "key30": "2gZLsKfAM2XWyYWHz9ozDEM5D7MQNBYDR51ZXJtAHbT292KH8DZbva72Y2SF7kNvhRGcEbjrgnDRvUuGq7yaJAmM",
  "key31": "24vD8j1ybpiv1m4jEyYNChX2kBPNyaAunaJTcfATbqP5VFWEfRyxNVA7TaPTHo7rgNr8XnL4vGKo9iAWW6dbWyPP",
  "key32": "4SV8j9jMFs5ac78JYvyA7qu7vu4sbP37ArLukkcqNrQVwgSHYWmtFbxy1oyqQ9ez78WnXFhuHgFnqjDrHoManna5",
  "key33": "34CXuus3cABawVH1Tv2R3GkRhK4sVXWud3qWUspYB7MeJmoQZbJMp8aXJEaWvsqQTQtanFAcSsrb8DBJZuXSBccv",
  "key34": "Phr3GzdE7ap82MEm5dPK21zw4PeBdsx1rrzznQjfeRktUHPGyLuSrkQade76RKUjjiVCQ37dK5gTK7TYVeQSv6C",
  "key35": "4kF95BLWZYyscNtdJVWbY1BSfb7fG9XSR8neD971niER4JZgvhiSWKBxSoT45bSSohZYLNsZ4hkMDJ9sm8Hs6Pfq",
  "key36": "bAdQtT2zuMihNUHuth6nG5oGMo59guVvi8bC68rvyyswc9FWtUzMngJJPSUzRb7516EYN2qHuNLzdb7mBuzKCXZ",
  "key37": "aZoeuZgx2gpeKviZG3cK8vZyTzMXBLb3EYrTnkogsHNX3kpwVX3icDDxNPbLPXe2ukRmPd8yU1YX4AXUJHNS65B",
  "key38": "4MzNo18e1UHEGyc3bKkBD8RnS8XMLjQrgRMF5XWwoJZMDGbYek8u5AMte53pyMo73du1FN7qJMozxPimn59SEaBv",
  "key39": "2RwsZLJdTBecAXcJTn2jQHxjgYbpvsiYBJWXaZpaVipKYGwrcfHTd8erLdBhcbjQN28fLdt6DYSRWXdxfbVYGGft",
  "key40": "cqBAQ7B7dCzer4M1ZK3utGoz6zQ7hdFKLE9CV5nzKJpYmtYFy1cFibSv9fxsMSworPJN19TuvcTdNmuSo3giYAD",
  "key41": "4sQ6hWCVSk6ufu6PweVoz6gpjxd9hLBgykrZXKHg6WE3qpjafD4SM2FK1ahzX9CVWwcN9FJ4FL2QmQCn3DekU8tc"
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
