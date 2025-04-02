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
    "5Q2u7NxQahFDVduY3w8HG8DfEwFAiBmEVR6vda2PUXARjfGs1GrWpMJhtyg4CqJJCB6zT5tWu1RX3e3GsYKbZ4za"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4727PcrUB1Fdzmxdd25bRzXqtQBRchR6rLzeSN2dC2ryPuXFZbjEKT1qH6bLUotZqSwx2sFBF2Wq61sHpahV4pHq",
  "key1": "3Bg3iRp4pio3TRjTzpbSm156oMfeza5TQaAgbXjfjGFDZq189Nvvwj8WNpS7nvYTN4WG1FpxCSPSRM3EA2URA3Pv",
  "key2": "5dFTwpAQgkAmwr5UcSARX4u6buY2g12KGvsXZTarUKCA5HbC2oNFhUr7hjMSQr9oDGM4XMUC6Kd7FsJUtZyGZr9i",
  "key3": "3pKAr6UFZV8kSqCKUp1tkPUsrcF81HKxKXrtG9k1WRPvav3KYeNWDWoRBmcog95SbZgn9s6pmVLPeokPvQjutN4i",
  "key4": "vMgAUxbYAtmTfevNvcCarxPZTGSXc756BtMJxukoL6zBiXenTA7xXik7iugGG6dhBmr16YqcJvKnyF9Cgk2Zzwj",
  "key5": "7Wz1KRAaoYtDvfYguT2WMNiq6uQr3TxmKCifYnZ4QdGZdaj9UtSJQkB9WKTJgjD6CKjVdE4XuWnxcpdnFPbdxEb",
  "key6": "5khhZQJWPA3PpgPB2KKPjfAFmFMu4BuKzXWNTmyQ8Lu9irBzzMJpqbdRWRZf8HgHvzjqM4s8pHbxCqp4KqrLF8sZ",
  "key7": "4FHkzRX8rdxX8ytE2TBHTMzDi3ikUC76FybR9pAeiUL1ynyk82WxARbpPfu2AcMKpLJcjo3hY1WgpNzpHzfyKPbd",
  "key8": "178gJxQ4Jmc8tL2RR6CFb7aM5Q1rGeBQYbDRSXnKfR4S6L6T2jCEdqPrVoR62JSCtkm7fMkgZJAgH6oGyL92Nne",
  "key9": "2cve9uLs7G5dsdx5536M8bECj8Asd5ns9gsEDby7goUmAzt1C9mjV86ZWfWWx1J9Es3zsTYdA647nDBK2ofbgP1j",
  "key10": "5HgyLZELjhAeyPGVwdDnJbad8hntcgnuis5VPM1BmDksHp5jdLD12AW9gLkNmWiwsFRNbAGkbvrW4A5xwJSdKnWy",
  "key11": "PpuWnc4QxQtQdLYomBTtJQ7U4YZbJbAi7HxxgeKxAt2VZrHbH1RiYxBCdDiFFPB46uqVrbZ6MkMsozdD6RxeAFx",
  "key12": "4YCRSZSh7hEzu3pjJdcoiR2XKww3XhL3WEuCv569fJxP2C7kkuvtRcnkc8NHrSUHfk8ZDKZv5bfUfUVraELVAUGC",
  "key13": "3z9VwXdJfDXt1s4SHTwQXRQ3Zct5g5ihETnj6sbNbmZCHrPmEYC12Nnk5mwGuxxBCaWmFoVqhGA6nExHzYz7aGe3",
  "key14": "4KX5eBHsf3izDt6qnbScLHPHAE5uFhMzYRTMFrquZdBiStqtAkwTCNwwmL1EfMYrzJtmjpbmrXjucN7NWBoYGftk",
  "key15": "2ZL2TjayGFc9uLDVRnpacvavpS32QZCo1WzcFBR9SHqukYLkea1BuRj3tASLEPErctJQ74JENooJogCj1wDWJtQt",
  "key16": "2XXGjcvAuUFozvkVsLsaAA7mByXUj4DziNK47uLHmxfQT85SNkfggXB5JrbNMuXtsgdgmXHhf6PPSoXjAUR34RsX",
  "key17": "36hJehmmQwyQrm1MBgZX4i1vP4BKCEAsQJJni6o7ddzt2ijiCSXWv7g7kaEYjNYQdCLa3T5r9tSQLSfJvvZDCB3y",
  "key18": "37dZLM8E9Qp3wVw6Le5LdDWQr1M5oux2H7LEWbkBay6pjDVPuWvgN4oWpeYmZWdiosuwkzqVXfsa6VFzqokZUkid",
  "key19": "2qEceRtLT7YdYntuioszifVTxZ7DKzaeHDfMzCUvmwGEjvCPtRpvfp4bzWWKD9yGHFwVMdgRCrGUoxb36miPDX84",
  "key20": "3iyF6sKdBeE8nHrgYH3nMWDgQSDfVtnd34MVpQMcJjkzkWxc8x48FS62JriLRphTNDTXfG9yyQuz5XvL7vkethqE",
  "key21": "4xJvVbkS16T6iUftDosGHFRMCDvDUz6a83rNxcGanNeGBUdSE8SD6ioZkdr2nNcxZurfxBN1Te2TeNTcu9TUoZzK",
  "key22": "uK9Vxvq3NKu5ai5J1mfLmUkuGE8Tf8XYDwY8fQpDR1EJ6KtfeuYokUmigkDsBCrgneoWhmnD8BQNUZMekh5L6p3",
  "key23": "2KChcQaqCL4dk91TFLd8wPoHHSSiXJ4sFhZS6KN8sq7zk5YgZdpLi3N93dhwLEy7Zx4KNDGhU8epNtiLFfS5tyjQ",
  "key24": "4bUkajPdydCNZKb52QP3u2yQNVr8VSKDK96owgmQ2DDb7Dv1HQXBMNbX8cAUz2uoxNJVSnr8QTv1obad3v5zrgEh",
  "key25": "3mivfbHesQrnBKoQWgraX8LLMEgNU8S6HCn4vzpgFdnbSc7BTxdCnwdNwrNUfbZhsBjD13wzmgjn8hLyzPQ3CwQm",
  "key26": "5RPBrk4H8m45dYHSrwmWP81nkhAUHu1Qr4BmiT6jaHrSptF8iX3b59SukajgVnQLDWgAsZaXr6vMUxKr1y5rZPhu",
  "key27": "67qLJosfQ4BBqYLcZyWW93qbFqJfWjeQ3PqS3noYQAuPDMXFcn54DNqEWUmcJC656RR9Kj8pinsHAyjN9Du2MTnx",
  "key28": "Ufsp3F3VZgGACM4Q2vHgMX1SBXFFBvyzgaGNw7s9hX8cDehigxmu8o2cchbQv3Z6Vi9WNVtQUUM21NafHTncaJe",
  "key29": "4X7t6eHAL85zz3Xe7bfKAvQyYqCUqvb6SHceMeXtrmr6fPXQ3CHuxitGqaGhuHqLbAyuZLaqUkKxX4LKGN2KU4s6",
  "key30": "5316LzgGC184fYTPt5V2S7NnkFmWe8nd1aS2Mw7cGwBodKVgamUpymW7FsYn6z6cRfo8Qb9ddRyhW79BKr2oWKo",
  "key31": "5hkBciTVDpyst5RTZuugJ3SdN9XDfjyGyoifK2Ekhe9AEyEVhKVymHBm2askHm9pYNxqJikzMEK7FvE8vRN9YmVc",
  "key32": "3xHT5b1VKjYfGP3xDD2NoAgA9juxab6NPRpC28C9aqPwkq6JWVaNCz6FcvjrEcpexk1aisS29vttzHwpqmqTuzQ1"
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
