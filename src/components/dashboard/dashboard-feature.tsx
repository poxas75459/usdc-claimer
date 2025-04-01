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
    "nFBJKJLEkYv7RP7cBgJgqhRBigwLnmUnGjnUpDDDmw4L393tw6gYx7kafGvC8MssgSsjukHA3KZUaFqihz2KvQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hFyCwvEZHRxbdG9MDsKdnHPnwPzTCAJjNLJfxBpJtXPTPzSqo5vzofg8FgrQAmmfpJBpcNXgr2fp31nnCviuo79",
  "key1": "4ZX4wqHaNimKZ1vKoRA2Czf7FhXcpeWVPqw7P91nsdfRXTscAxJvK3ovvVqeSxxUnUEFuTCSqDvY9AZjKQEuySBn",
  "key2": "4cPE9UFBbSYUKZuFgQFbnw1WZWssBd49whUdB5segska2on3V1cuPcxARtiZDmMhRCoLfdxPfgSHWJyieT1xJrMJ",
  "key3": "ngccrwATy2QoRAcbNeC8QU3Fa7AHrioTZsbPndFDjUgzf3KKmXLbKoV4tjdNFPNQJ2Rj9giUMLXDPNaigvvZLSA",
  "key4": "2PQPic5pHcK5H13o8i4MG932qu4GWo443gxaG3bJtr4yHeBXM2kzrEcPV9V8TzaDJSTizhgJ56SzPYcv57qZvHpD",
  "key5": "4jYkDZWBCT98c9Sm5BgADNTuPKUdpRM5jex6Tq8qNR1KcrrcPmaVQRy3aa7TADsUhagDDjyzVxKNagUffryAYkMT",
  "key6": "42o5eUnZYaYuRrrGcbXRFfwAhT51Y9u9VE6abuSJHi37MeF71EQPQeVSpzU4Y2EDD3HUkdF81N2FrcDG1noFMPXC",
  "key7": "4mtfZzMPemEoyHb7ZQm7jMGJWZxSsthtcQpo4YPr24r3xSejqHYLau18icCoe7rwv4ewCq7ki9dqgSfGt8CwNP7r",
  "key8": "58k22Y8oEaqHVTb3GzW4CntEuwMc4fDNrv3xggbcvFLsfk7CsmG6Vkw3evf9EEo9ugAXWZhUDAR4cPj1z9SqnpoF",
  "key9": "2HBCcKFJ8XmLmWXxXs8ky7hdeuLwX4ye3ZAuikN7tEtDYgTJgBDtQDGxHL3A3SMzpbvcXRqZdNMmfsWXUzKzRZr4",
  "key10": "pXo44t8eapQBJ9mZwvFcTtJg1w2SMbnw4U9dtGgqJEtPNiV4SUU9DTtz3hvYzwxFooa7fznC2DgJ65T1S2A8Z3R",
  "key11": "4Sjzder8gLuTKHYmwEEMPfhQqH9dXNHXk6hJBrAuTKfYBmzcrtAVur8MMigYNEPACqRFdDEhMMvotGsMwtrVu7nY",
  "key12": "5zKuJCPc2J1PZ7kR7H1WkCcX5RvxSMrtsP7Hq6BB8FD94zFwBeX6y8pi6KtU2xRCeHkxxBWehua5j3DHZVPnV94J",
  "key13": "4AAPLqZA1wX7iEW75KhbcZjhAKNJkha8ReKEPibqBrSG2v4RtVDkZVgyrHWjHhGmMz1wdQmBLGXLkWWtFf27Vb7S",
  "key14": "3prMbCRTBqtjWJWRYopNU6muHPimi1jrzGNptCV6jH9NwZbEhNCJKwLJkedoNkWLow3NZCV1EERZhPdjW3ZmBxWq",
  "key15": "5W6wh6FBbb7qf5h36SpTsuzpXnDJc8RTMNzae1YhPyj3QiG6YY2bMtN4cp3JB7BhoYFuatUmyRYRXPV3hNBLpo1L",
  "key16": "3UcE3yXhKUF2yoEsnZMtBe6H7TFxSWy7RHEXuoq5MqUAo1J5xuibVLgBTtN8nPrHmuHK7CJHMEXPn7n4QxEjoqUi",
  "key17": "5rpNbmeQkouhBvGoGA7gD9y9zhtZskh6odGDeztcs2er6L7DreRetgWQe4wXPvypArfTib3YXg86h6RyT15Ef3T7",
  "key18": "59PdWBN6X62N4HqQrREa88GvT8TPXwAysJVPVpAstzTgTM8dnrfg5qhThoZ3SXH2t3u9jcsDdGtZoLFTKHK33ezN",
  "key19": "5fxYtz9fQjk7ArDPsnWqXGwRmze7xWpbuECLRNncM3CmeShUk9yngLacTT4vhXPoKJ5Q77vngAoyprXZpq4ANGcb",
  "key20": "3ZWESJDcjqek2q482ono9thepeFznvtrBrWEKrJqYrP9S7oXHyeyJwe41Y1V7tAvojVw28Bp3B4MFyBVN5bJ2pP2",
  "key21": "3YNdWX8aJmsSqZAq1vGumLf3Sxw5Kwbscx3hSVSvgrMD7tDUpP4X5uhbSKeF6fcdb8RcJeYy2fXayEqmaUDYAUHe",
  "key22": "5C6S53PMT2ySe34nQhioAmEDoHd5ugxEkT81qHJBafwM2CsgNno5z5oyxNMu1dMpgJBTZQrdtoqqYWba7g8NehYj",
  "key23": "4PHaR23714hGXoPryX2qavwvLbx9of4waWfQhs6ZcnDDMxW2f3ZQsfKt9mdFBcYDAFwsidbZf6Xo7sqVVVvWE8jY",
  "key24": "48H8C6REfQVF6dzhek9PWPzUyY5nQPZrYYokyM9AfRG3gviL2gZBNitMnXJ35uDWYkHvhNGfn4UTqmTXaFuCf9di",
  "key25": "WpgGHAhSB65CDzvio8QGHL6WeccFMQa4foccu9RhHctXtZHsdFuDt9MjYDQpvLABE5853aTZsKaL75JV4Xxnkx5",
  "key26": "4WmQ78XniCBUZM3RGmSC8ZkvGGihoAjArUYcBztE3DqBR5KouPy39bg7jwsLjnp3fyoCQGFQtHCFNVLSaHgojWY4",
  "key27": "a9dfffEc3pVkWtZ4ND6f9pHUWrHJVSGpPjCRkR95unaP7yMwocpZsfhgL6jXWuUwNLKPZHd3nxSDyKFFH3Yzz6V",
  "key28": "3BamL2JpV3VdbuuUFoKqBDqgVN5nhtWFshtoLMbRP4xwDVLptcRgP62KhzM469rcwXgQXgbMyH83e4VveEzdAAVo",
  "key29": "3pBZyLYuXMgkfUoPJG5wdppmG49MECo6WEvx3JZGtNCWMVzABsoP5KEVJ8yXtqwvj5znzC7ooBZGhfTCKbMtE4Ub",
  "key30": "5ttcdgkzRMSSANppGZKF4VQ88MEihSpRdvy64LMRVVeDmigrwjZfay2F7fnDECxC3qMpSAC6DizJk27XSyQEkuTR",
  "key31": "5y1FsJEXggHepbL99cWjNcvRXSBs59iRHu65Bg8Gv68AiBsGLasaSyC5FT7QhkNDBJNcTu7JcigrWKELsvEeJuij",
  "key32": "4MZxRKgtz2ncVdHD6FpwbizzEPRHi2Vo8u6om4wKUSuPCUkvzhy8UKPVS3JZnxrPQi6Wj2T6MsU6Y7F5mWN3oFHP",
  "key33": "4dcbHqNTL9GiL17soVHqwAyXexGP8hZHRp2GgrehDTQq8NZ2cc2utx7z27CH4mMvNDQuNBiRroysPgWmJCH1KRSn",
  "key34": "7q8iubiRLyss6qkrHXYeFsCxzr9jQfbyaPHyYuY2KK48SdWP4Xt2t7uodUmJtoGsWGFTWZmRNNgqoYfZwv81rrE",
  "key35": "51bDuy8bJM6ua8Nx3PVWTP5CNNh5gm4bieQRNJSnB7cUGhHz2mqnTwYsCdFStwuwgHd2AfMv5Tz51uN6JEiZvevG",
  "key36": "2cUXxx7SXA1ygF9DCBJbBVGeNHKkBoKEqsadE2vy7H6f3eDxd6UrvbU87T6Jv9XczVVTd1fspyRsqHYd4z97KoXb",
  "key37": "4b6rnXSMdFKj4LYtNLoHLvW74zW1EX6EfkSycBsmma29isCcZVgCwsvmzQNvjfAjqcstP2Hdjr6UvciMtmJss2rv",
  "key38": "2JUGsBEgtnHGCm6zgjgJUkYr9rM5utbGQarULTc6yykisumQxStn3uht9Yi9FTEGckQMPhHTCUr2hrTVBBQ7YPmT",
  "key39": "4XCqMEoDL2okwizU2EsNCECCi9Dtyn1f8jfE4W75d8C4Md4fHCiZAScJVyjXL3jkfsEPm3ahfSQc4gFPhvSjRTWB",
  "key40": "FzXUpc7eTf1WkjFp2WePbuZakpCGRvym5EQYFeTUpvouU4eWDKDBiJn96BhDDPNC4ZGHauZwDqbcR5vBRDwyGiS",
  "key41": "548sVf9SYmvSoceqqCNf9rH1EMVLSmzpMWUJQSgUiJdfekccFD8wWukRsoZVZTf7jLJ7DuWbhxN6d8KqMp87ef4Y",
  "key42": "3mzocGi9uhp6KEp65rqVunAGQB1NifeDuByHSL9ZK4yuxHmVHzW4TN78VTa6ZYa1eddpswqvgUSccvjVpKbE5LCZ",
  "key43": "3KfJzZaN8Lz1HeAffY9fDB9qW3bMtYsWXxC9EAJH9ZDwXY2aA5ZVKcGPk6YzESWVgKBurmLJDwXv4F1AHpGsXxh8",
  "key44": "3WXuxK3HgrZ2UhKfjHxAZxsHV9XeRYgDiHJRsLuqdUienZHwaoPE7CrkVB7ZFv3ZxmJ5heXdhPCdaWm33RUC3z33",
  "key45": "3ovt1ijWL8D8ZGX59k4Lr4yKPJHMMUniazaH8gXDTB5S45guxMVtzYqQgEnE2khnaZgmWVUCCBCVRHGPXAnSRfNM",
  "key46": "2b7S9CcifyAUQMkN5vyxvCkgfKWx9J54tvChc3FuvQ48hYgosLr3X1ToCzivvLySZgKx2HhjVm9fUcyRVzPnobD9",
  "key47": "4Z9vSsyDhHuNrChE1FHzK1uhcxidxmSzT1qVw9aNm1sDDicPaAbyaoNsHwr53yRHpF9SdbEoHgwDCMkiqRtLh3TE"
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
