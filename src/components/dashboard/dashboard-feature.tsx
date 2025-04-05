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
    "2vnQa1biM62Y6t6vuHpNWBkx5ChHxQ4mj8bL9Jjuk1866qRNzsC7UbSRG6xa197t7yaEFWZW9528qtdrryUHaDRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PiEtqMEEgCSJGSqU2PMZSYo2tpzjZDYRpyuYZT3PWN1FVEDRem6QHq5rMgpG1AV4mA55YjMsjKU9SQM52iAmBQ4",
  "key1": "4K5GsszKXbEUAwTPjwxJmprd17fd4UCPHfXDuswDzUTQi4AVeqNPLH28DQyyxNPiHZ4BMZVjynice2tcmyz5cPW3",
  "key2": "cy63s6trnskgd3EmgvMzcp6EchG3L67cz29kmGPFGDYUCejbjYt1vAfVQhdd2XgG5zsCF9J4ZrR28JMVL7tv4c7",
  "key3": "2AGJsPjFDe4EVkZGcovTtJBGavMuAesS4DQYuKSa3GpRvgpyfNTDL5AE2pTqB5Z6SXWKLnPwZhU5EZgV6ozUt1ae",
  "key4": "3SSAc99tHbpw311MUFa6516VQBr7gNUCHqEV868ZzZYqDQJ7JVnqogsyE49SHcL5YsuZJQZT9XbwKo3R1SZETHVd",
  "key5": "4Z7tDt5yHPGFqPC4S1c3DhYQoSfK3yGWUeBv8Uu1ESZSrGT6sDTJtHUKkPpVj4UmRf8ydqxueDk9nXw5s8cXjPcA",
  "key6": "2NixMfDh3zK29WiGhQQmT8R8bfeX3sQqbWB7UfPUub3zwmyUgexfAUQ8MrdzJ3cFavJVk33QHLWGLKyLPFk3Q9Fo",
  "key7": "DZ7NeWU7eUN3yuEteEoRjVmUVcFESHycWtc6UciALxbiuBXVytZQj6u25d6R8pZTDVrZkgr1oX93wpXB9r52W8a",
  "key8": "4FoakoNvUKoP7m2nNo6QBeUJSxa5qdxUX1aPyLiUu75svZT27XavM6EXnDtuRoeYZPHBnBqchCYi8mX2PNDUfZzR",
  "key9": "3KUfk7RpALWdH5F9xfWxGrEE1cagWpTheEw3Vn5nB2PSzRif5hpJeJWjmXHfLCzWCpRY2USSZrQaffDbD2ky1zFu",
  "key10": "wn3ES2xetcJU7yyyKGSchqYSspTy6AVEgYWFtxrUfjfV9Hx73e4GD8ruMpmAx2H45rzbQ1YHLwcMbq1oV4so8dw",
  "key11": "L4KkUTPecCbgo5oPswnGbz7BgfjXTkg2NznDta5RvVrjQgzw27BMTK4ecJNsLZ9LvNK8ukTf4EUaYHa1rymwgZx",
  "key12": "ruPoUtorvTzjThYHpvZAMePKygnA7FL9MZVr93pjkWpJqBLRK5bBV3YWEdufD7CZAWfRVwa7HTHWnv9RqCYcony",
  "key13": "3PxSTqqGztNL8MVx1L1PvtFzThMiYxg4F9FSFxKZxs5RdYGpZ6cn9n3EahV3tdYL46xFwb6qCjqXMcg1tckzPqem",
  "key14": "3bNffLVUnSeLoyPpdE166ZGZJQDY8MemnNx7bhefr5Zhpuy3Qb6DnbZF8CQsUwZHvMhJgza49yScd3KqBvzUbf7B",
  "key15": "4nT3SFEkEEKCUT4PWEjabH9rKXaA1HMjKgBhV8AUgZToJvfZUN2KiqYc5ZvhSra5xELs1uD5RVF46vtRoxVPEdWH",
  "key16": "5QfLFCh2FQo3QrVVYHaF6oABHeKrWoy8Qf7akFY4SYTRagVK5RXvYmWw9otUJNGQrDqk72SihKsfSQR7QBQJNPmE",
  "key17": "v1ofmmM2187zsb3wKcCBnNB33JJGLutRG7DY7BqXj8X6G65g2BwcGnFA3fLmqkJ1dmaFQRSsUTw2nyvUB6cqdP8",
  "key18": "4dU6XvfFHQACdkA24eEqadPfpgVpYs14aoBUGeWiGauEaEr3H5pwf8Z6gNNtaXTLDE6NHo1r77DkNA75vBTHYKvm",
  "key19": "3PYPeQmhPqVvEtjZCvcXNCUxN2QHqV49PfwhoCmKEaby4aNCL62urCQrYo51RpZKtHCoUeqjLnJJ9pPmv9YjjMno",
  "key20": "4iwczk4U2mMKninjnXU8Eq9XUhoHaoax3ju7mT86xyRnoC9RPHpkpZ3hxTVGHvXTM7Wm3kVwf5igS4CQCBKdJHDb",
  "key21": "3Lf25sjCBFiu5HQXvwJFc8NgwPod3kqBYbTzqkSv4vTmfR9vjJAu17zmPTumAYKmfvTB5yVgL2fBqEs9QcXEnPqu",
  "key22": "4M8i47ENz13xFZwfmuJUpS2WesQ5KxGL6gnJuXEhBUr4FiZrPYNUmXyLvqde9JGkVJkFpHZcVveEM5eNUAeHJ1he",
  "key23": "5D6BNHXSbofGrsTiKRNzkARksZUs4Srvu23tF4PmXYvVE7gbXr7kUKjLKLGn1atW9RPFGwnNQ2fuL19PoD94Kw52",
  "key24": "4G3jDEeEQxLqHkvCSmWhRPpVGMN1PNHZsQbLY9tfdZi9rK5EVuaZsP2B5rqztZc6C7FGQ2KRtSEGP6758pAuf5m8",
  "key25": "3eJiXphtDRnK8nyCKA6HP6ZhMdAWuTinAdJp51DqgXBDWd9gk1nSXHHa3kJfegCYwgCo4wrn6sc2vyR8YTUSFyjA",
  "key26": "WVqHLBdDy3M7WRtFqn7C3XPXgF6EB3faxp6ueX5azPB3Xrvwr2WUUsKjRrVs4hg5T75QTFBmNvkiY3U2cVANduN",
  "key27": "5b3mvJPMW3fs5MtVNFZKs4ptnrMnhLzrEqAYQxz7Bb7ZNemvAWxStUXXA7coPxAyjj5ujvaWzVdBEL2UA84fQKcn",
  "key28": "fxruLdgCBQSVUgvAKFEL1fmTqk5yjtkD537GtzQtDcih9hBJYEqDMDYtfWfEzcF54igMWQFqKFmiw2aUJY9NpS8",
  "key29": "Bzn2f49L9Dx64sR6B4ecCGzVtjypZGrU3mdnBsgaxkvSS829m22NX9bzxQsqGw7cCKrbPwjhDEHs59V2G9EZUmb",
  "key30": "3WMWFCrKRqfjhcgYQYWW2w7yssxSL23oXPRtdWkTsm7jTtc5zQTJuc6c7d48iqefTjXXBc7vCA1QDFG8bwhSXY3E",
  "key31": "3Eig8jpTKYSQAgxpKroM8vsuqDrttZYisnyXkRCx5c9Pse8EteMdd3LWcN6pbizoqHvNvmWMHhQh89UB2YyWH8GG",
  "key32": "ukyUDwLxkrAFX1rTrn7mJW9ADwFYRthvEPFcm21tQ7RLdvYuss4Gtb1XU4X3S6TBzFMExfj4ici5wbFswe6uHjG",
  "key33": "5uBF5yresFRmUBRAu8epLU1gfkxUi6xTwyrVHsoWpaNai1XkxCSx2wQntDcvox8FEi2ayNVvyFFqfZ4ma7pADBzi",
  "key34": "uC7F9xEHtwth9XAEzyMjo8ZCgBU9tw5VfKWgUoiKqZeyX9J4tuaVxVicqtNte3wMbsBoFPnpVqoNQ1HsnUnvm5v",
  "key35": "48fLRGgbpoNjdhG1Zu57uukMkLmPnZYgKdS4mQ4uNBPiviDwwW5UiVUwR5cJqNSYC7jeoz9eQNhuaBowoMiBMKv8",
  "key36": "4cKahJxaQ78pCM99ZevyzLuFKkDRKMkSZKYrnQDR6fYUXFsfvGdzcAsozHnwnnRXVADCVWauRWHmq1xS9zV4iS6G",
  "key37": "LuMsFJyNAnqETXGqowbfNyRjH6R5rRZ6RwuAdfUjt8ZsJqMUYavAxgEyuciypfQNsYprZFJYAN5vz3ZRoe5T9jE",
  "key38": "3H4E7xVACn7NjSC4wRH98w9zWdrH4FEziWNrGqZCNYGSPRy83Zd3qP6A9AqKQT4WuzxbYeSqAEWQc8JduLrdRHAY",
  "key39": "KhxgG6KXGcEP25PZ19VCB1bfnrhGVRXVrwTpPFQJzACQaUW5vME6wMVx8rjxxS2Tyi8WkYAd1GAahz4RFfXq6jA",
  "key40": "4uMS2hegGCjHj327MaMrJqpzL4TQPUaDvW8nmo4GjyATvfFR4vRMya1iY1bw2o1G7eMiRx2NdQbXKra8TrgajHdS",
  "key41": "eKCFmryfrikcFVH28cotQ9HtNvcontCYiFpV8E9KSNevS9MmhbfoH2FJQN9RWM4horvgq6hUWXNJ1u9Z2VHEAAp",
  "key42": "5xMUWb9fhdRLKJoQ9CGqjzChWB8yV9R9aWhwYyZEQGUqgThmDiZsrCAc3CAFcYnFaixtCuK9Mq6yrBWZsjvzBtRH",
  "key43": "3RQn1sBSmprtAFf7X6Zr6wN3R6JQzWJQQaGgmnoMF6Y3DpCLAjGNimZfNm1KRuSYZfE9fxxUicoKh1BJjviyc9F4",
  "key44": "4NNaZ7BtphuoNjt6YcVw83J3L2JJgZcmGitiHE9gWdw4uHG6supqCY3bMk27FbmoLS3WVA1uMZMonbW9oVhbHqrU"
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
