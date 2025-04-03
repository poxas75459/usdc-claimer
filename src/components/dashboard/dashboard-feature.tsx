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
    "2KVU1VjemXJqzqtoy7YZQ3v6HB8xah1Lij9hYdMy3uNXmWoksacfDbbLFsDer5hotmwALYGUVgCtm3K74Vi8F2cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N6We5zw9WaxUqsqeohJjpAzuAWRGV6xBPjF3NkLcznBpF8tKR28ZqBN8Hf1FUiAfCzrmiRWhEfczb5ac2tCXhKH",
  "key1": "4hZgwFgcEDpiWWq2DHEoJabaTMUwLndiDXoZkTPfv7pL5JirCpccHmhQVVgtGKfkxML3Qqhae3p5SL6HWnMvnhLT",
  "key2": "2DJdr8SSTzEytA8RbXvfHXsWFGZwfRkgXMmuaWD6ZfzCjwgvU5mG6SNHEdBAPXVowNqapxUi26yHw6J5bXhC73yB",
  "key3": "2CXLtMJkrKKbotK75e6cyQKNXmAcax1grSgYYkP52UMC3upnJqwgE9gkFqnzuE8iGHjAsWqnZMzsySYwyHCaU4rV",
  "key4": "4SdQt5QUQW8wQYNyv3kQQisvCQV5KVMZBJnL4S935bvnhMrq4bHEPpoDb5XPXHkmGAmfuBJ63ThmGfcavccjNBtb",
  "key5": "4u6PY6q2q4DpAJv5aq55AopQu7XzbXfUivVMWsay8puHX1K9Y8t8SP5swj1hSt78jc2DUdTqTGTRUs1CAk3qS1gW",
  "key6": "25S3b55GiEabYPsuT1GDVmPihrweYzm6vCQfYjQT2T6zZXZwFJXAteeE2HFpq2Wqi8TVMssJ8t9xoQ6HFnJFT4Z2",
  "key7": "2DfLvHNQGezURfWQEByNhYwtLz4DiR6SNXSmKYWWVBx5KiA8vWXwbYyuW199hRBnFWrMmMrTdfme2qppagDZJT6V",
  "key8": "5tUvS7zHw9F9hKGduA6otA4nkUDdCkPSgeYsZ2wwVvsWPn2a5v9X3ixa6KFZFNYhswHmi1eVXJPJ1mznhZKQeT6e",
  "key9": "2gxGgzrVzvLPRAP3GV6Br4mQ4vqrjhu5gXQVDRLJiCbB7g6xTAcTLei49cJj8V4tGWFFxqy5TZJhtDnFDR8rQip4",
  "key10": "4Y3qYMq4bJzTM3znAupaYEvg4Vymx727yY61DMUpTjRmrRW1iTUaxc1KunLdQvo63VYeQ4qzCogtU5zAbWRYB347",
  "key11": "2TDmR64EzZTJGQcGbkR1yWErH1msgtbmWJwew9QmQaPM33wjAAtwuQCMMP826PsXBg4kUucwWq6XJgWVymrq5u6P",
  "key12": "5ckwUY2ZLnNCFmkxtFeF3frzYrHz4NTvcGvBjkC8gQ8K3NmVcQBHsFUd54AM7yQjgK9sPrV94QQgdwBuQ6pvNdH",
  "key13": "5wiDkCxnnY5npD7oD9qEocX4ivbqGW3pfJZswfjfm2sfaa4ooNwGACS71xeAXwswWDsYCCxyYAP1areJGG6V2Evs",
  "key14": "2txAkS4m5XGenXUCTQqDL9EUySXd1HKkf1KJit8UN1zyv9mbrj7HzyC4xCcv6YXqzvrBB3XtCnVaXoW2TsK2LYs",
  "key15": "4sL2qRbe4zerhpgawqNBjYgECT2SnKoqEtzE2WUEU4jJeDHfX6uUJexMs7cS7dFF3NZ4247scjHwY4QvK3enFBfx",
  "key16": "wnBWT9hmGVNPb1iy6396GrH9G3gwXY3uLyk2YgBP9TpzyKr2BNgMMeHFThKyHgCfU2VPAn6KXFVMajeM1U4n3A9",
  "key17": "CcYRuD18ngeAoeFdcnsUqmwewzpZMnqiUXeMjfiY55iWrBf9XCrkeDMvAsquFTEGUBxye3bbbrydvpsieNYAvg6",
  "key18": "5evJYH2Rw7iRoy2a8W7HUvGSfc6HfHQJY8CNNL3Kfr1hUjHTDKnnoCn4VvBeAMLAacgM3HevahYEMT1T7T5umn8N",
  "key19": "2VLYsNVc6uzKAE3ufa45okYsqpiyZkCdw5gmtBXZVP9Keg2KA1Kv7MrsHwmp4NEJ29npnybxPdGNxeh3UdtNAmTM",
  "key20": "3vhAgo7hp7xoCsn6nnGVcKxge6ogRt6hmgNXBvk4hAcfPyfozg8Sgbi4mZCHuGxBefFp3WzNkoLwa2kcYfj67tBY",
  "key21": "CyboXvm8BYWyVDDdwTRuaRYh6nqKUtUqk4Qwdum2sg3mURUgdfjyEbc8vAaKFDxsBjyThoZf11t8zxJoxJZMQyk",
  "key22": "2yjSPk9JbLszr1vxaUqwTEgYHQYBLP4QuLeREBURPHuTqv3upACz331TdX5V3az35uJ9fUytP7Ri2cQc7LXd8vx2",
  "key23": "uAwNCgWsxmhP7vBkat7dLSrrRwRPzBWXUrWCLXkdsFTjXh3UwhW5QZ1QtNf9RbNwgg3GXUw6NpjgEbxKWHFxM44",
  "key24": "hDLhabxKNsBGhE8kxieApeF9LFKZueCxLyHy53ac8dmajBXDXU9HiLeoQDF2KnNE8Sb7L7zVsH7Dz6auGubvieo",
  "key25": "JTks6MBp4965MHpyUK6R3sWpejkty66HtruLVc7f7TwcMazWzuBKouyj9sXoHTYwQxfeq2KwzWZvBXaeqR6SXsR",
  "key26": "4KPJUfFBXiH31mjBVHoXAei3PJrGDvFWLZ6SrSJxHpn8JP9KwWtN1r24GxUxJKe8RAVD1mBvg5mF9S1cvfGFZUan",
  "key27": "24UHHCCpvXDFqJLp2u9uZjztUBJdGQjvUAGAcUh9Y7j353iZnBKUCFrVCiXgzPcZ4FfkT1e2WVeTXXNW1bZULnx5",
  "key28": "4TX3aBYJiEFmiho9WZayD2EAV57s43tB7Xf4gL4KzCouMtNiP164F3VuHfBzdRkG7WkLtesSbmnRxTEL5acLg5ns",
  "key29": "5SB7xR1ESHGoch16jqdqKUv8UWQZW6YTrv4qpJSqMu6oniKXixMECa18wjcdD93Gwcz5mfMqkC7VZnDouo6QBcuq",
  "key30": "bzVqLVSWU3y7K33LFZtFcgh4qitPyZS1iqaZ4W7uUqHWheQtSyYefkJ9WVPpfKhPAm8iYTAnjCizcHkYT7huSQQ"
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
