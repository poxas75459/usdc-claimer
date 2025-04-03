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
    "4BZAzVXsrXZG8ax4GLnFzPXKQ1MfnAam8rdxLMQzmieWZ11FnvCtouu2zVv2dn7hyRnnrzwjkpsbjYwfAuQkC9tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xXTSaRHNqZmvViaYZ2etLj84EUjFADoykjqrTgTLFibPJdJd2TtWVACoSmSXzsCbreW4SjxKEEmHuxj1ijXUkAi",
  "key1": "2DtEguySUXW3FXxVqFiRyUZP2oFdd3HNEPuB3zvv26VjhFehiNc7X5xpsUvrMbLCiX827HJmNbPnC1u6biwdLEAj",
  "key2": "4m2MxFcPnCmig1LoptjLebYh93PPNrSixevC4JZVN6TFA59AYe9xGoZ1X9h1A3mYfAFbLHxqVdD7hUjVGYZjEaKx",
  "key3": "5pa43pw7d1hmkJnW9L6fuPnzq8dQx2YU6xwPEyQ9Z35APxRYGFDemgqxyK2KEDcrgBjFGmBPLQHp1uVaRgjQt2uG",
  "key4": "48pjnAaT5raRtd7UW1YStQjtX3NwT599Ht7DsGzs3n6eQzGXHYEezw8xVT2APySSBb3HBXM1ED6pAkTHqebxhqjz",
  "key5": "N2Niq3XuYD6zsUvZQBXkd7nUnebhoKDvv8aqRTxZ6kVDKYCqaeaDZVEeE3w2LY74BcS6rugZAyBqgyAtvTQcDHy",
  "key6": "2v9eXVKdbwwSeJt56HCt6mkGBwXPbpWV32F5gXSFkGZodz8RiQ7NhFwpVFgTU3yE8SWqM2GkuCwEKCsz5Z54WTN2",
  "key7": "2j9r7A9hsQyHvDn7fvuxqVa5aL696v1dmN6YRNG5zZNPGKES55MdS6MdNzePMD5BRQ4KfiVRfQ7cLuBxM47ac2rH",
  "key8": "kag6HVCEizaKYWevW6xXiwir1z6Szp6Se2ocFYoMEAtziXgJh8c6jGtcStWhNiFrNCJdBWs9goWmeChCZ6abRPi",
  "key9": "67cEe24QuE1PKa8HtSiHeSEjufCQTU22QEz5YsKZ5bXVg8rPwP2fR784XeDhRHonBCLcW12SmMxcP7UqZ26uMFxk",
  "key10": "57dsyTybEoBeZZijejQGCNxFjaNQYQfBC2QUduxQnc3j5a73jdHK4XFatwCAF6x3Muwx69CyMTneU5FCxCSmA1gp",
  "key11": "46yq67SQUB4dz7azZuZLKy8a6y6TVwgepi5FA7Fs3XxwzNMNxdKVG1ivPJeE8DimjLT6VpobqTd72VU58NvQm33C",
  "key12": "mMhYktHhiuf5LoHcXei4yVGzwVdX8Wosxi31Luo5Q9qdkUzmFY3eDXLpYBLZJByqequNrLba5PBhKvC8WoXJJCN",
  "key13": "buh2ktE6J6w2weShphDkYdkD9v8899kTkeCvJUPG7NZqxHXtoYgbhAWyT4hetpDLeo9KmHEEHpwdfxskKe6orNv",
  "key14": "2nwmprv3xjhLFYhqfpmVjjbSfcQxF8YGXKw2XEgiLXjRxvcaejt7u1x361iArurnSQEC7K7to952V1BaBnZAEGqM",
  "key15": "ST5yd85RswiCCHvJc1B4fY3rn1o1quxTQyP1D1jbPVbJW1nh8CgNEV9aqnyKrXj81VQ2o95cFW4QA1q6hwvNDbJ",
  "key16": "2dSoRHrjpwVo79xMwNFZxEnWJxsmpaCCHiswPX7ekbbDhgtbq62HcsNf85Q3XGZwXMLSYeEpftEC6z4RJEZpYMxQ",
  "key17": "22HfMr5tVcFWuofMfWcxTSX1sebNAw8TvBCL6MhV7hWnxhs41Jy3aPQu7G6aquqq2DBFrjakPMAST536TH9R8h4s",
  "key18": "3g71tH5YRuJGAazuY2GuyB3M54EKw8fwFNvhMEJZtx8C46KuTmN93uJwum32VwY58bzcFgkb1B9hFekFv6rzyKpG",
  "key19": "5TpK52gdAnGfddTSMB9CaFkSeJHWE8q6bnAi6kGiqJewhimnpf2kSsAw3cgZn3yYeWtzyd8XjBkz3ED2z1TJFKey",
  "key20": "2br2cB6rj9A6wULyMRGjwdwGZbCnu5gxpBASaCDcyJffxXEtHPoJU6c6PjUpMb8b9hHJ3rWfYYWezsgwmUsEjUcG",
  "key21": "xQPb3D5ZfA6kEnu9JwSxnEf5wju6bVkW3nWtYaNkqUF9L3r1xvgEAkq4hLEzcvhAkXfe34STyn6AHDNYAeZFTgq",
  "key22": "5uCJ7EDgNpUFeWmXvG69NFCdC2eHF86DkxNsGJp2K5yQHttTZm8PS3hnrTQ2D1rtsz2kpSCaxFKkxq8dZx9mMzA6",
  "key23": "4a4ub3KV5JjTWiX6EFGVqvQ6T7yG7bPHqmU28jfYAbE9AmdHQ9arsgNwoxncRxJeFPaYKfHVv7LtQ1DVaAPsg6JT",
  "key24": "31f1LLswC2FBwHXivEjoWGCfYB782ADDXLQ34J2TvXzXKzNN3U8EbiDZqowajJMnGER98vP9n3NvMFaSr9gWE2bY",
  "key25": "36Axvd14MnSmT6bzhpkWnuHJVc3Sg2ohL8r9BueGPBDmRJuLqru5T14jZfWDqAgSVdnYSiXKj2dYRgdP5s49tT4C",
  "key26": "3Hej7vnhhKVYSuGCqSkQtqsxqtVoSeccnJ1hnQtHb4cXbrrhRkEE2zTfF4azb7hiwdvvQyVJ9sKDCFdQUz9FVeqn",
  "key27": "Rz34NU8khpfXvqDqHCH5j3hmw5dEy6htW5CN99jv3AWxAPDk4uf4YK3GErhLtDxdrh8SPqpP1zoTLsUonh7m9iF",
  "key28": "3oJuBU3W1kAerbfe1adpmKPHqj7FWq8YM7sk6PprwCh4txH7envBJSJk6qBQK4BAP4NpWApRt87naRGSrLwNU3ZN",
  "key29": "3HiBaCXEb9vwHoP5Swt5GdkbXHEmiNBUhCRJJrXpcLQZBcvYFwzkwHV1uW5JvPQYWEQHYpMmfEKXDo5c6j1KVDoN",
  "key30": "357M5U6JkTo4HtG8aKBrAF4a1ZSfrNNK4qn3zW4WGWhut5heqgh4JTFXT1nHJK8EgWj1ej56EzYE8gARffMuZjXW",
  "key31": "5UgPAmBWtyE3fA9P8GNLVkVU7HA569XQ7tcQX5ZBVqDcBG1kN7fHmKE3oQ5E6dmUYHtSX1428NX1RpZZHSN5KE7A",
  "key32": "4o4hm3twEWW85SjMHiTGGhi1ApwgrMv3xroAPuK7mF7kXiZuFedPCnX58LDe15VCpCvwCg8PHM8EPHQpa6yGo465",
  "key33": "23qjRbgJx5NjGxQFsdKubMqqAEkja2hFAigjb8BMZ1SHrawgiVn5YexJDhctstF4KgnBYA8jgCHhVv7FtQhpebgt",
  "key34": "55jL6yPz91RYzXgxrXramFF8DPVam7UKxtC3dEZCTCo37a5qwje2NzjigzMwVmif2PhdGakdZafdvzfvVpMo8L5F",
  "key35": "3GKQHrNj2qcVnoTjbTDgMZx8FvupuAVUCW4EcB71vDwLj3Z6xmaSUWXAmJ3UWq6TdUWHcER46bpo4Lyd5ifQGCtL",
  "key36": "85L9meq4hQh6et7xPk4FHrXmNfxSvYgk2CPDLWw7Fu44eWAMZGpS7GaH2VoAEq7rJQaxsw5WzjcPCXYtguLV3Ew",
  "key37": "49U3V3kcaaecRRY5yfpjREYpwWdpD287NbRi8nyRmomuW9EiBWCJDpXMprU2HRBMGsCgLQ6sPTRNwCCYWeUCGbyL",
  "key38": "52nBw1wZbpZpGakERHbwifcBcqeUwNC3hLd7AqHwSadCcuGnLfFZZPJYrHUyvN8oN6Q4HNNbD5jo4fnUSJmQeGZZ",
  "key39": "2GuFBQufNN4YKXTsvPaqe8wLUYBmkTVDCNmAxM1rKEqd6MoD7SyLzYgz4VXJgVWe9MNSrBXyzbbRZdPYA9WcFxFV",
  "key40": "3LaYuazK5t72aMjwNsk8cgjeY6rhRkzgMqTW6MbR25FgadxG8GwF4zga7XpWqpsexPm85FEnKGt52PuwtQQ3WASc",
  "key41": "JSAzgt6so74TQisLirCprcjkVK69nYJ5ZDeRzPh9mUfUaHcbWTtRHHjweZxV2H6fBdENALCmJ7Ej97XVF5P668K",
  "key42": "5recWNoT61r1stR9WdQZs33LE2zoEvip92jNmyukgecgSD68VNv3Vu1fJng768F988GFwZE3k8bxYwUqrhamzcob",
  "key43": "5gNNziNwRuFA31q1jWx4SCqrsKoEFheFAkTYUvtzEA4nU8Y28RnyRNxcFdtpGiFZe4YNWGxyaDHAgZE6NG3Eni3z",
  "key44": "3gQbi5np9MPL2Vr9g4xqQkKr6iHsvd28R7U7ZQrtE5Akrd54mn8PVqRgXzXyNX7sUDZjUX7md7cw2vFpNYzLuazS",
  "key45": "5sMJa99YMK1G365suygBDA1Errj9tUZKENMWEjyrNmWKR1zyvdtrXDvdfBidzjzk3PsPttdLpRbNi3SSYXigqYWK"
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
