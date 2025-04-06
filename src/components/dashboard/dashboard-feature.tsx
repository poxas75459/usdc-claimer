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
    "2Ms1caDbJrKaHYHgJGNG5Cb7t9aq1L3U1qJ4k9eYMLtGhwhGFGtTHYhbojQpYyR68nYCz2LZsaVaYQi8wZwQR9EX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDsxy41HAM8q3x1DQGuAZC4BwiAcBxz2B38nfaW25ZLuZf6RvxXChqMEt1mCDQZRE1jcsVL5QviGRLZhdHJTcSH",
  "key1": "2KEaCxxotJmwy9aRqyQ2n2JLhNnX2oJ4M5svsF3rWqJs7bgHzLWBhw5LsczLWtBRBdv7PWFbexf5uX3bysEmBc9A",
  "key2": "24VAtUVbN75Ft2EUn2adHkcDSAihFmzD31o2TG6RjVSiVNpsFTWaWHZEynUtuF5YJeqpQmhTjmZ6b9C7kmJEJYhx",
  "key3": "4968d74BfNnpd2Msmye7ZEwVHDYmtPcfCYDbt3pvXcsuGi1ppbTM5qL1iwBzvTsXQpDUact13tCzCxG8FwQvoP2o",
  "key4": "37npM1drwgPjtmMkkmY7EjyxnNVK8LeSazKWgVShRMWs5TyEJAqmr8r1Nn5W6psqBZ5DcG4GnsrwBZwYuua1KDnZ",
  "key5": "3X8SGz2PHo3bbf8xX8fpzZc8ENXoXEgGm7D9eoocuv1SF4jEdBRJp2NcjxQdf51y5bSDxx9tUcf1FceeMha31WwN",
  "key6": "4KqyXPMqM8A8gA4NKNzKWjUHQfUwmxe6ZDXHBxbtZfEnngoK21ZbNYpnpvCnBtt8LNzrAVUNGoQuWp1obq7YaiZr",
  "key7": "J3gWib71kknhUDFwT15ujhNjVoVq2AbbAAfW9mNeTiZnJrz7mwgXDM1gBBnnWYpM3DJpBVxefsc2PP4Y53aJVvF",
  "key8": "2UwTYntZiWqbDJyztuDsovXaTXuKz4S9iLUMntwywE1b87rKfAGz4RAdvHAbGZjXqt7vwTSpR7sVNHPgNRgbCoDg",
  "key9": "2tgxDX6cEpYSogW2Luarxxm53xkpe2s2sYe3ZP253puzddTcZDKZcd5DnFNvd1w3Lz6MiKZpx8ZHjhhEXzvoYTtU",
  "key10": "5S4X57H738sN3uWQvTBpoxhBxkbzBY9iB8zZ5DvK7TffpREremDo6FSzMy1WT6b1ABefYn9KfXaGBq8duWTuQYYS",
  "key11": "5myhsreyjxvWZFNw9KeCcxwMgdoXkyaTE38LcwFkceMqRarwhJijoFTu7mZZKtJwPfGJMHTKUz9BZ8Xna6LXHwtT",
  "key12": "4gWzip8es4FJupax29y6jyKJDAxzh87AX3hLhDyTErDY1YAEqjoh4at7Q26S5NzWXb2VetkWpzpYaH1E63PMhVVm",
  "key13": "tre9mUQTHmcD7SsFGmDEG6PdrjnrUkdVyP6oYsNzUhtRPHpMvnhmdkfu9kfEFD6nbFAZQCz49hVbCDxGGc98GeK",
  "key14": "4TFJxbCNrgpy5TA5XnGUdwt3azFWTdeMzNcboer2YMMsBWXcwZYVBX4eLUvPYzkhKTYL7asBAHpB1iB1eaZ9xDYB",
  "key15": "2hubCXAzaEtLbGKH1BkSF27a4gFs179hakgfDpAHzvxb4McvbFBSHvbKEciVNMWbQTaQoi48yL5gHUXdFZWktvxk",
  "key16": "3x3sXWa9p5MVFtNFYtuKqiowDYo85WsxRFi1bCNsg9xAn5t25SkEv8gXgn6WnXJJgsGeBRWYjs7wpLyDQSLPkjUZ",
  "key17": "2fErZTxskcW52HfyNzYM2JMdQzon6GKWGKCxhsPjCxeVyeETpfDSvuxVdqJddniTiYcsoXqfaJDk9FDRccn1zrix",
  "key18": "2gt8PSW6FJpS7xEt9HLZCuqhRWEq9RPRf7YmaVG5zvPucjjvukJ1uwjkExEhb3vdzBo8GLZppbdjx5JwEVGvrPKu",
  "key19": "2szkqVH9HFJnVEpgcAhkvJ4Vqdp4UPc4V1Md8MT2vpUeCJqpLVxTY9HKr6wJLkQG3GJ6RDL4bN4WBC7JeNaeh1Uz",
  "key20": "5XxhZQPW2qXmntMjMJ4V2ges8bVDK5UXYXupggaToqfvwGphVqyhbgBuy2FLbnALBQn9zf3tm9x8D8djEE2xWUoH",
  "key21": "4qKBQT4p72ymjzLNGTRuSFCaiaEjHnXUKLvUx93zGkZJhX8oUiycjZdtKDVLmPhCfH2UdeHLeWvPaUxUthT41UrZ",
  "key22": "428KT3MgDPETwiruMdfZFdVyWvXigBnG5r4s7g114i4zXdaSNhjvKfd2W5EH2Kn9afEQeHU1D2dzGKxsXRrQFrQF",
  "key23": "3QJkmgm5tBZewBXXVPtFNGrka7mAgNymSuSnJ7yZ1a9k4hhs8maRGAWHMbT1Py3zBnLnG9q78fxHvasfAKMBaja9",
  "key24": "5dVLtFR21dnHfKFuUcfbR26fW3f494959qSYePpTE4FrgCcaa5VksqJ1Yv8JEv48M7hkRijqEGtX4XuqdGk3oAE4",
  "key25": "tuaAyksVVPgKhbBg2sPBqrP19xxQzm1icxKVyjQw67aexQNZqwetKj9cuccM7fG8EHgKStYYGqk4z2cGYboC8gC",
  "key26": "4Jnbi4RWXYMDXAEYMFpYyKBU8N7LeTPHPd3w4U8gYKScvpkFmsKVrJ9bjUHzb1sbzi2RNF6EoLmVF4WDat19jRFP",
  "key27": "3gJF175zyAEQneFPjjXwKwQf7ZHsV4XM8DVLjaBWSVZYvSnC7Ea3MpwoVt6n45cwTNDoABBRJAhPHYnxzh85CEWu"
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
