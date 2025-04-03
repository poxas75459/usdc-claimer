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
    "J2zbdRwJzxC5qcRrrQbgHrNSHGKjdM2KiUukBcLHeQVkBgPaDPXjYv6paaNUsjVP7eRPik73wmsACGzd4cgLFPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqJLxCHiCHE6pzn3sw6ZrgBmGzWxRQ8cc3o2FyyX3o5Bn6LStRiuw9HC2F1sAzKd1k7FspjB2bEuJCjcUivBVW1",
  "key1": "5kSsvE1p3P4F615zv73FgHkVELZ2mXPcKF1Q7xsxRJckqph2oKQrnK2BqdSdqW8cLaMXu9vbcoP8qtuzgUhr4hLr",
  "key2": "5rG5vPHqHeHXj5YH7x7D6YVqNiPjJj8DGUZyUXJMx6KH86fnbCxfnTA8uH6uZG7G3ji3ng2qu4iySMTLVdt9UfPD",
  "key3": "41V6LPdvCUNBhJ2mpVNisjk2WEoY2MhyAHGuiVaQhYhkgqLfcV7a8fYaXWmhfEpACXmhTmgp3EBmZeEoytkxzvHV",
  "key4": "9X9bupZThpyMZZHGiSmK7cn2eDmfLwbSKEAhpskZBGUdN7yDmpLn9hNX16fVu5ztuaHVasBiSGSNzWobjRXx1t8",
  "key5": "fjmMX1zWN3oYanjGzD12beBZSedrEHQJ7gV61r2cW9H2WqJy86znYRnyeTc2dRBFVGNVJnW1mNzUKyRxpEYrsGB",
  "key6": "2u53e6C7P8CQar3ottAP55wP2aR3gR2hr6xYP78vudkJYN1dQ9LqhjtFPZSVRkFokR2Fq3YSgqH1jysQ3oPkFone",
  "key7": "cDgnFCbmV6ziz8o5tYEaHHE4e9ddpaAU7FQKHcfQZwSCRAukBTbn1TrzQgxfeSCdUWrpUK2nkuAX9Kmo5zzoSVE",
  "key8": "46R9EmMopH3BqJLHJQKvoZfr5p5kC9qRa2hrsD7UwxjoMG7SfrGsPRS44qXkqSn9TJnVfSHvnGYMwHKZ9XR26y2w",
  "key9": "49PF3iqmK5diJzxta6xNk7GBWTsPMg3p3fscVhWVeiBKMPkopYoMxnyCPYCKruMXGTb8XqM7kUk4uyp8omuHQdgC",
  "key10": "54Zp1vyrnYsLnSehpmXc5DnGuAGbP82Az9WeKEFwRjv4gkq4samQppYKmSisEzzmubF7zNViCGNMHY5vHMToWbZk",
  "key11": "67WNPViiPdCZNuZfFsjAh9EC5iWgXzpKwJKPhDQyUf13chVmL95dCYqRx44JMZwqhiB2v3NHnyUpUA95t3mx1knQ",
  "key12": "4r5RUhJmjJC3pyeYnrsfDPbCrovsKJbQ94REFGRtvz1GBjTkKJCwEoEvHZ7GK4gJTiaiHbaFMZP4dbzxBhYKvbYL",
  "key13": "4YxWb58q6YjgeTQyRpWTzYozcPjK42mr9sLwY1EX7WVYRaNJcqZFicyTNG3jhstohNW5i4Erxa78PmFw2D7hNmjN",
  "key14": "4oDrsGhJfGdWW8YEvj9vPCr2Xn3oiJYc8soQC2nmtsBJeH27tDgwy8n3jgJ9RDN1Y8zVGv5v6cw4gqR6CarLmt1z",
  "key15": "3Xqr9V8j99PYqBto7xDrnDpgZmgv6Aa7Q3PLHQujAyRwhTfxJYifaNoZ31VPpBeY5TWg94rWg8LPaiToAmJrZVk7",
  "key16": "5feeFQ9x1umedGvLiyhVdqd4BT1RARYXCdqpS2scNxqu9SXFQuihKpGX93obCfrBc4YB2HsgMCn1cweC3Zderg1J",
  "key17": "55zjz5tTrPAtv69zGTHBK16azjkCRGE1kCGxpdwvdxYksTV7oGQobpttwg4vNxJTHiSgPKwVJeUHRPgsU3Vb7Kzc",
  "key18": "c4jekQUWkJQmTVQc5fDVC3yFxxxDKKQnN5Pgm8mdHeCYTfiai3uVgFWV5cLPYFQxRoD7kgC7YyVgR7gEqLAVYih",
  "key19": "5xqXFu6vwLerZkJVTgMVrSsGHfv7FJwC4jbYmNfE4zyuikjnzMQPvJT9VmAE7Wh9LPWoupoQC8f8r2irQpU8qYDE",
  "key20": "25BF6FN15pu2nyXETCmLUPSUz7yvcKu4bEKhoxvkN3icg1sxzBpAGkr2K9TiSbx79wzzz17X1xns9B1ivU77of5C",
  "key21": "4rLon6KLqzRyJSYPwk2zPMyzVMXv35u61gz84Q92AuDQVVruyPudxsnDUGS7uGBiAzhztPdzmDy2pKwg6LxGZP1p",
  "key22": "65DfExzb71v7EGTpimAm9PwdrevkFbBV6TFmfoZZ7WfBzbYVipHAwjFdiCDBAFvh4Sj3L5EVpkV6dkMcALCr4fVH",
  "key23": "3zJx2bVaa9g3ahVED6tpA6NHzEoonFWcyHLzuw7oGxTndiXSUgfSeR1KKJjbmuP14RSaqjewdUp54aTqNPZeD2JP",
  "key24": "5wccc4DUoChKwb6yyKrNMpANt4CUcUmfeEVJzBJ2TtQtxNjZdJEzs82FQ3rDLUGCCZfmn1E2eSKhg5vQsutgdVxK",
  "key25": "5KWhnUPzaq2NUhAZg2Z2yhVG1j5sVvjW4duPzzLYuK4RzUirrT96T8oS4fMD6UhNrmgFzWKpfWXHwL2fDAbggT7b",
  "key26": "3A2gofHxwM14kAFkvMisycsj9jTwd4zDyrn26AQpYLH9nuiavPm3RgaGCAi7dDFdNWEZCywN21MSXgJUHW366vHa",
  "key27": "2HfhKVtGxhzaprqbp4a21pQkPxHiZpv8FSepKgTv6vW4bywRhufzKWuHydyfeYxfcZwa9ShVY5cKSgv4SCct7GfP",
  "key28": "RLQaAf724DAkEmg8SoJgfgEDJhDaPyH2qULZ7xQdLi5Q2k41pYaRT7Dd76g5VLoaJJoxnYuL2SaR9kc7XDAKuy6",
  "key29": "3in4Z81iydaz2E1UPDeyhRfn6e3PQMq5YNDPsTNfgeGaBya8EkFpDqbcVA5EihogLUJGwhrpQDTBCggRKVWXAV1T",
  "key30": "cuKsFj3mx4uGCsqLAmf6H5uZwonYPKEAQYkSn5EzGzzVgFhwFMmCG5LrBHHXhByPhhYcy1nSMmCsJXPrKbBucKF",
  "key31": "5YcwSd21YqfzpJ8GDoPu1AgnnNf95koXGcEHuZzmadsmY437xbJYsGb25NYXSaMy8Z2rtdp3geCCLJpGADvtXqRJ",
  "key32": "UQKnBJ2eVLAjVPF9AbLrekfPB4MK6XNh3tAyGJtkw4gzHSoPd999Fqh1ToKzBZ568pts1LZfcyGxkSvPA8VpMPV",
  "key33": "2baFEsWD5A6T97PWGWbLALs1XgDm97QXxmBxjdae1grbEAHTUJxUYWH6BytXb89pDCYYP58srFyeCZNmPBccnsLx",
  "key34": "65EzSYXspF9pnYitVyXyFN2bzZ8Asxbhr1YCTr4cFMpEC1K3Kdcwvg8QKLjTfbk8NNTVnrJ74CPN4kz3LmDx799f",
  "key35": "3STQxtiPt3Y1ShnAj6gCRDy9YhARor8XbbAacx5jQG9xy4gRMhx2Xo5vYiZSk8ZS1pVpavonMeGaGNFnbgUdT8us",
  "key36": "29vxrLkVWLDsfffz6eLBh19Mdk1CBNGiRTYbkLtaaJyjrYrZWwz1tP13FbjZi2jfLKdeX4C68Es6Cpy38wksXZ9Y",
  "key37": "4XtD6gbcD6D1CKXvGwuWtke5UxQyG8F4TSpv8QypMzktm1nvkAhKb5C52yMw5AABKhhwxctGeZDurfcLMSPsm96G",
  "key38": "32NwPVQL3hLw3P81BxZDqSFokPCfRFhbDwmWsvzto8FDb7s3xcfPjtw4kU4XV6F8H7QRTqyDVdbF4VFbwm2TgiPb",
  "key39": "2E7PZpGnAXSgmLUgj9k7QAuxNK384Exja9FBK5zENSXmSJcH9EEbnCSd4BQCZ9pMwhR7J6Zy3f5cMsdUtpr7TPmf",
  "key40": "4ne8UFcc7pBPdqG5p9i32bQbdwHehZKum72tdByc9C4W94aJYtjajibQKy2Yy9MrCKjrpXXXTvX7YK8eGh1bxPzv",
  "key41": "259roQKdAvLJgfS6w3sMbFSE1aNWsy7mPLNuPH9AiJNSJ9xrwpqRtXyfxXY9i6AwEE2sobw7Bpk74QMXF2UtBUSS",
  "key42": "2HNdzvC7fDSXpKQNrWWv9mHMMmiKVwo3V84QCxgAbsw7mphuRARsjZyKMem4d25M7PAmwek6HiPmovJiVUnxsS4J",
  "key43": "BfbWeEgaP6zuq22aK7sZymTLGN6xgSjey8KGAfagY598onBiUHRRFTn9fBizeWjqc1y7cZngrsgUEJDCEgeVrac",
  "key44": "bLVSu5VCi35JBHju1pnyWFWJ3ZC7LdRenKFAQfSXsvbYFX1Mii8U6R6KaUJo7RPoYzzfyj4qzT5QjeYfCbFJ8hL",
  "key45": "2tJ3HSgt1yJG1JRcN54EGhepcxzTBoU56NwMD8yjh4Mj1P8KQ1iF1TdUSADE3aFnVdXyNd99JxtshJyfHGTPxFdf",
  "key46": "38Z2k6JftRDwEupXNXKsBFhhLoeg1TPLBSJyakub2WwUcWxyVtxM1Dh6VfmxRb5BD17HrRtMo8pxrdrPiH4iB7Tz",
  "key47": "2Sef8DeihYC7SqRP5G3arUbxdzKW5VDuAonA8LgSRUuioQWyg7rKK1SAKDKX2ruMkj5dNa8RJdHESeQyDBQdwvqQ"
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
