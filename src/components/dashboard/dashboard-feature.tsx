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
    "3ufBaZC2SqmxQMowCqMuQ5mc9bwbTXoAWrbz7ZcMdh1EukVYgmAPMYWEfEzX7W4ApdYzgKdw1ZiULu64K1ZubbDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZ5mh8eaq49rw8zyWiuJHLfdkTYPSFVQHDYQ1t8NCt4QsshfpkYMaygyFDtjXNmnq6KXszsWWoJdByhczSJvnZJ",
  "key1": "oVYpc2HLYsdQU2bdqzxfgtJDfeAkG2Sjx2aHzC62FJXjBSdFcXU3uNH1bqrmnN4tFtgfyi4dG4gbJYzPnNNuyDK",
  "key2": "3zhYyqZ8pSYwKH7ETyYKrJKzTUvV9G9upQCWH7fieRfdS2g1GeCDyP5BLua97dB8H8aYpqZSiB5kHBqrbTmCtX4Y",
  "key3": "3iogAc4MuU6M5GYDyMNdvHAA9gDgGPUkix7WemFy4rAbAjTytfe9uzU4678a3S6Nw3dvmYk1ygNpRtb3Szt3EiNq",
  "key4": "31L1UoP9QNgW5Cvz7eQd9vFEqmrAFQfWnj5akWSDhuaan9Mr5CgV8DrLDTvYnsXDSKYdDc7b9gVjkY76rF7qP8Ys",
  "key5": "4WnW6QRsfqdcVXRu2bpXYe6zvnv7sdqobShbGZXFcMZdEVzziuesM1nVd2KvyAmT7iW3M1CaDHc5JMx8e8Y9NEEj",
  "key6": "9z63jq2NW2jvsgpK4cnkAai4afqWjmhduTyGkAWXAr2wyuAqDj5pZBMHXjfX8A9DTKGSM6zJtNDjQw6h1vnX8x2",
  "key7": "3i9kp2UkgKLijGavqNk8oLsgma2dcvr3roe6PGTqZoLNabNfJECfG7trS2t9rbouWurpnYapmAfvkfYrDw9UJQNW",
  "key8": "5FCQ4VdN4eoAY6W8VNr3jaA82g4QE2XY6cTdgehMFv3brEGtTHwY8ZRzUXpTDWL1yF9ogW5WKc8p4WeA2wK1Mbc9",
  "key9": "2cRopncYWd4gMQncmyeH2Vrm2qh5K1GVYuYmDHKZTESLLK3ccNsq6RerWY91y7NkkyKXRS9xtjm82Zq6FWUpNi2g",
  "key10": "23HQ5szh1xixp9zTee7175VLFJM7P9GZkxV3ymHnuAdWR7GdpkW9WffMmw4dVwC2kVuspnuhGSD5GyuZd7cseqJe",
  "key11": "3BqmSGGcLyC3P1hDU58L9qXyZy9u9kL3grjUAivhyjY5FwfXx9eJdmcVhLi151keDWR3mBh37vSUP6fmC8JLaJEB",
  "key12": "4zQ8xWSs23BgciVNjRQNS1YMLcpL5DrWmyWKeFRDzHfTG8njkTtw4yciRsuUpdyVujEtxjov2nN1VnCcwCAm1Aor",
  "key13": "3dPWaEYkvLwk1uW2UJFbY1ambcHNseBLK6x9mKKAJa5aY1G5rKEzULsfNRJ95RSRGABQ9yBNvbixD4vgGe7k9pQm",
  "key14": "466H46S4TGTLrmAiPzBHNsjoXyHpWPkKCW6vncFoLDD8fNhbPkwE3mhTz8UTKSK4Wjja3yHBf4qUQJBBxcJZLhm9",
  "key15": "Ct2kWPkTjnwgTwMVF2jomMBK56sTRzMpQxdqazVweSF6FCK4L7FjGfEwAKznJLyypNAc3Rd9k5KNbizqhtZrRDa",
  "key16": "56ZQ2sM3QxsBokxvhvC7Yof2A9ip9boJ43TmkNuJJugnPsPeiiY81k7hu6HGmzJWRk89CPxf871CVVSue7pWtm6J",
  "key17": "2NwF5UibSZwqg6SavVQ5Aw1ynjRQC1JCP2zBKzvaHeAKgRBw8Xk5uXKJmhhmhLiqEyfWQMPJ2F1E39t9Xww4Cnrt",
  "key18": "2JqJRP7QVhpMTSx6bFJfYRQSLRKNjMyCoKzFhuHYsQoyQHvmBLnvC8karT2LrawF4iHhyrwpTc8eN1LSBC9cZyBC",
  "key19": "3hDfi4B5YNUh2nue1tQncFyrDQRMC9VYiNjc5cDb9PYCTfZsc4D4M4fi34c2UMNtNH5xDGBsBoPD3CK4PaaZgh4j",
  "key20": "5ZGYZF3vLAuhqDRZHq6TpZTpcyK3pCjxLsm5J5TFRpJyBaYY1CRVrYPsdAt5H9SzDGgVHyqayA7jeF3fWsvPKg32",
  "key21": "4r5DLxGde6G62qNWKnk9v84yEJ3ba4j4g5B4JuhPWYY5WKgbuBamdhWXPHAZgic3fdFUEC9GCC8Xao5du5M8w6Si",
  "key22": "2yTW739M7NtFP2GWH88a2sA5zdgcwVQ6DuaLbnMSJ4zbXfmawKyaPuunM2tbPEZjh4tpmdhu7g26dtEPaHDjQw37",
  "key23": "2dpdNm8osPTehiE7c2CkaW8B9YrxeHMxi36EjiJMDosdQsYwDWawf8qEimA9wCjWg7ubX8iAX4an9216TnGwpjkm",
  "key24": "5zP7vXixq9gEX7mMqHrUsWnKaK7XMEYeBg84jiwzgeQrP3poKYZAZ2c8Qzt7AcxC8CQri2cLGYwLbtjgXE1waxTG",
  "key25": "Dgz25DGEJLp7vesgCmeoJgXNcBZxMCypGVbeeZwusvmK81rFL4d166JCy66C7PUn7TWFqZY6Xrmqp3G85vnKzjm",
  "key26": "4KYPXABwvPEp3HvC7UyCtdxyhXU7Yo15B9wobNqcYoi9Ni8cWcVVsZXuWLqmETPMChthfDdZCuvK9rrruSLi1u6B",
  "key27": "2Z11ScLb3sB9PCHCHvR1LNFH7fLXUWgGxpUSw2j1CmpK3RzQ5iW3HHtgKHZJ6m5i3GkXiKHdZ6Y8HwSabLYTwNo8",
  "key28": "3upYY5mwSVQz9NjFC9X755x5veQRV5WHEn33oCVimbcL1qSDvkN6L8dPDKCGcZ3duvfvvMzhjBJLoVVPLoVTnGoc",
  "key29": "2dGi2RpvbWqt3dg6v2qzWT1Lr42oRHAgCdL8QdmUeJ83ekXUrcMyzf3n6mGgsb9quvV9CSfd8e14rnwL2PUNF9G9",
  "key30": "5nWmW2qBwshf47oGjhDjuxq4FquY1vv6FRtyaPJPZkFmnUFZBQMxEq26DWAnd6svqjc2BUwJmRxjiRs8Ri537Tso",
  "key31": "2K7U2S6usrDchQqnqZCpFoSAjnvrvWiNEfGqiayNfwyJNsVvWuybLfdg3JwCMZuwH6EybzfNM6siQa14subTKeXz",
  "key32": "3WX5VR72YbVG135ZFEZv1nrRHRoyy1CkimvmWjiFhR2ay5y8opue8g3vS5LqS3WNwdYVPoCv5HNZv7zsLvdfRqDD",
  "key33": "364ciujfzJKEW2fisaEwisZUPkvBgG3Jz7ehez3MibLpcyMyrdemsxFbEKmV8R24bVgZDMbaahV4uLCbz32ZzzGj",
  "key34": "TQDSrBGzuszPNsdYReJp1BXRH9uGSaQsZHe9sXJ2L6io1fxbVM1bg3TQJ7sHdY44vtaG9NX82d4Mdc5P2X3FB6C",
  "key35": "4gDp4NwYKf8TJWVbRw5LMmJLySmbtWJRvTzkRg1PKEpQjATPkTUrZXdBN5NbtsAFketoqjfpCPWrVRtD8SktUdjG",
  "key36": "3vvA1QcX9Da93Axqf65SNay82pBhkNBkKX2Pvv45jBqcH2DnrgLePVDtJBXCum6Pf9CKBhgg42gGUrbXwA2DjQkX",
  "key37": "65ubmnyv3SnTpH3NDWraTB8AgaFHSpDCEfYYNJnVdjSQxcdBn7qi9nkT4eGNx6gpYiD1GHRRPQB2yZdALm7i8dHL",
  "key38": "3Eb6xmwAhYRnqGXWraWNiTZwiVcc2xknXrjoyAacHeyWENtwfKUiwJeBeJH5Hfq7hdapDL4JAixxJ76jb8NfPJKv",
  "key39": "aNidhe8VH2D4sqBwVKwGoPsCQvrucfC2C6WFeeSW28DgeDkCeXG8P2p7Schv3xtnhrAZoj69j7T2i9jsWfrjHbC",
  "key40": "4wqjexXjqfJ66tTAjrit4Xen9KXAC3RdiswrBEZmsCgKEFJ3gZPzmgiLV5NnFV7gKh4jGFbFQ4v9UbnMhovtvBAp",
  "key41": "QSXz5hD47xWekQ6mhqbkbtfBupGsC4dPUqdAfUiqrvMv8TvEFxrnQb9CbUXauJq5nUBmPbAnbsxyg294g6qxDw9",
  "key42": "25gXcG8zdcv828fvyAVQ52XX4yZa359VCmuyYySA9hhzHcGvcjLSZkhE7d6DNsh4zzrWpD2imXBuWuQkZmnise26",
  "key43": "4rVyfggYPfHZCXp95tn7gCfpAU7X2ynypPB7d5iUYCejwPQfVSbJZTVR4eXF4YuYd51EuaqA95eHVsBVp8h5rFed",
  "key44": "2ik8g8rzQdcrt1KJDE7bTcgc8XHuBk2oTpbNPjTPAJcHbq1LbxfY66Mj6cZ1NzFzvqbG54deAtUdbvT3SbCS7qC9",
  "key45": "b3zaUJKeELfuNiWAuhctpC6xJp7pvvbhXCBSU4QRH5vXytHKZ9mNDHBJpnZK3qwbYnHNEZs8SFbP9L8hfSrmRo4",
  "key46": "5EY3XTAy22CLLcErxVWNcMEPEw4Dtd6JTrU88caVosV235hFvfaUtwd2GW4ruwahLukVcqfFamZBcgHUmA9LEKek",
  "key47": "xLBDTGrFQ4G5e7RBYGJ4WZyfc3osXNdVaKazAgLhzNy53wgstdGxYLtRWnSgNyHLz2WJKoDbopNSgG8bTM3UG6J",
  "key48": "46Ydzegg76aV1xrWBtZ5EjZrcoz7pf1cn1U5F36cCv4D6zrtm7wR1iG7nric1yzRFwHnSXWUvEFNfe26UmFoZExc",
  "key49": "4dvW6eV6nFHLg1cwrFgQy3NP7x8Y4tpUFcVhxjjEkX4m9WXWMSqewVghLvw32nNk5YRGEuvwuGrDiPwfgo3DwXCD"
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
