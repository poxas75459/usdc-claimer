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
    "iHVMbTiQF59n4SYo7URr8kEZUFgsPPE6tnZL6qQcoiigiNPS6n4oBVUxVatSQWSF1kiy7fy9vYxiHaPPM1zfCjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wYnwb7dxeDXg75j2mexvk2Lfa9XYPFCucLRtFReSLeBhWCV7Zo8vfegRvVXV83iiviH3CHWBApvbFRsNG9B7ZqN",
  "key1": "6re1YuMQxv8Rj7AzXz6zbmXtutBLBFor4HrP8WEpVYnhVPXYn2UgAMXJ753PxUUciMcHodMDwRPJq9omgju2N44",
  "key2": "3qJ32PWmst25eXVAjVr3GieU3HfiGfqZ1EhzYJgk31LZk333FrsLh6REXqntsrCwvuX4sZe3jcDmAN5zefWusCpq",
  "key3": "4V6PCkDX4tZAUXpM4Pch7gPVtQK7qmb1hNPzMyg4AdakjvJcTZBe2a4sKfEs43xqf5hxqahhfPHCN4CoJz2kAYja",
  "key4": "5kWwopKBiUkEeZLwLAYmGMLkrCnK7k8MAefHD16EjhVMNx3YNKApC2hT7mmxQpE3mGU2wd17zp7Luf3d5Rxo8Mng",
  "key5": "5hvDpguoU2Nuz6ZC83FJuDsPSGwgKZHirKQCRwSGRxxojAbA9gwEVfok7qFtCLVVrTc1CHEi3P8L3QV4PV2bD5dd",
  "key6": "5DaspybP1x58RdNPXWdnfrvVSH9cs5gPdNi9UctLSciR4pBcJ7RR2GHvGjixLXxgeLE81vNo2f25QaGs3ieparJ2",
  "key7": "u6tQ9GC3bf2joEuAb5DtwNX3M2a1CYXmETdb9uLTPKJBPvnKzKdDUreFxN1uB1wvgYqbadZuMG2LdZRAFQ46ioS",
  "key8": "nxGPiKygd2mR66sTswAFpK3xazU4jADN6hszYPgrJFwe6dzAnxZTNoQ52YP5REATPAwBWmScudSFuhXwrTDZq3x",
  "key9": "42herpBPJ8tz2KGakLLbpPvCWMKjmHJj7nyKu56CTZHGgCg3xobNog2zbq6km76Dem47Kndi2qwB5C11XQz7ho5e",
  "key10": "3DvShG8vYvwyq1CKXS5vTuQwoX7TZS79K9SjGCMgDjLhH7sfY9kQdyD6sDzwRWpFu85Fcsq2kESAnxtAvEnMnGFn",
  "key11": "3Rc4yahxDDAjcYPDKJGiVhiLu1fuCJJey5GWCq1ck8mnu9poTzALtyE417FrHdqtxN7NqnknUCtBKWbkEq3VSVM8",
  "key12": "39tyPun5Bj5dXYgTjLDSLpLZtkqy9qpBEsUCbR7XUAXNTyknNvHJ6g5mNHRRbVk3S89UWRAXA6ip4edrC8jLc3mg",
  "key13": "59HQtKSpkpEZMm5duMNkvCRSh75Sn3LRVQ5Hrsh4syaxaUXWqzUdLs4zgQxWCHJKVEHXzfEdt2AthfBzkXUvWxNF",
  "key14": "4uTaPuF9brDQWm8QJHwAceuHbjvg6bKLqjMGEndFK9tpXFiUfs7XRH6YcPndFbHzSfQsq6mANSHdangmZJiuDHsy",
  "key15": "2wZKGtuKup5HX9BcAsbADGBMQvaE4ji1yr65iUeJP7AxcDYKZKm2ACkmZTWQqtQCuNN6C6B7LXZK6LNZkyEpMcuZ",
  "key16": "3iTbzGqjcNGcNYm8pVLUvFjACaC1dfyrAzaC4fns3Rd8zV5SVuSSpFy8QoVy3JuS5JXoKXMvDHoenKYvdMjztAwU",
  "key17": "354292RuF97qyuH7USAgexcPG8AM64ud3hytMbLCewYgUTVN6jZcidmHoXtUkbKxKJGo6VE64n2vFnjHwcpvmq9m",
  "key18": "SLj9y7hbyexcdpAV46KJcbrohNj1qu75FpyYr6ikfJ7r3A54sqKAQ6uy447rmNSNoHDBSJYZ1cQ5YM4TgTJ8JXx",
  "key19": "3K5D3vNGcpf9L8stEj52EkuQ3AYrXbiUj6FEqNzswuNzCHxLRLrad8yDkee6qCtZ8ubZMCUj8HbKnQgX57d14Av5",
  "key20": "4V1RQjLotPinfGfQ7whZcmejEYDCveZgXfniTiEZrT2frqFUEKMURJQQK2JM15Q62rNp8qDktj2HuLuLELCxHmWt",
  "key21": "4seQtJENmZJ39rNVDm4FEa6Yh1xYbYE2bj9qCEMNvqDp4kESv6MfuGMG2htQEnnnkrLFhNhfJQxGGgCkCBN1EZjJ",
  "key22": "3LNszTuBWmVpa7o9CJymJN83psM7R9WKPWrte8TBzP5ZaqpY33xvBvTQoLHxxMZaVjywBCMoT9xMb825zVCyRaR8",
  "key23": "4U4dQqujo1nzMSMPeTEjfdezZpuMRwUGd3F5BR1tNvpsJnaZUvwUC7EdsUes9ZvCFWRKt6WdtyB3FVoUZXvVRKxk",
  "key24": "zMBvA5jeDtaZQdhj8hje9Z4cmkJ5QgqA896JBBhKDD86ZJH41yxQbC7FspWaygToQsgU8PbZQXG6EKzHBe5eVLT",
  "key25": "JAZiS6Ffu1s7r5bMoSrGQgE2i8aeyivxRXsRk9VxwKWUWjbc69duYeV9eyTUkkpG26vhXpdY8FNoLE9vhPHZ4fN",
  "key26": "5QjW3vtCFv5aRSqbGLXBU3M599K3mv2NL4exoQwVKz5Y4pmUz5gKCfCUjo6N4dvW1fSb6vT4Q236fVxUhR2bkX3F",
  "key27": "Nur4YU2nqqubwopnnXoewKjwGuvAG688khRV8kKjw1oXjv5G7nHT6vo6gTSZRki8SrjGisbqb412n7nwJ4ebXqa",
  "key28": "2aY5UUh3NVoJhDuug5cz5q1pvA1VTWzFDN6qCuo883AGoLW87Si8c26R6NeZjs1U6Wb9c8d1r5zPF8LKfmkpWWRz",
  "key29": "3bMCJNQNXrWSvKtEZrDBXSTZnQECVyzaa6D8CqbtjrtJYsLcpypSncU5khPvS1kGaC2t3G4DeCpbpQ3aRGhuqCQ3",
  "key30": "2TbXsvW2ahPHYsBnN51CVwxBqi6kG68A8vunez3fYJMEFkcn51zxVXjE7Si8hh17Y5mxcsbKcbw8gEvjB35AJExi",
  "key31": "4JqEEKLAQNttifwZobr2bpPNCEerzDYxV5xymvCwZxH5kUzh9X3QxiaNwMHyGAvEVNkkYJPDa5w7qCyKw9PKmckn",
  "key32": "67SteQFzBXNXH6qP5vtqWoT2hVR7TFr9mqCpMHmARpLnEqTjpLEKHFLonWbHEFGQUedyrTpRAEf7ZBexhgyJ6fsp",
  "key33": "2pYTyUbKprKPgvznu17RmS2MnvV3SXre6tXBcxMnAu2V4CCBGzmw65kV65WwYH2DvGfrybLEZWb21KQsHfmJBFpd",
  "key34": "2zDynuZ8sTFHWTCdymrN8RzT5jxbDq4j56LDyHHHjgFuacd7FMMzdhWuXRgVWPCkWKd9SWRUC5bonyLyrMhfer4",
  "key35": "4ygbXLgyozQeRY8Pz3Q6XeCLzj5a3Pzq8RfwduhL43J2yJAFLdBx8WK2MhwbU4K2Pmt9M3hnsSXZSwvAvSZ8Mhs2",
  "key36": "5uEfHjeugACzpyzBiuJRMhu7WHMeMeussXv5UYBsybu8cbzVSygeFfagTmskChZuYNW2rV8gEV2mHqn1rjZ1RYyG",
  "key37": "2wff3b7nbkMH7CGyVmksfWoPX79PjAFBmdFonNtj74HUEHpxtq8yZmw6h8u7xqgm7HGN1iv3Yod6btmV2omSzpmm",
  "key38": "jhUVXg5wfi5dCGqqyt3gu98t3HvdzUqWuzYZPPkQ2X7PUfFPhvFipiAwH8W9K9SYZ26fCgi4g6GF45faY7u9opw",
  "key39": "2dtGCcTZGpQibSbfLex3TTwJMDpb7XYY3nTDxaowZzK4ZNTAtveY6mcqR579TivL3cahdrF1Qk3biqNiFaHArsn3",
  "key40": "4mfAxRrEfKyLy6A4zhNr2KE2HPZ33oTkcw7xyzfWPsrfero5NUjupfwZWPN6rLAGK6FMtxnqdytcjXHaXgvNQTc8",
  "key41": "43waJHY9AbVdHEFHLyYB2oErmPtPtBKmuyvumH9Qy64adw8CnoG5NFcPn93i4bsdw6S5zMbJ4dC5isVg4F2uuet4",
  "key42": "EYXTqaW9ztkmHxJrJSofYcSHK4vbwdVquA9xTTooGPeXpKwsNvFMaYPaUL2SCYreFWvPomQPmdxJHjc5d8cLPqS",
  "key43": "2z4KyiZsCTzTgGs69CzrDZoEgxdha2PxFrTGmpfTVCUCs8yZpcpgiwPvCEerkVN5DJygUbsT1zDWpoSiNFgvHbeb",
  "key44": "2fcRCBsUYXyNvoAYKwHq7UGBgU7aKPZVjpQqVJNUigP4zHNdZMQKx7wmrWXhG5snfJW3wR95LfNcRpSiim2cbcQy"
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
