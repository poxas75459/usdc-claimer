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
    "vrYGAN5UacJk3KJuoJvywqjqi1zHNNr2bjgNkbGSv9WsLkvhTNVGDmsAiVqegxhgvhu5wunqr2vx2nr1ichNuTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ynNA5dCNgV7oeYokLLstVczqESKiynzf7gGLcJd2AATiRvWsbs5eUECTsjtsLmfouD9chZDVvJD5Ywz9GPabYT",
  "key1": "5QCLqDmPcLn9pAzWrBeVVwkJDPenM5vGgk1X6aF2eg4daUQv9cr9dq9dc5ZQ1LbR3rRivYDPWr9MFGZXP1fE53UV",
  "key2": "2Ldi73mjEUNgzodHyuZBmgaC8SG1AwLfwnUYc9o4CSf83vQePZzYYpP6Ji4Zj3YxMaByWt7rLoJNvNKfUZaUKzZJ",
  "key3": "46UN59Ca1hDzDwxkkHTDZGRp81UcQJZEGLhs2SUoBypR8EmgHMhoByMtHKsN2K23MckQ1XAWx211TNJxe6YA9X72",
  "key4": "4yZhPeGd18uREeCj38b572M2pPtuM3MXUbuS9QDja4c6feJ1X3ny3mBp21D2JenY7wWzGVLpijzZ4GnbdAGhS55J",
  "key5": "3VJoxurufqpzpt6uAn9m1JuWTF4MrCvTFHXhnkpToepiAu9Qg6jK7wqJ8nJKED6LTzBiLZ5j5cwz8AijWpMeUaFj",
  "key6": "5qGjkgDdcKsdxmeYTPYqt9ZNDjZRiFeXN58oG8j9yvLPt8EgvG5M1rbXaQxXciNEjoavybku3Zt5TWDrFRfkCsPz",
  "key7": "3T4mqjDrgD2VJqqHCjWx4MdM9nZbxTxcnfwArmWeGHRUJuDGN2Hqty2L7H2GswbjADHe89ZsdksyiQ1n1Yp315x3",
  "key8": "5DKTQhAPYUcT2gC96zAVd2p14XspSHAN4AYak6YYicrtwmzuBh7KnXChg1iE1iH7ddbeESuXvLVKzvLthYWax2La",
  "key9": "4rLv7ujfbKr5fnMgMLPg1RnwBmMsEFA6jTSCUoir6ydvu8SUuExjkBwbpdcck8BiLceoyt27iyFz8zwKU6zLGMqg",
  "key10": "67DjDVPtHy4MDN4NwEXh6Ax9LDjstC1SSKFK198mVrgTLrPBHugwnq862VvZqgVfjw1mHMNrJqhqsFETi1D9oXRz",
  "key11": "48ef51i7d1TuqJptFZsB2bzxESUtmfh2pqwfh5W6qZxx143d5UpdjmfUUo23T6wuXW9sTXwN9MDqyomKXL1ADHxE",
  "key12": "3wZGJVnsHhpMUMU8L83h2UDtw7g4NTj1XM6W1q9g882xivpbD8QEE5fDM47nkTh1kpoXBGFqpkTngJzY9sQ1VZqb",
  "key13": "ksVyCq13mWjtwwRMPAtrBDs46qL5p5BpL4tDUxDPHQs1bzrPeChdWJQnh6eDAw8K2WUPeeByBJ16JwAuMShH1BJ",
  "key14": "3nUBXfXBBK6nYCbZ8DyUPe6zzV3Px78VxrozHBt9BpdsidEutC6i1tdicjBpAGLjcPyJY8au7bnT9PfkqWuqbsYd",
  "key15": "65qeYKZGztiGU4DWzoDYA2Bm9MDupxGiCPeGtxCB3N3LrY1pv6hQrWZ5rWNH26XHJ97AupHDHSQpkv8r7LvQTR46",
  "key16": "5gat2XpU6LudtS9jQaVNWBWX5bsReQzdPvA4rBbDkZRq2rDj2yKDRwvuPgaGZ762XZr2uLFkhJAdiHpJ8sBTvAfr",
  "key17": "39GQd99EzJan36LiuXcck8ZUKi3jEWhU2NJ8cLjg2J6Kzto4rvmpy9YEuNpGBiKXfJxsT7npc2wjvNZw4DDdeMPq",
  "key18": "4zNwCcvYoyTpHbBbr6HvYJaGdutVkupYQLjrv3EH2uZRmMHJVnGyLZ3C89os4bDBZTtCgm81ctMne5wehvjYBft7",
  "key19": "46gSDHnKu8uzDeytNzVb6X7pESuJBNH3oVPwhtzTPYAK6mouFfzfCcs5YzcuBQoRaGWEiqUrvKhngqhQivtVVo1z",
  "key20": "4xW8ge6LT5yV5iPH3W7tgCgcbQQUeL4b4nKxRS3DrHvhQqj2C9zq4pJzX4U4s2VrWCeMh2CriFF8hmU6JQ8ZBfFr",
  "key21": "4euqQJDQBQNvXcchJEHdJ16brYuiaPTz2wgcPRYTpknB8HNwUrBHjRo8fnTcbz5aN5k2wr9vLPeysrCQiDfBX12s",
  "key22": "dV39xMSrM6vuWZokJfMekZPdQWkUQWqr2b62EzLXi3p4W9Ed8YhTSZoEfqRi71hjyYoMiWFxoweApJ5PwsQxPyF",
  "key23": "2kAeTeK9q7B6XxjmjNviGY6Bwr6GjzUp8foNipYxz6VKLGr5UTK2XYGDyjUywhAaFNNQBFsU9MvYsJaBgsXcjKjo",
  "key24": "4QF3tofJZPvuUJ5Ws26jn11JhEX1AL1PnaDKkQDCZ1qQGaGgXxXQBmnR2u8Cxt1uNePtgCSD66B4Fyu6jSr5Q7DB",
  "key25": "4GgQHW2bP9qx1ANqwryANVrUjZakaMTPokNV3cUCSfhZUhNJf5tbURptFpAmfshPuQqDt9HKicGjUUUPKvrqb5M",
  "key26": "3vxp8sVnbxRCcbNhqa3WympAfkJHXriSfSJy945ktgLuQuz5jqTyDeDJn6U2yHaBK3T3ihSsFDgoMdNFtcLtLA8o",
  "key27": "t8GqpsDBQSWwvaab81iocPQxXfwU9Dr9s7YY7iSLY2KP7dfeB96RFh5iRZ2wgnzEdGK9JvQ72qoLcycAiSyn3L6"
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
