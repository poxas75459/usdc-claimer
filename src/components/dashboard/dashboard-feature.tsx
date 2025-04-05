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
    "4jivdccRVyQu6TEpe9NddCrX7tjDEsEGP6xuATE61kJ5UTEq4zPJmBhb7wNLsHiotUocA5n78Fn6PwBcQFUFJn1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LbmdqviJwPkRuL1zeDxSX89k5Y9ngkA6dTEsE6Hx4Egpfd9PraVA3Bs74E4hV7G8Kh3XuVU6EQ6d8ffyzHcvBG2",
  "key1": "5myRMpqxivh5k1LGS9FjE5wEighkWhNoXTgkXx3LQbib6PrfyZzjqzX4HA44F5pEN2eDrPHJnAvRrLkMcgWyTA9i",
  "key2": "2YMcDUZNSqn8SMycwV7x4aeQm3ucywryTFKRfxrKo9zWsUAWpbnGiePWoDTpUGc7a86xKnwhwfoy6rJTb43KVSaN",
  "key3": "4iLM4K2CXXvJwzpJZg8kkqUbPu4QjcM9F7hYzDvqEgchxvU1MPjYjddHGQ2sh8cDvB61jWLex3s1ZjPKb6TBU8Yb",
  "key4": "4dN7R5LmAxLgUu3erNZRuwAc9GUXGWq9PJEdpn3b7wzRg5Hh1wxXF77HmyNzz6LjBCS94BitmijX2ZsByFVyurPK",
  "key5": "jsoJtrLGSxRScBGtr8qaWL8f5RztYbDdPjaUMo2XBLqynj2qsYCyrg2s8vmqsdvpk16XXvQNpNuBUeP2zZhS7Ax",
  "key6": "3ydVsJeuHvQRrULyeXuWvVGrHof3pSYsNiDDLCC1jMts5WqyP6jNFraTAV6pyD8izdhTmJG32Dwdxahs16z9TfP3",
  "key7": "3grBaTK5BH6LCbPZx6pJxZdf2D8GRkmoJvbLs8vNfECqadUvshpodBrsYspKfKZre7H4iAgT5LcQEq1pWYSbPGCN",
  "key8": "vHG6c7ay4PREEzD131DSwQS26aHkjy25pfYnGkDGZpqCnWiBs3KT2eSYZyER8nT2y1YsEUpCncg6FKtLd7VJ6Ei",
  "key9": "hTSJDFNg3gsGwEjZ56rL8Li4sZcrZ7v4KB93hskUucsaFVRTQkvYXV7yYWFRFikR5RJ279T4Kq3WRUWBG38QRTa",
  "key10": "2yec1iHpc9YskJSWUsqrC1eu7djJ9DnCnDproHzYgwr1rKL5od4fyX5NNxbufWEYURYKK6pSNXJLL2V8QcaaYKeX",
  "key11": "4gzpbDoUhLDwBAkMGE1aLKuQHjtEcUGivwvM1m8fsuxiZgJuewcV3dtrSjAFemqE4ggqcZqorVedpUZjuVC7Jt9t",
  "key12": "5LkjyV4m8x2EEHxffW7q78EVXKud2RJMrjGovXHHi1iNJRnchr3wRDU4g2SNSuCzXwFXMX3vAFgG9ETt2xNuaX6m",
  "key13": "2qbqgCHHAVUvW2hz5hqAzyzb73nBeNzSDWacREjWdkAypLvJKxmSPUZCFvpaUkLYfEME6VknJFexkJ2VxWvVBGci",
  "key14": "39DVQxqFTfN6ad1dbRjk9VBrwuXhiKKKnYCpSYRynbXAfaneB9fnWPdjpDRFciHY1xqPVxz5rYWjwm1ntv9bRWFG",
  "key15": "3ryAoJiqU7Kxiy4kktvBjc35MZ9kbiFAu9poQwy4DRqxqCKTu3tkd4uSJ3ChPhSpz7LaUQRbYo2ydLXFk2rHLVTn",
  "key16": "wAHtCHxdPCJhkfdVVftFx5qz2bgCcyiT5QHgwnAJ1qytM7AWmqmhALeiCwsBnagkgYQDsn1JcWYnhzMku3k4Lc3",
  "key17": "4Uqsma8PVR2v4TjkAzbhWTJS1tPT7QaqrVj8qRv7o3wpTfbiFyMQJ3nhTRuRnLaTDRVX7EQmC2KajLfvrk21RqhK",
  "key18": "2Y9Cwt4gZici9oM5ejMRUpFasLrixcFaTCXAmmZF1czZTmPhDr7yhtY3bshaDmbkzT4LwMZFE9ZXkd9KfpRWBnps",
  "key19": "3pF5eW1SrQWXHQZHHprABuWAgPChK8nbEXTxm6ieLyMrDB9EWL7xuUjwCG5p6vbvDgWBxxK8XPGfAp5wPg8yajdc",
  "key20": "gr2DWSt7PowWZjGG33mkKnY8HLYtP5Vj4HWcaBaj5uz9a8MS27MzVSMThXEm5sTuKqZMz9nLyGC6z9R2AZpVXe8",
  "key21": "26tPvQ6kULupAS2KsiprQwdULKTd9aJDNWpsVPb12pMkKpdvjuoePMMx2KHx8zhw2EKok4PCwnP4kHDhSWWzBmoz",
  "key22": "2SY3udpCnGk7nLEWz8qGiXjmVrW963zXENoFNGCa92uFLgF4XqsC5TjT4zdjnAi3GojgUKnBwakaRd8aNkxkRaQX",
  "key23": "29kJgXJnR39CcWnykVtBXj4oK3oLbMyjD6JWMuXPX3yhEez6HCAUt6QECXrsBvgpPeKPJnrjPRfGVqnHKBzY4TWz",
  "key24": "2M83xbjDmHemmjh7gK5iUidh7cB2LyVy8G3hScMnGdTAPmqaFCgBYexdG5oH6xQcMQSUrWeCELPGCtoY9C9pa9Qb",
  "key25": "j6Nt2bDJu7twN3ybMA1utvphapW7hc6CPe1cauFcqF8wNzY3XE2JnXk91zQyZauJhhATakkKEkToFPYzBrkTwWR",
  "key26": "NcRxZfiDCWz4QAjtnX4Q67aA3EbKviiFi8yrXv4fxoh5pAc48K92u1BRM3BvR96qhaQ6i5DywGViNXaMFp1Po9z",
  "key27": "4BYvqmJixzy7feDXKzm4pFC45HdGCtTSiXgz2KL6z2Th9x9tf58i7ktV1StVoF7PLTaNLRqupm8W8zvC2FKMZ4Fq",
  "key28": "2bnBeLyCYcEifZSJEn5K2rpvo5zvF96uEMnvLikqjuSYZnePMee82xb4jYiFKH3Fh2vLWEHqoko7YUQEHyFwfy3B",
  "key29": "2pBNm7tmB1fp877aT2KtywSsKX3Lenmdt1GApMcpXAJpzWQrhEwtTvtxFVySoEhVoNEyrkyK393nyAZH1BTsMwR4",
  "key30": "4Re2ntCVzZwp7WeTPGojHs4uqtwnLN2tPcLdhw9Vf7pfcW9cjimZ8B2MLF7aWa9fQxXPKpNkuadeKRn2tpkMTQRW",
  "key31": "2tCmmNZ5jPoUUE4pVfqDR9vKNRrGTupCGwkAbYm4McLJv1QAnY5BZFGwG2yMxDurT9gL7MX3Wns5D2xjv7ESErZ2",
  "key32": "3njBoaBhks3nsdNjxYmFKaSGWyU88pdhxipbs8SZ1MQQZ5zxDN4Juz6BAS3eF7Xh1Tmij9s5R52NiEP69syCgMCm",
  "key33": "5BD3GJjworHzvQWwfAWxHeiig7zxqjpnt4ARsWsidn2dpM376vwGU8qtNitws2ya8tBfeoNatM7HGvFFZmjc6v4U",
  "key34": "4p6CrMQvXL3fSBv18fdX1AgZ9NAvhsgdVAqKb1M4Vrr8dn4GiLZKUr9t4BubGnaEz1KAWwTb9jPq2yUTNbLEudJS",
  "key35": "2oWqfKLts9cfcriLSke9BZzATZM3FDvFHD9yyjaT6XRCwqxix2hKP1hJhttJHCpKzzkbNne5We6isaLSGe55Ne7y",
  "key36": "3Axuof9zkQ2mErxazrGpAcdPDVM2mhwYUdwEkj5FKvw5cw941wLqxyXXn4RCbeyJ3qmLUVstPDy4XbTJuLwZjNzw",
  "key37": "2pdGYwu4HBv5jjiWbUpGNWtGk4BJdvXZjRiUEdgtWWcBwtz8tLmmfLWEnuToo83Dkp7cE3uR4fzwmeofrgngRB53",
  "key38": "98ao5nEX3dDWWXNzSxmCNhAZLbAzyhVk9cU1DuVn9sM2uJBSGEjVYQqVQEsysXCcCzrSW1QeK5ZvojqsRzdisHn",
  "key39": "3TENK6rYabV3gFyAGhWgBjxUwNbNSJWgY32RZVvB3yittjjPLSWjT7vp1gZAW75owENNrNqAetTaS5iUfM9THbLu",
  "key40": "i3yALLbKz5SCpnQFyrVQpaeMKBYAVuPiYGEBnxzfq8uGNUJ5dTDjHTtTYYyHBo6poUu6rbmtqwPtqHKyDnsUENm",
  "key41": "2KS6oV3Y8wAbh4hMmnbA9j749RPfuqo5hsjYyVeUoPJmhhW8FUhEpKETeZTvK7rJCXatd6nk55gCdZy9tYdkvcY9",
  "key42": "5Yv2wZsnuYyseMHfDUZAU2n8NW7AQUPJ6qiBHxf9NPxxE61aGs9QTu4mqq2obCKUZKzwE5NS9Q9UxBfBJytuPQwC",
  "key43": "5aESTP3kvAYDgyrNuSX7teUcbqbcDC8LkABP2zfkxsUeZhaUNoTdERgk6VQiMPBNBUzuf6YJDWf1hnobRZHBrxti",
  "key44": "2avduefiGn8tvseo6RxKi1QAy8RjUtWX9J6Vk7rZV3gus6QTiybaw15JbnC1fy4hphwRfKLMee3GHDsDrHyULhxk"
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
