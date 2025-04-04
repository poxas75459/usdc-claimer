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
    "pFPHCXEzEWZbFgfQQc9U7cuydaSBJ6Hf53bLR1BPEcvEhRyq9DwRTycK3s73qfH7tDqNsMjN3RBsJp5hHTdPB5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sFLAJgjfUa3uxE63cmopxhtds3GkTjTWM5223bAxvvqKfrH1bpdymGqPtmqsDKRwAkwZzaYaHz9p63NRXLkM5YY",
  "key1": "rH8nQRgv24Hv1wKGf69iPrxhZX1YMy7QiGA5WtkSaxxYq42ZnyjSWK9PgPk3TCYtiABgUjTKCcZPNrGEvkwFPu7",
  "key2": "2VnkU1RXWFvpfMhqZzbaZJmKXRk7G1gaTVtTdbXBcmjX6PypPvHCPW5Cgb3oh9EdFAyxdtpQ7e9h3oZ9D4tiFUhh",
  "key3": "22gec1t86ESaXhXyrbqM2At9Y7qgLvmZyMf6zhqFR4nECx379wkE3SFgr4NmYdQKhY2DUuGqbjZ6LsuBRtCZFstn",
  "key4": "2pfviNXoy8UARgrLGxuYHw6mWPCNLMT7LNR1sgQkg9kR4hHciL8SxpwSaUhAdevHVRbFXog3d6e29qnFRoifMfbk",
  "key5": "5N5q8A9CmVdHnQNQADerRMdNusoTDCFnrTdTNY3ekeqQJ5SteNj4FgW7P82aAAQGca9BJg2KFfuPLLuuNuMSQc3v",
  "key6": "2AbnSSkHYg3kD77wMmXnrAJoAAvG7vg3HjTTPJRbmhrFJkVT2avNVE5FSz9x4DdzqPAScn2PtLvazpRTN52oZRX7",
  "key7": "tMCaeZNUhy8YLbZSdB15UazPfGdHeascgeS2Y4iNMLdNUBRCbfhTJ3EV6bYjyNxMk6i5au8u4qEcpG1ynyax2uz",
  "key8": "UVGXXLkimTpcFNfyhs7oaGjBEndq81MMp2qu755HXJttJ2W4uhcKVQxXUVbkQYDcu7Yx562XQgPByVEuwSxA38s",
  "key9": "4rcE8NGbfbRmVVmJy7ASaLHJDy9Nbg3pUsD1ZQXPFou5di7sr7x4uog2JhgZ2XknXnfhbx6PpRQZDhUXTDdr1t6P",
  "key10": "2YfLzvpfGcbCfr9dimCR8LXzaFhfgVnXPHXCj1b36hBb8YfQhogNrXgQ4NYmfw7XnJc7TziiBVh9EuCRUJkkBHUG",
  "key11": "2DZdAc67VkJA3dFaTssBjTCv5TiksWXscqBoiqXCj2HMmPi6rJ999t7pSBa8sdYL2UAmP1pUWcEzCfcfTt54o3u4",
  "key12": "2UDbBbcFczqjdfYy6EQW7Vp6QiSipAcMeZx4gzck5APn6utJixdWmoBo9RQxePeDPVSad6k8HNkg8TGyxVUDANHC",
  "key13": "66xpcdimS55QsnG1bgMM1FEghcqsKZaFSguj32smgYXsFzMKxQbVxr1cMwkFva9G3wLyv7hZSguHkfY7ttR7t6AR",
  "key14": "TbRWTF2HBPNw2SQKrfvgVeCX493JwDEANTM84Mp8Q9v2FwckU8Pmtp5hxMQNRbzmXyxLc3w4XMj1x1fDEiY2638",
  "key15": "5Kq4bzLprfLv8RjA45jSzuGQ7zxigZVT1grQmaTu9zavvGNXskXsvU89GKsmVe1mAbfV6jWRKtPyjNT2poea8Avm",
  "key16": "2xPKhkGoTyxNNGtVq8kycqBE2X2N762N6kHemjNsizkdehhVdk53cp4gNk9m3sQz8CWfLshTnXEKdc2CBrzaDoc3",
  "key17": "2FPrEJNjycUNb2qoPK9eqD4pJmYKF1z6SoP32mpbWewEi7DS3VyPBkDV8NV3g45n4jfkhZZuksU82UKxRgnyagKH",
  "key18": "3wfN9EPfH4tSRLTAYyXAm4fQbT9eLmkYxgBy1AYsAnZP9RLMW5KJQLpixAHjX6pP97z1K46kKBzDcFuuFx2QaXDq",
  "key19": "3NTHaT4L9gGb8CFL2HyvvqnkXo1t8BCayi1HhC2MkQofc8mwoeMZYy9LLmv3bHMH5BMJj4otUBUKvtf8PKh6BwsS",
  "key20": "3WKUN8Qru53coLVFP3AJV2NTSgydKBDqqPrqnu8rVZ7pQwR4e7RqafDWuk7iNkD2gaPFwpob8NYJATQJXufxWxW6",
  "key21": "2VzoBm5Cd5B6KLxtHMQ3TqW6m7R5w4iLpaerPuoszUycjvVZZUQV6TxVZKKffMh1zMSj4K7XgcQGb5h2Rda6rLpL",
  "key22": "gBxzouqg7BshD5PAW8B3cjZezcHsaF5bqFz5peSFX1H6BNQpBqGfrRVgzyR8dDaPns7XrmotxhX4gVM6xmyEq9D",
  "key23": "RjgkoUEDDQHzEYnqk4eLCsC6hGTKYh9BX11nw4pkFRstvsAeLz1sUrFAjjVzWGu6XQiuWjVCJE7DHEuqDv1cBhB",
  "key24": "SeUtqfthSWmK4Qs4ZTupNscm3FXCNgKz3gxnXTXEjEa94BH9AdrwXRVK7d6DB2PtSFrz5kbvwVJaC677WCYZjjc",
  "key25": "4RGiJsBmg5dbj76piqHJ9mHdGBvqvAL5gw7esPybHwiEtgyQSVx5Rg94cUPWwi78FBApUHUrEue7fPZ6L1FiSgFa",
  "key26": "2y1o8ktY8iaTpX2ACuMsUQe4MdAarKZXFR4g99uC9SRjiafjUzNtndGjkysUBsmbVeHNiNeHWpuHAPsdo1puKBow",
  "key27": "3anWA5oJkxHiQJhCM15T9b4TSsFJQ4jmcoP8wZymJwJaHTP9b3wW8PCpWZQvaEfvw3uPt3P7e41oWALizVW1EqDE",
  "key28": "yjy58XULUPwQiWFEP89MnirqKUL2ECiWVBaDxna2pcZjAqcM9C1Uzeyo9Qjz4JfAERQsPiWAa3WaUbMyNFzKPcX",
  "key29": "3TvKtfawNb3WBiPbBNzz3gdEvQt4dfDxn8PsLHkcsLTN172pUVvz3ZuKctsq1a3XAd3zgcushAxQa6YvbJpnFHTw",
  "key30": "4pymEhY7tPvKjeA5sUV5fJnmYEv7AQ1xb4UF2AuCvaUmKBEbiD4A9cz575yfZynXQqaPdZK4xtRY3yvYVsUhqhuh",
  "key31": "MW1kPNRsystxceN52awfeqPU755Jz8cJrP7217oRur5MHcAbxrW8bJF16Knnz1ui4Lxn24Ue8aZzAKRuMeq83zc"
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
