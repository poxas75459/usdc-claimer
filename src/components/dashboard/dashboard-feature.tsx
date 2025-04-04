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
    "2HvFpVE93uAHiCt3D3mS6xfKTY6MXRuSeAvQKscUosQSUS58EKTubi3VcC2q9HVckDuxH8AivSj6yEbEQs24hP4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "262Spjpt38N63unbGvpR5oqLGt8DcBSisTJNuy8NkLjnpPgXLNQMQpiknAnaTBdiVMNKMCzipThzFQVYsudV2MBV",
  "key1": "5kwQKPvVH2ipE8j19nYhf4t7iFdRZWsocaaCKQjntSpvYWz9cg3ZYrKyaQX7zbXLxJ3no6wZs7f95sswpm6sexnr",
  "key2": "3cVaZCTKidQj6ZtJPnmpJtAdcRnwYwobXn6GaVrQXZwpmZVASo6sv3HGUZBY2QXW4gR5NpfpMyCRMQi2jDa8dBG2",
  "key3": "dZUsrC2p8CTSfipCcFgzAfHp8P8bx2g3qbp5shq7wudsSKGZrjg6ZXoXzHkEBZ62vw9xBaxCR5XCJGyjoF6CBVo",
  "key4": "Fm5wPngWCZaGeqJXusCNpUEEDBBbAn4rnusvLkRn6QQTwndQcjLPVW4k9U73jVKSkL1yZmdyCMf9HEAri2KA6w2",
  "key5": "c7UUMCnagR59VsCyo25tEo1hLTbHqtqiau2MxrpgCSjn68M1N7QMHc47b27XTsiTT42A1AMq5ce8GJ4qwFNQVUa",
  "key6": "2qzARmTDMQspzRuyFuWgjMTpcW7KUAF8pWkSkgELiGw4dCo54Lp9kYA1AjmP1AJj3cmFgq5oq9J8X55C9PfPUzwj",
  "key7": "3DRUVrgZFxgQ8jA6WfNPw5qWxMTQjwWYF8n9U2SbWkWJXuw7Jhog34BbHQSb5FpdkRj9z2bm5KaewAGCoBd1ZQW7",
  "key8": "3Tb3Sot6i7LWoqy47Ht9hKWTYnj45oT1KygtH4ysMnNKKDcvEL4hUQrTXUxApYZzUJyVLvqcQ8eoCkmUkXpbhrT8",
  "key9": "4w65EfjqAz71wAPjnKAiKttskMnRTWkKPMrDHA4ZbwsfKEwBM6LxbTXktASTFhpUhzHZiLJCjPmHKkFUgyjunsGd",
  "key10": "2bbPysy8c1VtKw6TEhzNZcnLaXftV5Pz9D8iVTY59KRPCHaX4mrSQnSBq2kBg8CNKU9MZRoh2J45QZWNpazTdT8k",
  "key11": "4cvqPfX26pkzcURGvW4ztLd1t5N2qfZvq99LT3ABiqws8GPW7P1ht3Kn8cNBmLLub35sPfTQHwqZnTh5qkNAR9f8",
  "key12": "Y76cGBAjp7NHFcdNiwwBTGxaNaruMg7kXuxiYgAUTdWZJdd9zh7vVadyXGbqWGafzUqekanWfbbpFMnwbS7me5t",
  "key13": "4Jvaw6jDmRXHhcuskMaDFh2njuQDtniEWtEZ16M5itQXQB8c4Vuk5Cw54YiaCLj2G5kBmiPgQjAg5RVpwVvTycuP",
  "key14": "4yrjNrAc1fd8LYM69bYt7fWfo7R6y9tWmyUAgrfrv8CfetUcDT2z5wNxywLWmkcmuD9qraF9KaZjPFDpDEUtCwxM",
  "key15": "3MJf3DZzW68qcywGNK6KC1GUomdmgMuWwJx2EAKEKZpMcnxPV72QEnVpkMdYpyQpGEfzDz1rp4z6KqPR8kbH8qbV",
  "key16": "5MSB2dq8d4mYLmEM8AMy16m8qXZQvjMYayeUYXgYSiDTdzBaYYbbMcGTvyrn3E6qaPSN7GSGdAJSNvMnHfdWMghN",
  "key17": "41FV5q47dvDB7QZyVJsRJJGdedXEMsNRg5NzT9VsfZU7b9QN3ev9K13jaKEry4sK3VkpE1ahyDvrFn8ytECBjDdt",
  "key18": "7pezcM4VvwX9ksNXHgZZpWTaVaiFgU833YYLvRyvvAGZ7Fm2shUVdA8C6nGFJgn8z5CG9LDinKZLuDLKp3RWZ3S",
  "key19": "547NW2pYC7PkPMNsmMrXBfXNWR6yaemrSYDe1cAJztf5VH22kr4n2Y2gpsYCvNUUcCqo3ut6rxrEVki1CaUn2J5X",
  "key20": "3v9xjeiNkqhTH8U43ww27Sr1D6uQrjua4YLDHvn1h9nCtvnAzGMyprrVtGoWywmsYqsJYHM3ht3pViJN6zkmq5tu",
  "key21": "5qoRrXRy2kMyoRKAzKEBYba58WGSwSw1Ki2FiLfc8viqDZgsURPpx9KJhJZK2kMTUoW63na1oBJF72A6oyuLtEC6",
  "key22": "3oQhpN9TPE2zUgvovpqgGHXmUrQHUiLt9zyAFgKS9z5rco7DeAAU6dXSFSNNz8sjwrLe1vWA3aMsTac7oxmmddLg",
  "key23": "5abboCUUxv5Z79PLrKdwhB3or9aMUS8cQJfNB3ErRY5zpm59XWNrcNDBGbD8iY7FUFubPEheEwy5QVfSyqSXvdxF",
  "key24": "2jybc9saQrDGUnAFNozW1pW7EBemCjaXKpthgKu4uMe5q5ApcJfwaUKjAx8KuymXhGyzz4pU7Ba6KQPqBggC6qKd",
  "key25": "4quqCS1fNyNjwSsR7VvF2oDuwekkWcRPivTWmtN4mEgNL7gc9uWZ6i6EtXx7MjS3RXxnbRS4BhqStsHY9grEXPUL",
  "key26": "KSArJKbk6GMev1W8XG1bmF4fZh7FHNJe9B7jzT7m2cLcSPV4Cp4qHa9dSJm3R39gdv2EUJE2HjuoLSFs3jJY8r9",
  "key27": "5aq4Ywq68w7uh2bEh7QgcDFnWvtcJgsgBcqFV1aGBiNZgzmk35uFn9VBNeAVmCQWBybQXTTZ278BXyjat7bGfF9z",
  "key28": "3tDbSy8JQwbEjrDZLf3NWDFvqLzxGaXnVTvrpgwbpk21cwK6uvkmihXbqfXPgPeTUtJeEfMMxXkAB6QyvAw6dusy",
  "key29": "38CVw3k6asH8q9uXAP7XBLZD8dexa6SiVvURD3TYfszvRKfutrNX6rLZraLiZpWQGcRaQZJaWrUmXwZpS6A63eyG",
  "key30": "3sPnVkA7bdEVqGog3mJgdAcEnxQgv2orSinCzwa44DXjnJcEkTsPwHoDukrUgXcFYuQK8uoyCdKdcpGq9jdFmdwX",
  "key31": "2VSxr84zxvY854dV7ox4KNkxh8aHE7XRdBmHjUfh2ZiSdzMtbfzR7JthpPngwemhmreTtJsUW6A6SysysHdogEDJ",
  "key32": "21BU6YjfqLnfNdpFTCnuFZN85gV13mK3LvSTUUAvhg5GamYBNFiXzKQN9Eu9nV4cydSeSYHr13iE8QS3wBp3Qbrb",
  "key33": "3phXXVEcktkBafd8YBV1CsxZeLuC7T2JZqV1noCByjLaMz6qKS9F8TdJuYwPvCXbAFPt9TpkyCUAWWMAgFuM5Ek",
  "key34": "5ZxJZAZpNbadp6nC5P16oKQow13LnoNTc2jAzdX7krSJ91GqDzS7z7TH7LzyP2oYtj2D2iGX6S5oFprSgegZnBjt",
  "key35": "5v4gPMTixfzDXsdiP9aBn6xVVFJzsMFWYY6Er4dpVX1xFT578TB8ebsbyuQV76oXpDfEY6uctZRW4y4ZF89kJRhG",
  "key36": "5vnNy1HWBzHyCtBNRaTzsJ3vdznyHqyH8s5zVysw8fGYbM6k5M9ZQ2TxeFduMtCoDECZK99MMGyvwE2niEMvGzBx",
  "key37": "2YWfE6LK6w8A81xjgHmfrMowrALzUDcPEahyNii7dUwL7yfdrBG3izSaPzVYXBtFgWXBKCZ9uRxZ7ZJaJLmT8h7d",
  "key38": "J8fKf5FNrhWBqWzgbtrWSS23Zq6bRWPJ5TCfxTgBycWCsEjHASZEkVojB3VpdAFujsLm8x5B5H6DoUEReLJtsab"
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
