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
    "bVpS3FCVATdEgkEF7nLcbdcdyzeqSnJ8ndc7eUhJthd9edNmMfHNowEksqiQ7mvQkWSzjf6c6MCzg8P5oJ6ALMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BRwuWxfMjHV1TCykkDAXkbyZNqVVTiTFSQmFZ89yN9DA3xuQmmCSnkKSXyNYPEF57VzcCNn9tyt41YPjcAqT98g",
  "key1": "4qEPeRfY2TGXC5uNLoCSJMBFS3q6q83AABkAf7EyB1UtmF14oN9AiNVbms92HqHcQe5SJ1RVtc84ouGGAZqRv1xU",
  "key2": "fDiE8LAmJahvLYxYtaNxTF3yRB4Tj6GYaTfF1ZgVpcNNtUY8eeEM6m85Fadbvhu4RfAEdSxunNycW3eG5HGn6Rb",
  "key3": "2ZfPX87MntjWPePaL6zsYHdSsHB7XL3pda5nENXYPJxHgJui7W1zJWzch58f6vFfYuFXAMQeDJVVtNVuM3H1fTtE",
  "key4": "5Dyvt5yyxmFidmZGZu3jd26phLkDauFRFXD2qCwste8CkhUcZ29capgjEtiHKqpwmt8KcDMPSkBLQHHjRbWV9HCS",
  "key5": "UX2dHGf9pasBAveWBkJTprosktVX4zVpVsYnvppMNtRSFekSU6dfjHmuxzN9tg21FmzT2QTiGhuyrx6vRh8wiSC",
  "key6": "2hM1AkzxuhaJrrt7BJ6J5bBw6oxWxkkp5wRRVWBqiAAKSDS9fguxUm7dQoMbCfR3QwqKxQJpVBUd1ysXyeApWGiV",
  "key7": "BYvr8b9dFiD1W85nRR4VQxrXT2geEPbFTDyAV1cuqKnwzq2CDNGVcmCENVc4s6ozptP9nNNE6AWKkmAVxXKacxw",
  "key8": "4brkzt4vDD2RDo2aL1K2e9rrU1mwqWUCK2Zawrd1LcEgP4ypzutosoDz8edxTUk7hzf1Tyyui3fNqtwWCv55eARd",
  "key9": "2pgNsar93d7ZcNDdKQs7JSq6b3Mk78YvQFb719673pTMRc2Kggpm5tNa1exxnomdL3kyMYVYtgAUxnMVSQDvMwox",
  "key10": "2K9PjGT7eaC1CE5FZeP4f3kLuwsCeXJJDupnViV6du9CRegxZxLVN2WVmKjhY6pfjoSS8uK2tHyLuKNEKQwrLKsG",
  "key11": "2gjxhLNQhaULaZ1oFWXaNy2GgqUigt5BncFFP96DYocjx1VQRzvwZi9eoUdkMFmJwHWuxzZwrXfkT87qZMgoLhqq",
  "key12": "4vTrZr8LKu68gCGhVjRXiAU3nwUkHiLatUakruFZo83KguotGJrxYdZbFHPWVskaGtkRe4RGZ1Le8QT4ZCKCiZRC",
  "key13": "iugogKN2d9DKf32mvoFL3JnDdStx83GpBFbMtMRjPSJyVRcuFPXPUK1Yz6o9pimRjgP32tHbEKVc7qcnRsb8wms",
  "key14": "2QnAhN2rZxfVqTBpJjCojoVhoGPUgE57kdYR17CxBDZE5Pu5m5ULiC1nXPbH4zfustPCSiexvmRXaP37rXGi8iNw",
  "key15": "2x9TFxNw1wZRXpBMmQgWyzddVu3mUQ12Y9MsYy7W2y6WjfS9mUE7ezWpD5A2kyyPzNnUTHtbV4eaSSJhaxuBboYY",
  "key16": "xFBGrjNEd2u6Mp5UYGtAsPEo2XQBjwRTZuYa78Gqmpp7U6Y5iA5f5Bp52c4AZCnWrP1AadoPoWYa7qPVhDCSz53",
  "key17": "4CXBHDvKkjvVjRgKy57znsYk4BDMF3Eh4Vow5x1R8KHzMuhUvawkJ1f8VjCHpq2DNLSojyWqeiNgGGdPVSeDg8Bg",
  "key18": "3aa9PZuh5UvTb6vd7yL7xoNDePVLGZsFBYEJMSwhy65ax99TFJWGXB3gmTganGM63x7Hh1KNVHai6Am77Gci2T2i",
  "key19": "2ErsLdSjmnQznhpSydmvKDWFm2RDbqjE91MFSMa43XhvL6xcrgNbvmxjxTXdwiXTYmMDTv53BYoGqrga2hxwccwo",
  "key20": "fFAuZSVvfU3EhxTB1UK3Zg6fkzQ7EQBxsc1ueWQhVKmkbqbhHPV8V78pCkmtp5Z1WHstz8YCm2uvc4DfrtCLo1W",
  "key21": "66YiaJpL4fsaWRn7BrboAChs2CVSWaqrMrYMco75vGKAdYttSgtyXQVeFnsZm3QeLrnTcZG1p11Zqmj42JDvRzUz",
  "key22": "4VjcvxJUocEtmLQG5UpHefd1zusU2MexDZkb3L8HdZnzMffMwpQqb5TLz4yRE8sS99anv9db6cc4bTzBpEf7UL99",
  "key23": "ZqjPmPhVAtf3hBbcaxrGbGXXfzMZYhQKVdHTjCkZMJgGfzXBNdNG9k43rhWG39ujo84kAqxQ6wdYi3ZsEC82C4c",
  "key24": "5iijnyUZ8gco3Ug6fm3AcNTEzAj7apJotD86C17UaFMm6zpDpZVkPhMANTSx9eXX8iPy6sZZ5tSj3xt2jREaH5xY",
  "key25": "4pN6Wb16zzkQgBqsRPrbs7iZBsS8ZaYWKALJrTfDTiCuUMrP6b9v2fT27MAChiFCch4pM5uZPSjK5FLiQz3kDh3V",
  "key26": "4whN5R8RgBTqu38osG9LmW7vBcUi7Gwyo6xPW6RUV4oRYDooPZLiQJmkrRAkSmv1czhZBB2NEHWH6tZgv31kSzd3",
  "key27": "5r43HmH6JCmtTHSJHEgjexRT4T9ypJVk44ZSxj9d2NAc1BMnMuXD3PK296udDAkKPu4HFQxqpui2S9PNUH8dxFMA",
  "key28": "HfoPphMM4j2ix2vzCZv7qLyAdthSkwXH3FtiBfCzAKY36Fn6jXowzpNQjqr4ViSqDTVQR6Q95V2s28QGdT1BAaa",
  "key29": "5oYwdgHEGnVLi2CLHFMQNQR3ry57uKPnBDHG477DLpWifmAgG1h1H3j7HUhxpPU62cfAwhivFqGqU4h7aQcT43rF",
  "key30": "3XzSamB31DcC42sW2n6QofEXkz5yQWRhxn5JbbSjzknnUpBkvQmV9YJucQPk54o5V8BHcDZ3n6rqz8v4LmU9yyoc",
  "key31": "276JKcpFMP4q5zf7nGeRXwgzeAioqEd7LXRFtLwWEctpBAJMT8LbfRM92WdzVL43r4sZysu23Ga7JHMb9VgYWeVG",
  "key32": "3q7tKgsMG4c5EMd6uo1D7kA4i2MfgwbAXxXgwmaXBxMHfDHjBQn1KmQyiuFstx6JYnKjT85zGiD4hNB8fkcE411Y",
  "key33": "4GzUJJrbSgFGr5tX6PSYZpzGqkbqVmrgFTPzPEHK2VLk8vYD2mJJ7kiCuguv9KgTyD2ZbsS7x6EFzW162b2k7LK3",
  "key34": "VJiuPAWovR3m5g6bs94JwBtHpXcWgD9X7ELVNkF8WYpAx6DS3aV4a6McnGRndRdYjsNv15NjyaYTAtKUqpCSzr8",
  "key35": "3rEeHtdFrmUh4Wy1RvWtrhfdA9yLhRc63HKja3sHtLKX5H4kcaoZqhBqHcs114Zj3XEwhCYcp6e7KYFW7L47TdLb",
  "key36": "5X7LxxXq46DDE91RAQkaGnvuMGYQiSP8FbGW87n1LA89grHGvPCXRbRwL22nvv2RBN7geEPvcmTfRWfbFcPS96qX",
  "key37": "34BFLgqN6rbX9EjiB92ZJsqCx5J8eJhC54jiQFHLRTvDt97dYi6Cf3zgjdqghAKtrg32E44KQZzWDRY8V2eRXkPd",
  "key38": "2hfXFUHnW1XVn3N6FoqtNih9iEvbrKnzQUz7nCEACrhpAvKmo5GYSj14iwi3VXRjXqBXKorucPsg2qzPmrEcwEYt",
  "key39": "4HufGceptXT33XttRffDpudLdpykyCfwyUxEZQRon4Bqg1DPmW5x3V8bWsRuxJaxgf47UsdKjVYJHPCkn6TRvG91",
  "key40": "ZKdMWrxhPW9HBQXuFMUHw11sUNUBnDH4Dc9U6stPc7pLz9t3Dux2LivR4AAW6z8VwBpCwLqBEPtyJ42VkdgMT6T",
  "key41": "2bJGwpHQbjHH7ATnziZ754iUz7NwtCPSjEzVB512p9YcSuB7mK7XghwALuSoRdy32QDms2VAkqFCD3BrzAwPmhZA",
  "key42": "2DDBn495FhuASAGgTz86bYkCKTcpM6cpXYoZgtPo7V2cMnj9YmN9HyU78pT1rtDgWn7QRaDn2W18RGqRxyn73vfM",
  "key43": "4CDXKUZtEXeZFZ8UMAjwae8bD1NKvYkwp4DAjwtnBAmp3bxUvdvcDZJCavnfS4cMcNRJCTh6RE9mtPeELfmchKjD",
  "key44": "2XFCMkKBdVQaUVGxH5yz3GJzry6qGX8pEKHHB6ZLoUZy6dUpHTsZE5RVJ7xmX7rs1ci7HW3BNyh4YnpjuA6C9Do5",
  "key45": "5LX91RjQvzrWDpCTqTeADHNRBUauY78Rh3WK1aPHax9fFzSCcFJBJHEaKLtod3Wdx87hrqSFwL4edM1iF3Nrp3hr",
  "key46": "fCbqnsEqy6ZsCTnL1SfxvphLMFpEAYWFZVYxtVCoUru4QiW1aV16m6hNh4vGATgKGg1DMCfwsUQvSpTAkCoxtyS"
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
