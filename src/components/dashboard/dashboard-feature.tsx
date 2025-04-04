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
    "4UxSXEko6gN33nm3zx6ypco5u1LMiVVUTVvBmGXNuDE6H4Wn3VutpYtP16U2Eo5QaDRGkRYqQR7A5QwQ3M4uka67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bwRuwzGQpBvQGmuJfyyvBTJ2tbr68Aggh9U6Nin6CC7g7jH5Yj8sDvQLUJSX81GJimDkdta9oNtNCw6x35xCJnJ",
  "key1": "YG1GPNi6k8zCunKCYf8JX411numKGN9mbPus2qQVVqdRxDnUE3Yf6U6R7wWdAK4T5hdB2RqUzo5Fs5umNogzFvx",
  "key2": "5H1WMzURDXSSqQQwnpQwFAjztbHFxCyF5ZvbkhS5DAgajsVdgGrZSVGwgEq5gRtyC59rhbaHnjVsXFjVY2oMUTXt",
  "key3": "3XzXgfoieqcz5977oC32iZyZCN2Q3j6zp7Z7vMiibSCkC85YvwHbuYnBo1obHjr1FvaPgh6M8afQGYcy497MaDUe",
  "key4": "25TzCK9DPrUZ9eKrNBUrMbNGYe3qaKBA2DbqxPiic4L1osckGdLQ52jr1MY9NycmJN2tu5GNuxk81uc5QX7o77Pn",
  "key5": "3ZLndW4bjJK9HHo4wqWCCwBXiLfLrYZU8kDpWbfnuemEJ2sVpZXE2L2utnN1191EGJqXvhdALwKAYAFpQ2Uiz3Xd",
  "key6": "5mj5RFQsnwooFUH5PUygsu2ZbaW3i8N1CS7PijoM6qkGFfofDyEWGnirh5sudH8MpRLHX8TZG3pQtUyjUWbiqAdm",
  "key7": "5YWe94N5sVy4HuU9ZCyrmVRr7uoMTSHTxhQFTR16RqV6iKovdzGuXfwjizv4LPY3WoGfNcAsmk4sZHiAtGgs62y",
  "key8": "Mr4e93YTa6ebnfrE9URFVDuo8dA7qpGWFbPBkD5Z33Ksh8hnQDFCLK1ABt4CFTQMsbnwU4qFDosmENLCJjCxE7f",
  "key9": "4zmEhwDZv35oqXhB6wUA61adfKP45dQ2JKPceLgbe7spjefjgKfVp2t6Q9Xcy1HLQSUCekwX8o5yXRepX1SN7UUD",
  "key10": "2o8g7y5CQFxGA3KQ78ng92fjuWHNdpMN5XTcLWveJoWAyxJcQWwp3GcnJpGSRE1HEmkMsapTvzrQMnUW82avP8UQ",
  "key11": "3SGpChdvBoXnc3g5tr8E4FNkSxxtxDwwD1kQGXMBrfdQwJ5ZPewQwUPVTbBRqi2k6KAJNW6S87nagbRudrzT2Sem",
  "key12": "2GVWmDiQnMiTnBYmKkghmGVa9hBEV5VSLtr1ct1yfRhyGKzvXNtSdjxYn3nAkS2Tm5hCYrxSSHUXmhGUs3RwyZit",
  "key13": "5JmLJNXPkf8UzGRJ5jQEZkVcHNXgQfDdqPh19XMhgKSiSKP7FKYBfHGQSNJXCQ2wQL9hTKVSmBbfyDzvMbmYS7Pd",
  "key14": "4HY1LTFbmZfV6vfgkKozEJ4AEKtYHf83TTtHMABsBwnHJXgeg7LSowFzyDCJGs4wuff9W5q3jtfZZWXQnFKDncEq",
  "key15": "5CMtVTBMdy3cHmus9MPJagTgja9XbvbVzNeQsL7nGMijuN6gvVi9FihMqBXLD5NSLNsau8ocYpsRZB4AF6Ra7g7u",
  "key16": "3Tnr7LPD5fdB7SofQUtY6MBUWgeBcPBQd8nHaYcUBxQ3G9Nptfq7bbfpuSQHTNqPLnUC3GpPpArq8zWbHs254HiU",
  "key17": "27t5gvewNughXs7BwQAvSYdUFMS5UzL1uVyn3TVPkswfgKhRTdJQiL5bcYr1KVsy2yjHZCwCSBCR1oQyBmQYiZ4U",
  "key18": "2gKTgEvdj1HfK6su4FrF94TvSYgig7BvQKtu1rSzbzqfFB2KgjidNrCfVGE5cn5X7LHntZ47USnX9GQip6nZrHgK",
  "key19": "2Sb1CaxQK5Hzw3Lfphk7YdHJZMniZBpGVzQZXicBAQgZHqKA3uhp9V33uLqj4dGqazb24GK9q4ftfcMT95UaUmPb",
  "key20": "4Hs6qDYUiWe5LX8yrz7gbXqc6k2ao4e739EKWXqxErS4vqqZpoKo9x6YrgVHFAT26tA3zf2Moa81Szk7WntHHRDU",
  "key21": "3Pdi5ixMyC4BWeNzgngFjH3DzjhK4gRwdpNfJLkG4Gnngwj6h4N4Yn3YdYhbGe8e1JQg2tRehUetf7JP1mXF1fbi",
  "key22": "mRbgmxDk9pjqH5G2AP26QHbTsF4neexv9dTX68QRnWV1t6QUrkrz71vzbsh7546vYvmW3FGuYhZZfc71mN1kr4x",
  "key23": "5c71aZgPF8AQgaHqvZfmp4LJLE7RpxKjRfqrLTXjoFVaGv2Nrg34pPLgP5hW9gVwQY7rQJoAVySAcNy4m7C7Y1gi",
  "key24": "22MkLJCpoHfVipVRAiDhv8j596af5zXme6niTcSf2xsHd77SEJrDk2JnPHepsE2Sw2xcyEBdG82vGDzMPnc2aPn3",
  "key25": "3W49eTgyAFgP16Gnqf7fNweb1hkkhPwYMVH1AMtDApwGRBiYMHxnWa1Kdv56gUPfgjxRuL1zSXVBWVDsby8Y2TNw",
  "key26": "4Mf3TQz9DX2Mf1VdWTg2QaSGRhyJgDtZW5CuWb7xDr9HxGQ3v8BSqAay7zMPgwT7pkJ2omEWizKXdVgu6YY7GbfC",
  "key27": "5t3GptqMatuLpcGoyQ5jUffExoTwiZ8bX72NMGzpdiBrFRf2Jd2zhCRrB6NNrHRdoJmASKqxzsejCHAR2Y5L5C9s",
  "key28": "2h2gXyXdXzMF8KRt1CifLaHLudhs2e9tMDHhvbXieZ14Zd8Aio6uUD3Zcu4zknabVWCkZJuqUevNUMUYKQM3STtD",
  "key29": "5r97WXKeGav9TjTYEdXA38B4YfBHPQ4JVE7yr1YBzcN3J3QQCoefmeHq6p4kjJ69iiVdDhq23s7z7szxZ38QWyrn",
  "key30": "nn5W4wMxVnmxfscjAQNt4WdJD7VxMntGSedBXVKzbd5Ztf2Fr6KtYVqkG7CBxxugeN2XJ8fHsNArSiaVPKAJptQ",
  "key31": "2d8CyG7z4ySq5WbwQKkqbKNqLuND45vw3ngGWaQqzLCUrB6oxECYSU2XYdBBwfCPT97zYjeB5jGfe5Sh8cERnhD",
  "key32": "3fPyRS8ncYAqzoEe4nbmffEy5hS7uDbXoa5TRBHSM8frWWxCLYpSvAvgB3AaN7cepxXBvf46R9a5SXSqWQFifq9X",
  "key33": "4oBYMh1R68UC7ZTtzjwKj47C2RzoNiS24koDCawdd1HPsvZMJDGMgYpvtHwmX5oDzK3LvBSTrUjLcv47HU7jLE81"
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
