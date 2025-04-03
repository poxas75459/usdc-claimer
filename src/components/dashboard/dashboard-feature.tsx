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
    "2pVBerHr4sn1ampQGn5VhXMP5T2RNeQvij9bX66Cb47EA6LxyVFijWVQ4hRWhsShj8262rSMD3iEwVGz22tpf35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "615MdipWsovX8WX7PhWfxrvTM4XB8egnfkoxtHpabMJWmZvxTM45d4mbCbBxPnjjRWHETu6FZYBTmXVbEkAkqfS1",
  "key1": "648HRs5VeefHARZMfhij1LveKGNGE5xfrycKRc73oUiN4pYqQuU2FQFwbb74YLMRYp2KXMSaM89TBVYfF6ytyKUG",
  "key2": "BYeDuUgMx3cBpQpneLe3efR3xMVk9vr8WGo4ejWxtxD67y65rmUfuoRuyKMLV1CopDRbSru9N7AD69NBMHCSJZf",
  "key3": "vMyQt6Xgkex97mp9gZJWTLiqcbmfJT1sD7CQVMqcfUDsuZCZ8iNBtLcxJbyuKt3s9SfubTNvFYH68PwUW2Qs4Ga",
  "key4": "5pYSr3a6peGqT9chbvAeTiKNN5nq7BrvsDy4HtZCRRHyXijQw2dRwByR6gvyRKGEWXUVfq9mXa6kbk5FmDk98ZuS",
  "key5": "3ZeaDyyeoynZrLkcX82ziQbGMnCcLXTJwNctGehNFpoqxA3qdyCz9F1Nhb4DXuPHTYyguFpapLA9jG3KUqvWjWUm",
  "key6": "674gc21JoUzqFjtRqGBcCjWhbreC358rhS9cCdavQ2a4FRCj8jXPSkgNNUxMr588stfXiNBJSMfR5Hd37AXfhi7p",
  "key7": "4gb84TJgVuH9afoRZfchJMXzaCn3HWQMwQSaeW7stmmAgEceoYtHQ9fnmss19YfagtoMJh5ast7zPxWZgKN13kLy",
  "key8": "4q2BeENvqqpj3EYh3xJhP5Tptpvc9Z92J6fmad4HxqTFfKx12KEcsi8X5wKimKbF1Ht1a5JxAJCEWzZ26frQQVv3",
  "key9": "5EnHfuTi4d73exB5hGQxg9TE4nHry3E5sNaL9Y1He4R1kbUZWyTwZ7TB4eoksL78BQ1FFPNHV3dkYkQLYcdnfxKV",
  "key10": "4EW7KpjQ1pjv3CwKU1KjV7wKDRS8XWor9wZ5P4eZVed5DaNaxwiMHfLC6AURNtrv4JpDK7sUjsPnr3DuJ61aPT4p",
  "key11": "54jw5VcZP3VfxSaeyszb1C8CSkF6JTBHzQJSC35q5rnxW8SKqri17aSXFvCjJu6VXpYwZSmPWG9cRDLC9b19v2oz",
  "key12": "5Tdp7Ezrxphkuneh6ymqdvumMpo5bty4qnG5QJ33sRicQzV6kGagnhALjrp2mY9tPNozwsRmByrNRPLpwxayJr19",
  "key13": "36cbKUQq3pownfEeiN9Sh5Af5at7QeSZjp9AbNp9Be6b13iYRW3mygubXr9xwBFKUAQF7GNyAK73Thx2oQfnQa7Q",
  "key14": "2VcBV3eCfw8z8m76w5Qj5eu3VDg6UJACXP7K39o7Uw9cDNojn8VX7Rfx98o1eBDtfbmRCLaPZkYJ1gMHP4tFyi73",
  "key15": "4vXKQ5aAHvNXz4MbGY1sSWZzXXHod8zCEz52zTPVMceWwmRqd3Z8B2dTp1FmQmNYxDzDfeuChZ5YanwUaBCr7LRH",
  "key16": "5PzYXqXMLaWX8A8J7iN5CfjSsw6AtzygB3GfZH4pjaW3BqBaRv81HjgfmbSZh1qmwP4uGPZMwrsQVQmsnhfQeS1w",
  "key17": "4s4pijk2hz7zcqKYPiaQnSet8njouwCAwZHec5568WD2wNvsS1McGnu2sd4NjrSKWR3XfsvYk1XTMYanAfj2LX3g",
  "key18": "5ZaFe8Fduk7xgXsvHGTdhsKQiuJgDqq72Hcv6E2jF1kWMF74Ji3LTdghXCgTqs8s2PxkJgREF2dbTteLK2QmAqff",
  "key19": "3NvpeeEjSHpwPXaBLDVBQZLq6gKMXVWsd3H4L8wCQkxdD6bLUaQLUr1utbo15FYQV3ccyq7MXwhny3mGoCJieLxD",
  "key20": "3LqT5aeg6WneSDUMXCPrXpGUyjRAGrYy6o3XCCtEWNUu8Ai3zphBmKkKVE6PXpcGkLUjyj9eD2X8zxto7pdFTfKn",
  "key21": "388VHNY3odtpjTKJiNx2jXdmLQnudZJTDpmtDXhEh7G27zcuBG3Tg72jbgE15prHYaRHNe2FkRqgjjz5AyzU3ws8",
  "key22": "5VHrNL3JHe2MyMh8MFb5mjd1j47pEV3LQgtJCX4BPfAvfm39L4pWRJ7cfkV856VX7B2pdpusQe3DJ961jNFr88qp",
  "key23": "4yaFYYvTbuaAtfLPtcqr3kKMcThz5JD7KbvC7YCbKvfdzNLUGhiWCttgKNEq2qWqbe3nZYxiW6sQBJtEX1QGPKhk",
  "key24": "3gb1xvGrifNjfSYgEeNTXtKfDaX4LFXQvu9G6KZuRij8mrr558v6W5NxrEL45WdqZnFgBdgteKiTYoUQzGRgDB9S",
  "key25": "44gcFuEzjxcmNTsAY5GqRVMeniiwgfcFZ6NXnYws28oZRHBdGhabeLqMRjuwSuiX68KjeTg5vC7x9aF3qSkQ7u4P",
  "key26": "4dcMwFWboL28Y4ExCs2oqwywsKGYnQsmfmyKbKSsqyNWiZY5pJWBUzjLHv3nae7BNGmLfaA55acwPHgF36AkYs5s",
  "key27": "4Rhn5H3S8pw5xRSNrBpnoJNCUwbkwSjLVFugtVqVEEvdxtp6cvaXdw3uWpKTcuHUgvXHq2eSoLho5BpNcCboVBeR",
  "key28": "4e9ZCoxMaNLAzXaWNZDfBvKqvxndHYta1uznf8ztqsPKVNeurVMbYv625MubwU7Yfs6kBxVRVVnzNx6PVXEvdF5e",
  "key29": "52EDJYKgHJbhCDEkGXqddkLE9Jt5F5AVmFhmpyTdmbY3ZpsTgtr8sKeQMD9DyTsr8SbUx8RQXjiPmGzNrPSmM5mq",
  "key30": "H9eg2vZweiF4Njsm8uU8JRKkEipp7QhcyPq4zNkT9pKo7n8LbrvT4hb7P9WmvuHtKajgFUM9ZA8mceWRkSygkpQ",
  "key31": "28TxBggmhXQ7YPoSNHrYGHgsw5FwDntVztCLsvQUsJ4mYhxkqGkisFzXFE6GZqoC5Lds6NKDseP9MoEnK3K3QGid",
  "key32": "2fp6Ji1QpZCDdGiFDAidjA47biD9gLXBWvJJmHDHP3aVjRCFt81LKRbPgcpa6FnxoxBas3dMA1UoBmFwWRKtfNwz",
  "key33": "kP29opFtRukro2AeteZZiCNeEos5oT3CfJaq7mqMRXTUXSiCsrx3FJmy6ZUimrTES3N4FUXjdqCedYfofu2jTAX",
  "key34": "3mM58ohss5eHtBiX9TCbVsLWkwqNwoqekQwWtqKJvvPwxdXhRcn5kB1QRugz3zEcMhrtqbmd4FUjBdngn9vAgNTo",
  "key35": "9mKHiJriUYZpayEsVWSMonhU9rE2C2L6wJ5tkp9WN9c1xw9eJMr2oSdvUsPwjR7vcG3Bycdz4fwfBcyTAmnYmwN",
  "key36": "Aqe9wfsGQYfMxiseh1CnFMUd8yw5y9oS53dnqg4TiCipXme5AgDDfKyzuLnmwEYKBH8BNtMAHx4im11exVq9Quf",
  "key37": "3h2CnzuVUbdAU62v2xvvT2c5YThYirDuueF2YXEvqNNN8vH9rvfZL4fcQ3V8Ndpv5GgbFBPSkvPzZvqau1DgEMT",
  "key38": "4Ggm34TGWQQmuweD2Uaw8GY6e6bMmXpC5ZnwktEJMdhSZawpzF47c6Q77LSdMztm2xC2gBZP7xojxgEQVekL9p1n",
  "key39": "4MShfSt1eTtZuhRKXEd1JrZ3iRz1E2PooHwqGQrp6u8PouSyfa1kofkwXdh3c3ssnPjXiW3HTvSHbtLjThs5Y8dH",
  "key40": "5zxuFok9njniUYrDqNkqoYuQyWyGHarSCBuoGofqGaRakLSZhNMj9iqFvoK41Cym7FdpUYFg1nSYSCnEbQfowPsJ",
  "key41": "4LZHYWkQuypcNSkucrBgS1HRqNwX9FMDPpdkmvNPoAsfdKLraFkBYFxkHjfoxj459JH7M9EWsMKxdFysS5QexZ1j",
  "key42": "3qoqnnrj5TMVPrp5W1vPdhQNWQsZckYJMQtZTRgzwnomCtJqnyQuWzKfEo7zbeMJDfDKXARhEn9y4UGSX6K99Kqa",
  "key43": "4Lr5NKmpmrBwXgUZFvR8YHrRLtP4KjUZZxcBCPY5k2PMDSw5mDdfMUrovv9Ze889y1hvCbesV5r8vurap55qfWRv"
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
