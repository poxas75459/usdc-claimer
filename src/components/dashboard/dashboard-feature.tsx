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
    "MySpZtWNrH2hVpw2HkqjJEuXp7ALroJJugjo9J9gZNp2YVeuJsoSwwG1sriftEov7Rjx38Gwj3RoTqoiLfKs9gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dkPCh7aomMMeHXc1NBjzn7hjgyhoDedoqGWynzvBAGo1fNT8awd2cNfLqmDo5mWcxVDkykqF1Bu8Rgj76WZAvhV",
  "key1": "2WCgreRkxojU6rb3ER5ha8HsAGGh8Lt5Sd36TonDKVuqYZ5pKdcg4eMdfA64E8PJXeQEMfiuZY9XP3nqnEpcUi2F",
  "key2": "SyDpStedeeG6z5JxDz5bPr9ajM7aG2WYLGGnQLnve6X2hKsvtixYYGwNLMKBYEi8y7hA2k3TZLy5urDnS47NGjS",
  "key3": "4c2vNNAczqFVykWkTitbYCbd8pmsjxWiZLSyMUPX4VZ9jZSDD9TsDQnS1dfsh9Ku3x75ogcwSphjoxML8K9YwxUE",
  "key4": "4EAc9Qp2nN9cG9V2sQK3iwE6hEUe39L3HwCUUZChiU1PpEaBshr3Y4hYGG7AeqK261cydCKti3GmbBVcybHksCL1",
  "key5": "2CaG9GZpZSEUDRjsrJrw7hLsDhEjYBmCHEBgXFt6TLbadqpzpcs8CsZvvkGuoW3wu5TKEHYKdSkxGz7z4QiFxPQ7",
  "key6": "2T9bou27tMnHG1cNGaarKy6LKACSE5p4xUwN4g6yMiGG4zKmgMj3aY9XiHNzPdwHV2qjm8yG7j4q95ddRvGWD6KJ",
  "key7": "5XPkGcYB5c2irFQykPUPNcqhzGUybbYLDLR1Nx7fspsm8p5KNj4hc4Ny3xPZrah4DSjHKUVh6rKdzqTwYyeXg6cT",
  "key8": "23Ww9SEW1foNPrSAicdVm2SPkZ2tHU7dLvDLkjphdDCj2gNmjyGL3pdDA1kmhBk23Xoryn88yCETfs94vdRanYM6",
  "key9": "25KMsqvKeruXDaXJLtfX3h83BuNfSx3jKCSvxJrfMpZjGqiD49DCcxKBXKVC7WmeecAPdBDZTXvxckVPFeaGVhHa",
  "key10": "cnoASoUm9cbxoP56W9w8D4dNaXAznMzTQG7gJSs254uBEP2fqTtFoWmRUo4p5gdnqkwvte3hzP2f45Q2ecrRqro",
  "key11": "mT4MoQtJzz8ZzAp5a5GrfmRHkohAA23ZhXdevao3VuHGSd9gCD61MauH3FJFprf9sHK3rgW68efD88sstydLj78",
  "key12": "sWG8jocrKRM9g96751ZYTuwMSHTQpCFAqZMWXeMBc3s5QGdRHDhNUeKp1Eg3PHFJLTKqMCUHtiKnkrGZynmwD2L",
  "key13": "5rzcyxjufrSZWBPntGL31igmNDm8fEsVvUDUz2WRpNyHkbct32hsj9tiJXLPjpiKzpBZBRhM9MPuAm1HHYQ3qniW",
  "key14": "5p2Sw3qRCthgouGj1Q7abvedCR3zQF1Z4U7aQzbP4bsNvFar7mQe12HzpzSbA9NYyGU5fY3AKiseJ8QADtne87RG",
  "key15": "2WUMRfhTzp9isz5hi6yz2cdEQ83f4F2dMUucyPCPeU2LSBp9YLvPd2UWbQ5eX4jcem11Z5ukKfwBg1cSrDY1kcos",
  "key16": "2qEHYYs1fmUaycRDehnbUPnwQqAhAd8MVAKDKKYNdfii7u5heqbn4qeixhP1AsVzVkH3qAeji44n497hmyYafAGh",
  "key17": "3dUkSvad5ZEt6QMK7ir7go4oBy2sMVKzQJ8FBHvpybiSbpceQ8XJJYStTJbDBeJPqMFohZhZYxTh8KHUewXwVeiN",
  "key18": "ZSqYTH2JhNDBKZKSTpvoXDSnUpdN4D3Zc5DwFLhb5Fai6XHYVq1j5ExaJB6ksungozkFy8UUmDRRb821eYpAxNA",
  "key19": "3RD7cwFMQ5qBw2ipYVijWHU7VHjzq6qozg9x4tSRbVmUB1m44pu3WnoVeG1ZrwSTJL1fLiEaCw7ukvWr3HMdUvkG",
  "key20": "66Vwn88urcSNJ6bro5NHKVYEVRA97v1wFfraxuPgZFyoowvsvfkQaJ1ZuAW5HoFoANb64SeD8ioYV2Tj9SgdH1cv",
  "key21": "29yGwAFchWCX4T6AF8PDYdNbJNeB4VBTKbW9Xkb3tWQxDa1reK8G1dCTg6SH7sRogaXsYEHySrDXuMbJzrx9E4JM",
  "key22": "5KVpxdpAQi7SAQP9gVhpAiZNzZHGYvgRfZV8XP1YiZ5yQVrHeXhHJLmeZUUukGVFucQuXNK2e8B3qubjkmmaZu4d",
  "key23": "36Ty9Xf4v7jGPssimbuV7tfBcFokpqdLCApDZAnVXii2FTQQDYJdWgKScYH468cPigeWGDaAswqzvoXm655ynhSG",
  "key24": "2GAekTMbasYXyHjcnRHCorbbevsbocZebFBmqxZfZNyAuaDR1BieXXStBX66kMR5T9bxWfiZ8dWjR85D2EdUAV4f",
  "key25": "2KEyGtUuPUMSUoxSU7foHDfoqfHhTYLtgBgFu37U9YoqoLv8agxjCQackHnAKp17qdeuYNSXiEeZHwKTKKszbh8",
  "key26": "4xCPGwAdabereLV4KNMtXfTfdmx21UpGnWsyAxBv6eRASQXUAf43kAbRmhjux5TCJXVFoQKTZSq2ENsKPckT8grr",
  "key27": "qCrnU2RQ5qUMv6LuA6NCDtVP4sH2WEwp6jvFnfdKX4VT4CHrDoYxpdjJN9AKEkuWZStiP2mCgrPWQs3YshuwfFh",
  "key28": "4YtuwUT248F3NdUe72VSYiorKW1YmEYSwaZECGugSQQUFjBZcjuhYhYaaMz5aKoy7puB8EX5FprvCUP55GPyvCXo",
  "key29": "5vcF7DqSJxj44hE2fABW4PjUNoXxbLbeBKE5xqQtPeWfnzoqyFQXVPvMycHyQNYitE426UqyXgavJC434CsisJij",
  "key30": "4DQB3cSadDMae8EE4K17xKiyqkpVTJL6TvrnZtxLvp15RcKDetJAP8Q1ovb8ynCTPvXvXV1DyvmCEbm7X7P27pQ",
  "key31": "3qyddU3RdkVe3jEYqmXCDFPrTwkeadJPf5EXDJivt8sxsCBPMzLAxVJpz2VbgyX5X7RuaCV5nuAU4EhjtgbN2DnR",
  "key32": "623AgaGjev9vpv1yjHSmLXXorznFHvkGovrTWp21xGjqYoGSvuJqH1uv1RBJNudUqjfTfSVZdDppqi9ePRtetDVv",
  "key33": "3trC1dYYqN4BZbgbgCrva44MVxoq48KYmSHhEStZ1HaVJjpXzvBKwJgDR7Y1yBu58r9oLeteX4BX18RSmxoMN4Ec",
  "key34": "4DfxvGBdF8Fxk7ru3a6YiCeC3ajJrQnS4jdWZR8bNCsxx1v1ifyrpBfg5C2uptGR4vKo5qLpomfwd7LoxNmM427p",
  "key35": "26L6A3pbnzK2qJtEytzQXW2EpMFtysCZjKqd7ac6d5zizwEHRrXUojPZp3DiUnT6umGc3Si7zLxG9Zs8etdVSNEs",
  "key36": "396v4ce7Eu9sv3veQ8TvVSyj5U5eohAWqcPHWNuKppLZP3e8KxDcvU2dwYyyr8w3TvgtDFG32UbFmdepaQmJUNVA",
  "key37": "8medGqPADNs1bDFjfUkNAVbfHqoQTY7Ao2XgxqYEmZEZ2DWq47ZxhrcBTZB8uvw5PBbCE7oTydHAJ8QXvhKe3cd",
  "key38": "FMwP7JQB25gPkJJbScSaMzZfiTUjZikYDs5Mmfh9BkwkG4HP4sSoHEqNQ7F9bGzof5JNPDsZixyzBXY8u2qSb9c"
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
