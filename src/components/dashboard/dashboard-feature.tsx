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
    "3fm3xcG9g9SBW8xznrHFABWWHAadKE8Rj4xLuiza4hvNS4Qh6CaWPrZq9nMs43zb4QBPihxaER1mvyFac6kXibVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7V6maVxKx4Wms79kNWYgwpsv8gz3tHuJRrgN8Wez7aTeX2Hf8HBNHhQzkGiromjLs7hstusTrePWGSUcZvN458",
  "key1": "3FaqhAxNAaqusS6W1r4vFQn2zDnTm5JqyeN99YadnXo1L3qYF1PnkEpMy77j3XpaoWMQFYuSdJu7mzUtW9mJG8S3",
  "key2": "5HfyGAU3gB41igUsbYNKzbZMLVapLTUF4ZdmFh4dC8VvjkM4TLTYw7e5WeriuSxHhbSR7BNJjGZPRGNLwThk7p2o",
  "key3": "XEsZU8bsXYecrXs26Z2559riknwQbMCcTw1YwptaGCKsd9KuzWqV7BJHbYGABxCKRvUTFcnnXBeF5PPfSqoC4Wx",
  "key4": "4tqpRm1JS2dqcH4b9kNvUxvEmE28KpwyGbnbnVfAsRzaFwKoK7mFiRW3ZQHGYgtNa1sXSyZA7jpmoQjyDpsDYsYG",
  "key5": "FziLg1F4SM3RRUVHmunFqpCBG1KjWcBezMJw8LZjWLhXL3LVoZsj7rDgUiNCfZLzhMD7D7knXLVg5KYPVUwcJAZ",
  "key6": "2eMeEsC8fRMmbK7uZmMRqFanbYBNtxsZExpKP5HgJoikFmy2F8WJHqZCrBNJGLAbsSsrTt5yH5B4sVMQ4N1WRJqF",
  "key7": "5JHKAAgFS6JJX2wYjMmqHFbrVC5MyteAXiTiYwyewZoTw7DetcLxiUpc9jsq4NCh7AZURdyknbCVLJJtMKtgaFY3",
  "key8": "4jLM1QokgC2kQbShXx382ngRbCXbLD6WxHCGwvynfnfYxckNnQHXXuj3H2M5VAAb1GeaDU4RTzDNqwFV36gP73Go",
  "key9": "VsaSbyJ7JXfPTNDWm6FQ6w8gxFdg7kbdtPfYddguK3WxcEiMyRYzB43foVoUgWT6DzhaTGPeqzhQMjNVpWV9LEH",
  "key10": "3Vx8VmqVYqSQTmV9SYyfWAYGM5cwikLEAAfQ2eq3FHk8SzZEYGNHm8WZfvrEsfftiD2aKQ5bgi4m3yAM7beV3maq",
  "key11": "3nAeW21eCQ43wJ4LESckZW9XqA8mRyVqUSBvFdSNSeEW9Dc3xTAecd855aPZ8v2fhBytqvEedFpGia92DorNSK68",
  "key12": "5ZYSZS5eXFD1WRmfk3u5h1LiobJTpHnjBskDHRX4VQfVo1NhNRoyyYmKZSDxMS5oZCkAJ7f5pjraD5WsWSaZSKUQ",
  "key13": "4egHHMEJ6yNkFMmgQsMKFbUWUzgop6X5pNV7ByZAxMaCNYwf8CRmg7EcTW6iKWHkBUjQocSEeyH4rpfJk53sgYEK",
  "key14": "cLfhPHW9ZjPFfikXAAwCRK92WVm8vZ7TbbGCtd8eMbpYSLEihUhkoks8sT9PPgGosXSZsYCXQ1DLtxqUEdx3WxJ",
  "key15": "5dg4ymn3vVTwKyMD7j1G19pVfZWLXSYLvtkYmG9VF1ifSE8mHt4DVpJU2JFZEw9LaUEhZMuJJDNUCWrFnfh4bpiA",
  "key16": "47NkYcB8bwLTXepLzrR7sm3dirsmeAyC8wzh6fw3S43a3Pp8Zy7qPBFmh3AcyqE6GHW1UKuyBZ659p5Br9WiHPKT",
  "key17": "2SCQGcx2BsQ2jP1GxVgKRU1aEzzGFZ1fM3WNWFdLdGNnoeHcnEyBXJ3vhTKZVmJ1kkZPZNsouvgNhhAKNUdckQjZ",
  "key18": "4UDAvV1qkPBH5PD7pCi6HZ6fGiwWyFfH9WzQBBSx4HmQB3RUELEfMc7yG2KFWQ2cePjue2RuVPSkruf74oxKTgpw",
  "key19": "oNSAnGrF9VzbPFt189u4DsQL5RhD5vp7vaioRx5ncwRJVpaXvkzvt52M8DicAFjjk9RY9qs2vgz4HxyKUKd8ETi",
  "key20": "5oYDv8PmQevVoQ8KSdBNa15WEEANUVN3ZqfguSyfEEBE7BY8iMBBCC9tgpSPaKk29cMrRvBEscdK6b494bP93oxH",
  "key21": "3d1Nt6MsB4bjATFYDWJ8e5j7C3uUhn5m8ET2GSFCMo5NxQyQ93B5d8DAUyT76piAyYsH6ecQyEq6ejMLVY6Re9AZ",
  "key22": "4PJDva7ARafqS5kv9jP3xvSLLY7R4BdFcFgvdkVhmrZ4DBBFkVpcgXPwtFH6bkuUty8cW3MBCkVHWaWSomavzF25",
  "key23": "21PrhVAhiKGpMKQwEeyFpWML9amiZ3Er9iQ41UWcN8Vk9yhUCaoV8taUmemYGLKas4MJd99i2HXXw9KwvGKNwS4M",
  "key24": "4uvDkHjkSsT5fybBV2k1XiLpBRDhfFyU4sDNPmdJucAAfmjqPHeZrsbRXEiDSEbtrYHzwxeGXEAxoJuVgMP8eDds",
  "key25": "3HMKdxZNdwjGyEwaRAyKGjHvZvUMCbNbtE6EH9skTQBqzNqz7G1wyJ4AEtv6uBwFgzesJBU2H2K55CkX8rsf5ccb",
  "key26": "3iczsBi56zNMKrakrdB5pRAVeQsrPFHnhAghu41Lp3JYWDQopw9Qx76vVhVQWqjEidHXydiboxkTMzx4Kkknc8jM",
  "key27": "4H2Q84b8HEhydrNKrh7Wkaceneg7v7GrPMYWErYsDzCPvDNuBj1dp1Sfk18YaKkM6kWutb8vSmPehXpt5g1S4kkP",
  "key28": "54mxZNCuiKUDdbg1fU6zPLmChvZucjG3dFmF491UHLmqbiLnaW5XxpdLaUghrUz9xUdEudbWkdANoDqryGFe7uAV",
  "key29": "3jYQJ8VSegCkGf8pEWtQYXoykbBMKzgAh1vad41YJjqWoAoGGS6pzk3SctTboGVHJuvYjD52RyWjAVLr5qxsrkiD",
  "key30": "5urs8qZXXrxgeCbiF5orhoVDXv3CZQr4tP5rRktuFtsUhKdUAHvikTrccck7reHhKeU63gzNXuDC9MrDQK2VmntN",
  "key31": "29FxJQPu6ZNPHRiWL8vzBwjmcTcv4r9bCxo6UaUwJzusvjUa5BdxMQ4VtRymJ21hWCRWCeBWhq7p7JehjNX92dc8",
  "key32": "3zvmACMmDbhJm5L1wHj3QjgNDXZUuzfLojhpF32yWo3JMouCVjjLYtPKUEdv8RKQrWC9a67euNCqFec8vGNMxe8x",
  "key33": "4g1yPMtNivgc5Q5oGeEeUW5ni8dGkJWcrisTPc5FzexivZCwP3qanTf2LFici6JbbYkUxWb3E13KzAASQS9xTvqJ",
  "key34": "ovnfsx2mF4in4v1sV4wPX1kRhVN7pHcWFaHfsgriUJ3bgjm5kotd8Toatz5jiJP52o8BnF89EdW4bA4XFnFVVom",
  "key35": "3GvoYbF8d9enQWa6QVeXMaqAsoDikRycNS65n4dk4grGUwkzgeScfaWAGn2TuGFk5vaUeaVxsiyRRXX578kTrYxK",
  "key36": "4dhEMvYwQf1ebT61jxBnVeWAQzmbMpa7iddSxptNhuFYhPU1Kmx4vEP4NJxupVGfLBCey42nWLnJAMZyDrEnz8Ey",
  "key37": "4yFS7bs7TvPeySmURT74TRXHATz4Rc67Aash8yjhrRLsR4hCnUt8wtPkstv5CY2NXUBrJkx1QYcoVUNDBv1AWuZW"
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
