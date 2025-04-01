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
    "5btoEUjdBAPsLLSGAFdRPSrjKwgPnFfsgHzsXokhEKV61e4KCmsjz8a4a778GoaCKrymXZuJg7rBPApUdJi4aM6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vsroVG3x9hRgZycXB5xcACBWmbgUVDACWtqtkCM7FNGehyJsFGraCgar1EuKTsyvKQBfg4hj3fBHdMs2VqBFxY6",
  "key1": "G86HkFz4F5jQSYjXU5zeCuQ4TQpfBFNAarxhf8b6ohQ2Zrc1EAeEyYCEn1uJqCjZgbCZn5bxkEeyFbU4tMWFUvM",
  "key2": "5Qxfd2vKiHMyvUkRtpXuLqmDjnx7dAkRaD9tos28e24TyYzddpLJxHZeebmbTqxDcTZu6r3E4TDndateZQ9ziWb5",
  "key3": "25vV2BdMfFHaDxFnws4tbFxFt28jgyZvrKRHg3Y69NLHqqjVrEW1nDve87vEpxrZkSkw7fVRNXPtuKEMzvbEpC5B",
  "key4": "y1kuUV8z2Kb4ocDT3ZgakYjMpdRgAQ58YJ3XQiEqhJEiDgdBq5ZsGh6QYQFYYmsj3XCDxFUh6JkcFC4xNkXMrdN",
  "key5": "xY5jMP6ZFCDD4QK1cZErTPKinZH9bkj12MA7xNdeH4cRmuAaKR74cshntPLNBVh2ad1sXdncpTqVmdBed35ho5s",
  "key6": "2y434gdiZGW4eEA5bk5qyDfVdnS7Zbn64yhryV9LrfkaWY6GfQKpNu59BFEwHnnv7wMDdX8mPBiVYXuM3nMrcPro",
  "key7": "hUfVfCkkNsGWwd5BTEijDEJ7oWEqAnZ5HZxg6kbqvECSUX3ttQTCvfGUMr64d67kyi4iac2arshHX12WY46f4oQ",
  "key8": "2aLqwfDmwuJbyf3P93NmNq2QejbQnzrJZztBnbyYqAgkTdaNnGAayry2B411jxvpy9mdLz6kNUQjHNJhTUsruzMd",
  "key9": "5t96xGsyku55jGKQEueqFg7LGW68bW6FnQVevNvKDmvKaqub6KM3sL5ZiQAGk7q7HDTcaJvW9xC6AC2k1fq21W2a",
  "key10": "3BC45jBCVgsYa96qoUoAPzgn4869ajWWn8VNGCbWiJLcJ5tM16QeD3i342Fe4v3puoCckoH6Zed9sX454YdBiidm",
  "key11": "25m2qzHfHBP36Weu69yseMFpebSqrVxMAbhpN7PkGN9pDy9e5kwaQA8d4kJ1CxtyGBEMcBkheXCL1a3aXnUR4744",
  "key12": "5BvnKCqd1NcKdrYrZvaAwXP2xunEVs42gwUM6D4EBMou4eeoycaZbnRHdZn8ckJscEnKKArCf2NdSF8SeZcPQgQJ",
  "key13": "2yWBQGWtLzsLUFJ5aJAQZ4ZPaaG3oFp69V8589JkXKQJgE32fp3S3XH1GKAF9kL8Ef1GY1ZPMCnH7LKMfHwAVETH",
  "key14": "3CMZcgg44fr5wgisWPbABJ4nnNJSuqcJawc715JEPi1hZkxNsZ778RPuvGHyALf4zt2Vrv6tcBcUbaH17hrFqru6",
  "key15": "5y6eLC97bnXrKeN9cSjA6PynqQhf72ku1mfbs4hepm5kW5KPrNvwACUx2pqpinYb5eAm1bS5eYovcQf2cWMtjFtX",
  "key16": "3Y8mySeuLHgA9PLrZyqe8VvX7HVA99TYjiZaegWHTaPFec34NVtHdL48LhFrEWJGVdbt4TAV5gfSqRQoRBgWFh3",
  "key17": "5kHBnfUuWb16rhSc9sVsQUu5DCJ2azcvAC8zHzsPF4r4N9TFzg57tkhKMon1vXx6pyTUt7seTnKDNqffLdmndLa",
  "key18": "HUVFB5NkAQLe9ucsum9UAY1VqxR3APFFVkkVDYPrawzsCeEk1Kx6UjcLGRT9AoBqa3AbaUDC9uxg71Q2m8BHBko",
  "key19": "5tYAwHJpGZKFahZeqoTxnroCoKcvgt8ZbAXKqJcn5P8hiSWegVZxZMCy46EJK7GFGoKdK5HnpG66GboqcSUTfXJc",
  "key20": "5n8DQzzDFDmoTATuL5zn4ddAhztRgfS1sXXexnVbXRCVKiQKBuLpAEMx8WHR7FethFCng7MovYPx6Mi6WYHzSskL",
  "key21": "EMwmGsDQ63Tzc2hdkgssGFYqvDp22Nw6mdCf2qvjMHfWNnLnzHnhPxd4tDeczMkkRby1MXZhFn5rh7TUTAkpdVL",
  "key22": "34UouGNhhPcQ878iyjULupVqDEtoesM4CmnNjDNa38oag8GpqhrZWU4JLFwZuzUL65drAYHgYBB7hZhf4pz6vQh7",
  "key23": "4gMnC1y6CNAnMqVYt8KpkbnggDQadFBSHQBeXSJL4ZViYNFUur51i1etbXq4oWCRMLVC1gzheTS4WmKqe3arHJda",
  "key24": "42hJDaLF8dhYgJD7DS4Vpir3L5XGN2Z1T5TNXoCJN3zf25Br6PXefifxcwJS6Bu46yKp21WCiwE5xJZDHdUJ8WoB",
  "key25": "5QkXGwE3DBKNAGHXVyuVJ6wiHW2ecCWGz9XzBumgoRoa7aRN9sY7BjTf8nDupoadhJERbdTxQASfyfTi4oxn1w7R",
  "key26": "2JXVDdMb5M8q12i3mKDDTsMCy4TXSjsnU86hZZi6df8Btzoy2ikS6W6rmpxan8hTgAT27zs8rGD3ro25MjSyXHcR",
  "key27": "dX56PjxrTMVz4ARyJf9U2JG9aZqwtu7dsPyyWn1PMS62QB8KXePa6Qm3ybar8mAAoaMmKWsYZ9vqWSRZfiZK1sN",
  "key28": "2Lw9sdPKWfsjVioAaWxgbMVSJUjACQx9cFDHEzqT6pPEknYtwzKrbjDxBg8wBAc6E5PeUur6FLAt17dPV6poxLiY",
  "key29": "3kgJZNnk6GErMdc12LDtNCreikoKi5XHEs7S6rXtKKj8BthgdvkfT28axGcuY1XXCLU7x6KRMbhGCZyPTYSUkPsu",
  "key30": "2X7ZXotxDA1vxCAyJLAZ5p6QGvVci9Tgf93Sui13FdQxvyANZquMpVCVAZHvd93xufJNtjhHKibaAJjNe1kWWieV",
  "key31": "4xggqG5VRtA798YRMRYWkviDycwWyLSkGCJMq6k1mzCVPSLQE8oqsjKaXXv8tMfDKziQEjd7aeZGCuifUUstpgJP",
  "key32": "3dX6zUJiRcauuKwnKrzhNoo6WXsCyBoYkRLqb4VdCpKWAZ3bsTAsbstTegeephWrYAT4Ucw48poMcqSkdDJ2PqQU",
  "key33": "2VyMZxRSjkzvV86Q4hwdWnQtSjWpsnSSps4JoExyVYUU27L6htD8P68WdQHXrbMBtRXbc4DZmLYDytkJKCan6fQx",
  "key34": "452t1rqFugbrB5RZoiNd5mwdXPYXHAaVVDuCJoktcLsotieNiA6P5zxpxFFbMtM8p1PtW4h5QkhW14C7XUxpnPgJ",
  "key35": "2fpuAuztgs9CJoskB3SvLoe6ToFBbtxFRQgqxmFWC9oVyu4RGn2FAnr9EiCMcNMDWZhQVDCzAqDumPthq8dGrpPu",
  "key36": "66yqCBRBXBc9L4NtGv8Ek3v1RtT92WikRHcyNcV4UEnxmLG4pqpbtjHKSjpVwvQHpQ4pAWa5h1YiAjkkGa35ijnY",
  "key37": "63WFnf4pVkL4XGV6kWugpumx9ctNLoYyGJ117xYBxPbp2Gjgefz2mDzqgXE4SuTCuissDLVJ3VK6yHMXJYe749kk",
  "key38": "3PvoShidM1hYiQXWE8XNCSMVkiHSvoCuJgsxw2uBEXGdB2wJUsEP7WNw2EioB7sk5cfTMQ9CPrYkWi6ivuiYTiyB",
  "key39": "2bZ1JMe8Tc86xqmJM1PfDhXk1cdhRtvQTrWg9t9r9Lfzd66Ly9sCbLSNrqeALJf3Nyshn7a5qDknLXREDMurrwgL",
  "key40": "5aDridXgxDkzuaJGAZtr32mXeeELS2oh55uMiKDDSVW41f39ZhMWMg62wxMRRKeRpZMVnLv2ktur3ZYEieNm3F8Z",
  "key41": "4Ux5V1yuicpDSmbGcjox3BxPfA4GweHyfpFjoskdzdeWq25AyyrJkkGmTyPdC3Gtdy5B4Wzoo3ecR9vASXZjb3Q1",
  "key42": "4yTQNzC2woJLA3mbhz76qi6XzCZZyhDe2viJdJ2Uo8a3bvm4k9kg8h84wX1CSRVCfCZzgifRYY46eKr6nKRfpME2",
  "key43": "2YqzsqY4kNWC8UuWACPqqY65vX8pmL1FQZ1c78wwS5ChoEi6qbciQiszevHvNjST9Mb8q46dnbhikY5FCWPJqhuK",
  "key44": "28ApF77r8rd9QGs7FycKgyefZhmQYZC3d4uvWXhwpD6J8nB63rnJYvBPwRR7HLwHXzHnecQDYCiEjqbsKDgydB5P",
  "key45": "2XdJZQcEy1jqaRM86uvh5UAL7bM9qtrAArkFPTmfMyruRUk1zXXb2JHV7cqPRnVUi23peGfZEm3MnAWoLga7XYmP",
  "key46": "3efhmGaQxm5smRJnkWU42H3qV83WBFXd8cpixs6RNJNenpnPeH1Re3C7NUND1WZtVWxxpMJDUUCxSsoozpFXEGxG",
  "key47": "F4vGPiYV9RcXgNcz74f74zzi1AMNmj4Q2SDSFJu9AQEYXa44qgxDVqx7T39pifx9cN7cHHDQGQNtXv7Y28zdcgh",
  "key48": "522P615Mazb4vhUv8qoXxEY5DppzZ1vdURLgpAdcoh7qsviX6Z3iVJ3HB51FpXB9A2v4zy1d3t8sMMeffsz61MVm",
  "key49": "4VhU5AVZ4vmAbCTTz79DDAUFnGkUMfHBd7ugMajiPDJiQ3PRFoUxFdd6L46YXZXGs8eUSGx9b77f6aHcZkJRQjnY"
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
