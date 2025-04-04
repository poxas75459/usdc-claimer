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
    "2AGgNEmnG7ij6K1ZAt516KW1o3ibvNE9NpstkTPY55Yp5LZv7jQFLq5bEcVjLWDaPn663fU6P4zLpyvTdDnA9TU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xvCHRdCaQQKV974Pkxgc3xkinT8wbqfjAkLbbBCnmK9jVy5bofTRQEmfmQkDrTTnoGMuJWHrWARBDByN1ALyK9x",
  "key1": "2M1yjAjtT5jBjyGGkAZmFy1CR8FQYm8x785U9FJRcbhSCqCDx2n4qGZtwFA8RBqEvKRNknrimdHq765SseLkrPa7",
  "key2": "2Ki49LhAmSoHqbFRcZijVH2sj1R5JCu8A7h6FV4HHNsm97aDrbDHAQapC3KDoZ8A2RsELoLhTthTQeqLKYoUuakf",
  "key3": "4JcZiPuV4u2aYu4QXStuuVpsva2RpVy95kA14AWQyDZvFZxSPMXsxUXgwNmPpQpzHLbAozjMP2i2Y9Lyh525W5hG",
  "key4": "4p4LhqFxTcUmS7mQ3nrby5vDTPyocoQgFUvHopJiHdhJzpqGYLG6f3jLHCvf4gPnY4AzZ6z6gfxPxtS4dStp9dcH",
  "key5": "4zDmvLKNyA7yVxcRvA8r2BfMonpePYfZPFVhEQNTUVwN7L111svBGZ6UkQL1sTrTeuR465hq7pmXzJdkDfezE4mW",
  "key6": "5iHZM7G7wbk6HYDqHz6JtVE4zVy3GprhVc2kLFstjhmJHmzGx8aC64PKeDQvq1GJvTzCHDJz1Pf4Uk9emGnxgQxx",
  "key7": "54yXRBtKmYxaJwpejueBfNE4zHpzqzbZeYVgtAtbe5sz6g8AjDMvuSPJyw2rZokzvipfrAvmmPpQYBdNSg4r5B3v",
  "key8": "ctRWWBVn7ULKfFzBi3JWPujR6EBmKtHcsNC6peg3xL48dSsS7UpXiTaFv2hpMqG1epAweyQzXNjU9VANFhATfxb",
  "key9": "SQVgKYvbk36BqqDARyVsU8odtmuq8kC7MdGP6cnZ8bipww8kDqGvae21DEC4qZBLr4S7wVhiZ3ZDEKm3jwCfuRk",
  "key10": "3kwmp6GFNj7gxZqtuD61wXJv6YnCNfoTcPAatApDtKZcYirWxWPLfg5KUYgvxZbELGaN42zQe7iw42LhtUY3UY6F",
  "key11": "56SfFfxTMmWdiniRYKMWkvzDSPicyGJY4c64MAep81uE5maZRXSW95T2H5JAaXEUpyh1AxLzMVSz56rh7HnauWQB",
  "key12": "qCmD6wemiP3ARFhryZfeXnXfgEXTXFqBzQ9AoJzrHZFrndgj9oUrC1hidNAQ6kMrnmxgBPQaGtx4rEPSyRQPusG",
  "key13": "2ufzFgfUDryMhirAXaJ8kiucBdveWKWBkezuTEBkgMesdhXWCB9AiQdfN4nzAxQRCCsirXiYUnUDHWgArNfyCFyK",
  "key14": "5ia1NvcRRvV4bVFTFLbwjZQBgBF7mdLfWvgHUZKxWLrRuRTpTxpmDYBBUB4QDS4tpFWx2wp6jvVDkYhuwETteibg",
  "key15": "2xSaRuyB8BS2SgwS5yXzkzays58oRAirkXDjpsMpeDxDkxqkJGaMfS7DbRppjASv8czMtCNrawg4HUxrhHKKDtpY",
  "key16": "42FEv9Yqxa6Mz8FgQtTZHrtZhmQrnjQPc1jMGTekj2QgRqX6nE3tTQkuek3423HVkNEVii7iZRcUyy7s51QdB5sH",
  "key17": "m896nD4mLkbgCKpoUP1thXdrTAsBJxZtz2PxoKsft54BcgubD1AGv3R6QQw7vQm4rwD1ysggrbzLGHWtR42ybUZ",
  "key18": "5BduvEvkHLns2pFcS8s8Nwffa8JaWny2xiGhdcUFDc9YNfeHfwShYwyNMDa8SqGLzPsRdgCjkNiFEM1nCD4SVWX5",
  "key19": "4odbfHP2ZHuBceC67o31MoXT8EZ2gRnGjfQhNqS1Gi7KHr7Cyf917cGWBL2SDwj7Koeh4qpTcL1cgXKHPrkMQu34",
  "key20": "66XhUceGwny94h8pq8FizKyxne7b4JMiQ9hij9SAeR8FbycBvSvbob4XQ16NTgHqaVPhLh6yw4Gg2oSn4xKoCZar",
  "key21": "5jjVN7QVkZrkQWVz7p9rvsoCkzTsCYRYzvtqYqggDbTgdfUhfHBbEsvtGBft79nCtFjegf3MrSenhpvrZTkWxzXx",
  "key22": "2KcGQaziTvLSbXD5Zjn1hdBs5hcHEmsr6tuzLTCwTyGNViRdJKKSdUjgCER1GpdAuq8B9TxyYVTdsX5wXZ5LqU8c",
  "key23": "3HGhQ9jdTAqbqE92afDYmXfR3hqJoSi6JEe482CPA9DW13Tg7WQmgSA3a4K5cZFvJNY5wyUJ85B3bqnKqqX9urqD",
  "key24": "f7GTScUAWrTKxZ61S8ZoxFJA24Xg8uBM6Nixqksp1bm23LJD52o2aiEC1FUKpFBBDqBQzs2hZpXop4hjDFFzGbN",
  "key25": "5bq1xGZb289z6ssmq9sT5E4dF3BY5Ahcsc21tjvizBfBBHAwoofnutDojv1ysWJXLdPu7Vs7mRzmib4yN5BS8pJ4",
  "key26": "2pLx8XmiNFDWFtQQW2dYSX8HHxigpuyBDTykRbGqgd8Rsx7Wy7oH5HBYci4BwufKQXtGcDnf8acJLKvSMYM9nBvq",
  "key27": "4MGiW1UGFHeMRTiJEUDyPwETTAhMncUoC2wrmQ2x5KGuQjW233ktvdPFCNxKpkPbuQeZJUNG4j3oYPjh5rE2Fzou",
  "key28": "2K1ceKgrbShFBL2EwFCtdJ3RaYGR9271QG7wQDN14K1tCWXrmUytbjPHQF3cQrkJReoXqRCiwyPoHRhx1nsFRUjP",
  "key29": "3i6EMFqQxo3MC6sQPLvPPZooUuJ67T9j1eC4mxYJgjNdenvMktJuuha9e2f5wbAdVgfgv4ZUBW61mxTpFvUSV4KZ",
  "key30": "5mXHdbSva8LjY3K9xNokc2n8etsDBkKyzuNPQqJbhtT1wwmnorJP6a6vxPbGFJ49tvrSk4AqpJhcLqdtmvzkYmzU",
  "key31": "2zjHL9jyBvmYibr6AU75x2bqW7K97E8yFPH9nMG6tD8tCUS3Cre93A8b365z9pefW5JfodBR2Mmb9z21aVw9dwrv",
  "key32": "2wYZw4KJFCGF7dy9KnRHrGUhK6mep8N9a33Wr4JPBpefRgp99HxxjQt7PpemZQno6nFJ9gEcED5FVcZkwa4E4c9b",
  "key33": "5NNDGn7v74iKEiKvqJhHy2yv4m9zQQKcpBMUsXCfMeWXdKqCSaeuFwFY34S2JLGEL2w7JB1xporu6zSQTGFz1yp3",
  "key34": "3jg3vJEH1aHNLnGr6MTqn4soy4Y2qheGKPLXVjGTdQMy8Yy1brsg3TMASqu2oJ8DZZuFWDWZD64iLFght5CW21zj",
  "key35": "2PkWSa4JSeApiATwxzqbjqBod9RdSP3adT6eqxoSGnsy97RArTKkPp9w8dpWsxqzCcZdY6h8ZGM3vSKd9CZqqMab",
  "key36": "3oemk7HSQVHyqTyYkVb2rPGDCbgQYYGLufFZtR71gwLgF1VbLTAJfGfKKXvCwAMSoYZkzmRrBiWsi6cGskxegWmM",
  "key37": "oSCA6i4VDpZYPKs1Kagb9Q9J2nuHNiWoF43SLRUSMtcAsmre2FkZ3BR2Qy6E3g8dYJyKMjJJTNq7YayPaxRZFG3"
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
