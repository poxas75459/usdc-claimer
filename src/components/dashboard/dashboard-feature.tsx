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
    "5ma4gMq5TPZUgG4CRPc5JJmwog6x2qVeACZ9W8FvKjFaYN3DwoD3uwunMkvXDHZjxgP5UMkZjTFzqHCEqxsGDtYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aYYAoqrunWgYtjoWPq6aNaxKQKUHSstRhruqsMJq9SgF5oQfw1fvExdRkh2PFuhYupFpBKgPdmKY2jnev8joTjQ",
  "key1": "5kkmrxF1zEVfpTWY71J3kkWoK9e7p1B3LNdafY8YmGCLZ3F89MbaunsQPEFTXnLzxFU9JWbpZvjc8w2k6eunLXZv",
  "key2": "3tPehWU9jQy5J53VmUkBe2iFARzPKq6anvtNLUbmnfEHSxts7hWD3LkfBsjW7BpuZM8GGovy9YgppXtWMtF6G9VG",
  "key3": "5nJyg9C9VEw4UdPmpNXvoJLKhTqQnUvky2qsToP1ZPiUZmmPzN2AVkK8gkLd4p8H3sS9deB7oVrtMD5i8m9zdGbC",
  "key4": "Qse1Mt4EWjj4B9LiM42q5G9HfttotBVSJKS9pKeWuxyQ3cFKZLWizp3e8ziEm3HMCbbFTz429v4FmUjZBFexvrs",
  "key5": "3PYmqdohGtwTzFpF6X1WBxzWEcKM4uYoi9W48VDedRztmFas559J8Atv9iwqDJoWuGpGVAd6fVViWngUPLFLPhKb",
  "key6": "4r5V9jmLoJEgcR312ePULoLmJ6rK2RTXDE4jf25iuzeKRpXQq39wB9JA82A5yXCcLxEimbskkMLncqKcPTzBBfXR",
  "key7": "3RujMxA8tRrifntDp1Z6rViupmWmt35PSH9k9wKWRvdQoCowdkfsRVWaV3BFXiHFGkWqrTBrYaXeDncZdwqT8jQM",
  "key8": "5tyhiTgzk9X3CTKjWbq5sit1aPNDAhDrNpGV78EPTBfGQRt3SPbfy8U12wf7SgiVmKu1UtGKXizooK57RR6aLigT",
  "key9": "3x6tucvmtbkRyp6ST3ZQrUMaCBpAWP92LPSHGM2zHqj26UE4YShsqBMgFejouXTsvoToecEvmvAB8U53a4A4TCUx",
  "key10": "gEkehaenowFBP6YdLzzNYyrDaWde8gMshCyWrhmiermQdsBAuJnBowwK8ggnYkh37PkxFygAjnZXRoAgz9QGSAd",
  "key11": "tRv6RqQxytAEK9inmgJVJVzWGjTZ7BvNNcK6wQJY5H8jRjYthaf7PiaeXYxoYjPysc4gsudxR8zs9XLA5u7tHYp",
  "key12": "36xLt4LUac5KeWuR1QVaRwUJFLTdDpeognCerCeypfTGCkCSgsHxDWeMbHDDUomGpW9PErZMHxRh5HdPk1QfR4Ni",
  "key13": "4srK2FyXo5DF2knn5Vi8L1y4jrm1C9fBrftbk8vsVfFodbaLeabkq2zzUvQjp5726dnUPfZmYbv7MMRKJ2CxKw5A",
  "key14": "4S54M4WtyEn8TFLF9ERTbS1VFaeb8j39MGQ6WanS3Vod1PS4xmKzUBwsAFFFhGob9jEb3xTB11d3TuLUjaStbqX5",
  "key15": "597GHDcbMinBuKKduqyKRugmXMgUbQPq7qRzukRYu1RoCSs1BK19ssvUScrGag6jaunUqepfbLXNkZ8TqBY7DL6W",
  "key16": "2b4sVyucn6bQaHT45jHMVvnHTjcGoELznSNnfRim9pFf2rAJcwGa93oFehwh3DpvJwee94xnW9TsdZHUUeUFbe4J",
  "key17": "3APjMqG2EUie5qZVBr3Zkwq23uZqwGHts7DtmAJok8ocnq4ciEpS3U6HtuxEoqxS8GLa8MaL5KXn2qtFGUoxpjPo",
  "key18": "2nPAVd8AbJuh8vAyGMh4iZqTNtfLBBy6CKnZ6wtV1cw86sVyGARoPNEvLp13Yu7mRhfBLWD3wZRH6tVDYSDhpNED",
  "key19": "3VQVFWtMC5ivjLeZUkHQTpKKNPoTU434kiA5WxnHGNp8F4rzxD6YTxT5JduWovAixQFv1tZkPyzdm59ZW8d2qogA",
  "key20": "45vcGdgbsiyvpVH2EExxSFndkQQnYakyNTdNfHceuEkt1wCVYtmFgui4R7zz33MMp7tfG9b438VzagrxKg9gtDjJ",
  "key21": "2NND563yF8k6TDBCzTRdgLUEsjR8pFLDFBxsb34r1iApvi9zWevJfrhp6HtqHkcE1m3eNEMjoZsJdsgh2iVN7tBg",
  "key22": "2vLyRh4cXT93Brs6Lymby9C5n6nL82TrfqzEp3X8vwQBVe4s5VXDxZGSiXBDUAQnVH4fcwcTEaLrmvFiXnbChccU",
  "key23": "ybokJVC8SALK9Cny61Yb16rYDAni2zPVgKMMsWTe8rZXV9UtRW8TZBJyC9pDdcKnnZs63qECjb2EFyfdykdCfTP",
  "key24": "2b1U8GdNBrc6VyLRLD5aqY4kNd2fzVAe4xCs76BWHvchjgJsWkY1mMSTD32hMcMQrLC3hH9LZ7oF25QZF3xGyCE",
  "key25": "4XkjM9pdqMKsQTkJdUpRYffH81pbm21S3KemdWXPzHaHZQVLU35Bq9ZQZiBNqoLpDFjhpjfHZucKw4XTfCAmiZr1",
  "key26": "27MQ4akPjTvavLeeD9m6p7MFU6DjLzTMMuk69ZZoUstbQMPrn5KdG1nrke74Zkcy7J5bsMuF5BYzZn23rEqNih33",
  "key27": "35TM3o48EYZ1adrfEDgdzKEXnewSseDiukLUC2EpUkQR7c4ptquvkjg3KctzeeVSgKJaEY9YzYAWjttLn7qzXECu",
  "key28": "4osrqajhaiXJVGR4RECKADaHVnWGkizfuTM9Vo6kC6ysPNn2zTytHSAMbEK9K2bvaEuDc4EgKp1GNBg3ypuGiL6n",
  "key29": "4u4QURP2SkeYuKHKZL4FDENj2pHQNVVhuq6Xt75o8AbMWbckHa42yH53RAx1QJExrVsKWDt8jpe9eBjvAWdN93Ba",
  "key30": "2RqmMBVdfPjykDMYCZvCxBdHeeNHXHD61ubJyfC8XtCZLG8jMHVRaYooDNhcYYFC21oEjVhSycrTQyTBQGmpk23T",
  "key31": "35xFiBHfJx8D9VPi4qPJivWKALMpPoak8sMuLdttrFw4cEDYe6W22U5JC4DEPLPZ5YzSfSQvVSk8DijcYW9aAKfK",
  "key32": "554xpr3m6WvrgB6ucx8EtrVn6ye5U1ncg7oXioeyNcUU9BNn25oLucgTF4YYtapuVgS85jX5AMwdtzd4zv9fnKRq",
  "key33": "4JBcxLoxXbujF7oSkLZqPgzTbo1yY8absfZe4foP3gSYhyCUJqMmMvmUEqFmhA4kMyJeT41xpmqt1TnyQLqDaziW",
  "key34": "3VVpgLxAZ3FjTKK564PXA8MaheVzueGfLgrryKS5oiFnsbgPuv6iKaEnKo3m2vDYTkzWhPcz967wACoQNVLbXN8X",
  "key35": "475qhBZ2eni8eLqiyKQinhAq8R8ABRnFXo7E2sEtwLznS8njC99zYtvJVUhdXa5e4oc8dnqVatnAUvVYmwZKaEfR",
  "key36": "WMzMe8NaD47GgPECpSuySxxnmC87R8cCB4ZehGrjeisQByHqMR9Cjca8Sp6AYTgZKmU2e1636FGgXX2MbS6VCn6",
  "key37": "3XVhUHPM8XLUwqwTsQk9RLUSU8xvWefaU3AWqYHxANjaiDu6ZujnspyWiNcHKNjHeUsiBGKVxoELsbmRhskAn2Zq",
  "key38": "662exhsywsqrLo9gFEBs8ZiZZjvewVNDpuanmn8GmnJ6DW5opk66GpGjpAuftLnbW5PivxisBrhgDTEAu8Znw7PZ",
  "key39": "5LXkJXq83oWqWx9CAw41k7UrXmEoL2Pp4vbRKAhkujFxoAUYSaJViZt2o2Le9qHog2kiGXmv8wWZvbNG9v63Q1EE",
  "key40": "4J6nYHmfbzpsL4qysZo26ArzRXSXyVtVNv6D1bHqBSfKcGDy7yLUQRyXqp9sRwrFWgSZV7VTz5XAzahf9Vv9dC8p",
  "key41": "2mTdfe541VdysNdgukNwVSHeAmdjVcBy9zXXfdLQsJxUcLTYsviGNJfAaoYMincuhBEgGRBV4xBB4yPy41ThJbbB",
  "key42": "5gTm6ioDaUHLB1mkz74UQnRProaDAVMpJAJgJtF3EZL2NNKAxANnEf9kdBBJ1HxC6AVC5CS1bPiLnBuWMyGQa63",
  "key43": "5kCi8EV7XdXTFSoWhPBXJzZxKaKRwDQ9Hapchr1acyLswQRCqVQPztmWSXS9WJyGpARWBc3wWiQa3kgdgNM9YYYp",
  "key44": "2kvk9bZNbEuQQtqNcPuHXNTDbSZHTonZNAwdncjisfcXojCHKCQrXjwHkB1sNfK7mvyZscYXDjBV62xTK13hu4xH",
  "key45": "5nLRerydXPWW19BKBepzRVj8bXP4pnSNiWJyMiTze9dK16qztCqb26vYkcRC7NPjCTRgfXRvHLnjzuBtteme2MC9"
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
