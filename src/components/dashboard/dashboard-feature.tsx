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
    "5K18g5sQUBa68ksr1NM6fYw5xErCBZpFTre8JfJi1i1ofx1vrZ732g2z6jWMxDJvAh83Rc3jiyhnoUWdYedvaZf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v9P1J9s3CpkJq1X46MpLzUdK3EYiz6T9zL2776ZEPAuzoPseN62gZAiqpRP6NVFYhLs1XVwwf9vt3ngwBGNtQ7w",
  "key1": "KKxXsiDBXYAMXy39CKaecxagaxs6yHZd8SHvae4X89dVfqh4ibqZHeCkyaYaiwzHgaa9fbZSta3DDugL1FKuqKb",
  "key2": "4eXnw793GpTc8mRwPHto9rJxAYUYaow4d9UAPqmbrE55iSawf6YnN74bQSKnqjowhprWunAguDxsb26HD3XnzCJy",
  "key3": "RxVGyL18zt6RzGWe2bf17to5HYXaNUzKjnKm39Tz4hfFQbwjsJKW19LfNJKoBUTg9NV4v2NKpSPeG44DEMxrR9f",
  "key4": "5FRZNzyRP2H7XvK2f3gQUBGPjykL7Bg5PSz1FMqtMz9vuxHZRy3QibC5hU69vk7nvXQiXs4dzBgdtYbwsuifKwGJ",
  "key5": "3obSp1kTHUCskH1uko87QsdtvThiBS63Lf5nBsUco5ADtvcRTku6xbrMugmPuJALYm4KaQSzNHBfJWEUuzHwKfgQ",
  "key6": "4KrghpcmzxctSfwPnn3bHV8ypputfqGEguUpH8A2yHuBTrkELJgJ4qrzJeiwQe2YCcUUhBwXemi39XrC9r4DGBnH",
  "key7": "4AWnKto8NAsBNCPTEWWCsPU2HA9H5RscRr5T2xRt8fvT768ir8acyrGXgh9DPoM7CnmbGwmLKsrrRwyzTZkovzsw",
  "key8": "3UR53WD3LoT28LDMa3qmMCGwaujzC4Z1iSDoa1CkMUxfagb6MsNCbEqzUoU39yPQBmWCmEtUAoVXVbxxESyQXNYx",
  "key9": "jTnuridNbgaFwKaYeL8Chr7AGW6FENc4VfvdKaxLMMctz42R82hDKdU5czqXsVaBVdCLBhkTCdFUfwB369GF7r5",
  "key10": "4Tz4JTxqr3ySGJpCVbb2sRz8aWmxqi9EzbNUTGM2amUhRSdzkbRky1NZ95KAkFuN566CH6eHQpCf8U5rk7QG6Ui8",
  "key11": "3StyZmQw3CuWY6XpJDXzKFComRoa336GRN5DDPP6rCgMXUPXgeAhk3ayk7rvm81q2EyiZu1u7YyTwEuVFyUmPnps",
  "key12": "H9YJtwtiJCkwUiZRVLLM3xeNYu7q2q7gWtsuD7ZxtJDXV8qhTjFoBrEFGXXTTx1TjMmMKkGKTd9NQoJ8YGzZ1AV",
  "key13": "ieEEDddLzJ4ujBMtmNW9sZSLj4SuXdwcBPBDAshvjL5FKWVsEWUqcH33aaXviTcFz3a3q7F4S4ZoVmz89928AnG",
  "key14": "5FALBQb5ywaoW4Pq5FJQP9hTRJJFWyJ4hpeS97qPxbqAf3VgiNaN6Pbp12GPE6gSuxVmwX7qcNWcvRhB9hfv8byt",
  "key15": "42xKWmoran9k3CnasMjqrtWr528Zb3GwHGE6PGLM8StR1ZH1iQaTfEav3PFZX4W3trv5SpBXbYs9b1niSASGMECz",
  "key16": "571uhg55LJDW9zPwpWJzW2Lzo84asZSeF9dmDfb6WfMenUY7gjFUiUurEVGMqmVobuaqsXVyq9SkT9akoxTLAWWQ",
  "key17": "3x8M2DicQt7oXw6LVAuoxKThqpuGqJRvy5CxkmUebufpK6WQXRu2noqxLBbaNHCpEcXk5EykU1wxrNgLoG3bcouv",
  "key18": "5QijHEY3s2E3BJAQrKcDU3EbUnENb33tDvMdRVHGf3L1BCZoCEgbtCKG6Ws8ZrpX1fbR6zfVuBGPcgfF68cPG9oP",
  "key19": "5NTAQ3mTLuyY32ByjGvzaTbeKtoYmRkjVfAtoZoZz2oRVDXoZ5FrH8MUtxWGWbTirnfeGwuJx9EyPF51Yejtxs1t",
  "key20": "5U7QswtBU8JitT8ehNqhhgM8PNySo9NvCsKkhKajLp1T1W6Y9idaPNJBSeKBq2dbJGjHmpXnYT7A4iA5M7LzfLi5",
  "key21": "91NVbkYnqY8jB2oFSC4FFFQLSbxDRCP3DLwoWTSWWtFDcWPqzaaJ7RAH2wNFHh493aS9cjSGDT6RuRBvhr6YXMH",
  "key22": "2RHFgoELVbMGLSiB5Gc1DwoPjuwtTnnrJnsGwVxJJMKT6B4bqfgww4qCBSq6UPyzhxo1aMGWJSh1jm97AgsmsK6F",
  "key23": "2Dpwvuhyq14zkqj1tMPXQmDzF1izANYgd5iP3ETR2gFVtqvc3Mt886mzMv67W1EpWpNM8fq4eHE3Ws1aPDFgYgUG",
  "key24": "5pHJWnypzbCqfYwpeHr1wzMErZgTrn9KimUaX7J4wNjaTm6YFfFJCBWDFTV62PCNwsdugj9vevY1tF9tm2srqR7J",
  "key25": "47nZopZVZEmAhmNTZnPEfZA5g8UsNCxFdHETvEDK36uTnpdG5pEwsg9ztAruynzyArzXNERkAzq2RdJ1NpgjtGFn",
  "key26": "4TmYe7npaFotkVuHDHiBxHcd1Vuc4nVzB8bvbFwMxUL8jyon8f3uHg2EyVTknsqAwtjCmonooji9FPcwrLiwydoN",
  "key27": "XaxvbUuzR7M24yhxKxCB7puWK6JHG3Ay4u7FJ76zY2BBsa97QLpGz5oa3F5MiPAaqSzcLHa76B6vyBpZYAEH2UL",
  "key28": "3BQnujbwE3pGQuPBp7QGTE8tNzPCL5SEjojSsU6zoSffvkgKCN8FcK7r7jwBfHpcVgVj29c9vtttPbjdF4F1sKys",
  "key29": "4UVT2ABFmfqbMxFCjVt7KtfNbXLGe2kwLN8XZwX1MskPpvbpnTmawXR3qWxt9B4p2G5Ex1gA4YCau7WcX8Gp74Rj",
  "key30": "3aB31v8c6y6GDW9EJwpiQ3okNqk11PeRK6YYo4WErsjJjtqznjhfL41kXjomzEN6woHA8RCRVJhx2Z5yPyCkVuyt",
  "key31": "61xMaGJLVeek11SZWRPsZrfE1yhK9gFEPFGZUYdR6wVMZ4eJFyGtd5NW9g4vnjT9gy6H7BsVVQkcTK2FsdTCuw2Y",
  "key32": "b4W8mXURqLUdYyRA4i5HcjNkbEyuxcckZUan46z7zhNuiWnj2JmEUwELYZy9JUhy81Xp4MViRaarssoGmfNrvaH",
  "key33": "4zMnCP1DAKeGzKFAhdgn2oHBfaWHQAzhPttumU1YTfetZjVs3NfJHUMaEP6Djx4P5SDLqhRmbZbdddCLcoxUpVHk",
  "key34": "KU2CLdqgx66SBeE27GXRTThnz5mVPXiCyUcyMiHsBN6h48WRCCTSzqdJozhvFDmFWxtZ9Y9UQDwctziQdqvf2WL"
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
