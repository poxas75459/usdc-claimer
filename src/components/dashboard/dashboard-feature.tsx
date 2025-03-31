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
    "4wQAz6vpbchfGEUrSw45XPaRWf5gJJpKWDewgLaAYVKJ2133SMVsiDQuzYJc5yAPLmutXiS3SyzwFdYPp2Xskyk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XcNjG14X6DqeRuvka9NsMkRreufo8bsqCwL6zTrqCVryPELE9ZDPKXXfGMfPqdTMzJDKDfuW24vkrDDKazd6Gx8",
  "key1": "5WpZe1mjP6KXESbbUPVa3iv5EUqCuq71ewzmkH9uMDwFWVgG6ZkZA8gYJvnByUuXmUzwGgV8S6c7y5boKNKhiZve",
  "key2": "N9PWAnqa9W9A69pgktUkZG6XnTw3meoJ5RUDtcGUTsRZ9n3ruWFbsN77jJd9vyjcvE1W7Dpy6iXTLVTvHkzJTgg",
  "key3": "27atoaYTMGLhZeFTrZJ5t3mRiQMGHYoC4i9NGkF8efiGz3TQmHcP2uiyYSY5DjaVKYRk7GP48sAkpyHBweytPqkd",
  "key4": "31aRjV32SfXY42rjwXzyFRcTgFZYiSeCyc4Dvg5fNZQGh3sCjWT2Zgj9QCHn1DvnqVhxrvWCWjCg9q1mX5eHUUoj",
  "key5": "2r9tZuePRLRLdaPsdPBrbB2sdreg36jpzbM2RdsAXajqPGw4LTen1Rxt4mBCiP651mT6SUqr5Hrp8MLywxKf9qQn",
  "key6": "4fRAkU6g2y1McPZEbqNhb7Eemszcr4vjtfQWJ38GaJXdeNRmFhmgJN9W3zg2X9rtQ7sQFRKtMkVntMz9rJwcr1wU",
  "key7": "2x6XMGdRQJkeVpP6Xv2xEAQMgo7Arfey8E5YPLbNje88NSzo5KDKSZbzda9t467oou6L4ddJJwsx4HoXDqXgrfQ",
  "key8": "3u4QSeW2TJEGQkNBom9SBk9rRVGGPmPvUnWMHPLq4Hzcorm9G63aBdHYUztYHK2xxg7WAaefSoaDfHaz6pWzKecF",
  "key9": "3qKvGR3fjgup5yqHFrocw7yf5v2pshJcdvRbD4tiXCQ6Ckv2rvh7QYJkS5CEmkMVytGE3wcGRgoKwAYRqLPtz3bj",
  "key10": "4KXDMTJzS2kyLkp5oiGpTgJKSK7aLN1TxJMKW1JDbs9c6AhuQeqw2guZVucdAy7Rqxbn5eKbXD64rgfyrG3RxZGi",
  "key11": "2JHcav3N5QfiKtwdwTCfLzDS5efjBCvvrCzyhpz4yLLb3PHHPwWgtGJqJ1FwHXsKLQdZwhMjUaYjBWMKdJPnD4ag",
  "key12": "54s6x5y6hJNbviBcZbgNopiQCTqZ9oLLhwEEKwRbQ3Yj6QE3ncsmM5fKjjcdWcboR9EcRwosMaHaGaVSdeJhnj9W",
  "key13": "CLWR2ZfwZZoULZonwBiU7jp7BoW56JN1McgPba7tSMttemqs7hmVBgJzyjMqfNMfS49mhQmRtu6gCprkKtSYa6B",
  "key14": "3n2weQ6p3x5DWxWh4J31VihZcaxJ9Fjpr8L3REQToeqCmZTjKrZynSttsLWPR5pWjmjbqWEib9BM9hAFh6r1eKKc",
  "key15": "5DbLmNzNVtGFMaSEdykgshJhBVoAokghiNbSkb1zARGsRYuuuV4bt4QHshjTYdExSHCTT4NnMyS7Su7Rq8w2MazE",
  "key16": "3ZTQ6QPqsy2Ro18eAKAFNvikeDbGmtiuLZVSf6cJCkuprpSTrQnz2KJmbJTxhfeK72SnUBWZGEABZY7M12bCPgtp",
  "key17": "29v1SJ8ysiN1mW2VwKwqPb1AaEHUY7aMnqny154FVvFe51MmpDUPtBbS9YyLz12xADBSyeMg75qs7QZMsf7u2ikT",
  "key18": "5rPGhjhUu9xYZ4hphmGM3nTiQQYTsKGcVs1j3vfphboke3nYSnxkizGZgRyois4ESMtiTpuuEL2FP2T7QuMUKWJ4",
  "key19": "5EfZHkgAbcrTy2QvBQkJqnaReidEKiaUh6pfswRoZhRwGew4LKXN9SAjCg2YNfUGzwWWfXRWKNqY5eMtMSYLy47C",
  "key20": "2xV2ZZMUtgNHjr7wJfdRvkitDaB3WF18oUquigk5ekJp9NDdznYMj27zXY4BanP9CdAiA8XjihhUmncQJT3csaSD",
  "key21": "de2KfTZ38RuaZiTFBgAGXk8EBARouaKNwoN7NX8aAir1eweaCetA6WyDLHp5YM8yjs2zvERQDK12EBXvxgHpSvW",
  "key22": "66qeJG7ysottuLmQPGrUUCS6267Vx4hz8Gc4FrWkfJoDZS8H8YSWZfZRtwcMaxsWGziL7RU8aWyF2QnUWvev4TmK",
  "key23": "257rTSLJrimpUBcn5myMFYa387FHUiB5W63aA2zRfJP35Y1EjTLoqhnepaguaD2HNpaouFRD9hvPoGucrDwQnzbc",
  "key24": "5Fkh3kbhziSsF2XyW3wrHdyR8io5vQy2EVrKwCXMso2EVpKZpi8ZzvohDqpmb1xVAqStdxPFiRDdW5BD64aSAEqn",
  "key25": "5pmYHZvp15CY15cAVhjXjTTRQVHvw8DAJXVVSskYdXG7meLdeRnQG7EDbDV3bmUehrYm8SqizQpJkfuyXqsHqi8J",
  "key26": "52QQfvkBpJfkUGChkFjshEvPdSqzFNG9VPXbUT1Ln2WWuRavw1cqJzUq2eC8PE4TJFpTK3RpFm1wKhXFTFWY6Myb",
  "key27": "4ebtSnx3G9Yu1P3SAMpbyL4xBjB7NVEuzKDL4CWkV5LYrQrtPgWjDMNtfNgn8DJQo6ABLgoUVyWx6yEc4ZesYaCA",
  "key28": "5iPe9xAWDRDKrJzh5ySvbXtRDDofy2XdwtiqBCjTbxR34zxNjRoNd6oEzFq6MbMXG6hyNFCCAaQazi6f8xZqdBVr",
  "key29": "3cgdVwSu2xcC8iosDFdhQ7fkduPGjUcvkXkDeqdeE9TDYAdtmvTQ1G9Dn2XVkUK668Exz77X1GDU4UB4XsCXhvUP",
  "key30": "2tdYW8b3BqkXFc9kGFpMzpTDfXXKn7GdZBUMJ5Ht1UdV5cgtkz8m76nNoAXj5rjYVeHn3gsG5WVp1C3ci4TGuqA3",
  "key31": "5fCdy7Fgi7N47K4YvQthmCN8LTQd885ora1B43o9XWKGz3JgccDYqN4txkh6roNNJPgpW5G8Nsr8N1r883cmZEYG",
  "key32": "6xfGwXyauacNmQozaJ3gFGtZtYpdMFfDn95KL6hYvMnBPioRbSKUmRNajXbr85Hmfs7oFpfZkJhESTVmkfYZp1a",
  "key33": "5BL1zdFqQSQCyxVFSyi6KVPEF9ZjZWCUcF9WQMvVhaUkUg9EXmmFM3bbPDFZy4TRiuqu9uELyfaEnYxMjy49VvXG",
  "key34": "2TPAeLt3H4ospdFLkK9kP5jQCVMCTLNaHF5Cbmpm4QyVSo4JyaVozb2VzYayaUsNCTDMNKhKWZPuTtLy9opWH8PU",
  "key35": "nUe74ukmnUQX9FFkSmMqvGQmBeQ12UCFeBnShAoUprusKoSW3JQnAcSDQWKzuDPhQpAExxB3DMLay9c3CfYMdmC",
  "key36": "4DouTaJCnDTKUzzrJgiJ7QQzmJfT7EeYrCMzNHnZaygk1JMee5AppTy6H4r6FDtSdHBB7Pg4TQWkQrW2RMzQYNL7",
  "key37": "3MWWZz9AsjZQKJRZbUoMpMaBx9nT6bRVmYLaEYhATPnBkoAo283z8xovptkJaLrSziUBTmryXmpqaoYXRX9puUNs"
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
