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
    "5zrZAsGKNkDa7LVYoyWecZzF2brQijaa67b1UFM1YiiQLmQ6SFfMvSRaqCfovjX5MHvjRSscBhiadJJ5VpDvtpz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RWjXFNWVesuQdTMAUt2yPGW1NNWS6usc4SvB5KMcyY6M6TyGRkrFmnpWMndvCLNLWN9JnCorvGthCYFdqiYJJAV",
  "key1": "ZqfCtG6G2zPqzihXXdzVqRiun8MHfi5gzhnwtPcKUEAQc8RpdEx36HHFu2ChXLakTdyWJCPM9UAPHcsLFcWyARi",
  "key2": "5CG91ReMWsVYQd2dpYmctLPPWTxuWoJ7LAdhqXx8GvJMn5jwdyGgYe3MzLEudE2PgzR5tXn1PLRna4LL7fhMoyBy",
  "key3": "3BUETnokY6QdUn2mxQCH8VGC1ceMosajk7Pp6cqumKSaqqw8eXG5beGDCpJz3gDcfSWtpS6Y2DqASgyb6TMvXiok",
  "key4": "A34yuKe8gmcAEENzVunfNVbnwdrTE69YoSUPz1odjc1RYwh9AbmgYx55DpKfhThCDNM9wQ81ZeWTMDNVn2h4eDV",
  "key5": "fdMhuPSLgXMZDB4yEVP1PgS5jZVfnE6yEhbnFuzcEJdHFw4HNTLEYfB7qEUV7ZHtVchs1D2pNnUB9CFB4HjeV32",
  "key6": "22yJaN4mLzgzeaoVGdzpcKyfsJEbVLL8rB7q1HnRW9EPYH1kvrxT1sTLuT1rxxKTG24sHGgxXtN5YtswpippUv8z",
  "key7": "3EEBkrDYzxTWLhtDr92onhG1u6SgU3MGfujntfiFLx2xvUdVWKFJDqtTJnXveUEBHatcbLhV6o5V2gaVSWMenKxC",
  "key8": "26kR3KCVazmXwjuzBykMS8urrGM6YeqUJqnd3u7Rbgm2wZJM8q1xJcQmGgCW2taKEjW9S8cnxki4u7PB2HGT7hfd",
  "key9": "3FvLkW2jk2ut4oh9F7vhrzX63GnMLJV3Am9LEjzTtKCmQPZXA5DbCiKJ9qc7zKBvod6i3EqtVEZjFfhEnBxex7z",
  "key10": "5Zvt7Mv5ZmioH9VCZybA5BsMqohZSpGaqAa6uUmeNmU7GCGTgY4dGijvjAy7YVWzpBR5KS5kMBTwNZgfKUrD6FCT",
  "key11": "2nRDVwAux1R7WRNKG6oebLzsMLYvKSdF5PR5y4smSCBAGVQY6imLiZsqfMevSeAfdNefVdLCrXwoixMdi1itDsf3",
  "key12": "5DfDPeisqECKkNQWHweqjiceGD19mc2cHSHSfYXXQdvnwYuLgE8n6zKhEFF8gtszWVRmpUChGCiXy8y6ZbwXwyPD",
  "key13": "49bLcnAAbaL7KCSzJUFMqTsQVGmdcGcGkMrBA8tMRBRwK7YQnL93UoFXnWKpJf7aExkmxhnCL6NPQjd6cmYLWvPR",
  "key14": "529FfX9yL879Qr5jHr3Zo5zCLWYqEEajdWXCesETe8uKQPL42mAbnPbV88Z8QXfxroQ3ywYAMGJqwav4yjuL8By3",
  "key15": "2PUDRCEsXmrEcsgTNFd8HYVAKJEztrpSfMTFGV1mYXNmQH4R5YLDQSDSWx2LHDr5gUioFeAKk35q4EZfGBqmRnZA",
  "key16": "3mFRj4v5vxUMSmvr7CPhoyzeWBygR8EK3BGzoecs1M8YST4pJDkks3ojqpxTDrAkwRNYEqW5cbqnvpy2EkAuHvw1",
  "key17": "vxykT1xqqH3MLPmkVqXw7pS7PwUGJFbhq5EH814kyHXUmAy6fekY3q2yDPzwWPsNJmYWYQfMbGEghjSkY9cn7jq",
  "key18": "Tt2UZBh83rSoQvc8mhiJUmsAbxKbFfirzD1FK7Gr8GVBctfADpiV9tqPhxTh6bttdAQ8S2V2vwF7UuTU5dmDqe7",
  "key19": "9RN9CMhtB3QJVXTcCNywGmLvnSUtpQ5Dg3zuDLr4LhvmKohgVryAQxvv3MNb9uP5UtmbpC4qPjSczC5tvpwrwaS",
  "key20": "3bc8MqrQ5EbtuaXgxRSyHnzwkYNUuY8QqGDKRLfQGQdgjRx9ZgjaMD4BpRemJroL833cjmEq5cvujdbGm5nhvLpg",
  "key21": "2sVTiFTLKfwGZ2ioZH714B6Xe76EHtz7t4F5puDrgaTajytN3FSXq4b7qzsFq5qXjTaVk6Yqn9hwGGXj2Vvsb78h",
  "key22": "4Vs3XL7eZaPjzr9yih7sPeLtySAECXtYL6J5SJLnKK5hBnT7SfRec2m6e9gW18Fe5dn7AzX6x9fqjZ2mtLM4hLAX",
  "key23": "3MRAHgfNWhLwhVZRTqxmbCzcURkaovV1gT5z7HMfdf4gv1AweCG8F9zTUupyEVnk1o3Yhd7MJBwk6w34PztVVbWo",
  "key24": "2ER8UhXy5HAmFPS5u1CTgCGCBWPad77GBGfwBry9z8Cnb6DL7TaYQLrbqZaPuNZUBri8CgWz2x2vpvYnkj6D3cN",
  "key25": "5fA9w99Edf18krpwFd36zMMozv949s3omX2gAJcajN5u7tjB9A8PfchXQKsgQjbY5iWBe1jQLUuPngGZtRKnJ2X3",
  "key26": "5mNDLwaR539e2p6mFYCZrWiK96QQGQ2yTuXzyNPAMsuxLiAb5MdoFrusQ6JkGvvYtFJsYjeSiAgGPCN5YGEt6jZN",
  "key27": "5PnmhmRBaafNN5cTyL2Tnw5BD2HsBTd1ptBooAvvj2Mq2BfKfxn6Xs4UCQgfKJ92qK5LTitZ5MQ8HED4xCKASpin",
  "key28": "3twYQGLLbj6qLifeLPAP1PdgRyprsonh12NJPdv63mSg4vbRt4WKpAcsZGYydNxSg1xfjTXLTTb9W4VD6feZXSX6",
  "key29": "2CHmvWFEW49f3e17AEXGDbk6sgwPWzbc4k9VfnhibYUNDGKjfdFXMfom5Cug9U1BQVEk9EhduYVnmqgCX4HNyBPF",
  "key30": "3uAZGvsrpz836wJd2uoWSnXDgCruXAacDv5DxkynSMFcFWiYnfDxo8QZkTithJ9L7faFeRixGyRVqNmuAgviKdnV",
  "key31": "uz4PAmfhYZHMbWuoBcC22LfDgNT1eeky1FfGMDk6x8jaJ8yRfFb8z99CQLxSpjDXgEFLuDpfgnKWMkhCRp535pA",
  "key32": "2nLCqXfZzQEowUraotqo6NA4r1XyaBPzfg5s38c16A79zBnH174Ew6NZXmcQjtcLEkAReuLtpm7RER2iQbDJJCLW",
  "key33": "LsdzBuujjAd8mrsXEsSPmRgdUc7fF7o7sjp3y3FN5N3KM7iCsLCD2SsWVPeQrd9uJtoDdQW3JBz4BeqaQpyfWze",
  "key34": "3rrTcWkzz6yGzmVc5Vo3etvWtQyG3CvpwH3CzcXzyP6MkgBz2AWxfZFABNMfeZ8GEjVEYPsFZrN5PAAVkqGWcJnN",
  "key35": "5vhT7eFTT1aQx5S4YxKEvbtnyPzxuq3WXkSXS8v7SdEEvijtX4ZZX5WBpPvRKtUu3yqF65HVj3PDnTs2VN4yTyR",
  "key36": "3F1YQ7xKRLMTjxBt1UQyJRDSzv5jTEvzJppUD8j4vA7zVq4MuJQbc61SAP3My7GKupiDUCAqDHEqyV6GHMrAwNdT",
  "key37": "3rDmVF2mAvKsKCejBG5MXSgsBRywd3zwCC5UtZcUu5x1S5wYycfrL68vvkzqDqNvVkZjyzaNQaHWH1KuzQw482wP",
  "key38": "3KXD2iU9cygpU11LjZepz2EWzHvkEL5dLKEbZWeXN2PMdXS6WR8W7uanyHPr4ie9jTFPKi9MCFpkFRqUx3U4in3v",
  "key39": "2fvdFSvqqgWmqMtCyXgPaMvPWdPpX7FH1V6KA92NaL6chVHtxpNEXZhtv98QvXPmNknJitvGWJxZL7RDWCatsss2",
  "key40": "5xbVNx4B9bC4JVqizijPN5q4hJiwBQGQgskju6s8W8kTkiVp7ponZNLEouJuKmJku1Yyyfqr54ZD4xSn7L9PkrZm",
  "key41": "21QKCZFqjXJcbBbByepeE8xaycVTUSVHxhZB5Pr5tS4xXgCATr2AFJKM7m1CsCk3tUrjyZc31WdXTX72xg3o11vk"
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
