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
    "jh6BA717Xwmq1TZoNRKMar54J72kBiKLe1e7eabxzH7G6YeWN8L8PeWC11obAVanCYC8UEx5WhNUshqPmYUNKjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zEswVp8BSDgTKSDNmf2gRUZ82hq6GVP7MRzjqxAwGWxzuYTH73UaADdyKDK1yDmtBgXccTSgRN8abx6o6Eqv7eB",
  "key1": "4qg7aDYfeFHcZwnZPSCEPjhTKnd61Cc86GugJqEdvU2Nn8eSg6YFwAM79magH36H31Mj1Q6n2yGuUCcQcKGDqnq8",
  "key2": "4ERBcaicwNkQ3HU7hu2zWxq88Qpm5344D1XBJyBqqDdweJJwvs9suzDSw8ofBSikd6Dmh1nEu5wVzXDAMp4iRGCS",
  "key3": "5MaM5S5i6Ndud9NhUSqXEQpjuotfwZyWEm5y15cuRgFBoit2AcQ3UCetxP1uYHrs4AWU3opunG43xsXwWEj235YY",
  "key4": "23veWnqVdYtjna8XZAUjJSuuZdhCw3M8MyT1WomkavWJqM8KicJH6DJsbkqmJV8RpycPchHwRE7MJm6iAK3vbbo2",
  "key5": "KxcqJu7ERJcZmAi9pA2st3MeF4SBHe2nnmTQbxmjwbBcAufysuQeeu1AVb3MspWrvbbjeGVAowbfHcSGap9CoqL",
  "key6": "3Kfi9hhLr8oEHS4kUueS4HNC2Gn9ZwHp6zvMdMxJBetbhdyp8ngrbvmTgDEo9oQJzkMN3B5UDTjysqXtNjyH9krD",
  "key7": "3krBbNc1JFhvmkgwetN7CqSfc23o8CQx9bvYEhJws25XZyu7djypRUbq6X2tTF7nMSbcXjS6i5piwqQfjibzw3oo",
  "key8": "2o1rmgC8ELhsdk28Rs8oRR3mYP1WWLxd9KkU5rJzPxCEYyNJ44GzNRHDV2PPiYeX2k9uY41vMA9hiv9av2Fng4XV",
  "key9": "2ivxdjsQbaXNeqhkSyjRDFLtGY2coazEFEXQ7FR4BGLUNTUcnsXvafLXLRDJb1JMHWuJy8mR8SxqnQ8FQUSXtza",
  "key10": "36GMAnqN4rq4Y2GvyB5BKwt7mbbeiJnmiYi3L5wra3UyG7VyrFPAdDh9aDpYt6QwDsqonXzHKxcKcgenqpN1N8wh",
  "key11": "TAh4ddpLQNcgxwJCp5QS7s8x2ouNzg8NraUAY4NwwgNUV4rSVtpu2YLP2sLnBqfUSMrnR69CrhdmuFT9cCFut4V",
  "key12": "2FKq3w2cewjxmqqKsLr5apoCeQkXvjeUqgXatN3i8CGAFJhMBW85uEXqi15U98766yLaghLPn1eyX4yqjvmKtxez",
  "key13": "4r6SDywjF7msBWVh8zdyUkd9iemm3aNd2qQmxJwLTrzwza1hkb1VtM2CXwKWRMD88C24BWK7KuATJ3fuHDRvPHcz",
  "key14": "2Q8ACxSKYACRFQvzKU2puRkkQdFjx2NnPSXs8EmZ22SAERvNdC1kHVi5nbsGw1p5M3HXau8iSNqaxDWTttPA1F1G",
  "key15": "2ATPMwXnGQHP3mD6itj1torwH3BUw8tjEYRAedBhKBiicwAYx46atkouPtdRRzGoPNcGxge7vvmsSExKGkSKjm7F",
  "key16": "Ms2dU6ZN1Qe4DYF547Xr2ae4NEyawuLGUf1BYtnxa2zJdsFHnNN3RobZ5E99HzuaRwWBDpE9ZohTaFRyYeEJv9F",
  "key17": "qYzecsmiLuvrZwbZkZPQXcwpe4D6miZ4xGPQms8xnX79U58akhbLQDvtyWxqEiysuRWJN4WWoU5q4Z7mCkHYv7u",
  "key18": "yYYBy652s9L1wMzBTtdnqLbsEJR1yJMgBTVwAeuwsa1ukMjaquyyLFiQ6xQRj1MUTEcubURXUSgTepLgtbPaE3p",
  "key19": "4ez86om7296Bt1GY6e8aEcThHcD3HcbXBYk8sGmESmmChKKDb1S31LKkMm9qEq8AnrjZV37SHt2VwjBnwrXZ2WKa",
  "key20": "2rsjUBsuNkDBkNZXMmdaLeY8TZcgvD2mrg61oq7zRTQ3aWbSwZfo5eXnr3XtYQRzSPdHpgRDBwbP14w8dGB3UNLM",
  "key21": "2wcrAoiYUcMAhkcWBWD4oRKWfGW5gtDFYL6Kr3jvMDWzk2R7MNcoUenMzaY1oexUoZoSPaHvRV21ZKkfftfYcA6i",
  "key22": "5PBdn3HRx1d5Zgs63PTLARubPv7YEp24G2JSK39n4LnUjR6hbEyxmM35Cei58oUyNzPmkSfmvDZc11A6RtP9wJuC",
  "key23": "5CG3S4JsGN1rvbFwFDcstmoNRd2Xdr9NSJNHJJhEM1fUbnngVHdcpPLvU2KyrSnccuwuXwqSJmuddkonYrtvZrUL",
  "key24": "5BhSrcjwWsa2FnkH1xkiooCbLC4T8xQwYBgqgFpMJuw1U6CHYekyHxR3iVRMmc5jb5ahotGQyJdtjsiaCasmP2WW",
  "key25": "5EZNhDdyxjkpishi5g7t2x95miNSwmssYa6UZUmdYfaX1ECJ7qsFJUq72vmvurci5rgSapFmU6iBa5DmbDk6YAtE",
  "key26": "5jdEDrv5Ge4WNdPhToZQ8QvhAemq2FdSLeBAVZydj7QWPmdagMPQnQNWBrxazNqwmVBrJDobEExzJ152jt4YfRwg",
  "key27": "2sSQpeUt3sWocngb3ZJVcW74iRG3KBrVXTXya6cMawVwPCxmHAYM6UTMUDbajPAzf2fQ4eq2EDWRScAkUFesCTJb",
  "key28": "29HENXRrCM4G693yvdVQNNr5WsyiC4pkjzgKBWz7eqxoyDEvXpnKu1xxwcicKyMnpLf1aD98qAHjFF6hPXchFZg6",
  "key29": "3nJoAFwYsukciDvtdW45Xh171hy3cnK3Z6BtprV4MuqadvKHCtR1s57EC7Uwm9bsSsKvm64YTjCErwnnBDzj5xic",
  "key30": "5zZ7GkHepzjSEXiSmhy4s5uVYsdpCtSn6Jibb89Y3EKfbqjpLfxEHX93Wa4K7Z48WoVhFG9WqG1bxkUDVVKZa38e",
  "key31": "3fopX9N9f62wjKQw6PKyzqRi6UF2wZZNGTdCPSo1n6TbHwhv31yFgFkXZ8tdkccEWfogW6AUAf5W8kvh3aL6LNW2",
  "key32": "3YraJcDtjp32T6XHPE4GEthLq16mt6CN73Tz2mcounoTJnajUvNJ43Tz917yr5uV9u1hxKsaAkiyatNvzFGuKdUN",
  "key33": "2i15K46adS7ZiDVAg4MBYGVFbC6P3LDNywSydFJ2hxkPyzirxedMwuFCzsxxtayk8ESzge8x6xu2xUABDaNT2eXt",
  "key34": "6ehHmmp21fdhrQTwip8HgEqUU3cJqSTCcL6tYChNT2cswttAx9jVRvnbkARFwhjZetfNGq1w86URF4Xtw3KnGjF",
  "key35": "Xry3qDHEEWR98z9DfVHicRM9SdjeL3otetjKAQztubFAU2C7bXyhurUDdFDTyBT85Cm7wwrC88ViQQ27by9JNC6",
  "key36": "56XjoZZcti2B1MBMUe5eNn2kxksxTJFFxkb6uN8RrLbDDcvoxwmgLVbvrSEQJ9rG3DhoddXeXhFTwRqguAysdvk4",
  "key37": "5t3fB9WthPqfdAh6atfyZgFvrzcvv7ptha1AdBaMfZLS5Ud7NYjAya5QYFVVy9trK8wtctnyzGkVhs5fWvoPddJ",
  "key38": "4oeYTuZUqcrCooQW7nmMs49vVc57uk6hv3xvJitV7aQP4ikZPzpJKAM9sjTMKVHtEPunhgMjkqcvMvBusTCHSQPz",
  "key39": "3w5fUpKr1QrMhzrv5UXHQXyGpXmZfES6HwY1BrYNCt2HPuk8QL7HbyshaxJMZAENFbVTSKqVC6x8NiGXFHnT3SL6",
  "key40": "4X5RiA9bkKdP11Rsn3qGM4U6Wd9XGtEMzNWowLFJmqB4nxGF9RgrEzitFnPze4a7i96EgBFBZEXcjNKCuwGqYMnY",
  "key41": "4zT64ddnP2VRT5RT1GiRVDo4ZSCZxD1Cx9w6FX1MP8arGnqVUpFEKg6bT8UJRhxfBGdiEbH1XkdqgKTdLRx576Gq",
  "key42": "5cAFfi95JyaqPWYvG4SQjXXUaeaRHeqAAeWXEPVMPkHgGmaJ1yyiNmmMMV2DoRHAJV5SQAsxdZ5McVhrrTeEh3Wh",
  "key43": "4CKQBzJbqsPwuB1z81AZdhsCt69K2d52veRak2FXoiGK4Jjc9Fgg5g391YaY3ii7xh6acLiL3r2TTbxT42j6jwKR",
  "key44": "4Ygk3v9LbJWvH4Frb8c39uuxKPCGxmjNcp2h2yzg8YgWErJ4hVddAn6TsMuCXVirBzK16EFVRsfr7ww3jmvPFiHV",
  "key45": "3Lzdraxaz969giCuyY4TjNmL695ihaBU4UWfvr2ne29QySfHepdLma9M5nZeFDNBM7bUvMcfLQa9BwXXMvGz6HxW"
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
