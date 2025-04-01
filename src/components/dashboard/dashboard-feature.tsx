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
    "4dC7y4sVnRo98Ea53dnxcyYesKLSy85AQYmX8KAW4egCdyBgUB67oeFAHJmqDDdCr8SugfwSFY6rfPntVfNxeMn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FtDrUGCM4JkVFk18BfkB4V8bg222dHfQuFm1qiXxAsbnGinHY8Wjnjv3VCW6vsP1pQyQrGBFxw3d1mQfFQf9wm2",
  "key1": "cLwRNHipuMQWMZrLnbqafcDkHjDU4Dazweucs6HKf6AkJu6XFGABKigYXmFthTirsAsodn4Jn7W2993copgU4wx",
  "key2": "2KvJcLPt6kVzkukPrvpnrwY4yMJocLqYADKDVYujtptEi6TJ3L4sYVyLhVcQDUsJxXSjBGRkwp4C2kNmzi5VCi7C",
  "key3": "CA7L86ehLQJ6qbYvDzTj6d35YLN9HegRdnun3CcVW5zLtb3nyYAcqqnXmQDoRSNhhBFvLaiNh24idEEzmG8m4pz",
  "key4": "4hNCa4TURcjb264DbmgHWQy9vQajswyJfkuKBr9iC7nyeWegYNFDc99q136KiubfjomzCiPEkn8xN4JmC4Cu1Es7",
  "key5": "4G3R96visCW2F6p1UhLmyEY4EYx8UHzca1atuZRYutE28JLeoeuNzhoKbFkpDZd4BDw8G3iA7g4sW8XQkPKkX6tx",
  "key6": "66vTgT6p3X8muNj87B8hq3oPQ1SxvwGHFpS28gpFziKPFq8AhY49WZXBepk4GpLkiDvzwnhvVZ8e56hQZ1yNbaYs",
  "key7": "2J9HJ1n7jZ2NdBEVW1nidkdb6TNzUUji2CU6CARcN2RX66Atsq8x7himg8vTvVkreUn5rAT6MPjeRvdCnirMm6tP",
  "key8": "JEKDeiDn197rcmkhUF391ZTc23wfPxmmWnQtKrTLC7XncyJTnGHWdW1fuF7BvyBicJeXVA9Li23wfVRzwJ7NTKc",
  "key9": "2jGMc9yWi762QD3LCoVhzuWdoGnMzhJK4i23xP4YLqswiWWJsraLt4TKVw9tLRQruwxwBzEwkUBEWW1AtQ5DrG1D",
  "key10": "2rfPX51fR4mEt6vfTT41BDPvDLnhMzYVttkYw8bKJTD5UsmEAkNdU4zeF1urU6Js7jsMa3hJsu32a5hYNA6dJYiz",
  "key11": "7AYkHdTG8YBWjDW3Z2KbLQtKbeaPtVrFUQPFJVVirUjewja16PfYGenctTd76LZTMS6BzmDmiNdYVdiptrs2hke",
  "key12": "2NSWqrnEHCVJfhSmAevZ8YhCM4xuGeYMqN5T6BjLAf5Q6D4vMFsiTZRZeGamU4agp825hd4ycemVhyEKCPcNSPnj",
  "key13": "4g39itpm3tMqxjXUE2SuA6XHhHBXkocAzu41n6wfVAbPGFV6a1Cw5LqV8ei78zWeX7Jwgm7noZNrtkX8jGAW8vh4",
  "key14": "8vj7TndEHew2Vis8m6arCV6XZ9MmoMXRUvk7osj59df674Ke4a1PcSS5bxufgTT3aUY2zQ46KWWvokMRtxLcqzf",
  "key15": "52oDw29biU2DPW233njGMRw5ukYTVtkHdVmoZBEtuDBu13caqn6jmqowp5QQ2Ak7kppBvBeBciw9CCjFFSCE8rME",
  "key16": "67QLXhLT9q58atwefGxVk7BkrBsqTG2fDsDtDVggL4a5DVxUrzff2cgH8qmjECM5FD5edBRLSfmxBuQ8RahBGtH3",
  "key17": "4tcebgFnRaZPf56gSST7kqKjxpHWycNtcJEcPbP7sJPPej5bYZFJ6bi6BhmpCRbD8S9ngQZCP3Z9tjwFqZ77gQnz",
  "key18": "5GEUzAsNB2LpE329pXgZU3u56RXV2DRpBE8uTMzmBY9ZyUS9fndfULRYZsAK7FkcoAS4hd22EXXAH9wyu9dRqTns",
  "key19": "5iZRTnyWWSMrS8aR3Vkf6cZLQLT68oRKGoNXnWLjU8VvR1H6dao6kAqqboonsxFSNGpcq65dgrtu7s6beckRtbqv",
  "key20": "5C5z8H6yTEeey1az3VKkMsUQts38sesG7uP8Hspz9njDeJ8vTmdH7npEM3bm3GkzjoSp7GQf7s2ReNtsA9YCS2mJ",
  "key21": "4c1L5dWvJR8gQZphdbVEWKQafjEbEXtjKHYbKrCtUVRmcozUvi7iiWb56wWBSCqKtb2NUnCeCgrj3DaT7tboWvU1",
  "key22": "3vH7bkr2tgRcWyfndrwy1Yyz4biztUS3JaZG1V3t51EVQSpvtHz31tjqiZjKSypzFnYgbJSEST4WgtTpEWLTudP9",
  "key23": "3dZnbFVUfYwjcsoXZbRo9VzwHuH3nMxuCtUSvrwE8g6c7MbSCheBH8mmS36ihUeDys9z6TPYdLHzCeMsiGrDwAuy",
  "key24": "481GT2gmSGsUdiXdDX2dMjMSLiKcY816uU542EZmLkq8hv42LDQCYrP2a7ioM79Y8HmhAsDpU2zYuTaFKu7pm1tK",
  "key25": "2e1MJnjFtXhJgTc33o5GDbhWktL9P1kji2EciFfcybHT9qcN9tUcG8swgVrbwA32D7C7DA6Cah4118hAAPu2jvQo",
  "key26": "5SxHzAqF2WiQASHd1sZ4aXcSQcsQ5H5zJUMEM3v52ACfYVwrswrNeAgHX6fnqZhxkCkPiWnJkS5xaN6rBCDrSAau",
  "key27": "4Tyzr4s49LcH1nQVCfNqAksaY74zFMfiNKWmZCuJVgKhGV7QfGucdixG2Hk6NkvVermYRd2p1k8Y6LVJcFFmUP9B",
  "key28": "2yUnhxkpUVwqsMeAnJ74sP3fJ7jDkmw1jUDhEzJmBRnS18R1PqopzLTg3Zep6fNz69YfgDcYKdq3UC5WLCczHbNi",
  "key29": "3kzhvt3xc9u3VoDjLTjoEV9LmJuDJBPFC69Wmi7tMbKNrWycSVcXGcBsJ8UYVVE3a6mSy7anf2mgqSwRT4p9uinB",
  "key30": "35ms22gYiZTdn7aou65YYkMvp2ivkzSJsge8FMa32CZ1rtJzxbp1CBwsM73CsBocjMhLsKKUGVan1hwBqXC7V9YW",
  "key31": "4E6p47hHkKfYxbNsCJ7fJuLsMRgMpKJv7MBRsJXxmC4MNyVuNsDYFd8yXfs4czw1YJv5eQjYYeFaqa4eMnDqv3UG",
  "key32": "3K7u7MJJfp4JiTPUCwNwYsbpr6ayAGXXaXBbAKJMPV3xF4FphjhDwAR3P6X2QhZ4rWN4Xqkr2wj1ZvkY9keLKRdy",
  "key33": "4N1WGp2CoaMmrhveeFU4DJFq5opdPCeQLLskENF87JtMCxrkNuLX1BauTJatr3YvfwHbaY2JcdZhhpy7tpk7r2Pn",
  "key34": "osnqQdbsUjieKKJqDdEb4k3VZzz7t7gd8x8HUqKk7nABmgVmS17CuFSsCqfgVC3oBprC3KXM3wtoCgxjfLS2b3x",
  "key35": "2zVqCA3Qnpvasb3ifd9sFDJVqdsj143y5owXfSbtZ135LL4ydW43FNmS7Nz431cwX7gsUd5tQZc2e1LhWCcYtCVP",
  "key36": "42HsVg88Ly5EeAAAGVuw4tmaPkzRLogyGpmtegVm2uStfmdP7G8RYX7kCDUfmHUgo6Qc4SBF8Ts5NevoNA7HJVZW",
  "key37": "5ivRFh83vFi1gFwR6aMRzHtSHwSGKSGm4XrQQtWzW7fRS2P4h2dkYvEQr5NpTEmADjW5fghTwS9sigiJausZwmk2",
  "key38": "oyfGqdrTZ7wekEkWqvditafigwskEvkAPdYooTtubWQM11EJktA4oZsc6XMHcYNF9pdv9gvuYTMEXDS2pBhQJUy"
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
