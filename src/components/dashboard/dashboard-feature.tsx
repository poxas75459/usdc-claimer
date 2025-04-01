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
    "4N5eRkPmAeripZLorgD6Rvp3vW791RTTThhdnVtfVn17CMeyCzLfxhQBmqfwV3UgL6dmpba4yAsDBihf5UKKLTYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MppVoZfKVARVcVqkohcHCSQhonMU7NHP9cAbXzPaDWLQgXon4t3zE8CvRNBEfwu5McUaKqxmJmtN46duCsKyxV9",
  "key1": "4sBjzcL3CcTtPjZ49xv2dHHXyC5V9FoYzkGnt8paveYNevx69SGHZPPTRnvJsvmsoTwaZA6Pw1AUAepAKBGuEEie",
  "key2": "5j6GhN2CoZBYXtZKCycLcPWCHizryjgugYHRv9z6UCSeLGJ3gzeG2LjF5GzWUYFcFZrAbmc9XGFGVkrUd7vEvG4e",
  "key3": "5yGbLJGxyrihUQYraYktfAgaQg3LpzgrJedAkuDmvQQyaijtjDw29yqw9itfbr7eJFurke4Vtjhk1DASTVsXQDYU",
  "key4": "5frYGeyzfdEGvnCyas3b1AmKewmUn7y6tmgMLVTiJ1Ky47kgAWH99wEFPaFz5knq4YWs7wY6GeD5hmYLynCqfEaF",
  "key5": "5TggseVBjiE93SsAVudTjh4xytHbeQDuTgEe9vuG6JdFk3MwMYvvrHpVeDMH5jrxd7mzvwnFKS8FT7UT68j51dzj",
  "key6": "4ZhwrDo7LB33wkr1FXfP7NvyS9gN9h4KuQNDzRgGUFmgedH487cfhms4SUsf6LnhdMzQdsjHfAdz9bHgQi8v5MCF",
  "key7": "Uy8LPAvQsY8hoG1fUs6DAtuH5CFpvawKU37yJGVdiyyXzm7LLSgqkUqQhV7qgsVX4K5nXNpxoz7GCB6XbXwPfNk",
  "key8": "3BMVWvqHavA2NQGpBjRENqFsSnVgEAf4WABZ2Kf5vWjq22ABM8vrb5vKReNWawUZhewhpMRipbMbBiF7563ZmNcv",
  "key9": "5fNkJFSVQoERGYf2Xa1HuXvS5QJTqjCNsRegYipgAPv646nWYLPVHU9v8DXuPELJPMNyazs2724kYh6WmSHYzw4w",
  "key10": "52dgCc5omm8jpoaxN47UKbL9icoXwHQyzkaqjDzoBqW5Y1JJTZugNjeHDNchkRACaaHYJ9oscfZnFMcfTBwXXy4z",
  "key11": "2pR4D7jCKv2H5CwhkdD91pVikung3Sxm3KWxU9VVnZgVp2A9j8SCgV1tPALixwCG7Q1qF3DQvyy7JH1SD17ADK8F",
  "key12": "2WwdppMgRmQevrkmAcXYmERh1dYRPHEZ9Ax427gsN1zSQ8CBnjLpUbjc3VpkFcCpkbu54Rsm4fY25fi9wgYpAbhq",
  "key13": "5FvVdp9CBZ62ihrC1TjYUWKTj8P9Bj5Vo6kVe3bLMmnu9VLHtTgJo9gmZN8CpyerBUNCHwyS6Cg2kZykkwx7GUh2",
  "key14": "5ppC59SYvY658NzfxAVpekRHixPytu1fXm8cXE41y9ZJPRp4b5mKbLGWakgPYuUBHYT1oPzQNKvPm15b7Sd7MDdP",
  "key15": "37BVNDRyDQttRpByUDjFgws8N4b6JPdpcLQKT6UERGSgJSvPuZjpAQP59ZSBM6mWsHXLpqtHhWPQ6twss9Ha38qi",
  "key16": "4iyWpnZg7MNusHiAFhDhz2hrgWB4Xb8uWdtC4QGkXFKVAe7hQcLbrjoxg93kow8yoiBvQh1J1UexAcoc5e8QMkYc",
  "key17": "5fVaHabo9VsiaRkB6qqNWFV6Eh6eSq3DbVp623YsAkjiyb628utQ6rnxAdavGiZVghwxcq5VwgCBNgGqm97ag9YH",
  "key18": "3Zax9WViHE8ZMDCFD2UGSbZhVkChRjx72TXP1AvCs7LxQv4cZ8T27aYRKNKPyANkwmxjyf9UjuUgTaD4D3dbbfBz",
  "key19": "3JoMsh6eiVyCGoh4qQNqKMQHfTgD5a7iEUH2c43K87NvNvP9bDvyL6868r26dgWMhnQ4HbgugSigK3McpKfGrbZS",
  "key20": "2ymw1TcxXsBuRjg9u8d8DDFdtuASvHVKLfmGz3XnzPCuP9MQWjtfBDZ83wbBawWcF9YXJUejUsBJUY6FmRtNAquM",
  "key21": "5k9kyMxBbW7Q8YpxxiJkKMLFvRV4eji6hGTFWMoLSY91qjarzgfafEN9GitSyf64BPGdVw9pCim1BJKfuidwsJHF",
  "key22": "3AuoW3FSync9DrKsGSctQra4vjXC8NRfvLnpGPB2ESgNFXQGs7vPCLZHCzVY1Hon3YM7m5ShXRfPqewWufsmRT4Q",
  "key23": "2d1mSVKRnd9ow87NBBTsZssLCVfbVowLVAEdWTMS9A2BmSHijRL2nz7WNHuL62aMhw39YtRVCww9RxygU74JWEU6",
  "key24": "48Ee6wyztZ369Lgw8PFVxmedLQ3vVZns6wuYzXfkQ4FVPjFDBduSAx2panw8dD43KTnu741WvVuj9oKwvdr7Bw7M",
  "key25": "3fqcU5Y2FX2zxw3j9LDGPxTu24aNU2P6kHwVx7Yv6bvxnk4ZFqPWrjFMGjqaf57tHizDQSDgxFWorYDLSGbx1GHj",
  "key26": "3JtLJdRzEMN18zUikWjz7dkDGYqXms1CvAwa4q11Wdy3gKFqocrrRFUmHyRf1AHUgD9MsGJw9naDSne83fWaMgUi",
  "key27": "4oC1RETmPqCXEzeGZpovTsQnL5DUPSvwMQoaxkUjuHfzkDY3Vy7K11mZ4q3ZoyUVTzSpMrvR3xfuXyXQHVdq5c6K",
  "key28": "4vnc82wTeMgtGj9o46ExBCLYqsd6azhVJkfvyDibgAQjCwEvojiB9s5dmvp6Z4LxLnyUm911BbwpiMH31fGv6gnt",
  "key29": "3yhs8LnVWjRbiRyEdL8pdG2hWrYqbKDDDgL3qNYX4qunJnCcBvGQHSuqxTLxmYFgAstxa5XNdxYBUyzvc9uvg8ZE",
  "key30": "3HXwKM1qFtFrywodtHvobXEoEdud27YSScs4Nmbm8qrD1d5UhxGVy6JPx5gMGsuVCfEmqFJ7YVsrjyPwqDwMvfkt",
  "key31": "2rrojkB7p4sdFmnNk21BN7jo7PU1EPSgcUK6GtbMgJirxc1E9vBL8gaAFEP8iYVcDxe9MAi1xJSaRKA6JKRa9DHc",
  "key32": "4yBmP1FLbsABMQUVLQjCeQcQhwnBD7SEGTTqB2AvEGkADDuBXrUEcEFkeB84UjQB4j5EJXLB96vsEty38Jbkfk1x",
  "key33": "2FWZGE3Wns3fV4Fg6zZNKTUwt2GcvPKGuvFLxmWFuhfmsyW81Gisx9ofYNEyhDXQG8NFqf8qp21AL5E86wuLDMks",
  "key34": "2hjRsB8izykJZZfKdCqeqbkBfrzYnpBCKDvh3qKv842HHEGHr4V1zMkwMeQsfFqDkMwpKbGLELTw2McthpWZ7or",
  "key35": "4sXuXd8m4iARvw6rcSLJ97Xk4mV4hae8JdUDz7ZXRPE4pnGcXLxDkSY35cMvZwzeXsw2xzawdpZHnM7gEA6VVkm1",
  "key36": "66nCBRXpy9fyUE8jtHrz6zxdEM6XPaknod4U2yWGpKu9CQdxP4R9u6wDbQGPCm1WLqCXtWwKJEBinW15p6RyGpVK",
  "key37": "2yywNGagBjE87kqWqiR2aBP6trbZBecwHE8q7CvyH7LXvpcJddY7LuLiAzMpHzHbynCnwVbUuoAgx9irmfD7tw7Q",
  "key38": "63dNxLjkXkNyvmUmNiFjY4K5y65vWjjhEZ4KoncnbcT8L8MxmrZa5B1bfgXkup47CyQ38iqH9hYKHfMVdWNCyS4k",
  "key39": "FnDQHUo5C41vwxxuARHBN7uUR2wRsPzmoTuEmYpinJGHr7kz2PoJMtZT3VTM1nrJsz6r1Uz2FnxwMyKP8o5fAUD",
  "key40": "5Scd5GzVexzTMsU4j4cyxXcfRoHmf2xiCbU8iUnKronyRvRJaThdHSqZWboGJ3GenypQEZD3vP5NXJF4HKy3RwTF",
  "key41": "Cpj3vjVja6zdGNmWVCHgaNZb5o4TCvMRDCFAe8WbgBWLf2PYxbPQqNo1qxWFnKyu2ockDv5YAqMdvnP1y7Vr9dX",
  "key42": "3Je9taBwWqxX7hNe9CeCKpV3iB2yQqAGYwSR5BbLkZXuvGmwuLqURYBiKRsUBX9nsGBmSBeaiP5wJW5KAr2GdiX3",
  "key43": "3gyhYL4B5i7edwL2CtdE8mQAGtCAHkweJuRbYTkBT1wWg1VaU7h8kzz221UF3rAg5ubyWxGpeSPKuteNCfjR74ZH",
  "key44": "3ALNTtS996PMrxScj6JLjjwfHuUvuouTJ7xT8wuaQonNHyhwoD4a514HkmyEXjYECcqm83YH8JDmbJMwzVsGMNee",
  "key45": "5S43LHFMGxgGEKzZB4qWw5zihHmhNJty9du479f2WYn77FrUzXpRTVnGNZru4va2aFoideb1VsVSonVvCg12Nv5"
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
