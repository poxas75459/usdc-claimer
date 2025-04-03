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
    "2Hiazig8VWbXoAnBiR6xd5jXyyX4xoQy6QCaLuAGmwCcSd1q1Hm41AEveZ9SobAmVBZcbvxt8mUrXq3NF6iepZvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YeAPC23xD74k7c9hGNs2a8FbnkLWnjtgUc118jebrshxmoRY3Qvw7NuCoYKY6HVxHVC7YmjJ3Y8PmGnD7LLU7e4",
  "key1": "JxtfSbyzs3UpTkkFfTfveiUPXtdiAzK7qrD4M3Dqwxysn6hg51hmxRXVbQ6S7qX9cot5mxM6mHibJEJM1P6WDZN",
  "key2": "2EU2cr8dyvpbM9h9yJ55Y73m1RDgYUFzEDABoweyYimm1GMvGcG2UeD6379xunEbd4Fhfaeq3jopogRhZpvXZqDE",
  "key3": "29uQKq2vXCw529aabUJBEZFhB4oFnxBaEapFDXMsYFo99fxtxBpENZaAqU2AWtXHc8Y8TdfDiJ3Xm1z5rcbqqBUd",
  "key4": "2NRPAb1uTwkbbRz9ChqA1zqHe8bsz1TCWqaVbe4KA3J1NsCsNrdiTQi5pFh8omK2Pcz3WdBXzYMMKhwZa24kjsDd",
  "key5": "3jqAtDV67HbvEXs2RmRCCq4ph58P2TvNePwPo3GE9NyXfgcpk1JkW4V2DPLU996pPYAYrjuKrTuBMPZJQ1B1CiSK",
  "key6": "3j83Wm41N87DNzUtQWy9UEzQiXTmTCJiCz8LG4j9rEJaB8K743rjXUYdsYRMwPcjPPqstbfEYuVqABmTjKg4oqWD",
  "key7": "5Rou5M5TPwtq8modEJRbqjMByPnSpGmTypmLGHBuNzb32u9tttG81Fa1M3uoGcBRaQv2vKcqMmNCRVZnJKBgtA5k",
  "key8": "3tFFiHMVAcsbWzG3YtyugVKBDrLA7Rtg2RvKu9QrwdxsqBjWgFcF4NhSs2obckXPFTEZyj9b9jiRXWteT4VSDE96",
  "key9": "3r3A1r3SJgpARht1KuoqtXDTHrpUAJnNjtm7ZdKkhUmpWNYpEF4QQn7QQoWGLeZ4n5yzXvR7C5CGjLWz6XcLhsWb",
  "key10": "3frcNGdNA5dXkcgUCLunaSe3T6ceXwgCm2maHZdWk8oRYF73KLYJQfRkNNBgev9jNVobcy8EsvBPdWbJqf63HJ2K",
  "key11": "5BpjSVPmiqY6sTe7fFNXSkUEPoGv6r9LnmKdnj7Q5GNAVB68Qq4YDFsJDwZxrabYZV5g4EoBXukZquzV7DukMBTS",
  "key12": "2HuLMi1Wp7S4hvvuf4cJe4nEv2syrJTzAgw2VXr5k8BPWdjEGiZHNHNZN5Y9i6rJsqBAQ6tLPdM49ztZfW8J55WS",
  "key13": "5ShCBnWjmGKuv2tAysFGeJX7sybGEkoy991MeiDwZuTpxwUjTh8pqU257eNcpTxWpmCSM5UuyRfEJ5FF5MM5oYE9",
  "key14": "UjhYoTXU8o3V7KT9xUdDvNfTSY29TEQZtSAJUM72vnoUm1zueoQQzKwLNttLCAFRR9KTVmcbd3qTrouTioRM4Dc",
  "key15": "5yeAJ9x61rZe4BvqiRBdNbFs7RPqEweAvjyxpw5Xe81zakCjqSVQyqzSPekcqcQxioK5NeZ6xb9aKHFi1DPw4LLW",
  "key16": "27iM3sNdc9NpUL3SHq2Y8RmXz3Yj6MEVgY7BUYKZazAtWLRLBhADeFqn47Ewz1gX2hKFSVwvS44WFkCeFBCMrRaB",
  "key17": "3krTWu1XFNv7iwUGKiF8btL3qjYFNWqaoWaHkNPWwkBGg2z3oLwgfiNdTRXTriWG7iUiwgW8V8kvuza93uaaiWnM",
  "key18": "3EiKfmRBaeP9Xcx13Bovz8HdheuqXS64EayMBo2ZLqQsEckHq9Bkc5Pbi33svuJBSiSQgBXK6kRs1sJedQ22JhTe",
  "key19": "4W9KiVTnmdKJMSgLnZ67ZBvncw48kwToSHZBgbf4HKSzw4GwvTrFGDcZ25cLMUp61CptRfhuEyQxsaDgQqxDZ4QT",
  "key20": "4vn7KFU66MdpnQo8GG54jZDFw9PTnmj3VT7znyVdZUeCBxtan5qJNxgy3vvRtruMVnBxAVRkZNyewkbb1R3f6HNq",
  "key21": "49u1GwnoszZUUukiMpVB2DqNHijHEuqA3X3pxZF4qBg6B3gcDcb7wutMuMitsqpy5t6oZWEfcmCEzWuhawBV8SyD",
  "key22": "UGK7AVjBhuu8AYYt6dLonFKHHi6vg25SixRHBD8H32h88Vp5CxH8f147SiZ53Sh5qAtaazT1WxmuvY8mqDCWZwV",
  "key23": "49mKWUovvXswnRkzJ1QcXzL4WCuMcX6ob799bRYoNHypmrXVCULHC46rVGAvaSZ2ZXne16rdp3zkzcaPygYio1Gm",
  "key24": "5PKWYZ7f1EQCpiKz1evHixsHD6nU6rimQ93peHNbQgdebLNaKFpgbsy4yz3V2sopn9yZXqJ9qQTrzQXtpfeVuk28",
  "key25": "9pv16PG6W8nrFuPLvxzA9ypSABw7n52j3zqgdma5cWtPJEnGcF5Lk7RTxiq8we1JNV8Sb1A4d5i4pdKckvGPhhE",
  "key26": "2KtLbLp8d7xsLKp926vjv9ZCJKE6uJ9UKg8589gxc2M4njwyWdZwx5HKE7y6tvBwErYmjj1tXJZXPyUHDezezaNs",
  "key27": "3qN2u1QA3A44W2i5DfGaCF6tEsiru9YP84PPq8TiLCJzSfbmC9VmEaQSJCCntemAW4WGG412Aarke3DfVnwxngCN",
  "key28": "2617u7z8W6XUn37tK8Lf3DJH1UbRaXNYHX4UsgJhxQjTLMaWgk6GbSzEMC3dkwHs79dihsqmfMkufoPsf5EK4ibY",
  "key29": "3jHw6ze2mJuL1bfDF11PjLLusCKSVaoG8d8TK8rHrBTjBP8HqeGTzL6UEYDoKhTBMBdXZtUvM6gcCSudzWPtkxHH",
  "key30": "2BEfTtJcW1EkEsm9w5uGNF66ZNc55YUL363KRzpyhDzkaXDjbCw8ywFrwEANffzie4DWeoVewp7ZNm1tN3M2WLqC",
  "key31": "4CisbCmUbcxRngekjEDhprw1FTeBizK4FL6MTDMsxHMxryT4KU11uJkNJkyviMEFJeE3X8KK1BmyPXDzfwTQmJJV",
  "key32": "2bkaGsR4eP4wymPoAxvxhNaqSL9XZDGK1FVmLPMvStufWCde84oFX2qekpGbFV1ufqfjcgoMgzyqbhAhdm1KSQYe",
  "key33": "6735qftpwX79spwpzsKb5anBPbG1Z94ZVZU7PXWkJ5WEThKeESe4y3mr5Y2BcY3ZETFCdgz1z5MWQfU9Pv33E5J6",
  "key34": "5XLyn9NsvgxA1AAmCvwVxHbiYbCjhabnRooBAp7GkLyLCNqWnZF5XK716Z8hTw6sJe8AVGaYC3u3ZsbRB1GaPUjo"
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
