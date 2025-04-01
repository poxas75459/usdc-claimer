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
    "4ToNcCnXZ2e4ZP4F4w3EKU92mA1E7dEqNKQtYzPKTQriCTic6T4KD1oVGHkK1QcG7nyyzf2GraYNjMb7reZGUecH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pjrzKPTrjLRWEhPyra9hawqqnRZCqAWLwmaEVc52aqpxRrszY1kGAFQKpX6M3d2nPkWuiXUAXLKwMFGNzdo1mps",
  "key1": "5zPcwy4CsANR9Dr2G2zd53s2bAnTfNp4jsWvZgdoEFfwM2cGJGpHfcrcyP8WT12GGCEZE59jsA9cRqQdGLehSwes",
  "key2": "2AwEtMx6EcqZAtW43KKqKjUYLcheGabf6rjjcVvbenVz6fKtwgk6Ei4p7ZSFcEKyaZX8m47dJsghj9RAGddf1pnv",
  "key3": "4YY2rcEnojvTqtkX7EmUabi37RxNrRpt28RkFERuEUNqNUy9qsuKh6CJ3vrM7CehpB2fSUfmKKfKpp1vrxLDMDRp",
  "key4": "2zt5gm57UGpiLbKHAMdSXCbc8Vk4tPNaDKsr5kJp6VizUSgvzWwtTwP25L6JsVrSZpgECjuijJ9NWuVmtryoihWW",
  "key5": "4GU46mC96Jva174QKtGu2KDGmyXGT6CH4wyqvXrFXGSL1MtrJoNS9qk6xB5JbQ9p87MWLhBQVzyng2HLh7GKpYtf",
  "key6": "4wfg6ZtXFYyoHjTojagyg3q5vFgKd5VtXGA7fVLLkqoLWx3ZJqh6gecgd3y7kqqu1rUenfnBnNwRjCsZpi9qmu9k",
  "key7": "4cSCjSCfvtot7SQ8oV2h12WbyzqV2Dnf1vpT88qLz1mdXQFtntj3N2BGLDcMUmAXaFUArNoEqzjh1KJW8Fzq4tjm",
  "key8": "548rnGVggaRuhRU8GyN585yDfmmZN83edjnj2BBg8j6FSXaPVkdNWYhu1Zu3S926xWd8L8PDz2sZZEUyC9wZizQU",
  "key9": "2BLLJrAbvcy8k1cwsdiEBzN3sjn4wUXHqMYbQkciHDx57bK1SjPrHEK1ANH5HjKsZhQvFRY1MQfznDZYSr99aurr",
  "key10": "4yUfLqUB5EYUBMpyUtYqcbvmvKxd2EXPYAvErQiVRrt2JsDNBe6cAjFPkBDFuu86NmufDTKCYekvgW5LbC3WDPLh",
  "key11": "ZAkVxZn15Hzw3dvMAsdcpygvz3WCHmecTb3vac98vCtmWjbu39C5adEg2PfgM3c8o2QKHnveeqo1HrZG7wAd3uh",
  "key12": "Z1uUf21H7wP37fWqahZWCJMjM8Wy2hr7WQJFTNDqCatNz6bmYSGWUbnJZDs8jMmu9uSZPie6cLyXEfaDvhHYdpC",
  "key13": "CSndGsxpQTDPBcERpm7X3eFDb85BWZotRrvpq2wcz2imyHxa2JNTzQy4cL6fm1uQqWdcBs9Fmur37VUXGCPCATk",
  "key14": "5SdTrepk9VJQpmUHdNvwmGa3Q9bzxvz6mk8HHkkgmTpsvGbW3hr7MzCLPhfb7vc5gpBudWieDs6zKnYmTV3WVgeB",
  "key15": "3m3M9sawTe1ziDSYCW6Ve2tz9Da4YcmPy5AXwMX578DheE32eWMRWFdnvHK5CJdvnACAV7Zeoj9NVg98fb7yWF9v",
  "key16": "4xq2eLmfmqhNpkxmBV2GUsGQvmyMs8HpxHxLFZfdaYF16pd1Et8D3VjvVcNXMEoSTfjUtAfCoTkw7ox1pppz31A3",
  "key17": "5Nk8jvvt7qW3Jfxg5Y6RBCMQp45SPdXsw5RGbmXMgGDpXKXPFxD8p5XZKHGSot8o1vb699WgyZL5955mHjxgR7PX",
  "key18": "yW527X6hggDcos3TJ5bRHBaWqGBvF96CHBgQcf8kjMJdNumXtE8WQcx7WjTnfk1m7JwZNW9jrKPZRGGJJoayUyz",
  "key19": "2hVDRAGiXuanjqcGMv4LzJNzznU3hhAQCdsTmbptUqcbCyx8BAWbSf7Mab3p71CwLkQMcsXnRFEa6NZyFR3FXkju",
  "key20": "3eWkubjopQ8sXjNGfXbH7XsPRK2ayXPCsCKD8F9u4TjZa12mD9Ndg7HAWMQ4wa7p71g5FGy9Can7C8HTVjorxK7Q",
  "key21": "5cmkS6okoAQGYRkdinnhtSfyKzoHTjbHy6QjWQxho1Ppc2xdqDDA6hS6AWMw5CzCEnsrsh6yZhXEg86uHYyxy4C8",
  "key22": "4rffRXqwr3NXNiWsfDPAkHV8iwo3xHJ9gJcHYqyYqCJTNA9BLH5gUp2FXS3PH5vPoMNtaGWvQRNB3GJ7txgajvtp",
  "key23": "vigEnriRtrXWEKCJMsA6C1dCn2sW8hugCjhSjBqyTGzt1KFWM6hSYYZ45wQYtxUmcN1S4rRZca5HBvDfNCSUJrA",
  "key24": "4qyYG6dBGiFSDxLxpiMhyVCPbU3cmVMqxeTb5AdrSG25FhBPiyqpSLEZjpui7Dt22zWUnxsAifwdZkSN9xdQqgUo",
  "key25": "52JgFovSswGzaobnPMdg5SPBi2riMsWhiLTf279rrJBQCuAjo6aCym2HtEnoVPu1tzJMp5e4jpzznj5hT7FxNLNm",
  "key26": "2ACr83RCb1Z9LeNmrfzqkyc1tbuc67Vd71JYjx4qZjxxqDWGpyKqHYNoYnLPDup2MFndmzSFWcQ2vKbzoQPReEWZ",
  "key27": "3YhHw9S3PzeHH8kdNjkfQjDzcEGiqSd5v673Ry2LGoWiT8Sv1jocheAhDr7Wp7kaTSNwnL7JBWunwkkw11dXSz1N",
  "key28": "55B3ZTGADZuhuohtrzkFKfuyWBvME8C324ZgvsiZP3iWKK7VGQTcqyiyZrTMvWBu7gLziHnBheSQ4asFDHVjdRZ4",
  "key29": "4gfC6HhbHbRFxAn4tfL281fUsR9hheVterVFqekvFrmnEYN4c2LT8bdJQe1u5t7QpRekpMfRD1LRNbEEmw4RAAoj",
  "key30": "52aTp2PUs8vjUWLGXCKoekuv27dFxbMUwATekgnrz3p9gxprjqLXuEPrgsomfSEwHEXqJs99bN3PXbNyQReuhpzL",
  "key31": "5rWeqDRVnU8DkB4J6i6jHrfKJAv8KXkqMTP1eayxZYE4yHwhTorkVi2EfncHjoYVhDZn6qanBHJCH4svJbxDGkqR"
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
