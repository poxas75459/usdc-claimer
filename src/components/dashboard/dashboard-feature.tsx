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
    "2WfcSs5GkZU8LSL2DeXPgyzYSRuvDHcxXjgugb5vGZ2TKfAmvzQFYS3APRcm9EZvcfXz7fRZcdRvFv6EV3Y7d6QS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "277k3Haro1SgQGLXnEc9eBciDEQMidVdjFGeTQG1r1nrX6AvtcpTHbMpyqSZTG9iGg2vBFPo7UG3cmmgzYSmUYFS",
  "key1": "2eW3eYaxx73Ty3B7pcSETGBgEzGddXQdjYS9ecnoALYwnA4ERDJ9sBtw2engNmBiisHNzfuPwH1iTAokYSyEtXsW",
  "key2": "4tkguo5UXKCmDJAJd6L6aCof1cCQED6RS7FMNfaLUgLnKuHftpmojVSjyc3qYyq7PjhYtYTkj6F2n75YbuGXpJBv",
  "key3": "4fFrHjiRNC77PaiimrDBF7Vm8vUA4MrvxJgRRVNsz1fxUsG6nSWXSiEQbLmhoDvoB5QQW4UzgQUKM65jzf4GmRbp",
  "key4": "2aRGuZLCeKjqu9VMFFHPMA7M5E2tsyfXkxrxBvbLf3n5jNmfHLqhUMbau2EAd2MmEF7taZXW6HJk845NZawVXVmF",
  "key5": "XXejPi1sPmj6GvCwzun7Knq1sHBHZAf3RcBv3EzEbXw3xtcdYDJx4kBSekNrx7mGyxqkdn3gcQCpQ5e5zkQ6hAW",
  "key6": "26Edzjye652F9wpJPdW4vUmzR7sYHjqwPosEmvz2pneyyMRwCcS2sjLtNnkat1qpV2PaRkQuoJvLVArJT3iygrnd",
  "key7": "2CdFhAE1vg3P1wBbjAoBnvGU4jzKTkRDt5P7VKQGkFPJZWRQGZBBHibbDGk4Gv7LrXR5MbJ3HvQsMBrWzsKapt1F",
  "key8": "39hY94tRStAh53wLbbwckbze3UoBhZfXiue15DdEdK4URwp8yUU3eq8RKhcekspki8vCUuHSwoKYzoiMRDMZePLy",
  "key9": "2cU9jhS8HV8dsPzwSn2DbdJhEjjC55p7gsCjWNFue732cnsZYQ4fveR9gxHHdZWEoo8iPDV7ATt57diLEGPvRoLe",
  "key10": "2M8ktuKGgGHsiR7Q1BpSHa1TWUxmD661QhkH5bBwTMzkknBfJgZu8BXXdTnxK8ctzZbTo5Ho6TSxrwLoTnMw9DLZ",
  "key11": "56TN4AnNBLL8wk7ZyxKJUmDWEeqTieFgHzuUv3GxfRpNnx1zWhF5KF64YYcZ9Ta8t398LwP8nvQ6GNKdzcjknFbs",
  "key12": "4Y63FdhnuF7ZCFHgzfdptbqg83BJi3m7PxJSDVLERVgUMHo8QRxUeq87NnnzMtDSzkk6Jtju8yNW7yZUQLN2Z8cb",
  "key13": "59FYhroM3xLZ9YVJgmNpZmx4UAMKqMm6KwgEbzqncFu52pimiQSeuYyDDen9DtQb4nPUqMT3rXTBzMAp6oXnh8BG",
  "key14": "xpyWExoqzng7x25f9kvWsdbaP7QXuzBEJoS5HbkXbRjGAzcfzLqiamvx67F52XnKrr4vgGumKEDxaAQNN9BznjP",
  "key15": "444oAJsyLEtcp5TB89VESMfFvV1iiXxSBCCdMX7CKTvPeFzKUg1CpwbApPMEDUV5PCxyX2gS88wzDKa1LvzXfuRy",
  "key16": "4wt57FD5WPkMpLG6N6LnSokNVoVhBXGUeZC8M2Y6RhK8kqhH6AfnRmiqobLwSXLMV5fP4iDph9QMQJsg31t7kkUm",
  "key17": "49DkvW5XtFNqJSTTkpA8T9CLcnNy3jWxMRprzkNiwJxAaz3YzSeQY8cCn8Hh2JEZN5ii6xPatWB3LjsWotK1Fh1W",
  "key18": "4WK2tLMSuEk8suHvynDzWxrUqXwanWP4yvVXxtN8D782L72FNK3cudCV2EJuvEkgWeQZNjVdYwen6rnXjvZMBiiG",
  "key19": "2BvP1yhe9fcAzSffzRJQztrtQbSBBSKmQ5Qe9gjvx3YVecXQxMtbe6nXxpMoZSWhvFHdz7qkCJt7Gk4NvgQ4fy3k",
  "key20": "5Pcgv4Rrpsh819ERtEdrgZhFJfipz8mvBuecDGkzRuwKj5WZnfetYgwhDH3h2TrH6M6e18PFFHVsZbbi8quyoYTL",
  "key21": "3RRC9Tzt37p3iWcvbSbZ3F4ds4ng4fn46ZeLNYgLkzVLNd6yYgBq9D7f7pLvcZrtyyi7f2utmQE8jAxf2ETV2uPd",
  "key22": "5e4CH1cAHqKinJSEDVF6ciVsmWDNDGNSevkUJuk3WuKXGhArm98zAEpx1mKy1x9UNPsmVi2kKJSWRYiedov2aHMa",
  "key23": "2c6YSNVXh7aRW6Gv5HtfzwwFxfQk5LwoeyjEuYvZjguiYxRFPmWwUh66sH6pfqUwtenjx1msE2RKmmi3rTg41Dh1",
  "key24": "4fY4DzUvYDPpYjGMUx1Z8S1oVh8yRUwdKGxiSQsA5e8VHLReWtQ2NFHhSReN44N8iFqyMihnar5KtgHLe8f5nFVd",
  "key25": "525z77HgL2VKRewK75TgKygpn9jLjST6Syg1RqxPa5nrydaH4cahMme6fAhx6MEpDFtpixs5HF8FFeE77dwpQ5P2",
  "key26": "csXAnkoZKdywRPkRfDKDpSDmZ9BuWcTfTJcDZzNh7YAdKL56QWrpns8sfb5G6JywRUPmzS7uJExNgwvLMfsTnRG",
  "key27": "3EbQZWB52cgSgZY95C1RCafp96cMVV58hAhBSrawrRuXLDYxSxyj2xhPcmPNVHRzkLqXucP3BNJ2v6aBwNVSgqEh",
  "key28": "2mjJZFeZ8ZKyjPqX7MyD5VNyMPrT3NA7eg5Pq3B5qXS9ng5tYErLJwgMV3nGoiJEDSm76EyExTUYMyn3zVk8ZUL",
  "key29": "2hfT1GB2BpwK6uCq5fLbe4f7KMvoTCmeHraHwerLpSS6v6TjUye58Mej7QdADpE9wbqjwYb4ruaV8yCoyBdbWShG",
  "key30": "2n6jvSnQY7pAXbeB6BeQsfaNrkBxACTAr3iJtef7EsKiSdxvL9UAadQf81U5n47MLADEo1zyQXzUZtF6phPb7qQh",
  "key31": "4vNELzAMJVwqEX48ttR5kxcBDZhTnSqXWNukAULvTm3o7yA4cxkyp96dZ3qJwMpFTCFaragMVH5FMaMhd6fwUY9N",
  "key32": "5orsNopm8c3dbRWQUuu7o7zwukVAtFzkpBzrSym8LumadzdVnQFaGgE3JFTdgU3yh8UucU7x4ZoUVwegNKc6vXRe",
  "key33": "4rfwWM6iZTaLXZx3QeRoBTWjRfLicCEa5thtWdw7WpMxgxxLHwUnaPZWz18gcZReojVehcofj5XVxpcXeTEP4wBM",
  "key34": "5fFUEbh7eXH2NzV385ZcxZf7KQ5CQHDUCgQF3WGDXdTwGmCk2fXtGsPVKnMvn4waheBHfUwUerJyKQAd2XKXnxJ5",
  "key35": "24t6guxNrgkrjmNHuLRt4o9xRoPWW2BW7JnFxhQvb9fdtG7gB7HTaUwRHFa1KVPazN2k122XtaJXsgAQmXJwKr4w",
  "key36": "5XkeY9my7jaRrwuA6v1BHxosBzHnm7L3RmRpuyRwHhrMuju98RDJ1BD7DBKRSu9xMQgxwE36GX52GJaVPZLWinJN",
  "key37": "5x7iRJwqMg4Zjcq8EWSVnAqZz4Pzu3sZ2EBeD2dvjjKovpwg161pd6HFazxwmdg1eYaXgd5UBXNbTNBc7Zgsncnr",
  "key38": "25F2XCVSy7mDauAGqhnjQwwS8kpp3dAa2iukYZguy3FPVzjdtc5TUnpSKuqU2NdhstGNUKRZdNeRJNWxbqSQJMUh",
  "key39": "4QpgbjFhrHKd7rPTFWJs8TxuT9exKh1sUbNtvDA7HSB4GmC1HuPovG4pfa1iz2CC67eVqnGgD6BnTZSTjSBGtEoE",
  "key40": "Vad6WWFN92nEpNS3juxWWpVDebSF4nGWfNs4ZcwRbNENDWzzftmChZJmBqSew3sWc1dWDupaTj1PTYqfd1ZEDdx",
  "key41": "y6CodutGhLu1qB7ut5njYK7dmSECdTpd8UcKt1nVFfSwSXDJjYBVEoidfPhoM7qy9otzhhYgS8dbJa2EdaAiKkF",
  "key42": "3W5CsZU5SNWrLKK5FUTFXgCYGdvpS6sotZCZ8z5CMaGLYZxCRhhDZqQJQuEp9xxsuSmhciotcx6rUNakZVjBo4AT",
  "key43": "57TTR7GQSNRbkejXV5r5SP6AEqeDQPt1EKxfyhdZ4VTL1j7cSkzTfMmyPkQySApvDRz2zGh6YUaoNVKwsLPT8eke"
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
