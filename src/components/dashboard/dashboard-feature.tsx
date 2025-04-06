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
    "4RkF5tUDNTmyXiy57mpPzXEGA47D7XqdVtPWKxPmaM2CJZ2szXsH4kVmuFcYeu5579AWhRpfU9DCxuZBWuCSGpJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ptVLDR3R2FA4JqEFsL21Q18zC7iCCt3nYiNzfNCsrrDf5oCJE6aNWV7UHg7yqcX4o3SgBTRPyDK4C1MzEVTQb1S",
  "key1": "2cCJTeSjW3mkM3kwRjRJcsJm8WKX5FR6JDo98SbCgcv48oHTuZijMg1VaRKRCgcUPiTSkeHKaVhrr74yj5Adkz4U",
  "key2": "2qEMNmmSZExJAM2g2dYDog7agifDyYNFExYrLtNdB9qXvstbkG9p6dSiwFFwPXaDnfzrfEfsS9mAVTuyzCBfG1iK",
  "key3": "49LK5L7QCPig81ePPWz7xGvcjbFhBycHsYwzw2XiPYpP2DQ8LYiVHAjrcT4JqnGpNgUs8xTwneJnzmVrDUeUqVUe",
  "key4": "57jcGPzZGEdW6E3pys7ktvcdxxFrYs8YofK7vNtuhPHxDZicnbivULAxzL2z4fDoXQFtAqx2QynBVYa8FSASwKtQ",
  "key5": "5TgXsSb9MDUVJRTsF2Tjw2RCbka6cDuWZrDuAkSvgk3jhKri5Q9Qr4fH3sTgbGZVX6FT5HJ56py1Wus4aR21tQCR",
  "key6": "4tSWB52BZ6rjdLefiWYfdG78ZejeuBB8v3CikP3FSY5sU62S5AqvRHhVAaieBHRzJjecBkuhpP79WH4mZhbGSynK",
  "key7": "47uC8V4CLipGAHaTX5agRczr989Q5rSaUJ1pTvuBiEmGqFFX4AXwehGGtFV4Z5YxgvhWdFuHRj8Vcfc5wM4hezsp",
  "key8": "5rfVKVgQ1vaD2aa5STDrtKKmSc9wCFdpfvGKvh52iHTkiNPvUGXtPF6A6rLiEEufkPi2BkkEp5SE7DHzQn7jUuja",
  "key9": "4DEga7cDuVafds8YqGJA1FEwsGmCB8eTtDghWJGu1kQ32Ebmp719KxsHhqCvK8uRNofWnr2CbUMTAp9jkpMRyi6q",
  "key10": "4MwGXuXddUtarg2Axrv2b96hnD4MqBrhUSTTSzq8ZHPHfcWXaHuzZBQs9Lcjx5jvXvmj4sdGSUxAxGd1iYjTvbWe",
  "key11": "rm7NgXACZ4bdUExW3bG254z7jx97ZCey9ELzBza7ZfBew7vMHwjLv8oDQmAN1NzqvHgWkFGdUmVyuUe7N1NZnbp",
  "key12": "44hK6cHQmZ7sXwp8GpX5uR2A3XygyJjxzXDdDkydGz3Cvw714VHYbBY2NwsP1J7S5ubWWxN9BoQr9VQ1vPUWYWie",
  "key13": "sUuhuVaiJh1VwgCb1BFve6XJirekoXHYRXjUYN6veZmuHunwLL6k9CoDYNyYf9ZfouodsTZn1iwmxgegtYakoUW",
  "key14": "2XHdAp4rScFFpqXCNqTFKZnNa8a6nihDnwYawmC4u8RrtPNe7zW7gsCXt9vxkCxfe4kEpufiuz8tGHqLXqtoRAPz",
  "key15": "WMkCh8CDDQtwqNvUAc9YftH8tBo4mipoZoUmR3VKPS2Wo9Yz4NHBT2AuEwnUFB2atjfy4RUG4S1QBPkcaPmfmwq",
  "key16": "24fHzMh58uXcvt13p6o6x5saPWo4D5ggwtrJoT5kedCnbkMWeBTa9FL43hsxxA8PVrLZaTwCAB8TBwVYHVV567QT",
  "key17": "5ir9HSHhrsbg6XzHmtv6d16p1RgT6cw9ZiaV5YnhybUVMRcib6Esy3MeimraKQYLdeQcXcWEKeiNs1odyZvesNcA",
  "key18": "gCxxWYEfwM7ynYDurUDeRKHGS3kvQmMAkg6Xkpg3H46aQLRC6V7Gtg9cNKY3PJeNJsrGrGxGUQzzNqe5MoSpcL7",
  "key19": "25nVSazaUhcGnWESZS6Xta1QEUtM44wx41u6Xi8Hm3LKts1Cp7fLatV2h5XbaXcCF9TvmG9DxCYrHaXKZddQa5tB",
  "key20": "3xBk7JBnLTpcBKQKJi1DbyJn4RASpdJGFittD837Su528Eg9UhCs8QXhbDaSj72Pwzt7XcjeA9Ps4m1dbq625vG1",
  "key21": "26yGmPiXqRT58F7Uf1PvctPGXUeKBxCeWF6vebLw3HrPBsUWWMtEx4vxQDJf8wQ972wp4Er4p6EcRCyuD4R78Axx",
  "key22": "2fFmNTTB4hZ5Cf3yQcTx4xPC7sS7taf8gVLV2VdeZD47hQyWzh4te2NU7oAhWnqmNE2n9Jtre258BvQJu6xtABan",
  "key23": "qxaMUR5TyEza1iZUowTHYWiAZD34QcTvc8FNTBjy6WCy1KcLP1WjD2Mdx2kc1MyTSfxnkNUWTSX9DoqjKjbXZCr",
  "key24": "7ftG87kry7dEHzCw6ZHKqyASQjBaNyLBxsmp1faGgEE6p4Rx4c8AP8s4PPfsJJfPrJZfX391rxnY4FPVJrEjgr8",
  "key25": "4WVgUqDo4mjVQnvau156BnZ49mC5njoniwDKizdJxCwGpk1UCVAay1pvdgHrrXq4TV6kDS6rNmJ8tjCKXbb5BRUk",
  "key26": "29Bx4QCXqfedV4gmrZXUR4r8n9iq5pek9znUSGADHPKFBvYcEzQ3s3qyk1Y2fdLTJnJ5irJLwRzaMaPJf96xFJHi",
  "key27": "2JFy3YWeeK7Zxarc75XtTyHvNzvjHKXGM4Kbn8sMb2rZHnshpEGiiwNVtoBzoCa9uynHm8UW6HsPnfdX65NJJcF9",
  "key28": "2p1As5aBnKiabjRrbTo9yRdKeFn5uW4nESzyteMruyHfZ5KhxCmNUQMMFLMfA3C8mS8w3isnbGTV2tHttMSWurC2",
  "key29": "npxhCRwMhDngpHKkap8i4SfUEeYbtF4RVL98xM4ybchdiB1evQn2nrYuuvsGPbhEyZvUSjd41MHuL8Knm63VtYC",
  "key30": "pE9SaxErqbQCM9YmGQu26WcWf5s5xVtKvVUCdp74Di1ffHcPMeiSDjk7jdheUwmB4jMk1RLnhzSDd6NyV2Z4tcJ",
  "key31": "488aWyvEZ5o6SK5qKhowr3XY951cYU5q4ePs519nC3GPB6EGViLM5Va7qntYstdVHKbJr4SFMTnZpDESn9owmnuJ",
  "key32": "3UPuroD1HSissB8nh1W2oyK7m2SntDcnrQuaLWHk1kuN9nSV25KwongyBpA33dBE7jHqXtoMjFWcGV5tnojnFmKB",
  "key33": "3oL5MKJpL238CzbErjBVTLUWeohPLYLhdzWJRGsq6RbX2HQ6o6sn15qeULkstTchqgDvtCo27uFZLgtS5NWSGJtY",
  "key34": "2Yxw1C1fbAJyt6v876baQzd8QwvcHkeNUfZcvKx2SRtd2JJo6mXHwUDV7Y4xx1h9KyQSCEhXqn54Pk9rfJxLVTRC",
  "key35": "357piri8cVfWGUhqBXHpN2x6TG62rJJQMGaTyUDe7cHfwANTQDVF8suQrSmiu2jHESNxWiVPyK8AYTTsrXQwMPzy",
  "key36": "5BEToYBsX7eaWmoPFueCKxPfYDxFSSXUkHjMnRxvCzMQSvteJQyYWwMZ8KC8JmY98VZa6sfHqj975hJaAvbDoNrg",
  "key37": "2Jn8Pidjnpmc2aDhKnXvdd1udLE7y3sSUEYrb8g8PQwva7J1py33Azph7cNuAU8VX8TeY2vGWYa7BLHLtEVZE9LG",
  "key38": "2oa17hrzAbXNTocZmQdQ3YJrqmTQ6Ex85hN69FVjRbZkc3rSpCZxJmKHuqFdZhdKgPSEQf2Sq7m9VHKSe993nXSa",
  "key39": "38Hg1iEhnbEYMDKA1mKYo4bbpHkPR1RergijzQBtFcqnHW81hmsTxC36M7mwwehgfBoDXw3uypG7QLtGMy9RWUJh",
  "key40": "59aF7VUkjxJkHoWFBBeSxuruRkmJohk4m3bQB3AKuAsp7pNfBcKJERuSvzivj89Ycj8pHfBgjLFp56YJft1kRnA3",
  "key41": "3TU5B9NwzGUb2cTWzkhj2ogkm7es4uQ7KmhnQA9evdicCU1dSMNhfVv1v1W4inKc5JqcdeRUd233AzKBvrDhjS6K",
  "key42": "4i3ftaZmHHJqS8xSRzLyPX27E8cfft8sr9fUAtEDnsJUcFG1BVYQ8ko7JA5ECMR12TfmNC8QM9BF6Zdmvm9Z7VUC",
  "key43": "vQRNSznELNN9CVXkQM2tqVnRA13z4FPMk4mAo2w6GmEBXn2bw4eXKwK282woP25rwzFsxq7QWWGEL3BysA4C3Ks",
  "key44": "4PX8MM714jxdygyTiv3ZJ2jKA5DBBGMnXbxGGbRATJCuLxoYjnWG2yLrti4pSDxy2Nmj9Adtu6FcLYrnMiYBBK53",
  "key45": "Etrwf51i82YDFC3oMaKStVTQuMpqvZ3ADyyZpLT5H7M48taLnbgw9T66jgDVmUAU7CpZXNX2DeybFWECiTmF382",
  "key46": "2PsjEz7J15N22ar8ZRr7MdyZAwm549QaDHGuUX5pZKd1NyC3ATDv6Lnk3diwhTF4CtYDbFUruAW1aUUyNrZoJESb",
  "key47": "4uvJS9TY47TNB2YxgqsNP5n1DuKv9HihAs81jjrpCFb2GTLysjrwbm3EeAq7xKXS8omqzmSmGxLW2EzRXMcdH7RE",
  "key48": "2Gp7xGgUZHrrXAD78CuvTgAGaKp749AQPcWfdt9FToF7FQiFSxrGbZEibeXVE2eLE2htGWBUFnku4HWp1uRQvkWf",
  "key49": "7nhorCmhrb96ryhgAFWNZL7otGDn64egRWcdmnpC6c8nR3dNN3Ji7Wr9espF9YPprnYreqJ7UQvAPuhiRwCvfWW"
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
