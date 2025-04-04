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
    "3JvCVB93HaDtKp4p4gGqUkKSMbZA17wRtXUNnd4Kfz9GhpF5queSsRNPixvBBQkdbZC7gSMaxpLJfmrEuiE8E3cQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GXZRj2UQxWdRVxZ1mCyZHxZ31we3eaFfcX6xU2JSayCqZMuwA4RptsrSR8EyVj94cBHf3q18Je4wDku6V4NqcgZ",
  "key1": "gnphCzX4v3v6bzG3t42fxW8s4XwqiRX9ag1x2fAZFZofQZ3WFwwAuEtxntN1MQzXAj3p2RgCNWs9MJRiDh9JUFq",
  "key2": "4J5Kdh2FPiMYSRrDEXrDwaJ9meE2j2KJRj1HhNbZ8b5svGFvfbCxpPSMYaDEwp1GHT1KibgAB8xW3dG37TEJwQZL",
  "key3": "mH2gqnM16KwoqjkEpzhEQ3L9MoG45WoX1vuNPiVU9rtscCfPYWmgetJwSkKTNG8uayxaWP77UHoZ1C7nawqqGph",
  "key4": "4pfVNikWvq1geZXCELjEmXccjSVDCfNEAQ4VmDYd93MB7Yqp3nsS8nh66DJd9YRg4DEJzbNPCoCbCn4MVamNXp5J",
  "key5": "4f7CU4zATi2MCB2jLwsX2wKMFAuqVJ1vktWptvo9vQvGLRuczfXeNkEF2hfw9vokKq7fjwhssRCcXJqzCczCLngv",
  "key6": "3WcP6qR96XgTX42Tywbrr121kftpdZg4hbpzdNWD4SHnbiPqhLbDywwQY6TMD3F8Luu7e6Ly8Ru88YdaDQM5i9Z",
  "key7": "5Mv6dREBqG7hUPShhFzniwje7KBS2mBkE6yWQRunPtpUpYgj9JiXJwwXjiFdCW9UvmSpAHPbkabgF2QxJMes32ek",
  "key8": "ddQHphPQMVj5BesksnqTV5asDfpvzEKG6avMNkE3NWwUmLNifeK7XTmjGk3A1BM4vkQs4JGKtq8qm6saMGYjaQf",
  "key9": "2EtLGcup4baSvuE2xBZvjAdLGZaHS82JA2pSVanGC3Y7KPxcuRzU2tYquJEUJQBRmGXTAEs3aGWnT5TapY8JzpF3",
  "key10": "2zRjXyL9iZ5YySDJQtn22D1oqQHzP7KgKZ6r4Ec6rXHiEaDPfiQejTSCDg4kfvaJAyL2SKYuVqDwvrrEXY1gs4LU",
  "key11": "4jmq1zwxzmBFaHoA8sHgRCyfigGQiDx56XP8fhEJQb4KEvWxDPGhaX6C5roMunmvXPgsMF3jGpreACoxoBMg2GqZ",
  "key12": "5U2Wef1KyZj6jkwAKzswRXsRP4mxqrWkUVBzZpEZnsKHxd7FQaxSXUWJAPNHsDGNXC8T4oa85huPaF92DZoJqpth",
  "key13": "2U4N4Ys5MzTqijq9UfB6wpDdBWAY1sKWqNEXyADTscmVVWro6B3GH4GqMp3o3X2Y7xXn9DYb6Fe8NXUtZqA3fytM",
  "key14": "1DUx6YKkU7b8aNaenrWN6LaSs9XnQ4RwD3qpnaqKWsW2bKsDx5BNwVo2vCzc5nvErUUGPWs1BgSBymikCS2sTTC",
  "key15": "4oHQVYHuJZL9ydTNTvFyEi4Viwgn7uKtN8KgNTKnQUGGeFrhTbt119nGriU3QysX3VxCor2HpRwT3KhWGan57YtB",
  "key16": "2HXRZAXzU8BRTixu3NraDJw63ZHSdLdLEqGUDiVbjDyABZC3t39mSR1Le775HNNibLUrsY9LdHnbSpxeV2FsHjRx",
  "key17": "5fHMQvHXEHWeF4JEn2BDidxVKfmuBdz5mvfKBkj9jmKCfd1pLWC5LUcDDtb7zuHuhGD8yCmSVBnNnevk7keDpqou",
  "key18": "2jAfbrgU3NtcNenvw9DCVkR7rm9EdpUEAUGsYveZ2z29nYgZw2m3h1YFizCS2Hnsw9Ako3RMTTmEc48XBoPnaSjS",
  "key19": "4HEv21EH24xH5xBBMhgduuTUKRnPAJ68Tw9Zjqxz3sZKe5oE7QwERajqrYtdNLwYkug3tuZpZAE1bdxuMXCH2Rtt",
  "key20": "3h8PwwKSgV5kEnGtFACto49tHTbR453dW7o6B8y6DZtgiLpahJNAX2VkUevsz1Drj1hURvi3vtxPaifMs4XXyQVS",
  "key21": "5mhUHpmMRP5wGA9BrjAV8r5rr8jCje85WMwpSPzPZK32ot6jHkXqd7uqHdn8Cqu6nWmVPYWc2jrpte88SdV9xjdh",
  "key22": "572eHp5uVyPMNzC3vfDDSDzpqvPJBQ2L8ivp6e7vW813CjenaQEjLbZv1321Nx7QLpycCByYjCn8sjeq9V9KNcJD",
  "key23": "eH5wXEwk9b6Hym9H8x6PnHYcoK7TmArRLfw7c3c2Q3fWQh5mGCjRCSbtvneMwGDf3UTaMt4hKCz2cP2QYT8P1tM",
  "key24": "5vPVo9vUyVAohs6XrT1bKX5CtPiwPivAr849NwR4NNsGTF6zZV3ZpcN1QrECmDp5PVUHaQVDPFrRjuX1ejfZk4VA",
  "key25": "5YySHifj45HYkC6pB4unVr9h7U6erTtPxC9fe2LFH4TbixNYV7tkaip2BPiDeyFV9ijbaRkZbzQCTmRi5qgfuNMQ",
  "key26": "5ydD6Aneqssuc87ETKvzr3eRGzgtBW6Df1e2hHjVmyiUXw2yA6nDtzySSphTX4kzLFeomeok4TeTwqJmCL9RgWFR",
  "key27": "39sa2JsHnNP9BksifNdK4AzVnzWJX6tMitLCMAwWaYqdBgMhCszgwFrRQ7aVKtcTwEjNoJ6TRiPEPReJ1BtfPy5L",
  "key28": "4Rg4jhTGLuxcPmQ3ahqadXS9tNLLKchrsKhH244n2dm3YKxmBVEK88RkwV8K72B9x4bbCPfq7ixckx2isLWghAge",
  "key29": "UgRvHpE9wfn2DnjbkTMReK87umm8dqhWQJYq4Ewsp8mTyo6wrUND5LLekPwE7gRbY8p8CtF97o2SEJEPNZWnL6g",
  "key30": "4AcGkWcYzkdMeDdYFn5LLd4BvQXgVcJr3MrBgHGh9W1ygB3DsD4nHc51FDs6SooBvUYmGajabJExLpuzKnJKP4Ve",
  "key31": "Squ4V5RvEqZu3itNKiMsYEDg5vR5jnbN141xVUS1MdA4xUnbrrvJWjNnFg9TcsU3FDNeadUUxiqQpbZ5s721twX",
  "key32": "4XDis8WhauNns4n6afNAk8BMFJWXHmVRmC8MY7kfgFDi6dYSVns6pZkwZkgQVLMWufqcPeMynjBMzbCmKjuPv3Td",
  "key33": "MjVmVYdwoQZoiUreXS4JBA2aemGNf5MgbiFpnWdwVDn9QpgEJkCJ9Vve3FzYeghYpREJ6EvuK5e6xFpcobH6sr2",
  "key34": "4h86qgQt25qTcqAHfk1WgCZ6A19VrfA3CzP8gkPg2XypfavikJZU18trnJ4t3CfPbiyrLqFYT9PP2qib5Xj6qgKs",
  "key35": "3mVA7X4C9MKhGkycL6AzVkLR7vacd8GmhPFH6jNLR3iTH1VrPv7ptZMGHe5QafN8UEFv2eFyEUwz2mz3DpXQ59a4",
  "key36": "4B9bBoQ8xiZbu3AKyNh1QhxQxxpMRTxZ4mpGY1zABCVSZXS5gvxF9JM7pzCLfksCbRBAHGD8pJar4czrgQeh5px",
  "key37": "5y74RnejcCCqTD6gwKcgW3h9kFfa467v25xHBL373wARsvooydVwwSQqCb1GStD9okXaup6hHeZigdJMZrzRZeYd",
  "key38": "4jrjz5vDFfRX8yYKdsRYdRYJnW2H6VDydzZp3XQx3V9tYCXovN7tq4UXxzPCYGk4Pk8hfNpvTZe2Q5HLawg9AoVh",
  "key39": "5iPPScjJwvgNd91UAvzKeK1h6o3hewTG4aSoLr1bn6V5iYZLw4uDMPwzKCyP2z1jE6Nbw339DWs3iSbD6mcPyXoP",
  "key40": "4areQ6okhK3RLjegpPsXs8YsFB2TzePtpJzWTkwqQAwSUQMoQtka5BMkL5WkZcqCgLJrwii2zKmAA2xaBXVogcJt",
  "key41": "RHVLsQQSsrvUqPTGj2gMP5U8uptba56je4xiUwk859ysc1eEf223JSh6bUQDA4XSLfGNHqHmLrhb83k7rSo8uug",
  "key42": "2NKQsHmxoCYYe8PcAAWKeQfQ3qUGRAsa2vmhEt4LLrvp3ZtU83CeE4cHDyNnzCHbNsNoKMD9zMiW1WGJYAHGdzfV",
  "key43": "8U7pazqYfkub8Q1JAPVKorDTGzVbbhyFuyo5fEYXVzbWdHbSJiLx8dkiN8CqLLsVg8CbbsPWTAT6JzCdpgzRyMb",
  "key44": "3CQLbfvEHY2yKbVCTFVV9bNmRDkySEbZTed1uNaprfR4TY7dNUmWoNg4NgNxeUm7wuKfX2ZCKMQV769bVvieemsZ",
  "key45": "6SYHx8XutpykmCJoiWRYxu9CZD13jtupFdiLFgtDYUHXypqT9wUfU3PLBicn3Jr17uVaRjU6D455aXHC9QizZrK",
  "key46": "i9M4KkNjeCrrhN14N3Ze2Nu5EYrd9EmGX2eDBL4imAh9xzTb5UvvbY9WzGgxyJ1zSZeQfoKXTez9nKquPspR6L8",
  "key47": "BqXtYsSbjCv1CTpY1sLwvnWq1QKd5XjSU4XQXz2PWcPSZxyLEfe8prSb2o3yC6VXmw8zbyMacj7n4QkYmqXC3iT"
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
