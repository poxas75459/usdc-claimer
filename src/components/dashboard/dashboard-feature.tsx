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
    "3DZJSAE9V9CVQ9zraj8J5W54j24bWCfLbsr6ykeh1kkTCFXynPpQ8JaYrTzPwKXPxF6Zb6SgNyRKo9ovHu97ZSar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41iiCi93627DJrJ2mRPcrZWn9ky63T3eQrMeedWNQ1QooJbWiebt2rdvU7Pcc7t3ysv9xHHa92uJNigE42ajAfvi",
  "key1": "5E1aypdSzAsz7NpLevjPASwR8SMbbiGnchdxuvNeV8zKLumttCLU9aLPXsgnD2kZcJ7Ehi7FYrcNhmp2r9Ewkhem",
  "key2": "3zveN1csAPsih5En7DxAdjHjJLmbpTa3i2cFUcWEnEPk3kwW9MFPFrBbURBJzFqEBKGjznwfYNXZEwB3jipAUzro",
  "key3": "3Lxfz8NttDxbbEtyQsWvn6Q3gvqW7Dnr6nMeGQKPZzXrbtzbimtTh8vHdfAvd9xbbiZYnJ7zkuqfmmH9JNbuC9Vk",
  "key4": "3qjfjevHaevb1MQpWrqDtDdLzxAqK9cgnhQGbBxJTxr3bWw5abUoaf2TA8BBpu4rQSgAEj5bzB1hw3pYUbh6U9JR",
  "key5": "4c5V8oq2mtfGuqfAziaLHRnLopeNMWj8oi51WiZPymMsDysoNSGE36tm9KqvrT45PhES9fFkQaiG9hSViWoEQiRR",
  "key6": "4i3uyXFh6LkfHNL7PnDwBW4KdeqLmcZ51KMWfquAw1XkWkSVVMdqk7xidwF5PfeW4AwzgBWk58cXqiS6ddYUyjcs",
  "key7": "2e7Ewq4Fzsi75HRSaNfqe9bkFPozEqJYskuCEY4zd9hnaxSES6BWH5iy6GpHGXJt1TmiacgYcHxe9shM1s74Ff9d",
  "key8": "3GPnQUpKw614WzJ81MHxskRhP9KFSFnJJD9uPhua333X62gcPCVfNx4mHY9qRkpwwPvcTV8xQ9ccpthbm1xP4ZwY",
  "key9": "5VBLArMQ3LVsU1kJ2GQouQXosGURhvx3J1D3tMLb1b3uPraATvUdnjPCKtN7voegTWWDDTAWPyUd5otD2nmiK7ua",
  "key10": "21aJrE3itZxCNDygwuQpFp6dVmj2epSi8igoEnx2wpuvTFqXYWsM9BtKdCuuqNP9oapVk7d7cUfrV74dGVXvqRPh",
  "key11": "3wx3B9Pt8LTsFTbB18LU2ct5zAJRidMaPddKkhZMBfHPZrDhNLeEBKs66NZT19GTuuVt6BTmmXAWkow4ERXRMpL1",
  "key12": "5nzPNHKRiQ3GkiM45Mxm4raJVJfQSQ3XjGV85V1HNHiJh3kufghfcaX61r9SM9RX1qCwsE9Kk8Pj83tt35Sob9wu",
  "key13": "5wAr9ULuLaHMDSrV4FzQtLtPNarLKqEJzRqD2yfw3mdAwwtudNPa3EvvvL1bRZ9yQmAe9uWz9xuVKwH3aZ6b3oJz",
  "key14": "4XdBG3QwTaHefoTaThUrnmpd6d5UutJxW3pgyR9uiz1aakQfT1LmdsUrs3TzhMSAps2KL6Mup6ZVjdLqK644YDwX",
  "key15": "4G36rufm2durEQZTmeDJNvTehS6DEx9cMqdkn9BxU8PBfTXmhKvnhixVdaNQQa1WbDy5f7pia9VvcrB9R4k6PMZe",
  "key16": "3CGLVmzCyA8wT79Qw5RUikxeRdTPrvps2h5QWo1bGX7f4BcTTGSoZAyM7Ff94e9R5nT8fgUBAsFvGkweB2W62jBi",
  "key17": "5ogcqSjAZJNWxqJWN9UiXZY12Yh6qp8grKe65U5ru5VSnm318Uo3L4xzen8CgB5CWxoxfBXPfYgvfQLF8cXp8rXw",
  "key18": "UWQganRGxaFPQkRhV7qRWYq9dYjiU4ogJSX28KGohMcuzahyTSpH5jFWQRnt1emdyYX4xrzmxPEs87uradFbMcR",
  "key19": "5E1qdKVyNgMdHSVvT6p5R4WQKDtnxmNQRpRB7BEYdQJfXSQ6S97aySmKPT9nBuZFtZdWGc3Td3NZSanSHXZrWaK6",
  "key20": "3HzBEaoXES1f563D74Ynzrx7yKfwC5jhgQv24fuJgNzLTBNgqtFpJNWAW58sy2bgqCSgYaV531UjGaEs1sF7rN8M",
  "key21": "vyV8zGX7BBWYprjTSgAZF3DmSrjC3dXrpgPq7pyZUNVpVTczT52LLzaAgfmFWv9fR51h9v87exmaLaRgp7opqjM",
  "key22": "2XeHSUpeRwSTYXXMndpW4uDiiUZBX1HPARgejpV8UzCutQrrStgSsbWWeWGUtZzrmkeP2vVf5k8KVjb72BoZo7di",
  "key23": "3YkCRxr8nH65paXuZi8cowuGpLVrn1GU9HqEb96NiTN8sUEQBgGqUdMMN57atFTNjMTkKs44dRALZZmbhFer9Us5",
  "key24": "5UkzXEpfA5DBHWmnEC2kD34bYdW22wKpaiTbrU23itiypgvZnbB1iPvGeqh9srFStZNJX5Xd8uqrAK6pzFtAevuV",
  "key25": "3FgWFQeW4HNwZRE6MLJ6GegJdazqV1Pqi4cJPsWSvCBmjajzbAKT7aJeGzevV5Fk5z1Mc3kRqoqenRgJw7Zi7W8h",
  "key26": "f1xDpSZhegkkEA47akT4rDu2AQ9x5GkzN28u1gVApYaazPnJqzuyyJeJ2ft2Z6YvGCJ6HnD3KZrDaGc4LwtHShQ",
  "key27": "3RQ9N1fexn6hVrB7Qm196aTx2XWuZNsAMZLXeS6V9RfSu5Q9zQhBNQeD1QcZoBRmvWvi2T9ab4ZDbhvWmaHVf7xi",
  "key28": "4dssJykoDPufM9WwTUtdXAMpb4A5JZpTD9WiFFNqnsoA9XF2n8iH7XjzuF95WtFZkiYHmX1Vk1K9JHhsGdWthFS9",
  "key29": "35xNnDpAMhmB16PBakTtGjUQrsrYFxRpd5jja9hahZz2yw9pL3eSSRUN4jVamgWhqYZwRJrSuo6dtR2uuMHv4Fvy",
  "key30": "27GEMK41DMrMqcpmJwFCVYBp9dASCQz24mUysAZN7ppWzrZ54reNV1HHfpTEv8v1P8VRaUqzm2QGhcabjz19EphV",
  "key31": "e6SHPi4ubd43EQqQHu56rCswFxK949cyDnPHoasEK7z34VBm7xJaaz8ZNmnw2WNpgB62mdc2FTqAxNzM35Dq2US",
  "key32": "2dNh3hDGCTusffPrCCG9GvikcVP54EgMJjgpTJ8VjdwEYuq1W2pJgZfJcQrizpwwLs2BunkvdkgUW7YQZQYkqTWQ",
  "key33": "3oyMRkZHC63qA8VdHeJXFNoX6Vi9ycDRdJTXrFQsH99NFn3EZPCe7GuAWU6i1RgfZ5MwxPw1g32fExsxdQQCBa5m",
  "key34": "65CoUManYgoET1e1ik8hasVLkGMCJJ7PdPSFDgvjFKD4roz5pzfbJme6nzbqGiwpJGEWLtvyPid4bwftneXiF99g",
  "key35": "5mDx8hSBW7exz12vx5LBsKqAH8XzYadKbUwKKncHbpmbZxa6t18bAr3Q2fBbJgVJXZUyoBdspaAxZArbC7QqnAcV",
  "key36": "MSVoNqRof8FaSsA1nxaokvVFZAuuaL2rysWdwuDowJGu4jHvuDc8ssqJi9fpagwACbqohcWTi3FjM5LwsSKRi8T",
  "key37": "5bk4rB2HS6heGRHoEL3Tr3z4nX6ubKqZfc27BQ62kvKMhuoPVyhB5YkrRpCjKfh8HrRD5urvHcYS6itkntspEj83",
  "key38": "HBwaKHK55mEdFjUU1S7CSFf1HzvvuYUn4JNZPtfPi8GWfqyUhb4PEn6A55jd13FE5KQSmSTKkyPhYEVeU6tjLGn",
  "key39": "4XJFyUCRJpfW516jDkmrv4RKYkWXpDTdMwu4eHtQByCfwqUzvmyECsio43W8fto7gvBVkRFmUCNzDqd9XC6ZJDm3",
  "key40": "3Wwd24cjenEoo8Z98kg6xzJiEmfwzEHx6NdiqHQUMc4518z5RvxcnrQucMwbtZkwxBtXJRWWqNFSehBexbMrL6yj",
  "key41": "2WvKUnePF732sdvjkBz17S5zdzyEGUgRQDZV5j64riMLdK9Qyn7PZEkDBgps7dxkgdZfd5jXMwPRBN8DQrENwr6K",
  "key42": "2SWvBY5KzZeggN2SFv5YnLsCJMjzm6knCZQQwSuB1PAu3WTZNzo4MMCce8t3SwfjYt9tSNo1QGT2noEjVVoKJeZT",
  "key43": "55t61Rg6YKBXBMp6q877Bi9SUgQjvZB7jjLWCekMU8QisKYZCzMS69w7PS9gRoaWoXQdu1ojeutWuc31sp9LLn3y",
  "key44": "5GKASqhqLqQ5STwfoW3X9cRcyrcn7KUqTFPFnFgqZQJy3XELN6rmf2otmtvrP99HgiAvsUMyRCGEePjEoaiNdR2Y",
  "key45": "vVrNf6jncfwNUaKqsWeCmYPkFkmb5PnMYnLqr329XbMR7VSDmDYJaDWxwn6zq7sRY1YtCeAfk4EY8S8kkcJao8t",
  "key46": "5WPTEGFd6Ej1mSpSdnmMK248ePXKXAsfT8YYRvL6tCzi9GQsm4jT3AuN6cJpxaXrTkskLwEsn8kRRzfpPZFumfPy",
  "key47": "5tGXNUfNX6KNx5mowz8aVYgGKyCbQxA2SehMbR8qRGgkStutR3yor8cKpKHLvtL6iG4WAke71VsS6ATKa8fgNdBP",
  "key48": "4nk3PWZFRo8CrdhcKf5LxCGu3BhwDwxBwadhzS2ZxpfoQCQ2vGS6fqgB4fvMPAqJyuboTuX9V9JvMiT5QAP7wM7C"
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
