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
    "4pbypm7rbkptaaYeEMdt8sAGCedKhUDWa37cPhUPyvMcv3on61qgs3FujyvXvCLS5JeptRWbJg8AKhkQBLWUYsjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtrYsCom5d99T5aqVAbH6xcnKGJXpEZsknvjWtDJ3zxsmh1b85sxZ9SxW2gvqd1ucUEWGPHBDz5MSjErjzQdaLV",
  "key1": "3dmAssrp18eETSHLXNZLoy642BUBz3HjRVkcGSG72RTEU3VNHi4XdLPKsnZgwLktWeNf23sy3ApPeMNfVYbGJGn3",
  "key2": "2uryvUejyW1zJiHtcqq1NJCY137SmguXTCx23sj1afyJi4XR1tHVbyVH8XN56zs7qxtP6f9ATqshUvCuYqZRRYGW",
  "key3": "5jEKNBBca54Xiox7bXkStcjDWboDegbmVupA4qep1VLGBJ3ZYcM3tba8niJQcGGTDiWrTgpfmKFipsPpqNju8Jdx",
  "key4": "2fZZ8ryn6rmmLu63hy8h1KE7iACjW3RK5JhKy419bhVKxx7HoTcGGMxATkUaABTnXcJHmaCZ5FFRun4cSsPzZCZj",
  "key5": "6bVQksKG4BqaXVzC8Ruoc2U4Dmgmh4eSd8oq91k3Ac9XpUSUd9bXJTT5nsX4rcZUwnYwnoR7qkUtyrxcjZyuNvU",
  "key6": "57QxcAN28WB2MWhcfjvzzfTonNKEWV44ZK9TeCpF4wYyvPFeHk2pNH4sQyrxabkPbRm2MMjpgj84of4ovTww4o3e",
  "key7": "5bYNLUWV3UoGnxkfKeiT2VrGVBET1c9Wym8Fe5f9bthTU1N7XgeEhsHsgTHSZEaWmX7FXTRua51TjJ533gq2FFri",
  "key8": "4juYV9Dcuw18jFrKVABqk8f9QmFgKPwHEfKZKarv9kyLcvUa3e1NLKyG4gUEELTVU8W3UjikVMZeSbdxLq9dnNYq",
  "key9": "3cPZPAEVuVzMRDa2GcwCgw1DrWAoXdkU1rqWugNENArAFr5K2DqQLGehgMVcgxkLuQmFchtnYxWpSdLE5Pe3e25n",
  "key10": "57hyd4ANnPr1LLGp9BeGTQgdosCjyzBB3UUnDAhvtYyhiHN9SFPwAjGFXf8pSEht9Fs2VuuHTB77DEGRcjEZpcZm",
  "key11": "AtcoCTZM9fG2N9TxYjonKgh7Yw545LzHSRwg2rXH4vgUZRrzdKTTE8YWoAZ6Vc8kz2U9qLxfCMv3nuoVPoYSast",
  "key12": "4vTFoBzCbvzfW2exe6EUXbz6DGGZHmRZxHGe368XGTifJmFJtgkemxAu9gdpbyMw5cscHm1EgdXNGnBWdNCizCqz",
  "key13": "c7P4dw2SxpyAd1BqPJpZmG8XxqLoPJdtewrx14rCw8GzdJywiLNrMfUyUu6scwQJy6CFHuVa3E9keAqZiTQShZ5",
  "key14": "5oUzAwGr8gziCNcV36AGC88CwdAbn9djWReeq4E8iXKcM5voNdsQWK1THCCyE3khcAVmKAqjb4LQ7hXVBbrrX9XT",
  "key15": "2vS4qsrtrGKpKGGvm35auSQfwzEKPrH2vKaXXCxqg1oVbV676EXjqaxP1PLP6PsTNK6eswthPpdEhxvLueMtD6QC",
  "key16": "2A9S65vq46q3CABPLK8oHB71idZCcVp1xxWXukjMnJVFgGkF6zneMBfgSN7uKNYqUGu1LGHYQi8VzRCHYb5Q23He",
  "key17": "MQDnpQUhKmJqXEFxYScU6XX5QW5YQ8kMaijubcQ2g5dDg311dFqqqJbAWxb4nDnMRpn4fsC4J1nJ54JdE1d5ueA",
  "key18": "4aVcHf1jYYHFTzZeubS22MPy44UsJfThX9nrXPxpBiUYv1Z3qPVvUnGvDJa5BtXHVCA8UxApjcMx519mZnnDzjjc",
  "key19": "5kNwv4L3pRqRLx1UrRmNCxrR8fnArPMfcH5rUNTUDLXWJc3UGjQcqZ6vjE79XT8vqf4wHtgYRVNha5XvaJAXtcAw",
  "key20": "5bF5xXjnBnQ6uqZuYStFEke6YpLvsLxiLLPLCRqdrokVVCGmGj8iUhBkQS6hWzwZQ9YT9ikHDRmgWc3zubdg3H4F",
  "key21": "4ZPoFdQAYtsVDKTyA5YU58f4CRZ2G6FPW7jVZcUoMTqVo4qThjV82RRMaLXaPobi1QePWi7bL8se3c4bX6oep1VJ",
  "key22": "3hy9huTBQZsctsgY7xVukjJ1TwgdBUM7xDLzcNZXbpGPyrCKh4vQrvAaqqJemdbshRc4HC1a6xu1rtysrr9KbUbf",
  "key23": "2thDv2ttpXX4wQFTmc7W4pHMEyAxrxR27WUU2ZQkMT4kPNwtViq135AC7DPoSiUMrGjCycnvfVasbGbHn8t3N7nV",
  "key24": "gx7PKPCqupBKvJEo2F28mSRRjWh3gBhWdhbH6oHY4eZkJihWLH8xDdsLYLJT1NeVHjmAzyaDW5K3q27DkBFBZ5x",
  "key25": "4RXnzbYNyRr6brFysmN9pKTi9CjWcbTbeHX6ay3GjoRhqj8dSQwBtyy8MsBrHMVMiJ24CBWLCN3vqxv1sCJ8P8vF",
  "key26": "3RBXeJK4zpxnc2zXHJUXHYDNkvYxagKgUFgYea7C3jTbWmQe9sSaYuQd9X7xYxfTcKdkQtabgu7jzFki57pGHCJF",
  "key27": "2Z2MVvdX58zGDezhyPCi9fHPdqhyCd6PP3q2UJLTZTApDfM4pKpirT9zVGShKjdqbffExT6x5YUnp7DZrt83Jiem",
  "key28": "3osnWkZzRQofGZA6ZtfqTbsey6QPuKSvujM5Pb8ECmp41Ba4Hb88D1i63FbfUnxgDXAC8DS3Ksv4WXsdgLmN8U5R",
  "key29": "4M3ypdaZqD3H7o5HmsgQKrDJEnKr5MGsryaPJZ8sTauEgpeuHX9Dt2qbcZR6ezHsCD2uKiEtdFB4RRdAQikfrhRL",
  "key30": "nALMZ1MSitWq8H1zqbyhdTYGGDySfKTRVBdFEde38BbXvpMyDY5dsCGB14LatKmZcze432GrDCYgr1r4pZS3EL9",
  "key31": "5cM1c9usFBBJcDBMHqe6jwzsYeXRYie7ebdvGtPSCNvBjL3cSZSr8AQpu8m1kgk7B211Bqn54wdqgteitUwc5xj4",
  "key32": "4ALAaMMGDDCLf3N8JXbCgBCS3EyznpLJKc66XyQzTvVzd3HjsMki8mjzuPgsWaRA2q4mu5w8t8TGqvaSMGkn7ELU",
  "key33": "3KpgRdpNTLGH99xeytYi43R2XF2zc5yRouWTVoa8rvJLCSkxNtZbYyWNm7WxyUNNhLVuvKmdBhkbSEsukgRNDV5B",
  "key34": "5A5jDtYozRQ2s5DXQzAkEtfKUDZfSLaFbQh88JhXAp3obFRGpMyUkETRWWovHL3pwK2w1GpMeZwwp7YtGifo7z6m",
  "key35": "25AavAVRHdAPpGzD3oC3HaGV1bzakmE8M39xFp3eoPTW17s5tDhxQzP87gLyza6b4mbbUrXP5XvfYAeZrq4AhHxZ",
  "key36": "4CMFpP6HyC789vBgnQkmGQTxq2kMePDzieYK6vgb3FbfmPiK3EywECYKdSyykBLD4m6NqDfWMdczPyufVzKoURsD",
  "key37": "4md5C6SCmb1Ggzrwn7TMnXKp96u2pGo7amwRqjT6MoiaHSZX8Q7ShxJ23EHCyPjkDGCdUVDzU7N15u4mNK2UVy4X",
  "key38": "29eYAhzmHsknsrbVv3RZoX44qhZUN7pEqXpev1VDJiPbFLwNA8JwTZMpNzJUPGwqT9KByxxY7j1XVHx2uRiXmvy1",
  "key39": "2GjEmhg1RGuUS1ykf5WHo3fmr7biEHAZtNrBgDMJpQiMumAFJE5bZ8sQRxe7pfDUeske8YJ2vRrNLYzen9NwXxXX",
  "key40": "4SQsYBwQuCszqvcmYRakYY4VQTpDDgL8tg2ardq6Vm1yuyVhTzgxjyJgfTeZrQXuj5Pbwc17yxW7uVC26LTAnBaq",
  "key41": "3DvdjVDZPmDDmHTMiLKPy17CmvXDK4WSGQoKLy7ByFrdwwHPeBHVdPunejhH4tNV9zXaBMKtWguczctFRStPsWqH",
  "key42": "3xeB1agVzR1SETeo8nkXBGJuGBnLYrZ6aWdXvQp3UGr7ZFx1LDhJ5qQvqDATGds5o9TVmqbR7GEMSBEYQKSt6S24",
  "key43": "2tBUr56UFkD7Zz2gWrWi5JLwYsp7bLKd2fuwX6Rb3fEsULrZfsnTMCLm5N7uThpM4yWNL38jXXcvWtfeAUENAtJg",
  "key44": "cudZgxtYGdnjWS6pdqDzpy3qxSTFqFxQ4jgEweKo8ggGj4jPP4DJVDt6oshhqgkcWqHRCUfXaW3d5sBsZnfKSME"
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
