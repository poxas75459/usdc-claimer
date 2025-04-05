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
    "xyP9zBjURQ9rYqALoCbP8bhoT2j1p8qmGTFwy12MoavyjjUAPqHrzrSdBmZ3e2o4wZy1gErXiPFsfBL4aR8qhSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WKqT7fYn6ykXmAQAoowpc9ffmhvQtjF8pBPsFUPwiRPK6khxwe96oD4ALAsg86jUx2XsUkGqdQ2L5nxAvbZu4yV",
  "key1": "2vKDuVDDcfCvFQo51iepYGUUNccoZtgL98qB84voAxGyU4w7yQp7tvGjMJRGVHn39tFXmJSKbN8zpxdGEKdT11AG",
  "key2": "f8bmPa2jfBpHDxZfCKipxbRSLxEKozsP6gY9BMvns5B2E3tXZLCUcnXCCNb1NDC5pzd3stVCUUKEAtFNyunqqab",
  "key3": "5UQQ65toxxwQRTtfLetbZukp6VxajQyHgdSmPKi4w5ha2SdXmTTWPikEPXDJvkE8x3cZkss4e2nj37kU7gkvL8g9",
  "key4": "25Fb7HmBU2YPcbXfvkQ92PJKe5qGSxkGTh5C6c8iwzZTGJ9zVY6xGbtiVvZz7kaa3ozRkGXRgE1DQo3bFJYnxrpY",
  "key5": "3CZ4QxyrRpgysFRjkipUWRc2iessU96VhtKd1k9AZZaUHrfaGPyHzQH2uqhDzLcanfHgzgmzzjBukpGWWNWtiJmh",
  "key6": "58vh23sxuUgNa8M9mznptXa4y8iZogGLAR3zcEfcfkUFAqVGy3Xt2DopSVA1UsYgR4Ez2YBiqVoAMEH8fSkK26B6",
  "key7": "47vjCMApLYyyXwHDXLY8JKL34qgJjuPBjh3f5Z4Qy13qiYUnHQxt8HijRWTXBzt3uK9PnYiC75CzaFTYELHb976z",
  "key8": "2CKPB9ozekDzksYtM7YHKTEQaoTcomvPhECGY8wQH4np2pxxtudQJAefHrxuCtrTBskxBj19LcUR9g8peoREvxam",
  "key9": "2oFmJ3y1UPsQzyc2pEnTabbQsQhNwmZJbmFdZhTZKimZYBehrjdTwFmx1RWmRQhc5tNvTw9t6bZYrzkK59theLjG",
  "key10": "2FH75np163KbLp2XXg1TZdXkLx8tYbrrAAEZYV5tSJJVfP4z3Y97V8ZPauAJgmPQZoMKZ1cstYwnZCJ9EQNq86rj",
  "key11": "5GYBWUiWWa7ATKJ2LcRnaAw1HA1ikMa6ZWUUcpAuXRya9Ja7cn8mVdy37jNEfBiHYY4pS43a7RHCFSyavs13jv4J",
  "key12": "5ceGWnjsAbqxKWXWgJL7WGr877AQw2Ps9JkmoFiyKy6gLNwYXihdDS3n84WqkCCCvSDcBTUyWkuWL358FTHQ73j4",
  "key13": "4Mcf1NwBxiHQLHgA2JwLWwzWZPTugtN4p8PimhocMjvo8n7RRd7DjgJp6Xb9WLJFQEBZynUSd4vYLHaXotvJ6RLY",
  "key14": "5TQa2Pofs9osvX4Dd2TCzUddygtSwDuqa8cQQxtLmB8WPLt3Yx4GzojRxAAjm1gYmGwfr6WA179Nc3jSXkrNBu3",
  "key15": "oXZo5rkczJD9hVv1RbXy16VsVsvCPcSp4n7UtkMrAZbwW5qWMxtH3Fp9s9FswKgU8u7hcpCdhT76iqThVYD2NGv",
  "key16": "2CgWaVnBNUzKuh1RCWVseqgxEd6bBRxLSbZuGvBfnBnBMHk27pZhqisGxJFJu3Hp7vZ3qb8ikujG7rt1W11ydQSu",
  "key17": "2PvmG6kgqErCZXdBgivxRcie4MUfSNKVcv1JCtSDdJCg5LrzeMvvaHLRuZPdnWonGC8S6ZwaDGoxxidwQY6Y31oe",
  "key18": "5SM6AHVHSgXnFfUsvM19EbTYc7X1dh9ueAxhiQ2QZQXNbyYUp7xRRHaG2ea6QwftcvocGC9xczf8Tb1vTWKoZaqh",
  "key19": "3acyjN1cKfsqZQxtDDEJtnfio8a8XQC9wm44ZK2ftHBPGFDGmbQo9cGQMRL116W7Q1tiqeNhEUCahzD8qsEeReRk",
  "key20": "62NboJbcAYf2aG5W8319WYA2R5nU922GVWNXsNYYCJTu4tef8x5RfnzU5viQMVUrPH8VaFkmrbgFmhsYz4DFdjJw",
  "key21": "4gveZWRFkne4ooC6aYBec9YzkBH5Pa7G745pp9Pb6abSTDVUdRhArBmoGDLrhS7CHcJmTAnmVKHW9s8sbiv1xtqw",
  "key22": "5sED5EJT7YGMwfpSzFEna3vSio2SCY2nXGARinj9q1uCeEfkxb6TkxnZ8aU9PSRKyHwi2X76kaC7jkRUqgUYz91w",
  "key23": "5m64nGSbmPtquxLHtXsNWMCyXMKsHNyDyTE1TFXVr9t4uRYAb39oSx6CodPY9Fkz6qR2avHwuuj4gi1XLHURQcwc",
  "key24": "5a27Ja5x3KnAWthvWvPgfmyDPTi6GHWeAdf26Sij1gaUq68kDSBKCWAEAEwYYvgnczQibZPWpiZA4hCz5FsmnYXA",
  "key25": "2oeoKEacXZVikYA7zQCLEeDBGvhWZanZBEB5p8R7st1LqaWnHRRTzNFpPstDEn7bhBKDnhRvBYk74e192k3CexZi",
  "key26": "2ayPf1bm7FeAMTsT46pvqNhGvVXymaECcJYRa3MavTpi6z6is7fg4PKRo1uLKkaxXtBHEXamC3S7shyH4vME9j5y",
  "key27": "3eMsd4mSgAzK2mdMtDHCqGfzw9gQytBLFxWznoav2taaCqmvt9C2RSLYcLdMv4RUSdEtJYK7pF8jyABS6ZPA6EQD",
  "key28": "4VGLgB4eygHksR6pqK1uuvH55wrLiz4LRc4sX8nNPt1u8nUDhjwWaKK1njG1ukfANRJehgfpihdZogsMsg65SNJA",
  "key29": "36uRD9SH6zhMekULQCZHfxhcvU5rXnZa3KUk8VSY1ZAmpY6EVxA42g7fhoMCp74xeGqH4Xc9juoiEbbmJ2jPQCnG",
  "key30": "8AV1t25n2iLPVDx2pWub976aJPTBjWaEr2APAChSyeqCxh2QUVTmLBwR8ZXb4NuX9DRxSJ1baevb1pRKMpYpToj",
  "key31": "3mhwidiKEb3U6trUYGk35ZTYJ2vLpFfBJjSkJWoYdRqBdDYBmhCdw31EHQtyzaEBxG562H2VNH41Xa3sT9X6qQhH",
  "key32": "2Db1CN4fkvQRZcEQq8n4azgdaZX6GkfBchh9GuHFT3UNaDcDQnshUbqQHReG4RujmqRe3EC2R8NVF51mfhDcYjTf",
  "key33": "5bssGUyDrSeu6nPf7ivyoVhHcwPYyszRtFrVvKQJ3dcVfYbdqvaARd1V3yb1gi2XtmXy2DbagthtPkM1zpVWfx3H",
  "key34": "2PsoYjUfudDDENJZZPHoGrMzSgxdintKF3iznjK2SRnPVxEr9bvNAoVLoL4SwgYSSDx9DaE8VQcBVpKCS4E4y8Nc",
  "key35": "2AfxwUqZbH5ma9Dvm9MdWQtt4GDuxWHfdYaNtEx3gsUebZc2VnFGyPmhsKwjba4J9gZwun4a8e4cmRihfEGdE4c7",
  "key36": "bhtJNkGdmqNt5Xr9uqxgS8Nif9TaAkR7534an4Eyt9k92WtNFH2mMsxkLgbRcB6Y37vD23TSZ3DrVeT1HLRUudy"
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
