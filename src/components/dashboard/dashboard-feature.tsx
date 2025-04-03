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
    "2R739QBx45PYW1wmjX4uEoQVvbuyRrycxRRWA3En44r7uvdJtGR3NBdA6kTdLqmQYBUZ2amZinJanvfKGaiqTCYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2KMgVbpGHsUNKkDKUmFTPktGZCVMzugnTKQ77LSNKRpPAWfSR1ewZfttedFhpXDsnsigQoC2DtrpQMVQKgNobP",
  "key1": "4XjhkwGH9R7fXng3B8eP3e5pfKiyWHWixp9gkyEyjoLcR5y1dag9yvMTSCR943fLv3kapKWud6xGyVkNCWupkZWY",
  "key2": "XnUbzmu2yTGUAwhpRbgkY58CXXVN1qyeoxZ7Q7YP8t6FmNzuDLd4KE3RSXtzPbwqcmrxFN8LvtUfY2MbJR9BRbg",
  "key3": "5nuFTkAuN12eYWEbaZvSqLKwskmotupU9VBDcfW4YYfz2DyAU1WZ3cLuB7inCSCwkut6NuaoriycVbsHiDfx4fPh",
  "key4": "5PiLNG1HMVGHXHXgmPNUbfPyzC3o221CNo4b14QCWJN55rukUfygdVb3vck2C3dpZrzkuSJD6nte6d7d1MVotmK7",
  "key5": "4zJ8tRd1d98SPYUPGDUxRArZ1t65gQD1CZrb69aAyAiZRpXk258vG8EAecxNxuJrH48G1AMLoyNfLt1C1L4KrfyH",
  "key6": "4g4XP5zzdWCXT11QtNxQ9ujoGPr25aZfuRzQkg8yJ1UJru3XMVTpFCrkLAVg5QtpSSWHVYc4y97RKdhcxka7GJkZ",
  "key7": "5rgAiiiKHnTjZoVNjUrf5rdMTVFbBReY2us9wL5QzbrvcuLJAdPbRBpwRNw6k4B2zvznB3NM77B9QAhT576cZASs",
  "key8": "5UmUnMCtE2U4uBfx1revdwdEJYF2yTesTwqodswSKsk9AypbLbWL6qwFYJ9dodzjFWU4N2RGi7Qwa3wD88F9hrA",
  "key9": "5X2d4LfqhXhWny23LU6U7KvFjaCmVvvpwQvmUah5CUumWfV1qmjreFnf2Riqc44Bs9FUzL4RxjgosueZooRtERmb",
  "key10": "uuziEGxH3xSeijppvNUGBNg2VLiS2QaBYikpLuP2dismFNDd5akER8Dwij3tpjT4PWsZgbZviEGuPdDFMb7SSJD",
  "key11": "65trTwVLDXBCZdg4HNTWVMYPjt4muZnyQFToihchtHrKMDfMafRUHu1DWjuk7FzaD1aDzijkEv9jgP4DYKA9aabZ",
  "key12": "3A7NqdyreG3qGzEJzZKKhqLAxDUpPz1PnnKM6yWNcXQn1hdxznBYEDRM9WCqwHens7k8ssCLztdtZzxJ92uv4e2Z",
  "key13": "4QpegrPu2zLcVcbtBAtoNHxeTuo1VzyDa2RS3KfX6SKG4gw8JBQvUW3njprcd9GsqDUbpugShDKwYnvHsYtRrC8M",
  "key14": "tLfogy9ZLHrJFockY6aHQD6cz5Kjt4Fs6GWvZ6UvrdcKtfLzcERdPMhChXN8ZK5eGtmRBENxM3i4D51ASKEfHbx",
  "key15": "Q3m6k33RZ7mff6ScdEpaEK9o7cGepPRZUgbbNtgcYUGC7n6TGvwXKcfhcjSCEwVoYNtf4b8naEyofNVVCsqomQp",
  "key16": "h1SEZiXQv2KzP2QMPP8WiNVb9zL1wvAHw26PFvGRaiAYpko4e6J42ggjKUs79d2j7eTqAH6uTiSGWzAnkRZVhJ8",
  "key17": "4TrqTZeUT9cgcN7VneUuWkjSSEcQYNM9rR5BvX6ft19kypP9XZ4d58qHuHZPJaWQSTs9JzHGsK8xyVT8VrxfR2eG",
  "key18": "5fGcPBqKxUaxowfNqP6smsA2z4JfjrBHaHDquGKRsPdLXVeMLehu26wPvG7SfpJvssCrDvopwkoAdgPGuA1EdY3c",
  "key19": "2PxWjLGXmYf2DhHSATSYLFwqCXa2tCrimHhffroiDfRoMwNWVwuR6w9ffRcaoeBJzqQnpBaBx5iA68qkx2QRkt55",
  "key20": "3VEYbCyUFp5fmnb9skDSz9bqzf3NUWjMpPA4kZBK4XpCVrr89ttgFzJDHzVcPtMtpv2nd97UBXahXrN8pRGsTpMg",
  "key21": "3jbiWvUBRXhpvzTE6KwPJV1pk6mUpQzrCs3M6YGnA39XkXVY8BkS41mEfau466HPM1ociHCA2i3okajSJKM6Ldhs",
  "key22": "2EVqVoS1LJnJcojdSZ6je3CssXjhbB6JNtfLWFx77TMk1UZPkEfyBrSzPJS6Rccb2CdRvFVeL7PKqyh6Swv6LLFM",
  "key23": "2f9oCEXLdQzCYkBbrJrjDyCDLqofatYnUMhAL2BSM58GZ1hSRJbRkoaA9VFZyi41sQ51SBAwmcZQ3KvrKTwVpNXY",
  "key24": "2oA2UQw3qZbcb1RjVWiYm5S97nGZmewXkU1Lda2k9gkvozGMMdc2Q92R4Ye5vHGPcHKjLiuFrZVtXWzwUfPPYknd",
  "key25": "3iYJHi8c9qre2vo7hXF5vDxbKVvxKCLMLijbgNN7MiWuZGrqucJCrVjzgokvC62nVsAWwg8FvWNEKsSSLDorewrP",
  "key26": "4jbJ6wW8R69ouVMhupwCXyVzrLjoZDfxL4qHxPYH88RsUFBZbfRg5mFewAhAHVQexuVqdoX9vhoiXLTzJ7KHsyyU",
  "key27": "yNE4JXy9EcipUujesXX23ALKVwbx7tgNvPLm8PwPMuGfMLx58aN4gZpMQdmNY4ND6s1SE9sGdcJT7nwR7eXqzvH",
  "key28": "3j9qz73SiJcxxoEkXGtD5o9SYS7Kaszh1sm1cEibqQsXKqDJCy39rddoUuKAHzz1aQzrDBDyshLyHjsJC2Vyk8m2",
  "key29": "36FzucngzV8kmbKgEQMc4orWngBLE1dZXXs8fDQNC6ZLvVHnyQezy1QzrDqFZR4iJZ8TyooYcngjdBw2R6ANcBdN",
  "key30": "LJyJwmrh3vcyJKF47YmP1KFPVjuqTJJJMuaoCvwGt71LkZPj3yYdnRBBjTimZZRL1G8iYR2A7ojqoaac8KxZDcP",
  "key31": "oYA1GUvXXL3MNFC9LdVMKqaqf97BVXGkzwonPoedQpDziHpxee65W5W4jpSfMdDE2DPHatUDZvhSJdCsnL9tPoi",
  "key32": "3hoMCZ8veUkC6YVUdBYdEJiwqGzYu2wcnpQdkybHVEja1ieuMsJ8akKjuZvAw8MhyiiB92anBh6paLpiSu2nu3g1",
  "key33": "Ck3TqZjJxDHsu4FUT3BCDvYmdazQcZteDYzMky3sYzEtoAqExSW34ZuRLCxnbiRCQnJHz8UrxYoLHDHtGemCJJy",
  "key34": "zzKjehVB9VzGQQVCKJPryWeBiWW7CCufBFGdeZ5MAXxSRirkpjKEpjj6GNDkX9mZMnXAtQVwX6irZMcv916qsuN",
  "key35": "59pWYBPH52oWvtrA3omSuGPJrjKbNvsAiDgnxVUWe5yho66GXC3iDSXw5kTUsUiSGW8ZgUWQWDfkw3VZJ64wYZNQ",
  "key36": "vdf4gkTAfh3XkT3PHbExUHRNisLcHmhMqYXQGqsJEYDrAD817emgfST8LE9yNYdeEyxdXZxKji8at9fevZSdg9z",
  "key37": "2Z7eTLrhtu2v1yLLRBrDRX28tnjDAFA43DCKPHMoAxd9xRDSz3v86tD3Q1gx393h3xCVbsEaiJakUjp7MrTxN2xr",
  "key38": "5LbPuKV7oNQnyoR5rvgCERhQs62T7ZcRLM5wpaAXriiEMNsUTXd87Un2ZqeHyUUYDGSeutgbxMW4XM8Xx85tEBtt",
  "key39": "5vaRsZEM3uHLJot9VdxxSPiXJ8HEcUtN822XYJhLoiUr5Y1xv2E36BuCscFFTNNV2V2VdLdahE2wfgej5G2hcECD",
  "key40": "4o8w18v6hjM9VqqnqXwvaaVmYGG2CccJdQAZ1h3RzwY4BS6qVQZuatyVmzgK4pQYJBeTvTQvrkNq2VKi8jTXf74Q",
  "key41": "3uL8W4HRu9eXPzFtCHXVvhJsWT2nb3xsKow7jdeQPdZwgzkMjMaiyAPjSg25UEkZ351VeuX8vVWvN46863uxKLgX",
  "key42": "3QawBqXPKrkRFEUWogsAUzYgK8mUCMVX1y6PB5nimk25Dj6n2QKyfABW8qDVSFXH1YhDwxpGkGLekFMkkwc1WRzu",
  "key43": "94zPiz5jXH7kbCGaBRko7igEESLWHbgYHvakaWMqmJcgVurBX96ALNYNFppSRy22kQhTPxdFUQJr3W5h1rrHotq",
  "key44": "3BcAVyaahptsmJfieursTxDrEoTvSwdt9GjdBPkVYqiYsCmcqTfud5nsw24XonWtGXuG6qumdCmG8EdksWddYBvs",
  "key45": "4XSngHq4s7fAMKhkpdPVhyojnpGcBo38zizVK1ZFCu5aMDv8A8MXt4yq9L18rjZu5wxigHF5gjgAvnnV7JLM8Xmy",
  "key46": "3A6EQGdNoyoCEGE1sHGSLWediRqbZq5jf4kfduNJJ1ui3fJsSBvXCxhdpwZYyaioqRfBMfeLFvMrDeEdX9Ge6kmZ",
  "key47": "A2zYHoLoHLY1uywxn3VRWgGPHcw8G6LZ7P35MBKFQvg1TyvT8omku1sXUt2ECKBcibkBxwyWsjFFYpBvoBtuQqG",
  "key48": "5HuQvNMM9qdaehXqCwVFE5q5pyoz8UccesmWTeysxnjncWkSB71CuYy8GNSaQwG43v4p8EAG41v3W3NsecdrdWWF",
  "key49": "4hnhxHAF3wEP7UJAvNvJVeFJ8yX6GriWGeK29TCw5d5B5i1TDA8gRUN5bJZHsJnSxDUMLdof13p42uMdHnjYiEnP"
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
