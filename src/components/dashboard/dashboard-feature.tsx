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
    "28a2hnxJ49FyNiFrwS8K8yq5zTmQA5s44CTuRK5Ccf4oxXKumZ96foZCESzqT3NmoYYZT2hgj44MWjEt781uUbKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LRgZBFrDyoq5xwKE5WMetMvG2wUofrWw7YrCw6EVNzh4qo42L2jGP8DJ7SNTEeT3ScPf7uGokWF3PcwhMyT2LdL",
  "key1": "3VLyBeH7E41FXdmDCFknNSr95nbxSgptWf2WSuFobqeNopXYJPyHdCqLMNj3FcXygdzVnJfxjPuLFjeeFR4sqtTp",
  "key2": "QuZuLrQTsgkNA9ug62CrWQC6HsJcuhFhrc8aZG63r7quSE2gFePqSK4HmkAZJaSGSxhV7cZ1pGCVK78vTSYxg1Y",
  "key3": "3teXy1p4T4y98FVNqLLigcSNTF8hLsvgeGyvSwUNbFRwS4kkktpG9qUafwMAYY9SUi1VpfM3GMVkDoN2pCaz5uMY",
  "key4": "4hWrxd3fK1MadAvJY195ceYrMbYx7KoacUpaTBK4iMMid6pYwdZLRtyMiJf16GjFw8ZM8jnNSotg9KdWFATGnA4P",
  "key5": "5yFYaAeu7mEAvEw98qzXap8qvwDfMPwpcEfX3rFBLVytAim5VKGuWCBqyiX1D7ytknw98j3yxaQEJpX57c9curMz",
  "key6": "4uXGPwEmJdustqbrkSQPBoqY6kzMVeJfG6FhEqyqqZRXHKyYRR32pPjye8j9fLyBT3HXqWX2n9B7KxVtSTRCi3JH",
  "key7": "5gvbG6Bsjg9JpgnY5g5KxrbJxKq4CtrJHgBASksuo1MsmUoaTy4GbHquAnDaxRkEqHyqoz26WnTcUfAmwEV9rDsj",
  "key8": "LQeXiRmfUsTsM3xcbwb3z38oFabW1qbtECNoMBUXfMtV3YDKVsX5UQpiF6c427JsKNBwQVHKdaVieRVT2AfMtsN",
  "key9": "3qhok5YBe4SCUPK9w8Vw1nXUjcf8ue34LV7F81CMnnPAWJqJxacCBiFFBtym1GvPKpSq9ziCUC2RMzkdMcC99fWK",
  "key10": "48EvYtSe94P3ziyaz6yCGHtKn865FMSAGBMniDk6UbrJBRZbY4C1JJ4r2m1CoYBBsGkkEWBBYzo1rsTTYNbP7sAz",
  "key11": "3gdhSkTQx9DK4LmeHYo3A9L5r5zzNqy19j6iCFUFWQKyXewyhAXerhKCHM3i42fPCgGNQ8hNMuE8W9U7Wdc1ToVN",
  "key12": "63BMYzyZrj1znQnSsDvnCgDEBTZXYKQ74aNTFcJZuEUVJkqby87oKx6Y8Gz5ky2KtdCAMHN6uSGuknJiiKWDpTEd",
  "key13": "Tj2p58iEeFra11i3zsUEAjNaXwH6RpoMmjv6Vi2HUybk2XXx4YRKDJDn97SUVCiV1g75JAHQVPQfPUBc8q9UwDe",
  "key14": "3sxn1nQit8pB7N7rfKyct8e3NMJeS9raYGu6WMCN7xKj74bfTCXLBPC4sndN612GLW6htPoy6nLRV19dUq9HEy42",
  "key15": "23UYxv5BDbYFxFDdwBcBX4dc1sLWNaKCHoXUyiZDbVPWPBbY3utxciL6PuSzJToB63pD4apMhr1WigWhnPSAif78",
  "key16": "3Xxf9AzHM5UqQyUtC3tBqgqnoerhSvWMF5b94NAun7nRBNWdpzF6hLMLeTFaiowPUnfayWq9JtKoZxeDMBKUkst4",
  "key17": "4sawA4rgnXxhyUSkfHXAzmYfr8MmscTBT4hWVSkCq4Zxaq3g713WKUubcYfgX2o7rwS3UENZwLM8Zv6H938SUBid",
  "key18": "5P8KMzGmLrWMz78FUvV8TEzFJComYJmFZAU6vjXR3MnXHpRj5pocsTyGw71rXeAQ7k65ZBZYid8x1xhu1rjWm7V4",
  "key19": "3Sk534WDBa2g2FXbeRKrkU14DSxsWFBXd26EbS1cwqa3GYMowNYa741TGjqD3cCfCGcz7rjqHE6qYxqWWzYuxq44",
  "key20": "XeNFAWkW4BDjk6tXHyNetzV986E3hN2t6QcT2QFLSVpXZ2MMgE5KDwDQ9MszoXLsx9zozy11hyogrjnbj9NYTbH",
  "key21": "3Dd7CvTptUJhGcTQMoiQTFTt3bRG6CWTrFP6hYFcRdvM1yV1XGWRJzCBZWuY76fKxdZSMR29byCtBsmUAG3dqRPV",
  "key22": "o1VXj7oD3DDGdaDmVm9BNBzHg2u5VHjsQbXTLhXBLVfsVGVekhDb8jMoAFr782KqeyxZaeVzJnNXkk3z7QjDX2K",
  "key23": "2cugVykyFUP8GGWUntYFuHuVznKLXXxu7DqAo8jir54NrmLvhxLk4dEwHWQqpC3NzvuC24o5KEToKHBxkui8d4KN",
  "key24": "iUWFoMr5fAoN5h6oo2QuzW9zd3YnuTCsxALpqdL8C3ZFzUfGBBpu7Y2vLhrFm74AgFkykfFESvdTyaXz1tE1Xi6",
  "key25": "4mJdnHzS1CpWMjsKeSkkuvPr1agfSSL2myZ1NZjA6ap5NP7z7xcjWFjhxV75mdNmho3EM4RbcHgaqpperSpH2ToX",
  "key26": "HMEWP8GiyomAaNjwrkxnxmWyujK264aKs8cWP6pNDvzjF7BYrWwJBKT1xRE9TNEAKBS2QGUuHquYj9KGuCZDQfB",
  "key27": "2Xagb1kWDo3qRaxFUx8VMhsovwRZ5oj4NwuPkbLRiTZuA2pFEDErbhUxiJf7Cx3ug8ChsG2ofRH8PwmXPAdaxrky",
  "key28": "3AykuEs4nEdcYRY73QZwoPGDcvLUAHgpUdRNFB4vApeM9ji63RniBnmJEjnqD9W2ijk2SxzpjR5RjdFLLGudrzQZ",
  "key29": "hXvQdSYvquNsKxJDgrpCsi11SZqBLnT2CwSFHPtPWXnPW5ADVbab8mvdfq5fRBYa97AkLg9o4SACqjoUEdT2zFC",
  "key30": "PbZP2LVU2xxfU8m9xTx4eyaWukqxM8yWrGqqXZY2sZaPe6zcv3Mp6NjC79X2kqpQjCubxHGTjQiqyBu52WomP8v",
  "key31": "3zb4k5XHE43UaWgvAXPopw1ughSAxHpX2QbTcnG9JQ82w4P75JunCua4NJBR2Ki4QELkRZ6ZBNdcofgUR5S9ucWU",
  "key32": "3BhpNbFEk2gGxHrmx9j6WcLz4sWhAZ9ni28sp8GY7mavzLazRmRi5VnuUtS8B94g2eNHcAPGzerFMXmY3VzFqwBU",
  "key33": "2dAthBjtfXFrpWVQrUHoYLcUw3GkLA4jTZM7UFH3stthNRmADSC1bFAvX1QyX8hf8KATqeVyS9sjo2WTJDqVzvKK",
  "key34": "5DS5TGUnN9xRzdYBw98foEQLxTLgwHkR43hY4pJneSxgyRanJ96RBh38azNZQw68TU1s56SyxJKdJpBKNoLDvyM",
  "key35": "4byLA9Da5C2isYtuRYM4uvZ9DKuiWdu8ytMhPNWY8NjivsdeoV84BLj9x1VJvPs48MMrSyhojWgDHPdYbSrCNWRH",
  "key36": "3rZ7f2XiW8DuTtjoTQeEQuGzc7DDzw8xNxzNBpBzxV96P5FezW3Ni9YRVg3qBhLJ2yzihZuLqhvivikjkLZ5WrSB",
  "key37": "7cyXEEB1EWKMtnoHwycFwWGnwAu8u4LpYiLg6n9ZrBJiYEX1j9UnTHsRdnSLZ3zAASPJwM5qybgpuNQwHCPLTwu",
  "key38": "ijH7tiuLWTiR4L9KQ6DDAoEv1kMS2NhJvXjvsX8VcHvuU1rZoGnamoLykgYjscSdqgMSKcBUNCQJ2Lizok7nzNL",
  "key39": "4djxr5BAEYHXfx5eRajLac9XLqh63rupHSchuEcGcEit79a8VXgwxW7trSrUwZFQVB9wKLL2YUysuNb6PBHGEEe",
  "key40": "XSAQsGziaAkV44dNfCmcxBMFFDxNHsunfcX4ZG73XjQLe86Pj8c9EquvGeU9XQWBfoayR4zeUGt3hQG11mbfY11",
  "key41": "4zqqv6ww6sdms21jSn6H53kzEbSahFzx1qbVk3uby6QyarH2s66hphMTJWZBSibposCK5xiZzLKvFcdQ5SQGb1RC",
  "key42": "4rmTovvaaVCEy19ecS1mugPos9X8GdmEBEn2W7v32A71XstjK4qyzvNCyVzdjMxX9omQ2LPSqM5RxLadkXLPTtP1",
  "key43": "3czJwT2eE4j87ArCTJTGbXFsFZPamM2r8nDbWgMnvsBKATXL7YaVAm3RLZmGBy5GuiBbyyTjuUfeXoEuPfxYm96G",
  "key44": "kZJ2mdk95gVvqGLaUXG9UVZ9JjJx62AgMcyNgy76n3qfqSdvaFSqugDJnrjZEqwA8YDTVfQmKofNGQB6aMogSaN",
  "key45": "2mZPXwKQhWrUuUbuqLDHLqnwy7JQuqkXs1WfzigcagwjsQ9tgvKSzXoXRx2WNrxMizk4JcqZyaMdP7NjbrNyjzSB",
  "key46": "5eiyD3paPXnMbAakkW6LZX4sEFrJTZsGs3xxoasnAYY6jV3bLgwZKuBbTkt2AXib7icFkP6DhxCNLD7LA8URCP85",
  "key47": "43eu4DrzdzrLndCkDmSJmqwafQ6PRrcDqdtBkJsnhkyV48YmQ7p8nBwmMttQrN6DKYBGwXGjXV7SsvgJGqbqofba"
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
