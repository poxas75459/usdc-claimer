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
    "3XfCxPYGARVLC4FkAyPfoHhpdkjUr8AkRf8NRH6zGEJMPm2X5j1MJ9jSiYoNjpyr47YdvhdkwsZmerD8pc1SChfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fwwFhb98GM8ojypdarUkMHAgnJs6WNQXWChJVNLJk52gahFJVkitcgdaH3tG5HoDq4ghv8c7UVwLCUMy48qxGsC",
  "key1": "45JMFCxU8YvnwTmgap4Doe9Dv7PKvdfZv4Du1LiRjJ8Gqj4uX4q5uVhvRLd1hgweoEdSi9uXLdjHdxusRBXLLxaG",
  "key2": "4uBFwx37VuuGod15ZbZoiXQrBtSiWcG8v4WjgzTeej4L4aB5rqvk2fFVNw5Xsb8L8QBA1yFuqhs9gsY78tkxtDjc",
  "key3": "3CsdvHk9GQ38gJ3vCNobjMtbaKeydCobGDepq66MZQV58krGBuYULDSNBy1JdXe2BzGSE2hSP9SyFP9f7o3vrKf4",
  "key4": "3TiJKnn1oVLD6w47SprMcszaLLZ3ptCvecJXLFNDD6XBFvq8ib1Fjz1ZWDiGszSmAe2dmZQn81cib2SjibWb7aKk",
  "key5": "5uwf1Q4k3X54kcGhJ8uk1SsGoNrmhWfU8BxrUZnJPC9yYyUTRNfmKz6LqncWkj9szPjjNxnwum2R3UVx3UEPrE1c",
  "key6": "5cLwPhuQdDdY3fRVn9haEsWstWPtxfV5HRDvymMNEKpCoKervHVUT4yZgmk1UksXgeh1XdPeGjHpVpUUbfJvyyet",
  "key7": "LF22uV3f6YXSvz4Zk8D2C5r96bdDyGbDRF6ob6u82qpR3yLPhoEeXeLEZSgSLWsFxqLyXAD4UGGLQgRwq6F2Rvx",
  "key8": "376GCGXAk5JpTUxg2gF4W3a6raP8gYduWfehsqv4YYz3yfEDBvizGJyRibqh5xXZQFFGCfcK8jx4iCWbZuR6bNfr",
  "key9": "4bZs7tEWNLAxW8SAxgDNZk9hmdoJaRN7hF5vMi958rBEiigGEZPpZNaivhqR81AtNGYARceidFBqHXr6KWP84pJt",
  "key10": "3uzY99BgvV5SnPwFhfz6GoXKEWeRgjBrDNEr7FjZCsMySYtsadXHntG1frXL2bPcvAdRd1GAowoFviXamBQPxV4B",
  "key11": "Ta2vnRtd3uCndkVj6RqomE4sfobPiCA5BCX9EHtuHeCbuKJPDcZryLCGgRDpVzs1VcFri2skFny8jUTawAAsP6A",
  "key12": "2i563TbFohSF9UgKJoe3st4Q3xWiNJLRL3Gjmkz3De1JmVR5ywsMzZYbj4RYC18eEp5q4bHnWfYfFcdkWTdkP5uH",
  "key13": "43ygkvhdiGKvn9aeg6JNDKDsSdqBVs6vnm6kPGiCiexnxKPBskNGHmd3SJoGas5Az8GsQAmqScQi3nbG3hBx9VhA",
  "key14": "23TjKHpX8yb1CNZvsHUceZqQLcr8CAUFLmmmNtdE8Mf9yd3sFzup9LMkpDnFxkuU5Ub74cSeUxTZir38zbbfqrRF",
  "key15": "3vqryQHW69WSawWLfPvp3UYY8vmCMAQWe2Wf4hA4vKdwvZEkbBp6r8Li2CgsBsTDW9GdsxSVn4bmD5sdfecCZwZw",
  "key16": "o2kKNRHtJaKCddcZQBc59tXsUNQ1t9hHyqZj7Lv9cVf4aUDG6WphgYVvPRatkhE2sfL4gXU6qeDsnyi8nPmxAHC",
  "key17": "678Q4J1a8seNQ2HCfK2jmtSh5MVDagbNgQBLjnfwWyu2A9XsL7GFtnaJh8ZqXaUPsxFdSHa7mXeDLtjz8HZJFwGs",
  "key18": "37Em6iTTwF6XyLimZddvhxRGQqsiU6mke3yAwXCADfU17b1Gfy17q22ryvJHMeDi41intAd8eSvX1PmvG2hcefSN",
  "key19": "2YEDQdid2Hb6GaZKvREfcMs5U6hU8U1GUwDYFZbkh6U4ZUcFX2dZtygZcyBfZDFGHWwk9R1Vfdh9h6oBxGeGdSVn",
  "key20": "2d2avWyarixUxCx5Hke6H292pSmoAaE3v8gkxwuNQZHRUXNMR7insX9ahiC2TF728SbSrjK99uCtgJ4AEgvatkLV",
  "key21": "4i2Ry9S53h2PHSwwgaqV1v7hqQB1EJKWtg2cH6xqtEy1q5HLkzZpUgV6jtgscJDQaag4QYpJPdhq8sjZp5SFctnj",
  "key22": "2A1ZLCUA6TWPefmuyEw2WzxyKaWDGHzY45ZQruaEcUmH2NGdCKpVQJAYpDrn9horbhKJXwcH46p4qaT89nEpwe7c",
  "key23": "4AF8mYKupjhuNacov11vee9qu1c4JD9SzrBWRAbRThS1oxeJ1AWGVNht6hvGqaroyWpjDRcbZqfpLxtunnYQi8gn",
  "key24": "gamciJKHZ5gf4uoxNxiwkUENJp4444e6egM7PZ8sThP1HjzhWozb5Anp62WJTGRky3pp3uxhvfoasXgeWoAbBUq",
  "key25": "SiiP8GpJ479oTPDCAchpUBDX6xQpz1bbqKsjtoj2Z2trxxemJHm2BT64tY4NGqRq4MWhd4JyCA6aSnZe5U3CDpG",
  "key26": "4ggjoWKFJJKVWzWrEsNwGsh6UiZKfUfH1hdesh1adPRyz6rSWf1bawwnWaYv3nGhxiDs6A3UDTimVheoLVAV2mu2",
  "key27": "4XxJg4qnAUQMRz2eFY6psMiYS4nfBMGWmtnFtAX9oVyZxuCJarUoMYZEpATgoxR9qvfpULfqPWuRhdymqanRtpqo",
  "key28": "4To13giJjtMZszBRyijeZjgSDFUwsLHZmvcZk7U9dzF2H4BBWStLdito8bz5kNQfyqfok6Az246TmqhTWgXYTWvY",
  "key29": "616Uen1s4avd5xcAktgPDmjDWNUaPQ1bfQw3s5WEFmqmJyrp1UZUUXXTBbYbW5icXFueuWFbrHxEcmTDAZjSvhSY",
  "key30": "4dUAYp5L5bB9iCUiJBYXvoRW8kVEG8Qeb358vihTDDriLJQoP5vkrmsoEaZmvwzDD3KhHxrVea6Vy8XK6LHA7Qzj",
  "key31": "3FFtcHxqvnBY47WniZd9aUKMPM2GpHZPB7MGKzyt8n4wHjAnCw4rYG4VT5VRcURPpsPjGUHBcnULCdZLgodgoT8e",
  "key32": "5oiFiGFQoGW1R3BD5oWQC64qWnDAwwuYMYDb4bcFzP54bVArGM4AWEXFD2NgdhbxxCPbDTs3HvTnkBr7JPTxr1L2",
  "key33": "3ipycUaxz9nmcvz2B6t8j7AQZXYYmCRXasksc2H7kNEeqbBYCNCq8SDGoc8uZx9eq5pmCyLF1gZo3RMqx1PUB8wi",
  "key34": "5AeJGFL7KAaWFELdNcM7TGA4dD7CbJ5i3PD5kE83ycSRRU6n2ymr1c8KGRQM5vZCZFSNN7TnfwJLxFqeVCAs6X9Y",
  "key35": "vLKo2g88vU473qgvpbCXg8rC94wDsNLAWwPD92zHaBzRzApoJrZBS51ykHBBsjSNVtNidVsHV992hJvyjmy3JaM",
  "key36": "4JyjF4UTuPk1ZgKJZVHhXZE4KzzfUQcdYEezs7kLiRkME3yj4fRZDNCuQheg6wDfeTFDhxdNGKGP4vgaCF86m5Wy",
  "key37": "4BPyTUoUEHFEfHB559LpZgVczaLaQLk8G7mpKSAMMPP21xLzohhgS2r8skuisQuJya5svm39d7EMm6Ys5jEhLPan",
  "key38": "4PzkcBNZHxJsb3XnUHjqJPvtuqbm5FyUJJSAS783QMQdf6UyCr3gJuvteXeRC2BCbSG5HdPx99H3RwmNgpyH2zrS",
  "key39": "sLqaw9BZ4osqgoZFvDom8MArzanx3y1RgdsK4YVfE5VTS1bGEpQquFhBrGNQ6e5KatvejDTUcD4ZEPrAL5xR5eX",
  "key40": "4VvVpN14vVMCQq9DWTBAaK6DuRES452PxduawFjyBm3pTgSk1snHswLYgW9kewnTtykvhk4qAxUYXFJXrhzKGFoT",
  "key41": "2kFaeJxTRrs8o6XnmKVTCWfUyTxzSqwfBV1zpToAw2JqfEGhLprsn8UuDBnizLvw8JoaPhkps838DRMkUYN4b5kb"
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
