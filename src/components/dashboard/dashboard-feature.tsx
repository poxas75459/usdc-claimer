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
    "ZasTNodUJgG6ojZTNP4Xk1E6wAXuuN5JtcWZ8DanMRZGF3zfPnJdpouoFpTaDxWtJ17kFTxg3huVt6Dkxf1EjMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHyR76VLGWMrC99m8ncvSZZHxh6aWdk71Ur6TN8wy8xavCJbet83trUfnTZ68WVS33pcWtZgj87wVDLrsXaDG2m",
  "key1": "2cRP3BkFNLSzhT75ZC6KqZyCL9g2SxFdDKZmfyR3ktadMn7E7HB97PdccHUEemWs4HuxAkprPKkaKjceyu2HBFjT",
  "key2": "5dkq4UgU4czvrCDNGNnq5EnZxThSrGwyxrfM318efCHhdEw9Bcb6Pbiy2w6VxEy3UVfg3sGbuFyXYHbBceVhzXPE",
  "key3": "AKmj2UyiAmbVzv3CadhMYPEj2isKYrcMsUeNgWnc9sU4h7yLWk14vdzzDj4CUfuQc4CsPgeCFtL68i1b9TdJ8Cd",
  "key4": "2aVMt7WCzSbAMY97qtMPCNJm1qcFeDiQQvxYvBqxY4LuU9NT4f3EkAX7vWXzBGbAm7riqTYcJDnsZfo4ZP5nXrC",
  "key5": "Fv1MXJAZgQY5pKZNUjLUicNS6T6HCzsHmghMdNDpWVcXWgKJ5P5AE9h2jRxJaV6rM1hfBtpm6xyzcNRLELg5NmX",
  "key6": "4XqGJGjoZ8WJaf4EwtL9jWqVa4DJc9UCeCDwht24mD9VUSH5XWokU7YZpL6F64K6pqinZAMvG7r5DGHySytZnNNE",
  "key7": "2gw4EUWXPWXJi1nk1esvEnKY6JsAitRSqXaZsPw7wzeGGVKVeeiLzCt9hQc7A8jB1EJtSuNk9zbT32o9rFUiKk8B",
  "key8": "5ZzZ84BhzSe2tWfK2C279uThCjSYbEqMHcFCuNz8Y7DreWSKvZeXjnS8wCwHJ1DVHqs2riKCGvR4UKTvAvn2bieH",
  "key9": "29egXtxpcRzaidFx1ecqrMm2WmWpEerX5nm4VzJWwh9WRNRJac26ySSbd1vDAcmbzH8g3QoutLRJRA43gnZBsSRy",
  "key10": "4FdE4ZKN5T4jjxzSjYmp55mFZtQTgHnSMQsyA3TzWHTWAe9cCuviNymgLoymYw4iJPCQeT6sCXJAeM77To9FyKEG",
  "key11": "4yatEi7WWPYBvB6Us1JYQ3d5m6QwYgdWkQUmDUcxPra3VyzszmrSTrajBTHgmVopsuB6wh86gfBQ8X8S2LnhbNsu",
  "key12": "2dR5cgbnCUV1EQLwGWzvnYD3NVt3VGFXkC2S1fLtW7bF4nrN3cUMhULDCJ5U3osbUQ54DYvTQppiEyThFsKbUep5",
  "key13": "Cj1CCWDo9x3hbHxk18SESrbKEsZGyoQCPAF5ey7sNsXQVWFnm2hjHBa13YTKwTUEt4DbNM4XBkS2Z1d9ELBbdYE",
  "key14": "3PDCE9YdANSnpvNH6zXtWwfaUqWaHhWkRoS2EmAqfE6bkx4rbMXbSVZeoVg6rNr6kcKTB6h8bvLQs57kg8JdaJTW",
  "key15": "56yeY7D1eDJ8NYrnCVJxvHNSp8MMJKjg7q2DynuzRwxx74RqP5Dv863eHKVcbfmdXvsFu7ECyfR9iFxhUqgwncH6",
  "key16": "4NAJ1ayHxw2VbFMUvN8C9BhERBi1ripd8GjWN5czwFSfW2QRdEUnEoGqNQb9rxKog6w3LtNqzcUDYQoofKDfMkAg",
  "key17": "5reJgzZRuBhve6qUngpKK9FrZ1jVPNqcCCSCgkkz2J2Ks7fz74p3jxACaCSQ74A4TzgMp4kGQeBLFyiFFti51HWF",
  "key18": "tPbMWs1WtZ9mXzHbiuNFMogqWaNfASBCLiamJ6ENN6H2KZ2B7JNGU2gcUG5mLr8WatXyAQGEsLY62igormB8Aze",
  "key19": "5NNm3QLXTx97SeaXDbC3vMKhpjEkUvX8woxbUVcY1qYaYZp3JeYH9b7SN3nohRSXSByBFzy7E5vRP2KMgMcxE8DR",
  "key20": "4iVEfsPBoW9FbxNKLk2Ghdgbbe6fKSCKCQadD26UTHwBgRHWqrLAoMzyhxCStV2yczXdRRm8dKU1FCEAMhu42AYf",
  "key21": "4471WnzRakaGkapYQumzntrngDvohjMRhC7rx1A6m3Ykcrbi5Jp8XwHWkyu4Jh6UwXLJTNxrci3x98Kio9vUvPtS",
  "key22": "4acfPupugUjtWktwCJqE3GWdTvaQtJxiMM5a3gHarkDQX4XXESASAUXRRSQc4JHGNTgk8s4f6P5Hn9PzesUEJ7Sc",
  "key23": "25wGR6CxJFXHLVAAbgm1MYuuxmhEcCgiprkCAZNt9r3g5qnuQP4y7XxohrJCszteXyQMWFKbFCE9FtcfRMFbP2Mq",
  "key24": "4UjW5pAhdt6CqKzBwjY2L3t9bypw436Sdmax45Bc8GHJA6tYWVtS8kvs4br2CYQaRhG4uYRiXAoKPsLF5wbwNdKD",
  "key25": "2DuTWJMie4XC4exVrrAgLBYv2YgyQPGQovuUwpRcy12iDSsWB3BQMfF7PRdLksV2HX4i8URMyPKr7K6BGrLqSry",
  "key26": "5BjvDSpfeTDWnV13uD897uigMm9nxdnnCdnRVLwAN6ysBTZDD8BEm28JE7efkPU7xssBpFfSu1MtLooHqrhmMLu9",
  "key27": "tP1FnaMq475JjDUZXCBtnqeoh3sWjBVN7hqBRZnMr1H8W95bRJKZ2DxRkBv6JHk2AMqJo9iMN71P4q9fo4RJqPG",
  "key28": "2RCitU9BfARo596i1Bmw2M7VdBKxyZF2c4SdxkNEtFLcoCZ5goTvBdMheB7ZRF1PXcCzddawRVcK2vWNAo3juNFG",
  "key29": "5YdDgFAyCv98YGDCppZkV3EwXMdoDZg6dDdkG6nqxVo4LcVsgiorKhxwq4vffA1xoi5Ahjro73mP5eDYz5honfu3",
  "key30": "5xtMHHxrtAWS9jf4VA7fDcn9Hf9qUCiQNQXtp793H4TxbQgpNptfXEJLXyp1WbgD1R2Hg8uVo7dPt8n2GytpNxTy",
  "key31": "MA3KoPRLbALSPCbJqAjuzhKW9YX94epxA8YCR1dt26fDEWTPZU1jrFojDnwG82z5W4qXorPrWhzh5baJbEu39Qn",
  "key32": "41AAYuF1anZghn1yDNk58wLwEtHVVUhafRZVgDJFWbHxqSVE6gXD31XHx8fvk3Au3v6dcxh8MJbNkTs8Lf257yBw",
  "key33": "29zJ3RrYDXtbvbhfyxWpy1M1vggCxw4VC2e5h5imsT6wyBC5XyhEeXYrqsUXrjrZxNtU1GnTQGZrfTvA15yWZHqE",
  "key34": "5TcHtegyy9rtXyUyhRsLycT7anbgtwyx3dHwyuinnErYRG8mMxUnB3MJfP8UZ9pBJNJuQrkp2kvcWwUErxnok2jD",
  "key35": "5QK1ATAR2LEpdAnfZDL7SEpDSE5B7asEyXfKgzDFUrAzTtbQtKZpjbyj2nZD529cPaK5GSoBK5Sh4LQhyyCLDJEH",
  "key36": "3Gtb8EvY4j6WLZcFxTTFaTn7ebHxzGNNQz2gP5SvYg9R1sNwuF7v5LkML14QDci1Maci5immYuE2j6qJcFzXq8AZ",
  "key37": "4fa7jYPwTwKPsVGBJCV9YoPRj6sckXTDHzovZZ9UwCSCidgR3YNV39poDb81Nft1eSoGoAJr8AqJpCDhsWodPZAH",
  "key38": "2THD1znKjyPmxithYXFtaehVVko22uQtwrY2rBMDb82geELGEDmq4cFb7yPYR6qPjYCJ1oGx9JcjShhhB8D4QBS7",
  "key39": "54FAUUcwmjwBnovFfCGdJRTbx9A5ioPNPP7ff83wLfWqv9AtadYmxdCdP4pd7v5o8KVFLHrkE6VPvPnNfhYMtA32",
  "key40": "4xMBEsHr54A5moS4K3epsqBkxUD5tNM4tykFA3zE12aiLfSDbrmYDxud58jbrP58xiC6ub6sSx7PwoUpobFwF2NC",
  "key41": "59t63C3DLk9hmkBYLMCnXV2KnrW56sg9kFB3dXJApfaszWGfLuarfZA6cdAcYEBTB97maBerxG4fgDkWqR1p1SEC",
  "key42": "4G57nGNdtjoWddSc5ZnoFn8DfSW8DXPSpkSWAdp3X6XM3NpHqnev8FJ5rMfPPDBxctJg3WP4mEwYRy5UWmpxGUk5",
  "key43": "5fKyBAQ38At7uvkmgHscNvEw3yzYMMEN6xUSBMy5XQ3gFXppGPfcB6m2dmNXLZ2mP8imvY6J2ygsaXbjnWDFCS5w",
  "key44": "28P4b1mWy93fqLCAgXRkGz2di47fXKenPeTrrREnqtFsQSESWseRoeodJFjXwUY3uXWgAz12zWwncvipKQcig35n",
  "key45": "3iCDWLMc5P6F6tDBwmFZaS6uzXM9NX5Eg1BfPebZy32TwHyqbzEBBARa59h2N27au67hqq7KhTe9viSv3UDPntSo",
  "key46": "2kcoKHmgUmHnCbAhStz5QtXe7q3XdsVVseAwqrgmhf8mEjEh2BXuGyih7xph3h3xzWDYWDd2pQwh2h1iPnbo7QrV",
  "key47": "365uZojKE68ysE4fzn4N18qoEto3MgiXbpeccB7TfR1QhsXGYHj3FfVsyeZvez159p7Vx6my7Eb2biaj8qgLZfKg",
  "key48": "4j2AqtfN5jqPxT9JxaB8sN2exN9Gj8c1r82K14YmZvQLpqkKn4MWzsMwEaLyPdmF9LmRaBn42uNDrTfhHDgE9XoU",
  "key49": "21yJs5KbwA7FSaymNLr8tkypAz1hYjBCLY2RgagHDKC2AgYmqynbt6ppusYFe5MipXVNVkvSmPbvz7kN37A3VZwk"
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
