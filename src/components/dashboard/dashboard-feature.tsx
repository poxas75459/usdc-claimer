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
    "61psnLFhaRoQhLWDcGAkfU4chLS2s6aWu6EhCJi3xQPmbDuNUohMaagW7VQdTvrv2evrtWmCBQJ2vWBXGuLUN4S6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQDh1JUcuzVQvhDdZbJ7g33HbvMzkaBGnTd3wC2AQ6uNF6kPT9noT2RcjsQHR4agXnMj92UqfXqd9vcUrjtpwsA",
  "key1": "3pmh9nRgpAKAKBRU4UTu7MD6FcB2t7tj3hHdBaBi9F92EvYaNZ9beZbAooNVZUnY6ysZPxyNgsNMqaN8TpTTwseH",
  "key2": "ad65PLq3ndVcjEDkwojYbJHC9dUVsxjFxS5oP9JxueipyoJGRDVHwNxi489wv9JEZ3qGny9r5igeWJQWX2MPkEJ",
  "key3": "2kairHDamFb6Qud1PnFoH3npCArbJjWEaUzJUyXxoXiFcKBxxAwYQChFU8TWXFTAZkcgjwiWQFYJTYGKHFxkSUHF",
  "key4": "42sdd7jcEd13prhUqbzkRMhz95j9Ne8u5tqyQzjr9CLCYw3Nq3swTzY1zPW2P9SrWyi85ShUrX4NFXQE8y3sZZHL",
  "key5": "3D6Hgv7Z8s8ggLT97HZPDVEaCHm9UKifjLk1MBiwtm5jJSbbNpuaRhzS8q9pYYtc3U7FkgLxpyXMgwJXAjEYiMpd",
  "key6": "4QG9uzj617KFsu2d1Utv3W99xRk8icnPiWdjxikfARF8e8yjMQxs7t7in48qu3vtWMppPgo1MN2q7H7LV6jv16vQ",
  "key7": "5yLxr8cuRxPz9sX4SpPS4myKmvGxqMNb3mYwUWwDCtpRoiwhTEPE8VMxbwFstTE3UjqJtrArrUABGUSdnSq6oRBQ",
  "key8": "e2SU9kyoc2Q1tnqB3kKsYR5j6fVvPJtfzhSNML1MTDujQ5duK7JRCN37NEtovPxBtVmuSpdxPxaD3y9DFm6drPs",
  "key9": "3gTDjrD7YbbtPMDRgYrr36cFGyu6kCmQvgbYse5fXderghWy3J9xwBPY72Q9LQRV3BVYE4cXxrGHEFnDibmriqgg",
  "key10": "2BY61bW9sERKHtJhUsy7ZTZQFpsuZUuc7HamxjbpD4JMhfQst416zDWK7mdThS29nFzz86eLvPSnPk6NAkF84mqF",
  "key11": "4XA2AgQUHaT9QzMnnbLKWitBd8H32NYrJnydiG1jvrMoQd5YaJuWKjQyVrZq9mmpCqj6dkmJt3tsgtLpx1jPa17f",
  "key12": "3ZraAs5sA3vL9HU6oPz2C3BTQsbTqUQcGbyzhuCZyoMfoNsSdm8tC1Li5z2XAQKBifCHNB31AYQMErX5YyQxnGXf",
  "key13": "4ykNs3ECkhMmTgL65WCUqDEWDbrHQBUFwhx6PJZS6urZHoq3FnhNDvnTdSW6oWW83JfwiFczAcvaieifcgHxXJke",
  "key14": "4nJ5TaNLNWdU6HiQdt2NCoxMZEBjpsqws4F9Zw6jB5PbSQ6i9UvxUchmWkWVEteFiCjf69koKDt2i6HaZuQGeYuV",
  "key15": "ApWoYPx1KFvzKj7Rh6tWUtMFb7kMNAJJW8nLmLQps6tDFyCx27QBe3vX2kQEX8w5U1yj4sgTtAtPvLDeRZMhaSF",
  "key16": "3W5tZd9LWLZsv6qwJ8U3LGzKCbUZsVeXiWRtY7j6bqtvattt7miKGpZQxciwa4Bm7jJb3CjAqe1zDmPq2AaCXwbq",
  "key17": "5RRHmrkx2phyJJ3AHJWgqimNJeZkvyAPbC7UnGjQihDX4eA4pPdhVjmjL9javLmZL744Ne6eWjMoJmXRmUQVKzkF",
  "key18": "4y4GhCah382XGPKK88xuHaNVQQts9UU7hR4V5UpPkDyFHB29FRaBLmzfESmmfrrC1wQut52x36mHHokmNfTKKwAL",
  "key19": "3peVzNmSeLkqztA4x1BEyDu9BAnreZXLSq8ynBcsEgwnMQoAfgm7UHYU9zPZbFVrTceUPQvi2hbnR4TXjsHuARR9",
  "key20": "b7NxX4wxhU2mTr2DJLRGXL5jhB68NALkUfpn8ie6PqLqYCQEoD8NWybtFgQF7GyjzMmqfbyJb2jzYgHn5GcJGQ6",
  "key21": "2oGzecVetVcuGwZdQ9fFRebQeiwutbsx8NXXHR9b7abgo8PoXcKRh2mX4dUwKy8jg1BH9qSsjLQrfGrYuR3iceWB",
  "key22": "2k8yugnkbFKxeq6ntJE4fE3wViZKaUkpLykHKcc5L9uBr2Ci23KpNfmw45Rw5awaSpMiMcGSFqpf3WrkgtRuzqez",
  "key23": "DvJ14AeK7yfze3GyenLaHhsRTK987igczFxMn5B58MThSyFC8hPuUKDMkdy9Z63VofVWX6Qj9SBVxe3t26Q46Tp",
  "key24": "qTaPQsLqy3QwigAtwR8uzFuPU6rpFmEdQM252XKxUgfeH7JCXgQ4WCXQ4Q36ZTE3fko88aaXTnRbxGM3KQVb5bN",
  "key25": "wWuPDt14FKQPmFYFnYFY8k79BoZmfgz6aLciFALHLgeegJDJRiuTq1YBXTWjDttbLh7R9HphrXYQ84KKZapY23j",
  "key26": "348wKpKsy9Ck1nxZs1XtfRUZKzKioFQBUXdWRfqou6nUDwrektSEEs8ccXaZFfEuqr51fveVLeb8TpFe9wdt9LCE",
  "key27": "5scUqC2JMzrYZTvHbwuWhTQuuKNEJVJeHSELgXn4pmF2r6k9sUozpkz4fe8n5MFtvESmDA8ZRa59FnKWhrqtZTJF",
  "key28": "3BBD9NvuA81cUAs9cR5EVJYoei5EqumCQBrBMTxf9Zwk4VysNFw1TKbhiFJbp3Wv2X7JFGbYgCrzGCsRpJagNU3Y",
  "key29": "5kfLaXJUZtjfZwE6b8UPe8H8QmMH2B38feYyKbWJFJWj8zn7Xn8BB7bDBFNBBDyrtJo1zCmWLYyRNvW6wZWPxW1v",
  "key30": "3NbRNQmcY8Q84yyVx9b2qacRgFkQQF8RCHxDGWxLgoS2xkBK5UoSnAZTGU8k7wYjoKvx2Xj5NPEVHiFQD75ht8Sa",
  "key31": "ZxtBsPgWnJi2JiYGbZbtNcTTFjPNLW8tsMMPo8xAFwY8o6xeLvVLbwUHL37Sps1h5pxmgtkEFhyK91avPkc9vcF",
  "key32": "tUMjERYzcyU3TGgyYKxp3wtdEXy6AHq2gyfKFc6qcbsYBsR14iCqTJ668mGrU82MVHAgwjv3WtJyrWyxD3erDgQ",
  "key33": "5Xkvobkxq1TP9WHnaKBuAyAR9Htcn94TE4qWySzPxhTnyKTUxn79Y3PDsCv6DxZ5sCjNs4TtcGx4J3VNuxoALPvE",
  "key34": "2ZqLw4ceWbhV9UpHxdjYm2bTZL3j9GatfWNs28gR7V7jLc48KCGgrCEupYV8iJmFj4AE6zPwjzRzsZ4qvtGxaRJi",
  "key35": "2nPCbnKbEReL7mc3J8yzxpyYHCifojG3ybGxUWUKhmF67Nteg8xK28XcvAGNsE3keAVT6d34toN7QeeKKAXboa5d",
  "key36": "61FhRNJTZSjmk96p7R2e4oNGG9DYu3PnbEEkiP981qugDA9UJ4YHHaNyaMep67g4fqLiJ3H31Eko2mYWGUvhTcY7",
  "key37": "4Gy5NKiaTWpxMb6qR8pAUYLBp2QsPYL7Epn15t82o4Wc1i6R1okuWLjUYdG8NUud95mRkGrZdWBKF7wm97jGkj5y",
  "key38": "63XEguZjeQECZAWppshwn4R3mrQtRkBFdUoMnLXyocK9xf7yF1Mt6hn1JT2hvRRwGbYHpATvSoSuNLN3DmhrMuUP",
  "key39": "47pKFgswQXw7s9C6xWKE4UqbUFsRRGEanBPUYXhrdkc7MPQi1kN4m1jeH9Gg6kkMckkRjbThutrV8FuowuVPLZ7L",
  "key40": "3KmD7vYwgQBHCkjR4XKdAGmP9FQoB1GVRRatHXUCQytkKbKHa9zGPrc1u3VMBX18g5Qe5v5PvztuVyj1cTNUzggZ",
  "key41": "2nBVKaDcPTwGxLVYtREG6z153zReAQHRH1ZxoncaW1vVrAMzf2rZG4fsBsZEY5bp7JieSPq6GqcHYXy9EDoEBqNv"
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
