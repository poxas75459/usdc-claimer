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
    "4W8prtbZxnpVm3Hwz8kTnKHNEo3YHfrsVmYxwHwLB5ocRmPn51TTvFUoqK98uWXSABbhKUyURnseR5ybYVS8QTZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wPP9tgsN2m2Q5yjWWugxFdenPWWtp7M483ryCMYpYF2eXmwB4wEZswtc3yEgPdScsCubV3kh9mF2hwEZoqKrSLt",
  "key1": "4jwSwxjhtYmSVhVcDtKXUMxRQuc834uP8RSSdFXEdwqZ2ioY617X6c8K7svfgaWdtyTFmN3QQFm1QqkSv6kyEuLM",
  "key2": "3tjJ7P42DkNmTjxwXEi1BJWwqsy16nAYmCKGBFkrYmPJ4dABovLHh5E2WKFULsubTF2r5Z7wioutoR9bsBpY2kde",
  "key3": "237abGFfQ5TM4FyPVNLuZ78S6Lx6PjJRKy9YBoKoZLSgy2FdvubXJT1yvpxVWvhh1SkJp8ZLnYwg68LzHSdtQXxD",
  "key4": "5TckXz7nP6rDayA1tH3MEpohzomzDjgeqVGYLkj9DWK2LYfZnegWPoKRMSjCLvZNAxfypUy63m5Fac7gqQpX9SYP",
  "key5": "5dGa3ey3Yb1ooVES4eSuY2E3G1J39HExHv2QRt3AjHEYAfYqWjPBjUY7Qedd4cQYV6Gza5pM9rTqUf9MDceaM2kK",
  "key6": "39NjUKc4RkxC2W5pVgGeZ9FCMFXC81Hmypo8NcUupu2dqcHsQZ9rundMcWLEBZDn1W5pfD5L1FeCVY4pJBZSYDn6",
  "key7": "5Lx67qwUEf4LgNBPY6TFkRJNhzM16Y6Ge2huKVU5ipgKxSWTkYwYt71YwdcF5xA1dHVX5BSoCWxyGmNwFhWVPo5n",
  "key8": "4D7tMejzot4ttiVKknXQrdwWNVppJ6xdfbYScAdNVhbUKZ7miDVZU8nKCs5gbsWdMwvsBfn2wXm1fd1QTMpKGNaY",
  "key9": "5KA1jDXuuwz4nbwH7u9orRYv8qVQ5oTpyMzDGKCN3QyKcGiAJj1D9eadj9Zf1S9m5xCcCDZVTNiicCdwWp7NzJcA",
  "key10": "2FtQp8w9AL8Pd4j7aqhct5SX55VGWYMkr7o7aUtmPvATxNfmHete5thZ6hf5E7s4jWVgdRTk1NbsBTosCjx3U1HR",
  "key11": "53Bviczset6woisf4r2axWDwcZ2jgBsefdT3VimJWkrtRVKXeaVQESCJwERP2sa16e4ALxn4BXG4AW7b1VfA13Qh",
  "key12": "2mp3cZiKpFGcDfUGiXd1jjLFSKrdQXDV5pxJLYH4Ss4ZcPGoYbvuDMDnTWVsZoQjMGjEozBH9My7Y1NQP7mGdJVt",
  "key13": "4KfnmBNPcwP79BQZBHDe5SD7wp4G8FgFRKCmSjJumxfRBERxHgQLYTiaH7fWCcwwfQDXb5PV1PcVm9cqrmwawkZ9",
  "key14": "64xg3pVdkD5P8ZwMoEcRAx9kRi9n2LmKYPVHUwkG6TLjpZsZt8ZmMvkzUne1cNhE4njBjgkZbXi5CDhiBtUbzLLv",
  "key15": "2i6CsHehXpG63hL3N4XwLvX2jLeo1gbrTC3hvNgPi32jGCJX3ftXKJgXvWH6y9Y7XYWaFofPP4BLkiaF7ayb3G5g",
  "key16": "55T6Z3eJo2PXNcZE9tsiSp3qKX3h9wmiJjf5o6G5zVKUEkmiCJzzfUpJMM4ZoJantmpkrb8zWhfFRULbfTA74ntH",
  "key17": "2bX2ZeCBjSap6ymQRaeUGw6Du9RNfuFnxYRcc6EAx9mbGtpSgrmgShHkUkX55nS7rvWWs2Vbkdxs8yPfTDHX8MLm",
  "key18": "28mN2WPmPdzWsJtnB8onQhYd255PNcidWZ88PqqzJHHNpa6oBXim9WbgFEaoyQ7MyGhtjnuZixdPYp66Lwb8rZeH",
  "key19": "2sgwVUAfJ137YokZz5wMQu3MH6F3coBXbo53xw5h2xKqrKusa1pN2Krp3cXx6ud57xiumkhmVLgUsXD45mFgcBK7",
  "key20": "TNkv6rSDF1yY8QMrFoP9RN6SaZTQTWSBwB7ugEyCrNh93pftp4Q2Xq1f8dCkYLWwyM5RkfcG22gxjCFkMgt95vp",
  "key21": "8gkGPHbVwHh6hC6QaFiikiNYdboP9JKTToMmwDcyRMWxkFcDJDjAjmwXZRV5NAKS449V45Y2TJK1TDVujvnSgXy",
  "key22": "3mCNXwzpMKUuJnhNmGPHfZ6x1URQQRXKpi9oRqkLCnTHYmumdzGRTs7tCKtWFCkfJpP52Cq1q8KYyjnJNfjodJ9g",
  "key23": "7CLaTmZJKJ5VhVDLeqHW62ehedaSeLYLwMcioDkHq1jtcCiVU1GvZgjvhd8xzRaRoGBMTmcuqp5kRVNnYCmtXq3",
  "key24": "5nK5677XM1bd6nGBDFx39LGAYYpFKc8DzkczWTnQQEUyy66UxB61xR3Tw62xfqvgC7uGEAsgucGM3ffJnrCQjc7d",
  "key25": "3CEps8eJrwn5jQ5mfVynoid9zXJZP9tpPCKDFCy5Qk8FXTppJbm8ji2Cep6NEgVKgDrVCtKU5hL9BmV6XRgxccrN",
  "key26": "42kSqfjPJnePxFQDgtZBSFCdXLxChpsFEv8YT1gYzEePPmwvuGvVEEjtAhbWJG2DZjRNCAv4DznzaPni93sRjTj2",
  "key27": "2pD7NeWJCns6GqeYgDGixsFnxbk9GqEX4MXaCFQBQH2yUynpC53B57zJAAS7MX69mRMC5bDbrGNYrn3DdfbP67Mj",
  "key28": "3zwzYHGX51zCiYEHogcoV9vTj6SV6MPdiSqKn5qYmp1fXtKvvnhhfqt4jy69EXGfjv1uWDs8CSB6RzXFjtTxCzbh",
  "key29": "cYCaigpFNoobfGhoxe1mJGUr84TXhGEJt8dCLgHGWcqiTQV2yT39XFG8SundTNj3UBaTYYobNnEfTbUDqqmJrSn",
  "key30": "1EE1TygtL3xiywwngChjMoixq9V45gZWMoXtzkUrSSKariLzjyryQFZwaa6Lo3bC66s6FtWv9WAL3vQd28jJTqE",
  "key31": "5cUxjaAyj1YC8PPiYn1GY5GHTeLyv7bBZ6Lap5MwBuzCqayUvCngkmpEaWRinNKnSaixU8PQgZK1bxb5u9DLUVnL",
  "key32": "5EVroSwmRQ9EosTbjbLiEs5rkYxoqfwU36EmvLVuJXRrxXo7kGNTT499wBn61tozQj3sMpPfJCvVgqGScq3GJ39y",
  "key33": "3vn8yUtbCgLGz8imbL3qkh46VLuHC84K3upzGubWJntg5j2WsnVabizKYzdj21zSm5L24eo1X4VEUdBQ11xk3MbA",
  "key34": "5irm2VxgWDWAG99wRWnhQGM5VehbQohWCW3XzrK5y7n2yLtjPrUg7vc5Th1EjiuDwMS5Z5VEfLHKKffGu1yZZnSY",
  "key35": "5YgtwXSuiTEGyEygwyBqQNGfWbU5hy11h2xZs12gNZa9VAUoeHza6woMRJxJk1Z2rvPybeeUXPoDomQzp5X5NszU",
  "key36": "2BtWbZtNE1JCk1mYrXjRWnevwjJgEtFb6wPCxdL8HUwWmNcFJYbY6UcLZvKP5kEsxrsPf62j4D8Bvhyobb46BMs5",
  "key37": "FL1x3gSCVBDCEfsWs1wxFhVJrYeUq5hi5QWoXD6r7hcTYbypo7V9u5wvQfnjMTH6cc3aaY4UvbqxZ1Kqtd3smUh",
  "key38": "Q9LJQy2toxZw7ESAbhjbS2ojkFoC7L8w6zMC4Tub8cQHrwmt1LwCksXwXXd7XrhHAZE3NyNn9sonk9VCZNRrGid",
  "key39": "8W6NdUFbzytiGAjM2QSWxTj1SU6JGz4yVd6Td9nY2uA1ByyPmP7hPWDjNgJigzbnNpUhDkv8e6a24YmiBvXSL1k",
  "key40": "4ZzZ3tFYtfiz8TQuos2hNDb9QoxHqziP3Y3By4ufqmyCcgFycnHjxHMjvMHhkhGEsXL9M7QG5aEsCDgfVLjf9bbG",
  "key41": "65Y5vJUHjuseKeHHTfwaDb3vCKygZgDsVDVYVNmbcEFZAhiSoGqteK6n9SWND6PdTvcrEdPvezdCTXbsiPeEGjNY",
  "key42": "xZSLFt3FfU9YaxwFyYPLw2yY1WAusRMHnTabiq2AgJAVew4Lmqdbfs5AnbgfFcxtVcN2QKDeA9GkEM1WP2X8dnC",
  "key43": "4c4kXkBB65EgSGcWn9VoVpUEnwVffvec1EX4mrsV1pyctsjKn9owHnbZPjorFLSvprirDmT6nanf5FGatnCgZXxG"
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
