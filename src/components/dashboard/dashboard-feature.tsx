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
    "VLd3N6hqPNc4Eyg22Wz7a3h3m56CpKJFCT7KeUkqcPzCHoT1eba13fUVv6vaRg61eoEYbThPHRjWdqeLyevoAB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QtkZtCbZ9htvA3wyL8Gs5FbULMUdN5GidSjpwn3H2dHizbaqyMePooS8h2BqMjfA3Fba2RrXC9Zj2T4DDhAcQg6",
  "key1": "61cbYnhc8mhCyWgzXG3b842jFC9eN7mrS1XTHYCd4cZZysQKQ3jA15szyRxLMvhz4Hv1YiEZ1FTqb2wXKvUpL93B",
  "key2": "J3MBQmT3MiX5JwoZmfYzRZSRXDhoL22tqVTanPDLC6iXMXA18G27o46QySYmPmxQf7eDZ37Brnxhxw6kCai1uWM",
  "key3": "3vaknEHcae3me31srqxE29dRbsqwG2rpWqwJsE5h7q7xCuFQoTxYkm1aBmruuS94aoCGyz7zzhdQDv6PgyWk6DtA",
  "key4": "JMkerf7Nh8gnnFdAi4TMfciJxxm4oxH2uTJ7oFhNGxFkhiNRVT5bVqHXPScadLNvzS2nG1dcvAz73arHgkK5gLJ",
  "key5": "4sNq3FWEZ83wAnHXswErorM3CVhoysfAxBXtSw7f3p4ZQYM9M4BGBMUa8zz3myHnST4v9Re2sp2yyVne1pH98H66",
  "key6": "41eF1rzeie7VVBTYQfkvnLqtqVVe2aK9R2HZ7unFy8tpQVbEq7UKnHQgnM63s4LKbX2mMYptJ1HssR7TnMiGEEw1",
  "key7": "tUbP4gdWRSrjM7bX9rwsctdMXPdawbf8AcyoLhbF5KiaYdVwD9GvUS7yRCFU4Mxaz9yoDmDqFUeyqG7fgV6a5Ak",
  "key8": "4jhyChNY2EHK39yXtrSgaMMFADKkySXz3U82FKKvpiYf7qqgv9nHWJ3Am6rAmcHfm1GD8iMMZMJ7GDerccPWtMCQ",
  "key9": "547kvUVPH11N8VXoEjaY1v3Hyt5sRSrVDCFVfuRe8MfPL24BdPzw9YgusY3L31KVZiAk29tzMPPYTtuFT3Dcyc3U",
  "key10": "26swqbaUz5X9dTYgMtpEoCcVUWuQzvADUZpPCFkZKzow9hiyrU8TsSyNsPEMRfETPWTj9wkSUyAcYFBUw3Qur5Ft",
  "key11": "4AMyUNotYUMaXD2kLL4a29c4EtCQ4hom3EiiS9Au1GSPxE49m6KJRghz7TtSWNZXMCxXQui1zxvVaqqUfV5Lzs18",
  "key12": "53GehiKjy861sYnVFgcD1goPPPKzXYnvC8VRT36TWiwv1EpA9dDBk6HXzi6UA1xyegCjsjWLmo4tuCNQRt67sTVm",
  "key13": "262Bs2d1U8s6Pn78Ra5HM4Gng6JEgr3BiBJXZ6woukz2Xtmpo2CyiyzW7YqeqTDBtTaLs72J9SeKf12xm1i1ma4y",
  "key14": "2knYhExtVVTYoU156Fa84A8wH5pqW7FuYUoXUDN99B7YALDWhQW5EJSKv6d2fYqthaSTtjP8aW7skyAyuN5An9CH",
  "key15": "5YgTgJw6ET3Xw1z124o2BD6r3niNKmMqm1aoA3CpA2L147LN29VwYke9jU121cWf5Xf6HM5hkjavhaurzzHFhUn2",
  "key16": "2STojuQ4v9dGL3gxwHVEWoXZLqAgNeKRpnxLforJTnjWZLQvD4de4HXYNdFzEAoVnfvGRBVaCmNyUVkMvJqijRPY",
  "key17": "2RUuFLEJWpLxbvFK9jeF3it9nzgeEj2xEh3hXh1koCDgJeYMSYiw2UFjR8X5VGNMw6xwyatu8ei5c9cnmpPAeMVx",
  "key18": "3VQKnRteSwFJVtR3H5o7v5qYstjzG9T4qZqCSt4vMv5s44Ma4qvAda2o4fkVyjKJ99jeXW7Y8NtmPdsHRubLFJrs",
  "key19": "3erG5wHWsgSZv2c7nLh1CfGwCdkwcGTXK1QaFZjmyB2MsbtvxiBMMg2w9avSq2FDMVoywuB141VqgN5nDfKANUuX",
  "key20": "5rf4ys6ZoYVfKuoWBWrLspHqAotFUuCSefbu4u8ncBryvkjCPmGF7Yo6ybAVgAWJmu3shkiGBKVH8Pzt8AgaYsZu",
  "key21": "5qK6BjrskFxbmQ1WnDW7TtmqALYLsXaE8VxybCYHa6VdS8LGazrzCygvMyF15TLpSnNoxeFTM8HLUsKsW541TmAq",
  "key22": "3UAziBJeHo7jfRD9sf6JVQRTrerGjWC4wune5C2xuYPUYHtcieNLYC5gWZWqH4Fps7yZK3wVXYt9dXLLA1Ww7NLC",
  "key23": "2HA887bsUwqy82HBMc6pvH3UBddq5HJzoyVp32vwvojPuD287cArUgSnJEKRX3UQo6eCgXvbGCJ4bw7rWkfeSGCS",
  "key24": "3syK9Hz79Grm2rPf6KWnnCVsutREZr274Wapknnpn22YSPhcBoEM83ZAYd4MfgQZ48Pm6XU3dkcxM1crnjR1KV45",
  "key25": "b6GPvShVur2Qc7QtUzeu8BCh9Y7covtoXRf9LUonUQmrx5K6RztojQLGfQTeFphm23JbrsnsLrTvq1uZi37zpvJ",
  "key26": "4Uku3ikT6aGTVxmDRwhw8f8EqwKYkuscg2Q95N47SpB826td8LFQ4KqYjkGc1xVGqhHhJYiFf1aLEsM1csade8rv",
  "key27": "eKLKN4pJ6zbqGJ4TW674ozDjbtjgJ3KzH4mxqJr2rXaAr1dyRxBhmnkaqQNFtKjW9cTWrxYZ8LtkydvqwSsjaNK",
  "key28": "2YmZ8JwaokV5wZYfLs6zkCCJRjGqiM8F7UXXVXYGdMw4DRrh6UY4DB5TtYVVR5YZneaRwMY8UJPqRAG2DuaJjWLh",
  "key29": "4Tj4Yo7sPyipEDXKEdKK7CAH8USWVZJtgPb8XdcnmpGmLoJzay1NAuxoAaowb1iPPkU8Ua62MtRnMRAt2xBnDVgM",
  "key30": "2SAcKWNC4zYYKW3wX6dQH6AXmVJkeQd9RTy5NTjDiCDRqoYuJ2QqT9GHq44BS4wfb8RdoUQajh1J4WusYR2Y8xyZ",
  "key31": "2EDcMbx4yUKsLYBZhS2nUJpzXz5ohKSVhixay2XCfaMqfKs5YvNAdcDeqeiJFajWWWQ8Sj8Ge57MsX26JLYpVD7G",
  "key32": "47yRcP3twhgYvjwSPkBUy3uGjhpaVFNpgGmwGh1PAMFwU9yX8o7qQPZEBmr5nKAwZZmi3SSU44uzuaBYqGkyvKGT",
  "key33": "AENSvtghHiWJdwD8ZyGLcXKSjfej6jeAiSt5mzvdDawhtfrJNDtR1vcz2TL2pxE3C5nb6LiV6yfck28xh9D6hKp",
  "key34": "4ayWz7yBQx91urkjoBiXgCPq8pfB9ffjrBxJUK65wC5FvPuHB8Aqici2yQH94Ja5z4BAhVhcpuBeBSuLZBMtGfyu",
  "key35": "5YFH4gqaeYhDDKXJRgaok99HCFCyAmKhQvhSUVCVUrZ4ARcikWiVGLpCnzVZssPLVEe6puGsFSGnsmWHKzLuXiqJ"
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
